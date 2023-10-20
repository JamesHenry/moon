"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66458],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),o=n(37140);const r="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(25773),o=n(27378),r=n(37140),l=n(83457),i=n(35595),s=n(76457);const u="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(m(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,r.Z)("tabs__item",c,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function m(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,i.Y)(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement(p,(0,a.Z)({},e,t)),o.createElement(m,(0,a.Z)({},e,t)))}function h(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(27378),o=n(35331),r=n(30654),l=n(70784),i=n(71819);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,r._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[m,d]=p({queryString:n,groupId:o}),[h,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,i.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),k=(()=>{const e=m??h;return c({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,r]),tabValues:r}}},55835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(25773),o=(n(27378),n(35318)),r=n(33337),l=n(39798);const i={title:"Rust handbook",sidebar_label:"Handbook",toc_max_heading_level:6},s=void 0,u={unversionedId:"guides/rust/handbook",id:"guides/rust/handbook",title:"Rust handbook",description:"Utilizing Rust in a monorepo is a trivial task, thanks to Cargo, and also moon. With this handbook,",source:"@site/docs/guides/rust/handbook.mdx",sourceDirName:"guides/rust",slug:"/guides/rust/handbook",permalink:"/docs/guides/rust/handbook",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/rust/handbook.mdx",tags:[],version:"current",frontMatter:{title:"Rust handbook",sidebar_label:"Handbook",toc_max_heading_level:6},sidebar:"guides",previous:{title:"Vue",permalink:"/docs/guides/examples/vue"}},c={},p=[{value:"moon setup",id:"moon-setup",level:2},{value:"Enabling the language",id:"enabling-the-language",level:3},{value:"Utilizing the toolchain",id:"utilizing-the-toolchain",level:3},{value:"Repository structure",id:"repository-structure",level:2},{value:"Example <code>moon.yml</code>",id:"example-moonyml",level:3},{value:"Cargo integration",id:"cargo-integration",level:2},{value:"Global binaries",id:"global-binaries",level:3},{value:"Lockfile handling",id:"lockfile-handling",level:3},{value:"FAQ",id:"faq",level:2},{value:"Should we cache the <code>target</code> directory as an output?",id:"should-we-cache-the-target-directory-as-an-output",level:3},{value:"How can we improve CI times?",id:"how-can-we-improve-ci-times",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Utilizing Rust in a monorepo is a trivial task, thanks to Cargo, and also moon. With this handbook,\nwe'll help guide you through this process."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"moon is not a build system and does ",(0,o.kt)("em",{parentName:"p"},"not")," replace Cargo. Instead, moon runs ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," commands, and\nefficiently orchestrates those tasks within the workspace.")),(0,o.kt)("h2",{id:"moon-setup"},"moon setup"),(0,o.kt)("p",null,"For this part of the handbook, we'll be focusing on ",(0,o.kt)("a",{parentName:"p",href:"/moon"},"moon"),", our task runner. To start,\nlanguages in moon act like plugins, where their functionality and support ",(0,o.kt)("em",{parentName:"p"},"is not")," enabled unless\nexplicitly configured. We follow this approach to avoid unnecessary overhead."),(0,o.kt)("h3",{id:"enabling-the-language"},"Enabling the language"),(0,o.kt)("p",null,"To enable Rust, define the ",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain#rust"},(0,o.kt)("inlineCode",{parentName:"a"},"rust"))," setting in\n",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),", even if an empty object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"# Enable Rust\nrust: {}\n\n# Enable Rust and override default settings\nrust:\n    syncToolchainConfig: true\n")),(0,o.kt)("p",null,"Or by pinning a ",(0,o.kt)("inlineCode",{parentName:"p"},"rust")," version in ",(0,o.kt)("a",{parentName:"p",href:"../../proto/config"},(0,o.kt)("inlineCode",{parentName:"a"},".prototools"))," in the workspace root."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'rust = "1.69.0"\n')),(0,o.kt)("p",null,"This will enable the Rust platform and provide the following automations around its ecosystem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manifests and lockfiles are parsed for accurate dependency versions for hashing purposes."),(0,o.kt)("li",{parentName:"ul"},"Cargo binaries (in ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.cargo/bin"),") are properly located and executed."),(0,o.kt)("li",{parentName:"ul"},"Automatically sync ",(0,o.kt)("inlineCode",{parentName:"li"},"rust-toolchain.toml")," configuration files."),(0,o.kt)("li",{parentName:"ul"},"For non-workspaces, will inherit ",(0,o.kt)("inlineCode",{parentName:"li"},"package.name")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," as a project alias."),(0,o.kt)("li",{parentName:"ul"},"And more to come!")),(0,o.kt)("h3",{id:"utilizing-the-toolchain"},"Utilizing the toolchain"),(0,o.kt)("p",null,"When a language is enabled, moon by default will assume that the language's binary is available\nwithin the current environment (typically on ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"). This has the downside of requiring all\ndevelopers and machines to manually install the correct version of the language, ",(0,o.kt)("em",{parentName:"p"},"and to stay in\nsync"),"."),(0,o.kt)("p",null,"Instead, you can utilize ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/toolchain"},"moon's toolchain"),", which will download and\ninstall the language in the background, and ensure every task is executed using the exact version\nacross all machines."),(0,o.kt)("p",null,"Enabling the toolchain is as simple as defining the\n",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain#version-2"},(0,o.kt)("inlineCode",{parentName:"a"},"rust.version"))," setting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"# Enable Rust toolchain with an explicit version\nrust:\n    version: '1.69.0'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Versions can also be defined with ",(0,o.kt)("a",{parentName:"p",href:"../../proto/config"},(0,o.kt)("inlineCode",{parentName:"a"},".prototools")),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"moon requires ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup")," to exist in the environment, and will use this to install the necessary Rust\ntoolchains. This requires Rust to be manually installed on the machine, as moon does not\nauto-install the language, just the toolchains.")),(0,o.kt)("h2",{id:"repository-structure"},"Repository structure"),(0,o.kt)("p",null,"Rust/Cargo repositories come in two flavors: a single crate with one ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),", or multiple\ncrates with many ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"s using\n",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html"},"Cargo workspaces"),". The latter is\nhighly preferred as it enables Cargo incremental caching."),(0,o.kt)("p",null,"Regardless of which flavor your repository uses, in moon, both flavors are a single\n",(0,o.kt)("a",{parentName:"p",href:"../../concepts/project"},"moon project"),". This means that all Rust crates are grouped together into a\nsingle moon project, and the ",(0,o.kt)("a",{parentName:"p",href:"../../config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file is located at the root relative\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.lock")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," folder."),(0,o.kt)("p",null,"An example of this layout is demonstrated below:"),(0,o.kt)(r.Z,{groupId:"repo-layout",defaultValue:"workspaces",values:[{label:"Workspaces",value:"workspaces"},{label:"Non-workspaces",value:"project"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"workspaces",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 .moon/\n\u251c\u2500\u2500 crates/\n\u2502   \u251c\u2500\u2500 client/\n|   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u2514\u2500\u2500 Cargo.toml\n\u2502   \u251c\u2500\u2500 server/\n|   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u2514\u2500\u2500 Cargo.toml\n\u2502   \u2514\u2500\u2500 utils/\n|       \u251c\u2500\u2500 ...\n\u2502       \u2514\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 target/\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 moon.yml\n"))),(0,o.kt)(l.Z,{value:"project",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 .moon/\n\u251c\u2500\u2500 src/\n\u2502   \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 tests/\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 target/\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 moon.yml\n")))),(0,o.kt)("h3",{id:"example-moonyml"},"Example ",(0,o.kt)("inlineCode",{parentName:"h3"},"moon.yml")),(0,o.kt)("p",null,"The following configuration represents a base that covers most Rust projects."),(0,o.kt)(r.Z,{groupId:"repo-layout",defaultValue:"workspaces",values:[{label:"Workspaces",value:"workspaces"},{label:"Non-workspaces",value:"project"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"workspaces",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"language: 'rust'\ntype: 'application'\n\nenv:\n    CARGO_TERM_COLOR: 'always'\n\nfileGroups:\n    sources:\n        - 'crates/*/src/**/*'\n        - 'crates/*/Cargo.toml'\n        - 'Cargo.toml'\n    tests:\n        - 'crates/*/benches/**/*'\n        - 'crates/*/tests/**/*'\n\ntasks:\n    build:\n        command: 'cargo build'\n        inputs:\n            - '@globs(sources)'\n    check:\n        command: 'cargo check --workspace'\n        inputs:\n            - '@globs(sources)'\n    format:\n        command: 'cargo fmt --all --check'\n        inputs:\n            - '@globs(sources)'\n            - '@globs(tests)'\n    lint:\n        command: 'cargo clippy --workspace'\n        inputs:\n            - '@globs(sources)'\n            - '@globs(tests)'\n    test:\n        command: 'cargo test --workspace'\n        inputs:\n            - '@globs(sources)'\n            - '@globs(tests)'\n"))),(0,o.kt)(l.Z,{value:"project",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"language: 'rust'\ntype: 'application'\n\nenv:\n    CARGO_TERM_COLOR: 'always'\n\nfileGroups:\n    sources:\n        - 'src/**/*'\n        - 'Cargo.toml'\n    tests:\n        - 'benches/**/*'\n        - 'tests/**/*'\n\ntasks:\n    build:\n        command: 'cargo build'\n        inputs:\n            - '@globs(sources)'\n    check:\n        command: 'cargo check'\n        inputs:\n            - '@globs(sources)'\n    format:\n        command: 'cargo fmt --check'\n        inputs:\n            - '@globs(sources)'\n            - '@globs(tests)'\n    lint:\n        command: 'cargo clippy'\n        inputs:\n            - '@globs(sources)'\n            - '@globs(tests)'\n    test:\n        command: 'cargo test'\n        inputs:\n            - '@globs(sources)'\n            - '@globs(tests)'\n")))),(0,o.kt)("h2",{id:"cargo-integration"},"Cargo integration"),(0,o.kt)("p",null,"You can't use Rust without Cargo -- well you could but why would you do that? With moon, we're doing\nour best to integrate with Cargo as much as possible. Here's a few of the benefits we currently\nprovide."),(0,o.kt)("h3",{id:"global-binaries"},"Global binaries"),(0,o.kt)("p",null,"Cargo supports global binaries through the\n",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/commands/cargo-install.html"},(0,o.kt)("inlineCode",{parentName:"a"},"cargo install"))," command, which\ninstalls a crate to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin"),", or makes it available through the ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo <crate>")," command. These\nare extremely beneficial for development, but they do require every developer to manually install\nthe crate (and appropriate version) to their machine."),(0,o.kt)("p",null,"With moon, this is no longer an issue with the ",(0,o.kt)("a",{parentName:"p",href:"../../config/toolchain#bins"},(0,o.kt)("inlineCode",{parentName:"a"},"rust.bins"))," setting.\nThis setting requires a list of crates (with optional versions) to install, and moon will install\nthem as part of the task runner ",(0,o.kt)("inlineCode",{parentName:"p"},"InstallRustDeps")," action. Furthermore, binaries will be installed\nwith ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/cargo-binstall"},(0,o.kt)("inlineCode",{parentName:"a"},"cargo-binstall"))," in an effort to reduce build and\ncompilation times."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2-4}',title:'".moon/toolchain.yml"',"{2-4}":!0},"rust:\n  bins:\n    - 'cargo-make@0.35.0'\n    - 'cargo-nextest'\n")),(0,o.kt)("p",null,"At this point, tasks can be configured to run this binary as a command. The ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," prefix is\noptional, as we'll inject it when necessary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n  test:\n    command: 'nextest run --workspace'\n    platform: 'rust'\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-binstall")," crate may require a ",(0,o.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," environment variable to make GitHub Releases\nAPI requests, especially in CI. If you're being rate limited, or fail to find a download, try\ncreating a token with necessary permissions.")),(0,o.kt)("h3",{id:"lockfile-handling"},"Lockfile handling"),(0,o.kt)("p",null,"To expand our integration even further, we also take ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.lock")," into account, and apply the\nfollowing automations when a target is being ran:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the lockfile does not exist, we generate one with\n",(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/commands/cargo-generate-lockfile.html"},(0,o.kt)("inlineCode",{parentName:"a"},"cargo generate-lockfile")),"."),(0,o.kt)("li",{parentName:"ul"},"We parse and extract the resolved checksums and versions for more accurate hashing.")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"should-we-cache-the-target-directory-as-an-output"},"Should we cache the ",(0,o.kt)("inlineCode",{parentName:"h3"},"target")," directory as an output?"),(0,o.kt)("p",null,"No, we don't believe so. Both moon and Cargo support incremental caching, but they're not entirely\ncompatible, and will most likely cause problems when used together."),(0,o.kt)("p",null,"The biggest factor is that moon's caching and hydration uses a tarball strategy, where each task\nwould unpack a tarball on cache hit, and archive a tarball on cache miss. The Cargo target directory\nis extremely large (moon's is around 50gb), and coupling this with our tarball strategy is not\nviable. This would cause massive performance degradation."),(0,o.kt)("p",null,"However, at maximum, you ",(0,o.kt)("em",{parentName:"p"},"could")," cache the compiled binary itself as an output, instead of the\nentire target directory. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    build:\n        command: 'cargo build --release'\n        outputs: ['target/release/moon']\n")),(0,o.kt)("h3",{id:"how-can-we-improve-ci-times"},"How can we improve CI times?"),(0,o.kt)("p",null,"Rust is known for slow build times and CI is no exception. With that being said, there are a few\npatterns to help alleviate this, both on the moon side and outside of it."),(0,o.kt)("p",null,"To start, you can cache Rust builds in CI. This is a non-moon solution to the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," directory\nproblem above."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you use GitHub Actions, feel free to use our\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/moonrepo/setup-rust"},"moonrepo/setup-rust")," action, which has built-in caching."),(0,o.kt)("li",{parentName:"ol"},"A more integrated solution is ",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/sccache"},"sccache"),", which stores build\nartifacts in a cloud storage provider.")),(0,o.kt)("p",null,"For moon, if you're looking to persist task results across CI runs, you can utilize the\n",(0,o.kt)("a",{parentName:"p",href:"../../config/workspace#archivabletargets"},(0,o.kt)("inlineCode",{parentName:"a"},"runner.archivableTargets"))," setting. This is useful for\ncaching ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo check"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo clippy"),", and other Cargo tasks that ",(0,o.kt)("em",{parentName:"p"},"do not")," produce direct outputs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"runner:\n    archivableTargets:\n        - 'rust:check'\n        - 'rust:lint'\n        - 'rust:test'\n")))}d.isMDXComponent=!0}}]);