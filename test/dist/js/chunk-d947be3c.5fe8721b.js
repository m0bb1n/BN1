(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d947be3c"],{"02f4":function(t,e,a){var r=a("4588"),o=a("be13");t.exports=function(t){return function(e,a){var n,s,i=String(o(e)),c=r(a),l=i.length;return c<0||c>=l?t?"":void 0:(n=i.charCodeAt(c),n<55296||n>56319||c+1===l||(s=i.charCodeAt(c+1))<56320||s>57343?t?i.charAt(c):n:t?i.slice(c,c+2):s-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var r=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"05ec":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({attrs:{icon:"",dark:""}},Object.assign({},o,r)),[a("v-icon",[t._v("add")])],1)]}}],null,!0)},[a("span",[t._v("Add Job")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-text",[a("v-container",{attrs:{"grid-list-sm":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Launch Job")])])],1),a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{disabled:t.advanced_checkbox,items:t.items,"item-text":"job_name",label:"Jobs","return-object":"",required:""},model:{value:t.selected_job,callback:function(e){t.selected_job=e},expression:"selected_job"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{outline:"",label:"data"},model:{value:t.job_route_data,callback:function(e){t.job_route_data=e},expression:"job_route_data"}})],1),a("v-flex",{attrs:{xs12:"",md3:"",lg3:""}},[a("v-checkbox",{attrs:{label:"Advance"},model:{value:t.advanced_checkbox,callback:function(e){t.advanced_checkbox=e},expression:"advanced_checkbox"}})],1),a("v-flex",{attrs:{xs12:"",md9:"",lg9:""}},[a("v-text-field",{attrs:{label:"Task Route",placeholder:"Advance (not needed)",disabled:!t.advanced_checkbox,outline:""},model:{value:t.advanced_task_route,callback:function(e){t.advanced_task_route=e},expression:"advanced_task_route"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.clicked_launch}},[t._v("Launch")])],1)],1)],1)},o=[],n=a("f499"),s=a.n(n),i={methods:{clicked_launch:function(){var t=JSON.parse(this.job_route_data);if(t){console.log("SDS");var e=null,a=null,r=null;this.advanced_checkbox?(e=this.advanced_task_route,a="Anon Job: "+e):(e=this.selected_job.route,a=this.selected_job.job_name),r="Launcher";var o={route:"bd.@md.slave.job.add",data:{job_data:{name:a},tasks_data:[{name:r,route:e,data:t}]}};console.log("JOB LAUNCH MSG: "+s()(o));var n=this.$socket.emit("forward",o);n.connected&&(this.dialog=!1)}}},data:function(){return{advanced_checkbox:!1,advanced_task_route:"",job_route_data:"{}",selected_job:null,items:[{job_name:"Swing Trading",route:"bd.sd.@BTV1.trade.swing",rdata:{},value:"1"},{job_name:"Create new instagram bots",route:"bd.sd.@IGFV1.^bot.users.create",rdata:{msgs:[{msg:4},{msg:5},{msg:6}]},value:"2"}],dialog:!1}}},c=i,l=a("2877"),u=a("6544"),d=a.n(u),v=a("8336"),p=a("b0af"),h=a("99d9"),f=a("12b2"),_=a("ac7c"),m=a("a523"),b=a("169a"),g=a("0e8f"),x=a("132d"),k=a("a722"),w=a("b56d"),j=a("9910"),y=a("2677"),C=a("a844"),S=a("3a2f"),$=Object(l["a"])(c,r,o,!1,null,null,null);e["default"]=$.exports;d()($,{VBtn:v["a"],VCard:p["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:f["a"],VCheckbox:_["a"],VContainer:m["a"],VDialog:b["a"],VFlex:g["a"],VIcon:x["a"],VLayout:k["a"],VSelect:w["a"],VSpacer:j["a"],VTextField:y["a"],VTextarea:C["a"],VTooltip:S["a"]})},"0798":function(t,e,a){"use strict";a("a57f");var r=a("9d26"),o=a("b64a"),n=a("98a1"),s=a("2b0e"),i=s["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=a("58df");e["a"]=Object(c["a"])(o["a"],n["a"],i).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(r["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(r["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],a=this.outline?this.setTextColor:this.setBackgroundColor,r=t("div",a(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r}})},"214f":function(t,e,a){"use strict";a("b0c5");var r=a("2aba"),o=a("32e9"),n=a("79e5"),s=a("be13"),i=a("2b4c"),c=a("520a"),l=i("species"),u=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var v=i(t),p=!n(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),h=p?!n(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[v](""),!e}):void 0;if(!p||!h||"replace"===t&&!u||"split"===t&&!d){var f=/./[v],_=a(s,v,""[t],function(t,e,a,r,o){return e.exec===c?p&&!o?{done:!0,value:f.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}}),m=_[0],b=_[1];r(String.prototype,t,m),o(RegExp.prototype,v,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"386d":function(t,e,a){"use strict";var r=a("cb7c"),o=a("83a1"),n=a("5f1b");a("214f")("search",1,function(t,e,a,s){return[function(a){var r=t(this),o=void 0==a?void 0:a[e];return void 0!==o?o.call(a,r):new RegExp(a)[e](String(r))},function(t){var e=s(a,t,this);if(e.done)return e.value;var i=r(t),c=String(this),l=i.lastIndex;o(l,0)||(i.lastIndex=0);var u=n(i,c);return o(i.lastIndex,l)||(i.lastIndex=l),null===u?-1:u.index}]})},"520a":function(t,e,a){"use strict";var r=a("0bfb"),o=RegExp.prototype.exec,n=String.prototype.replace,s=o,i="lastIndex",c=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[i]||0!==e[i]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(s=function(t){var e,a,s,u,d=this;return l&&(a=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),c&&(e=d[i]),s=o.call(d,t),c&&s&&(d[i]=d.global?s.index+s[0].length:e),l&&s&&s.length>1&&n.call(s[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),t.exports=s},"5f1b":function(t,e,a){"use strict";var r=a("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},9463:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg8:""}},[a("v-card",[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[a("h1",[t._v("Jobs")])]),a("v-spacer"),a("v-chip",{attrs:{close:"",color:"success","text-color":"white"},on:{input:function(e){return t.removeChip(1)}},model:{value:t.completed_chip,callback:function(e){t.completed_chip=e},expression:"completed_chip"}},[a("v-avatar",[a("v-icon",[t._v("check_circle")])],1),t._v("\n        Completed\n      ")],1),a("v-chip",{attrs:{close:"",color:"error","text-color":"white"},on:{input:function(e){return t.removeChip(2)}},model:{value:t.error_chip,callback:function(e){t.error_chip=e},expression:"error_chip"}},[a("v-avatar",[a("v-icon",[t._v("error")])],1),t._v("\n       Error \n      ")],1),a("v-chip",{attrs:{close:"",color:"primary","text-color":"white"},on:{input:function(e){return t.removeChip(0)}},model:{value:t.inprogress_chip,callback:function(e){t.inprogress_chip=e},expression:"inprogress_chip"}},[a("v-avatar",[a("v-icon",[t._v("autorenew")])],1),t._v("\n       In-Progress\n      ")],1),a("launch_job_btn")],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers_job,items:t.$store.getters.filtered_jobs,pagination:t.job_pagination},on:{"update:pagination":function(e){t.job_pagination=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-alert",{attrs:{value:!0,color:"error",icon:"error"}},[t._v("\n            No Jobs to track\n          ")])]},proxy:!0},{key:"items",fn:function(e){return[a("tr",{on:{click:function(a){return t.showJobTasks(e.item.id)}}},[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.id))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.stage))]),a("td",{staticClass:"text-xs-left"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[a("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:1==e.item.status,expression:"props.item.status==1"}],staticClass:"mr-2",attrs:{color:"success"}},o),[t._v("\n               check \n              ")]),a("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:2==e.item.status,expression:"props.item.status==2"}],staticClass:"mr-2",attrs:{color:"error"}},o),[t._v("\n                error\n              ")]),a("font-awesome-icon",t._g({directives:[{name:"show",rawName:"v-show",value:0==e.item.status,expression:"props.item.status==0"}],style:{color:"#2196f3"},attrs:{icon:"circle-notch",size:"2x",spin:"","font-awesome-icon":""}},o))]}}],null,!0)},[a("span",[t._v(t._s(e.item.msg)+" ")])])],1)])]}}])})],1)],1),a("v-flex",{attrs:{x12:"",sm12:"",md4:"",lg4:""}},[a("v-card",[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-title",[t._v("Job "+t._s(t.$store.getters.cjob_id)+"'s Tasks")]),a("v-spacer"),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{icon:""}},r),[a("v-icon",{on:{click:t.stop_job}},[t._v("stop")])],1)]}}])},[a("span",[t._v("Stop ALL job's tasks")])])],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers_task,items:t.$store.getters.job_tasks,pagination:t.task_pagination},on:{"update:pagination":function(e){t.task_pagination=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-alert",{attrs:{value:!0,color:"error",icon:"error"}},[t._v("\n              Select a job to view its tasks\n            ")])]},proxy:!0},{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.id))]),a("td",[t._v(t._s(e.item.name))]),a("td",[t._v(t._s(e.item.time_completed))]),a("td",{staticClass:"px-0"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[a("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:1==e.item.status,expression:"props.item.status==1"}],staticClass:"mr-2",attrs:{color:"success"}},o),[t._v("\n               check \n              ")]),a("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:2==e.item.status,expression:"props.item.status==2"}],staticClass:"mr-2",attrs:{color:"error"}},o),[t._v("\n                error\n              ")]),a("v-icon",t._g({directives:[{name:"show",rawName:"v-show",value:3==e.item.status,expression:"props.item.status==3"}],staticClass:"mr-2",attrs:{color:"warning"}},o),[t._v("\n                warning\n              ")]),a("font-awesome-icon",t._g({directives:[{name:"show",rawName:"v-show",value:0==e.item.status,expression:"props.item.status==0"}],style:{color:"#2196f3"},attrs:{icon:"circle-notch",size:"2x",spin:"","font-awesome-icon":""}},o))]}}],null,!0)},[a("span",[t._v(t._s(e.item.msg)+" ")])])],1)]}}])})],1)],1)],1)],1)},o=[],n=(a("386d"),a("a481"),a("f499")),s=a.n(n),i=a("e814"),c=a.n(i),l=a("05ec"),u={components:{launch_job_btn:l["default"]},mounted:function(){this.$store.commit("SET_CJOB_ID",null);var t=this.$route.query.job_status;if("0"==t)this.inprogress_chip=!0;else if("1"==t)this.completed_chip=!0;else if("2"==t)this.error_chip=!0;else for(var e=0;e<3;e++)this.removeChip(e);this.filterJobs()},props:["headers_task","headers_job"],methods:{filterJobs:function(){var t=this.$route.query.job_status;t&&(t=c()(t)),this.$store.commit("SET_JOB_FILTER",t)},stop_job:function(){if(this.$store.getters.cjob_id){var t={route:"bd.@md.slave.job.stop",data:{job_id:this.$store.getters.cjob_id,msg:"Job stopped by CP User"}};console.log("JOB STOP MSG: "+s()(t));var e=this.$socket.emit("forward",t);e.connected&&(console.log("^worked!"),this.$store.commit("SET_CJOB_ID",null))}},removeChip:function(t){if(void 0!=t)switch(t){case 0:this.inprogress_chip=!1;break;case 1:this.completed_chip=!1;break;case 2:this.error_chip=!1}var e=new URL(window.location.href);e.searchParams.delete("job_status"),this.$router.replace(e.pathname+e.search),this.filterJobs()},showJobTasks:function(t){var e=s()(this.job_tasks);console.log("INFO: "+e),void 0===e&&(this.jobs_tasks=[]),this.$store.commit("SET_CJOB_ID",t)}},data:function(){return{job_pagination:{sortBy:"id",descending:!0,rowsPerPage:6},task_pagination:{sortBy:"id",descending:!0,rowsPerPage:6},error_chip:!1,completed_chip:!1,inprogress_chip:!1,dialog:!1}}},d=u,v=a("2877"),p=a("6544"),h=a.n(p),f=a("0798"),_=a("8212"),m=a("8336"),b=a("b0af"),g=a("cc20"),x=a("a523"),k=a("8fea"),w=a("0e8f"),j=a("132d"),y=a("a722"),C=a("9910"),S=a("71d9"),$=a("2a7f"),V=a("3a2f"),T=Object(v["a"])(d,r,o,!1,null,null,null);e["default"]=T.exports;h()(T,{VAlert:f["a"],VAvatar:_["a"],VBtn:m["a"],VCard:b["a"],VChip:g["a"],VContainer:x["a"],VDataTable:k["a"],VFlex:w["a"],VIcon:j["a"],VLayout:y["a"],VSpacer:C["a"],VToolbar:S["a"],VToolbarTitle:$["a"],VTooltip:V["a"]})},a481:function(t,e,a){"use strict";var r=a("cb7c"),o=a("4bf8"),n=a("9def"),s=a("4588"),i=a("0390"),c=a("5f1b"),l=Math.max,u=Math.min,d=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,function(t,e,a,f){return[function(r,o){var n=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,n,o):a.call(String(n),r,o)},function(t,e){var o=f(a,t,this,e);if(o.done)return o.value;var d=r(t),v=String(this),p="function"===typeof e;p||(e=String(e));var m=d.global;if(m){var b=d.unicode;d.lastIndex=0}var g=[];while(1){var x=c(d,v);if(null===x)break;if(g.push(x),!m)break;var k=String(x[0]);""===k&&(d.lastIndex=i(v,n(d.lastIndex),b))}for(var w="",j=0,y=0;y<g.length;y++){x=g[y];for(var C=String(x[0]),S=l(u(s(x.index),v.length),0),$=[],V=1;V<x.length;V++)$.push(h(x[V]));var T=x.groups;if(p){var E=[C].concat($,S,v);void 0!==T&&E.push(T);var I=String(e.apply(void 0,E))}else I=_(C,v,S,$,T,e);S>=j&&(w+=v.slice(j,S)+I,j=S+C.length)}return w+v.slice(j)}];function _(t,e,r,n,s,i){var c=r+t.length,l=n.length,u=p;return void 0!==s&&(s=o(s),u=v),a.call(i,u,function(a,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":i=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return a;if(u>l){var v=d(u/10);return 0===v?a:v<=l?void 0===n[v-1]?o.charAt(1):n[v-1]+o.charAt(1):a}i=n[u-1]}return void 0===i?"":i})}})},a57f:function(t,e,a){},b0c5:function(t,e,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);
//# sourceMappingURL=chunk-d947be3c.5fe8721b.js.map