(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{352:function(n,e,t){"use strict";t.r(e);var r=t(467),a=t(365);for(var o in a)"default"!==o&&function(n){t.d(e,n,function(){return a[n]})}(o);t(404);var i=t(364),d=Object(i.a)(a.default,r.a,r.b,!1,null,null,null);d.options.__file="src/vue/department-header.vue",e.default=d.exports},364:function(n,e,t){"use strict";function r(n,e,t,r,a,o,i,d){var s,c="function"==typeof n?n.options:n;if(e&&(c.render=e,c.staticRenderFns=t,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),i?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),a&&a.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(i)},c._ssrRegister=s):a&&(s=d?function(){a.call(this,this.$root.$options.shadowRoot)}:a),s)if(c.functional){c._injectStyles=s;var p=c.render;c.render=function(n,e){return s.call(e),p(n,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,s):[s]}return{exports:n,options:c}}t.d(e,"a",function(){return r})},365:function(n,e,t){"use strict";t.r(e);var r=t(366),a=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);e.default=a.a},366:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},367:function(n,e,t){var r=t(405);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,t(131).default)("76c3b74e",r,!1,{})},404:function(n,e,t){"use strict";var r=t(367);t.n(r).a},405:function(n,e,t){var r=t(133);(n.exports=t(130)(!1)).push([n.i,'.department-header {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n}\n.department-header .breadcrumbs {\n    width: 100%;\n    background-color: #fff;\n    line-height: 44px;\n    height: 45px;\n    font-family: "Flanders Art Sans Light", "Lucida Sans Unicode", "Lucida Grande", sans-serif;\n    font-weight: bold;\n    font-size: 15px;\n    color: #494949;\n    border-bottom: 1px solid #cbd2da;\n}\n.department-header .breadcrumbs a {\n      color: #494949 !important;\n      text-decoration: none;\n      display: inline-block;\n      vertical-align: middle;\n      position: relative;\n      padding-left: 1.5em;\n      line-height: 45px;\n}\n.department-header .breadcrumbs a + a {\n        margin-left: 0.7em;\n}\n.department-header .breadcrumbs a + a:before {\n          display: block;\n          content: \' \';\n          position: absolute;\n          left: 0;\n          top: 10px;\n          bottom: 10px;\n          width: 1px;\n          background-color: #cbd2da;\n          transform: rotate(-20deg);\n          transform-origin: top left;\n}\n.department-header .breadcrumbs a.logo {\n        background: transparent url('+r(t(406))+") right -1px no-repeat;\n        background-size: contain;\n        height: 27px;\n        width: 28px;\n        padding: 0;\n        margin: 0;\n}\n.department-header .breadcrumbs a.logo + a {\n          margin-left: 0;\n}\n.department-header .breadcrumbs a.logo + a:before {\n            left: -2px;\n            top: 0;\n            bottom: 0;\n}\n.department-header .banner {\n    height: 132px;\n    background: #fff url("+r(t(407))+") center top no-repeat;\n}\n@media (max-width: 845px) {\n.department-header .banner {\n        background: #fff;\n        border-bottom: 1px solid #42796d;\n}\n}\n.department-header .banner .banner-contents {\n      max-width: 1000px;\n      margin: 0 auto;\n      position: relative;\n      z-index: 1;\n      padding-top: 30px;\n}\n@media (max-width: 1040px) {\n.department-header .banner .banner-contents {\n          width: 96%;\n}\n}\n.department-header .banner .banner-contents .logo {\n        display: block;\n        background: transparent url("+r(t(408))+") 0 0 no-repeat;\n        width: 389px;\n        height: 76px;\n}\n",""])},406:function(n,e,t){n.exports=t.p+"img/breadcrumbs-logo.png?fc0b"},407:function(n,e,t){n.exports=t.p+"img/website-header-bg.png?cdc7"},408:function(n,e,t){n.exports=t.p+"img/logo-lne.png?f95e"},467:function(n,e,t){"use strict";var r=function(){var n=this.$createElement,e=this._self._c||n;return e("header",{staticClass:"department-header"},[e("div",{staticClass:"breadcrumbs"},[e("a",{staticClass:"logo",attrs:{href:"https://www.vlaanderen.be/nl"}}),this._v(" "),this._t("default")],2),this._v(" "),this._m(0)])},a=[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"banner"},[e("div",{staticClass:"banner-contents"},[e("a",{staticClass:"logo",attrs:{href:"https://www.lne.be/"}})])])}];r._withStripped=!0,t.d(e,"a",function(){return r}),t.d(e,"b",function(){return a})}}]);