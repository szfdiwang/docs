(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[479],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,k=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5819:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o={id:"PlatEye",title:"PlatEye",sidebar_label:"PlatEye"},s=void 0,l={unversionedId:"PlatEye",id:"PlatEye",isDocsHomePage:!1,title:"PlatEye",description:"The PlatEye blockchain browser project aims to enrich blockchain browser functionality, as well as professional data mining of on-chain data, while driving traffic to the portal, increasing ecological exposure, increasing the trustworthiness and transparency of Alaya and PlatON's blockchain, and creating a user-friendly and professional Alaya/PlatON blockchain browser. https://www.alayascan.com can be accessed.",source:"@site/../docs/PlatEye.md",sourceDirName:".",slug:"/PlatEye",permalink:"/docs/en/PlatEye",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/PlatEye.md",version:"current",frontMatter:{id:"PlatEye",title:"PlatEye",sidebar_label:"PlatEye"},sidebar:"docs",previous:{title:"PlatScan",permalink:"/docs/en/PlatON_BlockChain_Browser"},next:{title:"ATON Wallet",permalink:"/docs/en/ATON-user-manual"}},c=[{value:"Key Technologies",id:"key-technologies",children:[]},{value:"Function description",id:"function-description",children:[{value:"Home page",id:"home-page",children:[]},{value:"Query function",id:"query-function",children:[]},{value:"Address Position Ranking",id:"address-position-ranking",children:[]},{value:"On-chain information monitoring",id:"on-chain-information-monitoring",children:[]},{value:"Node list ranking and node details view",id:"node-list-ranking-and-node-details-view",children:[]}]},{value:"Browser public API usage instructions",id:"browser-public-api-usage-instructions",children:[]}],d={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The PlatEye blockchain browser project aims to enrich blockchain browser functionality, as well as professional data mining of on-chain data, while driving traffic to the portal, increasing ecological exposure, increasing the trustworthiness and transparency of Alaya and PlatON's blockchain, and creating a user-friendly and professional Alaya/PlatON blockchain browser. ",(0,r.kt)("a",{parentName:"p",href:"https://www.alayascan.com"},"https://www.alayascan.com")," can be accessed."),(0,r.kt)("h2",{id:"key-technologies"},"Key Technologies"),(0,r.kt)("p",null,"Use Apache Flink, a high-throughput, low-latency distributed streaming data processing framework, to perform statistics on the latest data. The data such as transactions and contracts that need to be retrieved are processed and stored in Elastic Search cluster, which supports millisecond query retrieval, combined with MySql database. The front-end uses Vue.js framework, the back-end uses java, using the front-end and back-end separated development method development, CDN using Cloudflare. chain information through the node rpc to obtain. Also need to modify the client to get the current transactions in the transaction pool, used to count the relationship between the transaction was packed time and gas cost in the transaction pool."),(0,r.kt)("h2",{id:"function-description"},"Function description"),(0,r.kt)("h3",{id:"home-page"},"Home page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Home page of the browser displays the latest information of the current ATP, and scrolls the list of the latest blocks and the latest transactions."),(0,r.kt)("li",{parentName:"ul"},"Provide block/address/transaction search bar, you can use the query function provided by the browser to query block/address/transaction information.")),(0,r.kt)("h3",{id:"query-function"},"Query function"),(0,r.kt)("p",null,"The search box in the Header or the browser home page can be queried by entering the block height, address or transaction hash value, and return the specific information of the block, address and transaction respectively."),(0,r.kt)("h3",{id:"address-position-ranking"},"Address Position Ranking"),(0,r.kt)("p",null,"PlatEye Browser provides a function to view the ranking of address positions. Click on the block chain in the navigation bar and click on the address to view the list of addresses and their ranking information. Addresses can be ranked by total amount, liquidity amount, locked position amount, and total pledged amount. Click on an address to jump to the address details page to see the details of that address."),(0,r.kt)("h3",{id:"on-chain-information-monitoring"},"On-chain information monitoring"),(0,r.kt)("p",null,"View transaction list and details, monitor large transactions, lockup balance statistics, etc."),(0,r.kt)("h3",{id:"node-list-ranking-and-node-details-view"},"Node list ranking and node details view"),(0,r.kt)("p",null,"You can view the node list, the detail page statistics related to this node, and provide snapshot download."),(0,r.kt)("h2",{id:"browser-public-api-usage-instructions"},"Browser public API usage instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interface documentation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Document description: ",(0,r.kt)("a",{parentName:"li",href:"http://129.226.175.12:54444/file/docs/#/home"},"http://129.226.175.12:54444/file/docs/#/home")),(0,r.kt)("li",{parentName:"ul"},"BasePath: ",(0,r.kt)("a",{parentName:"li",href:"http://129.226.175.12:54444/alaya-api/"},"http://129.226.175.12:54444/alaya-api/")),(0,r.kt)("li",{parentName:"ul"},"You can use postman to test the interface"))),(0,r.kt)("li",{parentName:"ul"},"Home page interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Base data: /alaya-api/home/chainStatistic. push ATP base data, such as current height, outgoing block node ID, etc."),(0,r.kt)("li",{parentName:"ul"},"Outgoing block trend: /alaya-api/home/blockStatistic. push the latest 50 outgoing block trend data."),(0,r.kt)("li",{parentName:"ul"},"Verifier list: /alaya-api/home/stakingList. push the latest 8 verifiers."))),(0,r.kt)("li",{parentName:"ul"},"Address Interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Address details: /alaya-api/address/details. returns details such as the specified address."),(0,r.kt)("li",{parentName:"ul"},"Address lockout details: /alaya-api/address/rpplanDetail. queries real-time lockout balance information and lockout plans on the chain."))),(0,r.kt)("li",{parentName:"ul"},"Block interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Block List: /alaya-api/block/blockList. push the full list of outgoing blocks."),(0,r.kt)("li",{parentName:"ul"},"Node block list: /alaya-api/block/blockListByNodeId. push all out block list of specified node."),(0,r.kt)("li",{parentName:"ul"},"Block details: /alaya-api/block/blockDetails. returns the details of the specified block."))),(0,r.kt)("li",{parentName:"ul"},"Node Interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Aggregate data: /alaya-api/staking/statistic. pushes the aggregate data of all nodes of ATP, once every 5 seconds."),(0,r.kt)("li",{parentName:"ul"},"Real-time node list: /alaya-api/staking/aliveStakingList. push all real-time verification nodes."),(0,r.kt)("li",{parentName:"ul"},"History node list: /alaya-api/staking/historyStakingList. push the list of exiting nodes."),(0,r.kt)("li",{parentName:"ul"},"Locked node list: /alaya-api/staking/lockedStakingList. Push a list of nodes with zero exit penalty."),(0,r.kt)("li",{parentName:"ul"},"Node details: /alaya-api/staking/stakingDetails. provides verification node details view function."),(0,r.kt)("li",{parentName:"ul"},"Node Operation Record: /alaya-api/staking/stakingOptRecordList. provides node operation record query function, such as creating proposal, voting, etc."),(0,r.kt)("li",{parentName:"ul"},"Node Delegation List: /alaya-api/staking/delegationListByStaking. provides query function for node related delegate list."),(0,r.kt)("li",{parentName:"ul"},"Address Delegation List: /alaya-api/staking/delegationListByAddress. address-related delegation list query function."))),(0,r.kt)("li",{parentName:"ul"},"Transaction interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Transaction List: /alaya-api/transaction/transactionList. push all transaction list."),(0,r.kt)("li",{parentName:"ul"},"Block Transaction List: /alaya-api/transaction/transactionListByBlock. pushes the list of block related transactions."),(0,r.kt)("li",{parentName:"ul"},"Transaction List by Address: /alaya-api/transaction/transactionListByAddress. pushes the list of address-related transactions."),(0,r.kt)("li",{parentName:"ul"},"Transaction details: /alaya-api/transaction/transactionDetails. returns the details of the specified transaction."),(0,r.kt)("li",{parentName:"ul"},"Address Claims List: /alaya-api/transaction/queryClaimByAddress. returns the list of all nodes claiming rewards under the current address."),(0,r.kt)("li",{parentName:"ul"},"Node-related claim list: /alaya-api/transaction/queryClaimByStaking. node-related claim list query function.")))))}u.isMDXComponent=!0}}]);