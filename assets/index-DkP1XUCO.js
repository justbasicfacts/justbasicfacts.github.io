(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,F=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),kt=new WeakMap;let Ot=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(F&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=kt.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&kt.set(i,t))}return t}toString(){return this.cssText}};const Rt=e=>new Ot(typeof e=="string"?e:e+"",void 0,V),u=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Ot(i,e,V)},Qt=(e,t)=>{if(F)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),o=N.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)}},_t=F?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return Rt(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:te,defineProperty:ee,getOwnPropertyDescriptor:ie,getOwnPropertyNames:re,getOwnPropertySymbols:oe,getPrototypeOf:se}=Object,D=globalThis,St=D.trustedTypes,ae=St?St.emptyScript:"",ne=D.reactiveElementPolyfillSupport,P=(e,t)=>e,G={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Lt=(e,t)=>!te(e,t),At={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:Lt};Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=At){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,i);o!==void 0&&ee(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){const{get:o,set:s}=ie(this.prototype,t)??{get(){return this[i]},set(n){this[i]=n}};return{get:o,set(n){const b=o?.call(this);s?.call(this,n),this.requestUpdate(t,b,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??At}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=se(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const i=this.properties,r=[...re(i),...oe(i)];for(const o of r)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[r,o]of i)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const o=this._$Eu(i,r);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)i.unshift(_t(o))}else t!==void 0&&i.push(_t(t));return i}static _$Eu(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:G).toAttribute(i,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,i){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:G;this._$Em=o;const b=n.fromAttribute(i,s.type);this[o]=b??this._$Ej?.get(o)??b,this._$Em=null}}requestUpdate(t,i,r,o=!1,s){if(t!==void 0){const n=this.constructor;if(o===!1&&(s=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??Lt)(s,i)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:o,wrapped:s},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??i??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r){const{wrapped:n}=s,b=this[o];n!==!0||this._$AL.has(o)||b===void 0||this.C(o,void 0,s,b)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[P("elementProperties")]=new Map,E[P("finalized")]=new Map,ne?.({ReactiveElement:E}),(D.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,Et=e=>e,H=q.trustedTypes,Ct=H?H.createPolicy("lit-html",{createHTML:e=>e}):void 0,Nt="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+k,le=`<${Ht}>`,A=document,I=()=>A.createComment(""),M=e=>e===null||typeof e!="object"&&typeof e!="function",K=Array.isArray,ce=e=>K(e)||typeof e?.[Symbol.iterator]=="function",W=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Tt=/>/g,_=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Pt=/"/g,Dt=/^(?:script|style|textarea|title)$/i,de=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),a=de(1),C=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),It=new WeakMap,S=A.createTreeWalker(A,129);function jt(e,t){if(!K(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ct!==void 0?Ct.createHTML(t):t}const pe=(e,t)=>{const i=e.length-1,r=[];let o,s=t===2?"<svg>":t===3?"<math>":"",n=z;for(let b=0;b<i;b++){const l=e[b];let d,y,p=-1,v=0;for(;v<l.length&&(n.lastIndex=v,y=n.exec(l),y!==null);)v=n.lastIndex,n===z?y[1]==="!--"?n=Bt:y[1]!==void 0?n=Tt:y[2]!==void 0?(Dt.test(y[2])&&(o=RegExp("</"+y[2],"g")),n=_):y[3]!==void 0&&(n=_):n===_?y[0]===">"?(n=o??z,p=-1):y[1]===void 0?p=-2:(p=n.lastIndex-y[2].length,d=y[1],n=y[3]===void 0?_:y[3]==='"'?Pt:zt):n===Pt||n===zt?n=_:n===Bt||n===Tt?n=z:(n=_,o=void 0);const $=n===_&&e[b+1].startsWith("/>")?" ":"";s+=n===z?l+le:p>=0?(r.push(d),l.slice(0,p)+Nt+l.slice(p)+k+$):l+k+(p===-2?b:$)}return[jt(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class U{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let s=0,n=0;const b=t.length-1,l=this.parts,[d,y]=pe(t,i);if(this.el=U.createElement(d,r),S.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=S.nextNode())!==null&&l.length<b;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(Nt)){const v=y[n++],$=o.getAttribute(p).split(k),R=/([.?@])?(.*)/.exec(v);l.push({type:1,index:s,name:R[2],strings:$,ctor:R[1]==="."?ue:R[1]==="?"?fe:R[1]==="@"?ge:j}),o.removeAttribute(p)}else p.startsWith(k)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(Dt.test(o.tagName)){const p=o.textContent.split(k),v=p.length-1;if(v>0){o.textContent=H?H.emptyScript:"";for(let $=0;$<v;$++)o.append(p[$],I()),S.nextNode(),l.push({type:2,index:++s});o.append(p[v],I())}}}else if(o.nodeType===8)if(o.data===Ht)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(k,p+1))!==-1;)l.push({type:7,index:s}),p+=k.length-1}s++}}static createElement(t,i){const r=A.createElement("template");return r.innerHTML=t,r}}function B(e,t,i=e,r){if(t===C)return t;let o=r!==void 0?i._$Co?.[r]:i._$Cl;const s=M(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,i,r)),r!==void 0?(i._$Co??=[])[r]=o:i._$Cl=o),o!==void 0&&(t=B(e,o._$AS(e,t.values),o,r)),t}class he{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:r}=this._$AD,o=(t?.creationScope??A).importNode(i,!0);S.currentNode=o;let s=S.nextNode(),n=0,b=0,l=r[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new O(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new me(s,this,t)),this._$AV.push(d),l=r[++b]}n!==l?.index&&(s=S.nextNode(),n++)}return S.currentNode=A,o}p(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,r,o){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=B(this,t,i),M(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ce(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=U.createElement(jt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(i);else{const s=new he(o,this),n=s.u(this.options);s.p(i),this.T(n),this._$AH=s}}_$AC(t){let i=It.get(t.strings);return i===void 0&&It.set(t.strings,i=new U(t)),i}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const s of t)o===i.length?i.push(r=new O(this.O(I()),this.O(I()),this,this.options)):r=i[o],r._$AI(s),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const r=Et(t).nextSibling;Et(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,o,s){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=c}_$AI(t,i=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=B(this,t,i,0),n=!M(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{const b=t;let l,d;for(t=s[0],l=0;l<s.length-1;l++)d=B(this,b[r+l],i,l),d===C&&(d=this._$AH[l]),n||=!M(d)||d!==this._$AH[l],d===c?t=c:t!==c&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}n&&!o&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ue extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class fe extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class ge extends j{constructor(t,i,r,o,s){super(t,i,r,o,s),this.type=5}_$AI(t,i=this){if((t=B(this,t,i,0)??c)===C)return;const r=this._$AH,o=t===c&&r!==c||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==c&&(r===c||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class me{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const be=q.litHtmlPolyfillSupport;be?.(U,O),(q.litHtmlVersions??=[]).push("3.3.3");const Wt=(e,t,i)=>{const r=i?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const s=i?.renderBefore??null;r._$litPart$=o=new O(t.insertBefore(I(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis;let h=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wt(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};h._$litElement$=!0,h.finalized=!0,Z.litElementHydrateSupport?.({LitElement:h});const ye=Z.litElementPolyfillSupport;ye?.({LitElement:h});(Z.litElementVersions??=[]).push("4.2.2");function g(e,t){typeof customElements>"u"||customElements.get(e)||customElements.define(e,t)}const m=u`
  :host {
    box-sizing: border-box;
    font-family: var(
      --ui-font,
      'Roboto Condensed',
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      Arial,
      sans-serif
    );
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }
`,ve=[0,1,2,3,4,6,8,12,16,24],xe={0:"none",1:"0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)",2:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",3:"0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12)",4:"0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)",6:"0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)",8:"0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)",12:"0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)",16:"0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)",24:"0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)"};function J(e){const t=Math.max(0,Math.min(24,Math.round(Number(e)||0)));if(t===0)return"none";const i=ve.find(r=>r>=t)??24;return`var(--ui-shadow-${i}, ${xe[i]})`}const $e={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function X(e){return`var(--ui-zindex-${e.toLowerCase()}, ${$e[e]})`}class Y extends h{constructor(){super(...arguments),this.position="fixed",this.color="primary",this.elevation=4,this.square=!1}render(){return a`
      <header
        class="bar"
        part="root"
        style="z-index:${X("appBar")};box-shadow:${J(this.elevation)}"
      >
        <slot></slot>
      </header>
    `}}Y.properties={position:{type:String,reflect:!0},color:{type:String,reflect:!0},elevation:{type:Number,reflect:!0},square:{type:Boolean,reflect:!0}};Y.styles=[m,u`
      :host {
        display: block;
      }
      .bar {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: var(--ui-radius, 4px);
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([square]) .bar {
        border-radius: 0;
      }
      :host([position='fixed']) .bar {
        position: fixed;
        top: 0;
        left: auto;
        right: 0;
        width: 100%;
      }
      :host([position='absolute']) .bar {
        position: absolute;
        top: 0;
        left: auto;
        right: 0;
        width: 100%;
      }
      :host([position='sticky']) .bar {
        position: sticky;
        top: 0;
      }
      :host([position='static']) .bar {
        position: static;
      }
      :host([position='relative']) .bar {
        position: relative;
      }
      :host([color='primary']) .bar {
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([color='secondary']) .bar {
        background: var(--ui-color-secondary, #9c27b0);
        color: #fff;
      }
      :host([color='default']) .bar {
        background: var(--ui-color-bg-paper, #fff);
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([color='transparent']) .bar,
      :host([color='inherit']) .bar {
        background: transparent;
        color: inherit;
      }
    `];g("ui-app-bar",Y);class Q extends h{constructor(){super(...arguments),this.variant="regular",this.disableGutters=!1}render(){return a`<slot></slot>`}}Q.properties={variant:{type:String,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0}};Q.styles=[m,u`
      :host {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 56px;
        padding-inline: 16px;
      }
      :host([variant='dense']) {
        min-height: 48px;
      }
      :host([disable-gutters]) {
        padding-inline: 0;
      }
    `];g("ui-toolbar",Q);class tt extends h{constructor(){super(...arguments),this.maxWidth="lg",this.fixed=!1,this.disableGutters=!1}render(){return a`<slot></slot>`}}tt.properties={maxWidth:{type:String,attribute:"max-width",reflect:!0},fixed:{type:Boolean,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0}};tt.styles=[m,u`
      :host {
        display: block;
        box-sizing: border-box;
        margin-inline: auto;
        padding-inline: 16px;
      }
      /* Fluid by default: fills the available width up to max-width. */
      :host(:not([fixed])) {
        width: 100%;
      }
      :host([disable-gutters]) {
        padding-inline: 0;
      }

      :host([max-width='xs']) {
        max-width: 444px;
      }
      :host([max-width='sm']) {
        max-width: 600px;
      }
      :host([max-width='md']) {
        max-width: 900px;
      }
      :host([max-width='lg']) {
        max-width: 1200px;
      }
      :host([max-width='xl']) {
        max-width: 1536px;
      }
      :host([max-width='false']) {
        max-width: none;
      }
    `];g("ui-container",tt);const we=[{name:"xs",min:0},{name:"sm",min:600},{name:"md",min:900},{name:"lg",min:1200},{name:"xl",min:1536}];function ke(){let e="";for(const t of we)for(let i=1;i<=12;i+=1){const r=`:host([${t.name}='${i}']) { grid-column: span ${i}; }`;e+=t.min>0?`@media (min-width: ${t.min}px) { ${r} }`:`${r}
`}return e}class et extends h{constructor(){super(...arguments),this.container=!1,this.item=!1,this.spacing=0,this.rowSpacing=-1,this.columnSpacing=-1,this.xs=0,this.sm=0,this.md=0,this.lg=0,this.xl=0}updated(){const t=this.rowSpacing>=0?this.rowSpacing:this.spacing,i=this.columnSpacing>=0?this.columnSpacing:this.spacing;this.style.setProperty("--ui-grid-row-gap",`calc(${t} * var(--ui-spacing, 8px))`),this.style.setProperty("--ui-grid-column-gap",`calc(${i} * var(--ui-spacing, 8px))`)}render(){return a`<slot></slot>`}}et.properties={container:{type:Boolean,reflect:!0},item:{type:Boolean,reflect:!0},spacing:{type:Number,reflect:!0},rowSpacing:{type:Number,attribute:"row-spacing"},columnSpacing:{type:Number,attribute:"column-spacing"},xs:{type:Number,reflect:!0},sm:{type:Number,reflect:!0},md:{type:Number,reflect:!0},lg:{type:Number,reflect:!0},xl:{type:Number,reflect:!0}};et.styles=[m,u`
      :host {
        display: block;
      }
      :host([container]) {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        row-gap: var(--ui-grid-row-gap, 0);
        column-gap: var(--ui-grid-column-gap, 0);
      }
    `,Rt(ke())];g("ui-grid",et);class it extends h{constructor(){super(...arguments),this.direction="column",this.spacing=0,this.alignItems="",this.justifyContent="",this.wrap=!1,this.divider=!1}_gap(){return`calc(${this.spacing} * var(--ui-spacing, 8px))`}render(){const t=[`--ui-stack-gap:${this._gap()}`];return this.alignItems&&t.push(`align-items:${this.alignItems}`),this.justifyContent&&t.push(`justify-content:${this.justifyContent}`),a`<div class="inner" part="root" style=${t.join(";")}>
      <slot></slot>
    </div>`}}it.properties={direction:{type:String,reflect:!0},spacing:{type:Number,reflect:!0},alignItems:{type:String,attribute:"align-items"},justifyContent:{type:String,attribute:"justify-content"},wrap:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0}};it.styles=[m,u`
      :host {
        display: block;
      }
      .inner {
        display: flex;
        flex-direction: column;
        gap: var(--ui-stack-gap, 0);
      }
      :host([direction='row']) .inner {
        flex-direction: row;
      }
      :host([direction='row-reverse']) .inner {
        flex-direction: row-reverse;
      }
      :host([direction='column']) .inner {
        flex-direction: column;
      }
      :host([direction='column-reverse']) .inner {
        flex-direction: column-reverse;
      }
      :host([wrap]) .inner {
        flex-wrap: wrap;
      }

      /* MUI Stack dividers: every child after the first gets a leading rule.
         The first-child reset removes it from the top/left edge. The reset
         relies on :first-child matching a slotted node; if a consumer inserts
         a node dynamically that is not first it still gets its rule, so the
         treatment degrades gracefully rather than breaking layout. */
      :host([divider]) .inner ::slotted(*) {
        border-block-start: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      :host([divider]) .inner ::slotted(*:first-child) {
        border-block-start: none;
      }
    `];g("ui-stack",it);class rt extends h{constructor(){super(...arguments),this.padding="md",this.elevated=!1}render(){return a`
      <slot name="header"></slot>
      <div class="body" part="body"><slot></slot></div>
      <slot name="footer"></slot>
    `}}rt.properties={padding:{type:String,reflect:!0},elevated:{type:Boolean,reflect:!0}};rt.styles=[m,u`
      :host {
        display: block;
        background: var(--ui-color-bg, #fff);
        border: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
        border-radius: var(--ui-radius, 4px);
        overflow: hidden;
      }
      :host([elevated]) {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        border-color: transparent;
      }
      ::slotted([slot='header']) {
        margin: 0;
        padding: 16px 16px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      ::slotted([slot='footer']) {
        margin: 0;
        padding: 0 16px 16px;
      }
      .body {
        padding: 16px;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([padding='none']) .body {
        padding: 0;
      }
      :host([padding='sm']) .body {
        padding: 8px;
      }
      :host([padding='lg']) .body {
        padding: 24px;
      }
    `];g("ui-card",rt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=Symbol.for(""),_e=e=>{if(e?.r===ot)return e?._$litStatic$},Mt=e=>({_$litStatic$:e,r:ot}),Se=(e,...t)=>({_$litStatic$:t.reduce((i,r,o)=>i+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:ot}),Ut=new Map,Ae=e=>(t,...i)=>{const r=i.length;let o,s;const n=[],b=[];let l,d=0,y=!1;for(;d<r;){for(l=t[d];d<r&&(s=i[d],(o=_e(s))!==void 0);)l+=o+t[++d],y=!0;d!==r&&b.push(s),n.push(l),d++}if(d===r&&n.push(t[r]),y){const p=n.join("$$lit$$");(t=Ut.get(p))===void 0&&(n.raw=n,Ut.set(p,t=n)),i=b}return e(t,...i)},Ee=Ae(a),Ce={primary:"var(--ui-color-primary, #1976d2)","primary.light":"var(--ui-color-primary-light, #42a5f5)","primary.dark":"var(--ui-color-primary-hover, #1565c0)","primary.contrastText":"var(--ui-color-primary-contrast, #ffffff)",secondary:"var(--ui-color-secondary, #9c27b0)","secondary.dark":"var(--ui-color-secondary-dark, #7b1fa2)",error:"var(--ui-color-error, #d32f2f)",warning:"var(--ui-color-warning, #ed6c02)",info:"var(--ui-color-info, #0288d1)",success:"var(--ui-color-success, #2e7d32)",text:"var(--ui-color-text, rgba(0, 0, 0, 0.87))","text.primary":"var(--ui-color-text, rgba(0, 0, 0, 0.87))","text.secondary":"var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6))","text.disabled":"var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38))","background.paper":"var(--ui-color-bg-paper, #ffffff)","background.default":"var(--ui-color-bg-default, #ffffff)",divider:"var(--ui-color-divider, rgba(0, 0, 0, 0.12))","action.hover":"var(--ui-color-action-hover, rgba(0, 0, 0, 0.04))","action.selected":"var(--ui-color-action-selected, rgba(0, 0, 0, 0.08))","action.disabled":"var(--ui-color-action-disabled, rgba(0, 0, 0, 0.26))","action.focus":"var(--ui-color-action-focus, rgba(0, 0, 0, 0.12))",backdrop:"var(--ui-color-backdrop, rgba(0, 0, 0, 0.5))",inherit:"inherit",transparent:"transparent",currentColor:"currentColor"};function st(e){return Ce[e]??e}const Be={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",caption:"span",overline:"span",button:"span"};class at extends h{constructor(){super(...arguments),this.variant="body1",this.component="",this.align="",this.color="",this.gutterBottom=!1,this.noWrap=!1}updated(t){t.has("color")&&(this.style.color=this.color?st(this.color):"")}render(){const t=this.component||Be[this.variant]||"p";return Ee`
      <${Mt(t)} class="text" part=${Se`root`}
        ><slot></slot></${Mt(t)}>
    `}}at.properties={variant:{type:String,reflect:!0},component:{type:String},align:{type:String,reflect:!0},color:{type:String},gutterBottom:{type:Boolean,attribute:"gutter-bottom",reflect:!0},noWrap:{type:Boolean,attribute:"no-wrap",reflect:!0}};at.styles=[m,u`
      :host {
        display: block;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      .text {
        margin: 0;
      }

      :host([variant='h1']) .text {
        font-size: 96px;
        font-weight: 300;
        line-height: 1.167;
      }
      :host([variant='h2']) .text {
        font-size: 60px;
        font-weight: 300;
        line-height: 1.2;
      }
      :host([variant='h3']) .text {
        font-size: 48px;
        font-weight: 400;
        line-height: 1.167;
      }
      :host([variant='h4']) .text {
        font-size: 34px;
        font-weight: 400;
        line-height: 1.235;
      }
      :host([variant='h5']) .text {
        font-size: 24px;
        font-weight: 400;
        line-height: 1.334;
      }
      :host([variant='h6']) .text {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.6;
      }
      :host([variant='subtitle1']) .text {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.75;
      }
      :host([variant='subtitle2']) .text {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.57;
      }
      :host([variant='body1']) .text {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
      }
      :host([variant='body2']) .text {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.43;
      }
      :host([variant='caption']) .text {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.66;
      }
      :host([variant='overline']) .text {
        font-size: 12px;
        font-weight: 400;
        line-height: 2.66;
        text-transform: uppercase;
        letter-spacing: 0.08333em;
      }
      :host([variant='button']) .text {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.75;
        text-transform: uppercase;
        letter-spacing: 0.02857em;
      }

      :host([align='left']) .text {
        text-align: left;
      }
      :host([align='center']) .text {
        text-align: center;
      }
      :host([align='right']) .text {
        text-align: right;
      }
      :host([align='justify']) .text {
        text-align: justify;
      }

      :host([gutter-bottom]) .text {
        margin-bottom: 0.35em;
      }

      :host([no-wrap]) .text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `];g("ui-typography",at);class nt extends h{constructor(){super(...arguments),this.src="",this.alt="",this.initials="",this.size=40,this.variant="circular",this.color=""}render(){const t=`width:${this.size}px;height:${this.size}px;font-size:${Math.round(this.size*.4)}px;${this.color?`background:${this.color};`:""}`;return a`
      <div class="avatar" part="avatar" style=${t}>
        ${this.src?a`<img src=${this.src} alt=${this.alt} part="img" />`:a`<span class="initials" part="initials"
              >${this.initials||a`<slot></slot>`}</span
            >`}
      </div>
    `}}nt.properties={src:{type:String},alt:{type:String},initials:{type:String},size:{type:Number},variant:{type:String,reflect:!0},color:{type:String}};nt.styles=[m,u`
      :host {
        display: inline-flex;
        flex: none;
        vertical-align: middle;
      }
      .avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--ui-color-secondary, #9c27b0);
        color: #fff;
        font-weight: 500;
        user-select: none;
      }
      :host([variant='circular']) .avatar {
        border-radius: 50%;
      }
      :host([variant='rounded']) .avatar {
        border-radius: var(--ui-radius, 4px);
      }
      :host([variant='square']) .avatar {
        border-radius: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .initials {
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
    `];g("ui-avatar",nt);class lt extends h{constructor(){super(...arguments),this.label="",this.variant="filled",this.color="default",this.disabled=!1,this.deletable=!1,this.clickable=!1}_onDelete(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("delete",{detail:this.label,bubbles:!0,composed:!0}))}render(){return a`
      <span class="chip" part="chip">
        <slot name="icon"></slot>
        <span part="label">${this.label}<slot></slot></span>
        ${this.deletable?a`<button
              class="delete"
              part="delete"
              aria-label=${`Remove ${this.label}`}
              @click=${this._onDelete}
            >
              &times;
            </button>`:""}
      </span>
    `}}lt.properties={label:{type:String},variant:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},deletable:{type:Boolean,reflect:!0},clickable:{type:Boolean,reflect:!0}};lt.styles=[m,u`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      .chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: inherit;
        font-size: 13px;
        line-height: 1.4;
        padding: 5px 12px;
        border-radius: 16px;
        border: 1px solid transparent;
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.04));
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([clickable]) .chip {
        cursor: pointer;
      }
      :host([disabled]) .chip {
        opacity: 0.5;
        pointer-events: none;
      }

      :host([color='primary']) .chip {
        --chip: var(--ui-color-primary, #1976d2);
      }
      :host([color='secondary']) .chip {
        --chip: var(--ui-color-secondary, #9c27b0);
      }
      :host([color='success']) .chip {
        --chip: var(--ui-color-success, #2e7d32);
      }
      :host([color='warning']) .chip {
        --chip: var(--ui-color-warning, #ed6c02);
      }
      :host([color='error']) .chip {
        --chip: var(--ui-color-error, #d32f2f);
      }
      :host([color='info']) .chip {
        --chip: var(--ui-color-info, #0288d1);
      }

      :host([color]:not([color='default']))[variant='filled'] .chip {
        background: var(--chip);
        color: #fff;
      }
      :host([color]:not([color='default']))[variant='outlined'] .chip {
        background: transparent;
        border-color: var(--chip);
        color: var(--chip);
      }
      :host([variant='outlined'])[color='default'] .chip {
        background: transparent;
        border-color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }

      .delete {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        padding: 0;
        margin: 0 -4px 0 2px;
        font-size: 18px;
        line-height: 1;
        cursor: pointer;
        color: inherit;
        opacity: 0.6;
      }
      .delete:hover {
        opacity: 1;
      }
    `];g("ui-chip",lt);class ct extends h{constructor(){super(...arguments),this.variant="default",this.pill=!1}render(){return a`<slot></slot>`}}ct.properties={variant:{type:String,reflect:!0},pill:{type:Boolean,reflect:!0}};ct.styles=[m,u`
      :host {
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
        padding: 4px 10px;
        border-radius: var(--ui-radius, 4px);
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.04));
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        border: 1px solid transparent;
      }
      :host([pill]) {
        border-radius: 999px;
      }
      :host([variant='primary']) {
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([variant='secondary']) {
        background: var(--ui-color-secondary, #9c27b0);
        color: #fff;
      }
      :host([variant='success']) {
        background: rgba(46, 125, 50, 0.12);
        color: var(--ui-color-success, #2e7d32);
      }
      :host([variant='warning']) {
        background: rgba(237, 108, 2, 0.12);
        color: var(--ui-color-warning, #ed6c02);
      }
      :host([variant='error']) {
        background: rgba(211, 47, 47, 0.12);
        color: var(--ui-color-error, #d32f2f);
      }
      :host([variant='info']) {
        background: rgba(2, 136, 209, 0.12);
        color: var(--ui-color-info, #0288d1);
      }
    `];g("ui-badge",ct);class dt extends h{constructor(){super(...arguments),this.orientation="horizontal",this.inset=!1}render(){return a`<slot></slot>`}}dt.properties={orientation:{type:String,reflect:!0},inset:{type:Boolean,reflect:!0}};dt.styles=[m,u`
      :host {
        display: block;
        background: var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      :host([orientation='horizontal']) {
        width: 100%;
        height: 1px;
      }
      :host([orientation='vertical']) {
        width: 1px;
        height: 100%;
        align-self: stretch;
      }
      :host([orientation='horizontal'][inset]) {
        margin-left: 72px;
        width: calc(100% - 72px);
      }
    `];g("ui-divider",dt);class pt extends h{constructor(){super(...arguments),this.size="medium",this.color="default",this.disabled=!1,this.edge="",this.label=""}get _color(){return this.disabled?"var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38))":this.color==="default"?"var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6))":st(this.color)}render(){return a`
      <button
        part="button"
        type="button"
        style="color:${this._color}"
        ?disabled=${this.disabled}
        aria-label=${this.label||c}
      >
        <slot></slot>
      </button>
    `}}pt.properties={size:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},edge:{type:String,reflect:!0},label:{type:String}};pt.styles=[m,u`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: inherit;
        font-family: inherit;
        /* medium icon size; also the em base for the slotted content */
        font-size: 1.25rem;
        line-height: 1;
        cursor: pointer;
        transition: background-color 150ms ease, color 150ms ease;
      }
      button:hover {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([size='small']) button {
        padding: 5px;
        font-size: 1.125rem;
      }
      :host([size='large']) button {
        padding: 12px;
        font-size: 1.5rem;
      }
      :host([disabled]) button {
        cursor: not-allowed;
      }
      :host([edge='start']) button {
        margin-left: -8px;
      }
      :host([edge='end']) button {
        margin-right: -8px;
      }
      /* MUI scales whatever is slotted (svg or glyph) from the button's
         font-size, so one size variant drives both padding and icon. */
      ::slotted(*) {
        font-size: 1.25em;
        line-height: 1;
      }
      ::slotted(svg) {
        width: 1em;
        height: 1em;
        fill: currentColor;
      }
    `];g("ui-icon-button",pt);class ht extends h{constructor(){super(...arguments),this.content="",this.position="top"}render(){return a`
      <slot></slot>
      <span class="tip" role="tooltip" part="tooltip">${this.content}</span>
    `}}ht.properties={content:{type:String},position:{type:String,reflect:!0}};ht.styles=[m,u`
      :host {
        display: inline-flex;
        position: relative;
      }
      .tip {
        position: absolute;
        z-index: 1200;
        background: rgba(97, 97, 97, 0.92);
        color: #fff;
        font-family: inherit;
        font-size: 12px;
        line-height: 1.3;
        padding: 4px 8px;
        border-radius: var(--ui-radius, 4px);
        white-space: nowrap;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms ease;
      }
      :host(:hover) .tip,
      :host(:focus-within) .tip {
        opacity: 1;
      }
      :host([position='top']) .tip {
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      }
      :host([position='bottom']) .tip {
        top: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      }
      :host([position='left']) .tip {
        right: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
      }
      :host([position='right']) .tip {
        left: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
      }
    `];g("ui-tooltip",ht);class ut extends h{constructor(){super(...arguments),this.href="",this.target="",this.rel="",this.underline="always",this.color="primary",this.disabled=!1}render(){return a`
      <a
        part="link"
        href=${this.href||c}
        target=${this.target||c}
        rel=${this.rel||c}
        style=${this.disabled?c:`color:${st(this.color)}`}
        aria-disabled=${this.disabled?"true":c}
        ><slot></slot
      ></a>
    `}}ut.properties={href:{type:String},target:{type:String},rel:{type:String},underline:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0}};ut.styles=[m,u`
      :host {
        display: inline;
      }
      a {
        color: inherit;
        cursor: pointer;
      }
      :host([underline='always']) a {
        text-decoration: underline;
      }
      :host([underline='none']) a {
        text-decoration: none;
      }
      :host([underline='hover']) a {
        text-decoration: none;
      }
      :host([underline='hover']) a:hover,
      :host([underline='hover']) a:focus-visible {
        text-decoration: underline;
      }
      a:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
        border-radius: 2px;
      }
      :host([disabled]) a {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        text-decoration: none;
        pointer-events: none;
      }
    `];g("ui-link",ut);class ft extends h{constructor(){super(...arguments),this.dense=!1,this.disablePadding=!1}render(){return a`<slot name="subheader"></slot><slot></slot>`}}ft.properties={dense:{type:Boolean,reflect:!0},disablePadding:{type:Boolean,attribute:"disable-padding",reflect:!0}};ft.styles=[m,u`
      :host {
        display: block;
        padding: 8px 0;
      }
      :host([disable-padding]) {
        padding: 0;
      }
      /* Component-local variable (not a theme token): list items read it for
         their vertical padding, so the dense flag propagates without reach-in. */
      :host([dense]) {
        --ui-list-item-padding-y: 4px;
      }
    `];g("ui-list",ft);class gt extends h{constructor(){super(...arguments),this.alignItems="center",this.dense=!1,this.divider=!1}render(){return a`<slot></slot><slot name="secondary-action"></slot>`}}gt.properties={alignItems:{type:String,attribute:"align-items",reflect:!0},dense:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0}};gt.styles=[m,u`
      :host {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: calc(var(--ui-list-item-padding-y, 8px)) 16px;
      }
      :host([align-items='flex-start']) {
        align-items: flex-start;
      }
      :host([divider]) {
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      /* Component-local variable so a standalone dense item matches a dense list. */
      :host([dense]) {
        --ui-list-item-padding-y: 4px;
      }
      ::slotted([slot='secondary-action']) {
        margin-inline-start: auto;
      }
    `];g("ui-list-item",gt);class mt extends h{constructor(){super(...arguments),this.primary="",this.secondary="",this.inset=!1}render(){return a`
      <span class="primary" part="primary"><slot>${this.primary}</slot></span>
      <span class="secondary" part="secondary"
        ><slot name="secondary">${this.secondary}</slot></span
      >
    `}}mt.properties={primary:{type:String},secondary:{type:String},inset:{type:Boolean,reflect:!0}};mt.styles=[m,u`
      :host {
        display: block;
        flex: 1;
        min-width: 0;
      }
      .primary {
        display: block;
        font-size: 16px;
        line-height: 1.5;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      .secondary {
        display: block;
        font-size: 14px;
        line-height: 1.43;
        color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
      }
      :host([inset]) .primary {
        padding-inline-start: 56px;
      }
    `];g("ui-list-item-text",mt);class bt extends h{constructor(){super(...arguments),this.position="right",this._onSlotChange=()=>{this._syncItems()}}updated(){this._syncItems()}_resolve(t){switch(this.position){case"left":return{position:"left",alternate:!1};case"alternate":return{position:t%2===0?"right":"left",alternate:!0};case"alternate-reverse":return{position:t%2===0?"left":"right",alternate:!0};case"right":default:return{position:"right",alternate:!1}}}_syncItems(){Array.from(this.children).filter(i=>i.tagName.toLowerCase()==="ui-timeline-item").forEach((i,r)=>{const o=this._resolve(r);i.position!==o.position&&(i.position=o.position),i.alternate!==o.alternate&&(i.alternate=o.alternate)})}render(){return a`<slot @slotchange=${this._onSlotChange}></slot>`}}bt.properties={position:{type:String,reflect:!0}};bt.styles=[m,u`
      :host {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
      }
    `];g("ui-timeline",bt);class yt extends h{constructor(){super(...arguments),this.position="right",this.alternate=!1}render(){return a`
      <div class="opposite" part="opposite"><slot name="opposite"></slot></div>
      ${this.alternate?a`<div class="center" part="center"></div>`:c}
      <div class="content" part="content"><slot></slot></div>
    `}}yt.properties={position:{type:String,reflect:!0},alternate:{type:Boolean,reflect:!0}};yt.styles=[m,u`
      :host {
        display: flex;
        flex-direction: row;
        min-height: 48px;
      }
      /* position="left" mirrors the row so the content column sits left. */
      :host([position='left']) {
        flex-direction: row-reverse;
      }
      .opposite {
        flex: 1;
        padding: 6px 16px;
        text-align: right;
      }
      :host([position='left']) .opposite {
        text-align: left;
      }
      /* Center column: only rendered with [alternate] so the two side
         columns stay symmetric (the empty side keeps its width). */
      .center {
        flex: none;
        width: 12px;
      }
      .content {
        flex: 1;
        padding: 6px 16px;
      }
    `];g("ui-timeline-item",yt);class vt extends h{constructor(){super(...arguments),this.color="grey",this.variant="filled"}render(){return a`<slot></slot>`}}vt.properties={color:{type:String,reflect:!0},variant:{type:String,reflect:!0}};vt.styles=[m,u`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 4px 0;
        /* Slotted icons are larger than the dot and are allowed to overflow. */
        overflow: visible;
      }
      /* --ui-timeline-dot-color is a private component variable (not a
         design token): it just maps the "color" prop onto --ui-* tokens. */
      :host([color='grey']) {
        --ui-timeline-dot-color: #bdbdbd;
      }
      :host([color='primary']) {
        --ui-timeline-dot-color: var(--ui-color-primary, #1976d2);
      }
      :host([color='secondary']) {
        --ui-timeline-dot-color: var(--ui-color-secondary, #9c27b0);
      }
      :host([color='error']) {
        --ui-timeline-dot-color: var(--ui-color-error, #d32f2f);
      }
      :host([color='info']) {
        --ui-timeline-dot-color: var(--ui-color-info, #0288d1);
      }
      :host([color='success']) {
        --ui-timeline-dot-color: var(--ui-color-success, #2e7d32);
      }
      :host([color='warning']) {
        --ui-timeline-dot-color: var(--ui-color-warning, #ed6c02);
      }
      :host([variant='filled']) {
        background: var(--ui-timeline-dot-color, #bdbdbd);
      }
      :host([variant='outlined']) {
        background: transparent;
        border: 2px solid var(--ui-timeline-dot-color, #bdbdbd);
      }
      ::slotted(*) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        overflow: visible;
      }
    `];g("ui-timeline-dot",vt);class xt extends h{constructor(){super(...arguments),this.columns=3,this.spacing=4}updated(){this.style.setProperty("--ui-masonry-columns",String(this.columns)),this.style.setProperty("--ui-masonry-spacing",`${this.spacing}px`)}render(){return a`<slot></slot>`}}xt.properties={columns:{type:Number,reflect:!0},spacing:{type:Number,reflect:!0}};xt.styles=[m,u`
      :host {
        display: block;
        columns: var(--ui-masonry-columns, 3);
        column-gap: var(--ui-masonry-spacing, 4px);
      }
      ::slotted(*) {
        display: block;
        break-inside: avoid;
        margin-bottom: var(--ui-masonry-spacing, 4px);
      }
    `];g("ui-masonry",xt);class $t extends h{constructor(){super(...arguments),this.open=!1,this.anchor="left",this.variant="temporary",this.width="240px",this.elevation=16,this.dismissible=!0,this._prevOpen=null,this._onKeydown=t=>{t.key==="Escape"&&(!this.open||!this.dismissible||this.variant==="temporary"&&(this.open=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}show(){this.open||(this.open=!0)}close(){this.open&&(this.open=!1)}_onBackdrop(t){t.target===t.currentTarget&&this.dismissible&&this.close()}_panelStyle(){return`${this.anchor==="top"||this.anchor==="bottom"?`height:${this.width};`:`width:${this.width};`}z-index:${X("drawer")};box-shadow:${J(this.elevation)};`}updated(t){if(!t.has("open"))return;const i=this._prevOpen;this._prevOpen=this.open,i!==null&&this.dispatchEvent(new CustomEvent(this.open?"open":"close",{bubbles:!0,composed:!0}))}render(){const i=this.variant==="permanent"||this.open,r=this.variant==="temporary"&&this.open;return a`
      ${r?a`<div
            class="backdrop"
            part="backdrop"
            @click=${this._onBackdrop}
          ></div>`:c}
      ${i?a`<div class="panel" part="panel" style=${this._panelStyle()}>
            <slot name="header"></slot>
            <slot></slot>
          </div>`:c}
    `}}$t.properties={open:{type:Boolean,reflect:!0},anchor:{type:String,reflect:!0},variant:{type:String,reflect:!0},width:{type:String},elevation:{type:Number,reflect:!0},dismissible:{type:Boolean,reflect:!0}};$t.styles=[m,u`
      :host {
        display: block;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        background: var(--ui-color-backdrop, rgba(0, 0, 0, 0.5));
        z-index: calc(var(--ui-zindex-drawer, 1200) - 1);
      }
      .panel {
        display: flex;
        flex-direction: column;
        overflow: auto;
        background: var(--ui-color-bg-paper, #fff);
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([variant='permanent']) .panel {
        position: relative;
        height: 100%;
      }
      :host([variant='persistent']) .panel,
      :host([variant='temporary']) .panel {
        position: fixed;
      }
      :host([anchor='left']) .panel {
        top: 0;
        bottom: 0;
        left: 0;
      }
      :host([anchor='right']) .panel {
        top: 0;
        bottom: 0;
        right: 0;
      }
      :host([anchor='top']) .panel {
        top: 0;
        left: 0;
        right: 0;
      }
      :host([anchor='bottom']) .panel {
        bottom: 0;
        left: 0;
        right: 0;
      }
      ::slotted([slot='header']) {
        padding: 16px;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
    `];g("ui-drawer",$t);class wt extends h{constructor(){super(...arguments),this.open=!1,this.message="",this.action="",this.autoHideDuration=6e3,this.anchorVertical="bottom",this.anchorHorizontal="center",this._closeReason="timeout",this._onKeydown=t=>{t.key==="Escape"&&this.open&&(this._closeReason="escapeKeyDown",this.open=!1)},this._onAction=()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,composed:!0})),this._closeReason="action",this.open=!1}}_clearTimer(){this._timer!==void 0&&(window.clearTimeout(this._timer),this._timer=void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown),this._clearTimer()}updated(t){if(!(!t.has("open")&&!t.has("autoHideDuration"))){if(this._clearTimer(),this.open){this.autoHideDuration>0&&(this._timer=window.setTimeout(()=>{this._closeReason="timeout",this.open=!1},this.autoHideDuration));return}t.has("open")&&this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0,detail:{reason:this._closeReason}}))}}render(){return this.open?a`
      <div
        class="snackbar"
        part="snackbar"
        role="alert"
        style="box-shadow:${J(6)};z-index:${X("snackbar")}"
      >
        <div class="msg" part="message"><slot>${this.message}</slot></div>
        ${this.action?a`<button
              class="action"
              part="action"
              type="button"
              @click=${this._onAction}
            >
              ${this.action}
            </button>`:a`<slot name="action"></slot>`}
      </div>
    `:c}}wt.properties={open:{type:Boolean,reflect:!0},message:{type:String},action:{type:String},autoHideDuration:{type:Number,attribute:"auto-hide-duration",reflect:!0},anchorVertical:{type:String,attribute:"anchor-vertical",reflect:!0},anchorHorizontal:{type:String,attribute:"anchor-horizontal",reflect:!0}};wt.styles=[m,u`
      :host {
        display: contents;
      }
      .snackbar {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        background: #323232;
        color: #fff;
        border-radius: var(--ui-radius, 4px);
        padding: 6px 16px;
        min-width: 288px;
        max-width: 568px;
        font-size: 14px;
        box-sizing: border-box;
      }
      .msg {
        flex: 1;
        min-width: 0;
      }
      .action {
        flex: none;
        background: none;
        border: none;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        color: var(--ui-color-primary-light, #42a5f5);
        cursor: pointer;
        padding: 4px 8px;
        margin-right: -8px;
      }
      .action:focus-visible {
        outline: 2px solid var(--ui-color-primary-light, #42a5f5);
        outline-offset: 2px;
      }
      :host([anchor-vertical='top']) .snackbar {
        top: 24px;
        bottom: auto;
      }
      :host([anchor-vertical='bottom']) .snackbar {
        bottom: 24px;
        top: auto;
      }
      :host([anchor-horizontal='left']) .snackbar {
        left: 24px;
        right: auto;
      }
      :host([anchor-horizontal='right']) .snackbar {
        right: 24px;
        left: auto;
      }
      :host([anchor-horizontal='center']) .snackbar {
        left: 50%;
        right: auto;
        transform: translateX(-50%);
      }
    `];g("ui-snackbar",wt);const f={name:"Anıl Okay",initials:"AÖ",role:"Senior Frontend Developer",focus:"React · TypeScript · Web Components",location:"Berlin, Germany",linkedin:"https://www.linkedin.com/in/anilokay/",github:"https://github.com/justbasicfacts",email:"okayster@gmail.com",avatar:"https://github.com/justbasicfacts.png?size=400",lead:"I'm a frontend developer in Berlin. Sixteen years in, and most of my work has been on the plumbing side of the frontend: dashboards people use every day, component libraries other teams build on, and a few migrations nobody wanted to start. These days I'm at APCOA Group, working on B2B parking platforms.",facts:[{value:"16+",label:"years in software"},{value:"React · TS",label:"daily drivers"},{value:"Berlin",label:"based in"},{value:"B2B",label:"product focus"}],about:["I started in Istanbul, doing full-stack work on internet banking at ING. Then Berlin: e-commerce at Ladenzeile from 2021, and APCOA Group since 2023 on B2B parking platforms. Different domains each time, but the job is usually the same one. Take something complicated on the inside and make it usable on the outside.","The work I'm happiest with is usually the part other developers end up using. At Ladenzeile I built a React component library from scratch, and the new B2B portal was built on top of it. Before that I worked on reusable web components in banking. The design system I'm building at the moment is the same idea taken a few steps further.","Outside of work I keep coming back to framework-agnostic UI: web components, design tokens, and the tooling around them. It's where the platform is heading, and it's the kind of problem I enjoy."]},Gt=[{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"work",label:"Work"},{id:"skills",label:"Skills"},{id:"offscreen",label:"Off screen"},{id:"contact",label:"Contact"}],Te=[{company:"APCOA Group Ltd.",title:"Senior Frontend Developer",period:"May 2023 - Present",location:"Berlin, Germany",summary:"Joined ValueSpaces, an APCOA startup, which later merged into APCOA Group.",bullets:["Responsible for the B2B dashboards parking operators work in every day, focused on user-friendly, data-driven workflows.","Contributed to the Dynamic Pricing Tool and the Parking Product Configurator.","Work with React, Vite and micro frontends to keep the platform scalable and fast as the product set grows."],tech:["React","TypeScript","Vite","Micro Frontends"],dot:"primary"},{company:"Ladenzeile",title:"Frontend Engineer",period:"May 2021 - Apr 2023",location:"Berlin, Germany",summary:"Member of the Shop Area team, responsible for the B2B products of the Ladenzeile and Shopalike platforms.",bullets:["Created the upgrade plan from Angular 8 to the latest Angular version, then refactored the legacy codebase towards clean-code principles.","Part of the team transforming the main B2B portal from Angular to React.","Built a component library from scratch with React, and the new B2B application was developed on top of it."],tech:["React","Angular","TypeScript","Component Library"],dot:"info"},{company:"ING Türkiye",title:"Full Stack Developer",period:"Jun 2017 - Apr 2021",location:"Istanbul, Türkiye",summary:"Internet Banking and Portal Applications department, as a Senior Software Consultant in a Scrum team focused on frontend development for a new banking project.",bullets:["Developed reusable web components and features for internet banking.","Worked across the stack, from JavaScript and web components (lit-element, lit-html) to .NET Web Forms, web services, Entity Framework, SQL Server and Oracle."],tech:["JavaScript","Web Components","Lit",".NET Web Forms","SQL Server","Oracle","Scrum"],dot:"warning"}],ze=[{title:"Component library & design system",context:"Personal project · work in progress",badge:{label:"In progress",variant:"info"},body:"A framework-agnostic UI library I'm building. Web components are the single source of truth, with thin React bindings on top and a design-token layer that mirrors a familiar Material-style theme, so existing applications can adopt it without a rewrite. Coverage keeps growing, usage is documented in Storybook, and the packages ship through a private registry. The aim is one UI foundation that behaves the same in React, plain HTML and anything else.",chips:["Web components","React bindings","Design tokens","Storybook","Monorepo"],note:"This page is built with it.",featured:!0},{title:"B2B parking management dashboards",context:"APCOA Group · 2023 to today",body:"The dashboards parking operators rely on every day: role-based views, large data sets, and workflows that have to stay responsive. Built as part of a micro-frontend setup on React and Vite.",chips:["React","TypeScript","Vite","Micro frontends"]},{title:"Dynamic Pricing Tool",context:"APCOA Group",body:"Frontend work on the tool that lets operations teams model and roll out parking pricing without going through engineering.",chips:["React","Product UI"]},{title:"Parking Product Configurator",context:"APCOA Group",body:"Frontend work on the configurator used to set up parking products and their tariffs.",chips:["React","Form-heavy UI"]},{title:"B2B portal: Angular to React",context:"Ladenzeile · 2021 to 2023",body:"Planned the Angular 8 upgrade path for Ladenzeile's B2B portal, then helped move the main portal to React, with a component library built from scratch as the foundation.",chips:["Angular","React","Migration","Design system"]},{title:"Reusable web components for internet banking",context:"ING Türkiye · 2017 to 2021",body:"Reusable web components and features for internet banking. This is the work that got me interested in framework-independent UI in the first place.",chips:["Web components","lit-element","JavaScript"]}],Pe=[{title:"Languages",items:["TypeScript","JavaScript","HTML","CSS"]},{title:"Frameworks & libraries",items:["React","Redux","Angular","Lit","Web Components"]},{title:"UI & design systems",items:["Component libraries","Design tokens","Theming","Storybook"]},{title:"Build & architecture",items:["Vite","Micro frontends","pnpm","Monorepos","Git"]},{title:"Backend & data",items:[".NET","Entity Framework","SQL Server","Oracle"]},{title:"Ways of working",items:["Scrum","B2B products","Cross-team UI foundations"]}],w={url:"https://www.last.fm/user/justbasicfacts",since:"scrobbling since 2011",pulled:"October 2026",stats:[{value:"75,852",label:"scrobbles"},{value:"4,243",label:"artists"},{value:"414",label:"loved tracks"}],topWindow:"Most played in the last 30 days",topArtists:[{name:"Lera Lynn",plays:140},{name:"Egg",plays:77},{name:"Turnstile",plays:35},{name:"The Warning",plays:27},{name:"Angel Du$t",plays:20}],obsession:{track:"Black River",artist:"Lera Lynn"}},x={url:"",pulled:"October 2026",title:"Cycling",context:"Strava",groups:[{title:"This year",stats:[{value:"82",label:"rides"},{value:"3,287 km",label:"distance"},{value:"11,776 m",label:"climbed"},{value:"137 h",label:"in the saddle"}]},{title:"All time",stats:[{value:"1,318",label:"rides"},{value:"50,529 km",label:"distance"},{value:"366,560 m",label:"climbed"},{value:"2,117 h",label:"in the saddle"}]}],lines:["Longest ride 218.6 km","Biggest climb 1,809 m","Best 100 km in 3:07:51","Best 180 km in 6:26:58"]},Ie={palette:{primary:{main:"#1976d2",dark:"#1565c0",light:"#42a5f5",contrastText:"#ffffff"},secondary:{main:"#9c27b0",dark:"#7b1fa2"},error:{main:"#d32f2f",dark:"#c62828"},warning:{main:"#ed6c02"},info:{main:"#0288d1"},success:{main:"#2e7d32"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},background:{paper:"#ffffff",default:"#ffffff"},divider:"rgba(0, 0, 0, 0.12)",action:{hover:"rgba(0, 0, 0, 0.04)",selected:"rgba(0, 0, 0, 0.08)",disabled:"rgba(0, 0, 0, 0.26)",focus:"rgba(0, 0, 0, 0.12)"},backdrop:"rgba(0, 0, 0, 0.5)"},shape:{borderRadius:4},typography:{fontFamily:"'Roboto Condensed', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",fontSize:14},spacing:8,zIndex:{mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500}};function L(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Ft(e,t){if(!L(e)||!L(t))return t??e;const i={...e};for(const[r,o]of Object.entries(t))i[r]=L(o)&&L(i[r])?Ft(i[r],o):o;return i}function Me(e){const t=e.palette??{},i={};t.primary?.main&&(i["--ui-color-primary"]=t.primary.main,i["--ui-color-primary-hover"]=t.primary.dark??t.primary.main,t.primary.contrastText&&(i["--ui-color-primary-contrast"]=t.primary.contrastText)),t.secondary?.main&&(i["--ui-color-secondary"]=t.secondary.main),t.secondary?.dark&&(i["--ui-color-secondary-dark"]=t.secondary.dark),t.error?.main&&(i["--ui-color-error"]=t.error.main),t.warning?.main&&(i["--ui-color-warning"]=t.warning.main),t.info?.main&&(i["--ui-color-info"]=t.info.main),t.success?.main&&(i["--ui-color-success"]=t.success.main),t.primary?.light&&(i["--ui-color-primary-light"]=t.primary.light),t.text?.primary&&(i["--ui-color-text"]=t.text.primary),t.text?.secondary&&(i["--ui-color-text-secondary"]=t.text.secondary),t.text?.disabled&&(i["--ui-color-text-disabled"]=t.text.disabled),t.background?.paper&&(i["--ui-color-bg"]=t.background.paper,i["--ui-color-bg-paper"]=t.background.paper),t.background?.default&&(i["--ui-color-bg-default"]=t.background.default),t.divider&&(i["--ui-color-divider"]=t.divider),t.action?.hover&&(i["--ui-color-hover"]=t.action.hover,i["--ui-color-action-hover"]=t.action.hover),t.action?.selected&&(i["--ui-color-action-selected"]=t.action.selected),t.action?.disabled&&(i["--ui-color-action-disabled"]=t.action.disabled),t.action?.focus&&(i["--ui-color-action-focus"]=t.action.focus),t.backdrop&&(i["--ui-color-backdrop"]=t.backdrop),e.shape?.borderRadius!=null&&(i["--ui-radius"]=`${e.shape.borderRadius}px`),e.typography?.fontFamily&&(i["--ui-font"]=e.typography.fontFamily),e.spacing!=null&&(i["--ui-spacing"]=`${e.spacing}px`);for(const[r,o]of Object.entries(e.shadows??{}))i[`--ui-shadow-${r}`]=o;for(const[r,o]of Object.entries(e.zIndex??{}))i[`--ui-zindex-${r.toLowerCase()}`]=`${o}`;return i}function Ue(e,t){const i=Ft(Ie,e),r=Me(i),o=t instanceof Document?t.documentElement:t??document.documentElement;for(const[s,n]of Object.entries(r))o.style.setProperty(s,n)}const Vt="'Roboto Condensed', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",Oe={palette:{primary:{main:"#5b9dff",dark:"#3f83e8",light:"#93beff",contrastText:"#08131f"},secondary:{main:"#c084fc",dark:"#a855f7",light:"#d8b4fe"},text:{primary:"rgba(255, 255, 255, 0.94)",secondary:"rgba(255, 255, 255, 0.64)",disabled:"rgba(255, 255, 255, 0.36)"},background:{paper:"#12161b",default:"#0a0c10"},divider:"rgba(255, 255, 255, 0.12)",action:{hover:"rgba(255, 255, 255, 0.06)",selected:"rgba(91, 157, 255, 0.16)",disabled:"rgba(255, 255, 255, 0.28)",focus:"rgba(255, 255, 255, 0.18)"},backdrop:"rgba(4, 6, 9, 0.7)"},shape:{borderRadius:12},typography:{fontFamily:Vt,fontSize:15},shadows:{1:"0 1px 2px rgba(0, 0, 0, 0.5)",2:"0 2px 6px rgba(0, 0, 0, 0.5)",3:"0 6px 16px rgba(0, 0, 0, 0.5)",4:"0 10px 28px rgba(0, 0, 0, 0.55)",6:"0 14px 40px rgba(0, 0, 0, 0.6)",8:"0 18px 52px rgba(0, 0, 0, 0.62)",12:"0 24px 64px rgba(0, 0, 0, 0.66)",16:"0 30px 80px rgba(0, 0, 0, 0.7)",24:"0 36px 96px rgba(0, 0, 0, 0.72)"}},Re={palette:{primary:{main:"#2563eb",dark:"#1d4ed8",light:"#60a5fa",contrastText:"#ffffff"},secondary:{main:"#7c3aed",dark:"#6d28d9",light:"#a78bfa"},text:{primary:"rgba(9, 14, 24, 0.92)",secondary:"rgba(9, 14, 24, 0.62)",disabled:"rgba(9, 14, 24, 0.36)"},background:{paper:"#ffffff",default:"#f6f7f9"},divider:"rgba(9, 14, 24, 0.12)",action:{hover:"rgba(9, 14, 24, 0.05)",selected:"rgba(37, 99, 235, 0.12)",disabled:"rgba(9, 14, 24, 0.26)",focus:"rgba(9, 14, 24, 0.14)"},backdrop:"rgba(9, 14, 24, 0.5)"},shape:{borderRadius:12},typography:{fontFamily:Vt,fontSize:15},shadows:{1:"0 1px 2px rgba(15, 23, 42, 0.08)",2:"0 2px 8px rgba(15, 23, 42, 0.08)",3:"0 8px 24px rgba(15, 23, 42, 0.08)",4:"0 12px 32px rgba(15, 23, 42, 0.1)",6:"0 16px 44px rgba(15, 23, 42, 0.1)",8:"0 20px 56px rgba(15, 23, 42, 0.12)",12:"0 24px 68px rgba(15, 23, 42, 0.12)",16:"0 30px 84px rgba(15, 23, 42, 0.14)",24:"0 36px 100px rgba(15, 23, 42, 0.14)"}},Le={dark:Oe,light:Re},qt="ao-theme";function Ne(){const e=localStorage.getItem(qt);return e==="dark"||e==="light"?e:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function Kt(e){Ue(Le[e]),document.documentElement.dataset.theme=e,localStorage.setItem(qt,e);const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",e==="dark"?"#0a0c10":"#f6f7f9")}function He(){return document.documentElement.dataset.theme==="light"?"light":"dark"}const Zt=a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.9"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
><path d="M5 12h14M13 6l6 6-6 6" /></svg>`,De=a`<svg
  viewBox="0 0 24 24"
  width="18"
  height="18"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  aria-hidden="true"
><circle cx="12" cy="12" r="4.1" />
  <path
    d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6"
  /></svg
>`,je=a`<svg
  viewBox="0 0 24 24"
  width="18"
  height="18"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
><path d="M20.5 14.8A8.6 8.6 0 0 1 9.2 3.5a8.6 8.6 0 1 0 11.3 11.3Z" /></svg
>`,We=a`<svg
  viewBox="0 0 24 24"
  width="18"
  height="18"
  fill="none"
  stroke="currentColor"
  stroke-width="1.9"
  stroke-linecap="round"
  aria-hidden="true"
><path d="M4 7h16M4 12h16M4 17h16" /></svg
>`,Ge=a`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
  ><path
    d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.03-3.3-2.03 0-2.34 1.57-2.34 3.2V21H9V9Z"
  /></svg
>`,Fe=a`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
  ><path
    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
  /></svg
>`,Ve=a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.7"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7.5 8 5.5 8-5.5" /></svg
>`;function qe(){Kt(He()==="dark"?"light":"dark")}function Ke(){const e=document.querySelector(".site-drawer");e&&(e.open=!0)}function Jt(){const e=document.querySelector(".site-drawer");e&&(e.open=!1)}async function Ze(e){const t=document.querySelector(".site-snackbar");try{await navigator.clipboard.writeText(e),t&&(t.message="Email address copied to clipboard",t.open=!0)}catch{window.location.href=`mailto:${e}`}}const Je=()=>a`
  <ui-app-bar position="sticky" color="transparent" class="topbar">
    <ui-toolbar>
      <ui-container max-width="lg" class="topbar-inner">
        <a class="brand" href="#top">
          <ui-avatar
            initials=${f.initials}
            size=${36}
            variant="rounded"
            color="var(--ui-color-primary)"
          ></ui-avatar>
          <span class="brand-text">
            <strong>${f.name}</strong>
            <small>${f.role}</small>
          </span>
        </a>
        <span class="spacer"></span>
        <nav class="nav" aria-label="Sections">
          ${Gt.map(e=>a`<a href="#${e.id}" data-nav="${e.id}"
              >${e.label}</a
            >`)}
        </nav>
        <ui-tooltip content="Switch theme" position="bottom">
          <ui-icon-button
            label="Switch between dark and light theme"
            class="theme-toggle"
            @click=${qe}
          >
            <span class="icon-sun">${De}</span>
            <span class="icon-moon">${je}</span>
          </ui-icon-button>
        </ui-tooltip>
        <ui-icon-button
          label="Open menu"
          class="menu-toggle"
          @click=${Ke}
        >
          ${We}
        </ui-icon-button>
      </ui-container>
    </ui-toolbar>
  </ui-app-bar>
`,Xe=()=>a`
  <header class="hero" id="top">
    <div class="hero-bg" aria-hidden="true"></div>
    <ui-container max-width="lg" class="hero-inner">
      <div class="hero-copy">
        <p class="kicker">${f.location} · ${f.role}</p>
        <h1 class="hero-title">${f.name}</h1>
        <p class="hero-focus">${f.focus}</p>
        <p class="hero-lead">${f.lead}</p>
        <div class="hero-actions">
          <ui-link
            class="cta cta-primary"
            href=${f.linkedin}
            target="_blank"
            rel="noopener"
            >Connect on LinkedIn ${Zt}</ui-link
          >
          <ui-link class="cta cta-ghost" href="#work"
            >See selected work</ui-link
          >
        </div>
        <ui-grid container spacing=${2} class="hero-facts">
          ${f.facts.map(e=>a`
              <ui-grid item xs=${6} md=${3}>
                <div class="fact">
                  <span class="fact-value">${e.value}</span>
                  <span class="fact-label">${e.label}</span>
                </div>
              </ui-grid>
            `)}
        </ui-grid>
      </div>
      <div class="hero-photo">
        <ui-avatar
          src=${f.avatar}
          initials=${f.initials}
          alt=${f.name}
          size=${220}
          variant="rounded"
        ></ui-avatar>
      </div>
    </ui-container>
  </header>
`,T=(e,t,i,r)=>a`
  <div class="section-head reveal">
    <span class="section-index">${e}</span>
    <h2 id="${i}-title">${t}</h2>
    ${r?a`<p class="section-lead">${r}</p>`:c}
  </div>
`,Ye=()=>a`
  <section class="section" id="about" aria-labelledby="about-title">
    <ui-container max-width="lg">
      ${T("01","About","about")}
      <div class="about-grid">
        <div class="about-copy reveal">
          ${f.about.map(e=>a`<p>${e}</p>`)}
        </div>
        <div class="glance reveal">
          <ui-card elevated padding="lg">
            <p class="glance-title">At a glance</p>
            <ui-list>
              <ui-list-item>
                <ui-list-item-text
                  primary="Senior Frontend Developer"
                  secondary="APCOA Group · since 2023"
                ></ui-list-item-text>
              </ui-list-item>
              <ui-list-item>
                <ui-list-item-text
                  primary="Berlin, Germany"
                  secondary="Berlin since 2021"
                ></ui-list-item-text>
              </ui-list-item>
              <ui-list-item>
                <ui-list-item-text
                  primary="React, TypeScript, web components"
                  secondary="Component libraries & design systems"
                ></ui-list-item-text>
              </ui-list-item>
              <ui-list-item>
                <ui-list-item-text
                  primary="Currently building"
                  secondary="A framework-agnostic UI library (work in progress)"
                ></ui-list-item-text>
              </ui-list-item>
              <ui-list-item>
                <ui-list-item-text
                  primary="Before that"
                  secondary="Ladenzeile, ING Türkiye"
                ></ui-list-item-text>
              </ui-list-item>
            </ui-list>
          </ui-card>
        </div>
      </div>
    </ui-container>
  </section>
`,Qe=()=>a`
  <section class="section" id="experience" aria-labelledby="experience-title">
    <ui-container max-width="lg">
      ${T("02","Experience","experience","Sixteen years of building web software: banking, commerce, and now parking platforms.")}
      <ui-timeline position="right" class="reveal">
        ${Te.map(e=>a`
            <ui-timeline-item>
              <ui-timeline-dot
                class="tl-dot"
                color=${e.dot}
              ></ui-timeline-dot>
              <ui-card elevated padding="md">
                <div class="tl-body">
                  <div class="tl-top">
                    <span class="tl-company">${e.company}</span>
                    <span class="tl-title">${e.title}</span>
                  </div>
                  <span class="tl-meta tl-period">${e.period}</span>
                  <span class="tl-meta">${e.location}</span>
                  <p class="tl-summary">${e.summary}</p>
                  <ul class="tl-bullets">
                    ${e.bullets.map(t=>a`<li>${t}</li>`)}
                  </ul>
                  <div class="tl-tech">
                    ${e.tech.map(t=>a`<ui-chip
                        label=${t}
                        variant="outlined"
                      ></ui-chip>`)}
                  </div>
                </div>
              </ui-card>
              <div slot="opposite" class="tl-date">${e.period}</div>
            </ui-timeline-item>
          `)}
      </ui-timeline>
    </ui-container>
  </section>
`,ti=()=>a`
  <section class="section" id="work" aria-labelledby="work-title">
    <ui-container max-width="lg">
      ${T("03","Selected work","work","A mix of product work and the shared foundations behind it. One of these is still on my desk.")}
      <ui-masonry columns=${3} spacing=${24} class="reveal">
        ${ze.map(e=>a`
            <ui-card
              padding="lg"
              elevated
              class="work-card ${e.featured?"work-card--featured":""}"
            >
              <div class="work-head">
                ${e.badge?a`<ui-badge variant=${e.badge.variant}
                      >${e.badge.label}</ui-badge
                    >`:c}
                <h3 class="work-title">${e.title}</h3>
              </div>
              <p class="work-context">${e.context}</p>
              <p class="work-body">${e.body}</p>
              ${e.note?a`<p class="work-note">${e.note}</p>`:c}
              <div class="work-chips">
                ${e.chips.map(t=>a`<ui-chip
                    label=${t}
                    variant="outlined"
                  ></ui-chip>`)}
              </div>
            </ui-card>
          `)}
      </ui-masonry>
    </ui-container>
  </section>
`,ei=()=>a`
  <section class="section" id="skills" aria-labelledby="skills-title">
    <ui-container max-width="lg">
      ${T("04","Skills","skills","What I reach for most often, and what I've picked up over the last decade.")}
      <div class="skills-grid reveal">
        ${Pe.map(e=>a`
            <ui-card padding="lg" class="skill-card">
              <p class="skill-title">${e.title}</p>
              <div class="skill-chips">
                ${e.items.map(t=>a`<ui-chip label=${t} variant="outlined"></ui-chip>`)}
              </div>
            </ui-card>
          `)}
      </div>
    </ui-container>
  </section>
`,ii=()=>a`
  <section class="section" id="offscreen" aria-labelledby="offscreen-title">
    <ui-container max-width="lg">
      ${T("05","Off screen","offscreen","Not work, for once. What's on repeat and how far I ride.")}
      <div class="life-grid reveal">
        <ui-card padding="lg" elevated class="life-card">
          <div class="life-head">
            <p class="work-context">Last.fm · ${w.since}</p>
            <h3 class="work-title">Music</h3>
          </div>
          <div class="life-stats">
            ${w.stats.map(e=>a`
                <div class="life-stat">
                  <span class="life-value">${e.value}</span>
                  <span class="life-label">${e.label}</span>
                </div>
              `)}
          </div>
          <p class="life-caption">${w.topWindow}</p>
          <ol class="life-rank">
            ${w.topArtists.map((e,t)=>a`
                <li>
                  <span class="life-index">${t+1}</span>
                  <span class="life-name">${e.name}</span>
                  <span class="life-plays">${e.plays} plays</span>
                </li>
              `)}
          </ol>
          <p class="life-now">
            Stuck on <strong>${w.obsession.track}</strong> by
            ${w.obsession.artist} right now.
          </p>
          <ui-link
            class="life-link"
            href=${w.url}
            target="_blank"
            rel="noopener"
            >Last.fm profile ${Zt}</ui-link
          >
          <p class="life-source">Numbers pulled in ${w.pulled}.</p>
        </ui-card>
        ${x.groups.length||x.lines.length||x.url?a`
              <ui-card padding="lg" elevated class="life-card">
                <div class="life-head">
                  <p class="work-context">
                    ${x.context}${` · pulled ${x.pulled}`}
                  </p>
                  <h3 class="work-title">${x.title}</h3>
                </div>
                ${x.groups.map(e=>a`
                    <div class="life-group">
                      <p class="life-group-title">${e.title}</p>
                      <div class="life-stats">
                        ${e.stats.map(t=>a`
                            <div class="life-stat">
                              <span class="life-value">${t.value}</span>
                              <span class="life-label">${t.label}</span>
                            </div>
                          `)}
                      </div>
                    </div>
                  `)}
                ${x.lines.length?a`<ul class="life-list">
                      ${x.lines.map(e=>a`<li>${e}</li>`)}
                    </ul>`:c}
                ${c}
              </ui-card>
            `:c}
      </div>
    </ui-container>
  </section>
`,ri=()=>a`
  <section class="section" id="contact" aria-labelledby="contact-title">
    <ui-container max-width="lg">
      ${T("06","Contact","contact")}
      <ui-card padding="lg" elevated class="contact-card reveal">
        <div class="contact-grid">
          <div>
            <h3 class="contact-title">
              Let's talk about frontend foundations.
            </h3>
            <p class="contact-body">
              I'm always up for a conversation about component systems,
              micro frontends, or the messy parts of migrating a frontend that
              can't stop shipping. The quickest way to reach me is LinkedIn.
            </p>
          </div>
          <div class="contact-links">
            <a
              class="contact-link"
              href=${f.linkedin}
              target="_blank"
              rel="noopener"
            >
              ${Ge}
              <span class="label">
                <strong>LinkedIn</strong>
                <span>linkedin.com/in/anilokay</span>
              </span>
            </a>
            <a
              class="contact-link"
              href=${f.github}
              target="_blank"
              rel="noopener"
            >
              ${Fe}
              <span class="label">
                <strong>GitHub</strong>
                <span>github.com/justbasicfacts</span>
              </span>
            </a>
            ${a`
                  <a
                    class="contact-link"
                    href="mailto:${f.email}"
                    @click=${e=>{e.metaKey||e.ctrlKey||(e.preventDefault(),Ze(f.email))}}
                  >
                    ${Ve}
                    <span class="label">
                      <strong>Email</strong>
                      <span>${f.email} · click to copy</span>
                    </span>
                  </a>
                `}
          </div>
        </div>
      </ui-card>
    </ui-container>
  </section>
`,oi=()=>a`
  <footer class="site-footer">
    <ui-container max-width="lg">
      <div class="footer-inner">
        <span
          >© ${new Date().getFullYear()} ${f.name} · Berlin,
          Germany</span
        >
        <span>
          Built with the component library I'm working on: web components,
          design tokens and a private registry.
        </span>
        <span>
          <a href=${f.linkedin} target="_blank" rel="noopener"
            >LinkedIn</a
          >
          ·
          <a href=${f.github} target="_blank" rel="noopener">GitHub</a>
        </span>
      </div>
    </ui-container>
  </footer>
`,si=()=>a`
  <ui-drawer
    anchor="right"
    variant="temporary"
    width="280px"
    class="site-drawer"
  >
    <div class="drawer-panel">
      <strong>${f.name}</strong>
      <nav aria-label="Sections">
        ${Gt.map(e=>a`<a href="#${e.id}" @click=${Jt}
            >${e.label}</a
          >`)}
      </nav>
    </div>
  </ui-drawer>
`,ai=()=>a`
  ${Je()} ${Xe()}
  <main id="main">
    ${Ye()} ${Qe()} ${ti()}
    ${ei()} ${ii()} ${ri()}
  </main>
  ${oi()} ${si()}
  ${a`<ui-snackbar
        class="site-snackbar"
        message="Email address copied to clipboard"
        action="Dismiss"
        anchor-vertical="bottom"
        anchor-horizontal="center"
      ></ui-snackbar>`}
`;Kt(Ne());Wt(ai(),document.getElementById("app"));const Xt=new IntersectionObserver(e=>{for(const t of e)t.isIntersecting&&(t.target.classList.add("is-visible"),Xt.unobserve(t.target))},{rootMargin:"0px 0px -12% 0px",threshold:.08});document.querySelectorAll(".reveal").forEach(e=>Xt.observe(e));const ni=Array.from(document.querySelectorAll(".nav a[data-nav]")),li=new IntersectionObserver(e=>{for(const t of e){if(!t.isIntersecting)continue;const i=t.target.id;ni.forEach(r=>r.classList.toggle("is-active",r.dataset.nav===i))}},{rootMargin:"-45% 0px -50% 0px",threshold:0});document.querySelectorAll("main > section[id]").forEach(e=>li.observe(e));function Yt(){const e=document.querySelector("ui-masonry");if(!e)return;const t=window.innerWidth;e.columns=t<700?1:t<1080?2:3}Yt();window.addEventListener("resize",Yt);document.querySelector(".site-drawer")?.addEventListener("close",()=>Jt());
