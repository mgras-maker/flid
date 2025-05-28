var Gj=Object.defineProperty;var qj=(t,i,r)=>i in t?Gj(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r;var Vn=(t,i,r)=>qj(t,typeof i!="symbol"?i+"":i,r);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();function es(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jd={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function Xj(){if(gy)return jo;gy=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var g in l)g!=="key"&&(u[g]=l[g])}else u=l;return l=u.ref,{$$typeof:t,type:s,key:f,ref:l!==void 0?l:null,props:u}}return jo.Fragment=i,jo.jsx=r,jo.jsxs=r,jo}var yy;function Fj(){return yy||(yy=1,Jd.exports=Xj()),Jd.exports}var h=Fj(),ef={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function Ij(){if(vy)return fe;vy=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function j(A){return A===null||typeof A!="object"?null:(A=b&&A[b]||A["@@iterator"],typeof A=="function"?A:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,O={};function L(A,G,Z){this.props=A,this.context=G,this.refs=O,this.updater=Z||z}L.prototype.isReactComponent={},L.prototype.setState=function(A,G){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,G,"setState")},L.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function C(){}C.prototype=L.prototype;function V(A,G,Z){this.props=A,this.context=G,this.refs=O,this.updater=Z||z}var D=V.prototype=new C;D.constructor=V,T(D,L.prototype),D.isPureReactComponent=!0;var X=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function K(A,G,Z,Q,ne,me){return Z=me.ref,{$$typeof:t,type:A,key:G,ref:Z!==void 0?Z:null,props:me}}function J(A,G){return K(A.type,G,void 0,void 0,void 0,A.props)}function se(A){return typeof A=="object"&&A!==null&&A.$$typeof===t}function xe(A){var G={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Z){return G[Z]})}var Le=/\/+/g;function Be(A,G){return typeof A=="object"&&A!==null&&A.key!=null?xe(""+A.key):G.toString(36)}function jt(){}function xt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(jt,jt):(A.status="pending",A.then(function(G){A.status==="pending"&&(A.status="fulfilled",A.value=G)},function(G){A.status==="pending"&&(A.status="rejected",A.reason=G)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function $e(A,G,Z,Q,ne){var me=typeof A;(me==="undefined"||me==="boolean")&&(A=null);var ae=!1;if(A===null)ae=!0;else switch(me){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(A.$$typeof){case t:case i:ae=!0;break;case y:return ae=A._init,$e(ae(A._payload),G,Z,Q,ne)}}if(ae)return ne=ne(A),ae=Q===""?"."+Be(A,0):Q,X(ne)?(Z="",ae!=null&&(Z=ae.replace(Le,"$&/")+"/"),$e(ne,G,Z,"",function(re){return re})):ne!=null&&(se(ne)&&(ne=J(ne,Z+(ne.key==null||A&&A.key===ne.key?"":(""+ne.key).replace(Le,"$&/")+"/")+ae)),G.push(ne)),1;ae=0;var Qe=Q===""?".":Q+":";if(X(A))for(var q=0;q<A.length;q++)Q=A[q],me=Qe+Be(Q,q),ae+=$e(Q,G,Z,me,ne);else if(q=j(A),typeof q=="function")for(A=q.call(A),q=0;!(Q=A.next()).done;)Q=Q.value,me=Qe+Be(Q,q++),ae+=$e(Q,G,Z,me,ne);else if(me==="object"){if(typeof A.then=="function")return $e(xt(A),G,Z,Q,ne);throw G=String(A),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return ae}function U(A,G,Z){if(A==null)return A;var Q=[],ne=0;return $e(A,Q,"","",function(me){return G.call(Z,me,ne++)}),Q}function I(A){if(A._status===-1){var G=A._result;G=G(),G.then(function(Z){(A._status===0||A._status===-1)&&(A._status=1,A._result=Z)},function(Z){(A._status===0||A._status===-1)&&(A._status=2,A._result=Z)}),A._status===-1&&(A._status=0,A._result=G)}if(A._status===1)return A._result.default;throw A._result}var ee=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function de(){}return fe.Children={map:U,forEach:function(A,G,Z){U(A,function(){G.apply(this,arguments)},Z)},count:function(A){var G=0;return U(A,function(){G++}),G},toArray:function(A){return U(A,function(G){return G})||[]},only:function(A){if(!se(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},fe.Component=L,fe.Fragment=r,fe.Profiler=l,fe.PureComponent=V,fe.StrictMode=s,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,fe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return P.H.useMemoCache(A)}},fe.cache=function(A){return function(){return A.apply(null,arguments)}},fe.cloneElement=function(A,G,Z){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Q=T({},A.props),ne=A.key,me=void 0;if(G!=null)for(ae in G.ref!==void 0&&(me=void 0),G.key!==void 0&&(ne=""+G.key),G)!F.call(G,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&G.ref===void 0||(Q[ae]=G[ae]);var ae=arguments.length-2;if(ae===1)Q.children=Z;else if(1<ae){for(var Qe=Array(ae),q=0;q<ae;q++)Qe[q]=arguments[q+2];Q.children=Qe}return K(A.type,ne,void 0,void 0,me,Q)},fe.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},fe.createElement=function(A,G,Z){var Q,ne={},me=null;if(G!=null)for(Q in G.key!==void 0&&(me=""+G.key),G)F.call(G,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ne[Q]=G[Q]);var ae=arguments.length-2;if(ae===1)ne.children=Z;else if(1<ae){for(var Qe=Array(ae),q=0;q<ae;q++)Qe[q]=arguments[q+2];ne.children=Qe}if(A&&A.defaultProps)for(Q in ae=A.defaultProps,ae)ne[Q]===void 0&&(ne[Q]=ae[Q]);return K(A,me,void 0,void 0,null,ne)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(A){return{$$typeof:g,render:A}},fe.isValidElement=se,fe.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:I}},fe.memo=function(A,G){return{$$typeof:p,type:A,compare:G===void 0?null:G}},fe.startTransition=function(A){var G=P.T,Z={};P.T=Z;try{var Q=A(),ne=P.S;ne!==null&&ne(Z,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(de,ee)}catch(me){ee(me)}finally{P.T=G}},fe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},fe.use=function(A){return P.H.use(A)},fe.useActionState=function(A,G,Z){return P.H.useActionState(A,G,Z)},fe.useCallback=function(A,G){return P.H.useCallback(A,G)},fe.useContext=function(A){return P.H.useContext(A)},fe.useDebugValue=function(){},fe.useDeferredValue=function(A,G){return P.H.useDeferredValue(A,G)},fe.useEffect=function(A,G,Z){var Q=P.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(A,G)},fe.useId=function(){return P.H.useId()},fe.useImperativeHandle=function(A,G,Z){return P.H.useImperativeHandle(A,G,Z)},fe.useInsertionEffect=function(A,G){return P.H.useInsertionEffect(A,G)},fe.useLayoutEffect=function(A,G){return P.H.useLayoutEffect(A,G)},fe.useMemo=function(A,G){return P.H.useMemo(A,G)},fe.useOptimistic=function(A,G){return P.H.useOptimistic(A,G)},fe.useReducer=function(A,G,Z){return P.H.useReducer(A,G,Z)},fe.useRef=function(A){return P.H.useRef(A)},fe.useState=function(A){return P.H.useState(A)},fe.useSyncExternalStore=function(A,G,Z){return P.H.useSyncExternalStore(A,G,Z)},fe.useTransition=function(){return P.H.useTransition()},fe.version="19.1.0",fe}var xy;function Th(){return xy||(xy=1,ef.exports=Ij()),ef.exports}var S=Th();const tt=es(S);var tf={exports:{}},zo={},nf={exports:{}},af={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function Kj(){return by||(by=1,function(t){function i(U,I){var ee=U.length;U.push(I);e:for(;0<ee;){var de=ee-1>>>1,A=U[de];if(0<l(A,I))U[de]=I,U[ee]=A,ee=de;else break e}}function r(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var I=U[0],ee=U.pop();if(ee!==I){U[0]=ee;e:for(var de=0,A=U.length,G=A>>>1;de<G;){var Z=2*(de+1)-1,Q=U[Z],ne=Z+1,me=U[ne];if(0>l(Q,ee))ne<A&&0>l(me,Q)?(U[de]=me,U[ne]=ee,de=ne):(U[de]=Q,U[Z]=ee,de=Z);else if(ne<A&&0>l(me,ee))U[de]=me,U[ne]=ee,de=ne;else break e}}return I}function l(U,I){var ee=U.sortIndex-I.sortIndex;return ee!==0?ee:U.id-I.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();t.unstable_now=function(){return f.now()-g}}var m=[],p=[],y=1,b=null,j=3,z=!1,T=!1,O=!1,L=!1,C=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function X(U){for(var I=r(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=U)s(p),I.sortIndex=I.expirationTime,i(m,I);else break;I=r(p)}}function P(U){if(O=!1,X(U),!T)if(r(m)!==null)T=!0,F||(F=!0,Be());else{var I=r(p);I!==null&&$e(P,I.startTime-U)}}var F=!1,K=-1,J=5,se=-1;function xe(){return L?!0:!(t.unstable_now()-se<J)}function Le(){if(L=!1,F){var U=t.unstable_now();se=U;var I=!0;try{e:{T=!1,O&&(O=!1,V(K),K=-1),z=!0;var ee=j;try{t:{for(X(U),b=r(m);b!==null&&!(b.expirationTime>U&&xe());){var de=b.callback;if(typeof de=="function"){b.callback=null,j=b.priorityLevel;var A=de(b.expirationTime<=U);if(U=t.unstable_now(),typeof A=="function"){b.callback=A,X(U),I=!0;break t}b===r(m)&&s(m),X(U)}else s(m);b=r(m)}if(b!==null)I=!0;else{var G=r(p);G!==null&&$e(P,G.startTime-U),I=!1}}break e}finally{b=null,j=ee,z=!1}I=void 0}}finally{I?Be():F=!1}}}var Be;if(typeof D=="function")Be=function(){D(Le)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,xt=jt.port2;jt.port1.onmessage=Le,Be=function(){xt.postMessage(null)}}else Be=function(){C(Le,0)};function $e(U,I){K=C(function(){U(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return j},t.unstable_next=function(U){switch(j){case 1:case 2:case 3:var I=3;break;default:I=j}var ee=j;j=I;try{return U()}finally{j=ee}},t.unstable_requestPaint=function(){L=!0},t.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=j;j=U;try{return I()}finally{j=ee}},t.unstable_scheduleCallback=function(U,I,ee){var de=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?de+ee:de):ee=de,U){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=ee+A,U={id:y++,callback:I,priorityLevel:U,startTime:ee,expirationTime:A,sortIndex:-1},ee>de?(U.sortIndex=ee,i(p,U),r(m)===null&&U===r(p)&&(O?(V(K),K=-1):O=!0,$e(P,ee-de))):(U.sortIndex=A,i(m,U),T||z||(T=!0,F||(F=!0,Be()))),U},t.unstable_shouldYield=xe,t.unstable_wrapCallback=function(U){var I=j;return function(){var ee=j;j=I;try{return U.apply(this,arguments)}finally{j=ee}}}}(af)),af}var wy;function Zj(){return wy||(wy=1,nf.exports=Kj()),nf.exports}var rf={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function Qj(){if(jy)return pt;jy=1;var t=Th();function i(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:p,implementation:y}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,pt.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return u(m,p,null,y)},pt.flushSync=function(m){var p=f.T,y=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=y,s.d.f()}},pt.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},pt.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},pt.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,b=g(y,p.crossOrigin),j=typeof p.integrity=="string"?p.integrity:void 0,z=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:j,fetchPriority:z}):y==="script"&&s.d.X(m,{crossOrigin:b,integrity:j,fetchPriority:z,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},pt.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=g(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},pt.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,b=g(y,p.crossOrigin);s.d.L(m,y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},pt.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=g(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},pt.requestFormReset=function(m){s.d.r(m)},pt.unstable_batchedUpdates=function(m,p){return m(p)},pt.useFormState=function(m,p,y){return f.H.useFormState(m,p,y)},pt.useFormStatus=function(){return f.H.useHostTransitionStatus()},pt.version="19.1.0",pt}var zy;function Wj(){if(zy)return rf.exports;zy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),rf.exports=Qj(),rf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy;function Jj(){if(Sy)return zo;Sy=1;var t=Zj(),i=Th(),r=Wj();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return g(c),e;if(d===o)return g(c),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=d;else{for(var v=!1,w=c.child;w;){if(w===a){v=!0,a=c,o=d;break}if(w===o){v=!0,o=c,a=d;break}w=w.sibling}if(!v){for(w=d.child;w;){if(w===a){v=!0,a=d,o=c;break}if(w===o){v=!0,o=d,a=c;break}w=w.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),D=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),se=Symbol.for("react.activity"),xe=Symbol.for("react.memo_cache_sentinel"),Le=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=Le&&e[Le]||e["@@iterator"],typeof e=="function"?e:null)}var jt=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===jt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case L:return"Profiler";case O:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case D:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:xt(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return xt(e(n))}catch{}}return null}var $e=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},de=[],A=-1;function G(e){return{current:e}}function Z(e){0>A||(e.current=de[A],de[A]=null,A--)}function Q(e,n){A++,de[A]=e.current,e.current=n}var ne=G(null),me=G(null),ae=G(null),Qe=G(null);function q(e,n){switch(Q(ae,n),Q(me,e),Q(ne,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Gg(n),e=qg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ne),Q(ne,e)}function re(){Z(ne),Z(me),Z(ae)}function Ae(e){e.memoizedState!==null&&Q(Qe,e);var n=ne.current,a=qg(n,e.type);n!==a&&(Q(me,e),Q(ne,a))}function Ye(e){me.current===e&&(Z(ne),Z(me)),Qe.current===e&&(Z(Qe),yo._currentValue=ee)}var _e=Object.prototype.hasOwnProperty,zt=t.unstable_scheduleCallback,Di=t.unstable_cancelCallback,un=t.unstable_shouldYield,ca=t.unstable_requestPaint,Dt=t.unstable_now,Uc=t.unstable_getCurrentPriorityLevel,Fn=t.unstable_ImmediatePriority,In=t.unstable_UserBlockingPriority,Ri=t.unstable_NormalPriority,ua=t.unstable_LowPriority,Kn=t.unstable_IdlePriority,Hc=t.log,ls=t.unstable_setDisableYieldValue,Zn=null,Rt=null;function Qn(e){if(typeof Hc=="function"&&ls(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Zn,e)}catch{}}var Mt=Math.clz32?Math.clz32:Dw,Ew=Math.log,Cw=Math.LN2;function Dw(e){return e>>>=0,e===0?32:31-(Ew(e)/Cw|0)|0}var cs=256,us=4194304;function Mi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ds(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?c=Mi(o):(v&=w,v!==0?c=Mi(v):a||(a=w&~e,a!==0&&(c=Mi(a))))):(w=o&~d,w!==0?c=Mi(w):v!==0?c=Mi(v):a||(a=o&~e,a!==0&&(c=Mi(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function kr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Rw(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(){var e=cs;return cs<<=1,(cs&4194048)===0&&(cs=256),e}function Em(){var e=us;return us<<=1,(us&62914560)===0&&(us=4194304),e}function $c(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Tr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mw(e,n,a,o,c,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,k=e.expirationTimes,B=e.hiddenUpdates;for(a=v&~a;0<a;){var H=31-Mt(a),Y=1<<H;w[H]=0,k[H]=-1;var _=B[H];if(_!==null)for(B[H]=null,H=0;H<_.length;H++){var N=_[H];N!==null&&(N.lane&=-536870913)}a&=~Y}o!==0&&Cm(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~n))}function Cm(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Mt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Dm(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Mt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Yc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rm(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:uy(e.type))}function Ow(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Wn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Wn,St="__reactProps$"+Wn,da="__reactContainer$"+Wn,qc="__reactEvents$"+Wn,Lw="__reactListeners$"+Wn,Bw="__reactHandles$"+Wn,Mm="__reactResources$"+Wn,Ar="__reactMarker$"+Wn;function Xc(e){delete e[ht],delete e[St],delete e[qc],delete e[Lw],delete e[Bw]}function fa(e){var n=e[ht];if(n)return n;for(var a=e.parentNode;a;){if(n=a[da]||a[ht]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[ht])return a;e=Kg(e)}return n}e=a,a=e.parentNode}return null}function ha(e){if(e=e[ht]||e[da]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Er(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ma(e){var n=e[Mm];return n||(n=e[Mm]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function at(e){e[Ar]=!0}var Om=new Set,Lm={};function Oi(e,n){pa(e,n),pa(e+"Capture",n)}function pa(e,n){for(Lm[e]=n,e=0;e<n.length;e++)Om.add(n[e])}var _w=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bm={},_m={};function Nw(e){return _e.call(_m,e)?!0:_e.call(Bm,e)?!1:_w.test(e)?_m[e]=!0:(Bm[e]=!0,!1)}function fs(e,n,a){if(Nw(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function hs(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function zn(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Fc,Nm;function ga(e){if(Fc===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fc=n&&n[1]||"",Nm=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fc+e+Nm}var Ic=!1;function Kc(e,n){if(!e||Ic)return"";Ic=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(N){var _=N}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(N){_=N}e.call(Y.prototype)}}else{try{throw Error()}catch(N){_=N}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(N){if(N&&_&&typeof N.stack=="string")return[N.stack,_.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],w=d[1];if(v&&w){var k=v.split(`
`),B=w.split(`
`);for(c=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;c<B.length&&!B[c].includes("DetermineComponentFrameRoot");)c++;if(o===k.length||c===B.length)for(o=k.length-1,c=B.length-1;1<=o&&0<=c&&k[o]!==B[c];)c--;for(;1<=o&&0<=c;o--,c--)if(k[o]!==B[c]){if(o!==1||c!==1)do if(o--,c--,0>c||k[o]!==B[c]){var H=`
`+k[o].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=o&&0<=c);break}}}finally{Ic=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ga(a):""}function Vw(e){switch(e.tag){case 26:case 27:case 5:return ga(e.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return Kc(e.type,!1);case 11:return Kc(e.type.render,!1);case 1:return Kc(e.type,!0);case 31:return ga("Activity");default:return""}}function Vm(e){try{var n="";do n+=Vw(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Pw(e){var n=Pm(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){o=""+v,d.call(this,v)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ms(e){e._valueTracker||(e._valueTracker=Pw(e))}function Um(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Pm(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Uw=/[\n"\\]/g;function $t(e){return e.replace(Uw,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zc(e,n,a,o,c,d,v,w){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ht(n)):e.value!==""+Ht(n)&&(e.value=""+Ht(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Qc(e,v,Ht(n)):a!=null?Qc(e,v,Ht(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Ht(w):e.removeAttribute("name")}function Hm(e,n,a,o,c,d,v,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+Ht(a):"",n=n!=null?""+Ht(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Qc(e,n,a){n==="number"&&ps(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ya(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ht(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function $m(e,n,a){if(n!=null&&(n=""+Ht(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ht(a):""}function Ym(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if($e(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ht(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function va(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Hw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gm(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Hw.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Gm(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&Gm(e,d,n[d])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $w=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gs(e){return Yw.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Jc=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,ba=null;function Xm(e){var n=ha(e);if(n&&(e=n.stateNode)){var a=e[St]||null;e:switch(e=n.stateNode,n.type){case"input":if(Zc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+$t(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[St]||null;if(!c)throw Error(s(90));Zc(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Um(o)}break e;case"textarea":$m(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ya(e,!!a.multiple,n,!1)}}}var tu=!1;function Fm(e,n,a){if(tu)return e(n,a);tu=!0;try{var o=e(n);return o}finally{if(tu=!1,(xa!==null||ba!==null)&&(tl(),xa&&(n=xa,e=ba,ba=xa=null,Xm(n),e)))for(n=0;n<e.length;n++)Xm(e[n])}}function Cr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[St]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Sn)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{nu=!1}var Jn=null,iu=null,ys=null;function Im(){if(ys)return ys;var e,n=iu,a=n.length,o,c="value"in Jn?Jn.value:Jn.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===c[d-o];o++);return ys=c.slice(e,1<o?1-o:void 0)}function vs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xs(){return!0}function Km(){return!1}function kt(e){function n(a,o,c,d,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xs:Km,this.isPropagationStopped=Km,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xs)},persist:function(){},isPersistent:xs}),n}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=kt(Li),Rr=y({},Li,{view:0,detail:0}),Gw=kt(Rr),au,ru,Mr,ws=y({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(au=e.screenX-Mr.screenX,ru=e.screenY-Mr.screenY):ru=au=0,Mr=e),au)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),Zm=kt(ws),qw=y({},ws,{dataTransfer:0}),Xw=kt(qw),Fw=y({},Rr,{relatedTarget:0}),ou=kt(Fw),Iw=y({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),Kw=kt(Iw),Zw=y({},Li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qw=kt(Zw),Ww=y({},Li,{data:0}),Qm=kt(Ww),Jw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n2(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=t2[e])?!!n[e]:!1}function su(){return n2}var i2=y({},Rr,{key:function(e){if(e.key){var n=Jw[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a2=kt(i2),r2=y({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=kt(r2),o2=y({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),s2=kt(o2),l2=y({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),c2=kt(l2),u2=y({},ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d2=kt(u2),f2=y({},Li,{newState:0,oldState:0}),h2=kt(f2),m2=[9,13,27,32],lu=Sn&&"CompositionEvent"in window,Or=null;Sn&&"documentMode"in document&&(Or=document.documentMode);var p2=Sn&&"TextEvent"in window&&!Or,Jm=Sn&&(!lu||Or&&8<Or&&11>=Or),ep=" ",tp=!1;function np(e,n){switch(e){case"keyup":return m2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wa=!1;function g2(e,n){switch(e){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(tp=!0,ep);case"textInput":return e=n.data,e===ep&&tp?null:e;default:return null}}function y2(e,n){if(wa)return e==="compositionend"||!lu&&np(e,n)?(e=Im(),ys=iu=Jn=null,wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jm&&n.locale!=="ko"?null:n.data;default:return null}}var v2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!v2[e.type]:n==="textarea"}function rp(e,n,a,o){xa?ba?ba.push(o):ba=[o]:xa=o,n=sl(n,"onChange"),0<n.length&&(a=new bs("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Lr=null,Br=null;function x2(e){Pg(e,0)}function js(e){var n=Er(e);if(Um(n))return e}function op(e,n){if(e==="change")return n}var sp=!1;if(Sn){var cu;if(Sn){var uu="oninput"in document;if(!uu){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),uu=typeof lp.oninput=="function"}cu=uu}else cu=!1;sp=cu&&(!document.documentMode||9<document.documentMode)}function cp(){Lr&&(Lr.detachEvent("onpropertychange",up),Br=Lr=null)}function up(e){if(e.propertyName==="value"&&js(Br)){var n=[];rp(n,Br,e,eu(e)),Fm(x2,n)}}function b2(e,n,a){e==="focusin"?(cp(),Lr=n,Br=a,Lr.attachEvent("onpropertychange",up)):e==="focusout"&&cp()}function w2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(Br)}function j2(e,n){if(e==="click")return js(n)}function z2(e,n){if(e==="input"||e==="change")return js(n)}function S2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ot=typeof Object.is=="function"?Object.is:S2;function _r(e,n){if(Ot(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!_e.call(n,c)||!Ot(e[c],n[c]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fp(e,n){var a=dp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dp(a)}}function hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ps(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ps(e.document)}return n}function du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var k2=Sn&&"documentMode"in document&&11>=document.documentMode,ja=null,fu=null,Nr=null,hu=!1;function pp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||ja==null||ja!==ps(o)||(o=ja,"selectionStart"in o&&du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Nr&&_r(Nr,o)||(Nr=o,o=sl(fu,"onSelect"),0<o.length&&(n=new bs("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ja)))}function Bi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var za={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionrun:Bi("Transition","TransitionRun"),transitionstart:Bi("Transition","TransitionStart"),transitioncancel:Bi("Transition","TransitionCancel"),transitionend:Bi("Transition","TransitionEnd")},mu={},gp={};Sn&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function _i(e){if(mu[e])return mu[e];if(!za[e])return e;var n=za[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in gp)return mu[e]=n[a];return e}var yp=_i("animationend"),vp=_i("animationiteration"),xp=_i("animationstart"),T2=_i("transitionrun"),A2=_i("transitionstart"),E2=_i("transitioncancel"),bp=_i("transitionend"),wp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function tn(e,n){wp.set(e,n),Oi(n,[e])}var jp=new WeakMap;function Yt(e,n){if(typeof e=="object"&&e!==null){var a=jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Vm(n)},jp.set(e,n),n)}return{value:e,source:n,stack:Vm(n)}}var Gt=[],Sa=0,gu=0;function zs(){for(var e=Sa,n=gu=Sa=0;n<e;){var a=Gt[n];Gt[n++]=null;var o=Gt[n];Gt[n++]=null;var c=Gt[n];Gt[n++]=null;var d=Gt[n];if(Gt[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}d!==0&&zp(a,c,d)}}function Ss(e,n,a,o){Gt[Sa++]=e,Gt[Sa++]=n,Gt[Sa++]=a,Gt[Sa++]=o,gu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yu(e,n,a,o){return Ss(e,n,a,o),ks(e)}function ka(e,n){return Ss(e,null,null,n),ks(e)}function zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-Mt(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function ks(e){if(50<lo)throw lo=0,zd=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ta={};function C2(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,n,a,o){return new C2(e,n,a,o)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,n){var a=e.alternate;return a===null?(a=Lt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ts(e,n,a,o,c,d){var v=0;if(o=e,typeof e=="function")vu(e)&&(v=1);else if(typeof e=="string")v=Rj(e,a,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case se:return e=Lt(31,a,n,c),e.elementType=se,e.lanes=d,e;case T:return Ni(a.children,c,d,n);case O:v=8,c|=24;break;case L:return e=Lt(12,a,n,c|2),e.elementType=L,e.lanes=d,e;case P:return e=Lt(13,a,n,c),e.elementType=P,e.lanes=d,e;case F:return e=Lt(19,a,n,c),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:case D:v=10;break e;case V:v=9;break e;case X:v=11;break e;case K:v=14;break e;case J:v=16,o=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Lt(v,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function Ni(e,n,a,o){return e=Lt(7,e,o,n),e.lanes=a,e}function xu(e,n,a){return e=Lt(6,e,null,n),e.lanes=a,e}function bu(e,n,a){return n=Lt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Aa=[],Ea=0,As=null,Es=0,qt=[],Xt=0,Vi=null,Tn=1,An="";function Pi(e,n){Aa[Ea++]=Es,Aa[Ea++]=As,As=e,Es=n}function kp(e,n,a){qt[Xt++]=Tn,qt[Xt++]=An,qt[Xt++]=Vi,Vi=e;var o=Tn;e=An;var c=32-Mt(o)-1;o&=~(1<<c),a+=1;var d=32-Mt(n)+c;if(30<d){var v=c-c%5;d=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Tn=1<<32-Mt(n)+c|a<<c|o,An=d+e}else Tn=1<<d|a<<c|o,An=e}function wu(e){e.return!==null&&(Pi(e,1),kp(e,1,0))}function ju(e){for(;e===As;)As=Aa[--Ea],Aa[Ea]=null,Es=Aa[--Ea],Aa[Ea]=null;for(;e===Vi;)Vi=qt[--Xt],qt[Xt]=null,An=qt[--Xt],qt[Xt]=null,Tn=qt[--Xt],qt[Xt]=null}var bt=null,Ge=null,ze=!1,Ui=null,dn=!1,zu=Error(s(519));function Hi(e){var n=Error(s(418,""));throw Ur(Yt(n,e)),zu}function Tp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ht]=e,n[St]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<uo.length;a++)ve(uo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Hm(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ms(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Ym(n,o.value,o.defaultValue,o.children),ms(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Yg(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=ll),n=!0):n=!1,n||Hi(e)}function Ap(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:bt=bt.return}}function Vr(e){if(e!==bt)return!1;if(!ze)return Ap(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pd(e.type,e.memoizedProps)),a=!a),a&&Ge&&Hi(e),Ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ge=an(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ge=null}}else n===27?(n=Ge,pi(e.type)?(e=Yd,Yd=null,Ge=e):Ge=n):Ge=bt?an(e.stateNode.nextSibling):null;return!0}function Pr(){Ge=bt=null,ze=!1}function Ep(){var e=Ui;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Ui=null),e}function Ur(e){Ui===null?Ui=[e]:Ui.push(e)}var Su=G(null),$i=null,En=null;function ei(e,n,a){Q(Su,n._currentValue),n._currentValue=a}function Cn(e){e._currentValue=Su.current,Z(Su)}function ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=c;for(var k=0;k<n.length;k++)if(w.context===n[k]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),ku(d.return,a,e),o||(v=null);break e}d=w.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),ku(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Hr(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=c.type;Ot(c.pendingProps.value,v.value)||(e!==null?e.push(w):e=[w])}}else if(c===Qe.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}c=c.return}e!==null&&Tu(n,e,a,o),n.flags|=262144}function Cs(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yi(e){$i=e,En=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mt(e){return Cp($i,e)}function Ds(e,n){return $i===null&&Yi(e),Cp(e,n)}function Cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},En===null){if(e===null)throw Error(s(308));En=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else En=En.next=n;return a}var D2=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},R2=t.unstable_scheduleCallback,M2=t.unstable_NormalPriority,nt={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new D2,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&R2(M2,function(){e.controller.abort()})}var Yr=null,Eu=0,Ca=0,Da=null;function O2(e,n){if(Yr===null){var a=Yr=[];Eu=0,Ca=Dd(),Da={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Eu++,n.then(Dp,Dp),n}function Dp(){if(--Eu===0&&Yr!==null){Da!==null&&(Da.status="fulfilled");var e=Yr;Yr=null,Ca=0,Da=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function L2(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Rp=U.S;U.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&O2(e,n),Rp!==null&&Rp(e,n)};var Gi=G(null);function Cu(){var e=Gi.current;return e!==null?e:Me.pooledCache}function Rs(e,n){n===null?Q(Gi,Gi.current):Q(Gi,n.pool)}function Mp(){var e=Cu();return e===null?null:{parent:nt._currentValue,pool:e}}var Gr=Error(s(460)),Op=Error(s(474)),Ms=Error(s(542)),Du={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Os(){}function Bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Os,Os),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(Os,Os);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw qr=n,Gr}}var qr=null;function _p(){if(qr===null)throw Error(s(459));var e=qr;return qr=null,e}function Np(e){if(e===Gr||e===Ms)throw Error(s(483))}var ti=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ni(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ii(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ks(e),zp(e,null,a),n}return Ss(e,o,n,a),ks(e)}function Xr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Dm(e,a)}}function Ou(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function Fr(){if(Lu){var e=Da;if(e!==null)throw e}}function Ir(e,n,a,o){Lu=!1;var c=e.updateQueue;ti=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var k=w,B=k.next;k.next=null,v===null?d=B:v.next=B,v=k;var H=e.alternate;H!==null&&(H=H.updateQueue,w=H.lastBaseUpdate,w!==v&&(w===null?H.firstBaseUpdate=B:w.next=B,H.lastBaseUpdate=k))}if(d!==null){var Y=c.baseState;v=0,H=B=k=null,w=d;do{var _=w.lane&-536870913,N=_!==w.lane;if(N?(be&_)===_:(o&_)===_){_!==0&&_===Ca&&(Lu=!0),H!==null&&(H=H.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ce=e,oe=w;_=n;var De=a;switch(oe.tag){case 1:if(ce=oe.payload,typeof ce=="function"){Y=ce.call(De,Y,_);break e}Y=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=oe.payload,_=typeof ce=="function"?ce.call(De,Y,_):ce,_==null)break e;Y=y({},Y,_);break e;case 2:ti=!0}}_=w.callback,_!==null&&(e.flags|=64,N&&(e.flags|=8192),N=c.callbacks,N===null?c.callbacks=[_]:N.push(_))}else N={lane:_,tag:w.tag,payload:w.payload,callback:w.callback,next:null},H===null?(B=H=N,k=Y):H=H.next=N,v|=_;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;N=w,w=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);H===null&&(k=Y),c.baseState=k,c.firstBaseUpdate=B,c.lastBaseUpdate=H,d===null&&(c.shared.lanes=0),di|=v,e.lanes=v,e.memoizedState=Y}}function Vp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],n)}var Ra=G(null),Ls=G(0);function Up(e,n){e=_n,Q(Ls,e),Q(Ra,n),_n=e|n.baseLanes}function Bu(){Q(Ls,_n),Q(Ra,Ra.current)}function _u(){_n=Ls.current,Z(Ra),Z(Ls)}var ai=0,pe=null,Ee=null,We=null,Bs=!1,Ma=!1,qi=!1,_s=0,Kr=0,Oa=null,B2=0;function Fe(){throw Error(s(321))}function Nu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Ot(e[a],n[a]))return!1;return!0}function Vu(e,n,a,o,c,d){return ai=d,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?z0:S0,qi=!1,d=a(o,c),qi=!1,Ma&&(d=$p(n,a,o,c)),Hp(e),d}function Hp(e){U.H=$s;var n=Ee!==null&&Ee.next!==null;if(ai=0,We=Ee=pe=null,Bs=!1,Kr=0,Oa=null,n)throw Error(s(300));e===null||rt||(e=e.dependencies,e!==null&&Cs(e)&&(rt=!0))}function $p(e,n,a,o){pe=e;var c=0;do{if(Ma&&(Oa=null),Kr=0,Ma=!1,25<=c)throw Error(s(301));if(c+=1,We=Ee=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=$2,d=n(a,o)}while(Ma);return d}function _2(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Zr(n):n,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(pe.flags|=1024),n}function Pu(){var e=_s!==0;return _s=0,e}function Uu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hu(e){if(Bs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bs=!1}ai=0,We=Ee=pe=null,Ma=!1,Kr=_s=0,Oa=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?pe.memoizedState=We=e:We=We.next=e,We}function Je(){if(Ee===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var n=We===null?pe.memoizedState:We.next;if(n!==null)We=n,Ee=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},We===null?pe.memoizedState=We=e:We=We.next=e}return We}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zr(e){var n=Kr;return Kr+=1,Oa===null&&(Oa=[]),e=Bp(Oa,e,n),n=pe,(We===null?n.memoizedState:We.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?z0:S0),e}function Ns(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zr(e);if(e.$$typeof===D)return mt(e)}throw Error(s(438,String(e)))}function Yu(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$u(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=xe;return n.index++,a}function Dn(e,n){return typeof n=="function"?n(e):n}function Vs(e){var n=Je();return Gu(n,Ee,e)}function Gu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var w=v=null,k=null,B=n,H=!1;do{var Y=B.lane&-536870913;if(Y!==B.lane?(be&Y)===Y:(ai&Y)===Y){var _=B.revertLane;if(_===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Y===Ca&&(H=!0);else if((ai&_)===_){B=B.next,_===Ca&&(H=!0);continue}else Y={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},k===null?(w=k=Y,v=d):k=k.next=Y,pe.lanes|=_,di|=_;Y=B.action,qi&&a(d,Y),d=B.hasEagerState?B.eagerState:a(d,Y)}else _={lane:Y,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},k===null?(w=k=_,v=d):k=k.next=_,pe.lanes|=Y,di|=Y;B=B.next}while(B!==null&&B!==n);if(k===null?v=d:k.next=w,!Ot(d,e.memoizedState)&&(rt=!0,H&&(a=Da,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=k,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function qu(e){var n=Je(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do d=e(d,v.action),v=v.next;while(v!==c);Ot(d,n.memoizedState)||(rt=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Yp(e,n,a){var o=pe,c=Je(),d=ze;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Ot((Ee||c).memoizedState,a);v&&(c.memoizedState=a,rt=!0),c=c.queue;var w=Xp.bind(null,o,c,e);if(Qr(2048,8,w,[e]),c.getSnapshot!==n||v||We!==null&&We.memoizedState.tag&1){if(o.flags|=2048,La(9,Ps(),qp.bind(null,o,c,a,n),null),Me===null)throw Error(s(349));d||(ai&124)!==0||Gp(o,n,a)}return a}function Gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=$u(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function qp(e,n,a,o){n.value=a,n.getSnapshot=o,Fp(n)&&Ip(e)}function Xp(e,n,a){return a(function(){Fp(n)&&Ip(e)})}function Fp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Ot(e,a)}catch{return!0}}function Ip(e){var n=ka(e,2);n!==null&&Pt(n,e,2)}function Xu(e){var n=Tt();if(typeof e=="function"){var a=e;if(e=a(),qi){Qn(!0);try{a()}finally{Qn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},n}function Kp(e,n,a,o){return e.baseState=a,Gu(e,Ee,typeof o=="function"?o:Dn)}function N2(e,n,a,o,c){if(Hs(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Zp(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Zp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=U.T,v={};U.T=v;try{var w=a(c,o),k=U.S;k!==null&&k(v,w),Qp(e,n,w)}catch(B){Fu(e,n,B)}finally{U.T=d}}else try{d=a(c,o),Qp(e,n,d)}catch(B){Fu(e,n,B)}}function Qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Wp(e,n,o)},function(o){return Fu(e,n,o)}):Wp(e,n,a)}function Wp(e,n,a){n.status="fulfilled",n.value=a,Jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Zp(e,a)))}function Fu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Jp(n),n=n.next;while(n!==o)}e.action=null}function Jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function e0(e,n){return n}function t0(e,n){if(ze){var a=Me.formState;if(a!==null){e:{var o=pe;if(ze){if(Ge){t:{for(var c=Ge,d=dn;c.nodeType!==8;){if(!d){c=null;break t}if(c=an(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Ge=an(c.nextSibling),o=c.data==="F!";break e}}Hi(o)}o=!1}o&&(n=a[0])}}return a=Tt(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:n},a.queue=o,a=b0.bind(null,pe,o),o.dispatch=a,o=Xu(!1),d=Wu.bind(null,pe,!1,o.queue),o=Tt(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=N2.bind(null,pe,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function n0(e){var n=Je();return i0(n,Ee,e)}function i0(e,n,a){if(n=Gu(e,n,e0)[0],e=Vs(Dn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Zr(n)}catch(v){throw v===Gr?Ms:v}else o=n;n=Je();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,La(9,Ps(),V2.bind(null,c,a),null)),[o,d,e]}function V2(e,n){e.action=n}function a0(e){var n=Je(),a=Ee;if(a!==null)return i0(n,a,e);Je(),n=n.memoizedState,a=Je();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function La(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=$u(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ps(){return{destroy:void 0,resource:void 0}}function r0(){return Je().memoizedState}function Us(e,n,a,o){var c=Tt();o=o===void 0?null:o,pe.flags|=e,c.memoizedState=La(1|n,Ps(),a,o)}function Qr(e,n,a,o){var c=Je();o=o===void 0?null:o;var d=c.memoizedState.inst;Ee!==null&&o!==null&&Nu(o,Ee.memoizedState.deps)?c.memoizedState=La(n,d,a,o):(pe.flags|=e,c.memoizedState=La(1|n,d,a,o))}function o0(e,n){Us(8390656,8,e,n)}function s0(e,n){Qr(2048,8,e,n)}function l0(e,n){return Qr(4,2,e,n)}function c0(e,n){return Qr(4,4,e,n)}function u0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function d0(e,n,a){a=a!=null?a.concat([e]):null,Qr(4,4,u0.bind(null,n,e),a)}function Iu(){}function f0(e,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Nu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function h0(e,n){var a=Je();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Nu(n,o[1]))return o[0];if(o=e(),qi){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[o,n],o}function Ku(e,n,a){return a===void 0||(ai&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=gg(),pe.lanes|=e,di|=e,a)}function m0(e,n,a,o){return Ot(a,n)?a:Ra.current!==null?(e=Ku(e,a,o),Ot(e,n)||(rt=!0),e):(ai&42)===0?(rt=!0,e.memoizedState=a):(e=gg(),pe.lanes|=e,di|=e,n)}function p0(e,n,a,o,c){var d=I.p;I.p=d!==0&&8>d?d:8;var v=U.T,w={};U.T=w,Wu(e,!1,n,a);try{var k=c(),B=U.S;if(B!==null&&B(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var H=L2(k,o);Wr(e,n,H,Vt(e))}else Wr(e,n,o,Vt(e))}catch(Y){Wr(e,n,{then:function(){},status:"rejected",reason:Y},Vt())}finally{I.p=d,U.T=v}}function P2(){}function Zu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=g0(e).queue;p0(e,c,n,ee,a===null?P2:function(){return y0(e),a(o)})}function g0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function y0(e){var n=g0(e).next.queue;Wr(e,n,{},Vt())}function Qu(){return mt(yo)}function v0(){return Je().memoizedState}function x0(){return Je().memoizedState}function U2(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Vt();e=ni(a);var o=ii(n,e,a);o!==null&&(Pt(o,n,a),Xr(o,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function H2(e,n,a){var o=Vt();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hs(e)?w0(n,a):(a=yu(e,n,a,o),a!==null&&(Pt(a,e,o),j0(a,n,o)))}function b0(e,n,a){var o=Vt();Wr(e,n,a,o)}function Wr(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hs(e))w0(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,w=d(v,a);if(c.hasEagerState=!0,c.eagerState=w,Ot(w,v))return Ss(e,n,c,0),Me===null&&zs(),!1}catch{}finally{}if(a=yu(e,n,c,o),a!==null)return Pt(a,e,o),j0(a,n,o),!0}return!1}function Wu(e,n,a,o){if(o={lane:2,revertLane:Dd(),action:o,hasEagerState:!1,eagerState:null,next:null},Hs(e)){if(n)throw Error(s(479))}else n=yu(e,a,o,2),n!==null&&Pt(n,e,2)}function Hs(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function w0(e,n){Ma=Bs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function j0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Dm(e,a)}}var $s={readContext:mt,use:Ns,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe},z0={readContext:mt,use:Ns,useCallback:function(e,n){return Tt().memoizedState=[e,n===void 0?null:n],e},useContext:mt,useEffect:o0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Us(4194308,4,u0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Us(4194308,4,e,n)},useInsertionEffect:function(e,n){Us(4,2,e,n)},useMemo:function(e,n){var a=Tt();n=n===void 0?null:n;var o=e();if(qi){Qn(!0);try{e()}finally{Qn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Tt();if(a!==void 0){var c=a(n);if(qi){Qn(!0);try{a(n)}finally{Qn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=H2.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Tt();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=b0.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Iu,useDeferredValue:function(e,n){var a=Tt();return Ku(a,e,n)},useTransition:function(){var e=Xu(!1);return e=p0.bind(null,pe,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,c=Tt();if(ze){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Me===null)throw Error(s(349));(be&124)!==0||Gp(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,o0(Xp.bind(null,o,d,e),[e]),o.flags|=2048,La(9,Ps(),qp.bind(null,o,d,a,n),null),a},useId:function(){var e=Tt(),n=Me.identifierPrefix;if(ze){var a=An,o=Tn;a=(o&~(1<<32-Mt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=_s++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=B2++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:t0,useActionState:t0,useOptimistic:function(e){var n=Tt();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return Tt().memoizedState=U2.bind(null,pe)}},S0={readContext:mt,use:Ns,useCallback:f0,useContext:mt,useEffect:s0,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:Vs,useRef:r0,useState:function(){return Vs(Dn)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=Je();return m0(a,Ee.memoizedState,e,n)},useTransition:function(){var e=Vs(Dn)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:Zr(e),n]},useSyncExternalStore:Yp,useId:v0,useHostTransitionStatus:Qu,useFormState:n0,useActionState:n0,useOptimistic:function(e,n){var a=Je();return Kp(a,Ee,e,n)},useMemoCache:Yu,useCacheRefresh:x0},$2={readContext:mt,use:Ns,useCallback:f0,useContext:mt,useEffect:s0,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:qu,useRef:r0,useState:function(){return qu(Dn)},useDebugValue:Iu,useDeferredValue:function(e,n){var a=Je();return Ee===null?Ku(a,e,n):m0(a,Ee.memoizedState,e,n)},useTransition:function(){var e=qu(Dn)[0],n=Je().memoizedState;return[typeof e=="boolean"?e:Zr(e),n]},useSyncExternalStore:Yp,useId:v0,useHostTransitionStatus:Qu,useFormState:a0,useActionState:a0,useOptimistic:function(e,n){var a=Je();return Ee!==null?Kp(a,Ee,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:x0},Ba=null,Jr=0;function Ys(e){var n=Jr;return Jr+=1,Ba===null&&(Ba=[]),Bp(Ba,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gs(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function k0(e){var n=e._init;return n(e._payload)}function T0(e){function n(R,E){if(e){var M=R.deletions;M===null?(R.deletions=[E],R.flags|=16):M.push(E)}}function a(R,E){if(!e)return null;for(;E!==null;)n(R,E),E=E.sibling;return null}function o(R){for(var E=new Map;R!==null;)R.key!==null?E.set(R.key,R):E.set(R.index,R),R=R.sibling;return E}function c(R,E){return R=kn(R,E),R.index=0,R.sibling=null,R}function d(R,E,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<E?(R.flags|=67108866,E):M):(R.flags|=67108866,E)):(R.flags|=1048576,E)}function v(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function w(R,E,M,$){return E===null||E.tag!==6?(E=xu(M,R.mode,$),E.return=R,E):(E=c(E,M),E.return=R,E)}function k(R,E,M,$){var te=M.type;return te===T?H(R,E,M.props.children,$,M.key):E!==null&&(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===J&&k0(te)===E.type)?(E=c(E,M.props),eo(E,M),E.return=R,E):(E=Ts(M.type,M.key,M.props,null,R.mode,$),eo(E,M),E.return=R,E)}function B(R,E,M,$){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=bu(M,R.mode,$),E.return=R,E):(E=c(E,M.children||[]),E.return=R,E)}function H(R,E,M,$,te){return E===null||E.tag!==7?(E=Ni(M,R.mode,$,te),E.return=R,E):(E=c(E,M),E.return=R,E)}function Y(R,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=xu(""+E,R.mode,M),E.return=R,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case j:return M=Ts(E.type,E.key,E.props,null,R.mode,M),eo(M,E),M.return=R,M;case z:return E=bu(E,R.mode,M),E.return=R,E;case J:var $=E._init;return E=$(E._payload),Y(R,E,M)}if($e(E)||Be(E))return E=Ni(E,R.mode,M,null),E.return=R,E;if(typeof E.then=="function")return Y(R,Ys(E),M);if(E.$$typeof===D)return Y(R,Ds(R,E),M);Gs(R,E)}return null}function _(R,E,M,$){var te=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return te!==null?null:w(R,E,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case j:return M.key===te?k(R,E,M,$):null;case z:return M.key===te?B(R,E,M,$):null;case J:return te=M._init,M=te(M._payload),_(R,E,M,$)}if($e(M)||Be(M))return te!==null?null:H(R,E,M,$,null);if(typeof M.then=="function")return _(R,E,Ys(M),$);if(M.$$typeof===D)return _(R,E,Ds(R,M),$);Gs(R,M)}return null}function N(R,E,M,$,te){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return R=R.get(M)||null,w(E,R,""+$,te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case j:return R=R.get($.key===null?M:$.key)||null,k(E,R,$,te);case z:return R=R.get($.key===null?M:$.key)||null,B(E,R,$,te);case J:var ge=$._init;return $=ge($._payload),N(R,E,M,$,te)}if($e($)||Be($))return R=R.get(M)||null,H(E,R,$,te,null);if(typeof $.then=="function")return N(R,E,M,Ys($),te);if($.$$typeof===D)return N(R,E,M,Ds(E,$),te);Gs(E,$)}return null}function ce(R,E,M,$){for(var te=null,ge=null,ie=E,le=E=0,st=null;ie!==null&&le<M.length;le++){ie.index>le?(st=ie,ie=null):st=ie.sibling;var we=_(R,ie,M[le],$);if(we===null){ie===null&&(ie=st);break}e&&ie&&we.alternate===null&&n(R,ie),E=d(we,E,le),ge===null?te=we:ge.sibling=we,ge=we,ie=st}if(le===M.length)return a(R,ie),ze&&Pi(R,le),te;if(ie===null){for(;le<M.length;le++)ie=Y(R,M[le],$),ie!==null&&(E=d(ie,E,le),ge===null?te=ie:ge.sibling=ie,ge=ie);return ze&&Pi(R,le),te}for(ie=o(ie);le<M.length;le++)st=N(ie,R,le,M[le],$),st!==null&&(e&&st.alternate!==null&&ie.delete(st.key===null?le:st.key),E=d(st,E,le),ge===null?te=st:ge.sibling=st,ge=st);return e&&ie.forEach(function(bi){return n(R,bi)}),ze&&Pi(R,le),te}function oe(R,E,M,$){if(M==null)throw Error(s(151));for(var te=null,ge=null,ie=E,le=E=0,st=null,we=M.next();ie!==null&&!we.done;le++,we=M.next()){ie.index>le?(st=ie,ie=null):st=ie.sibling;var bi=_(R,ie,we.value,$);if(bi===null){ie===null&&(ie=st);break}e&&ie&&bi.alternate===null&&n(R,ie),E=d(bi,E,le),ge===null?te=bi:ge.sibling=bi,ge=bi,ie=st}if(we.done)return a(R,ie),ze&&Pi(R,le),te;if(ie===null){for(;!we.done;le++,we=M.next())we=Y(R,we.value,$),we!==null&&(E=d(we,E,le),ge===null?te=we:ge.sibling=we,ge=we);return ze&&Pi(R,le),te}for(ie=o(ie);!we.done;le++,we=M.next())we=N(ie,R,le,we.value,$),we!==null&&(e&&we.alternate!==null&&ie.delete(we.key===null?le:we.key),E=d(we,E,le),ge===null?te=we:ge.sibling=we,ge=we);return e&&ie.forEach(function(Yj){return n(R,Yj)}),ze&&Pi(R,le),te}function De(R,E,M,$){if(typeof M=="object"&&M!==null&&M.type===T&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case j:e:{for(var te=M.key;E!==null;){if(E.key===te){if(te=M.type,te===T){if(E.tag===7){a(R,E.sibling),$=c(E,M.props.children),$.return=R,R=$;break e}}else if(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===J&&k0(te)===E.type){a(R,E.sibling),$=c(E,M.props),eo($,M),$.return=R,R=$;break e}a(R,E);break}else n(R,E);E=E.sibling}M.type===T?($=Ni(M.props.children,R.mode,$,M.key),$.return=R,R=$):($=Ts(M.type,M.key,M.props,null,R.mode,$),eo($,M),$.return=R,R=$)}return v(R);case z:e:{for(te=M.key;E!==null;){if(E.key===te)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){a(R,E.sibling),$=c(E,M.children||[]),$.return=R,R=$;break e}else{a(R,E);break}else n(R,E);E=E.sibling}$=bu(M,R.mode,$),$.return=R,R=$}return v(R);case J:return te=M._init,M=te(M._payload),De(R,E,M,$)}if($e(M))return ce(R,E,M,$);if(Be(M)){if(te=Be(M),typeof te!="function")throw Error(s(150));return M=te.call(M),oe(R,E,M,$)}if(typeof M.then=="function")return De(R,E,Ys(M),$);if(M.$$typeof===D)return De(R,E,Ds(R,M),$);Gs(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(a(R,E.sibling),$=c(E,M),$.return=R,R=$):(a(R,E),$=xu(M,R.mode,$),$.return=R,R=$),v(R)):a(R,E)}return function(R,E,M,$){try{Jr=0;var te=De(R,E,M,$);return Ba=null,te}catch(ie){if(ie===Gr||ie===Ms)throw ie;var ge=Lt(29,ie,null,R.mode);return ge.lanes=$,ge.return=R,ge}finally{}}}var _a=T0(!0),A0=T0(!1),Ft=G(null),fn=null;function ri(e){var n=e.alternate;Q(it,it.current&1),Q(Ft,e),fn===null&&(n===null||Ra.current!==null||n.memoizedState!==null)&&(fn=e)}function E0(e){if(e.tag===22){if(Q(it,it.current),Q(Ft,e),fn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(fn=e)}}else oi()}function oi(){Q(it,it.current),Q(Ft,Ft.current)}function Rn(e){Z(Ft),fn===e&&(fn=null),Z(it)}var it=G(0);function qs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||$d(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Ju(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ed={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Vt(),c=ni(o);c.payload=n,a!=null&&(c.callback=a),n=ii(e,c,o),n!==null&&(Pt(n,e,o),Xr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Vt(),c=ni(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ii(e,c,o),n!==null&&(Pt(n,e,o),Xr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Vt(),o=ni(a);o.tag=2,n!=null&&(o.callback=n),n=ii(e,o,a),n!==null&&(Pt(n,e,a),Xr(n,e,a))}};function C0(e,n,a,o,c,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,v):n.prototype&&n.prototype.isPureReactComponent?!_r(a,o)||!_r(c,d):!0}function D0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ed.enqueueReplaceState(n,n.state,null)}function Xi(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Xs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function R0(e){Xs(e)}function M0(e){console.error(e)}function O0(e){Xs(e)}function Fs(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function L0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function td(e,n,a){return a=ni(a),a.tag=3,a.payload={element:null},a.callback=function(){Fs(e,n)},a}function B0(e){return e=ni(e),e.tag=3,e}function _0(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){L0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){L0(n,a,o),typeof c!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Y2(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,c,!0),a=Ft.current,a!==null){switch(a.tag){case 13:return fn===null?kd():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ad(e,o,c)),!1;case 22:return a.flags|=65536,o===Du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ad(e,o,c)),!1}throw Error(s(435,a.tag))}return Ad(e,o,c),kd(),!1}if(ze)return n=Ft.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==zu&&(e=Error(s(422),{cause:o}),Ur(Yt(e,a)))):(o!==zu&&(n=Error(s(423),{cause:o}),Ur(Yt(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Yt(o,a),c=td(e.stateNode,o,c),Ou(e,c),qe!==4&&(qe=2)),!1;var d=Error(s(520),{cause:o});if(d=Yt(d,a),so===null?so=[d]:so.push(d),qe!==4&&(qe=2),n===null)return!0;o=Yt(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=td(a.stateNode,o,e),Ou(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(fi===null||!fi.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=B0(c),_0(c,e,a,o),Ou(a,c),!1}a=a.return}while(a!==null);return!1}var N0=Error(s(461)),rt=!1;function ct(e,n,a,o){n.child=e===null?A0(n,null,a,o):_a(n,e.child,a,o)}function V0(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var v={};for(var w in o)w!=="ref"&&(v[w]=o[w])}else v=o;return Yi(n),o=Vu(e,n,a,v,d,c),w=Pu(),e!==null&&!rt?(Uu(e,n,c),Mn(e,n,c)):(ze&&w&&wu(n),n.flags|=1,ct(e,n,o,c),n.child)}function P0(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!vu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,U0(e,n,d,o,c)):(e=Ts(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!cd(e,c)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:_r,a(v,o)&&e.ref===n.ref)return Mn(e,n,c)}return n.flags|=1,e=kn(d,o),e.ref=n.ref,e.return=n,n.child=e}function U0(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(_r(d,o)&&e.ref===n.ref)if(rt=!1,n.pendingProps=o=d,cd(e,c))(e.flags&131072)!==0&&(rt=!0);else return n.lanes=e.lanes,Mn(e,n,c)}return nd(e,n,a,o,c)}function H0(e,n,a){var o=n.pendingProps,c=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return $0(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rs(n,d!==null?d.cachePool:null),d!==null?Up(n,d):Bu(),E0(n);else return n.lanes=n.childLanes=536870912,$0(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Rs(n,d.cachePool),Up(n,d),oi(),n.memoizedState=null):(e!==null&&Rs(n,null),Bu(),oi());return ct(e,n,c,a),n.child}function $0(e,n,a,o){var c=Cu();return c=c===null?null:{parent:nt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Rs(n,null),Bu(),E0(n),e!==null&&Hr(e,n,o,!0),null}function Is(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nd(e,n,a,o,c){return Yi(n),a=Vu(e,n,a,o,void 0,c),o=Pu(),e!==null&&!rt?(Uu(e,n,c),Mn(e,n,c)):(ze&&o&&wu(n),n.flags|=1,ct(e,n,a,c),n.child)}function Y0(e,n,a,o,c,d){return Yi(n),n.updateQueue=null,a=$p(n,o,a,c),Hp(e),o=Pu(),e!==null&&!rt?(Uu(e,n,d),Mn(e,n,d)):(ze&&o&&wu(n),n.flags|=1,ct(e,n,a,d),n.child)}function G0(e,n,a,o,c){if(Yi(n),n.stateNode===null){var d=Ta,v=a.contextType;typeof v=="object"&&v!==null&&(d=mt(v)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ed,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ru(n),v=a.contextType,d.context=typeof v=="object"&&v!==null?mt(v):Ta,d.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ju(n,a,v,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&ed.enqueueReplaceState(d,d.state,null),Ir(n,o,d,c),Fr(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var w=n.memoizedProps,k=Xi(a,w);d.props=k;var B=d.context,H=a.contextType;v=Ta,typeof H=="object"&&H!==null&&(v=mt(H));var Y=a.getDerivedStateFromProps;H=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||B!==v)&&D0(n,d,o,v),ti=!1;var _=n.memoizedState;d.state=_,Ir(n,o,d,c),Fr(),B=n.memoizedState,w||_!==B||ti?(typeof Y=="function"&&(Ju(n,a,Y,o),B=n.memoizedState),(k=ti||C0(n,a,k,o,_,B,v))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=B),d.props=o,d.state=B,d.context=v,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Mu(e,n),v=n.memoizedProps,H=Xi(a,v),d.props=H,Y=n.pendingProps,_=d.context,B=a.contextType,k=Ta,typeof B=="object"&&B!==null&&(k=mt(B)),w=a.getDerivedStateFromProps,(B=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||_!==k)&&D0(n,d,o,k),ti=!1,_=n.memoizedState,d.state=_,Ir(n,o,d,c),Fr();var N=n.memoizedState;v!==Y||_!==N||ti||e!==null&&e.dependencies!==null&&Cs(e.dependencies)?(typeof w=="function"&&(Ju(n,a,w,o),N=n.memoizedState),(H=ti||C0(n,a,H,o,_,N,k)||e!==null&&e.dependencies!==null&&Cs(e.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,N,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,N,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=N),d.props=o,d.state=N,d.context=k,o=H):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Is(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=_a(n,e.child,null,c),n.child=_a(n,null,a,c)):ct(e,n,a,c),n.memoizedState=d.state,e=n.child):e=Mn(e,n,c),e}function q0(e,n,a,o){return Pr(),n.flags|=256,ct(e,n,a,o),n.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(e){return{baseLanes:e,cachePool:Mp()}}function rd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=It),e}function X0(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(it.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(c?ri(n):oi(),ze){var w=Ge,k;if(k=w){e:{for(k=w,w=dn;k.nodeType!==8;){if(!w){w=null;break e}if(k=an(k.nextSibling),k===null){w=null;break e}}w=k}w!==null?(n.memoizedState={dehydrated:w,treeContext:Vi!==null?{id:Tn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},k=Lt(18,null,null,0),k.stateNode=w,k.return=n,n.child=k,bt=n,Ge=null,k=!0):k=!1}k||Hi(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return $d(w)?n.lanes=32:n.lanes=536870912,null;Rn(n)}return w=o.children,o=o.fallback,c?(oi(),c=n.mode,w=Ks({mode:"hidden",children:w},c),o=Ni(o,c,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,c=n.child,c.memoizedState=ad(a),c.childLanes=rd(e,v,a),n.memoizedState=id,o):(ri(n),od(n,w))}if(k=e.memoizedState,k!==null&&(w=k.dehydrated,w!==null)){if(d)n.flags&256?(ri(n),n.flags&=-257,n=sd(e,n,a)):n.memoizedState!==null?(oi(),n.child=e.child,n.flags|=128,n=null):(oi(),c=o.fallback,w=n.mode,o=Ks({mode:"visible",children:o.children},w),c=Ni(c,w,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,_a(n,e.child,null,a),o=n.child,o.memoizedState=ad(a),o.childLanes=rd(e,v,a),n.memoizedState=id,n=c);else if(ri(n),$d(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var B=v.dgst;v=B,o=Error(s(419)),o.stack="",o.digest=v,Ur({value:o,source:null,stack:null}),n=sd(e,n,a)}else if(rt||Hr(e,n,a,!1),v=(a&e.childLanes)!==0,rt||v){if(v=Me,v!==null&&(o=a&-a,o=(o&42)!==0?1:Yc(o),o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==k.retryLane))throw k.retryLane=o,ka(e,o),Pt(v,e,o),N0;w.data==="$?"||kd(),n=sd(e,n,a)}else w.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,Ge=an(w.nextSibling),bt=n,ze=!0,Ui=null,dn=!1,e!==null&&(qt[Xt++]=Tn,qt[Xt++]=An,qt[Xt++]=Vi,Tn=e.id,An=e.overflow,Vi=n),n=od(n,o.children),n.flags|=4096);return n}return c?(oi(),c=o.fallback,w=n.mode,k=e.child,B=k.sibling,o=kn(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,B!==null?c=kn(B,c):(c=Ni(c,w,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,w=e.child.memoizedState,w===null?w=ad(a):(k=w.cachePool,k!==null?(B=nt._currentValue,k=k.parent!==B?{parent:B,pool:B}:k):k=Mp(),w={baseLanes:w.baseLanes|a,cachePool:k}),c.memoizedState=w,c.childLanes=rd(e,v,a),n.memoizedState=id,o):(ri(n),a=e.child,e=a.sibling,a=kn(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function od(e,n){return n=Ks({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ks(e,n){return e=Lt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sd(e,n,a){return _a(n,e.child,null,a),e=od(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function F0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ku(e.return,n,a)}function ld(e,n,a,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function I0(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(ct(e,n,o.children,a),o=it.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&F0(e,a,n);else if(e.tag===19)F0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Q(it,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&qs(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ld(n,!1,c,a,d);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&qs(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ld(n,!0,a,null,d);break;case"together":ld(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Mn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),di|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=kn(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=kn(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Cs(e)))}function G2(e,n,a){switch(n.tag){case 3:q(n,n.stateNode.containerInfo),ei(n,nt,e.memoizedState.cache),Pr();break;case 27:case 5:Ae(n);break;case 4:q(n,n.stateNode.containerInfo);break;case 10:ei(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ri(n),n.flags|=128,null):(a&n.child.childLanes)!==0?X0(e,n,a):(ri(n),e=Mn(e,n,a),e!==null?e.sibling:null);ri(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Hr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return I0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Q(it,it.current),o)break;return null;case 22:case 23:return n.lanes=0,H0(e,n,a);case 24:ei(n,nt,e.memoizedState.cache)}return Mn(e,n,a)}function K0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)rt=!0;else{if(!cd(e,a)&&(n.flags&128)===0)return rt=!1,G2(e,n,a);rt=(e.flags&131072)!==0}else rt=!1,ze&&(n.flags&1048576)!==0&&kp(n,Es,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")vu(o)?(e=Xi(o,e),n.tag=1,n=G0(null,n,o,e,a)):(n.tag=0,n=nd(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===X){n.tag=11,n=V0(null,n,o,e,a);break e}else if(c===K){n.tag=14,n=P0(null,n,o,e,a);break e}}throw n=xt(o)||o,Error(s(306,n,""))}}return n;case 0:return nd(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Xi(o,n.pendingProps),G0(e,n,o,c,a);case 3:e:{if(q(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Mu(e,n),Ir(n,o,null,a);var v=n.memoizedState;if(o=v.cache,ei(n,nt,o),o!==d.cache&&Tu(n,[nt],a,!0),Fr(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=q0(e,n,o,a);break e}else if(o!==c){c=Yt(Error(s(424)),n),Ur(c),n=q0(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=an(e.firstChild),bt=n,ze=!0,Ui=null,dn=!0,a=A0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Pr(),o===c){n=Mn(e,n,a);break e}ct(e,n,o,a)}n=n.child}return n;case 26:return Is(e,n),e===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=cl(ae.current).createElement(a),o[ht]=n,o[St]=e,dt(o,a,e),at(o),n.stateNode=o):n.memoizedState=Jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ae(n),e===null&&ze&&(o=n.stateNode=Zg(n.type,n.pendingProps,ae.current),bt=n,dn=!0,c=Ge,pi(n.type)?(Yd=c,Ge=an(o.firstChild)):Ge=c),ct(e,n,n.pendingProps.children,a),Is(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((c=o=Ge)&&(o=vj(o,n.type,n.pendingProps,dn),o!==null?(n.stateNode=o,bt=n,Ge=an(o.firstChild),dn=!1,c=!0):c=!1),c||Hi(n)),Ae(n),c=n.type,d=n.pendingProps,v=e!==null?e.memoizedProps:null,o=d.children,Pd(c,d)?o=null:v!==null&&Pd(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Vu(e,n,_2,null,null,a),yo._currentValue=c),Is(e,n),ct(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=Ge)&&(a=xj(a,n.pendingProps,dn),a!==null?(n.stateNode=a,bt=n,Ge=null,e=!0):e=!1),e||Hi(n)),null;case 13:return X0(e,n,a);case 4:return q(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=_a(n,null,o,a):ct(e,n,o,a),n.child;case 11:return V0(e,n,n.type,n.pendingProps,a);case 7:return ct(e,n,n.pendingProps,a),n.child;case 8:return ct(e,n,n.pendingProps.children,a),n.child;case 12:return ct(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ei(n,n.type,o.value),ct(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Yi(n),c=mt(c),o=o(c),n.flags|=1,ct(e,n,o,a),n.child;case 14:return P0(e,n,n.type,n.pendingProps,a);case 15:return U0(e,n,n.type,n.pendingProps,a);case 19:return I0(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ks(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=kn(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return H0(e,n,a);case 24:return Yi(n),o=mt(nt),e===null?(c=Cu(),c===null&&(c=Me,d=Au(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Ru(n),ei(n,nt,c)):((e.lanes&a)!==0&&(Mu(e,n),Ir(n,null,null,a),Fr()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ei(n,nt,o)):(o=d.cache,ei(n,nt,o),o!==c.cache&&Tu(n,[nt],a,!0))),ct(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function On(e){e.flags|=4}function Z0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ay(n)){if(n=Ft.current,n!==null&&((be&4194048)===be?fn!==null:(be&62914560)!==be&&(be&536870912)===0||n!==fn))throw qr=Du,Op;e.flags|=8192}}function Zs(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Em():536870912,e.lanes|=n,Ua|=n)}function to(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function q2(e,n,a){var o=n.pendingProps;switch(ju(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Cn(nt),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vr(n)?On(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ep())),Ve(n),null;case 26:return a=n.memoizedState,e===null?(On(n),a!==null?(Ve(n),Z0(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==e.memoizedState?(On(n),Ve(n),Z0(n,a)):(Ve(n),n.flags&=-16777217):(e.memoizedProps!==o&&On(n),Ve(n),n.flags&=-16777217),null;case 27:Ye(n),a=ae.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&On(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}e=ne.current,Vr(n)?Tp(n):(e=Zg(c,o,a),n.stateNode=e,On(n))}return Ve(n),null;case 5:if(Ye(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&On(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(e=ne.current,Vr(n))Tp(n);else{switch(c=cl(ae.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[ht]=n,e[St]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;e:switch(dt(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&On(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&On(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ae.current,Vr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=bt,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ht]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yg(e.nodeValue,a)),e||Hi(n)}else e=cl(e).createTextNode(o),e[ht]=n,n.stateNode=e}return Ve(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Vr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[ht]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else c=Ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Rn(n),n):(Rn(n),null)}if(Rn(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Zs(n,n.updateQueue),Ve(n),null;case 4:return re(),e===null&&Ld(n.stateNode.containerInfo),Ve(n),null;case 10:return Cn(n.type),Ve(n),null;case 19:if(Z(it),c=n.memoizedState,c===null)return Ve(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)to(c,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=qs(e),d!==null){for(n.flags|=128,to(c,!1),e=d.updateQueue,n.updateQueue=e,Zs(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return Q(it,it.current&1|2),n.child}e=e.sibling}c.tail!==null&&Dt()>Js&&(n.flags|=128,o=!0,to(c,!1),n.lanes=4194304)}else{if(!o)if(e=qs(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Zs(n,e),to(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!ze)return Ve(n),null}else 2*Dt()-c.renderingStartTime>Js&&a!==536870912&&(n.flags|=128,o=!0,to(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(e=c.last,e!==null?e.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Dt(),n.sibling=null,e=it.current,Q(it,o?e&1|2:e&1),n):(Ve(n),null);case 22:case 23:return Rn(n),_u(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Zs(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(Gi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Cn(nt),Ve(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function X2(e,n){switch(ju(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Cn(nt),re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ye(n),null;case 13:if(Rn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Pr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(it),null;case 4:return re(),null;case 10:return Cn(n.type),null;case 22:case 23:return Rn(n),_u(),e!==null&&Z(Gi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Cn(nt),null;case 25:return null;default:return null}}function Q0(e,n){switch(ju(n),n.tag){case 3:Cn(nt),re();break;case 26:case 27:case 5:Ye(n);break;case 4:re();break;case 13:Rn(n);break;case 19:Z(it);break;case 10:Cn(n.type);break;case 22:case 23:Rn(n),_u(),e!==null&&Z(Gi);break;case 24:Cn(nt)}}function no(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==c)}}catch(w){Re(n,n.return,w)}}function si(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var v=o.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,c=n;var k=a,B=w;try{B()}catch(H){Re(c,k,H)}}}o=o.next}while(o!==d)}}catch(H){Re(n,n.return,H)}}function W0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(o){Re(e,e.return,o)}}}function J0(e,n,a){a.props=Xi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Re(e,n,o)}}function io(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Re(e,n,c)}}function hn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Re(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Re(e,n,c)}else a.current=null}function eg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Re(e,e.return,c)}}function ud(e,n,a){try{var o=e.stateNode;hj(o,e.type,a,n),o[St]=n}catch(c){Re(e,e.return,c)}}function tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pi(e.type)||e.tag===4}function dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ll));else if(o!==4&&(o===27&&pi(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(fd(e,n,a),e=e.sibling;e!==null;)fd(e,n,a),e=e.sibling}function Qs(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&pi(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qs(e,n,a),e=e.sibling;e!==null;)Qs(e,n,a),e=e.sibling}function ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);dt(n,o,a),n[ht]=e,n[St]=a}catch(d){Re(e,e.return,d)}}var Ln=!1,Ie=!1,hd=!1,ig=typeof WeakSet=="function"?WeakSet:Set,ot=null;function F2(e,n){if(e=e.containerInfo,Nd=pl,e=mp(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,w=-1,k=-1,B=0,H=0,Y=e,_=null;t:for(;;){for(var N;Y!==a||c!==0&&Y.nodeType!==3||(w=v+c),Y!==d||o!==0&&Y.nodeType!==3||(k=v+o),Y.nodeType===3&&(v+=Y.nodeValue.length),(N=Y.firstChild)!==null;)_=Y,Y=N;for(;;){if(Y===e)break t;if(_===a&&++B===c&&(w=v),_===d&&++H===o&&(k=v),(N=Y.nextSibling)!==null)break;Y=_,_=Y.parentNode}Y=N}a=w===-1||k===-1?null:{start:w,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vd={focusedElem:e,selectionRange:a},pl=!1,ot=n;ot!==null;)if(n=ot,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,ot=e;else for(;ot!==null;){switch(n=ot,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ce=Xi(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ce,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Re(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,ot=e;break}ot=n.return}}function ag(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:li(e,a),o&4&&no(5,a);break;case 1:if(li(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Re(a,a.return,v)}else{var c=Xi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Re(a,a.return,v)}}o&64&&W0(a),o&512&&io(a,a.return);break;case 3:if(li(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(v){Re(a,a.return,v)}}break;case 27:n===null&&o&4&&ng(a);case 26:case 5:li(e,a),n===null&&o&4&&eg(a),o&512&&io(a,a.return);break;case 12:li(e,a);break;case 13:li(e,a),o&4&&sg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nj.bind(null,a),bj(e,a))));break;case 22:if(o=a.memoizedState!==null||Ln,!o){n=n!==null&&n.memoizedState!==null||Ie,c=Ln;var d=Ie;Ln=o,(Ie=n)&&!d?ci(e,a,(a.subtreeFlags&8772)!==0):li(e,a),Ln=c,Ie=d}break;case 30:break;default:li(e,a)}}function rg(e){var n=e.alternate;n!==null&&(e.alternate=null,rg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xc(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,At=!1;function Bn(e,n,a){for(a=a.child;a!==null;)og(e,n,a),a=a.sibling}function og(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Zn,a)}catch{}switch(a.tag){case 26:Ie||hn(a,n),Bn(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||hn(a,n);var o=Ne,c=At;pi(a.type)&&(Ne=a.stateNode,At=!1),Bn(e,n,a),ho(a.stateNode),Ne=o,At=c;break;case 5:Ie||hn(a,n);case 6:if(o=Ne,c=At,Ne=null,Bn(e,n,a),Ne=o,At=c,Ne!==null)if(At)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(d){Re(a,n,d)}else try{Ne.removeChild(a.stateNode)}catch(d){Re(a,n,d)}break;case 18:Ne!==null&&(At?(e=Ne,Ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wo(e)):Ig(Ne,a.stateNode));break;case 4:o=Ne,c=At,Ne=a.stateNode.containerInfo,At=!0,Bn(e,n,a),Ne=o,At=c;break;case 0:case 11:case 14:case 15:Ie||si(2,a,n),Ie||si(4,a,n),Bn(e,n,a);break;case 1:Ie||(hn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&J0(a,n,o)),Bn(e,n,a);break;case 21:Bn(e,n,a);break;case 22:Ie=(o=Ie)||a.memoizedState!==null,Bn(e,n,a),Ie=o;break;default:Bn(e,n,a)}}function sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(a){Re(n,n.return,a)}}function I2(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ig),n;default:throw Error(s(435,e.tag))}}function md(e,n){var a=I2(e);n.forEach(function(o){var c=ij.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Bt(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,v=n,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(pi(w.type)){Ne=w.stateNode,At=!1;break e}break;case 5:Ne=w.stateNode,At=!1;break e;case 3:case 4:Ne=w.stateNode.containerInfo,At=!0;break e}w=w.return}if(Ne===null)throw Error(s(160));og(d,v,c),Ne=null,At=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)lg(n,e),n=n.sibling}var nn=null;function lg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bt(n,e),_t(e),o&4&&(si(3,e,e.return),no(3,e),si(5,e,e.return));break;case 1:Bt(n,e),_t(e),o&512&&(Ie||a===null||hn(a,a.return)),o&64&&Ln&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=nn;if(Bt(n,e),_t(e),o&512&&(Ie||a===null||hn(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ar]||d[ht]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),dt(d,o,a),d[ht]=e,at(d),o=d;break e;case"link":var v=ny("link","href",c).get(o+(a.href||""));if(v){for(var w=0;w<v.length;w++)if(d=v[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(w,1);break t}}d=c.createElement(o),dt(d,o,a),c.head.appendChild(d);break;case"meta":if(v=ny("meta","content",c).get(o+(a.content||""))){for(w=0;w<v.length;w++)if(d=v[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(w,1);break t}}d=c.createElement(o),dt(d,o,a),c.head.appendChild(d);break;default:throw Error(s(468,o))}d[ht]=e,at(d),o=d}e.stateNode=o}else iy(c,e.type,e.stateNode);else e.stateNode=ty(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?iy(c,e.type,e.stateNode):ty(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ud(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bt(n,e),_t(e),o&512&&(Ie||a===null||hn(a,a.return)),a!==null&&o&4&&ud(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bt(n,e),_t(e),o&512&&(Ie||a===null||hn(a,a.return)),e.flags&32){c=e.stateNode;try{va(c,"")}catch(N){Re(e,e.return,N)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,ud(e,c,a!==null?a.memoizedProps:c)),o&1024&&(hd=!0);break;case 6:if(Bt(n,e),_t(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(N){Re(e,e.return,N)}}break;case 3:if(fl=null,c=nn,nn=ul(n.containerInfo),Bt(n,e),nn=c,_t(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(N){Re(e,e.return,N)}hd&&(hd=!1,cg(e));break;case 4:o=nn,nn=ul(e.stateNode.containerInfo),Bt(n,e),_t(e),nn=o;break;case 12:Bt(n,e),_t(e);break;case 13:Bt(n,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bd=Dt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,md(e,o)));break;case 22:c=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,B=Ln,H=Ie;if(Ln=B||c,Ie=H||k,Bt(n,e),Ie=H,Ln=B,_t(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||k||Ln||Ie||Fi(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,c)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=k.stateNode;var Y=k.memoizedProps.style,_=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;w.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(N){Re(k,k.return,N)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=c?"":k.memoizedProps}catch(N){Re(k,k.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,md(e,a))));break;case 19:Bt(n,e),_t(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,md(e,o)));break;case 30:break;case 21:break;default:Bt(n,e),_t(e)}}function _t(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(tg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,d=dd(e);Qs(e,d,c);break;case 5:var v=a.stateNode;a.flags&32&&(va(v,""),a.flags&=-33);var w=dd(e);Qs(e,w,v);break;case 3:case 4:var k=a.stateNode.containerInfo,B=dd(e);fd(e,B,k);break;default:throw Error(s(161))}}catch(H){Re(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function li(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(e,n.alternate,n),n=n.sibling}function Fi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:si(4,n,n.return),Fi(n);break;case 1:hn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&J0(n,n.return,a),Fi(n);break;case 27:ho(n.stateNode);case 26:case 5:hn(n,n.return),Fi(n);break;case 22:n.memoizedState===null&&Fi(n);break;case 30:Fi(n);break;default:Fi(n)}e=e.sibling}}function ci(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:ci(c,d,a),no(4,d);break;case 1:if(ci(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(B){Re(o,o.return,B)}if(o=d,c=o.updateQueue,c!==null){var w=o.stateNode;try{var k=c.shared.hiddenCallbacks;if(k!==null)for(c.shared.hiddenCallbacks=null,c=0;c<k.length;c++)Vp(k[c],w)}catch(B){Re(o,o.return,B)}}a&&v&64&&W0(d),io(d,d.return);break;case 27:ng(d);case 26:case 5:ci(c,d,a),a&&o===null&&v&4&&eg(d),io(d,d.return);break;case 12:ci(c,d,a);break;case 13:ci(c,d,a),a&&v&4&&sg(c,d);break;case 22:d.memoizedState===null&&ci(c,d,a),io(d,d.return);break;case 30:break;default:ci(c,d,a)}n=n.sibling}}function pd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function gd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e))}function mn(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ug(e,n,a,o),n=n.sibling}function ug(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:mn(e,n,a,o),c&2048&&no(9,n);break;case 1:mn(e,n,a,o);break;case 3:mn(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e)));break;case 12:if(c&2048){mn(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,v=d.id,w=d.onPostCommit;typeof w=="function"&&w(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Re(n,n.return,k)}}else mn(e,n,a,o);break;case 13:mn(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?mn(e,n,a,o):ao(e,n):d._visibility&2?mn(e,n,a,o):(d._visibility|=2,Na(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&pd(v,n);break;case 24:mn(e,n,a,o),c&2048&&gd(n.alternate,n);break;default:mn(e,n,a,o)}}function Na(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,v=n,w=a,k=o,B=v.flags;switch(v.tag){case 0:case 11:case 15:Na(d,v,w,k,c),no(8,v);break;case 23:break;case 22:var H=v.stateNode;v.memoizedState!==null?H._visibility&2?Na(d,v,w,k,c):ao(d,v):(H._visibility|=2,Na(d,v,w,k,c)),c&&B&2048&&pd(v.alternate,v);break;case 24:Na(d,v,w,k,c),c&&B&2048&&gd(v.alternate,v);break;default:Na(d,v,w,k,c)}n=n.sibling}}function ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:ao(a,o),c&2048&&pd(o.alternate,o);break;case 24:ao(a,o),c&2048&&gd(o.alternate,o);break;default:ao(a,o)}n=n.sibling}}var ro=8192;function Va(e){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)dg(e),e=e.sibling}function dg(e){switch(e.tag){case 26:Va(e),e.flags&ro&&e.memoizedState!==null&&Oj(nn,e.memoizedState,e.memoizedProps);break;case 5:Va(e);break;case 3:case 4:var n=nn;nn=ul(e.stateNode.containerInfo),Va(e),nn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ro,ro=16777216,Va(e),ro=n):Va(e));break;default:Va(e)}}function fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ot=o,mg(o,e)}fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 0:case 11:case 15:oo(e),e.flags&2048&&si(9,e,e.return);break;case 3:oo(e);break;case 12:oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ws(e)):oo(e);break;default:oo(e)}}function Ws(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];ot=o,mg(o,e)}fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:si(8,n,n.return),Ws(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ws(n));break;default:Ws(n)}e=e.sibling}}function mg(e,n){for(;ot!==null;){var a=ot;switch(a.tag){case 0:case 11:case 15:si(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$r(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ot=o;else e:for(a=e;ot!==null;){o=ot;var c=o.sibling,d=o.return;if(rg(o),o===a){ot=null;break e}if(c!==null){c.return=d,ot=c;break e}ot=d}}}var K2={getCacheForType:function(e){var n=mt(nt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Z2=typeof WeakMap=="function"?WeakMap:Map,ke=0,Me=null,ye=null,be=0,Te=0,Nt=null,ui=!1,Pa=!1,yd=!1,_n=0,qe=0,di=0,Ii=0,vd=0,It=0,Ua=0,so=null,Et=null,xd=!1,bd=0,Js=1/0,el=null,fi=null,ut=0,hi=null,Ha=null,$a=0,wd=0,jd=null,pg=null,lo=0,zd=null;function Vt(){if((ke&2)!==0&&be!==0)return be&-be;if(U.T!==null){var e=Ca;return e!==0?e:Dd()}return Rm()}function gg(){It===0&&(It=(be&536870912)===0||ze?Am():536870912);var e=Ft.current;return e!==null&&(e.flags|=32),It}function Pt(e,n,a){(e===Me&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Ya(e,0),mi(e,be,It,!1)),Tr(e,a),((ke&2)===0||e!==Me)&&(e===Me&&((ke&2)===0&&(Ii|=a),qe===4&&mi(e,be,It,!1)),pn(e))}function yg(e,n,a){if((ke&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||kr(e,n),c=o?J2(e,n):Td(e,n,!0),d=o;do{if(c===0){Pa&&!o&&mi(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Q2(a)){c=Td(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var w=e;c=so;var k=w.current.memoizedState.isDehydrated;if(k&&(Ya(w,v).flags|=256),v=Td(w,v,!1),v!==2){if(yd&&!k){w.errorRecoveryDisabledLanes|=d,Ii|=d,c=4;break e}d=Et,Et=c,d!==null&&(Et===null?Et=d:Et.push.apply(Et,d))}c=v}if(d=!1,c!==2)continue}}if(c===1){Ya(e,0),mi(e,n,0,!0);break}e:{switch(o=e,d=c,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:mi(o,n,It,!ui);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=bd+300-Dt(),10<c)){if(mi(o,n,It,!ui),ds(o,0,!0)!==0)break e;o.timeoutHandle=Xg(vg.bind(null,o,a,Et,el,xd,n,It,Ii,Ua,ui,d,2,-0,0),c);break e}vg(o,a,Et,el,xd,n,It,Ii,Ua,ui,d,0,-0,0)}}break}while(!0);pn(e)}function vg(e,n,a,o,c,d,v,w,k,B,H,Y,_,N){if(e.timeoutHandle=-1,Y=n.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:Mj},dg(n),Y=Lj(),Y!==null)){e.cancelPendingCommit=Y(kg.bind(null,e,n,d,a,o,c,v,w,k,H,1,_,N)),mi(e,d,v,!B);return}kg(e,n,d,a,o,c,v,w,k)}function Q2(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!Ot(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mi(e,n,a,o){n&=~vd,n&=~Ii,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-Mt(c),v=1<<d;o[d]=-1,c&=~v}a!==0&&Cm(e,a,n)}function tl(){return(ke&6)===0?(co(0),!1):!0}function Sd(){if(ye!==null){if(Te===0)var e=ye.return;else e=ye,En=$i=null,Hu(e),Ba=null,Jr=0,e=ye;for(;e!==null;)Q0(e.alternate,e),e=e.return;ye=null}}function Ya(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,pj(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sd(),Me=e,ye=a=kn(e.current,null),be=n,Te=0,Nt=null,ui=!1,Pa=kr(e,n),yd=!1,Ua=It=vd=Ii=di=qe=0,Et=so=null,xd=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Mt(o),d=1<<c;n|=e[c],o&=~d}return _n=n,zs(),a}function xg(e,n){pe=null,U.H=$s,n===Gr||n===Ms?(n=_p(),Te=3):n===Op?(n=_p(),Te=4):Te=n===N0?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Nt=n,ye===null&&(qe=1,Fs(e,Yt(n,e.current)))}function bg(){var e=U.H;return U.H=$s,e===null?$s:e}function wg(){var e=U.A;return U.A=K2,e}function kd(){qe=4,ui||(be&4194048)!==be&&Ft.current!==null||(Pa=!0),(di&134217727)===0&&(Ii&134217727)===0||Me===null||mi(Me,be,It,!1)}function Td(e,n,a){var o=ke;ke|=2;var c=bg(),d=wg();(Me!==e||be!==n)&&(el=null,Ya(e,n)),n=!1;var v=qe;e:do try{if(Te!==0&&ye!==null){var w=ye,k=Nt;switch(Te){case 8:Sd(),v=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(n=!0);var B=Te;if(Te=0,Nt=null,Ga(e,w,k,B),a&&Pa){v=0;break e}break;default:B=Te,Te=0,Nt=null,Ga(e,w,k,B)}}W2(),v=qe;break}catch(H){xg(e,H)}while(!0);return n&&e.shellSuspendCounter++,En=$i=null,ke=o,U.H=c,U.A=d,ye===null&&(Me=null,be=0,zs()),v}function W2(){for(;ye!==null;)jg(ye)}function J2(e,n){var a=ke;ke|=2;var o=bg(),c=wg();Me!==e||be!==n?(el=null,Js=Dt()+500,Ya(e,n)):Pa=kr(e,n);e:do try{if(Te!==0&&ye!==null){n=ye;var d=Nt;t:switch(Te){case 1:Te=0,Nt=null,Ga(e,n,d,1);break;case 2:case 9:if(Lp(d)){Te=0,Nt=null,zg(n);break}n=function(){Te!==2&&Te!==9||Me!==e||(Te=7),pn(e)},d.then(n,n);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:Lp(d)?(Te=0,Nt=null,zg(n)):(Te=0,Nt=null,Ga(e,n,d,7));break;case 5:var v=null;switch(ye.tag){case 26:v=ye.memoizedState;case 5:case 27:var w=ye;if(!v||ay(v)){Te=0,Nt=null;var k=w.sibling;if(k!==null)ye=k;else{var B=w.return;B!==null?(ye=B,nl(B)):ye=null}break t}}Te=0,Nt=null,Ga(e,n,d,5);break;case 6:Te=0,Nt=null,Ga(e,n,d,6);break;case 8:Sd(),qe=6;break e;default:throw Error(s(462))}}ej();break}catch(H){xg(e,H)}while(!0);return En=$i=null,U.H=o,U.A=c,ke=a,ye!==null?0:(Me=null,be=0,zs(),qe)}function ej(){for(;ye!==null&&!un();)jg(ye)}function jg(e){var n=K0(e.alternate,e,_n);e.memoizedProps=e.pendingProps,n===null?nl(e):ye=n}function zg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Y0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=Y0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Hu(n);default:Q0(a,n),n=ye=Sp(n,_n),n=K0(a,n,_n)}e.memoizedProps=e.pendingProps,n===null?nl(e):ye=n}function Ga(e,n,a,o){En=$i=null,Hu(n),Ba=null,Jr=0;var c=n.return;try{if(Y2(e,c,n,a,be)){qe=1,Fs(e,Yt(a,e.current)),ye=null;return}}catch(d){if(c!==null)throw ye=c,d;qe=1,Fs(e,Yt(a,e.current)),ye=null;return}n.flags&32768?(ze||o===1?e=!0:Pa||(be&536870912)!==0?e=!1:(ui=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ft.current,o!==null&&o.tag===13&&(o.flags|=16384))),Sg(n,e)):nl(n)}function nl(e){var n=e;do{if((n.flags&32768)!==0){Sg(n,ui);return}e=n.return;var a=q2(n.alternate,n,_n);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);qe===0&&(qe=5)}function Sg(e,n){do{var a=X2(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);qe=6,ye=null}function kg(e,n,a,o,c,d,v,w,k){e.cancelPendingCommit=null;do il();while(ut!==0);if((ke&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=gu,Mw(e,a,d,v,w,k),e===Me&&(ye=Me=null,be=0),Ha=n,hi=e,$a=a,wd=d,jd=c,pg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aj(Ri,function(){return Dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,c=I.p,I.p=2,v=ke,ke|=4;try{F2(e,n,a)}finally{ke=v,I.p=c,U.T=o}}ut=1,Tg(),Ag(),Eg()}}function Tg(){if(ut===1){ut=0;var e=hi,n=Ha,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var c=ke;ke|=4;try{lg(n,e);var d=Vd,v=mp(e.containerInfo),w=d.focusedElem,k=d.selectionRange;if(v!==w&&w&&w.ownerDocument&&hp(w.ownerDocument.documentElement,w)){if(k!==null&&du(w)){var B=k.start,H=k.end;if(H===void 0&&(H=B),"selectionStart"in w)w.selectionStart=B,w.selectionEnd=Math.min(H,w.value.length);else{var Y=w.ownerDocument||document,_=Y&&Y.defaultView||window;if(_.getSelection){var N=_.getSelection(),ce=w.textContent.length,oe=Math.min(k.start,ce),De=k.end===void 0?oe:Math.min(k.end,ce);!N.extend&&oe>De&&(v=De,De=oe,oe=v);var R=fp(w,oe),E=fp(w,De);if(R&&E&&(N.rangeCount!==1||N.anchorNode!==R.node||N.anchorOffset!==R.offset||N.focusNode!==E.node||N.focusOffset!==E.offset)){var M=Y.createRange();M.setStart(R.node,R.offset),N.removeAllRanges(),oe>De?(N.addRange(M),N.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),N.addRange(M))}}}}for(Y=[],N=w;N=N.parentNode;)N.nodeType===1&&Y.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Y.length;w++){var $=Y[w];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}pl=!!Nd,Vd=Nd=null}finally{ke=c,I.p=o,U.T=a}}e.current=n,ut=2}}function Ag(){if(ut===2){ut=0;var e=hi,n=Ha,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var c=ke;ke|=4;try{ag(e,n.alternate,n)}finally{ke=c,I.p=o,U.T=a}}ut=3}}function Eg(){if(ut===4||ut===3){ut=0,ca();var e=hi,n=Ha,a=$a,o=pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ut=5:(ut=0,Ha=hi=null,Cg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(fi=null),Gc(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Zn,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,c=I.p,I.p=2,U.T=null;try{for(var d=e.onRecoverableError,v=0;v<o.length;v++){var w=o[v];d(w.value,{componentStack:w.stack})}}finally{U.T=n,I.p=c}}($a&3)!==0&&il(),pn(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===zd?lo++:(lo=0,zd=e):lo=0,co(0)}}function Cg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$r(n)))}function il(e){return Tg(),Ag(),Eg(),Dg()}function Dg(){if(ut!==5)return!1;var e=hi,n=wd;wd=0;var a=Gc($a),o=U.T,c=I.p;try{I.p=32>a?32:a,U.T=null,a=jd,jd=null;var d=hi,v=$a;if(ut=0,Ha=hi=null,$a=0,(ke&6)!==0)throw Error(s(331));var w=ke;if(ke|=4,hg(d.current),ug(d,d.current,v,a),ke=w,co(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Zn,d)}catch{}return!0}finally{I.p=c,U.T=o,Cg(e,n)}}function Rg(e,n,a){n=Yt(a,n),n=td(e.stateNode,n,2),e=ii(e,n,2),e!==null&&(Tr(e,2),pn(e))}function Re(e,n,a){if(e.tag===3)Rg(e,e,a);else for(;n!==null;){if(n.tag===3){Rg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fi===null||!fi.has(o))){e=Yt(a,e),a=B0(2),o=ii(n,a,2),o!==null&&(_0(a,o,n,e),Tr(o,2),pn(o));break}}n=n.return}}function Ad(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Z2;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(yd=!0,c.add(a),e=tj.bind(null,e,n,a),n.then(e,e))}function tj(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Me===e&&(be&a)===a&&(qe===4||qe===3&&(be&62914560)===be&&300>Dt()-bd?(ke&2)===0&&Ya(e,0):vd|=a,Ua===be&&(Ua=0)),pn(e)}function Mg(e,n){n===0&&(n=Em()),e=ka(e,n),e!==null&&(Tr(e,n),pn(e))}function nj(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(e,a)}function ij(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Mg(e,a)}function aj(e,n){return zt(e,n)}var al=null,qa=null,Ed=!1,rl=!1,Cd=!1,Ki=0;function pn(e){e!==qa&&e.next===null&&(qa===null?al=qa=e:qa=qa.next=e),rl=!0,Ed||(Ed=!0,oj())}function co(e,n){if(!Cd&&rl){Cd=!0;do for(var a=!1,o=al;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var v=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Mt(42|e)+1)-1,d&=c&~(v&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,_g(o,d))}else d=be,d=ds(o,o===Me?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||kr(o,d)||(a=!0,_g(o,d));o=o.next}while(a);Cd=!1}}function rj(){Og()}function Og(){rl=Ed=!1;var e=0;Ki!==0&&(mj()&&(e=Ki),Ki=0);for(var n=Dt(),a=null,o=al;o!==null;){var c=o.next,d=Lg(o,n);d===0?(o.next=null,a===null?al=c:a.next=c,c===null&&(qa=a)):(a=o,(e!==0||(d&3)!==0)&&(rl=!0)),o=c}co(e)}function Lg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Mt(d),w=1<<v,k=c[v];k===-1?((w&a)===0||(w&o)!==0)&&(c[v]=Rw(w,n)):k<=n&&(e.expiredLanes|=w),d&=~w}if(n=Me,a=be,a=ds(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Di(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kr(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Di(o),Gc(a)){case 2:case 8:a=In;break;case 32:a=Ri;break;case 268435456:a=Kn;break;default:a=Ri}return o=Bg.bind(null,e),a=zt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Di(o),e.callbackPriority=2,e.callbackNode=null,2}function Bg(e,n){if(ut!==0&&ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(il()&&e.callbackNode!==a)return null;var o=be;return o=ds(e,e===Me?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(yg(e,o,n),Lg(e,Dt()),e.callbackNode!=null&&e.callbackNode===a?Bg.bind(null,e):null)}function _g(e,n){if(il())return null;yg(e,n,!0)}function oj(){gj(function(){(ke&6)!==0?zt(Fn,rj):Og()})}function Dd(){return Ki===0&&(Ki=Am()),Ki}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gs(""+e)}function Vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function sj(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=Ng((c[St]||null).action),v=o.submitter;v&&(n=(n=v[St]||null)?Ng(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var w=new bs("action","action",null,o,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ki!==0){var k=v?Vg(c,v):new FormData(c);Zu(a,{pending:!0,data:k,method:c.method,action:d},null,k)}}else typeof d=="function"&&(w.preventDefault(),k=v?Vg(c,v):new FormData(c),Zu(a,{pending:!0,data:k,method:c.method,action:d},d,k))},currentTarget:c}]})}}for(var Rd=0;Rd<pu.length;Rd++){var Md=pu[Rd],lj=Md.toLowerCase(),cj=Md[0].toUpperCase()+Md.slice(1);tn(lj,"on"+cj)}tn(yp,"onAnimationEnd"),tn(vp,"onAnimationIteration"),tn(xp,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(T2,"onTransitionRun"),tn(A2,"onTransitionStart"),tn(E2,"onTransitionCancel"),tn(bp,"onTransitionEnd"),pa("onMouseEnter",["mouseout","mouseover"]),pa("onMouseLeave",["mouseout","mouseover"]),pa("onPointerEnter",["pointerout","pointerover"]),pa("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uj=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function Pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var v=o.length-1;0<=v;v--){var w=o[v],k=w.instance,B=w.currentTarget;if(w=w.listener,k!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=B;try{d(c)}catch(H){Xs(H)}c.currentTarget=null,d=k}else for(v=0;v<o.length;v++){if(w=o[v],k=w.instance,B=w.currentTarget,w=w.listener,k!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=B;try{d(c)}catch(H){Xs(H)}c.currentTarget=null,d=k}}}}function ve(e,n){var a=n[qc];a===void 0&&(a=n[qc]=new Set);var o=e+"__bubble";a.has(o)||(Ug(n,e,2,!1),a.add(o))}function Od(e,n,a){var o=0;n&&(o|=4),Ug(a,e,o,n)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Ld(e){if(!e[ol]){e[ol]=!0,Om.forEach(function(a){a!=="selectionchange"&&(uj.has(a)||Od(a,!1,e),Od(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ol]||(n[ol]=!0,Od("selectionchange",!1,n))}}function Ug(e,n,a,o){switch(uy(n)){case 2:var c=Nj;break;case 8:c=Vj;break;default:c=Id}a=c.bind(null,n,a,e),c=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Bd(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var w=o.stateNode.containerInfo;if(w===c)break;if(v===4)for(v=o.return;v!==null;){var k=v.tag;if((k===3||k===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;w!==null;){if(v=fa(w),v===null)return;if(k=v.tag,k===5||k===6||k===26||k===27){o=d=v;continue e}w=w.parentNode}}o=o.return}Fm(function(){var B=d,H=eu(a),Y=[];e:{var _=wp.get(e);if(_!==void 0){var N=bs,ce=e;switch(e){case"keypress":if(vs(a)===0)break e;case"keydown":case"keyup":N=a2;break;case"focusin":ce="focus",N=ou;break;case"focusout":ce="blur",N=ou;break;case"beforeblur":case"afterblur":N=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Xw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=s2;break;case yp:case vp:case xp:N=Kw;break;case bp:N=c2;break;case"scroll":case"scrollend":N=Gw;break;case"wheel":N=d2;break;case"copy":case"cut":case"paste":N=Qw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Wm;break;case"toggle":case"beforetoggle":N=h2}var oe=(n&4)!==0,De=!oe&&(e==="scroll"||e==="scrollend"),R=oe?_!==null?_+"Capture":null:_;oe=[];for(var E=B,M;E!==null;){var $=E;if(M=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||M===null||R===null||($=Cr(E,R),$!=null&&oe.push(fo(E,$,M))),De)break;E=E.return}0<oe.length&&(_=new N(_,ce,null,a,H),Y.push({event:_,listeners:oe}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",_&&a!==Jc&&(ce=a.relatedTarget||a.fromElement)&&(fa(ce)||ce[da]))break e;if((N||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,N?(ce=a.relatedTarget||a.toElement,N=B,ce=ce?fa(ce):null,ce!==null&&(De=u(ce),oe=ce.tag,ce!==De||oe!==5&&oe!==27&&oe!==6)&&(ce=null)):(N=null,ce=B),N!==ce)){if(oe=Zm,$="onMouseLeave",R="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Wm,$="onPointerLeave",R="onPointerEnter",E="pointer"),De=N==null?_:Er(N),M=ce==null?_:Er(ce),_=new oe($,E+"leave",N,a,H),_.target=De,_.relatedTarget=M,$=null,fa(H)===B&&(oe=new oe(R,E+"enter",ce,a,H),oe.target=M,oe.relatedTarget=De,$=oe),De=$,N&&ce)t:{for(oe=N,R=ce,E=0,M=oe;M;M=Xa(M))E++;for(M=0,$=R;$;$=Xa($))M++;for(;0<E-M;)oe=Xa(oe),E--;for(;0<M-E;)R=Xa(R),M--;for(;E--;){if(oe===R||R!==null&&oe===R.alternate)break t;oe=Xa(oe),R=Xa(R)}oe=null}else oe=null;N!==null&&Hg(Y,_,N,oe,!1),ce!==null&&De!==null&&Hg(Y,De,ce,oe,!0)}}e:{if(_=B?Er(B):window,N=_.nodeName&&_.nodeName.toLowerCase(),N==="select"||N==="input"&&_.type==="file")var te=op;else if(ap(_))if(sp)te=z2;else{te=w2;var ge=b2}else N=_.nodeName,!N||N.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?B&&Wc(B.elementType)&&(te=op):te=j2;if(te&&(te=te(e,B))){rp(Y,te,a,H);break e}ge&&ge(e,_,B),e==="focusout"&&B&&_.type==="number"&&B.memoizedProps.value!=null&&Qc(_,"number",_.value)}switch(ge=B?Er(B):window,e){case"focusin":(ap(ge)||ge.contentEditable==="true")&&(ja=ge,fu=B,Nr=null);break;case"focusout":Nr=fu=ja=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,pp(Y,a,H);break;case"selectionchange":if(k2)break;case"keydown":case"keyup":pp(Y,a,H)}var ie;if(lu)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else wa?np(e,a)&&(le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Jm&&a.locale!=="ko"&&(wa||le!=="onCompositionStart"?le==="onCompositionEnd"&&wa&&(ie=Im()):(Jn=H,iu="value"in Jn?Jn.value:Jn.textContent,wa=!0)),ge=sl(B,le),0<ge.length&&(le=new Qm(le,e,null,a,H),Y.push({event:le,listeners:ge}),ie?le.data=ie:(ie=ip(a),ie!==null&&(le.data=ie)))),(ie=p2?g2(e,a):y2(e,a))&&(le=sl(B,"onBeforeInput"),0<le.length&&(ge=new Qm("onBeforeInput","beforeinput",null,a,H),Y.push({event:ge,listeners:le}),ge.data=ie)),sj(Y,e,B,a,H)}Pg(Y,n)})}function fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Cr(e,a),c!=null&&o.unshift(fo(e,c,d)),c=Cr(e,n),c!=null&&o.push(fo(e,c,d))),e.tag===3)return o;e=e.return}return[]}function Xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hg(e,n,a,o,c){for(var d=n._reactName,v=[];a!==null&&a!==o;){var w=a,k=w.alternate,B=w.stateNode;if(w=w.tag,k!==null&&k===o)break;w!==5&&w!==26&&w!==27||B===null||(k=B,c?(B=Cr(a,d),B!=null&&v.unshift(fo(a,B,k))):c||(B=Cr(a,d),B!=null&&v.push(fo(a,B,k)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var dj=/\r\n?/g,fj=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(dj,`
`).replace(fj,"")}function Yg(e,n){return n=$g(n),$g(e)===n}function ll(){}function Ce(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||va(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&va(e,""+o);break;case"className":hs(e,"class",o);break;case"tabIndex":hs(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":hs(e,a,o);break;case"style":qm(e,o,d);break;case"data":if(n!=="object"){hs(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ce(e,n,"name",c.name,c,null),Ce(e,n,"formEncType",c.formEncType,c,null),Ce(e,n,"formMethod",c.formMethod,c,null),Ce(e,n,"formTarget",c.formTarget,c,null)):(Ce(e,n,"encType",c.encType,c,null),Ce(e,n,"method",c.method,c,null),Ce(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ll);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),fs(e,"popover",o);break;case"xlinkActuate":zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":zn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":zn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":zn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":zn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":fs(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$w.get(a)||a,fs(e,a,o))}}function _d(e,n,a,o,c,d){switch(a){case"style":qm(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?va(e,o):(typeof o=="number"||typeof o=="bigint")&&va(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lm.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[St]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):fs(e,a,o)}}}function dt(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ce(e,n,d,v,a,null)}}c&&Ce(e,n,"srcSet",a.srcSet,a,null),o&&Ce(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var w=d=v=c=null,k=null,B=null;for(o in a)if(a.hasOwnProperty(o)){var H=a[o];if(H!=null)switch(o){case"name":c=H;break;case"type":v=H;break;case"checked":k=H;break;case"defaultChecked":B=H;break;case"value":d=H;break;case"defaultValue":w=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,n));break;default:Ce(e,n,o,H,a,null)}}Hm(e,d,w,k,B,v,c,!1),ms(e);return;case"select":ve("invalid",e),o=v=d=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":d=w;break;case"defaultValue":v=w;break;case"multiple":o=w;default:Ce(e,n,c,w,a,null)}n=d,a=v,e.multiple=!!o,n!=null?ya(e,!!o,n,!1):a!=null&&ya(e,!!o,a,!0);return;case"textarea":ve("invalid",e),d=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(w=a[v],w!=null))switch(v){case"value":o=w;break;case"defaultValue":c=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ce(e,n,v,w,a,null)}Ym(e,o,c,d),ms(e);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ce(e,n,k,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<uo.length;o++)ve(uo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ce(e,n,B,o,a,null)}return;default:if(Wc(n)){for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!==void 0&&_d(e,n,H,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Ce(e,n,w,o,a,null))}function hj(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,w=null,k=null,B=null,H=null;for(N in a){var Y=a[N];if(a.hasOwnProperty(N)&&Y!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":k=Y;default:o.hasOwnProperty(N)||Ce(e,n,N,null,o,Y)}}for(var _ in o){var N=o[_];if(Y=a[_],o.hasOwnProperty(_)&&(N!=null||Y!=null))switch(_){case"type":d=N;break;case"name":c=N;break;case"checked":B=N;break;case"defaultChecked":H=N;break;case"value":v=N;break;case"defaultValue":w=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,n));break;default:N!==Y&&Ce(e,n,_,N,o,Y)}}Zc(e,v,w,k,B,H,d,c);return;case"select":N=v=w=_=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":N=k;default:o.hasOwnProperty(d)||Ce(e,n,d,null,o,k)}for(c in o)if(d=o[c],k=a[c],o.hasOwnProperty(c)&&(d!=null||k!=null))switch(c){case"value":_=d;break;case"defaultValue":w=d;break;case"multiple":v=d;default:d!==k&&Ce(e,n,c,d,o,k)}n=w,a=v,o=N,_!=null?ya(e,!!a,_,!1):!!o!=!!a&&(n!=null?ya(e,!!a,n,!0):ya(e,!!a,a?[]:"",!1));return;case"textarea":N=_=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ce(e,n,w,null,o,c)}for(v in o)if(c=o[v],d=a[v],o.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":_=c;break;case"defaultValue":N=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&Ce(e,n,v,c,o,d)}$m(e,_,N);return;case"option":for(var ce in a)if(_=a[ce],a.hasOwnProperty(ce)&&_!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Ce(e,n,ce,null,o,_)}for(k in o)if(_=o[k],N=a[k],o.hasOwnProperty(k)&&_!==N&&(_!=null||N!=null))switch(k){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:Ce(e,n,k,_,o,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)_=a[oe],a.hasOwnProperty(oe)&&_!=null&&!o.hasOwnProperty(oe)&&Ce(e,n,oe,null,o,_);for(B in o)if(_=o[B],N=a[B],o.hasOwnProperty(B)&&_!==N&&(_!=null||N!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,n));break;default:Ce(e,n,B,_,o,N)}return;default:if(Wc(n)){for(var De in a)_=a[De],a.hasOwnProperty(De)&&_!==void 0&&!o.hasOwnProperty(De)&&_d(e,n,De,void 0,o,_);for(H in o)_=o[H],N=a[H],!o.hasOwnProperty(H)||_===N||_===void 0&&N===void 0||_d(e,n,H,_,o,N);return}}for(var R in a)_=a[R],a.hasOwnProperty(R)&&_!=null&&!o.hasOwnProperty(R)&&Ce(e,n,R,null,o,_);for(Y in o)_=o[Y],N=a[Y],!o.hasOwnProperty(Y)||_===N||_==null&&N==null||Ce(e,n,Y,_,o,N)}var Nd=null,Vd=null;function cl(e){return e.nodeType===9?e:e.ownerDocument}function Gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ud=null;function mj(){var e=window.event;return e&&e.type==="popstate"?e===Ud?!1:(Ud=e,!0):(Ud=null,!1)}var Xg=typeof setTimeout=="function"?setTimeout:void 0,pj=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,gj=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(e){return Fg.resolve(null).then(e).catch(yj)}:Xg;function yj(e){setTimeout(function(){throw e})}function pi(e){return e==="head"}function Ig(e,n){var a=n,o=0,c=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var v=e.ownerDocument;if(a&1&&ho(v.documentElement),a&2&&ho(v.body),a&4)for(a=v.head,ho(a),v=a.firstChild;v;){var w=v.nextSibling,k=v.nodeName;v[Ar]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=w}}if(c===0){e.removeChild(d),wo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);wo(n)}function Hd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hd(a),Xc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vj(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ar])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=an(e.nextSibling),e===null)break}return null}function xj(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=an(e.nextSibling),e===null))return null;return e}function $d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function bj(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function an(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Yd=null;function Kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Zg(e,n,a){switch(n=cl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ho(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xc(e)}var Kt=new Map,Qg=new Set;function ul(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nn=I.d;I.d={f:wj,r:jj,D:zj,C:Sj,L:kj,m:Tj,X:Ej,S:Aj,M:Cj};function wj(){var e=Nn.f(),n=tl();return e||n}function jj(e){var n=ha(e);n!==null&&n.tag===5&&n.type==="form"?y0(n):Nn.r(e)}var Fa=typeof document>"u"?null:document;function Wg(e,n,a){var o=Fa;if(o&&typeof n=="string"&&n){var c=$t(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Qg.has(c)||(Qg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),dt(n,"link",e),at(n),o.head.appendChild(n)))}}function zj(e){Nn.D(e),Wg("dns-prefetch",e,null)}function Sj(e,n){Nn.C(e,n),Wg("preconnect",e,n)}function kj(e,n,a){Nn.L(e,n,a);var o=Fa;if(o&&e&&n){var c='link[rel="preload"][as="'+$t(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+$t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+$t(a.imageSizes)+'"]')):c+='[href="'+$t(e)+'"]';var d=c;switch(n){case"style":d=Ia(e);break;case"script":d=Ka(e)}Kt.has(d)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Kt.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(mo(d))||n==="script"&&o.querySelector(po(d))||(n=o.createElement("link"),dt(n,"link",e),at(n),o.head.appendChild(n)))}}function Tj(e,n){Nn.m(e,n);var a=Fa;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+$t(o)+'"][href="'+$t(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ka(e)}if(!Kt.has(d)&&(e=y({rel:"modulepreload",href:e},n),Kt.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(po(d)))return}o=a.createElement("link"),dt(o,"link",e),at(o),a.head.appendChild(o)}}}function Aj(e,n,a){Nn.S(e,n,a);var o=Fa;if(o&&e){var c=ma(o).hoistableStyles,d=Ia(e);n=n||"default";var v=c.get(d);if(!v){var w={loading:0,preload:null};if(v=o.querySelector(mo(d)))w.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Kt.get(d))&&Gd(e,a);var k=v=o.createElement("link");at(k),dt(k,"link",e),k._p=new Promise(function(B,H){k.onload=B,k.onerror=H}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,dl(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:w},c.set(d,v)}}}function Ej(e,n){Nn.X(e,n);var a=Fa;if(a&&e){var o=ma(a).hoistableScripts,c=Ka(e),d=o.get(c);d||(d=a.querySelector(po(c)),d||(e=y({src:e,async:!0},n),(n=Kt.get(c))&&qd(e,n),d=a.createElement("script"),at(d),dt(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Cj(e,n){Nn.M(e,n);var a=Fa;if(a&&e){var o=ma(a).hoistableScripts,c=Ka(e),d=o.get(c);d||(d=a.querySelector(po(c)),d||(e=y({src:e,async:!0,type:"module"},n),(n=Kt.get(c))&&qd(e,n),d=a.createElement("script"),at(d),dt(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Jg(e,n,a,o){var c=(c=ae.current)?ul(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ia(a.href),a=ma(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ia(a.href);var d=ma(c).hoistableStyles,v=d.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=c.querySelector(mo(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Kt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Kt.set(e,a),d||Dj(c,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ka(a),a=ma(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ia(e){return'href="'+$t(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function ey(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Dj(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),dt(n,"link",a),at(n),e.head.appendChild(n))}function Ka(e){return'[src="'+$t(e)+'"]'}function po(e){return"script[async]"+e}function ty(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+$t(a.href)+'"]');if(o)return n.instance=o,at(o),o;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),at(o),dt(o,"style",c),dl(o,a.precedence,e),n.instance=o;case"stylesheet":c=Ia(a.href);var d=e.querySelector(mo(c));if(d)return n.state.loading|=4,n.instance=d,at(d),d;o=ey(a),(c=Kt.get(c))&&Gd(o,c),d=(e.ownerDocument||e).createElement("link"),at(d);var v=d;return v._p=new Promise(function(w,k){v.onload=w,v.onerror=k}),dt(d,"link",o),n.state.loading|=4,dl(d,a.precedence,e),n.instance=d;case"script":return d=Ka(a.src),(c=e.querySelector(po(d)))?(n.instance=c,at(c),c):(o=a,(c=Kt.get(d))&&(o=y({},a),qd(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),at(c),dt(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dl(o,a.precedence,e));return n.instance}function dl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,v=0;v<o.length;v++){var w=o[v];if(w.dataset.precedence===n)d=w;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fl=null;function ny(e,n,a){if(fl===null){var o=new Map,c=fl=new Map;c.set(a,o)}else c=fl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[Ar]||d[ht]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=e+v;var w=o.get(v);w?w.push(d):o.set(v,[d])}}return o}function iy(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Rj(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ay(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var go=null;function Mj(){}function Oj(e,n,a){if(go===null)throw Error(s(475));var o=go;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Ia(a.href),d=e.querySelector(mo(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=hl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,at(d);return}d=e.ownerDocument||e,a=ey(a),(c=Kt.get(c))&&Gd(a,c),d=d.createElement("link"),at(d);var v=d;v._p=new Promise(function(w,k){v.onload=w,v.onerror=k}),dt(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=hl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Lj(){if(go===null)throw Error(s(475));var e=go;return e.stylesheets&&e.count===0&&Xd(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function hl(){if(this.count--,this.count===0){if(this.stylesheets)Xd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ml=null;function Xd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ml=new Map,n.forEach(Bj,e),ml=null,hl.call(e))}function Bj(e,n){if(!(n.state.loading&4)){var a=ml.get(e);if(a)var o=a.get(null);else{a=new Map,ml.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,c),a.set(v,c),this.count++,o=hl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:D,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function _j(e,n,a,o,c,d,v,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$c(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.hiddenUpdates=$c(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function ry(e,n,a,o,c,d,v,w,k,B,H,Y){return e=new _j(e,n,a,v,w,k,B,Y),n=1,d===!0&&(n|=24),d=Lt(3,null,null,n),e.current=d,d.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ru(d),e}function oy(e){return e?(e=Ta,e):Ta}function sy(e,n,a,o,c,d){c=oy(c),o.context===null?o.context=c:o.pendingContext=c,o=ni(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ii(e,o,n),a!==null&&(Pt(a,e,n),Xr(a,e,n))}function ly(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Fd(e,n){ly(e,n),(e=e.alternate)&&ly(e,n)}function cy(e){if(e.tag===13){var n=ka(e,67108864);n!==null&&Pt(n,e,67108864),Fd(e,67108864)}}var pl=!0;function Nj(e,n,a,o){var c=U.T;U.T=null;var d=I.p;try{I.p=2,Id(e,n,a,o)}finally{I.p=d,U.T=c}}function Vj(e,n,a,o){var c=U.T;U.T=null;var d=I.p;try{I.p=8,Id(e,n,a,o)}finally{I.p=d,U.T=c}}function Id(e,n,a,o){if(pl){var c=Kd(o);if(c===null)Bd(e,n,o,gl,a),dy(e,o);else if(Uj(c,e,n,a,o))o.stopPropagation();else if(dy(e,o),n&4&&-1<Pj.indexOf(e)){for(;c!==null;){var d=ha(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Mi(d.pendingLanes);if(v!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var k=1<<31-Mt(v);w.entanglements[1]|=k,v&=~k}pn(d),(ke&6)===0&&(Js=Dt()+500,co(0))}}break;case 13:w=ka(d,2),w!==null&&Pt(w,d,2),tl(),Fd(d,2)}if(d=Kd(o),d===null&&Bd(e,n,o,gl,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else Bd(e,n,o,null,a)}}function Kd(e){return e=eu(e),Zd(e)}var gl=null;function Zd(e){if(gl=null,e=fa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gl=e,null}function uy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uc()){case Fn:return 2;case In:return 8;case Ri:case ua:return 32;case Kn:return 268435456;default:return 32}default:return 32}}var Qd=!1,gi=null,yi=null,vi=null,vo=new Map,xo=new Map,xi=[],Pj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dy(e,n){switch(e){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":yi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function bo(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=ha(n),n!==null&&cy(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Uj(e,n,a,o,c){switch(n){case"focusin":return gi=bo(gi,e,n,a,o,c),!0;case"dragenter":return yi=bo(yi,e,n,a,o,c),!0;case"mouseover":return vi=bo(vi,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return vo.set(d,bo(vo.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,xo.set(d,bo(xo.get(d)||null,e,n,a,o,c)),!0}return!1}function fy(e){var n=fa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ow(e.priority,function(){if(a.tag===13){var o=Vt();o=Yc(o);var c=ka(a,o);c!==null&&Pt(c,a,o),Fd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Jc=o,a.target.dispatchEvent(o),Jc=null}else return n=ha(a),n!==null&&cy(n),e.blockedOn=a,!1;n.shift()}return!0}function hy(e,n,a){yl(e)&&a.delete(n)}function Hj(){Qd=!1,gi!==null&&yl(gi)&&(gi=null),yi!==null&&yl(yi)&&(yi=null),vi!==null&&yl(vi)&&(vi=null),vo.forEach(hy),xo.forEach(hy)}function vl(e,n){e.blockedOn===n&&(e.blockedOn=null,Qd||(Qd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Hj)))}var xl=null;function my(e){xl!==e&&(xl=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){xl===e&&(xl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Zd(o||a)===null)continue;break}var d=ha(a);d!==null&&(e.splice(n,3),n-=3,Zu(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function wo(e){function n(k){return vl(k,e)}gi!==null&&vl(gi,e),yi!==null&&vl(yi,e),vi!==null&&vl(vi,e),vo.forEach(n),xo.forEach(n);for(var a=0;a<xi.length;a++){var o=xi[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<xi.length&&(a=xi[0],a.blockedOn===null);)fy(a),a.blockedOn===null&&xi.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],v=c[St]||null;if(typeof d=="function")v||my(a);else if(v){var w=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[St]||null)w=v.formAction;else if(Zd(c)!==null)continue}else w=v.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),my(a)}}}function Wd(e){this._internalRoot=e}bl.prototype.render=Wd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Vt();sy(a,o,e,n,null,null)},bl.prototype.unmount=Wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;sy(e.current,2,null,e,null,null),tl(),n[da]=null}};function bl(e){this._internalRoot=e}bl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Rm();e={blockedOn:null,target:e,priority:n};for(var a=0;a<xi.length&&n!==0&&n<xi[a].priority;a++);xi.splice(a,0,e),a===0&&fy(e)}};var py=i.version;if(py!=="19.1.0")throw Error(s(527,py,"19.1.0"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var $j={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{Zn=wl.inject($j),Rt=wl}catch{}}return zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=R0,d=M0,v=O0,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=ry(e,1,!1,null,null,a,o,c,d,v,w,null),e[da]=n.current,Ld(e),new Wd(n)},zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",d=R0,v=M0,w=O0,k=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),n=ry(e,1,!0,n,a??null,o,c,d,v,w,k,B),n.context=oy(null),a=n.current,o=Vt(),o=Yc(o),c=ni(o),c.callback=null,ii(a,c,o),a=o,n.current.lanes=a,Tr(n,a),pn(n),e[da]=n.current,Ld(e),new bl(n)},zo.version="19.1.0",zo}var ky;function ez(){if(ky)return tf.exports;ky=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),tf.exports=Jj(),tf.exports}var tz=ez();const nz=es(tz);var So={},Ty;function iz(){if(Ty)return So;Ty=1,Object.defineProperty(So,"__esModule",{value:!0}),So.parse=f,So.serialize=p;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const j=function(){};return j.prototype=Object.create(null),j})();function f(j,z){const T=new u,O=j.length;if(O<2)return T;const L=(z==null?void 0:z.decode)||y;let C=0;do{const V=j.indexOf("=",C);if(V===-1)break;const D=j.indexOf(";",C),X=D===-1?O:D;if(V>X){C=j.lastIndexOf(";",V-1)+1;continue}const P=g(j,C,V),F=m(j,V,P),K=j.slice(P,F);if(T[K]===void 0){let J=g(j,V+1,X),se=m(j,X,J);const xe=L(j.slice(J,se));T[K]=xe}C=X+1}while(C<O);return T}function g(j,z,T){do{const O=j.charCodeAt(z);if(O!==32&&O!==9)return z}while(++z<T);return T}function m(j,z,T){for(;z>T;){const O=j.charCodeAt(--z);if(O!==32&&O!==9)return z+1}return T}function p(j,z,T){const O=(T==null?void 0:T.encode)||encodeURIComponent;if(!t.test(j))throw new TypeError(`argument name is invalid: ${j}`);const L=O(z);if(!i.test(L))throw new TypeError(`argument val is invalid: ${z}`);let C=j+"="+L;if(!T)return C;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);C+="; Max-Age="+T.maxAge}if(T.domain){if(!r.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);C+="; Domain="+T.domain}if(T.path){if(!s.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);C+="; Path="+T.path}if(T.expires){if(!b(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);C+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(C+="; HttpOnly"),T.secure&&(C+="; Secure"),T.partitioned&&(C+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return C}function y(j){if(j.indexOf("%")===-1)return j;try{return decodeURIComponent(j)}catch{return j}}function b(j){return l.call(j)==="[object Date]"}return So}iz();var Ay="popstate";function az(t={}){function i(s,l){let{pathname:u,search:f,hash:g}=s.location;return $f("",{pathname:u,search:f,hash:g},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(s,l){return typeof l=="string"?l:qo(l)}return oz(i,r,null,t)}function Ue(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function bn(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function rz(){return Math.random().toString(36).substring(2,10)}function Ey(t,i){return{usr:t.state,key:t.key,idx:i}}function $f(t,i,r=null,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof i=="string"?vr(i):i,state:r,key:i&&i.key||s||rz()}}function qo({pathname:t="/",search:i="",hash:r=""}){return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vr(t){let i={};if(t){let r=t.indexOf("#");r>=0&&(i.hash=t.substring(r),t=t.substring(0,r));let s=t.indexOf("?");s>=0&&(i.search=t.substring(s),t=t.substring(0,s)),t&&(i.pathname=t)}return i}function oz(t,i,r,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,g="POP",m=null,p=y();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function y(){return(f.state||{idx:null}).idx}function b(){g="POP";let L=y(),C=L==null?null:L-p;p=L,m&&m({action:g,location:O.location,delta:C})}function j(L,C){g="PUSH";let V=$f(O.location,L,C);p=y()+1;let D=Ey(V,p),X=O.createHref(V);try{f.pushState(D,"",X)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(X)}u&&m&&m({action:g,location:O.location,delta:1})}function z(L,C){g="REPLACE";let V=$f(O.location,L,C);p=y();let D=Ey(V,p),X=O.createHref(V);f.replaceState(D,"",X),u&&m&&m({action:g,location:O.location,delta:0})}function T(L){return sz(L)}let O={get action(){return g},get location(){return t(l,f)},listen(L){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Ay,b),m=L,()=>{l.removeEventListener(Ay,b),m=null}},createHref(L){return i(l,L)},createURL:T,encodeLocation(L){let C=T(L);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:j,replace:z,go(L){return f.go(L)}};return O}function sz(t,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(r,"No window.location.(origin|href) available to create URL");let s=typeof t=="string"?t:qo(t);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Pv(t,i,r="/"){return lz(t,i,r,!1)}function lz(t,i,r,s){let l=typeof i=="string"?vr(i):i,u=Yn(l.pathname||"/",r);if(u==null)return null;let f=Uv(t);cz(f);let g=null;for(let m=0;g==null&&m<f.length;++m){let p=bz(u);g=vz(f[m],p,s)}return g}function Uv(t,i=[],r=[],s=""){let l=(u,f,g)=>{let m={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(Ue(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let p=$n([s,m.relativePath]),y=r.concat(m);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Uv(u.children,i,y,p)),!(u.path==null&&!u.index)&&i.push({path:p,score:gz(p,u.index),routesMeta:y})};return t.forEach((u,f)=>{var g;if(u.path===""||!((g=u.path)!=null&&g.includes("?")))l(u,f);else for(let m of Hv(u.path))l(u,f,m)}),i}function Hv(t){let i=t.split("/");if(i.length===0)return[];let[r,...s]=i,l=r.endsWith("?"),u=r.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=Hv(s.join("/")),g=[];return g.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&g.push(...f),g.map(m=>t.startsWith("/")&&m===""?"/":m)}function cz(t){t.sort((i,r)=>i.score!==r.score?r.score-i.score:yz(i.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var uz=/^:[\w-]+$/,dz=3,fz=2,hz=1,mz=10,pz=-2,Cy=t=>t==="*";function gz(t,i){let r=t.split("/"),s=r.length;return r.some(Cy)&&(s+=pz),i&&(s+=fz),r.filter(l=>!Cy(l)).reduce((l,u)=>l+(uz.test(u)?dz:u===""?hz:mz),s)}function yz(t,i){return t.length===i.length&&t.slice(0,-1).every((s,l)=>s===i[l])?t[t.length-1]-i[i.length-1]:0}function vz(t,i,r=!1){let{routesMeta:s}=t,l={},u="/",f=[];for(let g=0;g<s.length;++g){let m=s[g],p=g===s.length-1,y=u==="/"?i:i.slice(u.length)||"/",b=dc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},y),j=m.route;if(!b&&p&&r&&!s[s.length-1].route.index&&(b=dc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!b)return null;Object.assign(l,b.params),f.push({params:l,pathname:$n([u,b.pathname]),pathnameBase:Sz($n([u,b.pathnameBase])),route:j}),b.pathnameBase!=="/"&&(u=$n([u,b.pathnameBase]))}return f}function dc(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,s]=xz(t.path,t.caseSensitive,t.end),l=i.match(r);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),g=l.slice(1);return{params:s.reduce((p,{paramName:y,isOptional:b},j)=>{if(y==="*"){let T=g[j]||"";f=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const z=g[j];return b&&!z?p[y]=void 0:p[y]=(z||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:t}}function xz(t,i=!1,r=!0){bn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,m)=>(s.push({paramName:g,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(s.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),s]}function bz(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return bn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),t}}function Yn(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,s=t.charAt(r);return s&&s!=="/"?null:t.slice(r)||"/"}function wz(t,i="/"){let{pathname:r,search:s="",hash:l=""}=typeof t=="string"?vr(t):t;return{pathname:r?r.startsWith("/")?r:jz(r,i):i,search:kz(s),hash:Tz(l)}}function jz(t,i){let r=i.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function of(t,i,r,s){return`Cannot include a '${t}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zz(t){return t.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function $v(t){let i=zz(t);return i.map((r,s)=>s===i.length-1?r.pathname:r.pathnameBase)}function Yv(t,i,r,s=!1){let l;typeof t=="string"?l=vr(t):(l={...t},Ue(!l.pathname||!l.pathname.includes("?"),of("?","pathname","search",l)),Ue(!l.pathname||!l.pathname.includes("#"),of("#","pathname","hash",l)),Ue(!l.search||!l.search.includes("#"),of("#","search","hash",l)));let u=t===""||l.pathname==="",f=u?"/":l.pathname,g;if(f==null)g=r;else{let b=i.length-1;if(!s&&f.startsWith("..")){let j=f.split("/");for(;j[0]==="..";)j.shift(),b-=1;l.pathname=j.join("/")}g=b>=0?i[b]:"/"}let m=wz(l,g),p=f&&f!=="/"&&f.endsWith("/"),y=(u||f===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(p||y)&&(m.pathname+="/"),m}var $n=t=>t.join("/").replace(/\/\/+/g,"/"),Sz=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kz=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Tz=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Az(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Gv=["POST","PUT","PATCH","DELETE"];new Set(Gv);var Ez=["GET",...Gv];new Set(Ez);var xr=S.createContext(null);xr.displayName="DataRouter";var Sc=S.createContext(null);Sc.displayName="DataRouterState";var qv=S.createContext({isTransitioning:!1});qv.displayName="ViewTransition";var Cz=S.createContext(new Map);Cz.displayName="Fetchers";var Dz=S.createContext(null);Dz.displayName="Await";var wn=S.createContext(null);wn.displayName="Navigation";var br=S.createContext(null);br.displayName="Location";var jn=S.createContext({outlet:null,matches:[],isDataRoute:!1});jn.displayName="Route";var Ah=S.createContext(null);Ah.displayName="RouteError";function Rz(t,{relative:i}={}){Ue(ts(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=S.useContext(wn),{hash:l,pathname:u,search:f}=ns(t,{relative:i}),g=u;return r!=="/"&&(g=u==="/"?r:$n([r,u])),s.createHref({pathname:g,search:f,hash:l})}function ts(){return S.useContext(br)!=null}function cn(){return Ue(ts(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(br).location}function Mz(){return S.useContext(br).navigationType}var Xv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fv(t){S.useContext(wn).static||S.useLayoutEffect(t)}function kc(){let{isDataRoute:t}=S.useContext(jn);return t?qz():Oz()}function Oz(){Ue(ts(),"useNavigate() may be used only in the context of a <Router> component.");let t=S.useContext(xr),{basename:i,navigator:r}=S.useContext(wn),{matches:s}=S.useContext(jn),{pathname:l}=cn(),u=JSON.stringify($v(s)),f=S.useRef(!1);return Fv(()=>{f.current=!0}),S.useCallback((m,p={})=>{if(bn(f.current,Xv),!f.current)return;if(typeof m=="number"){r.go(m);return}let y=Yv(m,JSON.parse(u),l,p.relative==="path");t==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:$n([i,y.pathname])),(p.replace?r.replace:r.push)(y,p.state,p)},[i,r,u,l,t])}S.createContext(null);function Iv(){let{matches:t}=S.useContext(jn),i=t[t.length-1];return i?i.params:{}}function ns(t,{relative:i}={}){let{matches:r}=S.useContext(jn),{pathname:s}=cn(),l=JSON.stringify($v(r));return S.useMemo(()=>Yv(t,JSON.parse(l),s,i==="path"),[t,l,s,i])}function Lz(t,i){return Kv(t,i)}function Kv(t,i,r,s){var V;Ue(ts(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=S.useContext(wn),{matches:f}=S.useContext(jn),g=f[f.length-1],m=g?g.params:{},p=g?g.pathname:"/",y=g?g.pathnameBase:"/",b=g&&g.route;{let D=b&&b.path||"";Zv(p,!b||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let j=cn(),z;if(i){let D=typeof i=="string"?vr(i):i;Ue(y==="/"||((V=D.pathname)==null?void 0:V.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${D.pathname}" was given in the \`location\` prop.`),z=D}else z=j;let T=z.pathname||"/",O=T;if(y!=="/"){let D=y.replace(/^\//,"").split("/");O="/"+T.replace(/^\//,"").split("/").slice(D.length).join("/")}let L=!u&&r&&r.matches&&r.matches.length>0?r.matches:Pv(t,{pathname:O});bn(b||L!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),bn(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Pz(L&&L.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:$n([y,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?y:$n([y,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,r,s);return i&&C?S.createElement(br.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...z},navigationType:"POP"}},C):C}function Bz(){let t=Gz(),i=Az(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:u},"ErrorBoundary")," or"," ",S.createElement("code",{style:u},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},i),r?S.createElement("pre",{style:l},r):null,f)}var _z=S.createElement(Bz,null),Nz=class extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?S.createElement(jn.Provider,{value:this.props.routeContext},S.createElement(Ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Vz({routeContext:t,match:i,children:r}){let s=S.useContext(xr);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),S.createElement(jn.Provider,{value:t},r)}function Pz(t,i=[],r=null,s=null){if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let l=t,u=r==null?void 0:r.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Ue(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,g=-1;if(r)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(g=m),p.route.id){let{loaderData:y,errors:b}=r,j=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!b||b[p.route.id]===void 0);if(p.route.lazy||j){f=!0,g>=0?l=l.slice(0,g+1):l=[l[0]];break}}}return l.reduceRight((m,p,y)=>{let b,j=!1,z=null,T=null;r&&(b=u&&p.route.id?u[p.route.id]:void 0,z=p.route.errorElement||_z,f&&(g<0&&y===0?(Zv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,T=null):g===y&&(j=!0,T=p.route.hydrateFallbackElement||null)));let O=i.concat(l.slice(0,y+1)),L=()=>{let C;return b?C=z:j?C=T:p.route.Component?C=S.createElement(p.route.Component,null):p.route.element?C=p.route.element:C=m,S.createElement(Vz,{match:p,routeContext:{outlet:m,matches:O,isDataRoute:r!=null},children:C})};return r&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?S.createElement(Nz,{location:r.location,revalidation:r.revalidation,component:z,error:b,children:L(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):L()},null)}function Eh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uz(t){let i=S.useContext(xr);return Ue(i,Eh(t)),i}function Hz(t){let i=S.useContext(Sc);return Ue(i,Eh(t)),i}function $z(t){let i=S.useContext(jn);return Ue(i,Eh(t)),i}function Ch(t){let i=$z(t),r=i.matches[i.matches.length-1];return Ue(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function Yz(){return Ch("useRouteId")}function Gz(){var s;let t=S.useContext(Ah),i=Hz("useRouteError"),r=Ch("useRouteError");return t!==void 0?t:(s=i.errors)==null?void 0:s[r]}function qz(){let{router:t}=Uz("useNavigate"),i=Ch("useNavigate"),r=S.useRef(!1);return Fv(()=>{r.current=!0}),S.useCallback(async(l,u={})=>{bn(r.current,Xv),r.current&&(typeof l=="number"?t.navigate(l):await t.navigate(l,{fromRouteId:i,...u}))},[t,i])}var Dy={};function Zv(t,i,r){!i&&!Dy[t]&&(Dy[t]=!0,bn(!1,r))}S.memo(Xz);function Xz({routes:t,future:i,state:r}){return Kv(t,void 0,r,i)}function wi(t){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fz({basename:t="/",children:i=null,location:r,navigationType:s="POP",navigator:l,static:u=!1}){Ue(!ts(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),g=S.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof r=="string"&&(r=vr(r));let{pathname:m="/",search:p="",hash:y="",state:b=null,key:j="default"}=r,z=S.useMemo(()=>{let T=Yn(m,f);return T==null?null:{location:{pathname:T,search:p,hash:y,state:b,key:j},navigationType:s}},[f,m,p,y,b,j,s]);return bn(z!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:S.createElement(wn.Provider,{value:g},S.createElement(br.Provider,{children:i,value:z}))}function Iz({children:t,location:i}){return Lz(Yf(t),i)}function Yf(t,i=[]){let r=[];return S.Children.forEach(t,(s,l)=>{if(!S.isValidElement(s))return;let u=[...i,l];if(s.type===S.Fragment){r.push.apply(r,Yf(s.props.children,u));return}Ue(s.type===wi,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Yf(s.props.children,u)),r.push(f)}),r}var Jl="get",ec="application/x-www-form-urlencoded";function Tc(t){return t!=null&&typeof t.tagName=="string"}function Kz(t){return Tc(t)&&t.tagName.toLowerCase()==="button"}function Zz(t){return Tc(t)&&t.tagName.toLowerCase()==="form"}function Qz(t){return Tc(t)&&t.tagName.toLowerCase()==="input"}function Wz(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jz(t,i){return t.button===0&&(!i||i==="_self")&&!Wz(t)}var jl=null;function e5(){if(jl===null)try{new FormData(document.createElement("form"),0),jl=!1}catch{jl=!0}return jl}var t5=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sf(t){return t!=null&&!t5.has(t)?(bn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ec}"`),null):t}function n5(t,i){let r,s,l,u,f;if(Zz(t)){let g=t.getAttribute("action");s=g?Yn(g,i):null,r=t.getAttribute("method")||Jl,l=sf(t.getAttribute("enctype"))||ec,u=new FormData(t)}else if(Kz(t)||Qz(t)&&(t.type==="submit"||t.type==="image")){let g=t.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||g.getAttribute("action");if(s=m?Yn(m,i):null,r=t.getAttribute("formmethod")||g.getAttribute("method")||Jl,l=sf(t.getAttribute("formenctype"))||sf(g.getAttribute("enctype"))||ec,u=new FormData(g,t),!e5()){let{name:p,type:y,value:b}=t;if(y==="image"){let j=p?`${p}.`:"";u.append(`${j}x`,"0"),u.append(`${j}y`,"0")}else p&&u.append(p,b)}}else{if(Tc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Jl,s=null,l=ec,f=t}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:r.toLowerCase(),encType:l,formData:u,body:f}}function Dh(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}async function i5(t,i){if(t.id in i)return i[t.id];try{let r=await import(t.module);return i[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function a5(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function r5(t,i,r){let s=await Promise.all(t.map(async l=>{let u=i.routes[l.route.id];if(u){let f=await i5(u,r);return f.links?f.links():[]}return[]}));return c5(s.flat(1).filter(a5).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Ry(t,i,r,s,l,u){let f=(m,p)=>r[p]?m.route.id!==r[p].route.id:!0,g=(m,p)=>{var y;return r[p].pathname!==m.pathname||((y=r[p].route.path)==null?void 0:y.endsWith("*"))&&r[p].params["*"]!==m.params["*"]};return u==="assets"?i.filter((m,p)=>f(m,p)||g(m,p)):u==="data"?i.filter((m,p)=>{var b;let y=s.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(f(m,p)||g(m,p))return!0;if(m.route.shouldRevalidate){let j=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((b=r[0])==null?void 0:b.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function o5(t,i,{includeHydrateFallback:r}={}){return s5(t.map(s=>{let l=i.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function s5(t){return[...new Set(t)]}function l5(t){let i={},r=Object.keys(t).sort();for(let s of r)i[s]=t[s];return i}function c5(t,i){let r=new Set;return new Set(i),t.reduce((s,l)=>{let u=JSON.stringify(l5(l));return r.has(u)||(r.add(u),s.push({key:u,link:l})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var u5=new Set([100,101,204,205]);function d5(t,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname="_root.data":i&&Yn(r.pathname,i)==="/"?r.pathname=`${i.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function Qv(){let t=S.useContext(xr);return Dh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function f5(){let t=S.useContext(Sc);return Dh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Rh=S.createContext(void 0);Rh.displayName="FrameworkContext";function Wv(){let t=S.useContext(Rh);return Dh(t,"You must render this element inside a <HydratedRouter> element"),t}function h5(t,i){let r=S.useContext(Rh),[s,l]=S.useState(!1),[u,f]=S.useState(!1),{onFocus:g,onBlur:m,onMouseEnter:p,onMouseLeave:y,onTouchStart:b}=i,j=S.useRef(null);S.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let O=C=>{C.forEach(V=>{f(V.isIntersecting)})},L=new IntersectionObserver(O,{threshold:.5});return j.current&&L.observe(j.current),()=>{L.disconnect()}}},[t]),S.useEffect(()=>{if(s){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[s]);let z=()=>{l(!0)},T=()=>{l(!1),f(!1)};return r?t!=="intent"?[u,j,{}]:[u,j,{onFocus:ko(g,z),onBlur:ko(m,T),onMouseEnter:ko(p,z),onMouseLeave:ko(y,T),onTouchStart:ko(b,z)}]:[!1,j,{}]}function ko(t,i){return r=>{t&&t(r),r.defaultPrevented||i(r)}}function m5({page:t,...i}){let{router:r}=Qv(),s=S.useMemo(()=>Pv(r.routes,t,r.basename),[r.routes,t,r.basename]);return s?S.createElement(g5,{page:t,matches:s,...i}):null}function p5(t){let{manifest:i,routeModules:r}=Wv(),[s,l]=S.useState([]);return S.useEffect(()=>{let u=!1;return r5(t,i,r).then(f=>{u||l(f)}),()=>{u=!0}},[t,i,r]),s}function g5({page:t,matches:i,...r}){let s=cn(),{manifest:l,routeModules:u}=Wv(),{basename:f}=Qv(),{loaderData:g,matches:m}=f5(),p=S.useMemo(()=>Ry(t,i,m,l,s,"data"),[t,i,m,l,s]),y=S.useMemo(()=>Ry(t,i,m,l,s,"assets"),[t,i,m,l,s]),b=S.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let T=new Set,O=!1;if(i.forEach(C=>{var D;let V=l.routes[C.route.id];!V||!V.hasLoader||(!p.some(X=>X.route.id===C.route.id)&&C.route.id in g&&((D=u[C.route.id])!=null&&D.shouldRevalidate)||V.hasClientLoader?O=!0:T.add(C.route.id))}),T.size===0)return[];let L=d5(t,f);return O&&T.size>0&&L.searchParams.set("_routes",i.filter(C=>T.has(C.route.id)).map(C=>C.route.id).join(",")),[L.pathname+L.search]},[f,g,s,l,p,i,t,u]),j=S.useMemo(()=>o5(y,l),[y,l]),z=p5(y);return S.createElement(S.Fragment,null,b.map(T=>S.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...r})),j.map(T=>S.createElement("link",{key:T,rel:"modulepreload",href:T,...r})),z.map(({key:T,link:O})=>S.createElement("link",{key:T,...O})))}function y5(...t){return i=>{t.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var Jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jv&&(window.__reactRouterVersion="7.6.0")}catch{}function v5({basename:t,children:i,window:r}){let s=S.useRef();s.current==null&&(s.current=az({window:r,v5Compat:!0}));let l=s.current,[u,f]=S.useState({action:l.action,location:l.location}),g=S.useCallback(m=>{S.startTransition(()=>f(m))},[f]);return S.useLayoutEffect(()=>l.listen(g),[l,g]),S.createElement(Fz,{basename:t,children:i,location:u.location,navigationType:u.action,navigator:l})}var ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=S.forwardRef(function({onClick:i,discover:r="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:g,target:m,to:p,preventScrollReset:y,viewTransition:b,...j},z){let{basename:T}=S.useContext(wn),O=typeof p=="string"&&ex.test(p),L,C=!1;if(typeof p=="string"&&O&&(L=p,Jv))try{let se=new URL(window.location.href),xe=p.startsWith("//")?new URL(se.protocol+p):new URL(p),Le=Yn(xe.pathname,T);xe.origin===se.origin&&Le!=null?p=Le+xe.search+xe.hash:C=!0}catch{bn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=Rz(p,{relative:l}),[D,X,P]=h5(s,j),F=w5(p,{replace:f,state:g,target:m,preventScrollReset:y,relative:l,viewTransition:b});function K(se){i&&i(se),se.defaultPrevented||F(se)}let J=S.createElement("a",{...j,...P,href:L||V,onClick:C||u?i:K,ref:y5(z,X),target:m,"data-discover":!O&&r==="render"?"true":void 0});return D&&!O?S.createElement(S.Fragment,null,J,S.createElement(m5,{page:V})):J});je.displayName="Link";var Mh=S.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:g,children:m,...p},y){let b=ns(f,{relative:p.relative}),j=cn(),z=S.useContext(Sc),{navigator:T,basename:O}=S.useContext(wn),L=z!=null&&T5(b)&&g===!0,C=T.encodeLocation?T.encodeLocation(b).pathname:b.pathname,V=j.pathname,D=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;r||(V=V.toLowerCase(),D=D?D.toLowerCase():null,C=C.toLowerCase()),D&&O&&(D=Yn(D,O)||D);const X=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let P=V===C||!l&&V.startsWith(C)&&V.charAt(X)==="/",F=D!=null&&(D===C||!l&&D.startsWith(C)&&D.charAt(C.length)==="/"),K={isActive:P,isPending:F,isTransitioning:L},J=P?i:void 0,se;typeof s=="function"?se=s(K):se=[s,P?"active":null,F?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let xe=typeof u=="function"?u(K):u;return S.createElement(je,{...p,"aria-current":J,className:se,ref:y,style:xe,to:f,viewTransition:g},typeof m=="function"?m(K):m)});Mh.displayName="NavLink";var x5=S.forwardRef(({discover:t="render",fetcherKey:i,navigate:r,reloadDocument:s,replace:l,state:u,method:f=Jl,action:g,onSubmit:m,relative:p,preventScrollReset:y,viewTransition:b,...j},z)=>{let T=S5(),O=k5(g,{relative:p}),L=f.toLowerCase()==="get"?"get":"post",C=typeof g=="string"&&ex.test(g),V=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let X=D.nativeEvent.submitter,P=(X==null?void 0:X.getAttribute("formmethod"))||f;T(X||D.currentTarget,{fetcherKey:i,method:P,navigate:r,replace:l,state:u,relative:p,preventScrollReset:y,viewTransition:b})};return S.createElement("form",{ref:z,method:L,action:O,onSubmit:s?m:V,...j,"data-discover":!C&&t==="render"?"true":void 0})});x5.displayName="Form";function b5(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tx(t){let i=S.useContext(xr);return Ue(i,b5(t)),i}function w5(t,{target:i,replace:r,state:s,preventScrollReset:l,relative:u,viewTransition:f}={}){let g=kc(),m=cn(),p=ns(t,{relative:u});return S.useCallback(y=>{if(Jz(y,i)){y.preventDefault();let b=r!==void 0?r:qo(m)===qo(p);g(t,{replace:b,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[m,g,p,r,s,i,t,l,u,f])}var j5=0,z5=()=>`__${String(++j5)}__`;function S5(){let{router:t}=tx("useSubmit"),{basename:i}=S.useContext(wn),r=Yz();return S.useCallback(async(s,l={})=>{let{action:u,method:f,encType:g,formData:m,body:p}=n5(s,i);if(l.navigate===!1){let y=l.fetcherKey||z5();await t.fetch(y,r,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||g,flushSync:l.flushSync})}else await t.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||g,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[t,i,r])}function k5(t,{relative:i}={}){let{basename:r}=S.useContext(wn),s=S.useContext(jn);Ue(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...ns(t||".",{relative:i})},f=cn();if(t==null){u.search=f.search;let g=new URLSearchParams(u.search),m=g.getAll("index");if(m.some(y=>y==="")){g.delete("index"),m.filter(b=>b).forEach(b=>g.append("index",b));let y=g.toString();u.search=y?`?${y}`:""}}return(!t||t===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:$n([r,u.pathname])),qo(u)}function T5(t,i={}){let r=S.useContext(qv);Ue(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=tx("useViewTransitionState"),l=ns(t,{relative:i.relative});if(!r.isTransitioning)return!1;let u=Yn(r.currentLocation.pathname,s)||r.currentLocation.pathname,f=Yn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return dc(l.pathname,f)!=null||dc(l.pathname,u)!=null}[...u5];const nx=S.createContext(),A5=()=>{const[t,i]=S.useState(()=>window.matchMedia("(prefers-color-scheme: dark)").matches);return S.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)"),s=l=>{i(l.matches)};return r.addEventListener?r.addEventListener("change",s):r.addListener(s),()=>{r.removeEventListener?r.removeEventListener("change",s):r.removeListener(s)}},[]),t},E5=({children:t})=>{const i=A5(),[r,s]=S.useState(()=>{const u=localStorage.getItem("flid-theme");return u?u==="dark":i}),l=()=>{s(!r)};return S.useEffect(()=>{localStorage.getItem("flid-theme")||s(i)},[i]),S.useEffect(()=>{localStorage.setItem("flid-theme",r?"dark":"light"),document.documentElement.classList.add("theme-transition"),document.documentElement.classList.add("theme-transition-optimized"),setTimeout(()=>{r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},10);const u=setTimeout(()=>{document.documentElement.classList.remove("theme-transition"),document.documentElement.classList.remove("theme-transition-optimized")},1200);return()=>clearTimeout(u)},[r]),h.jsx(nx.Provider,{value:{darkMode:r,toggleTheme:l},children:t})},C5=()=>{const t=S.useContext(nx);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t};var lf,My;function D5(){if(My)return lf;My=1;var t=typeof Element<"u",i=typeof Map=="function",r=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(u,f){if(u===f)return!0;if(u&&f&&typeof u=="object"&&typeof f=="object"){if(u.constructor!==f.constructor)return!1;var g,m,p;if(Array.isArray(u)){if(g=u.length,g!=f.length)return!1;for(m=g;m--!==0;)if(!l(u[m],f[m]))return!1;return!0}var y;if(i&&u instanceof Map&&f instanceof Map){if(u.size!==f.size)return!1;for(y=u.entries();!(m=y.next()).done;)if(!f.has(m.value[0]))return!1;for(y=u.entries();!(m=y.next()).done;)if(!l(m.value[1],f.get(m.value[0])))return!1;return!0}if(r&&u instanceof Set&&f instanceof Set){if(u.size!==f.size)return!1;for(y=u.entries();!(m=y.next()).done;)if(!f.has(m.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(f)){if(g=u.length,g!=f.length)return!1;for(m=g;m--!==0;)if(u[m]!==f[m])return!1;return!0}if(u.constructor===RegExp)return u.source===f.source&&u.flags===f.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof f.valueOf=="function")return u.valueOf()===f.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof f.toString=="function")return u.toString()===f.toString();if(p=Object.keys(u),g=p.length,g!==Object.keys(f).length)return!1;for(m=g;m--!==0;)if(!Object.prototype.hasOwnProperty.call(f,p[m]))return!1;if(t&&u instanceof Element)return!1;for(m=g;m--!==0;)if(!((p[m]==="_owner"||p[m]==="__v"||p[m]==="__o")&&u.$$typeof)&&!l(u[p[m]],f[p[m]]))return!1;return!0}return u!==u&&f!==f}return lf=function(f,g){try{return l(f,g)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},lf}var R5=D5();const M5=es(R5);var cf,Oy;function O5(){if(Oy)return cf;Oy=1;var t=function(i,r,s,l,u,f,g,m){if(!i){var p;if(r===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[s,l,u,f,g,m],b=0;p=new Error(r.replace(/%s/g,function(){return y[b++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}};return cf=t,cf}var L5=O5();const Ly=es(L5);var uf,By;function B5(){return By||(By=1,uf=function(i,r,s,l){var u=s?s.call(l,i,r):void 0;if(u!==void 0)return!!u;if(i===r)return!0;if(typeof i!="object"||!i||typeof r!="object"||!r)return!1;var f=Object.keys(i),g=Object.keys(r);if(f.length!==g.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(r),p=0;p<f.length;p++){var y=f[p];if(!m(y))return!1;var b=i[y],j=r[y];if(u=s?s.call(l,b,j,y):void 0,u===!1||u===void 0&&b!==j)return!1}return!0}),uf}var _5=B5();const N5=es(_5);var ix=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(ix||{}),df={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},_y=Object.values(ix),Oh={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},V5=Object.entries(Oh).reduce((t,[i,r])=>(t[r]=i,t),{}),on="data-rh",sr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},lr=(t,i)=>{for(let r=t.length-1;r>=0;r-=1){const s=t[r];if(Object.prototype.hasOwnProperty.call(s,i))return s[i]}return null},P5=t=>{let i=lr(t,"title");const r=lr(t,sr.TITLE_TEMPLATE);if(Array.isArray(i)&&(i=i.join("")),r&&i)return r.replace(/%s/g,()=>i);const s=lr(t,sr.DEFAULT_TITLE);return i||s||void 0},U5=t=>lr(t,sr.ON_CHANGE_CLIENT_STATE)||(()=>{}),ff=(t,i)=>i.filter(r=>typeof r[t]<"u").map(r=>r[t]).reduce((r,s)=>({...r,...s}),{}),H5=(t,i)=>i.filter(r=>typeof r.base<"u").map(r=>r.base).reverse().reduce((r,s)=>{if(!r.length){const l=Object.keys(s);for(let u=0;u<l.length;u+=1){const g=l[u].toLowerCase();if(t.indexOf(g)!==-1&&s[g])return r.concat(s)}}return r},[]),$5=t=>console&&typeof console.warn=="function"&&console.warn(t),To=(t,i,r)=>{const s={};return r.filter(l=>Array.isArray(l[t])?!0:(typeof l[t]<"u"&&$5(`Helmet: ${t} should be of type "Array". Instead found type "${typeof l[t]}"`),!1)).map(l=>l[t]).reverse().reduce((l,u)=>{const f={};u.filter(m=>{let p;const y=Object.keys(m);for(let j=0;j<y.length;j+=1){const z=y[j],T=z.toLowerCase();i.indexOf(T)!==-1&&!(p==="rel"&&m[p].toLowerCase()==="canonical")&&!(T==="rel"&&m[T].toLowerCase()==="stylesheet")&&(p=T),i.indexOf(z)!==-1&&(z==="innerHTML"||z==="cssText"||z==="itemprop")&&(p=z)}if(!p||!m[p])return!1;const b=m[p].toLowerCase();return s[p]||(s[p]={}),f[p]||(f[p]={}),s[p][b]?!1:(f[p][b]=!0,!0)}).reverse().forEach(m=>l.push(m));const g=Object.keys(f);for(let m=0;m<g.length;m+=1){const p=g[m],y={...s[p],...f[p]};s[p]=y}return l},[]).reverse()},Y5=(t,i)=>{if(Array.isArray(t)&&t.length){for(let r=0;r<t.length;r+=1)if(t[r][i])return!0}return!1},G5=t=>({baseTag:H5(["href"],t),bodyAttributes:ff("bodyAttributes",t),defer:lr(t,sr.DEFER),encode:lr(t,sr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ff("htmlAttributes",t),linkTags:To("link",["rel","href"],t),metaTags:To("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:To("noscript",["innerHTML"],t),onChangeClientState:U5(t),scriptTags:To("script",["src","innerHTML"],t),styleTags:To("style",["cssText"],t),title:P5(t),titleAttributes:ff("titleAttributes",t),prioritizeSeoTags:Y5(t,sr.PRIORITIZE_SEO_TAGS)}),ax=t=>Array.isArray(t)?t.join(""):t,q5=(t,i)=>{const r=Object.keys(t);for(let s=0;s<r.length;s+=1)if(i[r[s]]&&i[r[s]].includes(t[r[s]]))return!0;return!1},hf=(t,i)=>Array.isArray(t)?t.reduce((r,s)=>(q5(s,i)?r.priority.push(s):r.default.push(s),r),{priority:[],default:[]}):{default:t,priority:[]},Ny=(t,i)=>({...t,[i]:void 0}),X5=["noscript","script","style"],Gf=(t,i=!0)=>i===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),rx=t=>Object.keys(t).reduce((i,r)=>{const s=typeof t[r]<"u"?`${r}="${t[r]}"`:`${r}`;return i?`${i} ${s}`:s},""),F5=(t,i,r,s)=>{const l=rx(r),u=ax(i);return l?`<${t} ${on}="true" ${l}>${Gf(u,s)}</${t}>`:`<${t} ${on}="true">${Gf(u,s)}</${t}>`},I5=(t,i,r=!0)=>i.reduce((s,l)=>{const u=l,f=Object.keys(u).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,y)=>{const b=typeof u[y]>"u"?y:`${y}="${Gf(u[y],r)}"`;return p?`${p} ${b}`:b},""),g=u.innerHTML||u.cssText||"",m=X5.indexOf(t)===-1;return`${s}<${t} ${on}="true" ${f}${m?"/>":`>${g}</${t}>`}`},""),ox=(t,i={})=>Object.keys(t).reduce((r,s)=>{const l=Oh[s];return r[l||s]=t[s],r},i),K5=(t,i,r)=>{const s={key:i,[on]:!0},l=ox(r,s);return[tt.createElement("title",l,i)]},tc=(t,i)=>i.map((r,s)=>{const l={key:s,[on]:!0};return Object.keys(r).forEach(u=>{const g=Oh[u]||u;if(g==="innerHTML"||g==="cssText"){const m=r.innerHTML||r.cssText;l.dangerouslySetInnerHTML={__html:m}}else l[g]=r[u]}),tt.createElement(t,l)}),Wt=(t,i,r=!0)=>{switch(t){case"title":return{toComponent:()=>K5(t,i.title,i.titleAttributes),toString:()=>F5(t,i.title,i.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ox(i),toString:()=>rx(i)};default:return{toComponent:()=>tc(t,i),toString:()=>I5(t,i,r)}}},Z5=({metaTags:t,linkTags:i,scriptTags:r,encode:s})=>{const l=hf(t,df.meta),u=hf(i,df.link),f=hf(r,df.script);return{priorityMethods:{toComponent:()=>[...tc("meta",l.priority),...tc("link",u.priority),...tc("script",f.priority)],toString:()=>`${Wt("meta",l.priority,s)} ${Wt("link",u.priority,s)} ${Wt("script",f.priority,s)}`},metaTags:l.default,linkTags:u.default,scriptTags:f.default}},Q5=t=>{const{baseTag:i,bodyAttributes:r,encode:s=!0,htmlAttributes:l,noscriptTags:u,styleTags:f,title:g="",titleAttributes:m,prioritizeSeoTags:p}=t;let{linkTags:y,metaTags:b,scriptTags:j}=t,z={toComponent:()=>{},toString:()=>""};return p&&({priorityMethods:z,linkTags:y,metaTags:b,scriptTags:j}=Z5(t)),{priority:z,base:Wt("base",i,s),bodyAttributes:Wt("bodyAttributes",r,s),htmlAttributes:Wt("htmlAttributes",l,s),link:Wt("link",y,s),meta:Wt("meta",b,s),noscript:Wt("noscript",u,s),script:Wt("script",j,s),style:Wt("style",f,s),title:Wt("title",{title:g,titleAttributes:m},s)}},qf=Q5,zl=[],sx=!!(typeof window<"u"&&window.document&&window.document.createElement),Xf=class{constructor(t,i){Vn(this,"instances",[]);Vn(this,"canUseDOM",sx);Vn(this,"context");Vn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?zl:this.instances,add:t=>{(this.canUseDOM?zl:this.instances).push(t)},remove:t=>{const i=(this.canUseDOM?zl:this.instances).indexOf(t);(this.canUseDOM?zl:this.instances).splice(i,1)}}});this.context=t,this.canUseDOM=i||!1,i||(t.helmet=qf({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},W5={},lx=tt.createContext(W5),aa,cx=(aa=class extends S.Component{constructor(r){super(r);Vn(this,"helmetData");this.helmetData=new Xf(this.props.context||{},aa.canUseDOM)}render(){return tt.createElement(lx.Provider,{value:this.helmetData.value},this.props.children)}},Vn(aa,"canUseDOM",sx),aa),Za=(t,i)=>{const r=document.head||document.querySelector("head"),s=r.querySelectorAll(`${t}[${on}]`),l=[].slice.call(s),u=[];let f;return i&&i.length&&i.forEach(g=>{const m=document.createElement(t);for(const p in g)if(Object.prototype.hasOwnProperty.call(g,p))if(p==="innerHTML")m.innerHTML=g.innerHTML;else if(p==="cssText")m.styleSheet?m.styleSheet.cssText=g.cssText:m.appendChild(document.createTextNode(g.cssText));else{const y=p,b=typeof g[y]>"u"?"":g[y];m.setAttribute(p,b)}m.setAttribute(on,"true"),l.some((p,y)=>(f=y,m.isEqualNode(p)))?l.splice(f,1):u.push(m)}),l.forEach(g=>{var m;return(m=g.parentNode)==null?void 0:m.removeChild(g)}),u.forEach(g=>r.appendChild(g)),{oldTags:l,newTags:u}},Ff=(t,i)=>{const r=document.getElementsByTagName(t)[0];if(!r)return;const s=r.getAttribute(on),l=s?s.split(","):[],u=[...l],f=Object.keys(i);for(const g of f){const m=i[g]||"";r.getAttribute(g)!==m&&r.setAttribute(g,m),l.indexOf(g)===-1&&l.push(g);const p=u.indexOf(g);p!==-1&&u.splice(p,1)}for(let g=u.length-1;g>=0;g-=1)r.removeAttribute(u[g]);l.length===u.length?r.removeAttribute(on):r.getAttribute(on)!==f.join(",")&&r.setAttribute(on,f.join(","))},J5=(t,i)=>{typeof t<"u"&&document.title!==t&&(document.title=ax(t)),Ff("title",i)},Vy=(t,i)=>{const{baseTag:r,bodyAttributes:s,htmlAttributes:l,linkTags:u,metaTags:f,noscriptTags:g,onChangeClientState:m,scriptTags:p,styleTags:y,title:b,titleAttributes:j}=t;Ff("body",s),Ff("html",l),J5(b,j);const z={baseTag:Za("base",r),linkTags:Za("link",u),metaTags:Za("meta",f),noscriptTags:Za("noscript",g),scriptTags:Za("script",p),styleTags:Za("style",y)},T={},O={};Object.keys(z).forEach(L=>{const{newTags:C,oldTags:V}=z[L];C.length&&(T[L]=C),V.length&&(O[L]=z[L].oldTags)}),i&&i(),m(t,T,O)},Ao=null,eS=t=>{Ao&&cancelAnimationFrame(Ao),t.defer?Ao=requestAnimationFrame(()=>{Vy(t,()=>{Ao=null})}):(Vy(t),Ao=null)},tS=eS,Py=class extends S.Component{constructor(){super(...arguments);Vn(this,"rendered",!1)}shouldComponentUpdate(i){return!N5(i,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:i}=this.props.context;i.remove(this),this.emitChange()}emitChange(){const{helmetInstances:i,setHelmet:r}=this.props.context;let s=null;const l=G5(i.get().map(u=>{const f={...u.props};return delete f.context,f}));cx.canUseDOM?tS(l):qf&&(s=qf(l)),r(s)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:i}=this.props.context;i.add(this),this.emitChange()}render(){return this.init(),null}},Hf,nS=(Hf=class extends S.Component{shouldComponentUpdate(t){return!M5(Ny(this.props,"helmetData"),Ny(t,"helmetData"))}mapNestedChildrenToProps(t,i){if(!i)return null;switch(t.type){case"script":case"noscript":return{innerHTML:i};case"style":return{cssText:i};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,i,r,s){return{...i,[t.type]:[...i[t.type]||[],{...r,...this.mapNestedChildrenToProps(t,s)}]}}mapObjectTypeChildren(t,i,r,s){switch(t.type){case"title":return{...i,[t.type]:s,titleAttributes:{...r}};case"body":return{...i,bodyAttributes:{...r}};case"html":return{...i,htmlAttributes:{...r}};default:return{...i,[t.type]:{...r}}}}mapArrayTypeChildrenToProps(t,i){let r={...i};return Object.keys(t).forEach(s=>{r={...r,[s]:t[s]}}),r}warnOnInvalidChildren(t,i){return Ly(_y.some(r=>t.type===r),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${_y.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Ly(!i||typeof i=="string"||Array.isArray(i)&&!i.some(r=>typeof r!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,i){let r={};return tt.Children.forEach(t,s=>{if(!s||!s.props)return;const{children:l,...u}=s.props,f=Object.keys(u).reduce((m,p)=>(m[V5[p]||p]=u[p],m),{});let{type:g}=s;switch(typeof g=="symbol"?g=g.toString():this.warnOnInvalidChildren(s,l),g){case"Symbol(react.fragment)":i=this.mapChildrenToProps(l,i);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(s,r,f,l);break;default:i=this.mapObjectTypeChildren(s,i,f,l);break}}),this.mapArrayTypeChildrenToProps(r,i)}render(){const{children:t,...i}=this.props;let r={...i},{helmetData:s}=i;if(t&&(r=this.mapChildrenToProps(t,r)),s&&!(s instanceof Xf)){const l=s;s=new Xf(l.context,!0),delete r.helmetData}return s?tt.createElement(Py,{...r,context:s.value}):tt.createElement(lx.Consumer,null,l=>tt.createElement(Py,{...r,context:l}))}},Vn(Hf,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Hf);const Lh=S.createContext({});function Ac(t){const i=S.useRef(null);return i.current===null&&(i.current=t()),i.current}const Bh=typeof window<"u",_h=Bh?S.useLayoutEffect:S.useEffect,Ec=S.createContext(null);function Nh(t,i){t.indexOf(i)===-1&&t.push(i)}function Vh(t,i){const r=t.indexOf(i);r>-1&&t.splice(r,1)}const Gn=(t,i,r)=>r>i?i:r<t?t:r;let Ph=()=>{};const qn={},ux=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function dx(t){return typeof t=="object"&&t!==null}const fx=t=>/^0[^.\s]+$/u.test(t);function Uh(t){let i;return()=>(i===void 0&&(i=t()),i)}const Jt=t=>t,iS=(t,i)=>r=>i(t(r)),is=(...t)=>t.reduce(iS),Xo=(t,i,r)=>{const s=i-t;return s===0?1:(r-t)/s};class Hh{constructor(){this.subscriptions=[]}add(i){return Nh(this.subscriptions,i),()=>Vh(this.subscriptions,i)}notify(i,r,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](i,r,s);else for(let u=0;u<l;u++){const f=this.subscriptions[u];f&&f(i,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const yn=t=>t*1e3,vn=t=>t/1e3;function hx(t,i){return i?t*(1e3/i):0}const mx=(t,i,r)=>(((1-3*r+3*i)*t+(3*r-6*i))*t+3*i)*t,aS=1e-7,rS=12;function oS(t,i,r,s,l){let u,f,g=0;do f=i+(r-i)/2,u=mx(f,s,l)-t,u>0?r=f:i=f;while(Math.abs(u)>aS&&++g<rS);return f}function as(t,i,r,s){if(t===i&&r===s)return Jt;const l=u=>oS(u,0,1,t,r);return u=>u===0||u===1?u:mx(l(u),i,s)}const px=t=>i=>i<=.5?t(2*i)/2:(2-t(2*(1-i)))/2,gx=t=>i=>1-t(1-i),yx=as(.33,1.53,.69,.99),$h=gx(yx),vx=px($h),xx=t=>(t*=2)<1?.5*$h(t):.5*(2-Math.pow(2,-10*(t-1))),Yh=t=>1-Math.sin(Math.acos(t)),bx=gx(Yh),wx=px(Yh),sS=as(.42,0,1,1),lS=as(0,0,.58,1),jx=as(.42,0,.58,1),cS=t=>Array.isArray(t)&&typeof t[0]!="number",zx=t=>Array.isArray(t)&&typeof t[0]=="number",uS={linear:Jt,easeIn:sS,easeInOut:jx,easeOut:lS,circIn:Yh,circInOut:wx,circOut:bx,backIn:$h,backInOut:vx,backOut:yx,anticipate:xx},dS=t=>typeof t=="string",Uy=t=>{if(zx(t)){Ph(t.length===4);const[i,r,s,l]=t;return as(i,r,s,l)}else if(dS(t))return uS[t];return t},Sl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function fS(t,i){let r=new Set,s=new Set,l=!1,u=!1;const f=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function m(y){f.has(y)&&(p.schedule(y),t()),y(g)}const p={schedule:(y,b=!1,j=!1)=>{const T=j&&l?r:s;return b&&f.add(y),T.has(y)||T.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(g=y,l){u=!0;return}l=!0,[r,s]=[s,r],r.forEach(m),r.clear(),l=!1,u&&(u=!1,p.process(y))}};return p}const hS=40;function Sx(t,i){let r=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,f=Sl.reduce((D,X)=>(D[X]=fS(u),D),{}),{setup:g,read:m,resolveKeyframes:p,preUpdate:y,update:b,preRender:j,render:z,postRender:T}=f,O=()=>{const D=qn.useManualTiming?l.timestamp:performance.now();r=!1,qn.useManualTiming||(l.delta=s?1e3/60:Math.max(Math.min(D-l.timestamp,hS),1)),l.timestamp=D,l.isProcessing=!0,g.process(l),m.process(l),p.process(l),y.process(l),b.process(l),j.process(l),z.process(l),T.process(l),l.isProcessing=!1,r&&i&&(s=!1,t(O))},L=()=>{r=!0,s=!0,l.isProcessing||t(O)};return{schedule:Sl.reduce((D,X)=>{const P=f[X];return D[X]=(F,K=!1,J=!1)=>(r||L(),P.schedule(F,K,J)),D},{}),cancel:D=>{for(let X=0;X<Sl.length;X++)f[Sl[X]].cancel(D)},state:l,steps:f}}const{schedule:He,cancel:ki,state:ft,steps:mf}=Sx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Jt,!0);let nc;function mS(){nc=void 0}const Ct={now:()=>(nc===void 0&&Ct.set(ft.isProcessing||qn.useManualTiming?ft.timestamp:performance.now()),nc),set:t=>{nc=t,queueMicrotask(mS)}},kx=t=>i=>typeof i=="string"&&i.startsWith(t),Gh=kx("--"),pS=kx("var(--"),qh=t=>pS(t)?gS.test(t.split("/*")[0].trim()):!1,gS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,wr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Fo={...wr,transform:t=>Gn(0,1,t)},kl={...wr,default:1},Vo=t=>Math.round(t*1e5)/1e5,Xh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yS(t){return t==null}const vS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Fh=(t,i)=>r=>!!(typeof r=="string"&&vS.test(r)&&r.startsWith(t)||i&&!yS(r)&&Object.prototype.hasOwnProperty.call(r,i)),Tx=(t,i,r)=>s=>{if(typeof s!="string")return s;const[l,u,f,g]=s.match(Xh);return{[t]:parseFloat(l),[i]:parseFloat(u),[r]:parseFloat(f),alpha:g!==void 0?parseFloat(g):1}},xS=t=>Gn(0,255,t),pf={...wr,transform:t=>Math.round(xS(t))},ea={test:Fh("rgb","red"),parse:Tx("red","green","blue"),transform:({red:t,green:i,blue:r,alpha:s=1})=>"rgba("+pf.transform(t)+", "+pf.transform(i)+", "+pf.transform(r)+", "+Vo(Fo.transform(s))+")"};function bS(t){let i="",r="",s="",l="";return t.length>5?(i=t.substring(1,3),r=t.substring(3,5),s=t.substring(5,7),l=t.substring(7,9)):(i=t.substring(1,2),r=t.substring(2,3),s=t.substring(3,4),l=t.substring(4,5),i+=i,r+=r,s+=s,l+=l),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const If={test:Fh("#"),parse:bS,transform:ea.transform},rs=t=>({test:i=>typeof i=="string"&&i.endsWith(t)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${t}`}),ji=rs("deg"),xn=rs("%"),ue=rs("px"),wS=rs("vh"),jS=rs("vw"),Hy={...xn,parse:t=>xn.parse(t)/100,transform:t=>xn.transform(t*100)},tr={test:Fh("hsl","hue"),parse:Tx("hue","saturation","lightness"),transform:({hue:t,saturation:i,lightness:r,alpha:s=1})=>"hsla("+Math.round(t)+", "+xn.transform(Vo(i))+", "+xn.transform(Vo(r))+", "+Vo(Fo.transform(s))+")"},gt={test:t=>ea.test(t)||If.test(t)||tr.test(t),parse:t=>ea.test(t)?ea.parse(t):tr.test(t)?tr.parse(t):If.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ea.transform(t):tr.transform(t)},zS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function SS(t){var i,r;return isNaN(t)&&typeof t=="string"&&(((i=t.match(Xh))==null?void 0:i.length)||0)+(((r=t.match(zS))==null?void 0:r.length)||0)>0}const Ax="number",Ex="color",kS="var",TS="var(",$y="${}",AS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Io(t){const i=t.toString(),r=[],s={color:[],number:[],var:[]},l=[];let u=0;const g=i.replace(AS,m=>(gt.test(m)?(s.color.push(u),l.push(Ex),r.push(gt.parse(m))):m.startsWith(TS)?(s.var.push(u),l.push(kS),r.push(m)):(s.number.push(u),l.push(Ax),r.push(parseFloat(m))),++u,$y)).split($y);return{values:r,split:g,indexes:s,types:l}}function Cx(t){return Io(t).values}function Dx(t){const{split:i,types:r}=Io(t),s=i.length;return l=>{let u="";for(let f=0;f<s;f++)if(u+=i[f],l[f]!==void 0){const g=r[f];g===Ax?u+=Vo(l[f]):g===Ex?u+=gt.transform(l[f]):u+=l[f]}return u}}const ES=t=>typeof t=="number"?0:t;function CS(t){const i=Cx(t);return Dx(t)(i.map(ES))}const Ti={test:SS,parse:Cx,createTransformer:Dx,getAnimatableNone:CS};function gf(t,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(i-t)*6*r:r<1/2?i:r<2/3?t+(i-t)*(2/3-r)*6:t}function DS({hue:t,saturation:i,lightness:r,alpha:s}){t/=360,i/=100,r/=100;let l=0,u=0,f=0;if(!i)l=u=f=r;else{const g=r<.5?r*(1+i):r+i-r*i,m=2*r-g;l=gf(m,g,t+1/3),u=gf(m,g,t),f=gf(m,g,t-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(f*255),alpha:s}}function fc(t,i){return r=>r>0?i:t}const Pe=(t,i,r)=>t+(i-t)*r,yf=(t,i,r)=>{const s=t*t,l=r*(i*i-s)+s;return l<0?0:Math.sqrt(l)},RS=[If,ea,tr],MS=t=>RS.find(i=>i.test(t));function Yy(t){const i=MS(t);if(!i)return!1;let r=i.parse(t);return i===tr&&(r=DS(r)),r}const Gy=(t,i)=>{const r=Yy(t),s=Yy(i);if(!r||!s)return fc(t,i);const l={...r};return u=>(l.red=yf(r.red,s.red,u),l.green=yf(r.green,s.green,u),l.blue=yf(r.blue,s.blue,u),l.alpha=Pe(r.alpha,s.alpha,u),ea.transform(l))},Kf=new Set(["none","hidden"]);function OS(t,i){return Kf.has(t)?r=>r<=0?t:i:r=>r>=1?i:t}function LS(t,i){return r=>Pe(t,i,r)}function Ih(t){return typeof t=="number"?LS:typeof t=="string"?qh(t)?fc:gt.test(t)?Gy:NS:Array.isArray(t)?Rx:typeof t=="object"?gt.test(t)?Gy:BS:fc}function Rx(t,i){const r=[...t],s=r.length,l=t.map((u,f)=>Ih(u)(u,i[f]));return u=>{for(let f=0;f<s;f++)r[f]=l[f](u);return r}}function BS(t,i){const r={...t,...i},s={};for(const l in r)t[l]!==void 0&&i[l]!==void 0&&(s[l]=Ih(t[l])(t[l],i[l]));return l=>{for(const u in s)r[u]=s[u](l);return r}}function _S(t,i){const r=[],s={color:0,var:0,number:0};for(let l=0;l<i.values.length;l++){const u=i.types[l],f=t.indexes[u][s[u]],g=t.values[f]??0;r[l]=g,s[u]++}return r}const NS=(t,i)=>{const r=Ti.createTransformer(i),s=Io(t),l=Io(i);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?Kf.has(t)&&!l.values.length||Kf.has(i)&&!s.values.length?OS(t,i):is(Rx(_S(s,l),l.values),r):fc(t,i)};function Mx(t,i,r){return typeof t=="number"&&typeof i=="number"&&typeof r=="number"?Pe(t,i,r):Ih(t)(t,i)}const VS=t=>{const i=({timestamp:r})=>t(r);return{start:(r=!0)=>He.update(i,r),stop:()=>ki(i),now:()=>ft.isProcessing?ft.timestamp:Ct.now()}},Ox=(t,i,r=10)=>{let s="";const l=Math.max(Math.round(i/r),2);for(let u=0;u<l;u++)s+=t(u/(l-1))+", ";return`linear(${s.substring(0,s.length-2)})`},hc=2e4;function Kh(t){let i=0;const r=50;let s=t.next(i);for(;!s.done&&i<hc;)i+=r,s=t.next(i);return i>=hc?1/0:i}function PS(t,i=100,r){const s=r({...t,keyframes:[0,i]}),l=Math.min(Kh(s),hc);return{type:"keyframes",ease:u=>s.next(l*u).value/i,duration:vn(l)}}const US=5;function Lx(t,i,r){const s=Math.max(i-US,0);return hx(r-t(s),i-s)}const Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qy=.001;function HS({duration:t=Xe.duration,bounce:i=Xe.bounce,velocity:r=Xe.velocity,mass:s=Xe.mass}){let l,u,f=1-i;f=Gn(Xe.minDamping,Xe.maxDamping,f),t=Gn(Xe.minDuration,Xe.maxDuration,vn(t)),f<1?(l=p=>{const y=p*f,b=y*t,j=y-r,z=Zf(p,f),T=Math.exp(-b);return qy-j/z*T},u=p=>{const b=p*f*t,j=b*r+r,z=Math.pow(f,2)*Math.pow(p,2)*t,T=Math.exp(-b),O=Zf(Math.pow(p,2),f);return(-l(p)+qy>0?-1:1)*((j-z)*T)/O}):(l=p=>{const y=Math.exp(-p*t),b=(p-r)*t+1;return-.001+y*b},u=p=>{const y=Math.exp(-p*t),b=(r-p)*(t*t);return y*b});const g=5/t,m=YS(l,u,g);if(t=yn(t),isNaN(m))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:t};{const p=Math.pow(m,2)*s;return{stiffness:p,damping:f*2*Math.sqrt(s*p),duration:t}}}const $S=12;function YS(t,i,r){let s=r;for(let l=1;l<$S;l++)s=s-t(s)/i(s);return s}function Zf(t,i){return t*Math.sqrt(1-i*i)}const GS=["duration","bounce"],qS=["stiffness","damping","mass"];function Xy(t,i){return i.some(r=>t[r]!==void 0)}function XS(t){let i={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...t};if(!Xy(t,qS)&&Xy(t,GS))if(t.visualDuration){const r=t.visualDuration,s=2*Math.PI/(r*1.2),l=s*s,u=2*Gn(.05,1,1-(t.bounce||0))*Math.sqrt(l);i={...i,mass:Xe.mass,stiffness:l,damping:u}}else{const r=HS(t);i={...i,...r,mass:Xe.mass},i.isResolvedFromDuration=!0}return i}function mc(t=Xe.visualDuration,i=Xe.bounce){const r=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:i}:t;let{restSpeed:s,restDelta:l}=r;const u=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],g={done:!1,value:u},{stiffness:m,damping:p,mass:y,duration:b,velocity:j,isResolvedFromDuration:z}=XS({...r,velocity:-vn(r.velocity||0)}),T=j||0,O=p/(2*Math.sqrt(m*y)),L=f-u,C=vn(Math.sqrt(m/y)),V=Math.abs(L)<5;s||(s=V?Xe.restSpeed.granular:Xe.restSpeed.default),l||(l=V?Xe.restDelta.granular:Xe.restDelta.default);let D;if(O<1){const P=Zf(C,O);D=F=>{const K=Math.exp(-O*C*F);return f-K*((T+O*C*L)/P*Math.sin(P*F)+L*Math.cos(P*F))}}else if(O===1)D=P=>f-Math.exp(-C*P)*(L+(T+C*L)*P);else{const P=C*Math.sqrt(O*O-1);D=F=>{const K=Math.exp(-O*C*F),J=Math.min(P*F,300);return f-K*((T+O*C*L)*Math.sinh(J)+P*L*Math.cosh(J))/P}}const X={calculatedDuration:z&&b||null,next:P=>{const F=D(P);if(z)g.done=P>=b;else{let K=P===0?T:0;O<1&&(K=P===0?yn(T):Lx(D,P,F));const J=Math.abs(K)<=s,se=Math.abs(f-F)<=l;g.done=J&&se}return g.value=g.done?f:F,g},toString:()=>{const P=Math.min(Kh(X),hc),F=Ox(K=>X.next(P*K).value,P,30);return P+"ms "+F},toTransition:()=>{}};return X}mc.applyToOptions=t=>{const i=PS(t,100,mc);return t.ease=i.ease,t.duration=yn(i.duration),t.type="keyframes",t};function Qf({keyframes:t,velocity:i=0,power:r=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:f,min:g,max:m,restDelta:p=.5,restSpeed:y}){const b=t[0],j={done:!1,value:b},z=J=>g!==void 0&&J<g||m!==void 0&&J>m,T=J=>g===void 0?m:m===void 0||Math.abs(g-J)<Math.abs(m-J)?g:m;let O=r*i;const L=b+O,C=f===void 0?L:f(L);C!==L&&(O=C-b);const V=J=>-O*Math.exp(-J/s),D=J=>C+V(J),X=J=>{const se=V(J),xe=D(J);j.done=Math.abs(se)<=p,j.value=j.done?C:xe};let P,F;const K=J=>{z(j.value)&&(P=J,F=mc({keyframes:[j.value,T(j.value)],velocity:Lx(D,J,j.value),damping:l,stiffness:u,restDelta:p,restSpeed:y}))};return K(0),{calculatedDuration:null,next:J=>{let se=!1;return!F&&P===void 0&&(se=!0,X(J),K(J)),P!==void 0&&J>=P?F.next(J-P):(!se&&X(J),j)}}}function FS(t,i,r){const s=[],l=r||qn.mix||Mx,u=t.length-1;for(let f=0;f<u;f++){let g=l(t[f],t[f+1]);if(i){const m=Array.isArray(i)?i[f]||Jt:i;g=is(m,g)}s.push(g)}return s}function IS(t,i,{clamp:r=!0,ease:s,mixer:l}={}){const u=t.length;if(Ph(u===i.length),u===1)return()=>i[0];if(u===2&&i[0]===i[1])return()=>i[1];const f=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),i=[...i].reverse());const g=FS(i,s,l),m=g.length,p=y=>{if(f&&y<t[0])return i[0];let b=0;if(m>1)for(;b<t.length-2&&!(y<t[b+1]);b++);const j=Xo(t[b],t[b+1],y);return g[b](j)};return r?y=>p(Gn(t[0],t[u-1],y)):p}function KS(t,i){const r=t[t.length-1];for(let s=1;s<=i;s++){const l=Xo(0,i,s);t.push(Pe(r,1,l))}}function ZS(t){const i=[0];return KS(i,t.length-1),i}function QS(t,i){return t.map(r=>r*i)}function WS(t,i){return t.map(()=>i||jx).splice(0,t.length-1)}function Po({duration:t=300,keyframes:i,times:r,ease:s="easeInOut"}){const l=cS(s)?s.map(Uy):Uy(s),u={done:!1,value:i[0]},f=QS(r&&r.length===i.length?r:ZS(i),t),g=IS(f,i,{ease:Array.isArray(l)?l:WS(i,l)});return{calculatedDuration:t,next:m=>(u.value=g(m),u.done=m>=t,u)}}const JS=t=>t!==null;function Zh(t,{repeat:i,repeatType:r="loop"},s,l=1){const u=t.filter(JS),g=l<0||i&&r!=="loop"&&i%2===1?0:u.length-1;return!g||s===void 0?u[g]:s}const ek={decay:Qf,inertia:Qf,tween:Po,keyframes:Po,spring:mc};function Bx(t){typeof t.type=="string"&&(t.type=ek[t.type])}class Qh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,r){return this.finished.then(i,r)}}const tk=t=>t/100;class Wh extends Qh{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=(r=!0)=>{var s,l;if(r){const{motionValue:u}=this.options;u&&u.updatedAt!==Ct.now()&&this.tick(Ct.now())}this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(l=(s=this.options).onStop)==null||l.call(s))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;Bx(i);const{type:r=Po,repeat:s=0,repeatDelay:l=0,repeatType:u,velocity:f=0}=i;let{keyframes:g}=i;const m=r||Po;m!==Po&&typeof g[0]!="number"&&(this.mixKeyframes=is(tk,Mx(g[0],g[1])),g=[0,100]);const p=m({...i,keyframes:g});u==="mirror"&&(this.mirroredGenerator=m({...i,keyframes:[...g].reverse(),velocity:-f})),p.calculatedDuration===null&&(p.calculatedDuration=Kh(p));const{calculatedDuration:y}=p;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(s+1)-l,this.generator=p}updateTime(i){const r=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(i,r=!1){const{generator:s,totalDuration:l,mixKeyframes:u,mirroredGenerator:f,resolvedDuration:g,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:p=0,keyframes:y,repeat:b,repeatType:j,repeatDelay:z,type:T,onUpdate:O,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-l/this.speed,this.startTime)),r?this.currentTime=i:this.updateTime(i);const C=this.currentTime-p*(this.playbackSpeed>=0?1:-1),V=this.playbackSpeed>=0?C<0:C>l;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let D=this.currentTime,X=s;if(b){const J=Math.min(this.currentTime,l)/g;let se=Math.floor(J),xe=J%1;!xe&&J>=1&&(xe=1),xe===1&&se--,se=Math.min(se,b+1),!!(se%2)&&(j==="reverse"?(xe=1-xe,z&&(xe-=z/g)):j==="mirror"&&(X=f)),D=Gn(0,1,xe)*g}const P=V?{done:!1,value:y[0]}:X.next(D);u&&(P.value=u(P.value));let{done:F}=P;!V&&m!==null&&(F=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return K&&T!==Qf&&(P.value=Zh(y,this.options,L,this.speed)),O&&O(P.value),K&&this.finish(),P}then(i,r){return this.finished.then(i,r)}get duration(){return vn(this.calculatedDuration)}get time(){return vn(this.currentTime)}set time(i){var r;i=yn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),(r=this.driver)==null||r.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(Ct.now());const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=vn(this.currentTime))}play(){var l,u;if(this.isStopped)return;const{driver:i=VS,startTime:r}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),(u=(l=this.options).onPlay)==null||u.call(l);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ct.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(i=this.options).onComplete)==null||r.call(i)}cancel(){var i,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(i=this.options).onCancel)==null||r.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),i.observe(this)}}function nk(t){for(let i=1;i<t.length;i++)t[i]??(t[i]=t[i-1])}const ta=t=>t*180/Math.PI,Wf=t=>{const i=ta(Math.atan2(t[1],t[0]));return Jf(i)},ik={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Wf,rotateZ:Wf,skewX:t=>ta(Math.atan(t[1])),skewY:t=>ta(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Jf=t=>(t=t%360,t<0&&(t+=360),t),Fy=Wf,Iy=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Ky=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),ak={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Iy,scaleY:Ky,scale:t=>(Iy(t)+Ky(t))/2,rotateX:t=>Jf(ta(Math.atan2(t[6],t[5]))),rotateY:t=>Jf(ta(Math.atan2(-t[2],t[0]))),rotateZ:Fy,rotate:Fy,skewX:t=>ta(Math.atan(t[4])),skewY:t=>ta(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function eh(t){return t.includes("scale")?1:0}function th(t,i){if(!t||t==="none")return eh(i);const r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,l;if(r)s=ak,l=r;else{const g=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=ik,l=g}if(!l)return eh(i);const u=s[i],f=l[1].split(",").map(ok);return typeof u=="function"?u(f):f[u]}const rk=(t,i)=>{const{transform:r="none"}=getComputedStyle(t);return th(r,i)};function ok(t){return parseFloat(t.trim())}const jr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zr=new Set(jr),Zy=t=>t===wr||t===ue,sk=new Set(["x","y","z"]),lk=jr.filter(t=>!sk.has(t));function ck(t){const i=[];return lk.forEach(r=>{const s=t.getValue(r);s!==void 0&&(i.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),i}const ra={width:({x:t},{paddingLeft:i="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(i)-parseFloat(r),height:({y:t},{paddingTop:i="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(i)-parseFloat(r),top:(t,{top:i})=>parseFloat(i),left:(t,{left:i})=>parseFloat(i),bottom:({y:t},{top:i})=>parseFloat(i)+(t.max-t.min),right:({x:t},{left:i})=>parseFloat(i)+(t.max-t.min),x:(t,{transform:i})=>th(i,"x"),y:(t,{transform:i})=>th(i,"y")};ra.translateX=ra.x;ra.translateY=ra.y;const oa=new Set;let nh=!1,ih=!1,ah=!1;function _x(){if(ih){const t=Array.from(oa).filter(s=>s.needsMeasurement),i=new Set(t.map(s=>s.element)),r=new Map;i.forEach(s=>{const l=ck(s);l.length&&(r.set(s,l),s.render())}),t.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const l=r.get(s);l&&l.forEach(([u,f])=>{var g;(g=s.getValue(u))==null||g.set(f)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}ih=!1,nh=!1,oa.forEach(t=>t.complete(ah)),oa.clear()}function Nx(){oa.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ih=!0)})}function uk(){ah=!0,Nx(),_x(),ah=!1}class Jh{constructor(i,r,s,l,u,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=s,this.motionValue=l,this.element=u,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(oa.add(this),nh||(nh=!0,He.read(Nx),He.resolveKeyframes(_x))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:s,motionValue:l}=this;if(i[0]===null){const u=l==null?void 0:l.get(),f=i[i.length-1];if(u!==void 0)i[0]=u;else if(s&&r){const g=s.readValue(r,f);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=f),l&&u===void 0&&l.set(i[0])}nk(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),oa.delete(this)}cancel(){this.state==="scheduled"&&(oa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const dk=t=>t.startsWith("--");function fk(t,i,r){dk(i)?t.style.setProperty(i,r):t.style[i]=r}const hk=Uh(()=>window.ScrollTimeline!==void 0),mk={};function pk(t,i){const r=Uh(t);return()=>mk[i]??r()}const Vx=pk(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_o=([t,i,r,s])=>`cubic-bezier(${t}, ${i}, ${r}, ${s})`,Qy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_o([0,.65,.55,1]),circOut:_o([.55,0,1,.45]),backIn:_o([.31,.01,.66,-.59]),backOut:_o([.33,1.53,.69,.99])};function Px(t,i){if(t)return typeof t=="function"?Vx()?Ox(t,i):"ease-out":zx(t)?_o(t):Array.isArray(t)?t.map(r=>Px(r,i)||Qy.easeOut):Qy[t]}function gk(t,i,r,{delay:s=0,duration:l=300,repeat:u=0,repeatType:f="loop",ease:g="easeOut",times:m}={},p=void 0){const y={[i]:r};m&&(y.offset=m);const b=Px(g,l);Array.isArray(b)&&(y.easing=b);const j={delay:s,duration:l,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:u+1,direction:f==="reverse"?"alternate":"normal"};return p&&(j.pseudoElement=p),t.animate(y,j)}function Ux(t){return typeof t=="function"&&"applyToOptions"in t}function yk({type:t,...i}){return Ux(t)&&Vx()?t.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class vk extends Qh{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:r,name:s,keyframes:l,pseudoElement:u,allowFlatten:f=!1,finalKeyframe:g,onComplete:m}=i;this.isPseudoElement=!!u,this.allowFlatten=f,this.options=i,Ph(typeof i.type!="string");const p=yk(i);this.animation=gk(r,s,l,p,u),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const y=Zh(l,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):fk(r,s,y),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,r;(r=(i=this.animation).finish)==null||r.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,r;this.isPseudoElement||(r=(i=this.animation).commitStyles)==null||r.call(i)}get duration(){var r,s;const i=((s=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:s.call(r).duration)||0;return vn(Number(i))}get time(){return vn(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=yn(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&hk()?(this.animation.timeline=i,Jt):r(this)}}const Hx={anticipate:xx,backInOut:vx,circInOut:wx};function xk(t){return t in Hx}function bk(t){typeof t.ease=="string"&&xk(t.ease)&&(t.ease=Hx[t.ease])}const Wy=10;class wk extends vk{constructor(i){bk(i),Bx(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:r,onUpdate:s,onComplete:l,element:u,...f}=this.options;if(!r)return;if(i!==void 0){r.set(i);return}const g=new Wh({...f,autoplay:!1}),m=yn(this.finishedTime??this.time);r.setWithVelocity(g.sample(m-Wy).value,g.sample(m).value,Wy),g.stop()}}const Jy=(t,i)=>i==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ti.test(t)||t==="0")&&!t.startsWith("url("));function jk(t){const i=t[0];if(t.length===1)return!0;for(let r=0;r<t.length;r++)if(t[r]!==i)return!0}function zk(t,i,r,s){const l=t[0];if(l===null)return!1;if(i==="display"||i==="visibility")return!0;const u=t[t.length-1],f=Jy(l,i),g=Jy(u,i);return!f||!g?!1:jk(t)||(r==="spring"||Ux(r))&&s}function em(t){return dx(t)&&"offsetHeight"in t}const Sk=new Set(["opacity","clipPath","filter","transform"]),kk=Uh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Tk(t){var p;const{motionValue:i,name:r,repeatDelay:s,repeatType:l,damping:u,type:f}=t;if(!em((p=i==null?void 0:i.owner)==null?void 0:p.current))return!1;const{onUpdate:g,transformTemplate:m}=i.owner.getProps();return kk()&&r&&Sk.has(r)&&(r!=="transform"||!m)&&!g&&!s&&l!=="mirror"&&u!==0&&f!=="inertia"}const Ak=40;class Ek extends Qh{constructor({autoplay:i=!0,delay:r=0,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f="loop",keyframes:g,name:m,motionValue:p,element:y,...b}){var T;super(),this.stop=()=>{var O,L;this._animation&&(this._animation.stop(),(O=this.stopTimeline)==null||O.call(this)),(L=this.keyframeResolver)==null||L.cancel()},this.createdAt=Ct.now();const j={autoplay:i,delay:r,type:s,repeat:l,repeatDelay:u,repeatType:f,name:m,motionValue:p,element:y,...b},z=(y==null?void 0:y.KeyframeResolver)||Jh;this.keyframeResolver=new z(g,(O,L,C)=>this.onKeyframesResolved(O,L,j,!C),m,p,y),(T=this.keyframeResolver)==null||T.scheduleResolve()}onKeyframesResolved(i,r,s,l){this.keyframeResolver=void 0;const{name:u,type:f,velocity:g,delay:m,isHandoff:p,onUpdate:y}=s;this.resolvedAt=Ct.now(),zk(i,u,f,g)||((qn.instantAnimations||!m)&&(y==null||y(Zh(i,s,r))),i[0]=i[i.length-1],s.duration=0,s.repeat=0);const j={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>Ak?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:i},z=!p&&Tk(j)?new wk({...j,element:j.motionValue.owner.current}):new Wh(j);z.finished.then(()=>this.notifyFinished()).catch(Jt),this.pendingTimeline&&(this.stopTimeline=z.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=z}get finished(){return this._animation?this.animation.finished:this._finished}then(i,r){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),uk()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}const Ck=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Dk(t){const i=Ck.exec(t);if(!i)return[,];const[,r,s,l]=i;return[`--${r??s}`,l]}function $x(t,i,r=1){const[s,l]=Dk(t);if(!s)return;const u=window.getComputedStyle(i).getPropertyValue(s);if(u){const f=u.trim();return ux(f)?parseFloat(f):f}return qh(l)?$x(l,i,r+1):l}function tm(t,i){return(t==null?void 0:t[i])??(t==null?void 0:t.default)??t}const Yx=new Set(["width","height","top","left","right","bottom",...jr]),Rk={test:t=>t==="auto",parse:t=>t},Gx=t=>i=>i.test(t),qx=[wr,ue,xn,ji,jS,wS,Rk],e1=t=>qx.find(Gx(t));function Mk(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||fx(t):!0}const Ok=new Set(["brightness","contrast","saturate","opacity"]);function Lk(t){const[i,r]=t.slice(0,-1).split("(");if(i==="drop-shadow")return t;const[s]=r.match(Xh)||[];if(!s)return t;const l=r.replace(s,"");let u=Ok.has(i)?1:0;return s!==r&&(u*=100),i+"("+u+l+")"}const Bk=/\b([a-z-]*)\(.*?\)/gu,rh={...Ti,getAnimatableNone:t=>{const i=t.match(Bk);return i?i.map(Lk).join(" "):t}},t1={...wr,transform:Math.round},_k={rotate:ji,rotateX:ji,rotateY:ji,rotateZ:ji,scale:kl,scaleX:kl,scaleY:kl,scaleZ:kl,skew:ji,skewX:ji,skewY:ji,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:Fo,originX:Hy,originY:Hy,originZ:ue},nm={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,radius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,backgroundPositionX:ue,backgroundPositionY:ue,..._k,zIndex:t1,fillOpacity:Fo,strokeOpacity:Fo,numOctaves:t1},Nk={...nm,color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,filter:rh,WebkitFilter:rh},Xx=t=>Nk[t];function Fx(t,i){let r=Xx(t);return r!==rh&&(r=Ti),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const Vk=new Set(["auto","none","0"]);function Pk(t,i,r){let s=0,l;for(;s<t.length&&!l;){const u=t[s];typeof u=="string"&&!Vk.has(u)&&Io(u).values.length&&(l=t[s]),s++}if(l&&r)for(const u of i)t[u]=Fx(r,l)}class Uk extends Jh{constructor(i,r,s,l,u){super(i,r,s,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let m=0;m<i.length;m++){let p=i[m];if(typeof p=="string"&&(p=p.trim(),qh(p))){const y=$x(p,r.current);y!==void 0&&(i[m]=y),m===i.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Yx.has(s)||i.length!==2)return;const[l,u]=i,f=e1(l),g=e1(u);if(f!==g)if(Zy(f)&&Zy(g))for(let m=0;m<i.length;m++){const p=i[m];typeof p=="string"&&(i[m]=parseFloat(p))}else ra[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,s=[];for(let l=0;l<i.length;l++)(i[l]===null||Mk(i[l]))&&s.push(l);s.length&&Pk(i,s,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ra[s](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const l=r[r.length-1];l!==void 0&&i.getValue(s,l).jump(l,!1)}measureEndState(){var g;const{element:i,name:r,unresolvedKeyframes:s}=this;if(!i||!i.current)return;const l=i.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=s.length-1,f=s[u];s[u]=ra[r](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(g=this.removedTransforms)!=null&&g.length&&this.removedTransforms.forEach(([m,p])=>{i.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function Hk(t,i,r){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let s=document;const l=(r==null?void 0:r[t])??s.querySelectorAll(t);return l?Array.from(l):[]}return Array.from(t)}const n1=30,$k=t=>!isNaN(parseFloat(t));class Yk{constructor(i,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,l=!0)=>{var f,g;const u=Ct.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty();l&&((g=this.events.renderRequest)==null||g.notify(this.current))},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=Ct.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=$k(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new Hh);const s=this.events[i].add(r);return i==="change"?()=>{s(),He.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i,r=!0){!r||!this.passiveEffect?this.updateAndNotify(i,r):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>n1)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,n1);return hx(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,r;(i=this.dependents)==null||i.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function cr(t,i){return new Yk(t,i)}const Ix=(t,i)=>i&&typeof t=="number"?i.transform(t):t,{schedule:im}=Sx(queueMicrotask,!1),rn={x:!1,y:!1};function Kx(){return rn.x||rn.y}function Gk(t){return t==="x"||t==="y"?rn[t]?null:(rn[t]=!0,()=>{rn[t]=!1}):rn.x||rn.y?null:(rn.x=rn.y=!0,()=>{rn.x=rn.y=!1})}function Zx(t,i){const r=Hk(t),s=new AbortController,l={passive:!0,...i,signal:s.signal};return[r,l,()=>s.abort()]}function i1(t){return!(t.pointerType==="touch"||Kx())}function qk(t,i,r={}){const[s,l,u]=Zx(t,r),f=g=>{if(!i1(g))return;const{target:m}=g,p=i(m,g);if(typeof p!="function"||!m)return;const y=b=>{i1(b)&&(p(b),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,l)};return s.forEach(g=>{g.addEventListener("pointerenter",f,l)}),u}const Qx=(t,i)=>i?t===i?!0:Qx(t,i.parentElement):!1,am=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Xk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Fk(t){return Xk.has(t.tagName)||t.tabIndex!==-1}const ic=new WeakSet;function a1(t){return i=>{i.key==="Enter"&&t(i)}}function vf(t,i){t.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Ik=(t,i)=>{const r=t.currentTarget;if(!r)return;const s=a1(()=>{if(ic.has(r))return;vf(r,"down");const l=a1(()=>{vf(r,"up")}),u=()=>vf(r,"cancel");r.addEventListener("keyup",l,i),r.addEventListener("blur",u,i)});r.addEventListener("keydown",s,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),i)};function r1(t){return am(t)&&!Kx()}function Kk(t,i,r={}){const[s,l,u]=Zx(t,r),f=g=>{const m=g.currentTarget;if(!r1(g))return;ic.add(m);const p=i(m,g),y=(z,T)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",j),ic.has(m)&&ic.delete(m),r1(z)&&typeof p=="function"&&p(z,{success:T})},b=z=>{y(z,m===window||m===document||r.useGlobalTarget||Qx(m,z.target))},j=z=>{y(z,!1)};window.addEventListener("pointerup",b,l),window.addEventListener("pointercancel",j,l)};return s.forEach(g=>{(r.useGlobalTarget?window:g).addEventListener("pointerdown",f,l),em(g)&&(g.addEventListener("focus",p=>Ik(p,l)),!Fk(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),u}function Wx(t){return dx(t)&&"ownerSVGElement"in t}function Zk(t){return Wx(t)&&t.tagName==="svg"}const yt=t=>!!(t&&t.getVelocity),Qk=[...qx,gt,Ti],Wk=t=>Qk.find(Gx(t)),rm=S.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Jk extends S.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const s=r.offsetParent,l=em(s)&&s.offsetWidth||0,u=this.props.sizeRef.current;u.height=r.offsetHeight||0,u.width=r.offsetWidth||0,u.top=r.offsetTop,u.left=r.offsetLeft,u.right=l-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function e3({children:t,isPresent:i,anchorX:r}){const s=S.useId(),l=S.useRef(null),u=S.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=S.useContext(rm);return S.useInsertionEffect(()=>{const{width:g,height:m,top:p,left:y,right:b}=u.current;if(i||!l.current||!g||!m)return;const j=r==="left"?`left: ${y}`:`right: ${b}`;l.current.dataset.motionPopId=s;const z=document.createElement("style");return f&&(z.nonce=f),document.head.appendChild(z),z.sheet&&z.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${m}px !important;
            ${j}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.contains(z)&&document.head.removeChild(z)}},[i]),h.jsx(Jk,{isPresent:i,childRef:l,sizeRef:u,children:S.cloneElement(t,{ref:l})})}const t3=({children:t,initial:i,isPresent:r,onExitComplete:s,custom:l,presenceAffectsLayout:u,mode:f,anchorX:g})=>{const m=Ac(n3),p=S.useId();let y=!0,b=S.useMemo(()=>(y=!1,{id:p,initial:i,isPresent:r,custom:l,onExitComplete:j=>{m.set(j,!0);for(const z of m.values())if(!z)return;s&&s()},register:j=>(m.set(j,!1),()=>m.delete(j))}),[r,m,s]);return u&&y&&(b={...b}),S.useMemo(()=>{m.forEach((j,z)=>m.set(z,!1))},[r]),S.useEffect(()=>{!r&&!m.size&&s&&s()},[r]),f==="popLayout"&&(t=h.jsx(e3,{isPresent:r,anchorX:g,children:t})),h.jsx(Ec.Provider,{value:b,children:t})};function n3(){return new Map}function Jx(t=!0){const i=S.useContext(Ec);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:l}=i,u=S.useId();S.useEffect(()=>{if(t)return l(u)},[t]);const f=S.useCallback(()=>t&&s&&s(u),[u,s,t]);return!r&&s?[!1,f]:[!0]}const Tl=t=>t.key||"";function o1(t){const i=[];return S.Children.forEach(t,r=>{S.isValidElement(r)&&i.push(r)}),i}const Ai=({children:t,custom:i,initial:r=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:u="sync",propagate:f=!1,anchorX:g="left"})=>{const[m,p]=Jx(f),y=S.useMemo(()=>o1(t),[t]),b=f&&!m?[]:y.map(Tl),j=S.useRef(!0),z=S.useRef(y),T=Ac(()=>new Map),[O,L]=S.useState(y),[C,V]=S.useState(y);_h(()=>{j.current=!1,z.current=y;for(let P=0;P<C.length;P++){const F=Tl(C[P]);b.includes(F)?T.delete(F):T.get(F)!==!0&&T.set(F,!1)}},[C,b.length,b.join("-")]);const D=[];if(y!==O){let P=[...y];for(let F=0;F<C.length;F++){const K=C[F],J=Tl(K);b.includes(J)||(P.splice(F,0,K),D.push(K))}return u==="wait"&&D.length&&(P=D),V(o1(P)),L(y),null}const{forceRender:X}=S.useContext(Lh);return h.jsx(h.Fragment,{children:C.map(P=>{const F=Tl(P),K=f&&!m?!1:y===C||b.includes(F),J=()=>{if(T.has(F))T.set(F,!0);else return;let se=!0;T.forEach(xe=>{xe||(se=!1)}),se&&(X==null||X(),V(z.current),f&&(p==null||p()),s&&s())};return h.jsx(t3,{isPresent:K,initial:!j.current||r?void 0:!1,custom:i,presenceAffectsLayout:l,mode:u,onExitComplete:K?void 0:J,anchorX:g,children:P},F)})})},eb=S.createContext({strict:!1}),s1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ur={};for(const t in s1)ur[t]={isEnabled:i=>s1[t].some(r=>!!i[r])};function i3(t){for(const i in t)ur[i]={...ur[i],...t[i]}}const a3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function pc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||a3.has(t)}let tb=t=>!pc(t);function r3(t){t&&(tb=i=>i.startsWith("on")?!pc(i):t(i))}try{r3(require("@emotion/is-prop-valid").default)}catch{}function o3(t,i,r){const s={};for(const l in t)l==="values"&&typeof t.values=="object"||(tb(l)||r===!0&&pc(l)||!i&&!pc(l)||t.draggable&&l.startsWith("onDrag"))&&(s[l]=t[l]);return s}function s3(t){if(typeof Proxy>"u")return t;const i=new Map,r=(...s)=>t(...s);return new Proxy(r,{get:(s,l)=>l==="create"?t:(i.has(l)||i.set(l,t(l)),i.get(l))})}const Cc=S.createContext({});function Dc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ko(t){return typeof t=="string"||Array.isArray(t)}const om=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sm=["initial",...om];function Rc(t){return Dc(t.animate)||sm.some(i=>Ko(t[i]))}function nb(t){return!!(Rc(t)||t.variants)}function l3(t,i){if(Rc(t)){const{initial:r,animate:s}=t;return{initial:r===!1||Ko(r)?r:void 0,animate:Ko(s)?s:void 0}}return t.inherit!==!1?i:{}}function c3(t){const{initial:i,animate:r}=l3(t,S.useContext(Cc));return S.useMemo(()=>({initial:i,animate:r}),[l1(i),l1(r)])}function l1(t){return Array.isArray(t)?t.join(" "):t}const u3=Symbol.for("motionComponentSymbol");function nr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function d3(t,i,r){return S.useCallback(s=>{s&&t.onMount&&t.onMount(s),i&&(s?i.mount(s):i.unmount()),r&&(typeof r=="function"?r(s):nr(r)&&(r.current=s))},[i])}const lm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),f3="framerAppearId",ib="data-"+lm(f3),ab=S.createContext({});function h3(t,i,r,s,l){var O,L;const{visualElement:u}=S.useContext(Cc),f=S.useContext(eb),g=S.useContext(Ec),m=S.useContext(rm).reducedMotion,p=S.useRef(null);s=s||f.renderer,!p.current&&s&&(p.current=s(t,{visualState:i,parent:u,props:r,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:m}));const y=p.current,b=S.useContext(ab);y&&!y.projection&&l&&(y.type==="html"||y.type==="svg")&&m3(p.current,r,l,b);const j=S.useRef(!1);S.useInsertionEffect(()=>{y&&j.current&&y.update(r,g)});const z=r[ib],T=S.useRef(!!z&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,z))&&((L=window.MotionHasOptimisedAnimation)==null?void 0:L.call(window,z)));return _h(()=>{y&&(j.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),im.render(y.render),T.current&&y.animationState&&y.animationState.animateChanges())}),S.useEffect(()=>{y&&(!T.current&&y.animationState&&y.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,z)}),T.current=!1))}),y}function m3(t,i,r,s){const{layoutId:l,layout:u,drag:f,dragConstraints:g,layoutScroll:m,layoutRoot:p,layoutCrossfade:y}=i;t.projection=new r(t.latestValues,i["data-framer-portal-id"]?void 0:rb(t.parent)),t.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!f||g&&nr(g),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:m,layoutRoot:p})}function rb(t){if(t)return t.options.allowProjection!==!1?t.projection:rb(t.parent)}function p3({preloadedFeatures:t,createVisualElement:i,useRender:r,useVisualState:s,Component:l}){t&&i3(t);function u(g,m){let p;const y={...S.useContext(rm),...g,layoutId:g3(g)},{isStatic:b}=y,j=c3(g),z=s(g,b);if(!b&&Bh){y3();const T=v3(y);p=T.MeasureLayout,j.visualElement=h3(l,z,y,i,T.ProjectionNode)}return h.jsxs(Cc.Provider,{value:j,children:[p&&j.visualElement?h.jsx(p,{visualElement:j.visualElement,...y}):null,r(l,g,d3(z,j.visualElement,m),z,b,j.visualElement)]})}u.displayName=`motion.${typeof l=="string"?l:`create(${l.displayName??l.name??""})`}`;const f=S.forwardRef(u);return f[u3]=l,f}function g3({layoutId:t}){const i=S.useContext(Lh).id;return i&&t!==void 0?i+"-"+t:t}function y3(t,i){S.useContext(eb).strict}function v3(t){const{drag:i,layout:r}=ur;if(!i&&!r)return{};const s={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(t)||r!=null&&r.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const Zo={};function x3(t){for(const i in t)Zo[i]=t[i],Gh(i)&&(Zo[i].isCSSVariable=!0)}function ob(t,{layout:i,layoutId:r}){return zr.has(t)||t.startsWith("origin")||(i||r!==void 0)&&(!!Zo[t]||t==="opacity")}const b3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},w3=jr.length;function j3(t,i,r){let s="",l=!0;for(let u=0;u<w3;u++){const f=jr[u],g=t[f];if(g===void 0)continue;let m=!0;if(typeof g=="number"?m=g===(f.startsWith("scale")?1:0):m=parseFloat(g)===0,!m||r){const p=Ix(g,nm[f]);if(!m){l=!1;const y=b3[f]||f;s+=`${y}(${p}) `}r&&(i[f]=p)}}return s=s.trim(),r?s=r(i,l?"":s):l&&(s="none"),s}function cm(t,i,r){const{style:s,vars:l,transformOrigin:u}=t;let f=!1,g=!1;for(const m in i){const p=i[m];if(zr.has(m)){f=!0;continue}else if(Gh(m)){l[m]=p;continue}else{const y=Ix(p,nm[m]);m.startsWith("origin")?(g=!0,u[m]=y):s[m]=y}}if(i.transform||(f||r?s.transform=j3(i,t.transform,r):s.transform&&(s.transform="none")),g){const{originX:m="50%",originY:p="50%",originZ:y=0}=u;s.transformOrigin=`${m} ${p} ${y}`}}const um=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sb(t,i,r){for(const s in i)!yt(i[s])&&!ob(s,r)&&(t[s]=i[s])}function z3({transformTemplate:t},i){return S.useMemo(()=>{const r=um();return cm(r,i,t),Object.assign({},r.vars,r.style)},[i])}function S3(t,i){const r=t.style||{},s={};return sb(s,r,t),Object.assign(s,z3(t,i)),s}function k3(t,i){const r={},s=S3(t,i);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=s,r}const T3={offset:"stroke-dashoffset",array:"stroke-dasharray"},A3={offset:"strokeDashoffset",array:"strokeDasharray"};function E3(t,i,r=1,s=0,l=!0){t.pathLength=1;const u=l?T3:A3;t[u.offset]=ue.transform(-s);const f=ue.transform(i),g=ue.transform(r);t[u.array]=`${f} ${g}`}function lb(t,{attrX:i,attrY:r,attrScale:s,pathLength:l,pathSpacing:u=1,pathOffset:f=0,...g},m,p,y){if(cm(t,g,p),m){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:b,style:j}=t;b.transform&&(j.transform=b.transform,delete b.transform),(j.transform||b.transformOrigin)&&(j.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),j.transform&&(j.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox),i!==void 0&&(b.x=i),r!==void 0&&(b.y=r),s!==void 0&&(b.scale=s),l!==void 0&&E3(b,l,u,f,!1)}const cb=()=>({...um(),attrs:{}}),ub=t=>typeof t=="string"&&t.toLowerCase()==="svg";function C3(t,i,r,s){const l=S.useMemo(()=>{const u=cb();return lb(u,i,ub(s),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[i]);if(t.style){const u={};sb(u,t.style,t),l.style={...u,...l.style}}return l}const D3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dm(t){return typeof t!="string"||t.includes("-")?!1:!!(D3.indexOf(t)>-1||/[A-Z]/u.test(t))}function R3(t=!1){return(r,s,l,{latestValues:u},f)=>{const m=(dm(r)?C3:k3)(s,u,f,r),p=o3(s,typeof r=="string",t),y=r!==S.Fragment?{...p,...m,ref:l}:{},{children:b}=s,j=S.useMemo(()=>yt(b)?b.get():b,[b]);return S.createElement(r,{...y,children:j})}}function c1(t){const i=[{},{}];return t==null||t.values.forEach((r,s)=>{i[0][s]=r.get(),i[1][s]=r.getVelocity()}),i}function fm(t,i,r,s){if(typeof i=="function"){const[l,u]=c1(s);i=i(r!==void 0?r:t.custom,l,u)}if(typeof i=="string"&&(i=t.variants&&t.variants[i]),typeof i=="function"){const[l,u]=c1(s);i=i(r!==void 0?r:t.custom,l,u)}return i}function ac(t){return yt(t)?t.get():t}function M3({scrapeMotionValuesFromProps:t,createRenderState:i},r,s,l){return{latestValues:O3(r,s,l,t),renderState:i()}}const db=t=>(i,r)=>{const s=S.useContext(Cc),l=S.useContext(Ec),u=()=>M3(t,i,s,l);return r?u():Ac(u)};function O3(t,i,r,s){const l={},u=s(t,{});for(const j in u)l[j]=ac(u[j]);let{initial:f,animate:g}=t;const m=Rc(t),p=nb(t);i&&p&&!m&&t.inherit!==!1&&(f===void 0&&(f=i.initial),g===void 0&&(g=i.animate));let y=r?r.initial===!1:!1;y=y||f===!1;const b=y?g:f;if(b&&typeof b!="boolean"&&!Dc(b)){const j=Array.isArray(b)?b:[b];for(let z=0;z<j.length;z++){const T=fm(t,j[z]);if(T){const{transitionEnd:O,transition:L,...C}=T;for(const V in C){let D=C[V];if(Array.isArray(D)){const X=y?D.length-1:0;D=D[X]}D!==null&&(l[V]=D)}for(const V in O)l[V]=O[V]}}}return l}function hm(t,i,r){var u;const{style:s}=t,l={};for(const f in s)(yt(s[f])||i.style&&yt(i.style[f])||ob(f,t)||((u=r==null?void 0:r.getValue(f))==null?void 0:u.liveStyle)!==void 0)&&(l[f]=s[f]);return l}const L3={useVisualState:db({scrapeMotionValuesFromProps:hm,createRenderState:um})};function fb(t,i,r){const s=hm(t,i,r);for(const l in t)if(yt(t[l])||yt(i[l])){const u=jr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[u]=t[l]}return s}const B3={useVisualState:db({scrapeMotionValuesFromProps:fb,createRenderState:cb})};function _3(t,i){return function(s,{forwardMotionProps:l}={forwardMotionProps:!1}){const f={...dm(s)?B3:L3,preloadedFeatures:t,useRender:R3(l),createVisualElement:i,Component:s};return p3(f)}}function Qo(t,i,r){const s=t.getProps();return fm(s,i,r!==void 0?r:s.custom,t)}const oh=t=>Array.isArray(t);function N3(t,i,r){t.hasValue(i)?t.getValue(i).set(r):t.addValue(i,cr(r))}function V3(t){return oh(t)?t[t.length-1]||0:t}function mm(t,i){const r=Qo(t,i);let{transitionEnd:s={},transition:l={},...u}=r||{};u={...u,...s};for(const f in u){const g=V3(u[f]);N3(t,f,g)}}function P3(t){return!!(yt(t)&&t.add)}function sh(t,i){const r=t.getValue("willChange");if(P3(r))return r.add(i);if(!r&&qn.WillChange){const s=new qn.WillChange("auto");t.addValue("willChange",s),s.add(i)}}function hb(t){return t.props[ib]}const U3=t=>t!==null;function H3(t,{repeat:i,repeatType:r="loop"},s){const l=t.filter(U3),u=i&&r!=="loop"&&i%2===1?0:l.length-1;return l[u]}const $3={type:"spring",stiffness:500,damping:25,restSpeed:10},Y3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),G3={type:"keyframes",duration:.8},q3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},X3=(t,{keyframes:i})=>i.length>2?G3:zr.has(t)?t.startsWith("scale")?Y3(i[1]):$3:q3;function F3({when:t,delay:i,delayChildren:r,staggerChildren:s,staggerDirection:l,repeat:u,repeatType:f,repeatDelay:g,from:m,elapsed:p,...y}){return!!Object.keys(y).length}const pm=(t,i,r,s={},l,u)=>f=>{const g=tm(s,t)||{},m=g.delay||s.delay||0;let{elapsed:p=0}=s;p=p-yn(m);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-p,onUpdate:j=>{i.set(j),g.onUpdate&&g.onUpdate(j)},onComplete:()=>{f(),g.onComplete&&g.onComplete()},name:t,motionValue:i,element:u?void 0:l};F3(g)||Object.assign(y,X3(t,y)),y.duration&&(y.duration=yn(y.duration)),y.repeatDelay&&(y.repeatDelay=yn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),(qn.instantAnimations||qn.skipAnimations)&&(b=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,b&&!u&&i.get()!==void 0){const j=H3(y.keyframes,g);if(j!==void 0){He.update(()=>{y.onUpdate(j),y.onComplete()});return}}return g.isSync?new Wh(y):new Ek(y)};function I3({protectedKeys:t,needsAnimating:i},r){const s=t.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,s}function mb(t,i,{delay:r=0,transitionOverride:s,type:l}={}){let{transition:u=t.getDefaultTransition(),transitionEnd:f,...g}=i;s&&(u=s);const m=[],p=l&&t.animationState&&t.animationState.getState()[l];for(const y in g){const b=t.getValue(y,t.latestValues[y]??null),j=g[y];if(j===void 0||p&&I3(p,y))continue;const z={delay:r,...tm(u||{},y)},T=b.get();if(T!==void 0&&!b.isAnimating&&!Array.isArray(j)&&j===T&&!z.velocity)continue;let O=!1;if(window.MotionHandoffAnimation){const C=hb(t);if(C){const V=window.MotionHandoffAnimation(C,y,He);V!==null&&(z.startTime=V,O=!0)}}sh(t,y),b.start(pm(y,b,j,t.shouldReduceMotion&&Yx.has(y)?{type:!1}:z,t,O));const L=b.animation;L&&m.push(L)}return f&&Promise.all(m).then(()=>{He.update(()=>{f&&mm(t,f)})}),m}function lh(t,i,r={}){var m;const s=Qo(t,i,r.type==="exit"?(m=t.presenceContext)==null?void 0:m.custom:void 0);let{transition:l=t.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(l=r.transitionOverride);const u=s?()=>Promise.all(mb(t,s,r)):()=>Promise.resolve(),f=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:j}=l;return K3(t,i,y+p,b,j,r)}:()=>Promise.resolve(),{when:g}=l;if(g){const[p,y]=g==="beforeChildren"?[u,f]:[f,u];return p().then(()=>y())}else return Promise.all([u(),f(r.delay)])}function K3(t,i,r=0,s=0,l=1,u){const f=[],g=(t.variantChildren.size-1)*s,m=l===1?(p=0)=>p*s:(p=0)=>g-p*s;return Array.from(t.variantChildren).sort(Z3).forEach((p,y)=>{p.notify("AnimationStart",i),f.push(lh(p,i,{...u,delay:r+m(y)}).then(()=>p.notify("AnimationComplete",i)))}),Promise.all(f)}function Z3(t,i){return t.sortNodePosition(i)}function pb(t,i,r={}){t.notify("AnimationStart",i);let s;if(Array.isArray(i)){const l=i.map(u=>lh(t,u,r));s=Promise.all(l)}else if(typeof i=="string")s=lh(t,i,r);else{const l=typeof i=="function"?Qo(t,i,r.custom):i;s=Promise.all(mb(t,l,r))}return s.then(()=>{t.notify("AnimationComplete",i)})}function gb(t,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==t.length)return!1;for(let s=0;s<r;s++)if(i[s]!==t[s])return!1;return!0}const Q3=sm.length;function yb(t){if(!t)return;if(!t.isControllingVariants){const r=t.parent?yb(t.parent)||{}:{};return t.props.initial!==void 0&&(r.initial=t.props.initial),r}const i={};for(let r=0;r<Q3;r++){const s=sm[r],l=t.props[s];(Ko(l)||l===!1)&&(i[s]=l)}return i}const W3=[...om].reverse(),J3=om.length;function eT(t){return i=>Promise.all(i.map(({animation:r,options:s})=>pb(t,r,s)))}function tT(t){let i=eT(t),r=u1(),s=!0;const l=m=>(p,y)=>{var j;const b=Qo(t,y,m==="exit"?(j=t.presenceContext)==null?void 0:j.custom:void 0);if(b){const{transition:z,transitionEnd:T,...O}=b;p={...p,...O,...T}}return p};function u(m){i=m(t)}function f(m){const{props:p}=t,y=yb(t.parent)||{},b=[],j=new Set;let z={},T=1/0;for(let L=0;L<J3;L++){const C=W3[L],V=r[C],D=p[C]!==void 0?p[C]:y[C],X=Ko(D),P=C===m?V.isActive:null;P===!1&&(T=L);let F=D===y[C]&&D!==p[C]&&X;if(F&&s&&t.manuallyAnimateOnMount&&(F=!1),V.protectedKeys={...z},!V.isActive&&P===null||!D&&!V.prevProp||Dc(D)||typeof D=="boolean")continue;const K=nT(V.prevProp,D);let J=K||C===m&&V.isActive&&!F&&X||L>T&&X,se=!1;const xe=Array.isArray(D)?D:[D];let Le=xe.reduce(l(C),{});P===!1&&(Le={});const{prevResolvedValues:Be={}}=V,jt={...Be,...Le},xt=I=>{J=!0,j.has(I)&&(se=!0,j.delete(I)),V.needsAnimating[I]=!0;const ee=t.getValue(I);ee&&(ee.liveStyle=!1)};for(const I in jt){const ee=Le[I],de=Be[I];if(z.hasOwnProperty(I))continue;let A=!1;oh(ee)&&oh(de)?A=!gb(ee,de):A=ee!==de,A?ee!=null?xt(I):j.add(I):ee!==void 0&&j.has(I)?xt(I):V.protectedKeys[I]=!0}V.prevProp=D,V.prevResolvedValues=Le,V.isActive&&(z={...z,...Le}),s&&t.blockInitialAnimation&&(J=!1),J&&(!(F&&K)||se)&&b.push(...xe.map(I=>({animation:I,options:{type:C}})))}if(j.size){const L={};if(typeof p.initial!="boolean"){const C=Qo(t,Array.isArray(p.initial)?p.initial[0]:p.initial);C&&C.transition&&(L.transition=C.transition)}j.forEach(C=>{const V=t.getBaseTarget(C),D=t.getValue(C);D&&(D.liveStyle=!0),L[C]=V??null}),b.push({animation:L})}let O=!!b.length;return s&&(p.initial===!1||p.initial===p.animate)&&!t.manuallyAnimateOnMount&&(O=!1),s=!1,O?i(b):Promise.resolve()}function g(m,p){var b;if(r[m].isActive===p)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(j=>{var z;return(z=j.animationState)==null?void 0:z.setActive(m,p)}),r[m].isActive=p;const y=f(m);for(const j in r)r[j].protectedKeys={};return y}return{animateChanges:f,setActive:g,setAnimateFunction:u,getState:()=>r,reset:()=>{r=u1(),s=!0}}}function nT(t,i){return typeof i=="string"?i!==t:Array.isArray(i)?!gb(i,t):!1}function Zi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function u1(){return{animate:Zi(!0),whileInView:Zi(),whileHover:Zi(),whileTap:Zi(),whileDrag:Zi(),whileFocus:Zi(),exit:Zi()}}class Ei{constructor(i){this.isMounted=!1,this.node=i}update(){}}class iT extends Ei{constructor(i){super(i),i.animationState||(i.animationState=tT(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Dc(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let aT=0;class rT extends Ei{constructor(){super(...arguments),this.id=aT++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const l=this.node.animationState.setActive("exit",!i);r&&!i&&l.then(()=>{r(this.id)})}mount(){const{register:i,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const oT={animation:{Feature:iT},exit:{Feature:rT}};function Wo(t,i,r,s={passive:!0}){return t.addEventListener(i,r,s),()=>t.removeEventListener(i,r)}function os(t){return{point:{x:t.pageX,y:t.pageY}}}const sT=t=>i=>am(i)&&t(i,os(i));function Uo(t,i,r,s){return Wo(t,i,sT(r),s)}function vb({top:t,left:i,right:r,bottom:s}){return{x:{min:i,max:r},y:{min:t,max:s}}}function lT({x:t,y:i}){return{top:i.min,right:t.max,bottom:i.max,left:t.min}}function cT(t,i){if(!i)return t;const r=i({x:t.left,y:t.top}),s=i({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}const xb=1e-4,uT=1-xb,dT=1+xb,bb=.01,fT=0-bb,hT=0+bb;function wt(t){return t.max-t.min}function mT(t,i,r){return Math.abs(t-i)<=r}function d1(t,i,r,s=.5){t.origin=s,t.originPoint=Pe(i.min,i.max,t.origin),t.scale=wt(r)/wt(i),t.translate=Pe(r.min,r.max,t.origin)-t.originPoint,(t.scale>=uT&&t.scale<=dT||isNaN(t.scale))&&(t.scale=1),(t.translate>=fT&&t.translate<=hT||isNaN(t.translate))&&(t.translate=0)}function Ho(t,i,r,s){d1(t.x,i.x,r.x,s?s.originX:void 0),d1(t.y,i.y,r.y,s?s.originY:void 0)}function f1(t,i,r){t.min=r.min+i.min,t.max=t.min+wt(i)}function pT(t,i,r){f1(t.x,i.x,r.x),f1(t.y,i.y,r.y)}function h1(t,i,r){t.min=i.min-r.min,t.max=t.min+wt(i)}function $o(t,i,r){h1(t.x,i.x,r.x),h1(t.y,i.y,r.y)}const m1=()=>({translate:0,scale:1,origin:0,originPoint:0}),ir=()=>({x:m1(),y:m1()}),p1=()=>({min:0,max:0}),Ze=()=>({x:p1(),y:p1()});function Qt(t){return[t("x"),t("y")]}function xf(t){return t===void 0||t===1}function ch({scale:t,scaleX:i,scaleY:r}){return!xf(t)||!xf(i)||!xf(r)}function Ji(t){return ch(t)||wb(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function wb(t){return g1(t.x)||g1(t.y)}function g1(t){return t&&t!=="0%"}function gc(t,i,r){const s=t-r,l=i*s;return r+l}function y1(t,i,r,s,l){return l!==void 0&&(t=gc(t,l,s)),gc(t,r,s)+i}function uh(t,i=0,r=1,s,l){t.min=y1(t.min,i,r,s,l),t.max=y1(t.max,i,r,s,l)}function jb(t,{x:i,y:r}){uh(t.x,i.translate,i.scale,i.originPoint),uh(t.y,r.translate,r.scale,r.originPoint)}const v1=.999999999999,x1=1.0000000000001;function gT(t,i,r,s=!1){const l=r.length;if(!l)return;i.x=i.y=1;let u,f;for(let g=0;g<l;g++){u=r[g],f=u.projectionDelta;const{visualElement:m}=u.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&rr(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,jb(t,f)),s&&Ji(u.latestValues)&&rr(t,u.latestValues))}i.x<x1&&i.x>v1&&(i.x=1),i.y<x1&&i.y>v1&&(i.y=1)}function ar(t,i){t.min=t.min+i,t.max=t.max+i}function b1(t,i,r,s,l=.5){const u=Pe(t.min,t.max,l);uh(t,i,r,u,s)}function rr(t,i){b1(t.x,i.x,i.scaleX,i.scale,i.originX),b1(t.y,i.y,i.scaleY,i.scale,i.originY)}function zb(t,i){return vb(cT(t.getBoundingClientRect(),i))}function yT(t,i,r){const s=zb(t,r),{scroll:l}=i;return l&&(ar(s.x,l.offset.x),ar(s.y,l.offset.y)),s}const Sb=({current:t})=>t?t.ownerDocument.defaultView:null,w1=(t,i)=>Math.abs(t-i);function vT(t,i){const r=w1(t.x,i.x),s=w1(t.y,i.y);return Math.sqrt(r**2+s**2)}class kb{constructor(i,r,{transformPagePoint:s,contextWindow:l,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=wf(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,z=vT(b.offset,{x:0,y:0})>=3;if(!j&&!z)return;const{point:T}=b,{timestamp:O}=ft;this.history.push({...T,timestamp:O});const{onStart:L,onMove:C}=this.handlers;j||(L&&L(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,b)},this.handlePointerMove=(b,j)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=bf(j,this.transformPagePoint),He.update(this.updatePoint,!0)},this.handlePointerUp=(b,j)=>{this.end();const{onEnd:z,onSessionEnd:T,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=wf(b.type==="pointercancel"?this.lastMoveEventInfo:bf(j,this.transformPagePoint),this.history);this.startEvent&&z&&z(b,L),T&&T(b,L)},!am(i))return;this.dragSnapToOrigin=u,this.handlers=r,this.transformPagePoint=s,this.contextWindow=l||window;const f=os(i),g=bf(f,this.transformPagePoint),{point:m}=g,{timestamp:p}=ft;this.history=[{...m,timestamp:p}];const{onSessionStart:y}=r;y&&y(i,wf(g,this.history)),this.removeListeners=is(Uo(this.contextWindow,"pointermove",this.handlePointerMove),Uo(this.contextWindow,"pointerup",this.handlePointerUp),Uo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),ki(this.updatePoint)}}function bf(t,i){return i?{point:i(t.point)}:t}function j1(t,i){return{x:t.x-i.x,y:t.y-i.y}}function wf({point:t},i){return{point:t,delta:j1(t,Tb(i)),offset:j1(t,xT(i)),velocity:bT(i,.1)}}function xT(t){return t[0]}function Tb(t){return t[t.length-1]}function bT(t,i){if(t.length<2)return{x:0,y:0};let r=t.length-1,s=null;const l=Tb(t);for(;r>=0&&(s=t[r],!(l.timestamp-s.timestamp>yn(i)));)r--;if(!s)return{x:0,y:0};const u=vn(l.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const f={x:(l.x-s.x)/u,y:(l.y-s.y)/u};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function wT(t,{min:i,max:r},s){return i!==void 0&&t<i?t=s?Pe(i,t,s.min):Math.max(t,i):r!==void 0&&t>r&&(t=s?Pe(r,t,s.max):Math.min(t,r)),t}function z1(t,i,r){return{min:i!==void 0?t.min+i:void 0,max:r!==void 0?t.max+r-(t.max-t.min):void 0}}function jT(t,{top:i,left:r,bottom:s,right:l}){return{x:z1(t.x,r,l),y:z1(t.y,i,s)}}function S1(t,i){let r=i.min-t.min,s=i.max-t.max;return i.max-i.min<t.max-t.min&&([r,s]=[s,r]),{min:r,max:s}}function zT(t,i){return{x:S1(t.x,i.x),y:S1(t.y,i.y)}}function ST(t,i){let r=.5;const s=wt(t),l=wt(i);return l>s?r=Xo(i.min,i.max-s,t.min):s>l&&(r=Xo(t.min,t.max-l,i.min)),Gn(0,1,r)}function kT(t,i){const r={};return i.min!==void 0&&(r.min=i.min-t.min),i.max!==void 0&&(r.max=i.max-t.min),r}const dh=.35;function TT(t=dh){return t===!1?t=0:t===!0&&(t=dh),{x:k1(t,"left","right"),y:k1(t,"top","bottom")}}function k1(t,i,r){return{min:T1(t,i),max:T1(t,r)}}function T1(t,i){return typeof t=="number"?t:t[i]||0}const AT=new WeakMap;class ET{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ze(),this.visualElement=i}start(i,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(os(y).point)},u=(y,b)=>{const{drag:j,dragPropagation:z,onDragStart:T}=this.getProps();if(j&&!z&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Gk(j),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qt(L=>{let C=this.getAxisMotionValue(L).get()||0;if(xn.test(C)){const{projection:V}=this.visualElement;if(V&&V.layout){const D=V.layout.layoutBox[L];D&&(C=wt(D)*(parseFloat(C)/100))}}this.originPoint[L]=C}),T&&He.postRender(()=>T(y,b)),sh(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},f=(y,b)=>{const{dragPropagation:j,dragDirectionLock:z,onDirectionLock:T,onDrag:O}=this.getProps();if(!j&&!this.openDragLock)return;const{offset:L}=b;if(z&&this.currentDirection===null){this.currentDirection=CT(L),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",b.point,L),this.updateAxis("y",b.point,L),this.visualElement.render(),O&&O(y,b)},g=(y,b)=>this.stop(y,b),m=()=>Qt(y=>{var b;return this.getAnimationState(y)==="paused"&&((b=this.getAxisMotionValue(y).animation)==null?void 0:b.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new kb(i,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:g,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:Sb(this.visualElement)})}stop(i,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:l}=r;this.startAnimation(l);const{onDragEnd:u}=this.getProps();u&&He.postRender(()=>u(i,r))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(i,r,s){const{drag:l}=this.getProps();if(!s||!Al(i,l,this.currentDirection))return;const u=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=wT(f,this.constraints[i],this.elastic[i])),u.set(f)}resolveConstraints(){var u;const{dragConstraints:i,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,l=this.constraints;i&&nr(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&s?this.constraints=jT(s.layoutBox,i):this.constraints=!1,this.elastic=TT(r),l!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Qt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=kT(s.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!nr(i))return!1;const s=i.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=yT(s,l.root,this.visualElement.getTransformPagePoint());let f=zT(l.layout.layoutBox,u);if(r){const g=r(lT(f));this.hasMutatedConstraints=!!g,g&&(f=vb(g))}return f}startAnimation(i){const{drag:r,dragMomentum:s,dragElastic:l,dragTransition:u,dragSnapToOrigin:f,onDragTransitionEnd:g}=this.getProps(),m=this.constraints||{},p=Qt(y=>{if(!Al(y,r,this.currentDirection))return;let b=m&&m[y]||{};f&&(b={min:0,max:0});const j=l?200:1e6,z=l?40:1e7,T={type:"inertia",velocity:s?i[y]:0,bounceStiffness:j,bounceDamping:z,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(y,T)});return Promise.all(p).then(g)}startAxisValueAnimation(i,r){const s=this.getAxisMotionValue(i);return sh(this.visualElement,i),s.start(pm(i,s,0,r,this.visualElement,!1))}stopAnimation(){Qt(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Qt(i=>{var r;return(r=this.getAxisMotionValue(i).animation)==null?void 0:r.pause()})}getAnimationState(i){var r;return(r=this.getAxisMotionValue(i).animation)==null?void 0:r.state}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),l=s[r];return l||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){Qt(r=>{const{drag:s}=this.getProps();if(!Al(r,s,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(r);if(l&&l.layout){const{min:f,max:g}=l.layout.layoutBox[r];u.set(i[r]-Pe(f,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!nr(r)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Qt(f=>{const g=this.getAxisMotionValue(f);if(g&&this.constraints!==!1){const m=g.get();l[f]=ST({min:m,max:m},this.constraints[f])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Qt(f=>{if(!Al(f,i,null))return;const g=this.getAxisMotionValue(f),{min:m,max:p}=this.constraints[f];g.set(Pe(m,p,l[f]))})}addListeners(){if(!this.visualElement.current)return;AT.set(this.visualElement,this);const i=this.visualElement.current,r=Uo(i,"pointerdown",m=>{const{drag:p,dragListener:y=!0}=this.getProps();p&&y&&this.start(m)}),s=()=>{const{dragConstraints:m}=this.getProps();nr(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),He.read(s);const f=Wo(window,"resize",()=>this.scalePositionWithinConstraints()),g=l.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p})=>{this.isDragging&&p&&(Qt(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=m[y].translate,b.set(b.get()+m[y].translate))}),this.visualElement.render())});return()=>{f(),r(),u(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:f=dh,dragMomentum:g=!0}=i;return{...i,drag:r,dragDirectionLock:s,dragPropagation:l,dragConstraints:u,dragElastic:f,dragMomentum:g}}}function Al(t,i,r){return(i===!0||i===t)&&(r===null||r===t)}function CT(t,i=10){let r=null;return Math.abs(t.y)>i?r="y":Math.abs(t.x)>i&&(r="x"),r}class DT extends Ei{constructor(i){super(i),this.removeGroupControls=Jt,this.removeListeners=Jt,this.controls=new ET(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jt}unmount(){this.removeGroupControls(),this.removeListeners()}}const A1=t=>(i,r)=>{t&&He.postRender(()=>t(i,r))};class RT extends Ei{constructor(){super(...arguments),this.removePointerDownListener=Jt}onPointerDown(i){this.session=new kb(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Sb(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:A1(i),onStart:A1(r),onMove:s,onEnd:(u,f)=>{delete this.session,l&&He.postRender(()=>l(u,f))}}}mount(){this.removePointerDownListener=Uo(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const rc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function E1(t,i){return i.max===i.min?0:t/(i.max-i.min)*100}const Eo={correct:(t,i)=>{if(!i.target)return t;if(typeof t=="string")if(ue.test(t))t=parseFloat(t);else return t;const r=E1(t,i.target.x),s=E1(t,i.target.y);return`${r}% ${s}%`}},MT={correct:(t,{treeScale:i,projectionDelta:r})=>{const s=t,l=Ti.parse(t);if(l.length>5)return s;const u=Ti.createTransformer(t),f=typeof l[0]!="number"?1:0,g=r.x.scale*i.x,m=r.y.scale*i.y;l[0+f]/=g,l[1+f]/=m;const p=Pe(g,m,.5);return typeof l[2+f]=="number"&&(l[2+f]/=p),typeof l[3+f]=="number"&&(l[3+f]/=p),u(l)}};class OT extends S.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s,layoutId:l}=this.props,{projection:u}=i;x3(LT),u&&(r.group&&r.group.add(u),s&&s.register&&l&&s.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),rc.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:s,drag:l,isPresent:u}=this.props,{projection:f}=s;return f&&(f.isPresent=u,l||i.layoutDependency!==r||r===void 0||i.isPresent!==u?f.willUpdate():this.safeToRemove(),i.isPresent!==u&&(u?f.promote():f.relegate()||He.postRender(()=>{const g=f.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),im.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:l}=i;l&&(l.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Ab(t){const[i,r]=Jx(),s=S.useContext(Lh);return h.jsx(OT,{...t,layoutGroup:s,switchLayoutGroup:S.useContext(ab),isPresent:i,safeToRemove:r})}const LT={borderRadius:{...Eo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Eo,borderTopRightRadius:Eo,borderBottomLeftRadius:Eo,borderBottomRightRadius:Eo,boxShadow:MT};function BT(t,i,r){const s=yt(t)?t:cr(t);return s.start(pm("",s,i,r)),s.animation}const _T=(t,i)=>t.depth-i.depth;class NT{constructor(){this.children=[],this.isDirty=!1}add(i){Nh(this.children,i),this.isDirty=!0}remove(i){Vh(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(_T),this.isDirty=!1,this.children.forEach(i)}}function VT(t,i){const r=Ct.now(),s=({timestamp:l})=>{const u=l-r;u>=i&&(ki(s),t(u-i))};return He.setup(s,!0),()=>ki(s)}const Eb=["TopLeft","TopRight","BottomLeft","BottomRight"],PT=Eb.length,C1=t=>typeof t=="string"?parseFloat(t):t,D1=t=>typeof t=="number"||ue.test(t);function UT(t,i,r,s,l,u){l?(t.opacity=Pe(0,r.opacity??1,HT(s)),t.opacityExit=Pe(i.opacity??1,0,$T(s))):u&&(t.opacity=Pe(i.opacity??1,r.opacity??1,s));for(let f=0;f<PT;f++){const g=`border${Eb[f]}Radius`;let m=R1(i,g),p=R1(r,g);if(m===void 0&&p===void 0)continue;m||(m=0),p||(p=0),m===0||p===0||D1(m)===D1(p)?(t[g]=Math.max(Pe(C1(m),C1(p),s),0),(xn.test(p)||xn.test(m))&&(t[g]+="%")):t[g]=p}(i.rotate||r.rotate)&&(t.rotate=Pe(i.rotate||0,r.rotate||0,s))}function R1(t,i){return t[i]!==void 0?t[i]:t.borderRadius}const HT=Cb(0,.5,bx),$T=Cb(.5,.95,Jt);function Cb(t,i,r){return s=>s<t?0:s>i?1:r(Xo(t,i,s))}function M1(t,i){t.min=i.min,t.max=i.max}function Zt(t,i){M1(t.x,i.x),M1(t.y,i.y)}function O1(t,i){t.translate=i.translate,t.scale=i.scale,t.originPoint=i.originPoint,t.origin=i.origin}function L1(t,i,r,s,l){return t-=i,t=gc(t,1/r,s),l!==void 0&&(t=gc(t,1/l,s)),t}function YT(t,i=0,r=1,s=.5,l,u=t,f=t){if(xn.test(i)&&(i=parseFloat(i),i=Pe(f.min,f.max,i/100)-f.min),typeof i!="number")return;let g=Pe(u.min,u.max,s);t===u&&(g-=i),t.min=L1(t.min,i,r,g,l),t.max=L1(t.max,i,r,g,l)}function B1(t,i,[r,s,l],u,f){YT(t,i[r],i[s],i[l],i.scale,u,f)}const GT=["x","scaleX","originX"],qT=["y","scaleY","originY"];function _1(t,i,r,s){B1(t.x,i,GT,r?r.x:void 0,s?s.x:void 0),B1(t.y,i,qT,r?r.y:void 0,s?s.y:void 0)}function N1(t){return t.translate===0&&t.scale===1}function Db(t){return N1(t.x)&&N1(t.y)}function V1(t,i){return t.min===i.min&&t.max===i.max}function XT(t,i){return V1(t.x,i.x)&&V1(t.y,i.y)}function P1(t,i){return Math.round(t.min)===Math.round(i.min)&&Math.round(t.max)===Math.round(i.max)}function Rb(t,i){return P1(t.x,i.x)&&P1(t.y,i.y)}function U1(t){return wt(t.x)/wt(t.y)}function H1(t,i){return t.translate===i.translate&&t.scale===i.scale&&t.originPoint===i.originPoint}class FT{constructor(){this.members=[]}add(i){Nh(this.members,i),i.scheduleRender()}remove(i){if(Vh(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(l=>i===l);if(r===0)return!1;let s;for(let l=r;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(i,r){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,r&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:l}=i.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:s}=i;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function IT(t,i,r){let s="";const l=t.x.translate/i.x,u=t.y.translate/i.y,f=(r==null?void 0:r.z)||0;if((l||u||f)&&(s=`translate3d(${l}px, ${u}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:p,rotate:y,rotateX:b,rotateY:j,skewX:z,skewY:T}=r;p&&(s=`perspective(${p}px) ${s}`),y&&(s+=`rotate(${y}deg) `),b&&(s+=`rotateX(${b}deg) `),j&&(s+=`rotateY(${j}deg) `),z&&(s+=`skewX(${z}deg) `),T&&(s+=`skewY(${T}deg) `)}const g=t.x.scale*i.x,m=t.y.scale*i.y;return(g!==1||m!==1)&&(s+=`scale(${g}, ${m})`),s||"none"}const jf=["","X","Y","Z"],KT={visibility:"hidden"},ZT=1e3;let QT=0;function zf(t,i,r,s){const{latestValues:l}=i;l[t]&&(r[t]=l[t],i.setStaticValue(t,0),s&&(s[t]=0))}function Mb(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:i}=t.options;if(!i)return;const r=hb(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:l,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(r,"transform",He,!(l||u))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&Mb(s)}function Ob({attachResizeListener:t,defaultParent:i,measureScroll:r,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(f={},g=i==null?void 0:i()){this.id=QT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(e4),this.nodes.forEach(r4),this.nodes.forEach(o4),this.nodes.forEach(t4)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new NT)}addEventListener(f,g){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Hh),this.eventHandlers.get(f).add(g)}notifyListeners(f,...g){const m=this.eventHandlers.get(f);m&&m.notify(...g)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Wx(f)&&!Zk(f),this.instance=f;const{layoutId:g,layout:m,visualElement:p}=this.options;if(p&&!p.current&&p.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||g)&&(this.isLayoutDirty=!0),t){let y;const b=()=>this.root.updateBlockedByResize=!1;t(f,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=VT(b,250),rc.hasAnimatedSinceResize&&(rc.hasAnimatedSinceResize=!1,this.nodes.forEach(Y1))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&p&&(g||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:j,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||d4,{onLayoutAnimationStart:O,onLayoutAnimationComplete:L}=p.getProps(),C=!this.targetLayout||!Rb(this.targetLayout,z),V=!b&&j;if(this.options.layoutRoot||this.resumeFrom||V||b&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,V);const D={...tm(T,"layout"),onPlay:O,onComplete:L};(p.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D)}else b||Y1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ki(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(s4),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Mb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:g,layout:m}=this.options;if(g===void 0&&!m)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($1);return}this.isUpdating||this.nodes.forEach(i4),this.isUpdating=!1,this.nodes.forEach(a4),this.nodes.forEach(WT),this.nodes.forEach(JT),this.clearAllSnapshots();const g=Ct.now();ft.delta=Gn(0,1e3/60,g-ft.timestamp),ft.timestamp=g,ft.isProcessing=!0,mf.update.process(ft),mf.preRender.process(ft),mf.render.process(ft),ft.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,im.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(n4),this.sharedNodes.forEach(l4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,He.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){He.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!wt(this.snapshot.measuredBox.x)&&!wt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(g=!1),g&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!Db(this.projectionDelta),m=this.getTransformTemplate(),p=m?m(this.latestValues,""):void 0,y=p!==this.prevTransformTemplateValue;f&&this.instance&&(g||Ji(this.latestValues)||y)&&(l(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const g=this.measurePageBox();let m=this.removeElementScroll(g);return f&&(m=this.removeTransform(m)),f4(m),{animationId:this.root.animationId,measuredBox:g,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:f}=this.options;if(!f)return Ze();const g=f.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(h4))){const{scroll:y}=this.root;y&&(ar(g.x,y.offset.x),ar(g.y,y.offset.y))}return g}removeElementScroll(f){var m;const g=Ze();if(Zt(g,f),(m=this.scroll)!=null&&m.wasRoot)return g;for(let p=0;p<this.path.length;p++){const y=this.path[p],{scroll:b,options:j}=y;y!==this.root&&b&&j.layoutScroll&&(b.wasRoot&&Zt(g,f),ar(g.x,b.offset.x),ar(g.y,b.offset.y))}return g}applyTransform(f,g=!1){const m=Ze();Zt(m,f);for(let p=0;p<this.path.length;p++){const y=this.path[p];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&rr(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ji(y.latestValues)&&rr(m,y.latestValues)}return Ji(this.latestValues)&&rr(m,this.latestValues),m}removeTransform(f){const g=Ze();Zt(g,f);for(let m=0;m<this.path.length;m++){const p=this.path[m];if(!p.instance||!Ji(p.latestValues))continue;ch(p.latestValues)&&p.updateSnapshot();const y=Ze(),b=p.measurePageBox();Zt(y,b),_1(g,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,y)}return Ji(this.latestValues)&&_1(g,this.latestValues),g}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ft.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var j;const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==g;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=ft.timestamp,!this.targetDelta&&!this.relativeTarget){const z=this.getClosestProjectingParent();z&&z.layout&&this.animationProgress!==1?(this.relativeParent=z,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ze(),this.relativeTargetOrigin=Ze(),$o(this.relativeTargetOrigin,this.layout.layoutBox,z.layout.layoutBox),Zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ze(),this.targetWithTransforms=Ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),pT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Zt(this.target,this.layout.layoutBox),jb(this.target,this.targetDelta)):Zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const z=this.getClosestProjectingParent();z&&!!z.resumingFrom==!!this.resumingFrom&&!z.options.layoutScroll&&z.target&&this.animationProgress!==1?(this.relativeParent=z,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ze(),this.relativeTargetOrigin=Ze(),$o(this.relativeTargetOrigin,this.target,z.target),Zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||ch(this.parent.latestValues)||wb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var T;const f=this.getLead(),g=!!this.resumingFrom||this!==f;let m=!0;if((this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty)&&(m=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ft.timestamp&&(m=!1),m)return;const{layout:p,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||y))return;Zt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,j=this.treeScale.y;gT(this.layoutCorrected,this.treeScale,this.path,g),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Ze());const{target:z}=f;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(O1(this.prevProjectionDelta.x,this.projectionDelta.x),O1(this.prevProjectionDelta.y,this.projectionDelta.y)),Ho(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==j||!H1(this.projectionDelta.x,this.prevProjectionDelta.x)||!H1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var g;if((g=this.options.visualElement)==null||g.scheduleRender(),f){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ir(),this.projectionDelta=ir(),this.projectionDeltaWithTransform=ir()}setAnimationOrigin(f,g=!1){const m=this.snapshot,p=m?m.latestValues:{},y={...this.latestValues},b=ir();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const j=Ze(),z=m?m.source:void 0,T=this.layout?this.layout.source:void 0,O=z!==T,L=this.getStack(),C=!L||L.members.length<=1,V=!!(O&&!C&&this.options.crossfade===!0&&!this.path.some(u4));this.animationProgress=0;let D;this.mixTargetDelta=X=>{const P=X/1e3;G1(b.x,f.x,P),G1(b.y,f.y,P),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($o(j,this.layout.layoutBox,this.relativeParent.layout.layoutBox),c4(this.relativeTarget,this.relativeTargetOrigin,j,P),D&&XT(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=Ze()),Zt(D,this.relativeTarget)),O&&(this.animationValues=y,UT(y,p,this.latestValues,P,V,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var g,m,p;this.notifyListeners("animationStart"),(g=this.currentAnimation)==null||g.stop(!1),(p=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||p.stop(!1),this.pendingAnimation&&(ki(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=He.update(()=>{rc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=cr(0)),this.currentAnimation=BT(this.motionValue,[0,1e3],{...f,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),f.onUpdate&&f.onUpdate(y)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ZT),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:g,target:m,layout:p,latestValues:y}=f;if(!(!g||!m||!p)){if(this!==f&&this.layout&&p&&Lb(this.options.animationType,this.layout.layoutBox,p.layoutBox)){m=this.target||Ze();const b=wt(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+b;const j=wt(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+j}Zt(g,m),rr(g,y),Ho(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(f,g){this.sharedNodes.has(f)||this.sharedNodes.set(f,new FT),this.sharedNodes.get(f).add(g);const p=g.options.initialPromotionConfig;g.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(g):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var g;const{layoutId:f}=this.options;return f?((g=this.getStack())==null?void 0:g.lead)||this:this}getPrevLead(){var g;const{layoutId:f}=this.options;return f?(g=this.getStack())==null?void 0:g.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:g,preserveFollowOpacity:m}={}){const p=this.getStack();p&&p.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let g=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(g=!0),!g)return;const p={};m.z&&zf("z",f,p,this.animationValues);for(let y=0;y<jf.length;y++)zf(`rotate${jf[y]}`,f,p,this.animationValues),zf(`skew${jf[y]}`,f,p,this.animationValues);f.render();for(const y in p)f.setStaticValue(y,p[y]),this.animationValues&&(this.animationValues[y]=p[y]);f.scheduleRender()}getProjectionStyles(f){if(!this.instance||this.isSVG)return;if(!this.isVisible)return KT;const g={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,g.opacity="",g.pointerEvents=ac(f==null?void 0:f.pointerEvents)||"",g.transform=m?m(this.latestValues,""):"none",g;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const z={};return this.options.layoutId&&(z.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,z.pointerEvents=ac(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!Ji(this.latestValues)&&(z.transform=m?m({},""):"none",this.hasProjected=!1),z}const y=p.animationValues||p.latestValues;this.applyTransformsToTarget(),g.transform=IT(this.projectionDeltaWithTransform,this.treeScale,y),m&&(g.transform=m(y,g.transform));const{x:b,y:j}=this.projectionDelta;g.transformOrigin=`${b.origin*100}% ${j.origin*100}% 0`,p.animationValues?g.opacity=p===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:g.opacity=p===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const z in Zo){if(y[z]===void 0)continue;const{correct:T,applyTo:O,isCSSVariable:L}=Zo[z],C=g.transform==="none"?y[z]:T(y[z],p);if(O){const V=O.length;for(let D=0;D<V;D++)g[O[D]]=C}else L?this.options.visualElement.renderState.vars[z]=C:g[z]=C}return this.options.layoutId&&(g.pointerEvents=p===this?ac(f==null?void 0:f.pointerEvents)||"":"none"),g}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var g;return(g=f.currentAnimation)==null?void 0:g.stop(!1)}),this.root.nodes.forEach($1),this.root.sharedNodes.clear()}}}function WT(t){t.updateLayout()}function JT(t){var r;const i=((r=t.resumeFrom)==null?void 0:r.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=t.layout,{animationType:u}=t.options,f=i.source!==t.layout.source;u==="size"?Qt(b=>{const j=f?i.measuredBox[b]:i.layoutBox[b],z=wt(j);j.min=s[b].min,j.max=j.min+z}):Lb(u,i.layoutBox,s)&&Qt(b=>{const j=f?i.measuredBox[b]:i.layoutBox[b],z=wt(s[b]);j.max=j.min+z,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+z)});const g=ir();Ho(g,s,i.layoutBox);const m=ir();f?Ho(m,t.applyTransform(l,!0),i.measuredBox):Ho(m,s,i.layoutBox);const p=!Db(g);let y=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:j,layout:z}=b;if(j&&z){const T=Ze();$o(T,i.layoutBox,j.layoutBox);const O=Ze();$o(O,s,z.layoutBox),Rb(T,O)||(y=!0),b.options.layoutRoot&&(t.relativeTarget=O,t.relativeTargetOrigin=T,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:i,delta:m,layoutDelta:g,hasLayoutChanged:p,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function e4(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function t4(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function n4(t){t.clearSnapshot()}function $1(t){t.clearMeasurements()}function i4(t){t.isLayoutDirty=!1}function a4(t){const{visualElement:i}=t.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),t.resetTransform()}function Y1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function r4(t){t.resolveTargetDelta()}function o4(t){t.calcProjection()}function s4(t){t.resetSkewAndRotation()}function l4(t){t.removeLeadSnapshot()}function G1(t,i,r){t.translate=Pe(i.translate,0,r),t.scale=Pe(i.scale,1,r),t.origin=i.origin,t.originPoint=i.originPoint}function q1(t,i,r,s){t.min=Pe(i.min,r.min,s),t.max=Pe(i.max,r.max,s)}function c4(t,i,r,s){q1(t.x,i.x,r.x,s),q1(t.y,i.y,r.y,s)}function u4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const d4={duration:.45,ease:[.4,0,.1,1]},X1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),F1=X1("applewebkit/")&&!X1("chrome/")?Math.round:Jt;function I1(t){t.min=F1(t.min),t.max=F1(t.max)}function f4(t){I1(t.x),I1(t.y)}function Lb(t,i,r){return t==="position"||t==="preserve-aspect"&&!mT(U1(i),U1(r),.2)}function h4(t){var i;return t!==t.root&&((i=t.scroll)==null?void 0:i.wasRoot)}const m4=Ob({attachResizeListener:(t,i)=>Wo(t,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sf={current:void 0},Bb=Ob({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Sf.current){const t=new m4({});t.mount(window),t.setOptions({layoutScroll:!0}),Sf.current=t}return Sf.current},resetTransform:(t,i)=>{t.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),p4={pan:{Feature:RT},drag:{Feature:DT,ProjectionNode:Bb,MeasureLayout:Ab}};function K1(t,i,r){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",r==="Start");const l="onHover"+r,u=s[l];u&&He.postRender(()=>u(i,os(i)))}class g4 extends Ei{mount(){const{current:i}=this.node;i&&(this.unmount=qk(i,(r,s)=>(K1(this.node,s,"Start"),l=>K1(this.node,l,"End"))))}unmount(){}}class y4 extends Ei{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=is(Wo(this.node.current,"focus",()=>this.onFocus()),Wo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Z1(t,i,r){const{props:s}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",r==="Start");const l="onTap"+(r==="End"?"":r),u=s[l];u&&He.postRender(()=>u(i,os(i)))}class v4 extends Ei{mount(){const{current:i}=this.node;i&&(this.unmount=Kk(i,(r,s)=>(Z1(this.node,s,"Start"),(l,{success:u})=>Z1(this.node,l,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const fh=new WeakMap,kf=new WeakMap,x4=t=>{const i=fh.get(t.target);i&&i(t)},b4=t=>{t.forEach(x4)};function w4({root:t,...i}){const r=t||document;kf.has(r)||kf.set(r,{});const s=kf.get(r),l=JSON.stringify(i);return s[l]||(s[l]=new IntersectionObserver(b4,{root:t,...i})),s[l]}function j4(t,i,r){const s=w4(i);return fh.set(t,r),s.observe(t),()=>{fh.delete(t),s.unobserve(t)}}const z4={some:0,all:1};class S4 extends Ei{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:s,amount:l="some",once:u}=i,f={root:r?r.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:z4[l]},g=m=>{const{isIntersecting:p}=m;if(this.isInView===p||(this.isInView=p,u&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),j=p?y:b;j&&j(m)};return j4(this.node.current,f,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(k4(i,r))&&this.startObserver()}unmount(){}}function k4({viewport:t={}},{viewport:i={}}={}){return r=>t[r]!==i[r]}const T4={inView:{Feature:S4},tap:{Feature:v4},focus:{Feature:y4},hover:{Feature:g4}},A4={layout:{ProjectionNode:Bb,MeasureLayout:Ab}},hh={current:null},_b={current:!1};function E4(){if(_b.current=!0,!!Bh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),i=()=>hh.current=t.matches;t.addListener(i),i()}else hh.current=!1}const C4=new WeakMap;function D4(t,i,r){for(const s in i){const l=i[s],u=r[s];if(yt(l))t.addValue(s,l);else if(yt(u))t.addValue(s,cr(l,{owner:t}));else if(u!==l)if(t.hasValue(s)){const f=t.getValue(s);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=t.getStaticValue(s);t.addValue(s,cr(f!==void 0?f:l,{owner:t}))}}for(const s in r)i[s]===void 0&&t.removeValue(s);return i}const Q1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class R4{scrapeMotionValuesFromProps(i,r,s){return{}}constructor({parent:i,props:r,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:u,visualState:f},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Jh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const j=Ct.now();this.renderScheduledAt<j&&(this.renderScheduledAt=j,He.render(this.render,!1,!0))};const{latestValues:m,renderState:p}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=r.initial?{...m}:{},this.renderState=p,this.parent=i,this.props=r,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=l,this.options=g,this.blockInitialAnimation=!!u,this.isControllingVariants=Rc(r),this.isVariantNode=nb(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(r,{},this);for(const j in b){const z=b[j];m[j]!==void 0&&yt(z)&&z.set(m[j],!1)}}mount(i){this.current=i,C4.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),_b.current||E4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:hh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ki(this.notifyUpdate),ki(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(i,r){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=zr.has(i);s&&this.onBindTransform&&this.onBindTransform();const l=r.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&He.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),u=r.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{l(),u(),f&&f(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ur){const r=ur[i];if(!r)continue;const{isEnabled:s,Feature:l}=r;if(!this.features[i]&&l&&s(this.props)&&(this.features[i]=new l(this)),this.features[i]){const u=this.features[i];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ze()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<Q1.length;s++){const l=Q1[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,f=i[u];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=D4(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const s=this.values.get(i);r!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&r!==void 0&&(s=cr(r===null?void 0:r,{owner:this}),this.addValue(i,s)),s}readValue(i,r){let s=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return s!=null&&(typeof s=="string"&&(ux(s)||fx(s))?s=parseFloat(s):!Wk(s)&&Ti.test(r)&&(s=Fx(i,r)),this.setBaseTarget(i,yt(s)?s.get():s)),yt(s)?s.get():s}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var u;const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const f=fm(this.props,r,(u=this.presenceContext)==null?void 0:u.custom);f&&(s=f[i])}if(r&&s!==void 0)return s;const l=this.getBaseTargetFromProps(this.props,i);return l!==void 0&&!yt(l)?l:this.initialValues[i]!==void 0&&s===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new Hh),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}}class Nb extends R4{constructor(){super(...arguments),this.KeyframeResolver=Uk}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){return i.style?i.style[r]:void 0}removeValueFromRenderState(i,{vars:r,style:s}){delete r[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;yt(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function Vb(t,{style:i,vars:r},s,l){Object.assign(t.style,i,l&&l.getProjectionStyles(s));for(const u in r)t.style.setProperty(u,r[u])}function M4(t){return window.getComputedStyle(t)}class O4 extends Nb{constructor(){super(...arguments),this.type="html",this.renderInstance=Vb}readValueFromInstance(i,r){var s;if(zr.has(r))return(s=this.projection)!=null&&s.isProjecting?eh(r):rk(i,r);{const l=M4(i),u=(Gh(r)?l.getPropertyValue(r):l[r])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:r}){return zb(i,r)}build(i,r,s){cm(i,r,s.transformTemplate)}scrapeMotionValuesFromProps(i,r,s){return hm(i,r,s)}}const Pb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function L4(t,i,r,s){Vb(t,i,void 0,s);for(const l in i.attrs)t.setAttribute(Pb.has(l)?l:lm(l),i.attrs[l])}class B4 extends Nb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ze}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(zr.has(r)){const s=Xx(r);return s&&s.default||0}return r=Pb.has(r)?r:lm(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,s){return fb(i,r,s)}build(i,r,s){lb(i,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(i,r,s,l){L4(i,r,s,l)}mount(i){this.isSVGTag=ub(i.tagName),super.mount(i)}}const _4=(t,i)=>dm(t)?new B4(i):new O4(i,{allowProjection:t!==S.Fragment}),N4=_3({...oT,...T4,...p4,...A4},_4),W=s3(N4);function V4(t){t.values.forEach(i=>i.stop())}function mh(t,i){[...i].reverse().forEach(s=>{const l=t.getVariant(s);l&&mm(t,l),t.variantChildren&&t.variantChildren.forEach(u=>{mh(u,i)})})}function P4(t,i){if(Array.isArray(i))return mh(t,i);if(typeof i=="string")return mh(t,[i]);mm(t,i)}function U4(){const t=new Set,i={subscribe(r){return t.add(r),()=>void t.delete(r)},start(r,s){const l=[];return t.forEach(u=>{l.push(pb(u,r,{transitionOverride:s}))}),Promise.all(l)},set(r){return t.forEach(s=>{P4(s,r)})},stop(){t.forEach(r=>{V4(r)})},mount(){return()=>{i.stop()}}};return i}function H4(){const t=Ac(U4);return _h(t.mount,[]),t}const Qa=H4;var vt=function(){return vt=Object.assign||function(i){for(var r,s=1,l=arguments.length;s<l;s++){r=arguments[s];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(i[u]=r[u])}return i},vt.apply(this,arguments)};function dr(t,i,r){if(r||arguments.length===2)for(var s=0,l=i.length,u;s<l;s++)(u||!(s in i))&&(u||(u=Array.prototype.slice.call(i,0,s)),u[s]=i[s]);return t.concat(u||Array.prototype.slice.call(i))}var Oe="-ms-",Yo="-moz-",Se="-webkit-",Ub="comm",Mc="rule",gm="decl",$4="@import",Hb="@keyframes",Y4="@layer",$b=Math.abs,ym=String.fromCharCode,ph=Object.assign;function G4(t,i){return lt(t,0)^45?(((i<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function Yb(t){return t.trim()}function Un(t,i){return(t=i.exec(t))?t[0]:t}function he(t,i,r){return t.replace(i,r)}function oc(t,i,r){return t.indexOf(i,r)}function lt(t,i){return t.charCodeAt(i)|0}function fr(t,i,r){return t.slice(i,r)}function gn(t){return t.length}function Gb(t){return t.length}function No(t,i){return i.push(t),t}function q4(t,i){return t.map(i).join("")}function W1(t,i){return t.filter(function(r){return!Un(r,i)})}var Oc=1,hr=1,qb=0,en=0,et=0,Sr="";function Lc(t,i,r,s,l,u,f,g){return{value:t,root:i,parent:r,type:s,props:l,children:u,line:Oc,column:hr,length:f,return:"",siblings:g}}function zi(t,i){return ph(Lc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},i)}function Wa(t){for(;t.root;)t=zi(t.root,{children:[t]});No(t,t.siblings)}function X4(){return et}function F4(){return et=en>0?lt(Sr,--en):0,hr--,et===10&&(hr=1,Oc--),et}function ln(){return et=en<qb?lt(Sr,en++):0,hr++,et===10&&(hr=1,Oc++),et}function sa(){return lt(Sr,en)}function sc(){return en}function Bc(t,i){return fr(Sr,t,i)}function gh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I4(t){return Oc=hr=1,qb=gn(Sr=t),en=0,[]}function K4(t){return Sr="",t}function Tf(t){return Yb(Bc(en-1,yh(t===91?t+2:t===40?t+1:t)))}function Z4(t){for(;(et=sa())&&et<33;)ln();return gh(t)>2||gh(et)>3?"":" "}function Q4(t,i){for(;--i&&ln()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return Bc(t,sc()+(i<6&&sa()==32&&ln()==32))}function yh(t){for(;ln();)switch(et){case t:return en;case 34:case 39:t!==34&&t!==39&&yh(et);break;case 40:t===41&&yh(t);break;case 92:ln();break}return en}function W4(t,i){for(;ln()&&t+et!==57;)if(t+et===84&&sa()===47)break;return"/*"+Bc(i,en-1)+"*"+ym(t===47?t:ln())}function J4(t){for(;!gh(sa());)ln();return Bc(t,en)}function eA(t){return K4(lc("",null,null,null,[""],t=I4(t),0,[0],t))}function lc(t,i,r,s,l,u,f,g,m){for(var p=0,y=0,b=f,j=0,z=0,T=0,O=1,L=1,C=1,V=0,D="",X=l,P=u,F=s,K=D;L;)switch(T=V,V=ln()){case 40:if(T!=108&&lt(K,b-1)==58){oc(K+=he(Tf(V),"&","&\f"),"&\f",$b(p?g[p-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:K+=Tf(V);break;case 9:case 10:case 13:case 32:K+=Z4(T);break;case 92:K+=Q4(sc()-1,7);continue;case 47:switch(sa()){case 42:case 47:No(tA(W4(ln(),sc()),i,r,m),m);break;default:K+="/"}break;case 123*O:g[p++]=gn(K)*C;case 125*O:case 59:case 0:switch(V){case 0:case 125:L=0;case 59+y:C==-1&&(K=he(K,/\f/g,"")),z>0&&gn(K)-b&&No(z>32?ev(K+";",s,r,b-1,m):ev(he(K," ","")+";",s,r,b-2,m),m);break;case 59:K+=";";default:if(No(F=J1(K,i,r,p,y,l,g,D,X=[],P=[],b,u),u),V===123)if(y===0)lc(K,i,F,F,X,u,b,g,P);else switch(j===99&&lt(K,3)===110?100:j){case 100:case 108:case 109:case 115:lc(t,F,F,s&&No(J1(t,F,F,0,0,l,g,D,l,X=[],b,P),P),l,P,b,g,s?X:P);break;default:lc(K,F,F,F,[""],P,0,g,P)}}p=y=z=0,O=C=1,D=K="",b=f;break;case 58:b=1+gn(K),z=T;default:if(O<1){if(V==123)--O;else if(V==125&&O++==0&&F4()==125)continue}switch(K+=ym(V),V*O){case 38:C=y>0?1:(K+="\f",-1);break;case 44:g[p++]=(gn(K)-1)*C,C=1;break;case 64:sa()===45&&(K+=Tf(ln())),j=sa(),y=b=gn(D=K+=J4(sc())),V++;break;case 45:T===45&&gn(K)==2&&(O=0)}}return u}function J1(t,i,r,s,l,u,f,g,m,p,y,b){for(var j=l-1,z=l===0?u:[""],T=Gb(z),O=0,L=0,C=0;O<s;++O)for(var V=0,D=fr(t,j+1,j=$b(L=f[O])),X=t;V<T;++V)(X=Yb(L>0?z[V]+" "+D:he(D,/&\f/g,z[V])))&&(m[C++]=X);return Lc(t,i,r,l===0?Mc:g,m,p,y,b)}function tA(t,i,r,s){return Lc(t,i,r,Ub,ym(X4()),fr(t,2,-2),0,s)}function ev(t,i,r,s,l){return Lc(t,i,r,gm,fr(t,0,s),fr(t,s+1,-1),s,l)}function Xb(t,i,r){switch(G4(t,i)){case 5103:return Se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+t+t;case 4789:return Yo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+t+Yo+t+Oe+t+t;case 5936:switch(lt(t,i+11)){case 114:return Se+t+Oe+he(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Se+t+Oe+he(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Se+t+Oe+he(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Se+t+Oe+t+t;case 6165:return Se+t+Oe+"flex-"+t+t;case 5187:return Se+t+he(t,/(\w+).+(:[^]+)/,Se+"box-$1$2"+Oe+"flex-$1$2")+t;case 5443:return Se+t+Oe+"flex-item-"+he(t,/flex-|-self/g,"")+(Un(t,/flex-|baseline/)?"":Oe+"grid-row-"+he(t,/flex-|-self/g,""))+t;case 4675:return Se+t+Oe+"flex-line-pack"+he(t,/align-content|flex-|-self/g,"")+t;case 5548:return Se+t+Oe+he(t,"shrink","negative")+t;case 5292:return Se+t+Oe+he(t,"basis","preferred-size")+t;case 6060:return Se+"box-"+he(t,"-grow","")+Se+t+Oe+he(t,"grow","positive")+t;case 4554:return Se+he(t,/([^-])(transform)/g,"$1"+Se+"$2")+t;case 6187:return he(he(he(t,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),t,"")+t;case 5495:case 3959:return he(t,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return he(he(t,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+t+t;case 4200:if(!Un(t,/flex-|baseline/))return Oe+"grid-column-align"+fr(t,i)+t;break;case 2592:case 3360:return Oe+he(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(s,l){return i=l,Un(s.props,/grid-\w+-end/)})?~oc(t+(r=r[i].value),"span",0)?t:Oe+he(t,"-start","")+t+Oe+"grid-row-span:"+(~oc(r,"span",0)?Un(r,/\d+/):+Un(r,/\d+/)-+Un(t,/\d+/))+";":Oe+he(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(s){return Un(s.props,/grid-\w+-start/)})?t:Oe+he(he(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return he(t,/(.+)-inline(.+)/,Se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(t)-1-i>6)switch(lt(t,i+1)){case 109:if(lt(t,i+4)!==45)break;case 102:return he(t,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+Yo+(lt(t,i+3)==108?"$3":"$2-$3"))+t;case 115:return~oc(t,"stretch",0)?Xb(he(t,"stretch","fill-available"),i,r)+t:t}break;case 5152:case 5920:return he(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,u,f,g,m,p){return Oe+l+":"+u+p+(f?Oe+l+"-span:"+(g?m:+m-+u)+p:"")+t});case 4949:if(lt(t,i+6)===121)return he(t,":",":"+Se)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return he(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(lt(t,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+Oe+"$2box$3")+t;case 100:return he(t,":",":"+Oe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(t,"scroll-","scroll-snap-")+t}return t}function yc(t,i){for(var r="",s=0;s<t.length;s++)r+=i(t[s],s,t,i)||"";return r}function nA(t,i,r,s){switch(t.type){case Y4:if(t.children.length)break;case $4:case gm:return t.return=t.return||t.value;case Ub:return"";case Hb:return t.return=t.value+"{"+yc(t.children,s)+"}";case Mc:if(!gn(t.value=t.props.join(",")))return""}return gn(r=yc(t.children,s))?t.return=t.value+"{"+r+"}":""}function iA(t){var i=Gb(t);return function(r,s,l,u){for(var f="",g=0;g<i;g++)f+=t[g](r,s,l,u)||"";return f}}function aA(t){return function(i){i.root||(i=i.return)&&t(i)}}function rA(t,i,r,s){if(t.length>-1&&!t.return)switch(t.type){case gm:t.return=Xb(t.value,t.length,r);return;case Hb:return yc([zi(t,{value:he(t.value,"@","@"+Se)})],s);case Mc:if(t.length)return q4(r=t.props,function(l){switch(Un(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wa(zi(t,{props:[he(l,/:(read-\w+)/,":"+Yo+"$1")]})),Wa(zi(t,{props:[l]})),ph(t,{props:W1(r,s)});break;case"::placeholder":Wa(zi(t,{props:[he(l,/:(plac\w+)/,":"+Se+"input-$1")]})),Wa(zi(t,{props:[he(l,/:(plac\w+)/,":"+Yo+"$1")]})),Wa(zi(t,{props:[he(l,/:(plac\w+)/,Oe+"input-$1")]})),Wa(zi(t,{props:[l]})),ph(t,{props:W1(r,s)});break}return""})}}var oA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ut={},mr=typeof process<"u"&&Ut!==void 0&&(Ut.REACT_APP_SC_ATTR||Ut.SC_ATTR)||"data-styled",Fb="active",Ib="data-styled-version",_c="6.1.18",vm=`/*!sc*/
`,vc=typeof window<"u"&&typeof document<"u",sA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ut.REACT_APP_SC_DISABLE_SPEEDY!==""?Ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ut!==void 0&&Ut.SC_DISABLE_SPEEDY!==void 0&&Ut.SC_DISABLE_SPEEDY!==""&&Ut.SC_DISABLE_SPEEDY!=="false"&&Ut.SC_DISABLE_SPEEDY),lA={},Nc=Object.freeze([]),pr=Object.freeze({});function Kb(t,i,r){return r===void 0&&(r=pr),t.theme!==r.theme&&t.theme||i||r.theme}var Zb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uA=/(^-|-$)/g;function tv(t){return t.replace(cA,"-").replace(uA,"")}var dA=/(a)(d)/gi,El=52,nv=function(t){return String.fromCharCode(t+(t>25?39:97))};function vh(t){var i,r="";for(i=Math.abs(t);i>El;i=i/El|0)r=nv(i%El)+r;return(nv(i%El)+r).replace(dA,"$1-$2")}var Af,Qb=5381,or=function(t,i){for(var r=i.length;r;)t=33*t^i.charCodeAt(--r);return t},Wb=function(t){return or(Qb,t)};function xm(t){return vh(Wb(t)>>>0)}function fA(t){return t.displayName||t.name||"Component"}function Ef(t){return typeof t=="string"&&!0}var Jb=typeof Symbol=="function"&&Symbol.for,ew=Jb?Symbol.for("react.memo"):60115,hA=Jb?Symbol.for("react.forward_ref"):60112,mA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gA=((Af={})[hA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Af[ew]=tw,Af);function iv(t){return("type"in(i=t)&&i.type.$$typeof)===ew?tw:"$$typeof"in t?gA[t.$$typeof]:mA;var i}var yA=Object.defineProperty,vA=Object.getOwnPropertyNames,av=Object.getOwnPropertySymbols,xA=Object.getOwnPropertyDescriptor,bA=Object.getPrototypeOf,rv=Object.prototype;function nw(t,i,r){if(typeof i!="string"){if(rv){var s=bA(i);s&&s!==rv&&nw(t,s,r)}var l=vA(i);av&&(l=l.concat(av(i)));for(var u=iv(t),f=iv(i),g=0;g<l.length;++g){var m=l[g];if(!(m in pA||r&&r[m]||f&&m in f||u&&m in u)){var p=xA(i,m);try{yA(t,m,p)}catch{}}}}return t}function gr(t){return typeof t=="function"}function bm(t){return typeof t=="object"&&"styledComponentId"in t}function na(t,i){return t&&i?"".concat(t," ").concat(i):t||i||""}function xc(t,i){if(t.length===0)return"";for(var r=t[0],s=1;s<t.length;s++)r+=t[s];return r}function Jo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function xh(t,i,r){if(r===void 0&&(r=!1),!r&&!Jo(t)&&!Array.isArray(t))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)t[s]=xh(t[s],i[s]);else if(Jo(i))for(var s in i)t[s]=xh(t[s],i[s]);return t}function wm(t,i){Object.defineProperty(t,"toString",{value:i})}function ss(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var wA=function(){function t(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return t.prototype.indexOfGroup=function(i){for(var r=0,s=0;s<i;s++)r+=this.groupSizes[s];return r},t.prototype.insertRules=function(i,r){if(i>=this.groupSizes.length){for(var s=this.groupSizes,l=s.length,u=l;i>=u;)if((u<<=1)<0)throw ss(16,"".concat(i));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var f=l;f<u;f++)this.groupSizes[f]=0}for(var g=this.indexOfGroup(i+1),m=(f=0,r.length);f<m;f++)this.tag.insertRule(g,r[f])&&(this.groupSizes[i]++,g++)},t.prototype.clearGroup=function(i){if(i<this.length){var r=this.groupSizes[i],s=this.indexOfGroup(i),l=s+r;this.groupSizes[i]=0;for(var u=s;u<l;u++)this.tag.deleteRule(s)}},t.prototype.getGroup=function(i){var r="";if(i>=this.length||this.groupSizes[i]===0)return r;for(var s=this.groupSizes[i],l=this.indexOfGroup(i),u=l+s,f=l;f<u;f++)r+="".concat(this.tag.getRule(f)).concat(vm);return r},t}(),cc=new Map,bc=new Map,uc=1,Cl=function(t){if(cc.has(t))return cc.get(t);for(;bc.has(uc);)uc++;var i=uc++;return cc.set(t,i),bc.set(i,t),i},jA=function(t,i){uc=i+1,cc.set(t,i),bc.set(i,t)},zA="style[".concat(mr,"][").concat(Ib,'="').concat(_c,'"]'),SA=new RegExp("^".concat(mr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kA=function(t,i,r){for(var s,l=r.split(","),u=0,f=l.length;u<f;u++)(s=l[u])&&t.registerName(i,s)},TA=function(t,i){for(var r,s=((r=i.textContent)!==null&&r!==void 0?r:"").split(vm),l=[],u=0,f=s.length;u<f;u++){var g=s[u].trim();if(g){var m=g.match(SA);if(m){var p=0|parseInt(m[1],10),y=m[2];p!==0&&(jA(y,p),kA(t,y,m[3]),t.getTag().insertRules(p,l)),l.length=0}else l.push(g)}}},ov=function(t){for(var i=document.querySelectorAll(zA),r=0,s=i.length;r<s;r++){var l=i[r];l&&l.getAttribute(mr)!==Fb&&(TA(t,l),l.parentNode&&l.parentNode.removeChild(l))}};function AA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iw=function(t){var i=document.head,r=t||i,s=document.createElement("style"),l=function(g){var m=Array.from(g.querySelectorAll("style[".concat(mr,"]")));return m[m.length-1]}(r),u=l!==void 0?l.nextSibling:null;s.setAttribute(mr,Fb),s.setAttribute(Ib,_c);var f=AA();return f&&s.setAttribute("nonce",f),r.insertBefore(s,u),s},EA=function(){function t(i){this.element=iw(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,l=0,u=s.length;l<u;l++){var f=s[l];if(f.ownerNode===r)return f}throw ss(17)}(this.element),this.length=0}return t.prototype.insertRule=function(i,r){try{return this.sheet.insertRule(r,i),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},t.prototype.getRule=function(i){var r=this.sheet.cssRules[i];return r&&r.cssText?r.cssText:""},t}(),CA=function(){function t(i){this.element=iw(i),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(i,r){if(i<=this.length&&i>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},t.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},t}(),DA=function(){function t(i){this.rules=[],this.length=0}return t.prototype.insertRule=function(i,r){return i<=this.length&&(this.rules.splice(i,0,r),this.length++,!0)},t.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},t.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},t}(),sv=vc,RA={isServer:!vc,useCSSOMInjection:!sA},wc=function(){function t(i,r,s){i===void 0&&(i=pr),r===void 0&&(r={});var l=this;this.options=vt(vt({},RA),i),this.gs=r,this.names=new Map(s),this.server=!!i.isServer,!this.server&&vc&&sv&&(sv=!1,ov(this)),wm(this,function(){return function(u){for(var f=u.getTag(),g=f.length,m="",p=function(b){var j=function(C){return bc.get(C)}(b);if(j===void 0)return"continue";var z=u.names.get(j),T=f.getGroup(b);if(z===void 0||!z.size||T.length===0)return"continue";var O="".concat(mr,".g").concat(b,'[id="').concat(j,'"]'),L="";z!==void 0&&z.forEach(function(C){C.length>0&&(L+="".concat(C,","))}),m+="".concat(T).concat(O,'{content:"').concat(L,'"}').concat(vm)},y=0;y<g;y++)p(y);return m}(l)})}return t.registerId=function(i){return Cl(i)},t.prototype.rehydrate=function(){!this.server&&vc&&ov(this)},t.prototype.reconstructWithOptions=function(i,r){return r===void 0&&(r=!0),new t(vt(vt({},this.options),i),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(i=function(r){var s=r.useCSSOMInjection,l=r.target;return r.isServer?new DA(l):s?new EA(l):new CA(l)}(this.options),new wA(i)));var i},t.prototype.hasNameForId=function(i,r){return this.names.has(i)&&this.names.get(i).has(r)},t.prototype.registerName=function(i,r){if(Cl(i),this.names.has(i))this.names.get(i).add(r);else{var s=new Set;s.add(r),this.names.set(i,s)}},t.prototype.insertRules=function(i,r,s){this.registerName(i,r),this.getTag().insertRules(Cl(i),s)},t.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},t.prototype.clearRules=function(i){this.getTag().clearGroup(Cl(i)),this.clearNames(i)},t.prototype.clearTag=function(){this.tag=void 0},t}(),MA=/&/g,OA=/^\s*\/\/.*$/gm;function aw(t,i){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(i," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(i," ")),r.props=r.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=aw(r.children,i)),r})}function LA(t){var i,r,s,l=pr,u=l.options,f=u===void 0?pr:u,g=l.plugins,m=g===void 0?Nc:g,p=function(j,z,T){return T.startsWith(r)&&T.endsWith(r)&&T.replaceAll(r,"").length>0?".".concat(i):j},y=m.slice();y.push(function(j){j.type===Mc&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(MA,r).replace(s,p))}),f.prefix&&y.push(rA),y.push(nA);var b=function(j,z,T,O){z===void 0&&(z=""),T===void 0&&(T=""),O===void 0&&(O="&"),i=O,r=z,s=new RegExp("\\".concat(r,"\\b"),"g");var L=j.replace(OA,""),C=eA(T||z?"".concat(T," ").concat(z," { ").concat(L," }"):L);f.namespace&&(C=aw(C,f.namespace));var V=[];return yc(C,iA(y.concat(aA(function(D){return V.push(D)})))),V};return b.hash=m.length?m.reduce(function(j,z){return z.name||ss(15),or(j,z.name)},Qb).toString():"",b}var BA=new wc,bh=LA(),rw=tt.createContext({shouldForwardProp:void 0,styleSheet:BA,stylis:bh});rw.Consumer;tt.createContext(void 0);function wh(){return S.useContext(rw)}var ow=function(){function t(i,r){var s=this;this.inject=function(l,u){u===void 0&&(u=bh);var f=s.name+u.hash;l.hasNameForId(s.id,f)||l.insertRules(s.id,f,u(s.rules,f,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=r,wm(this,function(){throw ss(12,String(s.name))})}return t.prototype.getName=function(i){return i===void 0&&(i=bh),this.name+i.hash},t}(),_A=function(t){return t>="A"&&t<="Z"};function lv(t){for(var i="",r=0;r<t.length;r++){var s=t[r];if(r===1&&s==="-"&&t[0]==="-")return t;_A(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var sw=function(t){return t==null||t===!1||t===""},lw=function(t){var i,r,s=[];for(var l in t){var u=t[l];t.hasOwnProperty(l)&&!sw(u)&&(Array.isArray(u)&&u.isCss||gr(u)?s.push("".concat(lv(l),":"),u,";"):Jo(u)?s.push.apply(s,dr(dr(["".concat(l," {")],lw(u),!1),["}"],!1)):s.push("".concat(lv(l),": ").concat((i=l,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||i in oA||i.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function Si(t,i,r,s){if(sw(t))return[];if(bm(t))return[".".concat(t.styledComponentId)];if(gr(t)){if(!gr(u=t)||u.prototype&&u.prototype.isReactComponent||!i)return[t];var l=t(i);return Si(l,i,r,s)}var u;return t instanceof ow?r?(t.inject(r,s),[t.getName(s)]):[t]:Jo(t)?lw(t):Array.isArray(t)?Array.prototype.concat.apply(Nc,t.map(function(f){return Si(f,i,r,s)})):[t.toString()]}function cw(t){for(var i=0;i<t.length;i+=1){var r=t[i];if(gr(r)&&!bm(r))return!1}return!0}var NA=Wb(_c),VA=function(){function t(i,r,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&cw(i),this.componentId=r,this.baseHash=or(NA,r),this.baseStyle=s,wc.registerId(r)}return t.prototype.generateAndInjectStyles=function(i,r,s){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))l=na(l,this.staticRulesId);else{var u=xc(Si(this.rules,i,r,s)),f=vh(or(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,f)){var g=s(u,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,g)}l=na(l,f),this.staticRulesId=f}else{for(var m=or(this.baseHash,s.hash),p="",y=0;y<this.rules.length;y++){var b=this.rules[y];if(typeof b=="string")p+=b;else if(b){var j=xc(Si(b,i,r,s));m=or(m,j+y),p+=j}}if(p){var z=vh(m>>>0);r.hasNameForId(this.componentId,z)||r.insertRules(this.componentId,z,s(p,".".concat(z),void 0,this.componentId)),l=na(l,z)}}return l},t}(),jm=tt.createContext(void 0);jm.Consumer;var Cf={};function PA(t,i,r){var s=bm(t),l=t,u=!Ef(t),f=i.attrs,g=f===void 0?Nc:f,m=i.componentId,p=m===void 0?function(X,P){var F=typeof X!="string"?"sc":tv(X);Cf[F]=(Cf[F]||0)+1;var K="".concat(F,"-").concat(xm(_c+F+Cf[F]));return P?"".concat(P,"-").concat(K):K}(i.displayName,i.parentComponentId):m,y=i.displayName,b=y===void 0?function(X){return Ef(X)?"styled.".concat(X):"Styled(".concat(fA(X),")")}(t):y,j=i.displayName&&i.componentId?"".concat(tv(i.displayName),"-").concat(i.componentId):i.componentId||p,z=s&&l.attrs?l.attrs.concat(g).filter(Boolean):g,T=i.shouldForwardProp;if(s&&l.shouldForwardProp){var O=l.shouldForwardProp;if(i.shouldForwardProp){var L=i.shouldForwardProp;T=function(X,P){return O(X,P)&&L(X,P)}}else T=O}var C=new VA(r,j,s?l.componentStyle:void 0);function V(X,P){return function(F,K,J){var se=F.attrs,xe=F.componentStyle,Le=F.defaultProps,Be=F.foldedComponentIds,jt=F.styledComponentId,xt=F.target,$e=tt.useContext(jm),U=wh(),I=F.shouldForwardProp||U.shouldForwardProp,ee=Kb(K,$e,Le)||pr,de=function(me,ae,Qe){for(var q,re=vt(vt({},ae),{className:void 0,theme:Qe}),Ae=0;Ae<me.length;Ae+=1){var Ye=gr(q=me[Ae])?q(re):q;for(var _e in Ye)re[_e]=_e==="className"?na(re[_e],Ye[_e]):_e==="style"?vt(vt({},re[_e]),Ye[_e]):Ye[_e]}return ae.className&&(re.className=na(re.className,ae.className)),re}(se,K,ee),A=de.as||xt,G={};for(var Z in de)de[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&de.theme===ee||(Z==="forwardedAs"?G.as=de.forwardedAs:I&&!I(Z,A)||(G[Z]=de[Z]));var Q=function(me,ae){var Qe=wh(),q=me.generateAndInjectStyles(ae,Qe.styleSheet,Qe.stylis);return q}(xe,de),ne=na(Be,jt);return Q&&(ne+=" "+Q),de.className&&(ne+=" "+de.className),G[Ef(A)&&!Zb.has(A)?"class":"className"]=ne,J&&(G.ref=J),S.createElement(A,G)}(D,X,P)}V.displayName=b;var D=tt.forwardRef(V);return D.attrs=z,D.componentStyle=C,D.displayName=b,D.shouldForwardProp=T,D.foldedComponentIds=s?na(l.foldedComponentIds,l.styledComponentId):"",D.styledComponentId=j,D.target=s?l.target:t,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(X){this._foldedDefaultProps=s?function(P){for(var F=[],K=1;K<arguments.length;K++)F[K-1]=arguments[K];for(var J=0,se=F;J<se.length;J++)xh(P,se[J],!0);return P}({},l.defaultProps,X):X}}),wm(D,function(){return".".concat(D.styledComponentId)}),u&&nw(D,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function cv(t,i){for(var r=[t[0]],s=0,l=i.length;s<l;s+=1)r.push(i[s],t[s+1]);return r}var uv=function(t){return Object.assign(t,{isCss:!0})};function Ci(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];if(gr(t)||Jo(t))return uv(Si(cv(Nc,dr([t],i,!0))));var s=t;return i.length===0&&s.length===1&&typeof s[0]=="string"?Si(s):uv(Si(cv(s,i)))}function jh(t,i,r){if(r===void 0&&(r=pr),!i)throw ss(1,i);var s=function(l){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return t(i,r,Ci.apply(void 0,dr([l],u,!1)))};return s.attrs=function(l){return jh(t,i,vt(vt({},r),{attrs:Array.prototype.concat(r.attrs,l).filter(Boolean)}))},s.withConfig=function(l){return jh(t,i,vt(vt({},r),l))},s}var uw=function(t){return jh(PA,t)},x=uw;Zb.forEach(function(t){x[t]=uw(t)});var UA=function(){function t(i,r){this.rules=i,this.componentId=r,this.isStatic=cw(i),wc.registerId(this.componentId+1)}return t.prototype.createStyles=function(i,r,s,l){var u=l(xc(Si(this.rules,r,s,l)),""),f=this.componentId+i;s.insertRules(f,f,u)},t.prototype.removeStyles=function(i,r){r.clearRules(this.componentId+i)},t.prototype.renderStyles=function(i,r,s,l){i>2&&wc.registerId(this.componentId+i),this.removeStyles(i,s),this.createStyles(i,r,s,l)},t}();function dw(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var s=Ci.apply(void 0,dr([t],i,!1)),l="sc-global-".concat(xm(JSON.stringify(s))),u=new UA(s,l),f=function(m){var p=wh(),y=tt.useContext(jm),b=tt.useRef(p.styleSheet.allocateGSInstance(l)).current;return p.styleSheet.server&&g(b,m,p.styleSheet,y,p.stylis),tt.useLayoutEffect(function(){if(!p.styleSheet.server)return g(b,m,p.styleSheet,y,p.stylis),function(){return u.removeStyles(b,p.styleSheet)}},[b,m,p.styleSheet,y,p.stylis]),null};function g(m,p,y,b,j){if(u.isStatic)u.renderStyles(m,lA,y,j);else{var z=vt(vt({},p),{theme:Kb(p,b,f.defaultProps)});u.renderStyles(m,z,y,j)}}return tt.memo(f)}function fw(t){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var s=xc(Ci.apply(void 0,dr([t],i,!1))),l=xm(s);return new ow(l,s)}const hw=t=>{const[i,r]=S.useState(!1);return S.useEffect(()=>{const s=window.matchMedia(t);r(s.matches);const l=u=>{r(u.matches)};return s.addEventListener("change",l),()=>{s.removeEventListener("change",l)}},[t]),i},mw=()=>hw("(max-width: 767px)"),HA=()=>hw("(prefers-reduced-motion: reduce)"),$A=(t=!0)=>{const i=t?"smooth":"auto",r=document.querySelector(".custom-scroll-container");r?(r.scrollTo({top:0,left:0,behavior:i}),requestAnimationFrame(()=>{r.scrollTop=0})):(window.scrollTo({top:0,left:0,behavior:i}),requestAnimationFrame(()=>{document.documentElement.scrollTop=0,document.body.scrollTop=0}))},YA=()=>{const[t,i]=S.useState(!1),r=HA(),s=mw(),l=r||s;S.useEffect(()=>{const f=()=>{const y=document.querySelector(".custom-scroll-container");let b=0;y?b=y.scrollTop:b=window.scrollY,b>300?i(!0):i(!1)},g=()=>{const y=document.querySelector(".custom-scroll-container");return y?(y.addEventListener("scroll",f),f(),()=>{y.removeEventListener("scroll",f)}):(window.addEventListener("scroll",f),f(),()=>{window.removeEventListener("scroll",f)})},m=setTimeout(g,100),p=g();return()=>{clearTimeout(m),p&&p()}},[]);const u=()=>{$A(!0)};return h.jsx(Ai,{children:t&&h.jsxs(GA,{initial:l?{opacity:0}:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:l?{opacity:0}:{opacity:0,scale:.5},whileHover:l?{}:{scale:1.1},whileTap:l?{}:{scale:.9},transition:{duration:l?.15:.2,type:l?"tween":"spring"},onClick:u,"aria-label":"Scroll to top",children:["          ",h.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M12 5L5 12M12 5L19 12M12 5V19",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})})]})})},GA=x(W.button)`
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
`,qA=()=>{const{hash:t}=cn();return S.useEffect(()=>{t&&setTimeout(()=>{const i=document.getElementById(t.substring(1));i&&i.scrollIntoView({behavior:"smooth"})},100)},[t]),null},Df=()=>{const{darkMode:t,toggleTheme:i}=C5();S.useEffect(()=>{if(!localStorage.getItem("flid-theme-toggled")){const f=setTimeout(()=>{s(!0),setTimeout(()=>{s(!1)},2e3)},3e3);return()=>clearTimeout(f)}},[]);const[r,s]=S.useState(!1),l=()=>{localStorage.setItem("flid-theme-toggled","true"),i()};return h.jsxs(XA,{onClick:l,"aria-label":`Switch to ${t?"light":"dark"} mode`,className:r?"pulse-attention":"",children:["      ",h.jsxs(FA,{className:"toggle-icon",initial:!1,animate:{rotate:t?180:0,scale:r?[1,1.1,1]:1},transition:{rotate:{duration:.8,ease:[.25,.1,.25,1]},scale:r?{repeat:2,duration:.8,ease:[.25,.1,.25,1]}:{}},children:["        ",t?h.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"sun-icon",children:[h.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"#FFD700",stroke:"#FFA500",strokeWidth:"1"}),h.jsxs("g",{stroke:"#FFD700",strokeWidth:"2",strokeLinecap:"round",children:[h.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"4"}),h.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"22"}),h.jsx("line",{x1:"22",y1:"12",x2:"20",y2:"12"}),h.jsx("line",{x1:"4",y1:"12",x2:"2",y2:"12"}),h.jsx("line",{x1:"19.07",y1:"4.93",x2:"17.66",y2:"6.34"}),h.jsx("line",{x1:"6.34",y1:"17.66",x2:"4.93",y2:"19.07"}),h.jsx("line",{x1:"19.07",y1:"19.07",x2:"17.66",y2:"17.66"}),h.jsx("line",{x1:"6.34",y1:"6.34",x2:"4.93",y2:"4.93"})]})]}):h.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"moon-icon",children:[h.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",fill:"var(--text)",stroke:"var(--text-secondary)",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("circle",{cx:"9",cy:"9",r:"1",fill:"var(--background)",opacity:"0.4"}),h.jsx("circle",{cx:"14",cy:"13",r:"0.5",fill:"var(--background)",opacity:"0.3"})]})]})]})},XA=x.button`
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
`,FA=x(W.div)`
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
`,IA=()=>{const[t,i]=S.useState(!1),r=cn(),s=r.pathname==="/";S.useEffect(()=>{i(!1)},[r]),S.useEffect(()=>{},[]),S.useEffect(()=>{const u=f=>{if(f.key==="Escape"&&t&&i(!1),f.altKey&&f.key==="m"&&i(g=>!g),f.altKey&&f.key==="h"&&(window.location.href="/"),f.altKey&&!isNaN(f.key)&&parseInt(f.key)>=1&&parseInt(f.key)<=5){const g=["/","/projects","/publications","/about","/contact"],m=parseInt(f.key)-1;g[m]&&(window.location.href=g[m])}};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[t]);const l=S.useCallback(()=>{i(u=>{const f=!u;return f?(document.body.style.overflow="hidden",document.body.classList.add("mobile-menu-open")):(document.body.style.overflow="unset",document.body.classList.remove("mobile-menu-open")),f})},[]);return S.useEffect(()=>{const u=f=>{f.key==="Escape"&&t&&(i(!1),document.body.style.overflow="unset",document.body.classList.remove("mobile-menu-open"))};return t&&document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[t]),S.useEffect(()=>()=>{document.body.style.overflow="unset",document.body.classList.remove("mobile-menu-open")},[]),h.jsxs(h.Fragment,{children:[h.jsx(KA,{$isHomePage:s,role:"navigation","aria-label":"Main Navigation",children:h.jsxs(ZA,{children:[h.jsx(QA,{children:h.jsx(WA,{to:"/","aria-label":"FLID Studio",children:h.jsx(dv,{children:"FLID"})})}),h.jsxs(JA,{children:["          ",h.jsxs(eE,{role:"menubar",children:[[{to:"/",label:"Strona główna",shortcut:"Alt+1",ariaShortcut:"Alt plus 1"},{to:"/projects",label:"Projekty",shortcut:"Alt+2",ariaShortcut:"Alt plus 2"},{to:"/publications",label:"Publikacje",shortcut:"Alt+3",ariaShortcut:"Alt plus 3"},{to:"/about",label:"O nas",shortcut:"Alt+4",ariaShortcut:"Alt plus 4"},{to:"/contact",label:"Kontakt",shortcut:"Alt+5",ariaShortcut:"Alt plus 5"}].map((u,f)=>h.jsx(tE,{role:"none",children:h.jsxs(pw,{to:u.to,$delay:f*.05,$isActive:u.to===r.pathname||u.to==="/"&&r.pathname==="/",title:`${u.label} (${u.shortcut})`,"aria-keyshortcuts":u.ariaShortcut,role:"menuitem",tabIndex:0,children:[u.label,h.jsx(iE,{children:u.shortcut}),h.jsx(nE,{className:"link-effect"})]})},u.to)),"          "]}),h.jsx(aE,{children:h.jsx(Df,{})})]}),h.jsxs(rE,{children:[h.jsx(fv,{children:h.jsx(Df,{})}),"          ",h.jsx(oE,{className:"menu-button",onClick:l,"aria-expanded":t,"aria-controls":"mobile-menu","aria-label":t?"Zamknij menu":"Otwórz menu","aria-haspopup":"true",children:h.jsxs(sE,{$isOpen:t,children:[h.jsx(lE,{$isOpen:t}),h.jsx(cE,{$isOpen:t}),h.jsx(uE,{$isOpen:t})]})}),"        "]})]})}),h.jsx(Ai,{mode:"wait",children:t&&h.jsxs(dE,{id:"mobile-menu",role:"dialog","aria-modal":"true","aria-label":"Menu nawigacyjne",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeInOut"},children:[h.jsx(fE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:l}),h.jsxs(hE,{className:"mobile-menu-content",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",duration:.3,ease:"easeInOut"},children:[h.jsxs(mE,{children:[h.jsx(EE,{to:"/",onClick:l,children:h.jsx(dv,{children:"FLID"})}),h.jsxs(pE,{children:[h.jsx(fv,{className:"mobile-theme-wrapper",children:h.jsx(Df,{})}),h.jsx(yE,{onClick:l,"aria-label":"Zamknij menu",title:"Zamknij menu",children:h.jsx(vE,{})})]})]}),h.jsx(gE,{children:h.jsx(xE,{initial:"closed",animate:"open",exit:"closed",role:"menu","aria-label":"Menu nawigacyjne mobilne",variants:{open:{transition:{staggerChildren:.07,delayChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},children:[{to:"/",label:"Strona główna",shortcut:"Alt+1",ariaShortcut:"Alt plus 1"},{to:"/projects",label:"Projekty",shortcut:"Alt+2",ariaShortcut:"Alt plus 2"},{to:"/publications",label:"Publikacje",shortcut:"Alt+3",ariaShortcut:"Alt plus 3"},{to:"/about",label:"O nas",shortcut:"Alt+4",ariaShortcut:"Alt plus 4"},{to:"/contact",label:"Kontakt",shortcut:"Alt+5",ariaShortcut:"Alt plus 5"}].map(u=>h.jsx(bE,{role:"none",variants:{open:{opacity:1,y:0,transition:{type:"spring",stiffness:350,damping:30}},closed:{opacity:0,y:20,transition:{type:"spring",stiffness:350,damping:30}}},children:h.jsx(wE,{to:u.to,onClick:l,$isActive:u.to===r.pathname||u.to==="/"&&r.pathname==="/",role:"menuitem",tabIndex:0,title:`${u.label} (${u.shortcut})`,"aria-keyshortcuts":u.ariaShortcut,children:u.label})},u.to))})}),h.jsxs(jE,{children:[h.jsxs(zE,{children:[h.jsx(Rf,{href:"https://facebook.com","aria-label":"Facebook",children:h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"})})}),h.jsx(Rf,{href:"https://instagram.com","aria-label":"Instagram",children:h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.666.642-1.272 1.153-1.772.5-.508 1.106-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.352-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"})})}),h.jsx(Rf,{href:"https://linkedin.com","aria-label":"LinkedIn",children:h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M19.996 2H4.004A2.004 2.004 0 002 4.004v15.992A2.004 2.004 0 004.004 22h15.992A2.004 2.004 0 0022 19.996V4.004A2.004 2.004 0 0019.996 2zM8.49 18.993H5.197V9.497H8.49v9.496zM6.843 8.146a1.91 1.91 0 11-.001-3.822 1.91 1.91 0 01.001 3.822zm12.15 10.847h-3.293v-5.148c0-1.23-.025-2.812-1.714-2.812-1.714 0-1.977 1.339-1.977 2.72v5.24H8.716V9.497h3.161v1.45h.045c.44-.836 1.515-1.714 3.118-1.714 3.334 0 3.953 2.193 3.953 5.048v4.712z"})})})]}),h.jsxs(SE,{children:[h.jsx(kE,{children:"© 2025 FLID Studio • Wszystkie prawa zastrzeżone"}),h.jsxs(TE,{children:[h.jsx(hv,{href:"/privacy",children:"Polityka Prywatności"}),h.jsx(AE,{children:"•"}),h.jsx(hv,{href:"/terms",children:"Warunki"})]})]})]})]})]})})]})},KA=x.nav.attrs({className:"creative-navbar"})`
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
`,ZA=x.div`
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
`,QA=x.div`
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
`,WA=x(je)`
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
`,dv=x.div`
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
`,JA=x.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,eE=x.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`,tE=x.li`
  position: relative;
`,nE=x.span`
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
`,pw=x(Mh)`
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
`,iE=x.span`
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
  
  ${pw}:hover & {
    opacity: 0.9;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,fv=x.div`
  display: flex;
  align-items: center;
`,aE=x.div`
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
`;const rE=x.div`
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
`,oE=x.button`
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
`,sE=x.div`
  position: relative;
  width: 24px;
  height: 18px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
`,zm=x.span`
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
`,lE=x(zm)`
  top: ${t=>t.$isOpen?"8px":"0"};
  transform: ${t=>t.$isOpen?"rotate(135deg)":"rotate(0)"};
`,cE=x(zm)`
  top: 8px;
  opacity: ${t=>t.$isOpen?0:1};
`,uE=x(zm)`
  top: ${t=>t.$isOpen?"8px":"16px"};
  transform: ${t=>t.$isOpen?"rotate(-135deg)":"rotate(0)"};
`;x(W.div).attrs({className:"mobile-menu-container"})`
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
`;const dE=x(W.div).attrs({className:"independent-mobile-menu"})`
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
`,fE=x(W.div).attrs({className:"mobile-menu-overlay"})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1000;
`,hE=x(W.div).attrs({className:"mobile-menu-content"})`
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
`,mE=x.div`
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
`,pE=x.div`
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
`,gE=x.div`
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
`,yE=x.button`
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
`,vE=x.span`
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
`,xE=x(W.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,bE=x(W.li)`
  position: relative;
`,wE=x(Mh)`
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
`,jE=x.div`
  margin-top: auto;
  padding: 1rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,zE=x.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,Rf=x.a`
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
`,SE=x.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,kE=x.p`
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  margin: 0;
  opacity: 0.8;
`,TE=x.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-xs);
`,hv=x.a`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`,AE=x.span`
  color: var(--text-secondary);
  opacity: 0.5;
  font-size: 0.5rem;
`,EE=x(je)`
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
`,CE=()=>{const t=cn(),i=Mz();S.useEffect(()=>{i==="PUSH"?(window.scrollTo({top:0,left:0,behavior:"auto"}),requestAnimationFrame(()=>{document.documentElement.scrollTop=0,document.body.scrollTop=0})):"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")},[t.pathname,i])},DE=()=>{const t=new Date().getFullYear();return h.jsx(RE,{children:h.jsxs(ME,{children:[h.jsxs(OE,{children:[h.jsxs(LE,{children:[h.jsxs(BE,{children:[h.jsx(_E,{as:je,to:"/",children:"FLID"}),h.jsx(NE,{children:"Design dla lepszej przyszłości"})]}),h.jsx(VE,{children:"Fundacja Ludzie-Innowacje-Design to organizacja zajmująca się projektowaniem pozytywnych zmian społecznych poprzez innowacyjne podejście do designu i zrównoważonego rozwoju."})]}),h.jsxs(PE,{children:[h.jsxs(Dl,{children:[h.jsx(Rl,{children:"Nawigacja"}),h.jsxs(mv,{children:[h.jsx(Pn,{as:je,to:"/",children:"Strona główna"}),h.jsx(Pn,{as:je,to:"/about",children:"O nas"}),h.jsx(Pn,{as:je,to:"/projects",children:"Projekty"}),h.jsx(Pn,{as:je,to:"/publications",children:"Publikacje"}),h.jsx(Pn,{as:je,to:"/contact",children:"Kontakt"})]})]}),h.jsxs(Dl,{children:[h.jsx(Rl,{children:"Projekty"}),h.jsxs(mv,{children:[h.jsx(Pn,{as:je,to:"/projects?category=design",children:"Design thinking"}),h.jsx(Pn,{as:je,to:"/projects?category=education",children:"Edukacja"}),h.jsx(Pn,{as:je,to:"/projects?category=innovation",children:"Innowacje"}),h.jsx(Pn,{as:je,to:"/projects?category=sustainability",children:"Zrównoważony rozwój"})]})]}),h.jsxs(Dl,{children:[h.jsx(Rl,{children:"Kontakt"}),h.jsxs(UE,{children:[h.jsxs(Mf,{children:[h.jsx(Of,{children:h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("circle",{cx:"12",cy:"10",r:"3",stroke:"currentColor",strokeWidth:"2"})]})}),h.jsxs(Lf,{children:["ul. Gazownicza 9",h.jsx("br",{}),"43-300 Bielsko-Biała"]})]}),h.jsxs(Mf,{children:[h.jsx(Of,{children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),h.jsx(Lf,{children:"(33) 812 43 86"})]}),h.jsxs(Mf,{children:[h.jsx(Of,{children:h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("polyline",{points:"22,6 12,13 2,6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),h.jsx(Lf,{children:"biuro@flid.pl"})]})]})]}),h.jsxs(Dl,{children:[h.jsx(Rl,{children:"Śledź nas"}),h.jsxs(HE,{children:[h.jsxs($E,{children:[h.jsx(Bf,{href:"https://www.facebook.com/fundacja.ludzie.innowacje.design",target:"_blank",rel:"noopener noreferrer","aria-label":"FLID na Facebooku",children:h.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),h.jsx(Bf,{href:"https://linkedin.com/company/flid-foundation",target:"_blank",rel:"noopener noreferrer","aria-label":"FLID na LinkedIn",children:h.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),h.jsx(Bf,{href:"https://instagram.com/flid_foundation",target:"_blank",rel:"noopener noreferrer","aria-label":"FLID na Instagramie",children:h.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:h.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})})]}),h.jsxs(YE,{children:[h.jsx(GE,{children:"Newsletter"}),h.jsxs(qE,{children:[h.jsx(XE,{type:"email",placeholder:"Twój email","aria-label":"Adres email do newslettera"}),h.jsx(FE,{type:"submit",children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M5 12h14M12 5l7 7-7 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})]})]})]}),h.jsx(IE,{}),h.jsxs(KE,{children:[h.jsxs(ZE,{children:["© ",t," FLID - Fundacja Ludzie-Innowacje-Design. Wszystkie prawa zastrzeżone."]}),h.jsxs(QE,{children:[h.jsx(_f,{href:"/privacy",children:"Polityka prywatności"}),h.jsx(pv,{children:"•"}),h.jsx(_f,{href:"/terms",children:"Regulamin"}),h.jsx(pv,{children:"•"}),h.jsx(_f,{href:"/cookies",children:"Polityka cookies"})]})]})]})})},RE=x.footer`
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
`,ME=x.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
`,OE=x.div`
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
`,LE=x.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,BE=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,_E=x.div`
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
`,NE=x.p`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  font-style: italic;
  font-weight: 400;
`,VE=x.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
  max-width: 450px;
`,PE=x.div`
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
`,Dl=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Rl=x.h3`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent);
  display: inline-block;
  width: fit-content;
`,mv=x.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Pn=x.a`
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
`,UE=x.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Mf=x.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
  }
`,Of=x.div`
  color: var(--primary);
  margin-top: 0.2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`,Lf=x.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`,HE=x.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,$E=x.div`
  display: flex;
  gap: 1rem;
`,Bf=x.a`
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
`,YE=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,GE=x.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
`,qE=x.form`
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
`,XE=x.input`
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
`,FE=x.button`
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
`,IE=x.div`
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
`,KE=x.div`
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
`,ZE=x.p`
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
`,QE=x.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,_f=x.a`
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
`,pv=x.span`
  color: var(--text-light);
  font-size: 0.9rem;
  opacity: 0.6;
`,WE=({children:t})=>(qA(),CE(),h.jsxs(JE,{children:[h.jsx(IA,{}),h.jsx(e6,{className:"page-transition-container",children:t}),h.jsx(DE,{}),h.jsx(YA,{})]})),JE=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`,e6=x.main`
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
`;const t6=({isTransitioning:t})=>{const i={hidden:{opacity:0,visibility:"hidden"},visible:{opacity:.03,visibility:"visible",transition:{duration:.2,ease:[.25,.1,.25,1]}},exit:{opacity:0,visibility:"hidden",transition:{duration:.3,ease:[.7,0,.84,0]}}};return t?h.jsx(W.div,{initial:"hidden",animate:"visible",exit:"exit",variants:i,style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, var(--background-alt) 0%, var(--background) 100%)",zIndex:9998,pointerEvents:"none",willChange:"opacity"}}):null};var zh=new Map,Ml=new WeakMap,gv=0,n6=void 0;function i6(t){return t?(Ml.has(t)||(gv+=1,Ml.set(t,gv.toString())),Ml.get(t)):"0"}function a6(t){return Object.keys(t).sort().filter(i=>t[i]!==void 0).map(i=>`${i}_${i==="root"?i6(t.root):t[i]}`).toString()}function r6(t){const i=a6(t);let r=zh.get(i);if(!r){const s=new Map;let l;const u=new IntersectionObserver(f=>{f.forEach(g=>{var m;const p=g.isIntersecting&&l.some(y=>g.intersectionRatio>=y);t.trackVisibility&&typeof g.isVisible>"u"&&(g.isVisible=p),(m=s.get(g.target))==null||m.forEach(y=>{y(p,g)})})},t);l=u.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:i,observer:u,elements:s},zh.set(i,r)}return r}function o6(t,i,r={},s=n6){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const m=t.getBoundingClientRect();return i(s,{isIntersecting:s,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:m,intersectionRect:m,rootBounds:m}),()=>{}}const{id:l,observer:u,elements:f}=r6(r),g=f.get(t)||[];return f.has(t)||f.set(t,g),g.push(i),u.observe(t),function(){g.splice(g.indexOf(i),1),g.length===0&&(f.delete(t),u.unobserve(t)),f.size===0&&(u.disconnect(),zh.delete(l))}}function Hn({threshold:t,delay:i,trackVisibility:r,rootMargin:s,root:l,triggerOnce:u,skip:f,initialInView:g,fallbackInView:m,onChange:p}={}){var y;const[b,j]=S.useState(null),z=S.useRef(p),[T,O]=S.useState({inView:!!g,entry:void 0});z.current=p,S.useEffect(()=>{if(f||!b)return;let D;return D=o6(b,(X,P)=>{O({inView:X,entry:P}),z.current&&z.current(X,P),P.isIntersecting&&u&&D&&(D(),D=void 0)},{root:l,rootMargin:s,threshold:t,trackVisibility:r,delay:i},m),()=>{D&&D()}},[Array.isArray(t)?t.toString():t,b,l,s,u,f,r,m,i]);const L=(y=T.entry)==null?void 0:y.target,C=S.useRef(void 0);!b&&L&&!u&&!f&&C.current!==L&&(C.current=L,O({inView:!!g,entry:void 0}));const V=[j,T.inView,T.entry];return V.ref=V[0],V.inView=V[1],V.entry=V[2],V}const la=({title:t="FLID - Fundacja Ludzie-Innowacje-Design",description:i="FLID to fundacja zajmująca się innowacyjnymi projektami z zakresu designu, technologii i usług dla społeczeństwa.",keywords:r="design thinking, innowacje, projektowanie usług, bielsko-biała, design",ogImage:s="/images/flid-social-share.svg",canonical:l=""})=>{const u="https://flid.pl",f=l?`${u}${l}`:u,g=t!=="FLID - Fundacja Ludzie-Innowacje-Design"?`${t} | FLID`:t;return h.jsxs(nS,{children:[h.jsx("title",{children:g}),h.jsx("meta",{name:"description",content:i}),h.jsx("meta",{name:"keywords",content:r}),h.jsx("link",{rel:"canonical",href:f}),h.jsx("meta",{property:"og:type",content:"website"}),h.jsx("meta",{property:"og:url",content:f}),h.jsx("meta",{property:"og:title",content:g}),h.jsx("meta",{property:"og:description",content:i}),h.jsx("meta",{property:"og:image",content:`${u}${s}`}),h.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),h.jsx("meta",{name:"twitter:url",content:f}),h.jsx("meta",{name:"twitter:title",content:g}),h.jsx("meta",{name:"twitter:description",content:i}),h.jsx("meta",{name:"twitter:image",content:`${u}${s}`})]})},ia=[{id:12,title:"LotniskoWiec Artystyczno-Naukowy",slug:"lotniskowiec",shortDesc:"Wydarzenie łączące fascynujący świat lotnictwa, techniki i sztuki w drewnianym hangarze Aeroklubu Bielsko-Bialskiego",category:"Wydarzenie Edukacyjno-Artystyczne",year:2025,coverImage:"/projects/lotniskowiec/cover.jpg",fullDesc:`LotniskoWiec Artystyczno-Naukowy to wyjątkowe wydarzenie, które ma na celu połączenie fascynującego świata lotnictwa, techniki i sztuki. Zapraszamy do wspólnego odkrywania nauki i kreatywności!

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

LotniskoWiec to część projektu arting – inicjatywy łączącej sztukę i inne dziedziny, co widać także w zastosowanej komunikacji wizualnej i planowanym obiekcie przestrzennym.`,images:["/projects/lotniskowiec/cover.jpg","/projects/lotniskowiec/lotniskowiec_1.png","/projects/lotniskowiec/lotniskowiec_2.png","/projects/lotniskowiec/lotniskowiec_3.png","/projects/lotniskowiec/lotniskowiec_4.png","/projects/lotniskowiec/lotniskowiec_5.png","/projects/lotniskowiec/lotniskowiec_6.png","/projects/lotniskowiec/lotniskowiec_7.png","/projects/lotniskowiec/lotniskowiec_8.png","/projects/lotniskowiec/lotniskowiec_9.png","/projects/lotniskowiec/lotniskowiec_10.png","/projects/lotniskowiec/lotniskowiec_11.png","/projects/lotniskowiec/lotniskowiec_12.png"],partners:["Aeroklub Bielsko-Bialski","ZSTiH","Liceum Plastyczne","Szkoła Muzyczna"],technologies:["Edukacja STEAM","Sztuka i Technika","Przestrzeń Wystawiennicza","Komunikacja Wizualna"]},{id:1,title:"BB__Design Lab",slug:"bb-design-lab",shortDesc:"Laboratorium projektowe w Bielsku-Białej",category:"Laboratorium",year:2023,coverImage:"/projects/bb-design-lab/cover.jpg",fullDesc:`BB__Design Lab to przestrzeń kreatywna stworzona w celu promowania designu
    i innowacyjnych rozwiązań projektowych w Bielsku-Białej. Laboratorium 
    łączy lokalnych projektantów, studentów, i przedsiębiorców, tworząc
    ekosystem wspierający rozwój projektów opartych o zasady zrównoważonego
    rozwoju i odpowiedzialnego designu.`,images:["/projects/bb-design-lab/image1.jpg","/projects/bb-design-lab/image2.jpg","/projects/bb-design-lab/image3.jpg"],partners:["ASP Kraków","Miasto Bielsko-Biała"],technologies:["Design Thinking","UX/UI","Projektowanie Usług"]},{id:2,title:"Projekt Arting",slug:"projekt-arting",shortDesc:"Integracja sztuki i technologii w przestrzeni miejskiej",category:"Projekt Miejski",year:2022,coverImage:"/projects/projekt-arting/cover.jpg",fullDesc:`Projekt Arting to inicjatywa łącząca sztukę z nowymi technologiami
    w przestrzeni miejskiej. Celem projektu jest ożywienie przestrzeni
    publicznej poprzez interaktywne instalacje artystyczne, które angażują
    mieszkańców i turystów, jednocześnie promując świadomość ekologiczną
    i społeczną.`,images:["/projects/projekt-arting/image1.jpg","/projects/projekt-arting/image2.jpg"],partners:["Galeria Bielska BWA","Fundacja Sztuki Nowoczesnej"],technologies:["Sztuka Cyfrowa","IoT","Augmented Reality"]},{id:3,title:"Pszczela Hala",slug:"pszczela-hala",shortDesc:"Edukacyjny projekt promujący pszczelnictwo miejskie",category:"Edukacja Ekologiczna",year:2021,coverImage:"/projects/pszczela-hala/cover.jpg",fullDesc:`Pszczela Hala to innowacyjny projekt edukacyjny mający na celu
    promocję miejskiego pszczelnictwa oraz zwiększenie świadomości
    ekologicznej mieszkańców. W ramach projektu stworzono przestrzeń
    edukacyjną z ulami miejskimi, gdzie odbywają się warsztaty i szkolenia
    z zakresu pszczelarstwa i ekologii.`,images:["/projects/pszczela-hala/image1.jpg","/projects/pszczela-hala/image2.jpg","/projects/pszczela-hala/image3.jpg"],partners:["Koło Pszczelarzy w Bielsku-Białej","Szkoły podstawowe w regionie"],technologies:["Edukacja Ekologiczna","Projektowanie Zrównoważone","Urban Farming"]},{id:4,title:"Międzynarodowe warsztaty dla dzieci Energia Jutra",slug:"energia-jutra",shortDesc:"Warsztaty dla dzieci o odnawialnych źródłach energii",category:"Edukacja",year:2022,coverImage:"/projects/energia-jutra/cover.jpg",fullDesc:`Energia Jutra to międzynarodowy projekt warsztatowy skierowany do dzieci
    i młodzieży, mający na celu edukację w zakresie odnawialnych źródeł energii
    i zrównoważonego rozwoju. Warsztaty łączą naukę z zabawą, angażując uczestników
    w praktyczne eksperymenty i projekty związane z energią słoneczną, wiatrową
    i wodną.`,images:["/projects/energia-jutra/image1.jpg","/projects/energia-jutra/image2.jpg"],partners:["Szkoły podstawowe z Polski, Czech i Słowacji","Europejskie Centrum Energii Odnawialnej"],technologies:["Edukacja STEM","Design Thinking dla dzieci"]},{id:5,title:"Portal Słoneczny",slug:"portal-sloneczny",shortDesc:"Instalacja artystyczna wykorzystująca energię słoneczną",category:"Sztuka i Ekologia",year:2020,coverImage:"/projects/portal-sloneczny/cover.jpg",fullDesc:`Portal Słoneczny to interaktywna instalacja artystyczna zasilana energią
    słoneczną, która zmienia swoją formę i oświetlenie w zależności od intensywności
    promieni słonecznych. Projekt ma na celu zwrócenie uwagi na potencjał energii
    odnawialnej oraz estetyczne aspekty zrównoważonego designu.`,images:["/projects/portal-sloneczny/image1.jpg","/projects/portal-sloneczny/image2.jpg","/projects/portal-sloneczny/image3.jpg"],partners:["Miasto Bielsko-Biała","Fundacja Energia dla Sztuki"],technologies:["Energia Słoneczna","Interaktywna Sztuka","Projektowanie Oświetlenia"]},{id:6,title:"D-spot.pl Design Portal",slug:"d-spot-design-portal",shortDesc:"Portal internetowy o designie i zrównoważonym rozwoju",category:"Media Cyfrowe",year:2021,coverImage:"/projects/d-spot/cover.jpg",fullDesc:`D-spot.pl to portal internetowy poświęcony designowi, architekturze
    i zrównoważonemu rozwojowi. Platforma służy jako przestrzeń wymiany myśli
    i inspiracji dla projektantów, architektów i entuzjastów designu, promując
    jednocześnie ideę odpowiedzialnego projektowania i świadomej konsumpcji.`,images:["/projects/d-spot/image1.jpg","/projects/d-spot/image2.jpg"],partners:["Stowarzyszenie Projektantów Form Przemysłowych","Wydawnictwo Design"],technologies:["UX/UI","Content Management","Digital Publishing"]},{id:7,title:"Ławeczka Beskidzka",slug:"laweczka-beskidzka",shortDesc:"Projekt mebla miejskiego inspirowany lokalnym dziedzictwem",category:"Wzornictwo",year:2019,coverImage:"/projects/laweczka-beskidzka/cover.jpg",fullDesc:`Ławeczka Beskidzka to projekt mebla miejskiego inspirowany lokalnym
    dziedzictwem kulturowym i przyrodniczym Beskidów. Ławeczka łączy tradycyjne
    motywy regionalne z nowoczesnym, funkcjonalnym designem, tworząc charakterystyczny
    element małej architektury miejskiej, który podkreśla tożsamość regionu.`,images:["/projects/laweczka-beskidzka/image1.jpg","/projects/laweczka-beskidzka/image2.jpg","/projects/laweczka-beskidzka/image3.jpg"],partners:["Miasto Bielsko-Biała","Lokalni rzemieślnicy"],technologies:["Wzornictwo Przemysłowe","Rzemiosło","Projektowanie Mebli"]},{id:8,title:"Design Thinking dla dzieci - gra edukacyjna",slug:"design-thinking-dla-dzieci",shortDesc:"Gra edukacyjna ucząca dzieci metodologii Design Thinking",category:"Edukacja",year:2022,coverImage:"/projects/design-thinking-dla-dzieci/cover.jpg",fullDesc:`Design Thinking dla dzieci to innowacyjna gra edukacyjna wprowadzająca
    najmłodszych w świat projektowania i twórczego rozwiązywania problemów.
    Gra w przystępny i interaktywny sposób uczy podstaw metodologii Design Thinking,
    rozwijając umiejętności kreatywnego myślenia, empatii oraz współpracy.`,images:["/projects/design-thinking-dla-dzieci/image1.jpg","/projects/design-thinking-dla-dzieci/image2.jpg"],partners:["Szkoły podstawowe w regionie","Wydawnictwo Gier Edukacyjnych"],technologies:["Design Thinking","Game Design","Edukacja Kreatywna"]},{id:9,title:"Design Bank - miejsce projektowania, miejsce spotkań",slug:"design-bank",shortDesc:"Przestrzeń coworkingowa i wystawowa dla projektantów i przedsiębiorców",category:"Przestrzeń Kreatywna",year:2023,coverImage:"/projects/design-bank/cover.jpg",fullDesc:`Design Bank to projekt, polegający na stworzeniu miejsca dla działań związanych z wzornictwem: wystaw, ekspozycji, szkoleń, warsztatów, doradztwa. Miejsca projektowania i gromadzenia informacji o projektowaniu, miejsce dla kształcenia i rozwoju

Doradztwo i szkolenia. Programy seminaryjne dla przedsiębiorców i designerów z zakresu wzornictwa, marketingu i reklamy, zarządzania designem, nowych technologii. Współpracujemy z takimi instytucjami jak: Stowarzyszenie Projektantów Wzornictwa, Małopolska Strefa Design, Instytut Wzornictwa w Warszawie, Zamek Przedsiębiorczości i Sztuki w Cieszynie, Związek Polskich Artystów Plastyków, Fundacja Ludzie-Innowacje Design, Akademia Sztuk Pięknych w Krakowie i Katowicach.
Wystawy i ekspozycje związane z programem seminariów oraz wystawy indywidualne projektantów, firm związanych z designem, artystów. Celem wystaw jest informowanie społeczeństwa o ważnych problemach, nowych rozwiązaniach wzornictwa oraz nawiązywaniu kontaktów pomiędzy przedsiębiorcami i projektantami.
Pośrednictwo i zarządzanie projektami. Usługa polega na kojarzeniu potencjału projektantów z potrzebami projektowymi przedsiębiorstw i instytucji.
Zapraszamy do współpracy wszystkich uznających potrzebę kreatywnego myślenia.`,images:["/projects/design-bank/image1.jpg","/projects/design-bank/image2.jpg","/projects/design-bank/image3.jpg"],partners:["Lokalny Fundusz Biznesowy","Stowarzyszenie Architektów"],technologies:["Adaptive Reuse","Interior Design","Collaborative Spaces"]},{id:10,title:"Artystyczna Chata na Trzonce - miejsce plenerów, miejsce spotkań",slug:"artystyczna-chata-na-trzonce",shortDesc:"Przestrzeń twórcza w tradycyjnej chacie beskidzkiej",category:"Sztuka i Tradycja",year:2020,coverImage:"/projects/artystyczna-chata/cover.jpg",fullDesc:`Artystyczna Chata na Trzonce to unikalne miejsce łączące tradycję
    z nowoczesnością, zlokalizowane w zabytkowej chacie beskidzkiej na wzgórzu
    Trzconka. Miejsce służy jako przestrzeń do organizacji plenerów malarskich,
    warsztatów artystycznych oraz spotkań twórczych, promując jednocześnie
    lokalną kulturę i rzemiosło.`,images:["/projects/artystyczna-chata/image1.jpg","/projects/artystyczna-chata/image2.jpg"],partners:["ASP Katowice","Lokalni artyści i rzemieślnicy"],technologies:["Renowacja Zabytkowych Obiektów","Przestrzeń Wystawiennicza","Edukacja Artystyczna"]},{id:11,title:"Dom pracy twórczej majątek",slug:"dom-pracy-tworczej-majatek",shortDesc:"Przestrzeń twórcza w historycznym majątku ziemskim",category:"Sztuka i Dziedzictwo",year:2021,coverImage:"/projects/dom-pracy-tworczej/cover.jpg",fullDesc:`Dom pracy twórczej majątek to projekt adaptacji historycznego
    majątku ziemskiego na przestrzeń twórczą i rezydencyjną dla artystów,
    projektantów i badaczy. Miejsce oferuje warunki do spokojnej pracy
    i kontemplacji, jednocześnie promując dialog międzypokoleniowy
    i międzydyscyplinarną współpracę twórczą.`,images:["/projects/dom-pracy-tworczej/image1.jpg","/projects/dom-pracy-tworczej/image2.jpg","/projects/dom-pracy-tworczej/image3.jpg"],partners:["Ministerstwo Kultury i Dziedzictwa Narodowego","Fundacja Ochrony Zabytków"],technologies:["Renowacja i Adaptacja","Zrównoważona Architektura","Przestrzeń Artystyczna"]}],s6=[{id:1,name:"Wydział Form Przemysłowych Akademia Sztuk Pięknych w Krakowie",logo:"/partners/asp-krakow-logo.png",website:"https://wfp.asp.krakow.pl/",address:"ul. Smoleńsk 9, 31-108 Kraków"},{id:2,name:"Wydział Projektowy Akademia Sztuk Pięknych w Katowicach",logo:"/partners/asp-katowice-logo.png",website:"https://www.asp.katowice.pl/",address:"ul.Raciborska 37, 40-074 Katowice"},{id:3,name:"Wyższa Szkoła Górnicza w Ostravie / Vysoká škola báňská – Technická univerzita Ostrava",logo:"/partners/vsb-ostrava-logo.png",website:"https://www.vsb.cz/",address:"17. listopadu 15/2172, 708 33 Ostrava – Poruba, Czech Republic"},{id:4,name:"Akademia Techniczno-Humanistyczna w Bielsku-Białej",logo:"/partners/ath-logo.png",website:"https://www.ath.bielsko.pl/",address:"ul. Willowa 2, 43-309 Bielsko-Biała"}],yv=({width:t="100%",height:i="300px",text:r="Placeholder",bgColor:s="var(--primary)",textColor:l="white"})=>h.jsx(u6,{$width:t,$height:i,$bgColor:s,$textColor:l,children:r}),jc=({title:t="Project Title",animate:i=!0})=>h.jsxs(d6,{whileHover:i?{scale:1.03}:{},transition:{duration:.3},children:[h.jsx(Vc,{children:"🏗️"}),h.jsx(Pc,{children:t})]}),l6=({title:t="Publication"})=>h.jsxs(f6,{children:[h.jsx(Vc,{children:"📄"}),h.jsx(Pc,{children:t})]}),c6=({name:t="Partner"})=>h.jsxs(h6,{children:[h.jsx(Vc,{children:"🤝"}),h.jsx(Pc,{children:t})]}),Ol=({name:t="Team Member"})=>h.jsxs(m6,{children:[h.jsx(Vc,{children:"👤"}),h.jsx(Pc,{children:t})]}),u6=x.div`
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
`,d6=x(W.div)`
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
`,f6=x.div`
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
`,h6=x.div`
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
`,m6=x.div`
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
`,Vc=x.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,Pc=x.span`
  font-weight: 600;
  text-align: center;
  font-size: 0.9rem;
`,sn=({src:t,alt:i,placeholderSrc:r="/images/placeholder.svg",aspectRatio:s="auto",imgStyles:l={},priority:u=!1,className:f="",...g})=>{console.log("OptimizedImage rendering:",{src:t,alt:i,priority:u});const[m,p]=S.useState(!1),[y,b]=S.useState(!1),j=mw(),z=s.split(":"),T=s!=="auto"&&z.length===2?parseInt(z[1])/parseInt(z[0])*100:null,O=()=>{console.log("Image loaded successfully:",t),p(!0)},L=()=>{console.error(`Failed to load image: ${t}`),b(!0)};return h.jsxs(p6,{className:`optimized-image ${f}`,$aspectRatio:T,$hasImage:m&&!y,...g,children:[console.log("Rendering OptimizedImage:",{src:t,loaded:m,error:y,aspectRatioValue:T}),h.jsx(g6,{src:y?r:t,alt:i,loading:u?"eager":"lazy",onLoad:O,onError:L,style:{...l,opacity:m||y?1:0,transition:"opacity 0.3s ease",...j&&{}},$aspectRatio:T})]})},p6=x.div`
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
`,g6=x.img`
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
`;const gw=x.h2`
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
`,yw=x.p`
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
`;const vv=({title:t,subtitle:i,centered:r=!1})=>h.jsxs(y6,{$centered:r,children:[h.jsx(gw,{$withLine:!r,children:t}),i&&h.jsx(yw,{children:i})]}),y6=x.div`
  margin-bottom: 3rem;
  text-align: ${t=>t.$centered?"center":"left"};
  
  ${t=>t.$centered&&`
    ${gw} {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    ${yw} {
      margin-left: auto;
      margin-right: auto;
    }
  `}
`,Sh=x(je)`
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
`,v6=x(je)`
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
`,x6=x(je)`
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
`,b6=()=>h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),w6=({to:t,children:i,variant:r="primary",onClick:s,withArrow:l=!1,...u})=>{const f={primary:Sh,secondary:v6,text:x6}[r]||Sh,g=h.jsxs(h.Fragment,{children:[i,l&&h.jsx(b6,{})]});return t?h.jsx(f,{to:t,...u,children:g}):h.jsx(f,{as:"button",onClick:s,...u,children:g})},vw=x(W.div)`
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
`,j6=x.div`
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
  
  ${vw}:hover & img {
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
`;const z6=x.div`
  padding: 1.5rem 2rem 2rem;
`,S6=x.h3`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text);
  transition: color 0.3s ease;
  
  ${vw}:hover & {
    color: var(--accent);
  }
`,k6=x.p`
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
`;const Sm=x.section`
  padding: ${t=>t.$small?"4rem 0":"6rem 0"};
  background-color: ${t=>t.$light?"var(--neutral-200)":"var(--background)"};
  
  @media (max-width: 768px) {
    padding: ${t=>t.$small?"3rem 0":"4rem 0"};
  }
`,kh=x.div`
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
`;const T6=x.div`
  text-align: left;
  max-width: ${t=>t.$narrow?"800px":"1200px"};
  margin-left: auto;
  margin-right: auto;
`,yr={s2:{title:"Empatia",subtitle:"I. Odczuj",description:"Pierwsza faza procesu projektowego, w której zespół zdobywa głębokie zrozumienie problemu poprzez empatyczne spojrzenie na potrzeby użytkowników.",keyPoints:["Obserwacja i rozmowy z użytkownikami","Identyfikacja prawdziwych potrzeb","Definiowanie głównego problemu","Tworzenie map empatii"],quote:"Projektowanie bez empatii jest jedynie estetycznym ćwiczeniem."},s3:{title:"Rozumowanie",subtitle:"II. Wymyśl",description:"Faza, w której zespół generuje kreatywne pomysły i rozwiązania, przekształcając je w namacalne prototypy do testowania.",keyPoints:["Burza mózgów i ideacja","Szybkie prototypowanie","Testowanie z użytkownikami","Iteracyjne udoskonalanie"],quote:"Prototypowanie to konwersacja z twoimi pomysłami."},s1:{title:"Materializacja",subtitle:"III. Zrób",description:"Ostatni etap procesu projektowego, w którym zespół integruje feedback, analizuje wyniki testów i podejmuje decyzje implementacyjne.",keyPoints:["Analiza danych z testów","Optymalizacja rozwiązań","Implementacja finalnego produktu","Ewaluacja i dalszy rozwój"],quote:"Dobry projekt to rezultat tysiąca małych decyzji podjętych z rozwagą."}},A6=({activePhase:t})=>{const i=yr[t]||yr.s2,r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},s={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return h.jsx(W.div,{variants:r,initial:"hidden",animate:"visible",className:"w-full",children:h.jsxs("div",{children:[h.jsx(W.div,{variants:s,className:"mb-2",children:h.jsx("h3",{className:"text-xs uppercase tracking-wider text-gray-500 font-medium letter-spacing-2",children:i.subtitle})}),h.jsx(W.h2,{variants:s,className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight leading-tight",children:i.title}),h.jsx(W.p,{variants:s,className:"text-base md:text-lg text-gray-700 mb-8 leading-relaxed",children:i.description}),h.jsxs(W.div,{variants:s,className:"mb-8",children:[h.jsx("h4",{className:"text-sm font-semibold mb-4 text-gray-800 uppercase tracking-wide",children:"Kluczowe elementy"}),h.jsx("ul",{className:"space-y-3",children:i.keyPoints.map((l,u)=>h.jsxs(W.li,{variants:s,className:"flex items-start",children:[h.jsx("span",{className:"text-indigo-500 mr-2 mt-0.5 text-lg",children:"•"}),h.jsx("span",{className:"text-sm md:text-base text-gray-700",children:l})]},u))})]}),h.jsxs(W.blockquote,{variants:s,className:"border-l-2 border-indigo-400 pl-4 py-1 italic text-sm md:text-base text-gray-600",children:['"',i.quote,'"']})]})},t)},km=S.createContext({currentPhase:"s3",setCurrentPhase:()=>{},phaseData:null}),E6=({children:t})=>{const[i,r]=S.useState("s3"),[s,l]=S.useState(yr.s3);return S.useEffect(()=>{l(yr[i])},[i]),h.jsx(km.Provider,{value:{currentPhase:i,setCurrentPhase:r,phaseData:s},children:t})},Ja=(t,i,r)=>{const s=(r-90)*Math.PI/180;return{x:t+i*Math.cos(s),y:t+i*Math.sin(s)}},Ke={dynamicEntry:{name:"Dynamiczne Wejście",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{duration:.8*i,ease:"easeInOut",delay:(.1+t*.1)*i}}),generic:(t,i=1)=>({opacity:1,scale:1,transition:{duration:.4*i,ease:[.6,-.05,.01,.99],delay:(.4+t*.08)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.5*i,ease:"easeOut",delay:(.9+t*.1)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.7*t,ease:"easeInOut",delay:.5*t},opacity:{duration:.01*t,delay:.5*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.5*i,ease:"easeInOut",delay:(.8+t*.2)*i},opacity:{duration:.01*i,delay:(.8+t*.2)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,rotateY:0,transition:{duration:.5*t,ease:"easeOut",delay:.3*t}})},loop:{}},springPop:{name:"Sprężyste Pojawienie",intro:{path:(t,i=1)=>({scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:20,delay:(.1+t*.05)*i}}),generic:(t,i=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:200,damping:15,delay:(.3+t*.07)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{type:"spring",stiffness:150,damping:10,delay:(.6+t*.05)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:200,damping:15,duration:.6*t,delay:.4*t},opacity:{duration:.01*t,delay:.4*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:150,damping:10,duration:.4*i,delay:(.7+t*.15)*i},opacity:{duration:.01*i,delay:(.7+t*.15)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:200,damping:15,delay:.2*t}})},loop:{}},smoothUnfold:{name:"Płynne Odsłanianie",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{duration:1.2*i,ease:"circOut",delay:(.2+t*.15)*i}}),generic:(t,i=1)=>({opacity:1,filter:"blur(0px)",y:0,transition:{duration:.8*i,ease:"easeOut",delay:(.5+t*.1)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.7*i,ease:"easeOut",delay:(1.1+t*.1)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:1*t,ease:"circOut",delay:.6*t},opacity:{duration:.01*t,delay:.6*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.7*i,ease:"circOut",delay:(1.1+t*.2)*i},opacity:{duration:.01*i,delay:(1.1+t*.2)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,filter:"blur(0px)",transition:{duration:1*t,ease:"circOut",delay:.4*t}})},loop:{}},blueprintReveal:{name:"Odsłanianie Rysunku Tech.",intro:{path:(t,i=1)=>({pathLength:1,opacity:[.5,1],transition:{duration:.7*i,ease:"circIn",delay:(.1+t*.2)*i}}),markerGroup:(t,i=1)=>({opacity:1,scaleY:1,transition:{duration:.5*i,ease:"easeOut",delay:(.6+t*.1)*i}}),dot:(t,i=1)=>({opacity:1,scale:1,transition:{duration:.4*i,ease:"backOut",delay:(.5+t*.1)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.6*i,ease:"easeOut",delay:(1+t*.08)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.8*t,ease:"easeInOut",delay:.7*t},opacity:{duration:.01*t,delay:.7*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.6*i,ease:"easeInOut",delay:(1.2+t*.2)*i},opacity:{duration:.01*i,delay:(1.2+t*.2)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,transition:{duration:.8*t,ease:"easeInOut",delay:.5*t}})},loop:{}},circuitTrace:{name:"Śledzenie Obwodu",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{duration:.3*i,ease:"linear",delay:(.1+t*.05)*i}}),markerGroup:(t,i=1)=>({opacity:1,scaleX:1,transition:{duration:.3*i,ease:"linear",delay:(.4+t*.05)*i}}),dot:(t,i=1)=>({opacity:[0,1,.7,1],scale:[.5,1.2,1],transition:{duration:.4*i,times:[0,.2,.6,1],delay:(.3+t*.05)*i}}),text:(t,i=1)=>({opacity:1,transition:{duration:.2*i,ease:"linear",delay:(.7+t*.03)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.4*t,ease:"linear",delay:.5*t},opacity:{duration:.01*t,delay:.5*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.3*i,ease:"linear",delay:(.7+t*.1)*i},opacity:{duration:.01*i,delay:(.7+t*.1)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,transition:{duration:.4*t,ease:"easeOut",delay:.3*t}})},loop:{}},cinematicBuildUp:{name:"Kinematograficzne Budowanie",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{duration:1.5*i,ease:"easeInOut",delay:(.3+t*.3)*i}}),generic:(t,i=1)=>({opacity:1,scale:1,y:0,filter:"blur(0px)",transition:{duration:1*i,ease:"circOut",delay:(.9+t*.15)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.8*i,ease:"circOut",delay:(1.6+t*.15)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:1.2*t,ease:"circOut",delay:1*t},opacity:{duration:.01*t,delay:1*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.9*i,ease:"circOut",delay:(1.7+t*.25)*i},opacity:{duration:.01*i,delay:(1.7+t*.25)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,filter:"blur(0px)",transition:{duration:1.2*t,ease:"circOut",delay:.8*t}})},loop:{}},organicGrowth:{name:"Organiczny Wzrost",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,scale:1,transition:{duration:1.2*i,ease:"easeOut",delay:(.1+t*.2)*i}}),dot:(t,i=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:100,damping:10,duration:.8*i,delay:(.6+t*.1)*i}}),markerGroup:(t,i=1)=>({opacity:1,scaleY:1,transition:{duration:.7*i,ease:"easeOut",delay:(.7+t*.1)*i}}),text:(t,i=1)=>({opacity:1,scale:1,y:0,transition:{duration:.7*i,ease:"easeOut",delay:(1.3+t*.1)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:120,damping:12,duration:1*t,delay:.8*t},opacity:{duration:.01*t,delay:.8*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:100,damping:10,duration:.7*i,delay:(1.4+t*.2)*i},opacity:{duration:.01*i,delay:(1.4+t*.2)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:120,damping:12,duration:1*t,delay:.6*t}})},loop:{}},technicalDrawingLR:{name:"Techniczne Rysowanie L-P",_sequenceConfig:{sectionOrder:["s1","s3","s2"],durationBase:.6,phaseStagger:.15,sectionStagger:.8,getDelay:function(t,i,r=0,s=.05){const l=this.sectionOrder.indexOf(t);return l===-1?0:l*this.sectionStagger+i*this.phaseStagger+r*s}},intro:{path:function(t,i=1){const r=Ke.technicalDrawingLR._sequenceConfig.getDelay(t,0);return{pathLength:1,opacity:1,transition:{duration:Ke.technicalDrawingLR._sequenceConfig.durationBase*i,ease:"linear",delay:(.1+r)*i}}},dot:function(t,i=1){const r=Ke.technicalDrawingLR._sequenceConfig.getDelay(t,1);return{opacity:1,scale:1,transition:{duration:Ke.technicalDrawingLR._sequenceConfig.durationBase*.6*i,ease:"easeOut",delay:(.1+r)*i}}},markerGroup:function(t,i=1){const r=Ke.technicalDrawingLR._sequenceConfig.getDelay(t,2);return{opacity:1,scaleX:1,transition:{duration:Ke.technicalDrawingLR._sequenceConfig.durationBase*.8*i,ease:"easeOut",delay:(.1+r)*i}}},text:function(t,i=1){const{sectionId:r,lineIndex:s}=t,l=Ke.technicalDrawingLR._sequenceConfig.getDelay(r,3,s,.08);return{opacity:1,x:0,transition:{duration:Ke.technicalDrawingLR._sequenceConfig.durationBase*.7*i,ease:"easeOut",delay:(.1+l)*i}}},drawTriangle:{polygon:function(t=1){const i=Ke.technicalDrawingLR._sequenceConfig.sectionOrder.length*Ke.technicalDrawingLR._sequenceConfig.sectionStagger+.2;return{pathLength:1,opacity:1,transition:{pathLength:{duration:Ke.technicalDrawingLR._sequenceConfig.durationBase*t,ease:"easeOut",delay:i*t},opacity:{duration:.01*t,delay:i*t}}}},line:function(t,i=1){const r=Ke.technicalDrawingLR._sequenceConfig.sectionOrder.length*Ke.technicalDrawingLR._sequenceConfig.sectionStagger,s=Ke.technicalDrawingLR.intro.drawTriangle.polygon(1).transition.pathLength.duration,l=Ke.technicalDrawingLR.intro.drawTriangle.polygon(1).transition.pathLength.delay,u=r+l+s*i+t*.15*i;return{pathLength:1,opacity:1,transition:{pathLength:{duration:Ke.technicalDrawingLR._sequenceConfig.durationBase*.7*i,ease:"easeOut",delay:u},opacity:{duration:.01*i,delay:u}}}}},triangleGroup:function(t=1){const r=Ke.technicalDrawingLR.intro.drawTriangle.line(2,1).transition.pathLength.delay,s=Ke.technicalDrawingLR.intro.drawTriangle.line(2,1).transition.pathLength.duration,l=(r+s)*t+.2*t;return{opacity:1,scale:1,rotateY:0,transition:{duration:Ke.technicalDrawingLR._sequenceConfig.durationBase*t,ease:"easeOut",delay:l}}}},loop:{}},energyBurst:{name:"Rozbłysk Energii",intro:{path:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{type:"spring",stiffness:100,damping:15,duration:.8*i,delay:(.2+t*.1)*i},opacity:{duration:.2*i,delay:(.2+t*.1)*i}}}),generic:(t,i=1)=>({opacity:1,scale:1,transition:{type:"spring",stiffness:250,damping:10,delay:(.1+t*.05)*i}}),text:(t,i=1)=>({opacity:1,y:0,transition:{duration:.5*i,ease:"easeOut",delay:(.5+t*.08)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.5*t,ease:[.6,-.28,.735,.045],delay:.4*t},opacity:{duration:.01,delay:.4*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.4*i,ease:[.6,-.28,.735,.045],delay:(.7+t*.1)*i},opacity:{duration:.01,delay:(.7+t*.1)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:[0,1.2,1],transition:{duration:.6*t,ease:"backOut",delay:.1*t}})},loop:{}},quantumPulse:{name:"Pulsowanie Kwantowe",intro:{path:(t,i=1)=>({opacity:[0,1,.7,1],filter:["blur(5px)","blur(0px)","blur(2px)","blur(0px)"],transition:{duration:1.2*i,ease:"easeInOut",delay:(.1+t*.2)*i,times:[0,.4,.7,1]}}),generic:(t,i=1)=>({opacity:1,scale:[.8,1.05,1],filter:"blur(0px)",transition:{duration:.8*i,ease:"circOut",delay:(.4+t*.1)*i}}),text:(t,i=1)=>({opacity:1,filter:"blur(0px)",transition:{duration:.7*i,ease:"easeOut",delay:(.8+t*.15)*i}}),drawTriangle:{polygon:(t=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.9*t,ease:"sine.inOut",delay:.8*t},opacity:{duration:.01,delay:.8*t}}}),line:(t,i=1)=>({pathLength:1,opacity:1,transition:{pathLength:{duration:.6*i,ease:"sine.inOut",delay:(1.3+t*.15)*i},opacity:{duration:.01,delay:(1.3+t*.15)*i}}})},triangleGroup:(t=1)=>({opacity:1,scale:1,filter:"blur(0px)",transition:{duration:1*t,ease:"circOut",delay:.5*t}})},loop:{}}},xv={dynamicEntry:{path:{pathLength:0,opacity:0},generic:{opacity:0,scale:.3},text:{opacity:0,y:5},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.3,rotateY:-90}},springPop:{path:{scale:0,opacity:0},generic:{opacity:0,scale:.3},text:{opacity:0,y:20},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.3}},smoothUnfold:{path:{pathLength:0,opacity:0},generic:{opacity:0,filter:"blur(10px)",y:10},text:{opacity:0,y:15},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,filter:"blur(10px)",scale:.8}},blueprintReveal:{path:{pathLength:0,opacity:0},markerGroup:{opacity:0,scaleY:0,transformOrigin:"center bottom"},dot:{opacity:0,scale:0},text:{opacity:0,y:10},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.5}},circuitTrace:{path:{pathLength:0,opacity:0},markerGroup:{opacity:0,scaleX:0,transformOrigin:"left center"},dot:{opacity:0,scale:.5},text:{opacity:0},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.7}},cinematicBuildUp:{path:{pathLength:0,opacity:0},generic:{opacity:0,scale:.8,y:5,filter:"blur(5px)"},text:{opacity:0,y:10},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.7,filter:"blur(5px)"}},organicGrowth:{path:{pathLength:0,opacity:0,scale:.8},dot:{opacity:0,scale:0},markerGroup:{opacity:0,scaleY:0,transformOrigin:"center bottom"},text:{opacity:0,scale:.5,y:10},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.3}},technicalDrawingLR:{path:{pathLength:0,opacity:0},dot:{opacity:0,scale:0},markerGroup:{opacity:0,scaleX:0,transformOrigin:"left center"},text:{opacity:0,x:-15},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.5,rotateY:90}},energyBurst:{path:{pathLength:0,opacity:0},generic:{opacity:0,scale:0},text:{opacity:0,y:10},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:0}},quantumPulse:{path:{opacity:0,filter:"blur(5px)"},generic:{opacity:0,scale:.8,filter:"blur(3px)"},text:{opacity:0,filter:"blur(2px)"},trianglePolygon:{pathLength:0,opacity:0},triangleLines:{pathLength:0,opacity:0},triangleGroup:{opacity:0,scale:.7,filter:"blur(5px)"}}},Co="var(--diagram-default-color)",bv="var(--diagram-lavender-color)",wv="var(--diagram-text-color);",Nf=t=>{if(typeof window<"u"){const i=t.replace(/var\(([^)]+)\);?/,"$1");return getComputedStyle(document.documentElement).getPropertyValue(i).trim()||t}return t},jv=tt.memo(({animationKey:t,selectedPresetKey:i,isLoopingActive:r,speedMultiplier:s,animationPresets:l,initialStates:u,onHighlightChange:f,activePhase:g})=>{const m=l[i]||l.dynamicEntry,p=u[i]||u.dynamicEntry,[y,b]=S.useState(g);S.useEffect(()=>{b(g)},[g]),S.useEffect(()=>{const q=["s2","s3","s1"];let re=q.indexOf(g)!==-1?q.indexOf(g):0,Ae,Ye;const _e=i==="technicalDrawingLR"?(l.technicalDrawingLR._sequenceConfig.sectionOrder.length*l.technicalDrawingLR._sequenceConfig.sectionStagger+l.technicalDrawingLR.intro.triangleGroup(1).transition.delay)*s+l.technicalDrawingLR.intro.triangleGroup(1).transition.duration*s:3e3*s;return r&&(Ye=setTimeout(()=>{if(y===g){const zt=q[re];b(zt),f&&f(zt)}Ae=setInterval(()=>{re=(re+1)%q.length;const zt=q[re];b(zt),f&&f(zt)},7e3*s)},_e)),()=>{clearTimeout(Ye),clearInterval(Ae)}},[t,i,s,l,r,f,g,y]);const j=500,z=j/2,T=100,O=15.3,L=10,C=2,V=15,D={layer1:T+30,layer2:T+56,layer3:T+82},X={s1_gap:300,s2_gap:60,s3_gap:180},P=22,F=[{id:"arc_rozumowanie",sectionId:"s1",startAngle:X.s3_gap+P/2,endAngle:X.s1_gap-P/2},{id:"arc_empatia",sectionId:"s2",startAngle:X.s1_gap+P/2,endAngle:X.s2_gap-P/2},{id:"arc_materializacja",sectionId:"s3",startAngle:X.s2_gap+P/2,endAngle:X.s3_gap-P/2}].map(q=>{let re=q.startAngle%360,Ae=q.endAngle%360;re<0&&(re+=360),Ae<0&&(Ae+=360),Ae<=re&&(Ae+=360);const Ye=Ja(z,T,re),_e=Ja(z,T,Ae),zt=Ae-re,Di=zt>180?1:0;return{...q,path:`M ${Ye.x.toFixed(2)} ${Ye.y.toFixed(2)} A ${T.toFixed(2)} ${T.toFixed(2)} 0 ${Di} 1 ${_e.x.toFixed(2)} ${_e.y.toFixed(2)}`,textPathMidAngle:q.startAngle+zt/2}}),K=96,J=2/3*K,se=1/3*K,xe=K/Math.sqrt(3),Le=z,Be=z+J,jt=z+xe,xt=z-se,$e=z-xe,U=z-se,I=`${Le.toFixed(2)},${Be.toFixed(2)} ${jt.toFixed(2)},${xt.toFixed(2)} ${$e.toFixed(2)},${U.toFixed(2)}`,ee=[{x1:Le,y1:Be,x2:z,y2:z,key:"triLine1"},{x1:jt,y1:xt,x2:z,y2:z,key:"triLine2"},{x1:$e,y1:U,x2:z,y2:z,key:"triLine3"}],de=[{sectionId_ref:"s1",angle:X.s1_gap,id:"gap1",numeral:"I"},{sectionId_ref:"s2",angle:X.s2_gap,id:"gap2",numeral:"II"},{sectionId_ref:"s3",angle:X.s3_gap,id:"gap3",numeral:"III"}].map(q=>{const re=Ja(z,T,q.angle),Ae=Ja(z,T+L+V,q.angle);return{...q,dotX:re.x,dotY:re.y,numeralX:Ae.x,numeralY:Ae.y,numeralAnchor:"middle"}}),G=[{id:"s1",visualArcRef:F.find(q=>q.id==="arc_rozumowanie"),textsOnPath:[{key:"s1_rozum_title",content:"materializacja",radius:D.layer1,dy:-.5,letterSpacing:.8,isTitle:!0},{key:"s1_rozum_sub",content:"prototypowanie i testowanie",radius:D.layer2,dy:-1.5,letterSpacing:.3,isTitle:!1},{key:"s1_rozum_tag",content:"III. zrób",radius:D.layer3,dy:-2,letterSpacing:1,isTitle:!0}]},{id:"s2",visualArcRef:F.find(q=>q.id==="arc_empatia"),textsOnPath:[{key:"s2_empatia_title",content:"empatia",radius:D.layer1,dy:-.5,letterSpacing:.8,isTitle:!0},{key:"s2_empatia_sub",content:"definiowanie problemu",radius:D.layer2,dy:-1,letterSpacing:.6,isTitle:!1},{key:"s2_empatia_tag",content:"I. odczuj",radius:D.layer3,dy:-1.5,letterSpacing:1,isTitle:!0}]},{id:"s3",visualArcRef:F.find(q=>q.id==="arc_materializacja"),textsOnPath:[{key:"s3_mater_title",content:"rozumowanie",radius:D.layer1,dy:-.5,letterSpacing:.8,isTitle:!0},{key:"s3_mater_sub",content:"koncypowanie rozwiązań",radius:D.layer2,dy:-1.5,letterSpacing:.6,isTitle:!1},{key:"s3_mater_tag",content:"II. wymyśl",radius:D.layer3,dy:-2,letterSpacing:1,isTitle:!0}]}].flatMap(q=>{const re=q.visualArcRef;if(!re)return console.warn(`Visual arc not found for section ${q.id}`),[];const Ae=re.id==="arc_rozumowanie",Ye=(un,ca,Dt,Uc)=>{let Fn=ca%360,In=Dt%360;Fn<0&&(Fn+=360),In<0&&(In+=360);let Ri=1;Uc&&([Fn,In]=[In,Fn],Ri=0);let ua=ca%360;ua<0&&(ua+=360);let Kn=Dt%360;Kn<0&&(Kn+=360),Kn<=ua&&(Kn+=360);const Hc=Kn-ua>180?1:0,ls=Ja(z,un,Fn),Zn=Ja(z,un,In);return`M ${ls.x.toFixed(2)} ${ls.y.toFixed(2)} A ${un.toFixed(2)} ${un.toFixed(2)} 0 ${Hc} ${Ri} ${Zn.x.toFixed(2)} ${Zn.y.toFixed(2)}`},_e=5,zt=re.startAngle-_e,Di=re.endAngle+_e;return q.textsOnPath.map((un,ca)=>({...un,sectionId:q.id,lineIndex:ca,pathId:`tp-${un.key}`,pathDef:Ye(un.radius,zt,Di,Ae)}))}),Z=m.intro.drawTriangle.polygon(s),Q=ee.map((q,re)=>m.intro.drawTriangle.line(re,s)),ne=m.intro.triangleGroup?m.intro.triangleGroup(s):{opacity:1,scale:1},me=(q,re)=>typeof m.intro.path=="function"?m.intro.path(i==="technicalDrawingLR"?q.sectionId:re,s):m.intro.path||{},ae=(q,re)=>typeof m.intro.dot=="function"?m.intro.dot(i==="technicalDrawingLR"?q.sectionId_ref:re,s):m.intro.dot||m.intro.generic(re,s)||{},Qe=(q,re)=>typeof m.intro.text=="function"?m.intro.text(i==="technicalDrawingLR"?{sectionId:q.sectionId,lineIndex:q.lineIndex}:re,s):m.intro.text||{};return h.jsxs(W.div,{className:"flex items-center justify-center w-full h-full",style:{minHeight:"400px",maxWidth:"100%"},exit:{opacity:0},children:["      ",h.jsxs(W.svg,{viewBox:`0 0 ${j} ${j}`,className:"w-full h-auto max-h-full","aria-label":"Diagram procesu projektowego",style:{perspective:"1000px",transform:"rotate(-60deg)",maxWidth:"100%",display:"block",minWidth:"300px",minHeight:"300px",border:"2px solid red"},children:[h.jsx("defs",{children:G.map(q=>h.jsx("path",{id:q.pathId,d:q.pathDef,fill:"none",stroke:"transparent"},q.pathId))}),F.map((q,re)=>{const Ae=me(q,re),Ye=r&&y===q.sectionId,_e=1.5*s;return h.jsxs(tt.Fragment,{children:["              ",h.jsx(W.path,{d:q.path,fill:"none",stroke:Co,strokeWidth:O,className:"diagram-element",initial:p.path||{},animate:Ae}),"              ",h.jsx(W.path,{d:q.path,fill:"none",stroke:bv,strokeWidth:O,className:"diagram-element diagram-highlight",initial:{opacity:0},animate:{opacity:Ye?1:0},transition:{opacity:{duration:_e,ease:"easeInOut"}}})]},`arc-group-${q.id}`)}),h.jsxs(W.g,{initial:p.triangleGroup||{opacity:0,scale:.3},animate:ne,style:{transformOrigin:`${z}px ${z}px`},children:["            ",h.jsx(W.polygon,{points:I,fill:"none",stroke:Co,strokeWidth:C,className:"diagram-element",initial:p.trianglePolygon||{pathLength:0,opacity:0},animate:Z}),ee.map((q,re)=>h.jsx(W.line,{x1:q.x1,y1:q.y1,x2:q.x2,y2:q.y2,stroke:Co,strokeWidth:C,className:"diagram-element",initial:p.triangleLines||{pathLength:0,opacity:0},animate:Q[re]},q.key))]}),de.map((q,re)=>{const Ae=ae(q,re);return h.jsxs(W.g,{initial:p.dot||p.generic||{},animate:Ae,children:["              ",h.jsx("circle",{cx:q.dotX,cy:q.dotY,r:L,fill:Co,className:"diagram-element"}),h.jsx("text",{x:q.numeralX,y:q.numeralY,textAnchor:q.numeralAnchor,dominantBaseline:"middle",className:"text-3xl font-bold diagram-element",fill:Co,transform:q.numeral==="I"||q.numeral==="II"||q.numeral==="III"?`rotate(${q.angle} ${q.numeralX} ${q.numeralY})`:void 0,children:q.numeral})]},q.id)}),G.map((q,re)=>{const Ae=Qe(q,re),Ye=r&&y===q.sectionId,_e=1.5*s;return h.jsxs(W.g,{initial:p.text||{},animate:Ae,children:["              ",h.jsx(W.text,{className:`${q.isTitle?"text-sm sm:text-base font-medium":"text-xs sm:text-sm"} diagram-element`,initial:{fill:Nf(wv)},animate:{fill:Nf(Ye?bv:wv)},transition:{fill:{duration:_e,ease:"easeInOut"}},dy:q.dy,dominantBaseline:"middle",letterSpacing:q.letterSpacing,children:h.jsx("textPath",{href:`#${q.pathId}`,startOffset:"50%",textAnchor:"middle",children:q.content})})]},`tg-${q.pathId}`)})]})]},t)});function C6({preset:t="dynamicEntry",speed:i=1,activePhase:r="s2",onPhaseClick:s,controlsOnLeft:l=!1}){const[u,f]=S.useState(0),g=t,m=i,p=!0;S.useEffect(()=>{f(z=>z+1)},[t,i]);const y=S.useCallback(z=>{s&&typeof s=="function"&&s(z)},[s]),{phaseData:b}=S.useContext(km),j=b!==null;return h.jsx("div",{className:"process-diagram-section font-sans relative overflow-hidden w-full h-full flex justify-center items-center",style:{background:"var(--diagram-background)"},children:l?h.jsx("div",{className:"w-full h-full flex items-center justify-center",children:h.jsx("div",{className:"flex items-center justify-center w-full h-full",style:{minHeight:"400px",maxWidth:"100%"},children:h.jsx(Ai,{mode:"wait",children:h.jsx(jv,{selectedPresetKey:g,isLoopingActive:p,speedMultiplier:m,animationPresets:Ke,initialStates:xv,onHighlightChange:y,activePhase:r},u)})})}):h.jsxs("div",{className:"w-full h-full flex",style:{minHeight:"600px"},children:[h.jsx("div",{className:"w-2/5 h-full",style:{minWidth:"300px"},children:j&&h.jsx("div",{className:"h-full flex items-center justify-center p-4 md:p-6 lg:p-8",children:h.jsx(A6,{activePhase:r})})}),h.jsx("div",{className:`${j?"w-3/5":"w-full"} h-full relative flex flex-col items-center justify-center p-4`,children:h.jsx("div",{className:"flex items-center justify-center w-full h-full",children:h.jsx(Ai,{mode:"wait",children:h.jsx(jv,{selectedPresetKey:g,isLoopingActive:p,speedMultiplier:m,animationPresets:Ke,initialStates:xv,onHighlightChange:y,activePhase:r},u)})})})]})})}const D6=dw`
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
  
`,R6=()=>{const{currentPhase:t,setCurrentPhase:i}=S.useContext(km),[r,s]=S.useState("dynamicEntry"),[l,u]=S.useState(1);S.useEffect(()=>{t||i("s2")},[t,i]);const f=y=>{s(y.target.value)},g=y=>{u(parseFloat(y.target.value))},m=y=>{i(y)},p=yr[t]||yr.s2;return h.jsxs(M6,{className:"process-diagram-section",children:[h.jsx(D6,{}),h.jsxs(O6,{children:[h.jsx(L6,{children:h.jsxs(Ai,{mode:"wait",children:["            ",h.jsxs(W.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.6,ease:[.19,1,.22,1]},className:"process-description-content",children:[h.jsxs(_6,{children:[h.jsx(N6,{children:p.subtitle}),h.jsx(V6,{children:p.title}),h.jsx(P6,{children:p.description}),h.jsxs(U6,{children:[h.jsx(H6,{children:"Kluczowe elementy"}),h.jsx($6,{children:p.keyPoints.map((y,b)=>h.jsxs(Y6,{children:[h.jsx(G6,{children:"•"}),h.jsx("span",{children:y})]},b))})]}),p.quote&&h.jsx(q6,{children:h.jsxs(X6,{children:['"',p.quote,'"']})})]}),"            "]},`phase-${t}`)]})}),h.jsx(B6,{children:h.jsx("div",{className:"w-full h-full flex items-center justify-center relative diagram-wrapper",children:h.jsx("div",{className:"diagram-scale-container w-full h-full",children:h.jsx(C6,{preset:r,speed:l,activePhase:t,onPhaseClick:m,controlsOnLeft:!0})})})})]}),h.jsx(F6,{children:h.jsxs(I6,{children:[h.jsxs(zv,{children:[h.jsx(Sv,{children:"Styl:"}),h.jsx(Tv,{children:h.jsxs(kv,{value:r,onChange:f,children:[h.jsx("option",{value:"dynamicEntry",children:"Dynamiczne Wejście"}),h.jsx("option",{value:"springPop",children:"Sprężyste Pojawienie"}),h.jsx("option",{value:"smoothUnfold",children:"Płynne Odsłanianie"}),h.jsx("option",{value:"blueprintReveal",children:"Odsłanianie Rysunku Tech."}),h.jsx("option",{value:"circuitTrace",children:"Śledzenie Obwodu"}),h.jsx("option",{value:"cinematicBuildUp",children:"Kinematograficzne Budowanie"}),h.jsx("option",{value:"organicGrowth",children:"Organiczny Wzrost"}),h.jsx("option",{value:"energyBurst",children:"Rozbłysk Energii"}),h.jsx("option",{value:"quantumPulse",children:"Pulsowanie Kwantowe"})]})})]}),h.jsxs(zv,{children:[h.jsx(Sv,{children:"Szybkość:"}),h.jsx(Tv,{children:h.jsxs(kv,{value:l.toString(),onChange:g,children:[h.jsx("option",{value:"0.5",children:"Wolno (0.5x)"}),h.jsx("option",{value:"0.75",children:"Powoli (0.75x)"}),h.jsx("option",{value:"1",children:"Normalnie (1x)"}),h.jsx("option",{value:"1.5",children:"Szybko (1.5x)"}),h.jsx("option",{value:"2",children:"Bardzo szybko (2x)"})]})})]})]})})]})},M6=x.section`
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
`,O6=x.div`
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
`,L6=x.div`
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
`,B6=x.div`
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
`;const _6=x.div`
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
`,N6=x.div`
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
`,V6=x.h3`
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
`,P6=x.p`
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
`,U6=x.div`
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
`,H6=x.h4`
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
`,$6=x.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,Y6=x.li`
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
`,G6=x.span`
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
`,q6=x.div`
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
`,X6=x.p`
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
`,F6=x.div`
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
`,I6=x.div`
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
`,zv=x.div`
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
`,Sv=x.label`
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
`,kv=x.select`
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
`,Tv=x.div`
  position: relative;
  width: 100%;
  
  &:hover {
    &::after {
      opacity: 0.8;
    }
  }
`,K6=x(Sm)`
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
`,Z6=x(kh)`
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
`,Q6=x(Sm)`
  padding-top: 3rem; /* Balanced spacing to match process section padding-bottom */
  padding-bottom: 8rem; /* Dodana duża przestrzeń przed stopką */
  min-height: 800px; /* Minimalna wysokość sekcji */
  
  @media (max-width: 768px) {
    padding-top: 2rem; /* Proportional mobile spacing to match process section */
    padding-bottom: 6rem; /* Dodana przestrzeń na mobile */
    min-height: 600px;
  }
`,W6=()=>{const t=ia.slice(0,3),[i,r]=Hn({triggerOnce:!0,threshold:.1}),[s,l]=Hn({triggerOnce:!0,threshold:.1}),[u,f]=Hn({triggerOnce:!0,threshold:.1});return h.jsxs("div",{className:"page-wrapper page-transition-container",children:[h.jsx(la,{title:"FLID - Fundacja Ludzie-Innowacje-Design",description:"FLID to fundacja zajmująca się innowacyjnymi projektami z zakresu designu, technologii i usług dla społeczeństwa.",keywords:"design thinking, innowacje, projektowanie usług, bielsko-biała, design",canonical:"/"}),h.jsxs(K6,{ref:i,children:[h.jsxs(Z6,{children:["          ",h.jsx(W.div,{initial:{opacity:0,y:30},animate:r?{opacity:1,y:0}:{},transition:{duration:.9},children:h.jsx(E6,{children:h.jsx(R6,{})})})]}),"      "]}),h.jsx(Q6,{ref:s,className:"fade-in-element",children:h.jsxs(kh,{children:[h.jsx(vv,{title:"Wybrane projekty",subtitle:"Zobacz nasze najnowsze realizacje"}),h.jsx(W.div,{initial:{opacity:0,y:30},animate:l?{opacity:1,y:0}:{},transition:{duration:.9,delay:.2},children:h.jsx(J6,{children:t.map(g=>h.jsxs(xw,{to:`/projects/${g.slug}`,whileHover:{y:-10},transition:{duration:.3},children:[h.jsxs(j6,{children:[g.coverImage?h.jsx(sn,{src:g.coverImage,alt:g.title,aspectRatio:"16:9",className:"project-image"}):h.jsx(jc,{title:g.title}),h.jsx(eC,{children:g.category})]}),h.jsxs(z6,{children:[h.jsx(S6,{children:g.title}),h.jsx(k6,{children:g.shortDesc}),h.jsxs(tC,{children:[h.jsx("span",{children:g.year}),h.jsx(nC,{children:"Zobacz szczegóły →"})]})]})]},g.id))})}),h.jsxs(T6,{children:[h.jsx(w6,{to:"/projects",variant:"secondary",withArrow:!0,children:"Zobacz wszystkie projekty"}),"          "]})]})}),h.jsx(Sm,{$light:!0,ref:u,className:"fade-in-element",children:h.jsxs(kh,{children:[h.jsx(vv,{title:"Partnerzy",subtitle:"Współpracujemy z najlepszymi",centered:!0}),h.jsx(W.div,{initial:{opacity:0,y:30},animate:f?{opacity:1,y:0}:{},transition:{duration:.9,delay:.2},children:h.jsx(iC,{children:s6.map(g=>h.jsxs(aC,{children:[g.logo?h.jsx(sn,{src:g.logo,alt:g.name,aspectRatio:"1:1",className:"partner-logo"}):h.jsx(c6,{name:g.name}),h.jsx(rC,{children:g.name})]},g.id))})}),"        "]})})]})},J6=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,xw=x(W.create(je))`  text-decoration: none;
  color: inherit;
  background: var(--card-bg);
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`,eC=x.div`
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
`,tC=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  color: var(--text-light);
  font-size: 0.85rem;
`,nC=x.span`
  color: var(--accent);
  font-weight: 500;
  transition: color 0.3s ease;
  
  ${xw}:hover & {
    color: var(--accent-dark);
  }
`,iC=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
`,aC=x.div`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`,rC=x.h3`
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
`;const oC=({children:t,level:i=1,className:r=""})=>{const s=`h${i}`;return h.jsx(sC,{as:s,className:`text-gradient ${r}`,children:t})},sC=x.h1`
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
`;x.span`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;const lC=x.span`
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
  
  &:hover ${lC} {
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
`;x(W.span)`
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
`;x(W.div)`
  width: 120px;
  height: 2px;
  background-color: var(--lavender-400);
  margin: 3rem auto 0;
  opacity: 0.7;
`;const cC=()=>{const[t,i]=S.useState("all"),[r,s]=S.useState(ia),[l,u]=S.useState(""),f=S.useRef(null),g=["all",...new Set(ia.map(m=>m.category))];return S.useEffect(()=>{let m=ia;if(console.log("Projects data:",ia),t!=="all"&&(m=m.filter(p=>p.category===t)),l.trim()!==""){const p=l.toLowerCase().trim();m=m.filter(y=>y.title.toLowerCase().includes(p)||y.shortDesc.toLowerCase().includes(p))}console.log("Filtered projects:",m),s(m)},[t,l]),h.jsxs(uC,{ref:f,className:"projects-page-container",children:[h.jsx(la,{title:"Projekty - FLID",description:"Odkryj nasze innowacyjne projekty i realizacje w obszarze zrównoważonego designu."}),h.jsxs(mC,{className:"projects-content-section",children:["        ",h.jsxs(dC,{children:["          ",h.jsxs(fC,{className:"sidebar-controls",children:["            ","            ",h.jsxs(zc,{className:"search-container",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:0,duration:.15},whileHover:{scale:1.01,y:-1},children:[h.jsx(xC,{children:h.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("circle",{cx:"11",cy:"11",r:"8",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("path",{d:"M21 21l-4.35-4.35",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),h.jsx(bC,{type:"text",placeholder:"Szukaj projektu...",value:l,onChange:m=>u(m.target.value)}),l&&h.jsx(wC,{onClick:()=>u(""),children:h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),h.jsx(hC,{}),"            ",h.jsx(gC,{className:"category-nav",children:g.map((m,p)=>h.jsxs(yC,{$active:m===t,onClick:()=>i(m),as:W.button,initial:{opacity:0,x:-6},animate:{opacity:1,x:0},transition:{delay:p*.005,duration:.15},whileHover:{x:3},whileTap:{scale:.99},children:[m==="all"?"Wszystkie":m,m===t&&h.jsx(vC,{layoutId:"activeCategoryIndicator"})]},m))})]}),h.jsxs(pC,{className:"main-content",children:["            ",h.jsx(jC,{className:"projects-gallery",children:h.jsx(Ai,{mode:"popLayout",children:r.map((m,p)=>h.jsx(Xn,{className:"project-card",initial:{opacity:0,y:20,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.98,transition:{duration:.15}},transition:{duration:.25,delay:p*.03,ease:[.22,1,.36,1]},whileHover:{y:-8,scale:1.015,transition:{duration:.25,ease:[.22,1,.36,1]}},whileTap:{scale:.99,transition:{duration:.1}},children:h.jsxs(zC,{to:`/projects/${m.slug}`,children:[h.jsxs(SC,{children:[m.coverImage?h.jsx(kC,{src:m.coverImage,alt:m.title}):h.jsx(TC,{children:h.jsx(jc,{title:m.title,animate:!1})}),h.jsx(EC,{children:m.category}),h.jsx(AC,{})]}),h.jsxs(CC,{children:[h.jsx(DC,{children:m.title}),h.jsx(RC,{children:m.shortDesc}),h.jsxs(MC,{children:[h.jsx(OC,{children:m.year}),h.jsxs(LC,{children:["Zobacz projekt",h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})]})},m.id))})}),r.length===0&&h.jsxs(BC,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:[h.jsx(_C,{children:"🔍"}),h.jsx(NC,{children:"Brak wyników"}),h.jsx(VC,{children:"Nie znaleziono projektów pasujących do wybranych kryteriów."}),h.jsx(PC,{onClick:()=>{i("all"),u("")},whileHover:{scale:1.03},whileTap:{scale:.98},children:"Resetuj filtry"})]})]})]})]})]})},uC=x.div`
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
`,dC=x.div`
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
`,fC=x.aside`
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
`,hC=x.div`
  width: 100%;
  height: 1px;
  background-color: var(--border);
  opacity: 0.6;
  margin: 0.25rem 0 0.75rem;
`,mC=x.section`
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
`,pC=x.main`
  flex: 1;
  padding: 0; // Reset padding, will be handled by ProjectsGallery or ContentSection
  width: 100%; // Ensure it takes full available width
  
  @media (max-width: 1024px) {
    padding: 0.5rem 0;
  }
`,gC=x.nav`
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
`,yC=x(W.button)`
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
`,vC=x(W.div)`
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
`,zc=x(W.div)`
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
`,xC=x.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--lavender-500);
  pointer-events: none;
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  
  ${zc}:hover & {
    color: var(--lavender-600);
    opacity: 1;
  }
  
  ${zc}:focus-within & {
    color: var(--lavender-700);
    opacity: 1;
  }
`,bC=x.input`
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
  
  ${zc}:hover &::placeholder {
    opacity: 0.8;
    color: var(--lavender-500);
  }
`,wC=x.button`
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
`,jC=x.div`
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
`,Xn=x(W.article)`
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
`,zC=x(je)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: var(--text);
`,SC=x.div`
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
  
  ${Xn}:hover &::after {
    opacity: 1;
  }
`,kC=x.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  ${Xn}:hover & {
    transform: scale(1.05);
  }`,TC=x.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,AC=x.div`
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
  
  ${Xn}:hover & {
    opacity: 1;
    background: linear-gradient(135deg, 
      rgba(139, 92, 246, 0.1) 0%, 
      rgba(147, 51, 234, 0.15) 100%);
  }
`,EC=x.span`
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
    ${Xn}:hover & {
    transform: translateY(-1px);
    background-color: rgba(255, 255, 255, 0.98);
  }`,CC=x.div`
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
    ${Xn}:hover & {
    transform: translateY(-2px);
  }
`,DC=x.h3`
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  color: var(--text);
  font-weight: 600;
  line-height: 1.3;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    ${Xn}:hover & {
    transform: translateY(-1px);
    color: var(--lavender-600);
  }`,RC=x.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.5;
  flex-grow: 1;
`,MC=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
`,OC=x.span`
  font-size: 0.85rem;
  color: var(--text-tertiary);
  font-weight: 500;
`,LC=x.span`
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
    ${Xn}:hover & {
    transform: translateX(5px);
    color: var(--lavender-700);
  }
  
  ${Xn}:hover & svg {
    transform: translateX(4px) scale(1.05);
    opacity: 1;
  }
`,BC=x(W.div)`
  text-align: center;
  padding: 5rem 0;
  max-width: 500px;
  margin: 0 auto;
`,_C=x.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`,NC=x.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`,VC=x.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`,PC=x(W.button)`
  background: var(--lavender-500);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`,UC=()=>{var m;const{slug:t}=Iv(),i=kc(),[r,s]=S.useState(null),[l,u]=S.useState(null),[f,g]=S.useState(!0);return S.useEffect(()=>{const p=ia.find(y=>y.slug===t);if(p){console.log("Found project:",p),console.log("Cover image:",p.coverImage),console.log("Images array:",p.images),s(p);const y=p.images?p.images.filter(j=>j!==p.coverImage):[],b=y.length>0?y[0]:null;console.log("Setting active gallery image to:",b),u(b),g(!1)}else i("/projects",{replace:!0})},[t,i]),f||!r?h.jsx(HC,{children:h.jsx($C,{})}):h.jsxs(h.Fragment,{children:[h.jsx(la,{title:`${r.title} - Projekt`,description:r.shortDesc||`Projekt ${r.title} - szczegółowy opis projektu realizowanego przez Fundację FLID.`,keywords:`${r.title}, projekt, ${r.category}, design, flid`,canonical:`/projects/${r.slug}`,ogImage:r.coverImage||((m=r.images)==null?void 0:m[0])||"/images/projects/default-project-cover.svg"}),r.coverImage&&h.jsx(YC,{children:h.jsx(sn,{src:r.coverImage,alt:`${r.title} - Cover Image`,aspectRatio:"auto",priority:!0,className:"project-cover-image-full-width"})}),h.jsx(GC,{children:h.jsx("div",{className:"container",children:h.jsxs(qC,{children:[h.jsxs(XC,{children:[h.jsx(FC,{to:"/projects",children:"Projekty"}),h.jsx(IC,{children:"/"}),h.jsx(KC,{children:r.title})]}),h.jsx(ZC,{children:r.title}),h.jsxs(QC,{children:[h.jsxs(Av,{children:[h.jsx(Ev,{children:"Kategoria:"})," ",r.category]}),h.jsxs(Av,{children:[h.jsx(Ev,{children:"Rok:"})," ",r.year]})]})]})})}),h.jsx(WC,{children:h.jsxs("div",{className:"container",children:[h.jsxs(JC,{children:[h.jsxs(eD,{children:[h.jsxs(tD,{children:[console.log("Rendering gallery main image, activeImage:",l),l?h.jsx(sn,{src:l,alt:`${r.title} - zdjęcie projektu`,aspectRatio:"auto",priority:!0,className:"project-main-image",placeholderSrc:"/images/placeholder.svg"},l):r.images&&r.images.filter(p=>p!==r.coverImage).length===0?null:h.jsx(jc,{title:r.title})]}),(()=>{const p=r.images?r.images.filter(y=>y!==r.coverImage):[];return p&&p.length>0?h.jsx(nD,{children:p.map(y=>h.jsxs(iD,{$active:y===l,onClick:()=>u(y),children:[h.jsx(sn,{src:y,alt:`${r.title} - zdjęcie ${p.indexOf(y)+1}`,aspectRatio:"1:1",imgStyles:{objectFit:"cover"}}),y===l&&h.jsx(aD,{layoutId:"activeThumb"})]},y))}):null})()]}),h.jsxs(rD,{children:[h.jsx(oD,{children:r.fullDesc}),r.partners&&r.partners.length>0&&h.jsxs(Cv,{children:[h.jsx(Dv,{children:"Partnerzy"}),h.jsx(sD,{children:r.partners.map((p,y)=>h.jsx(lD,{children:p},y))})]}),r.technologies&&r.technologies.length>0&&h.jsxs(Cv,{children:[h.jsx(Dv,{children:"Technologie i metody"}),h.jsx(cD,{children:r.technologies.map((p,y)=>h.jsx(uD,{children:p},y))})]})]})]}),h.jsx(dD,{children:h.jsxs(fD,{to:"/projects",children:[h.jsx(hD,{children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),"Powrót do listy projektów"]})})]})}),h.jsx(mD,{children:h.jsxs("div",{className:"container",children:[h.jsx(pD,{children:"Inne projekty"}),h.jsx(gD,{children:ia.filter(p=>p.id!==r.id).slice(0,3).map(p=>h.jsxs(bw,{to:`/projects/${p.slug}`,whileHover:{y:-5},children:[h.jsx(vD,{children:p.coverImage?h.jsx(sn,{src:p.coverImage,alt:p.title,aspectRatio:"16:9",className:"related-project-image"}):h.jsx("div",{style:{height:"100%",width:"100%"},children:h.jsx(jc,{title:p.title})})}),h.jsxs(xD,{children:[h.jsx(bD,{children:p.title}),h.jsx(wD,{children:p.category})]})]},p.id))})]})})]})},HC=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`,$C=x.div`
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
`,YC=x.div`
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
`,GC=x.header`
  background-color: var(--card-bg);
  padding: 6rem 0 3rem;
  margin-bottom: 3rem;
`,qC=x.div`
  max-width: 800px;
`,XC=x.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,FC=x(je)`
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--primary);
  }
`,IC=x.span`
  margin: 0 0.5rem;
  color: var(--text-secondary);
`,KC=x.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,ZC=x.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,QC=x.div`
  display: flex;
  gap: 2rem;
`,Av=x.div`
  color: var(--text);
`,Ev=x.span`
  color: var(--text-secondary);
`,WC=x.div`
  margin-bottom: 4rem;
`,JC=x.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,eD=x.div``,tD=x.div`
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
`,nD=x.div`
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
`,iD=x.button`
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
`,aD=x(W.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--primary);
  border-radius: 4px;
`,rD=x.div``,oD=x.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  white-space: pre-line;
`,Cv=x.div`
  margin-bottom: 2rem;
`,Dv=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
`,sD=x.ul`
  list-style: none;
  padding: 0;
`,lD=x.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`,cD=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,uD=x.span`
  background-color: var(--card-bg);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.9rem;
  color: var(--text-secondary);
`,dD=x.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`,fD=x(je)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  
  &:hover {
    color: var(--secondary);
  }
`,hD=x.div`
  display: flex;
  align-items: center;
`,mD=x.section`
  padding: 4rem 0;
  background-color: var(--card-bg);
`,pD=x.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`,gD=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`,yD=W.create(je),bw=x(yD)`
  display: block;
  color: var(--text);
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`,vD=x.div`
  height: 150px;
  overflow: hidden;
  
  /* Styles for the OptimizedImage component */
  .related-project-image {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    
    ${bw}:hover & {
      transform: scale(1.05);
    }
  }
`,xD=x.div`
  padding: 1rem;
`,bD=x.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`,wD=x.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,Go=[{id:1,title:"Beata Przybytek",slug:"beata-przybytek",type:"Płyta winylowa",year:2021,coverImage:"/publications/beata-przybytek/cover.jpg",shortDesc:"Kolekcjonerskie wydanie płyty winylowej z muzyką jazzową",fullDesc:`Kolekcjonerskie wydanie płyty winylowej Beaty Przybytek, utrzymane w estetyce
    nawiązującej do klasycznych wydań jazzowych z lat 60. Projekt obejmował opracowanie
    całościowej identyfikacji wizualnej, w tym okładki, etykiet, kopert wewnętrznych oraz
    materiałów promocyjnych. Wydanie zostało wzbogacone o unikalne ilustracje i wysokiej
    jakości druk na ekskluzywnym papierze.`,images:["/publications/beata-przybytek/image1.jpg","/publications/beata-przybytek/image2.jpg"],format:'12" winyl, 180g',publisher:"FLID Records",links:[{name:"Strona artystki",url:"#"},{name:"Sklep online",url:"#"}]},{id:2,title:"Komisarz Orłowska",slug:"komisarz-orlowska",type:"Seria książek",year:2020,coverImage:"/publications/komisarz-orlowska/cover.jpg",shortDesc:"Seria kryminałów o komisarz Orłowskiej z charakterystyczną identyfikacją wizualną",fullDesc:`Seria kryminałów o komisarz Orłowskiej to projekt wydawniczy obejmujący
    kompleksowe opracowanie identyfikacji wizualnej dla cyklu książek kryminalnych.
    Projekt zakładał stworzenie spójnego, rozpoznawalnego stylu graficznego dla całej
    serii, z jednoczesnym podkreśleniem unikalnego charakteru każdego tomu. Opracowanie
    objęło projekt okładek, wybór typografii, układ tekstu oraz materiały promocyjne.`,images:["/publications/komisarz-orlowska/image1.jpg","/publications/komisarz-orlowska/image2.jpg","/publications/komisarz-orlowska/image3.jpg"],format:"Oprawa twarda, 145x205 mm",publisher:"Wydawnictwo Literackie",links:[{name:"Strona serii",url:"#"},{name:"Sklep wydawnictwa",url:"#"}]},{id:3,title:"Historia fotografii światowej",slug:"historia-fotografii-swiatowej",type:"Książka",year:2022,coverImage:"/publications/historia-fotografii/cover.jpg",shortDesc:"Bogato ilustrowana publikacja o historii fotografii",fullDesc:`"Historia fotografii światowej" to obszerna, bogato ilustrowana publikacja
    przedstawiająca rozwój sztuki fotograficznej od jej początków po czasy współczesne.
    Projekt obejmował opracowanie koncepcji edytorskiej, dobór materiałów wizualnych,
    projekt layoutu oraz opracowanie typograficzne. Szczególny nacisk położono na
    wysoką jakość reprodukcji fotografii historycznych oraz nowoczesne, czytelne
    przedstawienie złożonych treści.`,images:["/publications/historia-fotografii/image1.jpg","/publications/historia-fotografii/image2.jpg"],format:"Oprawa twarda, 220x280 mm, 456 stron",publisher:"FLID Publishing",links:[{name:"Strona książki",url:"#"},{name:"Księgarnia internetowa",url:"#"}]}],jD=()=>{const[t,i]=S.useState("all"),[r,s]=S.useState(Go),l=["all",...new Set(Go.map(u=>u.type).filter(u=>u))];return S.useEffect(()=>{let u=Go;t!=="all"&&(u=u.filter(f=>f.type===t)),s(u)},[t]),h.jsxs(h.Fragment,{children:[h.jsx(la,{title:"Publikacje",description:"Odkryj publikacje, badania i artykuły Fundacji Ludzie-Innowacje-Design na temat zrównoważonego designu i innowacji społecznych.",keywords:"publikacje, artykuły, badania, design, innowacje społeczne, flid",canonical:"/publications"}),h.jsx(zD,{children:h.jsxs(SD,{children:["          ",h.jsxs(kD,{children:[h.jsx(DD,{children:"Kategorie publikacji"}),h.jsx(AD,{children:l.map((u,f)=>h.jsxs(ED,{$active:u===t,onClick:()=>i(u),as:W.button,initial:{opacity:0,x:-6},animate:{opacity:1,x:0},transition:{delay:f*.005,duration:.15},whileHover:{x:3},whileTap:{scale:.99},children:[u==="all"?"Wszystkie":u,u===t&&h.jsx(CD,{layoutId:"activePublicationCategoryIndicator"})]},u))})]}),h.jsxs(TD,{children:[h.jsx(Ai,{mode:"popLayout",children:h.jsx(RD,{children:r.map((u,f)=>h.jsx(Tm,{as:W.article,initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95,transition:{duration:.2}},transition:{duration:.5,delay:f*.05,ease:[.25,.46,.45,.94]},layout:!0,role:"article","aria-labelledby":`publication-title-${u.id}`,children:h.jsxs(je,{to:`/publications/${u.slug}`,style:{textDecoration:"none",color:"inherit",display:"flex",flexDirection:"column",height:"100%"},children:[h.jsx(MD,{children:u.coverImage?h.jsx(sn,{src:u.coverImage,alt:`Okładka publikacji: ${u.title}`,aspectRatio:"3:4",className:"publication-card-image"}):h.jsx(l6,{title:u.title})}),h.jsxs(OD,{children:[h.jsx(LD,{children:u.type}),h.jsx(BD,{id:`publication-title-${u.id}`,children:u.title}),h.jsx(_D,{children:u.shortDesc}),h.jsx(ND,{children:h.jsx(VD,{children:u.year})})]})]})},u.id))})}),r.length===0&&h.jsxs(PD,{as:W.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},role:"region","aria-label":"Brak wyników wyszukiwania",children:[h.jsx(UD,{children:"📚"}),h.jsx(HD,{children:"Brak publikacji"}),h.jsx($D,{children:"Nie znaleziono publikacji pasujących do wybranej kategorii. Spróbuj wybrać inną kategorię lub pokaż wszystkie."}),h.jsx(YD,{onClick:()=>i("all"),"aria-label":"Pokaż wszystkie publikacje",children:"Pokaż wszystkie"})]})]})]})})]})},zD=x.div`
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
`,SD=x.div`
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
`,kD=x.aside`
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
`,TD=x.main`
  flex: 1;
  min-width: 0; // Important for flex item children to not overflow
`,AD=x.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,ED=x(W.button)`
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
`,CD=x(W.div)`
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
`,DD=x.h3`
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
`,RD=x(W.div)`
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
`,Tm=x(W.article)`
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
`,MD=x.div`
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
  
  ${Tm}:hover & .publication-card-image {
    transform: scale(1.08);
  }
`,OD=x.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1; // Allows this section to take available space
`,LD=x.span`
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
`,BD=x.h2`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text);
  margin-bottom: 0.25rem;
  
  ${Tm}:hover & {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,_D=x.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1; // Allows description to push meta to bottom
  margin-bottom: 1rem;
`,ND=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  margin-top: auto; // Pushes to the bottom of PublicationContent
`,VD=x.div`
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
`,PD=x(W.div)`
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
`,UD=x.div`
  font-size: 3rem; // Adjusted size
  margin-bottom: 1rem;
`,HD=x.h3`
  font-size: 1.5rem; // Adjusted size
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text);
`,$D=x.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 350px;
`,YD=x.button`
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
`,GD=()=>{const{slug:t}=Iv(),i=kc(),[r,s]=S.useState(null),[l,u]=S.useState(null),[f,g]=S.useState(!0);return S.useEffect(()=>{var p;const m=Go.find(y=>y.slug===t);m?(s(m),u(m.coverImage||((p=m.images)==null?void 0:p[0])),g(!1)):i("/publications",{replace:!0})},[t,i]),f||!r?h.jsx(S8,{children:h.jsx(k8,{})}):h.jsxs(h.Fragment,{children:[h.jsx(la,{title:`${r.title} - Publikacja`,description:r.shortDesc||`Publikacja ${r.title} - szczegółowy opis publikacji wydanej przez Fundację FLID.`,keywords:`${r.title}, publikacja, ${r.type}, artykuł, badanie, flid`,canonical:`/publications/${r.slug}`,ogImage:r.coverImage||"/images/publications/default-publication-cover.svg"}),h.jsx(qD,{children:h.jsx("div",{className:"container",children:h.jsxs(XD,{children:[h.jsxs(FD,{children:[h.jsx(ID,{to:"/publications",children:"Publikacje"}),h.jsx(KD,{children:"/"}),h.jsx(ZD,{children:r.title})]}),h.jsx(QD,{children:r.title}),h.jsxs(WD,{children:[h.jsxs(Vf,{children:[h.jsx(Pf,{children:"Typ:"})," ",r.type]}),h.jsxs(Vf,{children:[h.jsx(Pf,{children:"Rok:"})," ",r.year]}),r.format&&h.jsxs(Vf,{children:[h.jsx(Pf,{children:"Format:"})," ",r.format]})]})]})})}),h.jsx(JD,{children:h.jsxs("div",{className:"container",children:[h.jsxs(e8,{children:[h.jsxs(t8,{children:["              ",h.jsx(n8,{children:h.jsx(sn,{src:l||"/images/publication-placeholder.jpg",alt:r.title,aspectRatio:"16:9",priority:!0,className:"publication-main-image",placeholderSrc:"/images/placeholder.svg"},l)}),r.images&&r.images.length>1&&h.jsx(i8,{children:r.images.map((m,p)=>h.jsxs(a8,{active:m===l,onClick:()=>u(m),children:["                      ",h.jsx(sn,{src:m||"/images/publication-placeholder-thumb.jpg",alt:`${r.title} - zdjęcie ${p+1}`,aspectRatio:"1:1",className:"thumbnail-image"}),m===l&&h.jsx(r8,{layoutId:"activeThumb"})]},p))})]}),h.jsxs(o8,{children:[h.jsx(s8,{children:r.fullDesc}),r.publisher&&h.jsxs(Rv,{children:[h.jsx(Mv,{children:"Wydawca"}),h.jsx(l8,{children:r.publisher})]}),r.links&&r.links.length>0&&h.jsxs(Rv,{children:[h.jsx(Mv,{children:"Dodatkowe informacje"}),h.jsx(c8,{children:r.links.map((m,p)=>h.jsx(u8,{children:h.jsxs(d8,{href:m.url,target:"_blank",rel:"noopener noreferrer",children:[m.name,h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})},p))})]})]})]}),h.jsx(f8,{children:h.jsxs(h8,{to:"/publications",children:[h.jsx(m8,{children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),"Powrót do listy publikacji"]})})]})}),h.jsx(p8,{children:h.jsxs("div",{className:"container",children:[h.jsx(g8,{children:"Inne publikacje"}),h.jsx(y8,{children:Go.filter(m=>m.id!==r.id).slice(0,2).map(m=>h.jsxs(v8,{to:`/publications/${m.slug}`,whileHover:{y:-5},children:[h.jsxs(x8,{children:["                    ",h.jsx(sn,{src:m.coverImage||"/images/publication-placeholder.jpg",alt:m.title,aspectRatio:"16:9",className:"related-publication-image",imgStyles:b8})]}),h.jsxs(w8,{children:[h.jsx(j8,{children:m.title}),h.jsx(z8,{children:m.type})]})]},m.id))})]})})]})},qD=x.header`
  background-color: var(--card-bg);
  padding: 6rem 0 3rem;
  margin-bottom: 3rem;
`,XD=x.div`
  max-width: 800px;
`,FD=x.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,ID=x(je)`
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--primary);
  }
`,KD=x.span`
  margin: 0 0.5rem;
  color: var(--text-secondary);
`,ZD=x.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`,QD=x.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,WD=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`,Vf=x.div`
  color: var(--text);
`,Pf=x.span`
  color: var(--text-secondary);
`,JD=x.div`
  margin-bottom: 4rem;
`,e8=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,t8=x.div``,n8=x.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: var(--card-bg);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`,i8=x.div`
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
`,a8=x.button`
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
`,r8=x(W.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--primary);
  border-radius: 4px;
  pointer-events: none; /* Ensures it doesn't interfere with clicks */
`,o8=x.div``,s8=x.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  white-space: pre-line;
`,Rv=x.div`
  margin-bottom: 2rem;
`,Mv=x.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
`,l8=x.div`
  font-size: 1.1rem;
`,c8=x.ul`
  list-style: none;
  padding: 0;
`,u8=x.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`,d8=x.a`
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
`,f8=x.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`,h8=x(je)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  
  &:hover {
    color: var(--secondary);
  }
`,m8=x.div`
  display: flex;
  align-items: center;
`,p8=x.section`
  padding: 4rem 0;
  background-color: var(--card-bg);
`,g8=x.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`,y8=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,v8=x(W.create(je))`
  display: block;
  color: var(--text);
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`,x8=x.div`
  height: 200px;
  overflow: hidden;
`,b8={transition:"transform 0.5s ease"},w8=x.div`
  padding: 1rem;
`,j8=x.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`,z8=x.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
`,S8=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`,k8=x.div`
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
`,T8=({children:t,className:i="",animated:r=!0,...s})=>h.jsx(A8,{className:`gradient-text ${r?"animated":""} ${i}`,...s,children:t});x.h1`
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
`;x(W.div)`
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
`;const A8=x.span`
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
`,E8=()=>{const t=Qa(),i=Qa(),r=Qa(),s=Qa(),l=Qa(),u=Qa(),[f,g]=Hn({threshold:.2,triggerOnce:!0}),[m,p]=Hn({threshold:.2,triggerOnce:!0}),[y,b]=Hn({threshold:.2,triggerOnce:!0}),[j,z]=Hn({threshold:.2,triggerOnce:!0}),[T,O]=Hn({threshold:.2,triggerOnce:!0}),[L,C]=Hn({threshold:.2,triggerOnce:!0});return S.useEffect(()=>{g&&t.start({opacity:1,y:0,transition:{duration:.8}}),p&&i.start({opacity:1,y:0,transition:{duration:.8}}),b&&r.start({opacity:1,y:0,transition:{duration:.8}}),z&&s.start({opacity:1,y:0,transition:{duration:.8}}),O&&l.start({opacity:1,y:0,transition:{duration:.8}}),C&&u.start({opacity:1,y:0,transition:{duration:.8}})},[g,p,b,z,O,C,t,i,r,s,l,u]),h.jsxs(h.Fragment,{children:["      ",h.jsx(la,{title:"O Fundacji FLID",description:"Poznaj Fundację Ludzie-Innowacje-Design - nasza misja, zespół oraz historia działalności w obszarze zrównoważonego designu.",keywords:"fundacja flid, zespół, misja, design, o nas, zrównoważony rozwój",canonical:"/about"}),h.jsx(C8,{children:h.jsxs(Qi,{children:[h.jsxs(D8,{children:[h.jsx(R8,{children:"Fundacja Ludzie-Innowacje-Design"}),h.jsxs(M8,{children:["Projektujemy ",h.jsx(T8,{children:"przyszłość"})," łącząc ludzi i innowacje"]}),h.jsx(O8,{children:"Działamy na rzecz społeczeństwa, środowiska i gospodarki poprzez projektowanie innowacyjnych, zrównoważonych rozwiązań. Łączymy ekspertów, projektantów i społeczności, aby wspólnie tworzyć lepszą przyszłość."})]}),h.jsxs(L8,{children:[h.jsx(sn,{src:"/images/placeholder.svg",alt:"Fundacja FLID",aspectRatio:"16:9",priority:!0,className:"hero-image"}),h.jsx(B8,{})]})]})}),h.jsx(er,{ref:f,children:h.jsxs(Qi,{children:["          ",h.jsx(W.div,{initial:{opacity:0,y:30},animate:t,children:h.jsxs(Ov,{$reverseOnMobile:!1,children:[h.jsxs(Lv,{children:[h.jsx(Do,{children:"Nasza misja"}),h.jsxs(Bv,{children:[h.jsx("p",{children:"Misją Fundacji Ludzie-Innowacje-Design jest wspieranie pozytywnej zmiany społecznej poprzez projektowanie innowacyjnych, zrównoważonych rozwiązań odpowiadających na rzeczywiste wyzwania współczesnego świata."}),h.jsx("p",{children:"Tworzymy platformę współpracy dla projektantów, badaczy, edukatorów i społeczności, aby wspólnie tworzyć lepszą przyszłość zarówno w wymiarze lokalnym, jak i globalnym."})]})]}),"              ",h.jsx(_v,{children:h.jsx(yv,{height:"300px",text:"Misja Fundacji FLID",bgColor:"var(--primary-light)",textColor:"var(--primary)"})})]})})]})}),h.jsx(er,{ref:m,children:h.jsx(Qi,{children:h.jsx(W.div,{initial:{opacity:0,y:30},animate:i,children:h.jsxs(Ov,{$reverseOnMobile:!0,children:["              ",h.jsx(_v,{children:h.jsx(yv,{height:"300px",text:"Wizja Fundacji FLID",bgColor:"var(--secondary-light)",textColor:"var(--secondary)"})}),h.jsxs(Lv,{children:[h.jsx(Do,{children:"Nasza wizja"}),h.jsxs(Bv,{children:[h.jsx("p",{children:"Dążymy do świata, w którym design jest narzędziem pozytywnej zmiany społecznej, gdzie projektanci współpracują z różnymi interesariuszami, by tworzyć rozwiązania odpowiadające na rzeczywiste potrzeby ludzi, jednocześnie szanując ograniczenia planety."}),h.jsx("p",{children:"Chcemy, by myślenie projektowe stało się powszechnym narzędziem rozwiązywania problemów na różnych poziomach - od społeczności lokalnych po wyzwania globalne."})]})]})]})})})}),h.jsx(er,{ref:y,children:h.jsx(Qi,{children:h.jsxs(W.div,{initial:{opacity:0,y:30},animate:r,children:[h.jsx(Do,{$centered:!0,children:"Nasze wartości"}),h.jsxs(_8,{children:[h.jsxs(Ll,{children:[h.jsx(Bl,{children:"🌱"}),h.jsx(_l,{children:"Zrównoważony rozwój"}),h.jsx(Nl,{children:"Projektujemy z myślą o przyszłych pokoleniach, uwzględniając potrzeby społeczne, ekonomiczne i środowiskowe."})]}),h.jsxs(Ll,{children:[h.jsx(Bl,{children:"🤝"}),h.jsx(_l,{children:"Współpraca"}),h.jsx(Nl,{children:"Wierzymy w siłę wspólnego działania i łączenia różnych perspektyw w procesie projektowym."})]}),h.jsxs(Ll,{children:[h.jsx(Bl,{children:"💡"}),h.jsx(_l,{children:"Innowacyjność"}),h.jsx(Nl,{children:"Poszukujemy nowych, nieoczywistych rozwiązań, które mogą przynieść realną zmianę w otaczającym nas świecie."})]}),h.jsxs(Ll,{children:[h.jsx(Bl,{children:"♻️"}),h.jsx(_l,{children:"Odpowiedzialność"}),h.jsx(Nl,{children:"Bierzemy odpowiedzialność za efekty naszych działań i ich wpływ na społeczeństwo i środowisko."})]})]})]})})}),h.jsx(er,{ref:j,children:h.jsx(Qi,{children:h.jsxs(W.div,{initial:{opacity:0,y:30},animate:s,children:[h.jsx(Do,{$centered:!0,children:"Nasz zespół"}),h.jsxs(N8,{children:[h.jsxs(Vl,{children:[h.jsx(Pl,{children:h.jsx(Ol,{name:"Anna Kowalska"})}),h.jsxs(Ul,{children:[h.jsx(Hl,{children:"Anna Kowalska"}),h.jsx($l,{children:"Prezes Zarządu"}),h.jsx(Yl,{children:"Ekspertka w dziedzinie designu usług i innowacji społecznych. Z wykształcenia projektantka i socjolożka, z pasją do zrównoważonego rozwoju."})]})]}),h.jsxs(Vl,{children:[h.jsx(Pl,{children:h.jsx(Ol,{name:"Jan Nowak"})}),h.jsxs(Ul,{children:[h.jsx(Hl,{children:"Jan Nowak"}),h.jsx($l,{children:"Koordynator projektów"}),h.jsx(Yl,{children:"Projektant z bogatym doświadczeniem w prowadzeniu interdyscyplinarnych zespołów. Specjalista w zakresie metodologii Design Thinking."})]})]}),h.jsxs(Vl,{children:[h.jsx(Pl,{children:h.jsx(Ol,{name:"Maria Wiśniewska"})}),h.jsxs(Ul,{children:[h.jsx(Hl,{children:"Maria Wiśniewska"}),h.jsx($l,{children:"Specjalistka ds. edukacji"}),h.jsx(Yl,{children:"Pedagożka z pasją do innowacyjnych metod nauczania. Prowadzi warsztaty i szkolenia z zakresu myślenia projektowego dla dzieci i młodzieży."})]})]}),h.jsxs(Vl,{children:[h.jsx(Pl,{children:h.jsx(Ol,{name:"Piotr Zieliński"})}),h.jsxs(Ul,{children:[h.jsx(Hl,{children:"Piotr Zieliński"}),h.jsx($l,{children:"Specjalista ds. komunikacji"}),h.jsx(Yl,{children:"Ekspert w dziedzinie strategii komunikacji i marketingu. Odpowiada za promocję działań Fundacji i budowanie relacji z partnerami."})]})]})]})]})})}),h.jsx(er,{ref:T,children:h.jsx(Qi,{children:h.jsxs(W.div,{initial:{opacity:0,y:30},animate:l,children:[h.jsx(Do,{$centered:!0,children:"Historia Fundacji"}),h.jsxs(V8,{children:[h.jsxs(Ro,{children:[h.jsx(Mo,{children:"2019"}),h.jsxs(Oo,{children:[h.jsx(Lo,{children:"Powstanie Fundacji"}),h.jsx(Bo,{children:"Fundacja Ludzie-Innowacje-Design została powołana do życia przez grupę projektantów, edukatorów i aktywistów z Bielska-Białej."})]})]}),h.jsxs(Ro,{children:[h.jsx(Mo,{children:"2020"}),h.jsxs(Oo,{children:[h.jsx(Lo,{children:"Pierwsze projekty"}),h.jsx(Bo,{children:'Zrealizowanie pierwszych projektów społecznych, w tym "Ławeczki Beskidzkiej" oraz uruchomienie "Artystycznej Chaty na Trzonce".'})]})]}),h.jsxs(Ro,{children:[h.jsx(Mo,{children:"2021"}),h.jsxs(Oo,{children:[h.jsx(Lo,{children:"Rozwój programów edukacyjnych"}),h.jsx(Bo,{children:"Uruchomienie programu warsztatów Design Thinking dla szkół oraz stworzenie portalu D-spot.pl poświęconego designowi."})]})]}),h.jsxs(Ro,{children:[h.jsx(Mo,{children:"2022"}),h.jsxs(Oo,{children:[h.jsx(Lo,{children:"Międzynarodowa współpraca"}),h.jsx(Bo,{children:'Rozpoczęcie współpracy z partnerami z Czech i Słowacji, organizacja międzynarodowych warsztatów "Energia Jutra".'})]})]}),h.jsxs(Ro,{children:[h.jsx(Mo,{children:"2023"}),h.jsxs(Oo,{children:[h.jsx(Lo,{children:"Otwarcie BB__Design Lab"}),h.jsx(Bo,{children:"Uruchomienie laboratorium projektowego w Bielsku-Białej, przestrzeni dla kreatynych działań i współpracy."})]})]})]})]})})}),h.jsx(er,{ref:L,children:h.jsx(Qi,{children:h.jsx(W.div,{initial:{opacity:0,y:30},animate:u,children:h.jsx(P8,{children:h.jsxs(U8,{children:[h.jsx(oC,{level:2,children:"Dołącz do nas!"}),h.jsx(H8,{children:"Jeśli podzielasz nasze wartości i chcesz wspólnie z nami projektować lepszą przyszłość, skontaktuj się z nami. Zawsze szukamy nowych współpracowników, wolontariuszy i partnerów."}),h.jsx($8,{children:h.jsx(Sh,{to:"/contact",children:"Skontaktuj się z nami"})})]})})})})})]})},Qi=x.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,C8=x.section`
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
`,D8=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin-bottom: 3rem;
  
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`,R8=x.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
  opacity: 0.9;
`,M8=x.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`,O8=x.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
`,L8=x.div`
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
`,B8=x.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: var(--accent);
  opacity: 0.15;
  border-radius: 50%;
  bottom: -50px;
  right: -50px;
  z-index: 1;
`,er=x.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`,Ov=x.div`
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
`,Lv=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Do=x.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--heading);
  text-align: ${({$centered:t})=>t?"center":"left"};
`,Bv=x.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--text);
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`,_v=x.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,_8=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,Ll=x.div`
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
`,Bl=x.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,_l=x.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--heading);
`,Nl=x.p`
  color: var(--text-secondary);
  line-height: 1.6;
`,N8=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,Vl=x.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover, &:focus-within {
    transform: translateY(-10px);
  }
`,Pl=x.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
`,Ul=x.div`
  padding: 1.5rem;
`,Hl=x.h3`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: var(--heading);
`,$l=x.p`
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 1rem;
`,Yl=x.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,V8=x.div`
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
`,Ro=x.div`
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
`,Mo=x.div`
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
`,Oo=x.div`
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
`,Lo=x.h3`
  margin-bottom: 0.5rem;
  color: var(--heading);
`,Bo=x.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`,P8=x.div`
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
`,U8=x.div`
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
`,H8=x.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 1.5rem 0 2rem;
  color: var(--text);
`,$8=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`,Y8=(t,i,r)=>{const[s,l]=S.useState(t),[u,f]=S.useState({}),[g,m]=S.useState(!1),[p,y]=S.useState(!1),[b,j]=S.useState(null);return{values:s,errors:u,generalError:b,isSubmitting:g,isSubmitted:p,handleChange:C=>{const{name:V,value:D,type:X,checked:P}=C.target;l({...s,[V]:X==="checkbox"?P:D}),u[V]&&f({...u,[V]:null})},handleBlur:C=>{const{name:V}=C.target,D=i?i({[V]:s[V]}):{};f({...u,...D})},handleSubmit:async C=>{C.preventDefault(),m(!0),j(null);const V=i?i(s):{};if(f(V),Object.keys(V).length===0)try{await r(s),y(!0)}catch(D){j(D.message||"Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.")}m(!1)},resetForm:()=>{l(t),f({}),y(!1),j(null)}}},G8=()=>{const t=y=>{const b={};return(!y.name||y.name.trim().length<3)&&(b.name="Imię i nazwisko są wymagane (min. 3 znaki)"),(!y.email||!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(y.email))&&(b.email="Wprowadź poprawny adres email"),(!y.message||y.message.trim().length<10)&&(b.message="Wiadomość jest wymagana (min. 10 znaków)"),b},i=async(y,{resetForm:b})=>{try{await new Promise(j=>setTimeout(j,1500)),console.log("Form submitted successfully:",y),b()}catch(j){return console.error("Error submitting form:",j),"Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie."}},{values:r,errors:s,generalError:l,isSubmitting:u,isSubmitted:f,handleChange:g,handleBlur:m,handleSubmit:p}=Y8({name:"",email:"",phone:"",contactType:"",message:""},t,i);return h.jsxs(h.Fragment,{children:[h.jsx(la,{title:"Kontakt - FLID Foundation",description:"Skontaktuj się z nami. FLID Foundation - Fundacja na rzecz rozwoju nauki, kultury i edukacji.",keywords:"kontakt, FLID Foundation, fundacja, nauka, kultura, edukacja"}),h.jsxs(q8,{children:[h.jsx(X8,{children:h.jsxs(W.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8},children:[h.jsx(F8,{children:"Kontakt"}),h.jsxs(I8,{children:["Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania",h.jsx("br",{}),"i omówić możliwości współpracy"]})]})}),h.jsx(K8,{children:h.jsxs(Z8,{children:[h.jsxs(Q8,{as:W.div,initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2},children:[h.jsxs(W8,{children:[h.jsx(J8,{children:"Informacje kontaktowe"}),h.jsx(e9,{children:"Skontaktuj się z nami w dowolny sposób, który jest dla Ciebie najwygodniejszy. Odpowiemy tak szybko, jak to możliwe."})]}),h.jsxs(Gl,{children:[h.jsx(ql,{children:"Adres email"}),h.jsx(Xl,{children:"kontakt@flidfoundation.org"})]}),h.jsxs(Gl,{children:[h.jsx(ql,{children:"Telefon"}),h.jsx(Xl,{children:"+48 123 456 789"})]}),h.jsxs(Gl,{children:[h.jsx(ql,{children:"Adres"}),h.jsxs(Xl,{children:["ul. Przykładowa 123",h.jsx("br",{}),"00-001 Warszawa",h.jsx("br",{}),"Polska"]})]}),h.jsxs(Gl,{children:[h.jsx(ql,{children:"Godziny pracy"}),h.jsxs(Xl,{children:["Poniedziałek - Piątek: 9:00 - 17:00",h.jsx("br",{}),"Sobota - Niedziela: Zamknięte"]})]})]}),h.jsxs(t9,{as:W.div,initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.4},children:[h.jsx(n9,{children:"Wyślij wiadomość"}),h.jsxs(i9,{onSubmit:p,children:[h.jsxs(a9,{children:[h.jsxs(Fl,{type:"button",$active:r.contactType==="general",onClick:()=>g({target:{name:"contactType",value:"general"}}),children:[h.jsx(Il,{children:"Zapytanie ogólne"}),h.jsx(Kl,{children:"Pytania dotyczące naszej działalności"})]}),h.jsxs(Fl,{type:"button",$active:r.contactType==="partnership",onClick:()=>g({target:{name:"contactType",value:"partnership"}}),children:[h.jsx(Il,{children:"Współpraca"}),h.jsx(Kl,{children:"Propozycje partnerstwa i współpracy"})]}),h.jsxs(Fl,{type:"button",$active:r.contactType==="project",onClick:()=>g({target:{name:"contactType",value:"project"}}),children:[h.jsx(Il,{children:"Projekt"}),h.jsx(Kl,{children:"Informacje o projektach i programach"})]}),h.jsxs(Fl,{type:"button",$active:r.contactType==="media",onClick:()=>g({target:{name:"contactType",value:"media"}}),children:[h.jsx(Il,{children:"Media"}),h.jsx(Kl,{children:"Zapytania prasowe i medialne"})]})]}),h.jsxs(r9,{children:[h.jsxs(Zl,{children:[h.jsx(Ql,{children:"Imię i nazwisko *"}),h.jsx(Uf,{type:"text",name:"name",value:r.name,onChange:g,onBlur:m,$hasError:s.name,placeholder:"Wprowadź swoje imię i nazwisko"}),s.name&&h.jsx(Wl,{children:s.name})]}),h.jsxs(Zl,{children:[h.jsx(Ql,{children:"Email *"}),h.jsx(Uf,{type:"email",name:"email",value:r.email,onChange:g,onBlur:m,$hasError:s.email,placeholder:"twoj@email.com"}),s.email&&h.jsx(Wl,{children:s.email})]})]}),h.jsxs(Zl,{children:[h.jsx(Ql,{children:"Telefon"}),h.jsx(Uf,{type:"tel",name:"phone",value:r.phone,onChange:g,placeholder:"+48 123 456 789"})]}),h.jsxs(Zl,{children:[h.jsx(Ql,{children:"Wiadomość *"}),h.jsx(o9,{name:"message",value:r.message,onChange:g,onBlur:m,$hasError:s.message,placeholder:"Opisz szczegółowo swoje zapytanie lub propozycję...",rows:6}),s.message&&h.jsx(Wl,{children:s.message})]}),l&&h.jsx(Wl,{children:l}),f&&!l&&h.jsx(s9,{children:"Dziękujemy za wiadomość! Odpowiemy tak szybko, jak to możliwe."}),h.jsx(l9,{type:"submit",disabled:u,$isLoading:u,children:u?"Wysyłanie...":"Wyślij wiadomość"})]})]})]})})]})]})},q8=x.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
  transition: background-color 0.3s ease, color 0.3s ease;
`,X8=x.section`
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
`,F8=x.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 200;
  letter-spacing: -0.02em;
  margin: 0 0 40px 0;
  color: var(--text);
  line-height: 0.9;
  transition: color 0.3s ease;
`,I8=x.p`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 300;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  transition: color 0.3s ease;
`,K8=x.section`
  padding: 120px 60px;
  
  @media (max-width: 768px) {
    padding: 80px 30px;
  }
`,Z8=x.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 120px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
`,Q8=x.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`,W8=x.div`
  margin-bottom: 20px;
`,J8=x.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 30px 0;
  color: var(--text);
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
`,e9=x.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
  transition: color 0.3s ease;
`,Gl=x.div`
  border-left: 2px solid var(--text);
  padding-left: 30px;
  transition: border-color 0.3s ease;
`,ql=x.h3`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin: 0 0 15px 0;
  transition: color 0.3s ease;
`,Xl=x.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text);
  font-weight: 300;
  transition: color 0.3s ease;
`,t9=x.div`
  background: var(--surface);
  padding: 80px;
  border: 1px solid var(--border);
  transition: background-color 0.3s ease, border-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`,n9=x.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 60px 0;
  color: var(--text);
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
`,i9=x.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,a9=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Fl=x.button`
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
`,Il=x.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 10px 0;
`,Kl=x.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
  line-height: 1.4;
`,r9=x.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Zl=x.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Ql=x.label`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  transition: color 0.3s ease;
`,Uf=x.input`
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
`,o9=x.textarea`
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
`,Wl=x.span`
  font-size: 0.9rem;
  color: #dc3545;
  margin-top: -10px;
`,s9=x.div`
  padding: 20px;
  background: var(--success-bg, #d4edda);
  color: var(--success-text, #155724);
  border: 1px solid var(--success-border, #c3e6cb);
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`,l9=x.button`
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
`,c9=dw`
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
`;const ww=Ci`
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
  ${ww}
`;x(je)`
  ${ww}
  text-decoration: none;
`;const jw=Ci`
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
  ${jw}
`;x(je)`
  ${jw}
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
`;x(W.button)`
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
`;const u9=fw`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`,zw=Ci`
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
    animation: ${u9} 0.5s linear forwards;
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
  ${zw}
  
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
`;x(je)`
  ${zw}
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
`;const Sw=Ci`
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
  ${Sw}
`;x(je)`
  ${Sw}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;const kw=fw`
  0% { width: 0; left: 50%; }
  100% { width: 100%; left: 0; }
`,Tw=Ci`
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
  ${Tw}
  
  &:hover .text-line {
    animation: ${kw} 0.4s forwards;
  }
`;x(je)`
  ${Tw}
  text-decoration: none;
  display: inline-block;
  
  &:hover .text-line {
    animation: ${kw} 0.4s forwards;
  }
`;x(W.div)`
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
`;x(W.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
`;x(W.div)`
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
`;x(je)`
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
`;x(W.div)`
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
`;const d9=x(W.div)`
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
`;x(W.div)`
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
  
  ${d9}:hover & {
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
`;const Aw=x.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 2rem;
  background-color: var(--card-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;x(Aw)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;x(Aw)`
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
`;const Wi=({children:t})=>{const i={initial:{opacity:0},animate:{opacity:1,transition:{duration:.4,ease:"easeOut"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}}};return h.jsx(W.div,{initial:"initial",animate:"animate",exit:"exit",variants:i,style:{width:"100%",backgroundColor:"var(--background)"},children:t})},f9=({setIsTransitioning:t})=>{const i=cn();return S.useEffect(()=>{t==null||t(!0);const r=setTimeout(()=>{t==null||t(!1)},400);return()=>clearTimeout(r)},[i,t]),h.jsx("div",{className:"animated-routes-container",children:h.jsx(Ai,{mode:"wait",initial:!1,onExitComplete:()=>{window.scrollTo(0,0)},children:h.jsxs(Iz,{location:i,children:[h.jsx(wi,{path:"/",element:h.jsx(Wi,{children:h.jsx(W6,{})})}),h.jsx(wi,{path:"/projects",element:h.jsx(Wi,{children:h.jsx(cC,{})})}),h.jsx(wi,{path:"/projects/:slug",element:h.jsx(Wi,{children:h.jsx(UC,{})})}),h.jsx(wi,{path:"/publications",element:h.jsx(Wi,{children:h.jsx(jD,{})})}),h.jsx(wi,{path:"/publications/:slug",element:h.jsx(Wi,{children:h.jsx(GD,{})})}),h.jsx(wi,{path:"/about",element:h.jsx(Wi,{children:h.jsx(E8,{})})}),h.jsx(wi,{path:"/contact",element:h.jsx(Wi,{children:h.jsx(G8,{})})})]},i.pathname)})})},Nv=()=>{const t=kc();return S.useEffect(()=>{const r=new URLSearchParams(window.location.search).get("redirect");if(r){const s=window.location.pathname;window.history.replaceState({},"",s),t(r,{replace:!0})}},[t]),null};function h9(){const[t,i]=S.useState(!1);return h.jsx(cx,{children:h.jsxs(E5,{children:[h.jsx(c9,{}),"        ",h.jsxs(v5,{basename:"/flid",children:[h.jsx(Nv,{}),h.jsx(t6,{isTransitioning:t}),h.jsxs(WE,{children:[h.jsx(Nv,{}),h.jsx(f9,{setIsTransitioning:i})]})]})]})})}class m9{constructor(){this.isReducedMotion=this.checkReducedMotion(),this.isLowPowerMode=this.checkLowPowerMode(),this.reduceAnimations=this.isReducedMotion||this.isLowPowerMode,this.applyOptimizations(),this.addMediaQueryListeners()}checkReducedMotion(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}checkLowPowerMode(){return typeof window>"u"||"getBattery"in navigator&&navigator.getBattery().then(i=>{i.level<.2&&!i.charging&&(this.isLowPowerMode=!0,this.applyOptimizations())}).catch(()=>{}),!1}applyOptimizations(){typeof document>"u"||(document.documentElement.style.setProperty("--animation-duration-multiplier",this.reduceAnimations?"0.5":"1"),document.documentElement.style.setProperty("--animation-enabled",this.reduceAnimations?"0":"1"),document.documentElement.style.setProperty("--blur-enabled",this.reduceAnimations?"0":"1"),document.documentElement.style.setProperty("--blur-strength",this.reduceAnimations?"0px":"var(--blur-quality, 5px)"),document.documentElement.style.setProperty("--effects-level",this.reduceAnimations?"0":"1"),this.reduceAnimations&&(document.body.classList.add("reduced-animations"),document.body.classList.add("performance-optimized")))}addMediaQueryListeners(){typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",i=>{this.isReducedMotion=i.matches,this.reduceAnimations=this.isReducedMotion||this.isLowPowerMode,this.applyOptimizations()})}}typeof window<"u"&&new m9;class p9{constructor(){this.addEventListeners(),this.detectDisplaySize()}detectDisplaySize(){const i=window.screen.width,r=window.screen.height,s=document.body;i>=3840||r>=2160?(s.classList.add("ultra-hd-display"),s.classList.add("hd-display")):(i>=1920||r>=1080)&&s.classList.add("hd-display")}optimizeForDisplayType(){document.documentElement.style.setProperty("--transition-multiplier","1.0"),document.documentElement.style.setProperty("--blur-quality","0px")}enhanceNavigationTransitions(){document.querySelectorAll('a[href^="/"]').forEach(r=>{r.addEventListener("click",s=>{if(!s.ctrlKey&&!s.metaKey){const l=window.location.pathname,u=r.getAttribute("href");l!==u&&(document.documentElement.classList.add("page-transition-active"),setTimeout(()=>{document.documentElement.classList.remove("page-transition-active")},700))}})})}addEventListeners(){window.addEventListener("DOMContentLoaded",()=>{this.detectDisplaySize(),this.optimizeForDisplayType(),this.enhanceNavigationTransitions()}),window.addEventListener("resize",()=>{this.detectDisplaySize(),this.optimizeForDisplayType()})}}let Vv;typeof window<"u"&&!Vv&&(Vv=new p9);const g9=()=>{if(typeof document>"u")return;const t=["/images/partners/partner1.svg","/images/partners/partner2.svg"],i=r=>{let s=0;r.forEach(l=>{setTimeout(()=>{const u=new Image;u.fetchPriority="high",u.loading="eager",u.src=l},s),s+=100})};navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))?console.debug("[Preloader] Data-saving or slow connection detected, limiting preloads"):i(t)},y9=()=>{const t=window.devicePixelRatio||1;document.documentElement.style.setProperty("--device-pixel-ratio",t),document.documentElement.style.setProperty("--blur-quality","0px")},v9=()=>{document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll('.creative-navbar a[href^="/#"], .creative-navbar a[href^="#"]').forEach(i=>{i.addEventListener("click",r=>{var g;const s=i.getAttribute("href"),l=s.startsWith("#"),u=s.replace(/\/?#/,""),f=document.getElementById(u);if(f){r.preventDefault(),i.classList.add("scrolling-active");const m=((g=document.querySelector(".creative-navbar"))==null?void 0:g.offsetHeight)||80,p=f.getBoundingClientRect().top+window.pageYOffset-m-20;window.scrollTo({top:p,behavior:"smooth"}),setTimeout(()=>{i.classList.remove("scrolling-active")},1e3);const y=l?`#${u}`:`/#${u}`;history.pushState(null,null,y)}})})})};g9();y9();v9();nz.createRoot(document.getElementById("root")).render(h.jsx(tt.StrictMode,{children:h.jsx(h9,{})}));
