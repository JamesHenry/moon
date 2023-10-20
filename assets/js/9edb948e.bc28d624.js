"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44436],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39798:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(27378),r=a(37140);const o="tabItem_wHwb";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},33337:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(25773),r=a(27378),o=a(37140),l=a(83457),i=a(35595),s=a(76457);const c="tabList_J5MA",p="tabItem_l0OV";function u(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function m(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(m,(0,n.Z)({},e,t)))}function g(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},35595:(e,t,a)=>{a.d(t,{Y:()=>m});var n=a(27378),r=a(35331),o=a(30654),l=a(70784),i=a(71819);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const l=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=c(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[m,d]=u({queryString:a,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),k=(()=>{const e=m??g;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,o]),tabValues:o}}},27915:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(27378),r=a(83469),o=a(9619);function l(e){let{text:t}=e;return n.createElement(o.Z,{text:t,icon:r.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(27378),r=a(81884),o=a(25773),l=a(9928),i=a(83469),s=a(31792);const c={discord:l.omb,github:l.zhw,moon:i.Gp0,"new-project":i.g6h,"new-task":i.EQ8,project:i.pL1,"project-config":i.dhu,"project-config-global":i.YdP,"project-graph":i.Bkj,"run-task":i.sl_,task:i.diR,"task-config":i.o$R,token:i.BwA,toolchain:i.AlB,"toolchain-config":i.eDR,twitter:l.mdU,workspace:i.emM,"workspace-config":i.cRF};function p(e){let{name:t,...a}=e;return n.createElement(s.Z,(0,o.Z)({},a,{icon:c[t]}))}function u(e){let{links:t}=e;return n.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((e=>n.createElement(r.default,{key:e.url,href:e.url,className:"focus:outline-none"},n.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},n.createElement("div",{className:"flex-shrink-0"},n.createElement(p,{size:"lg",name:e.icon})),n.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label))))))}},9619:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(27378),r=a(40624),o=a(31792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:a,text:i,variant:s}=e;return n.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?l[s]:"bg-gray-100 text-gray-800",t)},a&&n.createElement(o.Z,{icon:a,className:"mr-1"}),i)}},9757:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(25773),r=(a(27378),a(35318)),o=a(33337),l=a(39798);const i={toc:[]};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".yarnrc.yml"',title:'".yarnrc.yml"'},"# ...\nnodeLinker: 'node-modules'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/features/workspaces"},"Documentation")))),(0,r.kt)(l.Z,{value:"yarn1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/workspaces"},"Documentation")))),(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/using-npm/workspaces"},"Documentation")))),(0,r.kt)(l.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n    - 'apps/*'\n    - 'packages/*'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pnpm.io/workspaces"},"Documentation"))))))}s.isMDXComponent=!0},31901:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(25773),r=(a(27378),a(35318)),o=(a(33337),a(39798),a(27915)),l=a(9634),i=a(9757);const s={title:"Setup toolchain"},c=void 0,p={unversionedId:"setup-toolchain",id:"setup-toolchain",title:"Setup toolchain",description:"One of moon's most powerful features is the toolchain, which manages and",source:"@site/docs/setup-toolchain.mdx",sourceDirName:".",slug:"/setup-toolchain",permalink:"/docs/setup-toolchain",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/setup-toolchain.mdx",tags:[],version:"current",frontMatter:{title:"Setup toolchain"},sidebar:"docs",previous:{title:"Setup workspace",permalink:"/docs/setup-workspace"},next:{title:"Create a project",permalink:"/docs/create-project"}},u={},m=[{value:"Choosing a package manager",id:"choosing-a-package-manager",level:2},{value:"Enabling workspaces (optional)",id:"enabling-workspaces-optional",level:3},{value:"Configuring Node.js",id:"configuring-nodejs",level:2},{value:"Configuring a package manager",id:"configuring-a-package-manager",level:2},{value:"Adding a package script",id:"adding-a-package-script",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{text:"4 min",mdxType:"HeaderLabel"}),(0,r.kt)("p",null,"One of moon's most powerful features is the ",(0,r.kt)("a",{parentName:"p",href:"./concepts/toolchain"},"toolchain"),", which manages and\nautomatically installs Node.js and other tools. The toolchain is configured with\n",(0,r.kt)("a",{parentName:"p",href:"./config/toolchain"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This toolchain article is currently Node.js only. If you're using another language, feel free to\nskip to the next article, ",(0,r.kt)("a",{parentName:"p",href:"./create-project"},"creating a project"),".")),(0,r.kt)("h2",{id:"choosing-a-package-manager"},"Choosing a package manager"),(0,r.kt)("p",null,'Before we continue, we should briefly talk about Node.js package managers. To start, moon does not\nreplace a package manager, nor does it apply any "magic" for them to work differently. Instead, moon\nbuilds upon a package manager to provide a robust task runner, assumes a standard ',(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\nlayout and module resolution algorithm, and supports any of the following 3 package managers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/"},"npm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pnpm.io/"},"pnpm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," (v1, v2+ in ",(0,r.kt)("inlineCode",{parentName:"li"},"node-modules")," linker mode)")),(0,r.kt)("h3",{id:"enabling-workspaces-optional"},"Enabling workspaces (optional)"),(0,r.kt)("p",null,"moon was built with monorepos in mind, and as such, has first-class support for them through package\nworkspaces (but is not a requirement). To utilize workspaces, enable them for your chosen package\nmanager."),(0,r.kt)(i.ZP,{mdxType:"PackageWorkspaces"}),(0,r.kt)("h2",{id:"configuring-nodejs"},"Configuring Node.js"),(0,r.kt)("p",null,"As Node.js is the backbone of a JavaScript based repository, we need to enable its functionality.\nThis is done by defining ",(0,r.kt)("a",{parentName:"p",href:"./config/toolchain#node"},(0,r.kt)("inlineCode",{parentName:"a"},"node"))," in\n",(0,r.kt)("a",{parentName:"p",href:"./config/toolchain"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),". Languages are like plugins, where the existence of a\nsetting enables the plugin, hence why an empty object below is acceptable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"node: {}\n")),(0,r.kt)("p",null,"By default, the language will execute tasks using the global ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," binary available on ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),".\nWhile this works, we suggest using our toolchain that will download, install, and execute tasks with\nthe same version of Node.js across ",(0,r.kt)("em",{parentName:"p"},"all")," machines. To enable the toolchain, simply define the\nversion with ",(0,r.kt)("a",{parentName:"p",href:"./config/toolchain#version"},(0,r.kt)("inlineCode",{parentName:"a"},"node.version")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"node:\n    version: '18.0.0'\n")),(0,r.kt)("p",null,"This setting can be a fully qualified semantic version (preferred), a partial version (missing patch\nor minor), or even an alias (learn more about the\n",(0,r.kt)("a",{parentName:"p",href:"./concepts/toolchain#version-specification"},"version specification"),"). We suggest ",(0,r.kt)("em",{parentName:"p"},"always")," using an\n",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"Active LTS")," version."),(0,r.kt)("p",null,"Let's now run ",(0,r.kt)("a",{parentName:"p",href:"./commands/setup"},(0,r.kt)("inlineCode",{parentName:"a"},"moon setup --log debug"))," to verify that Node.js is downloaded and\ninstalled correctly. Pretty cool right?"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Node.js version can also be customized ",(0,r.kt)("em",{parentName:"p"},"per project")," using the\n",(0,r.kt)("a",{parentName:"p",href:"./config/project#node"},(0,r.kt)("inlineCode",{parentName:"a"},"toolchain.node.version"))," setting in ",(0,r.kt)("a",{parentName:"p",href:"./config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml")),". This\nsetting exists to support legacy projects that are coupled to an old version and are unable to\nupgrade. We suggest keeping all projects on the same version whenever possible.")),(0,r.kt)("h2",{id:"configuring-a-package-manager"},"Configuring a package manager"),(0,r.kt)("p",null,"Even though Node.js is now installed, we need a package manager to install dependencies. Earlier we\ntalked about ",(0,r.kt)("a",{parentName:"p",href:"./install#choosing-a-package-manager"},"choosing a package manager"),", so let's use that\nchoice here by defining ",(0,r.kt)("a",{parentName:"p",href:"./config/toolchain#packagemanager"},(0,r.kt)("inlineCode",{parentName:"a"},"node.packageManager")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"node:\n    version: '18.0.0'\n    packageManager: 'yarn'\n")),(0,r.kt)("p",null,"By default moon will install a stable version of the package manager, but this isn't consistently\nupdated, so we suggest defining a\n",(0,r.kt)("a",{parentName:"p",href:"./concepts/toolchain#version-specification"},"version specification")," for the package manager as well,\nthrough the ",(0,r.kt)("a",{parentName:"p",href:"./config/toolchain#version-1"},(0,r.kt)("inlineCode",{parentName:"a"},"node.<packageManager>.version"))," setting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"node:\n    version: '18.0.0'\n    packageManager: 'yarn'\n    yarn:\n        version: '3.2.0'\n")),(0,r.kt)("p",null,"Once again, let's run ",(0,r.kt)("a",{parentName:"p",href:"./commands/setup"},(0,r.kt)("inlineCode",{parentName:"a"},"moon setup --log debug"))," to verify the package manager is\ninstalled, and also take note that Node.js is ",(0,r.kt)("em",{parentName:"p"},"already")," installed. Based on the example\nconfiguration above, we'll be switching from npm (the default) to yarn."),(0,r.kt)("h2",{id:"adding-a-package-script"},"Adding a package script"),(0,r.kt)("p",null,"For scenarios like CI, ",(0,r.kt)("inlineCode",{parentName:"p"},"moon")," can be ran through a root ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," script \u2014 but this comes with\na cost \u2014 which is the overhead of launching Node.js and your chosen package manager to execute the\nRust binary, ",(0,r.kt)("em",{parentName:"p"},"instead of")," executing the Rust binary directly. If this is problematic, feel free to\nuse the global ",(0,r.kt)("inlineCode",{parentName:"p"},"moon")," binary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "scripts": {\n    // ...\n    "moon": "moon",\n    // For Yarn 2+\n    "moon": "$(yarn bin moon)"\n  }\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Yarn 2+ does not support executing Rust binaries through package scripts\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry/issues/882"},"issue"),"), so we must access the full binary path and\nexecute on that.")),(0,r.kt)("p",null,"With this script, moon can then be run with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run moon ...")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run"),")."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)(l.Z,{links:[{icon:"new-project",label:"Create a project",url:"./create-project"},{icon:"toolchain-config",label:(0,r.kt)("span",null,"Configure ",(0,r.kt)("code",null,".moon/toolchain.yml")," further"),url:"./config/toolchain"},{icon:"toolchain",label:"Learn about the toolchain",url:"./concepts/toolchain"}],mdxType:"NextSteps"}))}g.isMDXComponent=!0}}]);