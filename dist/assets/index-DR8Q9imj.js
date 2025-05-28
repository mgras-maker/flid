var qj=Object.defineProperty;var Xj=(t,i,r)=>i in t?qj(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r;var Pn=(t,i,r)=>Xj(t,typeof i!="symbol"?i+"":i,r);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();function ts(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ef={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function Fj(){if(yy)return zo;yy=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var g in l)g!=="key"&&(u[g]=l[g])}else u=l;return l=u.ref,{$$typeof:t,type:s,key:f,ref:l!==void 0?l:null,props:u}}return zo.Fragment=i,zo.jsx=r,zo.jsxs=r,zo}var vy;function Ij(){return vy||(vy=1,ef.exports=Fj()),ef.exports}var h=Ij(),tf={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function Kj(){if(xy)return he;xy=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function j(A){return A===null||typeof A!="object"?null:(A=b&&A[b]||A["@@iterator"],typeof A=="function"?A:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,O={};function L(A,G,Z){this.props=A,this.context=G,this.refs=O,this.updater=Z||z}L.prototype.isReactComponent={},L.prototype.setState=function(A,G){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,G,"setState")},L.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function C(){}C.prototype=L.prototype;function V(A,G,Z){this.props=A,this.context=G,this.refs=O,this.updater=Z||z}var D=V.prototype=new C;D.constructor=V,T(D,L.prototype),D.isPureReactComponent=!0;var X=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function K(A,G,Z,Q,ie,pe){return Z=pe.ref,{$$typeof:t,type:A,key:G,ref:Z!==void 0?Z:null,props:pe}}function ee(A,G){return K(A.type,G,void 0,void 0,void 0,A.props)}function le(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function be(A){var G={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Z){return G[Z]})}var Be=/\/+/g;function _e(A,G){return typeof A=="object"&&A!==null&&A.key!=null?be(""+A.key):G.toString(36)}function zt(){}function bt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(zt,zt):(A.status="pending",A.then(function(G){A.status==="pending"&&(A.status="fulfilled",A.value=G)},function(G){A.status==="pending"&&(A.status="rejected",A.reason=G)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Ye(A,G,Z,Q,ie){var pe=typeof A;(pe==="undefined"||pe==="boolean")&&(A=null);var re=!1;if(A===null)re=!0;else switch(pe){case"bigint":case"string":case"number":re=!0;break;case"object":switch(A.$$typeof){case t:case i:re=!0;break;case y:return re=A._init,Ye(re(A._payload),G,Z,Q,ie)}}if(re)return ie=ie(A),re=Q===""?"."+_e(A,0):Q,X(ie)?(Z="",re!=null&&(Z=re.replace(Be,"$&/")+"/"),Ye(ie,G,Z,"",function(oe){return oe})):ie!=null&&(le(ie)&&(ie=ee(ie,Z+(ie.key==null||A&&A.key===ie.key?"":(""+ie.key).replace(Be,"$&/")+"/")+re)),G.push(ie)),1;re=0;var We=Q===""?".":Q+":";if(X(A))for(var q=0;q<A.length;q++)Q=A[q],pe=We+_e(Q,q),re+=Ye(Q,G,Z,pe,ie);else if(q=j(A),typeof q=="function")for(A=q.call(A),q=0;!(Q=A.next()).done;)Q=Q.value,pe=We+_e(Q,q++),re+=Ye(Q,G,Z,pe,ie);else if(pe==="object"){if(typeof A.then=="function")return Ye(bt(A),G,Z,Q,ie);throw G=String(A),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return re}function U(A,G,Z){if(A==null)return A;var Q=[],ie=0;return Ye(A,Q,"","",function(pe){return G.call(Z,pe,ie++)}),Q}function I(A){if(A._status===-1){var G=A._result;G=G(),G.then(function(Z){(A._status===0||A._status===-1)&&(A._status=1,A._result=Z)},function(Z){(A._status===0||A._status===-1)&&(A._status=2,A._result=Z)}),A._status===-1&&(A._status=0,A._result=G)}if(A._status===1)return A._result.default;throw A._result}var te=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function fe(){}return he.Children={map:U,forEach:function(A,G,Z){U(A,function(){G.apply(this,arguments)},Z)},count:function(A){var G=0;return U(A,function(){G++}),G},toArray:function(A){return U(A,function(G){return G})||[]},only:function(A){if(!le(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},he.Component=L,he.Fragment=r,he.Profiler=l,he.PureComponent=V,he.StrictMode=s,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,he.__COMPILER_RUNTIME={__proto__:null,c:function(A){return P.H.useMemoCache(A)}},he.cache=function(A){return function(){return A.apply(null,arguments)}},he.cloneElement=function(A,G,Z){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Q=T({},A.props),ie=A.key,pe=void 0;if(G!=null)for(re in G.ref!==void 0&&(pe=void 0),G.key!==void 0&&(ie=""+G.key),G)!F.call(G,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&G.ref===void 0||(Q[re]=G[re]);var re=arguments.length-2;if(re===1)Q.children=Z;else if(1<re){for(var We=Array(re),q=0;q<re;q++)We[q]=arguments[q+2];Q.children=We}return K(A.type,ie,void 0,void 0,pe,Q)},he.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},he.createElement=function(A,G,Z){var Q,ie={},pe=null;if(G!=null)for(Q in G.key!==void 0&&(pe=""+G.key),G)F.call(G,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ie[Q]=G[Q]);var re=arguments.length-2;if(re===1)ie.children=Z;else if(1<re){for(var We=Array(re),q=0;q<re;q++)We[q]=arguments[q+2];ie.children=We}if(A&&A.defaultProps)for(Q in re=A.defaultProps,re)ie[Q]===void 0&&(ie[Q]=re[Q]);return K(A,pe,void 0,void 0,null,ie)},he.createRef=function(){return{current:null}},he.forwardRef=function(A){return{$$typeof:g,render:A}},he.isValidElement=le,he.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:I}},he.memo=function(A,G){return{$$typeof:p,type:A,compare:G===void 0?null:G}},he.startTransition=function(A){var G=P.T,Z={};P.T=Z;try{var Q=A(),ie=P.S;ie!==null&&ie(Z,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(fe,te)}catch(pe){te(pe)}finally{P.T=G}},he.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},he.use=function(A){return P.H.use(A)},he.useActionState=function(A,G,Z){return P.H.useActionState(A,G,Z)},he.useCallback=function(A,G){return P.H.useCallback(A,G)},he.useContext=function(A){return P.H.useContext(A)},he.useDebugValue=function(){},he.useDeferredValue=function(A,G){return P.H.useDeferredValue(A,G)},he.useEffect=function(A,G,Z){var Q=P.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(A,G)},he.useId=function(){return P.H.useId()},he.useImperativeHandle=function(A,G,Z){return P.H.useImperativeHandle(A,G,Z)},he.useInsertionEffect=function(A,G){return P.H.useInsertionEffect(A,G)},he.useLayoutEffect=function(A,G){return P.H.useLayoutEffect(A,G)},he.useMemo=function(A,G){return P.H.useMemo(A,G)},he.useOptimistic=function(A,G){return P.H.useOptimistic(A,G)},he.useReducer=function(A,G,Z){return P.H.useReducer(A,G,Z)},he.useRef=function(A){return P.H.useRef(A)},he.useState=function(A){return P.H.useState(A)},he.useSyncExternalStore=function(A,G,Z){return P.H.useSyncExternalStore(A,G,Z)},he.useTransition=function(){return P.H.useTransition()},he.version="19.1.0",he}var by;function Ah(){return by||(by=1,tf.exports=Kj()),tf.exports}var S=Ah();const nt=ts(S);var nf={exports:{}},So={},af={exports:{}},rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function Zj(){return wy||(wy=1,function(t){function i(U,I){var te=U.length;U.push(I);e:for(;0<te;){var fe=te-1>>>1,A=U[fe];if(0<l(A,I))U[fe]=I,U[te]=A,te=fe;else break e}}function r(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var I=U[0],te=U.pop();if(te!==I){U[0]=te;e:for(var fe=0,A=U.length,G=A>>>1;fe<G;){var Z=2*(fe+1)-1,Q=U[Z],ie=Z+1,pe=U[ie];if(0>l(Q,te))ie<A&&0>l(pe,Q)?(U[fe]=pe,U[ie]=te,fe=ie):(U[fe]=Q,U[Z]=te,fe=Z);else if(ie<A&&0>l(pe,te))U[fe]=pe,U[ie]=te,fe=ie;else break e}}return I}function l(U,I){var te=U.sortIndex-I.sortIndex;return te!==0?te:U.id-I.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();t.unstable_now=function(){return f.now()-g}}var m=[],p=[],y=1,b=null,j=3,z=!1,T=!1,O=!1,L=!1,C=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function X(U){for(var I=r(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=U)s(p),I.sortIndex=I.expirationTime,i(m,I);else break;I=r(p)}}function P(U){if(O=!1,X(U),!T)if(r(m)!==null)T=!0,F||(F=!0,_e());else{var I=r(p);I!==null&&Ye(P,I.startTime-U)}}var F=!1,K=-1,ee=5,le=-1;function be(){return L?!0:!(t.unstable_now()-le<ee)}function Be(){if(L=!1,F){var U=t.unstable_now();le=U;var I=!0;try{e:{T=!1,O&&(O=!1,V(K),K=-1),z=!0;var te=j;try{t:{for(X(U),b=r(m);b!==null&&!(b.expirationTime>U&&be());){var fe=b.callback;if(typeof fe=="function"){b.callback=null,j=b.priorityLevel;var A=fe(b.expirationTime<=U);if(U=t.unstable_now(),typeof A=="function"){b.callback=A,X(U),I=!0;break t}b===r(m)&&s(m),X(U)}else s(m);b=r(m)}if(b!==null)I=!0;else{var G=r(p);G!==null&&Ye(P,G.startTime-U),I=!1}}break e}finally{b=null,j=te,z=!1}I=void 0}}finally{I?_e():F=!1}}}var _e;if(typeof D=="function")_e=function(){D(Be)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,bt=zt.port2;zt.port1.onmessage=Be,_e=function(){bt.postMessage(null)}}else _e=function(){C(Be,0)};function Ye(U,I){K=C(function(){U(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return j},t.unstable_next=function(U){switch(j){case 1:case 2:case 3:var I=3;break;default:I=j}var te=j;j=I;try{return U()}finally{j=te}},t.unstable_requestPaint=function(){L=!0},t.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=j;j=U;try{return I()}finally{j=te}},t.unstable_scheduleCallback=function(U,I,te){var fe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?fe+te:fe):te=fe,U){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=te+A,U={id:y++,callback:I,priorityLevel:U,startTime:te,expirationTime:A,sortIndex:-1},te>fe?(U.sortIndex=te,i(p,U),r(m)===null&&U===r(p)&&(O?(V(K),K=-1):O=!0,Ye(P,te-fe))):(U.sortIndex=A,i(m,U),T||z||(T=!0,F||(F=!0,_e()))),U},t.unstable_shouldYield=be,t.unstable_wrapCallback=function(U){var I=j;return function(){var te=j;j=I;try{return U.apply(this,arguments)}finally{j=te}}}}(rf)),rf}var jy;function Qj(){return jy||(jy=1,af.exports=Zj()),af.exports}var of={exports:{}},gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy;function Wj(){if(zy)return gt;zy=1;var t=Ah();function i(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:p,implementation:y}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,gt.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return u(m,p,null,y)},gt.flushSync=function(m){var p=f.T,y=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=y,s.d.f()}},gt.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},gt.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},gt.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,b=g(y,p.crossOrigin),j=typeof p.integrity=="string"?p.integrity:void 0,z=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:j,fetchPriority:z}):y==="script"&&s.d.X(m,{crossOrigin:b,integrity:j,fetchPriority:z,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},gt.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=g(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},gt.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,b=g(y,p.crossOrigin);s.d.L(m,y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},gt.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=g(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},gt.requestFormReset=function(m){s.d.r(m)},gt.unstable_batchedUpdates=function(m,p){return m(p)},gt.useFormState=function(m,p,y){return f.H.useFormState(m,p,y)},gt.useFormStatus=function(){return f.H.useHostTransitionStatus()},gt.version="19.1.0",gt}var Sy;function Jj(){if(Sy)return of.exports;Sy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),of.exports=Wj(),of.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function ez(){if(ky)return So;ky=1;var t=Qj(),i=Ah(),r=Jj();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return g(c),e;if(d===o)return g(c),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=d;else{for(var v=!1,w=c.child;w;){if(w===a){v=!0,a=c,o=d;break}if(w===o){v=!0,o=c,a=d;break}w=w.sibling}if(!v){for(w=d.child;w;){if(w===a){v=!0,a=d,o=c;break}if(w===o){v=!0,o=d,a=c;break}w=w.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),D=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),Be=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=Be&&e[Be]||e["@@iterator"],typeof e=="function"?e:null)}var zt=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case L:return"Profiler";case O:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case le:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case D:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:bt(e.type)||"Memo";case ee:n=e._payload,e=e._init;try{return bt(e(n))}catch{}}return null}var Ye=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},fe=[],A=-1;function G(e){return{current:e}}function Z(e){0>A||(e.current=fe[A],fe[A]=null,A--)}function Q(e,n){A++,fe[A]=e.current,e.current=n}var ie=G(null),pe=G(null),re=G(null),We=G(null);function q(e,n){switch(Q(re,n),Q(pe,e),Q(ie,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?qg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=qg(n),e=Xg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ie),Q(ie,e)}function oe(){Z(ie),Z(pe),Z(re)}function Ee(e){e.memoizedState!==null&&Q(We,e);var n=ie.current,a=Xg(n,e.type);n!==a&&(Q(pe,e),Q(ie,a))}function Ge(e){pe.current===e&&(Z(ie),Z(pe)),We.current===e&&(Z(We),vo._currentValue=te)}var Ne=Object.prototype.hasOwnProperty,St=t.unstable_scheduleCallback,Ri=t.unstable_cancelCallback,dn=t.unstable_shouldYield,ua=t.unstable_requestPaint,Rt=t.unstable_now,Hc=t.unstable_getCurrentPriorityLevel,In=t.unstable_ImmediatePriority,Kn=t.unstable_UserBlockingPriority,Mi=t.unstable_NormalPriority,da=t.unstable_LowPriority,Zn=t.unstable_IdlePriority,$c=t.log,cs=t.unstable_setDisableYieldValue,Qn=null,Mt=null;function Wn(e){if(typeof $c=="function"&&cs(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Qn,e)}catch{}}var Ot=Math.clz32?Math.clz32:Rw,Cw=Math.log,Dw=Math.LN2;function Rw(e){return e>>>=0,e===0?32:31-(Cw(e)/Dw|0)|0}var us=256,ds=4194304;function Oi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fs(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?c=Oi(o):(v&=w,v!==0?c=Oi(v):a||(a=w&~e,a!==0&&(c=Oi(a))))):(w=o&~d,w!==0?c=Oi(w):v!==0?c=Oi(v):a||(a=o&~e,a!==0&&(c=Oi(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function Tr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Mw(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Em(){var e=us;return us<<=1,(us&4194048)===0&&(us=256),e}function Cm(){var e=ds;return ds<<=1,(ds&62914560)===0&&(ds=4194304),e}function Yc(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ar(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ow(e,n,a,o,c,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,k=e.expirationTimes,B=e.hiddenUpdates;for(a=v&~a;0<a;){var H=31-Ot(a),Y=1<<H;w[H]=0,k[H]=-1;var _=B[H];if(_!==null)for(B[H]=null,H=0;H<_.length;H++){var N=_[H];N!==null&&(N.lane&=-536870913)}a&=~Y}o!==0&&Dm(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~n))}function Dm(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Rm(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Gc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mm(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:dy(e.type))}function Lw(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Jn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Jn,kt="__reactProps$"+Jn,fa="__reactContainer$"+Jn,Xc="__reactEvents$"+Jn,Bw="__reactListeners$"+Jn,_w="__reactHandles$"+Jn,Om="__reactResources$"+Jn,Er="__reactMarker$"+Jn;function Fc(e){delete e[mt],delete e[kt],delete e[Xc],delete e[Bw],delete e[_w]}function ha(e){var n=e[mt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[fa]||a[mt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Zg(e);e!==null;){if(a=e[mt])return a;e=Zg(e)}return n}e=a,a=e.parentNode}return null}function ma(e){if(e=e[mt]||e[fa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Cr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function pa(e){var n=e[Om];return n||(n=e[Om]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rt(e){e[Er]=!0}var Lm=new Set,Bm={};function Li(e,n){ga(e,n),ga(e+"Capture",n)}function ga(e,n){for(Bm[e]=n,e=0;e<n.length;e++)Lm.add(n[e])}var Nw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_m={},Nm={};function Vw(e){return Ne.call(Nm,e)?!0:Ne.call(_m,e)?!1:Nw.test(e)?Nm[e]=!0:(_m[e]=!0,!1)}function hs(e,n,a){if(Vw(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ms(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Sn(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Ic,Vm;function ya(e){if(Ic===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ic=n&&n[1]||"",Vm=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ic+e+Vm}var Kc=!1;function Zc(e,n){if(!e||Kc)return"";Kc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(N){var _=N}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(N){_=N}e.call(Y.prototype)}}else{try{throw Error()}catch(N){_=N}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(N){if(N&&_&&typeof N.stack=="string")return[N.stack,_.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],w=d[1];if(v&&w){var k=v.split(`
`),B=w.split(`
`);for(c=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;c<B.length&&!B[c].includes("DetermineComponentFrameRoot");)c++;if(o===k.length||c===B.length)for(o=k.length-1,c=B.length-1;1<=o&&0<=c&&k[o]!==B[c];)c--;for(;1<=o&&0<=c;o--,c--)if(k[o]!==B[c]){if(o!==1||c!==1)do if(o--,c--,0>c||k[o]!==B[c]){var H=`
`+k[o].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=o&&0<=c);break}}}finally{Kc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ya(a):""}function Pw(e){switch(e.tag){case 26:case 27:case 5:return ya(e.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 15:return Zc(e.type,!1);case 11:return Zc(e.type.render,!1);case 1:return Zc(e.type,!0);case 31:return ya("Activity");default:return""}}function Pm(e){try{var n="";do n+=Pw(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Um(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uw(e){var n=Um(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){o=""+v,d.call(this,v)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ps(e){e._valueTracker||(e._valueTracker=Uw(e))}function Hm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Um(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hw=/[\n"\\]/g;function Yt(e){return e.replace(Hw,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Qc(e,n,a,o,c,d,v,w){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Wc(e,v,$t(n)):a!=null?Wc(e,v,$t(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+$t(w):e.removeAttribute("name")}function $m(e,n,a,o,c,d,v,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Wc(e,n,a){n==="number"&&gs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function va(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ym(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function Gm(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Ye(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function xa(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var $w=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qm(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||$w.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&qm(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&qm(e,d,n[d])}function Jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ys(e){return Gw.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var eu=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ba=null,wa=null;function Fm(e){var n=ma(e);if(n&&(e=n.stateNode)){var a=e[kt]||null;e:switch(e=n.stateNode,n.type){case"input":if(Qc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[kt]||null;if(!c)throw Error(s(90));Qc(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Hm(o)}break e;case"textarea":Ym(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&va(e,!!a.multiple,n,!1)}}}var nu=!1;function Im(e,n,a){if(nu)return e(n,a);nu=!0;try{var o=e(n);return o}finally{if(nu=!1,(ba!==null||wa!==null)&&(nl(),ba&&(n=ba,e=wa,wa=ba=null,Fm(n),e)))for(n=0;n<e.length;n++)Fm(e[n])}}function Dr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[kt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(kn)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{iu=!1}var ei=null,au=null,vs=null;function Km(){if(vs)return vs;var e,n=au,a=n.length,o,c="value"in ei?ei.value:ei.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===c[d-o];o++);return vs=c.slice(e,1<o?1-o:void 0)}function xs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function Zm(){return!1}function Tt(e){function n(a,o,c,d,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?bs:Zm,this.isPropagationStopped=Zm,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),n}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=Tt(Bi),Mr=y({},Bi,{view:0,detail:0}),qw=Tt(Mr),ru,ou,Or,js=y({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(ru=e.screenX-Or.screenX,ou=e.screenY-Or.screenY):ou=ru=0,Or=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),Qm=Tt(js),Xw=y({},js,{dataTransfer:0}),Fw=Tt(Xw),Iw=y({},Mr,{relatedTarget:0}),su=Tt(Iw),Kw=y({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Zw=Tt(Kw),Qw=y({},Bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ww=Tt(Qw),Jw=y({},Bi,{data:0}),Wm=Tt(Jw),e2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i2(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=n2[e])?!!n[e]:!1}function lu(){return i2}var a2=y({},Mr,{key:function(e){if(e.key){var n=e2[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r2=Tt(a2),o2=y({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=Tt(o2),s2=y({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),l2=Tt(s2),c2=y({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),u2=Tt(c2),d2=y({},js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f2=Tt(d2),h2=y({},Bi,{newState:0,oldState:0}),m2=Tt(h2),p2=[9,13,27,32],cu=kn&&"CompositionEvent"in window,Lr=null;kn&&"documentMode"in document&&(Lr=document.documentMode);var g2=kn&&"TextEvent"in window&&!Lr,ep=kn&&(!cu||Lr&&8<Lr&&11>=Lr),tp=" ",np=!1;function ip(e,n){switch(e){case"keyup":return p2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ja=!1;function y2(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,tp);case"textInput":return e=n.data,e===tp&&np?null:e;default:return null}}function v2(e,n){if(ja)return e==="compositionend"||!cu&&ip(e,n)?(e=Km(),vs=au=ei=null,ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var x2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!x2[e.type]:n==="textarea"}function op(e,n,a,o){ba?wa?wa.push(o):wa=[o]:ba=o,n=ll(n,"onChange"),0<n.length&&(a=new ws("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Br=null,_r=null;function b2(e){Ug(e,0)}function zs(e){var n=Cr(e);if(Hm(n))return e}function sp(e,n){if(e==="change")return n}var lp=!1;if(kn){var uu;if(kn){var du="oninput"in document;if(!du){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),du=typeof cp.oninput=="function"}uu=du}else uu=!1;lp=uu&&(!document.documentMode||9<document.documentMode)}function up(){Br&&(Br.detachEvent("onpropertychange",dp),_r=Br=null)}function dp(e){if(e.propertyName==="value"&&zs(_r)){var n=[];op(n,_r,e,tu(e)),Im(b2,n)}}function w2(e,n,a){e==="focusin"?(up(),Br=n,_r=a,Br.attachEvent("onpropertychange",dp)):e==="focusout"&&up()}function j2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(_r)}function z2(e,n){if(e==="click")return zs(n)}function S2(e,n){if(e==="input"||e==="change")return zs(n)}function k2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Lt=typeof Object.is=="function"?Object.is:k2;function Nr(e,n){if(Lt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ne.call(n,c)||!Lt(e[c],n[c]))return!1}return!0}function fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,n){var a=fp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fp(a)}}function mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gs(e.document)}return n}function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var T2=kn&&"documentMode"in document&&11>=document.documentMode,za=null,hu=null,Vr=null,mu=!1;function gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||za==null||za!==gs(o)||(o=za,"selectionStart"in o&&fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Vr&&Nr(Vr,o)||(Vr=o,o=ll(hu,"onSelect"),0<o.length&&(n=new ws("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=za)))}function _i(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Sa={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionrun:_i("Transition","TransitionRun"),transitionstart:_i("Transition","TransitionStart"),transitioncancel:_i("Transition","TransitionCancel"),transitionend:_i("Transition","TransitionEnd")},pu={},yp={};kn&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function Ni(e){if(pu[e])return pu[e];if(!Sa[e])return e;var n=Sa[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return pu[e]=n[a];return e}var vp=Ni("animationend"),xp=Ni("animationiteration"),bp=Ni("animationstart"),A2=Ni("transitionrun"),E2=Ni("transitionstart"),C2=Ni("transitioncancel"),wp=Ni("transitionend"),jp=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function nn(e,n){jp.set(e,n),Li(n,[e])}var zp=new WeakMap;function Gt(e,n){if(typeof e=="object"&&e!==null){var a=zp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pm(n)},zp.set(e,n),n)}return{value:e,source:n,stack:Pm(n)}}var qt=[],ka=0,yu=0;function Ss(){for(var e=ka,n=yu=ka=0;n<e;){var a=qt[n];qt[n++]=null;var o=qt[n];qt[n++]=null;var c=qt[n];qt[n++]=null;var d=qt[n];if(qt[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}d!==0&&Sp(a,c,d)}}function ks(e,n,a,o){qt[ka++]=e,qt[ka++]=n,qt[ka++]=a,qt[ka++]=o,yu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function vu(e,n,a,o){return ks(e,n,a,o),Ts(e)}function Ta(e,n){return ks(e,null,null,n),Ts(e)}function Sp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function Ts(e){if(50<co)throw co=0,Sd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Aa={};function D2(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,n,a,o){return new D2(e,n,a,o)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tn(e,n){var a=e.alternate;return a===null?(a=Bt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function As(e,n,a,o,c,d){var v=0;if(o=e,typeof e=="function")xu(e)&&(v=1);else if(typeof e=="string")v=Mj(e,a,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case le:return e=Bt(31,a,n,c),e.elementType=le,e.lanes=d,e;case T:return Vi(a.children,c,d,n);case O:v=8,c|=24;break;case L:return e=Bt(12,a,n,c|2),e.elementType=L,e.lanes=d,e;case P:return e=Bt(13,a,n,c),e.elementType=P,e.lanes=d,e;case F:return e=Bt(19,a,n,c),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case D:v=10;break e;case V:v=9;break e;case X:v=11;break e;case K:v=14;break e;case ee:v=16,o=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Bt(v,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function Vi(e,n,a,o){return e=Bt(7,e,o,n),e.lanes=a,e}function bu(e,n,a){return e=Bt(6,e,null,n),e.lanes=a,e}function wu(e,n,a){return n=Bt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ea=[],Ca=0,Es=null,Cs=0,Xt=[],Ft=0,Pi=null,An=1,En="";function Ui(e,n){Ea[Ca++]=Cs,Ea[Ca++]=Es,Es=e,Cs=n}function Tp(e,n,a){Xt[Ft++]=An,Xt[Ft++]=En,Xt[Ft++]=Pi,Pi=e;var o=An;e=En;var c=32-Ot(o)-1;o&=~(1<<c),a+=1;var d=32-Ot(n)+c;if(30<d){var v=c-c%5;d=(o&(1<<v)-1).toString(32),o>>=v,c-=v,An=1<<32-Ot(n)+c|a<<c|o,En=d+e}else An=1<<d|a<<c|o,En=e}function ju(e){e.return!==null&&(Ui(e,1),Tp(e,1,0))}function zu(e){for(;e===Es;)Es=Ea[--Ca],Ea[Ca]=null,Cs=Ea[--Ca],Ea[Ca]=null;for(;e===Pi;)Pi=Xt[--Ft],Xt[Ft]=null,En=Xt[--Ft],Xt[Ft]=null,An=Xt[--Ft],Xt[Ft]=null}var wt=null,qe=null,Se=!1,Hi=null,fn=!1,Su=Error(s(519));function $i(e){var n=Error(s(418,""));throw Hr(Gt(n,e)),Su}function Ap(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[mt]=e,n[kt]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)xe(fo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),$m(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ps(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Gm(n,o.value,o.defaultValue,o.children),ps(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Gg(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=cl),n=!0):n=!1,n||$i(e)}function Ep(e){for(wt=e.return;wt;)switch(wt.tag){case 5:case 13:fn=!1;return;case 27:case 3:fn=!0;return;default:wt=wt.return}}function Pr(e){if(e!==wt)return!1;if(!Se)return Ep(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ud(e.type,e.memoizedProps)),a=!a),a&&qe&&$i(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){qe=rn(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}qe=null}}else n===27?(n=qe,gi(e.type)?(e=Gd,Gd=null,qe=e):qe=n):qe=wt?rn(e.stateNode.nextSibling):null;return!0}function Ur(){qe=wt=null,Se=!1}function Cp(){var e=Hi;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Hi=null),e}function Hr(e){Hi===null?Hi=[e]:Hi.push(e)}var ku=G(null),Yi=null,Cn=null;function ti(e,n,a){Q(ku,n._currentValue),n._currentValue=a}function Dn(e){e._currentValue=ku.current,Z(ku)}function Tu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Au(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=c;for(var k=0;k<n.length;k++)if(w.context===n[k]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Tu(d.return,a,e),o||(v=null);break e}d=w.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Tu(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function $r(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=c.type;Lt(c.pendingProps.value,v.value)||(e!==null?e.push(w):e=[w])}}else if(c===We.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}c=c.return}e!==null&&Au(n,e,a,o),n.flags|=262144}function Ds(e){for(e=e.firstContext;e!==null;){if(!Lt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gi(e){Yi=e,Cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return Dp(Yi,e)}function Rs(e,n){return Yi===null&&Gi(e),Dp(e,n)}function Dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Cn===null){if(e===null)throw Error(s(308));Cn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Cn=Cn.next=n;return a}var R2=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},M2=t.unstable_scheduleCallback,O2=t.unstable_NormalPriority,it={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new R2,data:new Map,refCount:0}}function Yr(e){e.refCount--,e.refCount===0&&M2(O2,function(){e.controller.abort()})}var Gr=null,Cu=0,Da=0,Ra=null;function L2(e,n){if(Gr===null){var a=Gr=[];Cu=0,Da=Rd(),Ra={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cu++,n.then(Rp,Rp),n}function Rp(){if(--Cu===0&&Gr!==null){Ra!==null&&(Ra.status="fulfilled");var e=Gr;Gr=null,Da=0,Ra=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function B2(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Mp=U.S;U.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&L2(e,n),Mp!==null&&Mp(e,n)};var qi=G(null);function Du(){var e=qi.current;return e!==null?e:Oe.pooledCache}function Ms(e,n){n===null?Q(qi,qi.current):Q(qi,n.pool)}function Op(){var e=Du();return e===null?null:{parent:it._currentValue,pool:e}}var qr=Error(s(460)),Lp=Error(s(474)),Os=Error(s(542)),Ru={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ls(){}function _p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ls,Ls),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e;default:if(typeof n.status=="string")n.then(Ls,Ls);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e}throw Xr=n,qr}}var Xr=null;function Np(){if(Xr===null)throw Error(s(459));var e=Xr;return Xr=null,e}function Vp(e){if(e===qr||e===Os)throw Error(s(483))}var ni=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ii(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ai(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Te&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Ts(e),Sp(e,null,a),n}return ks(e,o,n,a),Ts(e)}function Fr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Rm(e,a)}}function Lu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function Ir(){if(Bu){var e=Ra;if(e!==null)throw e}}function Kr(e,n,a,o){Bu=!1;var c=e.updateQueue;ni=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var k=w,B=k.next;k.next=null,v===null?d=B:v.next=B,v=k;var H=e.alternate;H!==null&&(H=H.updateQueue,w=H.lastBaseUpdate,w!==v&&(w===null?H.firstBaseUpdate=B:w.next=B,H.lastBaseUpdate=k))}if(d!==null){var Y=c.baseState;v=0,H=B=k=null,w=d;do{var _=w.lane&-536870913,N=_!==w.lane;if(N?(we&_)===_:(o&_)===_){_!==0&&_===Da&&(Bu=!0),H!==null&&(H=H.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ue=e,se=w;_=n;var Re=a;switch(se.tag){case 1:if(ue=se.payload,typeof ue=="function"){Y=ue.call(Re,Y,_);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=se.payload,_=typeof ue=="function"?ue.call(Re,Y,_):ue,_==null)break e;Y=y({},Y,_);break e;case 2:ni=!0}}_=w.callback,_!==null&&(e.flags|=64,N&&(e.flags|=8192),N=c.callbacks,N===null?c.callbacks=[_]:N.push(_))}else N={lane:_,tag:w.tag,payload:w.payload,callback:w.callback,next:null},H===null?(B=H=N,k=Y):H=H.next=N,v|=_;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;N=w,w=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);H===null&&(k=Y),c.baseState=k,c.firstBaseUpdate=B,c.lastBaseUpdate=H,d===null&&(c.shared.lanes=0),fi|=v,e.lanes=v,e.memoizedState=Y}}function Pp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Up(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var Ma=G(null),Bs=G(0);function Hp(e,n){e=Nn,Q(Bs,e),Q(Ma,n),Nn=e|n.baseLanes}function _u(){Q(Bs,Nn),Q(Ma,Ma.current)}function Nu(){Nn=Bs.current,Z(Ma),Z(Bs)}var ri=0,ge=null,Ce=null,Je=null,_s=!1,Oa=!1,Xi=!1,Ns=0,Zr=0,La=null,_2=0;function Ie(){throw Error(s(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Lt(e[a],n[a]))return!1;return!0}function Pu(e,n,a,o,c,d){return ri=d,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?S0:k0,Xi=!1,d=a(o,c),Xi=!1,Oa&&(d=Yp(n,a,o,c)),$p(e),d}function $p(e){U.H=Ys;var n=Ce!==null&&Ce.next!==null;if(ri=0,Je=Ce=ge=null,_s=!1,Zr=0,La=null,n)throw Error(s(300));e===null||ot||(e=e.dependencies,e!==null&&Ds(e)&&(ot=!0))}function Yp(e,n,a,o){ge=e;var c=0;do{if(Oa&&(La=null),Zr=0,Oa=!1,25<=c)throw Error(s(301));if(c+=1,Je=Ce=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=Y2,d=n(a,o)}while(Oa);return d}function N2(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Qr(n):n,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(ge.flags|=1024),n}function Uu(){var e=Ns!==0;return Ns=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function $u(e){if(_s){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_s=!1}ri=0,Je=Ce=ge=null,Oa=!1,Zr=Ns=0,La=null}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ge.memoizedState=Je=e:Je=Je.next=e,Je}function et(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Je===null?ge.memoizedState:Je.next;if(n!==null)Je=n,Ce=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Je===null?ge.memoizedState=Je=e:Je=Je.next=e}return Je}function Yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qr(e){var n=Zr;return Zr+=1,La===null&&(La=[]),e=_p(La,e,n),n=ge,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?S0:k0),e}function Vs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qr(e);if(e.$$typeof===D)return pt(e)}throw Error(s(438,String(e)))}function Gu(e){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yu(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=be;return n.index++,a}function Rn(e,n){return typeof n=="function"?n(e):n}function Ps(e){var n=et();return qu(n,Ce,e)}function qu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var w=v=null,k=null,B=n,H=!1;do{var Y=B.lane&-536870913;if(Y!==B.lane?(we&Y)===Y:(ri&Y)===Y){var _=B.revertLane;if(_===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Y===Da&&(H=!0);else if((ri&_)===_){B=B.next,_===Da&&(H=!0);continue}else Y={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},k===null?(w=k=Y,v=d):k=k.next=Y,ge.lanes|=_,fi|=_;Y=B.action,Xi&&a(d,Y),d=B.hasEagerState?B.eagerState:a(d,Y)}else _={lane:Y,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},k===null?(w=k=_,v=d):k=k.next=_,ge.lanes|=Y,fi|=Y;B=B.next}while(B!==null&&B!==n);if(k===null?v=d:k.next=w,!Lt(d,e.memoizedState)&&(ot=!0,H&&(a=Ra,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=k,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Xu(e){var n=et(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do d=e(d,v.action),v=v.next;while(v!==c);Lt(d,n.memoizedState)||(ot=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Gp(e,n,a){var o=ge,c=et(),d=Se;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Lt((Ce||c).memoizedState,a);v&&(c.memoizedState=a,ot=!0),c=c.queue;var w=Fp.bind(null,o,c,e);if(Wr(2048,8,w,[e]),c.getSnapshot!==n||v||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,Ba(9,Us(),Xp.bind(null,o,c,a,n),null),Oe===null)throw Error(s(349));d||(ri&124)!==0||qp(o,n,a)}return a}function qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=Yu(),ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Xp(e,n,a,o){n.value=a,n.getSnapshot=o,Ip(n)&&Kp(e)}function Fp(e,n,a){return a(function(){Ip(n)&&Kp(e)})}function Ip(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Lt(e,a)}catch{return!0}}function Kp(e){var n=Ta(e,2);n!==null&&Ut(n,e,2)}function Fu(e){var n=At();if(typeof e=="function"){var a=e;if(e=a(),Xi){Wn(!0);try{a()}finally{Wn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},n}function Zp(e,n,a,o){return e.baseState=a,qu(e,Ce,typeof o=="function"?o:Rn)}function V2(e,n,a,o,c){if($s(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Qp(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Qp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=U.T,v={};U.T=v;try{var w=a(c,o),k=U.S;k!==null&&k(v,w),Wp(e,n,w)}catch(B){Iu(e,n,B)}finally{U.T=d}}else try{d=a(c,o),Wp(e,n,d)}catch(B){Iu(e,n,B)}}function Wp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Jp(e,n,o)},function(o){return Iu(e,n,o)}):Jp(e,n,a)}function Jp(e,n,a){n.status="fulfilled",n.value=a,e0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qp(e,a)))}function Iu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,e0(n),n=n.next;while(n!==o)}e.action=null}function e0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function t0(e,n){return n}function n0(e,n){if(Se){var a=Oe.formState;if(a!==null){e:{var o=ge;if(Se){if(qe){t:{for(var c=qe,d=fn;c.nodeType!==8;){if(!d){c=null;break t}if(c=rn(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){qe=rn(c.nextSibling),o=c.data==="F!";break e}}$i(o)}o=!1}o&&(n=a[0])}}return a=At(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t0,lastRenderedState:n},a.queue=o,a=w0.bind(null,ge,o),o.dispatch=a,o=Fu(!1),d=Ju.bind(null,ge,!1,o.queue),o=At(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=V2.bind(null,ge,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function i0(e){var n=et();return a0(n,Ce,e)}function a0(e,n,a){if(n=qu(e,n,t0)[0],e=Ps(Rn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Qr(n)}catch(v){throw v===qr?Os:v}else o=n;n=et();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,Ba(9,Us(),P2.bind(null,c,a),null)),[o,d,e]}function P2(e,n){e.action=n}function r0(e){var n=et(),a=Ce;if(a!==null)return a0(n,a,e);et(),n=n.memoizedState,a=et();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ba(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ge.updateQueue,n===null&&(n=Yu(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Us(){return{destroy:void 0,resource:void 0}}function o0(){return et().memoizedState}function Hs(e,n,a,o){var c=At();o=o===void 0?null:o,ge.flags|=e,c.memoizedState=Ba(1|n,Us(),a,o)}function Wr(e,n,a,o){var c=et();o=o===void 0?null:o;var d=c.memoizedState.inst;Ce!==null&&o!==null&&Vu(o,Ce.memoizedState.deps)?c.memoizedState=Ba(n,d,a,o):(ge.flags|=e,c.memoizedState=Ba(1|n,d,a,o))}function s0(e,n){Hs(8390656,8,e,n)}function l0(e,n){Wr(2048,8,e,n)}function c0(e,n){return Wr(4,2,e,n)}function u0(e,n){return Wr(4,4,e,n)}function d0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function f0(e,n,a){a=a!=null?a.concat([e]):null,Wr(4,4,d0.bind(null,n,e),a)}function Ku(){}function h0(e,n){var a=et();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function m0(e,n){var a=et();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vu(n,o[1]))return o[0];if(o=e(),Xi){Wn(!0);try{e()}finally{Wn(!1)}}return a.memoizedState=[o,n],o}function Zu(e,n,a){return a===void 0||(ri&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=yg(),ge.lanes|=e,fi|=e,a)}function p0(e,n,a,o){return Lt(a,n)?a:Ma.current!==null?(e=Zu(e,a,o),Lt(e,n)||(ot=!0),e):(ri&42)===0?(ot=!0,e.memoizedState=a):(e=yg(),ge.lanes|=e,fi|=e,n)}function g0(e,n,a,o,c){var d=I.p;I.p=d!==0&&8>d?d:8;var v=U.T,w={};U.T=w,Ju(e,!1,n,a);try{var k=c(),B=U.S;if(B!==null&&B(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var H=B2(k,o);Jr(e,n,H,Pt(e))}else Jr(e,n,o,Pt(e))}catch(Y){Jr(e,n,{then:function(){},status:"rejected",reason:Y},Pt())}finally{I.p=d,U.T=v}}function U2(){}function Qu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=y0(e).queue;g0(e,c,n,te,a===null?U2:function(){return v0(e),a(o)})}function y0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function v0(e){var n=y0(e).next.queue;Jr(e,n,{},Pt())}function Wu(){return pt(vo)}function x0(){return et().memoizedState}function b0(){return et().memoizedState}function H2(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Pt();e=ii(a);var o=ai(n,e,a);o!==null&&(Ut(o,n,a),Fr(o,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function $2(e,n,a){var o=Pt();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},$s(e)?j0(n,a):(a=vu(e,n,a,o),a!==null&&(Ut(a,e,o),z0(a,n,o)))}function w0(e,n,a){var o=Pt();Jr(e,n,a,o)}function Jr(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if($s(e))j0(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,w=d(v,a);if(c.hasEagerState=!0,c.eagerState=w,Lt(w,v))return ks(e,n,c,0),Oe===null&&Ss(),!1}catch{}finally{}if(a=vu(e,n,c,o),a!==null)return Ut(a,e,o),z0(a,n,o),!0}return!1}function Ju(e,n,a,o){if(o={lane:2,revertLane:Rd(),action:o,hasEagerState:!1,eagerState:null,next:null},$s(e)){if(n)throw Error(s(479))}else n=vu(e,a,o,2),n!==null&&Ut(n,e,2)}function $s(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function j0(e,n){Oa=_s=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function z0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Rm(e,a)}}var Ys={readContext:pt,use:Vs,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie},S0={readContext:pt,use:Vs,useCallback:function(e,n){return At().memoizedState=[e,n===void 0?null:n],e},useContext:pt,useEffect:s0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hs(4194308,4,d0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hs(4194308,4,e,n)},useInsertionEffect:function(e,n){Hs(4,2,e,n)},useMemo:function(e,n){var a=At();n=n===void 0?null:n;var o=e();if(Xi){Wn(!0);try{e()}finally{Wn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=At();if(a!==void 0){var c=a(n);if(Xi){Wn(!0);try{a(n)}finally{Wn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=$2.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var n=At();return e={current:e},n.memoizedState=e},useState:function(e){e=Fu(e);var n=e.queue,a=w0.bind(null,ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ku,useDeferredValue:function(e,n){var a=At();return Zu(a,e,n)},useTransition:function(){var e=Fu(!1);return e=g0.bind(null,ge,e.queue,!0,!1),At().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ge,c=At();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Oe===null)throw Error(s(349));(we&124)!==0||qp(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,s0(Fp.bind(null,o,d,e),[e]),o.flags|=2048,Ba(9,Us(),Xp.bind(null,o,d,a,n),null),a},useId:function(){var e=At(),n=Oe.identifierPrefix;if(Se){var a=En,o=An;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ns++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=_2++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Wu,useFormState:n0,useActionState:n0,useOptimistic:function(e){var n=At();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return At().memoizedState=H2.bind(null,ge)}},k0={readContext:pt,use:Vs,useCallback:h0,useContext:pt,useEffect:l0,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:m0,useReducer:Ps,useRef:o0,useState:function(){return Ps(Rn)},useDebugValue:Ku,useDeferredValue:function(e,n){var a=et();return p0(a,Ce.memoizedState,e,n)},useTransition:function(){var e=Ps(Rn)[0],n=et().memoizedState;return[typeof e=="boolean"?e:Qr(e),n]},useSyncExternalStore:Gp,useId:x0,useHostTransitionStatus:Wu,useFormState:i0,useActionState:i0,useOptimistic:function(e,n){var a=et();return Zp(a,Ce,e,n)},useMemoCache:Gu,useCacheRefresh:b0},Y2={readContext:pt,use:Vs,useCallback:h0,useContext:pt,useEffect:l0,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:u0,useMemo:m0,useReducer:Xu,useRef:o0,useState:function(){return Xu(Rn)},useDebugValue:Ku,useDeferredValue:function(e,n){var a=et();return Ce===null?Zu(a,e,n):p0(a,Ce.memoizedState,e,n)},useTransition:function(){var e=Xu(Rn)[0],n=et().memoizedState;return[typeof e=="boolean"?e:Qr(e),n]},useSyncExternalStore:Gp,useId:x0,useHostTransitionStatus:Wu,useFormState:r0,useActionState:r0,useOptimistic:function(e,n){var a=et();return Ce!==null?Zp(a,Ce,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:b0},_a=null,eo=0;function Gs(e){var n=eo;return eo+=1,_a===null&&(_a=[]),_p(_a,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function qs(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function T0(e){var n=e._init;return n(e._payload)}function A0(e){function n(R,E){if(e){var M=R.deletions;M===null?(R.deletions=[E],R.flags|=16):M.push(E)}}function a(R,E){if(!e)return null;for(;E!==null;)n(R,E),E=E.sibling;return null}function o(R){for(var E=new Map;R!==null;)R.key!==null?E.set(R.key,R):E.set(R.index,R),R=R.sibling;return E}function c(R,E){return R=Tn(R,E),R.index=0,R.sibling=null,R}function d(R,E,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<E?(R.flags|=67108866,E):M):(R.flags|=67108866,E)):(R.flags|=1048576,E)}function v(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function w(R,E,M,$){return E===null||E.tag!==6?(E=bu(M,R.mode,$),E.return=R,E):(E=c(E,M),E.return=R,E)}function k(R,E,M,$){var ne=M.type;return ne===T?H(R,E,M.props.children,$,M.key):E!==null&&(E.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ee&&T0(ne)===E.type)?(E=c(E,M.props),to(E,M),E.return=R,E):(E=As(M.type,M.key,M.props,null,R.mode,$),to(E,M),E.return=R,E)}function B(R,E,M,$){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=wu(M,R.mode,$),E.return=R,E):(E=c(E,M.children||[]),E.return=R,E)}function H(R,E,M,$,ne){return E===null||E.tag!==7?(E=Vi(M,R.mode,$,ne),E.return=R,E):(E=c(E,M),E.return=R,E)}function Y(R,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=bu(""+E,R.mode,M),E.return=R,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case j:return M=As(E.type,E.key,E.props,null,R.mode,M),to(M,E),M.return=R,M;case z:return E=wu(E,R.mode,M),E.return=R,E;case ee:var $=E._init;return E=$(E._payload),Y(R,E,M)}if(Ye(E)||_e(E))return E=Vi(E,R.mode,M,null),E.return=R,E;if(typeof E.then=="function")return Y(R,Gs(E),M);if(E.$$typeof===D)return Y(R,Rs(R,E),M);qs(R,E)}return null}function _(R,E,M,$){var ne=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ne!==null?null:w(R,E,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case j:return M.key===ne?k(R,E,M,$):null;case z:return M.key===ne?B(R,E,M,$):null;case ee:return ne=M._init,M=ne(M._payload),_(R,E,M,$)}if(Ye(M)||_e(M))return ne!==null?null:H(R,E,M,$,null);if(typeof M.then=="function")return _(R,E,Gs(M),$);if(M.$$typeof===D)return _(R,E,Rs(R,M),$);qs(R,M)}return null}function N(R,E,M,$,ne){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return R=R.get(M)||null,w(E,R,""+$,ne);if(typeof $=="object"&&$!==null){switch($.$$typeof){case j:return R=R.get($.key===null?M:$.key)||null,k(E,R,$,ne);case z:return R=R.get($.key===null?M:$.key)||null,B(E,R,$,ne);case ee:var ye=$._init;return $=ye($._payload),N(R,E,M,$,ne)}if(Ye($)||_e($))return R=R.get(M)||null,H(E,R,$,ne,null);if(typeof $.then=="function")return N(R,E,M,Gs($),ne);if($.$$typeof===D)return N(R,E,M,Rs(E,$),ne);qs(E,$)}return null}function ue(R,E,M,$){for(var ne=null,ye=null,ae=E,ce=E=0,lt=null;ae!==null&&ce<M.length;ce++){ae.index>ce?(lt=ae,ae=null):lt=ae.sibling;var je=_(R,ae,M[ce],$);if(je===null){ae===null&&(ae=lt);break}e&&ae&&je.alternate===null&&n(R,ae),E=d(je,E,ce),ye===null?ne=je:ye.sibling=je,ye=je,ae=lt}if(ce===M.length)return a(R,ae),Se&&Ui(R,ce),ne;if(ae===null){for(;ce<M.length;ce++)ae=Y(R,M[ce],$),ae!==null&&(E=d(ae,E,ce),ye===null?ne=ae:ye.sibling=ae,ye=ae);return Se&&Ui(R,ce),ne}for(ae=o(ae);ce<M.length;ce++)lt=N(ae,R,ce,M[ce],$),lt!==null&&(e&&lt.alternate!==null&&ae.delete(lt.key===null?ce:lt.key),E=d(lt,E,ce),ye===null?ne=lt:ye.sibling=lt,ye=lt);return e&&ae.forEach(function(wi){return n(R,wi)}),Se&&Ui(R,ce),ne}function se(R,E,M,$){if(M==null)throw Error(s(151));for(var ne=null,ye=null,ae=E,ce=E=0,lt=null,je=M.next();ae!==null&&!je.done;ce++,je=M.next()){ae.index>ce?(lt=ae,ae=null):lt=ae.sibling;var wi=_(R,ae,je.value,$);if(wi===null){ae===null&&(ae=lt);break}e&&ae&&wi.alternate===null&&n(R,ae),E=d(wi,E,ce),ye===null?ne=wi:ye.sibling=wi,ye=wi,ae=lt}if(je.done)return a(R,ae),Se&&Ui(R,ce),ne;if(ae===null){for(;!je.done;ce++,je=M.next())je=Y(R,je.value,$),je!==null&&(E=d(je,E,ce),ye===null?ne=je:ye.sibling=je,ye=je);return Se&&Ui(R,ce),ne}for(ae=o(ae);!je.done;ce++,je=M.next())je=N(ae,R,ce,je.value,$),je!==null&&(e&&je.alternate!==null&&ae.delete(je.key===null?ce:je.key),E=d(je,E,ce),ye===null?ne=je:ye.sibling=je,ye=je);return e&&ae.forEach(function(Gj){return n(R,Gj)}),Se&&Ui(R,ce),ne}function Re(R,E,M,$){if(typeof M=="object"&&M!==null&&M.type===T&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case j:e:{for(var ne=M.key;E!==null;){if(E.key===ne){if(ne=M.type,ne===T){if(E.tag===7){a(R,E.sibling),$=c(E,M.props.children),$.return=R,R=$;break e}}else if(E.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ee&&T0(ne)===E.type){a(R,E.sibling),$=c(E,M.props),to($,M),$.return=R,R=$;break e}a(R,E);break}else n(R,E);E=E.sibling}M.type===T?($=Vi(M.props.children,R.mode,$,M.key),$.return=R,R=$):($=As(M.type,M.key,M.props,null,R.mode,$),to($,M),$.return=R,R=$)}return v(R);case z:e:{for(ne=M.key;E!==null;){if(E.key===ne)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){a(R,E.sibling),$=c(E,M.children||[]),$.return=R,R=$;break e}else{a(R,E);break}else n(R,E);E=E.sibling}$=wu(M,R.mode,$),$.return=R,R=$}return v(R);case ee:return ne=M._init,M=ne(M._payload),Re(R,E,M,$)}if(Ye(M))return ue(R,E,M,$);if(_e(M)){if(ne=_e(M),typeof ne!="function")throw Error(s(150));return M=ne.call(M),se(R,E,M,$)}if(typeof M.then=="function")return Re(R,E,Gs(M),$);if(M.$$typeof===D)return Re(R,E,Rs(R,M),$);qs(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(a(R,E.sibling),$=c(E,M),$.return=R,R=$):(a(R,E),$=bu(M,R.mode,$),$.return=R,R=$),v(R)):a(R,E)}return function(R,E,M,$){try{eo=0;var ne=Re(R,E,M,$);return _a=null,ne}catch(ae){if(ae===qr||ae===Os)throw ae;var ye=Bt(29,ae,null,R.mode);return ye.lanes=$,ye.return=R,ye}finally{}}}var Na=A0(!0),E0=A0(!1),It=G(null),hn=null;function oi(e){var n=e.alternate;Q(at,at.current&1),Q(It,e),hn===null&&(n===null||Ma.current!==null||n.memoizedState!==null)&&(hn=e)}function C0(e){if(e.tag===22){if(Q(at,at.current),Q(It,e),hn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(hn=e)}}else si()}function si(){Q(at,at.current),Q(It,It.current)}function Mn(e){Z(It),hn===e&&(hn=null),Z(at)}var at=G(0);function Xs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ed(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var td={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Pt(),c=ii(o);c.payload=n,a!=null&&(c.callback=a),n=ai(e,c,o),n!==null&&(Ut(n,e,o),Fr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Pt(),c=ii(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ai(e,c,o),n!==null&&(Ut(n,e,o),Fr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Pt(),o=ii(a);o.tag=2,n!=null&&(o.callback=n),n=ai(e,o,a),n!==null&&(Ut(n,e,a),Fr(n,e,a))}};function D0(e,n,a,o,c,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,v):n.prototype&&n.prototype.isPureReactComponent?!Nr(a,o)||!Nr(c,d):!0}function R0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&td.enqueueReplaceState(n,n.state,null)}function Fi(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Fs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function M0(e){Fs(e)}function O0(e){console.error(e)}function L0(e){Fs(e)}function Is(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function B0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nd(e,n,a){return a=ii(a),a.tag=3,a.payload={element:null},a.callback=function(){Is(e,n)},a}function _0(e){return e=ii(e),e.tag=3,e}function N0(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){B0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){B0(n,a,o),typeof c!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function G2(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,c,!0),a=It.current,a!==null){switch(a.tag){case 13:return hn===null?Td():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Ru?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ed(e,o,c)),!1;case 22:return a.flags|=65536,o===Ru?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ed(e,o,c)),!1}throw Error(s(435,a.tag))}return Ed(e,o,c),Td(),!1}if(Se)return n=It.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Su&&(e=Error(s(422),{cause:o}),Hr(Gt(e,a)))):(o!==Su&&(n=Error(s(423),{cause:o}),Hr(Gt(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Gt(o,a),c=nd(e.stateNode,o,c),Lu(e,c),Xe!==4&&(Xe=2)),!1;var d=Error(s(520),{cause:o});if(d=Gt(d,a),lo===null?lo=[d]:lo.push(d),Xe!==4&&(Xe=2),n===null)return!0;o=Gt(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=nd(a.stateNode,o,e),Lu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(hi===null||!hi.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=_0(c),N0(c,e,a,o),Lu(a,c),!1}a=a.return}while(a!==null);return!1}var V0=Error(s(461)),ot=!1;function ut(e,n,a,o){n.child=e===null?E0(n,null,a,o):Na(n,e.child,a,o)}function P0(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var v={};for(var w in o)w!=="ref"&&(v[w]=o[w])}else v=o;return Gi(n),o=Pu(e,n,a,v,d,c),w=Uu(),e!==null&&!ot?(Hu(e,n,c),On(e,n,c)):(Se&&w&&ju(n),n.flags|=1,ut(e,n,o,c),n.child)}function U0(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!xu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,H0(e,n,d,o,c)):(e=As(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!ud(e,c)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Nr,a(v,o)&&e.ref===n.ref)return On(e,n,c)}return n.flags|=1,e=Tn(d,o),e.ref=n.ref,e.return=n,n.child=e}function H0(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(Nr(d,o)&&e.ref===n.ref)if(ot=!1,n.pendingProps=o=d,ud(e,c))(e.flags&131072)!==0&&(ot=!0);else return n.lanes=e.lanes,On(e,n,c)}return id(e,n,a,o,c)}function $0(e,n,a){var o=n.pendingProps,c=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Y0(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ms(n,d!==null?d.cachePool:null),d!==null?Hp(n,d):_u(),C0(n);else return n.lanes=n.childLanes=536870912,Y0(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ms(n,d.cachePool),Hp(n,d),si(),n.memoizedState=null):(e!==null&&Ms(n,null),_u(),si());return ut(e,n,c,a),n.child}function Y0(e,n,a,o){var c=Du();return c=c===null?null:{parent:it._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Ms(n,null),_u(),C0(n),e!==null&&$r(e,n,o,!0),null}function Ks(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function id(e,n,a,o,c){return Gi(n),a=Pu(e,n,a,o,void 0,c),o=Uu(),e!==null&&!ot?(Hu(e,n,c),On(e,n,c)):(Se&&o&&ju(n),n.flags|=1,ut(e,n,a,c),n.child)}function G0(e,n,a,o,c,d){return Gi(n),n.updateQueue=null,a=Yp(n,o,a,c),$p(e),o=Uu(),e!==null&&!ot?(Hu(e,n,d),On(e,n,d)):(Se&&o&&ju(n),n.flags|=1,ut(e,n,a,d),n.child)}function q0(e,n,a,o,c){if(Gi(n),n.stateNode===null){var d=Aa,v=a.contextType;typeof v=="object"&&v!==null&&(d=pt(v)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=td,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Mu(n),v=a.contextType,d.context=typeof v=="object"&&v!==null?pt(v):Aa,d.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ed(n,a,v,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&td.enqueueReplaceState(d,d.state,null),Kr(n,o,d,c),Ir(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var w=n.memoizedProps,k=Fi(a,w);d.props=k;var B=d.context,H=a.contextType;v=Aa,typeof H=="object"&&H!==null&&(v=pt(H));var Y=a.getDerivedStateFromProps;H=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||B!==v)&&R0(n,d,o,v),ni=!1;var _=n.memoizedState;d.state=_,Kr(n,o,d,c),Ir(),B=n.memoizedState,w||_!==B||ni?(typeof Y=="function"&&(ed(n,a,Y,o),B=n.memoizedState),(k=ni||D0(n,a,k,o,_,B,v))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=B),d.props=o,d.state=B,d.context=v,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ou(e,n),v=n.memoizedProps,H=Fi(a,v),d.props=H,Y=n.pendingProps,_=d.context,B=a.contextType,k=Aa,typeof B=="object"&&B!==null&&(k=pt(B)),w=a.getDerivedStateFromProps,(B=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||_!==k)&&R0(n,d,o,k),ni=!1,_=n.memoizedState,d.state=_,Kr(n,o,d,c),Ir();var N=n.memoizedState;v!==Y||_!==N||ni||e!==null&&e.dependencies!==null&&Ds(e.dependencies)?(typeof w=="function"&&(ed(n,a,w,o),N=n.memoizedState),(H=ni||D0(n,a,H,o,_,N,k)||e!==null&&e.dependencies!==null&&Ds(e.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,N,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,N,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=N),d.props=o,d.state=N,d.context=k,o=H):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ks(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Na(n,e.child,null,c),n.child=Na(n,null,a,c)):ut(e,n,a,c),n.memoizedState=d.state,e=n.child):e=On(e,n,c),e}function X0(e,n,a,o){return Ur(),n.flags|=256,ut(e,n,a,o),n.child}var ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rd(e){return{baseLanes:e,cachePool:Op()}}function od(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kt),e}function F0(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(c?oi(n):si(),Se){var w=qe,k;if(k=w){e:{for(k=w,w=fn;k.nodeType!==8;){if(!w){w=null;break e}if(k=rn(k.nextSibling),k===null){w=null;break e}}w=k}w!==null?(n.memoizedState={dehydrated:w,treeContext:Pi!==null?{id:An,overflow:En}:null,retryLane:536870912,hydrationErrors:null},k=Bt(18,null,null,0),k.stateNode=w,k.return=n,n.child=k,wt=n,qe=null,k=!0):k=!1}k||$i(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Yd(w)?n.lanes=32:n.lanes=536870912,null;Mn(n)}return w=o.children,o=o.fallback,c?(si(),c=n.mode,w=Zs({mode:"hidden",children:w},c),o=Vi(o,c,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,c=n.child,c.memoizedState=rd(a),c.childLanes=od(e,v,a),n.memoizedState=ad,o):(oi(n),sd(n,w))}if(k=e.memoizedState,k!==null&&(w=k.dehydrated,w!==null)){if(d)n.flags&256?(oi(n),n.flags&=-257,n=ld(e,n,a)):n.memoizedState!==null?(si(),n.child=e.child,n.flags|=128,n=null):(si(),c=o.fallback,w=n.mode,o=Zs({mode:"visible",children:o.children},w),c=Vi(c,w,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Na(n,e.child,null,a),o=n.child,o.memoizedState=rd(a),o.childLanes=od(e,v,a),n.memoizedState=ad,n=c);else if(oi(n),Yd(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var B=v.dgst;v=B,o=Error(s(419)),o.stack="",o.digest=v,Hr({value:o,source:null,stack:null}),n=ld(e,n,a)}else if(ot||$r(e,n,a,!1),v=(a&e.childLanes)!==0,ot||v){if(v=Oe,v!==null&&(o=a&-a,o=(o&42)!==0?1:Gc(o),o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==k.retryLane))throw k.retryLane=o,Ta(e,o),Ut(v,e,o),V0;w.data==="$?"||Td(),n=ld(e,n,a)}else w.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,qe=rn(w.nextSibling),wt=n,Se=!0,Hi=null,fn=!1,e!==null&&(Xt[Ft++]=An,Xt[Ft++]=En,Xt[Ft++]=Pi,An=e.id,En=e.overflow,Pi=n),n=sd(n,o.children),n.flags|=4096);return n}return c?(si(),c=o.fallback,w=n.mode,k=e.child,B=k.sibling,o=Tn(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,B!==null?c=Tn(B,c):(c=Vi(c,w,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,w=e.child.memoizedState,w===null?w=rd(a):(k=w.cachePool,k!==null?(B=it._currentValue,k=k.parent!==B?{parent:B,pool:B}:k):k=Op(),w={baseLanes:w.baseLanes|a,cachePool:k}),c.memoizedState=w,c.childLanes=od(e,v,a),n.memoizedState=ad,o):(oi(n),a=e.child,e=a.sibling,a=Tn(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function sd(e,n){return n=Zs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zs(e,n){return e=Bt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ld(e,n,a){return Na(n,e.child,null,a),e=sd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function I0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Tu(e.return,n,a)}function cd(e,n,a,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function K0(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(ut(e,n,o.children,a),o=at.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&I0(e,a,n);else if(e.tag===19)I0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Q(at,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Xs(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),cd(n,!1,c,a,d);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Xs(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}cd(n,!0,a,null,d);break;case"together":cd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function On(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),fi|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($r(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Tn(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Tn(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ud(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ds(e)))}function q2(e,n,a){switch(n.tag){case 3:q(n,n.stateNode.containerInfo),ti(n,it,e.memoizedState.cache),Ur();break;case 27:case 5:Ee(n);break;case 4:q(n,n.stateNode.containerInfo);break;case 10:ti(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(oi(n),n.flags|=128,null):(a&n.child.childLanes)!==0?F0(e,n,a):(oi(n),e=On(e,n,a),e!==null?e.sibling:null);oi(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return K0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Q(at,at.current),o)break;return null;case 22:case 23:return n.lanes=0,$0(e,n,a);case 24:ti(n,it,e.memoizedState.cache)}return On(e,n,a)}function Z0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ot=!0;else{if(!ud(e,a)&&(n.flags&128)===0)return ot=!1,q2(e,n,a);ot=(e.flags&131072)!==0}else ot=!1,Se&&(n.flags&1048576)!==0&&Tp(n,Cs,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")xu(o)?(e=Fi(o,e),n.tag=1,n=q0(null,n,o,e,a)):(n.tag=0,n=id(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===X){n.tag=11,n=P0(null,n,o,e,a);break e}else if(c===K){n.tag=14,n=U0(null,n,o,e,a);break e}}throw n=bt(o)||o,Error(s(306,n,""))}}return n;case 0:return id(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Fi(o,n.pendingProps),q0(e,n,o,c,a);case 3:e:{if(q(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Ou(e,n),Kr(n,o,null,a);var v=n.memoizedState;if(o=v.cache,ti(n,it,o),o!==d.cache&&Au(n,[it],a,!0),Ir(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=X0(e,n,o,a);break e}else if(o!==c){c=Gt(Error(s(424)),n),Hr(c),n=X0(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=rn(e.firstChild),wt=n,Se=!0,Hi=null,fn=!0,a=E0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ur(),o===c){n=On(e,n,a);break e}ut(e,n,o,a)}n=n.child}return n;case 26:return Ks(e,n),e===null?(a=ey(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,o=ul(re.current).createElement(a),o[mt]=n,o[kt]=e,ft(o,a,e),rt(o),n.stateNode=o):n.memoizedState=ey(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ee(n),e===null&&Se&&(o=n.stateNode=Qg(n.type,n.pendingProps,re.current),wt=n,fn=!0,c=qe,gi(n.type)?(Gd=c,qe=rn(o.firstChild)):qe=c),ut(e,n,n.pendingProps.children,a),Ks(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((c=o=qe)&&(o=xj(o,n.type,n.pendingProps,fn),o!==null?(n.stateNode=o,wt=n,qe=rn(o.firstChild),fn=!1,c=!0):c=!1),c||$i(n)),Ee(n),c=n.type,d=n.pendingProps,v=e!==null?e.memoizedProps:null,o=d.children,Ud(c,d)?o=null:v!==null&&Ud(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Pu(e,n,N2,null,null,a),vo._currentValue=c),Ks(e,n),ut(e,n,o,a),n.child;case 6:return e===null&&Se&&((e=a=qe)&&(a=bj(a,n.pendingProps,fn),a!==null?(n.stateNode=a,wt=n,qe=null,e=!0):e=!1),e||$i(n)),null;case 13:return F0(e,n,a);case 4:return q(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Na(n,null,o,a):ut(e,n,o,a),n.child;case 11:return P0(e,n,n.type,n.pendingProps,a);case 7:return ut(e,n,n.pendingProps,a),n.child;case 8:return ut(e,n,n.pendingProps.children,a),n.child;case 12:return ut(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ti(n,n.type,o.value),ut(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Gi(n),c=pt(c),o=o(c),n.flags|=1,ut(e,n,o,a),n.child;case 14:return U0(e,n,n.type,n.pendingProps,a);case 15:return H0(e,n,n.type,n.pendingProps,a);case 19:return K0(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Zs(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Tn(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return $0(e,n,a);case 24:return Gi(n),o=pt(it),e===null?(c=Du(),c===null&&(c=Oe,d=Eu(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Mu(n),ti(n,it,c)):((e.lanes&a)!==0&&(Ou(e,n),Kr(n,null,null,a),Ir()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ti(n,it,o)):(o=d.cache,ti(n,it,o),o!==c.cache&&Au(n,[it],a,!0))),ut(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ln(e){e.flags|=4}function Q0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ry(n)){if(n=It.current,n!==null&&((we&4194048)===we?hn!==null:(we&62914560)!==we&&(we&536870912)===0||n!==hn))throw Xr=Ru,Lp;e.flags|=8192}}function Qs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Cm():536870912,e.lanes|=n,Ha|=n)}function no(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function X2(e,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Dn(it),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Pr(n)?Ln(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cp())),Pe(n),null;case 26:return a=n.memoizedState,e===null?(Ln(n),a!==null?(Pe(n),Q0(n,a)):(Pe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ln(n),Pe(n),Q0(n,a)):(Pe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ln(n),Pe(n),n.flags&=-16777217),null;case 27:Ge(n),a=re.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ln(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Pe(n),null}e=ie.current,Pr(n)?Ap(n):(e=Qg(c,o,a),n.stateNode=e,Ln(n))}return Pe(n),null;case 5:if(Ge(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ln(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Pe(n),null}if(e=ie.current,Pr(n))Ap(n);else{switch(c=ul(re.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[mt]=n,e[kt]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;e:switch(ft(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ln(n)}}return Pe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ln(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=re.current,Pr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=wt,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[mt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Gg(e.nodeValue,a)),e||$i(n)}else e=ul(e).createTextNode(o),e[mt]=n,n.stateNode=e}return Pe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Pr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[mt]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),c=!1}else c=Cp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Mn(n),n):(Mn(n),null)}if(Mn(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Qs(n,n.updateQueue),Pe(n),null;case 4:return oe(),e===null&&Bd(n.stateNode.containerInfo),Pe(n),null;case 10:return Dn(n.type),Pe(n),null;case 19:if(Z(at),c=n.memoizedState,c===null)return Pe(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)no(c,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Xs(e),d!==null){for(n.flags|=128,no(c,!1),e=d.updateQueue,n.updateQueue=e,Qs(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)kp(a,e),a=a.sibling;return Q(at,at.current&1|2),n.child}e=e.sibling}c.tail!==null&&Rt()>el&&(n.flags|=128,o=!0,no(c,!1),n.lanes=4194304)}else{if(!o)if(e=Xs(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Qs(n,e),no(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Se)return Pe(n),null}else 2*Rt()-c.renderingStartTime>el&&a!==536870912&&(n.flags|=128,o=!0,no(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(e=c.last,e!==null?e.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Rt(),n.sibling=null,e=at.current,Q(at,o?e&1|2:e&1),n):(Pe(n),null);case 22:case 23:return Mn(n),Nu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),a=n.updateQueue,a!==null&&Qs(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(qi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Dn(it),Pe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function F2(e,n){switch(zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Dn(it),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 13:if(Mn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(at),null;case 4:return oe(),null;case 10:return Dn(n.type),null;case 22:case 23:return Mn(n),Nu(),e!==null&&Z(qi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Dn(it),null;case 25:return null;default:return null}}function W0(e,n){switch(zu(n),n.tag){case 3:Dn(it),oe();break;case 26:case 27:case 5:Ge(n);break;case 4:oe();break;case 13:Mn(n);break;case 19:Z(at);break;case 10:Dn(n.type);break;case 22:case 23:Mn(n),Nu(),e!==null&&Z(qi);break;case 24:Dn(it)}}function io(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==c)}}catch(w){Me(n,n.return,w)}}function li(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var v=o.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,c=n;var k=a,B=w;try{B()}catch(H){Me(c,k,H)}}}o=o.next}while(o!==d)}}catch(H){Me(n,n.return,H)}}function J0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Up(n,a)}catch(o){Me(e,e.return,o)}}}function eg(e,n,a){a.props=Fi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Me(e,n,o)}}function ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Me(e,n,c)}}function mn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Me(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Me(e,n,c)}else a.current=null}function tg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Me(e,e.return,c)}}function dd(e,n,a){try{var o=e.stateNode;mj(o,e.type,a,n),o[kt]=n}catch(c){Me(e,e.return,c)}}function ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&gi(e.type)||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&gi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hd(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=cl));else if(o!==4&&(o===27&&gi(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(hd(e,n,a),e=e.sibling;e!==null;)hd(e,n,a),e=e.sibling}function Ws(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&gi(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ws(e,n,a),e=e.sibling;e!==null;)Ws(e,n,a),e=e.sibling}function ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);ft(n,o,a),n[mt]=e,n[kt]=a}catch(d){Me(e,e.return,d)}}var Bn=!1,Ke=!1,md=!1,ag=typeof WeakSet=="function"?WeakSet:Set,st=null;function I2(e,n){if(e=e.containerInfo,Vd=gl,e=pp(e),fu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,w=-1,k=-1,B=0,H=0,Y=e,_=null;t:for(;;){for(var N;Y!==a||c!==0&&Y.nodeType!==3||(w=v+c),Y!==d||o!==0&&Y.nodeType!==3||(k=v+o),Y.nodeType===3&&(v+=Y.nodeValue.length),(N=Y.firstChild)!==null;)_=Y,Y=N;for(;;){if(Y===e)break t;if(_===a&&++B===c&&(w=v),_===d&&++H===o&&(k=v),(N=Y.nextSibling)!==null)break;Y=_,_=Y.parentNode}Y=N}a=w===-1||k===-1?null:{start:w,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pd={focusedElem:e,selectionRange:a},gl=!1,st=n;st!==null;)if(n=st,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,st=e;else for(;st!==null;){switch(n=st,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ue=Fi(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ue,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Me(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$d(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$d(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,st=e;break}st=n.return}}function rg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ci(e,a),o&4&&io(5,a);break;case 1:if(ci(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Me(a,a.return,v)}else{var c=Fi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Me(a,a.return,v)}}o&64&&J0(a),o&512&&ao(a,a.return);break;case 3:if(ci(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Up(e,n)}catch(v){Me(a,a.return,v)}}break;case 27:n===null&&o&4&&ig(a);case 26:case 5:ci(e,a),n===null&&o&4&&tg(a),o&512&&ao(a,a.return);break;case 12:ci(e,a);break;case 13:ci(e,a),o&4&&lg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ij.bind(null,a),wj(e,a))));break;case 22:if(o=a.memoizedState!==null||Bn,!o){n=n!==null&&n.memoizedState!==null||Ke,c=Bn;var d=Ke;Bn=o,(Ke=n)&&!d?ui(e,a,(a.subtreeFlags&8772)!==0):ci(e,a),Bn=c,Ke=d}break;case 30:break;default:ci(e,a)}}function og(e){var n=e.alternate;n!==null&&(e.alternate=null,og(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Fc(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Et=!1;function _n(e,n,a){for(a=a.child;a!==null;)sg(e,n,a),a=a.sibling}function sg(e,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Qn,a)}catch{}switch(a.tag){case 26:Ke||mn(a,n),_n(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||mn(a,n);var o=Ve,c=Et;gi(a.type)&&(Ve=a.stateNode,Et=!1),_n(e,n,a),mo(a.stateNode),Ve=o,Et=c;break;case 5:Ke||mn(a,n);case 6:if(o=Ve,c=Et,Ve=null,_n(e,n,a),Ve=o,Et=c,Ve!==null)if(Et)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(d){Me(a,n,d)}else try{Ve.removeChild(a.stateNode)}catch(d){Me(a,n,d)}break;case 18:Ve!==null&&(Et?(e=Ve,Kg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),jo(e)):Kg(Ve,a.stateNode));break;case 4:o=Ve,c=Et,Ve=a.stateNode.containerInfo,Et=!0,_n(e,n,a),Ve=o,Et=c;break;case 0:case 11:case 14:case 15:Ke||li(2,a,n),Ke||li(4,a,n),_n(e,n,a);break;case 1:Ke||(mn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&eg(a,n,o)),_n(e,n,a);break;case 21:_n(e,n,a);break;case 22:Ke=(o=Ke)||a.memoizedState!==null,_n(e,n,a),Ke=o;break;default:_n(e,n,a)}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jo(e)}catch(a){Me(n,n.return,a)}}function K2(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ag),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ag),n;default:throw Error(s(435,e.tag))}}function pd(e,n){var a=K2(e);n.forEach(function(o){var c=aj.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function _t(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,v=n,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(gi(w.type)){Ve=w.stateNode,Et=!1;break e}break;case 5:Ve=w.stateNode,Et=!1;break e;case 3:case 4:Ve=w.stateNode.containerInfo,Et=!0;break e}w=w.return}if(Ve===null)throw Error(s(160));sg(d,v,c),Ve=null,Et=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)cg(n,e),n=n.sibling}var an=null;function cg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(n,e),Nt(e),o&4&&(li(3,e,e.return),io(3,e),li(5,e,e.return));break;case 1:_t(n,e),Nt(e),o&512&&(Ke||a===null||mn(a,a.return)),o&64&&Bn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=an;if(_t(n,e),Nt(e),o&512&&(Ke||a===null||mn(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Er]||d[mt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),ft(d,o,a),d[mt]=e,rt(d),o=d;break e;case"link":var v=iy("link","href",c).get(o+(a.href||""));if(v){for(var w=0;w<v.length;w++)if(d=v[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(w,1);break t}}d=c.createElement(o),ft(d,o,a),c.head.appendChild(d);break;case"meta":if(v=iy("meta","content",c).get(o+(a.content||""))){for(w=0;w<v.length;w++)if(d=v[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(w,1);break t}}d=c.createElement(o),ft(d,o,a),c.head.appendChild(d);break;default:throw Error(s(468,o))}d[mt]=e,rt(d),o=d}e.stateNode=o}else ay(c,e.type,e.stateNode);else e.stateNode=ny(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?ay(c,e.type,e.stateNode):ny(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&dd(e,e.memoizedProps,a.memoizedProps)}break;case 27:_t(n,e),Nt(e),o&512&&(Ke||a===null||mn(a,a.return)),a!==null&&o&4&&dd(e,e.memoizedProps,a.memoizedProps);break;case 5:if(_t(n,e),Nt(e),o&512&&(Ke||a===null||mn(a,a.return)),e.flags&32){c=e.stateNode;try{xa(c,"")}catch(N){Me(e,e.return,N)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,dd(e,c,a!==null?a.memoizedProps:c)),o&1024&&(md=!0);break;case 6:if(_t(n,e),Nt(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(N){Me(e,e.return,N)}}break;case 3:if(hl=null,c=an,an=dl(n.containerInfo),_t(n,e),an=c,Nt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{jo(n.containerInfo)}catch(N){Me(e,e.return,N)}md&&(md=!1,ug(e));break;case 4:o=an,an=dl(e.stateNode.containerInfo),_t(n,e),Nt(e),an=o;break;case 12:_t(n,e),Nt(e);break;case 13:_t(n,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wd=Rt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,pd(e,o)));break;case 22:c=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,B=Bn,H=Ke;if(Bn=B||c,Ke=H||k,_t(n,e),Ke=H,Bn=B,Nt(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||k||Bn||Ke||Ii(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,c)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=k.stateNode;var Y=k.memoizedProps.style,_=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;w.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(N){Me(k,k.return,N)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=c?"":k.memoizedProps}catch(N){Me(k,k.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,pd(e,a))));break;case 19:_t(n,e),Nt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,pd(e,o)));break;case 30:break;case 21:break;default:_t(n,e),Nt(e)}}function Nt(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(ng(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,d=fd(e);Ws(e,d,c);break;case 5:var v=a.stateNode;a.flags&32&&(xa(v,""),a.flags&=-33);var w=fd(e);Ws(e,w,v);break;case 3:case 4:var k=a.stateNode.containerInfo,B=fd(e);hd(e,B,k);break;default:throw Error(s(161))}}catch(H){Me(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ci(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(e,n.alternate,n),n=n.sibling}function Ii(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:li(4,n,n.return),Ii(n);break;case 1:mn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&eg(n,n.return,a),Ii(n);break;case 27:mo(n.stateNode);case 26:case 5:mn(n,n.return),Ii(n);break;case 22:n.memoizedState===null&&Ii(n);break;case 30:Ii(n);break;default:Ii(n)}e=e.sibling}}function ui(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:ui(c,d,a),io(4,d);break;case 1:if(ui(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(B){Me(o,o.return,B)}if(o=d,c=o.updateQueue,c!==null){var w=o.stateNode;try{var k=c.shared.hiddenCallbacks;if(k!==null)for(c.shared.hiddenCallbacks=null,c=0;c<k.length;c++)Pp(k[c],w)}catch(B){Me(o,o.return,B)}}a&&v&64&&J0(d),ao(d,d.return);break;case 27:ig(d);case 26:case 5:ui(c,d,a),a&&o===null&&v&4&&tg(d),ao(d,d.return);break;case 12:ui(c,d,a);break;case 13:ui(c,d,a),a&&v&4&&lg(c,d);break;case 22:d.memoizedState===null&&ui(c,d,a),ao(d,d.return);break;case 30:break;default:ui(c,d,a)}n=n.sibling}}function gd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yr(a))}function yd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yr(e))}function pn(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dg(e,n,a,o),n=n.sibling}function dg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:pn(e,n,a,o),c&2048&&io(9,n);break;case 1:pn(e,n,a,o);break;case 3:pn(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yr(e)));break;case 12:if(c&2048){pn(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,v=d.id,w=d.onPostCommit;typeof w=="function"&&w(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Me(n,n.return,k)}}else pn(e,n,a,o);break;case 13:pn(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?pn(e,n,a,o):ro(e,n):d._visibility&2?pn(e,n,a,o):(d._visibility|=2,Va(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&gd(v,n);break;case 24:pn(e,n,a,o),c&2048&&yd(n.alternate,n);break;default:pn(e,n,a,o)}}function Va(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,v=n,w=a,k=o,B=v.flags;switch(v.tag){case 0:case 11:case 15:Va(d,v,w,k,c),io(8,v);break;case 23:break;case 22:var H=v.stateNode;v.memoizedState!==null?H._visibility&2?Va(d,v,w,k,c):ro(d,v):(H._visibility|=2,Va(d,v,w,k,c)),c&&B&2048&&gd(v.alternate,v);break;case 24:Va(d,v,w,k,c),c&&B&2048&&yd(v.alternate,v);break;default:Va(d,v,w,k,c)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:ro(a,o),c&2048&&gd(o.alternate,o);break;case 24:ro(a,o),c&2048&&yd(o.alternate,o);break;default:ro(a,o)}n=n.sibling}}var oo=8192;function Pa(e){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)fg(e),e=e.sibling}function fg(e){switch(e.tag){case 26:Pa(e),e.flags&oo&&e.memoizedState!==null&&Lj(an,e.memoizedState,e.memoizedProps);break;case 5:Pa(e);break;case 3:case 4:var n=an;an=dl(e.stateNode.containerInfo),Pa(e),an=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,Pa(e),oo=n):Pa(e));break;default:Pa(e)}}function hg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function so(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];st=o,pg(o,e)}hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mg(e),e=e.sibling}function mg(e){switch(e.tag){case 0:case 11:case 15:so(e),e.flags&2048&&li(9,e,e.return);break;case 3:so(e);break;case 12:so(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Js(e)):so(e);break;default:so(e)}}function Js(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];st=o,pg(o,e)}hg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:li(8,n,n.return),Js(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Js(n));break;default:Js(n)}e=e.sibling}}function pg(e,n){for(;st!==null;){var a=st;switch(a.tag){case 0:case 11:case 15:li(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,st=o;else e:for(a=e;st!==null;){o=st;var c=o.sibling,d=o.return;if(og(o),o===a){st=null;break e}if(c!==null){c.return=d,st=c;break e}st=d}}}var Z2={getCacheForType:function(e){var n=pt(it),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Q2=typeof WeakMap=="function"?WeakMap:Map,Te=0,Oe=null,ve=null,we=0,Ae=0,Vt=null,di=!1,Ua=!1,vd=!1,Nn=0,Xe=0,fi=0,Ki=0,xd=0,Kt=0,Ha=0,lo=null,Ct=null,bd=!1,wd=0,el=1/0,tl=null,hi=null,dt=0,mi=null,$a=null,Ya=0,jd=0,zd=null,gg=null,co=0,Sd=null;function Pt(){if((Te&2)!==0&&we!==0)return we&-we;if(U.T!==null){var e=Da;return e!==0?e:Rd()}return Mm()}function yg(){Kt===0&&(Kt=(we&536870912)===0||Se?Em():536870912);var e=It.current;return e!==null&&(e.flags|=32),Kt}function Ut(e,n,a){(e===Oe&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Ga(e,0),pi(e,we,Kt,!1)),Ar(e,a),((Te&2)===0||e!==Oe)&&(e===Oe&&((Te&2)===0&&(Ki|=a),Xe===4&&pi(e,we,Kt,!1)),gn(e))}function vg(e,n,a){if((Te&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Tr(e,n),c=o?ej(e,n):Ad(e,n,!0),d=o;do{if(c===0){Ua&&!o&&pi(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!W2(a)){c=Ad(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var w=e;c=lo;var k=w.current.memoizedState.isDehydrated;if(k&&(Ga(w,v).flags|=256),v=Ad(w,v,!1),v!==2){if(vd&&!k){w.errorRecoveryDisabledLanes|=d,Ki|=d,c=4;break e}d=Ct,Ct=c,d!==null&&(Ct===null?Ct=d:Ct.push.apply(Ct,d))}c=v}if(d=!1,c!==2)continue}}if(c===1){Ga(e,0),pi(e,n,0,!0);break}e:{switch(o=e,d=c,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:pi(o,n,Kt,!di);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=wd+300-Rt(),10<c)){if(pi(o,n,Kt,!di),fs(o,0,!0)!==0)break e;o.timeoutHandle=Fg(xg.bind(null,o,a,Ct,tl,bd,n,Kt,Ki,Ha,di,d,2,-0,0),c);break e}xg(o,a,Ct,tl,bd,n,Kt,Ki,Ha,di,d,0,-0,0)}}break}while(!0);gn(e)}function xg(e,n,a,o,c,d,v,w,k,B,H,Y,_,N){if(e.timeoutHandle=-1,Y=n.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(yo={stylesheets:null,count:0,unsuspend:Oj},fg(n),Y=Bj(),Y!==null)){e.cancelPendingCommit=Y(Tg.bind(null,e,n,d,a,o,c,v,w,k,H,1,_,N)),pi(e,d,v,!B);return}Tg(e,n,d,a,o,c,v,w,k)}function W2(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!Lt(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pi(e,n,a,o){n&=~xd,n&=~Ki,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-Ot(c),v=1<<d;o[d]=-1,c&=~v}a!==0&&Dm(e,a,n)}function nl(){return(Te&6)===0?(uo(0),!1):!0}function kd(){if(ve!==null){if(Ae===0)var e=ve.return;else e=ve,Cn=Yi=null,$u(e),_a=null,eo=0,e=ve;for(;e!==null;)W0(e.alternate,e),e=e.return;ve=null}}function Ga(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gj(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),kd(),Oe=e,ve=a=Tn(e.current,null),we=n,Ae=0,Vt=null,di=!1,Ua=Tr(e,n),vd=!1,Ha=Kt=xd=Ki=fi=Xe=0,Ct=lo=null,bd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ot(o),d=1<<c;n|=e[c],o&=~d}return Nn=n,Ss(),a}function bg(e,n){ge=null,U.H=Ys,n===qr||n===Os?(n=Np(),Ae=3):n===Lp?(n=Np(),Ae=4):Ae=n===V0?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vt=n,ve===null&&(Xe=1,Is(e,Gt(n,e.current)))}function wg(){var e=U.H;return U.H=Ys,e===null?Ys:e}function jg(){var e=U.A;return U.A=Z2,e}function Td(){Xe=4,di||(we&4194048)!==we&&It.current!==null||(Ua=!0),(fi&134217727)===0&&(Ki&134217727)===0||Oe===null||pi(Oe,we,Kt,!1)}function Ad(e,n,a){var o=Te;Te|=2;var c=wg(),d=jg();(Oe!==e||we!==n)&&(tl=null,Ga(e,n)),n=!1;var v=Xe;e:do try{if(Ae!==0&&ve!==null){var w=ve,k=Vt;switch(Ae){case 8:kd(),v=6;break e;case 3:case 2:case 9:case 6:It.current===null&&(n=!0);var B=Ae;if(Ae=0,Vt=null,qa(e,w,k,B),a&&Ua){v=0;break e}break;default:B=Ae,Ae=0,Vt=null,qa(e,w,k,B)}}J2(),v=Xe;break}catch(H){bg(e,H)}while(!0);return n&&e.shellSuspendCounter++,Cn=Yi=null,Te=o,U.H=c,U.A=d,ve===null&&(Oe=null,we=0,Ss()),v}function J2(){for(;ve!==null;)zg(ve)}function ej(e,n){var a=Te;Te|=2;var o=wg(),c=jg();Oe!==e||we!==n?(tl=null,el=Rt()+500,Ga(e,n)):Ua=Tr(e,n);e:do try{if(Ae!==0&&ve!==null){n=ve;var d=Vt;t:switch(Ae){case 1:Ae=0,Vt=null,qa(e,n,d,1);break;case 2:case 9:if(Bp(d)){Ae=0,Vt=null,Sg(n);break}n=function(){Ae!==2&&Ae!==9||Oe!==e||(Ae=7),gn(e)},d.then(n,n);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Bp(d)?(Ae=0,Vt=null,Sg(n)):(Ae=0,Vt=null,qa(e,n,d,7));break;case 5:var v=null;switch(ve.tag){case 26:v=ve.memoizedState;case 5:case 27:var w=ve;if(!v||ry(v)){Ae=0,Vt=null;var k=w.sibling;if(k!==null)ve=k;else{var B=w.return;B!==null?(ve=B,il(B)):ve=null}break t}}Ae=0,Vt=null,qa(e,n,d,5);break;case 6:Ae=0,Vt=null,qa(e,n,d,6);break;case 8:kd(),Xe=6;break e;default:throw Error(s(462))}}tj();break}catch(H){bg(e,H)}while(!0);return Cn=Yi=null,U.H=o,U.A=c,Te=a,ve!==null?0:(Oe=null,we=0,Ss(),Xe)}function tj(){for(;ve!==null&&!dn();)zg(ve)}function zg(e){var n=Z0(e.alternate,e,Nn);e.memoizedProps=e.pendingProps,n===null?il(e):ve=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=G0(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=G0(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:$u(n);default:W0(a,n),n=ve=kp(n,Nn),n=Z0(a,n,Nn)}e.memoizedProps=e.pendingProps,n===null?il(e):ve=n}function qa(e,n,a,o){Cn=Yi=null,$u(n),_a=null,eo=0;var c=n.return;try{if(G2(e,c,n,a,we)){Xe=1,Is(e,Gt(a,e.current)),ve=null;return}}catch(d){if(c!==null)throw ve=c,d;Xe=1,Is(e,Gt(a,e.current)),ve=null;return}n.flags&32768?(Se||o===1?e=!0:Ua||(we&536870912)!==0?e=!1:(di=e=!0,(o===2||o===9||o===3||o===6)&&(o=It.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(n,e)):il(n)}function il(e){var n=e;do{if((n.flags&32768)!==0){kg(n,di);return}e=n.return;var a=X2(n.alternate,n,Nn);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);Xe===0&&(Xe=5)}function kg(e,n){do{var a=F2(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Xe=6,ve=null}function Tg(e,n,a,o,c,d,v,w,k){e.cancelPendingCommit=null;do al();while(dt!==0);if((Te&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=yu,Ow(e,a,d,v,w,k),e===Oe&&(ve=Oe=null,we=0),$a=n,mi=e,Ya=a,jd=d,zd=c,gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rj(Mi,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,c=I.p,I.p=2,v=Te,Te|=4;try{I2(e,n,a)}finally{Te=v,I.p=c,U.T=o}}dt=1,Ag(),Eg(),Cg()}}function Ag(){if(dt===1){dt=0;var e=mi,n=$a,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var c=Te;Te|=4;try{cg(n,e);var d=Pd,v=pp(e.containerInfo),w=d.focusedElem,k=d.selectionRange;if(v!==w&&w&&w.ownerDocument&&mp(w.ownerDocument.documentElement,w)){if(k!==null&&fu(w)){var B=k.start,H=k.end;if(H===void 0&&(H=B),"selectionStart"in w)w.selectionStart=B,w.selectionEnd=Math.min(H,w.value.length);else{var Y=w.ownerDocument||document,_=Y&&Y.defaultView||window;if(_.getSelection){var N=_.getSelection(),ue=w.textContent.length,se=Math.min(k.start,ue),Re=k.end===void 0?se:Math.min(k.end,ue);!N.extend&&se>Re&&(v=Re,Re=se,se=v);var R=hp(w,se),E=hp(w,Re);if(R&&E&&(N.rangeCount!==1||N.anchorNode!==R.node||N.anchorOffset!==R.offset||N.focusNode!==E.node||N.focusOffset!==E.offset)){var M=Y.createRange();M.setStart(R.node,R.offset),N.removeAllRanges(),se>Re?(N.addRange(M),N.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),N.addRange(M))}}}}for(Y=[],N=w;N=N.parentNode;)N.nodeType===1&&Y.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Y.length;w++){var $=Y[w];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}gl=!!Vd,Pd=Vd=null}finally{Te=c,I.p=o,U.T=a}}e.current=n,dt=2}}function Eg(){if(dt===2){dt=0;var e=mi,n=$a,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var c=Te;Te|=4;try{rg(e,n.alternate,n)}finally{Te=c,I.p=o,U.T=a}}dt=3}}function Cg(){if(dt===4||dt===3){dt=0,ua();var e=mi,n=$a,a=Ya,o=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dt=5:(dt=0,$a=mi=null,Dg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(hi=null),qc(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Qn,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,c=I.p,I.p=2,U.T=null;try{for(var d=e.onRecoverableError,v=0;v<o.length;v++){var w=o[v];d(w.value,{componentStack:w.stack})}}finally{U.T=n,I.p=c}}(Ya&3)!==0&&al(),gn(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Sd?co++:(co=0,Sd=e):co=0,uo(0)}}function Dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yr(n)))}function al(e){return Ag(),Eg(),Cg(),Rg()}function Rg(){if(dt!==5)return!1;var e=mi,n=jd;jd=0;var a=qc(Ya),o=U.T,c=I.p;try{I.p=32>a?32:a,U.T=null,a=zd,zd=null;var d=mi,v=Ya;if(dt=0,$a=mi=null,Ya=0,(Te&6)!==0)throw Error(s(331));var w=Te;if(Te|=4,mg(d.current),dg(d,d.current,v,a),Te=w,uo(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Qn,d)}catch{}return!0}finally{I.p=c,U.T=o,Dg(e,n)}}function Mg(e,n,a){n=Gt(a,n),n=nd(e.stateNode,n,2),e=ai(e,n,2),e!==null&&(Ar(e,2),gn(e))}function Me(e,n,a){if(e.tag===3)Mg(e,e,a);else for(;n!==null;){if(n.tag===3){Mg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(hi===null||!hi.has(o))){e=Gt(a,e),a=_0(2),o=ai(n,a,2),o!==null&&(N0(a,o,n,e),Ar(o,2),gn(o));break}}n=n.return}}function Ed(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Q2;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(vd=!0,c.add(a),e=nj.bind(null,e,n,a),n.then(e,e))}function nj(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Oe===e&&(we&a)===a&&(Xe===4||Xe===3&&(we&62914560)===we&&300>Rt()-wd?(Te&2)===0&&Ga(e,0):xd|=a,Ha===we&&(Ha=0)),gn(e)}function Og(e,n){n===0&&(n=Cm()),e=Ta(e,n),e!==null&&(Ar(e,n),gn(e))}function ij(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Og(e,a)}function aj(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Og(e,a)}function rj(e,n){return St(e,n)}var rl=null,Xa=null,Cd=!1,ol=!1,Dd=!1,Zi=0;function gn(e){e!==Xa&&e.next===null&&(Xa===null?rl=Xa=e:Xa=Xa.next=e),ol=!0,Cd||(Cd=!0,sj())}function uo(e,n){if(!Dd&&ol){Dd=!0;do for(var a=!1,o=rl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var v=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Ot(42|e)+1)-1,d&=c&~(v&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Ng(o,d))}else d=we,d=fs(o,o===Oe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Tr(o,d)||(a=!0,Ng(o,d));o=o.next}while(a);Dd=!1}}function oj(){Lg()}function Lg(){ol=Cd=!1;var e=0;Zi!==0&&(pj()&&(e=Zi),Zi=0);for(var n=Rt(),a=null,o=rl;o!==null;){var c=o.next,d=Bg(o,n);d===0?(o.next=null,a===null?rl=c:a.next=c,c===null&&(Xa=a)):(a=o,(e!==0||(d&3)!==0)&&(ol=!0)),o=c}uo(e)}function Bg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Ot(d),w=1<<v,k=c[v];k===-1?((w&a)===0||(w&o)!==0)&&(c[v]=Mw(w,n)):k<=n&&(e.expiredLanes|=w),d&=~w}if(n=Oe,a=we,a=fs(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ri(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Tr(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ri(o),qc(a)){case 2:case 8:a=Kn;break;case 32:a=Mi;break;case 268435456:a=Zn;break;default:a=Mi}return o=_g.bind(null,e),a=St(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ri(o),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(dt!==0&&dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(al()&&e.callbackNode!==a)return null;var o=we;return o=fs(e,e===Oe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(vg(e,o,n),Bg(e,Rt()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function Ng(e,n){if(al())return null;vg(e,n,!0)}function sj(){yj(function(){(Te&6)!==0?St(In,oj):Lg()})}function Rd(){return Zi===0&&(Zi=Em()),Zi}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ys(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function lj(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=Vg((c[kt]||null).action),v=o.submitter;v&&(n=(n=v[kt]||null)?Vg(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var w=new ws("action","action",null,o,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Zi!==0){var k=v?Pg(c,v):new FormData(c);Qu(a,{pending:!0,data:k,method:c.method,action:d},null,k)}}else typeof d=="function"&&(w.preventDefault(),k=v?Pg(c,v):new FormData(c),Qu(a,{pending:!0,data:k,method:c.method,action:d},d,k))},currentTarget:c}]})}}for(var Md=0;Md<gu.length;Md++){var Od=gu[Md],cj=Od.toLowerCase(),uj=Od[0].toUpperCase()+Od.slice(1);nn(cj,"on"+uj)}nn(vp,"onAnimationEnd"),nn(xp,"onAnimationIteration"),nn(bp,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(A2,"onTransitionRun"),nn(E2,"onTransitionStart"),nn(C2,"onTransitionCancel"),nn(wp,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Li("onBeforeInput",["compositionend","keypress","textInput","paste"]),Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dj=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function Ug(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var v=o.length-1;0<=v;v--){var w=o[v],k=w.instance,B=w.currentTarget;if(w=w.listener,k!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=B;try{d(c)}catch(H){Fs(H)}c.currentTarget=null,d=k}else for(v=0;v<o.length;v++){if(w=o[v],k=w.instance,B=w.currentTarget,w=w.listener,k!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=B;try{d(c)}catch(H){Fs(H)}c.currentTarget=null,d=k}}}}function xe(e,n){var a=n[Xc];a===void 0&&(a=n[Xc]=new Set);var o=e+"__bubble";a.has(o)||(Hg(n,e,2,!1),a.add(o))}function Ld(e,n,a){var o=0;n&&(o|=4),Hg(a,e,o,n)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Bd(e){if(!e[sl]){e[sl]=!0,Lm.forEach(function(a){a!=="selectionchange"&&(dj.has(a)||Ld(a,!1,e),Ld(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sl]||(n[sl]=!0,Ld("selectionchange",!1,n))}}function Hg(e,n,a,o){switch(dy(n)){case 2:var c=Vj;break;case 8:c=Pj;break;default:c=Kd}a=c.bind(null,n,a,e),c=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function _d(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var w=o.stateNode.containerInfo;if(w===c)break;if(v===4)for(v=o.return;v!==null;){var k=v.tag;if((k===3||k===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;w!==null;){if(v=ha(w),v===null)return;if(k=v.tag,k===5||k===6||k===26||k===27){o=d=v;continue e}w=w.parentNode}}o=o.return}Im(function(){var B=d,H=tu(a),Y=[];e:{var _=jp.get(e);if(_!==void 0){var N=ws,ue=e;switch(e){case"keypress":if(xs(a)===0)break e;case"keydown":case"keyup":N=r2;break;case"focusin":ue="focus",N=su;break;case"focusout":ue="blur",N=su;break;case"beforeblur":case"afterblur":N=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=l2;break;case vp:case xp:case bp:N=Zw;break;case wp:N=u2;break;case"scroll":case"scrollend":N=qw;break;case"wheel":N=f2;break;case"copy":case"cut":case"paste":N=Ww;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Jm;break;case"toggle":case"beforetoggle":N=m2}var se=(n&4)!==0,Re=!se&&(e==="scroll"||e==="scrollend"),R=se?_!==null?_+"Capture":null:_;se=[];for(var E=B,M;E!==null;){var $=E;if(M=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||M===null||R===null||($=Dr(E,R),$!=null&&se.push(ho(E,$,M))),Re)break;E=E.return}0<se.length&&(_=new N(_,ue,null,a,H),Y.push({event:_,listeners:se}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",_&&a!==eu&&(ue=a.relatedTarget||a.fromElement)&&(ha(ue)||ue[fa]))break e;if((N||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,N?(ue=a.relatedTarget||a.toElement,N=B,ue=ue?ha(ue):null,ue!==null&&(Re=u(ue),se=ue.tag,ue!==Re||se!==5&&se!==27&&se!==6)&&(ue=null)):(N=null,ue=B),N!==ue)){if(se=Qm,$="onMouseLeave",R="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(se=Jm,$="onPointerLeave",R="onPointerEnter",E="pointer"),Re=N==null?_:Cr(N),M=ue==null?_:Cr(ue),_=new se($,E+"leave",N,a,H),_.target=Re,_.relatedTarget=M,$=null,ha(H)===B&&(se=new se(R,E+"enter",ue,a,H),se.target=M,se.relatedTarget=Re,$=se),Re=$,N&&ue)t:{for(se=N,R=ue,E=0,M=se;M;M=Fa(M))E++;for(M=0,$=R;$;$=Fa($))M++;for(;0<E-M;)se=Fa(se),E--;for(;0<M-E;)R=Fa(R),M--;for(;E--;){if(se===R||R!==null&&se===R.alternate)break t;se=Fa(se),R=Fa(R)}se=null}else se=null;N!==null&&$g(Y,_,N,se,!1),ue!==null&&Re!==null&&$g(Y,Re,ue,se,!0)}}e:{if(_=B?Cr(B):window,N=_.nodeName&&_.nodeName.toLowerCase(),N==="select"||N==="input"&&_.type==="file")var ne=sp;else if(rp(_))if(lp)ne=S2;else{ne=j2;var ye=w2}else N=_.nodeName,!N||N.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?B&&Jc(B.elementType)&&(ne=sp):ne=z2;if(ne&&(ne=ne(e,B))){op(Y,ne,a,H);break e}ye&&ye(e,_,B),e==="focusout"&&B&&_.type==="number"&&B.memoizedProps.value!=null&&Wc(_,"number",_.value)}switch(ye=B?Cr(B):window,e){case"focusin":(rp(ye)||ye.contentEditable==="true")&&(za=ye,hu=B,Vr=null);break;case"focusout":Vr=hu=za=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,gp(Y,a,H);break;case"selectionchange":if(T2)break;case"keydown":case"keyup":gp(Y,a,H)}var ae;if(cu)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else ja?ip(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(ep&&a.locale!=="ko"&&(ja||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&ja&&(ae=Km()):(ei=H,au="value"in ei?ei.value:ei.textContent,ja=!0)),ye=ll(B,ce),0<ye.length&&(ce=new Wm(ce,e,null,a,H),Y.push({event:ce,listeners:ye}),ae?ce.data=ae:(ae=ap(a),ae!==null&&(ce.data=ae)))),(ae=g2?y2(e,a):v2(e,a))&&(ce=ll(B,"onBeforeInput"),0<ce.length&&(ye=new Wm("onBeforeInput","beforeinput",null,a,H),Y.push({event:ye,listeners:ce}),ye.data=ae)),lj(Y,e,B,a,H)}Ug(Y,n)})}function ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ll(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Dr(e,a),c!=null&&o.unshift(ho(e,c,d)),c=Dr(e,n),c!=null&&o.push(ho(e,c,d))),e.tag===3)return o;e=e.return}return[]}function Fa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $g(e,n,a,o,c){for(var d=n._reactName,v=[];a!==null&&a!==o;){var w=a,k=w.alternate,B=w.stateNode;if(w=w.tag,k!==null&&k===o)break;w!==5&&w!==26&&w!==27||B===null||(k=B,c?(B=Dr(a,d),B!=null&&v.unshift(ho(a,B,k))):c||(B=Dr(a,d),B!=null&&v.push(ho(a,B,k)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var fj=/\r\n?/g,hj=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(fj,`
`).replace(hj,"")}function Gg(e,n){return n=Yg(n),Yg(e)===n}function cl(){}function De(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xa(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xa(e,""+o);break;case"className":ms(e,"class",o);break;case"tabIndex":ms(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ms(e,a,o);break;case"style":Xm(e,o,d);break;case"data":if(n!=="object"){ms(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ys(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&De(e,n,"name",c.name,c,null),De(e,n,"formEncType",c.formEncType,c,null),De(e,n,"formMethod",c.formMethod,c,null),De(e,n,"formTarget",c.formTarget,c,null)):(De(e,n,"encType",c.encType,c,null),De(e,n,"method",c.method,c,null),De(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ys(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=cl);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ys(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),hs(e,"popover",o);break;case"xlinkActuate":Sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Sn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Sn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Sn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Sn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":hs(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yw.get(a)||a,hs(e,a,o))}}function Nd(e,n,a,o,c,d){switch(a){case"style":Xm(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xa(e,o):(typeof o=="number"||typeof o=="bigint")&&xa(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=cl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bm.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[kt]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):hs(e,a,o)}}}function ft(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:De(e,n,d,v,a,null)}}c&&De(e,n,"srcSet",a.srcSet,a,null),o&&De(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var w=d=v=c=null,k=null,B=null;for(o in a)if(a.hasOwnProperty(o)){var H=a[o];if(H!=null)switch(o){case"name":c=H;break;case"type":v=H;break;case"checked":k=H;break;case"defaultChecked":B=H;break;case"value":d=H;break;case"defaultValue":w=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,n));break;default:De(e,n,o,H,a,null)}}$m(e,d,w,k,B,v,c,!1),ps(e);return;case"select":xe("invalid",e),o=v=d=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":d=w;break;case"defaultValue":v=w;break;case"multiple":o=w;default:De(e,n,c,w,a,null)}n=d,a=v,e.multiple=!!o,n!=null?va(e,!!o,n,!1):a!=null&&va(e,!!o,a,!0);return;case"textarea":xe("invalid",e),d=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(w=a[v],w!=null))switch(v){case"value":o=w;break;case"defaultValue":c=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:De(e,n,v,w,a,null)}Gm(e,o,c,d),ps(e);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:De(e,n,k,o,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<fo.length;o++)xe(fo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:De(e,n,B,o,a,null)}return;default:if(Jc(n)){for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!==void 0&&Nd(e,n,H,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&De(e,n,w,o,a,null))}function mj(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,w=null,k=null,B=null,H=null;for(N in a){var Y=a[N];if(a.hasOwnProperty(N)&&Y!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":k=Y;default:o.hasOwnProperty(N)||De(e,n,N,null,o,Y)}}for(var _ in o){var N=o[_];if(Y=a[_],o.hasOwnProperty(_)&&(N!=null||Y!=null))switch(_){case"type":d=N;break;case"name":c=N;break;case"checked":B=N;break;case"defaultChecked":H=N;break;case"value":v=N;break;case"defaultValue":w=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,n));break;default:N!==Y&&De(e,n,_,N,o,Y)}}Qc(e,v,w,k,B,H,d,c);return;case"select":N=v=w=_=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":N=k;default:o.hasOwnProperty(d)||De(e,n,d,null,o,k)}for(c in o)if(d=o[c],k=a[c],o.hasOwnProperty(c)&&(d!=null||k!=null))switch(c){case"value":_=d;break;case"defaultValue":w=d;break;case"multiple":v=d;default:d!==k&&De(e,n,c,d,o,k)}n=w,a=v,o=N,_!=null?va(e,!!a,_,!1):!!o!=!!a&&(n!=null?va(e,!!a,n,!0):va(e,!!a,a?[]:"",!1));return;case"textarea":N=_=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:De(e,n,w,null,o,c)}for(v in o)if(c=o[v],d=a[v],o.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":_=c;break;case"defaultValue":N=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&De(e,n,v,c,o,d)}Ym(e,_,N);return;case"option":for(var ue in a)if(_=a[ue],a.hasOwnProperty(ue)&&_!=null&&!o.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:De(e,n,ue,null,o,_)}for(k in o)if(_=o[k],N=a[k],o.hasOwnProperty(k)&&_!==N&&(_!=null||N!=null))switch(k){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:De(e,n,k,_,o,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)_=a[se],a.hasOwnProperty(se)&&_!=null&&!o.hasOwnProperty(se)&&De(e,n,se,null,o,_);for(B in o)if(_=o[B],N=a[B],o.hasOwnProperty(B)&&_!==N&&(_!=null||N!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,n));break;default:De(e,n,B,_,o,N)}return;default:if(Jc(n)){for(var Re in a)_=a[Re],a.hasOwnProperty(Re)&&_!==void 0&&!o.hasOwnProperty(Re)&&Nd(e,n,Re,void 0,o,_);for(H in o)_=o[H],N=a[H],!o.hasOwnProperty(H)||_===N||_===void 0&&N===void 0||Nd(e,n,H,_,o,N);return}}for(var R in a)_=a[R],a.hasOwnProperty(R)&&_!=null&&!o.hasOwnProperty(R)&&De(e,n,R,null,o,_);for(Y in o)_=o[Y],N=a[Y],!o.hasOwnProperty(Y)||_===N||_==null&&N==null||De(e,n,Y,_,o,N)}var Vd=null,Pd=null;function ul(e){return e.nodeType===9?e:e.ownerDocument}function qg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ud(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hd=null;function pj(){var e=window.event;return e&&e.type==="popstate"?e===Hd?!1:(Hd=e,!0):(Hd=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,gj=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,yj=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(e){return Ig.resolve(null).then(e).catch(vj)}:Fg;function vj(e){setTimeout(function(){throw e})}function gi(e){return e==="head"}function Kg(e,n){var a=n,o=0,c=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var v=e.ownerDocument;if(a&1&&mo(v.documentElement),a&2&&mo(v.body),a&4)for(a=v.head,mo(a),v=a.firstChild;v;){var w=v.nextSibling,k=v.nodeName;v[Er]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=w}}if(c===0){e.removeChild(d),jo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);jo(n)}function $d(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$d(a),Fc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xj(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Er])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function bj(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=rn(e.nextSibling),e===null))return null;return e}function Yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function wj(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Gd=null;function Zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Qg(e,n,a){switch(n=ul(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Fc(e)}var Zt=new Map,Wg=new Set;function dl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vn=I.d;I.d={f:jj,r:zj,D:Sj,C:kj,L:Tj,m:Aj,X:Cj,S:Ej,M:Dj};function jj(){var e=Vn.f(),n=nl();return e||n}function zj(e){var n=ma(e);n!==null&&n.tag===5&&n.type==="form"?v0(n):Vn.r(e)}var Ia=typeof document>"u"?null:document;function Jg(e,n,a){var o=Ia;if(o&&typeof n=="string"&&n){var c=Yt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Wg.has(c)||(Wg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),ft(n,"link",e),rt(n),o.head.appendChild(n)))}}function Sj(e){Vn.D(e),Jg("dns-prefetch",e,null)}function kj(e,n){Vn.C(e,n),Jg("preconnect",e,n)}function Tj(e,n,a){Vn.L(e,n,a);var o=Ia;if(o&&e&&n){var c='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Yt(a.imageSizes)+'"]')):c+='[href="'+Yt(e)+'"]';var d=c;switch(n){case"style":d=Ka(e);break;case"script":d=Za(e)}Zt.has(d)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Zt.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(po(d))||n==="script"&&o.querySelector(go(d))||(n=o.createElement("link"),ft(n,"link",e),rt(n),o.head.appendChild(n)))}}function Aj(e,n){Vn.m(e,n);var a=Ia;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Za(e)}if(!Zt.has(d)&&(e=y({rel:"modulepreload",href:e},n),Zt.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(d)))return}o=a.createElement("link"),ft(o,"link",e),rt(o),a.head.appendChild(o)}}}function Ej(e,n,a){Vn.S(e,n,a);var o=Ia;if(o&&e){var c=pa(o).hoistableStyles,d=Ka(e);n=n||"default";var v=c.get(d);if(!v){var w={loading:0,preload:null};if(v=o.querySelector(po(d)))w.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Zt.get(d))&&qd(e,a);var k=v=o.createElement("link");rt(k),ft(k,"link",e),k._p=new Promise(function(B,H){k.onload=B,k.onerror=H}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,fl(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:w},c.set(d,v)}}}function Cj(e,n){Vn.X(e,n);var a=Ia;if(a&&e){var o=pa(a).hoistableScripts,c=Za(e),d=o.get(c);d||(d=a.querySelector(go(c)),d||(e=y({src:e,async:!0},n),(n=Zt.get(c))&&Xd(e,n),d=a.createElement("script"),rt(d),ft(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Dj(e,n){Vn.M(e,n);var a=Ia;if(a&&e){var o=pa(a).hoistableScripts,c=Za(e),d=o.get(c);d||(d=a.querySelector(go(c)),d||(e=y({src:e,async:!0,type:"module"},n),(n=Zt.get(c))&&Xd(e,n),d=a.createElement("script"),rt(d),ft(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function ey(e,n,a,o){var c=(c=re.current)?dl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ka(a.href),a=pa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ka(a.href);var d=pa(c).hoistableStyles,v=d.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=c.querySelector(po(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Zt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Zt.set(e,a),d||Rj(c,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Za(a),a=pa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ka(e){return'href="'+Yt(e)+'"'}function po(e){return'link[rel="stylesheet"]['+e+"]"}function ty(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Rj(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ft(n,"link",a),rt(n),e.head.appendChild(n))}function Za(e){return'[src="'+Yt(e)+'"]'}function go(e){return"script[async]"+e}function ny(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(o)return n.instance=o,rt(o),o;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rt(o),ft(o,"style",c),fl(o,a.precedence,e),n.instance=o;case"stylesheet":c=Ka(a.href);var d=e.querySelector(po(c));if(d)return n.state.loading|=4,n.instance=d,rt(d),d;o=ty(a),(c=Zt.get(c))&&qd(o,c),d=(e.ownerDocument||e).createElement("link"),rt(d);var v=d;return v._p=new Promise(function(w,k){v.onload=w,v.onerror=k}),ft(d,"link",o),n.state.loading|=4,fl(d,a.precedence,e),n.instance=d;case"script":return d=Za(a.src),(c=e.querySelector(go(d)))?(n.instance=c,rt(c),c):(o=a,(c=Zt.get(d))&&(o=y({},a),Xd(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),rt(c),ft(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fl(o,a.precedence,e));return n.instance}function fl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,v=0;v<o.length;v++){var w=o[v];if(w.dataset.precedence===n)d=w;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var hl=null;function iy(e,n,a){if(hl===null){var o=new Map,c=hl=new Map;c.set(a,o)}else c=hl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[Er]||d[mt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=e+v;var w=o.get(v);w?w.push(d):o.set(v,[d])}}return o}function ay(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Mj(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ry(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var yo=null;function Oj(){}function Lj(e,n,a){if(yo===null)throw Error(s(475));var o=yo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Ka(a.href),d=e.querySelector(po(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=ml.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,rt(d);return}d=e.ownerDocument||e,a=ty(a),(c=Zt.get(c))&&qd(a,c),d=d.createElement("link"),rt(d);var v=d;v._p=new Promise(function(w,k){v.onload=w,v.onerror=k}),ft(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ml.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Bj(){if(yo===null)throw Error(s(475));var e=yo;return e.stylesheets&&e.count===0&&Fd(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Fd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ml(){if(this.count--,this.count===0){if(this.stylesheets)Fd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pl=null;function Fd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pl=new Map,n.forEach(_j,e),pl=null,ml.call(e))}function _j(e,n){if(!(n.state.loading&4)){var a=pl.get(e);if(a)var o=a.get(null);else{a=new Map,pl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,c),a.set(v,c),this.count++,o=ml.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var vo={$$typeof:D,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Nj(e,n,a,o,c,d,v,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yc(0),this.hiddenUpdates=Yc(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function oy(e,n,a,o,c,d,v,w,k,B,H,Y){return e=new Nj(e,n,a,v,w,k,B,Y),n=1,d===!0&&(n|=24),d=Bt(3,null,null,n),e.current=d,d.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Mu(d),e}function sy(e){return e?(e=Aa,e):Aa}function ly(e,n,a,o,c,d){c=sy(c),o.context===null?o.context=c:o.pendingContext=c,o=ii(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ai(e,o,n),a!==null&&(Ut(a,e,n),Fr(a,e,n))}function cy(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Id(e,n){cy(e,n),(e=e.alternate)&&cy(e,n)}function uy(e){if(e.tag===13){var n=Ta(e,67108864);n!==null&&Ut(n,e,67108864),Id(e,67108864)}}var gl=!0;function Vj(e,n,a,o){var c=U.T;U.T=null;var d=I.p;try{I.p=2,Kd(e,n,a,o)}finally{I.p=d,U.T=c}}function Pj(e,n,a,o){var c=U.T;U.T=null;var d=I.p;try{I.p=8,Kd(e,n,a,o)}finally{I.p=d,U.T=c}}function Kd(e,n,a,o){if(gl){var c=Zd(o);if(c===null)_d(e,n,o,yl,a),fy(e,o);else if(Hj(c,e,n,a,o))o.stopPropagation();else if(fy(e,o),n&4&&-1<Uj.indexOf(e)){for(;c!==null;){var d=ma(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Oi(d.pendingLanes);if(v!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var k=1<<31-Ot(v);w.entanglements[1]|=k,v&=~k}gn(d),(Te&6)===0&&(el=Rt()+500,uo(0))}}break;case 13:w=Ta(d,2),w!==null&&Ut(w,d,2),nl(),Id(d,2)}if(d=Zd(o),d===null&&_d(e,n,o,yl,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else _d(e,n,o,null,a)}}function Zd(e){return e=tu(e),Qd(e)}var yl=null;function Qd(e){if(yl=null,e=ha(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yl=e,null}function dy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hc()){case In:return 2;case Kn:return 8;case Mi:case da:return 32;case Zn:return 268435456;default:return 32}default:return 32}}var Wd=!1,yi=null,vi=null,xi=null,xo=new Map,bo=new Map,bi=[],Uj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fy(e,n){switch(e){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function wo(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=ma(n),n!==null&&uy(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Hj(e,n,a,o,c){switch(n){case"focusin":return yi=wo(yi,e,n,a,o,c),!0;case"dragenter":return vi=wo(vi,e,n,a,o,c),!0;case"mouseover":return xi=wo(xi,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return xo.set(d,wo(xo.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,bo.set(d,wo(bo.get(d)||null,e,n,a,o,c)),!0}return!1}function hy(e){var n=ha(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Lw(e.priority,function(){if(a.tag===13){var o=Pt();o=Gc(o);var c=Ta(a,o);c!==null&&Ut(c,a,o),Id(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=ma(a),n!==null&&uy(n),e.blockedOn=a,!1;n.shift()}return!0}function my(e,n,a){vl(e)&&a.delete(n)}function $j(){Wd=!1,yi!==null&&vl(yi)&&(yi=null),vi!==null&&vl(vi)&&(vi=null),xi!==null&&vl(xi)&&(xi=null),xo.forEach(my),bo.forEach(my)}function xl(e,n){e.blockedOn===n&&(e.blockedOn=null,Wd||(Wd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,$j)))}var bl=null;function py(e){bl!==e&&(bl=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){bl===e&&(bl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Qd(o||a)===null)continue;break}var d=ma(a);d!==null&&(e.splice(n,3),n-=3,Qu(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function jo(e){function n(k){return xl(k,e)}yi!==null&&xl(yi,e),vi!==null&&xl(vi,e),xi!==null&&xl(xi,e),xo.forEach(n),bo.forEach(n);for(var a=0;a<bi.length;a++){var o=bi[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<bi.length&&(a=bi[0],a.blockedOn===null);)hy(a),a.blockedOn===null&&bi.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],v=c[kt]||null;if(typeof d=="function")v||py(a);else if(v){var w=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[kt]||null)w=v.formAction;else if(Qd(c)!==null)continue}else w=v.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),py(a)}}}function Jd(e){this._internalRoot=e}wl.prototype.render=Jd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Pt();ly(a,o,e,n,null,null)},wl.prototype.unmount=Jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ly(e.current,2,null,e,null,null),nl(),n[fa]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Mm();e={blockedOn:null,target:e,priority:n};for(var a=0;a<bi.length&&n!==0&&n<bi[a].priority;a++);bi.splice(a,0,e),a===0&&hy(e)}};var gy=i.version;if(gy!=="19.1.0")throw Error(s(527,gy,"19.1.0"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Yj={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Qn=jl.inject(Yj),Mt=jl}catch{}}return So.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=M0,d=O0,v=L0,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=oy(e,1,!1,null,null,a,o,c,d,v,w,null),e[fa]=n.current,Bd(e),new Jd(n)},So.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",d=M0,v=O0,w=L0,k=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),n=oy(e,1,!0,n,a??null,o,c,d,v,w,k,B),n.context=sy(null),a=n.current,o=Pt(),o=Gc(o),c=ii(o),c.callback=null,ai(a,c,o),a=o,n.current.lanes=a,Ar(n,a),gn(n),e[fa]=n.current,Bd(e),new wl(n)},So.version="19.1.0",So}var Ty;function tz(){if(Ty)return nf.exports;Ty=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),nf.exports=ez(),nf.exports}var nz=tz();const iz=ts(nz);var ko={},Ay;function az(){if(Ay)return ko;Ay=1,Object.defineProperty(ko,"__esModule",{value:!0}),ko.parse=f,ko.serialize=p;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const j=function(){};return j.prototype=Object.create(null),j})();function f(j,z){const T=new u,O=j.length;if(O<2)return T;const L=(z==null?void 0:z.decode)||y;let C=0;do{const V=j.indexOf("=",C);if(V===-1)break;const D=j.indexOf(";",C),X=D===-1?O:D;if(V>X){C=j.lastIndexOf(";",V-1)+1;continue}const P=g(j,C,V),F=m(j,V,P),K=j.slice(P,F);if(T[K]===void 0){let ee=g(j,V+1,X),le=m(j,X,ee);const be=L(j.slice(ee,le));T[K]=be}C=X+1}while(C<O);return T}function g(j,z,T){do{const O=j.charCodeAt(z);if(O!==32&&O!==9)return z}while(++z<T);return T}function m(j,z,T){for(;z>T;){const O=j.charCodeAt(--z);if(O!==32&&O!==9)return z+1}return T}function p(j,z,T){const O=(T==null?void 0:T.encode)||encodeURIComponent;if(!t.test(j))throw new TypeError(`argument name is invalid: ${j}`);const L=O(z);if(!i.test(L))throw new TypeError(`argument val is invalid: ${z}`);let C=j+"="+L;if(!T)return C;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);C+="; Max-Age="+T.maxAge}if(T.domain){if(!r.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);C+="; Domain="+T.domain}if(T.path){if(!s.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);C+="; Path="+T.path}if(T.expires){if(!b(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);C+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(C+="; HttpOnly"),T.secure&&(C+="; Secure"),T.partitioned&&(C+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return C}function y(j){if(j.indexOf("%")===-1)return j;try{return decodeURIComponent(j)}catch{return j}}function b(j){return l.call(j)==="[object Date]"}return ko}az();var Ey="popstate";function rz(t={}){function i(s,l){let{pathname:u,search:f,hash:g}=s.location;return Yf("",{pathname:u,search:f,hash:g},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(s,l){return typeof l=="string"?l:Xo(l)}return sz(i,r,null,t)}function He(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function wn(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function oz(){return Math.random().toString(36).substring(2,10)}function Cy(t,i){return{usr:t.state,key:t.key,idx:i}}function Yf(t,i,r=null,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof i=="string"?xr(i):i,state:r,key:i&&i.key||s||oz()}}function Xo({pathname:t="/",search:i="",hash:r=""}){return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xr(t){let i={};if(t){let r=t.indexOf("#");r>=0&&(i.hash=t.substring(r),t=t.substring(0,r));let s=t.indexOf("?");s>=0&&(i.search=t.substring(s),t=t.substring(0,s)),t&&(i.pathname=t)}return i}function sz(t,i,r,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,g="POP",m=null,p=y();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function y(){return(f.state||{idx:null}).idx}function b(){g="POP";let L=y(),C=L==null?null:L-p;p=L,m&&m({action:g,location:O.location,delta:C})}function j(L,C){g="PUSH";let V=Yf(O.location,L,C);p=y()+1;let D=Cy(V,p),X=O.createHref(V);try{f.pushState(D,"",X)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(X)}u&&m&&m({action:g,location:O.location,delta:1})}function z(L,C){g="REPLACE";let V=Yf(O.location,L,C);p=y();let D=Cy(V,p),X=O.createHref(V);f.replaceState(D,"",X),u&&m&&m({action:g,location:O.location,delta:0})}function T(L){return lz(L)}let O={get action(){return g},get location(){return t(l,f)},listen(L){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Ey,b),m=L,()=>{l.removeEventListener(Ey,b),m=null}},createHref(L){return i(l,L)},createURL:T,encodeLocation(L){let C=T(L);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:j,replace:z,go(L){return f.go(L)}};return O}function lz(t,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),He(r,"No window.location.(origin|href) available to create URL");let s=typeof t=="string"?t:Xo(t);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Uv(t,i,r="/"){return cz(t,i,r,!1)}function cz(t,i,r,s){let l=typeof i=="string"?xr(i):i,u=Gn(l.pathname||"/",r);if(u==null)return null;let f=Hv(t);uz(f);let g=null;for(let m=0;g==null&&m<f.length;++m){let p=wz(u);g=xz(f[m],p,s)}return g}function Hv(t,i=[],r=[],s=""){let l=(u,f,g)=>{let m={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(He(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let p=Yn([s,m.relativePath]),y=r.concat(m);u.children&&u.children.length>0&&(He(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Hv(u.children,i,y,p)),!(u.path==null&&!u.index)&&i.push({path:p,score:yz(p,u.index),routesMeta:y})};return t.forEach((u,f)=>{var g;if(u.path===""||!((g=u.path)!=null&&g.includes("?")))l(u,f);else for(let m of $v(u.path))l(u,f,m)}),i}function $v(t){let i=t.split("/");if(i.length===0)return[];let[r,...s]=i,l=r.endsWith("?"),u=r.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=$v(s.join("/")),g=[];return g.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&g.push(...f),g.map(m=>t.startsWith("/")&&m===""?"/":m)}function uz(t){t.sort((i,r)=>i.score!==r.score?r.score-i.score:vz(i.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var dz=/^:[\w-]+$/,fz=3,hz=2,mz=1,pz=10,gz=-2,Dy=t=>t==="*";function yz(t,i){let r=t.split("/"),s=r.length;return r.some(Dy)&&(s+=gz),i&&(s+=hz),r.filter(l=>!Dy(l)).reduce((l,u)=>l+(dz.test(u)?fz:u===""?mz:pz),s)}function vz(t,i){return t.length===i.length&&t.slice(0,-1).every((s,l)=>s===i[l])?t[t.length-1]-i[i.length-1]:0}function xz(t,i,r=!1){let{routesMeta:s}=t,l={},u="/",f=[];for(let g=0;g<s.length;++g){let m=s[g],p=g===s.length-1,y=u==="/"?i:i.slice(u.length)||"/",b=fc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},y),j=m.route;if(!b&&p&&r&&!s[s.length-1].route.index&&(b=fc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!b)return null;Object.assign(l,b.params),f.push({params:l,pathname:Yn([u,b.pathname]),pathnameBase:kz(Yn([u,b.pathnameBase])),route:j}),b.pathnameBase!=="/"&&(u=Yn([u,b.pathnameBase]))}return f}function fc(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,s]=bz(t.path,t.caseSensitive,t.end),l=i.match(r);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),g=l.slice(1);return{params:s.reduce((p,{paramName:y,isOptional:b},j)=>{if(y==="*"){let T=g[j]||"";f=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const z=g[j];return b&&!z?p[y]=void 0:p[y]=(z||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:t}}function bz(t,i=!1,r=!0){wn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,m)=>(s.push({paramName:g,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(s.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),s]}function wz(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return wn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),t}}function Gn(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,s=t.charAt(r);return s&&s!=="/"?null:t.slice(r)||"/"}function jz(t,i="/"){let{pathname:r,search:s="",hash:l=""}=typeof t=="string"?xr(t):t;return{pathname:r?r.startsWith("/")?r:zz(r,i):i,search:Tz(s),hash:Az(l)}}function zz(t,i){let r=i.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function sf(t,i,r,s){return`Cannot include a '${t}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sz(t){return t.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function Yv(t){let i=Sz(t);return i.map((r,s)=>s===i.length-1?r.pathname:r.pathnameBase)}function Gv(t,i,r,s=!1){let l;typeof t=="string"?l=xr(t):(l={...t},He(!l.pathname||!l.pathname.includes("?"),sf("?","pathname","search",l)),He(!l.pathname||!l.pathname.includes("#"),sf("#","pathname","hash",l)),He(!l.search||!l.search.includes("#"),sf("#","search","hash",l)));let u=t===""||l.pathname==="",f=u?"/":l.pathname,g;if(f==null)g=r;else{let b=i.length-1;if(!s&&f.startsWith("..")){let j=f.split("/");for(;j[0]==="..";)j.shift(),b-=1;l.pathname=j.join("/")}g=b>=0?i[b]:"/"}let m=jz(l,g),p=f&&f!=="/"&&f.endsWith("/"),y=(u||f===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(p||y)&&(m.pathname+="/"),m}var Yn=t=>t.join("/").replace(/\/\/+/g,"/"),kz=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Tz=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Az=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ez(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var qv=["POST","PUT","PATCH","DELETE"];new Set(qv);var Cz=["GET",...qv];new Set(Cz);var br=S.createContext(null);br.displayName="DataRouter";var kc=S.createContext(null);kc.displayName="DataRouterState";var Xv=S.createContext({isTransitioning:!1});Xv.displayName="ViewTransition";var Dz=S.createContext(new Map);Dz.displayName="Fetchers";var Rz=S.createContext(null);Rz.displayName="Await";var jn=S.createContext(null);jn.displayName="Navigation";var wr=S.createContext(null);wr.displayName="Location";var zn=S.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var Eh=S.createContext(null);Eh.displayName="RouteError";function Mz(t,{relative:i}={}){He(ns(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=S.useContext(jn),{hash:l,pathname:u,search:f}=is(t,{relative:i}),g=u;return r!=="/"&&(g=u==="/"?r:Yn([r,u])),s.createHref({pathname:g,search:f,hash:l})}function ns(){return S.useContext(wr)!=null}function un(){return He(ns(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(wr).location}function Oz(){return S.useContext(wr).navigationType}var Fv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iv(t){S.useContext(jn).static||S.useLayoutEffect(t)}function Tc(){let{isDataRoute:t}=S.useContext(zn);return t?Xz():Lz()}function Lz(){He(ns(),"useNavigate() may be used only in the context of a <Router> component.");let t=S.useContext(br),{basename:i,navigator:r}=S.useContext(jn),{matches:s}=S.useContext(zn),{pathname:l}=un(),u=JSON.stringify(Yv(s)),f=S.useRef(!1);return Iv(()=>{f.current=!0}),S.useCallback((m,p={})=>{if(wn(f.current,Fv),!f.current)return;if(typeof m=="number"){r.go(m);return}let y=Gv(m,JSON.parse(u),l,p.relative==="path");t==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Yn([i,y.pathname])),(p.replace?r.replace:r.push)(y,p.state,p)},[i,r,u,l,t])}S.createContext(null);function Kv(){let{matches:t}=S.useContext(zn),i=t[t.length-1];return i?i.params:{}}function is(t,{relative:i}={}){let{matches:r}=S.useContext(zn),{pathname:s}=un(),l=JSON.stringify(Yv(r));return S.useMemo(()=>Gv(t,JSON.parse(l),s,i==="path"),[t,l,s,i])}function Bz(t,i){return Zv(t,i)}function Zv(t,i,r,s){var V;He(ns(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=S.useContext(jn),{matches:f}=S.useContext(zn),g=f[f.length-1],m=g?g.params:{},p=g?g.pathname:"/",y=g?g.pathnameBase:"/",b=g&&g.route;{let D=b&&b.path||"";Qv(p,!b||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let j=un(),z;if(i){let D=typeof i=="string"?xr(i):i;He(y==="/"||((V=D.pathname)==null?void 0:V.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${D.pathname}" was given in the \`location\` prop.`),z=D}else z=j;let T=z.pathname||"/",O=T;if(y!=="/"){let D=y.replace(/^\//,"").split("/");O="/"+T.replace(/^\//,"").split("/").slice(D.length).join("/")}let L=!u&&r&&r.matches&&r.matches.length>0?r.matches:Uv(t,{pathname:O});wn(b||L!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),wn(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Uz(L&&L.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:Yn([y,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?y:Yn([y,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,r,s);return i&&C?S.createElement(wr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...z},navigationType:"POP"}},C):C}function _z(){let t=qz(),i=Ez(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:u},"ErrorBoundary")," or"," ",S.createElement("code",{style:u},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},i),r?S.createElement("pre",{style:l},r):null,f)}var Nz=S.createElement(_z,null),Vz=class extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?S.createElement(zn.Provider,{value:this.props.routeContext},S.createElement(Eh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Pz({routeContext:t,match:i,children:r}){let s=S.useContext(br);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),S.createElement(zn.Provider,{value:t},r)}function Uz(t,i=[],r=null,s=null){if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let l=t,u=r==null?void 0:r.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);He(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,g=-1;if(r)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(g=m),p.route.id){let{loaderData:y,errors:b}=r,j=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!b||b[p.route.id]===void 0);if(p.route.lazy||j){f=!0,g>=0?l=l.slice(0,g+1):l=[l[0]];break}}}return l.reduceRight((m,p,y)=>{let b,j=!1,z=null,T=null;r&&(b=u&&p.route.id?u[p.route.id]:void 0,z=p.route.errorElement||Nz,f&&(g<0&&y===0?(Qv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,T=null):g===y&&(j=!0,T=p.route.hydrateFallbackElement||null)));let O=i.concat(l.slice(0,y+1)),L=()=>{let C;return b?C=z:j?C=T:p.route.Component?C=S.createElement(p.route.Component,null):p.route.element?C=p.route.element:C=m,S.createElement(Pz,{match:p,routeContext:{outlet:m,matches:O,isDataRoute:r!=null},children:C})};return r&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?S.createElement(Vz,{location:r.location,revalidation:r.revalidation,component:z,error:b,children:L(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):L()},null)}function Ch(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hz(t){let i=S.useContext(br);return He(i,Ch(t)),i}function $z(t){let i=S.useContext(kc);return He(i,Ch(t)),i}function Yz(t){let i=S.useContext(zn);return He(i,Ch(t)),i}function Dh(t){let i=Yz(t),r=i.matches[i.matches.length-1];return He(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function Gz(){return Dh("useRouteId")}function qz(){var s;let t=S.useContext(Eh),i=$z("useRouteError"),r=Dh("useRouteError");return t!==void 0?t:(s=i.errors)==null?void 0:s[r]}function Xz(){let{router:t}=Hz("useNavigate"),i=Dh("useNavigate"),r=S.useRef(!1);return Iv(()=>{r.current=!0}),S.useCallback(async(l,u={})=>{wn(r.current,Fv),r.current&&(typeof l=="number"?t.navigate(l):await t.navigate(l,{fromRouteId:i,...u}))},[t,i])}var Ry={};function Qv(t,i,r){!i&&!Ry[t]&&(Ry[t]=!0,wn(!1,r))}S.memo(Fz);function Fz({routes:t,future:i,state:r}){return Zv(t,void 0,r,i)}function ji(t){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Iz({basename:t="/",children:i=null,location:r,navigationType:s="POP",navigator:l,static:u=!1}){He(!ns(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),g=S.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof r=="string"&&(r=xr(r));let{pathname:m="/",search:p="",hash:y="",state:b=null,key:j="default"}=r,z=S.useMemo(()=>{let T=Gn(m,f);return T==null?null:{location:{pathname:T,search:p,hash:y,state:b,key:j},navigationType:s}},[f,m,p,y,b,j,s]);return wn(z!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:S.createElement(jn.Provider,{value:g},S.createElement(wr.Provider,{children:i,value:z}))}function Kz({children:t,location:i}){return Bz(Gf(t),i)}function Gf(t,i=[]){let r=[];return S.Children.forEach(t,(s,l)=>{if(!S.isValidElement(s))return;let u=[...i,l];if(s.type===S.Fragment){r.push.apply(r,Gf(s.props.children,u));return}He(s.type===ji,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Gf(s.props.children,u)),r.push(f)}),r}var ec="get",tc="application/x-www-form-urlencoded";function Ac(t){return t!=null&&typeof t.tagName=="string"}function Zz(t){return Ac(t)&&t.tagName.toLowerCase()==="button"}function Qz(t){return Ac(t)&&t.tagName.toLowerCase()==="form"}function Wz(t){return Ac(t)&&t.tagName.toLowerCase()==="input"}function Jz(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function e5(t,i){return t.button===0&&(!i||i==="_self")&&!Jz(t)}var zl=null;function t5(){if(zl===null)try{new FormData(document.createElement("form"),0),zl=!1}catch{zl=!0}return zl}var n5=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lf(t){return t!=null&&!n5.has(t)?(wn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tc}"`),null):t}function i5(t,i){let r,s,l,u,f;if(Qz(t)){let g=t.getAttribute("action");s=g?Gn(g,i):null,r=t.getAttribute("method")||ec,l=lf(t.getAttribute("enctype"))||tc,u=new FormData(t)}else if(Zz(t)||Wz(t)&&(t.type==="submit"||t.type==="image")){let g=t.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||g.getAttribute("action");if(s=m?Gn(m,i):null,r=t.getAttribute("formmethod")||g.getAttribute("method")||ec,l=lf(t.getAttribute("formenctype"))||lf(g.getAttribute("enctype"))||tc,u=new FormData(g,t),!t5()){let{name:p,type:y,value:b}=t;if(y==="image"){let j=p?`${p}.`:"";u.append(`${j}x`,"0"),u.append(`${j}y`,"0")}else p&&u.append(p,b)}}else{if(Ac(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ec,s=null,l=tc,f=t}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:r.toLowerCase(),encType:l,formData:u,body:f}}function Rh(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}async function a5(t,i){if(t.id in i)return i[t.id];try{let r=await import(t.module);return i[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function r5(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function o5(t,i,r){let s=await Promise.all(t.map(async l=>{let u=i.routes[l.route.id];if(u){let f=await a5(u,r);return f.links?f.links():[]}return[]}));return u5(s.flat(1).filter(r5).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function My(t,i,r,s,l,u){let f=(m,p)=>r[p]?m.route.id!==r[p].route.id:!0,g=(m,p)=>{var y;return r[p].pathname!==m.pathname||((y=r[p].route.path)==null?void 0:y.endsWith("*"))&&r[p].params["*"]!==m.params["*"]};return u==="assets"?i.filter((m,p)=>f(m,p)||g(m,p)):u==="data"?i.filter((m,p)=>{var b;let y=s.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(f(m,p)||g(m,p))return!0;if(m.route.shouldRevalidate){let j=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((b=r[0])==null?void 0:b.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function s5(t,i,{includeHydrateFallback:r}={}){return l5(t.map(s=>{let l=i.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function l5(t){return[...new Set(t)]}function c5(t){let i={},r=Object.keys(t).sort();for(let s of r)i[s]=t[s];return i}function u5(t,i){let r=new Set;return new Set(i),t.reduce((s,l)=>{let u=JSON.stringify(c5(l));return r.has(u)||(r.add(u),s.push({key:u,link:l})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var d5=new Set([100,101,204,205]);function f5(t,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname="_root.data":i&&Gn(r.pathname,i)==="/"?r.pathname=`${i.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function Wv(){let t=S.useContext(br);return Rh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function h5(){let t=S.useContext(kc);return Rh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Mh=S.createContext(void 0);Mh.displayName="FrameworkContext";function Jv(){let t=S.useContext(Mh);return Rh(t,"You must render this element inside a <HydratedRouter> element"),t}function m5(t,i){let r=S.useContext(Mh),[s,l]=S.useState(!1),[u,f]=S.useState(!1),{onFocus:g,onBlur:m,onMouseEnter:p,onMouseLeave:y,onTouchStart:b}=i,j=S.useRef(null);S.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let O=C=>{C.forEach(V=>{f(V.isIntersecting)})},L=new IntersectionObserver(O,{threshold:.5});return j.current&&L.observe(j.current),()=>{L.disconnect()}}},[t]),S.useEffect(()=>{if(s){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[s]);let z=()=>{l(!0)},T=()=>{l(!1),f(!1)};return r?t!=="intent"?[u,j,{}]:[u,j,{onFocus:To(g,z),onBlur:To(m,T),onMouseEnter:To(p,z),onMouseLeave:To(y,T),onTouchStart:To(b,z)}]:[!1,j,{}]}function To(t,i){return r=>{t&&t(r),r.defaultPrevented||i(r)}}function p5({page:t,...i}){let{router:r}=Wv(),s=S.useMemo(()=>Uv(r.routes,t,r.basename),[r.routes,t,r.basename]);return s?S.createElement(y5,{page:t,matches:s,...i}):null}function g5(t){let{manifest:i,routeModules:r}=Jv(),[s,l]=S.useState([]);return S.useEffect(()=>{let u=!1;return o5(t,i,r).then(f=>{u||l(f)}),()=>{u=!0}},[t,i,r]),s}function y5({page:t,matches:i,...r}){let s=un(),{manifest:l,routeModules:u}=Jv(),{basename:f}=Wv(),{loaderData:g,matches:m}=h5(),p=S.useMemo(()=>My(t,i,m,l,s,"data"),[t,i,m,l,s]),y=S.useMemo(()=>My(t,i,m,l,s,"assets"),[t,i,m,l,s]),b=S.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let T=new Set,O=!1;if(i.forEach(C=>{var D;let V=l.routes[C.route.id];!V||!V.hasLoader||(!p.some(X=>X.route.id===C.route.id)&&C.route.id in g&&((D=u[C.route.id])!=null&&D.shouldRevalidate)||V.hasClientLoader?O=!0:T.add(C.route.id))}),T.size===0)return[];let L=f5(t,f);return O&&T.size>0&&L.searchParams.set("_routes",i.filter(C=>T.has(C.route.id)).map(C=>C.route.id).join(",")),[L.pathname+L.search]},[f,g,s,l,p,i,t,u]),j=S.useMemo(()=>s5(y,l),[y,l]),z=g5(y);return S.createElement(S.Fragment,null,b.map(T=>S.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...r})),j.map(T=>S.createElement("link",{key:T,rel:"modulepreload",href:T,...r})),z.map(({key:T,link:O})=>S.createElement("link",{key:T,...O})))}function v5(...t){return i=>{t.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var ex=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ex&&(window.__reactRouterVersion="7.6.0")}catch{}function x5({basename:t,children:i,window:r}){let s=S.useRef();s.current==null&&(s.current=rz({window:r,v5Compat:!0}));let l=s.current,[u,f]=S.useState({action:l.action,location:l.location}),g=S.useCallback(m=>{S.startTransition(()=>f(m))},[f]);return S.useLayoutEffect(()=>l.listen(g),[l,g]),S.createElement(Iz,{basename:t,children:i,location:u.location,navigationType:u.action,navigator:l})}var tx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ze=S.forwardRef(function({onClick:i,discover:r="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:g,target:m,to:p,preventScrollReset:y,viewTransition:b,...j},z){let{basename:T}=S.useContext(jn),O=typeof p=="string"&&tx.test(p),L,C=!1;if(typeof p=="string"&&O&&(L=p,ex))try{let le=new URL(window.location.href),be=p.startsWith("//")?new URL(le.protocol+p):new URL(p),Be=Gn(be.pathname,T);be.origin===le.origin&&Be!=null?p=Be+be.search+be.hash:C=!0}catch{wn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=Mz(p,{relative:l}),[D,X,P]=m5(s,j),F=j5(p,{replace:f,state:g,target:m,preventScrollReset:y,relative:l,viewTransition:b});function K(le){i&&i(le),le.defaultPrevented||F(le)}let ee=S.createElement("a",{...j,...P,href:L||V,onClick:C||u?i:K,ref:v5(z,X),target:m,"data-discover":!O&&r==="render"?"true":void 0});return D&&!O?S.createElement(S.Fragment,null,ee,S.createElement(p5,{page:V})):ee});ze.displayName="Link";var Oh=S.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:g,children:m,...p},y){let b=is(f,{relative:p.relative}),j=un(),z=S.useContext(kc),{navigator:T,basename:O}=S.useContext(jn),L=z!=null&&A5(b)&&g===!0,C=T.encodeLocation?T.encodeLocation(b).pathname:b.pathname,V=j.pathname,D=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;r||(V=V.toLowerCase(),D=D?D.toLowerCase():null,C=C.toLowerCase()),D&&O&&(D=Gn(D,O)||D);const X=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let P=V===C||!l&&V.startsWith(C)&&V.charAt(X)==="/",F=D!=null&&(D===C||!l&&D.startsWith(C)&&D.charAt(C.length)==="/"),K={isActive:P,isPending:F,isTransitioning:L},ee=P?i:void 0,le;typeof s=="function"?le=s(K):le=[s,P?"active":null,F?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let be=typeof u=="function"?u(K):u;return S.createElement(ze,{...p,"aria-current":ee,className:le,ref:y,style:be,to:f,viewTransition:g},typeof m=="function"?m(K):m)});Oh.displayName="NavLink";var b5=S.forwardRef(({discover:t="render",fetcherKey:i,navigate:r,reloadDocument:s,replace:l,state:u,method:f=ec,action:g,onSubmit:m,relative:p,preventScrollReset:y,viewTransition:b,...j},z)=>{let T=k5(),O=T5(g,{relative:p}),L=f.toLowerCase()==="get"?"get":"post",C=typeof g=="string"&&tx.test(g),V=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let X=D.nativeEvent.submitter,P=(X==null?void 0:X.getAttribute("formmethod"))||f;T(X||D.currentTarget,{fetcherKey:i,method:P,navigate:r,replace:l,state:u,relative:p,preventScrollReset:y,viewTransition:b})};return S.createElement("form",{ref:z,method:L,action:O,onSubmit:s?m:V,...j,"data-discover":!C&&t==="render"?"true":void 0})});b5.displayName="Form";function w5(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nx(t){let i=S.useContext(br);return He(i,w5(t)),i}function j5(t,{target:i,replace:r,state:s,preventScrollReset:l,relative:u,viewTransition:f}={}){let g=Tc(),m=un(),p=is(t,{relative:u});return S.useCallback(y=>{if(e5(y,i)){y.preventDefault();let b=r!==void 0?r:Xo(m)===Xo(p);g(t,{replace:b,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[m,g,p,r,s,i,t,l,u,f])}var z5=0,S5=()=>`__${String(++z5)}__`;function k5(){let{router:t}=nx("useSubmit"),{basename:i}=S.useContext(jn),r=Gz();return S.useCallback(async(s,l={})=>{let{action:u,method:f,encType:g,formData:m,body:p}=i5(s,i);if(l.navigate===!1){let y=l.fetcherKey||S5();await t.fetch(y,r,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||g,flushSync:l.flushSync})}else await t.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||g,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[t,i,r])}function T5(t,{relative:i}={}){let{basename:r}=S.useContext(jn),s=S.useContext(zn);He(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...is(t||".",{relative:i})},f=un();if(t==null){u.search=f.search;let g=new URLSearchParams(u.search),m=g.getAll("index");if(m.some(y=>y==="")){g.delete("index"),m.filter(b=>b).forEach(b=>g.append("index",b));let y=g.toString();u.search=y?`?${y}`:""}}return(!t||t===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:Yn([r,u.pathname])),Xo(u)}function A5(t,i={}){let r=S.useContext(Xv);He(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=nx("useViewTransitionState"),l=is(t,{relative:i.relative});if(!r.isTransitioning)return!1;let u=Gn(r.currentLocation.pathname,s)||r.currentLocation.pathname,f=Gn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return fc(l.pathname,f)!=null||fc(l.pathname,u)!=null}[...d5];const ix=S.createContext(),E5=()=>{const[t,i]=S.useState(()=>window.matchMedia("(prefers-color-scheme: dark)").matches);return S.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)"),s=l=>{i(l.matches)};return r.addEventListener?r.addEventListener("change",s):r.addListener(s),()=>{r.removeEventListener?r.removeEventListener("change",s):r.removeListener(s)}},[]),t},C5=({children:t})=>{const i=E5(),[r,s]=S.useState(()=>{const u=localStorage.getItem("flid-theme");return u?u==="dark":i}),l=()=>{s(!r)};return S.useEffect(()=>{localStorage.getItem("flid-theme")||s(i)},[i]),S.useEffect(()=>{localStorage.setItem("flid-theme",r?"dark":"light"),document.documentElement.classList.add("theme-transition"),document.documentElement.classList.add("theme-transition-optimized"),setTimeout(()=>{r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},10);const u=setTimeout(()=>{document.documentElement.classList.remove("theme-transition"),document.documentElement.classList.remove("theme-transition-optimized")},1200);return()=>clearTimeout(u)},[r]),h.jsx(ix.Provider,{value:{darkMode:r,toggleTheme:l},children:t})},D5=()=>{const t=S.useContext(ix);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t};var cf,Oy;function R5(){if(Oy)return cf;Oy=1;var t=typeof Element<"u",i=typeof Map=="function",r=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(u,f){if(u===f)return!0;if(u&&f&&typeof u=="object"&&typeof f=="object"){if(u.constructor!==f.constructor)return!1;var g,m,p;if(Array.isArray(u)){if(g=u.length,g!=f.length)return!1;for(m=g;m--!==0;)if(!l(u[m],f[m]))return!1;return!0}var y;if(i&&u instanceof Map&&f instanceof Map){if(u.size!==f.size)return!1;for(y=u.entries();!(m=y.next()).done;)if(!f.has(m.value[0]))return!1;for(y=u.entries();!(m=y.next()).done;)if(!l(m.value[1],f.get(m.value[0])))return!1;return!0}if(r&&u instanceof Set&&f instanceof Set){if(u.size!==f.size)return!1;for(y=u.entries();!(m=y.next()).done;)if(!f.has(m.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(f)){if(g=u.length,g!=f.length)return!1;for(m=g;m--!==0;)if(u[m]!==f[m])return!1;return!0}if(u.constructor===RegExp)return u.source===f.source&&u.flags===f.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof f.valueOf=="function")return u.valueOf()===f.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof f.toString=="function")return u.toString()===f.toString();if(p=Object.keys(u),g=p.length,g!==Object.keys(f).length)return!1;for(m=g;m--!==0;)if(!Object.prototype.hasOwnProperty.call(f,p[m]))return!1;if(t&&u instanceof Element)return!1;for(m=g;m--!==0;)if(!((p[m]==="_owner"||p[m]==="__v"||p[m]==="__o")&&u.$$typeof)&&!l(u[p[m]],f[p[m]]))return!1;return!0}return u!==u&&f!==f}return cf=function(f,g){try{return l(f,g)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},cf}var M5=R5();const O5=ts(M5);var uf,Ly;function L5(){if(Ly)return uf;Ly=1;var t=function(i,r,s,l,u,f,g,m){if(!i){var p;if(r===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[s,l,u,f,g,m],b=0;p=new Error(r.replace(/%s/g,function(){return y[b++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}};return uf=t,uf}var B5=L5();const By=ts(B5);var df,_y;function _5(){return _y||(_y=1,df=function(i,r,s,l){var u=s?s.call(l,i,r):void 0;if(u!==void 0)return!!u;if(i===r)return!0;if(typeof i!="object"||!i||typeof r!="object"||!r)return!1;var f=Object.keys(i),g=Object.keys(r);if(f.length!==g.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(r),p=0;p<f.length;p++){var y=f[p];if(!m(y))return!1;var b=i[y],j=r[y];if(u=s?s.call(l,b,j,y):void 0,u===!1||u===void 0&&b!==j)return!1}return!0}),df}var N5=_5();const V5=ts(N5);var ax=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(ax||{}),ff={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ny=Object.values(ax),Lh={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P5=Object.entries(Lh).reduce((t,[i,r])=>(t[r]=i,t),{}),sn="data-rh",lr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},cr=(t,i)=>{for(let r=t.length-1;r>=0;r-=1){const s=t[r];if(Object.prototype.hasOwnProperty.call(s,i))return s[i]}return null},U5=t=>{let i=cr(t,"title");const r=cr(t,lr.TITLE_TEMPLATE);if(Array.isArray(i)&&(i=i.join("")),r&&i)return r.replace(/%s/g,()=>i);const s=cr(t,lr.DEFAULT_TITLE);return i||s||void 0},H5=t=>cr(t,lr.ON_CHANGE_CLIENT_STATE)||(()=>{}),hf=(t,i)=>i.filter(r=>typeof r[t]<"u").map(r=>r[t]).reduce((r,s)=>({...r,...s}),{}),$5=(t,i)=>i.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,s)=>{if(!r.length){const l=Object.keys(s);for(let u=0;u<l.length;u+=1){const g=l[u].toLowerCase();if(t.indexOf(g)!==-1&&s[g])return r.concat(s)}}return r},[]),Y5=t=>console&&typeof console.warn=="function"&&console.warn(t),Ao=(t,i,r)=>{const s={};return r.filter(l=>Array.isArray(l[t])?!0:(typeof l[t]<"u"&&Y5(`Helmet: ${t} should be of type "Array". Instead found type "${typeof l[t]}"`),!1)).map(l=>l[t]).reverse().reduce((l,u)=>{const f={};u.filter(m=>{let p;const y=Object.keys(m);for(let j=0;j<y.length;j+=1){const z=y[j],T=z.toLowerCase();i.indexOf(T)!==-1&&!(p==="rel"&&m[p].toLowerCase()==="canonical")&&!(T==="rel"&&m[T].toLowerCase()==="stylesheet")&&(p=T),i.indexOf(z)!==-1&&(z==="innerHTML"||z==="cssText"||z==="itemprop")&&(p=z)}if(!p||!m[p])return!1;const b=m[p].toLowerCase();return s[p]||(s[p]={}),f[p]||(f[p]={}),s[p][b]?!1:(f[p][b]=!0,!0)}).reverse().forEach(m=>l.push(m));const g=Object.keys(f);for(let m=0;m<g.length;m+=1){const p=g[m],y={...s[p],...f[p]};s[p]=y}return l},[]).reverse()},G5=(t,i)=>{if(Array.isArray(t)&&t.length){for(let r=0;r<t.length;r+=1)if(t[r][i])return!0}return!1},q5=t=>({baseTag:$5(["href"],t),bodyAttributes:hf("bodyAttributes",t),defer:cr(t,lr.DEFER),encode:cr(t,lr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:hf("htmlAttributes",t),linkTags:Ao("link",["rel","href"],t),metaTags:Ao("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Ao("noscript",["innerHTML"],t),onChangeClientState:H5(t),scriptTags:Ao("script",["src","innerHTML"],t),styleTags:Ao("style",["cssText"],t),title:U5(t),titleAttributes:hf("titleAttributes",t),prioritizeSeoTags:G5(t,lr.PRIORITIZE_SEO_TAGS)}),rx=t=>Array.isArray(t)?t.join(""):t,X5=(t,i)=>{const r=Object.keys(t);for(let s=0;s<r.length;s+=1)if(i[r[s]]&&i[r[s]].includes(t[r[s]]))return!0;return!1},mf=(t,i)=>Array.isArray(t)?t.reduce((r,s)=>(X5(s,i)?r.priority.push(s):r.default.push(s),r),{priority:[],default:[]}):{default:t,priority:[]},Vy=(t,i)=>({...t,[i]:void 0}),F5=["noscript","script","style"],qf=(t,i=!0)=>i===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ox=t=>Object.keys(t).reduce((i,r)=>{const s=typeof t[r]<"u"?`${r}="${t[r]}"`:`${r}`;return i?`${i} ${s}`:s},""),I5=(t,i,r,s)=>{const l=ox(r),u=rx(i);return l?`<${t} ${sn}="true" ${l}>${qf(u,s)}</${t}>`:`<${t} ${sn}="true">${qf(u,s)}</${t}>`},K5=(t,i,r=!0)=>i.reduce((s,l)=>{const u=l,f=Object.keys(u).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,y)=>{const b=typeof u[y]>"u"?y:`${y}="${qf(u[y],r)}"`;return p?`${p} ${b}`:b},""),g=u.innerHTML||u.cssText||"",m=F5.indexOf(t)===-1;return`${s}<${t} ${sn}="true" ${f}${m?"/>":`>${g}</${t}>`}`},""),sx=(t,i={})=>Object.keys(t).reduce((r,s)=>{const l=Lh[s];return r[l||s]=t[s],r},i),Z5=(t,i,r)=>{const s={key:i,[sn]:!0},l=sx(r,s);return[nt.createElement("title",l,i)]},nc=(t,i)=>i.map((r,s)=>{const l={key:s,[sn]:!0};return Object.keys(r).forEach(u=>{const g=Lh[u]||u;if(g==="innerHTML"||g==="cssText"){const m=r.innerHTML||r.cssText;l.dangerouslySetInnerHTML={__html:m}}else l[g]=r[u]}),nt.createElement(t,l)}),Jt=(t,i,r=!0)=>{switch(t){case"title":return{toComponent:()=>Z5(t,i.title,i.titleAttributes),toString:()=>I5(t,i.title,i.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>sx(i),toString:()=>ox(i)};default:return{toComponent:()=>nc(t,i),toString:()=>K5(t,i,r)}}},Q5=({metaTags:t,linkTags:i,scriptTags:r,encode:s})=>{const l=mf(t,ff.meta),u=mf(i,ff.link),f=mf(r,ff.script);return{priorityMethods:{toComponent:()=>[...nc("meta",l.priority),...nc("link",u.priority),...nc("script",f.priority)],toString:()=>`${Jt("meta",l.priority,s)} ${Jt("link",u.priority,s)} ${Jt("script",f.priority,s)}`},metaTags:l.default,linkTags:u.default,scriptTags:f.default}},W5=t=>{const{baseTag:i,bodyAttributes:r,encode:s=!0,htmlAttributes:l,noscriptTags:u,styleTags:f,title:g="",titleAttributes:m,prioritizeSeoTags:p}=t;let{linkTags:y,metaTags:b,scriptTags:j}=t,z={toComponent:()=>{},toString:()=>""};return p&&({priorityMethods:z,linkTags:y,metaTags:b,scriptTags:j}=Q5(t)),{priority:z,base:Jt("base",i,s),bodyAttributes:Jt("bodyAttributes",r,s),htmlAttributes:Jt("htmlAttributes",l,s),link:Jt("link",y,s),meta:Jt("meta",b,s),noscript:Jt("noscript",u,s),script:Jt("script",j,s),style:Jt("style",f,s),title:Jt("title",{title:g,titleAttributes:m},s)}},Xf=W5,Sl=[],lx=!!(typeof window<"u"&&window.document&&window.document.createElement),Ff=class{constructor(t,i){Pn(this,"instances",[]);Pn(this,"canUseDOM",lx);Pn(this,"context");Pn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Sl:this.instances,add:t=>{(this.canUseDOM?Sl:this.instances).push(t)},remove:t=>{const i=(this.canUseDOM?Sl:this.instances).indexOf(t);(this.canUseDOM?Sl:this.instances).splice(i,1)}}});this.context=t,this.canUseDOM=i||!1,i||(t.helmet=Xf({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},J5={},cx=nt.createContext(J5),ra,ux=(ra=class extends S.Component{constructor(r){super(r);Pn(this,"helmetData");this.helmetData=new Ff(this.props.context||{},ra.canUseDOM)}render(){return nt.createElement(cx.Provider,{value:this.helmetData.value},this.props.children)}},Pn(ra,"canUseDOM",lx),ra),Qa=(t,i)=>{const r=document.head||document.querySelector("head"),s=r.querySelectorAll(`${t}[${sn}]`),l=[].slice.call(s),u=[];let f;return i&&i.length&&i.forEach(g=>{const m=document.createElement(t);for(const p in g)if(Object.prototype.hasOwnProperty.call(g,p))if(p==="innerHTML")m.innerHTML=g.innerHTML;else if(p==="cssText")m.styleSheet?m.styleSheet.cssText=g.cssText:m.appendChild(document.createTextNode(g.cssText));else{const y=p,b=typeof g[y]>"u"?"":g[y];m.setAttribute(p,b)}m.setAttribute(sn,"true"),l.some((p,y)=>(f=y,m.isEqualNode(p)))?l.splice(f,1):u.push(m)}),l.forEach(g=>{var m;return(m=g.parentNode)==null?void 0:m.removeChild(g)}),u.forEach(g=>r.appendChild(g)),{oldTags:l,newTags:u}},If=(t,i)=>{const r=document.getElementsByTagName(t)[0];if(!r)return;const s=r.getAttribute(sn),l=s?s.split(","):[],u=[...l],f=Object.keys(i);for(const g of f){const m=i[g]||"";r.getAttribute(g)!==m&&r.setAttribute(g,m),l.indexOf(g)===-1&&l.push(g);const p=u.indexOf(g);p!==-1&&u.splice(p,1)}for(let g=u.length-1;g>=0;g-=1)r.removeAttribute(u[g]);l.length===u.length?r.removeAttribute(sn):r.getAttribute(sn)!==f.join(",")&&r.setAttribute(sn,f.join(","))},eS=(t,i)=>{typeof t<"u"&&document.title!==t&&(document.title=rx(t)),If("title",i)},Py=(t,i)=>{const{baseTag:r,bodyAttributes:s,htmlAttributes:l,linkTags:u,metaTags:f,noscriptTags:g,onChangeClientState:m,scriptTags:p,styleTags:y,title:b,titleAttributes:j}=t;If("body",s),If("html",l),eS(b,j);const z={baseTag:Qa("base",r),linkTags:Qa("link",u),metaTags:Qa("meta",f),noscriptTags:Qa("noscript",g),scriptTags:Qa("script",p),styleTags:Qa("style",y)},T={},O={};Object.keys(z).forEach(L=>{const{newTags:C,oldTags:V}=z[L];C.length&&(T[L]=C),V.length&&(O[L]=z[L].oldTags)}),i&&i(),m(t,T,O)},Eo=null,tS=t=>{Eo&&cancelAnimationFrame(Eo),t.defer?Eo=requestAnimationFrame(()=>{Py(t,()=>{Eo=null})}):(Py(t),Eo=null)},nS=tS,Uy=class extends S.Component{constructor(){super(...arguments);Pn(this,"rendered",!1)}shouldComponentUpdate(i){return!V5(i,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:i}=this.props.context;i.remove(this),this.emitChange()}emitChange(){const{helmetInstances:i,setHelmet:r}=this.props.context;let s=null;const l=q5(i.get().map(u=>{const f={...u.props};return delete f.context,f}));ux.canUseDOM?nS(l):Xf&&(s=Xf(l)),r(s)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:i}=this.props.context;i.add(this),this.emitChange()}render(){return this.init(),null}},$f,iS=($f=class extends S.Component{shouldComponentUpdate(t){return!O5(Vy(this.props,"helmetData"),Vy(t,"helmetData"))}mapNestedChildrenToProps(t,i){if(!i)return null;switch(t.type){case"script":case"noscript":return{innerHTML:i};case"style":return{cssText:i};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,i,r,s){return{...i,[t.type]:[...i[t.type]||[],{...r,...this.mapNestedChildrenToProps(t,s)}]}}mapObjectTypeChildren(t,i,r,s){switch(t.type){case"title":return{...i,[t.type]:s,titleAttributes:{...r}};case"body":return{...i,bodyAttributes:{...r}};case"html":return{...i,htmlAttributes:{...r}};default:return{...i,[t.type]:{...r}}}}mapArrayTypeChildrenToProps(t,i){let r={...i};return Object.keys(t).forEach(s=>{r={...r,[s]:t[s]}}),r}warnOnInvalidChildren(t,i){return By(Ny.some(r=>t.type===r),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ny.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),By(!i||typeof i=="string"||Array.isArray(i)&&!i.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,i){let r={};return nt.Children.forEach(t,s=>{if(!s||!s.props)return;const{children:l,...u}=s.props,f=Object.keys(u).reduce((m,p)=>(m[P5[p]||p]=u[p],m),{});let{type:g}=s;switch(typeof g=="symbol"?g=g.toString():this.warnOnInvalidChildren(s,l),g){case"Symbol(react.fragment)":i=this.mapChildrenToProps(l,i);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(s,r,f,l);break;default:i=this.mapObjectTypeChildren(s,i,f,l);break}}),this.mapArrayTypeChildrenToProps(r,i)}render(){const{children:t,...i}=this.props;let r={...i},{helmetData:s}=i;if(t&&(r=this.mapChildrenToProps(t,r)),s&&!(s instanceof Ff)){const l=s;s=new Ff(l.context,!0),delete r.helmetData}return s?nt.createElement(Uy,{...r,context:s.value}):nt.createElement(cx.Consumer,null,l=>nt.createElement(Uy,{...r,context:l}))}},Pn($f,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),$f);const Bh=S.createContext({});function Ec(t){const i=S.useRef(null);return i.current===null&&(i.current=t()),i.current}const _h=typeof window<"u",Nh=_h?S.useLayoutEffect:S.useEffect,Cc=S.createContext(null);function Vh(t,i){t.indexOf(i)===-1&&t.push(i)}function Ph(t,i){const r=t.indexOf(i);r>-1&&t.splice(r,1)}const qn=(t,i,r)=>r>i?i:r<t?t:r;let Uh=()=>{};const Xn={},dx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function fx(t){return typeof t=="object"&&t!==null}const hx=t=>/^0[^.\s]+$/u.test(t);function Hh(t){let i;return()=>(i===void 0&&(i=t()),i)}const en=t=>t,aS=(t,i)=>r=>i(t(r)),as=(...t)=>t.reduce(aS),Fo=(t,i,r)=>{const s=i-t;return s===0?1:(r-t)/s};class $h{constructor(){this.subscriptions=[]}add(i){return Vh(this.subscriptions,i),()=>Ph(this.subscriptions,i)}notify(i,r,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](i,r,s);else for(let u=0;u<l;u++){const f=this.subscriptions[u];f&&f(i,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const vn=t=>t*1e3,xn=t=>t/1e3;function mx(t,i){return i?t*(1e3/i):0}const px=(t,i,r)=>(((1-3*r+3*i)*t+(3*r-6*i))*t+3*i)*t,rS=1e-7,oS=12;function sS(t,i,r,s,l){let u,f,g=0;do f=i+(r-i)/2,u=px(f,s,l)-t,u>0?r=f:i=f;while(Math.abs(u)>rS&&++g<oS);return f}function rs(t,i,r,s){if(t===i&&r===s)return en;const l=u=>sS(u,0,1,t,r);return u=>u===0||u===1?u:px(l(u),i,s)}const gx=t=>i=>i<=.5?t(2*i)/2:(2-t(2*(1-i)))/2,yx=t=>i=>1-t(1-i),vx=rs(.33,1.53,.69,.99),Yh=yx(vx),xx=gx(Yh),bx=t=>(t*=2)<1?.5*Yh(t):.5*(2-Math.pow(2,-10*(t-1))),Gh=t=>1-Math.sin(Math.acos(t)),wx=yx(Gh),jx=gx(Gh),lS=rs(.42,0,1,1),cS=rs(0,0,.58,1),zx=rs(.42,0,.58,1),uS=t=>Array.isArray(t)&&typeof t[0]!="number",Sx=t=>Array.isArray(t)&&typeof t[0]=="number",dS={linear:en,easeIn:lS,easeInOut:zx,easeOut:cS,circIn:Gh,circInOut:jx,circOut:wx,backIn:Yh,backInOut:xx,backOut:vx,anticipate:bx},fS=t=>typeof t=="string",Hy=t=>{if(Sx(t)){Uh(t.length===4);const[i,r,s,l]=t;return rs(i,r,s,l)}else if(fS(t))return dS[t];return t},kl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function hS(t,i){let r=new Set,s=new Set,l=!1,u=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function m(y){f.has(y)&&(p.schedule(y),t()),y(g)}const p={schedule:(y,b=!1,j=!1)=>{const T=j&&l?r:s;return b&&f.add(y),T.has(y)||T.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,l){u=!0;return}l=!0,[r,s]=[s,r],r.forEach(m),r.clear(),l=!1,u&&(u=!1,p.process(y))}};return p}const mS=40;function kx(t,i){let r=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,f=kl.reduce((D,X)=>(D[X]=hS(u),D),{}),{setup:g,read:m,resolveKeyframes:p,preUpdate:y,update:b,preRender:j,render:z,postRender:T}=f,O=()=>{const D=Xn.useManualTiming?l.timestamp:performance.now();r=!1,Xn.useManualTiming||(l.delta=s?1e3/60:Math.max(Math.min(D-l.timestamp,mS),1)),l.timestamp=D,l.isProcessing=!0,g.process(l),m.process(l),p.process(l),y.process(l),b.process(l),j.process(l),z.process(l),T.process(l),l.isProcessing=!1,r&&i&&(s=!1,t(O))},L=()=>{r=!0,s=!0,l.isProcessing||t(O)};return{schedule:kl.reduce((D,X)=>{const P=f[X];return D[X]=(F,K=!1,ee=!1)=>(r||L(),P.schedule(F,K,ee)),D},{}),cancel:D=>{for(let X=0;X<kl.length;X++)f[kl[X]].cancel(D)},state:l,steps:f}}const{schedule:$e,cancel:Ti,state:ht,steps:pf}=kx(typeof requestAnimationFrame<"u"?requestAnimationFrame:en,!0);let ic;function pS(){ic=void 0}const Dt={now:()=>(ic===void 0&&Dt.set(ht.isProcessing||Xn.useManualTiming?ht.timestamp:performance.now()),ic),set:t=>{ic=t,queueMicrotask(pS)}},Tx=t=>i=>typeof i=="string"&&i.startsWith(t),qh=Tx("--"),gS=Tx("var(--"),Xh=t=>gS(t)?yS.test(t.split("/*")[0].trim()):!1,yS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,jr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Io={...jr,transform:t=>qn(0,1,t)},Tl={...jr,default:1},Po=t=>Math.round(t*1e5)/1e5,Fh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function vS(t){return t==null}const xS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ih=(t,i)=>r=>!!(typeof r=="string"&&xS.test(r)&&r.startsWith(t)||i&&!vS(r)&&Object.prototype.hasOwnProperty.call(r,i)),Ax=(t,i,r)=>s=>{if(typeof s!="string")return s;const[l,u,f,g]=s.match(Fh);return{[t]:parseFloat(l),[i]:parseFloat(u),[r]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},bS=t=>qn(0,255,t),gf={...jr,transform:t=>Math.round(bS(t))},ta={test:Ih("rgb","red"),parse:Ax("red","green","blue"),transform:({red:t,green:i,blue:r,alpha:s=1})=>"rgba("+gf.transform(t)+", "+gf.transform(i)+", "+gf.transform(r)+", "+Po(Io.transform(s))+")"};function wS(t){let i="",r="",s="",l="";return t.length>5?(i=t.substring(1,3),r=t.substring(3,5),s=t.substring(5,7),l=t.substring(7,9)):(i=t.substring(1,2),r=t.substring(2,3),s=t.substring(3,4),l=t.substring(4,5),i+=i,r+=r,s+=s,l+=l),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const Kf={test:Ih("#"),parse:wS,transform:ta.transform},os=t=>({test:i=>typeof i=="string"&&i.endsWith(t)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${t}`}),zi=os("deg"),bn=os("%"),de=os("px"),jS=os("vh"),zS=os("vw"),$y={...bn,parse:t=>bn.parse(t)/100,transform:t=>bn.transform(t*100)},nr={test:Ih("hsl","hue"),parse:Ax("hue","saturation","lightness"),transform:({hue:t,saturation:i,lightness:r,alpha:s=1})=>"hsla("+Math.round(t)+", "+bn.transform(Po(i))+", "+bn.transform(Po(r))+", "+Po(Io.transform(s))+")"},yt={test:t=>ta.test(t)||Kf.test(t)||nr.test(t),parse:t=>ta.test(t)?ta.parse(t):nr.test(t)?nr.parse(t):Kf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ta.transform(t):nr.transform(t)},SS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function kS(t){var i,r;return isNaN(t)&&typeof t=="string"&&(((i=t.match(Fh))==null?void 0:i.length)||0)+(((r=t.match(SS))==null?void 0:r.length)||0)>0}const Ex="number",Cx="color",TS="var",AS="var(",Yy="${}",ES=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ko(t){const i=t.toString(),r=[],s={color:[],number:[],var:[]},l=[];let u=0;const g=i.replace(ES,m=>(yt.test(m)?(s.color.push(u),l.push(Cx),r.push(yt.parse(m))):m.startsWith(AS)?(s.var.push(u),l.push(TS),r.push(m)):(s.number.push(u),l.push(Ex),r.push(parseFloat(m))),++u,Yy)).split(Yy);return{values:r,split:g,indexes:s,types:l}}function Dx(t){return Ko(t).values}function Rx(t){const{split:i,types:r}=Ko(t),s=i.length;return l=>{let u="";for(let f=0;f<s;f++)if(u+=i[f],l[f]!==void 0){const g=r[f];g===Ex?u+=Po(l[f]):g===Cx?u+=yt.transform(l[f]):u+=l[f]}return u}}const CS=t=>typeof t=="number"?0:t;function DS(t){const i=Dx(t);return Rx(t)(i.map(CS))}const Ai={test:kS,parse:Dx,createTransformer:Rx,getAnimatableNone:DS};function yf(t,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(i-t)*6*r:r<1/2?i:r<2/3?t+(i-t)*(2/3-r)*6:t}function RS({hue:t,saturation:i,lightness:r,alpha:s}){t/=360,i/=100,r/=100;let l=0,u=0,f=0;if(!i)l=u=f=r;else{const g=r<.5?r*(1+i):r+i-r*i,m=2*r-g;l=yf(m,g,t+1/3),u=yf(m,g,t),f=yf(m,g,t-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(f*255),alpha:s}}function hc(t,i){return r=>r>0?i:t}const Ue=(t,i,r)=>t+(i-t)*r,vf=(t,i,r)=>{const s=t*t,l=r*(i*i-s)+s;return l<0?0:Math.sqrt(l)},MS=[Kf,ta,nr],OS=t=>MS.find(i=>i.test(t));function Gy(t){const i=OS(t);if(!i)return!1;let r=i.parse(t);return i===nr&&(r=RS(r)),r}const qy=(t,i)=>{const r=Gy(t),s=Gy(i);if(!r||!s)return hc(t,i);const l={...r};return u=>(l.red=vf(r.red,s.red,u),l.green=vf(r.green,s.green,u),l.blue=vf(r.blue,s.blue,u),l.alpha=Ue(r.alpha,s.alpha,u),ta.transform(l))},Zf=new Set(["none","hidden"]);function LS(t,i){return Zf.has(t)?r=>r<=0?t:i:r=>r>=1?i:t}function BS(t,i){return r=>Ue(t,i,r)}function Kh(t){return typeof t=="number"?BS:typeof t=="string"?Xh(t)?hc:yt.test(t)?qy:VS:Array.isArray(t)?Mx:typeof t=="object"?yt.test(t)?qy:_S:hc}function Mx(t,i){const r=[...t],s=r.length,l=t.map((u,f)=>Kh(u)(u,i[f]));return u=>{for(let f=0;f<s;f++)r[f]=l[f](u);return r}}function _S(t,i){const r={...t,...i},s={};for(const l in r)t[l]!==void 0&&i[l]!==void 0&&(s[l]=Kh(t[l])(t[l],i[l]));return l=>{for(const u in s)r[u]=s[u](l);return r}}function NS(t,i){const r=[],s={color:0,var:0,number:0};for(let l=0;l<i.values.length;l++){const u=i.types[l],f=t.indexes[u][s[u]],g=t.values[f]??0;r[l]=g,s[u]++}return r}const VS=(t,i)=>{const r=Ai.createTransformer(i),s=Ko(t),l=Ko(i);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?Zf.has(t)&&!l.values.length||Zf.has(i)&&!s.values.length?LS(t,i):as(Mx(NS(s,l),l.values),r):hc(t,i)};function Ox(t,i,r){return typeof t=="number"&&typeof i=="number"&&typeof r=="number"?Ue(t,i,r):Kh(t)(t,i)}const PS=t=>{const i=({timestamp:r})=>t(r);return{start:(r=!0)=>$e.update(i,r),stop:()=>Ti(i),now:()=>ht.isProcessing?ht.timestamp:Dt.now()}},Lx=(t,i,r=10)=>{let s="";const l=Math.max(Math.round(i/r),2);for(let u=0;u<l;u++)s+=t(u/(l-1))+", ";return`linear(${s.substring(0,s.length-2)})`},mc=2e4;function Zh(t){let i=0;const r=50;let s=t.next(i);for(;!s.done&&i<mc;)i+=r,s=t.next(i);return i>=mc?1/0:i}function US(t,i=100,r){const s=r({...t,keyframes:[0,i]}),l=Math.min(Zh(s),mc);return{type:"keyframes",ease:u=>s.next(l*u).value/i,duration:xn(l)}}const HS=5;function Bx(t,i,r){const s=Math.max(i-HS,0);return mx(r-t(s),i-s)}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Xy=.001;function $S({duration:t=Fe.duration,bounce:i=Fe.bounce,velocity:r=Fe.velocity,mass:s=Fe.mass}){let l,u,f=1-i;f=qn(Fe.minDamping,Fe.maxDamping,f),t=qn(Fe.minDuration,Fe.maxDuration,xn(t)),f<1?(l=p=>{const y=p*f,b=y*t,j=y-r,z=Qf(p,f),T=Math.exp(-b);return Xy-j/z*T},u=p=>{const b=p*f*t,j=b*r+r,z=Math.pow(f,2)*Math.pow(p,2)*t,T=Math.exp(-b),O=Qf(Math.pow(p,2),f);return(-l(p)+Xy>0?-1:1)*((j-z)*T)/O}):(l=p=>{const y=Math.exp(-p*t),b=(p-r)*t+1;return-.001+y*b},u=p=>{const y=Math.exp(-p*t),b=(r-p)*(t*t);return y*b});const g=5/t,m=GS(l,u,g);if(t=vn(t),isNaN(m))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:t};{const p=Math.pow(m,2)*s;return{stiffness:p,damping:f*2*Math.sqrt(s*p),duration:t}}}const YS=12;function GS(t,i,r){let s=r;for(let l=1;l<YS;l++)s=s-t(s)/i(s);return s}function Qf(t,i){return t*Math.sqrt(1-i*i)}const qS=["duration","bounce"],XS=["stiffness","damping","mass"];function Fy(t,i){return i.some(r=>t[r]!==void 0)}function FS(t){let i={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...t};if(!Fy(t,XS)&&Fy(t,qS))if(t.visualDuration){const r=t.visualDuration,s=2*Math.PI/(r*1.2),l=s*s,u=2*qn(.05,1,1-(t.bounce||0))*Math.sqrt(l);i={...i,mass:Fe.mass,stiffness:l,damping:u}}else{const r=$S(t);i={...i,...r,mass:Fe.mass},i.isResolvedFromDuration=!0}return i}function pc(t=Fe.visualDuration,i=Fe.bounce){const r=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:i}:t;let{restSpeed:s,restDelta:l}=r;const u=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],g={done:!1,value:u},{stiffness:m,damping:p,mass:y,duration:b,velocity:j,isResolvedFromDuration:z}=FS({...r,velocity:-xn(r.velocity||0)}),T=j||0,O=p/(2*Math.sqrt(m*y)),L=f-u,C=xn(Math.sqrt(m/y)),V=Math.abs(L)<5;s||(s=V?Fe.restSpeed.granular:Fe.restSpeed.default),l||(l=V?Fe.restDelta.granular:Fe.restDelta.default);let D;if(O<1){const P=Qf(C,O);D=F=>{const K=Math.exp(-O*C*F);return f-K*((T+O*C*L)/P*Math.sin(P*F)+L*Math.cos(P*F))}}else if(O===1)D=P=>f-Math.exp(-C*P)*(L+(T+C*L)*P);else{const P=C*Math.sqrt(O*O-1);D=F=>{const K=Math.exp(-O*C*F),ee=Math.min(P*F,300);return f-K*((T+O*C*L)*Math.sinh(ee)+P*L*Math.cosh(ee))/P}}const X={calculatedDuration:z&&b||null,next:P=>{const F=D(P);if(z)g.done=P>=b;else{let K=P===0?T:0;O<1&&(K=P===0?vn(T):Bx(D,P,F));const ee=Math.abs(K)<=s,le=Math.abs(f-F)<=l;g.done=ee&&le}return g.value=g.done?f:F,g},toString:()=>{const P=Math.min(Zh(X),mc),F=Lx(K=>X.next(P*K).value,P,30);return P+"ms "+F},toTransition:()=>{}};return X}pc.applyToOptions=t=>{const i=US(t,100,pc);return t.ease=i.ease,t.duration=vn(i.duration),t.type="keyframes",t};function Wf({keyframes:t,velocity:i=0,power:r=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:f,min:g,max:m,restDelta:p=.5,restSpeed:y}){const b=t[0],j={done:!1,value:b},z=ee=>g!==void 0&&ee<g||m!==void 0&&ee>m,T=ee=>g===void 0?m:m===void 0||Math.abs(g-ee)<Math.abs(m-ee)?g:m;let O=r*i;const L=b+O,C=f===void 0?L:f(L);C!==L&&(O=C-b);const V=ee=>-O*Math.exp(-ee/s),D=ee=>C+V(ee),X=ee=>{const le=V(ee),be=D(ee);j.done=Math.abs(le)<=p,j.value=j.done?C:be};let P,F;const K=ee=>{z(j.value)&&(P=ee,F=pc({keyframes:[j.value,T(j.value)],velocity:Bx(D,ee,j.value),damping:l,stiffness:u,restDelta:p,restSpeed:y}))};return K(0),{calculatedDuration:null,next:ee=>{let le=!1;return!F&&P===void 0&&(le=!0,X(ee),K(ee)),P!==void 0&&ee>=P?F.next(ee-P):(!le&&X(ee),j)}}}function IS(t,i,r){const s=[],l=r||Xn.mix||Ox,u=t.length-1;for(let f=0;f<u;f++){let g=l(t[f],t[f+1]);if(i){const m=Array.isArray(i)?i[f]||en:i;g=as(m,g)}s.push(g)}return s}function KS(t,i,{clamp:r=!0,ease:s,mixer:l}={}){const u=t.length;if(Uh(u===i.length),u===1)return()=>i[0];if(u===2&&i[0]===i[1])return()=>i[1];const f=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),i=[...i].reverse());const g=IS(i,s,l),m=g.length,p=y=>{if(f&&y<t[0])return i[0];let b=0;if(m>1)for(;b<t.length-2&&!(y<t[b+1]);b++);const j=Fo(t[b],t[b+1],y);return g[b](j)};return r?y=>p(qn(t[0],t[u-1],y)):p}function ZS(t,i){const r=t[t.length-1];for(let s=1;s<=i;s++){const l=Fo(0,i,s);t.push(Ue(r,1,l))}}function QS(t){const i=[0];return ZS(i,t.length-1),i}function WS(t,i){return t.map(r=>r*i)}function JS(t,i){return t.map(()=>i||zx).splice(0,t.length-1)}function Uo({duration:t=300,keyframes:i,times:r,ease:s="easeInOut"}){const l=uS(s)?s.map(Hy):Hy(s),u={done:!1,value:i[0]},f=WS(r&&r.length===i.length?r:QS(i),t),g=KS(f,i,{ease:Array.isArray(l)?l:JS(i,l)});return{calculatedDuration:t,next:m=>(u.value=g(m),u.done=m>=t,u)}}const ek=t=>t!==null;function Qh(t,{repeat:i,repeatType:r="loop"},s,l=1){const u=t.filter(ek),g=l<0||i&&r!=="loop"&&i%2===1?0:u.length-1;return!g||s===void 0?u[g]:s}const tk={decay:Wf,inertia:Wf,tween:Uo,keyframes:Uo,spring:pc};function _x(t){typeof t.type=="string"&&(t.type=tk[t.type])}class Wh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,r){return this.finished.then(i,r)}}const nk=t=>t/100;class Jh extends Wh{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=(r=!0)=>{var s,l;if(r){const{motionValue:u}=this.options;u&&u.updatedAt!==Dt.now()&&this.tick(Dt.now())}this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(l=(s=this.options).onStop)==null||l.call(s))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;_x(i);const{type:r=Uo,repeat:s=0,repeatDelay:l=0,repeatType:u,velocity:f=0}=i;let{keyframes:g}=i;const m=r||Uo;m!==Uo&&typeof g[0]!="number"&&(this.mixKeyframes=as(nk,Ox(g[0],g[1])),g=[0,100]);const p=m({...i,keyframes:g});u==="mirror"&&(this.mirroredGenerator=m({...i,keyframes:[...g].reverse(),velocity:-f})),p.calculatedDuration===null&&(p.calculatedDuration=Zh(p));const{calculatedDuration:y}=p;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(s+1)-l,this.generator=p}updateTime(i){const r=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(i,r=!1){const{generator:s,totalDuration:l,mixKeyframes:u,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:p=0,keyframes:y,repeat:b,repeatType:j,repeatDelay:z,type:T,onUpdate:O,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-l/this.speed,this.startTime)),r?this.currentTime=i:this.updateTime(i);const C=this.currentTime-p*(this.playbackSpeed>=0?1:-1),V=this.playbackSpeed>=0?C<0:C>l;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let D=this.currentTime,X=s;if(b){const ee=Math.min(this.currentTime,l)/g;let le=Math.floor(ee),be=ee%1;!be&&ee>=1&&(be=1),be===1&&le--,le=Math.min(le,b+1),!!(le%2)&&(j==="reverse"?(be=1-be,z&&(be-=z/g)):j==="mirror"&&(X=f)),D=qn(0,1,be)*g}const P=V?{done:!1,value:y[0]}:X.next(D);u&&(P.value=u(P.value));let{done:F}=P;!V&&m!==null&&(F=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return K&&T!==Wf&&(P.value=Qh(y,this.options,L,this.speed)),O&&O(P.value),K&&this.finish(),P}then(i,r){return this.finished.then(i,r)}get duration(){return xn(this.calculatedDuration)}get time(){return xn(this.currentTime)}set time(i){var r;i=vn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(r=this.driver)==null||r.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(Dt.now());const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=xn(this.currentTime))}play(){var l,u;if(this.isStopped)return;const{driver:i=PS,startTime:r}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),(u=(l=this.options).onPlay)==null||u.call(l);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Dt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(i=this.options).onComplete)==null||r.call(i)}cancel(){var i,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(i=this.options).onCancel)==null||r.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),i.observe(this)}}function ik(t){for(let i=1;i<t.length;i++)t[i]??(t[i]=t[i-1])}const na=t=>t*180/Math.PI,Jf=t=>{const i=na(Math.atan2(t[1],t[0]));return eh(i)},ak={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Jf,rotateZ:Jf,skewX:t=>na(Math.atan(t[1])),skewY:t=>na(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},eh=t=>(t=t%360,t<0&&(t+=360),t),Iy=Jf,Ky=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Zy=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),rk={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ky,scaleY:Zy,scale:t=>(Ky(t)+Zy(t))/2,rotateX:t=>eh(na(Math.atan2(t[6],t[5]))),rotateY:t=>eh(na(Math.atan2(-t[2],t[0]))),rotateZ:Iy,rotate:Iy,skewX:t=>na(Math.atan(t[4])),skewY:t=>na(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function th(t){return t.includes("scale")?1:0}function nh(t,i){if(!t||t==="none")return th(i);const r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,l;if(r)s=rk,l=r;else{const g=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=ak,l=g}if(!l)return th(i);const u=s[i],f=l[1].split(",").map(sk);return typeof u=="function"?u(f):f[u]}const ok=(t,i)=>{const{transform:r="none"}=getComputedStyle(t);return nh(r,i)};function sk(t){return parseFloat(t.trim())}const zr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Sr=new Set(zr),Qy=t=>t===jr||t===de,lk=new Set(["x","y","z"]),ck=zr.filter(t=>!lk.has(t));function uk(t){const i=[];return ck.forEach(r=>{const s=t.getValue(r);s!==void 0&&(i.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),i}const oa={width:({x:t},{paddingLeft:i="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(i)-parseFloat(r),height:({y:t},{paddingTop:i="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(i)-parseFloat(r),top:(t,{top:i})=>parseFloat(i),left:(t,{left:i})=>parseFloat(i),bottom:({y:t},{top:i})=>parseFloat(i)+(t.max-t.min),right:({x:t},{left:i})=>parseFloat(i)+(t.max-t.min),x:(t,{transform:i})=>nh(i,"x"),y:(t,{transform:i})=>nh(i,"y")};oa.translateX=oa.x;oa.translateY=oa.y;const sa=new Set;let ih=!1,ah=!1,rh=!1;function Nx(){if(ah){const t=Array.from(sa).filter(s=>s.needsMeasurement),i=new Set(t.map(s=>s.element)),r=new Map;i.forEach(s=>{const l=uk(s);l.length&&(r.set(s,l),s.render())}),t.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const l=r.get(s);l&&l.forEach(([u,f])=>{var g;(g=s.getValue(u))==null||g.set(f)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}ah=!1,ih=!1,sa.forEach(t=>t.complete(rh)),sa.clear()}function Vx(){sa.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ah=!0)})}function dk(){rh=!0,Vx(),Nx(),rh=!1}class em{constructor(i,r,s,l,u,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=s,this.motionValue=l,this.element=u,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(sa.add(this),ih||(ih=!0,$e.read(Vx),$e.resolveKeyframes(Nx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:s,motionValue:l}=this;if(i[0]===null){const u=l==null?void 0:l.get(),f=i[i.length-1];if(u!==void 0)i[0]=u;else if(s&&r){const g=s.readValue(r,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),l&&u===void 0&&l.set(i[0])}ik(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),sa.delete(this)}cancel(){this.state==="scheduled"&&(sa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const fk=t=>t.startsWith("--");function hk(t,i,r){fk(i)?t.style.setProperty(i,r):t.style[i]=r}const mk=Hh(()=>window.ScrollTimeline!==void 0),pk={};function gk(t,i){const r=Hh(t);return()=>pk[i]??r()}const Px=gk(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),No=([t,i,r,s])=>`cubic-bezier(${t}, ${i}, ${r}, ${s})`,Wy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:No([0,.65,.55,1]),circOut:No([.55,0,1,.45]),backIn:No([.31,.01,.66,-.59]),backOut:No([.33,1.53,.69,.99])};function Ux(t,i){if(t)return typeof t=="function"?Px()?Lx(t,i):"ease-out":Sx(t)?No(t):Array.isArray(t)?t.map(r=>Ux(r,i)||Wy.easeOut):Wy[t]}function yk(t,i,r,{delay:s=0,duration:l=300,repeat:u=0,repeatType:f="loop",ease:g="easeOut",times:m}={},p=void 0){const y={[i]:r};m&&(y.offset=m);const b=Ux(g,l);Array.isArray(b)&&(y.easing=b);const j={delay:s,duration:l,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:u+1,direction:f==="reverse"?"alternate":"normal"};return p&&(j.pseudoElement=p),t.animate(y,j)}function Hx(t){return typeof t=="function"&&"applyToOptions"in t}function vk({type:t,...i}){return Hx(t)&&Px()?t.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class xk extends Wh{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:r,name:s,keyframes:l,pseudoElement:u,allowFlatten:f=!1,finalKeyframe:g,onComplete:m}=i;this.isPseudoElement=!!u,this.allowFlatten=f,this.options=i,Uh(typeof i.type!="string");const p=vk(i);this.animation=yk(r,s,l,p,u),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const y=Qh(l,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):hk(r,s,y),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,r;(r=(i=this.animation).finish)==null||r.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,r;this.isPseudoElement||(r=(i=this.animation).commitStyles)==null||r.call(i)}get duration(){var r,s;const i=((s=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:s.call(r).duration)||0;return xn(Number(i))}get time(){return xn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=vn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&mk()?(this.animation.timeline=i,en):r(this)}}const $x={anticipate:bx,backInOut:xx,circInOut:jx};function bk(t){return t in $x}function wk(t){typeof t.ease=="string"&&bk(t.ease)&&(t.ease=$x[t.ease])}const Jy=10;class jk extends xk{constructor(i){wk(i),_x(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:r,onUpdate:s,onComplete:l,element:u,...f}=this.options;if(!r)return;if(i!==void 0){r.set(i);return}const g=new Jh({...f,autoplay:!1}),m=vn(this.finishedTime??this.time);r.setWithVelocity(g.sample(m-Jy).value,g.sample(m).value,Jy),g.stop()}}const e1=(t,i)=>i==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ai.test(t)||t==="0")&&!t.startsWith("url("));function zk(t){const i=t[0];if(t.length===1)return!0;for(let r=0;r<t.length;r++)if(t[r]!==i)return!0}function Sk(t,i,r,s){const l=t[0];if(l===null)return!1;if(i==="display"||i==="visibility")return!0;const u=t[t.length-1],f=e1(l,i),g=e1(u,i);return!f||!g?!1:zk(t)||(r==="spring"||Hx(r))&&s}function tm(t){return fx(t)&&"offsetHeight"in t}const kk=new Set(["opacity","clipPath","filter","transform"]),Tk=Hh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Ak(t){var p;const{motionValue:i,name:r,repeatDelay:s,repeatType:l,damping:u,type:f}=t;if(!tm((p=i==null?void 0:i.owner)==null?void 0:p.current))return!1;const{onUpdate:g,transformTemplate:m}=i.owner.getProps();return Tk()&&r&&kk.has(r)&&(r!=="transform"||!m)&&!g&&!s&&l!=="mirror"&&u!==0&&f!=="inertia"}const Ek=40;class Ck extends Wh{constructor({autoplay:i=!0,delay:r=0,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f="loop",keyframes:g,name:m,motionValue:p,element:y,...b}){var T;super(),this.stop=()=>{var O,L;this._animation&&(this._animation.stop(),(O=this.stopTimeline)==null||O.call(this)),(L=this.keyframeResolver)==null||L.cancel()},this.createdAt=Dt.now();const j={autoplay:i,delay:r,type:s,repeat:l,repeatDelay:u,repeatType:f,name:m,motionValue:p,element:y,...b},z=(y==null?void 0:y.KeyframeResolver)||em;this.keyframeResolver=new z(g,(O,L,C)=>this.onKeyframesResolved(O,L,j,!C),m,p,y),(T=this.keyframeResolver)==null||T.scheduleResolve()}onKeyframesResolved(i,r,s,l){this.keyframeResolver=void 0;const{name:u,type:f,velocity:g,delay:m,isHandoff:p,onUpdate:y}=s;this.resolvedAt=Dt.now(),Sk(i,u,f,g)||((Xn.instantAnimations||!m)&&(y==null||y(Qh(i,s,r))),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const j={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>Ek?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:i},z=!p&&Ak(j)?new jk({...j,element:j.motionValue.owner.current}):new Jh(j);z.finished.then(()=>this.notifyFinished()).catch(en),this.pendingTimeline&&(this.stopTimeline=z.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=z}get finished(){return this._animation?this.animation.finished:this._finished}then(i,r){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),dk()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}const Dk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Rk(t){const i=Dk.exec(t);if(!i)return[,];const[,r,s,l]=i;return[`--${r??s}`,l]}function Yx(t,i,r=1){const[s,l]=Rk(t);if(!s)return;const u=window.getComputedStyle(i).getPropertyValue(s);if(u){const f=u.trim();return dx(f)?parseFloat(f):f}return Xh(l)?Yx(l,i,r+1):l}function nm(t,i){return(t==null?void 0:t[i])??(t==null?void 0:t.default)??t}const Gx=new Set(["width","height","top","left","right","bottom",...zr]),Mk={test:t=>t==="auto",parse:t=>t},qx=t=>i=>i.test(t),Xx=[jr,de,bn,zi,zS,jS,Mk],t1=t=>Xx.find(qx(t));function Ok(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||hx(t):!0}const Lk=new Set(["brightness","contrast","saturate","opacity"]);function Bk(t){const[i,r]=t.slice(0,-1).split("(");if(i==="drop-shadow")return t;const[s]=r.match(Fh)||[];if(!s)return t;const l=r.replace(s,"");let u=Lk.has(i)?1:0;return s!==r&&(u*=100),i+"("+u+l+")"}const _k=/\b([a-z-]*)\(.*?\)/gu,oh={...Ai,getAnimatableNone:t=>{const i=t.match(_k);return i?i.map(Bk).join(" "):t}},n1={...jr,transform:Math.round},Nk={rotate:zi,rotateX:zi,rotateY:zi,rotateZ:zi,scale:Tl,scaleX:Tl,scaleY:Tl,scaleZ:Tl,skew:zi,skewX:zi,skewY:zi,distance:de,translateX:de,translateY:de,translateZ:de,x:de,y:de,z:de,perspective:de,transformPerspective:de,opacity:Io,originX:$y,originY:$y,originZ:de},im={borderWidth:de,borderTopWidth:de,borderRightWidth:de,borderBottomWidth:de,borderLeftWidth:de,borderRadius:de,radius:de,borderTopLeftRadius:de,borderTopRightRadius:de,borderBottomRightRadius:de,borderBottomLeftRadius:de,width:de,maxWidth:de,height:de,maxHeight:de,top:de,right:de,bottom:de,left:de,padding:de,paddingTop:de,paddingRight:de,paddingBottom:de,paddingLeft:de,margin:de,marginTop:de,marginRight:de,marginBottom:de,marginLeft:de,backgroundPositionX:de,backgroundPositionY:de,...Nk,zIndex:n1,fillOpacity:Io,strokeOpacity:Io,numOctaves:n1},Vk={...im,color:yt,backgroundColor:yt,outlineColor:yt,fill:yt,stroke:yt,borderColor:yt,borderTopColor:yt,borderRightColor:yt,borderBottomColor:yt,borderLeftColor:yt,filter:oh,WebkitFilter:oh},Fx=t=>Vk[t];function Ix(t,i){let r=Fx(t);return r!==oh&&(r=Ai),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const Pk=new Set(["auto","none","0"]);function Uk(t,i,r){let s=0,l;for(;s<t.length&&!l;){const u=t[s];typeof u=="string"&&!Pk.has(u)&&Ko(u).values.length&&(l=t[s]),s++}if(l&&r)for(const u of i)t[u]=Ix(r,l)}class Hk extends em{constructor(i,r,s,l,u){super(i,r,s,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let m=0;m<i.length;m++){let p=i[m];if(typeof p=="string"&&(p=p.trim(),Xh(p))){const y=Yx(p,r.current);y!==void 0&&(i[m]=y),m===i.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Gx.has(s)||i.length!==2)return;const[l,u]=i,f=t1(l),g=t1(u);if(f!==g)if(Qy(f)&&Qy(g))for(let m=0;m<i.length;m++){const p=i[m];typeof p=="string"&&(i[m]=parseFloat(p))}else oa[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,s=[];for(let l=0;l<i.length;l++)(i[l]===null||Ok(i[l]))&&s.push(l);s.length&&Uk(i,s,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=oa[s](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const l=r[r.length-1];l!==void 0&&i.getValue(s,l).jump(l,!1)}measureEndState(){var g;const{element:i,name:r,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const l=i.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=s.length-1,f=s[u];s[u]=oa[r](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(g=this.removedTransforms)!=null&&g.length&&this.removedTransforms.forEach(([m,p])=>{i.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function $k(t,i,r){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let s=document;const l=(r==null?void 0:r[t])??s.querySelectorAll(t);return l?Array.from(l):[]}return Array.from(t)}const i1=30,Yk=t=>!isNaN(parseFloat(t));class Gk{constructor(i,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,l=!0)=>{var f,g;const u=Dt.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty();l&&((g=this.events.renderRequest)==null||g.notify(this.current))},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=Dt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=Yk(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new $h);const s=this.events[i].add(r);return i==="change"?()=>{s(),$e.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i,r=!0){!r||!this.passiveEffect?this.updateAndNotify(i,r):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Dt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>i1)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,i1);return mx(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,r;(i=this.dependents)==null||i.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ur(t,i){return new Gk(t,i)}const Kx=(t,i)=>i&&typeof t=="number"?i.transform(t):t,{schedule:am}=kx(queueMicrotask,!1),on={x:!1,y:!1};function Zx(){return on.x||on.y}function qk(t){return t==="x"||t==="y"?on[t]?null:(on[t]=!0,()=>{on[t]=!1}):on.x||on.y?null:(on.x=on.y=!0,()=>{on.x=on.y=!1})}function Qx(t,i){const r=$k(t),s=new AbortController,l={passive:!0,...i,signal:s.signal};return[r,l,()=>s.abort()]}function a1(t){return!(t.pointerType==="touch"||Zx())}function Xk(t,i,r={}){const[s,l,u]=Qx(t,r),f=g=>{if(!a1(g))return;const{target:m}=g,p=i(m,g);if(typeof p!="function"||!m)return;const y=b=>{a1(b)&&(p(b),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,l)};return s.forEach(g=>{g.addEventListener("pointerenter",f,l)}),u}const Wx=(t,i)=>i?t===i?!0:Wx(t,i.parentElement):!1,rm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Fk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ik(t){return Fk.has(t.tagName)||t.tabIndex!==-1}const ac=new WeakSet;function r1(t){return i=>{i.key==="Enter"&&t(i)}}function xf(t,i){t.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Kk=(t,i)=>{const r=t.currentTarget;if(!r)return;const s=r1(()=>{if(ac.has(r))return;xf(r,"down");const l=r1(()=>{xf(r,"up")}),u=()=>xf(r,"cancel");r.addEventListener("keyup",l,i),r.addEventListener("blur",u,i)});r.addEventListener("keydown",s,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),i)};function o1(t){return rm(t)&&!Zx()}function Zk(t,i,r={}){const[s,l,u]=Qx(t,r),f=g=>{const m=g.currentTarget;if(!o1(g))return;ac.add(m);const p=i(m,g),y=(z,T)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",j),ac.has(m)&&ac.delete(m),o1(z)&&typeof p=="function"&&p(z,{success:T})},b=z=>{y(z,m===window||m===document||r.useGlobalTarget||Wx(m,z.target))},j=z=>{y(z,!1)};window.addEventListener("pointerup",b,l),window.addEventListener("pointercancel",j,l)};return s.forEach(g=>{(r.useGlobalTarget?window:g).addEventListener("pointerdown",f,l),tm(g)&&(g.addEventListener("focus",p=>Kk(p,l)),!Ik(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),u}function Jx(t){return fx(t)&&"ownerSVGElement"in t}function Qk(t){return Jx(t)&&t.tagName==="svg"}const vt=t=>!!(t&&t.getVelocity),Wk=[...Xx,yt,Ai],Jk=t=>Wk.find(qx(t)),om=S.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class e3 extends S.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const s=r.offsetParent,l=tm(s)&&s.offsetWidth||0,u=this.props.sizeRef.current;u.height=r.offsetHeight||0,u.width=r.offsetWidth||0,u.top=r.offsetTop,u.left=r.offsetLeft,u.right=l-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function t3({children:t,isPresent:i,anchorX:r}){const s=S.useId(),l=S.useRef(null),u=S.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=S.useContext(om);return S.useInsertionEffect(()=>{const{width:g,height:m,top:p,left:y,right:b}=u.current;if(i||!l.current||!g||!m)return;const j=r==="left"?`left: ${y}`:`right: ${b}`;l.current.dataset.motionPopId=s;const z=document.createElement("style");return f&&(z.nonce=f),document.head.appendChild(z),z.sheet&&z.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${m}px !important;
            ${j}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.contains(z)&&document.head.removeChild(z)}},[i]),h.jsx(e3,{isPresent:i,childRef:l,sizeRef:u,children:S.cloneElement(t,{ref:l})})}const n3=({children:t,initial:i,isPresent:r,onExitComplete:s,custom:l,presenceAffectsLayout:u,mode:f,anchorX:g})=>{const m=Ec(i3),p=S.useId();let y=!0,b=S.useMemo(()=>(y=!1,{id:p,initial:i,isPresent:r,custom:l,onExitComplete:j=>{m.set(j,!0);for(const z of m.values())if(!z)return;s&&s()},register:j=>(m.set(j,!1),()=>m.delete(j))}),[r,m,s]);return u&&y&&(b={...b}),S.useMemo(()=>{m.forEach((j,z)=>m.set(z,!1))},[r]),S.useEffect(()=>{!r&&!m.size&&s&&s()},[r]),f==="popLayout"&&(t=h.jsx(t3,{isPresent:r,anchorX:g,children:t})),h.jsx(Cc.Provider,{value:b,children:t})};function i3(){return new Map}function eb(t=!0){const i=S.useContext(Cc);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:l}=i,u=S.useId();S.useEffect(()=>{if(t)return l(u)},[t]);const f=S.useCallback(()=>t&&s&&s(u),[u,s,t]);return!r&&s?[!1,f]:[!0]}const Al=t=>t.key||"";function s1(t){const i=[];return S.Children.forEach(t,r=>{S.isValidElement(r)&&i.push(r)}),i}const Ei=({children:t,custom:i,initial:r=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:u="sync",propagate:f=!1,anchorX:g="left"})=>{const[m,p]=eb(f),y=S.useMemo(()=>s1(t),[t]),b=f&&!m?[]:y.map(Al),j=S.useRef(!0),z=S.useRef(y),T=Ec(()=>new Map),[O,L]=S.useState(y),[C,V]=S.useState(y);Nh(()=>{j.current=!1,z.current=y;for(let P=0;P<C.length;P++){const F=Al(C[P]);b.includes(F)?T.delete(F):T.get(F)!==!0&&T.set(F,!1)}},[C,b.length,b.join("-")]);const D=[];if(y!==O){let P=[...y];for(let F=0;F<C.length;F++){const K=C[F],ee=Al(K);b.includes(ee)||(P.splice(F,0,K),D.push(K))}return u==="wait"&&D.length&&(P=D),V(s1(P)),L(y),null}const{forceRender:X}=S.useContext(Bh);return h.jsx(h.Fragment,{children:C.map(P=>{const F=Al(P),K=f&&!m?!1:y===C||b.includes(F),ee=()=>{if(T.has(F))T.set(F,!0);else return;let le=!0;T.forEach(be=>{be||(le=!1)}),le&&(X==null||X(),V(z.current),f&&(p==null||p()),s&&s())};return h.jsx(n3,{isPresent:K,initial:!j.current||r?void 0:!1,custom:i,presenceAffectsLayout:l,mode:u,onExitComplete:K?void 0:ee,anchorX:g,children:P},F)})})},tb=S.createContext({strict:!1}),l1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},dr={};for(const t in l1)dr[t]={isEnabled:i=>l1[t].some(r=>!!i[r])};function a3(t){for(const i in t)dr[i]={...dr[i],...t[i]}}const r3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function gc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||r3.has(t)}let nb=t=>!gc(t);function o3(t){t&&(nb=i=>i.startsWith("on")?!gc(i):t(i))}try{o3(require("@emotion/is-prop-valid").default)}catch{}function s3(t,i,r){const s={};for(const l in t)l==="values"&&typeof t.values=="object"||(nb(l)||r===!0&&gc(l)||!i&&!gc(l)||t.draggable&&l.startsWith("onDrag"))&&(s[l]=t[l]);return s}function l3(t){if(typeof Proxy>"u")return t;const i=new Map,r=(...s)=>t(...s);return new Proxy(r,{get:(s,l)=>l==="create"?t:(i.has(l)||i.set(l,t(l)),i.get(l))})}const Dc=S.createContext({});function Rc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Zo(t){return typeof t=="string"||Array.isArray(t)}const sm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lm=["initial",...sm];function Mc(t){return Rc(t.animate)||lm.some(i=>Zo(t[i]))}function ib(t){return!!(Mc(t)||t.variants)}function c3(t,i){if(Mc(t)){const{initial:r,animate:s}=t;return{initial:r===!1||Zo(r)?r:void 0,animate:Zo(s)?s:void 0}}return t.inherit!==!1?i:{}}function u3(t){const{initial:i,animate:r}=c3(t,S.useContext(Dc));return S.useMemo(()=>({initial:i,animate:r}),[c1(i),c1(r)])}function c1(t){return Array.isArray(t)?t.join(" "):t}const d3=Symbol.for("motionComponentSymbol");function ir(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function f3(t,i,r){return S.useCallback(s=>{s&&t.onMount&&t.onMount(s),i&&(s?i.mount(s):i.unmount()),r&&(typeof r=="function"?r(s):ir(r)&&(r.current=s))},[i])}const cm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),h3="framerAppearId",ab="data-"+cm(h3),rb=S.createContext({});function m3(t,i,r,s,l){var O,L;const{visualElement:u}=S.useContext(Dc),f=S.useContext(tb),g=S.useContext(Cc),m=S.useContext(om).reducedMotion,p=S.useRef(null);s=s||f.renderer,!p.current&&s&&(p.current=s(t,{visualState:i,parent:u,props:r,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:m}));const y=p.current,b=S.useContext(rb);y&&!y.projection&&l&&(y.type==="html"||y.type==="svg")&&p3(p.current,r,l,b);const j=S.useRef(!1);S.useInsertionEffect(()=>{y&&j.current&&y.update(r,g)});const z=r[ab],T=S.useRef(!!z&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,z))&&((L=window.MotionHasOptimisedAnimation)==null?void 0:L.call(window,z)));return Nh(()=>{y&&(j.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),am.render(y.render),T.current&&y.animationState&&y.animationState.animateChanges())}),S.useEffect(()=>{y&&(!T.current&&y.animationState&&y.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,z)}),T.current=!1))}),y}function p3(t,i,r,s){const{layoutId:l,layout:u,drag:f,dragConstraints:g,layoutScroll:m,layoutRoot:p,layoutCrossfade:y}=i;t.projection=new r(t.latestValues,i["data-framer-portal-id"]?void 0:ob(t.parent)),t.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!f||g&&ir(g),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:m,layoutRoot:p})}function ob(t){if(t)return t.options.allowProjection!==!1?t.projection:ob(t.parent)}function g3({preloadedFeatures:t,createVisualElement:i,useRender:r,useVisualState:s,Component:l}){t&&a3(t);function u(g,m){let p;const y={...S.useContext(om),...g,layoutId:y3(g)},{isStatic:b}=y,j=u3(g),z=s(g,b);if(!b&&_h){v3();const T=x3(y);p=T.MeasureLayout,j.visualElement=m3(l,z,y,i,T.ProjectionNode)}return h.jsxs(Dc.Provider,{value:j,children:[p&&j.visualElement?h.jsx(p,{visualElement:j.visualElement,...y}):null,r(l,g,f3(z,j.visualElement,m),z,b,j.visualElement)]})}u.displayName=`motion.${typeof l=="string"?l:`create(${l.displayName??l.name??""})`}`;const f=S.forwardRef(u);return f[d3]=l,f}function y3({layoutId:t}){const i=S.useContext(Bh).id;return i&&t!==void 0?i+"-"+t:t}function v3(t,i){S.useContext(tb).strict}function x3(t){const{drag:i,layout:r}=dr;if(!i&&!r)return{};const s={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(t)||r!=null&&r.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const Qo={};function b3(t){for(const i in t)Qo[i]=t[i],qh(i)&&(Qo[i].isCSSVariable=!0)}function sb(t,{layout:i,layoutId:r}){return Sr.has(t)||t.startsWith("origin")||(i||r!==void 0)&&(!!Qo[t]||t==="opacity")}const w3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},j3=zr.length;function z3(t,i,r){let s="",l=!0;for(let u=0;u<j3;u++){const f=zr[u],g=t[f];if(g===void 0)continue;let m=!0;if(typeof g=="number"?m=g===(f.startsWith("scale")?1:0):m=parseFloat(g)===0,!m||r){const p=Kx(g,im[f]);if(!m){l=!1;const y=w3[f]||f;s+=`${y}(${p}) `}r&&(i[f]=p)}}return s=s.trim(),r?s=r(i,l?"":s):l&&(s="none"),s}function um(t,i,r){const{style:s,vars:l,transformOrigin:u}=t;let f=!1,g=!1;for(const m in i){const p=i[m];if(Sr.has(m)){f=!0;continue}else if(qh(m)){l[m]=p;continue}else{const y=Kx(p,im[m]);m.startsWith("origin")?(g=!0,u[m]=y):s[m]=y}}if(i.transform||(f||r?s.transform=z3(i,t.transform,r):s.transform&&(s.transform="none")),g){const{originX:m="50%",originY:p="50%",originZ:y=0}=u;s.transformOrigin=`${m} ${p} ${y}`}}const dm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function lb(t,i,r){for(const s in i)!vt(i[s])&&!sb(s,r)&&(t[s]=i[s])}function S3({transformTemplate:t},i){return S.useMemo(()=>{const r=dm();return um(r,i,t),Object.assign({},r.vars,r.style)},[i])}function k3(t,i){const r=t.style||{},s={};return lb(s,r,t),Object.assign(s,S3(t,i)),s}function T3(t,i){const r={},s=k3(t,i);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=s,r}const A3={offset:"stroke-dashoffset",array:"stroke-dasharray"},E3={offset:"strokeDashoffset",array:"strokeDasharray"};function C3(t,i,r=1,s=0,l=!0){t.pathLength=1;const u=l?A3:E3;t[u.offset]=de.transform(-s);const f=de.transform(i),g=de.transform(r);t[u.array]=`${f} ${g}`}function cb(t,{attrX:i,attrY:r,attrScale:s,pathLength:l,pathSpacing:u=1,pathOffset:f=0,...g},m,p,y){if(um(t,g,p),m){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:b,style:j}=t;b.transform&&(j.transform=b.transform,delete b.transform),(j.transform||b.transformOrigin)&&(j.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),j.transform&&(j.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox),i!==void 0&&(b.x=i),r!==void 0&&(b.y=r),s!==void 0&&(b.scale=s),l!==void 0&&C3(b,l,u,f,!1)}const ub=()=>({...dm(),attrs:{}}),db=t=>typeof t=="string"&&t.toLowerCase()==="svg";function D3(t,i,r,s){const l=S.useMemo(()=>{const u=ub();return cb(u,i,db(s),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[i]);if(t.style){const u={};lb(u,t.style,t),l.style={...u,...l.style}}return l}const R3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fm(t){return typeof t!="string"||t.includes("-")?!1:!!(R3.indexOf(t)>-1||/[A-Z]/u.test(t))}function M3(t=!1){return(r,s,l,{latestValues:u},f)=>{const m=(fm(r)?D3:T3)(s,u,f,r),p=s3(s,typeof r=="string",t),y=r!==S.Fragment?{...p,...m,ref:l}:{},{children:b}=s,j=S.useMemo(()=>vt(b)?b.get():b,[b]);return S.createElement(r,{...y,children:j})}}function u1(t){const i=[{},{}];return t==null||t.values.forEach((r,s)=>{i[0][s]=r.get(),i[1][s]=r.getVelocity()}),i}function hm(t,i,r,s){if(typeof i=="function"){const[l,u]=u1(s);i=i(r!==void 0?r:t.custom,l,u)}if(typeof i=="string"&&(i=t.variants&&t.variants[i]),typeof i=="function"){const[l,u]=u1(s);i=i(r!==void 0?r:t.custom,l,u)}return i}function rc(t){return vt(t)?t.get():t}function O3({scrapeMotionValuesFromProps:t,createRenderState:i},r,s,l){return{latestValues:L3(r,s,l,t),renderState:i()}}const fb=t=>(i,r)=>{const s=S.useContext(Dc),l=S.useContext(Cc),u=()=>O3(t,i,s,l);return r?u():Ec(u)};function L3(t,i,r,s){const l={},u=s(t,{});for(const j in u)l[j]=rc(u[j]);let{initial:f,animate:g}=t;const m=Mc(t),p=ib(t);i&&p&&!m&&t.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=r?r.initial===!1:!1;y=y||f===!1;const b=y?g:f;if(b&&typeof b!="boolean"&&!Rc(b)){const j=Array.isArray(b)?b:[b];for(let z=0;z<j.length;z++){const T=hm(t,j[z]);if(T){const{transitionEnd:O,transition:L,...C}=T;for(const V in C){let D=C[V];if(Array.isArray(D)){const X=y?D.length-1:0;D=D[X]}D!==null&&(l[V]=D)}for(const V in O)l[V]=O[V]}}}return l}function mm(t,i,r){var u;const{style:s}=t,l={};for(const f in s)(vt(s[f])||i.style&&vt(i.style[f])||sb(f,t)||((u=r==null?void 0:r.getValue(f))==null?void 0:u.liveStyle)!==void 0)&&(l[f]=s[f]);return l}const B3={useVisualState:fb({scrapeMotionValuesFromProps:mm,createRenderState:dm})};function hb(t,i,r){const s=mm(t,i,r);for(const l in t)if(vt(t[l])||vt(i[l])){const u=zr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[u]=t[l]}return s}const _3={useVisualState:fb({scrapeMotionValuesFromProps:hb,createRenderState:ub})};function N3(t,i){return function(s,{forwardMotionProps:l}={forwardMotionProps:!1}){const f={...fm(s)?_3:B3,preloadedFeatures:t,useRender:M3(l),createVisualElement:i,Component:s};return g3(f)}}function Wo(t,i,r){const s=t.getProps();return hm(s,i,r!==void 0?r:s.custom,t)}const sh=t=>Array.isArray(t);function V3(t,i,r){t.hasValue(i)?t.getValue(i).set(r):t.addValue(i,ur(r))}function P3(t){return sh(t)?t[t.length-1]||0:t}function pm(t,i){const r=Wo(t,i);let{transitionEnd:s={},transition:l={},...u}=r||{};u={...u,...s};for(const f in u){const g=P3(u[f]);V3(t,f,g)}}function U3(t){return!!(vt(t)&&t.add)}function lh(t,i){const r=t.getValue("willChange");if(U3(r))return r.add(i);if(!r&&Xn.WillChange){const s=new Xn.WillChange("auto");t.addValue("willChange",s),s.add(i)}}function mb(t){return t.props[ab]}const H3=t=>t!==null;function $3(t,{repeat:i,repeatType:r="loop"},s){const l=t.filter(H3),u=i&&r!=="loop"&&i%2===1?0:l.length-1;return l[u]}const Y3={type:"spring",stiffness:500,damping:25,restSpeed:10},G3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),q3={type:"keyframes",duration:.8},X3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},F3=(t,{keyframes:i})=>i.length>2?q3:Sr.has(t)?t.startsWith("scale")?G3(i[1]):Y3:X3;function I3({when:t,delay:i,delayChildren:r,staggerChildren:s,staggerDirection:l,repeat:u,repeatType:f,repeatDelay:g,from:m,elapsed:p,...y}){return!!Object.keys(y).length}const gm=(t,i,r,s={},l,u)=>f=>{const g=nm(s,t)||{},m=g.delay||s.delay||0;let{elapsed:p=0}=s;p=p-vn(m);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-p,onUpdate:j=>{i.set(j),g.onUpdate&&g.onUpdate(j)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:t,motionValue:i,element:u?void 0:l};I3(g)||Object.assign(y,F3(t,y)),y.duration&&(y.duration=vn(y.duration)),y.repeatDelay&&(y.repeatDelay=vn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),(Xn.instantAnimations||Xn.skipAnimations)&&(b=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,b&&!u&&i.get()!==void 0){const j=$3(y.keyframes,g);if(j!==void 0){$e.update(()=>{y.onUpdate(j),y.onComplete()});return}}return g.isSync?new Jh(y):new Ck(y)};function K3({protectedKeys:t,needsAnimating:i},r){const s=t.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,s}function pb(t,i,{delay:r=0,transitionOverride:s,type:l}={}){let{transition:u=t.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(u=s);const m=[],p=l&&t.animationState&&t.animationState.getState()[l];for(const y in g){const b=t.getValue(y,t.latestValues[y]??null),j=g[y];if(j===void 0||p&&K3(p,y))continue;const z={delay:r,...nm(u||{},y)},T=b.get();if(T!==void 0&&!b.isAnimating&&!Array.isArray(j)&&j===T&&!z.velocity)continue;let O=!1;if(window.MotionHandoffAnimation){const C=mb(t);if(C){const V=window.MotionHandoffAnimation(C,y,$e);V!==null&&(z.startTime=V,O=!0)}}lh(t,y),b.start(gm(y,b,j,t.shouldReduceMotion&&Gx.has(y)?{type:!1}:z,t,O));const L=b.animation;L&&m.push(L)}return f&&Promise.all(m).then(()=>{$e.update(()=>{f&&pm(t,f)})}),m}function ch(t,i,r={}){var m;const s=Wo(t,i,r.type==="exit"?(m=t.presenceContext)==null?void 0:m.custom:void 0);let{transition:l=t.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(l=r.transitionOverride);const u=s?()=>Promise.all(pb(t,s,r)):()=>Promise.resolve(),f=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:j}=l;return Z3(t,i,y+p,b,j,r)}:()=>Promise.resolve(),{when:g}=l;if(g){const[p,y]=g==="beforeChildren"?[u,f]:[f,u];return p().then(()=>y())}else return Promise.all([u(),f(r.delay)])}function Z3(t,i,r=0,s=0,l=1,u){const f=[],g=(t.variantChildren.size-1)*s,m=l===1?(p=0)=>p*s:(p=0)=>g-p*s;return Array.from(t.variantChildren).sort(Q3).forEach((p,y)=>{p.notify("AnimationStart",i),f.push(ch(p,i,{...u,delay:r+m(y)}).then(()=>p.notify("AnimationComplete",i)))}),Promise.all(f)}function Q3(t,i){return t.sortNodePosition(i)}function gb(t,i,r={}){t.notify("AnimationStart",i);let s;if(Array.isArray(i)){const l=i.map(u=>ch(t,u,r));s=Promise.all(l)}else if(typeof i=="string")s=ch(t,i,r);else{const l=typeof i=="function"?Wo(t,i,r.custom):i;s=Promise.all(pb(t,l,r))}return s.then(()=>{t.notify("AnimationComplete",i)})}function yb(t,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==t.length)return!1;for(let s=0;s<r;s++)if(i[s]!==t[s])return!1;return!0}const W3=lm.length;function vb(t){if(!t)return;if(!t.isControllingVariants){const r=t.parent?vb(t.parent)||{}:{};return t.props.initial!==void 0&&(r.initial=t.props.initial),r}const i={};for(let r=0;r<W3;r++){const s=lm[r],l=t.props[s];(Zo(l)||l===!1)&&(i[s]=l)}return i}const J3=[...sm].reverse(),eT=sm.length;function tT(t){return i=>Promise.all(i.map(({animation:r,options:s})=>gb(t,r,s)))}function nT(t){let i=tT(t),r=d1(),s=!0;const l=m=>(p,y)=>{var j;const b=Wo(t,y,m==="exit"?(j=t.presenceContext)==null?void 0:j.custom:void 0);if(b){const{transition:z,transitionEnd:T,...O}=b;p={...p,...O,...T}}return p};function u(m){i=m(t)}function f(m){const{props:p}=t,y=vb(t.parent)||{},b=[],j=new Set;let z={},T=1/0;for(let L=0;L<eT;L++){const C=J3[L],V=r[C],D=p[C]!==void 0?p[C]:y[C],X=Zo(D),P=C===m?V.isActive:null;P===!1&&(T=L);let F=D===y[C]&&D!==p[C]&&X;if(F&&s&&t.manuallyAnimateOnMount&&(F=!1),V.protectedKeys={...z},!V.isActive&&P===null||!D&&!V.prevProp||Rc(D)||typeof D=="boolean")continue;const K=iT(V.prevProp,D);let ee=K||C===m&&V.isActive&&!F&&X||L>T&&X,le=!1;const be=Array.isArray(D)?D:[D];let Be=be.reduce(l(C),{});P===!1&&(Be={});const{prevResolvedValues:_e={}}=V,zt={..._e,...Be},bt=I=>{ee=!0,j.has(I)&&(le=!0,j.delete(I)),V.needsAnimating[I]=!0;const te=t.getValue(I);te&&(te.liveStyle=!1)};for(const I in zt){const te=Be[I],fe=_e[I];if(z.hasOwnProperty(I))continue;let A=!1;sh(te)&&sh(fe)?A=!yb(te,fe):A=te!==fe,A?te!=null?bt(I):j.add(I):te!==void 0&&j.has(I)?bt(I):V.protectedKeys[I]=!0}V.prevProp=D,V.prevResolvedValues=Be,V.isActive&&(z={...z,...Be}),s&&t.blockInitialAnimation&&(ee=!1),ee&&(!(F&&K)||le)&&b.push(...be.map(I=>({animation:I,options:{type:C}})))}if(j.size){const L={};if(typeof p.initial!="boolean"){const C=Wo(t,Array.isArray(p.initial)?p.initial[0]:p.initial);C&&C.transition&&(L.transition=C.transition)}j.forEach(C=>{const V=t.getBaseTarget(C),D=t.getValue(C);D&&(D.liveStyle=!0),L[C]=V??null}),b.push({animation:L})}let O=!!b.length;return s&&(p.initial===!1||p.initial===p.animate)&&!t.manuallyAnimateOnMount&&(O=!1),s=!1,O?i(b):Promise.resolve()}function g(m,p){var b;if(r[m].isActive===p)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(j=>{var z;return(z=j.animationState)==null?void 0:z.setActive(m,p)}),r[m].isActive=p;const y=f(m);for(const j in r)r[j].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:u,getState:()=>r,reset:()=>{r=d1(),s=!0}}}function iT(t,i){return typeof i=="string"?i!==t:Array.isArray(i)?!yb(i,t):!1}function Qi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function d1(){return{animate:Qi(!0),whileInView:Qi(),whileHover:Qi(),whileTap:Qi(),whileDrag:Qi(),whileFocus:Qi(),exit:Qi()}}class Ci{constructor(i){this.isMounted=!1,this.node=i}update(){}}class aT extends Ci{constructor(i){super(i),i.animationState||(i.animationState=nT(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Rc(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let rT=0;class oT extends Ci{constructor(){super(...arguments),this.id=rT++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const l=this.node.animationState.setActive("exit",!i);r&&!i&&l.then(()=>{r(this.id)})}mount(){const{register:i,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const sT={animation:{Feature:aT},exit:{Feature:oT}};function Jo(t,i,r,s={passive:!0}){return t.addEventListener(i,r,s),()=>t.removeEventListener(i,r)}function ss(t){return{point:{x:t.pageX,y:t.pageY}}}const lT=t=>i=>rm(i)&&t(i,ss(i));function Ho(t,i,r,s){return Jo(t,i,lT(r),s)}function xb({top:t,left:i,right:r,bottom:s}){return{x:{min:i,max:r},y:{min:t,max:s}}}function cT({x:t,y:i}){return{top:i.min,right:t.max,bottom:i.max,left:t.min}}function uT(t,i){if(!i)return t;const r=i({x:t.left,y:t.top}),s=i({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}const bb=1e-4,dT=1-bb,fT=1+bb,wb=.01,hT=0-wb,mT=0+wb;function jt(t){return t.max-t.min}function pT(t,i,r){return Math.abs(t-i)<=r}function f1(t,i,r,s=.5){t.origin=s,t.originPoint=Ue(i.min,i.max,t.origin),t.scale=jt(r)/jt(i),t.translate=Ue(r.min,r.max,t.origin)-t.originPoint,(t.scale>=dT&&t.scale<=fT||isNaN(t.scale))&&(t.scale=1),(t.translate>=hT&&t.translate<=mT||isNaN(t.translate))&&(t.translate=0)}function $o(t,i,r,s){f1(t.x,i.x,r.x,s?s.originX:void 0),f1(t.y,i.y,r.y,s?s.originY:void 0)}function h1(t,i,r){t.min=r.min+i.min,t.max=t.min+jt(i)}function gT(t,i,r){h1(t.x,i.x,r.x),h1(t.y,i.y,r.y)}function m1(t,i,r){t.min=i.min-r.min,t.max=t.min+jt(i)}function Yo(t,i,r){m1(t.x,i.x,r.x),m1(t.y,i.y,r.y)}const p1=()=>({translate:0,scale:1,origin:0,originPoint:0}),ar=()=>({x:p1(),y:p1()}),g1=()=>({min:0,max:0}),Qe=()=>({x:g1(),y:g1()});function Wt(t){return[t("x"),t("y")]}function bf(t){return t===void 0||t===1}function uh({scale:t,scaleX:i,scaleY:r}){return!bf(t)||!bf(i)||!bf(r)}function ea(t){return uh(t)||jb(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function jb(t){return y1(t.x)||y1(t.y)}function y1(t){return t&&t!=="0%"}function yc(t,i,r){const s=t-r,l=i*s;return r+l}function v1(t,i,r,s,l){return l!==void 0&&(t=yc(t,l,s)),yc(t,r,s)+i}function dh(t,i=0,r=1,s,l){t.min=v1(t.min,i,r,s,l),t.max=v1(t.max,i,r,s,l)}function zb(t,{x:i,y:r}){dh(t.x,i.translate,i.scale,i.originPoint),dh(t.y,r.translate,r.scale,r.originPoint)}const x1=.999999999999,b1=1.0000000000001;function yT(t,i,r,s=!1){const l=r.length;if(!l)return;i.x=i.y=1;let u,f;for(let g=0;g<l;g++){u=r[g],f=u.projectionDelta;const{visualElement:m}=u.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&or(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,zb(t,f)),s&&ea(u.latestValues)&&or(t,u.latestValues))}i.x<b1&&i.x>x1&&(i.x=1),i.y<b1&&i.y>x1&&(i.y=1)}function rr(t,i){t.min=t.min+i,t.max=t.max+i}function w1(t,i,r,s,l=.5){const u=Ue(t.min,t.max,l);dh(t,i,r,u,s)}function or(t,i){w1(t.x,i.x,i.scaleX,i.scale,i.originX),w1(t.y,i.y,i.scaleY,i.scale,i.originY)}function Sb(t,i){return xb(uT(t.getBoundingClientRect(),i))}function vT(t,i,r){const s=Sb(t,r),{scroll:l}=i;return l&&(rr(s.x,l.offset.x),rr(s.y,l.offset.y)),s}const kb=({current:t})=>t?t.ownerDocument.defaultView:null,j1=(t,i)=>Math.abs(t-i);function xT(t,i){const r=j1(t.x,i.x),s=j1(t.y,i.y);return Math.sqrt(r**2+s**2)}class Tb{constructor(i,r,{transformPagePoint:s,contextWindow:l,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=jf(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,z=xT(b.offset,{x:0,y:0})>=3;if(!j&&!z)return;const{point:T}=b,{timestamp:O}=ht;this.history.push({...T,timestamp:O});const{onStart:L,onMove:C}=this.handlers;j||(L&&L(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,b)},this.handlePointerMove=(b,j)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=wf(j,this.transformPagePoint),$e.update(this.updatePoint,!0)},this.handlePointerUp=(b,j)=>{this.end();const{onEnd:z,onSessionEnd:T,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=jf(b.type==="pointercancel"?this.lastMoveEventInfo:wf(j,this.transformPagePoint),this.history);this.startEvent&&z&&z(b,L),T&&T(b,L)},!rm(i))return;this.dragSnapToOrigin=u,this.handlers=r,this.transformPagePoint=s,this.contextWindow=l||window;const f=ss(i),g=wf(f,this.transformPagePoint),{point:m}=g,{timestamp:p}=ht;this.history=[{...m,timestamp:p}];const{onSessionStart:y}=r;y&&y(i,jf(g,this.history)),this.removeListeners=as(Ho(this.contextWindow,"pointermove",this.handlePointerMove),Ho(this.contextWindow,"pointerup",this.handlePointerUp),Ho(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Ti(this.updatePoint)}}function wf(t,i){return i?{point:i(t.point)}:t}function z1(t,i){return{x:t.x-i.x,y:t.y-i.y}}function jf({point:t},i){return{point:t,delta:z1(t,Ab(i)),offset:z1(t,bT(i)),velocity:wT(i,.1)}}function bT(t){return t[0]}function Ab(t){return t[t.length-1]}function wT(t,i){if(t.length<2)return{x:0,y:0};let r=t.length-1,s=null;const l=Ab(t);for(;r>=0&&(s=t[r],!(l.timestamp-s.timestamp>vn(i)));)r--;if(!s)return{x:0,y:0};const u=xn(l.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const f={x:(l.x-s.x)/u,y:(l.y-s.y)/u};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function jT(t,{min:i,max:r},s){return i!==void 0&&t<i?t=s?Ue(i,t,s.min):Math.max(t,i):r!==void 0&&t>r&&(t=s?Ue(r,t,s.max):Math.min(t,r)),t}function S1(t,i,r){return{min:i!==void 0?t.min+i:void 0,max:r!==void 0?t.max+r-(t.max-t.min):void 0}}function zT(t,{top:i,left:r,bottom:s,right:l}){return{x:S1(t.x,r,l),y:S1(t.y,i,s)}}function k1(t,i){let r=i.min-t.min,s=i.max-t.max;return i.max-i.min<t.max-t.min&&([r,s]=[s,r]),{min:r,max:s}}function ST(t,i){return{x:k1(t.x,i.x),y:k1(t.y,i.y)}}function kT(t,i){let r=.5;const s=jt(t),l=jt(i);return l>s?r=Fo(i.min,i.max-s,t.min):s>l&&(r=Fo(t.min,t.max-l,i.min)),qn(0,1,r)}function TT(t,i){const r={};return i.min!==void 0&&(r.min=i.min-t.min),i.max!==void 0&&(r.max=i.max-t.min),r}const fh=.35;function AT(t=fh){return t===!1?t=0:t===!0&&(t=fh),{x:T1(t,"left","right"),y:T1(t,"top","bottom")}}function T1(t,i,r){return{min:A1(t,i),max:A1(t,r)}}function A1(t,i){return typeof t=="number"?t:t[i]||0}const ET=new WeakMap;class CT{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.visualElement=i}start(i,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(ss(y).point)},u=(y,b)=>{const{drag:j,dragPropagation:z,onDragStart:T}=this.getProps();if(j&&!z&&(this.openDragLock&&this.openDragLock(),this.openDragLock=qk(j),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Wt(L=>{let C=this.getAxisMotionValue(L).get()||0;if(bn.test(C)){const{projection:V}=this.visualElement;if(V&&V.layout){const D=V.layout.layoutBox[L];D&&(C=jt(D)*(parseFloat(C)/100))}}this.originPoint[L]=C}),T&&$e.postRender(()=>T(y,b)),lh(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},f=(y,b)=>{const{dragPropagation:j,dragDirectionLock:z,onDirectionLock:T,onDrag:O}=this.getProps();if(!j&&!this.openDragLock)return;const{offset:L}=b;if(z&&this.currentDirection===null){this.currentDirection=DT(L),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",b.point,L),this.updateAxis("y",b.point,L),this.visualElement.render(),O&&O(y,b)},g=(y,b)=>this.stop(y,b),m=()=>Wt(y=>{var b;return this.getAnimationState(y)==="paused"&&((b=this.getAxisMotionValue(y).animation)==null?void 0:b.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new Tb(i,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:g,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:kb(this.visualElement)})}stop(i,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:l}=r;this.startAnimation(l);const{onDragEnd:u}=this.getProps();u&&$e.postRender(()=>u(i,r))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(i,r,s){const{drag:l}=this.getProps();if(!s||!El(i,l,this.currentDirection))return;const u=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=jT(f,this.constraints[i],this.elastic[i])),u.set(f)}resolveConstraints(){var u;const{dragConstraints:i,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,l=this.constraints;i&&ir(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=zT(s.layoutBox,i):this.constraints=!1,this.elastic=AT(r),l!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Wt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=TT(s.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!ir(i))return!1;const s=i.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=vT(s,l.root,this.visualElement.getTransformPagePoint());let f=ST(l.layout.layoutBox,u);if(r){const g=r(cT(f));this.hasMutatedConstraints=!!g,g&&(f=xb(g))}return f}startAnimation(i){const{drag:r,dragMomentum:s,dragElastic:l,dragTransition:u,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),m=this.constraints||{},p=Wt(y=>{if(!El(y,r,this.currentDirection))return;let b=m&&m[y]||{};f&&(b={min:0,max:0});const j=l?200:1e6,z=l?40:1e7,T={type:"inertia",velocity:s?i[y]:0,bounceStiffness:j,bounceDamping:z,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(y,T)});return Promise.all(p).then(g)}startAxisValueAnimation(i,r){const s=this.getAxisMotionValue(i);return lh(this.visualElement,i),s.start(gm(i,s,0,r,this.visualElement,!1))}stopAnimation(){Wt(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Wt(i=>{var r;return(r=this.getAxisMotionValue(i).animation)==null?void 0:r.pause()})}getAnimationState(i){var r;return(r=this.getAxisMotionValue(i).animation)==null?void 0:r.state}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),l=s[r];return l||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){Wt(r=>{const{drag:s}=this.getProps();if(!El(r,s,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(r);if(l&&l.layout){const{min:f,max:g}=l.layout.layoutBox[r];u.set(i[r]-Ue(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!ir(r)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Wt(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const m=g.get();l[f]=kT({min:m,max:m},this.constraints[f])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Wt(f=>{if(!El(f,i,null))return;const g=this.getAxisMotionValue(f),{min:m,max:p}=this.constraints[f];g.set(Ue(m,p,l[f]))})}addListeners(){if(!this.visualElement.current)return;ET.set(this.visualElement,this);const i=this.visualElement.current,r=Ho(i,"pointerdown",m=>{const{drag:p,dragListener:y=!0}=this.getProps();p&&y&&this.start(m)}),s=()=>{const{dragConstraints:m}=this.getProps();ir(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),$e.read(s);const f=Jo(window,"resize",()=>this.scalePositionWithinConstraints()),g=l.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p})=>{this.isDragging&&p&&(Wt(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=m[y].translate,b.set(b.get()+m[y].translate))}),this.visualElement.render())});return()=>{f(),r(),u(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:f=fh,dragMomentum:g=!0}=i;return{...i,drag:r,dragDirectionLock:s,dragPropagation:l,dragConstraints:u,dragElastic:f,dragMomentum:g}}}function El(t,i,r){return(i===!0||i===t)&&(r===null||r===t)}function DT(t,i=10){let r=null;return Math.abs(t.y)>i?r="y":Math.abs(t.x)>i&&(r="x"),r}class RT extends Ci{constructor(i){super(i),this.removeGroupControls=en,this.removeListeners=en,this.controls=new CT(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||en}unmount(){this.removeGroupControls(),this.removeListeners()}}const E1=t=>(i,r)=>{t&&$e.postRender(()=>t(i,r))};class MT extends Ci{constructor(){super(...arguments),this.removePointerDownListener=en}onPointerDown(i){this.session=new Tb(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:kb(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:E1(i),onStart:E1(r),onMove:s,onEnd:(u,f)=>{delete this.session,l&&$e.postRender(()=>l(u,f))}}}mount(){this.removePointerDownListener=Ho(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const oc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function C1(t,i){return i.max===i.min?0:t/(i.max-i.min)*100}const Co={correct:(t,i)=>{if(!i.target)return t;if(typeof t=="string")if(de.test(t))t=parseFloat(t);else return t;const r=C1(t,i.target.x),s=C1(t,i.target.y);return`${r}% ${s}%`}},OT={correct:(t,{treeScale:i,projectionDelta:r})=>{const s=t,l=Ai.parse(t);if(l.length>5)return s;const u=Ai.createTransformer(t),f=typeof l[0]!="number"?1:0,g=r.x.scale*i.x,m=r.y.scale*i.y;l[0+f]/=g,l[1+f]/=m;const p=Ue(g,m,.5);return typeof l[2+f]=="number"&&(l[2+f]/=p),typeof l[3+f]=="number"&&(l[3+f]/=p),u(l)}};class LT extends S.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s,layoutId:l}=this.props,{projection:u}=i;b3(BT),u&&(r.group&&r.group.add(u),s&&s.register&&l&&s.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),oc.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:s,drag:l,isPresent:u}=this.props,{projection:f}=s;return f&&(f.isPresent=u,l||i.layoutDependency!==r||r===void 0||i.isPresent!==u?f.willUpdate():this.safeToRemove(),i.isPresent!==u&&(u?f.promote():f.relegate()||$e.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),am.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:l}=i;l&&(l.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Eb(t){const[i,r]=eb(),s=S.useContext(Bh);return h.jsx(LT,{...t,layoutGroup:s,switchLayoutGroup:S.useContext(rb),isPresent:i,safeToRemove:r})}const BT={borderRadius:{...Co,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Co,borderTopRightRadius:Co,borderBottomLeftRadius:Co,borderBottomRightRadius:Co,boxShadow:OT};function _T(t,i,r){const s=vt(t)?t:ur(t);return s.start(gm("",s,i,r)),s.animation}const NT=(t,i)=>t.depth-i.depth;class VT{constructor(){this.children=[],this.isDirty=!1}add(i){Vh(this.children,i),this.isDirty=!0}remove(i){Ph(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(NT),this.isDirty=!1,this.children.forEach(i)}}function PT(t,i){const r=Dt.now(),s=({timestamp:l})=>{const u=l-r;u>=i&&(Ti(s),t(u-i))};return $e.setup(s,!0),()=>Ti(s)}const Cb=["TopLeft","TopRight","BottomLeft","BottomRight"],UT=Cb.length,D1=t=>typeof t=="string"?parseFloat(t):t,R1=t=>typeof t=="number"||de.test(t);function HT(t,i,r,s,l,u){l?(t.opacity=Ue(0,r.opacity??1,$T(s)),t.opacityExit=Ue(i.opacity??1,0,YT(s))):u&&(t.opacity=Ue(i.opacity??1,r.opacity??1,s));for(let f=0;f<UT;f++){const g=`border${Cb[f]}Radius`;let m=M1(i,g),p=M1(r,g);if(m===void 0&&p===void 0)continue;m||(m=0),p||(p=0),m===0||p===0||R1(m)===R1(p)?(t[g]=Math.max(Ue(D1(m),D1(p),s),0),(bn.test(p)||bn.test(m))&&(t[g]+="%")):t[g]=p}(i.rotate||r.rotate)&&(t.rotate=Ue(i.rotate||0,r.rotate||0,s))}function M1(t,i){return t[i]!==void 0?t[i]:t.borderRadius}const $T=Db(0,.5,wx),YT=Db(.5,.95,en);function Db(t,i,r){return s=>s<t?0:s>i?1:r(Fo(t,i,s))}function O1(t,i){t.min=i.min,t.max=i.max}function Qt(t,i){O1(t.x,i.x),O1(t.y,i.y)}function L1(t,i){t.translate=i.translate,t.scale=i.scale,t.originPoint=i.originPoint,t.origin=i.origin}function B1(t,i,r,s,l){return t-=i,t=yc(t,1/r,s),l!==void 0&&(t=yc(t,1/l,s)),t}function GT(t,i=0,r=1,s=.5,l,u=t,f=t){if(bn.test(i)&&(i=parseFloat(i),i=Ue(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=Ue(u.min,u.max,s);t===u&&(g-=i),t.min=B1(t.min,i,r,g,l),t.max=B1(t.max,i,r,g,l)}function _1(t,i,[r,s,l],u,f){GT(t,i[r],i[s],i[l],i.scale,u,f)}const qT=["x","scaleX","originX"],XT=["y","scaleY","originY"];function N1(t,i,r,s){_1(t.x,i,qT,r?r.x:void 0,s?s.x:void 0),_1(t.y,i,XT,r?r.y:void 0,s?s.y:void 0)}function V1(t){return t.translate===0&&t.scale===1}function Rb(t){return V1(t.x)&&V1(t.y)}function P1(t,i){return t.min===i.min&&t.max===i.max}function FT(t,i){return P1(t.x,i.x)&&P1(t.y,i.y)}function U1(t,i){return Math.round(t.min)===Math.round(i.min)&&Math.round(t.max)===Math.round(i.max)}function Mb(t,i){return U1(t.x,i.x)&&U1(t.y,i.y)}function H1(t){return jt(t.x)/jt(t.y)}function $1(t,i){return t.translate===i.translate&&t.scale===i.scale&&t.originPoint===i.originPoint}class IT{constructor(){this.members=[]}add(i){Vh(this.members,i),i.scheduleRender()}remove(i){if(Ph(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(l=>i===l);if(r===0)return!1;let s;for(let l=r;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(i,r){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,r&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:l}=i.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:s}=i;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function KT(t,i,r){let s="";const l=t.x.translate/i.x,u=t.y.translate/i.y,f=(r==null?void 0:r.z)||0;if((l||u||f)&&(s=`translate3d(${l}px, ${u}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:p,rotate:y,rotateX:b,rotateY:j,skewX:z,skewY:T}=r;p&&(s=`perspective(${p}px) ${s}`),y&&(s+=`rotate(${y}deg) `),b&&(s+=`rotateX(${b}deg) `),j&&(s+=`rotateY(${j}deg) `),z&&(s+=`skewX(${z}deg) `),T&&(s+=`skewY(${T}deg) `)}const g=t.x.scale*i.x,m=t.y.scale*i.y;return(g!==1||m!==1)&&(s+=`scale(${g}, ${m})`),s||"none"}const zf=["","X","Y","Z"],ZT={visibility:"hidden"},QT=1e3;let WT=0;function Sf(t,i,r,s){const{latestValues:l}=i;l[t]&&(r[t]=l[t],i.setStaticValue(t,0),s&&(s[t]=0))}function Ob(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:i}=t.options;if(!i)return;const r=mb(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:l,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(r,"transform",$e,!(l||u))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&Ob(s)}function Lb({attachResizeListener:t,defaultParent:i,measureScroll:r,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(f={},g=i==null?void 0:i()){this.id=WT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(t4),this.nodes.forEach(o4),this.nodes.forEach(s4),this.nodes.forEach(n4)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new VT)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new $h),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const m=this.eventHandlers.get(f);m&&m.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Jx(f)&&!Qk(f),this.instance=f;const{layoutId:g,layout:m,visualElement:p}=this.options;if(p&&!p.current&&p.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||g)&&(this.isLayoutDirty=!0),t){let y;const b=()=>this.root.updateBlockedByResize=!1;t(f,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=PT(b,250),oc.hasAnimatedSinceResize&&(oc.hasAnimatedSinceResize=!1,this.nodes.forEach(G1))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&p&&(g||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:j,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||f4,{onLayoutAnimationStart:O,onLayoutAnimationComplete:L}=p.getProps(),C=!this.targetLayout||!Mb(this.targetLayout,z),V=!b&&j;if(this.options.layoutRoot||this.resumeFrom||V||b&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,V);const D={...nm(T,"layout"),onPlay:O,onComplete:L};(p.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else b||G1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ti(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(l4),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ob(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:g,layout:m}=this.options;if(g===void 0&&!m)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Y1);return}this.isUpdating||this.nodes.forEach(a4),this.isUpdating=!1,this.nodes.forEach(r4),this.nodes.forEach(JT),this.nodes.forEach(e4),this.clearAllSnapshots();const g=Dt.now();ht.delta=qn(0,1e3/60,g-ht.timestamp),ht.timestamp=g,ht.isProcessing=!0,pf.update.process(ht),pf.preRender.process(ht),pf.render.process(ht),ht.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,am.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(i4),this.sharedNodes.forEach(c4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!jt(this.snapshot.measuredBox.x)&&!jt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!Rb(this.projectionDelta),m=this.getTransformTemplate(),p=m?m(this.latestValues,""):void 0,y=p!==this.prevTransformTemplateValue;f&&this.instance&&(g||ea(this.latestValues)||y)&&(l(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let m=this.removeElementScroll(g);return f&&(m=this.removeTransform(m)),h4(m),{animationId:this.root.animationId,measuredBox:g,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:f}=this.options;if(!f)return Qe();const g=f.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(m4))){const{scroll:y}=this.root;y&&(rr(g.x,y.offset.x),rr(g.y,y.offset.y))}return g}removeElementScroll(f){var m;const g=Qe();if(Qt(g,f),(m=this.scroll)!=null&&m.wasRoot)return g;for(let p=0;p<this.path.length;p++){const y=this.path[p],{scroll:b,options:j}=y;y!==this.root&&b&&j.layoutScroll&&(b.wasRoot&&Qt(g,f),rr(g.x,b.offset.x),rr(g.y,b.offset.y))}return g}applyTransform(f,g=!1){const m=Qe();Qt(m,f);for(let p=0;p<this.path.length;p++){const y=this.path[p];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&or(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),ea(y.latestValues)&&or(m,y.latestValues)}return ea(this.latestValues)&&or(m,this.latestValues),m}removeTransform(f){const g=Qe();Qt(g,f);for(let m=0;m<this.path.length;m++){const p=this.path[m];if(!p.instance||!ea(p.latestValues))continue;uh(p.latestValues)&&p.updateSnapshot();const y=Qe(),b=p.measurePageBox();Qt(y,b),N1(g,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,y)}return ea(this.latestValues)&&N1(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ht.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var j;const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==g;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=ht.timestamp,!this.targetDelta&&!this.relativeTarget){const z=this.getClosestProjectingParent();z&&z.layout&&this.animationProgress!==1?(this.relativeParent=z,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Yo(this.relativeTargetOrigin,this.layout.layoutBox,z.layout.layoutBox),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qt(this.target,this.layout.layoutBox),zb(this.target,this.targetDelta)):Qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const z=this.getClosestProjectingParent();z&&!!z.resumingFrom==!!this.resumingFrom&&!z.options.layoutScroll&&z.target&&this.animationProgress!==1?(this.relativeParent=z,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),Yo(this.relativeTargetOrigin,this.target,z.target),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||uh(this.parent.latestValues)||jb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var T;const f=this.getLead(),g=!!this.resumingFrom||this!==f;let m=!0;if((this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty)&&(m=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ht.timestamp&&(m=!1),m)return;const{layout:p,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||y))return;Qt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,j=this.treeScale.y;yT(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Qe());const{target:z}=f;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(L1(this.prevProjectionDelta.x,this.projectionDelta.x),L1(this.prevProjectionDelta.y,this.projectionDelta.y)),$o(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==j||!$1(this.projectionDelta.x,this.prevProjectionDelta.x)||!$1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var g;if((g=this.options.visualElement)==null||g.scheduleRender(),f){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ar(),this.projectionDelta=ar(),this.projectionDeltaWithTransform=ar()}setAnimationOrigin(f,g=!1){const m=this.snapshot,p=m?m.latestValues:{},y={...this.latestValues},b=ar();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const j=Qe(),z=m?m.source:void 0,T=this.layout?this.layout.source:void 0,O=z!==T,L=this.getStack(),C=!L||L.members.length<=1,V=!!(O&&!C&&this.options.crossfade===!0&&!this.path.some(d4));this.animationProgress=0;let D;this.mixTargetDelta=X=>{const P=X/1e3;q1(b.x,f.x,P),q1(b.y,f.y,P),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yo(j,this.layout.layoutBox,this.relativeParent.layout.layoutBox),u4(this.relativeTarget,this.relativeTargetOrigin,j,P),D&&FT(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=Qe()),Qt(D,this.relativeTarget)),O&&(this.animationValues=y,HT(y,p,this.latestValues,P,V,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var g,m,p;this.notifyListeners("animationStart"),(g=this.currentAnimation)==null||g.stop(!1),(p=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||p.stop(!1),this.pendingAnimation&&(Ti(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$e.update(()=>{oc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ur(0)),this.currentAnimation=_T(this.motionValue,[0,1e3],{...f,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),f.onUpdate&&f.onUpdate(y)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(QT),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:m,layout:p,latestValues:y}=f;if(!(!g||!m||!p)){if(this!==f&&this.layout&&p&&Bb(this.options.animationType,this.layout.layoutBox,p.layoutBox)){m=this.target||Qe();const b=jt(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+b;const j=jt(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+j}Qt(g,m),or(g,y),$o(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new IT),this.sharedNodes.get(f).add(g);const p=g.options.initialPromotionConfig;g.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var g;const{layoutId:f}=this.options;return f?((g=this.getStack())==null?void 0:g.lead)||this:this}getPrevLead(){var g;const{layoutId:f}=this.options;return f?(g=this.getStack())==null?void 0:g.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:m}={}){const p=this.getStack();p&&p.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(g=!0),!g)return;const p={};m.z&&Sf("z",f,p,this.animationValues);for(let y=0;y<zf.length;y++)Sf(`rotate${zf[y]}`,f,p,this.animationValues),Sf(`skew${zf[y]}`,f,p,this.animationValues);f.render();for(const y in p)f.setStaticValue(y,p[y]),this.animationValues&&(this.animationValues[y]=p[y]);f.scheduleRender()}getProjectionStyles(f){if(!this.instance||this.isSVG)return;if(!this.isVisible)return ZT;const g={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,g.opacity="",g.pointerEvents=rc(f==null?void 0:f.pointerEvents)||"",g.transform=m?m(this.latestValues,""):"none",g;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const z={};return this.options.layoutId&&(z.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,z.pointerEvents=rc(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!ea(this.latestValues)&&(z.transform=m?m({},""):"none",this.hasProjected=!1),z}const y=p.animationValues||p.latestValues;this.applyTransformsToTarget(),g.transform=KT(this.projectionDeltaWithTransform,this.treeScale,y),m&&(g.transform=m(y,g.transform));const{x:b,y:j}=this.projectionDelta;g.transformOrigin=`${b.origin*100}% ${j.origin*100}% 0`,p.animationValues?g.opacity=p===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:g.opacity=p===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const z in Qo){if(y[z]===void 0)continue;const{correct:T,applyTo:O,isCSSVariable:L}=Qo[z],C=g.transform==="none"?y[z]:T(y[z],p);if(O){const V=O.length;for(let D=0;D<V;D++)g[O[D]]=C}else L?this.options.visualElement.renderState.vars[z]=C:g[z]=C}return this.options.layoutId&&(g.pointerEvents=p===this?rc(f==null?void 0:f.pointerEvents)||"":"none"),g}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var g;return(g=f.currentAnimation)==null?void 0:g.stop(!1)}),this.root.nodes.forEach(Y1),this.root.sharedNodes.clear()}}}function JT(t){t.updateLayout()}function e4(t){var r;const i=((r=t.resumeFrom)==null?void 0:r.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=t.layout,{animationType:u}=t.options,f=i.source!==t.layout.source;u==="size"?Wt(b=>{const j=f?i.measuredBox[b]:i.layoutBox[b],z=jt(j);j.min=s[b].min,j.max=j.min+z}):Bb(u,i.layoutBox,s)&&Wt(b=>{const j=f?i.measuredBox[b]:i.layoutBox[b],z=jt(s[b]);j.max=j.min+z,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+z)});const g=ar();$o(g,s,i.layoutBox);const m=ar();f?$o(m,t.applyTransform(l,!0),i.measuredBox):$o(m,s,i.layoutBox);const p=!Rb(g);let y=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:j,layout:z}=b;if(j&&z){const T=Qe();Yo(T,i.layoutBox,j.layoutBox);const O=Qe();Yo(O,s,z.layoutBox),Mb(T,O)||(y=!0),b.options.layoutRoot&&(t.relativeTarget=O,t.relativeTargetOrigin=T,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:m,layoutDelta:g,hasLayoutChanged:p,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function t4(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function n4(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function i4(t){t.clearSnapshot()}function Y1(t){t.clearMeasurements()}function a4(t){t.isLayoutDirty=!1}function r4(t){const{visualElement:i}=t.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),t.resetTransform()}function G1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function o4(t){t.resolveTargetDelta()}function s4(t){t.calcProjection()}function l4(t){t.resetSkewAndRotation()}function c4(t){t.removeLeadSnapshot()}function q1(t,i,r){t.translate=Ue(i.translate,0,r),t.scale=Ue(i.scale,1,r),t.origin=i.origin,t.originPoint=i.originPoint}function X1(t,i,r,s){t.min=Ue(i.min,r.min,s),t.max=Ue(i.max,r.max,s)}function u4(t,i,r,s){X1(t.x,i.x,r.x,s),X1(t.y,i.y,r.y,s)}function d4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const f4={duration:.45,ease:[.4,0,.1,1]},F1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),I1=F1("applewebkit/")&&!F1("chrome/")?Math.round:en;function K1(t){t.min=I1(t.min),t.max=I1(t.max)}function h4(t){K1(t.x),K1(t.y)}function Bb(t,i,r){return t==="position"||t==="preserve-aspect"&&!pT(H1(i),H1(r),.2)}function m4(t){var i;return t!==t.root&&((i=t.scroll)==null?void 0:i.wasRoot)}const p4=Lb({attachResizeListener:(t,i)=>Jo(t,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),kf={current:void 0},_b=Lb({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!kf.current){const t=new p4({});t.mount(window),t.setOptions({layoutScroll:!0}),kf.current=t}return kf.current},resetTransform:(t,i)=>{t.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),g4={pan:{Feature:MT},drag:{Feature:RT,ProjectionNode:_b,MeasureLayout:Eb}};function Z1(t,i,r){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",r==="Start");const l="onHover"+r,u=s[l];u&&$e.postRender(()=>u(i,ss(i)))}class y4 extends Ci{mount(){const{current:i}=this.node;i&&(this.unmount=Xk(i,(r,s)=>(Z1(this.node,s,"Start"),l=>Z1(this.node,l,"End"))))}unmount(){}}class v4 extends Ci{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=as(Jo(this.node.current,"focus",()=>this.onFocus()),Jo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Q1(t,i,r){const{props:s}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",r==="Start");const l="onTap"+(r==="End"?"":r),u=s[l];u&&$e.postRender(()=>u(i,ss(i)))}class x4 extends Ci{mount(){const{current:i}=this.node;i&&(this.unmount=Zk(i,(r,s)=>(Q1(this.node,s,"Start"),(l,{success:u})=>Q1(this.node,l,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const hh=new WeakMap,Tf=new WeakMap,b4=t=>{const i=hh.get(t.target);i&&i(t)},w4=t=>{t.forEach(b4)};function j4({root:t,...i}){const r=t||document;Tf.has(r)||Tf.set(r,{});const s=Tf.get(r),l=JSON.stringify(i);return s[l]||(s[l]=new IntersectionObserver(w4,{root:t,...i})),s[l]}function z4(t,i,r){const s=j4(i);return hh.set(t,r),s.observe(t),()=>{hh.delete(t),s.unobserve(t)}}const S4={some:0,all:1};class k4 extends Ci{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:s,amount:l="some",once:u}=i,f={root:r?r.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:S4[l]},g=m=>{const{isIntersecting:p}=m;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),j=p?y:b;j&&j(m)};return z4(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(T4(i,r))&&this.startObserver()}unmount(){}}function T4({viewport:t={}},{viewport:i={}}={}){return r=>t[r]!==i[r]}const A4={inView:{Feature:k4},tap:{Feature:x4},focus:{Feature:v4},hover:{Feature:y4}},E4={layout:{ProjectionNode:_b,MeasureLayout:Eb}},mh={current:null},Nb={current:!1};function C4(){if(Nb.current=!0,!!_h)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),i=()=>mh.current=t.matches;t.addListener(i),i()}else mh.current=!1}const D4=new WeakMap;function R4(t,i,r){for(const s in i){const l=i[s],u=r[s];if(vt(l))t.addValue(s,l);else if(vt(u))t.addValue(s,ur(l,{owner:t}));else if(u!==l)if(t.hasValue(s)){const f=t.getValue(s);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=t.getStaticValue(s);t.addValue(s,ur(f!==void 0?f:l,{owner:t}))}}for(const s in r)i[s]===void 0&&t.removeValue(s);return i}const W1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class M4{scrapeMotionValuesFromProps(i,r,s){return{}}constructor({parent:i,props:r,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:u,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=em,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const j=Dt.now();this.renderScheduledAt<j&&(this.renderScheduledAt=j,$e.render(this.render,!1,!0))};const{latestValues:m,renderState:p}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=r.initial?{...m}:{},this.renderState=p,this.parent=i,this.props=r,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=l,this.options=g,this.blockInitialAnimation=!!u,this.isControllingVariants=Mc(r),this.isVariantNode=ib(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(r,{},this);for(const j in b){const z=b[j];m[j]!==void 0&&vt(z)&&z.set(m[j],!1)}}mount(i){this.current=i,D4.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),Nb.current||C4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:mh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ti(this.notifyUpdate),Ti(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(i,r){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=Sr.has(i);s&&this.onBindTransform&&this.onBindTransform();const l=r.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&$e.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),u=r.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{l(),u(),f&&f(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in dr){const r=dr[i];if(!r)continue;const{isEnabled:s,Feature:l}=r;if(!this.features[i]&&l&&s(this.props)&&(this.features[i]=new l(this)),this.features[i]){const u=this.features[i];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<W1.length;s++){const l=W1[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,f=i[u];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=R4(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const s=this.values.get(i);r!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&r!==void 0&&(s=ur(r===null?void 0:r,{owner:this}),this.addValue(i,s)),s}readValue(i,r){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(dx(s)||hx(s))?s=parseFloat(s):!Jk(s)&&Ai.test(r)&&(s=Ix(i,r)),this.setBaseTarget(i,vt(s)?s.get():s)),vt(s)?s.get():s}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var u;const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const f=hm(this.props,r,(u=this.presenceContext)==null?void 0:u.custom);f&&(s=f[i])}if(r&&s!==void 0)return s;const l=this.getBaseTargetFromProps(this.props,i);return l!==void 0&&!vt(l)?l:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new $h),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}}class Vb extends M4{constructor(){super(...arguments),this.KeyframeResolver=Hk}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){return i.style?i.style[r]:void 0}removeValueFromRenderState(i,{vars:r,style:s}){delete r[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;vt(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function Pb(t,{style:i,vars:r},s,l){Object.assign(t.style,i,l&&l.getProjectionStyles(s));for(const u in r)t.style.setProperty(u,r[u])}function O4(t){return window.getComputedStyle(t)}class L4 extends Vb{constructor(){super(...arguments),this.type="html",this.renderInstance=Pb}readValueFromInstance(i,r){var s;if(Sr.has(r))return(s=this.projection)!=null&&s.isProjecting?th(r):ok(i,r);{const l=O4(i),u=(qh(r)?l.getPropertyValue(r):l[r])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:r}){return Sb(i,r)}build(i,r,s){um(i,r,s.transformTemplate)}scrapeMotionValuesFromProps(i,r,s){return mm(i,r,s)}}const Ub=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function B4(t,i,r,s){Pb(t,i,void 0,s);for(const l in i.attrs)t.setAttribute(Ub.has(l)?l:cm(l),i.attrs[l])}class _4 extends Vb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(Sr.has(r)){const s=Fx(r);return s&&s.default||0}return r=Ub.has(r)?r:cm(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,s){return hb(i,r,s)}build(i,r,s){cb(i,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,r,s,l){B4(i,r,s,l)}mount(i){this.isSVGTag=db(i.tagName),super.mount(i)}}const N4=(t,i)=>fm(t)?new _4(i):new L4(i,{allowProjection:t!==S.Fragment}),V4=N3({...sT,...A4,...g4,...E4},N4),J=l3(V4);function P4(t){t.values.forEach(i=>i.stop())}function ph(t,i){[...i].reverse().forEach(s=>{const l=t.getVariant(s);l&&pm(t,l),t.variantChildren&&t.variantChildren.forEach(u=>{ph(u,i)})})}function U4(t,i){if(Array.isArray(i))return ph(t,i);if(typeof i=="string")return ph(t,[i]);pm(t,i)}function H4(){const t=new Set,i={subscribe(r){return t.add(r),()=>void t.delete(r)},start(r,s){const l=[];return t.forEach(u=>{l.push(gb(u,r,{transitionOverride:s}))}),Promise.all(l)},set(r){return t.forEach(s=>{U4(s,r)})},stop(){t.forEach(r=>{P4(r)})},mount(){return()=>{i.stop()}}};return i}function $4(){const t=Ec(H4);return Nh(t.mount,[]),t}const Wa=$4;var xt=function(){return xt=Object.assign||function(i){for(var r,s=1,l=arguments.length;s<l;s++){r=arguments[s];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(i[u]=r[u])}return i},xt.apply(this,arguments)};function fr(t,i,r){if(r||arguments.length===2)for(var s=0,l=i.length,u;s<l;s++)(u||!(s in i))&&(u||(u=Array.prototype.slice.call(i,0,s)),u[s]=i[s]);return t.concat(u||Array.prototype.slice.call(i))}var Le="-ms-",Go="-moz-",ke="-webkit-",Hb="comm",Oc="rule",ym="decl",Y4="@import",$b="@keyframes",G4="@layer",Yb=Math.abs,vm=String.fromCharCode,gh=Object.assign;function q4(t,i){return ct(t,0)^45?(((i<<2^ct(t,0))<<2^ct(t,1))<<2^ct(t,2))<<2^ct(t,3):0}function Gb(t){return t.trim()}function Hn(t,i){return(t=i.exec(t))?t[0]:t}function me(t,i,r){return t.replace(i,r)}function sc(t,i,r){return t.indexOf(i,r)}function ct(t,i){return t.charCodeAt(i)|0}function hr(t,i,r){return t.slice(i,r)}function yn(t){return t.length}function qb(t){return t.length}function Vo(t,i){return i.push(t),t}function X4(t,i){return t.map(i).join("")}function J1(t,i){return t.filter(function(r){return!Hn(r,i)})}var Lc=1,mr=1,Xb=0,tn=0,tt=0,kr="";function Bc(t,i,r,s,l,u,f,g){return{value:t,root:i,parent:r,type:s,props:l,children:u,line:Lc,column:mr,length:f,return:"",siblings:g}}function Si(t,i){return gh(Bc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},i)}function Ja(t){for(;t.root;)t=Si(t.root,{children:[t]});Vo(t,t.siblings)}function F4(){return tt}function I4(){return tt=tn>0?ct(kr,--tn):0,mr--,tt===10&&(mr=1,Lc--),tt}function cn(){return tt=tn<Xb?ct(kr,tn++):0,mr++,tt===10&&(mr=1,Lc++),tt}function la(){return ct(kr,tn)}function lc(){return tn}function _c(t,i){return hr(kr,t,i)}function yh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K4(t){return Lc=mr=1,Xb=yn(kr=t),tn=0,[]}function Z4(t){return kr="",t}function Af(t){return Gb(_c(tn-1,vh(t===91?t+2:t===40?t+1:t)))}function Q4(t){for(;(tt=la())&&tt<33;)cn();return yh(t)>2||yh(tt)>3?"":" "}function W4(t,i){for(;--i&&cn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return _c(t,lc()+(i<6&&la()==32&&cn()==32))}function vh(t){for(;cn();)switch(tt){case t:return tn;case 34:case 39:t!==34&&t!==39&&vh(tt);break;case 40:t===41&&vh(t);break;case 92:cn();break}return tn}function J4(t,i){for(;cn()&&t+tt!==57;)if(t+tt===84&&la()===47)break;return"/*"+_c(i,tn-1)+"*"+vm(t===47?t:cn())}function eA(t){for(;!yh(la());)cn();return _c(t,tn)}function tA(t){return Z4(cc("",null,null,null,[""],t=K4(t),0,[0],t))}function cc(t,i,r,s,l,u,f,g,m){for(var p=0,y=0,b=f,j=0,z=0,T=0,O=1,L=1,C=1,V=0,D="",X=l,P=u,F=s,K=D;L;)switch(T=V,V=cn()){case 40:if(T!=108&&ct(K,b-1)==58){sc(K+=me(Af(V),"&","&\f"),"&\f",Yb(p?g[p-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:K+=Af(V);break;case 9:case 10:case 13:case 32:K+=Q4(T);break;case 92:K+=W4(lc()-1,7);continue;case 47:switch(la()){case 42:case 47:Vo(nA(J4(cn(),lc()),i,r,m),m);break;default:K+="/"}break;case 123*O:g[p++]=yn(K)*C;case 125*O:case 59:case 0:switch(V){case 0:case 125:L=0;case 59+y:C==-1&&(K=me(K,/\f/g,"")),z>0&&yn(K)-b&&Vo(z>32?tv(K+";",s,r,b-1,m):tv(me(K," ","")+";",s,r,b-2,m),m);break;case 59:K+=";";default:if(Vo(F=ev(K,i,r,p,y,l,g,D,X=[],P=[],b,u),u),V===123)if(y===0)cc(K,i,F,F,X,u,b,g,P);else switch(j===99&&ct(K,3)===110?100:j){case 100:case 108:case 109:case 115:cc(t,F,F,s&&Vo(ev(t,F,F,0,0,l,g,D,l,X=[],b,P),P),l,P,b,g,s?X:P);break;default:cc(K,F,F,F,[""],P,0,g,P)}}p=y=z=0,O=C=1,D=K="",b=f;break;case 58:b=1+yn(K),z=T;default:if(O<1){if(V==123)--O;else if(V==125&&O++==0&&I4()==125)continue}switch(K+=vm(V),V*O){case 38:C=y>0?1:(K+="\f",-1);break;case 44:g[p++]=(yn(K)-1)*C,C=1;break;case 64:la()===45&&(K+=Af(cn())),j=la(),y=b=yn(D=K+=eA(lc())),V++;break;case 45:T===45&&yn(K)==2&&(O=0)}}return u}function ev(t,i,r,s,l,u,f,g,m,p,y,b){for(var j=l-1,z=l===0?u:[""],T=qb(z),O=0,L=0,C=0;O<s;++O)for(var V=0,D=hr(t,j+1,j=Yb(L=f[O])),X=t;V<T;++V)(X=Gb(L>0?z[V]+" "+D:me(D,/&\f/g,z[V])))&&(m[C++]=X);return Bc(t,i,r,l===0?Oc:g,m,p,y,b)}function nA(t,i,r,s){return Bc(t,i,r,Hb,vm(F4()),hr(t,2,-2),0,s)}function tv(t,i,r,s,l){return Bc(t,i,r,ym,hr(t,0,s),hr(t,s+1,-1),s,l)}function Fb(t,i,r){switch(q4(t,i)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return Go+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+Go+t+Le+t+t;case 5936:switch(ct(t,i+11)){case 114:return ke+t+Le+me(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+Le+me(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+Le+me(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+Le+t+t;case 6165:return ke+t+Le+"flex-"+t+t;case 5187:return ke+t+me(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Le+"flex-$1$2")+t;case 5443:return ke+t+Le+"flex-item-"+me(t,/flex-|-self/g,"")+(Hn(t,/flex-|baseline/)?"":Le+"grid-row-"+me(t,/flex-|-self/g,""))+t;case 4675:return ke+t+Le+"flex-line-pack"+me(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+Le+me(t,"shrink","negative")+t;case 5292:return ke+t+Le+me(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+me(t,"-grow","")+ke+t+Le+me(t,"grow","positive")+t;case 4554:return ke+me(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return me(me(me(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return me(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return me(me(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!Hn(t,/flex-|baseline/))return Le+"grid-column-align"+hr(t,i)+t;break;case 2592:case 3360:return Le+me(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(s,l){return i=l,Hn(s.props,/grid-\w+-end/)})?~sc(t+(r=r[i].value),"span",0)?t:Le+me(t,"-start","")+t+Le+"grid-row-span:"+(~sc(r,"span",0)?Hn(r,/\d+/):+Hn(r,/\d+/)-+Hn(t,/\d+/))+";":Le+me(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(s){return Hn(s.props,/grid-\w+-start/)})?t:Le+me(me(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return me(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(t)-1-i>6)switch(ct(t,i+1)){case 109:if(ct(t,i+4)!==45)break;case 102:return me(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Go+(ct(t,i+3)==108?"$3":"$2-$3"))+t;case 115:return~sc(t,"stretch",0)?Fb(me(t,"stretch","fill-available"),i,r)+t:t}break;case 5152:case 5920:return me(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,u,f,g,m,p){return Le+l+":"+u+p+(f?Le+l+"-span:"+(g?m:+m-+u)+p:"")+t});case 4949:if(ct(t,i+6)===121)return me(t,":",":"+ke)+t;break;case 6444:switch(ct(t,ct(t,14)===45?18:11)){case 120:return me(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(ct(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Le+"$2box$3")+t;case 100:return me(t,":",":"+Le)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(t,"scroll-","scroll-snap-")+t}return t}function vc(t,i){for(var r="",s=0;s<t.length;s++)r+=i(t[s],s,t,i)||"";return r}function iA(t,i,r,s){switch(t.type){case G4:if(t.children.length)break;case Y4:case ym:return t.return=t.return||t.value;case Hb:return"";case $b:return t.return=t.value+"{"+vc(t.children,s)+"}";case Oc:if(!yn(t.value=t.props.join(",")))return""}return yn(r=vc(t.children,s))?t.return=t.value+"{"+r+"}":""}function aA(t){var i=qb(t);return function(r,s,l,u){for(var f="",g=0;g<i;g++)f+=t[g](r,s,l,u)||"";return f}}function rA(t){return function(i){i.root||(i=i.return)&&t(i)}}function oA(t,i,r,s){if(t.length>-1&&!t.return)switch(t.type){case ym:t.return=Fb(t.value,t.length,r);return;case $b:return vc([Si(t,{value:me(t.value,"@","@"+ke)})],s);case Oc:if(t.length)return X4(r=t.props,function(l){switch(Hn(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ja(Si(t,{props:[me(l,/:(read-\w+)/,":"+Go+"$1")]})),Ja(Si(t,{props:[l]})),gh(t,{props:J1(r,s)});break;case"::placeholder":Ja(Si(t,{props:[me(l,/:(plac\w+)/,":"+ke+"input-$1")]})),Ja(Si(t,{props:[me(l,/:(plac\w+)/,":"+Go+"$1")]})),Ja(Si(t,{props:[me(l,/:(plac\w+)/,Le+"input-$1")]})),Ja(Si(t,{props:[l]})),gh(t,{props:J1(r,s)});break}return""})}}var sA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ht={},pr=typeof process<"u"&&Ht!==void 0&&(Ht.REACT_APP_SC_ATTR||Ht.SC_ATTR)||"data-styled",Ib="active",Kb="data-styled-version",Nc="6.1.18",xm=`/*!sc*/
`,xc=typeof window<"u"&&typeof document<"u",lA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ht.REACT_APP_SC_DISABLE_SPEEDY!==""?Ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ht!==void 0&&Ht.SC_DISABLE_SPEEDY!==void 0&&Ht.SC_DISABLE_SPEEDY!==""&&Ht.SC_DISABLE_SPEEDY!=="false"&&Ht.SC_DISABLE_SPEEDY),cA={},Vc=Object.freeze([]),gr=Object.freeze({});function Zb(t,i,r){return r===void 0&&(r=gr),t.theme!==r.theme&&t.theme||i||r.theme}var Qb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dA=/(^-|-$)/g;function nv(t){return t.replace(uA,"-").replace(dA,"")}var fA=/(a)(d)/gi,Cl=52,iv=function(t){return String.fromCharCode(t+(t>25?39:97))};function xh(t){var i,r="";for(i=Math.abs(t);i>Cl;i=i/Cl|0)r=iv(i%Cl)+r;return(iv(i%Cl)+r).replace(fA,"$1-$2")}var Ef,Wb=5381,sr=function(t,i){for(var r=i.length;r;)t=33*t^i.charCodeAt(--r);return t},Jb=function(t){return sr(Wb,t)};function bm(t){return xh(Jb(t)>>>0)}function hA(t){return t.displayName||t.name||"Component"}function Cf(t){return typeof t=="string"&&!0}var ew=typeof Symbol=="function"&&Symbol.for,tw=ew?Symbol.for("react.memo"):60115,mA=ew?Symbol.for("react.forward_ref"):60112,pA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yA=((Ef={})[mA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ef[tw]=nw,Ef);function av(t){return("type"in(i=t)&&i.type.$$typeof)===tw?nw:"$$typeof"in t?yA[t.$$typeof]:pA;var i}var vA=Object.defineProperty,xA=Object.getOwnPropertyNames,rv=Object.getOwnPropertySymbols,bA=Object.getOwnPropertyDescriptor,wA=Object.getPrototypeOf,ov=Object.prototype;function iw(t,i,r){if(typeof i!="string"){if(ov){var s=wA(i);s&&s!==ov&&iw(t,s,r)}var l=xA(i);rv&&(l=l.concat(rv(i)));for(var u=av(t),f=av(i),g=0;g<l.length;++g){var m=l[g];if(!(m in gA||r&&r[m]||f&&m in f||u&&m in u)){var p=bA(i,m);try{vA(t,m,p)}catch{}}}}return t}function yr(t){return typeof t=="function"}function wm(t){return typeof t=="object"&&"styledComponentId"in t}function ia(t,i){return t&&i?"".concat(t," ").concat(i):t||i||""}function bc(t,i){if(t.length===0)return"";for(var r=t[0],s=1;s<t.length;s++)r+=t[s];return r}function es(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function bh(t,i,r){if(r===void 0&&(r=!1),!r&&!es(t)&&!Array.isArray(t))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)t[s]=bh(t[s],i[s]);else if(es(i))for(var s in i)t[s]=bh(t[s],i[s]);return t}function jm(t,i){Object.defineProperty(t,"toString",{value:i})}function ls(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var jA=function(){function t(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return t.prototype.indexOfGroup=function(i){for(var r=0,s=0;s<i;s++)r+=this.groupSizes[s];return r},t.prototype.insertRules=function(i,r){if(i>=this.groupSizes.length){for(var s=this.groupSizes,l=s.length,u=l;i>=u;)if((u<<=1)<0)throw ls(16,"".concat(i));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var f=l;f<u;f++)this.groupSizes[f]=0}for(var g=this.indexOfGroup(i+1),m=(f=0,r.length);f<m;f++)this.tag.insertRule(g,r[f])&&(this.groupSizes[i]++,g++)},t.prototype.clearGroup=function(i){if(i<this.length){var r=this.groupSizes[i],s=this.indexOfGroup(i),l=s+r;this.groupSizes[i]=0;for(var u=s;u<l;u++)this.tag.deleteRule(s)}},t.prototype.getGroup=function(i){var r="";if(i>=this.length||this.groupSizes[i]===0)return r;for(var s=this.groupSizes[i],l=this.indexOfGroup(i),u=l+s,f=l;f<u;f++)r+="".concat(this.tag.getRule(f)).concat(xm);return r},t}(),uc=new Map,wc=new Map,dc=1,Dl=function(t){if(uc.has(t))return uc.get(t);for(;wc.has(dc);)dc++;var i=dc++;return uc.set(t,i),wc.set(i,t),i},zA=function(t,i){dc=i+1,uc.set(t,i),wc.set(i,t)},SA="style[".concat(pr,"][").concat(Kb,'="').concat(Nc,'"]'),kA=new RegExp("^".concat(pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),TA=function(t,i,r){for(var s,l=r.split(","),u=0,f=l.length;u<f;u++)(s=l[u])&&t.registerName(i,s)},AA=function(t,i){for(var r,s=((r=i.textContent)!==null&&r!==void 0?r:"").split(xm),l=[],u=0,f=s.length;u<f;u++){var g=s[u].trim();if(g){var m=g.match(kA);if(m){var p=0|parseInt(m[1],10),y=m[2];p!==0&&(zA(y,p),TA(t,y,m[3]),t.getTag().insertRules(p,l)),l.length=0}else l.push(g)}}},sv=function(t){for(var i=document.querySelectorAll(SA),r=0,s=i.length;r<s;r++){var l=i[r];l&&l.getAttribute(pr)!==Ib&&(AA(t,l),l.parentNode&&l.parentNode.removeChild(l))}};function EA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var aw=function(t){var i=document.head,r=t||i,s=document.createElement("style"),l=function(g){var m=Array.from(g.querySelectorAll("style[".concat(pr,"]")));return m[m.length-1]}(r),u=l!==void 0?l.nextSibling:null;s.setAttribute(pr,Ib),s.setAttribute(Kb,Nc);var f=EA();return f&&s.setAttribute("nonce",f),r.insertBefore(s,u),s},CA=function(){function t(i){this.element=aw(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,l=0,u=s.length;l<u;l++){var f=s[l];if(f.ownerNode===r)return f}throw ls(17)}(this.element),this.length=0}return t.prototype.insertRule=function(i,r){try{return this.sheet.insertRule(r,i),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},t.prototype.getRule=function(i){var r=this.sheet.cssRules[i];return r&&r.cssText?r.cssText:""},t}(),DA=function(){function t(i){this.element=aw(i),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(i,r){if(i<=this.length&&i>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},t.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},t}(),RA=function(){function t(i){this.rules=[],this.length=0}return t.prototype.insertRule=function(i,r){return i<=this.length&&(this.rules.splice(i,0,r),this.length++,!0)},t.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},t.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},t}(),lv=xc,MA={isServer:!xc,useCSSOMInjection:!lA},jc=function(){function t(i,r,s){i===void 0&&(i=gr),r===void 0&&(r={});var l=this;this.options=xt(xt({},MA),i),this.gs=r,this.names=new Map(s),this.server=!!i.isServer,!this.server&&xc&&lv&&(lv=!1,sv(this)),jm(this,function(){return function(u){for(var f=u.getTag(),g=f.length,m="",p=function(b){var j=function(C){return wc.get(C)}(b);if(j===void 0)return"continue";var z=u.names.get(j),T=f.getGroup(b);if(z===void 0||!z.size||T.length===0)return"continue";var O="".concat(pr,".g").concat(b,'[id="').concat(j,'"]'),L="";z!==void 0&&z.forEach(function(C){C.length>0&&(L+="".concat(C,","))}),m+="".concat(T).concat(O,'{content:"').concat(L,'"}').concat(xm)},y=0;y<g;y++)p(y);return m}(l)})}return t.registerId=function(i){return Dl(i)},t.prototype.rehydrate=function(){!this.server&&xc&&sv(this)},t.prototype.reconstructWithOptions=function(i,r){return r===void 0&&(r=!0),new t(xt(xt({},this.options),i),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(i=function(r){var s=r.useCSSOMInjection,l=r.target;return r.isServer?new RA(l):s?new CA(l):new DA(l)}(this.options),new jA(i)));var i},t.prototype.hasNameForId=function(i,r){return this.names.has(i)&&this.names.get(i).has(r)},t.prototype.registerName=function(i,r){if(Dl(i),this.names.has(i))this.names.get(i).add(r);else{var s=new Set;s.add(r),this.names.set(i,s)}},t.prototype.insertRules=function(i,r,s){this.registerName(i,r),this.getTag().insertRules(Dl(i),s)},t.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},t.prototype.clearRules=function(i){this.getTag().clearGroup(Dl(i)),this.clearNames(i)},t.prototype.clearTag=function(){this.tag=void 0},t}(),OA=/&/g,LA=/^\s*\/\/.*$/gm;function rw(t,i){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(i," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(i," ")),r.props=r.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=rw(r.children,i)),r})}function BA(t){var i,r,s,l=gr,u=l.options,f=u===void 0?gr:u,g=l.plugins,m=g===void 0?Vc:g,p=function(j,z,T){return T.startsWith(r)&&T.endsWith(r)&&T.replaceAll(r,"").length>0?".".concat(i):j},y=m.slice();y.push(function(j){j.type===Oc&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(OA,r).replace(s,p))}),f.prefix&&y.push(oA),y.push(iA);var b=function(j,z,T,O){z===void 0&&(z=""),T===void 0&&(T=""),O===void 0&&(O="&"),i=O,r=z,s=new RegExp("\\".concat(r,"\\b"),"g");var L=j.replace(LA,""),C=tA(T||z?"".concat(T," ").concat(z," { ").concat(L," }"):L);f.namespace&&(C=rw(C,f.namespace));var V=[];return vc(C,aA(y.concat(rA(function(D){return V.push(D)})))),V};return b.hash=m.length?m.reduce(function(j,z){return z.name||ls(15),sr(j,z.name)},Wb).toString():"",b}var _A=new jc,wh=BA(),ow=nt.createContext({shouldForwardProp:void 0,styleSheet:_A,stylis:wh});ow.Consumer;nt.createContext(void 0);function jh(){return S.useContext(ow)}var sw=function(){function t(i,r){var s=this;this.inject=function(l,u){u===void 0&&(u=wh);var f=s.name+u.hash;l.hasNameForId(s.id,f)||l.insertRules(s.id,f,u(s.rules,f,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=r,jm(this,function(){throw ls(12,String(s.name))})}return t.prototype.getName=function(i){return i===void 0&&(i=wh),this.name+i.hash},t}(),NA=function(t){return t>="A"&&t<="Z"};function cv(t){for(var i="",r=0;r<t.length;r++){var s=t[r];if(r===1&&s==="-"&&t[0]==="-")return t;NA(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var lw=function(t){return t==null||t===!1||t===""},cw=function(t){var i,r,s=[];for(var l in t){var u=t[l];t.hasOwnProperty(l)&&!lw(u)&&(Array.isArray(u)&&u.isCss||yr(u)?s.push("".concat(cv(l),":"),u,";"):es(u)?s.push.apply(s,fr(fr(["".concat(l," {")],cw(u),!1),["}"],!1)):s.push("".concat(cv(l),": ").concat((i=l,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||i in sA||i.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function ki(t,i,r,s){if(lw(t))return[];if(wm(t))return[".".concat(t.styledComponentId)];if(yr(t)){if(!yr(u=t)||u.prototype&&u.prototype.isReactComponent||!i)return[t];var l=t(i);return ki(l,i,r,s)}var u;return t instanceof sw?r?(t.inject(r,s),[t.getName(s)]):[t]:es(t)?cw(t):Array.isArray(t)?Array.prototype.concat.apply(Vc,t.map(function(f){return ki(f,i,r,s)})):[t.toString()]}function uw(t){for(var i=0;i<t.length;i+=1){var r=t[i];if(yr(r)&&!wm(r))return!1}return!0}var VA=Jb(Nc),PA=function(){function t(i,r,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&uw(i),this.componentId=r,this.baseHash=sr(VA,r),this.baseStyle=s,jc.registerId(r)}return t.prototype.generateAndInjectStyles=function(i,r,s){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))l=ia(l,this.staticRulesId);else{var u=bc(ki(this.rules,i,r,s)),f=xh(sr(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,f)){var g=s(u,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,g)}l=ia(l,f),this.staticRulesId=f}else{for(var m=sr(this.baseHash,s.hash),p="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")p+=b;else if(b){var j=bc(ki(b,i,r,s));m=sr(m,j+y),p+=j}}if(p){var z=xh(m>>>0);r.hasNameForId(this.componentId,z)||r.insertRules(this.componentId,z,s(p,".".concat(z),void 0,this.componentId)),l=ia(l,z)}}return l},t}(),zm=nt.createContext(void 0);zm.Consumer;var Df={};function UA(t,i,r){var s=wm(t),l=t,u=!Cf(t),f=i.attrs,g=f===void 0?Vc:f,m=i.componentId,p=m===void 0?function(X,P){var F=typeof X!="string"?"sc":nv(X);Df[F]=(Df[F]||0)+1;var K="".concat(F,"-").concat(bm(Nc+F+Df[F]));return P?"".concat(P,"-").concat(K):K}(i.displayName,i.parentComponentId):m,y=i.displayName,b=y===void 0?function(X){return Cf(X)?"styled.".concat(X):"Styled(".concat(hA(X),")")}(t):y,j=i.displayName&&i.componentId?"".concat(nv(i.displayName),"-").concat(i.componentId):i.componentId||p,z=s&&l.attrs?l.attrs.concat(g).filter(Boolean):g,T=i.shouldForwardProp;if(s&&l.shouldForwardProp){var O=l.shouldForwardProp;if(i.shouldForwardProp){var L=i.shouldForwardProp;T=function(X,P){return O(X,P)&&L(X,P)}}else T=O}var C=new PA(r,j,s?l.componentStyle:void 0);function V(X,P){return function(F,K,ee){var le=F.attrs,be=F.componentStyle,Be=F.defaultProps,_e=F.foldedComponentIds,zt=F.styledComponentId,bt=F.target,Ye=nt.useContext(zm),U=jh(),I=F.shouldForwardProp||U.shouldForwardProp,te=Zb(K,Ye,Be)||gr,fe=function(pe,re,We){for(var q,oe=xt(xt({},re),{className:void 0,theme:We}),Ee=0;Ee<pe.length;Ee+=1){var Ge=yr(q=pe[Ee])?q(oe):q;for(var Ne in Ge)oe[Ne]=Ne==="className"?ia(oe[Ne],Ge[Ne]):Ne==="style"?xt(xt({},oe[Ne]),Ge[Ne]):Ge[Ne]}return re.className&&(oe.className=ia(oe.className,re.className)),oe}(le,K,te),A=fe.as||bt,G={};for(var Z in fe)fe[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&fe.theme===te||(Z==="forwardedAs"?G.as=fe.forwardedAs:I&&!I(Z,A)||(G[Z]=fe[Z]));var Q=function(pe,re){var We=jh(),q=pe.generateAndInjectStyles(re,We.styleSheet,We.stylis);return q}(be,fe),ie=ia(_e,zt);return Q&&(ie+=" "+Q),fe.className&&(ie+=" "+fe.className),G[Cf(A)&&!Qb.has(A)?"class":"className"]=ie,ee&&(G.ref=ee),S.createElement(A,G)}(D,X,P)}V.displayName=b;var D=nt.forwardRef(V);return D.attrs=z,D.componentStyle=C,D.displayName=b,D.shouldForwardProp=T,D.foldedComponentIds=s?ia(l.foldedComponentIds,l.styledComponentId):"",D.styledComponentId=j,D.target=s?l.target:t,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=s?function(P){for(var F=[],K=1;K<arguments.length;K++)F[K-1]=arguments[K];for(var ee=0,le=F;ee<le.length;ee++)bh(P,le[ee],!0);return P}({},l.defaultProps,X):X}}),jm(D,function(){return".".concat(D.styledComponentId)}),u&&iw(D,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function uv(t,i){for(var r=[t[0]],s=0,l=i.length;s<l;s+=1)r.push(i[s],t[s+1]);return r}var dv=function(t){return Object.assign(t,{isCss:!0})};function Di(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];if(yr(t)||es(t))return dv(ki(uv(Vc,fr([t],i,!0))));var s=t;return i.length===0&&s.length===1&&typeof s[0]=="string"?ki(s):dv(ki(uv(s,i)))}function zh(t,i,r){if(r===void 0&&(r=gr),!i)throw ls(1,i);var s=function(l){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return t(i,r,Di.apply(void 0,fr([l],u,!1)))};return s.attrs=function(l){return zh(t,i,xt(xt({},r),{attrs:Array.prototype.concat(r.attrs,l).filter(Boolean)}))},s.withConfig=function(l){return zh(t,i,xt(xt({},r),l))},s}var dw=function(t){return zh(UA,t)},x=dw;Qb.forEach(function(t){x[t]=dw(t)});var HA=function(){function t(i,r){this.rules=i,this.componentId=r,this.isStatic=uw(i),jc.registerId(this.componentId+1)}return t.prototype.createStyles=function(i,r,s,l){var u=l(bc(ki(this.rules,r,s,l)),""),f=this.componentId+i;s.insertRules(f,f,u)},t.prototype.removeStyles=function(i,r){r.clearRules(this.componentId+i)},t.prototype.renderStyles=function(i,r,s,l){i>2&&jc.registerId(this.componentId+i),this.removeStyles(i,s),this.createStyles(i,r,s,l)},t}();function fw(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var s=Di.apply(void 0,fr([t],i,!1)),l="sc-global-".concat(bm(JSON.stringify(s))),u=new HA(s,l),f=function(m){var p=jh(),y=nt.useContext(zm),b=nt.useRef(p.styleSheet.allocateGSInstance(l)).current;return p.styleSheet.server&&g(b,m,p.styleSheet,y,p.stylis),nt.useLayoutEffect(function(){if(!p.styleSheet.server)return g(b,m,p.styleSheet,y,p.stylis),function(){return u.removeStyles(b,p.styleSheet)}},[b,m,p.styleSheet,y,p.stylis]),null};function g(m,p,y,b,j){if(u.isStatic)u.renderStyles(m,cA,y,j);else{var z=xt(xt({},p),{theme:Zb(p,b,f.defaultProps)});u.renderStyles(m,z,y,j)}}return nt.memo(f)}function hw(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var s=bc(Di.apply(void 0,fr([t],i,!1))),l=bm(s);return new sw(l,s)}const mw=t=>{const[i,r]=S.useState(!1);return S.useEffect(()=>{const s=window.matchMedia(t);r(s.matches);const l=u=>{r(u.matches)};return s.addEventListener("change",l),()=>{s.removeEventListener("change",l)}},[t]),i},pw=()=>mw("(max-width: 767px)"),$A=()=>mw("(prefers-reduced-motion: reduce)"),YA=(t=!0)=>{const i=t?"smooth":"auto",r=document.querySelector(".custom-scroll-container");r?(r.scrollTo({top:0,left:0,behavior:i}),requestAnimationFrame(()=>{r.scrollTop=0})):(window.scrollTo({top:0,left:0,behavior:i}),requestAnimationFrame(()=>{document.documentElement.scrollTop=0,document.body.scrollTop=0}))},GA=()=>{const[t,i]=S.useState(!1),r=$A(),s=pw(),l=r||s;S.useEffect(()=>{const f=()=>{const y=document.querySelector(".custom-scroll-container");let b=0;y?b=y.scrollTop:b=window.scrollY,b>300?i(!0):i(!1)},g=()=>{const y=document.querySelector(".custom-scroll-container");return y?(y.addEventListener("scroll",f),f(),()=>{y.removeEventListener("scroll",f)}):(window.addEventListener("scroll",f),f(),()=>{window.removeEventListener("scroll",f)})},m=setTimeout(g,100),p=g();return()=>{clearTimeout(m),p&&p()}},[]);const u=()=>{YA(!0)};return h.jsx(Ei,{children:t&&h.jsxs(qA,{initial:l?{opacity:0}:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:l?{opacity:0}:{opacity:0,scale:.5},whileHover:l?{}:{scale:1.1},whileTap:l?{}:{scale:.9},transition:{duration:l?.15:.2,type:l?"tween":"spring"},onClick:u,"aria-label":"Scroll to top",children:["          ",h.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M12 5L5 12M12 5L19 12M12 5V19",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})})]})})},qA=x(J.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px; /* Increased size */
  height: 60px; /* Increased size */
  border-radius: 50%;
  background: var(--primary);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25); /* Enhanced shadow */
  z-index: 9999; /* Increased z-index to ensure it's above all other elements */
  will-change: transform;
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    bottom: 20px;
    right: 20px;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    bottom: 16px;
    right: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
    &:hover {
    background: var(--secondary);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
  
  &:active {
    transform: translateY(2px);
  }
  
  svg {
    width: 28px;
    height: 28px;
  }
`,XA=()=>{const{hash:t}=un();return S.useEffect(()=>{t&&setTimeout(()=>{const i=document.getElementById(t.substring(1));i&&i.scrollIntoView({behavior:"smooth"})},100)},[t]),null},Rf=()=>{const{darkMode:t,toggleTheme:i}=D5();S.useEffect(()=>{if(!localStorage.getItem("flid-theme-toggled")){const f=setTimeout(()=>{s(!0),setTimeout(()=>{s(!1)},2e3)},3e3);return()=>clearTimeout(f)}},[]);const[r,s]=S.useState(!1),l=()=>{localStorage.setItem("flid-theme-toggled","true"),i()};return h.jsxs(FA,{onClick:l,"aria-label":`Switch to ${t?"light":"dark"} mode`,className:r?"pulse-attention":"",children:["      ",h.jsxs(IA,{className:"toggle-icon",initial:!1,animate:{rotate:t?180:0,scale:r?[1,1.1,1]:1},transition:{rotate:{duration:.8,ease:[.25,.1,.25,1]},scale:r?{repeat:2,duration:.8,ease:[.25,.1,.25,1]}:{}},children:["        ",t?h.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"sun-icon",children:[h.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"#FFD700",stroke:"#FFA500",strokeWidth:"1"}),h.jsxs("g",{stroke:"#FFD700",strokeWidth:"2",strokeLinecap:"round",children:[h.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"4"}),h.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"22"}),h.jsx("line",{x1:"22",y1:"12",x2:"20",y2:"12"}),h.jsx("line",{x1:"4",y1:"12",x2:"2",y2:"12"}),h.jsx("line",{x1:"19.07",y1:"4.93",x2:"17.66",y2:"6.34"}),h.jsx("line",{x1:"6.34",y1:"17.66",x2:"4.93",y2:"19.07"}),h.jsx("line",{x1:"19.07",y1:"19.07",x2:"17.66",y2:"17.66"}),h.jsx("line",{x1:"6.34",y1:"6.34",x2:"4.93",y2:"4.93"})]})]}):h.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"moon-icon",children:[h.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",fill:"var(--text)",stroke:"var(--text-secondary)",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("circle",{cx:"9",cy:"9",r:"1",fill:"var(--background)",opacity:"0.4"}),h.jsx("circle",{cx:"14",cy:"13",r:"0.5",fill:"var(--background)",opacity:"0.3"})]})]})]})},FA=x.button`
  background: transparent;
  border: 1.5px solid var(--border);
  color: var(--text);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-left: 8px;
  flex-shrink: 0;
  
  /* Force perfect circle - prevent oval/egg shape */
  min-width: 44px;
  max-width: 44px;
  min-height: 44px;
  max-height: 44px;
  aspect-ratio: 1;
  
  /* Light background for sun icon */
  &[aria-label*="dark mode"] {
    background: rgba(255, 248, 225, 0.2);
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    /* Enhance hover effect for sun button */
    &[aria-label*="dark mode"] {
      background: rgba(255, 248, 225, 0.4);
      border-color: rgba(255, 215, 0, 0.4);
    }
  }
  &:focus {
    outline: none;
    outline-offset: 0;
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.3);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(var(--primary-rgb), 0.2);
  }

  /* Pulse animation for attention */
  &.pulse-attention {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.5); }
    70% { box-shadow: 0 0 0 8px rgba(var(--primary-rgb), 0); }
    100% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0); }
  }
  
  /* Dark mode specific styles */
  html.dark & {
    border-color: var(--lavender-600);
    background: var(--background-alt);
  }
`,IA=x(J.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  width: 26px;
  height: 26px;

  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }

  html.dark & {
    color: #e0e0e0;
    
    svg {
      filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.2));
    }
  }

  /* Override for sun icon */
  .sun-icon {
    width: 26px;
    height: 26px;
  }

  /* Override for moon icon */
  .moon-icon {
    width: 24px;
    height: 24px;
  }
`,KA=()=>{const[t,i]=S.useState(!1),r=un(),s=r.pathname==="/";S.useEffect(()=>{i(!1)},[r]),S.useEffect(()=>{},[]),S.useEffect(()=>{const u=f=>{if(f.key==="Escape"&&t&&i(!1),f.altKey&&f.key==="m"&&i(g=>!g),f.altKey&&f.key==="h"&&(window.location.href="/"),f.altKey&&!isNaN(f.key)&&parseInt(f.key)>=1&&parseInt(f.key)<=5){const g=["/","/projects","/publications","/about","/contact"],m=parseInt(f.key)-1;g[m]&&(window.location.href=g[m])}};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[t]);const l=S.useCallback(()=>{i(u=>{const f=!u;return f?(document.body.style.overflow="hidden",document.body.classList.add("mobile-menu-open")):(document.body.style.overflow="unset",document.body.classList.remove("mobile-menu-open")),f})},[]);return S.useEffect(()=>{const u=f=>{f.key==="Escape"&&t&&(i(!1),document.body.style.overflow="unset",document.body.classList.remove("mobile-menu-open"))};return t&&document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[t]),S.useEffect(()=>()=>{document.body.style.overflow="unset",document.body.classList.remove("mobile-menu-open")},[]),h.jsxs(h.Fragment,{children:[h.jsx(ZA,{$isHomePage:s,role:"navigation","aria-label":"Main Navigation",children:h.jsxs(QA,{children:[h.jsx(WA,{children:h.jsx(JA,{to:"/","aria-label":"FLID Studio",children:h.jsx(fv,{children:"FLID"})})}),h.jsxs(eE,{children:["          ",h.jsxs(tE,{role:"menubar",children:[[{to:"/",label:"Strona główna",shortcut:"Alt+1",ariaShortcut:"Alt plus 1"},{to:"/projects",label:"Projekty",shortcut:"Alt+2",ariaShortcut:"Alt plus 2"},{to:"/publications",label:"Publikacje",shortcut:"Alt+3",ariaShortcut:"Alt plus 3"},{to:"/about",label:"O nas",shortcut:"Alt+4",ariaShortcut:"Alt plus 4"},{to:"/contact",label:"Kontakt",shortcut:"Alt+5",ariaShortcut:"Alt plus 5"}].map((u,f)=>h.jsx(nE,{role:"none",children:h.jsxs(gw,{to:u.to,$delay:f*.05,$isActive:u.to===r.pathname||u.to==="/"&&r.pathname==="/",title:`${u.label} (${u.shortcut})`,"aria-keyshortcuts":u.ariaShortcut,role:"menuitem",tabIndex:0,children:[u.label,h.jsx(aE,{children:u.shortcut}),h.jsx(iE,{className:"link-effect"})]})},u.to)),"          "]}),h.jsx(rE,{children:h.jsx(Rf,{})})]}),h.jsxs(oE,{children:[h.jsx(hv,{children:h.jsx(Rf,{})}),"          ",h.jsx(sE,{className:"menu-button",onClick:l,"aria-expanded":t,"aria-controls":"mobile-menu","aria-label":t?"Zamknij menu":"Otwórz menu","aria-haspopup":"true",children:h.jsxs(lE,{$isOpen:t,children:[h.jsx(cE,{$isOpen:t}),h.jsx(uE,{$isOpen:t}),h.jsx(dE,{$isOpen:t})]})}),"        "]})]})}),h.jsx(Ei,{mode:"wait",children:t&&h.jsxs(fE,{id:"mobile-menu",role:"dialog","aria-modal":"true","aria-label":"Menu nawigacyjne",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:[h.jsx(hE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:l}),h.jsxs(mE,{className:"mobile-menu-content",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",duration:.3,ease:"easeInOut"},children:[h.jsxs(pE,{children:[h.jsx(CE,{to:"/",onClick:l,children:h.jsx(fv,{children:"FLID"})}),h.jsxs(gE,{children:[h.jsx(hv,{className:"mobile-theme-wrapper",children:h.jsx(Rf,{})}),h.jsx(vE,{onClick:l,"aria-label":"Zamknij menu",title:"Zamknij menu",children:h.jsx(xE,{})})]})]}),h.jsx(yE,{children:h.jsx(bE,{initial:"closed",animate:"open",exit:"closed",role:"menu","aria-label":"Menu nawigacyjne mobilne",variants:{open:{transition:{staggerChildren:.07,delayChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},children:[{to:"/",label:"Strona główna",shortcut:"Alt+1",ariaShortcut:"Alt plus 1"},{to:"/projects",label:"Projekty",shortcut:"Alt+2",ariaShortcut:"Alt plus 2"},{to:"/publications",label:"Publikacje",shortcut:"Alt+3",ariaShortcut:"Alt plus 3"},{to:"/about",label:"O nas",shortcut:"Alt+4",ariaShortcut:"Alt plus 4"},{to:"/contact",label:"Kontakt",shortcut:"Alt+5",ariaShortcut:"Alt plus 5"}].map(u=>h.jsx(wE,{role:"none",variants:{open:{opacity:1,y:0,transition:{type:"spring",stiffness:350,damping:30}},closed:{opacity:0,y:20,transition:{type:"spring",stiffness:350,damping:30}}},children:h.jsx(jE,{to:u.to,onClick:l,$isActive:u.to===r.pathname||u.to==="/"&&r.pathname==="/",role:"menuitem",tabIndex:0,title:`${u.label} (${u.shortcut})`,"aria-keyshortcuts":u.ariaShortcut,children:u.label})},u.to))})}),h.jsxs(zE,{children:[h.jsxs(SE,{children:[h.jsx(Mf,{href:"https://facebook.com","aria-label":"Facebook",children:h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"})})}),h.jsx(Mf,{href:"https://instagram.com","aria-label":"Instagram",children:h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.666.642-1.272 1.153-1.772.5-.508 1.106-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.352-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"})})}),h.jsx(Mf,{href:"https://linkedin.com","aria-label":"LinkedIn",children:h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M19.996 2H4.004A2.004 2.004 0 002 4.004v15.992A2.004 2.004 0 004.004 22h15.992A2.004 2.004 0 0022 19.996V4.004A2.004 2.004 0 0019.996 2zM8.49 18.993H5.197V9.497H8.49v9.496zM6.843 8.146a1.91 1.91 0 11-.001-3.822 1.91 1.91 0 01.001 3.822zm12.15 10.847h-3.293v-5.148c0-1.23-.025-2.812-1.714-2.812-1.714 0-1.977 1.339-1.977 2.72v5.24H8.716V9.497h3.161v1.45h.045c.44-.836 1.515-1.714 3.118-1.714 3.334 0 3.953 2.193 3.953 5.048v4.712z"})})})]}),h.jsxs(kE,{children:[h.jsx(TE,{children:"© 2025 FLID Studio • Wszystkie prawa zastrzeżone"}),h.jsxs(AE,{children:[h.jsx(mv,{href:"/privacy",children:"Polityka Prywatności"}),h.jsx(EE,{children:"•"}),h.jsx(mv,{href:"/terms",children:"Warunki"})]})]})]})]})]})})]})},ZA=x.nav.attrs({className:"creative-navbar"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; // Zwiększono z-index powyżej PageTransitionOverlay
  height: 80px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center; // Center content within navbar
  transition: background-color 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0),
              backdrop-filter 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0),
              border-color 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0),
              box-shadow 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  // Always use semi-transparent background for elevated effect
  background-color: rgba(var(--background-rgb, 255, 255, 255), 0.9);
  // Always apply shadow
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  // Always apply backdrop filter
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  // Always apply border
  border-bottom: 1px solid var(--border-translucent, rgba(150, 150, 150, 0.1));
  
  /* Enhanced navbar glass effect - now always applied */
  background-image: linear-gradient(
    to bottom,
    rgba(var(--primary-rgb), 0.03),
    rgba(var(--accent-rgb), 0.01)
  );

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,QA=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-content-width);
  
  /* Zapobieganie przesunięciom podczas otwierania menu mobilnego */
  position: relative;
  transform: none !important;
  
  @media (max-width: 768px) {
    /* BRUTALNA STABILIZACJA POZYCJI NA MOBILE - ZERO PRZESUNIĘĆ */
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`,WA=x.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem;
  border-radius: 4px;
  
  /* Zapobieganie przesunięciom logo podczas otwierania menu */
  transform: none !important;
  margin: 0 !important;
  
  @media (max-width: 768px) {
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
`,JA=x(ze)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-image: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: transform 0.4s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  /* Stabilizacja pozycji logo */
  position: relative;
  transform: none !important;
  
  &:hover {
    background-image: none;
    transform: translateY(-1px) !important;
  }
  
  &:active {
    transform: translateY(0) !important;
  }
  
  @media (max-width: 768px) {
    /* Całkowita stabilizacja na mobile */
    transform: none !important;
    
    &:hover {
      transform: none !important;
    }
    
    &:active {
      transform: none !important;
    }
  }
`,fv=x.div`
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 0.08em;
  color: var(--text);
  text-align: center;
  line-height: 1;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`,eE=x.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,tE=x.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`,nE=x.li`
  position: relative;
`,iE=x.span`
  position: absolute;
  bottom: -3px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-light), var(--accent), var(--accent-dark));
  transition: width 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0), left 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  transform-origin: center;
  opacity: 0;
  border-radius: 4px;
  box-shadow: 0 0 8px var(--primary);
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,gw=x(Oh)`
  position: relative;
  padding: 0.5rem 1rem;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--text) !important;
  text-decoration: none;
  background-image: none;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  
  /* Added subtle dot indicator for active state */
  &:before {
    content: "";
    display: ${t=>t.$isActive?"block":"none"};
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.8;
    box-shadow: 0 0 4px var(--accent);
  }
  
  &:after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-light), var(--accent), var(--accent-dark));
    transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0), width 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    transform-origin: center;
    border-radius: 4px;
    box-shadow: 0 0 8px var(--primary);
  }
  
  &:hover:after, &.active:after {
    transform: translateX(-50%) scaleX(1);
    width: 100%;
  }
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Enhanced focus state */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent), 0 0 0 4px rgba(var(--accent-rgb), 0.2);
    border-radius: 4px;
  }
    @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:after {
      transition: none;
    }
  }
`,aE=x.span`
  position: absolute;
  top: -8px;
  right: 0;
  font-size: 0.6rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: var(--accent);
  color: white;
  padding: 1px 4px;
  border-radius: 3px;
  pointer-events: none;
  font-weight: var(--font-weight-medium);
  transform: translateY(-2px);
  
  @media (max-width: 992px) {
    display: none;
  }
  
  ${gw}:hover & {
    opacity: 0.9;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,hv=x.div`
  display: flex;
  align-items: center;
`,rE=x.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;x.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: var(--accent);
    background-color: rgba(var(--accent-rgb), 0.1);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: none;
    outline-offset: 0;
  }
`;const oE=x.div`
  display: none;
  align-items: center;
  gap: 1rem;
  
  /* Stabilizacja pozycji kontrolek mobilnych */
  position: relative;
  transform: none !important;
  margin: 0 !important;
  
  @media (max-width: 768px) {
    display: flex;
    /* Zapobieganie przesunięciom podczas otwierania menu */
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
`,sE=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  /* Stabilizacja pozycji przycisku hamburgera */
  position: relative;
  transform: none !important;
  margin: 0 !important;
  flex-shrink: 0;
  
  &:hover {
    background-color: var(--border);
    /* Bez transform na hover - stabilność */
    transform: none !important;
  }
  
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    /* Całkowita stabilizacja na mobile */
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,lE=x.div`
  position: relative;
  width: 24px;
  height: 18px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
`,Sm=x.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--text);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.19, 1.0, 0.22, 1.0), opacity 0.25s ease;
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,cE=x(Sm)`
  top: ${t=>t.$isOpen?"8px":"0"};
  transform: ${t=>t.$isOpen?"rotate(135deg)":"rotate(0)"};
`,uE=x(Sm)`
  top: 8px;
  opacity: ${t=>t.$isOpen?0:1};
`,dE=x(Sm)`
  top: ${t=>t.$isOpen?"8px":"16px"};
  transform: ${t=>t.$isOpen?"rotate(-135deg)":"rotate(0)"};
`;x(J.div).attrs({className:"mobile-menu-container"})`
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  z-index: 9999;
  pointer-events: auto;
  margin: 0 !important;
  padding: 0 !important;
  
  /* STABILNE POZYCJONOWANIE BEZ MARGINESÓW */
  @media (max-width: 768px) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    width: 100vw !important;
    height: 100vh !important;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;const fE=x(J.div).attrs({className:"independent-mobile-menu"})`
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  z-index: 99999; /* Higher z-index than regular mobile menu */
  pointer-events: auto;
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  
  /* COMPLETELY INDEPENDENT POSITIONING */
  @media (max-width: 768px) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`,hE=x(J.div).attrs({className:"mobile-menu-overlay"})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1000;
`,mE=x(J.div).attrs({className:"mobile-menu-content"})`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: rgba(var(--background-rgb, 255, 255, 255), 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 0 !important;
  margin: 0 !important;  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 10000;
  overflow-y: hidden;
  border: none;
  box-shadow: none;
  transform: none !important;
  
  /* BRUTALNE USUNIĘCIE WSZELKICH MARGINESÓW */
  inset: 0 !important;
  box-sizing: border-box !important;
  
  /* Zapobieganie marginesom na mobile */
  @media (max-width: 768px) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: none !important;
    max-height: none !important;
  }
  
  @media (prefers-reduced-motion: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`,pE=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative !important;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  transform: none !important;
  
  /* Minimize top space to eliminate gap */
  margin: 0;
  min-height: 80px;
  height: 80px;
  
  /* Ensure header is flush with top */
  flex-shrink: 0;
  
  /* Zapobieganie przesunięciom na mobile */
  @media (max-width: 768px) {
    /* Fix padding to match main navbar exactly - no extra margin */
    padding: 0 2rem !important;
    height: 80px;
    align-items: center;
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
`,gE=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: none !important;
  
  /* Stabilizacja kontrolek na mobile */
  @media (max-width: 768px) {
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
    flex-shrink: 0;
  }
`,yE=x.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  z-index: 10;
  
  /* Ensure centered content takes available space */
  min-height: 0;
`,vE=x.button`
  background: transparent;
  border: none;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  position: relative;
  transform: none !important;
  /* Match hamburger button dimensions for visual balance */
  flex-shrink: 0;
  
  /* Całkowita stabilizacja pozycji - bez transform na mobile */
  @media (max-width: 768px) {
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
  
  &:hover {
    background-color: rgba(var(--accent-rgb), 0.1);
    /* Usunięto transform dla stabilności pozycji */
  }
  
  &:active {
    background-color: rgba(var(--accent-rgb), 0.2);
    /* Usunięto transform dla stabilności pozycji */
  }
  
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,xE=x.span`
  position: relative;
  width: 24px;
  height: 24px;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--text);
    top: 50%;
    left: 0;
    transform-origin: center;
  }
  
  &:before {
    transform: translateY(-50%) rotate(45deg);
  }
  
  &:after {
    transform: translateY(-50%) rotate(-45deg);
  }
`,bE=x(J.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,wE=x(J.li)`
  position: relative;
`,jE=x(Oh)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  background-image: none;
  position: relative;
  transition: all 0.3s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  border-radius: 12px;
  margin: 0.25rem 0;
  background-color: transparent;
  border: 2px solid transparent;
  
  &:hover, &.active {
    color: var(--accent);
    background-color: rgba(var(--accent-rgb), 0.1);
    border-color: rgba(var(--accent-rgb), 0.2);
    transform: translateY(-2px);
  }
  
  &.active {
    font-weight: 700;
    background-color: rgba(var(--accent-rgb), 0.15);
    border-color: var(--accent);
  }
  
  /* Accessible focus styles */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.3);
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,zE=x.div`
  margin-top: auto;
  padding: 1rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,SE=x.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,Mf=x.a`
  color: var(--text-secondary);
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: var(--accent);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    display: block;
  }
`,kE=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,TE=x.p`
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  margin: 0;
  opacity: 0.8;
`,AE=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-xs);
`,mv=x.a`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`,EE=x.span`
  color: var(--text-secondary);
  opacity: 0.5;
  font-size: 0.5rem;
`,CE=x(ze)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-image: none;
  transition: transform 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  transform: none !important;
  
  /* Match close button dimensions for visual balance */
  min-width: 40px;
  min-height: 40px;
  justify-content: flex-start;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.05) !important;
    background-color: rgba(var(--accent-rgb), 0.1);
  }
`,DE=()=>{const t=un(),i=Oz();S.useEffect(()=>{i==="PUSH"?(window.scrollTo({top:0,left:0,behavior:"auto"}),requestAnimationFrame(()=>{document.documentElement.scrollTop=0,document.body.scrollTop=0})):"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")},[t.pathname,i])},RE=()=>{const t=new Date().getFullYear();return h.jsx(ME,{children:h.jsxs(OE,{children:[h.jsxs(LE,{children:[h.jsxs(BE,{children:[h.jsxs(_E,{children:[h.jsx(NE,{as:ze,to:"/",children:"FLID"}),h.jsx(VE,{children:"Design dla lepszej przyszłości"})]}),h.jsx(PE,{children:"Fundacja Ludzie-Innowacje-Design to organizacja zajmująca się projektowaniem pozytywnych zmian społecznych poprzez innowacyjne podejście do designu i zrównoważonego rozwoju."})]}),h.jsxs(UE,{children:[h.jsxs(Rl,{children:[h.jsx(Ml,{children:"Nawigacja"}),h.jsxs(pv,{children:[h.jsx(Un,{as:ze,to:"/",children:"Strona główna"}),h.jsx(Un,{as:ze,to:"/about",children:"O nas"}),h.jsx(Un,{as:ze,to:"/projects",children:"Projekty"}),h.jsx(Un,{as:ze,to:"/publications",children:"Publikacje"}),h.jsx(Un,{as:ze,to:"/contact",children:"Kontakt"})]})]}),h.jsxs(Rl,{children:[h.jsx(Ml,{children:"Projekty"}),h.jsxs(pv,{children:[h.jsx(Un,{as:ze,to:"/projects?category=design",children:"Design thinking"}),h.jsx(Un,{as:ze,to:"/projects?category=education",children:"Edukacja"}),h.jsx(Un,{as:ze,to:"/projects?category=innovation",children:"Innowacje"}),h.jsx(Un,{as:ze,to:"/projects?category=sustainability",children:"Zrównoważony rozwój"})]})]}),h.jsxs(Rl,{children:[h.jsx(Ml,{children:"Kontakt"}),h.jsxs(HE,{children:[h.jsxs(Of,{children:[h.jsx(Lf,{children:h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("circle",{cx:"12",cy:"10",r:"3",stroke:"currentColor",strokeWidth:"2"})]})}),h.jsxs(Bf,{children:["ul. Gazownicza 9",h.jsx("br",{}),"43-300 Bielsko-Biała"]})]}),h.jsxs(Of,{children:[h.jsx(Lf,{children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),h.jsx(Bf,{children:"(33) 812 43 86"})]}),h.jsxs(Of,{children:[h.jsx(Lf,{children:h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("polyline",{points:"22,6 12,13 2,6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),h.jsx(Bf,{children:"biuro@flid.pl"})]})]})]}),h.jsxs(Rl,{children:[h.jsx(Ml,{children:"Śledź nas"}),h.jsxs($E,{children:[h.jsxs(YE,{children:[h.jsx(_f,{href:"https://www.facebook.com/fundacja.ludzie.innowacje.design",target:"_blank",rel:"noopener noreferrer","aria-label":"FLID na Facebooku",children:h.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),h.jsx(_f,{href:"https://linkedin.com/company/flid-foundation",target:"_blank",rel:"noopener noreferrer","aria-label":"FLID na LinkedIn",children:h.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),h.jsx(_f,{href:"https://instagram.com/flid_foundation",target:"_blank",rel:"noopener noreferrer","aria-label":"FLID na Instagramie",children:h.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]}),h.jsxs(GE,{children:[h.jsx(qE,{children:"Newsletter"}),h.jsxs(XE,{children:[h.jsx(FE,{type:"email",placeholder:"Twój email","aria-label":"Adres email do newslettera"}),h.jsx(IE,{type:"submit",children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})]})]}),h.jsx(KE,{}),h.jsxs(ZE,{children:[h.jsxs(QE,{children:["© ",t," FLID - Fundacja Ludzie-Innowacje-Design. Wszystkie prawa zastrzeżone."]}),h.jsxs(WE,{children:[h.jsx(Nf,{href:"/privacy",children:"Polityka prywatności"}),h.jsx(gv,{children:"•"}),h.jsx(Nf,{href:"/terms",children:"Regulamin"}),h.jsx(gv,{children:"•"}),h.jsx(Nf,{href:"/cookies",children:"Polityka cookies"})]})]})]})})},ME=x.footer`
  width: 100%;
  background: linear-gradient(
    135deg,
    var(--background) 0%,
    rgba(var(--primary-rgb), 0.02) 50%,
    var(--background) 100%
  );
  color: var(--text);
  border-top: 1px solid var(--border);
  margin-top: auto;
  
  [data-theme="dark"] & {
    background: linear-gradient(
      135deg,
      var(--background-dark) 0%,
      rgba(var(--primary-rgb), 0.05) 50%,
      var(--background-dark) 100%
    );
    border-top-color: var(--border-dark);
  }
`,OE=x.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
`,LE=x.div`
  width: 100%;
  padding: 4rem 5%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 3rem 4%;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 3%;
    gap: 3rem;
  }
`,BE=x.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,_E=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,NE=x.div`
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 0.08em;
  color: var(--primary);
  text-decoration: none;
  line-height: 1;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  
  &:hover {
    color: var(--accent);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,VE=x.p`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  font-style: italic;
  font-weight: 400;
`,PE=x.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
  max-width: 450px;
`,UE=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,Rl=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ml=x.h3`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent);
  display: inline-block;
  width: fit-content;
`,pv=x.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Un=x.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.25rem 0;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--primary);
    transform: translateX(4px);
    
    &::before {
      width: 100%;
    }
  }
  
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 4px;
  }
`,HE=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Of=x.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
  }
`,Lf=x.div`
  color: var(--primary);
  margin-top: 0.2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`,Bf=x.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`,$E=x.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,YE=x.div`
  display: flex;
  gap: 1rem;
`,_f=x.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(var(--primary-rgb), 0.1);
  border: 2px solid rgba(var(--primary-rgb), 0.2);
  border-radius: 12px;
  color: var(--primary);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--primary);
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: translate(-50%, -50%);
  }
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary);
    color: white;
    box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.3);
    
    &::before {
      width: 100px;
      height: 100px;
    }
    
    svg {
      position: relative;
      z-index: 1;
    }
  }
  
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`,GE=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,qE=x.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
`,XE=x.form`
  display: flex;
  border: 2px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--background);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(var(--primary-rgb), 0.1), 
      rgba(var(--primary-rgb), 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.15);
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
    }
  }
  
  [data-theme="dark"] & {
    background: var(--background-dark);
    border-color: var(--border-dark);
  }
`,FE=x.input`
  flex: 1;
  padding: 1rem;
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 0.95rem;
  outline: none;
  
  &::placeholder {
    color: var(--text-light);
  }
`,IE=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus-visible {
    outline: 3px solid rgba(var(--primary-rgb), 0.5);
    outline-offset: 2px;
  }
  
  &:active {
    transform: scale(0.98);
  }
`,KE=x.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--border),
    var(--border),
    transparent
  );
  margin: 2rem 0;
`,ZE=x.div`
  width: 100%;
  padding: 2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    padding: 2rem 4%;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem 3%;
  }
`,QE=x.p`
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
`,WE=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,Nf=x.a`
  font-size: 0.9rem;
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
  
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 2px;
  }
`,gv=x.span`
  color: var(--text-light);
  font-size: 0.9rem;
  opacity: 0.6;
`,JE=({children:t})=>(XA(),DE(),h.jsxs(e6,{children:[h.jsx(KA,{}),h.jsx(t6,{className:"page-transition-container",children:t}),h.jsx(RE,{}),h.jsx(GA,{})]})),e6=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`,t6=x.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding-top: 80px; /* Kompensacja dla fixed navbar */
  
  /* Add smooth transition for dark/light mode changes */
  transition: background-color 0.3s ease, color 0.3s ease;
  
  /* HD Display enhancements with refined spacing and typography */
  @media (min-width: 1920px) {
    padding: 0;
    max-width: none;
    margin: 0;
    
    & h1 {
      font-size: 3.5rem;
    }
    
    & h2 {
      font-size: 2.8rem;
    }
    
    & p {
      font-size: 1.1rem;
      line-height: 1.7;
    }
    
    & section {
      margin: 5rem 0;
    }
  }
  
  /* Ultra HD Display optimizations */
  @media (min-width: 2560px) {
    padding: 0;
    max-width: none;
    margin: 0;
    
    & h1 {
      font-size: 4rem;
    }
    
    & h2 {
      font-size: 3.2rem;
    }
    
    & p {
      font-size: 1.2rem;
      line-height: 1.8;
    }
    
    & section {
      margin: 6rem 0;
    }
  }
`;x.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 12px;
  height: 100vh;
  background: linear-gradient(to bottom, 
    rgba(var(--lavender-rgb), 0.03) 0%, 
    rgba(var(--lavender-rgb), 0.06) 50%, 
    rgba(var(--lavender-rgb), 0.03) 100%
  );
  z-index: 1000;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${t=>t.$isActive?.8:.4};
  transform: translateX(${t=>t.$isActive?"0":"4px"});

  &:hover {
    opacity: 1;
    transform: translateX(0);
    width: 14px;
  }

  @media (max-width: 768px) {
    width: 8px;
    
    &:hover {
      width: 10px;
    }
  }
`;x.div`
  position: absolute;
  left: 2px;
  width: 8px;
  background: linear-gradient(135deg, 
    var(--lavender-500) 0%, 
    var(--lavender-400) 50%, 
    var(--lavender-600) 100%
  );
  border-radius: 6px;
  transition: all 0.3s ease;
  min-height: 24px;
  opacity: ${t=>t.$isActive?1:.7};

  &:hover {
    width: 10px;
    left: 1px;
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 6px;
    left: 1px;

    &:hover {
      width: 8px;
      left: 0px;
    }
  }
`;const n6=({isTransitioning:t})=>{const i={hidden:{opacity:0,visibility:"hidden"},visible:{opacity:.03,visibility:"visible",transition:{duration:.2,ease:[.25,.1,.25,1]}},exit:{opacity:0,visibility:"hidden",transition:{duration:.3,ease:[.7,0,.84,0]}}};return t?h.jsx(J.div,{initial:"hidden",animate:"visible",exit:"exit",variants:i,style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, var(--background-alt) 0%, var(--background) 100%)",zIndex:9998,pointerEvents:"none",willChange:"opacity"}}):null};var Sh=new Map,Ol=new WeakMap,yv=0,i6=void 0;function a6(t){return t?(Ol.has(t)||(yv+=1,Ol.set(t,yv.toString())),Ol.get(t)):"0"}function r6(t){return Object.keys(t).sort().filter(i=>t[i]!==void 0).map(i=>`${i}_${i==="root"?a6(t.root):t[i]}`).toString()}function o6(t){const i=r6(t);let r=Sh.get(i);if(!r){const s=new Map;let l;const u=new IntersectionObserver(f=>{f.forEach(g=>{var m;const p=g.isIntersecting&&l.some(y=>g.intersectionRatio>=y);t.trackVisibility&&typeof g.isVisible>"u"&&(g.isVisible=p),(m=s.get(g.target))==null||m.forEach(y=>{y(p,g)})})},t);l=u.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:i,observer:u,elements:s},Sh.set(i,r)}return r}function s6(t,i,r={},s=i6){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const m=t.getBoundingClientRect();return i(s,{isIntersecting:s,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:m,intersectionRect:m,rootBounds:m}),()=>{}}const{id:l,observer:u,elements:f}=o6(r),g=f.get(t)||[];return f.has(t)||f.set(t,g),g.push(i),u.observe(t),function(){g.splice(g.indexOf(i),1),g.length===0&&(f.delete(t),u.unobserve(t)),f.size===0&&(u.disconnect(),Sh.delete(l))}}function $n({threshold:t,delay:i,trackVisibility:r,rootMargin:s,root:l,triggerOnce:u,skip:f,initialInView:g,fallbackInView:m,onChange:p}={}){var y;const[b,j]=S.useState(null),z=S.useRef(p),[T,O]=S.useState({inView:!!g,entry:void 0});z.current=p,S.useEffect(()=>{if(f||!b)return;let D;return D=s6(b,(X,P)=>{O({inView:X,entry:P}),z.current&&z.current(X,P),P.isIntersecting&&u&&D&&(D(),D=void 0)},{root:l,rootMargin:s,threshold:t,trackVisibility:r,delay:i},m),()=>{D&&D()}},[Array.isArray(t)?t.toString():t,b,l,s,u,f,r,m,i]);const L=(y=T.entry)==null?void 0:y.target,C=S.useRef(void 0);!b&&L&&!u&&!f&&C.current!==L&&(C.current=L,O({inView:!!g,entry:void 0}));const V=[j,T.inView,T.entry];return V.ref=V[0],V.inView=V[1],V.entry=V[2],V}const l6=()=>"/flid",W=t=>{const i=l6(),r=t.startsWith("/")?t.slice(1):t,s=r.startsWith("images/")?r:`images/${r}`;return`${i}/${s}`},ca=({title:t="FLID - Fundacja Ludzie-Innowacje-Design",description:i="FLID to fundacja zajmująca się innowacyjnymi projektami z zakresu designu, technologii i usług dla społeczeństwa.",keywords:r="design thinking, innowacje, projektowanie usług, bielsko-biała, design",ogImage:s=W("flid-social-share.svg"),canonical:l=""})=>{const u="https://flid.pl",f=l?`${u}${l}`:u,g=t!=="FLID - Fundacja Ludzie-Innowacje-Design"?`${t} | FLID`:t;return h.jsxs(iS,{children:[h.jsx("title",{children:g}),h.jsx("meta",{name:"description",content:i}),h.jsx("meta",{name:"keywords",content:r}),h.jsx("link",{rel:"canonical",href:f}),h.jsx("meta",{property:"og:type",content:"website"}),h.jsx("meta",{property:"og:url",content:f}),h.jsx("meta",{property:"og:title",content:g}),h.jsx("meta",{property:"og:description",content:i}),h.jsx("meta",{property:"og:image",content:`${u}${s}`}),h.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),h.jsx("meta",{name:"twitter:url",content:f}),h.jsx("meta",{name:"twitter:title",content:g}),h.jsx("meta",{name:"twitter:description",content:i}),h.jsx("meta",{name:"twitter:image",content:`${u}${s}`})]})},aa=[{id:12,title:"LotniskoWiec Artystyczno-Naukowy",slug:"lotniskowiec",shortDesc:"Wydarzenie łączące fascynujący świat lotnictwa, techniki i sztuki w drewnianym hangarze Aeroklubu Bielsko-Bialskiego",category:"Wydarzenie Edukacyjno-Artystyczne",year:2025,coverImage:W("projects/lotniskowiec/cover.jpg"),fullDesc:`LotniskoWiec Artystyczno-Naukowy to wyjątkowe wydarzenie, które ma na celu połączenie fascynującego świata lotnictwa, techniki i sztuki. Zapraszamy do wspólnego odkrywania nauki i kreatywności!

W malowniczej przestrzeni drewnianego hangaru Aeroklubu Bielsko-Bialskiego spotkają się uczniowie, pasjonaci lotnictwa oraz wszyscy mieszkańcy regionu zainteresowani niezwykłym połączeniem tych dziedzin. To okazja, by z bliska poznać tajemnice lotnictwa, zobaczyć, jak technika inspiruje sztukę i jak sztuka nadaje formę technicznym dokonaniom.

Wydarzenie odbędzie się 13 czerwca 2025 (piątek) w godzinach 10:00–18:00. Wstęp na LotniskoWiec jest wolny!

Program wydarzenia obfituje w atrakcje dla każdego:
• Wystawa statyczna sprzętu lotniczego – zobaczysz z bliska samoloty, szybowce, a także ich części i mechanizmy
• Zwiedzanie modelarni Aeroklubu – poznaj miejsce, gdzie tworzy się latające modele
• Pokazy modeli latających w wykonaniu członków modelarni Aeroklubu
• Symulator lotu (kadłub Pirata) przygotowany przez ZSTiH – poczuj się jak prawdziwy pilot!
• Prezentacje szkół i uczelni – dowiedz się o możliwościach kształcenia w obszarach techniki, sztuki i lotnictwa
• Wystawa tkanin wielkoformatowych „Skrzydlaci" – sztuka inspirowana lotnictwem
• Mała wystawa artefaktów lotniczych – historyczne części, przyrządy i opowieści z lotniczego świata
• Kino lotnicze – stare filmy z lotniczej historii wyświetlane przez cały dzień
• Plener malarski prowadzony przez liceum plastyczne – twórz sztukę w unikalnej przestrzeni hangaru
• Oprawa muzyczna zapewniona przez szkołę muzyczną – dźwięki wypełniające LotniskoWiec
• Konkurs fotograficzny „LOTNISKOwiec artystyczno-naukowy – uchwyć klimat wydarzenia" – uwiecznij na zdjęciach to wyjątkowe spotkanie
• Strefa gastronomiczna – kawiarnia Fly Cafe – miejsce na przerwę i rozmowy

Wydarzenie nawiązuje również do bogatej lokalnej tradycji, świętując 90 lat projektowania i budowania szybowców w Bielsku-Białej i przypominając postać Piotra Mynarskiego, zasłużonego szybowcowego pilota doświadczalnego Szybowcowego Zakładu Doświadczalnego.

LotniskoWiec to część projektu arting – inicjatywy łączącej sztukę i inne dziedziny, co widać także w zastosowanej komunikacji wizualnej i planowanym obiekcie przestrzennym.`,images:[W("projects/lotniskowiec/cover.jpg"),W("projects/lotniskowiec/lotniskowiec_1.png"),W("projects/lotniskowiec/lotniskowiec_2.png"),W("projects/lotniskowiec/lotniskowiec_3.png"),W("projects/lotniskowiec/lotniskowiec_4.png"),W("projects/lotniskowiec/lotniskowiec_5.png"),W("projects/lotniskowiec/lotniskowiec_6.png"),W("projects/lotniskowiec/lotniskowiec_7.png"),W("projects/lotniskowiec/lotniskowiec_8.png"),W("projects/lotniskowiec/lotniskowiec_9.png"),W("projects/lotniskowiec/lotniskowiec_10.png"),W("projects/lotniskowiec/lotniskowiec_11.png"),W("projects/lotniskowiec/lotniskowiec_12.png")],partners:["Aeroklub Bielsko-Bialski","ZSTiH","Liceum Plastyczne","Szkoła Muzyczna"],technologies:["Edukacja STEAM","Sztuka i Technika","Przestrzeń Wystawiennicza","Komunikacja Wizualna"]},{id:1,title:"BB__Design Lab",slug:"bb-design-lab",shortDesc:"Laboratorium projektowe w Bielsku-Białej",category:"Laboratorium",year:2023,coverImage:W("projects/bb-design-lab/cover.jpg"),fullDesc:`BB__Design Lab to przestrzeń kreatywna stworzona w celu promowania designu
    i innowacyjnych rozwiązań projektowych w Bielsku-Białej. Laboratorium 
    łączy lokalnych projektantów, studentów, i przedsiębiorców, tworząc
    ekosystem wspierający rozwój projektów opartych o zasady zrównoważonego
    rozwoju i odpowiedzialnego designu.`,images:[W("projects/bb-design-lab/image1.jpg"),W("projects/bb-design-lab/image2.jpg"),W("projects/bb-design-lab/image3.jpg")],partners:["ASP Kraków","Miasto Bielsko-Biała"],technologies:["Design Thinking","UX/UI","Projektowanie Usług"]},{id:2,title:"Projekt Arting",slug:"projekt-arting",shortDesc:"Integracja sztuki i technologii w przestrzeni miejskiej",category:"Projekt Miejski",year:2022,coverImage:W("projects/projekt-arting/cover.jpg"),fullDesc:`Projekt Arting to inicjatywa łącząca sztukę z nowymi technologiami
    w przestrzeni miejskiej. Celem projektu jest ożywienie przestrzeni
    publicznej poprzez interaktywne instalacje artystyczne, które angażują
    mieszkańców i turystów, jednocześnie promując świadomość ekologiczną
    i społeczną.`,images:[W("projects/projekt-arting/image1.jpg"),W("projects/projekt-arting/image2.jpg")],partners:["Galeria Bielska BWA","Fundacja Sztuki Nowoczesnej"],technologies:["Sztuka Cyfrowa","IoT","Augmented Reality"]},{id:3,title:"Pszczela Hala",slug:"pszczela-hala",shortDesc:"Edukacyjny projekt promujący pszczelnictwo miejskie",category:"Edukacja Ekologiczna",year:2021,coverImage:W("projects/pszczela-hala/cover.jpg"),fullDesc:`Pszczela Hala to innowacyjny projekt edukacyjny mający na celu
    promocję miejskiego pszczelnictwa oraz zwiększenie świadomości
    ekologicznej mieszkańców. W ramach projektu stworzono przestrzeń
    edukacyjną z ulami miejskimi, gdzie odbywają się warsztaty i szkolenia
    z zakresu pszczelarstwa i ekologii.`,images:[W("projects/pszczela-hala/image1.jpg"),W("projects/pszczela-hala/image2.jpg"),W("projects/pszczela-hala/image3.jpg")],partners:["Koło Pszczelarzy w Bielsku-Białej","Szkoły podstawowe w regionie"],technologies:["Edukacja Ekologiczna","Projektowanie Zrównoważone","Urban Farming"]},{id:4,title:"Międzynarodowe warsztaty dla dzieci Energia Jutra",slug:"energia-jutra",shortDesc:"Warsztaty dla dzieci o odnawialnych źródłach energii",category:"Edukacja",year:2022,coverImage:W("projects/energia-jutra/cover.jpg"),fullDesc:`Energia Jutra to międzynarodowy projekt warsztatowy skierowany do dzieci
    i młodzieży, mający na celu edukację w zakresie odnawialnych źródeł energii
    i zrównoważonego rozwoju. Warsztaty łączą naukę z zabawą, angażując uczestników
    w praktyczne eksperymenty i projekty związane z energią słoneczną, wiatrową
    i wodną.`,images:[W("projects/energia-jutra/image1.jpg"),W("projects/energia-jutra/image2.jpg")],partners:["Szkoły podstawowe z Polski, Czech i Słowacji","Europejskie Centrum Energii Odnawialnej"],technologies:["Edukacja STEM","Design Thinking dla dzieci"]},{id:5,title:"Portal Słoneczny",slug:"portal-sloneczny",shortDesc:"Instalacja artystyczna wykorzystująca energię słoneczną",category:"Sztuka i Ekologia",year:2020,coverImage:W("projects/portal-sloneczny/cover.jpg"),fullDesc:`Portal Słoneczny to interaktywna instalacja artystyczna zasilana energią
    słoneczną, która zmienia swoją formę i oświetlenie w zależności od intensywności
    promieni słonecznych. Projekt ma na celu zwrócenie uwagi na potencjał energii
    odnawialnej oraz estetyczne aspekty zrównoważonego designu.`,images:[W("projects/portal-sloneczny/image1.jpg"),W("projects/portal-sloneczny/image2.jpg"),W("projects/portal-sloneczny/image3.jpg")],partners:["Miasto Bielsko-Biała","Fundacja Energia dla Sztuki"],technologies:["Energia Słoneczna","Interaktywna Sztuka","Projektowanie Oświetlenia"]},{id:6,title:"D-spot.pl Design Portal",slug:"d-spot-design-portal",shortDesc:"Portal internetowy o designie i zrównoważonym rozwoju",category:"Media Cyfrowe",year:2021,coverImage:W("projects/d-spot/cover.jpg"),fullDesc:`D-spot.pl to portal internetowy poświęcony designowi, architekturze
    i zrównoważonemu rozwojowi. Platforma służy jako przestrzeń wymiany myśli
    i inspiracji dla projektantów, architektów i entuzjastów designu, promując
    jednocześnie ideę odpowiedzialnego projektowania i świadomej konsumpcji.`,images:[W("projects/d-spot/image1.jpg"),W("projects/d-spot/image2.jpg")],partners:["Stowarzyszenie Projektantów Form Przemysłowych","Wydawnictwo Design"],technologies:["UX/UI","Content Management","Digital Publishing"]},{id:7,title:"Ławeczka Beskidzka",slug:"laweczka-beskidzka",shortDesc:"Projekt mebla miejskiego inspirowany lokalnym dziedzictwem",category:"Wzornictwo",year:2019,coverImage:W("projects/laweczka-beskidzka/cover.jpg"),fullDesc:`Ławeczka Beskidzka to projekt mebla miejskiego inspirowany lokalnym
    dziedzictwem kulturowym i przyrodniczym Beskidów. Ławeczka łączy tradycyjne
    motywy regionalne z nowoczesnym, funkcjonalnym designem, tworząc charakterystyczny
    element małej architektury miejskiej, który podkreśla tożsamość regionu.`,images:[W("projects/laweczka-beskidzka/image1.jpg"),W("projects/laweczka-beskidzka/image2.jpg"),W("projects/laweczka-beskidzka/image3.jpg")],partners:["Miasto Bielsko-Biała","Lokalni rzemieślnicy"],technologies:["Wzornictwo Przemysłowe","Rzemiosło","Projektowanie Mebli"]},{id:8,title:"Design Thinking dla dzieci - gra edukacyjna",slug:"design-thinking-dla-dzieci",shortDesc:"Gra edukacyjna ucząca dzieci metodologii Design Thinking",category:"Edukacja",year:2022,coverImage:W("projects/design-thinking-dla-dzieci/cover.jpg"),fullDesc:`Design Thinking dla dzieci to innowacyjna gra edukacyjna wprowadzająca
    najmłodszych w świat projektowania i twórczego rozwiązywania problemów.
    Gra w przystępny i interaktywny sposób uczy podstaw metodologii Design Thinking,
    rozwijając umiejętności kreatywnego myślenia, empatii oraz współpracy.`,images:[W("projects/design-thinking-dla-dzieci/image1.jpg"),W("projects/design-thinking-dla-dzieci/image2.jpg")],partners:["Szkoły podstawowe w regionie","Wydawnictwo Gier Edukacyjnych"],technologies:["Design Thinking","Game Design","Edukacja Kreatywna"]},{id:9,title:"Design Bank - miejsce projektowania, miejsce spotkań",slug:"design-bank",shortDesc:"Przestrzeń coworkingowa i wystawowa dla projektantów i przedsiębiorców",category:"Przestrzeń Kreatywna",year:2023,coverImage:W("projects/design-bank/cover.jpg"),fullDesc:`Design Bank to projekt, polegający na stworzeniu miejsca dla działań związanych z wzornictwem: wystaw, ekspozycji, szkoleń, warsztatów, doradztwa. Miejsca projektowania i gromadzenia informacji o projektowaniu, miejsce dla kształcenia i rozwoju

Doradztwo i szkolenia. Programy seminaryjne dla przedsiębiorców i designerów z zakresu wzornictwa, marketingu i reklamy, zarządzania designem, nowych technologii. Współpracujemy z takimi instytucjami jak: Stowarzyszenie Projektantów Wzornictwa, Małopolska Strefa Design, Instytut Wzornictwa w Warszawie, Zamek Przedsiębiorczości i Sztuki w Cieszynie, Związek Polskich Artystów Plastyków, Fundacja Ludzie-Innowacje Design, Akademia Sztuk Pięknych w Krakowie i Katowicach.
Wystawy i ekspozycje związane z programem seminariów oraz wystawy indywidualne projektantów, firm związanych z designem, artystów. Celem wystaw jest informowanie społeczeństwa o ważnych problemach, nowych rozwiązaniach wzornictwa oraz nawiązywaniu kontaktów pomiędzy przedsiębiorcami i projektantami.
Pośrednictwo i zarządzanie projektami. Usługa polega na kojarzeniu potencjału projektantów z potrzebami projektowymi przedsiębiorstw i instytucji.
Zapraszamy do współpracy wszystkich uznających potrzebę kreatywnego myślenia.`,images:[W("projects/design-bank/image1.jpg"),W("projects/design-bank/image2.jpg"),W("projects/design-bank/image3.jpg")],partners:["Lokalny Fundusz Biznesowy","Stowarzyszenie Architektów"],technologies:["Adaptive Reuse","Interior Design","Collaborative Spaces"]},{id:10,title:"Artystyczna Chata na Trzonce - miejsce plenerów, miejsce spotkań",slug:"artystyczna-chata-na-trzonce",shortDesc:"Przestrzeń twórcza w tradycyjnej chacie beskidzkiej",category:"Sztuka i Tradycja",year:2020,coverImage:W("projects/artystyczna-chata/cover.jpg"),fullDesc:`Artystyczna Chata na Trzonce to unikalne miejsce łączące tradycję
    z nowoczesnością, zlokalizowane w zabytkowej chacie beskidzkiej na wzgórzu
    Trzconka. Miejsce służy jako przestrzeń do organizacji plenerów malarskich,
    warsztatów artystycznych oraz spotkań twórczych, promując jednocześnie
    lokalną kulturę i rzemiosło.`,images:[W("projects/artystyczna-chata/image1.jpg"),W("projects/artystyczna-chata/image2.jpg")],partners:["ASP Katowice","Lokalni artyści i rzemieślnicy"],technologies:["Renowacja Zabytkowych Obiektów","Przestrzeń Wystawiennicza","Edukacja Artystyczna"]},{id:11,title:"Dom pracy twórczej majątek",slug:"dom-pracy-tworczej-majatek",shortDesc:"Przestrzeń twórcza w historycznym majątku ziemskim",category:"Sztuka i Dziedzictwo",year:2021,coverImage:W("projects/dom-pracy-tworczej/cover.jpg"),fullDesc:`Dom pracy twórczej majątek to projekt adaptacji historycznego
    majątku ziemskiego na przestrzeń twórczą i rezydencyjną dla artystów,
    projektantów i badaczy. Miejsce oferuje warunki do spokojnej pracy
    i kontemplacji, jednocześnie promując dialog międzypokoleniowy
    i międzydyscyplinarną współpracę twórczą.`,images:[W("projects/dom-pracy-tworczej/image1.jpg"),W("projects/dom-pracy-tworczej/image2.jpg"),W("projects/dom-pracy-tworczej/image3.jpg")],partners:["Ministerstwo Kultury i Dziedzictwa Narodowego","Fundacja Ochrony Zabytków"],technologies:["Renowacja i Adaptacja","Zrównoważona Architektura","Przestrzeń Artystyczna"]}],c6=[{id:1,name:"Wydział Form Przemysłowych Akademia Sztuk Pięknych w Krakowie",logo:"/partners/asp-krakow-logo.png",website:"https://wfp.asp.krakow.pl/",address:"ul. Smoleńsk 9, 31-108 Kraków"},{id:2,name:"Wydział Projektowy Akademia Sztuk Pięknych w Katowicach",logo:"/partners/asp-katowice-logo.png",website:"https://www.asp.katowice.pl/",address:"ul.Raciborska 37, 40-074 Katowice"},{id:3,name:"Wyższa Szkoła Górnicza w Ostravie / Vysoká škola báňská – Technická univerzita Ostrava",logo:"/partners/vsb-ostrava-logo.png",website:"https://www.vsb.cz/",address:"17. listopadu 15/2172, 708 33 Ostrava – Poruba, Czech Republic"},{id:4,name:"Akademia Techniczno-Humanistyczna w Bielsku-Białej",logo:"/partners/ath-logo.png",website:"https://www.ath.bielsko.pl/",address:"ul. Willowa 2, 43-309 Bielsko-Biała"}],vv=({width:t="100%",height:i="300px",text:r="Placeholder",bgColor:s="var(--primary)",textColor:l="white"})=>h.jsx(f6,{$width:t,$height:i,$bgColor:s,$textColor:l,children:r}),zc=({title:t="Project Title",animate:i=!0})=>h.jsxs(h6,{whileHover:i?{scale:1.03}:{},transition:{duration:.3},children:[h.jsx(Pc,{children:"🏗️"}),h.jsx(Uc,{children:t})]}),u6=({title:t="Publication"})=>h.jsxs(m6,{children:[h.jsx(Pc,{children:"📄"}),h.jsx(Uc,{children:t})]}),d6=({name:t="Partner"})=>h.jsxs(p6,{children:[h.jsx(Pc,{children:"🤝"}),h.jsx(Uc,{children:t})]}),Ll=({name:t="Team Member"})=>h.jsxs(g6,{children:[h.jsx(Pc,{children:"👤"}),h.jsx(Uc,{children:t})]}),f6=x.div`
  width: ${t=>t.$width};
  height: ${t=>t.$height};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${t=>t.$bgColor};
  color: ${t=>t.$textColor};
  font-weight: 600;
  border-radius: 8px;
  text-align: left;
  padding: 1rem;
`,h6=x(J.div)`
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`,m6=x.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`,p6=x.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: var(--card-bg);
  border: 2px dashed var(--border);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--text-secondary);
  padding: 1rem;
`,g6=x.div`
  width: 100%;
  aspect-ratio: 1/1;
  background: linear-gradient(45deg, var(--accent) 0%, var(--primary) 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 1rem;
`,Pc=x.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,Uc=x.span`
  font-weight: 600;
  text-align: center;
  font-size: 0.9rem;
`,ln=({src:t,alt:i,placeholderSrc:r="/images/placeholder.svg",aspectRatio:s="auto",imgStyles:l={},priority:u=!1,className:f="",...g})=>{console.log("OptimizedImage rendering:",{src:t,alt:i,priority:u});const[m,p]=S.useState(!1),[y,b]=S.useState(!1),j=pw(),z=s.split(":"),T=s!=="auto"&&z.length===2?parseInt(z[1])/parseInt(z[0])*100:null,O=()=>{console.log("Image loaded successfully:",t),p(!0)},L=()=>{console.error(`Failed to load image: ${t}`),b(!0)};return h.jsxs(y6,{className:`optimized-image ${f}`,$aspectRatio:T,$hasImage:m&&!y,...g,children:[console.log("Rendering OptimizedImage:",{src:t,loaded:m,error:y,aspectRatioValue:T}),h.jsx(v6,{src:y?r:t,alt:i,loading:u?"eager":"lazy",onLoad:O,onError:L,style:{...l,opacity:m||y?1:0,transition:"opacity 0.3s ease",...j&&{}},$aspectRatio:T})]})},y6=x.div`
  position: relative;
  width: 100%;
  height: ${t=>t.$aspectRatio?"0":"auto"};
  padding-bottom: ${t=>t.$aspectRatio?`${t.$aspectRatio}%`:"0"};
  overflow: hidden;
  background-color: var(--card-bg);
  display: block; // Ensure container takes up space

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--border);
    opacity: ${t=>t.$hasImage?0:.1};
    z-index: 0;
  }
`,v6=x.img`
  display: block;
  width: 100%;
  max-width: 100%;
  z-index: 1; // To be above the ::before pseudo-element of ImageContainer

  ${t=>t.$aspectRatio?`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%; // Fill the container which has padding-bottom for aspect ratio
    object-fit: cover; // Cover the area defined by ImageContainer
  `:`
    position: relative; // Take space in the document flow
    height: auto; // Natural height based on width and image's aspect ratio
    // object-fit is not strictly necessary here as width:100% and height:auto preserves aspect ratio.
  `}
`;x.h1`
  font-family: var(--font-heading);
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
  }
`;x.p`
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-secondary);
  max-width: 800px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: clamp(1.125rem, 4vw, 1.5rem);
  }
`;const yw=x.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4vw, 3.25rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
    position: relative;
  display: inline-block;
  
  ${t=>t.$withLine&&`
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      transition: width 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    }
    
    &:hover::after {
      width: 80px;
    }
  `}
  
  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }
`,vw=x.p`
  font-family: var(--font-serif);
  font-size: clamp(1.125rem, 2vw, 1.35rem);
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-secondary);
  max-width: 800px;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.25rem);
    margin-bottom: 2rem;
  }
`;x.p`
  font-family: var(--font-body);
  font-size: ${t=>t.$large?"1.125rem":"1rem"};
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: ${t=>t.$light?"var(--text-light)":"var(--text-secondary)"};
  max-width: ${t=>t.$wide?"100%":"800px"};
`;x.span`
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--accent);
`;x.blockquote`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
  line-height: 1.6;
  color: var(--text);
  border-left: 3px solid var(--primary);
  padding-left: 1.5rem;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 2rem;
`;const xv=({title:t,subtitle:i,centered:r=!1})=>h.jsxs(x6,{$centered:r,children:[h.jsx(yw,{$withLine:!r,children:t}),i&&h.jsx(vw,{children:i})]}),x6=x.div`
  margin-bottom: 3rem;
  text-align: ${t=>t.$centered?"center":"left"};
  
  ${t=>t.$centered&&`
    ${yw} {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    ${vw} {
      margin-left: auto;
      margin-right: auto;
    }
  `}
`,kh=x(ze)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  background-size: 200% 100%;
  background-position: 0% 0%;
  color: white !important;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.35);
  position: relative;
  overflow: hidden;

  svg {
    transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }

  &:hover {
    background-position: 100% 0%;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(var(--accent-rgb), 0.4);

    svg {
      transform: translateX(5px);
    }
  }
`,b6=x(ze)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: var(--accent) !important;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.85rem 1.8rem;
  border-radius: 3px;
  border: 2px solid var(--accent);
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  box-shadow: 0 4px 15px rgba(var(--accent-rgb), 0.1);
  position: relative;
  overflow: hidden;

  svg {
    transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }

  &:hover {
    background-color: var(--accent);
    color: white !important;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(var(--accent-rgb), 0.25);

    svg {
      transform: translateX(5px);
    }
  }
`,w6=x(ze)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--accent) !important;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent);
    transition: width 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }

  svg {
    transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }

  &:hover {
    color: var(--accent-dark) !important;

    &::after {
      width: 100%;
    }

    svg {
      transform: translateX(5px);
    }
  }
`,j6=()=>h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),z6=({to:t,children:i,variant:r="primary",onClick:s,withArrow:l=!1,...u})=>{const f={primary:kh,secondary:b6,text:w6}[r]||kh,g=h.jsxs(h.Fragment,{children:[i,l&&h.jsx(j6,{})]});return t?h.jsx(f,{to:t,...u,children:g}):h.jsx(f,{as:"button",onClick:s,...u,children:g})},xw=x(J.div)`
  background-color: var(--card-bg);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0), 
              box-shadow 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(var(--primary-rgb), 0.15);
  }
`,S6=x.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }
  
  ${xw}:hover & img {
    transform: scale(1.05);
  }
`;x.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(var(--accent-rgb), 0.9);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
`;const k6=x.div`
  padding: 1.5rem 2rem 2rem;
`,T6=x.h3`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text);
  transition: color 0.3s ease;
  
  ${xw}:hover & {
    color: var(--accent);
  }
`,A6=x.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-light);
  font-size: 0.85rem;
`;x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;const km=x.section`
  padding: ${t=>t.$small?"4rem 0":"6rem 0"};
  background-color: ${t=>t.$light?"var(--neutral-200)":"var(--background)"};
  
  @media (max-width: 768px) {
    padding: ${t=>t.$small?"3rem 0":"4rem 0"};
  }
`,Th=x.div`
  width: var(--content-width);
  max-width: var(--max-content-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: ${t=>t.$alignCenter?"center":"flex-start"};
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
`;x.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;const E6=x.div`
  text-align: left;
  max-width: ${t=>t.$narrow?"800px":"1200px"};
  margin-left: auto;
  margin-right: auto;
`,vr={s2:{title:"Empatia",subtitle:"I. Odczuj",description:"Pierwsza faza procesu projektowego, w której zespół zdobywa głębokie zrozumienie problemu poprzez empatyczne spojrzenie na potrzeby użytkowników.",keyPoints:["Obserwacja i rozmowy z użytkownikami","Identyfikacja prawdziwych potrzeb","Definiowanie głównego problemu","Tworzenie map empatii"],quote:"Projektowanie bez empatii jest jedynie estetycznym ćwiczeniem."},s3:{title:"Rozumowanie",subtitle:"II. Wymyśl",description:"Faza, w której zespół generuje kreatywne pomysły i rozwiązania, przekształcając je w namacalne prototypy do testowania.",keyPoints:["Burza mózgów i ideacja","Szybkie prototypowanie","Testowanie z użytkownikami","Iteracyjne udoskonalanie"],quote:"Prototypowanie to konwersacja z twoimi pomysłami."},s1:{title:"Materializacja",subtitle:"III. Zrób",description:"Ostatni etap procesu projektowego, w którym zespół integruje feedback, analizuje wyniki testów i podejmuje decyzje implementacyjne.",keyPoints:["Analiza danych z testów","Optymalizacja rozwiązań","Implementacja finalnego produktu","Ewaluacja i dalszy rozwój"],quote:"Dobry projekt to rezultat tysiąca małych decyzji podjętych z rozwagą."}},C6=({activePhase:t})=>{const i=vr[t]||vr.s2,r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return h.jsx(J.div,{variants:r,initial:"hidden",animate:"visible",className:"w-full",children:h.jsxs("div",{children:[h.jsx(J.div,{variants:s,className:"mb-2",children:h.jsx("h3",{className:"text-xs uppercase tracking-wider text-gray-500 font-medium letter-spacing-2",children:i.subtitle})}),h.jsx(J.h2,{variants:s,className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight leading-tight",children:i.title}),h.jsx(J.p,{variants:s,className:"text-base md:text-lg text-gray-700 mb-8 leading-relaxed",children:i.description}),h.jsxs(J.div,{variants:s,className:"mb-8",children:[h.jsx("h4",{className:"text-sm font-semibold mb-4 text-gray-800 uppercase tracking-wide",children:"Kluczowe elementy"}),h.jsx("ul",{className:"space-y-3",children:i.keyPoints.map((l,u)=>h.jsxs(J.li,{variants:s,className:"flex items-start",children:[h.jsx("span",{className:"text-indigo-500 mr-2 mt-0.5 text-lg",children:"•"}),h.jsx("span",{className:"text-sm md:text-base text-gray-700",children:l})]},u))})]}),h.jsxs(J.blockquote,{variants:s,className:"border-l-2 border-indigo-400 pl-4 py-1 italic text-sm md:text-base text-gray-600",children:['"',i.quote,'"']})]})},t)},Tm=S.createContext({currentPhase:"s3",setCurrentPhase:()=>{},phaseData:null}),D6=({children:t})=>{const[i,r]=S.useState("s3"),[s,l]=S.useState(vr.s3);return S.useEffect(()=>{l(vr[i])},[i]),h.jsx(Tm.Provider,{value:{currentPhase:i,setCurrentPhase:r,phaseData:s},children:t})},er=(t,i,r)=>{const s=(r-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:t+i*Math.sin(s)}},Ze={dynamicEntry:{name:"Dynamiczne Wejście",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{duration:.8*i,ease:"easeInOut",delay:(.1+t*.1)*i}}),generic:(t,i=1)=>({opacity:1,scale:1,transition:{duration:.4*i,ease:[.6,-.05,.01,.99],delay:(.4+t*.08)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.5*i,ease:"easeOut",delay:(.9+t*.1)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.7*t,ease:"easeInOut",delay:.5*t},opacity:{duration:.01*t,delay:.5*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.5*i,ease:"easeInOut",delay:(.8+t*.2)*i},opacity:{duration:.01*i,delay:(.8+t*.2)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,rotateY:0,transition:{duration:.5*t,ease:"easeOut",delay:.3*t}})},loop:{}},springPop:{name:"Sprężyste Pojawienie",intro:{path:(t,i=1)=>({scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:20,delay:(.1+t*.05)*i}}),generic:(t,i=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:200,damping:15,delay:(.3+t*.07)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{type:"spring",stiffness:150,damping:10,delay:(.6+t*.05)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:200,damping:15,duration:.6*t,delay:.4*t},opacity:{duration:.01*t,delay:.4*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:150,damping:10,duration:.4*i,delay:(.7+t*.15)*i},opacity:{duration:.01*i,delay:(.7+t*.15)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:200,damping:15,delay:.2*t}})},loop:{}},smoothUnfold:{name:"Płynne Odsłanianie",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{duration:1.2*i,ease:"circOut",delay:(.2+t*.15)*i}}),generic:(t,i=1)=>({opacity:1,filter:"blur(0px)",y:0,transition:{duration:.8*i,ease:"easeOut",delay:(.5+t*.1)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.7*i,ease:"easeOut",delay:(1.1+t*.1)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:1*t,ease:"circOut",delay:.6*t},opacity:{duration:.01*t,delay:.6*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.7*i,ease:"circOut",delay:(1.1+t*.2)*i},opacity:{duration:.01*i,delay:(1.1+t*.2)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,filter:"blur(0px)",transition:{duration:1*t,ease:"circOut",delay:.4*t}})},loop:{}},blueprintReveal:{name:"Odsłanianie Rysunku Tech.",intro:{path:(t,i=1)=>({pathLength:1,opacity:[.5,1],transition:{duration:.7*i,ease:"circIn",delay:(.1+t*.2)*i}}),markerGroup:(t,i=1)=>({opacity:1,scaleY:1,transition:{duration:.5*i,ease:"easeOut",delay:(.6+t*.1)*i}}),dot:(t,i=1)=>({opacity:1,scale:1,transition:{duration:.4*i,ease:"backOut",delay:(.5+t*.1)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.6*i,ease:"easeOut",delay:(1+t*.08)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.8*t,ease:"easeInOut",delay:.7*t},opacity:{duration:.01*t,delay:.7*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.6*i,ease:"easeInOut",delay:(1.2+t*.2)*i},opacity:{duration:.01*i,delay:(1.2+t*.2)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,transition:{duration:.8*t,ease:"easeInOut",delay:.5*t}})},loop:{}},circuitTrace:{name:"Śledzenie Obwodu",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{duration:.3*i,ease:"linear",delay:(.1+t*.05)*i}}),markerGroup:(t,i=1)=>({opacity:1,scaleX:1,transition:{duration:.3*i,ease:"linear",delay:(.4+t*.05)*i}}),dot:(t,i=1)=>({opacity:[0,1,.7,1],scale:[.5,1.2,1],transition:{duration:.4*i,times:[0,.2,.6,1],delay:(.3+t*.05)*i}}),text:(t,i=1)=>({opacity:1,transition:{duration:.2*i,ease:"linear",delay:(.7+t*.03)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.4*t,ease:"linear",delay:.5*t},opacity:{duration:.01*t,delay:.5*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.3*i,ease:"linear",delay:(.7+t*.1)*i},opacity:{duration:.01*i,delay:(.7+t*.1)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,transition:{duration:.4*t,ease:"easeOut",delay:.3*t}})},loop:{}},cinematicBuildUp:{name:"Kinematograficzne Budowanie",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{duration:1.5*i,ease:"easeInOut",delay:(.3+t*.3)*i}}),generic:(t,i=1)=>({opacity:1,scale:1,y:0,filter:"blur(0px)",transition:{duration:1*i,ease:"circOut",delay:(.9+t*.15)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.8*i,ease:"circOut",delay:(1.6+t*.15)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:1.2*t,ease:"circOut",delay:1*t},opacity:{duration:.01*t,delay:1*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.9*i,ease:"circOut",delay:(1.7+t*.25)*i},opacity:{duration:.01*i,delay:(1.7+t*.25)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,filter:"blur(0px)",transition:{duration:1.2*t,ease:"circOut",delay:.8*t}})},loop:{}},organicGrowth:{name:"Organiczny Wzrost",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,scale:1,transition:{duration:1.2*i,ease:"easeOut",delay:(.1+t*.2)*i}}),dot:(t,i=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:100,damping:10,duration:.8*i,delay:(.6+t*.1)*i}}),markerGroup:(t,i=1)=>({opacity:1,scaleY:1,transition:{duration:.7*i,ease:"easeOut",delay:(.7+t*.1)*i}}),text:(t,i=1)=>({opacity:1,scale:1,y:0,transition:{duration:.7*i,ease:"easeOut",delay:(1.3+t*.1)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:120,damping:12,duration:1*t,delay:.8*t},opacity:{duration:.01*t,delay:.8*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:100,damping:10,duration:.7*i,delay:(1.4+t*.2)*i},opacity:{duration:.01*i,delay:(1.4+t*.2)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:120,damping:12,duration:1*t,delay:.6*t}})},loop:{}},technicalDrawingLR:{name:"Techniczne Rysowanie L-P",_sequenceConfig:{sectionOrder:["s1","s3","s2"],durationBase:.6,phaseStagger:.15,sectionStagger:.8,getDelay:function(t,i,r=0,s=.05){const l=this.sectionOrder.indexOf(t);return l===-1?0:l*this.sectionStagger+i*this.phaseStagger+r*s}},intro:{path:function(t,i=1){const r=Ze.technicalDrawingLR._sequenceConfig.getDelay(t,0);return{pathLength:1,opacity:1,transition:{duration:Ze.technicalDrawingLR._sequenceConfig.durationBase*i,ease:"linear",delay:(.1+r)*i}}},dot:function(t,i=1){const r=Ze.technicalDrawingLR._sequenceConfig.getDelay(t,1);return{opacity:1,scale:1,transition:{duration:Ze.technicalDrawingLR._sequenceConfig.durationBase*.6*i,ease:"easeOut",delay:(.1+r)*i}}},markerGroup:function(t,i=1){const r=Ze.technicalDrawingLR._sequenceConfig.getDelay(t,2);return{opacity:1,scaleX:1,transition:{duration:Ze.technicalDrawingLR._sequenceConfig.durationBase*.8*i,ease:"easeOut",delay:(.1+r)*i}}},text:function(t,i=1){const{sectionId:r,lineIndex:s}=t,l=Ze.technicalDrawingLR._sequenceConfig.getDelay(r,3,s,.08);return{opacity:1,x:0,transition:{duration:Ze.technicalDrawingLR._sequenceConfig.durationBase*.7*i,ease:"easeOut",delay:(.1+l)*i}}},drawTriangle:{polygon:function(t=1){const i=Ze.technicalDrawingLR._sequenceConfig.sectionOrder.length*Ze.technicalDrawingLR._sequenceConfig.sectionStagger+.2;return{pathLength:1,opacity:1,transition:{pathLength:{duration:Ze.technicalDrawingLR._sequenceConfig.durationBase*t,ease:"easeOut",delay:i*t},opacity:{duration:.01*t,delay:i*t}}}},line:function(t,i=1){const r=Ze.technicalDrawingLR._sequenceConfig.sectionOrder.length*Ze.technicalDrawingLR._sequenceConfig.sectionStagger,s=Ze.technicalDrawingLR.intro.drawTriangle.polygon(1).transition.pathLength.duration,l=Ze.technicalDrawingLR.intro.drawTriangle.polygon(1).transition.pathLength.delay,u=r+l+s*i+t*.15*i;return{pathLength:1,opacity:1,transition:{pathLength:{duration:Ze.technicalDrawingLR._sequenceConfig.durationBase*.7*i,ease:"easeOut",delay:u},opacity:{duration:.01*i,delay:u}}}}},triangleGroup:function(t=1){const r=Ze.technicalDrawingLR.intro.drawTriangle.line(2,1).transition.pathLength.delay,s=Ze.technicalDrawingLR.intro.drawTriangle.line(2,1).transition.pathLength.duration,l=(r+s)*t+.2*t;return{opacity:1,scale:1,rotateY:0,transition:{duration:Ze.technicalDrawingLR._sequenceConfig.durationBase*t,ease:"easeOut",delay:l}}}},loop:{}},energyBurst:{name:"Rozbłysk Energii",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:100,damping:15,duration:.8*i,delay:(.2+t*.1)*i},opacity:{duration:.2*i,delay:(.2+t*.1)*i}}}),generic:(t,i=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:250,damping:10,delay:(.1+t*.05)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.5*i,ease:"easeOut",delay:(.5+t*.08)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.5*t,ease:[.6,-.28,.735,.045],delay:.4*t},opacity:{duration:.01,delay:.4*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.4*i,ease:[.6,-.28,.735,.045],delay:(.7+t*.1)*i},opacity:{duration:.01,delay:(.7+t*.1)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:[0,1.2,1],transition:{duration:.6*t,ease:"backOut",delay:.1*t}})},loop:{}},quantumPulse:{name:"Pulsowanie Kwantowe",intro:{path:(t,i=1)=>({opacity:[0,1,.7,1],filter:["blur(5px)","blur(0px)","blur(2px)","blur(0px)"],transition:{duration:1.2*i,ease:"easeInOut",delay:(.1+t*.2)*i,times:[0,.4,.7,1]}}),generic:(t,i=1)=>({opacity:1,scale:[.8,1.05,1],filter:"blur(0px)",transition:{duration:.8*i,ease:"circOut",delay:(.4+t*.1)*i}}),text:(t,i=1)=>({opacity:1,filter:"blur(0px)",transition:{duration:.7*i,ease:"easeOut",delay:(.8+t*.15)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.9*t,ease:"sine.inOut",delay:.8*t},opacity:{duration:.01,delay:.8*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.6*i,ease:"sine.inOut",delay:(1.3+t*.15)*i},opacity:{duration:.01,delay:(1.3+t*.15)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,filter:"blur(0px)",transition:{duration:1*t,ease:"circOut",delay:.5*t}})},loop:{}}},bv={dynamicEntry:{path:{pathLength:0,opacity:0},generic:{opacity:0,scale:.3},text:{opacity:0,y:5},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.3,rotateY:-90}},springPop:{path:{scale:0,opacity:0},generic:{opacity:0,scale:.3},text:{opacity:0,y:20},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.3}},smoothUnfold:{path:{pathLength:0,opacity:0},generic:{opacity:0,filter:"blur(10px)",y:10},text:{opacity:0,y:15},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,filter:"blur(10px)",scale:.8}},blueprintReveal:{path:{pathLength:0,opacity:0},markerGroup:{opacity:0,scaleY:0,transformOrigin:"center bottom"},dot:{opacity:0,scale:0},text:{opacity:0,y:10},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.5}},circuitTrace:{path:{pathLength:0,opacity:0},markerGroup:{opacity:0,scaleX:0,transformOrigin:"left center"},dot:{opacity:0,scale:.5},text:{opacity:0},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.7}},cinematicBuildUp:{path:{pathLength:0,opacity:0},generic:{opacity:0,scale:.8,y:5,filter:"blur(5px)"},text:{opacity:0,y:10},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.7,filter:"blur(5px)"}},organicGrowth:{path:{pathLength:0,opacity:0,scale:.8},dot:{opacity:0,scale:0},markerGroup:{opacity:0,scaleY:0,transformOrigin:"center bottom"},text:{opacity:0,scale:.5,y:10},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.3}},technicalDrawingLR:{path:{pathLength:0,opacity:0},dot:{opacity:0,scale:0},markerGroup:{opacity:0,scaleX:0,transformOrigin:"left center"},text:{opacity:0,x:-15},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.5,rotateY:90}},energyBurst:{path:{pathLength:0,opacity:0},generic:{opacity:0,scale:0},text:{opacity:0,y:10},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:0}},quantumPulse:{path:{opacity:0,filter:"blur(5px)"},generic:{opacity:0,scale:.8,filter:"blur(3px)"},text:{opacity:0,filter:"blur(2px)"},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.7,filter:"blur(5px)"}}},Do="var(--diagram-default-color)",wv="var(--diagram-lavender-color)",jv="var(--diagram-text-color);",Vf=t=>{if(typeof window<"u"){const i=t.replace(/var\(([^)]+)\);?/,"$1");return getComputedStyle(document.documentElement).getPropertyValue(i).trim()||t}return t},zv=nt.memo(({animationKey:t,selectedPresetKey:i,isLoopingActive:r,speedMultiplier:s,animationPresets:l,initialStates:u,onHighlightChange:f,activePhase:g})=>{const m=l[i]||l.dynamicEntry,p=u[i]||u.dynamicEntry,[y,b]=S.useState(g);S.useEffect(()=>{b(g)},[g]),S.useEffect(()=>{const q=["s2","s3","s1"];let oe=q.indexOf(g)!==-1?q.indexOf(g):0,Ee,Ge;const Ne=i==="technicalDrawingLR"?(l.technicalDrawingLR._sequenceConfig.sectionOrder.length*l.technicalDrawingLR._sequenceConfig.sectionStagger+l.technicalDrawingLR.intro.triangleGroup(1).transition.delay)*s+l.technicalDrawingLR.intro.triangleGroup(1).transition.duration*s:3e3*s;return r&&(Ge=setTimeout(()=>{if(y===g){const St=q[oe];b(St),f&&f(St)}Ee=setInterval(()=>{oe=(oe+1)%q.length;const St=q[oe];b(St),f&&f(St)},7e3*s)},Ne)),()=>{clearTimeout(Ge),clearInterval(Ee)}},[t,i,s,l,r,f,g,y]);const j=500,z=j/2,T=100,O=15.3,L=10,C=2,V=15,D={layer1:T+30,layer2:T+56,layer3:T+82},X={s1_gap:300,s2_gap:60,s3_gap:180},P=22,F=[{id:"arc_rozumowanie",sectionId:"s1",startAngle:X.s3_gap+P/2,endAngle:X.s1_gap-P/2},{id:"arc_empatia",sectionId:"s2",startAngle:X.s1_gap+P/2,endAngle:X.s2_gap-P/2},{id:"arc_materializacja",sectionId:"s3",startAngle:X.s2_gap+P/2,endAngle:X.s3_gap-P/2}].map(q=>{let oe=q.startAngle%360,Ee=q.endAngle%360;oe<0&&(oe+=360),Ee<0&&(Ee+=360),Ee<=oe&&(Ee+=360);const Ge=er(z,T,oe),Ne=er(z,T,Ee),St=Ee-oe,Ri=St>180?1:0;return{...q,path:`M ${Ge.x.toFixed(2)} ${Ge.y.toFixed(2)} A ${T.toFixed(2)} ${T.toFixed(2)} 0 ${Ri} 1 ${Ne.x.toFixed(2)} ${Ne.y.toFixed(2)}`,textPathMidAngle:q.startAngle+St/2}}),K=96,ee=2/3*K,le=1/3*K,be=K/Math.sqrt(3),Be=z,_e=z+ee,zt=z+be,bt=z-le,Ye=z-be,U=z-le,I=`${Be.toFixed(2)},${_e.toFixed(2)} ${zt.toFixed(2)},${bt.toFixed(2)} ${Ye.toFixed(2)},${U.toFixed(2)}`,te=[{x1:Be,y1:_e,x2:z,y2:z,key:"triLine1"},{x1:zt,y1:bt,x2:z,y2:z,key:"triLine2"},{x1:Ye,y1:U,x2:z,y2:z,key:"triLine3"}],fe=[{sectionId_ref:"s1",angle:X.s1_gap,id:"gap1",numeral:"I"},{sectionId_ref:"s2",angle:X.s2_gap,id:"gap2",numeral:"II"},{sectionId_ref:"s3",angle:X.s3_gap,id:"gap3",numeral:"III"}].map(q=>{const oe=er(z,T,q.angle),Ee=er(z,T+L+V,q.angle);return{...q,dotX:oe.x,dotY:oe.y,numeralX:Ee.x,numeralY:Ee.y,numeralAnchor:"middle"}}),G=[{id:"s1",visualArcRef:F.find(q=>q.id==="arc_rozumowanie"),textsOnPath:[{key:"s1_rozum_title",content:"materializacja",radius:D.layer1,dy:-.5,letterSpacing:.8,isTitle:!0},{key:"s1_rozum_sub",content:"prototypowanie i testowanie",radius:D.layer2,dy:-1.5,letterSpacing:.3,isTitle:!1},{key:"s1_rozum_tag",content:"III. zrób",radius:D.layer3,dy:-2,letterSpacing:1,isTitle:!0}]},{id:"s2",visualArcRef:F.find(q=>q.id==="arc_empatia"),textsOnPath:[{key:"s2_empatia_title",content:"empatia",radius:D.layer1,dy:-.5,letterSpacing:.8,isTitle:!0},{key:"s2_empatia_sub",content:"definiowanie problemu",radius:D.layer2,dy:-1,letterSpacing:.6,isTitle:!1},{key:"s2_empatia_tag",content:"I. odczuj",radius:D.layer3,dy:-1.5,letterSpacing:1,isTitle:!0}]},{id:"s3",visualArcRef:F.find(q=>q.id==="arc_materializacja"),textsOnPath:[{key:"s3_mater_title",content:"rozumowanie",radius:D.layer1,dy:-.5,letterSpacing:.8,isTitle:!0},{key:"s3_mater_sub",content:"koncypowanie rozwiązań",radius:D.layer2,dy:-1.5,letterSpacing:.6,isTitle:!1},{key:"s3_mater_tag",content:"II. wymyśl",radius:D.layer3,dy:-2,letterSpacing:1,isTitle:!0}]}].flatMap(q=>{const oe=q.visualArcRef;if(!oe)return console.warn(`Visual arc not found for section ${q.id}`),[];const Ee=oe.id==="arc_rozumowanie",Ge=(dn,ua,Rt,Hc)=>{let In=ua%360,Kn=Rt%360;In<0&&(In+=360),Kn<0&&(Kn+=360);let Mi=1;Hc&&([In,Kn]=[Kn,In],Mi=0);let da=ua%360;da<0&&(da+=360);let Zn=Rt%360;Zn<0&&(Zn+=360),Zn<=da&&(Zn+=360);const $c=Zn-da>180?1:0,cs=er(z,dn,In),Qn=er(z,dn,Kn);return`M ${cs.x.toFixed(2)} ${cs.y.toFixed(2)} A ${dn.toFixed(2)} ${dn.toFixed(2)} 0 ${$c} ${Mi} ${Qn.x.toFixed(2)} ${Qn.y.toFixed(2)}`},Ne=5,St=oe.startAngle-Ne,Ri=oe.endAngle+Ne;return q.textsOnPath.map((dn,ua)=>({...dn,sectionId:q.id,lineIndex:ua,pathId:`tp-${dn.key}`,pathDef:Ge(dn.radius,St,Ri,Ee)}))}),Z=m.intro.drawTriangle.polygon(s),Q=te.map((q,oe)=>m.intro.drawTriangle.line(oe,s)),ie=m.intro.triangleGroup?m.intro.triangleGroup(s):{opacity:1,scale:1},pe=(q,oe)=>typeof m.intro.path=="function"?m.intro.path(i==="technicalDrawingLR"?q.sectionId:oe,s):m.intro.path||{},re=(q,oe)=>typeof m.intro.dot=="function"?m.intro.dot(i==="technicalDrawingLR"?q.sectionId_ref:oe,s):m.intro.dot||m.intro.generic(oe,s)||{},We=(q,oe)=>typeof m.intro.text=="function"?m.intro.text(i==="technicalDrawingLR"?{sectionId:q.sectionId,lineIndex:q.lineIndex}:oe,s):m.intro.text||{};return h.jsxs(J.div,{className:"flex items-center justify-center w-full h-full",style:{minHeight:"400px",maxWidth:"100%"},exit:{opacity:0},children:["      ",h.jsxs(J.svg,{viewBox:`0 0 ${j} ${j}`,className:"w-full h-auto max-h-full","aria-label":"Diagram procesu projektowego",style:{perspective:"1000px",transform:"rotate(-60deg)",maxWidth:"100%",display:"block",minWidth:"300px",minHeight:"300px",border:"2px solid red"},children:[h.jsx("defs",{children:G.map(q=>h.jsx("path",{id:q.pathId,d:q.pathDef,fill:"none",stroke:"transparent"},q.pathId))}),F.map((q,oe)=>{const Ee=pe(q,oe),Ge=r&&y===q.sectionId,Ne=1.5*s;return h.jsxs(nt.Fragment,{children:["              ",h.jsx(J.path,{d:q.path,fill:"none",stroke:Do,strokeWidth:O,className:"diagram-element",initial:p.path||{},animate:Ee}),"              ",h.jsx(J.path,{d:q.path,fill:"none",stroke:wv,strokeWidth:O,className:"diagram-element diagram-highlight",initial:{opacity:0},animate:{opacity:Ge?1:0},transition:{opacity:{duration:Ne,ease:"easeInOut"}}})]},`arc-group-${q.id}`)}),h.jsxs(J.g,{initial:p.triangleGroup||{opacity:0,scale:.3},animate:ie,style:{transformOrigin:`${z}px ${z}px`},children:["            ",h.jsx(J.polygon,{points:I,fill:"none",stroke:Do,strokeWidth:C,className:"diagram-element",initial:p.trianglePolygon||{pathLength:0,opacity:0},animate:Z}),te.map((q,oe)=>h.jsx(J.line,{x1:q.x1,y1:q.y1,x2:q.x2,y2:q.y2,stroke:Do,strokeWidth:C,className:"diagram-element",initial:p.triangleLines||{pathLength:0,opacity:0},animate:Q[oe]},q.key))]}),fe.map((q,oe)=>{const Ee=re(q,oe);return h.jsxs(J.g,{initial:p.dot||p.generic||{},animate:Ee,children:["              ",h.jsx("circle",{cx:q.dotX,cy:q.dotY,r:L,fill:Do,className:"diagram-element"}),h.jsx("text",{x:q.numeralX,y:q.numeralY,textAnchor:q.numeralAnchor,dominantBaseline:"middle",className:"text-3xl font-bold diagram-element",fill:Do,transform:q.numeral==="I"||q.numeral==="II"||q.numeral==="III"?`rotate(${q.angle} ${q.numeralX} ${q.numeralY})`:void 0,children:q.numeral})]},q.id)}),G.map((q,oe)=>{const Ee=We(q,oe),Ge=r&&y===q.sectionId,Ne=1.5*s;return h.jsxs(J.g,{initial:p.text||{},animate:Ee,children:["              ",h.jsx(J.text,{className:`${q.isTitle?"text-sm sm:text-base font-medium":"text-xs sm:text-sm"} diagram-element`,initial:{fill:Vf(jv)},animate:{fill:Vf(Ge?wv:jv)},transition:{fill:{duration:Ne,ease:"easeInOut"}},dy:q.dy,dominantBaseline:"middle",letterSpacing:q.letterSpacing,children:h.jsx("textPath",{href:`#${q.pathId}`,startOffset:"50%",textAnchor:"middle",children:q.content})})]},`tg-${q.pathId}`)})]})]},t)});function R6({preset:t="dynamicEntry",speed:i=1,activePhase:r="s2",onPhaseClick:s,controlsOnLeft:l=!1}){const[u,f]=S.useState(0),g=t,m=i,p=!0;S.useEffect(()=>{f(z=>z+1)},[t,i]);const y=S.useCallback(z=>{s&&typeof s=="function"&&s(z)},[s]),{phaseData:b}=S.useContext(Tm),j=b!==null;return h.jsx("div",{className:"process-diagram-section font-sans relative overflow-hidden w-full h-full flex justify-center items-center",style:{background:"var(--diagram-background)"},children:l?h.jsx("div",{className:"w-full h-full flex items-center justify-center",children:h.jsx("div",{className:"flex items-center justify-center w-full h-full",style:{minHeight:"400px",maxWidth:"100%"},children:h.jsx(Ei,{mode:"wait",children:h.jsx(zv,{selectedPresetKey:g,isLoopingActive:p,speedMultiplier:m,animationPresets:Ze,initialStates:bv,onHighlightChange:y,activePhase:r},u)})})}):h.jsxs("div",{className:"w-full h-full flex",style:{minHeight:"600px"},children:[h.jsx("div",{className:"w-2/5 h-full",style:{minWidth:"300px"},children:j&&h.jsx("div",{className:"h-full flex items-center justify-center p-4 md:p-6 lg:p-8",children:h.jsx(C6,{activePhase:r})})}),h.jsx("div",{className:`${j?"w-3/5":"w-full"} h-full relative flex flex-col items-center justify-center p-4`,children:h.jsx("div",{className:"flex items-center justify-center w-full h-full",children:h.jsx(Ei,{mode:"wait",children:h.jsx(zv,{selectedPresetKey:g,isLoopingActive:p,speedMultiplier:m,animationPresets:Ze,initialStates:bv,onHighlightChange:y,activePhase:r},u)})})})]})})}const M6=fw`
  :root {
    --accent-rgb: 97, 106, 229;
  }
  
  select:focus-visible {
    outline: none;
  }
  
  /* Safari focus styling fix */
  @media not all and (min-resolution:.001dpcm) { 
    @supports (-webkit-appearance:none) {
      select:focus {
        box-shadow: 0 0 0 1px var(--accent);
      }
    }
  }
  
`,O6=()=>{const{currentPhase:t,setCurrentPhase:i}=S.useContext(Tm),[r,s]=S.useState("dynamicEntry"),[l,u]=S.useState(1);S.useEffect(()=>{t||i("s2")},[t,i]);const f=y=>{s(y.target.value)},g=y=>{u(parseFloat(y.target.value))},m=y=>{i(y)},p=vr[t]||vr.s2;return h.jsxs(L6,{className:"process-diagram-section",children:[h.jsx(M6,{}),h.jsxs(B6,{children:[h.jsx(_6,{children:h.jsxs(Ei,{mode:"wait",children:["            ",h.jsxs(J.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.6,ease:[.19,1,.22,1]},className:"process-description-content",children:[h.jsxs(V6,{children:[h.jsx(P6,{children:p.subtitle}),h.jsx(U6,{children:p.title}),h.jsx(H6,{children:p.description}),h.jsxs($6,{children:[h.jsx(Y6,{children:"Kluczowe elementy"}),h.jsx(G6,{children:p.keyPoints.map((y,b)=>h.jsxs(q6,{children:[h.jsx(X6,{children:"•"}),h.jsx("span",{children:y})]},b))})]}),p.quote&&h.jsx(F6,{children:h.jsxs(I6,{children:['"',p.quote,'"']})})]}),"            "]},`phase-${t}`)]})}),h.jsx(N6,{children:h.jsx("div",{className:"w-full h-full flex items-center justify-center relative diagram-wrapper",children:h.jsx("div",{className:"diagram-scale-container w-full h-full",children:h.jsx(R6,{preset:r,speed:l,activePhase:t,onPhaseClick:m,controlsOnLeft:!0})})})})]}),h.jsx(K6,{children:h.jsxs(Z6,{children:[h.jsxs(Sv,{children:[h.jsx(kv,{children:"Styl:"}),h.jsx(Av,{children:h.jsxs(Tv,{value:r,onChange:f,children:[h.jsx("option",{value:"dynamicEntry",children:"Dynamiczne Wejście"}),h.jsx("option",{value:"springPop",children:"Sprężyste Pojawienie"}),h.jsx("option",{value:"smoothUnfold",children:"Płynne Odsłanianie"}),h.jsx("option",{value:"blueprintReveal",children:"Odsłanianie Rysunku Tech."}),h.jsx("option",{value:"circuitTrace",children:"Śledzenie Obwodu"}),h.jsx("option",{value:"cinematicBuildUp",children:"Kinematograficzne Budowanie"}),h.jsx("option",{value:"organicGrowth",children:"Organiczny Wzrost"}),h.jsx("option",{value:"energyBurst",children:"Rozbłysk Energii"}),h.jsx("option",{value:"quantumPulse",children:"Pulsowanie Kwantowe"})]})})]}),h.jsxs(Sv,{children:[h.jsx(kv,{children:"Szybkość:"}),h.jsx(Av,{children:h.jsxs(Tv,{value:l.toString(),onChange:g,children:[h.jsx("option",{value:"0.5",children:"Wolno (0.5x)"}),h.jsx("option",{value:"0.75",children:"Powoli (0.75x)"}),h.jsx("option",{value:"1",children:"Normalnie (1x)"}),h.jsx("option",{value:"1.5",children:"Szybko (1.5x)"}),h.jsx("option",{value:"2",children:"Bardzo szybko (2x)"})]})})]})]})})]})},L6=x.section`
  width: 100%;
  max-width: 1400px;
  margin: -300px auto 0 auto;
  padding: 0 2.2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  background: var(--background);
  color: var(--text);
  transition: background-color 0.5s ease, color 0.5s ease;
  
  @media (min-width: 1200px) {
    margin: 0 auto;
    padding: 0 2.7rem 2.2rem;
    gap: 0.8rem;
  }
  
  @media (min-width: 1440px) {
    margin: 0 auto;
    padding: 0 3.2rem 2.4rem;
    gap: 0.9rem;
  }
  
  @media (min-width: 1920px) {
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 3.7rem 2.6rem;
    gap: 1rem;
  }
  
  @media (min-width: 2560px) {
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 4.2rem 2.8rem;
    gap: 1.1rem;
  }
  
  @media (min-width: 3840px) {
    max-width: 1800px;
    padding: 1rem 5.2rem 4.7rem;
    gap: 1.5rem;
  }  @media (max-width: 992px) {
    margin: 0 auto;
    padding: 0 1.7rem 2rem;
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 1.7rem 1.5rem;
    gap: 0.8rem;
  }
`,B6=x.div`
  display: flex;
  width: 100%;
  gap: 5.5rem;
  align-items: center;
  background: var(--background);
  color: var(--text);
  transition: background-color 0.5s ease, color 0.5s ease;
  margin-top: -100px;
  
  @media (min-width: 1200px) {
    gap: 6rem;
  }
  
  @media (min-width: 1440px) {
    gap: 6.5rem;
  }
  
  @media (min-width: 1920px) {
    gap: 7rem;
  }
  
  @media (min-width: 2560px) {
    gap: 8rem;
  }
  
  @media (max-width: 1199px) {
    gap: 5rem;
  }  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`,_6=x.div`
  flex: 0 0 38%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: -5%;
  color: var(--text);
  transition: color 0.5s ease;
  
  .process-description-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  @media (min-width: 1200px) {
    flex: 0 0 39%;
    margin-left: -6%;
  }
  
  @media (min-width: 1920px) {
    flex: 0 0 37%;
    margin-left: -7%;
  }
  
  @media (min-width: 2560px) {
    flex: 0 0 35%;
    margin-left: -8%;
  }
  
  @media (max-width: 1199px) {
    flex: 0 0 38%;
    margin-left: -3%;
  }
    @media (max-width: 992px) {
    flex: 0 0 100%;
    margin-left: 0; /* Reset margin for mobile layouts */
    display: none; /* Hide phase description texts on mobile */
  }
`,N6=x.div`
  flex: 0 0 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  position: relative;
  overflow: visible;
  z-index: 1;
  min-width: 400px;
  max-width: 100%;  padding-right: 5%;
  margin-top: 200px;
  margin-left: 225px;

  .diagram-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .diagram-scale-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform-origin: center center;
    transform: scale(2.2);
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  @media (min-width: 1200px) {
    padding-right: 7%;
    
    .diagram-scale-container {
      transform: scale(2.3);
    }
  }

  @media (min-width: 1440px) {
    height: 620px;
    padding-right: 9%;
    
    .diagram-scale-container {
      transform: scale(2.4);
    }
  }
  
  @media (min-width: 1920px) {
    flex: 0 0 64%;
    height: 650px;
    padding-right: 12%;
    
    .diagram-scale-container {
      transform: scale(2.5);
    }
  }

  @media (min-width: 2560px) {
    height: 700px;
    padding-right: 15%;
    
    .diagram-scale-container {
      transform: scale(2.6);
    }
  }
  
  @media (min-width: 3840px) {
    height: 750px;
    padding-right: 18%;
    
    .diagram-scale-container {
      transform: scale(2.7);
    }
  }
  
  @media (max-width: 1199px) {
    padding-right: 3%;
    
    .diagram-scale-container {
      transform: scale(2.1);
    }
  }  @media (max-width: 992px) {
    flex: 0 0 90%;
    height: 500px;
    min-width: 90%;
    width: 90%;
    padding-right: 0;
    margin-bottom: -6rem;
    margin-top: -75px;
    margin-left: auto;
    margin-right: auto;
    
    .diagram-scale-container {
      transform: scale(1.95);
    }
    
    .diagram-wrapper {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    height: 450px;
    flex: 0 0 95%;
    min-width: 95%;
    width: 95%;
    margin-bottom: -6rem;
    margin-top: -75px;
    margin-left: auto;
    margin-right: auto;
    
    .diagram-scale-container {
      transform: scale(1.75);
    }
  }

  @media (max-width: 480px) {
    height: 400px;
    flex: 0 0 100%;
    min-width: 100%;
    width: 100%;
    margin-bottom: -6rem;
    margin-top: -75px;
    margin-left: auto;
    margin-right: auto;
    
    .diagram-scale-container {
      transform: scale(1.5);
    }
  }
`;x.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  
  button {
    background: none;
    border: 2px solid var(--lavender-200);
    border-radius: 4px;
    padding: 0.55rem 1.35rem;
    margin-right: 0.85rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    color: var(--text-secondary);
    
    &:last-child {
      margin-right: 0;
    }
    
    &.active {
      background-color: var(--accent);
      border-color: var(--accent);
      color: white;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid var(--accent);
      }
    }
      &:hover:not(.active) {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
  
  @media (min-width: 1440px) {
    button {
      font-size: 1.1rem;
      padding: 0.6rem 1.4rem;
    }
  }
  
  @media (min-width: 1920px) {
    button {
      font-size: 1.15rem;
      padding: 0.65rem 1.45rem;
    }
  }
  
  @media (min-width: 2560px) {
    button {
      font-size: 1.2rem;
      padding: 0.7rem 1.5rem;
    }
  }
`;const V6=x.div`
  padding: 0.6rem 0.8rem 0.6rem 0.6rem; /* Reduced left padding to move text further left */
  flex: 1;
  max-width: 96%;
  color: var(--text);
  transition: color 0.5s ease;
  
  @media (min-width: 1200px) {
    padding: 0.65rem 0.8rem 0.65rem 0.7rem;
    max-width: 98%;
  }
  
  @media (min-width: 1440px) {
    padding: 0.8rem 1rem 0.8rem 0.8rem;
    max-width: 100%;
  }
  
  @media (min-width: 1920px) {
    padding: 0.85rem 1rem 0.85rem 0.9rem;
  }
  
  @media (min-width: 2560px) {
    padding: 1.1rem 1.2rem 1.1rem 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem 0.4rem 0.8rem;
    max-width: 100%;
  }
`,P6=x.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--accent);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 1.15rem;
    letter-spacing: 1.1px;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.2rem;
    letter-spacing: 1.15px;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.25rem;
    letter-spacing: 1.2px;
    margin-bottom: 0.85rem;
  }
`,U6=x.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.15rem;
  color: var(--text);
  letter-spacing: 0.01em;
  line-height: 1.2;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 2.45rem;
    line-height: 1.15;
  }
  
  @media (min-width: 1920px) {
    font-size: 2.6rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 2.8rem;
    margin-bottom: 1.35rem;
  }
`,H6=x.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  line-height: 1.68;
  color: var(--text);
  margin-bottom: 1.65rem;
  max-width: 97%;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 1.2rem;
    line-height: 1.72;
    max-width: 95%;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.25rem;
    line-height: 1.74;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.3rem;
    line-height: 1.76;
    margin-bottom: 2rem;
  }
`,$6=x.div`
  margin-top: 1.85rem;
  margin-bottom: 2.45rem;
  
  @media (min-width: 1440px) {
    margin-top: 1.9rem;
    margin-bottom: 2.5rem;
  }
  
  @media (min-width: 1920px) {
    margin-top: 2rem;
    margin-bottom: 2.6rem;
  }
  
  @media (min-width: 2560px) {
    margin-top: 2.1rem;
    margin-bottom: 2.75rem;
  }
`,Y6=x.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  color: var(--text);
  margin-bottom: 1.25rem;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 1.05rem;
    letter-spacing: 0.065rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.1rem;
    letter-spacing: 0.068rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.15rem;
    letter-spacing: 0.07rem;
    margin-bottom: 1.5rem;
  }
`,G6=x.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,q6=x.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.85rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.55;
  max-width: 95%;
  
  @media (min-width: 1440px) {
    font-size: 1.1rem;
    margin-bottom: 0.95rem;
    line-height: 1.57;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.15rem;
    line-height: 1.58;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`,X6=x.span`
  color: var(--accent);
  font-size: 1.3rem;
  margin-right: 0.75rem;
  line-height: 1;
  
  @media (min-width: 1440px) {
    font-size: 1.35rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.4rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.45rem;
  }
`,F6=x.div`
  margin-top: 1.75rem;
  padding-left: 1.35rem;
  border-left: 3px solid var(--lavender-200);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -1.5rem;
    left: -0.5rem;
    font-family: 'Playfair Display', serif;
    font-size: 3.2rem;
    color: var(--lavender-200);
    opacity: 0.6;
    line-height: 1;
  }
  
  @media (min-width: 1440px) {
    padding-left: 1.6rem;
    
    &::before {
      font-size: 3.4rem;
    }
  }
  
  @media (min-width: 1920px) {
    padding-left: 1.7rem;
    
    &::before {
      font-size: 3.5rem;
      top: -1.65rem;
    }
  }
  
  @media (min-width: 2560px) {
    padding-left: 1.85rem;
    margin-top: 2.1rem;
    
    &::before {
      font-size: 3.7rem;
      top: -1.75rem;
    }
  }
`,I6=x.p`
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.62;
  position: relative;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 1.2rem;
    line-height: 1.65;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.25rem;
    line-height: 1.68;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.3rem;
    line-height: 1.7;
  }
`,K6=x.div`
  width: 100%;
  margin-top: -60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 20;
  
  @media (min-width: 1200px) {
    margin-top: -60px;
  }
  
  @media (min-width: 1440px) {
    margin-top: -60px;
  }
  
  @media (min-width: 1920px) {
    margin-top: -60px;
  }
  
  @media (min-width: 2560px) {
    margin-top: -60px;
  }
    @media (max-width: 992px) {
    justify-content: center; /* Center on mobile/tablet */
    display: none; /* Hide animation controls on mobile */
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    justify-content: center;
    display: none; /* Hide animation controls on mobile */
  }
`,Z6=x.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  justify-content: flex-start; /* Align controls to the left instead of center */
  align-items: center;
  position: relative; /* Ensure proper stacking context */
  z-index: 15;
  width: 100%;
  max-width: 1300px;
  padding-left: 0; /* Reset padding */
  margin-left: -5%; /* Align with left edge of text column */
  
  @media (min-width: 1440px) {
    gap: 1.5rem;
    margin-left: -6%;
  }
  
  @media (min-width: 1920px) {
    gap: 1.75rem;
    margin-left: -7%;
  }
  
  @media (min-width: 2560px) {
    gap: 2rem;
    margin-left: -8%;
  }
  
  @media (max-width: 1199px) {
    margin-left: -3%;
  }
  
  @media (max-width: 992px) {
    justify-content: center;
    margin-left: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    margin-left: 0;
  }
`,Sv=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
  min-width: 230px;
  position: relative; /* Ensure proper positioning for child elements */
  
  @media (min-width: 1440px) {
    min-width: 250px;
    gap: 0.95rem;
  }
  
  @media (min-width: 1920px) {
    min-width: 260px;
    gap: 1rem;
  }
  
  @media (min-width: 2560px) {
    min-width: 280px;
    gap: 1.1rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,kv=x.label`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
  letter-spacing: 0.02em;
  
  @media (min-width: 1440px) {
    font-size: 1.1rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.15rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.2rem;
    letter-spacing: 0.025em;
  }
`,Tv=x.select`
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--lavender-200);
  background-color: var(--card-bg);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  color: var(--text);
  width: 100%;
  min-width: 210px;
  position: relative;
  z-index: 10; /* Ensure dropdown appears above other elements */
  cursor: pointer;
  appearance: none; /* Remove default appearance */
  -webkit-appearance: none; /* For Safari */
  -moz-appearance: none; /* For Firefox */
  transition: border-color 0.2s ease;
  
  /* Custom dropdown arrow indicator */
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.25rem; /* Add space for the arrow */
  
  &:hover {
    border-color: var(--accent);
  }
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
  
  @media (min-width: 1440px) {
    font-size: 1.05rem;
    min-width: 230px;
    padding: 0.55rem 0.8rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.1rem;
    min-width: 240px;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.15rem;
    min-width: 250px;
    padding: 0.6rem 0.85rem;
  }
`,Av=x.div`
  position: relative;
  width: 100%;
  
  &:hover {
    &::after {
      opacity: 0.8;
    }
  }
`,Q6=x(km)`
  padding-top: 0; /* We're handling top spacing with margin in the container */
  padding-bottom: 3rem; /* Balanced spacing to match projects section padding-top */
  
  @media (min-width: 1200px) {
    padding-top: 0;
    padding-bottom: 3rem; /* Keep consistent balanced spacing */
  }
  
  @media (min-width: 1920px) {
    padding-top: 0;
    padding-bottom: 3rem; /* Keep consistent balanced spacing */
  }
  
  @media (max-width: 768px) {
    padding-bottom: 2rem; /* Proportional mobile spacing */
  }
`,W6=x(Th)`
  margin-top: 60px; /* Create ~140px space below navbar (80px from Main padding-top + 60px here) */
  
  @media (min-width: 1200px) {
    margin-top: 70px; 
  }
  
  @media (min-width: 1920px) {
    margin-top: 80px;
  }
  @media (max-width: 992px) {
    margin-top: 100px; /* Increased space on tablet to push diagram below navbar */
  }
  
  @media (max-width: 768px) {
    margin-top: 340px; /* Increased by 200px to ensure diagram doesn't overlap with mobile menu */
  }
`,J6=x(km)`
  padding-top: 3rem; /* Balanced spacing to match process section padding-bottom */
  padding-bottom: 8rem; /* Dodana duża przestrzeń przed stopką */
  min-height: 800px; /* Minimalna wysokość sekcji */
  
  @media (max-width: 768px) {
    padding-top: 2rem; /* Proportional mobile spacing to match process section */
    padding-bottom: 6rem; /* Dodana przestrzeń na mobile */
    min-height: 600px;
  }
`,eC=()=>{const t=aa.slice(0,3),[i,r]=$n({triggerOnce:!0,threshold:.1}),[s,l]=$n({triggerOnce:!0,threshold:.1}),[u,f]=$n({triggerOnce:!0,threshold:.1});return h.jsxs("div",{className:"page-wrapper page-transition-container",children:[h.jsx(ca,{title:"FLID - Fundacja Ludzie-Innowacje-Design",description:"FLID to fundacja zajmująca się innowacyjnymi projektami z zakresu designu, technologii i usług dla społeczeństwa.",keywords:"design thinking, innowacje, projektowanie usług, bielsko-biała, design",canonical:"/"}),h.jsxs(Q6,{ref:i,children:[h.jsxs(W6,{children:["          ",h.jsx(J.div,{initial:{opacity:0,y:30},animate:r?{opacity:1,y:0}:{},transition:{duration:.9},children:h.jsx(D6,{children:h.jsx(O6,{})})})]}),"      "]}),h.jsx(J6,{ref:s,className:"fade-in-element",children:h.jsxs(Th,{children:[h.jsx(xv,{title:"Wybrane projekty",subtitle:"Zobacz nasze najnowsze realizacje"}),h.jsx(J.div,{initial:{opacity:0,y:30},animate:l?{opacity:1,y:0}:{},transition:{duration:.9,delay:.2},children:h.jsx(tC,{children:t.map(g=>h.jsxs(bw,{to:`/projects/${g.slug}`,whileHover:{y:-10},transition:{duration:.3},children:[h.jsxs(S6,{children:[g.coverImage?h.jsx(ln,{src:g.coverImage,alt:g.title,aspectRatio:"16:9",className:"project-image"}):h.jsx(zc,{title:g.title}),h.jsx(nC,{children:g.category})]}),h.jsxs(k6,{children:[h.jsx(T6,{children:g.title}),h.jsx(A6,{children:g.shortDesc}),h.jsxs(iC,{children:[h.jsx("span",{children:g.year}),h.jsx(aC,{children:"Zobacz szczegóły →"})]})]})]},g.id))})}),h.jsxs(E6,{children:[h.jsx(z6,{to:"/projects",variant:"secondary",withArrow:!0,children:"Zobacz wszystkie projekty"}),"          "]})]})}),h.jsx(km,{$light:!0,ref:u,className:"fade-in-element",children:h.jsxs(Th,{children:[h.jsx(xv,{title:"Partnerzy",subtitle:"Współpracujemy z najlepszymi",centered:!0}),h.jsx(J.div,{initial:{opacity:0,y:30},animate:f?{opacity:1,y:0}:{},transition:{duration:.9,delay:.2},children:h.jsx(rC,{children:c6.map(g=>h.jsxs(oC,{children:[g.logo?h.jsx(ln,{src:g.logo,alt:g.name,aspectRatio:"1:1",className:"partner-logo"}):h.jsx(d6,{name:g.name}),h.jsx(sC,{children:g.name})]},g.id))})}),"        "]})})]})},tC=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,bw=x(J.create(ze))`  text-decoration: none;
  color: inherit;
  background: var(--card-bg);
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`,nC=x.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(var(--accent-rgb), 0.9);
  backdrop-filter: blur(5px);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`,iC=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  color: var(--text-light);
  font-size: 0.85rem;
`,aC=x.span`
  color: var(--accent);
  font-weight: 500;
  transition: color 0.3s ease;
  
  ${bw}:hover & {
    color: var(--accent-dark);
  }
`,rC=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
`,oC=x.div`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`,sC=x.h3`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
`;x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: flex-start;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
`;x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media (max-width: 992px) {
    order: -1; // Na małych ekranach diagram na górze
    align-items: center;
  }
`;x.div`
  padding-right: 2rem;
  
  @media (max-width: 992px) {
    padding-right: 0;
    text-align: center;
  }
`;x.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  width: 100%;
`;x.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;x.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  min-width: 2.5rem;
`;x.div`
  flex: 1;
`;x.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;x.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;x.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 992px) {
    height: 450px;
  }
`;x.header`
  position: relative;
  min-height: 40vh;
  display: flex;  align-items: center;
  background-image: ${t=>t.$backgroundImage?`url(${t.$backgroundImage})`:"none"};
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 3rem;
`;x.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;  bottom: 0;
  background: ${t=>t.$backgroundImage?"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))":"linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)"};
  z-index: -1;
  opacity: ${t=>t.$backgroundImage?1:.9};
`;x.div`
  text-align: center;
  padding: 4rem 0;
`;x.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;x.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;const lC=({children:t,level:i=1,className:r=""})=>{const s=`h${i}`;return h.jsx(cC,{as:s,className:`text-gradient ${r}`,children:t})},cC=x.h1`
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
`;x.span`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;const uC=x.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
  z-index: 1;
`;x.button`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover ${uC} {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(210, 205, 232, 0.3);
  }
`;x.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;x.div`
  position: relative;
  z-index: 2;
`;x.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent, 
      rgba(210, 205, 232, 0.4), 
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
`;x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 3rem 0;
`;x.div`
  height: 1px;
  flex-grow: 1;
  background: linear-gradient(90deg, 
    transparent, 
    var(--primary), 
    transparent
  );
`;x.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  margin: 0 1rem;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.7;
    animation: pulse 2s infinite;
  }
  
  &:before {
    width: 16px;
    height: 16px;
    animation-delay: 0.5s;
  }
  
  &:after {
    width: 24px;
    height: 24px;
  }
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;x.section`
  position: relative;
  overflow: hidden;
  min-height: 400px;
`;x.div`
  position: absolute;
  top: 0;  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${t=>t.$bgImage?`url(${t.$bgImage})`:"none"};
  background-size: cover;
  background-position: center center;
  z-index: -1;
  transform: translateZ(0);
  will-change: transform;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, var(--background) 0%, transparent 100%);
  }
`;x.div`
  position: relative;
  z-index: 1;
  padding: 5rem 0;
`;x.div`
  display: flex;
  flex-wrap: wrap;
`;x(J.span)`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;x.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wider);
  text-transform: uppercase;
  background-color: var(--accent-light);
  color: var(--accent-dark);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(210, 205, 232, 0.3);
  }
`;x.div`
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;x.div`
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--lavender-500);
  margin-bottom: 1.5rem;
  font-weight: 500;
`;x(J.div)`
  width: 120px;
  height: 2px;
  background-color: var(--lavender-400);
  margin: 3rem auto 0;
  opacity: 0.7;
`;const dC=()=>{const[t,i]=S.useState("all"),[r,s]=S.useState(aa),[l,u]=S.useState(""),f=S.useRef(null),g=["all",...new Set(aa.map(m=>m.category))];return S.useEffect(()=>{let m=aa;if(console.log("Projects data:",aa),t!=="all"&&(m=m.filter(p=>p.category===t)),l.trim()!==""){const p=l.toLowerCase().trim();m=m.filter(y=>y.title.toLowerCase().includes(p)||y.shortDesc.toLowerCase().includes(p))}console.log("Filtered projects:",m),s(m)},[t,l]),h.jsxs(fC,{ref:f,className:"projects-page-container",children:[h.jsx(ca,{title:"Projekty - FLID",description:"Odkryj nasze innowacyjne projekty i realizacje w obszarze zrównoważonego designu."}),h.jsxs(gC,{className:"projects-content-section",children:["        ",h.jsxs(hC,{children:["          ",h.jsxs(mC,{className:"sidebar-controls",children:["            ","            ",h.jsxs(Sc,{className:"search-container",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:0,duration:.15},whileHover:{scale:1.01,y:-1},children:[h.jsx(wC,{children:h.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("circle",{cx:"11",cy:"11",r:"8",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("path",{d:"M21 21l-4.35-4.35",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),h.jsx(jC,{type:"text",placeholder:"Szukaj projektu...",value:l,onChange:m=>u(m.target.value)}),l&&h.jsx(zC,{onClick:()=>u(""),children:h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),h.jsx(pC,{}),"            ",h.jsx(vC,{className:"category-nav",children:g.map((m,p)=>h.jsxs(xC,{$active:m===t,onClick:()=>i(m),as:J.button,initial:{opacity:0,x:-6},animate:{opacity:1,x:0},transition:{delay:p*.005,duration:.15},whileHover:{x:3},whileTap:{scale:.99},children:[m==="all"?"Wszystkie":m,m===t&&h.jsx(bC,{layoutId:"activeCategoryIndicator"})]},m))})]}),h.jsxs(yC,{className:"main-content",children:["            ",h.jsx(SC,{className:"projects-gallery",children:h.jsx(Ei,{mode:"popLayout",children:r.map((m,p)=>h.jsx(Fn,{className:"project-card",initial:{opacity:0,y:20,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.98,transition:{duration:.15}},transition:{duration:.25,delay:p*.03,ease:[.22,1,.36,1]},whileHover:{y:-8,scale:1.015,transition:{duration:.25,ease:[.22,1,.36,1]}},whileTap:{scale:.99,transition:{duration:.1}},children:h.jsxs(kC,{to:`/projects/${m.slug}`,children:[h.jsxs(TC,{children:[m.coverImage?h.jsx(AC,{src:m.coverImage,alt:m.title}):h.jsx(EC,{children:h.jsx(zc,{title:m.title,animate:!1})}),h.jsx(DC,{children:m.category}),h.jsx(CC,{})]}),h.jsxs(RC,{children:[h.jsx(MC,{children:m.title}),h.jsx(OC,{children:m.shortDesc}),h.jsxs(LC,{children:[h.jsx(BC,{children:m.year}),h.jsxs(_C,{children:["Zobacz projekt",h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})]})},m.id))})}),r.length===0&&h.jsxs(NC,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:[h.jsx(VC,{children:"🔍"}),h.jsx(PC,{children:"Brak wyników"}),h.jsx(UC,{children:"Nie znaleziono projektów pasujących do wybranych kryteriów."}),h.jsx(HC,{onClick:()=>{i("all"),u("")},whileHover:{scale:1.03},whileTap:{scale:.98},children:"Resetuj filtry"})]})]})]})]})]})},fC=x.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%; // Changed from 100vw to 100%
  max-width: 100%; // Changed from 100vw to 100%
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;
  
  /* Ważne dla ekranów 2K - zapobieganie białym paskom */
  left: 0;
  right: 0;
  
  /* Fix dla czyszczenia marginesów i paddingów */
  &:before, &:after {
    content: "";
    display: table;
    clear: both;
  }
`,hC=x.div`
  display: flex;
  width: 100%;
  max-width: none; // Removed max-width: 1800px
  margin: 0; // Removed margin: 0 auto
  padding: 0; // Added to remove default padding
  gap: 0; // Removed gap: 2.5rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem; // Keep gap for mobile
    
    & > * {
      text-align: left;
    }
  }
`,mC=x.aside`
  flex: 0 0 280px; // Increased width for better spacing
  padding: 2rem 1.5rem; // Adjusted padding
  background-color: var(--background-secondary);
  // border-right: 1px solid var(--border); // Removed border for seamless look
  // border-radius: 8px; // Removed for seamless look
  display: flex;
  flex-direction: column;
  gap: 1.75rem; // Adjusted gap
  text-align: left;
  align-items: flex-start;
  // box-shadow: 0 3px 12px rgba(0, 0, 0, 0.03); // Removed shadow
  position: sticky; // Added for sticky behavior
  top: 0; // Stick to the top
  height: 100vh; // Full height
  overflow-y: auto; // Allow scrolling if content overflows
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text);
    font-weight: 600;
    text-align: left;
    width: 100%;
  }
  
  & > * {
    width: 100%;
    text-align: left;
    align-items: flex-start;
  }
  
  @media (max-width: 1024px) {
    flex: none;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding: 1.2rem 1.2rem 1.5rem;
    margin-bottom: 1rem;
    gap: 1.25rem;
    border-radius: 0;
    background-color: rgba(var(--background-secondary-rgb), 0.5);
    position: static; // Remove sticky on mobile
    height: auto; // Reset height on mobile
    overflow-y: visible; // Reset overflow on mobile
  }
`,pC=x.div`
  width: 100%;
  height: 1px;
  background-color: var(--border);
  opacity: 0.6;
  margin: 0.25rem 0 0.75rem;
`,gC=x.section`
  max-width: none; // Removed max-width
  width: 100%;
  margin: 0;
  padding: 2rem 3rem; // Adjusted padding for elegant spacing
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; // Center content if it's narrower than the section
  position: relative;
  z-index: 10; // Keep z-index if needed for layering
  min-height: calc(100vh + 200px); 
  
  @media (max-width: 1024px) {
    padding: 1.5rem; // Adjusted mobile padding
    min-height: calc(100vh + 150px);
  }
  @media (min-width: 1025px) { // Apply padding only on larger screens for the main content area
    padding-left: 3rem; 
    padding-right: 3rem;
  }
`,yC=x.main`
  flex: 1;
  padding: 0; // Reset padding, will be handled by ProjectsGallery or ContentSection
  width: 100%; // Ensure it takes full available width
  
  @media (max-width: 1024px) {
    padding: 0.5rem 0;
  }
`,vC=x.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  text-align: left;
  align-items: flex-start;
  margin-bottom: 0.25rem;
  padding-left: 0.15rem;
  
  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.7rem;
    padding-left: 0;
  }
`,xC=x(J.button)`
  background: ${t=>t.$active?"var(--lavender-300)":"transparent"};
  color: ${t=>t.$active?"var(--text)":"var(--text-secondary)"};
  border: 1px solid ${t=>t.$active?"var(--lavender-300)":"transparent"};
  padding: 0.8rem 1.25rem;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  position: relative;
  font-weight: ${t=>t.$active?"600":"400"};
  letter-spacing: 0.01em;
  transition: all 0.25s ease;
  width: 100%;
  display: block;
  position: relative;
  overflow: hidden;
    &:hover {
    border-color: ${t=>!t.$active&&"var(--border)"};
    color: ${t=>!t.$active&&"var(--lavender-600)"};
    transform: translateX(3px);
    background-color: ${t=>!t.$active&&"rgba(210, 205, 232, 0.05)"};
  }
  
  &:active {
    transform: translateX(1px);
  }
  
  @media (max-width: 1024px) {
    text-align: left;
    width: auto;
    padding: 0.7rem 1.2rem;
      &:hover {
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(-0.5px);
    }
  }
`,bC=x(J.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  height: 100%;
  background: var(--lavender-600);
  
  @media (max-width: 1024px) {
    bottom: -2px;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
    top: auto;
  }
`,Sc=x(J.div)`
  position: relative;
  width: 100%;
  margin: 0.25rem 0 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  background: var(--background);
  border: 1px solid var(--border);
  
  &:hover {
    border-color: var(--lavender-300);
  }
  
  &:focus-within {
    border-color: var(--lavender-400);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--lavender-400), var(--lavender-600));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.8;
  }
  
  &:focus-within:after {
    transform: scaleX(1);
  }
`,wC=x.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--lavender-500);
  pointer-events: none;
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  
  ${Sc}:hover & {
    color: var(--lavender-600);
    opacity: 1;
  }
  
  ${Sc}:focus-within & {
    color: var(--lavender-700);
    opacity: 1;
  }
`,jC=x.input`
  width: 100%;
  padding: 1rem 1rem 1rem 2.8rem;
  border: none;
  background-color: transparent;
  color: var(--text);
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.01em;
  
  &:focus {
    outline: none;
    color: var(--text);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
    text-align: left;
    opacity: 0.7;
    font-size: 0.9rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 400;
  }
  
  &:focus::placeholder {
    opacity: 0.5;
    transform: translateX(3px);
  }
  
  ${Sc}:hover &::placeholder {
    opacity: 0.8;
    color: var(--lavender-500);
  }
`,zC=x.button`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  cursor: pointer;
  padding: 0.4rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--lavender-600);
    opacity: 1;
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  svg {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,SC=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); // Adjusted minmax for responsiveness
  gap: 2rem; // Adjusted gap
  width: 100%;
  min-height: 800px; 
  padding: 2rem 0; // Add vertical padding within the gallery

  @media (max-width: 1536px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); // Adjusted for slightly smaller cards
    min-height: 1000px; 
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem; // Adjusted mobile gap
    min-height: 1200px; 
    padding: 1rem 0; // Adjusted mobile padding
  }
  
  @media (min-width: 1920px) { // For very wide screens, allow more columns
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }

  @media (min-width: 2200px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); // Even more columns for ultra-wide
    min-height: 600px; 
  }
`,Fn=x(J.article)`
  overflow: hidden;
  background-color: var(--card-bg);
  position: relative;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transform-origin: center;
  transition: border-color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  &:hover {
    border-color: var(--lavender-300);
  }
`,kC=x(ze)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: var(--text);
`,TC=x.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(139, 92, 246, 0.1) 0%, 
      rgba(147, 51, 234, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }
  
  ${Fn}:hover &::after {
    opacity: 1;
  }
`,AC=x.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  ${Fn}:hover & {
    transform: scale(1.05);
  }`,EC=x.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,CC=x.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(139, 92, 246, 0.0) 0%, 
    rgba(147, 51, 234, 0.0) 100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  
  ${Fn}:hover & {
    opacity: 1;
    background: linear-gradient(135deg, 
      rgba(139, 92, 246, 0.1) 0%, 
      rgba(147, 51, 234, 0.15) 100%);
  }
`,DC=x.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.95);
  color: var(--lavender-600);
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(8px);
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    ${Fn}:hover & {
    transform: translateY(-1px);
    background-color: rgba(255, 255, 255, 0.98);
  }`,RC=x.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--border);
  }
    ${Fn}:hover & {
    transform: translateY(-2px);
  }
`,MC=x.h3`
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  color: var(--text);
  font-weight: 600;
  line-height: 1.3;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    ${Fn}:hover & {
    transform: translateY(-1px);
    color: var(--lavender-600);
  }`,OC=x.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.5;
  flex-grow: 1;
`,LC=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
`,BC=x.span`
  font-size: 0.85rem;
  color: var(--text-tertiary);
  font-weight: 500;
`,_C=x.span`
  color: var(--lavender-600);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  svg {
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0.8;
  }
    ${Fn}:hover & {
    transform: translateX(5px);
    color: var(--lavender-700);
  }
  
  ${Fn}:hover & svg {
    transform: translateX(4px) scale(1.05);
    opacity: 1;
  }
`,NC=x(J.div)`
  text-align: center;
  padding: 5rem 0;
  max-width: 500px;
  margin: 0 auto;
`,VC=x.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`,PC=x.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`,UC=x.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`,HC=x(J.button)`
  background: var(--lavender-500);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`,$C=()=>{var m;const{slug:t}=Kv(),i=Tc(),[r,s]=S.useState(null),[l,u]=S.useState(null),[f,g]=S.useState(!0);return S.useEffect(()=>{const p=aa.find(y=>y.slug===t);if(p){console.log("Found project:",p),console.log("Cover image:",p.coverImage),console.log("Images array:",p.images),s(p);const y=p.images?p.images.filter(j=>j!==p.coverImage):[],b=y.length>0?y[0]:null;console.log("Setting active gallery image to:",b),u(b),g(!1)}else i("/projects",{replace:!0})},[t,i]),f||!r?h.jsx(YC,{children:h.jsx(GC,{})}):h.jsxs(h.Fragment,{children:[h.jsx(ca,{title:`${r.title} - Projekt`,description:r.shortDesc||`Projekt ${r.title} - szczegółowy opis projektu realizowanego przez Fundację FLID.`,keywords:`${r.title}, projekt, ${r.category}, design, flid`,canonical:`/projects/${r.slug}`,ogImage:r.coverImage||((m=r.images)==null?void 0:m[0])||"/images/projects/default-project-cover.svg"}),r.coverImage&&h.jsx(qC,{children:h.jsx(ln,{src:r.coverImage,alt:`${r.title} - Cover Image`,aspectRatio:"auto",priority:!0,className:"project-cover-image-full-width"})}),h.jsx(XC,{children:h.jsx("div",{className:"container",children:h.jsxs(FC,{children:[h.jsxs(IC,{children:[h.jsx(KC,{to:"/projects",children:"Projekty"}),h.jsx(ZC,{children:"/"}),h.jsx(QC,{children:r.title})]}),h.jsx(WC,{children:r.title}),h.jsxs(JC,{children:[h.jsxs(Ev,{children:[h.jsx(Cv,{children:"Kategoria:"})," ",r.category]}),h.jsxs(Ev,{children:[h.jsx(Cv,{children:"Rok:"})," ",r.year]})]})]})})}),h.jsx(eD,{children:h.jsxs("div",{className:"container",children:[h.jsxs(tD,{children:[h.jsxs(nD,{children:[h.jsxs(iD,{children:[console.log("Rendering gallery main image, activeImage:",l),l?h.jsx(ln,{src:l,alt:`${r.title} - zdjęcie projektu`,aspectRatio:"auto",priority:!0,className:"project-main-image",placeholderSrc:W("placeholder.svg")},l):r.images&&r.images.filter(p=>p!==r.coverImage).length===0?null:h.jsx(zc,{title:r.title})]}),(()=>{const p=r.images?r.images.filter(y=>y!==r.coverImage):[];return p&&p.length>0?h.jsx(aD,{children:p.map(y=>h.jsxs(rD,{$active:y===l,onClick:()=>u(y),children:[h.jsx(ln,{src:y,alt:`${r.title} - zdjęcie ${p.indexOf(y)+1}`,aspectRatio:"1:1",imgStyles:{objectFit:"cover"}}),y===l&&h.jsx(oD,{layoutId:"activeThumb"})]},y))}):null})()]}),h.jsxs(sD,{children:[h.jsx(lD,{children:r.fullDesc}),r.partners&&r.partners.length>0&&h.jsxs(Dv,{children:[h.jsx(Rv,{children:"Partnerzy"}),h.jsx(cD,{children:r.partners.map((p,y)=>h.jsx(uD,{children:p},y))})]}),r.technologies&&r.technologies.length>0&&h.jsxs(Dv,{children:[h.jsx(Rv,{children:"Technologie i metody"}),h.jsx(dD,{children:r.technologies.map((p,y)=>h.jsx(fD,{children:p},y))})]})]})]}),h.jsx(hD,{children:h.jsxs(mD,{to:"/projects",children:[h.jsx(pD,{children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),"Powrót do listy projektów"]})})]})}),h.jsx(gD,{children:h.jsxs("div",{className:"container",children:[h.jsx(yD,{children:"Inne projekty"}),h.jsx(vD,{children:aa.filter(p=>p.id!==r.id).slice(0,3).map(p=>h.jsxs(ww,{to:`/projects/${p.slug}`,whileHover:{y:-5},children:[h.jsx(bD,{children:p.coverImage?h.jsx(ln,{src:p.coverImage,alt:p.title,aspectRatio:"16:9",className:"related-project-image"}):h.jsx("div",{style:{height:"100%",width:"100%"},children:h.jsx(zc,{title:p.title})})}),h.jsxs(wD,{children:[h.jsx(jD,{children:p.title}),h.jsx(zD,{children:p.category})]})]},p.id))})]})})]})},YC=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`,GC=x.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,qC=x.div`
  width: 100%; /* Occupy full width of parent (Main) */
  margin-bottom: 2rem;
  line-height: 0; /* Prevents extra space below image */
  overflow: hidden; /* Ensures content (the image) does not spill out */

  .project-cover-image-full-width {
    display: block; /* Remove potential extra space below the image */
    width: 100%;    /* Make the image take the full width of this container */
    height: auto;   /* Maintain the image's aspect ratio */
    max-width: 100%; /* Explicitly ensure it doesn't exceed container width */
  }
`,XC=x.header`
  background-color: var(--card-bg);
  padding: 6rem 0 3rem;
  margin-bottom: 3rem;
`,FC=x.div`
  max-width: 800px;
`,IC=x.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,KC=x(ze)`
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--primary);
  }
`,ZC=x.span`
  margin: 0 0.5rem;
  color: var(--text-secondary);
`,QC=x.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,WC=x.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,JC=x.div`
  display: flex;
  gap: 2rem;
`,Ev=x.div`
  color: var(--text);
`,Cv=x.span`
  color: var(--text-secondary);
`,eD=x.div`
  margin-bottom: 4rem;
`,tD=x.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,nD=x.div``,iD=x.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: var(--card-bg);
  
  /* Styles for the OptimizedImage component */
  .project-main-image {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    max-height: 300px;
  }
`,aD=x.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--border);
    border-radius: 3px;
  }
`,rD=x.button`
  width: 80px;
  height: 80px;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid ${({$active:t})=>t?"var(--primary)":"var(--border-ultralight)"}; // Changed to $active
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: ${({$active:t})=>t?"var(--primary-dark)":"var(--border-light)"}; // Changed to $active
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,oD=x(J.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--primary);
  border-radius: 4px;
`,sD=x.div``,lD=x.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  white-space: pre-line;
`,Dv=x.div`
  margin-bottom: 2rem;
`,Rv=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
`,cD=x.ul`
  list-style: none;
  padding: 0;
`,uD=x.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`,dD=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,fD=x.span`
  background-color: var(--card-bg);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.9rem;
  color: var(--text-secondary);
`,hD=x.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`,mD=x(ze)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  
  &:hover {
    color: var(--secondary);
  }
`,pD=x.div`
  display: flex;
  align-items: center;
`,gD=x.section`
  padding: 4rem 0;
  background-color: var(--card-bg);
`,yD=x.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`,vD=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`,xD=J.create(ze),ww=x(xD)`
  display: block;
  color: var(--text);
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`,bD=x.div`
  height: 150px;
  overflow: hidden;
  
  /* Styles for the OptimizedImage component */
  .related-project-image {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    
    ${ww}:hover & {
      transform: scale(1.05);
    }
  }
`,wD=x.div`
  padding: 1rem;
`,jD=x.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`,zD=x.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,qo=[{id:1,title:"Beata Przybytek",slug:"beata-przybytek",type:"Płyta winylowa",year:2021,coverImage:W("publications/beata-przybytek/cover.jpg"),shortDesc:"Kolekcjonerskie wydanie płyty winylowej z muzyką jazzową",fullDesc:`Kolekcjonerskie wydanie płyty winylowej Beaty Przybytek, utrzymane w estetyce
    nawiązującej do klasycznych wydań jazzowych z lat 60. Projekt obejmował opracowanie
    całościowej identyfikacji wizualnej, w tym okładki, etykiet, kopert wewnętrznych oraz
    materiałów promocyjnych. Wydanie zostało wzbogacone o unikalne ilustracje i wysokiej
    jakości druk na ekskluzywnym papierze.`,images:[W("publications/beata-przybytek/image1.jpg"),W("publications/beata-przybytek/image2.jpg")],format:'12" winyl, 180g',publisher:"FLID Records",links:[{name:"Strona artystki",url:"#"},{name:"Sklep online",url:"#"}]},{id:2,title:"Komisarz Orłowska",slug:"komisarz-orlowska",type:"Seria książek",year:2020,coverImage:W("publications/komisarz-orlowska/cover.jpg"),shortDesc:"Seria kryminałów o komisarz Orłowskiej z charakterystyczną identyfikacją wizualną",fullDesc:`Seria kryminałów o komisarz Orłowskiej to projekt wydawniczy obejmujący
    kompleksowe opracowanie identyfikacji wizualnej dla cyklu książek kryminalnych.
    Projekt zakładał stworzenie spójnego, rozpoznawalnego stylu graficznego dla całej
    serii, z jednoczesnym podkreśleniem unikalnego charakteru każdego tomu. Opracowanie
    objęło projekt okładek, wybór typografii, układ tekstu oraz materiały promocyjne.`,images:[W("publications/komisarz-orlowska/image1.jpg"),W("publications/komisarz-orlowska/image2.jpg"),W("publications/komisarz-orlowska/image3.jpg")],format:"Oprawa twarda, 145x205 mm",publisher:"Wydawnictwo Literackie",links:[{name:"Strona serii",url:"#"},{name:"Sklep wydawnictwa",url:"#"}]},{id:3,title:"Historia fotografii światowej",slug:"historia-fotografii-swiatowej",type:"Książka",year:2022,coverImage:W("publications/historia-fotografii/cover.jpg"),shortDesc:"Bogato ilustrowana publikacja o historii fotografii",fullDesc:`"Historia fotografii światowej" to obszerna, bogato ilustrowana publikacja
    przedstawiająca rozwój sztuki fotograficznej od jej początków po czasy współczesne.
    Projekt obejmował opracowanie koncepcji edytorskiej, dobór materiałów wizualnych,
    projekt layoutu oraz opracowanie typograficzne. Szczególny nacisk położono na
    wysoką jakość reprodukcji fotografii historycznych oraz nowoczesne, czytelne
    przedstawienie złożonych treści.`,images:[W("publications/historia-fotografii/image1.jpg"),W("publications/historia-fotografii/image2.jpg")],format:"Oprawa twarda, 220x280 mm, 456 stron",publisher:"FLID Publishing",links:[{name:"Strona książki",url:"#"},{name:"Księgarnia internetowa",url:"#"}]}],SD=()=>{const[t,i]=S.useState("all"),[r,s]=S.useState(qo),l=["all",...new Set(qo.map(u=>u.type).filter(u=>u))];return S.useEffect(()=>{let u=qo;t!=="all"&&(u=u.filter(f=>f.type===t)),s(u)},[t]),h.jsxs(h.Fragment,{children:[h.jsx(ca,{title:"Publikacje",description:"Odkryj publikacje, badania i artykuły Fundacji Ludzie-Innowacje-Design na temat zrównoważonego designu i innowacji społecznych.",keywords:"publikacje, artykuły, badania, design, innowacje społeczne, flid",canonical:"/publications"}),h.jsx(kD,{children:h.jsxs(TD,{children:["          ",h.jsxs(AD,{children:[h.jsx(MD,{children:"Kategorie publikacji"}),h.jsx(CD,{children:l.map((u,f)=>h.jsxs(DD,{$active:u===t,onClick:()=>i(u),as:J.button,initial:{opacity:0,x:-6},animate:{opacity:1,x:0},transition:{delay:f*.005,duration:.15},whileHover:{x:3},whileTap:{scale:.99},children:[u==="all"?"Wszystkie":u,u===t&&h.jsx(RD,{layoutId:"activePublicationCategoryIndicator"})]},u))})]}),h.jsxs(ED,{children:[h.jsx(Ei,{mode:"popLayout",children:h.jsx(OD,{children:r.map((u,f)=>h.jsx(Am,{as:J.article,initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95,transition:{duration:.2}},transition:{duration:.5,delay:f*.05,ease:[.25,.46,.45,.94]},layout:!0,role:"article","aria-labelledby":`publication-title-${u.id}`,children:h.jsxs(ze,{to:`/publications/${u.slug}`,style:{textDecoration:"none",color:"inherit",display:"flex",flexDirection:"column",height:"100%"},children:[h.jsx(LD,{children:u.coverImage?h.jsx(ln,{src:u.coverImage,alt:`Okładka publikacji: ${u.title}`,aspectRatio:"3:4",className:"publication-card-image"}):h.jsx(u6,{title:u.title})}),h.jsxs(BD,{children:[h.jsx(_D,{children:u.type}),h.jsx(ND,{id:`publication-title-${u.id}`,children:u.title}),h.jsx(VD,{children:u.shortDesc}),h.jsx(PD,{children:h.jsx(UD,{children:u.year})})]})]})},u.id))})}),r.length===0&&h.jsxs(HD,{as:J.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},role:"region","aria-label":"Brak wyników wyszukiwania",children:[h.jsx($D,{children:"📚"}),h.jsx(YD,{children:"Brak publikacji"}),h.jsx(GD,{children:"Nie znaleziono publikacji pasujących do wybranej kategorii. Spróbuj wybrać inną kategorię lub pokaż wszystkie."}),h.jsx(qD,{onClick:()=>i("all"),"aria-label":"Pokaż wszystkie publikacje",children:"Pokaż wszystkie"})]})]})]})})]})},kD=x.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding-top: calc(var(--navbar-height, 80px) + 4rem); // Increased breathing space from 2rem to 4rem and updated navbar height
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,TD=x.div`
  display: flex;
  width: 100%;
  max-width: 1800px; 
  margin: 0 auto; 
  padding: 2rem; 
  gap: 2.5rem;
  flex-grow: 1;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem; 
  }
`,AD=x.aside`
  flex: 0 0 280px; // Increased width for better readability
  padding: 2rem 1.5rem; // Increased top/bottom padding for better spacing
  background-color: var(--background);
  border-right: 1px solid var(--border);
  border-radius: 8px; // Added subtle border radius
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); // Subtle shadow for depth
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  position: sticky;
  top: calc(var(--navbar-height, 80px) + 5rem); // Updated to match new padding and navbar height
  height: calc(100vh - var(--navbar-height, 80px) - 7rem); // Adjusted height for new spacing
  overflow-y: auto;
  
  @media (max-width: 1024px) {
    flex: none;
    width: 100%;
    position: static;
    height: auto;
    overflow-y: visible;
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`,ED=x.main`
  flex: 1;
  min-width: 0; // Important for flex item children to not overflow
`,CD=x.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,DD=x(J.button)`
  background: ${t=>t.$active?"var(--accent-light)":"transparent"};
  color: ${t=>t.$active?"var(--primary)":"var(--text-secondary)"};
  border: 1px solid ${t=>t.$active?"var(--accent-light)":"transparent"};
  padding: 1rem 1.5rem; // Increased padding for better touch targets
  border-radius: 6px; // Added subtle border radius for modern look
  font-size: 0.95rem; // Slightly larger font for better readability
  text-align: left;
  cursor: pointer;
  font-weight: ${t=>t.$active?"600":"500"};
  transition: all 0.3s ease; // Slightly longer transition for smoother feel
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start; // Ensures left alignment
  letter-spacing: 0.025em; // Subtle letter spacing for better readability

  &:hover {
    border-color: ${t=>!t.$active&&"var(--border)"};
    color: ${t=>!t.$active&&"var(--primary)"};
    background-color: ${t=>!t.$active&&"var(--accent-light)"};
    transform: translateX(2px); // Subtle hover animation
  }

  &:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`,RD=x(J.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 4px; // Changed to left border indicator instead of full background
  height: 100%;
  background: var(--primary);
  z-index: 1;
  border-radius: 0 2px 2px 0; // Rounded right side only
  
  @media (max-width: 1024px) {
    bottom: 0;
    left: 0;
    top: auto;
    width: 100%;
    height: 3px; // Underline style on mobile
    border-radius: 0;
  }
`,MD=x.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1.5rem;
  margin-top: 0;
  text-align: left;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  padding-left: 0;
`,OD=x(J.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 1200px) { // 2 columns for medium screens
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) { // 1 column for small screens
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Am=x(J.article)`
  position: relative;
  background: var(--card-bg);
  /* border-radius: 20px; */ // Removed as per original request
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex; 
  flex-direction: column;
  height: 100%; // Ensure card takes full height for consistent link area
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), #8B5CF6);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`,LD=x.div`
  position: relative;
  width: 100%;
  padding-top: 75%; // Aspect ratio 4:3 for the image container
  overflow: hidden;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);

  .publication-card-image { // This targets the OptimizedImage component's img tag if it's a direct child or via its className
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  ${Am}:hover & .publication-card-image {
    transform: scale(1.08);
  }
`,BD=x.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1; // Allows this section to take available space
`,_D=x.span`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 25px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  align-self: flex-start;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  
  &::before {
    content: '●';
    margin-right: 0.5rem;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
`,ND=x.h2`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text);
  margin-bottom: 0.25rem;
  
  ${Am}:hover & {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,VD=x.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1; // Allows description to push meta to bottom
  margin-bottom: 1rem;
`,PD=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  margin-top: auto; // Pushes to the bottom of PublicationContent
`,UD=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  
  &::before {
    content: '📅';
    font-size: 1rem;
  }
`,HD=x(J.div)`
  text-align: center;
  padding: 3rem 1.5rem; // Adjusted padding
  background: var(--card-bg);
  /* border-radius: 20px; */ // Removed
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  margin: 2rem auto; // Centered with some margin
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  max-width: 500px; // Limit width
  width: 100%;
`,$D=x.div`
  font-size: 3rem; // Adjusted size
  margin-bottom: 1rem;
`,YD=x.h3`
  font-size: 1.5rem; // Adjusted size
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text);
`,GD=x.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 350px;
`,qD=x.button`
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 0.75rem 1.5rem; // Adjusted padding
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem; // Adjusted font size
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`,XD=()=>{const{slug:t}=Kv(),i=Tc(),[r,s]=S.useState(null),[l,u]=S.useState(null),[f,g]=S.useState(!0);return S.useEffect(()=>{var p;const m=qo.find(y=>y.slug===t);m?(s(m),u(m.coverImage||((p=m.images)==null?void 0:p[0])),g(!1)):i("/publications",{replace:!0})},[t,i]),f||!r?h.jsx(T8,{children:h.jsx(A8,{})}):h.jsxs(h.Fragment,{children:[h.jsx(ca,{title:`${r.title} - Publikacja`,description:r.shortDesc||`Publikacja ${r.title} - szczegółowy opis publikacji wydanej przez Fundację FLID.`,keywords:`${r.title}, publikacja, ${r.type}, artykuł, badanie, flid`,canonical:`/publications/${r.slug}`,ogImage:r.coverImage||"/images/publications/default-publication-cover.svg"}),h.jsx(FD,{children:h.jsx("div",{className:"container",children:h.jsxs(ID,{children:[h.jsxs(KD,{children:[h.jsx(ZD,{to:"/publications",children:"Publikacje"}),h.jsx(QD,{children:"/"}),h.jsx(WD,{children:r.title})]}),h.jsx(JD,{children:r.title}),h.jsxs(e8,{children:[h.jsxs(Pf,{children:[h.jsx(Uf,{children:"Typ:"})," ",r.type]}),h.jsxs(Pf,{children:[h.jsx(Uf,{children:"Rok:"})," ",r.year]}),r.format&&h.jsxs(Pf,{children:[h.jsx(Uf,{children:"Format:"})," ",r.format]})]})]})})}),h.jsx(t8,{children:h.jsxs("div",{className:"container",children:[h.jsxs(n8,{children:[h.jsxs(i8,{children:["              ",h.jsx(a8,{children:h.jsx(ln,{src:l||W("publication-placeholder.jpg"),alt:r.title,aspectRatio:"16:9",priority:!0,className:"publication-main-image",placeholderSrc:W("placeholder.svg")},l)}),r.images&&r.images.length>1&&h.jsx(r8,{children:r.images.map((m,p)=>h.jsxs(o8,{active:m===l,onClick:()=>u(m),children:["                      ",h.jsx(ln,{src:m||W("publication-placeholder-thumb.jpg"),alt:`${r.title} - zdjęcie ${p+1}`,aspectRatio:"1:1",className:"thumbnail-image"}),m===l&&h.jsx(s8,{layoutId:"activeThumb"})]},p))})]}),h.jsxs(l8,{children:[h.jsx(c8,{children:r.fullDesc}),r.publisher&&h.jsxs(Mv,{children:[h.jsx(Ov,{children:"Wydawca"}),h.jsx(u8,{children:r.publisher})]}),r.links&&r.links.length>0&&h.jsxs(Mv,{children:[h.jsx(Ov,{children:"Dodatkowe informacje"}),h.jsx(d8,{children:r.links.map((m,p)=>h.jsx(f8,{children:h.jsxs(h8,{href:m.url,target:"_blank",rel:"noopener noreferrer",children:[m.name,h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})},p))})]})]})]}),h.jsx(m8,{children:h.jsxs(p8,{to:"/publications",children:[h.jsx(g8,{children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),"Powrót do listy publikacji"]})})]})}),h.jsx(y8,{children:h.jsxs("div",{className:"container",children:[h.jsx(v8,{children:"Inne publikacje"}),h.jsx(x8,{children:qo.filter(m=>m.id!==r.id).slice(0,2).map(m=>h.jsxs(b8,{to:`/publications/${m.slug}`,whileHover:{y:-5},children:[h.jsxs(w8,{children:["                    ",h.jsx(ln,{src:m.coverImage||W("publication-placeholder.jpg"),alt:m.title,aspectRatio:"16:9",className:"related-publication-image",imgStyles:j8})]}),h.jsxs(z8,{children:[h.jsx(S8,{children:m.title}),h.jsx(k8,{children:m.type})]})]},m.id))})]})})]})},FD=x.header`
  background-color: var(--card-bg);
  padding: 6rem 0 3rem;
  margin-bottom: 3rem;
`,ID=x.div`
  max-width: 800px;
`,KD=x.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,ZD=x(ze)`
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--primary);
  }
`,QD=x.span`
  margin: 0 0.5rem;
  color: var(--text-secondary);
`,WD=x.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,JD=x.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,e8=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`,Pf=x.div`
  color: var(--text);
`,Uf=x.span`
  color: var(--text-secondary);
`,t8=x.div`
  margin-bottom: 4rem;
`,n8=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,i8=x.div``,a8=x.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: var(--card-bg);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`,r8=x.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--border);
    border-radius: 3px;
  }
`,o8=x.button`
  width: 80px;
  height: 80px;
  border: none;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  background: none;
  flex-shrink: 0;
  
  &:focus {
    outline: 2px solid var(--primary);
  }
`,s8=x(J.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--primary);
  border-radius: 4px;
  pointer-events: none; /* Ensures it doesn't interfere with clicks */
`,l8=x.div``,c8=x.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  white-space: pre-line;
`,Mv=x.div`
  margin-bottom: 2rem;
`,Ov=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
`,u8=x.div`
  font-size: 1.1rem;
`,d8=x.ul`
  list-style: none;
  padding: 0;
`,f8=x.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`,h8=x.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  
  svg {
    opacity: 0.7;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  &:hover {
    color: var(--secondary);
    
    svg {
      opacity: 1;
      transform: translateX(3px);
    }
  }
`,m8=x.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`,p8=x(ze)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  
  &:hover {
    color: var(--secondary);
  }
`,g8=x.div`
  display: flex;
  align-items: center;
`,y8=x.section`
  padding: 4rem 0;
  background-color: var(--card-bg);
`,v8=x.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`,x8=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,b8=x(J.create(ze))`
  display: block;
  color: var(--text);
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`,w8=x.div`
  height: 200px;
  overflow: hidden;
`,j8={transition:"transform 0.5s ease"},z8=x.div`
  padding: 1rem;
`,S8=x.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`,k8=x.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,T8=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`,A8=x.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,E8=({children:t,className:i="",animated:r=!0,...s})=>h.jsx(C8,{className:`gradient-text ${r?"animated":""} ${i}`,...s,children:t});x.h1`
  background: linear-gradient(90deg, 
    var(--primary), 
    var(--lavender-500),
    var(--accent), 
    var(--primary)
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 1.2s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  &.animated {
    animation: gradientFlow 8s ease infinite;
  }
  
  @keyframes gradientFlow {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
`;x.div`
  display: inline-block;
`;x.span`
  position: relative;
  z-index: 1;
  white-space: nowrap;
  
  &:before {
    content: '';
    position: absolute;
    left: -0.25em;
    right: -0.25em;
    top: 0;
    bottom: 0;
    background-color: var(--accent-light);
    z-index: -1;
    border-radius: 0.2em;
    transform: skew(-3deg);
  }
  
  &.color-primary:before {
    background-color: var(--accent-light);
  }
  
  &.color-secondary:before {
    background-color: var(--lavender-200);
  }
  
  &.color-accent:before {
    background-color: var(--accent);
    color: white;
  }
`;x(J.div)`
  display: inline-flex;
  flex-wrap: wrap;
  
  .word-wrapper {
    display: inline-block;
    margin-right: 0.25em;
  }
`;x.blockquote`
  position: relative;
  font-family: var(--font-heading);
  padding: 2rem;
  margin: 2rem 0;
  border-left: none;
  background-color: var(--card-bg);
  border-radius: 8px;
`;x.span`
  position: absolute;
  top: -1.5rem;
  left: 1rem;
  font-size: 5rem;
  color: var(--primary);
  opacity: 0.2;
  font-family: var(--font-heading);
  line-height: 1;
`;x.p`
  font-size: var(--font-size-lg);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;x.footer`
  font-size: var(--font-size-md);
  text-align: right;
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
  
  &:before {
    content: '— ';
    opacity: 0.7;
  }
`;x.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;x.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;x.span`
  color: var(--primary);
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;x.span`
  flex: 1;
`;x.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;x.div`
  height: 1px;
  flex-grow: 1;
  background: linear-gradient(90deg, 
    transparent, 
    var(--border), 
    var(--border), 
    transparent
  );
`;x.div`
  padding: 0 1rem;
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
  color: var(--text-secondary);
`;const C8=x.span`
  background: linear-gradient(90deg, 
    var(--primary), 
    var(--accent), 
    var(--lavender-500), 
    var(--primary)
  );
  background-size: 300% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &.animated {
    animation: textGradient 8s linear infinite;
  }
  
  @keyframes textGradient {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
`,D8=()=>{const t=Wa(),i=Wa(),r=Wa(),s=Wa(),l=Wa(),u=Wa(),[f,g]=$n({threshold:.2,triggerOnce:!0}),[m,p]=$n({threshold:.2,triggerOnce:!0}),[y,b]=$n({threshold:.2,triggerOnce:!0}),[j,z]=$n({threshold:.2,triggerOnce:!0}),[T,O]=$n({threshold:.2,triggerOnce:!0}),[L,C]=$n({threshold:.2,triggerOnce:!0});return S.useEffect(()=>{g&&t.start({opacity:1,y:0,transition:{duration:.8}}),p&&i.start({opacity:1,y:0,transition:{duration:.8}}),b&&r.start({opacity:1,y:0,transition:{duration:.8}}),z&&s.start({opacity:1,y:0,transition:{duration:.8}}),O&&l.start({opacity:1,y:0,transition:{duration:.8}}),C&&u.start({opacity:1,y:0,transition:{duration:.8}})},[g,p,b,z,O,C,t,i,r,s,l,u]),h.jsxs(h.Fragment,{children:["      ",h.jsx(ca,{title:"O Fundacji FLID",description:"Poznaj Fundację Ludzie-Innowacje-Design - nasza misja, zespół oraz historia działalności w obszarze zrównoważonego designu.",keywords:"fundacja flid, zespół, misja, design, o nas, zrównoważony rozwój",canonical:"/about"}),h.jsx(R8,{children:h.jsxs(Wi,{children:[h.jsxs(M8,{children:[h.jsx(O8,{children:"Fundacja Ludzie-Innowacje-Design"}),h.jsxs(L8,{children:["Projektujemy ",h.jsx(E8,{children:"przyszłość"})," łącząc ludzi i innowacje"]}),h.jsx(B8,{children:"Działamy na rzecz społeczeństwa, środowiska i gospodarki poprzez projektowanie innowacyjnych, zrównoważonych rozwiązań. Łączymy ekspertów, projektantów i społeczności, aby wspólnie tworzyć lepszą przyszłość."})]}),"          ",h.jsxs(_8,{children:[h.jsx(ln,{src:W("placeholder.svg"),alt:"Fundacja FLID",aspectRatio:"16:9",priority:!0,className:"hero-image"}),h.jsx(N8,{})]})]})}),h.jsx(tr,{ref:f,children:h.jsxs(Wi,{children:["          ",h.jsx(J.div,{initial:{opacity:0,y:30},animate:t,children:h.jsxs(Lv,{$reverseOnMobile:!1,children:[h.jsxs(Bv,{children:[h.jsx(Ro,{children:"Nasza misja"}),h.jsxs(_v,{children:[h.jsx("p",{children:"Misją Fundacji Ludzie-Innowacje-Design jest wspieranie pozytywnej zmiany społecznej poprzez projektowanie innowacyjnych, zrównoważonych rozwiązań odpowiadających na rzeczywiste wyzwania współczesnego świata."}),h.jsx("p",{children:"Tworzymy platformę współpracy dla projektantów, badaczy, edukatorów i społeczności, aby wspólnie tworzyć lepszą przyszłość zarówno w wymiarze lokalnym, jak i globalnym."})]})]}),"              ",h.jsx(Nv,{children:h.jsx(vv,{height:"300px",text:"Misja Fundacji FLID",bgColor:"var(--primary-light)",textColor:"var(--primary)"})})]})})]})}),h.jsx(tr,{ref:m,children:h.jsx(Wi,{children:h.jsx(J.div,{initial:{opacity:0,y:30},animate:i,children:h.jsxs(Lv,{$reverseOnMobile:!0,children:["              ",h.jsx(Nv,{children:h.jsx(vv,{height:"300px",text:"Wizja Fundacji FLID",bgColor:"var(--secondary-light)",textColor:"var(--secondary)"})}),h.jsxs(Bv,{children:[h.jsx(Ro,{children:"Nasza wizja"}),h.jsxs(_v,{children:[h.jsx("p",{children:"Dążymy do świata, w którym design jest narzędziem pozytywnej zmiany społecznej, gdzie projektanci współpracują z różnymi interesariuszami, by tworzyć rozwiązania odpowiadające na rzeczywiste potrzeby ludzi, jednocześnie szanując ograniczenia planety."}),h.jsx("p",{children:"Chcemy, by myślenie projektowe stało się powszechnym narzędziem rozwiązywania problemów na różnych poziomach - od społeczności lokalnych po wyzwania globalne."})]})]})]})})})}),h.jsx(tr,{ref:y,children:h.jsx(Wi,{children:h.jsxs(J.div,{initial:{opacity:0,y:30},animate:r,children:[h.jsx(Ro,{$centered:!0,children:"Nasze wartości"}),h.jsxs(V8,{children:[h.jsxs(Bl,{children:[h.jsx(_l,{children:"🌱"}),h.jsx(Nl,{children:"Zrównoważony rozwój"}),h.jsx(Vl,{children:"Projektujemy z myślą o przyszłych pokoleniach, uwzględniając potrzeby społeczne, ekonomiczne i środowiskowe."})]}),h.jsxs(Bl,{children:[h.jsx(_l,{children:"🤝"}),h.jsx(Nl,{children:"Współpraca"}),h.jsx(Vl,{children:"Wierzymy w siłę wspólnego działania i łączenia różnych perspektyw w procesie projektowym."})]}),h.jsxs(Bl,{children:[h.jsx(_l,{children:"💡"}),h.jsx(Nl,{children:"Innowacyjność"}),h.jsx(Vl,{children:"Poszukujemy nowych, nieoczywistych rozwiązań, które mogą przynieść realną zmianę w otaczającym nas świecie."})]}),h.jsxs(Bl,{children:[h.jsx(_l,{children:"♻️"}),h.jsx(Nl,{children:"Odpowiedzialność"}),h.jsx(Vl,{children:"Bierzemy odpowiedzialność za efekty naszych działań i ich wpływ na społeczeństwo i środowisko."})]})]})]})})}),h.jsx(tr,{ref:j,children:h.jsx(Wi,{children:h.jsxs(J.div,{initial:{opacity:0,y:30},animate:s,children:[h.jsx(Ro,{$centered:!0,children:"Nasz zespół"}),h.jsxs(P8,{children:[h.jsxs(Pl,{children:[h.jsx(Ul,{children:h.jsx(Ll,{name:"Anna Kowalska"})}),h.jsxs(Hl,{children:[h.jsx($l,{children:"Anna Kowalska"}),h.jsx(Yl,{children:"Prezes Zarządu"}),h.jsx(Gl,{children:"Ekspertka w dziedzinie designu usług i innowacji społecznych. Z wykształcenia projektantka i socjolożka, z pasją do zrównoważonego rozwoju."})]})]}),h.jsxs(Pl,{children:[h.jsx(Ul,{children:h.jsx(Ll,{name:"Jan Nowak"})}),h.jsxs(Hl,{children:[h.jsx($l,{children:"Jan Nowak"}),h.jsx(Yl,{children:"Koordynator projektów"}),h.jsx(Gl,{children:"Projektant z bogatym doświadczeniem w prowadzeniu interdyscyplinarnych zespołów. Specjalista w zakresie metodologii Design Thinking."})]})]}),h.jsxs(Pl,{children:[h.jsx(Ul,{children:h.jsx(Ll,{name:"Maria Wiśniewska"})}),h.jsxs(Hl,{children:[h.jsx($l,{children:"Maria Wiśniewska"}),h.jsx(Yl,{children:"Specjalistka ds. edukacji"}),h.jsx(Gl,{children:"Pedagożka z pasją do innowacyjnych metod nauczania. Prowadzi warsztaty i szkolenia z zakresu myślenia projektowego dla dzieci i młodzieży."})]})]}),h.jsxs(Pl,{children:[h.jsx(Ul,{children:h.jsx(Ll,{name:"Piotr Zieliński"})}),h.jsxs(Hl,{children:[h.jsx($l,{children:"Piotr Zieliński"}),h.jsx(Yl,{children:"Specjalista ds. komunikacji"}),h.jsx(Gl,{children:"Ekspert w dziedzinie strategii komunikacji i marketingu. Odpowiada za promocję działań Fundacji i budowanie relacji z partnerami."})]})]})]})]})})}),h.jsx(tr,{ref:T,children:h.jsx(Wi,{children:h.jsxs(J.div,{initial:{opacity:0,y:30},animate:l,children:[h.jsx(Ro,{$centered:!0,children:"Historia Fundacji"}),h.jsxs(U8,{children:[h.jsxs(Mo,{children:[h.jsx(Oo,{children:"2019"}),h.jsxs(Lo,{children:[h.jsx(Bo,{children:"Powstanie Fundacji"}),h.jsx(_o,{children:"Fundacja Ludzie-Innowacje-Design została powołana do życia przez grupę projektantów, edukatorów i aktywistów z Bielska-Białej."})]})]}),h.jsxs(Mo,{children:[h.jsx(Oo,{children:"2020"}),h.jsxs(Lo,{children:[h.jsx(Bo,{children:"Pierwsze projekty"}),h.jsx(_o,{children:'Zrealizowanie pierwszych projektów społecznych, w tym "Ławeczki Beskidzkiej" oraz uruchomienie "Artystycznej Chaty na Trzonce".'})]})]}),h.jsxs(Mo,{children:[h.jsx(Oo,{children:"2021"}),h.jsxs(Lo,{children:[h.jsx(Bo,{children:"Rozwój programów edukacyjnych"}),h.jsx(_o,{children:"Uruchomienie programu warsztatów Design Thinking dla szkół oraz stworzenie portalu D-spot.pl poświęconego designowi."})]})]}),h.jsxs(Mo,{children:[h.jsx(Oo,{children:"2022"}),h.jsxs(Lo,{children:[h.jsx(Bo,{children:"Międzynarodowa współpraca"}),h.jsx(_o,{children:'Rozpoczęcie współpracy z partnerami z Czech i Słowacji, organizacja międzynarodowych warsztatów "Energia Jutra".'})]})]}),h.jsxs(Mo,{children:[h.jsx(Oo,{children:"2023"}),h.jsxs(Lo,{children:[h.jsx(Bo,{children:"Otwarcie BB__Design Lab"}),h.jsx(_o,{children:"Uruchomienie laboratorium projektowego w Bielsku-Białej, przestrzeni dla kreatynych działań i współpracy."})]})]})]})]})})}),h.jsx(tr,{ref:L,children:h.jsx(Wi,{children:h.jsx(J.div,{initial:{opacity:0,y:30},animate:u,children:h.jsx(H8,{children:h.jsxs($8,{children:[h.jsx(lC,{level:2,children:"Dołącz do nas!"}),h.jsx(Y8,{children:"Jeśli podzielasz nasze wartości i chcesz wspólnie z nami projektować lepszą przyszłość, skontaktuj się z nami. Zawsze szukamy nowych współpracowników, wolontariuszy i partnerów."}),h.jsx(G8,{children:h.jsx(kh,{to:"/contact",children:"Skontaktuj się z nami"})})]})})})})})]})},Wi=x.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,R8=x.section`
  padding: 6rem 0 4rem;
  margin-bottom: 2rem;
  overflow: hidden;
  animation: fadeIn 0.8s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (min-width: 992px) {
    padding: 8rem 0 6rem;
  }
`,M8=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin-bottom: 3rem;
  
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`,O8=x.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
  opacity: 0.9;
`,L8=x.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`,B8=x.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
`,_8=x.div`
  position: relative;
  max-width: 100%;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 992px) {
    margin-top: 0;
  }
    img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.7s ease-in-out;
  }
  
  &:hover img {
    transform: scale(1.05);
    filter: brightness(1.05);
  }
`,N8=x.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: var(--accent);
  opacity: 0.15;
  border-radius: 50%;
  bottom: -50px;
  right: -50px;
  z-index: 1;
`,tr=x.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`,Lv=x.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: ${({$reverseOnMobile:t})=>"1fr 1fr"};
    gap: 4rem;
    ${({$reverseOnMobile:t})=>t&&"direction: rtl;"}
  }
  
  & > * {
    direction: ltr;
  }
`,Bv=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ro=x.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--heading);
  text-align: ${({$centered:t})=>t?"center":"left"};
`,_v=x.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--text);
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`,Nv=x.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,V8=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,Bl=x.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover, &:focus-within {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`,_l=x.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Nl=x.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--heading);
`,Vl=x.p`
  color: var(--text-secondary);
  line-height: 1.6;
`,P8=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,Pl=x.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover, &:focus-within {
    transform: translateY(-10px);
  }
`,Ul=x.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
`,Hl=x.div`
  padding: 1.5rem;
`,$l=x.h3`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: var(--heading);
`,Yl=x.p`
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 1rem;
`,Gl=x.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,U8=x.div`
  position: relative;
  max-width: 800px;
  margin: 3rem auto 0;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--border);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`,Mo=x.div`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  
  &:nth-child(even) {
    justify-content: flex-start;
    
    @media (max-width: 768px) {
      justify-content: flex-end;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,Oo=x.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 20px;
    transform: translateX(-50%);
  }
`,Lo=x.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  width: 45%;
  margin-top: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover, &:focus-within {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 50px);
    margin-left: 50px;
  }
`,Bo=x.h3`
  margin-bottom: 0.5rem;
  color: var(--heading);
`,_o=x.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,H8=x.div`
  background: linear-gradient(135deg, var(--primary-light) 0%, transparent 100%);
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  
  &:before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: var(--accent-light);
    opacity: 0.3;
    top: -100px;
    right: -100px;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: var(--primary-light);
    opacity: 0.3;
    bottom: -75px;
    left: -75px;
  }
`,$8=x.div`
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
`,Y8=x.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 1.5rem 0 2rem;
  color: var(--text);
`,G8=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`,q8=(t,i,r)=>{const[s,l]=S.useState(t),[u,f]=S.useState({}),[g,m]=S.useState(!1),[p,y]=S.useState(!1),[b,j]=S.useState(null);return{values:s,errors:u,generalError:b,isSubmitting:g,isSubmitted:p,handleChange:C=>{const{name:V,value:D,type:X,checked:P}=C.target;l({...s,[V]:X==="checkbox"?P:D}),u[V]&&f({...u,[V]:null})},handleBlur:C=>{const{name:V}=C.target,D=i?i({[V]:s[V]}):{};f({...u,...D})},handleSubmit:async C=>{C.preventDefault(),m(!0),j(null);const V=i?i(s):{};if(f(V),Object.keys(V).length===0)try{await r(s),y(!0)}catch(D){j(D.message||"Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.")}m(!1)},resetForm:()=>{l(t),f({}),y(!1),j(null)}}},X8=()=>{const t=y=>{const b={};return(!y.name||y.name.trim().length<3)&&(b.name="Imię i nazwisko są wymagane (min. 3 znaki)"),(!y.email||!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(y.email))&&(b.email="Wprowadź poprawny adres email"),(!y.message||y.message.trim().length<10)&&(b.message="Wiadomość jest wymagana (min. 10 znaków)"),b},i=async(y,{resetForm:b})=>{try{await new Promise(j=>setTimeout(j,1500)),console.log("Form submitted successfully:",y),b()}catch(j){return console.error("Error submitting form:",j),"Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie."}},{values:r,errors:s,generalError:l,isSubmitting:u,isSubmitted:f,handleChange:g,handleBlur:m,handleSubmit:p}=q8({name:"",email:"",phone:"",contactType:"",message:""},t,i);return h.jsxs(h.Fragment,{children:[h.jsx(ca,{title:"Kontakt - FLID Foundation",description:"Skontaktuj się z nami. FLID Foundation - Fundacja na rzecz rozwoju nauki, kultury i edukacji.",keywords:"kontakt, FLID Foundation, fundacja, nauka, kultura, edukacja"}),h.jsxs(F8,{children:[h.jsx(I8,{children:h.jsxs(J.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[h.jsx(K8,{children:"Kontakt"}),h.jsxs(Z8,{children:["Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania",h.jsx("br",{}),"i omówić możliwości współpracy"]})]})}),h.jsx(Q8,{children:h.jsxs(W8,{children:[h.jsxs(J8,{as:J.div,initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2},children:[h.jsxs(e9,{children:[h.jsx(t9,{children:"Informacje kontaktowe"}),h.jsx(n9,{children:"Skontaktuj się z nami w dowolny sposób, który jest dla Ciebie najwygodniejszy. Odpowiemy tak szybko, jak to możliwe."})]}),h.jsxs(ql,{children:[h.jsx(Xl,{children:"Adres email"}),h.jsx(Fl,{children:"kontakt@flidfoundation.org"})]}),h.jsxs(ql,{children:[h.jsx(Xl,{children:"Telefon"}),h.jsx(Fl,{children:"+48 123 456 789"})]}),h.jsxs(ql,{children:[h.jsx(Xl,{children:"Adres"}),h.jsxs(Fl,{children:["ul. Przykładowa 123",h.jsx("br",{}),"00-001 Warszawa",h.jsx("br",{}),"Polska"]})]}),h.jsxs(ql,{children:[h.jsx(Xl,{children:"Godziny pracy"}),h.jsxs(Fl,{children:["Poniedziałek - Piątek: 9:00 - 17:00",h.jsx("br",{}),"Sobota - Niedziela: Zamknięte"]})]})]}),h.jsxs(i9,{as:J.div,initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.4},children:[h.jsx(a9,{children:"Wyślij wiadomość"}),h.jsxs(r9,{onSubmit:p,children:[h.jsxs(o9,{children:[h.jsxs(Il,{type:"button",$active:r.contactType==="general",onClick:()=>g({target:{name:"contactType",value:"general"}}),children:[h.jsx(Kl,{children:"Zapytanie ogólne"}),h.jsx(Zl,{children:"Pytania dotyczące naszej działalności"})]}),h.jsxs(Il,{type:"button",$active:r.contactType==="partnership",onClick:()=>g({target:{name:"contactType",value:"partnership"}}),children:[h.jsx(Kl,{children:"Współpraca"}),h.jsx(Zl,{children:"Propozycje partnerstwa i współpracy"})]}),h.jsxs(Il,{type:"button",$active:r.contactType==="project",onClick:()=>g({target:{name:"contactType",value:"project"}}),children:[h.jsx(Kl,{children:"Projekt"}),h.jsx(Zl,{children:"Informacje o projektach i programach"})]}),h.jsxs(Il,{type:"button",$active:r.contactType==="media",onClick:()=>g({target:{name:"contactType",value:"media"}}),children:[h.jsx(Kl,{children:"Media"}),h.jsx(Zl,{children:"Zapytania prasowe i medialne"})]})]}),h.jsxs(s9,{children:[h.jsxs(Ql,{children:[h.jsx(Wl,{children:"Imię i nazwisko *"}),h.jsx(Hf,{type:"text",name:"name",value:r.name,onChange:g,onBlur:m,$hasError:s.name,placeholder:"Wprowadź swoje imię i nazwisko"}),s.name&&h.jsx(Jl,{children:s.name})]}),h.jsxs(Ql,{children:[h.jsx(Wl,{children:"Email *"}),h.jsx(Hf,{type:"email",name:"email",value:r.email,onChange:g,onBlur:m,$hasError:s.email,placeholder:"twoj@email.com"}),s.email&&h.jsx(Jl,{children:s.email})]})]}),h.jsxs(Ql,{children:[h.jsx(Wl,{children:"Telefon"}),h.jsx(Hf,{type:"tel",name:"phone",value:r.phone,onChange:g,placeholder:"+48 123 456 789"})]}),h.jsxs(Ql,{children:[h.jsx(Wl,{children:"Wiadomość *"}),h.jsx(l9,{name:"message",value:r.message,onChange:g,onBlur:m,$hasError:s.message,placeholder:"Opisz szczegółowo swoje zapytanie lub propozycję...",rows:6}),s.message&&h.jsx(Jl,{children:s.message})]}),l&&h.jsx(Jl,{children:l}),f&&!l&&h.jsx(c9,{children:"Dziękujemy za wiadomość! Odpowiemy tak szybko, jak to możliwe."}),h.jsx(u9,{type:"submit",disabled:u,$isLoading:u,children:u?"Wysyłanie...":"Wyślij wiadomość"})]})]})]})})]})]})},F8=x.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
  transition: background-color 0.3s ease, color 0.3s ease;
`,I8=x.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 120px 60px;
  text-align: center;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 80px 30px;
    min-height: 40vh;
  }
`,K8=x.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 200;
  letter-spacing: -0.02em;
  margin: 0 0 40px 0;
  color: var(--text);
  line-height: 0.9;
  transition: color 0.3s ease;
`,Z8=x.p`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 300;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  transition: color 0.3s ease;
`,Q8=x.section`
  padding: 120px 60px;
  
  @media (max-width: 768px) {
    padding: 80px 30px;
  }
`,W8=x.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 120px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
`,J8=x.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`,e9=x.div`
  margin-bottom: 20px;
`,t9=x.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 30px 0;
  color: var(--text);
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
`,n9=x.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
  transition: color 0.3s ease;
`,ql=x.div`
  border-left: 2px solid var(--text);
  padding-left: 30px;
  transition: border-color 0.3s ease;
`,Xl=x.h3`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin: 0 0 15px 0;
  transition: color 0.3s ease;
`,Fl=x.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text);
  font-weight: 300;
  transition: color 0.3s ease;
`,i9=x.div`
  background: var(--surface);
  padding: 80px;
  border: 1px solid var(--border);
  transition: background-color 0.3s ease, border-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`,a9=x.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 60px 0;
  color: var(--text);
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
`,r9=x.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,o9=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Il=x.button`
  padding: 30px;
  text-align: left;
  background: ${t=>t.$active?"var(--text)":"var(--background)"};
  color: ${t=>t.$active?"var(--background)":"var(--text)"};
  border: 2px solid ${t=>t.$active?"var(--text)":"var(--border)"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--text);
    background: ${t=>t.$active?"var(--text-secondary)":"var(--surface)"};
  }
`,Kl=x.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 10px 0;
`,Zl=x.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
  line-height: 1.4;
`,s9=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Ql=x.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Wl=x.label`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  transition: color 0.3s ease;
`,Hf=x.input`
  padding: 20px 0;
  font-size: 1.1rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${t=>t.$hasError?"#dc3545":"var(--border)"};
  color: var(--text);
  transition: border-color 0.3s ease, color 0.3s ease;
  
  &:focus {
    outline: none;
    border-bottom-color: var(--text);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`,l9=x.textarea`
  padding: 20px 0;
  font-size: 1.1rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${t=>t.$hasError?"#dc3545":"var(--border)"};
  color: var(--text);
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.3s ease, color 0.3s ease;
  
  &:focus {
    outline: none;
    border-bottom-color: var(--text);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`,Jl=x.span`
  font-size: 0.9rem;
  color: #dc3545;
  margin-top: -10px;
`,c9=x.div`
  padding: 20px;
  background: var(--success-bg, #d4edda);
  color: var(--success-text, #155724);
  border: 1px solid var(--success-border, #c3e6cb);
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`,u9=x.button`
  padding: 25px 50px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: ${t=>t.$isLoading?"var(--text-muted)":"var(--text)"};
  color: var(--background);
  border: none;
  cursor: ${t=>t.disabled?"not-allowed":"pointer"};
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 20px;
  
  &:hover:not(:disabled) {
    background: var(--text-secondary);
  }
`,d9=fw`
  :root {
    /* Nowa wyrafinowana paleta kolorów w odcieniach fioletu i neutralnych */
    --background: #FFFFFF;
    --background-alt: #F9F8FC;
    --background-translucent: rgba(255, 255, 255, 0.92);
    --text: #242435;
    --text-secondary: #4A4A5A;
    --text-light: #76768A;
    
    /* Nowa wyrafinowana paleta kolorów fioletowych */
    --primary: #9B8DCC; /* Bardziej stonowany, elegancki fiolet */
    --primary-rgb: 155, 141, 204;
    --secondary: #B2A6DE; /* Jaśniejszy fiolet */
    --accent: #7C6FBB; /* Bardziej nasycony fiolet */
    --accent-rgb: 124, 111, 187;
    --accent-light: #E9E5F8; /* Bardzo jasny fiolet */
    --accent-dark: #5E5294; /* Głęboki fiolet */
      /* Eleganckie odcienie fioletu dla gradientów */
    --lavender-100: #F6F4FC; /* Bardzo jasny fiolet */
    --lavender-200: #E9E5F8; /* Jasny fiolet */
    --lavender-300: #D1CBEB; /* Średni jasny fiolet */
    --lavender-400: #B2A6DE; /* Średni fiolet */
    --lavender-500: #9B8DCC; /* Bazowy fiolet */
    --lavender-600: #7C6FBB; /* Głęboki fiolet */
    --lavender-700: #5E5294; /* Bardzo głęboki fiolet */
    --lavender-rgb: 155, 141, 204; /* RGB values for lavender */
    --lavender-glow: rgba(155, 141, 204, 0.25); /* Dla delikatnych efektów glow */
    
    /* Neutralne kolory dla eleganckich kontrastów */
    --neutral-100: #FFFFFF;
    --neutral-200: #F9F8FC;
    --neutral-300: #F0EFF5;
    --neutral-400: #E2E1EA;
    --neutral-500: #C9C8D6;
    --neutral-600: #A2A1B4;
    --neutral-700: #76768A;
    
    --border: #E8E7F0;
    --card-bg: #FAFAFA;
    
    /* Nowoczesne czcionki */
    --font-heading: 'Playfair Display', serif; /* Elegancka czcionka dla nagłówków */
    --font-serif: 'Cormorant Garamond', serif; /* Wyrafinowana czcionka dla akcentów */
    --font-body: 'Montserrat', sans-serif; /* Czytelna czcionka dla treści */
    
    /* Przestrzenie i wielkości z poprawioną obsługą wyświetlaczy HD */
    --content-width: 85%;
    --max-content-width: 2200px;
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --space-xxl: 4rem;
    
    /* Premium transitions with sophisticated easing */
    --transition-fast: 0.2s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    --transition-normal: 0.4s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    --transition-slow: 0.7s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    --transition-multiplier: 1;
    --blur-quality: 3px;
    
    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
  }
    /* Globalne style */
  html {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  body {
    background-color: var(--background);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.6;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Scrollbar positioning fix for fixed navbar */
  /*
  html {
    // Adjust scrollbar to start below the fixed navbar
    scrollbar-gutter: stable;
    scroll-padding-top: 80px; // Height of fixed navbar
  }

  // Additional scrollbar positioning for webkit browsers
  ::-webkit-scrollbar {
    width: 17px; // Standard scrollbar width
  }

  ::-webkit-scrollbar-track {
    background: var(--neutral-200);
    // margin-top: 80px; // Start scrollbar track below navbar // Commented out
  }

  ::-webkit-scrollbar-thumb {
    background: var(--neutral-400);
    border-radius: 0;
    border: 3px solid var(--neutral-200);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--neutral-500);
  }

  // Firefox scrollbar positioning
  html {
    scrollbar-width: auto;
    scrollbar-color: var(--neutral-400) var(--neutral-200);
  }
  */
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 500;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--text);
    letter-spacing: -0.01em;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }
  
  h2 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.875rem;
    }
  }
  
  h3 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: var(--font-body);
  }
  
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--accent-dark);
    }
  }
  
  .container {
    width: var(--content-width);
    max-width: var(--max-content-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .section {
    padding: 5rem 0;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
  }
  
  /* Eleganckie przyciski */
  button, .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid transparent;
    transition: all var(--transition-normal);
    cursor: pointer;
    
    &.primary {
      background-color: var(--primary);
      color: white;
      
      &:hover {
        background-color: var(--accent);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(var(--accent-rgb), 0.3);
      }
    }
    
    &.secondary {
      background-color: transparent;
      color: var(--accent);
      border: 1px solid var(--accent);
      
      &:hover {
        background-color: var(--accent-light);
        transform: translateY(-2px);
      }
    }
    
    &.text {
      background-color: transparent;
      color: var(--accent);
      padding: 0.5rem 0;
      
      &:hover {
        color: var(--accent-dark);
      }
    }
  }
  
  /* Styl dla kart */
  .card {
    background-color: var(--neutral-100);
    border-radius: 4px;
    overflow: hidden;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }
  
  /* Styl dla sekcji */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    
    h2 {
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.125rem;
      color: var(--text-light);
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  /* Efekty cienia i eleganckiego hover */
  .shadow-effect {
    transition: box-shadow var(--transition-normal), transform var(--transition-normal);
    
    &:hover {
      box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.15);
      transform: translateY(-5px);
    }
  }
  
  /* Płynne przejścia stron */
  /*
  .page-transition-container {
    opacity: 0;
    animation: fadeIn 0.7s cubic-bezier(0.19, 1.0, 0.22, 1.0) forwards;
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  */
    /* Animowane tła - elegancki gradient */
  .gradient-bg {
    background: linear-gradient(135deg, var(--lavender-300), var(--lavender-500));
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
  
  /* Stylowe ramki */
  .border-accent {
    border: 1px solid var(--neutral-400);
    transition: border-color var(--transition-fast);
    
    &:hover {
      border-color: var(--accent);
    }
  }    /* Dark mode styles */
  html.dark {
    --background: #1A1A2E;
    --background-rgb: 26, 26, 46;
    --background-alt: #222236;
    --background-translucent: rgba(26, 26, 46, 0.92);
    --text: #F0F0F8;
    --text-secondary: #C8C8D8;
    --text-light: #A0A0B0;
    
    --border: #2D2D45;
    --card-bg: #222236;
    --card-bg-rgb: 34, 34, 54;
    
    --primary: #9B8DCC;
    --primary-rgb: 155, 141, 204;
    --secondary: #7C6FBB;
    --accent: #B2A6DE;
    --accent-rgb: 178, 166, 222;
    --accent-light: #454460;
    --accent-dark: #C5BBEB;
    
    --lavender-100: #2D2D45;
    --lavender-200: #38384F;
    --lavender-300: #454460;
    --lavender-400: #565475;    --lavender-500: #6D6A94;
    --lavender-600: #8D89B8;
    --lavender-700: #B2A6DE;
    --lavender-rgb: 109, 106, 148;
    
    --neutral-100: #1A1A2E;
    --neutral-200: #222236;
    --neutral-300: #2D2D45;
    --neutral-400: #38384F;
    --neutral-500: #4D4D65;
    --neutral-600: #7A7A95;
    --neutral-700: #A0A0B0;

    /* Dark mode scrollbar colors */
    scrollbar-color: var(--neutral-500) var(--neutral-300);
  }

  /* Dark mode webkit scrollbar styling */
  /*
  html.dark ::-webkit-scrollbar-track {
    background: var(--neutral-300);
    // margin-top: 80px; // Start scrollbar track below navbar // Commented out
  }

  html.dark ::-webkit-scrollbar-thumb {
    background: var(--neutral-500);
    border: 3px solid var(--neutral-300);
  }

  html.dark ::-webkit-scrollbar-thumb:hover {
    background: var(--neutral-600);
  }
  */
`;x.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px; 
  background-color: ${t=>t.color};
  z-index: ${t=>t.zIndex};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: black;
  &:after {
    content: '${t=>t.name}';
    font-weight: bold;
    background: rgba(255,255,255,0.8);
    padding: 3px;
  }
`;x.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 10001;
  pointer-events: none;
`;const jw=Di`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-md);
  text-align: center;
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  z-index: 1;
  
  .btn-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .btn-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  .btn-glow {
    position: absolute;
    width: 50px;
    height: 100%;
    top: 0;
    left: -60px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transform: skewX(-20deg);
    animation: btnGlow 5s infinite;
  }
  
  @keyframes btnGlow {
    0% {
      left: -60px;
    }
    20% {
      left: 120%;
    }
    100% {
      left: 120%;
    }
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(210, 205, 232, 0.3);
  }
  
  &:hover .btn-background {
    opacity: 1;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.btn-primary {
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%);
    color: white;
  }
  
  &.btn-secondary {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--text);
    
    &:hover {
      color: white;
    }
  }
  
  &.btn-ghost {
    background: transparent;
    color: var(--primary);
    
    &:hover {
      background: rgba(210, 205, 232, 0.1);
    }
  }
`;x.button`
  ${jw}
`;x(ze)`
  ${jw}
  text-decoration: none;
`;const zw=Di`
  position: relative;
  padding: 0.85rem 2rem;
  background: linear-gradient(90deg, var(--primary), var(--accent), var(--lavender-500));
  background-size: 200% auto;
  border-radius: 50px;
  border: none;
  color: white;
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(210, 205, 232, 0.4);
  
  .gradient-btn-text {
    position: relative;
    z-index: 2;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--lavender-500), var(--accent), var(--primary));
    background-size: 200% auto;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(210, 205, 232, 0.6);
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;x.button`
  ${zw}
`;x(ze)`
  ${zw}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;x.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.icon-btn-small {
    width: 2rem;
    height: 2rem;
    font-size: 0.85rem;
  }
  
  &.icon-btn-large {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.25rem;
  }
`;x(J.button)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  position: fixed;
  z-index: 100;
  overflow: hidden;
  
  &.fab-bottom-right {
    bottom: 2rem;
    right: 2rem;
  }
  
  &.fab-bottom-left {
    bottom: 2rem;
    left: 2rem;
  }
  
  &.fab-top-right {
    top: 2rem;
    right: 2rem;
  }
  
  &.fab-top-left {
    top: 2rem;
    left: 2rem;
  }
  
  .fab-ripple {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  &:active .fab-ripple {
    opacity: 0.3;
    transform: scale(2);
    transition: all 0s;
  }
`;const f9=hw`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`,Sw=Di`
  position: relative;
  padding: 0.85rem 2rem;
  background: transparent;
  color: var(--text);
  border: none;
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
  
  .border-line {
    position: absolute;
    background: var(--primary);
    transition: all 0.5s ease;
  }
  
  &:hover .border-line {
    animation: ${f9} 0.5s linear forwards;
  }
`;x.span`
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  transform-origin: left;
`;x.span`
  top: 0;
  right: 0;
  width: 2px;
  height: 0;
  transform-origin: top;
`;x.span`
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  transform-origin: right;
`;x.span`
  bottom: 0;
  left: 0;
  width: 2px;
  height: 0;
  transform-origin: bottom;
`;x.button`
  ${Sw}
  
  &:hover .border-top {
    animation-delay: 0s;
  }
  
  &:hover .border-right {
    animation-delay: 0.25s;
  }
  
  &:hover .border-bottom {
    animation-delay: 0.5s;
  }
  
  &:hover .border-left {
    animation-delay: 0.75s;
  }
`;x(ze)`
  ${Sw}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
  &:hover .border-top {
    animation-delay: 0s;
  }
  
  &:hover .border-right {
    animation-delay: 0.25s;
  }
  
  &:hover .border-bottom {
    animation-delay: 0.5s;
  }
  
  &:hover .border-left {
    animation-delay: 0.75s;
  }
`;const kw=Di`
  padding: 0.85rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 4px;
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(210, 205, 232, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;x.button`
  ${kw}
`;x(ze)`
  ${kw}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;const Tw=hw`
  0% { width: 0; left: 50%; }
  100% { width: 100%; left: 0; }
`,Aw=Di`
  background: none;
  border: none;
  color: var(--text);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;x.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
`;x.button`
  ${Aw}
  
  &:hover .text-line {
    animation: ${Tw} 0.4s forwards;
  }
`;x(ze)`
  ${Aw}
  text-decoration: none;
  display: inline-block;
  
  &:hover .text-line {
    animation: ${Tw} 0.4s forwards;
  }
`;x(J.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--card-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0),
              box-shadow 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;x.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 2;
  position: relative;
`;x.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
`;x(J.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
`;x(J.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  opacity: 0;
  z-index: 1;
`;x.div`
  padding: 1.5rem;
  flex-grow: 1;
`;x.div`
  margin-bottom: 0.75rem;
`;x.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
  line-height: 1.3;
`;x(ze)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  font-weight: var(--font-weight-medium);
  color: var(--accent-dark);
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: var(--accent-light);
    color: var(--accent-dark);
    
    svg {
      transform: translateX(5px);
    }
  }
`;x(J.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, var(--primary), var(--accent), var(--lavender-500), var(--primary));
    background-size: 400% 400%;
    animation: borderGradient 8s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  
  @keyframes borderGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;const h9=x(J.div)`
  position: relative;
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  will-change: transform;
  transform-style: preserve-3d;
  transition: box-shadow 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;x.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transform: translateZ(40px);
`;x.div`
  transform: translateZ(30px);
`;x.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
`;x(J.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    rgba(210, 205, 232, 0.1) 0%,
    transparent 80%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s;
  
  ${h9}:hover & {
    opacity: 1;
    --mouse-x: 50%;
    --mouse-y: 50%;
  }
`;x.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${t=>t.blurStrength||10}px);
  -webkit-backdrop-filter: blur(${t=>t.blurStrength||10}px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(210, 205, 232, 0.5),
      transparent
    );
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;x.div`
  position: relative;
  z-index: 1;
`;x.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;x.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 1rem;
`;x.div`
  perspective: 1000px;
  width: 100%;
  height: 300px;
  cursor: pointer;
`;x.div`
  position: relative;
  width: 100%;  height: 100%;
  transition: transform 0.8s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  transform-style: preserve-3d;
  transform: ${t=>t.$flipped?"rotateY(180deg)":"rotateY(0)"};
`;const Ew=x.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 2rem;
  background-color: var(--card-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;x(Ew)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;x(Ew)`
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(135deg, var(--lavender-300), var(--lavender-500));
  color: white;
`;x.div`
  position: relative;
  border-radius: 12px;
  background-color: var(--card-bg);
  padding: 2rem;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, var(--primary), var(--accent), var(--lavender-500), var(--primary));
    background-size: 300% 300%;
    animation: borderGradient 8s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @keyframes borderGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;x.div`
  position: relative;
  z-index: 1;
`;x.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  margin-bottom: 1rem;
`;const Ji=({children:t})=>{const i={initial:{opacity:0},animate:{opacity:1,transition:{duration:.4,ease:"easeOut"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}}};return h.jsx(J.div,{initial:"initial",animate:"animate",exit:"exit",variants:i,style:{width:"100%",backgroundColor:"var(--background)"},children:t})},m9=({setIsTransitioning:t})=>{const i=un();return S.useEffect(()=>{t==null||t(!0);const r=setTimeout(()=>{t==null||t(!1)},400);return()=>clearTimeout(r)},[i,t]),h.jsx("div",{className:"animated-routes-container",children:h.jsx(Ei,{mode:"wait",initial:!1,onExitComplete:()=>{window.scrollTo(0,0)},children:h.jsxs(Kz,{location:i,children:[h.jsx(ji,{path:"/",element:h.jsx(Ji,{children:h.jsx(eC,{})})}),h.jsx(ji,{path:"/projects",element:h.jsx(Ji,{children:h.jsx(dC,{})})}),h.jsx(ji,{path:"/projects/:slug",element:h.jsx(Ji,{children:h.jsx($C,{})})}),h.jsx(ji,{path:"/publications",element:h.jsx(Ji,{children:h.jsx(SD,{})})}),h.jsx(ji,{path:"/publications/:slug",element:h.jsx(Ji,{children:h.jsx(XD,{})})}),h.jsx(ji,{path:"/about",element:h.jsx(Ji,{children:h.jsx(D8,{})})}),h.jsx(ji,{path:"/contact",element:h.jsx(Ji,{children:h.jsx(X8,{})})})]},i.pathname)})})},Vv=()=>{const t=Tc();return S.useEffect(()=>{const r=new URLSearchParams(window.location.search).get("redirect");if(r){const s=window.location.pathname;window.history.replaceState({},"",s),t(r,{replace:!0})}},[t]),null};function p9(){const[t,i]=S.useState(!1);return h.jsx(ux,{children:h.jsxs(C5,{children:[h.jsx(d9,{}),"        ",h.jsxs(x5,{basename:"/flid",children:[h.jsx(Vv,{}),h.jsx(n6,{isTransitioning:t}),h.jsxs(JE,{children:[h.jsx(Vv,{}),h.jsx(m9,{setIsTransitioning:i})]})]})]})})}class g9{constructor(){this.isReducedMotion=this.checkReducedMotion(),this.isLowPowerMode=this.checkLowPowerMode(),this.reduceAnimations=this.isReducedMotion||this.isLowPowerMode,this.applyOptimizations(),this.addMediaQueryListeners()}checkReducedMotion(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}checkLowPowerMode(){return typeof window>"u"||"getBattery"in navigator&&navigator.getBattery().then(i=>{i.level<.2&&!i.charging&&(this.isLowPowerMode=!0,this.applyOptimizations())}).catch(()=>{}),!1}applyOptimizations(){typeof document>"u"||(document.documentElement.style.setProperty("--animation-duration-multiplier",this.reduceAnimations?"0.5":"1"),document.documentElement.style.setProperty("--animation-enabled",this.reduceAnimations?"0":"1"),document.documentElement.style.setProperty("--blur-enabled",this.reduceAnimations?"0":"1"),document.documentElement.style.setProperty("--blur-strength",this.reduceAnimations?"0px":"var(--blur-quality, 5px)"),document.documentElement.style.setProperty("--effects-level",this.reduceAnimations?"0":"1"),this.reduceAnimations&&(document.body.classList.add("reduced-animations"),document.body.classList.add("performance-optimized")))}addMediaQueryListeners(){typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",i=>{this.isReducedMotion=i.matches,this.reduceAnimations=this.isReducedMotion||this.isLowPowerMode,this.applyOptimizations()})}}typeof window<"u"&&new g9;class y9{constructor(){this.addEventListeners(),this.detectDisplaySize()}detectDisplaySize(){const i=window.screen.width,r=window.screen.height,s=document.body;i>=3840||r>=2160?(s.classList.add("ultra-hd-display"),s.classList.add("hd-display")):(i>=1920||r>=1080)&&s.classList.add("hd-display")}optimizeForDisplayType(){document.documentElement.style.setProperty("--transition-multiplier","1.0"),document.documentElement.style.setProperty("--blur-quality","0px")}enhanceNavigationTransitions(){document.querySelectorAll('a[href^="/"]').forEach(r=>{r.addEventListener("click",s=>{if(!s.ctrlKey&&!s.metaKey){const l=window.location.pathname,u=r.getAttribute("href");l!==u&&(document.documentElement.classList.add("page-transition-active"),setTimeout(()=>{document.documentElement.classList.remove("page-transition-active")},700))}})})}addEventListeners(){window.addEventListener("DOMContentLoaded",()=>{this.detectDisplaySize(),this.optimizeForDisplayType(),this.enhanceNavigationTransitions()}),window.addEventListener("resize",()=>{this.detectDisplaySize(),this.optimizeForDisplayType()})}}let Pv;typeof window<"u"&&!Pv&&(Pv=new y9);const v9=()=>{if(typeof document>"u")return;const t=[W("partners/partner1.svg"),W("partners/partner2.svg")],i=r=>{let s=0;r.forEach(l=>{setTimeout(()=>{const u=new Image;u.fetchPriority="high",u.loading="eager",u.src=l},s),s+=100})};navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))?console.debug("[Preloader] Data-saving or slow connection detected, limiting preloads"):i(t)},x9=()=>{const t=window.devicePixelRatio||1;document.documentElement.style.setProperty("--device-pixel-ratio",t),document.documentElement.style.setProperty("--blur-quality","0px")},b9=()=>{document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll('.creative-navbar a[href^="/#"], .creative-navbar a[href^="#"]').forEach(i=>{i.addEventListener("click",r=>{var g;const s=i.getAttribute("href"),l=s.startsWith("#"),u=s.replace(/\/?#/,""),f=document.getElementById(u);if(f){r.preventDefault(),i.classList.add("scrolling-active");const m=((g=document.querySelector(".creative-navbar"))==null?void 0:g.offsetHeight)||80,p=f.getBoundingClientRect().top+window.pageYOffset-m-20;window.scrollTo({top:p,behavior:"smooth"}),setTimeout(()=>{i.classList.remove("scrolling-active")},1e3);const y=l?`#${u}`:`/#${u}`;history.pushState(null,null,y)}})})})};v9();x9();b9();iz.createRoot(document.getElementById("root")).render(h.jsx(nt.StrictMode,{children:h.jsx(p9,{})}));
