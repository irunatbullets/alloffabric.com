(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,7],{303:function(t,e,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("408a87bc",content,!0,{sourceMap:!1})},305:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("246a1582",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";r(303)},309:function(t,e,r){var n=r(29)(!1);n.push([t.i,".button{box-shadow:0 .25rem .25rem 0 rgba(0,0,0,.25);display:inline-block;font-size:1rem;font-weight:900;line-height:1;padding:1.25rem 1.875rem;text-transform:uppercase;transition:box-shadow 75ms ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.button:hover{box-shadow:0 .5rem .5rem 0 rgba(0,0,0,.125)}.button--orange{color:#fff;background:var(--aof-orange)}.button--white{color:var(--aof-red);background:#fff}",""]),t.exports=n},310:function(t,e,r){"use strict";r.r(e);r(201);var n={props:{href:{type:String,default:null},to:{type:String,default:null},color:{type:String,default:"orange"}},computed:{element:function(){return this.href?"a":"button"},colorLowercase:function(){return this.color.toLowerCase().trim()}}},o=(r(308),r(54)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.element,{tag:"component",staticClass:"button",class:{"button--orange":"orange"===t.colorLowercase,"button--white":"white"===t.colorLowercase},attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,r){var map={"./aof-logo.svg":[321,19],"./exploration.svg":[322,20],"./extra-large.svg":[323,21],"./magic.svg":[324,22],"./quests.svg":[325,23],"./tech.svg":[326,24]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=312,t.exports=n},313:function(t,e,r){"use strict";r(305)},314:function(t,e,r){var n=r(29)(!1);n.push([t.i,".icon path{fill:currentColor}",""]),t.exports=n},315:function(t,e,r){"use strict";r.r(e);r(10),r(19),r(21),r(20);var n={props:{name:{type:String,required:!0}},computed:{icon:function(){var t=this;return function(){return r(312)("./".concat(t.name,".svg"))}}}},o=(r(313),r(54)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.icon,{tag:"component",staticClass:"icon"})}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,r){var content=r(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("f5ca9f3c",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";r(320)},333:function(t,e,r){var n=r(29)(!1);n.push([t.i,".categories{display:inline-flex;grid-gap:1.125rem;gap:1.125rem;margin-bottom:1rem}",""]),t.exports=n},334:function(t,e,r){var content=r(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("6df3eb72",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r.r(e);var n=r(102),o=(r(47),r(28),r(67),{props:{categories:{type:Array,default:function(){return[]},required:!0},extraClasses:{type:String,default:""}},computed:{iconNames:function(){return Object(n.a)(this.categories).map((function(t){return t.toLowerCase().replace(" ","-")}))}}}),c=(r(332),r(54)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.categories&&t.categories.length?r("ul",{staticClass:"categories",class:t.extraClasses},t._l(t.categories,(function(e,n){return r("li",{key:e,staticClass:"categories__item"},[r("icon",{attrs:{name:t.iconNames[n]}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:r(315).default})},338:function(t,e,r){var map={"./aof5.png":339};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=338},339:function(t,e,r){t.exports=r.p+"img/aof5.74f8cd9.png"},340:function(t,e,r){"use strict";r(334)},341:function(t,e,r){var n=r(29)(!1);n.push([t.i,"@media (--xl){.product{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-template-rows:1}}@media (--xl){.product__image{grid-column:3/span 10;grid-row:1}}@media (--xxl){.product__image{margin-left:1.875rem}}@media (--xl){.product__details{padding-top:1.25rem;grid-column:1/span 3;grid-row:1;z-index:3}}@media (--xxl){.product__details{padding-top:2rem}}.product__summary{font-size:1.5rem;font-weight:900;margin-bottom:2.125rem}.product__type{text-transform:uppercase}",""]),t.exports=n},359:function(t,e,r){"use strict";r.r(e);r(57);var n={props:{type:{type:String,required:!0,validator:function(t){return["modpack","mod"].includes(t)}},name:{type:String,required:!0},img:{type:String,required:!0},description:{type:String,required:!0},categories:{type:Array,default:function(){return[]}},modCount:{type:String,default:"0"}},methods:{imgSrc:function(img){return r(338)("./".concat(this.img))}}},o=(r(340),r(54)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("img",{staticClass:"product__image",attrs:{src:t.imgSrc(),alt:t.name+" title screen"}}),t._v(" "),r("div",{staticClass:"product__details"},[r("h2",{staticClass:"product__name"},[t._v(t._s(t.name))]),t._v(" "),r("p",{staticClass:"product__description"},[t._v(t._s(t.description))]),t._v(" "),r("categories",{attrs:{categories:t.categories,"extra-classes":"product__categories"}}),t._v(" "),r("p",{staticClass:"product__summary"},[t._v("Minecraft "),r("span",{staticClass:"product__type"},[t._v(t._s(t.type))]),"modpack"===t.type?r("span",[r("br"),t._v(t._s(t.modCount)+"+ Mods")]):t._e()]),t._v(" "),r("action",{attrs:{href:"#"}},[t._v("Play Now")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Categories:r(336).default,Action:r(310).default})}}]);