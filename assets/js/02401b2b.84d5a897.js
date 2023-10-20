"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85027],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(27378),a=n(37140);const o="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(25773),a=n(27378),o=n(37140),l=n(83457),i=n(35595),u=n(76457);const s="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=s[n].value;r!==i&&(d(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:m},l,{className:(0,o.Z)("tabs__item",c,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,i.Y)(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement(p,(0,r.Z)({},e,t)),a.createElement(d,(0,r.Z)({},e,t)))}function f(e){const t=(0,u.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>d});var r=n(27378),a=n(35331),o=n(30654),l=n(70784),i=n(71819);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function s(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=s(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,m]=p({queryString:n,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=d??f;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),m(e),h(e)}),[m,h,o]),tabValues:o}}},84851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(25773),a=(n(27378),n(35318));n(33337),n(39798);const o={title:"Deno handbook",toc_max_heading_level:6},l=void 0,i={unversionedId:"guides/javascript/deno-handbook",id:"guides/javascript/deno-handbook",title:"Deno handbook",description:"Utilizing Deno in a TypeScript based monorepo can be a non-trivial task. With this handbook, we'll",source:"@site/docs/guides/javascript/deno-handbook.mdx",sourceDirName:"guides/javascript",slug:"/guides/javascript/deno-handbook",permalink:"/docs/guides/javascript/deno-handbook",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/javascript/deno-handbook.mdx",tags:[],version:"current",frontMatter:{title:"Deno handbook",toc_max_heading_level:6},sidebar:"guides",previous:{title:"VCS hooks",permalink:"/docs/guides/vcs-hooks"},next:{title:"Node.js handbook",permalink:"/docs/guides/javascript/node-handbook"}},u={},s=[{value:"moon setup",id:"moon-setup",level:2},{value:"Enabling the language",id:"enabling-the-language",level:3},{value:"Work in progress",id:"work-in-progress",level:3},{value:"Coming soon!",id:"coming-soon",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Utilizing Deno in a TypeScript based monorepo can be a non-trivial task. With this handbook, we'll\nhelp guide you through this process."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide is a living document and will continue to be updated over time!")),(0,a.kt)("h2",{id:"moon-setup"},"moon setup"),(0,a.kt)("p",null,"For this part of the handbook, we'll be focusing on ",(0,a.kt)("a",{parentName:"p",href:"/moon"},"moon"),", our task runner. To start,\nlanguages in moon act like plugins, where their functionality and support ",(0,a.kt)("em",{parentName:"p"},"is not")," enabled unless\nexplicitly configured. We follow this approach to avoid unnecessary overhead."),(0,a.kt)("h3",{id:"enabling-the-language"},"Enabling the language"),(0,a.kt)("p",null,"To enable TypeScript support via Deno, define the ",(0,a.kt)("a",{parentName:"p",href:"../../config/toolchain#deno"},(0,a.kt)("inlineCode",{parentName:"a"},"deno"))," setting in\n",(0,a.kt)("a",{parentName:"p",href:"../../config/toolchain"},(0,a.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),", even if an empty object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"# Enable Deno\ndeno: {}\n\n# Enable Deno and override default settings\ndeno:\n    lockfile: true\n")),(0,a.kt)("p",null,"Or by pinning a ",(0,a.kt)("inlineCode",{parentName:"p"},"deno")," version in ",(0,a.kt)("a",{parentName:"p",href:"../../proto/config"},(0,a.kt)("inlineCode",{parentName:"a"},".prototools"))," in the workspace root."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'deno = "1.31.0"\n')),(0,a.kt)("p",null,"This will enable the Deno platform and provide the following automations around its ecosystem:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatic handling and caching of lockfiles (when the setting is enabled)."),(0,a.kt)("li",{parentName:"ul"},"Relationships between projects will automatically be discovered based on ",(0,a.kt)("inlineCode",{parentName:"li"},"imports"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"importMap"),",\nand ",(0,a.kt)("inlineCode",{parentName:"li"},"deps.ts")," (currently experimental)."),(0,a.kt)("li",{parentName:"ul"},"And more to come!")),(0,a.kt)("h3",{id:"work-in-progress"},"Work in progress"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Deno support is currently experimental while we finalize the implementation.")),(0,a.kt)("p",null,"The following features are not supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deno.jsonc")," files (use ",(0,a.kt)("inlineCode",{parentName:"li"},"deno.json")," instead)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm:")," imports do not consider Node.js dependencies as hash sources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files.exclude")," are currently considered an input. These will be filtered in a future release.")),(0,a.kt)("h2",{id:"coming-soon"},"Coming soon!"),(0,a.kt)("p",null,"The handbook is currently being written while we finalize our Deno integration support!"))}p.isMDXComponent=!0}}]);