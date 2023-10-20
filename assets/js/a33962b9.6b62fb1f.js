"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82763],{35318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),g=o,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(25773),o=(t(27378),t(35318));const i={title:"Sharing workspace configuration"},a=void 0,s={unversionedId:"guides/sharing-config",id:"guides/sharing-config",title:"Sharing workspace configuration",description:"For large companies, open source maintainers, and those that love reusability, more often than not",source:"@site/docs/guides/sharing-config.mdx",sourceDirName:"guides",slug:"/guides/sharing-config",permalink:"/docs/guides/sharing-config",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/sharing-config.mdx",tags:[],version:"current",frontMatter:{title:"Sharing workspace configuration"},sidebar:"guides",previous:{title:"Root-level project",permalink:"/docs/guides/root-project"},next:{title:"Webhooks (experimental)",permalink:"/docs/guides/webhooks"}},l={},c=[{value:"Versioning",id:"versioning",level:2},{value:"Using versioned filenames",id:"using-versioned-filenames",level:3},{value:"Using branches, tags, or commits",id:"using-branches-tags-or-commits",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For large companies, open source maintainers, and those that love reusability, more often than not\nyou'll want to use the same configuration across all repositories for consistency. This helps reduce\nthe maintenance burden while ensuring a similar developer experience."),(0,o.kt)("p",null,"To help streamline this process, moon provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," setting in both\n",(0,o.kt)("a",{parentName:"p",href:"../config/workspace#extends"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),",\n",(0,o.kt)("a",{parentName:"p",href:"../config/toolchain#extends"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),", and\n",(0,o.kt)("a",{parentName:"p",href:"../config/tasks#extends"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/tasks.yml")),". This setting requires a HTTPS URL ",(0,o.kt)("em",{parentName:"p"},"or")," relative file\nsystem path that points to a valid YAML document for the configuration in question."),(0,o.kt)("p",null,'A great way to share configuration is by using GitHub\'s "raw file view", as demonstrated below using\nour very own ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/examples"},"examples repository"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks.yml"',title:'".moon/tasks.yml"'},"extends: 'https://raw.githubusercontent.com/moonrepo/examples/master/.moon/tasks.yml'\n")),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,'Inheriting an upstream configuration can be dangerous, as the settings may change at any point,\nresulting in broken builds. To mitigate this, you can used a "versioned" upstream configuration,\nwhich is ideally a fixed point in time. How this is implemented is up to you or your company, but we\nsuggest the following patterns:'),(0,o.kt)("h3",{id:"using-versioned-filenames"},"Using versioned filenames"),(0,o.kt)("p",null,"A rudimentary solution is to append a version to the upstream filename. When the file is modified, a\nnew version should be created, while the previous version remains untouched."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-extends: '../shared/project.yml'\n+extends: '../shared/project-v1.yml'\n")),(0,o.kt)("h3",{id:"using-branches-tags-or-commits"},"Using branches, tags, or commits"),(0,o.kt)("p",null,"When using a version control platform, like GitHub above, you can reference the upstream\nconfiguration through a branch, tag, commit, or sha. Since these are a reference point in time, they\nare relatively safe."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-extends: 'https://raw.githubusercontent.com/moonrepo/examples/master/.moon/tasks.yml'\n+extends: 'https://raw.githubusercontent.com/moonrepo/examples/c3f10160bcd16b48b8d4d21b208bb50f6b09bd96/.moon/tasks.yml'\n")))}u.isMDXComponent=!0}}]);