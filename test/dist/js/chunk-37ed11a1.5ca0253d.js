(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37ed11a1"],{"05ec":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({attrs:{icon:"",dark:""}},Object.assign({},o,i)),[a("v-icon",[t._v("add")])],1)]}}],null,!0)},[a("span",[t._v("Add Job")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-text",[a("v-container",{attrs:{"grid-list-sm":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Launch Job")])])],1),a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{disabled:t.advanced_checkbox,items:t.items,"item-text":"job_name",label:"Jobs","return-object":"",required:""},model:{value:t.selected_job,callback:function(e){t.selected_job=e},expression:"selected_job"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{outline:"",label:"data"},model:{value:t.job_route_data,callback:function(e){t.job_route_data=e},expression:"job_route_data"}})],1),a("v-flex",{attrs:{xs12:"",md3:"",lg3:""}},[a("v-checkbox",{attrs:{label:"Advance"},model:{value:t.advanced_checkbox,callback:function(e){t.advanced_checkbox=e},expression:"advanced_checkbox"}})],1),a("v-flex",{attrs:{xs12:"",md9:"",lg9:""}},[a("v-text-field",{attrs:{label:"Task Route",placeholder:"Advance (not needed)",disabled:!t.advanced_checkbox,outline:""},model:{value:t.advanced_task_route,callback:function(e){t.advanced_task_route=e},expression:"advanced_task_route"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.clicked_launch}},[t._v("Launch")])],1)],1)],1)},o=[],n=a("f499"),s=a.n(n),r={methods:{clicked_launch:function(){var t=JSON.parse(this.job_route_data);if(t){console.log("SDS");var e=null,a=null,i=null;this.advanced_checkbox?(e=this.advanced_task_route,a="Anon Job: "+e):(e=this.selected_job.route,a=this.selected_job.job_name),i="Launcher";var o={route:"bd.@md.slave.job.add",data:{job_data:{name:a},tasks_data:[{name:i,route:e,data:t}]}};console.log("JOB LAUNCH MSG: "+s()(o));var n=this.$socket.emit("forward",o);n.connected&&(this.dialog=!1)}}},data:function(){return{advanced_checkbox:!1,advanced_task_route:"",job_route_data:"{}",selected_job:null,items:[{job_name:"Swing Trading",route:"bd.sd.@BTV1.trade.swing",rdata:{},value:"1"},{job_name:"Echo",route:"bd.sd.@BTV1.echo.job",rdata:{},value:"2"},{job_name:"Create new instagram bots",route:"bd.sd.@IGFV1.^bot.users.create",rdata:{msgs:[{msg:4},{msg:5},{msg:6}]},value:"3"}],dialog:!1}}},c=r,l=a("2877"),d=a("6544"),u=a.n(d),h=a("8336"),v=a("b0af"),f=a("99d9"),p=a("12b2"),b=a("ac7c"),m=a("a523"),g=a("169a"),x=a("0e8f"),_=a("132d"),w=a("a722"),k=a("b56d"),j=a("9910"),y=a("2677"),I=a("a844"),O=a("3a2f"),T=Object(l["a"])(c,i,o,!1,null,null,null);e["default"]=T.exports;u()(T,{VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:p["a"],VCheckbox:b["a"],VContainer:m["a"],VDialog:g["a"],VFlex:x["a"],VIcon:_["a"],VLayout:w["a"],VSelect:k["a"],VSpacer:j["a"],VTextField:y["a"],VTextarea:I["a"],VTooltip:O["a"]})},2677:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var i=a("8654"),o=a("a844"),n=a("7cf7"),s=a("ab6d"),r=a("d9bd"),c={functional:!0,$_wrapperFor:i["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var a=e.props,l=e.data,d=e.slots,u=e.parent;Object(s["a"])(l);var h=Object(n["a"])(d(),t);return a.textarea&&Object(r["d"])("<v-text-field textarea>","<v-textarea outline>",c,u),a.multiLine&&Object(r["d"])("<v-text-field multi-line>","<v-textarea>",c,u),a.textarea||a.multiLine?(l.attrs.outline=a.textarea,t(o["a"],l,h)):t(i["a"],l,h)}}},"3a2f":function(t,e,a){"use strict";a("60e8");var i=a("b64a"),o=a("163b"),n=a("c69d"),s=a("30d4"),r=a("b8d7"),c=a("98a1"),l=a("80d2"),d=a("d9bd");function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e["a"]={name:"v-tooltip",mixins:[i["a"],o["a"],n["a"],s["a"],r["a"],c["a"]],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,o=this.isAttached?e.offsetLeft:e.left,n=0;return this.top||this.bottom||i?n=o+e.width/2-a.width/2:(this.left||this.right)&&(n=o+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),this.calcXOverflow(n,this.dimensions.content.width)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,i=this.isAttached?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=i+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=i+e.height/2-a.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),this.calcYOverflow(o+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":""},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(l["b"])(this.maxWidth),minWidth:Object(l["b"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick(function(){t.value&&t.callActivate()})},mounted:function(){"v-slot"===Object(l["l"])(this,"activator",!0)&&Object(d["a"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,e=this.disabled?{}:{mouseenter:function(e){t.getActivator(e),t.runDelay("open")},mouseleave:function(e){t.getActivator(e),t.runDelay("close")}};if("scoped"===Object(l["l"])(this,"activator")){var a=this.$scopedSlots.activator({on:e});return this.activatorNode=a,a}return this.$createElement("span",{on:e,ref:"activator"},this.$slots.activator)}},render:function(t){var e,a=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},u(e,this.contentClass,!0),u(e,"menuable__content__active",this.isActive),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[a]),this.genActivator()])}}},"60e8":function(t,e,a){},"7e63":function(t,e,a){},a844:function(t,e,a){"use strict";a("7e63");var i=a("8654"),o=a("d9bd"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};e["a"]={name:"v-textarea",extends:i["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return n({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||i["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(o["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}}}}]);
//# sourceMappingURL=chunk-37ed11a1.5ca0253d.js.map