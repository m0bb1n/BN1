(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1700346","chunk-2d0ac43e"],{"0832":function(t,e,i){},1999:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("jobs_tasks_tables",{attrs:{headers_task:t.headers_task,headers_job:t.headers}})},s=[],r=i("9463"),o={components:{jobs_tasks_tables:r["default"]},mounted:function(){},methods:{},data:function(){return{dialog:!1,headers_task:[{text:"Id",align:"left",sortable:!1,value:"id"},{text:"Name",align:"left",sortable:!1,value:"name"},{text:"End",align:"left",value:"time_completed",sortable:!0},{text:"Status",align:"left",value:"status",sortable:!0}],headers:[{text:"Id",align:"left",sortable:!1,value:"id"},{text:"Name",align:"left",value:"name",sortable:!1},{text:"Stage",value:"stage",sortable:!1},{text:"Status",value:"status",sortable:!1}]}}},a=o,l=i("2877"),u=Object(l["a"])(a,n,s,!1,null,null,null);e["default"]=u.exports},"71a3":function(t,e,i){"use strict";var n=i("2464"),s=i("0d01"),r=i("6a18"),o=i("80d2"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e["a"]={name:"v-tab",mixins:[s["a"],Object(n["a"])("tabGroup"),r["a"]],props:{ripple:{type:[Boolean,Object],default:!0}},computed:{classes:function(){return a({"v-tabs__item":!0,"v-tabs__item--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),this.$emit("click",t),this.to||this.toggle()},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link){var e="_vnode.data.class."+this.activeClass;this.$nextTick(function(){Object(o["j"])(t.$refs.link,e)&&t.toggle()})}}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.data,n=this.disabled?"div":e.tag;return i.ref="link",t("div",{staticClass:"v-tabs__div"},[t(n,i,this.$slots.default)])}}},"7e16":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tabs",{attrs:{"fixed-tabs":""},model:{value:t.cTab,callback:function(e){t.cTab=e},expression:"cTab"}},[t._l(t.tabs,function(e){return i("v-tab",{key:e.id,on:{click:function(i){return t.switchTab(e.id,"click")}}},[t._v("\n    "+t._s(e.title)+"\n  ")])}),i("v-tabs-items",{model:{value:t.cTab,callback:function(e){t.cTab=e},expression:"cTab"}},[i("v-tab-item",[i("jobs_all")],1),i("v-tab-item",{attrs:{v:""}},[i("scheduled_comp"),t._v("\n      Scheduled Jobs\n    ")],1)],1)],2)],1)},s=[],r=(i("a481"),i("e814")),o=i.n(r),a=i("1999"),l=i("c5c9"),u={data:function(){return{cTab:0,tabs:[{title:"All Jobs",key:"all-jobs",id:0},{title:"Scheduled",key:"scheduled",id:1}]}},components:{jobs_all:a["default"],scheduled_comp:l["default"]},mounted:function(){var t=this.$route.query["tab"];if(t){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e]["key"]==t){this.cTab=e;break}console.log("tab"+this.cTab)}this.switchTab(this.cTab,"load")},methods:{switchTab:function(t,e){if("load"==e)void 0!==t&&this.tabs.length-1>=o()(t)||(t=0),this.cTab=t;else if("click"==e){this.cTab=t;var i=this.tabs[this.cTab]["key"];this.$router.replace(window.location.pathname+"?tab="+i)}}}},c=u,h=i("2877"),d=i("6544"),f=i.n(d),p=i("71a3"),v=i("c671"),m=i("fe57"),b=i("aac8"),g=Object(h["a"])(c,n,s,!1,null,null,null);e["default"]=g.exports;f()(g,{VTab:p["a"],VTabItem:v["a"],VTabs:m["a"],VTabsItems:b["a"]})},"886e":function(t,e,i){},aac8:function(t,e,i){"use strict";i("0832");var n=i("604c"),s=i("c341"),r=n["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:s["a"]},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse===!this.$vuetify.rtl?"-reverse":"";return"v-window-"+t+e+"-transition"},internalIndex:function(){var t=this;return this.items.findIndex(function(e,i){return t.internalValue===t.getValue(e,i)})},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick(function(){return t.isBooted=!0})},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var e={staticClass:"v-window",directives:[]};if(!this.touchless){var i=this.touch||{left:this.next,right:this.prev};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}});e["a"]=r.extend({name:"v-tabs-items",inject:{registerItems:{default:null},tabProxy:{default:null},unregisterItems:{default:null}},props:{cycle:Boolean},watch:{internalValue:function(t){this.tabProxy&&this.tabProxy(t)}},created:function(){this.registerItems&&this.registerItems(this.changeModel)},beforeDestroy:function(){this.unregisterItems&&this.unregisterItems()},methods:{changeModel:function(t){this.internalValue=t},getValue:function(t,e){return t.id?t.id:r.options.methods.getValue.call(this,t,e)},next:function(){(this.cycle||this.internalIndex!==this.items.length-1)&&r.options.methods.next.call(this)},prev:function(){(this.cycle||0!==this.internalIndex)&&r.options.methods.prev.call(this)}}})},b4e0:function(t,e,i){},c341:function(t,e,i){"use strict";var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,r=.5,o=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<n-o&&t.up(t),t.down&&s>n+o&&t.down(t))};function r(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function a(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return a(t,e)}}}function u(t,e,i){var s=e.value,r=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(r){var a=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=a,Object(n["q"])(a).forEach(function(t){r.addEventListener(t,a[t],o)})}}function c(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var r=s._touchHandlers[i.context._uid];Object(n["q"])(r).forEach(function(t){s.removeEventListener(t,r[t])}),delete s._touchHandlers[i.context._uid]}}e["a"]={inserted:u,unbind:c}},c5c9:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-time-picker",{attrs:{color:"green lighten-1"},model:{value:t.e4,callback:function(e){t.e4=e},expression:"e4"}}),i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs3:"",sm1:""}},[i("v-checkbox",{attrs:{label:"Mon",value:"monday"},model:{value:t.checkbox_dates,callback:function(e){t.checkbox_dates=e},expression:"checkbox_dates"}})],1),i("v-flex",{attrs:{xs3:"",sm1:""}},[i("v-checkbox",{attrs:{label:"Tue",value:"tuesday"},model:{value:t.checkbox_dates,callback:function(e){t.checkbox_dates=e},expression:"checkbox_dates"}})],1),i("v-flex",{attrs:{xs3:"",sm1:""}},[i("v-checkbox",{attrs:{label:"Wed",value:"wednesday"},model:{value:t.checkbox_dates,callback:function(e){t.checkbox_dates=e},expression:"checkbox_dates"}})],1),i("v-flex",{attrs:{xs3:"",sm1:""}},[i("v-checkbox",{attrs:{label:"Thu",value:"thursday"},model:{value:t.checkbox_dates,callback:function(e){t.checkbox_dates=e},expression:"checkbox_dates"}})],1),i("v-flex",{attrs:{xs3:"",sm1:""}},[i("v-checkbox",{attrs:{label:"Fri",value:"friday"},model:{value:t.checkbox_dates,callback:function(e){t.checkbox_dates=e},expression:"checkbox_dates"}})],1),i("v-flex",{attrs:{xs3:"",sm1:""}},[i("v-checkbox",{attrs:{label:"Sat",value:"saturday"},model:{value:t.checkbox_dates,callback:function(e){t.checkbox_dates=e},expression:"checkbox_dates"}})],1),i("v-flex",{attrs:{xs3:"",sm1:""}},[i("v-checkbox",{attrs:{label:"Sun",value:"sunday"},model:{value:t.checkbox_dates,callback:function(e){t.checkbox_dates=e},expression:"checkbox_dates"}})],1)],1)],1)],1)},s=[],r={data:function(){return{checkbox_dates:[],e4:null}},methods:{}},o=r,a=i("2877"),l=i("6544"),u=i.n(l),c=i("ac7c"),h=i("a523"),d=i("0e8f"),f=i("a722"),p=(i("b4e0"),i("b64a")),v=i("58df"),m=Object(v["a"])(p["a"]).extend({methods:{genPickerButton:function(t,e,i){var n=this,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=this[t]===e,a=function(i){i.stopPropagation(),n.$emit("update:"+t,e)};return this.$createElement("div",{staticClass:("v-picker__title__btn "+r).trim(),class:{"v-picker__title__btn--active":o,"v-picker__title__btn--readonly":s},on:o||s?void 0:{click:a}},Array.isArray(i)?i:[i])}}}),b=function(t,e,i){return e>>=0,t=String(t),i=String(i),t.length>e?String(t):(e-=t.length,e>i.length&&(i+=i.repeat(e/i.length)),i.slice(0,e)+String(t))},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return b(t,e,"0")},w=Object(v["a"])(m).extend({name:"v-time-picker-title",props:{ampm:Boolean,disabled:Boolean,hour:Number,minute:Number,second:Number,period:{type:String,validator:function(t){return"am"===t||"pm"===t}},readonly:Boolean,useSeconds:Boolean,selecting:Number},methods:{genTime:function(){var t=this.hour;this.ampm&&(t=t?(t-1)%12+1:12);var e=null==this.hour?"--":this.ampm?String(t):g(t),i=null==this.minute?"--":g(this.minute),n=[this.genPickerButton("selecting",P.hour,e,this.disabled),this.$createElement("span",":"),this.genPickerButton("selecting",P.minute,i,this.disabled)];if(this.useSeconds){var s=null==this.second?"--":g(this.second);n.push(this.$createElement("span",":")),n.push(this.genPickerButton("selecting",P.second,s,this.disabled))}return this.$createElement("div",{class:"v-time-picker-title__time"},n)},genAmPm:function(){return this.$createElement("div",{staticClass:"v-time-picker-title__ampm"},[this.genPickerButton("period","am","am",this.disabled||this.readonly),this.genPickerButton("period","pm","pm",this.disabled||this.readonly)])}},render:function(t){var e=[this.genTime()];return this.ampm&&e.push(this.genAmPm()),t("div",{staticClass:"v-time-picker-title"},e)}}),k=(i("886e"),i("6a18")),x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},y=Object(v["a"])(p["a"],k["a"]).extend({name:"v-time-picker-clock",props:{allowedValues:Function,disabled:Boolean,double:Boolean,format:{type:Function,default:function(t){return t}},max:{type:Number,required:!0},min:{type:Number,required:!0},scrollable:Boolean,readonly:Boolean,rotate:{type:Number,default:0},step:{type:Number,default:1},value:Number},data:function(){return{inputValue:this.value,isDragging:!1,valueOnMouseDown:null,valueOnMouseUp:null}},computed:{count:function(){return this.max-this.min+1},degreesPerUnit:function(){return 360/this.roundCount},degrees:function(){return this.degreesPerUnit*Math.PI/180},displayedValue:function(){return null==this.value?this.min:this.value},innerRadiusScale:function(){return.62},roundCount:function(){return this.double?this.count/2:this.count}},watch:{value:function(t){this.inputValue=t}},methods:{wheel:function(t){t.preventDefault();var e=Math.sign(-t.deltaY||1),i=this.displayedValue;do{i+=e,i=(i-this.min+this.count)%this.count+this.min}while(!this.isAllowed(i)&&i!==this.displayedValue);i!==this.displayedValue&&this.update(i)},isInner:function(t){return this.double&&t-this.min>=this.roundCount},handScale:function(t){return this.isInner(t)?this.innerRadiusScale:1},isAllowed:function(t){return!this.allowedValues||this.allowedValues(t)},genValues:function(){for(var t=[],e=this.min;e<=this.max;e+=this.step){var i=e===this.value&&(this.color||"accent");t.push(this.$createElement("span",this.setBackgroundColor(i,{staticClass:"v-time-picker-clock__item",class:{"v-time-picker-clock__item--active":e===this.displayedValue,"v-time-picker-clock__item--disabled":this.disabled||!this.isAllowed(e)},style:this.getTransform(e),domProps:{innerHTML:"<span>"+this.format(e)+"</span>"}})))}return t},genHand:function(){var t="scaleY("+this.handScale(this.displayedValue)+")",e=this.rotate+this.degreesPerUnit*(this.displayedValue-this.min),i=null!=this.value&&(this.color||"accent");return this.$createElement("div",this.setBackgroundColor(i,{staticClass:"v-time-picker-clock__hand",class:{"v-time-picker-clock__hand--inner":this.isInner(this.value)},style:{transform:"rotate("+e+"deg) "+t}}))},getTransform:function(t){var e=this.getPosition(t),i=e.x,n=e.y;return{left:50+50*i+"%",top:50+50*n+"%"}},getPosition:function(t){var e=this.rotate*Math.PI/180;return{x:Math.sin((t-this.min)*this.degrees+e)*this.handScale(t),y:-Math.cos((t-this.min)*this.degrees+e)*this.handScale(t)}},onMouseDown:function(t){t.preventDefault(),this.valueOnMouseDown=null,this.valueOnMouseUp=null,this.isDragging=!0,this.onDragMove(t)},onMouseUp:function(){this.isDragging=!1,null!==this.valueOnMouseUp&&this.isAllowed(this.valueOnMouseUp)&&this.$emit("change",this.valueOnMouseUp)},onDragMove:function(t){if(t.preventDefault(),this.isDragging||"click"===t.type){var e=this.$refs.clock.getBoundingClientRect(),i=e.width,n=e.top,s=e.left,r=this.$refs.innerClock.getBoundingClientRect(),o=r.width,a="touches"in t?t.touches[0]:t,l=a.clientX,u=a.clientY,c={x:i/2,y:-i/2},h={x:l-s,y:n-u},d=Math.round(this.angle(c,h)-this.rotate+360)%360,f=this.double&&this.euclidean(c,h)<(o+o*this.innerRadiusScale)/4,p=(Math.round(d/this.degreesPerUnit)+(f?this.roundCount:0))%this.count+this.min,v=void 0;v=d>=360-this.degreesPerUnit/2?f?this.max-this.roundCount+1:this.min:p,this.isAllowed(p)&&(null===this.valueOnMouseDown&&(this.valueOnMouseDown=v),this.valueOnMouseUp=v,this.update(v))}},update:function(t){this.inputValue!==t&&(this.inputValue=t,this.$emit("input",t))},euclidean:function(t,e){var i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)},angle:function(t,e){var i=2*Math.atan2(e.y-t.y-this.euclidean(t,e),e.x-t.x);return Math.abs(180*i/Math.PI)}},render:function(t){var e=this,i={staticClass:"v-time-picker-clock",class:x({"v-time-picker-clock--indeterminate":null==this.value},this.themeClasses),on:this.readonly||this.disabled?void 0:Object.assign({mousedown:this.onMouseDown,mouseup:this.onMouseUp,mouseleave:function(){return e.isDragging&&e.onMouseUp()},touchstart:this.onMouseDown,touchend:this.onMouseUp,mousemove:this.onDragMove,touchmove:this.onDragMove},this.scrollable?{wheel:this.wheel}:{}),ref:"clock"};return t("div",i,[t("div",{staticClass:"v-time-picker-clock__inner",ref:"innerClock"},[this.genHand(),this.genValues()])])}}),_=(i("d9a2"),i("4c94"),i("80d2")),T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},S=Object(v["a"])(p["a"],k["a"]).extend({name:"v-picker",props:{fullWidth:Boolean,landscape:Boolean,transition:{type:String,default:"fade-transition"},width:{type:[Number,String],default:290}},computed:{computedTitleColor:function(){var t=!this.isDark&&(this.color||"primary");return this.color||t}},methods:{genTitle:function(){return this.$createElement("div",this.setBackgroundColor(this.computedTitleColor,{staticClass:"v-picker__title",class:{"v-picker__title--landscape":this.landscape}}),this.$slots.title)},genBodyTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},this.$slots.default)},genBody:function(){return this.$createElement("div",{staticClass:"v-picker__body",class:this.themeClasses,style:this.fullWidth?void 0:{width:Object(_["b"])(this.width)}},[this.genBodyTransition()])},genActions:function(){return this.$createElement("div",{staticClass:"v-picker__actions v-card__actions"},this.$slots.actions)}},render:function(t){return t("div",{staticClass:"v-picker v-card",class:T({"v-picker--landscape":this.landscape,"v-picker--full-width":this.fullWidth},this.themeClasses)},[this.$slots.title?this.genTitle():null,this.genBody(),this.$slots.actions?this.genActions():null])}}),$=S,C=Object(v["a"])(p["a"],k["a"]).extend({name:"picker",props:{fullWidth:Boolean,headerColor:String,landscape:Boolean,noTitle:Boolean,width:{type:[Number,String],default:290}},methods:{genPickerTitle:function(){return null},genPickerBody:function(){return null},genPickerActionsSlot:function(){return this.$scopedSlots.default?this.$scopedSlots.default({save:this.save,cancel:this.cancel}):this.$slots.default},genPicker:function(t){var e=[];if(!this.noTitle){var i=this.genPickerTitle();i&&e.push(i)}var n=this.genPickerBody();return n&&e.push(n),e.push(this.$createElement("template",{slot:"actions"},[this.genPickerActionsSlot()])),this.$createElement($,{staticClass:t,props:{color:this.headerColor||this.color,dark:this.dark,fullWidth:this.fullWidth,landscape:this.landscape,light:this.light,width:this.width}},e)}}}),O=function(){function t(t,e){var i=[],n=!0,s=!1,r=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0)if(i.push(o.value),e&&i.length===e)break}catch(l){s=!0,r=l}finally{try{!n&&a["return"]&&a["return"]()}finally{if(s)throw r}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),I=Object(_["d"])(24),M=Object(_["d"])(12),B=M.map(function(t){return t+12}),V=Object(_["d"])(60),P={hour:1,minute:2,second:3},A={1:"hour",2:"minute",3:"second"},E=Object(v["a"])(C).extend({name:"v-time-picker",props:{allowedHours:Function,allowedMinutes:Function,allowedSeconds:Function,disabled:Boolean,format:{type:String,default:"ampm",validator:function(t){return["ampm","24hr"].includes(t)}},min:String,max:String,readonly:Boolean,scrollable:Boolean,useSeconds:Boolean,value:null},data:function(){return{inputHour:null,inputMinute:null,inputSecond:null,lazyInputHour:null,lazyInputMinute:null,lazyInputSecond:null,period:"am",selecting:P.hour}},computed:{selectingHour:{get:function(){return this.selecting===P.hour},set:function(t){this.selecting=P.hour}},selectingMinute:{get:function(){return this.selecting===P.minute},set:function(t){this.selecting=P.minute}},selectingSecond:{get:function(){return this.selecting===P.second},set:function(t){this.selecting=P.second}},isAllowedHourCb:function(){var t=this;if(!this.min&&!this.max)return this.allowedHours;var e=this.min?Number(this.min.split(":")[0]):0,i=this.max?Number(this.max.split(":")[0]):23;return function(n){return n>=1*e&&n<=1*i&&(!t.allowedHours||t.allowedHours(n))}},isAllowedMinuteCb:function(){var t=this,e=!this.allowedHours||this.allowedHours(this.inputHour);if(!this.min&&!this.max)return e?this.allowedMinutes:function(){return!1};var i=this.min?this.min.split(":").map(Number):[0,0],n=O(i,2),s=n[0],r=n[1],o=this.max?this.max.split(":").map(Number):[23,59],a=O(o,2),l=a[0],u=a[1],c=60*s+1*r,h=60*l+1*u;return function(i){var n=60*t.inputHour+i;return n>=c&&n<=h&&e&&(!t.allowedMinutes||t.allowedMinutes(i))}},isAllowedSecondCb:function(){var t=this,e=!this.allowedHours||this.allowedHours(this.inputHour),i=!this.allowedMinutes||this.allowedMinutes(this.inputMinute);if(!this.min&&!this.max)return e&&i?this.allowedSeconds:function(){return!1};var n=this.min?this.min.split(":").map(Number):[0,0,0],s=O(n,3),r=s[0],o=s[1],a=s[2],l=this.max?this.max.split(":").map(Number):[23,59,59],u=O(l,3),c=u[0],h=u[1],d=u[2],f=3600*r+60*o+1*(a||0),p=3600*c+60*h+1*(d||0);return function(n){var s=3600*t.inputHour+60*t.inputMinute+n;return s>=f&&s<=p&&e&&i&&(!t.allowedSeconds||t.allowedSeconds(n))}},isAmPm:function(){return"ampm"===this.format}},watch:{value:"setInputData"},mounted:function(){this.setInputData(this.value)},methods:{genValue:function(){return null==this.inputHour||null==this.inputMinute||this.useSeconds&&null==this.inputSecond?null:g(this.inputHour)+":"+g(this.inputMinute)+(this.useSeconds?":"+g(this.inputSecond):"")},emitValue:function(){var t=this.genValue();null!==t&&this.$emit("input",t)},setPeriod:function(t){if(this.period=t,null!=this.inputHour){var e=this.inputHour+("am"===t?-12:12);this.inputHour=this.firstAllowed("hour",e),this.emitValue()}},setInputData:function(t){if(null==t||""===t)this.inputHour=null,this.inputMinute=null,this.inputSecond=null;else if(t instanceof Date)this.inputHour=t.getHours(),this.inputMinute=t.getMinutes(),this.inputSecond=t.getSeconds();else{var e=t.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/)||new Array(6),i=O(e,6),n=i[1],s=i[2],r=i[4],o=i[5];this.inputHour=o?this.convert12to24(parseInt(n,10),o):parseInt(n,10),this.inputMinute=parseInt(s,10),this.inputSecond=parseInt(r||0,10)}this.period=null==this.inputHour||this.inputHour<12?"am":"pm"},convert24to12:function(t){return t?(t-1)%12+1:12},convert12to24:function(t,e){return t%12+("pm"===e?12:0)},onInput:function(t){this.selecting===P.hour?this.inputHour=this.isAmPm?this.convert12to24(t,this.period):t:this.selecting===P.minute?this.inputMinute=t:this.inputSecond=t,this.emitValue()},onChange:function(t){this.$emit("click:"+A[this.selecting],t);var e=this.selecting===(this.useSeconds?P.second:P.minute);if(this.selecting===P.hour?this.selecting=P.minute:this.useSeconds&&this.selecting===P.minute&&(this.selecting=P.second),this.inputHour!==this.lazyInputHour||this.inputMinute!==this.lazyInputMinute||this.useSeconds&&this.inputSecond!==this.lazyInputSecond){var i=this.genValue();null!==i&&(this.lazyInputHour=this.inputHour,this.lazyInputMinute=this.inputMinute,this.useSeconds&&(this.lazyInputSecond=this.inputSecond),e&&this.$emit("change",i))}},firstAllowed:function(t,e){var i="hour"===t?this.isAllowedHourCb:"minute"===t?this.isAllowedMinuteCb:this.isAllowedSecondCb;if(!i)return e;var n="minute"===t?V:"second"===t?V:this.isAmPm?e<12?M:B:I,s=n.find(function(t){return i((t+e)%n.length+n[0])});return((s||0)+e)%n.length+n[0]},genClock:function(){return this.$createElement(y,{props:{allowedValues:this.selecting===P.hour?this.isAllowedHourCb:this.selecting===P.minute?this.isAllowedMinuteCb:this.isAllowedSecondCb,color:this.color,dark:this.dark,disabled:this.disabled,double:this.selecting===P.hour&&!this.isAmPm,format:this.selecting===P.hour?this.isAmPm?this.convert24to12:function(t){return t}:function(t){return g(t,2)},light:this.light,max:this.selecting===P.hour?this.isAmPm&&"am"===this.period?11:23:59,min:this.selecting===P.hour&&this.isAmPm&&"pm"===this.period?12:0,readonly:this.readonly,scrollable:this.scrollable,size:Number(this.width)-(!this.fullWidth&&this.landscape?80:20),step:this.selecting===P.hour?1:5,value:this.selecting===P.hour?this.inputHour:this.selecting===P.minute?this.inputMinute:this.inputSecond},on:{input:this.onInput,change:this.onChange},ref:"clock"})},genPickerBody:function(){return this.$createElement("div",{staticClass:"v-time-picker-clock__container",key:this.selecting},[this.genClock()])},genPickerTitle:function(){var t=this;return this.$createElement(w,{props:{ampm:this.isAmPm,disabled:this.disabled,hour:this.inputHour,minute:this.inputMinute,second:this.inputSecond,period:this.period,readonly:this.readonly,useSeconds:this.useSeconds,selecting:this.selecting},on:{"update:selecting":function(e){return t.selecting=e},"update:period":this.setPeriod},ref:"title",slot:"title"})}},render:function(){return this.genPicker("v-picker--time")}}),H=Object(a["a"])(o,n,s,!1,null,null,null);e["default"]=H.exports;u()(H,{VCheckbox:c["a"],VContainer:h["a"],VFlex:d["a"],VLayout:f["a"],VTimePicker:E})},c671:function(t,e,i){"use strict";var n=i("3e79"),s=i("2464"),r=i("c341"),o=i("80d2"),a=i("58df"),l=Object(a["a"])(n["a"],Object(s["a"])("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:r["a"]},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1})},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=Object(o["b"])(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var i=this,n=this.windowGroup.isBooted;n&&(this.done=e),requestAnimationFrame(function(){if(!i.computedTransition)return e();i.windowGroup.internalHeight=Object(o["b"])(t.clientHeight),!n&&setTimeout(e,100)})},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var e=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[e])}}),u=i("d9bd");e["a"]=l.extend({name:"v-tab-item",props:{id:String},render:function(t){var e=l.options.render.call(this,t);return this.id&&(Object(u["d"])("id","value",this),e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id),e}})},d9a2:function(t,e,i){},f413:function(t,e,i){},fe57:function(t,e,i){"use strict";i("f413");var n=i("604c"),s={computed:{activeTab:function(){if(this.selectedItems.length)return this.selectedItems[0]},containerStyles:function(){return this.height?{height:parseInt(this.height,10)+"px"}:null},hasArrows:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint},sliderStyles:function(){return{left:this.sliderLeft+"px",transition:null!=this.sliderLeft?null:"none",width:this.sliderWidth+"px"}}}},r=i("aac8"),o=i("b64a"),a={name:"v-tabs-slider",mixins:[o["a"]],render:function(t){return t("div",this.setBackgroundColor(this.color||"accent",{staticClass:"v-tabs__slider"}))}},l=i("9d26"),u={methods:{genBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs__bar",class:this.themeClasses,ref:"bar"}),[this.genTransition("prev"),this.genWrapper(this.genContainer(t)),this.genTransition("next")])},genContainer:function(t){return this.$createElement("div",{staticClass:"v-tabs__container",class:{"v-tabs__container--align-with-title":this.alignWithTitle,"v-tabs__container--centered":this.centered,"v-tabs__container--fixed-tabs":this.fixedTabs,"v-tabs__container--grow":this.grow,"v-tabs__container--icons-and-text":this.iconsAndText,"v-tabs__container--overflow":this.isOverflowing,"v-tabs__container--right":this.right},style:this.containerStyles,ref:"container"},t)},genIcon:function(t){var e=this;return this.hasArrows&&this[t+"IconVisible"]?this.$createElement(l["a"],{staticClass:"v-tabs__icon v-tabs__icon--"+t,props:{disabled:!this[t+"IconVisible"]},on:{click:function(){return e.scrollTo(t)}}},this[t+"Icon"]):null},genItems:function(t,e){return t.length>0?t:e.length?this.$createElement(r["a"],e):null},genTransition:function(t){return this.$createElement("transition",{props:{name:"fade-transition"}},[this.genIcon(t)])},genWrapper:function(t){var e=this;return this.$createElement("div",{staticClass:"v-tabs__wrapper",class:{"v-tabs__wrapper--show-arrows":this.hasArrows},ref:"wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}]},[t])},genSlider:function(t){return t.length||(t=[this.$createElement(a,{props:{color:this.sliderColor}})]),this.$createElement("div",{staticClass:"v-tabs__slider-wrapper",style:this.sliderStyles},t)}}},c={props:{activeClass:{type:String,default:"v-tabs__item--active"},alignWithTitle:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0,validator:function(t){return!isNaN(parseInt(t))}},hideSlider:Boolean,iconsAndText:Boolean,mandatory:{type:Boolean,default:!0},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},right:Boolean,showArrows:Boolean,sliderColor:{type:String,default:"accent"},value:[Number,String]}},h={methods:{newOffset:function(t){var e=this.$refs.wrapper.clientWidth;return"prev"===t?Math.max(this.scrollOffset-e,0):Math.min(this.scrollOffset+e,this.$refs.container.clientWidth-e)},onTouchStart:function(t){this.startX=this.scrollOffset+t.touchstartX,this.$refs.container.style.transition="none",this.$refs.container.style.willChange="transform"},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs.container,e=this.$refs.wrapper,i=t.clientWidth-e.clientWidth;t.style.transition=null,t.style.willChange=null,this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)}}},d={watch:{activeTab:function(t,e){this.setOverflow(),t&&(this.tabItems&&this.tabItems(this.getValue(t,this.items.indexOf(t))),null!=e&&this.updateTabsView())},alignWithTitle:"callSlider",centered:"callSlider",fixedTabs:"callSlider",hasArrows:function(t){t||(this.scrollOffset=0)},internalValue:function(t){this.$listeners["input"]&&this.$emit("input",t)},lazyValue:"updateTabs",right:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize",scrollOffset:function(t){this.$refs.container.style.transform="translateX("+-t+"px)",this.hasArrows&&(this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon())}}},f=i("b57a"),p=i("6a18"),v=i("0d3d"),m=i("c341"),b=i("d9bd"),g=i("bfc5");e["a"]=n["a"].extend({name:"v-tabs",directives:{Resize:v["a"],Touch:m["a"]},mixins:[o["a"],f["a"],s,c,u,h,d,p["a"]],provide:function(){return{tabGroup:this,tabProxy:this.tabProxy,registerItems:this.registerItems,unregisterItems:this.unregisterItems}},data:function(){return{bar:[],content:[],isOverflowing:!1,nextIconVisible:!1,prevIconVisible:!1,resizeTimeout:null,scrollOffset:0,sliderWidth:null,sliderLeft:null,startX:0,tabItems:null,transitionTime:300,widths:{bar:0,container:0,wrapper:0}}},watch:{items:"onResize",tabs:"onResize"},mounted:function(){this.init()},methods:{checkIcons:function(){this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon()},checkPrevIcon:function(){return this.scrollOffset>0},checkNextIcon:function(){return this.widths.container>this.scrollOffset+this.widths.wrapper},callSlider:function(){var t=this;if(this.hideSlider||!this.activeTab)return!1;var e=this.activeTab;this.$nextTick(function(){e&&e.$el&&(t.sliderWidth=e.$el.scrollWidth,t.sliderLeft=e.$el.offsetLeft)})},init:function(){this.$listeners["input"]&&Object(b["d"])("@input","@change",this)},onResize:function(){if(!this._isDestroyed){this.setWidths();var t=this.isBooted?this.transitionTime:0;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateTabsView,t)}},overflowCheck:function(t,e){this.isOverflowing&&e(t)},scrollTo:function(t){this.scrollOffset=this.newOffset(t)},setOverflow:function(){this.isOverflowing=this.widths.bar<this.widths.container},setWidths:function(){var t=this.$refs.bar?this.$refs.bar.clientWidth:0,e=this.$refs.container?this.$refs.container.clientWidth:0,i=this.$refs.wrapper?this.$refs.wrapper.clientWidth:0;this.widths={bar:t,container:e,wrapper:i},this.setOverflow()},parseNodes:function(){for(var t=[],e=[],i=[],n=[],s=(this.$slots.default||[]).length,r=0;r<s;r++){var o=this.$slots.default[r];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":i.push(o);break;case"v-tabs-items":e.push(o);break;case"v-tab-item":t.push(o);break;default:n.push(o)}else n.push(o)}return{tab:n,slider:i,items:e,item:t}},registerItems:function(t){this.tabItems=t,t(this.internalValue)},unregisterItems:function(){this.tabItems=null},updateTabsView:function(){this.callSlider(),this.scrollIntoView(),this.checkIcons()},scrollIntoView:function(){if(this.activeTab){if(!this.isOverflowing)return this.scrollOffset=0;var t=this.widths.wrapper+this.scrollOffset,e=this.activeTab.$el,i=e.clientWidth,n=e.offsetLeft,s=i+n,r=.3*i;this.activeTab===this.items[this.items.length-1]&&(r=0),n<this.scrollOffset?this.scrollOffset=Math.max(n-r,0):t<s&&(this.scrollOffset-=t-s-r)}},tabProxy:function(t){this.internalValue=t}},render:function(t){var e=this.parseNodes(),i=e.tab,n=e.slider,s=e.items,r=e.item;return t("div",{staticClass:"v-tabs",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar([this.hideSlider?null:this.genSlider(n),i]),t(g["a"],{props:{dark:this.theme.isDark,light:!this.theme.isDark}},[this.genItems(s,r)])])}})}}]);
//# sourceMappingURL=chunk-d1700346.53d4be50.js.map