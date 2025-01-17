#![allow(clippy::disallowed_types)]

mod wrappers;

use serde::Serialize;
use std::collections::{BTreeMap, HashMap};
use std::fs;
use std::path::{Path, PathBuf};
use warpgate::host_funcs::{create_host_functions, HostData};
use warpgate::{
    inject_default_manifest_config, test_utils, Id, PluginContainer, PluginManifest, Wasm,
};

pub use moon_pdk_api::extension::*;
pub use moon_pdk_api::*;
pub use wrappers::*;

pub fn find_wasm_file(sandbox: &Path) -> PathBuf {
    let wasm_file = test_utils::find_wasm_file();

    // Folders must exists for WASM to compile correctly!
    fs::create_dir_all(sandbox.join(".home")).unwrap();
    fs::create_dir_all(sandbox.join(".moon")).unwrap();
    fs::create_dir_all(sandbox.join(".proto")).unwrap();

    wasm_file
}

pub fn create_plugin_container_with_config(
    id: &str,
    sandbox: &Path,
    config: HashMap<String, String>,
) -> PluginContainer {
    let id = Id::new(id).unwrap();

    let virtual_paths = BTreeMap::<PathBuf, PathBuf>::from_iter([
        (sandbox.to_path_buf(), "/cwd".into()),
        (sandbox.to_path_buf(), "/workspace".into()),
        (sandbox.join(".home"), "/userhome".into()),
        (sandbox.join(".moon"), "/moon".into()),
        (sandbox.join(".proto"), "/proto".into()),
    ]);

    let mut manifest = PluginManifest::new([Wasm::file(find_wasm_file(sandbox))]);
    manifest.timeout_ms = None;
    manifest = manifest.with_allowed_host("*");
    manifest = manifest.with_allowed_paths(virtual_paths.clone().into_iter());

    inject_default_manifest_config(&id, &sandbox.join(".home"), &mut manifest).unwrap();

    manifest.config.extend(config);

    let funcs = create_host_functions(HostData {
        virtual_paths,
        working_dir: sandbox.to_path_buf(),
    });

    PluginContainer::new(id, manifest, funcs).unwrap()
}

pub fn create_extension_with_config(
    id: &str,
    sandbox: &Path,
    config: HashMap<String, String>,
) -> ExtensionTestWrapper {
    ExtensionTestWrapper {
        plugin: create_plugin_container_with_config(id, sandbox, config),
    }
}

pub fn create_extension(id: &str, sandbox: &Path) -> ExtensionTestWrapper {
    create_extension_with_config(id, sandbox, HashMap::new())
}

pub fn create_config_entry<T: Serialize>(key: &str, value: T) -> (String, String) {
    (key.into(), serde_json::to_string(&value).unwrap())
}

pub fn map_config_environment(os: HostOS, arch: HostArch) -> (String, String) {
    create_config_entry(
        "host_environment",
        HostEnvironment {
            arch,
            os,
            ..HostEnvironment::default()
        },
    )
}

pub fn map_config_extension(config: BTreeMap<String, serde_json::Value>) -> (String, String) {
    create_config_entry("moon_extension_config", config)
}

pub fn map_config_id(id: &str) -> (String, String) {
    ("plugin_id".into(), id.to_owned())
}
