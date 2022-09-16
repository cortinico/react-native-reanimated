"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4084],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const s={id:"events",title:"Events",sidebar_label:"Events"},o=void 0,i={unversionedId:"events",id:"version-2.2.x/events",title:"Events",description:"In the real world nothing changes instantly\u2013there is always something between the states. When we touch a book we don't expect it to open instantly on a certain page. To make mobile apps feel more natural to the user, we use animations to smoothen out user interactions with the app user interface.",source:"@site/versioned_docs/version-2.2.x/events.md",sourceDirName:".",slug:"/events",permalink:"/react-native-reanimated/docs/2.2.x/events",draft:!1,tags:[],version:"2.2.x",frontMatter:{id:"events",title:"Events",sidebar_label:"Events"},sidebar:"version-2.2.x/docs",previous:{title:"Animations",permalink:"/react-native-reanimated/docs/2.2.x/animations"},next:{title:"Architecture",permalink:"/react-native-reanimated/docs/2.2.x/architecture"}},l={},u=[{value:"Handling gesture events",id:"handling-gesture-events",level:2},{value:"Handling continuous gestures",id:"handling-continuous-gestures",level:2},{value:"Using context",id:"using-context",level:2},{value:"Reanimated and react-native-gesture-handler",id:"reanimated-and-react-native-gesture-handler",level:2}],c={toc:u};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the real world nothing changes instantly\u2013there is always something between the states. When we touch a book we don't expect it to open instantly on a certain page. To make mobile apps feel more natural to the user, we use animations to smoothen out user interactions with the app user interface."),(0,r.kt)("p",null,"To show how event handling is done in Reanimated 2 we are going to lead you step by step towards achieving the following result:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7280).Z,width:"600",height:"563"})),(0,r.kt)("h2",{id:"handling-gesture-events"},"Handling gesture events"),(0,r.kt)("p",null,"Reanimated 2 integrates tightly with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/"},"react-native-gesture-handler")," package for the ability to define performant gesture-based interactions. We explain the library's APIs whenever we use bits of it in our examples, however, if you'd like to learn more about the gesture-handler outside of the context of reanimated, please visit the documentation website ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/"},"here"),"."),(0,r.kt)("p",null,"Going back to the interaction example, we start by focusing on tap events only."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5161).Z,width:"600",height:"329"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const EventsExample = () => {\n  const pressed = useSharedValue(false);\n  return (\n    <TapGestureHandler onGestureEvent={eventHandler}>\n      <Animated.View style={[styles.ball]} />\n    </TapGestureHandler>\n  );\n};\n")),(0,r.kt)("p",null,"Here, we define a component with a shared value that tells us whether the view that we render is being pressed. We use the ",(0,r.kt)("em",{parentName:"p"},"TapGestureHandler")," component from ",(0,r.kt)("em",{parentName:"p"},"react-native-gesture-handler")," library to wrap the main View in order to tell the framework which of the rendered elements are interactive."),(0,r.kt)("p",null,"Next, we add an event handler to it \u2014 it will react to notifications about tap events from ",(0,r.kt)("em",{parentName:"p"},"TapGestureHandler"),". For defining event handlers, Reanimated provides a hook that is specifically designed to work with the gesture-handler package, it is called ",(0,r.kt)("em",{parentName:"p"},"useAnimatedGestureHandler"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const eventHandler = useAnimatedGestureHandler({\n  onStart: (event, ctx) => {\n    pressed.value = true;\n  },\n  onEnd: (event, ctx) => {\n    pressed.value = false;\n  },\n});\n")),(0,r.kt)("p",null,"This hook allows us for defining a number of worklets (e.g., onStart or onEnd), each of these will be used to process a different state in the gesture recognition process. In this example, we will use ",(0,r.kt)("em",{parentName:"p"},"onStart")," worklet which is called when the gesture is started (we press the screen down), and ",(0,r.kt)("em",{parentName:"p"},"onEnd")," that fires up when the gesture is ended (i.e., the finger is lifted from the screen). We use these two worklets to update shared value ",(0,r.kt)("em",{parentName:"p"},"pressed")," accordingly (don't pay the attention to the arguments that are provided to the worklets, we will explain that later on)."),(0,r.kt)("p",null,"To connect the defined event handler with the gesture handler component, we now pass it to ",(0,r.kt)("em",{parentName:"p"},"TapGestureHandler")," as an ",(0,r.kt)("em",{parentName:"p"},"onGestureEvent")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<TapGestureHandler onGestureEvent={eventHandler}>\n")),(0,r.kt)("p",null,"Now all we have to do is to use the ",(0,r.kt)("em",{parentName:"p"},"useAnimatedStyle")," hook in order to map the pressed shared value state to the view's styles. When pressed is true the dot's color will turn from ",(0,r.kt)("em",{parentName:"p"},"blue")," to ",(0,r.kt)("em",{parentName:"p"},"yellow")," and it will get bigger. On false both of those parameters will get back to their previous values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const uas = useAnimatedStyle(() => {\n  return {\n    backgroundColor: pressed.value ? '#FEEF86' : '#001972',\n    transform: [{ scale: pressed.value ? 1.2 : 1 }],\n  };\n});\n")),(0,r.kt)("p",null,"Also don't forget to pass ",(0,r.kt)("em",{parentName:"p"},"animated style")," to the ",(0,r.kt)("em",{parentName:"p"},"animated view"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Animated.View style={[styles.ball, uas]} />\n")),(0,r.kt)("p",null,"After incorporating the changes described above here is what you will see on the screen:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3573).Z,width:"600",height:"329"})),(0,r.kt)("p",null,"Reanimated 2 makes it very easy to animate between state changes. You can try adding ",(0,r.kt)("em",{parentName:"p"},"withSpring")," or ",(0,r.kt)("em",{parentName:"p"},"withTiming")," in ",(0,r.kt)("em",{parentName:"p"},"useAnimatedStyle")," to make this interaction feel much more natural:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  scale: withSpring(pressed.value ? 1.2 : 1);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5161).Z,width:"600",height:"329"})),(0,r.kt)("h2",{id:"handling-continuous-gestures"},"Handling continuous gestures"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7280).Z,width:"600",height:"563"})),(0,r.kt)("p",null,"In the previous example when we learned how to handle tap gestures, we only responded to events that indicated the start and the end of the gesture. This comes from the fact that tap is a discrete gesture, that is it triggers at a specific point in time when we know the gesture is recognized. If we are interested in handling a movement of a finger on the screen, we need to receive a continuous stream of touch events. For this purpose, ",(0,r.kt)("em",{parentName:"p"},"PanGestureHandler")," from ",(0,r.kt)("em",{parentName:"p"},"react-native-gesture-handler")," package can be used. ",(0,r.kt)("em",{parentName:"p"},"PanGestureHandler")," not only reports down and up events (that we subscribed to with ",(0,r.kt)("em",{parentName:"p"},"onStart")," and ",(0,r.kt)("em",{parentName:"p"},"onEnd")," worklets), but also allows us to track the finger as you pan it around the screen. When the panning gesture is recognized it feeds a stream of touch events to ",(0,r.kt)("em",{parentName:"p"},"onActive")," callback for the whole duration of the user interaction."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1148).Z,width:"1400",height:"708"})),(0,r.kt)("p",null,"In order to keep track over the view movement, we define a pair of new shared values in which we are going to store the view coordinates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const startingPosition = 100;\nconst x = useSharedValue(startingPosition);\nconst y = useSharedValue(startingPosition);\n")),(0,r.kt)("p",null,"Now, to keep the values defined above in sync with the gesture, we modify ",(0,r.kt)("em",{parentName:"p"},"useAnimatedGestureHandler")," behavior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const eventHandler = useAnimatedGestureHandler({\n  onStart: (event, ctx) => {\n    pressed.value = true;\n  },\n  onActive: (event, ctx) => {\n    x.value = startingPosition + event.translationX;\n    y.value = startingPosition + event.translationY;\n  },\n  onEnd: (event, ctx) => {\n    pressed.value = false;\n    x.value = withSpring(startingPosition);\n    y.value = withSpring(startingPosition);\n  },\n});\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"onActive")," method, we update coordinates using the event payload which is provided as the first argument. We use ",(0,r.kt)("em",{parentName:"p"},"translationX")," and ",(0,r.kt)("em",{parentName:"p"},"translationY")," that indicates the position of the finger relative to the place on the screen where the panning started. In ",(0,r.kt)("em",{parentName:"p"},"onEnd")," call, when the user releases the finger, we animate the coordinates to the starting position."),(0,r.kt)("p",null,"Don't forget to pass modified event handler to ",(0,r.kt)("em",{parentName:"p"},"PanGestureHandler"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<PanGestureHandler onGestureEvent={eventHandler}>\n  <Animated.View style={[styles.ball, uas]} />\n</PanGestureHandler>\n")),(0,r.kt)("p",null,"The only thing left to do is to update ",(0,r.kt)("em",{parentName:"p"},"useAnimatedStyle")," body such that x and y shared values are mapped to the view's transforms to position our view on the screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const uas = useAnimatedStyle(() => {\n  return {\n    backgroundColor: pressed.value ? '#FEEF86' : '#001972',\n    transform: [{ translateX: x.value }, { translateY: y.value }],\n  };\n});\n")),(0,r.kt)("h2",{id:"using-context"},"Using context"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3242).Z,width:"600",height:"573"})),(0,r.kt)("p",null,"Let's now try to modify the above example to make the view stay in the place where we lift the finger up, then allow for it to be panned around from that place. This simple modification makes things a bit more trickier and the reason is that when the new gesture is started, the translation values it provides in the event payload are relative to the starting position of the gesture. As a result, we cannot just directly map the gesture translation to the view offset on the screen. One way to solve this is by making a temporary state where we can keep the starting offset of the view. For this purpose we can use the context argument that is provided to each of the gesture handler worklets. Context is just a Javascript object that is shared between all the callbacks. In other words, all methods defined as gesture handler callbacks receive the same instance of context object\u2013you are free to store any data in it within the callback or read from the context directly."),(0,r.kt)("p",null,"Here is how we can save the starting position in ",(0,r.kt)("em",{parentName:"p"},"onStart")," callback using context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"onStart: (event, ctx) => {\n  pressed.value = true;\n  ctx.startX = x.value;\n  ctx.startY = y.value;\n},\n")),(0,r.kt)("p",null,"Then we can use it in ",(0,r.kt)("em",{parentName:"p"},"onActive")," to compute the current position"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"onActive: (event, ctx) => {\n  x.value = ctx.startX + event.translationX;\n  y.value = ctx.startY + event.translationY;\n},\n")),(0,r.kt)("p",null,"As you can see context may be really handy sparing us declaring additional variables in our code thus making it more clear."),(0,r.kt)("h2",{id:"reanimated-and-react-native-gesture-handler"},"Reanimated and react-native-gesture-handler"),(0,r.kt)("p",null,"You have already met ",(0,r.kt)("em",{parentName:"p"},"TapGestureHandler")," and ",(0,r.kt)("em",{parentName:"p"},"PanGestureHandler")," but there are many more. For instance, you can listen for pinch gestures with ",(0,r.kt)("em",{parentName:"p"},"PinchGestureHandler"),". It allows you to track the distance between two fingers and uses that information to scale or zoom your content. The full list of available gesture handlers can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-gesture-handler/docs/gesture-handlers/basics/about-handlers#available-gesture-handlers"},"here"),"."),(0,r.kt)("div",{class:"resp-container"},(0,r.kt)("iframe",{class:"resp-iframe",gesture:"media",allow:"encrypted-media",allowfullscreen:!0,src:"https://www.youtube.com/embed/IdVnnIkNzGA"})),(0,r.kt)("div",{class:"spacer"}))}p.isMDXComponent=!0},3242:function(e,t,n){t.Z=n.p+"assets/images/context-gesture-846808d8b9cc1beecef0291519f45979.gif"},1148:function(e,t,n){t.Z=n.p+"assets/images/continous-gestures-702c491ffa319451a1792ed352aff0e5.png"},7280:function(e,t,n){t.Z=n.p+"assets/images/final-f203d12bb467795e7825d7dd2a911aad.gif"},5161:function(e,t,n){t.Z=n.p+"assets/images/touch-final-98be210f3eb367835ab3584d1c5ecd40.gif"},3573:function(e,t,n){t.Z=n.p+"assets/images/touch-raw-8c7ae3b9da36266b1bf06864bc047f2d.gif"}}]);