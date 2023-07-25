"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=l,c=u["".concat(o,".").concat(k)]||u[k]||s[k]||r;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:l,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1166:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={id:"Wasm_Dev_Manual",title:"\u5165\u95e8\u624b\u518c",sidebar_label:"\u5165\u95e8\u624b\u518c"},p=void 0,i={unversionedId:"Wasm_Dev_Manual",id:"Wasm_Dev_Manual",isDocsHomePage:!1,title:"\u5165\u95e8\u624b\u518c",description:"\u5165\u95e8\u624b\u518c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/wasm\u5165\u95e8\u624b\u518c.md",sourceDirName:".",slug:"/Wasm_Dev_Manual",permalink:"/docs/zh-CN/Wasm_Dev_Manual",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/wasm\u5165\u95e8\u624b\u518c.md",version:"current",frontMatter:{id:"Wasm_Dev_Manual",title:"\u5165\u95e8\u624b\u518c",sidebar_label:"\u5165\u95e8\u624b\u518c"},sidebar:"docs",previous:{title:"\u8c03\u7528\u5185\u7f6e\u5408\u7ea6",permalink:"/docs/zh-CN/Solidity_Inner_Contract"},next:{title:"\u5f00\u53d1\u6210\u672c",permalink:"/docs/zh-CN/Wasm_Contract_Dev_Costs"}},o=[{value:"\u5165\u95e8\u624b\u518c",id:"\u5165\u95e8\u624b\u518c",children:[{value:"\u6982\u8981",id:"\u6982\u8981",children:[]},{value:"platon-truffle\u5f00\u53d1\u5de5\u5177\u4ecb\u7ecd",id:"platon-truffle\u5f00\u53d1\u5de5\u5177\u4ecb\u7ecd",children:[]},{value:"\u521b\u5efaHelloWorld\u5408\u7ea6",id:"\u521b\u5efahelloworld\u5408\u7ea6",children:[]},{value:"\u7f16\u8bd1HelloWorld\u5408\u7ea6",id:"\u7f16\u8bd1helloworld\u5408\u7ea6",children:[]},{value:"\u90e8\u7f72HelloWorld\u5408\u7ea6",id:"\u90e8\u7f72helloworld\u5408\u7ea6",children:[]},{value:"\u8c03\u7528HelloWorld\u5408\u7ea6",id:"\u8c03\u7528helloworld\u5408\u7ea6",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"\u7f16\u8bd1\u76f8\u5173",id:"\u7f16\u8bd1\u76f8\u5173",children:[]},{value:"\u5408\u7ea6\u76f8\u5173",id:"\u5408\u7ea6\u76f8\u5173",children:[]}]}],d={toc:o},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5165\u95e8\u624b\u518c"},"\u5165\u95e8\u624b\u518c"),(0,l.kt)("h3",{id:"\u6982\u8981"},"\u6982\u8981"),(0,l.kt)("p",null,"\u672c\u6559\u7a0b\u4e3b\u8981\u662f\u6307\u5bfc\u7528\u6237\u5728PlatON\u4e0a\u4f7f\u7528wasm\u8bed\u8a00\u521b\u5efa\u7b80\u5355\u7684HelloWorld\u667a\u80fd\u5408\u7ea6\uff0c\u901a\u8fc7platon-truffle\u7f16\u8bd1\uff0c\u90e8\u7f72\uff0c\u8c03\u7528\u6b64\u5408\u7ea6\u3002"),(0,l.kt)("h3",{id:"platon-truffle\u5f00\u53d1\u5de5\u5177\u4ecb\u7ecd"},"platon-truffle\u5f00\u53d1\u5de5\u5177\u4ecb\u7ecd"),(0,l.kt)("p",null,"platon-truffle\u662fPlatON\u63d0\u4f9b\u7684\u4e00\u6b3e\u80fd\u591f\u5728\u672c\u5730\u7f16\u8bd1\u3001\u90e8\u7f72\u3001\u8c03\u7528\u667a\u80fd\u5408\u7ea6\u7684\u5de5\u5177\uff0c\u5177\u4f53\u7684\u5b89\u88c5\u53ca\u4f7f\u7528\u624b\u518c\u53c2\u89c1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"platon-truffle\u5f00\u53d1\u5de5\u5177",(0,l.kt)("a",{parentName:"li",href:"https://platon-truffle.readthedocs.io/en/v1.0.0/getting-started/installation.html"},"\u5b89\u88c5\u53c2\u8003")),(0,l.kt)("li",{parentName:"ul"},"platon-truffle\u5f00\u53d1\u5de5\u5177",(0,l.kt)("a",{parentName:"li",href:"https://platon-truffle.readthedocs.io/en/v1.0.0/"},"\u4f7f\u7528\u624b\u518c"))),(0,l.kt)("h3",{id:"\u521b\u5efahelloworld\u5408\u7ea6"},"\u521b\u5efaHelloWorld\u5408\u7ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <platon/platon.hpp>\n#include <string>\nusing namespace platon;\n\nclass message {\n   public:\n      std::string head;\n      PLATON_SERIALIZE(message, (head))\n};\n\nclass my_message : public message {\n   public:\n      std::string body;\n      std::string end;\n      PLATON_SERIALIZE_DERIVED(my_message, message, (body)(end))\n};\n\nCONTRACT HelloWorld : public platon::Contract{\n   public:\n      ACTION void init(const my_message &one_message){\n        info.self().push_back(one_message);\n      }\n\n      ACTION void add_message(const my_message &one_message){\n          info.self().push_back(one_message);\n      }\n\n      CONST uint8_t get_message_size(){\n          return info.self().size();\n      }\n\n      CONST std::string get_message_body(const uint8_t index){\n          return info.self()[index].body;\n      }\n\n   private:\n      platon::StorageType<"myvector"_n, std::vector<my_message>> info;\n};\n\nPLATON_DISPATCH(HelloWorld, (init)(add_message)(get_message_size)(get_message_body))\n\n')),(0,l.kt)("p",null,"\u5408\u7ea6\u6587\u4ef6\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6bcf\u4e00\u4e2a\u5408\u7ea6\u6587\u4ef6\u53ea\u6709\u4e00\u4e2a\u5408\u7ea6\u7c7b\uff0c\u5408\u7ea6\u7c7b\u7528 CONTRACT \u4fee\u9970, \u5fc5\u987b\u516c\u6709\u7ee7\u627f platon::Contract\uff0c\u5fc5\u987b\u8981\u6709 init \u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ACTION \u548c CONST \u4fee\u9970\u7684\u6210\u5458\u51fd\u6570\u8868\u793a\u53ef\u8c03\u7528\u51fd\u6570\uff0c\u6b64\u7c7b\u6210\u5458\u51fd\u6570\u4e0d\u53ef\u4ee5\u91cd\u8f7d\u3002ACTION \u51fd\u6570\u4f1a\u4fee\u6539\u94fe\u4e0a\u6570\u636e\uff0cCONST \u51fd\u6570\u53ea\u662f\u67e5\u8be2\u5c5e\u6027\u4e0d\u4f1a\u4fee\u6539\u94fe\u4e0a\u6570\u636e\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u8c03\u7528\u51fd\u6570\u53c2\u6570\u5217\u8868\u4e2d\u7684\u7c7b\u578b\u4e3a\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6b64\u7c7b\u578b\u5b9a\u4e49\u4e2d\u9700\u52a0\u4e0a PLATON_SERIALIZE \u5b8f\u58f0\u660e\u5e8f\u5217\u5316\u51fd\u6570\uff0c\u6b64\u7c7b\u578b\u7ee7\u627f\u81ea\u5176\u4ed6\u7c7b\u578b\uff0c\u9700\u52a0\u4e0a PLATON_SERIALIZE_DERIVED \u5b8f\u58f0\u660e\u5e8f\u5217\u5316\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u8c03\u7528\u51fd\u6570\u53ea\u6709\u5728PLATON_DISPATCH \u5b8f\u5b9a\u4e49\u7edf\u4e00\u5165\u53e3\u51fd\u6570\uff0c\u624d\u80fd\u591f\u88ab\u5916\u90e8\u8c03\u7528\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76ee\u524d platon \u4f1a\u5c06\u5408\u7ea6\u7c7b\u7684\u6210\u5458\u53d8\u91cf\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u6210\u5458\u53d8\u91cf\u5fc5\u987b\u662f platon::StorageType \u7c7b\u578b\uff0cplaton::StorageType\u6a21\u677f\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u5b57\u7b26\u4e32\u540e\u9762\u52a0\u4e0a_n\uff0c\u5b57\u7b26\u4e32\u5fc5\u987b\u4e3a.12345abcdefghijklmnopqrstuvwxyz\u8fd932\u5b57\u7b26\u4e2d\u7684\u5b57\u7b26\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5b9e\u9645\u5b58\u50a8\u7684\u5177\u4f53\u7c7b\u578b\u3002\u6210\u5458\u51fd\u6570\u4fee\u6539\u6210\u5458\u53d8\u91cf\u9700\u8981\u901a\u8fc7 self() \u51fd\u6570\u83b7\u53d6\u5177\u4f53\u7c7b\u578b\u7684\u5b9e\u4f8b\uff0c\u7136\u540e\u6267\u884c\u76f8\u5e94\u7684\u5b9e\u4f8b\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"platon::StorageType \u6a21\u677f\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7c7b\u578b\u4e3a\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6b64\u7c7b\u578b\u5b9a\u4e49\u4e2d\u9700\u52a0\u4e0a PLATON_SERIALIZE \u5b8f\u58f0\u660e\u5e8f\u5217\u5316\u51fd\u6570\uff0c\u6b64\u7c7b\u578b\u7ee7\u627f\u81ea\u5176\u4ed6\u7c7b\u578b\uff0c\u9700\u52a0\u4e0a PLATON_SERIALIZE_DERIVED \u5b8f\u58f0\u660e\u5e8f\u5217\u5316\u51fd\u6570\u3002"))),(0,l.kt)("h3",{id:"\u7f16\u8bd1helloworld\u5408\u7ea6"},"\u7f16\u8bd1HelloWorld\u5408\u7ea6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step1.")," \u4e3aHelloWorld\u9879\u76ee\u521b\u5efa\u65b0\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir HelloWorld && cd HelloWorld\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u547d\u4ee4\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e\u90fd\u5728HelloWorld\u76ee\u5f55\u4e0b\u8fdb\u884c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step2.")," \u4f7f\u7528platon-truffle\u521d\u59cb\u5316\u4e00\u4e2a\u5de5\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"platon-truffle init\n")),(0,l.kt)("p",null,"\u5728\u64cd\u4f5c\u5b8c\u6210\u4e4b\u540e\uff0c\u5c31\u6709\u5982\u4e0b\u9879\u76ee\u7ed3\u6784\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"contracts/: wasm\u5408\u7ea6\u76ee\u5f55")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"migrations/: \u90e8\u7f72\u811a\u672c\u6587\u4ef6\u76ee\u5f55")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"test/: \u6d4b\u8bd5\u811a\u672c\u76ee\u5f55")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"truffle-config.js: platon-truffle \u914d\u7f6e\u6587\u4ef6"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step3.")," \u5c06\u4e4b\u524d\u7f16\u5199\u597d\u7684HelloWorld\u5408\u7ea6\u653e\u81f3HelloWorld/contracts/\u76ee\u5f55\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ls contracts/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u770b\u5230HelloWorld.cpp")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step4.")," \u4fee\u6539platon-truffle \u914d\u7f6e\u6587\u4ef6truffle-config.js\uff0c\u6dfb\u52a0\u7f16\u8bd1wasm\u5408\u7ea6\u7248\u672c\u53f7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,l.kt)("p",null,"truffle-config.js \u4fee\u6539\u90e8\u5206\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'compilers: {\n     wasm: {\n           version: "1.0.0"\n     }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step5.")," \u7f16\u8bd1\u5408\u7ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"platon-truffle compile\n")),(0,l.kt)("p",null,"\u5728\u64cd\u4f5c\u5b8c\u6210\u4e4b\u540e\uff0c\u751f\u6210\u5982\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/")," wasm\u5408\u7ea6\u7f16\u8bd1\u540e\u7684\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/contracts/HelloWorld.abi.json"),"  HelloWorld\u5408\u7ea6\u7f16\u8bd1\u540e\u7684abi\u63a5\u53e3\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/contracts/HelloWorld.wasm"),"  HelloWorld\u5408\u7ea6\u7f16\u8bd1\u540e\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6")),(0,l.kt)("h3",{id:"\u90e8\u7f72helloworld\u5408\u7ea6"},"\u90e8\u7f72HelloWorld\u5408\u7ea6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step1.")," \u4fee\u6539truffle-config.js\u4e2d\u94fe\u7684\u914d\u7f6e\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,l.kt)("p",null,"\u5c06truffle-config.js\u4e2d\u7684\u533a\u5757\u94fe\u76f8\u5173\u914d\u7f6e\u4fee\u6539\u6210\u60a8\u771f\u5b9e\u8fde\u63a5\u7684\u94fe\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'networks: {\n    development: {\n       host: "10.1.1.6",     // \u533a\u5757\u94fe\u6240\u5728\u670d\u52a1\u5668\u4e3b\u673a\n       port: 8806,            // \u94fe\u7aef\u53e3\u53f7\n       network_id: "*",       // Any network (default: none)\n       from: "lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc",\n       gas: 999999,\n       gasPrice: 50000000004,\n    },\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step2."),"  \u89e3\u9501\u94b1\u5305\u8d26\u6237"),(0,l.kt)("p",null,"\u8fdb\u5165platon-truffle\u63a7\u5236\u53f0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"platon-truffle console\n")),(0,l.kt)("p",null,"\u5bfc\u5165\u79c1\u94a5\uff08\u5982\u679c\u4e4b\u524d\u5df2\u5bfc\u5165\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'web3.platon.personal.importRawKey("\u60a8\u7684\u94b1\u5305\u79c1\u94a5","\u60a8\u7684\u94b1\u5305\u5bc6\u7801");\n')),(0,l.kt)("p",null,"\u5bfc\u5165\u6210\u529f\u5c06\u770b\u5230\u79c1\u94a5\u5bf9\u5e94\u7684\u5730\u5740\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc'\n")),(0,l.kt)("p",null,"\u89e3\u9501\u94b1\u5305\u8d26\u6237"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," web3.platon.personal.unlockAccount('\u60a8\u7684\u94b1\u5305\u5730\u5740','\u60a8\u7684\u94b1\u5305\u5bc6\u7801',999999);\n")),(0,l.kt)("p",null,"\u89e3\u9501\u6210\u529f\u5c06\u770b\u5230\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ture\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step3.")," \u90e8\u7f72HelloWorld\u5408\u7ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'platon-truffle deploy --wasm --contract-name HelloWorld --params \'[[["1"], "2", "3"]]\'\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HelloWorld")," :\u8981\u90e8\u7f72\u7684\u5408\u7ea6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"params")," :\u5408\u7ea6init\u51fd\u6570\u5bf9\u5e94\u7684\u53c2\u6570")),(0,l.kt)("p",null,"\u90e8\u7f72\u6210\u529f\u540e\uff0c\u5c06\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"receipt:  { blockHash:\n   '0x266733b693ba650315a59c34e72804c06ca3e27fab145625797bd42259b572c5',\n  blockNumber: 70441,\n  contractAddress: 'lat1nk4errnjlulaz5y57xt4djkx3h4jjl7yy9dzqn',\n  cumulativeGasUsed: 291314,\n  from: 'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc',\n  gasUsed: 291314,\n  logs: [],\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: null,\n  transactionHash:\n   '0x60946ebf0ccddc76a0234353435de73e7901888227fb2f03922fb0ce265a4e9d',\n  transactionIndex: 0 }\n  contract HelloWorld deployed successfully\n======================\n\n   > transactionHash:     0x60946ebf0ccddc76a0234353435de73e7901888227fb2f03922fb0ce265a4e9d\n   > contract address:    lat1nk4errnjlulaz5y57xt4djkx3h4jjl7yy9dzqn\n   > block number:        70441\n   > block timestamp:     1583247148341\n   > account:             lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc\n   > balance:             3533694129556768659166595001485837031654967793751237866225582808584074296\n   > gas limit:           100000000\n   > gas used:            291314\n   > gas price:           0.000000050000000004 LAT\n   > total cost:          0.014565700001165256 LAT\n")),(0,l.kt)("h3",{id:"\u8c03\u7528helloworld\u5408\u7ea6"},"\u8c03\u7528HelloWorld\u5408\u7ea6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step1."),"  \u8fdb\u5165platon-truffle\u63a7\u5236\u53f0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"platon-truffle console\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u8c03\u7528\u67e5\u8be2\u5c06\u5728platon-truffle\u63a7\u5236\u53f0\u4e2d\u8fdb\u884c")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step2."),"  \u6784\u5efa\u5408\u7ea6\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'var abi = [{"baseclass":[],"fields":[{"name":"head","type":"string"}],"name":"message","type":"struct"},{"baseclass":["message"],"fields":[{"name":"body","type":"string"},{"name":"end","type":"string"}],"name":"my_message","type":"struct"},{"constant":false,"input":[{"name":"one_message","type":"my_message"}],"name":"init","output":"void","type":"Action"},{"constant":false,"input":[{"name":"one_message","type":"my_message"}],"name":"add_message","output":"void","type":"Action"},{"constant":true,"input":[],"name":"get_message_size","output":"uint8","type":"Action"},{"constant":true,"input":[{"name":"index","type":"uint8"}],"name":"get_message_body","output":"string","type":"Action"}];\nvar contractAddr = \'lat1nk4errnjlulaz5y57xt4djkx3h4jjl7yy9dzqn\';\n \nvar helloworld = new web3.platon.Contract(abi,contractAddr,{vmType: 1 }); \n')),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"abi")," \u662f\u5408\u7ea6\u63d0\u4f9b\u7ed9\u5916\u90e8\u8c03\u7528\u65f6\u7684\u63a5\u53e3\uff0c\u6bcf\u4e2a\u5408\u7ea6\u5bf9\u5e94\u7684abi\u5728\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u4e2d\uff0c\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"HelloWorld/build/contracts/HelloWorld.json")," \u4e2d\u53ef\u4ee5\u627e\u5230"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contractAddr")," \u5728\u90e8\u7f72\u5408\u7ea6\u6210\u529f\u540e\u6709\u4e00\u4e2acontract address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld")," \u5c31\u662f\u6784\u5efa\u51fa\u6765\u4e0e\u94fe\u4e0a\u5408\u7ea6\u4ea4\u4e92\u7684\u5408\u7ea6\u5bf9\u8c61\u62bd\u8c61")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step3."),"  \u8c03\u7528\u5408\u7ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"helloworld.methods.add_message([[\"5\"], \"6\", \"7\"]).send({\n    from: 'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc',gas: 999999\n}).on('receipt', function(receipt) {\n    console.log(receipt);\n}).on('error', console.error);\n")),(0,l.kt)("p",null,"\u8c03\u7528\u5408\u7ea6\u547d\u4ee4\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld")," \u662f\u4e4b\u524d\u6784\u5efa\u7684\u5408\u7ea6\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"methods")," \u56fa\u5b9a\u8bed\u6cd5,\u540e\u9762\u7d27\u8ddf\u5408\u7ea6\u7684\u65b9\u6cd5\u540d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add_message")," \u662f\u6211\u4eecHelloWorld\u5408\u7ea6\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u6709\u4e00\u4e2a\u81ea\u5b9a\u4e49my_message\u7c7b\u578b\u7684\u5165\u53c2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from")," \u8c03\u7528\u8005\u7684\u94b1\u5305\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gas")," gas\u503c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"on")," \u662f\u76d1\u542c\u5408\u7ea6\u5904\u7406\u7ed3\u679c\u4e8b\u4ef6\uff0c\u6b64\u5904\u5982\u679c\u6210\u529f\u5c06\u6253\u5370\u56de\u6267\uff0c\u5931\u8d25\u8f93\u51fa\u9519\u8bef\u65e5\u5fd7")),(0,l.kt)("p",null,"\u51fd\u6570\u8c03\u7528\u6210\u529f\uff0c\u5c06\u4f1a\u770b\u5230\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{ blockHash:\n   '0x669c7b8cb938cc30845e08dc4ceda08f2e17207c267ade97dc5458b445405736',\n  blockNumber: 74665,\n  contractAddress: null,\n  cumulativeGasUsed: 108549,\n  from: 'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc',\n  gasUsed: 108549,\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'lat1nk4errnjlulaz5y57xt4djkx3h4jjl7yy9dzqn',\n  transactionHash:\n   '0x2b5e590df7e70ad428b1ccb06bda5dcce47f84c4d981c2fb475aca9ec9d0000a',\n  transactionIndex: 0,\n  events: {} }\n{ blockHash:\n   '0x669c7b8cb938cc30845e08dc4ceda08f2e17207c267ade97dc5458b445405736',\n  blockNumber: 74665,\n  contractAddress: null,\n  cumulativeGasUsed: 108549,\n  from: 'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc',\n  gasUsed: 108549,\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'lat1nk4errnjlulaz5y57xt4djkx3h4jjl7yy9dzqn',\n  transactionHash:\n   '0x2b5e590df7e70ad428b1ccb06bda5dcce47f84c4d981c2fb475aca9ec9d0000a',\n  transactionIndex: 0,\n  events: {} }\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step4."),"  \u5408\u7ea6\u67e5\u8be2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"helloworld.methods.get_message_body(0).call()\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u5408\u7ea6\u547d\u4ee4\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"helloWorld")," \u662f\u4e4b\u524d\u6784\u5efa\u7684\u5408\u7ea6\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"methods")," \u6307\u5b9a\u5c06\u83b7\u53d6\u5408\u7ea6\u4e2d\u7684\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"get_message_body")," \u662f\u6211\u4eecHelloWorld\u5408\u7ea6\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u6709\u4e00\u4e2aint\u7c7b\u578b\u7684\u5165\u53c2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"call")," \u6307\u660e\u662f\u67e5\u8be2\u65b9\u6cd5")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"\u7f16\u8bd1\u76f8\u5173"},"\u7f16\u8bd1\u76f8\u5173"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"platon-cpp")," \u5982\u4f55\u7f16\u8bd1\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"cpp")," \u6587\u4ef6?"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"platon-cpp ./test.cpp ./test1.cpp\n")),(0,l.kt)("p",{parentName:"li"},"\u53ea\u5141\u8bb8\u5b58\u5728\u4e00\u4e2a\u5408\u7ea6\u7c7b\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"platon-cpp")," \u7f16\u8bd1\u5408\u7ea6, \u5982\u4f55\u6307\u5b9awasm\u8f93\u51fa\u76ee\u5f55\u53ca\u6587\u4ef6\u540d?"),(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-o")," \u53c2\u6570, \u4e14\u6307\u5b9a\u76ee\u5f55\u65f6\u5fc5\u987b\u540c\u65f6\u6307\u5b9a\u6587\u4ef6\u540d:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"platon-cpp ./test.cpp -o ./out/test.wasm\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"platon-truffle\u6267\u884ctruffle deploy\u90e8\u7f72\u5408\u7ea6\u5931\u8d25\uff1f"))),(0,l.kt)("p",null,"\u786e\u8ba4truffle-config.js\u4e2d\u8fde\u63a5\u7684\u94fe\u7684\u914d\u7f6e\u4fe1\u606f\u53ca\u7528\u6237\u7684\u94b1\u5305\u5730\u5740\u662f\u5426\u6b63\u786e,\u94b1\u5305\u662f\u5426\u89e3\u9501\u3002"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"truffle \u90e8\u7f72\u5e26\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\u5408\u7ea6\u5931\u8d25\uff1f")),(0,l.kt)("p",null,"\u5982\u679c\u5408\u7ea6\u4e2d\u7684init\u51fd\u6570\u5e26\u6709\u53c2\u6570\uff0c\u90e8\u7f72\u5408\u7ea6\u65f6\u9700\u8981\u6307\u5b9aparams\u53c2\u6570\u3002"),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"ABI \u652f\u6301\u54ea\u4e9b\u6570\u636e\u7c7b\u578b?"),(0,l.kt)("p",{parentName:"li"},"\u751f\u6210ABI\u652f\u6301\u7684\u7c7b\u578b\u548c\u8f6c\u6362\u89c4\u5219\u5982\u4e0b\uff1a"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"ABI"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uint64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int8_t"),(0,l.kt)("td",{parentName:"tr",align:null},"int8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int16_t"),(0,l.kt)("td",{parentName:"tr",align:null},"int16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int32_t"),(0,l.kt)("td",{parentName:"tr",align:null},"int32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int64_t"),(0,l.kt)("td",{parentName:"tr",align:null},"int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8","[","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::string"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::vector","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"T","[","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::array","[","T, N","]"),(0,l.kt)("td",{parentName:"tr",align:null},"T","[","N","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::pair","<","T, U",">"),(0,l.kt)("td",{parentName:"tr",align:null},"pair","<","T, U")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::set","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"set","<","T",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::map","<","T, V",">"),(0,l.kt)("td",{parentName:"tr",align:null},"map","<","T, V",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std::list","<","T",">"),(0,l.kt)("td",{parentName:"tr",align:null},"list","<","T",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FixedHash","<","N",">"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedHash","<","N",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u128"),(0,l.kt)("td",{parentName:"tr",align:null},"uint128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bigint"),(0,l.kt)("td",{parentName:"tr",align:null},"uint128")))),(0,l.kt)("h3",{id:"\u5408\u7ea6\u76f8\u5173"},"\u5408\u7ea6\u76f8\u5173"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5b9e\u73b0\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"platon")," \u8fdb\u7a0b\u8f93\u51fa\u5408\u7ea6 debug \u65e5\u5fd7\uff1f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5408\u7ea6\u4ee3\u7801\u9996\u884c\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"#undef NDEBUG"),", \u5fc5\u987b\u5728\u5934\u6587\u4ef6 include \u4e4b\u524d"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#undef NDEBUG\n\n#include <platon/platon.hpp>\n\n//...\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"platon")," \u542f\u52a8\u547d\u4ee4\u6307\u5b9a\u65e5\u5fd7\u7ea7\u522b4, \u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"debug")," \u6807\u5fd7"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./platon --debug --verbosity 4 ...\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u7f16\u5199\u5408\u7ea6\u80fd\u6709\u6548\u51cf\u5c11 Gas \u6d88\u8017\uff1f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5f15\u7528\u53c2\u6570")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void test(const std::string& str) {\n    // ...\n}\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u53f3\u503c\u5f15\u7528")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<std::string>&& test() {\n    std::vector<std::string> v;\n    // ...\n    return std::move(v);\n}\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u4e0d\u8981\u7533\u8bf7\u5927\u5757\u5185\u5b58"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"StorageType")," \u6709\u54ea\u4e9b\u5730\u65b9\u8981\u6ce8\u610f\u7684\uff1f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5e94\u8be5\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"init()")," \u521d\u59cb\u5316")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'CONTRAT Hello : public Contract {\npublic:\n    ACTION void init() {\n        s_.self() = "test";\n    }\nprivate:\n    StorageType<"test"_n, std::string> s_;\n};\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"StorageType")," \u7684\u7279\u5316\u7c7b\u578b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Uint8"),(0,l.kt)("li",{parentName:"ul"},"Int8"),(0,l.kt)("li",{parentName:"ul"},"Uint16"),(0,l.kt)("li",{parentName:"ul"},"Int16"),(0,l.kt)("li",{parentName:"ul"},"Uint"),(0,l.kt)("li",{parentName:"ul"},"Int"),(0,l.kt)("li",{parentName:"ul"},"Uint64"),(0,l.kt)("li",{parentName:"ul"},"Int64"),(0,l.kt)("li",{parentName:"ul"},"String"),(0,l.kt)("li",{parentName:"ul"},"Vector"),(0,l.kt)("li",{parentName:"ul"},"Set"),(0,l.kt)("li",{parentName:"ul"},"Map"),(0,l.kt)("li",{parentName:"ul"},"Array"),(0,l.kt)("li",{parentName:"ul"},"Tuple"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"StorageType")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Map"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Array")," \u6709\u4ec0\u4e48\u533a\u522b?"),(0,l.kt)("p",{parentName:"li"},"\u4ece\u5e95\u5c42\u5b58\u50a8\u5c42\u9762\u6765\u8bf4, ",(0,l.kt)("inlineCode",{parentName:"p"},"StorageType")," \u7684\u5b9e\u73b0\u662f\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u5e8f\u5217\u5316, \u7136\u540e\u5b58\u50a8\u5230\u6570\u636e\n\u5e93. \u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Map")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Array")," \u5219\u5c06\u5bb9\u5668\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u5e8f\u5217\u5316\u540e, \u4f5c\u4e3a\nK/V \u5b58\u50a8\u5230\u6570\u636e\u5e93. \u5bf9\u4e8e\u5927\u89c4\u6a21\u6570\u636e, ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Map")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"platon::db::Array")," \u6027\u80fd\n\u66f4\u597d."),(0,l.kt)("p",{parentName:"li"},"\u5728\u5b9e\u73b0\u5408\u7ea6\u65f6, \u5e94\u6839\u636e\u6570\u636e\u89c4\u6a21, \u9009\u62e9\u5408\u9002\u7684\u5b58\u50a8\u7ed3\u6784.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"RLP \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316 \u652f\u6301\u54ea\u4e9b C++ \u6807\u51c6\u5e93\u7c7b\u578b\uff1f"),(0,l.kt)("p",{parentName:"li"},"\u652f\u6301\u4ee5\u4e0b C++ \u6807\u51c6\u5e93\u7c7b\u578b:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"std::string"),(0,l.kt)("li",{parentName:"ul"},"std::vector"),(0,l.kt)("li",{parentName:"ul"},"std::map"),(0,l.kt)("li",{parentName:"ul"},"std::list"),(0,l.kt)("li",{parentName:"ul"},"std::array"),(0,l.kt)("li",{parentName:"ul"},"std::set"),(0,l.kt)("li",{parentName:"ul"},"std::pair"),(0,l.kt)("li",{parentName:"ul"},"std::tuple"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u7c7b\u578b\u5982\u4f55\u652f\u6301 RLP \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316?"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u666e\u901a\u7c7b\u578b\u4f7f\u7528\u5b8f ",(0,l.kt)("inlineCode",{parentName:"li"},"PLATON_SERIALIZE"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Base {\n    int a;\n    std::string b;\n\n    PLATON_SERIALIZE(Base, (a)(b));\n};\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6d3e\u751f\u7c7b\u4f7f\u7528\u5b8f ",(0,l.kt)("inlineCode",{parentName:"li"},"PLATON_SERIALIZE_DERIVED"),", \u540c\u65f6\u57fa\u7c7b\u4e5f\u8981\u4f7f\u7528\u5b8f ",(0,l.kt)("inlineCode",{parentName:"li"},"PLATON_SERIALIZE"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Derived : public Base {\n    int c;\n    int d;\n\n    PLATON_SERIALIZE_DERIVED(Derived, Base, (c)(d));\n};\n")))))}u.isMDXComponent=!0}}]);