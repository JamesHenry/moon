(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30780],{30780:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var o=n(25773),r=n(27378),s=n(76457),c=n(37140),a=n(6499),l=n(75484),i=n(90433);const u="codeBlockContainer_mQmQ";function p(e){let{as:t,...n}=e;const s=(0,a.p)(),p=(0,i.QC)(s);return r.createElement(t,(0,o.Z)({},n,{style:p,className:(0,c.Z)(n.className,u,l.k.common.codeBlock)}))}const d={codeBlockContent:"codeBlockContent_D5yF",codeBlockTitle:"codeBlockTitle_x_ju",codeBlock:"codeBlock_RMoD",codeBlockStandalone:"codeBlockStandalone_wQog",codeBlockLines:"codeBlockLines_AclH",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_O625",buttonGroup:"buttonGroup_aaMX"};function m(e){let{children:t,className:n}=e;return r.createElement(p,{as:"pre",tabIndex:0,className:(0,c.Z)(d.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:d.codeBlockLines},t))}var g=n(20624),f=n(96177);const y={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var h={Prism:n(52349).Z,theme:y};function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},k.apply(this,arguments)}var v=/\r\n|\r|\n/,E=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},B=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},N=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=k({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=k({},n,{backgroundColor:null}),r};function C(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const w=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),b(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?N(e.theme,e.language):void 0;return t.themeDict=n})),b(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,s=k({},C(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(s.style=c.plain),void 0!==r&&(s.style=void 0!==s.style?k({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),b(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return s[n[0]];var c=o?{display:"inline-block"}:{},a=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[c].concat(a))}})),b(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,s=e.token,c=k({},C(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?k({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),b(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var s=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,s=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],s=0,c=0,a=[],l=[a];c>-1;){for(;(s=o[c]++)<r[c];){var i=void 0,u=t[c],p=n[c][s];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=B(u,p.type),p.alias&&(u=B(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(v),m=d.length;a.push({types:u,content:d[0]});for(var g=1;g<m;g++)E(a),l.push(a=[]),a.push({types:u,content:d[g]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return E(a),l}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),L="codeLine_FAqz",j="codeLineNumber_BE9Z",T="codeLineContent_EF2y";function x(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,c.Z)(n,s&&L)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,s?r.createElement(r.Fragment,null,r.createElement("span",{className:j}),r.createElement("span",{className:T},u)):u,r.createElement("br",null))}var Z=n(99213);function O(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function S(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const _={copyButtonCopied:"copyButtonCopied_TYdd",copyButtonIcons:"copyButtonIcons_z5j7",copyButtonIcon:"copyButtonIcon_FoOz",copyButtonSuccessIcon:"copyButtonSuccessIcon_L0B6"};function I(e){let{code:t,className:n}=e;const[o,s]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const s=document.getSelection();let c=!1;s.rangeCount>0&&(c=s.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),c&&(s.removeAllRanges(),s.addRange(c)),r&&r.focus()}(t),s(!0),a.current=window.setTimeout((()=>{s(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,Z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,Z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,_.copyButton,o&&_.copyButtonCopied),onClick:l},r.createElement("span",{className:_.copyButtonIcons,"aria-hidden":"true"},r.createElement(O,{className:_.copyButtonIcon}),r.createElement(S,{className:_.copyButtonSuccessIcon})))}function A(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const P="wordWrapButtonIcon_HV9T",z="wordWrapButtonEnabled_XzR1";function D(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,Z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&z),"aria-label":s,title:s},r.createElement(A,{className:P,"aria-hidden":"true"}))}function $(e){let{children:t,className:n="",metastring:s,title:l,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:y,magicComments:b}}=(0,g.L)(),k=m??(0,i.Vo)(n)??y,v=(0,a.p)(),E=(0,f.F)(),B=(0,i.bc)(s)||l,{lineClassNames:N,code:C}=(0,i.nZ)(t,{metastring:s,language:k,magicComments:b}),L=u??(0,i.nt)(s);return r.createElement(p,{as:"div",className:(0,c.Z)(n,k&&!n.includes(`language-${k}`)&&`language-${k}`)},B&&r.createElement("div",{className:d.codeBlockTitle},B),r.createElement("div",{className:d.codeBlockContent},r.createElement(w,(0,o.Z)({},h,{theme:v,code:C,language:k??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:s}=e;return r.createElement("pre",{tabIndex:0,ref:E.codeBlockRef,className:(0,c.Z)(t,d.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,c.Z)(d.codeBlockLines,L&&d.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(x,{key:t,line:e,getLineProps:o,getTokenProps:s,classNames:N[t],showLineNumbers:L})))))})),r.createElement("div",{className:d.buttonGroup},(E.isEnabled||E.isCodeScrollable)&&r.createElement(D,{className:d.codeButton,onClick:()=>E.toggle(),isEnabled:E.isEnabled}),r.createElement(I,{className:d.codeButton,code:C}))))}function H(e){let{children:t,...n}=e;const c=(0,s.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?$:m;return r.createElement(l,(0,o.Z)({key:String(c)},n),a)}},96177:(e,t,n)=>{"use strict";n.d(t,{F:()=>a});var o=n(27378),r=n(41763);const s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){const[n,c]=(0,o.useState)(),a=(0,o.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=s);const c=(0,r.zX)(t),a=(0,r.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,a),()=>t.disconnect()}),[e,c,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function a(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),s=(0,o.useRef)(null),a=(0,o.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");r(n)}),[s]);return c(s,l),(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:a}}},6499:(e,t,n)=>{"use strict";n.d(t,{p:()=>s});var o=n(55421),r=n(20624);function s(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},90433:(e,t,n)=>{"use strict";n.d(t,{QC:()=>m,Vo:()=>p,bc:()=>i,nZ:()=>d,nt:()=>u});var o=n(6324),r=n.n(o);const s=/title=(?<quote>["'])(?<title>.*?)\1/,c=/\{(?<range>[\d,-]+)\}/,a={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,t){const n=e.map((e=>{const{start:n,end:o}=a[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){return e?.match(s)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function p(e){return e.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")}function d(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:i}=t;if(i&&c.test(i)){const e=i.match(c).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],t);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],t);case"html":return l(["js","jsBlock","html"],t);case"python":case"py":case"bash":return l(["bash"],t);case"markdown":case"md":return l(["html","jsx","bash"],t);default:return l(Object.keys(a),t)}}(o,s),p=n.split("\n"),d=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),g=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),f=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<p.length;){const e=p[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?d[m[t]].range+=`${r},`:g[t]?d[g[t]].start=r:f[t]&&(d[f[t]].range+=`${d[f[t]].start}-${r-1},`),p.splice(r,1)}n=p.join("\n");const y={};return Object.entries(d).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{y[e]??=[],y[e].push(t)}))})),{lineClassNames:y,code:n}}function m(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const s=t[o];s&&"string"==typeof r&&(n[s]=r)})),n}},6324:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,s]=t;if(o&&s){o=parseInt(o),s=parseInt(s);const e=o<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);