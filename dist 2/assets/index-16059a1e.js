import{r as h,a as Te,R as De}from"./vendor-b1791c80.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var Me={exports:{}},ce={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=h,Ae=Symbol.for("react.element"),Pe=Symbol.for("react.fragment"),Fe=Object.prototype.hasOwnProperty,Ue=Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ze={key:!0,ref:!0,__self:!0,__source:!0};function Ce(r,t,n){var o,s={},l=null,c=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(c=t.ref);for(o in t)Fe.call(t,o)&&!ze.hasOwnProperty(o)&&(s[o]=t[o]);if(r&&r.defaultProps)for(o in t=r.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:Ae,type:r,key:l,ref:c,props:s,_owner:Ue.current}}ce.Fragment=Pe;ce.jsx=Ce;ce.jsxs=Ce;Me.exports=ce;var e=Me.exports,xe={},ke=Te;xe.createRoot=ke.createRoot,xe.hydrateRoot=ke.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),E=(r,t)=>{const n=h.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:m="",children:p,...x},i)=>h.createElement("svg",{ref:i,...qe,width:s,height:s,stroke:o,strokeWidth:c?Number(l)*24/Number(s):l,className:["lucide",`lucide-${Ge(r)}`,m].join(" "),...x},[...t.map(([d,w])=>h.createElement(d,w)),...Array.isArray(p)?p:[p]]));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=E("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=E("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=E("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=E("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=E("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=E("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=E("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=E("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=E("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=E("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=E("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=E("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=E("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=E("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=E("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=E("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=E("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=E("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=E("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=E("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=E("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=E("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=E("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=E("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),R=({children:r,type:t="fade",duration:n=300,show:o=!0,onExited:s=()=>{}})=>{const[l,c]=h.useState(o),[m,p]=h.useState(!1),x=(d,w,N)=>{const j="transition-all duration-300 ease-in-out";if(!w)return"opacity-0 scale-95";switch(d){case"fade":return`${j} opacity-100`;case"slide-up":return`${j} opacity-100 translate-y-0`;case"slide-down":return`${j} opacity-100 translate-y-0`;case"slide-left":return`${j} opacity-100 translate-x-0`;case"slide-right":return`${j} opacity-100 translate-x-0`;case"scale":return`${j} opacity-100 scale-100`;default:return`${j} opacity-100`}};if(h.useEffect(()=>{let d;return o&&!l?(c(!0),p(!0),d=setTimeout(()=>{p(!1)},50)):!o&&l&&(p(!0),d=setTimeout(()=>{c(!1),p(!1),s()},n)),()=>{clearTimeout(d)}},[o,l,n,s]),!l&&!o)return null;const i=x(t,o);return e.jsx("div",{className:i,children:r})},rt=({message:r="正在发送消息..."})=>e.jsxs("div",{className:"flex items-center space-x-2 text-gray-500 text-sm",children:[e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]}),e.jsx("span",{children:r})]}),at=({message:r="AI正在思考"})=>e.jsxs("div",{className:"flex items-center space-x-2 text-gray-500",children:[e.jsx("span",{className:"text-sm",children:r}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("div",{className:"w-1 h-1 bg-gray-400 rounded-full animate-pulse",style:{animationDelay:"0ms"}}),e.jsx("div",{className:"w-1 h-1 bg-gray-400 rounded-full animate-pulse",style:{animationDelay:"200ms"}}),e.jsx("div",{className:"w-1 h-1 bg-gray-400 rounded-full animate-pulse",style:{animationDelay:"400ms"}})]})]}),nt=({scenario:r,messages:t,onSendMessage:n,isProcessing:o})=>{const[s,l]=h.useState(""),[c,m]=h.useState(null),p=h.useRef(null),x=h.useRef(null),i=()=>{var j;(j=p.current)==null||j.scrollIntoView({behavior:"smooth"})};h.useEffect(()=>{i()},[t]);const d=j=>{j.preventDefault(),!(!s.trim()&&!c)&&(n({text:s.trim(),image:c,timestamp:new Date().toISOString()}),l(""),m(null),x.current&&(x.current.value=""))},w=j=>{const S=j.target.files[0];S&&S.type.startsWith("image/")&&m(S)},N=()=>{m(null),x.current&&(x.current.value="")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"panel-header glass-effect",style:{background:"linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.12) 100%)",backdropFilter:"blur(20px) saturate(1.3)",borderRadius:"20px",border:"1px solid rgba(255, 255, 255, 0.2)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"p-2 bg-blue-100/70 dark:bg-blue-900/50 rounded-2xl backdrop-blur-sm",children:e.jsx(ie,{className:"w-5 h-5 text-blue-600 dark:text-blue-400"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"问题端"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:r.problemRole})]})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 mb-4",children:[(!t||t.length===0)&&e.jsxs("div",{className:"text-center text-gray-500 py-8",children:[e.jsx("div",{className:"p-4 bg-gradient-to-r from-blue-100/80 to-sky-100/80 dark:from-blue-900/30 dark:to-sky-900/30 rounded-full shadow-inner backdrop-blur-sm mx-auto mb-3 w-fit",children:e.jsx(ie,{className:"w-8 h-8 text-blue-600 dark:text-blue-400"})}),e.jsx("p",{className:"text-sm",children:"在这里输入您的需求或问题"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"支持文本和图片输入"})]}),t&&t.map((j,S)=>e.jsxs("div",{className:"space-y-2",children:[j.type==="user"&&e.jsx(R,{type:"slide-right",show:!0,children:e.jsxs("div",{className:"message-bubble message-user slide-in-right",children:[j.image&&e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:URL.createObjectURL(j.image),alt:"用户上传",className:"max-w-full h-auto rounded-lg shadow-md"})}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(ie,{className:"w-4 h-4 text-white mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"message-content",children:e.jsx("p",{className:"whitespace-pre-wrap select-text",children:j.text})}),e.jsx("div",{className:"text-xs text-gray-300 mt-1 opacity-90",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:new Date(j.timestamp).toLocaleTimeString()})]})]})]})}),j.type==="ai_response"&&e.jsx(R,{type:"slide-left",show:!0,children:e.jsx("div",{className:"message-bubble message-ai slide-in-left",children:e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(W,{className:"w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"message-content",children:e.jsx("p",{className:"whitespace-pre-wrap select-text",children:j.text})}),e.jsx("div",{className:"text-xs text-gray-300 mt-1 opacity-90",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:new Date(j.timestamp).toLocaleTimeString()})]})]})})})]},S)),o&&e.jsx("div",{className:"message-bubble message-ai",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(W,{className:"w-4 h-4 text-gray-600"}),e.jsx(at,{message:"AI正在分析您的问题"})]})}),e.jsx("div",{ref:p})]}),e.jsx("div",{className:"p-4 border-t border-white/20 dark:border-white/10 glass-effect rounded-b-2xl",children:e.jsx("form",{onSubmit:d,className:"space-y-3",children:e.jsxs("div",{className:"flex space-x-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("textarea",{value:s,onChange:j=>l(j.target.value),placeholder:`作为${r.problemRole}，请描述您的需求...`,className:"input-field resize-none transition-all duration-200 focus:shadow-md",rows:3,readOnly:o}),c&&e.jsx(R,{type:"scale",show:!0,children:e.jsxs("div",{className:"mt-3 relative inline-block",children:[e.jsx("img",{src:URL.createObjectURL(c),alt:"预览",className:"max-w-xs h-auto rounded-lg border border-gray-300 shadow-md"}),e.jsx("button",{type:"button",onClick:N,className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 shadow-lg transition-all duration-200 hover:scale-110",children:"×"})]})}),o&&e.jsx("div",{className:"mt-2",children:e.jsx(rt,{message:"正在发送消息..."})})]}),e.jsxs("div",{className:"flex items-end space-x-2",children:[e.jsx("input",{ref:x,type:"file",accept:"image/*",onChange:w,className:"hidden",id:"image-upload"}),e.jsx("button",{type:"submit",disabled:!s.trim()&&!c||o,className:"btn-primary p-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",title:"发送消息",children:e.jsx(Re,{className:"w-5 h-5"})})]})]})})})]})},ot=({processing:r,messages:t})=>{const n=h.useRef(null),o=()=>{var s;(s=n.current)==null||s.scrollIntoView({behavior:"smooth"})};return h.useEffect(()=>{o()},[t]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"p-4 border-b border-white/20 dark:border-white/10 glass-effect rounded-t-2xl",style:{background:"linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(99, 102, 241, 0.12) 100%)",backdropFilter:"blur(20px) saturate(1.3)"},children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"p-2 bg-gradient-to-br from-purple-500/90 to-indigo-600/90 rounded-2xl backdrop-blur-sm",children:e.jsx(W,{className:"w-5 h-5 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"AI 中介处理"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"智能分析和方案生成"})]})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto space-y-4 mb-4 p-4",children:[t.length===0&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400 space-y-4",children:[e.jsx(R,{type:"fade",show:!0,children:e.jsx("div",{className:"p-4 rounded-full shadow-inner div-with-background",children:e.jsx(Xe,{className:"w-8 h-8 text-purple-600 dark:text-purple-400"})})}),e.jsx("p",{className:"text-lg",children:"LLM中介将在这里处理您的请求"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-4 max-w-md",children:[e.jsx(R,{type:"slide-up",show:!0,delay:100,children:e.jsxs("div",{className:"p-4 div-with-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-sm",children:[e.jsx(X,{className:"w-6 h-6 mb-2 text-amber-500"}),e.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:"分析需求"})]})}),e.jsx(R,{type:"slide-up",show:!0,delay:200,children:e.jsxs("div",{className:"p-4 div-with-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-sm",children:[e.jsx(st,{className:"w-6 h-6 mb-2 text-blue-500"}),e.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:"生成方案"})]})}),e.jsx(R,{type:"slide-up",show:!0,delay:300,children:e.jsxs("div",{className:"p-4 div-with-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-sm",children:[e.jsx(Ye,{className:"w-6 h-6 mb-2 text-green-500"}),e.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:"优化结果"})]})})]})]}),(t.length>0||r)&&e.jsx(R,{type:"fade",show:!0,children:e.jsx("div",{className:"p-4 glass-effect div-with-background",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(W,{className:"w-5 h-5 text-purple-600 dark:text-purple-400"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"flex items-center space-x-2",children:r?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full animate-bounce"}),e.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),e.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]}),e.jsx("span",{className:"text-sm text-purple-700 dark:text-purple-300",children:"AI正在处理中..."})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm text-purple-700 dark:text-purple-300",children:"处理完成"})]})}),t.length>0&&e.jsxs("div",{className:"text-xs text-purple-600 dark:text-purple-400 mt-1",children:["已处理 ",t.length," 个请求"]})]})]})})}),e.jsx("div",{ref:n})]})]})},lt=({scenario:r,messages:t,onSendMessage:n,isProcessing:o,iterationProcessing:s,iterationMode:l,pendingResponse:c,onGenerateSuggestion:m,onGenerateFollowUp:p,onConfirmSend:x,onCancelIteration:i,missingInfoOptions:d,showMissingInfoPanel:w,onToggleMissingInfoOption:N,onGenerateFollowUpBySelectedInfo:j,onSkipInfoCollection:S,onAcceptSuggestion:_,onRejectSuggestion:k,onNegotiateSuggestion:$,onCancelNegotiation:D,onSendNegotiationRequest:B,onAcceptFollowUp:A,onRejectFollowUp:K,onNegotiateFollowUp:Y,onCancelFollowUpNegotiation:ee,onSendFollowUpNegotiationRequest:te})=>{const[P,F]=h.useState(""),Z=({messageId:g,onSendNegotiation:T,onCancel:U})=>{const[f,b]=h.useState(""),[u,y]=h.useState(!1),C=async()=>{if(!(!f.trim()||u)){y(!0);try{await T(g,f),b("")}catch(M){console.error("发送协商请求失败:",M)}finally{y(!1)}}};return e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[e.jsx(pe,{className:"w-4 h-4 text-blue-600"}),e.jsx("span",{className:"text-sm font-medium text-blue-800 dark:text-blue-200",children:"协商模式"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("textarea",{value:f,onChange:M=>b(M.target.value),placeholder:"请描述您希望如何修改这个建议...",className:"w-full p-2 text-sm border border-blue-200 dark:border-blue-700 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-900/30 dark:text-blue-100",rows:3,disabled:u}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed",onClick:C,disabled:!f.trim()||u,children:u?"发送中...":"发送协商"}),e.jsx("button",{className:"px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors text-sm",onClick:()=>U(g),disabled:u,children:"取消"})]})]})]})},[O,V]=h.useState(""),J=h.useRef(null),se=()=>{var g;(g=J.current)==null||g.scrollIntoView({behavior:"smooth"})};h.useEffect(()=>{se()},[t]),h.useEffect(()=>{l&&c&&V(c)},[l,c]);const re=g=>{g.preventDefault(),P.trim()&&(n({text:P.trim(),timestamp:new Date().toISOString()}),F(""))},H=()=>{O.trim()&&(x(O.trim()),V(""))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"p-4 border-b border-white/20 dark:border-white/10 glass-effect rounded-t-2xl",style:{background:"linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(16, 185, 129, 0.12) 100%)",backdropFilter:"blur(20px) saturate(1.3)"},children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"p-2 bg-green-100/70 dark:bg-emerald-900/50 rounded-2xl backdrop-blur-sm",children:e.jsx(he,{className:"w-5 h-5 text-green-600 dark:text-green-400"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"解决方案"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:r.solutionRole})]})]})})}),l&&e.jsx(R,{type:"slide-down",show:!0,children:e.jsxs("div",{className:"p-3",style:{background:"linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(147,197,253,0.06) 100%)",backdropFilter:"blur(14px) saturate(1.2)",WebkitBackdropFilter:"blur(14px) saturate(1.2)",border:"1px solid rgba(147,197,253,0.25)",borderRadius:"12px"},children:[e.jsxs("div",{className:"flex items-center space-x-2 text-blue-800 dark:text-blue-200",children:[e.jsx(X,{className:"w-4 h-4"}),e.jsx("span",{className:"text-sm font-medium",children:"迭代模式 - 请确认最终回复内容"})]}),e.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-300 mt-1",children:'您可以继续编辑内容，确认无误后点击"确认发送"将回复发送给客户'})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 mb-4 p-4",children:[(!t||t.length===0)&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400 space-y-4",children:[e.jsx(R,{type:"fade",show:!0,children:e.jsx("div",{className:"p-4 bg-gradient-to-r from-green-100/80 to-emerald-100/80 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full shadow-inner backdrop-blur-sm",children:e.jsx(he,{className:"w-8 h-8 text-green-600 dark:text-green-400"})})}),e.jsx("p",{className:"text-lg",children:"等待接收LLM翻译的需求"}),e.jsx("p",{className:"text-sm text-gray-400 dark:text-gray-500",children:"在此基础上提供定制化解决方案"})]}),t&&t.map((g,T)=>e.jsx(R,{type:g.type==="user"?"slide-right":"slide-left",show:!0,children:e.jsxs("div",{className:"space-y-2",children:[g.type==="llm_request"&&e.jsx("div",{className:"message-bubble text-blue-900 shadow-sm hover:shadow-md transition-all duration-200",style:{background:"linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.06) 100%)",backdropFilter:"blur(20px) saturate(1.3)",WebkitBackdropFilter:"blur(20px) saturate(1.3)",border:"1px solid rgba(147, 197, 253, 0.2)",borderRadius:"12px"},children:e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(W,{className:"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-xs font-semibold text-white mb-1",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:"来自LLM的智能分析需求"}),g.needsAnalysis&&e.jsxs("div",{className:"mb-2 p-2 rounded text-sm",style:{background:"linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 197, 253, 0.08) 100%)",backdropFilter:"blur(10px) saturate(1.2)",WebkitBackdropFilter:"blur(10px) saturate(1.2)",border:"1px solid rgba(147, 197, 253, 0.25)",borderRadius:"8px"},children:[e.jsx("strong",{children:"需求理解："}),g.needsAnalysis]}),e.jsx("div",{className:"message-content",children:e.jsx("p",{className:"whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text",children:g.text})}),g.missingInfoOptions&&g.missingInfoOptions.length>0&&e.jsxs("div",{className:"mt-2 p-2 bg-orange-100 border-l-4 border-orange-400 rounded text-sm",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(ge,{className:"w-3 h-3 text-orange-600"}),e.jsxs("span",{className:"text-orange-800 font-medium",children:["发现 ",g.missingInfoOptions.length," 个可了解的信息点"]})]}),e.jsx("div",{className:"text-orange-700 text-xs mt-1",children:"建议了解更多信息以提供更精准的服务"})]}),e.jsx("div",{className:"text-xs text-gray-300 mt-1 opacity-90",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:new Date(g.timestamp).toLocaleTimeString()})]})]})}),g.type==="user"&&e.jsx("div",{className:"message-bubble text-green-900 ml-auto shadow-sm hover:shadow-md transition-all duration-200",style:{background:"linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(134, 239, 172, 0.06) 100%)",backdropFilter:"blur(20px) saturate(1.3)",WebkitBackdropFilter:"blur(20px) saturate(1.3)",border:"1px solid rgba(34, 197, 94, 0.2)",borderRadius:"12px"},children:e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(ie,{className:"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"message-content",children:e.jsx("p",{className:"whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text",children:g.text})}),e.jsx("div",{className:"text-xs text-gray-300 mt-1 opacity-90",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:new Date(g.timestamp).toLocaleTimeString()})]})]})}),g.type==="ai_response"&&e.jsx("div",{className:"message-bubble message-ai shadow-sm hover:shadow-md transition-all duration-200",children:e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(W,{className:"w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-xs font-medium text-gray-700 mb-1",children:"LLM优化后的响应"}),e.jsx("div",{className:"message-content",children:e.jsx("p",{className:"whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text",children:g.text})}),e.jsx("div",{className:"text-xs text-gray-300 mt-1 opacity-90",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:new Date(g.timestamp).toLocaleTimeString()})]})]})}),g.type==="suggestion"&&e.jsx("div",{className:"message-bubble text-purple-900 shadow-sm hover:shadow-md transition-all duration-200",style:{background:"linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(221,214,254,0.06) 100%)",backdropFilter:"blur(14px) saturate(1.2)",WebkitBackdropFilter:"blur(14px) saturate(1.2)",border:"1px solid rgba(168,85,247,0.25)",borderRadius:"12px"},children:e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(X,{className:"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-xs font-semibold text-white mb-1",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:"AI生成的建议"}),e.jsx("div",{className:"cursor-pointer rounded p-2 transition-colors",onClick:()=>F(g.text),title:"点击填入输入框",style:{background:"linear-gradient(135deg, rgba(168,85,247,0.06) 0%, rgba(221,214,254,0.05) 100%)",border:"1px solid rgba(168,85,247,0.2)",maxHeight:"none",overflowY:"visible",width:"100%",wordWrap:"break-word",whiteSpace:"pre-wrap"},children:e.jsx("p",{className:"whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text",style:{margin:0,padding:0,lineHeight:"1.5",wordBreak:"break-word",overflowWrap:"break-word",maxWidth:"100%"},children:g.text})}),e.jsx("div",{className:"mt-3",children:g.feedbackGiven?e.jsx("div",{className:`text-sm px-3 py-1 rounded ${g.accepted?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"}`,children:g.accepted?"✓ 已接受建议":"↻ 已拒绝，重新生成中..."}):g.negotiating?e.jsx(Z,{messageId:g.id,onSendNegotiation:B,onCancel:D}):g.negotiated?e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2",children:e.jsxs("div",{className:"text-sm text-blue-800 dark:text-blue-200",children:["✓ 已协商修改",e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs text-blue-600 hover:text-blue-800",children:"查看协商详情"}),e.jsxs("div",{className:"mt-2 text-xs text-gray-600 dark:text-gray-400",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"原始建议:"})," ",g.originalText]}),e.jsxs("div",{className:"mt-1",children:[e.jsx("strong",{children:"协商要求:"})," ",g.negotiationRequest]})]})]})]})}):e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("button",{onClick:()=>_&&_(g.id),className:"flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm",style:{background:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(8px) saturate(1.2)",WebkitBackdropFilter:"blur(8px) saturate(1.2)",border:"1px solid rgba(255, 255, 255, 0.25)"},title:"接受这个建议",children:[e.jsx(le,{className:"w-4 h-4"}),e.jsx("span",{children:"接受建议"})]}),e.jsxs("button",{onClick:()=>$&&$(g.id),className:"flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm",style:{background:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(8px) saturate(1.2)",WebkitBackdropFilter:"blur(8px) saturate(1.2)",border:"1px solid rgba(255, 255, 255, 0.25)"},title:"与AI协商修改建议",children:[e.jsx(pe,{className:"w-4 h-4"}),e.jsx("span",{children:"协商"})]}),e.jsxs("button",{onClick:()=>k&&k(g.id),className:"flex-1 px-3 py-2 text-white rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm",style:{background:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(8px) saturate(1.2)",WebkitBackdropFilter:"blur(8px) saturate(1.2)",border:"1px solid rgba(255, 255, 255, 0.25)"},title:"要求重新生成",children:[e.jsx(ue,{className:"w-4 h-4"}),e.jsx("span",{children:"重新生成"})]})]})}),e.jsx("div",{className:"text-xs text-gray-300 mt-1 opacity-90",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:new Date(g.timestamp).toLocaleTimeString()})]})]})}),g.type==="followup"&&e.jsx("div",{className:"message-bubble text-orange-900 shadow-sm hover:shadow-md transition-all duration-200",style:{background:"linear-gradient(135deg, rgba(251, 146, 60, 0.08) 0%, rgba(254, 215, 170, 0.06) 100%)",backdropFilter:"blur(14px) saturate(1.2)",WebkitBackdropFilter:"blur(14px) saturate(1.2)",border:"1px solid rgba(251, 146, 60, 0.25)",borderRadius:"12px"},children:e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(Ne,{className:"w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-xs font-semibold text-white mb-1",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:"AI生成的追问"}),e.jsx("div",{className:"cursor-pointer rounded p-2 transition-colors",onClick:()=>F(g.text),title:"点击填入输入框",style:{background:"linear-gradient(135deg, rgba(251, 146, 60, 0.06) 0%, rgba(254, 215, 170, 0.05) 100%)",border:"1px solid rgba(251, 146, 60, 0.2)",maxHeight:"none",overflowY:"visible",width:"100%",wordWrap:"break-word",whiteSpace:"pre-wrap"},children:e.jsx("p",{className:"whitespace-pre-wrap text-gray-800 dark:text-gray-200 select-text",style:{margin:0,padding:0,lineHeight:"1.5",wordBreak:"break-word",overflowWrap:"break-word",maxWidth:"100%"},children:g.text})}),e.jsx("div",{className:"mt-3",children:g.feedbackGiven?e.jsx("div",{className:`text-sm px-3 py-1 rounded ${g.accepted?"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200":"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"}`,children:g.accepted?"✓ 已接受追问":"↻ 已拒绝，重新生成中..."}):g.negotiating?e.jsx(Z,{messageId:g.id,onSendNegotiation:te,onCancel:ee}):g.negotiated?e.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2",children:e.jsxs("div",{className:"text-sm text-blue-800 dark:text-blue-200",children:["✓ 已协商修改",e.jsxs("details",{className:"mt-1",children:[e.jsx("summary",{className:"cursor-pointer text-xs text-blue-600 hover:text-blue-800",children:"查看协商详情"}),e.jsxs("div",{className:"mt-2 text-xs text-gray-600 dark:text-gray-400",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"原始追问:"})," ",g.originalText]}),e.jsxs("div",{className:"mt-1",children:[e.jsx("strong",{children:"协商要求:"})," ",g.negotiationRequest]})]})]})]})}):e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("button",{onClick:()=>A&&A(g.id),className:"flex-1 px-3 py-2 text-green-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm",style:{background:"linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(52,211,153,0.1) 100%)",backdropFilter:"blur(8px) saturate(1.2)",WebkitBackdropFilter:"blur(8px) saturate(1.2)",border:"1px solid rgba(16,185,129,0.25)"},title:"接受这个追问",children:[e.jsx(le,{className:"w-4 h-4"}),e.jsx("span",{children:"接受追问"})]}),e.jsxs("button",{onClick:()=>Y&&Y(g.id),className:"flex-1 px-3 py-2 text-blue-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm",style:{background:"linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(147,197,253,0.1) 100%)",backdropFilter:"blur(8px) saturate(1.2)",WebkitBackdropFilter:"blur(8px) saturate(1.2)",border:"1px solid rgba(59,130,246,0.25)"},title:"与AI协商修改追问",children:[e.jsx(pe,{className:"w-4 h-4"}),e.jsx("span",{children:"协商"})]}),e.jsxs("button",{onClick:()=>K&&K(g.id),className:"flex-1 px-3 py-2 text-red-700 rounded-lg transition-colors flex items-center justify-center space-x-1 text-sm",style:{background:"linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(252,165,165,0.1) 100%)",backdropFilter:"blur(8px) saturate(1.2)",WebkitBackdropFilter:"blur(8px) saturate(1.2)",border:"1px solid rgba(248,113,113,0.25)"},title:"要求重新生成",children:[e.jsx(ue,{className:"w-4 h-4"}),e.jsx("span",{children:"重新生成"})]})]})}),e.jsx("div",{className:"text-xs text-gray-300 mt-1 opacity-90",style:{textShadow:"0 1px 2px rgba(0,0,0,0.5)"},children:new Date(g.timestamp).toLocaleTimeString()})]})]})})]})},T)),s&&e.jsx(R,{type:"fade",show:!0,children:e.jsx("div",{className:"message-bubble message-ai border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(X,{className:"w-4 h-4 text-purple-700 dark:text-purple-400"}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full animate-bounce"}),e.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),e.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]}),e.jsx("span",{className:"text-sm text-purple-700 dark:text-purple-300",children:"AI正在生成..."})]})})}),o&&!s&&e.jsx(R,{type:"fade",show:!0,children:e.jsx("div",{className:"message-bubble message-ai border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(W,{className:"w-4 h-4 text-green-700 dark:text-green-400"}),e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-bounce"}),e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),e.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})]})})}),e.jsx("div",{ref:J})]}),w&&e.jsx(R,{type:"slide-up",show:!0,children:e.jsx("div",{className:"p-4 border-t border-gray-200/50 dark:border-gray-700/50",style:{background:"linear-gradient(135deg, rgba(251, 146, 60, 0.08) 0%, rgba(251, 191, 36, 0.06) 100%)",backdropFilter:"blur(20px) saturate(1.3)",WebkitBackdropFilter:"blur(20px) saturate(1.3)",border:"1px solid rgba(251, 146, 60, 0.2)",borderRadius:"12px"},children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2 text-orange-800 dark:text-orange-200",children:[e.jsx(ge,{className:"w-5 h-5"}),e.jsx("span",{className:"text-sm font-semibold",children:"选择希望了解的信息"})]}),e.jsx("p",{className:"text-xs text-orange-700 dark:text-orange-300",children:"AI分析发现可以了解以下信息以提供更精准的服务，请选择您希望询问的信息点："}),e.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:d.map((g,T)=>e.jsx("div",{className:`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${g.selected?"border-orange-300 bg-orange-100 dark:bg-orange-900/30":"border-gray-200 bg-white dark:bg-gray-800 hover:border-orange-200"}`,onClick:()=>N(T),children:e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("div",{className:`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${g.selected?"border-orange-500 bg-orange-500":"border-gray-300"}`,children:g.selected&&e.jsx(He,{className:"w-3 h-3 text-white"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium text-gray-900 dark:text-gray-100",children:g.name}),e.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-300 mt-1",children:g.description})]})]})},T))}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{onClick:j,disabled:s||!d.some(g=>g.selected),className:"flex-1 btn-primary p-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2",title:"生成追问",children:s?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"生成中..."})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ve,{className:"w-4 h-4"}),e.jsxs("span",{children:["生成追问 (",d.filter(g=>g.selected).length,")"]})]})}),e.jsx("button",{onClick:S,disabled:s,className:"px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2",title:"跳过，直接回复",children:e.jsx("span",{children:"跳过"})})]}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 text-center",children:"选择信息点后，AI将生成自然流畅的追问供您使用"})]})})}),l&&e.jsx(R,{type:"slide-up",show:!0,children:e.jsx("div",{className:"p-4 border-t border-gray-200/50 dark:border-gray-700/50",style:{background:"linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(254, 240, 138, 0.06) 100%)",backdropFilter:"blur(20px) saturate(1.3)",WebkitBackdropFilter:"blur(20px) saturate(1.3)",border:"1px solid rgba(251, 191, 36, 0.2)",borderRadius:"12px"},children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2 text-yellow-800 dark:text-yellow-200",children:[e.jsx(X,{className:"w-4 h-4"}),e.jsx("span",{className:"text-sm font-medium",children:"编辑最终回复内容"})]}),e.jsx("textarea",{value:O,onChange:g=>V(g.target.value),placeholder:"编辑最终回复内容...",className:"input-field resize-none transition-all duration-200 focus:shadow-md",rows:4,readOnly:o}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("button",{onClick:H,disabled:!O.trim()||o,className:"flex-1 btn-primary p-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2",title:"确认发送给客户",children:[e.jsx(le,{className:"w-4 h-4"}),e.jsx("span",{children:"确认发送"})]}),e.jsxs("button",{onClick:i,disabled:o,className:"px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2",title:"取消迭代",children:[e.jsx(ue,{className:"w-4 h-4"}),e.jsx("span",{children:"取消"})]})]})]})})}),!l&&e.jsx("div",{className:"p-4 border-t border-white/20 dark:border-white/10 glass-effect rounded-b-2xl",children:e.jsxs("form",{onSubmit:re,className:"space-y-3",children:[e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("div",{className:"flex-1",children:e.jsx("textarea",{value:P,onChange:g=>F(g.target.value),placeholder:`作为${r.solutionRole}，请提供您的专业建议...`,className:"input-field resize-none transition-all duration-200 focus:shadow-md",rows:3,readOnly:o||s})}),e.jsx("div",{className:"flex flex-col justify-end",children:e.jsx("button",{type:"submit",disabled:!P.trim()||o||s,className:"btn-primary p-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 hover:scale-105",title:"发送解决方案",children:e.jsx(Re,{className:"w-5 h-5"})})})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{type:"button",onClick:m,disabled:s||!t||t.length===0,className:"flex-1 px-3 py-2 text-white rounded-2xl transition-all hover:scale-105 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-sm",style:{background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(14px) saturate(1.2)",WebkitBackdropFilter:"blur(14px) saturate(1.2)",border:"1px solid rgba(255, 255, 255, 0.3)"},title:"AI生成建议",children:s?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"生成中..."})]}):e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"w-4 h-4 text-white"}),e.jsx("span",{className:"font-semibold text-sm",style:{textShadow:"0 1px 2px rgba(0,0,0,0.35)"},children:"生成相应建议"})]})}),e.jsx("button",{type:"button",onClick:p,disabled:s||!t||t.length===0,className:"flex-1 px-3 py-2 text-white rounded-2xl transition-all hover:scale-105 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-sm",style:{background:"rgba(255, 255, 255, 0.2)",backdropFilter:"blur(14px) saturate(1.2)",WebkitBackdropFilter:"blur(14px) saturate(1.2)",border:"1px solid rgba(255, 255, 255, 0.3)"},title:"AI生成追问",children:s?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"生成中..."})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ne,{className:"w-4 h-4 text-white"}),e.jsx("span",{className:"font-semibold text-sm",style:{textShadow:"0 1px 2px rgba(0,0,0,0.35)"},children:"生成相应追问"})]})})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:"💡 基于LLM中介的分析结果提供解决方案"})})]})})]})},it=({scenarios:r,currentScenario:t,onScenarioChange:n})=>(r[t],e.jsx("div",{className:"flex items-center space-x-2",children:Object.values(r).map(o=>{const s=o.id===t;return e.jsxs("button",{onClick:()=>n(o.id),className:"flex items-center space-x-2 px-4 py-3 rounded-2xl border transition-all duration-200 backdrop-blur-sm "+(s?"bg-white/20 text-white border-white/50 shadow-lg backdrop-blur-md":"bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-md"),title:o.description,children:[e.jsx("div",{className:"p-1.5 rounded-xl transition-all duration-200 "+(s?"bg-white/25 text-white backdrop-blur-sm":"bg-white/15 text-white backdrop-blur-sm"),children:e.jsx(o.icon,{className:"w-4 h-4"})}),e.jsx("div",{className:"text-sm font-medium",children:o.name})]},o.id)})})),ct=()=>{const[r,t]=h.useState([]),n=h.useCallback(c=>{const m=Date.now()+Math.random(),p={id:m,type:"info",duration:5e3,...c};t(x=>[...x,p]),p.duration>0&&setTimeout(()=>{o(m)},p.duration)},[]),o=h.useCallback(c=>{t(m=>m.filter(p=>p.id!==c))},[]);h.useEffect(()=>{window.showNotification=n},[n]);const s=c=>{switch(c){case"success":return e.jsx(le,{className:"w-5 h-5 text-green-600"});case"error":return e.jsx(ge,{className:"w-5 h-5 text-red-600"});case"warning":return e.jsx(Be,{className:"w-5 h-5 text-yellow-600"});default:return e.jsx(Ke,{className:"w-5 h-5 text-blue-600"})}},l=c=>{switch(c){case"success":return"bg-green-50 border-green-200 text-green-800";case"error":return"bg-red-50 border-red-200 text-red-800";case"warning":return"bg-yellow-50 border-yellow-200 text-yellow-800";default:return"bg-blue-50 border-blue-200 text-blue-800"}};return r.length===0?null:e.jsx("div",{className:"fixed top-4 right-4 z-50 space-y-2",children:r.map(c=>e.jsx("div",{className:`max-w-sm w-full border rounded-lg p-4 shadow-lg transition-all duration-300 transform translate-x-0 ${l(c.type)}`,children:e.jsxs("div",{className:"flex items-start space-x-3",children:[s(c.type),e.jsxs("div",{className:"flex-1 min-w-0",children:[c.title&&e.jsx("h4",{className:"text-sm font-medium mb-1",children:c.title}),e.jsx("p",{className:"text-sm",children:c.message})]}),e.jsx("button",{onClick:()=>o(c.id),className:"flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors",children:e.jsx(Ie,{className:"w-4 h-4"})})]})},c.id))})},$e=(r,t="info",n={})=>{window.showNotification&&window.showNotification({message:r,type:t,...n})},dt=(r,t={})=>{$e(r,"success",t)},pt=(r,t={})=>{$e(r,"info",t)},ut=({onClearMessages:r,onToggleSettings:t,onFocusInput:n})=>(h.useEffect(()=>{const o=s=>{const l=s.ctrlKey||s.metaKey;s.shiftKey,s.altKey;const c=["INPUT","TEXTAREA"].includes(s.target.tagName);if(l&&s.key==="k"&&!c){s.preventDefault(),r(),pt("已清空所有消息",{duration:2e3});return}if(l&&s.key===","&&!c){s.preventDefault(),t();return}if(l&&s.key==="/"&&!c){s.preventDefault(),ve();return}if(l&&s.key==="1"&&!c){s.preventDefault(),n("problem");return}if(l&&s.key==="3"&&!c){s.preventDefault(),n("solution");return}if(s.key==="Escape"){document.querySelectorAll("[data-modal]").forEach(p=>{p.style.display!=="none"&&(p.style.display="none")});return}if(s.key==="F1"){s.preventDefault(),ve();return}};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[r,t,n]),null),ve=()=>{const r=[{key:"Ctrl/Cmd + K",description:"清空所有消息"},{key:"Ctrl/Cmd + ,",description:"打开设置"},{key:"Ctrl/Cmd + /",description:"显示快捷键帮助"},{key:"Ctrl/Cmd + 1",description:"聚焦到问题端输入框"},{key:"Ctrl/Cmd + 3",description:"聚焦到方案端输入框"},{key:"Esc",description:"取消当前操作"},{key:"F1",description:"显示帮助"}];r.map(n=>`${n.key}: ${n.description}`).join(`
`);const t=document.createElement("div");t.setAttribute("data-modal","shortcuts-help"),t.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",t.innerHTML=`
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">键盘快捷键</h3>
        <button class="text-gray-400 hover:text-gray-600" onclick="this.closest('[data-modal]').remove()">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div class="space-y-3">
        ${r.map(n=>`
          <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
            <span class="text-sm text-gray-600">${n.description}</span>
            <kbd class="px-2 py-1 text-xs font-mono bg-gray-100 rounded border">${n.key}</kbd>
          </div>
        `).join("")}
      </div>
      <div class="mt-6 text-center">
        <button 
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          onclick="this.closest('[data-modal]').remove()"
        >
          关闭
        </button>
      </div>
    </div>
  `,t.addEventListener("click",n=>{n.target===t&&t.remove()}),document.body.appendChild(t),setTimeout(()=>{document.body.contains(t)&&t.remove()},1e4)},mt=({isOpen:r,onClose:t,settings:n,onUpdateSettings:o})=>{const[s,l]=h.useState(n),c=h.useRef(null);h.useEffect(()=>{l(n)},[n]),h.useEffect(()=>{const i=d=>{c.current&&!c.current.contains(d.target)&&r&&t()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[r,t]);const m=(i,d)=>{l(w=>({...w,[i]:d}))},p=()=>{o(s),dt("设置已保存",{duration:2e3}),t()},x=()=>{const i={darkMode:window.matchMedia("(prefers-color-scheme: dark)").matches,fontSize:"medium",soundEnabled:!0,autoScroll:!0,showTimestamps:!0,language:"zh-CN",apiEndpoint:"https://api.example.com/v1",maxMessagesPerPanel:50};l(i)};return r?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center",children:e.jsxs("div",{ref:c,className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden transition-all duration-300 transform scale-100",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(_e,{className:"w-5 h-5 text-primary-600 dark:text-primary-400"}),e.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"设置"})]}),e.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors",children:e.jsx(Ie,{className:"w-5 h-5"})})]}),e.jsx("div",{className:"px-6 py-4 max-h-[70vh] overflow-y-auto",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 mb-3",children:"外观"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[s.darkMode?e.jsx(Ze,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"}):e.jsx(Qe,{className:"w-5 h-5 text-yellow-500"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"深色模式"})]}),e.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"sr-only peer",checked:s.darkMode,onChange:i=>m("darkMode",i.target.checked)}),e.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"字体大小"}),e.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400 capitalize",children:s.fontSize})]}),e.jsxs("select",{value:s.fontSize,onChange:i=>m("fontSize",i.target.value),className:"block w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",children:[e.jsx("option",{value:"small",children:"小"}),e.jsx("option",{value:"medium",children:"中"}),e.jsx("option",{value:"large",children:"大"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 mb-3",children:"行为"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[s.soundEnabled?e.jsx(et,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"}):e.jsx(tt,{className:"w-5 h-5 text-gray-600 dark:text-gray-300"}),e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"声音提示"})]}),e.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"sr-only peer",checked:s.soundEnabled,onChange:i=>m("soundEnabled",i.target.checked)}),e.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"自动滚动到最新消息"}),e.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"sr-only peer",checked:s.autoScroll,onChange:i=>m("autoScroll",i.target.checked)}),e.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-700 dark:text-gray-300",children:"显示消息时间戳"}),e.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"checkbox",className:"sr-only peer",checked:s.showTimestamps,onChange:i=>m("showTimestamps",i.target.checked)}),e.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 dark:text-gray-100 mb-3",children:"高级设置"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-700 dark:text-gray-300 mb-2",children:"语言"}),e.jsxs("select",{value:s.language,onChange:i=>m("language",i.target.value),className:"block w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",children:[e.jsx("option",{value:"zh-CN",children:"简体中文"}),e.jsx("option",{value:"en-US",children:"English (US)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-700 dark:text-gray-300 mb-2",children:"API端点"}),e.jsx("input",{type:"text",value:s.apiEndpoint,onChange:i=>m("apiEndpoint",i.target.value),className:"block w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",placeholder:"https://api.example.com/v1"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("label",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"每个面板最大消息数"}),e.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:s.maxMessagesPerPanel})]}),e.jsx("input",{type:"range",min:"10",max:"100",step:"10",value:s.maxMessagesPerPanel,onChange:i=>m("maxMessagesPerPanel",parseInt(i.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"})]})]})]})]})}),e.jsxs("div",{className:"px-6 py-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700 flex justify-between",children:[e.jsx("button",{onClick:x,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-650",children:"重置"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{onClick:t,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-650",children:"取消"}),e.jsx("button",{onClick:p,className:"px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600",children:"保存"})]})]})]})}):null},ne={baseURL:"https://api.deepbricks.ai/v1/",model:"GPT-5-Chat",apiKey:"sk-lNVAREVHjj386FDCd9McOL7k66DZCUkTp6IbV0u9970qqdlg"},L=(r,t=2e3)=>typeof r!="string"||r.length<=t?r:r.slice(0,t)+"…(truncated)",I=async(r,t=.7,n=4096)=>{var o,s,l,c;try{const m=typeof import.meta<"u"&&{BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&!1;console.group("[LLM] Request Details"),console.log("🔹 Model:",ne.model),console.log("🔹 Temperature:",t),console.log("🔹 Total Messages:",r.length),console.group("📝 Complete Prompt Content");try{r.forEach((d,w)=>{console.group(`💬 Message ${w+1}: [${d.role.toUpperCase()}]`),console.log(d.content),console.groupEnd()})}catch(d){console.log("Error displaying messages:",d)}if(console.groupEnd(),m){console.group("🔧 Debug Info (JSON Format)");try{console.log("messages JSON:",JSON.stringify(r,null,2))}catch{console.log("Failed to serialize messages to JSON")}console.groupEnd()}console.time("[LLM] ⏱️ Request Latency");const p=await fetch(`${ne.baseURL}chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ne.apiKey}`},body:JSON.stringify({model:ne.model,messages:r,temperature:t,max_tokens:n,stream:!1})});if(!p.ok){console.timeEnd("[LLM] ⏱️ Request Latency"),console.log("❌ HTTP Status:",p.status,p.statusText);let d="";try{const N=await p.json();console.log("❌ API Error Details:",N),d=((o=N.error)==null?void 0:o.message)||N.message||""}catch{console.log("❌ Failed to parse error response")}console.groupEnd();const w=d?`API调用失败: ${p.status} ${p.statusText} - ${d}`:`API调用失败: ${p.status} ${p.statusText}`;throw new Error(w)}const x=await p.json(),i=(c=(l=(s=x==null?void 0:x.choices)==null?void 0:s[0])==null?void 0:l.message)==null?void 0:c.content;if(console.timeEnd("[LLM] ⏱️ Request Latency"),console.group("📤 Response Details"),x!=null&&x.usage&&console.log("💰 Token Usage:",x.usage),console.log("✅ Response Length:",(i==null?void 0:i.length)||0,"characters"),console.groupEnd(),console.group("📋 Complete Response Content"),console.log(i||"(Empty response)"),console.groupEnd(),m){console.group("🔧 Raw Response Data");try{console.log("Full API Response:",JSON.stringify(x,null,2))}catch{console.log("Failed to serialize response data")}console.groupEnd()}return console.groupEnd(),i}catch(m){try{console.groupEnd()}catch{}throw console.groupCollapsed("[LLM] Error"),console.error("魔搭API调用错误:",m),console.groupEnd(),m}},be=r=>{if(!r)return r;const t=["非常抱歉","抱歉","我未能理解","请您详细描述","信息不足","若有不符请指正","你好！很高兴能帮助你。","请问你现在是在寻找什么类型的商品","衣服、鞋子还是其他什么小物件","感谢您的反馈","我们非常重视","如果您有任何问题","如需.*帮助","请随时联系","客服团队","支持团队","为您提供满意的解决方案","我们会尽力.*解决","敬请谅解","忽略本次对话","继续浏览其他服务或信息","欢迎.*联系我们"];let n=r;return t.forEach(o=>{const s=new RegExp(o,"g");n=n.replace(s,"")}),n.trim()},q=r=>{if(!r)return r;const t=["^非常抱歉.*$","^抱歉.*$","我未能理解您的需求","请您详细描述一下","信息不足，无法","若有不符请指正","感谢您的反馈，我们非常重视","如果您有任何问题，请随时联系","客服团队会为您","支持团队会为您","敬请谅解"];let n=r;return t.forEach(o=>{const s=new RegExp(o,"gm");n=n.replace(s,"")}),n.trim()},xt=r=>{if(!r)return r;const t=r.trim();return/[。.!？！?]$/.test(t)?t:t+"。"},Oe=r=>{if(!r)return r;let t=r.trim();return/[。.!！？?]$/.test(t)||(t=t+"。"),t},Q=r=>{if(!r)return r;let t=r.trim();return t=t.replace(/^(你好|您好|嗨|hello|hi)[！!，,。\s]*/i,""),t=t.replace(/^(很高兴[\s\S]{0,20}?)[。.!！？!?]+\s*/i,""),t=t.replace(/^(感谢[\s\S]{0,20}?)[。.!！？!?]+\s*/i,""),t=t.replace(/^(谢谢[\s\S]{0,20}?)[。.!！？!?]+\s*/i,""),t.trim()},fe=r=>{if(!r)return!0;const t=r.trim();return!!(t.length<12||/^(你好|您好|嗨|hello|hi)/i.test(t)||/[能会可]$/.test(t)||/([，、,;；]\s*)$/.test(t)||/(的|地|得|或|和|及|与|但|且|而|把|被|为|因|于|对|给|向|在|用|到|就|以)$/.test(t)||/(以便|为了|比如|例如)$/.test(t))},ye=r=>{if(!r)return!0;const t=r.trim();return!!(!/[。.!！？?]$/.test(t)&&t.length<30||/(以便|为了)$/.test(t)||/(的|地|得)$/.test(t)||/([，、,;；])$/.test(t))},we=(r,{mode:t="suggestion",scenario:n="retail"}={})=>{if(!r)return r;let o=r.trim();if(/以便$/.test(o)&&(o+=t==="followup"?"我们更准确地了解您的需求":"为您提供更合适的方案"),/(的|地|得)$/.test(o)){let s="内容";t==="suggestion"?s=n==="enterprise"?"方案":n==="education"?"学习方案":"产品":t==="followup"&&(s="信息"),o+=s}return o=o.replace(/[，、,;；]\s*$/,"。"),o},me=(r,t)=>{for(const n of t){const o=r.indexOf(n);if(o!==-1)return{idx:o,keyword:n}}return{idx:-1,keyword:""}},G=(r,t="聊天历史上下文",n=6)=>{if(!r||r.length===0)return console.log("ℹ️ No chat history available for context"),"";console.group("🔍 Chat History Analysis"),console.log(`📊 Total History Messages: ${r.length}`),console.log(`📝 Using Recent Messages: ${Math.min(r.length,n)}`);const o=r.slice(-n);return o.forEach((l,c)=>{var i,d,w;let m="AI处理";if(l.type==="user")if(l.panel==="problem")m="客户";else if(l.panel==="solution")m="企业端";else{const N=((i=l.text)==null?void 0:i.toLowerCase())||"";N.includes("退货")||N.includes("投诉")||N.includes("不满")||N.includes("cnm")||N.includes("草")||N.includes("妈")?m="客户":m="企业端"}else l.type==="ai_response"?m=l.panel==="problem"?"系统回复给客户":"系统回复给企业端":l.type==="llm_request"&&(m="AI需求转译");const p=(d=l.text)==null?void 0:d.substring(0,100),x=((w=l.text)==null?void 0:w.length)>100?"...":"";console.log(`${c+1}. [${m}]: ${p}${x}`),console.log(`   🔍 Debug: type="${l.type}", panel="${l.panel}", timestamp="${l.timestamp}"`)}),console.groupEnd(),`

${t}：
`+o.map((l,c)=>{var p,x;let m="AI处理";if(l.type==="user")if(l.panel==="problem")m="客户";else if(l.panel==="solution")m="企业端";else{console.warn(`⚠️ 消息panel字段异常: panel="${l.panel}", 内容预览: "${(p=l.text)==null?void 0:p.substring(0,50)}..."`);const i=((x=l.text)==null?void 0:x.toLowerCase())||"";i.includes("退货")||i.includes("投诉")||i.includes("不满")||i.includes("cnm")||i.includes("草")||i.includes("妈")?(m="客户",console.log("🔧 智能推断: 根据内容特征判断为客户消息")):m="企业端"}else l.type==="ai_response"?m=l.panel==="problem"?"系统回复给客户":"系统回复给企业端":l.type==="llm_request"&&(m="AI需求转译");return`${c+1}. ${m}: ${l.text}`}).join(`
`)},je=r=>{const t=typeof r=="string"?r:"",n={translation:"",solutionsText:"",confirmationsText:""},o=["【需求转译】","【需求翻译】","【转译结果】","【需求澄清】","需求转译","需求翻译","转译结果","需求澄清","客户需求转译","用户需求转译"],s=["【解决方案建议】","【建议方案】","【行动建议】","解决方案建议","建议的解决方案","方案建议","行动建议"],l=["【待确认信息】","【需确认信息】","【待确认】","待确认信息","需确认信息"],c=me(t,o),m=me(t,s),p=me(t,l),x=i=>{if(i===-1)return t.length;const d=[m.idx,p.idx,t.length].filter(w=>w!==-1&&w>i);return Math.min(...d)};if(c.idx!==-1){const i=c.idx+c.keyword.length,d=x(c.idx);n.translation=t.slice(i,d).trim()}else m.idx!==-1&&(n.translation=t.slice(0,m.idx).trim());if(m.idx!==-1){const i=m.idx+m.keyword.length,d=p.idx!==-1?p.idx:t.length;n.solutionsText=t.slice(i,d).trim()}if(p.idx!==-1){const i=p.idx+p.keyword.length;n.confirmationsText=t.slice(i).trim()}if(!n.translation){const i=m.idx!==-1?m.idx:t.search(/\n?\s*(方案|选项|建议)\s*[1-9]/);if(i!==-1&&i>0)n.translation=t.slice(0,i).trim();else{const d=t.slice(0,500),w=d.split(/\n{2,}/);n.translation=(w[0]||d).trim()}}return n},gt=async(r,t,n,o=[])=>{try{const s={retail:{systemRole:"你是一个专业的AI沟通助手，专门在顾客与企业门店之间提供精准的需求转译和解决方案建议。你的核心职责是：1)准确理解顾客的真实需求和潜在意图 2)将其转化为企业能够理解和执行的专业描述 3)基于企业能力提供具体可行的解决方案选项 4)智能过滤和转化不当表达，确保沟通专业化。",context:`场景边界：零售顾客-门店沟通。你需要同时理解双方可能存在的表达偏差：顾客可能表达不清晰或有隐含需求，企业可能用专业术语回复。

核心任务：
1. 深度理解：分析顾客的显性需求和隐性需求，识别可能的表达偏差
2. 精准转译：将顾客需求转化为包含产品类型、使用场景、预算范围、规格要求等关键信息的专业描述
3. 方案建议：基于转译结果，为企业提供2-3个具体可行的解决方案选项，包含产品推荐、服务建议、价格区间等
4. 语言净化：当遇到不当表达、粗俗语言或情绪化词汇时，需要智能识别其背后的实际意图，转化为专业、中性的表述，绝不直接引用或重复原始不当内容`,example:`例如：顾客说"我需要一件适合商务场合的衣服" → 转译："顾客需要商务正装，用于重要会议，预算待确认，需要专业形象" → 方案建议："1)推荐经典商务西装套装，价格800-1500元，包含免费修改服务 2)推荐商务休闲装，价格500-800元，适合日常商务场合 3)提供个人形象顾问服务，根据具体需求定制搭配方案"

不当语言处理例如：顾客输入不当表达时 → 转译："客户表达了强烈的情绪，可能对产品、服务或体验存在不满。需要了解具体问题所在，以便提供针对性的解决方案" → 方案建议："1)主动询问具体遇到的问题或困难 2)提供客服专员一对一沟通 3)根据问题性质安排相关部门跟进处理"`},enterprise:{systemRole:"你是一个专业的AI沟通助手，专门在企业跨部门之间提供精准的需求转译和解决方案建议。你的核心职责是：1)准确理解业务部门的需求和技术部门的能力边界 2)消除部门间的沟通偏差 3)提供具体可行的技术解决方案选项 4)智能过滤和转化不当表达，确保沟通专业化。",context:`场景边界：企业内部跨部门沟通。你需要理解不同部门的语言差异：业务部门关注效果和时间，技术部门关注可行性和资源。

核心任务：
1. 需求解析：将业务需求转化为技术可理解的功能要求，包含具体指标、时间期限、资源约束
2. 方案设计：基于技术能力提供2-3个不同复杂度的解决方案选项
3. 风险评估：识别实施过程中可能的技术风险和资源需求
4. 语言净化：当遇到不当表达、粗俗语言或情绪化词汇时，需要智能识别其背后的实际意图，转化为专业、中性的表述，绝不直接引用或重复原始不当内容`,example:`例如：市场部说"我们需要提升用户体验" → 转译："需要开发用户体验优化功能，目标提升用户留存率，时间3个月内" → 方案建议："1)快速方案：优化现有界面和交互，预计提升10%留存率，需要2周，成本5万 2)中等方案：重新设计核心流程，预计提升25%留存率，需要6周，成本15万 3)深度方案：全面重构用户体验，预计提升40%留存率，需要3个月，成本40万"

不当语言处理例如：部门表达不当情绪时 → 转译："部门表达了对当前项目进展的强烈关切，可能存在沟通协调或资源配置方面的问题。需要明确具体的问题点和改进方向" → 方案建议："1)安排跨部门协调会议，明确各方职责和时间节点 2)评估当前资源配置是否合理，调整人力或预算分配 3)建立定期沟通机制，及时发现和解决问题"`},education:{systemRole:"你是一个专业的AI教学助手，专门在学生与教师之间提供精准的学习需求转译和教学方案建议。你的核心职责是：1)深度理解学生的学习困难和知识盲点 2)将其转化为教师可操作的教学要点 3)提供多样化的教学解决方案选项 4)智能过滤和转化不当表达，确保沟通专业化。",context:`场景边界：师生互动的学习沟通。你需要理解学习过程中的认知偏差：学生可能无法准确表达困难点，教师可能用过于专业的语言回复。

核心任务：
1. 学习诊断：分析学生的具体困难点、知识背景、学习风格
2. 教学转译：将学习需求转化为包含知识点、难点分析、教学目标的专业描述
3. 方案建议：提供2-3种不同教学方法的具体实施方案
4. 语言净化：当遇到不当表达、粗俗语言或情绪化词汇时，需要智能识别其背后的实际意图，转化为专业、中性的表述，绝不直接引用或重复原始不当内容`,example:`例如：学生说"我不懂这个概念" → 转译："学生对量子物理波粒二象性概念理解困难，需要从基础概念开始，通过实验例子建立认知" → 方案建议："1)实验演示法：通过双缝实验等经典实验，直观展示波粒二象性，适合视觉学习者 2)类比教学法：用水波和弹珠的类比，帮助理解抽象概念，适合逻辑思维强的学生 3)渐进式教学：从光的基本性质开始，逐步引入量子概念，适合基础较弱的学生"

不当语言处理例如：学生表达挫败情绪时 → 转译："学生在学习过程中遇到困难，表现出挫败感和学习压力。需要调整教学方式，提供更多支持和鼓励" → 方案建议："1)降低学习难度，从更基础的知识点开始讲解 2)采用鼓励式教学方法，肯定学生的努力和进步 3)提供个别辅导，针对性解决学习困难"`}};if(!n||!s[n])throw new Error(`无效的场景类型: ${n}。支持的场景: ${Object.keys(s).join(", ")}`);const l=s[n],c=G(o,"聊天历史上下文",6),m={retail:`增强指令（零售场景专用）：
1. 消费心理洞察：深度理解顾客的购买动机、价格敏感度、品质期望和使用场景
2. 产品价值转译：将技术参数转化为实际使用价值，突出产品如何解决顾客的具体问题
3. 购买决策支持：提供清晰的产品对比、性价比分析和购买建议，降低决策成本
4. 服务体验优化：强调售前咨询、售后保障等服务价值，提升购买信心
5. 个性化推荐：基于顾客需求特征，提供精准的产品推荐和搭配建议
6. 促销策略融入：合理融入优惠信息、限时活动等，创造购买紧迫感
7. 零售风格限制：避免过度推销话术，禁止使用"亲"、"哦"等非正式用语，保持专业友好的零售服务语调
8. 零售场景不当语言处理：将顾客的不满情绪转化为具体的产品或服务改进需求，重点关注退换货、质量问题、价格争议等零售常见问题的专业化表达`,enterprise:`增强指令（企业场景专用）：
1. 商业价值导向：将技术方案转化为商业收益、成本节约、效率提升等可量化的价值指标
2. 决策层沟通：使用决策者关心的语言，突出ROI、风险控制、竞争优势等关键要素
3. 实施路径规划：提供清晰的项目时间线、里程碑节点、资源配置和风险预案
4. 跨部门协调：考虑不同部门的利益和关切，提供平衡各方需求的解决方案
5. 合规性保障：确保方案符合行业规范、法律法规和企业内部政策要求
6. 可扩展性设计：考虑企业未来发展需求，提供具有前瞻性的解决方案
7. 企业风格限制：使用正式商务语言，避免口语化表达，保持专业严谨的企业沟通风格
8. 企业场景不当语言处理：将部门间的冲突或不满转化为流程优化、资源配置、沟通机制等管理层面的改进建议，避免人际关系层面的直接表达`,education:`增强指令（教育场景专用）：
1. 学习心理关怀：理解学生的学习压力、认知特点和情感需求，提供温暖支持的表达
2. 知识体系构建：将复杂概念分解为易理解的知识点，建立清晰的学习路径
3. 学习方法指导：根据不同学习风格，提供个性化的学习策略和技巧建议
4. 成长激励导向：强调学习过程中的进步和成就，建立学生的学习信心
5. 家校沟通桥梁：平衡学生需求和家长期望，促进有效的三方沟通
6. 教学资源整合：合理利用教学工具、参考资料和实践机会，丰富学习体验
7. 教育风格限制：使用鼓励性、启发性语言，避免批评或负面表达，保持积极向上的教育语调
8. 教育场景不当语言处理：将学生的挫败感、学习困难转化为具体的学习支持需求，重点关注学习方法调整、心理疏导、个别辅导等教育专业化表达`},p=[{role:"system",content:`${l.systemRole}

${l.instruction}

【重要】输入内容过滤和智能处理规则：
1. 不当言语处理：如果用户输入包含辱骂、粗俗、攻击性词汇，不要重复这些内容，而是：
   - 识别为"用户情绪化表达"或"测试性输入"
   - 理解可能的真实意图（如表达不满、寻求帮助、随意测试等）
   - 以专业、友好的方式回应

2. 无意义输入处理：如果输入是：
   - 随机字母/数字组合（如"cnm"、"123"、"aaa"）
   - 单个词汇没有明确需求含义
   - 明显的测试性输入
   识别为"需要引导的用户"，建议提供真实需求

3. 负面情绪识别：如果输入表达不满或负面情绪，转化为了解问题和提供帮助的机会

请按以下格式输出：

【需求理解】
简明扼要地总结用户的核心需求（不超过30字）
- 对于有效需求：正常总结
- 对于不当输入：说明"用户测试输入"或"用户情绪化表达"
- 对于无意义输入：说明"输入内容不明确，需要引导"

【信息选项】
针对具体需求生成选项，格式：选项名称|询问原因
- 对于有效需求：正常生成3-5个选项
- 对于无效输入：返回"无需收集额外信息"

【需求转译】
转化为专业描述：
- 对于有效需求：正常转译
- 对于不当输入：转译为"顾客可能正在测试系统或表达情绪，建议友好引导其提供具体需求"
- 对于无意义输入：转译为"顾客输入不够明确，建议主动询问可以为其提供什么帮助"`},{role:"user",content:`用户输入："${r}"${t?`
（用户还上传了一张图片）`:""}${c}

请分析这个输入，如果是不当言语或无意义内容，请进行智能处理。`}],x=await I(p,.1),i=be(x),d=je(i),w=[{name:"需求分析与转译",content:d.translation}];d.solutionsText&&w.push({name:"解决方案建议",content:d.solutionsText}),d.confirmationsText&&d.confirmationsText!=="无"&&w.push({name:"待确认信息",content:d.confirmationsText});const N=d.translation;return console.groupCollapsed("[LLM] Parsed -> problem_input"),console.log("structuredOutput:",d),console.log("translatedMessage:",L(N)),console.groupEnd(),{steps:w,translatedMessage:N,structuredOutput:d}}catch(s){throw console.error("处理问题输入时出错:",s),s}},ht=async(r,t,n=[])=>{try{const o={retail:{systemRole:"你是专业的客户沟通专家，负责将企业的专业表述转化为顾客友好、易懂的完整回复。要求be brief，clear，approachable。不要分点写。用完整的句子写。两句话以内，不超过30个字。自然地融入必要的建议。",context:"在零售场景中，企业通常会提供产品信息、价格方案、服务条款等专业内容。你的任务是将这些内容转化为客户容易理解和接受的简洁回复，自然地融入行动建议，帮助客户解决问题或做出决策。",example:`企业回复："该产品采用进口材料，符合国际标准，批发价格为单价80元，起订量100件。"
优化后："这款产品进口材料，品质保障。100件以上80元/件，您确认下数量我来报价。"`},enterprise:{systemRole:"你是一位专业的企业服务AI助手，专门负责将技术方案和商业提案转化为决策者易懂的表达，同时智能过滤和转化不当表达，确保沟通专业化。",context:"在企业服务场景中，技术团队通常会提供复杂的解决方案、技术规格、实施计划等。你需要将这些内容转化为业务决策者能够理解的语言，突出商业价值和实施路径。",example:`企业回复："我们建议采用微服务架构，使用Docker容器化部署，预计开发周期6个月，需要投入3名高级工程师。"
优化后："我们为您设计了一套灵活可扩展的系统架构，可以支持您业务的快速增长。整个项目大约需要6个月完成，我们会安排3位资深工程师专门负责。建议我们先安排一次详细的需求沟通，为您制定具体的实施计划和时间节点。"`},education:{systemRole:"你是一位专业的教育服务AI助手，专门负责将教学方案和课程安排转化为学生和家长易懂的表达，同时智能过滤和转化不当表达，确保沟通专业化。",context:"在教育场景中，教师和教务人员通常会提供课程安排、教学计划、学习要求等专业内容。你需要将这些转化为学生和家长容易理解的语言，突出学习价值和具体安排。",example:`企业回复："该课程采用STEAM教学法，包含理论讲解和实践操作，每周2课时，共计24课时，需要准备实验材料。"
优化后："这门课程会通过动手实践的方式让孩子学习，每周安排2节课，总共12周完成。孩子们会在课堂上进行有趣的实验和项目制作。建议您提前为孩子准备一些基础的实验材料，我们会提供详细的材料清单。"`}};if(!t||!o[t])throw new Error(`无效的场景类型: ${t}。支持的场景: ${Object.keys(o).join(", ")}`);const s=o[t],l=G(n,"聊天历史上下文",6),c={retail:`增强指令（零售方案优化专用）：
1. 购买体验优化：将企业的产品介绍转化为顾客关心的实际价值和使用体验
2. 价格透明化：清晰说明价格构成、优惠条件和性价比优势，消除价格疑虑
3. 决策便利性：提供简单明了的购买流程和决策支持，降低购买门槛
4. 信任建立：强调品质保证、售后服务、退换货政策等信任要素
5. 个性化关怀：根据顾客特点提供个性化的产品建议和使用指导
6. 零售语言风格：使用亲切但专业的语调，避免过于正式或过于随意的表达
7. 零售场景不当语言净化：将企业端的技术术语或不当表达转化为顾客友好的日常用语`,enterprise:`增强指令（企业方案优化专用）：
1. 商业价值突出：将技术方案转化为明确的商业收益和竞争优势表述
2. 决策支持强化：提供清晰的方案对比、风险评估和实施建议
3. 沟通效率提升：使用决策者熟悉的商业语言，避免过度技术化的表达
4. 实施可行性：强调方案的可操作性、时间安排和资源需求
5. 长期价值体现：突出方案对企业长期发展的战略价值
6. 企业语言风格：保持正式专业的商务沟通风格，体现权威性和可信度
7. 企业场景不当语言净化：将技术团队的专业术语或不当表达转化为业务友好的管理语言`,education:`增强指令（教育方案优化专用）：
1. 学习价值传递：将教学安排转化为学生和家长能理解的学习价值和成长收益
2. 学习体验优化：强调教学方法的趣味性、互动性和个性化特点
3. 成长路径清晰：提供明确的学习目标、进度安排和成果预期
4. 家长沟通友好：使用家长容易理解的教育语言，避免过于专业的术语
5. 学生激励导向：强调学习的乐趣和成就感，建立学习信心
6. 教育语言风格：使用温暖鼓励的语调，体现教育的关怀和专业性
7. 教育场景不当语言净化：将教师的专业术语或不当表达转化为学生和家长友好的教育语言`},m=[{role:"system",content:`${s.systemRole}

${s.context}

${s.example}

${c[t]}`},{role:"user",content:`企业方案端回复："${r}"${l}

请按照以下结构输出：

【优化回复】
将企业回复转化为客户友好、易懂的完整表达。如果需要给客户提供行动建议，请直接融入到回复中，使用自然的语言，不要使用"选项1、选项2"这种格式，而是用"您可以..."、"建议您..."、"如果您需要..."这样的自然表达。

【内部备注】
（仅供系统参考，不发送给客户）记录处理要点和注意事项

【补充说明】
如有需要单独说明的重要信息，请列出（如无则写"无"）`}],p=await I(m,.1),x=be(p),i=x.match(/【优化回复】\s*([\s\S]*?)(?=【内部备注】|【补充说明】|$)/),d=x.match(/【内部备注】\s*([\s\S]*?)(?=【补充说明】|$)/),w=x.match(/【补充说明】\s*([\s\S]*?)$/),N=i?i[1].trim():x,j=d?d[1].trim():"",S=w?w[1].trim():"",_=[{name:"语言优化",content:N}];j&&j!=="无"&&_.push({name:"内部备注",content:j}),S&&S!=="无"&&_.push({name:"补充说明",content:S});let k=N;return S&&S!=="无"&&(k+=`

`+S),console.groupCollapsed("[LLM] Parsed -> solution_response"),console.log("structuredOutput:",{optimizedReply:N,internalNotes:j,additionalInfo:S}),console.log("optimizedMessage:",L(k)),console.groupEnd(),{steps:_,optimizedMessage:k,structuredOutput:{optimizedReply:N,internalNotes:j,additionalInfo:S}}}catch(o){throw console.error("处理方案响应时出错:",o),o}},bt=async(r,t,n=[])=>{try{const o={retail:{systemRole:"你是一位专业的零售顾问，专门为企业门店提供销售建议和解决方案，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于客户的需求和企业的情况，提供专业的销售建议，包括产品推荐、价格策略、服务方案等。",example:`客户需求："需要商务西装，预算800-1500元"
建议："建议推荐三款产品：1)经典款A123，售价1280元，意大利面料，免费修改；2)现代款B456，售价1150元，舒适透气；3)高端款C789，售价1350元，时尚剪裁。重点推荐A123，性价比最高，适合商务场合。"`},enterprise:{systemRole:"你是一位专业的企业技术顾问，专门为技术团队提供解决方案建议，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于业务需求和技术现状，提供技术方案建议，包括架构设计、技术选型、实施计划等。",example:`业务需求："提升用户体验，3个月内完成"
建议："建议采用渐进式优化方案：第一阶段(1个月)优化现有界面，第二阶段(1.5个月)重构核心流程，第三阶段(0.5个月)性能优化。预计投入3名开发人员，总成本30万元。"`},education:{systemRole:"你是一位专业的教育顾问，专门为教师提供教学方案建议，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于学生的学习需求和教学现状，提供教学建议，包括教学方法、课程安排、学习指导等。",example:`学生需求："理解量子物理波粒二象性"
建议："建议采用三步教学法：1)通过双缝实验视频建立直观认知；2)用光电效应实验理解粒子性；3)通过计算题巩固理解。预计需要4课时，建议准备实验材料。"`}};if(!t||!o[t])throw new Error(`无效的场景类型: ${t}`);const s=o[t],l=G(n,"对话历史",4),c={retail:`生成建议的指导原则（零售企业专用）：
1. 销售策略优化：基于顾客需求特征，提供精准的产品推荐和销售策略
2. 库存与供应链：考虑商品库存、季节性因素和供应链效率
3. 客户关系管理：提供客户维护、复购促进和口碑营销的具体建议
4. 价格策略制定：平衡利润空间和市场竞争力，提供灵活的定价建议
5. 服务体验提升：优化售前咨询、售中服务和售后保障的全流程体验
6. 零售运营实用性：确保建议符合零售行业特点，易于门店执行
7. 零售场景不当语言处理：将顾客的不满转化为服务改进和产品优化的具体行动方案`,enterprise:`生成建议的指导原则（企业服务专用）：
1. 商业价值量化：提供可衡量的ROI、成本节约和效率提升指标
2. 技术可行性评估：平衡技术先进性和实施可行性，提供风险控制建议
3. 组织变革管理：考虑人员培训、流程调整和文化适应的变革建议
4. 合规与安全保障：确保建议符合行业规范和企业安全政策要求
5. 分阶段实施规划：提供渐进式实施方案，降低业务中断风险
6. 企业决策支持：使用决策层关心的商业语言，突出战略价值
7. 企业场景不当语言处理：将部门冲突转化为流程优化和协作机制改进建议`,education:`生成建议的指导原则（教育服务专用）：
1. 学习效果导向：基于学习目标和学生特点，提供个性化的教学建议
2. 教学资源配置：合理利用师资、教材和教学设备，优化资源配置
3. 学习进度管理：提供差异化的学习进度安排和能力提升路径
4. 家校协作促进：建立有效的家校沟通机制，形成教育合力
5. 学习兴趣培养：注重学习动机激发和兴趣维持的方法建议
6. 教育专业性保障：确保建议符合教育规律和学生身心发展特点
7. 教育场景不当语言处理：将学习困难转化为教学方法调整和学习支持优化建议`},m=[{role:"system",content:`${s.systemRole}

${s.context}

${s.example}

重要要求：
1) 输出简洁建议，直达要点；
2) 避免分点、编号、过多铺垫；
3) 保持可执行与落地性；
4) 语句完整通顺。`},{role:"user",content:`当前对话内容："${r}"${l}

请给出简洁的建议，突出可执行要点。`}];let p=await I(m,.3),x=q(p);if(x=Q(x),fe(x)){const w=[{role:"system",content:`${s.systemRole}

${s.context}

${s.example}

重要要求：
1) 仅输出简洁的核心建议，禁止寒暄、问候与客套；
2) 不分点；
3) 语句完整通顺。`},{role:"user",content:`当前对话内容："${r}"${l}

请直接给出简洁的核心建议，禁止寒暄与铺垫。`}];p=await I(w,.1),x=Q(q(p))}ye(x)&&(x=we(x,{mode:"suggestion",scenario:t}));const i=xt(x.trim()),d=[{name:"建议内容",content:i}];return console.groupCollapsed("[LLM] Parsed -> generate_suggestion"),console.log("suggestionMessage:",L(i)),console.groupEnd(),{steps:d,suggestionMessage:i,structuredOutput:{suggestion:i}}}catch(o){throw console.error("生成企业建议时出错:",o),o}},ft=async(r,t,n=[])=>{try{const o={retail:{systemRole:"你是一位专业的零售销售专家，专门帮助企业了解客户需求的关键信息，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于当前对话，识别需要进一步了解的关键信息，生成有针对性的追问。",example:`客户说："需要商务西装"
追问："请问您的具体使用场合是什么？预算范围大概是多少？您的身高体重是多少？对颜色和款式有什么偏好吗？"`},enterprise:{systemRole:"你是一位专业的企业需求分析师，专门帮助技术团队深入了解业务需求，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于当前对话，识别技术实现需要的关键信息，生成有针对性的追问。",example:`业务方说："需要提升用户体验"
追问："具体希望提升哪些方面的体验？目标用户群体是谁？当前的痛点是什么？有具体的时间要求吗？预算范围是多少？"`},education:{systemRole:"你是一位专业的教育需求分析师，专门帮助教师了解学生的学习情况，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于当前对话，识别教学需要的关键信息，生成有针对性的追问。",example:`学生说："不懂这个概念"
追问："您之前学过相关的基础知识吗？您更倾向于哪种学习方式？您希望达到什么样的理解程度？有什么具体的学习目标吗？"`}};if(!t||!o[t])throw new Error(`无效的场景类型: ${t}`);const s=o[t],l=G(n,"对话历史",4),c={retail:`追问生成的指导原则（零售企业专用）：
1. 销售机会挖掘：识别顾客潜在需求，生成促进成交的关键追问
2. 产品匹配精准度：通过追问了解顾客具体使用场景和偏好
3. 价格敏感度探测：巧妙了解顾客预算范围和价值认知
4. 竞品对比分析：了解顾客对竞争产品的认知和比较标准
5. 购买决策流程：识别影响购买决策的关键因素和决策人
6. 零售场景适应性：确保追问方式符合零售环境的沟通特点
7. 零售场景不当语言处理：将顾客的抱怨转化为了解真实需求的追问机会`,enterprise:`追问生成的指导原则（企业服务专用）：
1. 业务需求深度挖掘：通过追问了解企业真实的业务痛点和目标
2. 决策链条识别：了解企业内部决策流程和关键决策人
3. 预算与时间约束：探明项目预算范围和实施时间要求
4. 技术环境评估：了解企业现有技术架构和集成要求
5. 风险承受能力：评估企业对新技术和变革的接受程度
6. 企业级专业性：使用企业决策者熟悉的商业语言进行追问
7. 企业场景不当语言处理：将内部分歧转化为了解各部门需求的追问策略`,education:`追问生成的指导原则（教育服务专用）：
1. 学习目标明确化：通过追问了解具体的学习目标和期望成果
2. 学习能力评估：了解学生当前水平、学习习惯和能力特点
3. 学习环境分析：探明家庭学习环境和学校教学条件
4. 学习动机激发：了解学生兴趣点和学习动力来源
5. 家长期望管理：平衡家长期望和学生实际能力的差异
6. 教育专业性保障：确保追问符合教育规律和学生心理特点
7. 教育场景不当语言处理：将学习挫折转化为了解学习障碍的追问机会`},m=[{role:"system",content:`${s.systemRole}

${s.context}

${s.example}

重要要求：
1) 生成简洁自然的询问；
2) 直接询问最关键的信息；
3) 语句具体明确、完整通顺。`},{role:"user",content:`当前对话内容："${r}"${l}

请生成简洁明确的询问，深入了解关键信息。`}];let p=await I(m,.3),x=q(p);if(x=Q(x),fe(x)){const w=[{role:"system",content:`${s.systemRole}

${s.context}

${s.example}

重要要求：
1) 仅输出简洁的自然语句，禁止寒暄；
2) 语句完整通顺。`},{role:"user",content:`当前对话内容："${r}"${l}

请直接给出简洁的自然语句，禁止寒暄与铺垫。`}];p=await I(w,.1),x=Q(q(p))}ye(x)&&(x=we(x,{mode:"followup",scenario:t}));const i=Oe(x.trim()),d=[{name:"追问内容",content:i}];return console.groupCollapsed("[LLM] Parsed -> generate_followup"),console.log("followUpMessage:",L(i)),console.groupEnd(),{steps:d,followUpMessage:i,structuredOutput:{followUp:i}}}catch(o){throw console.error("生成企业追问时出错:",o),o}},yt=async(r,t,n,o=[])=>{try{const l={retail:{systemRole:"你是专业的零售需求分析专家，能够针对任何产品精准识别具体的关键信息点。",instruction:`分析用户需求时，要生成具体的、可操作的信息选项，而不是抽象概念。

例如：
- 用户说"我要买件衣服" → 生成：尺码、颜色、价位、场合、材质
- 用户说"我要买个手机" → 生成：预算、品牌、功能需求、存储容量、颜色
- 用户说"我要装修" → 生成：面积、风格、预算、时间、房间类型

要求：
1. 每个选项名称2-4个字，简洁明了
2. 必须是具体的、可直接询问的信息点
3. 与该产品/服务直接相关，不要抽象概念
4. 按重要性排序，最重要的放前面`},enterprise:{systemRole:"你是专业的企业需求分析专家，能够针对任何业务需求精准识别具体的关键信息点。",instruction:`分析业务需求时，要生成具体的、可操作的信息选项，而不是抽象概念。

例如：
- 用户说"我要开发系统" → 生成：预算规模、开发周期、用户数量、核心功能、技术栈
- 用户说"我要做营销" → 生成：目标客群、推广渠道、活动预算、效果期望、时间安排
- 用户说"我要培训员工" → 生成：培训人数、培训内容、时间安排、培训方式、预算范围

要求：
1. 每个选项名称2-4个字，简洁明了
2. 必须是具体的、可直接询问的信息点
3. 与该业务需求直接相关，不要抽象概念
4. 按重要性排序，最重要的放前面`},education:{systemRole:"你是专业的教育需求分析专家，能够针对任何学习需求精准识别具体的关键信息点。",instruction:`分析学习需求时，要生成具体的、可操作的信息选项，而不是抽象概念。

例如：
- 用户说"我要学英语" → 生成：当前水平、学习目标、时间安排、学习方式、预算考虑
- 用户说"孩子要补数学" → 生成：年级阶段、薄弱环节、上课时间、期望效果、费用预算
- 用户说"我要考证" → 生成：考试时间、基础情况、学习时间、培训方式、通过目标

要求：
1. 每个选项名称2-4个字，简洁明了
2. 必须是具体的、可直接询问的信息点
3. 与该学习需求直接相关，不要抽象概念
4. 按重要性排序，最重要的放前面`}}[n];if(!l)throw new Error(`不支持的场景类型: ${n}`);const c=G(o,"聊天历史上下文",6),m=[{role:"system",content:`${l.systemRole}

${l.instruction}

【重要】输入内容过滤和智能处理规则：
1. 不当言语处理：如果用户输入包含辱骂、粗俗、攻击性词汇，不要重复这些内容，而是：
   - 识别为"用户情绪化表达"或"测试性输入"
   - 理解可能的真实意图（如表达不满、寻求帮助、随意测试等）
   - 以专业、友好的方式回应

2. 无意义输入处理：如果输入是：
   - 随机字母/数字组合（如"cnm"、"123"、"aaa"）
   - 单个词汇没有明确需求含义
   - 明显的测试性输入
   识别为"需要引导的用户"，建议提供真实需求

3. 负面情绪识别：如果输入表达不满或负面情绪，转化为了解问题和提供帮助的机会

请按以下格式输出：

【需求理解】
简明扼要地总结用户的核心需求（不超过30字）
- 对于有效需求：正常总结
- 对于不当输入：说明"用户测试输入"或"用户情绪化表达"
- 对于无意义输入：说明"输入内容不明确，需要引导"

【信息选项】
针对具体需求生成选项，格式：选项名称|询问原因
- 对于有效需求：正常生成3-5个选项
- 对于无效输入：返回"无需收集额外信息"

【需求转译】
转化为专业描述：
- 对于有效需求：正常转译
- 对于不当输入：转译为"顾客可能正在测试系统或表达情绪，建议友好引导其提供具体需求"
- 对于无意义输入：转译为"顾客输入不够明确，建议主动询问可以为其提供什么帮助"`},{role:"user",content:`用户输入："${r}"${t?`
（用户还上传了一张图片）`:""}${c}

请分析这个输入，如果是不当言语或无意义内容，请进行智能处理。`}],p=await I(m,.1),x=be(p),i=x.match(/【需求理解】\s*\n([\s\S]*?)(?=\n【|$)/),d=x.match(/【信息选项】\s*\n([\s\S]*?)(?=\n【|$)/),w=x.match(/【需求转译】\s*\n([\s\S]*?)(?=\n【|$)/),N=i?i[1].trim():"需求分析",j=d?d[1].trim():"",S=w?w[1].trim():r,_=[];if(j){const k=j.split(`
`).filter($=>$.trim());for(const $ of k){const D=$.match(/^[•\-\*]?\s*([^|]{2,8})\|(.+)$/);D&&_.push({name:D[1].trim(),description:D[2].trim(),selected:!1})}}return console.log("[LLM] 智能需求分析结果:",{needsUnderstanding:N,missingInfoOptions:_,translation:S}),{needsUnderstanding:N,missingInfoOptions:_,translation:S,structuredOutput:{needsUnderstanding:N,missingInfoOptions:_,translation:S}}}catch(s){throw console.error("智能需求分析错误:",s),s}},wt=async(r,t,n=[])=>{try{console.log(`
=== 开始协商建议处理 ===`),console.log("原始建议:",r.originalSuggestion),console.log("协商请求:",r.negotiationRequest),console.log("场景:",t);const o=G(n,"协商上下文",4),s=`你是一个专业的${t}顾问，正在根据客户的协商请求优化之前的建议。

请根据客户的协商要求，对原始建议进行修改和优化。

输出要求：
1. 必须包含【处理步骤】部分，详细说明协商处理过程
2. 必须包含【优化建议】部分，提供修改后的完整建议
3. 建议要具体、可操作、符合客户的协商要求
4. 保持专业性和实用性，语句简洁。`,l=`原始建议：
${r.originalSuggestion}

客户协商请求：
${r.negotiationRequest}

请根据客户的协商要求，优化上述建议。${o}`,c=[{role:"system",content:s},{role:"user",content:l}];console.log("发送协商请求到LLM...");const m=await I(c,.7);console.log("LLM协商响应:",L(m));const p=q(m),x=je(p),i=x.处理步骤||["正在分析协商请求...","优化原始建议...","生成协商后建议..."],d=x.优化建议||p;return console.log("协商处理完成"),console.log("处理步骤:",i),console.log("优化建议:",L(d)),{steps:i,suggestionMessage:d}}catch(o){throw console.error("协商建议处理错误:",o),o}},jt=async(r,t,n,o=[])=>{try{const s={retail:{systemRole:"你是一位专业的零售销售专家，专门帮助企业了解客户需求的关键信息，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于客户的原始需求和企业智能分析识别出的关键信息点，生成有针对性的追问。",example:`客户说："需要商务西装"，企业关注：尺码、颜色、预算
追问："为了给您推荐最合适的商务西装，请告知您的尺码、偏好的颜色和大概的预算范围？"`},enterprise:{systemRole:"你是一位专业的企业需求分析师，专门帮助技术团队深入了解业务需求，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于业务需求和企业智能分析识别出的关键信息点，生成有针对性的追问。",example:`业务方说："需要提升用户体验"，企业关注：目标用户、具体功能、时间要求
追问："为了制定最适合的方案，请明确目标用户群体、希望提升的具体功能和预期完成时间？"`},education:{systemRole:"你是一位专业的教育需求分析师，专门帮助教师了解学生的学习情况，同时智能过滤和转化不当表达，确保沟通专业化。",context:"基于学习需求和企业智能分析识别出的关键信息点，生成有针对性的追问。",example:`学生说："不懂数学概念"，企业关注：年级、具体章节、学习方式
追问："为了制定个性化的辅导计划，请告知您的年级、具体不懂的章节和您更喜欢的学习方式？"`}};if(!n||!s[n])throw new Error(`无效的场景类型: ${n}`);const l=s[n],c=G(o,"聊天历史上下文",6),m={retail:`追问生成的指导原则（零售企业专用）：
1. 销售机会挖掘：识别顾客潜在需求，生成促进成交的关键追问
2. 产品匹配精准度：通过追问了解顾客具体使用场景和偏好
3. 价格敏感度探测：巧妙了解顾客预算范围和价值认知
4. 竞品对比分析：了解顾客对竞争产品的认知和比较标准
5. 购买决策流程：识别影响购买决策的关键因素和决策人
6. 零售场景适应性：确保追问方式符合零售环境的沟通特点
7. 智能信息整合：将AI分析识别的关键信息点自然融入追问中`,enterprise:`追问生成的指导原则（企业服务专用）：
1. 业务需求深度挖掘：通过追问了解企业真实的业务痛点和目标
2. 决策链条识别：了解企业内部决策流程和关键决策人
3. 预算与时间约束：探明项目预算范围和实施时间要求
4. 技术环境评估：了解企业现有技术架构和集成要求
5. 风险承受能力：评估企业对新技术和变革的接受程度
6. 企业级专业性：使用企业决策者熟悉的商业语言进行追问
7. 智能信息整合：将AI分析识别的关键信息点自然融入追问中`,education:`追问生成的指导原则（教育服务专用）：
1. 学习目标明确化：通过追问了解具体的学习目标和期望成果
2. 学习能力评估：了解学生当前水平、学习习惯和能力特点
3. 学习环境分析：探明家庭学习环境和学校教学条件
4. 学习动机激发：了解学生兴趣点和学习动力来源
5. 家长期望管理：平衡家长期望和学生实际能力的差异
6. 教育专业性保障：确保追问符合教育规律和学生心理特点
7. 智能信息整合：将AI分析识别的关键信息点自然融入追问中`},p=t.map(N=>`${N.name}：${N.description}`).join(`
`),x=[{role:"system",content:`${l.systemRole}

${l.context}

${l.example}

${m[n]}

重要要求：
1) 生成简洁自然的询问语句；
2) 将所有选中的信息点自然融合成一个语句；
3) 确保内容具体明确且语句完整。`},{role:"user",content:`原始需求："${r}"

企业选中的信息点：
${p}

${c}

请基于以上选中的信息点生成简洁明确的询问语句，自然融合所有信息点。`}];let i=await I(x,.3),d=q(i);if(d=Q(d),fe(d)){const N=[{role:"system",content:`${l.systemRole}

${l.context}

${l.example}

重要要求：
1) 仅输出简洁的自然语句，禁止寒暄、问候与客套；
2) 必须包含所有选中的信息点；
3) 语句完整通顺。`},{role:"user",content:`原始需求："${r}"

选中的信息点：
${p}

请直接给出简洁的融合所有信息点的询问语句，禁止寒暄与铺垫。${c}`}];i=await I(N,.1),d=Q(q(i))}ye(d)&&(d=we(d,{mode:"followup",scenario:n}));const w=Oe(d.trim());return console.groupCollapsed("[LLM] Parsed -> generate_questions_by_selected_info"),console.log("followUpMessage:",L(w)),console.groupEnd(),w}catch(s){throw console.error("生成追问错误:",s),s}},kt=async(r,t,n=[])=>{try{console.log(`
=== 开始协商追问处理 ===`),console.log("原始追问:",r.originalFollowUp),console.log("协商请求:",r.negotiationRequest),console.log("场景:",t);const o=G(n,"协商上下文",4),s=`你是一个专业的${t}顾问，正在根据客户的协商请求优化之前的追问。

请根据客户的协商要求，对原始追问进行修改和优化。

输出要求：
1. 必须包含【处理步骤】部分，详细说明协商处理过程
2. 必须包含【优化追问】部分，提供修改后的完整追问
3. 追问要具体、可操作、符合客户的协商要求
4. 保持专业性和实用性，语句简洁。`,l=`原始追问：
${r.originalFollowUp}

客户协商请求：
${r.negotiationRequest}

请根据客户的协商要求，优化上述追问。${o}`,c=[{role:"system",content:s},{role:"user",content:l}];console.log("发送协商追问请求到LLM...");const m=await I(c,.7);console.log("LLM协商追问响应:",L(m));const p=q(m),x=je(p),i=x.处理步骤||["正在分析协商请求...","优化原始追问...","生成协商后追问..."],d=x.优化追问||p;return console.log("协商追问处理完成"),console.log("处理步骤:",i),console.log("优化追问:",L(d)),{steps:i,followUpMessage:d}}catch(o){throw console.error("协商追问处理错误:",o),o}},z=async({type:r,content:t,image:n,context:o,scenario:s,chatHistory:l=[]})=>{try{if(r==="problem_input")return await gt(t,n,s,l);if(r==="analyze_needs_with_missing_info")return await yt(t,n,s,l);if(r==="generate_questions_by_selected_info"){const{originalContent:c,selectedInfoItems:m}=t;return await jt(c,m,s,l)}else{if(r==="solution_response")return await ht(t,s,l);if(r==="generate_suggestion")return await bt(t,s,l);if(r==="generate_followup")return await ft(t,s,l);if(r==="negotiate_suggestion")return await wt(t,s,l);if(r==="negotiate_followup")return await kt(t,s,l)}throw new Error("未知的处理类型")}catch(c){throw console.error("LLM处理错误:",c),c}},Nt=r=>{const[t,n]=h.useState({problem:[],llm:[],solution:[]}),[o,s]=h.useState(!1),[l,c]=h.useState(!1),[m,p]=h.useState(!1),[x,i]=h.useState(null),[d,w]=h.useState([]),[N,j]=h.useState(!1),[S,_]=h.useState(null),k=h.useCallback((f,b)=>{n(u=>({...u,[f]:[...u[f],b]}))},[]);h.useCallback(()=>{n({problem:[],llm:[],solution:[]}),p(!1),i(null)},[]);const $=h.useCallback(async f=>{const b={type:"user",text:f.text,image:f.image,timestamp:f.timestamp};k("problem",b),s(!0);try{const u=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"problem"})),...t.solution.filter(a=>a.type==="llm_request"||a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"solution"})),b].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)),y=await z({type:"analyze_needs_with_missing_info",content:f.text,image:f.image,context:"problem_to_solution",scenario:r,chatHistory:u});_({originalContent:f.text,image:f.image,chatHistory:u}),w(y.missingInfoOptions||[]);const C={type:"processing",title:"智能需求分析",steps:[{name:"需求理解",content:y.needsUnderstanding},{name:"需求转译",content:y.translation},{name:"缺失信息分析",content:y.missingInfoOptions&&y.missingInfoOptions.length>0?`识别到 ${y.missingInfoOptions.length} 个可了解的信息点，等待企业方选择`:"需求信息较为完整，无需额外了解信息"}],output:y.translation,timestamp:new Date().toISOString()};k("llm",C);const M={type:"llm_request",text:y.translation,timestamp:new Date().toISOString(),needsAnalysis:y.needsUnderstanding,missingInfoOptions:y.missingInfoOptions||[]};k("solution",M),y.missingInfoOptions&&y.missingInfoOptions.length>0&&j(!0)}catch(u){console.error("LLM处理错误:",u);const y={type:"processing",title:"处理出错",steps:[{name:"错误信息",content:"抱歉，处理过程中出现了错误，请稍后重试。"}],timestamp:new Date().toISOString()};k("llm",y)}finally{s(!1)}},[k,r,t.problem,t.solution]),D=h.useCallback(async f=>{const b={type:"user",text:f.text,timestamp:f.timestamp};k("solution",b),N&&(j(!1),w([]),_(null)),s(!0);try{const u=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"problem"})),...t.solution.filter(a=>a.type==="llm_request"||a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"solution"})),b].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)),y=await z({type:"solution_response",content:f.text,context:"solution_to_problem",scenario:r,chatHistory:u}),C={type:"processing",title:"处理方案端响应",steps:y.steps,output:y.optimizedMessage,timestamp:new Date().toISOString()};k("llm",C);const M={type:"ai_response",text:y.optimizedMessage,timestamp:new Date().toISOString()};k("problem",M)}catch(u){console.error("LLM处理错误:",u);const y={type:"processing",title:"处理出错",steps:[{name:"错误信息",content:"抱歉，处理过程中出现了错误，请稍后重试。"}],timestamp:new Date().toISOString()};k("llm",y)}finally{s(!1)}},[k,r,t.problem,t.solution]),B=h.useCallback(async()=>{if(!l){c(!0);try{const b=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").slice(-2),...t.solution.filter(a=>a.type==="user"||a.type==="ai_response").slice(-2)].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)).map(a=>a.text).join(`
`),u=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"problem"})),...t.solution.filter(a=>a.type==="llm_request"||a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"solution"}))].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)),y=await z({type:"generate_suggestion",content:b,scenario:r,chatHistory:u}),C={type:"processing",title:"生成企业端建议",steps:y.steps,output:y.suggestionMessage,timestamp:new Date().toISOString()};k("llm",C);const M={type:"suggestion",text:y.suggestionMessage,timestamp:new Date().toISOString(),id:`suggestion_${Date.now()}`,feedbackGiven:!1};k("solution",M),p(!0),i(y.suggestionMessage)}catch(f){console.error("生成建议错误:",f);const b={type:"processing",title:"生成建议出错",steps:[{name:"错误信息",content:"抱歉，生成建议时出现了错误，请稍后重试。"}],timestamp:new Date().toISOString()};k("llm",b)}finally{c(!1)}}},[k,r,t.problem,t.solution,l]),A=h.useCallback(async()=>{if(!l){c(!0);try{const b=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").slice(-2),...t.solution.filter(a=>a.type==="user"||a.type==="ai_response").slice(-2)].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)).map(a=>a.text).join(`
`),u=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"problem"})),...t.solution.filter(a=>a.type==="llm_request"||a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"solution"}))].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)),y=await z({type:"generate_followup",content:b,scenario:r,chatHistory:u}),C={type:"processing",title:"生成企业端追问",steps:y.steps,output:y.followUpMessage,timestamp:new Date().toISOString()};k("llm",C);const M={type:"followup",text:y.followUpMessage,timestamp:new Date().toISOString(),id:`followup_${Date.now()}`,feedbackGiven:!1};k("solution",M),p(!0),i(y.followUpMessage)}catch(f){console.error("生成追问错误:",f);const b={type:"processing",title:"生成追问出错",steps:[{name:"错误信息",content:"抱歉，生成追问时出现了错误，请稍后重试。"}],timestamp:new Date().toISOString()};k("llm",b)}finally{c(!1)}}},[k,r,t.problem,t.solution,l]),K=h.useCallback(async f=>{if(o)return;const b={type:"user",text:f,timestamp:new Date().toISOString()};k("solution",b),s(!0);try{const u=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"problem"})),...t.solution.filter(a=>a.type==="llm_request"||a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"solution"})),b].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)),y=await z({type:"solution_response",content:f,context:"solution_to_problem",scenario:r,chatHistory:u}),C={type:"processing",title:"处理最终响应",steps:y.steps,output:y.optimizedMessage,timestamp:new Date().toISOString()};k("llm",C);const M={type:"ai_response",text:y.optimizedMessage,timestamp:new Date().toISOString()};k("problem",M),p(!1),i(null)}catch(u){console.error("确认发送错误:",u);const y={type:"processing",title:"处理最终响应出错",steps:[{name:"错误信息",content:"抱歉，处理最终响应时出现了错误，请稍后重试。"}],timestamp:new Date().toISOString()};k("llm",y)}finally{s(!1)}},[k,r,t.problem,t.solution,o]),Y=h.useCallback(()=>{p(!1),i(null)},[]),ee=h.useCallback(f=>{w(b=>b.map((u,y)=>y===f?{...u,selected:!u.selected}:u))},[]),te=h.useCallback(async()=>{if(!S||l)return;const f=d.filter(b=>b.selected);if(f.length!==0){c(!0);try{const b=await z({type:"generate_questions_by_selected_info",content:{originalContent:S.originalContent,selectedInfoItems:f},scenario:r,chatHistory:S.chatHistory}),u={type:"processing",title:"生成智能追问",steps:[{name:"选中信息",content:f.map(y=>`${y.name}：${y.description}`).join(`
`)},{name:"生成追问",content:b}],output:b,timestamp:new Date().toISOString()};k("llm",u),p(!0),i(b),j(!1)}catch(b){console.error("生成追问错误:",b);const u={type:"processing",title:"生成追问出错",steps:[{name:"错误信息",content:"抱歉，生成追问时出现了错误，请稍后重试。"}],timestamp:new Date().toISOString()};k("llm",u)}finally{c(!1)}}},[S,d,r,l,k]),P=h.useCallback(()=>{j(!1),w([]),_(null)},[]),F=h.useCallback(f=>{n(b=>({...b,solution:b.solution.map(u=>u.id===f?{...u,feedbackGiven:!0,accepted:!0}:u)}))},[]),Z=h.useCallback(f=>{n(b=>({...b,solution:b.solution.map(u=>u.id===f?{...u,negotiating:!0}:u)}))},[]),O=h.useCallback(f=>{n(b=>({...b,solution:b.solution.map(u=>u.id===f?{...u,negotiating:!1}:u)}))},[]),V=h.useCallback(async(f,b)=>{if(b.trim())try{const u=t.solution.find(a=>a.id===f);if(!u)return;const y=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"problem"})),...t.solution.filter(a=>a.type==="llm_request"||a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"solution"}))].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)),C=await z({type:"negotiate_suggestion",content:{originalSuggestion:u.text,negotiationRequest:b},scenario:r,chatHistory:y}),M={type:"processing",title:"协商修改建议",steps:C.steps,output:C.suggestionMessage,timestamp:new Date().toISOString()};k("llm",M),n(a=>({...a,solution:a.solution.map(v=>v.id===f?{...v,text:C.suggestionMessage,negotiating:!1,negotiated:!0,originalText:u.text,negotiationRequest:b}:v)}))}catch(u){console.error("协商建议错误:",u),O(f)}},[t.problem,t.solution,r,k,O]),J=h.useCallback(async f=>{n(b=>({...b,solution:b.solution.map(u=>u.id===f?{...u,feedbackGiven:!0,accepted:!1}:u)})),await B()},[B]),se=h.useCallback(f=>{n(b=>({...b,solution:b.solution.map(u=>u.id===f?{...u,feedbackGiven:!0,accepted:!0}:u)}))},[]),re=h.useCallback(f=>{n(b=>({...b,solution:b.solution.map(u=>u.id===f?{...u,negotiating:!0}:u)}))},[]),H=h.useCallback(f=>{n(b=>({...b,solution:b.solution.map(u=>u.id===f?{...u,negotiating:!1}:u)}))},[]),g=h.useCallback(async(f,b)=>{if(b.trim())try{const u=t.solution.find(a=>a.id===f);if(!u)return;const y=[...t.problem.filter(a=>a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"problem"})),...t.solution.filter(a=>a.type==="llm_request"||a.type==="user"||a.type==="ai_response").map(a=>({...a,panel:"solution"}))].sort((a,v)=>new Date(a.timestamp)-new Date(v.timestamp)),C=await z({type:"negotiate_followup",content:{originalFollowUp:u.text,negotiationRequest:b},scenario:r,chatHistory:y}),M={type:"processing",title:"协商修改追问",steps:C.steps,output:C.followUpMessage,timestamp:new Date().toISOString()};k("llm",M),n(a=>({...a,solution:a.solution.map(v=>v.id===f?{...v,text:C.followUpMessage,negotiating:!1,negotiated:!0,originalText:u.text,negotiationRequest:b}:v)}))}catch(u){console.error("协商追问错误:",u),H(f)}},[t.problem,t.solution,r,k,H]),T=h.useCallback(async f=>{n(b=>({...b,solution:b.solution.map(u=>u.id===f?{...u,feedbackGiven:!0,accepted:!1}:u)})),await A()},[A]),U=h.useCallback(()=>{n({problem:[],llm:[],solution:[]}),p(!1),i(null),w([]),j(!1),_(null)},[]);return{messages:t,llmProcessing:o,iterationProcessing:l,iterationMode:m,pendingResponse:x,missingInfoOptions:d,showMissingInfoPanel:N,currentNeedsAnalysis:S,toggleMissingInfoOption:ee,generateFollowUpBySelectedInfo:te,skipInfoCollection:P,acceptSuggestion:F,negotiateSuggestion:Z,cancelNegotiation:O,sendNegotiationRequest:V,rejectSuggestion:J,acceptFollowUp:se,negotiateFollowUp:re,cancelFollowUpNegotiation:H,sendFollowUpNegotiationRequest:g,rejectFollowUp:T,sendProblemMessage:$,sendSolutionMessage:D,generateSuggestion:B,generateFollowUp:A,confirmSendResponse:K,cancelIteration:Y,clearMessages:U}};class vt{constructor(){this.listeners={},this.connected=!1,this.reconnectAttempts=0,this.maxReconnectAttempts=5,this.reconnectDelay=2e3,this.connectionId=null,this.EVENT_TYPES={MESSAGE_RECEIVED:"message_received",MESSAGE_SENT:"message_sent",CONNECTION_STATE_CHANGED:"connection_state_changed",PROCESSING_STARTED:"processing_started",PROCESSING_COMPLETED:"processing_completed",PROCESSING_STEP_UPDATED:"processing_step_updated",ERROR:"error"}}connect(){return this.connected?Promise.resolve(this.connectionId):new Promise((t,n)=>{setTimeout(()=>{this.connected=!0,this.connectionId=`conn_${Date.now()}`,this.reconnectAttempts=0,this._triggerEvent(this.EVENT_TYPES.CONNECTION_STATE_CHANGED,{connected:!0,connectionId:this.connectionId}),console.log(`[RealtimeService] Connected with ID: ${this.connectionId}`),t(this.connectionId),this._setupHeartbeat()},500)})}disconnect(){return this.connected?new Promise(t=>{setTimeout(()=>{this.connected=!1,this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=null),this._triggerEvent(this.EVENT_TYPES.CONNECTION_STATE_CHANGED,{connected:!1,connectionId:this.connectionId}),console.log("[RealtimeService] Disconnected"),this.connectionId=null,t()},300)}):Promise.resolve()}sendMessage(t,n){return this.connected?new Promise((o,s)=>{setTimeout(()=>{const l={...t,id:t.id||`msg_${Date.now()}`,timestamp:t.timestamp||new Date().toISOString(),targetPanel:n};this._triggerEvent(this.EVENT_TYPES.MESSAGE_SENT,l),console.log("[RealtimeService] Message sent:",l),o(l),this._simulateServerReceipt(l)},Math.random()*300+100)}):Promise.reject(new Error("Not connected to server"))}startProcessing(t,n){return this.connected?new Promise(o=>{setTimeout(()=>{const s={messageId:t,startTime:new Date().toISOString(),steps:n||[],currentStep:0};this._triggerEvent(this.EVENT_TYPES.PROCESSING_STARTED,s),console.log(`[RealtimeService] Processing started for message: ${t}`),o(s),n&&n.length>0&&this._simulateProcessingSteps(t,n)},200)}):Promise.reject(new Error("Not connected to server"))}subscribe(t,n){return this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n),()=>{this.listeners[t]=this.listeners[t].filter(o=>o!==n)}}_triggerEvent(t,n){this.listeners[t]&&this.listeners[t].forEach(o=>{try{o(n)}catch(s){console.error(`[RealtimeService] Error in event listener for ${t}:`,s)}})}_setupHeartbeat(){this.heartbeatInterval=setInterval(()=>{if(!this.connected){clearInterval(this.heartbeatInterval),this.heartbeatInterval=null;return}Math.random()<.05&&this._handleConnectionLoss()},1e4)}_handleConnectionLoss(){this.connected=!1,this._triggerEvent(this.EVENT_TYPES.CONNECTION_STATE_CHANGED,{connected:!1,connectionId:this.connectionId}),console.log("[RealtimeService] Connection lost. Attempting to reconnect..."),this._attemptReconnect()}_attemptReconnect(){if(this.reconnectAttempts>=this.maxReconnectAttempts){console.log("[RealtimeService] Max reconnect attempts reached. Giving up."),this._triggerEvent(this.EVENT_TYPES.ERROR,{code:"MAX_RECONNECT_ATTEMPTS",message:"Failed to reconnect after maximum attempts"});return}this.reconnectAttempts++;const t=this.reconnectDelay*Math.pow(1.5,this.reconnectAttempts-1);console.log(`[RealtimeService] Reconnecting in ${t}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`),setTimeout(()=>{this.connect().catch(()=>{this._attemptReconnect()})},t)}_simulateServerReceipt(t){setTimeout(()=>{const n={originalMessageId:t.id,receiptId:`receipt_${Date.now()}`,timestamp:new Date().toISOString(),status:"delivered"};this._triggerEvent(this.EVENT_TYPES.MESSAGE_RECEIVED,n),console.log(`[RealtimeService] Server acknowledged message: ${t.id}`)},Math.random()*500+200)}_simulateProcessingSteps(t,n){let o=0;const s=()=>{if(o>=n.length){this._triggerEvent(this.EVENT_TYPES.PROCESSING_COMPLETED,{messageId:t,completionTime:new Date().toISOString(),steps:n}),console.log(`[RealtimeService] Processing completed for message: ${t}`);return}const l={messageId:t,currentStep:o,stepName:n[o].name,stepStatus:"completed",timestamp:new Date().toISOString()};this._triggerEvent(this.EVENT_TYPES.PROCESSING_STEP_UPDATED,l),console.log(`[RealtimeService] Step ${o} (${n[o].name}) completed for message: ${t}`),o++,setTimeout(s,Math.random()*1e3+500)};setTimeout(s,Math.random()*500+200)}}const oe=new vt,Se={MESSAGE_RECEIVED:"message_received",MESSAGE_SENT:"message_sent",CONNECTION_STATE_CHANGED:"connection_state_changed",PROCESSING_STARTED:"processing_started",PROCESSING_COMPLETED:"processing_completed",PROCESSING_STEP_UPDATED:"processing_step_updated",ERROR:"error"},Ee={retail:{id:"retail",name:"零售场景",icon:Je,description:"顾客与企业门店的沟通",problemRole:"顾客/消费者",solutionRole:"企业门店/销售代表",example:"我下周要去参加AOM国际会议做主旨演讲，需要一套正式但现代的商务西装，预算在800-1500元之间，身高175cm，希望能显得专业又有活力。"},enterprise:{id:"enterprise",name:"企业场景",icon:he,description:"企业跨部门沟通",problemRole:"市场部经理",solutionRole:"研发部技术人员",example:"我们的移动APP用户留存率只有30%，需要在3个月内开发个性化推荐功能来提升至45%，目标用户是18-35岁，预算50万元。"},education:{id:"education",name:"教育场景",icon:We,description:"学生与教师的互动",problemRole:"学生",solutionRole:"教师",example:"我在学习量子物理时，对波粒二象性概念理解困难，特别是为什么光既是波又是粒子，希望通过具体实验例子来理解这个概念。"}};function St(){const[r,t]=h.useState("retail"),[n,o]=h.useState(!1),[s,l]=h.useState(!1),[c,m]=h.useState({darkMode:!0,fontSize:"medium",soundEnabled:!0,autoScroll:!0,showTimestamps:!0,language:"zh-CN",apiEndpoint:"https://api.example.com/v1",maxMessagesPerPanel:50}),p=h.useRef(null),x=h.useRef(null),{messages:i,llmProcessing:d,iterationProcessing:w,iterationMode:N,pendingResponse:j,missingInfoOptions:S,showMissingInfoPanel:_,currentNeedsAnalysis:k,toggleMissingInfoOption:$,generateFollowUpBySelectedInfo:D,skipInfoCollection:B,acceptSuggestion:A,negotiateSuggestion:K,cancelNegotiation:Y,sendNegotiationRequest:ee,rejectSuggestion:te,acceptFollowUp:P,negotiateFollowUp:F,cancelFollowUpNegotiation:Z,sendFollowUpNegotiationRequest:O,rejectFollowUp:V,sendProblemMessage:J,sendSolutionMessage:se,generateSuggestion:re,generateFollowUp:H,confirmSendResponse:g,cancelIteration:T,clearMessages:U}=Nt(r);h.useEffect(()=>{(async()=>{try{await oe.connect(),l(!0)}catch(ae){console.error("Failed to connect to realtime service:",ae)}})();const v=oe.subscribe(Se.CONNECTION_STATE_CHANGED,ae=>{l(ae.connected)}),de=oe.subscribe(Se.ERROR,ae=>{console.error("Realtime service error:",ae)});return()=>{v(),de(),oe.disconnect()}},[]),h.useEffect(()=>{c.darkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");const a={small:"text-sm",medium:"text-base",large:"text-lg"};Object.values(a).forEach(v=>{document.documentElement.classList.remove(v)}),document.documentElement.classList.add(a[c.fontSize])},[c]);const f=a=>{m(a),localStorage.setItem("app-settings",JSON.stringify(a))};h.useEffect(()=>{const a=localStorage.getItem("app-settings");if(a)try{const v=JSON.parse(a);m(de=>({...de,...v}))}catch(v){console.error("Failed to parse saved settings:",v)}},[]);const b=()=>{U()},u=()=>{o(a=>!a)},y=a=>{a==="problem"&&p.current?p.current.focus():a==="solution"&&x.current&&x.current.focus()},C=h.useCallback(a=>{t(a),U()},[U]),M=Ee[r];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"min-h-screen relative overflow-hidden transition-colors duration-300",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[e.jsx("div",{className:"absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"}),e.jsx("div",{className:"absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-r from-orange-500/15 to-pink-600/15 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),e.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/12 to-violet-500/12 rounded-full blur-3xl animate-pulse",style:{animationDelay:"2s"}}),e.jsx("div",{className:"absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-2xl animate-pulse",style:{animationDelay:"3s"}}),e.jsx("div",{className:"absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-2xl animate-pulse",style:{animationDelay:"4s"}})]}),e.jsx("header",{className:"app-toolbar",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-white drop-shadow",style:{textShadow:c.darkMode?"0 1px 2px rgba(0, 0, 0, 0.5)":"0 1px 2px rgba(0, 0, 0, 0.25)"},children:"GenAI ZeroTouch Services"}),e.jsx("span",{className:"text-sm text-gray-200",style:{textShadow:c.darkMode?"0 1px 2px rgba(0, 0, 0, 0.3)":"0 1px 2px rgba(0, 0, 0, 0.15)"},children:"零摩擦沟通系统"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(it,{scenarios:Ee,currentScenario:r,onScenarioChange:C}),e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx("button",{onClick:u,className:"p-2 rounded-lg transition-colors border border-white/20 hover:bg-white/20 text-white",title:"设置 (Ctrl+,)",children:e.jsx(_e,{className:"w-5 h-5"})})})]})]})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsx(R,{type:"slide-down",show:!0,children:e.jsx("div",{className:"mb-6 p-6 glass-panel shadow-lg",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:"relative p-3 rounded-xl overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90"}),e.jsx("div",{className:"absolute inset-0 bg-white/20 backdrop-filter blur-sm"}),e.jsx(M.icon,{className:"w-6 h-6 text-white relative z-10"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold",children:M.name}),e.jsx("p",{className:"text-sm mt-1",children:M.description})]})]})})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6",children:[e.jsx(R,{type:"slide-left",show:!0,children:e.jsx("div",{className:"panel",children:e.jsx(nt,{scenario:M,messages:i.problem,onSendMessage:J,isProcessing:d,inputRef:p,settings:c})})}),e.jsx(R,{type:"scale",show:!0,children:e.jsx("div",{className:"panel",children:e.jsx(ot,{processing:d,messages:i.llm,settings:c})})}),e.jsx(R,{type:"slide-right",show:!0,children:e.jsx("div",{className:"panel",children:e.jsx(lt,{scenario:M,messages:i.solution,onSendMessage:se,isProcessing:d,iterationMode:N,pendingResponse:j,onGenerateSuggestion:re,onGenerateFollowUp:H,onConfirmSend:g,onCancelIteration:T,inputRef:x,settings:c,iterationProcessing:w,missingInfoOptions:S,showMissingInfoPanel:_,onToggleMissingInfoOption:$,onGenerateFollowUpBySelectedInfo:D,onSkipInfoCollection:B,onAcceptSuggestion:A,onNegotiateSuggestion:K,onCancelNegotiation:Y,onSendNegotiationRequest:ee,onRejectSuggestion:te,onAcceptFollowUp:P,onNegotiateFollowUp:F,onCancelFollowUpNegotiation:Z,onSendFollowUpNegotiationRequest:O,onRejectFollowUp:V})})})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{onClick:U,className:"btn-glass px-6 py-3",children:"清空对话"})})]})]}),e.jsx(ct,{}),e.jsx(ut,{onClearMessages:b,onToggleSettings:u,onFocusInput:y}),e.jsx(mt,{isOpen:n,onClose:()=>o(!1),settings:c,onUpdateSettings:f})]})}xe.createRoot(document.getElementById("root")).render(e.jsx(De.StrictMode,{children:e.jsx(St,{})}));
