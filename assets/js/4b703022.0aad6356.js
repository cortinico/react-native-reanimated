"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4851],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return k}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var m=a.createContext({}),d=function(e){var t=a.useContext(m),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=d(i),k=n,f=s["".concat(m,".").concat(k)]||s[k]||u[k]||l;return i?a.createElement(f,o(o({ref:t},p),{},{components:i})):a.createElement(f,o({ref:t},p))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,o=new Array(l);o[0]=s;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var d=2;d<l;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}s.displayName="MDXCreateElement"},7011:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return d}});var a=i(3117),n=(i(7294),i(3905));const l={id:"exitAnimations",title:"Exiting Animations",sidebar_label:"Exiting Animations"},o=void 0,r={unversionedId:"api/LayoutAnimations/exitAnimations",id:"version-2.3.x/api/LayoutAnimations/exitAnimations",title:"Exiting Animations",description:"In React Native during unmounting of components from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using Exiting Animations. Reanimated make a pretty animation of disappearing of component for you.",source:"@site/versioned_docs/version-2.3.x/api/LayoutAnimations/ExitAnimations.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/exitAnimations",permalink:"/react-native-reanimated/docs/2.3.x/api/LayoutAnimations/exitAnimations",draft:!1,tags:[],version:"2.3.x",frontMatter:{id:"exitAnimations",title:"Exiting Animations",sidebar_label:"Exiting Animations"},sidebar:"version-2.3.x/docs",previous:{title:"Entering Animations",permalink:"/react-native-reanimated/docs/2.3.x/api/LayoutAnimations/entryAnimations"},next:{title:"Keyframe Animations",permalink:"/react-native-reanimated/docs/2.3.x/api/LayoutAnimations/keyframeAnimations"}},m={},d=[{value:"How it is possible?",id:"how-it-is-possible",level:4},{value:"How to use predefined exiting animation?",id:"how-to-use-predefined-exiting-animation",level:2},{value:"1. Import chosen animation",id:"1-import-chosen-animation",level:3},{value:"2. Choose Animated Component which exiting you want to animate",id:"2-choose-animated-component-which-exiting-you-want-to-animate",level:3},{value:"3. Customize the animation",id:"3-customize-the-animation",level:3},{value:"Predefined Animations",id:"predefined-animations",level:2},{value:"Fade",id:"fade",level:3},{value:"Animations",id:"animations",level:4},{value:"Modifiers",id:"modifiers",level:4},{value:"Example",id:"example",level:4},{value:"Bounce",id:"bounce",level:3},{value:"Animations",id:"animations-1",level:4},{value:"Modifiers",id:"modifiers-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Flip",id:"flip",level:3},{value:"Animations",id:"animations-2",level:4},{value:"Modifiers",id:"modifiers-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Stretch",id:"stretch",level:3},{value:"Animations",id:"animations-3",level:4},{value:"Modifiers",id:"modifiers-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Zoom",id:"zoom",level:3},{value:"Animations",id:"animations-4",level:4},{value:"Modifiers",id:"modifiers-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Slide",id:"slide",level:3},{value:"Animations",id:"animations-5",level:4},{value:"Modifiers",id:"modifiers-5",level:4},{value:"Example",id:"example-5",level:4},{value:"LightSpeed",id:"lightspeed",level:3},{value:"Animations",id:"animations-6",level:4},{value:"Modifiers",id:"modifiers-6",level:4},{value:"Example",id:"example-6",level:4},{value:"Pinwheel",id:"pinwheel",level:3},{value:"Animations",id:"animations-7",level:4},{value:"Modifiers",id:"modifiers-7",level:4},{value:"Example",id:"example-7",level:4},{value:"Roll",id:"roll",level:3},{value:"Animations",id:"animations-8",level:4},{value:"Modifiers",id:"modifiers-8",level:4},{value:"Example",id:"example-8",level:4},{value:"Rotate",id:"rotate",level:3},{value:"Animations",id:"animations-9",level:4},{value:"Modifiers",id:"modifiers-9",level:4},{value:"Example",id:"example-9",level:4}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In React Native during unmounting of components from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using ",(0,n.kt)("inlineCode",{parentName:"p"},"Exiting Animations"),". Reanimated make a pretty animation of disappearing of component for you."),(0,n.kt)("h4",{id:"how-it-is-possible"},"How it is possible?"),(0,n.kt)("p",null,"Reanimated listen on changes in tree of views and if detect that some of component should disappear in next frame, It replaces this process with exiting animation. It is easy and fast. You can use predefined animations - examples below or you can define your own custom animation. If you want to create more complex animation you can use ",(0,n.kt)("a",{parentName:"p",href:"keyframeAnimations"},"Keyframes"),"."),(0,n.kt)("h2",{id:"how-to-use-predefined-exiting-animation"},"How to use predefined exiting animation?"),(0,n.kt)("h3",{id:"1-import-chosen-animation"},"1. Import chosen animation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"    // AnimationName is just an example and should be replaced by real animation. For Instance FadeOut\n    import { AnimationName } from 'react-native-reanimated';\n")),(0,n.kt)("h3",{id:"2-choose-animated-component-which-exiting-you-want-to-animate"},"2. Choose Animated Component which exiting you want to animate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"    // AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n    <AnimatedComponent exiting={AnimationName} >\n")),(0,n.kt)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),(0,n.kt)("p",null,"Different type of entering animations can be customized differently. For the complete list of option please refer to the paragraph specific to the particular animation type."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"    <AnimatedComponent exiting={AnimationName.duration(3000).otherModifier()} >\n")),(0,n.kt)("h2",{id:"predefined-animations"},"Predefined Animations"),(0,n.kt)("p",null,"Below we listed all of the currently available predefined entering animations grouped by their type. Each group contains all of its modifiers and a video presenting what it looks like when applied to a simple button."),(0,n.kt)("p",null,"If you cannot find an animation that suits you then you can create a custom one. If you think that the animation should be here, please open an issue or create a pull request.  "),(0,n.kt)("h3",{id:"fade"},"Fade"),(0,n.kt)("p",null,"Simple animation based on changing of opacity."),(0,n.kt)("h4",{id:"animations"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FadeOut"),(0,n.kt)("li",{parentName:"ul"},"FadeOutRight"),(0,n.kt)("li",{parentName:"ul"},"FadeOutLeft"),(0,n.kt)("li",{parentName:"ul"},"FadeOutUp"),(0,n.kt)("li",{parentName:"ul"},"FadeOutDown")),(0,n.kt)("h4",{id:"modifiers"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317304-c1824380-c2de-11eb-8aed-4c83cfe2f2cc.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"bounce"},"Bounce"),(0,n.kt)("p",null,"Animation based on smoothly shaking of component."),(0,n.kt)("h4",{id:"animations-1"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BounceOut"),(0,n.kt)("li",{parentName:"ul"},"BounceOutRight"),(0,n.kt)("li",{parentName:"ul"},"BounceOutLeft"),(0,n.kt)("li",{parentName:"ul"},"BounceOutUp"),(0,n.kt)("li",{parentName:"ul"},"BounceOutDown")),(0,n.kt)("h4",{id:"modifiers-1"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317374-d52daa00-c2de-11eb-9fc5-320dfaf50440.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"flip"},"Flip"),(0,n.kt)("p",null,"3D animation based on flipping object over specific axis."),(0,n.kt)("h4",{id:"animations-2"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FlipOutYRight"),(0,n.kt)("li",{parentName:"ul"},"FlipOutYLeft"),(0,n.kt)("li",{parentName:"ul"},"FlipOutXUp"),(0,n.kt)("li",{parentName:"ul"},"FlipOutXDown"),(0,n.kt)("li",{parentName:"ul"},"FlipOutEasyX"),(0,n.kt)("li",{parentName:"ul"},"FlipOutEasyY")),(0,n.kt)("h4",{id:"modifiers-2"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-2"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317439-e971a700-c2de-11eb-89d7-1a934922b7fd.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"stretch"},"Stretch"),(0,n.kt)("p",null,"Animation based on changing width or height of object."),(0,n.kt)("h4",{id:"animations-3"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"StretchOutX"),(0,n.kt)("li",{parentName:"ul"},"StretchOutY")),(0,n.kt)("h4",{id:"modifiers-3"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-3"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317500-fbebe080-c2de-11eb-9901-693aa4ad0ba0.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"zoom"},"Zoom"),(0,n.kt)("p",null,"Animation based on changing scale of object."),(0,n.kt)("h4",{id:"animations-4"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ZoomOut"),(0,n.kt)("li",{parentName:"ul"},"ZoomOutRotate"),(0,n.kt)("li",{parentName:"ul"},"ZoomOutRight"),(0,n.kt)("li",{parentName:"ul"},"ZoomOutLeft"),(0,n.kt)("li",{parentName:"ul"},"ZoomOutUp"),(0,n.kt)("li",{parentName:"ul"},"ZoomOutDown"),(0,n.kt)("li",{parentName:"ul"},"ZoomOutEasyUp"),(0,n.kt)("li",{parentName:"ul"},"ZoomOutEasyDown")),(0,n.kt)("h4",{id:"modifiers-4"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-4"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317554-0efeb080-c2df-11eb-88cf-6ec47778dccb.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"slide"},"Slide"),(0,n.kt)("p",null,"Animation based on horizontal or vertical moving of object."),(0,n.kt)("h4",{id:"animations-5"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SlideOutRight"),(0,n.kt)("li",{parentName:"ul"},"SlideOutLeft"),(0,n.kt)("li",{parentName:"ul"},"SlideOutUp"),(0,n.kt)("li",{parentName:"ul"},"SlideOutDown")),(0,n.kt)("h4",{id:"modifiers-5"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-5"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317603-22118080-c2df-11eb-9083-b5ba3f043dbc.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"lightspeed"},"LightSpeed"),(0,n.kt)("p",null,"Animation based on horizontal moving of object with changing of opacity and skew."),(0,n.kt)("h4",{id:"animations-6"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LightSpeedOutRight"),(0,n.kt)("li",{parentName:"ul"},"LightSpeedOutLeft")),(0,n.kt)("h4",{id:"modifiers-6"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-6"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058070-2e40e880-e0aa-11eb-98eb-326a34f23f39.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"pinwheel"},"Pinwheel"),(0,n.kt)("p",null,"Animation based on rotation with scale and opacity change."),(0,n.kt)("h4",{id:"animations-7"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PinwheelOut")),(0,n.kt)("h4",{id:"modifiers-7"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-7"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058201-57617900-e0aa-11eb-951f-46ac27787d3e.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"roll"},"Roll"),(0,n.kt)("p",null,"Animation based on horizontal moving of object with rotation."),(0,n.kt)("h4",{id:"animations-8"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RollOutLeft"),(0,n.kt)("li",{parentName:"ul"},"RollOutRight")),(0,n.kt)("h4",{id:"modifiers-8"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-8"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058307-6e07d000-e0aa-11eb-8379-4536c0806aee.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"rotate"},"Rotate"),(0,n.kt)("p",null,"Animation based on rotation of object."),(0,n.kt)("h4",{id:"animations-9"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RotateOutDownLeft"),(0,n.kt)("li",{parentName:"ul"},"RotateOutDownRight"),(0,n.kt)("li",{parentName:"ul"},"RotateOutUpLeft"),(0,n.kt)("li",{parentName:"ul"},"RotateOutUpRight")),(0,n.kt)("h4",{id:"modifiers-9"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-9"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058418-8841ae00-e0aa-11eb-9ac1-39df437512c4.mov",controls:"controls",muted:"muted"}))}u.isMDXComponent=!0}}]);