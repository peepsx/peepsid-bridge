(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c1f7ece"],{8517:function(t,e,a){var n=a("cd913");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("3d640fa5",n,!0,{sourceMap:!1,shadowMode:!1})},"92b9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:{logos:!!t.app.img}},[t.app.img?a("figure",{staticClass:"logo"},[t.app.img?a("img",{attrs:{src:t.app.img}}):a("span",[t._v(t._s(t.app.name))])]):t._e()])},r=[],s={props:["app"]},c=s,o=a("2877"),i=Object(o["a"])(c,n,r,!1,null,null,null);e["a"]=i.exports},cd913:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"",""])},daa4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"get-public-key"},[a("section",{staticClass:"content"},[a("section",{staticClass:"app-details"},[a("PopOutLogos",{attrs:{app:t.app}}),a("figure",{staticClass:"action"},[t._v("View Public Key")]),a("figure",{staticClass:"app-name"},[t._v("via "),a("b",[t._v(t._s(t.app.name))])]),a("figure",{staticClass:"text"},[t._v("Your public keys are safe for others to see.")])],1)]),a("section",{staticClass:"popout-buttons"},[a("Button",{attrs:{text:"Deny"},nativeOn:{click:function(e){return t.closer(e)}}}),a("Button",{attrs:{primary:"1",text:"Allow"},nativeOn:{click:function(e){return t.accept(e)}}})],1)])},r=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("6762"),a("2fdb"),a("7514"),a("bd86")),c=(a("118f"),a("2f62")),o=a("92b9");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u={components:{PopOutLogos:o["a"]},props:["popup","closer"],computed:p({},Object(c["d"])(["scatter"]),{payload:function(){return this.popup.payload()},blockchain:function(){return this.payload.blockchain},app:function(){return this.popup.data.props.appData}}),methods:{accept:function(){var t=this,e=this.scatter.keychain.keypairs.find(function(e){return e.blockchains.includes(t.blockchain)});this.$emit("returned",{keypair:e,isNew:!1})}}},l=u,f=(a("dedf"),a("2877")),b=Object(f["a"])(l,n,r,!1,null,"200a721e",null);e["default"]=b.exports},dedf:function(t,e,a){"use strict";var n=a("8517"),r=a.n(n);r.a}}]);