(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},hn=[],at=()=>{},dh=()=>!1,yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qr=t=>t.startsWith("onUpdate:"),Pe=Object.assign,Kr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ph=Object.prototype.hasOwnProperty,J=(t,e)=>ph.call(t,e),M=Array.isArray,fn=t=>bs(t)==="[object Map]",vi=t=>bs(t)==="[object Set]",Xo=t=>bs(t)==="[object Date]",U=t=>typeof t=="function",ge=t=>typeof t=="string",ct=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Ia=t=>(ae(t)||U(t))&&U(t.then)&&U(t.catch),Ta=Object.prototype.toString,bs=t=>Ta.call(t),_h=t=>bs(t).slice(8,-1),xa=t=>bs(t)==="[object Object]",Gr=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qn=jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gh=/-(\w)/g,Dt=bi(t=>t.replace(gh,(e,n)=>n?n.toUpperCase():"")),mh=/\B([A-Z])/g,nn=bi(t=>t.replace(mh,"-$1").toLowerCase()),Na=bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),qi=bi(t=>t?`on${Na(t)}`:""),Tt=(t,e)=>!Object.is(t,e),Us=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ra=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zo;const Ci=()=>Zo||(Zo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ge(s)?Ch(s):zr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ge(t)||ae(t))return t}const yh=/;(?![^(]*\))/g,vh=/:([^]+)/,bh=/\/\*[^]*?\*\//g;function Ch(t){const e={};return t.replace(bh,"").split(yh).forEach(n=>{if(n){const s=n.split(vh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yt(t){let e="";if(ge(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const s=Yt(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wh=jr(Eh);function Aa(t){return!!t||t===""}function Sh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ei(t[s],e[s]);return n}function Ei(t,e){if(t===e)return!0;let n=Xo(t),s=Xo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ct(t),s=ct(e),n||s)return t===e;if(n=M(t),s=M(e),n||s)return n&&s?Sh(t,e):!1;if(n=ae(t),s=ae(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Ei(t[o],e[o]))return!1}}return String(t)===String(e)}function Ih(t,e){return t.findIndex(n=>Ei(n,e))}const Da=t=>!!(t&&t.__v_isRef===!0),Ue=t=>ge(t)?t:t==null?"":M(t)||ae(t)&&(t.toString===Ta||!U(t.toString))?Da(t)?Ue(t.value):JSON.stringify(t,Pa,2):String(t),Pa=(t,e)=>Da(e)?Pa(t,e.value):fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ki(s,r)+" =>"]=i,n),{})}:vi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ki(n))}:ct(e)?Ki(e):ae(e)&&!M(e)&&!xa(e)?String(e):e,Ki=(t,e="")=>{var n;return ct(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Oa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ka(t){return new Oa(t)}function Ma(){return Re}function Th(t,e=!1){Re&&Re.cleanups.push(t)}let ie;const Gi=new WeakSet;class Fa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gi.has(this)&&(Gi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ba(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,el(this),Ua(this);const e=ie,n=Qe;ie=this,Qe=!0;try{return this.fn()}finally{Wa(this),ie=e,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jr(e);this.deps=this.depsTail=void 0,el(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fr(this)&&this.run()}get dirty(){return fr(this)}}let La=0,Kn,Gn;function Ba(t,e=!1){if(t.flags|=8,e){t.next=Gn,Gn=t;return}t.next=Kn,Kn=t}function Yr(){La++}function Qr(){if(--La>0)return;if(Gn){let e=Gn;for(Gn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Kn;){let e=Kn;for(Kn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ua(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wa(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Jr(s),xh(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function fr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ha(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ha(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===is))return;t.globalVersion=is;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!fr(t)){t.flags&=-3;return}const n=ie,s=Qe;ie=t,Qe=!0;try{Ua(t);const i=t.fn(t._value);(e.version===0||Tt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ie=n,Qe=s,Wa(t),t.flags&=-3}}function Jr(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Jr(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qe=!0;const Va=[];function kt(){Va.push(Qe),Qe=!1}function Mt(){const t=Va.pop();Qe=t===void 0?!0:t}function el(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let is=0;class Nh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!Qe||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new Nh(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,$a(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=s)}return n}trigger(e){this.version++,is++,this.notify(e)}notify(e){Yr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qr()}}}function $a(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)$a(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qs=new WeakMap,Kt=Symbol(""),dr=Symbol(""),rs=Symbol("");function Ie(t,e,n){if(Qe&&ie){let s=qs.get(t);s||qs.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Xr),i.map=s,i.key=n),i.track()}}function pt(t,e,n,s,i,r){const o=qs.get(t);if(!o){is++;return}const l=a=>{a&&a.trigger()};if(Yr(),e==="clear")o.forEach(l);else{const a=M(t),u=a&&Gr(n);if(a&&n==="length"){const c=Number(s);o.forEach((h,d)=>{(d==="length"||d===rs||!ct(d)&&d>=c)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(rs)),e){case"add":a?u&&l(o.get("length")):(l(o.get(Kt)),fn(t)&&l(o.get(dr)));break;case"delete":a||(l(o.get(Kt)),fn(t)&&l(o.get(dr)));break;case"set":fn(t)&&l(o.get(Kt));break}}Qr()}function Rh(t,e){const n=qs.get(t);return n&&n.get(e)}function on(t){const e=Y(t);return e===t?e:(Ie(e,"iterate",rs),qe(t)?e:e.map(Te))}function wi(t){return Ie(t=Y(t),"iterate",rs),t}const Ah={__proto__:null,[Symbol.iterator](){return zi(this,Symbol.iterator,Te)},concat(...t){return on(this).concat(...t.map(e=>M(e)?on(e):e))},entries(){return zi(this,"entries",t=>(t[1]=Te(t[1]),t))},every(t,e){return ft(this,"every",t,e,void 0,arguments)},filter(t,e){return ft(this,"filter",t,e,n=>n.map(Te),arguments)},find(t,e){return ft(this,"find",t,e,Te,arguments)},findIndex(t,e){return ft(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ft(this,"findLast",t,e,Te,arguments)},findLastIndex(t,e){return ft(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ft(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yi(this,"includes",t)},indexOf(...t){return Yi(this,"indexOf",t)},join(t){return on(this).join(t)},lastIndexOf(...t){return Yi(this,"lastIndexOf",t)},map(t,e){return ft(this,"map",t,e,void 0,arguments)},pop(){return Ln(this,"pop")},push(...t){return Ln(this,"push",t)},reduce(t,...e){return tl(this,"reduce",t,e)},reduceRight(t,...e){return tl(this,"reduceRight",t,e)},shift(){return Ln(this,"shift")},some(t,e){return ft(this,"some",t,e,void 0,arguments)},splice(...t){return Ln(this,"splice",t)},toReversed(){return on(this).toReversed()},toSorted(t){return on(this).toSorted(t)},toSpliced(...t){return on(this).toSpliced(...t)},unshift(...t){return Ln(this,"unshift",t)},values(){return zi(this,"values",Te)}};function zi(t,e,n){const s=wi(t),i=s[e]();return s!==t&&!qe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Dh=Array.prototype;function ft(t,e,n,s,i,r){const o=wi(t),l=o!==t&&!qe(t),a=o[e];if(a!==Dh[e]){const h=a.apply(t,r);return l?Te(h):h}let u=n;o!==t&&(l?u=function(h,d){return n.call(this,Te(h),d,t)}:n.length>2&&(u=function(h,d){return n.call(this,h,d,t)}));const c=a.call(o,u,s);return l&&i?i(c):c}function tl(t,e,n,s){const i=wi(t);let r=n;return i!==t&&(qe(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,Te(l),a,t)}),i[e](r,...s)}function Yi(t,e,n){const s=Y(t);Ie(s,"iterate",rs);const i=s[e](...n);return(i===-1||i===!1)&&to(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function Ln(t,e,n=[]){kt(),Yr();const s=Y(t)[e].apply(t,n);return Qr(),Mt(),s}const Ph=jr("__proto__,__v_isRef,__isVue"),ja=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ct));function Oh(t){ct(t)||(t=String(t));const e=Y(this);return Ie(e,"has",t),e.hasOwnProperty(t)}class qa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?$h:Ya:r?za:Ga).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=M(e);if(!i){let a;if(o&&(a=Ah[n]))return a;if(n==="hasOwnProperty")return Oh}const l=Reflect.get(e,n,_e(e)?e:s);return(ct(n)?ja.has(n):Ph(n))||(i||Ie(e,"get",n),r)?l:_e(l)?o&&Gr(n)?l:l.value:ae(l)?i?Qa(l):Si(l):l}}class Ka extends qa{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Qt(r);if(!qe(s)&&!Qt(s)&&(r=Y(r),s=Y(s)),!M(e)&&_e(r)&&!_e(s))return a?!1:(r.value=s,!0)}const o=M(e)&&Gr(n)?Number(n)<e.length:J(e,n),l=Reflect.set(e,n,s,_e(e)?e:i);return e===Y(i)&&(o?Tt(s,r)&&pt(e,"set",n,s):pt(e,"add",n,s)),l}deleteProperty(e,n){const s=J(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&pt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!ct(n)||!ja.has(n))&&Ie(e,"has",n),s}ownKeys(e){return Ie(e,"iterate",M(e)?"length":Kt),Reflect.ownKeys(e)}}class kh extends qa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Mh=new Ka,Fh=new kh,Lh=new Ka(!0);const pr=t=>t,Ps=t=>Reflect.getPrototypeOf(t);function Bh(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=fn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,u=i[t](...s),c=n?pr:e?_r:Te;return!e&&Ie(r,"iterate",a?dr:Kt),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:l?[c(h[0]),c(h[1])]:c(h),done:d}},[Symbol.iterator](){return this}}}}function Os(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Uh(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(Tt(i,l)&&Ie(o,"get",i),Ie(o,"get",l));const{has:a}=Ps(o),u=e?pr:t?_r:Te;if(a.call(o,i))return u(r.get(i));if(a.call(o,l))return u(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ie(Y(i),"iterate",Kt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(Tt(i,l)&&Ie(o,"has",i),Ie(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=Y(l),u=e?pr:t?_r:Te;return!t&&Ie(a,"iterate",Kt),l.forEach((c,h)=>i.call(r,u(c),u(h),o))}};return Pe(n,t?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(i){!e&&!qe(i)&&!Qt(i)&&(i=Y(i));const r=Y(this);return Ps(r).has.call(r,i)||(r.add(i),pt(r,"add",i,i)),this},set(i,r){!e&&!qe(r)&&!Qt(r)&&(r=Y(r));const o=Y(this),{has:l,get:a}=Ps(o);let u=l.call(o,i);u||(i=Y(i),u=l.call(o,i));const c=a.call(o,i);return o.set(i,r),u?Tt(r,c)&&pt(o,"set",i,r):pt(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=Ps(r);let a=o.call(r,i);a||(i=Y(i),a=o.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return a&&pt(r,"delete",i,void 0),u},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&pt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Bh(i,t,e)}),n}function Zr(t,e){const n=Uh(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(J(n,i)&&i in s?n:s,i,r)}const Wh={get:Zr(!1,!1)},Hh={get:Zr(!1,!0)},Vh={get:Zr(!0,!1)};const Ga=new WeakMap,za=new WeakMap,Ya=new WeakMap,$h=new WeakMap;function jh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qh(t){return t.__v_skip||!Object.isExtensible(t)?0:jh(_h(t))}function Si(t){return Qt(t)?t:eo(t,!1,Mh,Wh,Ga)}function Kh(t){return eo(t,!1,Lh,Hh,za)}function Qa(t){return eo(t,!0,Fh,Vh,Ya)}function eo(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=qh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function xt(t){return Qt(t)?xt(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function qe(t){return!!(t&&t.__v_isShallow)}function to(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function no(t){return!J(t,"__v_skip")&&Object.isExtensible(t)&&Ra(t,"__v_skip",!0),t}const Te=t=>ae(t)?Si(t):t,_r=t=>ae(t)?Qa(t):t;function _e(t){return t?t.__v_isRef===!0:!1}function me(t){return Gh(t,!1)}function Gh(t,e){return _e(t)?t:new zh(t,e)}class zh{constructor(e,n){this.dep=new Xr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:Te(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||qe(e)||Qt(e);e=s?e:Y(e),Tt(e,n)&&(this._rawValue=e,this._value=s?e:Te(e),this.dep.trigger())}}function Yh(t){return _e(t)?t.value:t}const Qh={get:(t,e,n)=>e==="__v_raw"?t:Yh(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ja(t){return xt(t)?t:new Proxy(t,Qh)}function Jh(t){const e=M(t)?new Array(t.length):{};for(const n in t)e[n]=Zh(t,n);return e}class Xh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Rh(Y(this._object),this._key)}}function Zh(t,e,n){const s=t[e];return _e(s)?s:new Xh(t,e,n)}class ef{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return Ba(this,!0),!0}get value(){const e=this.dep.track();return Ha(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tf(t,e,n=!1){let s,i;return U(t)?s=t:(s=t.get,i=t.set),new ef(s,i,n)}const ks={},Ks=new WeakMap;let Ht;function nf(t,e=!1,n=Ht){if(n){let s=Ks.get(n);s||Ks.set(n,s=[]),s.push(t)}}function sf(t,e,n=te){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,u=P=>i?P:qe(P)||i===!1||i===0?_t(P,1):_t(P);let c,h,d,_,m=!1,S=!1;if(_e(t)?(h=()=>t.value,m=qe(t)):xt(t)?(h=()=>u(t),m=!0):M(t)?(S=!0,m=t.some(P=>xt(P)||qe(P)),h=()=>t.map(P=>{if(_e(P))return P.value;if(xt(P))return u(P);if(U(P))return a?a(P,2):P()})):U(t)?e?h=a?()=>a(t,2):t:h=()=>{if(d){kt();try{d()}finally{Mt()}}const P=Ht;Ht=c;try{return a?a(t,3,[_]):t(_)}finally{Ht=P}}:h=at,e&&i){const P=h,z=i===!0?1/0:i;h=()=>_t(P(),z)}const F=Ma(),W=()=>{c.stop(),F&&F.active&&Kr(F.effects,c)};if(r&&e){const P=e;e=(...z)=>{P(...z),W()}}let K=S?new Array(t.length).fill(ks):ks;const G=P=>{if(!(!(c.flags&1)||!c.dirty&&!P))if(e){const z=c.run();if(i||m||(S?z.some((Ge,L)=>Tt(Ge,K[L])):Tt(z,K))){d&&d();const Ge=Ht;Ht=c;try{const L=[z,K===ks?void 0:S&&K[0]===ks?[]:K,_];a?a(e,3,L):e(...L),K=z}finally{Ht=Ge}}}else c.run()};return l&&l(G),c=new Fa(h),c.scheduler=o?()=>o(G,!1):G,_=P=>nf(P,!1,c),d=c.onStop=()=>{const P=Ks.get(c);if(P){if(a)a(P,4);else for(const z of P)z();Ks.delete(c)}},e?s?G(!0):K=c.run():o?o(G.bind(null,!0),!0):c.run(),W.pause=c.pause.bind(c),W.resume=c.resume.bind(c),W.stop=W,W}function _t(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_e(t))_t(t.value,e,n);else if(M(t))for(let s=0;s<t.length;s++)_t(t[s],e,n);else if(vi(t)||fn(t))t.forEach(s=>{_t(s,e,n)});else if(xa(t)){for(const s in t)_t(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&_t(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cs(t,e,n,s){try{return s?t(...s):t()}catch(i){Ii(i,e,n)}}function ut(t,e,n,s){if(U(t)){const i=Cs(t,e,n,s);return i&&Ia(i)&&i.catch(r=>{Ii(r,e,n)}),i}if(M(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}}function Ii(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let l=e.parent;const a=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const c=l.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](t,a,u)===!1)return}l=l.parent}if(r){kt(),Cs(r,null,10,[t,a,u]),Mt();return}}rf(t,n,i,s,o)}function rf(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ae=[];let rt=-1;const dn=[];let wt=null,cn=0;const Xa=Promise.resolve();let Gs=null;function so(t){const e=Gs||Xa;return t?e.then(this?t.bind(this):t):e}function of(t){let e=rt+1,n=Ae.length;for(;e<n;){const s=e+n>>>1,i=Ae[s],r=os(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function io(t){if(!(t.flags&1)){const e=os(t),n=Ae[Ae.length-1];!n||!(t.flags&2)&&e>=os(n)?Ae.push(t):Ae.splice(of(e),0,t),t.flags|=1,Za()}}function Za(){Gs||(Gs=Xa.then(tc))}function lf(t){M(t)?dn.push(...t):wt&&t.id===-1?wt.splice(cn+1,0,t):t.flags&1||(dn.push(t),t.flags|=1),Za()}function nl(t,e,n=rt+1){for(;n<Ae.length;n++){const s=Ae[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ae.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ec(t){if(dn.length){const e=[...new Set(dn)].sort((n,s)=>os(n)-os(s));if(dn.length=0,wt){wt.push(...e);return}for(wt=e,cn=0;cn<wt.length;cn++){const n=wt[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wt=null,cn=0}}const os=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tc(t){try{for(rt=0;rt<Ae.length;rt++){const e=Ae[rt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rt<Ae.length;rt++){const e=Ae[rt];e&&(e.flags&=-2)}rt=-1,Ae.length=0,ec(),Gs=null,(Ae.length||dn.length)&&tc()}}let We=null,nc=null;function zs(t){const e=We;return We=t,nc=t&&t.type.__scopeId||null,e}function af(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&hl(-1);const r=zs(e);let o;try{o=t(...i)}finally{zs(r),s._d&&hl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ce(t,e){if(We===null)return t;const n=Ri(We),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=te]=e[i];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&_t(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function Ut(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(kt(),ut(a,n,8,[t.el,l,t,e]),Mt())}}const cf=Symbol("_vte"),uf=t=>t.__isTeleport;function ro(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ro(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ys(t,e,n,s,i=!1){if(M(t)){t.forEach((m,S)=>Ys(m,e&&(M(e)?e[S]:e),n,s,i));return}if(zn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ys(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ri(s.component):s.el,o=i?null:r,{i:l,r:a}=t,u=e&&e.r,c=l.refs===te?l.refs={}:l.refs,h=l.setupState,d=Y(h),_=h===te?()=>!1:m=>J(d,m);if(u!=null&&u!==a&&(ge(u)?(c[u]=null,_(u)&&(h[u]=null)):_e(u)&&(u.value=null)),U(a))Cs(a,l,12,[o,c]);else{const m=ge(a),S=_e(a);if(m||S){const F=()=>{if(t.f){const W=m?_(a)?h[a]:c[a]:a.value;i?M(W)&&Kr(W,r):M(W)?W.includes(r)||W.push(r):m?(c[a]=[r],_(a)&&(h[a]=c[a])):(a.value=[r],t.k&&(c[t.k]=a.value))}else m?(c[a]=o,_(a)&&(h[a]=o)):S&&(a.value=o,t.k&&(c[t.k]=o))};o?(F.id=-1,Be(F,n)):F()}}}Ci().requestIdleCallback;Ci().cancelIdleCallback;const zn=t=>!!t.type.__asyncLoader,ic=t=>t.type.__isKeepAlive;function hf(t,e){rc(t,"a",e)}function ff(t,e){rc(t,"da",e)}function rc(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ti(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ic(i.parent.vnode)&&df(s,e,n,i),i=i.parent}}function df(t,e,n,s){const i=Ti(e,t,s,!0);lc(()=>{Kr(s[e],i)},n)}function Ti(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{kt();const l=Es(n),a=ut(e,n,t,o);return l(),Mt(),a});return s?i.unshift(r):i.push(r),r}}const bt=t=>(e,n=xe)=>{(!cs||t==="sp")&&Ti(t,(...s)=>e(...s),n)},pf=bt("bm"),oc=bt("m"),_f=bt("bu"),gf=bt("u"),mf=bt("bum"),lc=bt("um"),yf=bt("sp"),vf=bt("rtg"),bf=bt("rtc");function Cf(t,e=xe){Ti("ec",t,e)}const Ef=Symbol.for("v-ndc");function ac(t,e,n,s){let i;const r=n,o=M(t);if(o||ge(t)){const l=o&&xt(t);let a=!1;l&&(a=!qe(t),t=wi(t)),i=new Array(t.length);for(let u=0,c=t.length;u<c;u++)i[u]=e(a?Te(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];i[a]=e(t[c],c,a,r)}}else i=[];return i}const gr=t=>t?Dc(t)?Ri(t):gr(t.parent):null,Yn=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gr(t.parent),$root:t=>gr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>uc(t),$forceUpdate:t=>t.f||(t.f=()=>{io(t.update)}),$nextTick:t=>t.n||(t.n=so.bind(t.proxy)),$watch:t=>qf.bind(t)}),Qi=(t,e)=>t!==te&&!t.__isScriptSetup&&J(t,e),wf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Qi(s,e))return o[e]=1,s[e];if(i!==te&&J(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&J(u,e))return o[e]=3,r[e];if(n!==te&&J(n,e))return o[e]=4,n[e];mr&&(o[e]=0)}}const c=Yn[e];let h,d;if(c)return e==="$attrs"&&Ie(t.attrs,"get",""),c(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==te&&J(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,J(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Qi(i,e)?(i[e]=n,!0):s!==te&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==te&&J(t,o)||Qi(e,o)||(l=r[0])&&J(l,o)||J(s,o)||J(Yn,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sl(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mr=!0;function Sf(t){const e=uc(t),n=t.proxy,s=t.ctx;mr=!1,e.beforeCreate&&il(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:S,deactivated:F,beforeDestroy:W,beforeUnmount:K,destroyed:G,unmounted:P,render:z,renderTracked:Ge,renderTriggered:L,errorCaptured:R,serverPrefetch:A,expose:Z,inheritAttrs:Ve,components:Ze,directives:Ct,filters:On}=e;if(u&&If(u,s,null),o)for(const j in o){const ne=o[j];U(ne)&&(s[j]=ne.bind(n))}if(i){const j=i.call(n,n);ae(j)&&(t.data=Si(j))}if(mr=!0,r)for(const j in r){const ne=r[j],Lt=U(ne)?ne.bind(n,n):U(ne.get)?ne.get.bind(n,n):at,As=!U(ne)&&U(ne.set)?ne.set.bind(n):at,Bt=zt({get:Lt,set:As});Object.defineProperty(s,j,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:et=>Bt.value=et})}if(l)for(const j in l)cc(l[j],s,n,j);if(a){const j=U(a)?a.call(n):a;Reflect.ownKeys(j).forEach(ne=>{Df(ne,j[ne])})}c&&il(c,t,"c");function de(j,ne){M(ne)?ne.forEach(Lt=>j(Lt.bind(n))):ne&&j(ne.bind(n))}if(de(pf,h),de(oc,d),de(_f,_),de(gf,m),de(hf,S),de(ff,F),de(Cf,R),de(bf,Ge),de(vf,L),de(mf,K),de(lc,P),de(yf,A),M(Z))if(Z.length){const j=t.exposed||(t.exposed={});Z.forEach(ne=>{Object.defineProperty(j,ne,{get:()=>n[ne],set:Lt=>n[ne]=Lt})})}else t.exposed||(t.exposed={});z&&t.render===at&&(t.render=z),Ve!=null&&(t.inheritAttrs=Ve),Ze&&(t.components=Ze),Ct&&(t.directives=Ct),A&&sc(t)}function If(t,e,n=at){M(t)&&(t=yr(t));for(const s in t){const i=t[s];let r;ae(i)?"default"in i?r=pn(i.from||s,i.default,!0):r=pn(i.from||s):r=pn(i),_e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function il(t,e,n){ut(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cc(t,e,n,s){let i=s.includes(".")?Sc(n,s):()=>n[s];if(ge(t)){const r=e[t];U(r)&&Qn(i,r)}else if(U(t))Qn(i,t.bind(n));else if(ae(t))if(M(t))t.forEach(r=>cc(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&Qn(i,r,t)}}function uc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(u=>Qs(a,u,o,!0)),Qs(a,e,o)),ae(e)&&r.set(e,a),a}function Qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Qs(t,r,n,!0),i&&i.forEach(o=>Qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Tf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Tf={data:rl,props:ol,emits:ol,methods:$n,computed:$n,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:$n,directives:$n,watch:Nf,provide:rl,inject:xf};function rl(t,e){return e?t?function(){return Pe(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function xf(t,e){return $n(yr(t),yr(e))}function yr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?Pe(Object.create(null),t,e):e}function ol(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:Pe(Object.create(null),sl(t),sl(e??{})):e}function Nf(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function hc(){return{app:null,config:{isNativeTag:dh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rf=0;function Af(t,e){return function(s,i=null){U(s)||(s=Pe({},s)),i!=null&&!ae(i)&&(i=null);const r=hc(),o=new WeakSet,l=[];let a=!1;const u=r.app={_uid:Rf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:hd,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(u,...h)):U(c)&&(o.add(c),c(u,...h))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,h){return h?(r.components[c]=h,u):r.components[c]},directive(c,h){return h?(r.directives[c]=h,u):r.directives[c]},mount(c,h,d){if(!a){const _=u._ceVNode||Ke(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,c,d),a=!0,u._container=c,c.__vue_app__=u,Ri(_.component)}},onUnmount(c){l.push(c)},unmount(){a&&(ut(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,h){return r.provides[c]=h,u},runWithContext(c){const h=Gt;Gt=u;try{return c()}finally{Gt=h}}};return u}}let Gt=null;function Df(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function pn(t,e,n=!1){const s=xe||We;if(s||Gt){const i=Gt?Gt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s&&s.proxy):e}}function Pf(){return!!(xe||We||Gt)}const fc={},dc=()=>Object.create(fc),pc=t=>Object.getPrototypeOf(t)===fc;function Of(t,e,n,s=!1){const i={},r=dc();t.propsDefaults=Object.create(null),_c(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Kh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[a]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if(xi(t.emitsOptions,d))continue;const _=e[d];if(a)if(J(r,d))_!==r[d]&&(r[d]=_,u=!0);else{const m=Dt(d);i[m]=vr(a,l,m,_,t,!1)}else _!==r[d]&&(r[d]=_,u=!0)}}}else{_c(t,e,i,r)&&(u=!0);let c;for(const h in l)(!e||!J(e,h)&&((c=nn(h))===h||!J(e,c)))&&(a?n&&(n[h]!==void 0||n[c]!==void 0)&&(i[h]=vr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!J(e,h))&&(delete r[h],u=!0)}u&&pt(t.attrs,"set","")}function _c(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(qn(a))continue;const u=e[a];let c;i&&J(i,c=Dt(a))?!r||!r.includes(c)?n[c]=u:(l||(l={}))[c]=u:xi(t.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,o=!0)}if(r){const a=Y(n),u=l||te;for(let c=0;c<r.length;c++){const h=r[c];n[h]=vr(i,a,h,u[h],t,!J(u,h))}}return o}function vr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=J(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&U(a)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const c=Es(i);s=u[n]=a.call(null,e),c()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===nn(n))&&(s=!0))}return s}const Mf=new WeakMap;function gc(t,e,n=!1){const s=n?Mf:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const c=h=>{a=!0;const[d,_]=gc(h,e,!0);Pe(o,d),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!r&&!a)return ae(t)&&s.set(t,hn),hn;if(M(r))for(let c=0;c<r.length;c++){const h=Dt(r[c]);ll(h)&&(o[h]=te)}else if(r)for(const c in r){const h=Dt(c);if(ll(h)){const d=r[c],_=o[h]=M(d)||U(d)?{type:d}:Pe({},d),m=_.type;let S=!1,F=!0;if(M(m))for(let W=0;W<m.length;++W){const K=m[W],G=U(K)&&K.name;if(G==="Boolean"){S=!0;break}else G==="String"&&(F=!1)}else S=U(m)&&m.name==="Boolean";_[0]=S,_[1]=F,(S||J(_,"default"))&&l.push(h)}}const u=[o,l];return ae(t)&&s.set(t,u),u}function ll(t){return t[0]!=="$"&&!qn(t)}const mc=t=>t[0]==="_"||t==="$stable",oo=t=>M(t)?t.map(lt):[lt(t)],Ff=(t,e,n)=>{if(e._n)return e;const s=af((...i)=>oo(e(...i)),n);return s._c=!1,s},yc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(mc(i))continue;const r=t[i];if(U(r))e[i]=Ff(i,r,s);else if(r!=null){const o=oo(r);e[i]=()=>o}}},vc=(t,e)=>{const n=oo(e);t.slots.default=()=>n},bc=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Lf=(t,e,n)=>{const s=t.slots=dc();if(t.vnode.shapeFlag&32){const i=e._;i?(bc(s,e,n),n&&Ra(s,"_",i,!0)):yc(e,s)}else e&&vc(t,e)},Bf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=te;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:bc(i,e,n):(r=!e.$stable,yc(e,i)),o=e}else e&&(vc(t,e),o={default:1});if(r)for(const l in i)!mc(l)&&o[l]==null&&delete i[l]},Be=Xf;function Uf(t){return Wf(t)}function Wf(t,e){const n=Ci();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:_=at,insertStaticContent:m}=t,S=(f,p,g,C=null,y=null,v=null,x=void 0,T=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Bn(f,p)&&(C=Ds(f),et(f,y,v,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:E,ref:O,shapeFlag:N}=p;switch(E){case Ni:F(f,p,g,C);break;case Jt:W(f,p,g,C);break;case Ws:f==null&&K(p,g,C,x);break;case $e:Ze(f,p,g,C,y,v,x,T,I);break;default:N&1?z(f,p,g,C,y,v,x,T,I):N&6?Ct(f,p,g,C,y,v,x,T,I):(N&64||N&128)&&E.process(f,p,g,C,y,v,x,T,I,Mn)}O!=null&&y&&Ys(O,f&&f.ref,v,p||f,!p)},F=(f,p,g,C)=>{if(f==null)s(p.el=l(p.children),g,C);else{const y=p.el=f.el;p.children!==f.children&&u(y,p.children)}},W=(f,p,g,C)=>{f==null?s(p.el=a(p.children||""),g,C):p.el=f.el},K=(f,p,g,C)=>{[f.el,f.anchor]=m(f.children,p,g,C,f.el,f.anchor)},G=({el:f,anchor:p},g,C)=>{let y;for(;f&&f!==p;)y=d(f),s(f,g,C),f=y;s(p,g,C)},P=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},z=(f,p,g,C,y,v,x,T,I)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),f==null?Ge(p,g,C,y,v,x,T,I):A(f,p,y,v,x,T,I)},Ge=(f,p,g,C,y,v,x,T)=>{let I,E;const{props:O,shapeFlag:N,transition:D,dirs:B}=f;if(I=f.el=o(f.type,v,O&&O.is,O),N&8?c(I,f.children):N&16&&R(f.children,I,null,C,y,Ji(f,v),x,T),B&&Ut(f,null,C,"created"),L(I,f,f.scopeId,x,C),O){for(const se in O)se!=="value"&&!qn(se)&&r(I,se,null,O[se],v,C);"value"in O&&r(I,"value",null,O.value,v),(E=O.onVnodeBeforeMount)&&it(E,C,f)}B&&Ut(f,null,C,"beforeMount");const q=Hf(y,D);q&&D.beforeEnter(I),s(I,p,g),((E=O&&O.onVnodeMounted)||q||B)&&Be(()=>{E&&it(E,C,f),q&&D.enter(I),B&&Ut(f,null,C,"mounted")},y)},L=(f,p,g,C,y)=>{if(g&&_(f,g),C)for(let v=0;v<C.length;v++)_(f,C[v]);if(y){let v=y.subTree;if(p===v||Tc(v.type)&&(v.ssContent===p||v.ssFallback===p)){const x=y.vnode;L(f,x,x.scopeId,x.slotScopeIds,y.parent)}}},R=(f,p,g,C,y,v,x,T,I=0)=>{for(let E=I;E<f.length;E++){const O=f[E]=T?St(f[E]):lt(f[E]);S(null,O,p,g,C,y,v,x,T)}},A=(f,p,g,C,y,v,x)=>{const T=p.el=f.el;let{patchFlag:I,dynamicChildren:E,dirs:O}=p;I|=f.patchFlag&16;const N=f.props||te,D=p.props||te;let B;if(g&&Wt(g,!1),(B=D.onVnodeBeforeUpdate)&&it(B,g,p,f),O&&Ut(p,f,g,"beforeUpdate"),g&&Wt(g,!0),(N.innerHTML&&D.innerHTML==null||N.textContent&&D.textContent==null)&&c(T,""),E?Z(f.dynamicChildren,E,T,g,C,Ji(p,y),v):x||ne(f,p,T,null,g,C,Ji(p,y),v,!1),I>0){if(I&16)Ve(T,N,D,g,y);else if(I&2&&N.class!==D.class&&r(T,"class",null,D.class,y),I&4&&r(T,"style",N.style,D.style,y),I&8){const q=p.dynamicProps;for(let se=0;se<q.length;se++){const X=q[se],Fe=N[X],Oe=D[X];(Oe!==Fe||X==="value")&&r(T,X,Fe,Oe,y,g)}}I&1&&f.children!==p.children&&c(T,p.children)}else!x&&E==null&&Ve(T,N,D,g,y);((B=D.onVnodeUpdated)||O)&&Be(()=>{B&&it(B,g,p,f),O&&Ut(p,f,g,"updated")},C)},Z=(f,p,g,C,y,v,x)=>{for(let T=0;T<p.length;T++){const I=f[T],E=p[T],O=I.el&&(I.type===$e||!Bn(I,E)||I.shapeFlag&70)?h(I.el):g;S(I,E,O,null,C,y,v,x,!0)}},Ve=(f,p,g,C,y)=>{if(p!==g){if(p!==te)for(const v in p)!qn(v)&&!(v in g)&&r(f,v,p[v],null,y,C);for(const v in g){if(qn(v))continue;const x=g[v],T=p[v];x!==T&&v!=="value"&&r(f,v,T,x,y,C)}"value"in g&&r(f,"value",p.value,g.value,y)}},Ze=(f,p,g,C,y,v,x,T,I)=>{const E=p.el=f?f.el:l(""),O=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:D,slotScopeIds:B}=p;B&&(T=T?T.concat(B):B),f==null?(s(E,g,C),s(O,g,C),R(p.children||[],g,O,y,v,x,T,I)):N>0&&N&64&&D&&f.dynamicChildren?(Z(f.dynamicChildren,D,g,y,v,x,T),(p.key!=null||y&&p===y.subTree)&&Cc(f,p,!0)):ne(f,p,g,O,y,v,x,T,I)},Ct=(f,p,g,C,y,v,x,T,I)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?y.ctx.activate(p,g,C,x,I):On(p,g,C,y,v,x,I):Rs(f,p,I)},On=(f,p,g,C,y,v,x)=>{const T=f.component=rd(f,C,y);if(ic(f)&&(T.ctx.renderer=Mn),od(T,!1,x),T.asyncDep){if(y&&y.registerDep(T,de,x),!f.el){const I=T.subTree=Ke(Jt);W(null,I,p,g)}}else de(T,f,p,g,y,v,x)},Rs=(f,p,g)=>{const C=p.component=f.component;if(Qf(f,p,g))if(C.asyncDep&&!C.asyncResolved){j(C,p,g);return}else C.next=p,C.update();else p.el=f.el,C.vnode=p},de=(f,p,g,C,y,v,x)=>{const T=()=>{if(f.isMounted){let{next:N,bu:D,u:B,parent:q,vnode:se}=f;{const nt=Ec(f);if(nt){N&&(N.el=se.el,j(f,N,x)),nt.asyncDep.then(()=>{f.isUnmounted||T()});return}}let X=N,Fe;Wt(f,!1),N?(N.el=se.el,j(f,N,x)):N=se,D&&Us(D),(Fe=N.props&&N.props.onVnodeBeforeUpdate)&&it(Fe,q,N,se),Wt(f,!0);const Oe=cl(f),tt=f.subTree;f.subTree=Oe,S(tt,Oe,h(tt.el),Ds(tt),f,y,v),N.el=Oe.el,X===null&&Jf(f,Oe.el),B&&Be(B,y),(Fe=N.props&&N.props.onVnodeUpdated)&&Be(()=>it(Fe,q,N,se),y)}else{let N;const{el:D,props:B}=p,{bm:q,m:se,parent:X,root:Fe,type:Oe}=f,tt=zn(p);Wt(f,!1),q&&Us(q),!tt&&(N=B&&B.onVnodeBeforeMount)&&it(N,X,p),Wt(f,!0);{Fe.ce&&Fe.ce._injectChildStyle(Oe);const nt=f.subTree=cl(f);S(null,nt,g,C,f,y,v),p.el=nt.el}if(se&&Be(se,y),!tt&&(N=B&&B.onVnodeMounted)){const nt=p;Be(()=>it(N,X,nt),y)}(p.shapeFlag&256||X&&zn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&Be(f.a,y),f.isMounted=!0,p=g=C=null}};f.scope.on();const I=f.effect=new Fa(T);f.scope.off();const E=f.update=I.run.bind(I),O=f.job=I.runIfDirty.bind(I);O.i=f,O.id=f.uid,I.scheduler=()=>io(O),Wt(f,!0),E()},j=(f,p,g)=>{p.component=f;const C=f.vnode.props;f.vnode=p,f.next=null,kf(f,p.props,C,g),Bf(f,p.children,g),kt(),nl(f),Mt()},ne=(f,p,g,C,y,v,x,T,I=!1)=>{const E=f&&f.children,O=f?f.shapeFlag:0,N=p.children,{patchFlag:D,shapeFlag:B}=p;if(D>0){if(D&128){As(E,N,g,C,y,v,x,T,I);return}else if(D&256){Lt(E,N,g,C,y,v,x,T,I);return}}B&8?(O&16&&kn(E,y,v),N!==E&&c(g,N)):O&16?B&16?As(E,N,g,C,y,v,x,T,I):kn(E,y,v,!0):(O&8&&c(g,""),B&16&&R(N,g,C,y,v,x,T,I))},Lt=(f,p,g,C,y,v,x,T,I)=>{f=f||hn,p=p||hn;const E=f.length,O=p.length,N=Math.min(E,O);let D;for(D=0;D<N;D++){const B=p[D]=I?St(p[D]):lt(p[D]);S(f[D],B,g,null,y,v,x,T,I)}E>O?kn(f,y,v,!0,!1,N):R(p,g,C,y,v,x,T,I,N)},As=(f,p,g,C,y,v,x,T,I)=>{let E=0;const O=p.length;let N=f.length-1,D=O-1;for(;E<=N&&E<=D;){const B=f[E],q=p[E]=I?St(p[E]):lt(p[E]);if(Bn(B,q))S(B,q,g,null,y,v,x,T,I);else break;E++}for(;E<=N&&E<=D;){const B=f[N],q=p[D]=I?St(p[D]):lt(p[D]);if(Bn(B,q))S(B,q,g,null,y,v,x,T,I);else break;N--,D--}if(E>N){if(E<=D){const B=D+1,q=B<O?p[B].el:C;for(;E<=D;)S(null,p[E]=I?St(p[E]):lt(p[E]),g,q,y,v,x,T,I),E++}}else if(E>D)for(;E<=N;)et(f[E],y,v,!0),E++;else{const B=E,q=E,se=new Map;for(E=q;E<=D;E++){const Le=p[E]=I?St(p[E]):lt(p[E]);Le.key!=null&&se.set(Le.key,E)}let X,Fe=0;const Oe=D-q+1;let tt=!1,nt=0;const Fn=new Array(Oe);for(E=0;E<Oe;E++)Fn[E]=0;for(E=B;E<=N;E++){const Le=f[E];if(Fe>=Oe){et(Le,y,v,!0);continue}let st;if(Le.key!=null)st=se.get(Le.key);else for(X=q;X<=D;X++)if(Fn[X-q]===0&&Bn(Le,p[X])){st=X;break}st===void 0?et(Le,y,v,!0):(Fn[st-q]=E+1,st>=nt?nt=st:tt=!0,S(Le,p[st],g,null,y,v,x,T,I),Fe++)}const Qo=tt?Vf(Fn):hn;for(X=Qo.length-1,E=Oe-1;E>=0;E--){const Le=q+E,st=p[Le],Jo=Le+1<O?p[Le+1].el:C;Fn[E]===0?S(null,st,g,Jo,y,v,x,T,I):tt&&(X<0||E!==Qo[X]?Bt(st,g,Jo,2):X--)}}},Bt=(f,p,g,C,y=null)=>{const{el:v,type:x,transition:T,children:I,shapeFlag:E}=f;if(E&6){Bt(f.component.subTree,p,g,C);return}if(E&128){f.suspense.move(p,g,C);return}if(E&64){x.move(f,p,g,Mn);return}if(x===$e){s(v,p,g);for(let N=0;N<I.length;N++)Bt(I[N],p,g,C);s(f.anchor,p,g);return}if(x===Ws){G(f,p,g);return}if(C!==2&&E&1&&T)if(C===0)T.beforeEnter(v),s(v,p,g),Be(()=>T.enter(v),y);else{const{leave:N,delayLeave:D,afterLeave:B}=T,q=()=>s(v,p,g),se=()=>{N(v,()=>{q(),B&&B()})};D?D(v,q,se):se()}else s(v,p,g)},et=(f,p,g,C=!1,y=!1)=>{const{type:v,props:x,ref:T,children:I,dynamicChildren:E,shapeFlag:O,patchFlag:N,dirs:D,cacheIndex:B}=f;if(N===-2&&(y=!1),T!=null&&Ys(T,null,g,f,!0),B!=null&&(p.renderCache[B]=void 0),O&256){p.ctx.deactivate(f);return}const q=O&1&&D,se=!zn(f);let X;if(se&&(X=x&&x.onVnodeBeforeUnmount)&&it(X,p,f),O&6)fh(f.component,g,C);else{if(O&128){f.suspense.unmount(g,C);return}q&&Ut(f,null,p,"beforeUnmount"),O&64?f.type.remove(f,p,g,Mn,C):E&&!E.hasOnce&&(v!==$e||N>0&&N&64)?kn(E,p,g,!1,!0):(v===$e&&N&384||!y&&O&16)&&kn(I,p,g),C&&zo(f)}(se&&(X=x&&x.onVnodeUnmounted)||q)&&Be(()=>{X&&it(X,p,f),q&&Ut(f,null,p,"unmounted")},g)},zo=f=>{const{type:p,el:g,anchor:C,transition:y}=f;if(p===$e){hh(g,C);return}if(p===Ws){P(f);return}const v=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:T}=y,I=()=>x(g,v);T?T(f.el,v,I):I()}else v()},hh=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},fh=(f,p,g)=>{const{bum:C,scope:y,job:v,subTree:x,um:T,m:I,a:E}=f;al(I),al(E),C&&Us(C),y.stop(),v&&(v.flags|=8,et(x,f,p,g)),T&&Be(T,p),Be(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},kn=(f,p,g,C=!1,y=!1,v=0)=>{for(let x=v;x<f.length;x++)et(f[x],p,g,C,y)},Ds=f=>{if(f.shapeFlag&6)return Ds(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[cf];return g?d(g):p};let ji=!1;const Yo=(f,p,g)=>{f==null?p._vnode&&et(p._vnode,null,null,!0):S(p._vnode||null,f,p,null,null,null,g),p._vnode=f,ji||(ji=!0,nl(),ec(),ji=!1)},Mn={p:S,um:et,m:Bt,r:zo,mt:On,mc:R,pc:ne,pbc:Z,n:Ds,o:t};return{render:Yo,hydrate:void 0,createApp:Af(Yo)}}function Ji({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cc(t,e,n=!1){const s=t.children,i=e.children;if(M(s)&&M(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=St(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Cc(o,l)),l.type===Ni&&(l.el=o.el)}}function Vf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Ec(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ec(e)}function al(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const $f=Symbol.for("v-scx"),jf=()=>pn($f);function Qn(t,e,n){return wc(t,e,n)}function wc(t,e,n=te){const{immediate:s,deep:i,flush:r,once:o}=n,l=Pe({},n),a=e&&s||!e&&r!=="post";let u;if(cs){if(r==="sync"){const _=jf();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=at,_.resume=at,_.pause=at,_}}const c=xe;l.call=(_,m,S)=>ut(_,c,m,S);let h=!1;r==="post"?l.scheduler=_=>{Be(_,c&&c.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,m)=>{m?_():io(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,c&&(_.id=c.uid,_.i=c))};const d=sf(t,e,l);return cs&&(u?u.push(d):a&&d()),d}function qf(t,e,n){const s=this.proxy,i=ge(t)?t.includes(".")?Sc(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=Es(this),l=wc(i,r.bind(s),n);return o(),l}function Sc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Kf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Dt(e)}Modifiers`]||t[`${nn(e)}Modifiers`];function Gf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||te;let i=n;const r=e.startsWith("update:"),o=r&&Kf(s,e.slice(7));o&&(o.trim&&(i=n.map(c=>ge(c)?c.trim():c)),o.number&&(i=n.map(js)));let l,a=s[l=qi(e)]||s[l=qi(Dt(e))];!a&&r&&(a=s[l=qi(nn(e))]),a&&ut(a,t,6,i);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ut(u,t,6,i)}}function Ic(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=u=>{const c=Ic(u,e,!0);c&&(l=!0,Pe(o,c))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ae(t)&&s.set(t,null),null):(M(r)?r.forEach(a=>o[a]=null):Pe(o,r),ae(t)&&s.set(t,o),o)}function xi(t,e){return!t||!yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,nn(e))||J(t,e))}function cl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:u,renderCache:c,props:h,data:d,setupState:_,ctx:m,inheritAttrs:S}=t,F=zs(t);let W,K;try{if(n.shapeFlag&4){const P=i||s,z=P;W=lt(u.call(z,P,c,h,_,d,m)),K=l}else{const P=e;W=lt(P.length>1?P(h,{attrs:l,slots:o,emit:a}):P(h,null)),K=e.props?l:zf(l)}}catch(P){Jn.length=0,Ii(P,t,1),W=Ke(Jt)}let G=W;if(K&&S!==!1){const P=Object.keys(K),{shapeFlag:z}=G;P.length&&z&7&&(r&&P.some(qr)&&(K=Yf(K,r)),G=bn(G,K,!1,!0))}return n.dirs&&(G=bn(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&ro(G,n.transition),W=G,zs(F),W}const zf=t=>{let e;for(const n in t)(n==="class"||n==="style"||yi(n))&&((e||(e={}))[n]=t[n]);return e},Yf=(t,e)=>{const n={};for(const s in t)(!qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Qf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ul(s,o,u):!!o;if(a&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(o[d]!==s[d]&&!xi(u,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ul(s,o,u):!0:!!o;return!1}function ul(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!xi(n,r))return!0}return!1}function Jf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Tc=t=>t.__isSuspense;function Xf(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):lf(t)}const $e=Symbol.for("v-fgt"),Ni=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Ws=Symbol.for("v-stc"),Jn=[];let He=null;function ue(t=!1){Jn.push(He=t?null:[])}function Zf(){Jn.pop(),He=Jn[Jn.length-1]||null}let ls=1;function hl(t,e=!1){ls+=t,t<0&&He&&e&&(He.hasOnce=!0)}function xc(t){return t.dynamicChildren=ls>0?He||hn:null,Zf(),ls>0&&He&&He.push(t),t}function ye(t,e,n,s,i,r){return xc(b(t,e,n,s,i,r,!0))}function as(t,e,n,s,i){return xc(Ke(t,e,n,s,i,!0))}function Nc(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const Rc=({key:t})=>t??null,Hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||_e(t)||U(t)?{i:We,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,s=0,i=null,r=t===$e?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rc(e),ref:e&&Hs(e),scopeId:nc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return l?(lo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ge(n)?8:16),ls>0&&!o&&He&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&He.push(a),a}const Ke=ed;function ed(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Ef)&&(t=Jt),Nc(t)){const l=bn(t,e,!0);return n&&lo(l,n),ls>0&&!r&&He&&(l.shapeFlag&6?He[He.indexOf(t)]=l:He.push(l)),l.patchFlag=-2,l}if(ud(t)&&(t=t.__vccOpts),e){e=td(e);let{class:l,style:a}=e;l&&!ge(l)&&(e.class=Yt(l)),ae(a)&&(to(a)&&!M(a)&&(a=Pe({},a)),e.style=zr(a))}const o=ge(t)?1:Tc(t)?128:uf(t)?64:ae(t)?4:U(t)?2:0;return b(t,e,n,s,i,o,r,!0)}function td(t){return t?to(t)||pc(t)?Pe({},t):t:null}function bn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,u=e?nd(i||{},e):i,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Rc(u),ref:e&&e.ref?n&&r?M(r)?r.concat(Hs(e)):[r,Hs(e)]:Hs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&ro(c,a.clone(c)),c}function jn(t=" ",e=0){return Ke(Ni,null,t,e)}function Ac(t,e){const n=Ke(Ws,null,t);return n.staticCount=e,n}function ot(t="",e=!1){return e?(ue(),as(Jt,null,t)):Ke(Jt,null,t)}function lt(t){return t==null||typeof t=="boolean"?Ke(Jt):M(t)?Ke($e,null,t.slice()):Nc(t)?St(t):Ke(Ni,null,String(t))}function St(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function lo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),lo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!pc(e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[jn(e)]):n=8);t.children=e,t.shapeFlag|=n}function nd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Yt([e.class,s.class]));else if(i==="style")e.style=zr([e.style,s.style]);else if(yi(i)){const r=e[i],o=s[i];o&&r!==o&&!(M(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function it(t,e,n,s=null){ut(t,e,7,[n,s])}const sd=hc();let id=0;function rd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||sd,r={uid:id++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gc(s,i),emitsOptions:Ic(s,i),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Gf.bind(null,r),t.ce&&t.ce(r),r}let xe=null,Js,br;{const t=Ci(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Js=e("__VUE_INSTANCE_SETTERS__",n=>xe=n),br=e("__VUE_SSR_SETTERS__",n=>cs=n)}const Es=t=>{const e=xe;return Js(t),t.scope.on(),()=>{t.scope.off(),Js(e)}},fl=()=>{xe&&xe.scope.off(),Js(null)};function Dc(t){return t.vnode.shapeFlag&4}let cs=!1;function od(t,e=!1,n=!1){e&&br(e);const{props:s,children:i}=t.vnode,r=Dc(t);Of(t,s,r,e),Lf(t,i,n);const o=r?ld(t,e):void 0;return e&&br(!1),o}function ld(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wf);const{setup:s}=n;if(s){kt();const i=t.setupContext=s.length>1?cd(t):null,r=Es(t),o=Cs(s,t,0,[t.props,i]),l=Ia(o);if(Mt(),r(),(l||t.sp)&&!zn(t)&&sc(t),l){if(o.then(fl,fl),e)return o.then(a=>{dl(t,a)}).catch(a=>{Ii(a,t,0)});t.asyncDep=o}else dl(t,o)}else Pc(t)}function dl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Ja(e)),Pc(t)}function Pc(t,e,n){const s=t.type;t.render||(t.render=s.render||at);{const i=Es(t);kt();try{Sf(t)}finally{Mt(),i()}}}const ad={get(t,e){return Ie(t,"get",""),t[e]}};function cd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ad),slots:t.slots,emit:t.emit,expose:e}}function Ri(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ja(no(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yn)return Yn[n](t)},has(e,n){return n in e||n in Yn}})):t.proxy}function ud(t){return U(t)&&"__vccOpts"in t}const zt=(t,e)=>tf(t,e,cs),hd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cr;const pl=typeof window<"u"&&window.trustedTypes;if(pl)try{Cr=pl.createPolicy("vue",{createHTML:t=>t})}catch{}const Oc=Cr?t=>Cr.createHTML(t):t=>t,fd="http://www.w3.org/2000/svg",dd="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,_l=dt&&dt.createElement("template"),pd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?dt.createElementNS(fd,t):e==="mathml"?dt.createElementNS(dd,t):n?dt.createElement(t,{is:n}):dt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>dt.createTextNode(t),createComment:t=>dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{_l.innerHTML=Oc(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=_l.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_d=Symbol("_vtc");function gd(t,e,n){const s=t[_d];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gl=Symbol("_vod"),md=Symbol("_vsh"),yd=Symbol(""),vd=/(^|;)\s*display\s*:/;function bd(t,e,n){const s=t.style,i=ge(n);let r=!1;if(n&&!i){if(e)if(ge(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Vs(s,l,"")}else for(const o in e)n[o]==null&&Vs(s,o,"");for(const o in n)o==="display"&&(r=!0),Vs(s,o,n[o])}else if(i){if(e!==n){const o=s[yd];o&&(n+=";"+o),s.cssText=n,r=vd.test(n)}}else e&&t.removeAttribute("style");gl in t&&(t[gl]=r?s.display:"",t[md]&&(s.display="none"))}const ml=/\s*!important$/;function Vs(t,e,n){if(M(n))n.forEach(s=>Vs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Cd(t,e);ml.test(n)?t.setProperty(nn(s),n.replace(ml,""),"important"):t[s]=n}}const yl=["Webkit","Moz","ms"],Xi={};function Cd(t,e){const n=Xi[e];if(n)return n;let s=Dt(e);if(s!=="filter"&&s in t)return Xi[e]=s;s=Na(s);for(let i=0;i<yl.length;i++){const r=yl[i]+s;if(r in t)return Xi[e]=r}return e}const vl="http://www.w3.org/1999/xlink";function bl(t,e,n,s,i,r=wh(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vl,e.slice(6,e.length)):t.setAttributeNS(vl,e,n):n==null||r&&!Aa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ct(n)?String(n):n)}function Cl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Oc(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Aa(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function jt(t,e,n,s){t.addEventListener(e,n,s)}function Ed(t,e,n,s){t.removeEventListener(e,n,s)}const El=Symbol("_vei");function wd(t,e,n,s,i=null){const r=t[El]||(t[El]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Sd(e);if(s){const u=r[e]=xd(s,i);jt(t,l,u,a)}else o&&(Ed(t,l,o,a),r[e]=void 0)}}const wl=/(?:Once|Passive|Capture)$/;function Sd(t){let e;if(wl.test(t)){e={};let s;for(;s=t.match(wl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let Zi=0;const Id=Promise.resolve(),Td=()=>Zi||(Id.then(()=>Zi=0),Zi=Date.now());function xd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(Nd(s,n.value),e,5,[s])};return n.value=t,n.attached=Td(),n}function Nd(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Sl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rd=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?gd(t,s,o):e==="style"?bd(t,n,s):yi(e)?qr(e)||wd(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ad(t,e,s,o))?(Cl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ge(s))?Cl(t,Dt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bl(t,e,s,o))};function Ad(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sl(e)&&U(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Sl(e)&&ge(n)?!1:e in t}const Xs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?n=>Us(e,n):e};function Dd(t){t.target.composing=!0}function Il(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _n=Symbol("_assign"),pe={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[_n]=Xs(i);const r=s||i.props&&i.props.type==="number";jt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=js(l)),t[_n](l)}),n&&jt(t,"change",()=>{t.value=t.value.trim()}),e||(jt(t,"compositionstart",Dd),jt(t,"compositionend",Il),jt(t,"change",Il))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[_n]=Xs(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?js(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},ao={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=vi(e);jt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?js(Zs(o)):Zs(o));t[_n](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,so(()=>{t._assigning=!1})}),t[_n]=Xs(s)},mounted(t,{value:e}){Tl(t,e)},beforeUpdate(t,e,n){t[_n]=Xs(n)},updated(t,{value:e}){t._assigning||Tl(t,e)}};function Tl(t,e){const n=t.multiple,s=M(e);if(!(n&&!s&&!vi(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],l=Zs(o);if(n)if(s){const a=typeof l;a==="string"||a==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Ih(e,l)>-1}else o.selected=e.has(l);else if(Ei(Zs(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Zs(t){return"_value"in t?t._value:t.value}const Pd=["ctrl","shift","alt","meta"],Od={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pd.some(n=>t[`${n}Key`]&&!e.includes(n))},kc=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=Od[e[o]];if(l&&l(i,e))return}return t(i,...r)})},kd=Pe({patchProp:Rd},pd);let xl;function Md(){return xl||(xl=Uf(kd))}const Fd=(...t)=>{const e=Md().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Bd(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Ld(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ld(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bd(t){return ge(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Mc;const Ai=t=>Mc=t,Fc=Symbol();function Er(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Xn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xn||(Xn={}));function Ud(){const t=ka(!0),e=t.run(()=>me({}));let n=[],s=[];const i=no({install(r){Ai(i),i._a=r,r.provide(Fc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Lc=()=>{};function Nl(t,e,n,s=Lc){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ma()&&Th(i),i}function ln(t,...e){t.slice().forEach(n=>{n(...e)})}const Wd=t=>t(),Rl=Symbol(),er=Symbol();function wr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Er(i)&&Er(s)&&t.hasOwnProperty(n)&&!_e(s)&&!xt(s)?t[n]=wr(i,s):t[n]=s}return t}const Hd=Symbol();function Vd(t){return!Er(t)||!t.hasOwnProperty(Hd)}const{assign:Et}=Object;function $d(t){return!!(_e(t)&&t.effect)}function jd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function u(){l||(n.state.value[t]=i?i():{});const c=Jh(n.state.value[t]);return Et(c,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=no(zt(()=>{Ai(n);const _=n._s.get(t);return o[d].call(_,_)})),h),{}))}return a=Bc(t,u,e,n,s,!0),a}function Bc(t,e,n={},s,i,r){let o;const l=Et({actions:{}},n),a={deep:!0};let u,c,h=[],d=[],_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),me({});let S;function F(R){let A;u=c=!1,typeof R=="function"?(R(s.state.value[t]),A={type:Xn.patchFunction,storeId:t,events:_}):(wr(s.state.value[t],R),A={type:Xn.patchObject,payload:R,storeId:t,events:_});const Z=S=Symbol();so().then(()=>{S===Z&&(u=!0)}),c=!0,ln(h,A,s.state.value[t])}const W=r?function(){const{state:A}=n,Z=A?A():{};this.$patch(Ve=>{Et(Ve,Z)})}:Lc;function K(){o.stop(),h=[],d=[],s._s.delete(t)}const G=(R,A="")=>{if(Rl in R)return R[er]=A,R;const Z=function(){Ai(s);const Ve=Array.from(arguments),Ze=[],Ct=[];function On(j){Ze.push(j)}function Rs(j){Ct.push(j)}ln(d,{args:Ve,name:Z[er],store:z,after:On,onError:Rs});let de;try{de=R.apply(this&&this.$id===t?this:z,Ve)}catch(j){throw ln(Ct,j),j}return de instanceof Promise?de.then(j=>(ln(Ze,j),j)).catch(j=>(ln(Ct,j),Promise.reject(j))):(ln(Ze,de),de)};return Z[Rl]=!0,Z[er]=A,Z},P={_p:s,$id:t,$onAction:Nl.bind(null,d),$patch:F,$reset:W,$subscribe(R,A={}){const Z=Nl(h,R,A.detached,()=>Ve()),Ve=o.run(()=>Qn(()=>s.state.value[t],Ze=>{(A.flush==="sync"?c:u)&&R({storeId:t,type:Xn.direct,events:_},Ze)},Et({},a,A)));return Z},$dispose:K},z=Si(P);s._s.set(t,z);const L=(s._a&&s._a.runWithContext||Wd)(()=>s._e.run(()=>(o=ka()).run(()=>e({action:G}))));for(const R in L){const A=L[R];if(_e(A)&&!$d(A)||xt(A))r||(m&&Vd(A)&&(_e(A)?A.value=m[R]:wr(A,m[R])),s.state.value[t][R]=A);else if(typeof A=="function"){const Z=G(A,R);L[R]=Z,l.actions[R]=A}}return Et(z,L),Et(Y(z),L),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:R=>{F(A=>{Et(A,R)})}}),s._p.forEach(R=>{Et(z,o.run(()=>R({store:z,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(z.$state,m),u=!0,c=!0,z}/*! #__NO_SIDE_EFFECTS__ */function qd(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,l){const a=Pf();return o=o||(a?pn(Fc,null):null),o&&Ai(o),o=Mc,o._s.has(t)||(i?Bc(t,e,s,o):jd(t,s,o)),o._s.get(t)}return r.$id=t,r}const Kd=()=>{};var Al={};/**
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
 */const Uc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(t,e){if(!t)throw xn(e)},xn=function(t){return new Error("Firebase Database ("+Uc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Wc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(d=64)),s.push(n[c],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||h==null)throw new zd;const d=r<<2|l>>4;if(s.push(d),u!==64){const _=l<<4&240|u>>2;if(s.push(_),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hc=function(t){const e=Wc(t);return co.encodeByteArray(e,!0)},ei=function(t){return Hc(t).replace(/\./g,"")},Sr=function(t){try{return co.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yd(t){return Vc(void 0,t)}function Vc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Qd(n)||(t[n]=Vc(t[n],e[n]));return t}function Qd(t){return t!=="__proto__"}/**
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
 */function Jd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xd=()=>Jd().__FIREBASE_DEFAULTS__,Zd=()=>{if(typeof process>"u"||typeof Al>"u")return;const t=Al.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ep=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sr(t[1]);return e&&JSON.parse(e)},$c=()=>{try{return Kd()||Xd()||Zd()||ep()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tp=t=>{var e,n;return(n=(e=$c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},np=t=>{const e=tp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},jc=()=>{var t;return(t=$c())===null||t===void 0?void 0:t.config};/**
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
 */class ws{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function sp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ei(JSON.stringify(n)),ei(JSON.stringify(o)),""].join(".")}/**
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
 */function ip(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ip())}function rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function op(){return Uc.NODE_ADMIN===!0}function lp(){try{return typeof indexedDB=="object"}catch{return!1}}function ap(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const cp="FirebaseError";class Ss extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cp,Object.setPrototypeOf(this,Ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kc.prototype.create)}}class Kc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?up(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ss(i,l,s)}}function up(t,e){return t.replace(hp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hp=/\{\$([^}]+)}/g;/**
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
 */function us(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
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
 */const Gc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=us(Sr(r[0])||""),n=us(Sr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},fp=function(t){const e=Gc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dp=function(t){const e=Gc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Pl(r)&&Pl(o)){if(!ni(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Pl(t){return t!==null&&typeof t=="object"}/**
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
 */function pp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class _p{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=l^r&(o^l),c=1518500249):(u=r^o^l,c=1859775393):h<60?(u=r&o|l&(r|o),c=2400959708):(u=r^o^l,c=3395469782);const d=(i<<5|i>>>27)+u+a+c+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Di(t,e){return`${t} failed: ${e} argument `}/**
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
 */const gp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Pi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Nn(t){return t&&t._delegate?t._delegate:t}class hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class mp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ws;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vp(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yp(t){return t===Vt?void 0:t}function vp(t){return t.instantiationMode==="EAGER"}/**
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
 */class bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Cp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Ep=oe.INFO,wp={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Sp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=wp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=Ep,this._logHandler=Sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Ip=(t,e)=>e.some(n=>t instanceof n);let Ol,kl;function Tp(){return Ol||(Ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xp(){return kl||(kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yc=new WeakMap,Ir=new WeakMap,Qc=new WeakMap,tr=new WeakMap,uo=new WeakMap;function Np(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yc.set(n,t)}).catch(()=>{}),uo.set(e,t),e}function Rp(t){if(Ir.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ir.set(t,e)}let Tr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ir.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ap(t){Tr=t(Tr)}function Dp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(nr(this),e,...n);return Qc.set(s,e.sort?e.sort():[e]),Nt(s)}:xp().includes(t)?function(...e){return t.apply(nr(this),e),Nt(Yc.get(this))}:function(...e){return Nt(t.apply(nr(this),e))}}function Pp(t){return typeof t=="function"?Dp(t):(t instanceof IDBTransaction&&Rp(t),Ip(t,Tp())?new Proxy(t,Tr):t)}function Nt(t){if(t instanceof IDBRequest)return Np(t);if(tr.has(t))return tr.get(t);const e=Pp(t);return e!==t&&(tr.set(t,e),uo.set(e,t)),e}const nr=t=>uo.get(t);function Op(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Nt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Nt(o.result),a.oldVersion,a.newVersion,Nt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const kp=["get","getKey","getAll","getAllKeys","count"],Mp=["put","add","delete","clear"],sr=new Map;function Ml(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sr.get(e))return sr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Mp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||kp.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return sr.set(e,r),r}Ap(t=>({...t,get:(e,n,s)=>Ml(e,n)||t.get(e,n,s),has:(e,n)=>!!Ml(e,n)||t.has(e,n)}));/**
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
 */class Fp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xr="@firebase/app",Fl="0.11.3";/**
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
 */const yt=new zc("@firebase/app"),Bp="@firebase/app-compat",Up="@firebase/analytics-compat",Wp="@firebase/analytics",Hp="@firebase/app-check-compat",Vp="@firebase/app-check",$p="@firebase/auth",jp="@firebase/auth-compat",qp="@firebase/database",Kp="@firebase/data-connect",Gp="@firebase/database-compat",zp="@firebase/functions",Yp="@firebase/functions-compat",Qp="@firebase/installations",Jp="@firebase/installations-compat",Xp="@firebase/messaging",Zp="@firebase/messaging-compat",e_="@firebase/performance",t_="@firebase/performance-compat",n_="@firebase/remote-config",s_="@firebase/remote-config-compat",i_="@firebase/storage",r_="@firebase/storage-compat",o_="@firebase/firestore",l_="@firebase/vertexai",a_="@firebase/firestore-compat",c_="firebase",u_="11.5.0";/**
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
 */const Nr="[DEFAULT]",h_={[xr]:"fire-core",[Bp]:"fire-core-compat",[Wp]:"fire-analytics",[Up]:"fire-analytics-compat",[Vp]:"fire-app-check",[Hp]:"fire-app-check-compat",[$p]:"fire-auth",[jp]:"fire-auth-compat",[qp]:"fire-rtdb",[Kp]:"fire-data-connect",[Gp]:"fire-rtdb-compat",[zp]:"fire-fn",[Yp]:"fire-fn-compat",[Qp]:"fire-iid",[Jp]:"fire-iid-compat",[Xp]:"fire-fcm",[Zp]:"fire-fcm-compat",[e_]:"fire-perf",[t_]:"fire-perf-compat",[n_]:"fire-rc",[s_]:"fire-rc-compat",[i_]:"fire-gcs",[r_]:"fire-gcs-compat",[o_]:"fire-fst",[a_]:"fire-fst-compat",[l_]:"fire-vertex","fire-js":"fire-js",[c_]:"fire-js-all"};/**
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
 */const si=new Map,f_=new Map,Rr=new Map;function Ll(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(Rr.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Rr.set(e,t);for(const n of si.values())Ll(n,t);for(const n of f_.values())Ll(n,t);return!0}function d_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function p_(t){return t==null?!1:t.settings!==void 0}/**
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
 */const __={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new Kc("app","Firebase",__);/**
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
 */class g_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const m_=u_;function Jc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Nr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(n||(n=jc()),!n)throw Rt.create("no-options");const r=si.get(i);if(r){if(ni(n,r.options)&&ni(s,r.config))return r;throw Rt.create("duplicate-app",{appName:i})}const o=new bp(i);for(const a of Rr.values())o.addComponent(a);const l=new g_(n,s,o);return si.set(i,l),l}function y_(t=Nr){const e=si.get(t);if(!e&&t===Nr&&jc())return Jc();if(!e)throw Rt.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let i=(s=h_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(l.join(" "));return}ii(new hs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const v_="firebase-heartbeat-database",b_=1,fs="firebase-heartbeat-store";let ir=null;function Xc(){return ir||(ir=Op(v_,b_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),ir}async function C_(t){try{const n=(await Xc()).transaction(fs),s=await n.objectStore(fs).get(Zc(t));return await n.done,s}catch(e){if(e instanceof Ss)yt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(n.message)}}}async function Bl(t,e){try{const s=(await Xc()).transaction(fs,"readwrite");await s.objectStore(fs).put(e,Zc(t)),await s.done}catch(n){if(n instanceof Ss)yt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yt.warn(s.message)}}}function Zc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const E_=1024,w_=30;class S_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new T_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ul();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>w_){const o=x_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){yt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ul(),{heartbeatsToSend:s,unsentEntries:i}=I_(this._heartbeatsCache.heartbeats),r=ei(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return yt.warn(n),""}}}function Ul(){return new Date().toISOString().substring(0,10)}function I_(t,e=E_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class T_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lp()?ap().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await C_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wl(t){return ei(JSON.stringify({version:2,heartbeats:t})).length}function x_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function N_(t){ii(new hs("platform-logger",e=>new Fp(e),"PRIVATE")),ii(new hs("heartbeat",e=>new S_(e),"PRIVATE")),gn(xr,Fl,t),gn(xr,Fl,"esm2017"),gn("fire-js","")}N_("");var R_="firebase",A_="11.5.0";/**
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
 */gn(R_,A_,"app");var Hl={};const Vl="@firebase/database",$l="1.0.14";/**
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
 */let eu="";function D_(t){eu=t}/**
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
 */class P_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:us(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class O_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new P_(e)}}catch{}return new O_},qt=tu("localStorage"),k_=tu("sessionStorage");/**
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
 */const mn=new zc("@firebase/database"),M_=function(){let t=1;return function(){return t++}}(),nu=function(t){const e=gp(t),n=new _p;n.update(e);const s=n.digest();return co.encodeByteArray(s)},Is=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Is.apply(null,s):typeof s=="object"?e+=Ee(s):e+=s,e+=" "}return e};let Zn=null,jl=!0;const F_=function(t,e){w(!0,"Can't turn on custom loggers persistently."),mn.logLevel=oe.VERBOSE,Zn=mn.log.bind(mn)},we=function(...t){if(jl===!0&&(jl=!1,Zn===null&&k_.get("logging_enabled")===!0&&F_()),Zn){const e=Is.apply(null,t);Zn(e)}},Ts=function(t){return function(...e){we(t,...e)}},Ar=function(...t){const e="FIREBASE INTERNAL ERROR: "+Is(...t);mn.error(e)},vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Is(...t)}`;throw mn.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+Is(...t);mn.warn(e)},L_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ho=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},B_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},En="[MIN_NAME]",Xt="[MAX_NAME]",sn=function(t,e){if(t===e)return 0;if(t===En||e===Xt)return-1;if(e===En||t===Xt)return 1;{const n=ql(t),s=ql(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},U_=function(t,e){return t===e?0:t<e?-1:1},Un=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},fo=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ee(e[s]),n+=":",n+=fo(t[e[s]]);return n+="}",n},su=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iu=function(t){w(!ho(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},W_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},H_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function V_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const $_=new RegExp("^-?(0*)\\d{1,10}$"),j_=-2147483648,q_=2147483647,ql=function(t){if($_.test(t)){const e=Number(t);if(e>=j_&&e<=q_)return e}return null},Rn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},K_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class G_{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,p_(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class z_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class $s{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$s.OWNER="owner";/**
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
 */const po="5",ru="v",ou="s",lu="r",au="f",cu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uu="ls",hu="p",Dr="ac",fu="websocket",du="long_polling";/**
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
 */class pu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Y_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _u(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===fu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===du)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Y_(t)&&(n.ns=t.namespace);const i=[];return Se(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Q_{constructor(){this.counters_={}}incrementCounter(e,n=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Yd(this.counters_)}}/**
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
 */const rr={},or={};function _o(t){const e=t.toString();return rr[e]||(rr[e]=new Q_),rr[e]}function J_(t,e){const n=t.toString();return or[n]||(or[n]=e()),or[n]}/**
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
 */class X_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Rn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Kl="start",Z_="close",eg="pLPCommand",tg="pRTLPCB",gu="id",mu="pw",yu="ser",ng="cb",sg="seg",ig="ts",rg="d",og="dframe",vu=1870,bu=30,lg=vu-bu,ag=25e3,cg=3e4;class un{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=_o(n),this.urlFn=a=>(this.appCheckToken&&(a[Dr]=this.appCheckToken),_u(n,du,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new X_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cg)),B_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new go((...r)=>{const[o,l,a,u,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kl)this.id=l,this.password=a;else if(o===Z_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Kl]="t",s[yu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ng]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ru]=po,this.transportSessionId&&(s[ou]=this.transportSessionId),this.lastSessionId&&(s[uu]=this.lastSessionId),this.applicationId&&(s[hu]=this.applicationId),this.appCheckToken&&(s[Dr]=this.appCheckToken),typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(s[lu]=au);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){un.forceAllow_=!0}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){return un.forceAllow_?!0:!un.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!W_()&&!H_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hc(n),i=su(s,lg);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[og]="t",s[gu]=e,s[mu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class go{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=M_(),window[eg+this.uniqueCallbackIdentifier]=e,window[tg+this.uniqueCallbackIdentifier]=n,this.myIFrame=go.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gu]=this.myID,e[mu]=this.myPW,e[yu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bu+s.length<=vu;){const o=this.pendingSegs.shift();s=s+"&"+sg+i+"="+o.seg+"&"+ig+i+"="+o.ts+"&"+rg+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(ag)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const ug=16384,hg=45e3;let ri=null;typeof MozWebSocket<"u"?ri=MozWebSocket:typeof WebSocket<"u"&&(ri=WebSocket);class ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=_o(n),this.connURL=ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ru]=po,typeof location<"u"&&location.hostname&&cu.test(location.hostname)&&(o[lu]=au),n&&(o[ou]=n),s&&(o[uu]=s),i&&(o[Dr]=i),r&&(o[hu]=r),_u(e,fu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{let s;op(),this.mySock=new ri(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ri!==null&&!ze.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=us(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=su(n,ug);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ze.responsesRequiredToBeHealthy=2;ze.healthyTimeout=3e4;/**
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
 */class ds{static get ALL_TRANSPORTS(){return[un,ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ze&&ze.isAvailable();let s=n&&!ze.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ze];else{const i=this.transports_=[];for(const r of ds.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ds.globalTransportInitialized_=!1;/**
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
 */const fg=6e4,dg=5e3,pg=10*1024,_g=100*1024,lr="t",Gl="d",gg="s",zl="r",mg="e",Yl="o",Ql="a",Jl="n",Xl="p",yg="h";class vg{constructor(e,n,s,i,r,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_g?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lr in e){const n=e[lr];n===Ql?this.upgradeIfSecondaryHealthy_():n===zl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Un("t",e),s=Un("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ql,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Un("t",e),s=Un("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Un(lr,e);if(Gl in e){const s=e[Gl];if(n===yg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Jl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gg?this.onConnectionShutdown_(s):n===zl?this.onReset_(s):n===mg?Ar("Server Error: "+s):n===Yl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ar("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),po!==s&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Cu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Eu{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class oi extends Eu{static getInstance(){return new oi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zl=32,ea=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ee("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pt(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function mo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ps(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function he(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=H(t),s=H(e);if(n===null)return e;if(n===s)return ke(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Cg(t,e){const n=ps(t,0),s=ps(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=sn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function yo(t,e){if(Pt(t)!==Pt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Pt(t)>Pt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Eg{constructor(e,n){this.errorPrefix_=n,this.parts_=ps(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Pi(this.parts_[s]);Su(this)}}function wg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Pi(e),Su(t)}function Sg(t){const e=t.parts_.pop();t.byteLength_-=Pi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Su(t){if(t.byteLength_>ea)throw new Error(t.errorPrefix_+"has a key path longer than "+ea+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zl+") or object contains a cycle "+$t(t))}function $t(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vo extends Eu{static getInstance(){return new vo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Wn=1e3,Ig=60*5*1e3,ta=30*1e3,Tg=1.3,xg=3e4,Ng="server_kill",na=3;class mt extends Cu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=mt.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wn,this.maxReconnectDelay_=Ig,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&oi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ee(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ws,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,u=l.s;mt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ht(e,"w")){const s=Cn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ta)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ar("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xg&&(this.reconnectDelay_=Wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Tg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},u=function(h){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new vg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{De(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ng)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&De(h),a())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dl(this.interruptReasons_)&&(this.reconnectDelay_=Wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>fo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=na&&(this.reconnectDelay_=ta,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=na&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+eu.replace(/\./g,"-")]=1,qc()?e["framework.cordova"]=1:rp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=oi.getInstance().currentlyOnline();return Dl(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
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
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
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
 */class Oi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(En,e),i=new V(En,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
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
 */let Ms;class Iu extends Oi{static get __EMPTY_NODE(){return Ms}static set __EMPTY_NODE(e){Ms=e}compare(e,n){return sn(e.name,n.name)}isDefinedOn(e){throw xn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(Xt,Ms)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,Ms)}toString(){return".key"}}const yn=new Iu;/**
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
 */class Fs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??be.RED,this.left=i??Me.EMPTY_NODE,this.right=r??Me.EMPTY_NODE}copy(e,n,s,i,r){return new be(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class Rg{copy(e,n,s,i,r){return this}insert(e,n,s){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fs(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new Rg;/**
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
 */function Ag(t,e){return sn(t.name,e.name)}function bo(t,e){return sn(t,e)}/**
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
 */let Pr;function Dg(t){Pr=t}const Tu=function(t){return typeof t=="number"?"number:"+iu(t):"string:"+t},xu=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else w(t===Pr||t.isEmpty(),"priority of unexpected type.");w(t===Pr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sa;class ve{static set __childrenNodeConstructor(e){sa=e}static get __childrenNodeConstructor(){return sa}constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:H(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=H(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iu(this.value_):e+=this.value_,this.lazyHash_=nu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),r=ve.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nu,Ru;function Pg(t){Nu=t}function Og(t){Ru=t}class kg extends Oi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?sn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(Xt,new ve("[PRIORITY-POST]",Ru))}makePost(e,n){const s=Nu(e);return new V(n,new ve("[PRIORITY-POST]",s))}toString(){return".priority"}}const fe=new kg;/**
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
 */const Mg=Math.log(2);class Fg{constructor(e){const n=r=>parseInt(Math.log(r)/Mg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const li=function(t,e,n,s){t.sort(e);const i=function(a,u){const c=u-a;let h,d;if(c===0)return null;if(c===1)return h=t[a],d=n?n(h):h,new be(d,h.node,be.BLACK,null,null);{const _=parseInt(c/2,10)+a,m=i(a,_),S=i(_+1,u);return h=t[_],d=n?n(h):h,new be(d,h.node,be.BLACK,m,S)}},r=function(a){let u=null,c=null,h=t.length;const d=function(m,S){const F=h-m,W=h;h-=m;const K=i(F+1,W),G=t[F],P=n?n(G):G;_(new be(P,G.node,S,null,K))},_=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<a.count;++m){const S=a.nextBitIsOne(),F=Math.pow(2,a.count-(m+1));S?d(F,be.BLACK):(d(F,be.BLACK),d(F,be.RED))}return c},o=new Fg(t.length),l=r(o);return new Me(s||e,l)};/**
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
 */let ar;const an={};class gt{static get Default(){return w(an&&fe,"ChildrenNode.ts has not been loaded"),ar=ar||new gt({".priority":an},{".priority":fe}),ar}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Cn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,n){w(e!==yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=li(s,e.getCompare()):l=an;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new gt(c,u)}addToIndexes(e,n){const s=ti(this.indexes_,(i,r)=>{const o=Cn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===an)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),li(l,o.getCompare())}else return an;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ti(this.indexes_,i=>{if(i===an)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new gt(s,this.indexSet_)}}/**
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
 */let Hn;class k{static get EMPTY_NODE(){return Hn||(Hn=new k(new Me(bo),null,gt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&xu(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hn}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hn:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Hn:this.priorityNode_;return new k(i,o,r)}}updateChild(e,n){const s=H(e);if(s===null)return n;{w(H(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),s++,r&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tu(this.getPriority().val())+":"),this.forEachChild(fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":nu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xs?-1:0}withIndex(e){if(e===yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(fe),i=n.getIterator(fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yn?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Lg extends k{constructor(){super(new Me(bo),k.EMPTY_NODE,gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const xs=new Lg;Object.defineProperties(V,{MIN:{value:new V(En,k.EMPTY_NODE)},MAX:{value:new V(Xt,xs)}});Iu.__EMPTY_NODE=k.EMPTY_NODE;ve.__childrenNodeConstructor=k;Dg(xs);Og(xs);/**
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
 */const Bg=!0;function Ce(t,e=null){if(t===null)return k.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Ce(e))}if(!(t instanceof Array)&&Bg){const n=[];let s=!1;if(Se(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ce(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return k.EMPTY_NODE;const r=li(n,Ag,o=>o.name,bo);if(s){const o=li(n,fe.getCompare());return new k(r,Ce(e),new gt({".priority":o},{".priority":fe}))}else return new k(r,Ce(e),gt.Default)}else{let n=k.EMPTY_NODE;return Se(t,(s,i)=>{if(ht(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}Pg(Ce);/**
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
 */class Ug extends Oi{constructor(e){super(),this.indexPath_=e,w(!$(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?sn(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,xs);return new V(Xt,e)}toString(){return ps(this.indexPath_,0).join("/")}}/**
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
 */class Wg extends Oi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?sn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=Ce(e);return new V(n,s)}toString(){return".value"}}const Hg=new Wg;/**
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
 */function Au(t){return{type:"value",snapshotNode:t}}function wn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _s(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Co{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(_s(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(wn(n,s)):o.trackChildChange(gs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(_s(i,r))}),n.isLeafNode()||n.forEachChild(fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(gs(i,r,o))}else s.trackChildChange(wn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ms{constructor(e){this.indexedFilter_=new Co(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=k.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const r=this;return n.forEachChild(fe,(o,l)=>{r.matches(new V(o,l))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class $g{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=k.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const a=new V(n,s),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(c&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(gs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(_s(n,h));const S=l.updateImmediateChild(n,k.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(wn(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:c&&o(u,a)>=0?(r!=null&&(r.trackChildChange(_s(u.name,u.node)),r.trackChildChange(wn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(u.name,k.EMPTY_NODE)):e}}/**
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
 */class Eo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:En}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Eo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jg(t){return t.loadsAllData()?new Co(t.getIndex()):t.hasLimit()?new $g(t):new ms(t)}function ia(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===Hg?n="$value":t.index_===yn?n="$key":(w(t.index_ instanceof Ug,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ee(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ee(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ee(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ra(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class ai extends Cu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ts("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ai.getListenId_(e,s),l={};this.listens_[o]=l;const a=ia(e._queryParams);this.restRequest_(r+".json",a,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,s),Cn(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const s=ai.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ia(e._queryParams),s=e._path.toString(),i=new ws;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=us(l.responseText)}catch{De("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class qg{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ci(){return{value:null,children:new Map}}function Du(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=H(e);t.children.has(s)||t.children.set(s,ci());const i=t.children.get(s);e=le(e),Du(i,e,n)}}function Or(t,e,n){t.value!==null?n(e,t.value):Kg(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);Or(i,r,n)})}function Kg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Gg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const oa=10*1e3,zg=30*1e3,Yg=5*60*1e3;class Qg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Gg(e);const s=oa+(zg-oa)*Math.random();es(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Se(e,(i,r)=>{r>0&&ht(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),es(this.reportStats_.bind(this),Math.floor(Math.random()*2*Yg))}}/**
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
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function wo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function So(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Io(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ui{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=wo()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new ui(Q(),n,this.revert)}}else return w(H(this.path)===e,"operationForChild called for unrelated child."),new ui(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class ys{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new ys(this.source,Q()):new ys(this.source,le(this.path))}}/**
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
 */class Zt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return $(this.path)?new Zt(this.source,Q(),this.snap.getImmediateChild(e)):new Zt(this.source,le(this.path),this.snap)}}/**
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
 */class Sn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new Zt(this.source,Q(),n.value):new Sn(this.source,Q(),n)}else return w(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Sn(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class en{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Jg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Vg(o.childName,o.snapshotNode))}),Vn(t,i,"child_removed",e,s,n),Vn(t,i,"child_added",e,s,n),Vn(t,i,"child_moved",r,s,n),Vn(t,i,"child_changed",e,s,n),Vn(t,i,"value",e,s,n),i}function Vn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>em(t,l,a)),o.forEach(l=>{const a=Zg(t,l,r);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function Zg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function em(t,e,n){if(e.childName==null||n.childName==null)throw xn("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ki(t,e){return{eventCache:t,serverCache:e}}function ts(t,e,n,s){return ki(new en(e,n,s),t.serverCache)}function Pu(t,e,n,s){return ki(t.eventCache,new en(e,n,s))}function kr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let cr;const tm=()=>(cr||(cr=new Me(U_)),cr);class re{static fromObject(e){let n=new re(null);return Se(e,(s,i)=>{n=n.set(new ee(s),i)}),n}constructor(e,n=tm()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if($(e))return null;{const s=H(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:he(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=H(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new re(null)}}set(e,n){if($(e))return new re(n,this.children);{const s=H(e),r=(this.children.get(s)||new re(null)).set(le(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=H(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if($(e))return this.value;{const n=H(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if($(e))return n;{const s=H(e),r=(this.children.get(s)||new re(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(he(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if($(e))return null;{const r=H(e),o=this.children.get(r);return o?o.findOnPath_(le(e),he(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if($(e))return this;{this.value&&s(n,this.value);const i=H(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),he(n,i),s):new re(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(he(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new re(null))}}function ns(t,e,n){if($(e))return new Je(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new Je(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Je(r)}}}function Mr(t,e,n){let s=t;return Se(n,(i,r)=>{s=ns(s,he(e,i),r)}),s}function la(t,e){if($(e))return Je.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Je(n)}}function Fr(t,e){return rn(t,e)!=null}function rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function aa(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function At(t,e){if($(e))return t;{const n=rn(t,e);return n!=null?new Je(new re(n)):new Je(t.writeTree_.subtree(e))}}function Lr(t){return t.writeTree_.isEmpty()}function In(t,e){return Ou(Q(),t.writeTree_,e)}function Ou(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ou(he(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(he(t,".priority"),s)),n}}/**
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
 */function To(t,e){return Lu(e,t)}function nm(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ns(t.visibleWrites,e,n)),t.lastWriteId=s}function sm(t,e,n,s){w(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Mr(t.visibleWrites,e,n),t.lastWriteId=s}function im(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function rm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&om(l,s.path)?i=!1:je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return lm(t),!0;if(s.snap)t.visibleWrites=la(t.visibleWrites,s.path);else{const l=s.children;Se(l,a=>{t.visibleWrites=la(t.visibleWrites,he(s.path,a))})}return!0}else return!1}function om(t,e){if(t.snap)return je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&je(he(t.path,n),e))return!0;return!1}function lm(t){t.visibleWrites=ku(t.allWrites,am,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function am(t){return t.visible}function ku(t,e,n){let s=Je.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)je(n,o)?(l=ke(n,o),s=ns(s,l,r.snap)):je(o,n)&&(l=ke(o,n),s=ns(s,Q(),r.snap.getChild(l)));else if(r.children){if(je(n,o))l=ke(n,o),s=Mr(s,l,r.children);else if(je(o,n))if(l=ke(o,n),$(l))s=Mr(s,Q(),r.children);else{const a=Cn(r.children,H(l));if(a){const u=a.getChild(le(l));s=ns(s,Q(),u)}}}else throw xn("WriteRecord should have .snap or .children")}}return s}function Mu(t,e,n,s,i){if(!s&&!i){const r=rn(t.visibleWrites,e);if(r!=null)return r;{const o=At(t.visibleWrites,e);if(Lr(o))return n;if(n==null&&!Fr(o,Q()))return null;{const l=n||k.EMPTY_NODE;return In(o,l)}}}else{const r=At(t.visibleWrites,e);if(!i&&Lr(r))return n;if(!i&&n==null&&!Fr(r,Q()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(je(u.path,e)||je(e,u.path))},l=ku(t.allWrites,o,e),a=n||k.EMPTY_NODE;return In(l,a)}}}function cm(t,e,n){let s=k.EMPTY_NODE;const i=rn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=At(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=In(At(r,new ee(o)),l);s=s.updateImmediateChild(o,a)}),aa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=At(t.visibleWrites,e);return aa(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function um(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=he(e,n);if(Fr(t.visibleWrites,r))return null;{const o=At(t.visibleWrites,r);return Lr(o)?i.getChild(n):In(o,i.getChild(n))}}function hm(t,e,n,s){const i=he(e,n),r=rn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=At(t.visibleWrites,i);return In(o,s.getNode().getImmediateChild(n))}else return null}function fm(t,e){return rn(t.visibleWrites,e)}function dm(t,e,n,s,i,r,o){let l;const a=At(t.visibleWrites,e),u=rn(a,Q());if(u!=null)l=u;else if(n!=null)l=In(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=d.getNext();for(;_&&c.length<i;)h(_,s)!==0&&c.push(_),_=d.getNext();return c}else return[]}function pm(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function hi(t,e,n,s){return Mu(t.writeTree,t.treePath,e,n,s)}function xo(t,e){return cm(t.writeTree,t.treePath,e)}function ca(t,e,n,s){return um(t.writeTree,t.treePath,e,n,s)}function fi(t,e){return fm(t.writeTree,he(t.treePath,e))}function _m(t,e,n,s,i,r){return dm(t.writeTree,t.treePath,e,n,s,i,r)}function No(t,e,n){return hm(t.writeTree,t.treePath,e,n)}function Fu(t,e){return Lu(he(t.treePath,e),t.writeTree)}function Lu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class gm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,gs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,_s(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,wn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,gs(s,e.snapshotNode,i.oldSnap));else throw xn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class mm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Bu=new mm;class Ro{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new en(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return No(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tn(this.viewCache_),r=_m(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function ym(t){return{filter:t}}function vm(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bm(t,e,n,s,i){const r=new gm;let o,l;if(n.type===Ye.OVERWRITE){const u=n;u.source.fromUser?o=Br(t,e,u.path,u.snap,s,i,r):(w(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!$(u.path),o=di(t,e,u.path,u.snap,s,i,l,r))}else if(n.type===Ye.MERGE){const u=n;u.source.fromUser?o=Em(t,e,u.path,u.children,s,i,r):(w(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ur(t,e,u.path,u.children,s,i,l,r))}else if(n.type===Ye.ACK_USER_WRITE){const u=n;u.revert?o=Im(t,e,u.path,s,i,r):o=wm(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=Sm(t,e,n.path,s,r);else throw xn("Unknown operation type: "+n.type);const a=r.getChanges();return Cm(e,o,a),{viewCache:o,changes:a}}function Cm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=kr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Au(kr(e)))}}function Uu(t,e,n,s,i,r){const o=e.eventCache;if(fi(s,n)!=null)return e;{let l,a;if($(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=tn(e),c=u instanceof k?u:k.EMPTY_NODE,h=xo(s,c);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=hi(s,tn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=H(n);if(u===".priority"){w(Pt(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const h=ca(s,n,c,a);h!=null?l=t.filter.updatePriority(c,h):l=o.getNode()}else{const c=le(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=ca(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=No(s,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,c,i,r):l=o.getNode()}}return ts(e,l,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function di(t,e,n,s,i,r,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if($(n))u=c.updateFullNode(a.getNode(),s,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);u=c.updateFullNode(a.getNode(),_,null)}else{const _=H(n);if(!a.isCompleteForPath(n)&&Pt(n)>1)return e;const m=le(n),F=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?u=c.updatePriority(a.getNode(),F):u=c.updateChild(a.getNode(),_,F,m,Bu,null)}const h=Pu(e,u,a.isFullyInitialized()||$(n),c.filtersNodes()),d=new Ro(i,h,r);return Uu(t,h,n,i,d,l)}function Br(t,e,n,s,i,r,o){const l=e.eventCache;let a,u;const c=new Ro(i,e,r);if($(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ts(e,u,!0,t.filter.filtersNodes());else{const h=H(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),a=ts(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=le(n),_=l.getNode().getImmediateChild(h);let m;if($(d))m=s;else{const S=c.getCompleteChild(h);S!=null?mo(d)===".priority"&&S.getChild(wu(d)).isEmpty()?m=S:m=S.updateChild(d,s):m=k.EMPTY_NODE}if(_.equals(m))a=e;else{const S=t.filter.updateChild(l.getNode(),h,m,d,c,o);a=ts(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ua(t,e){return t.eventCache.isCompleteForChild(e)}function Em(t,e,n,s,i,r,o){let l=e;return s.foreach((a,u)=>{const c=he(n,a);ua(e,H(c))&&(l=Br(t,l,c,u,i,r,o))}),s.foreach((a,u)=>{const c=he(n,a);ua(e,H(c))||(l=Br(t,l,c,u,i,r,o))}),l}function ha(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ur(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;$(n)?u=s:u=new re(null).setTree(n,s);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=ha(t,_,d);a=di(t,a,new ee(h),m,i,r,o,l)}}),u.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),S=ha(t,m,d);a=di(t,a,new ee(h),S,i,r,o,l)}}),a}function wm(t,e,n,s,i,r,o){if(fi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if($(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return di(t,e,n,a.getNode().getChild(n),i,r,l,o);if($(n)){let u=new re(null);return a.getNode().forEachChild(yn,(c,h)=>{u=u.set(new ee(c),h)}),Ur(t,e,n,u,i,r,l,o)}else return e}else{let u=new re(null);return s.foreach((c,h)=>{const d=he(n,c);a.isCompleteForPath(d)&&(u=u.set(c,a.getNode().getChild(d)))}),Ur(t,e,n,u,i,r,l,o)}}function Sm(t,e,n,s,i){const r=e.serverCache,o=Pu(e,r.getNode(),r.isFullyInitialized()||$(n),r.isFiltered());return Uu(t,o,n,s,Bu,i)}function Im(t,e,n,s,i,r){let o;if(fi(s,n)!=null)return e;{const l=new Ro(s,e,i),a=e.eventCache.getNode();let u;if($(n)||H(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=hi(s,tn(e));else{const h=e.serverCache.getNode();w(h instanceof k,"serverChildren would be complete if leaf node"),c=xo(s,h)}c=c,u=t.filter.updateFullNode(a,c,r)}else{const c=H(n);let h=No(s,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=a.getImmediateChild(c)),h!=null?u=t.filter.updateChild(a,c,h,le(n),l,r):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,k.EMPTY_NODE,le(n),l,r):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hi(s,tn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||fi(s,Q())!=null,ts(e,u,o,t.filter.filtersNodes())}}/**
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
 */class Tm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Co(s.getIndex()),r=jg(s);this.processor_=ym(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(k.EMPTY_NODE,l.getNode(),null),c=new en(a,o.isFullyInitialized(),i.filtersNodes()),h=new en(u,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ki(h,c),this.eventGenerator_=new Jg(this.query_)}get query(){return this.query_}}function xm(t){return t.viewCache_.serverCache.getNode()}function Nm(t,e){const n=tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function fa(t){return t.eventRegistrations_.length===0}function Rm(t,e){t.eventRegistrations_.push(e)}function da(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function pa(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(w(tn(t.viewCache_),"We should always have a full cache before handling merges"),w(kr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=bm(t.processor_,i,e,n,s);return vm(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Wu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Am(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(r,o)=>{s.push(wn(r,o))}),n.isFullyInitialized()&&s.push(Au(n.getNode())),Wu(t,s,n.getNode(),e)}function Wu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Xg(t.eventGenerator_,e,n,i)}/**
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
 */let pi;class Dm{constructor(){this.views=new Map}}function Pm(t){w(!pi,"__referenceConstructor has already been defined"),pi=t}function Om(){return w(pi,"Reference.ts has not been loaded"),pi}function km(t){return t.views.size===0}function Ao(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),pa(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(pa(o,e,n,s));return r}}function Mm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=hi(n,i?s:null),a=!1;l?a=!0:s instanceof k?(l=xo(n,s),a=!1):(l=k.EMPTY_NODE,a=!1);const u=ki(new en(l,a,!1),new en(s,i,!1));return new Tm(e,u)}return o}function Fm(t,e,n,s,i,r){const o=Mm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Rm(o,n),Am(o,n)}function Lm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ot(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(da(u,n,s)),fa(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||r.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(da(a,n,s)),fa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ot(t)&&r.push(new(Om())(e._repo,e._path)),{removed:r,events:o}}function Hu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const s of t.views.values())n=n||Nm(s,e);return n}function Vu(t,e){if(e._queryParams.loadsAllData())return Mi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function $u(t,e){return Vu(t,e)!=null}function Ot(t){return Mi(t)!=null}function Mi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let _i;function Bm(t){w(!_i,"__referenceConstructor has already been defined"),_i=t}function Um(){return w(_i,"Reference.ts has not been loaded"),_i}let Wm=1;class _a{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=pm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ju(t,e,n,s,i){return nm(t.pendingWriteTree_,e,n,s,i),i?An(t,new Zt(wo(),e,n)):[]}function Hm(t,e,n,s){sm(t.pendingWriteTree_,e,n,s);const i=re.fromObject(n);return An(t,new Sn(wo(),e,i))}function It(t,e,n=!1){const s=im(t.pendingWriteTree_,e);if(rm(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(Q(),!0):Se(s.children,o=>{r=r.set(new ee(o),!0)}),An(t,new ui(s.path,r,n))}else return[]}function Fi(t,e,n){return An(t,new Zt(So(),e,n))}function Vm(t,e,n){const s=re.fromObject(n);return An(t,new Sn(So(),e,s))}function $m(t,e){return An(t,new ys(So(),e))}function jm(t,e,n){const s=Po(t,n);if(s){const i=Oo(s),r=i.path,o=i.queryId,l=ke(r,e),a=new ys(Io(o),l);return ko(t,r,a)}else return[]}function Wr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||$u(o,e))){const a=Lm(o,e,n,s);km(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>Ot(_));if(c&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Gm(d);for(let m=0;m<_.length;++m){const S=_[m],F=S.query,W=Gu(t,S);t.listenProvider_.startListening(ss(F),gi(t,F),W.hashFn,W.onComplete)}}}!h&&u.length>0&&!s&&(c?t.listenProvider_.stopListening(ss(e),null):u.forEach(d=>{const _=t.queryToTagMap.get(Li(d));t.listenProvider_.stopListening(ss(d),_)}))}zm(t,u)}return l}function qm(t,e,n,s){const i=Po(t,s);if(i!=null){const r=Oo(i),o=r.path,l=r.queryId,a=ke(o,e),u=new Zt(Io(l),a,n);return ko(t,o,u)}else return[]}function Km(t,e,n,s){const i=Po(t,s);if(i){const r=Oo(i),o=r.path,l=r.queryId,a=ke(o,e),u=re.fromObject(n),c=new Sn(Io(l),a,u);return ko(t,o,c)}else return[]}function ga(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=ke(d,i);r=r||vn(_,m),o=o||Ot(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ot(l),r=r||vn(l,Q())):(l=new Dm,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=k.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const S=vn(m,Q());S&&(r=r.updateImmediateChild(_,S))}));const u=$u(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Li(e);w(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Ym();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const c=To(t.pendingWriteTree_,i);let h=Fm(l,e,n,c,r,a);if(!u&&!o&&!s){const d=Vu(l,e);h=h.concat(Qm(t,e,d))}return h}function Do(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ke(o,e),u=vn(l,a);if(u)return u});return Mu(i,e,r,n,!0)}function An(t,e){return qu(e,t.syncPointTree_,null,To(t.pendingWriteTree_,Q()))}function qu(t,e,n,s){if($(t.path))return Ku(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=vn(i,Q()));let r=[];const o=H(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Fu(s,o);r=r.concat(qu(l,a,u,c))}return i&&(r=r.concat(Ao(i,t,s,n))),r}}function Ku(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=vn(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Fu(s,o),c=t.operationForChild(o);c&&(r=r.concat(Ku(c,l,a,u)))}),i&&(r=r.concat(Ao(i,t,s,n))),r}function Gu(t,e){const n=e.query,s=gi(t,n);return{hashFn:()=>(xm(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?jm(t,n._path,s):$m(t,n._path);{const r=V_(i,n);return Wr(t,n,null,r)}}}}function gi(t,e){const n=Li(e);return t.queryToTagMap.get(n)}function Li(t){return t._path.toString()+"$"+t._queryIdentifier}function Po(t,e){return t.tagToQueryMap.get(e)}function Oo(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function ko(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=To(t.pendingWriteTree_,e);return Ao(s,n,i,null)}function Gm(t){return t.fold((e,n,s)=>{if(n&&Ot(n))return[Mi(n)];{let i=[];return n&&(i=Hu(n)),Se(s,(r,o)=>{i=i.concat(o)}),i}})}function ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Um())(t._repo,t._path):t}function zm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Li(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ym(){return Wm++}function Qm(t,e,n){const s=e._path,i=gi(t,e),r=Gu(t,n),o=t.listenProvider_.startListening(ss(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!Ot(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,h)=>{if(!$(u)&&c&&Ot(c))return[Mi(c).query];{let d=[];return c&&(d=d.concat(Hu(c).map(_=>_.query))),Se(h,(_,m)=>{d=d.concat(m)}),d}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(ss(c),gi(t,c))}}return o}/**
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
 */class Mo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Mo(n)}node(){return this.node_}}class Fo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new Fo(this.syncTree_,n)}node(){return Do(this.syncTree_,this.path_)}}const Jm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ma=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Zm(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Zm=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},zu=function(t,e,n,s){return Lo(e,new Fo(n,t),s)},Yu=function(t,e,n){return Lo(t,new Mo(e),n)};function Lo(t,e,n){const s=t.getPriority().val(),i=ma(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ma(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ve(i))),o.forEachChild(fe,(l,a)=>{const u=Lo(a,e.getImmediateChild(l),n);u!==a&&(r=r.updateImmediateChild(l,u))}),r}}/**
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
 */class Bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Uo(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=H(n);for(;i!==null;){const r=Cn(s.node.children,i)||{children:{},childCount:0};s=new Bo(i,s,r),n=le(n),i=H(n)}return s}function Dn(t){return t.node.value}function Qu(t,e){t.node.value=e,Hr(t)}function Ju(t){return t.node.childCount>0}function ey(t){return Dn(t)===void 0&&!Ju(t)}function Bi(t,e){Se(t.node.children,(n,s)=>{e(new Bo(n,t,s))})}function Xu(t,e,n,s){n&&e(t),Bi(t,i=>{Xu(i,e,!0)})}function ty(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ns(t){return new ee(t.parent===null?t.name:Ns(t.parent)+"/"+t.name)}function Hr(t){t.parent!==null&&ny(t.parent,t.name,t)}function ny(t,e,n){const s=ey(n),i=ht(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Hr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Hr(t))}/**
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
 */const sy=/[\[\].#$\/\u0000-\u001F\u007F]/,iy=/[\[\].#$\u0000-\u001F\u007F]/,ur=10*1024*1024,Wo=function(t){return typeof t=="string"&&t.length!==0&&!sy.test(t)},Zu=function(t){return typeof t=="string"&&t.length!==0&&!iy.test(t)},ry=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zu(t)},oy=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ho(t)||t&&typeof t=="object"&&ht(t,".sv")},eh=function(t,e,n,s){s&&e===void 0||Ui(Di(t,"value"),e,n)},Ui=function(t,e,n){const s=n instanceof ee?new Eg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$t(s));if(typeof e=="function")throw new Error(t+"contains a function "+$t(s)+" with contents = "+e.toString());if(ho(e))throw new Error(t+"contains "+e.toString()+" "+$t(s));if(typeof e=="string"&&e.length>ur/3&&Pi(e)>ur)throw new Error(t+"contains a string greater than "+ur+" utf8 bytes "+$t(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Se(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wo(o)))throw new Error(t+" contains an invalid key ("+o+") "+$t(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wg(s,o),Ui(t,l,s),Sg(s)}),i&&r)throw new Error(t+' contains ".value" child '+$t(s)+" in addition to actual children.")}},ly=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ps(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Wo(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Cg);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&je(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ay=function(t,e,n,s){const i=Di(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Se(e,(o,l)=>{const a=new ee(o);if(Ui(i,l,he(n,a)),mo(a)===".priority"&&!oy(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),ly(i,r)},th=function(t,e,n,s){if(!Zu(n))throw new Error(Di(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cy=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),th(t,e,n)},Ho=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},uy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ry(n))throw new Error(Di(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class hy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wi(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!yo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function nh(t,e,n){Wi(t,n),sh(t,s=>yo(s,e))}function Xe(t,e,n){Wi(t,n),sh(t,s=>je(s,e)||je(e,s))}function sh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(fy(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zn&&we("event: "+n.toString()),Rn(s)}}}/**
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
 */const dy="repo_interrupt",py=25;class _y{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ci(),this.transactionQueueTree_=new Bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gy(t,e,n){if(t.stats_=_o(t.repoInfo_),t.forceRestClient_||K_())t.server_=new ai(t.repoInfo_,(s,i,r,o)=>{ya(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>va(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new mt(t.repoInfo_,e,(s,i,r,o)=>{ya(t,s,i,r,o)},s=>{va(t,s)},s=>{my(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=J_(t.repoInfo_,()=>new Qg(t.stats_,t.server_)),t.infoData_=new qg,t.infoSyncTree_=new _a({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Fi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Vo(t,"connected",!1),t.serverSyncTree_=new _a({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const u=o(l,a);Xe(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ih(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hi(t){return Jm({timestamp:ih(t)})}function ya(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=ti(n,u=>Ce(u));o=Km(t.serverSyncTree_,r,a,i)}else{const a=Ce(n);o=qm(t.serverSyncTree_,r,a,i)}else if(s){const a=ti(n,u=>Ce(u));o=Vm(t.serverSyncTree_,r,a)}else{const a=Ce(n);o=Fi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Tn(t,r)),Xe(t.eventQueue_,l,o)}function va(t,e){Vo(t,"connected",e),e===!1&&by(t)}function my(t,e){Se(e,(n,s)=>{Vo(t,n,s)})}function Vo(t,e,n){const s=new ee("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Fi(t.infoSyncTree_,s,i);Xe(t.eventQueue_,s,r)}function $o(t){return t.nextWriteId_++}function yy(t,e,n,s,i){Vi(t,"set",{path:e.toString(),value:n,priority:s});const r=Hi(t),o=Ce(n,s),l=Do(t.serverSyncTree_,e),a=Yu(o,l,r),u=$o(t),c=ju(t.serverSyncTree_,e,a,u,!0);Wi(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||De("set at "+e+" failed: "+d);const S=It(t.serverSyncTree_,u,!m);Xe(t.eventQueue_,e,S),Vr(t,i,d,_)});const h=qo(t,e);Tn(t,h),Xe(t.eventQueue_,h,[])}function vy(t,e,n,s){Vi(t,"update",{path:e.toString(),value:n});let i=!0;const r=Hi(t),o={};if(Se(n,(l,a)=>{i=!1,o[l]=zu(he(e,l),Ce(a),t.serverSyncTree_,r)}),i)we("update() called with empty data.  Don't do anything."),Vr(t,s,"ok",void 0);else{const l=$o(t),a=Hm(t.serverSyncTree_,e,o,l);Wi(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const h=u==="ok";h||De("update at "+e+" failed: "+u);const d=It(t.serverSyncTree_,l,!h),_=d.length>0?Tn(t,e):e;Xe(t.eventQueue_,_,d),Vr(t,s,u,c)}),Se(n,u=>{const c=qo(t,he(e,u));Tn(t,c)}),Xe(t.eventQueue_,e,[])}}function by(t){Vi(t,"onDisconnectEvents");const e=Hi(t),n=ci();Or(t.onDisconnect_,Q(),(i,r)=>{const o=zu(i,r,t.serverSyncTree_,e);Du(n,i,o)});let s=[];Or(n,Q(),(i,r)=>{s=s.concat(Fi(t.serverSyncTree_,i,r));const o=qo(t,i);Tn(t,o)}),t.onDisconnect_=ci(),Xe(t.eventQueue_,Q(),s)}function Cy(t,e,n){let s;H(e._path)===".info"?s=ga(t.infoSyncTree_,e,n):s=ga(t.serverSyncTree_,e,n),nh(t.eventQueue_,e._path,s)}function Ey(t,e,n){let s;H(e._path)===".info"?s=Wr(t.infoSyncTree_,e,n):s=Wr(t.serverSyncTree_,e,n),nh(t.eventQueue_,e._path,s)}function wy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dy)}function Vi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Vr(t,e,n,s){e&&Rn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function rh(t,e,n){return Do(t.serverSyncTree_,e,n)||k.EMPTY_NODE}function jo(t,e=t.transactionQueueTree_){if(e||$i(t,e),Dn(e)){const n=lh(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Sy(t,Ns(e),n)}else Ju(e)&&Bi(e,n=>{jo(t,n)})}function Sy(t,e,n){const s=n.map(u=>u.currentWriteId),i=rh(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];w(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=ke(e,c.path);r=r.updateChild(h,c.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Vi(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(It(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();$i(t,Uo(t.transactionQueueTree_,e)),jo(t,t.transactionQueueTree_),Xe(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Rn(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{De("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Tn(t,e)}},o)}function Tn(t,e){const n=oh(t,e),s=Ns(n),i=lh(t,n);return Iy(t,i,s),s}function Iy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=ke(n,a.path);let c=!1,h;if(w(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,h=a.abortReason,i=i.concat(It(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=py)c=!0,h="maxretry",i=i.concat(It(t.serverSyncTree_,a.currentWriteId,!0));else{const d=rh(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Ui("transaction failed: Data returned ",_,a.path);let m=Ce(_);typeof _=="object"&&_!=null&&ht(_,".priority")||(m=m.updatePriority(d.getPriority()));const F=a.currentWriteId,W=Hi(t),K=Yu(m,d,W);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=K,a.currentWriteId=$o(t),o.splice(o.indexOf(F),1),i=i.concat(ju(t.serverSyncTree_,a.path,K,a.currentWriteId,a.applyLocally)),i=i.concat(It(t.serverSyncTree_,F,!0))}else c=!0,h="nodata",i=i.concat(It(t.serverSyncTree_,a.currentWriteId,!0))}Xe(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}$i(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Rn(s[l]);jo(t,t.transactionQueueTree_)}function oh(t,e){let n,s=t.transactionQueueTree_;for(n=H(e);n!==null&&Dn(s)===void 0;)s=Uo(s,n),e=le(e),n=H(e);return s}function lh(t,e){const n=[];return ah(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ah(t,e,n){const s=Dn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Bi(e,i=>{ah(t,i,n)})}function $i(t,e){const n=Dn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Qu(e,n.length>0?n:void 0)}Bi(e,s=>{$i(t,s)})}function qo(t,e){const n=Ns(oh(t,e)),s=Uo(t.transactionQueueTree_,e);return ty(s,i=>{hr(t,i)}),hr(t,s),Xu(s,i=>{hr(t,i)}),n}function hr(t,e){const n=Dn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(It(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qu(e,void 0):n.length=r+1,Xe(t.eventQueue_,Ns(e),i);for(let o=0;o<s.length;o++)Rn(s[o])}}/**
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
 */function Ty(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const ba=function(t,e){const n=Ny(t),s=n.namespace;n.domain==="firebase.com"&&vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||L_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},Ny=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=Ty(t.substring(c,h)));const d=xy(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const Ca="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ry=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ca.charAt(n%64),n=Math.floor(n/64);w(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ca.charAt(e[i]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Ay{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class Dy{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Py{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ko{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return $(this._path)?null:mo(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=ra(this._queryParams),n=fo(e);return n==="{}"?"default":n}get _queryObject(){return ra(this._queryParams)}isEqual(e){if(e=Nn(e),!(e instanceof Ko))return!1;const n=this._repo===e._repo,s=yo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bg(this._path)}}class Ft extends Ko{constructor(e,n){super(e,n,new Eo,!1)}get parent(){const e=wu(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=vs(this.ref,e);return new mi(this._node.getChild(n),s,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new mi(i,vs(this.ref,s),fe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ls(t,e){return t=Nn(t),t._checkNotDeleted("ref"),e!==void 0?vs(t._root,e):t._root}function vs(t,e){return t=Nn(t),H(t._path)===null?cy("child","path",e):th("child","path",e),new Ft(t._repo,he(t._path,e))}function Oy(t,e){t=Nn(t),Ho("push",t._path),eh("push",e,t._path,!0);const n=ih(t._repo),s=Ry(n),i=vs(t,s),r=vs(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ky(t){return Ho("remove",t._path),ch(t,null)}function ch(t,e){t=Nn(t),Ho("set",t._path),eh("set",e,t._path,!1);const n=new ws;return yy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function My(t,e){ay("update",e,t._path);const n=new ws;return vy(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Go{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Ay("value",this,new mi(e.snapshotNode,new Ft(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Dy(this,e,n):null}matches(e){return e instanceof Go?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Fy(t,e,n,s,i){const r=new Py(n,void 0),o=new Go(r);return Cy(t._repo,t,o),()=>Ey(t._repo,t,o)}function Ly(t,e,n,s){return Fy(t,"value",e)}Pm(Ft);Bm(Ft);/**
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
 */const By="FIREBASE_DATABASE_EMULATOR_HOST",$r={};let Uy=!1;function Wy(t,e,n,s){t.repoInfo_=new pu(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Hy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ba(r,i),l=o.repoInfo,a;typeof process<"u"&&Hl&&(a=Hl[By]),a?(r=`http://${a}?ns=${l.namespace}`,o=ba(r,i),l=o.repoInfo):o.repoInfo.secure;const u=new z_(t.name,t.options,e);uy("Invalid Firebase Database URL",o),$(o.path)||vt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=$y(l,t,u,new G_(t,n));return new jy(c,t)}function Vy(t,e){const n=$r[e];(!n||n[t.key]!==t)&&vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wy(t),delete n[t.key]}function $y(t,e,n,s){let i=$r[e.name];i||(i={},$r[e.name]=i);let r=i[t.toURLString()];return r&&vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new _y(t,Uy,n,s),i[t.toURLString()]=r,r}class jy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Vy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vt("Cannot call "+e+" on a deleted database.")}}function qy(t=y_(),e){const n=d_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=np("database");s&&Ky(n,...s)}return n}function Ky(t,e,n,s={}){t=Nn(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&ni(s,r.repoInfo_.emulatorOptions))return;vt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new $s($s.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:sp(s.mockUserToken,t.app.options.projectId);o=new $s(l)}Wy(r,i,s,o)}/**
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
 */function Gy(t){D_(m_),ii(new hs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Hy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),gn(Vl,$l,t),gn(Vl,$l,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Gy();const zy={apiKey:"AIzaSyBjP3AEJNKVFp07ROomynZ_QzNYyzsug_4",authDomain:"vet-onlain.firebaseapp.com",databaseURL:"https://vet-onlain-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"vet-onlain",storageBucket:"vet-onlain.firebasestorage.app",messagingSenderId:"140746709659",appId:"1:140746709659:web:2d91a30a8a23c86eb4043e"},Yy=Jc(zy),Bs=qy(Yy),Qy=qd("employee",()=>{const t=me([]),e=me(1),n=me(1),s=5;return{employees:t,currentPage:e,totalPages:n,fetchEmployees:async(a=1)=>{try{const u=Ls(Bs,"employees");Ly(u,c=>{const h=c.val();if(h){const d=Object.keys(h).map(S=>({id:S,...h[S]})),_=(a-1)*s,m=_+s;t.value=d.slice(_,m),n.value=Math.ceil(d.length/s),e.value=a}else t.value=[],n.value=1})}catch(u){console.error("Ошибка загрузки сотрудников:",u)}},addEmployee:async a=>{try{const u={...a,status:a.status||"working",changesHistory:[],comments:a.comment?[a.comment]:[],positionChanges:a.position?[{action:"initial",position:a.position,date:a.changeDate||new Date().toISOString()}]:[],salaryChanges:a.salary?[{salary:a.salary,monthlyBonus:a.monthlyBonus||0,quarterlyBonus:a.quarterlyBonus||0,date:a.changeDate||new Date().toISOString()}]:[],phone:a.phone||"",email:a.email||"",address:a.address||"",passportNumber:a.passportNumber||"",passportIssuedBy:a.passportIssuedBy||"",passportIssueDate:a.passportIssueDate||"",passportDepartmentCode:a.passportDepartmentCode||""},c=Ls(Bs,"employees"),h=Oy(c);await ch(h,u)}catch(u){throw console.error("Ошибка добавления сотрудника:",u),u}},updateEmployee:async a=>{try{const u={...a};a.positionAction&&(u.positionChanges||(u.positionChanges=[]),u.positionChanges.push({action:a.positionAction,position:a.position,date:a.changeDate||new Date().toISOString()})),a.salary&&(u.salaryChanges||(u.salaryChanges=[]),u.salaryChanges.push({salary:a.salary,monthlyBonus:a.monthlyBonus||0,quarterlyBonus:a.quarterlyBonus||0,date:a.changeDate||new Date().toISOString()})),a.comment&&(u.comments||(u.comments=[]),u.comments.push(a.comment));const c=Ls(Bs,`employees/${a.id}`);await My(c,u)}catch(u){throw console.error("Ошибка обновления сотрудника:",u),u}},deleteEmployee:async a=>{try{const u=Ls(Bs,`employees/${a}`);await ky(u)}catch(u){throw console.error("Ошибка удаления сотрудника:",u),u}}}}),Pn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Jy={class:"confirmation-modal"},Xy={class:"modal-content"},Zy={__name:"ConfirmationModal",props:{message:{type:String,default:"Вы уверены?"}},emits:["confirm","cancel"],setup(t,{emit:e}){const n=e,s=()=>{n("confirm")},i=()=>{n("cancel")};return(r,o)=>(ue(),ye("div",Jy,[b("div",Xy,[b("h3",null,Ue(t.message),1),b("div",{class:"buttons"},[b("button",{class:"btn-modal-eys",onClick:s},"Да"),b("button",{class:"btn-modal-no",onClick:i},"Нет")])])]))}},ev=Pn(Zy,[["__scopeId","data-v-7de66f5f"]]),tv={class:"modal"},nv={key:0},sv={key:1},iv={key:2},rv={__name:"EmployeeDetailsModal",props:{employee:{type:Object,required:!0},field:{type:String,required:!0}},emits:["save","close"],setup(t,{emit:e}){var a;const n=t,s=e,i=zt(()=>{switch(n.field){case"fullName":return"ФИО";case"position":return"должности";case"salary":return"оклада";default:return""}}),r=me({...n.employee,comment:((a=n.employee.comments)==null?void 0:a.length)>0?n.employee.comments[n.employee.comments.length-1]:"",positionAction:"transfer",monthlyBonus:0,quarterlyBonus:0,changeDate:new Date().toISOString().split("T")[0]}),o=()=>{const u={...r.value,comments:r.value.comment?[...n.employee.comments||[],r.value.comment]:n.employee.comments||[]};s("save",u)},l=()=>{s("close")};return(u,c)=>(ue(),ye("div",tv,[b("h2",null,"Редактирование "+Ue(i.value),1),b("form",{onSubmit:kc(o,["prevent"])},[t.field==="fullName"?(ue(),ye("div",nv,[c[10]||(c[10]=b("label",null,"Новое ФИО:",-1)),ce(b("input",{"onUpdate:modelValue":c[0]||(c[0]=h=>r.value.fullName=h),type:"text",required:""},null,512),[[pe,r.value.fullName]]),c[11]||(c[11]=b("label",null,"Комментарий:",-1)),ce(b("textarea",{"onUpdate:modelValue":c[1]||(c[1]=h=>r.value.comment=h)},null,512),[[pe,r.value.comment]]),c[12]||(c[12]=b("label",null,"Дата изменения:",-1)),ce(b("input",{"onUpdate:modelValue":c[2]||(c[2]=h=>r.value.changeDate=h),type:"date",required:""},null,512),[[pe,r.value.changeDate]])])):ot("",!0),t.field==="position"?(ue(),ye("div",sv,[c[14]||(c[14]=b("label",null,"Действие:",-1)),ce(b("select",{"onUpdate:modelValue":c[3]||(c[3]=h=>r.value.positionAction=h),required:""},c[13]||(c[13]=[b("option",{value:"transfer"},"Перевод на должность",-1),b("option",{value:"dismissal"},"Уволен с должности",-1),b("option",{value:"promotion"},"Повышение",-1)]),512),[[ao,r.value.positionAction]]),c[15]||(c[15]=b("label",null,"Новая должность:",-1)),ce(b("input",{"onUpdate:modelValue":c[4]||(c[4]=h=>r.value.position=h),type:"text",required:""},null,512),[[pe,r.value.position]]),c[16]||(c[16]=b("label",null,"Дата изменения:",-1)),ce(b("input",{"onUpdate:modelValue":c[5]||(c[5]=h=>r.value.changeDate=h),type:"date",required:""},null,512),[[pe,r.value.changeDate]])])):ot("",!0),t.field==="salary"?(ue(),ye("div",iv,[c[17]||(c[17]=b("label",null,"Новый оклад:",-1)),ce(b("input",{"onUpdate:modelValue":c[6]||(c[6]=h=>r.value.salary=h),type:"number",required:""},null,512),[[pe,r.value.salary]]),c[18]||(c[18]=b("label",null,"Ежемесячная премия:",-1)),ce(b("input",{"onUpdate:modelValue":c[7]||(c[7]=h=>r.value.monthlyBonus=h),type:"number"},null,512),[[pe,r.value.monthlyBonus]]),c[19]||(c[19]=b("label",null,"Квартальная премия:",-1)),ce(b("input",{"onUpdate:modelValue":c[8]||(c[8]=h=>r.value.quarterlyBonus=h),type:"number"},null,512),[[pe,r.value.quarterlyBonus]]),c[20]||(c[20]=b("label",null,"Дата изменения:",-1)),ce(b("input",{"onUpdate:modelValue":c[9]||(c[9]=h=>r.value.changeDate=h),type:"date",required:""},null,512),[[pe,r.value.changeDate]])])):ot("",!0),b("div",{class:"modal_block_btn"},[c[21]||(c[21]=b("button",{class:"save_btn",type:"submit"},"Сохранить",-1)),b("button",{class:"close_btn",type:"button",onClick:l},"Закрыть")])],32)]))}},ov=Pn(rv,[["__scopeId","data-v-cb254c63"]]),lv={key:0},av={key:0},cv={key:0},uv={key:0},hv=["onClick"],fv=["onClick"],dv=["onClick"],pv=["onUpdate:modelValue","onChange"],_v=["onClick"],gv=["onClick"],mv={__name:"EmployeeTable",props:{employees:{type:Array,required:!0}},emits:["edit","delete","update"],setup(t,{emit:e}){const n=t,s=e,i=me(!1),r=me(null),o=me(!1),l=me(null),a=me(""),u=me("fullName"),c=me("asc"),h=me({}),d=zt(()=>[...n.employees].sort((L,R)=>{let A=1;return c.value==="desc"&&(A=-1),L[u.value]<R[u.value]?-1*A:L[u.value]>R[u.value]?1*A:0})),_=L=>{if(!L)return"";try{return new Date(L).toLocaleDateString()}catch{return L}},m=L=>{u.value===L?c.value=c.value==="asc"?"desc":"asc":(u.value=L,c.value="asc")},S=L=>{const R=n.employees.find(A=>A.id===L);R&&(R.isDeleting=!0,setTimeout(()=>{r.value=L,i.value=!0,R.isDeleting=!1},800))},F=()=>{s("delete",r.value),i.value=!1},W=()=>{i.value=!1},K=(L,R)=>{l.value=L,a.value=R,o.value=!0},G=()=>{o.value=!1},P=L=>{L.isNew=!0,s("edit",L),setTimeout(()=>{L.isNew=!1},800),G()},z=L=>{h.value[L.id]=!0,L.isNew=!0,s("update",L),setTimeout(()=>{h.value[L.id]=!1,L.isNew=!1},800)},Ge=L=>{switch(L){case"internship":return"status-internship";case"working":return"status-working";case"vacation":return"status-vacation";case"sick":return"status-sick";case"fired":return"status-fired";default:return""}};return(L,R)=>(ue(),ye($e,null,[b("table",null,[b("thead",null,[b("tr",null,[b("th",{onClick:R[0]||(R[0]=A=>m("fullName"))},[R[4]||(R[4]=jn("ФИО ")),u.value==="fullName"?(ue(),ye("span",lv,Ue(c.value==="asc"?"↑":"↓"),1)):ot("",!0)]),b("th",{onClick:R[1]||(R[1]=A=>m("birthDate"))},[R[5]||(R[5]=jn("Дата рождения ")),u.value==="birthDate"?(ue(),ye("span",av,Ue(c.value==="asc"?"↑":"↓"),1)):ot("",!0)]),b("th",{onClick:R[2]||(R[2]=A=>m("position"))},[R[6]||(R[6]=jn("Должность ")),u.value==="position"?(ue(),ye("span",cv,Ue(c.value==="asc"?"↑":"↓"),1)):ot("",!0)]),b("th",{onClick:R[3]||(R[3]=A=>m("salary"))},[R[7]||(R[7]=jn("Оклад ")),u.value==="salary"?(ue(),ye("span",uv,Ue(c.value==="asc"?"↑":"↓"),1)):ot("",!0)]),R[8]||(R[8]=b("th",null,"Действия",-1))])]),b("tbody",null,[(ue(!0),ye($e,null,ac(d.value,A=>(ue(),ye("tr",{key:A.id,class:Yt([Ge(A.status),{"employee-created":A.isNew,"employee-deleted":A.isDeleting,"employee-status-change":h.value[A.id]}])},[b("td",{class:"table",onClick:Z=>K(A,"fullName")},Ue(A.fullName),9,hv),b("td",null,Ue(_(A.birthDate)),1),b("td",{class:"table",onClick:Z=>K(A,"position")},Ue(A.position),9,fv),b("td",{class:"table",onClick:Z=>K(A,"salary")},Ue(A.salary),9,dv),b("td",null,[ce(b("select",{"onUpdate:modelValue":Z=>A.status=Z,onChange:Z=>z(A)},R[9]||(R[9]=[Ac('<option value="internship" data-v-67bf4285>Стажировка</option><option value="working" data-v-67bf4285>Работает</option><option value="vacation" data-v-67bf4285>В отпуске</option><option value="sick" data-v-67bf4285>На больничном</option><option value="fired" data-v-67bf4285>Уволен</option>',5)]),40,pv),[[ao,A.status]]),b("button",{class:"edit_btn",onClick:Z=>L.$emit("edit",A)},"Редактировать",8,_v),b("button",{class:"delete_btn",onClick:Z=>S(A.id)},"Удалить",8,gv)])],2))),128))])]),i.value?(ue(),as(ev,{key:0,message:"Вы уверены, что хотите удалить этого сотрудника?",onConfirm:F,onCancel:W})):ot("",!0),o.value?(ue(),as(ov,{key:1,employee:l.value,field:a.value,onSave:P,onClose:G},null,8,["employee","field"])):ot("",!0)],64))}},yv=Pn(mv,[["__scopeId","data-v-67bf4285"]]),vv={class:"form"},bv={class:"form-section"},Cv={class:"form-section"},Ev={class:"form-section"},wv={__name:"EmployeeModal",props:{employee:{type:Object,default:null}},emits:["save","close"],setup(t,{emit:e}){const n=me(!1),s=me(!1),i=t,r=e,o=me({fullName:"",birthDate:"",position:"",salary:"",status:"working",phone:"",email:"",address:"",comment:"",passportNumber:"",passportIssuedBy:"",passportIssueDate:"",passportDepartmentCode:""});Qn(()=>i.employee,u=>{var c;u&&(o.value={...o.value,...u,comment:((c=u.comments)==null?void 0:c.length)>0?u.comments[u.comments.length-1]:""})},{immediate:!0});const l=()=>{var c,h;s.value=!0;const u={...o.value,comments:o.value.comment?[...((c=i.employee)==null?void 0:c.comments)||[],o.value.comment]:((h=i.employee)==null?void 0:h.comments)||[]};r("save",u),setTimeout(()=>{s.value=!1},1e3)},a=()=>{n.value=!0,setTimeout(()=>{r("close")},500)};return(u,c)=>(ue(),ye("div",{class:Yt(["modal",{closing:n.value}])},[b("h2",null,Ue(t.employee?"Редактировать сотрудника":"Добавить сотрудника"),1),b("form",{onSubmit:kc(l,["prevent"]),class:Yt({saving:s.value})},[b("div",vv,[b("div",bv,[c[14]||(c[14]=b("h3",null,"Основная информация",-1)),c[15]||(c[15]=b("label",null,"ФИО:",-1)),ce(b("input",{"onUpdate:modelValue":c[0]||(c[0]=h=>o.value.fullName=h),type:"text",required:""},null,512),[[pe,o.value.fullName]]),c[16]||(c[16]=b("label",null,"Дата рождения:",-1)),ce(b("input",{"onUpdate:modelValue":c[1]||(c[1]=h=>o.value.birthDate=h),type:"date",required:""},null,512),[[pe,o.value.birthDate]]),c[17]||(c[17]=b("label",null,"Должность:",-1)),ce(b("input",{"onUpdate:modelValue":c[2]||(c[2]=h=>o.value.position=h),type:"text",required:""},null,512),[[pe,o.value.position]]),c[18]||(c[18]=b("label",null,"Оклад:",-1)),ce(b("input",{"onUpdate:modelValue":c[3]||(c[3]=h=>o.value.salary=h),type:"number",required:""},null,512),[[pe,o.value.salary]]),c[19]||(c[19]=b("label",null,"Статус:",-1)),ce(b("select",{"onUpdate:modelValue":c[4]||(c[4]=h=>o.value.status=h),required:""},c[13]||(c[13]=[Ac('<option value="internship" data-v-de74b7ee>Стажировка</option><option value="working" data-v-de74b7ee>Работает</option><option value="vacation" data-v-de74b7ee>В отпуске</option><option value="sick" data-v-de74b7ee>На больничном</option><option value="fired" data-v-de74b7ee>Уволен</option>',5)]),512),[[ao,o.value.status]])]),b("div",Cv,[c[20]||(c[20]=b("h3",null,"Контактная информация",-1)),c[21]||(c[21]=b("label",null,"Телефон:",-1)),ce(b("input",{"onUpdate:modelValue":c[5]||(c[5]=h=>o.value.phone=h),type:"tel"},null,512),[[pe,o.value.phone]]),c[22]||(c[22]=b("label",null,"Email:",-1)),ce(b("input",{"onUpdate:modelValue":c[6]||(c[6]=h=>o.value.email=h),type:"email"},null,512),[[pe,o.value.email]]),c[23]||(c[23]=b("label",null,"Адрес:",-1)),ce(b("input",{"onUpdate:modelValue":c[7]||(c[7]=h=>o.value.address=h),type:"text"},null,512),[[pe,o.value.address]]),c[24]||(c[24]=b("label",null,"Комментарий:",-1)),ce(b("textarea",{"onUpdate:modelValue":c[8]||(c[8]=h=>o.value.comment=h)},null,512),[[pe,o.value.comment]])]),b("div",Ev,[c[25]||(c[25]=b("h3",null,"Паспортные данные",-1)),c[26]||(c[26]=b("label",null,"Серия и номер:",-1)),ce(b("input",{"onUpdate:modelValue":c[9]||(c[9]=h=>o.value.passportNumber=h),type:"text"},null,512),[[pe,o.value.passportNumber]]),c[27]||(c[27]=b("label",null,"Кем выдан:",-1)),ce(b("input",{"onUpdate:modelValue":c[10]||(c[10]=h=>o.value.passportIssuedBy=h),type:"text"},null,512),[[pe,o.value.passportIssuedBy]]),c[28]||(c[28]=b("label",null,"Дата выдачи:",-1)),ce(b("input",{"onUpdate:modelValue":c[11]||(c[11]=h=>o.value.passportIssueDate=h),type:"date"},null,512),[[pe,o.value.passportIssueDate]]),c[29]||(c[29]=b("label",null,"Код подразделения:",-1)),ce(b("input",{"onUpdate:modelValue":c[12]||(c[12]=h=>o.value.passportDepartmentCode=h),type:"text"},null,512),[[pe,o.value.passportDepartmentCode]])])]),b("div",{class:"form-actions"},[c[30]||(c[30]=b("button",{type:"submit"},"Сохранить",-1)),b("button",{type:"button",onClick:a},"Закрыть")])],34)],2))}},Sv=Pn(wv,[["__scopeId","data-v-de74b7ee"]]),Iv={class:"pagination"},Tv=["onClick"],xv={__name:"Pagination",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0}},emits:["changePage"],setup(t,{emit:e}){const n=e,s=i=>{n("changePage",i)};return(i,r)=>(ue(),ye("div",Iv,[(ue(!0),ye($e,null,ac(t.totalPages,o=>(ue(),ye("button",{key:o,class:Yt({active:o===t.currentPage,flipping:o===t.currentPage}),onClick:l=>s(o)},Ue(o),11,Tv))),128))]))}},Nv=Pn(xv,[["__scopeId","data-v-3e8f7b19"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */var Ea;(function(t){t.pop="pop",t.push="push"})(Ea||(Ea={}));var wa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wa||(wa={}));var Sa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sa||(Sa={}));const Rv=Symbol("");function Av(){return pn(Rv)}const Dv={key:0},Pv={key:1},Ov={__name:"HomeView",setup(t){const e=Av(),n=Qy(),s=me(!1),i=me(null);oc(async()=>{var m;try{await n.fetchEmployees()}catch(S){console.error("Ошибка загрузки сотрудников:",S),((m=S.response)==null?void 0:m.status)===401&&e.push("/login")}});const r=zt(()=>n.employees),o=zt(()=>n.currentPage),l=zt(()=>n.totalPages),a=(m=null)=>{i.value=m,s.value=!0},u=()=>{s.value=!1,i.value=null},c=async m=>{var S;try{m.id?(m.isNew=!0,await n.updateEmployee(m)):await n.addEmployee(m),u(),await n.fetchEmployees(o.value)}catch(F){console.error("Ошибка сохранения сотрудника:",F),((S=F.response)==null?void 0:S.status)===401&&e.push("/login")}},h=async m=>{var S;try{await n.updateEmployee({...m,status:m.status}),await n.fetchEmployees(o.value)}catch(F){console.error("Ошибка обновления статуса:",F),((S=F.response)==null?void 0:S.status)===401&&e.push("/login")}},d=async m=>{var S;try{await n.deleteEmployee(m),await n.fetchEmployees(o.value)}catch(F){console.error("Ошибка удаления сотрудника:",F),((S=F.response)==null?void 0:S.status)===401&&e.push("/login")}},_=m=>{n.fetchEmployees(m)};return(m,S)=>(ue(),ye("div",null,[S[1]||(S[1]=b("h1",null,"Список сотрудников",-1)),b("button",{onClick:a},"Добавить сотрудника"),r.value.length>0?(ue(),ye("div",Dv,[Ke(yv,{employees:r.value,onEdit:a,onDelete:d,onUpdate:h},null,8,["employees"]),Ke(Nv,{currentPage:o.value,totalPages:l.value,onChangePage:_},null,8,["currentPage","totalPages"])])):(ue(),ye("div",Pv,S[0]||(S[0]=[b("p",null,"Нет данных о сотрудниках",-1)]))),s.value?(ue(),as(Sv,{key:2,employee:i.value,onSave:c,onClose:u},null,8,["employee"])):ot("",!0)]))}},kv=Pn(Ov,[["__scopeId","data-v-6006ac0f"]]),Mv={__name:"App",setup(t){return(e,n)=>(ue(),as(kv))}},uh=Fd(Mv);uh.use(Ud());uh.mount("#app");
