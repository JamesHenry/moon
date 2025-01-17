use crate::helpers::create_progress_bar;
use moon::{build_action_graph, generate_project_graph};
use moon_action_pipeline::Pipeline;
use moon_workspace::Workspace;
use starbase::{system, SystemResult};

pub async fn internal_sync(workspace: &mut Workspace) -> SystemResult {
    let done = create_progress_bar("Syncing projects...");

    let project_graph = generate_project_graph(workspace).await?;

    let mut project_count = 0;
    let mut action_graph_builder = build_action_graph(&project_graph)?;

    for project in project_graph.get_all_unexpanded() {
        action_graph_builder.sync_project(project)?;
        project_count += 1;
    }

    let action_graph = action_graph_builder.build()?;

    let mut pipeline = Pipeline::new(workspace.to_owned(), project_graph);
    let results = pipeline.run(action_graph, None).await?;

    done(
        format!("Successfully synced {project_count} projects"),
        true,
    );

    pipeline.render_results(&results)?;

    Ok(())
}

#[system]
pub async fn sync(workspace: ResourceMut<Workspace>) {
    internal_sync(workspace).await?;
}
