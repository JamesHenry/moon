"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44752],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79022:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(27378),o=n(9619);function a(e){let{header:t,inline:n,updated:a,version:l}=e;return r.createElement(o.Z,{text:`v${l}`,variant:a?"success":"info",className:t?"absolute right-0 top-1.5":n?"inline-block":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),o=n(40624),a=n(31792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:p}=e;return r.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",p?l[p]:"bg-gray-100 text-gray-800",t)},n&&r.createElement(a.Z,{icon:n,className:"mr-1"}),i)}},50455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(25773),o=(n(27378),n(35318)),a=n(79022);const l={title:"add-plugin"},i=void 0,p={unversionedId:"proto/commands/add-plugin",id:"proto/commands/add-plugin",title:"add-plugin",description:"The proto add-plugin   (or proto ap) command will add the provided plugin ID and",source:"@site/docs/proto/commands/add-plugin.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/add-plugin",permalink:"/docs/proto/commands/add-plugin",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/add-plugin.mdx",tags:[],version:"current",frontMatter:{title:"add-plugin"},sidebar:"proto",previous:{title:"WASM",permalink:"/docs/proto/wasm-plugin"},next:{title:"alias",permalink:"/docs/proto/commands/alias"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{version:"0.16.0",header:!0,mdxType:"VersionLabel"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proto add-plugin <id> <locator>")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"proto ap"),") command will add the provided plugin ID and\nlocator string to the ",(0,o.kt)("inlineCode",{parentName:"p"},"[plugins]")," section of the local (",(0,o.kt)("inlineCode",{parentName:"p"},".prototools"),") or global\n(",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/config.toml"),") config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto add-plugin node source:https://github.com/moonrepo/node-plugin/releases/latest/download/node_plugin.wasm\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,o.kt)("a",{parentName:"p",href:"../plugins#enabling-plugins"},"plugin locator strings"),".")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<id>")," - ID of the plugin."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<locator>")," - How to locate the plugin.")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--global")," - Add to the global config instead of local.")))}u.isMDXComponent=!0}}]);