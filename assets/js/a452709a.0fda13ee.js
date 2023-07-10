"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6526],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"use"},l=void 0,i={unversionedId:"proto/commands/use",id:"proto/commands/use",title:"use",description:"The proto use (or proto u) command will download and install all tools and plugins from the",source:"@site/docs/proto/commands/use.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/use",permalink:"/docs/proto/commands/use",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/use.mdx",tags:[],version:"current",frontMatter:{title:"use"},sidebar:"proto",previous:{title:"upgrade",permalink:"/docs/proto/commands/upgrade"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proto use")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"proto u"),") command will download and install ",(0,o.kt)("em",{parentName:"p"},"all")," tools and plugins from the\nclosest ",(0,o.kt)("a",{parentName:"p",href:"../config"},(0,o.kt)("inlineCode",{parentName:"a"},".prototools"))," configuration file, and any ",(0,o.kt)("a",{parentName:"p",href:"../detection"},"versions detected")," in\nthe current working directory."),(0,o.kt)("p",null,"If ",(0,o.kt)("a",{parentName:"p",href:"../config#user-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"auto-clean"))," is enabled, the command will also remove any stale\nor unused tools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto use\n")))}u.isMDXComponent=!0}}]);