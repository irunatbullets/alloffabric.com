(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{303:function(t,e,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("408a87bc",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";r(303)},309:function(t,e,r){var n=r(29)(!1);n.push([t.i,".button{box-shadow:0 .25rem .25rem 0 rgba(0,0,0,.25);display:inline-block;font-size:1rem;font-weight:900;line-height:1;padding:1.25rem 1.875rem;text-transform:uppercase;transition:box-shadow 75ms ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.button:hover{box-shadow:0 .5rem .5rem 0 rgba(0,0,0,.125)}.button--orange{color:#fff;background:var(--aof-orange)}.button--white{color:var(--aof-red);background:#fff}",""]),t.exports=n},310:function(t,e,r){"use strict";r.r(e);r(201);var n={props:{href:{type:String,default:null},to:{type:String,default:null},color:{type:String,default:"orange"}},computed:{element:function(){return this.href?"a":"button"},colorLowercase:function(){return this.color.toLowerCase().trim()}}},o=(r(308),r(54)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.element,{tag:"component",staticClass:"button",class:{"button--orange":"orange"===t.colorLowercase,"button--white":"white"===t.colorLowercase},attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("2a79b962",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r(311)},317:function(t,e,r){var n=r(29)(!1);n.push([t.i,".hero__title{margin-bottom:1.875rem}.hero__inner{display:flex;justify-content:space-between}.hero__link{order:-9999;margin-right:1.875rem}",""]),t.exports=n},327:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0},text:{type:String,required:!0},link:{type:Object,required:!1,default:function(){return{text:"",url:""}}}}},o=(r(316),r(54)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero"},[r("h1",{staticClass:"hero__title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"hero__inner"},[r("div",{staticClass:"hero__content"},[t._v("\n      "+t._s(t.text)+"\n    ")]),t._v(" "),t.link.text&&t.link.url?r("div",{staticClass:"hero__link"},[r("p",[r("action",{attrs:{href:t.link.url,color:t.link.color}},[t._v(t._s(t.link.text))])],1)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Action:r(310).default})}}]);