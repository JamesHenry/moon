"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5899],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8109:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7378);function r(e){let{src:t,width:n="90%",alt:r="",title:o,align:i="center",padding:l="1rem"}=e;return a.createElement("div",{style:{marginBottom:l,marginTop:l,textAlign:i}},a.createElement("img",{src:t.default,width:n,alt:r,title:o,className:"inline-block"}))}},7965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(5773),r=(n(7378),n(5318)),o=n(8109);const i={slug:"v0.14",title:"moon v0.14 - Code generation and implicit dependencies",authors:["milesj"],tags:["generator","project-graph","ci"]},l=void 0,p={permalink:"/blog/v0.14",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-13_v0.14.mdx",source:"@site/blog/2022-09-13_v0.14.mdx",title:"moon v0.14 - Code generation and implicit dependencies",description:"With this release, we've landed some new features that have been requested multiple times since",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[{label:"generator",permalink:"/blog/tags/generator"},{label:"project-graph",permalink:"/blog/tags/project-graph"},{label:"ci",permalink:"/blog/tags/ci"}],readingTime:1.715,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.14",title:"moon v0.14 - Code generation and implicit dependencies",authors:["milesj"],tags:["generator","project-graph","ci"]},prevItem:{title:"moon v0.15 - Enhanced Docker support and 1,000 stars!",permalink:"/blog/v0.15"},nextItem:{title:"moon v0.13 - Hashing and toolchain improvements",permalink:"/blog/v0.13"}},s={authorsImageUrls:[void 0]},c=[{value:"New <code>moon generate</code> command",id:"new-moon-generate-command",level:2},{value:"Implicit dependency scanning",id:"implicit-dependency-scanning",level:2},{value:"Report CI runs on pull requests",id:"report-ci-runs-on-pull-requests",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this release, we've landed some new features that have been requested multiple times since\nlaunch. A code generation and template scaffolding layer, as well as implicit dependency scanning\nfor the project graph!"),(0,r.kt)("h2",{id:"new-moon-generate-command"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"moon generate")," command"),(0,r.kt)("p",null,"Code generation is the staple of any large company or repository. Want to spin up a new application?\nWhat about an npm package? Or maybe third-party integrations? Avoid copy-and-pasting existing code,\nand instead generate it with the new ",(0,r.kt)("inlineCode",{parentName:"p"},"moon generate")," command, which is powered by our new generator\nsystem."),(0,r.kt)("p",null,'The generator will locate a template by name on the file system ("npm-package" in the example\nbelow), prompt and interpolate variables, render the files with ',(0,r.kt)("a",{parentName:"p",href:"https://tera.netlify.app/"},"Tera")," (a\nRust based template engine), and write the files to the target destination."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Generate code from a template to a target directory\n$ moon generate npm-package ./packages/example\n")),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"../docs/guides/codegen"},"code generation in the official guide"),"!"),(0,r.kt)("h2",{id:"implicit-dependency-scanning"},"Implicit dependency scanning"),(0,r.kt)("p",null,"This has been a request since moon's official release, and it's finally here! Up until now, if you\nwanted project-to-project dependency relationships, you had to explicitly declare them with\n",(0,r.kt)("a",{parentName:"p",href:"../docs/config/project#dependson"},(0,r.kt)("inlineCode",{parentName:"a"},"dependsOn")),". But thanks to a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/pull/288"},"ton of"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/pull/249"},"infrastructure")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/pull/277"},"platform")," changes, we can now infer implicit\ndependencies automatically!"),(0,r.kt)("p",null,"We still suggest using explicit dependencies, as it provides more\n",(0,r.kt)("a",{parentName:"p",href:"../docs/concepts/project#dependencies"},"automation like project syncing"),", but implicit is great for\nadoption and migration purposes."),(0,r.kt)("h2",{id:"report-ci-runs-on-pull-requests"},"Report CI runs on pull requests"),(0,r.kt)("p",null,"We're fans of continuous and easily accessible feedback, and as such, have released a new GitHub\naction, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/moon-ci-run-reports"},(0,r.kt)("inlineCode",{parentName:"a"},"moonrepo/run-report-action")),",\nwhich reports the results of ",(0,r.kt)("a",{parentName:"p",href:"../docs/commands/ci"},(0,r.kt)("inlineCode",{parentName:"a"},"moon ci"))," as a pull request comment. The report\nlooks something like the following:"),(0,r.kt)(o.Z,{src:n(3432),width:"60%",mdxType:"Image"}),(0,r.kt)("h2",{id:"other-changes"},"Other changes"),(0,r.kt)("p",null,"View the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.14.0"},"official release")," for a\nfull list of changes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When running in a Docker container, caching is disabled in an effort to greatly reduce the size of\nthe image."),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("inlineCode",{parentName:"li"},"moon setup")," to also install Node.js dependencies.")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Expect the following in the v0.15 release!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Major Docker workflow improvements!"),(0,r.kt)("li",{parentName:"ul"},"Frontmatter configuration within template files.")))}d.isMDXComponent=!0},3432:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/run-report-41cffa17cd530ab8cca5cef47b38dcfd.png"}}]);