(window.webpackJsonp=window.webpackJsonp||[]).push([[18,2,7,11],{373:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("408a87bc",content,!0,{sourceMap:!1})},375:function(t,e,n){"use strict";n(373)},376:function(t,e,n){var o=n(30)(!1);o.push([t.i,".button{box-shadow:0 .25rem .25rem 0 rgba(0,0,0,.25);display:inline-block;font-size:1rem;font-weight:900;line-height:1;padding:1.25rem 1.875rem;text-transform:uppercase;transition:box-shadow 75ms ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.button:hover{box-shadow:0 .5rem .5rem 0 rgba(0,0,0,.125)}.button--orange{color:#fff;background:var(--aof-orange)}.button--white{color:var(--aof-red);background:#fff}",""]),t.exports=o},378:function(t,e,n){"use strict";n.r(e);var o={props:{href:{type:String,default:null},to:{type:String,default:null},color:{type:String,default:"orange"}},computed:{element:function(){return this.href?"a":"button"}}},l=(n(375),n(55)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.element,{tag:"component",staticClass:"button",class:{"button--orange":"orange"===t.color,"button--white":"white"===t.color},attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("2a79b962",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";n(385)},396:function(t,e,n){var o=n(30)(!1);o.push([t.i,".hero__title{margin-bottom:1.875rem}.hero__inner{display:flex;justify-content:space-between}.hero__link{order:-9999;margin-right:1.875rem}",""]),t.exports=o},397:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("7442adbc",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!0},text:{type:String,required:!0},link:{type:Object,required:!1,default:function(){return{text:"",url:""}}}}},l=(n(395),n(55)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("h1",{staticClass:"hero__title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"hero__inner"},[n("div",{staticClass:"hero__content"},[t._v("\n      "+t._s(t.text)+"\n    ")]),t._v(" "),t.link.text&&t.link.url?n("div",{staticClass:"hero__link"},[n("p",[n("action",{attrs:{href:t.link.url,color:t.link.color}},[t._v(t._s(t.link.text))])],1)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Action:n(378).default})},410:function(t,e,n){"use strict";n(397)},411:function(t,e,n){var o=n(30)(!1);o.push([t.i,'.pips__list{display:flex;flex-flow:column;align-items:center;list-style:none;padding-left:0;margin-bottom:0}.pips__link{display:block;padding:1.125rem}.pips__link:after{content:"";display:block;width:.5rem;height:.5rem;background:#000;border-radius:100%}.pips__link:hover:after{background:var(--aof-red)}',""]),t.exports=o},420:function(t,e,n){"use strict";n.r(e);n(410);var o=n(55),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"pips"},[n("h2",{staticClass:"sr-only"},[t._v("Page section links")]),t._v(" "),n("ol",{staticClass:"pips__list"},[n("li",[n("a",{staticClass:"pips__link",attrs:{href:"#"}},[n("span",{staticClass:"sr-only"},[t._v("Item 1")])])]),t._v(" "),n("li",[n("a",{staticClass:"pips__link",attrs:{href:"#"}},[n("span",{staticClass:"sr-only"},[t._v("Item 2")])])])])])}],!1,null,null,null);e.default=component.exports},431:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{welcomeSection:{title:"Welcome to All of Fabric",text:"Lorem tempor amet cillum veniam est culpa cupidatat dolore aliqua veniam officia veniam. Duis commodo dolor eu ea do deserunt id mollit officia non voluptate magna. Deserunt excepteur tempor pariatur amet culpa non deserunt minim in est magna nisi ex minim. Laborum nisi ex ullamco esse laboris laborum tempor. Incididunt labore culpa voluptate cupidatat ullamco laboris nisi.",link:{text:"Join us",url:"https://discord.gg/6rkdm48"}},statsData:[{title:"10k+",text:"Active players in our community"},{title:"200k+",text:"AOF players and going up every day"},{title:"<4min",text:"Less than 4 minutes for the pack to load"},{title:"4GB",text:"4GB of Ram is all you need for fluid gameplay (even with SHADERS!)"}]}}},l=n(55),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero",{attrs:{title:"Welcome to All of Fabric",text:"Lorem tempor amet cillum veniam est culpa cupidatat dolore aliqua veniam officia veniam. Duis commodo dolor eu ea do deserunt id mollit officia non voluptate magna. Deserunt excepteur tempor pariatur amet culpa non deserunt minim in est magna nisi ex minim. Laborum nisi ex ullamco esse laboris laborum tempor. Incididunt labore culpa voluptate cupidatat ullamco laboris nisi.",link:{text:"Join us",url:"https://discord.gg/6rkdm48"}}}),t._v(" "),n("pips"),t._v(" "),n("div",[t._v("\n\n    basic layout\n    --------------------------------------------------------------------------\n      --color\n      --arrangement\n\n      title block\n        intro\n        text\n        button\n\n      image\n\n      sections\n        title\n        text\n        buttons\n        image\n\n    FAQ\n    --------------------------------------------------------------------------\n      --color\n\n      title block\n        intro\n        text\n        button\n\n      faq area\n\n\n\n    "),t._m(0),t._v(" "),n("div",[n("h2",[t._v("Need help?")]),t._v(" "),n("p",[t._v("Lorem tempor amet cillum veniam est culpa cupidatat dolore aliqua veniam officia veniam. Duis commodo dolor eu ea do deserunt id mollit officia non voluptate magna. Deserunt excepteur tempor pariatur amet culpa non deserunt minim in est magna nisi ex minim. Laborum nisi ex ullamco esse laboris laborum tempor. Incididunt labore culpa voluptate cupidatat ullamco laboris nisi.")]),t._v(" "),n("p",[n("action",{attrs:{href:"#"}},[t._v("Check the FAQ")])],1)]),t._v(" "),n("div",[n("h2",[t._v("24/7 on Discord")]),t._v(" "),n("p",[t._v("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.")]),t._v(" "),n("p",[n("action",{attrs:{href:"#"}},[t._v("Join us")])],1)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Our community")]),t._v(" "),n("p",{staticClass:"intro"},[t._v("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis")]),t._v(" "),n("p",[t._v("Lorem tempor amet cillum veniam est culpa cupidatat dolore aliqua veniam officia veniam. Duis commodo dolor eu ea do deserunt id mollit officia non voluptate magna. Deserunt excepteur tempor pariatur amet culpa non deserunt minim in est magna nisi ex minim. Laborum nisi ex ullamco esse laboris laborum tempor. Incididunt labore culpa voluptate cupidatat ullamco laboris nisi.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(408).default,Pips:n(420).default,Action:n(378).default})}}]);