"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1795],{6981:function(e,t,o){o.r(t),o.d(t,{assets:function(){return I},contentTitle:function(){return E},default:function(){return W},frontMatter:function(){return S},metadata:function(){return D},toc:function(){return P}});var n=o(5773),r=o(808),a=o(7378),s=o(5318),p=o(7279),i="\ud83d\udfe9",u="\ud83d\udfe8",l="\ud83d\udfe6",c=["moon","nx","turborepo"],m=[{feature:"Written in",support:{moon:"Rust",nx:"Node.js",turborepo:"Go"}},{feature:"Workspace configured with",support:{moon:"`.moon/workspace.yml`",nx:"`nx.json`",turborepo:"`turbo.json`"}},{feature:"Projects configured in",support:{moon:"`.moon/workspace.yml`",nx:"`workspace.json`",turborepo:"`package.json` workspaces"}},{feature:"Repo / folder structure",support:{moon:"loose",nx:"strict",turborepo:"loose"}},{feature:"Ignore file support",support:{nx:[i,".nxignore"]}},{feature:"Supports inputs inherited by all tasks",support:{moon:[i,"via `implicitInputs`"],nx:[i,"via `implicitDependencies`"],turborepo:[i,"via `globalDependencies`"]}},{feature:"Supports tasks inherited by all projects",support:{moon:i}},{feature:"Integrates with a version control system",support:{moon:[i,"git",u,"svn"],nx:[i,"git"],turborepo:[i,"git"]}},{feature:"Supports scaffolding / generators",support:{nx:i}}],d=[{feature:"Supported languages",support:{moon:"Bash, Batch, JavaScript, TypeScript",nx:"JavaScript, TypeScript",turborepo:"JavaScript, TypeScript"}},{feature:"Supported package managers",support:{moon:"npm, pnpm, yarn",nx:"npm, pnpm, yarn",turborepo:"npm, pnpm, yarn"}},{feature:"Has a built-in toolchain",support:{moon:i}},{feature:"Downloads and installs languages (when applicable)",support:{moon:i}},{feature:"Configures explicit language/package manager versions",support:{moon:i}}],f=[{feature:"Dependencies on other projects",support:{moon:[i,"explicitly defined or migrated from `package.json`"],nx:[i,"inferred from `package.json` or via `implicitDependencies`"],turborepo:[i,"inferred from `package.json`"]}},{feature:"Ownership metadata",support:{moon:i}},{feature:"Primary programming language",support:{moon:i}},{feature:"Project type (app, lib, etc)",support:{moon:[i,"app, lib, tool"],nx:[i,"app, lib"]}},{feature:"Project-level file groups",support:{moon:i,nx:[i,"via `namedInputs`"]}},{feature:"Project-level tasks",support:{moon:i,nx:i,turborepo:i}},{feature:"Tags and scopes",support:{nx:i}}],h=[{feature:"Known as",support:{moon:"tasks",nx:"targets, executors",turborepo:"tasks"}},{feature:"Defines tasks in",support:{moon:"`moon.yml` or `package.json` scripts",nx:"`project.json` or `package.json` scripts",turborepo:"`package.json` scripts"}},{feature:"Run a single task with",support:{moon:"`moon run project:task`",nx:"`nx run project:target`",turborepo:"`turbo run task --filter=project`"}},{feature:"Run multiple tasks with",support:{moon:"`moon run :task`",nx:"`nx run-many --target=target`",turborepo:"`turbo run task`"}},{feature:"Can define tasks globally",support:{moon:[i,"with `.moon/project.yml`"]}},{feature:"Merges or overrides global tasks",support:{moon:i}},{feature:"Runs a command with args",support:{moon:i,nx:[l,"behind an executor abstraction"],turborepo:[u,"within the script"]}},{feature:"Runs commands from",support:{moon:"project or workspace root",nx:"workspace root",turborepo:"project root"}},{feature:"Supports pipes, redirects, etc",support:{moon:[u,"encapsulated in a file"],nx:[u,"within the executor or script"],turborepo:[u,"within the script"]}},{feature:"Dependencies on other tasks",support:{moon:[i,"via `deps`"],nx:[i,"via `dependsOn`"],turborepo:[i,"via `dependsOn`"]}},{feature:"Runs task dependencies in parallel",support:{moon:i,nx:i,turborepo:i}},{feature:"Can run task dependencies in serial",support:{moon:i}},{feature:"File groups",support:{moon:i,nx:[l,"via `namedInputs`"]}},{feature:"Environment variables",support:{moon:[i,"via `env`"],nx:[u,"within the executor or script"],turborepo:[u,"within the script"]}},{feature:"Inputs",support:{moon:[i,"files, globs, env vars"],nx:[i,"files, globs, env vars, runtime"],turborepo:[i,"files, globs"]}},{feature:"Outputs",support:{moon:[i,"files"],nx:[i,"files, globs"],turborepo:[i,"files"]}},{feature:"Output logging style",support:{nx:[i,"via `--output-style`"],turborepo:[i,"via `outputMode`"]}},{feature:"Custom hash inputs",support:{nx:[i,"via `runtimeCacheInputs`"],turborepo:[i,"via `globalDependencies`"]}},{feature:"Token substitution",support:{moon:i}},{feature:"Configuration presets",support:{nx:[i,"via `configurations`"]}},{feature:"Configurable options",support:{moon:i,nx:i,turborepo:i}}],g=[{feature:"Known as",support:{moon:"action or task runner",nx:"task runner",turborepo:"pipeline"}},{feature:"Generates a dependency graph",support:{moon:i,nx:i,turborepo:i}},{feature:"Runs in topological order",support:{moon:i,nx:i,turborepo:i}},{feature:"Automatically retries failed tasks",support:{moon:i}},{feature:"Caches task outputs via a unique hash",support:{moon:i,nx:i,turborepo:i}},{feature:"Can customize the underlying runner",support:{nx:i}},{feature:"Can profile running tasks",support:{moon:[i,"cpu, heap"],nx:[i,"cpu"],turborepo:[i,"cpu"]}},{feature:"Continuous integration (CI) support",support:{moon:i,nx:u,turborepo:u}},{feature:"Continuous deployment (CD) support",support:{}},{feature:"Remote / cloud caching and syncing",support:{nx:[i,"with Nx cloud (paid)"],turborepo:[i,"requires a Vercel account (free)"]}}];function k(e){var t=e.content;if(!t)return a.createElement(a.Fragment,null,"\ud83d\udfe5");var o=Array.isArray(t)?t.join(" \xa0"):t;return o===i||o===u?a.createElement(a.Fragment,null,o):a.createElement(p.U,{content:o})}function b(e){var t=e.rows;return a.createElement("table",{width:"100%"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null),c.map((function(e){return a.createElement("th",{key:e,align:"center"},e," (",t.filter((function(t){return!!(o=t.support[e])&&(o===i||"\ud83d\udfe5"!==o&&o!==u&&o!==l||Array.isArray(o)&&o[0]===i);var o})).length,")")})))),a.createElement("tbody",null,t.map((function(e){return a.createElement("tr",{key:e.feature},a.createElement("td",null,a.createElement(p.U,{content:e.feature})),c.map((function(t){return a.createElement("td",{key:e.feature+t,align:"center"},a.createElement(k,{content:e.support[t]}))})))}))))}function v(e){return function(){return a.createElement(b,{rows:e})}}var y=v([{feature:"Will automatically install node modules when lockfile changes",support:{moon:i}},{feature:"Can automatically dedupe when lockfile changes",support:{moon:i}},{feature:"Can alias `package.json` names for projects",support:{moon:i}},{feature:"Can add `engines` constraint to root `package.json`",support:{moon:i}},{feature:"Can sync version manager configs (`.nvmrc`, etc)",support:{moon:i}},{feature:"Can sync cross-project dependencies to `package.json`",support:{moon:i}},{feature:"Can sync project references to applicable `tsconfig.json`",support:{moon:i}},{feature:"Can auto-create missing `tsconfig.json`",support:{moon:i}}]),x=v(f),w=v(h),j=v(g),T=v(d),C=v(m),N=["components"],S={title:"Feature comparison"},E=void 0,D={unversionedId:"comparison",id:"comparison",title:"Feature comparison",description:"The following comparisons are not an exhaustive list of features, and may be inaccurate or out of",source:"@site/docs/comparison.mdx",sourceDirName:".",slug:"/comparison",permalink:"/docs/comparison",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/comparison.mdx",tags:[],version:"current",frontMatter:{title:"Feature comparison"},sidebar:"docs",previous:{title:"teardown",permalink:"/docs/commands/teardown"},next:{title:"Terminology",permalink:"/docs/terminology"}},I={},P=[{value:"Questions",id:"questions",level:2},{value:"moon versus competitors?",id:"moon-versus-competitors",level:3},{value:"What about Lerna?",id:"what-about-lerna",level:3},{value:"Comparison tables",id:"comparison-tables",level:2},{value:"Workspace",id:"workspace",level:3},{value:"Toolchain",id:"toolchain",level:3},{value:"Projects",id:"projects",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Task runner",id:"task-runner",level:3},{value:"JavaScript ecosystem",id:"javascript-ecosystem",level:3}],R={toc:P};function W(e){var t=e.components,o=(0,r.Z)(e,N);return(0,s.kt)("wrapper",(0,n.Z)({},R,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The following comparisons are ",(0,s.kt)("em",{parentName:"p"},"not")," an exhaustive list of features, and may be inaccurate or out of\ndate, but represent a good starting point for investigation. If something is not correct, please\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/issues"},"create an issue")," or\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/blob/master/website/src/components/ComparisonTable.tsx"},"submit a patch"),"."),(0,s.kt)("p",null,"Before diving into our comparisons below, we highly suggest reading\n",(0,s.kt)("a",{parentName:"p",href:"https://monorepo.tools/"},"monorepo.tools")," for a deeper insight into monorepos and available tooling.\nAlthough moon is not included, it's a great resource for learning about the current state of things\nand the ecosystem."),(0,s.kt)("h2",{id:"questions"},"Questions"),(0,s.kt)("h3",{id:"moon-versus-competitors"},"moon versus competitors?"),(0,s.kt)("p",null,"moon is currently in its infancy (we're not even at v1 yet), and as such, we're missing some very\nimportant features like cloud caching. Once we've progressed further, we will provide more in-depth\narticles comparing moon to other tools, but in the meantime, what we ",(0,s.kt)("em",{parentName:"p"},"do offer")," that others do not\nis:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"An integrated toolchain, ensuring the same version of Node.js (and other tools) is used across all\nmachines."),(0,s.kt)("li",{parentName:"ul"},"Automation of common JavaScript problems, like ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies, ",(0,s.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"\nproject references, and more."),(0,s.kt)("li",{parentName:"ul"},"Easy task declaration and inheritance across the entire workspace. Define a task once for ",(0,s.kt)("em",{parentName:"li"},"all"),"\nprojects."),(0,s.kt)("li",{parentName:"ul"},"First-class continuous integration (CI) support.")),(0,s.kt)("p",null,"With that being said, we also suggest these wonderful articles provided by the community:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://azu.github.io/slide/2022/moa/moon-packemon.html"},"A review of moon + Packemon")," by\n",(0,s.kt)("a",{parentName:"li",href:"https://twitter.com/azu_re"},"azu"))),(0,s.kt)("h3",{id:"what-about-lerna"},"What about Lerna?"),(0,s.kt)("p",null,"Lerna was a fantastic tool that helped the JavaScript ecosystem grow and excelled at package\nversioning and publishing (and still does), but it offered a very rudimentary build system. While\nLerna was able to run scripts in parallel, it wasn't the most efficient, as it did not support\ncaching, hashing, or performant scheduling."),(0,s.kt)("p",null,"However, the reason Lerna is not compared below, is that Lerna was unowned and maintained for quite\nsome time, and has recently fallen under the Nx umbrella."),(0,s.kt)("h2",{id:"comparison-tables"},"Comparison tables"),(0,s.kt)("table",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"\ud83d\udfe9 Supported"),(0,s.kt)("td",null,"\ud83d\udfe8 Partially supported"),(0,s.kt)("td",null,"\ud83d\udfe6 Similarly supported"),(0,s.kt)("td",null,"\ud83d\udfe5 Not supported"))),(0,s.kt)("h3",{id:"workspace"},"Workspace"),(0,s.kt)(C,{mdxType:"WorkspaceTable"}),(0,s.kt)("h3",{id:"toolchain"},"Toolchain"),(0,s.kt)(T,{mdxType:"ToolchainTable"}),(0,s.kt)("h3",{id:"projects"},"Projects"),(0,s.kt)(x,{mdxType:"ProjectsTable"}),(0,s.kt)("h3",{id:"tasks"},"Tasks"),(0,s.kt)(w,{mdxType:"TasksTable"}),(0,s.kt)("h3",{id:"task-runner"},"Task runner"),(0,s.kt)(j,{mdxType:"TaskRunnerTable"}),(0,s.kt)("h3",{id:"javascript-ecosystem"},"JavaScript ecosystem"),(0,s.kt)(y,{mdxType:"JavaScriptTable"}))}W.isMDXComponent=!0}}]);