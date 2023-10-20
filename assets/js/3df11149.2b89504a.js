"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69015],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var o=r(25773),n=(r(27378),r(35318));const a={title:"migrate from-turborepo",sidebar_label:"from-turborepo"},i=void 0,m={unversionedId:"commands/migrate/from-turborepo",id:"commands/migrate/from-turborepo",title:"migrate from-turborepo",description:"Use the moon migrate from-turborepo command to migrate a Turborepo powered repository to moon.",source:"@site/docs/commands/migrate/from-turborepo.mdx",sourceDirName:"commands/migrate",slug:"/commands/migrate/from-turborepo",permalink:"/docs/commands/migrate/from-turborepo",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/migrate/from-turborepo.mdx",tags:[],version:"current",frontMatter:{title:"migrate from-turborepo",sidebar_label:"from-turborepo"},sidebar:"docs",previous:{title:"from-package-json",permalink:"/docs/commands/migrate/from-package-json"},next:{title:"project",permalink:"/docs/commands/project"}},p={},l=[{value:"Caveats",id:"caveats",level:2}],s={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"moon migrate from-turborepo")," command to migrate a Turborepo powered repository to moon.\nThis process will convert the root ",(0,n.kt)("inlineCode",{parentName:"p"},"turbo.json")," file to moon applicable configuration files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Migrates ",(0,n.kt)("inlineCode",{parentName:"li"},"pipeline")," global tasks to ",(0,n.kt)("a",{parentName:"li",href:"../../config/tasks#tasks"},(0,n.kt)("inlineCode",{parentName:"a"},".moon/tasks/node.yml"))," and project\nscoped tasks to ",(0,n.kt)("a",{parentName:"li",href:"../../config/project#tasks"},(0,n.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,n.kt)("li",{parentName:"ul"},"Migrates ",(0,n.kt)("inlineCode",{parentName:"li"},"globalDependencies")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"globalEnv")," to\n",(0,n.kt)("a",{parentName:"li",href:"../../config/tasks#implicitinputs"},(0,n.kt)("inlineCode",{parentName:"a"},".moon/tasks/node.yml"))," (via ",(0,n.kt)("inlineCode",{parentName:"li"},"implicitInputs"),").")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon migrate from-turborepo\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"moon must be ",(0,n.kt)("a",{parentName:"p",href:"../init"},"initialized")," and ",(0,n.kt)("a",{parentName:"p",href:"../../config/toolchain#node"},(0,n.kt)("inlineCode",{parentName:"a"},"node"))," must be configured in\nthe toolchain before this command is ran!"),(0,n.kt)("p",{parentName:"admonition"},"Furthermore, this process does not change existing ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," scripts, so if you're looking to\nmigrate them as well, use the ",(0,n.kt)("a",{parentName:"p",href:"./from-package-json"},(0,n.kt)("inlineCode",{parentName:"a"},"moon migrate from-package-json"))," command.")),(0,n.kt)("h2",{id:"caveats"},"Caveats"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This process ",(0,n.kt)("em",{parentName:"li"},"will not")," migrate root-level Turborepo tasks (those starting with ",(0,n.kt)("inlineCode",{parentName:"li"},"//#"),"). You'll\nneed to manually create a moon ",(0,n.kt)("a",{parentName:"li",href:"../../guides/root-project"},"root-level project")," and migrate tasks.")))}c.isMDXComponent=!0}}]);