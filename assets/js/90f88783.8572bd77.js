"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13481],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39798:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),a=r(37140);const l="tabItem_wHwb";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},33337:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(25773),a=r(27378),l=r(37140),o=r(83457),i=r(35595),s=r(76457);const u="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==i&&(d(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:m},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function d(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,i.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement(p,(0,n.Z)({},e,t)),a.createElement(d,(0,n.Z)({},e,t)))}function f(e){const t=(0,s.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},35595:(e,t,r)=>{r.d(t,{Y:()=>d});var n=r(27378),a=r(35331),l=r(30654),o=r(70784),i=r(71819);function s(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??s(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const o=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=u(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,m]=p({queryString:r,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,i.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),h=(()=>{const e=d??f;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),g(e)}),[m,g,l]),tabValues:l}}},36642:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(27378),a=r(30780),l=r(39798),o=r(33337);function i(e,t,r){let n=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?n+="--dev ":e.peer&&(n+="--peer "),r&&t&&!e.package&&(n+="-W "),n+=e.dep,n}function s(e,t){let r="pnpm add ";return e.dev?r+="--save-dev ":e.peer&&(r+="--save-peer "),e.package?r+=`--filter ${e.package} `:t&&(r+="-w "),r+=e.dep,r}function u(e){let t=i(e,!1,!0),r=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",r+="\n\n# If using workspaces\n",t+=i(e,!0,!0),r+=s(e,!0)),n.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},n.createElement(l.Z,{value:"yarn"},n.createElement(a.Z,{language:"shell"},i(e,!1,!1))),n.createElement(l.Z,{value:"yarn1"},n.createElement(a.Z,{language:"shell"},t)),n.createElement(l.Z,{value:"npm"},n.createElement(a.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),n.createElement(l.Z,{value:"pnpm"},n.createElement(a.Z,{language:"shell"},r)))}},32189:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),a=r(83469),l=r(31792);function o(e){let{to:t}=e;return n.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},n.createElement(l.Z,{icon:a.dT$}))}},9123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(25773),a=(r(27378),r(35318)),l=r(36642),o=r(32189);const i={title:"Prettier example",sidebar_label:"Prettier"},s=void 0,u={unversionedId:"guides/examples/prettier",id:"guides/examples/prettier",title:"Prettier example",description:"In this guide, you'll learn how to integrate Prettier into moon.",source:"@site/docs/guides/examples/prettier.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/prettier",permalink:"/docs/guides/examples/prettier",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/prettier.mdx",tags:[],version:"current",frontMatter:{title:"Prettier example",sidebar_label:"Prettier"},sidebar:"guides",previous:{title:"Packemon",permalink:"/docs/guides/examples/packemon"},next:{title:"React",permalink:"/docs/guides/examples/react"}},c={},p=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to use <code>--write</code>?",id:"how-to-use---write",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{to:"https://github.com/moonrepo/examples/blob/master/.moon/tasks/node.yml#L41",mdxType:"HeadingApiLink"}),(0,a.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," into moon."),(0,a.kt)("p",null,"Begin by installing ",(0,a.kt)("inlineCode",{parentName:"p"},"prettier")," in your root. We suggest using the same version across the entire\nrepository."),(0,a.kt)(l.Z,{dep:"prettier",dev:!0,mdxType:"AddDepsTabs"}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Since code formatting is a universal workflow, add a ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," task to\n",(0,a.kt)("a",{parentName:"p",href:"../../config/tasks"},(0,a.kt)("inlineCode",{parentName:"a"},".moon/tasks/node.yml"))," with the following parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/node.yml"',title:'".moon/tasks/node.yml"'},"tasks:\n    format:\n        command:\n            - 'prettier'\n            # Use the same config for the entire repo\n            - '--config'\n            - '@in(4)'\n            # Use the same ignore patterns as well\n            - '--ignore-path'\n            - '@in(3)'\n            # Fail for unformatted code\n            - '--check'\n            # Run in current dir\n            - '.'\n        inputs:\n            # Source and test files\n            - 'src/**/*'\n            - 'tests/**/*'\n            # Config and other files\n            - '**/*.{md,mdx,yml,yaml,json}'\n            # Root configs, any format\n            - '/.prettierignore'\n            - '/.prettierrc.*'\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"root-level"},"Root-level"),(0,a.kt)("p",null,"The root-level Prettier config is ",(0,a.kt)("em",{parentName:"p"},"required"),", as it defines conventions and standards to apply to\nthe entire repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".prettierrc.js"',title:'".prettierrc.js"'},"module.exports = {\n  arrowParens: 'always',\n  semi: true,\n  singleQuote: true,\n  tabWidth: 2,\n  trailingComma: 'all',\n  useTabs: true,\n};\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".prettierignore")," file must also be defined at the root, as\n",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/ignore.html#ignoring-files-prettierignore"},"only 1 ignore file")," can\nexist in a repository. We ensure this ignore file is used by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"--ignore-path")," above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".prettierignore"',title:'".prettierignore"'},"node_modules/\n*.min.js\n*.map\n*.snap\n")),(0,a.kt)("h3",{id:"project-level"},"Project-level"),(0,a.kt)("p",null,"We suggest ",(0,a.kt)("em",{parentName:"p"},"against")," project-level configurations, as the entire repository should be formatted\nusing the same standards. However, if you're migrating code and need an escape hatch,\n",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/configuration.html#configuration-overrides"},"overrides in the root")," will\nwork."),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-use---write"},"How to use ",(0,a.kt)("inlineCode",{parentName:"h3"},"--write"),"?"),(0,a.kt)("p",null,"Unfortunately, this isn't currently possible, as the ",(0,a.kt)("inlineCode",{parentName:"p"},"prettier")," binary itself requires either the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--check")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--write")," options, and since we're configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"--check")," in the task above, that takes\nprecedence. This is also the preferred pattern as checks will run (and fail) in CI."),(0,a.kt)("p",null,"To work around this limitation, we suggest the following alternatives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure your editor to run Prettier on save."),(0,a.kt)("li",{parentName:"ul"},"Define another task to write the formatted code, like ",(0,a.kt)("inlineCode",{parentName:"li"},"format-write"),".")))}m.isMDXComponent=!0}}]);