"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[449],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const a={},c=void 0,i={unversionedId:"nodes/stopClock",id:"version-1.x.x/nodes/stopClock",title:"stopClock",description:"stopClock",source:"@site/versioned_docs/version-1.x.x/nodes/stopClock.md",sourceDirName:"nodes",slug:"/nodes/stopClock",permalink:"/react-native-reanimated/docs/1.x.x/nodes/stopClock",draft:!1,tags:[],version:"1.x.x",frontMatter:{},sidebar:"version-1.x.x/docs",previous:{title:"startClock",permalink:"/react-native-reanimated/docs/1.x.x/nodes/startClock"},next:{title:"acc",permalink:"/react-native-reanimated/docs/1.x.x/nodes/acc"}},l={},p=[{value:"<code>stopClock</code>",id:"stopclock",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"stopclock"},(0,o.kt)("inlineCode",{parentName:"h2"},"stopClock")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"stopClock(clockNode);\n")),(0,o.kt)("p",null,"When evaluated, it will stop evaluating nodes dependent on ",(0,o.kt)("inlineCode",{parentName:"p"},"clockNode"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),"\nThe clock, even after using ",(0,o.kt)("inlineCode",{parentName:"p"},"stopClock")," on it, will keep updating it's value. ",(0,o.kt)("inlineCode",{parentName:"p"},"stopClock")," merely prevents other nodes from evaluation when clock updates.\nTo save the moment when clock was stopped please use ",(0,o.kt)("inlineCode",{parentName:"p"},"Value"),"."))}u.isMDXComponent=!0}}]);