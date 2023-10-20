"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82258],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},79022:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(27378),r=a(9619);function i(e){let{header:t,inline:a,updated:i,version:l}=e;return n.createElement(r.Z,{text:`v${l}`,variant:i?"success":"info",className:t?"absolute right-0 top-1.5":a?"inline-block":"ml-2"})}},9619:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(27378),r=a(40624),i=a(31792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function o(e){let{className:t,icon:a,text:o,variant:s}=e;return n.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?l[s]:"bg-gray-100 text-gray-800",t)},a&&n.createElement(i.Z,{icon:a,className:"mr-1"}),o)}},74889:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(25773),r=(a(27378),a(35318)),i=a(79022);const l={title:"Code generation",toc_max_heading_level:6,tags:["codegen","generator","scaffold","template"]},o=void 0,s={unversionedId:"guides/codegen",id:"guides/codegen",title:"Code generation",description:"Code generation provides an easy mechanism for automating common development workflows and file",source:"@site/docs/guides/codegen.mdx",sourceDirName:"guides",slug:"/guides/codegen",permalink:"/docs/guides/codegen",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/codegen.mdx",tags:[{label:"codegen",permalink:"/docs/tags/codegen"},{label:"generator",permalink:"/docs/tags/generator"},{label:"scaffold",permalink:"/docs/tags/scaffold"},{label:"template",permalink:"/docs/tags/template"}],version:"current",frontMatter:{title:"Code generation",toc_max_heading_level:6,tags:["codegen","generator","scaffold","template"]},sidebar:"guides",previous:{title:"Continuous integration (CI)",permalink:"/docs/guides/ci"},next:{title:"Code owners",permalink:"/docs/guides/codeowners"}},p={},m=[{value:"Creating a new template",id:"creating-a-new-template",level:2},{value:"Configuring <code>template.yml</code>",id:"configuring-templateyml",level:3},{value:"Managing files",id:"managing-files",level:3},{value:"File extensions",id:"file-extensions",level:4},{value:"Partials",id:"partials",level:4},{value:'Raws<VersionLabel version="1.11.0" />',id:"raws",level:4},{value:"Frontmatter",id:"frontmatter",level:4},{value:"Assets",id:"assets",level:4},{value:"Template engine &amp; syntax",id:"template-engine--syntax",level:3},{value:"Filters",id:"filters",level:4},{value:"Variables",id:"variables",level:4},{value:"Generating code from a template",id:"generating-code-from-a-template",level:2},{value:"Configuring template locations",id:"configuring-template-locations",level:3},{value:"Declaring variables with CLI arguments",id:"declaring-variables-with-cli-arguments",level:3},{value:"Sharing templates",id:"sharing-templates",level:2}],d={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Code generation provides an easy mechanism for automating common development workflows and file\nstructures. Whether it's scaffolding a new library or application, updating configuration, or\nstandardizing patterns."),(0,r.kt)("p",null,"To accomplish this, we provide a generator, which is divided into two parts. The first being the\ntemplates and their files to be scaffolded. The second is our rendering engine that writes template\nfiles to a destination."),(0,r.kt)("h2",{id:"creating-a-new-template"},"Creating a new template"),(0,r.kt)("p",null,"To create a new template, run ",(0,r.kt)("a",{parentName:"p",href:"../commands/generate"},(0,r.kt)("inlineCode",{parentName:"a"},"moon generate"))," while passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--template")," option. This\nwill create a template directory and ",(0,r.kt)("a",{parentName:"p",href:"../config/template"},(0,r.kt)("inlineCode",{parentName:"a"},"template.yml"))," file in the 1st configured template\nlocation defined in ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#templates"},(0,r.kt)("inlineCode",{parentName:"a"},"generator.templates")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon generate <name> --template\n")),(0,r.kt)("h3",{id:"configuring-templateyml"},"Configuring ",(0,r.kt)("inlineCode",{parentName:"h3"},"template.yml")),(0,r.kt)("p",null,"Every template requires a ",(0,r.kt)("a",{parentName:"p",href:"../config/template"},(0,r.kt)("inlineCode",{parentName:"a"},"template.yml"))," file in the template's directory root. This file\nacts as a schema and declares metadata and variables required by the generator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yml"',title:'"template.yml"'},"title: 'npm package'\ndescription: |\n  Scaffolds the initial structure for an npm package,\n  including source and test folders, a package.json, and more.\nvariables:\n  name:\n    type: 'string'\n    default: ''\n    required: true\n    prompt: 'Package name?'\n")),(0,r.kt)("h3",{id:"managing-files"},"Managing files"),(0,r.kt)("p",null,"Feel free to add any files and folders to the template that you'd like to be generated by consumers!\nThese files will then be scaffolded 1:1 in structure at the target destination."),(0,r.kt)("p",null,"An example of the templates folder structure may look something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"templates/\n\u251c\u2500\u2500 npm-package/\n\u2502   \u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 tests/\n\u2502   \u251c\u2500\u2500 package.json\n\u2502   \u2514\u2500\u2500 template.yml\n\u2514\u2500\u2500 react-app/\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Variables can be interpolated into file paths using the form ",(0,r.kt)("inlineCode",{parentName:"p"},"[varName]"),". For example, if you had\na template file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/[type].ts"),", and a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),' with a value of "bin", then the destination\nfile path would be ',(0,r.kt)("inlineCode",{parentName:"p"},"src/bin.ts"),".")),(0,r.kt)("h4",{id:"file-extensions"},"File extensions"),(0,r.kt)("p",null,"To enable syntax highlighting for template engine syntax, you may use the ",(0,r.kt)("inlineCode",{parentName:"p"},".tera")," (preferred) or\n",(0,r.kt)("inlineCode",{parentName:"p"},".twig")," file extensions. These extensions are optional, but will be removed when the files are\ngenerated."),(0,r.kt)("p",null,"Depending on your preferred editor, these extensions may be supported through a plugin, or can be\nconfigured based on file type."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VS Code"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=karunamurti.tera"},"Tera extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2"},"Twig extension")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Atom"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://atom.io/packages/atom-twig"},"Twig package")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Webstorm"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/7303-twig"},"Twig plugin"))))),(0,r.kt)("h4",{id:"partials"},"Partials"),(0,r.kt)("p",null,"Partials are special template files that are used for\n",(0,r.kt)("a",{parentName:"p",href:"https://keats.github.io/tera/docs/#include"},"composition")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://keats.github.io/tera/docs/#inheritance"},"inheritance"),". Because of this, these files ",(0,r.kt)("em",{parentName:"p"},"should\nnot")," be generated into the target destination, and ",(0,r.kt)("em",{parentName:"p"},"do not")," support frontmatter."),(0,r.kt)("p",null,'To ensure they are not generated, include the word "partial" anywhere in the file path. For example,\n',(0,r.kt)("inlineCode",{parentName:"p"},"partials/header.tpl")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"header.partial.tpl"),"."),(0,r.kt)("h4",{id:"raws"},"Raws",(0,r.kt)(i.Z,{version:"1.11.0",mdxType:"VersionLabel"})),(0,r.kt)("p",null,"Raw template files are another special type of file that bypass all Tera rendering, and are used\nas-is instead. This is useful for files that contain syntax that conflicts with Tera."),(0,r.kt)("p",null,"To mark a file as raw, add a ",(0,r.kt)("inlineCode",{parentName:"p"},".raw")," extension, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"file.raw.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"file.js.raw"),". When the\nfile is generated, the ",(0,r.kt)("inlineCode",{parentName:"p"},".raw")," extension will be removed."),(0,r.kt)("h4",{id:"frontmatter"},"Frontmatter"),(0,r.kt)("p",null,'Frontmatter is a well-known concept for "per file configuration", and is achieved by inserting YAML\nat the top of the file, delimited by wrapping ',(0,r.kt)("inlineCode",{parentName:"p"},"---"),". This is a very powerful feature that provides\nmore control than the alternatives, and allows for some very cool integrations."),(0,r.kt)("p",null,"moon's frontmatter supports functionality like file skipping, force overwriting, and destination\npath rewriting.\n",(0,r.kt)("a",{parentName:"p",href:"../config/template#frontmatter"},"View the configuration docs for a full list of supported fields"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig",metastring:'title="package.json"',title:'"package.json"'},'---\nforce: true\n---\n\n{\n  "name": "{{ name | kebab_case }}",\n  "version": "0.0.1"\n}\n')),(0,r.kt)("p",null,"Since frontmatter exists in the file itself, you can take advantage of the rendering engine to\npopulate the field values dynamically. For example, if you're scaffolding a React component, you can\nconvert the component name and file name to PascalCase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},"{% set component_name = name | pascal_case %}\n\n---\nto: components/{{ component_name }}.tsx\n---\n\nexport function {{ component_name }}() {\n    return <div />;\n}\n")),(0,r.kt)("h4",{id:"assets"},"Assets"),(0,r.kt)("p",null,"Assets are binary files that are copied as-is to the destination, without any rendering, and no\nsupport for frontmatter. This applies to all non-text based files, like images, audio, video, etc."),(0,r.kt)("h3",{id:"template-engine--syntax"},"Template engine & syntax"),(0,r.kt)("p",null,"Rendering templates is powered by ",(0,r.kt)("a",{parentName:"p",href:"https://keats.github.io/tera/"},"Tera"),", a Rust based template\nengine with syntax similar to Twig, Liquid, Django, and more. We highly encourage everyone to read\nTera's documentation for an in-depth understanding, but as a quick reference, Tera supports the\nfollowing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://keats.github.io/tera/docs/#variables"},"Variable interpolation")," (defined with the\n",(0,r.kt)("a",{parentName:"li",href:"../config/template#variables"},(0,r.kt)("inlineCode",{parentName:"a"},"variables"))," setting), with\n",(0,r.kt)("a",{parentName:"li",href:"https://keats.github.io/tera/docs/#built-in-filters"},"built-in filters"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},"{{ varName }} -> foo\n{{ varName | upper }} -> FOO\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://keats.github.io/tera/docs/#if"},"Conditional blocks")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://keats.github.io/tera/docs/#for"},"loops"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},"{% if price < 10 or always_show %}\n    Price is {{ price }}.\n{% elif price > 1000 and not rich %}\n    That's expensive!\n{% else %}\n    N/A\n{% endif %}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},"{% for item in items %}\n    {{ loop.index }} - {{ item.name }}\n{% endfor %}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"And many more features, like auto-escaping, white space control, and math operators!")),(0,r.kt)("h4",{id:"filters"},"Filters"),(0,r.kt)("p",null,"Filters are a mechanism for transforming values during interpolation and are written using pipes\n(",(0,r.kt)("inlineCode",{parentName:"p"},"|"),"). Tera provides many ",(0,r.kt)("a",{parentName:"p",href:"https://keats.github.io/tera/docs/#built-in-filters"},"built-in filters"),",\nbut we also provide the following custom filters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Strings - ",(0,r.kt)("inlineCode",{parentName:"li"},"camel_case"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pascal_case"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"snake_case"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"upper_snake_case"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kebab_case"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"upper_kebab_case"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lower_case"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"upper_case"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},"{{ some_value | upper_case }}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paths - ",(0,r.kt)("inlineCode",{parentName:"li"},"path_join"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"path_relative"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},'{{ some_path | path_join(part = "another/folder") }}\n{{ some_path | path_relative(from = other_path) }}\n{{ some_path | path_relative(to = other_path) }}\n')),(0,r.kt)("h4",{id:"variables"},"Variables"),(0,r.kt)("p",null,"The following variables are always available within a template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dest_dir")," - Absolute path to the destination folder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dest_rel_dir")," - Relative path to the destination folder from the working directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"working_dir")," - Current working directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"workspace_root")," - The moon workspace root.")),(0,r.kt)("h2",{id:"generating-code-from-a-template"},"Generating code from a template"),(0,r.kt)("p",null,"Once a template has been created and configured, you can generate files based on it using the\n",(0,r.kt)("a",{parentName:"p",href:"../commands/generate"},(0,r.kt)("inlineCode",{parentName:"a"},"moon generate"))," command! This is also know as scaffolding or code generation."),(0,r.kt)("p",null,"This command requires the name of a template as the 1st argument. The template name is the folder\nname on the file system that houses all the template files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon generate npm-package\n")),(0,r.kt)("p",null,"An optional destination path, relative from the current working directory, can be provided as the\n2nd argument. If not provided, you'll be prompted during generation to provide one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon generate npm-package ./packages/example\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This command is extremely interactive, as we'll prompt you for the destination path, variable\nvalues, whether to overwrite files, and more. If you'd prefer to avoid interactions, pass\n",(0,r.kt)("inlineCode",{parentName:"p"},"--defaults"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"--force"),", or both.")),(0,r.kt)("h3",{id:"configuring-template-locations"},"Configuring template locations"),(0,r.kt)("p",null,"Templates can be located anywhere, especially when ",(0,r.kt)("a",{parentName:"p",href:"#sharing-templates"},"being shared"),". Because of\nthis, our generator will loop through all template paths configured in\n",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#templates"},(0,r.kt)("inlineCode",{parentName:"a"},"generator.templates")),", in order, until a match is found (template name matches the\nfolder name)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"generator:\n    templates:\n        - './templates'\n        - './other/templates'\n")),(0,r.kt)("h3",{id:"declaring-variables-with-cli-arguments"},"Declaring variables with CLI arguments"),(0,r.kt)("p",null,"During generation, you'll be prompted in the terminal to provide a value for any configured\nvariables. However, you can pre-fill these variable values by passing arbitrary command line\narguments after ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," to ",(0,r.kt)("a",{parentName:"p",href:"../commands/generate"},(0,r.kt)("inlineCode",{parentName:"a"},"moon generate")),". Argument names must exactly match the variable\nnames."),(0,r.kt)("p",null,"Using the package template example above, we could pre-fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," variable like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon generate npm-package ./packages/example -- --name '@company/example' --private\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Boolean variables can be negated by prefixing the argument with ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-<arg>"),".")),(0,r.kt)("h2",{id:"sharing-templates"},"Sharing templates"),(0,r.kt)("p",null,"Although moon is designed for a monorepo, you may be using multiple repositories and would like to\nuse the same templates across all of them."),(0,r.kt)("p",null,"This is technically possible, but with 1 caveat, and that is that moon's generator requires\ntemplates to exist within the current repository, relative from the workspace root. So how can we\nshare templates across repositories? Why not try..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Git submodules"),(0,r.kt)("li",{parentName:"ul"},"npm packages"),(0,r.kt)("li",{parentName:"ul"},"Another packaging system")),(0,r.kt)("p",null,"Regardless of the choice, simply configure ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#templates"},(0,r.kt)("inlineCode",{parentName:"a"},"generator.templates"))," to point to these\nlocations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"generator:\n    templates:\n        - './templates'\n        - './node_modules/@company/shared-templates'\n        - './path/to/submodules'\n")))}c.isMDXComponent=!0}}]);