"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,u=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7233:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"eip55-bech32-compatible",title:"EIP55 and Bech32 address format compatibility scheme",sidebar_label:"EIP55 and Bech32 address"},l=void 0,i={unversionedId:"eip55-bech32-compatible",id:"eip55-bech32-compatible",isDocsHomePage:!1,title:"EIP55 and Bech32 address format compatibility scheme",description:"JSON RPC interface",source:"@site/../docs/PlatON\u7f51\u7edcEIP55\u548cBech32\u5730\u5740\u683c\u5f0f\u517c\u5bb9\u65b9\u6848.md",sourceDirName:".",slug:"/eip55-bech32-compatible",permalink:"/docs/eip55-bech32-compatible",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/PlatON\u7f51\u7edcEIP55\u548cBech32\u5730\u5740\u683c\u5f0f\u517c\u5bb9\u65b9\u6848.md",version:"current",frontMatter:{id:"eip55-bech32-compatible",title:"EIP55 and Bech32 address format compatibility scheme",sidebar_label:"EIP55 and Bech32 address"},sidebar:"docs",previous:{title:"Get a Random Number",permalink:"/docs/get_vrf_random_number"},next:{title:"ATON Wallet User Manual",permalink:"/docs/ATON-user-manual"}},s=[{value:"JSON RPC interface",id:"json-rpc-interface",children:[]},{value:"SDK",id:"sdk",children:[]},{value:"How DAPP is compatible with EIP55 and Bech32",id:"how-dapp-is-compatible-with-eip55-and-bech32",children:[]},{value:"Address conversion method",id:"address-conversion-method",children:[]}],d={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"json-rpc-interface"},"JSON RPC interface"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://devdocs.platon.network/docs/en/Json_Rpc"},"jsonrpc interface")," of PlatON node supports EIP55 (0xxxxx...) address and Bech32 (latxxxxx...) Two kinds of address formats, but the parameters and return values when calling a specific interface can only be selected a certain address format, can not be mixed, the use of different address formats are as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"EIP55 address"),(0,r.kt)("p",{parentName:"li"},"PlatON is fully compatible with the jsonrpc interface of Ethernet. To use the address in EIP55 format, just follow the way of calling Ethernet jsonrpc. Note the following points."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"cannot use the interface prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"platon_"),", must be modified to prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"for interfaces with prefixes other than ",(0,r.kt)("inlineCode",{parentName:"p"},"platon_")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_"),", PlatON adds an optional field ",(0,r.kt)("inlineCode",{parentName:"p"},"bech32"),", which marks whether the Bech32 address needs to be used, with the default value of EIP55, note that if you want to use the EIP55 format, you cannot take the bech32 field"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl -X POST --data \'{"jsonrpc":"2.0", "method": "txpool_contents", "params": [], "id": 1}\'\n')),(0,r.kt)("p",{parentName:"li"},"The return value is"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{"jsonrpc":"2.0","id":1,"result":["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The address fields in both the input and return values are in EIP55 format")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bech32 address"),(0,r.kt)("p",{parentName:"li"},"To use Bech32 addresses, note the following."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"you cannot use an interface prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_"),", you must modify it to be prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"platon_"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"for interfaces with prefixes other than ",(0,r.kt)("inlineCode",{parentName:"p"},"platon_")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_"),", PlatON adds an optional field ",(0,r.kt)("inlineCode",{parentName:"p"},"bech32")," which marks whether or not a Bech32 address needs to be used, the default value is EIP55, note that if you want to use the Bench32 format, you must bring the ",(0,r.kt)("inlineCode",{parentName:"p"},"bech32")," field and set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl -X POST --data \'{"jsonrpc":"2.0","bech32":true, "method": "txpool_contents", "params": [], "id": 1}\'\n')),(0,r.kt)("p",{parentName:"li"},"The return value is"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{"jsonrpc":"2.0","id":1,"result":["lat1zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqp7pn3ep"]}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"the address fields in both the input and return values are in Bench32 format"))))),(0,r.kt)("h2",{id:"sdk"},"SDK"),(0,r.kt)("p",null,"PlatON can be called using the Ethernet SDK and the ",(0,r.kt)("a",{parentName:"p",href:"https://devdocs.platon.network/docs/en/Java_SDK"},"PlatON SDK"),", noting the following points."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"you can only use the EIP55 address with the Ethernet SDK, not the Bech32 address"),(0,r.kt)("li",{parentName:"ol"},"Using PlatON SDK can only use Bech32 address at the moment, not EIP55 address")),(0,r.kt)("h2",{id:"how-dapp-is-compatible-with-eip55-and-bech32"},"How DAPP is compatible with EIP55 and Bech32"),(0,r.kt)("p",null,"DAPP can achieve business support for both EIP55 and Bech32 addresses through address translation as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use jsonrpc interface"),(0,r.kt)("p",{parentName:"li"},"If the DAPP calls the jsonrpc interface directly, it can choose any of the following methods."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"convert the Bech32 address to EIP55 address and call the EIP55 address according to the call method introduced earlier"),(0,r.kt)("li",{parentName:"ol"},"convert the EIP55 address to Bech32 address, and call the Bech32 address according to the call method described above"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using SDK"),(0,r.kt)("p",{parentName:"li"},"If the DAPP uses the SDK to call PlatON, it can choose any of the following methods."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Convert the Bech32 address to an EIP55 address and call it using the Ethernet SDK"),(0,r.kt)("li",{parentName:"ol"},"Convert EIP55 address to Bech32 address and call with PlatON SDK")))),(0,r.kt)("h2",{id:"address-conversion-method"},"Address conversion method"),(0,r.kt)("p",null,"The interconversion between Bech32 addresses and EIP55 addresses is provided in PlatON's SDK, which supports three development languages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devdocs.platon.network/docs/en/Python_SDK"},"python"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from platon_utils import to_bech32_address, to_checksum_address\nto_bech32_address('0x0000000000000000000000000000000000000001', 'lat')\nto_checksum_address('lat1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpfr7f80')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devdocs.platon.network/docs/en/Java_SDK"},"java"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Bech32.addressEncode("lat","0x676c0d9b7da640a25dabd5788612f5faa16cc6b9"));\nBech32.addressDecodeHex("lat1vakqmxma5eq2yhdt64ugvyh4l2ske34eay86pg"));\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devdocs.platon.network/docs/en/JS_SDK/#web3utilstobech32address"},"javascript"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"web3.utils.decodeBech32Address('lat', 'lat1zg69v7yszg69v7yszg69v7yszg69v7y30mluqx');\nweb3.utils.toBech32Address('lat', '0x1234567890123456789012345678901234567891');\n")))}c.isMDXComponent=!0}}]);