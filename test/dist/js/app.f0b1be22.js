(function(t){function e(e){for(var a,c,o=e[0],u=e[1],i=e[2],d=0,f=[];d<o.length;d++)c=o[d],s[c]&&f.push(s[c][0]),s[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},c={app:0},s={app:0},r=[];function o(t){return u.p+"../../dist/js/"+({}[t]||t)+"."+{"chunk-2d0c4265":"2b5da7ae","chunk-2d0d7658":"435f3487","chunk-2d0e8e00":"13c0c452","chunk-2d216d34":"e4ab32f8","chunk-2d237b12":"245c5099","chunk-2dd1235f":"865f2a7a","chunk-3efb26c4":"44837b1d","chunk-479f12c3":"7e493800","chunk-8a8dc51e":"81a48fbb","chunk-06efd82c":"214666a8","chunk-2d0cc054":"9dcf0724","chunk-37ed11a1":"5ca0253d","chunk-49db0059":"8371322b","chunk-05a52109":"65dc04f0","chunk-151846b6":"d75afc6d","chunk-1618d00e":"6bc1f1e0","chunk-673423b5":"da8667e9","chunk-73cd2530":"7f355fe5","chunk-51aad9da":"9812fbf4","chunk-9b3db544":"61de1ed6","chunk-cdf1d702":"f9ccec06","chunk-f985e43c":"57a6cf1e","chunk-2d2174de":"cf5fddc4","chunk-2f793ecc":"ff05ca8e"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-2dd1235f":1,"chunk-3efb26c4":1,"chunk-479f12c3":1,"chunk-8a8dc51e":1,"chunk-06efd82c":1,"chunk-37ed11a1":1,"chunk-49db0059":1,"chunk-05a52109":1,"chunk-151846b6":1,"chunk-1618d00e":1,"chunk-673423b5":1,"chunk-73cd2530":1,"chunk-9b3db544":1,"chunk-cdf1d702":1,"chunk-f985e43c":1,"chunk-2f793ecc":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise(function(e,n){for(var a="../../dist/css/"+({}[t]||t)+"."+{"chunk-2d0c4265":"31d6cfe0","chunk-2d0d7658":"31d6cfe0","chunk-2d0e8e00":"31d6cfe0","chunk-2d216d34":"31d6cfe0","chunk-2d237b12":"31d6cfe0","chunk-2dd1235f":"37dd3368","chunk-3efb26c4":"36b314e5","chunk-479f12c3":"dabb0d84","chunk-8a8dc51e":"e4f047a1","chunk-06efd82c":"43bcc726","chunk-2d0cc054":"31d6cfe0","chunk-37ed11a1":"e2a90a3a","chunk-49db0059":"08652764","chunk-05a52109":"02619a35","chunk-151846b6":"6a3d6081","chunk-1618d00e":"f32436ca","chunk-673423b5":"436f9438","chunk-73cd2530":"436f9438","chunk-51aad9da":"31d6cfe0","chunk-9b3db544":"a142a089","chunk-cdf1d702":"b1ecc611","chunk-f985e43c":"0c77505a","chunk-2d2174de":"31d6cfe0","chunk-2f793ecc":"79f7aea9"}[t]+".css",s=u.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var i=r[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===s))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],d=i.getAttribute("data-href");if(d===a||d===s)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,delete c[t],l.parentNode.removeChild(l),n(r)},l.href=s;var _=document.getElementsByTagName("head")[0];_.appendChild(l)}).then(function(){c[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=r);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(t),i=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+c+")");r.type=a,r.request=c,n[1](r)}s[t]=void 0}};var f=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f13":function(t,e,n){var a={"./404.vue":["7746","chunk-2d0d7658"],"./HelloWorld.vue":["fdab","chunk-3efb26c4"],"./about.vue":["3a34","chunk-2d0c4265"],"./alerts.vue":["8fe3","chunk-479f12c3"],"./auth_comms.vue":["15ba"],"./bots.vue":["a34b","chunk-8a8dc51e","chunk-06efd82c","chunk-49db0059","chunk-05a52109"],"./bots_slaves.vue":["c3ed","chunk-8a8dc51e","chunk-06efd82c","chunk-49db0059","chunk-51aad9da"],"./data_view.vue":["9aa0","chunk-8a8dc51e","chunk-06efd82c","chunk-49db0059","chunk-151846b6"],"./help.vue":["fbcc","chunk-2d237b12"],"./home.vue":["c3b0","chunk-2d216d34"],"./jobs.vue":["7e16","chunk-8a8dc51e","chunk-06efd82c","chunk-49db0059","chunk-9b3db544","chunk-f985e43c"],"./jobs_overview.vue":["34c9","chunk-8a8dc51e","chunk-2f793ecc"],"./jobs_past.vue":["1999","chunk-8a8dc51e","chunk-06efd82c","chunk-49db0059","chunk-1618d00e","chunk-673423b5"],"./jobs_tasks_tables.vue":["9463","chunk-8a8dc51e","chunk-06efd82c","chunk-49db0059","chunk-1618d00e","chunk-73cd2530"],"./launch_job_btn.vue":["05ec","chunk-8a8dc51e","chunk-06efd82c","chunk-37ed11a1"],"./launch_scheduler_btn.vue":["be4e","chunk-8a8dc51e","chunk-06efd82c","chunk-9b3db544"],"./launch_slave_btn.vue":["4bc3","chunk-8a8dc51e","chunk-06efd82c","chunk-2d0cc054"],"./overview.vue":["dc9f","chunk-2dd1235f"],"./portal_nav.vue":["efaa"],"./scheduled.vue":["c5c9","chunk-8a8dc51e","chunk-06efd82c","chunk-9b3db544","chunk-2d2174de"],"./scheduled_table.vue":["557a","chunk-8a8dc51e","chunk-06efd82c","chunk-49db0059","chunk-9b3db544","chunk-cdf1d702"],"./settings.vue":["8aab","chunk-2d0e8e00"]};function c(t){var e=a[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}c.keys=function(){return Object.keys(a)},c.id="0f13",t.exports=c},1:function(t,e){},"15ba":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},c=[],s={data:function(){return{}},sockets:{connect:function(t){this.$store.commit("SOCKET_CONNECT"),console.log("Connected!"),this.$store.dispatch("SET_ALERT",{id:0,msg:"Connected!",viewed:!1,go_to:"/alerts#alert_0",time:new Date}),this.$store.dispatch("SET_ALERT_ON");var e=this.$socket.emit("pinger",{});console.log("PING: "+e.connected)},disconnect:function(t){console.log("DISConnected!"),this.$store.commit("SOCKET_DISCONNECT")},consoleLog:function(t){console.log(t)},data_in:function(t){var e=this.$store.getters.last_update,n=t["last_update"];e||(this.$store.dispatch(t["channel"],t["action_data"]),this.$store.commit("last_update",n)),n-e==0?console.log("Same update... ["+t["channel"]+"]"):n-e<0?console.log("Old update... ["+t["channel"]+"]"):n-e==1?(console.log("Next update ["+t["channel"]+"]"),this.$store.dispatch(t["channel"],t["action_data"]),this.$store.commit("last_update",t["last_update"])):n-e>1&&(console.log("Missed some updates..."),this.$store.dispatch("RESET_TASK_STORE",{}),this.$store.dispatch("RESET_BOT_STORE",{}),this.$store.dispatch("RESET_SCHEDULER_STORE",{}),this.$store.dispatch("RESET_ALERT_STORE",{}),this.$socket.emit("getall",{})),this.$store.dispatch(t["channel"],t["action_data"]),this.$store.commit("last_update",t["last_update"])},ponger:function(t){console.log("Pong");var e=t["last_update"],n=this.$store.getters.last_update;console.log("LAST_UPDATE: "+e+"=="+n),e!=n?(console.log("updating..."),this.$store.dispatch("RESET_TASK_STORE",{}),this.$store.dispatch("RESET_BOT_STORE",{}),this.$store.dispatch("RESET_SCHEDULER_STORE",{}),this.$socket.emit("getall",{})):console.log("up to date")}}},r=s,o=n("2877"),u=Object(o["a"])(r,a,c,!1,null,null,null);e["default"]=u.exports},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}c.keys=function(){return Object.keys(a)},c.resolve=s,t.exports=c,c.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),c=n("bb71");n("da64");a["a"].use(c["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("div",{attrs:{id:"app"}},[n("auth_comms"),n("Portal_Nav"),n("router-view")],1)])},r=[],o=n("efaa"),u=n("15ba"),i={name:"App",components:{Portal_Nav:o["default"],auth_comms:u["default"]},mounted:function(){}},d=i,f=n("2877"),l=n("6544"),_=n.n(l),m=n("7496"),h=Object(f["a"])(d,s,r,!1,null,null,null),b=h.exports;_()(h,{VApp:m["a"]});var p=n("cebc"),v=n("8c4f");a["a"].use(v["a"]);var E=[{path:"/bots",component:"bots"},{path:"/data",component:"data_view"},{path:"/",component:"overview"},{path:"/help",component:"help"},{path:"/settings",component:"settings"},{path:"/jobs",component:"jobs"},{path:"/alerts",component:"alerts"},{path:"*",component:"404"}],k=E.map(function(t){return Object(p["a"])({},t,{component:function(){return n("0f13")("./".concat(t.component,".vue"))}})}),g=new v["a"]({mode:"history",base:"/",routes:k}),S=n("2f62"),j=n("8055"),T=n.n(j),R=n("0a12"),O=n.n(R),y=(n("2ead"),n("7f7f"),n("a4bb")),A=n.n(y),w=(n("6b54"),n("6762"),n("2fdb"),n("f499")),L=n.n(w),C=n("c1df"),D=n.n(C);function N(t,e,n){for(var a=0;a<n.length;a++)t.commit(e,n[a])}var P={cjob_id:null,job_filter:null,task_groups_map:{},tasks_map:{},jobs_map:{}},$={filtered_jobs:function(t,e){return-1==t.job_filter?e.job_queued:0==t.job_filter?e.job_inprogress:1==t.job_filter?e.job_completed:2==t.job_filter?e.job_errors:e.jobs},job_queued:function(t,e){return e.jobs.filter(function(t){if("Queued"==t["stage"])return!0})},job_errors:function(t,e){return e.jobs.filter(function(t){if(2==t["status"])return!0})},job_completed:function(t,e){return e.jobs.filter(function(t){if(1==t["status"])return!0})},job_inprogress:function(t,e){return e.jobs.filter(function(t){if(0==t["status"]&&"Queued"!=t["stage"])return!0})},task_errors:function(t,e){return e.tasks.filter(function(t){if(2==t["status"])return!0})},task_completed:function(t,e){return e.tasks.filter(function(t){if(1==t["status"])return!0})},task_inprogress:function(t,e){return e.tasks.filter(function(t){if(console.log(L()(t)),0==t["status"])return!0})},cjob_id:function(t){return t.cjob_id},job_tasks:function(t,e){return console.log("cjob_id: "+t.cjob_id),e.tasks.filter(function(e){if(e["job_id"]==t.cjob_id)return!(e["task_group_id"]&&!e["id"].toString().includes("tg"))})},jobs:function(t){return A()(t.jobs_map).map(function(e){return t.jobs_map[e]})},tasks:function(t){return A()(t.tasks_map).map(function(e){return t.tasks_map[e]})},tasks_map:function(t){return t.tasks_map},jobs_map:function(t){return t.jobs_map},task_groups:function(t){return A()(t.task_groups_map).map(function(e){return t.task_groups_map[e]})},task_groups_map:function(t){return t.task_groups_map},task_group_ids:function(t,e){for(var n=e.task_groups,a=[],c=0;c<n.length;c++)a.push(n[c]["id"]);return a}},U={RESET_TASK_STORE:function(t,e){console.log("RESET_TASK_STORE"),t.commit("RESET_TASK_STORE",e)},SET_TASK_GROUP:function(t,e){t.commit("SET_TASK_GROUP",e)},SET_TASK_GROUPS:function(t,e){N(t,"SET_TASK_GROUP",e)},SET_JOB:function(t,e){t.commit("SET_JOB",e)},SET_JOBS:function(t,e){N(t,"SET_JOB",e)},SET_TASK:function(t,e){t.commit("SET_TASK",e)},SET_TASKS:function(t,e){N(t,"SET_TASK",e)}},M={RESET_TASK_STORE:function(t,e){t.tasks_map={},t.task_groups_map={},t.jobs_map={},t.cjob_id=null},SET_CJOB_ID:function(t,e){t.cjob_id=e},SET_JOB_FILTER:function(t,e){t.job_filter=e},SET_TASK_GROUP:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}var o="tg-"+e["id"],u={};if(A()(t.task_groups_map).includes(c["id"].toString())){u=t.tasks_map[o];var i="["+c["completed_cnt"]+"/"+c["total_cnt"]+"]",d=u["name"],f=d.indexOf("[");-1==f&&(f=d.length),d=d.substring(0,f),u["name"]=d+" "+i}else u={id:o,name:"TG_",job_id:e["job_id"]};a["a"].set(t.tasks_map,o,u),a["a"].set(t.task_groups_map,c["id"].toString(),c)},SET_TASK:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}var o="N/A",u="N/A";if(console.log("ts"),console.log(c["time_started"]),c["time_started"]){var i=D.a.utc(c["time_started"],"yyyy-MM-DD HH:mm:ss");i=new Date(i);var d=i.getHours(),f=i.getMinutes(),l=d>=12?"PM":"AM";d=d<10?"0":""+d.toString(),f=f<10?"0":""+f.toString(),o=d+":"+f+l,c["time_completed"]&&(i=D.a.utc(c["time_completed"],"yyyy-MM-DD HH:mm:ss"),i=new Date(i),d=i.getHours(),f=i.getMinutes(),l=d>=12?"PM":"AM",d=d<10?"0":""+d.toString(),f=f<10?"0":""+f.toString(),u=d+":"+f+l)}if(c["time_started"]=o,c["time_completed"]=u,c["task_group_id"]){var _=c["task_group_id"].toString();if(A()(t.task_groups_map).includes(_)){var m="tg-"+_,h=t.tasks_map[m];if(h){h["name"].includes("TG_")&&(h["name"]=c["name"],h["time_started"]=o,h["time_completed"]="N/A"),a["a"].set(t.tasks_map,m,h);var b=t.task_groups_map[_];b["completed_cnt"]==b["total_cnt"]?(h["status"]=1,h["time_completed"]=u):b["completed_cnt"]!=b["total_cnt"]&&b["error_cnt"]?h["status"]=3:h["status"]=0,a["a"].set(t.tasks_map,m,h)}}}1==c["error"]?(c["status"]=2,c["completed"]&&(c["status"]=3)):c["status"]=c["completed"]?1:0,a["a"].set(t.tasks_map,c["id"].toString(),c)},SET_JOB:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}1==c["error"]?c["status"]=2:c["status"]=c["completed"]?1:0,a["a"].set(t.jobs_map,c["id"].toString(),c)}},B={state:P,mutations:M,actions:U,getters:$};function H(t,e,n){for(var a=0;a<n.length;a++)t.commit(e,n[a])}var z={scheduler_groups_map:{},schedulers_map:{}},x={schedulers_map:function(t,e){return t.schedulers_map},schedules:function(t,e){var n=e.scheduler_groups,a=e.schedulers,c=[];if(!n||!a)return c;for(var s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=0;r<n.length;r++){for(var o={cnt:0,repeat:!1},u="",i="",d="",f=null,l=0;l<a.length;l++)if(a[l].scheduler_group_id==n[r].id){var _=D.a.utc(a[l].run_time,"yyyy-MM-DD HH:mm:ss");console.log(_),_=new Date(_),console.log(_),console.log("------------\n\n\n"),o["cnt"]+=1,a[l].frequency_min?(o["repeat"]=!0,o["frequency"]=a[l].frequency_min,i+=s[_.getDay()]+", "):(o["repeat"]=!1,o["frequency"]="Non repeating"),console.log(a[l].run_time);var m=new Date;f?_-m>=0&&_-m<f-m&&(f=_):f=_}if(o["cnt"]>0){u=s[f.getDay()];var h=f.getMilliseconds()-6e4*f.getTimezoneOffset();f.setMilliseconds(h);var b=f.getHours().toString(),p=f.getMinutes().toString();if(1==p.length&&(p="0"+p),1==b.length&&(b="0"+b),d=b+":"+p,o["run_time"]=u+"@"+d,o["repeat"])if(1==o["cnt"]){var v=o["frequency"],E="minutes";o["frequency"]="Every "+v+" "+E}else o["cnt"]>1&&(o["frequency"]=i.substr(0,i.length-2));o["group_id"]=n[r].id,o["name"]=n[r].name,c.push(o)}}return console.log("ROOWSSS: "+L()(c)),c},schedulers:function(t){return A()(t.schedulers_map).map(function(e){return t.schedulers_map[e]})},scheduler_groups:function(t){return A()(t.scheduler_groups_map).map(function(e){return t.scheduler_groups_map[e]})}},G={RESET_SCHEDULER_STORE:function(t,e){t.commit("RESET_SCHEDULER_STORE",e)},SET_SCHEDULER_GROUP:function(t,e){t.commit("SET_SCHEDULER_GROUP",e)},SET_SCHEDULER_GROUPS:function(t,e){H(t,"SET_SCHEDULER_GROUP",e)},SET_SCHEDULER:function(t,e){t.commit("SET_SCHEDULER",e)},SET_SCHEDULERS:function(t,e){H(t,"SET_SCHEDULER",e)}},V={RESET_SCHEDULER_STORE:function(t,e){t.schedulers_map={},t.scheduler_groups_map={}},SET_SCHEDULER_GROUP:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}a["a"].set(t.scheduler_groups_map,c["id"].toString(),c)},SET_SCHEDULER:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}a["a"].set(t.schedulers_map,c["id"].toString(),c)}},K={state:z,mutations:V,actions:G,getters:x},q={is_connected:!1,last_update:null},I={is_connected:function(t){return t.is_connected},last_update:function(t){return t.last_update}},J={SOCKET_CONNECT:function(t){t.is_connected=!0},SOCKET_DISCONNECT:function(t){t.is_connected=!1},last_update:function(t,e){t.last_update=e}},W={state:q,getters:I,mutations:J};function F(t,e,n){for(var a=0;a<n.length;a++)t.commit(e,n[a])}var Y={slaves_map:{},slave_types:{}},Q={slave_active:function(t,e){return e.slaves.filter(function(t){return t["active"]})},slaves:function(t){return A()(t.slaves_map).map(function(e){return t.slaves_map[e]})}},X={SET_SLAVE:function(t,e){t.commit("SET_SLAVE",e)},SET_SLAVES:function(t,e){F(t,"SET_SLAVE",e)},SET_SLAVE_TYPES:function(t,e){F(t,"SET_SLAVE_TYPE",e)},SET_SLAVE_TYPE:function(t,e){t.commit("SET_SLAVE_TYPE",e)},RESET_BOT_STORE:function(t,e){t.commit("RESET_BOT_STORE",e)}},Z={RESET_BOT_STORE:function(t,e){t.slaves_map={},t.slave_types={}},SET_SLAVE_TYPE:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}a["a"].set(t.slave_types,c["id"].toString(),c)},SET_SLAVE:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}var o=t.slave_types[c["slave_type_id"].toString()],u="Slave-"+c["id"];o&&(u=o["name"]),c["slave_type"]=u,a["a"].set(t.slaves_map,c["id"].toString(),c)}},tt={state:Y,mutations:Z,actions:X,getters:Q},et=n("e814"),nt=n.n(et);function at(t,e,n){for(var a=0;a<n.length;a++)t.commit(e,n[a])}var ct={alerts_map:{},alert_active:!1,alert_msg:""},st={alert_ids:function(t,e){return A()(t.alerts_map).map(function(t){return nt()(t)})},alert_msg:function(t,e){return t.alert_msg},alert_active:function(t,e){return t.alert_active},unviewed_alerts:function(t,e){return e.alerts.filter(function(t){return 0==t["viewed"]})},alerts:function(t){return A()(t.alerts_map).map(function(e){return t.alerts_map[e]})}},rt={SET_ALERT_ON:function(t,e){var n="",a=t.getters.unviewed_alerts,c=a.length;if(console.log("alert on: "+c),c>1?(n=a[c-1].msg,n+=" + "+(c-1)+" more alerts"):n=1==c?a[0].msg:"No alerts",c){var s=D.a.utc(a[c-1].time,"yyyy-MM-DD HH:mm:ss"),r=new Date(s).getTime(),o=new Date,u=(o.getTime()-r)/6e4;console.log("\n\n\n\n"),u&&(u=u<1?"now":u.toFixed(0)+" mins ago",n+=" ("+u+")"),t.commit("SET_ALERT_MSG",n),t.commit("SET_ALERT_ACTIVE",!1),t.commit("SET_ALERT_ACTIVE",!0)}},SET_ALERT_MSG:function(t,e){t.commit("SET_ALERT_MSG",e)},SET_ALERT:function(t,e){t.commit("SET_ALERT",e),t.dispatch("SET_ALERT_ON",!0)},SET_ALERTS:function(t,e){at(t,"SET_ALERT",e),t.dispatch("SET_ALERT_ON",!0)},RESET_ALERT_STORE:function(t,e){t.commit("RESET_ALERT_STORE",e)}},ot={SET_ALERT_ACTIVE:function(t,e){t.alert_active=e},alert_active:function(t,e){t.alert_active=e},SET_ALERT_MSG:function(t,e){t.alert_msg=e},RESET_ALERT_STORE:function(t,e){t.alerts_map={},t.alert_active=!1,t.alert_msg=""},SET_ALERT:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}a["a"].set(t.alerts_map,c["id"].toString(),c)}},ut={state:ct,mutations:ot,actions:rt,getters:st};function it(t,e,n){for(var a=0;a<n.length;a++)t.commit(e,n[a])}var dt={table_selections:{RCB:"RCBs"},table_headers:[{text:"Id",value:"id"},{text:"Name",value:"name"},{text:"Amount ($)",value:"amount"}],ctable:null,name:null,page:null,rows_map:{asd:{id:"asd",name:"Joe",amount:500}}},ft={table_headers:function(t){return t.table_headers},table_page:function(t){return t.page},table_names:function(t){return A()(t.table_selections).map(function(e){return t.table_selections[e]})},rows:function(t){return A()(t.rows_map).map(function(e){return t.rows_map[e]})},rows_map:function(t){return t.rows_map}},lt={SET_TABLE_PAGE:function(t,e){t.commit("SET_TABLE_PAGE",e)},SET_CTABLE:function(t,e){t.commit("SET_CTABLE",e)},SET_ROW:function(t,e){t.commit("SET_ROW",e)},SET_ROWS:function(t,e){it(t,"SET_ROWS",e)}},_t={SET_TABLE_PAGE:function(t,e){t.page=e},SET_CTABLE:function(t,e){for(var n=A()(e),a={},c=0;c<n.length;c++){var s=n[c];a[s]=e[s]}},SET_ROW:function(t,e){for(var n=A()(e),c={},s=0;s<n.length;s++){var r=n[s];c[r]=e[r]}a["a"].set(t.rows_map,c["id"].toString(),c)}},mt={state:dt,mutations:_t,actions:lt,getters:ft};a["a"].use(S["a"]);var ht=new S["a"].Store({modules:{schedulers:K,tasks:B,bots:tt,session:W,alerts:ut,dataview:mt}}),bt=n("ecee"),pt=n("c074"),vt=n("ad3d");n("bf40");n.d(e,"socket_instance",function(){return kt}),bt["c"].add(pt["a"]),a["a"].component("font-awesome-icon",vt["a"]);var Et="//".concat(window.location.hostname),kt=T()(Et);a["a"].use(O.a,kt,ht),a["a"].use(S["a"]),a["a"].use(n("2ead")),a["a"].config.productionTip=!1,a["a"].config.devtools=!0,new a["a"]({router:g,store:ht,render:function(t){return t(b)}}).$mount("#app")},efaa:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-snackbar",{attrs:{timeout:5e3,top:"",color:"yellow darken-3"},model:{value:t.alert_active,callback:function(e){t.alert_active=e},expression:"alert_active"}},[n("span",{staticClass:"font-weight-bold",staticStyle:{color:"black"}},[t._v("\n    "+t._s(t.$store.getters.alert_msg)+"\n    ")]),n("v-btn",{attrs:{block:"",dark:"",to:t.recentAlertLink}},[t._v("\n      Open\n    ")])],1),n("v-snackbar",{attrs:{timeout:0,top:"",color:"error"},model:{value:!t.$store.getters.is_connected,callback:function(e){t.$set(!t.$store.getters,"is_connected",e)},expression:"!$store.getters.is_connected"}},[t._v("\n  Not connected to server...\n  ")]),n("v-card",[n("v-card-title",[n("h1",[t._v("\n      BN1 Command Portal \n    ")]),n("v-spacer"),n("v-btn",{attrs:{dark:"",to:"/logout"}},[n("span",[t._v("Logout")]),n("v-icon",{attrs:{medium:""}},[t._v("how_to_reg")])],1)],1),n("v-bottom-nav",{attrs:{active:t.bottomNav,color:t.color,value:!0,dark:"",shift:""},on:{"update:active":function(e){t.bottomNav=e}}},[n("v-btn",{attrs:{dark:"",to:"/"}},[n("span",[t._v("Overview")]),n("v-icon",{attrs:{medium:""}},[t._v("dashboard")])],1),n("v-btn",{attrs:{dark:"",to:"/jobs"}},[n("span",[t._v("Jobs")]),n("v-icon",{attrs:{medium:""}},[t._v("work")])],1),n("v-btn",{attrs:{dark:"",to:"/data"}},[n("span",[t._v("Data")]),n("v-icon",{attrs:{medium:""}},[t._v("timeline")])],1),n("v-btn",{attrs:{dark:"",to:"/bots"}},[n("span",[t._v("Bots")]),n("v-icon",{attrs:{medium:""}},[t._v("adb")])],1),n("v-btn",{attrs:{dark:"",to:"/settings"}},[n("span",[t._v("Settings")]),n("v-icon",[t._v("settings")])],1)],1)],1)],1)},c=[],s={data:function(){return{bottomNav:3}},computed:{alert_active:{get:function(){return this.$store.getters.alert_active},set:function(t){1==t&&this.$store.dispatch("SET_ALERT_ON"),this.$store.commit("SET_ALERT_ACTIVE",t)}},recentAlertLink:{get:function(){return this.$store.getters.unviewed_alerts.length?"alerts#alert_"+this.$store.getters.unviewed_alerts[0]["id"]:"alerts"}},color:function(){switch(this.bottomNav){case 0:return"indigo";case 1:return"green darken-1";case 2:return"orange";case 3:return"purple lighten-1";case 4:return"grey darken-2"}}}},r=s,o=n("2877"),u=n("6544"),i=n.n(u),d=n("887a"),f=n("8336"),l=n("b0af"),_=n("12b2"),m=n("132d"),h=n("2db4"),b=n("9910"),p=Object(o["a"])(r,a,c,!1,null,null,null);e["default"]=p.exports;i()(p,{VBottomNav:d["a"],VBtn:f["a"],VCard:l["a"],VCardTitle:_["a"],VIcon:m["a"],VSnackbar:h["a"],VSpacer:b["a"]})}});
//# sourceMappingURL=app.f0b1be22.js.map