(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,6,7,10],{377:function(t,e,r){var content=r(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("408a87bc",content,!0,{sourceMap:!1})},378:function(t,e,r){"use strict";r(377)},379:function(t,e,r){var n=r(30)(!1);n.push([t.i,".button{box-shadow:0 .25rem .25rem 0 rgba(0,0,0,.25);display:inline-block;min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content;font-size:clamp(.8125rem,3.5vw,1rem);font-weight:900;line-height:1;padding:clamp(.8125rem,3.5vw,1.25rem) clamp(1.875rem,8vw,2.5rem);text-align:center;text-transform:uppercase;transition:box-shadow 75ms ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.button:hover{box-shadow:0 .5rem .5rem 0 rgba(0,0,0,.125)}.button--red{color:#fff;background:#f0414e}.button--white{color:var(--aof-red);background:#fff}",""]),t.exports=n},380:function(t,e,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("a3fdafc8",content,!0,{sourceMap:!1})},381:function(t,e,r){"use strict";r.r(e);var n={props:{href:{type:String,default:null},to:{type:String,default:null},color:{type:String,default:"red"},extraClasses:{type:String,default:""}},computed:{element:function(){return this.href?"a":"button"}}},o=(r(378),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.element,{tag:"component",staticClass:"button",class:[{"button--red":"red"===t.color,"button--white":"white"===t.color},t.extraClasses],attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,r){"use strict";r(380)},384:function(t,e,r){var n=r(30)(!1);n.push([t.i,".panel{color:#fff;display:flex;align-items:center;width:100%}@media (min-width:375px){.panel{min-height:100vh;padding-top:clamp(3.75rem,16vw,8.125rem);padding-bottom:clamp(3.75rem,16vw,5rem)}}@media (min-width:1280px){.panel{padding-bottom:5rem}}.panel--orange,.panel--red{background:var(--aof-red)}.panel--yellow{background:var(--aof-yellow)}.panel--green{background:var(--aof-green)}.panel--blue{background:var(--aof-blue)}.panel--purple{background:var(--aof-purple)}.panel--pink{background:var(--aof-pink)}.panel--alt-red{background:#fc6e5e}",""]),t.exports=n},385:function(t,e,r){var content=r(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("246a1582",content,!0,{sourceMap:!1})},388:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,default:""}},computed:{panelClasses:function(){return this.color?"panel panel--".concat(this.color):"panel"}}},o=(r(383),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.panelClasses},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},390:function(t,e,r){var content=r(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("f5ca9f3c",content,!0,{sourceMap:!1})},391:function(t,e,r){var map={"./aof-logo.svg":[402,21],"./exploration.svg":[403,22],"./extra-large.svg":[404,23],"./magic.svg":[405,24],"./quests.svg":[406,25],"./tech.svg":[407,26]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=391,t.exports=n},392:function(t,e,r){"use strict";r(385)},393:function(t,e,r){var n=r(30)(!1);n.push([t.i,".icon path{fill:currentColor}",""]),t.exports=n},394:function(t,e,r){"use strict";r.r(e);r(11),r(20),r(22),r(21);var n={props:{name:{type:String,required:!0}},computed:{icon:function(){var t=this;return function(){return r(391)("./".concat(t.name,".svg"))}}}},o=(r(392),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.icon,{tag:"component",staticClass:"icon"})}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("3b9a4a6c",content,!0,{sourceMap:!1})},399:function(t,e,r){"use strict";r(390)},400:function(t,e,r){var n=r(30)(!1);n.push([t.i,".categories{list-style:none;display:flex;grid-gap:.625rem;gap:.625rem;margin-bottom:var(--clamp-10-16);padding-left:0}@media (min-width:1280px){.categories{grid-gap:1.125rem;gap:1.125rem}}",""]),t.exports=n},409:function(t,e,r){"use strict";r.r(e);r(38),r(11),r(39);var n={props:{categories:{type:Object,default:function(){return{}},required:!0},extraClasses:{type:String,default:""}},computed:{categoryArray:function(){var t=this;return Object.keys(this.categories).filter((function(e){return t.categories[e]}))}}},o=(r(399),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.categoryArray&&t.categoryArray.length?r("ul",{staticClass:"categories",class:t.extraClasses},t._l(t.categoryArray,(function(t,e){return r("li",{key:e,staticClass:"categories__item",attrs:{"data-aos":"zoom-in","data-aos-delay":"75","data-aos-duration":"600"}},[r("icon",{attrs:{name:t}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:r(394).default})},412:function(t,e,r){"use strict";var n=r(15),o=r(1),c=r(3),l=r(109),d=r(24),m=r(16),f=r(221),_=r(49),h=r(108),v=r(220),k=r(6),y=r(84).f,x=r(41).f,w=r(23).f,C=r(413),N=r(222).trim,E="Number",M=o.Number,O=M.prototype,I=o.TypeError,S=c("".slice),j=c("".charCodeAt),A=function(t){var e=v(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,r,n,o,c,l,d,code,m=v(t,"number");if(h(m))throw I("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=N(m),43===(e=j(m,0))||45===e){if(88===(r=j(m,2))||120===r)return NaN}else if(48===e){switch(j(m,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(l=(c=S(m,2)).length,d=0;d<l;d++)if((code=j(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+m};if(l(E,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var z,F=function(t){var e=arguments.length<1?0:M(A(t)),r=this;return _(O,r)&&k((function(){C(r)}))?f(Object(e),r,F):e},$=n?y(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;$.length>P;P++)m(M,z=$[P])&&!m(F,z)&&w(F,z,x(M,z));F.prototype=O,O.constructor=F,d(o,E,F)}},413:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},414:function(t,e,r){"use strict";r(398)},415:function(t,e,r){var n=r(30)(!1);n.push([t.i,"@media (min-width:375px){.modpack{display:grid;grid-template-columns:repeat(9,minmax(0,1fr))}}@media (min-width:1280px){.modpack{grid-gap:1.25rem;gap:1.25rem;align-items:center}}@media (min-width:375px){.modpack__image{grid-column:span 9/span 9;order:9999}}@media (min-width:1280px){.modpack__image{grid-row:1;grid-column:3/span 7;order:0;padding-left:4.652777777777778%;padding-right:4.652777777777778%}}.modpack__details{padding:.9375rem 1.25rem 1.25rem;z-index:1}@media (min-width:375px){.modpack__details{display:grid;grid-column:3/span 6;grid-template-columns:subgrid;padding:0;margin-bottom:1.875rem}}@media (min-width:1280px){.modpack__details{display:block;grid-column:2/span 2;grid-row:1;margin-bottom:0}}@media (min-width:375px){.modpack__description,.modpack__summary,.modpack__title{grid-column:2/span 5}}.modpack__action{grid-column:2/span 1}.modpack__description,.modpack__summary{max-width:40ch}@media (min-width:375px){.modpack__categories{align-self:center;order:-9999;grid-row:1/span 4;justify-self:flex-end;margin-right:1.0625rem;margin-bottom:0;flex-flow:column}}@media (min-width:1280px){.modpack__categories{margin-bottom:revert;flex-flow:row}}.modpack__summary{font-size:1.125rem;font-weight:900;margin-bottom:1rem}@media (min-width:1280px){.modpack__summary{font-size:1.5rem;margin-bottom:2.125rem}}.modpack__type{text-transform:uppercase}",""]),t.exports=n},420:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("08150944",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r.r(e);r(412);var n={props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String,required:!0},categories:{type:Object,default:function(){return{}}},modCount:{type:Number,default:0},button:{type:Object,default:function(){return{color:"red",text:"Click",url:"#"}}},color:{type:String,default:"white"}},computed:{modpackColor:function(){return"red"===this.color?"alt-red":this.color}}},o=(r(414),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("panel",{attrs:{color:t.modpackColor}},[r("div",{staticClass:"modpack"},[r("div",{staticClass:"modpack__image"},[r("img",{staticClass:"modpack__image",attrs:{src:t.image,alt:t.title+" title screen","data-aos":"fade-up","data-aos-mirror":"true"}})]),t._v(" "),r("div",{staticClass:"modpack__details"},[r("h2",{staticClass:"modpack__title"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"modpack__description"},[t._v(t._s(t.description))]),t._v(" "),r("categories",{attrs:{categories:t.categories,"extra-classes":"modpack__categories"}}),t._v(" "),r("p",{staticClass:"modpack__summary"},[t._v("Minecraft MODPACK"),r("br"),t._v(t._s(t.modCount)+"+ Mods")]),t._v(" "),r("action",{attrs:{href:t.button.url,color:t.button.color,"extra-classes":"modpack__action"}},[t._v(t._s(t.button.text))])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Categories:r(409).default,Action:r(381).default,Panel:r(388).default})},430:function(t,e,r){"use strict";r(420)},431:function(t,e,r){var n=r(30)(!1);n.push([t.i,".modpacks__title{margin-top:.9375rem}",""]),t.exports=n},450:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(40),{props:{props:{type:Object,default:function(){return{}}}},data:function(){return{block:this.props,modpacks:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("modpacks").sortBy("release_date","desc").fetch();case 2:t.modpacks=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),c=(r(430),r(55)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.modpacks,(function(t,e){return r("modpack",{key:e,attrs:{type:t.type,title:t.title,image:t.image,description:t.description,categories:t.categories,"mod-count":t.mod_count,button:t.button,color:t.color}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modpack:r(423).default})}}]);