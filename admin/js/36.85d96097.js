(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"104f":function(t,e,n){},6677:function(t,e,n){"use strict";n("104f")},8639:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",[t.c.canAccessModule(t.collection,t.profile.roles)?a("div",{ref:"main"},[a("q-toolbar",[a("div",[a("div",{staticClass:" bold-font text-h5"},[t._v(t._s(t.c.t("Users"))+"\n                    "),t.loading?a("q-spinner-dots",{staticClass:"q-ml-sm",attrs:{color:"primary"}}):t._e()],1)]),a("q-space"),t.c.canUpdate(t.collection,t.profile.roles)?a("q-btn",{attrs:{color:"primary",flat:"","no-caps":"",icon:"post_add",label:t.c.t("New")},on:{click:function(e){t.create(),t.dialog=!0}}}):t._e()],1),a("q-separator"),a("q-toolbar",[a("q-input",{staticClass:"fit",attrs:{dense:"","bg-color":"white",outlined:"",placeholder:t.c.t("Search")+"..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("q-space"),a("q-btn",{attrs:{flat:"",round:"",icon:"refresh"},on:{click:function(e){t.search="",t.filterText="",t.getAll()}}}),t.c.canPrint(t.collection,t.profile.roles)?a("q-btn",{attrs:{flat:"",round:"",icon:"print"},on:{click:function(e){return t.print("print-list")}}}):t._e(),a("q-btn",{attrs:{flat:"",round:"",icon:"date_range"}},[a("q-menu",[a("TimeRange",{on:{reloadTimeRange:t.filterTime}})],1)],1),a("q-btn",{attrs:{flat:"",round:"",icon:"filter_alt"},on:{click:function(e){t.showFilter=!t.showFilter}}})],1),a("q-separator"),t.showFilter?a("q-toolbar",[a("FilterBy",{attrs:{propObjects:t.filters},on:{reloadFilter:t.fillFilter}}),a("q-space")],1):t._e(),a("q-separator"),a("q-list",{attrs:{separator:""}},t._l(t.fsearch,(function(e,n){return a("q-item",{key:e._id,attrs:{clickable:"",active:n==t.selectedIndex,"active-class":"bg-info"},on:{click:function(a){t.select(e._id),t.selectedIndex=n,t.dialog=!0}}},[a("q-item-section",{attrs:{avatar:""}},[a("Dot",{key:t.componentKey,staticClass:"q-mr-sm",attrs:{propText:e.status}})],1),a("q-item-section",[a("q-item-label",{staticClass:"bold-font text-subtitle1",attrs:{lines:"1"}},[t._v(t._s(e.name))]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[t._v(t._s(e.username))])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.c.dateDiff(new Date,new Date(e.date_updated)))+"\n                        "+t._s(t.c.t("days"))+"\n                    ")]),a("q-chip",{staticClass:"bg-white",attrs:{size:"sm",outline:""}},[t._v(t._s(e.type))])],1)],1)})),1),a("q-separator"),a("div",{staticClass:"q-pb-lg"},[t._v(" ")])],1):a("div",[a("div",{staticClass:"absolute-center"},[a("q-img",{attrs:{width:"25vw",src:n("5183")}}),a("div",{staticClass:"text-center q-my-lg"},[t._v(t._s(t.c.t("Access Denied")))])],1)]),a("q-dialog",{ref:"popup",staticClass:"q-pb-lg",attrs:{position:"bottom"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("div",{staticClass:"bg-white",staticStyle:{height:"80vh"}},[a("q-toolbar",[a("div",{staticClass:"row"},[a("q-btn",{attrs:{flat:"","no-caps":"",color:"primary",icon:"visibility",label:t.c.t("View")},on:{click:function(e){return t.showTab("info")}}}),a("q-btn",{attrs:{flat:"","no-caps":"",color:"primary",icon:"edit",label:t.c.t("Edit or Create")},on:{click:function(e){return t.showTab("upsert")}}}),a("q-btn",{attrs:{flat:"","no-caps":"",color:"primary",icon:"task",label:t.c.t("Tasks")},on:{click:function(e){return t.showTab("task")}}})],1)]),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"info"}},[a("Info",{key:t.componentKey,attrs:{propSelected:t.selected},on:{reloadRemove:function(e){return t.getAll()}}})],1),a("q-tab-panel",{attrs:{name:"upsert"}},[t.selected?a("Upsert",{key:t.componentKey,attrs:{propSelected:t.selected},on:{reloadUpsert:t.fillUpsert}}):t._e()],1),a("q-tab-panel",{attrs:{name:"task"}},[a("div",{staticClass:"text-caption"},[t._v(t._s(t.c.t("Task")))]),a("div",{staticClass:"text-h6 bold-font ellipis q-mb-md"},[t._v(t._s(t.selected.title))]),a("Task",{key:t.componentKey,attrs:{propCollection:t.collection,propId:t.selected._id}})],1)],1)],1)]),a("div",{staticClass:"absolute-bottom"},[a("BarStats",{key:t.componentKey,attrs:{propCount:t.fsearch.length,propSum:t.fsearch.length}})],1),a("div",{ref:"print-list",staticClass:"print-only"},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.c.t("Users")))]),a("DataTable",{key:t.componentKey,attrs:{propData:t.fsearch,propVisibleColumns:["title","lang","owner","date_updated"]}})],1)],1)},o=[],r=(n("e260"),n("d3b7"),n("e6cf"),n("3ca3"),n("ddb0"),n("4de4"),n("ac1f"),n("841c"),n("caad"),n("2532"),n("d81d"),n("7db0"),n("c740"),n("bd4c")),i={name:"ListAll",components:{TimeRange:function(){return n.e(1).then(n.bind(null,"e19d"))},FilterBy:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"2d2e"))},FilterByCategory:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"74db"))},Info:function(){return n.e(1).then(n.bind(null,"943a"))},Upsert:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"0836"))},Task:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"43fe"))},Dot:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"9f7a"))},BarStats:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"9fda"))},DataTable:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"1fdb"))}},data:function(){return{loading:!1,c:this.$common,api:null,collection:"user",objects:[],selected:{id:null,title:null},selectedIndex:0,title:"",filterText:"",search:"",splitterModel:33,columns:[],visibleColumns:[],componentKey:0,tab:"info",timeFilter:null,filters:[],dialog:!1,showFilter:!1,page:1,offset:20}},computed:{profile:function(){return this.$store.state.user.profile},fsearch:function(){var t=this,e=t.objects;if(t.timeFilter){var n=t.timeFilter,a=new Date(n.from),o=new Date(n.to);e=e.filter((function(t){return r["b"].isBetweenDates(t.date_created,a,o)}))}t.filterText&&""!=t.filterText&&(e=e.filter((function(e){var n=t.filterText.toLowerCase(),a=e.type?e.type.toLowerCase():"",o=e.status?e.status.toLowerCase():"",r=e.category?e.category.toLowerCase():"",i=e.groupname?e.groupname.toLowerCase():"",l=e.lang?e.lang.toLowerCase():"",s=e.category_slug?e.category_slug.toLowerCase():"";return a==n||o==n||r==n||i==n||l==n||s==n})));var i=t.search.toLowerCase();return""==i?e:e.filter((function(t){var e=t.username?t.username.toLowerCase():"",n=t.slug?t.slug.toLowerCase():"";return e.includes(i)||n.includes(i)}))}},mounted:function(){},created:function(){var t=this;t.api=new t.$api(t.collection),t.api.setDomain(t.profile.domain),t.page=1,t.offset=20,t.getAll(),t.initFilter()},methods:{getAll:function(){var t=this;t.loading=!0,t.api.getAll(t.collection).then((function(e){if(console.log(""),e.data.count<=0)t.loading=!1;else{t.objects=t.orm(e.data.objects);var n=t.$route.params.id,a=t.$route.params.action;t.select(n,a),t.loading=!1,t.forceRenderer()}}))},orm:function(t){var e=this,n=t;if(!Array.isArray(n))return[];if(n.length<=0)return[];var a=n;return a=e.c.canViewMeOnly(e.collection,e.profile.roles)?n.filter((function(t){return t.owner==e.profile.username})):n,a=a.map((function(t){var e=t;return e})),console.log(""),a||[]},initFilter:function(){var t=this;t.filters=[{key:t.collection+"-type",text:t.c.t("Type")}]},setCategory:function(t){var e=this;console.log(""),e.filterText=t&&t.title?t.title:""},select:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this,a=n.objects.length>0?n.objects.find((function(e){return e._id==t})):{};n.selected=a||n.objects[0];var o=n.objects.length>0?n.objects.findIndex((function(e){return e._id==t})):0;n.selectedIndex=o,e?n.showTab(e):n.showTab("info"),n.forceRenderer()},fillUpsert:function(t){var e=this;e.getAll(),e.select(t)},showTab:function(t){var e=this;e.tab=t,e.search="",e.filterText=""},create:function(){var t=this;t.selected={id:null,title:"",slug:""},t.selectedIndex=-1,t.tab="upsert",t.forceRenderer()},filterTime:function(t){var e=this;e.timeFilter=t},fillFilter:function(t){var e=this;e.filterText=t},forceRenderer:function(){var t=this;t.$forceUpdate(),t.componentKey+=1},print:function(t){var e=this,n=e.$refs[t];n&&(e.c.print(n),e.forceRenderer())},exportCSV:function(){var t=this;t.c.exportCSV(t.fsearch,t.columns,t.collection)}}},l=i,s=(n("6677"),n("2877")),c=n("4d5a"),u=n("068f"),d=n("65c6"),f=n("8380"),p=n("2c91"),b=n("9c40"),m=n("eb85"),h=n("27f9"),v=n("4e73"),g=n("1c1c"),q=n("66e5"),y=n("4074"),w=n("0170"),_=n("0016"),C=n("b047"),T=n("24e8"),k=n("adad"),x=n("823b"),Q=n("eebe"),F=n.n(Q),D=Object(s["a"])(l,a,o,!1,null,null,null);e["default"]=D.exports;F()(D,"components",{QLayout:c["a"],QImg:u["a"],QToolbar:d["a"],QSpinnerDots:f["a"],QSpace:p["a"],QBtn:b["a"],QSeparator:m["a"],QInput:h["a"],QMenu:v["a"],QList:g["a"],QItem:q["a"],QItemSection:y["a"],QItemLabel:w["a"],QIcon:_["a"],QChip:C["a"],QDialog:T["a"],QTabPanels:k["a"],QTabPanel:x["a"]})}}]);