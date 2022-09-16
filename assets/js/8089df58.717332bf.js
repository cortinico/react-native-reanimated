"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[1656],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1078:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=t(3117),o=(t(7294),t(3905));const i={id:"runOnUI",title:"runOnUI",sidebar_label:"runOnUI"},a=void 0,u={unversionedId:"api/miscellaneous/runOnUI",id:"version-2.2.x/api/miscellaneous/runOnUI",title:"runOnUI",description:"Enables executing worklet functions on the UI thread. Note that UI execution is asynchronous from the caller\u2019s perspective. When you pass arguments, they will be copied to the UI context.",source:"@site/versioned_docs/version-2.2.x/api/miscellaneous/runOnUI.md",sourceDirName:"api/miscellaneous",slug:"/api/miscellaneous/runOnUI",permalink:"/react-native-reanimated/docs/2.2.x/api/miscellaneous/runOnUI",draft:!1,tags:[],version:"2.2.x",frontMatter:{id:"runOnUI",title:"runOnUI",sidebar_label:"runOnUI"},sidebar:"version-2.2.x/docs",previous:{title:"runOnJS",permalink:"/react-native-reanimated/docs/2.2.x/api/miscellaneous/runOnJS"},next:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/2.2.x/testing"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>fn</code> function",id:"fn-function",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],s={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enables executing worklet functions on the UI thread. Note that UI execution is asynchronous from the caller\u2019s perspective. When you pass arguments, they will be copied to the UI context."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"fn-function"},(0,o.kt)("inlineCode",{parentName:"h4"},"fn")," ","[function]"),(0,o.kt)("p",null,"The first and only argument is a worklet function that is supposed to be run."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"runOnUI")," returns a function which will be executed on UI thread."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12}","{12}":!0},"import { runOnUI } from 'react-native-reanimated';\nimport { View, Button } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n\n    const someWorklet = (greeting) => {\n        'worklet';\n        console.log(greeting, 'From the UI thread');\n    }\n\n    const onPress = () => {\n        runOnUI(someWorklet)('Howdy');\n    }\n\n  return (\n    <View>\n      <Button\n        title=\"toggle\"\n        onPress={onPress}\n      />\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0}}]);