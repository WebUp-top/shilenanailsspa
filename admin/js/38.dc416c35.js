(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{5307:function(t,a,e){t.exports=e.p+"img/facebook.47b6a07e.png"},b833:function(t,a,e){t.exports=e.p+"img/zalo.94c43193.jpeg"},d64b:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("q-page",{staticClass:"q-pa-md"},[o("q-img",{staticClass:"orientation-landscape",attrs:{src:e("cf05"),width:"15vh"}}),o("q-img",{staticClass:"orientation-portrait",attrs:{src:e("9ecf"),ratio:3}}),o("q-separator",{staticClass:"q-mt-md"}),o("div",{staticClass:"row q-col-gutter-md q-mt-md"},[o("div",{staticClass:"col-3 col-md-2"},[o("q-card",{attrs:{flat:"",bordered:""}},[o("img",{attrs:{src:e("5307")}}),o("q-card-actions",[o("q-btn",{staticClass:"full-width",attrs:{push:"",color:"primary",type:"a",href:t.selected.contact_facebook,target:"_blank",label:"Facebook"}})],1)],1)],1),o("div",{staticClass:"col-3 col-md-2"},[o("q-card",{attrs:{flat:"",bordered:""}},[o("img",{attrs:{src:e("b833")}}),o("q-card-actions",[o("q-btn",{staticClass:"full-width",attrs:{push:"",color:"primary",type:"a",href:t.selected.contact_zalo,target:"_blank",label:"Zalo"}})],1)],1)],1)])],1)},c=[],s=(e("7db0"),{name:"Chat",data:function(){return{c:this.$common,api:null,collection:"site",objects:[],selected:{contact_facebook:"",contact_zalo:""}}},created:function(){var t=this;t.api=new t.$api(t.collection),t.getAll()},methods:{getAll:function(){var t=this;t.loading=!0,t.api.getAll(t.collection).then((function(a){console.log(""),a.data.count<=0?t.loading=!1:(t.objects=a.data.objects,t.selected=t.objects?t.objects.find((function(t){return"home-vi"==t.slug.toLowerCase()})):{},console.log(""))}))}}}),l=s,n=e("2877"),r=e("9989"),i=e("068f"),d=e("eb85"),p=e("f09f"),b=e("4b7e"),f=e("9c40"),u=e("eebe"),m=e.n(u),g=Object(n["a"])(l,o,c,!1,null,null,null);a["default"]=g.exports;m()(g,"components",{QPage:r["a"],QImg:i["a"],QSeparator:d["a"],QCard:p["a"],QCardActions:b["a"],QBtn:f["a"]})}}]);