(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcba27aa","chunk-d947be3c","chunk-013b1b56","chunk-2d2174de"],{"02f4":function(t,e,i){var n=i("4588"),s=i("be13");t.exports=function(t){return function(e,i){var r,a,o=String(s(e)),c=n(i),l=o.length;return c<0||c>=l?t?"":void 0:(r=o.charCodeAt(c),r<55296||r>56319||c+1===l||(a=o.charCodeAt(c+1))<56320||a>57343?t?o.charAt(c):r:t?o.slice(c,c+2):a-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,i){"use strict";var n=i("02f4")(!0);t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},"05ec":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({attrs:{icon:"",dark:""}},Object.assign({},s,n)),[i("v-icon",[t._v("add")])],1)]}}],null,!0)},[i("span",[t._v("Add Job")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-text",[i("v-container",{attrs:{"grid-list-sm":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Launch Job")])])],1),i("v-flex",{attrs:{xs12:""}},[i("v-select",{attrs:{disabled:t.advanced_checkbox,items:t.items,"item-text":"job_name",label:"Jobs","return-object":"",required:""},model:{value:t.selected_job,callback:function(e){t.selected_job=e},expression:"selected_job"}})],1),i("v-flex",{attrs:{xs12:""}},[i("v-textarea",{attrs:{outline:"",label:"data"},model:{value:t.job_route_data,callback:function(e){t.job_route_data=e},expression:"job_route_data"}})],1),i("v-flex",{attrs:{xs12:"",md3:"",lg3:""}},[i("v-checkbox",{attrs:{label:"Advance"},model:{value:t.advanced_checkbox,callback:function(e){t.advanced_checkbox=e},expression:"advanced_checkbox"}})],1),i("v-flex",{attrs:{xs12:"",md9:"",lg9:""}},[i("v-text-field",{attrs:{label:"Task Route",placeholder:"Advance (not needed)",disabled:!t.advanced_checkbox,outline:""},model:{value:t.advanced_task_route,callback:function(e){t.advanced_task_route=e},expression:"advanced_task_route"}})],1)],1)],1),i("small",[t._v("*indicates required field")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.clicked_launch}},[t._v("Launch")])],1)],1)],1)},s=[],r=i("f499"),a=i.n(r),o={methods:{clicked_launch:function(){var t=JSON.parse(this.job_route_data);if(t){console.log("SDS");var e=null,i=null,n=null;this.advanced_checkbox?(e=this.advanced_task_route,i="Anon Job: "+e):(e=this.selected_job.route,i=this.selected_job.job_name),n="Launcher";var s={route:"bd.@md.slave.job.add",data:{job_data:{name:i},tasks_data:[{name:n,route:e,data:t}]}};console.log("JOB LAUNCH MSG: "+a()(s));var r=this.$socket.emit("forward",s);r.connected&&(this.dialog=!1)}}},data:function(){return{advanced_checkbox:!1,advanced_task_route:"",job_route_data:"{}",selected_job:null,items:[{job_name:"Swing Trading",route:"bd.sd.@BTV1.trade.swing",rdata:{},value:"1"},{job_name:"Create new instagram bots",route:"bd.sd.@IGFV1.^bot.users.create",rdata:{msgs:[{msg:4},{msg:5},{msg:6}]},value:"2"}],dialog:!1}}},c=o,l=i("2877"),u=i("6544"),h=i.n(u),d=i("8336"),f=i("b0af"),v=i("99d9"),p=i("12b2"),b=i("ac7c"),m=i("a523"),g=i("169a"),_=i("0e8f"),x=i("132d"),w=i("a722"),k=i("b56d"),y=i("9910"),T=i("2677"),$=i("a844"),C=i("3a2f"),I=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=I.exports;h()(I,{VBtn:d["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:p["a"],VCheckbox:b["a"],VContainer:m["a"],VDialog:g["a"],VFlex:_["a"],VIcon:x["a"],VLayout:w["a"],VSelect:k["a"],VSpacer:y["a"],VTextField:T["a"],VTextarea:$["a"],VTooltip:C["a"]})},"0798":function(t,e,i){"use strict";i("a57f");var n=i("9d26"),s=i("b64a"),r=i("98a1"),a=i("2b0e"),o=a["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=i("58df");e["a"]=Object(c["a"])(s["a"],r["a"],o).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(n["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(n["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,n=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[n]):n}})},"0832":function(t,e,i){},1999:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("jobs_tasks_tables",{attrs:{headers_task:t.headers_task,headers_job:t.headers}})},s=[],r=i("9463"),a={components:{jobs_tasks_tables:r["default"]},mounted:function(){},data:function(){return{dialog:!1,headers_task:[{text:"Id",align:"left",sortable:!1,value:"id"},{text:"Name",align:"left",sortable:!1,value:"name"},{text:"End",align:"left",value:"time_completed",sortable:!0},{text:"Status",align:"left",value:"status",sortable:!0}],headers:[{text:"Id",align:"left",sortable:!1,value:"id"},{text:"Name",align:"left",value:"name",sortable:!1},{text:"Stage",value:"stage",sortable:!1},{text:"Status",value:"status",sortable:!1}]}}},o=a,c=i("2877"),l=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=l.exports},"214f":function(t,e,i){"use strict";i("b0c5");var n=i("2aba"),s=i("32e9"),r=i("79e5"),a=i("be13"),o=i("2b4c"),c=i("520a"),l=o("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var d=o(t),f=!r(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),v=f?!r(function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[l]=function(){return i}),i[d](""),!e}):void 0;if(!f||!v||"replace"===t&&!u||"split"===t&&!h){var p=/./[d],b=i(a,d,""[t],function(t,e,i,n,s){return e.exec===c?f&&!s?{done:!0,value:p.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),m=b[0],g=b[1];n(String.prototype,t,m),s(RegExp.prototype,d,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"386d":function(t,e,i){"use strict";var n=i("cb7c"),s=i("83a1"),r=i("5f1b");i("214f")("search",1,function(t,e,i,a){return[function(i){var n=t(this),s=void 0==i?void 0:i[e];return void 0!==s?s.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=a(i,t,this);if(e.done)return e.value;var o=n(t),c=String(this),l=o.lastIndex;s(l,0)||(o.lastIndex=0);var u=r(o,c);return s(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]})},"520a":function(t,e,i){"use strict";var n=i("0bfb"),s=RegExp.prototype.exec,r=String.prototype.replace,a=s,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(a=function(t){var e,i,a,u,h=this;return l&&(i=new RegExp("^"+h.source+"$(?!\\s)",n.call(h))),c&&(e=h[o]),a=s.call(h,t),c&&a&&(h[o]=h.global?a.index+a[0].length:e),l&&a&&a.length>1&&r.call(a[0],i,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),t.exports=a},"557a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-toolbar",{attrs:{color:"indigo",dark:""}},[i("v-toolbar-title",[i("h1",[t._v("Active Schedule")])]),i("v-spacer"),i("scheduled_comp")],1),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.$store.getters.schedules},scopedSlots:t._u([{key:"no-data",fn:function(){return[i("v-alert",{attrs:{value:!0,color:"error",icon:"error"},on:{click:t.testBtn}},[t._v("\n            No active schedules \n          ")])]},proxy:!0},{key:"items",fn:function(e){return[i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.group_id))]),i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.run_times))])]}}])})],1)},s=[],r=i("f499"),a=i.n(r),o=i("c5c9"),c={methods:{testBtn:function(){console.log("BELOW "),console.log(a()(this.$store.getters.schedules))}},data:function(){return{headers:[{text:"Id",align:"left",sortable:!1,value:"group_id"},{text:"Name",align:"left",sortable:!1,value:"name"},{text:"Run Time",align:"left",value:"run_times",sortable:!1}]}},components:{scheduled_comp:o["default"]}},l=c,u=i("2877"),h=i("6544"),d=i.n(h),f=i("0798"),v=i("b0af"),p=i("8fea"),b=i("9910"),m=i("71d9"),g=i("2a7f"),_=Object(u["a"])(l,n,s,!1,null,null,null);e["default"]=_.exports;d()(_,{VAlert:f["a"],VCard:v["a"],VDataTable:p["a"],VSpacer:b["a"],VToolbar:m["a"],VToolbarTitle:g["a"]})},"5f1b":function(t,e,i){"use strict";var n=i("23c6"),s=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var r=i.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"71a3":function(t,e,i){"use strict";var n=i("2464"),s=i("0d01"),r=i("6a18"),a=i("80d2"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e["a"]={name:"v-tab",mixins:[s["a"],Object(n["a"])("tabGroup"),r["a"]],props:{ripple:{type:[Boolean,Object],default:!0}},computed:{classes:function(){return o({"v-tabs__item":!0,"v-tabs__item--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),this.$emit("click",t),this.to||this.toggle()},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link){var e="_vnode.data.class."+this.activeClass;this.$nextTick(function(){Object(a["j"])(t.$refs.link,e)&&t.toggle()})}}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.data,n=this.disabled?"div":e.tag;return i.ref="link",t("div",{staticClass:"v-tabs__div"},[t(n,i,this.$slots.default)])}}},"7e16":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tabs",{attrs:{"fixed-tabs":""},model:{value:t.cTab,callback:function(e){t.cTab=e},expression:"cTab"}},[t._l(t.tabs,function(e){return i("v-tab",{key:e.id,on:{click:function(i){return t.switchTab(e.id,"click")}}},[t._v("\n    "+t._s(e.title)+"\n  ")])}),i("v-tabs-items",{model:{value:t.cTab,callback:function(e){t.cTab=e},expression:"cTab"}},[i("v-tab-item",[i("jobs_all")],1),i("v-tab-item",{attrs:{v:""}},[i("scheduled_table")],1)],1)],2)],1)},s=[],r=(i("a481"),i("e814")),a=i.n(r),o=i("1999"),c=i("557a"),l={data:function(){return{cTab:0,tabs:[{title:"All Jobs",key:"all-jobs",id:0},{title:"Scheduled",key:"scheduled",id:1}]}},components:{jobs_all:o["default"],scheduled_table:c["default"]},mounted:function(){var t=this.$route.query["tab"];if(t){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e]["key"]==t){this.cTab=e;break}console.log("tab"+this.cTab)}this.switchTab(this.cTab,"load")},methods:{switchTab:function(t,e){if("load"==e)void 0!==t&&this.tabs.length-1>=a()(t)||(t=0),this.cTab=t;else if("click"==e){this.cTab=t;var i=this.tabs[this.cTab]["key"];this.$router.replace(window.location.pathname+"?tab="+i)}}}},u=l,h=i("2877"),d=i("6544"),f=i.n(d),v=i("71a3"),p=i("c671"),b=i("fe57"),m=i("aac8"),g=Object(h["a"])(u,n,s,!1,null,null,null);e["default"]=g.exports;f()(g,{VTab:v["a"],VTabItem:p["a"],VTabs:b["a"],VTabsItems:m["a"]})},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},9463:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg8:""}},[i("v-card",[i("v-toolbar",{attrs:{color:"indigo",dark:""}},[i("v-toolbar-title",[i("h1",[t._v("Jobs")])]),i("v-spacer"),i("v-chip",{attrs:{close:"",color:"success","text-color":"white"},on:{input:function(e){return t.removeChip(1)}},model:{value:t.completed_chip,callback:function(e){t.completed_chip=e},expression:"completed_chip"}},[i("v-avatar",[i("v-icon",[t._v("check_circle")])],1),t._v("\n        Completed\n      ")],1),i("v-chip",{attrs:{close:"",color:"error","text-color":"white"},on:{input:function(e){return t.removeChip(2)}},model:{value:t.error_chip,callback:function(e){t.error_chip=e},expression:"error_chip"}},[i("v-avatar",[i("v-icon",[t._v("error")])],1),t._v("\n       Error \n      ")],1),i("v-chip",{attrs:{close:"",color:"primary","text-color":"white"},on:{input:function(e){return t.removeChip(0)}},model:{value:t.inprogress_chip,callback:function(e){t.inprogress_chip=e},expression:"inprogress_chip"}},[i("v-avatar",[i("v-icon",[t._v("autorenew")])],1),t._v("\n       In-Progress\n      ")],1),i("launch_job_btn")],1),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers_job,items:t.$store.getters.filtered_jobs,pagination:t.job_pagination},on:{"update:pagination":function(e){t.job_pagination=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[i("v-alert",{attrs:{value:!0,color:"error",icon:"error"}},[t._v("\n            No Jobs to track\n          ")])]},proxy:!0},{key:"items",fn:function(e){return[i("tr",{on:{click:function(i){return t.showJobTasks(e.item.id)}}},[i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.id))]),i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),i("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.stage))]),i("td",{staticClass:"text-xs-left"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var s=n.on;return[i("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:1==e.item.status,expression:"props.item.status==1"}],staticClass:"mr-2",attrs:{color:"success"}},s),[t._v("\n               check \n              ")]),i("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:2==e.item.status,expression:"props.item.status==2"}],staticClass:"mr-2",attrs:{color:"error"}},s),[t._v("\n                error\n              ")]),i("font-awesome-icon",t._g({directives:[{name:"show",rawName:"v-show",value:0==e.item.status,expression:"props.item.status==0"}],style:{color:"#2196f3"},attrs:{icon:"circle-notch",size:"2x",spin:"","font-awesome-icon":""}},s))]}}],null,!0)},[i("span",[t._v(t._s(e.item.msg)+" ")])])],1)])]}}])})],1)],1),i("v-flex",{attrs:{x12:"",sm12:"",md4:"",lg4:""}},[i("v-card",[i("v-toolbar",{attrs:{color:"indigo",dark:""}},[i("v-toolbar-title",[t._v("Job "+t._s(t.$store.getters.cjob_id)+"'s Tasks")]),i("v-spacer"),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:""}},n),[i("v-icon",{on:{click:t.stop_job}},[t._v("stop")])],1)]}}])},[i("span",[t._v("Stop ALL job's tasks")])])],1),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers_task,items:t.$store.getters.job_tasks,pagination:t.task_pagination},on:{"update:pagination":function(e){t.task_pagination=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[i("v-alert",{attrs:{value:!0,color:"error",icon:"error"}},[t._v("\n              Select a job to view its tasks\n            ")])]},proxy:!0},{key:"items",fn:function(e){return[i("td",[t._v(t._s(e.item.id))]),i("td",[t._v(t._s(e.item.name))]),i("td",[t._v(t._s(e.item.time_completed))]),i("td",{staticClass:"px-0"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var s=n.on;return[i("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:1==e.item.status,expression:"props.item.status==1"}],staticClass:"mr-2",attrs:{color:"success"}},s),[t._v("\n               check \n              ")]),i("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:2==e.item.status,expression:"props.item.status==2"}],staticClass:"mr-2",attrs:{color:"error"}},s),[t._v("\n                error\n              ")]),i("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:3==e.item.status,expression:"props.item.status==3"}],staticClass:"mr-2",attrs:{color:"warning"}},s),[t._v("\n                warning\n              ")]),i("font-awesome-icon",t._g({directives:[{name:"show",rawName:"v-show",value:0==e.item.status,expression:"props.item.status==0"}],style:{color:"#2196f3"},attrs:{icon:"circle-notch",size:"2x",spin:"","font-awesome-icon":""}},s))]}}],null,!0)},[i("span",[t._v(t._s(e.item.msg)+" ")])])],1)]}}])})],1)],1)],1)],1)},s=[],r=(i("386d"),i("a481"),i("f499")),a=i.n(r),o=i("e814"),c=i.n(o),l=i("05ec"),u={components:{launch_job_btn:l["default"]},mounted:function(){this.$store.commit("SET_CJOB_ID",null);var t=this.$route.query.job_status;if("0"==t)this.inprogress_chip=!0;else if("1"==t)this.completed_chip=!0;else if("2"==t)this.error_chip=!0;else for(var e=0;e<3;e++)this.removeChip(e);this.filterJobs()},props:["headers_task","headers_job"],methods:{filterJobs:function(){var t=this.$route.query.job_status;t&&(t=c()(t)),this.$store.commit("SET_JOB_FILTER",t)},stop_job:function(){if(this.$store.getters.cjob_id){var t={route:"bd.@md.slave.job.stop",data:{job_id:this.$store.getters.cjob_id,msg:"Job stopped by CP User"}};console.log("JOB STOP MSG: "+a()(t));var e=this.$socket.emit("forward",t);e.connected&&(console.log("^worked!"),this.$store.commit("SET_CJOB_ID",null))}},removeChip:function(t){if(void 0!=t)switch(t){case 0:this.inprogress_chip=!1;break;case 1:this.completed_chip=!1;break;case 2:this.error_chip=!1}var e=new URL(window.location.href);e.searchParams.delete("job_status"),this.$router.replace(e.pathname+e.search),this.filterJobs()},showJobTasks:function(t){var e=a()(this.job_tasks);console.log("INFO: "+e),void 0===e&&(this.jobs_tasks=[]),this.$store.commit("SET_CJOB_ID",t)}},data:function(){return{job_pagination:{sortBy:"id",descending:!0,rowsPerPage:6},task_pagination:{sortBy:"id",descending:!0,rowsPerPage:6},error_chip:!1,completed_chip:!1,inprogress_chip:!1,dialog:!1}}},h=u,d=i("2877"),f=i("6544"),v=i.n(f),p=i("0798"),b=i("8212"),m=i("8336"),g=i("b0af"),_=i("cc20"),x=i("a523"),w=i("8fea"),k=i("0e8f"),y=i("132d"),T=i("a722"),$=i("9910"),C=i("71d9"),I=i("2a7f"),S=i("3a2f"),j=Object(d["a"])(h,n,s,!1,null,null,null);e["default"]=j.exports;v()(j,{VAlert:p["a"],VAvatar:b["a"],VBtn:m["a"],VCard:g["a"],VChip:_["a"],VContainer:x["a"],VDataTable:w["a"],VFlex:k["a"],VIcon:y["a"],VLayout:T["a"],VSpacer:$["a"],VToolbar:C["a"],VToolbarTitle:I["a"],VTooltip:S["a"]})},a481:function(t,e,i){"use strict";var n=i("cb7c"),s=i("4bf8"),r=i("9def"),a=i("4588"),o=i("0390"),c=i("5f1b"),l=Math.max,u=Math.min,h=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};i("214f")("replace",2,function(t,e,i,p){return[function(n,s){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r,s):i.call(String(r),n,s)},function(t,e){var s=p(i,t,this,e);if(s.done)return s.value;var h=n(t),d=String(this),f="function"===typeof e;f||(e=String(e));var m=h.global;if(m){var g=h.unicode;h.lastIndex=0}var _=[];while(1){var x=c(h,d);if(null===x)break;if(_.push(x),!m)break;var w=String(x[0]);""===w&&(h.lastIndex=o(d,r(h.lastIndex),g))}for(var k="",y=0,T=0;T<_.length;T++){x=_[T];for(var $=String(x[0]),C=l(u(a(x.index),d.length),0),I=[],S=1;S<x.length;S++)I.push(v(x[S]));var j=x.groups;if(f){var V=[$].concat(I,C,d);void 0!==j&&V.push(j);var O=String(e.apply(void 0,V))}else O=b($,d,C,I,j,e);C>=y&&(k+=d.slice(y,C)+O,y=C+$.length)}return k+d.slice(y)}];function b(t,e,n,r,a,o){var c=n+t.length,l=r.length,u=f;return void 0!==a&&(a=s(a),u=d),i.call(o,u,function(i,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":o=a[s.slice(1,-1)];break;default:var u=+s;if(0===u)return i;if(u>l){var d=h(u/10);return 0===d?i:d<=l?void 0===r[d-1]?s.charAt(1):r[d-1]+s.charAt(1):i}o=r[u-1]}return void 0===o?"":o})}})},a57f:function(t,e,i){},aac8:function(t,e,i){"use strict";i("0832");var n=i("604c"),s=i("c341"),r=n["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:s["a"]},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse===!this.$vuetify.rtl?"-reverse":"";return"v-window-"+t+e+"-transition"},internalIndex:function(){var t=this;return this.items.findIndex(function(e,i){return t.internalValue===t.getValue(e,i)})},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick(function(){return t.isBooted=!0})},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var e={staticClass:"v-window",directives:[]};if(!this.touchless){var i=this.touch||{left:this.next,right:this.prev};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}});e["a"]=r.extend({name:"v-tabs-items",inject:{registerItems:{default:null},tabProxy:{default:null},unregisterItems:{default:null}},props:{cycle:Boolean},watch:{internalValue:function(t){this.tabProxy&&this.tabProxy(t)}},created:function(){this.registerItems&&this.registerItems(this.changeModel)},beforeDestroy:function(){this.unregisterItems&&this.unregisterItems()},methods:{changeModel:function(t){this.internalValue=t},getValue:function(t,e){return t.id?t.id:r.options.methods.getValue.call(this,t,e)},next:function(){(this.cycle||this.internalIndex!==this.items.length-1)&&r.options.methods.next.call(this)},prev:function(){(this.cycle||0!==this.internalIndex)&&r.options.methods.prev.call(this)}}})},b0c5:function(t,e,i){"use strict";var n=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c5c9:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("launch_scheduler_btn")],1)},s=[],r=(i("6b54"),i("be4e")),a={components:{launch_scheduler_btn:r["default"]},data:function(){return{schedule_type:"scheduler",scheduler_text:"Please select days and time",checkbox_dates:[],e4:null}},methods:{schedulerFrequencyText:function(){var t="<time>";this.e4&&(t=this.e4.toString()),this.scheduler_text="Scheduled to run @"+t+" on ";for(var e="",i=0;i<this.checkbox_dates.length;i++)e+=this.checkbox_dates[i],i<this.checkbox_dates.length-1&&(e+=", ");e||(e="<days>"),this.scheduler_text+=e,this.scheduler_text+="."}}},o=a,c=i("2877"),l=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=l.exports},c671:function(t,e,i){"use strict";var n=i("3e79"),s=i("2464"),r=i("c341"),a=i("80d2"),o=i("58df"),c=Object(o["a"])(n["a"],Object(s["a"])("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:r["a"]},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1})},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=Object(a["b"])(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var i=this,n=this.windowGroup.isBooted;n&&(this.done=e),requestAnimationFrame(function(){if(!i.computedTransition)return e();i.windowGroup.internalHeight=Object(a["b"])(t.clientHeight),!n&&setTimeout(e,100)})},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var e=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[e])}}),l=i("d9bd");e["a"]=c.extend({name:"v-tab-item",props:{id:String},render:function(t){var e=c.options.render.call(this,t);return this.id&&(Object(l["d"])("id","value",this),e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id),e}})},f413:function(t,e,i){},fe57:function(t,e,i){"use strict";i("f413");var n=i("604c"),s={computed:{activeTab:function(){if(this.selectedItems.length)return this.selectedItems[0]},containerStyles:function(){return this.height?{height:parseInt(this.height,10)+"px"}:null},hasArrows:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint},sliderStyles:function(){return{left:this.sliderLeft+"px",transition:null!=this.sliderLeft?null:"none",width:this.sliderWidth+"px"}}}},r=i("aac8"),a=i("b64a"),o={name:"v-tabs-slider",mixins:[a["a"]],render:function(t){return t("div",this.setBackgroundColor(this.color||"accent",{staticClass:"v-tabs__slider"}))}},c=i("9d26"),l={methods:{genBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs__bar",class:this.themeClasses,ref:"bar"}),[this.genTransition("prev"),this.genWrapper(this.genContainer(t)),this.genTransition("next")])},genContainer:function(t){return this.$createElement("div",{staticClass:"v-tabs__container",class:{"v-tabs__container--align-with-title":this.alignWithTitle,"v-tabs__container--centered":this.centered,"v-tabs__container--fixed-tabs":this.fixedTabs,"v-tabs__container--grow":this.grow,"v-tabs__container--icons-and-text":this.iconsAndText,"v-tabs__container--overflow":this.isOverflowing,"v-tabs__container--right":this.right},style:this.containerStyles,ref:"container"},t)},genIcon:function(t){var e=this;return this.hasArrows&&this[t+"IconVisible"]?this.$createElement(c["a"],{staticClass:"v-tabs__icon v-tabs__icon--"+t,props:{disabled:!this[t+"IconVisible"]},on:{click:function(){return e.scrollTo(t)}}},this[t+"Icon"]):null},genItems:function(t,e){return t.length>0?t:e.length?this.$createElement(r["a"],e):null},genTransition:function(t){return this.$createElement("transition",{props:{name:"fade-transition"}},[this.genIcon(t)])},genWrapper:function(t){var e=this;return this.$createElement("div",{staticClass:"v-tabs__wrapper",class:{"v-tabs__wrapper--show-arrows":this.hasArrows},ref:"wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}]},[t])},genSlider:function(t){return t.length||(t=[this.$createElement(o,{props:{color:this.sliderColor}})]),this.$createElement("div",{staticClass:"v-tabs__slider-wrapper",style:this.sliderStyles},t)}}},u={props:{activeClass:{type:String,default:"v-tabs__item--active"},alignWithTitle:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0,validator:function(t){return!isNaN(parseInt(t))}},hideSlider:Boolean,iconsAndText:Boolean,mandatory:{type:Boolean,default:!0},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},right:Boolean,showArrows:Boolean,sliderColor:{type:String,default:"accent"},value:[Number,String]}},h={methods:{newOffset:function(t){var e=this.$refs.wrapper.clientWidth;return"prev"===t?Math.max(this.scrollOffset-e,0):Math.min(this.scrollOffset+e,this.$refs.container.clientWidth-e)},onTouchStart:function(t){this.startX=this.scrollOffset+t.touchstartX,this.$refs.container.style.transition="none",this.$refs.container.style.willChange="transform"},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs.container,e=this.$refs.wrapper,i=t.clientWidth-e.clientWidth;t.style.transition=null,t.style.willChange=null,this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)}}},d={watch:{activeTab:function(t,e){this.setOverflow(),t&&(this.tabItems&&this.tabItems(this.getValue(t,this.items.indexOf(t))),null!=e&&this.updateTabsView())},alignWithTitle:"callSlider",centered:"callSlider",fixedTabs:"callSlider",hasArrows:function(t){t||(this.scrollOffset=0)},internalValue:function(t){this.$listeners["input"]&&this.$emit("input",t)},lazyValue:"updateTabs",right:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize",scrollOffset:function(t){this.$refs.container.style.transform="translateX("+-t+"px)",this.hasArrows&&(this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon())}}},f=i("b57a"),v=i("6a18"),p=i("0d3d"),b=i("c341"),m=i("d9bd"),g=i("bfc5");e["a"]=n["a"].extend({name:"v-tabs",directives:{Resize:p["a"],Touch:b["a"]},mixins:[a["a"],f["a"],s,u,l,h,d,v["a"]],provide:function(){return{tabGroup:this,tabProxy:this.tabProxy,registerItems:this.registerItems,unregisterItems:this.unregisterItems}},data:function(){return{bar:[],content:[],isOverflowing:!1,nextIconVisible:!1,prevIconVisible:!1,resizeTimeout:null,scrollOffset:0,sliderWidth:null,sliderLeft:null,startX:0,tabItems:null,transitionTime:300,widths:{bar:0,container:0,wrapper:0}}},watch:{items:"onResize",tabs:"onResize"},mounted:function(){this.init()},methods:{checkIcons:function(){this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon()},checkPrevIcon:function(){return this.scrollOffset>0},checkNextIcon:function(){return this.widths.container>this.scrollOffset+this.widths.wrapper},callSlider:function(){var t=this;if(this.hideSlider||!this.activeTab)return!1;var e=this.activeTab;this.$nextTick(function(){e&&e.$el&&(t.sliderWidth=e.$el.scrollWidth,t.sliderLeft=e.$el.offsetLeft)})},init:function(){this.$listeners["input"]&&Object(m["d"])("@input","@change",this)},onResize:function(){if(!this._isDestroyed){this.setWidths();var t=this.isBooted?this.transitionTime:0;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateTabsView,t)}},overflowCheck:function(t,e){this.isOverflowing&&e(t)},scrollTo:function(t){this.scrollOffset=this.newOffset(t)},setOverflow:function(){this.isOverflowing=this.widths.bar<this.widths.container},setWidths:function(){var t=this.$refs.bar?this.$refs.bar.clientWidth:0,e=this.$refs.container?this.$refs.container.clientWidth:0,i=this.$refs.wrapper?this.$refs.wrapper.clientWidth:0;this.widths={bar:t,container:e,wrapper:i},this.setOverflow()},parseNodes:function(){for(var t=[],e=[],i=[],n=[],s=(this.$slots.default||[]).length,r=0;r<s;r++){var a=this.$slots.default[r];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":i.push(a);break;case"v-tabs-items":e.push(a);break;case"v-tab-item":t.push(a);break;default:n.push(a)}else n.push(a)}return{tab:n,slider:i,items:e,item:t}},registerItems:function(t){this.tabItems=t,t(this.internalValue)},unregisterItems:function(){this.tabItems=null},updateTabsView:function(){this.callSlider(),this.scrollIntoView(),this.checkIcons()},scrollIntoView:function(){if(this.activeTab){if(!this.isOverflowing)return this.scrollOffset=0;var t=this.widths.wrapper+this.scrollOffset,e=this.activeTab.$el,i=e.clientWidth,n=e.offsetLeft,s=i+n,r=.3*i;this.activeTab===this.items[this.items.length-1]&&(r=0),n<this.scrollOffset?this.scrollOffset=Math.max(n-r,0):t<s&&(this.scrollOffset-=t-s-r)}},tabProxy:function(t){this.internalValue=t}},render:function(t){var e=this.parseNodes(),i=e.tab,n=e.slider,s=e.items,r=e.item;return t("div",{staticClass:"v-tabs",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar([this.hideSlider?null:this.genSlider(n),i]),t(g["a"],{props:{dark:this.theme.isDark,light:!this.theme.isDark}},[this.genItems(s,r)])])}})}}]);
//# sourceMappingURL=chunk-bcba27aa.a1dc9047.js.map