(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[820],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3313:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o=["components"],s={},l="Exchange Guide",c={unversionedId:"guides/exchange_guide",id:"guides/exchange_guide",isDocsHomePage:!1,title:"Exchange Guide",description:"The IOTA Wallet Library",source:"@site/docs/guides/exchange_guide.md",sourceDirName:"guides",slug:"/guides/exchange_guide",permalink:"/guides/exchange_guide",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/guides/exchange_guide.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Developer Guide to Chrysalis",permalink:"/guides/dev_guide"},next:{title:"Chrysalis Migration",permalink:"/guides/token_guide"}},d=[{value:"The IOTA Wallet Library",id:"the-iota-wallet-library",children:[]},{value:"How Do I Implement It to My Exchange?",id:"how-do-i-implement-it-to-my-exchange",children:[{value:"Multi Account Approach",id:"multi-account-approach",children:[]},{value:"Single Account Approach",id:"single-account-approach",children:[]}]},{value:"Implementation Guide",id:"implementation-guide",children:[]},{value:"How Does it Work?",id:"how-does-it-work",children:[{value:"1. Set up the Wallet Library",id:"1-set-up-the-wallet-library",children:[]},{value:"2. Create an Account For a User",id:"2-create-an-account-for-a-user",children:[]},{value:"3. Generate a User Address to Deposit Funds",id:"3-generate-a-user-address-to-deposit-funds",children:[]},{value:"4. Listen to Events",id:"4-listen-to-events",children:[]},{value:"5. Check the Account Balance",id:"5-check-the-account-balance",children:[]},{value:"6. Enable Withdrawals",id:"6-enable-withdrawals",children:[]}]}],u={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exchange-guide"},"Exchange Guide"),(0,r.kt)("h2",{id:"the-iota-wallet-library"},"The IOTA Wallet Library"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Easily integrate IOTA with your exchange, custody solution, or product.")),(0,r.kt)("p",null,"IOTA is built on an architecture that was designed to be the backbone of the Internet of Things (IoT) environment of the future. But this architecture has made it more challenging for service providers like exchanges to integrate IOTA compared to traditional blockchain-based distributed ledgers."),(0,r.kt)("p",null,"Within the Chrysalis update (also known as IOTA 1.5), some building blocks were changed to be more approachable and more aligned with currently leveraged standards. We also ship many ",(0,r.kt)("a",{parentName:"p",href:"/libraries/"},"client libraries")," to help developers implement IOTA into their applications:\n",(0,r.kt)("img",{alt:"layers",src:a(2354).Z})),(0,r.kt)("h2",{id:"how-do-i-implement-it-to-my-exchange"},"How Do I Implement It to My Exchange?"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/libraries/wallet"},"wallet.rs"),", we use an account model so you can create an account for each of your users. Another approach would be to use one account and generate multiple addresses, which you can then link to the users in your database. The wallet library is designed to be as flexible as possible to back up any of your use cases."),(0,r.kt)("p",null,"Since IOTA addresses in the Chrysalis network are perfectly reusable, they can be mapped to your users in a clear and concise way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an account for every user -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Multi Account")," approach."),(0,r.kt)("li",{parentName:"ul"},"Create one account with many addresses -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Single account")," approach.")),(0,r.kt)("p",null,"The library supports derivation for multiple accounts from a single seed. An account is simply a deterministic identifier from which multiple addresses can be further derived. "),(0,r.kt)("p",null,"The library also allows consumers to assign a meaningful alias to each account. In addition to this, generated individual accounts can be also searched via generated addresses. This means it does not matter whether aliases or addresses are known as the search for the related account is very straightforward using the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library."),(0,r.kt)("p",null,"It also leaves the choice to users if they want to segregate their funds across multiple accounts or multiple addresses. The following illustration outlines the relationships between seed, accounts, and addresses: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"accounts",src:a(6923).Z})),(0,r.kt)("h3",{id:"multi-account-approach"},"Multi Account Approach"),(0,r.kt)("p",null,"The multi account approach is used to create an account for each individual user. The created accounts can then be linked to the internal user IDs as an account alias, which are distinctly separated."),(0,r.kt)("h3",{id:"single-account-approach"},"Single Account Approach"),(0,r.kt)("p",null,"The single account approach allows for just one account and creates addresses for each individual user. The associated addresses are then linked to the internal user IDs and store who owns which address in the database. Most exchanges are more familiar with the single account approach and find it easier to use, implement, and backup."),(0,r.kt)("h2",{id:"implementation-guide"},"Implementation Guide"),(0,r.kt)("p",null,"This guide explains how to use the IOTA Wallet Library to successfully implement IOTA into an exchange. If you already implemented the IOTA Hub, please visit the ",(0,r.kt)("a",{parentName:"p",href:"/guides/hub_guide"},"Hub Migration Guide"),"."),(0,r.kt)("p",null,"Features of the Wallet Library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Secure seed management."),(0,r.kt)("li",{parentName:"ul"},"Account management (with multiple accounts and multiple addresses)."),(0,r.kt)("li",{parentName:"ul"},"Confirmation monitoring."),(0,r.kt)("li",{parentName:"ul"},"Deposit address monitoring."),(0,r.kt)("li",{parentName:"ul"},"Backup and restore functionality.")),(0,r.kt)("h2",{id:"how-does-it-work"},"How Does it Work?"),(0,r.kt)("p",null,"The Wallet Library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions. It offers abstractions to handle IOTA payments and can optionally interact with the IOTA Stronghold for seed handling, seed storage, and state backup. Alternatively, you can use a SQLite database; however, using the Stronghold component is highly recommended due to the most advanced level of security being applied."),(0,r.kt)("p",null,"For further reference, you can see the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"full documentation here"),"."),(0,r.kt)("p",null,"The following examples cover the ",(0,r.kt)("em",{parentName:"p"},"multi account approach")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeJS")," binding:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set up the Wallet Library."),(0,r.kt)("li",{parentName:"ol"},"Create an account for each user."),(0,r.kt)("li",{parentName:"ol"},"Generate a user address for deposits."),(0,r.kt)("li",{parentName:"ol"},"Listen to events."),(0,r.kt)("li",{parentName:"ol"},"Check the user balance."),(0,r.kt)("li",{parentName:"ol"},"Enable withdrawals.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are looking for other languages, please read the ",(0,r.kt)("a",{parentName:"p",href:"/libraries/wallet"},"wallet library overview"),"."))),(0,r.kt)("p",null,"Since all ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," bindings are based on core principles provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, the outlined approach is very similar regardless of the programming language of your choice."),(0,r.kt)("h3",{id:"1-set-up-the-wallet-library"},"1. Set up the Wallet Library"),(0,r.kt)("p",null,"First, let's install the components that are needed to use ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," and the binding of your choice; it may vary a bit from language to language. In the case of the ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeJs")," binding, it is quite straightforward since it is distributed via the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," package manager. We also recommend you use ",(0,r.kt)("inlineCode",{parentName:"p"},"dotenv")," for password management."),(0,r.kt)("p",null,"For further reference, read more about ",(0,r.kt)("a",{parentName:"p",href:"/guides/backup_security"},"backup and security here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/wallet dotenv\ntouch .env\n")),(0,r.kt)("p",null,"Then, input your password to the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SH_PASSWORD="here is your super secure password"\n')),(0,r.kt)("p",null,"Once you have everything needed to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, it is necessary to initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager")," instance which creates (opens) a secure storage for individual accounts (backed up by ",(0,r.kt)("inlineCode",{parentName:"p"},"Stronghold")," by default)."),(0,r.kt)("p",null,"The storage is encrypted at rest, so you need a strong password and location where to put your storage. "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Manage your password with the utmost care."))),(0,r.kt)("p",null,'Technically speaking, "storage" means a single file called ',(0,r.kt)("inlineCode",{parentName:"p"},"wallet.stronghold"),". It is also needed to generate a seed (mnemonic) that serves as a cryptographic key from which all accounts and related addresses are generated."),(0,r.kt)("p",null,"One of the key principles behind the ",(0,r.kt)("inlineCode",{parentName:"p"},"stronghold"),"-based storage is that no one can get a seed from the storage. You deal with all the accounts purely via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Account_Manager")," instance where all complexities are hidden under the hood and are dealt with securely. In case you would also like to store a seed somewhere else, there is another method, ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager.generateMnemonic()"),", that generates random seeds. This method can be leveraged before the actual account initialization."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is highly recommended to store the ",(0,r.kt)("inlineCode",{parentName:"p"},"stronghold")," password and the ",(0,r.kt)("inlineCode",{parentName:"p"},"stronghold")," database on separate devices. For reference, see the ",(0,r.kt)("a",{parentName:"p",href:"/guides/backup_security"},"backup and security guide")," for more information"))),(0,r.kt)("p",null,"Import the Wallet Library and create an account manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    const { AccountManager, SignerType } = require('@iota/wallet')\n\n    // Setup IOTA Wallet Library\n    const manager = new AccountManager({\n        storagePath: './storage'\n    })\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n    const mnemonic = manager.generateMnemonic(); // seed generation\n    // Store your mnemonic in a secure location, it's the only backup option apart from the Stronghold file\n    console.log(\"Save this securely: \" + mnemonic)\n    manager.storeMnemonic(SignerType.Stronghold, mnemonic) \n")),(0,r.kt)("p",null,"Once the stronghold storage is created, it is not needed to generate the seed any longer (",(0,r.kt)("inlineCode",{parentName:"p"},"manager.storeMnemonic(SignerType.Stronghold, manager.generateMnemonic())"),"). It has been already saved in the storage together with all account information."),(0,r.kt)("h3",{id:"2-create-an-account-for-a-user"},"2. Create an Account For a User"),(0,r.kt)("p",null,"Once the backend storage is created, individual accounts for individual users can be created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    let account = await manager.createAccount({\n        alias: user_id,  // an unique id from your existing user\n        clientOptions: { node: 'https://api.lb-0.h.chrysalis-devnet.iota.cafe/', localPow: false }\n    })\n")),(0,r.kt)("p",null,"Each account is related to a specific IOTA network (mainnet/devnet) which is referenced by a node property, such as node url (in this example, the Chrysalis devnet balancer)."),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"clientOptions"),", please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/libraries/nodejs/api_reference"},"Wallet NodeJs API Reference"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Alias")," can be whatever fits to the given use case and should be unique. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Alias")," is usually used to identify the given account later on. Each account is also represented by an ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," which is incremented (by 1) every time a new account is created. Any account can be then referred to via ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"alias"),", or one of its generated ",(0,r.kt)("inlineCode",{parentName:"p"},"addresses"),"."),(0,r.kt)("p",null,"Once an account has been created, you get an instance of it using the following methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccount(accountId)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccountByAlias(alias)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccounts()"),"."),(0,r.kt)("p",null,"The most common methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," instance include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.alias()")," - returns an alias of the given account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.listAddresses()")," - returns list of addresses related to the account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.getUnusedAddress()")," - returns a first unused address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," - generate a new address for the address index incremented by 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.balance()")," - returns the balance for the given account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"account.sync()")," - sync the account information with the tangle.")),(0,r.kt)("h3",{id:"3-generate-a-user-address-to-deposit-funds"},"3. Generate a User Address to Deposit Funds"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," is a stateful library which means it caches all relevant information in storage to provide performance benefits while dealing with, potentially, many accounts/addresses."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sync the account info with the network during the wallet manipulation to be sure the storage reflects an actual state of the ledger (network)."))),(0,r.kt)("p",null,"Every account can own multiple addresses. Addresses are represented by an ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," which is incremented (by 1) every time a new address is created. The latest address is accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"account.latestAddress()"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Always sync before account interactions\n    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('synced!')\n\n    // By design, the last address of each account is an unused address which can be used as deposit address\n    const latestAddress = account.latestAddress()\n\n    console.log('Need a refill? Send it to this address:', latestAddress)\n")),(0,r.kt)("p",null,"Feel free to fill the address with Devnet Tokens with the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.devnet.chrysalis2.com/"},"IOTA Faucet")," to test it."),(0,r.kt)("p",null,"Addresses are of two types, ",(0,r.kt)("inlineCode",{parentName:"p"},"internal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," (external):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each set of addresses are independent from each other and has an independent ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," id."),(0,r.kt)("li",{parentName:"ul"},"Addresses that are created by ",(0,r.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," are indicated as ",(0,r.kt)("inlineCode",{parentName:"li"},"internal=false")," (public)."),(0,r.kt)("li",{parentName:"ul"},"Internal addresses (",(0,r.kt)("inlineCode",{parentName:"li"},"internal=true"),") are called ",(0,r.kt)("inlineCode",{parentName:"li"},"change")," addresses and are used to send the excess funds to them."),(0,r.kt)("li",{parentName:"ul"},"The approach is also known as a ",(0,r.kt)("em",{parentName:"li"},"BIP32 Hierarchical Deterministic wallet (HD Wallet)"),".")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You may remember IOTA 1.0 network in which addresses were not reusable. It is no longer true and addresses can be reused multiple times in the Chrysalis network."))),(0,r.kt)("h3",{id:"4-listen-to-events"},"4. Listen to Events"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," library supports several events for listening. As soon as the given event occurs, a provided callback is triggered."),(0,r.kt)("p",null,"Below is an example of fetching existing accounts and listening to transaction events coming into the account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    const { addEventListener } = require(\'@iota/wallet\')\n\n    const callback = function(err, data) {\n        if(err) console.log("err:", err)\n        console.log("data:", data)\n    }\n\n    //Adds a new event listener with a callback in the form of (err, data) => {}. Supported event names:\n    addEventListener("BalanceChange", callback)\n\n    // Possible Event Types:\n    //\n    // ErrorThrown\n    // BalanceChange\n    // NewTransaction\n    // ConfirmationStateChange\n    // Reattachment\n    // Broadcast\n\n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"data: {\n  accountId: 'wallet-account://1666fc60fc95534090728a345cc5a861301428f68a237bea2b5ba0c844988566',\n  address: {\n    address: 'atoi1q9c6r2ek5w2yz54en78m8dxwl4qmwd7gmh9u0krm45p8txxyhtfry6apvwj',\n    balance: 20000000,\n    keyIndex: 0,\n    internal: false,\n    outputs: [ [Object], [Object] ]\n  },\n  balance: 20000000\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"accountId")," can then be used to identify the given account via ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccount(accountId)"),"."),(0,r.kt)("p",null,"For further reference, you can read more about events in the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/libraries/nodejs/api_reference#addeventlistenerevent-cb"},"API reference"),"."),(0,r.kt)("h3",{id:"5-check-the-account-balance"},"5. Check the Account Balance"),(0,r.kt)("p",null,"Get the available account balance across all addresses of the given account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Always sync before account interactions\n    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('synced!')\n    let balance = account.balance().available\n    console.log('available balance', balance)\n")),(0,r.kt)("h3",{id:"6-enable-withdrawals"},"6. Enable Withdrawals"),(0,r.kt)("p",null,"Sending tokens is performed via the ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncedAccount")," instance that is a result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"account.sync()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('available balance', account.balance().available)\n\n    const address = 'atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r'\n    const amount = 1000000 // Amount in IOTA: 1000000 == 1 MIOTA\n\n    const node_response = await account.send(\n        address,\n        amount\n    )\n\n    console.log(\"Check your message on https://explorer.iota.org/chrysalis/message/\", node_response.id)\n")),(0,r.kt)("p",null,"The full function signature is ",(0,r.kt)("inlineCode",{parentName:"p"},"Account.send(address, amount[, options])"),"."),(0,r.kt)("p",null,"Default options are perfectly fine and are successful; however, additional options can be provided, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"remainderValueStrategy"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"changeAddress"),": Send the remainder value to an internal address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reuseAddress"),": Send the remainder value back to its original address.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Account.send()")," function returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet message")," that fully describes the given transaction. The ",(0,r.kt)("inlineCode",{parentName:"p"},"messageId")," can be used later for checking a confirmation status. Individual messages related to the given account can be obtained via ",(0,r.kt)("inlineCode",{parentName:"p"},"account.listMessages()")," function."),(0,r.kt)("p",null,"Please note that when sending tokens, a ",(0,r.kt)("a",{parentName:"p",href:"/guides/dev_guide#dust-protection"},"dust protection")," mechanism should be considered."))}p.isMDXComponent=!0},6923:function(e,t,a){"use strict";t.Z=a.p+"assets/images/accounts-140efc62931d4e7b4a306fcb5c1f0d3c.svg"},2354:function(e,t,a){"use strict";t.Z=a.p+"assets/images/wallet_rs_layers-2583696a3719e4047249a70726b3ea48.svg"}}]);