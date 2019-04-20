(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{362:function(t,e,n){"use strict";n.r(e);var i=n(687),o=n(498);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n(640);var a=n(383),s=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/vue/ld-subject.vue",e.default=s.exports},363:function(t,e,n){"use strict";n.r(e);var i=n(688),o=n(501);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n(642);var a=n(383),s=n(445),l=n.n(s),c=n(692),u=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);l()(u,{VIcon:c.a}),u.options.__file="src/vue/ld-predicate.vue",e.default=u.exports},364:function(t,e,n){"use strict";n.r(e);var i=n(689),o=n(505);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n(644);var a=n(383),s=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/vue/ld-object.vue",e.default=s.exports},365:function(t,e,n){"use strict";n.r(e);var i=n(675),o=n(508);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n(646);var a=n(383),s=n(445),l=n.n(s),c=n(692),u=Object(a.a)(o.default,i.a,i.b,!1,null,"2430e7b4",null);l()(u,{VIcon:c.a}),u.options.__file="src/vue/ld-taxonomy.vue",e.default=u.exports},446:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(503),r=(i=o)&&i.__esModule?i:{default:i};e.default={mixins:[r.default],props:{endpoint:String,graph:String},data:function(){return{loading:0,requests:{},offset:null,loadedOffset:null,rows:[],rowCount:null,pageSize:10,uniqueField:null,sortField:null,sortDirection:"ASC",queryTemplate:"",countQueryTemplate:"",search:"",fields:[]}},computed:{from:function(){return this.graph?"FROM <"+this.graph+">":""},filters:function(){if(!this.search.trim().length||!this.searchFields.trim().length)return"";var t=this.searchFields.split(/[,\s]+/),e=this.search.split(/[\s]+/).filter(function(t){return!t.match(/^\s*$/)}).map(function(e){return"("+t.map(function(t){return(e=e.replace(/["';<>]/,"")).length?"regex(str(?"+t+'), "'+e.replace(/["';<>]/,"")+'", "i")':""}).join(" || ")+")"});return"FILTER("+e.join(" ) && ( ")+")"},page:function(){return 1+Math.ceil(this.offset/this.pageSize)},pageCount:function(){return Math.ceil(this.rowCount/this.pageSize)},prevOffset:function(){return this.rowCount?Math.max(0,this.offset-this.pageSize):null},nextOffset:function(){if(!this.rowCount)return null;var t=this.offset+this.pageSize;return t>this.rowCount-1&&(t=this.offset),t}},watch:{rows:function(t){t&&this.countRows()},offset:_.debounce(function(t){null!==t&&this.fetchRows()},500),sortField:function(){this.offset=0,this.fetchRows()},sortDirection:function(){this.offset=0,this.fetchRows()},search:_.debounce(function(t){this.offset=this.rowCount=0,this.fetchRows()},500)},methods:{renderQueryTemplate:function(t){var e=void 0;do{e=!0;var n=t.match(/(%([^%]+)%)/);if(n){var i=n[1],o=n[2];if(void 0===this[o]||null===this[o]){t=null,console.log("undefined query template placeholder",o);break}e=!1,t=t.replace(i,this[o])}}while(!e);return t},fetchRows:function(){var t=this,e=this.renderQueryTemplate(this.queryTemplate||"");if(!e)return setTimeout(this.fetchRows,500);this.loading++,this.runQuery(e,function(e){t.fields=e.vars.map(function(t){return{name:t,label:t}}),t.rows=e.rows.filter(t.removeDuplicates),t.loadedOffset=t.offset,setTimeout(function(){return t.loading--},250)})},removeDuplicates:function(t,e,n){if(this.uniqueField&&e&&n[e-1][this.uniqueField]&&n[e-1][this.uniqueField].value===n[e][this.uniqueField].value)return!1;return!0},countRows:function(){var t=this,e=this.renderQueryTemplate(this.countQueryTemplate||"");if(!e)return setTimeout(this.countRows,500);this.runQuery(e,function(e){t.rowCount=e.rows.length?parseInt(e.rows[0].rowCount.value):null})},runQuery:function(t,e){var n=this;if(this.getCachedQueryResults(t))return e(this.getCachedQueryResults(t));var i=t;this.$http.post(this.endpoint,{query:t},{credentials:!0,emulateJSON:!0,headers:{Accept:"application/sparql-results+json, application/json, */*"},before:function(t){this.requests[i]&&this.requests[i].abort(),this.requests[i]=t}}).then(function(o){delete n.requests[i],n.setCachedQueryResults(t,{vars:o.body.head.vars,rows:o.body.results.bindings}),e(n.getCachedQueryResults(t))},function(t){e({vars:[],rows:[]})})},getFieldLabel:function(t,e){return e["_"+t+"Label"]?e["_"+t+"Label"].value:e[t].value.replace(/^.*[\/#]([^\/#]+)$/,"$1")}}}},498:function(t,e,n){"use strict";n.r(e);var i=n(499),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},499:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["about"],data:function(){return{}},computed:{subject:function(){return this.about||document.querySelector("body").getAttribute("about")||location.href}}}},500:function(t,e,n){var i=n(641);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(131).default)("8c94537a",i,!1,{})},501:function(t,e,n){"use strict";n.r(e);var i=n(502),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},502:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(446),r=(i=o)&&i.__esModule?i:{default:i};e.default={mixins:[r.default],props:{about:String,inbound:Boolean},data:function(){return{subject:null,isInBode:!1,labelMoved:!1,offset:0,pageSize:8,searchFields:"uri,titel",sortFields:"titel",sortField:"titel",sortString:"ASC(?titel)",uniqueField:"uri",taxonomyProps:["http://www.w3.org/2004/02/skos/core#hasTopConcept","http://www.w3.org/2004/02/skos/core#topConceptOf","http://www.w3.org/2004/02/skos/core#inScheme","http://www.w3.org/2004/02/skos/core#broader","http://www.w3.org/2004/02/skos/core#narrower"]}},computed:{resourceTitle:function(){return document.querySelector&&document.querySelector("h1")?document.querySelector("h1").innerText:""},desktopWidth:function(){return this.isInBode?100:50},predicate:function(){return this.about},sortOptions:function(){var t=[];return this.sortFields.split(/[,\s]+/).forEach(function(e){t.push({value:"ASC(?"+e+")",label:"↑ "+(e.charAt(0).toUpperCase()+e.slice(1))}),t.push({value:"DESC(?"+e+")",label:"↓ "+(e.charAt(0).toUpperCase()+e.slice(1))})}),t},isTaxonomy:function(){return this.predicate&&!this.inbound&&-1!==this.taxonomyProps.indexOf(this.predicate)}},mounted:function(){this.extractSubject(),this.moveLabel(),this.checkBnodeContext()},watch:{labelMoved:function(){this.endpoint&&(this.clearObjects(),this.isTaxonomy||(this.fetchQueryTemplate(),this.fetchCountQueryTemplate(),this.fetchRows()))},sortString:function(t){var e=t?t.match(/(ASC|DESC)\(\?([^)]+)/):null;e&&(this.sortField=e[2],this.sortDirection=e[1])}},methods:{extractSubject:function(){if(!this.$el||!this.$el.closest||!this.$el.closest(".ld-subject"))return setTimeout(this.extractSubject,250);this.subject=this.$el.closest(".ld-subject[about]").getAttribute("about")},moveLabel:function(){if(!this.$el||!this.$el.querySelector)return setTimeout(this.moveLabel,100);var t=this.$el.querySelector(".label-container");if(!t)return setTimeout(this.moveLabel,100);var e=this.$el.querySelector(".objects > .label");e&&t.appendChild(e),this.labelMoved=!0},checkBnodeContext:function(){if(!this.$el||!this.$el.querySelector)return setTimeout(this.checkBnodeContext,100);this.$el.closest(".ld-object.bnode")&&(this.isInBode=!0)},fetchQueryTemplate:function(){var t=this,e=this.inbound?"/queries/objects-inbound.rq":"/queries/objects-outbound.rq";this.$http.get(e).then(function(e){t.queryTemplate=e.body})},fetchCountQueryTemplate:function(){var t=this,e=this.inbound?"/queries/objects-inbound-count.rq":"/queries/objects-outbound-count.rq";this.$http.get(e).then(function(e){t.countQueryTemplate=e.body})},clearObjects:function(){if(!this.$el||!this.$el.querySelector)return setTimeout(this.clearObjects,100);this.$el.querySelectorAll(".objects > .ld-object").forEach(function(t){t.parentNode.removeChild(t)})}}}},503:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){this.initQueryCache()},methods:{initQueryCache:function(){this.$store.state.queryCache||this.$store.registerModule("queryCache",{namespaced:!0,state:{cached:{}},mutations:{set:function(t,e){e.subField?t[e.field][e.subField]=e.value:t[e.field]=e.value}}})},getCachedQueryResults:function(t){return this.$store.state.queryCache.cached[t]||null},setCachedQueryResults:function(t,e){this.$store.commit("queryCache/set",{field:"cached",subField:t,value:e})}}}},504:function(t,e,n){var i=n(643);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(131).default)("840811ba",i,!1,{})},505:function(t,e,n){"use strict";n.r(e);var i=n(506),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},506:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{bnode:Boolean},data:function(){return{}}}},507:function(t,e,n){var i=n(645);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(131).default)("3bca11f1",i,!1,{})},508:function(t,e,n){"use strict";n.r(e);var i=n(509),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},509:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(446),r=(i=o)&&i.__esModule?i:{default:i};e.default={mixins:[r.default],props:["subject","predicate","parent","chain"],data:function(){return{uniqueField:"uri",expanded:{},conceptChain:this.chain||null,parentResource:this.parent||null}},mounted:function(){this.fetchQueryTemplate(),this.$parentCollapsible=this.$el.closest(".ld-collapsible")},watch:{queryTemplate:function(){this.conceptChain?this.fetchConcepts():this.fetchChain()},loading:function(){this.$parentCollapsible&&this.$parentCollapsible.component.$emit("contentChanged")}},methods:{fetchQueryTemplate:function(){var t=this;if(!this.subject)return setTimeout(this.fetchQueryTemplate,500);var e="/queries/taxonomy-down.rq";this.conceptChain||(this.predicate.match(/#(narrower|hasTopConcept)/)?(this.conceptChain=[this.subject],this.parentResource=this.subject):e="/queries/taxonomy-up.rq"),this.$http.get(e).then(function(e){t.queryTemplate=e.body})},countRows:function(){},fetchRows:function(){},fetchChain:function(){var t=this,e=this.renderQueryTemplate(this.queryTemplate||"");if(!e)return setTimeout(this.fetchChain,500);this.loading++,this.runQuery(e,function(e){var n=e.rows.filter(t.removeDuplicates);t.conceptChain=n.filter(function(t){return"http://www.w3.org/2004/02/skos/core#Concept"===t.type.value}).map(function(t){return t.uri.value});var i=n.filter(function(t){return"http://www.w3.org/2004/02/skos/core#ConceptScheme"===t.type.value});t.predicate.match(/#(topConceptOf|inScheme)$/)||i.forEach(function(e){t.$set(t.expanded,e.uri.value,!0)}),t.rows=i,setTimeout(function(){return t.loading--},250)})},fetchConcepts:function(){var t=this,e=this.renderQueryTemplate(this.queryTemplate||"");if(!e)return setTimeout(this.fetchConcepts,500);this.loading++,this.runQuery(e,function(e){var n=e.rows.filter(t.removeDuplicates);n.forEach(function(e){-1!==t.conceptChain.indexOf(e.uri.value)&&e.uri.value!==t.subject&&t.$set(t.expanded,e.uri.value,!0)}),n.length||t.$el.closest("li").classList.add("empty"),t.rows=n,setTimeout(function(){return t.loading--},250)})},toggle:function(t){var e=this;this.$set(this.expanded,t,!this.expanded[t]),this.$parentCollapsible&&this.$nextTick(function(){e.$parentCollapsible.component.$emit("contentChanged")})}}}},510:function(t,e,n){var i=n(647);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(131).default)("4066c1fe",i,!1,{})},640:function(t,e,n){"use strict";var i=n(500);n.n(i).a},641:function(t,e,n){(t.exports=n(130)(!1)).push([t.i,".ld-subject {\n  padding-top: 32px;\n  font-size: 16px;\n}\nhr + .ld-subject {\n  padding-top: 16px;\n}\n.ld-card-content .ld-subject:first-child {\n  padding-top: 16px;\n}\n",""])},642:function(t,e,n){"use strict";var i=n(504);n.n(i).a},643:function(t,e,n){(t.exports=n(130)(!1)).push([t.i,".ld-predicate-container .ld-predicate {\n  background-color: #fff;\n  border-top: 2px solid #4da692;\n}\n.ld-predicate-container .ld-predicate .predicate-info {\n    display: block;\n    background-color: #4da692;\n    color: #fff;\n    text-align: right;\n    line-height: 24px;\n    padding: 4px 12px 6px 12px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-decoration: none;\n    text-overflow: ellipsis;\n}\n.ld-predicate-container .ld-predicate .predicate-info.inbound {\n      text-align: left;\n}\n@media (max-width: 599px) {\n.ld-predicate-container .ld-predicate .predicate-info {\n        text-align: left;\n}\n}\n.ld-predicate-container .ld-predicate .predicate-info .label {\n      text-transform: capitalize;\n      color: #fff !important;\n}\n.ld-predicate-container .ld-predicate .predicate-info .label:hover {\n        text-decoration: none !important;\n}\n.ld-predicate-container .ld-predicate .predicate-info .subject-label {\n      opacity: 0.75;\n}\n.ld-predicate-container .ld-predicate .objects {\n    padding-bottom: 0 !important;\n    overflow: auto;\n    max-height: 400px;\n    transition: opacity 0.5s;\n    opacity: 1;\n}\n.ld-predicate-container .ld-predicate .controls {\n    border-top: 1px solid #cbd2da;\n    padding: 8px 0;\n}\n.ld-predicate-container .ld-predicate .controls .flex-item {\n      padding: 0 4px !important;\n}\n.ld-predicate-container .ld-predicate .controls .flex-item:first-child {\n        padding-left: 8px !important;\n}\n.ld-predicate-container .ld-predicate .controls .flex-item:last-child {\n        padding-right: 8px !important;\n}\n.ld-predicate-container .ld-predicate .controls .sorter select {\n      display: block;\n      line-height: 24px;\n      padding: 0 4px;\n      font-size: 13px;\n      height: 28px;\n      width: 100%;\n      -webkit-appearance: none;\n      border: 1px solid #ccc;\n      border-radius: 0;\n}\n.ld-predicate-container .ld-predicate .controls .filter input {\n      display: block;\n      line-height: 24px;\n      padding: 0 4px;\n      font-size: 13px;\n      width: 100%;\n      height: 28px;\n}\n.ld-predicate-container .ld-predicate .controls .pagination {\n      text-align: right;\n      display: block;\n}\n.ld-predicate-container .ld-predicate .controls .pagination .info {\n        display: inline-block;\n        line-height: 30px;\n        padding: 0 4px 0;\n        vertical-align: top;\n}\n.ld-predicate-container .ld-predicate .controls .pagination .buttons {\n        display: inline-block;\n}\n.ld-predicate-container .ld-predicate .controls .pagination .buttons button {\n          cursor: pointer;\n          background-color: #4da692;\n          border: none;\n          height: 28px;\n          width: 28px;\n}\n.ld-predicate-container .ld-predicate .controls .pagination .buttons button.disabled {\n            cursor: default;\n            background-color: #f5f5f5;\n}\n.ld-predicate-container .ld-predicate .controls .pagination .buttons button.disabled:hover, .ld-predicate-container .ld-predicate .controls .pagination .buttons button.disabled:focus, .ld-predicate-container .ld-predicate .controls .pagination .buttons button.disabled::-moz-focus-inner {\n              cursor: default;\n              background-color: #f5f5f5;\n}\n.ld-predicate-container .ld-predicate .controls .pagination .buttons button:hover, .ld-predicate-container .ld-predicate .controls .pagination .buttons button:focus, .ld-predicate-container .ld-predicate .controls .pagination .buttons button::-moz-focus-inner {\n            background-color: #42796d;\n            outline: 0;\n            border: 0;\n}\n.ld-predicate-container .ld-predicate .controls .pagination .buttons button .v-icon {\n            color: #fff;\n}\n.ld-predicate-container.is-in-bnode {\n  margin-top: 4px;\n}\n.ld-predicate-container.is-in-bnode:first-child {\n    margin-top: 0;\n}\n.ld-predicate-container.inbound .label-container {\n  -order: 1;\n}\n.ld-predicate-container.loading .objects {\n  opacity: 0.1;\n}\n",""])},644:function(t,e,n){"use strict";var i=n(507);n.n(i).a},645:function(t,e,n){(t.exports=n(130)(!1)).push([t.i,".ld-object {\n  display: block;\n  line-height: 24px;\n  margin: 0 12px;\n  padding: 4px 0 6px 0;\n  overflow: hidden;\n  text-decoration: none;\n  text-overflow: ellipsis;\n}\n.ld-object + .ld-object {\n    border-top: 1px solid #cbd2da;\n}\n.ld-object.bnode {\n    overflow: visible;\n}\n.ld-object.bnode > .ld-card {\n      padding: 8px;\n}\n",""])},646:function(t,e,n){"use strict";var i=n(510);n.n(i).a},647:function(t,e,n){(t.exports=n(130)(!1)).push([t.i,".ld-taxonomy[data-v-2430e7b4] {\n  list-style-type: none;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.ld-taxonomy li[data-v-2430e7b4] {\n    line-height: 24px !important;\n    margin: 0 !important;\n    padding: 4px 0 6px 4px;\n    overflow: hidden;\n    text-decoration: none;\n    text-overflow: ellipsis;\n}\n.ld-taxonomy li .v-icon[data-v-2430e7b4] {\n      vertical-align: text-top;\n      font-size: 22px;\n      transition: transform 0.5s, opacity 1s;\n}\n.ld-taxonomy li .empty-arrow[data-v-2430e7b4] {\n      width: 0;\n      overflow: hidden;\n      opacity: 0;\n      font-size: 20px;\n}\n.ld-taxonomy li.empty .toggle-arrow[data-v-2430e7b4] {\n      display: none;\n}\n.ld-taxonomy li.empty .empty-arrow[data-v-2430e7b4] {\n      width: 25px;\n      padding: 1px 1px 1px 4px;\n      display: inline-flex;\n      opacity: 1;\n}\n.ld-taxonomy li.is-subject > a[data-v-2430e7b4] {\n      color: #666 !important;\n}\n.ld-taxonomy li ul[data-v-2430e7b4] {\n      padding-left: 16px !important;\n}\n.ld-taxonomy li ul li[data-v-2430e7b4] {\n        line-height: 20px !important;\n        padding: 2px 0 3px 4px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n}\n.ld-taxonomy li.expanded > .toggle-arrow[data-v-2430e7b4] {\n      transform: rotate(90deg);\n}\n",""])},675:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"ld-taxonomy"},t._l(t.rows,function(e,i){return n("li",{key:i,class:{expanded:t.expanded[e.uri.value],"is-subject":t.subject===e.uri.value}},[n("v-icon",{staticClass:"empty-arrow",attrs:{title:"last entry"}},[t._v("last_page")]),t._v(" "),n("v-icon",{staticClass:"toggle-arrow",on:{click:function(n){return t.toggle(e.uri.value)}}},[t._v("chevron_right")]),t._v(" "),"uri"===e.uri.type?n("a",{attrs:{href:e.uri.value}},[t._v(t._s(e.label?e.label.value:e.uri.value))]):[t._v(t._s(e.uri.value))],t._v(" "),t.expanded[e.uri.value]?n("ld-taxonomy",{attrs:{endpoint:t.endpoint,graph:t.graph,subject:t.subject,predicate:t.predicate,parent:e.uri.value,chain:t.conceptChain}}):t._e()],2)}),0)},o=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},687:function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("flex-container",{staticClass:"ld-subject",attrs:{about:this.subject}},[this._t("default")],2)},o=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},688:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flex-item",{staticClass:"ld-predicate-container",class:{"is-in-bnode":t.isInBode,inbound:t.inbound,loading:t.loading},attrs:{dsk:t.desktopWidth,mob:"100","no-gutter":t.isInBode}},[n("div",{staticClass:"loader",class:{loading:t.loading}}),t._v(" "),n("ld-card",{staticClass:"ld-predicate"},[n("flex-container",{attrs:{"no-gutter":""}},[n("flex-item",{attrs:{dsk:t.inbound?100:33,mob:"100","no-gutter":""}},[n("span",{staticClass:"predicate-info",class:{inbound:t.inbound}},[t.rowCount?n("span",{staticClass:"row-count"},[t._v(t._s(t.rowCount.toLocaleString())+"x ")]):t._e(),t._v(" "),n("span",{staticClass:"label-container"}),t.inbound?n("span",{staticClass:"subject-label"},[t._v(": "+t._s(t.resourceTitle))]):t._e()])]),t._v(" "),n("flex-item",{staticClass:"objects",attrs:{dsk:t.inbound?100:66,mob:"100","no-gutter":""}},[t._t("default"),t._v(" "),t.endpoint&&t.isTaxonomy?n("ld-taxonomy",{attrs:{endpoint:t.endpoint,graph:t.graph,subject:t.subject,predicate:t.predicate}}):t.endpoint&&!t.rows.length?n("span",[n("ld-object",[t._v("0 treffers")])],1):t._l(t.rows,function(e,i){return n("ld-object",{key:t.offset+i},["uri"===e.uri.type?n("a",{attrs:{href:e.uri.value}},[t._v(t._s(e.titel?e.titel.value:e.uri.value))]):[t._v(t._s(e.uri.value))]],2)})],2)],1),t._v(" "),t.endpoint&&!t.isTaxonomy?n("flex-container",{staticClass:"controls",attrs:{"no-gutter":""}},[n("flex-item",{staticClass:"sorter",attrs:{dsk:25,"no-gutter":""}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.sortString,expression:"sortString"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.sortString=e.target.multiple?n:n[0]}}},[t._l(t.sortOptions,function(e){return[n("option",{domProps:{value:e.value}},[t._v(t._s(e.label))])]})],2)]),t._v(" "),n("flex-item",{staticClass:"filter",attrs:{dsk:25,"no-gutter":""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Filteren ...",autocomplete:"off"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),n("flex-item",{staticClass:"pagination",attrs:{dsk:50,"no-gutter":""}},[t.rowCount?n("span",{staticClass:"info"},[t._v("\n                    Pagina "+t._s(t.page)+"/"+t._s(t.pageCount)+"\n                ")]):t._e(),t._v(" "),n("span",{staticClass:"buttons"},[null!==t.prevOffset?n("button",{class:{disabled:t.offset===t.prevOffset},attrs:{title:t.prevOffset},on:{click:function(e){t.offset=t.prevOffset}}},[n("v-icon",[t._v("chevron_left")])],1):t._e(),t._v(" "),null!==t.nextOffset?n("button",{class:{disabled:t.offset===t.nextOffset},attrs:{title:t.nextOffset},on:{click:function(e){t.offset=t.nextOffset}}},[n("v-icon",[t._v("chevron_right")])],1):t._e()])])],1):t._e()],1)],1)},o=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},689:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ld-object",class:{bnode:this.bnode}},[this.bnode?e("ld-card",[this._t("default")],2):this._t("default")],2)},o=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}}]);