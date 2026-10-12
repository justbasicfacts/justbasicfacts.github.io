(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,q=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Pt=new WeakMap;let Zt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Pt.set(e,t))}return t}toString(){return this.cssText}};const Z=i=>new Zt(typeof i=="string"?i:i+"",void 0,K),f=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Zt(e,i,K)},ue=(i,t)=>{if(q)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=D.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}},It=q?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Z(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:he,defineProperty:fe,getOwnPropertyDescriptor:ge,getOwnPropertyNames:me,getOwnPropertySymbols:ye,getPrototypeOf:be}=Object,W=globalThis,Lt=W.trustedTypes,ve=Lt?Lt.emptyScript:"",xe=W.reactiveElementPolyfillSupport,L=(i,t)=>i,V={toAttribute(i,t){switch(t){case Boolean:i=i?ve:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Jt=(i,t)=>!he(i,t),Nt={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:Jt};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&fe(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:s}=ge(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){const p=o?.call(this);s?.call(this,n),this.requestUpdate(t,p,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;const t=be(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){const e=this.properties,r=[...me(e),...ye(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(It(o))}else t!==void 0&&e.push(It(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ue(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:V).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:V;this._$Em=o;const p=n.fromAttribute(e,s.type);this[o]=p??this._$Ej?.get(o)??p,this._$Em=null}}requestUpdate(t,e,r,o=!1,s){if(t!==void 0){const n=this.constructor;if(o===!1&&(s=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??Jt)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:s},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r){const{wrapped:n}=s,p=this[o];n!==!0||this._$AL.has(o)||p===void 0||this.C(o,void 0,s,p)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[L("elementProperties")]=new Map,E[L("finalized")]=new Map,xe?.({ReactiveElement:E}),(W.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,Mt=i=>i,j=J.trustedTypes,Ut=j?j.createPolicy("lit-html",{createHTML:i=>i}):void 0,Yt="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,Xt="?"+k,$e=`<${Xt}>`,A=document,N=()=>A.createComment(""),M=i=>i===null||typeof i!="object"&&typeof i!="function",Y=Array.isArray,we=i=>Y(i)||typeof i?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Rt=/>/g,S=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ht=/'/g,Dt=/"/g,Qt=/^(?:script|style|textarea|title)$/i,ke=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),a=ke(1),z=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),jt=new WeakMap,_=A.createTreeWalker(A,129);function te(i,t){if(!Y(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}const Se=(i,t)=>{const e=i.length-1,r=[];let o,s=t===2?"<svg>":t===3?"<math>":"",n=I;for(let p=0;p<e;p++){const c=i[p];let d,b,h=-1,$=0;for(;$<c.length&&(n.lastIndex=$,b=n.exec(c),b!==null);)$=n.lastIndex,n===I?b[1]==="!--"?n=Ot:b[1]!==void 0?n=Rt:b[2]!==void 0?(Qt.test(b[2])&&(o=RegExp("</"+b[2],"g")),n=S):b[3]!==void 0&&(n=S):n===S?b[0]===">"?(n=o??I,h=-1):b[1]===void 0?h=-2:(h=n.lastIndex-b[2].length,d=b[1],n=b[3]===void 0?S:b[3]==='"'?Dt:Ht):n===Dt||n===Ht?n=S:n===Ot||n===Rt?n=I:(n=S,o=void 0);const x=n===S&&i[p+1].startsWith("/>")?" ":"";s+=n===I?c+$e:h>=0?(r.push(d),c.slice(0,h)+Yt+c.slice(h)+k+x):c+k+(h===-2?p:x)}return[te(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class U{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let s=0,n=0;const p=t.length-1,c=this.parts,[d,b]=Se(t,e);if(this.el=U.createElement(d,r),_.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=_.nextNode())!==null&&c.length<p;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Yt)){const $=b[n++],x=o.getAttribute(h).split(k),R=/([.?@])?(.*)/.exec($);c.push({type:1,index:s,name:R[2],strings:x,ctor:R[1]==="."?Ae:R[1]==="?"?Ee:R[1]==="@"?Ce:F}),o.removeAttribute(h)}else h.startsWith(k)&&(c.push({type:6,index:s}),o.removeAttribute(h));if(Qt.test(o.tagName)){const h=o.textContent.split(k),$=h.length-1;if($>0){o.textContent=j?j.emptyScript:"";for(let x=0;x<$;x++)o.append(h[x],N()),_.nextNode(),c.push({type:2,index:++s});o.append(h[$],N())}}}else if(o.nodeType===8)if(o.data===Xt)c.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(k,h+1))!==-1;)c.push({type:7,index:s}),h+=k.length-1}s++}}static createElement(t,e){const r=A.createElement("template");return r.innerHTML=t,r}}function T(i,t,e=i,r){if(t===z)return t;let o=r!==void 0?e._$Co?.[r]:e._$Cl;const s=M(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=o:e._$Cl=o),o!==void 0&&(t=T(i,o._$AS(i,t.values),o,r)),t}class _e{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??A).importNode(e,!0);_.currentNode=o;let s=_.nextNode(),n=0,p=0,c=r[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new O(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new ze(s,this,t)),this._$AV.push(d),c=r[++p]}n!==c?.index&&(s=_.nextNode(),n++)}return _.currentNode=A,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),M(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):we(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==l&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=U.createElement(te(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const s=new _e(o,this),n=s.u(this.options);s.p(e),this.T(n),this._$AH=s}}_$AC(t){let e=jt.get(t.strings);return e===void 0&&jt.set(t.strings,e=new U(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const s of t)o===e.length?e.push(r=new O(this.O(N()),this.O(N()),this,this.options)):r=e[o],r._$AI(s),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const r=Mt(t).nextSibling;Mt(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,s){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=l}_$AI(t,e=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=T(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const p=t;let c,d;for(t=s[0],c=0;c<s.length-1;c++)d=T(this,p[r+c],e,c),d===z&&(d=this._$AH[c]),n||=!M(d)||d!==this._$AH[c],d===l?t=l:t!==l&&(t+=(d??"")+s[c+1]),this._$AH[c]=d}n&&!o&&this.j(t)}j(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ae extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===l?void 0:t}}class Ee extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}}class Ce extends F{constructor(t,e,r,o,s){super(t,e,r,o,s),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??l)===z)return;const r=this._$AH,o=t===l&&r!==l||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==l&&(r===l||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ze{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const Te=J.litHtmlPolyfillSupport;Te?.(U,O),(J.litHtmlVersions??=[]).push("3.3.3");const Be=(i,t,e)=>{const r=e?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const s=e?.renderBefore??null;r._$litPart$=o=new O(t.insertBefore(N(),s),s,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis;let u=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Be(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};u._$litElement$=!0,u.finalized=!0,X.litElementHydrateSupport?.({LitElement:u});const Pe=X.litElementPolyfillSupport;Pe?.({LitElement:u});(X.litElementVersions??=[]).push("4.2.2");function g(i,t){typeof customElements>"u"||customElements.get(i)||customElements.define(i,t)}const m=f`
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
`,Q={primary:"var(--ui-color-primary, #1976d2)","primary.light":"var(--ui-color-primary-light, #42a5f5)","primary.dark":"var(--ui-color-primary-hover, #1565c0)","primary.contrastText":"var(--ui-color-primary-contrast, #ffffff)",secondary:"var(--ui-color-secondary, #9c27b0)","secondary.dark":"var(--ui-color-secondary-dark, #7b1fa2)",error:"var(--ui-color-error, #d32f2f)",warning:"var(--ui-color-warning, #ed6c02)",info:"var(--ui-color-info, #0288d1)",success:"var(--ui-color-success, #2e7d32)",text:"var(--ui-color-text, rgba(0, 0, 0, 0.87))","text.primary":"var(--ui-color-text, rgba(0, 0, 0, 0.87))","text.secondary":"var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6))","text.disabled":"var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38))","background.paper":"var(--ui-color-bg-paper, #ffffff)","background.default":"var(--ui-color-bg-default, #ffffff)",divider:"var(--ui-color-divider, rgba(0, 0, 0, 0.12))","action.hover":"var(--ui-color-action-hover, rgba(0, 0, 0, 0.04))","action.selected":"var(--ui-color-action-selected, rgba(0, 0, 0, 0.08))","action.disabled":"var(--ui-color-action-disabled, rgba(0, 0, 0, 0.26))","action.focus":"var(--ui-color-action-focus, rgba(0, 0, 0, 0.12))",backdrop:"var(--ui-color-backdrop, rgba(0, 0, 0, 0.5))",inherit:"inherit",transparent:"transparent",currentColor:"currentColor"};function B(i){return Q[i]??i}const Ie=[0,1,2,3,4,6,8,12,16,24],Le={0:"none",1:"0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)",2:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",3:"0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12)",4:"0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)",6:"0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)",8:"0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)",12:"0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)",16:"0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)",24:"0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)"};function tt(i){const t=Math.max(0,Math.min(24,Math.round(Number(i)||0)));if(t===0)return"none";const e=Ie.find(r=>r>=t)??24;return`var(--ui-shadow-${e}, ${Le[e]})`}const Ne={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function et(i){return`var(--ui-zindex-${i.toLowerCase()}, ${Ne[i]})`}const Me=["primary","secondary","default","transparent","inherit"];class it extends u{constructor(){super(...arguments),this.position="fixed",this.color="primary",this.elevation=4,this.square=!1}render(){const t=Me.includes(this.color)?"":`background:${B(this.color)};color:var(--ui-color-text, rgba(0, 0, 0, 0.87));`;return a`
      <header
        class="bar"
        part="root"
        style="z-index:${et("appBar")};box-shadow:${tt(this.elevation)};${t}"
      >
        <slot></slot>
      </header>
    `}}it.properties={position:{type:String,reflect:!0},color:{type:String,reflect:!0},elevation:{type:Number,reflect:!0},square:{type:Boolean,reflect:!0}};it.styles=[m,f`
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
      :host([position='sticky']) {
        position: sticky;
        top: 0;
        z-index: var(--ui-zindex-appbar, 1100);
      }
      :host([position='fixed']) {
        z-index: var(--ui-zindex-appbar, 1100);
      }
      :host([position='sticky']) .bar {
        position: relative;
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
    `];g("ui-app-bar",it);class rt extends u{constructor(){super(...arguments),this.variant="regular",this.disableGutters=!1}render(){return a`<slot></slot>`}}rt.properties={variant:{type:String,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0}};rt.styles=[m,f`
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
    `];g("ui-toolbar",rt);class ot extends u{constructor(){super(...arguments),this.maxWidth="lg",this.fixed=!1,this.disableGutters=!1}render(){return a`<slot></slot>`}}ot.properties={maxWidth:{type:String,attribute:"max-width",reflect:!0},fixed:{type:Boolean,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0}};ot.styles=[m,f`
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
    `];g("ui-container",ot);const Ue=[{name:"xs",min:0},{name:"sm",min:600},{name:"md",min:900},{name:"lg",min:1200},{name:"xl",min:1536}];function Oe(){let i="";for(const t of Ue)for(let e=1;e<=12;e+=1){const r=`:host([${t.name}='${e}']) { grid-column: span ${e}; }`;i+=t.min>0?`@media (min-width: ${t.min}px) { ${r} }`:`${r}
`}return i}class st extends u{constructor(){super(...arguments),this.container=!1,this.item=!1,this.spacing=0,this.rowSpacing=-1,this.columnSpacing=-1,this.xs=0,this.sm=0,this.md=0,this.lg=0,this.xl=0}updated(){const t=this.rowSpacing>=0?this.rowSpacing:this.spacing,e=this.columnSpacing>=0?this.columnSpacing:this.spacing;this.style.setProperty("--ui-grid-row-gap",`calc(${t} * var(--ui-spacing, 8px))`),this.style.setProperty("--ui-grid-column-gap",`calc(${e} * var(--ui-spacing, 8px))`)}render(){return a`<slot></slot>`}}st.properties={container:{type:Boolean,reflect:!0},item:{type:Boolean,reflect:!0},spacing:{type:Number,reflect:!0},rowSpacing:{type:Number,attribute:"row-spacing"},columnSpacing:{type:Number,attribute:"column-spacing"},xs:{type:Number,reflect:!0},sm:{type:Number,reflect:!0},md:{type:Number,reflect:!0},lg:{type:Number,reflect:!0},xl:{type:Number,reflect:!0}};st.styles=[m,f`
      :host {
        display: block;
      }
      :host([container]) {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        row-gap: var(--ui-grid-row-gap, 0);
        column-gap: var(--ui-grid-column-gap, 0);
      }
    `,Z(Oe())];g("ui-grid",st);class at extends u{constructor(){super(...arguments),this.direction="column",this.spacing=0,this.alignItems="",this.justifyContent="",this.wrap=!1,this.divider=!1}_gap(){return`calc(${this.spacing} * var(--ui-spacing, 8px))`}render(){const t=[`--ui-stack-gap:${this._gap()}`];return this.alignItems&&t.push(`align-items:${this.alignItems}`),this.justifyContent&&t.push(`justify-content:${this.justifyContent}`),a`<div class="inner" part="root" style=${t.join(";")}>
      <slot></slot>
    </div>`}}at.properties={direction:{type:String,reflect:!0},spacing:{type:Number,reflect:!0},alignItems:{type:String,attribute:"align-items"},justifyContent:{type:String,attribute:"justify-content"},wrap:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0}};at.styles=[m,f`
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
    `];g("ui-stack",at);class nt extends u{constructor(){super(...arguments),this.padding="md",this.elevated=!1}render(){return a`
      <slot name="header"></slot>
      <div class="body" part="body"><slot></slot></div>
      <slot name="footer"></slot>
    `}}nt.properties={padding:{type:String,reflect:!0},elevated:{type:Boolean,reflect:!0}};nt.styles=[m,f`
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
        padding: var(--ui-card-padding-top, var(--ui-card-padding, 16px))
          var(--ui-card-padding-right, var(--ui-card-padding, 16px))
          var(--ui-card-padding-bottom, var(--ui-card-padding, 16px))
          var(--ui-card-padding-left, var(--ui-card-padding, 16px));
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([padding='none']) .body {
        --ui-card-padding: 0;
      }
      :host([padding='sm']) .body {
        --ui-card-padding: 8px;
      }
      :host([padding='lg']) .body {
        --ui-card-padding: 24px;
      }
    `];g("ui-card",nt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=Symbol.for(""),Re=i=>{if(i?.r===lt)return i?._$litStatic$},Wt=i=>({_$litStatic$:i,r:lt}),He=(i,...t)=>({_$litStatic$:t.reduce((e,r,o)=>e+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+i[o+1],i[0]),r:lt}),Ft=new Map,De=i=>(t,...e)=>{const r=e.length;let o,s;const n=[],p=[];let c,d=0,b=!1;for(;d<r;){for(c=t[d];d<r&&(s=e[d],(o=Re(s))!==void 0);)c+=o+t[++d],b=!0;d!==r&&p.push(s),n.push(c),d++}if(d===r&&n.push(t[r]),b){const h=n.join("$$lit$$");(t=Ft.get(h))===void 0&&(n.raw=n,Ft.set(h,t=n)),e=p}return i(t,...e)},je=De(a),We={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",caption:"span",overline:"span",button:"span"},Fe=Z(Object.entries(Q).map(([i,t])=>`:host([color='${i}']) { color: ${t}; }`).join(`
`));class ct extends u{constructor(){super(...arguments),this.variant="body1",this.component="",this.align="",this.color="",this.gutterBottom=!1,this.noWrap=!1}updated(t){if(!t.has("color"))return;const e=!!this.color&&Object.prototype.hasOwnProperty.call(Q,this.color),r=this.color&&!e?this.color:"";r?this.style.setProperty("--ui-typography-color",r):this.style.removeProperty("--ui-typography-color")}render(){const t=this.component||We[this.variant]||"p";return je`
      <${Wt(t)} class="text" part=${He`root`}
        ><slot></slot></${Wt(t)}>
    `}}ct.properties={variant:{type:String,reflect:!0},component:{type:String},align:{type:String,reflect:!0,converter:{fromAttribute:i=>i??"",toAttribute:i=>i||null}},color:{type:String,reflect:!0},gutterBottom:{type:Boolean,attribute:"gutter-bottom",reflect:!0},noWrap:{type:Boolean,attribute:"no-wrap",reflect:!0}};ct.styles=[m,Fe,f`
      :host {
        display: block;
        color: var(--ui-typography-color, var(--ui-color-text, rgba(0, 0, 0, 0.87)));
      }
      .text {
        margin: 0;
      }

      /* Headings wear the display face; every other variant stays in the body
         face. Both come from the theme (typography.headingFamily /
         typography.fontFamily), so one setTheme call moves the whole scale. */
      :host([variant='h1']) .text,
      :host([variant='h2']) .text,
      :host([variant='h3']) .text,
      :host([variant='h4']) .text,
      :host([variant='h5']) .text,
      :host([variant='h6']) .text {
        font-family: var(--ui-font-heading, var(--ui-font, inherit));
      }

      /* Line-heights read --ui-line-height-<variant> so a theme can tighten
         a variant (overline is the usual suspect) without page CSS. */
      :host([variant='h1']) .text {
        font-size: 96px;
        font-weight: 300;
        line-height: var(--ui-line-height-h1, 1.167);
      }
      :host([variant='h2']) .text {
        font-size: 60px;
        font-weight: 300;
        line-height: var(--ui-line-height-h2, 1.2);
      }
      :host([variant='h3']) .text {
        font-size: 48px;
        font-weight: 400;
        line-height: var(--ui-line-height-h3, 1.167);
      }
      :host([variant='h4']) .text {
        font-size: 34px;
        font-weight: 400;
        line-height: var(--ui-line-height-h4, 1.235);
      }
      :host([variant='h5']) .text {
        font-size: 24px;
        font-weight: 400;
        line-height: var(--ui-line-height-h5, 1.334);
      }
      :host([variant='h6']) .text {
        font-size: 20px;
        font-weight: 500;
        line-height: var(--ui-line-height-h6, 1.6);
      }
      :host([variant='subtitle1']) .text {
        font-size: 16px;
        font-weight: 400;
        line-height: var(--ui-line-height-subtitle1, 1.75);
      }
      :host([variant='subtitle2']) .text {
        font-size: 14px;
        font-weight: 500;
        line-height: var(--ui-line-height-subtitle2, 1.57);
      }
      :host([variant='body1']) .text {
        font-size: 16px;
        font-weight: 400;
        line-height: var(--ui-line-height-body1, 1.5);
      }
      :host([variant='body2']) .text {
        font-size: 14px;
        font-weight: 400;
        line-height: var(--ui-line-height-body2, 1.43);
      }
      :host([variant='caption']) .text {
        font-size: 12px;
        font-weight: 400;
        line-height: var(--ui-line-height-caption, 1.66);
      }
      :host([variant='overline']) .text {
        font-size: 12px;
        font-weight: 400;
        line-height: var(--ui-line-height-overline, 2.66);
        text-transform: uppercase;
        letter-spacing: 0.08333em;
      }
      :host([variant='button']) .text {
        font-size: 14px;
        font-weight: 500;
        line-height: var(--ui-line-height-button, 1.75);
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
    `];g("ui-typography",ct);class dt extends u{constructor(){super(...arguments),this.color="inherit",this.fontSize="medium",this.size=""}updated(t){t.has("size")&&(this.style.fontSize=this.size||""),t.has("color")&&(this.style.color=B(this.color))}render(){return a`<slot></slot>`}}dt.properties={color:{type:String,reflect:!0},fontSize:{type:String,attribute:"font-size",reflect:!0},size:{type:String}};dt.styles=[m,f`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 24px;
        line-height: 1;
      }
      :host([font-size='small']) {
        font-size: 20px;
      }
      :host([font-size='medium']) {
        font-size: 24px;
      }
      :host([font-size='large']) {
        font-size: 36px;
      }
      :host([font-size='inherit']) {
        font-size: 1em;
      }
      ::slotted(svg),
      ::slotted(ui-svg-icon) {
        width: 1em;
        height: 1em;
        fill: currentColor;
      }
    `];g("ui-icon",dt);const Ge="http://www.w3.org/2000/svg";class pt extends u{constructor(){super(...arguments),this.viewBox="0 0 24 24",this.fontSize="medium",this.color="inherit",this.label="",this._paint=()=>{const t=this.renderRoot.querySelector("svg"),e=this.renderRoot.querySelector("slot");if(!t||!e)return;const r=e.assignedNodes({flatten:!0}).filter(p=>p.nodeType!==Node.COMMENT_NODE);if(!r.length)return;const o=r.length===1?r[0]:null,s=o&&o.nodeType===Node.ELEMENT_NODE&&o.tagName.toLowerCase()==="svg"?o:null;s?.hasAttribute("viewBox")&&t.setAttribute("viewBox",s.getAttribute("viewBox"));const n=s?Array.from(s.childNodes):r;t.replaceChildren(...n.map(p=>this._toSvg(p)).filter(p=>p!==null))}}_toSvg(t){if(t.nodeType===Node.TEXT_NODE)return document.createTextNode(t.textContent??"");if(t.nodeType!==Node.ELEMENT_NODE)return null;const e=t,r=document.createElementNS(Ge,e.tagName.toLowerCase());for(const o of Array.from(e.attributes))r.setAttribute(o.name,o.value);for(const o of Array.from(e.childNodes)){const s=this._toSvg(o);s&&r.appendChild(s)}return r}firstUpdated(){this._paint()}render(){return a`
      <slot @slotchange=${this._paint}></slot>
      <svg
        part="svg"
        viewBox=${this.viewBox}
        fill="currentColor"
        focusable="false"
        role=${this.label?"img":l}
        aria-hidden=${this.label?l:"true"}
        aria-label=${this.label||l}
        style=${`color:${B(this.color)}`}
      ></svg>
    `}}pt.properties={viewBox:{type:String,attribute:"view-box"},fontSize:{type:String,attribute:"font-size",reflect:!0},color:{type:String,reflect:!0},label:{type:String}};pt.styles=[m,f`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        font-size: 24px;
      }
      :host([font-size='small']) {
        font-size: 20px;
      }
      :host([font-size='medium']) {
        font-size: 24px;
      }
      :host([font-size='large']) {
        font-size: 36px;
      }
      :host([font-size='inherit']) {
        font-size: 1em;
      }
      /* Source only: the drawing is copied into the svg below. */
      slot {
        display: none;
      }
      svg {
        width: 1em;
        height: 1em;
        display: block;
        fill: currentColor;
        flex-shrink: 0;
      }
    `];g("ui-svg-icon",pt);const Ve={primary:"var(--ui-color-primary-contrast, #fff)",secondary:"var(--ui-color-secondary-contrast, #fff)",error:"var(--ui-color-error-contrast, #fff)",warning:"var(--ui-color-warning-contrast, #fff)",info:"var(--ui-color-info-contrast, #fff)",success:"var(--ui-color-success-contrast, #fff)"};class ut extends u{constructor(){super(...arguments),this.src="",this.alt="",this.initials="",this.size=40,this.variant="circular",this.color=""}render(){const t=this.color?Ve[this.color]??"#fff":"",e=`width:${this.size}px;height:${this.size}px;font-size:${Math.round(this.size*.4)}px;${this.color?`background:${B(this.color)};`:""}${t?`color:${t};`:""}`;return a`
      <div class="avatar" part="avatar" style=${e}>
        ${this.src?a`<img src=${this.src} alt=${this.alt} part="img" />`:a`<span class="initials" part="initials"
              >${this.initials||a`<slot></slot>`}</span
            >`}
      </div>
    `}}ut.properties={src:{type:String},alt:{type:String},initials:{type:String},size:{type:Number},variant:{type:String,reflect:!0},color:{type:String}};ut.styles=[m,f`
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
        color: var(--ui-color-secondary-contrast, #fff);
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
    `];g("ui-avatar",ut);class ht extends u{constructor(){super(...arguments),this.variant="primary",this.size="md",this.shape="default",this.textTransform="uppercase",this.disabled=!1,this.loading=!1,this.fullWidth=!1,this.type="button",this.href="",this.target="",this.rel="",this._onClick=t=>{this.href&&(this.disabled||this.loading)&&t.preventDefault()}}_content(){return a`${this.loading?a`<span part="spinner" class="spinner" aria-hidden="true"></span>`:l}<slot></slot>`}render(){return this.href?a`
        <a
          class="button"
          part="button"
          href=${this.href}
          target=${this.target||l}
          rel=${this.rel||l}
          aria-disabled=${this.disabled||this.loading?"true":l}
          @click=${this._onClick}
          >${this._content()}</a
        >
      `:a`
      <button
        class="button"
        part="button"
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        aria-busy=${this.loading?"true":"false"}
      >
        ${this._content()}
      </button>
    `}}ht.properties={variant:{type:String,reflect:!0},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},textTransform:{type:String,attribute:"text-transform",reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},fullWidth:{type:Boolean,attribute:"full-width",reflect:!0},type:{type:String,reflect:!0},href:{type:String},target:{type:String},rel:{type:String}};ht.styles=[m,f`
      :host {
        display: inline-block;
      }
      :host([full-width]) {
        display: block;
        width: 100%;
      }
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        font-family: inherit;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.02em;
        text-transform: var(--ui-button-text-transform, uppercase);
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: var(--ui-radius, 4px);
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 120ms ease, border-color 120ms ease,
          color 120ms ease, opacity 120ms ease;
      }
      :host([shape='pill']) .button {
        border-radius: 999px;
      }
      :host([text-transform='none']) .button {
        text-transform: none;
        letter-spacing: 0.01em;
      }
      .button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: 2px;
      }
      :host([disabled]) .button,
      :host([loading]) .button {
        cursor: not-allowed;
        opacity: 0.5;
      }
      :host([size='sm']) .button {
        padding: 5px 10px;
        font-size: 12px;
      }
      :host([size='md']) .button {
        padding: 8px 16px;
        font-size: 13px;
      }
      :host([size='lg']) .button {
        padding: 11px 22px;
        font-size: 15px;
      }

      :host([variant='primary']) .button {
        background: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary-contrast, #fff);
      }
      :host([variant='primary']) .button:hover:not([disabled]) {
        background: var(--ui-color-primary-hover, #1565c0);
      }
      :host([variant='secondary']) .button {
        /* Two declarations on purpose: the flat tint is the fallback, the
           color-mix version follows whatever primary the theme sets. */
        background: rgba(25, 118, 210, 0.08);
        background: color-mix(
          in srgb,
          var(--ui-color-primary, #1976d2) 8%,
          transparent
        );
        color: var(--ui-color-primary, #1976d2);
      }
      :host([variant='secondary']) .button:hover:not([disabled]) {
        background: rgba(25, 118, 210, 0.16);
        background: color-mix(
          in srgb,
          var(--ui-color-primary, #1976d2) 16%,
          transparent
        );
      }
      :host([variant='outline']) .button {
        background: transparent;
        border-color: var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6));
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([variant='outline']) .button:hover:not([disabled]) {
        border-color: var(--ui-color-primary, #1976d2);
        color: var(--ui-color-primary, #1976d2);
      }
      :host([variant='ghost']) .button {
        background: transparent;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
      }
      :host([variant='ghost']) .button:hover:not([disabled]) {
        background: var(--ui-color-hover, rgba(0, 0, 0, 0.04));
      }
      :host([variant='error']) .button {
        background: var(--ui-color-error, #d32f2f);
        color: var(--ui-color-error-contrast, #fff);
      }
      :host([variant='error']) .button:hover:not([disabled]) {
        background: var(--ui-color-error-dark, #c62828);
      }

      .spinner {
        width: 1em;
        height: 1em;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: 50%;
        animation: ui-spin 700ms linear infinite;
      }
      @keyframes ui-spin {
        to {
          transform: rotate(360deg);
        }
      }
    `];g("ui-button",ht);class ft extends u{constructor(){super(...arguments),this.label="",this.variant="filled",this.color="default",this.disabled=!1,this.deletable=!1,this.clickable=!1,this.nowrap=!1}_onDelete(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("delete",{detail:this.label,bubbles:!0,composed:!0}))}render(){return a`
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
    `}}ft.properties={label:{type:String},variant:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},deletable:{type:Boolean,reflect:!0},clickable:{type:Boolean,reflect:!0},nowrap:{type:Boolean,reflect:!0}};ft.styles=[m,f`
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
      :host([nowrap]) .chip {
        white-space: nowrap;
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
    `];g("ui-chip",ft);class gt extends u{constructor(){super(...arguments),this.variant="default",this.pill=!1}render(){return a`<slot></slot>`}}gt.properties={variant:{type:String,reflect:!0},pill:{type:Boolean,reflect:!0}};gt.styles=[m,f`
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
    `];g("ui-badge",gt);class mt extends u{constructor(){super(...arguments),this.orientation="horizontal",this.inset=!1}render(){return a`<slot></slot>`}}mt.properties={orientation:{type:String,reflect:!0},inset:{type:Boolean,reflect:!0}};mt.styles=[m,f`
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
    `];g("ui-divider",mt);class yt extends u{constructor(){super(...arguments),this.size="medium",this.color="default",this.disabled=!1,this.edge="",this.label=""}get _color(){return this.disabled?"var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38))":this.color==="default"?"var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6))":B(this.color)}render(){return a`
      <button
        part="button"
        type="button"
        style="color:${this._color}"
        ?disabled=${this.disabled}
        aria-label=${this.label||l}
      >
        <slot></slot>
      </button>
    `}}yt.properties={size:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},edge:{type:String,reflect:!0},label:{type:String}};yt.styles=[m,f`
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
    `];g("ui-icon-button",yt);class bt extends u{constructor(){super(...arguments),this.content="",this.position="top",this._onClick=t=>{t.detail!==0&&this.toggleAttribute("activated",!0)},this._clearWhenIdle=()=>{this.matches(":hover")||this.matches(":focus-within")||this.removeAttribute("activated")}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseleave",this._clearWhenIdle),this.addEventListener("focusout",this._clearWhenIdle)}disconnectedCallback(){this.removeEventListener("mouseleave",this._clearWhenIdle),this.removeEventListener("focusout",this._clearWhenIdle),super.disconnectedCallback()}render(){return a`
      <slot @click=${this._onClick}></slot>
      <span class="tip" role="tooltip" part="tooltip">${this.content}</span>
    `}}bt.properties={content:{type:String},position:{type:String,reflect:!0}};bt.styles=[m,f`
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
      /*
       * A pointer click leaves the button focused, and :focus-within alone keeps
       * the tip open, so it would sit there until something else was clicked.
       * Once activated, stay muted until the pointer leaves, like a native
       * tooltip. Keyboard activation never sets this.
       */
      :host([activated]) .tip {
        opacity: 0;
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
    `];g("ui-tooltip",bt);class vt extends u{constructor(){super(...arguments),this.href="",this.target="",this.rel="",this.underline="always",this.color="primary",this.disabled=!1}render(){return a`
      <a
        part="link"
        href=${this.href||l}
        target=${this.target||l}
        rel=${this.rel||l}
        style=${this.disabled?l:`color:${B(this.color)}`}
        aria-disabled=${this.disabled?"true":l}
        ><slot></slot
      ></a>
    `}}vt.properties={href:{type:String},target:{type:String},rel:{type:String},underline:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0}};vt.styles=[m,f`
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
    `];g("ui-link",vt);class xt extends u{constructor(){super(...arguments),this.dense=!1,this.disablePadding=!1}render(){return a`<slot name="subheader"></slot><slot></slot>`}}xt.properties={dense:{type:Boolean,reflect:!0},disablePadding:{type:Boolean,attribute:"disable-padding",reflect:!0}};xt.styles=[m,f`
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
    `];g("ui-list",xt);class $t extends u{constructor(){super(...arguments),this.alignItems="center",this.dense=!1,this.divider=!1}render(){return a`<slot></slot><slot name="secondary-action"></slot>`}}$t.properties={alignItems:{type:String,attribute:"align-items",reflect:!0},dense:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0}};$t.styles=[m,f`
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
    `];g("ui-list-item",$t);class wt extends u{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this.dense=!1,this.divider=!1,this.href="",this.target="",this.rel=""}_onClick(t){this.disabled&&this.href&&t.preventDefault()}render(){return this.href?a`
        <a
          class="button"
          part="button"
          href=${this.href}
          target=${this.target||l}
          rel=${this.rel||l}
          aria-disabled=${this.disabled?"true":l}
          @click=${this._onClick}
          ><slot></slot
        ></a>
      `:a`
      <button
        class="button"
        part="button"
        type="button"
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        <slot></slot>
      </button>
    `}}wt.properties={selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},dense:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0},href:{type:String},target:{type:String},rel:{type:String}};wt.styles=[m,f`
      :host {
        display: block;
      }
      /* Component-local variable matching ui-list-item padding. */
      :host([dense]) {
        --ui-list-item-padding-y: 4px;
      }
      .button {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
        margin: 0;
        text-align: left;
        font-family: inherit;
        font-size: 16px;
        line-height: 1.5;
        color: var(--ui-color-text, rgba(0, 0, 0, 0.87));
        background: transparent;
        border: none;
        padding: calc(var(--ui-list-item-padding-y, 8px)) 16px;
        cursor: pointer;
        text-decoration: none;
        transition: background-color 120ms ease;
      }
      :host([divider]) .button {
        border-bottom: 1px solid var(--ui-color-divider, rgba(0, 0, 0, 0.12));
      }
      .button:hover {
        background: var(--ui-color-action-hover, rgba(0, 0, 0, 0.04));
      }
      :host([selected]) .button {
        background: var(--ui-color-action-selected, rgba(0, 0, 0, 0.08));
      }
      .button:focus-visible {
        outline: 2px solid var(--ui-color-primary, #1976d2);
        outline-offset: -2px;
      }
      :host([disabled]) .button {
        color: var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38));
        cursor: not-allowed;
        pointer-events: none;
      }
    `];g("ui-list-item-button",wt);class kt extends u{constructor(){super(...arguments),this.primary="",this.secondary="",this.inset=!1}render(){return a`
      <span class="primary" part="primary"><slot>${this.primary}</slot></span>
      <span class="secondary" part="secondary"
        ><slot name="secondary">${this.secondary}</slot></span
      >
    `}}kt.properties={primary:{type:String},secondary:{type:String},inset:{type:Boolean,reflect:!0}};kt.styles=[m,f`
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
    `];g("ui-list-item-text",kt);class St extends u{constructor(){super(...arguments),this.position="right",this._onSlotChange=()=>{this._syncItems()}}updated(){this._syncItems()}_resolve(t){switch(this.position){case"left":return{position:"left",alternate:!1};case"alternate":return{position:t%2===0?"right":"left",alternate:!0};case"alternate-reverse":return{position:t%2===0?"left":"right",alternate:!0};case"right":default:return{position:"right",alternate:!1}}}_syncItems(){Array.from(this.children).filter(e=>e.tagName.toLowerCase()==="ui-timeline-item").forEach((e,r)=>{const o=this._resolve(r);e.position!==o.position&&(e.position=o.position),e.alternate!==o.alternate&&(e.alternate=o.alternate)})}render(){return a`<slot @slotchange=${this._onSlotChange}></slot>`}}St.properties={position:{type:String,reflect:!0}};St.styles=[m,f`
      :host {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
      }
    `];g("ui-timeline",St);class _t extends u{constructor(){super(...arguments),this.position="right",this.alternate=!1}render(){return a`
      <div class="opposite" part="opposite"><slot name="opposite"></slot></div>
      ${this.alternate?a`<div class="center" part="center"></div>`:l}
      <div class="content" part="content"><slot></slot></div>
    `}}_t.properties={position:{type:String,reflect:!0},alternate:{type:Boolean,reflect:!0}};_t.styles=[m,f`
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
        /* Width and padding are addressable so a page can turn the symmetric
           halves into e.g. a fixed date gutter without reaching into parts. */
        flex: 0 0 var(--ui-timeline-opposite-width, 50%);
        padding: var(--ui-timeline-opposite-padding, 6px 16px);
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
        flex: 1 1 auto;
        padding: var(--ui-timeline-content-padding, 6px 16px);
      }
    `];g("ui-timeline-item",_t);class At extends u{constructor(){super(...arguments),this.color="grey",this.variant="filled"}render(){return a`<slot></slot>`}}At.properties={color:{type:String,reflect:!0},variant:{type:String,reflect:!0}};At.styles=[m,f`
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
    `];g("ui-timeline-dot",At);class Et extends u{constructor(){super(...arguments),this.columns=3,this.spacing=4}updated(){this.style.setProperty("--ui-masonry-columns",String(this.columns)),this.style.setProperty("--ui-masonry-spacing",`${this.spacing}px`)}render(){return a`<slot></slot>`}}Et.properties={columns:{type:Number,reflect:!0},spacing:{type:Number,reflect:!0}};Et.styles=[m,f`
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
    `];g("ui-masonry",Et);class Ct extends u{constructor(){super(...arguments),this.cols=2,this.rowHeight="160px",this.gap=4,this.variant="standard"}updated(){this.style.gridTemplateColumns=`repeat(${this.cols}, 1fr)`,this.style.gridAutoRows=this.rowHeight,this.style.gap=`${this.gap}px`}render(){return a`<slot></slot>`}}Ct.properties={cols:{type:Number,reflect:!0},rowHeight:{type:String,attribute:"row-height"},gap:{type:Number,reflect:!0},variant:{type:String,reflect:!0}};Ct.styles=[m,f`
      :host {
        display: grid;
      }
    `];g("ui-image-list",Ct);class zt extends u{constructor(){super(...arguments),this.cols=1,this.rows=1}updated(){this.style.gridColumn=`span ${this.cols}`,this.style.gridRow=`span ${this.rows}`}render(){return a`<slot></slot><slot name="bar"></slot>`}}zt.properties={cols:{type:Number,reflect:!0},rows:{type:Number,reflect:!0}};zt.styles=[m,f`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
      }
      ::slotted(img) {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      ::slotted([slot='bar']) {
        position: absolute;
        inset: auto 0 0 0;
        padding: 8px 12px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
        color: #fff;
        font-size: 13px;
      }
    `];g("ui-image-list-item",zt);class Tt extends u{constructor(){super(...arguments),this.open=!1,this.anchor="left",this.variant="temporary",this.width="240px",this.elevation=16,this.dismissible=!0,this._prevOpen=null,this._onKeydown=t=>{t.key==="Escape"&&(!this.open||!this.dismissible||this.variant==="temporary"&&(this.open=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}show(){this.open||(this.open=!0)}close(){this.open&&(this.open=!1)}_onBackdrop(t){t.target===t.currentTarget&&this.dismissible&&this.close()}_panelStyle(){return`${this.anchor==="top"||this.anchor==="bottom"?`height:${this.width};`:`width:${this.width};`}z-index:${et("drawer")};box-shadow:${tt(this.elevation)};`}updated(t){if(!t.has("open"))return;const e=this._prevOpen;this._prevOpen=this.open,e!==null&&this.dispatchEvent(new CustomEvent(this.open?"open":"close",{bubbles:!0,composed:!0}))}render(){const e=this.variant==="permanent"||this.open,r=this.variant==="temporary"&&this.open;return a`
      ${r?a`<div
            class="backdrop"
            part="backdrop"
            @click=${this._onBackdrop}
          ></div>`:l}
      ${e?a`<div class="panel" part="panel" style=${this._panelStyle()}>
            <slot name="header"></slot>
            <slot></slot>
          </div>`:l}
    `}}Tt.properties={open:{type:Boolean,reflect:!0},anchor:{type:String,reflect:!0},variant:{type:String,reflect:!0},width:{type:String},elevation:{type:Number,reflect:!0},dismissible:{type:Boolean,reflect:!0}};Tt.styles=[m,f`
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
    `];g("ui-drawer",Tt);class Bt extends u{constructor(){super(...arguments),this.open=!1,this.message="",this.action="",this.autoHideDuration=6e3,this.anchorVertical="bottom",this.anchorHorizontal="center",this._closeReason="timeout",this._onKeydown=t=>{t.key==="Escape"&&this.open&&(this._closeReason="escapeKeyDown",this.open=!1)},this._onAction=()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,composed:!0})),this._closeReason="action",this.open=!1}}_clearTimer(){this._timer!==void 0&&(window.clearTimeout(this._timer),this._timer=void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown),this._clearTimer()}updated(t){if(!(!t.has("open")&&!t.has("autoHideDuration"))){if(this._clearTimer(),this.open){this.autoHideDuration>0&&(this._timer=window.setTimeout(()=>{this._closeReason="timeout",this.open=!1},this.autoHideDuration));return}t.has("open")&&this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0,detail:{reason:this._closeReason}}))}}render(){return this.open?a`
      <div
        class="snackbar"
        part="snackbar"
        role="alert"
        style="box-shadow:${tt(6)};z-index:${et("snackbar")}"
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
    `:l}}Bt.properties={open:{type:Boolean,reflect:!0},message:{type:String},action:{type:String},autoHideDuration:{type:Number,attribute:"auto-hide-duration",reflect:!0},anchorVertical:{type:String,attribute:"anchor-vertical",reflect:!0},anchorHorizontal:{type:String,attribute:"anchor-horizontal",reflect:!0}};Bt.styles=[m,f`
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
    `];g("ui-snackbar",Bt);const y={name:"Anıl Okay",initials:"AO",role:"Senior Frontend Developer",focus:"React · TypeScript · Web Components",location:"Berlin, Germany",linkedin:"https://www.linkedin.com/in/anilokay/",github:"https://github.com/justbasicfacts",instagram:"https://www.instagram.com/justbasicfacts/",strava:"https://www.strava.com/athletes/5211686",email:"okayster@gmail.com",avatar:"/portrait.jpg",lead:"I'm a frontend developer in Berlin. Sixteen years in, and most of my work has been on the plumbing side of the frontend: dashboards people use every day, component libraries other teams build on, and a few migrations nobody wanted to start. These days I'm at APCOA Group, working on B2B parking platforms.",facts:[{value:"16+",label:"years in software"},{value:"React · TS",label:"daily drivers"},{value:"Berlin",label:"based in"},{value:"B2B",label:"product focus"}],about:["I started out in Istanbul at VeriPark from 2011 to 2016, then moved into internet banking at ING Türkiye. Berlin came next: e-commerce at Ladenzeile from 2021, and APCOA Group since 2023 on B2B parking platforms. Different domains each time, but the job is usually the same one: take something complicated on the inside and make it usable on the outside.","The work I'm happiest with is usually the part other developers end up using. At Ladenzeile I built a React component library from scratch, and the new B2B portal was built on top of it. Before that I worked on reusable web components in banking. The design system I'm building at the moment is the same idea taken a few steps further.","Outside of work I keep coming back to framework-agnostic UI: web components, design tokens, and the tooling around them. It's where the platform is heading, and it's the kind of problem I enjoy."]},ee=[{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"work",label:"Work"},{id:"skills",label:"Skills"},{id:"offscreen",label:"Off screen"},{id:"contact",label:"Contact"}],qe=[{company:"APCOA Group Ltd.",title:"Senior Frontend Developer",period:"May 2023 - Present",location:"Berlin, Germany",summary:"Joined ValueSpaces, an APCOA startup, which later merged into APCOA Group.",bullets:["Responsible for the B2B dashboards parking operators work in every day, focused on user-friendly, data-driven workflows.","Contributed to the Dynamic Pricing Tool and the Parking Product Configurator.","Work with React, Vite and micro frontends to keep the platform scalable and fast as the product set grows."],tech:["React","TypeScript","Vite","Micro Frontends"],dot:"primary"},{company:"Ladenzeile",title:"Frontend Engineer",period:"May 2021 - Apr 2023",location:"Berlin, Germany",summary:"Member of the Shop Area team, responsible for the B2B products of the Ladenzeile and Shopalike platforms.",bullets:["Created the upgrade plan from Angular 8 to the latest Angular version, then refactored the legacy codebase towards clean-code principles.","Part of the team transforming the main B2B portal from Angular to React.","Built a component library from scratch with React, and the new B2B application was developed on top of it."],tech:["React","Angular","TypeScript","Component Library"],dot:"info"},{company:"ING Türkiye",title:"Full Stack Developer",period:"Jun 2017 - Apr 2021",location:"Istanbul, Türkiye",summary:"Internet Banking and Portal Applications department, as a Senior Software Consultant in a Scrum team focused on frontend development for a new banking project.",bullets:["Developed reusable web components and features for internet banking.","Worked across the stack, from JavaScript and web components (lit-element, lit-html) to .NET Web Forms, web services, Entity Framework, SQL Server and Oracle."],tech:["JavaScript","Web Components","Lit",".NET Web Forms","SQL Server","Oracle","Scrum"],dot:"warning"}],Ke=[{title:"Component library & design system",context:"Personal project · work in progress",badge:{label:"In progress",variant:"info"},body:"A framework-agnostic UI library I'm building. Web components are the single source of truth, with thin React bindings on top and a design-token layer that mirrors a familiar Material-style theme, so existing applications can adopt it without a rewrite. Coverage keeps growing, usage is documented in Storybook, and the packages ship through a private registry. The aim is one UI foundation that behaves the same in React, plain HTML and anything else.",chips:["Web components","React bindings","Design tokens","Storybook","Monorepo"],note:"This page is built with it.",featured:!0},{title:"B2B parking management dashboards",context:"APCOA Group · 2023 to today",body:"The dashboards parking operators rely on every day: role-based views, large data sets, and workflows that have to stay responsive. Built as part of a micro-frontend setup on React and Vite.",chips:["React","TypeScript","Vite","Micro frontends"]},{title:"Dynamic Pricing Tool",context:"APCOA Group",body:"Frontend work on the tool that lets operations teams model and roll out parking pricing without going through engineering.",chips:["React","Product UI"]},{title:"Parking Product Configurator",context:"APCOA Group",body:"Frontend work on the configurator used to set up parking products and their tariffs.",chips:["React","Form-heavy UI"]},{title:"B2B portal: Angular to React",context:"Ladenzeile · 2021 to 2023",body:"Planned the Angular 8 upgrade path for Ladenzeile's B2B portal, then helped move the main portal to React, with a component library built from scratch as the foundation.",chips:["Angular","React","Migration","Design system"]},{title:"Reusable web components for internet banking",context:"ING Türkiye · 2017 to 2021",body:"Reusable web components and features for internet banking. This is the work that got me interested in framework-independent UI in the first place.",chips:["Web components","lit-element","JavaScript"]}],Ze=[{title:"Languages",items:["TypeScript","JavaScript","HTML","CSS"]},{title:"Frameworks & libraries",items:["React","Redux","Angular","Lit","Web Components"]},{title:"UI & design systems",items:["Component libraries","Design tokens","Theming","Storybook"]},{title:"Build & architecture",items:["Vite","Micro frontends","pnpm","Monorepos","Git"]},{title:"Backend & data",items:[".NET","Entity Framework","SQL Server","Oracle"]},{title:"Ways of working",items:["Scrum","B2B products","Cross-team UI foundations"]}],w={url:"https://www.last.fm/user/justbasicfacts",user:"justbasicfacts",apiKey:"fdf336d306ae49b6261ea05acbcbebb7",since:"scrobbling since 2011",pulled:"October 2026",stats:[{value:"75,852",label:"scrobbles"},{value:"4,243",label:"artists"},{value:"414",label:"loved tracks"}],topWindow:"Most played in the last 30 days",topArtists:[{name:"Lera Lynn",plays:140},{name:"Egg",plays:77},{name:"Turnstile",plays:35},{name:"The Warning",plays:27},{name:"Angel Du$t",plays:20}],obsession:{track:"Black River",artist:"Lera Lynn"}},Je=[{src:"/photos/group-ride.jpg",alt:"A group ride out on the road"},{src:"/photos/country-road.jpg",alt:"Two riders on a country lane"},{src:"/photos/after-the-ride.jpg",alt:"Helmet on and a finisher medal in hand"},{src:"/photos/jersey.jpg",alt:"Kit on, ready for a ride"}],C={pulled:"October 2026",title:"Cycling",context:"Strava",groups:[{title:"This year",stats:[{value:"82",label:"rides"},{value:"3,287 km",label:"distance"},{value:"11,776 m",label:"climbed"},{value:"137 h",label:"in the saddle"}]},{title:"All time",stats:[{value:"1,318",label:"rides"},{value:"50,529 km",label:"distance"},{value:"366,560 m",label:"climbed"},{value:"2,117 h",label:"in the saddle"}]}],lines:["Longest ride 218.6 km","Biggest climb 1,809 m","Best 100 km in 3:07:51","Best 180 km in 6:26:58"]},Ye=new IntersectionObserver(i=>{for(const t of i){if(!t.isIntersecting)continue;const e=t.target.id;document.querySelectorAll(".nav ui-button[data-nav]").forEach(r=>{const o=r.dataset.nav===e;r.variant=o?"secondary":"ghost",o?r.setAttribute("aria-current","true"):r.removeAttribute("aria-current")})}},{rootMargin:"-45% 0px -50% 0px",threshold:0});function Xe(i){Ye.observe(i)}const ie=new IntersectionObserver(i=>{for(const t of i)t.isIntersecting&&(t.target.classList.add("is-visible"),ie.unobserve(t.target))},{rootMargin:"0px 0px -12% 0px",threshold:.08});function Qe(i){i.querySelectorAll(".reveal").forEach(t=>ie.observe(t))}class v extends u{createRenderRoot(){return this}wired(){}firstUpdated(){Qe(this);const t=this.querySelector("section.section");t&&Xe(t),this.wired()}}const ti={palette:{primary:{main:"#1976d2",dark:"#1565c0",light:"#42a5f5",contrastText:"#ffffff"},secondary:{main:"#9c27b0",dark:"#7b1fa2",contrastText:"#ffffff"},error:{main:"#d32f2f",dark:"#c62828",contrastText:"#ffffff"},warning:{main:"#ed6c02",dark:"#e65100",contrastText:"#ffffff"},info:{main:"#0288d1",dark:"#01579b",contrastText:"#ffffff"},success:{main:"#2e7d32",dark:"#1b5e20",contrastText:"#ffffff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",muted:"rgba(0, 0, 0, 0.72)",disabled:"rgba(0, 0, 0, 0.38)"},background:{paper:"#ffffff",default:"#ffffff",surface:"#ffffff",surfaceHover:"rgba(0, 0, 0, 0.04)"},divider:"rgba(0, 0, 0, 0.12)",action:{hover:"rgba(0, 0, 0, 0.04)",selected:"rgba(0, 0, 0, 0.08)",disabled:"rgba(0, 0, 0, 0.26)",focus:"rgba(0, 0, 0, 0.12)"},backdrop:"rgba(0, 0, 0, 0.5)"},shape:{borderRadius:4},typography:{fontFamily:"'Roboto Condensed', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",fontSize:14},spacing:8,zIndex:{mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500}};function H(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function re(i,t){if(!H(i)||!H(t))return t??i;const e={...i};for(const[r,o]of Object.entries(t))e[r]=H(o)&&H(e[r])?re(e[r],o):o;return e}function ei(i){const t=i.palette??{},e={},r=[["primary",t.primary],["secondary",t.secondary],["error",t.error],["warning",t.warning],["info",t.info],["success",t.success]];for(const[o,s]of r)s?.main&&(e[`--ui-color-${o}`]=s.main,s.dark&&(e[`--ui-color-${o}-dark`]=s.dark),s.light&&(e[`--ui-color-${o}-light`]=s.light),s.contrastText&&(e[`--ui-color-${o}-contrast`]=s.contrastText));t.primary?.dark&&(e["--ui-color-primary-hover"]=t.primary.dark),t.text?.primary&&(e["--ui-color-text"]=t.text.primary),t.text?.secondary&&(e["--ui-color-text-secondary"]=t.text.secondary),(t.text?.muted??t.text?.secondary)&&(e["--ui-color-text-muted"]=t.text?.muted??t.text?.secondary),t.text?.disabled&&(e["--ui-color-text-disabled"]=t.text.disabled),t.background?.paper&&(e["--ui-color-bg"]=t.background.paper,e["--ui-color-bg-paper"]=t.background.paper),t.background?.default&&(e["--ui-color-bg-default"]=t.background.default),(t.background?.surface??t.background?.paper)&&(e["--ui-color-surface"]=t.background?.surface??t.background?.paper),(t.background?.surfaceHover??t.action?.hover)&&(e["--ui-color-surface-hover"]=t.background?.surfaceHover??t.action?.hover),t.divider&&(e["--ui-color-divider"]=t.divider),t.action?.hover&&(e["--ui-color-hover"]=t.action.hover,e["--ui-color-action-hover"]=t.action.hover),t.action?.selected&&(e["--ui-color-action-selected"]=t.action.selected),t.action?.disabled&&(e["--ui-color-action-disabled"]=t.action.disabled),t.action?.focus&&(e["--ui-color-action-focus"]=t.action.focus),t.backdrop&&(e["--ui-color-backdrop"]=t.backdrop),i.shape?.borderRadius!=null&&(e["--ui-radius"]=`${i.shape.borderRadius}px`),i.typography?.fontFamily&&(e["--ui-font"]=i.typography.fontFamily),(i.typography?.headingFamily??i.typography?.fontFamily)&&(e["--ui-font-heading"]=i.typography?.headingFamily??i.typography?.fontFamily);for(const[o,s]of Object.entries(i.typography?.lineHeights??{}))s!=null&&(e[`--ui-line-height-${o}`]=`${s}`);i.spacing!=null&&(e["--ui-spacing"]=`${i.spacing}px`);for(const[o,s]of Object.entries(i.shadows??{}))e[`--ui-shadow-${o}`]=s;for(const[o,s]of Object.entries(i.zIndex??{}))e[`--ui-zindex-${o.toLowerCase()}`]=`${s}`;return e}function ii(i,t){const e=re(ti,i),r=ei(e),o=t instanceof Document?t.documentElement:t??document.documentElement;for(const[s,n]of Object.entries(r))o.style.setProperty(s,n)}const Gt="'Roboto Condensed', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",oe={borderRadius:14},se={fontFamily:Gt,headingFamily:Gt,fontSize:15,lineHeights:{overline:1.5}},ri={palette:{primary:{main:"#5b9dff",dark:"#3f83e8",light:"#93beff",contrastText:"#08131f"},secondary:{main:"#c084fc",dark:"#a855f7",light:"#d8b4fe",contrastText:"#1c0b2e"},text:{primary:"rgba(255, 255, 255, 0.94)",secondary:"rgba(255, 255, 255, 0.64)",muted:"rgba(255, 255, 255, 0.78)",disabled:"rgba(255, 255, 255, 0.36)"},background:{paper:"#12161b",default:"#0a0c10",surface:"rgba(255, 255, 255, 0.035)",surfaceHover:"rgba(255, 255, 255, 0.06)"},divider:"rgba(255, 255, 255, 0.1)",action:{hover:"rgba(255, 255, 255, 0.06)",selected:"rgba(91, 157, 255, 0.16)",disabled:"rgba(255, 255, 255, 0.28)",focus:"rgba(255, 255, 255, 0.18)"},backdrop:"rgba(4, 6, 9, 0.7)"},shape:oe,typography:se,shadows:{1:"0 1px 2px rgba(0, 0, 0, 0.5)",2:"0 2px 6px rgba(0, 0, 0, 0.5)",3:"0 6px 16px rgba(0, 0, 0, 0.5)",4:"0 10px 28px rgba(0, 0, 0, 0.55)",6:"0 14px 40px rgba(0, 0, 0, 0.6)",8:"0 18px 52px rgba(0, 0, 0, 0.62)",12:"0 24px 64px rgba(0, 0, 0, 0.66)",16:"0 30px 80px rgba(0, 0, 0, 0.7)",24:"0 36px 96px rgba(0, 0, 0, 0.72)"}},oi={palette:{primary:{main:"#2563eb",dark:"#1d4ed8",light:"#60a5fa",contrastText:"#ffffff"},secondary:{main:"#7c3aed",dark:"#6d28d9",light:"#a78bfa",contrastText:"#ffffff"},text:{primary:"rgba(9, 14, 24, 0.92)",secondary:"rgba(9, 14, 24, 0.62)",muted:"rgba(9, 14, 24, 0.76)",disabled:"rgba(9, 14, 24, 0.36)"},background:{paper:"#ffffff",default:"#f6f7f9",surface:"rgba(255, 255, 255, 0.85)",surfaceHover:"#ffffff"},divider:"rgba(9, 14, 24, 0.1)",action:{hover:"rgba(9, 14, 24, 0.05)",selected:"rgba(37, 99, 235, 0.12)",disabled:"rgba(9, 14, 24, 0.26)",focus:"rgba(9, 14, 24, 0.14)"},backdrop:"rgba(9, 14, 24, 0.5)"},shape:oe,typography:se,shadows:{1:"0 1px 2px rgba(15, 23, 42, 0.08)",2:"0 2px 8px rgba(15, 23, 42, 0.08)",3:"0 8px 24px rgba(15, 23, 42, 0.08)",4:"0 12px 32px rgba(15, 23, 42, 0.1)",6:"0 16px 44px rgba(15, 23, 42, 0.1)",8:"0 20px 56px rgba(15, 23, 42, 0.12)",12:"0 24px 68px rgba(15, 23, 42, 0.12)",16:"0 30px 84px rgba(15, 23, 42, 0.14)",24:"0 36px 100px rgba(15, 23, 42, 0.14)"}},si={dark:ri,light:oi},ae="ao-theme";function ai(){const i=localStorage.getItem(ae);return i==="dark"||i==="light"?i:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function ne(i){ii(si[i]),document.documentElement.dataset.theme=i,localStorage.setItem(ae,i);const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",i==="dark"?"#0a0c10":"#f6f7f9")}function Vt(){return document.documentElement.dataset.theme==="light"?"light":"dark"}a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.9"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
><path d="M5 12h14M13 6l6 6-6 6" /></svg>`;const ni=a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  aria-hidden="true"
><circle cx="12" cy="12" r="4.1" />
  <path
    d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6"
  /></svg
>`,li=a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
><path d="M20.5 14.8A8.6 8.6 0 0 1 9.2 3.5a8.6 8.6 0 1 0 11.3 11.3Z" /></svg
>`,ci=a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.9"
  stroke-linecap="round"
  aria-hidden="true"
><path d="M4 7h16M4 12h16M4 17h16" /></svg
>`,le=a`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
  ><path
    d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.03-3.3-2.03 0-2.34 1.57-2.34 3.2V21H9V9Z"
  /></svg
>`,di=a`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
  ><path
    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
  /></svg
>`;a`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
  ><path
    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
  /></svg
>`;const ce=a`<ui-svg-icon font-size="inherit" view-box="0 0 24 24"
  ><path
    d="M5 12h14M13 6l6 6-6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="1.9"
    stroke-linecap="round"
    stroke-linejoin="round"
  /></ui-svg-icon
>`,pi=a`<ui-icon font-size="small">${ni}</ui-icon>`,ui=a`<ui-icon font-size="small">${li}</ui-icon>`,hi=a`<ui-icon font-size="small">${ci}</ui-icon>`,fi=a`<ui-icon font-size="small" color="primary"
  >${le}</ui-icon
>`,gi=a`<ui-icon font-size="small"
  >${le}</ui-icon
>`,mi=a`<ui-icon font-size="small" color="primary"
  >${di}</ui-icon
>`,yi=a`<ui-svg-icon font-size="small" color="primary"
  ><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
    ><path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
    /></svg
></ui-svg-icon
>`;class bi extends v{constructor(){super(...arguments),this.toggleTheme=()=>{ne(Vt()==="dark"?"light":"dark"),this.requestUpdate()},this.openDrawer=()=>{const t=document.querySelector(".site-drawer");t&&(t.open=!0)}}wired(){this.watchScroll()}watchScroll(){const t=this.querySelector(".topbar"),e=document.querySelector(".site-drawer");if(!t)return;const r=320;let o=Math.max(window.scrollY,0),s=!1,n=0,p=!1;window.addEventListener("keydown",()=>{p=!0},!0),window.addEventListener("pointerdown",()=>{p=!1},!0),window.addEventListener("wheel",()=>{p=!1},{capture:!0,passive:!0}),window.addEventListener("touchstart",()=>{p=!1},{capture:!0,passive:!0});const c=()=>{s=!1;const d=Math.max(window.scrollY,0),b=d>o+2,h=d<o-2;t.elevation=d>12?2:0;const x=t.contains(document.activeElement)&&p||(e?.open??!1)||performance.now()<n;b&&d>r&&!x?t.classList.add("is-hidden"):(h||d<=r||x)&&t.classList.remove("is-hidden"),o=d};window.addEventListener("scroll",()=>{s||(s=!0,requestAnimationFrame(c))},{passive:!0}),document.addEventListener("click",d=>{d.target?.closest?.('a[href^="#"], ui-button[href^="#"]')&&(n=performance.now()+1200,t.classList.remove("is-hidden"))})}render(){return a`
      <ui-app-bar position="sticky" color="background.default" class="topbar">
        <ui-toolbar>
          <ui-container max-width="lg" class="topbar-inner">
            <a class="brand" href="#top" aria-label="Back to top">
              <ui-avatar
                initials=${y.initials}
                size=${36}
                variant="rounded"
                color="primary"
              ></ui-avatar>
              <span class="brand-text">
                <strong>${y.name}</strong>
                <small>${y.role}</small>
              </span>
            </a>
            <span class="spacer"></span>
            <nav class="nav" aria-label="Sections">
              ${ee.map(t=>a`<ui-button
                  href="#${t.id}"
                  data-nav="${t.id}"
                  variant="ghost"
                  size="sm"
                  shape="pill"
                  text-transform="none"
                  >${t.label}</ui-button
                >`)}
            </nav>
            <ui-tooltip content="Switch theme" position="bottom">
              <ui-icon-button
                label="Switch between dark and light theme"
                @click=${this.toggleTheme}
              >
                ${Vt()==="dark"?ui:pi}
              </ui-icon-button>
            </ui-tooltip>
            <ui-icon-button
              label="Open menu"
              class="menu-toggle"
              @click=${this.openDrawer}
            >
              ${hi}
            </ui-icon-button>
          </ui-container>
        </ui-toolbar>
      </ui-app-bar>
    `}}customElements.define("site-top-bar",bi);class vi extends v{render(){return a`
      <header class="hero" id="top">
        <ui-container max-width="lg" class="hero-inner">
          <div >
            <ui-typography class="kicker" variant="overline"
              >${y.location} · ${y.role}</ui-typography
            >
            <ui-typography
              class="hero-title"
              variant="h1"
              component="h1"
              data-variant-lg="h1"
              data-variant-sm="h3"
              >${y.name}</ui-typography
            >
            <ui-typography
              class="hero-focus"
              variant="subtitle1"
              component="p"
              color="primary"
              >${y.focus}</ui-typography
            >
            <ui-typography class="hero-lead" variant="body1"
              >${y.lead}</ui-typography
            >
            <div class="hero-actions">
              <ui-button
                class="cta"
                href=${y.linkedin}
                target="_blank"
                rel="noopener"
                size="lg"
                shape="pill"
                text-transform="none"
                >${gi} Connect on LinkedIn</ui-button
              >
              <ui-button
                class="cta"
                href="#work"
                variant="secondary"
                size="lg"
                shape="pill"
                text-transform="none"
                >See selected work</ui-button
              >
            </div>
            <ui-grid container spacing=${2} class="hero-facts">
              ${y.facts.map(t=>a`
                  <ui-grid item xs=${6} md=${3}>
                    <div class="fact">
                      <ui-typography  variant="h6" component="p"
                        >${t.value}</ui-typography
                      >
                      <ui-typography
                        variant="overline"
                        color="text.secondary"
                        >${t.label}</ui-typography
                      >
                    </div>
                  </ui-grid>
                `)}
            </ui-grid>
          </div>
          <div class="hero-photo">
            <ui-avatar
              src=${y.avatar}
              initials=${y.initials}
              alt=${y.name}
              size=${220}
              variant="rounded"
            ></ui-avatar>
          </div>
        </ui-container>
      </header>
    `}}customElements.define("site-hero",vi);const P=(i,t,e)=>a`
  <div class="section-head reveal">
    <ui-typography
      class="section-title"
      variant="h2"
      component="h2"
      id="${t}-title"
      data-variant-lg="h2"
      data-variant-sm="h4"
      >${i}</ui-typography
    >
    ${e?a`<ui-typography
          class="section-lead"
          variant="body1"
          color="text.secondary"
          >${e}</ui-typography
        >`:l}
  </div>
`;class xi extends v{render(){return a`
      <section class="section" id="about" aria-labelledby="about-title">
        <ui-container max-width="lg">
          ${P("About","about")}
          <div class="about-grid">
            <div class="about-copy reveal">
              ${y.about.map(t=>a`<ui-typography  variant="body1"
                    >${t}</ui-typography
                  >`)}
            </div>
            <div class="glance reveal">
              <ui-card elevated padding="lg">
                <ui-typography
                  class="glance-title"
                  variant="overline"
                  color="text.secondary"
                  >At a glance</ui-typography
                >
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
                      secondary="VeriPark, ING Türkiye, Ladenzeile"
                    ></ui-list-item-text>
                  </ui-list-item>
                </ui-list>
              </ui-card>
            </div>
          </div>
        </ui-container>
      </section>
    `}}customElements.define("site-about",xi);class $i extends v{render(){return a`
      <section class="section" id="experience" aria-labelledby="experience-title">
        <ui-container max-width="lg">
          ${P("Experience","experience","Sixteen years of building web software: banking, commerce, and now parking platforms.")}
          <ui-timeline position="right" class="reveal">
            ${qe.map(t=>a`
                <ui-timeline-item>
                  <ui-timeline-dot
                    class="tl-dot"
                    color=${t.dot}
                  ></ui-timeline-dot>
                  <ui-card elevated padding="md">
                    <div class="tl-body">
                      <div class="tl-top">
                        <ui-typography class="tl-company" variant="h6" component="h3"
                          >${t.company}</ui-typography
                        >
                        <ui-typography
                          class="tl-title"
                          variant="subtitle2"
                          component="p"
                          color="primary"
                          >${t.title}</ui-typography
                        >
                      </div>
                      <ui-typography
                        class="tl-meta tl-period"
                        variant="caption"
                        color="text.secondary"
                        >${t.period}</ui-typography
                      >
                      <ui-typography
                        class="tl-meta"
                        variant="caption"
                        color="text.secondary"
                        >${t.location}</ui-typography
                      >
                      <ui-typography class="tl-summary" variant="body2"
                        >${t.summary}</ui-typography
                      >
                      <ul class="tl-bullets">
                        ${t.bullets.map(e=>a`<li>
                            <ui-typography variant="body2">${e}</ui-typography>
                          </li>`)}
                      </ul>
                      <div class="tl-tech">
                        ${t.tech.map(e=>a`<ui-chip
                            label=${e}
                            variant="outlined"
                            nowrap
                          ></ui-chip>`)}
                      </div>
                    </div>
                  </ui-card>
                  <ui-typography
                    slot="opposite"
                    class="tl-date"
                    variant="caption"
                    color="text.secondary"
                    >${t.period}</ui-typography
                  >
                </ui-timeline-item>
              `)}
          </ui-timeline>
        </ui-container>
      </section>
    `}}customElements.define("site-experience",$i);class wi extends v{render(){return a`
      <section class="section" id="work" aria-labelledby="work-title">
        <ui-container max-width="lg">
          ${P("Selected work","work","A mix of product work and the shared foundations behind it. One of these is still on my desk.")}
          <ui-masonry columns=${3} spacing=${24} class="reveal">
            ${Ke.map(t=>a`
                <ui-card
                  padding="lg"
                  elevated
                  class="work-card ${t.featured?"work-card--featured":""}"
                >
                  <div class="work-head">
                    ${t.badge?a`<ui-badge variant=${t.badge.variant}
                          >${t.badge.label}</ui-badge
                        >`:l}
                    <ui-typography class="work-title" variant="h6" component="h3"
                      >${t.title}</ui-typography
                    >
                  </div>
                  <ui-typography
                    class="work-context"
                    variant="overline"
                    color="text.secondary"
                    >${t.context}</ui-typography
                  >
                  <ui-typography class="work-body" variant="body2"
                    >${t.body}</ui-typography
                  >
                  ${t.note?a`<ui-typography
                        class="work-note"
                        variant="subtitle2"
                        component="p"
                        color="primary"
                        >${t.note}</ui-typography
                      >`:l}
                  <div class="work-chips">
                    ${t.chips.map(e=>a`<ui-chip
                        label=${e}
                        variant="outlined"
                        nowrap
                      ></ui-chip>`)}
                  </div>
                </ui-card>
              `)}
          </ui-masonry>
        </ui-container>
      </section>
    `}}customElements.define("site-work",wi);class ki extends v{render(){return a`
      <section class="section" id="skills" aria-labelledby="skills-title">
        <ui-container max-width="lg">
          ${P("Skills","skills","What I reach for most often, and what I've picked up over the last decade.")}
          <div class="skills-grid reveal">
            ${Ze.map(t=>a`
                <ui-card padding="lg" >
                  <ui-typography
                    class="skill-title"
                    variant="overline"
                    color="text.secondary"
                    >${t.title}</ui-typography
                  >
                  <div class="skill-chips">
                    ${t.items.map(e=>a`<ui-chip
                        label=${e}
                        variant="outlined"
                        nowrap
                      ></ui-chip>`)}
                  </div>
                </ui-card>
              `)}
          </div>
        </ui-container>
      </section>
    `}}customElements.define("site-skills",ki);const Si={music:{stats:w.stats,topArtists:w.topArtists,nowPlaying:{...w.obsession,live:!1},source:`Numbers pulled in ${w.pulled}.`},ride:{context:`${C.context} · pulled ${C.pulled}`,groups:C.groups,lines:C.lines}},de=i=>Number(i??0).toLocaleString("en-US"),qt=(i,t)=>({music:{...i.music,...t.music},ride:{...i.ride,...t.ride}}),_i=(i,t)=>i.map((e,r)=>t[r]===void 0||t[r]===null?e:{...e,value:de(t[r])});function Ai(i){if(!i)return null;const t=new Date(i);return Number.isNaN(t.getTime())?null:t.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}async function Ei(){try{const i=await fetch("stats.json",{cache:"no-cache"});return i.ok?await i.json():null}catch{return null}}function Ci(i){const t=Ai(i.updated),e={};if(i.strava){const r={};i.strava.groups?.length&&(r.groups=i.strava.groups),i.strava.lines?.length&&(r.lines=i.strava.lines),t&&(r.context=`${C.context} · updated ${t}`),e.ride=r}if(i.lastfm){const r={};i.lastfm.stats?.length&&(r.stats=i.lastfm.stats),i.lastfm.topArtists?.length&&(r.topArtists=i.lastfm.topArtists),i.lastfm.nowPlaying&&(r.nowPlaying={...i.lastfm.nowPlaying,live:!0}),t&&(r.source=`Numbers updated ${t}.`),e.music=r}return e}const zi="https://ws.audioscrobbler.com/2.0/";async function Ti(i){const t=w.apiKey,e=async(r,o="")=>{const s=`${zi}?method=${r}&user=${encodeURIComponent(w.user)}&api_key=${encodeURIComponent(t)}&format=json${o}`,n=await fetch(s);if(!n.ok)throw new Error(`Last.fm ${r} -> ${n.status}`);return n.json()};try{const[r,o,s,n]=await Promise.all([e("user.getinfo"),e("user.getlovedtracks","&limit=1"),e("user.gettopartists","&period=1month&limit=5"),e("user.getrecenttracks","&limit=1")]),p=r?.user;if(!p)return null;const c=s?.topartists?.artist,d=n?.recenttracks?.track?.[0],b={stats:_i(i.stats,[p.playcount,p.artist_count,o?.lovedtracks?.["@attr"]?.total]),source:"Live from Last.fm."};return Array.isArray(c)&&(b.topArtists=c.map(h=>({name:`${h.name??""}`,plays:Number(h.playcount??0)}))),d?.["@attr"]?.nowplaying==="true"&&(b.nowPlaying={track:`${d.name??""}`,artist:`${d.artist?.["#text"]??""}`,live:!0}),b}catch{return null}}async function Bi(i,t){const e=await Ei();e&&(i=qt(i,Ci(e)),t(i));const r=await Ti(i.music);r&&(i=qt(i,{music:r}),t(i))}function Pi(i){const t=window;t.requestIdleCallback?t.requestIdleCallback(i,{timeout:2500}):window.setTimeout(i,300)}const pe=i=>a`
  <div class="life-stat">
    <ui-typography  variant="h5" component="p"
      >${i.value}</ui-typography
    >
    <ui-typography variant="overline" color="text.secondary"
      >${i.label}</ui-typography
    >
  </div>
`;class Ii extends v{static{this.properties={music:{attribute:!1}}}render(){const{music:t}=this;return a`
      <ui-card padding="lg" elevated class="life-card">
        <div class="life-head">
          <ui-typography
            class="work-context"
            variant="overline"
            color="text.secondary"
            >Last.fm · ${w.since}</ui-typography
          >
          <ui-typography class="work-title" variant="h6" component="h3"
            >Music</ui-typography
          >
        </div>
        <div class="life-stats">${t.stats.map(pe)}</div>
        <ui-typography
          class="life-caption"
          variant="overline"
          color="text.secondary"
          >${w.topWindow}</ui-typography
        >
        <ol class="life-rank">
          ${t.topArtists.map((e,r)=>a`
              <li>
                <ui-typography
                  class="life-index"
                  variant="caption"
                  color="text.secondary"
                  >${r+1}</ui-typography
                >
                <ui-typography class="life-name" variant="body2"
                  >${e.name}</ui-typography
                >
                <ui-typography
                  variant="caption"
                  color="text.secondary"
                  >${de(e.plays)} plays</ui-typography
                >
              </li>
            `)}
        </ol>
        ${t.nowPlaying?a`<ui-typography class="life-now" variant="body2"
              >${t.nowPlaying.live?a`Playing right now: ${t.nowPlaying.track} by
                  ${t.nowPlaying.artist}.`:a`Stuck on <strong>${t.nowPlaying.track}</strong> by
                  ${t.nowPlaying.artist} right now.`}</ui-typography
            >`:l}
        <ui-typography class="life-link" variant="subtitle2" component="p">
          <ui-link
            href=${w.url}
            target="_blank"
            rel="noopener"
            color="primary"
            underline="always"
            >Last.fm profile ${ce}</ui-link
          >
        </ui-typography>
        <ui-typography
          class="life-source"
          variant="caption"
          color="text.secondary"
          >${t.source}</ui-typography
        >
      </ui-card>
    `}}customElements.define("life-music-card",Ii);class Li extends v{static{this.properties={ride:{attribute:!1}}}render(){const{ride:t}=this;return a`
      <ui-card padding="lg" elevated class="life-card">
        <div class="life-head">
          <ui-typography
            class="work-context"
            variant="overline"
            color="text.secondary"
            >${t.context}</ui-typography
          >
          <ui-typography class="work-title" variant="h6" component="h3"
            >${C.title}</ui-typography
          >
        </div>
        ${t.groups.map(e=>a`
            <div class="life-group">
              <ui-typography
                class="life-group-title"
                variant="overline"
                color="text.secondary"
                >${e.title}</ui-typography
              >
              <div class="life-stats">${e.stats.map(pe)}</div>
            </div>
          `)}
        ${t.lines.length?a`<ul class="life-list">
              ${t.lines.map(e=>a`<li>
                  <ui-typography variant="body2">${e}</ui-typography>
                </li>`)}
            </ul>`:l}
        ${a`<ui-typography class="life-link" variant="subtitle2" component="p">
              <ui-link
                href=${y.strava}
                target="_blank"
                rel="noopener"
                color="primary"
                underline="always"
                >Strava profile ${ce}</ui-link
              >
            </ui-typography>`}
      </ui-card>
    `}}customElements.define("life-ride-card",Li);class Ni extends v{constructor(){super(...arguments),this.cards=Si}static{this.properties={cards:{state:!0}}}wired(){Pi(()=>void this.refresh())}async refresh(){await Bi(this.cards,t=>{this.cards=t})}render(){const{cards:t}=this;return a`
      <section class="section" id="offscreen" aria-labelledby="offscreen-title">
        <ui-container max-width="lg">
          ${P("Off screen","offscreen","Not work, for once. What's on repeat and how far I ride.")}
          <div class="life-grid reveal">
            <life-music-card .music=${t.music}></life-music-card>
            ${t.ride.groups.length||t.ride.lines.length?a`<life-ride-card .ride=${t.ride}></life-ride-card>`:l}
          </div>
          <div class="photo-strip reveal">
            <ui-image-list
              cols=${4}
              row-height="220px"
              gap=${12}
              class="photo-list"
            >
              ${Je.map(e=>a`
                  <ui-image-list-item>
                    <img src=${e.src} alt=${e.alt} loading="lazy" />
                  </ui-image-list-item>
                `)}
            </ui-image-list>
            <ui-typography
              class="photo-credit"
              variant="caption"
              color="text.secondary"
              >From the bike. More on
              <ui-link
                href=${y.instagram}
                target="_blank"
                rel="noopener"
                color="primary"
                underline="always"
                >Instagram</ui-link
              >.</ui-typography
            >
          </div>
        </ui-container>
      </section>
    `}}customElements.define("site-offscreen",Ni);class Mi extends v{async copyEmail(t){const e=document.querySelector(".site-snackbar");try{await navigator.clipboard.writeText(t),e&&(e.message="Email address copied to clipboard",e.open=!0)}catch{window.location.href=`mailto:${t}`}}render(){return a`
      <section class="section" id="contact" aria-labelledby="contact-title">
        <ui-container max-width="lg">
          ${P("Contact","contact")}
          <ui-card padding="lg" elevated class="reveal">
            <div class="contact-grid">
              <div>
                <ui-typography
                  class="contact-title"
                  variant="h4"
                  component="h3"
                  data-variant-lg="h4"
                  data-variant-sm="h5"
                  >Let's talk about frontend foundations.</ui-typography
                >
                <ui-typography class="contact-body" variant="body1"
                  >I'm always up for a conversation about component systems, micro
                  frontends, or the messy parts of migrating a frontend that can't
                  stop shipping. The quickest way to reach me is LinkedIn.</ui-typography
                >
              </div>
              <div class="contact-links">
                <ui-list-item-button
                  class="contact-link"
                  href=${y.linkedin}
                  target="_blank"
                  rel="noopener"
                >
                  ${fi}
                  <span class="label">
                    <ui-typography
                      variant="subtitle2"
                      component="h3"
                      >LinkedIn</ui-typography
                    >
                    <ui-typography
                      variant="caption"
                      color="text.secondary"
                      >linkedin.com/in/anilokay</ui-typography
                    >
                  </span>
                </ui-list-item-button>
                <ui-list-item-button
                  class="contact-link"
                  href=${y.github}
                  target="_blank"
                  rel="noopener"
                >
                  ${mi}
                  <span class="label">
                    <ui-typography
                      variant="subtitle2"
                      component="h3"
                      >GitHub</ui-typography
                    >
                    <ui-typography
                      variant="caption"
                      color="text.secondary"
                      >github.com/justbasicfacts</ui-typography
                    >
                  </span>
                </ui-list-item-button>
                ${a`
                      <ui-list-item-button
                        class="contact-link"
                        href="mailto:${y.email}"
                        @click=${t=>{const e=t;e.metaKey||e.ctrlKey||(t.preventDefault(),this.copyEmail(y.email))}}
                      >
                        ${yi}
                        <span class="label">
                          <ui-typography
                            variant="subtitle2"
                            component="h3"
                            >Email</ui-typography
                          >
                          <ui-typography
                            variant="caption"
                            color="text.secondary"
                            >${y.email} · click to copy</ui-typography
                          >
                        </span>
                      </ui-list-item-button>
                    `}
              </div>
            </div>
          </ui-card>
        </ui-container>
      </section>
    `}}customElements.define("site-contact",Mi);class Ui extends v{render(){const t=[{label:"LinkedIn",href:y.linkedin},{label:"GitHub",href:y.github},{label:"Last.fm",href:w.url},{label:"Strava",href:y.strava},{label:"Instagram",href:y.instagram}].filter(e=>e.href);return a`
      <footer class="site-footer">
        <ui-container max-width="lg">
          <div class="footer-inner">
            <ui-typography
              variant="caption"
              color="text.secondary"
              >© ${new Date().getFullYear()} ${y.name} · Berlin,
              Germany</ui-typography
            >
            <ui-typography
              variant="caption"
              color="text.secondary"
            >
              Built with the component library I'm working on: web components and
              design tokens.
            </ui-typography>
            <ui-typography
              variant="caption"
              color="text.secondary"
            >
              ${t.map((e,r)=>a`${r?" · ":""}<ui-link
                    href=${e.href}
                    target="_blank"
                    rel="noopener"
                    color="text.secondary"
                    underline="hover"
                    >${e.label}</ui-link
                  >`)}
            </ui-typography>
          </div>
        </ui-container>
      </footer>
    `}}customElements.define("site-footer",Ui);class Oi extends v{constructor(){super(...arguments),this.closeDrawer=t=>{const r=t.currentTarget.closest("ui-drawer");r&&(r.open=!1)}}render(){return a`
      <ui-drawer
        anchor="right"
        variant="temporary"
        width="280px"
        class="site-drawer"
      >
        <div class="drawer-panel">
          <strong>${y.name}</strong>
          <nav aria-label="Sections">
            <ui-list>
              ${ee.map(t=>a`<ui-list-item-button
                  href="#${t.id}"
                  @click=${this.closeDrawer}
                  >${t.label}</ui-list-item-button
                >`)}
            </ui-list>
          </nav>
        </div>
      </ui-drawer>
    `}}customElements.define("site-drawer",Oi);class Ri extends v{async wired(){await Promise.all([...this.children].map(t=>t.updateComplete)),Kt(),window.addEventListener("resize",Kt)}render(){return a`
      <site-top-bar></site-top-bar>
      <site-hero></site-hero>
      <main id="main">
        <site-about></site-about>
        <site-experience></site-experience>
        <site-work></site-work>
        <site-skills></site-skills>
        <site-offscreen></site-offscreen>
        <site-contact></site-contact>
      </main>
      <site-footer></site-footer>
      <site-drawer></site-drawer>
      ${a`<ui-snackbar
            class="site-snackbar"
            message="Email address copied to clipboard"
            action="Dismiss"
            anchor-vertical="bottom"
            anchor-horizontal="center"
          ></ui-snackbar>`}
    `}}function Kt(){const i=window.innerWidth,t=document.querySelector("ui-masonry");t&&(t.columns=i<700?1:i<1080?2:3);const e=document.querySelector(".photo-list");e&&(e.cols=i<720?2:4);const r=i<760;document.querySelectorAll("[data-variant-lg]").forEach(o=>{const s=r?o.dataset.variantSm:o.dataset.variantLg;s&&(o.variant=s)})}customElements.define("site-page",Ri);ne(ai());
