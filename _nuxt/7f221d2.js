(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2],{373:function(t,e,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("408a87bc",content,!0,{sourceMap:!1})},375:function(t,e,o){"use strict";o(373)},376:function(t,e,o){var n=o(30)(!1);n.push([t.i,".button{box-shadow:0 .25rem .25rem 0 rgba(0,0,0,.25);display:inline-block;min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content;font-size:clamp(.8125rem,3.5vw,1rem);font-weight:900;line-height:1;padding:clamp(.8125rem,3.5vw,1.25rem) clamp(1.875rem,8vw,2.5rem);text-align:center;text-transform:uppercase;transition:box-shadow 75ms ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.button:hover{box-shadow:0 .5rem .5rem 0 rgba(0,0,0,.125)}.button--red{color:#fff;background:#f0414e}.button--white{color:var(--aof-red);background:#fff}",""]),t.exports=n},378:function(t,e,o){"use strict";o.r(e);var n={props:{href:{type:String,default:null},to:{type:String,default:null},color:{type:String,default:"red"},extraClasses:{type:String,default:""}},computed:{element:function(){return this.href?"a":"button"}}},r=(o(375),o(55)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.element,{tag:"component",staticClass:"button",class:[{"button--red":"red"===t.color,"button--white":"white"===t.color},t.extraClasses],attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},414:function(t,e,o){var content=o(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("0bd14158",content,!0,{sourceMap:!1})},426:function(t,e,o){"use strict";o(414)},427:function(t,e,o){var n=o(30)(!1);n.push([t.i,".text-block{margin-bottom:1.25rem}@media (min-width:375px){.text-block{margin-bottom:3.75rem;display:grid;grid-template-columns:repeat(9,minmax(0,1fr))}}@media (min-width:375px){.text-block__content,.text-block__title{grid-column:2/span 7}}.text-block__content>:last-child{margin-bottom:0}.text-block__button{margin-top:.625rem}@media (min-width:375px){.text-block__button{grid-column:2/span 1;margin-top:1.25rem}}.text-block__image{margin:1.25rem 0}@media (min-width:375px){.text-block__image{order:-9999;grid-column:4/span 6;margin-top:0}}.text-block+.text-block .text-block__content,.text-block+.text-block .text-block__title{grid-column:3/span 6}.text-block+.text-block .text-block__button{grid-column-start:3}",""]),t.exports=n},445:function(t,e,o){"use strict";o.r(e);var n={props:{props:{type:Object,default:function(){return{}}}},data:function(){return{block:this.props,button:this.props.button}}},r=(o(426),o(55)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-block"},[o("h2",{staticClass:"text-block__title"},[t._v(t._s(t.block.title))]),t._v(" "),o("div",{staticClass:"text-block__content",domProps:{innerHTML:t._s(t.$md.render(t.block.text))}}),t._v(" "),t.button.url&&t.button.text?o("action",{attrs:{href:t.button.url,color:t.button.color,"extra-classes":"text-block__button"}},[t._v(t._s(t.button.text))]):t._e(),t._v(" "),t.block.image?o("img",{staticClass:"text-block__image",attrs:{src:t.block.image,alt:""}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Action:o(378).default})}}]);