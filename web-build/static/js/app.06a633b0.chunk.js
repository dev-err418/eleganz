(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{396:function(e,n,t){"use strict";var i=t(4),a=t.n(i),s=t(16),o=t(32),r=t(46),u=t.n(r),p=t(50),c=t.n(p),l=t(38),d=t(113),y=(t(368),t(369),t(884)),f=(t(23),t(216)),m=t(219),b=t(371),h=new d.a({supportedChainIds:[1,3,4,5,42]}),j=new b.a({url:"https://mainnet.infura.io/v3/60ab76e16df54c808e50a79975b4779f",appName:"web3-react example"});var x,g=t(150),v=t(391),T=t(372),w=new(new(t.n(T).a)("https://data-seed-prebsc-1-s1.binance.org:8545/").eth.Contract)([{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"addressMintedBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nftPerAddressLimit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newCost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"}],"0x20C9442d514E245d85508C827c89775f574dda52"),O=t(5);!function(e){e.WalletLink="WalletLink"}(x||(x={}));var k=c()({},x.WalletLink,j),C=function(e){var n;return"hmy"===(null==e?void 0:e.chainType)?n=e.blockchain:(n=new y.a(e)).pollingInterval=12e3,n},M=function(){return Object(O.jsx)(l.b,{getLibrary:C,children:Object(O.jsx)(A,{})})},I=function(){var e,n=Object(l.c)(),t=n.account,i=n.library;return t="hmy"===(null==i||null==(e=i.messenger)?void 0:e.chainType)&&t?Object(f.toBech32)(t):t,Object(O.jsx)(s.a,{children:Object(O.jsx)(o.a,{children:null===t?"-":t?t.substring(0,6)+"..."+t.substring(t.length-4):""})})},L=function(){var e,n=Object(l.c)(),t=n.account,i=n.library,r=n.chainId,p="hmy"===(null==i||null==(e=i.messenger)?void 0:e.chainType),c=a.a.useState(),d=u()(c,2),y=d[0],b=d[1];return a.a.useEffect((function(){if(t&&i){var e=!1,n=p?{address:Object(f.toBech32)(t)}:t;return i.getBalance(n).then((function(n){p&&(n=n.result),e||b(n)})).catch((function(){e||b(null)})),function(){e=!0,b(void 0)}}}),[t,i,r]),Object(O.jsx)(s.a,{style:{marginLeft:"10px"},children:Object(O.jsx)(o.a,{children:null===y?"Error":y?p?Object(m.a)(y):Number(Object(m.a)(y)).toFixed(2)+" BNB":""})})},W=function(){var e=Object(l.c)(),n=e.active;e.error;return Object(O.jsx)(s.a,{children:n?Object(O.jsx)(s.a,{style:{padding:"10px",borderRadius:"5px",backgroundColor:"black"},children:Object(O.jsxs)(o.a,{style:{display:"flex",flexDirection:"row",color:"white",fontWeight:"800"},children:[Object(O.jsx)(I,{}),Object(O.jsx)(L,{})]})}):null})},A=function(){var e,n=Object(l.c)(),t=n.connector,r=n.library,p=(n.chainId,n.account),c=n.activate,d=(n.deactivate,n.active,n.error),y=(null==r||null==(e=r.messenger)||e.chainType,a.a.useState()),f=u()(y,2),m=f[0],b=f[1],j=a.a.useState(!0),T=u()(j,2),C=T[0],M=T[1],I=a.a.useState(!1),L=u()(I,2),A=L[0],F=L[1];a.a.useEffect((function(){m&&m===t&&(b(void 0),function(e,n,t){w.methods.balanceOf(e).call().then((function(e){t(e>0),n(!1)}))}(p,M,F))}),[m,t]);var B=function(){var e=Object(l.c)(),n=e.activate,t=e.active,a=Object(i.useState)(!1),s=u()(a,2),o=s[0],r=s[1];return Object(i.useEffect)((function(){h.isAuthorized().then((function(e){e?n(h,void 0,!0).catch((function(){r(!0)})):r(!0)}))}),[]),Object(i.useEffect)((function(){!o&&t&&r(!0)}),[o,t]),o}();return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(l.c)(),t=n.active,a=n.error,s=n.activate;Object(i.useEffect)((function(){var n=window.ethereum;if(n&&n.on&&!t&&!a&&!e){var i=function(){console.log("Handling 'connect' event"),s(h)},o=function(e){console.log("Handling 'chainChanged' event with payload",e),s(h)},r=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&s(h)},u=function(e){console.log("Handling 'networkChanged' event with payload",e),s(h)};return n.on("connect",i),n.on("chainChanged",o),n.on("accountsChanged",r),n.on("networkChanged",u),function(){n.removeListener&&(n.removeListener("connect",i),n.removeListener("chainChanged",o),n.removeListener("accountsChanged",r),n.removeListener("networkChanged",u))}}}),[t,a,e,s])}(!B||!!m),Object(O.jsxs)(O.Fragment,{children:[t===k[x.WalletLink]?Object(O.jsx)(s.a,{style:{position:"fixed",zIndex:-1,display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",minWidth:"100vw",top:0,left:0},children:Object(O.jsx)(s.a,{style:{padding:"20px",borderRadius:"5px",shadowColor:"#171717",shadowOffset:{width:0,height:2},shadowOpacity:.2,shadowRadius:10},children:C?Object(O.jsxs)(s.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)(o.a,{style:{fontSize:"20px",fontWeight:"600"},children:"Checking your NFT keys..."}),Object(O.jsx)(v.a,{size:"large",color:"#000000",style:{marginTop:"20px"}})]}):A?Object(O.jsxs)(s.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)(o.a,{style:{fontSize:"20px",fontWeight:"600",marginBottom:"20px"},children:"Welcome !"}),Object(O.jsx)(o.a,{children:"Creator NFT found"}),Object(O.jsx)(g.a,{style:{padding:"10px",borderRadius:"5px",backgroundColor:"black",marginTop:"20px"},children:Object(O.jsx)(o.a,{style:{color:"white"},children:"Next"})})]}):Object(O.jsx)(s.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:Object(O.jsx)(o.a,{children:"No NFT found..."})})})}):null,Object(O.jsx)(W,{}),Object(O.jsx)("div",{children:t===k[x.WalletLink]?Object(O.jsx)(g.a,{style:{padding:"10px",borderRadius:"5px",backgroundColor:"black",marginLeft:"10px"},onPress:function(){t.close()},children:Object(O.jsx)(o.a,{style:{color:"white",fontWeight:"600"},children:"Disconnect"})}):null}),Object.keys(k).map((function(e){var n=k[e],i=n===m,a=!B||!!m||n===t||!!d;if(t!==k[x.WalletLink])return Object(O.jsxs)(g.a,{style:{padding:"10px",borderRadius:"5px",cursor:a?"unset":"pointer",position:"relative",backgroundColor:"black"},disabled:a,onPress:function(){b(n),c(k[e])},children:[Object(O.jsx)(s.a,{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"},children:i&&Object(O.jsx)("h6",{children:"loading..."})}),Object(O.jsx)(o.a,{style:{color:"white",fontWeight:"600"},children:"Connect"})]},e)}))]})},F=function(){return Object(O.jsxs)(s.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:"10px",marginTop:"10px",position:"absolute",top:0,left:0,width:"calc(100vw - 20px)"},children:[Object(O.jsx)(o.a,{style:{fontSize:"25px",fontWeight:"800"},children:"PICKLE"}),Object(O.jsx)(s.a,{style:{display:"flex",flexDirection:"row"},children:Object(O.jsx)(M,{})})]})},B=function(){return Object(O.jsx)(s.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",minWidth:"100vw"},children:Object(O.jsx)(F,{})})};n.a=function(){return Object(O.jsx)(s.a,{children:Object(O.jsx)(B,{})})}},402:function(e,n,t){e.exports=t(874)},431:function(e,n){},433:function(e,n){},442:function(e,n){},444:function(e,n){},470:function(e,n){},472:function(e,n){},473:function(e,n){},478:function(e,n){},480:function(e,n){},486:function(e,n){},488:function(e,n){},507:function(e,n){},519:function(e,n){},522:function(e,n){},528:function(e,n){},530:function(e,n){},548:function(e,n){},550:function(e,n){},551:function(e,n){},581:function(e,n){},584:function(e,n){},608:function(e,n){},611:function(e,n){},612:function(e,n){},619:function(e,n){},621:function(e,n){},637:function(e,n){},669:function(e,n){},670:function(e,n){},718:function(e,n){},740:function(e,n){},742:function(e,n){},747:function(e,n){},749:function(e,n){},756:function(e,n){},768:function(e,n){},771:function(e,n){}},[[402,1,2]]]);
//# sourceMappingURL=app.06a633b0.chunk.js.map