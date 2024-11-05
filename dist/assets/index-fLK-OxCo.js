(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ps(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const k={},ft=[],Se=()=>{},Po=()=>!1,cn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),gs=e=>e.startsWith("onUpdate:"),Y=Object.assign,ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ro=Object.prototype.hasOwnProperty,B=(e,t)=>Ro.call(e,t),O=Array.isArray,ut=e=>ln(e)==="[object Map]",Ur=e=>ln(e)==="[object Set]",D=e=>typeof e=="function",J=e=>typeof e=="string",Ue=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Kr=e=>(q(e)||D(e))&&D(e.then)&&D(e.catch),Wr=Object.prototype.toString,ln=e=>Wr.call(e),No=e=>ln(e).slice(8,-1),qr=e=>ln(e)==="[object Object]",bs=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,St=ps(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Bo=/-(\w)/g,je=fn(e=>e.replace(Bo,(t,n)=>n?n.toUpperCase():"")),$o=/\B([A-Z])/g,ot=fn(e=>e.replace($o,"-$1").toLowerCase()),zr=fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sn=fn(e=>e?`on${zr(e)}`:""),ke=(e,t)=>!Object.is(e,t),Yt=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Gr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Gn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ys;const un=()=>Ys||(Ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _s(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=J(s)?Ho(s):_s(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(J(e)||q(e))return e}const Fo=/;(?![^(]*\))/g,ko=/:([^]+)/,Lo=/\/\*[^]*?\*\//g;function Ho(e){const t={};return e.replace(Lo,"").split(Fo).forEach(n=>{if(n){const s=n.split(ko);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ys(e){let t="";if(J(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const s=ys(e[n]);s&&(t+=s+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const jo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vo=ps(jo);function Jr(e){return!!e||e===""}const Yr=e=>!!(e&&e.__v_isRef===!0),Xr=e=>J(e)?e:e==null?"":O(e)||q(e)&&(e.toString===Wr||!D(e.toString))?Yr(e)?Xr(e.value):JSON.stringify(e,Qr,2):String(e),Qr=(e,t)=>Yr(t)?Qr(e,t.value):ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[In(s,i)+" =>"]=r,n),{})}:Ur(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>In(n))}:Ue(t)?In(t):q(t)&&!O(t)&&!qr(t)?String(t):t,In=(e,t="")=>{var n;return Ue(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Uo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ko(){return ue}let j;const Tn=new WeakSet;class Zr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tn.has(this)&&(Tn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ti(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xs(this),ni(this);const t=j,n=ge;j=this,ge=!0;try{return this.fn()}finally{si(this),j=t,ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Es(t);this.deps=this.depsTail=void 0,Xs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jn(this)&&this.run()}get dirty(){return Jn(this)}}let ei=0,It,Tt;function ti(e,t=!1){if(e.flags|=8,t){e.next=Tt,Tt=e;return}e.next=It,It=e}function ws(){ei++}function vs(){if(--ei>0)return;if(Tt){let t=Tt;for(Tt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;It;){let t=It;for(It=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function ni(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function si(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Es(s),Wo(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Jn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ri(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ri(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dt))return;e.globalVersion=Dt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Jn(e)){e.flags&=-3;return}const n=j,s=ge;j=e,ge=!0;try{ni(e);const r=e.fn(e._value);(t.version===0||ke(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{j=n,ge=s,si(e),e.flags&=-3}}function Es(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Es(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wo(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ge=!0;const ii=[];function Ke(){ii.push(ge),ge=!1}function We(){const e=ii.pop();ge=e===void 0?!0:e}function Xs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=j;j=void 0;try{t()}finally{j=n}}}let Dt=0;class qo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ss{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!j||!ge||j===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==j)n=this.activeLink=new qo(j,this),j.deps?(n.prevDep=j.depsTail,j.depsTail.nextDep=n,j.depsTail=n):j.deps=j.depsTail=n,oi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=j.depsTail,n.nextDep=void 0,j.depsTail.nextDep=n,j.depsTail=n,j.deps===n&&(j.deps=s)}return n}trigger(t){this.version++,Dt++,this.notify(t)}notify(t){ws();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vs()}}}function oi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)oi(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Yn=new WeakMap,et=Symbol(""),Xn=Symbol(""),Mt=Symbol("");function Q(e,t,n){if(ge&&j){let s=Yn.get(e);s||Yn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Ss),r.map=s,r.key=n),r.track()}}function Oe(e,t,n,s,r,i){const o=Yn.get(e);if(!o){Dt++;return}const a=c=>{c&&c.trigger()};if(ws(),t==="clear")o.forEach(a);else{const c=O(e),d=c&&bs(n);if(c&&n==="length"){const u=Number(s);o.forEach((p,E)=>{(E==="length"||E===Mt||!Ue(E)&&E>=u)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(Mt)),t){case"add":c?d&&a(o.get("length")):(a(o.get(et)),ut(e)&&a(o.get(Xn)));break;case"delete":c||(a(o.get(et)),ut(e)&&a(o.get(Xn)));break;case"set":ut(e)&&a(o.get(et));break}}vs()}function at(e){const t=N(e);return t===e?t:(Q(t,"iterate",Mt),me(e)?t:t.map(se))}function Is(e){return Q(e=N(e),"iterate",Mt),e}const zo={__proto__:null,[Symbol.iterator](){return An(this,Symbol.iterator,se)},concat(...e){return at(this).concat(...e.map(t=>O(t)?at(t):t))},entries(){return An(this,"entries",e=>(e[1]=se(e[1]),e))},every(e,t){return Te(this,"every",e,t,void 0,arguments)},filter(e,t){return Te(this,"filter",e,t,n=>n.map(se),arguments)},find(e,t){return Te(this,"find",e,t,se,arguments)},findIndex(e,t){return Te(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Te(this,"findLast",e,t,se,arguments)},findLastIndex(e,t){return Te(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Te(this,"forEach",e,t,void 0,arguments)},includes(...e){return Cn(this,"includes",e)},indexOf(...e){return Cn(this,"indexOf",e)},join(e){return at(this).join(e)},lastIndexOf(...e){return Cn(this,"lastIndexOf",e)},map(e,t){return Te(this,"map",e,t,void 0,arguments)},pop(){return wt(this,"pop")},push(...e){return wt(this,"push",e)},reduce(e,...t){return Qs(this,"reduce",e,t)},reduceRight(e,...t){return Qs(this,"reduceRight",e,t)},shift(){return wt(this,"shift")},some(e,t){return Te(this,"some",e,t,void 0,arguments)},splice(...e){return wt(this,"splice",e)},toReversed(){return at(this).toReversed()},toSorted(e){return at(this).toSorted(e)},toSpliced(...e){return at(this).toSpliced(...e)},unshift(...e){return wt(this,"unshift",e)},values(){return An(this,"values",se)}};function An(e,t,n){const s=Is(e),r=s[t]();return s!==e&&!me(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Go=Array.prototype;function Te(e,t,n,s,r,i){const o=Is(e),a=o!==e&&!me(e),c=o[t];if(c!==Go[t]){const p=c.apply(e,i);return a?se(p):p}let d=n;o!==e&&(a?d=function(p,E){return n.call(this,se(p),E,e)}:n.length>2&&(d=function(p,E){return n.call(this,p,E,e)}));const u=c.call(o,d,s);return a&&r?r(u):u}function Qs(e,t,n,s){const r=Is(e);let i=n;return r!==e&&(me(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,se(a),c,e)}),r[t](i,...s)}function Cn(e,t,n){const s=N(e);Q(s,"iterate",Mt);const r=s[t](...n);return(r===-1||r===!1)&&xs(n[0])?(n[0]=N(n[0]),s[t](...n)):r}function wt(e,t,n=[]){Ke(),ws();const s=N(e)[t].apply(e,n);return vs(),We(),s}const Jo=ps("__proto__,__v_isRef,__isVue"),ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ue));function Yo(e){Ue(e)||(e=String(e));const t=N(this);return Q(t,"has",e),t.hasOwnProperty(e)}class ci{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?oa:di:i?ui:fi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=O(t);if(!r){let c;if(o&&(c=zo[n]))return c;if(n==="hasOwnProperty")return Yo}const a=Reflect.get(t,n,Z(t)?t:s);return(Ue(n)?ai.has(n):Jo(n))||(r||Q(t,"get",n),i)?a:Z(a)?o&&bs(n)?a:a.value:q(a)?r?hi(a):As(a):a}}class li extends ci{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const c=nt(i);if(!me(s)&&!nt(s)&&(i=N(i),s=N(s)),!O(t)&&Z(i)&&!Z(s))return c?!1:(i.value=s,!0)}const o=O(t)&&bs(n)?Number(n)<t.length:B(t,n),a=Reflect.set(t,n,s,Z(t)?t:r);return t===N(r)&&(o?ke(s,i)&&Oe(t,"set",n,s):Oe(t,"add",n,s)),a}deleteProperty(t,n){const s=B(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Oe(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ue(n)||!ai.has(n))&&Q(t,"has",n),s}ownKeys(t){return Q(t,"iterate",O(t)?"length":et),Reflect.ownKeys(t)}}class Xo extends ci{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Qo=new li,Zo=new Xo,ea=new li(!0);const Qn=e=>e,qt=e=>Reflect.getPrototypeOf(e);function ta(e,t,n){return function(...s){const r=this.__v_raw,i=N(r),o=ut(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=r[e](...s),u=n?Qn:t?Zn:se;return!t&&Q(i,"iterate",c?Xn:et),{next(){const{value:p,done:E}=d.next();return E?{value:p,done:E}:{value:a?[u(p[0]),u(p[1])]:u(p),done:E}},[Symbol.iterator](){return this}}}}function zt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function na(e,t){const n={get(r){const i=this.__v_raw,o=N(i),a=N(r);e||(ke(r,a)&&Q(o,"get",r),Q(o,"get",a));const{has:c}=qt(o),d=t?Qn:e?Zn:se;if(c.call(o,r))return d(i.get(r));if(c.call(o,a))return d(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Q(N(r),"iterate",et),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=N(i),a=N(r);return e||(ke(r,a)&&Q(o,"has",r),Q(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=N(a),d=t?Qn:e?Zn:se;return!e&&Q(c,"iterate",et),a.forEach((u,p)=>r.call(i,d(u),d(p),o))}};return Y(n,e?{add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear")}:{add(r){!t&&!me(r)&&!nt(r)&&(r=N(r));const i=N(this);return qt(i).has.call(i,r)||(i.add(r),Oe(i,"add",r,r)),this},set(r,i){!t&&!me(i)&&!nt(i)&&(i=N(i));const o=N(this),{has:a,get:c}=qt(o);let d=a.call(o,r);d||(r=N(r),d=a.call(o,r));const u=c.call(o,r);return o.set(r,i),d?ke(i,u)&&Oe(o,"set",r,i):Oe(o,"add",r,i),this},delete(r){const i=N(this),{has:o,get:a}=qt(i);let c=o.call(i,r);c||(r=N(r),c=o.call(i,r)),a&&a.call(i,r);const d=i.delete(r);return c&&Oe(i,"delete",r,void 0),d},clear(){const r=N(this),i=r.size!==0,o=r.clear();return i&&Oe(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ta(r,e,t)}),n}function Ts(e,t){const n=na(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(B(n,r)&&r in s?n:s,r,i)}const sa={get:Ts(!1,!1)},ra={get:Ts(!1,!0)},ia={get:Ts(!0,!1)};const fi=new WeakMap,ui=new WeakMap,di=new WeakMap,oa=new WeakMap;function aa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ca(e){return e.__v_skip||!Object.isExtensible(e)?0:aa(No(e))}function As(e){return nt(e)?e:Cs(e,!1,Qo,sa,fi)}function la(e){return Cs(e,!1,ea,ra,ui)}function hi(e){return Cs(e,!0,Zo,ia,di)}function Cs(e,t,n,s,r){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=ca(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function At(e){return nt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function nt(e){return!!(e&&e.__v_isReadonly)}function me(e){return!!(e&&e.__v_isShallow)}function xs(e){return e?!!e.__v_raw:!1}function N(e){const t=e&&e.__v_raw;return t?N(t):e}function fa(e){return!B(e,"__v_skip")&&Object.isExtensible(e)&&Gr(e,"__v_skip",!0),e}const se=e=>q(e)?As(e):e,Zn=e=>q(e)?hi(e):e;function Z(e){return e?e.__v_isRef===!0:!1}function Gt(e){return ua(e,!1)}function ua(e,t){return Z(e)?e:new da(e,t)}class da{constructor(t,n){this.dep=new Ss,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:N(t),this._value=n?t:se(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||me(t)||nt(t);t=s?t:N(t),ke(t,n)&&(this._rawValue=t,this._value=s?t:se(t),this.dep.trigger())}}function ha(e){return Z(e)?e.value:e}const pa={get:(e,t,n)=>t==="__v_raw"?e:ha(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Z(r)&&!Z(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function pi(e){return At(e)?e:new Proxy(e,pa)}class ga{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ss(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return ti(this,!0),!0}get value(){const t=this.dep.track();return ri(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ma(e,t,n=!1){let s,r;return D(e)?s=e:(s=e.get,r=e.set),new ga(s,r,n)}const Jt={},en=new WeakMap;let Xe;function ba(e,t=!1,n=Xe){if(n){let s=en.get(n);s||en.set(n,s=[]),s.push(e)}}function _a(e,t,n=k){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,d=C=>r?C:me(C)||r===!1||r===0?De(C,1):De(C);let u,p,E,I,M=!1,R=!1;if(Z(e)?(p=()=>e.value,M=me(e)):At(e)?(p=()=>d(e),M=!0):O(e)?(R=!0,M=e.some(C=>At(C)||me(C)),p=()=>e.map(C=>{if(Z(C))return C.value;if(At(C))return d(C);if(D(C))return c?c(C,2):C()})):D(e)?t?p=c?()=>c(e,2):e:p=()=>{if(E){Ke();try{E()}finally{We()}}const C=Xe;Xe=u;try{return c?c(e,3,[I]):e(I)}finally{Xe=C}}:p=Se,t&&r){const C=p,G=r===!0?1/0:r;p=()=>De(C(),G)}const ee=Ko(),F=()=>{u.stop(),ee&&ms(ee.effects,u)};if(i&&t){const C=t;t=(...G)=>{C(...G),F()}}let K=R?new Array(e.length).fill(Jt):Jt;const W=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(t){const G=u.run();if(r||M||(R?G.some((Ne,be)=>ke(Ne,K[be])):ke(G,K))){E&&E();const Ne=Xe;Xe=u;try{const be=[G,K===Jt?void 0:R&&K[0]===Jt?[]:K,I];c?c(t,3,be):t(...be),K=G}finally{Xe=Ne}}}else u.run()};return a&&a(W),u=new Zr(p),u.scheduler=o?()=>o(W,!1):W,I=C=>ba(C,!1,u),E=u.onStop=()=>{const C=en.get(u);if(C){if(c)c(C,4);else for(const G of C)G();en.delete(u)}},t?s?W(!0):K=u.run():o?o(W.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function De(e,t=1/0,n){if(t<=0||!q(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Z(e))De(e.value,t,n);else if(O(e))for(let s=0;s<e.length;s++)De(e[s],t,n);else if(Ur(e)||ut(e))e.forEach(s=>{De(s,t,n)});else if(qr(e)){for(const s in e)De(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&De(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lt(e,t,n,s){try{return s?e(...s):e()}catch(r){dn(r,t,n)}}function Ie(e,t,n,s){if(D(e)){const r=Lt(e,t,n,s);return r&&Kr(r)&&r.catch(i=>{dn(i,t,n)}),r}if(O(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Ie(e[i],t,n,s));return r}}function dn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||k;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,c,d)===!1)return}a=a.parent}if(i){Ke(),Lt(i,null,10,[e,c,d]),We();return}}ya(e,n,r,s,o)}function ya(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const re=[];let ve=-1;const dt=[];let $e=null,ct=0;const gi=Promise.resolve();let tn=null;function wa(e){const t=tn||gi;return e?t.then(this?e.bind(this):e):t}function va(e){let t=ve+1,n=re.length;for(;t<n;){const s=t+n>>>1,r=re[s],i=Pt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Os(e){if(!(e.flags&1)){const t=Pt(e),n=re[re.length-1];!n||!(e.flags&2)&&t>=Pt(n)?re.push(e):re.splice(va(t),0,e),e.flags|=1,mi()}}function mi(){tn||(tn=gi.then(_i))}function Ea(e){O(e)?dt.push(...e):$e&&e.id===-1?$e.splice(ct+1,0,e):e.flags&1||(dt.push(e),e.flags|=1),mi()}function Zs(e,t,n=ve+1){for(;n<re.length;n++){const s=re[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;re.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function bi(e){if(dt.length){const t=[...new Set(dt)].sort((n,s)=>Pt(n)-Pt(s));if(dt.length=0,$e){$e.push(...t);return}for($e=t,ct=0;ct<$e.length;ct++){const n=$e[ct];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$e=null,ct=0}}const Pt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _i(e){try{for(ve=0;ve<re.length;ve++){const t=re[ve];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Lt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ve<re.length;ve++){const t=re[ve];t&&(t.flags&=-2)}ve=-1,re.length=0,bi(),tn=null,(re.length||dt.length)&&_i()}}let he=null,yi=null;function nn(e){const t=he;return he=e,yi=e&&e.type.__scopeId||null,t}function Sa(e,t=he,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ar(-1);const i=nn(t);let o;try{o=e(...r)}finally{nn(i),s._d&&ar(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xn(e,t){if(he===null)return e;const n=mn(he),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,c=k]=t[r];i&&(D(i)&&(i={mounted:i,updated:i}),i.deep&&De(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Je(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ke(),Ie(c,n,8,[e.el,a,e,t]),We())}}const Ia=Symbol("_vte"),Ta=e=>e.__isTeleport;function Ds(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ds(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Aa(e,t){return D(e)?Y({name:e.name},t,{setup:e}):e}function wi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function es(e,t,n,s,r=!1){if(O(e)){e.forEach((M,R)=>es(M,t&&(O(t)?t[R]:t),n,s,r));return}if(Ct(s)&&!r)return;const i=s.shapeFlag&4?mn(s.component):s.el,o=r?null:i,{i:a,r:c}=e,d=t&&t.r,u=a.refs===k?a.refs={}:a.refs,p=a.setupState,E=N(p),I=p===k?()=>!1:M=>B(E,M);if(d!=null&&d!==c&&(J(d)?(u[d]=null,I(d)&&(p[d]=null)):Z(d)&&(d.value=null)),D(c))Lt(c,a,12,[o,u]);else{const M=J(c),R=Z(c);if(M||R){const ee=()=>{if(e.f){const F=M?I(c)?p[c]:u[c]:c.value;r?O(F)&&ms(F,i):O(F)?F.includes(i)||F.push(i):M?(u[c]=[i],I(c)&&(p[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else M?(u[c]=o,I(c)&&(p[c]=o)):R&&(c.value=o,e.k&&(u[e.k]=o))};o?(ee.id=-1,fe(ee,n)):ee()}}}un().requestIdleCallback;un().cancelIdleCallback;const Ct=e=>!!e.type.__asyncLoader,vi=e=>e.type.__isKeepAlive;function Ca(e,t){Ei(e,"a",t)}function xa(e,t){Ei(e,"da",t)}function Ei(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)vi(r.parent.vnode)&&Oa(s,t,n,r),r=r.parent}}function Oa(e,t,n,s){const r=hn(t,e,s,!0);Si(()=>{ms(s[t],r)},n)}function hn(e,t,n=ie,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Ke();const a=Ht(n),c=Ie(t,n,e,o);return a(),We(),c});return s?r.unshift(i):r.push(i),i}}const Re=e=>(t,n=ie)=>{(!Bt||e==="sp")&&hn(e,(...s)=>t(...s),n)},Da=Re("bm"),Ma=Re("m"),Pa=Re("bu"),Ra=Re("u"),Na=Re("bum"),Si=Re("um"),Ba=Re("sp"),$a=Re("rtg"),Fa=Re("rtc");function ka(e,t=ie){hn("ec",e,t)}const La=Symbol.for("v-ndc"),ts=e=>e?Ki(e)?mn(e):ts(e.parent):null,xt=Y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ts(e.parent),$root:e=>ts(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ms(e),$forceUpdate:e=>e.f||(e.f=()=>{Os(e.update)}),$nextTick:e=>e.n||(e.n=wa.bind(e.proxy)),$watch:e=>ac.bind(e)}),On=(e,t)=>e!==k&&!e.__isScriptSetup&&B(e,t),Ha={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let d;if(t[0]!=="$"){const I=o[t];if(I!==void 0)switch(I){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(On(s,t))return o[t]=1,s[t];if(r!==k&&B(r,t))return o[t]=2,r[t];if((d=e.propsOptions[0])&&B(d,t))return o[t]=3,i[t];if(n!==k&&B(n,t))return o[t]=4,n[t];ns&&(o[t]=0)}}const u=xt[t];let p,E;if(u)return t==="$attrs"&&Q(e.attrs,"get",""),u(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==k&&B(n,t))return o[t]=4,n[t];if(E=c.config.globalProperties,B(E,t))return E[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return On(r,t)?(r[t]=n,!0):s!==k&&B(s,t)?(s[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==k&&B(e,o)||On(t,o)||(a=i[0])&&B(a,o)||B(s,o)||B(xt,o)||B(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function er(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ns=!0;function ja(e){const t=Ms(e),n=e.proxy,s=e.ctx;ns=!1,t.beforeCreate&&tr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:d,created:u,beforeMount:p,mounted:E,beforeUpdate:I,updated:M,activated:R,deactivated:ee,beforeDestroy:F,beforeUnmount:K,destroyed:W,unmounted:C,render:G,renderTracked:Ne,renderTriggered:be,errorCaptured:Be,serverPrefetch:jt,expose:qe,inheritAttrs:mt,components:Vt,directives:Ut,filters:vn}=t;if(d&&Va(d,s,null),o)for(const U in o){const L=o[U];D(L)&&(s[U]=L.bind(n))}if(r){const U=r.call(n,n);q(U)&&(e.data=As(U))}if(ns=!0,i)for(const U in i){const L=i[U],ze=D(L)?L.bind(n,n):D(L.get)?L.get.bind(n,n):Se,Kt=!D(L)&&D(L.set)?L.set.bind(n):Se,Ge=Dc({get:ze,set:Kt});Object.defineProperty(s,U,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:_e=>Ge.value=_e})}if(a)for(const U in a)Ii(a[U],s,n,U);if(c){const U=D(c)?c.call(n):c;Reflect.ownKeys(U).forEach(L=>{Ga(L,U[L])})}u&&tr(u,e,"c");function te(U,L){O(L)?L.forEach(ze=>U(ze.bind(n))):L&&U(L.bind(n))}if(te(Da,p),te(Ma,E),te(Pa,I),te(Ra,M),te(Ca,R),te(xa,ee),te(ka,Be),te(Fa,Ne),te($a,be),te(Na,K),te(Si,C),te(Ba,jt),O(qe))if(qe.length){const U=e.exposed||(e.exposed={});qe.forEach(L=>{Object.defineProperty(U,L,{get:()=>n[L],set:ze=>n[L]=ze})})}else e.exposed||(e.exposed={});G&&e.render===Se&&(e.render=G),mt!=null&&(e.inheritAttrs=mt),Vt&&(e.components=Vt),Ut&&(e.directives=Ut),jt&&wi(e)}function Va(e,t,n=Se){O(e)&&(e=ss(e));for(const s in e){const r=e[s];let i;q(r)?"default"in r?i=Xt(r.from||s,r.default,!0):i=Xt(r.from||s):i=Xt(r),Z(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function tr(e,t,n){Ie(O(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ii(e,t,n,s){let r=s.includes(".")?ki(n,s):()=>n[s];if(J(e)){const i=t[e];D(i)&&Mn(r,i)}else if(D(e))Mn(r,e.bind(n));else if(q(e))if(O(e))e.forEach(i=>Ii(i,t,n,s));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Mn(r,i,e)}}function Ms(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(d=>sn(c,d,o,!0)),sn(c,t,o)),q(t)&&i.set(t,c),c}function sn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&sn(e,i,n,!0),r&&r.forEach(o=>sn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Ua[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ua={data:nr,props:sr,emits:sr,methods:Et,computed:Et,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:Et,directives:Et,watch:Wa,provide:nr,inject:Ka};function nr(e,t){return t?e?function(){return Y(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Ka(e,t){return Et(ss(e),ss(t))}function ss(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Et(e,t){return e?Y(Object.create(null),e,t):t}function sr(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:Y(Object.create(null),er(e),er(t??{})):t}function Wa(e,t){if(!e)return t;if(!t)return e;const n=Y(Object.create(null),e);for(const s in t)n[s]=ne(e[s],t[s]);return n}function Ti(){return{app:null,config:{isNativeTag:Po,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qa=0;function za(e,t){return function(s,r=null){D(s)||(s=Y({},s)),r!=null&&!q(r)&&(r=null);const i=Ti(),o=new WeakSet,a=[];let c=!1;const d=i.app={_uid:qa++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Mc,get config(){return i.config},set config(u){},use(u,...p){return o.has(u)||(u&&D(u.install)?(o.add(u),u.install(d,...p)):D(u)&&(o.add(u),u(d,...p))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,p){return p?(i.components[u]=p,d):i.components[u]},directive(u,p){return p?(i.directives[u]=p,d):i.directives[u]},mount(u,p,E){if(!c){const I=d._ceVNode||tt(s,r);return I.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),p&&t?t(I,u):e(I,u,E),c=!0,d._container=u,u.__vue_app__=d,mn(I.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ie(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return i.provides[u]=p,d},runWithContext(u){const p=ht;ht=d;try{return u()}finally{ht=p}}};return d}}let ht=null;function Ga(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function Xt(e,t,n=!1){const s=ie||he;if(s||ht){const r=ht?ht._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&D(t)?t.call(s&&s.proxy):t}}const Ai={},Ci=()=>Object.create(Ai),xi=e=>Object.getPrototypeOf(e)===Ai;function Ja(e,t,n,s=!1){const r={},i=Ci();e.propsDefaults=Object.create(null),Oi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:la(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Ya(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=N(r),[c]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let E=u[p];if(pn(e.emitsOptions,E))continue;const I=t[E];if(c)if(B(i,E))I!==i[E]&&(i[E]=I,d=!0);else{const M=je(E);r[M]=rs(c,a,M,I,e,!1)}else I!==i[E]&&(i[E]=I,d=!0)}}}else{Oi(e,t,r,i)&&(d=!0);let u;for(const p in a)(!t||!B(t,p)&&((u=ot(p))===p||!B(t,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(r[p]=rs(c,a,p,void 0,e,!0)):delete r[p]);if(i!==a)for(const p in i)(!t||!B(t,p))&&(delete i[p],d=!0)}d&&Oe(e.attrs,"set","")}function Oi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(St(c))continue;const d=t[c];let u;r&&B(r,u=je(c))?!i||!i.includes(u)?n[u]=d:(a||(a={}))[u]=d:pn(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,o=!0)}if(i){const c=N(n),d=a||k;for(let u=0;u<i.length;u++){const p=i[u];n[p]=rs(r,c,p,d[p],e,!B(d,p))}}return o}function rs(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=B(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&D(c)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const u=Ht(r);s=d[n]=c.call(null,t),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ot(n))&&(s=!0))}return s}const Xa=new WeakMap;function Di(e,t,n=!1){const s=n?Xa:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!D(e)){const u=p=>{c=!0;const[E,I]=Di(p,t,!0);Y(o,E),I&&a.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return q(e)&&s.set(e,ft),ft;if(O(i))for(let u=0;u<i.length;u++){const p=je(i[u]);rr(p)&&(o[p]=k)}else if(i)for(const u in i){const p=je(u);if(rr(p)){const E=i[u],I=o[p]=O(E)||D(E)?{type:E}:Y({},E),M=I.type;let R=!1,ee=!0;if(O(M))for(let F=0;F<M.length;++F){const K=M[F],W=D(K)&&K.name;if(W==="Boolean"){R=!0;break}else W==="String"&&(ee=!1)}else R=D(M)&&M.name==="Boolean";I[0]=R,I[1]=ee,(R||B(I,"default"))&&a.push(p)}}const d=[o,a];return q(e)&&s.set(e,d),d}function rr(e){return e[0]!=="$"&&!St(e)}const Mi=e=>e[0]==="_"||e==="$stable",Ps=e=>O(e)?e.map(Ee):[Ee(e)],Qa=(e,t,n)=>{if(t._n)return t;const s=Sa((...r)=>Ps(t(...r)),n);return s._c=!1,s},Pi=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Mi(r))continue;const i=e[r];if(D(i))t[r]=Qa(r,i,s);else if(i!=null){const o=Ps(i);t[r]=()=>o}}},Ri=(e,t)=>{const n=Ps(t);e.slots.default=()=>n},Ni=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Za=(e,t,n)=>{const s=e.slots=Ci();if(e.vnode.shapeFlag&32){const r=t._;r?(Ni(s,t,n),n&&Gr(s,"_",r,!0)):Pi(t,s)}else t&&Ri(e,t)},ec=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=k;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Ni(r,t,n):(i=!t.$stable,Pi(t,r)),o=t}else t&&(Ri(e,t),o={default:1});if(i)for(const a in r)!Mi(a)&&o[a]==null&&delete r[a]},fe=pc;function tc(e){return nc(e)}function nc(e,t){const n=un();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:E,setScopeId:I=Se,insertStaticContent:M}=e,R=(l,f,h,b=null,g=null,m=null,v=void 0,w=null,y=!!f.dynamicChildren)=>{if(l===f)return;l&&!vt(l,f)&&(b=Wt(l),_e(l,g,m,!0),l=null),f.patchFlag===-2&&(y=!1,f.dynamicChildren=null);const{type:_,ref:A,shapeFlag:S}=f;switch(_){case gn:ee(l,f,h,b);break;case Rt:F(l,f,h,b);break;case Rn:l==null&&K(f,h,b,v);break;case xe:Vt(l,f,h,b,g,m,v,w,y);break;default:S&1?G(l,f,h,b,g,m,v,w,y):S&6?Ut(l,f,h,b,g,m,v,w,y):(S&64||S&128)&&_.process(l,f,h,b,g,m,v,w,y,_t)}A!=null&&g&&es(A,l&&l.ref,m,f||l,!f)},ee=(l,f,h,b)=>{if(l==null)s(f.el=a(f.children),h,b);else{const g=f.el=l.el;f.children!==l.children&&d(g,f.children)}},F=(l,f,h,b)=>{l==null?s(f.el=c(f.children||""),h,b):f.el=l.el},K=(l,f,h,b)=>{[l.el,l.anchor]=M(l.children,f,h,b,l.el,l.anchor)},W=({el:l,anchor:f},h,b)=>{let g;for(;l&&l!==f;)g=E(l),s(l,h,b),l=g;s(f,h,b)},C=({el:l,anchor:f})=>{let h;for(;l&&l!==f;)h=E(l),r(l),l=h;r(f)},G=(l,f,h,b,g,m,v,w,y)=>{f.type==="svg"?v="svg":f.type==="math"&&(v="mathml"),l==null?Ne(f,h,b,g,m,v,w,y):jt(l,f,g,m,v,w,y)},Ne=(l,f,h,b,g,m,v,w)=>{let y,_;const{props:A,shapeFlag:S,transition:T,dirs:x}=l;if(y=l.el=o(l.type,m,A&&A.is,A),S&8?u(y,l.children):S&16&&Be(l.children,y,null,b,g,Dn(l,m),v,w),x&&Je(l,null,b,"created"),be(y,l,l.scopeId,v,b),A){for(const H in A)H!=="value"&&!St(H)&&i(y,H,null,A[H],m,b);"value"in A&&i(y,"value",null,A.value,m),(_=A.onVnodeBeforeMount)&&we(_,b,l)}x&&Je(l,null,b,"beforeMount");const P=sc(g,T);P&&T.beforeEnter(y),s(y,f,h),((_=A&&A.onVnodeMounted)||P||x)&&fe(()=>{_&&we(_,b,l),P&&T.enter(y),x&&Je(l,null,b,"mounted")},g)},be=(l,f,h,b,g)=>{if(h&&I(l,h),b)for(let m=0;m<b.length;m++)I(l,b[m]);if(g){let m=g.subTree;if(f===m||Hi(m.type)&&(m.ssContent===f||m.ssFallback===f)){const v=g.vnode;be(l,v,v.scopeId,v.slotScopeIds,g.parent)}}},Be=(l,f,h,b,g,m,v,w,y=0)=>{for(let _=y;_<l.length;_++){const A=l[_]=w?Fe(l[_]):Ee(l[_]);R(null,A,f,h,b,g,m,v,w)}},jt=(l,f,h,b,g,m,v)=>{const w=f.el=l.el;let{patchFlag:y,dynamicChildren:_,dirs:A}=f;y|=l.patchFlag&16;const S=l.props||k,T=f.props||k;let x;if(h&&Ye(h,!1),(x=T.onVnodeBeforeUpdate)&&we(x,h,f,l),A&&Je(f,l,h,"beforeUpdate"),h&&Ye(h,!0),(S.innerHTML&&T.innerHTML==null||S.textContent&&T.textContent==null)&&u(w,""),_?qe(l.dynamicChildren,_,w,h,b,Dn(f,g),m):v||L(l,f,w,null,h,b,Dn(f,g),m,!1),y>0){if(y&16)mt(w,S,T,h,g);else if(y&2&&S.class!==T.class&&i(w,"class",null,T.class,g),y&4&&i(w,"style",S.style,T.style,g),y&8){const P=f.dynamicProps;for(let H=0;H<P.length;H++){const $=P[H],ae=S[$],X=T[$];(X!==ae||$==="value")&&i(w,$,ae,X,g,h)}}y&1&&l.children!==f.children&&u(w,f.children)}else!v&&_==null&&mt(w,S,T,h,g);((x=T.onVnodeUpdated)||A)&&fe(()=>{x&&we(x,h,f,l),A&&Je(f,l,h,"updated")},b)},qe=(l,f,h,b,g,m,v)=>{for(let w=0;w<f.length;w++){const y=l[w],_=f[w],A=y.el&&(y.type===xe||!vt(y,_)||y.shapeFlag&70)?p(y.el):h;R(y,_,A,null,b,g,m,v,!0)}},mt=(l,f,h,b,g)=>{if(f!==h){if(f!==k)for(const m in f)!St(m)&&!(m in h)&&i(l,m,f[m],null,g,b);for(const m in h){if(St(m))continue;const v=h[m],w=f[m];v!==w&&m!=="value"&&i(l,m,w,v,g,b)}"value"in h&&i(l,"value",f.value,h.value,g)}},Vt=(l,f,h,b,g,m,v,w,y)=>{const _=f.el=l?l.el:a(""),A=f.anchor=l?l.anchor:a("");let{patchFlag:S,dynamicChildren:T,slotScopeIds:x}=f;x&&(w=w?w.concat(x):x),l==null?(s(_,h,b),s(A,h,b),Be(f.children||[],h,A,g,m,v,w,y)):S>0&&S&64&&T&&l.dynamicChildren?(qe(l.dynamicChildren,T,h,g,m,v,w),(f.key!=null||g&&f===g.subTree)&&Bi(l,f,!0)):L(l,f,h,A,g,m,v,w,y)},Ut=(l,f,h,b,g,m,v,w,y)=>{f.slotScopeIds=w,l==null?f.shapeFlag&512?g.ctx.activate(f,h,b,v,y):vn(f,h,b,g,m,v,y):Us(l,f,y)},vn=(l,f,h,b,g,m,v)=>{const w=l.component=Ic(l,b,g);if(vi(l)&&(w.ctx.renderer=_t),Tc(w,!1,v),w.asyncDep){if(g&&g.registerDep(w,te,v),!l.el){const y=w.subTree=tt(Rt);F(null,y,f,h)}}else te(w,l,f,h,g,m,v)},Us=(l,f,h)=>{const b=f.component=l.component;if(dc(l,f,h))if(b.asyncDep&&!b.asyncResolved){U(b,f,h);return}else b.next=f,b.update();else f.el=l.el,b.vnode=f},te=(l,f,h,b,g,m,v)=>{const w=()=>{if(l.isMounted){let{next:S,bu:T,u:x,parent:P,vnode:H}=l;{const ce=$i(l);if(ce){S&&(S.el=H.el,U(l,S,v)),ce.asyncDep.then(()=>{l.isUnmounted||w()});return}}let $=S,ae;Ye(l,!1),S?(S.el=H.el,U(l,S,v)):S=H,T&&Yt(T),(ae=S.props&&S.props.onVnodeBeforeUpdate)&&we(ae,P,S,H),Ye(l,!0);const X=Pn(l),pe=l.subTree;l.subTree=X,R(pe,X,p(pe.el),Wt(pe),l,g,m),S.el=X.el,$===null&&hc(l,X.el),x&&fe(x,g),(ae=S.props&&S.props.onVnodeUpdated)&&fe(()=>we(ae,P,S,H),g)}else{let S;const{el:T,props:x}=f,{bm:P,m:H,parent:$,root:ae,type:X}=l,pe=Ct(f);if(Ye(l,!1),P&&Yt(P),!pe&&(S=x&&x.onVnodeBeforeMount)&&we(S,$,f),Ye(l,!0),T&&zs){const ce=()=>{l.subTree=Pn(l),zs(T,l.subTree,l,g,null)};pe&&X.__asyncHydrate?X.__asyncHydrate(T,l,ce):ce()}else{ae.ce&&ae.ce._injectChildStyle(X);const ce=l.subTree=Pn(l);R(null,ce,h,b,l,g,m),f.el=ce.el}if(H&&fe(H,g),!pe&&(S=x&&x.onVnodeMounted)){const ce=f;fe(()=>we(S,$,ce),g)}(f.shapeFlag&256||$&&Ct($.vnode)&&$.vnode.shapeFlag&256)&&l.a&&fe(l.a,g),l.isMounted=!0,f=h=b=null}};l.scope.on();const y=l.effect=new Zr(w);l.scope.off();const _=l.update=y.run.bind(y),A=l.job=y.runIfDirty.bind(y);A.i=l,A.id=l.uid,y.scheduler=()=>Os(A),Ye(l,!0),_()},U=(l,f,h)=>{f.component=l;const b=l.vnode.props;l.vnode=f,l.next=null,Ya(l,f.props,b,h),ec(l,f.children,h),Ke(),Zs(l),We()},L=(l,f,h,b,g,m,v,w,y=!1)=>{const _=l&&l.children,A=l?l.shapeFlag:0,S=f.children,{patchFlag:T,shapeFlag:x}=f;if(T>0){if(T&128){Kt(_,S,h,b,g,m,v,w,y);return}else if(T&256){ze(_,S,h,b,g,m,v,w,y);return}}x&8?(A&16&&bt(_,g,m),S!==_&&u(h,S)):A&16?x&16?Kt(_,S,h,b,g,m,v,w,y):bt(_,g,m,!0):(A&8&&u(h,""),x&16&&Be(S,h,b,g,m,v,w,y))},ze=(l,f,h,b,g,m,v,w,y)=>{l=l||ft,f=f||ft;const _=l.length,A=f.length,S=Math.min(_,A);let T;for(T=0;T<S;T++){const x=f[T]=y?Fe(f[T]):Ee(f[T]);R(l[T],x,h,null,g,m,v,w,y)}_>A?bt(l,g,m,!0,!1,S):Be(f,h,b,g,m,v,w,y,S)},Kt=(l,f,h,b,g,m,v,w,y)=>{let _=0;const A=f.length;let S=l.length-1,T=A-1;for(;_<=S&&_<=T;){const x=l[_],P=f[_]=y?Fe(f[_]):Ee(f[_]);if(vt(x,P))R(x,P,h,null,g,m,v,w,y);else break;_++}for(;_<=S&&_<=T;){const x=l[S],P=f[T]=y?Fe(f[T]):Ee(f[T]);if(vt(x,P))R(x,P,h,null,g,m,v,w,y);else break;S--,T--}if(_>S){if(_<=T){const x=T+1,P=x<A?f[x].el:b;for(;_<=T;)R(null,f[_]=y?Fe(f[_]):Ee(f[_]),h,P,g,m,v,w,y),_++}}else if(_>T)for(;_<=S;)_e(l[_],g,m,!0),_++;else{const x=_,P=_,H=new Map;for(_=P;_<=T;_++){const le=f[_]=y?Fe(f[_]):Ee(f[_]);le.key!=null&&H.set(le.key,_)}let $,ae=0;const X=T-P+1;let pe=!1,ce=0;const yt=new Array(X);for(_=0;_<X;_++)yt[_]=0;for(_=x;_<=S;_++){const le=l[_];if(ae>=X){_e(le,g,m,!0);continue}let ye;if(le.key!=null)ye=H.get(le.key);else for($=P;$<=T;$++)if(yt[$-P]===0&&vt(le,f[$])){ye=$;break}ye===void 0?_e(le,g,m,!0):(yt[ye-P]=_+1,ye>=ce?ce=ye:pe=!0,R(le,f[ye],h,null,g,m,v,w,y),ae++)}const Gs=pe?rc(yt):ft;for($=Gs.length-1,_=X-1;_>=0;_--){const le=P+_,ye=f[le],Js=le+1<A?f[le+1].el:b;yt[_]===0?R(null,ye,h,Js,g,m,v,w,y):pe&&($<0||_!==Gs[$]?Ge(ye,h,Js,2):$--)}}},Ge=(l,f,h,b,g=null)=>{const{el:m,type:v,transition:w,children:y,shapeFlag:_}=l;if(_&6){Ge(l.component.subTree,f,h,b);return}if(_&128){l.suspense.move(f,h,b);return}if(_&64){v.move(l,f,h,_t);return}if(v===xe){s(m,f,h);for(let S=0;S<y.length;S++)Ge(y[S],f,h,b);s(l.anchor,f,h);return}if(v===Rn){W(l,f,h);return}if(b!==2&&_&1&&w)if(b===0)w.beforeEnter(m),s(m,f,h),fe(()=>w.enter(m),g);else{const{leave:S,delayLeave:T,afterLeave:x}=w,P=()=>s(m,f,h),H=()=>{S(m,()=>{P(),x&&x()})};T?T(m,P,H):H()}else s(m,f,h)},_e=(l,f,h,b=!1,g=!1)=>{const{type:m,props:v,ref:w,children:y,dynamicChildren:_,shapeFlag:A,patchFlag:S,dirs:T,cacheIndex:x}=l;if(S===-2&&(g=!1),w!=null&&es(w,null,h,l,!0),x!=null&&(f.renderCache[x]=void 0),A&256){f.ctx.deactivate(l);return}const P=A&1&&T,H=!Ct(l);let $;if(H&&($=v&&v.onVnodeBeforeUnmount)&&we($,f,l),A&6)Mo(l.component,h,b);else{if(A&128){l.suspense.unmount(h,b);return}P&&Je(l,null,f,"beforeUnmount"),A&64?l.type.remove(l,f,h,_t,b):_&&!_.hasOnce&&(m!==xe||S>0&&S&64)?bt(_,f,h,!1,!0):(m===xe&&S&384||!g&&A&16)&&bt(y,f,h),b&&Ks(l)}(H&&($=v&&v.onVnodeUnmounted)||P)&&fe(()=>{$&&we($,f,l),P&&Je(l,null,f,"unmounted")},h)},Ks=l=>{const{type:f,el:h,anchor:b,transition:g}=l;if(f===xe){Do(h,b);return}if(f===Rn){C(l);return}const m=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:v,delayLeave:w}=g,y=()=>v(h,m);w?w(l.el,m,y):y()}else m()},Do=(l,f)=>{let h;for(;l!==f;)h=E(l),r(l),l=h;r(f)},Mo=(l,f,h)=>{const{bum:b,scope:g,job:m,subTree:v,um:w,m:y,a:_}=l;ir(y),ir(_),b&&Yt(b),g.stop(),m&&(m.flags|=8,_e(v,l,f,h)),w&&fe(w,f),fe(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},bt=(l,f,h,b=!1,g=!1,m=0)=>{for(let v=m;v<l.length;v++)_e(l[v],f,h,b,g)},Wt=l=>{if(l.shapeFlag&6)return Wt(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const f=E(l.anchor||l.el),h=f&&f[Ia];return h?E(h):f};let En=!1;const Ws=(l,f,h)=>{l==null?f._vnode&&_e(f._vnode,null,null,!0):R(f._vnode||null,l,f,null,null,null,h),f._vnode=l,En||(En=!0,Zs(),bi(),En=!1)},_t={p:R,um:_e,m:Ge,r:Ks,mt:vn,mc:Be,pc:L,pbc:qe,n:Wt,o:e};let qs,zs;return{render:Ws,hydrate:qs,createApp:za(Ws,qs)}}function Dn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ye({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Bi(e,t,n=!1){const s=e.children,r=t.children;if(O(s)&&O(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Fe(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Bi(o,a)),a.type===gn&&(a.el=o.el)}}function rc(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(r=n[n.length-1],e[r]<d){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<d?i=a+1:o=a;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function $i(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$i(t)}function ir(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ic=Symbol.for("v-scx"),oc=()=>Xt(ic);function Mn(e,t,n){return Fi(e,t,n)}function Fi(e,t,n=k){const{immediate:s,deep:r,flush:i,once:o}=n,a=Y({},n),c=t&&s||!t&&i!=="post";let d;if(Bt){if(i==="sync"){const I=oc();d=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=Se,I.resume=Se,I.pause=Se,I}}const u=ie;a.call=(I,M,R)=>Ie(I,u,M,R);let p=!1;i==="post"?a.scheduler=I=>{fe(I,u&&u.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(I,M)=>{M?I():Os(I)}),a.augmentJob=I=>{t&&(I.flags|=4),p&&(I.flags|=2,u&&(I.id=u.uid,I.i=u))};const E=_a(e,t,a);return Bt&&(d?d.push(E):c&&E()),E}function ac(e,t,n){const s=this.proxy,r=J(e)?e.includes(".")?ki(s,e):()=>s[e]:e.bind(s,s);let i;D(t)?i=t:(i=t.handler,n=t);const o=Ht(this),a=Fi(r,i.bind(s),n);return o(),a}function ki(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${je(t)}Modifiers`]||e[`${ot(t)}Modifiers`];function lc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||k;let r=n;const i=t.startsWith("update:"),o=i&&cc(s,t.slice(7));o&&(o.trim&&(r=n.map(u=>J(u)?u.trim():u)),o.number&&(r=n.map(Gn)));let a,c=s[a=Sn(t)]||s[a=Sn(je(t))];!c&&i&&(c=s[a=Sn(ot(t))]),c&&Ie(c,e,6,r);const d=s[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ie(d,e,6,r)}}function Li(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!D(e)){const c=d=>{const u=Li(d,t,!0);u&&(a=!0,Y(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(q(e)&&s.set(e,null),null):(O(i)?i.forEach(c=>o[c]=null):Y(o,i),q(e)&&s.set(e,o),o)}function pn(e,t){return!e||!cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,ot(t))||B(e,t))}function Pn(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:d,renderCache:u,props:p,data:E,setupState:I,ctx:M,inheritAttrs:R}=e,ee=nn(e);let F,K;try{if(n.shapeFlag&4){const C=r||s,G=C;F=Ee(d.call(G,C,u,p,I,E,M)),K=a}else{const C=t;F=Ee(C.length>1?C(p,{attrs:a,slots:o,emit:c}):C(p,null)),K=t.props?a:fc(a)}}catch(C){Ot.length=0,dn(C,e,1),F=tt(Rt)}let W=F;if(K&&R!==!1){const C=Object.keys(K),{shapeFlag:G}=W;C.length&&G&7&&(i&&C.some(gs)&&(K=uc(K,i)),W=pt(W,K,!1,!0))}return n.dirs&&(W=pt(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&Ds(W,n.transition),F=W,nn(ee),F}const fc=e=>{let t;for(const n in e)(n==="class"||n==="style"||cn(n))&&((t||(t={}))[n]=e[n]);return t},uc=(e,t)=>{const n={};for(const s in e)(!gs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function dc(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?or(s,o,d):!!o;if(c&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const E=u[p];if(o[E]!==s[E]&&!pn(d,E))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?or(s,o,d):!0:!!o;return!1}function or(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!pn(n,i))return!0}return!1}function hc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Hi=e=>e.__isSuspense;function pc(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):Ea(e)}const xe=Symbol.for("v-fgt"),gn=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),Rn=Symbol.for("v-stc"),Ot=[];let de=null;function gc(e=!1){Ot.push(de=e?null:[])}function mc(){Ot.pop(),de=Ot[Ot.length-1]||null}let Nt=1;function ar(e){Nt+=e,e<0&&de&&(de.hasOnce=!0)}function bc(e){return e.dynamicChildren=Nt>0?de||ft:null,mc(),Nt>0&&de&&de.push(e),e}function _c(e,t,n,s,r,i){return bc(z(e,t,n,s,r,i,!0))}function ji(e){return e?e.__v_isVNode===!0:!1}function vt(e,t){return e.type===t.type&&e.key===t.key}const Vi=({key:e})=>e??null,Qt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||Z(e)||D(e)?{i:he,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,s=0,r=null,i=e===xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vi(t),ref:t&&Qt(t),scopeId:yi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:he};return a?(Rs(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=J(n)?8:16),Nt>0&&!o&&de&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&de.push(c),c}const tt=yc;function yc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===La)&&(e=Rt),ji(e)){const a=pt(e,t,!0);return n&&Rs(a,n),Nt>0&&!i&&de&&(a.shapeFlag&6?de[de.indexOf(e)]=a:de.push(a)),a.patchFlag=-2,a}if(Oc(e)&&(e=e.__vccOpts),t){t=wc(t);let{class:a,style:c}=t;a&&!J(a)&&(t.class=ys(a)),q(c)&&(xs(c)&&!O(c)&&(c=Y({},c)),t.style=_s(c))}const o=J(e)?1:Hi(e)?128:Ta(e)?64:q(e)?4:D(e)?2:0;return z(e,t,n,s,r,o,i,!0)}function wc(e){return e?xs(e)||xi(e)?Y({},e):e:null}function pt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=e,d=t?vc(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Vi(d),ref:t&&t.ref?n&&i?O(i)?i.concat(Qt(t)):[i,Qt(t)]:Qt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pt(e.ssContent),ssFallback:e.ssFallback&&pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ds(u,c.clone(u)),u}function Ui(e=" ",t=0){return tt(gn,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?tt(Rt):O(e)?tt(xe,null,e.slice()):ji(e)?Fe(e):tt(gn,null,String(e))}function Fe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pt(e)}function Rs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Rs(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!xi(t)?t._ctx=he:r===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:he},n=32):(t=String(t),s&64?(n=16,t=[Ui(t)]):n=8);e.children=t,e.shapeFlag|=n}function vc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ys([t.class,s.class]));else if(r==="style")t.style=_s([t.style,s.style]);else if(cn(r)){const i=t[r],o=s[r];o&&i!==o&&!(O(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function we(e,t,n,s=null){Ie(e,t,7,[n,s])}const Ec=Ti();let Sc=0;function Ic(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ec,i={uid:Sc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Uo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Di(s,r),emitsOptions:Li(s,r),emit:null,emitted:null,propsDefaults:k,inheritAttrs:s.inheritAttrs,ctx:k,data:k,props:k,attrs:k,slots:k,refs:k,setupState:k,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=lc.bind(null,i),e.ce&&e.ce(i),i}let ie=null,rn,is;{const e=un(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};rn=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),is=t("__VUE_SSR_SETTERS__",n=>Bt=n)}const Ht=e=>{const t=ie;return rn(e),e.scope.on(),()=>{e.scope.off(),rn(t)}},cr=()=>{ie&&ie.scope.off(),rn(null)};function Ki(e){return e.vnode.shapeFlag&4}let Bt=!1;function Tc(e,t=!1,n=!1){t&&is(t);const{props:s,children:r}=e.vnode,i=Ki(e);Ja(e,s,i,t),Za(e,r,n);const o=i?Ac(e,t):void 0;return t&&is(!1),o}function Ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ha);const{setup:s}=n;if(s){Ke();const r=e.setupContext=s.length>1?xc(e):null,i=Ht(e),o=Lt(s,e,0,[e.props,r]),a=Kr(o);if(We(),i(),(a||e.sp)&&!Ct(e)&&wi(e),a){if(o.then(cr,cr),t)return o.then(c=>{lr(e,c,t)}).catch(c=>{dn(c,e,0)});e.asyncDep=o}else lr(e,o,t)}else Wi(e,t)}function lr(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=pi(t)),Wi(e,n)}let fr;function Wi(e,t,n){const s=e.type;if(!e.render){if(!t&&fr&&!s.render){const r=s.template||Ms(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,d=Y(Y({isCustomElement:i,delimiters:a},o),c);s.render=fr(r,d)}}e.render=s.render||Se}{const r=Ht(e);Ke();try{ja(e)}finally{We(),r()}}}const Cc={get(e,t){return Q(e,"get",""),e[t]}};function xc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Cc),slots:e.slots,emit:e.emit,expose:t}}function mn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pi(fa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xt)return xt[n](e)},has(t,n){return n in t||n in xt}})):e.proxy}function Oc(e){return D(e)&&"__vccOpts"in e}const Dc=(e,t)=>ma(e,t,Bt),Mc="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let os;const ur=typeof window<"u"&&window.trustedTypes;if(ur)try{os=ur.createPolicy("vue",{createHTML:e=>e})}catch{}const qi=os?e=>os.createHTML(e):e=>e,Pc="http://www.w3.org/2000/svg",Rc="http://www.w3.org/1998/Math/MathML",Ae=typeof document<"u"?document:null,dr=Ae&&Ae.createElement("template"),Nc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Ae.createElementNS(Pc,e):t==="mathml"?Ae.createElementNS(Rc,e):n?Ae.createElement(e,{is:n}):Ae.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Ae.createTextNode(e),createComment:e=>Ae.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ae.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{dr.innerHTML=qi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=dr.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Bc=Symbol("_vtc");function $c(e,t,n){const s=e[Bc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const hr=Symbol("_vod"),Fc=Symbol("_vsh"),kc=Symbol(""),Lc=/(^|;)\s*display\s*:/;function Hc(e,t,n){const s=e.style,r=J(n);let i=!1;if(n&&!r){if(t)if(J(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Zt(s,a,"")}else for(const o in t)n[o]==null&&Zt(s,o,"");for(const o in n)o==="display"&&(i=!0),Zt(s,o,n[o])}else if(r){if(t!==n){const o=s[kc];o&&(n+=";"+o),s.cssText=n,i=Lc.test(n)}}else t&&e.removeAttribute("style");hr in e&&(e[hr]=i?s.display:"",e[Fc]&&(s.display="none"))}const pr=/\s*!important$/;function Zt(e,t,n){if(O(n))n.forEach(s=>Zt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=jc(e,t);pr.test(n)?e.setProperty(ot(s),n.replace(pr,""),"important"):e[s]=n}}const gr=["Webkit","Moz","ms"],Nn={};function jc(e,t){const n=Nn[t];if(n)return n;let s=je(t);if(s!=="filter"&&s in e)return Nn[t]=s;s=zr(s);for(let r=0;r<gr.length;r++){const i=gr[r]+s;if(i in e)return Nn[t]=i}return t}const mr="http://www.w3.org/1999/xlink";function br(e,t,n,s,r,i=Vo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(mr,t.slice(6,t.length)):e.setAttributeNS(mr,t,n):n==null||i&&!Jr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ue(n)?String(n):n)}function _r(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?qi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Jr(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function lt(e,t,n,s){e.addEventListener(t,n,s)}function Vc(e,t,n,s){e.removeEventListener(t,n,s)}const yr=Symbol("_vei");function Uc(e,t,n,s,r=null){const i=e[yr]||(e[yr]={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=Kc(t);if(s){const d=i[t]=zc(s,r);lt(e,a,d,c)}else o&&(Vc(e,a,o,c),i[t]=void 0)}}const wr=/(?:Once|Passive|Capture)$/;function Kc(e){let t;if(wr.test(e)){t={};let s;for(;s=e.match(wr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),t]}let Bn=0;const Wc=Promise.resolve(),qc=()=>Bn||(Wc.then(()=>Bn=0),Bn=Date.now());function zc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ie(Gc(s,n.value),t,5,[s])};return n.value=e,n.attached=qc(),n}function Gc(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Jc=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?$c(e,s,o):t==="style"?Hc(e,n,s):cn(t)?gs(t)||Uc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yc(e,t,s,o))?(_r(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&br(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!J(s))?_r(e,je(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),br(e,t,s,o))};function Yc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&vr(t)&&D(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vr(t)&&J(n)?!1:t in e}const Er=e=>{const t=e.props["onUpdate:modelValue"]||!1;return O(t)?n=>Yt(t,n):t};function Xc(e){e.target.composing=!0}function Sr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const $n=Symbol("_assign"),Fn={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[$n]=Er(r);const i=s||r.props&&r.props.type==="number";lt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Gn(a)),e[$n](a)}),n&&lt(e,"change",()=>{e.value=e.value.trim()}),t||(lt(e,"compositionstart",Xc),lt(e,"compositionend",Sr),lt(e,"change",Sr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[$n]=Er(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Gn(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===c)||(e.value=c))}},Qc=Y({patchProp:Jc},Nc);let Ir;function Zc(){return Ir||(Ir=tc(Qc))}const el=(...e)=>{const t=Zc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=nl(s);if(!r)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,tl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function tl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nl(e){return J(e)?document.querySelector(e):e}var Tr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},sl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Gi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,d=c?e[r+2]:0,u=i>>2,p=(i&3)<<4|a>>4;let E=(a&15)<<2|d>>6,I=d&63;c||(I=64,o||(E=64)),s.push(n[u],n[p],n[E],n[I])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(zi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const d=r<e.length?n[e.charAt(r)]:64;++r;const p=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||d==null||p==null)throw new rl;const E=i<<2|a>>4;if(s.push(E),d!==64){const I=a<<4&240|d>>2;if(s.push(I),p!==64){const M=d<<6&192|p;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class rl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const il=function(e){const t=zi(e);return Gi.encodeByteArray(t,!0)},Ji=function(e){return il(e).replace(/\./g,"")},ol=function(e){try{return Gi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=()=>al().__FIREBASE_DEFAULTS__,ll=()=>{if(typeof process>"u"||typeof Tr>"u")return;const e=Tr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},fl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ol(e[1]);return t&&JSON.parse(t)},ul=()=>{try{return cl()||ll()||fl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yi=()=>{var e;return(e=ul())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function Xi(){try{return typeof indexedDB=="object"}catch{return!1}}function Qi(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function hl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="FirebaseError";class gt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=pl,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?gl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new gt(r,a,s)}}function gl(e,t){return e.replace(ml,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const ml=/\{\$([^}]+)}/g;function as(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Ar(i)&&Ar(o)){if(!as(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ar(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){return e&&e._delegate?e._delegate:e}class Ve{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new dl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yl(t))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Qe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qe){return this.instances.has(t)}getOptions(t=Qe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_l(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Qe){return this.component?this.component.multipleInstances?t:Qe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _l(e){return e===Qe?void 0:e}function yl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new bl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const vl={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},El=V.INFO,Sl={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Il=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Sl[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tl{constructor(t){this.name=t,this._logLevel=El,this._logHandler=Il,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Al=(e,t)=>t.some(n=>e instanceof n);let Cr,xr;function Cl(){return Cr||(Cr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xl(){return xr||(xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eo=new WeakMap,cs=new WeakMap,to=new WeakMap,kn=new WeakMap,Ns=new WeakMap;function Ol(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Me(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&eo.set(n,e)}).catch(()=>{}),Ns.set(t,e),t}function Dl(e){if(cs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});cs.set(e,t)}let ls={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return cs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||to.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ml(e){ls=e(ls)}function Pl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ln(this),t,...n);return to.set(s,t.sort?t.sort():[t]),Me(s)}:xl().includes(e)?function(...t){return e.apply(Ln(this),t),Me(eo.get(this))}:function(...t){return Me(e.apply(Ln(this),t))}}function Rl(e){return typeof e=="function"?Pl(e):(e instanceof IDBTransaction&&Dl(e),Al(e,Cl())?new Proxy(e,ls):e)}function Me(e){if(e instanceof IDBRequest)return Ol(e);if(kn.has(e))return kn.get(e);const t=Rl(e);return t!==e&&(kn.set(e,t),Ns.set(t,e)),t}const Ln=e=>Ns.get(e);function _n(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Me(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Me(o.result),c.oldVersion,c.newVersion,Me(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}function Hn(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",s=>t(s.oldVersion,s)),Me(n).then(()=>{})}const Nl=["get","getKey","getAll","getAllKeys","count"],Bl=["put","add","delete","clear"],jn=new Map;function Or(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(jn.get(t))return jn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Bl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Nl.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),r&&c.done]))[0]};return jn.set(t,i),i}Ml(e=>({...e,get:(t,n,s)=>Or(t,n)||e.get(t,n,s),has:(t,n)=>!!Or(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fs="@firebase/app",Dr="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new Tl("@firebase/app"),kl="@firebase/app-compat",Ll="@firebase/analytics-compat",Hl="@firebase/analytics",jl="@firebase/app-check-compat",Vl="@firebase/app-check",Ul="@firebase/auth",Kl="@firebase/auth-compat",Wl="@firebase/database",ql="@firebase/data-connect",zl="@firebase/database-compat",Gl="@firebase/functions",Jl="@firebase/functions-compat",Yl="@firebase/installations",Xl="@firebase/installations-compat",Ql="@firebase/messaging",Zl="@firebase/messaging-compat",ef="@firebase/performance",tf="@firebase/performance-compat",nf="@firebase/remote-config",sf="@firebase/remote-config-compat",rf="@firebase/storage",of="@firebase/storage-compat",af="@firebase/firestore",cf="@firebase/vertexai",lf="@firebase/firestore-compat",ff="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]",uf={[fs]:"fire-core",[kl]:"fire-core-compat",[Hl]:"fire-analytics",[Ll]:"fire-analytics-compat",[Vl]:"fire-app-check",[jl]:"fire-app-check-compat",[Ul]:"fire-auth",[Kl]:"fire-auth-compat",[Wl]:"fire-rtdb",[ql]:"fire-data-connect",[zl]:"fire-rtdb-compat",[Gl]:"fire-fn",[Jl]:"fire-fn-compat",[Yl]:"fire-iid",[Xl]:"fire-iid-compat",[Ql]:"fire-fcm",[Zl]:"fire-fcm-compat",[ef]:"fire-perf",[tf]:"fire-perf-compat",[nf]:"fire-rc",[sf]:"fire-rc-compat",[rf]:"fire-gcs",[of]:"fire-gcs-compat",[af]:"fire-fst",[lf]:"fire-fst-compat",[cf]:"fire-vertex","fire-js":"fire-js",[ff]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Map,df=new Map,ds=new Map;function Mr(e,t){try{e.container.addComponent(t)}catch(n){Pe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function st(e){const t=e.name;if(ds.has(t))return Pe.debug(`There were multiple attempts to register component ${t}.`),!1;ds.set(t,e);for(const n of on.values())Mr(n,e);for(const n of df.values())Mr(n,e);return!0}function Bs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Le=new bn("app","Firebase",hf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}function no(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:us,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Le.create("bad-app-name",{appName:String(r)});if(n||(n=Yi()),!n)throw Le.create("no-options");const i=on.get(r);if(i){if(as(n,i.options)&&as(s,i.config))return i;throw Le.create("duplicate-app",{appName:r})}const o=new wl(r);for(const c of ds.values())o.addComponent(c);const a=new pf(n,s,o);return on.set(r,a),a}function gf(e=us){const t=on.get(e);if(!t&&e===us&&Yi())return no();if(!t)throw Le.create("no-app",{appName:e});return t}function He(e,t,n){var s;let r=(s=uf[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Pe.warn(a.join(" "));return}st(new Ve(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="firebase-heartbeat-database",bf=1,$t="firebase-heartbeat-store";let Vn=null;function so(){return Vn||(Vn=_n(mf,bf,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore($t)}catch(n){console.warn(n)}}}}).catch(e=>{throw Le.create("idb-open",{originalErrorMessage:e.message})})),Vn}async function _f(e){try{const n=(await so()).transaction($t),s=await n.objectStore($t).get(ro(e));return await n.done,s}catch(t){if(t instanceof gt)Pe.warn(t.message);else{const n=Le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Pe.warn(n.message)}}}async function Pr(e,t){try{const s=(await so()).transaction($t,"readwrite");await s.objectStore($t).put(t,ro(e)),await s.done}catch(n){if(n instanceof gt)Pe.warn(n.message);else{const s=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pe.warn(s.message)}}}function ro(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=1024,wf=30*24*60*60*1e3;class vf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rr();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wf}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Pe.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rr(),{heartbeatsToSend:s,unsentEntries:r}=Ef(this._heartbeatsCache.heartbeats),i=Ji(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pe.warn(n),""}}}function Rr(){return new Date().toISOString().substring(0,10)}function Ef(e,t=yf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Nr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Nr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Sf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xi()?Qi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _f(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Pr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Nr(e){return Ji(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(e){st(new Ve("platform-logger",t=>new $l(t),"PRIVATE")),st(new Ve("heartbeat",t=>new vf(t),"PRIVATE")),He(fs,Dr,e),He(fs,Dr,"esm2017"),He("fire-js","")}If("");var Tf="firebase",Af="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(Tf,Af,"app");const io="@firebase/installations",$s="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=1e4,ao=`w:${$s}`,co="FIS_v2",Cf="https://firebaseinstallations.googleapis.com/v1",xf=60*60*1e3,Of="installations",Df="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rt=new bn(Of,Df,Mf);function lo(e){return e instanceof gt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo({projectId:e}){return`${Cf}/projects/${e}/installations`}function uo(e){return{token:e.token,requestStatus:2,expiresIn:Rf(e.expiresIn),creationTime:Date.now()}}async function ho(e,t){const s=(await t.json()).error;return rt.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function po({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Pf(e,{refreshToken:t}){const n=po(e);return n.append("Authorization",Nf(t)),n}async function go(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Rf(e){return Number(e.replace("s","000"))}function Nf(e){return`${co} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=fo(e),r=po(e),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={fid:n,authVersion:co,appId:e.appId,sdkVersion:ao},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await go(()=>fetch(s,a));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:uo(d.authToken)}}else throw await ho("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=/^[cdef][\w-]{21}$/,hs="";function kf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Lf(e);return Ff.test(n)?n:hs}catch{return hs}}function Lf(e){return $f(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map;function _o(e,t){const n=yn(e);yo(n,t),Hf(n,t)}function yo(e,t){const n=bo.get(e);if(n)for(const s of n)s(t)}function Hf(e,t){const n=jf();n&&n.postMessage({key:e,fid:t}),Vf()}let Ze=null;function jf(){return!Ze&&"BroadcastChannel"in self&&(Ze=new BroadcastChannel("[Firebase] FID Change"),Ze.onmessage=e=>{yo(e.data.key,e.data.fid)}),Ze}function Vf(){bo.size===0&&Ze&&(Ze.close(),Ze=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="firebase-installations-database",Kf=1,it="firebase-installations-store";let Un=null;function Fs(){return Un||(Un=_n(Uf,Kf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(it)}}})),Un}async function an(e,t){const n=yn(e),r=(await Fs()).transaction(it,"readwrite"),i=r.objectStore(it),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&_o(e,t.fid),t}async function wo(e){const t=yn(e),s=(await Fs()).transaction(it,"readwrite");await s.objectStore(it).delete(t),await s.done}async function wn(e,t){const n=yn(e),r=(await Fs()).transaction(it,"readwrite"),i=r.objectStore(it),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&_o(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(e){let t;const n=await wn(e.appConfig,s=>{const r=Wf(s),i=qf(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===hs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Wf(e){const t=e||{fid:kf(),registrationStatus:0};return vo(t)}function qf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(rt.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=zf(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Gf(e)}:{installationEntry:t}}async function zf(e,t){try{const n=await Bf(e,t);return an(e.appConfig,n)}catch(n){throw lo(n)&&n.customData.serverCode===409?await wo(e.appConfig):await an(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Gf(e){let t=await Br(e.appConfig);for(;t.registrationStatus===1;)await mo(100),t=await Br(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ks(e);return s||n}return t}function Br(e){return wn(e,t=>{if(!t)throw rt.create("installation-not-found");return vo(t)})}function vo(e){return Jf(e)?{fid:e.fid,registrationStatus:0}:e}function Jf(e){return e.registrationStatus===1&&e.registrationTime+oo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf({appConfig:e,heartbeatServiceProvider:t},n){const s=Xf(e,n),r=Pf(e,n),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={installation:{sdkVersion:ao,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await go(()=>fetch(s,a));if(c.ok){const d=await c.json();return uo(d)}else throw await ho("Generate Auth Token",c)}function Xf(e,{fid:t}){return`${fo(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(e,t=!1){let n;const s=await wn(e.appConfig,i=>{if(!Eo(i))throw rt.create("not-registered");const o=i.authToken;if(!t&&eu(o))return i;if(o.requestStatus===1)return n=Qf(e,t),i;{if(!navigator.onLine)throw rt.create("app-offline");const a=nu(i);return n=Zf(e,a),a}});return n?await n:s.authToken}async function Qf(e,t){let n=await $r(e.appConfig);for(;n.authToken.requestStatus===1;)await mo(100),n=await $r(e.appConfig);const s=n.authToken;return s.requestStatus===0?Ls(e,t):s}function $r(e){return wn(e,t=>{if(!Eo(t))throw rt.create("not-registered");const n=t.authToken;return su(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Zf(e,t){try{const n=await Yf(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await an(e.appConfig,s),n}catch(n){if(lo(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wo(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await an(e.appConfig,s)}throw n}}function Eo(e){return e!==void 0&&e.registrationStatus===2}function eu(e){return e.requestStatus===2&&!tu(e)}function tu(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+xf}function nu(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function su(e){return e.requestStatus===1&&e.requestTime+oo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(e){const t=e,{installationEntry:n,registrationPromise:s}=await ks(t);return s?s.catch(console.error):Ls(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(e,t=!1){const n=e;return await ou(n),(await Ls(n,t)).token}async function ou(e){const{registrationPromise:t}=await ks(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e){if(!e||!e.options)throw Kn("App Configuration");if(!e.name)throw Kn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Kn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Kn(e){return rt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="installations",cu="installations-internal",lu=e=>{const t=e.getProvider("app").getImmediate(),n=au(t),s=Bs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},fu=e=>{const t=e.getProvider("app").getImmediate(),n=Bs(t,So).getImmediate();return{getId:()=>ru(n),getToken:r=>iu(n,r)}};function uu(){st(new Ve(So,lu,"PUBLIC")),st(new Ve(cu,fu,"PRIVATE"))}uu();He(io,$s);He(io,$s,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="/firebase-messaging-sw.js",hu="/firebase-cloud-messaging-push-scope",Io="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",pu="https://fcmregistrations.googleapis.com/v1",To="google.c.a.c_id",gu="google.c.a.c_l",mu="google.c.a.ts",bu="google.c.a.e";var Fr;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Fr||(Fr={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ft;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Ft||(Ft={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _u(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),r=new Uint8Array(s.length);for(let i=0;i<s.length;++i)r[i]=s.charCodeAt(i);return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="fcm_token_details_db",yu=5,kr="fcm_token_object_Store";async function wu(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Wn))return null;let t=null;return(await _n(Wn,yu,{upgrade:async(s,r,i,o)=>{var a;if(r<2||!s.objectStoreNames.contains(kr))return;const c=o.objectStore(kr),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(r===2){const u=d;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:Ce(u.vapidKey)}}}else if(r===3){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ce(u.auth),p256dh:Ce(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ce(u.vapidKey)}}}else if(r===4){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ce(u.auth),p256dh:Ce(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ce(u.vapidKey)}}}}}})).close(),await Hn(Wn),await Hn("fcm_vapid_details_db"),await Hn("undefined"),vu(t)?t:null}function vu(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="firebase-messaging-database",Su=1,kt="firebase-messaging-store";let qn=null;function Ao(){return qn||(qn=_n(Eu,Su,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(kt)}}})),qn}async function Iu(e){const t=Co(e),s=await(await Ao()).transaction(kt).objectStore(kt).get(t);if(s)return s;{const r=await wu(e.appConfig.senderId);if(r)return await Hs(e,r),r}}async function Hs(e,t){const n=Co(e),r=(await Ao()).transaction(kt,"readwrite");return await r.objectStore(kt).put(t,n),await r.done,t}function Co({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},oe=new bn("messaging","Messaging",Tu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(e,t){const n=await Vs(e),s=xo(t),r={method:"POST",headers:n,body:JSON.stringify(s)};let i;try{i=await(await fetch(js(e.appConfig),r)).json()}catch(o){throw oe.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw oe.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw oe.create("token-subscribe-no-token");return i.token}async function Cu(e,t){const n=await Vs(e),s=xo(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(s)};let i;try{i=await(await fetch(`${js(e.appConfig)}/${t.token}`,r)).json()}catch(o){throw oe.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw oe.create("token-update-failed",{errorInfo:o})}if(!i.token)throw oe.create("token-update-no-token");return i.token}async function xu(e,t){const s={method:"DELETE",headers:await Vs(e)};try{const i=await(await fetch(`${js(e.appConfig)}/${t}`,s)).json();if(i.error){const o=i.error.message;throw oe.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw oe.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function js({projectId:e}){return`${pu}/projects/${e}/registrations`}async function Vs({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function xo({p256dh:e,auth:t,endpoint:n,vapidKey:s}){const r={web:{endpoint:n,auth:t,p256dh:e}};return s!==Io&&(r.web.applicationPubKey=s),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=7*24*60*60*1e3;async function Du(e){const t=await Pu(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ce(t.getKey("auth")),p256dh:Ce(t.getKey("p256dh"))},s=await Iu(e.firebaseDependencies);if(s){if(Ru(s.subscriptionOptions,n))return Date.now()>=s.createTime+Ou?Mu(e,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await xu(e.firebaseDependencies,s.token)}catch(r){console.warn(r)}return Lr(e.firebaseDependencies,n)}else return Lr(e.firebaseDependencies,n)}async function Mu(e,t){try{const n=await Cu(e.firebaseDependencies,t),s=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Hs(e.firebaseDependencies,s),n}catch(n){throw n}}async function Lr(e,t){const s={token:await Au(e,t),createTime:Date.now(),subscriptionOptions:t};return await Hs(e,s),s.token}async function Pu(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_u(t)})}function Ru(e,t){const n=t.vapidKey===e.vapidKey,s=t.endpoint===e.endpoint,r=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&s&&r&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Nu(t,e),Bu(t,e),$u(t,e),t}function Nu(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const s=t.notification.body;s&&(e.notification.body=s);const r=t.notification.image;r&&(e.notification.image=r);const i=t.notification.icon;i&&(e.notification.icon=i)}function Bu(e,t){t.data&&(e.data=t.data)}function $u(e,t){var n,s,r,i,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(r=(s=t.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&r!==void 0?r:(i=t.notification)===null||i===void 0?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(e){return typeof e=="object"&&!!e&&To in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e){if(!e||!e.options)throw zn("App Configuration Object");if(!e.name)throw zn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const s of t)if(!n[s])throw zn(s);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function zn(e){return oe.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=ku(t);this.firebaseDependencies={app:t,appConfig:r,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(e){try{e.swRegistration=await navigator.serviceWorker.register(du,{scope:hu}),e.swRegistration.update().catch(()=>{})}catch(t){throw oe.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(e,t){if(!t&&!e.swRegistration&&await Hu(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw oe.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Io)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(e,t){if(!navigator)throw oe.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw oe.create("permission-blocked");return await Vu(e,t==null?void 0:t.vapidKey),await ju(e,t==null?void 0:t.serviceWorkerRegistration),Du(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(e,t,n){const s=Ku(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[To],message_name:n[gu],message_time:n[mu],message_device_time:Math.floor(Date.now()/1e3)})}function Ku(e){switch(e){case Ft.NOTIFICATION_CLICKED:return"notification_open";case Ft.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wu(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Ft.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Hr(n)):e.onMessageHandler.next(Hr(n)));const s=n.data;Fu(s)&&s[bu]==="1"&&await Uu(e,n.messageType,s)}const jr="@firebase/messaging",Vr="0.12.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=e=>{const t=new Lu(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Wu(t,n)),t},zu=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:s=>Oo(t,s)}};function Gu(){st(new Ve("messaging",qu,"PUBLIC")),st(new Ve("messaging-internal",zu,"PRIVATE")),He(jr,Vr),He(jr,Vr,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ju(){try{await Qi()}catch{return!1}return typeof window<"u"&&Xi()&&hl()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(e=gf()){return Ju().then(t=>{if(!t)throw oe.create("unsupported-browser")},t=>{throw oe.create("indexed-db-unsupported")}),Bs(Zi(e),"messaging").getImmediate()}async function Xu(e,t){return e=Zi(e),Oo(e,t)}Gu();const Qu={class:"wrapper"},Zu={class:"form"},ed={class:"input"},td={class:"input"},nd={class:"input"},sd=["placeholder"],rd="BB9BiqPfKEWleyHgX8MnXSk6PGUV5m0ltzA58OFMYXKrpjK9MKx5MqLbxabjBB6qJY4Q9H_2Jdsc-z4I-n9uAnI",id=Aa({__name:"App",setup(e){const t={apiKey:"AIzaSyCKcRQNdPtVIdYy-ZYLK0PvcYHhm85LRJk",authDomain:"notification-31228.firebaseapp.com",projectId:"notification-31228",storageBucket:"notification-31228.firebasestorage.app",messagingSenderId:"515089145210",appId:"1:515089145210:web:11ef75510e5735edc28ac3",measurementId:"G-4QVBB372GX"},n=Gt(""),s=Gt(""),r=Gt(""),i=Gt("");(async()=>{try{const c=await navigator.serviceWorker.register("/firebase-notification/firebase-messaging-sw.js"),d=no(t),u=Yu(d);n.value=await Xu(u,{vapidKey:rd,serviceWorkerRegistration:c})}catch{alert("need enable notifications!")}})();const o=()=>{n.value&&fetch("https://winter-dev.ru",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:i.value||n.value,text:r.value,title:s.value})})},a=()=>{navigator.clipboard.writeText(n.value)};return(c,d)=>(gc(),_c("div",Qu,[z("div",{class:"token-text",onClick:d[0]||(d[0]=u=>a()),title:"СКОПИРОВАТЬ ТОКЕН"},[d[5]||(d[5]=Ui(" Tокен устройства: ")),d[6]||(d[6]=z("br",null,null,-1)),z("strong",null,Xr(n.value),1)]),d[10]||(d[10]=z("br",null,null,-1)),d[11]||(d[11]=z("br",null,null,-1)),d[12]||(d[12]=z("br",null,null,-1)),d[13]||(d[13]=z("br",null,null,-1)),d[14]||(d[14]=z("br",null,null,-1)),z("div",Zu,[z("div",ed,[d[7]||(d[7]=z("label",{for:"title"},"Title",-1)),xn(z("input",{placeholder:"шапка сообщения",id:"title","onUpdate:modelValue":d[1]||(d[1]=u=>s.value=u)},null,512),[[Fn,s.value]])]),z("div",td,[d[8]||(d[8]=z("label",{for:"text"},"Text",-1)),xn(z("textarea",{placeholder:"тело сообщения",id:"text","onUpdate:modelValue":d[2]||(d[2]=u=>r.value=u)},null,512),[[Fn,r.value]])]),z("div",nd,[d[9]||(d[9]=z("label",{for:"token"},"Token",-1)),xn(z("textarea",{placeholder:n.value,id:"token","onUpdate:modelValue":d[3]||(d[3]=u=>i.value=u)},null,8,sd),[[Fn,i.value]])]),z("button",{class:"button-send",onClick:d[4]||(d[4]=u=>o())}," Отправить сообщение ")])]))}}),od=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},ad=od(id,[["__scopeId","data-v-44521625"]]);el(ad).mount("#app");
