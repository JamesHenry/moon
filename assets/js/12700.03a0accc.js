"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12700],{70412:(e,r,t)=>{t.d(r,{C:()=>u,n:()=>s});var o=t(27378),n=t(41763);const a=o.createContext(null);function s(e){let{children:r,content:t,isBlogPostPage:n=!1}=e;const s=function(e){let{content:r,isBlogPostPage:t}=e;return(0,o.useMemo)((()=>({metadata:r.metadata,frontMatter:r.frontMatter,assets:r.assets,toc:r.toc,isBlogPostPage:t})),[r,t])}({content:t,isBlogPostPage:n});return o.createElement(a.Provider,{value:s},r)}function u(){const e=(0,o.useContext)(a);if(null===e)throw new n.i6("BlogPostProvider");return e}},89446:(e,r,t)=>{t.d(r,{b:()=>s,k:()=>u});var o=t(27378),n=t(41763);const a=o.createContext(null);function s(e){let{children:r,content:t}=e;const n=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return o.createElement(a.Provider,{value:n},r)}function u(){const e=(0,o.useContext)(a);if(null===e)throw new n.i6("DocProvider");return e}},36666:(e,r,t)=>{t.d(r,{D:()=>u,f:()=>l});var o=t(27378),n=t(41763);const a=Symbol("EmptyContext"),s=o.createContext(a);function u(e){let{children:r}=e;const[t,n]=(0,o.useState)(null),a=(0,o.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return o.createElement(s.Provider,{value:a},r)}function l(){const e=(0,o.useContext)(s);if(e===a)throw new n.i6("DocSidebarItemsExpandedStateProvider");return e}},69169:(e,r,t)=>{t.d(r,{a:()=>s});var o=t(27378),n=t(83457),a=t(24993);function s(e){let{threshold:r}=e;const[t,s]=(0,o.useState)(!1),u=(0,o.useRef)(!1),{startScroll:l,cancelScroll:i}=(0,n.Ct)();return(0,n.RF)(((e,t)=>{let{scrollY:o}=e;const n=t?.scrollY;n&&(u.current?u.current=!1:o>=n?(i(),s(!1)):o<r?s(!1):o+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,a.S)((e=>{e.location.hash&&(u.current=!0,s(!1))})),{shown:t,scrollToTop:()=>l(0)}}},81344:(e,r,t)=>{t.d(r,{S:()=>l});var o=t(27378),n=t(20624);function a(e){const r=e.getBoundingClientRect();return r.top===r.bottom?a(e.parentNode):r}function s(e,r){let{anchorTopOffset:t}=r;const o=e.find((e=>a(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:r}}=(0,n.L)();return(0,o.useEffect)((()=>{e.current=r?0:document.querySelector(".navbar").clientHeight}),[r]),e}function l(e){const r=(0,o.useRef)(void 0),t=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:n,minHeadingLevel:a,maxHeadingLevel:u}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),l=function(e){let{minHeadingLevel:r,maxHeadingLevel:t}=e;const o=[];for(let n=r;n<=t;n+=1)o.push(`h${n}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:a,maxHeadingLevel:u}),i=s(l,{anchorTopOffset:t.current}),c=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(r.current&&r.current!==e&&r.current.classList.remove(n),e.classList.add(n),r.current=e):e.classList.remove(n)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}},95709:(e,r,t)=>{t.r(r),t.d(r,{Collapsible:()=>l.z,ErrorBoundaryError:()=>x.aG,ErrorBoundaryTryAgainButton:()=>x.Cw,ErrorCauseBoundary:()=>x.QW,HtmlClassNameProvider:()=>m.FG,NavbarSecondaryMenuFiller:()=>g.Zo,PageMetadata:()=>m.d,ReactContextError:()=>d.i6,SkipToContentFallbackId:()=>L.u,SkipToContentLink:()=>L.l,ThemeClassNames:()=>i.k,composeProviders:()=>d.Qc,createStorageSlot:()=>n.WA,duplicates:()=>S.l,filterDocCardListItems:()=>s.MN,isMultiColumnFooterLinks:()=>b.a,isRegexpStringMatch:()=>C.F,listStorageKeys:()=>n._f,listTagsByLetters:()=>h.P,prefersReducedMotion:()=>c.n,processAdmonitionProps:()=>E,translateTagsPageTitle:()=>h.M,uniq:()=>S.j,useCollapsible:()=>l.u,useColorMode:()=>f.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>s.jA,useDocsPreferredVersion:()=>y.J,useEvent:()=>d.zX,useIsomorphicLayoutEffect:()=>d.LI,usePluralForm:()=>u.c,usePrevious:()=>d.D9,usePrismTheme:()=>P.p,useSearchLinkCreator:()=>v.M,useSearchQueryString:()=>v.K,useStorageSlot:()=>n.Nk,useThemeConfig:()=>o.L,useWindowSize:()=>p.i});var o=t(20624),n=t(71819),a=t(13149),s=t(45161),u=t(40689),l=t(80376),i=t(75484),c=t(56903),d=t(41763),m=t(1123),f=t(55421),g=t(63471),p=t(58357),h=t(75846),v=t(53584),b=t(33922),C=t(61503),S=t(70784),P=t(6499),y=t(24453),T=t(27378);function E(e){const{mdxAdmonitionTitle:r,rest:t}=function(e){const r=T.Children.toArray(e),t=r.find((e=>T.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=T.createElement(T.Fragment,null,r.filter((e=>e!==t)));return{mdxAdmonitionTitle:t?.props.children,rest:o}}(e.children),o=e.title??r;return{...e,...o&&{title:o},children:t}}var L=t(39360),x=t(19441)},12700:(e,r,t)=>{t.r(r),t.d(r,{AnnouncementBarProvider:()=>c.pl,BlogPostProvider:()=>l.n,Collapsible:()=>o.Collapsible,ColorModeProvider:()=>g.S,DEFAULT_SEARCH_TAG:()=>v.HX,DocProvider:()=>u.b,DocSidebarItemsExpandedStateProvider:()=>n.D,DocsPreferredVersionContextProvider:()=>i.L5,DocsSidebarProvider:()=>s.b,DocsVersionProvider:()=>a.q,ErrorBoundaryError:()=>o.ErrorBoundaryError,ErrorBoundaryTryAgainButton:()=>o.ErrorBoundaryTryAgainButton,ErrorCauseBoundary:()=>o.ErrorCauseBoundary,HtmlClassNameProvider:()=>o.HtmlClassNameProvider,NavbarProvider:()=>M.V,NavbarSecondaryMenuFiller:()=>o.NavbarSecondaryMenuFiller,PageMetadata:()=>o.PageMetadata,PluginHtmlClassNameProvider:()=>x.VC,ReactContextError:()=>o.ReactContextError,ScrollControllerProvider:()=>E.OC,SkipToContentFallbackId:()=>o.SkipToContentFallbackId,SkipToContentLink:()=>o.SkipToContentLink,ThemeClassNames:()=>o.ThemeClassNames,composeProviders:()=>o.composeProviders,containsLineNumbers:()=>h.nt,createStorageSlot:()=>o.createStorageSlot,docVersionSearchTag:()=>v.os,duplicates:()=>o.duplicates,filterDocCardListItems:()=>o.filterDocCardListItems,findFirstCategoryLink:()=>b.Wl,findSidebarCategory:()=>b.em,getPrismCssVariables:()=>h.QC,isActiveSidebarItem:()=>b._F,isDocsPluginEnabled:()=>b.cE,isMultiColumnFooterLinks:()=>o.isMultiColumnFooterLinks,isRegexpStringMatch:()=>o.isRegexpStringMatch,isSamePath:()=>L.Mg,keyboardFocusedClassName:()=>w.h,listStorageKeys:()=>o.listStorageKeys,listTagsByLetters:()=>o.listTagsByLetters,parseCodeBlockTitle:()=>h.bc,parseLanguage:()=>h.Vo,parseLines:()=>h.nZ,prefersReducedMotion:()=>o.prefersReducedMotion,processAdmonitionProps:()=>o.processAdmonitionProps,splitNavbarItems:()=>M.A,translateTagsPageTitle:()=>o.translateTagsPageTitle,uniq:()=>o.uniq,useAlternatePageUtils:()=>p.l,useAnnouncementBar:()=>c.nT,useBackToTopButton:()=>F.a,useBlogPost:()=>l.C,useCodeWordWrap:()=>D.F,useCollapsible:()=>o.useCollapsible,useColorMode:()=>o.useColorMode,useContextualSearchFilters:()=>o.useContextualSearchFilters,useCurrentSidebarCategory:()=>o.useCurrentSidebarCategory,useDoc:()=>u.k,useDocById:()=>b.xz,useDocRouteMetadata:()=>b.hI,useDocSidebarItemsExpandedState:()=>n.f,useDocsPreferredVersion:()=>o.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>i.Oh,useDocsSidebar:()=>s.V,useDocsVersion:()=>a.E,useDocsVersionCandidates:()=>b.lO,useEvent:()=>o.useEvent,useFilteredAndTreeifiedTOC:()=>T.b,useHideableNavbar:()=>I.c,useHistoryPopHandler:()=>y.Rb,useHistorySelector:()=>y.xL,useHomePageRoute:()=>L.Ns,useIsomorphicLayoutEffect:()=>o.useIsomorphicLayoutEffect,useKeyboardNavigation:()=>w.t,useLayoutDoc:()=>b.vY,useLayoutDocsSidebar:()=>b.oz,useLocalPathname:()=>P.b,useLocationChange:()=>S.S,useLockBodyScroll:()=>B.N,useNavbarMobileSidebar:()=>m.e,useNavbarSecondaryMenu:()=>f.Y,usePluralForm:()=>o.usePluralForm,usePrevious:()=>o.usePrevious,usePrismTheme:()=>o.usePrismTheme,useQueryStringValue:()=>y._X,useScrollController:()=>E.sG,useScrollPosition:()=>E.RF,useScrollPositionBlocker:()=>E.o5,useSearchLinkCreator:()=>o.useSearchLinkCreator,useSearchQueryString:()=>o.useSearchQueryString,useSidebarBreadcrumbs:()=>b.s1,useSmoothScrollTo:()=>E.Ct,useStorageSlot:()=>o.useStorageSlot,useTOCHighlight:()=>k.S,useTabs:()=>d.Y,useThemeConfig:()=>o.useThemeConfig,useTitleFormatter:()=>C.p,useTreeifiedTOC:()=>T.a,useWindowSize:()=>o.useWindowSize});var o=t(95709),n=t(36666),a=t(25611),s=t(52095),u=t(89446),l=t(70412),i=t(24453),c=t(10),d=t(35595),m=t(85536),f=t(15530),g=t(55421),p=t(43714),h=t(90433),v=t(13149),b=t(45161),C=t(99162),S=t(24993),P=t(43511),y=t(30654),T=t(86934),E=t(83457),L=t(8862),x=t(1123),M=t(63211),k=t(81344),I=t(82561),w=t(70174),B=t(37930),D=t(96177),F=t(69169)},35595:(e,r,t)=>{t.d(r,{Y:()=>m});var o=t(27378),n=t(35331),a=t(30654),s=t(70784),u=t(71819);function l(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:o,default:n}}=e;return{value:r,label:t,attributes:o,default:n}}))}function i(e){const{values:r,children:t}=e;return(0,o.useMemo)((()=>{const e=r??l(t);return function(e){const r=(0,s.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function c(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function d(e){let{queryString:r=!1,groupId:t}=e;const s=(0,n.k6)(),u=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,a._X)(u),(0,o.useCallback)((e=>{if(!u)return;const r=new URLSearchParams(s.location.search);r.set(u,e),s.replace({...s.location,search:r.toString()})}),[u,s])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=i(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!c({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:a}))),[m,f]=d({queryString:t,groupId:n}),[g,p]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,u.Nk)(t);return[n,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),h=(()=>{const e=m??g;return c({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),f(e),p(e)}),[f,p,a]),tabValues:a}}},75846:(e,r,t)=>{t.d(r,{M:()=>n,P:()=>a});var o=t(99213);const n=()=>(0,o.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function a(e){const r={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);r[t]??=[],r[t].push(e)})),Object.entries(r).sort(((e,r)=>{let[t]=e,[o]=r;return t.localeCompare(o)})).map((e=>{let[r,t]=e;return{letter:r,tags:t.sort(((e,r)=>e.label.localeCompare(r.label)))}}))}},86934:(e,r,t)=>{t.d(r,{a:()=>a,b:()=>u});var o=t(27378);function n(e){const r=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);r.forEach(((e,r)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=r}));const o=[];return r.forEach((e=>{const{parentIndex:t,...n}=e;t>=0?r[t].children.push(n):o.push(n)})),o}function a(e){return(0,o.useMemo)((()=>n(e)),[e])}function s(e){let{toc:r,minHeadingLevel:t,maxHeadingLevel:o}=e;return r.flatMap((e=>{const r=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:r}]:r}))}function u(e){let{toc:r,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>s({toc:n(r),minHeadingLevel:t,maxHeadingLevel:a})),[r,t,a])}},40689:(e,r,t)=>{t.d(r,{c:()=>i});var o=t(27378),n=t(50353);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((r=>e.includes(r)))}const u={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,o.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:s(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),u}}),[e])}function i(){const e=l();return{selectMessage:(r,t)=>function(e,r,t){const o=e.split("|");if(1===o.length)return o[0];o.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const n=t.select(r),a=t.pluralForms.indexOf(n);return o[Math.min(a,o.length-1)]}(t,r,e)}}}}]);