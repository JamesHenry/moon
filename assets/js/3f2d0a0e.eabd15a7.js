"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56336],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88109:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378);function o(e){let{src:t,width:r="90%",alt:o="",title:a,align:i="center",padding:l="1rem"}=e;return n.createElement("div",{style:{marginBottom:l,marginTop:l,textAlign:i}},n.createElement("img",{src:t.default,width:r,alt:o,title:a,className:"inline-block"}))}},41510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(25773),o=(r(27378),r(35318));r(88109);const a={slug:"v0.14",title:"moon v0.14 - Code generation and implicit dependencies",authors:["milesj"],tags:["generator","project-graph","ci"]},i=void 0,l={permalink:"/blog/v0.14",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-13_v0.14.mdx",source:"@site/blog/2022-09-13_v0.14.mdx",title:"moon v0.14 - Code generation and implicit dependencies",description:"With this release, we've landed some new features that have been requested multiple times since",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"generator",permalink:"/blog/tags/generator"},{label:"project-graph",permalink:"/blog/tags/project-graph"},{label:"ci",permalink:"/blog/tags/ci"}],readingTime:1.715,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"v0.14",title:"moon v0.14 - Code generation and implicit dependencies",authors:["milesj"],tags:["generator","project-graph","ci"]},prevItem:{title:"moon v0.15 - Enhanced Docker support and 1,000 stars!",permalink:"/blog/v0.15"},nextItem:{title:"moon v0.13 - Hashing and toolchain improvements",permalink:"/blog/v0.13"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this release, we've landed some new features that have been requested multiple times since\nlaunch. A code generation and template scaffolding layer, as well as implicit dependency scanning\nfor the project graph!"))}m.isMDXComponent=!0}}]);