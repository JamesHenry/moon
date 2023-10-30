"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60314],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(25773),o=(r(27378),r(35318));const a={title:"project-graph"},l=void 0,p={unversionedId:"commands/project-graph",id:"commands/project-graph",title:"project-graph",description:"The moon project-graph [name] (or moon pg) command will generate and serve a visual graph of all",source:"@site/docs/commands/project-graph.mdx",sourceDirName:"commands",slug:"/commands/project-graph",permalink:"/docs/commands/project-graph",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/project-graph.mdx",tags:[],version:"current",frontMatter:{title:"project-graph"},sidebar:"docs",previous:{title:"project",permalink:"/docs/commands/project"},next:{title:"query",permalink:"/docs/commands/query"}},c={},i=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Example output",id:"example-output",level:2}],s={toc:i};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moon project-graph [name]")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"moon pg"),") command will generate and serve a visual graph of all\nconfigured projects as nodes, with dependencies between as edges, and can also output the graph in\n",(0,o.kt)("a",{parentName:"p",href:"https://graphviz.org/doc/info/lang.html"},"Graphviz DOT format"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Run the visualizer locally\n$ moon project-graph\n\n# Export to DOT format\n$ moon project-graph --dot > graph.dot\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A project name can be passed to focus the graph to only that project and it's dependencies. For\nexample, ",(0,o.kt)("inlineCode",{parentName:"p"},"moon project-graph app"),".")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[name]")," - Optional name or alias of a project to focus, as defined in\n",(0,o.kt)("a",{parentName:"li",href:"../config/workspace#projects"},(0,o.kt)("inlineCode",{parentName:"a"},"projects")),".")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--dot")," - Output the graph in DOT format.")),(0,o.kt)("h2",{id:"example-output"},"Example output"),(0,o.kt)("p",null,"The following output is an example of the graph in DOT format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dot"},'digraph {\n    0 [ label="(workspace)" style=filled, shape=circle, fillcolor=black, fontcolor=white]\n    1 [ label="runtime" style=filled, shape=circle, fillcolor=gray, fontcolor=black]\n    2 [ label="website" style=filled, shape=circle, fillcolor=gray, fontcolor=black]\n    0 -> 1 [ arrowhead=none]\n    0 -> 2 [ arrowhead=none]\n}\n')))}m.isMDXComponent=!0}}]);