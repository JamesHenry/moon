"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51705],{35318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var o=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return t?o.createElement(g,r(r({ref:n},u),{},{components:t})):o.createElement(g,r({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=t(25773),a=(t(27378),t(35318));const l={slug:"proto-v0.5",title:"proto v0.5 - Version aliasing and global binaries",authors:["milesj"],tags:["proto","alias","globals"],image:"./img/proto/v0.5.png"},r=void 0,i={permalink:"/blog/proto-v0.5",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-04-06_proto-v0.5.mdx",source:"@site/blog/2023-04-06_proto-v0.5.mdx",title:"proto v0.5 - Version aliasing and global binaries",description:"With this release, we're providing solutions for installing globals and using aliases.",date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"alias",permalink:"/blog/tags/alias"},{label:"globals",permalink:"/blog/tags/globals"}],readingTime:1.89,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.5",title:"proto v0.5 - Version aliasing and global binaries",authors:["milesj"],tags:["proto","alias","globals"],image:"./img/proto/v0.5.png"},prevItem:{title:"proto v0.6 - Unused cleaning and improved global binaries",permalink:"/blog/proto-v0.6"},nextItem:{title:"moon v1.1 - Task debugging and improvements",permalink:"/blog/moon-v1.1"}},s={image:t(24864).Z,authorsImageUrls:[void 0]},p=[{value:"Install global binaries",id:"install-global-binaries",level:2},{value:"Bun, Deno, Go, Rust",id:"bun-deno-go-rust",level:3},{value:"Node.js, npm, pnpm, yarn",id:"nodejs-npm-pnpm-yarn",level:3},{value:"Custom version aliases",id:"custom-version-aliases",level:2}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this release, we're providing solutions for installing globals and using aliases."),(0,a.kt)("h2",{id:"install-global-binaries"},"Install global binaries"),(0,a.kt)("p",null,"Installing global binaries (packages, modules, etc) is a common task for developers, and proto now\nprovides a solution for this workflow with the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/proto/commands/install-global"},(0,a.kt)("inlineCode",{parentName:"a"},"proto install-global"))," command. Continue reading for more\ninformation."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Global install directories will need to be added manually to your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," from your shell.")),(0,a.kt)("h3",{id:"bun-deno-go-rust"},"Bun, Deno, Go, Rust"),(0,a.kt)("p",null,"All of these languages provide a built-in solution for installing global binaries to a shared\nlocation, regardless of the language's current version. Because of this, proto will simply call\ntheir install commands under the hood."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install-global rust cargo-release\n\n# Same as\n$ cargo install cargo-release --force\n")),(0,a.kt)("p",null,"Globals will be installed to the following locations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bun"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.bun/bin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deno"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.deno/bin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Go"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"~/go/bin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rust"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.cargo/bin"))),(0,a.kt)("h3",{id:"nodejs-npm-pnpm-yarn"},"Node.js, npm, pnpm, yarn"),(0,a.kt)("p",null,"Unfortunately, the Node.js ecosystem is pretty fractured when it comes to installing global\nbinaries. Each package manager provides their own solution for installing globals, and each has\ntheir own quirks. The problem is further exacerbated by the fact that globals are tied to Node.js\nversion, so if you switch versions, you lose all your previous globals!"),(0,a.kt)("p",null,"To work around this, proto standardizes the global installation process for Node.js, but requires\nall globals to be installed through proto. You can no longer use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm add -g"),", so\non and so forth, and must use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install-global node webpack-cli\n")),(0,a.kt)("p",null,"Globals will be installed to a shared location, ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/node/globals/bin"),", and will persist\nacross versions!"),(0,a.kt)("h2",{id:"custom-version-aliases"},"Custom version aliases"),(0,a.kt)("p",null,"We are excited to announce 2 new commands that enable you to define custom version aliases,\n",(0,a.kt)("a",{parentName:"p",href:"/docs/proto/commands/alias"},(0,a.kt)("inlineCode",{parentName:"a"},"proto alias"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/proto/commands/unalias"},(0,a.kt)("inlineCode",{parentName:"a"},"proto unalias")),".\nAliasing of versions is a feature that allows you to assign a custom name or label to a specific\nversion of a tool."),(0,a.kt)("p",null,'For example, instead of using the version number, you can assign a label such as "work" or\n"personal" to a version. This makes it easier to remember and manage different versions.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto alias node work 16.16\n$ proto alias node personal 18\n")),(0,a.kt)("p",null,"Aliases can be used anywhere a version is accepted, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto bin node work\n$ proto install node personal\n")))}m.isMDXComponent=!0},24864:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/v0.5-239b258e475257305a2e2c2094e6a356.png"}}]);