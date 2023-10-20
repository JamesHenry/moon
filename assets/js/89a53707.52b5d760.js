"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23157],{35318:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>m});var t=a(27378);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?t.createElement(k,l(l({ref:n},u),{},{components:a})):t.createElement(k,l({ref:n},u))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39798:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(27378),o=a(37140);const r="tabItem_wHwb";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},n)}},33337:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(25773),o=a(27378),r=a(37140),l=a(83457),i=a(35595),s=a(76457);const c="tabList_J5MA",u="tabItem_l0OV";function p(e){let{className:n,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const n=e.currentTarget,a=p.indexOf(n),t=c[a].value;t!==i&&(d(n),s(t))},k=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=p[a]??p[p.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n)},c.map((e=>{let{value:n,label:a,attributes:l}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:k,onClick:m},l,{className:(0,r.Z)("tabs__item",u,l?.className,{"tabs__item--active":i===n})}),a??n)})))}function d(e){let{lazy:n,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function m(e){const n=(0,i.Y)(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement(p,(0,t.Z)({},e,n)),o.createElement(d,(0,t.Z)({},e,n)))}function k(e){const n=(0,s.Z)();return o.createElement(m,(0,t.Z)({key:String(n)},e))}},35595:(e,n,a)=>{a.d(n,{Y:()=>d});var t=a(27378),o=a(35331),r=a(30654),l=a(70784),i=a(71819);function s(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:o}}=e;return{value:n,label:a,attributes:t,default:o}}))}function c(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??s(a);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function u(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const l=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,r._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function d(e){const{defaultValue:n,queryString:a=!1,groupId:o}=e,r=c(e),[l,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,m]=p({queryString:a,groupId:o}),[k,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,i.Nk)(a);return[o,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:o}),g=(()=>{const e=d??k;return u({value:e,tabValues:r})?e:null})();(0,t.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),f(e)}),[m,f,r]),tabValues:r}}},55946:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=a(25773),o=(a(27378),a(35318)),r=a(33337),l=a(39798);const i={title:"Docker usage"},s=void 0,c={unversionedId:"guides/docker",id:"guides/docker",title:"Docker usage",description:"Using Docker to run your applications? Or build your artifacts? No",source:"@site/docs/guides/docker.mdx",sourceDirName:"guides",slug:"/guides/docker",permalink:"/docs/guides/docker",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/docker.mdx",tags:[],version:"current",frontMatter:{title:"Docker usage"},sidebar:"guides",previous:{title:"Debugging a task",permalink:"/docs/guides/debug-task"},next:{title:"Offline mode",permalink:"/docs/guides/offline-mode"}},u={},p=[{value:"Performance improvements",id:"performance-improvements",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"What we&#39;re trying to avoid",id:"what-were-trying-to-avoid",level:3},{value:"Scaffolding the bare minimum",id:"scaffolding-the-bare-minimum",level:3},{value:"Copying necessary source files",id:"copying-necessary-source-files",level:3},{value:"Pruning extraneous files",id:"pruning-extraneous-files",level:3},{value:"Final result",id:"final-result",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Process failure for git",id:"process-failure-for-git",level:3}],d={toc:p};function m(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," to run your applications? Or build your artifacts? No\nworries, moon can be utilized with Docker, and supports a robust integration layer."),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("p",{parentName:"admonition"},"Looking to speed up your Docker builds? Want to build in the cloud?\n",(0,o.kt)("a",{parentName:"p",href:"https://depot.dev?ref=moonrepo"},"Give Depot a try"),"!")),(0,o.kt)("h2",{id:"performance-improvements"},"Performance improvements"),(0,o.kt)("p",null,"For the most part, everything should just work, but we have disabled caching and hashing in Docker\ncontainers and images for the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoids having to mount a volume for the ",(0,o.kt)("inlineCode",{parentName:"li"},".git")," directory."),(0,o.kt)("li",{parentName:"ul"},"Reduces the overall image size as we're avoiding creating tarballs."),(0,o.kt)("li",{parentName:"ul"},"Ensures that builds are fresh and up-to-date.")),(0,o.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,o.kt)("p",null,"We're very familiar with how tedious ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"s are to write and maintain, so in an effort to\nreduce this headache, we've built a handful of tools to make this process much easier. With moon,\nwe'll take advantage of Docker's layer caching and staged builds as much as possible."),(0,o.kt)("p",null,"With that being said, there's many approaches you can utilize, depending on your workflow (we'll\ndocument them below):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Running ",(0,o.kt)("inlineCode",{parentName:"li"},"moon docker")," commands ",(0,o.kt)("em",{parentName:"li"},"before")," running ",(0,o.kt)("inlineCode",{parentName:"li"},"docker run|build")," commands."),(0,o.kt)("li",{parentName:"ul"},"Running ",(0,o.kt)("inlineCode",{parentName:"li"},"moon docker")," commands ",(0,o.kt)("em",{parentName:"li"},"within")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile"),"."),(0,o.kt)("li",{parentName:"ul"},"Using multi-staged or standard builds."),(0,o.kt)("li",{parentName:"ul"},"Something else unique to your setup!")),(0,o.kt)("h3",{id:"what-were-trying-to-avoid"},"What we're trying to avoid"),(0,o.kt)("p",null,"Before we dive into writing a perfect ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", we'll briefly talk about the pain points we're\ntrying to avoid. In the context of Node.js and monorepo's, you may be familiar with having to ",(0,o.kt)("inlineCode",{parentName:"p"},"COPY"),"\neach individual ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," in the monorepo before installing ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", to effectively use\nlayer caching. This is very brittle, as each new application or package is created, every\n",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the monorepo will need to be modified to account for this new ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("p",null,"Furthermore, we'll have to follow a similar process for ",(0,o.kt)("em",{parentName:"p"},"only copying source files")," necessary for\nthe build or ",(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," to complete. This is ",(0,o.kt)("em",{parentName:"p"},"very tedious"),", so most developers simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"COPY . .")," and\nforget about it. Copying the entire monorepo is costly, especially as it grows."),(0,o.kt)("p",null,"As an example, we'll use moon's official repository. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," would look something like the\nfollowing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM node:latest\n\nWORKDIR /app\n\n# Install moon binary\nRUN npm install -g @moonrepo/cli\n\n# Copy moon files\nCOPY ./.moon ./.moon\n\n# Copy all package.json's and lockfiles\nCOPY ./packages/cli/package.json ./packages/cli/package.json\nCOPY ./packages/core-linux-arm64-gnu/package.json ./packages/core-linux-arm64-gnu/package.json\nCOPY ./packages/core-linux-arm64-musl/package.json ./packages/core-linux-arm64-musl/package.json\nCOPY ./packages/core-linux-x64-gnu/package.json ./packages/core-linux-x64-gnu/package.json\nCOPY ./packages/core-linux-x64-musl/package.json ./packages/core-linux-x64-musl/package.json\nCOPY ./packages/core-macos-arm64/package.json ./packages/core-macos-arm64/package.json\nCOPY ./packages/core-macos-x64/package.json ./packages/core-macos-x64/package.json\nCOPY ./packages/core-windows-x64-msvc/package.json ./packages/core-windows-x64-msvc/package.json\nCOPY ./packages/runtime/package.json ./packages/runtime/package.json\nCOPY ./packages/types/package.json ./packages/types/package.json\nCOPY ./package.json ./package.json\nCOPY ./yarn.lock ./yarn.lock\nCOPY ./.yarn ./.yarn\nCOPY ./.yarnrc.yml ./yarnrc.yml\n\n# Install toolchain and dependencies\nRUN moon docker setup\n\n# Copy project and required files\nCOPY ./packages/types ./packages/types\nCOPY ./packages/runtime ./packages/runtime\n# OR COPY . .\n\n# Build the target\nRUN moon run runtime:build\n")),(0,o.kt)("p",null,"For such a small monorepo, this already looks too confusing!!! Let's remedy this by utilizing moon\nitself to the fullest!"),(0,o.kt)("h3",{id:"scaffolding-the-bare-minimum"},"Scaffolding the bare minimum"),(0,o.kt)("p",null,"The first step in this process is to only copy the bare minimum of files necessary for installing\ndependencies (Node.js modules, etc). This is typically manifests (",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"), lockfiles\n(",(0,o.kt)("inlineCode",{parentName:"p"},"yarn.lock"),", etc), and any configuration (",(0,o.kt)("inlineCode",{parentName:"p"},".yarnrc.yml"),", etc)."),(0,o.kt)("p",null,"This can all be achieved by the ",(0,o.kt)("a",{parentName:"p",href:"../commands/docker/scaffold"},(0,o.kt)("inlineCode",{parentName:"a"},"moon docker scaffold"))," command, which scaffolds a\nskeleton of the repository structure, with only necessary files (the above). Let's update our\n",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," usage."),(0,o.kt)(r.Z,{groupId:"dockerfile",defaultValue:"standard",values:[{label:"Standard",value:"standard"},{label:"Multi-staged",value:"staged"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"standard",mdxType:"TabItem"},(0,o.kt)("p",null,"This assumes ",(0,o.kt)("a",{parentName:"p",href:"../commands/docker/scaffold"},(0,o.kt)("inlineCode",{parentName:"a"},"moon docker scaffold <project>"))," is ran outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM node:latest\nWORKDIR /app\n\n# Install moon binary\nRUN npm install -g @moonrepo/cli\n\n# Copy workspace skeleton\nCOPY ./.moon/docker/workspace .\n\n# Install toolchain and dependencies\nRUN moon docker setup\n"))),(0,o.kt)(l.Z,{value:"staged",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"#### BASE\nFROM node:latest AS base\nWORKDIR /app\n\n# Install moon binary\nRUN npm install -g @moonrepo/cli\n\n#### WORKSPACE\nFROM base AS workspace\nWORKDIR /app\n\n# Copy entire repository and scaffold\nCOPY . .\nRUN moon docker scaffold <project>\n\n#### BUILD\nFROM base AS build\nWORKDIR /app\n\n# Copy workspace skeleton\nCOPY --from=workspace /app/.moon/docker/workspace .\n\n# Install toolchain and dependencies\nRUN moon docker setup\n")))),(0,o.kt)("p",null,"And with this, our dependencies will be layer cached effectively! Let's now move onto copying source\nfiles."),(0,o.kt)("h3",{id:"copying-necessary-source-files"},"Copying necessary source files"),(0,o.kt)("p",null,"The next step is to copy all source files necessary for ",(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," or any ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN")," commands to execute\ncorrectly. This typically requires copying all source files for the project ",(0,o.kt)("em",{parentName:"p"},"and")," all source files\nof the project's dependencies... NOT the entire repository!"),(0,o.kt)("p",null,"Luckily our ",(0,o.kt)("a",{parentName:"p",href:"../commands/docker/scaffold"},(0,o.kt)("inlineCode",{parentName:"a"},"moon docker scaffold <project>"))," command has already done this for us! Let's\ncontinue updating our ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to account for this, by appending the following:"),(0,o.kt)(r.Z,{groupId:"dockerfile",defaultValue:"standard",values:[{label:"Standard",value:"standard"},{label:"Multi-staged",value:"staged"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"standard",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"# Copy source files\nCOPY ./.moon/docker/sources .\n\n# Run something\nRUN moon run <project>:<task>\n"))),(0,o.kt)(l.Z,{value:"staged",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"# Copy source files\nCOPY --from=workspace /app/.moon/docker/sources .\n\n# Run something\nRUN moon run <project>:<task>\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you need additional files for your commands to run successfully, you can manually use ",(0,o.kt)("inlineCode",{parentName:"p"},"COPY")," or\npass ",(0,o.kt)("inlineCode",{parentName:"p"},"--include")," to the scaffold command.")),(0,o.kt)("h3",{id:"pruning-extraneous-files"},"Pruning extraneous files"),(0,o.kt)("p",null,"Now that we've ran a command or built an artifact, we should prune the Docker environment to remove\nunneeded files and folders. We can do this with the ",(0,o.kt)("a",{parentName:"p",href:"../commands/docker/prune"},(0,o.kt)("inlineCode",{parentName:"a"},"moon docker prune"))," command, which\n",(0,o.kt)("em",{parentName:"p"},"must be ran")," within the context of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"# Prune workspace\nRUN moon docker prune\n")),(0,o.kt)("p",null,"When ran, this command will do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install production only dependencies for the projects that were scaffolded."),(0,o.kt)("li",{parentName:"ul"},"Remove extraneous dependencies (",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),") for unfocused projects.")),(0,o.kt)("h3",{id:"final-result"},"Final result"),(0,o.kt)("p",null,"And with this moon integration, we've reduced the original ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," of 35 lines to 18 lines, a\nreduction of almost 50%. The original file can also be seen as ",(0,o.kt)("inlineCode",{parentName:"p"},"O(n)"),", as each new manifest requires\ncascading updates, while the moon approach is ",(0,o.kt)("inlineCode",{parentName:"p"},"O(1)"),"!"),(0,o.kt)(r.Z,{groupId:"dockerfile",defaultValue:"standard",values:[{label:"Standard",value:"standard"},{label:"Multi-staged",value:"staged"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"standard",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM node:latest\nWORKDIR /app\n\n# Install moon binary\nRUN npm install -g @moonrepo/cli\n\n# Copy workspace skeleton\nCOPY ./.moon/docker/workspace .\n\n# Install toolchain and dependencies\nRUN moon docker setup\n\n# Copy source files\nCOPY ./.moon/docker/sources .\n\n# Run something\nRUN moon run <project>:<task>\n\n# Prune workspace\nRUN moon docker prune\n\n# Or CMD\n"))),(0,o.kt)(l.Z,{value:"staged",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"#### BASE\nFROM node:latest AS base\nWORKDIR /app\n\n# Install moon binary\nRUN npm install -g @moonrepo/cli\n\n#### WORKSPACE\nFROM base AS workspace\nWORKDIR /app\n\n# Copy entire repository and scaffold\nCOPY . .\nRUN moon docker scaffold <project>\n\n#### BUILD\nFROM base AS build\nWORKDIR /app\n\n# Copy workspace skeleton\nCOPY --from=workspace /app/.moon/docker/workspace .\n\n# Install toolchain and dependencies\nRUN moon docker setup\n\n# Copy source files\nCOPY --from=workspace /app/.moon/docker/sources .\n\n# Run something\nRUN moon run <project>:<task>\n\n# Prune workspace\nRUN moon docker prune\n\n# Or CMD\n")))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"process-failure-for-git"},"Process failure for git"),(0,o.kt)("p",null,"Since moon executes ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," commands under the hood, there are some special considerations to be aware\nof when running moon within Docker. There's basically 2 scenarios to choose from:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},".git")," folder to ",(0,o.kt)("inlineCode",{parentName:"li"},".dockerignore"),", so that it's not ",(0,o.kt)("inlineCode",{parentName:"li"},"COPY"),"'d. moon will continue to work\njust fine, albeit with some functionality disabled."),(0,o.kt)("li",{parentName:"ol"},"Ensure that the ",(0,o.kt)("inlineCode",{parentName:"li"},"git")," library is installed in the container, and copy the ",(0,o.kt)("inlineCode",{parentName:"li"},".git")," folder with\n",(0,o.kt)("inlineCode",{parentName:"li"},"COPY"),". moon will work with full functionality, but it will increase the overall size of the\nimage because of caching.")))}m.isMDXComponent=!0}}]);