(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2],{373:function(t,e,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("408a87bc",content,!0,{sourceMap:!1})},375:function(t,e,o){"use strict";o(373)},376:function(t,e,o){var n=o(30)(!1);n.push([t.i,".button{box-shadow:0 .25rem .25rem 0 rgba(0,0,0,.25);display:inline-block;font-size:1rem;font-weight:900;line-height:1;padding:1.25rem 1.875rem;text-transform:uppercase;transition:box-shadow 75ms ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.button:hover{box-shadow:0 .5rem .5rem 0 rgba(0,0,0,.125)}.button--orange{color:#fff;background:var(--aof-orange)}.button--white{color:var(--aof-red);background:#fff}",""]),t.exports=n},378:function(t,e,o){"use strict";o.r(e);var n={props:{href:{type:String,default:null},to:{type:String,default:null},color:{type:String,default:"orange"}},computed:{element:function(){return this.href?"a":"button"}}},r=(o(375),o(55)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.element,{tag:"component",staticClass:"button",class:{"button--orange":"orange"===t.color,"button--white":"white"===t.color},attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},438:function(t,e,o){"use strict";o.r(e);var n={props:{props:{type:Object,default:function(){return{}}}},data:function(){return{block:this.props,button:this.props.button}}},r=o(55),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v(t._s(t.block.title))]),t._v(" "),o("p",[t._v(t._s(t.block.text))]),t._v(" "),t.button.url&&t.button.text?o("action",{attrs:{href:t.button.url,color:t.button.color}},[t._v(t._s(t.button.text))]):t._e(),t._v(" "),t.block.image?o("img",{attrs:{src:t.block.image,alt:""}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Action:o(378).default})}}]);