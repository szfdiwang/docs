"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5956],{248:(e,t,n)=>{n.d(t,{o:()=>d});var a=n(1504);function r(){return a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var c=n(5052),o=["translations"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,c=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(c.push(a.value),!t||c.length!==t);o=!0);}catch(s){l=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw r}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m="Ctrl";var d=a.forwardRef((function(e,t){var n=e.translations,i=void 0===n?{}:n,d=u(e,o),h=i.buttonText,f=void 0===h?"Search":h,v=i.buttonAriaLabel,g=void 0===v?"Search":v,b=s((0,a.useState)(null),2),E=b[0],p=b[1];return(0,a.useEffect)((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?p("\u2318"):p(m))}),[]),a.createElement("button",l({type:"button",className:"DocSearch DocSearch-Button","aria-label":g},d,{ref:t}),a.createElement("span",{className:"DocSearch-Button-Container"},a.createElement(c.I,null),a.createElement("span",{className:"DocSearch-Button-Placeholder"},f)),a.createElement("span",{className:"DocSearch-Button-Keys"},null!==E&&a.createElement(a.Fragment,null,a.createElement("kbd",{className:"DocSearch-Button-Key"},E===m?a.createElement(r,null):E),a.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))}))},5052:(e,t,n)=>{n.d(t,{I:()=>r});var a=n(1504);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},32:(e,t,n)=>{n.d(t,{_:()=>r});var a=n(1504);function r(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,c=e.onInput,o=e.searchButtonRef;a.useEffect((function(){function e(e){var a;(27===e.keyCode&&t||"k"===(null===(a=e.key)||void 0===a?void 0:a.toLowerCase())&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,c,o])}},5756:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(1504);const r="iconExternalLink_wgqa",c=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},6740:(e,t,n)=>{n(1504)},1152:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(5072),r=n(1504);const c=e=>{let{width:t=30,height:n=30,className:c,...o}=e;return r.createElement("svg",(0,a.c)({className:c,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},o),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},8308:(e,t,n)=>{n.d(t,{c:()=>me});var a=n(1504),r=n(4971),c=n(5592),o=n(8710),l=n(9200);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){const e=(0,a.useRef)(null),{action:t}=(0,c.Uz)();return(0,l.cD)((n=>{let{location:a}=n;e.current&&!a.hash&&"POP"!==t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.c,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_axC9",d="announcementBarClose_A3A1",h="announcementBarContent_6uhP",f="announcementBarCloseable_y4cp";const v=function(){const{isClosed:e,close:t}=(0,l.el)(),{announcementBar:n}=(0,l.yw)();if(!n)return null;const{content:c,backgroundColor:s,textColor:i,isCloseable:u}=n;return!c||u&&e?null:a.createElement("div",{className:m,style:{backgroundColor:s,color:i},role:"banner"},a.createElement("div",{className:(0,r.c)(h,{[f]:u}),dangerouslySetInnerHTML:{__html:c}}),u?a.createElement("button",{type:"button",className:(0,r.c)(d,"clean-btn"),onClick:t,"aria-label":(0,o.G)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(5072),b=n(7128),E=n(8264);const p={toggle:"toggle_iYfV"},k=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.c)(p.toggle,p.dark),style:n},t)},y=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.c)(p.toggle,p.light),style:n},t)},w=(0,a.memo)((e=>{let{className:t,icons:n,checked:c,disabled:o,onChange:l}=e;const[s,i]=(0,a.useState)(c),[u,m]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.c)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>d.current?.click()},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:l,onClick:()=>i(!s),onFocus:()=>m(!0),onBlur:()=>m(!1)}))}));function C(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:c}}}=(0,l.yw)(),{isClient:o}=(0,E.c)();return a.createElement(w,(0,g.c)({disabled:!o,icons:{checked:a.createElement(k,{icon:t,style:n}),unchecked:a.createElement(y,{icon:r,style:c})}},e))}var N=n(9464),_=n(3336);const S=e=>{const t=(0,c.IT)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),u=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,_.c)(((t,n)=>{let{scrollY:a}=t,{scrollY:c}=n;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);c&&0===a&&r(!0);const l=document.documentElement.scrollHeight-s,i=window.innerHeight;c&&a>=c?r(!1):a+i<l&&r(!0)}),[s,o]),(0,l.cD)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:n}};var L=n(5664),I=n(8072),D=n(9428),T=n(3640);function M(e){let{mobile:t}=e;return t?null:a.createElement(b.c,null)}const O={default:()=>D.c,localeDropdown:()=>T.c,search:()=>M,docsVersion:()=>n(4168).c,docsVersionDropdown:()=>n(5692).c,doc:()=>n(3040).c},x=function(e){void 0===e&&(e="default");const t=O[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};function A(e){let{type:t,...n}=e;const r=x(t);return a.createElement(r,n)}var B=n(2416),P=n(1152);const R="displayOnlyInLargeViewport_cxYs",U="navbarHideable_RReh",V="navbarHidden_FBwS",$="right";const j=function(){const{navbar:{items:e,hideOnScroll:t,style:n},colorMode:{disableSwitch:c}}=(0,l.yw)(),[o,s]=(0,a.useState)(!1),{isDarkTheme:i,setLightTheme:u,setDarkTheme:m}=(0,N.c)(),{navbarRef:d,isNavbarVisible:h}=S(t);(0,L.c)(o);const f=(0,a.useCallback)((()=>{s(!0)}),[s]),v=(0,a.useCallback)((()=>{s(!1)}),[s]),E=(0,a.useCallback)((e=>e.target.checked?m():u()),[u,m]),p=(0,I.c)();(0,a.useEffect)((()=>{p===I.O.desktop&&s(!1)}),[p]);const k=e.some((e=>"search"===e.type)),{leftItems:y,rightItems:w}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??$))),rightItems:e.filter((e=>"right"===(e.position??$)))}}(e);return a.createElement("nav",{ref:d,className:(0,r.c)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===n,"navbar--primary":"primary"===n,"navbar-sidebar--show":o,[U]:t,[V]:t&&!h})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f,onKeyDown:f},a.createElement(P.c,null)),a.createElement(B.c,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),y.map(((e,t)=>a.createElement(A,(0,g.c)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},w.map(((e,t)=>a.createElement(A,(0,g.c)({},e,{key:t})))),!c&&a.createElement(C,{className:R,checked:i,onChange:E}),!k&&a.createElement(b.c,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:v}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(B.c,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:v}),!c&&o&&a.createElement(C,{checked:i,onChange:E})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>a.createElement(A,(0,g.c)({mobile:!0},e,{onClick:v,key:t})))))))))};var G=n(1700),K=n(8684);const q=(0,l.GS)("theme"),z="light",H="dark",F=e=>e===H?H:z,W=e=>{(0,l.GS)("theme").set(F(e))},Y=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,l.yw)(),[r,c]=(0,a.useState)((e=>K.c.canUseDOM?F(document.documentElement.getAttribute("data-theme")):F(e))(e)),o=(0,a.useCallback)((()=>{c(z),W(z)}),[]),s=(0,a.useCallback)((()=>{c(H),W(H)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",F(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=q.get();null!==e&&c(F(e))}catch(e){console.error(e)}}),[c]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;c(t?H:z)}))}),[]),{isDarkTheme:r===H,setLightTheme:o,setDarkTheme:s}};var X=n(520);const Q=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=Y();return a.createElement(X.c.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},Z="docusaurus.tab.",J=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,l.GS)(`${Z}${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,l.Ed)().forEach((t=>{if(t.startsWith(Z)){const n=t.substring(15);e[n]=(0,l.GS)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},ee=(0,a.createContext)(void 0);const te=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=J();return a.createElement(ee.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ne(e){let{children:t}=e;return a.createElement(Q,null,a.createElement(l.qu,null,a.createElement(te,null,a.createElement(l.gc,null,t))))}var ae=n(2956),re=n(964);function ce(e){let{locale:t,version:n,tag:r}=e;const c=t;return a.createElement(ae.c,null,c&&a.createElement("meta",{name:"docsearch:language",content:c}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var oe=n(6068);function le(){const{i18n:{defaultLocale:e,locales:t}}=(0,E.c)(),n=(0,l.DP)();return a.createElement(ae.c,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function se(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,E.c)(),r=function(){const{siteConfig:{url:e}}=(0,E.c)(),{pathname:t}=(0,c.IT)();return e+(0,re.c)(t)}(),o=t?`${n}${t}`:r;return a.createElement(ae.c,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ie(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:n,image:r}},i18n:{currentLocale:c,localeConfigs:o}}=(0,E.c)(),{title:s,description:i,image:u,keywords:m,searchMetadatas:d}=e,h=(0,re.c)(t),f=(0,l.g7)(s),v=c,b=o[c].direction;return a.createElement(a.Fragment,null,a.createElement(ae.c,null,a.createElement("html",{lang:v,dir:b}),t&&a.createElement("link",{rel:"shortcut icon",href:h}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),u||r&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(oe.c,{description:i,keywords:m,image:u}),a.createElement(se,null),a.createElement(le,null),a.createElement(ce,(0,g.c)({tag:l.e6,locale:c},d)),a.createElement(ae.c,null,n.map(((e,t)=>a.createElement("meta",(0,g.c)({key:`metadata_${t}`},e))))))}const ue=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const me=function(e){const{children:t,noFooter:n,wrapperClassName:c,pageClassName:o}=e;return ue(),a.createElement(ne,null,a.createElement(ie,e),a.createElement(u,null),a.createElement(v,null),a.createElement(j,null),a.createElement("div",{className:(0,r.c)(l.Wu.wrapper.main,c,o)},t),!n&&a.createElement(G.c,null))}},2416:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(5072),r=n(1504),c=n(4724),o=n(280),l=n(964),s=n(8264);const i=e=>{const{siteConfig:{title:t,themeConfig:{navbar:{title:n,logo:i={src:""}}}},isClient:u}=(0,s.c)(),{imageClassName:m,titleClassName:d,...h}=e,f=(0,l.c)(i.href||"/"),v={light:(0,l.c)(i.src),dark:(0,l.c)(i.srcDark||i.src)};return r.createElement(c.c,(0,a.c)({to:f},h,i.target&&{target:i.target}),i.src&&r.createElement(o.c,{key:u,className:m,sources:v,alt:i.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},9428:(e,t,n)=>{n.d(t,{c:()=>g});var a=n(5072),r=n(1504),c=n(4971),o=n(4724),l=n(964),s=n(5592),i=n(9200),u=n(5756),m=n(8136);const d="dropdown__link--active";function h(e){let{activeBasePath:t,activeBaseRegex:n,to:c,href:s,label:i,activeClassName:h="navbar__link--active",prependBaseUrlToHref:f,...v}=e;const g=(0,l.c)(c),b=(0,l.c)(t),E=(0,l.c)(s,{forcePrependBaseUrl:!0}),p=i&&s&&!(0,m.c)(s),k=h===d;return r.createElement(o.c,(0,a.c)({},s?{href:f?E:s}:{isNavLink:!0,activeClassName:h,to:g,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}:null},v),p?r.createElement("span",null,i,r.createElement(u.c,k&&{width:12,height:12})):i)}function f(e){let{items:t,position:n,className:o,...l}=e;const s=(0,r.useRef)(null),i=(0,r.useRef)(null),[u,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&m(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[s]);const f=function(e,t){return void 0===t&&(t=!1),(0,c.c)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.createElement("div",{ref:s,className:(0,c.c)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":u})},r.createElement(h,(0,a.c)({className:f(o)},l,{onClick:l.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),m(!u))}}),l.children??l.label),r.createElement("ul",{ref:i,className:"dropdown__menu"},t.map(((e,n)=>{let{className:c,...o}=e;return r.createElement("li",{key:n},r.createElement(h,(0,a.c)({onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),m(!1);const t=s.current.nextElementSibling;t&&t.focus()}},activeClassName:d,className:f(c,!0)},o)))})))):r.createElement(h,(0,a.c)({className:f(o)},l))}function v(e){let{items:t,className:n,position:o,...l}=e;const u=(0,r.useRef)(null),{pathname:m}=(0,s.IT)(),[d,f]=(0,r.useState)((()=>!t?.some((e=>(0,i.Sc)(e.to,m)))??!0)),v=function(e,t){return void 0===t&&(t=!1),(0,c.c)("menu__link",{"menu__link--sublist":t},e)};if(!t)return r.createElement("li",{className:"menu__list-item"},r.createElement(h,(0,a.c)({className:v(n)},l)));const g=u.current?.scrollHeight?`${u.current?.scrollHeight}px`:void 0;return r.createElement("li",{className:(0,c.c)("menu__list-item",{"menu__list-item--collapsed":d})},r.createElement(h,(0,a.c)({role:"button",className:v(n,!0)},l,{onClick:e=>{e.preventDefault(),f((e=>!e))}}),l.children??l.label),r.createElement("ul",{className:"menu__list",ref:u,style:{height:d?void 0:g}},t.map(((e,t)=>{let{className:n,...c}=e;return r.createElement("li",{className:"menu__list-item",key:t},r.createElement(h,(0,a.c)({activeClassName:"menu__link--active",className:v(n)},c,{onClick:l.onClick})))}))))}const g=function(e){let{mobile:t=!1,...n}=e;const a=t?v:f;return r.createElement(a,n)}},3040:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(5072),r=n(1504),c=n(9428),o=n(3920),l=n(4971),s=n(9200),i=n(5684);function u(e){let{docId:t,activeSidebarClassName:n,label:u,docsPluginId:m,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.wB)(m),{preferredVersion:v}=(0,s.iy)(m),g=(0,o.aA)(m),b=function(e,t){const n=[].concat(...e.map((e=>e.docs))),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,i.uniq)([h,v,g].filter(Boolean)),t);return r.createElement(c.c,(0,a.c)({exact:!0},d,{className:(0,l.c)(d.className,{[n]:f&&f.sidebar===b.sidebar}),label:u??b.id,to:b.path}))}},5692:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(5072),r=n(1504),c=n(9428),o=n(3920),l=n(9200);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:i,dropdownItemsBefore:u,dropdownItemsAfter:m,...d}=e;const h=(0,o.wB)(n),f=(0,o.gN)(n),v=(0,o.aA)(n),{preferredVersion:g,savePreferredVersionName:b}=(0,l.iy)(n);const E=function(){const e=f.map((e=>{const t=h?.alternateDocVersions[e.name]||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===h?.activeVersion,onClick:()=>{b(e.name)}}})),t=[...u,...e,...m];if(!(t.length<=1))return t}(),p=h.activeVersion??g??v,k=t&&E?"Versions":p.label,y=t&&E?void 0:s(p).path;return r.createElement(c.c,(0,a.c)({},d,{mobile:t,label:k,to:y,items:E,isActive:i?()=>!1:void 0}))}},4168:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(5072),r=n(1504),c=n(9428),o=n(3920),l=n(9200);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:n,docsPluginId:i,...u}=e;const m=(0,o.MK)(i),{preferredVersion:d}=(0,l.iy)(i),h=(0,o.aA)(i),f=m??d??h,v=t??f.label,g=n??s(f).path;return r.createElement(c.c,(0,a.c)({},u,{label:v,to:g}))}},520:(e,t,n)=>{n.d(t,{c:()=>a});const a=n(1504).createContext(void 0)},280:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(5072),r=n(1504),c=n(4971),o=n(8264),l=n(9464);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const{isClient:t}=(0,o.c)(),{isDarkTheme:n}=(0,l.c)(),{sources:i,className:u,alt:m="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.c)({key:e,src:i[e],alt:m,className:(0,c.c)(s.themedImage,s[`themedImage--${e}`],u)},d)))))}},5664:(e,t,n)=>{n.d(t,{c:()=>r});var a=n(1504);const r=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},3336:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(1504),r=n(8684);const c=()=>({scrollX:r.c.canUseDOM?window.pageXOffset:0,scrollY:r.c.canUseDOM?window.pageYOffset:0}),o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(c()),r=()=>{const t=c();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},9464:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(1504),r=n(520);const c=function(){const e=(0,a.useContext)(r.c);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},8072:(e,t,n)=>{n.d(t,{O:()=>c,c:()=>o});var a=n(1504),r=n(8684);const c={desktop:"desktop",mobile:"mobile"};const o=function(){const e=r.c.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}const[n,o]=(0,a.useState)(t);return(0,a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){o(t())}}),[]),n}},5652:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(3920),r=n(9200),c=n(8264);function o(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,c.c)(),t=(0,a.L0)(),n=(0,a.mU)(),o=(0,r.eM)(),l=[r.e6,...Object.keys(t).map((function(e){const a=n?.activePlugin?.pluginId===e?n.activeVersion:void 0,c=o[e],l=t[e].versions.find((e=>e.isLast)),s=a??c??l;return(0,r.SE)(e,s.name)}))];return{locale:e.currentLocale,tags:l}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}},2536:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(5592),r=n(8684),c=n(8264);const o=function(){const e=(0,a.Uz)(),t=(0,a.IT)(),{siteConfig:{baseUrl:n}={}}=(0,c.c)();return{searchValue:r.c.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}}}]);