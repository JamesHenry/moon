use proto_core::{Id, PluginLocator};
use rustc_hash::FxHashMap;
use schematic::Config;
use std::collections::BTreeMap;

#[derive(Clone, Config, Debug, PartialEq)]
#[config(allow_unknown_fields)]
pub struct ExtensionConfig {
    #[setting(required)]
    pub plugin: Option<PluginLocator>,

    #[setting(flatten)]
    pub config: BTreeMap<String, serde_json::Value>,
}

impl ExtensionConfig {
    pub fn get_plugin_locator(&self) -> &PluginLocator {
        self.plugin.as_ref().unwrap()
    }
}

pub fn default_extensions() -> FxHashMap<Id, ExtensionConfig> {
    FxHashMap::from_iter([(
        Id::raw("download"),
        ExtensionConfig {
            plugin: Some(PluginLocator::SourceUrl { url: "https://github.com/moonrepo/moon-extensions/releases/download/moon_download_extension-v0.0.1/moon_download_extension.wasm".into() }),
            config: BTreeMap::new(),
        },
    )])
}
