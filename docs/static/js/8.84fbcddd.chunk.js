(this["webpackJsonppacta-playground"]=this["webpackJsonppacta-playground"]||[]).push([[8],{2653:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=(r(2740),r(2741),r(2742),r(2743),r(2745),r(2771)),s=r(1097),i=r(2947),c=r(2953),u=r(2),p=r.n(u);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,o=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t,r,n,o,a,s){try{var i=e[a](s),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){f(a,n,o,s,i,"next",e)}function i(e){f(a,n,o,s,i,"throw",e)}s(void 0)}))}}function g(e){return m.apply(this,arguments)}function m(){return(m=h(o.a.mark((function e(t){var r,n,u,f,g,m,E,w,_,T,I,S,y,N,b,A,O,C;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C=function(){return(C=h(o.a.mark((function e(t){var n,a,u,l,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d(m.values())[0],e.prev=1,e.next=4,i.a.create();case 4:a=e.sent,u=new c.a(a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error connecting to Ledger wallet");case 11:return e.prev=11,(l=new s.Transaction(t,{chain:f(r)})).raw[6]=p.a.Buffer.from([r]),l.raw[7]=p.a.Buffer.from([]),l.raw[8]=p.a.Buffer.from([]),e.next=18,u.signTransaction(n,l.serialize().toString("hex"));case 18:return h=e.sent,l.v=p.a.Buffer.from(h.v,"hex"),l.r=p.a.Buffer.from(h.r,"hex"),l.s=p.a.Buffer.from(h.s,"hex"),e.abrupt("return","0x".concat(l.serialize().toString("hex")));case 25:throw e.prev=25,e.t1=e.catch(11),e.t1;case 28:return e.prev=28,a.close(),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[1,8],[11,25,28,31]])})))).apply(this,arguments)},O=function(e){return C.apply(this,arguments)},A=function(e){return new Promise((function(t,r){w.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,n){e&&r(e);var o=n&&n.result;t(null!=o?new u(o).toString(10):null)}))}))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return new Promise(function(){var r=h(o.a.mark((function r(n,a){var s,u,p,l,d,f,h,v,w,_,I,S,y;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(E||n([null]),!((s=m.size)>0)||t){r.next=4;break}return r.abrupt("return",n(T()));case 4:if(u=[],e>1)for(p=s>1?s:0;p<e+s;p++)l="".concat(g,"/").concat(p,"'/0/0"),d="".concat(g,"/0'/").concat(p),u.push(l,d);else u.push("".concat(g,"/0'/0"));return r.prev=6,r.next=9,i.a.create();case 9:f=r.sent,h=new c.a(f),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(6),a({message:"Error connecting to Ledger wallet"});case 16:v=0,w=u;case 17:if(!(v<w.length)){r.next=33;break}return _=w[v],r.prev=19,r.next=22,h.getAddress(_);case 22:I=r.sent,S=I.address,m.set(S.toLowerCase(),_),r.next=30;break;case 27:return r.prev=27,r.t1=r.catch(19),r.abrupt("return",a({message:"There was a problem trying to connect to your Ledger."}));case 30:v++,r.next=17;break;case 33:y=T(),f.close(),n(y);case 36:case"end":return r.stop()}}),r,null,[[6,13],[19,27]])})));return function(e,t){return r.apply(this,arguments)}}())},N=function(e){var t=d(m.entries()),r=t.findIndex((function(t){return l(t,1)[0]===e}));t.unshift(t.splice(r,1)[0]),m=new Map(t)},y=function(){return(y=h(o.a.mark((function e(){var t,r,n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:5,e.next=3,b(t,!0);case 3:return r=e.sent,e.abrupt("return",Promise.all(r.map((function(e){return new Promise(function(){var t=h(o.a.mark((function t(r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e);case 2:n=t.sent,r({address:e,balance:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},S=function(){return y.apply(this,arguments)},I=function(){return E?T()[0]:void 0},T=function(){return Array.from(m.keys())},_=function(){return E=!0,b(1)},r=t.networkId,n=t.rpcUrl,u=t.BigNumber,f=t.networkName,g=v(r),m=new Map,E=!1,(w=Object(a.a)({getAccounts:function(e){b().then((function(t){return e(null,t)})).catch((function(t){return e(t,null)}))},signTransaction:function(e,t){O(e).then((function(e){return t(null,e)})).catch((function(e){return t(e,null)}))},rpcUrl:n})).getPrimaryAddress=I,w.getAllAccountsAndBalances=S,w.enable=_,w.setPrimaryAccount=N,w.getBalance=A,w.send=w.sendAsync,e.abrupt("return",w);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return"m/44'/60'"}t.default=function(e){var t=e.rpcUrl,r=e.networkId,n=e.preferred,a=e.label,s=e.iconSrc;return{name:a||"Ledger",svg:e.svg||'\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="37" height="37"><style>.st0{fill:currentColor}</style><g id="squares_1_"><path class="st0" d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"/><path class="st0" d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"/></g></svg>\n',iconSrc:s,wallet:function(){var e=h(o.a.mark((function e(n){var a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.BigNumber,s=n.networkName,e.next=3,g({rpcUrl:t,networkId:r,BigNumber:a,networkName:s});case 3:return i=e.sent,e.abrupt("return",{provider:i,interface:{name:"Ledger",connect:i.enable,disconnect:function(){return i.stop()},address:{get:function(){var e=h(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=h(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=h(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.getPrimaryAddress(),e.abrupt("return",t&&i.getBalance(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,preferred:n}}},2732:function(e,t,r){"use strict";const n={},o={},a=(e,t)=>{o[e]=t},s=e=>{const t=function(t,r){Object.assign(this,r),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,n[e]=t,t};r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return p})),r.d(t,"e",(function(){return l}));s("AccountNameRequired"),s("AccountNotSupported"),s("AmountRequired"),s("BluetoothRequired"),s("BtcUnmatchedApp"),s("CantOpenDevice"),s("CashAddrNotSupported"),s("CurrencyNotSupported"),s("DeviceAppVerifyNotSupported"),s("DeviceGenuineSocketEarlyClose"),s("DeviceNotGenuine"),s("DeviceOnDashboardExpected"),s("DeviceOnDashboardUnexpected"),s("DeviceInOSUExpected"),s("DeviceHalted"),s("DeviceNameInvalid"),s("DeviceSocketFail"),s("DeviceSocketNoBulkStatus"),s("DisconnectedDevice"),s("DisconnectedDeviceDuringOperation"),s("EnpointConfig");const i=s("EthAppPleaseEnableContractData"),c=(s("FeeEstimationFailed"),s("FirmwareNotRecognized"),s("HardResetFail"),s("InvalidXRPTag"),s("InvalidAddress"),s("InvalidAddressBecauseDestinationIsAlsoSource"),s("LatestMCUInstalledError"),s("UnknownMCU"),s("LedgerAPIError"),s("LedgerAPIErrorWithMessage"),s("LedgerAPINotAvailable"),s("ManagerAppAlreadyInstalled"),s("ManagerAppRelyOnBTC"),s("ManagerAppDepInstallRequired"),s("ManagerAppDepUninstallRequired"),s("ManagerDeviceLocked"),s("ManagerFirmwareNotEnoughSpace"),s("ManagerNotEnoughSpace"),s("ManagerUninstallBTCDep"),s("NetworkDown"),s("NoAddressesFound"),s("NotEnoughBalance"),s("NotEnoughBalanceToDelegate"),s("NotEnoughBalanceInParentAccount"),s("NotEnoughSpendableBalance"),s("NotEnoughBalanceBecauseDestinationNotCreated"),s("NoAccessToCamera"),s("NotEnoughGas"),s("NotSupportedLegacyAddress"),s("GasLessThanEstimate"),s("PasswordsDontMatch"),s("PasswordIncorrect"),s("RecommendSubAccountsToEmpty"),s("RecommendUndelegation"),s("TimeoutTagged"),s("UnexpectedBootloader"),s("MCUNotGenuineToDashboard"),s("RecipientRequired"),s("UnavailableTezosOriginatedAccountReceive"),s("UnavailableTezosOriginatedAccountSend"),s("UpdateFetchFileFail"),s("UpdateIncorrectHash"),s("UpdateIncorrectSig"),s("UpdateYourApp"),s("UserRefusedDeviceNameChange"),s("UserRefusedAddress"),s("UserRefusedFirmwareUpdate"),s("UserRefusedAllowManager"),s("UserRefusedOnDevice"),s("TransportOpenUserCancelled"),s("TransportInterfaceNotAvailable"),s("TransportRaceCondition"));s("TransportWebUSBGestureRequired"),s("DeviceShouldStayInApp"),s("WebsocketConnectionError"),s("WebsocketConnectionFailed"),s("WrongDeviceForAccount"),s("WrongAppForCurrency"),s("ETHAddressNonEIP"),s("CantScanQRCode"),s("FeeNotLoaded"),s("FeeRequired"),s("FeeTooHigh"),s("SyncError"),s("PairingFailed"),s("GenuineCheckFailed"),s("LedgerAPI4xx"),s("LedgerAPI5xx"),s("FirmwareOrAppUpdateRequired"),s("NoDBPathGiven"),s("DBWrongPassword"),s("DBNotReset");function u(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}u.prototype=new Error,a("TransportError",e=>new u(e.message,e.id));const p={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function l(e){this.name="TransportStatusError";const t=Object.keys(p).find(t=>p[t]===e)||"UNKNOWN_ERROR",r=function(e){switch(e){case 26368:return"Incorrect length";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||t,n=e.toString(16);this.message="Ledger device: ".concat(r," (0x").concat(n,")"),this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}l.prototype=new Error,a("TransportStatusError",e=>new l(e.statusCode))},2771:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(2740),o=r.n(n),a=r(2741),s=r.n(a),i=r(2742),c=r.n(i),u=r(2743),p=r.n(u),l=r(2745),d=r.n(l);function f(e){var t=e.getAccounts,r=e.signTransaction,n=e.rpcUrl,a=new c.a({getAccounts:t,signTransaction:r}),i=new s.a({rpcUrl:n.includes("http")?n:"https://".concat(n)}),u=new o.a;return u.addProvider(new p.a),u.addProvider(new d.a),u.addProvider(a),u.addProvider(i),u.start(),u}},2947:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return h}));var n=r(1),o=r.n(n),a=r(18),s=r(2948),i=r(2951),c=r(2952),u=r(2732);function p(e,t,r){const n=new u.c(t,r);return n.originalError=e,n}const l=e=>e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");function d(t,r,n,o){const a=function(t,r){const n=e.alloc(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]^r[e%r.length];return n}(t,n),i=e.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),u={version:"U2F_V2",keyHandle:l(a.toString("base64")),challenge:l(i.toString("base64")),appId:location.origin};return Object(c.a)("apdu","=> "+t.toString("hex")),Object(s.sign)(u,r/1e3).then(t=>{const r=t.signatureData;if("string"===typeof r){const t=e.from((n=r).replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*n.length%4),"base64");let a;return a=o?t.slice(5):t,Object(c.a)("apdu","<= "+a.toString("hex")),a}throw t;var n})}let f=[];class h extends i.a{static open(e,t=5e3){return Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new h);case 1:case"end":return e.stop()}}),e)})))()}constructor(){super(),this.scrambleKey=void 0,this.unwrap=!0,f.push(this)}exchange(e){var t=this;return Object(a.a)(o.a.mark((function r(){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d(e,t.exchangeTimeout,t.scrambleKey,t.unwrap);case 3:return r.abrupt("return",r.sent);case 6:if(r.prev=6,r.t0=r.catch(0),!("object"===typeof r.t0.metaData)){r.next=14;break}throw 5===r.t0.metaData.code&&(f.forEach(e=>e.emit("disconnect")),f=[]),p(r.t0,"Failed to sign with Ledger device: U2F "+r.t0.metaData.type,"U2F_"+r.t0.metaData.code);case 14:throw r.t0;case 15:case"end":return r.stop()}}),r,null,[[0,6]])})))()}setScrambleKey(t){this.scrambleKey=e.from(t,"ascii")}setUnwrap(e){this.unwrap=e}close(){return Promise.resolve()}}h.isSupported=s.isSupported,h.list=()=>Object(s.isSupported)().then(e=>e?[null]:[]),h.listen=e=>{let t=!1;return Object(s.isSupported)().then(r=>{t||(r?(e.next({type:"add",descriptor:null}),e.complete()):e.error(new u.c("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))}),{unsubscribe:()=>{t=!0}}}}).call(this,r(2).Buffer)},2948:function(e,t,r){"use strict";e.exports=r(2949)},2949:function(e,t,r){"use strict";(function(t){e.exports=u;var n=r(2950),o="undefined"!==typeof navigator&&!!navigator.userAgent,a=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),s=o&&navigator.userAgent.match(/Edge\/1[2345]/),i=null;function c(e){return i||(i=new e((function(e,t){function r(){e({u2f:null,native:!0})}return o?a?r():("undefined"!==typeof window.u2f&&"function"===typeof window.u2f.sign&&e({u2f:window.u2f,native:!0}),s||"http:"===location.protocol||"undefined"===typeof MessageChannel?r():void n.isSupported((function(t){t?e({u2f:n,native:!1}):r()}))):r()}))),i}function u(e){return{isSupported:d.bind(e),ensureSupport:h.bind(e),register:g.bind(e),sign:m.bind(e),ErrorCodes:u.ErrorCodes,ErrorNames:u.ErrorNames}}function p(e,t){var r=null!=t?t.errorCode:1,n=u.ErrorNames[""+r],o=new Error(e);return o.metaData={type:n,code:r},o}function l(e,t){var r={};return r.promise=new e((function(e,n){r.resolve=e,r.reject=n,t.then(e,n)})),r.promise.cancel=function(t,n){c(e).then((function(e){n&&!e.native&&e.u2f.disconnect(),r.reject(p(t,{errorCode:-1}))}))},r}function d(){return c(this).then((function(e){return!!e.u2f}))}function f(e){if(!e.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https");throw new Error("U2F not supported")}}function h(){return c(this).then(f)}function g(e,t,r){var n=this;return Array.isArray(e)||(e=[e]),"number"===typeof t&&"undefined"===typeof r&&(r=t,t=null),t||(t=[]),l(n,c(n).then((function(o){f(o);var a=o.native,s=o.u2f;return new n((function(n,o){if(a){var i=e[0].appId;s.register(i,e,t,(function(e){e.errorCode?o(p("Registration failed",e)):(delete e.errorCode,n(e))}),r)}else s.register(e,t,(function(e,t){e?o(e):t.errorCode?o(p("Registration failed",t)):n(t)}),r)}))}))).promise}function m(e,t){var r=this;return Array.isArray(e)||(e=[e]),l(r,c(r).then((function(n){f(n);var o=n.native,a=n.u2f;return new r((function(r,n){if(o){var s=e[0].appId,i=e[0].challenge;a.sign(s,i,e,(function(e){e.errorCode?n(p("Sign failed",e)):(delete e.errorCode,r(e))}),t)}else a.sign(e,(function(e,t){e?n(e):t.errorCode?n(p("Sign failed",t)):r(t)}),t)}))}))).promise}function v(e){u[e]=function(){if(!t.Promise)throw new Error("The platform doesn't natively support promises");var r=[].slice.call(arguments);return u(t.Promise)[e].apply(null,r)}}u.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},u.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},v("isSupported"),v("ensureSupport"),v("register"),v("sign")}).call(this,r(15))},2950:function(e,t,r){"use strict";var n=n||{};e.exports=n,n.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",n.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},n.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},n.Request,n.Response,n.Error,n.SignRequest,n.SignResponse,n.RegisterRequest,n.RegisterResponse,n.disconnect=function(){n.port_&&n.port_.port_&&(n.port_.port_.disconnect(),n.port_=null)},n.getMessagePort=function(e){if("undefined"!=typeof chrome&&chrome.runtime){var t={type:n.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]};chrome.runtime.sendMessage(n.EXTENSION_ID,t,(function(){chrome.runtime.lastError?n.getIframePort_(e):n.getChromeRuntimePort_(e)}))}else n.getIframePort_(e)},n.getChromeRuntimePort_=function(e){var t=chrome.runtime.connect(n.EXTENSION_ID,{includeTlsChannelId:!0});setTimeout((function(){e(null,new n.WrappedChromeRuntimePort_(t))}),0)},n.WrappedChromeRuntimePort_=function(e){this.port_=e},n.WrappedChromeRuntimePort_.prototype.postMessage=function(e){this.port_.postMessage(e)},n.WrappedChromeRuntimePort_.prototype.addEventListener=function(e,t){var r=e.toLowerCase();"message"==r||"onmessage"==r?this.port_.onMessage.addListener((function(e){t({data:e})})):console.error("WrappedChromeRuntimePort only supports onMessage")},n.getIframePort_=function(e){var t="chrome-extension://"+n.EXTENSION_ID,r=document.createElement("iframe");r.src=t+"/u2f-comms.html",r.setAttribute("style","display:none"),document.body.appendChild(r);var o=!1,a=new MessageChannel;a.port1.addEventListener("message",(function t(r){"ready"==r.data?(a.port1.removeEventListener("message",t),o||(o=!0,e(null,a.port1))):console.error('First event on iframe port was not "ready"')})),a.port1.start(),r.addEventListener("load",(function(){r.contentWindow.postMessage("init",t,[a.port2])})),setTimeout((function(){o||(o=!0,e(new Error("IFrame extension not supported")))}),200)},n.EXTENSION_TIMEOUT_SEC=30,n.port_=null,n.waitingForPort_=[],n.reqCounter_=0,n.callbackMap_={},n.getPortSingleton_=function(e){n.port_?e(null,n.port_):(0==n.waitingForPort_.length&&n.getMessagePort((function(e,t){for(e||(n.port_=t,n.port_.addEventListener("message",n.responseHandler_));n.waitingForPort_.length;)n.waitingForPort_.shift()(e,t)})),n.waitingForPort_.push(e))},n.responseHandler_=function(e){var t=e.data,r=t.requestId;if(r&&n.callbackMap_[r]){var o=n.callbackMap_[r];delete n.callbackMap_[r],o(null,t.responseData)}else console.error("Unknown or missing requestId in response.")},n.isSupported=function(e){n.getPortSingleton_((function(t,r){e(!t)}))},n.sign=function(e,t,r){n.getPortSingleton_((function(o,a){if(o)return t(o);var s=++n.reqCounter_;n.callbackMap_[s]=t;var i={type:n.MessageTypes.U2F_SIGN_REQUEST,signRequests:e,timeoutSeconds:"undefined"!==typeof r?r:n.EXTENSION_TIMEOUT_SEC,requestId:s};a.postMessage(i)}))},n.register=function(e,t,r,o){n.getPortSingleton_((function(a,s){if(a)return r(a);var i=++n.reqCounter_;n.callbackMap_[i]=r;var c={type:n.MessageTypes.U2F_REGISTER_REQUEST,signRequests:t,registerRequests:e,timeoutSeconds:"undefined"!==typeof o?o:n.EXTENSION_TIMEOUT_SEC,requestId:i};s.postMessage(c)}))}},2951:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return u}));var n=r(1),o=r.n(n),a=r(18),s=r(16),i=r.n(s),c=r(2732);class u{constructor(){var t=this;this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this._events=new i.a,this.send=function(){var r=Object(a.a)(o.a.mark((function r(n,a,s,i,u=e.alloc(0),p=[c.b.OK]){var l,d;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(u.length>=256)){r.next=2;break}throw new c.c("data.length exceed 256 bytes limit. Got: "+u.length,"DataLengthTooBig");case 2:return r.next=4,t.exchange(e.concat([e.from([n,a,s,i]),e.from([u.length]),u]));case 4:if(l=r.sent,d=l.readUInt16BE(l.length-2),p.some(e=>e===d)){r.next=8;break}throw new c.e(d);case 8:return r.abrupt("return",l);case 9:case"end":return r.stop()}}),r)})));return function(e,t,n,o){return r.apply(this,arguments)}}(),this.exchangeBusyPromise=void 0,this.exchangeAtomicImpl=function(){var e=Object(a.a)(o.a.mark((function e(r){var n,a,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.exchangeBusyPromise){e.next=2;break}throw new c.d("An action was already pending on the Ledger device. Please deny or reconnect.");case 2:return a=new Promise(e=>{n=e}),t.exchangeBusyPromise=a,s=!1,i=setTimeout(()=>{s=!0,t.emit("unresponsive")},t.unresponsiveTimeout),e.prev=6,e.next=9,r();case 9:return u=e.sent,s&&t.emit("responsive"),e.abrupt("return",u);case 12:return e.prev=12,clearTimeout(i),n&&n(),t.exchangeBusyPromise=null,e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[6,,12,17]])})));return function(t){return e.apply(this,arguments)}}(),this._appAPIlock=null}exchange(e){throw new Error("exchange not implemented")}setScrambleKey(e){}close(){return Promise.resolve()}on(e,t){this._events.on(e,t)}off(e,t){this._events.removeListener(e,t)}emit(e,...t){this._events.emit(e,...t)}setDebugMode(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}setExchangeTimeout(e){this.exchangeTimeout=e}setExchangeUnresponsiveTimeout(e){this.unresponsiveTimeout=e}static create(e=3e3,t){return new Promise((r,n)=>{let o=!1;const a=this.listen({next:t=>{o=!0,a&&a.unsubscribe(),s&&clearTimeout(s),this.open(t.descriptor,e).then(r,n)},error:e=>{s&&clearTimeout(s),n(e)},complete:()=>{s&&clearTimeout(s),o||n(new c.c(this.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),s=t?setTimeout(()=>{a.unsubscribe(),n(new c.c(this.ErrorMessage_ListenTimeout,"ListenTimeout"))},t):null})}decorateAppAPIMethods(e,t,r){var n=!0,o=!1,a=void 0;try{for(var s,i=t[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){let t=s.value;e[t]=this.decorateAppAPIMethod(t,e[t],e,r)}}catch(c){o=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}}decorateAppAPIMethod(e,t,r,n){var s=this;return function(){var i=Object(a.a)(o.a.mark((function a(...i){var u;return o.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(u=s._appAPIlock)){o.next=3;break}return o.abrupt("return",Promise.reject(new c.c("Ledger Device is busy (lock "+u+")","TransportLocked")));case 3:return o.prev=3,s._appAPIlock=e,s.setScrambleKey(n),o.next=8,t.apply(r,i);case 8:return o.abrupt("return",o.sent);case 9:return o.prev=9,s._appAPIlock=null,o.finish(9);case 12:case"end":return o.stop()}}),a,null,[[3,,9,12]])})));return function(){return i.apply(this,arguments)}}()}}u.isSupported=void 0,u.list=void 0,u.listen=void 0,u.open=void 0,u.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",u.ErrorMessage_NoDeviceFound="No Ledger device found"}).call(this,r(2).Buffer)},2952:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));let n=0;const o=[],a=(e,t,r)=>{const a={type:e,id:String(++n),date:new Date};t&&(a.message=t),r&&(a.data=r),function(e){for(let r=0;r<o.length;r++)try{o[r](e)}catch(t){console.error(t)}}(a)};e.__ledgerLogsListen=e=>(o.push(e),()=>{const t=o.indexOf(e);-1!==t&&(o[t]=o[o.length-1],o.pop())})}).call(this,r(15))},2953:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a}));var n=r(2954),o=r(2732);class a{constructor(e,t="w0w"){this.transport=void 0,this.transport=e,e.decorateAppAPIMethods(this,["getAddress","provideERC20TokenInformation","signTransaction","signPersonalMessage","getAppConfiguration"],t)}getAddress(t,r,o){let a=Object(n.b)(t),s=e.alloc(1+4*a.length);return s[0]=a.length,a.forEach((e,t)=>{s.writeUInt32BE(e,1+4*t)}),this.transport.send(224,2,r?1:0,o?1:0,s).then(e=>{let t={},r=e[0],n=e[1+r];return t.publicKey=e.slice(1,1+r).toString("hex"),t.address="0x"+e.slice(1+r+1,1+r+1+n).toString("ascii"),o&&(t.chainCode=e.slice(1+r+1+n,1+r+1+n+32).toString("hex")),t})}provideERC20TokenInformation({data:e}){return this.transport.send(224,10,0,0,e).then(()=>!0,e=>{if(e&&27904===e.statusCode)return!1;throw e})}signTransaction(t,r){let a,s=Object(n.b)(t),i=0,c=e.from(r,"hex"),u=[];for(;i!==c.length;){let t=0===i?149-4*s.length:150,r=i+t>c.length?c.length-i:t,n=e.alloc(0===i?1+4*s.length+r:r);0===i?(n[0]=s.length,s.forEach((e,t)=>{n.writeUInt32BE(e,1+4*t)}),c.copy(n,1+4*s.length,i,i+r)):c.copy(n,0,i,i+r),u.push(n),i+=r}return Object(n.a)(u,(e,t)=>this.transport.send(224,4,0===t?0:128,0,e).then(e=>{a=e})).then(()=>({v:a.slice(0,1).toString("hex"),r:a.slice(1,33).toString("hex"),s:a.slice(33,65).toString("hex")}),e=>{throw(e=>e&&27264===e.statusCode?new o.a("Please enable Contract data on the Ethereum app Settings"):e)(e)})}getAppConfiguration(){return this.transport.send(224,6,0,0).then(e=>{let t={};return t.arbitraryDataEnabled=1&e[0],t.version=e[1]+"."+e[2]+"."+e[3],t})}signPersonalMessage(t,r){let o,a=Object(n.b)(t),s=0,i=e.from(r,"hex"),c=[];for(;s!==i.length;){let t=0===s?149-4*a.length-4:150,r=s+t>i.length?i.length-s:t,n=e.alloc(0===s?1+4*a.length+4+r:r);0===s?(n[0]=a.length,a.forEach((e,t)=>{n.writeUInt32BE(e,1+4*t)}),n.writeUInt32BE(i.length,1+4*a.length),i.copy(n,1+4*a.length+4,s,s+r)):i.copy(n,0,s,s+r),c.push(n),s+=r}return Object(n.a)(c,(e,t)=>this.transport.send(224,8,0===t?0:128,0,e).then(e=>{o=e})).then(()=>({v:o[0],r:o.slice(1,33).toString("hex"),s:o.slice(33,65).toString("hex")}))}}}).call(this,r(2).Buffer)},2954:function(e,t,r){"use strict";function n(e){let t=[];return e.split("/").forEach(e=>{let r=parseInt(e,10);isNaN(r)||(e.length>1&&"'"===e[e.length-1]&&(r+=2147483648),t.push(r))}),t}function o(e,t){return Promise.resolve().then(()=>function e(r,n,o){return r>=n.length?o:t(n[r],r).then((function(t){return o.push(t),e(r+1,n,o)}))}(0,e,[]))}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);