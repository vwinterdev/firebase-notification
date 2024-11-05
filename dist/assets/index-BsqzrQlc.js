(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ms(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const k={},ft=[],Se=()=>{},Bo=()=>!1,cn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),bs=e=>e.startsWith("onUpdate:"),Y=Object.assign,_s=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$o=Object.prototype.hasOwnProperty,B=(e,t)=>$o.call(e,t),O=Array.isArray,ut=e=>ln(e)==="[object Map]",Wr=e=>ln(e)==="[object Set]",D=e=>typeof e=="function",J=e=>typeof e=="string",Ue=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",qr=e=>(q(e)||D(e))&&D(e.then)&&D(e.catch),zr=Object.prototype.toString,ln=e=>zr.call(e),Fo=e=>ln(e).slice(8,-1),Gr=e=>ln(e)==="[object Object]",ys=e=>J(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,It=ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ko=/-(\w)/g,je=fn(e=>e.replace(ko,(t,n)=>n?n.toUpperCase():"")),Lo=/\B([A-Z])/g,ot=fn(e=>e.replace(Lo,"-$1").toLowerCase()),Jr=fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sn=fn(e=>e?`on${Jr(e)}`:""),ke=(e,t)=>!Object.is(e,t),Yt=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Yr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Yn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Qs;const un=()=>Qs||(Qs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ws(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=J(s)?Uo(s):ws(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(J(e)||q(e))return e}const Ho=/;(?![^(]*\))/g,jo=/:([^]+)/,Vo=/\/\*[^]*?\*\//g;function Uo(e){const t={};return e.replace(Vo,"").split(Ho).forEach(n=>{if(n){const s=n.split(jo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function vs(e){let t="";if(J(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const s=vs(e[n]);s&&(t+=s+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ko="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wo=ms(Ko);function Xr(e){return!!e||e===""}const Qr=e=>!!(e&&e.__v_isRef===!0),Zr=e=>J(e)?e:e==null?"":O(e)||q(e)&&(e.toString===zr||!D(e.toString))?Qr(e)?Zr(e.value):JSON.stringify(e,ei,2):String(e),ei=(e,t)=>Qr(t)?ei(e,t.value):ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[In(s,i)+" =>"]=r,n),{})}:Wr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>In(n))}:Ue(t)?In(t):q(t)&&!O(t)&&!Gr(t)?String(t):t,In=(e,t="")=>{var n;return Ue(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class qo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function zo(){return ue}let j;const Tn=new WeakSet;class ti{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tn.has(this)&&(Tn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||si(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zs(this),ri(this);const t=j,n=ge;j=this,ge=!0;try{return this.fn()}finally{ii(this),j=t,ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Is(t);this.deps=this.depsTail=void 0,Zs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xn(this)&&this.run()}get dirty(){return Xn(this)}}let ni=0,Tt,At;function si(e,t=!1){if(e.flags|=8,t){e.next=At,At=e;return}e.next=Tt,Tt=e}function Es(){ni++}function Ss(){if(--ni>0)return;if(At){let t=At;for(At=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Tt;){let t=Tt;for(Tt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function ri(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ii(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Is(s),Go(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Xn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(oi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function oi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Mt))return;e.globalVersion=Mt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Xn(e)){e.flags&=-3;return}const n=j,s=ge;j=e,ge=!0;try{ri(e);const r=e.fn(e._value);(t.version===0||ke(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{j=n,ge=s,ii(e),e.flags&=-3}}function Is(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Is(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Go(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ge=!0;const ai=[];function Ke(){ai.push(ge),ge=!1}function We(){const e=ai.pop();ge=e===void 0?!0:e}function Zs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=j;j=void 0;try{t()}finally{j=n}}}let Mt=0;class Jo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ts{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!j||!ge||j===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==j)n=this.activeLink=new Jo(j,this),j.deps?(n.prevDep=j.depsTail,j.depsTail.nextDep=n,j.depsTail=n):j.deps=j.depsTail=n,ci(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=j.depsTail,n.nextDep=void 0,j.depsTail.nextDep=n,j.depsTail=n,j.deps===n&&(j.deps=s)}return n}trigger(t){this.version++,Mt++,this.notify(t)}notify(t){Es();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ss()}}}function ci(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)ci(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Qn=new WeakMap,et=Symbol(""),Zn=Symbol(""),Pt=Symbol("");function Q(e,t,n){if(ge&&j){let s=Qn.get(e);s||Qn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Ts),r.map=s,r.key=n),r.track()}}function Oe(e,t,n,s,r,i){const o=Qn.get(e);if(!o){Mt++;return}const a=c=>{c&&c.trigger()};if(Es(),t==="clear")o.forEach(a);else{const c=O(e),d=c&&ys(n);if(c&&n==="length"){const u=Number(s);o.forEach((p,g)=>{(g==="length"||g===Pt||!Ue(g)&&g>=u)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(Pt)),t){case"add":c?d&&a(o.get("length")):(a(o.get(et)),ut(e)&&a(o.get(Zn)));break;case"delete":c||(a(o.get(et)),ut(e)&&a(o.get(Zn)));break;case"set":ut(e)&&a(o.get(et));break}}Ss()}function at(e){const t=N(e);return t===e?t:(Q(t,"iterate",Pt),me(e)?t:t.map(se))}function As(e){return Q(e=N(e),"iterate",Pt),e}const Yo={__proto__:null,[Symbol.iterator](){return An(this,Symbol.iterator,se)},concat(...e){return at(this).concat(...e.map(t=>O(t)?at(t):t))},entries(){return An(this,"entries",e=>(e[1]=se(e[1]),e))},every(e,t){return Te(this,"every",e,t,void 0,arguments)},filter(e,t){return Te(this,"filter",e,t,n=>n.map(se),arguments)},find(e,t){return Te(this,"find",e,t,se,arguments)},findIndex(e,t){return Te(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Te(this,"findLast",e,t,se,arguments)},findLastIndex(e,t){return Te(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Te(this,"forEach",e,t,void 0,arguments)},includes(...e){return Cn(this,"includes",e)},indexOf(...e){return Cn(this,"indexOf",e)},join(e){return at(this).join(e)},lastIndexOf(...e){return Cn(this,"lastIndexOf",e)},map(e,t){return Te(this,"map",e,t,void 0,arguments)},pop(){return wt(this,"pop")},push(...e){return wt(this,"push",e)},reduce(e,...t){return er(this,"reduce",e,t)},reduceRight(e,...t){return er(this,"reduceRight",e,t)},shift(){return wt(this,"shift")},some(e,t){return Te(this,"some",e,t,void 0,arguments)},splice(...e){return wt(this,"splice",e)},toReversed(){return at(this).toReversed()},toSorted(e){return at(this).toSorted(e)},toSpliced(...e){return at(this).toSpliced(...e)},unshift(...e){return wt(this,"unshift",e)},values(){return An(this,"values",se)}};function An(e,t,n){const s=As(e),r=s[t]();return s!==e&&!me(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Xo=Array.prototype;function Te(e,t,n,s,r,i){const o=As(e),a=o!==e&&!me(e),c=o[t];if(c!==Xo[t]){const p=c.apply(e,i);return a?se(p):p}let d=n;o!==e&&(a?d=function(p,g){return n.call(this,se(p),g,e)}:n.length>2&&(d=function(p,g){return n.call(this,p,g,e)}));const u=c.call(o,d,s);return a&&r?r(u):u}function er(e,t,n,s){const r=As(e);let i=n;return r!==e&&(me(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,se(a),c,e)}),r[t](i,...s)}function Cn(e,t,n){const s=N(e);Q(s,"iterate",Pt);const r=s[t](...n);return(r===-1||r===!1)&&Ds(n[0])?(n[0]=N(n[0]),s[t](...n)):r}function wt(e,t,n=[]){Ke(),Es();const s=N(e)[t].apply(e,n);return Ss(),We(),s}const Qo=ms("__proto__,__v_isRef,__isVue"),li=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ue));function Zo(e){Ue(e)||(e=String(e));const t=N(this);return Q(t,"has",e),t.hasOwnProperty(e)}class fi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?la:pi:i?hi:di).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=O(t);if(!r){let c;if(o&&(c=Yo[n]))return c;if(n==="hasOwnProperty")return Zo}const a=Reflect.get(t,n,Z(t)?t:s);return(Ue(n)?li.has(n):Qo(n))||(r||Q(t,"get",n),i)?a:Z(a)?o&&ys(n)?a:a.value:q(a)?r?gi(a):xs(a):a}}class ui extends fi{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const c=nt(i);if(!me(s)&&!nt(s)&&(i=N(i),s=N(s)),!O(t)&&Z(i)&&!Z(s))return c?!1:(i.value=s,!0)}const o=O(t)&&ys(n)?Number(n)<t.length:B(t,n),a=Reflect.set(t,n,s,Z(t)?t:r);return t===N(r)&&(o?ke(s,i)&&Oe(t,"set",n,s):Oe(t,"add",n,s)),a}deleteProperty(t,n){const s=B(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Oe(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ue(n)||!li.has(n))&&Q(t,"has",n),s}ownKeys(t){return Q(t,"iterate",O(t)?"length":et),Reflect.ownKeys(t)}}class ea extends fi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ta=new ui,na=new ea,sa=new ui(!0);const es=e=>e,zt=e=>Reflect.getPrototypeOf(e);function ra(e,t,n){return function(...s){const r=this.__v_raw,i=N(r),o=ut(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,d=r[e](...s),u=n?es:t?ts:se;return!t&&Q(i,"iterate",c?Zn:et),{next(){const{value:p,done:g}=d.next();return g?{value:p,done:g}:{value:a?[u(p[0]),u(p[1])]:u(p),done:g}},[Symbol.iterator](){return this}}}}function Gt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ia(e,t){const n={get(r){const i=this.__v_raw,o=N(i),a=N(r);e||(ke(r,a)&&Q(o,"get",r),Q(o,"get",a));const{has:c}=zt(o),d=t?es:e?ts:se;if(c.call(o,r))return d(i.get(r));if(c.call(o,a))return d(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Q(N(r),"iterate",et),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=N(i),a=N(r);return e||(ke(r,a)&&Q(o,"has",r),Q(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=N(a),d=t?es:e?ts:se;return!e&&Q(c,"iterate",et),a.forEach((u,p)=>r.call(i,d(u),d(p),o))}};return Y(n,e?{add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear")}:{add(r){!t&&!me(r)&&!nt(r)&&(r=N(r));const i=N(this);return zt(i).has.call(i,r)||(i.add(r),Oe(i,"add",r,r)),this},set(r,i){!t&&!me(i)&&!nt(i)&&(i=N(i));const o=N(this),{has:a,get:c}=zt(o);let d=a.call(o,r);d||(r=N(r),d=a.call(o,r));const u=c.call(o,r);return o.set(r,i),d?ke(i,u)&&Oe(o,"set",r,i):Oe(o,"add",r,i),this},delete(r){const i=N(this),{has:o,get:a}=zt(i);let c=o.call(i,r);c||(r=N(r),c=o.call(i,r)),a&&a.call(i,r);const d=i.delete(r);return c&&Oe(i,"delete",r,void 0),d},clear(){const r=N(this),i=r.size!==0,o=r.clear();return i&&Oe(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ra(r,e,t)}),n}function Cs(e,t){const n=ia(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(B(n,r)&&r in s?n:s,r,i)}const oa={get:Cs(!1,!1)},aa={get:Cs(!1,!0)},ca={get:Cs(!0,!1)};const di=new WeakMap,hi=new WeakMap,pi=new WeakMap,la=new WeakMap;function fa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ua(e){return e.__v_skip||!Object.isExtensible(e)?0:fa(Fo(e))}function xs(e){return nt(e)?e:Os(e,!1,ta,oa,di)}function da(e){return Os(e,!1,sa,aa,hi)}function gi(e){return Os(e,!0,na,ca,pi)}function Os(e,t,n,s,r){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=ua(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function Ct(e){return nt(e)?Ct(e.__v_raw):!!(e&&e.__v_isReactive)}function nt(e){return!!(e&&e.__v_isReadonly)}function me(e){return!!(e&&e.__v_isShallow)}function Ds(e){return e?!!e.__v_raw:!1}function N(e){const t=e&&e.__v_raw;return t?N(t):e}function ha(e){return!B(e,"__v_skip")&&Object.isExtensible(e)&&Yr(e,"__v_skip",!0),e}const se=e=>q(e)?xs(e):e,ts=e=>q(e)?gi(e):e;function Z(e){return e?e.__v_isRef===!0:!1}function vt(e){return pa(e,!1)}function pa(e,t){return Z(e)?e:new ga(e,t)}class ga{constructor(t,n){this.dep=new Ts,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:N(t),this._value=n?t:se(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||me(t)||nt(t);t=s?t:N(t),ke(t,n)&&(this._rawValue=t,this._value=s?t:se(t),this.dep.trigger())}}function ma(e){return Z(e)?e.value:e}const ba={get:(e,t,n)=>t==="__v_raw"?e:ma(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Z(r)&&!Z(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function mi(e){return Ct(e)?e:new Proxy(e,ba)}class _a{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ts(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return si(this,!0),!0}get value(){const t=this.dep.track();return oi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ya(e,t,n=!1){let s,r;return D(e)?s=e:(s=e.get,r=e.set),new _a(s,r,n)}const Jt={},en=new WeakMap;let Xe;function wa(e,t=!1,n=Xe){if(n){let s=en.get(n);s||en.set(n,s=[]),s.push(e)}}function va(e,t,n=k){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,d=C=>r?C:me(C)||r===!1||r===0?De(C,1):De(C);let u,p,g,E,M=!1,R=!1;if(Z(e)?(p=()=>e.value,M=me(e)):Ct(e)?(p=()=>d(e),M=!0):O(e)?(R=!0,M=e.some(C=>Ct(C)||me(C)),p=()=>e.map(C=>{if(Z(C))return C.value;if(Ct(C))return d(C);if(D(C))return c?c(C,2):C()})):D(e)?t?p=c?()=>c(e,2):e:p=()=>{if(g){Ke();try{g()}finally{We()}}const C=Xe;Xe=u;try{return c?c(e,3,[E]):e(E)}finally{Xe=C}}:p=Se,t&&r){const C=p,G=r===!0?1/0:r;p=()=>De(C(),G)}const ee=zo(),F=()=>{u.stop(),ee&&_s(ee.effects,u)};if(i&&t){const C=t;t=(...G)=>{C(...G),F()}}let K=R?new Array(e.length).fill(Jt):Jt;const W=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(t){const G=u.run();if(r||M||(R?G.some((Ne,be)=>ke(Ne,K[be])):ke(G,K))){g&&g();const Ne=Xe;Xe=u;try{const be=[G,K===Jt?void 0:R&&K[0]===Jt?[]:K,E];c?c(t,3,be):t(...be),K=G}finally{Xe=Ne}}}else u.run()};return a&&a(W),u=new ti(p),u.scheduler=o?()=>o(W,!1):W,E=C=>wa(C,!1,u),g=u.onStop=()=>{const C=en.get(u);if(C){if(c)c(C,4);else for(const G of C)G();en.delete(u)}},t?s?W(!0):K=u.run():o?o(W.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function De(e,t=1/0,n){if(t<=0||!q(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Z(e))De(e.value,t,n);else if(O(e))for(let s=0;s<e.length;s++)De(e[s],t,n);else if(Wr(e)||ut(e))e.forEach(s=>{De(s,t,n)});else if(Gr(e)){for(const s in e)De(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&De(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ht(e,t,n,s){try{return s?e(...s):e()}catch(r){dn(r,t,n)}}function Ie(e,t,n,s){if(D(e)){const r=Ht(e,t,n,s);return r&&qr(r)&&r.catch(i=>{dn(i,t,n)}),r}if(O(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Ie(e[i],t,n,s));return r}}function dn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||k;if(t){let a=t.parent;const c=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,c,d)===!1)return}a=a.parent}if(i){Ke(),Ht(i,null,10,[e,c,d]),We();return}}Ea(e,n,r,s,o)}function Ea(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const re=[];let ve=-1;const dt=[];let $e=null,ct=0;const bi=Promise.resolve();let tn=null;function Sa(e){const t=tn||bi;return e?t.then(this?e.bind(this):e):t}function Ia(e){let t=ve+1,n=re.length;for(;t<n;){const s=t+n>>>1,r=re[s],i=Rt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Ms(e){if(!(e.flags&1)){const t=Rt(e),n=re[re.length-1];!n||!(e.flags&2)&&t>=Rt(n)?re.push(e):re.splice(Ia(t),0,e),e.flags|=1,_i()}}function _i(){tn||(tn=bi.then(wi))}function Ta(e){O(e)?dt.push(...e):$e&&e.id===-1?$e.splice(ct+1,0,e):e.flags&1||(dt.push(e),e.flags|=1),_i()}function tr(e,t,n=ve+1){for(;n<re.length;n++){const s=re[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;re.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function yi(e){if(dt.length){const t=[...new Set(dt)].sort((n,s)=>Rt(n)-Rt(s));if(dt.length=0,$e){$e.push(...t);return}for($e=t,ct=0;ct<$e.length;ct++){const n=$e[ct];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$e=null,ct=0}}const Rt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wi(e){try{for(ve=0;ve<re.length;ve++){const t=re[ve];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ht(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ve<re.length;ve++){const t=re[ve];t&&(t.flags&=-2)}ve=-1,re.length=0,yi(),tn=null,(re.length||dt.length)&&wi()}}let he=null,vi=null;function nn(e){const t=he;return he=e,vi=e&&e.type.__scopeId||null,t}function Aa(e,t=he,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&lr(-1);const i=nn(t);let o;try{o=e(...r)}finally{nn(i),s._d&&lr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xn(e,t){if(he===null)return e;const n=mn(he),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,c=k]=t[r];i&&(D(i)&&(i={mounted:i,updated:i}),i.deep&&De(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Je(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ke(),Ie(c,n,8,[e.el,a,e,t]),We())}}const Ca=Symbol("_vte"),xa=e=>e.__isTeleport;function Ps(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ps(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Oa(e,t){return D(e)?Y({name:e.name},t,{setup:e}):e}function Ei(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ns(e,t,n,s,r=!1){if(O(e)){e.forEach((M,R)=>ns(M,t&&(O(t)?t[R]:t),n,s,r));return}if(xt(s)&&!r)return;const i=s.shapeFlag&4?mn(s.component):s.el,o=r?null:i,{i:a,r:c}=e,d=t&&t.r,u=a.refs===k?a.refs={}:a.refs,p=a.setupState,g=N(p),E=p===k?()=>!1:M=>B(g,M);if(d!=null&&d!==c&&(J(d)?(u[d]=null,E(d)&&(p[d]=null)):Z(d)&&(d.value=null)),D(c))Ht(c,a,12,[o,u]);else{const M=J(c),R=Z(c);if(M||R){const ee=()=>{if(e.f){const F=M?E(c)?p[c]:u[c]:c.value;r?O(F)&&_s(F,i):O(F)?F.includes(i)||F.push(i):M?(u[c]=[i],E(c)&&(p[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else M?(u[c]=o,E(c)&&(p[c]=o)):R&&(c.value=o,e.k&&(u[e.k]=o))};o?(ee.id=-1,fe(ee,n)):ee()}}}un().requestIdleCallback;un().cancelIdleCallback;const xt=e=>!!e.type.__asyncLoader,Si=e=>e.type.__isKeepAlive;function Da(e,t){Ii(e,"a",t)}function Ma(e,t){Ii(e,"da",t)}function Ii(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Si(r.parent.vnode)&&Pa(s,t,n,r),r=r.parent}}function Pa(e,t,n,s){const r=hn(t,e,s,!0);Ai(()=>{_s(s[t],r)},n)}function hn(e,t,n=ie,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Ke();const a=jt(n),c=Ie(t,n,e,o);return a(),We(),c});return s?r.unshift(i):r.push(i),i}}const Re=e=>(t,n=ie)=>{(!$t||e==="sp")&&hn(e,(...s)=>t(...s),n)},Ra=Re("bm"),Ti=Re("m"),Na=Re("bu"),Ba=Re("u"),$a=Re("bum"),Ai=Re("um"),Fa=Re("sp"),ka=Re("rtg"),La=Re("rtc");function Ha(e,t=ie){hn("ec",e,t)}const ja=Symbol.for("v-ndc"),ss=e=>e?zi(e)?mn(e):ss(e.parent):null,Ot=Y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ss(e.parent),$root:e=>ss(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Rs(e),$forceUpdate:e=>e.f||(e.f=()=>{Ms(e.update)}),$nextTick:e=>e.n||(e.n=Sa.bind(e.proxy)),$watch:e=>lc.bind(e)}),On=(e,t)=>e!==k&&!e.__isScriptSetup&&B(e,t),Va={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let d;if(t[0]!=="$"){const E=o[t];if(E!==void 0)switch(E){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(On(s,t))return o[t]=1,s[t];if(r!==k&&B(r,t))return o[t]=2,r[t];if((d=e.propsOptions[0])&&B(d,t))return o[t]=3,i[t];if(n!==k&&B(n,t))return o[t]=4,n[t];rs&&(o[t]=0)}}const u=Ot[t];let p,g;if(u)return t==="$attrs"&&Q(e.attrs,"get",""),u(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==k&&B(n,t))return o[t]=4,n[t];if(g=c.config.globalProperties,B(g,t))return g[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return On(r,t)?(r[t]=n,!0):s!==k&&B(s,t)?(s[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==k&&B(e,o)||On(t,o)||(a=i[0])&&B(a,o)||B(s,o)||B(Ot,o)||B(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function nr(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let rs=!0;function Ua(e){const t=Rs(e),n=e.proxy,s=e.ctx;rs=!1,t.beforeCreate&&sr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:d,created:u,beforeMount:p,mounted:g,beforeUpdate:E,updated:M,activated:R,deactivated:ee,beforeDestroy:F,beforeUnmount:K,destroyed:W,unmounted:C,render:G,renderTracked:Ne,renderTriggered:be,errorCaptured:Be,serverPrefetch:Vt,expose:qe,inheritAttrs:mt,components:Ut,directives:Kt,filters:vn}=t;if(d&&Ka(d,s,null),o)for(const U in o){const L=o[U];D(L)&&(s[U]=L.bind(n))}if(r){const U=r.call(n,n);q(U)&&(e.data=xs(U))}if(rs=!0,i)for(const U in i){const L=i[U],ze=D(L)?L.bind(n,n):D(L.get)?L.get.bind(n,n):Se,Wt=!D(L)&&D(L.set)?L.set.bind(n):Se,Ge=Dc({get:ze,set:Wt});Object.defineProperty(s,U,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:_e=>Ge.value=_e})}if(a)for(const U in a)Ci(a[U],s,n,U);if(c){const U=D(c)?c.call(n):c;Reflect.ownKeys(U).forEach(L=>{Ya(L,U[L])})}u&&sr(u,e,"c");function te(U,L){O(L)?L.forEach(ze=>U(ze.bind(n))):L&&U(L.bind(n))}if(te(Ra,p),te(Ti,g),te(Na,E),te(Ba,M),te(Da,R),te(Ma,ee),te(Ha,Be),te(La,Ne),te(ka,be),te($a,K),te(Ai,C),te(Fa,Vt),O(qe))if(qe.length){const U=e.exposed||(e.exposed={});qe.forEach(L=>{Object.defineProperty(U,L,{get:()=>n[L],set:ze=>n[L]=ze})})}else e.exposed||(e.exposed={});G&&e.render===Se&&(e.render=G),mt!=null&&(e.inheritAttrs=mt),Ut&&(e.components=Ut),Kt&&(e.directives=Kt),Vt&&Ei(e)}function Ka(e,t,n=Se){O(e)&&(e=is(e));for(const s in e){const r=e[s];let i;q(r)?"default"in r?i=Xt(r.from||s,r.default,!0):i=Xt(r.from||s):i=Xt(r),Z(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function sr(e,t,n){Ie(O(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ci(e,t,n,s){let r=s.includes(".")?ji(n,s):()=>n[s];if(J(e)){const i=t[e];D(i)&&Mn(r,i)}else if(D(e))Mn(r,e.bind(n));else if(q(e))if(O(e))e.forEach(i=>Ci(i,t,n,s));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Mn(r,i,e)}}function Rs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(d=>sn(c,d,o,!0)),sn(c,t,o)),q(t)&&i.set(t,c),c}function sn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&sn(e,i,n,!0),r&&r.forEach(o=>sn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Wa[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Wa={data:rr,props:ir,emits:ir,methods:St,computed:St,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:St,directives:St,watch:za,provide:rr,inject:qa};function rr(e,t){return t?e?function(){return Y(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function qa(e,t){return St(is(e),is(t))}function is(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function St(e,t){return e?Y(Object.create(null),e,t):t}function ir(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:Y(Object.create(null),nr(e),nr(t??{})):t}function za(e,t){if(!e)return t;if(!t)return e;const n=Y(Object.create(null),e);for(const s in t)n[s]=ne(e[s],t[s]);return n}function xi(){return{app:null,config:{isNativeTag:Bo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ga=0;function Ja(e,t){return function(s,r=null){D(s)||(s=Y({},s)),r!=null&&!q(r)&&(r=null);const i=xi(),o=new WeakSet,a=[];let c=!1;const d=i.app={_uid:Ga++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Mc,get config(){return i.config},set config(u){},use(u,...p){return o.has(u)||(u&&D(u.install)?(o.add(u),u.install(d,...p)):D(u)&&(o.add(u),u(d,...p))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,p){return p?(i.components[u]=p,d):i.components[u]},directive(u,p){return p?(i.directives[u]=p,d):i.directives[u]},mount(u,p,g){if(!c){const E=d._ceVNode||tt(s,r);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&t?t(E,u):e(E,u,g),c=!0,d._container=u,u.__vue_app__=d,mn(E.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ie(a,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return i.provides[u]=p,d},runWithContext(u){const p=ht;ht=d;try{return u()}finally{ht=p}}};return d}}let ht=null;function Ya(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function Xt(e,t,n=!1){const s=ie||he;if(s||ht){const r=ht?ht._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&D(t)?t.call(s&&s.proxy):t}}const Oi={},Di=()=>Object.create(Oi),Mi=e=>Object.getPrototypeOf(e)===Oi;function Xa(e,t,n,s=!1){const r={},i=Di();e.propsDefaults=Object.create(null),Pi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:da(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Qa(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=N(r),[c]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(pn(e.emitsOptions,g))continue;const E=t[g];if(c)if(B(i,g))E!==i[g]&&(i[g]=E,d=!0);else{const M=je(g);r[M]=os(c,a,M,E,e,!1)}else E!==i[g]&&(i[g]=E,d=!0)}}}else{Pi(e,t,r,i)&&(d=!0);let u;for(const p in a)(!t||!B(t,p)&&((u=ot(p))===p||!B(t,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(r[p]=os(c,a,p,void 0,e,!0)):delete r[p]);if(i!==a)for(const p in i)(!t||!B(t,p))&&(delete i[p],d=!0)}d&&Oe(e.attrs,"set","")}function Pi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(It(c))continue;const d=t[c];let u;r&&B(r,u=je(c))?!i||!i.includes(u)?n[u]=d:(a||(a={}))[u]=d:pn(e.emitsOptions,c)||(!(c in s)||d!==s[c])&&(s[c]=d,o=!0)}if(i){const c=N(n),d=a||k;for(let u=0;u<i.length;u++){const p=i[u];n[p]=os(r,c,p,d[p],e,!B(d,p))}}return o}function os(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=B(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&D(c)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const u=jt(r);s=d[n]=c.call(null,t),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ot(n))&&(s=!0))}return s}const Za=new WeakMap;function Ri(e,t,n=!1){const s=n?Za:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!D(e)){const u=p=>{c=!0;const[g,E]=Ri(p,t,!0);Y(o,g),E&&a.push(...E)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return q(e)&&s.set(e,ft),ft;if(O(i))for(let u=0;u<i.length;u++){const p=je(i[u]);or(p)&&(o[p]=k)}else if(i)for(const u in i){const p=je(u);if(or(p)){const g=i[u],E=o[p]=O(g)||D(g)?{type:g}:Y({},g),M=E.type;let R=!1,ee=!0;if(O(M))for(let F=0;F<M.length;++F){const K=M[F],W=D(K)&&K.name;if(W==="Boolean"){R=!0;break}else W==="String"&&(ee=!1)}else R=D(M)&&M.name==="Boolean";E[0]=R,E[1]=ee,(R||B(E,"default"))&&a.push(p)}}const d=[o,a];return q(e)&&s.set(e,d),d}function or(e){return e[0]!=="$"&&!It(e)}const Ni=e=>e[0]==="_"||e==="$stable",Ns=e=>O(e)?e.map(Ee):[Ee(e)],ec=(e,t,n)=>{if(t._n)return t;const s=Aa((...r)=>Ns(t(...r)),n);return s._c=!1,s},Bi=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Ni(r))continue;const i=e[r];if(D(i))t[r]=ec(r,i,s);else if(i!=null){const o=Ns(i);t[r]=()=>o}}},$i=(e,t)=>{const n=Ns(t);e.slots.default=()=>n},Fi=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},tc=(e,t,n)=>{const s=e.slots=Di();if(e.vnode.shapeFlag&32){const r=t._;r?(Fi(s,t,n),n&&Yr(s,"_",r,!0)):Bi(t,s)}else t&&$i(e,t)},nc=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=k;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Fi(r,t,n):(i=!t.$stable,Bi(t,r)),o=t}else t&&($i(e,t),o={default:1});if(i)for(const a in r)!Ni(a)&&o[a]==null&&delete r[a]},fe=mc;function sc(e){return rc(e)}function rc(e,t){const n=un();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:d,setElementText:u,parentNode:p,nextSibling:g,setScopeId:E=Se,insertStaticContent:M}=e,R=(l,f,h,_=null,m=null,b=null,S=void 0,v=null,w=!!f.dynamicChildren)=>{if(l===f)return;l&&!Et(l,f)&&(_=qt(l),_e(l,m,b,!0),l=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:y,ref:A,shapeFlag:I}=f;switch(y){case gn:ee(l,f,h,_);break;case Nt:F(l,f,h,_);break;case Rn:l==null&&K(f,h,_,S);break;case xe:Ut(l,f,h,_,m,b,S,v,w);break;default:I&1?G(l,f,h,_,m,b,S,v,w):I&6?Kt(l,f,h,_,m,b,S,v,w):(I&64||I&128)&&y.process(l,f,h,_,m,b,S,v,w,_t)}A!=null&&m&&ns(A,l&&l.ref,b,f||l,!f)},ee=(l,f,h,_)=>{if(l==null)s(f.el=a(f.children),h,_);else{const m=f.el=l.el;f.children!==l.children&&d(m,f.children)}},F=(l,f,h,_)=>{l==null?s(f.el=c(f.children||""),h,_):f.el=l.el},K=(l,f,h,_)=>{[l.el,l.anchor]=M(l.children,f,h,_,l.el,l.anchor)},W=({el:l,anchor:f},h,_)=>{let m;for(;l&&l!==f;)m=g(l),s(l,h,_),l=m;s(f,h,_)},C=({el:l,anchor:f})=>{let h;for(;l&&l!==f;)h=g(l),r(l),l=h;r(f)},G=(l,f,h,_,m,b,S,v,w)=>{f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),l==null?Ne(f,h,_,m,b,S,v,w):Vt(l,f,m,b,S,v,w)},Ne=(l,f,h,_,m,b,S,v)=>{let w,y;const{props:A,shapeFlag:I,transition:T,dirs:x}=l;if(w=l.el=o(l.type,b,A&&A.is,A),I&8?u(w,l.children):I&16&&Be(l.children,w,null,_,m,Dn(l,b),S,v),x&&Je(l,null,_,"created"),be(w,l,l.scopeId,S,_),A){for(const H in A)H!=="value"&&!It(H)&&i(w,H,null,A[H],b,_);"value"in A&&i(w,"value",null,A.value,b),(y=A.onVnodeBeforeMount)&&we(y,_,l)}x&&Je(l,null,_,"beforeMount");const P=ic(m,T);P&&T.beforeEnter(w),s(w,f,h),((y=A&&A.onVnodeMounted)||P||x)&&fe(()=>{y&&we(y,_,l),P&&T.enter(w),x&&Je(l,null,_,"mounted")},m)},be=(l,f,h,_,m)=>{if(h&&E(l,h),_)for(let b=0;b<_.length;b++)E(l,_[b]);if(m){let b=m.subTree;if(f===b||Ui(b.type)&&(b.ssContent===f||b.ssFallback===f)){const S=m.vnode;be(l,S,S.scopeId,S.slotScopeIds,m.parent)}}},Be=(l,f,h,_,m,b,S,v,w=0)=>{for(let y=w;y<l.length;y++){const A=l[y]=v?Fe(l[y]):Ee(l[y]);R(null,A,f,h,_,m,b,S,v)}},Vt=(l,f,h,_,m,b,S)=>{const v=f.el=l.el;let{patchFlag:w,dynamicChildren:y,dirs:A}=f;w|=l.patchFlag&16;const I=l.props||k,T=f.props||k;let x;if(h&&Ye(h,!1),(x=T.onVnodeBeforeUpdate)&&we(x,h,f,l),A&&Je(f,l,h,"beforeUpdate"),h&&Ye(h,!0),(I.innerHTML&&T.innerHTML==null||I.textContent&&T.textContent==null)&&u(v,""),y?qe(l.dynamicChildren,y,v,h,_,Dn(f,m),b):S||L(l,f,v,null,h,_,Dn(f,m),b,!1),w>0){if(w&16)mt(v,I,T,h,m);else if(w&2&&I.class!==T.class&&i(v,"class",null,T.class,m),w&4&&i(v,"style",I.style,T.style,m),w&8){const P=f.dynamicProps;for(let H=0;H<P.length;H++){const $=P[H],ae=I[$],X=T[$];(X!==ae||$==="value")&&i(v,$,ae,X,m,h)}}w&1&&l.children!==f.children&&u(v,f.children)}else!S&&y==null&&mt(v,I,T,h,m);((x=T.onVnodeUpdated)||A)&&fe(()=>{x&&we(x,h,f,l),A&&Je(f,l,h,"updated")},_)},qe=(l,f,h,_,m,b,S)=>{for(let v=0;v<f.length;v++){const w=l[v],y=f[v],A=w.el&&(w.type===xe||!Et(w,y)||w.shapeFlag&70)?p(w.el):h;R(w,y,A,null,_,m,b,S,!0)}},mt=(l,f,h,_,m)=>{if(f!==h){if(f!==k)for(const b in f)!It(b)&&!(b in h)&&i(l,b,f[b],null,m,_);for(const b in h){if(It(b))continue;const S=h[b],v=f[b];S!==v&&b!=="value"&&i(l,b,v,S,m,_)}"value"in h&&i(l,"value",f.value,h.value,m)}},Ut=(l,f,h,_,m,b,S,v,w)=>{const y=f.el=l?l.el:a(""),A=f.anchor=l?l.anchor:a("");let{patchFlag:I,dynamicChildren:T,slotScopeIds:x}=f;x&&(v=v?v.concat(x):x),l==null?(s(y,h,_),s(A,h,_),Be(f.children||[],h,A,m,b,S,v,w)):I>0&&I&64&&T&&l.dynamicChildren?(qe(l.dynamicChildren,T,h,m,b,S,v),(f.key!=null||m&&f===m.subTree)&&ki(l,f,!0)):L(l,f,h,A,m,b,S,v,w)},Kt=(l,f,h,_,m,b,S,v,w)=>{f.slotScopeIds=v,l==null?f.shapeFlag&512?m.ctx.activate(f,h,_,S,w):vn(f,h,_,m,b,S,w):Ws(l,f,w)},vn=(l,f,h,_,m,b,S)=>{const v=l.component=Ic(l,_,m);if(Si(l)&&(v.ctx.renderer=_t),Tc(v,!1,S),v.asyncDep){if(m&&m.registerDep(v,te,S),!l.el){const w=v.subTree=tt(Nt);F(null,w,f,h)}}else te(v,l,f,h,m,b,S)},Ws=(l,f,h)=>{const _=f.component=l.component;if(pc(l,f,h))if(_.asyncDep&&!_.asyncResolved){U(_,f,h);return}else _.next=f,_.update();else f.el=l.el,_.vnode=f},te=(l,f,h,_,m,b,S)=>{const v=()=>{if(l.isMounted){let{next:I,bu:T,u:x,parent:P,vnode:H}=l;{const ce=Li(l);if(ce){I&&(I.el=H.el,U(l,I,S)),ce.asyncDep.then(()=>{l.isUnmounted||v()});return}}let $=I,ae;Ye(l,!1),I?(I.el=H.el,U(l,I,S)):I=H,T&&Yt(T),(ae=I.props&&I.props.onVnodeBeforeUpdate)&&we(ae,P,I,H),Ye(l,!0);const X=Pn(l),pe=l.subTree;l.subTree=X,R(pe,X,p(pe.el),qt(pe),l,m,b),I.el=X.el,$===null&&gc(l,X.el),x&&fe(x,m),(ae=I.props&&I.props.onVnodeUpdated)&&fe(()=>we(ae,P,I,H),m)}else{let I;const{el:T,props:x}=f,{bm:P,m:H,parent:$,root:ae,type:X}=l,pe=xt(f);if(Ye(l,!1),P&&Yt(P),!pe&&(I=x&&x.onVnodeBeforeMount)&&we(I,$,f),Ye(l,!0),T&&Js){const ce=()=>{l.subTree=Pn(l),Js(T,l.subTree,l,m,null)};pe&&X.__asyncHydrate?X.__asyncHydrate(T,l,ce):ce()}else{ae.ce&&ae.ce._injectChildStyle(X);const ce=l.subTree=Pn(l);R(null,ce,h,_,l,m,b),f.el=ce.el}if(H&&fe(H,m),!pe&&(I=x&&x.onVnodeMounted)){const ce=f;fe(()=>we(I,$,ce),m)}(f.shapeFlag&256||$&&xt($.vnode)&&$.vnode.shapeFlag&256)&&l.a&&fe(l.a,m),l.isMounted=!0,f=h=_=null}};l.scope.on();const w=l.effect=new ti(v);l.scope.off();const y=l.update=w.run.bind(w),A=l.job=w.runIfDirty.bind(w);A.i=l,A.id=l.uid,w.scheduler=()=>Ms(A),Ye(l,!0),y()},U=(l,f,h)=>{f.component=l;const _=l.vnode.props;l.vnode=f,l.next=null,Qa(l,f.props,_,h),nc(l,f.children,h),Ke(),tr(l),We()},L=(l,f,h,_,m,b,S,v,w=!1)=>{const y=l&&l.children,A=l?l.shapeFlag:0,I=f.children,{patchFlag:T,shapeFlag:x}=f;if(T>0){if(T&128){Wt(y,I,h,_,m,b,S,v,w);return}else if(T&256){ze(y,I,h,_,m,b,S,v,w);return}}x&8?(A&16&&bt(y,m,b),I!==y&&u(h,I)):A&16?x&16?Wt(y,I,h,_,m,b,S,v,w):bt(y,m,b,!0):(A&8&&u(h,""),x&16&&Be(I,h,_,m,b,S,v,w))},ze=(l,f,h,_,m,b,S,v,w)=>{l=l||ft,f=f||ft;const y=l.length,A=f.length,I=Math.min(y,A);let T;for(T=0;T<I;T++){const x=f[T]=w?Fe(f[T]):Ee(f[T]);R(l[T],x,h,null,m,b,S,v,w)}y>A?bt(l,m,b,!0,!1,I):Be(f,h,_,m,b,S,v,w,I)},Wt=(l,f,h,_,m,b,S,v,w)=>{let y=0;const A=f.length;let I=l.length-1,T=A-1;for(;y<=I&&y<=T;){const x=l[y],P=f[y]=w?Fe(f[y]):Ee(f[y]);if(Et(x,P))R(x,P,h,null,m,b,S,v,w);else break;y++}for(;y<=I&&y<=T;){const x=l[I],P=f[T]=w?Fe(f[T]):Ee(f[T]);if(Et(x,P))R(x,P,h,null,m,b,S,v,w);else break;I--,T--}if(y>I){if(y<=T){const x=T+1,P=x<A?f[x].el:_;for(;y<=T;)R(null,f[y]=w?Fe(f[y]):Ee(f[y]),h,P,m,b,S,v,w),y++}}else if(y>T)for(;y<=I;)_e(l[y],m,b,!0),y++;else{const x=y,P=y,H=new Map;for(y=P;y<=T;y++){const le=f[y]=w?Fe(f[y]):Ee(f[y]);le.key!=null&&H.set(le.key,y)}let $,ae=0;const X=T-P+1;let pe=!1,ce=0;const yt=new Array(X);for(y=0;y<X;y++)yt[y]=0;for(y=x;y<=I;y++){const le=l[y];if(ae>=X){_e(le,m,b,!0);continue}let ye;if(le.key!=null)ye=H.get(le.key);else for($=P;$<=T;$++)if(yt[$-P]===0&&Et(le,f[$])){ye=$;break}ye===void 0?_e(le,m,b,!0):(yt[ye-P]=y+1,ye>=ce?ce=ye:pe=!0,R(le,f[ye],h,null,m,b,S,v,w),ae++)}const Ys=pe?oc(yt):ft;for($=Ys.length-1,y=X-1;y>=0;y--){const le=P+y,ye=f[le],Xs=le+1<A?f[le+1].el:_;yt[y]===0?R(null,ye,h,Xs,m,b,S,v,w):pe&&($<0||y!==Ys[$]?Ge(ye,h,Xs,2):$--)}}},Ge=(l,f,h,_,m=null)=>{const{el:b,type:S,transition:v,children:w,shapeFlag:y}=l;if(y&6){Ge(l.component.subTree,f,h,_);return}if(y&128){l.suspense.move(f,h,_);return}if(y&64){S.move(l,f,h,_t);return}if(S===xe){s(b,f,h);for(let I=0;I<w.length;I++)Ge(w[I],f,h,_);s(l.anchor,f,h);return}if(S===Rn){W(l,f,h);return}if(_!==2&&y&1&&v)if(_===0)v.beforeEnter(b),s(b,f,h),fe(()=>v.enter(b),m);else{const{leave:I,delayLeave:T,afterLeave:x}=v,P=()=>s(b,f,h),H=()=>{I(b,()=>{P(),x&&x()})};T?T(b,P,H):H()}else s(b,f,h)},_e=(l,f,h,_=!1,m=!1)=>{const{type:b,props:S,ref:v,children:w,dynamicChildren:y,shapeFlag:A,patchFlag:I,dirs:T,cacheIndex:x}=l;if(I===-2&&(m=!1),v!=null&&ns(v,null,h,l,!0),x!=null&&(f.renderCache[x]=void 0),A&256){f.ctx.deactivate(l);return}const P=A&1&&T,H=!xt(l);let $;if(H&&($=S&&S.onVnodeBeforeUnmount)&&we($,f,l),A&6)No(l.component,h,_);else{if(A&128){l.suspense.unmount(h,_);return}P&&Je(l,null,f,"beforeUnmount"),A&64?l.type.remove(l,f,h,_t,_):y&&!y.hasOnce&&(b!==xe||I>0&&I&64)?bt(y,f,h,!1,!0):(b===xe&&I&384||!m&&A&16)&&bt(w,f,h),_&&qs(l)}(H&&($=S&&S.onVnodeUnmounted)||P)&&fe(()=>{$&&we($,f,l),P&&Je(l,null,f,"unmounted")},h)},qs=l=>{const{type:f,el:h,anchor:_,transition:m}=l;if(f===xe){Ro(h,_);return}if(f===Rn){C(l);return}const b=()=>{r(h),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:v}=m,w=()=>S(h,b);v?v(l.el,b,w):w()}else b()},Ro=(l,f)=>{let h;for(;l!==f;)h=g(l),r(l),l=h;r(f)},No=(l,f,h)=>{const{bum:_,scope:m,job:b,subTree:S,um:v,m:w,a:y}=l;ar(w),ar(y),_&&Yt(_),m.stop(),b&&(b.flags|=8,_e(S,l,f,h)),v&&fe(v,f),fe(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},bt=(l,f,h,_=!1,m=!1,b=0)=>{for(let S=b;S<l.length;S++)_e(l[S],f,h,_,m)},qt=l=>{if(l.shapeFlag&6)return qt(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const f=g(l.anchor||l.el),h=f&&f[Ca];return h?g(h):f};let En=!1;const zs=(l,f,h)=>{l==null?f._vnode&&_e(f._vnode,null,null,!0):R(f._vnode||null,l,f,null,null,null,h),f._vnode=l,En||(En=!0,tr(),yi(),En=!1)},_t={p:R,um:_e,m:Ge,r:qs,mt:vn,mc:Be,pc:L,pbc:qe,n:qt,o:e};let Gs,Js;return{render:zs,hydrate:Gs,createApp:Ja(zs,Gs)}}function Dn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ye({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ic(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ki(e,t,n=!1){const s=e.children,r=t.children;if(O(s)&&O(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Fe(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ki(o,a)),a.type===gn&&(a.el=o.el)}}function oc(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const d=e[s];if(d!==0){if(r=n[n.length-1],e[r]<d){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<d?i=a+1:o=a;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Li(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Li(t)}function ar(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ac=Symbol.for("v-scx"),cc=()=>Xt(ac);function Mn(e,t,n){return Hi(e,t,n)}function Hi(e,t,n=k){const{immediate:s,deep:r,flush:i,once:o}=n,a=Y({},n),c=t&&s||!t&&i!=="post";let d;if($t){if(i==="sync"){const E=cc();d=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=Se,E.resume=Se,E.pause=Se,E}}const u=ie;a.call=(E,M,R)=>Ie(E,u,M,R);let p=!1;i==="post"?a.scheduler=E=>{fe(E,u&&u.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(E,M)=>{M?E():Ms(E)}),a.augmentJob=E=>{t&&(E.flags|=4),p&&(E.flags|=2,u&&(E.id=u.uid,E.i=u))};const g=va(e,t,a);return $t&&(d?d.push(g):c&&g()),g}function lc(e,t,n){const s=this.proxy,r=J(e)?e.includes(".")?ji(s,e):()=>s[e]:e.bind(s,s);let i;D(t)?i=t:(i=t.handler,n=t);const o=jt(this),a=Hi(r,i.bind(s),n);return o(),a}function ji(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const fc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${je(t)}Modifiers`]||e[`${ot(t)}Modifiers`];function uc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||k;let r=n;const i=t.startsWith("update:"),o=i&&fc(s,t.slice(7));o&&(o.trim&&(r=n.map(u=>J(u)?u.trim():u)),o.number&&(r=n.map(Yn)));let a,c=s[a=Sn(t)]||s[a=Sn(je(t))];!c&&i&&(c=s[a=Sn(ot(t))]),c&&Ie(c,e,6,r);const d=s[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ie(d,e,6,r)}}function Vi(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!D(e)){const c=d=>{const u=Vi(d,t,!0);u&&(a=!0,Y(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(q(e)&&s.set(e,null),null):(O(i)?i.forEach(c=>o[c]=null):Y(o,i),q(e)&&s.set(e,o),o)}function pn(e,t){return!e||!cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,ot(t))||B(e,t))}function Pn(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:d,renderCache:u,props:p,data:g,setupState:E,ctx:M,inheritAttrs:R}=e,ee=nn(e);let F,K;try{if(n.shapeFlag&4){const C=r||s,G=C;F=Ee(d.call(G,C,u,p,E,g,M)),K=a}else{const C=t;F=Ee(C.length>1?C(p,{attrs:a,slots:o,emit:c}):C(p,null)),K=t.props?a:dc(a)}}catch(C){Dt.length=0,dn(C,e,1),F=tt(Nt)}let W=F;if(K&&R!==!1){const C=Object.keys(K),{shapeFlag:G}=W;C.length&&G&7&&(i&&C.some(bs)&&(K=hc(K,i)),W=pt(W,K,!1,!0))}return n.dirs&&(W=pt(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&Ps(W,n.transition),F=W,nn(ee),F}const dc=e=>{let t;for(const n in e)(n==="class"||n==="style"||cn(n))&&((t||(t={}))[n]=e[n]);return t},hc=(e,t)=>{const n={};for(const s in e)(!bs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function pc(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?cr(s,o,d):!!o;if(c&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(o[g]!==s[g]&&!pn(d,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?cr(s,o,d):!0:!!o;return!1}function cr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!pn(n,i))return!0}return!1}function gc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ui=e=>e.__isSuspense;function mc(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):Ta(e)}const xe=Symbol.for("v-fgt"),gn=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),Rn=Symbol.for("v-stc"),Dt=[];let de=null;function Nn(e=!1){Dt.push(de=e?null:[])}function bc(){Dt.pop(),de=Dt[Dt.length-1]||null}let Bt=1;function lr(e){Bt+=e,e<0&&de&&(de.hasOnce=!0)}function _c(e){return e.dynamicChildren=Bt>0?de||ft:null,bc(),Bt>0&&de&&de.push(e),e}function Bn(e,t,n,s,r,i){return _c(z(e,t,n,s,r,i,!0))}function Ki(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Wi=({key:e})=>e??null,Qt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?J(e)||Z(e)||D(e)?{i:he,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,s=0,r=null,i=e===xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&Qt(t),scopeId:vi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:he};return a?(Bs(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=J(n)?8:16),Bt>0&&!o&&de&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&de.push(c),c}const tt=yc;function yc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===ja)&&(e=Nt),Ki(e)){const a=pt(e,t,!0);return n&&Bs(a,n),Bt>0&&!i&&de&&(a.shapeFlag&6?de[de.indexOf(e)]=a:de.push(a)),a.patchFlag=-2,a}if(Oc(e)&&(e=e.__vccOpts),t){t=wc(t);let{class:a,style:c}=t;a&&!J(a)&&(t.class=vs(a)),q(c)&&(Ds(c)&&!O(c)&&(c=Y({},c)),t.style=ws(c))}const o=J(e)?1:Ui(e)?128:xa(e)?64:q(e)?4:D(e)?2:0;return z(e,t,n,s,r,o,i,!0)}function wc(e){return e?Ds(e)||Mi(e)?Y({},e):e:null}function pt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=e,d=t?vc(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Wi(d),ref:t&&t.ref?n&&i?O(i)?i.concat(Qt(t)):[i,Qt(t)]:Qt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pt(e.ssContent),ssFallback:e.ssFallback&&pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ps(u,c.clone(u)),u}function qi(e=" ",t=0){return tt(gn,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?tt(Nt):O(e)?tt(xe,null,e.slice()):Ki(e)?Fe(e):tt(gn,null,String(e))}function Fe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pt(e)}function Bs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Bs(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Mi(t)?t._ctx=he:r===3&&he&&(he.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:he},n=32):(t=String(t),s&64?(n=16,t=[qi(t)]):n=8);e.children=t,e.shapeFlag|=n}function vc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=vs([t.class,s.class]));else if(r==="style")t.style=ws([t.style,s.style]);else if(cn(r)){const i=t[r],o=s[r];o&&i!==o&&!(O(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function we(e,t,n,s=null){Ie(e,t,7,[n,s])}const Ec=xi();let Sc=0;function Ic(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Ec,i={uid:Sc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ri(s,r),emitsOptions:Vi(s,r),emit:null,emitted:null,propsDefaults:k,inheritAttrs:s.inheritAttrs,ctx:k,data:k,props:k,attrs:k,slots:k,refs:k,setupState:k,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=uc.bind(null,i),e.ce&&e.ce(i),i}let ie=null,rn,as;{const e=un(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};rn=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),as=t("__VUE_SSR_SETTERS__",n=>$t=n)}const jt=e=>{const t=ie;return rn(e),e.scope.on(),()=>{e.scope.off(),rn(t)}},fr=()=>{ie&&ie.scope.off(),rn(null)};function zi(e){return e.vnode.shapeFlag&4}let $t=!1;function Tc(e,t=!1,n=!1){t&&as(t);const{props:s,children:r}=e.vnode,i=zi(e);Xa(e,s,i,t),tc(e,r,n);const o=i?Ac(e,t):void 0;return t&&as(!1),o}function Ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Va);const{setup:s}=n;if(s){Ke();const r=e.setupContext=s.length>1?xc(e):null,i=jt(e),o=Ht(s,e,0,[e.props,r]),a=qr(o);if(We(),i(),(a||e.sp)&&!xt(e)&&Ei(e),a){if(o.then(fr,fr),t)return o.then(c=>{ur(e,c,t)}).catch(c=>{dn(c,e,0)});e.asyncDep=o}else ur(e,o,t)}else Gi(e,t)}function ur(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=mi(t)),Gi(e,n)}let dr;function Gi(e,t,n){const s=e.type;if(!e.render){if(!t&&dr&&!s.render){const r=s.template||Rs(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,d=Y(Y({isCustomElement:i,delimiters:a},o),c);s.render=dr(r,d)}}e.render=s.render||Se}{const r=jt(e);Ke();try{Ua(e)}finally{We(),r()}}}const Cc={get(e,t){return Q(e,"get",""),e[t]}};function xc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Cc),slots:e.slots,emit:e.emit,expose:t}}function mn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(mi(ha(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ot)return Ot[n](e)},has(t,n){return n in t||n in Ot}})):e.proxy}function Oc(e){return D(e)&&"__vccOpts"in e}const Dc=(e,t)=>ya(e,t,$t),Mc="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cs;const hr=typeof window<"u"&&window.trustedTypes;if(hr)try{cs=hr.createPolicy("vue",{createHTML:e=>e})}catch{}const Ji=cs?e=>cs.createHTML(e):e=>e,Pc="http://www.w3.org/2000/svg",Rc="http://www.w3.org/1998/Math/MathML",Ae=typeof document<"u"?document:null,pr=Ae&&Ae.createElement("template"),Nc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Ae.createElementNS(Pc,e):t==="mathml"?Ae.createElementNS(Rc,e):n?Ae.createElement(e,{is:n}):Ae.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Ae.createTextNode(e),createComment:e=>Ae.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ae.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{pr.innerHTML=Ji(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=pr.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Bc=Symbol("_vtc");function $c(e,t,n){const s=e[Bc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const gr=Symbol("_vod"),Fc=Symbol("_vsh"),kc=Symbol(""),Lc=/(^|;)\s*display\s*:/;function Hc(e,t,n){const s=e.style,r=J(n);let i=!1;if(n&&!r){if(t)if(J(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Zt(s,a,"")}else for(const o in t)n[o]==null&&Zt(s,o,"");for(const o in n)o==="display"&&(i=!0),Zt(s,o,n[o])}else if(r){if(t!==n){const o=s[kc];o&&(n+=";"+o),s.cssText=n,i=Lc.test(n)}}else t&&e.removeAttribute("style");gr in e&&(e[gr]=i?s.display:"",e[Fc]&&(s.display="none"))}const mr=/\s*!important$/;function Zt(e,t,n){if(O(n))n.forEach(s=>Zt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=jc(e,t);mr.test(n)?e.setProperty(ot(s),n.replace(mr,""),"important"):e[s]=n}}const br=["Webkit","Moz","ms"],$n={};function jc(e,t){const n=$n[t];if(n)return n;let s=je(t);if(s!=="filter"&&s in e)return $n[t]=s;s=Jr(s);for(let r=0;r<br.length;r++){const i=br[r]+s;if(i in e)return $n[t]=i}return t}const _r="http://www.w3.org/1999/xlink";function yr(e,t,n,s,r,i=Wo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_r,t.slice(6,t.length)):e.setAttributeNS(_r,t,n):n==null||i&&!Xr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ue(n)?String(n):n)}function wr(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ji(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Xr(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function lt(e,t,n,s){e.addEventListener(t,n,s)}function Vc(e,t,n,s){e.removeEventListener(t,n,s)}const vr=Symbol("_vei");function Uc(e,t,n,s,r=null){const i=e[vr]||(e[vr]={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=Kc(t);if(s){const d=i[t]=zc(s,r);lt(e,a,d,c)}else o&&(Vc(e,a,o,c),i[t]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;function Kc(e){let t;if(Er.test(e)){t={};let s;for(;s=e.match(Er);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),t]}let Fn=0;const Wc=Promise.resolve(),qc=()=>Fn||(Wc.then(()=>Fn=0),Fn=Date.now());function zc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ie(Gc(s,n.value),t,5,[s])};return n.value=e,n.attached=qc(),n}function Gc(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Sr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Jc=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?$c(e,s,o):t==="style"?Hc(e,n,s):cn(t)?bs(t)||Uc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yc(e,t,s,o))?(wr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&yr(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!J(s))?wr(e,je(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),yr(e,t,s,o))};function Yc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Sr(t)&&D(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Sr(t)&&J(n)?!1:t in e}const Ir=e=>{const t=e.props["onUpdate:modelValue"]||!1;return O(t)?n=>Yt(t,n):t};function Xc(e){e.target.composing=!0}function Tr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const kn=Symbol("_assign"),Ln={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[kn]=Ir(r);const i=s||r.props&&r.props.type==="number";lt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Yn(a)),e[kn](a)}),n&&lt(e,"change",()=>{e.value=e.value.trim()}),t||(lt(e,"compositionstart",Xc),lt(e,"compositionend",Tr),lt(e,"change",Tr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[kn]=Ir(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Yn(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===c)||(e.value=c))}},Qc=Y({patchProp:Jc},Nc);let Ar;function Zc(){return Ar||(Ar=sc(Qc))}const el=(...e)=>{const t=Zc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=nl(s);if(!r)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,tl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function tl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nl(e){return J(e)?document.querySelector(e):e}var Cr={};/**
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
 */const Yi=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},sl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,d=c?e[r+2]:0,u=i>>2,p=(i&3)<<4|a>>4;let g=(a&15)<<2|d>>6,E=d&63;c||(E=64,o||(g=64)),s.push(n[u],n[p],n[g],n[E])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Yi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const d=r<e.length?n[e.charAt(r)]:64;++r;const p=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||d==null||p==null)throw new rl;const g=i<<2|a>>4;if(s.push(g),d!==64){const E=a<<4&240|d>>2;if(s.push(E),p!==64){const M=d<<6&192|p;s.push(M)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class rl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const il=function(e){const t=Yi(e);return Xi.encodeByteArray(t,!0)},Qi=function(e){return il(e).replace(/\./g,"")},ol=function(e){try{return Xi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const cl=()=>al().__FIREBASE_DEFAULTS__,ll=()=>{if(typeof process>"u"||typeof Cr>"u")return;const e=Cr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},fl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ol(e[1]);return t&&JSON.parse(t)},ul=()=>{try{return cl()||ll()||fl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zi=()=>{var e;return(e=ul())===null||e===void 0?void 0:e.config};/**
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
 */class dl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function eo(){try{return typeof indexedDB=="object"}catch{return!1}}function to(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function hl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pl="FirebaseError";class gt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=pl,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?gl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new gt(r,a,s)}}function gl(e,t){return e.replace(ml,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const ml=/\{\$([^}]+)}/g;function ls(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(xr(i)&&xr(o)){if(!ls(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function xr(e){return e!==null&&typeof e=="object"}/**
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
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const vl={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},El=V.INFO,Sl={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Il=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Sl[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tl{constructor(t){this.name=t,this._logLevel=El,this._logHandler=Il,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Al=(e,t)=>t.some(n=>e instanceof n);let Or,Dr;function Cl(){return Or||(Or=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xl(){return Dr||(Dr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const so=new WeakMap,fs=new WeakMap,ro=new WeakMap,Hn=new WeakMap,$s=new WeakMap;function Ol(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Me(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&so.set(n,e)}).catch(()=>{}),$s.set(t,e),t}function Dl(e){if(fs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});fs.set(e,t)}let us={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ro.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ml(e){us=e(us)}function Pl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(jn(this),t,...n);return ro.set(s,t.sort?t.sort():[t]),Me(s)}:xl().includes(e)?function(...t){return e.apply(jn(this),t),Me(so.get(this))}:function(...t){return Me(e.apply(jn(this),t))}}function Rl(e){return typeof e=="function"?Pl(e):(e instanceof IDBTransaction&&Dl(e),Al(e,Cl())?new Proxy(e,us):e)}function Me(e){if(e instanceof IDBRequest)return Ol(e);if(Hn.has(e))return Hn.get(e);const t=Rl(e);return t!==e&&(Hn.set(e,t),$s.set(t,e)),t}const jn=e=>$s.get(e);function _n(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Me(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Me(o.result),c.oldVersion,c.newVersion,Me(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}function Vn(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",s=>t(s.oldVersion,s)),Me(n).then(()=>{})}const Nl=["get","getKey","getAll","getAllKeys","count"],Bl=["put","add","delete","clear"],Un=new Map;function Mr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Un.get(t))return Un.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Bl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Nl.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),r&&c.done]))[0]};return Un.set(t,i),i}Ml(e=>({...e,get:(t,n,s)=>Mr(t,n)||e.get(t,n,s),has:(t,n)=>!!Mr(t,n)||e.has(t,n)}));/**
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
 */class $l{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ds="@firebase/app",Pr="0.10.15";/**
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
 */const hs="[DEFAULT]",uf={[ds]:"fire-core",[kl]:"fire-core-compat",[Hl]:"fire-analytics",[Ll]:"fire-analytics-compat",[Vl]:"fire-app-check",[jl]:"fire-app-check-compat",[Ul]:"fire-auth",[Kl]:"fire-auth-compat",[Wl]:"fire-rtdb",[ql]:"fire-data-connect",[zl]:"fire-rtdb-compat",[Gl]:"fire-fn",[Jl]:"fire-fn-compat",[Yl]:"fire-iid",[Xl]:"fire-iid-compat",[Ql]:"fire-fcm",[Zl]:"fire-fcm-compat",[ef]:"fire-perf",[tf]:"fire-perf-compat",[nf]:"fire-rc",[sf]:"fire-rc-compat",[rf]:"fire-gcs",[of]:"fire-gcs-compat",[af]:"fire-fst",[lf]:"fire-fst-compat",[cf]:"fire-vertex","fire-js":"fire-js",[ff]:"fire-js-all"};/**
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
 */const on=new Map,df=new Map,ps=new Map;function Rr(e,t){try{e.container.addComponent(t)}catch(n){Pe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function st(e){const t=e.name;if(ps.has(t))return Pe.debug(`There were multiple attempts to register component ${t}.`),!1;ps.set(t,e);for(const n of on.values())Rr(n,e);for(const n of df.values())Rr(n,e);return!0}function Fs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */class pf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}function io(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:hs,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Le.create("bad-app-name",{appName:String(r)});if(n||(n=Zi()),!n)throw Le.create("no-options");const i=on.get(r);if(i){if(ls(n,i.options)&&ls(s,i.config))return i;throw Le.create("duplicate-app",{appName:r})}const o=new wl(r);for(const c of ps.values())o.addComponent(c);const a=new pf(n,s,o);return on.set(r,a),a}function gf(e=hs){const t=on.get(e);if(!t&&e===hs&&Zi())return io();if(!t)throw Le.create("no-app",{appName:e});return t}function He(e,t,n){var s;let r=(s=uf[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Pe.warn(a.join(" "));return}st(new Ve(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const mf="firebase-heartbeat-database",bf=1,Ft="firebase-heartbeat-store";let Kn=null;function oo(){return Kn||(Kn=_n(mf,bf,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ft)}catch(n){console.warn(n)}}}}).catch(e=>{throw Le.create("idb-open",{originalErrorMessage:e.message})})),Kn}async function _f(e){try{const n=(await oo()).transaction(Ft),s=await n.objectStore(Ft).get(ao(e));return await n.done,s}catch(t){if(t instanceof gt)Pe.warn(t.message);else{const n=Le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Pe.warn(n.message)}}}async function Nr(e,t){try{const s=(await oo()).transaction(Ft,"readwrite");await s.objectStore(Ft).put(t,ao(e)),await s.done}catch(n){if(n instanceof gt)Pe.warn(n.message);else{const s=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pe.warn(s.message)}}}function ao(e){return`${e.name}!${e.options.appId}`}/**
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
 */const yf=1024,wf=30*24*60*60*1e3;class vf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Br();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wf}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Pe.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Br(),{heartbeatsToSend:s,unsentEntries:r}=Ef(this._heartbeatsCache.heartbeats),i=Qi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pe.warn(n),""}}}function Br(){return new Date().toISOString().substring(0,10)}function Ef(e,t=yf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),$r(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),$r(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Sf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eo()?to().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _f(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Nr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function $r(e){return Qi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function If(e){st(new Ve("platform-logger",t=>new $l(t),"PRIVATE")),st(new Ve("heartbeat",t=>new vf(t),"PRIVATE")),He(ds,Pr,e),He(ds,Pr,"esm2017"),He("fire-js","")}If("");var Tf="firebase",Af="11.0.1";/**
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
 */He(Tf,Af,"app");const co="@firebase/installations",ks="0.6.10";/**
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
 */const lo=1e4,fo=`w:${ks}`,uo="FIS_v2",Cf="https://firebaseinstallations.googleapis.com/v1",xf=60*60*1e3,Of="installations",Df="Installations";/**
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
 */const Mf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rt=new bn(Of,Df,Mf);function ho(e){return e instanceof gt&&e.code.includes("request-failed")}/**
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
 */function po({projectId:e}){return`${Cf}/projects/${e}/installations`}function go(e){return{token:e.token,requestStatus:2,expiresIn:Rf(e.expiresIn),creationTime:Date.now()}}async function mo(e,t){const s=(await t.json()).error;return rt.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function bo({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Pf(e,{refreshToken:t}){const n=bo(e);return n.append("Authorization",Nf(t)),n}async function _o(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Rf(e){return Number(e.replace("s","000"))}function Nf(e){return`${uo} ${e}`}/**
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
 */async function Bf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=po(e),r=bo(e),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={fid:n,authVersion:uo,appId:e.appId,sdkVersion:fo},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await _o(()=>fetch(s,a));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:go(d.authToken)}}else throw await mo("Create Installation",c)}/**
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
 */function yo(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const Ff=/^[cdef][\w-]{21}$/,gs="";function kf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Lf(e);return Ff.test(n)?n:gs}catch{return gs}}function Lf(e){return $f(e).substr(0,22)}/**
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
 */const wo=new Map;function vo(e,t){const n=yn(e);Eo(n,t),Hf(n,t)}function Eo(e,t){const n=wo.get(e);if(n)for(const s of n)s(t)}function Hf(e,t){const n=jf();n&&n.postMessage({key:e,fid:t}),Vf()}let Ze=null;function jf(){return!Ze&&"BroadcastChannel"in self&&(Ze=new BroadcastChannel("[Firebase] FID Change"),Ze.onmessage=e=>{Eo(e.data.key,e.data.fid)}),Ze}function Vf(){wo.size===0&&Ze&&(Ze.close(),Ze=null)}/**
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
 */const Uf="firebase-installations-database",Kf=1,it="firebase-installations-store";let Wn=null;function Ls(){return Wn||(Wn=_n(Uf,Kf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(it)}}})),Wn}async function an(e,t){const n=yn(e),r=(await Ls()).transaction(it,"readwrite"),i=r.objectStore(it),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&vo(e,t.fid),t}async function So(e){const t=yn(e),s=(await Ls()).transaction(it,"readwrite");await s.objectStore(it).delete(t),await s.done}async function wn(e,t){const n=yn(e),r=(await Ls()).transaction(it,"readwrite"),i=r.objectStore(it),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&vo(e,a.fid),a}/**
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
 */async function Hs(e){let t;const n=await wn(e.appConfig,s=>{const r=Wf(s),i=qf(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===gs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Wf(e){const t=e||{fid:kf(),registrationStatus:0};return Io(t)}function qf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(rt.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=zf(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Gf(e)}:{installationEntry:t}}async function zf(e,t){try{const n=await Bf(e,t);return an(e.appConfig,n)}catch(n){throw ho(n)&&n.customData.serverCode===409?await So(e.appConfig):await an(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Gf(e){let t=await Fr(e.appConfig);for(;t.registrationStatus===1;)await yo(100),t=await Fr(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Hs(e);return s||n}return t}function Fr(e){return wn(e,t=>{if(!t)throw rt.create("installation-not-found");return Io(t)})}function Io(e){return Jf(e)?{fid:e.fid,registrationStatus:0}:e}function Jf(e){return e.registrationStatus===1&&e.registrationTime+lo<Date.now()}/**
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
 */async function Yf({appConfig:e,heartbeatServiceProvider:t},n){const s=Xf(e,n),r=Pf(e,n),i=t.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={installation:{sdkVersion:fo,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await _o(()=>fetch(s,a));if(c.ok){const d=await c.json();return go(d)}else throw await mo("Generate Auth Token",c)}function Xf(e,{fid:t}){return`${po(e)}/${t}/authTokens:generate`}/**
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
 */async function js(e,t=!1){let n;const s=await wn(e.appConfig,i=>{if(!To(i))throw rt.create("not-registered");const o=i.authToken;if(!t&&eu(o))return i;if(o.requestStatus===1)return n=Qf(e,t),i;{if(!navigator.onLine)throw rt.create("app-offline");const a=nu(i);return n=Zf(e,a),a}});return n?await n:s.authToken}async function Qf(e,t){let n=await kr(e.appConfig);for(;n.authToken.requestStatus===1;)await yo(100),n=await kr(e.appConfig);const s=n.authToken;return s.requestStatus===0?js(e,t):s}function kr(e){return wn(e,t=>{if(!To(t))throw rt.create("not-registered");const n=t.authToken;return su(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Zf(e,t){try{const n=await Yf(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await an(e.appConfig,s),n}catch(n){if(ho(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await So(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await an(e.appConfig,s)}throw n}}function To(e){return e!==void 0&&e.registrationStatus===2}function eu(e){return e.requestStatus===2&&!tu(e)}function tu(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+xf}function nu(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function su(e){return e.requestStatus===1&&e.requestTime+lo<Date.now()}/**
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
 */async function ru(e){const t=e,{installationEntry:n,registrationPromise:s}=await Hs(t);return s?s.catch(console.error):js(t).catch(console.error),n.fid}/**
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
 */async function iu(e,t=!1){const n=e;return await ou(n),(await js(n,t)).token}async function ou(e){const{registrationPromise:t}=await Hs(e);t&&await t}/**
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
 */function au(e){if(!e||!e.options)throw qn("App Configuration");if(!e.name)throw qn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw qn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function qn(e){return rt.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ao="installations",cu="installations-internal",lu=e=>{const t=e.getProvider("app").getImmediate(),n=au(t),s=Fs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},fu=e=>{const t=e.getProvider("app").getImmediate(),n=Fs(t,Ao).getImmediate();return{getId:()=>ru(n),getToken:r=>iu(n,r)}};function uu(){st(new Ve(Ao,lu,"PUBLIC")),st(new Ve(cu,fu,"PRIVATE"))}uu();He(co,ks);He(co,ks,"esm2017");/**
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
 */const du="/firebase-messaging-sw.js",hu="/firebase-cloud-messaging-push-scope",Co="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",pu="https://fcmregistrations.googleapis.com/v1",xo="google.c.a.c_id",gu="google.c.a.c_l",mu="google.c.a.ts",bu="google.c.a.e";var Lr;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Lr||(Lr={}));/**
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
 */var kt;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(kt||(kt={}));/**
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
 */const zn="fcm_token_details_db",yu=5,Hr="fcm_token_object_Store";async function wu(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(zn))return null;let t=null;return(await _n(zn,yu,{upgrade:async(s,r,i,o)=>{var a;if(r<2||!s.objectStoreNames.contains(Hr))return;const c=o.objectStore(Hr),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(r===2){const u=d;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:Ce(u.vapidKey)}}}else if(r===3){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ce(u.auth),p256dh:Ce(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ce(u.vapidKey)}}}else if(r===4){const u=d;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ce(u.auth),p256dh:Ce(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ce(u.vapidKey)}}}}}})).close(),await Vn(zn),await Vn("fcm_vapid_details_db"),await Vn("undefined"),vu(t)?t:null}function vu(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Eu="firebase-messaging-database",Su=1,Lt="firebase-messaging-store";let Gn=null;function Oo(){return Gn||(Gn=_n(Eu,Su,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Lt)}}})),Gn}async function Iu(e){const t=Do(e),s=await(await Oo()).transaction(Lt).objectStore(Lt).get(t);if(s)return s;{const r=await wu(e.appConfig.senderId);if(r)return await Vs(e,r),r}}async function Vs(e,t){const n=Do(e),r=(await Oo()).transaction(Lt,"readwrite");return await r.objectStore(Lt).put(t,n),await r.done,t}function Do({appConfig:e}){return e.appId}/**
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
 */async function Au(e,t){const n=await Ks(e),s=Mo(t),r={method:"POST",headers:n,body:JSON.stringify(s)};let i;try{i=await(await fetch(Us(e.appConfig),r)).json()}catch(o){throw oe.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw oe.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw oe.create("token-subscribe-no-token");return i.token}async function Cu(e,t){const n=await Ks(e),s=Mo(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(s)};let i;try{i=await(await fetch(`${Us(e.appConfig)}/${t.token}`,r)).json()}catch(o){throw oe.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw oe.create("token-update-failed",{errorInfo:o})}if(!i.token)throw oe.create("token-update-no-token");return i.token}async function xu(e,t){const s={method:"DELETE",headers:await Ks(e)};try{const i=await(await fetch(`${Us(e.appConfig)}/${t}`,s)).json();if(i.error){const o=i.error.message;throw oe.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw oe.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function Us({projectId:e}){return`${pu}/projects/${e}/registrations`}async function Ks({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Mo({p256dh:e,auth:t,endpoint:n,vapidKey:s}){const r={web:{endpoint:n,auth:t,p256dh:e}};return s!==Co&&(r.web.applicationPubKey=s),r}/**
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
 */const Ou=7*24*60*60*1e3;async function Du(e){const t=await Pu(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ce(t.getKey("auth")),p256dh:Ce(t.getKey("p256dh"))},s=await Iu(e.firebaseDependencies);if(s){if(Ru(s.subscriptionOptions,n))return Date.now()>=s.createTime+Ou?Mu(e,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await xu(e.firebaseDependencies,s.token)}catch(r){console.warn(r)}return jr(e.firebaseDependencies,n)}else return jr(e.firebaseDependencies,n)}async function Mu(e,t){try{const n=await Cu(e.firebaseDependencies,t),s=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Vs(e.firebaseDependencies,s),n}catch(n){throw n}}async function jr(e,t){const s={token:await Au(e,t),createTime:Date.now(),subscriptionOptions:t};return await Vs(e,s),s.token}async function Pu(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_u(t)})}function Ru(e,t){const n=t.vapidKey===e.vapidKey,s=t.endpoint===e.endpoint,r=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&s&&r&&i}/**
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
 */function Vr(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Nu(t,e),Bu(t,e),$u(t,e),t}function Nu(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const s=t.notification.body;s&&(e.notification.body=s);const r=t.notification.image;r&&(e.notification.image=r);const i=t.notification.icon;i&&(e.notification.icon=i)}function Bu(e,t){t.data&&(e.data=t.data)}function $u(e,t){var n,s,r,i,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(r=(s=t.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&r!==void 0?r:(i=t.notification)===null||i===void 0?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
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
 */function ku(e){if(!e||!e.options)throw Jn("App Configuration Object");if(!e.name)throw Jn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const s of t)if(!n[s])throw Jn(s);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Jn(e){return oe.create("missing-app-config-values",{valueName:e})}/**
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
 */async function Vu(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Co)}/**
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
 */async function Po(e,t){if(!navigator)throw oe.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw oe.create("permission-blocked");return await Vu(e,t==null?void 0:t.vapidKey),await ju(e,t==null?void 0:t.serviceWorkerRegistration),Du(e)}/**
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
 */async function Uu(e,t,n){const s=Ku(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[xo],message_name:n[gu],message_time:n[mu],message_device_time:Math.floor(Date.now()/1e3)})}function Ku(e){switch(e){case kt.NOTIFICATION_CLICKED:return"notification_open";case kt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Wu(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===kt.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Vr(n)):e.onMessageHandler.next(Vr(n)));const s=n.data;Fu(s)&&s[bu]==="1"&&await Uu(e,n.messageType,s)}const Ur="@firebase/messaging",Kr="0.12.13";/**
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
 */const qu=e=>{const t=new Lu(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Wu(t,n)),t},zu=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:s=>Po(t,s)}};function Gu(){st(new Ve("messaging",qu,"PUBLIC")),st(new Ve("messaging-internal",zu,"PRIVATE")),He(Ur,Kr),He(Ur,Kr,"esm2017")}/**
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
 */async function Ju(){try{await to()}catch{return!1}return typeof window<"u"&&eo()&&hl()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Yu(e=gf()){return Ju().then(t=>{if(!t)throw oe.create("unsupported-browser")},t=>{throw oe.create("indexed-db-unsupported")}),Fs(no(e),"messaging").getImmediate()}async function Xu(e,t){return e=no(e),Po(e,t)}Gu();const Qu={class:"wrapper"},Zu={key:1},ed={class:"form"},td={class:"input"},nd={class:"input"},sd={class:"input"},rd=["placeholder"],id="BB9BiqPfKEWleyHgX8MnXSk6PGUV5m0ltzA58OFMYXKrpjK9MKx5MqLbxabjBB6qJY4Q9H_2Jdsc-z4I-n9uAnI",od=Oa({__name:"App",setup(e){const t={apiKey:"AIzaSyCKcRQNdPtVIdYy-ZYLK0PvcYHhm85LRJk",authDomain:"notification-31228.firebaseapp.com",projectId:"notification-31228",storageBucket:"notification-31228.firebasestorage.app",messagingSenderId:"515089145210",appId:"1:515089145210:web:11ef75510e5735edc28ac3",measurementId:"G-4QVBB372GX"},n=vt(""),s=vt(""),r=vt(""),i=vt(""),o=async()=>{const p=await navigator.serviceWorker.register("/firebase-notification/firebase-messaging-sw.js"),g=io(t),E=Yu(g);n.value=await Xu(E,{vapidKey:id,serviceWorkerRegistration:p})},a=vt(null),c=()=>{console.log("1"),Notification.permission==="granted"?(o(),a.value&&clearInterval(a.value)):Notification.requestPermission(),a.value||(a.value=setInterval(c,1e4))},d=()=>{n.value&&fetch("https://winter-dev.ru",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:i.value||n.value,text:r.value,title:s.value})})},u=()=>{navigator.clipboard.writeText(n.value)};return Ti(()=>{c()}),(p,g)=>(Nn(),Bn("div",Qu,[n.value?(Nn(),Bn("div",{key:0,class:"token-text",onClick:g[0]||(g[0]=E=>u()),title:"СКОПИРОВАТЬ ТОКЕН"},[g[5]||(g[5]=qi(" Tокен устройства: ")),g[6]||(g[6]=z("br",null,null,-1)),z("strong",null,Zr(n.value),1)])):(Nn(),Bn("div",Zu," Загрузка... ")),g[10]||(g[10]=z("br",null,null,-1)),g[11]||(g[11]=z("br",null,null,-1)),g[12]||(g[12]=z("br",null,null,-1)),g[13]||(g[13]=z("br",null,null,-1)),g[14]||(g[14]=z("br",null,null,-1)),z("div",ed,[z("div",td,[g[7]||(g[7]=z("label",{for:"title"},"Title",-1)),xn(z("input",{placeholder:"шапка сообщения",id:"title","onUpdate:modelValue":g[1]||(g[1]=E=>s.value=E)},null,512),[[Ln,s.value]])]),z("div",nd,[g[8]||(g[8]=z("label",{for:"text"},"Text",-1)),xn(z("textarea",{placeholder:"тело сообщения",id:"text","onUpdate:modelValue":g[2]||(g[2]=E=>r.value=E)},null,512),[[Ln,r.value]])]),z("div",sd,[g[9]||(g[9]=z("label",{for:"token"},"Token",-1)),xn(z("textarea",{placeholder:n.value,id:"token","onUpdate:modelValue":g[3]||(g[3]=E=>i.value=E)},null,8,rd),[[Ln,i.value]])]),z("button",{class:"button-send",onClick:g[4]||(g[4]=E=>d())}," Отправить сообщение ")])]))}}),ad=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},cd=ad(od,[["__scopeId","data-v-258e75d2"]]);el(cd).mount("#app");
