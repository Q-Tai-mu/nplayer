(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),i=(n(0),n(117));const a={title:"\u8bbe\u7f6e\u83dc\u5355"},c={unversionedId:"settings",id:"settings",isDocsHomePage:!1,title:"\u8bbe\u7f6e\u83dc\u5355",description:"\u8bbe\u7f6e\u83dc\u5355\u662f\u63a7\u5236\u6761\u4e2d\u7684\u8bbe\u7f6e\u7ec4\u4ef6\uff0c\u4e5f\u5c31\u662f \u63a7\u5236\u6761\u7ae0\u8282 \u4e2d\u7684 settings \u9879\u3002",source:"@site/docs/settings.md",slug:"/settings",permalink:"/docs/settings",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/settings.md",version:"current",sidebar:"docs",previous:{title:"\u63a7\u5236\u6761",permalink:"/docs/control"},next:{title:"\u6d77\u62a5",permalink:"/docs/poster"}},o=[{value:"SettingItem",id:"settingitem",children:[]},{value:"switch \u7c7b\u578b",id:"switch-\u7c7b\u578b",children:[]},{value:"select \u7c7b\u578b",id:"select-\u7c7b\u578b",children:[]}],p={toc:o};function l({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u8bbe\u7f6e\u83dc\u5355\u662f\u63a7\u5236\u6761\u4e2d\u7684\u8bbe\u7f6e\u7ec4\u4ef6\uff0c\u4e5f\u5c31\u662f ",Object(i.b)("a",{parentName:"p",href:"/docs/control"},"\u63a7\u5236\u6761\u7ae0\u8282")," \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"settings")," \u9879\u3002"),Object(i.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"settings")," \u53c2\u6570\u81ea\u7531\u7684\u6dfb\u52a0\u548c\u79fb\u9664\u8bbe\u7f6e\u9879\u3002",Object(i.b)("inlineCode",{parentName:"p"},"settings")," \u7684\u9ed8\u8ba4\u53c2\u6570\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"['speed']"),"\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u53ea\u6709\u4e00\u4e2a\u8c03\u8282\u89c6\u9891\u64ad\u653e\u901f\u5ea6\u7684\u8bbe\u7f6e\u9879\u76ee\u3002"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"settings")," \u6570\u7ec4\u4e2d\uff0c\u9664\u4e86\u5b57\u7b26\u4e32\u8fd8\u53ef\u4ee5\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"SettingItem")," \u5bf9\u8c61\uff0c\u5b83\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u9879\u3002"),Object(i.b)("h2",{id:"settingitem"},"SettingItem"),Object(i.b)("p",null,"\u5b83\u7684\u63a5\u53e3\u5b9a\u4e49\u5982\u4e0b\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"interface SettingItemOption<T = any> {\n  html?: string;\n  selectedHtml?: string;\n  value?: T;\n}\n\ninterface SettingItem<T = any> {\n  id?: string;\n  html?: string;\n  type?: 'switch' | 'select';\n  checked?: boolean;\n  options?: SettingItemOption<T>[];\n  value?: T;\n  init?: (player: Player, item: SettingItem) => void;\n  change?: (value: T, player: Player, item: SettingItem) => void;\n}\n")),Object(i.b)("p",null,"\u5176\u4e2d ",Object(i.b)("inlineCode",{parentName:"p"},"id")," \u53c2\u6570\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"SettingItem")," \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"id"),"\uff0c\u5c31\u50cf\u4e0a\u9762\u63d0\u5230\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"speed"),"\u3002\u5982\u679c\u4f20\u5165\u7684\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u65f6\uff0c\u5c31\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u5b57\u7b26\u4e32\u627e\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"id")," \u4e0e\u4e4b\u5bf9\u5e94\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"SettingItem")," \u3002"),Object(i.b)("p",null,"\u5f53\u7136\u5728\u81ea\u5df1\u4f7f\u7528\u65f6\u65e0\u9700\u8bbe\u7f6e ",Object(i.b)("inlineCode",{parentName:"p"},"id")," \u53c2\u6570\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"id")," \u53c2\u6570\u662f\u5728\u7f16\u5199\u7b2c\u4e09\u65b9\u63d2\u4ef6\u65f6\u624d\u4f1a\u4f7f\u7528\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b ",Object(i.b)("a",{parentName:"p",href:"/docs/plugin"},"\u63d2\u4ef6\u7ae0\u8282"),"\u3002"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"html")," \u5c31\u662f\u5728\u83dc\u5355\u9879\u663e\u793a\u7684 label \u63d0\u793a\uff0c\u5982\uff0c ",Object(i.b)("inlineCode",{parentName:"p"},"speed")," \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"html"),' \u662f"\u64ad\u653e\u901f\u5ea6"\u3002'),Object(i.b)("p",null,"\u8bbe\u7f6e\u83dc\u5355\u9879\u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"switch")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"select"),"\uff0c\u4e0d\u540c\u7c7b\u578b\u7684\u83dc\u5355\u9879\uff0c\u5b83\u4eec\u7684\u5fc5\u586b\u53c2\u6570\u5e76\u4e0d\u4e00\u6837\u3002"),Object(i.b)("h2",{id:"switch-\u7c7b\u578b"},"switch \u7c7b\u578b"),Object(i.b)("h2",{id:"select-\u7c7b\u578b"},"select \u7c7b\u578b"))}l.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);