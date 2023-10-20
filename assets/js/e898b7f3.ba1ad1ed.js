"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87584],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(37140);const l="tabItem_wHwb";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(25773),r=n(27378),l=n(37140),o=n(83457),i=n(35595),u=n(76457);const s="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==i&&(m(t),u(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function m(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement(p,(0,a.Z)({},e,t)),r.createElement(m,(0,a.Z)({},e,t)))}function f(e){const t=(0,u.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(27378),r=n(35331),l=n(30654),o=n(70784),i=n(71819);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=s(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[m,d]=p({queryString:n,groupId:r}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=m??f;return c({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,l]),tabValues:l}}},36642:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(30780),l=n(39798),o=n(33337);function i(e,t,n){let a=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&!e.package&&(a+="-W "),a+=e.dep,a}function u(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function s(e){let t=i(e,!1,!0),n=u(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=i(e,!0,!0),n+=u(e,!0)),a.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},i(e,!1,!1))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},t)),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},n)))}},27457:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(30780),l=n(39798),o=n(33337);function i(e,t,n){return`${e} create ${t} ${n.join(" ")}`.trim()}function u(e){let{dep:t,args:n=[]}=e;return a.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},i("yarn",t,n))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},i("yarn",t,n))),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},i("npm",t,n))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},i("pnpm",t,n))))}},32189:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(83469),l=n(31792);function o(e){let{to:t}=e;return a.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(l.Z,{icon:r.dT$}))}},81935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=n(25773),r=(n(27378),n(35318)),l=n(36642),o=n(27457),i=n(32189);const u={title:"Vite & Vitest example",sidebar_label:"Vite & Vitest"},s=void 0,c={unversionedId:"guides/examples/vite",id:"guides/examples/vite",title:"Vite & Vitest example",description:"In this guide, you'll learn how to integrate Vite and",source:"@site/docs/guides/examples/vite.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/vite",permalink:"/docs/guides/examples/vite",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/vite.mdx",tags:[],version:"current",frontMatter:{title:"Vite & Vitest example",sidebar_label:"Vite & Vitest"},sidebar:"guides",previous:{title:"TypeScript",permalink:"/docs/guides/examples/typescript"},next:{title:"Vue",permalink:"/docs/guides/examples/vue"}},p={},m=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}],d={toc:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/vue-vite-app",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"Vitest")," into moon."),(0,r.kt)("p",null,"Begin by creating a new Vite project in the root of an existing moon project (this should not be\ncreated in the workspace root, unless a polyrepo)."),(0,r.kt)(o.Z,{dep:"vite",mdxType:"CreateDepTabs"}),(0,r.kt)("p",null,"If you plan on using Vitest, run the following command to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"vitest")," dependency to a project,\notherwise skip to the setup section."),(0,r.kt)(l.Z,{dep:"vitest",package:"<project>",dev:!0,mdxType:"AddDepsTabs"}),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Since Vite is per-project, the associated moon tasks should be defined in each project's\n",(0,r.kt)("a",{parentName:"p",href:"../../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We suggest inheriting Vite tasks from the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon-configs/tree/master/javascript/vite"},"official moon configuration preset"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"# Inherit tasks from the `vite` and `vitest` presets\n# https://github.com/moonrepo/moon-configs\ntags: ['vite', 'vitest']\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"root-level"},"Root-level"),(0,r.kt)("p",null,"We suggest ",(0,r.kt)("em",{parentName:"p"},"against")," root-level configuration, as Vite should be installed per-project, and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"vite")," command expects the configuration to live relative to the project root."),(0,r.kt)("h3",{id:"project-level"},"Project-level"),(0,r.kt)("p",null,"When creating a new Vite project, a ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/config"},(0,r.kt)("inlineCode",{parentName:"a"},"vite.config.<js|ts>"))," is created,\nand ",(0,r.kt)("em",{parentName:"p"},"must")," exist in the project root."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/vite.config.js"',title:'"<project>/vite.config.js"'},"import { defineConfig } from 'vite';\n\nexport default defineConfig({\n  // ...\n  build: {\n    // These must be `outputs` in the `build` task\n    outDir: 'dist',\n  },\n  test: {\n    // Vitest settings\n  },\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you'd prefer to configure Vitest in a\n",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/guide/#configuring-vitest"},"separate configuration file"),", create a\n",(0,r.kt)("inlineCode",{parentName:"p"},"vitest.config.<js|ts>")," file.")))}f.isMDXComponent=!0}}]);