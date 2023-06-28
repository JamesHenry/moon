use crate::CARGO;
use cached::proc_macro::cached;
use cargo_toml::Manifest as CargoToml;
use moon_error::MoonError;
use moon_lang::config_cache_container;
use starbase_utils::glob;
use std::path::{Path, PathBuf};

pub use cargo_toml::*;

fn read_manifest(path: &Path) -> Result<CargoToml, MoonError> {
    CargoToml::from_path(path).map_err(|e| MoonError::Generic(e.to_string()))
}

config_cache_container!(CargoTomlCache, CargoToml, CARGO.manifest, read_manifest);

pub trait CargoTomlExt {
    fn get_detailed_workspace_dependency(&self, name: &str) -> Option<DependencyDetail>;
    fn get_member_manifest_paths(&self, root_dir: &Path) -> Result<Vec<PathBuf>, MoonError>;
}

impl CargoTomlExt for CargoToml {
    fn get_detailed_workspace_dependency(&self, name: &str) -> Option<DependencyDetail> {
        let Some(workspace) = &self.workspace else {
            return None;
        };

        workspace.dependencies.get(name).map(|dep| match dep {
            Dependency::Simple(version) => DependencyDetail {
                version: Some(version.to_owned()),
                ..DependencyDetail::default()
            },
            Dependency::Inherited(data) => DependencyDetail {
                features: data.features.clone(),
                optional: data.optional,
                ..DependencyDetail::default()
            },
            Dependency::Detailed(detail) => detail.to_owned(),
        })
    }

    fn get_member_manifest_paths(&self, root_dir: &Path) -> Result<Vec<PathBuf>, MoonError> {
        let mut paths = vec![];

        let Some(workspace) = &self.workspace else {
            return Ok(paths);
        };

        let mut patterns = workspace.members.clone();

        for exclude in &workspace.exclude {
            patterns.push(format!("!{exclude}"));
        }

        for manifest_dir in glob::walk(root_dir, &patterns)? {
            let manifest_path = manifest_dir.join(CARGO.manifest);

            if manifest_path.exists() {
                paths.push(manifest_path);
            }
        }

        Ok(paths)
    }
}