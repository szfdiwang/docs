"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5458:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={id:"GraphQL_Server",title:"GraphQL Server",sidebar_label:"GraphQL Server"},l=void 0,i={unversionedId:"GraphQL_Server",id:"GraphQL_Server",isDocsHomePage:!1,title:"GraphQL Server",description:"In addition to the JSON-RPC APIs, PlatON supports the GraphQL API as specified by EIP-1767. GraphQL lets you specify which fields of an objects you need as part of the query, eliminating the extra load on the client for filling in fields which are not needed. It also allows for combining several traditional JSON-RPC requests into one query which translates into less overhead and more performance.",source:"@site/../docs/graphql.md",sourceDirName:".",slug:"/GraphQL_Server",permalink:"/docs/en/GraphQL_Server",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/graphql.md",version:"current",frontMatter:{id:"GraphQL_Server",title:"GraphQL Server",sidebar_label:"GraphQL Server"},sidebar:"docs",previous:{title:"JSON-RPC",permalink:"/docs/en/Json_Rpc"},next:{title:"Explorer API",permalink:"/docs/en/Explorer_API"}},s=[{value:"GraphiQL",id:"graphiql",children:[]},{value:"Query",id:"query",children:[]}],p={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In addition to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/Json_Rpc"},"JSON-RPC APIs"),", PlatON supports the GraphQL API as specified by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1767.md"},"EIP-1767"),". GraphQL lets you specify which fields of an objects you need as part of the query, eliminating the extra load on the client for filling in fields which are not needed. It also allows for combining several traditional JSON-RPC requests into one query which translates into less overhead and more performance."),(0,n.kt)("p",null,"The GraphQL endpoint piggybacks on the HTTP transport used by JSON-RPC. Hence you'll have to enable and configure the relevant ",(0,n.kt)("inlineCode",{parentName:"p"},"--http")," flags, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"--graphql")," flag itself:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"platon --http --graphql\n")),(0,n.kt)("p",null,"Now you can start querying against ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:6789/graphql"),". To change the port, you'll need to provide ",(0,n.kt)("inlineCode",{parentName:"p"},"--http.port"),", e.g.:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"platon --http --http.port 9545 --graphql\n")),(0,n.kt)("p",null,"Since PlatON provides support for EIP55 and bech32 dual address formats, if you want to use bech32 addresses in graphql, you need to add platon to the url, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:6789/platon/graphql"),", otherwise the default is EIP55 address format."),(0,n.kt)("h3",{id:"graphiql"},"GraphiQL"),(0,n.kt)("p",null,"An easy way to get started right away and try out queries is the GraphiQL interface shipped with PlatON. To open it visit ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:6789/graphql/ui"),". To see how this works let's read the sender, recipient and value of all transactions in block number 6000000. Try this out in GraphiQL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"query txInfo {\n    block (number: 6000000) { transactions { hash from { address } to { address } value } }\n}\n")),(0,n.kt)("p",null,"GraphiQL also provides a way to explore the schema PlatON provides to help you formulate your queries, which you can see on the right sidebar. Under the title ",(0,n.kt)("inlineCode",{parentName:"p"},"Root Types")," click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Query")," to see the high-level types and their fields."),(0,n.kt)("p",null,"Since PlatON provides support for EIP55 and bech32 dual address formats, if you want to use bech32 addresses in GraphiQL, you need to add platon to the url, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:6789/graphql/ui"),", otherwise the default is EIP55 address format."),(0,n.kt)("h3",{id:"query"},"Query"),(0,n.kt)("p",null,"Reading out data from PlatON is the biggest use-case for GraphQL. However after trying out queries in the UI you may want to do it programmatically. You can consult the official ",(0,n.kt)("a",{parentName:"p",href:"graphql-code"},"docs")," to find bindings for your language. Or use your favorite tool for sending HTTP requests. For sake of completeness we briefly touch on two approaches here. First via cURL, and second via a JS script."),(0,n.kt)("p",null,"Here's how you'd get the latest block's number via cURL. Note the use of a JSON object for the data section:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f curl -X POST http://localhost:6789/graphql -H "Content-Type: application/json" --data \'{ "query": "query { block { number } }" }\'\n{"data":{"block":{"number":6004069}}}\n')),(0,n.kt)("p",null,"Alternatively store the JSON-ified query in a file (let's call it ",(0,n.kt)("inlineCode",{parentName:"p"},"block-num.query"),") and do:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f curl -X POST http://localhost:6789/graphql -H \"Content-Type: application/json\" --data '@block-num.query'\n")),(0,n.kt)("p",null,"Executing a simple query in JS looks like the following. Here we're using the lightweight library ",(0,n.kt)("inlineCode",{parentName:"p"},"graphql-request")," to perform the request. Note the use of variables instead of hardcoding the block number in the query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const { request, gql } = require('graphql-request')\n\nconst query = gql`\n    query blockInfo($number: Long) {\n        block (number: $number) { hash stateRoot }\n    }\n`\nrequest('http://localhost:6789/graphql', query, { number: '6004067' })\n    .then((res) => { console.log(res) })\n    .catch((err) => { console.log(err) })\n")))}u.isMDXComponent=!0}}]);