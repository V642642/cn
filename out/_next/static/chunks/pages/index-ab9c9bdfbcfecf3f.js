(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(0)}])},6095:function(e,t){"use strict";t.Z={src:"/_next/static/media/Intelligence.6f19a25a.webp",height:87,width:112,blurDataURL:"data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAQATW2cyAAEBAFZtXnITAAAMT2ZoaBwAABpAFSk8DQABADcxAi0CAAABAFBCCgABAFZQOCAcAAAAcAEAnQEqCAAGAAJAOCWcAnQBdQAA/uy3tZDMAA==",blurWidth:8,blurHeight:6}},5495:function(e,t){"use strict";t.Z={src:"/_next/static/media/organise.28d2deea.webp",height:87,width:112,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAQBkd4c0AAIACo1Re7gcAAALfkkybjQAAAx6OStbMQAAB45tZYYtAAEAOFZUSwUAAFZQOCAeAAAAUAEAnQEqCAAGAAJAOCWcAAQzgAD+7QavoPhiAAAA",blurWidth:8,blurHeight:6}},1827:function(e,t){"use strict";t.Z={src:"/_next/static/media/single-window.4c9ecbe3.webp",height:87,width:112,blurDataURL:"data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABYBRJkqJeN8z02z1mcHD+jZyHiEjc3zwdK/ButbYTpFClaSIYtbGyB1S0Nir8AQBWUDggHAAAAFABAJ0BKggABgACQDglnAAEM4AA/u0GrcLKAAA=",blurWidth:8,blurHeight:6}},9543:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var s=i(5893),l=i(1664),r=i.n(l);function a(){return(0,s.jsxs)("div",{className:"w-full font-primary bg-[#fffaef] py-20 flex items-center justify-center flex-col",children:[(0,s.jsx)("h2",{className:"text-[35px] text-center",children:"Want to explore more?"}),(0,s.jsx)("p",{children:"Ask to see our platform in action"}),(0,s.jsxs)(r(),{href:"/request-a-demo",className:"rounded-md my-10 px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-green-600 text-green-600 ",children:[(0,s.jsx)("span",{className:"absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"}),(0,s.jsx)("span",{className:"relative text-green-600 transition duration-300 group-hover:text-white ease",children:"REQUEST A DEMO"})]})]})}i(7294)},4564:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suspense=function(){let e=Error(s.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=s.NEXT_DYNAMIC_NO_SSR_CODE,e},t.NoSSR=function(e){let{children:t}=e;return t},(0,i(2845).Z)(i(7294));var s=i(2983)},7645:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let i=r.default,l={loading:e=>{let{error:t,isLoading:i,pastDelay:s}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=s({},l,e)),l=s({},l,t);let n=l.loader,c=()=>null!=n?n().then(a):Promise.resolve(a(()=>null));return l.loadableGenerated&&delete(l=s({},l,l.loadableGenerated)).loadableGenerated,"boolean"!=typeof l.ssr||l.ssr||(delete l.webpack,delete l.modules),i(s({},l,{loader:c}))};var s=i(1032).Z,l=i(2845).Z;l(i(7294));var r=l(i(4588));function a(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=(0,i(2845).Z)(i(7294));let l=s.default.createContext(null);t.LoadableContext=l},4588:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(1032).Z,l=(0,i(2845).Z)(i(7294)),r=i(4564),a=i(3644);let n=[],c=[],o=!1;function d(e){let t=e(),i={loading:!0,loaded:null,error:null};return i.promise=t.then(e=>(i.loading=!1,i.loaded=e,e)).catch(e=>{throw i.loading=!1,i.error=e,e}),i}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function x(e){return function(e,t){let i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t);i.lazy=l.default.lazy(i.loader);let s=null;function n(){if(!s){let t=new u(e,i);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()}if(!o){let e=i.webpack?i.webpack():i.modules;e&&c.push(t=>{for(let i of e)if(-1!==t.indexOf(i))return n()})}function d(e){!function(){n();let e=l.default.useContext(a.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach(t=>{e(t)})}();let t=i.loading,s=l.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),c=i.ssr?l.default.Fragment:r.NoSSR,o=i.lazy;return l.default.createElement(l.default.Suspense,{fallback:s},l.default.createElement(c,null,l.default.createElement(o,Object.assign({},e))))}return d.preload=()=>n(),d.displayName="LoadableComponent",d}(d,e)}function m(e,t){let i=[];for(;e.length;){let s=e.pop();i.push(s(t))}return Promise.all(i).then(()=>{if(e.length)return m(e,t)})}x.preloadAll=()=>new Promise((e,t)=>{m(n).then(e,t)}),x.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let i=()=>(o=!0,t());m(c,e).then(i,i)})},window.__NEXT_PRELOADREADY=x.preloadReady,t.default=x},0:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return U},default:function(){return D}});var s=i(5893),l=i(5675),r=i.n(l),a=i(7294),n={src:"/_next/static/media/manage.07b10f68.webp",height:87,width:112,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAQAAJQCDegAAAGPRkdSMAAA4f3vCa2oAAI3Sz6zfrAAAVFtWXVtFAAAAAAAAAAABAFZQOCAeAAAAUAEAnQEqCAAGAAJAOCWUAAQzgAD+7QavoPivgAAA",blurWidth:8,blurHeight:6},c=i(5495),o={src:"/_next/static/media/track.3fe650ed.webp",height:87,width:112,blurDataURL:"data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAQAVHRwZAAEAK1U4OEonAAl9XwAAN1wKADQ2DAlddQEAD0dCQz0EAAEAAAAAAAABAFZQOCAaAAAAMAEAnQEqCAAGAAJAOCWcAANwAP7svQ3CygA=",blurWidth:8,blurHeight:6},d=i(6095),u=i(1827),x={src:"/_next/static/media/replacement.0e675905.webp",height:87,width:112,blurDataURL:"data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDAAAAABYFXbto1578XvW4E3RZTQwlBJAt86iBcRIdjvXkjO512Rjnm4SkHxf4eIhoggJABWUDggHAAAAHABAJ0BKggABgACQDglnAJ0AXUAAP7tAZWBeAA=",blurWidth:8,blurHeight:6};function m(){return(0,s.jsxs)("div",{className:"w-full border-b-4 border-green-600 gap-8 font-primary flex flex-col items-center justify-center pt-24 pb-32",children:[(0,s.jsxs)("p",{className:"text-[35px] text-green-600",children:[(0,s.jsx)("b",{className:"text-gray-700",children:"Key"})," Benefits"]}),(0,s.jsxs)("div",{className:"w-full xl:w-6/12 md:w-10/12 flex items-center justify-center gap-6 flex-col md:flex-row",children:[(0,s.jsxs)("div",{className:"w-full md:w-[33%] flex items-center justify-center px-6 flex-col",children:[(0,s.jsx)(r(),{src:n,alt:"images",className:"w-[90px]"}),(0,s.jsxs)("p",{className:"text-green-600 text-[22px] text-center",children:["RaaS",(0,s.jsx)("sup",{children:"TM"})," Marketplace"]}),(0,s.jsx)("p",{className:"text-center text-[14px]",children:"Gain complete visibility on the performance of agencies to make data-driven decisions."})]}),(0,s.jsxs)("div",{className:"w-full md:w-[33%] flex items-center justify-center px-6 flex-col",children:[(0,s.jsx)(r(),{src:c.Z,alt:"images",className:"w-[90px]"}),(0,s.jsx)("p",{className:"text-green-600 text-[22px] text-center",children:"Manage"}),(0,s.jsx)("p",{className:"text-center text-[14px]",children:"Ubiquitous access on the cloud and regular updates using our integrated ATS."})]}),(0,s.jsxs)("div",{className:"w-full md:w-[33%] flex items-center justify-center px-6 flex-col",children:[(0,s.jsx)(r(),{src:o,alt:"images",className:"w-[90px]"}),(0,s.jsx)("p",{className:"text-green-600 text-[22px] text-center",children:"Track"}),(0,s.jsx)("p",{className:"text-center text-[14px]",children:"Ubiquitous access on the cloud and regular updates using our integrated ATS."})]})]}),(0,s.jsxs)("div",{className:"w-full xl:w-6/12 md:w-10/12 flex items-center justify-center flex-col md:flex-row gap-6",children:[(0,s.jsxs)("div",{className:"w-full md:w-[33%] flex items-center justify-center px-6 flex-col",children:[(0,s.jsx)(r(),{src:d.Z,alt:"images",className:"w-[90px]"}),(0,s.jsx)("p",{className:"text-green-600 text-[22px] text-center",children:"Artificial Intelligence"}),(0,s.jsx)("p",{className:"text-center text-[14px]",children:"Intelligent online recruitment platform with Machine learning capabilities that calibrates for a better hire every time."})]}),(0,s.jsxs)("div",{className:"w-full md:w-[33%] flex items-center justify-center px-6 flex-col",children:[(0,s.jsx)(r(),{src:u.Z,alt:"images",className:"w-[90px]"}),(0,s.jsx)("p",{className:"text-green-600 text-[22px] text-center",children:"Single window"}),(0,s.jsx)("p",{className:"text-center text-[14px]",children:"Engage instantly and cut down on your administrative efforts of vendor onboarding."})]}),(0,s.jsxs)("div",{className:"w-full md:w-[33%] flex items-center justify-center px-6 flex-col",children:[(0,s.jsx)(r(),{src:x,alt:"images",className:"w-[90px]"}),(0,s.jsx)("p",{className:"text-green-600 text-[22px] text-center",children:"Replacement Guarantee"}),(0,s.jsx)("p",{className:"text-center text-[14px]",children:"With up to 90 days of replacement guarantee against any early attrition, your risks are covered."})]})]})]})}i(3791);var A=i(7814),p=i(9417),f={src:"/_next/static/media/how-it-works.66d3eea8.webp",height:418,width:601,blurDataURL:"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAAAAAAEAAAEKER0YDS4dABA5E2BKIjYOIQow//8sAioAAQROWAUADAEBAAQHAAIAAFZQOCBOAAAAEAIAnQEqCAAGAAJAOCWUAnQBH25u3Zn0AAD++7e1p3nIvK6/6HMQfut741w3/7eM1GRbENe9bfA47+YERJUYiiUim48VIwzrjkfmusAA",blurWidth:8,blurHeight:6},h=function(e){let{setOpen:t,open:i}=e,l=(0,a.useRef)(null),r=()=>{t({employer:!1,agency:!1})};return(0,a.useEffect)(()=>{function e(e){l.current&&!l.current.contains(e.target)&&r()}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[l]),(0,s.jsx)(s.Fragment,{children:i.employer&&(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)("div",{className:"justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ",children:(0,s.jsx)("div",{className:"relative my-6 mx-auto lg:w-[600px] w-80 -top-28",children:(0,s.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,s.jsx)("iframe",{ref:l,width:"900",height:"400",id:"ypopupvideo1",src:"https://www.youtube.com/embed/_9zP2rUZp0w?autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})}),(0,s.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})})},g=function(e){let{setOpen:t,open:i}=e,l=(0,a.useRef)(null),r=()=>{t({employer:!1,agency:!1})};return(0,a.useEffect)(()=>{function e(e){l.current&&!l.current.contains(e.target)&&r()}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[l]),(0,s.jsx)(s.Fragment,{children:i.agency&&(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)("div",{className:"justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ",children:(0,s.jsx)("div",{className:"relative my-6 mx-auto lg:w-[600px] w-80 -top-28",children:(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("iframe",{ref:l,width:"900",height:"400",id:"ypopupvideo1",src:"https://www.youtube.com/embed/vyf30CZOnwA?autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})})}),(0,s.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]})})};function w(){let[e,t]=(0,a.useState)({employer:!1,agency:!1});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{open:e,setOpen:t}),(0,s.jsx)(g,{open:e,setOpen:t}),(0,s.jsx)("div",{id:"howitworks",className:"flex bg-fixed bg-no-repeat bg-cover bg-[50%] w-full gap-2 items-center bg-parallex justify-center",children:(0,s.jsxs)("div",{className:"w-full md:w-8/12 py-14 flex items-center justify-around gap-5 flex-col md:flex-row",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center py-10 flex-col gap-6",children:[(0,s.jsx)("div",{onClick:()=>t({employer:!0,agency:!1}),className:"w-[150px] cursor-pointer h-[150px] flex items-center justify-center rounded-full border-4 border-green-700",children:(0,s.jsx)(A.G,{icon:p.zc,className:"text-[60px] text-white"})}),(0,s.jsx)("p",{className:"text-[25px] font-primary text-white bg-gray-700 bg-opacity-50 font-semibold uppercase py-2 px-6",children:"I'M AN EMPLOYER"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-center py-10 flex-col gap-6",children:[(0,s.jsx)("div",{onClick:()=>t({employer:!1,agency:!0}),className:"w-[150px] cursor-pointer h-[150px] flex items-center justify-center rounded-full border-4 border-green-700",children:(0,s.jsx)(A.G,{icon:p.zc,className:"text-[60px] text-white"})}),(0,s.jsx)("p",{className:"text-[25px] font-primary text-white bg-gray-700 bg-opacity-50 font-semibold uppercase py-2 px-6",children:"I'M AN AGENCY"})]})]})}),(0,s.jsxs)("div",{className:"w-full flex items-center justify-center py-14 bg-blue-600 flex-col md:flex-row",children:[(0,s.jsxs)("div",{className:"flex w-full md:w-4/12 text-white items-center justify-center flex-col",children:[(0,s.jsx)("p",{className:"text-center font-primary text-[35px] font-semibold",children:"How it Works"}),(0,s.jsxs)("p",{className:"text-center font-primary text-[20px] font-medium",children:["Power-up with RaaS",(0,s.jsx)("sup",{children:"TM"})," for faster hiring."]}),(0,s.jsx)("p",{className:"text-center font-primary",children:"Introducing the RaaSTM - `'`Recruitment as a Service`'` Marketplace, an online recruitment platform which enables you to engage with multiple Recruiting agencies to fulfil your job requirements by getting access to a large pool of passive candidates and array of integrated tools resulting in faster hiring."})]}),(0,s.jsx)("div",{className:"flex w-full md:w-4/12 relative items-center justify-center flex-col gap-2",children:(0,s.jsx)(r(),{src:f,alt:"howItWorks",className:"md:absolute top-[-155px]"})})]})]})}function b(){return(0,s.jsxs)("div",{className:"flex bg-fixed bg-no-repeat bg-cover bg-[50%] w-full gap-12 items-center bg-social py-20 justify-center flex-col border-t-8 min-h-[400px] border-green-500",children:[(0,s.jsxs)("p",{className:"text-[32px] font-bold font-primary text-gray-500 ",children:["We are ",(0,s.jsx)("span",{className:"text-green-500 font-semibold",children:"Social"})]}),(0,s.jsxs)("div",{className:"w-full flex items-center justify-center gap-4 flex-col md:flex-row",children:[(0,s.jsx)("iframe",{className:"w-full md:w-4/12",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhiringplugofficial&tabs=timeline&width=540&height=500&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=true&appId",width:"540",height:"500",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}),(0,s.jsx)("iframe",{id:"twitter-widget-0",allowtransparency:"true",className:"w-full md:w-[30%] min-h-[500px]",title:"Twitter Timeline",src:"https://syndication.twitter.com/srv/timeline-profile/screen-name/hiringplug?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19idXNpbmVzc192ZXJpZmllZF9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmx1ZV92ZXJpZmllZF9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19nb3ZfdmVyaWZpZWRfYmFkZ2UiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYnVzaW5lc3NfYWZmaWxpYXRlX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&frame=false&hideBorder=false&hideFooter=true&hideHeader=false&hideScrollBar=false&lang=en&maxHeight=500px&origin=https%3A%2F%2Fwww.hiringplug.com%2F&sessionId=cdc8104ba303cf076ab221c41d78e66134564bc6&showHeader=true&showReplies=false&transparent=false&widgetsVersion=aaf4084522e3a%3A1674595607486"})]})]})}var j=i(6066),y={src:"/_next/static/media/agev2.2c95a7c2.webp",height:560,width:1069,blurDataURL:"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAQAAkA4JaQAAu0dpr8AAP78Hz2n7CL8cWpDYjFhFcAAAAA=",blurWidth:8,blurHeight:4},N={src:"/_next/static/media/empv2.f26a538c.webp",height:560,width:1081,blurDataURL:"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAQAAkA4JZwAAu0dljdgAP78Hz2n6vXUvVHXhaKlg9AAAAA=",blurWidth:8,blurHeight:4};function v(){return(0,s.jsx)("div",{className:"w-full py-20",children:(0,s.jsxs)(j.Z,{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,className:"w-full flex items-center justify-center",children:[(0,s.jsxs)("div",{id:"slider1",className:"w-full flex items-center justify-start flex-col md:flex-row gap-2 p-2",children:[(0,s.jsx)("div",{className:" inline-flex w-full md:w-7/12",children:(0,s.jsx)(r(),{src:y,alt:"agency",className:"object-contain w-full md:min-h-[500px]"})}),(0,s.jsxs)("div",{className:"md:w-5/12 font-primary mt-10 w-full inline-block items-center justify-center flex-col",children:[(0,s.jsx)("h2",{className:"text-[40px] font-semibold text-gray-500 leading-[1.2]",children:"Agencies seamlessly engage with multiple employers"}),(0,s.jsx)("p",{className:"text-gray-500 my-4 leading-[1.6]",children:"Build your databank and propose candidates easily using resume parsing & other productivity features"}),(0,s.jsxs)("ul",{className:"list-disc list-inside marker:text-green-500",children:[(0,s.jsx)("li",{children:"Easy to engage & communicate with Employers"}),(0,s.jsx)("li",{children:"Multi user environment with Real time insights"}),(0,s.jsx)("li",{children:"Transparent commercials & candidate status"}),(0,s.jsx)("li",{children:"Continuous flow of job mandates"})]})]})]}),(0,s.jsxs)("div",{id:"slider2",className:"w-full gap-2 flex items-center justify-start flex-col md:flex-row p-2 ",children:[(0,s.jsx)("div",{className:" inline-flex w-full md:w-7/12",children:(0,s.jsx)(r(),{src:N,alt:"employer",className:"object-contain w-full md:min-h-[500px]"})}),(0,s.jsxs)("div",{className:"md:w-5/12 gap-3 font-primary mt-10 w-full inline-block items-center justify-center flex-col",children:[(0,s.jsx)("h2",{className:"text-[40px] font-semibold text-gray-500 leading-[1.2]",children:"Employers easily track and manage applicants"}),(0,s.jsx)("p",{className:"text-gray-500 my-4",children:"Integrated tools enable seamless management in accordance to your recruitment workflow and enhance recruiter’s efficiency"}),(0,s.jsxs)("ul",{className:"list-disc list-inside marker:text-green-500",children:[(0,s.jsx)("li",{children:"Marketplace of specialist recruiters"}),(0,s.jsx)("li",{children:"Customizable Applicant Tracking System (ATS)"}),(0,s.jsx)("li",{children:"Easy Candidate assessment & sharing interface"}),(0,s.jsx)("li",{children:"Multi user environment with Real time insights"})]})]})]})]})})}var Z=i(3658);function _(e){let{className:t,style:i,onClick:l}=e;return(0,s.jsx)("div",{className:t,style:{...i,display:"block",background:""},onClick:l})}function Q(e){let{className:t,style:i,onClick:l}=e;return(0,s.jsx)("div",{className:t,style:{...i,display:"block",width:"20px"},onClick:l})}function I(){var e={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,nextArrow:(0,s.jsx)(_,{}),prevArrow:(0,s.jsx)(Q,{})};return(0,s.jsxs)("div",{className:"flex bg-fixed border-t-8 border-green-500 bg-no-repeat bg-cover bg-[50%] flex-col w-full gap-2 items-center bg-ourclient justify-center py-24",children:[(0,s.jsxs)("h2",{className:"text-[38px] font-primary font-bold mb-14 text-white",children:["Our Happy ",(0,s.jsx)("span",{className:"text-green-500",children:"Clients"})]}),(0,s.jsxs)(j.Z,{...e,className:"w-full flex items-center justify-center",children:[(0,s.jsxs)("div",{id:"slider3",className:"w-full font-primary md:w-8/12 flex items-center justify-center gap-6",children:[(0,s.jsx)("p",{className:"text-white text-[20px] bg-green-700 px-10",children:"Easily aligns to our depth & scale of hiring"}),(0,s.jsx)("q",{className:"text-center text-[22px] text-white w-full md:w-7/12",children:(0,s.jsx)("i",{children:"Being a large firm, our talent acquisition requirements are diverse & targeting best of the talent in industry. hiringplug comes across as a reliable aggregator platform that easily aligns to our depth & scale of hiring with quick turnaround time. It is clearly simplicity at its best!"})}),(0,s.jsx)("p",{className:"text-center text-[22px] text-white font-semibold",children:"- Big 4 Consulting firm"})]}),(0,s.jsxs)("div",{id:"slider4",className:"w-full font-primary md:w-8/12 flex items-center justify-center gap-6",children:[(0,s.jsx)("p",{className:"text-white text-[20px] bg-green-700 px-10",children:"single point coordination system"}),(0,s.jsx)("q",{className:"text-center text-[22px] text-white w-full md:w-7/12",children:(0,s.jsx)("i",{children:"hiringplug is a great agency aggregator that’s helped us ramp-up our hiring requirements. They align well with our contingent hiring needs and the single point coordination system makes it very easy to manage vendor performance."})}),(0,s.jsx)("p",{className:"text-center text-[22px] text-white font-semibold",children:"- International Property Consultant"})]}),(0,s.jsxs)("div",{id:"slider5",className:"w-full font-primary md:w-8/12 flex items-center justify-center gap-6",children:[(0,s.jsx)("p",{className:"text-white text-[20px] bg-green-700 px-10",children:"Culture Fitment"}),(0,s.jsx)("q",{className:"text-center text-[22px] text-white w-full md:w-7/12",children:(0,s.jsx)("i",{children:"In a startup, culture fitment becomes the first parameter for selection of candidates. HiringPlug’s intervention provides access to culturally suitable, highly skilled candidates."})}),(0,s.jsx)("p",{className:"text-center text-[22px] text-white font-semibold",children:"- Drone Technology startup"})]}),(0,s.jsxs)("div",{id:"slider6",className:"w-full font-primary md:w-8/12 flex items-center justify-center gap-6",children:[(0,s.jsx)("p",{className:"text-white text-[20px] bg-green-700 px-10",children:"Accelerating Hiring Turnaround Time"}),(0,s.jsx)("q",{className:"text-center text-[22px] text-white w-full md:w-7/12",children:(0,s.jsx)("i",{children:"A great experience in accelerating hiring turnaround time and value add to our business."})}),(0,s.jsx)("p",{className:"text-center text-[22px] text-white font-semibold",children:"- Large Aviation Technology conglomerate"})]}),(0,s.jsxs)("div",{id:"slider7",className:"w-full font-primary md:w-8/12 flex items-center justify-center gap-6",children:[(0,s.jsx)("p",{className:"text-white text-[20px] bg-green-700 px-10",children:"One Stop Solution for Every Hiring Need"}),(0,s.jsx)("q",{className:"text-center text-[22px] text-white w-full md:w-7/12",children:(0,s.jsx)("i",{children:"The best part their business model is the quick turnaround time and variety. Hiringplug is one stop solution for every hiring need and we now go nowhere else."})}),(0,s.jsx)("p",{className:"text-center text-[22px] text-white font-semibold",children:"- Retail Technology company"})]})]})]})}i(9543);var C=i(5152),k=i.n(C),R=i(381),W=i.n(R),E=i(1664),B=i.n(E);function J(e){let{blog:t}=e;return(0,s.jsxs)("div",{className:"w-full font-primary flex-col flex items-center justify-center gap-2 bg-white py-20",children:[(0,s.jsxs)("p",{className:"text-[30px] sm:text-[35px] font-semibold text-gray-500",children:["Recruiter",(0,s.jsx)("span",{className:"font-medium text-[#00a63f]",children:"Times"})]}),(0,s.jsxs)("p",{className:"mb-16 text-[12px] text-center",children:["Talent Acquisition can be fun with our online recruitment platform!"," ",(0,s.jsx)("br",{}),"Visit our ",(0,s.jsx)("span",{className:"text-[#00a63f]",children:"blog"})," for your Daily dose of Tips, Tricks, Insights & Trends in Recruitments!"]}),(0,s.jsx)("div",{className:"w-full gap-6 flex items-start justify-center flex-row flex-wrap",children:null==t?void 0:t.map(e=>(0,s.jsxs)("div",{className:"flex items-start gap-4 justify-center w-[90%] sm:w-[400px] flex-col",children:[(0,s.jsx)(B(),{href:"https://blog.hiringplug.com/post/".concat(e.BlogID,"/").concat(e.Slug),target:"_blank",children:(0,s.jsx)(r(),{alt:"blog",src:"https://blog.hiringplug.com/uploads/blogimages/bigimages/".concat(e.BigImage),width:300,height:70,className:"w-full"})}),(0,s.jsxs)("p",{className:"text-blue-500 text-[12px] text-left",children:[(0,s.jsx)("span",{children:"Piyush Sharma, "}),(0,s.jsx)("span",{children:W()(e.DOC).format("DD MMMM , YYYY")})]}),(0,s.jsx)("p",{className:"text-[24px]",children:e.Name}),(0,s.jsx)("p",{className:"text-[14px] ",children:e.BriefDescription}),(0,s.jsx)(B(),{className:"text-[10px] text-[#00a63f]",href:"https://blog.hiringplug.com/post/".concat(e.BlogID,"/").concat(e.Slug),target:"_blank",children:"Read More"})]},e.BlogID))})]})}let O=k()(()=>Promise.all([i.e(356),i.e(530),i.e(322),i.e(165),i.e(599)]).then(i.bind(i,8599)),{ssr:!0}),S=k()(()=>i.e(18).then(i.bind(i,7018)),{ssr:!1}),X=k()(()=>i.e(735).then(i.bind(i,3735)),{loadableGenerated:{webpack:()=>[3735]},ssr:!1});var U=!0;function D(e){let{marquee:t,cards:i,blog:l}=e;return(0,s.jsxs)("div",{className:"w-full relative flex items-center justify-center flex-col overflow-x-hidden",children:[(0,s.jsx)(O,{marquee:null==t?void 0:t.data}),(0,s.jsx)(S,{cards:i}),(0,s.jsx)(X,{}),(0,s.jsx)(m,{}),(0,s.jsx)(w,{}),(0,s.jsx)(v,{}),(0,s.jsx)(I,{}),(0,s.jsx)(J,{blog:l}),(0,s.jsx)(b,{}),(0,s.jsx)(Z.Z,{})]})}},5152:function(e,t,i){e.exports=i(7645)}},function(e){e.O(0,[976,948,885,780,66,865,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);