"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[400],{5788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>m});var a=n(1504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6856:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(5072),r=(n(1504),n(5788));const i={id:"Particle_Network_Integration_for_PlatON",title:"Integrating Particle Network within dApps on PlatON",sidebar_label:"Particle Network integration tutorial"},o="Particle Network Wallet-as-a-Service",l={unversionedId:"Particle_Network_Integration_for_PlatON",id:"Particle_Network_Integration_for_PlatON",isDocsHomePage:!1,title:"Integrating Particle Network within dApps on PlatON",description:"Particle Network is the Intent-Centric, Modular Access Layer of Web3. With Particle's Wallet-as-a-Service, developers can curate an Web2-like user experience through modular and customizable embedded wallet components. Using MPC-TSS for key management, Particle can streamline user onboarding via familiar Web2 accounts\u2014such as Google accounts, email addresses, and phone numbers.",source:"@site/../docs/Particle Network Integration Tutorial.md",sourceDirName:".",slug:"/Particle_Network_Integration_for_PlatON",permalink:"/docs/zh-CN/Particle_Network_Integration_for_PlatON",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/Particle Network Integration Tutorial.md",version:"current",frontMatter:{id:"Particle_Network_Integration_for_PlatON",title:"Integrating Particle Network within dApps on PlatON",sidebar_label:"Particle Network integration tutorial"},sidebar:"docs",previous:{title:"EIP55\u548cBech32\u5730\u5740\u683c\u5f0f\u517c\u5bb9\u65b9\u6848",permalink:"/docs/zh-CN/eip55-bech32-compatible"},next:{title:"ATON\u64cd\u4f5c\u6307\u5357",permalink:"/docs/zh-CN/ATON-user-manual"}},s=[{value:"Integrating Particle Network&#39;s Wallet-as-a-Service on PlatON",id:"integrating-particle-networks-wallet-as-a-service-on-platon",children:[]},{value:"Learn More",id:"learn-more",children:[]}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"particle-network-wallet-as-a-service"},"Particle Network Wallet-as-a-Service"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://particle.network"},(0,r.yg)("strong",{parentName:"a"},"Particle Network"))," is the Intent-Centric, Modular Access Layer of Web3. With Particle's Wallet-as-a-Service, developers can curate an Web2-like user experience through modular and customizable embedded wallet components. Using MPC-TSS for key management, Particle can streamline user onboarding via familiar Web2 accounts\u2014such as Google accounts, email addresses, and phone numbers."),(0,r.yg)("p",null,"Particle Network's Wallet-as-a-Service supports PlatON Mainnet and Testnet through standard EOA-based social logins. Therefore, developers building on PlatON can natively leverage Particle Network for onboarding users into application-embedded wallets using social logins through various SDKs that are directly compatible with PlatON."),(0,r.yg)("p",null,"On this page, you'll find a high-level overview of the integration process, exploring the basics of leveraging Particle Network specifically on PlatON. A basic integration can be done in just a few lines of code; this document will go over such an example."),(0,r.yg)("h2",{id:"integrating-particle-networks-wallet-as-a-service-on-platon"},"Integrating Particle Network's Wallet-as-a-Service on PlatON"),(0,r.yg)("p",null,"When it comes to implementing Particle Network's Wallet-as-a-Service within your application on PlatON, you have a few options. If you're building a mobile application, Particle Network has compatible Android, iOS, Flutter, Unity, React Native, and Cocos SDKs. Otherwise for Desktop (as is the focus in this example), Particle Network has a few primary libraries relevant to this example, they are as follows:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@particle-network/auth-core-modal"),', the primary SDK enabling integration of Particle\'s Wallet-as-a-Service, called "Particle Auth Core."'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@particle-network/chains"),", an optional yet helpful library for specifically using PlatON within the former SDK.")),(0,r.yg)("p",null,"To install these libraries, run one of the two following commands:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @particle-network/auth-core-modal @particle-network/chains\n\n# OR\n\nnpm install @particle-network/auth-core-modal @particle-network/chains\n")),(0,r.yg)("p",null,"Once you've installed these two libraries, you're ready to begin either integrating Particle Network within your existing application, or building a new application leveraging Particle Network. For this tutorial, we'll build a basic React application showcasing the social login functionality. To do this, we can start with the following:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Configure Particle Auth Core (",(0,r.yg)("inlineCode",{parentName:"li"},"@particle-network/auth-core-modal"),") within ",(0,r.yg)("inlineCode",{parentName:"li"},"index.ts")," or an adjacent file.\nTo start building this example application, you'll need to configure Particle Auth Core (the primary library driving integration). This is done primarily through an object called ",(0,r.yg)("inlineCode",{parentName:"li"},"AuthCoreContextProvider")," which should wrap your main ",(0,r.yg)("inlineCode",{parentName:"li"},"App")," component (or it's equivalent in your project; where you intend on using Particle Auth Core). After importing ",(0,r.yg)("inlineCode",{parentName:"li"},"AuthCoreContextProvider")," from ",(0,r.yg)("inlineCode",{parentName:"li"},"@particle-network/auth-core-modal")," and opening the ",(0,r.yg)("inlineCode",{parentName:"li"},"options")," parameter (as is shown below), you'll need to set the following parameter:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"projectId"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"clientKey"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"appId"),". Each of these values are required for the initialization of Particle Auth Core as they fundamentally link your project with the ",(0,r.yg)("a",{parentName:"li",href:"https://dashboard.particle.network"},"Particle dashboard"),". Thus, to retrieve these values, sign up and create a project on the aforementioned dashboard. Within this project, create a new application (A web app in this case), then copy the ",(0,r.yg)("strong",{parentName:"li"},"Project ID"),", ",(0,r.yg)("strong",{parentName:"li"},"Client Key"),", and ",(0,r.yg)("strong",{parentName:"li"},"App ID")," to be used within their associated parameters.")),(0,r.yg)("p",null,"Beyond your ",(0,r.yg)("inlineCode",{parentName:"p"},"projectId"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"clientKey"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"appId"),", there are numerous optional parameters to further configure the modal."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport { PlatON } from '@particle-network/chains';\nimport { AuthCoreContextProvider, PromptSettingType } from '@particle-network/auth-core-modal';\nimport App from './App'\n\nReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(\n  <React.StrictMode>\n    <AuthCoreContextProvider\n      options={{\n        projectId: process.env.REACT_APP_PROJECT_ID,\n        clientKey: process.env.REACT_APP_CLIENT_KEY,\n        appId: process.env.REACT_APP_APP_ID,\n        themeType: 'dark', // Optional\n        fiatCoin: 'USD', // Optional\n        language: 'en', // Optional\n        promptSettingConfig: { // Optional, determines the security settings that a user has to configure\n          promptPaymentPasswordSettingWhenSign: PromptSettingType.first,\n          promptMasterPasswordSettingWhenLogin: PromptSettingType.first,\n        },\n        wallet: { // Optional, streamlines the wallet modal popup\n          visible: true, // Displays an embedded wallet popup on the bottom right of the screen after login\n          customStyle: {\n            supportChains: [PlatON],\n          }\n        },\n      }}\n    >\n    <App />\n      </AuthCoreContextProvider>\n  </React.StrictMode>\n)\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Setup various hooks within your primary ",(0,r.yg)("inlineCode",{parentName:"li"},"App")," component (or it's equivalent).\nWith Particle Auth Core configured (through your ",(0,r.yg)("inlineCode",{parentName:"li"},"index.ts")," file), you're ready to begin using the SDK and facilitating social login within your main ",(0,r.yg)("inlineCode",{parentName:"li"},"App")," component, or whichever file you intend on using Particle Auth within (which should be the same file specified within ",(0,r.yg)("inlineCode",{parentName:"li"},"index.ts"),", in the example above it was ",(0,r.yg)("inlineCode",{parentName:"li"},"App"),"). Specifically for this example, you can import ",(0,r.yg)("inlineCode",{parentName:"li"},"useEthereum"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"useConnect"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"useAuthCore")," from ",(0,r.yg)("inlineCode",{parentName:"li"},"@particle-network/auth-core-modal"),".")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"useConnect")," will facilitate social login, providing functions such as ",(0,r.yg)("inlineCode",{parentName:"li"},"connect")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"disconnect"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"useEthereum")," will enable address retrieval, EIP-1193 provider construction (for using Particle with Ethers, Web3.js, viem), etc."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"useAuthCore")," will allow you to retrieve account information from users after they've logged in with their social account (such as their linked email).\nFor a full list of hooks, take a look at the ",(0,r.yg)("a",{parentName:"li",href:"https://docs.particle.network/developers/auth-service/core/web#auth-core-hooks"},"Particle Auth Core documentation"),".")),(0,r.yg)("p",null,"An example of using each of these hooks in tandem with one another to facilitate social login and execute a sample transaction on PlatON has been included below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useEffect } from \'react\';\n\nimport { useEthereum, useConnect, useAuthCore } from \'@particle-network/auth-core-modal\';\nimport { PlatON } from \'@particle-network/chains\';\n\nimport { ethers } from \'ethers\';\nimport { notification } from \'antd\';\n\nimport \'./App.css\';\n\nconst App = () => {\n  const { provider } = useEthereum();\n  const { connect, disconnect } = useConnect();\n  const { userInfo } = useAuthCore();\n\n  const [balance, setBalance] = useState(null);\n\n  const customProvider = new ethers.providers.Web3Provider(provider, "any");\n\n  useEffect(() => {\n    if (userInfo) {\n      fetchBalance();\n    }\n  }, [userInfo]);\n\n  const fetchBalance = async () => {\n    const balanceResponse = await customProvider.getBalance(await customProvider.getSigner().getAddress());\n\n    setBalance(ethers.utils.formatEther(balanceResponse));\n  }\n\n  // Upon calling, the user will be prompted to login with their social account according to authType\n  const handleLogin = async (authType) => {\n    if (!userInfo) {\n      await connect({\n        socialType: authType,\n        chain: PlatON,\n      });\n    }\n  };\n\n  // The user will be required to click on an application-embedded confirmation popup, after which this transaction will be sent.\n  const executeTx = async () => {\n    const signer = customProvider.getSigner();\n    console.log(await signer.getAddress())\n\n\n    const tx = {\n      to: "0x00000000000000000000000000000000000dEAD0",\n      value: ethers.utils.parseEther("0.001")\n    };\n\n    const txResponse = await signer.sendTransaction(tx);\n    const txReceipt = await txResponse.wait();\n\n    notification.success({\n      message: txReceipt.transactionHash\n    })\n  };\n\n  return (\n    <div className="App">\n      {!userInfo ? (\n        <div className="login-section">\n          <button className="sign-button" onClick={() => handleLogin(\'google\')}>Sign in with Google</button>\n          <button className="sign-button" onClick={() => handleLogin(\'twitter\')}>Sign in with Twitter</button>\n        </div>\n      ) : (\n        <div className="profile-card">\n          <h2>{userInfo.name}</h2>\n          <div className="balance-section">\n            <small>{balance} LAT</small>\n            <button className="sign-message-button" onClick={executeTx}>Execute Transaction</button>\n            <button className="disconnect-button" onClick={() => disconnect()}>Logout</button>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default App;\n')),(0,r.yg)("p",null,"Thus, Particle Network's Wallet-as-a-Service can be plugged in and used as you would any other standard wallet on PlatON, enabling social logins in just a few lines of code."),(0,r.yg)("h2",{id:"learn-more"},"Learn More"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://dashboard.particle.network"},"Particle Dashboard")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.particle.network"},"Particle Documentation")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/TABASCOatw/particle-platon-demo"},"PlatON Example Repository"))))}u.isMDXComponent=!0}}]);