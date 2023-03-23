use crate::RunnerError;
use moon_config::CONFIG_PROJECT_FILENAME;
use moon_logger::{color, warn, Logable};
use moon_task::Task;
use moon_utils::{glob, is_ci, path};
use moon_vcs::BoxedVcs;
use rustc_hash::FxHashSet;
use std::{
    collections::BTreeMap,
    path::{Path, PathBuf},
};

type HashedInputs = BTreeMap<String, String>;

fn convert_paths_to_strings(
    log_target: &str,
    paths: &FxHashSet<PathBuf>,
    workspace_root: &Path,
) -> Result<Vec<String>, RunnerError> {
    let mut files: Vec<String> = vec![];

    for path in paths {
        // We need to use relative paths from the workspace root
        // so that it works the same across all machines
        let rel_path = if path.starts_with(workspace_root) {
            path.strip_prefix(workspace_root).unwrap()
        } else {
            path
        };

        // `git hash-object` will fail if you pass an unknown file
        if !path.exists() {
            warn!(
                target: log_target,
                "Attempted to hash input {} but it does not exist, skipping",
                color::path(rel_path),
            );

            continue;
        }

        if !path.is_file() {
            warn!(
                target: log_target,
                "Attempted to hash input {} but only files can be hashed, skipping",
                color::path(rel_path),
            );

            continue;
        }

        files.push(path::to_string(rel_path)?);
    }

    Ok(files)
}

fn is_valid_input_source(
    task: &Task,
    globset: &glob::GlobSet,
    workspace_relative_input: &str,
) -> bool {
    // Don't invalidate existing hashes when moon.yml changes
    // as we already hash the contents of each task!
    if workspace_relative_input.ends_with(CONFIG_PROJECT_FILENAME) {
        return false;
    }

    // Remove outputs first
    if globset.is_negated(workspace_relative_input) {
        return false;
    }

    let workspace_relative_path = PathBuf::from(workspace_relative_input);

    for output in &task.output_paths {
        if &workspace_relative_path == output || workspace_relative_path.starts_with(output) {
            return false;
        }
    }

    // Filter inputs last
    task.input_paths.contains(&workspace_relative_path) || globset.matches(workspace_relative_input)
}

// Hash all inputs for a task, but exclude outputs
// and moon specific configuration files!
#[allow(clippy::borrowed_box)]
pub async fn collect_and_hash_inputs(
    vcs: &BoxedVcs,
    task: &Task,
    project_source: &str,
    workspace_root: &Path,
    use_globs: bool,
) -> Result<HashedInputs, RunnerError> {
    let mut files_to_hash = FxHashSet::default(); // Absolute paths
    let mut hashed_inputs: HashedInputs = BTreeMap::new();
    let globset = task.create_globset()?;

    // 1: Collect inputs as a set of absolute paths

    if !task.input_paths.is_empty() {
        for input in &task.input_paths {
            files_to_hash.insert(workspace_root.join(input));
        }
    }

    if !task.input_globs.is_empty() {
        // Collect inputs by walking and globbing the file system
        if use_globs {
            files_to_hash.extend(glob::walk(workspace_root, &task.input_globs)?);

            // Collect inputs by querying VCS then matching against globs
        } else {
            hashed_inputs.extend(vcs.get_file_tree_hashes(project_source).await?);
        }
    }

    // Include local file changes so that development builds work.
    // Also run this LAST as it should take highest precedence!
    if !is_ci() {
        for local_file in vcs.get_touched_files().await?.all {
            files_to_hash.insert(workspace_root.join(local_file));
        }
    }

    // 2: Convert to workspace relative paths and extract file hashes

    let files_to_hash =
        convert_paths_to_strings(task.get_log_target(), &files_to_hash, workspace_root)?;

    if !files_to_hash.is_empty() {
        hashed_inputs.extend(vcs.get_file_hashes(&files_to_hash, true).await?);
    }

    // 3: Filter hashes to applicable inputs

    hashed_inputs.retain(|f, _| is_valid_input_source(task, &globset, f));

    // 4: Normalize input key paths

    hashed_inputs = hashed_inputs
        .into_iter()
        .map(|(k, v)| (path::standardize_separators(k), v))
        .collect::<BTreeMap<_, _>>();

    Ok(hashed_inputs)
}