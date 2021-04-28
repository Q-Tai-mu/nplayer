(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var l=n(3),r=(n(0),n(120));const a={title:"\u5c5e\u6027"},b={unversionedId:"api/attrs",id:"api/attrs",isDocsHomePage:!1,title:"\u5c5e\u6027",description:"NPlayer \u5c5e\u6027\u5206\u4e3a\u5b9e\u4f8b\u5c5e\u6027\u548c\u9759\u6001\u5c5e\u6027\u3002",source:"@site/docs/api/attrs.md",slug:"/api/attrs",permalink:"/docs/api/attrs",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/api/attrs.md",version:"current",sidebar:"api",previous:{title:"\u4e8b\u4ef6",permalink:"/docs/api/events"},next:{title:"\u65b9\u6cd5",permalink:"/docs/api/methods"}},c=[{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",children:[{value:"element: HTMLElement",id:"element-htmlelement",children:[]},{value:"opts: PlayerOptions",id:"opts-playeroptions",children:[]},{value:"video: HTMLVideoElement",id:"video-htmlvideoelement",children:[]},{value:"mounted: boolean",id:"mounted-boolean",children:[]},{value:"rect: Rect",id:"rect-rect",children:[]},{value:"loading: Loading",id:"loading-loading",children:[]},{value:"poster: Poster",id:"poster-poster",children:[]},{value:"toast: Toast",id:"toast-toast",children:[]},{value:"fullscreen: Fullscreen",id:"fullscreen-fullscreen",children:[]},{value:"webFullscreen: WebFullscreen",id:"webfullscreen-webfullscreen",children:[]},{value:"shortcut: Shortcut",id:"shortcut-shortcut",children:[]},{value:"control: Control",id:"control-control",children:[]},{value:"contextmenu: ContextMenu",id:"contextmenu-contextmenu",children:[]},{value:"currentTime: number get/set",id:"currenttime-number-getset",children:[]},{value:"duration: number get",id:"duration-number-get",children:[]},{value:"buffered: TimeRanges get",id:"buffered-timeranges-get",children:[]},{value:"volume: number get/set",id:"volume-number-getset",children:[]},{value:"muted: boolean get/set",id:"muted-boolean-getset",children:[]},{value:"playbackRate: number get/set",id:"playbackrate-number-getset",children:[]},{value:"ended: boolean get",id:"ended-boolean-get",children:[]},{value:"paused: boolean get",id:"paused-boolean-get",children:[]},{value:"playing: boolean get",id:"playing-boolean-get",children:[]},{value:"loop: boolean get/set",id:"loop-boolean-getset",children:[]},{value:"Player",id:"player",children:[]},{value:"EVENT",id:"event",children:[]}]},{value:"\u9759\u6001\u5c5e\u6027",id:"\u9759\u6001\u5c5e\u6027",children:[{value:"EVENT",id:"event-1",children:[]},{value:"I18n",id:"i18n",children:[]},{value:"Icon",id:"icon",children:[]},{value:"components",id:"components",children:[]},{value:"Player",id:"player-1",children:[]}]}],i={toc:c};function o({components:e,...t}){return Object(r.b)("wrapper",Object(l.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"NPlayer \u5c5e\u6027\u5206\u4e3a\u5b9e\u4f8b\u5c5e\u6027\u548c\u9759\u6001\u5c5e\u6027\u3002"),Object(r.b)("h2",{id:"\u5b9e\u4f8b\u5c5e\u6027"},"\u5b9e\u4f8b\u5c5e\u6027"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const player = new Player()\nconsole.log(player)\n")),Object(r.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(r.b)("inlineCode",{parentName:"p"},"player")," \u5bf9\u8c61\u6765\u8bbf\u95ee\u8fd9\u4e9b\u5c5e\u6027\u3002"),Object(r.b)("h3",{id:"element-htmlelement"},"element: HTMLElement"),Object(r.b)("p",null,"\u64ad\u653e\u5668 DOM \u5143\u7d20\u3002"),Object(r.b)("h3",{id:"opts-playeroptions"},"opts: PlayerOptions"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u53c2\u6570\u3002"),Object(r.b)("h3",{id:"video-htmlvideoelement"},"video: HTMLVideoElement"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u89c6\u9891\u5143\u7d20\u3002"),Object(r.b)("h3",{id:"mounted-boolean"},"mounted: boolean"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u662f\u5426\u5df2\u6302\u8f7d\u3002"),Object(r.b)("h3",{id:"rect-rect"},"rect: Rect"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u5c3a\u5bf8\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"rect.width \u64ad\u653e\u5668\u5bbd\u5ea6"),Object(r.b)("li",{parentName:"ul"},"rect.height \u64ad\u653e\u5668\u9ad8\u5ea6"),Object(r.b)("li",{parentName:"ul"},"rect.x \u64ad\u653e\u5668 x"),Object(r.b)("li",{parentName:"ul"},"rect.y \u64ad\u653e\u5668 y"),Object(r.b)("li",{parentName:"ul"},"rect.update() \u66f4\u65b0\u64ad\u653e\u5668\u5c3a\u5bf8")),Object(r.b)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0d\u8981\u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"player.rect.update()")," \u65b9\u6cd5\uff0c\u800c\u662f\u89e6\u53d1 ",Object(r.b)("inlineCode",{parentName:"p"},"UpdateSize")," \u4e8b\u4ef6\uff0c ",Object(r.b)("inlineCode",{parentName:"p"},"player.emit('UpdateSize')")," \u3002"),Object(r.b)("h3",{id:"loading-loading"},"loading: Loading"),Object(r.b)("p",null,"\u64ad\u653e\u5668 loading \u5bf9\u8c61\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"loading.element loading DOM \u5143\u7d20"),Object(r.b)("li",{parentName:"ul"},"loading.isActive \u5f53\u524d\u662f\u5426\u663e\u793a"),Object(r.b)("li",{parentName:"ul"},"loading.show() \u663e\u793a loading"),Object(r.b)("li",{parentName:"ul"},"loading.hide() \u9690\u85cf loading")),Object(r.b)("h3",{id:"poster-poster"},"poster: Poster"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u6d77\u62a5\u5bf9\u8c61\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"poster.element poster DOM \u5143\u7d20"),Object(r.b)("li",{parentName:"ul"},"poster.isActive \u5f53\u524d\u662f\u5426\u663e\u793a"),Object(r.b)("li",{parentName:"ul"},"poster.show() \u663e\u793a poster"),Object(r.b)("li",{parentName:"ul"},"poster.hide() \u9690\u85cf poster")),Object(r.b)("h3",{id:"toast-toast"},"toast: Toast"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u63d0\u793a\u5bf9\u8c61\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"show(html: string, position?: Position, timeout = 3000): ToastItem \u663e\u793a\u4e00\u4e2a\u63d0\u793a\uff0c\u8fd4\u56de\u63d0\u793a\u5bf9\u8c61")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"type Position = 'center' | 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'\ninterface ToastItem {\n  element: HTMLElement;\n  dispose: () => void;\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"close(toastItem?: ToastItem): void \u624b\u52a8\u5173\u95ed\u4e00\u4e2a\u63d0\u793a\uff0c\u6216\u8005\u5168\u90e8\u63d0\u793a")),Object(r.b)("h3",{id:"fullscreen-fullscreen"},"fullscreen: Fullscreen"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u5168\u5c4f\u5bf9\u8c61\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"isActive \u5f53\u524d\u662f\u5426\u662f\u5168\u5c4f\u72b6\u6001"),Object(r.b)("li",{parentName:"ul"},"enableDblclick() \u542f\u7528\u53cc\u51fb\u8fdb\u5165\u5168\u5c4f"),Object(r.b)("li",{parentName:"ul"},"disableDblclick() \u7981\u7528\u53cc\u51fb\u8fdb\u5165\u5168\u5c4f"),Object(r.b)("li",{parentName:"ul"},"enter() \u8fdb\u5165\u5168\u5c4f"),Object(r.b)("li",{parentName:"ul"},"exit() \u9000\u51fa\u5168\u5c4f"),Object(r.b)("li",{parentName:"ul"},"toggle() \u8fdb\u5165\u6216\u9000\u51fa\u5168\u5c4f")),Object(r.b)("h3",{id:"webfullscreen-webfullscreen"},"webFullscreen: WebFullscreen"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u7f51\u9875\u5168\u5c4f\u5bf9\u8c61\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"isActive \u5f53\u524d\u662f\u5426\u662f\u5168\u5c4f\u72b6\u6001"),Object(r.b)("li",{parentName:"ul"},"enter() \u8fdb\u5165\u5168\u5c4f"),Object(r.b)("li",{parentName:"ul"},"exit() \u9000\u51fa\u5168\u5c4f"),Object(r.b)("li",{parentName:"ul"},"toggle() \u8fdb\u5165\u6216\u9000\u51fa\u5168\u5c4f")),Object(r.b)("h3",{id:"shortcut-shortcut"},"shortcut: Shortcut"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u5feb\u6377\u952e\u5bf9\u8c61\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"register(keyCode: number, handler: (player: Player) => void) \u6ce8\u518c\u81ea\u5b9a\u4e49\u5feb\u6377\u952e\u5904\u7406\u5668"),Object(r.b)("li",{parentName:"ul"},"unregister(keyCode: number) \u53d6\u6d88\u6ce8\u518c"),Object(r.b)("li",{parentName:"ul"},"enable() \u542f\u7528\u5feb\u6377\u952e"),Object(r.b)("li",{parentName:"ul"},"disable() \u7981\u7528\u5feb\u6377\u952e")),Object(r.b)("h3",{id:"control-control"},"control: Control"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u8fdb\u5ea6\u6761\u5bf9\u8c61\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"isActive \u5f53\u524d\u662f\u5426\u663e\u793a\u63a7\u5236\u6761"),Object(r.b)("li",{parentName:"ul"},"show() \u663e\u793a\u63a7\u5236\u6761"),Object(r.b)("li",{parentName:"ul"},"hide() \u9690\u85cf\u63a7\u5236\u6761"),Object(r.b)("li",{parentName:"ul"},"showTransient() \u663e\u793a\u63a7\u5236\u6761\uff0c\u4f46\u662f\u5230\u4e00\u5b9a\u65f6\u95f4\u4f1a\u5c1d\u8bd5\u81ea\u52a8\u9690\u85cf"),Object(r.b)("li",{parentName:"ul"},"tryHide() \u5c1d\u8bd5\u9690\u85cf\u63a7\u5236\u6761\uff0c\u6bd4\u5982\u5f53\u524d\u89c6\u9891\u6682\u505c\u72b6\u6001\uff0c\u8c03\u7528\u8be5\u65b9\u6cd5\u5c31\u4e0d\u4f1a\u9690\u85cf"),Object(r.b)("li",{parentName:"ul"},"require() \u6dfb\u52a0\u4e00\u4e2a\u63a7\u5236\u6761\u663e\u793a\u8bf7\u6c42\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"tryHide")," \u4f1a\u5224\u65ad\u662f\u5426\u6709\u8bf7\u6c42\uff0c\u5982\u679c\u5219\u4e5f\u4e0d\u4f1a\u9690\u85cf"),Object(r.b)("li",{parentName:"ul"},"release() \u91ca\u653e\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5982\u679c\u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"require"),"\uff0c\u6ca1\u6709\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u63a7\u5236\u6761\u4e0d\u4f1a\u81ea\u52a8\u9690\u85cf\u3002")),Object(r.b)("h3",{id:"contextmenu-contextmenu"},"contextmenu: ContextMenu"),Object(r.b)("p",null,"\u64ad\u653e\u5668\u53f3\u952e\u83dc\u5355\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"isActive \u5f53\u524d\u662f\u5426\u663e\u793a"),Object(r.b)("li",{parentName:"ul"},"hide() \u9690\u85cf\u53f3\u952e\u83dc\u5355")),Object(r.b)("h3",{id:"currenttime-number-getset"},"currentTime: number ","[get/set]"),Object(r.b)("p",null,"\u83b7\u53d6\u548c\u8bbe\u7f6e\u5f53\u524d\u89c6\u9891\u65f6\u95f4\u3002"),Object(r.b)("h3",{id:"duration-number-get"},"duration: number ","[get]"),Object(r.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u89c6\u9891\u957f\u5ea6\u3002"),Object(r.b)("h3",{id:"buffered-timeranges-get"},"buffered: TimeRanges ","[get]"),Object(r.b)("p",null,"\u901a video \u5143\u7d20\u7684 ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/buffered"},"buffered"),"\u3002"),Object(r.b)("h3",{id:"volume-number-getset"},"volume: number ","[get/set]"),Object(r.b)("p",null,"\u83b7\u53d6\u548c\u8bbe\u7f6e\u89c6\u9891\u97f3\u91cf\uff0c\u97f3\u91cf\u4f1a\u88ab\u6301\u4e45\u5316\u3002"),Object(r.b)("h3",{id:"muted-boolean-getset"},"muted: boolean ","[get/set]"),Object(r.b)("p",null,"\u83b7\u53d6\u548c\u8bbe\u7f6e\u89c6\u9891\u662f\u5426\u9759\u97f3\u3002"),Object(r.b)("h3",{id:"playbackrate-number-getset"},"playbackRate: number ","[get/set]"),Object(r.b)("p",null,"\u83b7\u53d6\u548c\u8bbe\u7f6e\u89c6\u9891\u64ad\u653e\u901f\u7387\u3002"),Object(r.b)("h3",{id:"ended-boolean-get"},"ended: boolean ","[get]"),Object(r.b)("p",null,"\u5f53\u524d\u89c6\u9891\u662f\u5426\u64ad\u653e\u7ed3\u675f\u3002"),Object(r.b)("h3",{id:"paused-boolean-get"},"paused: boolean ","[get]"),Object(r.b)("p",null,"\u5f53\u524d\u89c6\u9891\u662f\u5426\u6682\u505c\u3002"),Object(r.b)("h3",{id:"playing-boolean-get"},"playing: boolean ","[get]"),Object(r.b)("p",null,"\u5f53\u524d\u89c6\u9891\u662f\u5426\u5728\u64ad\u653e\u4e2d\u3002"),Object(r.b)("h3",{id:"loop-boolean-getset"},"loop: boolean ","[get/set]"),Object(r.b)("p",null,"\u83b7\u53d6\u548c\u8bbe\u7f6e\u89c6\u9891\u662f\u5426\u5faa\u73af\u64ad\u653e\u3002"),Object(r.b)("h3",{id:"player"},"Player"),Object(r.b)("p",null,"Player \u7c7b\u3002"),Object(r.b)("h3",{id:"event"},"EVENT"),Object(r.b)("p",null,"\u4e8b\u4ef6\u5bf9\u8c61\u3002\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/api/events"},"\u4e8b\u4ef6"),"\u3002"),Object(r.b)("h2",{id:"\u9759\u6001\u5c5e\u6027"},"\u9759\u6001\u5c5e\u6027"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\nconsole.log(Player)\n")),Object(r.b)("h3",{id:"event-1"},"EVENT"),Object(r.b)("p",null,"\u4e8b\u4ef6\u5bf9\u8c61\u3002\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/api/events"},"\u4e8b\u4ef6"),"\u3002"),Object(r.b)("h3",{id:"i18n"},"I18n"),Object(r.b)("p",null,"\u56fd\u9645\u5316\u5bf9\u8c61\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"t(key: string, lang?: string): string \u8fd4\u56de\u7ffb\u8bd1\u8bed\u8a00\u6587\u5b57"),Object(r.b)("li",{parentName:"ul"},"add(lang: string, transData: Record<string, string>) \u6dfb\u52a0\u7ffb\u8bd1"),Object(r.b)("li",{parentName:"ul"},"setCurrentLang(lang?: string) \u8bbe\u7f6e\u5f53\u524d\u8bed\u8a00"),Object(r.b)("li",{parentName:"ul"},"setDefaultLang(lang?: string) \u8bbe\u7f6e\u9ed8\u8ba4\u8bed\u8a00")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const key = 'Web fullscreen'\n\nI18n.add('zh-cn', {\n  [key]: '\u7f51\u9875\u5168\u5c4f'\n})\n\nconsole.log(I18n.t(key))\n")),Object(r.b)("p",null,"\u5982\u679c\u5f53\u524d\u662f\u4e2d\u6587\u73af\u5883\u65f6\u4f1a\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"p"},"\u7f51\u9875\u5168\u5c4f"),"\u3002\u5176\u4ed6\u8bed\u8a00\u73af\u5883\u65f6\u5219\u76f4\u63a5\u8fd4\u56de ",Object(r.b)("inlineCode",{parentName:"p"},"key")," \u5b57\u7b26\u4e32\u3002"),Object(r.b)("h3",{id:"icon"},"Icon"),Object(r.b)("p",null,"\u56fe\u6807\u5bf9\u8c61\u3002\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/theme"},"\u5b9a\u5236\u4e3b\u9898"),"\u3002"),Object(r.b)("h3",{id:"components"},"components"),Object(r.b)("p",null,"\u5185\u7f6e\u7ec4\u4ef6\u3002\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(r.b)("a",{parentName:"p",href:"/docs/api/components"},"\u5185\u7f6e\u7ec4\u4ef6"),"\u3002"),Object(r.b)("h3",{id:"player-1"},"Player"),Object(r.b)("p",null,"Player \u7c7b\u3002"))}o.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var l=n(0),r=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(n),s=l,m=p["".concat(b,".").concat(s)]||p[s]||d[s]||a;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,b=new Array(a);b[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,b[1]=c;for(var o=2;o<a;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);