(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[188],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4154:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={description:"The IOTA foundation provides load-balanced public mainnet endpoints where MQTT and the HTTP REST API are enabled.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["mainnet","MQTT","REST API","HTTP","Explorer","reference"]},c="Mainnet",p={unversionedId:"mainnet",id:"mainnet",isDocsHomePage:!1,title:"Mainnet",description:"The IOTA foundation provides load-balanced public mainnet endpoints where MQTT and the HTTP REST API are enabled.",source:"@site/docs/mainnet.md",sourceDirName:".",slug:"/mainnet",permalink:"/mainnet",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/mainnet.md",version:"current",frontMatter:{description:"The IOTA foundation provides load-balanced public mainnet endpoints where MQTT and the HTTP REST API are enabled.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["mainnet","MQTT","REST API","HTTP","Explorer","reference"]},sidebar:"mySidebar",previous:{title:"Chrysalis Snapshot Validation/Boostrapping",permalink:"/guides/snapshot_validation_bootstrapping"},next:{title:"Devnet",permalink:"/devnet"}},u=[{value:"Public Infrastructure",id:"public-infrastructure",children:[]},{value:"Developer Tools",id:"developer-tools",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mainnet"},"Mainnet"),(0,a.kt)("h2",{id:"public-infrastructure"},"Public Infrastructure"),(0,a.kt)("p",null,"IOTA currently provides two load-balanced public mainnet endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chrysalis-nodes.iota.org."),(0,a.kt)("li",{parentName:"ul"},"chrysalis-nodes.iota.cafe.")),(0,a.kt)("p",null,"These endpoints have MQTT (via WebSockets) exposed and offer the HTTP REST API (according to this ",(0,a.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/0026-rest-api.yaml"},"specification"),")\nover TLS."),(0,a.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://explorer.iota.org/mainnet"},"Explorer"),".")))}d.isMDXComponent=!0}}]);