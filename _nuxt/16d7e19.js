(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,8,12],{373:function(t,e,r){var content=r(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("408a87bc",content,!0,{sourceMap:!1})},374:function(t,e,r){var content=r(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("a3fdafc8",content,!0,{sourceMap:!1})},375:function(t,e,r){"use strict";r(373)},376:function(t,e,r){var n=r(30)(!1);n.push([t.i,".button{box-shadow:0 .25rem .25rem 0 rgba(0,0,0,.25);display:inline-block;min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content;font-size:clamp(.8125rem,3.5vw,1rem);font-weight:900;line-height:1;padding:clamp(.8125rem,3.5vw,1.25rem) clamp(1.875rem,8vw,2.5rem);text-align:center;text-transform:uppercase;transition:box-shadow 75ms ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.button:hover{box-shadow:0 .5rem .5rem 0 rgba(0,0,0,.125)}.button--orange{color:#fff;background:var(--aof-orange)}.button--white{color:var(--aof-red);background:#fff}",""]),t.exports=n},378:function(t,e,r){"use strict";r.r(e);var n={props:{href:{type:String,default:null},to:{type:String,default:null},color:{type:String,default:"orange"},extraClasses:{type:String,default:""}},computed:{element:function(){return this.href?"a":"button"}}},o=(r(375),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.element,{tag:"component",staticClass:"button",class:[{"button--orange":"orange"===t.color,"button--white":"white"===t.color},t.extraClasses],attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,r){"use strict";r(374)},380:function(t,e,r){var n=r(30)(!1);n.push([t.i,".panel{color:#fff;display:flex;margin-bottom:.625rem}@media (min-width:375px){.panel{min-height:100vh;margin-bottom:0}}.panel__inner{width:100%}.panel--red{background:var(--aof-red)}.panel--orange{background:var(--aof-orange)}.panel--yellow{background:var(--aof-yellow)}.panel--green{background:var(--aof-green)}.panel--blue{background:var(--aof-blue)}.panel--purple{background:var(--aof-purple)}.panel--pink{background:var(--aof-pink)}",""]),t.exports=n},381:function(t,e,r){var content=r(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("246a1582",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,default:""}},computed:{panelClasses:function(){return this.color?"panel panel--".concat(this.color):"panel"}}},o=(r(379),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.panelClasses},[r("div",{staticClass:"panel__inner"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,r){var content=r(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("f5ca9f3c",content,!0,{sourceMap:!1})},386:function(t,e,r){var map={"./aof-logo.svg":[396,22],"./exploration.svg":[397,23],"./extra-large.svg":[398,24],"./magic.svg":[399,25],"./quests.svg":[400,26],"./tech.svg":[401,27]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return r.e(e[1]).then((function(){return r.t(n,7)}))}n.keys=function(){return Object.keys(map)},n.id=386,t.exports=n},387:function(t,e,r){"use strict";r(381)},388:function(t,e,r){var n=r(30)(!1);n.push([t.i,".icon path{fill:currentColor}",""]),t.exports=n},389:function(t,e,r){"use strict";r.r(e);r(11),r(20),r(22),r(21);var n={props:{name:{type:String,required:!0}},computed:{icon:function(){var t=this;return function(){return r(386)("./".concat(t.name,".svg"))}}}},o=(r(387),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.icon,{tag:"component",staticClass:"icon"})}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,r){var content=r(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("3b9a4a6c",content,!0,{sourceMap:!1})},393:function(t,e,r){"use strict";r(385)},394:function(t,e,r){var n=r(30)(!1);n.push([t.i,".categories{list-style:none;display:flex;grid-gap:.625rem;gap:.625rem;margin-bottom:var(--clamp-10-16);padding-left:0}@media (min-width:1280px){.categories{grid-gap:1.125rem;gap:1.125rem}}",""]),t.exports=n},402:function(t,e,r){"use strict";r.r(e);r(38),r(11),r(39);var n={props:{categories:{type:Object,default:function(){return{}},required:!0},extraClasses:{type:String,default:""}},computed:{categoryArray:function(){var t=this;return Object.keys(this.categories).filter((function(e){return t.categories[e]}))}}},o=(r(393),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.categoryArray&&t.categoryArray.length?r("ul",{staticClass:"categories",class:t.extraClasses},t._l(t.categoryArray,(function(t,e){return r("li",{key:e,staticClass:"categories__item"},[r("icon",{attrs:{name:t}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:r(389).default})},407:function(t,e,r){"use strict";var n=r(15),o=r(1),c=r(3),l=r(109),d=r(24),m=r(16),f=r(218),_=r(49),h=r(108),v=r(217),w=r(6),x=r(84).f,k=r(41).f,y=r(23).f,C=r(408),N=r(219).trim,E="Number",I=o.Number,M=I.prototype,O=o.TypeError,S=c("".slice),A=c("".charCodeAt),j=function(t){var e=v(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,r,n,o,c,l,d,code,m=v(t,"number");if(h(m))throw O("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=N(m),43===(e=A(m,0))||45===e){if(88===(r=A(m,2))||120===r)return NaN}else if(48===e){switch(A(m,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(l=(c=S(m,2)).length,d=0;d<l;d++)if((code=A(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+m};if(l(E,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var F,z=function(t){var e=arguments.length<1?0:I(j(t)),r=this;return _(M,r)&&w((function(){C(r)}))?f(Object(e),r,z):e},P=n?x(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;P.length>$;$++)m(I,F=P[$])&&!m(z,F)&&y(z,F,k(I,F));z.prototype=M,M.constructor=z,d(o,E,z)}},408:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},409:function(t,e,r){"use strict";r(392)},410:function(t,e,r){var n=r(30)(!1);n.push([t.i,"@media (min-width:375px){.modpack{display:grid;grid-template-columns:repeat(9,minmax(0,1fr));padding:8.875rem 0 7vw}}@media (min-width:1280px){.modpack{grid-gap:1.25rem;gap:1.25rem;padding-top:8.125rem;align-items:center}}@media (min-width:375px){.modpack__image{grid-column:span 9/span 9;order:9999;width:100%}}@media (min-width:1280px){.modpack__image{grid-row:1;grid-column:3/span 7;order:0;padding-left:4.652777777777778%;padding-right:4.652777777777778%}}.modpack__details{padding:.625rem 1.25rem 1.25rem}@media (min-width:375px){.modpack__details{display:grid;grid-column:3/span 6;grid-template-columns:subgrid;grid-auto-rows:minmax(-webkit-min-content,-webkit-max-content);grid-auto-rows:minmax(min-content,max-content);padding:0;margin-bottom:1.875rem}}@media (min-width:1280px){.modpack__details{display:block;grid-column:2/span 2;grid-row:1;margin-bottom:0}}@media (min-width:375px){.modpack__description,.modpack__summary,.modpack__title{grid-column:2/span 5}}.modpack__title{grid-row:1}.modpack__description{grid-row:2}.modpack__summary{grid-row:3}.modpack__action{grid-column:2/span 1;grid-row:4}.modpack__description,.modpack__summary{max-width:40ch}@media (min-width:375px){.modpack__categories{align-self:center;order:-9999;grid-row:1/span 4;justify-self:flex-end;margin-right:1.0625rem;margin-bottom:0;flex-flow:column}}@media (min-width:1280px){.modpack__categories{margin-bottom:revert;flex-flow:row}}.modpack__summary{font-size:1.125rem;font-weight:900;margin-bottom:1rem}@media (min-width:1280px){.modpack__summary{font-size:1.5rem;margin-bottom:2.125rem}}.modpack__type{text-transform:uppercase}",""]),t.exports=n},418:function(t,e,r){"use strict";r.r(e);r(407);var n={props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String,required:!0},categories:{type:Object,default:function(){return{}}},modCount:{type:Number,default:0},button:{type:Object,default:function(){return{color:"orange",text:"Click",url:"#"}}},color:{type:String,default:"white"}}},o=(r(409),r(55)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("panel",{attrs:{color:t.color}},[r("div",{staticClass:"modpack"},[r("div",{staticClass:"modpack__image"},[r("img",{staticClass:"modpack__image",attrs:{src:t.image,alt:t.title+" title screen"}})]),t._v(" "),r("div",{staticClass:"modpack__details"},[r("h2",{staticClass:"modpack__name"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"modpack__description"},[t._v(t._s(t.description))]),t._v(" "),r("categories",{attrs:{categories:t.categories,"extra-classes":"modpack__categories"}}),t._v(" "),r("p",{staticClass:"modpack__summary"},[t._v("Minecraft MODPACK"),r("br"),t._v(t._s(t.modCount)+"+ Mods")]),t._v(" "),r("action",{attrs:{href:t.button.url,color:t.button.color,"extra-classes":"modpack__action"}},[t._v(t._s(t.button.text))])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Categories:r(402).default,Action:r(378).default,Panel:r(384).default})}}]);