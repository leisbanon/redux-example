webpackJsonp([2],{125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"List",function(){return c}),n.d(t,"SubHeader",function(){return o});var r=n(34),a=n.n(r),l=function(e){return a()({loader:function(){return n(129)("./"+e)},loading:function(){return null}})},c=l("list/list"),o=l("subHeader/subHeader.jsx")},126:function(e,t,n){"use strict";e.exports=n(127)},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n(0)),a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function(e){function t(){return a(this,t),c(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component),u=function(){return function(e){return e}},i=function(e,t){return e===t},s=function(){},d=function(e){return e};t.AppContainer=o,t.hot=u,t.areComponentsEqual=i,t.setConfig=s,t.cold=d},129:function(e,t,n){function r(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var a={"./":[125],"./index":[125],"./index.js":[125],"./list/list":[121,13],"./list/list.css":[130,15],"./list/list.jsx":[121,13],"./subHeader/subHeader":[128,14],"./subHeader/subHeader.jsx":[128,14]};r.keys=function(){return Object.keys(a)},r.id=129,e.exports=r},135:function(e,t,n){e.exports=n.p+"static/media/img0.6aab8b61.png"},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var r=n(0),a=n.n(r),l=n(126),c=(n.n(l),n(125)),o=n(135),u=function(){return a.a.createElement("div",null,a.a.createElement(c.SubHeader,{title:"\u524d\u8a00"}),a.a.createElement("p",{className:"indent"},"\u4e00\u822c\u6211\u4eec\u5f00\u53d1React \u9879\u76ee\uff0c\u4f7f\u7528\u5230\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u53ef\u80fd\u662fRedux \u6216\u8005 Mobx. \u5f53\u7136\u4f7f\u7528Redux \u7684\u8fd8\u662f\u5360\u5927\u90e8\u5206\u7684\u3002\u6240\u4ee5\u672c\u5b9e\u4f8b\u8fd8\u662f\u9488\u5bf9Redux \u5c55\u5f00\u4e00\u6b65\u4e00\u6b65\u7684\u89e3\u5228\u3002"),a.a.createElement("p",{className:"indent"},"\u5b9e\u9645\u4e0a\u6211\u4eec\u5b66\u4e60\u5e76\u4f7f\u7528Redux \u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u4e14\u80fd\u8f83\u5feb\u7684\u4e0a\u624b\u5e76\u5f00\u53d1\u3002\u4f46\u662fRedux \u4e00\u4e9b\u6982\u5ff5\u6027\u7684\u95ee\u9898\u6216\u8005\u539f\u7406\u95ee\u9898\u662f\u6bd4\u8f83\u590d\u6742\u7684\uff01\u5bf9\u4e8e\u521d\u5b66\u8005\u5982\u679c\u6ca1\u6709\u5b9e\u9645\u7684\u6848\u4f8b \u6216\u8005 \u7cfb\u7edf\u7684\u4e86\u89e3Redux\uff0c\u53ef\u80fd\u770b\u5b98\u7f51\u63d0\u4f9b\u7684\u6587\u6863\u90fd\u662f\u4e91\u91cc\u96fe\u91cc\u3002"),a.a.createElement("p",{className:"indent"},"\u81ea\u5df1\u4ece\u5bf9Redux \u7684\u5b66\u4e60\uff0c\u53c2\u8003\u4e00\u4e9b\u7f51\u4e0a\u7684\u6587\u7ae0\u57fa\u672c\u90fd\u662f\u6bd4\u8f83\u96f6\u788e\uff0c\u4e0d\u7cfb\u7edf\uff0c\u81ea\u7136\u5728\u4f7f\u7528Redux\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u600e\u4e48\u7406\u89e3\u3002\u81ea\u5df1\u4e5f\u662f\u5927\u6982\u82b1\u8d39\u67092\u5468\u7684\u65f6\u95f4\uff0c\u5bf9Redux \u91cd\u8981\u7684\u5e94\u7528\u8fdb\u884c\u5f52\u6863\u3002\u5982\u679c\u4f60\u901a\u8fc7\u672c\u6587\u5b66\u4e60Redux\uff0c\u76f8\u4fe1\u5bf9\u4f60\u7406\u89e3\u5e76\u4f7f\u7528\u5b83\u662f\u5f88\u6709\u5e2e\u52a9\u7684\uff0c\u9605\u8bfb\u5e76\u4e0b\u8f7d\u8be5\u5de5\u7a0b\u67e5\u770b\u5177\u4f53\u7684Redux \u662f\u5982\u4f55\u8fd0\u4f5c\u7684\uff0c\u8fd9\u6bd4\u770b\u6587\u6863\u8981\u5feb\u5f88\u591a\u3002"),a.a.createElement("p",{className:"indent"},"\u5e9f\u8bdd\u4e0d\u591a\u8bf4\u3002\u8fd9\u91cc\u5982\u679c\u4f60\u5728\u5b66\u4e60\u672c\u7247\u6587\u7ae0\uff0c\u56e0\u4e3a\u5728Redux \u8bbe\u8ba1\u4e0a\u8fd8\u662f\u6bd4\u8f83\u590d\u6742\uff0c\u5e0c\u671b\u4f60\u662f\u4e00\u7ae0\u4e00\u7ae0\u7684\u9605\u8bfb\uff0c\u8fd9\u4f60\u53ef\u80fd\u8981\u6709\u70b9\u8010\u5fc3\u3002\u5f53\u7136\u540e\u9762\u6587\u7ae0\u6211\u4f1a\u5c3d\u91cf\u7684\u7528\u901a\u4fd7\u7684\u8bed\u8a00\u53bb\u8bf4\u660e\u3002"),a.a.createElement(c.SubHeader,{title:"\u4eceNPM \u5b89\u88c5"}),a.a.createElement("p",null,"\u9996\u5148\u5b89\u88c5\u6211\u4eec\u7684Redux\uff1a"),a.a.createElement("pre",null,a.a.createElement("div",{className:"color-green"},"// \u5b89\u88c5Redux"),a.a.createElement("div",null,"npm install redux --save")),a.a.createElement(c.SubHeader,{title:"Redux \u6838\u5fc3\u6982\u5ff5"}),a.a.createElement("p",{className:"indent"},"Redux \u4e3b\u8981\u6709\u4ee5\u4e0b\u4e00\u4e2a\u6838\u5fc3\u7684\u90e8\u5206\uff0c\u7406\u89e3\u4e86\u5b83\uff0c\u5728\u4f7f\u7528Redux \u5c31\u201c\u5fc3\u65f7\u795e\u6021\u201d\u4e86\uff0c\u5982\u4e0b\uff1a"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("p",{className:"color-green indent"},a.a.createElement("span",{className:"color-red"},"Store => "),"\u4f7f\u7528Redux \u662f\u63d0\u4f9b\u7ed9\u6211\u4eec\u72b6\u6001\u7ba1\u7406\u7684\u80fd\u529b\uff0c\u7ec4\u4ef6\u4e4b\u95f4\u6839\u636e\u8be5\u72b6\u6001\u6765\u786e\u5b9a\u662f\u5426\u53d1\u751f\u53d8\u5316\u3002\u72b6\u6001\u662fState\uff0c\u90a3\u4e48\u662f\u8c01\u6765\u7ba1\u7406State\uff1f \u5f88\u660e\u663e\uff01Store \u5c31\u662f\u4f20\u8bf4\u4e2d\u80fd\u7ba1\u7406Stata \u7684\u5bf9\u8c61\u3002\u5b9e\u9645\u6211\u4eec\u53ef\u4ee5\u628aStore \u770b\u6210\u662f\u4e00\u4e2a\u4ed3\u5e93\uff0c\u4ed3\u5e93\u4e2d\u5305\u542b\u6211\u4eec\u6240\u6709\u9700\u8981\u7684\u72b6\u6001\u6570\u636e\u3002")),a.a.createElement("li",null,a.a.createElement("p",{className:"color-green indent"},a.a.createElement("span",{className:"color-red"},"Action => "),"action\u662f\u552f\u4e00Store \u7684\u6570\u636e\u6765\u6e90\u3002\u662f\u6570\u636e\u4ece\u7528\u5e94\u7528\u4f20\u8f93\u5230Store \u7684\u552f\u4e00\u6765\u6e90\uff0c\u8fd9\u6837\u5c31\u597d\u7406\u89e3\u4e86\u3002\u4e00\u822c\u901a\u8fc7 store.dispatch(","{..}",") Action \u4f20\u5165\u5230Store \u4ed3\u5e93\u4e2d\u3002")),a.a.createElement("li",null,a.a.createElement("p",{className:"color-green indent"},a.a.createElement("span",{className:"color-red"},"Reducer => "),"Reducer \u662f\u6307\u5b9a\u5e94\u7528\u72b6\u6001\u5982\u4f55\u54cd\u5e94Action \u53d1\u9001\u5230Store\u7684 \u3002\u5b83 \u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u63cf\u8ff0\u6211\u4eec\u5982\u4f55\u53bb\u66f4\u65b0State\uff0c\u7b80\u5355\u7684\u7406\u89e3\u72b6\u6001\u7684\u53d8\u66f4\u7684\u903b\u8f91\u7684\u662f\u5728Reducer \u51fd\u6570\u4e2d\u5904\u7406\uff0c\u5904\u7406\u5b8c\u6210\u5e76\u8fd4\u56de\u7ed9\u6211\u4eec\u66f4\u65b0\u4e4b\u540e\u7684State."))),a.a.createElement(c.SubHeader,{title:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528Redux"}),a.a.createElement("h4",{style:{marginBottom:"5px"}},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528Redux?"),a.a.createElement("div",null,"\u2003\u2003\u9996\u5148\u6211\u4eec\u77e5\u9053\uff1a\u5728\u4f7f\u7528React\uff0cReact \u505a\u4e3a\u6784\u5efa\u7528\u6237UI \u7684\u6846\u67b6\uff0c\u7ec4\u4ef6\u7684\u6982\u5ff5\u5728\u5e94\u7528\u4e2d\u81f3\u5173\u91cd\u8981\u3002\u53ef\u4ee5\u7b80\u5355\u8bf4\uff0cReact \u9879\u76ee\u662f\u6240\u6709\u7ec4\u4ef6\u96c6\u6210\u4e3a\u4e00\u4f53\u7684\u5e94\u7528\u3002\u5b9a\u4e49\u7ec4\u4ef6\u7684\u65b9\u5f0f\u4e5f\u6781\u4e3a\u7b80\u5355\uff0c\u5f53\u4f60\u5bf9React \u6846\u67b6\u719f\u6089\u4f7f\u7528\u4e4b\u540e\u4f1a\u53d1\u73b0\u5176\u53ef\u81ea\u5b9a\u4e49\u975e\u5e38\u5f3a\uff0c\u76f8\u6bd4\u4e8eAngular.js \uff0cReact \u6ca1\u6709\u66f4\u591a\u5728\u8bed\u6cd5\u89c4\u5219\u4e0a\u7684\u9650\u5236\u3002"),a.a.createElement("p",null,"\u2003\u2003\u90a3\u4e48\u5f53\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u8d8a\u6765\u8d8a\u5927\uff0c\u7236\u7ec4\u4ef6\u6240\u5d4c\u5957\u5b50\u7ec4\u4ef6\u8d8a\u6765\u8d8a\u591a\uff0c\u5f53\u9876\u5c42\u7ec4\u4ef6\u9700\u8981\u4f20\u9012Props Data \u7ed9\u6700\u4f4e\u5c42\u7ec4\u4ef6\u65f6\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u5f80\u4e0b\u4e00\u5c42\u4e00\u5c42\u7684\u53d1\u9001\u4f20\u9012\uff0c\u5982\u679c\u6211\u4eec\u7236\u7ec4\u4ef6\u6240\u5d4c\u5957\u67093\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u5982\u4e0b\u56fe\u4e00\u4e2a\u534e\u4e3d\u5f0f\u7684\u7f8e\u56fd\u76fe\u724c\u5982\u793a\uff1a"),a.a.createElement("p",{className:"color-green"},"\u2003\u2003\u5047\u8bbeA\u3001B\u3001C\u3001D\u5206\u522b\u662f\u56db\u4e2a\u7ec4\u4ef6\uff0c\u90a3\u4e48A\u7ec4\u4ef6\u5c31\u5305\u542b\u4e86B\u7ec4\u4ef6\u3001C\u7ec4\u4ef6\u4ee5\u53caD\u7ec4\u4ef6\u3002\u5982\u679cD\u7ec4\u4ef6\u9700\u8981\u63a5\u53d7\u6765\u81ea\u7236\u7ec4\u4ef6A \u7684\u53c2\u6570\uff0c\u90a3\u4e48\u5728React \u4e2d\u5c31\u9700\u8981A => B\uff0cB => C\uff0c\u6700\u540eC \u5c06\u53c2\u6570\u4f20\u9012\u7ed9 D\u3002"),a.a.createElement("p",{className:"color-green"},"\u2003\u2003\u5982\u6b64\u4e00\u6765\uff0c\u6211\u4eec\u5c31\u9700\u8981\u4f20\u9012\u4e09\u5c42\uff0c\u5982\u679c\u5f53\u7236\u7ec4\u4ef6\u5305\u88f9\u7684\u5b50\u7ec4\u4ef6\u66f4\u591a\u5462\uff1f\u5982\u6b64\u4ee5\u6765\u662f\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u8d8a\u6765\u8d8a\u5dee\uff0c\u590d\u6742\u7a0b\u5ea6\u4e5f\u9010\u6e10\u63d0\u5347\u3002"),a.a.createElement("p",null,a.a.createElement("img",{src:o,alt:"",width:"290px;"})),a.a.createElement("p",null,"\u2003\u2003\u56e0\u6b64\u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6b64\u65f6 Redux \u65b9\u624d\u201c\u6a2a\u7a7a\u51fa\u4e16\u201d\u3002Redux \u4e0d\u4ec5\u80fd\u6709\u6548\u89e3\u51b3\u7ec4\u4ef6\u4e4b\u95f4\u4f20\u503c\u7684\u95ee\u9898\uff0c\u4ee5\u53ca\u66f4\u591a\u65f6\u5019\u6765\u544a\u8bc9\u6211\u4eec\u7ec4\u4ef6\u72b6\u6001\uff0c\u4ece\u800c\u5224\u65ad\u662f\u5426\u9700\u8981\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u66f4\u65b0."),a.a.createElement("p",null,"\u2003\u2003\u4f46\u662f\u5e94\u8be5\u77e5\u9053\u7684\u662fReact \u548c Redux\u4e24\u8005\u662f\u6ca1\u6709\u4efb\u4f55\u7275\u626f\u7684\uff0c\u5206\u522b\u90fd\u662f\u76f8\u5bf9\u72ec\u7acb\u5b58\u5728\u7684\u6846\u67b6\u3002React \u53ea\u662f\u9009\u62e9Redux \u505a\u4e3a\u9879\u76ee\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u3002"))};t.default=Object(l.hot)(e)(u)}.call(t,n(33)(e))}});
//# sourceMappingURL=2.f0013310.chunk.js.map