(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{505:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(49),n(50);var o=n(104);function r(){var e=Object(o.d)();if(!e)throw new Error("must be called in setup");return e||{}}},518:function(e,t,n){"use strict";n(47);t.a={data:function(){return{recoShowModule:!1}},mounted:function(){this.recoShowModule=!0},watch:{$route:function(e,t){var n=this;e.path!==t.path&&(this.recoShowModule=!1,setTimeout((function(){n.recoShowModule=!0}),200))}}}},521:function(e,t,n){"use strict";n(6),n(36),n(48),n(55);var o=n(168),r=(n(281),n(13)),a=(n(525),n(169)),i=n(505),s=Object(o.b)({components:{RecoIcon:a.b},setup:function(e,t){var n=Object(i.a)(),a=Object(o.f)({query:"",focused:!1,focusIndex:0,placeholder:void 0}),s=Object(o.a)((function(){return a.focused&&l.value&&l.value.length})),c=function(e){for(var t in n.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},l=Object(o.a)((function(){var e=a.query.trim().toLowerCase();if(e){for(var t=n.$site.pages,o=n.$site.themeConfig.searchMaxSuggestions,r=n.$localePath,i=function(t){return t&&t.title&&t.title.toLowerCase().indexOf(e)>-1},s=[],l=0;l<t.length&&!(s.length>=o);l++){var u=t[l];if(c(u)===r)if(i(u))s.push(u);else if(u.headers)for(var f=0;f<u.headers.length&&!(s.length>=o);f++){var d=u.headers[f];i(d)&&s.push(Object.assign({},u,{path:u.path+"#"+d.slug,header:d}))}}return s}})),u=Object(o.a)((function(){return(n.$site.themeConfig.nav||[]).length+(n.$site.repo?1:0)<=2}));return Object(r.a)({showSuggestions:s,suggestions:l,alignRight:u,onUp:function(){s.value&&(a.focusIndex>0?a.focusIndex--:a.focusIndex=l.value.length-1)},onDown:function(){s.value&&(a.focusIndex<l.value.length-1?a.focusIndex++:a.focusIndex=0)},focus:function(e){a.focusIndex=e},unfocus:function(){a.focusIndex=-1},go:function(e){s.value&&(n.$router.push(l.value[e].path),a.query="",a.focusIndex=0)}},Object(o.h)(a))},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""}}),c=(n(562),n(7)),l=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("reco-icon",{attrs:{icon:"reco-search"}}),e._v(" "),n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,o){return n("li",{key:o,staticClass:"suggestion",class:{focused:o===e.focusIndex},on:{mousedown:function(t){return e.go(o)},mouseenter:function(t){return e.focus(o)}}},[n("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[n("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?n("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()],1)}),[],!1,null,null,null).exports,u=(n(563),Object(c.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),f=n(78),d=(n(101),n(21),n(57),n(128),n(77),n(564),n(171),n(130),n(29),n(285),n(286),n(287),n(173),n(288),n(523)),p=n(559),h=Object(o.b)({components:{NavLink:d.a,DropdownTransition:p.a,RecoIcon:a.b},props:{item:{required:!0}},setup:function(e,t){var n=Object(o.g)(!1);return{open:n,toggle:function(){n.value=!n.value}}}}),g=(n(566),Object(c.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[n("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[n("span",{staticClass:"title"},[n("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),n("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(t,o){return n("li",{key:t.link||o,staticClass:"dropdown-item"},["links"===t.type?n("h4",[e._v(e._s(t.text))]):e._e(),e._v(" "),"links"===t.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(t.items,(function(e){return n("li",{key:e.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:e}})],1)})),0):n("NavLink",{attrs:{item:t}})],1)})),0)])],1)}),[],!1,null,null,null).exports),m=n(56),v=Object(o.b)({components:{NavLink:d.a,DropdownLink:g,RecoIcon:a.b},setup:function(e,t){var n=Object(i.a)(),r=Object(o.a)((function(){return n.$themeLocaleConfig.nav||n.$themeConfig.nav||[]})),a=Object(o.a)((function(){var e=n.$site.locales||{};if(e&&Object.keys(e).length>1){var t=n.$page.path,o=n.$router.options.routes,a=n.$themeConfig.locales||{},i={text:n.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(r){var i,s=e[r],c=a[r]&&a[r].label||s.lang;return s.lang===n.$lang?i=t:(i=t.replace(n.$localeConfig.path,r),o.some((function(e){return e.path===i}))||(i=r)),{text:c,link:i}}))};return[].concat(Object(f.a)(r.value),[i])}var s=n.$themeConfig.blogConfig||{},c=r.value.some((function(e){return!s.category||e.text===(s.category.text||"分类")})),l=r.value.some((function(e){return!s.tag||e.text===(s.tag.text||"标签")}));if(!c&&Object.hasOwnProperty.call(s,"category")){var u=s.category,d=n.$categories;r.value.splice(parseInt(u.location||2)-1,0,{items:d.list.map((function(e){return e.link=e.path,e.text=e.name,e})),text:u.text||n.$recoLocales.category,type:"links",icon:"reco-category"})}if(!l&&Object.hasOwnProperty.call(s,"tag")){var p=s.tag;r.value.splice(parseInt(p.location||3)-1,0,{link:"/tag/",text:p.text||n.$recoLocales.tag,type:"links",icon:"reco-tag"})}return r.value})),s=Object(o.a)((function(){return(n.nav||[]).map((function(e){return Object.assign(Object(m.j)(e),{items:(e.items||[]).map(m.j)})}))})),c=Object(o.a)((function(){var e=n.$themeConfig.repo;return e?/^https?:/.test(e)?e:"https://github.com/".concat(e):""})),l=Object(o.a)((function(){if(!n.repoLink)return"";if(n.$themeConfig.repoLabel)return n.$themeConfig.repoLabel;for(var e=n.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"],o=0;o<t.length;o++){var r=t[o];if(new RegExp(r,"i").test(e))return r}return"Source"}));return{userNav:r,nav:a,userLinks:s,repoLink:c,repoLabel:l}}}),b=(n(567),Object(c.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.userLinks.length||e.repoLink?n("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return n("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?n("DropdownLink",{attrs:{item:e}}):n("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?n("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[n("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),n("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null).exports),_=n(568),k=n.n(_),y=(n(100),{light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}});function w(e){var t=document.querySelector(":root"),n=y[e],o="dark"===e?"light":"dark";for(var r in n)t.style.setProperty(r,n[r]);t.classList.remove(o),t.classList.add(e)}function C(e){if("auto"===e){var t=window.matchMedia("(prefers-color-scheme: dark)").matches,n=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&w("dark"),n&&w("light"),!t&&!n){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");var o=(new Date).getHours();w(o<6||o>=18?"dark":"light")}}else w(e)}var x={name:"ModeOptions",data:function(){return{modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}},mounted:function(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){"auto"===e.$data.currentMode&&C(e.$data.currentMode)})),window.matchMedia("(prefers-color-scheme: light)").addListener((function(){"auto"===e.$data.currentMode&&C(e.$data.currentMode)})),C(this.currentMode)},methods:{selectMode:function(e){e!==this.currentMode&&(this.currentMode=e,C(e),localStorage.setItem("mode",e))},getClass:function(e){return e!==this.currentMode?e:"".concat(e," active")}}},O=(n(569),Object(c.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mode-options"},[n("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),n("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(t,o){return n("li",{key:o,class:e.getClass(t.mode),on:{click:function(n){return e.selectMode(t.mode)}}},[e._v(e._s(t.title))])})),0)])}),[],!1,null,null,null).exports),$={name:"UserSettings",directives:{"click-outside":k.a},components:{ModePicker:O,RecoIcon:a.b,ModuleTransition:a.a},data:function(){return{showMenu:!1}},mounted:function(){var e=this.$themeConfig.mode||"auto";!1===this.$themeConfig.modePicker&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener((function(){C(e)})),window.matchMedia("(prefers-color-scheme: light)").addListener((function(){C(e)}))),C(e))},methods:{hideMenu:function(){this.showMenu=!1}}},j=(n(570),Object(c.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return!1!==e.$themeConfig.modePicker?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[n("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[n("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),n("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[n("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null).exports),S=Object(o.b)({components:{SidebarButton:u,NavLinks:b,SearchBox:l,AlgoliaSearchBox:{},Mode:j},setup:function(e,t){var n=Object(i.a)(),r=Object(o.g)(null),a=Object(o.a)((function(){return n.$themeLocaleConfig.algolia||n.$themeConfig.algolia||{}})),s=Object(o.a)((function(){a.value&&a.value.apiKey&&a.value.indexName}));function c(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}return Object(o.d)((function(){var e=parseInt(c(n.$el,"paddingLeft"))+parseInt(c(n.$el,"paddingRight")),t=function(){document.documentElement.clientWidth<719?r.value=null:r.value=n.$el.offsetWidth-e-(n.$refs.siteName&&n.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1)})),{linksWrapMaxWidth:r,algolia:a,isAlgoliaSearch:s,css:c}}}),I=(n(571),Object(c.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),n("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[n("Mode"),e._v(" "),e.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$themeConfig.search&&!1!==e.$frontmatter.search?n("SearchBox"):e._e(),e._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),M=n(557),L=Object(o.b)({name:"Sidebar",components:{SidebarLinks:M.default,NavLinks:b},props:["items"]}),T=(n(574),Object(c.a)(L,(function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"sidebar"},[this._t("top"),this._v(" "),t("NavLinks"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),P=n(558),E=(n(47),n(538)),B=n.n(E),N=Object(o.b)({name:"Password",components:{ModuleTransition:a.a,RecoIcon:a.b},props:{isPage:{type:Boolean,default:!1}},setup:function(e,t){var n=Object(i.a)(),r=(new Date).getFullYear(),a=Object(o.g)(""),s=Object(o.g)("Konck! Knock!"),c=Object(o.a)((function(){var e;return null==n||null===(e=n.$parent)||void 0===e?void 0:e.recoShowModule})),l=Object(o.h)(e).isPage;return{warningText:s,year:r,key:a,recoShowModule:c,inter:function(){var e=B()(a.value.trim()),t="pageKey".concat(window.location.pathname),o=l.value?t:"key";if(sessionStorage.setItem(o,e),l.value?function(){var e=n.$frontmatter.keys.map((function(e){return e.toLowerCase()})),t="pageKey".concat(window.location.pathname);return e&&e.indexOf(sessionStorage.getItem(t))>-1}():n.$themeConfig.keyPage.keys.map((function(e){return e.toLowerCase()})).indexOf(sessionStorage.getItem("key"))>-1){s.value="Key Success";var r=document.getElementById("box").style.width;n.$refs.passwordBtn.style.width="".concat(r-2,"px"),n.$refs.passwordBtn.style.opacity=1,setTimeout((function(){window.location.reload()}),800)}else s.value="Key Error"},inputFocus:function(){s.value="Input Your Key"},inputBlur:function(){s.value="Konck! Knock!"}}}}),H=(n(578),Object(c.a)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"password-shadow"},[n("ModuleTransition",[n("h3",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"title"},[e._v(e._s(e.isPage?e.$frontmatter.title:e.$site.title||e.$localeConfig.title))])]),e._v(" "),n("ModuleTransition",{attrs:{delay:"0.08"}},[e.recoShowModule&&!e.isPage?n("p",{staticClass:"description"},[e._v(e._s(e.$site.description||e.$localeConfig.description))]):e._e()]),e._v(" "),n("ModuleTransition",{attrs:{delay:"0.16"}},[n("label",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"inputBox",attrs:{id:"box"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],attrs:{type:"password"},domProps:{value:e.key},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.inter.apply(null,arguments)},focus:e.inputFocus,blur:e.inputBlur,input:function(t){t.target.composing||(e.key=t.target.value)}}}),e._v(" "),n("span",[e._v(e._s(e.warningText))]),e._v(" "),n("button",{ref:"passwordBtn",on:{click:e.inter}},[e._v("OK")])])]),e._v(" "),n("ModuleTransition",{attrs:{delay:"0.24"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"footer"},[n("span",[n("reco-icon",{attrs:{icon:"reco-theme"}}),e._v(" "),n("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[e._v("vuePress-theme-reco")])],1),e._v(" "),n("span",[n("reco-icon",{attrs:{icon:"reco-copyright"}}),e._v(" "),n("a",[e.$themeConfig.author?n("span",[e._v(e._s(e.$themeConfig.author))]):e._e(),e._v("\n            \n          "),e.$themeConfig.startYear&&e.$themeConfig.startYear!=e.year?n("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n          "+e._s(e.year)+"\n        ")])],1)])])],1)}),[],!1,null,"25ba6db2",null).exports),A=n(579),K=Object(o.b)({components:{Sidebar:T,Navbar:I,Password:H,PersonalInfo:P.a},props:{sidebar:{type:Boolean,default:!0},sidebarItems:{type:Array,default:function(){return[]}},showModule:{type:Boolean,default:!1}},setup:function(e,t){var n=Object(i.a)(),r=Object(o.g)(!1),a=Object(o.g)(!0),s=Object(o.g)(!0),c=Object(o.g)(!0),l=Object(o.a)((function(){return e.sidebarItems.length>0})),u=Object(o.a)((function(){return n.$themeConfig.keyPage&&!0===n.$themeConfig.keyPage.absoluteEncryption})),f=Object(o.a)((function(){var e=n.$site.themeConfig;return!1!==n.$page.frontmatter.navbar&&!1!==e.navbar&&(n.$title||e.logo||e.repo||e.nav||n.$themeLocaleConfig.nav)})),d=Object(o.a)((function(){var e={"no-navbar":!f.value,"sidebar-open":r.value,"no-sidebar":!l.value},t=(n.$frontmatter||{}).pageClass;return t&&(e[t]=!0),e})),p=function(){var e=n.$themeConfig.keyPage;if(e&&e.keys&&0!==e.keys.length){var t=e.keys;t=t.map((function(e){return e.toLowerCase()})),a.value=t&&t.indexOf(sessionStorage.getItem("key"))>-1}else a.value=!0},h=function(){var e=n.$frontmatter.keys;e&&0!==e.length?(e=e.map((function(e){return e.toLowerCase()})),s.value=e.indexOf(sessionStorage.getItem("pageKey".concat(window.location.pathname)))>-1):s.value=!0},g=Object(o.h)(e).showModule,m=Object(o.a)((function(){return!!c.value||g.value}));return Object(o.d)((function(){var e;n.$router.afterEach((function(){r.value=!1})),p(),h(),e=n.$frontmatter.home&&null==sessionStorage.getItem("firstLoad")?1e3:0,Object(A.setTimeout)((function(){c.value=!1,null==sessionStorage.getItem("firstLoad")&&sessionStorage.setItem("firstLoad",!1)}),e)})),{isSidebarOpen:r,absoluteEncryption:u,shouldShowNavbar:f,shouldShowSidebar:l,pageClasses:d,hasKey:p,hasPageKey:h,isHasKey:a,isHasPageKey:s,toggleSidebar:function(e){r.value="boolean"==typeof e?e:!r.value},firstLoad:c,recoShowModule:m}},watch:{$frontmatter:function(e,t){this.hasKey(),this.hasPageKey()}}}),D=(n(581),Object(c.a)(K,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-container",class:e.pageClasses},[e.absoluteEncryption?n("div",[n("transition",{attrs:{name:"fade"}},[e.isHasKey?n("div",[e.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),n("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[n("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),e.isHasPageKey?e._t("default"):n("Password",{attrs:{isPage:!0}})],2):n("Password")],1)],1):n("div",[n("transition",{attrs:{name:"fade"}},[n("Password",{directives:[{name:"show",rawName:"v-show",value:!e.firstLoad&&!e.isHasKey,expression:"!firstLoad && !isHasKey"}],key:"out",staticClass:"password-wrapper-out"})],1),e._v(" "),n("div",{class:{hide:e.firstLoad||!e.isHasKey}},[e.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":e.toggleSidebar}}):e._e(),e._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(t){return e.toggleSidebar(!1)}}}),e._v(" "),n("Sidebar",{attrs:{items:e.sidebarItems},on:{"toggle-sidebar":e.toggleSidebar}},[n("PersonalInfo",{attrs:{slot:"top"},slot:"top"}),e._v(" "),e._t("sidebar-bottom",null,{slot:"bottom"})],2),e._v(" "),n("Password",{directives:[{name:"show",rawName:"v-show",value:!e.isHasPageKey,expression:"!isHasPageKey"}],key:"in",staticClass:"password-wrapper-in",attrs:{isPage:!0}}),e._v(" "),n("div",{class:{hide:!e.isHasPageKey}},[e._t("default")],2)],1)],1)])}),[],!1,null,"130b300a",null));t.a=D.exports},523:function(e,t,n){"use strict";n(171),n(128),n(6),n(101);var o=n(168),r=n(56),a=n(169),i=n(505),s=Object(o.b)({components:{RecoIcon:a.b},props:{item:{required:!0}},setup:function(e,t){var n=Object(i.a)(),a=Object(o.h)(e).item,s=Object(o.a)((function(){return Object(r.d)(a.value.link)})),c=Object(o.a)((function(){return n.$site.locales?Object.keys(n.$site.locales).some((function(e){return e===s.value})):"/"===s.value}));return{link:s,exact:c,isExternal:r.f,isMailto:r.g,isTel:r.h}}}),c=n(7),l=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isExternal(e.link)?n("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[n("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[n("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.a=l.exports},525:function(e,t,n){"use strict";var o=n(3),r=n(174).trim;o({target:"String",proto:!0,forced:n(561)("trim")},{trim:function(){return r(this)}})},526:function(e,t,n){},527:function(e,t,n){},528:function(e,t,n){},529:function(e,t,n){},530:function(e,t,n){},531:function(e,t,n){},532:function(e,t,n){},533:function(e,t,n){},534:function(e,t,n){},535:function(e,t,n){},536:function(e,t,n){},537:function(e,t,n){},538:function(e,t,n){var o,r,a,i,s;o=n(576),r=n(539).utf8,a=n(577),i=n(539).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?i.stringToBytes(e):r.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var n=o.bytesToWords(e),c=8*e.length,l=1732584193,u=-271733879,f=-1732584194,d=271733878,p=0;p<n.length;p++)n[p]=16711935&(n[p]<<8|n[p]>>>24)|4278255360&(n[p]<<24|n[p]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var h=s._ff,g=s._gg,m=s._hh,v=s._ii;for(p=0;p<n.length;p+=16){var b=l,_=u,k=f,y=d;l=h(l,u,f,d,n[p+0],7,-680876936),d=h(d,l,u,f,n[p+1],12,-389564586),f=h(f,d,l,u,n[p+2],17,606105819),u=h(u,f,d,l,n[p+3],22,-1044525330),l=h(l,u,f,d,n[p+4],7,-176418897),d=h(d,l,u,f,n[p+5],12,1200080426),f=h(f,d,l,u,n[p+6],17,-1473231341),u=h(u,f,d,l,n[p+7],22,-45705983),l=h(l,u,f,d,n[p+8],7,1770035416),d=h(d,l,u,f,n[p+9],12,-1958414417),f=h(f,d,l,u,n[p+10],17,-42063),u=h(u,f,d,l,n[p+11],22,-1990404162),l=h(l,u,f,d,n[p+12],7,1804603682),d=h(d,l,u,f,n[p+13],12,-40341101),f=h(f,d,l,u,n[p+14],17,-1502002290),l=g(l,u=h(u,f,d,l,n[p+15],22,1236535329),f,d,n[p+1],5,-165796510),d=g(d,l,u,f,n[p+6],9,-1069501632),f=g(f,d,l,u,n[p+11],14,643717713),u=g(u,f,d,l,n[p+0],20,-373897302),l=g(l,u,f,d,n[p+5],5,-701558691),d=g(d,l,u,f,n[p+10],9,38016083),f=g(f,d,l,u,n[p+15],14,-660478335),u=g(u,f,d,l,n[p+4],20,-405537848),l=g(l,u,f,d,n[p+9],5,568446438),d=g(d,l,u,f,n[p+14],9,-1019803690),f=g(f,d,l,u,n[p+3],14,-187363961),u=g(u,f,d,l,n[p+8],20,1163531501),l=g(l,u,f,d,n[p+13],5,-1444681467),d=g(d,l,u,f,n[p+2],9,-51403784),f=g(f,d,l,u,n[p+7],14,1735328473),l=m(l,u=g(u,f,d,l,n[p+12],20,-1926607734),f,d,n[p+5],4,-378558),d=m(d,l,u,f,n[p+8],11,-2022574463),f=m(f,d,l,u,n[p+11],16,1839030562),u=m(u,f,d,l,n[p+14],23,-35309556),l=m(l,u,f,d,n[p+1],4,-1530992060),d=m(d,l,u,f,n[p+4],11,1272893353),f=m(f,d,l,u,n[p+7],16,-155497632),u=m(u,f,d,l,n[p+10],23,-1094730640),l=m(l,u,f,d,n[p+13],4,681279174),d=m(d,l,u,f,n[p+0],11,-358537222),f=m(f,d,l,u,n[p+3],16,-722521979),u=m(u,f,d,l,n[p+6],23,76029189),l=m(l,u,f,d,n[p+9],4,-640364487),d=m(d,l,u,f,n[p+12],11,-421815835),f=m(f,d,l,u,n[p+15],16,530742520),l=v(l,u=m(u,f,d,l,n[p+2],23,-995338651),f,d,n[p+0],6,-198630844),d=v(d,l,u,f,n[p+7],10,1126891415),f=v(f,d,l,u,n[p+14],15,-1416354905),u=v(u,f,d,l,n[p+5],21,-57434055),l=v(l,u,f,d,n[p+12],6,1700485571),d=v(d,l,u,f,n[p+3],10,-1894986606),f=v(f,d,l,u,n[p+10],15,-1051523),u=v(u,f,d,l,n[p+1],21,-2054922799),l=v(l,u,f,d,n[p+8],6,1873313359),d=v(d,l,u,f,n[p+15],10,-30611744),f=v(f,d,l,u,n[p+6],15,-1560198380),u=v(u,f,d,l,n[p+13],21,1309151649),l=v(l,u,f,d,n[p+4],6,-145523070),d=v(d,l,u,f,n[p+11],10,-1120210379),f=v(f,d,l,u,n[p+2],15,718787259),u=v(u,f,d,l,n[p+9],21,-343485551),l=l+b>>>0,u=u+_>>>0,f=f+k>>>0,d=d+y>>>0}return o.endian([l,u,f,d])})._ff=function(e,t,n,o,r,a,i){var s=e+(t&n|~t&o)+(r>>>0)+i;return(s<<a|s>>>32-a)+t},s._gg=function(e,t,n,o,r,a,i){var s=e+(t&o|n&~o)+(r>>>0)+i;return(s<<a|s>>>32-a)+t},s._hh=function(e,t,n,o,r,a,i){var s=e+(t^n^o)+(r>>>0)+i;return(s<<a|s>>>32-a)+t},s._ii=function(e,t,n,o,r,a,i){var s=e+(n^(t|~o))+(r>>>0)+i;return(s<<a|s>>>32-a)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=o.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?i.bytesToString(n):o.bytesToHex(n)}},539:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},540:function(e,t,n){},541:function(e,t,n){},557:function(e,t,n){"use strict";n.r(t);n(32),n(6),n(42),n(55),n(47),n(128);var o=n(168),r=n(56),a=n(559),i=n(505),s=Object(o.b)({name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:a.a},setup:function(e,t){return Object(i.a)().$options.components.SidebarLinks=n(557).default,{isActive:r.e}}}),c=(n(572),n(7)),l=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):n("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),n("DropdownTransition",[e.open||!e.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null).exports;var u=Object(o.b)({functional:!0,props:["item","sidebarDepth"],render:function(e,t){var n=t.parent,o=(n.$page,n.$site,n.$route),a=(n.$themeConfig,n.$themeLocaleConfig,t.props),i=a.item,s=(a.sidebarDepth,Object(r.e)(o,i.path)),c="auto"===i.type?s||i.children.some((function(e){return Object(r.e)(o,i.basePath+"#"+e.slug)})):s;return function(e,t,n,o){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:o,"sidebar-link":!0}},n)}(e,i.path,i.title||i.path,c)}}),f=(n(573),Object(c.a)(u,void 0,void 0,!1,null,null,null).exports);var d=Object(o.b)({name:"SidebarLinks",components:{SidebarGroup:l,SidebarLink:f},props:["items","depth","sidebarDepth"],setup:function(e,t){var n=Object(i.a)(),a=Object(o.h)(e).items,s=Object(o.g)(0),c=function(){var e=function(e,t){for(var n=0;n<t.length;n++){var o=t[n];if("group"===o.type&&o.children.some((function(t){return"page"===t.type&&Object(r.e)(e,t.path)})))return n}return-1}(n.$route,a.value);e>-1&&(s.value=e)},l=function(){var e=[].slice.call(document.querySelectorAll(".header-anchor")).filter((function(e){return-1!=decodeURIComponent(n.$route.fullPath).indexOf(decodeURIComponent(e.hash))}));null==e||e.length<1||null==e[0].offsetTop||setTimeout((function(){window.scrollTo(0,e[0].offsetTop+160)}),100)},u=function(){var e=document.getElementsByClassName("sidebar")[0],t=document.getElementsByClassName("active sidebar-link")[1];if(null!=t&&null!=t&&null!=t.offsetTop||(t=document.getElementsByClassName("active sidebar-link")[0]),null!=t&&null!=t&&null!=t.offsetTop){var n=e.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=t.offsetTop,r=t.offsetTop+t.offsetHeight,a=e.scrollTop;r<=n+a||(e.scrollTop=r+5-n),o>=a||(e.scrollTop=o-5)}};return c(),Object(o.d)((function(){!function(){var e=decodeURIComponent(n.$route.fullPath);if(e&&""!=e)for(var t=[].slice.call(document.querySelectorAll(".sidebar-link")),o=0;o<t.length;o++)if(-1!=decodeURIComponent(t[o].getAttribute("href")).indexOf(e))return t[o].click(),void l()}(),u()})),Object(o.e)((function(){return u()})),{openGroupIndex:s,refreshIndex:c,toggleGroup:function(e){n.openGroupIndex=e===n.openGroupIndex?-1:e},isActive:function e(t){return e(n.$route,t.regularPath)}}},watch:{$route:function(){this.refreshIndex()}}}),p=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,o){return n("li",{key:o},["group"===t.type?n("SidebarGroup",{attrs:{item:t,open:o===e.openGroupIndex,collapsable:t.collapsable||t.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(o)}}}):n("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:t}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=p.exports},558:function(e,t,n){"use strict";n(48);var o=n(168),r=n(169),a=n(127),i=n(505),s=Object(o.b)({components:{RecoIcon:r.b},setup:function(e,t){var n=Object(i.a)();return{socialLinks:Object(o.a)((function(){return(n.$themeConfig.blogConfig&&n.$themeConfig.blogConfig.socialLinks||[]).map((function(e){return e.color||(e.color=Object(a.b)()),e}))}))}}}),c=(n(575),n(7)),l=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"personal-info-wrapper"},[e.$themeConfig.authorAvatar?n("img",{staticClass:"personal-img",attrs:{src:e.$withBase(e.$themeConfig.authorAvatar),alt:"author-avatar"}}):e._e(),e._v(" "),e.$themeConfig.author?n("h3",{staticClass:"name"},[e._v("\n    "+e._s(e.$themeConfig.author)+"\n  ")]):e._e(),e._v(" "),n("div",{staticClass:"num"},[n("div",[n("h3",[e._v(e._s(e.$recoPosts.length))]),e._v(" "),n("h6",[e._v(e._s(e.$recoLocales.article))])]),e._v(" "),n("div",[n("h3",[e._v(e._s(e.$tags.list.length))]),e._v(" "),n("h6",[e._v(e._s(e.$recoLocales.tag))])])]),e._v(" "),n("ul",{staticClass:"social-links"},e._l(e.socialLinks,(function(e,t){return n("li",{key:t,staticClass:"social-item"},[n("reco-icon",{style:{color:e.color},attrs:{icon:e.icon,link:e.link}})],1)})),0),e._v(" "),n("hr")])}),[],!1,null,"39576ba9",null);t.a=l.exports},559:function(e,t,n){"use strict";var o=n(168),r=Object(o.b)({name:"DropdownTransition",setup:function(e,t){return{setHeight:function(e){e.style.height=e.scrollHeight+"px"},unsetHeight:function(e){e.style.height=""}}}}),a=(n(565),n(7)),i=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.a=i.exports},561:function(e,t,n){var o=n(102).PROPER,r=n(4),a=n(175);e.exports=function(e){return r((function(){return!!a[e]()||"​᠎"!=="​᠎"[e]()||o&&a[e].name!==e}))}},562:function(e,t,n){"use strict";n(526)},563:function(e,t,n){"use strict";n(527)},564:function(e,t,n){"use strict";var o=n(3),r=n(1),a=n(129),i=n(58),s=n(37),c=n(24),l=n(172),u=n(79),f=n(103)("splice"),d=r.TypeError,p=Math.max,h=Math.min;o({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,o,r,f,g,m,v=c(this),b=s(v),_=a(e,b),k=arguments.length;if(0===k?n=o=0:1===k?(n=0,o=b-_):(n=k-2,o=h(p(i(t),0),b-_)),b+n-o>9007199254740991)throw d("Maximum allowed length exceeded");for(r=l(v,o),f=0;f<o;f++)(g=_+f)in v&&u(r,f,v[g]);if(r.length=o,n<o){for(f=_;f<b-o;f++)m=f+n,(g=f+o)in v?v[m]=v[g]:delete v[m];for(f=b;f>b-o+n;f--)delete v[f-1]}else if(n>o)for(f=b-o;f>_;f--)m=f+n-1,(g=f+o-1)in v?v[m]=v[g]:delete v[m];for(f=0;f<n;f++)v[f+_]=arguments[f+2];return v.length=b-o+n,r}})},565:function(e,t,n){"use strict";n(528)},566:function(e,t,n){"use strict";n(529)},567:function(e,t,n){"use strict";n(530)},568:function(e,t){function n(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function o(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,r){if(!n(t))return;function a(t){if(r.context){var n=t.path||t.composedPath&&t.composedPath();n&&n.length>0&&n.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var n=0,o=t.length;n<o;n++)try{if(e.contains(t[n]))return!0;if(t[n].contains(e))return!1}catch(e){return!1}return!1}(r.context.popupItem,n)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:a,callback:t.value};const i="ontouchstart"in document.documentElement?"touchstart":"click";!o(r)&&document.addEventListener(i,a)},update:function(e,t){n(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,n){const r="ontouchstart"in document.documentElement?"touchstart":"click";!o(n)&&e.__vueClickOutside__&&document.removeEventListener(r,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},569:function(e,t,n){"use strict";n(531)},570:function(e,t,n){"use strict";n(532)},571:function(e,t,n){"use strict";n(533)},572:function(e,t,n){"use strict";n(534)},573:function(e,t,n){"use strict";n(535)},574:function(e,t,n){"use strict";n(536)},575:function(e,t,n){"use strict";n(537)},576:function(e,t){var n,o;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&o.rotl(e,8)|4278255360&o.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=o.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,o=0;n<e.length;n++,o+=8)t[o>>>5]|=e[n]<<24-o%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],o=0;o<e.length;o+=3)for(var r=e[o]<<16|e[o+1]<<8|e[o+2],a=0;a<4;a++)8*o+6*a<=8*e.length?t.push(n.charAt(r>>>6*(3-a)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],o=0,r=0;o<e.length;r=++o%4)0!=r&&t.push((n.indexOf(e.charAt(o-1))&Math.pow(2,-2*r+8)-1)<<2*r|n.indexOf(e.charAt(o))>>>6-2*r);return t}},e.exports=o},577:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},578:function(e,t,n){"use strict";n(540)},579:function(e,t,n){var o="undefined"!=typeof global&&global||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new a(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(580),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof global&&global.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof global&&global.clearImmediate||this&&this.clearImmediate},580:function(e,t){!function(e,t){"use strict";if(!e.setImmediate){var n,o,r,a,i,s=1,c={},l=!1,u=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?n=function(e){process.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){p(e.data)},n=function(e){r.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(o=u.documentElement,n=function(e){var t=u.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):n=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",i=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),n=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),o=0;o<t.length;o++)t[o]=arguments[o+1];var r={callback:e,args:t};return c[s]=r,n(s),s++},f.clearImmediate=d}function d(e){delete c[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{d(e),l=!1}}}}}("undefined"==typeof self?"undefined"==typeof global?this:global:self)},581:function(e,t,n){"use strict";n(541)}}]);