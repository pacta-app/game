(this["webpackJsonppacta-playground"]=this["webpackJsonppacta-playground"]||[]).push([[20],{2656:function(n,e,t){"use strict";t.r(e);t(313);var a=t(590);t(209),t(417),t(418);e.default=function(n){Object(a.d)({name:"balance options",value:n,type:"object"});var e=n.minimumBalance;return Object(a.d)({name:"minimumBalance",value:e,type:"string"}),function(n){var t=n.balance,a=n.BigNumber;if(a(t).lt(a(e||0)))return{heading:"Get Some ETH",description:"Your current account has less than the necessary minimum balance of ".concat(a(e).div(a("1000000000000000000")).toString(10)," ETH."),eventCode:"nsfFail",icon:'\n        <svg height="18" viewBox="0 0 429 695" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="m0 394 213 126.228516 214-126.228516-214 301z"/><path d="m0 353.962264 213.5-353.962264 213.5 353.962264-213.5 126.037736z"/></g></svg>\n        '}}}}}]);