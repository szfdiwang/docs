"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9395],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),N=o(n),d=l,c=N["".concat(m,".").concat(d)]||N[d]||u[d]||r;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},5458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return k},default:function(){return N}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],p={id:"Wasm_Contract_Best_Practice",title:"\u6700\u4f73\u5b9e\u8df5",sidebar_label:"\u6700\u4f73\u5b9e\u8df5"},m=void 0,o={unversionedId:"Wasm_Contract_Best_Practice",id:"Wasm_Contract_Best_Practice",isDocsHomePage:!1,title:"\u6700\u4f73\u5b9e\u8df5",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/wasm\u5408\u7ea6\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5.md",sourceDirName:".",slug:"/Wasm_Contract_Best_Practice",permalink:"/docs/zh-CN/Wasm_Contract_Best_Practice",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/wasm\u5408\u7ea6\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5.md",version:"current",frontMatter:{id:"Wasm_Contract_Best_Practice",title:"\u6700\u4f73\u5b9e\u8df5",sidebar_label:"\u6700\u4f73\u5b9e\u8df5"},sidebar:"docs",previous:{title:"\u5f00\u53d1\u6210\u672c",permalink:"/docs/zh-CN/Wasm_Contract_Dev_Costs"},next:{title:"\u5408\u7ea6API",permalink:"/docs/zh-CN/Wasm_Contract_API"}},k=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u8d39\u7528\u5408\u7406\u8bbe\u7f6e",id:"\u8d39\u7528\u5408\u7406\u8bbe\u7f6e",children:[]},{value:"\u907f\u514d\u8d85\u65f6",id:"\u907f\u514d\u8d85\u65f6",children:[]},{value:"\u975e\u6cd5\u64cd\u4f5c\u5904\u7f5a",id:"\u975e\u6cd5\u64cd\u4f5c\u5904\u7f5a",children:[]},{value:"C/C++\u8bed\u8a00\u9650\u5236",id:"cc\u8bed\u8a00\u9650\u5236",children:[]},{value:"\u7f16\u7a0b\u89c4\u8303",id:"\u7f16\u7a0b\u89c4\u8303",children:[]}],u={toc:k};function N(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5411\u7528\u6237\u4ecb\u7ecd\u667a\u80fd\u5408\u7ea6\u5f00\u53d1\u4e2d\u9700\u8981\u5173\u6ce8\u7684\u4e00\u4e9b\u5173\u952e\u70b9,\u4e3b\u8981\u504f\u5411\u4e8e\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u7684\u5b9e\u8df5.\n\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u672c\u6307\u5357\u5feb\u901f\u4e86\u89e3\u9488\u5bf9\u4e00\u7b14\u4ea4\u6613\u5982\u4f55\u5408\u7406\u7684\u8bbe\u7f6e\u624b\u7eed\u8d39, \u5982\u4f55\u907f\u514d\u88ab\u56e0\u4ea4\u6613\u5931\u8d25\n\u7684\u540c\u65f6\u635f\u5931\u624b\u7eed\u8d39\u4ee5\u53ca\u5982\u4f55\u7f16\u7801\u66f4\u52a0\u89c4\u8303\u7684\u667a\u80fd\u5408\u7ea6."),(0,r.kt)("h3",{id:"\u8d39\u7528\u5408\u7406\u8bbe\u7f6e"},"\u8d39\u7528\u5408\u7406\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatON")," \u7684\u4e3b\u7f51\u4e0a\u90e8\u7f72\u5408\u7ea6\u65f6, \u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u5408\u7406\u7684\u8d39\u7528\u9650\u5236. \u8d39\u7528\u9650\u5236\u662f\u6307\n",(0,r.kt)("inlineCode",{parentName:"p"},"PlatON")," \u4e2d\u667a\u80fd\u5408\u7ea6\u90e8\u7f72/\u6267\u884c\u7684\u80fd\u6e90\u6d88\u8017\u6210\u672c\u7684\u4e0a\u9650. \u8be5\u9650\u5236\u4e3b\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u5b8c\u6210,\n",(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatON")," \u7f51\u7edc\u4e16\u754c\u7684\u71c3\u6599\u503c, \u5b83\u51b3\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatON")," \u7f51\u7edc\u751f\u6001\u7cfb\u7edf\u7684\u6b63\u5e38\u8fd0\u884c. \u901a\n\u5e38\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas"),' \u6765\u8861\u91cf\u6267\u884c\u67d0\u4e9b\u52a8\u4f5c\u9700\u8981\u591a\u5c11"\u5de5\u4f5c\u91cf", \u8fd9\u4e9b\u5de5\u4f5c\u91cf\u5c31\u662f\u4e3a\u4e86\u6267\u884c\u8be5\u52a8\u4f5c\u6240\n\u9700\u8981\u652f\u4ed8\u7ed9 ',(0,r.kt)("inlineCode",{parentName:"p"},"PlatON")," \u7f51\u7edc\u7684\u8d39\u7528\u989d\u5ea6. \u7b80\u5355\u7406\u89e3, ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u662f\u7f51\u7edc\u65f7\u5de5\u7684\u4f63\u91d1, \u5e76\u901a\u8fc7\n",(0,r.kt)("inlineCode",{parentName:"p"},"LAT")," \u7684\u65b9\u5f0f\u652f\u4ed8, \u5728\u7f51\u7edc\u4e0a\u7684\u4efb\u4f55\u4ea4\u6613, \u5408\u7ea6\u6267\u884c, \u6570\u636e\u5b58\u50a8, \u90fd\u9700\u8981\u4f7f\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas"),"."),(0,r.kt)("p",null,"PlatON \u4e0e\u4ee5\u592a\u574a\u533a\u5757\u94fe\u7cfb\u7edf\u7c7b\u4f3c, \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"LAT")," \u8fdb\u884c\u652f\u4ed8\u548c\u7ef4\u62a4\u7f51\u7edc, \u4e00\u679a ",(0,r.kt)("inlineCode",{parentName:"p"},"LAT")," \u5206\u4e3a:\n",(0,r.kt)("inlineCode",{parentName:"p"},"mLAT/uLAT/gVON/mVON/kVON/VON"),", \u5176\u4e2dVON\u662f\u6700\u5c0f\u5355\u4f4d."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u4e3b\u8981\u7531\u4e24\u4e2a\u90e8\u5206\u7ec4\u6210: GasLimit(\u9650\u5236)\u548cGasPrice(\u5355\u4ef7). \u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"GasLimit")," \u662f\u7528\u6237\n\u613f\u610f\u4e3a\u6267\u884c\u67d0\u4e2a\u64cd\u4f5c\u6216\u786e\u8ba4\u4ea4\u6613\u652f\u4ed8\u7684\u6700\u5927 ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u6d88\u8017\u91cf(\u6700\u5c1121,000). GasPrice\u662f\n",(0,r.kt)("inlineCode",{parentName:"p"},"VON")," \u7684\u6570\u91cf, \u7528\u4e8e\u613f\u610f\u4e3a\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u6240\u652f\u4ed8\u7684\u5355\u4ef7."),(0,r.kt)("p",null,"\u7528\u6237\u53d1\u9001\u4e00\u7b14\u4ea4\u6613\u65f6, \u4f1a\u8bbe\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"GasLimit")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"GasPrice"),", \u4e8c\u8005\u7684\u4e58\u79ef(GasLimit *\nGasPrice)\u662f\u7528\u6237\u7684\u4ea4\u6613\u6210\u672c, \u540c\u65f6\u8be5\u6210\u672c\u4f1a\u4f5c\u4e3a\u4f63\u91d1\u5956\u52b1\u7ed9\u65f7\u5de5."),(0,r.kt)("p",null,"\u4ea4\u6613\u8bbe\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"GasPrice")," \u8d8a\u9ad8, \u5219\u4ea4\u6613\u7684\u6267\u884c\u4f18\u5148\u7ea7\u66f4\u9ad8, \u4ea4\u6613\u6210\u672c\u4e5f\u4f1a\u66f4\u5927. \u6bcf\u7b14\u4ea4\u6613\u5728\n\u5b8c\u6210\u540e, \u5269\u4f59\u672a\u4f7f\u7528\u7684Gas\u90fd\u4f1a\u9000\u56de\u5230\u53d1\u9001\u8005\u7684\u5730\u5740\u8d26\u6237\u4e2d. \u6709\u4e00\u70b9\u8981\u7279\u522b\u6ce8\u610f, \u5982\u679c\u56e0\u4e3a\n",(0,r.kt)("inlineCode",{parentName:"p"},"GasLimit")," \u8bbe\u7f6e\u8fc7\u4f4e\u5bfc\u81f4\u4ea4\u6613\u6267\u884c\u5931\u8d25, \u6b64\u65f6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u4e0d\u4f1a\u88ab\u56de\u9000\u5230\u7528\u6237\u5730\u5740, \u7528\u6237\u4f9d\u7136\n\u9700\u8981\u4e3a\u8fd9\u6b21\u5931\u8d25\u7684\u4ea4\u6613\u652f\u4ed8\u80fd\u91cf\u6210\u672c. \u56e0\u6b64, \u65e0\u8bba\u4ea4\u6613\u662f\u5426\u6267\u884c\u6210\u529f, \u4ea4\u6613\u53d1\u9001\u8005\u90fd\u9700\u8981\u5411\u65f7\u5de5\u652f\u4ed8\u4e00\u5b9a\u7684\u8ba1\u7b97\u8d39\u7528."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LAT \u5355\u4f4d\u8f6c\u6362")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"VON\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"VON"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kVON"),(0,r.kt)("td",{parentName:"tr",align:null},"1e3 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mVON"),(0,r.kt)("td",{parentName:"tr",align:null},"1e6 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gVON"),(0,r.kt)("td",{parentName:"tr",align:null},"1e9 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"microLAT"),(0,r.kt)("td",{parentName:"tr",align:null},"1e12 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"milliLAT"),(0,r.kt)("td",{parentName:"tr",align:null},"1e15 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LAT"),(0,r.kt)("td",{parentName:"tr",align:null},"1e18 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kLAT"),(0,r.kt)("td",{parentName:"tr",align:null},"1e21 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000,000,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mLAT"),(0,r.kt)("td",{parentName:"tr",align:null},"1e24 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000,000,000,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gLAT"),(0,r.kt)("td",{parentName:"tr",align:null},"1e27 VON"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000,000,000,000,000,000,000,000")))),(0,r.kt)("h3",{id:"\u907f\u514d\u8d85\u65f6"},"\u907f\u514d\u8d85\u65f6"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatON")," \u7f51\u7edc\u4e0a\u53d1\u9001\u4ea4\u6613, \u6ca1\u6709\u8d85\u65f6\u7684\u6982\u5ff5, \u4f46\u662f\u6700\u7ec8\u4f1a\u6839\u636e\u6240\u8bbe\u7f6e\u7684 Gas \u9650\u5236\u503c\u505c\n\u6b62, \u5982\u679c\u9650\u5236\u503c\u4f4e\u4e8e\u5408\u7ea6\u90e8\u7f72\u6240\u9700\u8981\u7684\u6d88\u8017, \u5219\u4ea4\u6613\u53d1\u9001\u5931\u8d25, \u540c\u65f6\u4f1a\u6263\u9664\u5bf9\u5e94\u7684\u624b\u7eed\u8d39.\n\u624b\u7eed\u8d39\u7684\u8bbe\u5b9a\u4e0d\u53ef\u80fd\u65e0\u9650\u5927, \u56e0\u4e3a\u5728\u7f51\u7edc\u4e2d, \u533a\u5757\u672c\u8eab\u6709\u4e00\u4e2a\u6700\u5927\u7684 Gas \u4e0a\u9650, \u5f53\u4ea4\u6613\u7684\n",(0,r.kt)("inlineCode",{parentName:"p"},"GasLimit")," \u8d85\u8fc7\u8be5\u503c\u65f6, \u4ea4\u6613\u5c06\u65e0\u6cd5\u88ab\u63a5\u6536."),(0,r.kt)("p",null,"\u5982\u679c\u662f\u9488\u5bf9\u5df2\u53d1\u5e03\u7684\u5408\u7ea6\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," \u8c03\u7528(call\u8c03\u7528\u6307\u5408\u7ea6\u903b\u8f91\u5185\u65e0\u72b6\u6001\u53d8\u66f4\u64cd\u4f5c), \u5b58\u5728\n",(0,r.kt)("inlineCode",{parentName:"p"},"5s")," \u8d85\u65f6\u7684\u9650\u5236, \u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"5s")," \u5185\u5408\u7ea6\u903b\u8f91\u6ca1\u6709\u6267\u884c\u5b8c\u6210, \u865a\u62df\u673a\u4f1a\u8d85\u65f6\u5f3a\u5236\u9000\u51fa, \u5bfc\u81f4\u67e5\u8be2\u5931\u8d25."),(0,r.kt)("p",null,"\u4e3a\u907f\u514d\u90e8\u7f72\u5408\u7ea6\u4ea4\u6613\u5931\u8d25, \u8bf7\u5c1d\u8bd5\u5c06\u5927\u578b\u5408\u7ea6\u5206\u6210\u8f83\u5c0f\u7684\u5757, \u5e76\u6839\u636e\u9700\u8981\u76f8\u4e92\u5f15\u7528. \u4e3a\u4e86\u907f\n\u514d\u65e0\u9650\u5faa\u73af, \u8bf7\u6ce8\u610f\u5e38\u89c1\u7684\u9677\u9631\u548c\u9012\u5f52\u8c03\u7528."),(0,r.kt)("h3",{id:"\u975e\u6cd5\u64cd\u4f5c\u5904\u7f5a"},"\u975e\u6cd5\u64cd\u4f5c\u5904\u7f5a"),(0,r.kt)("p",null,"\u5982\u679c\u667a\u80fd\u5408\u7ea6\u4e0d\u662f\u901a\u8fc7\u6807\u51c6\u6709\u6548\u7684\u7f16\u8bd1\u5668\u7f16\u8bd1\u5408\u7ea6\u6216\u8005\u968f\u610f\u7684\u66f4\u6539\u6307\u4ee4\u7801, \u90fd\u4f1a\u5bfc\u81f4\u64cd\u4f5c\u7801\n\u65e0\u6548. \u6b64\u7c7b\u5408\u7ea6\u4e0d\u4ec5\u65e0\u6cd5\u90e8\u7f72\u548c\u6267\u884c\u6210\u529f, \u800c\u4e14\u8fd8\u4f1a\u4ea7\u751f ",(0,r.kt)("inlineCode",{parentName:"p"},"GasLimit*GasPrice")," \u7684\u5168\u989d\u60e9\n\u7f5a, \u5f53\u6b21\u4ea4\u6613\u7684\u624b\u7eed\u8d39\u4f1a\u5168\u90e8\u88ab\u6263\u9664, \u8fd9\u662f\u4e00\u4e2a\u529b\u5ea6\u5f88\u5927\u7684\u60e9\u7f5a, \u5982\u679c\u64cd\u4f5c\u8005\u6ca1\u6ce8\u610f\u8be5\u70b9,\n\u4e0d\u65ad\u91cd\u8bd5, \u90a3\u4e48\u4ed8\u51fa\u7684\u6210\u672c\u4f1a\u66f4\u9ad8, \u4ee3\u4ef7\u66f4\u91cd."),(0,r.kt)("p",null,"\u4e00\u822c\u4ea7\u751f\u65e0\u6548\u64cd\u4f5c\u7801\u6709\u4ee5\u4e0b\u60c5\u51b5:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u6b63\u5e38\u5df2\u7f16\u8bd1\u51fa\u7684\u5408\u7ea6\u624b\u52a8\u66f4\u6539\u4e86\u6307\u4ee4\u7801"),(0,r.kt)("li",{parentName:"ol"},"\u5408\u7ea6\u7f16\u8bd1\u5668\u7248\u672c\u4e0e\u7f51\u7edc\u9501\u652f\u6301\u7684\u5408\u7ea6\u7248\u672c\u4e0d\u4e00\u81f4"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6d6e\u70b9\u6570\u8fd0\u7b97")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatON")," \u7f51\u7edc\u4e2d\u64cd\u4f5c\u5408\u7ea6\u65f6, \u8bf7\u52a1\u5fc5\u5148\u786e\u8ba4\u5f53\u524d\u7f51\u7edc\u6240\u652f\u6301\u7684\u667a\u80fd\u5408\u7ea6\u7248\u672c, \u7136\u540e\u9009\u62e9\u5bf9\u5e94\u7248\u672c\u5bf9\u7684\u7f16\u8bd1\u5668."),(0,r.kt)("p",null,"\u5e38\u89c4\u64cd\u4f5c\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatON")," \u793e\u533a\u63d0\u4f9b\u7684\u6700\u65b0\u7684Truffle/PlatON-CDT\u6765\u7f16\u8bd1/\u90e8\u7f72/\u6267\u884c\u5408\u7ea6,\n\u540c\u65f6\u5728\u5207\u6362\u5230\u4e3b\u7f51\u64cd\u4f5c\u524d, \u52a1\u5fc5\u5728\u6d4b\u8bd5\u7f51\u8fdb\u884c\u6709\u6548\u7684\u9a8c\u8bc1."),(0,r.kt)("h3",{id:"cc\u8bed\u8a00\u9650\u5236"},"C/C++\u8bed\u8a00\u9650\u5236"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"C/C++\u4e0d\u652f\u6301\u7684\u7279\u6027")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d6e\u70b9\u6570(float/double)"),(0,r.kt)("li",{parentName:"ul"},"typeid/dynamic_cast(-fno-rtti)"),(0,r.kt)("li",{parentName:"ul"},"try-catch(-fno-exeception)"),(0,r.kt)("li",{parentName:"ul"},"C++17\u4e4b\u540e\u7684\u7279\u6027")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"libc\u4e0d\u652f\u6301\u7684\u5934\u6587\u4ef6")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"signal.h"),(0,r.kt)("li",{parentName:"ul"},"math.h"),(0,r.kt)("li",{parentName:"ul"},"locale.h"),(0,r.kt)("li",{parentName:"ul"},"errno.h"),(0,r.kt)("li",{parentName:"ul"},"uchar.h"),(0,r.kt)("li",{parentName:"ul"},"time.h")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"libc++\u4e0d\u652f\u6301\u7684\u5934\u6587\u4ef6")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rand"),(0,r.kt)("li",{parentName:"ul"},"atomics"),(0,r.kt)("li",{parentName:"ul"},"thread"),(0,r.kt)("li",{parentName:"ul"},"random")),(0,r.kt)("h3",{id:"\u7f16\u7a0b\u89c4\u8303"},"\u7f16\u7a0b\u89c4\u8303"),(0,r.kt)("h4",{id:"\u547d\u540d\u89c4\u8303"},"\u547d\u540d\u89c4\u8303"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u51fd\u6570\u547d\u540d, \u53d8\u91cf\u547d\u540d, \u6587\u4ef6\u547d\u540d\u8981\u6709\u63cf\u8ff0\u6027")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u91c7\u7528\u533a\u5757\u94fe\u884c\u4e1a\u5185\u7684\u672f\u8bed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c3d\u53ef\u80fd\u5c11\u7684\u4f7f\u7528\u7f29\u5199, \u5982\u679c\u4e00\u5b9a\u4f7f\u7528, \u5219\u63a8\u8350\u4f7f\u7528\u516c\u5171\u7f29\u5199\u548c\u4e60\u60ef\u7f29\u5199\u7b49")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6587\u4ef6\u540d\u8981\u5168\u90e8\u5c0f\u5199, \u53ef\u4ee5\u5305\u542b\u4e0b\u5212\u7ebf(",(0,r.kt)("inlineCode",{parentName:"p"},"_"),")\u6216\u8fde\u5b57\u7b26(",(0,r.kt)("inlineCode",{parentName:"p"},"-"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"WASM\u667a\u80fd\u5408\u7ea6, \u6587\u4ef6\u540d\u4e0e\u5408\u7ea6\u540d\u4fdd\u6301\u4e00\u81f4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\u540d\u79f0\u7684\u6bcf\u4e2a\u9996\u5b57\u6bcd\u5747\u5927\u5199, \u4e0d\u5305\u542b\u4e0b\u5212\u7ebf: ",(0,r.kt)("inlineCode",{parentName:"p"},"MyExcitingClass"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MyExcitingEnum"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d8\u91cf(\u5305\u62ec\u51fd\u6570\u53c2\u6570)\u548c\u6570\u636e\u6210\u5458\u4e00\u5f8b\u5c0f\u5199, \u5355\u8bcd\u4e4b\u95f4\u7528\u4e0b\u5212\u7ebf\u8fde\u63a5. \u7c7b\u7684\u6210\u5458\u53d8\u91cf\u4ee5\u4e0b\u5212\n\u7ebf\u7ed3\u5c3e, \u4f46\u7ed3\u6784\u4f53\u7684\u5c31\u4e0d\u7528, \u5982: ",(0,r.kt)("inlineCode",{parentName:"p"},"a_local_variable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"a_struct_data_member"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"a_class_data_memeber_"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u58f0\u660e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"constexpr")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),' \u7684\u5e38\u91cf, \u6216\u5728\u5408\u7ea6\u6267\u884c\u8fc7\u7a0b\u4e2d\u5176\u503c\u59cb\u7ec8\u4fdd\u6301\u4e0d\u53d8\u7684, \u547d\n\u540d\u65f6\u4ee5 "k" \u5f00\u5934, \u5927\u5c0f\u5199\u6df7\u5408. \u4f8b\u5982:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const int kDaysInAWeek = 7;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5e38\u89c4\u51fd\u6570\u4f7f\u7528\u5927\u5c0f\u5199\u6df7\u5408, \u53d6\u503c\u548c\u8bbe\u503c\u51fd\u6570\u5219\u8981\u6c42\u4e0e\u53d8\u91cf\u540d\u5339\u914d:\n",(0,r.kt)("inlineCode",{parentName:"p"},"MyExcitingFunctio()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MyExcitingMethod()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my_exciting_member_variable()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"set_my_exciting_member_variable()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u679a\u4e3e\u7684\u547d\u540d\u5e94\u8be5\u548c\u5e38\u91cf\u6216\u5b8f\u4e00\u81f4: ",(0,r.kt)("inlineCode",{parentName:"p"},"kEnumName")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"ENUM_NAME"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u7684\u547d\u540d\u5b9e\u4f53\u4e0e\u5df2\u6709\u7684C/C++\u5b9e\u4f53\u76f8\u4f3c, \u53ef\u53c2\u8003\u73b0\u6709\u547d\u540d\u7b56\u7565"))),(0,r.kt)("h4",{id:"\u667a\u80fd\u5408\u7ea6\u6587\u4ef6\u7ec4\u7ec7"},"\u667a\u80fd\u5408\u7ea6\u6587\u4ef6\u7ec4\u7ec7"),(0,r.kt)("p",null,"\u6587\u4ef6\u7ec4\u7ec7\u89c4\u5219:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u822c\u8d85\u8fc71000\u884c\u7684\u7a0b\u5e8f\u4ee3\u7801\u5c31\u6bd4\u8f83\u96be\u4ee5\u9605\u8bfb, \u5c3d\u91cf\u907f\u514d\u51fa\u73b0\u4e00\u4e2a\u6587\u4ef6\u5185\u4ee3\u7801\u884c\u6570\u8fc7\u957f\u7684\u60c5\n\u51b5. \u6bcf\u4e2a\u5408\u7ea6\u6587\u4ef6\u5e94\u53ea\u5305\u542b\u4e00\u4e2a\u5355\u4e00\u7684\u5408\u7ea6\u7c7b\u6216\u5408\u7ea6\u63a5\u53e3.")),(0,r.kt)("p",null,"\u6587\u4ef6\u7ec4\u7ec7\u987a\u5e8f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6ce8\u91ca: \u6240\u6709\u5408\u7ea6\u6e90\u6587\u4ef6\u5728\u5f00\u5934\u6709\u4e00\u4e2a\u6ce8\u91ca, \u5176\u4e2d\u5217\u51fa\u6587\u4ef6\u7684\u7248\u6743\u58f0\u660e, \u6587\u4ef6\u540d, \u529f\u80fd\n\u63cf\u8ff0\u53ca\u521b\u5efa, \u4fee\u6539\u8bb0\u5f55."),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u6216\u63a5\u53e3\u6ce8\u91ca: \u5728\u7c7b/\u63a5\u53e3\u5b9a\u4e49\u4e4b\u524d\u5e94\u8be5\u8fdb\u884c\u6ce8\u91ca, \u5305\u62ec\u7c7b/\u63a5\u53e3\u7684\u63cf\u8ff0, \u6700\u65b0\u4fee\u6539\u8005, \u7248\n\u672c\u53f7, \u53c2\u8003\u94fe\u63a5\u7b49."),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u6210\u5458: \u9996\u5148\u662f\u516c\u5171\u7ea7\u522b\u7684, \u968f\u540e\u662f\u4fdd\u62a4\u7ea7\u522b\u7684, \u6700\u540e\u662f\u79c1\u6709\u7ea7\u522b."),(0,r.kt)("li",{parentName:"ul"},"\u6210\u5458\u51fd\u6570\uff1a\u5408\u7ea6\u5185\u7684\u51fd\u6570\u5e94\u8be5\u6309\u529f\u80fd\u5206\u7ec4, \u800c\u4e0d\u5e94\u8be5\u6309\u4f5c\u7528\u57df\u6216\u8bbf\u95ee\u6743\u9650\u8fdb\u884c\u5206\u7ec4.")),(0,r.kt)("h4",{id:"\u7279\u6027\u4f7f\u7528\u5efa\u8bae"},"\u7279\u6027\u4f7f\u7528\u5efa\u8bae"),(0,r.kt)("h5",{id:"\u7ed3\u6784\u4f53-vs-\u7c7b"},"\u7ed3\u6784\u4f53 vs. \u7c7b"),(0,r.kt)("p",null,"\u4ec5\u5f53\u53ea\u6709\u6570\u636e\u6210\u5458\u65f6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"struct"),", \u5176\u4ed6\u4e00\u6982\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,r.kt)("p",null,"\u5728 C++ \u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," \u5173\u952e\u5b57\u51e0\u4e4e\u542b\u4e49\u4e00\u6837. \u6211\u4eec\u4e3a\u8fd9\u4e24\u4e2a\u5173\u952e\u5b57\u6dfb\u52a0\u6211\u4eec\u81ea\n\u5df1\u7684\u8bed\u4e49\u7406\u89e3, \u4ee5\u4fbf\u4e3a\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\u9009\u62e9\u5408\u9002\u7684\u5173\u952e\u5b57."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"struct")," \u7528\u6765\u5b9a\u4e49\u5305\u542b\u6570\u636e\u7684\u88ab\u52a8\u5f0f\u5bf9\u8c61, \u4e5f\u53ef\u4ee5\u5305\u542b\u76f8\u5173\u7684\u5e38\u91cf, \u4f46\u9664\u4e86\u5b58\u53d6\u6570\u636e\u6210\u5458\n\u4e4b\u5916, \u6ca1\u6709\u522b\u7684\u51fd\u6570\u529f\u80fd. \u5e76\u4e14\u5b58\u53d6\u529f\u80fd\u662f\u901a\u8fc7\u76f4\u63a5\u8bbf\u95ee\u4f4d\u57df, \u800c\u975e\u51fd\u6570\u8c03\u7528. \u9664\u4e86\u6784\u9020\u51fd\n\u6570, \u6790\u6784\u51fd\u6570, ",(0,r.kt)("inlineCode",{parentName:"p"},"Initialize()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Reset()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Validate()")," \u7b49\u7c7b\u4f3c\u7684\u7528\u4e8e\u8bbe\u5b9a\u6570\u636e\u6210\u5458\u7684\n\u51fd\u6570\u5916, \u4e0d\u80fd\u63d0\u4f9b\u5176\u5b83\u529f\u80fd\u7684\u51fd\u6570."),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u66f4\u591a\u7684\u51fd\u6570\u529f\u80fd, ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," \u66f4\u9002\u5408. \u5982\u679c\u62ff\u4e0d\u51c6, \u5c31\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,r.kt)("h5",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,r.kt)("p",null,"\u4f7f\u7528\u7ec4\u5408\u5e38\u5e38\u6bd4\u4f7f\u7528\u7ee7\u627f\u66f4\u5408\u7406. \u5982\u679c\u4f7f\u7528\u7ee7\u627f\u7684\u8bdd, \u5b9a\u4e49\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," \u7ee7\u627f."),(0,r.kt)("p",null,"\u6240\u6709\u7ee7\u627f\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," \u7684. \u5982\u679c\u4f60\u60f3\u4f7f\u7528\u79c1\u6709\u7ee7\u627f, \u4f60\u5e94\u8be5\u66ff\u6362\u6210\u628a\u57fa\u7c7b\u7684\u5b9e\u4f8b\u4f5c\u4e3a\u6210\u5458\u5bf9\u8c61\u7684\u65b9\u5f0f."),(0,r.kt)("p",null,'\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528\u5b9e\u73b0\u7ee7\u627f. \u7ec4\u5408\u5e38\u5e38\u66f4\u5408\u9002\u4e00\u4e9b. \u5c3d\u91cf\u505a\u5230\u53ea\u5728 "is-a" \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u7ee7\u627f:\n\u5982\u679c Bar \u7684\u786e "\u662f\u4e00\u79cd" Foo, Bar \u624d\u80fd\u7ee7\u627f Foo.'),(0,r.kt)("h5",{id:"\u591a\u91cd\u7ee7\u627f"},"\u591a\u91cd\u7ee7\u627f"),(0,r.kt)("p",null,'\u591a\u91cd\u7ee7\u627f\u5c24\u5176\u6210\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u901a\u5e38\u4f1a\u5e26\u6765\u66f4\u9ad8\u7684\u6027\u80fd\u5f00\u9500 (\u5b9e\u9645\u4e0a, \u4ece\u5355\u7ee7\u627f\u5230\u591a\u91cd\u7ee7\u627f\u7684\n\u6027\u80fd\u4e0b\u964d\u901a\u5e38\u53ef\u80fd\u5927\u4e8e\u4ece\u666e\u901a\u6d3e\u53d1\u5230\u865a\u62df\u8c03\u5ea6\u7684\u6027\u80fd\u4e0b\u964d), \u5e76\u4e14\u7531\u4e8e\u5b58\u5728\u5bfc\u81f4 "diamond" \u7684\u98ce\n\u9669\u201d\u7684\u7ee7\u627f\u6a21\u5f0f\uff0c\u5bb9\u6613\u4ea7\u751f\u6b67\u4e49\uff0c\u6df7\u6dc6\u548c\u5f7b\u5e95\u7684\u9519\u8bef\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u70c8\u5efa\u8bae\u4e0d\u8981\u4f7f\u7528\u591a\u91cd\u7ee7\u627f.")),(0,r.kt)("h5",{id:"move"},"move"),(0,r.kt)("p",null,"C++11\u5f15\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"std::move"),", \u80fd\u6709\u6548\u7684\u628a\u8d44\u6e90\u8f6c\u79fb\u7ed9\u5176\u4ed6\u5bf9\u8c61. \u5728\u6211\u4eec\u7684\u5b9e\u8df5\u4e2d, \u4f7f\u7528\n",(0,r.kt)("inlineCode",{parentName:"p"},"std::move")," \u80fd\u6709\u6548\u51cf\u5c11 ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u7684\u6d88\u8017, \u7279\u522b\u662f\u4f7f\u7528\u5bb9\u5668\u7684\u65f6\u5019. \u5728\u8fd4\u56de\u503c\u65f6, \u5e94\u5f53\u8fd4\u56de\n\u53f3\u503c\u5f15\u7528\u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"std::move")," \u5c06\u5de6\u503c\u5f15\u7528\u8f6c\u6362\u4e3a\u53f3\u503c\u5f15\u7528, \u4ee5\u51cf\u5c11 ",(0,r.kt)("inlineCode",{parentName:"p"},"Gas")," \u6d88\u8017. \u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<std::string>&& get_vec() {\n    std::vector<std::string> v;\n    // ignore\n    return std::move(v); // very important\n}\n")),(0,r.kt)("h5",{id:"auto"},"auto"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"auto")," \u5173\u952e\u5b57\u80fd\u591f\u901a\u8fc7\u521d\u59cb\u5316\u5668\u81ea\u52a8\u63a8\u5bfc\u5176\u7c7b\u578b, \u914d\u5408\u5bb9\u5668\uff0c\u8fed\u4ee3\u5668\u4f7f\u7528\u80fd\u7b80\u5316\u4ee3\u7801. \u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"std::map<std::string, std::string> my_map;\nfor (auto it = my_map.begin(); it != my_map.end(); it++) {\n    // ignore\n}\n")),(0,r.kt)("h5",{id:"\u5f15\u7528\u53c2\u6570"},"\u5f15\u7528\u53c2\u6570"),(0,r.kt)("p",null,"\u5efa\u8bae\u6240\u6709\u51fd\u6570\u53c2\u6570\u90fd\u4f7f\u7528\u5f15\u7528\u53c2\u6570. \u5f15\u7528\u53c2\u6570\u53ef\u4ee5\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u590d\u5236, \u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u5185\u5b58\u5206\n\u914d\uff0c\u5bf9\u4e8e\u6211\u4eec\u7684WASM\u865a\u62df\u673a\u6765\u8bf4, \u5185\u5b58\u5206\u914d\u662f\u4e00\u4e2a\u6602\u8d35\u7684\u64cd\u4f5c."),(0,r.kt)("h5",{id:"\u5bb9\u5668"},"\u5bb9\u5668"),(0,r.kt)("p",null,"C++\u6807\u51c6\u5e93\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u5bb9\u5668(map, vector, list\u7b49\u7b49), \u5728\u4f7f\u7528\u65f6\u5e94\u5f53\u4ed4\u7ec6\u9605\u8bfb\u5bf9\u5e94\u7684\u63a5\u53e3\u6587\u6863. \u7279\u522b\u9700\u8981\u6ce8\u610f\u7684\u662f map \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"operator[]")," \u64cd\u4f5c\u7b26, \u6839\u636e\u63a5\u53e3\u6587\u6863\u8bf4\u660e, ",(0,r.kt)("inlineCode",{parentName:"p"},"operator[]")," \u5f53 key \u4e0d\u5b58\u5728\u65f6, \u4f1a\u6267\u884c\u63d2\u5165\u52a8\u4f5c. \u5bf9\u5e94\u5408\u7ea6\u5f00\u53d1\u6765\u8bf4, \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageType")," \u5b58\u50a8 map \u65f6, \u4e0d\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"operator[]")," \u5224\u65ad key \u662f\u5426\u5b58\u5728, \u800c\u5e94\u8be5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"find()"),"."),(0,r.kt)("hr",null))}N.isMDXComponent=!0}}]);