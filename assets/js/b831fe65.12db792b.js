"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9157],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7467:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],c={title:"Projects"},p=void 0,l={unversionedId:"concepts/project",id:"concepts/project",title:"Projects",description:"A project is a library, application, package, binary, tool, etc, that contains source files, test",source:"@site/docs/concepts/project.mdx",sourceDirName:"concepts",slug:"/concepts/project",permalink:"/docs/concepts/project",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/project.mdx",tags:[],version:"current",frontMatter:{title:"Projects"},sidebar:"docs",previous:{title:"File patterns",permalink:"/docs/concepts/file-pattern"},next:{title:"Targets",permalink:"/docs/concepts/target"}},s={},u=[{value:"ID",id:"id",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>package.json</code>",id:"packagejson",level:3},{value:"<code>tsconfig.json</code>",id:"tsconfigjson",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A project is a library, application, package, binary, tool, etc, that contains source files, test\nfiles, assets, resources, and more. A project must exist and be configured within a\n",(0,a.kt)("a",{parentName:"p",href:"./workspace"},"workspace"),"."),(0,a.kt)("h2",{id:"id"},"ID"),(0,a.kt)("p",null,"A project identifier is a unique resource for locating a project. The ID is explicitly configured\nwithin ",(0,a.kt)("a",{parentName:"p",href:"../config/workspace"},(0,a.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),", as a key within the\n",(0,a.kt)("a",{parentName:"p",href:"../config/workspace#projects"},(0,a.kt)("inlineCode",{parentName:"a"},"projects"))," setting, and can be written in camelCase, kebab-case, or\nsnake_case."),(0,a.kt)("p",null,"IDs are used heavily by configuration and the command line to link and reference everything. They're\nalso a much easier concept for remembering projects than file system paths, and they typically can\nbe written with less key strokes."),(0,a.kt)("p",null,"Lastly, a project ID can be paired with a task ID to create a ",(0,a.kt)("a",{parentName:"p",href:"./target"},"target"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Projects can be configured with an optional ",(0,a.kt)("a",{parentName:"p",href:"../config/project"},(0,a.kt)("inlineCode",{parentName:"a"},"project.yml"))," in the project root,\nor through the optional ",(0,a.kt)("a",{parentName:"p",href:"../config/global-project"},(0,a.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," which applies to all\nprojects."),(0,a.kt)("h3",{id:"packagejson"},(0,a.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,a.kt)("p",null,"A moon project ",(0,a.kt)("em",{parentName:"p"},"does not require")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", but when one exists, the following functionality\nis enabled."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependency versions are included when computing cache keys and hashes."),(0,a.kt)("li",{parentName:"ul"},"Depended on projects (",(0,a.kt)("a",{parentName:"li",href:"../config/project#dependson"},(0,a.kt)("inlineCode",{parentName:"a"},"dependsOn")),") are mapped as workspace\ndependencies (when applicable).")),(0,a.kt)("h3",{id:"tsconfigjson"},(0,a.kt)("inlineCode",{parentName:"h3"},"tsconfig.json")),(0,a.kt)("p",null,"A moon project ",(0,a.kt)("em",{parentName:"p"},"does not require")," TypeScript or a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", but when one exists, the\nfollowing functionality is enabled."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Depended on projects (",(0,a.kt)("a",{parentName:"li",href:"../config/project#dependson"},(0,a.kt)("inlineCode",{parentName:"a"},"dependsOn")),") are mapped as TypeScript project\nreferences (when applicable).")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"File name can be customized with the\n",(0,a.kt)("a",{parentName:"p",href:"../config/workspace#projectconfigfilename"},(0,a.kt)("inlineCode",{parentName:"a"},"typescript.projectConfigFileName"))," setting.")))}d.isMDXComponent=!0}}]);