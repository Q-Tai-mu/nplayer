!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("rplayer")):"function"==typeof define&&define.amd?define("RPlayerDanmaku",["rplayer"],e):"object"==typeof exports?exports.RPlayerDanmaku=e(require("rplayer")):t.RPlayerDanmaku=e(t.RPlayer)}(window,function(n){return s={},o.m=i=[function(t,e){t.exports=n},function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return s}),n.d(e,"c",function(){return r});var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var s=function(){return(s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var i=Array(t),o=0,e=0;e<n;e++)for(var s=arguments[e],r=0,a=s.length;r<a;r++,o++)i[o]=s[r];return i}},function(t,e,s){"use strict";var n,i,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=(i={},function(t){if(void 0===i[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}),d=[];function c(t){for(var e=-1,n=0;n<d.length;n++)if(d[n].identifier===t){e=n;break}return e}function p(t,e){for(var n={},i=[],o=0;o<t.length;o++){var s=t[o],r=e.base?s[0]+e.base:s[0],a=n[r]||0,p="".concat(r," ").concat(a);n[r]=a+1;var l=c(p),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(d[l].references++,d[l].updater(h)):d.push({identifier:p,updater:function(e,t){var n,i,o;{var s;o=t.singleton?(s=f++,n=m=m||u(t),i=y.bind(null,n,s,!1),y.bind(null,n,s,!0)):(n=u(t),i=function(t,e,n){var i=n.css,o=n.media,s=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media");s&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */"));if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n,t),function(){!function(t){if(null===t.parentNode)return;t.parentNode.removeChild(t)}(n)})}return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}(h,e),references:1}),i.push(p)}return i}function u(t){var e,n=document.createElement("style"),i=t.attributes||{};if(void 0!==i.nonce||(e=s.nc)&&(i.nonce=e),Object.keys(i).forEach(function(t){n.setAttribute(t,i[t])}),"function"==typeof t.insert)t.insert(n);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var a,l=(a=[],function(t,e){return a[t]=e,a.filter(Boolean).join("\n")});function y(t,e,n,i){var o,s,r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;t.styleSheet?t.styleSheet.cssText=l(e,r):(o=document.createTextNode(r),(s=t.childNodes)[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o))}var m=null,f=0;t.exports=function(t,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var a=p(t=t||[],r);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<a.length;e++){var n=c(a[e]);d[n].references--}for(var i=p(t,r),o=0;o<a.length;o++){var s=c(a[o]);0===d[s].references&&(d[s].updater(),d.splice(s,1))}a=i}}}},function(t,e,n){"use strict";t.exports=function(n){var p=[];return p.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(i),s=i.sources.map(function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")});return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},p.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var r=0;r<t.length;r++){var a=[].concat(t[r]);n&&i[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),p.push(a))}},p}},,,,,,,,,,function(t,e){t.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.528 21.135v2.305H6.207v-2.305h2.321m4.642 0v2.305h-2.321v-2.305h2.321m4.641 0v2.305h-2.32v-2.305h2.32m3.482-2.305H2.726a2.312 2.312 0 0 1-2.321-2.305V2.696A2.314 2.314 0 0 1 2.726.391h18.567a2.314 2.314 0 0 1 2.321 2.305v13.829a2.313 2.313 0 0 1-2.321 2.305m-10.444-8.067H8.528v2.305h2.321v-2.305m9.283 0H13.17v2.305h6.962v-2.305M6.207 6.153H3.886v2.305h2.321V6.153m13.925 0H8.528v2.305h11.604V6.153z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.62 12L12 5.67 14.37 12M11 3L5.5 17h2.25l1.12-3h6.25l1.13 3h2.25L13 3h-2z"></path></svg>'},,,,,function(t,e,n){var i=n(2),o=n(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var s={insert:"head",singleton:!1},r=(i(o,s),o.locals?o.locals:{});t.exports=r},function(t,e,n){(e=n(3)(!1)).push([t.i,".rplayer_dan{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;font-family:SimHei,Microsoft JhengHei,Arial,Helvetica,sans-serif}.rplayer_dan_pop{padding:5px 8px;font-size:12px}.rplayer_dan_mbs{margin-bottom:3px}.rplayer_dan_onoff{display:flex;align-items:center}.rplayer_dan_onoff :first-child{margin-right:8px}.rplayer_dan_send{flex:1;display:flex;align-items:center;margin:0 20px;background:hsla(0,0%,100%,.15)}.rplayer_dan_send .rplayer_tray{padding:5px}.rplayer_dan_send .rplayer_pop{color:#fff}.rplayer_dan_send svg{fill:currentColor}.rplayer_dan_send_type{display:flex;align-items:center;margin-top:5px;margin-bottom:15px}.rplayer_dan_send_type>div{margin-right:8px;padding:2px 8px;border:1px solid hsla(0,0%,100%,.5);transition:opacity .2s ease}.rplayer_dan_send_type>div:hover{opacity:.7}.rplayer_dan_send_type-active{background:hsla(0,0%,100%,.3)}.rplayer_dan_send input{flex:1;width:100px;padding:0;color:currentColor;background:transparent;border:0;outline:0}.rplayer_dan_send input::-webkit-input-placeholder{color:hsla(0,0%,100%,.5)}.rplayer_dan_send input::-moz-placeholder{color:hsla(0,0%,100%,.5)}.rplayer_dan_send input:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.rplayer_dan_send input::-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.rplayer_dan_send input::placeholder{color:hsla(0,0%,100%,.5)}.rplayer_dan_send_color{display:flex;align-items:center;flex-wrap:wrap;margin-top:5px}.rplayer_dan_send_color>div{width:1.7em;height:1.7em;margin-right:8px;margin-bottom:8px;box-shadow:0 0 1px 1px currentColor;transition:opacity .2s ease}.rplayer_dan_send_color>div:hover{opacity:.7}.rplayer_dan_send_color-active{outline:2px dotted currentColor}.rplayer_dan_setting_slider{display:flex;align-items:center;margin:15px 0;padding-right:5px}.rplayer_dan_setting_slider>:first-child{margin-right:8px}.rplayer_dan_setting_slider>:last-child{min-width:160px}.rplayer_dan_setting_item{margin:10px 0}.rplayer_dan_setting_check{display:flex;align-items:center;justify-content:space-between}.rplayer_dan_setting_check>*{margin-right:10px}.rplayer_dan_setting_check>:last-child{margin-right:0}.rplayer_dan_setting_reset{padding:2px 5px;border:1px solid hsla(0,0%,100%,.5);transition:color .2s ease,opacity .2s ease}.rplayer_dan_setting_reset:hover{border-color:var(--rplayer-primary);color:var(--rplayer-primary);opacity:.8}.rplayer_dan_flex{display:flex;align-items:center;justify-content:space-between}.rplayer_dan_d{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;will-change:transform;font-weight:700;line-height:1.125;color:#fff;text-shadow:#000 1px 0 1px,#000 0 1px 1px,#000 0 -1px 1px,#000 -1px 0 1px;perspective:1000px;-webkit-backface-visibility:hidden;backface-visibility:hidden}.rplayer_dan_d-me{border:1px solid;padding:0 1px}.rplayer_dan_d-center{left:50%;transform:translateX(-50%);will-change:auto}.rplayer_dan_tray-active{background:#448aff!important;background:var(--rplayer-primary)!important}.rplayer_dan_tray-active .rplayer_tray_tip{opacity:0!important}",""]),t.exports=e},,,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),u=n.n(i),o=u.a.utils;function r(t,e,n,i,o){var s=this;this.width=0,this.length=0,this.destination=0,this.lastX=0,this.startTime=0,this.showTime=0,this.endTime=0,this.tunnel=0,this.running=!1,this.canRecycle=!1,this.onTransitionEnd=function(){s.canRecycle=!0},this.danmaku=t,this.dom=u.a.utils.newElement("rplayer_dan_d"),this.danmaku.dom.appendChild(this.dom),this.reset(e,n,i,o)}var s=(Object.defineProperty(r.prototype,"isScroll",{get:function(){return"scroll"===this.item.type||!this.item.type},enumerable:!0,configurable:!0}),r.prototype.reset=function(t,e,n,i){var o,s;return this.item=t,this.tunnel=e,this.startTime=n,this.canRecycle=!1,this.dom.innerText=t.text,this.isScroll?(this.dom.addEventListener("transitionend",this.onTransitionEnd),this.width=this.dom.scrollWidth,this.dom.style.left=this.danmaku.width+"px",this.length=this.danmaku.width+this.width,this.destination=this.length,o=this.danmaku.displaySeconds,o/=this.danmaku.opts.speed,i&&(i.showTime>n&&(this.startTime=i.showTime),o<(s=(this.danmaku.width+this.width)/(this.danmaku.width/(i.endTime-this.startTime)))&&(o=s)),this.endTime=this.startTime+o,this.showTime=this.startTime+this.width*o/this.length+.2):(this.dom.style.opacity="",this.endTime=this.startTime+this.danmaku.staticDisplaySeconds,this.dom.classList.add(r.CENTER_CLS)),t.isMe&&this.dom.classList.add(r.ME_CLS),this.updateTop(),this.show(),this},r.prototype.setTransform=function(t){this.dom.style.transform="translateX(-"+t+"px) translateY(0) translateZ(0)"},r.prototype.setTransition=function(t){this.dom.style.transition="transform "+t+"s linear"},r.prototype.recycle=function(){return this.canRecycle=!0,this.running=!1,this.lastX=0,this.dom.removeEventListener("transitionend",this.onTransitionEnd),this.dom.removeAttribute("style"),this.hide(),this.dom.classList.remove(r.CENTER_CLS),this.dom.classList.remove(r.ME_CLS),this},r.prototype.updateTop=function(){if(this.tunnel>=this.danmaku.tunnel)return this.hide();this.show();var t=this.tunnel*this.danmaku.tunnelHeight+"px";"bottom"===this.item.type||this.isScroll&&this.danmaku.opts.bottomUp?(this.dom.style.bottom=t,this.dom.style.top=""):(this.dom.style.top=t,this.dom.style.bottom="")},r.prototype.show=function(){this.dom.style.opacity="1"},r.prototype.hide=function(){this.dom.style.opacity="0"},r.prototype.pause=function(t){var e;!this.isScroll||t<=this.startTime||this.endTime<=t||(e=this.length/(this.endTime-this.startTime)*(t-this.startTime)+this.lastX,this.setTransform(e),this.setTransition(0),this.length=this.danmaku.width-e+this.width,this.lastX=e,this.running=!1)},r.prototype.destroy=function(){this.recycle(),this.dom.parentNode.removeChild(this.dom)},r.prototype.update=function(t){return!!(this.canRecycle||!this.isScroll&&t>this.endTime)||!(this.running||this.startTime>t)&&(this.isScroll&&(this.startTime=t,this.setTransition((this.endTime-t)/this.danmaku.player.playbackRate),this.dom.offsetTop,this.setTransform(this.destination)),void(this.running=!0))},r.CENTER_CLS="rplayer_dan_d-center",r.ME_CLS="rplayer_dan_d-me",r),a=n(13),p=n.n(a),l=n(14),h=n.n(l);function d(t){var s=this;this.blockCheckboxes=[],this.otherCheckboxes=[],this.sendTypes=[],this.sendColors=[],this.onResize=function(){s.opacitySlider.updateRect(),s.areaSlider.updateRect(),s.speedSlider.updateRect(),s.fontSlider.updateRect()},this.checkSendUI=function(){var t=s.dom.getBoundingClientRect().width;!(t<170)||0===t&&500<s.danmaku.player.rect.width?s.showSend():s.hideSend()},this.onSendTrayClick=function(){s.sendPopover.show()},this.onSendFocus=function(){s.danmaku.player.controls.requireShow()},this.onSendBlur=function(){s.danmaku.player.controls.releaseShow()},this.onSendInput=function(){s.sendInput.value=s.sendInput.value.slice(0,s.danmaku.opts.maxLen)},this.onSendKeypress=function(t){var e,n,i,o;t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||(e=t.keyCode?t.keyCode:t.which,!u.a.utils.isNum(e)||13!==e||(n=s.sendInput.value)&&(i=s.danmaku.opts,o={text:n,time:Math.round(s.danmaku.player.currentTime),color:i.colors[i.color],type:g.typeMap[i.type],isMe:!0},s.danmaku.send(o),s.sendInput.value=""))},this.onSendTypeClick=function(t){return function(){return s.selectSendType(t)}},this.onSendColorClick=function(t){return function(){return s.selectSendColor(t)}},this.onOnOffChange=function(){s.danmaku.toggle(),s.danmaku.opts.on?s.tray.enable():s.tray.disable()},this.onResetClick=function(){s.danmaku.resetSetting(),s.updatePopoverUI()},this.onBlockTypeChange=function(n){return function(t){var e=s.danmaku.opts.blockTypes;t&&!e.includes(n)&&e.push(n),t||(e=e.filter(function(t){return t!==n})),s.danmaku.updateBlockTypes(e)}},this.onOpacityChange=function(t,e){e(!0),s.danmaku.updateOpacity(9*t/10+.1)},this.onAreaChange=function(t,e){e(!0),s.danmaku.updateArea(t<.2?.25:t<.5?.5:t<.8?.75:1)},this.onSpeedChange=function(t,e){e(!0),s.danmaku.updateSpeed(t+.5)},this.onFontChange=function(t,e){e(!0),s.danmaku.updateFontSize(t+.5)},this.onUnlimitedChange=function(t){s.danmaku.updateUnlimited(t)},this.onBottomUpChange=function(t){s.danmaku.updateBottomUp(t)},this.onMergeChange=function(t){s.danmaku.updateMerge(t)},this.onTrayClick=function(){s.tray.dom.classList.add(d.trayActiveCls),s.popover.show()},this.onTrayHide=function(){s.tray.dom.classList.remove(d.trayActiveCls)},this.danmaku=t,this.dom=u.a.utils.newElement("rplayer_dan_send"),this.tray=new u.a.Tray({label:"弹幕",icons:[u.a.utils.svgToDom(p.a,"rplayer_dan_icon")],onClick:this.onTrayClick}),this.popover=new u.a.Popover({player:this.danmaku.player,onHide:this.onTrayHide,cls:"rplayer_dan_pop"}),this.popover.mount(this.tray.dom),this.initPopover(),this.updatePopoverUI(),this.danmaku.player.controls.addTray(this.tray.dom,3),this.initSend(),this.danmaku.player.controls.addTray(this.dom,3),this.danmaku.player.on(u.a.Events.PLAYER_RESIZE,this.onResize),requestAnimationFrame(this.checkSendUI),this.danmaku.player.on(u.a.Events.PLAYER_RESIZE,this.checkSendUI)}var y=(d.prototype.hideSend=function(){this.dom.hidden=!0},d.prototype.showSend=function(){this.dom.hidden=!1},d.prototype.selectSendType=function(t){this.sendTypes[t]&&(this.sendTypes.forEach(function(t){t.classList.remove(d.typeActiveCls)}),this.sendTypes[t].classList.add(d.typeActiveCls),this.danmaku.opts.type=t,this.danmaku.persistSetting())},d.prototype.selectSendColor=function(t){this.sendColors[t]&&(this.sendColors.forEach(function(t){t.classList.remove(d.colorActiveCls)}),this.sendColors[t].classList.add(d.colorActiveCls),this.dom.style.color=this.danmaku.opts.colors[t]||"#fff",this.danmaku.opts.color=t,this.danmaku.persistSetting())},d.prototype.initSend=function(){var i=this,t=new u.a.Tray({icons:[u.a.utils.svgToDom(h.a)],noHoverBg:!0,onClick:this.onSendTrayClick});this.sendInput=u.a.utils.newElement("","input"),this.sendInput.setAttribute("placeholder",this.danmaku.opts.sendPlaceholder),this.sendInput.addEventListener("focus",this.onSendFocus),this.sendInput.addEventListener("blur",this.onSendBlur),this.sendInput.addEventListener("input",this.onSendInput),this.sendInput.addEventListener("keypress",this.onSendKeypress),this.sendPopover=new u.a.Popover({player:this.danmaku.player,cls:"rplayer_dan_pop",left:!0}),this.sendPopover.mount(t.dom);var e=u.a.utils.newElement(),n=this.newSettingLabel("模式"),o=u.a.utils.newElement("rplayer_dan_send_type");["滚动","顶部","底部"].forEach(function(t,e){var n=u.a.utils.newElement();n.innerText=t,o.appendChild(n),n.addEventListener("click",i.onSendTypeClick(e)),i.sendTypes.push(n)}),this.selectSendType(this.danmaku.opts.type),e.appendChild(n),e.appendChild(o);var s=u.a.utils.newElement(),r=this.newSettingLabel("颜色"),a=u.a.utils.newElement("rplayer_dan_send_color");this.danmaku.opts.colors.forEach(function(t,e){var n=u.a.utils.newElement();t=t||"#fff",n.style.color=t,n.style.background=t,i.sendColors.push(n),a.appendChild(n),n.addEventListener("click",i.onSendColorClick(e))}),this.selectSendColor(this.danmaku.opts.color),s.appendChild(r),s.appendChild(a),this.sendPopover.append(e),this.sendPopover.append(s),this.dom.appendChild(t.dom),this.dom.appendChild(this.sendInput)},d.prototype.newSettingItem=function(t){var e=u.a.utils.newElement("rplayer_dan_setting_item");return t&&e.classList.add(t),e},d.prototype.newSliderItem=function(t,e){var n=u.a.utils.newElement("rplayer_dan_setting_slider"),i=u.a.utils.newElement();return i.innerText=t,n.appendChild(i),e.mount(n),n},d.prototype.newSettingLabel=function(t,e){var n=u.a.utils.newElement();return n.innerText=t,e&&n.classList.add(e),n},d.prototype.updatePopoverUI=function(){var t;this.danmaku&&(t=this.danmaku.opts,this.onOffSwitch.update(t.on),this.blockCheckboxes[0].update(t.blockTypes.includes("scroll")),this.blockCheckboxes[1].update(t.blockTypes.includes("top")),this.blockCheckboxes[2].update(t.blockTypes.includes("bottom")),this.blockCheckboxes[3].update(t.blockTypes.includes("color")),this.opacitySlider.update(10*t.opacity/9-.1),this.areaSlider.update(t.area<=.25?0:t.area<=.5?.333:t.area<=.75?.666:1),this.speedSlider.update(t.speed-.5),this.fontSlider.update(t.fontSize-.5),this.otherCheckboxes[0].update(t.unlimited),this.otherCheckboxes[1].update(t.bottomUp),this.otherCheckboxes[2].update(t.merge))},d.prototype.initPopover=function(){var t=this.newSettingItem("rplayer_dan_flex"),e=u.a.utils.newElement("rplayer_dan_onoff"),n=this.newSettingLabel("弹幕");this.onOffSwitch=new u.a.Switch({onChange:this.onOnOffChange,small:!0}),e.appendChild(n),this.onOffSwitch.mount(e);var i=u.a.utils.newElement("rplayer_dan_setting_reset");i.innerText="恢复默认设置",i.addEventListener("click",this.onResetClick),t.appendChild(e),t.appendChild(i);var o=this.newSettingItem(),s=this.newSettingLabel("按类型屏蔽","rplayer_dan_mbs"),r=u.a.utils.newElement("rplayer_dan_setting_check");this.blockCheckboxes[0]=new u.a.Checkbox({label:"滚动",onChange:this.onBlockTypeChange("scroll")}),this.blockCheckboxes[1]=new u.a.Checkbox({label:"顶部",onChange:this.onBlockTypeChange("top")}),this.blockCheckboxes[2]=new u.a.Checkbox({label:"底部",onChange:this.onBlockTypeChange("bottom")}),this.blockCheckboxes[3]=new u.a.Checkbox({label:"彩色",onChange:this.onBlockTypeChange("color")}),this.blockCheckboxes.forEach(function(t){return t.mount(r)}),o.appendChild(s),o.appendChild(r),this.opacitySlider=new u.a.Slider({map:function(t){return Math.round(9*t/10*100+10)+"%"},onChange:this.onOpacityChange});var a=this.newSliderItem("不透明度",this.opacitySlider);this.areaSlider=new u.a.Slider({stops:[{value:0,label:"1/4"},{value:.333,label:"半屏"},{value:.666,label:"3/4"},{value:1,label:"全屏"}],stop:!0,onChange:this.onAreaChange});var p=this.newSliderItem("显示区域",this.areaSlider);this.speedSlider=new u.a.Slider({stops:[{value:0,label:"慢"},{value:1,label:"快"}],map:function(t){return Math.round(100*(t+.5))+"%"},onChange:this.onSpeedChange});var l=this.newSliderItem("弹幕速度",this.speedSlider);this.fontSlider=new u.a.Slider({stops:[{value:0,label:"小"},{value:1,label:"大"}],map:function(t){return Math.round(100*(t+.5))+"%"},onChange:this.onFontChange});var h=this.newSliderItem("字体大小",this.fontSlider),d=this.newSettingItem("rplayer_dan_setting_check");this.otherCheckboxes[0]=new u.a.Checkbox({label:"不限弹幕",onChange:this.onUnlimitedChange}),this.otherCheckboxes[1]=new u.a.Checkbox({label:"从下到上",onChange:this.onBottomUpChange}),this.otherCheckboxes[2]=new u.a.Checkbox({label:"合并重复",onChange:this.onMergeChange}),this.otherCheckboxes.forEach(function(t){return t.mount(d)}),this.popover.append(t),this.popover.append(o),this.popover.append(a),this.popover.append(p),this.popover.append(l),this.popover.append(h),this.popover.append(d)},d.trayActiveCls="rplayer_dan_tray-active",d.typeActiveCls="rplayer_dan_send_type-active",d.colorActiveCls="rplayer_dan_send_color-active",d);function m(t){var e,r=this;this.prevTime=-1,this.tunnel=0,this.tunnelHeight=0,this.items={},this.bullets=[],this.pool=[],this.scroll=[],this.top=[],this.bottom=[],this.displaySeconds=0,this.staticDisplaySeconds=5,this.init=function(){r.updateDisplaySeconds(),r.updateTunnelHeight(),r.updateTunnel(),r.on()},this.onTimeUpdate=function(){if(!r.player.paused){var t=r.player.currentTime,e=r.load(t);if(e||r.bullets.length){if(e)for(var n=0,i=e.length;n<i&&r.insert(e[n],t,n);n++);for(var o,s=[],n=0,i=r.bullets.length;n<i;n++)(o=r.bullets[n]).update(t)?r.recycleBullet(o):s.push(o);r.bullets=s}}},this.onResize=function(){r.updateTunnelHeight(),r.updateTunnel(),r.updateDisplaySeconds()},this.onSeeked=function(){r.clear(),r.prevTime=-1},this.pause=function(){var e=r.player.currentTime;r.bullets.forEach(function(t){return t.pause(e)})},this.dom=u.a.utils.newElement("rplayer_dan"),this.opts=((e=t).items=e.items||[],e.on=o.isBool(e.on)?e.on:!!e.items.length,e.blockTypes=e.blockTypes||[],e.opacity=o.isNum(e.opacity)?o.clamp(e.opacity,.1):1,e.area=o.isNum(e.area)?o.clamp(e.area,.25):.5,e.speed=o.isNum(e.speed)?o.clamp(e.speed,.5,1.5):1,e.fontSize=o.isNum(e.fontSize)?o.clamp(e.fontSize,.5,1.5):1,e.unlimited=!!o.isBool(e.unlimited)&&e.unlimited,e.bottomUp=!!o.isBool(e.bottomUp)&&e.bottomUp,e.merge=!!o.isBool(e.merge)&&e.merge,e.staticFrames=e.staticFrames||300,Array.isArray(e.colors)&&e.colors.length||(e.colors=["","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FF5722","#607D8B"]),e.sendPlaceholder=o.isStr(e.sendPlaceholder)?e.sendPlaceholder:"发个弹幕",e.color=o.clamp(e.color||0,0,e.colors.length-1),e.type=o.clamp(e.type||0,0,2),e.sendHide=e.sendHide||!1,e.maxLen=e.maxLen||50,e.baseFontSize=e.baseFontSize||24,e),this.addItems(this.opts.items),this.setDefaultOptions(this.opts)}var f=(m.prototype.install=function(t){this.player=t,this.player.appendChild(this.dom),this.restoreSetting(),this.updateSetting(),t.on(u.a.Events.PAUSE,this.pause),t.on(u.a.Events.ENDED,this.pause),t.on(u.a.Events.PLAYER_RESIZE,this.onResize),t.on(u.a.Events.SEEKED,this.onSeeked),t.on(u.a.Events.LOADED_METADATA,this.init),new y(this),document.contains(t.dom)&&this.init()},Object.defineProperty(m.prototype,"width",{get:function(){return this.player.rect.width},enumerable:!0,configurable:!0}),Object.defineProperty(m.prototype,"height",{get:function(){return this.player.rect.height},enumerable:!0,configurable:!0}),Object.defineProperty(m.prototype,"fontSize",{get:function(){return this.opts.baseFontSize*this.opts.fontSize},enumerable:!0,configurable:!0}),Object.defineProperty(m.prototype,"defaultSetting",{get:function(){var t=Object(c.a)({},this.DEFAULT_SETTING);return t.blockTypes=Object(c.c)(t.blockTypes),t},enumerable:!0,configurable:!0}),m.prototype.load=function(t){if((t|=0)!==this.prevTime&&(this.prevTime=t,this.items[t])){var n,e=this.items[t],i=this.opts.blockTypes;if(i.length&&(e=e.filter(function(t){return!(-1<i.indexOf(t.type)||!t.type&&-1<i.indexOf("scroll")||t.color&&-1<i.indexOf("color"))})),e.length)return this.opts.merge&&(n={},e.forEach(function(t){n[t.text]=t}),e=Object.keys(n).reduce(function(t,e){return t.push(n[e]),t},[])),e}},m.prototype.getShortestTunnel=function(){for(var t=1/0,e=-1,n=null,i=0;i<this.tunnel;i++){if(!this.scroll[i]||this.scroll[i].canRecycle)return[i,null];var o=this.scroll[i].showTime;o<t&&(t=o,e=i,n=this.scroll[i])}return[e,n]},m.prototype.getStaticEmptyTunnel=function(t){for(var e=-1,n=0;n<this.tunnel;n++)if(!this[t][n]||this[t][n].canRecycle){e=n;break}return e},m.prototype.insert=function(t,e,n,i){var o,s,r;return void 0===n&&(n=0),"top"===t.type||"bottom"===t.type?-1<(s=this.getStaticEmptyTunnel(t.type))&&(this[t.type][s]=this.getBullet(t,s,e),this.bullets.push(this[t.type][s]),t=void 0):(s=(o=this.getShortestTunnel())[0],(!(r=o[1])||r.showTime<=e+2)&&(this.scroll[s]=this.getBullet(t,s,e,r),this.bullets.push(this.scroll[s]),t=void 0)),!t||!(!this.opts.unlimited&&!i)&&(this.bullets.push(this.getBullet(t,n%this.tunnel,e)),!0)},m.prototype.getBullet=function(t,e,n,i){var o=this.pool.pop();return o?o.reset(t,e,n,i):new s(this,t,e,n,i)},m.prototype.recycleBullet=function(t){this.pool.length<30?this.pool.push(t.recycle()):t.destroy()},m.prototype.clear=function(){var e=this;this.bullets.forEach(function(t){return e.recycleBullet(t)}),this.bullets=[],this.scroll=[],this.top=[],this.bottom=[]},m.prototype.restoreSetting=function(){var t;this.player&&(t=this.player.storage.get("danmaku",{}),this.opts=u.a.utils.extend(this.opts,t))},m.prototype.getPersistOpts=function(t){void 0===t&&(t=this.opts);var e=t.on,n=t.blockTypes,i=t.opacity,o=t.area,s=t.speed,r=t.fontSize,a=t.unlimited,p=t.bottomUp,l=t.merge,h=t.color,d=t.type;return{on:e,blockTypes:Object(c.c)(n),opacity:i,area:o,speed:s,fontSize:r,unlimited:a,bottomUp:p,merge:l,color:h,type:d}},m.prototype.setDefaultOptions=function(t){this.DEFAULT_SETTING=this.getPersistOpts(t)},m.prototype.persistSetting=function(){this.player&&this.player.storage.set({danmaku:this.getPersistOpts()})},m.prototype.resetSetting=function(){this.opts=Object(c.a)(Object(c.a)({},this.opts),this.defaultSetting),this.updateSetting()},m.prototype.on=function(){this.off(),this.player.on(u.a.Events.TIME_UPDATE,this.onTimeUpdate),this.opts.on=!0},m.prototype.off=function(){this.player.off(u.a.Events.TIME_UPDATE,this.onTimeUpdate),this.clear(),this.opts.on=!1},m.prototype.toggle=function(){this.opts.on?this.off():this.on()},m.prototype.addItem=function(t){t&&t.text&&(this.items[t.time]=this.items[t.time]||[],this.items[t.time].push(t))},m.prototype.addItems=function(t){var e=this;Array.isArray(t)?t.forEach(function(t){return e.addItem(t)}):this.addItem(t)},m.prototype.resetItems=function(t){this.items={},this.addItems(t)},m.prototype.send=function(t){t&&(this.addItem(t),this.insert(t,t.time,0,!0))},m.prototype.updateTunnelHeight=function(){var t=u.a.utils.newElement("rplayer_dan_d");t.innerText="字",this.dom.appendChild(t),t.scrollHeight&&(this.tunnelHeight=t.offsetHeight+1),this.dom.removeChild(t)},m.prototype.updateTunnel=function(){this.tunnel=this.height*this.opts.area/this.tunnelHeight|0},m.prototype.updateDisplaySeconds=function(){this.displaySeconds=this.width/128},m.prototype.updateSetting=function(){this.updateBlockTypes(),this.updateOpacity(),this.updateArea(),this.updateSpeed(),this.updateFontSize(),this.updateUnlimited(),this.updateBottomUp(),this.updateMerge()},m.prototype.updateOpacity=function(t){void 0===t&&(t=this.opts.opacity),this.dom.style.opacity=String(t),this.persistSetting()},m.prototype.updateSpeed=function(t){void 0===t&&(t=this.opts.speed),this.opts.speed=t,this.persistSetting()},m.prototype.updateFontSize=function(t){void 0===t&&(t=this.opts.fontSize),this.opts.fontSize=t,this.dom.style.fontSize=this.fontSize+"px",this.updateTunnelHeight(),this.updateTunnel(),this.bullets.forEach(function(t){return t.updateTop()}),this.persistSetting()},m.prototype.updateArea=function(t){void 0===t&&(t=this.opts.area),this.opts.area=t,this.updateTunnel(),this.bullets.forEach(function(t){return t.updateTop()}),this.persistSetting()},m.prototype.updateMerge=function(t){void 0===t&&(t=this.opts.merge),this.opts.merge=t,this.persistSetting()},m.prototype.updateUnlimited=function(t){void 0===t&&(t=this.opts.unlimited),this.opts.unlimited=t,this.persistSetting()},m.prototype.updateBottomUp=function(t){void 0===t&&(t=this.opts.bottomUp),this.opts.bottomUp=t,this.bullets.forEach(function(t){return t.updateTop()}),this.persistSetting()},m.prototype.isAllowedType=function(t,e){return void 0===e&&(e=this.opts.blockTypes),!(e.includes(t.type)||e.includes("scroll")&&!t.type||e.includes("color")&&t.color)},m.prototype.updateBlockTypes=function(e){var n=this;void 0===e&&(e=this.opts.blockTypes),(this.opts.blockTypes=e).length?this.bullets.forEach(function(t){n.isAllowedType(t.item,e)?t.show():t.hide()}):this.bullets.forEach(function(t){return t.show()}),this.persistSetting()},m.typeMap=["scroll","top","bottom"],m),g=(n(19),e.default=f)}],o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=23).default;function o(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var i,s});
//# sourceMappingURL=index.js.map