var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.0`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),_e=me(null),ve=me(null),ye=me(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nf(t),e=rf(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function xe(){he(ge),he(_e),he(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=rf(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(he(ge),he(_e)),ye.current===e&&(he(ye),mp._currentValue=de)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:Ap(e.type)):e}function ht(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Df(e);e!==null;){if(n=e[_t])return n;e=Df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function qt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Jt=/[\n"\\]/g;function Yt(e){return e.replace(Jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Xt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Qt(e,o,Ht(n)):Qt(e,o,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Qt(e,t,n){t===`number`&&qt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function $t(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function en(e,t,n){if(t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ht(n)}function tn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function nn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function an(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||rn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function on(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&an(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&an(e,o,t[o])}function sn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var cn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),ln=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function un(e){return ln.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function O(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Yt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:en(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(Nu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,`passive`,{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var k={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=kn(k),jn=h({},k,{view:0,detail:0}),A=kn(jn),Mn,j,Nn,Pn=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(Mn=e.screenX-Nn.screenX,j=e.screenY-Nn.screenY):j=Mn=0,Nn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:j}}),Fn=kn(Pn),In=h({},Pn,{dataTransfer:0}),Ln=kn(In),Rn=h({},jn,{relatedTarget:0}),zn=kn(Rn),Bn=h({},k,{animationName:0,elapsedTime:0,pseudoElement:0}),Vn=kn(Bn),Hn=h({},k,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}}),Un=kn(Hn),Wn=h({},k,{data:0}),M=kn(Wn),Gn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qn[e])?!!t[e]:!1}function Yn(){return Jn}var Xn=h({},jn,{key:function(e){if(e.key){var t=Gn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}}),Zn=kn(Xn),Qn=h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$n=kn(Qn),er=h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn}),tr=kn(er),nr=h({},k,{propertyName:0,elapsedTime:0,pseudoElement:0}),rr=kn(nr),ir=h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ar=kn(ir),or=h({},k,{newState:0,oldState:0}),sr=kn(or),cr=[9,13,27,32],lr=yn&&`CompositionEvent`in window,ur=null;yn&&`documentMode`in document&&(ur=document.documentMode);var dr=yn&&`TextEvent`in window&&!ur,fr=yn&&(!lr||ur&&8<ur&&11>=ur),pr=` `,mr=!1;function hr(e,t){switch(e){case`keyup`:return cr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function gr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var _r=!1;function vr(e,t){switch(e){case`compositionend`:return gr(t);case`keypress`:return t.which===32?(mr=!0,pr):null;case`textInput`:return e=t.data,e===pr&&mr?null:e;default:return null}}function yr(e,t){if(_r)return e===`compositionend`||!lr&&hr(e,t)?(e=Tn(),wn=Cn=Sn=null,_r=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return fr&&t.locale!==`ko`?null:t.data;default:return null}}var br={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!br[e.type]:t===`textarea`}function Sr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Vd(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Cr=null,wr=null;function Tr(e){Pd(e,0)}function Er(e){var t=Ot(e);if(Kt(t))return e}function Dr(e,t){if(e===`change`)return t}var Or=!1;if(yn){var kr;if(yn){var Ar=`oninput`in document;if(!Ar){var jr=document.createElement(`div`);jr.setAttribute(`oninput`,`return;`),Ar=typeof jr.oninput==`function`}kr=Ar}else kr=!1;Or=kr&&(!document.documentMode||9<document.documentMode)}function Mr(){Cr&&(Cr.detachEvent(`onpropertychange`,Nr),wr=Cr=null)}function Nr(e){if(e.propertyName===`value`&&Er(wr)){var t=[];Sr(t,wr,e,fn(e)),_n(Tr,t)}}function Pr(e,t,n){e===`focusin`?(Mr(),Cr=t,wr=n,Cr.attachEvent(`onpropertychange`,Nr)):e===`focusout`&&Mr()}function Fr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Er(wr)}function Ir(e,t){if(e===`click`)return Er(t)}function Lr(e,t){if(e===`input`||e===`change`)return Er(t)}function Rr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var zr=typeof Object.is==`function`?Object.is:Rr;function Br(e,t){if(zr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!zr(e[i],t[i]))return!1}return!0}function Vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hr(e,t){var n=Vr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Vr(n)}}function Ur(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ur(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qt(e.document)}return t}function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Kr=yn&&`documentMode`in document&&11>=document.documentMode,qr=null,Jr=null,Yr=null,Xr=!1;function Zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xr||qr==null||qr!==qt(r)||(r=qr,`selectionStart`in r&&Gr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&Br(Yr,r)||(Yr=r,r=Vd(Jr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=qr)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var $r={animationend:Qr(`Animation`,`AnimationEnd`),animationiteration:Qr(`Animation`,`AnimationIteration`),animationstart:Qr(`Animation`,`AnimationStart`),transitionrun:Qr(`Transition`,`TransitionRun`),transitionstart:Qr(`Transition`,`TransitionStart`),transitioncancel:Qr(`Transition`,`TransitionCancel`),transitionend:Qr(`Transition`,`TransitionEnd`)},ei={},ti={};yn&&(ti=document.createElement(`div`).style,`AnimationEvent`in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),`TransitionEvent`in window||delete $r.transitionend.transition);function ni(e){if(ei[e])return ei[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ti)return ei[e]=t[n];return e}var ri=ni(`animationend`),ii=ni(`animationiteration`),ai=ni(`animationstart`),oi=ni(`transitionrun`),si=ni(`transitionstart`),ci=ni(`transitioncancel`),li=ni(`transitionend`),ui=new Map,di=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);di.push(`scrollEnd`);function fi(e,t){ui.set(e,t),Nt(t,[e])}var pi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},mi=[],hi=0,gi=0;function _i(){for(var e=hi,t=gi=hi=0;t<e;){var n=mi[t];mi[t++]=null;var r=mi[t];mi[t++]=null;var i=mi[t];mi[t++]=null;var a=mi[t];if(mi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&xi(n,i,a)}}function vi(e,t,n,r){mi[hi++]=e,mi[hi++]=t,mi[hi++]=n,mi[hi++]=r,gi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function yi(e,t,n,r){return vi(e,t,n,r),Si(e)}function bi(e,t){return vi(e,null,null,t),Si(e)}function xi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Si(e){if(50<wu)throw wu=0,Tu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ci={};function wi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(e,t,n,r){return new wi(e,t,n,r)}function Ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,t){var n=e.alternate;return n===null?(n=Ti(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Oi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ki(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)Ei(e)&&(s=1);else if(typeof e==`string`)s=ap(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=Ti(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return Ai(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=Ti(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=Ti(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=Ti(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ti(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ai(e,t,n,r){return e=Ti(7,e,r,t),e.lanes=n,e}function ji(e,t,n){return e=Ti(6,e,null,t),e.lanes=n,e}function Mi(e){var t=Ti(18,null,null,0);return t.stateNode=e,t}function Ni(e,t,n){return t=Ti(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pi=new WeakMap;function Fi(e,t){if(typeof e==`object`&&e){var n=Pi.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Pi.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Ii=[],Li=0,Ri=null,zi=0,Bi=[],Vi=0,Hi=null,Ui=1,Wi=``;function Gi(e,t){Ii[Li++]=zi,Ii[Li++]=Ri,Ri=e,zi=t}function Ki(e,t,n){Bi[Vi++]=Ui,Bi[Vi++]=Wi,Bi[Vi++]=Hi,Hi=e;var r=Ui;e=Wi;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ui=1<<32-Je(t)+i|n<<i|r,Wi=a+e}else Ui=1<<a|n<<i|r,Wi=e}function qi(e){e.return!==null&&(Gi(e,1),Ki(e,1,0))}function Ji(e){for(;e===Ri;)Ri=Ii[--Li],Ii[Li]=null,zi=Ii[--Li],Ii[Li]=null;for(;e===Hi;)Hi=Bi[--Vi],Bi[Vi]=null,Wi=Bi[--Vi],Bi[Vi]=null,Ui=Bi[--Vi],Bi[Vi]=null}function Yi(e,t){Bi[Vi++]=Ui,Bi[Vi++]=Wi,Bi[Vi++]=Hi,Ui=t.id,Wi=t.overflow,Hi=e}var Xi=null,N=null,P=!1,Zi=null,Qi=!1,$i=Error(i(519));function ea(e){var t=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``));throw oa(Fi(t,e)),$i}function ta(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<Md.length;n++)Q(Md[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),tn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||qd(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=O),t=!0):t=!1,t||ea(e,!0)}function na(e){for(Xi=e.return;Xi;)switch(Xi.tag){case 5:case 31:case 13:Qi=!1;return;case 27:case 3:Qi=!0;return;default:Xi=Xi.return}}function ra(e){if(e!==Xi)return!1;if(!P)return na(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||af(e.type,e.memoizedProps)),n=!n),n&&N&&ea(e),na(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=Ef(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=Ef(e)}else t===27?(t=N,mf(e.type)?(e=Tf,Tf=null,N=e):N=t):N=Xi?wf(e.stateNode.nextSibling):null;return!0}function ia(){N=Xi=null,P=!1}function aa(){var e=Zi;return e!==null&&(uu===null?uu=e:uu.push.apply(uu,e),Zi=null),e}function oa(e){Zi===null?Zi=[e]:Zi.push(e)}var sa=me(null),ca=null,la=null;function ua(e,t,n){D(sa,t._currentValue),t._currentValue=n}function da(e){e._currentValue=sa.current,he(sa)}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function pa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),fa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),fa(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ma(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;zr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[mp]:e.push(mp))}a=a.return}e!==null&&pa(t,e,n,r),t.flags|=262144}function ha(e){for(e=e.firstContext;e!==null;){if(!zr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){ca=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _a(e){return F(ca,e)}function va(e,t){return ca===null&&ga(e),F(e,t)}function F(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},la===null){if(e===null)throw Error(i(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return n}var ya=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ba=t.unstable_scheduleCallback,I=t.unstable_NormalPriority,xa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sa(){return{controller:new ya,data:new Map,refCount:0}}function Ca(e){e.refCount--,e.refCount===0&&ba(I,function(){e.controller.abort()})}var wa=null,Ta=0,Ea=0,L=null;function Da(e,t){if(wa===null){var n=wa=[];Ta=0,Ea=wd(),L={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ta++,t.then(Oa,Oa),t}function Oa(){if(--Ta===0&&wa!==null){L!==null&&(L.status=`fulfilled`);var e=wa;wa=null,Ea=0,L=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ka(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Aa=T.S;T.S=function(e,t){pu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&Da(e,t),Aa!==null&&Aa(e,t)};var ja=me(null);function Ma(){var e=ja.current;return e===null?q.pooledCache:e}function Na(e,t){t===null?D(ja,ja.current):D(ja,t.pool)}function Pa(){var e=Ma();return e===null?null:{parent:xa._currentValue,pool:e}}var Fa=Error(i(460)),Ia=Error(i(474)),La=Error(i(542)),Ra={then:function(){}};function za(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ba(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(O,O),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Wa(e),e;default:if(typeof t.status==`string`)t.then(O,O);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Wa(e),e}throw Ha=t,Fa}}function Va(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ha=e,Fa):e}}var Ha=null;function Ua(){if(Ha===null)throw Error(i(459));var e=Ha;return Ha=null,e}function Wa(e){if(e===Fa||e===La)throw Error(i(483))}var Ga=null,Ka=0;function qa(e){var t=Ka;return Ka+=1,Ga===null&&(Ga=[]),Ba(Ga,e,t)}function R(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ja(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ya(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ji(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Va(i)===t.type)?(t=a(t,n.props),R(t,n),t.return=e,t):(t=ki(n.type,n.key,n.props,null,e.mode,r),R(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ni(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ai(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ji(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ki(t.type,t.key,t.props,null,e.mode,n),R(n,t),n.return=e,n;case v:return t=Ni(t,e.mode,n),t.return=e,t;case re:return t=Va(t),f(e,t,n)}if(ue(t)||se(t))return t=Ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,qa(t),n);if(t.$$typeof===C)return f(e,va(e,t),n);Ja(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Va(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,qa(n),r);if(n.$$typeof===C)return p(e,t,va(e,n),r);Ja(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Va(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,qa(r),i);if(r.$$typeof===C)return m(e,t,n,va(t,r),i);Ja(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Gi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Gi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Gi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Gi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Gi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Gi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Va(l)===r.type){n(e,r.sibling),c=a(r,o.props),R(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Ai(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ki(o.type,o.key,o.props,null,e.mode,c),R(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ni(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Va(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,qa(o),c);if(o.$$typeof===C)return b(e,r,va(e,o),c);Ja(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ji(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ka=0;var i=b(e,t,n,r);return Ga=null,i}catch(t){if(t===Fa||t===La)throw t;var a=Ti(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Xa=Ya(!0),Za=Ya(!1),Qa=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function to(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function no(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Si(e),xi(e,null,n),t}return vi(e,r,t,n),Si(e)}function ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function io(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ao=!1;function oo(){if(ao){var e=L;if(e!==null)throw e}}function so(e,t,n,r){ao=!1;var i=e.updateQueue;Qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Ea&&(ao=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),iu|=o,e.lanes=o,e.memoizedState=d}}function co(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function lo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)co(n[e],t)}var uo=me(null),fo=me(0);function po(e,t){e=nu,D(fo,e),D(uo,t),nu=e|t.baseLanes}function mo(){D(fo,nu),D(uo,uo.current)}function ho(){nu=fo.current,he(uo),he(fo)}var go=me(null),_o=null;function vo(e){var t=e.alternate;D(Co,Co.current&1),D(go,e),_o===null&&(t===null||uo.current!==null||t.memoizedState!==null)&&(_o=e)}function yo(e){D(Co,Co.current),D(go,e),_o===null&&(_o=e)}function bo(e){e.tag===22?(D(Co,Co.current),D(go,e),_o===null&&(_o=e)):xo(e)}function xo(){D(Co,Co.current),D(go,go.current)}function So(e){he(go),_o===e&&(_o=null),he(Co)}var Co=me(0);function wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xf(n)||Sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var To=0,z=null,B=null,Eo=null,Do=!1,Oo=!1,ko=!1,Ao=0,jo=0,Mo=null,No=0;function V(){throw Error(i(321))}function Po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zr(e[n],t[n]))return!1;return!0}function Fo(e,t,n,r,i,a){return To=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?$s:ec,ko=!1,a=n(r,i),ko=!1,Oo&&(a=Lo(t,n,r,i)),Io(e),a}function Io(e){T.H=Qs;var t=B!==null&&B.next!==null;if(To=0,Eo=B=z=null,Do=!1,jo=0,Mo=null,t)throw Error(i(300));e===null||U||(e=e.dependencies,e!==null&&ha(e)&&(U=!0))}function Lo(e,t,n,r){z=e;var a=0;do{if(Oo&&(Mo=null),jo=0,Oo=!1,25<=a)throw Error(i(301));if(a+=1,Eo=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=tc,o=t(n,r)}while(Oo);return o}function Ro(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Go(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function zo(){var e=Ao!==0;return Ao=0,e}function Bo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vo(e){if(Do){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Do=!1}To=0,Eo=B=z=null,Oo=!1,jo=Ao=0,Mo=null}function Ho(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Eo===null?z.memoizedState=Eo=e:Eo=Eo.next=e,Eo}function Uo(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=Eo===null?z.memoizedState:Eo.next;if(t!==null)Eo=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},Eo===null?z.memoizedState=Eo=e:Eo=Eo.next=e}return Eo}function Wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(e){var t=jo;return jo+=1,Mo===null&&(Mo=[]),e=Ba(Mo,e,t),t=z,(Eo===null?t.memoizedState:Eo.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?$s:ec),e}function Ko(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Go(e);if(e.$$typeof===C)return _a(e)}throw Error(i(438,String(e)))}function qo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Wo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Jo(e,t){return typeof t==`function`?t(e):t}function Yo(e){var t=Uo();return Xo(t,B,e)}function Xo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(To&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ea&&(d=!0);else if((To&p)===p){u=u.next,p===Ea&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,iu|=p;f=u.action,ko&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,iu|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!zr(o,e.memoizedState)&&(U=!0,d&&(n=L,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Zo(e){var t=Uo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);zr(o,t.memoizedState)||(U=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qo(e,t,n){var r=z,a=Uo(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!zr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,U=!0),a=a.queue,ws(ts.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||Eo!==null&&Eo.memoizedState.tag&1){if(r.flags|=2048,bs(9,{destroy:void 0},es.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||To&127||$o(r,t,n)}return n}function $o(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Wo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function es(e,t,n,r){t.value=n,t.getSnapshot=r,ns(t)&&rs(e)}function ts(e,t,n){return n(function(){ns(t)&&rs(e)})}function ns(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zr(e,n)}catch{return!0}}function rs(e){var t=bi(e,2);t!==null&&Ou(t,e,2)}function os(e){var t=Ho();if(typeof e==`function`){var n=e;if(e=n(),ko){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:e},t}function ss(e,t,n,r){return e.baseState=n,Xo(e,B,typeof r==`function`?r:Jo)}function cs(e,t,n,r,a){if(Ys(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ls(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ls(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),us(e,t,s)}catch(n){fs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),us(e,t,a)}catch(n){fs(e,t,n)}}function us(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ds(e,t,n)},function(n){return fs(e,t,n)}):ds(e,t,n)}function ds(e,t,n){t.status=`fulfilled`,t.value=n,ps(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ls(e,n)))}function fs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ps(t),t=t.next;while(t!==r)}e.action=null}function ps(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ms(e,t){return t}function hs(e,t){if(P){var n=q.formState;if(n!==null){a:{var r=z;if(P){if(N){b:{for(var i=N,a=Qi;i.nodeType!==8;){if(!a){i=null;break b}if(i=wf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=wf(i.nextSibling),r=i.data===`F!`;break a}}ea(r)}r=!1}r&&(t=n[0])}}return n=Ho(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:t},n.queue=r,n=Ks.bind(null,z,r),r.dispatch=n,r=os(!1),a=Js.bind(null,z,!1,r.queue),r=Ho(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=cs.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function gs(e){var t=Uo();return _s(t,B,e)}function _s(e,t,n){if(t=Xo(e,t,ms)[0],e=Yo(Jo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Go(t)}catch(e){throw e===Fa?La:e}else r=t;t=Uo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,bs(9,{destroy:void 0},vs.bind(null,i,n),null)),[r,a,e]}function vs(e,t){e.action=t}function ys(e){var t=Uo(),n=B;if(n!==null)return _s(t,n,e);Uo(),t=t.memoizedState,n=Uo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function bs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Wo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function xs(){return Uo().memoizedState}function Ss(e,t,n,r){var i=Ho();z.flags|=e,i.memoizedState=bs(1|t,{destroy:void 0},n,r===void 0?null:r)}function H(e,t,n,r){var i=Uo();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Po(r,B.memoizedState.deps)?i.memoizedState=bs(t,a,n,r):(z.flags|=e,i.memoizedState=bs(1|t,a,n,r))}function Cs(e,t){Ss(8390656,8,e,t)}function ws(e,t){H(2048,8,e,t)}function Ts(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Wo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Es(e){var t=Uo().memoizedState;return Ts({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ds(e,t){return H(4,2,e,t)}function Os(e,t){return H(4,4,e,t)}function ks(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function As(e,t,n){n=n==null?null:n.concat([e]),H(4,4,ks.bind(null,t,e),n)}function js(){}function Ms(e,t){var n=Uo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ns(e,t){var n=Uo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Po(t,r[1]))return r[0];if(r=e(),ko){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Ps(e,t,n){return n===void 0||To&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Du(),z.lanes|=e,iu|=e,n)}function Fs(e,t,n,r){return zr(n,t)?n:uo.current===null?!(To&42)||To&1073741824&&!(Y&261930)?(U=!0,e.memoizedState=n):(e=Du(),z.lanes|=e,iu|=e,t):(e=Ps(e,n,r),zr(e,t)||(U=!0),e)}function Is(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Js(e,!1,t,n);try{var c=i(),l=T.S;if(l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`){var u=ka(c,r);qs(e,t,u,Eu(e))}else qs(e,t,r,Eu(e))}catch(n){qs(e,t,{then:function(){},status:`rejected`,reason:n},Eu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ls(){}function Rs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=zs(e).queue;Is(e,a,t,de,n===null?Ls:function(){return Bs(e),n(r)})}function zs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bs(e){var t=zs(e);t.next===null&&(t=e.alternate.memoizedState),qs(e,t.next.queue,{},Eu())}function Vs(){return _a(mp)}function Hs(){return Uo().memoizedState}function Us(){return Uo().memoizedState}function Ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Eu();e=to(n);var r=no(t,e,n);r!==null&&(Ou(r,t,n),ro(r,t,n)),t={cache:Sa()},e.payload=t;return}t=t.return}}function Gs(e,t,n){var r=Eu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ys(e)?Xs(t,n):(n=yi(e,t,n,r),n!==null&&(Ou(n,e,r),Zs(n,t,r)))}function Ks(e,t,n){var r=Eu();qs(e,t,n,r)}function qs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ys(e))Xs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,zr(s,o))return vi(e,t,i,0),q===null&&_i(),!1}catch{}if(n=yi(e,t,i,r),n!==null)return Ou(n,e,r),Zs(n,t,r),!0}return!1}function Js(e,t,n,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ys(e)){if(t)throw Error(i(479))}else t=yi(e,n,r,2),t!==null&&Ou(t,e,2)}function Ys(e){var t=e.alternate;return e===z||t!==null&&t===z}function Xs(e,t){Oo=Do=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Qs={readContext:_a,use:Ko,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};Qs.useEffectEvent=V;var $s={readContext:_a,use:Ko,useCallback:function(e,t){return Ho().memoizedState=[e,t===void 0?null:t],e},useContext:_a,useEffect:Cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ss(4194308,4,ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ss(4194308,4,e,t)},useInsertionEffect:function(e,t){Ss(4,2,e,t)},useMemo:function(e,t){var n=Ho();t=t===void 0?null:t;var r=e();if(ko){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ho();if(n!==void 0){var i=n(t);if(ko){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Gs.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=Ho();return e={current:e},t.memoizedState=e},useState:function(e){e=os(e);var t=e.queue,n=Ks.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:js,useDeferredValue:function(e,t){var n=Ho();return Ps(n,e,t)},useTransition:function(){var e=os(!1);return e=Is.bind(null,z,e.queue,!0,!1),Ho().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=Ho();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||$o(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Cs(ts.bind(null,r,o,e),[e]),r.flags|=2048,bs(9,{destroy:void 0},es.bind(null,r,o,n,t),null),n},useId:function(){var e=Ho(),t=q.identifierPrefix;if(P){var n=Wi,r=Ui;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ao++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=No++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Vs,useFormState:hs,useActionState:hs,useOptimistic:function(e){var t=Ho();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Js.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:qo,useCacheRefresh:function(){return Ho().memoizedState=Ws.bind(null,z)},useEffectEvent:function(e){var t=Ho(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},ec={readContext:_a,use:Ko,useCallback:Ms,useContext:_a,useEffect:ws,useImperativeHandle:As,useInsertionEffect:Ds,useLayoutEffect:Os,useMemo:Ns,useReducer:Yo,useRef:xs,useState:function(){return Yo(Jo)},useDebugValue:js,useDeferredValue:function(e,t){var n=Uo();return Fs(n,B.memoizedState,e,t)},useTransition:function(){var e=Yo(Jo)[0],t=Uo().memoizedState;return[typeof e==`boolean`?e:Go(e),t]},useSyncExternalStore:Qo,useId:Hs,useHostTransitionStatus:Vs,useFormState:gs,useActionState:gs,useOptimistic:function(e,t){var n=Uo();return ss(n,B,e,t)},useMemoCache:qo,useCacheRefresh:Us};ec.useEffectEvent=Es;var tc={readContext:_a,use:Ko,useCallback:Ms,useContext:_a,useEffect:ws,useImperativeHandle:As,useInsertionEffect:Ds,useLayoutEffect:Os,useMemo:Ns,useReducer:Zo,useRef:xs,useState:function(){return Zo(Jo)},useDebugValue:js,useDeferredValue:function(e,t){var n=Uo();return B===null?Ps(n,e,t):Fs(n,B.memoizedState,e,t)},useTransition:function(){var e=Zo(Jo)[0],t=Uo().memoizedState;return[typeof e==`boolean`?e:Go(e),t]},useSyncExternalStore:Qo,useId:Hs,useHostTransitionStatus:Vs,useFormState:ys,useActionState:ys,useOptimistic:function(e,t){var n=Uo();return B===null?(n.baseState=e,[e,n.queue.dispatch]):ss(n,B,e,t)},useMemoCache:qo,useCacheRefresh:Us};tc.useEffectEvent=Es;function nc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=to(r);i.payload=t,n!=null&&(i.callback=n),t=no(e,i,r),t!==null&&(Ou(t,e,r),ro(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=to(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=no(e,i,r),t!==null&&(Ou(t,e,r),ro(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Eu(),r=to(n);r.tag=2,t!=null&&(r.callback=t),t=no(e,r,n),t!==null&&(Ou(t,e,n),ro(t,e,n))}};function ic(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,a):!0}function ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rc.enqueueReplaceState(t,t.state,null)}function oc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function sc(e){pi(e)}function cc(e){console.error(e)}function lc(e){pi(e)}function uc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function dc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function fc(e,t,n){return n=to(n),n.tag=3,n.payload={element:null},n.callback=function(){uc(e,t)},n}function pc(e){return e=to(e),e.tag=3,e}function mc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){dc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){dc(t,n,r),typeof i!=`function`&&(gu===null?gu=new Set([this]):gu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function hc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ma(t,n,a,!0),n=go.current,n!==null){switch(n.tag){case 31:case 13:return _o===null?Bu():n.alternate===null&&ru===0&&(ru=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ra?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),id(e,r,a)),!1;case 22:return n.flags|=65536,r===Ra?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),id(e,r,a)),!1}throw Error(i(435,n.tag))}return id(e,r,a),Bu(),!1}if(P)return t=go.current,t===null?(r!==$i&&(t=Error(i(423),{cause:r}),oa(Fi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Fi(r,n),a=fc(e.stateNode,r,a),io(e,a),ru!==4&&(ru=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==$i&&(e=Error(i(422),{cause:r}),oa(Fi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Fi(o,n),lu===null?lu=[o]:lu.push(o),ru!==4&&(ru=2),t===null)return!0;r=Fi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=fc(n.stateNode,r,e),io(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gu===null||!gu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=pc(a),mc(a,e,n,r),io(n,a),!1}n=n.return}while(n!==null);return!1}var gc=Error(i(461)),U=!1;function _c(e,t,n,r){t.child=e===null?Za(t,null,n,r):Xa(t,e.child,n,r)}function vc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ga(t),r=Fo(e,t,n,o,a,i),s=zo(),e!==null&&!U?(Bo(e,t,i),Hc(e,t,i)):(P&&s&&qi(t),t.flags|=1,_c(e,t,r,i),t.child)}function yc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ei(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,bc(e,t,a,r,i)):(e=ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Uc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Br:n,n(o,r)&&e.ref===t.ref)return Hc(e,t,i)}return t.flags|=1,e=Di(a,r),e.ref=t.ref,e.return=t,t.child=e}function bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Br(a,r)&&e.ref===t.ref)if(U=!1,t.pendingProps=r=a,Uc(e,i))e.flags&131072&&(U=!0);else return t.lanes=e.lanes,Hc(e,t,i)}return Oc(e,t,n,r,i)}function xc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Na(t,a===null?null:a.cachePool),a===null?mo():po(t,a),bo(t);else return r=t.lanes=536870912,Cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Na(t,null),mo(),xo(t)):(Na(t,a.cachePool),po(t,a),xo(t),t.memoizedState=null);return _c(e,t,i,n),t.child}function Sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Cc(e,t,n,r,i){var a=Ma();return a=a===null?null:{parent:xa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Na(t,null),mo(),bo(t),e!==null&&ma(e,t,r,!0),t.childLanes=i,null}function wc(e,t){return t=Lc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Tc(e,t,n){return Xa(t,e.child,null,n),e=wc(t,t.pendingProps),e.flags|=2,So(t),t.memoizedState=null,e}function Ec(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=wc(t,r),t.lanes=536870912,Sc(null,e);if(yo(t),(e=N)?(e=bf(e,Qi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Hi===null?null:{id:Ui,overflow:Wi},retryLane:536870912,hydrationErrors:null},n=Mi(e),n.return=t,t.child=n,Xi=t,N=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return wc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(yo(t),a)if(t.flags&256)t.flags&=-257,t=Tc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(U||ma(e,t,n,!1),a=(n&e.childLanes)!==0,U||a){if(r=q,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,bi(e,s),Ou(r,e,s),gc;Bu(),t=Tc(e,t,n)}else e=o.treeContext,N=wf(s.nextSibling),Xi=t,P=!0,Zi=null,Qi=!1,e!==null&&Yi(t,e),t=wc(t,r),t.flags|=4096;return t}return e=Di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Oc(e,t,n,r,i){return ga(t),n=Fo(e,t,n,r,void 0,i),r=zo(),e!==null&&!U?(Bo(e,t,i),Hc(e,t,i)):(P&&r&&qi(t),t.flags|=1,_c(e,t,n,i),t.child)}function kc(e,t,n,r,i,a){return ga(t),t.updateQueue=null,n=Lo(t,r,n,i),Io(e),r=zo(),e!==null&&!U?(Bo(e,t,a),Hc(e,t,a)):(P&&r&&qi(t),t.flags|=1,_c(e,t,n,a),t.child)}function Ac(e,t,n,r,i){if(ga(t),t.stateNode===null){var a=Ci,o=n.contextType;typeof o==`object`&&o&&(a=_a(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=rc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},$a(t),o=n.contextType,a.context=typeof o==`object`&&o?_a(o):Ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(nc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&rc.enqueueReplaceState(a,a.state,null),so(t,r,a,i),oo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=oc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ci,typeof u==`object`&&u&&(o=_a(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&ac(t,a,r,o),Qa=!1;var f=t.memoizedState;a.state=f,so(t,r,a,i),oo(),l=t.memoizedState,s||f!==l||Qa?(typeof d==`function`&&(nc(t,n,d,r),l=t.memoizedState),(c=Qa||ic(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,eo(e,t),o=t.memoizedProps,u=oc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ci,typeof l==`object`&&l&&(c=_a(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&ac(t,a,r,c),Qa=!1,f=t.memoizedState,a.state=f,so(t,r,a,i),oo();var p=t.memoizedState;o!==d||f!==p||Qa||e!==null&&e.dependencies!==null&&ha(e.dependencies)?(typeof s==`function`&&(nc(t,n,s,r),p=t.memoizedState),(u=Qa||ic(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ha(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Dc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Xa(t,e.child,null,i),t.child=Xa(t,null,n,i)):_c(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Hc(e,t,i),e}function jc(e,t,n,r){return ia(),t.flags|=256,_c(e,t,n,r),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:Pa()}}function Pc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=su),e}function Fc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(Co.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?vo(t):xo(t),(e=N)?(e=bf(e,Qi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Hi===null?null:{id:Ui,overflow:Wi},retryLane:536870912,hydrationErrors:null},n=Mi(e),n.return=t,t.child=n,Xi=t,N=null)):e=null,e===null)throw ea(t);return Sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(xo(t),a=t.mode,c=Lc({mode:`hidden`,children:c},a),r=Ai(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Nc(n),r.childLanes=Pc(e,s,n),t.memoizedState=Mc,Sc(null,r)):(vo(t),Ic(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(vo(t),t.flags&=-257,t=Rc(e,t,n)):t.memoizedState===null?(xo(t),c=r.fallback,a=t.mode,r=Lc({mode:`visible`,children:r.children},a),c=Ai(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Xa(t,e.child,null,n),r=t.child,r.memoizedState=Nc(n),r.childLanes=Pc(e,s,n),t.memoizedState=Mc,t=Sc(null,r)):(xo(t),t.child=e.child,t.flags|=128,t=null);else if(vo(t),Sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,oa({value:r,source:null,stack:null}),t=Rc(e,t,n)}else if(U||ma(e,t,n,!1),s=(n&e.childLanes)!==0,U||s){if(s=q,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,bi(e,r),Ou(s,e,r),gc;xf(c)||Bu(),t=Rc(e,t,n)}else xf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=wf(c.nextSibling),Xi=t,P=!0,Zi=null,Qi=!1,e!==null&&Yi(t,e),t=Ic(t,r.children),t.flags|=4096);return t}return a?(xo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=Di(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Ai(c,a,n,null),c.flags|=2):c=Di(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,Sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Nc(n):(a=c.cachePool,a===null?a=Pa():(l=xa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Pc(e,s,n),t.memoizedState=Mc,Sc(e.child,r)):(vo(t),n=e.child,e=n.sibling,n=Di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ic(e,t){return t=Lc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Lc(e,t){return e=Ti(22,e,null,t),e.lanes=0,e}function Rc(e,t,n){return Xa(t,e.child,null,n),e=Ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function Bc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Vc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(Co,o),_c(e,t,r,n),r=P?zi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zc(e,n,t);else if(e.tag===19)zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bc(t,!0,n,null,a,r);break;case`together`:Bc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Hc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),iu|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ha(e))):!0}function Wc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ua(t,xa,e.memoizedState.cache),ia();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(vo(t),e=Hc(e,t,n),e===null?null:e.sibling):Fc(e,t,n):(vo(t),t.flags|=128,null);vo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ma(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Vc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(Co,Co.current),r)break;return null;case 22:return t.lanes=0,xc(e,t,n,t.pendingProps);case 24:ua(t,xa,e.memoizedState.cache)}return Hc(e,t,n)}function Gc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)U=!0;else{if(!Uc(e,n)&&!(t.flags&128))return U=!1,Wc(e,t,n);U=!!(e.flags&131072)}else U=!1,P&&t.flags&1048576&&Ki(t,zi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e==`function`)Ei(e)?(r=oc(e,r),t.tag=1,t=Ac(null,t,e,r,n)):(t.tag=0,t=Oc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=vc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=yc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return Oc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=oc(r,t.pendingProps),Ac(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,eo(e,t),so(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ua(t,xa,r),r!==o.cache&&pa(t,[xa],n,!0),oo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=jc(e,t,r,n);break a}else if(r!==a){a=Fi(Error(i(424)),t),oa(a),t=jc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=wf(e.firstChild),Xi=t,P=!0,Zi=null,Qi=!0,n=Za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ia(),r===a){t=Hc(e,t,n);break a}_c(e,t,r,n)}t=t.child}return t;case 26:return Dc(e,t),e===null?(n=Gf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=tf(ve.current).createElement(n),r[_t]=t,r[vt]=e,Yd(r,n,e),At(r),t.stateNode=r):t.memoizedState=Gf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&P&&(r=t.stateNode=Of(t.type,t.pendingProps,ve.current),Xi=t,Qi=!0,a=N,mf(t.type)?(Tf=a,N=wf(r.firstChild)):N=a),_c(e,t,t.pendingProps.children,n),Dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=vf(r,t.type,t.pendingProps,Qi),r===null?a=!1:(t.stateNode=r,Xi=t,N=wf(r.firstChild),Qi=!1,a=!0)),a||ea(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,af(a,o)?r=null:s!==null&&af(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Fo(e,t,Ro,null,null,n),mp._currentValue=a),Dc(e,t),_c(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=yf(n,t.pendingProps,Qi),n===null?e=!1:(t.stateNode=n,Xi=t,N=null,e=!0)),e||ea(t)),null;case 13:return Fc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xa(t,null,r,n):_c(e,t,r,n),t.child;case 11:return vc(e,t,t.type,t.pendingProps,n);case 7:return _c(e,t,t.pendingProps,n),t.child;case 8:return _c(e,t,t.pendingProps.children,n),t.child;case 12:return _c(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ua(t,t.type,r.value),_c(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ga(t),a=_a(a),r=r(a),t.flags|=1,_c(e,t,r,n),t.child;case 14:return yc(e,t,t.type,t.pendingProps,n);case 15:return bc(e,t,t.type,t.pendingProps,n);case 19:return Vc(e,t,n);case 31:return Ec(e,t,n);case 22:return xc(e,t,n,t.pendingProps);case 24:return ga(t),r=_a(xa),e===null?(a=Ma(),a===null&&(a=q,o=Sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},$a(t),ua(t,xa,a)):((e.lanes&n)!==0&&(eo(e,t),so(t,null,null,n),oo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ua(t,xa,r),r!==a.cache&&pa(t,[xa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ua(t,xa,r))),_c(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Kc(e){e.flags|=4}function qc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Lu())e.flags|=8192;else throw Ha=Ra,Ia}else e.flags&=-16777217}function Jc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!op(t))if(Lu())e.flags|=8192;else throw Ha=Ra,Ia}function Yc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,cu|=t)}function Xc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zc(e,t,n){var r=t.pendingProps;switch(Ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),da(xa),xe(),n.pendingContext&&=(n.context=n.pendingContext,null),(e===null||e.child===null)&&(ra(t)?Kc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,aa())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Kc(t),o===null?(W(t),qc(t,a,null,r,n)):(W(t),Jc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Kc(t),W(t),Jc(t,o)):(e=e.memoizedProps,e!==r&&Kc(t),W(t),qc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Kc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=ge.current,ra(t)?ta(t,e):(e=Of(a,r,n),t.stateNode=e,Kc(t))}return W(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Kc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=ge.current,ra(t))ta(t,o);else{var s=tf(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Yd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Kc(t)}}return W(t),qc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Kc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,ra(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Xi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||qd(e.nodeValue,n)),e||ea(t,!0)}else e=tf(e).createTextNode(r),e[_t]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ra(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=aa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(So(t),t):(So(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ra(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=aa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(So(t),t):(So(t),null)}return So(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Yc(t,t.updateQueue),W(t),null);case 4:return xe(),e===null&&Ld(t.stateNode.containerInfo),W(t),null;case 10:return da(t.type),W(t),null;case 19:if(he(Co),r=t.memoizedState,r===null)return W(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Xc(r,!1);else{if(ru!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=wo(e),o!==null){for(t.flags|=128,Xc(r,!1),e=o.updateQueue,t.updateQueue=e,Yc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Oi(n,e),n=n.sibling;return D(Co,Co.current&1|2),P&&Gi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>mu&&(t.flags|=128,a=!0,Xc(r,!1),t.lanes=4194304)}else{if(!a)if(e=wo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Yc(t,e),Xc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return W(t),null}else 2*Ie()-r.renderingStartTime>mu&&n!==536870912&&(t.flags|=128,a=!0,Xc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=Co.current,D(Co,a?n&1|2:n&1),P&&Gi(t,r.treeForkCount),e);case 22:case 23:return So(t),ho(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Yc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),da(xa),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Qc(e,t){switch(Ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return da(xa),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(So(t),t.alternate===null)throw Error(i(340));ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(So(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(Co),null;case 4:return xe(),null;case 10:return da(t.type),null;case 22:case 23:return So(t),ho(),e!==null&&he(ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return da(xa),null;case 25:return null;default:return null}}function $c(e,t){switch(Ji(t),t.tag){case 3:da(xa),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&So(t);break;case 13:So(t);break;case 19:he(Co);break;case 10:da(t.type);break;case 22:case 23:So(t),ho(),e!==null&&he(ja);break;case 24:da(xa)}}function el(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function nl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{lo(t,n)}catch(t){Z(e,e.return,t)}}}function rl(e,t,n){n.props=oc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function il(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function al(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function ol(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function sl(e,t,n){try{var r=e.stateNode;Xd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function cl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mf(e.type)||e.tag===4}function ll(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||cl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=O));else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ul(e,t,n),e=e.sibling;e!==null;)ul(e,t,n),e=e.sibling}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&mf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}function fl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Yd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var pl=!1,ml=!1,hl=!1,gl=typeof WeakSet==`function`?WeakSet:Set,_l=null;function vl(e,t){if(e=e.containerInfo,$d=Cp,e=Wr(e),Gr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ef={focusedElem:e,selectionRange:n},Cp=!1,_l=t;_l!==null;)if(t=_l,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,_l=e;else for(;_l!==null;){switch(t=_l,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=oc(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)_f(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:_f(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,_l=e;break}_l=t.return}}function yl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nl(e,n),r&4&&el(5,n);break;case 1:if(Nl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=oc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&nl(n),r&512&&il(n,n.return);break;case 3:if(Nl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{lo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&fl(n);case 26:case 5:Nl(e,n),t===null&&r&4&&ol(n),r&512&&il(n,n.return);break;case 12:Nl(e,n);break;case 31:Nl(e,n),r&4&&wl(e,n);break;case 13:Nl(e,n),r&4&&Tl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sd.bind(null,n),Cf(e,n))));break;case 22:if(r=n.memoizedState!==null||pl,!r){t=t!==null&&t.memoizedState!==null||ml,i=pl;var a=ml;pl=r,(ml=t)&&!a?Fl(e,n,(n.subtreeFlags&8772)!=0):Nl(e,n),pl=i,ml=a}break;case 30:break;default:Nl(e,n)}}function bl(e){var t=e.alternate;t!==null&&(e.alternate=null,bl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,xl=!1;function Sl(e,t,n){for(n=n.child;n!==null;)Cl(e,t,n),n=n.sibling}function Cl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:ml||al(n,t),Sl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ml||al(n,t);var r=G,i=xl;mf(n.type)&&(G=n.stateNode,xl=!1),Sl(e,t,n),kf(n.stateNode),G=r,xl=i;break;case 5:ml||al(n,t);case 6:if(r=G,i=xl,G=null,Sl(e,t,n),G=r,xl=i,G!==null)if(xl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(xl?(e=G,hf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Yp(e)):hf(G,n.stateNode));break;case 4:r=G,i=xl,G=n.stateNode.containerInfo,xl=!0,Sl(e,t,n),G=r,xl=i;break;case 0:case 11:case 14:case 15:tl(2,n,t),ml||tl(4,n,t),Sl(e,t,n);break;case 1:ml||(al(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&rl(n,t,r)),Sl(e,t,n);break;case 21:Sl(e,t,n);break;case 22:ml=(r=ml)||n.memoizedState!==null,Sl(e,t,n),ml=r;break;default:Sl(e,t,n)}}function wl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yp(e)}catch(e){Z(t,t.return,e)}}}function Tl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yp(e)}catch(e){Z(t,t.return,e)}}function El(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gl),t;default:throw Error(i(435,e.tag))}}function Dl(e,t){var n=El(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=cd.bind(null,e,t);t.then(r,r)}})}function Ol(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(mf(c.type)){G=c.stateNode,xl=!1;break a}break;case 5:G=c.stateNode,xl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,xl=!0;break a}c=c.return}if(G===null)throw Error(i(160));Cl(o,s,a),G=null,xl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Al(t,e),t=t.sibling}var kl=null;function Al(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ol(t,e),jl(e),r&4&&(tl(3,e,e.return),el(3,e),tl(5,e,e.return));break;case 1:Ol(t,e),jl(e),r&512&&(ml||n===null||al(n,n.return)),r&64&&pl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=kl;if(Ol(t,e),jl(e),r&512&&(ml||n===null||al(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Yd(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=rp(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=rp(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Yd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else ip(a,e.type,e.stateNode);else e.stateNode=Qf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&sl(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?ip(a,e.type,e.stateNode):Qf(a,r,e.memoizedProps))}break;case 27:Ol(t,e),jl(e),r&512&&(ml||n===null||al(n,n.return)),n!==null&&r&4&&sl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ol(t,e),jl(e),r&512&&(ml||n===null||al(n,n.return)),e.flags&32){a=e.stateNode;try{nn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,sl(e,a,n===null?a:n.memoizedProps)),r&1024&&(hl=!0);break;case 6:if(Ol(t,e),jl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(np=null,a=kl,kl=Mf(t.containerInfo),Ol(t,e),kl=a,jl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yp(t.containerInfo)}catch(t){Z(e,e.return,t)}hl&&(hl=!1,Ml(e));break;case 4:r=kl,kl=Mf(e.stateNode.containerInfo),Ol(t,e),jl(e),kl=r;break;case 12:Ol(t,e),jl(e);break;case 31:Ol(t,e),jl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 13:Ol(t,e),jl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=pl,d=ml;if(pl=u||a,ml=d||l,Ol(t,e),ml=d,pl=u,jl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||pl||ml||Pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?gf(m,!0):gf(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Dl(e,n))));break;case 19:Ol(t,e),jl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 30:break;case 21:break;default:Ol(t,e),jl(e)}}function jl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(cl(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode,o=ll(e);dl(e,o,a);break;case 5:var s=n.stateNode;n.flags&32&&(nn(s,``),n.flags&=-33);var c=ll(e);dl(e,c,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=ll(e);ul(e,u,l);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ml(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ml(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yl(e,t.alternate,t),t=t.sibling}function Pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:tl(4,t,t.return),Pl(t);break;case 1:al(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&rl(t,t.return,n),Pl(t);break;case 27:kf(t.stateNode);case 26:case 5:al(t,t.return),Pl(t);break;case 22:t.memoizedState===null&&Pl(t);break;case 30:Pl(t);break;default:Pl(t)}e=e.sibling}}function Fl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Fl(i,a,n),el(4,a);break;case 1:if(Fl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)co(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&nl(a),il(a,a.return);break;case 27:fl(a);case 26:case 5:Fl(i,a,n),n&&r===null&&o&4&&ol(a),il(a,a.return);break;case 12:Fl(i,a,n);break;case 31:Fl(i,a,n),n&&o&4&&wl(i,a);break;case 13:Fl(i,a,n),n&&o&4&&Tl(i,a);break;case 22:a.memoizedState===null&&Fl(i,a,n),il(a,a.return);break;case 30:break;default:Fl(i,a,n)}t=t.sibling}}function Il(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ca(n))}function Ll(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e))}function Rl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zl(e,t,n,r),t=t.sibling}function zl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Rl(e,t,n,r),i&2048&&el(9,t);break;case 1:Rl(e,t,n,r);break;case 3:Rl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e)));break;case 12:if(i&2048){Rl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Rl(e,t,n,r);break;case 31:Rl(e,t,n,r);break;case 13:Rl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Rl(e,t,n,r):(a._visibility|=2,Bl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Rl(e,t,n,r):Vl(e,t),i&2048&&Il(o,t);break;case 24:Rl(e,t,n,r),i&2048&&Ll(t.alternate,t);break;default:Rl(e,t,n,r)}}function Bl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bl(a,o,s,c,i),el(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bl(a,o,s,c,i)):u._visibility&2?Bl(a,o,s,c,i):Vl(a,o),i&&l&2048&&Il(o.alternate,o);break;case 24:Bl(a,o,s,c,i),i&&l&2048&&Ll(o.alternate,o);break;default:Bl(a,o,s,c,i)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vl(n,r),i&2048&&Il(r.alternate,r);break;case 24:Vl(n,r),i&2048&&Ll(r.alternate,r);break;default:Vl(n,r)}t=t.sibling}}var Hl=8192;function Ul(e,t,n){if(e.subtreeFlags&Hl)for(e=e.child;e!==null;)Wl(e,t,n),e=e.sibling}function Wl(e,t,n){switch(e.tag){case 26:Ul(e,t,n),e.flags&Hl&&e.memoizedState!==null&&sp(n,kl,e.memoizedState,e.memoizedProps);break;case 5:Ul(e,t,n);break;case 3:case 4:var r=kl;kl=Mf(e.stateNode.containerInfo),Ul(e,t,n),kl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hl,Hl=16777216,Ul(e,t,n),Hl=r):Ul(e,t,n));break;default:Ul(e,t,n)}}function Gl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];_l=r,Yl(r,e)}Gl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ql(e),e=e.sibling}function ql(e){switch(e.tag){case 0:case 11:case 15:Kl(e),e.flags&2048&&tl(9,e,e.return);break;case 3:Kl(e);break;case 12:Kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jl(e)):Kl(e);break;default:Kl(e)}}function Jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];_l=r,Yl(r,e)}Gl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:tl(8,t,t.return),Jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Yl(e,t){for(;_l!==null;){var n=_l;switch(n.tag){case 0:case 11:case 15:tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,_l=r;else a:for(n=e;_l!==null;){r=_l;var i=r.sibling,a=r.return;if(bl(r),r===n){_l=null;break a}if(i!==null){i.return=a,_l=i;break a}_l=a}}}var Xl={getCacheForType:function(e){var t=_a(xa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _a(xa).controller.signal}},Zl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,Ql=null,$l=!1,eu=!1,tu=!1,nu=0,ru=0,iu=0,au=0,ou=0,su=0,cu=0,lu=null,uu=null,du=!1,fu=0,pu=0,mu=1/0,hu=null,gu=null,_u=0,vu=null,yu=null,bu=0,xu=0,Su=null,Cu=null,wu=0,Tu=null;function Eu(){return K&2&&Y!==0?Y&-Y:T.T===null?mt():wd()}function Du(){if(su===0)if(!(Y&536870912)||P){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),su=e}else su=536870912;return e=go.current,e!==null&&(e.flags|=32),su}function Ou(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Fu(e,0),Mu(e,Y,su,!1)),st(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(au|=n),ru===4&&Mu(e,Y,su,!1)),gd(e))}function ku(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),a=r?Uu(e,t):Vu(e,t,!0),o=r;do{if(a===0){eu&&!r&&Mu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!ju(n)){a=Vu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=lu;var l=c.current.memoizedState.isDehydrated;if(l&&(Fu(c,s).flags|=256),s=Vu(c,s,!1),s!==2){if(tu&&!l){c.errorRecoveryDisabledLanes|=o,au|=o,a=4;break a}o=uu,uu=a,o!==null&&(uu===null?uu=o:uu.push.apply(uu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Fu(e,0),Mu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Mu(r,t,su,!$l);break a;case 2:uu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fu+300-Ie(),10<a)){if(Mu(r,t,su,!$l),nt(r,0,!0)!==0)break a;bu=t,r.timeoutHandle=lf(Au.bind(null,r,n,uu,hu,du,t,su,au,cu,$l,o,`Throttled`,-0,0),a);break a}Au(r,n,uu,hu,du,t,su,au,cu,$l,o,null,-0,0)}}break}while(1);gd(e)}function Au(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:O},Wl(t,a,d);var m=(a&62914560)===a?fu-Ie():(a&4194048)===a?pu-Ie():0;if(m=lp(d,m),m!==null){bu=a,e.cancelPendingCommit=m(Xu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Mu(e,a,o,!l);return}}Xu(e,t,a,n,r,i,o,s,c)}function ju(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!zr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~ou,t&=~au,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function Nu(){return K&6?!0:(_d(0,!1),!1)}function Pu(){if(J!==null){if(X===0)var e=J.return;else e=J,la=ca=null,Vo(e),Ga=null,Ka=0,e=J;for(;e!==null;)$c(e.alternate,e),e=e.return;J=null}}function Fu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,uf(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bu=0,Pu(),q=e,J=n=Di(e.current,null),Y=t,X=0,Ql=null,$l=!1,eu=rt(e,t),tu=!1,cu=su=ou=au=iu=ru=0,uu=lu=null,du=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return nu=t,_i(),n}function Iu(e,t){z=null,T.H=Qs,t===Fa||t===La?(t=Ua(),X=3):t===Ia?(t=Ua(),X=4):X=t===gc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ql=t,J===null&&(ru=1,uc(e,Fi(t,e.current)))}function Lu(){var e=go.current;return e===null?!0:(Y&4194048)===Y?_o===null:(Y&62914560)===Y||Y&536870912?e===_o:!1}function Ru(){var e=T.H;return T.H=Qs,e===null?Qs:e}function zu(){var e=T.A;return T.A=Xl,e}function Bu(){ru=4,$l||(Y&4194048)!==Y&&go.current!==null||(eu=!0),!(iu&134217727)&&!(au&134217727)||q===null||Mu(q,Y,su,!1)}function Vu(e,t,n){var r=K;K|=2;var i=Ru(),a=zu();(q!==e||Y!==t)&&(hu=null,Fu(e,t)),t=!1;var o=ru;a:do try{if(X!==0&&J!==null){var s=J,c=Ql;switch(X){case 8:Pu(),o=6;break a;case 3:case 2:case 9:case 6:go.current===null&&(t=!0);var l=X;if(X=0,Ql=null,qu(e,s,c,l),n&&eu){o=0;break a}break;default:l=X,X=0,Ql=null,qu(e,s,c,l)}}Hu(),o=ru;break}catch(t){Iu(e,t)}while(1);return t&&e.shellSuspendCounter++,la=ca=null,K=r,T.H=i,T.A=a,J===null&&(q=null,Y=0,_i()),o}function Hu(){for(;J!==null;)Gu(J)}function Uu(e,t){var n=K;K|=2;var r=Ru(),a=zu();q!==e||Y!==t?(hu=null,mu=Ie()+500,Fu(e,t)):eu=rt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=Ql;b:switch(X){case 1:X=0,Ql=null,qu(e,t,o,1);break;case 2:case 9:if(za(o)){X=0,Ql=null,Ku(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),gd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:za(o)?(X=0,Ql=null,Ku(t)):(X=0,Ql=null,qu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?op(s):c.stateNode.complete){X=0,Ql=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Ju(u))}break b}}X=0,Ql=null,qu(e,t,o,5);break;case 6:X=0,Ql=null,qu(e,t,o,6);break;case 8:Pu(),ru=6;break a;default:throw Error(i(462))}}Wu();break}catch(t){Iu(e,t)}while(1);return la=ca=null,T.H=r,T.A=a,K=n,J===null?(q=null,Y=0,_i(),ru):0}function Wu(){for(;J!==null&&!Pe();)Gu(J)}function Gu(e){var t=Gc(e.alternate,e,nu);e.memoizedProps=e.pendingProps,t===null?Ju(e):J=t}function Ku(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=kc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=kc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Vo(t);default:$c(n,t),t=J=Oi(t,nu),t=Gc(n,t,nu)}e.memoizedProps=e.pendingProps,t===null?Ju(e):J=t}function qu(e,t,n,r){la=ca=null,Vo(t),Ga=null,Ka=0;var i=t.return;try{if(hc(e,i,t,n,Y)){ru=1,uc(e,Fi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ru=1,uc(e,Fi(n,e.current)),J=null;return}t.flags&32768?(P||r===1?e=!0:eu||Y&536870912?e=!1:($l=e=!0,(r===2||r===9||r===3||r===6)&&(r=go.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yu(t,e)):Ju(t)}function Ju(e){var t=e;do{if(t.flags&32768){Yu(t,$l);return}e=t.return;var n=Zc(t.alternate,t,nu);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ru===0&&(ru=5)}function Yu(e,t){do{var n=Qc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ru=6,J=null}function Xu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do td();while(_u!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=gi,ct(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),yu=t,vu=e,bu=n,xu=o,Su=a,Cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ld(Be,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=K,K|=4;try{vl(e,t,n)}finally{K=s,E.p=a,T.T=r}}_u=1,Zu(),Qu(),$u()}}function Zu(){if(_u===1){_u=0;var e=vu,t=yu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=K;K|=4;try{Al(t,e);var a=ef,o=Wr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ur(s.ownerDocument.documentElement,s)){if(c!==null&&Gr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Hr(s,h),v=Hr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Cp=!!$d,ef=$d=null}finally{K=i,E.p=r,T.T=n}}e.current=t,_u=2}}function Qu(){if(_u===2){_u=0;var e=vu,t=yu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=K;K|=4;try{yl(e,t.alternate,t)}finally{K=i,E.p=r,T.T=n}}_u=3}}function $u(){if(_u===4||_u===3){_u=0,Fe();var e=vu,t=yu,n=bu,r=Cu;t.subtreeFlags&10256||t.flags&10256?_u=5:(_u=0,yu=vu=null,ed(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(gu=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}bu&3&&td(),gd(e),i=e.pendingLanes,n&261930&&i&42?e===Tu?wu++:(wu=0,Tu=e):wu=0,_d(0,!1)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ca(t)))}function td(){return Zu(),Qu(),$u(),nd()}function nd(){if(_u!==5)return!1;var e=vu,t=xu;xu=0;var n=pt(bu),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=Su,Su=null;var o=vu,s=bu;if(_u=0,yu=vu=null,bu=0,K&6)throw Error(i(331));var c=K;if(K|=4,ql(o.current),zl(o,o.current,s,n),K=c,_d(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{E.p=a,T.T=r,ed(e,t)}}function rd(e,t,n){t=Fi(n,t),t=fc(e.stateNode,t,2),e=no(e,t,2),e!==null&&(st(e,2),gd(e))}function Z(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gu===null||!gu.has(r))){e=Fi(n,e),n=pc(2),r=no(t,n,2),r!==null&&(mc(n,r,t,e),st(r,2),gd(r));break}}t=t.return}}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(tu=!0,i.add(n),e=ad.bind(null,e,t,n),t.then(e,e))}function ad(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ru===4||ru===3&&(Y&62914560)===Y&&300>Ie()-fu?!(K&2)&&Fu(e,0):ou|=n,cu===Y&&(cu=0)),gd(e)}function od(e,t){t===0&&(t=at()),e=bi(e,t),e!==null&&(st(e,t),gd(e))}function sd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function cd(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),od(e,n)}function ld(e,t){return Me(e,t)}var ud=null,dd=null,fd=!1,pd=!1,md=!1,hd=0;function gd(e){e!==dd&&e.next===null&&(dd===null?ud=dd=e:dd=dd.next=e),pd=!0,fd||(fd=!0,Cd())}function _d(e,t){if(!md&&pd){md=!0;do for(var n=!1,r=ud;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Sd(r,a))}else a=Y,a=nt(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,Sd(r,a));r=r.next}while(n);md=!1}}function vd(){yd()}function yd(){pd=fd=!1;var e=0;hd!==0&&cf()&&(e=hd);for(var t=Ie(),n=null,r=ud;r!==null;){var i=r.next,a=bd(r,t);a===0?(r.next=null,n===null?ud=i:n.next=i,i===null&&(dd=n)):(n=r,(e!==0||a&3)&&(pd=!0)),r=i}_u!==0&&_u!==5||_d(e,!1),hd!==0&&(hd=0)}function bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=xd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(_u!==0&&_u!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(td()&&e.callbackNode!==n)return null;var r=Y;return r=nt(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ku(e,r,t),bd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?xd.bind(null,e):null)}function Sd(e,t){if(td())return null;ku(e,t,!0)}function Cd(){ff(function(){K&6?Me(Re,vd):yd()})}function wd(){if(hd===0){var e=Ea;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),hd=e}return hd}function Td(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:un(``+e)}function Ed(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Dd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Td((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?Td(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hd!==0){var e=o?Ed(i,o):new FormData(i);Rs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Ed(i,o):new FormData(i),Rs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Od=0;Od<di.length;Od++){var kd=di[Od],Ad=kd.toLowerCase(),jd=kd[0].toUpperCase()+kd.slice(1);fi(Ad,`on`+jd)}fi(ri,`onAnimationEnd`),fi(ii,`onAnimationIteration`),fi(ai,`onAnimationStart`),fi(`dblclick`,`onDoubleClick`),fi(`focusin`,`onFocus`),fi(`focusout`,`onBlur`),fi(oi,`onTransitionRun`),fi(si,`onTransitionStart`),fi(ci,`onTransitionCancel`),fi(li,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Md=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Nd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Md));function Pd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){pi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){pi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Rd(t,e,2,!1),n.add(r))}function Fd(e,t,n){var r=0;t&&(r|=4),Rd(n,e,r,t)}var Id=`_reactListening`+Math.random().toString(36).slice(2);function Ld(e){if(!e[Id]){e[Id]=!0,jt.forEach(function(t){t!==`selectionchange`&&(Nd.has(t)||Fd(t,!1,e),Fd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Id]||(t[Id]=!0,Fd(`selectionchange`,!1,t))}}function Rd(e,t,n,r){switch(Ap(t)){case 2:var i=wp;break;case 8:i=Tp;break;default:i=Ep}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function zd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ui.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Zn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=tr;break;case ri:case ii:case ai:l=Vn;break;case li:l=rr;break;case`scroll`:case`scrollend`:l=A;break;case`wheel`:l=ar;break;case`copy`:case`cut`:case`paste`:l=Un;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=$n;break;case`toggle`:case`beforetoggle`:l=sr}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Bd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=$n,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Hd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Ud(s,c,l,d,!1),u!==null&&f!==null&&Ud(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=Dr;else if(xr(c))if(Or)v=Lr;else{v=Fr;var y=Pr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&sn(r.elementType)&&(v=Dr):v=Ir;if(v&&=v(e,r)){Sr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Qt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(xr(y)||y.contentEditable===`true`)&&(qr=y,Jr=r,Yr=null);break;case`focusout`:Yr=Jr=qr=null;break;case`mousedown`:Xr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Xr=!1,Zr(s,n,i);break;case`selectionchange`:if(Kr)break;case`keydown`:case`keyup`:Zr(s,n,i)}var b;if(lr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else _r?hr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(fr&&n.locale!==`ko`&&(_r||x!==`onCompositionStart`?x===`onCompositionEnd`&&_r&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,_r=!0)),y=Vd(r,x),0<y.length&&(x=new M(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=gr(n),b!==null&&(x.data=b)))),(b=dr?vr(e,n):yr(e,n))&&(x=Vd(r,`onBeforeInput`),0<x.length&&(y=new M(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),Dd(s,e,r,n,i)}Pd(s,t)})}function Bd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Bd(e,i,a)),i=vn(e,t),i!=null&&r.push(Bd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Hd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Bd(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Bd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Wd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function Kd(e){return(typeof e==`string`?e:``+e).replace(Wd,`
`).replace(Gd,``)}function qd(e,t){return t=Kd(t),Kd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&nn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:on(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=O);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=un(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=cn.get(n)||n,zt(e,n,r))}}function Jd(e,t,n,r,a,o){switch(n){case`style`:on(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&nn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=O);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Yd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&$t(e,!!r,n,!0):$t(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}tn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<Md.length;r++)Q(Md[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(sn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Jd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Xd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Xt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?$t(e,!!n,n?[]:``,!1):$t(e,!!n,t,!0)):$t(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}en(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(sn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Jd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Jd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Qd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var $d=null,ef=null;function tf(e){return e.nodeType===9?e:e.ownerDocument}function nf(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function rf(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function af(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sf=null;function cf(){var e=window.event;return e&&e.type===`popstate`?e===sf?!1:(sf=e,!0):(sf=null,!1)}var lf=typeof setTimeout==`function`?setTimeout:void 0,uf=typeof clearTimeout==`function`?clearTimeout:void 0,df=typeof Promise==`function`?Promise:void 0,ff=typeof queueMicrotask==`function`?queueMicrotask:df===void 0?lf:function(e){return df.resolve(null).then(e).catch(pf)};function pf(e){setTimeout(function(){throw e})}function mf(e){return e===`head`}function hf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Yp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)kf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,kf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&kf(e.ownerDocument.body);n=i}while(n);Yp(t)}function gf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function _f(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:_f(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function vf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(r){if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}}else if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;if(e=wf(e.nextSibling),e===null)break}return null}function yf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=wf(e.nextSibling),e===null))return null;return e}function bf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=wf(e.nextSibling),e===null))return null;return e}function xf(e){return e.data===`$?`||e.data===`$~`}function Sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function Cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function wf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var Tf=null;function Ef(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return wf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function Df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function Of(e,t,n){switch(t=tf(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function kf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var Af=new Map,jf=new Set;function Mf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nf=E.d;E.d={f:Pf,r:Ff,D:Rf,C:zf,L:Bf,m:Vf,X:Uf,S:Hf,M:Wf};function Pf(){var e=Nf.f(),t=Nu();return e||t}function Ff(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?Bs(t):Nf.r(e)}var If=typeof document>`u`?null:document;function Lf(e,t,n){var r=If;if(r&&typeof t==`string`&&t){var i=Yt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),jf.has(i)||(jf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Yd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Rf(e){Nf.D(e),Lf(`dns-prefetch`,e,null)}function zf(e,t){Nf.C(e,t),Lf(`preconnect`,e,t)}function Bf(e,t,n){Nf.L(e,t,n);var r=If;if(r&&e&&t){var i=`link[rel="preload"][as="`+Yt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Yt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Yt(n.imageSizes)+`"]`)):i+=`[href="`+Yt(e)+`"]`;var a=i;switch(t){case`style`:a=Kf(e);break;case`script`:a=Xf(e)}Af.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Af.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(qf(a))||t===`script`&&r.querySelector(Zf(a))||(t=r.createElement(`link`),Yd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Vf(e,t){Nf.m(e,t);var n=If;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Yt(r)+`"][href="`+Yt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Xf(e)}if(!Af.has(a)&&(e=h({rel:`modulepreload`,href:e},t),Af.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Zf(a)))return}r=n.createElement(`link`),Yd(r,`link`,e),At(r),n.head.appendChild(r)}}}function Hf(e,t,n){Nf.S(e,t,n);var r=If;if(r&&e){var i=kt(r).hoistableStyles,a=Kf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(qf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Af.get(a))&&ep(e,n);var c=o=r.createElement(`link`);At(c),Yd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,$f(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Uf(e,t){Nf.X(e,t);var n=If;if(n&&e){var r=kt(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=h({src:e,async:!0},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),At(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Wf(e,t){Nf.M(e,t);var n=If;if(n&&e){var r=kt(n).hoistableScripts,i=Xf(e),a=r.get(i);a||(a=n.querySelector(Zf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=Af.get(i))&&tp(e,t),a=n.createElement(`script`),At(a),Yd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Gf(e,t,n,r){var a=(a=ve.current)?Mf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Kf(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Kf(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(qf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Af.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Af.set(e,n),o||Yf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Xf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Kf(e){return`href="`+Yt(e)+`"`}function qf(e){return`link[rel="stylesheet"][`+e+`]`}function Jf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Yf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Yd(t,`link`,n),At(t),e.head.appendChild(t))}function Xf(e){return`[src="`+Yt(e)+`"]`}function Zf(e){return`script[async]`+e}function Qf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Yt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Yd(r,`style`,a),$f(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Kf(n.href);var o=e.querySelector(qf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Jf(n),(a=Af.get(a))&&ep(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Yd(o,`link`,r),t.state.loading|=4,$f(o,n.precedence,e),t.instance=o;case`script`:return o=Xf(n.src),(a=e.querySelector(Zf(o)))?(t.instance=a,At(a),a):(r=n,(a=Af.get(o))&&(r=h({},n),tp(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Yd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,$f(r,n.precedence,e));return t.instance}function $f(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ep(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function tp(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var np=null;function rp(e,t,n){if(np===null){var r=new Map,i=np=new Map;i.set(n,r)}else i=np,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function ip(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function ap(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function op(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function sp(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Kf(r.href),a=t.querySelector(qf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=up.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Jf(r),(i=Af.get(i))&&ep(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Yd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=up.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var cp=0;function lp(e,t){return e.stylesheets&&e.count===0&&fp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&cp===0&&(cp=62500*Qd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>cp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function up(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fp(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dp=null;function fp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dp=new Map,t.forEach(pp,e),dp=null,up.call(e))}function pp(e,t){if(!(t.state.loading&4)){var n=dp.get(e);if(n)var r=n.get(null);else{n=new Map,dp.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=up.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mp={$$typeof:C,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function hp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function gp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new hp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ti(3,null,null,t),e.current=a,a.stateNode=e,t=Sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},$a(a),e}function _p(e){return e?(e=Ci,e):Ci}function vp(e,t,n,r,i,a){i=_p(i),r.context===null?r.context=i:r.pendingContext=i,r=to(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=no(e,r,t),n!==null&&(Ou(n,e,t),ro(n,e,t))}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bp(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}function xp(e){if(e.tag===13||e.tag===31){var t=bi(e,67108864);t!==null&&Ou(t,e,67108864),bp(e,67108864)}}function Sp(e){if(e.tag===13||e.tag===31){var t=Eu();t=ft(t);var n=bi(e,t);n!==null&&Ou(n,e,t),bp(e,t)}}var Cp=!0;function wp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,Ep(e,t,n,r)}finally{E.p=a,T.T=i}}function Tp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,Ep(e,t,n,r)}finally{E.p=a,T.T=i}}function Ep(e,t,n,r){if(Cp){var i=Dp(r);if(i===null)zd(e,t,r,Op,n),zp(e,r);else if(Vp(i,e,t,n,r))r.stopPropagation();else if(zp(e,r),t&4&&-1<Rp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}gd(a),!(K&6)&&(mu=Ie()+500,_d(0,!1))}}break;case 31:case 13:s=bi(a,2),s!==null&&Ou(s,a,2),Nu(),bp(a,2)}if(a=Dp(r),a===null&&zd(e,t,r,Op,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else zd(e,t,r,null,n)}}function Dp(e){return e=fn(e),kp(e)}var Op=null;function kp(e){if(Op=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Op=e,null}function Ap(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var jp=!1,Mp=null,Np=null,Pp=null,Fp=new Map,Ip=new Map,Lp=[],Rp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function zp(e,t){switch(e){case`focusin`:case`focusout`:Mp=null;break;case`dragenter`:case`dragleave`:Np=null;break;case`mouseover`:case`mouseout`:Pp=null;break;case`pointerover`:case`pointerout`:Fp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ip.delete(t.pointerId)}}function Bp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&xp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vp(e,t,n,r,i){switch(t){case`focusin`:return Mp=Bp(Mp,e,t,n,r,i),!0;case`dragenter`:return Np=Bp(Np,e,t,n,r,i),!0;case`mouseover`:return Pp=Bp(Pp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Fp.set(a,Bp(Fp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ip.set(a,Bp(Ip.get(a)||null,e,t,n,r,i)),!0}return!1}function Hp(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){Sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){Sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Up(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&xp(t),e.blockedOn=n,!1;t.shift()}return!0}function Wp(e,t,n){Up(e)&&n.delete(t)}function Gp(){jp=!1,Mp!==null&&Up(Mp)&&(Mp=null),Np!==null&&Up(Np)&&(Np=null),Pp!==null&&Up(Pp)&&(Pp=null),Fp.forEach(Wp),Ip.forEach(Wp)}function Kp(e,n){e.blockedOn===n&&(e.blockedOn=null,jp||(jp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Gp)))}var qp=null;function Jp(e){qp!==e&&(qp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){qp===e&&(qp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(kp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Rs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Yp(e){function t(t){return Kp(t,e)}Mp!==null&&Kp(Mp,e),Np!==null&&Kp(Np,e),Pp!==null&&Kp(Pp,e),Fp.forEach(t),Ip.forEach(t);for(var n=0;n<Lp.length;n++){var r=Lp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Lp.length&&(n=Lp[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&Lp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Jp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(kp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Jp(n)}}}function Xp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Zp(e){this._internalRoot=e}Qp.prototype.render=Zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,r=Eu();vp(n,r,e,t,null,null)},Qp.prototype.unmount=Zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vp(e.current,2,null,e,null,null),Nu(),t[yt]=null}};function Qp(e){this._internalRoot=e}Qp.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lp.length&&t!==0&&t<Lp[n].priority;n++);Lp.splice(n,0,e),n===0&&Hp(e)}};var $p=n.version;if($p!==`19.2.0`)throw Error(i(527,$p,`19.2.0`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var em={bundleType:0,version:`19.2.0`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var tm=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tm.isDisabled&&tm.supportsFiber)try{Ge=tm.inject(em),Ke=tm}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=sc,s=cc,c=lc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=gp(e,1,!1,null,null,n,r,null,o,s,c,Xp),e[yt]=t.current,Ld(e),new Zp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/Y0-Hardware-V2.0.0/`+e},y={};const b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var x=c(u(),1),S=`popstate`;function C(e={}){function t(e,t){let{pathname:n,search:r,hash:i}=e.location;return re(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){return typeof t==`string`?t:ie(t)}return oe(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function ee(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t}}function re(e,t,n=null,r){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ae(t):t,state:n,key:t&&t.key||r||te()}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ae(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return se(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function se(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ie(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ce(e,t,n=`/`){return le(e,t,n,!1)}function le(e,t,n,r){let i=typeof t==`string`?ae(t):t,a=we(i.pathname||`/`,n);if(a==null)return null;let o=T(e);de(o);let s=null;for(let e=0;s==null&&e<o.length;++e){let t=Ce(a);s=be(o[e],t,r)}return s}function ue(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function T(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=je([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),T(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ve(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of E(e.path))a(e,t,!0,n)}),t}function E(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=E(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function de(e){e.sort((e,t)=>e.score===t.score?ye(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var fe=/^:[\w-]+$/,pe=3,me=2,he=1,D=10,ge=-2,_e=e=>e===`*`;function ve(e,t){let n=e.split(`/`),r=n.length;return n.some(_e)&&(r+=ge),t&&(r+=me),n.filter(e=>!_e(e)).reduce((e,t)=>e+(fe.test(t)?pe:t===``?he:D),r)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function be(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=xe({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:je([a,u.pathname]),pathnameBase:Me(je([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=je([a,u.pathnameBase]))}return o}function xe(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Se(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Se(e,t=!1,n=!0){ee(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`)).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ce(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ee(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function we(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Te(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ae(e):e;return{pathname:n?n.startsWith(`/`)?n:Ee(n,t):t,search:Ne(r),hash:Pe(i)}}function Ee(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function De(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ke(e){let t=Oe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ae(e,t,n,r=!1){let i;typeof e==`string`?i=ae(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),De(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),De(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),De(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Te(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var je=e=>e.join(`/`).replace(/\/\/+/g,`/`),Me=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Ne=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Pe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function Fe(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var Ie=x.createContext(null);Ie.displayName=`DataRouter`;var Le=x.createContext(null);Le.displayName=`DataRouterState`,x.createContext(!1);var Re=x.createContext({isTransitioning:!1});Re.displayName=`ViewTransition`;var ze=x.createContext(new Map);ze.displayName=`Fetchers`;var Be=x.createContext(null);Be.displayName=`Await`;var Ve=x.createContext(null);Ve.displayName=`Navigation`;var He=x.createContext(null);He.displayName=`Location`;var Ue=x.createContext({outlet:null,matches:[],isDataRoute:!1});Ue.displayName=`Route`;var We=x.createContext(null);We.displayName=`RouteError`;function Ge(e,{relative:t}={}){w(Ke(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(Ve),{hash:i,pathname:a,search:o}=$e(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:je([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Ke(){return x.useContext(He)!=null}function qe(){return w(Ke(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(He).location}var Je=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Ye(e){x.useContext(Ve).static||x.useLayoutEffect(e)}function Xe(){let{isDataRoute:e}=x.useContext(Ue);return e?gt():Ze()}function Ze(){w(Ke(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ie),{basename:t,navigator:n}=x.useContext(Ve),{matches:r}=x.useContext(Ue),{pathname:i}=qe(),a=JSON.stringify(ke(r)),o=x.useRef(!1);return Ye(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(ee(o.current,Je),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ae(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:je([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function Qe(){let{matches:e}=x.useContext(Ue),t=e[e.length-1];return t?t.params:{}}function $e(e,{relative:t}={}){let{matches:n}=x.useContext(Ue),{pathname:r}=qe(),i=JSON.stringify(ke(n));return x.useMemo(()=>Ae(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function et(e,t){return tt(e,t)}function tt(e,t,n,r,i){w(Ke(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:a}=x.useContext(Ve),{matches:o}=x.useContext(Ue),s=o[o.length-1],c=s?s.params:{},l=s?s.pathname:`/`,u=s?s.pathnameBase:`/`,d=s&&s.route;{let e=d&&d.path||``;vt(l,!d||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let f=qe(),p;if(t){let e=typeof t==`string`?ae(t):t;w(u===`/`||e.pathname?.startsWith(u),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${e.pathname}" was given in the \`location\` prop.`),p=e}else p=f;let m=p.pathname||`/`,h=m;if(u!==`/`){let e=u.replace(/^\//,``).split(`/`);h=`/`+m.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let g=ce(e,{pathname:h});ee(d||g!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),ee(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=ot(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:je([u,a.encodeLocation?a.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?u:je([u,a.encodeLocation?a.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),o,n,r,i);return t&&_?x.createElement(He.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,...p},navigationType:`POP`}},_):_}function nt(){let e=ht(),t=Fe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var rt=x.createElement(nt,null),it=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){return this.state.error===void 0?this.props.children:x.createElement(Ue.Provider,{value:this.props.routeContext},x.createElement(We.Provider,{value:this.state.error,children:this.props.component}))}};function at({routeContext:e,match:t,children:n}){let r=x.useContext(Ie);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Ue.Provider,{value:e},n)}function ot(e,t=[],n=null,r=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(`,`)}`),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,i,l)=>{let u,d=!1,f=null,p=null;n&&(u=o&&i.route.id?o[i.route.id]:void 0,f=i.route.errorElement||rt,s&&(c<0&&l===0?(vt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):c===l&&(d=!0,p=i.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,l+1)),h=()=>{let t;return t=u?f:d?p:i.route.Component?x.createElement(i.route.Component,null):i.route.element?i.route.element:e,x.createElement(at,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:n!=null},children:t})};return n&&(i.route.ErrorBoundary||i.route.errorElement||l===0)?x.createElement(it,{location:n.location,revalidation:n.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},unstable_onError:r}):h()},null)}function st(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ct(e){let t=x.useContext(Ie);return w(t,st(e)),t}function lt(e){let t=x.useContext(Le);return w(t,st(e)),t}function ut(e){let t=x.useContext(Ue);return w(t,st(e)),t}function dt(e){let t=ut(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function ft(){return dt(`useRouteId`)}function pt(){return lt(`useNavigation`).navigation}function mt(){let{matches:e,loaderData:t}=lt(`useMatches`);return x.useMemo(()=>e.map(e=>ue(e,t)),[e,t])}function ht(){let e=x.useContext(We),t=lt(`useRouteError`),n=dt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function gt(){let{router:e}=ct(`useNavigate`),t=dt(`useNavigate`),n=x.useRef(!1);return Ye(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{ee(n.current,Je),n.current&&(typeof r==`number`?e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var _t={};function vt(e,t,n){!t&&!_t[e]&&(_t[e]=!0,ee(!1,n))}x.memo(yt);function yt({routes:e,future:t,state:n,unstable_onError:r}){return tt(e,void 0,n,r,t)}function bt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function xt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1}){w(!Ke(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let o=e.replace(/^\/*/,`/`),s=x.useMemo(()=>({basename:o,navigator:i,static:a,future:{}}),[o,i,a]);typeof n==`string`&&(n=ae(n));let{pathname:c=`/`,search:l=``,hash:u=``,state:d=null,key:f=`default`}=n,p=x.useMemo(()=>{let e=we(c,o);return e==null?null:{location:{pathname:e,search:l,hash:u,state:d,key:f},navigationType:r}},[o,c,l,u,d,f,r]);return ee(p!=null,`<Router basename="${o}"> is not able to match the URL "${c}${l}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:x.createElement(Ve.Provider,{value:s},x.createElement(He.Provider,{children:t,value:p}))}function St({children:e,location:t}){return et(Ct(e),t)}function Ct(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Ct(e.props.children,i));return}w(e.type===bt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ct(e.props.children,i)),n.push(a)}),n}var wt=`get`,Tt=`application/x-www-form-urlencoded`;function Et(e){return e!=null&&typeof e.tagName==`string`}function Dt(e){return Et(e)&&e.tagName.toLowerCase()===`button`}function Ot(e){return Et(e)&&e.tagName.toLowerCase()===`form`}function kt(e){return Et(e)&&e.tagName.toLowerCase()===`input`}function At(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jt(e,t){return e.button===0&&(!t||t===`_self`)&&!At(e)}function Mt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Nt(e,t){let n=Mt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Pt=null;function Ft(){if(Pt===null)try{new FormData(document.createElement(`form`),0),Pt=!1}catch{Pt=!0}return Pt}var It=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Lt(e){return e!=null&&!It.has(e)?(ee(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tt}"`),null):e}function Rt(e,t){let n,r,i,a,o;if(Ot(e)){let o=e.getAttribute(`action`);r=o?we(o,t):null,n=e.getAttribute(`method`)||wt,i=Lt(e.getAttribute(`enctype`))||Tt,a=new FormData(e)}else if(Dt(e)||kt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?we(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||wt,i=Lt(e.getAttribute(`formenctype`))||Lt(o.getAttribute(`enctype`))||Tt,a=new FormData(o,e),!Ft()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Et(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=wt,r=null,i=Tt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function zt(e,t){if(e===!1||e==null)throw Error(t)}function Bt(e,t,n){let r=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return r.pathname===`/`?r.pathname=`_root.${n}`:t&&we(r.pathname,t)===`/`?r.pathname=`${t.replace(/\/$/,``)}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,``)}.${n}`,r}async function Vt(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ht(e){return e!=null&&typeof e.page==`string`}function Ut(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Wt(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Vt(r,n);return e.links?e.links():[]}return[]}));return Yt(r.flat(1).filter(Ut).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function Gt(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function Kt(e,t,{includeHydrateFallback:n}={}){return qt(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function qt(e){return[...new Set(e)]}function Jt(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Yt(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Ht(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Jt(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Xt(){let e=x.useContext(Ie);return zt(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Zt(){let e=x.useContext(Le);return zt(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Qt=x.createContext(void 0);Qt.displayName=`FrameworkContext`;function $t(){let e=x.useContext(Qt);return zt(e,`You must render this element inside a <HydratedRouter> element`),e}function en(e,t){let n=x.useContext(Qt),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:tn(s,p),onBlur:tn(c,m),onMouseEnter:tn(l,p),onMouseLeave:tn(u,m),onTouchStart:tn(d,p)}]:[a,f,{}]:[!1,f,{}]}function tn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function nn({page:e,...t}){let{router:n}=Xt(),r=x.useMemo(()=>ce(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?x.createElement(an,{page:e,matches:r,...t}):null}function rn(e){let{manifest:t,routeModules:n}=$t(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return Wt(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function an({page:e,matches:t,...n}){let r=qe(),{manifest:i,routeModules:a}=$t(),{basename:o}=Xt(),{loaderData:s,matches:c}=Zt(),l=x.useMemo(()=>Gt(e,t,c,i,r,`data`),[e,t,c,i,r]),u=x.useMemo(()=>Gt(e,t,c,i,r,`assets`),[e,t,c,i,r]),d=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,c=!1;if(t.forEach(e=>{let t=i.routes[e.route.id];!t||!t.hasLoader||(!l.some(t=>t.route.id===e.route.id)&&e.route.id in s&&a[e.route.id]?.shouldRevalidate||t.hasClientLoader?c=!0:n.add(e.route.id))}),n.size===0)return[];let u=Bt(e,o,`data`);return c&&n.size>0&&u.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[u.pathname+u.search]},[o,s,r,i,l,t,e,a]),f=x.useMemo(()=>Kt(u,i),[u,i]),p=rn(u);return x.createElement(x.Fragment,null,d.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),f.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),p.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t})))}function on(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var sn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{sn&&(window.__reactRouterVersion=`7.9.4`)}catch{}function cn({basename:e,children:t,window:n}){let r=x.useRef();r.current??=C({window:n,v5Compat:!0});let i=r.current,[a,o]=x.useState({action:i.action,location:i.location}),s=x.useCallback(e=>{x.startTransition(()=>o(e))},[o]);return x.useLayoutEffect(()=>i.listen(s),[i,s]),x.createElement(xt,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:i})}function ln({basename:e,children:t,history:n}){let[r,i]=x.useState({action:n.action,location:n.location}),a=x.useCallback(e=>{x.startTransition(()=>i(e))},[i]);return x.useLayoutEffect(()=>n.listen(a),[n,a]),x.createElement(xt,{basename:e,children:t,location:r.location,navigationType:r.action,navigator:n})}ln.displayName=`unstable_HistoryRouter`;var un=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u,...d},f){let{basename:p}=x.useContext(Ve),m=typeof c==`string`&&un.test(c),h,g=!1;if(typeof c==`string`&&m&&(h=c,sn))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=we(t.pathname,p);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:g=!0}catch{ee(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=Ge(c,{relative:r}),[v,y,b]=en(n,d),S=_n(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u});function C(t){e&&e(t),t.defaultPrevented||S(t)}let w=x.createElement(`a`,{...d,...b,href:h||_,onClick:g||i?e:C,ref:on(f,y),target:s,"data-discover":!m&&t===`render`?`true`:void 0});return v&&!m?x.createElement(x.Fragment,null,w,x.createElement(nn,{page:_})):w});O.displayName=`Link`;var dn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=$e(a,{relative:c.relative}),d=qe(),f=x.useContext(Le),{navigator:p,basename:m}=x.useContext(Ve),h=f!=null&&On(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=we(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,ee;ee=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return x.createElement(O,{...c,"aria-current":w,className:ee,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});dn.displayName=`NavLink`;var fn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=wt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,...f},p)=>{let m=xn(),h=Sn(s,{relative:l}),g=o.toLowerCase()===`get`?`get`:`post`,_=typeof s==`string`&&un.test(s);return x.createElement(`form`,{ref:p,method:g,action:h,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o;m(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d})},...f,"data-discover":!_&&e===`render`?`true`:void 0})});fn.displayName=`Form`;function pn({getKey:e,storageKey:t,...n}){let r=x.useContext(Qt),{basename:i}=x.useContext(Ve),a=qe(),o=mt();En({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Tn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${JSON.stringify(t||Cn)}, ${JSON.stringify(s)})`}})}pn.displayName=`ScrollRestoration`;function mn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hn(e){let t=x.useContext(Ie);return w(t,mn(e)),t}function gn(e){let t=x.useContext(Le);return w(t,mn(e)),t}function _n(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:o}={}){let s=Xe(),c=qe(),l=$e(e,{relative:a});return x.useCallback(u=>{if(jt(u,t)){u.preventDefault();let t=n===void 0?ie(c)===ie(l):n;s(e,{replace:t,state:r,preventScrollReset:i,relative:a,viewTransition:o})}},[c,s,l,n,r,t,e,i,a,o])}function vn(e){ee(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=x.useRef(Mt(e)),n=x.useRef(!1),r=qe(),i=x.useMemo(()=>Nt(r.search,n.current?null:t.current),[r.search]),a=Xe(),o=x.useCallback((e,t)=>{let r=Mt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i]);return[i,o]}var yn=0,bn=()=>`__${String(++yn)}__`;function xn(){let{router:e}=hn(`useSubmit`),{basename:t}=x.useContext(Ve),n=ft();return x.useCallback(async(r,i={})=>{let{action:a,method:o,encType:s,formData:c,body:l}=Rt(r,t);if(i.navigate===!1){let t=i.fetcherKey||bn();await e.fetch(t,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await e.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function Sn(e,{relative:t}={}){let{basename:n}=x.useContext(Ve),r=x.useContext(Ue);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...$e(e||`.`,{relative:t})},o=qe();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:je([n,a.pathname])),ie(a)}var Cn=`react-router-scroll-positions`,wn={};function Tn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:we(e.pathname,n)||e.pathname},t)),i??=e.key,i}function En({getKey:e,storageKey:t}={}){let{router:n}=hn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=gn(`useScrollRestoration`),{basename:a}=x.useContext(Ve),o=qe(),s=mt(),c=pt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Dn(x.useCallback(()=>{if(c.state===`idle`){let t=Tn(o,s,a,e);wn[t]=window.scrollY}try{sessionStorage.setItem(t||Cn,JSON.stringify(wn))}catch(e){ee(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Cn);e&&(wn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(wn,()=>window.scrollY,e?(t,n)=>Tn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{ee(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Dn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function On(e,{relative:t}={}){let n=x.useContext(Re);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=hn(`useViewTransitionState`),i=$e(e,{relative:t});if(!n.isTransitioning)return!1;let a=we(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=we(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xe(i.pathname,o)!=null||xe(i.pathname,a)!=null}var kn=c(g()),k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},k.apply(this,arguments)};function An(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var jn=o(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),A=`-ms-`,Mn=`-moz-`,j=`-webkit-`,Nn=`comm`,Pn=`rule`,Fn=`decl`,In=`@import`,Ln=`@keyframes`,Rn=`@layer`,zn=Math.abs,Bn=String.fromCharCode,Vn=Object.assign;function Hn(e,t){return Kn(e,0)^45?(((t<<2^Kn(e,0))<<2^Kn(e,1))<<2^Kn(e,2))<<2^Kn(e,3):0}function Un(e){return e.trim()}function Wn(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Gn(e,t,n){return e.indexOf(t,n)}function Kn(e,t){return e.charCodeAt(t)|0}function qn(e,t,n){return e.slice(t,n)}function Jn(e){return e.length}function Yn(e){return e.length}function Xn(e,t){return t.push(e),e}function Zn(e,t){return e.map(t).join(``)}function Qn(e,t){return e.filter(function(e){return!Wn(e,t)})}var $n=1,er=1,tr=0,nr=0,rr=0,ir=``;function ar(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:$n,column:er,length:o,return:``,siblings:s}}function or(e,t){return Vn(ar(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function sr(e){for(;e.root;)e=or(e.root,{children:[e]});Xn(e,e.siblings)}function cr(){return rr}function lr(){return rr=nr>0?Kn(ir,--nr):0,er--,rr===10&&(er=1,$n--),rr}function ur(){return rr=nr<tr?Kn(ir,nr++):0,er++,rr===10&&(er=1,$n++),rr}function dr(){return Kn(ir,nr)}function fr(){return nr}function pr(e,t){return qn(ir,e,t)}function mr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hr(e){return $n=er=1,tr=Jn(ir=e),nr=0,[]}function gr(e){return ir=``,e}function _r(e){return Un(pr(nr-1,br(e===91?e+2:e===40?e+1:e)))}function vr(e){for(;(rr=dr())&&rr<33;)ur();return mr(e)>2||mr(rr)>3?``:` `}function yr(e,t){for(;--t&&ur()&&!(rr<48||rr>102||rr>57&&rr<65||rr>70&&rr<97););return pr(e,fr()+(t<6&&dr()==32&&ur()==32))}function br(e){for(;ur();)switch(rr){case e:return nr;case 34:case 39:e!==34&&e!==39&&br(rr);break;case 40:e===41&&br(e);break;case 92:ur();break}return nr}function xr(e,t){for(;ur()&&e+rr!==57&&!(e+rr===84&&dr()===47););return`/*`+pr(t,nr-1)+`*`+Bn(e===47?e:ur())}function Sr(e){for(;!mr(dr());)ur();return pr(e,nr)}function Cr(e){return gr(wr(``,null,null,null,[``],e=hr(e),0,[0],e))}function wr(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ur()){case 40:if(m!=108&&Kn(C,d-1)==58){Gn(C+=M(_r(v),`&`,`&\f`),`&\f`,zn(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=_r(v);break;case 9:case 10:case 13:case 32:C+=vr(m);break;case 92:C+=yr(fr()-1,7);continue;case 47:switch(dr()){case 42:case 47:Xn(Er(xr(ur(),fr()),t,n,c),c);break;default:C+=`/`}break;case 123*h:s[l++]=Jn(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=M(C,/\f/g,``)),p>0&&Jn(C)-d&&Xn(p>32?Dr(C+`;`,r,n,d-1,c):Dr(M(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(Xn(S=Tr(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)wr(C,t,S,S,b,a,d,s,x);else switch(f===99&&Kn(C,3)===110?100:f){case 100:case 108:case 109:case 115:wr(e,S,S,r&&Xn(Tr(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x);break;default:wr(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Jn(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&lr()==125)continue}switch(C+=Bn(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Jn(C)-1)*_,_=1;break;case 64:dr()===45&&(C+=_r(ur())),f=dr(),u=d=Jn(y=C+=Sr(fr())),v++;break;case 45:m===45&&Jn(C)==2&&(h=0)}}return a}function Tr(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Yn(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=qn(e,f+1,f=zn(g=o[h])),b=e;v<m;++v)(b=Un(g>0?p[v]+` `+y:M(y,/&\f/g,p[v])))&&(c[_++]=b);return ar(e,t,n,i===0?Pn:s,c,l,u,d)}function Er(e,t,n,r){return ar(e,t,n,Nn,Bn(cr()),qn(e,2,-2),0,r)}function Dr(e,t,n,r,i){return ar(e,t,n,Fn,qn(e,0,r),qn(e,r+1,-1),r,i)}function Or(e,t,n){switch(Hn(e,t)){case 5103:return j+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return Mn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+Mn+e+A+e+e;case 5936:switch(Kn(e,t+11)){case 114:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return j+e+A+M(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return j+e+A+e+e;case 6165:return j+e+A+`flex-`+e+e;case 5187:return j+e+M(e,/(\w+).+(:[^]+)/,j+`box-$1$2`+A+`flex-$1$2`)+e;case 5443:return j+e+A+`flex-item-`+M(e,/flex-|-self/g,``)+(Wn(e,/flex-|baseline/)?``:A+`grid-row-`+M(e,/flex-|-self/g,``))+e;case 4675:return j+e+A+`flex-line-pack`+M(e,/align-content|flex-|-self/g,``)+e;case 5548:return j+e+A+M(e,`shrink`,`negative`)+e;case 5292:return j+e+A+M(e,`basis`,`preferred-size`)+e;case 6060:return j+`box-`+M(e,`-grow`,``)+j+e+A+M(e,`grow`,`positive`)+e;case 4554:return j+M(e,/([^-])(transform)/g,`$1`+j+`$2`)+e;case 6187:return M(M(M(e,/(zoom-|grab)/,j+`$1`),/(image-set)/,j+`$1`),e,``)+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,j+`box-pack:$3`+A+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+j+e+e;case 4200:if(!Wn(e,/flex-|baseline/))return A+`grid-column-align`+qn(e,t)+e;break;case 2592:case 3360:return A+M(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Wn(e.props,/grid-\w+-end/)})?~Gn(e+(n=n[t].value),`span`,0)?e:A+M(e,`-start`,``)+e+A+`grid-row-span:`+(~Gn(n,`span`,0)?Wn(n,/\d+/):Wn(n,/\d+/)-+Wn(e,/\d+/))+`;`:A+M(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Wn(e.props,/grid-\w+-start/)})?e:A+M(M(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,j+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jn(e)-1-t>6)switch(Kn(e,t+1)){case 109:if(Kn(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,`$1`+j+`$2-$3$1`+Mn+(Kn(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Gn(e,`stretch`,0)?Or(M(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return A+n+`:`+r+s+(i?A+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Kn(e,t+6)===121)return M(e,`:`,`:`+j)+e;break;case 6444:switch(Kn(e,Kn(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+j+(Kn(e,14)===45?`inline-`:``)+`box$3$1`+j+`$2$3$1`+A+`$2box$3`)+e;case 100:return M(e,`:`,`:`+A)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,`scroll-`,`scroll-snap-`)+e}return e}function kr(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ar(e,t,n,r){switch(e.type){case Rn:if(e.children.length)break;case In:case Fn:return e.return=e.return||e.value;case Nn:return``;case Ln:return e.return=e.value+`{`+kr(e.children,r)+`}`;case Pn:if(!Jn(e.value=e.props.join(`,`)))return``}return Jn(n=kr(e.children,r))?e.return=e.value+`{`+n+`}`:``}function jr(e){var t=Yn(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Mr(e){return function(t){t.root||(t=t.return)&&e(t)}}function Nr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Fn:e.return=Or(e.value,e.length,n);return;case Ln:return kr([or(e,{value:M(e.value,`@`,`@`+j)})],r);case Pn:if(e.length)return Zn(n=e.props,function(t){switch(Wn(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:sr(or(e,{props:[M(t,/:(read-\w+)/,`:`+Mn+`$1`)]})),sr(or(e,{props:[t]})),Vn(e,{props:Qn(n,r)});break;case`::placeholder`:sr(or(e,{props:[M(t,/:(plac\w+)/,`:`+j+`input-$1`)]})),sr(or(e,{props:[M(t,/:(plac\w+)/,`:`+Mn+`$1`)]})),sr(or(e,{props:[M(t,/:(plac\w+)/,A+`input-$1`)]})),sr(or(e,{props:[t]})),Vn(e,{props:Qn(n,r)});break}return``})}}var Pr=c(jn()),Fr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ir=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Lr=`active`,Rr=`data-styled-version`,zr=`6.1.19`,Br=`/*!sc*/
`,Vr=typeof window<`u`&&typeof document<`u`,Hr=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),Ur={},Wr=Object.freeze([]),Gr=Object.freeze({});function Kr(e,t,n){return n===void 0&&(n=Gr),e.theme!==n.theme&&e.theme||t||n.theme}var qr=new Set(`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.track.u.ul.use.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`)),Jr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yr=/(^-|-$)/g;function Xr(e){return e.replace(Jr,`-`).replace(Yr,``)}var Zr=/(a)(d)/gi,Qr=52,$r=function(e){return String.fromCharCode(e+(e>25?39:97))};function ei(e){var t,n=``;for(t=Math.abs(e);t>Qr;t=t/Qr|0)n=$r(t%Qr)+n;return($r(t%Qr)+n).replace(Zr,`$1-$2`)}var ti,ni=5381,ri=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ii=function(e){return ri(ni,e)};function ai(e){return ei(ii(e)>>>0)}function oi(e){return e.displayName||e.name||`Component`}function si(e){return typeof e==`string`&&!0}var ci=typeof Symbol==`function`&&Symbol.for,li=ci?Symbol.for(`react.memo`):60115,ui=ci?Symbol.for(`react.forward_ref`):60112,di={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pi={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mi=((ti={})[ui]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ti[li]=pi,ti);function hi(e){return(`type`in(t=e)&&t.type.$$typeof)===li?pi:`$$typeof`in e?mi[e.$$typeof]:di;var t}var gi=Object.defineProperty,_i=Object.getOwnPropertyNames,vi=Object.getOwnPropertySymbols,yi=Object.getOwnPropertyDescriptor,bi=Object.getPrototypeOf,xi=Object.prototype;function Si(e,t,n){if(typeof t!=`string`){if(xi){var r=bi(t);r&&r!==xi&&Si(e,r,n)}var i=_i(t);vi&&(i=i.concat(vi(t)));for(var a=hi(e),o=hi(t),s=0;s<i.length;++s){var c=i[s];if(!(c in fi||n&&n[c]||o&&c in o||a&&c in a)){var l=yi(t,c);try{gi(e,c,l)}catch{}}}}return e}function Ci(e){return typeof e==`function`}function wi(e){return typeof e==`object`&&`styledComponentId`in e}function Ti(e,t){return e&&t?`${e} ${t}`:e||t||``}function Ei(e,t){if(e.length===0)return``;for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Di(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Oi(e,t,n){if(n===void 0&&(n=!1),!n&&!Di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Oi(e[r],t[r]);else if(Di(t))for(var r in t)e[r]=Oi(e[r],t[r]);return e}function ki(e,t){Object.defineProperty(e,`toString`,{value:t})}function Ai(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var ji=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Ai(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=`${this.tag.getRule(a)}${Br}`;return t},e}(),Mi=new Map,Ni=new Map,Pi=1,Fi=function(e){if(Mi.has(e))return Mi.get(e);for(;Ni.has(Pi);)Pi++;var t=Pi++;return Mi.set(e,t),Ni.set(t,e),t},Ii=function(e,t){Pi=t+1,Mi.set(e,t),Ni.set(t,e)},Li=`style[${Ir}][${Rr}="${zr}"]`,Ri=RegExp(`^${Ir}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),zi=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Bi=function(e,t){for(var n=(t.textContent??``).split(Br),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(Ri);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(Ii(l,c),zi(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Vi=function(e){for(var t=document.querySelectorAll(Li),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ir)!==Lr&&(Bi(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Hi(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var Ui=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${Ir}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(Ir,Lr),r.setAttribute(Rr,zr);var o=Hi();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},Wi=function(){function e(e){this.element=Ui(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Ai(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),Gi=function(){function e(e){this.element=Ui(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),Ki=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),qi=Vr,Ji={isServer:!Vr,useCSSOMInjection:!Hr},Yi=function(){function e(e,t,n){e===void 0&&(e=Gr),t===void 0&&(t={});var r=this;this.options=k(k({},Ji),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Vr&&qi&&(qi=!1,Vi(this)),ki(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return Ni.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i),o=t.getGroup(n);if(a===void 0||!a.size||o.length===0)return`continue`;var s=`${Ir}.g${n}[id="${i}"]`,c=``;a!==void 0&&a.forEach(function(e){e.length>0&&(c+=`${e},`)}),r+=`${o}${s}{content:"${c}"}${Br}`},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return Fi(e)},e.prototype.rehydrate=function(){!this.server&&Vr&&Vi(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(k(k({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ki(n):t?new Wi(n):new Gi(n)}(this.options),new ji(e));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Fi(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Fi(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Fi(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Xi=/&/g,N=/^\s*\/\/.*$/gm;function P(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=P(e.children,t)),e})}function Zi(e){var t,n,r,i=e===void 0?Gr:e,a=i.options,o=a===void 0?Gr:a,s=i.plugins,c=s===void 0?Wr:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(e.props[0]=e.props[0].replace(Xi,n).replace(r,l))}),o.prefix&&u.push(Nr),u.push(Ar);var d=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=RegExp(`\\${n}\\b`,`g`);var c=e.replace(N,``),l=Cr(a||i?`${a} ${i} { ${c} }`:c);o.namespace&&(l=P(l,o.namespace));var d=[];return kr(l,jr(u.concat(Mr(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||Ai(15),ri(e,t.name)},ni).toString():``,d}var Qi=new Yi,$i=Zi(),ea=x.createContext({shouldForwardProp:void 0,styleSheet:Qi,stylis:$i});ea.Consumer;var ta=x.createContext(void 0);function na(){return(0,x.useContext)(ea)}function ra(e){var t=(0,x.useState)(e.stylisPlugins),n=t[0],r=t[1],i=na().styleSheet,a=(0,x.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),o=(0,x.useMemo)(function(){return Zi({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,x.useEffect)(function(){(0,Pr.default)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,x.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:o}},[e.shouldForwardProp,a,o]);return x.createElement(ea.Provider,{value:s},x.createElement(ta.Provider,{value:o},e.children))}var ia=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=$i);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,ki(this,function(){throw Ai(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=$i),this.name+e.hash},e}(),aa=function(e){return e>=`A`&&e<=`Z`};function oa(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;aa(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var sa=function(e){return e==null||!1===e||e===``},ca=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!sa(a)&&(Array.isArray(a)&&a.isCss||Ci(a)?r.push(`${oa(i)}:`,a,`;`):Di(a)?r.push.apply(r,An(An([`${i} {`],ca(a),!1),[`}`],!1)):r.push(`${oa(i)}: ${t=i,(n=a)==null||typeof n==`boolean`||n===``?``:typeof n!=`number`||n===0||t in Fr||t.startsWith(`--`)?String(n).trim():`${n}px`};`))}return r};function la(e,t,n,r){if(sa(e))return[];if(wi(e))return[`.${e.styledComponentId}`];if(Ci(e)){if(!Ci(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return la(i,t,n,r)}var a;return e instanceof ia?n?(e.inject(n,r),[e.getName(r)]):[e]:Di(e)?ca(e):Array.isArray(e)?Array.prototype.concat.apply(Wr,e.map(function(e){return la(e,t,n,r)})):[e.toString()]}function ua(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ci(n)&&!wi(n))return!1}return!0}var da=ii(zr),fa=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&ua(e),this.componentId=t,this.baseHash=ri(da,t),this.baseStyle=n,Yi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ti(r,this.staticRulesId);else{var i=Ei(la(this.rules,e,t,n)),a=ei(ri(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Ti(r,a),this.staticRulesId=a}else{for(var s=ri(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Ei(la(u,e,t,n));s=ri(s,d+l),c+=d}}if(c){var f=ei(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(c,`.${f}`,void 0,this.componentId)),r=Ti(r,f)}}return r},e}(),pa=x.createContext(void 0);pa.Consumer;function ma(e){var t=x.useContext(pa),n=(0,x.useMemo)(function(){return function(e,t){if(!e)throw Ai(14);if(Ci(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Ai(8);return t?k(k({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?x.createElement(pa.Provider,{value:n},e.children):null}var ha={};function ga(e,t,n){var r=wi(e),i=e,a=!si(e),o=t.attrs,s=o===void 0?Wr:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?Xr(e):`sc`;ha[n]=(ha[n]||0)+1;var r=`${n}-${ai(zr+n+ha[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return si(e)?`styled.${e}`:`Styled(${oi(e)})`}(e):u,f=t.displayName&&t.componentId?`${Xr(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var _=new fa(n,f,r?i.componentStyle:void 0);function v(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=x.useContext(pa),u=na(),d=e.shouldForwardProp||u.shouldForwardProp,f=Kr(t,l,a)||Gr,p=function(e,t,n){for(var r,i=k(k({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Ci(r=e[a])?r(i):r;for(var s in o)i[s]=s===`className`?Ti(i[s],o[s]):s===`style`?k(k({},i[s]),o[s]):o[s]}return t.className&&(i.className=Ti(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var _=function(e,t){var n=na();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),v=Ti(o,s);return _&&(v+=` `+_),p.className&&(v+=` `+p.className),h[si(m)&&!qr.has(m)?`class`:`className`]=v,n&&(h.ref=n),(0,x.createElement)(m,h)}(y,e,t)}v.displayName=d;var y=x.forwardRef(v);return y.attrs=p,y.componentStyle=_,y.displayName=d,y.shouldForwardProp=m,y.foldedComponentIds=r?Ti(i.foldedComponentIds,i.styledComponentId):``,y.styledComponentId=f,y.target=r?i.target:e,Object.defineProperty(y,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)Oi(e,r[n],!0);return e}({},i.defaultProps,e):e}}),ki(y,function(){return`.${y.styledComponentId}`}),a&&Si(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function _a(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var va=function(e){return Object.assign(e,{isCss:!0})};function F(e){var t=[...arguments].slice(1);if(Ci(e)||Di(e))return va(la(_a(Wr,An([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?la(n):va(la(_a(n,t)))}function ya(e,t,n){if(n===void 0&&(n=Gr),!t)throw Ai(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,F.apply(void 0,An([r],i,!1)))};return r.attrs=function(r){return ya(e,t,k(k({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ya(e,t,k(k({},n),r))},r}var ba=function(e){return ya(ga,e)},I=ba;qr.forEach(function(e){I[e]=ba(e)});var xa=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ua(e),Yi.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Ei(la(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Yi.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Sa(e){var t=[...arguments].slice(1),n=F.apply(void 0,An([e],t,!1)),r=`sc-global-${ai(JSON.stringify(n))}`,i=new xa(n,r),a=function(e){var t=na(),n=x.useContext(pa),a=x.useRef(t.styleSheet.allocateGSInstance(r)).current;return t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis),x.useLayoutEffect(function(){if(!t.styleSheet.server)return o(a,e,t.styleSheet,n,t.stylis),function(){return i.removeStyles(a,t.styleSheet)}},[a,e,t.styleSheet,n,t.stylis]),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Ur,n,o);else{var s=k(k({},t),{theme:Kr(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return x.memo(a)}function Ca(e){var t=[...arguments].slice(1),n=Ei(F.apply(void 0,An([e],t,!1))),r=ai(n);return new ia(r,n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=Hi();return`<style ${Ei([n&&`nonce="${n}"`,`${Ir}="true"`,`${Rr}="${zr}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw Ai(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Ai(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Ir]=``,t[Rr]=zr,t.dangerouslySetInnerHTML={__html:n},t),i=Hi();return i&&(r.nonce=i),[x.createElement(`style`,k({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new Yi({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Ai(2);return x.createElement(ra,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ai(3)},e})(),`${Ir}`;const wa={colors:{primary:`#667eea`,secondary:`#764ba2`,accent:`#2ed573`,warning:`#ffa502`,error:`#ff4757`,success:`#2ed573`,info:`#3742fa`,background:{primary:`#ffffff`,secondary:`#f8f9fa`,tertiary:`#e9ecef`,card:`#ffffff`,modal:`#ffffff`,hover:`#f1f3f4`,active:`#e8eaed`},text:{primary:`#333333`,secondary:`#666666`,tertiary:`#888888`,muted:`#999999`,disabled:`#cccccc`,inverse:`#ffffff`,link:`#667eea`,linkHover:`#5a6fd8`},border:{primary:`#e9ecef`,secondary:`#dee2e6`,light:`#f1f3f4`,focus:`#667eea`},shadow:{light:`rgba(0, 0, 0, 0.1)`,medium:`rgba(0, 0, 0, 0.15)`,heavy:`rgba(0, 0, 0, 0.25)`,colored:`rgba(102, 126, 234, 0.2)`}},fonts:{primary:`'Cairo', sans-serif`,sizes:{xs:`0.75rem`,sm:`0.875rem`,base:`1rem`,lg:`1.125rem`,xl:`1.25rem`,"2xl":`1.5rem`,"3xl":`1.875rem`,"4xl":`2.25rem`,"5xl":`3rem`},weights:{light:300,normal:400,medium:500,semibold:600,bold:700}},spacing:{xs:`0.25rem`,sm:`0.5rem`,md:`1rem`,lg:`1.5rem`,xl:`2rem`,"2xl":`3rem`,"3xl":`4rem`},borderRadius:{none:`0`,sm:`0.25rem`,md:`0.375rem`,lg:`0.5rem`,xl:`0.75rem`,"2xl":`1rem`,full:`9999px`},breakpoints:{sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},transitions:{fast:`0.15s ease`,normal:`0.3s ease`,slow:`0.5s ease`}},Ta={...wa,colors:{...wa.colors,primary:`#7c3aed`,secondary:`#8b5cf6`,background:{primary:`#1a1a1a`,secondary:`#2d2d2d`,tertiary:`#404040`,card:`#2d2d2d`,modal:`#2d2d2d`,hover:`#404040`,active:`#525252`},text:{primary:`#ffffff`,secondary:`#d1d5db`,tertiary:`#9ca3af`,muted:`#6b7280`,disabled:`#4b5563`,inverse:`#1a1a1a`,link:`#8b5cf6`,linkHover:`#a78bfa`},border:{primary:`#404040`,secondary:`#525252`,light:`#374151`,focus:`#8b5cf6`},shadow:{light:`rgba(0, 0, 0, 0.3)`,medium:`rgba(0, 0, 0, 0.4)`,heavy:`rgba(0, 0, 0, 0.6)`,colored:`rgba(139, 92, 246, 0.3)`}}};var Ea=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),L=c(o(((e,t)=>{t.exports=Ea()}))()),Da=(0,x.createContext)();const Oa=()=>{let e=(0,x.useContext)(Da);if(!e)throw Error(`useTheme must be used within a ThemeProvider`);return e},ka=({children:e})=>{let[t,n]=(0,x.useState)(()=>localStorage.getItem(`y0-hardware-theme`)===`dark`),r=t?Ta:wa,i=()=>{n(e=>{let t=!e;return localStorage.setItem(`y0-hardware-theme`,t?`dark`:`light`),t})};(0,x.useEffect)(()=>{document.body.style.backgroundColor=r.colors.background.primary,document.body.style.color=r.colors.text.primary,document.body.style.transition=`background-color 0.3s ease, color 0.3s ease`},[r]);let a={isDarkMode:t,toggleTheme:i,theme:r};return(0,L.jsx)(Da.Provider,{value:a,children:(0,L.jsx)(ma,{theme:r,children:e})})};var Aa=(0,x.createContext)();const ja=()=>{let e=(0,x.useContext)(Aa);if(!e)throw Error(`useCart must be used within a CartProvider`);return e};var Ma={ADD_ITEM:`ADD_ITEM`,REMOVE_ITEM:`REMOVE_ITEM`,UPDATE_QUANTITY:`UPDATE_QUANTITY`,CLEAR_CART:`CLEAR_CART`,LOAD_CART:`LOAD_CART`},Na=(e,t)=>{switch(t.type){case Ma.ADD_ITEM:return e.items.find(e=>e.id===t.payload.id)?{...e,items:e.items.map(e=>e.id===t.payload.id?{...e,quantity:e.quantity+1}:e)}:{...e,items:[...e.items,{...t.payload,quantity:1}]};case Ma.REMOVE_ITEM:return{...e,items:e.items.filter(e=>e.id!==t.payload)};case Ma.UPDATE_QUANTITY:return{...e,items:e.items.map(e=>e.id===t.payload.id?{...e,quantity:Math.max(0,t.payload.quantity)}:e).filter(e=>e.quantity>0)};case Ma.CLEAR_CART:return{...e,items:[]};case Ma.LOAD_CART:return{...e,items:t.payload||[]};default:return e}},Pa={items:[]};const Fa=({children:e})=>{let[t,n]=(0,x.useReducer)(Na,Pa);(0,x.useEffect)(()=>{let e=localStorage.getItem(`y0-hardware-cart`);if(e)try{let t=JSON.parse(e);n({type:Ma.LOAD_CART,payload:t})}catch(e){console.error(`Error loading cart from localStorage:`,e)}},[]),(0,x.useEffect)(()=>{localStorage.setItem(`y0-hardware-cart`,JSON.stringify(t.items))},[t.items]);let r=e=>{n({type:Ma.ADD_ITEM,payload:e})},i=e=>{n({type:Ma.REMOVE_ITEM,payload:e})},a=(e,t)=>{n({type:Ma.UPDATE_QUANTITY,payload:{id:e,quantity:t}})},o=()=>{n({type:Ma.CLEAR_CART})},s=t.items.reduce((e,t)=>e+t.quantity,0),c=t.items.reduce((e,t)=>e+t.price*t.quantity,0),l={items:t.items,totalItems:s,totalPrice:c,addItem:r,removeItem:i,updateQuantity:a,clearCart:o};return(0,L.jsx)(Aa.Provider,{value:l,children:e})};var Ia={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},La=x.createContext&&x.createContext(Ia),Ra=[`attr`,`size`,`title`];function za(e,t){if(e==null)return{};var n=Ba(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ba(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Va(){return Va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Va.apply(this,arguments)}function Ha(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ua(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ha(Object(n),!0).forEach(function(t){Wa(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ha(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Wa(e,t,n){return t=Ga(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ga(e){var t=Ka(e,`string`);return typeof t==`symbol`?t:t+``}function Ka(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function qa(e){return e&&e.map((e,t)=>x.createElement(e.tag,Ua({key:t},e.attr),qa(e.child)))}function R(e){return t=>x.createElement(Ja,Va({attr:Ua({},e.attr)},t),qa(e.child))}function Ja(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=za(e,Ra),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),x.createElement(`svg`,Va({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Ua(Ua({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&x.createElement(`title`,null,i),e.children)};return La===void 0?t(Ia):x.createElement(La.Consumer,null,e=>t(e))}function Ya(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z`},child:[]}]})(e)}function Xa(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`},child:[]}]})(e)}function Za(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z`},child:[]}]})(e)}function Qa(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`},child:[]}]})(e)}function $a(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z`},child:[]}]})(e)}function eo(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z`},child:[]}]})(e)}function to(e){return R({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z`},child:[]}]})(e)}function no(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z`},child:[]}]})(e)}function ro(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z`},child:[]}]})(e)}function io(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z`},child:[]}]})(e)}function ao(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z`},child:[]}]})(e)}function oo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z`},child:[]}]})(e)}function so(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z`},child:[]}]})(e)}function co(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z`},child:[]}]})(e)}function lo(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z`},child:[]}]})(e)}function uo(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z`},child:[]}]})(e)}function fo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z`},child:[]}]})(e)}function po(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z`},child:[]}]})(e)}function mo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z`},child:[]}]})(e)}function ho(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z`},child:[]}]})(e)}function go(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z`},child:[]}]})(e)}function _o(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z`},child:[]}]})(e)}function vo(e){return R({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z`},child:[]}]})(e)}function yo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z`},child:[]}]})(e)}function bo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z`},child:[]}]})(e)}function xo(e){return R({tag:`svg`,attr:{viewBox:`0 0 384 512`},child:[{tag:`path`,attr:{d:`M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z`},child:[]}]})(e)}function So(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z`},child:[]}]})(e)}function Co(e){return R({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z`},child:[]}]})(e)}function wo(e){return R({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z`},child:[]}]})(e)}function To(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function z(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z`},child:[]}]})(e)}function B(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z`},child:[]}]})(e)}function Eo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z`},child:[]}]})(e)}function Do(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z`},child:[]}]})(e)}function Oo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z`},child:[]}]})(e)}function ko(e){return R({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z`},child:[]}]})(e)}function Ao(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z`},child:[]}]})(e)}function jo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z`},child:[]}]})(e)}function Mo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z`},child:[]}]})(e)}function No(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z`},child:[]}]})(e)}function V(e){return R({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z`},child:[]}]})(e)}function Po(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z`},child:[]}]})(e)}function Fo(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z`},child:[]}]})(e)}function Io(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z`},child:[]}]})(e)}function Lo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z`},child:[]}]})(e)}function Ro(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z`},child:[]}]})(e)}function zo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z`},child:[]}]})(e)}function Bo(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z`},child:[]}]})(e)}function Vo(e){return R({tag:`svg`,attr:{viewBox:`0 0 352 512`},child:[{tag:`path`,attr:{d:`M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z`},child:[]}]})(e)}function Ho(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z`},child:[]}]})(e)}function Uo(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z`},child:[]}]})(e)}function Wo(e){return R({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z`},child:[]}]})(e)}function Go(e){return R({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z`},child:[]}]})(e)}function Ko(e){return R({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z`},child:[]}]})(e)}function qo(e){return R({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z`},child:[]}]})(e)}function Jo(e){return R({tag:`svg`,attr:{viewBox:`0 0 576 512`},child:[{tag:`path`,attr:{d:`M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z`},child:[]}]})(e)}var Yo=(0,x.createContext)();const Xo=()=>{let e=(0,x.useContext)(Yo);if(!e)throw Error(`useNotification must be used within a NotificationProvider`);return e};var Zo=Ca`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Qo=Ca`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,$o=I.div`
  position: fixed;
  top: 100px;
  right: ${({theme:e})=>e.spacing.lg};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  max-width: 400px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    right: ${({theme:e})=>e.spacing.md};
    left: ${({theme:e})=>e.spacing.md};
    max-width: none;
  }
`,es=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg};
  background: ${({theme:e})=>e.colors.background.card};
  border: 1px solid ${({type:e,theme:t})=>{switch(e){case`success`:return t.colors.success;case`error`:return t.colors.error;case`warning`:return t.colors.warning;case`info`:return t.colors.info;default:return t.colors.border.primary}}};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: 0 8px 32px ${({theme:e})=>e.colors.shadow.medium};
  animation: ${({isExiting:e})=>e?Qo:Zo} 0.3s ease-out;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({type:e,theme:t})=>{switch(e){case`success`:return t.colors.success;case`error`:return t.colors.error;case`warning`:return t.colors.warning;case`info`:return t.colors.info;default:return t.colors.primary}}};
  }
`,ts=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${({type:e,theme:t})=>{switch(e){case`success`:return t.colors.success;case`error`:return t.colors.error;case`warning`:return t.colors.warning;case`info`:return t.colors.info;default:return t.colors.primary}}};
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
  }
`,ns=I.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
`,rs=I.h4`
  margin: 0;
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,os=I.p`
  margin: 0;
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.4;
`,ss=I.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.sm};
  }
`,cs=I.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${({type:e,theme:t})=>{switch(e){case`success`:return t.colors.success;case`error`:return t.colors.error;case`warning`:return t.colors.warning;case`info`:return t.colors.info;default:return t.colors.primary}}};
  width: ${({progress:e})=>e}%;
  transition: width 0.1s linear;
`,ls=({notification:e,onClose:t})=>(0,L.jsxs)(es,{type:e.type,isExiting:e.isExiting,children:[(0,L.jsx)(ts,{type:e.type,children:(e=>{switch(e){case`success`:return(0,L.jsx)(oo,{});case`error`:return(0,L.jsx)(Vo,{});case`warning`:return(0,L.jsx)(lo,{});case`info`:return(0,L.jsx)(_o,{});default:return(0,L.jsx)(_o,{})}})(e.type)}),(0,L.jsxs)(ns,{children:[(0,L.jsx)(rs,{children:e.title||(e=>{switch(e){case`success`:return`نجح`;case`error`:return`خطأ`;case`warning`:return`تحذير`;case`info`:return`معلومات`;default:return`إشعار`}})(e.type)}),(0,L.jsx)(os,{children:e.message})]}),(0,L.jsx)(ss,{onClick:()=>t(e.id),children:(0,L.jsx)(Vo,{})}),e.progress!==void 0&&(0,L.jsx)(cs,{type:e.type,progress:e.progress})]});const us=({children:e})=>{let[t,n]=(0,x.useState)([]),r=(0,x.useCallback)(e=>{let t=Date.now()+Math.random(),r={id:t,type:`info`,duration:5e3,...e};return n(e=>[...e,r]),r.duration>0&&setTimeout(()=>{i(t)},r.duration),t},[]),i=(0,x.useCallback)(e=>{n(t=>t.map(t=>t.id===e?{...t,isExiting:!0}:t)),setTimeout(()=>{n(t=>t.filter(t=>t.id!==e))},300)},[]),a=(0,x.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t}:n))},[]),o=(0,x.useCallback)(()=>{n([])},[]),s=(0,x.useCallback)((e,t={})=>r({type:`success`,message:e,...t}),[r]),c=(0,x.useCallback)((e,t={})=>r({type:`error`,message:e,duration:7e3,...t}),[r]),l=(0,x.useCallback)((e,t={})=>r({type:`warning`,message:e,...t}),[r]),u=(0,x.useCallback)((e,t={})=>r({type:`info`,message:e,...t}),[r]),d={notifications:t,addNotification:r,removeNotification:i,updateNotification:a,clearAll:o,success:s,error:c,warning:l,info:u};return(0,L.jsxs)(Yo.Provider,{value:d,children:[e,(0,L.jsx)($o,{children:t.map(e=>(0,L.jsx)(ls,{notification:e,onClose:i},e.id))})]})};var ds=(0,x.createContext)();const fs=()=>{let e=(0,x.useContext)(ds);if(!e)throw Error(`useWishlist must be used within a WishlistProvider`);return e};var ps={ADD_ITEM:`ADD_ITEM`,REMOVE_ITEM:`REMOVE_ITEM`,CLEAR_WISHLIST:`CLEAR_WISHLIST`,LOAD_WISHLIST:`LOAD_WISHLIST`},ms=(e,t)=>{switch(t.type){case ps.ADD_ITEM:return e.items.find(e=>e.id===t.payload.id)?e:{...e,items:[...e.items,{...t.payload,addedAt:new Date().toISOString()}],totalItems:e.totalItems+1};case ps.REMOVE_ITEM:let n=e.items.filter(e=>e.id!==t.payload);return{...e,items:n,totalItems:n.length};case ps.CLEAR_WISHLIST:return{items:[],totalItems:0};case ps.LOAD_WISHLIST:return{items:t.payload.items||[],totalItems:t.payload.items?.length||0};default:return e}},hs={items:[],totalItems:0};const gs=({children:e})=>{let[t,n]=(0,x.useReducer)(ms,hs);(0,x.useEffect)(()=>{try{let e=localStorage.getItem(`y0-hardware-wishlist`);if(e){let t=JSON.parse(e);n({type:ps.LOAD_WISHLIST,payload:t})}}catch(e){console.error(`Error loading wishlist from localStorage:`,e)}},[]),(0,x.useEffect)(()=>{try{localStorage.setItem(`y0-hardware-wishlist`,JSON.stringify(t))}catch(e){console.error(`Error saving wishlist to localStorage:`,e)}},[t]);let r=e=>{n({type:ps.ADD_ITEM,payload:e})},i=e=>{n({type:ps.REMOVE_ITEM,payload:e})},a={items:t.items,totalItems:t.totalItems,addItem:r,removeItem:i,toggleItem:e=>t.items.some(t=>t.id===e.id)?(i(e.id),!1):(r(e),!0),clearWishlist:()=>{n({type:ps.CLEAR_WISHLIST})},isInWishlist:e=>t.items.some(t=>t.id===e),getWishlistSummary:()=>{let e=t.items.reduce((e,t)=>e+t.price,0),n=t.totalItems>0?e/t.totalItems:0;return{totalItems:t.totalItems,totalValue:e,averagePrice:Math.round(n*100)/100}},getItemsByCategory:()=>{let e={};return t.items.forEach(t=>{e[t.category]||(e[t.category]=[]),e[t.category].push(t)}),e},getRecentItems:(e=5)=>[...t.items].sort((e,t)=>new Date(t.addedAt)-new Date(e.addedAt)).slice(0,e)};return(0,L.jsx)(ds.Provider,{value:a,children:e})},_s=Sa`
  /* CSS Reset & Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({theme:e})=>e.fonts.primary};
    line-height: 1.6;
    color: ${({theme:e})=>e.colors.text.primary};
    background-color: ${({theme:e})=>e.colors.background.primary};
    direction: rtl;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({theme:e})=>e.fonts.weights.semibold};
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({theme:e})=>e.colors.text.primary};
  }

  h1 { font-size: ${({theme:e})=>e.fonts.sizes[`4xl`]}; }
  h2 { font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]}; }
  h3 { font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]}; }
  h4 { font-size: ${({theme:e})=>e.fonts.sizes.xl}; }
  h5 { font-size: ${({theme:e})=>e.fonts.sizes.lg}; }
  h6 { font-size: ${({theme:e})=>e.fonts.sizes.base}; }

  p {
    margin-bottom: 1rem;
    color: ${({theme:e})=>e.colors.text.secondary};
  }

  /* Links */
  a {
    color: ${({theme:e})=>e.colors.text.link};
    text-decoration: none;
    transition: color ${({theme:e})=>e.transitions.fast};

    &:hover {
      color: ${({theme:e})=>e.colors.text.linkHover};
    }
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Buttons */
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    transition: all ${({theme:e})=>e.transitions.fast};

    &:focus {
      outline: 2px solid ${({theme:e})=>e.colors.border.focus};
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  /* Form Elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid ${({theme:e})=>e.colors.border.primary};
    border-radius: ${({theme:e})=>e.borderRadius.md};
    padding: 0.75rem;
    transition: border-color ${({theme:e})=>e.transitions.fast};

    &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.colors.border.focus};
      box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.shadow.colored};
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.text.muted};
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border.secondary};
    border-radius: ${({theme:e})=>e.borderRadius.full};

    &:hover {
      background: ${({theme:e})=>e.colors.text.tertiary};
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({theme:e})=>e.spacing.md};

    @media (min-width: ${({theme:e})=>e.breakpoints.sm}) {
      padding: 0 ${({theme:e})=>e.spacing.lg};
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
      padding: 0 ${({theme:e})=>e.spacing.xl};
    }
  }

  /* Utility Classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  /* Animation Classes */
  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }

  .slide-up {
    animation: slideUp 0.5s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Loading Animation */
  .loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid ${({theme:e})=>e.colors.border.light};
    border-radius: 50%;
    border-top-color: ${({theme:e})=>e.colors.primary};
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;var vs=Ca`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ys=I.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${vs} 1s linear infinite;
  margin-right: ${({theme:e})=>e.spacing.sm};
`,bs={primary:F`
    background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
    color: ${({theme:e})=>e.colors.text.inverse};
    border: none;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px ${({theme:e})=>e.colors.shadow.colored};
    }

    &:active {
      transform: translateY(0);
    }
  `,secondary:F`
    background: transparent;
    color: ${({theme:e})=>e.colors.primary};
    border: 2px solid ${({theme:e})=>e.colors.primary};

    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.primary};
      color: ${({theme:e})=>e.colors.text.inverse};
      transform: translateY(-2px);
    }
  `,success:F`
    background: ${({theme:e})=>e.colors.success};
    color: ${({theme:e})=>e.colors.text.inverse};
    border: none;

    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.success};
      filter: brightness(1.1);
      transform: translateY(-2px);
    }
  `,danger:F`
    background: ${({theme:e})=>e.colors.error};
    color: ${({theme:e})=>e.colors.text.inverse};
    border: none;

    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.error};
      filter: brightness(1.1);
      transform: translateY(-2px);
    }
  `,ghost:F`
    background: transparent;
    color: ${({theme:e})=>e.colors.text.primary};
    border: none;

    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.background.hover};
    }
  `},xs={sm:F`
    padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
    font-size: ${({theme:e})=>e.fonts.sizes.sm};
    border-radius: ${({theme:e})=>e.borderRadius.md};
  `,md:F`
    padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
    font-size: ${({theme:e})=>e.fonts.sizes.base};
    border-radius: ${({theme:e})=>e.borderRadius.lg};
  `,lg:F`
    padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.xl};
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
    border-radius: ${({theme:e})=>e.borderRadius.xl};
  `},Ss=I.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  text-align: center;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.normal};
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  /* Apply variant styles */
  ${({variant:e})=>bs[e]||bs.primary}
  
  /* Apply size styles */
  ${({size:e})=>xs[e]||xs.md}
  
  /* Full width */
  ${({fullWidth:e})=>e&&F`
    width: 100%;
  `}
  
  /* Loading state */
  ${({loading:e})=>e&&F`
    cursor: not-allowed;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    & > * {
      opacity: 0;
    }
  `}
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none !important;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,H=({children:e,variant:t=`primary`,size:n=`md`,fullWidth:r=!1,disabled:i=!1,loading:a=!1,onClick:o,type:s=`button`,className:c,...l})=>(0,L.jsxs)(Ss,{variant:t,size:n,fullWidth:r,disabled:i||a,onClick:o,type:s,className:c,...l,children:[a&&(0,L.jsx)(ys,{}),e]});const Cs=[{id:1,name:`معالج Intel Core i9-13900K`,category:`pc-parts`,subcategory:`processors`,brand:`intel`,price:18999,oldPrice:21999,rating:5,reviewCount:45,image:`https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop`,badge:`new`,inStock:!0,description:`معالج Intel Core i9 الجيل الثالث عشر بـ 24 نواة و 32 خيط معالجة`,specifications:{cores:`24 نواة`,threads:`32 خيط`,baseFreq:`3.0 GHz`,boostFreq:`5.8 GHz`,cache:`36 MB`,socket:`LGA 1700`}},{id:2,name:`معالج AMD Ryzen 9 7900X`,category:`pc-parts`,subcategory:`processors`,brand:`amd`,price:16499,oldPrice:18999,rating:5,reviewCount:38,image:`https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=400&fit=crop`,badge:`sale`,inStock:!0,description:`معالج AMD Ryzen 9 بتقنية 5nm وأداء استثنائي للألعاب`,specifications:{cores:`12 نواة`,threads:`24 خيط`,baseFreq:`4.7 GHz`,boostFreq:`5.6 GHz`,cache:`76 MB`,socket:`AM5`}},{id:3,name:`كارت شاشة NVIDIA RTX 4080`,category:`pc-parts`,subcategory:`graphics-cards`,brand:`nvidia`,price:35999,oldPrice:39999,rating:5,reviewCount:67,image:`https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop`,badge:`sale`,inStock:!0,description:`كارت شاشة RTX 4080 بذاكرة 16GB GDDR6X للألعاب بدقة 4K`,specifications:{memory:`16GB GDDR6X`,memoryBus:`256-bit`,coreClock:`2205 MHz`,boostClock:`2505 MHz`,rtCores:`76`,tensorCores:`304`}},{id:4,name:`لابتوب ASUS ROG Strix G15`,category:`laptops`,subcategory:`gaming`,brand:`asus`,price:45999,oldPrice:52999,rating:5,reviewCount:78,image:`https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop`,badge:`sale`,inStock:!0,description:`لابتوب ألعاب ASUS ROG بمعالج AMD Ryzen 9 وكارت RTX 4070`,specifications:{processor:`AMD Ryzen 9 7940HS`,graphics:`NVIDIA RTX 4070 8GB`,memory:`32GB DDR5`,storage:`1TB NVMe SSD`,display:`15.6" QHD 165Hz`,battery:`90Wh`}},{id:5,name:`لوحة مفاتيح Corsair K95 RGB`,category:`accessories`,subcategory:`keyboards`,brand:`corsair`,price:2499,oldPrice:2999,rating:5,reviewCount:156,image:`https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop`,badge:`bestseller`,inStock:!0,description:`لوحة مفاتيح ميكانيكية RGB مع مفاتيح Cherry MX`,specifications:{switchType:`Cherry MX Speed`,backlight:`RGB Per-Key`,connectivity:`USB-C`,layout:`Full Size`,macroKeys:`6`,mediaControls:`نعم`}},{id:6,name:`فأرة Logitech G Pro X Superlight`,category:`accessories`,subcategory:`mice`,brand:`logitech`,price:1899,oldPrice:2199,rating:5,reviewCount:234,image:`https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop`,badge:`bestseller`,inStock:!0,description:`فأرة ألعاب لاسلكية خفيفة الوزن مع حساس HERO 25K`,specifications:{sensor:`HERO 25K`,dpi:`25,600 DPI`,weight:`63g`,connectivity:`LIGHTSPEED Wireless`,battery:`70 ساعة`,buttons:`5`}},{id:21,name:`Intel Core i7-10700K مستعمل`,description:`معالج Intel Core i7 الجيل العاشر، حالة ممتازة، تم اختباره بالكامل`,price:4500,oldPrice:6500,image:`/images/used-i7-10700k.jpg`,category:`used`,subcategory:`processors`,brand:`intel`,condition:`excellent`,inStock:!0,rating:4.3,reviewCount:12,badge:`used`,usageTime:`8 أشهر`,warranty:`3 أشهر ضمان المتجر`,specifications:{cores:`8`,threads:`16`,baseClock:`3.8 GHz`,boostClock:`5.1 GHz`,socket:`LGA 1200`,tdp:`125W`}},{id:22,name:`RTX 3070 مستعملة - حالة ممتازة`,description:`كارت شاشة RTX 3070 مستعمل، لم يستخدم في التعدين، حالة ممتازة`,price:8500,oldPrice:12e3,image:`/images/used-rtx-3070.jpg`,category:`used`,subcategory:`graphics-cards`,brand:`nvidia`,condition:`excellent`,inStock:!0,rating:4.5,reviewCount:8,badge:`used`,usageTime:`6 أشهر`,warranty:`6 أشهر ضمان المتجر`,specifications:{memory:`8GB GDDR6`,memoryBus:`256-bit`,baseClock:`1500 MHz`,boostClock:`1725 MHz`,rayTracing:`نعم`,dlss:`نعم`}},{id:23,name:`لابتوب Dell Inspiron 15 مستعمل`,description:`لابتوب Dell مستعمل بحالة جيدة جداً، مناسب للدراسة والعمل`,price:7500,oldPrice:11e3,image:`/images/used-dell-inspiron.jpg`,category:`used`,subcategory:`laptops`,brand:`dell`,condition:`good`,inStock:!0,rating:4,reviewCount:15,badge:`used`,usageTime:`سنة واحدة`,warranty:`شهر واحد ضمان المتجر`,specifications:{processor:`Intel Core i5-10210U`,memory:`8GB DDR4`,storage:`256GB SSD`,display:`15.6 بوصة Full HD`,graphics:`Intel UHD Graphics`,battery:`3-4 ساعات`}},{id:24,name:`ذاكرة عشوائية Corsair 16GB مستعملة`,description:`ذاكرة عشوائية Corsair Vengeance 16GB مستعملة، تعمل بكفاءة عالية`,price:1200,oldPrice:1800,image:`/images/used-corsair-ram.jpg`,category:`used`,subcategory:`memory`,brand:`corsair`,condition:`like-new`,inStock:!0,rating:4.7,reviewCount:6,badge:`used`,usageTime:`4 أشهر`,warranty:`شهرين ضمان المتجر`,specifications:{capacity:`16GB (2x8GB)`,type:`DDR4`,speed:`3200 MHz`,latency:`CL16`,voltage:`1.35V`}},{id:25,name:`SSD Samsung 500GB مستعمل`,description:`قرص SSD سامسونج 500GB مستعمل، سرعة عالية وأداء ممتاز`,price:800,oldPrice:1200,image:`/images/used-samsung-ssd.jpg`,category:`used`,subcategory:`storage`,brand:`samsung`,condition:`excellent`,inStock:!0,rating:4.4,reviewCount:9,badge:`used`,usageTime:`5 أشهر`,warranty:`شهر واحد ضمان المتجر`,specifications:{capacity:`500GB`,interface:`SATA III`,readSpeed:`560 MB/s`,writeSpeed:`530 MB/s`,formFactor:`2.5 inch`}},{id:26,name:`لوحة مفاتيح Razer BlackWidow مستعملة`,description:`لوحة مفاتيح ميكانيكية Razer مستعملة، مفاتيح Cherry MX Blue`,price:1500,oldPrice:2500,image:`/images/used-razer-keyboard.jpg`,category:`used`,subcategory:`keyboards`,brand:`razer`,condition:`good`,inStock:!0,rating:4.2,reviewCount:7,badge:`used`,usageTime:`10 أشهر`,warranty:`أسبوعين ضمان المتجر`,specifications:{switchType:`Cherry MX Blue`,backlight:`RGB`,connectivity:`USB`,layout:`Full Size`,macroKeys:`نعم`}}],ws={all:`جميع المنتجات`,"pc-parts":`قطع الكمبيوتر`,laptops:`اللابتوب`,accessories:`الاكسسوارات`,used:`منتجات مستعملة`},Ts={processors:`المعالجات`,"graphics-cards":`كروت الشاشة`,motherboards:`اللوحات الأم`,memory:`الذاكرة العشوائية`,storage:`وحدات التخزين`,"power-supplies":`مزودات الطاقة`,cases:`صناديق الكمبيوتر`,cooling:`أنظمة التبريد`,gaming:`ألعاب`,business:`أعمال`,keyboards:`لوحات المفاتيح`,mice:`الفئران`,headsets:`السماعات`,monitors:`الشاشات`,webcams:`كاميرات الويب`},Es={intel:`Intel`,amd:`AMD`,nvidia:`NVIDIA`,asus:`ASUS`,msi:`MSI`,corsair:`Corsair`,dell:`Dell`,razer:`Razer`,logitech:`Logitech`,steelseries:`SteelSeries`,samsung:`Samsung`,"fractal-design":`Fractal Design`},Ds={1:[{id:1,rating:5,title:`معالج رائع للألعاب والعمل`,comment:`هذا المعالج أداؤه ممتاز جداً في الألعاب والبرامج الثقيلة. درجات الحرارة معقولة مع التبريد المناسب. أنصح به بشدة لمن يريد أداء عالي.`,date:`2024-10-15T10:30:00Z`,user:{name:`أحمد محمد`,avatar:null},verified:!0,likes:15,dislikes:1,images:[]},{id:2,rating:4,title:`أداء ممتاز لكن يحتاج تبريد قوي`,comment:`المعالج سريع جداً ويتعامل مع جميع المهام بسهولة. لكن يحتاج نظام تبريد جيد لأنه يسخن قليلاً تحت الضغط العالي.`,date:`2024-10-12T14:20:00Z`,user:{name:`سارة أحمد`,avatar:null},verified:!0,likes:8,dislikes:0,images:[]},{id:3,rating:5,title:`الأفضل في فئته`,comment:`بعد استخدام المعالج لشهرين، أستطيع القول أنه الأفضل في فئته. سرعة في التشغيل وكفاءة في استهلاك الطاقة.`,date:`2024-10-08T09:15:00Z`,user:{name:`محمود علي`,avatar:null},verified:!1,likes:12,dislikes:0,images:[]}],2:[{id:4,rating:5,title:`معالج AMD ممتاز`,comment:`أداء رائع في المونتاج والألعاب. أفضل من Intel في نفس الفئة السعرية. التبريد المدمج كافي للاستخدام العادي.`,date:`2024-10-14T16:45:00Z`,user:{name:`خالد حسن`,avatar:null},verified:!0,likes:20,dislikes:2,images:[]},{id:5,rating:4,title:`جيد لكن يحتاج BIOS محدث`,comment:`المعالج ممتاز لكن تأكد من تحديث BIOS للوحة الأم قبل التركيب. بعد التحديث يعمل بشكل مثالي.`,date:`2024-10-10T11:30:00Z`,user:{name:`فاطمة محمد`,avatar:null},verified:!0,likes:6,dislikes:1,images:[]}],3:[{id:6,rating:5,title:`كارت شاشة خرافي للألعاب`,comment:`يشغل جميع الألعاب على أعلى إعدادات بدقة 4K. Ray tracing ممتاز والأداء مستقر. يستحق السعر تماماً.`,date:`2024-10-13T13:20:00Z`,user:{name:`عمر سعد`,avatar:null},verified:!0,likes:25,dislikes:0,images:[]},{id:7,rating:4,title:`ممتاز لكن يستهلك طاقة عالية`,comment:`الأداء رائع جداً لكن تأكد من أن مزود الطاقة لديك 850W على الأقل. التبريد جيد والضوضاء معقولة.`,date:`2024-10-09T15:10:00Z`,user:{name:`ليلى أحمد`,avatar:null},verified:!0,likes:18,dislikes:1,images:[]}]};var Os=Ca`
  0%, 100% { box-shadow: 0 0 5px ${e=>e.theme?.colors?.primary||`#667eea`}40; }
  50% { box-shadow: 0 0 20px ${e=>e.theme?.colors?.primary||`#667eea`}60; }
`,ks=I.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`,As=I.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({theme:e})=>e.colors.background.card};
  border: 2px solid ${({aiActive:e,theme:t})=>e?t.colors.secondary:t.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  transition: all ${({theme:e})=>e.transitions.normal};
  overflow: hidden;
  
  ${({aiActive:e})=>e&&`animation: ${Os} 2s infinite;`}
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
  }
  
  &:focus-within {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
  }
`,js=I.div`
  padding: ${({theme:e})=>e.spacing.md};
  color: ${({active:e,theme:t})=>e?t.colors.secondary:t.colors.text.muted};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  
  svg {
    animation: ${({active:e})=>e?`pulse 1.5s infinite`:`none`};
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`,Ms=I.input`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.md};
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,Ns=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.sm};
`,Ps=I.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({active:e,theme:t})=>e?t.colors.primary:`transparent`};
  color: ${({active:e,theme:t})=>e?t.colors.text.inverse:t.colors.text.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Fs=I.button`
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  border: none;
  background: ${({theme:e})=>e.colors.primary};
  color: ${({theme:e})=>e.colors.text.inverse};
  border-radius: 0 ${({theme:e})=>e.borderRadius.xl} ${({theme:e})=>e.borderRadius.xl} 0;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  
  &:hover {
    background: ${({theme:e})=>e.colors.secondary};
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
  }
`,Is=I.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({theme:e})=>e.colors.background.card};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: 0 8px 32px ${({theme:e})=>e.colors.shadow.medium};
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
  margin-top: ${({theme:e})=>e.spacing.xs};
`,Ls=I.div`
  padding: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`,Rs=I.h4`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0 0 ${({theme:e})=>e.spacing.sm} 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,zs=I.div`
  padding: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: all ${({theme:e})=>e.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
`,Bs=I.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.primary};
  font-size: 14px;
`,Vs=I.div`
  flex: 1;
`,Hs=I.div`
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
`,Us=I.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
`,Ws=I.div`
  background: linear-gradient(135deg, 
    ${({theme:e})=>e.colors.info}10, 
    ${({theme:e})=>e.colors.primary}10
  );
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  margin: ${({theme:e})=>e.spacing.sm} 0;
  border-left: 4px solid ${({theme:e})=>e.colors.info};
`,Gs=I.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Ks=({onSearch:e,placeholder:t=`ابحث بذكاء... جرب 'أريد جهاز ألعاب بميزانية 20000'`})=>{let[n,r]=(0,x.useState)(``),[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(!1),[u,d]=(0,x.useState)([]),[f,p]=(0,x.useState)(``),m=Xe(),h=(0,x.useRef)(null),g=(0,x.useRef)(null);(0,x.useEffect)(()=>{(`webkitSpeechRecognition`in window||`SpeechRecognition`in window)&&(g.current=new(window.SpeechRecognition||window.webkitSpeechRecognition),g.current.continuous=!1,g.current.interimResults=!1,g.current.lang=`ar-EG`,g.current.onresult=e=>{let t=e.results[0][0].transcript;r(t),l(!1),_(t)},g.current.onerror=()=>{l(!1)},g.current.onend=()=>{l(!1)})},[]);let _=e=>{let t=e.toLowerCase();s(!0);let n=[],r=``;if(t.includes(`ألعاب`)||t.includes(`جيمنج`)||t.includes(`gaming`))n=[{type:`build`,title:`بناء جهاز ألعاب متكامل`,description:`معالج + كارت شاشة + ذاكرة`,icon:(0,L.jsx)(Ao,{}),action:()=>m(`/shop?category=pc-parts&gaming=true`)},{type:`gpu`,title:`كروت شاشة للألعاب`,description:`RTX 4070, RTX 4080, RTX 4090`,icon:(0,L.jsx)(bo,{}),action:()=>m(`/shop?subcategory=graphics-cards`)},{type:`laptop`,title:`لابتوب ألعاب`,description:`أجهزة محمولة للألعاب`,icon:(0,L.jsx)(vo,{}),action:()=>m(`/shop?category=laptops&subcategory=gaming`)}],r=`تم اكتشاف اهتمامك بالألعاب! إليك أفضل الخيارات المتاحة.`;else if(t.match(/\d+/)&&(t.includes(`ميزانية`)||t.includes(`جنيه`)||t.includes(`ج.م`))){let e=parseInt(t.match(/\d+/)[0]);e<15e3?(n=[{type:`budget`,title:`منتجات اقتصادية`,description:`أفضل قيمة مقابل السعر`,icon:(0,L.jsx)(fo,{}),action:()=>m(`/shop?maxPrice=${e}`)},{type:`used`,title:`منتجات مستعملة`,description:`وفر أكثر مع منتجات مضمونة`,icon:(0,L.jsx)(vo,{}),action:()=>m(`/shop?category=used`)}],r=`بميزانية ${e} ج.م، يمكنك الحصول على منتجات ممتازة!`):e<3e4?(n=[{type:`mid`,title:`منتجات متوسطة المدى`,description:`توازن مثالي بين الأداء والسعر`,icon:(0,L.jsx)(Ao,{}),action:()=>m(`/shop?minPrice=${e-5e3}&maxPrice=${e}`)}],r=`ميزانية ممتازة! يمكنك بناء نظام قوي بـ ${e} ج.م`):(n=[{type:`premium`,title:`منتجات عالية الأداء`,description:`أحدث التقنيات والأداء الأقوى`,icon:(0,L.jsx)(bo,{}),action:()=>m(`/shop?minPrice=${e-1e4}`)}],r=`ميزانية رائعة! يمكنك الحصول على أقوى المنتجات المتاحة.`)}else t.includes(`معالج`)||t.includes(`بروسيسور`)?(n=[{type:`intel`,title:`معالجات Intel`,description:`Core i5, i7, i9`,icon:(0,L.jsx)(Ao,{}),action:()=>m(`/shop?subcategory=processors&brand=intel`)},{type:`amd`,title:`معالجات AMD`,description:`Ryzen 5, 7, 9`,icon:(0,L.jsx)(bo,{}),action:()=>m(`/shop?subcategory=processors&brand=amd`)}],r=`المعالج هو قلب الكمبيوتر! اختر حسب استخدامك.`):(n=[{type:`popular`,title:`المنتجات الشائعة`,description:`الأكثر مبيعاً هذا الشهر`,icon:(0,L.jsx)(vo,{}),action:()=>m(`/shop?sort=popular`)},{type:`new`,title:`أحدث المنتجات`,description:`آخر الإصدارات والتقنيات`,icon:(0,L.jsx)(Ao,{}),action:()=>m(`/shop?filter=new`)},{type:`deals`,title:`العروض والخصومات`,description:`وفر أكثر مع العروض الحالية`,icon:(0,L.jsx)(fo,{}),action:()=>m(`/shop?deals=true`)}],r=`جرب البحث بطريقة طبيعية مثل "أريد جهاز للألعاب" أو "معالج بميزانية 10000"`);d(n),p(r),a(!0),setTimeout(()=>s(!1),2e3)};(0,x.useEffect)(()=>{n.length>3?_(n):(a(!1),d([]),p(``))},[n]);let v=()=>{n.trim()&&(e?e(n):m(`/shop?search=${encodeURIComponent(n)}`),a(!1))},y=e=>{e.key===`Enter`&&v()},b=()=>{g.current&&!c&&(l(!0),g.current.start())},S=()=>{g.current&&c&&(g.current.stop(),l(!1))},C=e=>{e.action(),a(!1)};return(0,L.jsxs)(ks,{children:[(0,L.jsxs)(As,{aiActive:o,children:[(0,L.jsxs)(js,{active:o,children:[(0,L.jsx)(ro,{}),`AI`]}),(0,L.jsx)(Ms,{ref:h,type:`text`,placeholder:t,value:n,onChange:e=>r(e.target.value),onKeyPress:y,onFocus:()=>n.length>3&&a(!0)}),(0,L.jsxs)(Ns,{children:[g.current&&(0,L.jsx)(Ps,{active:c,onClick:c?S:b,title:`البحث الصوتي`,children:(0,L.jsx)(wo,{})}),(0,L.jsx)(Ps,{title:`البحث بالصورة (قريباً)`,children:(0,L.jsx)(io,{})})]}),(0,L.jsxs)(Fs,{onClick:v,children:[(0,L.jsx)(jo,{}),`بحث ذكي`]})]}),i&&(u.length>0||f)&&(0,L.jsxs)(Is,{children:[f&&(0,L.jsx)(Ws,{children:(0,L.jsxs)(Gs,{children:[(0,L.jsx)(ro,{}),f]})}),u.length>0&&(0,L.jsxs)(Ls,{children:[(0,L.jsxs)(Rs,{children:[(0,L.jsx)(bo,{}),`اقتراحات ذكية`]}),u.map((e,t)=>(0,L.jsxs)(zs,{onClick:()=>C(e),children:[(0,L.jsx)(Bs,{children:e.icon}),(0,L.jsxs)(Vs,{children:[(0,L.jsx)(Hs,{children:e.title}),(0,L.jsx)(Us,{children:e.description})]})]},t))]})]})]})},qs=I.header`
  background: ${({theme:e})=>e.colors.background.card};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.primary};
  box-shadow: 0 2px 8px ${({theme:e})=>e.colors.shadow.light};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all ${({theme:e})=>e.transitions.normal};
`,Js=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 0 ${({theme:e})=>e.spacing.md};
  }
`,Ys=I(O)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: ${({theme:e})=>e.colors.secondary};
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  }
`,Xs=I.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,Zs=I.ul`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};
  list-style: none;
  margin: 0;
  padding: 0;
`,Qs=I.li`
  position: relative;
`,$s=I(O)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.text.primary};
  text-decoration: none;
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.primary};
  }
  
  &.active {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
`,ec=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`;I.div`
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    display: none;
  }
`,I.input`
  width: 300px;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  padding-right: 40px;
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.background.secondary};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.shadow.colored};
    width: 350px;
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    width: 250px;
    
    &:focus {
      width: 300px;
    }
  }
`,I.button`
  position: absolute;
  right: ${({theme:e})=>e.spacing.sm};
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.tertiary};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: color ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`;var tc=I.button`
  position: relative;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.primary};
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.xl};
  }
`,nc=I.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background: ${({theme:e})=>e.colors.error};
  color: ${({theme:e})=>e.colors.text.inverse};
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  padding: 2px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`,rc=I.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.primary};
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
  }
`,ic=I.button`
  display: none;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.xl};
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: block;
  }
`,ac=I.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({theme:e})=>e.colors.background.card};
  border-top: 1px solid ${({theme:e})=>e.colors.border.primary};
  box-shadow: 0 4px 12px ${({theme:e})=>e.colors.shadow.medium};
  padding: ${({theme:e})=>e.spacing.lg};
  
  &.open {
    display: block;
  }
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: ${({isOpen:e})=>e?`block`:`none`};
  }
`,oc=I.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,sc=I(O)`
  display: block;
  padding: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.text.primary};
  text-decoration: none;
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.primary};
  }
  
  &.active {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
`,cc=()=>{let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(``),{isDarkMode:i,toggleTheme:a}=Oa(),{totalItems:o}=ja(),{totalItems:s}=fs(),c=qe(),l=[{path:`/`,label:`الرئيسية`},{path:`/shop`,label:`المنتجات`},{path:`/about`,label:`من نحن`},{path:`/contact`,label:`تواصل معنا`}];return(0,L.jsxs)(qs,{children:[(0,L.jsxs)(Js,{children:[(0,L.jsxs)(Ys,{to:`/`,children:[(0,L.jsx)(So,{}),`Y0 Hardware`]}),(0,L.jsx)(Xs,{children:(0,L.jsx)(Zs,{children:l.map(e=>(0,L.jsx)(Qs,{children:(0,L.jsx)($s,{to:e.path,className:c.pathname===e.path?`active`:``,children:e.label})},e.path))})}),(0,L.jsxs)(ec,{children:[(0,L.jsx)(Ks,{placeholder:`ابحث بذكاء... جرب 'أريد جهاز ألعاب بميزانية 20000'`}),(0,L.jsxs)(tc,{as:O,to:`/wishlist`,children:[(0,L.jsx)(ho,{}),s>0&&(0,L.jsx)(nc,{children:s})]}),(0,L.jsxs)(tc,{as:O,to:`/cart`,children:[(0,L.jsx)(Fo,{}),o>0&&(0,L.jsx)(nc,{children:o})]}),(0,L.jsx)(rc,{onClick:a,title:`تبديل المظهر`,children:i?(0,L.jsx)(Lo,{}):(0,L.jsx)(z,{})}),(0,L.jsx)(ic,{onClick:()=>{t(!e)},children:e?(0,L.jsx)(Vo,{}):(0,L.jsx)(no,{})})]})]}),(0,L.jsx)(ac,{isOpen:e,children:(0,L.jsx)(oc,{children:l.map(e=>(0,L.jsx)(`li`,{children:(0,L.jsx)(sc,{to:e.path,className:c.pathname===e.path?`active`:``,onClick:()=>t(!1),children:e.label})},e.path))})})]})},lc=I.footer`
  background: ${({theme:e})=>e.colors.background.secondary};
  border-top: 1px solid ${({theme:e})=>e.colors.border.primary};
  margin-top: auto;
`,uc=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[`3xl`]} ${({theme:e})=>e.spacing.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.md};
  }
`,dc=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.lg};
  }
`,fc=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,pc=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,mc=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,hc=I(O)`
  color: ${({theme:e})=>e.colors.text.secondary};
  text-decoration: none;
  padding: ${({theme:e})=>e.spacing.xs} 0;
  transition: color ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
  }
`,gc=I.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,U=I.li`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    color: ${({theme:e})=>e.colors.primary};
    flex-shrink: 0;
  }
`,_c=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,vc=I.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({theme:e})=>e.colors.background.hover};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
  }
`,yc=I.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border.primary};
  padding-top: ${({theme:e})=>e.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`,bc=I.p`
  color: ${({theme:e})=>e.colors.text.tertiary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  
  svg {
    color: ${({theme:e})=>e.colors.error};
  }
`,xc=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  }
`,Sc=()=>{let e=new Date().getFullYear();return(0,L.jsx)(lc,{children:(0,L.jsxs)(uc,{children:[(0,L.jsxs)(dc,{children:[(0,L.jsxs)(fc,{children:[(0,L.jsxs)(xc,{children:[(0,L.jsx)(So,{}),`Y0 Hardware`]}),(0,L.jsx)(mc,{children:`متجر Y0 Hardware المتخصص في بيع قطع الكمبيوتر واللابتوب والاكسسوارات بأفضل الأسعار وأعلى جودة في السوق المصري.`}),(0,L.jsxs)(_c,{children:[(0,L.jsx)(vc,{href:`#`,"aria-label":`Facebook`,children:(0,L.jsx)(Ya,{})}),(0,L.jsx)(vc,{href:`#`,"aria-label":`Twitter`,children:(0,L.jsx)(Za,{})}),(0,L.jsx)(vc,{href:`#`,"aria-label":`Instagram`,children:(0,L.jsx)(Xa,{})}),(0,L.jsx)(vc,{href:`#`,"aria-label":`YouTube`,children:(0,L.jsx)($a,{})})]})]}),(0,L.jsxs)(fc,{children:[(0,L.jsx)(pc,{children:`روابط سريعة`}),(0,L.jsxs)(gc,{children:[(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/`,children:`الرئيسية`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/shop`,children:`المنتجات`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/about`,children:`من نحن`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/contact`,children:`تواصل معنا`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/cart`,children:`سلة التسوق`})})]})]}),(0,L.jsxs)(fc,{children:[(0,L.jsx)(pc,{children:`الفئات`}),(0,L.jsxs)(gc,{children:[(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/shop?category=pc-parts`,children:`قطع الكمبيوتر`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/shop?category=laptops`,children:`اللابتوب`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/shop?category=accessories`,children:`الاكسسوارات`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/shop?category=gaming`,children:`ألعاب`})}),(0,L.jsx)(`li`,{children:(0,L.jsx)(hc,{to:`/shop?deals=true`,children:`العروض الخاصة`})})]})]}),(0,L.jsxs)(fc,{children:[(0,L.jsx)(pc,{children:`معلومات التواصل`}),(0,L.jsxs)(gc,{children:[(0,L.jsxs)(U,{children:[(0,L.jsx)(Eo,{}),(0,L.jsx)(`span`,{children:`01234567890`})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)(co,{}),(0,L.jsx)(`span`,{children:`info@y0hardware.com`})]}),(0,L.jsxs)(U,{children:[(0,L.jsx)(xo,{}),(0,L.jsx)(`span`,{children:`القاهرة، مصر`})]})]})]})]}),(0,L.jsxs)(yc,{children:[(0,L.jsxs)(bc,{children:[`© `,e,` Y0 Hardware. جميع الحقوق محفوظة.`]}),(0,L.jsxs)(bc,{children:[`صُنع بـ `,(0,L.jsx)(ho,{}),` في مصر`]})]})]})})},Cc=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: ${({theme:e})=>e.spacing[`3xl`]};
  text-align: center;
  background: ${({theme:e})=>e.colors.background.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  margin: ${({theme:e})=>e.spacing.xl};
`,wc=I.div`
  width: 80px;
  height: 80px;
  background: ${({theme:e})=>e.colors.error}20;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
    color: ${({theme:e})=>e.colors.error};
  }
`,Tc=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Ec=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  color: ${({theme:e})=>e.colors.text.secondary};
  max-width: 500px;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  line-height: 1.6;
`;I.details`
  margin-top: ${({theme:e})=>e.spacing.lg};
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.background.card};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  max-width: 600px;
  width: 100%;
  
  summary {
    cursor: pointer;
    font-weight: ${({theme:e})=>e.fonts.weights.medium};
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-bottom: ${({theme:e})=>e.spacing.sm};
    
    &:hover {
      color: ${({theme:e})=>e.colors.text.primary};
    }
  }
`,I.pre`
  background: ${({theme:e})=>e.colors.background.secondary};
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`;var Dc=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`,Oc=class extends x.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}handleRetry=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};handleGoHome=()=>{window.location.href=`/`};render(){if(this.state.hasError){let{fallback:e}=this.props;return e?(0,L.jsx)(e,{error:this.state.error,errorInfo:this.state.errorInfo,onRetry:this.handleRetry,onGoHome:this.handleGoHome}):(0,L.jsxs)(Cc,{children:[(0,L.jsx)(wc,{children:(0,L.jsx)(lo,{})}),(0,L.jsx)(Tc,{children:`عذراً، حدث خطأ غير متوقع`}),(0,L.jsx)(Ec,{children:`نعتذر عن هذا الإزعاج. حدث خطأ تقني أثناء تحميل هذه الصفحة. يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.`}),(0,L.jsxs)(Dc,{children:[(0,L.jsxs)(H,{variant:`primary`,onClick:this.handleRetry,children:[(0,L.jsx)(Oo,{}),`المحاولة مرة أخرى`]}),(0,L.jsxs)(H,{variant:`secondary`,onClick:this.handleGoHome,children:[(0,L.jsx)(go,{}),`العودة للرئيسية`]})]}),!1]})}return this.props.children}};const kc=()=>{let e=qe();(0,x.useEffect)(()=>{t(e.pathname)},[e]);let t=e=>{typeof gtag<`u`&&gtag(`config`,`GA_MEASUREMENT_ID`,{page_path:e});let t=JSON.parse(localStorage.getItem(`y0-hardware-analytics`)||`{}`);t.pageViews=t.pageViews||{},t.pageViews[e]=(t.pageViews[e]||0)+1,t.lastVisit=new Date().toISOString(),localStorage.setItem(`y0-hardware-analytics`,JSON.stringify(t))},n=(e,t,n=``,r=0)=>{typeof gtag<`u`&&gtag(`event`,t,{event_category:e,event_label:n,value:r});let i=JSON.parse(localStorage.getItem(`y0-hardware-analytics`)||`{}`);i.events=i.events||[],i.events.push({category:e,action:t,label:n,value:r,timestamp:new Date().toISOString()}),localStorage.setItem(`y0-hardware-analytics`,JSON.stringify(i))};return{trackEvent:n,trackPurchase:(e,t,r)=>{n(`ecommerce`,`purchase`,e,r),typeof gtag<`u`&&gtag(`event`,`purchase`,{transaction_id:e,value:r,currency:`EGP`,items:t.map(e=>({item_id:e.id,item_name:e.name,category:e.category,quantity:e.quantity,price:e.price}))})},trackAddToCart:e=>{n(`ecommerce`,`add_to_cart`,e.name,e.price),typeof gtag<`u`&&gtag(`event`,`add_to_cart`,{currency:`EGP`,value:e.price,items:[{item_id:e.id,item_name:e.name,category:e.category,price:e.price}]})},trackSearch:(e,t=0)=>{n(`search`,`search`,e,t),typeof gtag<`u`&&gtag(`event`,`search`,{search_term:e,results_count:t})},trackProductView:e=>{n(`ecommerce`,`view_item`,e.name,e.price),typeof gtag<`u`&&gtag(`event`,`view_item`,{currency:`EGP`,value:e.price,items:[{item_id:e.id,item_name:e.name,category:e.category,price:e.price}]})}}},Ac=()=>{(0,x.useEffect)(()=>{if(`PerformanceObserver`in window){try{new PerformanceObserver(e=>{let t=e.getEntries();t[t.length-1]}).observe({entryTypes:[`largest-contentful-paint`]})}catch{console.log(`LCP monitoring not supported`)}try{new PerformanceObserver(e=>{e.getEntries().forEach(e=>{})}).observe({entryTypes:[`first-input`]})}catch{console.log(`FID monitoring not supported`)}}window.addEventListener(`load`,()=>{let e=performance.getEntriesByType(`navigation`)[0],t=e.loadEventEnd-e.loadEventStart;t>3e3&&console.warn(`🐌 Slow loading detected:`,t+`ms`)}),window.addEventListener(`error`,e=>{console.error(`💥 JavaScript Error:`,e.error)}),window.addEventListener(`unhandledrejection`,e=>{console.error(`💥 Unhandled Promise Rejection:`,e.reason)})},[])},jc=()=>{(0,x.useEffect)(()=>{let e=Date.now(),t=!0,n=0,r=()=>{document.hidden?(t=!1,n+=Date.now()-e):(t=!0,e=Date.now())},i=()=>{t&&(n+=Date.now()-e);let r={timeSpent:n,endTime:new Date().toISOString(),page:window.location.pathname};localStorage.setItem(`y0-hardware-session`,JSON.stringify(r))};return document.addEventListener(`visibilitychange`,r),window.addEventListener(`beforeunload`,i),()=>{document.removeEventListener(`visibilitychange`,r),window.removeEventListener(`beforeunload`,i)}},[])};var Mc=()=>(kc(),Ac(),jc(),null),Nc=({title:e=`Y0 Hardware - متجر قطع الكمبيوتر واللابتوب`,description:t=`متجر Y0 Hardware المتخصص في بيع قطع الكمبيوتر واللابتوب والاكسسوارات بأفضل الأسعار وأعلى جودة في مصر`,keywords:n=`قطع كمبيوتر, لابتوب, اكسسوارات, معالجات, كروت شاشة, ذاكرة عشوائية, مصر`,image:r=`/og-image.jpg`,url:i=`https://y0hardware.com`,type:a=`website`,author:o=`Y0 Hardware`,siteName:s=`Y0 Hardware`,locale:c=`ar_EG`,twitterHandle:l=`@y0hardware`,structuredData:u,canonical:d,noindex:f=!1,nofollow:p=!1})=>{let m=e.includes(`Y0 Hardware`)?e:`${e} | Y0 Hardware`,h=i.startsWith(`http`)?i:`https://y0hardware.com${i}`,g=r.startsWith(`http`)?r:`https://y0hardware.com${r}`;return(0,x.useEffect)(()=>{document.title=m;let e=(e,t,n=!1)=>{let r=n?`meta[property="${e}"]`:`meta[name="${e}"]`,i=document.querySelector(r);i||(i=document.createElement(`meta`),n?i.setAttribute(`property`,e):i.setAttribute(`name`,e),document.head.appendChild(i)),i.setAttribute(`content`,t)};if(e(`description`,t),e(`keywords`,n),e(`author`,o),e(`robots`,`${f?`noindex`:`index`},${p?`nofollow`:`follow`}`),e(`og:title`,m,!0),e(`og:description`,t,!0),e(`og:image`,g,!0),e(`og:url`,h,!0),e(`og:type`,a,!0),e(`og:site_name`,s,!0),e(`og:locale`,c,!0),e(`twitter:card`,`summary_large_image`),e(`twitter:title`,m),e(`twitter:description`,t),e(`twitter:image`,g),e(`twitter:site`,l),e(`twitter:creator`,l),d){let e=document.querySelector(`link[rel="canonical"]`);e||(e=document.createElement(`link`),e.setAttribute(`rel`,`canonical`),document.head.appendChild(e)),e.setAttribute(`href`,d)}if(u){let e=document.querySelector(`script[type="application/ld+json"]`);e||(e=document.createElement(`script`),e.setAttribute(`type`,`application/ld+json`),document.head.appendChild(e)),e.textContent=JSON.stringify(u)}},[m,t,n,o,g,h,a,s,c,l,d,u,f,p]),null};const Pc=()=>(0,L.jsx)(Nc,{title:`Y0 Hardware - متجر قطع الكمبيوتر واللابتوب الأول في مصر`,description:`اكتشف أحدث قطع الكمبيوتر واللابتوب والاكسسوارات في Y0 Hardware. أفضل الأسعار، جودة عالية، شحن سريع في جميع أنحاء مصر.`,keywords:`متجر كمبيوتر, قطع كمبيوتر, لابتوب ألعاب, معالجات Intel, AMD, كروت شاشة NVIDIA, RTX, مصر`,url:`/`,structuredData:{"@context":`https://schema.org`,"@type":`Store`,name:`Y0 Hardware`,description:`متجر قطع الكمبيوتر واللابتوب`,url:`https://y0hardware.com`,telephone:`+201234567890`,address:{"@type":`PostalAddress`,streetAddress:`شارع التحرير، وسط البلد`,addressLocality:`القاهرة`,addressCountry:`مصر`}}}),Fc=()=>(0,L.jsx)(Nc,{title:`متجر المنتجات - Y0 Hardware`,description:`تسوق من مجموعة واسعة من قطع الكمبيوتر واللابتوب والاكسسوارات. معالجات، كروت شاشة، ذاكرة، وأكثر بأفضل الأسعار.`,keywords:`تسوق كمبيوتر, معالجات, كروت شاشة, ذاكرة عشوائية, لوحات مفاتيح, فئران ألعاب`,url:`/shop`}),Ic=({product:e})=>e?(0,L.jsx)(Nc,{title:`${e.name} - Y0 Hardware`,description:`${e.description} - متوفر الآن في Y0 Hardware بسعر ${e.price} جنيه مصري. شحن سريع وضمان شامل.`,keywords:`${e.name}, ${e.brand}, ${e.category}, قطع كمبيوتر, مصر`,image:e.image,url:`/product/${e.id}`,type:`product`,structuredData:{"@context":`https://schema.org`,"@type":`Product`,name:e.name,description:e.description,image:e.image,brand:{"@type":`Brand`,name:e.brand},offers:{"@type":`Offer`,price:e.price,priceCurrency:`EGP`,availability:e.inStock?`https://schema.org/InStock`:`https://schema.org/OutOfStock`,seller:{"@type":`Organization`,name:`Y0 Hardware`}},aggregateRating:{"@type":`AggregateRating`,ratingValue:e.rating,reviewCount:e.reviewCount}}}):(0,L.jsx)(Nc,{});var Lc=I.div`
  background: ${({theme:e})=>e.colors.background.card};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  box-shadow: 0 4px 6px ${({theme:e})=>e.colors.shadow.light};
  transition: all ${({theme:e})=>e.transitions.normal};
  overflow: hidden;
  
  /* Hover effect */
  ${({hoverable:e})=>e&&F`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px ${({theme:e})=>e.colors.shadow.medium};
      border-color: ${({theme:e})=>e.colors.border.focus};
    }
  `}
  
  /* Padding variants */
  ${({padding:e})=>{switch(e){case`none`:return F`padding: 0;`;case`sm`:return F`padding: ${({theme:e})=>e.spacing.md};`;case`lg`:return F`padding: ${({theme:e})=>e.spacing.xl};`;default:return F`padding: ${({theme:e})=>e.spacing.lg};`}}}
`,Rc=I.div`
  padding: ${({theme:e})=>e.spacing.lg};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.primary};
  
  ${({noBorder:e})=>e&&F`
    border-bottom: none;
  `}
`,zc=I.h3`
  margin: 0;
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,Bc=I.p`
  margin: ${({theme:e})=>e.spacing.xs} 0 0 0;
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,Vc=I.div`
  padding: ${({theme:e})=>e.spacing.lg};
  
  ${({noPadding:e})=>e&&F`
    padding: 0;
  `}
`,Hc=I.div`
  padding: ${({theme:e})=>e.spacing.lg};
  border-top: 1px solid ${({theme:e})=>e.colors.border.primary};
  background: ${({theme:e})=>e.colors.background.secondary};
  
  ${({noBorder:e})=>e&&F`
    border-top: none;
    background: transparent;
  `}
`,Uc=I.div`
  width: 100%;
  height: ${({height:e})=>e||`200px`};
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  ${({rounded:e})=>e&&F`
    border-radius: ${({theme:e})=>e.borderRadius.lg};
    margin: ${({theme:e})=>e.spacing.md};
    height: calc(${({height:e})=>e||`200px`} - ${({theme:e})=>e.spacing.xl});
  `}
`,Wc=({children:e,hoverable:t=!1,padding:n=`md`,className:r,onClick:i,...a})=>(0,L.jsx)(Lc,{hoverable:t,padding:n,className:r,onClick:i,...a,children:e});Wc.Header=Rc,Wc.Title=zc,Wc.Subtitle=Bc,Wc.Body=Vc,Wc.Footer=Hc,Wc.Image=Uc;var Gc=Wc,Kc=I(Gc)`
  position: relative;
  overflow: hidden;
  transition: all ${({theme:e})=>e.transitions.normal};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px ${({theme:e})=>e.colors.shadow.medium};
  }
`,qc=I.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0;
    transition: opacity ${({theme:e})=>e.transitions.normal};
  }
  
  ${Kc}:hover &::before {
    opacity: 1;
  }
`,Jc=I.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  right: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  text-transform: uppercase;
  z-index: 2;
  
  ${({type:e,theme:t})=>{switch(e){case`new`:return F`
          background: ${t.colors.success};
          color: ${t.colors.text.inverse};
        `;case`sale`:return F`
          background: ${t.colors.error};
          color: ${t.colors.text.inverse};
        `;case`bestseller`:return F`
          background: ${t.colors.warning};
          color: ${t.colors.text.inverse};
        `;default:return F`
          background: ${t.colors.primary};
          color: ${t.colors.text.inverse};
        `}}}
`,Yc=I.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  left: ${({theme:e})=>e.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  opacity: 0;
  transform: translateX(-20px);
  transition: all ${({theme:e})=>e.transitions.normal};
  z-index: 2;
  
  ${Kc}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`,Xc=I.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  box-shadow: 0 2px 8px ${({theme:e})=>e.colors.shadow.light};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
    transform: scale(1.1);
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.sm};
  }
`,W=I.div`
  padding: ${({theme:e})=>e.spacing.lg};
`,Zc=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Qc=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,$c=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`;I.div`
  display: flex;
  gap: 2px;
`;var el=I(Io)`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({filled:e,theme:t})=>e?t.colors.warning:t.colors.border.secondary};
`,tl=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,nl=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,rl=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.primary};
`,il=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-decoration: line-through;
`,al=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.error};
  background: ${({theme:e})=>e.colors.error}20;
  padding: 2px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,ol=I.div`
  padding: 0 ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.lg};
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,sl=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  color: ${({inStock:e,theme:t})=>e?t.colors.success:t.colors.error};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,cl=({product:e})=>{let{addItem:t}=ja(),{success:n,info:r}=Xo(),{toggleItem:i,isInWishlist:a}=fs(),o=r=>{r.preventDefault(),r.stopPropagation(),t(e),n(`تم إضافة ${e.name} إلى السلة`)},s=t=>{t.preventDefault(),t.stopPropagation(),i(e)?n(`تم إضافة ${e.name} إلى المفضلة`):r(`تم إزالة ${e.name} من المفضلة`)},c=e=>Array.from({length:5},(t,n)=>(0,L.jsx)(el,{filled:n<e},n)),l=()=>e.oldPrice?Math.round((e.oldPrice-e.price)/e.oldPrice*100):null,u=e=>new Intl.NumberFormat(`ar-EG`,{style:`currency`,currency:`EGP`,minimumFractionDigits:0}).format(e);return(0,L.jsxs)(Kc,{as:O,to:`/product/${e.id}`,hoverable:!0,children:[(0,L.jsxs)(qc,{src:e.image,children:[e.badge&&(0,L.jsxs)(Jc,{type:e.badge,children:[e.badge===`new`&&`جديد`,e.badge===`sale`&&`تخفيض`,e.badge===`bestseller`&&`الأكثر مبيعاً`,e.badge===`used`&&`مستعمل`]}),(0,L.jsxs)(Yc,{children:[(0,L.jsx)(Xc,{onClick:s,title:`إضافة للمفضلة`,children:(0,L.jsx)(ho,{style:{color:a(e.id)?`#ff4757`:void 0}})}),(0,L.jsx)(Xc,{as:O,to:`/product/${e.id}`,title:`عرض التفاصيل`,children:(0,L.jsx)(uo,{})})]})]}),(0,L.jsxs)(W,{children:[(0,L.jsx)(Zc,{children:e.name}),(0,L.jsx)(Qc,{children:e.description}),(0,L.jsxs)($c,{children:[c(e.rating),(0,L.jsxs)(tl,{children:[`(`,e.reviewCount,`)`]})]}),e.condition&&(0,L.jsxs)(sl,{inStock:!0,style:{color:`#f39c12`},children:[`الحالة: `,e.condition===`excellent`?`ممتازة`:e.condition===`like-new`?`مثل الجديد`:e.condition===`good`?`جيدة`:`مقبولة`]}),(0,L.jsx)(sl,{inStock:e.inStock,children:e.inStock?`متوفر`:`غير متوفر`}),(0,L.jsxs)(nl,{children:[(0,L.jsx)(rl,{children:u(e.price)}),e.oldPrice&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(il,{children:u(e.oldPrice)}),(0,L.jsxs)(al,{children:[`-`,l(),`%`]})]})]})]}),(0,L.jsx)(ol,{children:(0,L.jsxs)(H,{variant:`primary`,size:`sm`,fullWidth:!0,onClick:o,disabled:!e.inStock,children:[(0,L.jsx)(Fo,{}),`إضافة للسلة`]})})]})},ll=Ca`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`,ul=I(Gc)`
  padding: ${({theme:e})=>e.spacing.xl};
  margin: ${({theme:e})=>e.spacing.xl} 0;
  background: linear-gradient(135deg, 
    ${({theme:e})=>e.colors.primary}10, 
    ${({theme:e})=>e.colors.secondary}10
  );
  border: 2px solid ${({theme:e})=>e.colors.primary}20;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      ${({theme:e})=>e.colors.primary}, 
      ${({theme:e})=>e.colors.secondary}
    );
    animation: ${ll} 2s infinite;
  }
`,dl=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,fl=I.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    ${({theme:e})=>e.colors.primary}, 
    ${({theme:e})=>e.colors.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`,pl=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,ml=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
`,hl=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  flex-wrap: wrap;
`,gl=I.button`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 2px solid ${({active:e,theme:t})=>e?t.colors.primary:t.colors.border.primary};
  background: ${({active:e,theme:t})=>e?t.colors.primary:`transparent`};
  color: ${({active:e,theme:t})=>e?t.colors.text.inverse:t.colors.text.primary};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,_l=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,vl=I.div`
  background: ${({theme:e})=>e.colors.background.secondary};
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  border-left: 4px solid ${({theme:e})=>e.colors.info};
`,yl=I.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  line-height: 1.5;
`,bl=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.xl};
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    animation: spin 1s linear infinite;
    margin-right: ${({theme:e})=>e.spacing.sm};
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,G=({currentProduct:e=null,userId:t=null})=>{let[n,r]=(0,x.useState)([]),[i,a]=(0,x.useState)(`smart`),[o,s]=(0,x.useState)(!0),[c,l]=(0,x.useState)(``),{items:u}=ja(),{items:d}=fs(),f=[{id:`smart`,label:`ذكي`,icon:(0,L.jsx)(ro,{}),description:`توصيات ذكية بناءً على سلوكك`},{id:`similar`,label:`مشابه`,icon:(0,L.jsx)(vo,{}),description:`منتجات مشابهة للمنتج الحالي`},{id:`trending`,label:`رائج`,icon:(0,L.jsx)(ao,{}),description:`المنتجات الأكثر رواجاً`},{id:`compatible`,label:`متوافق`,icon:(0,L.jsx)(ko,{}),description:`منتجات متوافقة مع مشترياتك`}],p=()=>{let t=[...Cs],n=new Map;return t.forEach(t=>{let r=0;r+=(t.rating||0)*10,r+=(t.reviewCount||0)*2,u.length>0&&u.forEach(e=>{e.category===t.category&&(r+=15),e.brand===t.brand&&(r+=10),Math.abs(e.price-t.price)<1e3&&(r+=5)}),d.length>0&&d.forEach(e=>{e.category===t.category&&(r+=20),e.brand===t.brand&&(r+=15)}),e&&(e.category===t.category&&e.id!==t.id&&(r+=25),e.brand===t.brand&&e.id!==t.id&&(r+=20),m(e,t)&&(r+=30));let i=u.some(e=>e.id===t.id),a=d.some(e=>e.id===t.id),o=e&&e.id===t.id;(i||a||o)&&(r=0),n.set(t.id,r)}),t.filter(e=>n.get(e.id)>0).sort((e,t)=>n.get(t.id)-n.get(e.id)).slice(0,4)},m=(e,t)=>{if(e.subcategory===`processors`&&t.subcategory===`motherboards`)return e.specifications?.socket===t.specifications?.socket;if(e.subcategory===`memory`&&t.subcategory===`motherboards`)return e.specifications?.type===t.specifications?.memoryType;if(e.subcategory===`graphics-cards`&&t.subcategory===`power-supplies`){let n=parseInt(e.specifications?.power||`200`);return parseInt(t.specifications?.wattage||`500`)>=n+200}return!1},h=t=>{s(!0),setTimeout(()=>{let n=[],i=``;switch(t){case`smart`:n=p(),i=`تم تحليل ${u.length+d.length} عنصر من تفضيلاتك لإنشاء هذه التوصيات الذكية.`;break;case`similar`:e?(n=Cs.filter(t=>t.category===e.category&&t.id!==e.id).sort((e,t)=>t.rating-e.rating).slice(0,4),i=`منتجات مشابهة لـ "${e.name}" في نفس الفئة.`):(n=Cs.filter(e=>e.rating>=4).sort((e,t)=>t.rating-e.rating).slice(0,4),i=`منتجات عالية التقييم في فئات مختلفة.`);break;case`trending`:n=Cs.filter(e=>e.reviewCount>=5).sort((e,t)=>t.reviewCount-e.reviewCount).slice(0,4),i=`المنتجات الأكثر رواجاً ومراجعة من المستخدمين.`;break;case`compatible`:u.length>0?(n=Cs.filter(e=>u.some(t=>m(t,e))).slice(0,4),i=`منتجات متوافقة مع ${u.length} عنصر في سلتك.`):(n=Cs.filter(e=>e.badge===`bestseller`).slice(0,4),i=`منتجات الأكثر مبيعاً - خيارات موثوقة.`);break;default:n=Cs.slice(0,4),i=`توصيات عامة بناءً على شعبية المنتجات.`}r(n),l(i),s(!1)},1e3)};(0,x.useEffect)(()=>{h(i)},[i,u,d,e]);let g=e=>{a(e)};return(0,L.jsxs)(ul,{children:[(0,L.jsxs)(dl,{children:[(0,L.jsx)(fl,{children:(0,L.jsx)(ko,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(pl,{children:`توصيات الذكاء الاصطناعي`}),(0,L.jsx)(ml,{children:`مدعوم بخوارزميات التعلم الآلي لتجربة تسوق مخصصة`})]})]}),(0,L.jsx)(hl,{children:f.map(e=>(0,L.jsxs)(gl,{active:i===e.id,onClick:()=>g(e.id),title:e.description,children:[e.icon,e.label]},e.id))}),c&&(0,L.jsx)(vl,{children:(0,L.jsxs)(yl,{children:[(0,L.jsx)(ro,{style:{marginRight:`8px`,color:`#3498db`}}),c]})}),o?(0,L.jsxs)(bl,{children:[(0,L.jsx)(ko,{}),`جاري تحليل البيانات وإنشاء التوصيات...`]}):(0,L.jsx)(_l,{children:n.map(e=>(0,L.jsx)(cl,{product:e},e.id))})]})},xl=Ca`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Sl=Ca`
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
`,Cl=I.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`,wl=I.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    ${({theme:e})=>e.colors.primary}, 
    ${({theme:e})=>e.colors.secondary}
  );
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 20px ${({theme:e})=>e.colors.shadow.medium};
  transition: all ${({theme:e})=>e.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px ${({theme:e})=>e.colors.shadow.heavy};
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Tl=I.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: ${({theme:e})=>e.colors.background.card};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  box-shadow: 0 10px 40px ${({theme:e})=>e.colors.shadow.heavy};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${xl} 0.3s ease-out;
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  
  @media (max-width: 768px) {
    width: 90vw;
    height: 70vh;
    bottom: 80px;
    right: 5vw;
  }
`,El=I.div`
  background: linear-gradient(135deg, 
    ${({theme:e})=>e.colors.primary}, 
    ${({theme:e})=>e.colors.secondary}
  );
  color: white;
  padding: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Dl=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Ol=I.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`,kl=I.div`
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
`,Al=I.div`
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  opacity: 0.9;
`,jl=I.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: ${({theme:e})=>e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: background ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,Ml=I.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.md};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border.primary};
    border-radius: 3px;
  }
`,Nl=I.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({isUser:e})=>e&&`flex-direction: row-reverse;`}
`,Pl=I.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({isUser:e,theme:t})=>e?t.colors.primary:t.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
`,Fl=I.div`
  max-width: 70%;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({isUser:e,theme:t})=>e?t.colors.primary:t.colors.background.secondary};
  color: ${({isUser:e,theme:t})=>e?t.colors.text.inverse:t.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  line-height: 1.4;
  animation: ${xl} 0.3s ease-out;
`,Il=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.text.secondary};
    animation: ${Sl} 1.4s infinite;
    
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`,Ll=I.div`
  padding: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border.primary};
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,Rl=I.input`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.background.primary};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,zl=I.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${({active:e,theme:t})=>e?t.colors.primary:t.colors.background.secondary};
  color: ${({active:e,theme:t})=>e?t.colors.text.inverse:t.colors.text.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Bl=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.xs};
  margin-top: ${({theme:e})=>e.spacing.sm};
`,Vl=I.button`
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border: 1px solid ${({theme:e})=>e.colors.primary};
  background: transparent;
  color: ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
`,Hl=()=>{let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)([]),[i,a]=(0,x.useState)(``),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(!1),u=(0,x.useRef)(null),d=(0,x.useRef)(null);(0,x.useEffect)(()=>{(`webkitSpeechRecognition`in window||`SpeechRecognition`in window)&&(d.current=new(window.SpeechRecognition||window.webkitSpeechRecognition),d.current.continuous=!1,d.current.interimResults=!1,d.current.lang=`ar-EG`,d.current.onresult=e=>{let t=e.results[0][0].transcript;a(t),l(!1)},d.current.onerror=()=>{l(!1)},d.current.onend=()=>{l(!1)})},[]),(0,x.useEffect)(()=>{e&&n.length===0&&setTimeout(()=>{r([{id:1,text:`مرحباً! أنا مساعدك الذكي في Y0 Hardware 🤖

يمكنني مساعدتك في:
• اختيار المنتجات المناسبة
• بناء جهاز كمبيوتر
• مقارنة الأسعار
• الدعم التقني

كيف يمكنني مساعدتك اليوم؟`,isUser:!1,timestamp:new Date,quickActions:[`أريد بناء جهاز ألعاب`,`ما أفضل معالج؟`,`مقارنة كروت الشاشة`,`مساعدة في الاختيار`]}])},500)},[e,n.length]),(0,x.useEffect)(()=>{u.current?.scrollIntoView({behavior:`smooth`})},[n,o]);let f=e=>{let t=e.toLowerCase();return t.includes(`ألعاب`)||t.includes(`جيمنج`)||t.includes(`gaming`)?{text:`🎮 ممتاز! لبناء جهاز ألعاب قوي أنصحك بـ:

• معالج: Intel i7 أو AMD Ryzen 7
• كارت شاشة: RTX 4070 أو أعلى
• ذاكرة عشوائية: 16GB DDR4
• قرص صلب: SSD 1TB

ما هي ميزانيتك المتاحة؟`,quickActions:[`أقل من 30,000 ج.م`,`30,000 - 50,000 ج.م`,`أكثر من 50,000 ج.م`]}:t.includes(`معالج`)||t.includes(`بروسيسور`)||t.includes(`cpu`)?{text:`💻 أفضل معالج حالياً هو ${Cs.filter(e=>e.subcategory===`processors`).sort((e,t)=>t.rating-e.rating)[0]?.name||`Intel Core i9`}\n\nالمعالجات المتاحة:\n• للألعاب: Intel i7 / AMD Ryzen 7\n• للعمل: Intel i5 / AMD Ryzen 5\n• للأداء العالي: Intel i9 / AMD Ryzen 9\n\nما هو استخدامك الأساسي؟`,quickActions:[`ألعاب`,`عمل ومكتب`,`تصميم ومونتاج`,`برمجة`]}:t.includes(`كارت شاشة`)||t.includes(`جرافيك`)||t.includes(`gpu`)?{text:`🎯 مقارنة كروت الشاشة:

• RTX 4090: الأقوى للألعاب 4K
• RTX 4080: ممتاز للألعاب 1440p
• RTX 4070: جيد للألعاب 1080p
• RTX 3060: اقتصادي للألعاب

ما هي دقة الشاشة التي تستخدمها؟`,quickActions:[`1080p`,`1440p`,`4K`,`غير متأكد`]}:t.includes(`30000`)||t.includes(`30,000`)?{text:`💰 بميزانية 30,000 ج.م يمكنك بناء جهاز ممتاز:

• معالج: AMD Ryzen 5 5600X
• كارت شاشة: RTX 3060
• ذاكرة: 16GB DDR4
• لوحة أم: B450M
• مزود طاقة: 650W

هل تريد رؤية المنتجات المتاحة؟`,quickActions:[`نعم، أرني المنتجات`,`أريد بديل أرخص`,`أريد ترقية المواصفات`]}:t.includes(`مشكلة`)||t.includes(`عطل`)||t.includes(`لا يعمل`)?{text:`🔧 سأساعدك في حل المشكلة!

ما نوع المشكلة التي تواجهها؟`,quickActions:[`الجهاز لا يشتغل`,`بطء في الأداء`,`مشكلة في الشاشة`,`مشكلة صوت`]}:t.includes(`سعر`)||t.includes(`كام`)||t.includes(`تكلفة`)?{text:`💲 يمكنني مساعدتك في معرفة الأسعار!

عن أي منتج تريد معرفة السعر؟`,quickActions:[`معالجات`,`كروت شاشة`,`لابتوب`,`ذاكرة عشوائية`]}:{text:`شكراً لسؤالك! 😊

يمكنني مساعدتك في العديد من الأمور. جرب أن تسأل عن:
• بناء جهاز كمبيوتر
• مقارنة المنتجات
• حل المشاكل التقنية
• اختيار المنتج المناسب`,quickActions:[`أريد بناء جهاز`,`مقارنة منتجات`,`مساعدة تقنية`,`اختيار منتج`]}},p=()=>{if(!i.trim())return;let e={id:Date.now(),text:i,isUser:!0,timestamp:new Date};r(t=>[...t,e]),a(``),s(!0),setTimeout(()=>{let e=f(i),t={id:Date.now()+1,text:e.text,isUser:!1,timestamp:new Date,quickActions:e.quickActions};r(e=>[...e,t]),s(!1)},1e3+Math.random()*1e3)},m=e=>{a(e),setTimeout(()=>p(),100)},h=e=>{e.key===`Enter`&&p()},g=()=>{d.current&&!c&&(l(!0),d.current.start())},_=()=>{d.current&&c&&(d.current.stop(),l(!1))},v=e=>{if(`speechSynthesis`in window){let t=new SpeechSynthesisUtterance(e);t.lang=`ar-SA`,t.rate=.9,speechSynthesis.speak(t)}};return(0,L.jsxs)(Cl,{children:[(0,L.jsx)(wl,{onClick:()=>t(!e),children:(0,L.jsx)(ko,{})}),e&&(0,L.jsxs)(Tl,{children:[(0,L.jsxs)(El,{children:[(0,L.jsxs)(Dl,{children:[(0,L.jsx)(Ol,{children:(0,L.jsx)(ko,{})}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(kl,{children:`مساعد Y0 الذكي`}),(0,L.jsx)(Al,{children:`متصل • يكتب بسرعة البرق`})]})]}),(0,L.jsx)(jl,{onClick:()=>t(!1),children:(0,L.jsx)(Vo,{})})]}),(0,L.jsxs)(Ml,{children:[n.map(e=>(0,L.jsxs)(`div`,{children:[(0,L.jsxs)(Nl,{isUser:e.isUser,children:[(0,L.jsx)(Pl,{isUser:e.isUser,children:e.isUser?(0,L.jsx)(Ko,{}):(0,L.jsx)(ko,{})}),(0,L.jsxs)(Fl,{isUser:e.isUser,children:[e.text,!e.isUser&&(0,L.jsx)(zl,{onClick:()=>v(e.text),style:{marginTop:`8px`,width:`24px`,height:`24px`},children:(0,L.jsx)(Jo,{style:{fontSize:`12px`}})})]})]}),e.quickActions&&(0,L.jsx)(Bl,{children:e.quickActions.map((e,t)=>(0,L.jsx)(Vl,{onClick:()=>m(e),children:e},t))})]},e.id)),o&&(0,L.jsxs)(Nl,{children:[(0,L.jsx)(Pl,{children:(0,L.jsx)(ko,{})}),(0,L.jsx)(Fl,{children:(0,L.jsxs)(Il,{children:[(0,L.jsx)(`span`,{}),(0,L.jsx)(`span`,{}),(0,L.jsx)(`span`,{})]})})]}),(0,L.jsx)(`div`,{ref:u})]}),(0,L.jsxs)(Ll,{children:[(0,L.jsx)(Rl,{value:i,onChange:e=>a(e.target.value),onKeyPress:h,placeholder:`اكتب رسالتك هنا...`,disabled:o}),d.current&&(0,L.jsx)(zl,{active:c,onClick:c?_:g,disabled:o,children:c?(0,L.jsx)(Co,{}):(0,L.jsx)(wo,{})}),(0,L.jsx)(zl,{onClick:p,disabled:!i.trim()||o,children:(0,L.jsx)(B,{})})]})]})]})},Ul=I.div`
  min-height: calc(100vh - 160px);
`,Wl=I.section`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary}20 0%,
    ${({theme:e})=>e.colors.secondary}20 100%
  );
  padding: ${({theme:e})=>e.spacing[`3xl`]} 0;
  margin-bottom: ${({theme:e})=>e.spacing[`3xl`]};
`,Gl=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[`2xl`]};
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({theme:e})=>e.spacing.xl};
  }
`,Kl=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,ql=I.h1`
  font-size: ${({theme:e})=>e.fonts.sizes[`5xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: 1.2;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fonts.sizes[`4xl`]};
  }
`,Jl=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Yl=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Xl=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,Zl=I.div`
  width: 100%;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=400&fit=crop');
  background-size: cover;
  background-position: center;
  border-radius: ${({theme:e})=>e.borderRadius[`2xl`]};
  box-shadow: 0 20px 40px ${({theme:e})=>e.colors.shadow.medium};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    height: 300px;
  }
`,K=I.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing[`3xl`]};
`,q=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,J=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  color: ${({theme:e})=>e.colors.text.secondary};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Y=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing[`3xl`]};
`,X=I(Gc)`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xl};
`,Ql=I.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  border-radius: ${({theme:e})=>e.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({theme:e})=>e.spacing.lg};
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
`,$l=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,eu=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.6;
`,tu=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,nu=I.div`
  text-align: center;
`,ru=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,iu=I(Gc)`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xl};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px ${({theme:e})=>e.colors.shadow.medium};
  }
`,au=I.div`
  font-size: ${({theme:e})=>e.fonts.sizes[`4xl`]};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,ou=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,su=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
`,cu=()=>{let e=Cs.filter(e=>e.badge===`new`).slice(0,4),t=Cs.filter(e=>e.badge===`bestseller`).slice(0,4);Cs.filter(e=>e.oldPrice).slice(0,4);let n=Cs.filter(e=>e.category===`used`).slice(0,4);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Pc,{}),(0,L.jsxs)(Ul,{children:[(0,L.jsx)(Wl,{children:(0,L.jsxs)(Gl,{children:[(0,L.jsxs)(Kl,{children:[(0,L.jsx)(ql,{children:`أحدث قطع الكمبيوتر`}),(0,L.jsx)(Jl,{children:`بأفضل الأسعار في السوق`}),(0,L.jsx)(Yl,{children:`اكتشف مجموعتنا الواسعة من قطع الكمبيوتر عالية الجودة واللابتوب والاكسسوارات. نوفر لك أحدث التقنيات بأسعار تنافسية مع ضمان شامل وخدمة عملاء متميزة.`}),(0,L.jsxs)(Xl,{children:[(0,L.jsxs)(H,{as:O,to:`/shop`,variant:`primary`,size:`lg`,children:[`تسوق الآن`,(0,L.jsx)(eo,{})]}),(0,L.jsx)(H,{as:O,to:`/shop?deals=true`,variant:`secondary`,size:`lg`,children:`العروض الخاصة`})]})]}),(0,L.jsx)(Zl,{})]})}),(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:`لماذا تختار Y0 Hardware؟`}),(0,L.jsx)(Y,{children:[{icon:(0,L.jsx)(V,{}),title:`شحن سريع`,description:`توصيل مجاني للطلبات فوق 1000 جنيه في جميع أنحاء مصر`},{icon:(0,L.jsx)(No,{}),title:`ضمان شامل`,description:`ضمان على جميع المنتجات مع خدمة ما بعد البيع`},{icon:(0,L.jsx)(mo,{}),title:`دعم فني`,description:`فريق دعم فني متخصص متاح 24/7 لمساعدتك`},{icon:(0,L.jsx)(Uo,{}),title:`جودة عالية`,description:`منتجات أصلية من أفضل الماركات العالمية`}].map((e,t)=>(0,L.jsxs)(X,{children:[(0,L.jsx)(Ql,{children:e.icon}),(0,L.jsx)($l,{children:e.title}),(0,L.jsx)(eu,{children:e.description})]},t))})]}),(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:`الأكثر مبيعاً`}),(0,L.jsx)(tu,{children:t.map(e=>(0,L.jsx)(cl,{product:e},e.id))})]}),(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:`المنتجات المميزة`}),(0,L.jsx)(tu,{children:e.map(e=>(0,L.jsx)(cl,{product:e},e.id))}),(0,L.jsx)(nu,{children:(0,L.jsxs)(H,{as:O,to:`/shop`,variant:`primary`,size:`lg`,children:[`عرض جميع المنتجات`,(0,L.jsx)(eo,{})]})})]}),(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:`منتجات مستعملة بحالة ممتازة`}),(0,L.jsx)(J,{children:`منتجات مستعملة مفحوصة ومضمونة بأسعار مناسبة - وفر حتى 50%`}),(0,L.jsx)(tu,{children:n.map(e=>(0,L.jsx)(cl,{product:e},e.id))}),(0,L.jsx)(nu,{children:(0,L.jsxs)(H,{as:O,to:`/shop?category=used`,variant:`secondary`,size:`lg`,children:[`عرض جميع المنتجات المستعملة`,(0,L.jsx)(eo,{})]})})]}),(0,L.jsxs)(K,{children:[(0,L.jsx)(q,{children:`تسوق حسب الفئة`}),(0,L.jsx)(ru,{children:[{title:`قطع الكمبيوتر`,description:`معالجات، كروت شاشة، ذاكرة`,icon:`💻`,link:`/shop?category=pc-parts`},{title:`اللابتوب`,description:`أجهزة للألعاب والعمل`,icon:`💻`,link:`/shop?category=laptops`},{title:`الاكسسوارات`,description:`لوحات مفاتيح، فئران، سماعات`,icon:`⌨️`,link:`/shop?category=accessories`}].map((e,t)=>(0,L.jsxs)(iu,{as:O,to:e.link,hoverable:!0,children:[(0,L.jsx)(au,{children:e.icon}),(0,L.jsx)(ou,{children:e.title}),(0,L.jsx)(su,{children:e.description})]},t))})]}),(0,L.jsx)(G,{}),(0,L.jsx)(Hl,{})]})]})},lu=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.lg};
  min-height: calc(100vh - 160px);
`,uu=I.div`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,du=I.h1`
  font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,fu=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`,pu=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  flex: 1;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,mu=I.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`,hu=I.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  padding-right: 40px;
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,gu=I.div`
  position: absolute;
  right: ${({theme:e})=>e.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.text.tertiary};
`,_u=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,vu=I.button`
  padding: ${({theme:e})=>e.spacing.sm};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({active:e,theme:t})=>e?t.colors.primary:t.colors.background.card};
  color: ${({active:e,theme:t})=>e?t.colors.text.inverse:t.colors.text.secondary};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
`,yu=I.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,bu=I.aside`
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    order: 2;
  }
`,xu=I(Gc)`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Su=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Cu=I.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,wu=I.label`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.sm} 0;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: color ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,Tu=I.input`
  accent-color: ${({theme:e})=>e.colors.primary};
`,Eu=I.select`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.sm};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,Du=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  align-items: center;
`,Ou=I.input`
  flex: 1;
  padding: ${({theme:e})=>e.spacing.sm};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,ku=I.main`
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    order: 1;
  }
`,Au=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,ju=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
`,Mu=I.select`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,Nu=I.div`
  display: grid;
  grid-template-columns: ${({viewMode:e})=>e===`grid`?`repeat(auto-fill, minmax(280px, 1fr))`:`1fr`};
  gap: ${({theme:e})=>e.spacing.lg};
`,Pu=I.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[`3xl`]};
  color: ${({theme:e})=>e.colors.text.secondary};
`,Fu=()=>{let[e,t]=vn(),[n,r]=(0,x.useState)(`grid`),[i,a]=(0,x.useState)(e.get(`search`)||``),[o,s]=(0,x.useState)(`name`),[c,l]=(0,x.useState)({category:e.get(`category`)||``,subcategory:``,brand:``,minPrice:``,maxPrice:``,inStock:!1,onSale:e.get(`deals`)===`true`||!1,usedOnly:!1}),u=(0,x.useMemo)(()=>{let e=[...Cs];return i&&(e=e.filter(e=>e.name.toLowerCase().includes(i.toLowerCase())||e.description.toLowerCase().includes(i.toLowerCase()))),c.category&&(e=e.filter(e=>e.category===c.category)),c.subcategory&&(e=e.filter(e=>e.subcategory===c.subcategory)),c.brand&&(e=e.filter(e=>e.brand===c.brand)),c.minPrice&&(e=e.filter(e=>e.price>=parseInt(c.minPrice))),c.maxPrice&&(e=e.filter(e=>e.price<=parseInt(c.maxPrice))),c.inStock&&(e=e.filter(e=>e.inStock)),c.onSale&&(e=e.filter(e=>e.oldPrice)),c.usedOnly&&(e=e.filter(e=>e.category===`used`)),e.sort((e,t)=>{switch(o){case`price-low`:return e.price-t.price;case`price-high`:return t.price-e.price;case`rating`:return t.rating-e.rating;case`newest`:return t.id-e.id;default:return e.name.localeCompare(t.name,`ar`)}}),e},[i,c,o]),d=(e,t)=>{l(n=>({...n,[e]:t}))},f=[...new Set(Cs.map(e=>e.brand))],p=[...new Set(Cs.map(e=>e.subcategory))];return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Fc,{}),(0,L.jsxs)(lu,{children:[(0,L.jsx)(uu,{children:(0,L.jsx)(du,{children:`متجر المنتجات`})}),(0,L.jsxs)(fu,{children:[(0,L.jsx)(pu,{children:(0,L.jsxs)(mu,{children:[(0,L.jsx)(hu,{type:`text`,placeholder:`ابحث عن المنتجات...`,value:i,onChange:e=>a(e.target.value)}),(0,L.jsx)(gu,{children:(0,L.jsx)(jo,{})})]})}),(0,L.jsxs)(_u,{children:[(0,L.jsx)(vu,{active:n===`grid`,onClick:()=>r(`grid`),title:`عرض شبكي`,children:(0,L.jsx)(Ro,{})}),(0,L.jsx)(vu,{active:n===`list`,onClick:()=>r(`list`),title:`عرض قائمة`,children:(0,L.jsx)(yo,{})})]})]}),(0,L.jsxs)(yu,{children:[(0,L.jsx)(bu,{children:(0,L.jsxs)(xu,{children:[(0,L.jsxs)(Su,{children:[(0,L.jsx)(fo,{}),`تصفية المنتجات`]}),(0,L.jsxs)(Cu,{children:[(0,L.jsx)(`h4`,{children:`الفئة`}),(0,L.jsxs)(Eu,{value:c.category,onChange:e=>d(`category`,e.target.value),children:[(0,L.jsx)(`option`,{value:``,children:`جميع الفئات`}),Object.entries(ws).map(([e,t])=>e!==`all`&&(0,L.jsx)(`option`,{value:e,children:t},e))]})]}),(0,L.jsxs)(Cu,{children:[(0,L.jsx)(`h4`,{children:`الفئة الفرعية`}),(0,L.jsxs)(Eu,{value:c.subcategory,onChange:e=>d(`subcategory`,e.target.value),children:[(0,L.jsx)(`option`,{value:``,children:`جميع الفئات الفرعية`}),p.map(e=>(0,L.jsx)(`option`,{value:e,children:Ts[e]},e))]})]}),(0,L.jsxs)(Cu,{children:[(0,L.jsx)(`h4`,{children:`الماركة`}),(0,L.jsxs)(Eu,{value:c.brand,onChange:e=>d(`brand`,e.target.value),children:[(0,L.jsx)(`option`,{value:``,children:`جميع الماركات`}),f.map(e=>(0,L.jsx)(`option`,{value:e,children:Es[e]},e))]})]}),(0,L.jsxs)(Cu,{children:[(0,L.jsx)(`h4`,{children:`نطاق السعر`}),(0,L.jsxs)(Du,{children:[(0,L.jsx)(Ou,{type:`number`,placeholder:`من`,value:c.minPrice,onChange:e=>d(`minPrice`,e.target.value)}),(0,L.jsx)(`span`,{children:`-`}),(0,L.jsx)(Ou,{type:`number`,placeholder:`إلى`,value:c.maxPrice,onChange:e=>d(`maxPrice`,e.target.value)})]})]}),(0,L.jsxs)(Cu,{children:[(0,L.jsx)(wu,{children:`الحالة`}),(0,L.jsxs)(Tu,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:c.inStock,onChange:e=>l({...c,inStock:e.target.checked})}),(0,L.jsx)(`span`,{children:`متوفر فقط`})]}),(0,L.jsxs)(Tu,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:c.onSale,onChange:e=>l({...c,onSale:e.target.checked})}),(0,L.jsx)(`span`,{children:`عروض وتخفيضات`})]}),(0,L.jsxs)(Tu,{children:[(0,L.jsx)(`input`,{type:`checkbox`,checked:c.usedOnly,onChange:e=>l({...c,usedOnly:e.target.checked})}),(0,L.jsx)(`span`,{children:`منتجات مستعملة فقط`})]})]})]})}),(0,L.jsxs)(ku,{children:[(0,L.jsxs)(Au,{children:[(0,L.jsxs)(ju,{children:[`عرض `,u.length,` من أصل `,Cs.length,` منتج`]}),(0,L.jsxs)(Mu,{value:o,onChange:e=>s(e.target.value),children:[(0,L.jsx)(`option`,{value:`name`,children:`ترتيب أبجدي`}),(0,L.jsx)(`option`,{value:`price-low`,children:`السعر: من الأقل للأعلى`}),(0,L.jsx)(`option`,{value:`price-high`,children:`السعر: من الأعلى للأقل`}),(0,L.jsx)(`option`,{value:`rating`,children:`التقييم`}),(0,L.jsx)(`option`,{value:`newest`,children:`الأحدث`})]})]}),u.length>0?(0,L.jsx)(Nu,{viewMode:n,children:u.map(e=>(0,L.jsx)(cl,{product:e},e.id))}):(0,L.jsxs)(Pu,{children:[(0,L.jsx)(`h3`,{children:`لم يتم العثور على منتجات`}),(0,L.jsx)(`p`,{children:`جرب تغيير معايير البحث أو التصفية`})]})]})]})]})]})},Iu=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.lg};
  min-height: calc(100vh - 160px);
`,Lu=I.h1`
  font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  
  svg {
    color: ${({theme:e})=>e.colors.primary};
  }
`,Ru=I.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,zu=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,Bu=I(Gc)`
  padding: ${({theme:e})=>e.spacing.lg};
`,Vu=I.div`
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: ${({theme:e})=>e.spacing.lg};
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,Hu=I.div`
  width: 120px;
  height: 120px;
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`,Uu=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,Wu=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,Gu=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Ku=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.primary};
`,qu=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-decoration: line-through;
`,Ju=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({inStock:e,theme:t})=>e?t.colors.success:t.colors.error};
`,Yu=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: flex-end;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    align-items: center;
  }
`,Xu=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xs};
`,Zu=I.button`
  width: 32px;
  height: 32px;
  border: none;
  background: ${({theme:e})=>e.colors.background.hover};
  color: ${({theme:e})=>e.colors.text.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Qu=I.span`
  min-width: 40px;
  text-align: center;
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
`,$u=I.button`
  padding: ${({theme:e})=>e.spacing.sm};
  border: none;
  background: ${({theme:e})=>e.colors.error}20;
  color: ${({theme:e})=>e.colors.error};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.error};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
`,ed=I.div`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
`,td=I(Gc)`
  height: fit-content;
  position: sticky;
  top: 100px;
`,nd=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  padding-bottom: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.primary};
`,rd=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`,Z=I.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
`,id=I.span`
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
`,ad=I(rd)`
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border.primary};
  margin-top: ${({theme:e})=>e.spacing.lg};
  
  ${Z}, ${id} {
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
    font-weight: ${({theme:e})=>e.fonts.weights.bold};
    color: ${({theme:e})=>e.colors.primary};
  }
`,od=I(H)`
  width: 100%;
  margin-top: ${({theme:e})=>e.spacing.lg};
`,sd=I.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[`3xl`]};
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    font-size: 4rem;
    margin-bottom: ${({theme:e})=>e.spacing.lg};
    color: ${({theme:e})=>e.colors.text.tertiary};
  }
  
  h2 {
    margin-bottom: ${({theme:e})=>e.spacing.md};
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  p {
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,cd=()=>{let{items:e,totalItems:t,totalPrice:n,updateQuantity:r,removeItem:i,clearCart:a}=ja(),o=e=>new Intl.NumberFormat(`ar-EG`,{style:`currency`,currency:`EGP`,minimumFractionDigits:0}).format(e),s=e=>e.price*e.quantity,c=n>1e3?0:50,l=n+c;return e.length===0?(0,L.jsxs)(Iu,{children:[(0,L.jsxs)(Lu,{children:[(0,L.jsx)(Po,{}),`سلة التسوق`]}),(0,L.jsxs)(sd,{children:[(0,L.jsx)(Po,{}),(0,L.jsx)(`h2`,{children:`سلة التسوق فارغة`}),(0,L.jsx)(`p`,{children:`لم تقم بإضافة أي منتجات إلى سلة التسوق بعد`}),(0,L.jsxs)(H,{as:O,to:`/shop`,variant:`primary`,size:`lg`,children:[`تسوق الآن`,(0,L.jsx)(eo,{})]})]})]}):(0,L.jsxs)(Iu,{children:[(0,L.jsxs)(Lu,{children:[(0,L.jsx)(Po,{}),`سلة التسوق (`,t,` منتج)`]}),(0,L.jsxs)(Ru,{children:[(0,L.jsx)(zu,{children:e.map(e=>(0,L.jsx)(Bu,{children:(0,L.jsxs)(Vu,{children:[(0,L.jsx)(Hu,{src:e.image}),(0,L.jsxs)(Uu,{children:[(0,L.jsx)(Wu,{children:e.name}),(0,L.jsxs)(Gu,{children:[(0,L.jsx)(Ku,{children:o(e.price)}),e.oldPrice&&(0,L.jsx)(qu,{children:o(e.oldPrice)})]}),(0,L.jsx)(Ju,{inStock:e.inStock,children:e.inStock?`متوفر في المخزن`:`غير متوفر`})]}),(0,L.jsxs)(Yu,{children:[(0,L.jsxs)(Xu,{children:[(0,L.jsx)(Zu,{onClick:()=>r(e.id,e.quantity-1),disabled:e.quantity<=1,children:(0,L.jsx)(To,{})}),(0,L.jsx)(Qu,{children:e.quantity}),(0,L.jsx)(Zu,{onClick:()=>r(e.id,e.quantity+1),children:(0,L.jsx)(Do,{})})]}),(0,L.jsx)(ed,{children:o(s(e))}),(0,L.jsx)($u,{onClick:()=>i(e.id),title:`إزالة من السلة`,children:(0,L.jsx)(Ho,{})})]})]})},e.id))}),(0,L.jsxs)(td,{children:[(0,L.jsx)(nd,{children:`ملخص الطلب`}),(0,L.jsxs)(rd,{children:[(0,L.jsxs)(Z,{children:[`المجموع الفرعي (`,t,` منتج)`]}),(0,L.jsx)(id,{children:o(n)})]}),(0,L.jsxs)(rd,{children:[(0,L.jsxs)(Z,{children:[`الشحن `,n>1e3&&`(مجاني للطلبات فوق 1000 ج.م)`]}),(0,L.jsx)(id,{children:c===0?`مجاني`:o(c)})]}),(0,L.jsxs)(ad,{children:[(0,L.jsx)(Z,{children:`المجموع الكلي`}),(0,L.jsx)(id,{children:o(l)})]}),(0,L.jsxs)(od,{variant:`primary`,size:`lg`,children:[`إتمام الطلب`,(0,L.jsx)(eo,{})]}),(0,L.jsx)(H,{variant:`ghost`,size:`sm`,fullWidth:!0,onClick:a,style:{marginTop:`1rem`},children:`إفراغ السلة`})]})]})]})},ld=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
`,ud=I.button`
  background: none;
  border: none;
  cursor: ${({interactive:e})=>e?`pointer`:`default`};
  padding: 2px;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    transform: ${({interactive:e})=>e?`scale(1.1)`:`none`};
  }
  
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }
`,dd=I(Io)`
  font-size: ${({size:e})=>{switch(e){case`small`:return`14px`;case`large`:return`24px`;case`xlarge`:return`32px`;default:return`18px`}}};
  color: ${({filled:e,theme:t,hovered:n})=>e||n?t.colors.warning:t.colors.border.secondary};
  transition: all ${({theme:e})=>e.transitions.fast};
`,fd=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-left: ${({theme:e})=>e.spacing.sm};
`,pd=({rating:e=0,maxRating:t=5,size:n=`medium`,interactive:r=!1,showText:i=!1,reviewCount:a=0,onChange:o,className:s})=>{let[c,l]=(0,x.useState)(0),[u,d]=(0,x.useState)(e),f=e=>{r&&(d(e),o&&o(e))},p=e=>{r&&l(e)},m=()=>{r&&l(0)},h=r?u:e,g=Array.from({length:t},(e,t)=>{let i=t+1,a=i<=h,o=r&&i<=c;return(0,L.jsx)(ud,{interactive:r,onClick:()=>f(i),onMouseEnter:()=>p(i),type:`button`,"aria-label":`${i} نجمة`,children:(0,L.jsx)(dd,{filled:a,hovered:o,size:n})},i)});return(0,L.jsxs)(ld,{className:s,onMouseLeave:m,children:[g,i&&(0,L.jsx)(fd,{children:(()=>a>0?`(${a} تقييم)`:h>0?`${h} من ${t}`:`لا توجد تقييمات`)()})]})},md=I(Gc)`
  padding: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  transition: all ${({theme:e})=>e.transitions.normal};
  
  &:hover {
    box-shadow: 0 8px 24px ${({theme:e})=>e.colors.shadow.medium};
  }
`,hd=I.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,gd=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,_d=I.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  border-radius: ${({theme:e})=>e.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.text.inverse};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.xl};
  }
`,vd=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
`,yd=I.h4`
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,bd=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
`,xd=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,Sd=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0 0 ${({theme:e})=>e.spacing.sm} 0;
  line-height: 1.4;
`,Cd=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.6;
  margin: 0 0 ${({theme:e})=>e.spacing.lg} 0;
  white-space: pre-wrap;
`,wd=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  flex-wrap: wrap;
`,Td=I.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    transform: scale(1.05);
  }
`,Ed=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border.light};
`,Dd=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,Od=I.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  background: ${({active:e,theme:t})=>e?t.colors.primary+`20`:t.colors.background.card};
  color: ${({active:e,theme:t})=>e?t.colors.primary:t.colors.text.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary}20;
    color: ${({theme:e})=>e.colors.primary};
    border-color: ${({theme:e})=>e.colors.primary};
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.sm};
  }
`,kd=I(Od)`
  color: ${({theme:e})=>e.colors.text.tertiary};
  
  &:hover {
    background: ${({theme:e})=>e.colors.error}20;
    color: ${({theme:e})=>e.colors.error};
    border-color: ${({theme:e})=>e.colors.error};
  }
`,Ad=I.span`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  color: ${({theme:e})=>e.colors.success};
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  
  &::before {
    content: '✓';
    width: 16px;
    height: 16px;
    background: ${({theme:e})=>e.colors.success};
    color: ${({theme:e})=>e.colors.text.inverse};
    border-radius: ${({theme:e})=>e.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
  }
`,jd=({review:e,onLike:t,onDislike:n,onReport:r})=>{let[i,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(e.likes||0),[u,d]=(0,x.useState)(e.dislikes||0);return(0,L.jsxs)(md,{children:[(0,L.jsxs)(hd,{children:[(0,L.jsxs)(gd,{children:[(0,L.jsx)(_d,{children:e.user.avatar?(0,L.jsx)(`img`,{src:e.user.avatar,alt:e.user.name}):(e=>e.split(` `).map(e=>e[0]).join(``).toUpperCase().slice(0,2))(e.user.name)}),(0,L.jsxs)(vd,{children:[(0,L.jsx)(yd,{children:e.user.name}),(0,L.jsx)(bd,{children:(e=>new Date(e).toLocaleDateString(`ar-EG`,{year:`numeric`,month:`long`,day:`numeric`}))(e.date)}),e.verified&&(0,L.jsx)(Ad,{children:`مشترٍ موثق`})]})]}),(0,L.jsx)(xd,{children:(0,L.jsx)(pd,{rating:e.rating,size:`small`})})]}),e.title&&(0,L.jsx)(Sd,{children:e.title}),(0,L.jsx)(Cd,{children:e.comment}),e.images&&e.images.length>0&&(0,L.jsx)(wd,{children:e.images.map((e,t)=>(0,L.jsx)(Td,{src:e,alt:`صورة المراجعة ${t+1}`,onClick:()=>{window.open(e,`_blank`)}},t))}),(0,L.jsxs)(Ed,{children:[(0,L.jsxs)(Dd,{children:[(0,L.jsxs)(Od,{active:i,onClick:()=>{i?(a(!1),l(e=>e-1)):(a(!0),l(e=>e+1),o&&(s(!1),d(e=>e-1))),t&&t(e.id,!i)},children:[(0,L.jsx)(Bo,{}),`مفيد (`,c,`)`]}),(0,L.jsxs)(Od,{active:o,onClick:()=>{o?(s(!1),d(e=>e-1)):(s(!0),d(e=>e+1),i&&(a(!1),l(e=>e-1))),n&&n(e.id,!o)},children:[(0,L.jsx)(zo,{}),`غير مفيد (`,u,`)`]})]}),(0,L.jsxs)(kd,{onClick:()=>{r&&r(e.id)},children:[(0,L.jsx)(po,{}),`إبلاغ`]})]})]})},Md=I(Gc)`
  padding: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,Nd=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  text-align: center;
`,Pd=I.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Q=I.label`
  display: block;
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
`,Fd=I.span`
  color: ${({theme:e})=>e.colors.error};
  margin-left: ${({theme:e})=>e.spacing.xs};
`,Id=I.input`
  width: 100%;
  padding: ${({theme:e})=>e.spacing.md};
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,Ld=I.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${({theme:e})=>e.spacing.md};
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  font-family: inherit;
  resize: vertical;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,Rd=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg};
  background: ${({theme:e})=>e.colors.background.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,zd=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,Bd=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  text-align: center;
`,Vd=I.div`
  border: 2px dashed ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  text-align: center;
  transition: all ${({theme:e})=>e.transitions.fast};
  cursor: pointer;
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.primary}10;
  }
  
  &.dragover {
    border-color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.primary}20;
  }
`,Hd=I.div`
  font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Ud=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  
  strong {
    color: ${({theme:e})=>e.colors.primary};
  }
`,Wd=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
`,Gd=I.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Kd=I.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background: ${({theme:e})=>e.colors.error};
  color: ${({theme:e})=>e.colors.text.inverse};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    transform: scale(1.1);
  }
`,qd=I.input`
  display: none;
`,$=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,Jd=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  color: ${({limit:e,theme:t})=>e<50?t.colors.error:t.colors.text.tertiary};
  text-align: right;
  margin-top: ${({theme:e})=>e.spacing.xs};
`,Yd=({productId:e,onSubmit:t,onCancel:n})=>{let{success:r,error:i}=Xo(),[a,o]=(0,x.useState)({rating:0,title:``,comment:``,images:[]}),[s,c]=(0,x.useState)(!1),[l,u]=(0,x.useState)(!1),d=1e3,f=e=>{let{name:t,value:n}=e.target;o(e=>({...e,[t]:n}))},p=e=>{o(t=>({...t,rating:e}))},m=e=>{Array.from(e).slice(0,5-a.images.length).forEach(e=>{if(e.type.startsWith(`image/`)){let t=new FileReader;t.onload=t=>{o(n=>({...n,images:[...n.images,{file:e,url:t.target.result,id:Date.now()+Math.random()}]}))},t.readAsDataURL(e)}})},h=e=>{m(e.target.files)},g=e=>{e.preventDefault(),u(!0)},_=e=>{e.preventDefault(),u(!1)},v=e=>{e.preventDefault(),u(!1),m(e.dataTransfer.files)},y=e=>{o(t=>({...t,images:t.images.filter(t=>t.id!==e)}))};return(0,L.jsxs)(Md,{children:[(0,L.jsx)(Nd,{children:`إضافة مراجعة`}),(0,L.jsxs)(`form`,{onSubmit:async n=>{if(n.preventDefault(),a.rating===0){i(`يرجى إضافة تقييم للمنتج`);return}if(!a.comment.trim()){i(`يرجى كتابة تعليق على المنتج`);return}c(!0);try{let n={productId:e,rating:a.rating,title:a.title.trim(),comment:a.comment.trim(),images:a.images.map(e=>e.url),date:new Date().toISOString(),user:{name:`المستخدم الحالي`,avatar:null},verified:!1,likes:0,dislikes:0};t&&await t(n),r(`تم إضافة مراجعتك بنجاح!`),o({rating:0,title:``,comment:``,images:[]})}catch{i(`حدث خطأ أثناء إضافة المراجعة. يرجى المحاولة مرة أخرى.`)}finally{c(!1)}},children:[(0,L.jsxs)(Pd,{children:[(0,L.jsxs)(Q,{children:[`التقييم `,(0,L.jsx)(Fd,{children:`*`})]}),(0,L.jsxs)(Rd,{children:[(0,L.jsx)(zd,{children:`ما رأيك في هذا المنتج؟`}),(0,L.jsx)(pd,{rating:a.rating,interactive:!0,size:`large`,onChange:p}),(0,L.jsx)(Bd,{children:(e=>{switch(e){case 1:return`سيء جداً`;case 2:return`سيء`;case 3:return`متوسط`;case 4:return`جيد`;case 5:return`ممتاز`;default:return`اختر تقييمك`}})(a.rating)})]})]}),(0,L.jsxs)(Pd,{children:[(0,L.jsx)(Q,{htmlFor:`title`,children:`عنوان المراجعة`}),(0,L.jsx)(Id,{type:`text`,id:`title`,name:`title`,value:a.title,onChange:f,placeholder:`مثال: منتج رائع وجودة ممتازة`,maxLength:`100`})]}),(0,L.jsxs)(Pd,{children:[(0,L.jsxs)(Q,{htmlFor:`comment`,children:[`تعليقك `,(0,L.jsx)(Fd,{children:`*`})]}),(0,L.jsx)(Ld,{id:`comment`,name:`comment`,value:a.comment,onChange:f,placeholder:`شاركنا تجربتك مع هذا المنتج...`,maxLength:d,required:!0}),(0,L.jsxs)(Jd,{limit:d-a.comment.length,children:[a.comment.length,`/`,d]})]}),(0,L.jsxs)(Pd,{children:[(0,L.jsx)(Q,{children:`صور المنتج (اختياري)`}),(0,L.jsxs)(Vd,{className:l?`dragover`:``,onClick:()=>document.getElementById(`imageInput`).click(),onDragOver:g,onDragLeave:_,onDrop:v,children:[(0,L.jsx)(Hd,{children:(0,L.jsx)(io,{})}),(0,L.jsxs)(Ud,{children:[(0,L.jsx)(`strong`,{children:`اضغط لاختيار الصور`}),` أو اسحب الصور هنا`,(0,L.jsx)(`br`,{}),(0,L.jsxs)(`small`,{children:[`حد أقصى `,5,` صور، PNG أو JPG`]})]})]}),(0,L.jsx)(qd,{id:`imageInput`,type:`file`,accept:`image/*`,multiple:!0,onChange:h}),a.images.length>0&&(0,L.jsx)(Wd,{children:a.images.map(e=>(0,L.jsxs)(Gd,{children:[(0,L.jsx)(`img`,{src:e.url,alt:`معاينة`}),(0,L.jsx)(Kd,{type:`button`,onClick:()=>y(e.id),children:(0,L.jsx)(Vo,{})})]},e.id))})]}),(0,L.jsxs)($,{children:[(0,L.jsxs)(H,{type:`submit`,variant:`primary`,size:`lg`,loading:s,disabled:s||a.rating===0,children:[(0,L.jsx)(B,{}),s?`جاري الإرسال...`:`نشر المراجعة`]}),n&&(0,L.jsx)(H,{type:`button`,variant:`secondary`,size:`lg`,onClick:n,disabled:s,children:`إلغاء`})]})]})]})},Xd=I.section`
  margin-top: ${({theme:e})=>e.spacing[`3xl`]};
`,Zd=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
    align-items: stretch;
  }
`,Qd=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,$d=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`,ef=I.select`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,tf=I(Gc)`
  padding: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}10, ${({theme:e})=>e.colors.secondary}10);
`,nf=I.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({theme:e})=>e.spacing.lg};
  }
`,rf=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,af=I.div`
  font-size: ${({theme:e})=>e.fonts.sizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.primary};
`,sf=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,cf=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,lf=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  flex: 1;
`,uf=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,df=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  min-width: 60px;
`,ff=I.div`
  flex: 1;
  height: 8px;
  background: ${({theme:e})=>e.colors.border.light};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  overflow: hidden;
`,pf=I.div`
  height: 100%;
  background: ${({theme:e})=>e.colors.warning};
  width: ${({percentage:e})=>e}%;
  transition: width ${({theme:e})=>e.transitions.normal};
`,mf=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.tertiary};
  min-width: 30px;
`,hf=I.div`
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,gf=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,_f=I(H)`
  margin: ${({theme:e})=>e.spacing.xl} auto 0;
  display: block;
`,vf=I.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[`3xl`]};
  color: ${({theme:e})=>e.colors.text.secondary};
  
  h3 {
    margin-bottom: ${({theme:e})=>e.spacing.md};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,yf=({productId:e,reviews:t=[],onAddReview:n})=>{let[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(`newest`),[s,c]=(0,x.useState)(`all`),[l,u]=(0,x.useState)(5),d=(0,x.useMemo)(()=>{if(t.length===0)return{averageRating:0,totalReviews:0,breakdown:{5:0,4:0,3:0,2:0,1:0}};let e=t.reduce((e,t)=>e+t.rating,0)/t.length,n=t.reduce((e,t)=>(e[t.rating]=(e[t.rating]||0)+1,e),{});return{averageRating:Math.round(e*10)/10,totalReviews:t.length,breakdown:{5:0,4:0,3:0,2:0,1:0,...n}}},[t]),f=(0,x.useMemo)(()=>{let e=[...t];if(s!==`all`){let t=parseInt(s);e=e.filter(e=>e.rating===t)}return e.sort((e,t)=>{switch(a){case`newest`:return new Date(t.date)-new Date(e.date);case`oldest`:return new Date(e.date)-new Date(t.date);case`highest`:return t.rating-e.rating;case`lowest`:return e.rating-t.rating;case`helpful`:return(t.likes||0)-(e.likes||0);default:return 0}}),e},[t,a,s]),p=async e=>{n&&await n(e),i(!1)},m=()=>{u(e=>e+5)},h=(e,t)=>t>0?e/t*100:0;return t.length===0&&!r?(0,L.jsxs)(Xd,{children:[(0,L.jsx)(Qd,{children:`المراجعات والتقييمات`}),(0,L.jsxs)(vf,{children:[(0,L.jsx)(`h3`,{children:`لا توجد مراجعات بعد`}),(0,L.jsx)(`p`,{children:`كن أول من يراجع هذا المنتج`}),(0,L.jsxs)(H,{variant:`primary`,size:`lg`,onClick:()=>i(!0),style:{marginTop:`1rem`},children:[(0,L.jsx)(Do,{}),`إضافة مراجعة`]})]}),r&&(0,L.jsx)(Yd,{productId:e,onSubmit:p,onCancel:()=>i(!1)})]}):(0,L.jsxs)(Xd,{children:[(0,L.jsxs)(Zd,{children:[(0,L.jsxs)(Qd,{children:[`المراجعات والتقييمات (`,d.totalReviews,`)`]}),(0,L.jsxs)($d,{children:[(0,L.jsxs)(ef,{value:s,onChange:e=>c(e.target.value),children:[(0,L.jsx)(`option`,{value:`all`,children:`جميع التقييمات`}),(0,L.jsx)(`option`,{value:`5`,children:`5 نجوم`}),(0,L.jsx)(`option`,{value:`4`,children:`4 نجوم`}),(0,L.jsx)(`option`,{value:`3`,children:`3 نجوم`}),(0,L.jsx)(`option`,{value:`2`,children:`نجمتان`}),(0,L.jsx)(`option`,{value:`1`,children:`نجمة واحدة`})]}),(0,L.jsxs)(ef,{value:a,onChange:e=>o(e.target.value),children:[(0,L.jsx)(`option`,{value:`newest`,children:`الأحدث`}),(0,L.jsx)(`option`,{value:`oldest`,children:`الأقدم`}),(0,L.jsx)(`option`,{value:`highest`,children:`أعلى تقييم`}),(0,L.jsx)(`option`,{value:`lowest`,children:`أقل تقييم`}),(0,L.jsx)(`option`,{value:`helpful`,children:`الأكثر إفادة`})]})]})]}),t.length>0&&(0,L.jsx)(tf,{children:(0,L.jsxs)(nf,{children:[(0,L.jsxs)(rf,{children:[(0,L.jsx)(af,{children:d.averageRating}),(0,L.jsx)(sf,{children:(0,L.jsx)(pd,{rating:Math.round(d.averageRating)})}),(0,L.jsxs)(cf,{children:[d.totalReviews,` تقييم`]})]}),(0,L.jsx)(lf,{children:[5,4,3,2,1].map(e=>(0,L.jsxs)(uf,{children:[(0,L.jsxs)(df,{children:[e,` نجوم`]}),(0,L.jsx)(ff,{children:(0,L.jsx)(pf,{percentage:h(d.breakdown[e],d.totalReviews)})}),(0,L.jsx)(mf,{children:d.breakdown[e]})]},e))}),(0,L.jsx)(hf,{children:(0,L.jsxs)(H,{variant:`primary`,onClick:()=>i(!r),children:[(0,L.jsx)(Do,{}),r?`إلغاء`:`إضافة مراجعة`]})})]})}),r&&(0,L.jsx)(Yd,{productId:e,onSubmit:p,onCancel:()=>i(!1)}),(0,L.jsx)(gf,{children:f.slice(0,l).map((e,t)=>(0,L.jsx)(jd,{review:e,onLike:(e,t)=>{},onDislike:(e,t)=>{},onReport:e=>{}},e.id||t))}),f.length>l&&(0,L.jsx)(_f,{variant:`secondary`,onClick:m,children:`عرض المزيد من المراجعات`})]})},bf=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.lg};
  min-height: calc(100vh - 160px);
`,xf=I.nav`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  
  a {
    color: ${({theme:e})=>e.colors.text.link};
    text-decoration: none;
    
    &:hover {
      color: ${({theme:e})=>e.colors.text.linkHover};
    }
  }
  
  span {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,Sf=I.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[`3xl`]};
  margin-bottom: ${({theme:e})=>e.spacing[`3xl`]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.xl};
  }
`,Cf=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,wf=I.div`
  width: 100%;
  height: 500px;
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center;
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  box-shadow: 0 8px 32px ${({theme:e})=>e.colors.shadow.medium};
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    height: 300px;
  }
`,Tf=I.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing.lg};
  right: ${({theme:e})=>e.spacing.lg};
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: ${({type:e,theme:t})=>{switch(e){case`new`:return t.colors.success;case`sale`:return t.colors.error;case`bestseller`:return t.colors.warning;default:return t.colors.primary}}};
  color: ${({theme:e})=>e.colors.text.inverse};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
`,Ef=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,Df=I.h1`
  font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: 1.2;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Of=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,kf=I.div`
  display: flex;
  gap: 2px;
`,Af=I(Io)`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  color: ${({filled:e,theme:t})=>e?t.colors.warning:t.colors.border.secondary};
`,jf=I.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
`,Mf=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin: ${({theme:e})=>e.spacing.lg} 0;
`,Nf=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.primary};
`,Pf=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-decoration: line-through;
`,Ff=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.error};
  background: ${({theme:e})=>e.colors.error}20;
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`,If=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({inStock:e,theme:t})=>e?t.colors.success+`20`:t.colors.error+`20`};
  color: ${({inStock:e,theme:t})=>e?t.colors.success:t.colors.error};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
`,Lf=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.6;
  margin: ${({theme:e})=>e.spacing.lg} 0;
`,Rf=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin: ${({theme:e})=>e.spacing.lg} 0;
`,zf=I.span`
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,Bf=I.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  overflow: hidden;
`,Vf=I.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({theme:e})=>e.colors.background.hover};
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Hf=I.span`
  min-width: 60px;
  text-align: center;
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  padding: 0 ${({theme:e})=>e.spacing.md};
`,Uf=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin: ${({theme:e})=>e.spacing.xl} 0;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,Wf=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
`,Gf=I.button`
  width: 48px;
  height: 48px;
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.primary};
  }
`,Kf=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  margin: ${({theme:e})=>e.spacing.xl} 0;
`,qf=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.background.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  
  svg {
    color: ${({theme:e})=>e.colors.primary};
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
  }
  
  span {
    font-size: ${({theme:e})=>e.fonts.sizes.sm};
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,Jf=I(Gc)`
  margin: ${({theme:e})=>e.spacing.xl} 0;
`,Yf=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Xf=I.div`
  display: grid;
  gap: ${({theme:e})=>e.spacing.md};
`,Zf=I.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`,Qf=I.span`
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
`,$f=I.span`
  color: ${({theme:e})=>e.colors.text.primary};
`,ep=I.section`
  margin-top: ${({theme:e})=>e.spacing[`3xl`]};
`,tp=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  text-align: center;
`,np=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
`,rp=I(Gc)`
  padding: ${({theme:e})=>e.spacing.lg};
  margin-top: ${({theme:e})=>e.spacing.lg};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.warning}10, ${({theme:e})=>e.colors.info}10);
  border-left: 4px solid ${({theme:e})=>e.colors.warning};
  
  h3 {
    color: ${({theme:e})=>e.colors.text.primary};
    margin-bottom: ${({theme:e})=>e.spacing.md};
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
    font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  }
`,ip=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.sm} 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
  
  strong {
    color: ${({theme:e})=>e.colors.text.primary};
    font-weight: ${({theme:e})=>e.fonts.weights.medium};
  }
  
  span {
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,ap=()=>{let{id:e}=Qe(),t=Xe(),{addItem:n}=ja(),{success:r,info:i}=Xo(),{toggleItem:a,isInWishlist:o}=fs(),[s,c]=(0,x.useState)(1),[l,u]=(0,x.useState)(Ds[parseInt(e)]||[]),d=Cs.find(t=>t.id===parseInt(e));if((0,x.useEffect)(()=>{d||t(`/shop`)},[d,t]),!d)return null;let f=Cs.filter(e=>e.category===d.category&&e.id!==d.id).slice(0,4),p=()=>{for(let e=0;e<s;e++)n(d);r(`تم إضافة ${s} من ${d.name} إلى السلة`)},m=e=>{c(t=>Math.max(1,t+e))},h=()=>{a(d)?r(`تم إضافة المنتج إلى المفضلة`):i(`تم إزالة المنتج من المفضلة`)},g=()=>{navigator.share?navigator.share({title:d.name,text:d.description,url:window.location.href}):(navigator.clipboard.writeText(window.location.href),r(`تم نسخ رابط المنتج`))},_=async e=>{let t={...e,id:Date.now()};u(e=>[t,...e])},v=e=>Array.from({length:5},(t,n)=>(0,L.jsx)(Af,{filled:n<e},n)),y=()=>d.oldPrice?Math.round((d.oldPrice-d.price)/d.oldPrice*100):null,b=e=>new Intl.NumberFormat(`ar-EG`,{style:`currency`,currency:`EGP`,minimumFractionDigits:0}).format(e);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ic,{product:d}),(0,L.jsxs)(bf,{children:[(0,L.jsxs)(xf,{children:[(0,L.jsx)(O,{to:`/`,children:`الرئيسية`}),(0,L.jsx)(`span`,{children:`/`}),(0,L.jsx)(O,{to:`/shop`,children:`المنتجات`}),(0,L.jsx)(`span`,{children:`/`}),(0,L.jsx)(`span`,{children:d.name})]}),(0,L.jsxs)(Sf,{children:[(0,L.jsx)(Cf,{children:(0,L.jsx)(wf,{src:d.image,children:d.badge&&(0,L.jsx)(Tf,{type:d.badge,children:(e=>{switch(e){case`new`:return`جديد`;case`sale`:return`تخفيض`;case`bestseller`:return`الأكثر مبيعاً`;default:return e}})(d.badge)})})}),(0,L.jsxs)(Ef,{children:[(0,L.jsx)(Df,{children:d.name}),(0,L.jsxs)(Of,{children:[(0,L.jsx)(kf,{children:v(d.rating)}),(0,L.jsxs)(jf,{children:[`(`,d.reviewCount,` تقييم)`]})]}),(0,L.jsxs)(Mf,{children:[(0,L.jsx)(Nf,{children:b(d.price)}),d.oldPrice&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Pf,{children:b(d.oldPrice)}),(0,L.jsxs)(Ff,{children:[`-`,y(),`%`]})]})]}),(0,L.jsxs)(If,{inStock:d.inStock,children:[(0,L.jsx)(oo,{}),d.inStock?`متوفر في المخزن`:`غير متوفر`]}),(0,L.jsx)(Lf,{children:d.description}),(0,L.jsxs)(Rf,{children:[(0,L.jsx)(zf,{children:`الكمية:`}),(0,L.jsxs)(Bf,{children:[(0,L.jsx)(Vf,{onClick:()=>m(-1),disabled:s<=1,children:(0,L.jsx)(To,{})}),(0,L.jsx)(Hf,{children:s}),(0,L.jsx)(Vf,{onClick:()=>m(1),children:(0,L.jsx)(Do,{})})]})]}),(0,L.jsxs)(Uf,{children:[(0,L.jsxs)(H,{variant:`primary`,size:`lg`,onClick:p,disabled:!d.inStock,style:{flex:1},children:[(0,L.jsx)(Fo,{}),`إضافة للسلة (`,b(d.price*s),`)`]}),(0,L.jsxs)(Wf,{children:[(0,L.jsx)(Gf,{onClick:h,title:`إضافة للمفضلة`,children:(0,L.jsx)(ho,{style:{color:o(d.id)?`#ff4757`:void 0}})}),(0,L.jsx)(Gf,{onClick:g,title:`مشاركة`,children:(0,L.jsx)(Mo,{})})]})]}),(0,L.jsxs)(Kf,{children:[(0,L.jsxs)(qf,{children:[(0,L.jsx)(Wo,{}),(0,L.jsx)(`span`,{children:`شحن مجاني للطلبات أكثر من 500 جنيه`})]}),(0,L.jsxs)(qf,{children:[(0,L.jsx)(No,{}),(0,L.jsx)(`span`,{children:d.warranty||`ضمان لمدة سنتين`})]}),(0,L.jsxs)(qf,{children:[(0,L.jsx)(Go,{}),(0,L.jsx)(`span`,{children:`إرجاع مجاني خلال 14 يوم`})]})]}),d.condition&&(0,L.jsxs)(rp,{children:[(0,L.jsx)(`h3`,{children:`معلومات المنتج المستعمل`}),(0,L.jsxs)(ip,{children:[(0,L.jsx)(`strong`,{children:`الحالة:`}),(0,L.jsx)(`span`,{children:d.condition===`excellent`?`ممتازة`:d.condition===`like-new`?`مثل الجديد`:d.condition===`good`?`جيدة`:`مقبولة`})]}),d.usageTime&&(0,L.jsxs)(ip,{children:[(0,L.jsx)(`strong`,{children:`فترة الاستخدام:`}),(0,L.jsx)(`span`,{children:d.usageTime})]}),(0,L.jsxs)(ip,{children:[(0,L.jsx)(`strong`,{children:`الضمان:`}),(0,L.jsx)(`span`,{children:d.warranty})]})]})]})]}),(0,L.jsxs)(Jf,{children:[(0,L.jsx)(Yf,{children:`المواصفات التقنية`}),(0,L.jsx)(Xf,{children:Object.entries(d.specifications).map(([e,t])=>(0,L.jsxs)(Zf,{children:[(0,L.jsx)(Qf,{children:e}),(0,L.jsx)($f,{children:t})]},e))})]}),(0,L.jsx)(G,{currentProduct:d}),f.length>0&&(0,L.jsxs)(ep,{children:[(0,L.jsx)(tp,{children:`منتجات ذات صلة`}),(0,L.jsx)(np,{children:f.map(e=>(0,L.jsx)(cl,{product:e},e.id))})]}),(0,L.jsx)(yf,{productId:d.id,reviews:l,onAddReview:_})]})]})},op=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.lg};
  min-height: calc(100vh - 160px);
`,sp=I.section`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[`3xl`]} 0;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.primary}10 0%,
    ${({theme:e})=>e.colors.secondary}10 100%
  );
  border-radius: ${({theme:e})=>e.borderRadius[`2xl`]};
  margin-bottom: ${({theme:e})=>e.spacing[`3xl`]};
`,cp=I.h1`
  font-size: ${({theme:e})=>e.fonts.sizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  }
`,lp=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  color: ${({theme:e})=>e.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto ${({theme:e})=>e.spacing.xl};
  line-height: 1.6;
`,up=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin: ${({theme:e})=>e.spacing[`3xl`]} 0;
`,dp=I(Gc)`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xl};
  background: ${({theme:e})=>e.colors.background.card};
  border: 2px solid transparent;
  transition: all ${({theme:e})=>e.transitions.normal};
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-4px);
  }
`,fp=I.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  border-radius: ${({theme:e})=>e.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({theme:e})=>e.spacing.md};
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
`,pp=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,mp=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  margin: 0;
`,hp=I.section`
  margin-bottom: ${({theme:e})=>e.spacing[`3xl`]};
`,gp=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,_p=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
  align-items: start;
`,vp=I(Gc)`
  padding: ${({theme:e})=>e.spacing.xl};
  height: 100%;
`,yp=I.div`
  width: 50px;
  height: 50px;
  background: ${({theme:e})=>e.colors.primary}20;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.xl};
    color: ${({theme:e})=>e.colors.primary};
  }
`,bp=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,xp=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`,Sp=I.div`
  background: ${({theme:e})=>e.colors.background.secondary};
  padding: ${({theme:e})=>e.spacing[`3xl`]};
  border-radius: ${({theme:e})=>e.borderRadius[`2xl`]};
  margin: ${({theme:e})=>e.spacing[`3xl`]} 0;
`,Cp=I.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`,wp=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Tp=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:e})=>e.spacing.xl};
`,Ep=I(Gc)`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xl};
  transition: all ${({theme:e})=>e.transitions.normal};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px ${({theme:e})=>e.colors.shadow.medium};
  }
`,Dp=I.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  border-radius: ${({theme:e})=>e.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({theme:e})=>e.spacing.lg};
  font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  color: ${({theme:e})=>e.colors.text.inverse};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
`,Op=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,kp=I.p`
  color: ${({theme:e})=>e.colors.primary};
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Ap=I.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  line-height: 1.5;
  margin: 0;
`,jp=()=>{let e=[{icon:(0,L.jsx)(qo,{}),number:`10,000+`,label:`عميل راضٍ`},{icon:(0,L.jsx)(to,{}),number:`5+`,label:`سنوات خبرة`},{icon:(0,L.jsx)(Io,{}),number:`4.9`,label:`تقييم العملاء`},{icon:(0,L.jsx)(Ao,{}),number:`50,000+`,label:`منتج مباع`}],t=[{icon:(0,L.jsx)(No,{}),title:`الجودة والثقة`,description:`نحن ملتزمون بتقديم منتجات أصلية عالية الجودة من أفضل الماركات العالمية مع ضمان شامل على جميع المنتجات.`},{icon:(0,L.jsx)(Wo,{}),title:`التوصيل السريع`,description:`نوفر خدمة توصيل سريعة وآمنة في جميع أنحاء مصر مع إمكانية التتبع المباشر لطلبك حتى وصوله إليك.`},{icon:(0,L.jsx)(mo,{}),title:`الدعم المتميز`,description:`فريق دعم فني متخصص متاح 24/7 لمساعدتك في اختيار المنتجات المناسبة وحل أي مشاكل تقنية قد تواجهها.`},{icon:(0,L.jsx)(ho,{}),title:`رضا العملاء`,description:`هدفنا الأول هو رضا عملائنا، لذلك نسعى دائماً لتقديم أفضل خدمة وأسعار تنافسية مع ضمان الجودة.`}];return(0,L.jsxs)(op,{children:[(0,L.jsxs)(sp,{children:[(0,L.jsx)(cp,{children:`من نحن`}),(0,L.jsx)(lp,{children:`Y0 Hardware هو متجرك الموثوق لقطع الكمبيوتر واللابتوب والاكسسوارات في مصر. نحن نقدم أحدث التقنيات بأفضل الأسعار مع خدمة عملاء متميزة.`})]}),(0,L.jsx)(up,{children:e.map((e,t)=>(0,L.jsxs)(dp,{children:[(0,L.jsx)(fp,{children:e.icon}),(0,L.jsx)(pp,{children:e.number}),(0,L.jsx)(mp,{children:e.label})]},t))}),(0,L.jsx)(Sp,{children:(0,L.jsxs)(Cp,{children:[(0,L.jsx)(gp,{children:`قصتنا`}),(0,L.jsx)(wp,{children:`بدأت Y0 Hardware في عام 2019 كحلم بسيط لتوفير قطع الكمبيوتر عالية الجودة بأسعار معقولة للجميع. من خلال شغفنا بالتكنولوجيا وفهمنا العميق لاحتياجات العملاء، تمكنا من بناء علاقات قوية مع أفضل الموردين والماركات العالمية.`}),(0,L.jsx)(wp,{children:`اليوم، نحن فخورون بخدمة أكثر من 10,000 عميل راضٍ في جميع أنحاء مصر، ونواصل نموّنا وتطويرنا لنكون الخيار الأول لكل من يبحث عن التميز في عالم التكنولوجيا.`})]})}),(0,L.jsxs)(hp,{children:[(0,L.jsx)(gp,{children:`قيمنا ومبادئنا`}),(0,L.jsx)(_p,{children:t.map((e,t)=>(0,L.jsxs)(vp,{children:[(0,L.jsx)(yp,{children:e.icon}),(0,L.jsx)(bp,{children:e.title}),(0,L.jsx)(xp,{children:e.description})]},t))})]}),(0,L.jsxs)(hp,{children:[(0,L.jsx)(gp,{children:`فريق العمل`}),(0,L.jsx)(Tp,{children:[{name:`يوسف محمود`,role:`المؤسس والمدير التنفيذي`,description:`خبرة أكثر من 10 سنوات في مجال التكنولوجيا وقطع الكمبيوتر`,avatar:`ي`},{name:`أحمد علي`,role:`مدير المبيعات`,description:`متخصص في استشارات الأجهزة وحلول الألعاب`,avatar:`أ`},{name:`فاطمة حسن`,role:`مديرة خدمة العملاء`,description:`خبيرة في تقديم الدعم الفني وحل مشاكل العملاء`,avatar:`ف`},{name:`محمد سعد`,role:`مدير التقنية`,description:`مطور ومصمم الموقع الإلكتروني وأنظمة الإدارة`,avatar:`م`}].map((e,t)=>(0,L.jsxs)(Ep,{children:[(0,L.jsx)(Dp,{children:e.avatar}),(0,L.jsx)(Op,{children:e.name}),(0,L.jsx)(kp,{children:e.role}),(0,L.jsx)(Ap,{children:e.description})]},t))})]})]})},Mp=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.lg};
  min-height: calc(100vh - 160px);
`,Np=I.h1`
  font-size: ${({theme:e})=>e.fonts.sizes[`4xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  }
`,Pp=I.p`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  color: ${({theme:e})=>e.colors.text.secondary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${({theme:e})=>e.spacing[`3xl`]};
  line-height: 1.6;
`,Fp=I.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing[`3xl`]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.xl};
  }
`,Ip=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xl};
`,Lp=I(Gc)`
  padding: ${({theme:e})=>e.spacing.xl};
  transition: all ${({theme:e})=>e.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px ${({theme:e})=>e.colors.shadow.medium};
  }
`,Rp=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,zp=I.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, ${({theme:e})=>e.colors.secondary});
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.xl};
    color: ${({theme:e})=>e.colors.text.inverse};
  }
`,Bp=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,Vp=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,Hp=I.div`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  line-height: 1.5;
`,Up=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.lg};
`,Wp=I.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: ${({theme:e})=>e.colors.background.hover};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  text-decoration: none;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({platform:e,theme:t})=>{switch(e){case`facebook`:return`#1877f2`;case`twitter`:return`#1da1f2`;case`instagram`:return`#e4405f`;case`whatsapp`:return`#25d366`;default:return t.colors.primary}}};
    color: ${({theme:e})=>e.colors.text.inverse};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: ${({theme:e})=>e.fonts.sizes.lg};
  }
`,Gp=I.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.lg};
`,Kp=I(Gc)`
  padding: ${({theme:e})=>e.spacing.xl};
`,qp=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Jp=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,Yp=I.label`
  font-weight: ${({theme:e})=>e.fonts.weights.medium};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
`,Xp=I.input`
  padding: ${({theme:e})=>e.spacing.md};
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,Zp=I.textarea`
  padding: ${({theme:e})=>e.spacing.md};
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.muted};
  }
`,Qp=I.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.md};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,$p=I.section`
  margin-top: ${({theme:e})=>e.spacing[`3xl`]};
`,em=I.h2`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  text-align: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,tm=I.div`
  width: 100%;
  height: 400px;
  background: ${({theme:e})=>e.colors.background.secondary};
  border-radius: ${({theme:e})=>e.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  border: 2px solid ${({theme:e})=>e.colors.border.primary};
`,nm=()=>{let{success:e,error:t}=Xo(),[n,r]=(0,x.useState)({name:``,email:``,phone:``,subject:``,message:``}),[i,a]=(0,x.useState)(!1),o=e=>{let{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))};return(0,L.jsxs)(Mp,{children:[(0,L.jsx)(Np,{children:`تواصل معنا`}),(0,L.jsx)(Pp,{children:`نحن هنا لمساعدتك! تواصل معنا عبر أي من الطرق التالية أو املأ النموذج وسنتواصل معك في أقرب وقت ممكن.`}),(0,L.jsxs)(Fp,{children:[(0,L.jsx)(Ip,{children:[{icon:(0,L.jsx)(Eo,{}),title:`الهاتف`,details:[`01234567890`,`01098765432`,`متاح من 9 صباحاً حتى 10 مساءً`]},{icon:(0,L.jsx)(co,{}),title:`البريد الإلكتروني`,details:[`info@y0hardware.com`,`support@y0hardware.com`,`نرد خلال 24 ساعة`]},{icon:(0,L.jsx)(xo,{}),title:`العنوان`,details:[`شارع التحرير، وسط البلد`,`القاهرة، مصر`,`الرمز البريدي: 11511`]},{icon:(0,L.jsx)(so,{}),title:`ساعات العمل`,details:[`السبت - الخميس: 9:00 - 22:00`,`الجمعة: 14:00 - 22:00`,`خدمة العملاء متاحة 24/7`]}].map((e,t)=>(0,L.jsxs)(Lp,{children:[(0,L.jsxs)(Rp,{children:[(0,L.jsx)(zp,{children:e.icon}),(0,L.jsx)(Bp,{children:e.title})]}),(0,L.jsx)(Vp,{children:e.details.map((e,t)=>(0,L.jsx)(Hp,{children:e},t))}),t===0&&(0,L.jsxs)(Up,{children:[(0,L.jsx)(Wp,{href:`#`,platform:`facebook`,"aria-label":`Facebook`,children:(0,L.jsx)(Ya,{})}),(0,L.jsx)(Wp,{href:`#`,platform:`twitter`,"aria-label":`Twitter`,children:(0,L.jsx)(Za,{})}),(0,L.jsx)(Wp,{href:`#`,platform:`instagram`,"aria-label":`Instagram`,children:(0,L.jsx)(Xa,{})}),(0,L.jsx)(Wp,{href:`#`,platform:`whatsapp`,"aria-label":`WhatsApp`,children:(0,L.jsx)(Qa,{})})]})]},t))}),(0,L.jsxs)(Kp,{children:[(0,L.jsx)(qp,{children:`أرسل لنا رسالة`}),(0,L.jsxs)(Gp,{onSubmit:async i=>{if(i.preventDefault(),a(!0),!n.name||!n.email||!n.message){t(`يرجى ملء جميع الحقول المطلوبة`),a(!1);return}try{await new Promise(e=>setTimeout(e,2e3)),e(`تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.`),r({name:``,email:``,phone:``,subject:``,message:``})}catch{t(`حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.`)}finally{a(!1)}},children:[(0,L.jsxs)(Qp,{children:[(0,L.jsxs)(Jp,{children:[(0,L.jsx)(Yp,{htmlFor:`name`,children:`الاسم *`}),(0,L.jsx)(Xp,{type:`text`,id:`name`,name:`name`,value:n.name,onChange:o,placeholder:`اسمك الكامل`,required:!0})]}),(0,L.jsxs)(Jp,{children:[(0,L.jsx)(Yp,{htmlFor:`email`,children:`البريد الإلكتروني *`}),(0,L.jsx)(Xp,{type:`email`,id:`email`,name:`email`,value:n.email,onChange:o,placeholder:`example@email.com`,required:!0})]})]}),(0,L.jsxs)(Qp,{children:[(0,L.jsxs)(Jp,{children:[(0,L.jsx)(Yp,{htmlFor:`phone`,children:`رقم الهاتف`}),(0,L.jsx)(Xp,{type:`tel`,id:`phone`,name:`phone`,value:n.phone,onChange:o,placeholder:`01234567890`})]}),(0,L.jsxs)(Jp,{children:[(0,L.jsx)(Yp,{htmlFor:`subject`,children:`الموضوع`}),(0,L.jsx)(Xp,{type:`text`,id:`subject`,name:`subject`,value:n.subject,onChange:o,placeholder:`موضوع الرسالة`})]})]}),(0,L.jsxs)(Jp,{children:[(0,L.jsx)(Yp,{htmlFor:`message`,children:`الرسالة *`}),(0,L.jsx)(Zp,{id:`message`,name:`message`,value:n.message,onChange:o,placeholder:`اكتب رسالتك هنا...`,required:!0})]}),(0,L.jsxs)(H,{type:`submit`,variant:`primary`,size:`lg`,loading:i,disabled:i,children:[(0,L.jsx)(B,{}),i?`جاري الإرسال...`:`إرسال الرسالة`]})]})]})]}),(0,L.jsxs)($p,{children:[(0,L.jsx)(em,{children:`موقعنا على الخريطة`}),(0,L.jsx)(tm,{children:(0,L.jsxs)(`div`,{children:[(0,L.jsx)(xo,{style:{fontSize:`3rem`,marginBottom:`1rem`}}),(0,L.jsx)(`br`,{}),`خريطة تفاعلية - قيد التطوير`,(0,L.jsx)(`br`,{}),`شارع التحرير، وسط البلد، القاهرة`]})})]})]})},rm=I.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.lg};
  min-height: calc(100vh - 160px);
`,im=I.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
    align-items: stretch;
  }
`,am=I.h1`
  font-size: ${({theme:e})=>e.fonts.sizes[`3xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin: 0;
  
  svg {
    color: ${({theme:e})=>e.colors.error};
  }
`,om=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`,sm=I.select`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border: 1px solid ${({theme:e})=>e.colors.border.primary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }
`,cm=I(Gc)`
  padding: ${({theme:e})=>e.spacing.xl};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.error}10, ${({theme:e})=>e.colors.primary}10);
`,lm=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  text-align: center;
`,um=I.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,dm=I.div`
  font-size: ${({theme:e})=>e.fonts.sizes[`2xl`]};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.primary};
`,fm=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
`,pm=I.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,mm=I(Gc)`
  position: relative;
  overflow: hidden;
  transition: all ${({theme:e})=>e.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px ${({theme:e})=>e.colors.shadow.medium};
  }
`,hm=I.div`
  width: 100%;
  height: 200px;
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center;
  position: relative;
`,gm=I.span`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  right: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  background: ${({theme:e})=>e.colors.error};
  color: ${({theme:e})=>e.colors.text.inverse};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
`,_m=I.div`
  position: absolute;
  top: ${({theme:e})=>e.spacing.md};
  left: ${({theme:e})=>e.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
  opacity: 0;
  transform: translateX(-20px);
  transition: all ${({theme:e})=>e.transitions.normal};
  
  ${mm}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`,vm=I.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({theme:e})=>e.colors.background.card};
  color: ${({theme:e})=>e.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  box-shadow: 0 2px 8px ${({theme:e})=>e.colors.shadow.light};
  
  &:hover {
    background: ${({variant:e,theme:t})=>{switch(e){case`remove`:return t.colors.error;case`share`:return t.colors.info;default:return t.colors.primary}}};
    color: ${({theme:e})=>e.colors.text.inverse};
    transform: scale(1.1);
  }
`,ym=I.div`
  padding: ${({theme:e})=>e.spacing.lg};
`,bm=I.h3`
  font-size: ${({theme:e})=>e.fonts.sizes.lg};
  font-weight: ${({theme:e})=>e.fonts.weights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,xm=I.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,Sm=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.xl};
  font-weight: ${({theme:e})=>e.fonts.weights.bold};
  color: ${({theme:e})=>e.colors.primary};
`,Cm=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.base};
  color: ${({theme:e})=>e.colors.text.tertiary};
  text-decoration: line-through;
`,wm=I.span`
  font-size: ${({theme:e})=>e.fonts.sizes.xs};
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  display: block;
`,Tm=I.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.md};
`,Em=I.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing[`3xl`]};
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    font-size: 4rem;
    margin-bottom: ${({theme:e})=>e.spacing.lg};
    color: ${({theme:e})=>e.colors.text.tertiary};
  }
  
  h2 {
    margin-bottom: ${({theme:e})=>e.spacing.md};
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  p {
    margin-bottom: ${({theme:e})=>e.spacing.xl};
  }
`,Dm=I.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.xl};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.sm}) {
    flex-direction: column;
  }
`,Om=()=>{let{items:e,totalItems:t,clearWishlist:n,removeItem:r,getWishlistSummary:i}=fs(),{addItem:a}=ja(),{success:o,info:s}=Xo(),[c,l]=(0,x.useState)(`newest`),[u,d]=(0,x.useState)(`all`),f=i(),p=x.useMemo(()=>{let t=[...e];return u!==`all`&&(t=t.filter(e=>e.category===u)),t.sort((e,t)=>{switch(c){case`newest`:return new Date(t.addedAt)-new Date(e.addedAt);case`oldest`:return new Date(e.addedAt)-new Date(t.addedAt);case`price-low`:return e.price-t.price;case`price-high`:return t.price-e.price;case`name`:return e.name.localeCompare(t.name,`ar`);default:return 0}}),t},[e,c,u]),m=(e,t)=>{r(e),s(`تم إزالة ${t} من المفضلة`)},h=e=>{a(e),o(`تم إضافة ${e.name} إلى السلة`)},g=()=>{p.forEach(e=>{a(e)}),o(`تم إضافة ${p.length} منتج إلى السلة`)},_=()=>{n(),s(`تم إفراغ قائمة المفضلة`)},v=e=>{let t=`${window.location.origin}/product/${e.id}`;navigator.share?navigator.share({title:e.name,text:e.description,url:t}):(navigator.clipboard.writeText(t),o(`تم نسخ رابط المنتج`))},y=e=>new Intl.NumberFormat(`ar-EG`,{style:`currency`,currency:`EGP`,minimumFractionDigits:0}).format(e),b=e=>new Date(e).toLocaleDateString(`ar-EG`,{year:`numeric`,month:`short`,day:`numeric`});return t===0?(0,L.jsxs)(rm,{children:[(0,L.jsxs)(am,{children:[(0,L.jsx)(ho,{}),`قائمة المفضلة`]}),(0,L.jsxs)(Em,{children:[(0,L.jsx)(ho,{}),(0,L.jsx)(`h2`,{children:`قائمة المفضلة فارغة`}),(0,L.jsx)(`p`,{children:`لم تقم بإضافة أي منتجات إلى قائمة المفضلة بعد`}),(0,L.jsxs)(H,{as:O,to:`/shop`,variant:`primary`,size:`lg`,children:[`تسوق الآن`,(0,L.jsx)(eo,{})]})]})]}):(0,L.jsxs)(rm,{children:[(0,L.jsxs)(im,{children:[(0,L.jsxs)(am,{children:[(0,L.jsx)(ho,{}),`قائمة المفضلة (`,t,` منتج)`]}),(0,L.jsxs)(om,{children:[(0,L.jsxs)(sm,{value:u,onChange:e=>d(e.target.value),children:[(0,L.jsx)(`option`,{value:`all`,children:`جميع الفئات`}),Object.entries(ws).map(([e,t])=>e!==`all`&&(0,L.jsx)(`option`,{value:e,children:t},e))]}),(0,L.jsxs)(sm,{value:c,onChange:e=>l(e.target.value),children:[(0,L.jsx)(`option`,{value:`newest`,children:`الأحدث`}),(0,L.jsx)(`option`,{value:`oldest`,children:`الأقدم`}),(0,L.jsx)(`option`,{value:`price-low`,children:`السعر: من الأقل للأعلى`}),(0,L.jsx)(`option`,{value:`price-high`,children:`السعر: من الأعلى للأقل`}),(0,L.jsx)(`option`,{value:`name`,children:`الاسم أبجدياً`})]})]})]}),(0,L.jsx)(cm,{children:(0,L.jsxs)(lm,{children:[(0,L.jsxs)(um,{children:[(0,L.jsx)(dm,{children:f.totalItems}),(0,L.jsx)(fm,{children:`منتج في المفضلة`})]}),(0,L.jsxs)(um,{children:[(0,L.jsx)(dm,{children:y(f.totalValue)}),(0,L.jsx)(fm,{children:`القيمة الإجمالية`})]}),(0,L.jsxs)(um,{children:[(0,L.jsx)(dm,{children:y(f.averagePrice)}),(0,L.jsx)(fm,{children:`متوسط السعر`})]})]})}),(0,L.jsx)(pm,{children:p.map(e=>(0,L.jsxs)(mm,{children:[(0,L.jsxs)(hm,{src:e.image,children:[e.badge&&(0,L.jsxs)(gm,{children:[e.badge===`new`&&`جديد`,e.badge===`sale`&&`تخفيض`,e.badge===`bestseller`&&`الأكثر مبيعاً`]}),(0,L.jsxs)(_m,{children:[(0,L.jsx)(vm,{variant:`remove`,onClick:()=>m(e.id,e.name),title:`إزالة من المفضلة`,children:(0,L.jsx)(Ho,{})}),(0,L.jsx)(vm,{variant:`share`,onClick:()=>v(e),title:`مشاركة`,children:(0,L.jsx)(Mo,{})})]})]}),(0,L.jsxs)(ym,{children:[(0,L.jsx)(bm,{children:e.name}),(0,L.jsxs)(wm,{children:[`أُضيف في `,b(e.addedAt)]}),(0,L.jsxs)(xm,{children:[(0,L.jsx)(Sm,{children:y(e.price)}),e.oldPrice&&(0,L.jsx)(Cm,{children:y(e.oldPrice)})]}),(0,L.jsxs)(Tm,{children:[(0,L.jsxs)(H,{variant:`primary`,size:`sm`,onClick:()=>h(e),style:{flex:1},children:[(0,L.jsx)(Fo,{}),`إضافة للسلة`]}),(0,L.jsx)(H,{as:O,to:`/product/${e.id}`,variant:`secondary`,size:`sm`,style:{flex:1},children:`عرض التفاصيل`})]})]})]},e.id))}),(0,L.jsxs)(Dm,{children:[(0,L.jsxs)(H,{variant:`primary`,size:`lg`,onClick:g,children:[(0,L.jsx)(Fo,{}),`إضافة الكل للسلة`]}),(0,L.jsxs)(H,{variant:`danger`,size:`lg`,onClick:_,children:[(0,L.jsx)(Ho,{}),`إفراغ المفضلة`]})]})]})},km=I.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Am=I.main`
  flex: 1;
`;function jm(){return(0,L.jsx)(ka,{children:(0,L.jsx)(Fa,{children:(0,L.jsx)(gs,{children:(0,L.jsx)(us,{children:(0,L.jsxs)(Oc,{children:[(0,L.jsx)(_s,{}),(0,L.jsxs)(cn,{children:[(0,L.jsx)(Mc,{}),(0,L.jsxs)(km,{children:[(0,L.jsx)(cc,{}),(0,L.jsx)(Am,{children:(0,L.jsxs)(St,{children:[(0,L.jsx)(bt,{path:`/`,element:(0,L.jsx)(cu,{})}),(0,L.jsx)(bt,{path:`/shop`,element:(0,L.jsx)(Fu,{})}),(0,L.jsx)(bt,{path:`/cart`,element:(0,L.jsx)(cd,{})}),(0,L.jsx)(bt,{path:`/wishlist`,element:(0,L.jsx)(Om,{})}),(0,L.jsx)(bt,{path:`/product/:id`,element:(0,L.jsx)(ap,{})}),(0,L.jsx)(bt,{path:`/about`,element:(0,L.jsx)(jp,{})}),(0,L.jsx)(bt,{path:`/contact`,element:(0,L.jsx)(nm,{})})]})}),(0,L.jsx)(Sc,{})]})]})]})})})})})}var Mm=jm;(0,kn.createRoot)(document.getElementById(`root`)).render((0,L.jsx)(x.StrictMode,{children:(0,L.jsx)(Mm,{})}));