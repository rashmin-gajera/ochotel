(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function _c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fu={exports:{}},pl={},pu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),Pc=Symbol.for("react.portal"),zc=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),Rc=Symbol.for("react.context"),Oc=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Fc=Symbol.for("react.memo"),Ic=Symbol.for("react.lazy"),Xi=Symbol.iterator;function $c(e){return e===null||typeof e!="object"?null:(e=Xi&&e[Xi]||e["@@iterator"],typeof e=="function"?e:null)}var hu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mu=Object.assign,gu={};function hn(e,t,n){this.props=e,this.context=t,this.refs=gu,this.updater=n||hu}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yu(){}yu.prototype=hn.prototype;function qo(e,t,n){this.props=e,this.context=t,this.refs=gu,this.updater=n||hu}var ei=qo.prototype=new yu;ei.constructor=qo;mu(ei,hn.prototype);ei.isPureReactComponent=!0;var bi=Array.isArray,vu=Object.prototype.hasOwnProperty,ti={current:null},xu={key:!0,ref:!0,__self:!0,__source:!0};function ku(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)vu.call(t,r)&&!xu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ir,type:e,key:o,ref:i,props:l,_owner:ti.current}}function Ac(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Uc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zi=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Uc(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ir:case Pc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Ml(i,0):r,bi(l)?(n="",e!=null&&(n=e.replace(Zi,"$&/")+"/"),Lr(l,t,n,"",function(d){return d})):l!=null&&(ni(l)&&(l=Ac(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Zi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",bi(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Ml(o,s);i+=Lr(o,t,n,a,l)}else if(a=$c(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Ml(o,s++),i+=Lr(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function pr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Tr={transition:null},Bc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:ti};function wu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=hn;R.Fragment=zc;R.Profiler=Lc;R.PureComponent=qo;R.StrictMode=Mc;R.Suspense=Dc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bc;R.act=wu;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ti.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)vu.call(t,a)&&!xu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ir,type:e.type,key:l,ref:o,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:Rc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tc,_context:e},e.Consumer=e};R.createElement=ku;R.createFactory=function(e){var t=ku.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Oc,render:e}};R.isValidElement=ni;R.lazy=function(e){return{$$typeof:Ic,_payload:{_status:-1,_result:e},_init:Wc}};R.memo=function(e,t){return{$$typeof:Fc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};R.unstable_act=wu;R.useCallback=function(e,t){return me.current.useCallback(e,t)};R.useContext=function(e){return me.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return me.current.useDeferredValue(e)};R.useEffect=function(e,t){return me.current.useEffect(e,t)};R.useId=function(){return me.current.useId()};R.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return me.current.useMemo(e,t)};R.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};R.useRef=function(e){return me.current.useRef(e)};R.useState=function(e){return me.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return me.current.useTransition()};R.version="18.3.1";pu.exports=R;var $=pu.exports;const Hc=_c($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc=$,Qc=Symbol.for("react.element"),Kc=Symbol.for("react.fragment"),Yc=Object.prototype.hasOwnProperty,Gc=Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xc={key:!0,ref:!0,__self:!0,__source:!0};function Su(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Yc.call(t,r)&&!Xc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Qc,type:e,key:o,ref:i,props:l,_owner:Gc.current}}pl.Fragment=Kc;pl.jsx=Su;pl.jsxs=Su;fu.exports=pl;var u=fu.exports,oo={},ju={exports:{}},Ee={},Nu={exports:{}},Cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var T=N.length;N.push(L);e:for(;0<T;){var H=T-1>>>1,Q=N[H];if(0<l(Q,L))N[H]=L,N[T]=Q,T=H;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],T=N.pop();if(T!==L){N[0]=T;e:for(var H=0,Q=N.length,k=Q>>>1;H<k;){var P=2*(H+1)-1,b=N[P],Z=P+1,re=N[Z];if(0>l(b,T))Z<Q&&0>l(re,b)?(N[H]=re,N[Z]=T,H=Z):(N[H]=b,N[P]=T,H=P);else if(Z<Q&&0>l(re,T))N[H]=re,N[Z]=T,H=Z;else break e}}return L}function l(N,L){var T=N.sortIndex-L.sortIndex;return T!==0?T:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],d=[],y=1,m=null,h=3,v=!1,g=!1,S=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=N)r(d),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(d)}}function x(N){if(S=!1,p(N),!g)if(n(a)!==null)g=!0,yn(j);else{var L=n(d);L!==null&&vn(x,L.startTime-N)}}function j(N,L){g=!1,S&&(S=!1,f(z),z=-1),v=!0;var T=h;try{for(p(L),m=n(a);m!==null&&(!(m.expirationTime>L)||N&&!ne());){var H=m.callback;if(typeof H=="function"){m.callback=null,h=m.priorityLevel;var Q=H(m.expirationTime<=L);L=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===n(a)&&r(a),p(L)}else r(a);m=n(a)}if(m!==null)var k=!0;else{var P=n(d);P!==null&&vn(x,P.startTime-L),k=!1}return k}finally{m=null,h=T,v=!1}}var _=!1,C=null,z=-1,B=5,M=-1;function ne(){return!(e.unstable_now()-M<B)}function rt(){if(C!==null){var N=e.unstable_now();M=N;var L=!0;try{L=C(!0,N)}finally{L?Oe():(_=!1,C=null)}}else _=!1}var Oe;if(typeof c=="function")Oe=function(){c(rt)};else if(typeof MessageChannel<"u"){var dr=new MessageChannel,zl=dr.port2;dr.port1.onmessage=rt,Oe=function(){zl.postMessage(null)}}else Oe=function(){D(rt,0)};function yn(N){C=N,_||(_=!0,Oe())}function vn(N,L){z=D(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,yn(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var T=h;h=L;try{return N()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=h;h=N;try{return L()}finally{h=T}},e.unstable_scheduleCallback=function(N,L,T){var H=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?H+T:H):T=H,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=T+Q,N={id:y++,callback:L,priorityLevel:N,startTime:T,expirationTime:Q,sortIndex:-1},T>H?(N.sortIndex=T,t(d,N),n(a)===null&&N===n(d)&&(S?(f(z),z=-1):S=!0,vn(x,T-H))):(N.sortIndex=Q,t(a,N),g||v||(g=!0,yn(j))),N},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(N){var L=h;return function(){var T=h;h=L;try{return N.apply(this,arguments)}finally{h=T}}}})(Cu);Nu.exports=Cu;var bc=Nu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=$,Ce=bc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eu=new Set,Hn={};function $t(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Eu.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,Jc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ji={},qi={};function qc(e){return io.call(qi,e)?!0:io.call(Ji,e)?!1:Jc.test(e)?qi[e]=!0:(Ji[e]=!0,!1)}function ed(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function td(e,t,n,r){if(t===null||typeof t>"u"||ed(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ri=/[\-:]([a-z])/g;function li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ri,li);ue[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ri,li);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ri,li);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function oi(e,t,n,r){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(td(t,n,l,r)&&(n=null),r||l===null?qc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),ii=Symbol.for("react.strict_mode"),so=Symbol.for("react.profiler"),_u=Symbol.for("react.provider"),Pu=Symbol.for("react.context"),si=Symbol.for("react.forward_ref"),uo=Symbol.for("react.suspense"),ao=Symbol.for("react.suspense_list"),ui=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),zu=Symbol.for("react.offscreen"),es=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=es&&e[es]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Ll;function Mn(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var Tl=!1;function Rl(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function nd(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Bt:return"Portal";case so:return"Profiler";case ii:return"StrictMode";case uo:return"Suspense";case ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pu:return(e.displayName||"Context")+".Consumer";case _u:return(e._context.displayName||"Context")+".Provider";case si:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ui:return t=e.displayName||null,t!==null?t:co(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return co(e(t))}catch{}}return null}function rd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return co(t);case 8:return t===ii?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ld(e){var t=Mu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=ld(e))}function Lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ts(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tu(e,t){t=t.checked,t!=null&&oi(e,"checked",t,!1)}function po(e,t){Tu(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&ho(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ns(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ho(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Ln(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function Ru(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ls(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ou(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},od=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){od.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Fu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Iu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Fu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var id=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yo(e,t){if(t){if(id[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function vo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ko=null,tn=null,nn=null;function os(e){if(e=ar(e)){if(typeof ko!="function")throw Error(w(280));var t=e.stateNode;t&&(t=vl(t),ko(e.stateNode,e.type,t))}}function $u(e){tn?nn?nn.push(e):nn=[e]:tn=e}function Au(){if(tn){var e=tn,t=nn;if(nn=tn=null,os(e),t)for(e=0;e<t.length;e++)os(t[e])}}function Uu(e,t){return e(t)}function Wu(){}var Ol=!1;function Bu(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Uu(e,t,n)}finally{Ol=!1,(tn!==null||nn!==null)&&(Wu(),Au())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var wo=!1;if(Je)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){wo=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{wo=!1}function sd(e,t,n,r,l,o,i,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var Dn=!1,Vr=null,Qr=!1,So=null,ud={onError:function(e){Dn=!0,Vr=e}};function ad(e,t,n,r,l,o,i,s,a){Dn=!1,Vr=null,sd.apply(ud,arguments)}function cd(e,t,n,r,l,o,i,s,a){if(ad.apply(this,arguments),Dn){if(Dn){var d=Vr;Dn=!1,Vr=null}else throw Error(w(198));Qr||(Qr=!0,So=d)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function is(e){if(At(e)!==e)throw Error(w(188))}function dd(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return is(l),e;if(o===r)return is(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Vu(e){return e=dd(e),e!==null?Qu(e):null}function Qu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qu(e);if(t!==null)return t;e=e.sibling}return null}var Ku=Ce.unstable_scheduleCallback,ss=Ce.unstable_cancelCallback,fd=Ce.unstable_shouldYield,pd=Ce.unstable_requestPaint,J=Ce.unstable_now,hd=Ce.unstable_getCurrentPriorityLevel,ci=Ce.unstable_ImmediatePriority,Yu=Ce.unstable_UserBlockingPriority,Kr=Ce.unstable_NormalPriority,md=Ce.unstable_LowPriority,Gu=Ce.unstable_IdlePriority,hl=null,Qe=null;function gd(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:xd,yd=Math.log,vd=Math.LN2;function xd(e){return e>>>=0,e===0?32:31-(yd(e)/vd|0)|0}var yr=64,vr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Tn(s):(o&=i,o!==0&&(r=Tn(o)))}else i=n&~l,i!==0?r=Tn(i):o!==0&&(r=Tn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),l=1<<n,r|=e[n],t&=~l;return r}function kd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ae(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=kd(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xu(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function Sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ae(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function di(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zu,fi,Ju,qu,ea,No=!1,xr=[],dt=null,ft=null,pt=null,Kn=new Map,Yn=new Map,st=[],jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function us(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function jn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=ar(t),t!==null&&fi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Nd(e,t,n,r,l){switch(t){case"focusin":return dt=jn(dt,e,t,n,r,l),!0;case"dragenter":return ft=jn(ft,e,t,n,r,l),!0;case"mouseover":return pt=jn(pt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Kn.set(o,jn(Kn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Yn.set(o,jn(Yn.get(o)||null,e,t,n,r,l)),!0}return!1}function ta(e){var t=_t(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=Hu(n),t!==null){e.blockedOn=t,ea(e.priority,function(){Ju(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xo=r,n.target.dispatchEvent(r),xo=null}else return t=ar(n),t!==null&&fi(t),e.blockedOn=n,!1;t.shift()}return!0}function as(e,t,n){Rr(e)&&n.delete(t)}function Cd(){No=!1,dt!==null&&Rr(dt)&&(dt=null),ft!==null&&Rr(ft)&&(ft=null),pt!==null&&Rr(pt)&&(pt=null),Kn.forEach(as),Yn.forEach(as)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,No||(No=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Cd)))}function Gn(e){function t(l){return Nn(l,e)}if(0<xr.length){Nn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Nn(dt,e),ft!==null&&Nn(ft,e),pt!==null&&Nn(pt,e),Kn.forEach(t),Yn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)ta(n),n.blockedOn===null&&st.shift()}var rn=nt.ReactCurrentBatchConfig,Gr=!0;function Ed(e,t,n,r){var l=F,o=rn.transition;rn.transition=null;try{F=1,pi(e,t,n,r)}finally{F=l,rn.transition=o}}function _d(e,t,n,r){var l=F,o=rn.transition;rn.transition=null;try{F=4,pi(e,t,n,r)}finally{F=l,rn.transition=o}}function pi(e,t,n,r){if(Gr){var l=Co(e,t,n,r);if(l===null)Ql(e,t,r,Xr,n),us(e,r);else if(Nd(l,e,t,n,r))r.stopPropagation();else if(us(e,r),t&4&&-1<jd.indexOf(e)){for(;l!==null;){var o=ar(l);if(o!==null&&Zu(o),o=Co(e,t,n,r),o===null&&Ql(e,t,r,Xr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Xr=null;function Co(e,t,n,r){if(Xr=null,e=ai(r),e=_t(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function na(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hd()){case ci:return 1;case Yu:return 4;case Kr:case md:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var at=null,hi=null,Or=null;function ra(){if(Or)return Or;var e,t=hi,n=t.length,r,l="value"in at?at.value:at.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Or=l.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function cs(){return!1}function _e(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?kr:cs,this.isPropagationStopped=cs,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=_e(mn),ur=G({},mn,{view:0,detail:0}),Pd=_e(ur),Fl,Il,Cn,ml=G({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cn&&(Cn&&e.type==="mousemove"?(Fl=e.screenX-Cn.screenX,Il=e.screenY-Cn.screenY):Il=Fl=0,Cn=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),ds=_e(ml),zd=G({},ml,{dataTransfer:0}),Md=_e(zd),Ld=G({},ur,{relatedTarget:0}),$l=_e(Ld),Td=G({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rd=_e(Td),Od=G({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dd=_e(Od),Fd=G({},mn,{data:0}),fs=_e(Fd),Id={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ud(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ad[e])?!!t[e]:!1}function gi(){return Ud}var Wd=G({},ur,{key:function(e){if(e.key){var t=Id[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gi,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bd=_e(Wd),Hd=G({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=_e(Hd),Vd=G({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gi}),Qd=_e(Vd),Kd=G({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yd=_e(Kd),Gd=G({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xd=_e(Gd),bd=[9,13,27,32],yi=Je&&"CompositionEvent"in window,Fn=null;Je&&"documentMode"in document&&(Fn=document.documentMode);var Zd=Je&&"TextEvent"in window&&!Fn,la=Je&&(!yi||Fn&&8<Fn&&11>=Fn),hs=" ",ms=!1;function oa(e,t){switch(e){case"keyup":return bd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ia(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Jd(e,t){switch(e){case"compositionend":return ia(t);case"keypress":return t.which!==32?null:(ms=!0,hs);case"textInput":return e=t.data,e===hs&&ms?null:e;default:return null}}function qd(e,t){if(Vt)return e==="compositionend"||!yi&&oa(e,t)?(e=ra(),Or=hi=at=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return la&&t.locale!=="ko"?null:t.data;default:return null}}var ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ef[e.type]:t==="textarea"}function sa(e,t,n,r){$u(r),t=br(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Xn=null;function tf(e){va(e,0)}function gl(e){var t=Yt(e);if(Lu(t))return e}function nf(e,t){if(e==="change")return t}var ua=!1;if(Je){var Al;if(Je){var Ul="oninput"in document;if(!Ul){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),Ul=typeof ys.oninput=="function"}Al=Ul}else Al=!1;ua=Al&&(!document.documentMode||9<document.documentMode)}function vs(){In&&(In.detachEvent("onpropertychange",aa),Xn=In=null)}function aa(e){if(e.propertyName==="value"&&gl(Xn)){var t=[];sa(t,Xn,e,ai(e)),Bu(tf,t)}}function rf(e,t,n){e==="focusin"?(vs(),In=t,Xn=n,In.attachEvent("onpropertychange",aa)):e==="focusout"&&vs()}function lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Xn)}function of(e,t){if(e==="click")return gl(t)}function sf(e,t){if(e==="input"||e==="change")return gl(t)}function uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:uf;function bn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!io.call(t,l)||!We(e[l],t[l]))return!1}return!0}function xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ks(e,t){var n=xs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xs(n)}}function ca(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ca(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function da(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function af(e){var t=da(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ca(n.ownerDocument.documentElement,n)){if(r!==null&&vi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ks(n,o);var i=ks(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cf=Je&&"documentMode"in document&&11>=document.documentMode,Qt=null,Eo=null,$n=null,_o=!1;function ws(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_o||Qt==null||Qt!==Hr(r)||(r=Qt,"selectionStart"in r&&vi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&bn($n,r)||($n=r,r=br(Eo,"onSelect"),0<r.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Wl={},fa={};Je&&(fa=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function yl(e){if(Wl[e])return Wl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fa)return Wl[e]=t[n];return e}var pa=yl("animationend"),ha=yl("animationiteration"),ma=yl("animationstart"),ga=yl("transitionend"),ya=new Map,Ss="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){ya.set(e,t),$t(t,[e])}for(var Bl=0;Bl<Ss.length;Bl++){var Hl=Ss[Bl],df=Hl.toLowerCase(),ff=Hl[0].toUpperCase()+Hl.slice(1);wt(df,"on"+ff)}wt(pa,"onAnimationEnd");wt(ha,"onAnimationIteration");wt(ma,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(ga,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function js(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cd(r,t,void 0,e),e.currentTarget=null}function va(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;js(l,s,d),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,d=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;js(l,s,d),o=a}}}if(Qr)throw e=So,Qr=!1,So=null,e}function U(e,t){var n=t[To];n===void 0&&(n=t[To]=new Set);var r=e+"__bubble";n.has(r)||(xa(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),xa(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[Sr]){e[Sr]=!0,Eu.forEach(function(n){n!=="selectionchange"&&(pf.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Vl("selectionchange",!1,t))}}function xa(e,t,n,r){switch(na(t)){case 1:var l=Ed;break;case 4:l=_d;break;default:l=pi}n=l.bind(null,t,n,e),l=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=_t(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Bu(function(){var d=o,y=ai(n),m=[];e:{var h=ya.get(e);if(h!==void 0){var v=mi,g=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":v=Bd;break;case"focusin":g="focus",v=$l;break;case"focusout":g="blur",v=$l;break;case"beforeblur":case"afterblur":v=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Qd;break;case pa:case ha:case ma:v=Rd;break;case ga:v=Yd;break;case"scroll":v=Pd;break;case"wheel":v=Xd;break;case"copy":case"cut":case"paste":v=Dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ps}var S=(t&4)!==0,D=!S&&e==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Qn(c,f),x!=null&&S.push(Jn(c,x,p)))),D)break;c=c.return}0<S.length&&(h=new v(h,g,null,n,y),m.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==xo&&(g=n.relatedTarget||n.fromElement)&&(_t(g)||g[qe]))break e;if((v||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=d,g=g?_t(g):null,g!==null&&(D=At(g),g!==D||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=d),v!==g)){if(S=ds,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=ps,x="onPointerLeave",f="onPointerEnter",c="pointer"),D=v==null?h:Yt(v),p=g==null?h:Yt(g),h=new S(x,c+"leave",v,n,y),h.target=D,h.relatedTarget=p,x=null,_t(y)===d&&(S=new S(f,c+"enter",g,n,y),S.target=p,S.relatedTarget=D,x=S),D=x,v&&g)t:{for(S=v,f=g,c=0,p=S;p;p=Ut(p))c++;for(p=0,x=f;x;x=Ut(x))p++;for(;0<c-p;)S=Ut(S),c--;for(;0<p-c;)f=Ut(f),p--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=Ut(S),f=Ut(f)}S=null}else S=null;v!==null&&Ns(m,h,v,S,!1),g!==null&&D!==null&&Ns(m,D,g,S,!0)}}e:{if(h=d?Yt(d):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var j=nf;else if(gs(h))if(ua)j=sf;else{j=lf;var _=rf}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=of);if(j&&(j=j(e,d))){sa(m,j,n,y);break e}_&&_(e,h,d),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&ho(h,"number",h.value)}switch(_=d?Yt(d):window,e){case"focusin":(gs(_)||_.contentEditable==="true")&&(Qt=_,Eo=d,$n=null);break;case"focusout":$n=Eo=Qt=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,ws(m,n,y);break;case"selectionchange":if(cf)break;case"keydown":case"keyup":ws(m,n,y)}var C;if(yi)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Vt?oa(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(la&&n.locale!=="ko"&&(Vt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Vt&&(C=ra()):(at=y,hi="value"in at?at.value:at.textContent,Vt=!0)),_=br(d,z),0<_.length&&(z=new fs(z,e,null,n,y),m.push({event:z,listeners:_}),C?z.data=C:(C=ia(n),C!==null&&(z.data=C)))),(C=Zd?Jd(e,n):qd(e,n))&&(d=br(d,"onBeforeInput"),0<d.length&&(y=new fs("onBeforeInput","beforeinput",null,n,y),m.push({event:y,listeners:d}),y.data=C))}va(m,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Qn(e,n),o!=null&&r.unshift(Jn(e,o,l)),o=Qn(e,t),o!=null&&r.push(Jn(e,o,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ns(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,l?(a=Qn(n,o),a!=null&&i.unshift(Jn(n,a,s))):l||(a=Qn(n,o),a!=null&&i.push(Jn(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var hf=/\r\n?/g,mf=/\u0000|\uFFFD/g;function Cs(e){return(typeof e=="string"?e:""+e).replace(hf,`
`).replace(mf,"")}function jr(e,t,n){if(t=Cs(t),Cs(e)!==t&&n)throw Error(w(425))}function Zr(){}var Po=null,zo=null;function Mo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,Es=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof Es<"u"?function(e){return Es.resolve(null).then(e).catch(vf)}:Lo;function vf(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Gn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _s(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+gn,qn="__reactProps$"+gn,qe="__reactContainer$"+gn,To="__reactEvents$"+gn,xf="__reactListeners$"+gn,kf="__reactHandles$"+gn;function _t(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_s(e);e!==null;){if(n=e[Ve])return n;e=_s(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Ve]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function vl(e){return e[qn]||null}var Ro=[],Gt=-1;function St(e){return{current:e}}function W(e){0>Gt||(e.current=Ro[Gt],Ro[Gt]=null,Gt--)}function A(e,t){Gt++,Ro[Gt]=e.current,e.current=t}var kt={},fe=St(kt),xe=St(!1),Rt=kt;function un(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function Jr(){W(xe),W(fe)}function Ps(e,t,n){if(fe.current!==kt)throw Error(w(168));A(fe,t),A(xe,n)}function ka(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,rd(e)||"Unknown",l));return G({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Rt=fe.current,A(fe,e),A(xe,xe.current),!0}function zs(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=ka(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,W(xe),W(fe),A(fe,e)):W(xe),A(xe,n)}var Ge=null,xl=!1,Yl=!1;function wa(e){Ge===null?Ge=[e]:Ge.push(e)}function wf(e){xl=!0,wa(e)}function jt(){if(!Yl&&Ge!==null){Yl=!0;var e=0,t=F;try{var n=Ge;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,xl=!1}catch(l){throw Ge!==null&&(Ge=Ge.slice(e+1)),Ku(ci,jt),l}finally{F=t,Yl=!1}}return null}var Xt=[],bt=0,el=null,tl=0,Pe=[],ze=0,Ot=null,Xe=1,be="";function Ct(e,t){Xt[bt++]=tl,Xt[bt++]=el,el=e,tl=t}function Sa(e,t,n){Pe[ze++]=Xe,Pe[ze++]=be,Pe[ze++]=Ot,Ot=e;var r=Xe;e=be;var l=32-Ae(r)-1;r&=~(1<<l),n+=1;var o=32-Ae(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Xe=1<<32-Ae(t)+l|n<<l|r,be=o+e}else Xe=1<<o|n<<l|r,be=e}function xi(e){e.return!==null&&(Ct(e,1),Sa(e,1,0))}function ki(e){for(;e===el;)el=Xt[--bt],Xt[bt]=null,tl=Xt[--bt],Xt[bt]=null;for(;e===Ot;)Ot=Pe[--ze],Pe[ze]=null,be=Pe[--ze],Pe[ze]=null,Xe=Pe[--ze],Pe[ze]=null}var Ne=null,je=null,V=!1,$e=null;function ja(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ms(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,je=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Xe,overflow:be}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,je=null,!0):!1;default:return!1}}function Oo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Do(e){if(V){var t=je;if(t){var n=t;if(!Ms(e,t)){if(Oo(e))throw Error(w(418));t=ht(n.nextSibling);var r=Ne;t&&Ms(e,t)?ja(r,n):(e.flags=e.flags&-4097|2,V=!1,Ne=e)}}else{if(Oo(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,Ne=e}}}function Ls(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Nr(e){if(e!==Ne)return!1;if(!V)return Ls(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mo(e.type,e.memoizedProps)),t&&(t=je)){if(Oo(e))throw Na(),Error(w(418));for(;t;)ja(e,t),t=ht(t.nextSibling)}if(Ls(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ne?ht(e.stateNode.nextSibling):null;return!0}function Na(){for(var e=je;e;)e=ht(e.nextSibling)}function an(){je=Ne=null,V=!1}function wi(e){$e===null?$e=[e]:$e.push(e)}var Sf=nt.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ts(e){var t=e._init;return t(e._payload)}function Ca(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=vt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,x){return c===null||c.tag!==6?(c=eo(p,f.mode,x),c.return=f,c):(c=l(c,p),c.return=f,c)}function a(f,c,p,x){var j=p.type;return j===Ht?y(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ot&&Ts(j)===c.type)?(x=l(c,p.props),x.ref=En(f,c,p),x.return=f,x):(x=Br(p.type,p.key,p.props,null,f.mode,x),x.ref=En(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=to(p,f.mode,x),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function y(f,c,p,x,j){return c===null||c.tag!==7?(c=Lt(p,f.mode,x,j),c.return=f,c):(c=l(c,p),c.return=f,c)}function m(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=eo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hr:return p=Br(c.type,c.key,c.props,null,f.mode,p),p.ref=En(f,null,c),p.return=f,p;case Bt:return c=to(c,f.mode,p),c.return=f,c;case ot:var x=c._init;return m(f,x(c._payload),p)}if(Ln(c)||wn(c))return c=Lt(c,f.mode,p,null),c.return=f,c;Cr(f,c)}return null}function h(f,c,p,x){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===j?a(f,c,p,x):null;case Bt:return p.key===j?d(f,c,p,x):null;case ot:return j=p._init,h(f,c,j(p._payload),x)}if(Ln(p)||wn(p))return j!==null?null:y(f,c,p,x,null);Cr(f,p)}return null}function v(f,c,p,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(c,f,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hr:return f=f.get(x.key===null?p:x.key)||null,a(c,f,x,j);case Bt:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,j);case ot:var _=x._init;return v(f,c,p,_(x._payload),j)}if(Ln(x)||wn(x))return f=f.get(p)||null,y(c,f,x,j,null);Cr(c,x)}return null}function g(f,c,p,x){for(var j=null,_=null,C=c,z=c=0,B=null;C!==null&&z<p.length;z++){C.index>z?(B=C,C=null):B=C.sibling;var M=h(f,C,p[z],x);if(M===null){C===null&&(C=B);break}e&&C&&M.alternate===null&&t(f,C),c=o(M,c,z),_===null?j=M:_.sibling=M,_=M,C=B}if(z===p.length)return n(f,C),V&&Ct(f,z),j;if(C===null){for(;z<p.length;z++)C=m(f,p[z],x),C!==null&&(c=o(C,c,z),_===null?j=C:_.sibling=C,_=C);return V&&Ct(f,z),j}for(C=r(f,C);z<p.length;z++)B=v(C,f,z,p[z],x),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?z:B.key),c=o(B,c,z),_===null?j=B:_.sibling=B,_=B);return e&&C.forEach(function(ne){return t(f,ne)}),V&&Ct(f,z),j}function S(f,c,p,x){var j=wn(p);if(typeof j!="function")throw Error(w(150));if(p=j.call(p),p==null)throw Error(w(151));for(var _=j=null,C=c,z=c=0,B=null,M=p.next();C!==null&&!M.done;z++,M=p.next()){C.index>z?(B=C,C=null):B=C.sibling;var ne=h(f,C,M.value,x);if(ne===null){C===null&&(C=B);break}e&&C&&ne.alternate===null&&t(f,C),c=o(ne,c,z),_===null?j=ne:_.sibling=ne,_=ne,C=B}if(M.done)return n(f,C),V&&Ct(f,z),j;if(C===null){for(;!M.done;z++,M=p.next())M=m(f,M.value,x),M!==null&&(c=o(M,c,z),_===null?j=M:_.sibling=M,_=M);return V&&Ct(f,z),j}for(C=r(f,C);!M.done;z++,M=p.next())M=v(C,f,z,M.value,x),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?z:M.key),c=o(M,c,z),_===null?j=M:_.sibling=M,_=M);return e&&C.forEach(function(rt){return t(f,rt)}),V&&Ct(f,z),j}function D(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Ht&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var j=p.key,_=c;_!==null;){if(_.key===j){if(j=p.type,j===Ht){if(_.tag===7){n(f,_.sibling),c=l(_,p.props.children),c.return=f,f=c;break e}}else if(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ot&&Ts(j)===_.type){n(f,_.sibling),c=l(_,p.props),c.ref=En(f,_,p),c.return=f,f=c;break e}n(f,_);break}else t(f,_);_=_.sibling}p.type===Ht?(c=Lt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Br(p.type,p.key,p.props,null,f.mode,x),x.ref=En(f,c,p),x.return=f,f=x)}return i(f);case Bt:e:{for(_=p.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=to(p,f.mode,x),c.return=f,f=c}return i(f);case ot:return _=p._init,D(f,c,_(p._payload),x)}if(Ln(p))return g(f,c,p,x);if(wn(p))return S(f,c,p,x);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=eo(p,f.mode,x),c.return=f,f=c),i(f)):n(f,c)}return D}var cn=Ca(!0),Ea=Ca(!1),nl=St(null),rl=null,Zt=null,Si=null;function ji(){Si=Zt=rl=null}function Ni(e){var t=nl.current;W(nl),e._currentValue=t}function Fo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){rl=e,Si=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Si!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(rl===null)throw Error(w(308));Zt=e,rl.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Pt=null;function Ci(e){Pt===null?Pt=[e]:Pt.push(e)}function _a(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ci(t)):(n.next=l.next,l.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Ei(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,et(e,n)}return l=r.interleaved,l===null?(t.next=t,Ci(r)):(t.next=l.next,l.next=t),r.interleaved=t,et(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,di(e,n)}}function Rs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;it=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,d=a.next;a.next=null,i===null?o=d:i.next=d,i=a;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=a))}if(o!==null){var m=l.baseState;i=0,y=d=a=null,s=o;do{var h=s.lane,v=s.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,S=s;switch(h=t,v=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){m=g.call(v,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(v,m,h):g,h==null)break e;m=G({},m,h);break e;case 2:it=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=v,a=m):y=y.next=v,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(y===null&&(a=m),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ft|=i,e.lanes=i,e.memoizedState=m}}function Os(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var cr={},Ke=St(cr),er=St(cr),tr=St(cr);function zt(e){if(e===cr)throw Error(w(174));return e}function _i(e,t){switch(A(tr,t),A(er,e),A(Ke,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}W(Ke),A(Ke,t)}function dn(){W(Ke),W(er),W(tr)}function za(e){zt(tr.current);var t=zt(Ke.current),n=go(t,e.type);t!==n&&(A(er,e),A(Ke,n))}function Pi(e){er.current===e&&(W(Ke),W(er))}var K=St(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function zi(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var Ir=nt.ReactCurrentDispatcher,Xl=nt.ReactCurrentBatchConfig,Dt=0,Y=null,ee=null,le=null,il=!1,An=!1,nr=0,jf=0;function ae(){throw Error(w(321))}function Mi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Li(e,t,n,r,l,o){if(Dt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?_f:Pf,e=n(r,l),An){o=0;do{if(An=!1,nr=0,25<=o)throw Error(w(301));o+=1,le=ee=null,t.updateQueue=null,Ir.current=zf,e=n(r,l)}while(An)}if(Ir.current=sl,t=ee!==null&&ee.next!==null,Dt=0,le=ee=Y=null,il=!1,t)throw Error(w(300));return e}function Ti(){var e=nr!==0;return nr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Re(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ee=e;else{if(e===null)throw Error(w(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function rr(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=Re(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,d=o;do{var y=d.lane;if((Dt&y)===y)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,Y.lanes|=y,Ft|=y}d=d.next}while(d!==null&&d!==o);a===null?i=r:a.next=s,We(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Y.lanes|=o,Ft|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zl(e){var t=Re(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);We(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ma(){}function La(e,t){var n=Y,r=Re(),l=t(),o=!We(r.memoizedState,l);if(o&&(r.memoizedState=l,ve=!0),r=r.queue,Ri(Oa.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,lr(9,Ra.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(w(349));Dt&30||Ta(n,t,l)}return l}function Ta(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ra(e,t,n,r){t.value=n,t.getSnapshot=r,Da(t)&&Fa(e)}function Oa(e,t,n){return n(function(){Da(t)&&Fa(e)})}function Da(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function Fa(e){var t=et(e,1);t!==null&&Ue(t,e,1,-1)}function Ds(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ef.bind(null,Y,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ia(){return Re().memoizedState}function $r(e,t,n,r){var l=He();Y.flags|=e,l.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function kl(e,t,n,r){var l=Re();r=r===void 0?null:r;var o=void 0;if(ee!==null){var i=ee.memoizedState;if(o=i.destroy,r!==null&&Mi(r,i.deps)){l.memoizedState=lr(t,n,o,r);return}}Y.flags|=e,l.memoizedState=lr(1|t,n,o,r)}function Fs(e,t){return $r(8390656,8,e,t)}function Ri(e,t){return kl(2048,8,e,t)}function $a(e,t){return kl(4,2,e,t)}function Aa(e,t){return kl(4,4,e,t)}function Ua(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wa(e,t,n){return n=n!=null?n.concat([e]):null,kl(4,4,Ua.bind(null,t,e),n)}function Oi(){}function Ba(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ha(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Va(e,t,n){return Dt&21?(We(n,t)||(n=Xu(),Y.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function Nf(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{F=n,Xl.transition=r}}function Qa(){return Re().memoizedState}function Cf(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ka(e))Ya(t,n);else if(n=_a(e,t,n,r),n!==null){var l=he();Ue(n,e,r,l),Ga(n,t,r)}}function Ef(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ka(e))Ya(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,We(s,i)){var a=t.interleaved;a===null?(l.next=l,Ci(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=_a(e,t,l,r),n!==null&&(l=he(),Ue(n,e,r,l),Ga(n,t,r))}}function Ka(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ya(e,t){An=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ga(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,di(e,n)}}var sl={readContext:Te,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},_f={readContext:Te,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Fs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Ua.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Ds,useDebugValue:Oi,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Ds(!1),t=e[0];return e=Nf.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,l=He();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),oe===null)throw Error(w(349));Dt&30||Ta(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Fs(Oa.bind(null,r,o,e),[e]),r.flags|=2048,lr(9,Ra.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=oe.identifierPrefix;if(V){var n=be,r=Xe;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pf={readContext:Te,useCallback:Ba,useContext:Te,useEffect:Ri,useImperativeHandle:Wa,useInsertionEffect:$a,useLayoutEffect:Aa,useMemo:Ha,useReducer:bl,useRef:Ia,useState:function(){return bl(rr)},useDebugValue:Oi,useDeferredValue:function(e){var t=Re();return Va(t,ee.memoizedState,e)},useTransition:function(){var e=bl(rr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Ma,useSyncExternalStore:La,useId:Qa,unstable_isNewReconciler:!1},zf={readContext:Te,useCallback:Ba,useContext:Te,useEffect:Ri,useImperativeHandle:Wa,useInsertionEffect:$a,useLayoutEffect:Aa,useMemo:Ha,useReducer:Zl,useRef:Ia,useState:function(){return Zl(rr)},useDebugValue:Oi,useDeferredValue:function(e){var t=Re();return ee===null?t.memoizedState=e:Va(t,ee.memoizedState,e)},useTransition:function(){var e=Zl(rr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Ma,useSyncExternalStore:La,useId:Qa,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Io(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wl={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),l=yt(e),o=Ze(r,l);o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,l),t!==null&&(Ue(t,e,l,r),Fr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),l=yt(e),o=Ze(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,l),t!==null&&(Ue(t,e,l,r),Fr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=yt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=mt(e,l,r),t!==null&&(Ue(t,e,r,n),Fr(t,e,r))}};function Is(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(l,o):!0}function Xa(e,t,n){var r=!1,l=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Te(o):(l=ke(t)?Rt:fe.current,r=t.contextTypes,o=(r=r!=null)?un(e,l):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function $s(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function $o(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ei(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Te(o):(o=ke(t)?Rt:fe.current,l.context=un(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Io(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&wl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=nd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ao(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function ba(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,Xo=r),Ao(e,t)},n}function Za(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ao(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ao(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function As(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Vf.bind(null,e,t,n),t.then(e,e))}function Us(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ws(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var Lf=nt.ReactCurrentOwner,ve=!1;function pe(e,t,n,r){t.child=e===null?Ea(t,null,n,r):cn(t,e.child,n,r)}function Bs(e,t,n,r,l){n=n.render;var o=t.ref;return ln(t,l),r=Li(e,t,n,r,o,l),n=Ti(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(V&&n&&xi(t),t.flags|=1,pe(e,t,r,l),t.child)}function Hs(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Bi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ja(e,t,o,r,l)):(e=Br(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(i,r)&&e.ref===t.ref)return tt(e,t,l)}return t.flags|=1,e=vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ja(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(bn(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,tt(e,t,l)}return Uo(e,t,n,r,l)}function qa(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(qt,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(qt,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,A(qt,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,A(qt,Se),Se|=r;return pe(e,t,l,n),t.child}function ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Uo(e,t,n,r,l){var o=ke(n)?Rt:fe.current;return o=un(t,o),ln(t,l),n=Li(e,t,n,r,o,l),r=Ti(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(V&&r&&xi(t),t.flags|=1,pe(e,t,n,l),t.child)}function Vs(e,t,n,r,l){if(ke(n)){var o=!0;qr(t)}else o=!1;if(ln(t,l),t.stateNode===null)Ar(e,t),Xa(t,n,r),$o(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Te(d):(d=ke(n)?Rt:fe.current,d=un(t,d));var y=n.getDerivedStateFromProps,m=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==d)&&$s(t,i,r,d),it=!1;var h=t.memoizedState;i.state=h,ll(t,r,i,l),a=t.memoizedState,s!==r||h!==a||xe.current||it?(typeof y=="function"&&(Io(t,n,y,r),a=t.memoizedState),(s=it||Is(t,n,s,r,h,a,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Pa(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Fe(t.type,s),i.props=d,m=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Te(a):(a=ke(n)?Rt:fe.current,a=un(t,a));var v=n.getDerivedStateFromProps;(y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==a)&&$s(t,i,r,a),it=!1,h=t.memoizedState,i.state=h,ll(t,r,i,l);var g=t.memoizedState;s!==m||h!==g||xe.current||it?(typeof v=="function"&&(Io(t,n,v,r),g=t.memoizedState),(d=it||Is(t,n,d,r,h,g,a)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),i.props=r,i.state=g,i.context=a,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wo(e,t,n,r,o,l)}function Wo(e,t,n,r,l,o){ec(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&zs(t,n,!1),tt(e,t,o);r=t.stateNode,Lf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=cn(t,e.child,null,o),t.child=cn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,l&&zs(t,n,!0),t.child}function tc(e){var t=e.stateNode;t.pendingContext?Ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ps(e,t.context,!1),_i(e,t.containerInfo)}function Qs(e,t,n,r,l){return an(),wi(l),t.flags|=256,pe(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function nc(e,t,n){var r=t.pendingProps,l=K.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(K,l&1),e===null)return Do(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Nl(i,r,0,null),e=Lt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ho(n),t.memoizedState=Bo,e):Di(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Tf(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=vt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=vt(s,o):(o=Lt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ho(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=vt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Di(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&wi(r),cn(t,e.child,null,n),e=Di(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(w(422))),Er(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),o=Lt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cn(t,e.child,null,i),t.child.memoizedState=Ho(i),t.memoizedState=Bo,o);if(!(t.mode&1))return Er(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=Jl(o,r,void 0),Er(e,t,i,r)}if(s=(i&e.childLanes)!==0,ve||s){if(r=oe,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,et(e,l),Ue(r,e,l,-1))}return Wi(),r=Jl(Error(w(421))),Er(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Qf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,je=ht(l.nextSibling),Ne=t,V=!0,$e=null,e!==null&&(Pe[ze++]=Xe,Pe[ze++]=be,Pe[ze++]=Ot,Xe=e.id,be=e.overflow,Ot=t),t=Di(t,r.children),t.flags|=4096,t)}function Ks(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fo(e.return,t,n)}function ql(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function rc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ks(e,n,t);else if(e.tag===19)Ks(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ol(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,o);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rf(e,t,n){switch(t.tag){case 3:tc(t),an();break;case 5:za(t);break;case 1:ke(t.type)&&qr(t);break;case 4:_i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?nc(e,t,n):(A(K,K.current&1),e=tt(e,t,n),e!==null?e.sibling:null);A(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,qa(e,t,n)}return tt(e,t,n)}var lc,Vo,oc,ic;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vo=function(){};oc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(Ke.current);var o=null;switch(n){case"input":l=fo(e,l),r=fo(e,r),o=[];break;case"select":l=G({},l,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":l=mo(e,l),r=mo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}yo(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Hn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&U("scroll",e),o||s===a||(o=[])):(o=o||[]).push(d,a))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Of(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&Jr(),ce(t),null;case 3:return r=t.stateNode,dn(),W(xe),W(fe),zi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Jo($e),$e=null))),Vo(e,t),ce(t),null;case 5:Pi(t);var l=zt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ce(t),null}if(e=zt(Ke.current),Nr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[qn]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Rn.length;l++)U(Rn[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ts(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":rs(r,o),U("invalid",r)}yo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",""+s]):Hn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&U("scroll",r)}switch(n){case"input":mr(r),ns(r,o,!0);break;case"textarea":mr(r),ls(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ou(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[qn]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(i=vo(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Rn.length;l++)U(Rn[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":ts(e,r),l=fo(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=G({},r,{value:void 0}),U("invalid",e);break;case"textarea":rs(e,r),l=mo(e,r),U("invalid",e);break;default:l=r}yo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Iu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Du(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Vn(e,a):typeof a=="number"&&Vn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&U("scroll",e):a!=null&&oi(e,o,a,i))}switch(n){case"input":mr(e),ns(e,r,!1);break;case"textarea":mr(e),ls(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?en(e,!!r.multiple,o,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=zt(tr.current),zt(Ke.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return ce(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&je!==null&&t.mode&1&&!(t.flags&128))Na(),an(),t.flags|=98560,o=!1;else if(o=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ve]=t}else an(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else $e!==null&&(Jo($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Wi())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return dn(),Vo(e,t),e===null&&Zn(t.stateNode.containerInfo),ce(t),null;case 10:return Ni(t.type._context),ce(t),null;case 17:return ke(t.type)&&Jr(),ce(t),null;case 19:if(W(K),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)_n(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ol(e),i!==null){for(t.flags|=128,_n(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>pn&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304)}else{if(!r)if(e=ol(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!V)return ce(t),null}else 2*J()-o.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=K.current,A(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Ui(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Df(e,t){switch(ki(t),t.tag){case 1:return ke(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),W(xe),W(fe),zi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pi(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return dn(),null;case 10:return Ni(t.type._context),null;case 22:case 23:return Ui(),null;case 24:return null;default:return null}}var _r=!1,de=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,E=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Qo(e,t,n){try{n()}catch(r){X(e,t,r)}}var Ys=!1;function If(e,t){if(Po=Gr,e=da(),vi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,d=0,y=0,m=e,h=null;t:for(;;){for(var v;m!==n||l!==0&&m.nodeType!==3||(s=i+l),m!==o||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++d===l&&(s=i),h===o&&++y===r&&(a=i),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:e,selectionRange:n},Gr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,D=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:Fe(t.type,S),D);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return g=Ys,Ys=!1,g}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Qo(t,n,o)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ko(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sc(e){var t=e.alternate;t!==null&&(e.alternate=null,sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[qn],delete t[To],delete t[xf],delete t[kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uc(e){return e.tag===5||e.tag===3||e.tag===4}function Gs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}function Go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}var ie=null,Ie=!1;function lt(e,t,n){for(n=n.child;n!==null;)ac(e,t,n),n=n.sibling}function ac(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:de||Jt(n,t);case 6:var r=ie,l=Ie;ie=null,lt(e,t,n),ie=r,Ie=l,ie!==null&&(Ie?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Ie?(e=ie,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),Gn(e)):Kl(ie,n.stateNode));break;case 4:r=ie,l=Ie,ie=n.stateNode.containerInfo,Ie=!0,lt(e,t,n),ie=r,Ie=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Qo(n,t,i),l=l.next}while(l!==r)}lt(e,t,n);break;case 1:if(!de&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,lt(e,t,n),de=r):lt(e,t,n);break;default:lt(e,t,n)}}function Xs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ff),t.forEach(function(r){var l=Kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Ie=!1;break e;case 3:ie=s.stateNode.containerInfo,Ie=!0;break e;case 4:ie=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(ie===null)throw Error(w(160));ac(o,i,l),ie=null,Ie=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){X(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cc(t,e),t=t.sibling}function cc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Be(e),r&4){try{Un(3,e,e.return),Sl(3,e)}catch(S){X(e,e.return,S)}try{Un(5,e,e.return)}catch(S){X(e,e.return,S)}}break;case 1:De(t,e),Be(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(De(t,e),Be(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var l=e.stateNode;try{Vn(l,"")}catch(S){X(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Tu(l,o),vo(s,i);var d=vo(s,o);for(i=0;i<a.length;i+=2){var y=a[i],m=a[i+1];y==="style"?Iu(l,m):y==="dangerouslySetInnerHTML"?Du(l,m):y==="children"?Vn(l,m):oi(l,y,m,d)}switch(s){case"input":po(l,o);break;case"textarea":Ru(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?en(l,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?en(l,!!o.multiple,o.defaultValue,!0):en(l,!!o.multiple,o.multiple?[]:"",!1))}l[qn]=o}catch(S){X(e,e.return,S)}}break;case 6:if(De(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){X(e,e.return,S)}}break;case 3:if(De(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(S){X(e,e.return,S)}break;case 4:De(t,e),Be(e);break;case 13:De(t,e),Be(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||($i=J())),r&4&&Xs(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||y,De(t,e),de=d):De(t,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(E=e,y=e.child;y!==null;){for(m=E=y;E!==null;){switch(h=E,v=h.child,h.tag){case 0:case 11:case 14:case 15:Un(4,h,h.return);break;case 1:Jt(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){X(r,n,S)}}break;case 5:Jt(h,h.return);break;case 22:if(h.memoizedState!==null){Zs(m);continue}}v!==null?(v.return=h,E=v):Zs(m)}y=y.sibling}e:for(y=null,m=e;;){if(m.tag===5){if(y===null){y=m;try{l=m.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Fu("display",i))}catch(S){X(e,e.return,S)}}}else if(m.tag===6){if(y===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(S){X(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;y===m&&(y=null),m=m.return}y===m&&(y=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),Be(e),r&4&&Xs(e);break;case 21:break;default:De(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vn(l,""),r.flags&=-33);var o=Gs(e);Go(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Gs(e);Yo(e,s,i);break;default:throw Error(w(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e,t,n){E=e,dc(e)}function dc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||_r;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||de;s=_r;var d=de;if(_r=i,(de=a)&&!d)for(E=l;E!==null;)i=E,a=i.child,i.tag===22&&i.memoizedState!==null?Js(l):a!==null?(a.return=i,E=a):Js(l);for(;o!==null;)E=o,dc(o),o=o.sibling;E=l,_r=s,de=d}bs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,E=o):bs(e)}}function bs(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Os(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Os(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var m=y.dehydrated;m!==null&&Gn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}de||t.flags&512&&Ko(t)}catch(h){X(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Zs(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Js(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){X(t,l,a)}}var o=t.return;try{Ko(t)}catch(a){X(t,o,a)}break;case 5:var i=t.return;try{Ko(t)}catch(a){X(t,i,a)}}}catch(a){X(t,t.return,a)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Af=Math.ceil,ul=nt.ReactCurrentDispatcher,Fi=nt.ReactCurrentOwner,Le=nt.ReactCurrentBatchConfig,O=0,oe=null,q=null,se=0,Se=0,qt=St(0),te=0,or=null,Ft=0,jl=0,Ii=0,Wn=null,ye=null,$i=0,pn=1/0,Ye=null,al=!1,Xo=null,gt=null,Pr=!1,ct=null,cl=0,Bn=0,bo=null,Ur=-1,Wr=0;function he(){return O&6?J():Ur!==-1?Ur:Ur=J()}function yt(e){return e.mode&1?O&2&&se!==0?se&-se:Sf.transition!==null?(Wr===0&&(Wr=Xu()),Wr):(e=F,e!==0||(e=window.event,e=e===void 0?16:na(e.type)),e):1}function Ue(e,t,n,r){if(50<Bn)throw Bn=0,bo=null,Error(w(185));sr(e,n,r),(!(O&2)||e!==oe)&&(e===oe&&(!(O&2)&&(jl|=n),te===4&&ut(e,se)),we(e,r),n===1&&O===0&&!(t.mode&1)&&(pn=J()+500,xl&&jt()))}function we(e,t){var n=e.callbackNode;wd(e,t);var r=Yr(e,e===oe?se:0);if(r===0)n!==null&&ss(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ss(n),t===1)e.tag===0?wf(qs.bind(null,e)):wa(qs.bind(null,e)),yf(function(){!(O&6)&&jt()}),n=null;else{switch(bu(r)){case 1:n=ci;break;case 4:n=Yu;break;case 16:n=Kr;break;case 536870912:n=Gu;break;default:n=Kr}n=xc(n,fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fc(e,t){if(Ur=-1,Wr=0,O&6)throw Error(w(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Yr(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dl(e,r);else{t=r;var l=O;O|=2;var o=hc();(oe!==e||se!==t)&&(Ye=null,pn=J()+500,Mt(e,t));do try{Bf();break}catch(s){pc(e,s)}while(!0);ji(),ul.current=o,O=l,q!==null?t=0:(oe=null,se=0,t=te)}if(t!==0){if(t===2&&(l=jo(e),l!==0&&(r=l,t=Zo(e,l))),t===1)throw n=or,Mt(e,0),ut(e,r),we(e,J()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!Uf(l)&&(t=dl(e,r),t===2&&(o=jo(e),o!==0&&(r=o,t=Zo(e,o))),t===1))throw n=or,Mt(e,0),ut(e,r),we(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Et(e,ye,Ye);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=$i+500-J(),10<t)){if(Yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Lo(Et.bind(null,e,ye,Ye),t);break}Et(e,ye,Ye);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Ae(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Af(r/1960))-r,10<r){e.timeoutHandle=Lo(Et.bind(null,e,ye,Ye),r);break}Et(e,ye,Ye);break;case 5:Et(e,ye,Ye);break;default:throw Error(w(329))}}}return we(e,J()),e.callbackNode===n?fc.bind(null,e):null}function Zo(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=dl(e,t),e!==2&&(t=ye,ye=n,t!==null&&Jo(t)),e}function Jo(e){ye===null?ye=e:ye.push.apply(ye,e)}function Uf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!We(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Ii,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function qs(e){if(O&6)throw Error(w(327));on();var t=Yr(e,0);if(!(t&1))return we(e,J()),null;var n=dl(e,t);if(e.tag!==0&&n===2){var r=jo(e);r!==0&&(t=r,n=Zo(e,r))}if(n===1)throw n=or,Mt(e,0),ut(e,t),we(e,J()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,ye,Ye),we(e,J()),null}function Ai(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(pn=J()+500,xl&&jt())}}function It(e){ct!==null&&ct.tag===0&&!(O&6)&&on();var t=O;O|=1;var n=Le.transition,r=F;try{if(Le.transition=null,F=1,e)return e()}finally{F=r,Le.transition=n,O=t,!(O&6)&&jt()}}function Ui(){Se=qt.current,W(qt)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gf(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(ki(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:dn(),W(xe),W(fe),zi();break;case 5:Pi(r);break;case 4:dn();break;case 13:W(K);break;case 19:W(K);break;case 10:Ni(r.type._context);break;case 22:case 23:Ui()}n=n.return}if(oe=e,q=e=vt(e.current,null),se=Se=t,te=0,or=null,Ii=jl=Ft=0,ye=Wn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Pt=null}return e}function pc(e,t){do{var n=q;try{if(ji(),Ir.current=sl,il){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}il=!1}if(Dt=0,le=ee=Y=null,An=!1,nr=0,Fi.current=null,n===null||n.return===null){te=1,or=t,q=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,y=s,m=y.tag;if(!(y.mode&1)&&(m===0||m===11||m===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var v=Us(i);if(v!==null){v.flags&=-257,Ws(v,i,s,o,t),v.mode&1&&As(o,d,t),t=v,a=d;var g=t.updateQueue;if(g===null){var S=new Set;S.add(a),t.updateQueue=S}else g.add(a);break e}else{if(!(t&1)){As(o,d,t),Wi();break e}a=Error(w(426))}}else if(V&&s.mode&1){var D=Us(i);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ws(D,i,s,o,t),wi(fn(a,s));break e}}o=a=fn(a,s),te!==4&&(te=2),Wn===null?Wn=[o]:Wn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=ba(o,a,t);Rs(o,f);break e;case 1:s=a;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(gt===null||!gt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Za(o,s,t);Rs(o,x);break e}}o=o.return}while(o!==null)}gc(n)}catch(j){t=j,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function hc(){var e=ul.current;return ul.current=sl,e===null?sl:e}function Wi(){(te===0||te===3||te===2)&&(te=4),oe===null||!(Ft&268435455)&&!(jl&268435455)||ut(oe,se)}function dl(e,t){var n=O;O|=2;var r=hc();(oe!==e||se!==t)&&(Ye=null,Mt(e,t));do try{Wf();break}catch(l){pc(e,l)}while(!0);if(ji(),O=n,ul.current=r,q!==null)throw Error(w(261));return oe=null,se=0,te}function Wf(){for(;q!==null;)mc(q)}function Bf(){for(;q!==null&&!fd();)mc(q)}function mc(e){var t=vc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?gc(e):q=t,Fi.current=null}function gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Df(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Of(n,t,Se),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Et(e,t,n){var r=F,l=Le.transition;try{Le.transition=null,F=1,Hf(e,t,n,r)}finally{Le.transition=l,F=r}return null}function Hf(e,t,n,r){do on();while(ct!==null);if(O&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sd(e,o),e===oe&&(q=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,xc(Kr,function(){return on(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var i=F;F=1;var s=O;O|=4,Fi.current=null,If(e,n),cc(n,e),af(zo),Gr=!!Po,zo=Po=null,e.current=n,$f(n),pd(),O=s,F=i,Le.transition=o}else e.current=n;if(Pr&&(Pr=!1,ct=e,cl=l),o=e.pendingLanes,o===0&&(gt=null),gd(n.stateNode),we(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(al)throw al=!1,e=Xo,Xo=null,e;return cl&1&&e.tag!==0&&on(),o=e.pendingLanes,o&1?e===bo?Bn++:(Bn=0,bo=e):Bn=0,jt(),null}function on(){if(ct!==null){var e=bu(cl),t=Le.transition,n=F;try{if(Le.transition=null,F=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,cl=0,O&6)throw Error(w(331));var l=O;for(O|=4,E=e.current;E!==null;){var o=E,i=o.child;if(E.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(E=d;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:Un(8,y,o)}var m=y.child;if(m!==null)m.return=y,E=m;else for(;E!==null;){y=E;var h=y.sibling,v=y.return;if(sc(y),y===d){E=null;break}if(h!==null){h.return=v,E=h;break}E=v}}}var g=o.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var D=S.sibling;S.sibling=null,S=D}while(S!==null)}}E=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,E=i;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Un(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,E=f;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){i=E;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,E=p;else e:for(i=c;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(j){X(s,s.return,j)}if(s===i){E=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,E=x;break e}E=s.return}}if(O=l,jt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{F=n,Le.transition=t}}return!1}function eu(e,t,n){t=fn(n,t),t=ba(e,t,1),e=mt(e,t,1),t=he(),e!==null&&(sr(e,1,t),we(e,t))}function X(e,t,n){if(e.tag===3)eu(e,e,n);else for(;t!==null;){if(t.tag===3){eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=fn(n,e),e=Za(t,e,1),t=mt(t,e,1),e=he(),t!==null&&(sr(t,1,e),we(t,e));break}}t=t.return}}function Vf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>J()-$i?Mt(e,0):Ii|=n),we(e,t)}function yc(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=he();e=et(e,t),e!==null&&(sr(e,t,n),we(e,n))}function Qf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yc(e,n)}function Kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),yc(e,n)}var vc;vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,Rf(e,t,n);ve=!!(e.flags&131072)}else ve=!1,V&&t.flags&1048576&&Sa(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=un(t,fe.current);ln(t,n),l=Li(null,t,r,e,l,n);var o=Ti();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,qr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ei(t),l.updater=wl,t.stateNode=l,l._reactInternals=t,$o(t,r,e,n),t=Wo(null,t,r,!0,o,n)):(t.tag=0,V&&o&&xi(t),pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Gf(r),e=Fe(r,e),l){case 0:t=Uo(null,t,r,e,n);break e;case 1:t=Vs(null,t,r,e,n);break e;case 11:t=Bs(null,t,r,e,n);break e;case 14:t=Hs(null,t,r,Fe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Uo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Vs(e,t,r,l,n);case 3:e:{if(tc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Pa(e,t),ll(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=fn(Error(w(423)),t),t=Qs(e,t,r,n,l);break e}else if(r!==l){l=fn(Error(w(424)),t),t=Qs(e,t,r,n,l);break e}else for(je=ht(t.stateNode.containerInfo.firstChild),Ne=t,V=!0,$e=null,n=Ea(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(an(),r===l){t=tt(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return za(t),e===null&&Do(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Mo(r,l)?i=null:o!==null&&Mo(r,o)&&(t.flags|=32),ec(e,t),pe(e,t,i,n),t.child;case 6:return e===null&&Do(t),null;case 13:return nc(e,t,n);case 4:return _i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Bs(e,t,r,l,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,A(nl,r._currentValue),r._currentValue=i,o!==null)if(We(o.value,i)){if(o.children===l.children&&!xe.current){t=tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Ze(-1,n&-n),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?a.next=a:(a.next=y.next,y.next=a),d.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fo(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Fo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,ln(t,n),l=Te(l),r=r(l),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),Hs(e,t,r,l,n);case 15:return Ja(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Ar(e,t),t.tag=1,ke(r)?(e=!0,qr(t)):e=!1,ln(t,n),Xa(t,r,l),$o(t,r,l,n),Wo(null,t,r,!0,e,n);case 19:return rc(e,t,n);case 22:return qa(e,t,n)}throw Error(w(156,t.tag))};function xc(e,t){return Ku(e,t)}function Yf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Yf(e,t,n,r)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return Bi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===si)return 11;if(e===ui)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Bi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ht:return Lt(n.children,l,o,t);case ii:i=8,l|=8;break;case so:return e=Me(12,n,t,l|2),e.elementType=so,e.lanes=o,e;case uo:return e=Me(13,n,t,l),e.elementType=uo,e.lanes=o,e;case ao:return e=Me(19,n,t,l),e.elementType=ao,e.lanes=o,e;case zu:return Nl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _u:i=10;break e;case Pu:i=9;break e;case si:i=11;break e;case ui:i=14;break e;case ot:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Me(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=Me(22,e,r,t),e.elementType=zu,e.lanes=n,e.stateNode={isHidden:!1},e}function eo(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function to(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Hi(e,t,n,r,l,o,i,s,a){return e=new Xf(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ei(o),e}function bf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kc(e){if(!e)return kt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ke(n))return ka(e,n,t)}return t}function wc(e,t,n,r,l,o,i,s,a){return e=Hi(n,r,!0,e,l,o,i,s,a),e.context=kc(null),n=e.current,r=he(),l=yt(n),o=Ze(r,l),o.callback=t??null,mt(n,o,l),e.current.lanes=l,sr(e,l,r),we(e,r),e}function Cl(e,t,n,r){var l=t.current,o=he(),i=yt(l);return n=kc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(l,t,i),e!==null&&(Ue(e,l,i,o),Fr(e,l,i)),i}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vi(e,t){tu(e,t),(e=e.alternate)&&tu(e,t)}function Zf(){return null}var Sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qi(e){this._internalRoot=e}El.prototype.render=Qi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Cl(e,t,null,null)};El.prototype.unmount=Qi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){Cl(null,e,null,null)}),t[qe]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=qu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&ta(e)}};function Ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nu(){}function Jf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=fl(i);o.call(d)}}var i=wc(t,r,e,0,null,!1,!1,"",nu);return e._reactRootContainer=i,e[qe]=i.current,Zn(e.nodeType===8?e.parentNode:e),It(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=fl(a);s.call(d)}}var a=Hi(e,0,!1,null,null,!1,!1,"",nu);return e._reactRootContainer=a,e[qe]=a.current,Zn(e.nodeType===8?e.parentNode:e),It(function(){Cl(t,a,n,r)}),a}function Pl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=fl(i);s.call(a)}}Cl(t,i,e,l)}else i=Jf(n,t,e,l,r);return fl(i)}Zu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(di(t,n|1),we(t,J()),!(O&6)&&(pn=J()+500,jt()))}break;case 13:It(function(){var r=et(e,1);if(r!==null){var l=he();Ue(r,e,1,l)}}),Vi(e,1)}};fi=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=he();Ue(t,e,134217728,n)}Vi(e,134217728)}};Ju=function(e){if(e.tag===13){var t=yt(e),n=et(e,t);if(n!==null){var r=he();Ue(n,e,t,r)}Vi(e,t)}};qu=function(){return F};ea=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ko=function(e,t,n){switch(t){case"input":if(po(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=vl(r);if(!l)throw Error(w(90));Lu(r),po(r,l)}}}break;case"textarea":Ru(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};Uu=Ai;Wu=It;var qf={usingClientEntryPoint:!1,Events:[ar,Yt,vl,$u,Au,Ai]},Pn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ep={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||Zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{hl=zr.inject(ep),Qe=zr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ki(t))throw Error(w(200));return bf(e,t,null,n)};Ee.createRoot=function(e,t){if(!Ki(e))throw Error(w(299));var n=!1,r="",l=Sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Hi(e,1,!1,null,null,n,!1,r,l),e[qe]=t.current,Zn(e.nodeType===8?e.parentNode:e),new Qi(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Vu(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return It(e)};Ee.hydrate=function(e,t,n){if(!_l(t))throw Error(w(200));return Pl(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Ki(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=wc(t,null,e,1,n??null,l,!1,o,i),e[qe]=t.current,Zn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)};Ee.render=function(e,t,n){if(!_l(t))throw Error(w(200));return Pl(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!_l(e))throw Error(w(40));return e._reactRootContainer?(It(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ai;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Pl(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc)}catch(e){console.error(e)}}jc(),ju.exports=Ee;var tp=ju.exports,ru=tp;oo.createRoot=ru.createRoot,oo.hydrateRoot=ru.hydrateRoot;/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rp=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),lu=e=>{const t=rp(e);return t.charAt(0).toUpperCase()+t.slice(1)},Nc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),lp=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var op={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=$.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:o,iconNode:i,...s},a)=>$.createElement("svg",{ref:a,...op,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Nc("lucide",l),...!o&&!lp(s)&&{"aria-hidden":"true"},...s},[...i.map(([d,y])=>$.createElement(d,y)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,t)=>{const n=$.forwardRef(({className:r,...l},o)=>$.createElement(ip,{ref:o,iconNode:t,className:Nc(`lucide-${np(lu(e))}`,`lucide-${e}`,r),...l}));return n.displayName=lu(e),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],up=I("bath",sp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],cp=I("briefcase",ap);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],fp=I("car",dp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Cc=I("circle-check-big",pp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],mp=I("gift",hp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]],yp=I("hand-helping",gp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],xp=I("handshake",vp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],wp=I("heart",kp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],jp=I("lock",Sp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],Cp=I("log-in",Np);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],_p=I("map",Ep);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],zp=I("menu",Pp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]],Lp=I("party-popper",Mp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]],Rp=I("salad",Tp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Dp=I("smile",Op);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ec=I("sparkles",Fp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],$p=I("star",Ip);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Up=I("sun",Ap);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Bp=I("timer",Wp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]],Vp=I("user-round-plus",Hp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Kp=I("user",Qp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],Gp=I("users-round",Yp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],bp=I("users",Xp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Jp=I("wand-sparkles",Zp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],eh=I("wifi",qp);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]],nh=I("wine",th);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],lh=I("wrench",rh),ou="/api",oh=[{label:"Amenities",icon:up},{label:"Room setup",icon:Jp},{label:"Food options",icon:Rp},{label:"Wi-Fi",icon:eh},{label:"Faster service",icon:Bp},{label:"Parking",icon:fp}],ih=[{label:"More amenities",icon:Ec},{label:"Family options",icon:Vp},{label:"Better dining",icon:nh},{label:"Local guide tips",icon:_p},{label:"Events",icon:Lp},{label:"Loyalty offers",icon:mp}],sh=[{label:"Business",icon:cp},{label:"Leisure",icon:Up},{label:"Both",icon:Ec}],uh=[{label:"Solo",icon:Kp},{label:"Family",icon:bp},{label:"Partner",icon:wp},{label:"Business partner",icon:xp},{label:"Friends",icon:Gp}],ah=[{label:"Excellent",icon:$p},{label:"Good",icon:Dp},{label:"Okay",icon:Cc},{label:"Needs improvement",icon:lh}],ch=[{title:"Review check-in",description:"Arrival details for your visit in a few simple steps.",icon:Cp,meta:"1 minute",action:"checkin"},{title:"Review check-out",description:"Share your stay experience and help us improve.",icon:yp,meta:"Quick feedback",action:"checkout"}],iu={guestName:"",anonymous:!1,from:"",stayReason:"",visitingWith:"",purpose:"",eventName:"",otherPurpose:""},su={overall:"",propertyFocus:[],liked:[],improve:[],future:[],note:""},dh="url(/hotel.jpg)",fh=["Step 1: Guest Info","Step 2: Visit Details","Step 3: Purpose"],ph=["Step 1: Stay Feedback","Step 2: Improvement Suggestions","Step 3: Review"],Tt="icon-class";function hh(){const[e,t]=$.useState(window.location.pathname==="/admin"?"admin":"guest"),[n,r]=$.useState("home"),[l,o]=$.useState(!1),[i,s]=$.useState(""),[a,d]=$.useState(0),[y,m]=$.useState(0),[h,v]=$.useState(iu),[g,S]=$.useState(su),[D,f]=$.useState([]),[c,p]=$.useState("all"),[x,j]=$.useState({startDate:"",endDate:"",granularity:"day"}),[_,C]=$.useState(""),[z,B]=$.useState(!1);$.useEffect(()=>{const k=()=>{const P=window.location.pathname==="/admin";t(P?"admin":"guest"),P||r("home")};return window.addEventListener("popstate",k),()=>window.removeEventListener("popstate",k)},[]),$.useEffect(()=>{e==="admin"&&l&&T()},[e]);const M=$.useMemo(()=>{let k=c==="all"?D:D.filter(Z=>Z.type===c);const{startDate:P,endDate:b}=x;if(P){const Z=new Date(P);k=k.filter(re=>new Date(re.createdAt)>=Z)}if(b){const Z=new Date(b);Z.setHours(23,59,59,999),k=k.filter(re=>new Date(re.createdAt)<=Z)}return k},[D,c,x]),ne=$.useMemo(()=>{const k=M.length,P=M.filter(Nt=>Nt.type==="checkin").length,b=M.filter(Nt=>Nt.type==="checkout").length,Z=new Set;let re=0,xn=0,fr=0;return M.forEach(Nt=>{const kn=Nt.payload||{};kn.guestName&&Z.add(kn.guestName.trim()),kn.anonymous&&(fr+=1);const Yi=(kn.stayReason||"").toLowerCase();Yi==="business"&&(re+=1),Yi==="leisure"&&(xn+=1);const Gi=(kn.purpose||"").toLowerCase();!re&&Gi.includes("conference")&&(re+=1),!xn&&Gi.includes("leisure")&&(xn+=1)}),{total:k,checkins:P,checkouts:b,uniqueGuests:Z.size,business:re,leisure:xn,anonymous:fr}},[M]),rt=$.useMemo(()=>{const k=h.from.trim().toLowerCase();if(!k)return[];const P=Object.entries(originSuggestions).find(([Z])=>k.includes(Z));if(P)return P[1];const b=h.from.trim();return[`${b}`,`${b}, USA`,`${b}, India`]},[h.from]);function Oe(){window.history.pushState({},"","/"),t("guest"),r("home"),C(""),o(!1)}function dr(k){C(""),r(k),d(0),m(0)}function zl(){v(iu),d(0)}function yn(){S(su),m(0)}function vn(k){v(P=>({...P,from:k}))}function N(k,P,b,Z=3){k(re=>{const fr=re[P].includes(b)?re[P].filter(Nt=>Nt!==b):[...re[P],b].slice(0,Z);return{...re,[P]:fr}})}async function L(k){const P=k==="checkin"?h:g;try{if(!(await fetch(`${ou}/submissions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:k,payload:P})})).ok)throw new Error("Unable to save form.");C(k==="checkin"?"Your check-in is complete.":"Your check-out review is complete."),k==="checkin"?zl():yn(),r("done")}catch(b){C(b.message)}}async function T(){B(!0);try{const k=await fetch(`${ou}/submissions`);if(!k.ok)throw new Error("Unable to load records.");const P=await k.json();f(P.records||[]),C("")}catch(k){C(k.message)}finally{B(!1)}}if(e==="admin")return l?u.jsxs(u.Fragment,{children:[u.jsx(ro,{}),u.jsx("div",{className:"admin-shell app-modern-shell",children:u.jsxs("main",{className:"admin-page",children:[u.jsx("header",{className:"admin-header glass-card admin-surface",children:u.jsxs("div",{className:"admin-header-top",children:[u.jsxs("div",{className:"brand-row",children:[u.jsx(uu,{}),u.jsxs("div",{children:[u.jsx("p",{className:"micro-label",children:"OC Hotel"}),u.jsx("h1",{children:"Admin panel"}),u.jsx("p",{className:"subtle-copy",children:"Simple record view for check-in and check-out submissions."})]})]}),u.jsx("div",{className:"admin-actions-small",children:u.jsx("button",{className:"ghost-button",onClick:T,type:"button",children:"Refresh"})})]})}),u.jsxs("section",{className:"admin-stats",children:[u.jsx(Wt,{label:"Total submissions",value:ne.total}),u.jsx(Wt,{label:"Unique guests",value:ne.uniqueGuests}),u.jsx(Wt,{label:"Check-ins",value:ne.checkins}),u.jsx(Wt,{label:"Check-outs",value:ne.checkouts}),u.jsx(Wt,{label:"Business visits",value:ne.business}),u.jsx(Wt,{label:"Leisure visits",value:ne.leisure})]}),u.jsx("section",{className:"glass-card admin-toolbar admin-surface",children:u.jsxs("div",{className:"toolbar-top",children:[u.jsx("div",{className:"segment-row",children:["all","checkin","checkout"].map(k=>u.jsx("button",{className:`segment-button ${c===k?"active":""}`,onClick:()=>p(k),type:"button",children:k==="all"?"All":k==="checkin"?"Check-ins":"Check-outs"},k))}),u.jsxs("div",{className:"filter-row",children:[u.jsxs("label",{children:["From",u.jsx("input",{type:"date",value:x.startDate,onChange:k=>j(P=>({...P,startDate:k.target.value}))})]}),u.jsxs("label",{children:["To",u.jsx("input",{type:"date",value:x.endDate,onChange:k=>j(P=>({...P,endDate:k.target.value}))})]}),u.jsxs("label",{children:["Group by",u.jsxs("select",{value:x.granularity,onChange:k=>j(P=>({...P,granularity:k.target.value})),children:[u.jsx("option",{value:"day",children:"Day"}),u.jsx("option",{value:"week",children:"Week"}),u.jsx("option",{value:"month",children:"Month"})]})]}),u.jsxs("div",{className:"filter-actions",children:[u.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j({startDate:"",endDate:"",granularity:"day"}),children:"Clear"}),u.jsx("button",{className:"primary-button soft",type:"button",onClick:T,children:"Refresh"})]})]})]})}),u.jsx("section",{className:"records-stack",children:z?u.jsx("div",{className:"glass-card empty-state admin-surface",children:"Loading records…"}):M.length===0?u.jsx("div",{className:"glass-card empty-state admin-surface",children:"No records available yet."}):u.jsxs(u.Fragment,{children:[u.jsx(yh,{records:M,granularity:x.granularity}),u.jsx(vh,{records:M})]})}),_&&u.jsx("p",{className:"status-line admin-status",children:_})]})})]}):u.jsxs(u.Fragment,{children:[u.jsx(ro,{}),u.jsx("div",{className:"admin-shell app-modern-shell",children:u.jsx("main",{className:"admin-page",children:u.jsxs("section",{className:"glass-card empty-state admin-surface",style:{maxWidth:560,margin:"40px auto",textAlign:"center"},children:[u.jsx("h2",{children:"Admin access"}),u.jsx("p",{className:"subtle-copy",children:"Enter the 4-digit PIN to view admin analytics."}),u.jsxs("div",{style:{marginTop:18,display:"flex",gap:8,justifyContent:"center"},children:[u.jsx("input",{type:"password",inputMode:"numeric",maxLength:6,placeholder:"Enter PIN",value:i,onChange:k=>s(k.target.value),style:{padding:"10px 12px",borderRadius:8,border:"1px solid rgba(15,23,42,0.06)",width:160}}),u.jsx("button",{className:"primary-button",onClick:()=>{i==="7311"?(o(!0),s(""),C(""),T()):C("Invalid PIN.")},type:"button",children:"Unlock"})]}),u.jsx("div",{style:{marginTop:12},children:u.jsx("button",{className:"ghost-button",onClick:Oe,type:"button",children:"Return to guest view"})}),_&&u.jsx("p",{className:"status-line",style:{marginTop:12},children:_})]})})})]});const H=n==="checkout"?ph:fh,Q=n==="checkout"?y:a;return u.jsxs(u.Fragment,{children:[u.jsx(ro,{}),u.jsx("div",{className:"guest-shell app-modern-shell",children:u.jsx("main",{className:"tablet-frame",children:u.jsxs("section",{className:`glass-card flow-wrapper modern-frame ${n==="home"?"home-mode":""}`,children:[n!=="home"&&n!=="done"&&u.jsx("div",{className:"timeline-wrap",children:H.map((k,P)=>u.jsxs("div",{className:"timeline-step",children:[u.jsx("div",{className:`timeline-dot ${P<Q?"done":P===Q?"active":""}`,children:P<Q?"✓":P+1}),u.jsx("span",{children:k}),P<H.length-1&&u.jsx("div",{className:`timeline-line ${P<Q?"done":""}`})]},k))}),n==="home"&&u.jsxs("section",{className:"home-panel modern-home-panel full-hero-home",children:[u.jsx("div",{className:"full-page-bg",style:{backgroundImage:dh}}),u.jsx("div",{className:"full-page-overlay"}),u.jsx("div",{className:"home-center-shell",children:u.jsxs("div",{className:"home-main-card",children:[u.jsxs("div",{className:"home-main-header",children:[u.jsx(uu,{}),u.jsxs("div",{className:"home-main-copy",children:[u.jsx("p",{className:"micro-label home-label",children:"Guest Experience Form"}),u.jsx("h2",{children:"Welcome to OC Hotel"}),u.jsx("p",{className:"subtle-copy",children:"We appreciate you sharing your information with us. Please choose check-in or check-out below."})]})]}),u.jsx("div",{className:"home-main-actions",children:ch.map(k=>{const P=k.icon;return u.jsxs("button",{className:"home-large-action-card",onClick:()=>dr(k.action),type:"button",children:[u.jsxs("div",{className:"home-large-action-top",children:[u.jsx("div",{className:"home-large-icon",children:u.jsx(P,{className:Tt,strokeWidth:2})}),u.jsx("span",{className:"home-large-meta",children:k.meta})]}),u.jsxs("div",{className:"home-large-action-copy",children:[u.jsx("h3",{children:k.title}),u.jsx("p",{children:k.description})]})]},k.action)})})]})})]}),n==="checkin"&&u.jsxs("section",{className:"form-flow",children:[u.jsx(au,{title:"Check-in",subtitle:"Quick guest details",onBack:Oe}),a===0&&u.jsxs("div",{className:"flow-stack",children:[u.jsxs(zn,{title:"Tell us who you are",subtitle:"Name is required unless you choose anonymous.",children:[u.jsxs("button",{className:"switch-row",onClick:()=>v(k=>({...k,anonymous:!k.anonymous,guestName:k.anonymous?k.guestName:""})),type:"button",children:[u.jsxs("div",{children:[u.jsx("strong",{children:"Anonymous guest"}),u.jsx("p",{children:"Choose this if you prefer not to share your name."})]}),u.jsx("div",{className:`switch-pill ${h.anonymous?"on":""}`,children:u.jsx("span",{})})]}),!h.anonymous&&u.jsxs("div",{className:"field-wrap",children:[u.jsx("label",{children:"Name"}),u.jsx("input",{value:h.guestName,onChange:k=>v(P=>({...P,guestName:k.target.value})),placeholder:"Enter your name"})]}),u.jsxs("div",{className:"field-wrap compact-gap",children:[u.jsxs("label",{children:["Where are you from? ",u.jsx("span",{className:"optional-tag",children:"Optional"})]}),u.jsx("input",{value:h.from,onChange:k=>v(P=>({...P,from:k.target.value})),placeholder:"City or country"})]}),rt.length>0&&u.jsx("div",{className:"suggestion-row",children:rt.slice(0,4).map(k=>u.jsx("button",{className:"mini-chip",onClick:()=>vn(k),type:"button",children:k},k))})]}),u.jsx("div",{className:"bottom-actions end-only",children:u.jsx("button",{className:"primary-button",onClick:()=>d(1),disabled:!h.anonymous&&!h.guestName.trim(),type:"button",children:"Continue"})})]}),a===1&&u.jsxs("div",{className:"flow-stack",children:[u.jsxs(zn,{title:"What brings you here?",subtitle:"Tap one option in each group.",children:[u.jsx(no,{label:"Reason for visit",value:h.stayReason,options:sh,onSelect:k=>v(P=>({...P,stayReason:k}))}),u.jsx(no,{label:"Who are you visiting with?",value:h.visitingWith,options:uh,onSelect:k=>v(P=>({...P,visitingWith:k}))})]}),u.jsxs("div",{className:"bottom-actions split-actions",children:[u.jsx("button",{className:"ghost-button",onClick:()=>d(0),type:"button",children:"Back"}),u.jsx("button",{className:"primary-button",onClick:()=>d(2),disabled:!h.stayReason||!h.visitingWith,type:"button",children:"Continue"})]})]}),a===2&&u.jsxs("div",{className:"flow-stack",children:[u.jsxs(zn,{title:"What is the main purpose?",subtitle:"Choose one option.",children:[u.jsx("div",{className:"purpose-grid square-grid",children:purposeOptions.map(k=>{const P=k.icon;return u.jsxs("button",{className:`purpose-card square-card ${h.purpose===k.value?"selected":""}`,onClick:()=>v(b=>({...b,purpose:k.value,eventName:"",otherPurpose:""})),type:"button",children:[u.jsx("span",{className:"icon-shell",children:u.jsx(P,{className:Tt,strokeWidth:1.9})}),u.jsx("strong",{children:k.label})]},k.value)})}),h.purpose==="event"&&u.jsxs("div",{className:"field-wrap reveal-block",children:[u.jsx("label",{children:"Event name"}),u.jsx("input",{value:h.eventName,onChange:k=>v(P=>({...P,eventName:k.target.value})),placeholder:"Add the event name"})]}),h.purpose==="something_else"&&u.jsxs("div",{className:"field-wrap reveal-block",children:[u.jsx("label",{children:"Tell us more"}),u.jsx("input",{value:h.otherPurpose,onChange:k=>v(P=>({...P,otherPurpose:k.target.value})),placeholder:"Add your purpose"})]})]}),u.jsxs("div",{className:"bottom-actions split-actions",children:[u.jsx("button",{className:"ghost-button",onClick:()=>d(1),type:"button",children:"Back"}),u.jsx("button",{className:"primary-button",onClick:()=>d(3),disabled:!h.purpose||h.purpose==="event"&&!h.eventName.trim()||h.purpose==="something_else"&&!h.otherPurpose.trim(),type:"button",children:"Review"})]})]}),a===3&&u.jsxs("div",{className:"flow-stack",children:[u.jsx(cu,{title:"Check-in review",rows:[["Guest",h.anonymous?"Anonymous guest":h.guestName||"—"],["From",h.from||"Not provided"],["Reason for visit",h.stayReason||"—"],["Visiting with",h.visitingWith||"—"],["Main purpose",mh(h.purpose)],["Event name",h.eventName||"—"],["More details",h.otherPurpose||"—"]]}),u.jsx(du,{}),u.jsxs("div",{className:"bottom-actions split-actions",children:[u.jsx("button",{className:"ghost-button",onClick:()=>d(2),type:"button",children:"Back"}),u.jsx("button",{className:"primary-button",onClick:()=>L("checkin"),type:"button",children:"Submit check-in"})]})]})]}),n==="checkout"&&u.jsxs("section",{className:"form-flow",children:[u.jsx(au,{title:"Check-out",subtitle:"Quick stay feedback",onBack:Oe}),y===0&&u.jsxs("div",{className:"flow-stack",children:[u.jsxs(zn,{title:"How was your stay?",subtitle:"Choose the options that fit best.",children:[u.jsx(no,{label:"Overall experience",value:g.overall,options:ah,onSelect:k=>S(P=>({...P,overall:k}))}),u.jsx(Mr,{label:"Which property areas stood out most?",values:g.propertyFocus,options:checkoutPropertyOptions,onToggle:k=>N(S,"propertyFocus",k,4)})]}),u.jsxs("div",{className:"bottom-actions split-actions",children:[u.jsx("button",{className:"ghost-button",onClick:Oe,type:"button",children:"Back"}),u.jsx("button",{className:"primary-button",onClick:()=>m(1),disabled:!g.overall||g.propertyFocus.length===0,type:"button",children:"Continue"})]})]}),y===1&&u.jsxs("div",{className:"flow-stack",children:[u.jsxs(zn,{title:"Help us improve",subtitle:"Pick a few areas so we can make better decisions.",children:[u.jsx(Mr,{label:"What did you like most?",values:g.liked,options:checkoutLikedOptions,onToggle:k=>N(S,"liked",k,4)}),u.jsx(Mr,{label:"What should we improve?",values:g.improve,options:oh,onToggle:k=>N(S,"improve",k,4)}),u.jsx(Mr,{label:"What would you like to see next time?",values:g.future,options:ih,onToggle:k=>N(S,"future",k,4)}),u.jsxs("div",{className:"field-wrap compact-gap",children:[u.jsxs("label",{children:["Anything else? ",u.jsx("span",{className:"optional-tag",children:"Optional"})]}),u.jsx("input",{value:g.note,onChange:k=>S(P=>({...P,note:k.target.value})),placeholder:"Short note"})]})]}),u.jsxs("div",{className:"bottom-actions split-actions",children:[u.jsx("button",{className:"ghost-button",onClick:()=>m(0),type:"button",children:"Back"}),u.jsx("button",{className:"primary-button",onClick:()=>m(2),type:"button",children:"Review"})]})]}),y===2&&u.jsxs("div",{className:"flow-stack",children:[u.jsx(cu,{title:"Check-out review",rows:[["Overall experience",g.overall||"—"],["Property areas",g.propertyFocus.join(", ")||"No selection"],["Liked most",g.liked.join(", ")||"No selection"],["Improve",g.improve.join(", ")||"No selection"],["Would like to see",g.future.join(", ")||"No selection"],["Comment",g.note||"—"]]}),u.jsx(du,{}),u.jsxs("div",{className:"bottom-actions split-actions",children:[u.jsx("button",{className:"ghost-button",onClick:()=>m(1),type:"button",children:"Back"}),u.jsx("button",{className:"primary-button",onClick:()=>L("checkout"),type:"button",children:"Submit check-out"})]})]})]}),n==="done"&&u.jsxs("section",{className:"done-panel modern-done-panel",children:[u.jsx("div",{className:"done-icon",children:u.jsx(Cc,{className:Tt,strokeWidth:2})}),u.jsx("p",{className:"micro-label",children:"OC Hotel"}),u.jsx("h2",{children:_||"Submitted successfully."}),u.jsx("p",{className:"subtle-copy",children:"Thank you. Your form has been submitted."}),u.jsx("div",{className:"bottom-actions center-actions",children:u.jsx("button",{className:"primary-button",onClick:Oe,type:"button",children:"Return to start"})})]}),_&&n!=="done"&&u.jsx("p",{className:"status-line",children:_})]})})})]})}function uu(){return u.jsx("div",{className:"logo-badge","aria-label":"OC Hotel logo",children:u.jsx("img",{src:"/logo.png",alt:"OC Hotel Logo",className:"logo-image"})})}function au({title:e,subtitle:t,onBack:n}){return u.jsxs("header",{className:"flow-header",children:[u.jsxs("div",{children:[u.jsx("p",{className:"micro-label",children:"OC Hotel"}),u.jsx("h2",{children:e}),u.jsx("p",{className:"subtle-copy",children:t})]}),u.jsxs("button",{className:"ghost-button header-home-button",onClick:n,type:"button",children:[u.jsx(zp,{className:Tt,strokeWidth:1.9}),u.jsx("span",{children:"Home"})]})]})}function zn({title:e,subtitle:t,children:n}){return u.jsxs("section",{className:"form-card",children:[u.jsxs("div",{className:"card-heading",children:[u.jsx("h3",{children:e}),u.jsx("p",{children:t})]}),n]})}function no({label:e,value:t,options:n,onSelect:r}){return u.jsxs("div",{className:"picker-block",children:[u.jsx("label",{children:e}),u.jsx("div",{className:"tile-picker-grid",children:n.map(l=>{const o=typeof l=="string"?{label:l,icon:null}:l,i=o.icon;return u.jsxs("button",{className:`pick-tile ${t===o.label?"selected":""}`,onClick:()=>r(o.label),type:"button",children:[u.jsx("span",{className:"icon-shell",children:i?u.jsx(i,{className:Tt,strokeWidth:1.9}):null}),u.jsx("strong",{children:o.label})]},o.label)})})]})}function Mr({label:e,values:t,options:n,onToggle:r}){return u.jsxs("div",{className:"picker-block",children:[u.jsx("label",{children:e}),u.jsx("div",{className:"tile-picker-grid multi-grid",children:n.map(l=>{const o=typeof l=="string"?{label:l,icon:null}:l,i=o.icon;return u.jsxs("button",{className:`pick-tile ${t.includes(o.label)?"selected":""}`,onClick:()=>r(o.label),type:"button",children:[u.jsx("span",{className:"icon-shell",children:i?u.jsx(i,{className:Tt,strokeWidth:1.9}):null}),u.jsx("strong",{children:o.label})]},o.label)})})]})}function cu({title:e,rows:t}){return u.jsxs("section",{className:"form-card review-card",children:[u.jsxs("div",{className:"card-heading",children:[u.jsx("h3",{children:e}),u.jsx("p",{children:"Please review before submitting."})]}),u.jsx("div",{className:"review-table",children:t.filter(([,n])=>n&&n!=="—").map(([n,r])=>u.jsxs("div",{className:"review-row",children:[u.jsx("span",{children:n}),u.jsx("strong",{children:r})]},n))})]})}function du(){return u.jsxs("section",{className:"privacy-note",children:[u.jsx("div",{className:"privacy-lock",children:u.jsx(jp,{className:Tt,strokeWidth:1.9})}),u.jsx("p",{children:"Your information is used solely to personalize your experience with us. We never share it with third parties."})]})}function Wt({label:e,value:t}){return u.jsxs("article",{className:"glass-card stat-card admin-surface",children:[u.jsx("span",{children:e}),u.jsx("strong",{children:t})]})}function mh(e){var t;return((t=purposeOptions.find(n=>n.value===e))==null?void 0:t.label)||"—"}function ro(){return u.jsx("style",{children:`
      :root {
        --bg: #f3f4f6;
        --card: rgba(255, 255, 255, 0.72);
        --card-solid: rgba(255, 255, 255, 0.92);
        --line: rgba(15, 23, 42, 0.08);
        --text: #0f172a;
        --muted: #5b6472;
        --accent: #111111;
        --accent-2: #ee6e15;
        --accent-soft: rgba(17, 17, 17, 0.04);
        --success: #117a4f;
        --shadow: 0 22px 80px rgba(15, 23, 42, 0.10);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: var(--text);
        background:
          radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.95), transparent 24%),
          radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.7), transparent 22%),
          linear-gradient(180deg, #e9edf2 0%, #f7f8fa 100%);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      button,
      input {
        font: inherit;
      }

      .app-modern-shell {
        position: relative;
        overflow: hidden;
        min-height: 100vh;
      }

      .app-modern-shell::before,
      .app-modern-shell::after {
        content: '';
        position: fixed;
        border-radius: 999px;
        filter: blur(22px);
        pointer-events: none;
        z-index: 0;
      }

      .app-modern-shell::before {
        width: 300px;
        height: 300px;
        top: -60px;
        left: -80px;
        background: rgba(255, 255, 255, 0.85);
      }

      .app-modern-shell::after {
        width: 340px;
        height: 340px;
        right: -100px;
        bottom: -100px;
        background: rgba(17, 17, 17, 0.05);
      }

      .guest-shell,
      .admin-shell {
        padding: 20px;
      }

      .tablet-frame,
      .admin-page {
        position: relative;
        z-index: 1;
        max-width: 980px;
        margin: 0 auto;
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.76);
        border: 1px solid rgba(255, 255, 255, 0.7);
        box-shadow: var(--shadow);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      .modern-frame {
        overflow: hidden;
        background: rgba(255, 255, 255, 0.54);
        border: 1px solid rgba(255, 255, 255, 0.68);
        min-height: calc(100vh - 56px);
        border-radius: 32px;
      }

      .home-mode {
        padding: 0;
      }

      .full-hero-home {
        min-height: calc(100vh - 56px);
        position: relative;
        overflow: hidden;
        padding: 0;
        border-radius: 32px;
      }

      .full-page-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transform: scale(1.03);
      }

      .full-page-overlay {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(180deg, rgba(8, 12, 18, 0.42) 0%, rgba(8, 12, 18, 0.24) 30%, rgba(8, 12, 18, 0.38) 100%);
      }

      .home-center-shell {
        position: relative;
        z-index: 2;
        min-height: calc(100vh - 56px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px;
      }

      .home-main-card {
        width: min(920px, 100%);
        background: rgba(255, 255, 255, 0.90);
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: 32px;
        box-shadow: 0 30px 80px rgba(15, 23, 42, 0.18);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        padding: 36px;
      }

      .home-main-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 28px;
      }

      .home-main-copy {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .home-main-copy h2 {
        margin: 0;
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.05;
        color: #111111;
      }

      .home-main-copy .subtle-copy {
        margin: 0;
        max-width: 640px;
        color: #4b5563;
        font-size: 1rem;
      }

      .home-label {
        color: var(--accent-2);
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-size: 0.76rem;
      }

      .home-main-actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
      }

      .home-large-action-card {
        min-height: 220px;
        border: 1px solid rgba(17, 17, 17, 0.08);
        border-radius: 26px;
        background: #ffffff;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        cursor: pointer;
      }

      .home-large-action-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
        border-color: rgba(238, 110, 21, 0.28);
      }

      .home-large-action-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
      }

      .home-large-icon {
        width: 64px;
        height: 64px;
        border-radius: 18px;
        background: rgba(17, 17, 17, 0.06);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .home-large-meta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        border-radius: 999px;
        background: var(--accent-2);
        color: #ffffff;
        font-size: 0.84rem;
        font-weight: 700;
        white-space: nowrap;
      }

      .home-large-action-copy h3 {
        margin: 0 0 10px;
        font-size: 1.45rem;
        color: #111111;
      }

      .home-large-action-copy p {
        margin: 0;
        color: #5b6472;
        font-size: 0.98rem;
        line-height: 1.5;
      }

      .logo-badge {
        width: 88px;
        height: 88px;
        border-radius: 24px;
        background: #ffffff;
        border: 1px solid rgba(17, 17, 17, 0.06);
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
      }

      .logo-image {
        width: 72%;
        height: 72%;
        object-fit: contain;
        display: block;
      }

      .app-icon {
        width: 20px;
        height: 20px;
        color: #111111;
        flex-shrink: 0;
      }

      .flow-wrapper {
        padding: 24px;
      }

      .flow-wrapper.home-mode {
  padding: 0;
}

      .flow-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 24px;
      }

      .flow-header h2,
      .card-heading h3 {
        margin: 0;
      }

      .micro-label {
        margin: 0 0 6px;
        color: #111111;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .subtle-copy {
        margin: 6px 0 0;
        color: var(--muted);
      }

      .header-home-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .timeline-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 24px;
        padding: 14px 18px;
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 20px;
      }

      .timeline-step {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        min-width: 0;
      }

      .timeline-step span {
        font-size: 0.92rem;
        font-weight: 600;
        color: #334155;
        white-space: nowrap;
      }

      .timeline-dot {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(17, 17, 17, 0.06);
        border: 1px solid rgba(17, 17, 17, 0.08);
        font-weight: 700;
        color: #111111;
        flex-shrink: 0;
      }

      .timeline-dot.active,
      .segment-button.active {
        background: var(--accent-2);
        border-color: var(--accent-2);
        color: #ffffff;
        box-shadow: 0 16px 30px rgba(17, 17, 17, 0.16);
      }

      .timeline-dot.done {
        background: #111111;
        border-color: #111111;
        color: white;
      }

      .timeline-line {
        flex: 1;
        height: 2px;
        background: rgba(15, 23, 42, 0.10);
        border-radius: 999px;
      }

      .timeline-line.done {
        background: #111111;
      }

      .form-flow,
      .flow-stack {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .form-card,
      .privacy-note,
      .switch-row,
      .admin-surface,
      .record-item pre {
        background: rgba(255, 255, 255, 0.76);
      }

      .form-card {
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 24px;
        padding: 22px;
        box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06);
      }

      .card-heading {
        margin-bottom: 18px;
      }

      .card-heading p {
        margin: 8px 0 0;
        color: var(--muted);
      }

      .field-wrap {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 16px;
      }

      .compact-gap {
        margin-top: 14px;
      }

      .reveal-block {
        margin-top: 18px;
      }

      label {
        font-size: 0.95rem;
        font-weight: 700;
        color: #111111;
      }

      .optional-tag {
        color: var(--muted);
        font-weight: 600;
        font-size: 0.85rem;
      }

      input {
        width: 100%;
        min-height: 52px;
        padding: 14px 16px;
        border-radius: 16px;
        border: 1px solid rgba(15, 23, 42, 0.10);
        background: rgba(255, 255, 255, 0.9);
        outline: none;
      }

      input:focus {
        border-color: rgba(238, 110, 21, 0.6);
        box-shadow: 0 0 0 4px rgba(238, 110, 21, 0.10);
      }

      .switch-row {
        width: 100%;
        text-align: left;
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 20px;
        padding: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 18px;
        cursor: pointer;
      }

      .switch-row strong {
        display: block;
        margin-bottom: 4px;
      }

      .switch-row p {
        margin: 0;
        color: var(--muted);
      }

      .switch-pill {
        width: 58px;
        height: 34px;
        border-radius: 999px;
        background: rgba(17, 17, 17, 0.08);
        display: flex;
        align-items: center;
        padding: 4px;
        transition: 0.2s ease;
        flex-shrink: 0;
      }

      .switch-pill span {
        width: 26px;
        height: 26px;
        border-radius: 999px;
        background: white;
        box-shadow: 0 4px 10px rgba(15, 23, 42, 0.14);
        transition: 0.2s ease;
      }

      .switch-pill.on {
        background: rgba(17, 17, 17, 0.12);
        justify-content: flex-end;
      }

      .switch-pill.on span {
        background: #111111;
      }

      .picker-block {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .picker-block + .picker-block {
        margin-top: 18px;
      }

      .tile-picker-grid,
      .purpose-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
      }

      .multi-grid,
      .square-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .pick-tile,
      .purpose-card {
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 22px;
        background: rgba(255, 255, 255, 0.88);
        padding: 18px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
        text-align: left;
        cursor: pointer;
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
      }

      .pick-tile strong,
      .purpose-card strong {
        font-size: 0.98rem;
        color: #111111;
      }

      .icon-shell,
      .privacy-lock,
      .tile-icon {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background: rgba(17, 17, 17, 0.06) !important;
        color: #111111 !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .pick-tile.selected,
      .purpose-card.selected {
        background: rgba(17, 17, 17, 0.04);
        border-color: rgba(17, 17, 17, 0.16);
        box-shadow: 0 12px 28px rgba(17, 17, 17, 0.08);
      }

      .suggestion-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 14px;
      }

      .mini-chip {
        border: 1px solid rgba(15, 23, 42, 0.08);
        background: rgba(255, 255, 255, 0.92);
        padding: 10px 14px;
        border-radius: 999px;
        cursor: pointer;
      }

      .bottom-actions {
        display: flex;
        gap: 12px;
      }

      .split-actions {
        justify-content: space-between;
      }

      .end-only {
        justify-content: flex-end;
      }

      .center-actions {
        justify-content: center;
      }

      .primary-button,
      .ghost-button,
      .segment-button {
        min-height: 50px;
        padding: 12px 18px;
        border-radius: 16px;
        border: 1px solid transparent;
        cursor: pointer;
        transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .primary-button {
        background: #111111;
        border-color: #111111;
        color: #ffffff;
        box-shadow: 0 16px 30px rgba(17, 17, 17, 0.16);
      }

      .primary-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .ghost-button {
        background: rgba(255, 255, 255, 0.78);
        border-color: rgba(15, 23, 42, 0.08);
        color: #111111;
      }

      .choice-tile:hover,
      .pick-tile:hover,
      .purpose-card:hover,
      .ghost-button:hover,
      .primary-button:hover,
      .mini-chip:hover,
      .segment-button:hover,
      .switch-row:hover {
        transform: translateY(-2px);
      }

      .review-card .review-table {
        display: grid;
        gap: 12px;
      }

      .review-row {
        display: flex;
        justify-content: space-between;
        gap: 18px;
        padding: 14px 0;
        border-bottom: 1px solid rgba(15, 23, 42, 0.08);
      }

      .review-row:last-child {
        border-bottom: none;
      }

      .review-row span {
        color: var(--muted);
      }

      .review-row strong {
        color: #111111;
        text-align: right;
      }

      .privacy-note {
        border: 1px solid rgba(15, 23, 42, 0.08);
        border-radius: 22px;
        padding: 18px;
        display: flex;
        align-items: center;
        gap: 14px;
      }

      .privacy-note p {
        margin: 0;
        color: var(--muted);
      }

      .done-panel {
        min-height: 680px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 32px;
      }

      .done-icon {
        width: 84px;
        height: 84px;
        border-radius: 24px;
        background: rgba(17, 17, 17, 0.06);
        color: #111111;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 18px;
      }

      .status-line {
        margin-top: 16px;
        color: #b42318;
        font-weight: 700;
      }

      .admin-header {
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 35vh;
        box-sizing: border-box;
        border-radius: 28px;
      }

      .admin-header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }

      .brand-row {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .admin-actions-small {
        display: flex;
        gap: 8px;
      }

      .admin-header-bottom {
        display: flex;
        gap: 16px;
        margin-top: 18px;
        align-items: stretch;
        flex: 1 1 auto;
      }

      .large-action-button {
        flex: 1 1 0;
        border: none;
        padding: 18px 22px;
        border-radius: 12px;
        font-size: 1.05rem;
        font-weight: 700;
        background: var(--accent-2);
        color: white;
        box-shadow: 0 12px 30px rgba(17,17,17,0.12);
        cursor: pointer;
      }

      .large-action-button.secondary {
        background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.9));
        color: var(--text);
        border: 1px solid rgba(17,17,17,0.06);
      }

      .admin-stats {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin: 18px 0;
      }

      .stat-card {
        padding: 18px;
        border-radius: 22px;
        border: 1px solid rgba(15, 23, 42, 0.08);
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .stat-card span {
        color: var(--muted);
      }

      .stat-card strong {
        font-size: 1.8rem;
      }

      .admin-toolbar {
        padding: 16px;
        border-radius: 24px;
        margin-bottom: 16px;
      }

      .toolbar-top {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .filter-row {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }

      .filter-row label {
        display: inline-flex;
        flex-direction: column;
        font-size: 0.85rem;
        gap: 6px;
      }

      .filter-row input[type="date"],
      .filter-row select {
        padding: 8px 10px;
        border-radius: 8px;
        border: 1px solid rgba(15,23,42,0.06);
        background: #fff;
      }

      .filter-actions {
        margin-left: auto;
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .segment-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .segment-button {
        background: rgba(255, 255, 255, 0.78);
        border-color: rgba(15, 23, 42, 0.08);
        color: #111111;
      }

      .records-stack {
        display: grid;
        gap: 14px;
      }

      .record-item {
        border-radius: 22px;
        padding: 18px;
        border: 1px solid rgba(15, 23, 42, 0.08);
      }

      .record-head {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        align-items: center;
        margin-bottom: 12px;
      }

      .record-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 30px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 0.82rem;
        font-weight: 800;
        text-transform: capitalize;
      }

      .record-pill.checkin {
        background: rgba(17, 122, 79, 0.10);
        color: #117a4f;
      }

      .record-pill.checkout {
        background: rgba(238, 110, 21, 0.12);
        color: #c85608;
      }

      .record-time {
        color: var(--muted);
        font-size: 0.92rem;
      }

      .record-item pre {
        margin: 0;
        padding: 14px;
        border-radius: 16px;
        overflow: auto;
        border: 1px solid rgba(15, 23, 42, 0.06);
        white-space: pre-wrap;
        word-break: break-word;
      }

      .empty-state {
        padding: 24px;
        border-radius: 22px;
        text-align: center;
      }

      .analytics-panel {
        padding: 16px;
        border-radius: 18px;
      }

      .analytics-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        align-items: start;
      }

      .analytics-trend {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 12px;
        margin-top: 12px;
      }

      .analytics-card {
        padding: 12px;
        border-radius: 12px;
        background: rgba(255,255,255,0.96);
        border: 1px solid rgba(15,23,42,0.04);
      }

      .records-table table {
        width: 100%;
        border-collapse: collapse;
      }

      .records-table th,
      .records-table td {
        text-align: left;
        padding: 10px 12px;
        border-bottom: 1px solid rgba(15,23,42,0.04);
        font-size: 0.95rem;
      }

      .records-table tr:hover td {
        background: rgba(17,17,17,0.02);
      }

      @media (max-width: 900px) {
        .home-main-actions,
        .tile-picker-grid,
        .purpose-grid,
        .admin-stats {
          grid-template-columns: 1fr;
        }

        .home-main-card {
          padding: 24px;
        }

        .guest-shell,
        .admin-shell {
          padding: 14px;
        }

        .modern-frame,
        .full-hero-home {
          min-height: calc(100vh - 28px);
        }
      }

      @media (max-width: 680px) {
        .home-main-header,
        .brand-row,
        .admin-header-top,
        .flow-header,
        .review-row,
        .privacy-note {
          flex-direction: column;
          align-items: flex-start;
        }

        .home-center-shell {
          padding: 16px;
        }

        .home-main-card {
          border-radius: 24px;
          padding: 20px;
        }

        .home-large-action-card {
          min-height: 180px;
        }

        .timeline-wrap {
          flex-direction: column;
          align-items: stretch;
        }

        .timeline-step {
          width: 100%;
        }

        .timeline-line {
          display: none;
        }

        .bottom-actions.split-actions {
          flex-direction: column;
        }

        .admin-header {
          height: auto;
        }

        .admin-header-bottom {
          flex-direction: column;
        }
      }
    `})}function lo({data:e=[],height:t=120}){const n=Math.max(1,...e.map(o=>o.value)),r=8,l=Math.max(20,Math.floor((300-r*(e.length-1))/e.length));return u.jsx("svg",{width:"100%",height:t,viewBox:`0 0 ${e.length*(l+r)} ${t}`,preserveAspectRatio:"none",children:e.map((o,i)=>{const s=l,a=i*(s+r),d=Math.round(o.value/n*(t-24)),y=t-d-20;return u.jsxs("g",{children:[u.jsx("rect",{x:a,y,width:s,height:d,rx:"6",fill:"var(--accent-2)"}),u.jsx("text",{x:a+s/2,y:t-6,fontSize:"11",fill:"#222",textAnchor:"middle",children:o.label})]},o.label)})})}function gh({data:e=[],height:t=120}){if(!e||e.length===0)return null;const n=Math.max(1,...e.map(o=>o.value)),r=Math.max(300,e.length*36),l=e.map((o,i)=>{const s=i*(r/Math.max(1,e.length-1)),a=t-o.value/n*(t-24)-12;return`${s},${a}`}).join(" ");return u.jsxs("svg",{width:"100%",height:t,viewBox:`0 0 ${r} ${t}`,preserveAspectRatio:"none",children:[u.jsx("polyline",{fill:"none",stroke:"var(--accent-2)",strokeWidth:"3",points:l,strokeLinecap:"round",strokeLinejoin:"round"}),e.map((o,i)=>{const s=i*(r/Math.max(1,e.length-1)),a=t-o.value/n*(t-24)-12;return u.jsx("circle",{cx:s,cy:a,r:4,fill:"var(--accent-2)"},o.label)})]})}function yh({records:e,granularity:t="day"}){const n=e.length,r=e.reduce((v,g)=>(v[g.type]=(v[g.type]||0)+1,v),{}),l={},o={},i={};e.forEach(v=>{const g=v.payload||{};v.type==="checkin"?g.from&&(l[g.from]=(l[g.from]||0)+1):v.type==="checkout"&&(g.overall&&(o[g.overall]=(o[g.overall]||0)+1),(g.propertyFocus||[]).forEach(S=>{i[S]=(i[S]||0)+1}))});const s=Object.entries(r).map(([v,g])=>({label:v,value:g})),a=Object.entries(o).map(([v,g])=>({label:v,value:g})),d=Object.entries(i).map(([v,g])=>({label:v,value:g}));function y(v){const g=new Date(v);if(t==="month")return`${g.getFullYear()}-${String(g.getMonth()+1).padStart(2,"0")}`;if(t==="week"){const S=new Date(g.getFullYear(),0,1),D=Math.ceil(((g-S)/864e5+S.getDay()+1)/7);return`${g.getFullYear()}-W${String(D).padStart(2,"0")}`}return`${g.getFullYear()}-${String(g.getMonth()+1).padStart(2,"0")}-${String(g.getDate()).padStart(2,"0")}`}const m={};e.forEach(v=>{const g=y(v.createdAt);m[g]=(m[g]||0)+1});const h=Object.keys(m).sort().map(v=>({label:v,value:m[v]}));return u.jsxs("section",{className:"glass-card analytics-panel admin-surface",children:[u.jsxs("div",{className:"analytics-grid",children:[u.jsxs("div",{className:"analytics-card",children:[u.jsx("h4",{children:"Total submissions"}),u.jsx("strong",{style:{fontSize:28},children:n}),u.jsx("p",{className:"subtle-copy",children:"Submissions by type"}),u.jsx("div",{style:{width:"100%",height:120},children:u.jsx(lo,{data:s,height:120})})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsx("h4",{children:"Overall experience"}),u.jsx("p",{className:"subtle-copy",children:"Distribution from check-outs"}),u.jsx("div",{style:{width:"100%",height:120},children:u.jsx(lo,{data:a.length?a:[{label:"—",value:1}],height:120})})]}),u.jsxs("div",{className:"analytics-card",children:[u.jsx("h4",{children:"Top property mentions"}),u.jsx("p",{className:"subtle-copy",children:"Frequently highlighted areas"}),u.jsx("div",{style:{width:"100%",height:120},children:u.jsx(lo,{data:d.length?d:[{label:"—",value:1}],height:120})})]})]}),u.jsxs("div",{style:{marginTop:12},className:"analytics-trend",children:[u.jsxs("div",{className:"analytics-card",style:{padding:14},children:[u.jsxs("h4",{children:["Trend (",t,")"]}),u.jsx("p",{className:"subtle-copy",children:"Submissions over time"}),u.jsx("div",{style:{width:"100%",height:120},children:u.jsx(gh,{data:h.length?h:[{label:"-",value:1}],height:120})})]}),u.jsxs("div",{className:"analytics-card",style:{padding:14},children:[u.jsx("h4",{children:"Purpose breakdown"}),u.jsx("p",{className:"subtle-copy",children:"What guests reported"}),u.jsx("div",{children:Object.entries(l).slice(0,6).map(([v,g])=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[u.jsx("div",{style:{width:120},children:v}),u.jsx("div",{style:{flex:1,height:10,background:"rgba(0,0,0,0.06)",borderRadius:6},children:u.jsx("div",{style:{width:`${Math.min(100,g/Math.max(1,n)*100)}%`,height:"100%",background:"var(--accent-2)",borderRadius:6}})}),u.jsx("div",{style:{width:36,textAlign:"right",fontSize:12},children:g})]},v))})]})]})]})}function vh({records:e}){return u.jsx("section",{className:"glass-card records-table admin-surface",children:u.jsxs("table",{children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"Type"}),u.jsx("th",{children:"Date"}),u.jsx("th",{children:"Guest"}),u.jsx("th",{children:"From"}),u.jsx("th",{children:"Summary"})]})}),u.jsx("tbody",{children:e.map(t=>{const n=t.payload||{},r=new Date(t.createdAt).toLocaleString(),l=n.guestName||(n.anonymous?"Anonymous":"—"),o=n.from||n.note||"—",i=t.type==="checkin"?`${n.stayReason||"—"} • ${n.purpose?n.purpose.replace("_"," "):"—"}`:`${n.overall||"—"} • ${(n.liked||[]).slice(0,2).join(", ")||"—"}`;return u.jsxs("tr",{children:[u.jsx("td",{className:`record-pill small ${t.type}`,children:t.type}),u.jsx("td",{children:r}),u.jsx("td",{children:l}),u.jsx("td",{children:o}),u.jsx("td",{children:i})]},t.id)})})]})})}oo.createRoot(document.getElementById("root")).render(u.jsx(Hc.StrictMode,{children:u.jsx(hh,{})}));
