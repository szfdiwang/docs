"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2156],{5788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>y});var o=n(1504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},s),{},{components:n})):o.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8067:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(5072),r=(n(1504),n(5788));const a={id:"Network_Description",title:"Networks",sidebar_label:"Networks"},i=void 0,l={unversionedId:"Network_Description",id:"Network_Description",isDocsHomePage:!1,title:"Networks",description:"PlatON is a protocol, which means that multiple independent \u201cnetworks\u201d can be built based on it.",source:"@site/../docs/\u7f51\u7edc\u8bf4\u660e.md",sourceDirName:".",slug:"/Network_Description",permalink:"/docs/en/Network_Description",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u7f51\u7edc\u8bf4\u660e.md",version:"current",frontMatter:{id:"Network_Description",title:"Networks",sidebar_label:"Networks"},sidebar:"docs",previous:{title:"Staking&Delegation",permalink:"/docs/en/staking_and_delegation"},next:{title:"Architecture",permalink:"/docs/en/PlatON_Overall_Solution"}},c=[{value:"Mainnet",id:"mainnet",children:[]},{value:"Development network",id:"development-network",children:[]},{value:"Development network faucet",id:"development-network-faucet",children:[]},{value:"Private network",id:"private-network",children:[]}],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,o.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"PlatON is a protocol, which means that multiple independent \u201cnetworks\u201d can be built based on it."),(0,r.yg)("p",null,"You can use different PlatON networks depending on your purpose. PlatON mainnet and PlatON development network is currently available."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Note"),": The generation of the wallet account does not depend on the network. The same account can be used in different networks. When using the same account in different networks, you need to pay attention to the security of funds on the mainnet!")),(0,r.yg)("h2",{id:"mainnet"},"Mainnet"),(0,r.yg)("p",null,"The PlatON mainnet is a public chain with real economic value operated by the LatticeX Foundation. Anyone can create a mainnet wallet account and can query or create transactions with it, or verify transactions in progress."),(0,r.yg)("p",null,"If you want to connect to the mainnet as a validator, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/en/Become_PlatON_Main_Verification"},"Becoming a mainnet validator"),"."),(0,r.yg)("h2",{id:"development-network"},"Development network"),(0,r.yg)("p",null,"The PlatON development network shares the same features with the mainnet and may be ahead of the mainnet in terms of version. It can be used for testing before going online on the mainnet, and can also provide a development and testing environment for developers or validators."),(0,r.yg)("p",null,"If you want to connect to the development network as a validator, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/en/Become_PlatON_Dev_Verification"},"Becoming a development network validator"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Note"),": Since the development network is also a test ground, therefore, instability and network reset may occur!")),(0,r.yg)("h2",{id:"development-network-faucet"},"Development network faucet"),(0,r.yg)("p",null,"If you need to use test LAT on the development network, you have to obtain it through the faucet at"),(0,r.yg)("p",null,"devnet1\uff1aOriginal Devnet1 (ChainID:210309) has been disabled, please change it to Devnet2 (ChainID:2206131) if needed."),(0,r.yg)("p",null,"devnet2\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://devnet2faucet.platon.network/faucet/"},"https://devnet2faucet.platon.network/faucet/")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Note"),": LAT on the development network has no real value and is for testing only!")),(0,r.yg)("h2",{id:"private-network"},"Private network"),(0,r.yg)("p",null,"PlatON private network is an independent network that is not connected to the mainnet or development network. You can test your application by deploying a private network locally, which can speed up your testing progress."),(0,r.yg)("p",null,"For building a private test network, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/en/Build_Private_Chain"},"Deploying a Private Network "),"."))}u.isMDXComponent=!0}}]);