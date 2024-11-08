(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ys(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const H={},ut=[],Ie=()=>{},ko=()=>!1,dn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_s=e=>e.startsWith("onUpdate:"),X=Object.assign,vs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$o=Object.prototype.hasOwnProperty,F=(e,t)=>$o.call(e,t),D=Array.isArray,dt=e=>hn(e)==="[object Map]",qr=e=>hn(e)==="[object Set]",P=e=>typeof e=="function",J=e=>typeof e=="string",Ue=e=>typeof e=="symbol",z=e=>e!==null&&typeof e=="object",zr=e=>(z(e)||P(e))&&P(e.then)&&P(e.catch),Gr=Object.prototype.toString,hn=e=>Gr.call(e),Bo=e=>hn(e).slice(8,-1),Jr=e=>hn(e)==="[object Object]",ws=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ct=ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Fo=/-(\w)/g,je=pn(e=>e.replace(Fo,(t,n)=>n?n.toUpperCase():"")),Lo=/\B([A-Z])/g,at=pn(e=>e.replace(Lo,"-$1").toLowerCase()),Yr=pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),xn=pn(e=>e?`on${Yr(e)}`:""),Fe=(e,t)=>!Object.is(e,t),en=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Xr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Xn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zs;const gn=()=>Zs||(Zs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Es(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=J(s)?Uo(s):Es(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(J(e)||z(e))return e}const Ho=/;(?![^(]*\))/g,jo=/:([^]+)/,Vo=/\/\*[^]*?\*\//g;function Uo(e){const t={};return e.replace(Vo,"").split(Ho).forEach(n=>{if(n){const s=n.split(jo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ss(e){let t="";if(J(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const s=Ss(e[n]);s&&(t+=s+" ")}else if(z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ko="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wo=ys(Ko);function Qr(e){return!!e||e===""}const Zr=e=>!!(e&&e.__v_isRef===!0),Qn=e=>J(e)?e:e==null?"":D(e)||z(e)&&(e.toString===Gr||!P(e.toString))?Zr(e)?Qn(e.value):JSON.stringify(e,ei,2):String(e),ei=(e,t)=>Zr(t)?ei(e,t.value):dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[On(s,i)+" =>"]=r,n),{})}:qr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>On(n))}:Ue(t)?On(t):z(t)&&!D(t)&&!Jr(t)?String(t):t,On=(e,t="")=>{var n;return Ue(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class qo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function zo(){return ue}let U;const Dn=new WeakSet;class ti{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dn.has(this)&&(Dn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||si(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,er(this),ri(this);const t=U,n=me;U=this,me=!0;try{return this.fn()}finally{ii(this),U=t,me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)As(t);this.deps=this.depsTail=void 0,er(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zn(this)&&this.run()}get dirty(){return Zn(this)}}let ni=0,xt,Ot;function si(e,t=!1){if(e.flags|=8,t){e.next=Ot,Ot=e;return}e.next=xt,xt=e}function Is(){ni++}function Ts(){if(--ni>0)return;if(Ot){let t=Ot;for(Ot=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;xt;){let t=xt;for(xt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function ri(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ii(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),As(s),Go(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Zn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(oi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function oi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Rt))return;e.globalVersion=Rt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Zn(e)){e.flags&=-3;return}const n=U,s=me;U=e,me=!0;try{ri(e);const r=e.fn(e._value);(t.version===0||Fe(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{U=n,me=s,ii(e),e.flags&=-3}}function As(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)As(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Go(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let me=!0;const ai=[];function Ke(){ai.push(me),me=!1}function We(){const e=ai.pop();me=e===void 0?!0:e}function er(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=U;U=void 0;try{t()}finally{U=n}}}let Rt=0;class Jo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!U||!me||U===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==U)n=this.activeLink=new Jo(U,this),U.deps?(n.prevDep=U.depsTail,U.depsTail.nextDep=n,U.depsTail=n):U.deps=U.depsTail=n,ci(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=U.depsTail,n.nextDep=void 0,U.depsTail.nextDep=n,U.depsTail=n,U.deps===n&&(U.deps=s)}return n}trigger(t){this.version++,Rt++,this.notify(t)}notify(t){Is();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ts()}}}function ci(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)ci(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const es=new WeakMap,tt=Symbol(""),ts=Symbol(""),Nt=Symbol("");function Z(e,t,n){if(me&&U){let s=es.get(e);s||es.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Cs),r.map=s,r.key=n),r.track()}}function Oe(e,t,n,s,r,i){const o=es.get(e);if(!o){Rt++;return}const a=c=>{c&&c.trigger()};if(Is(),t==="clear")o.forEach(a);else{const c=D(e),d=c&&ws(n);if(c&&n==="length"){const u=Number(s);o.forEach((p,E)=>{(E==="length"||E===Nt||!Ue(E)&&E>=u)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(Nt)),t){case"add":c?d&&a(o.get("length")):(a(o.get(tt)),dt(e)&&a(o.get(ts)));break;case"delete":c||(a(o.get(tt)),dt(e)&&a(o.get(ts)));break;case"set":dt(e)&&a(o.get(tt));break}}Ts()}function ct(e){const t=B(e);return t===e?t:(Z(t,"iterate",Nt),pe(e)?t:t.map(ee))}function mn(e){return Z(e=B(e),"iterate",Nt),e}const Yo={__proto__:null,[Symbol.iterator](){return Mn(this,Symbol.iterator,ee)},concat(...e){return ct(this).concat(...e.map(t=>D(t)?ct(t):t))},entries(){return Mn(this,"entries",e=>(e[1]=ee(e[1]),e))},every(e,t){return Ae(this,"every",e,t,void 0,arguments)},filter(e,t){return Ae(this,"filter",e,t,n=>n.map(ee),arguments)},find(e,t){return Ae(this,"find",e,t,ee,arguments)},findIndex(e,t){return Ae(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ae(this,"findLast",e,t,ee,arguments)},findLastIndex(e,t){return Ae(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ae(this,"forEach",e,t,void 0,arguments)},includes(...e){return Pn(this,"includes",e)},indexOf(...e){return Pn(this,"indexOf",e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return Pn(this,"lastIndexOf",e)},map(e,t){return Ae(this,"map",e,t,void 0,arguments)},pop(){return Et(this,"pop")},push(...e){return Et(this,"push",e)},reduce(e,...t){return tr(this,"reduce",e,t)},reduceRight(e,...t){return tr(this,"reduceRight",e,t)},shift(){return Et(this,"shift")},some(e,t){return Ae(this,"some",e,t,void 0,arguments)},splice(...e){return Et(this,"splice",e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return Et(this,"unshift",e)},values(){return Mn(this,"values",ee)}};function Mn(e,t,n){const s=mn(e),r=s[t]();return s!==e&&!pe(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Xo=Array.prototype;function Ae(e,t,n,s,r,i){const o=mn(e),a=o!==e&&!pe(e),c=o[t];if(c!==Xo[t]){const p=c.apply(e,i);return a?ee(p):p}let d=n;o!==e&&(a?d=function(p,E){return n.call(this,ee(p),E,e)}:n.length>2&&(d=function(p,E){return n.call(this,p,E,e)}));const u=c.call(o,d,s);return a&&r?r(u):u}function tr(e,t,n,s){const r=mn(e);let i=n;return r!==e&&(pe(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,ee(a),c,e)}),r[t](i,...s)}function Pn(e,t,n){const s=B(e);Z(s,"iterate",Nt);const r=s[t](...n);return(r===-1||r===!1)&&Ms(n[0])?(n[0]=B(n[0]),s[t](...n)):r}function Et(e,t,n=[]){Ke(),Is();const s=B(e)[t].apply(e,n);return Ts(),We(),s}const Qo=ys("__proto__,__v_isRef,__isVue"),li=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ue));function Zo(e){Ue(e)||(e=String(e));const t=B(this);return Z(t,"has",e),t.hasOwnProperty(e)}class fi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?la:pi:i?hi:di).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=D(t);if(!r){let c;if(o&&(c=Yo[n]))return c;if(n==="hasOwnProperty")return Zo}const a=Reflect.get(t,n,te(t)?t:s);return(Ue(n)?li.has(n):Qo(n))||(r||Z(t,"get",n),i)?a:te(a)?o&&ws(n)?a:a.value:z(a)?r?gi(a):Os(a):a}}class ui extends fi{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const c=st(i);if(!pe(s)&&!st(s)&&(i=B(i),s=B(s)),!D(t)&&te(i)&&!te(s))return c?!1:(i.value=s,!0)}const o=D(t)&&ws(n)?Number(n)<t.length:F(t,n),a=Reflect.set(t,n,s,te(t)?t:r);return t===B(r)&&(o?Fe(s,i)&&Oe(t,"set",n,s):Oe(t,"add",n,s)),a}deleteProperty(t,n){const s=F(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Oe(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ue(n)||!li.has(n))&&Z(t,"has",n),s}ownKeys(t){return Z(t,"iterate",D(t)?"length":tt),Reflect.ownKeys(t)}}class ea extends fi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ta=new ui,na=new ea,sa=new ui(!0);const ns=e=>e,Jt=e=>Reflect.getPrototypeOf(e);function ra(e,t,n){return function(...s){const r=this.__v_raw,i=B(r),o=dt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=r[e](...s),u=n?ns:t?ss:ee;return!t&&Z(i,"iterate",c?ts:tt),{next(){const{value:p,done:E}=d.next();return E?{value:p,done:E}:{value:a?[u(p[0]),u(p[1])]:u(p),done:E}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ia(e,t){const n={get(r){const i=this.__v_raw,o=B(i),a=B(r);e||(Fe(r,a)&&Z(o,"get",r),Z(o,"get",a));const{has:c}=Jt(o),d=t?ns:e?ss:ee;if(c.call(o,r))return d(i.get(r));if(c.call(o,a))return d(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Z(B(r),"iterate",tt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=B(i),a=B(r);return e||(Fe(r,a)&&Z(o,"has",r),Z(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=B(a),d=t?ns:e?ss:ee;return!e&&Z(c,"iterate",tt),a.forEach((u,p)=>r.call(i,d(u),d(p),o))}};return X(n,e?{add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear")}:{add(r){!t&&!pe(r)&&!st(r)&&(r=B(r));const i=B(this);return Jt(i).has.call(i,r)||(i.add(r),Oe(i,"add",r,r)),this},set(r,i){!t&&!pe(i)&&!st(i)&&(i=B(i));const o=B(this),{has:a,get:c}=Jt(o);let d=a.call(o,r);d||(r=B(r),d=a.call(o,r));const u=c.call(o,r);return o.set(r,i),d?Fe(i,u)&&Oe(o,"set",r,i):Oe(o,"add",r,i),this},delete(r){const i=B(this),{has:o,get:a}=Jt(i);let c=o.call(i,r);c||(r=B(r),c=o.call(i,r)),a&&a.call(i,r);const d=i.delete(r);return c&&Oe(i,"delete",r,void 0),d},clear(){const r=B(this),i=r.size!==0,o=r.clear();return i&&Oe(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ra(r,e,t)}),n}function xs(e,t){const n=ia(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(F(n,r)&&r in s?n:s,r,i)}const oa={get:xs(!1,!1)},aa={get:xs(!1,!0)},ca={get:xs(!0,!1)};const di=new WeakMap,hi=new WeakMap,pi=new WeakMap,la=new WeakMap;function fa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ua(e){return e.__v_skip||!Object.isExtensible(e)?0:fa(Bo(e))}function Os(e){return st(e)?e:Ds(e,!1,ta,oa,di)}function da(e){return Ds(e,!1,sa,aa,hi)}function gi(e){return Ds(e,!0,na,ca,pi)}function Ds(e,t,n,s,r){if(!z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=ua(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function ht(e){return st(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function st(e){return!!(e&&e.__v_isReadonly)}function pe(e){return!!(e&&e.__v_isShallow)}function Ms(e){return e?!!e.__v_raw:!1}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function ha(e){return!F(e,"__v_skip")&&Object.isExtensible(e)&&Xr(e,"__v_skip",!0),e}const ee=e=>z(e)?Os(e):e,ss=e=>z(e)?gi(e):e;function te(e){return e?e.__v_isRef===!0:!1}function Je(e){return pa(e,!1)}function pa(e,t){return te(e)?e:new ga(e,t)}class ga{constructor(t,n){this.dep=new Cs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:B(t),this._value=n?t:ee(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||pe(t)||st(t);t=s?t:B(t),Fe(t,n)&&(this._rawValue=t,this._value=s?t:ee(t),this.dep.trigger())}}function ma(e){return te(e)?e.value:e}const ba={get:(e,t,n)=>t==="__v_raw"?e:ma(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return te(r)&&!te(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function mi(e){return ht(e)?e:new Proxy(e,ba)}class ya{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Cs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&U!==this)return si(this,!0),!0}get value(){const t=this.dep.track();return oi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function _a(e,t,n=!1){let s,r;return P(e)?s=e:(s=e.get,r=e.set),new ya(s,r,n)}const Xt={},rn=new WeakMap;let Qe;function va(e,t=!1,n=Qe){if(n){let s=rn.get(n);s||rn.set(n,s=[]),s.push(e)}}function wa(e,t,n=H){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,d=x=>r?x:pe(x)||r===!1||r===0?De(x,1):De(x);let u,p,E,T,N=!1,k=!1;if(te(e)?(p=()=>e.value,N=pe(e)):ht(e)?(p=()=>d(e),N=!0):D(e)?(k=!0,N=e.some(x=>ht(x)||pe(x)),p=()=>e.map(x=>{if(te(x))return x.value;if(ht(x))return d(x);if(P(x))return c?c(x,2):x()})):P(e)?t?p=c?()=>c(e,2):e:p=()=>{if(E){Ke();try{E()}finally{We()}}const x=Qe;Qe=u;try{return c?c(e,3,[T]):e(T)}finally{Qe=x}}:p=Ie,t&&r){const x=p,Y=r===!0?1/0:r;p=()=>De(x(),Y)}const _=zo(),M=()=>{u.stop(),_&&vs(_.effects,u)};if(i&&t){const x=t;t=(...Y)=>{x(...Y),M()}}let W=k?new Array(e.length).fill(Xt):Xt;const G=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const Y=u.run();if(r||N||(k?Y.some((Ne,be)=>Fe(Ne,W[be])):Fe(Y,W))){E&&E();const Ne=Qe;Qe=u;try{const be=[Y,W===Xt?void 0:k&&W[0]===Xt?[]:W,T];c?c(t,3,be):t(...be),W=Y}finally{Qe=Ne}}}else u.run()};return a&&a(G),u=new ti(p),u.scheduler=o?()=>o(G,!1):G,T=x=>va(x,!1,u),E=u.onStop=()=>{const x=rn.get(u);if(x){if(c)c(x,4);else for(const Y of x)Y();rn.delete(u)}},t?s?G(!0):W=u.run():o?o(G.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function De(e,t=1/0,n){if(t<=0||!z(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,te(e))De(e.value,t,n);else if(D(e))for(let s=0;s<e.length;s++)De(e[s],t,n);else if(qr(e)||dt(e))e.forEach(s=>{De(s,t,n)});else if(Jr(e)){for(const s in e)De(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&De(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vt(e,t,n,s){try{return s?e(...s):e()}catch(r){bn(r,t,n)}}function Te(e,t,n,s){if(P(e)){const r=Vt(e,t,n,s);return r&&zr(r)&&r.catch(i=>{bn(i,t,n)}),r}if(D(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Te(e[i],t,n,s));return r}}function bn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||H;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,c,d)===!1)return}a=a.parent}if(i){Ke(),Vt(i,null,10,[e,c,d]),We();return}}Ea(e,n,r,s,o)}function Ea(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const re=[];let we=-1;const pt=[];let $e=null,lt=0;const bi=Promise.resolve();let on=null;function Sa(e){const t=on||bi;return e?t.then(this?e.bind(this):e):t}function Ia(e){let t=we+1,n=re.length;for(;t<n;){const s=t+n>>>1,r=re[s],i=kt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Ps(e){if(!(e.flags&1)){const t=kt(e),n=re[re.length-1];!n||!(e.flags&2)&&t>=kt(n)?re.push(e):re.splice(Ia(t),0,e),e.flags|=1,yi()}}function yi(){on||(on=bi.then(vi))}function Ta(e){D(e)?pt.push(...e):$e&&e.id===-1?$e.splice(lt+1,0,e):e.flags&1||(pt.push(e),e.flags|=1),yi()}function nr(e,t,n=we+1){for(;n<re.length;n++){const s=re[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;re.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function _i(e){if(pt.length){const t=[...new Set(pt)].sort((n,s)=>kt(n)-kt(s));if(pt.length=0,$e){$e.push(...t);return}for($e=t,lt=0;lt<$e.length;lt++){const n=$e[lt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$e=null,lt=0}}const kt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function vi(e){try{for(we=0;we<re.length;we++){const t=re[we];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;we<re.length;we++){const t=re[we];t&&(t.flags&=-2)}we=-1,re.length=0,_i(),on=null,(re.length||pt.length)&&vi()}}let he=null,wi=null;function an(e){const t=he;return he=e,wi=e&&e.type.__scopeId||null,t}function Aa(e,t=he,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&fr(-1);const i=an(t);let o;try{o=e(...r)}finally{an(i),s._d&&fr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qt(e,t){if(he===null)return e;const n=wn(he),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,c=H]=t[r];i&&(P(i)&&(i={mounted:i,updated:i}),i.deep&&De(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ye(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ke(),Te(c,n,8,[e.el,a,e,t]),We())}}const Ca=Symbol("_vte"),xa=e=>e.__isTeleport;function Rs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Rs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Oa(e,t){return P(e)?X({name:e.name},t,{setup:e}):e}function Ei(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function rs(e,t,n,s,r=!1){if(D(e)){e.forEach((N,k)=>rs(N,t&&(D(t)?t[k]:t),n,s,r));return}if(Dt(s)&&!r)return;const i=s.shapeFlag&4?wn(s.component):s.el,o=r?null:i,{i:a,r:c}=e,d=t&&t.r,u=a.refs===H?a.refs={}:a.refs,p=a.setupState,E=B(p),T=p===H?()=>!1:N=>F(E,N);if(d!=null&&d!==c&&(J(d)?(u[d]=null,T(d)&&(p[d]=null)):te(d)&&(d.value=null)),P(c))Vt(c,a,12,[o,u]);else{const N=J(c),k=te(c);if(N||k){const _=()=>{if(e.f){const M=N?T(c)?p[c]:u[c]:c.value;r?D(M)&&vs(M,i):D(M)?M.includes(i)||M.push(i):N?(u[c]=[i],T(c)&&(p[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else N?(u[c]=o,T(c)&&(p[c]=o)):k&&(c.value=o,e.k&&(u[e.k]=o))};o?(_.id=-1,fe(_,n)):_()}}}gn().requestIdleCallback;gn().cancelIdleCallback;const Dt=e=>!!e.type.__asyncLoader,Si=e=>e.type.__isKeepAlive;function Da(e,t){Ii(e,"a",t)}function Ma(e,t){Ii(e,"da",t)}function Ii(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(yn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Si(r.parent.vnode)&&Pa(s,t,n,r),r=r.parent}}function Pa(e,t,n,s){const r=yn(t,e,s,!0);Ai(()=>{vs(s[t],r)},n)}function yn(e,t,n=ie,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Ke();const a=Ut(n),c=Te(t,n,e,o);return a(),We(),c});return s?r.unshift(i):r.push(i),i}}const Re=e=>(t,n=ie)=>{(!Ft||e==="sp")&&yn(e,(...s)=>t(...s),n)},Ra=Re("bm"),Ti=Re("m"),Na=Re("bu"),ka=Re("u"),$a=Re("bum"),Ai=Re("um"),Ba=Re("sp"),Fa=Re("rtg"),La=Re("rtc");function Ha(e,t=ie){yn("ec",e,t)}const ja=Symbol.for("v-ndc");function Va(e,t,n,s){let r;const i=n,o=D(e);if(o||J(e)){const a=o&&ht(e);let c=!1;a&&(c=!pe(e),e=mn(e)),r=new Array(e.length);for(let d=0,u=e.length;d<u;d++)r[d]=t(c?ee(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(z(e))if(e[Symbol.iterator])r=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let c=0,d=a.length;c<d;c++){const u=a[c];r[c]=t(e[u],u,c,i)}}else r=[];return r}const is=e=>e?zi(e)?wn(e):is(e.parent):null,Mt=X(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>is(e.parent),$root:e=>is(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ns(e),$forceUpdate:e=>e.f||(e.f=()=>{Ps(e.update)}),$nextTick:e=>e.n||(e.n=Sa.bind(e.proxy)),$watch:e=>fc.bind(e)}),Rn=(e,t)=>e!==H&&!e.__isScriptSetup&&F(e,t),Ua={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let d;if(t[0]!=="$"){const T=o[t];if(T!==void 0)switch(T){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Rn(s,t))return o[t]=1,s[t];if(r!==H&&F(r,t))return o[t]=2,r[t];if((d=e.propsOptions[0])&&F(d,t))return o[t]=3,i[t];if(n!==H&&F(n,t))return o[t]=4,n[t];os&&(o[t]=0)}}const u=Mt[t];let p,E;if(u)return t==="$attrs"&&Z(e.attrs,"get",""),u(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==H&&F(n,t))return o[t]=4,n[t];if(E=c.config.globalProperties,F(E,t))return E[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Rn(r,t)?(r[t]=n,!0):s!==H&&F(s,t)?(s[t]=n,!0):F(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==H&&F(e,o)||Rn(t,o)||(a=i[0])&&F(a,o)||F(s,o)||F(Mt,o)||F(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:F(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function sr(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let os=!0;function Ka(e){const t=Ns(e),n=e.proxy,s=e.ctx;os=!1,t.beforeCreate&&rr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:d,created:u,beforeMount:p,mounted:E,beforeUpdate:T,updated:N,activated:k,deactivated:_,beforeDestroy:M,beforeUnmount:W,destroyed:G,unmounted:x,render:Y,renderTracked:Ne,renderTriggered:be,errorCaptured:ke,serverPrefetch:Kt,expose:qe,inheritAttrs:yt,components:Wt,directives:qt,filters:An}=t;if(d&&Wa(d,s,null),o)for(const q in o){const j=o[q];P(j)&&(s[q]=j.bind(n))}if(r){const q=r.call(n,n);z(q)&&(e.data=Os(q))}if(os=!0,i)for(const q in i){const j=i[q],ze=P(j)?j.bind(n,n):P(j.get)?j.get.bind(n,n):Ie,zt=!P(j)&&P(j.set)?j.set.bind(n):Ie,Ge=Mc({get:ze,set:zt});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:ye=>Ge.value=ye})}if(a)for(const q in a)Ci(a[q],s,n,q);if(c){const q=P(c)?c.call(n):c;Reflect.ownKeys(q).forEach(j=>{Xa(j,q[j])})}u&&rr(u,e,"c");function ne(q,j){D(j)?j.forEach(ze=>q(ze.bind(n))):j&&q(j.bind(n))}if(ne(Ra,p),ne(Ti,E),ne(Na,T),ne(ka,N),ne(Da,k),ne(Ma,_),ne(Ha,ke),ne(La,Ne),ne(Fa,be),ne($a,W),ne(Ai,x),ne(Ba,Kt),D(qe))if(qe.length){const q=e.exposed||(e.exposed={});qe.forEach(j=>{Object.defineProperty(q,j,{get:()=>n[j],set:ze=>n[j]=ze})})}else e.exposed||(e.exposed={});Y&&e.render===Ie&&(e.render=Y),yt!=null&&(e.inheritAttrs=yt),Wt&&(e.components=Wt),qt&&(e.directives=qt),Kt&&Ei(e)}function Wa(e,t,n=Ie){D(e)&&(e=as(e));for(const s in e){const r=e[s];let i;z(r)?"default"in r?i=tn(r.from||s,r.default,!0):i=tn(r.from||s):i=tn(r),te(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function rr(e,t,n){Te(D(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ci(e,t,n,s){let r=s.includes(".")?ji(n,s):()=>n[s];if(J(e)){const i=t[e];P(i)&&kn(r,i)}else if(P(e))kn(r,e.bind(n));else if(z(e))if(D(e))e.forEach(i=>Ci(i,t,n,s));else{const i=P(e.handler)?e.handler.bind(n):t[e.handler];P(i)&&kn(r,i,e)}}function Ns(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(d=>cn(c,d,o,!0)),cn(c,t,o)),z(t)&&i.set(t,c),c}function cn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&cn(e,i,n,!0),r&&r.forEach(o=>cn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=qa[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const qa={data:ir,props:or,emits:or,methods:At,computed:At,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:At,directives:At,watch:Ga,provide:ir,inject:za};function ir(e,t){return t?e?function(){return X(P(e)?e.call(this,this):e,P(t)?t.call(this,this):t)}:t:e}function za(e,t){return At(as(e),as(t))}function as(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?X(Object.create(null),e,t):t}function or(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:X(Object.create(null),sr(e),sr(t??{})):t}function Ga(e,t){if(!e)return t;if(!t)return e;const n=X(Object.create(null),e);for(const s in t)n[s]=se(e[s],t[s]);return n}function xi(){return{app:null,config:{isNativeTag:ko,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ja=0;function Ya(e,t){return function(s,r=null){P(s)||(s=X({},s)),r!=null&&!z(r)&&(r=null);const i=xi(),o=new WeakSet,a=[];let c=!1;const d=i.app={_uid:Ja++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Pc,get config(){return i.config},set config(u){},use(u,...p){return o.has(u)||(u&&P(u.install)?(o.add(u),u.install(d,...p)):P(u)&&(o.add(u),u(d,...p))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,p){return p?(i.components[u]=p,d):i.components[u]},directive(u,p){return p?(i.directives[u]=p,d):i.directives[u]},mount(u,p,E){if(!c){const T=d._ceVNode||nt(s,r);return T.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),p&&t?t(T,u):e(T,u,E),c=!0,d._container=u,u.__vue_app__=d,wn(T.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Te(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return i.provides[u]=p,d},runWithContext(u){const p=gt;gt=d;try{return u()}finally{gt=p}}};return d}}let gt=null;function Xa(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function tn(e,t,n=!1){const s=ie||he;if(s||gt){const r=gt?gt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&P(t)?t.call(s&&s.proxy):t}}const Oi={},Di=()=>Object.create(Oi),Mi=e=>Object.getPrototypeOf(e)===Oi;function Qa(e,t,n,s=!1){const r={},i=Di();e.propsDefaults=Object.create(null),Pi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:da(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Za(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=B(r),[c]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let E=u[p];if(_n(e.emitsOptions,E))continue;const T=t[E];if(c)if(F(i,E))T!==i[E]&&(i[E]=T,d=!0);else{const N=je(E);r[N]=cs(c,a,N,T,e,!1)}else T!==i[E]&&(i[E]=T,d=!0)}}}else{Pi(e,t,r,i)&&(d=!0);let u;for(const p in a)(!t||!F(t,p)&&((u=at(p))===p||!F(t,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(r[p]=cs(c,a,p,void 0,e,!0)):delete r[p]);if(i!==a)for(const p in i)(!t||!F(t,p))&&(delete i[p],d=!0)}d&&Oe(e.attrs,"set","")}function Pi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Ct(c))continue;const d=t[c];let u;r&&F(r,u=je(c))?!i||!i.includes(u)?n[u]=d:(a||(a={}))[u]=d:_n(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,o=!0)}if(i){const c=B(n),d=a||H;for(let u=0;u<i.length;u++){const p=i[u];n[p]=cs(r,c,p,d[p],e,!F(d,p))}}return o}function cs(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=F(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&P(c)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const u=Ut(r);s=d[n]=c.call(null,t),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===at(n))&&(s=!0))}return s}const ec=new WeakMap;function Ri(e,t,n=!1){const s=n?ec:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!P(e)){const u=p=>{c=!0;const[E,T]=Ri(p,t,!0);X(o,E),T&&a.push(...T)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return z(e)&&s.set(e,ut),ut;if(D(i))for(let u=0;u<i.length;u++){const p=je(i[u]);ar(p)&&(o[p]=H)}else if(i)for(const u in i){const p=je(u);if(ar(p)){const E=i[u],T=o[p]=D(E)||P(E)?{type:E}:X({},E),N=T.type;let k=!1,_=!0;if(D(N))for(let M=0;M<N.length;++M){const W=N[M],G=P(W)&&W.name;if(G==="Boolean"){k=!0;break}else G==="String"&&(_=!1)}else k=P(N)&&N.name==="Boolean";T[0]=k,T[1]=_,(k||F(T,"default"))&&a.push(p)}}const d=[o,a];return z(e)&&s.set(e,d),d}function ar(e){return e[0]!=="$"&&!Ct(e)}const Ni=e=>e[0]==="_"||e==="$stable",ks=e=>D(e)?e.map(Se):[Se(e)],tc=(e,t,n)=>{if(t._n)return t;const s=Aa((...r)=>ks(t(...r)),n);return s._c=!1,s},ki=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Ni(r))continue;const i=e[r];if(P(i))t[r]=tc(r,i,s);else if(i!=null){const o=ks(i);t[r]=()=>o}}},$i=(e,t)=>{const n=ks(t);e.slots.default=()=>n},Bi=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},nc=(e,t,n)=>{const s=e.slots=Di();if(e.vnode.shapeFlag&32){const r=t._;r?(Bi(s,t,n),n&&Xr(s,"_",r,!0)):ki(t,s)}else t&&$i(e,t)},sc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=H;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Bi(r,t,n):(i=!t.$stable,ki(t,r)),o=t}else t&&($i(e,t),o={default:1});if(i)for(const a in r)!Ni(a)&&o[a]==null&&delete r[a]},fe=bc;function rc(e){return ic(e)}function ic(e,t){const n=gn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:E,setScopeId:T=Ie,insertStaticContent:N}=e,k=(l,f,h,b=null,g=null,m=null,S=void 0,w=null,v=!!f.dynamicChildren)=>{if(l===f)return;l&&!Tt(l,f)&&(b=Gt(l),ye(l,g,m,!0),l=null),f.patchFlag===-2&&(v=!1,f.dynamicChildren=null);const{type:y,ref:C,shapeFlag:I}=f;switch(y){case vn:_(l,f,h,b);break;case $t:M(l,f,h,b);break;case Bn:l==null&&W(f,h,b,S);break;case Ee:Wt(l,f,h,b,g,m,S,w,v);break;default:I&1?Y(l,f,h,b,g,m,S,w,v):I&6?qt(l,f,h,b,g,m,S,w,v):(I&64||I&128)&&y.process(l,f,h,b,g,m,S,w,v,vt)}C!=null&&g&&rs(C,l&&l.ref,m,f||l,!f)},_=(l,f,h,b)=>{if(l==null)s(f.el=a(f.children),h,b);else{const g=f.el=l.el;f.children!==l.children&&d(g,f.children)}},M=(l,f,h,b)=>{l==null?s(f.el=c(f.children||""),h,b):f.el=l.el},W=(l,f,h,b)=>{[l.el,l.anchor]=N(l.children,f,h,b,l.el,l.anchor)},G=({el:l,anchor:f},h,b)=>{let g;for(;l&&l!==f;)g=E(l),s(l,h,b),l=g;s(f,h,b)},x=({el:l,anchor:f})=>{let h;for(;l&&l!==f;)h=E(l),r(l),l=h;r(f)},Y=(l,f,h,b,g,m,S,w,v)=>{f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),l==null?Ne(f,h,b,g,m,S,w,v):Kt(l,f,g,m,S,w,v)},Ne=(l,f,h,b,g,m,S,w)=>{let v,y;const{props:C,shapeFlag:I,transition:A,dirs:O}=l;if(v=l.el=o(l.type,m,C&&C.is,C),I&8?u(v,l.children):I&16&&ke(l.children,v,null,b,g,Nn(l,m),S,w),O&&Ye(l,null,b,"created"),be(v,l,l.scopeId,S,b),C){for(const V in C)V!=="value"&&!Ct(V)&&i(v,V,null,C[V],m,b);"value"in C&&i(v,"value",null,C.value,m),(y=C.onVnodeBeforeMount)&&ve(y,b,l)}O&&Ye(l,null,b,"beforeMount");const $=oc(g,A);$&&A.beforeEnter(v),s(v,f,h),((y=C&&C.onVnodeMounted)||$||O)&&fe(()=>{y&&ve(y,b,l),$&&A.enter(v),O&&Ye(l,null,b,"mounted")},g)},be=(l,f,h,b,g)=>{if(h&&T(l,h),b)for(let m=0;m<b.length;m++)T(l,b[m]);if(g){let m=g.subTree;if(f===m||Ui(m.type)&&(m.ssContent===f||m.ssFallback===f)){const S=g.vnode;be(l,S,S.scopeId,S.slotScopeIds,g.parent)}}},ke=(l,f,h,b,g,m,S,w,v=0)=>{for(let y=v;y<l.length;y++){const C=l[y]=w?Be(l[y]):Se(l[y]);k(null,C,f,h,b,g,m,S,w)}},Kt=(l,f,h,b,g,m,S)=>{const w=f.el=l.el;let{patchFlag:v,dynamicChildren:y,dirs:C}=f;v|=l.patchFlag&16;const I=l.props||H,A=f.props||H;let O;if(h&&Xe(h,!1),(O=A.onVnodeBeforeUpdate)&&ve(O,h,f,l),C&&Ye(f,l,h,"beforeUpdate"),h&&Xe(h,!0),(I.innerHTML&&A.innerHTML==null||I.textContent&&A.textContent==null)&&u(w,""),y?qe(l.dynamicChildren,y,w,h,b,Nn(f,g),m):S||j(l,f,w,null,h,b,Nn(f,g),m,!1),v>0){if(v&16)yt(w,I,A,h,g);else if(v&2&&I.class!==A.class&&i(w,"class",null,A.class,g),v&4&&i(w,"style",I.style,A.style,g),v&8){const $=f.dynamicProps;for(let V=0;V<$.length;V++){const L=$[V],ae=I[L],Q=A[L];(Q!==ae||L==="value")&&i(w,L,ae,Q,g,h)}}v&1&&l.children!==f.children&&u(w,f.children)}else!S&&y==null&&yt(w,I,A,h,g);((O=A.onVnodeUpdated)||C)&&fe(()=>{O&&ve(O,h,f,l),C&&Ye(f,l,h,"updated")},b)},qe=(l,f,h,b,g,m,S)=>{for(let w=0;w<f.length;w++){const v=l[w],y=f[w],C=v.el&&(v.type===Ee||!Tt(v,y)||v.shapeFlag&70)?p(v.el):h;k(v,y,C,null,b,g,m,S,!0)}},yt=(l,f,h,b,g)=>{if(f!==h){if(f!==H)for(const m in f)!Ct(m)&&!(m in h)&&i(l,m,f[m],null,g,b);for(const m in h){if(Ct(m))continue;const S=h[m],w=f[m];S!==w&&m!=="value"&&i(l,m,w,S,g,b)}"value"in h&&i(l,"value",f.value,h.value,g)}},Wt=(l,f,h,b,g,m,S,w,v)=>{const y=f.el=l?l.el:a(""),C=f.anchor=l?l.anchor:a("");let{patchFlag:I,dynamicChildren:A,slotScopeIds:O}=f;O&&(w=w?w.concat(O):O),l==null?(s(y,h,b),s(C,h,b),ke(f.children||[],h,C,g,m,S,w,v)):I>0&&I&64&&A&&l.dynamicChildren?(qe(l.dynamicChildren,A,h,g,m,S,w),(f.key!=null||g&&f===g.subTree)&&Fi(l,f,!0)):j(l,f,h,C,g,m,S,w,v)},qt=(l,f,h,b,g,m,S,w,v)=>{f.slotScopeIds=w,l==null?f.shapeFlag&512?g.ctx.activate(f,h,b,S,v):An(f,h,b,g,m,S,v):qs(l,f,v)},An=(l,f,h,b,g,m,S)=>{const w=l.component=Tc(l,b,g);if(Si(l)&&(w.ctx.renderer=vt),Ac(w,!1,S),w.asyncDep){if(g&&g.registerDep(w,ne,S),!l.el){const v=w.subTree=nt($t);M(null,v,f,h)}}else ne(w,l,f,h,g,m,S)},qs=(l,f,h)=>{const b=f.component=l.component;if(gc(l,f,h))if(b.asyncDep&&!b.asyncResolved){q(b,f,h);return}else b.next=f,b.update();else f.el=l.el,b.vnode=f},ne=(l,f,h,b,g,m,S)=>{const w=()=>{if(l.isMounted){let{next:I,bu:A,u:O,parent:$,vnode:V}=l;{const ce=Li(l);if(ce){I&&(I.el=V.el,q(l,I,S)),ce.asyncDep.then(()=>{l.isUnmounted||w()});return}}let L=I,ae;Xe(l,!1),I?(I.el=V.el,q(l,I,S)):I=V,A&&en(A),(ae=I.props&&I.props.onVnodeBeforeUpdate)&&ve(ae,$,I,V),Xe(l,!0);const Q=$n(l),ge=l.subTree;l.subTree=Q,k(ge,Q,p(ge.el),Gt(ge),l,g,m),I.el=Q.el,L===null&&mc(l,Q.el),O&&fe(O,g),(ae=I.props&&I.props.onVnodeUpdated)&&fe(()=>ve(ae,$,I,V),g)}else{let I;const{el:A,props:O}=f,{bm:$,m:V,parent:L,root:ae,type:Q}=l,ge=Dt(f);if(Xe(l,!1),$&&en($),!ge&&(I=O&&O.onVnodeBeforeMount)&&ve(I,L,f),Xe(l,!0),A&&Ys){const ce=()=>{l.subTree=$n(l),Ys(A,l.subTree,l,g,null)};ge&&Q.__asyncHydrate?Q.__asyncHydrate(A,l,ce):ce()}else{ae.ce&&ae.ce._injectChildStyle(Q);const ce=l.subTree=$n(l);k(null,ce,h,b,l,g,m),f.el=ce.el}if(V&&fe(V,g),!ge&&(I=O&&O.onVnodeMounted)){const ce=f;fe(()=>ve(I,L,ce),g)}(f.shapeFlag&256||L&&Dt(L.vnode)&&L.vnode.shapeFlag&256)&&l.a&&fe(l.a,g),l.isMounted=!0,f=h=b=null}};l.scope.on();const v=l.effect=new ti(w);l.scope.off();const y=l.update=v.run.bind(v),C=l.job=v.runIfDirty.bind(v);C.i=l,C.id=l.uid,v.scheduler=()=>Ps(C),Xe(l,!0),y()},q=(l,f,h)=>{f.component=l;const b=l.vnode.props;l.vnode=f,l.next=null,Za(l,f.props,b,h),sc(l,f.children,h),Ke(),nr(l),We()},j=(l,f,h,b,g,m,S,w,v=!1)=>{const y=l&&l.children,C=l?l.shapeFlag:0,I=f.children,{patchFlag:A,shapeFlag:O}=f;if(A>0){if(A&128){zt(y,I,h,b,g,m,S,w,v);return}else if(A&256){ze(y,I,h,b,g,m,S,w,v);return}}O&8?(C&16&&_t(y,g,m),I!==y&&u(h,I)):C&16?O&16?zt(y,I,h,b,g,m,S,w,v):_t(y,g,m,!0):(C&8&&u(h,""),O&16&&ke(I,h,b,g,m,S,w,v))},ze=(l,f,h,b,g,m,S,w,v)=>{l=l||ut,f=f||ut;const y=l.length,C=f.length,I=Math.min(y,C);let A;for(A=0;A<I;A++){const O=f[A]=v?Be(f[A]):Se(f[A]);k(l[A],O,h,null,g,m,S,w,v)}y>C?_t(l,g,m,!0,!1,I):ke(f,h,b,g,m,S,w,v,I)},zt=(l,f,h,b,g,m,S,w,v)=>{let y=0;const C=f.length;let I=l.length-1,A=C-1;for(;y<=I&&y<=A;){const O=l[y],$=f[y]=v?Be(f[y]):Se(f[y]);if(Tt(O,$))k(O,$,h,null,g,m,S,w,v);else break;y++}for(;y<=I&&y<=A;){const O=l[I],$=f[A]=v?Be(f[A]):Se(f[A]);if(Tt(O,$))k(O,$,h,null,g,m,S,w,v);else break;I--,A--}if(y>I){if(y<=A){const O=A+1,$=O<C?f[O].el:b;for(;y<=A;)k(null,f[y]=v?Be(f[y]):Se(f[y]),h,$,g,m,S,w,v),y++}}else if(y>A)for(;y<=I;)ye(l[y],g,m,!0),y++;else{const O=y,$=y,V=new Map;for(y=$;y<=A;y++){const le=f[y]=v?Be(f[y]):Se(f[y]);le.key!=null&&V.set(le.key,y)}let L,ae=0;const Q=A-$+1;let ge=!1,ce=0;const wt=new Array(Q);for(y=0;y<Q;y++)wt[y]=0;for(y=O;y<=I;y++){const le=l[y];if(ae>=Q){ye(le,g,m,!0);continue}let _e;if(le.key!=null)_e=V.get(le.key);else for(L=$;L<=A;L++)if(wt[L-$]===0&&Tt(le,f[L])){_e=L;break}_e===void 0?ye(le,g,m,!0):(wt[_e-$]=y+1,_e>=ce?ce=_e:ge=!0,k(le,f[_e],h,null,g,m,S,w,v),ae++)}const Xs=ge?ac(wt):ut;for(L=Xs.length-1,y=Q-1;y>=0;y--){const le=$+y,_e=f[le],Qs=le+1<C?f[le+1].el:b;wt[y]===0?k(null,_e,h,Qs,g,m,S,w,v):ge&&(L<0||y!==Xs[L]?Ge(_e,h,Qs,2):L--)}}},Ge=(l,f,h,b,g=null)=>{const{el:m,type:S,transition:w,children:v,shapeFlag:y}=l;if(y&6){Ge(l.component.subTree,f,h,b);return}if(y&128){l.suspense.move(f,h,b);return}if(y&64){S.move(l,f,h,vt);return}if(S===Ee){s(m,f,h);for(let I=0;I<v.length;I++)Ge(v[I],f,h,b);s(l.anchor,f,h);return}if(S===Bn){G(l,f,h);return}if(b!==2&&y&1&&w)if(b===0)w.beforeEnter(m),s(m,f,h),fe(()=>w.enter(m),g);else{const{leave:I,delayLeave:A,afterLeave:O}=w,$=()=>s(m,f,h),V=()=>{I(m,()=>{$(),O&&O()})};A?A(m,$,V):V()}else s(m,f,h)},ye=(l,f,h,b=!1,g=!1)=>{const{type:m,props:S,ref:w,children:v,dynamicChildren:y,shapeFlag:C,patchFlag:I,dirs:A,cacheIndex:O}=l;if(I===-2&&(g=!1),w!=null&&rs(w,null,h,l,!0),O!=null&&(f.renderCache[O]=void 0),C&256){f.ctx.deactivate(l);return}const $=C&1&&A,V=!Dt(l);let L;if(V&&(L=S&&S.onVnodeBeforeUnmount)&&ve(L,f,l),C&6)No(l.component,h,b);else{if(C&128){l.suspense.unmount(h,b);return}$&&Ye(l,null,f,"beforeUnmount"),C&64?l.type.remove(l,f,h,vt,b):y&&!y.hasOnce&&(m!==Ee||I>0&&I&64)?_t(y,f,h,!1,!0):(m===Ee&&I&384||!g&&C&16)&&_t(v,f,h),b&&zs(l)}(V&&(L=S&&S.onVnodeUnmounted)||$)&&fe(()=>{L&&ve(L,f,l),$&&Ye(l,null,f,"unmounted")},h)},zs=l=>{const{type:f,el:h,anchor:b,transition:g}=l;if(f===Ee){Ro(h,b);return}if(f===Bn){x(l);return}const m=()=>{r(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:S,delayLeave:w}=g,v=()=>S(h,m);w?w(l.el,m,v):v()}else m()},Ro=(l,f)=>{let h;for(;l!==f;)h=E(l),r(l),l=h;r(f)},No=(l,f,h)=>{const{bum:b,scope:g,job:m,subTree:S,um:w,m:v,a:y}=l;cr(v),cr(y),b&&en(b),g.stop(),m&&(m.flags|=8,ye(S,l,f,h)),w&&fe(w,f),fe(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},_t=(l,f,h,b=!1,g=!1,m=0)=>{for(let S=m;S<l.length;S++)ye(l[S],f,h,b,g)},Gt=l=>{if(l.shapeFlag&6)return Gt(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const f=E(l.anchor||l.el),h=f&&f[Ca];return h?E(h):f};let Cn=!1;const Gs=(l,f,h)=>{l==null?f._vnode&&ye(f._vnode,null,null,!0):k(f._vnode||null,l,f,null,null,null,h),f._vnode=l,Cn||(Cn=!0,nr(),_i(),Cn=!1)},vt={p:k,um:ye,m:Ge,r:zs,mt:An,mc:ke,pc:j,pbc:qe,n:Gt,o:e};let Js,Ys;return{render:Gs,hydrate:Js,createApp:Ya(Gs,Js)}}function Nn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xe({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function oc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fi(e,t,n=!1){const s=e.children,r=t.children;if(D(s)&&D(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Be(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Fi(o,a)),a.type===vn&&(a.el=o.el)}}function ac(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(r=n[n.length-1],e[r]<d){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<d?i=a+1:o=a;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Li(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Li(t)}function cr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const cc=Symbol.for("v-scx"),lc=()=>tn(cc);function kn(e,t,n){return Hi(e,t,n)}function Hi(e,t,n=H){const{immediate:s,deep:r,flush:i,once:o}=n,a=X({},n),c=t&&s||!t&&i!=="post";let d;if(Ft){if(i==="sync"){const T=lc();d=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=Ie,T.resume=Ie,T.pause=Ie,T}}const u=ie;a.call=(T,N,k)=>Te(T,u,N,k);let p=!1;i==="post"?a.scheduler=T=>{fe(T,u&&u.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(T,N)=>{N?T():Ps(T)}),a.augmentJob=T=>{t&&(T.flags|=4),p&&(T.flags|=2,u&&(T.id=u.uid,T.i=u))};const E=wa(e,t,a);return Ft&&(d?d.push(E):c&&E()),E}function fc(e,t,n){const s=this.proxy,r=J(e)?e.includes(".")?ji(s,e):()=>s[e]:e.bind(s,s);let i;P(t)?i=t:(i=t.handler,n=t);const o=Ut(this),a=Hi(r,i.bind(s),n);return o(),a}function ji(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const uc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${je(t)}Modifiers`]||e[`${at(t)}Modifiers`];function dc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||H;let r=n;const i=t.startsWith("update:"),o=i&&uc(s,t.slice(7));o&&(o.trim&&(r=n.map(u=>J(u)?u.trim():u)),o.number&&(r=n.map(Xn)));let a,c=s[a=xn(t)]||s[a=xn(je(t))];!c&&i&&(c=s[a=xn(at(t))]),c&&Te(c,e,6,r);const d=s[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Te(d,e,6,r)}}function Vi(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!P(e)){const c=d=>{const u=Vi(d,t,!0);u&&(a=!0,X(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(z(e)&&s.set(e,null),null):(D(i)?i.forEach(c=>o[c]=null):X(o,i),z(e)&&s.set(e,o),o)}function _n(e,t){return!e||!dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),F(e,t[0].toLowerCase()+t.slice(1))||F(e,at(t))||F(e,t))}function $n(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:d,renderCache:u,props:p,data:E,setupState:T,ctx:N,inheritAttrs:k}=e,_=an(e);let M,W;try{if(n.shapeFlag&4){const x=r||s,Y=x;M=Se(d.call(Y,x,u,p,T,E,N)),W=a}else{const x=t;M=Se(x.length>1?x(p,{attrs:a,slots:o,emit:c}):x(p,null)),W=t.props?a:hc(a)}}catch(x){Pt.length=0,bn(x,e,1),M=nt($t)}let G=M;if(W&&k!==!1){const x=Object.keys(W),{shapeFlag:Y}=G;x.length&&Y&7&&(i&&x.some(_s)&&(W=pc(W,i)),G=mt(G,W,!1,!0))}return n.dirs&&(G=mt(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Rs(G,n.transition),M=G,an(_),M}const hc=e=>{let t;for(const n in e)(n==="class"||n==="style"||dn(n))&&((t||(t={}))[n]=e[n]);return t},pc=(e,t)=>{const n={};for(const s in e)(!_s(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function gc(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?lr(s,o,d):!!o;if(c&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const E=u[p];if(o[E]!==s[E]&&!_n(d,E))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?lr(s,o,d):!0:!!o;return!1}function lr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!_n(n,i))return!0}return!1}function mc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ui=e=>e.__isSuspense;function bc(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Ta(e)}const Ee=Symbol.for("v-fgt"),vn=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Bn=Symbol.for("v-stc"),Pt=[];let de=null;function St(e=!1){Pt.push(de=e?null:[])}function yc(){Pt.pop(),de=Pt[Pt.length-1]||null}let Bt=1;function fr(e){Bt+=e,e<0&&de&&(de.hasOnce=!0)}function _c(e){return e.dynamicChildren=Bt>0?de||ut:null,yc(),Bt>0&&de&&de.push(e),e}function It(e,t,n,s,r,i){return _c(R(e,t,n,s,r,i,!0))}function Ki(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const Wi=({key:e})=>e??null,nn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||te(e)||P(e)?{i:he,r:e,k:t,f:!!n}:e:null);function R(e,t=null,n=null,s=0,r=null,i=e===Ee?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&nn(t),scopeId:wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:he};return a?($s(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=J(n)?8:16),Bt>0&&!o&&de&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&de.push(c),c}const nt=vc;function vc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===ja)&&(e=$t),Ki(e)){const a=mt(e,t,!0);return n&&$s(a,n),Bt>0&&!i&&de&&(a.shapeFlag&6?de[de.indexOf(e)]=a:de.push(a)),a.patchFlag=-2,a}if(Dc(e)&&(e=e.__vccOpts),t){t=wc(t);let{class:a,style:c}=t;a&&!J(a)&&(t.class=Ss(a)),z(c)&&(Ms(c)&&!D(c)&&(c=X({},c)),t.style=Es(c))}const o=J(e)?1:Ui(e)?128:xa(e)?64:z(e)?4:P(e)?2:0;return R(e,t,n,s,r,o,i,!0)}function wc(e){return e?Ms(e)||Mi(e)?X({},e):e:null}function mt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=e,d=t?Ec(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Wi(d),ref:t&&t.ref?n&&i?D(i)?i.concat(nn(t)):[i,nn(t)]:nn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mt(e.ssContent),ssFallback:e.ssFallback&&mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Rs(u,c.clone(u)),u}function qi(e=" ",t=0){return nt(vn,null,e,t)}function Se(e){return e==null||typeof e=="boolean"?nt($t):D(e)?nt(Ee,null,e.slice()):Ki(e)?Be(e):nt(vn,null,String(e))}function Be(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mt(e)}function $s(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),$s(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Mi(t)?t._ctx=he:r===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else P(t)?(t={default:t,_ctx:he},n=32):(t=String(t),s&64?(n=16,t=[qi(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ec(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ss([t.class,s.class]));else if(r==="style")t.style=Es([t.style,s.style]);else if(dn(r)){const i=t[r],o=s[r];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function ve(e,t,n,s=null){Te(e,t,7,[n,s])}const Sc=xi();let Ic=0;function Tc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Sc,i={uid:Ic++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ri(s,r),emitsOptions:Vi(s,r),emit:null,emitted:null,propsDefaults:H,inheritAttrs:s.inheritAttrs,ctx:H,data:H,props:H,attrs:H,slots:H,refs:H,setupState:H,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=dc.bind(null,i),e.ce&&e.ce(i),i}let ie=null,ln,ls;{const e=gn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ln=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),ls=t("__VUE_SSR_SETTERS__",n=>Ft=n)}const Ut=e=>{const t=ie;return ln(e),e.scope.on(),()=>{e.scope.off(),ln(t)}},ur=()=>{ie&&ie.scope.off(),ln(null)};function zi(e){return e.vnode.shapeFlag&4}let Ft=!1;function Ac(e,t=!1,n=!1){t&&ls(t);const{props:s,children:r}=e.vnode,i=zi(e);Qa(e,s,i,t),nc(e,r,n);const o=i?Cc(e,t):void 0;return t&&ls(!1),o}function Cc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ua);const{setup:s}=n;if(s){Ke();const r=e.setupContext=s.length>1?Oc(e):null,i=Ut(e),o=Vt(s,e,0,[e.props,r]),a=zr(o);if(We(),i(),(a||e.sp)&&!Dt(e)&&Ei(e),a){if(o.then(ur,ur),t)return o.then(c=>{dr(e,c,t)}).catch(c=>{bn(c,e,0)});e.asyncDep=o}else dr(e,o,t)}else Gi(e,t)}function dr(e,t,n){P(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:z(t)&&(e.setupState=mi(t)),Gi(e,n)}let hr;function Gi(e,t,n){const s=e.type;if(!e.render){if(!t&&hr&&!s.render){const r=s.template||Ns(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,d=X(X({isCustomElement:i,delimiters:a},o),c);s.render=hr(r,d)}}e.render=s.render||Ie}{const r=Ut(e);Ke();try{Ka(e)}finally{We(),r()}}}const xc={get(e,t){return Z(e,"get",""),e[t]}};function Oc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,xc),slots:e.slots,emit:e.emit,expose:t}}function wn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(mi(ha(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Mt)return Mt[n](e)},has(t,n){return n in t||n in Mt}})):e.proxy}function Dc(e){return P(e)&&"__vccOpts"in e}const Mc=(e,t)=>_a(e,t,Ft),Pc="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fs;const pr=typeof window<"u"&&window.trustedTypes;if(pr)try{fs=pr.createPolicy("vue",{createHTML:e=>e})}catch{}const Ji=fs?e=>fs.createHTML(e):e=>e,Rc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1998/Math/MathML",Ce=typeof document<"u"?document:null,gr=Ce&&Ce.createElement("template"),kc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Ce.createElementNS(Rc,e):t==="mathml"?Ce.createElementNS(Nc,e):n?Ce.createElement(e,{is:n}):Ce.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Ce.createTextNode(e),createComment:e=>Ce.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ce.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{gr.innerHTML=Ji(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=gr.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$c=Symbol("_vtc");function Bc(e,t,n){const s=e[$c];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mr=Symbol("_vod"),Fc=Symbol("_vsh"),Lc=Symbol(""),Hc=/(^|;)\s*display\s*:/;function jc(e,t,n){const s=e.style,r=J(n);let i=!1;if(n&&!r){if(t)if(J(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&sn(s,a,"")}else for(const o in t)n[o]==null&&sn(s,o,"");for(const o in n)o==="display"&&(i=!0),sn(s,o,n[o])}else if(r){if(t!==n){const o=s[Lc];o&&(n+=";"+o),s.cssText=n,i=Hc.test(n)}}else t&&e.removeAttribute("style");mr in e&&(e[mr]=i?s.display:"",e[Fc]&&(s.display="none"))}const br=/\s*!important$/;function sn(e,t,n){if(D(n))n.forEach(s=>sn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Vc(e,t);br.test(n)?e.setProperty(at(s),n.replace(br,""),"important"):e[s]=n}}const yr=["Webkit","Moz","ms"],Fn={};function Vc(e,t){const n=Fn[t];if(n)return n;let s=je(t);if(s!=="filter"&&s in e)return Fn[t]=s;s=Yr(s);for(let r=0;r<yr.length;r++){const i=yr[r]+s;if(i in e)return Fn[t]=i}return t}const _r="http://www.w3.org/1999/xlink";function vr(e,t,n,s,r,i=Wo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_r,t.slice(6,t.length)):e.setAttributeNS(_r,t,n):n==null||i&&!Qr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ue(n)?String(n):n)}function wr(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ji(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Qr(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function ft(e,t,n,s){e.addEventListener(t,n,s)}function Uc(e,t,n,s){e.removeEventListener(t,n,s)}const Er=Symbol("_vei");function Kc(e,t,n,s,r=null){const i=e[Er]||(e[Er]={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=Wc(t);if(s){const d=i[t]=Gc(s,r);ft(e,a,d,c)}else o&&(Uc(e,a,o,c),i[t]=void 0)}}const Sr=/(?:Once|Passive|Capture)$/;function Wc(e){let t;if(Sr.test(e)){t={};let s;for(;s=e.match(Sr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):at(e.slice(2)),t]}let Ln=0;const qc=Promise.resolve(),zc=()=>Ln||(qc.then(()=>Ln=0),Ln=Date.now());function Gc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Te(Jc(s,n.value),t,5,[s])};return n.value=e,n.attached=zc(),n}function Jc(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ir=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yc=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Bc(e,s,o):t==="style"?jc(e,n,s):dn(t)?_s(t)||Kc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xc(e,t,s,o))?(wr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&vr(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!J(s))?wr(e,je(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),vr(e,t,s,o))};function Xc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ir(t)&&P(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ir(t)&&J(n)?!1:t in e}const Tr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>en(t,n):t};function Qc(e){e.target.composing=!0}function Ar(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Hn=Symbol("_assign"),Zt={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[Hn]=Tr(r);const i=s||r.props&&r.props.type==="number";ft(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Xn(a)),e[Hn](a)}),n&&ft(e,"change",()=>{e.value=e.value.trim()}),t||(ft(e,"compositionstart",Qc),ft(e,"compositionend",Ar),ft(e,"change",Ar))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[Hn]=Tr(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Xn(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===c)||(e.value=c))}},Zc=X({patchProp:Yc},kc);let Cr;function el(){return Cr||(Cr=rc(Zc))}const tl=(...e)=>{const t=el().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=sl(s);if(!r)return;const i=t._component;!P(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,nl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function nl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function sl(e){return J(e)?document.querySelector(e):e}var xr={};/**
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
 */const Yi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},rl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,d=c?e[r+2]:0,u=i>>2,p=(i&3)<<4|a>>4;let E=(a&15)<<2|d>>6,T=d&63;c||(T=64,o||(E=64)),s.push(n[u],n[p],n[E],n[T])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Yi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const d=r<e.length?n[e.charAt(r)]:64;++r;const p=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||d==null||p==null)throw new il;const E=i<<2|a>>4;if(s.push(E),d!==64){const T=a<<4&240|d>>2;if(s.push(T),p!==64){const N=d<<6&192|p;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class il extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ol=function(e){const t=Yi(e);return Xi.encodeByteArray(t,!0)},Qi=function(e){return ol(e).replace(/\./g,"")},al=function(e){try{return Xi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function cl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ll=()=>cl().__FIREBASE_DEFAULTS__,fl=()=>{if(typeof process>"u"||typeof xr>"u")return;const e=xr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ul=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&al(e[1]);return t&&JSON.parse(t)},dl=()=>{try{return ll()||fl()||ul()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zi=()=>{var e;return(e=dl())===null||e===void 0?void 0:e.config};/**
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
 */class hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function eo(){try{return typeof indexedDB=="object"}catch{return!1}}function to(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function pl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gl="FirebaseError";class bt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=gl,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?ml(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new bt(r,a,s)}}function ml(e,t){return e.replace(bl,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const bl=/\{\$([^}]+)}/g;function us(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Or(i)&&Or(o)){if(!us(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Or(e){return e!==null&&typeof e=="object"}/**
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
 */function no(e){return e&&e._delegate?e._delegate:e}class Ve{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ze="[DEFAULT]";/**
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
 */class yl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new hl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vl(t))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Ze){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ze){return this.instances.has(t)}getOptions(t=Ze){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_l(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ze){return this.component?this.component.multipleInstances?t:Ze:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _l(e){return e===Ze?void 0:e}function vl(e){return e.instantiationMode==="EAGER"}/**
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
 */class wl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const El={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Sl=K.INFO,Il={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Tl=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Il[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Al{constructor(t){this.name=t,this._logLevel=Sl,this._logHandler=Tl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?El[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Cl=(e,t)=>t.some(n=>e instanceof n);let Dr,Mr;function xl(){return Dr||(Dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ol(){return Mr||(Mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const so=new WeakMap,ds=new WeakMap,ro=new WeakMap,jn=new WeakMap,Bs=new WeakMap;function Dl(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Me(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&so.set(n,e)}).catch(()=>{}),Bs.set(t,e),t}function Ml(e){if(ds.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ds.set(e,t)}let hs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ds.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ro.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pl(e){hs=e(hs)}function Rl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Vn(this),t,...n);return ro.set(s,t.sort?t.sort():[t]),Me(s)}:Ol().includes(e)?function(...t){return e.apply(Vn(this),t),Me(so.get(this))}:function(...t){return Me(e.apply(Vn(this),t))}}function Nl(e){return typeof e=="function"?Rl(e):(e instanceof IDBTransaction&&Ml(e),Cl(e,xl())?new Proxy(e,hs):e)}function Me(e){if(e instanceof IDBRequest)return Dl(e);if(jn.has(e))return jn.get(e);const t=Nl(e);return t!==e&&(jn.set(e,t),Bs.set(t,e)),t}const Vn=e=>Bs.get(e);function Sn(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Me(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Me(o.result),c.oldVersion,c.newVersion,Me(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}function Un(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",s=>t(s.oldVersion,s)),Me(n).then(()=>{})}const kl=["get","getKey","getAll","getAllKeys","count"],$l=["put","add","delete","clear"],Kn=new Map;function Pr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Kn.get(t))return Kn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=$l.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||kl.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),r&&c.done]))[0]};return Kn.set(t,i),i}Pl(e=>({...e,get:(t,n,s)=>Pr(t,n)||e.get(t,n,s),has:(t,n)=>!!Pr(t,n)||e.has(t,n)}));/**
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
 */class Bl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ps="@firebase/app",Rr="0.10.15";/**
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
 */const Pe=new Al("@firebase/app"),Ll="@firebase/app-compat",Hl="@firebase/analytics-compat",jl="@firebase/analytics",Vl="@firebase/app-check-compat",Ul="@firebase/app-check",Kl="@firebase/auth",Wl="@firebase/auth-compat",ql="@firebase/database",zl="@firebase/data-connect",Gl="@firebase/database-compat",Jl="@firebase/functions",Yl="@firebase/functions-compat",Xl="@firebase/installations",Ql="@firebase/installations-compat",Zl="@firebase/messaging",ef="@firebase/messaging-compat",tf="@firebase/performance",nf="@firebase/performance-compat",sf="@firebase/remote-config",rf="@firebase/remote-config-compat",of="@firebase/storage",af="@firebase/storage-compat",cf="@firebase/firestore",lf="@firebase/vertexai",ff="@firebase/firestore-compat",uf="firebase";/**
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
 */const gs="[DEFAULT]",df={[ps]:"fire-core",[Ll]:"fire-core-compat",[jl]:"fire-analytics",[Hl]:"fire-analytics-compat",[Ul]:"fire-app-check",[Vl]:"fire-app-check-compat",[Kl]:"fire-auth",[Wl]:"fire-auth-compat",[ql]:"fire-rtdb",[zl]:"fire-data-connect",[Gl]:"fire-rtdb-compat",[Jl]:"fire-fn",[Yl]:"fire-fn-compat",[Xl]:"fire-iid",[Ql]:"fire-iid-compat",[Zl]:"fire-fcm",[ef]:"fire-fcm-compat",[tf]:"fire-perf",[nf]:"fire-perf-compat",[sf]:"fire-rc",[rf]:"fire-rc-compat",[of]:"fire-gcs",[af]:"fire-gcs-compat",[cf]:"fire-fst",[ff]:"fire-fst-compat",[lf]:"fire-vertex","fire-js":"fire-js",[uf]:"fire-js-all"};/**
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
 */const fn=new Map,hf=new Map,ms=new Map;function Nr(e,t){try{e.container.addComponent(t)}catch(n){Pe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rt(e){const t=e.name;if(ms.has(t))return Pe.debug(`There were multiple attempts to register component ${t}.`),!1;ms.set(t,e);for(const n of fn.values())Nr(n,e);for(const n of hf.values())Nr(n,e);return!0}function Fs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const pf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Le=new En("app","Firebase",pf);/**
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
 */class gf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}function io(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:gs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Le.create("bad-app-name",{appName:String(r)});if(n||(n=Zi()),!n)throw Le.create("no-options");const i=fn.get(r);if(i){if(us(n,i.options)&&us(s,i.config))return i;throw Le.create("duplicate-app",{appName:r})}const o=new wl(r);for(const c of ms.values())o.addComponent(c);const a=new gf(n,s,o);return fn.set(r,a),a}function mf(e=gs){const t=fn.get(e);if(!t&&e===gs&&Zi())return io();if(!t)throw Le.create("no-app",{appName:e});return t}function He(e,t,n){var s;let r=(s=df[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Pe.warn(a.join(" "));return}rt(new Ve(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const bf="firebase-heartbeat-database",yf=1,Lt="firebase-heartbeat-store";let Wn=null;function oo(){return Wn||(Wn=Sn(bf,yf,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Lt)}catch(n){console.warn(n)}}}}).catch(e=>{throw Le.create("idb-open",{originalErrorMessage:e.message})})),Wn}async function _f(e){try{const n=(await oo()).transaction(Lt),s=await n.objectStore(Lt).get(ao(e));return await n.done,s}catch(t){if(t instanceof bt)Pe.warn(t.message);else{const n=Le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Pe.warn(n.message)}}}async function kr(e,t){try{const s=(await oo()).transaction(Lt,"readwrite");await s.objectStore(Lt).put(t,ao(e)),await s.done}catch(n){if(n instanceof bt)Pe.warn(n.message);else{const s=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pe.warn(s.message)}}}function ao(e){return`${e.name}!${e.options.appId}`}/**
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
 */const vf=1024,wf=30*24*60*60*1e3;class Ef{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new If(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$r();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wf}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Pe.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$r(),{heartbeatsToSend:s,unsentEntries:r}=Sf(this._heartbeatsCache.heartbeats),i=Qi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pe.warn(n),""}}}function $r(){return new Date().toISOString().substring(0,10)}function Sf(e,t=vf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Br(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Br(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class If{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eo()?to().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _f(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return kr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return kr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Br(e){return Qi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Tf(e){rt(new Ve("platform-logger",t=>new Bl(t),"PRIVATE")),rt(new Ve("heartbeat",t=>new Ef(t),"PRIVATE")),He(ps,Rr,e),He(ps,Rr,"esm2017"),He("fire-js","")}Tf("");var Af="firebase",Cf="11.0.1";/**
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
 */He(Af,Cf,"app");const co="@firebase/installations",Ls="0.6.10";/**
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
 */const lo=1e4,fo=`w:${Ls}`,uo="FIS_v2",xf="https://firebaseinstallations.googleapis.com/v1",Of=60*60*1e3,Df="installations",Mf="Installations";/**
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
 */const Pf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},it=new En(Df,Mf,Pf);function ho(e){return e instanceof bt&&e.code.includes("request-failed")}/**
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
 */function po({projectId:e}){return`${xf}/projects/${e}/installations`}function go(e){return{token:e.token,requestStatus:2,expiresIn:Nf(e.expiresIn),creationTime:Date.now()}}async function mo(e,t){const s=(await t.json()).error;return it.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function bo({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Rf(e,{refreshToken:t}){const n=bo(e);return n.append("Authorization",kf(t)),n}async function yo(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Nf(e){return Number(e.replace("s","000"))}function kf(e){return`${uo} ${e}`}/**
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
 */async function $f({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=po(e),r=bo(e),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={fid:n,authVersion:uo,appId:e.appId,sdkVersion:fo},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await yo(()=>fetch(s,a));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:go(d.authToken)}}else throw await mo("Create Installation",c)}/**
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
 */function _o(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Bf(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ff=/^[cdef][\w-]{21}$/,bs="";function Lf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Hf(e);return Ff.test(n)?n:bs}catch{return bs}}function Hf(e){return Bf(e).substr(0,22)}/**
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
 */function In(e){return`${e.appName}!${e.appId}`}/**
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
 */const vo=new Map;function wo(e,t){const n=In(e);Eo(n,t),jf(n,t)}function Eo(e,t){const n=vo.get(e);if(n)for(const s of n)s(t)}function jf(e,t){const n=Vf();n&&n.postMessage({key:e,fid:t}),Uf()}let et=null;function Vf(){return!et&&"BroadcastChannel"in self&&(et=new BroadcastChannel("[Firebase] FID Change"),et.onmessage=e=>{Eo(e.data.key,e.data.fid)}),et}function Uf(){vo.size===0&&et&&(et.close(),et=null)}/**
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
 */const Kf="firebase-installations-database",Wf=1,ot="firebase-installations-store";let qn=null;function Hs(){return qn||(qn=Sn(Kf,Wf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ot)}}})),qn}async function un(e,t){const n=In(e),r=(await Hs()).transaction(ot,"readwrite"),i=r.objectStore(ot),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&wo(e,t.fid),t}async function So(e){const t=In(e),s=(await Hs()).transaction(ot,"readwrite");await s.objectStore(ot).delete(t),await s.done}async function Tn(e,t){const n=In(e),r=(await Hs()).transaction(ot,"readwrite"),i=r.objectStore(ot),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&wo(e,a.fid),a}/**
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
 */async function js(e){let t;const n=await Tn(e.appConfig,s=>{const r=qf(s),i=zf(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===bs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function qf(e){const t=e||{fid:Lf(),registrationStatus:0};return Io(t)}function zf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(it.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Gf(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Jf(e)}:{installationEntry:t}}async function Gf(e,t){try{const n=await $f(e,t);return un(e.appConfig,n)}catch(n){throw ho(n)&&n.customData.serverCode===409?await So(e.appConfig):await un(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Jf(e){let t=await Fr(e.appConfig);for(;t.registrationStatus===1;)await _o(100),t=await Fr(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await js(e);return s||n}return t}function Fr(e){return Tn(e,t=>{if(!t)throw it.create("installation-not-found");return Io(t)})}function Io(e){return Yf(e)?{fid:e.fid,registrationStatus:0}:e}function Yf(e){return e.registrationStatus===1&&e.registrationTime+lo<Date.now()}/**
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
 */async function Xf({appConfig:e,heartbeatServiceProvider:t},n){const s=Qf(e,n),r=Rf(e,n),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={installation:{sdkVersion:fo,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await yo(()=>fetch(s,a));if(c.ok){const d=await c.json();return go(d)}else throw await mo("Generate Auth Token",c)}function Qf(e,{fid:t}){return`${po(e)}/${t}/authTokens:generate`}/**
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
 */async function Vs(e,t=!1){let n;const s=await Tn(e.appConfig,i=>{if(!To(i))throw it.create("not-registered");const o=i.authToken;if(!t&&tu(o))return i;if(o.requestStatus===1)return n=Zf(e,t),i;{if(!navigator.onLine)throw it.create("app-offline");const a=su(i);return n=eu(e,a),a}});return n?await n:s.authToken}async function Zf(e,t){let n=await Lr(e.appConfig);for(;n.authToken.requestStatus===1;)await _o(100),n=await Lr(e.appConfig);const s=n.authToken;return s.requestStatus===0?Vs(e,t):s}function Lr(e){return Tn(e,t=>{if(!To(t))throw it.create("not-registered");const n=t.authToken;return ru(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function eu(e,t){try{const n=await Xf(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await un(e.appConfig,s),n}catch(n){if(ho(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await So(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await un(e.appConfig,s)}throw n}}function To(e){return e!==void 0&&e.registrationStatus===2}function tu(e){return e.requestStatus===2&&!nu(e)}function nu(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Of}function su(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ru(e){return e.requestStatus===1&&e.requestTime+lo<Date.now()}/**
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
 */async function iu(e){const t=e,{installationEntry:n,registrationPromise:s}=await js(t);return s?s.catch(console.error):Vs(t).catch(console.error),n.fid}/**
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
 */async function ou(e,t=!1){const n=e;return await au(n),(await Vs(n,t)).token}async function au(e){const{registrationPromise:t}=await js(e);t&&await t}/**
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
 */function cu(e){if(!e||!e.options)throw zn("App Configuration");if(!e.name)throw zn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw zn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function zn(e){return it.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ao="installations",lu="installations-internal",fu=e=>{const t=e.getProvider("app").getImmediate(),n=cu(t),s=Fs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},uu=e=>{const t=e.getProvider("app").getImmediate(),n=Fs(t,Ao).getImmediate();return{getId:()=>iu(n),getToken:r=>ou(n,r)}};function du(){rt(new Ve(Ao,fu,"PUBLIC")),rt(new Ve(lu,uu,"PRIVATE"))}du();He(co,Ls);He(co,Ls,"esm2017");/**
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
 */const hu="/firebase-messaging-sw.js",pu="/firebase-cloud-messaging-push-scope",Co="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",gu="https://fcmregistrations.googleapis.com/v1",xo="google.c.a.c_id",mu="google.c.a.c_l",bu="google.c.a.ts",yu="google.c.a.e";var Hr;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Hr||(Hr={}));/**
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
 */var Ht;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Ht||(Ht={}));/**
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
 */function xe(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _u(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),r=new Uint8Array(s.length);for(let i=0;i<s.length;++i)r[i]=s.charCodeAt(i);return r}/**
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
 */const Gn="fcm_token_details_db",vu=5,jr="fcm_token_object_Store";async function wu(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Gn))return null;let t=null;return(await Sn(Gn,vu,{upgrade:async(s,r,i,o)=>{var a;if(r<2||!s.objectStoreNames.contains(jr))return;const c=o.objectStore(jr),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(r===2){const u=d;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:xe(u.vapidKey)}}}else if(r===3){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:xe(u.auth),p256dh:xe(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:xe(u.vapidKey)}}}else if(r===4){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:xe(u.auth),p256dh:xe(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:xe(u.vapidKey)}}}}}})).close(),await Un(Gn),await Un("fcm_vapid_details_db"),await Un("undefined"),Eu(t)?t:null}function Eu(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Su="firebase-messaging-database",Iu=1,jt="firebase-messaging-store";let Jn=null;function Oo(){return Jn||(Jn=Sn(Su,Iu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(jt)}}})),Jn}async function Tu(e){const t=Do(e),s=await(await Oo()).transaction(jt).objectStore(jt).get(t);if(s)return s;{const r=await wu(e.appConfig.senderId);if(r)return await Us(e,r),r}}async function Us(e,t){const n=Do(e),r=(await Oo()).transaction(jt,"readwrite");return await r.objectStore(jt).put(t,n),await r.done,t}function Do({appConfig:e}){return e.appId}/**
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
 */const Au={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},oe=new En("messaging","Messaging",Au);/**
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
 */async function Cu(e,t){const n=await Ws(e),s=Mo(t),r={method:"POST",headers:n,body:JSON.stringify(s)};let i;try{i=await(await fetch(Ks(e.appConfig),r)).json()}catch(o){throw oe.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw oe.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw oe.create("token-subscribe-no-token");return i.token}async function xu(e,t){const n=await Ws(e),s=Mo(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(s)};let i;try{i=await(await fetch(`${Ks(e.appConfig)}/${t.token}`,r)).json()}catch(o){throw oe.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw oe.create("token-update-failed",{errorInfo:o})}if(!i.token)throw oe.create("token-update-no-token");return i.token}async function Ou(e,t){const s={method:"DELETE",headers:await Ws(e)};try{const i=await(await fetch(`${Ks(e.appConfig)}/${t}`,s)).json();if(i.error){const o=i.error.message;throw oe.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw oe.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function Ks({projectId:e}){return`${gu}/projects/${e}/registrations`}async function Ws({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Mo({p256dh:e,auth:t,endpoint:n,vapidKey:s}){const r={web:{endpoint:n,auth:t,p256dh:e}};return s!==Co&&(r.web.applicationPubKey=s),r}/**
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
 */const Du=7*24*60*60*1e3;async function Mu(e){const t=await Ru(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:xe(t.getKey("auth")),p256dh:xe(t.getKey("p256dh"))},s=await Tu(e.firebaseDependencies);if(s){if(Nu(s.subscriptionOptions,n))return Date.now()>=s.createTime+Du?Pu(e,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await Ou(e.firebaseDependencies,s.token)}catch(r){console.warn(r)}return Vr(e.firebaseDependencies,n)}else return Vr(e.firebaseDependencies,n)}async function Pu(e,t){try{const n=await xu(e.firebaseDependencies,t),s=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Us(e.firebaseDependencies,s),n}catch(n){throw n}}async function Vr(e,t){const s={token:await Cu(e,t),createTime:Date.now(),subscriptionOptions:t};return await Us(e,s),s.token}async function Ru(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_u(t)})}function Nu(e,t){const n=t.vapidKey===e.vapidKey,s=t.endpoint===e.endpoint,r=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&s&&r&&i}/**
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
 */function Ur(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return ku(t,e),$u(t,e),Bu(t,e),t}function ku(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const s=t.notification.body;s&&(e.notification.body=s);const r=t.notification.image;r&&(e.notification.image=r);const i=t.notification.icon;i&&(e.notification.icon=i)}function $u(e,t){t.data&&(e.data=t.data)}function Bu(e,t){var n,s,r,i,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(r=(s=t.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&r!==void 0?r:(i=t.notification)===null||i===void 0?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function Fu(e){return typeof e=="object"&&!!e&&xo in e}/**
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
 */function Lu(e){if(!e||!e.options)throw Yn("App Configuration Object");if(!e.name)throw Yn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const s of t)if(!n[s])throw Yn(s);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Yn(e){return oe.create("missing-app-config-values",{valueName:e})}/**
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
 */class Hu{constructor(t,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=Lu(t);this.firebaseDependencies={app:t,appConfig:r,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function ju(e){try{e.swRegistration=await navigator.serviceWorker.register(hu,{scope:pu}),e.swRegistration.update().catch(()=>{})}catch(t){throw oe.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Vu(e,t){if(!t&&!e.swRegistration&&await ju(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw oe.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Uu(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Co)}/**
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
 */async function Po(e,t){if(!navigator)throw oe.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw oe.create("permission-blocked");return await Uu(e,t==null?void 0:t.vapidKey),await Vu(e,t==null?void 0:t.serviceWorkerRegistration),Mu(e)}/**
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
 */async function Ku(e,t,n){const s=Wu(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[xo],message_name:n[mu],message_time:n[bu],message_device_time:Math.floor(Date.now()/1e3)})}function Wu(e){switch(e){case Ht.NOTIFICATION_CLICKED:return"notification_open";case Ht.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function qu(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Ht.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ur(n)):e.onMessageHandler.next(Ur(n)));const s=n.data;Fu(s)&&s[yu]==="1"&&await Ku(e,n.messageType,s)}const Kr="@firebase/messaging",Wr="0.12.13";/**
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
 */const zu=e=>{const t=new Hu(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>qu(t,n)),t},Gu=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:s=>Po(t,s)}};function Ju(){rt(new Ve("messaging",zu,"PUBLIC")),rt(new Ve("messaging-internal",Gu,"PRIVATE")),He(Kr,Wr),He(Kr,Wr,"esm2017")}/**
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
 */async function Yu(){try{await to()}catch{return!1}return typeof window<"u"&&eo()&&pl()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Xu(e=mf()){return Yu().then(t=>{if(!t)throw oe.create("unsupported-browser")},t=>{throw oe.create("indexed-db-unsupported")}),Fs(no(e),"messaging").getImmediate()}async function Qu(e,t){return e=no(e),Po(e,t)}Ju();const Zu={class:"wrapper"},ed={key:1},td={class:"form"},nd={class:"input"},sd={class:"input"},rd={class:"input"},id=["placeholder"],od={class:"input"},ad="BB9BiqPfKEWleyHgX8MnXSk6PGUV5m0ltzA58OFMYXKrpjK9MKx5MqLbxabjBB6qJY4Q9H_2Jdsc-z4I-n9uAnI",cd=Oa({__name:"App",setup(e){const t={apiKey:"AIzaSyCKcRQNdPtVIdYy-ZYLK0PvcYHhm85LRJk",authDomain:"notification-31228.firebaseapp.com",projectId:"notification-31228",storageBucket:"notification-31228.firebasestorage.app",messagingSenderId:"515089145210",appId:"1:515089145210:web:11ef75510e5735edc28ac3",measurementId:"G-4QVBB372GX"},n=Je(""),s=Je(""),r=Je(""),i=Je(""),o=async()=>{const k=await navigator.serviceWorker.register("/firebase-notification/firebase-messaging-sw.js"),_=io(t),M=Xu(_);n.value=await Qu(M,{vapidKey:ad,serviceWorkerRegistration:k})},a=Je(null),c=()=>{console.log("1"),Notification.permission==="granted"?(o(),a.value&&clearInterval(a.value)):Notification.requestPermission(),a.value||(a.value=setInterval(c,1e4))},d=()=>{n.value&&fetch("https://winter-dev.ru",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:i.value||n.value,text:r.value,title:s.value})})},u=()=>{navigator.clipboard.writeText(n.value)};Ti(()=>{c()});const p=Je([]),E=Je(""),T=()=>{if(!E.value)return alert("Пустое значение");p.value.push(E.value),E.value=""},N=()=>{n.value&&fetch("https://winter-dev.ru",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({isMany:!0,token:p.value,text:r.value,title:s.value})})};return(k,_)=>(St(),It("div",Zu,[n.value?(St(),It("div",{key:0,class:"token-text",onClick:_[0]||(_[0]=M=>u()),title:"СКОПИРОВАТЬ ТОКЕН"},[_[8]||(_[8]=qi(" Tокен устройства: ")),_[9]||(_[9]=R("br",null,null,-1)),R("strong",null,Qn(n.value),1)])):(St(),It("div",ed," Загрузка... ")),_[14]||(_[14]=R("br",null,null,-1)),_[15]||(_[15]=R("br",null,null,-1)),_[16]||(_[16]=R("br",null,null,-1)),_[17]||(_[17]=R("br",null,null,-1)),_[18]||(_[18]=R("br",null,null,-1)),R("div",td,[R("div",nd,[_[10]||(_[10]=R("label",{for:"title"},"Title",-1)),Qt(R("input",{placeholder:"шапка сообщения",id:"title","onUpdate:modelValue":_[1]||(_[1]=M=>s.value=M)},null,512),[[Zt,s.value]])]),R("div",sd,[_[11]||(_[11]=R("label",{for:"text"},"Text",-1)),Qt(R("textarea",{placeholder:"тело сообщения",id:"text","onUpdate:modelValue":_[2]||(_[2]=M=>r.value=M)},null,512),[[Zt,r.value]])]),R("div",rd,[_[12]||(_[12]=R("label",{for:"token"},"Token",-1)),Qt(R("textarea",{placeholder:n.value,id:"token","onUpdate:modelValue":_[3]||(_[3]=M=>i.value=M)},null,8,id),[[Zt,i.value]])]),R("button",{class:"button-send",onClick:_[4]||(_[4]=M=>d())}," Отправить сообщение ")]),_[19]||(_[19]=R("br",null,null,-1)),_[20]||(_[20]=R("br",null,null,-1)),_[21]||(_[21]=R("br",null,null,-1)),_[22]||(_[22]=R("br",null,null,-1)),_[23]||(_[23]=R("br",null,null,-1)),_[24]||(_[24]=R("br",null,null,-1)),_[25]||(_[25]=R("br",null,null,-1)),_[26]||(_[26]=R("br",null,null,-1)),_[27]||(_[27]=R("br",null,null,-1)),_[28]||(_[28]=R("br",null,null,-1)),R("ol",null,[(St(!0),It(Ee,null,Va(p.value,(M,W)=>(St(),It("li",{key:W},Qn(M),1))),128))]),R("div",od,[_[13]||(_[13]=R("label",{for:"token2"},"Токен",-1)),Qt(R("textarea",{id:"token2","onUpdate:modelValue":_[5]||(_[5]=M=>E.value=M)},null,512),[[Zt,E.value]])]),_[29]||(_[29]=R("br",null,null,-1)),R("button",{class:"button-send",onClick:_[6]||(_[6]=M=>T())}," Добавить "),_[30]||(_[30]=R("br",null,null,-1)),R("button",{class:"button-send",onClick:_[7]||(_[7]=M=>N())}," Отправить ")]))}}),ld=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},fd=ld(cd,[["__scopeId","data-v-6037c249"]]);tl(fd).mount("#app");
