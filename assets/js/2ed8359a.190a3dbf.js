"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2121],{5318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8237:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=t(5773),o=t(808),r=(t(7378),t(5318)),i=["components"],l={title:"Toolchain"},p=void 0,s={unversionedId:"concepts/toolchain",id:"concepts/toolchain",title:"Toolchain",description:"The toolchain is an internal layer for downloading, installing, and managing tools (languages,",source:"@site/docs/concepts/toolchain.mdx",sourceDirName:"concepts",slug:"/concepts/toolchain",permalink:"/docs/concepts/toolchain",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/toolchain.mdx",tags:[],version:"current",frontMatter:{title:"Toolchain"},sidebar:"docs",previous:{title:"Tokens",permalink:"/docs/concepts/token"},next:{title:"Workspace",permalink:"/docs/concepts/workspace"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Supported tools",id:"supported-tools",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"npm",id:"npm",level:4},{value:"pnpm",id:"pnpm",level:4},{value:"yarn",id:"yarn",level:4}],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'The toolchain is an internal layer for downloading, installing, and managing tools (languages,\nlibraries, and binaries) that are required at runtime. We embrace this approach over relying on\nthese tools "existing" in the current environment, as it ensures the following across any\nenvironment or machine:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The version and enabled features of a tool are identical."),(0,r.kt)("li",{parentName:"ul"},"Tools are isolated and unaffected by external sources."),(0,r.kt)("li",{parentName:"ul"},"Builds are consistent, reproducible, and ",(0,r.kt)("em",{parentName:"li"},"hopefully")," deterministic.")),(0,r.kt)("p",null,"Furthermore, this avoids a developer, pipeline, machine, etc, having to pre-install all the\nnecessary tools, ",(0,r.kt)("em",{parentName:"p"},"and")," to keep them in sync as time passes."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The toolchain is a ",(0,r.kt)("inlineCode",{parentName:"p"},".moon")," directory within the current user's home directory, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.moon"),"."),(0,r.kt)("p",null,"The first step in a tool's life-cycle is being downloaded to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.moon/temp"),". Downloads are typically\nan archive that can be unpacked into a target directory."),(0,r.kt)("p",null,"Once downloaded, we verify the downloaded file by running a sha256 checksum. If this check fails for\n",(0,r.kt)("em",{parentName:"p"},"any reason"),", the toolchain is unusable, and the process is aborted."),(0,r.kt)("p",null,"After a successful verification, the last step in the tool's life-cycle can begin, installation.\nDepending on the type of download, the installation process may differ. For archives, we unpack the\ntool to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.moon/tools/<name>/<version>"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The tools that are managed by the toolchain are configured through the\n",(0,r.kt)("a",{parentName:"p",href:"../config/workspace"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml"))," file."),(0,r.kt)("h2",{id:"supported-tools"},"Supported tools"),(0,r.kt)("p",null,"The following tools will be managed by the toolchain."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Although the toolchain was designed for JavaScript projects, mainly powered by Node.js tooling, we\nmay support other languages in the future when deemed necessary, like Ruby or Python.")),(0,r.kt)("h3",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"Since moon was designed for JavaScript based repo's, we intentionally support Node.js as a\nfirst-class citizen within the toolchain. Because of this, Node.js is ",(0,r.kt)("em",{parentName:"p"},"always enabled"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configured with: ",(0,r.kt)("a",{parentName:"li",href:"../config/workspace#node"},(0,r.kt)("inlineCode",{parentName:"a"},"node"))),(0,r.kt)("li",{parentName:"ul"},"Installed to: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.moon/tools/node/x.x.x"))),(0,r.kt)("h4",{id:"npm"},"npm"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," binary comes pre-installed with Node.js, and will ",(0,r.kt)("em",{parentName:"p"},"always exist"),", regardless of the\n",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#packagemanager"},(0,r.kt)("inlineCode",{parentName:"a"},"node.packageManager"))," setting."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configured with: ",(0,r.kt)("a",{parentName:"li",href:"../config/workspace#npm-pnpm-yarn"},(0,r.kt)("inlineCode",{parentName:"a"},"node.npm"))),(0,r.kt)("li",{parentName:"ul"},"Installed to: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.moon/tools/node/x.x.x/bin/npm")," (and ",(0,r.kt)("inlineCode",{parentName:"li"},"npx"),")")),(0,r.kt)("h4",{id:"pnpm"},"pnpm"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm"))," library can be used as an alternative package manager to npm, and will\nbe enabled when ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#packagemanager"},(0,r.kt)("inlineCode",{parentName:"a"},"node.packageManager")),' is set to "pnpm". The\nbinary will be installed as a toolchain global npm dependency.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configured with: ",(0,r.kt)("a",{parentName:"li",href:"../config/workspace#npm-pnpm-yarn"},(0,r.kt)("inlineCode",{parentName:"a"},"node.pnpm"))),(0,r.kt)("li",{parentName:"ul"},"Installed to: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.moon/tools/node/x.x.x/bin/pnpm"))),(0,r.kt)("h4",{id:"yarn"},"yarn"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn"))," library can be used as an alternative package manager to npm, and\nwill be enabled when ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#packagemanager"},(0,r.kt)("inlineCode",{parentName:"a"},"node.packageManager")),' is set to "yarn".\nThe binary will be installed as a toolchain global npm dependency.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configured with: ",(0,r.kt)("a",{parentName:"li",href:"../config/workspace#npm-pnpm-yarn"},(0,r.kt)("inlineCode",{parentName:"a"},"node.yarn"))),(0,r.kt)("li",{parentName:"ul"},"Installed to: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.moon/tools/node/x.x.x/bin/yarn"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Supports v1 and v2/v3 (only ",(0,r.kt)("inlineCode",{parentName:"p"},"node-modules")," linker mode currently).")))}m.isMDXComponent=!0}}]);