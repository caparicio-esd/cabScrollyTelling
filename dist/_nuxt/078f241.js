(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{282:function(e,r,t){"use strict";t.r(r);var n=t(6),o=(t(44),t(57),t(1).a.extend({name:"HeadDefault",data:function(){return{scrollBehaviour:{lastScroll:-1}}},methods:{initHeaderScrollBehaviour:function(){var e=this;window;window.onscroll=function(){scrollY>e.scrollBehaviour.lastScroll?e.hideHeader():e.showHeader(),e.scrollBehaviour.lastScroll=scrollY}},hideHeader:function(){Object.assign(this.$refs.header.style,{transform:"translateY(-100%)",transition:"transform 300ms ease"})},showHeader:function(){Object.assign(this.$refs.header.style,{transform:"",transition:"transform 300ms ease"})}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,setTimeout((function(){}),1);case 2:e.initHeaderScrollBehaviour();case 3:case"end":return r.stop()}}),r)})))()}})),l=t(45),component=Object(l.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("header",{ref:"header",staticClass:"header fixed top-0 left-0 w-full text-white"},[t("div",{staticClass:"header_holder xl:container xl:m-auto py-2"},[e._v("header...")])])}),[],!1,null,null,null);r.default=component.exports}}]);