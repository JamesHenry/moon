"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69959],{35318:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(o),g=r,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||a;return o?n.createElement(d,i(i({ref:t},u),{},{components:o})):n.createElement(d,i({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},91981:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(25773),r=(o(27378),o(35318));const a={slug:"proto-v0.4",title:"proto v0.4 - Rust support, user configs, and more",authors:["milesj"],tags:["proto","rust","config"],image:"./img/proto/v0.4.png"},i=void 0,l={permalink:"/blog/proto-v0.4",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-03-31_proto-v0.4.mdx",source:"@site/blog/2023-03-31_proto-v0.4.mdx",title:"proto v0.4 - Rust support, user configs, and more",description:"With this release, we've added Rust language support, user configs, and a few other improvements.",date:"2023-03-31T00:00:00.000Z",formattedDate:"March 31, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"rust",permalink:"/blog/tags/rust"},{label:"config",permalink:"/blog/tags/config"}],readingTime:1.43,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.4",title:"proto v0.4 - Rust support, user configs, and more",authors:["milesj"],tags:["proto","rust","config"],image:"./img/proto/v0.4.png"},prevItem:{title:"moon v1.1 - Task debugging and improvements",permalink:"/blog/moon-v1.1"},nextItem:{title:"moon v1.0 - Official release! Project constraints, tagging, and more!",permalink:"/blog/moon-v1.0"}},s={image:o(74896).Z,authorsImageUrls:[void 0]},p=[{value:"Rust language support",id:"rust-language-support",level:2},{value:"New user configuration",id:"new-user-configuration",level:2},{value:"New <code>proto upgrade</code> command",id:"new-proto-upgrade-command",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this release, we've added Rust language support, user configs, and a few other improvements."),(0,r.kt)("h2",{id:"rust-language-support"},"Rust language support"),(0,r.kt)("p",null,"We're very excited to announce support for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust language")," in proto.\nThis is our first language addition since the initial release, and we're very happy with how it\nturned out."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install rust stable\n")),(0,r.kt)("p",null,"For those of you unfamiliar with Rust, Rust provides its own toolchain manager through\n",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs/"},(0,r.kt)("inlineCode",{parentName:"a"},"rustup"))," \u2014 a very powerful one at that. We don't want to reinvent the wheel\nhere, so instead of downloading and installing Rust into proto's toolchain, we chose to call\n",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," commands under the hood. Because of this, Rust support in proto requires Rust/Cargo to be\npre-installed on your system. Jump to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/proto/tools#rust"},"docs for more information"),"."),(0,r.kt)("p",null,"All in all, the cool thing about supporting Rust in proto is that you can standardize all your tools\nin a single config for ",(0,r.kt)("a",{parentName:"p",href:"/docs/proto/commands/use"},(0,r.kt)("inlineCode",{parentName:"a"},"proto use")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'node = "18.2.0"\nrust = "1.68.0"\n')),(0,r.kt)("h2",{id:"new-user-configuration"},"New user configuration"),(0,r.kt)("p",null,"We have a long list of ideas and features that would be cool to support in proto, but not as the\ndefault functionality. Because of this, we required a way for users to opt-in to this functionality,\nand have landed on a new user configuration located at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/config.toml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="~/.proto/config.toml"',title:'"~/.proto/config.toml"'},"auto-install = true\n")),(0,r.kt)("p",null,"This new configuration only supports a single setting (for now), ",(0,r.kt)("inlineCode",{parentName:"p"},"auto-install"),", that when enabled,\nwill automatically install a missing tool for the detected version when running\n",(0,r.kt)("a",{parentName:"p",href:"/docs/proto/commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"proto run"))," (or a shim)."),(0,r.kt)("h2",{id:"new-proto-upgrade-command"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"proto upgrade")," command"),(0,r.kt)("p",null,"We now provide a ",(0,r.kt)("a",{parentName:"p",href:"/docs/proto/commands/upgrade"},(0,r.kt)("inlineCode",{parentName:"a"},"proto upgrade"))," command for upgrading proto itself.\nThis will download the latest version and replace the binary at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/bin/proto"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto upgrade\n")))}c.isMDXComponent=!0},74896:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/v0.4-f1ea661077af65863b43b8da3d5b4172.png"}}]);