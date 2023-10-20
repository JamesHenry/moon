"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47969],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(25773),r=(n(27378),n(35318));const i={title:"Cache"},o=void 0,s={unversionedId:"concepts/cache",id:"concepts/cache",title:"Cache",description:"moon's able to achieve high performance and blazing speeds by implementing a cache that's powered by",source:"@site/docs/concepts/cache.mdx",sourceDirName:"concepts",slug:"/concepts/cache",permalink:"/docs/concepts/cache",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/cache.mdx",tags:[],version:"current",frontMatter:{title:"Cache"},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/concepts"},next:{title:"File groups",permalink:"/docs/concepts/file-group"}},l={},c=[{value:"Hashing",id:"hashing",level:2},{value:"Archiving &amp; hydration",id:"archiving--hydration",level:2},{value:"File structure",id:"file-structure",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"moon's able to achieve high performance and blazing speeds by implementing a cache that's powered by\nour own unique smart hashing layer. All cache is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},".moon/cache"),", relative from the\nworkspace root (be sure to git ignore this folder)."),(0,r.kt)("h2",{id:"hashing"},"Hashing"),(0,r.kt)("p",null,"Incremental builds are possible through a concept known as hashing, where in multiple sources are\naggregated to generate a unique hash. In the context of moon, each time a target is ran we generate\na hash, and if this hash already exists we abort early (cache hit), otherwise we continue the run\n(cache miss)."),(0,r.kt)("p",null,"The tiniest change may trigger a different hash, for example, changing a line of code (when an\ninput), or updating a package version, so don't worry if you see ",(0,r.kt)("em",{parentName:"p"},"a lot")," of hashes."),(0,r.kt)("p",null,"Our smart hashing currently takes the following sources into account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command (",(0,r.kt)("inlineCode",{parentName:"li"},"command"),") being ran and its arguments (",(0,r.kt)("inlineCode",{parentName:"li"},"args"),")."),(0,r.kt)("li",{parentName:"ul"},"Input sources (",(0,r.kt)("inlineCode",{parentName:"li"},"inputs"),")."),(0,r.kt)("li",{parentName:"ul"},"Output targets (",(0,r.kt)("inlineCode",{parentName:"li"},"outputs"),")."),(0,r.kt)("li",{parentName:"ul"},"Environment variables (",(0,r.kt)("inlineCode",{parentName:"li"},"env"),")."),(0,r.kt)("li",{parentName:"ul"},"Dependencies between projects (",(0,r.kt)("inlineCode",{parentName:"li"},"dependsOn"),") and tasks (",(0,r.kt)("inlineCode",{parentName:"li"},"deps"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"For Deno tasks"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deno version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deno.json"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"deps.ts")," imports, import maps, and scopes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," compiler options (when applicable)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"For Node.js tasks"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Node.js version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies (including development and peer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," compiler options (when applicable).")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be aware that greedy inputs (",(0,r.kt)("inlineCode",{parentName:"p"},"**/*"),", the default) will include ",(0,r.kt)("em",{parentName:"p"},"everything")," in the target directory\nas a source. We do our best to filter out VCS ignored files, and ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," for the current task, but\nfiles may slip through that you don't expect. We suggest using explicit ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," and routinely\nauditing the hash files for accuracy!")),(0,r.kt)("h2",{id:"archiving--hydration"},"Archiving & hydration"),(0,r.kt)("p",null,"On top of our hashing layer, we have another concept known as archiving, where in we create a\ntarball archive of a task's outputs and store it in ",(0,r.kt)("inlineCode",{parentName:"p"},".moon/cache/outputs"),". These are akin to build\nartifacts."),(0,r.kt)("p",null,"When we encounter a cache hit on a hash, we trigger a mechanism known as hydration, where we\nefficiently unpack an existing tarball archive into a task's outputs. This can be understood as a\ntimeline, where every point in time will have its own hash + archive that moon can play back."),(0,r.kt)("p",null,'Furthermore, if we receive a cache hit on the hash, and the hash is the same as the last run, and\noutputs exist, we exit early without hydrating and assume the project is already hydrated. In the\nterminal, you\'ll see a message for "cached from previous run".'),(0,r.kt)("h2",{id:"file-structure"},"File structure"),(0,r.kt)("p",null,"The following diagram outlines our cache folder structure and why each piece exists."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},".moon/cache/\n    # Stores hash manifests of every ran task. Exists purely for debugging purposes.\n    hashes/\n        # Contents includes all sources used to generate the hash.\n        <hash>.json\n\n    # Stores `tar.gz` archives of a task's outputs based on its generated hash.\n    outputs/\n        <hash>.tar.gz\n\n    # State information about anything and everything within moon. Toolchain,\n    # dependencies, projects, running targets, etc.\n    states/\n        # Files at the root pertain to the entire workspace.\n        <state>.json\n\n        # Files for a project are nested within a folder by the project name.\n        <project>/\n            # Informational snapshot of the project, its tasks, and its configs.\n            # Can be used at runtime by tasks that require this information.\n            snapshot.json\n\n            <task>/\n                # Contents of the child process, including the exit code and\n                # unique hash that is referenced above.\n                lastRun.json\n\n                # Outputs of last run target.\n                stderr.log\n                stdout.log\n")))}u.isMDXComponent=!0}}]);