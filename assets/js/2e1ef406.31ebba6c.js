"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11665],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,g=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},79022:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),o=n(9619);function i(e){let{header:t,inline:n,updated:i,version:a}=e;return r.createElement(o.Z,{text:`v${a}`,variant:i?"success":"info",className:t?"absolute right-0 top-1.5":n?"inline-block":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(27378),o=n(40624),i=n(31792);const a={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:t,icon:n,text:l,variant:p}=e;return r.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",p?a[p]:"bg-gray-100 text-gray-800",t)},n&&r.createElement(i.Z,{icon:n,className:"mr-1"}),l)}},65614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=n(25773),o=(n(27378),n(35318)),i=n(79022);const a={title:"remove-plugin"},l=void 0,p={unversionedId:"proto/commands/remove-plugin",id:"proto/commands/remove-plugin",title:"remove-plugin",description:"The proto remove-plugin  (or proto rp) command will remove the provided plugin ID from to",source:"@site/docs/proto/commands/remove-plugin.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/remove-plugin",permalink:"/docs/proto/commands/remove-plugin",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/remove-plugin.mdx",tags:[],version:"current",frontMatter:{title:"remove-plugin"},sidebar:"proto",previous:{title:"plugins",permalink:"/docs/proto/commands/plugins"},next:{title:"run",permalink:"/docs/proto/commands/run"}},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{version:"0.16.0",header:!0,mdxType:"VersionLabel"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proto remove-plugin <id>")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"proto rp"),") command will remove the provided plugin ID from to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"[plugins]")," section of the local (",(0,o.kt)("inlineCode",{parentName:"p"},".prototools"),") or global (",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/config.toml"),") config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto remove-plugin node\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Built-in plugins ",(0,o.kt)("em",{parentName:"p"},"cannot")," be removed!")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<id>")," - ID of the plugin.")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--global")," - Remove from the global config instead of local.")))}s.isMDXComponent=!0}}]);