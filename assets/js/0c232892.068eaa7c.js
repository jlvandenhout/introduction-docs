(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[556],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(t),p=i,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||o;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8541:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),r=["components"],s={description:"Overview on how to migrate your tokens from the IOTA 1.0 to IOTA 1.5 Chrysalis network using the Firefly wallet or a migration bundle.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["migration","migration bundle","Firefly","Chrysalis Phase 2"]},l="Chrysalis Migration",u={unversionedId:"guides/token_migration",id:"guides/token_migration",isDocsHomePage:!1,title:"Chrysalis Migration",description:"Overview on how to migrate your tokens from the IOTA 1.0 to IOTA 1.5 Chrysalis network using the Firefly wallet or a migration bundle.",source:"@site/docs/guides/token_migration.md",sourceDirName:"guides",slug:"/guides/token_migration",permalink:"/guides/token_migration",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/guides/token_migration.md",version:"current",frontMatter:{description:"Overview on how to migrate your tokens from the IOTA 1.0 to IOTA 1.5 Chrysalis network using the Firefly wallet or a migration bundle.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["migration","migration bundle","Firefly","Chrysalis Phase 2"]},sidebar:"mySidebar",previous:{title:"Exchange Guide",permalink:"/guides/exchange"},next:{title:"How the IOTA Chrysalis Phase 2 Token Migration Works",permalink:"/guides/migration_mechanism"}},d=[{value:"Token Migration Overview",id:"token-migration-overview",children:[]},{value:"Exchange Token Migration Guide",id:"exchange-token-migration-guide",children:[{value:"Migrating Funds by Issuing Migration Bundles",id:"migrating-funds-by-issuing-migration-bundles",children:[]}]}],c={toc:d};function h(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chrysalis-migration"},"Chrysalis Migration"),(0,o.kt)("p",null,"By the end of the Chrysalis migration, a number of aspects at IOTA changed for the better. With easier ways to\nmanage and secure your experience, IOTA seamlessly integrated these innovations with no service interruptions."),(0,o.kt)("p",null,"With Chrysalis, we made a clear-cut from the current IOTA protocol, and started a new with a much better, and more mature\nnetwork. The network supports many new use cases and created a foundation for IOTA\u2019s upcoming Coordicide."),(0,o.kt)("p",null,"This included one of the innovations that directly impacted one of the most crucial aspects of your experience: funds."),(0,o.kt)("h2",{id:"token-migration-overview"},"Token Migration Overview"),(0,o.kt)("p",null,"Below is an overview of how the migration is taking place for normal token holders:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You enter your seed in Firefly."),(0,o.kt)("li",{parentName:"ol"},"Firefly creates you a new seed and generates an EdDSA address for the new network."),(0,o.kt)("li",{parentName:"ol"},"Firefly sends your funds to a specific migration address (which encapsulates your EdDSA address) on the old network."),(0,o.kt)("li",{parentName:"ol"},"Your funds become available on the new network on the EdDSA address Firefly created for you."),(0,o.kt)("li",{parentName:"ol"},"Your funds are successfully migrated.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you migrate after the Chrysalis launch, your funds will become available shortly after you migrate (within less than 5 minutes)."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Firefly will initially only be available on desktop operating systems such as: macOS, Linux and Windows and not support migrations for Ledger devices or using a Ledger device."))),(0,o.kt)("p",null,"For further information on the migration process, see our ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/firefly-token-migration/"},"blog post"),"."),(0,o.kt)("p",null,"For a detailed explanation on how the migration process works technically, see ",(0,o.kt)("a",{parentName:"p",href:"/guides/migration_mechanism"},"migration-mechanism")),(0,o.kt)("h2",{id:"exchange-token-migration-guide"},"Exchange Token Migration Guide"),(0,o.kt)("p",null,"To help you successfully transfer your tokens securely to the  Chrysalis network, we created this guide as\nan overview of the migration process and its intricacies."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"On the 28th of April, Chrysalis Phase 2 was released (with its corresponding node software, libraries and tooling).\nAfter this, the legacy network only supports migration transfers moving further (this is accompanied by a legacy\nnode release). This means that both a legacy (albeit only for migrations), and a new Chrysalis Phase 2 network will\nco-exist. "))),(0,o.kt)("p",null,"There are two ways with which you can migrate your funds from the old legacy to the Chrysalis Phase 2 network:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can either use our Firefly wallet (which allows migrating from either an 81-tryte seed or seed vault file)\n(check out this ",(0,o.kt)("a",{parentName:"li",href:"https://blog.iota.org/firefly-token-migration/"},"blog post")," on how to do this)(."),(0,o.kt)("li",{parentName:"ol"},"Or you can craft a migration bundle yourself which transfers your funds to a special migration address under your\ncontrol (programmatic approach).")),(0,o.kt)("p",null,"This guide will further only explain how to create a migration bundle, and the rules imposed on it."),(0,o.kt)("h3",{id:"migrating-funds-by-issuing-migration-bundles"},"Migrating Funds by Issuing Migration Bundles"),(0,o.kt)("p",null,"Note that as mentioned above, there was a special release for the legacy node software on the 28th of April, which\nwill only further support migration bundles. In case you're operating a node yourself you must upgrade to that version,\nas otherwise you will no longer be synchronized with the network."),(0,o.kt)("h4",{id:"migration-bundle"},"Migration bundle"),(0,o.kt)("p",null,"With this limited legacy network, only migration bundles will further confirm. A migration bundle is nothing else than a\nnormal value bundle/transfer which has some additional restrictions. If you craft a bundle which obeys to the following\nrules, then it falls under what we define as a migration bundle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It contains exactly one output transaction of which the destination address is a valid migration address and is\npositioned as the tail transaction within the bundle (meaning ",(0,o.kt)("inlineCode",{parentName:"li"},"currentIndex")," 0). ",(0,o.kt)("strong",{parentName:"li"},"The output transaction value is at\nleast 1'000'000 tokens (1 Mi).")),(0,o.kt)("li",{parentName:"ul"},"It does not contain any zero-value transactions which do not hold signature fragments. This means that transactions\nother than the tail transaction must always be part of an input."),(0,o.kt)("li",{parentName:"ul"},"Input transactions must not use migration addresses.")),(0,o.kt)("p",null,"If in doubt whether your bundle is an actual migration bundle, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.go/blob/2618d56d58105dfc2f3b7f1eb3481d9f89a1d6bc/bundle/bundle.go#L335"},"ValidBundle(bundle, true)"),"\nfunction of our iota.go library to validate this. In case you're not acquainted with Go, you can also contact us on\nDiscord or Slack to ensure that your crafted bundles are valid migration bundles."),(0,o.kt)("p",null,"Things to consider:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must not broadcast your own migration bundles unless you're 100% sure that they are indeed valid migration\nbundles."),(0,o.kt)("li",{parentName:"ul"},"If one of your input transactions spends funds from an already used address (meaning it is subject to key re-use), we\nrecommend that you use the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs/tree/migration-new/iota-bundle-miner"},"bundle miner tool")," to craft a bundle with the most applicable security given the already exposed parts of the given address' private key."),(0,o.kt)("li",{parentName:"ul"},"Do not use too many input transactions as this will increase the overall Proof-of-Work time needed for a single\nbundle. Rather, split your input addresses over multiple migration bundles."),(0,o.kt)("li",{parentName:"ul"},"Your code must include logic to await for the migration bundle's confirmation. If you find that your migration bundle\nis not confirming, consider re-attaching it (re-attaching is ",(0,o.kt)("strong",{parentName:"li"},"not")," the same as re-signing the bundle)."),(0,o.kt)("li",{parentName:"ul"},"If you submit a migration bundle for broadcasting via the ",(0,o.kt)("inlineCode",{parentName:"li"},"broadcastTransactions")," API command and you're using the\nupdated legacy node software (which you must on/after the 28th of April), then it will additionally check up on\nsubmission whether your submitted bundle really adheres to the rules outlined above as an additional safe guard.")),(0,o.kt)("p",null,"For further information about the migration bundles, have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/luca-moser/protocol-rfcs/blob/rfc/wotsicide/text/0035-wotsicide/0035-wotsicide.md#migration-bundle"},"RFC-0035"),"."),(0,o.kt)("p",null,"As an example, ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.iota.org/mainnet/bundle/ZRAFFSEPRKDYGGA9DJQBWCXG9CGODUNZUBOWHVFQY9DK9HCHJQTHHSYBQRGZHGXWAPXDTJPPFJ9XFUALW"},"this bundle")," is a valid migration bundle. It spends 1 Mi"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"from:\n",(0,o.kt)("inlineCode",{parentName:"li"},"YVLQWMRUZ9RCQODQZFYDNRVXHERUFPSDVLDRQLHEWGJLRTMEAQNX9OHZJVTONDHMUJQECDCUAR9PUIGAZPAAEHTZXB")),(0,o.kt)("li",{parentName:"ul"},"to:\n",(0,o.kt)("inlineCode",{parentName:"li"},"TRANSFERTBIXPEWWYZZWBWPWJCB9XYMC9AGYH9X9AYAYADVXTYGYB9G9J9PEF9O9KYZXS9D9MANWTZOD9B9HMRQFWZ")," where the destination address encodes the target Bech32 address ",(0,o.kt)("inlineCode",{parentName:"li"},"iota1qqhmslysuwfedz2mqtr4ux73pr7uhjmd4tpazqs8pf7qdax44muqgw0fz25")," respectively the hex Ed25519 address ",(0,o.kt)("inlineCode",{parentName:"li"},"2fb87c90e39396895b02c75e1bd108fdcbcb6daac3d102070a7c06f4d5aef804")," on which the these funds will be made available in the new network.")),(0,o.kt)("h5",{id:"migration-address"},"Migration address"),(0,o.kt)("p",null,"As mentioned above, a migration bundle must have as its single destination/output address a migration address. A\nmigration address is in essence an EdDSA address (to which you hold the keys on the new network) encoded in a legacy\ntryte address. You can create such an address in the following way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compute the ",(0,o.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7693"},"BLAKE2b-256")," hash ",(0,o.kt)("inlineCode",{parentName:"li"},"H")," of your Ed25519 address ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," (this address is the one you control in the new network; note that an Ed25519 address is the Blake2b-256 hash of your Ed25519 public key)."),(0,o.kt)("li",{parentName:"ul"},"Append the first 4 bytes of ",(0,o.kt)("inlineCode",{parentName:"li"},"H")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"A"),", resulting in 36 bytes."),(0,o.kt)("li",{parentName:"ul"},"Convert ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," to trytes using the ",(0,o.kt)("inlineCode",{parentName:"li"},"b1t6")," encoding (as described\nin ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/protocol-rfcs/blob/master/text/0015-binary-to-ternary-encoding/0015-binary-to-ternary-encoding.md"},"RFC-15"),"). This results in ",(0,o.kt)("inlineCode",{parentName:"li"},"A"),(0,o.kt)("sub",null,"tri")," consisting of 72 trytes."),(0,o.kt)("li",{parentName:"ul"},"Prepend the 8-tryte prefix ",(0,o.kt)("inlineCode",{parentName:"li"},"TRANSFER")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"A"),(0,o.kt)("sub",null,"tri"),"."),(0,o.kt)("li",{parentName:"ul"},"Finally, pad ",(0,o.kt)("inlineCode",{parentName:"li"},"A"),(0,o.kt)("sub",null,"tri")," with the single tryte ",(0,o.kt)("inlineCode",{parentName:"li"},"9")," to get a legacy 81-tryte address.")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ed25519 address (32-byte): ",(0,o.kt)("inlineCode",{parentName:"li"},"6f9e8510b88b0ea4fbc684df90ba310540370a0403067b22cef4971fec3e8bb8")),(0,o.kt)("li",{parentName:"ul"},"Migration address including 9-tryte checksum (\n90-tryte): ",(0,o.kt)("inlineCode",{parentName:"li"},"TRANSFERCDJWLVPAIXRWNAPXV9WYKVUZWWKXVBE9JBABJ9D9C9F9OEGADYO9CWDAGZHBRWIXLXG9MAJV9RJEOLXSJW"))),(0,o.kt)("p",null,"Since nobody holds keys to such migration addresses, funds are effectively burned and can no longer be used in the\nlegacy network."),(0,o.kt)("h4",{id:"migration-code-example-with-nodejs"},"Migration Code Example with Node.js"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/blob/dev/bindings/nodejs/examples/8-migration.md"},"More detailed documentation for the following example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript="},"/**\n * This example creates a new database and account,\n * and migrate funds from the legacy network to the chrysalis network\n */\n\nrequire('dotenv').config()\n\nconst ADDRESS_SECURITY_LEVEL = 2\n// Minimum balance that is required for a migration bundle, because of the dust protection in the new network\nconst MINIMUM_MIGRATION_BALANCE = 1000000\n// This value shouldn't be too high, because then the PoW could take to long to get it confirmed\nconst MAX_INPUTS_PER_BUNDLE = 10\n\n\nasync function run() {\n  try {\n    const { AccountManager, SignerType, addEventListener } = require('@iota/wallet')\n\n    // We store all bundle hashes here and check later if the bundles got confirmed\n    let migrationBundleHashes = [];\n    // Log migration events\n    const callback = function (err, data) {\n      // After a successful broadcast of this bundle, the library will automatically reattach bundle to \n      // speed up the confirmation process. An event with type \"TransactionConfirmed\" (with corresponding bundle hash) \n      // will be emitted as soon as the bundle is confirmed.\n      if (data.event.type === 'TransactionConfirmed') {\n        console.log(\"MigrationProgress:\", data)\n        migrationBundleHashes = migrationBundleHashes.filter(hash => hash !== data.event.data.bundleHash)\n        if (migrationBundleHashes.length == 0) {\n          process.exit()\n        }\n        console.log(\"Still unconfirmed bundles: \", migrationBundleHashes);\n      }\n    }\n    addEventListener(\"MigrationProgress\", callback)\n\n    const manager = new AccountManager({\n      storagePath: './migration-database',\n    })\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n    // Save this mnemonic securely. If you lose it, you potentially lose everything.\n    const mnemonic = manager.generateMnemonic()\n    console.log(\"Save this mnemonic securely. If you lose it, you potentially lose everything:\", mnemonic);\n    manager.storeMnemonic(SignerType.Stronghold, mnemonic)\n\n    const account = await manager.createAccount({\n      // Node url for the new network\n      clientOptions: { node: \"https://chrysalis-nodes.iota.cafe\", localPow: true, network: \"chrysalis-mainnet\" },\n      alias: 'Migration',\n    })\n\n    console.log('Account created:', account.alias())\n    // Nodes for the legacy network\n    const nodes = ['https://nodes.iota.org']\n    const seed = process.env.MIGRATION_SEED\n    const migrationData = await manager.getMigrationData(\n      nodes,\n      seed,\n      {\n        // permanode for the legacy network\n        permanode: 'https://chronicle.iota.org/api',\n        securityLevel: ADDRESS_SECURITY_LEVEL,\n        // this is the default and from there it will check addresses for balance until 30 in a row have 0 balance\n        // if not all balance got detected because a higher address index was used it needs to be increased here\n        initialAddressIndex: 0\n      }\n    )\n    console.log(migrationData)\n\n    let input_batches = getMigrationBundles(migrationData.inputs)\n    // create bundles with the inputs\n    for (batch of input_batches) {\n      try {\n        const bundle = await manager.createMigrationBundle(seed, batch.inputs.map(input => input.index), {\n          logFileName: 'iota-migration.log',\n          // if the input is a spent address we do a bundle mining process which takes 10 minutes to reduce the amount \n          // of the parts of the private key which get revealed\n          mine: batch.inputs[0].spent\n        })\n        migrationBundleHashes.push(bundle.bundleHash)\n      } catch (e) {\n        console.error(e);\n      }\n    }\n\n    // Send all bundles to the Tangle and reattach them until they are confirmed\n    for (bundleHash of migrationBundleHashes) {\n      try {\n        await manager.sendMigrationBundle(nodes, bundleHash)\n      } catch (e) { console.error(e) }\n    }\n\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nrun()\n\nconst getMigrationBundles = (inputs) => {\n  // Categorise spent vs unspent inputs\n  const { spent, unspent } = inputs.reduce((acc, input) => {\n    if (input.spent) {\n      acc.spent.push(input)\n    } else {\n      acc.unspent.push(input)\n    }\n    return acc;\n  }, { spent: [], unspent: [] })\n  const unspentInputChunks = selectInputsForUnspentAddresses(unspent)\n  const spentInputs = spent.filter((input) => input.balance >= MINIMUM_MIGRATION_BALANCE)\n  return [\n    ...spentInputs.map((input) => ({\n      // Make sure for spent addresses, we only have one input per bundle    \n      inputs: [input]\n    })),\n    ...unspentInputChunks.map((inputs) => ({ inputs }))\n  ]\n};\n/**\n * Prepares inputs (as bundles) for unspent addresses.\n * Steps:\n *   - Categorises inputs in two groups 1) inputs with balance >= MINIMUM_MIGRATION_BALANCE 2) inputs with balance < MINIMUM_MIGRATION_BALANCE\n *   - Creates chunks of category 1 input addresses such that length of each chunk should not exceed MAX_INPUTS_PER_BUNDLE\n *   - For category 2: \n *         - Sort the inputs in descending order based on balance;\n *         - Pick first N inputs (where N = MAX_INPUTS_PER_BUNDLE) and see if their accumulative balance >= MINIMUM_MIGRATION_BALANCE\n *         - If yes, then repeat the process for next N inputs. Otherwise, iterate on the remaining inputs and add it to a chunk that has space for more inputs\n *         - If there's no chunk with space left, then ignore these funds. NOTE THAT THESE FUNDS WILL ESSENTIALLY BE LOST!\n * \n * NOTE: If the total sum of provided inputs are less than MINIMUM_MIGRATION_BALANCE, then this method will just return and empty array as those funds can't be migrated.\n * \n * This method gives precedence to max inputs over funds. It ensures, a maximum a bundle could have is 30 inputs and their accumulative balance >= MINIMUM_MIGRATION_BALANCE\n * \n * @method selectInputsForUnspentAddresses\n * \n * @params {Input[]} inputs\n * \n * @returns {Input[][]}\n */\nconst selectInputsForUnspentAddresses = (inputs) => {\n  const totalInputsBalance = inputs.reduce((acc, input) => acc + input.balance, 0);\n\n  // If the total sum of unspent addresses is less than MINIMUM MIGRATION BALANCE, just return an empty array as these funds cannot be migrated\n  if (totalInputsBalance < MINIMUM_MIGRATION_BALANCE) {\n    return [];\n  }\n\n  const { inputsWithEnoughBalance, inputsWithLowBalance } = inputs.reduce((acc, input) => {\n    if (input.balance >= MINIMUM_MIGRATION_BALANCE) {\n      acc.inputsWithEnoughBalance.push(input);\n    } else {\n      acc.inputsWithLowBalance.push(input);\n    }\n\n    return acc;\n  }, { inputsWithEnoughBalance: [], inputsWithLowBalance: [] })\n\n  let chunks = inputsWithEnoughBalance.reduce((acc, input, index) => {\n    const chunkIndex = Math.floor(index / MAX_INPUTS_PER_BUNDLE)\n\n    if (!acc[chunkIndex]) {\n      acc[chunkIndex] = [] // start a new chunk\n    }\n\n    acc[chunkIndex].push(input)\n\n    return acc\n  }, [])\n\n  const fill = (_inputs) => {\n    _inputs.every((input) => {\n      const chunkIndexWithSpaceForInput = chunks.findIndex((chunk) => chunk.length < MAX_INPUTS_PER_BUNDLE);\n\n      if (chunkIndexWithSpaceForInput > -1) {\n        chunks = chunks.map((chunk, idx) => {\n          if (idx === chunkIndexWithSpaceForInput) {\n            return [...chunk, input]\n          }\n\n          return chunk\n        })\n\n        return true;\n      }\n\n      // If there is no space, then exit\n      return false;\n    })\n  }\n\n  const totalBalanceOnInputsWithLowBalance = inputsWithLowBalance.reduce((acc, input) => acc + input.balance, 0)\n\n  // If all the remaining input addresses have accumulative balance less than the minimum migration balance,\n  // Then sort the inputs in descending order and try to pair the\n  if (totalBalanceOnInputsWithLowBalance < MINIMUM_MIGRATION_BALANCE) {\n    const sorted = inputsWithLowBalance.slice().sort((a, b) => b.balance - a.balance)\n\n    fill(sorted)\n  } else {\n    let startIndex = 0\n\n    const sorted = inputsWithLowBalance.slice().sort((a, b) => b.balance - a.balance)\n    const max = Math.ceil(sorted.length / MAX_INPUTS_PER_BUNDLE);\n\n    while (startIndex < max) {\n      const inputsSubset = sorted.slice(startIndex * MAX_INPUTS_PER_BUNDLE, (startIndex + 1) * MAX_INPUTS_PER_BUNDLE)\n      const balanceOnInputsSubset = inputsSubset.reduce((acc, input) => acc + input.balance, 0);\n\n      if (balanceOnInputsSubset >= MINIMUM_MIGRATION_BALANCE) {\n        chunks = [...chunks, inputsSubset]\n      } else {\n        fill(inputsSubset)\n      }\n\n      startIndex++;\n    }\n  }\n\n  return chunks;\n};\n")),(0,o.kt)("p",null,"After the migration only the 24 word mnemonic or the stronghold file gives you access to the funds, so make sure to back them up properly. It's not possible to get access to the funds with the old seed after the migration transaction. Please read our recommendations for ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/backup_security"},"Backup and security"),"."))}h.isMDXComponent=!0}}]);