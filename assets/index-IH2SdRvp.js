(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,q=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Ct=new WeakMap;let Wt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ct.set(e,t))}return t}toString(){return this.cssText}};const Gt=i=>new Wt(typeof i=="string"?i:i+"",void 0,K),g=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[s+1],i[0]);return new Wt(e,i,K)},ae=(i,t)=>{if(q)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=H.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}},zt=q?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Gt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ne,defineProperty:le,getOwnPropertyDescriptor:ce,getOwnPropertyNames:pe,getOwnPropertySymbols:de,getPrototypeOf:ue}=Object,W=globalThis,Tt=W.trustedTypes,he=Tt?Tt.emptyScript:"",ge=W.reactiveElementPolyfillSupport,I=(i,t)=>i,F={toAttribute(i,t){switch(t){case Boolean:i=i?he:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Vt=(i,t)=>!ne(i,t),Bt={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:Vt};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&le(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:s}=ce(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){const p=o?.call(this);s?.call(this,n),this.requestUpdate(t,p,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bt}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=ue(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,r=[...pe(e),...de(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(zt(o))}else t!==void 0&&e.push(zt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:F).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:F;this._$Em=o;const p=n.fromAttribute(e,s.type);this[o]=p??this._$Ej?.get(o)??p,this._$Em=null}}requestUpdate(t,e,r,o=!1,s){if(t!==void 0){const n=this.constructor;if(o===!1&&(s=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??Vt)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:s},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r){const{wrapped:n}=s,p=this[o];n!==!0||this._$AL.has(o)||p===void 0||this.C(o,void 0,s,p)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[I("elementProperties")]=new Map,E[I("finalized")]=new Map,ge?.({ReactiveElement:E}),(W.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,Pt=i=>i,j=Z.trustedTypes,It=j?j.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ft="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,qt="?"+k,fe=`<${qt}>`,A=document,L=()=>A.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",J=Array.isArray,me=i=>J(i)||typeof i?.[Symbol.iterator]=="function",V=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Nt=/>/g,S=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,Ut=/"/g,Kt=/^(?:script|style|textarea|title)$/i,ye=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),a=ye(1),z=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Ot=new WeakMap,_=A.createTreeWalker(A,129);function Zt(i,t){if(!J(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return It!==void 0?It.createHTML(t):t}const be=(i,t)=>{const e=i.length-1,r=[];let o,s=t===2?"<svg>":t===3?"<math>":"",n=P;for(let p=0;p<e;p++){const l=i[p];let c,b,u=-1,$=0;for(;$<l.length&&(n.lastIndex=$,b=n.exec(l),b!==null);)$=n.lastIndex,n===P?b[1]==="!--"?n=Lt:b[1]!==void 0?n=Nt:b[2]!==void 0?(Kt.test(b[2])&&(o=RegExp("</"+b[2],"g")),n=S):b[3]!==void 0&&(n=S):n===S?b[0]===">"?(n=o??P,u=-1):b[1]===void 0?u=-2:(u=n.lastIndex-b[2].length,c=b[1],n=b[3]===void 0?S:b[3]==='"'?Ut:Mt):n===Ut||n===Mt?n=S:n===Lt||n===Nt?n=P:(n=S,o=void 0);const x=n===S&&i[p+1].startsWith("/>")?" ":"";s+=n===P?l+fe:u>=0?(r.push(c),l.slice(0,u)+Ft+l.slice(u)+k+x):l+k+(u===-2?p:x)}return[Zt(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class M{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let s=0,n=0;const p=t.length-1,l=this.parts,[c,b]=be(t,e);if(this.el=M.createElement(c,r),_.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=_.nextNode())!==null&&l.length<p;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(Ft)){const $=b[n++],x=o.getAttribute(u).split(k),R=/([.?@])?(.*)/.exec($);l.push({type:1,index:s,name:R[2],strings:x,ctor:R[1]==="."?xe:R[1]==="?"?$e:R[1]==="@"?we:G}),o.removeAttribute(u)}else u.startsWith(k)&&(l.push({type:6,index:s}),o.removeAttribute(u));if(Kt.test(o.tagName)){const u=o.textContent.split(k),$=u.length-1;if($>0){o.textContent=j?j.emptyScript:"";for(let x=0;x<$;x++)o.append(u[x],L()),_.nextNode(),l.push({type:2,index:++s});o.append(u[$],L())}}}else if(o.nodeType===8)if(o.data===qt)l.push({type:2,index:s});else{let u=-1;for(;(u=o.data.indexOf(k,u+1))!==-1;)l.push({type:7,index:s}),u+=k.length-1}s++}}static createElement(t,e){const r=A.createElement("template");return r.innerHTML=t,r}}function T(i,t,e=i,r){if(t===z)return t;let o=r!==void 0?e._$Co?.[r]:e._$Cl;const s=N(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(i),o._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=o:e._$Cl=o),o!==void 0&&(t=T(i,o._$AS(i,t.values),o,r)),t}class ve{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??A).importNode(e,!0);_.currentNode=o;let s=_.nextNode(),n=0,p=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new U(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new ke(s,this,t)),this._$AV.push(c),l=r[++p]}n!==l?.index&&(s=_.nextNode(),n++)}return _.currentNode=A,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),N(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):me(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=M.createElement(Zt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const s=new ve(o,this),n=s.u(this.options);s.p(e),this.T(n),this._$AH=s}}_$AC(t){let e=Ot.get(t.strings);return e===void 0&&Ot.set(t.strings,e=new M(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const s of t)o===e.length?e.push(r=new U(this.O(L()),this.O(L()),this,this.options)):r=e[o],r._$AI(s),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const r=Pt(t).nextSibling;Pt(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,s){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,o){const s=this.strings;let n=!1;if(s===void 0)t=T(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const p=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=T(this,p[r+l],e,l),c===z&&(c=this._$AH[l]),n||=!N(c)||c!==this._$AH[l],c===d?t=d:t!==d&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!o&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xe extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class $e extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class we extends G{constructor(t,e,r,o,s){super(t,e,r,o,s),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??d)===z)return;const r=this._$AH,o=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==d&&(r===d||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ke{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const Se=Z.litHtmlPolyfillSupport;Se?.(M,U),(Z.litHtmlVersions??=[]).push("3.3.3");const _e=(i,t,e)=>{const r=e?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const s=e?.renderBefore??null;r._$litPart$=o=new U(t.insertBefore(L(),s),s,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis;let h=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_e(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};h._$litElement$=!0,h.finalized=!0,Y.litElementHydrateSupport?.({LitElement:h});const Ae=Y.litElementPolyfillSupport;Ae?.({LitElement:h});(Y.litElementVersions??=[]).push("4.2.2");function m(i,t){typeof customElements>"u"||customElements.get(i)||customElements.define(i,t)}const y=g`
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
`,Ee=[0,1,2,3,4,6,8,12,16,24],Ce={0:"none",1:"0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)",2:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",3:"0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12)",4:"0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)",6:"0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)",8:"0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)",12:"0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)",16:"0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)",24:"0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)"};function X(i){const t=Math.max(0,Math.min(24,Math.round(Number(i)||0)));if(t===0)return"none";const e=Ee.find(r=>r>=t)??24;return`var(--ui-shadow-${e}, ${Ce[e]})`}const ze={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Q(i){return`var(--ui-zindex-${i.toLowerCase()}, ${ze[i]})`}class tt extends h{constructor(){super(...arguments),this.position="fixed",this.color="primary",this.elevation=4,this.square=!1}render(){return a`
      <header
        class="bar"
        part="root"
        style="z-index:${Q("appBar")};box-shadow:${X(this.elevation)}"
      >
        <slot></slot>
      </header>
    `}}tt.properties={position:{type:String,reflect:!0},color:{type:String,reflect:!0},elevation:{type:Number,reflect:!0},square:{type:Boolean,reflect:!0}};tt.styles=[y,g`
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
    `];m("ui-app-bar",tt);class et extends h{constructor(){super(...arguments),this.variant="regular",this.disableGutters=!1}render(){return a`<slot></slot>`}}et.properties={variant:{type:String,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0}};et.styles=[y,g`
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
    `];m("ui-toolbar",et);class it extends h{constructor(){super(...arguments),this.maxWidth="lg",this.fixed=!1,this.disableGutters=!1}render(){return a`<slot></slot>`}}it.properties={maxWidth:{type:String,attribute:"max-width",reflect:!0},fixed:{type:Boolean,reflect:!0},disableGutters:{type:Boolean,attribute:"disable-gutters",reflect:!0}};it.styles=[y,g`
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
    `];m("ui-container",it);const Te=[{name:"xs",min:0},{name:"sm",min:600},{name:"md",min:900},{name:"lg",min:1200},{name:"xl",min:1536}];function Be(){let i="";for(const t of Te)for(let e=1;e<=12;e+=1){const r=`:host([${t.name}='${e}']) { grid-column: span ${e}; }`;i+=t.min>0?`@media (min-width: ${t.min}px) { ${r} }`:`${r}
`}return i}class rt extends h{constructor(){super(...arguments),this.container=!1,this.item=!1,this.spacing=0,this.rowSpacing=-1,this.columnSpacing=-1,this.xs=0,this.sm=0,this.md=0,this.lg=0,this.xl=0}updated(){const t=this.rowSpacing>=0?this.rowSpacing:this.spacing,e=this.columnSpacing>=0?this.columnSpacing:this.spacing;this.style.setProperty("--ui-grid-row-gap",`calc(${t} * var(--ui-spacing, 8px))`),this.style.setProperty("--ui-grid-column-gap",`calc(${e} * var(--ui-spacing, 8px))`)}render(){return a`<slot></slot>`}}rt.properties={container:{type:Boolean,reflect:!0},item:{type:Boolean,reflect:!0},spacing:{type:Number,reflect:!0},rowSpacing:{type:Number,attribute:"row-spacing"},columnSpacing:{type:Number,attribute:"column-spacing"},xs:{type:Number,reflect:!0},sm:{type:Number,reflect:!0},md:{type:Number,reflect:!0},lg:{type:Number,reflect:!0},xl:{type:Number,reflect:!0}};rt.styles=[y,g`
      :host {
        display: block;
      }
      :host([container]) {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        row-gap: var(--ui-grid-row-gap, 0);
        column-gap: var(--ui-grid-column-gap, 0);
      }
    `,Gt(Be())];m("ui-grid",rt);class ot extends h{constructor(){super(...arguments),this.direction="column",this.spacing=0,this.alignItems="",this.justifyContent="",this.wrap=!1,this.divider=!1}_gap(){return`calc(${this.spacing} * var(--ui-spacing, 8px))`}render(){const t=[`--ui-stack-gap:${this._gap()}`];return this.alignItems&&t.push(`align-items:${this.alignItems}`),this.justifyContent&&t.push(`justify-content:${this.justifyContent}`),a`<div class="inner" part="root" style=${t.join(";")}>
      <slot></slot>
    </div>`}}ot.properties={direction:{type:String,reflect:!0},spacing:{type:Number,reflect:!0},alignItems:{type:String,attribute:"align-items"},justifyContent:{type:String,attribute:"justify-content"},wrap:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0}};ot.styles=[y,g`
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
    `];m("ui-stack",ot);class st extends h{constructor(){super(...arguments),this.padding="md",this.elevated=!1}render(){return a`
      <slot name="header"></slot>
      <div class="body" part="body"><slot></slot></div>
      <slot name="footer"></slot>
    `}}st.properties={padding:{type:String,reflect:!0},elevated:{type:Boolean,reflect:!0}};st.styles=[y,g`
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
    `];m("ui-card",st);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=Symbol.for(""),Pe=i=>{if(i?.r===at)return i?._$litStatic$},Rt=i=>({_$litStatic$:i,r:at}),Ie=(i,...t)=>({_$litStatic$:t.reduce((e,r,o)=>e+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+i[o+1],i[0]),r:at}),Dt=new Map,Le=i=>(t,...e)=>{const r=e.length;let o,s;const n=[],p=[];let l,c=0,b=!1;for(;c<r;){for(l=t[c];c<r&&(s=e[c],(o=Pe(s))!==void 0);)l+=o+t[++c],b=!0;c!==r&&p.push(s),n.push(l),c++}if(c===r&&n.push(t[r]),b){const u=n.join("$$lit$$");(t=Dt.get(u))===void 0&&(n.raw=n,Dt.set(u,t=n)),e=p}return i(t,...e)},Ne=Le(a),Me={primary:"var(--ui-color-primary, #1976d2)","primary.light":"var(--ui-color-primary-light, #42a5f5)","primary.dark":"var(--ui-color-primary-hover, #1565c0)","primary.contrastText":"var(--ui-color-primary-contrast, #ffffff)",secondary:"var(--ui-color-secondary, #9c27b0)","secondary.dark":"var(--ui-color-secondary-dark, #7b1fa2)",error:"var(--ui-color-error, #d32f2f)",warning:"var(--ui-color-warning, #ed6c02)",info:"var(--ui-color-info, #0288d1)",success:"var(--ui-color-success, #2e7d32)",text:"var(--ui-color-text, rgba(0, 0, 0, 0.87))","text.primary":"var(--ui-color-text, rgba(0, 0, 0, 0.87))","text.secondary":"var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6))","text.disabled":"var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38))","background.paper":"var(--ui-color-bg-paper, #ffffff)","background.default":"var(--ui-color-bg-default, #ffffff)",divider:"var(--ui-color-divider, rgba(0, 0, 0, 0.12))","action.hover":"var(--ui-color-action-hover, rgba(0, 0, 0, 0.04))","action.selected":"var(--ui-color-action-selected, rgba(0, 0, 0, 0.08))","action.disabled":"var(--ui-color-action-disabled, rgba(0, 0, 0, 0.26))","action.focus":"var(--ui-color-action-focus, rgba(0, 0, 0, 0.12))",backdrop:"var(--ui-color-backdrop, rgba(0, 0, 0, 0.5))",inherit:"inherit",transparent:"transparent",currentColor:"currentColor"};function O(i){return Me[i]??i}const Ue={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",caption:"span",overline:"span",button:"span"};class nt extends h{constructor(){super(...arguments),this.variant="body1",this.component="",this.align="",this.color="",this.gutterBottom=!1,this.noWrap=!1}updated(t){t.has("color")&&(this.style.color=this.color?O(this.color):"")}render(){const t=this.component||Ue[this.variant]||"p";return Ne`
      <${Rt(t)} class="text" part=${Ie`root`}
        ><slot></slot></${Rt(t)}>
    `}}nt.properties={variant:{type:String,reflect:!0},component:{type:String},align:{type:String,reflect:!0},color:{type:String},gutterBottom:{type:Boolean,attribute:"gutter-bottom",reflect:!0},noWrap:{type:Boolean,attribute:"no-wrap",reflect:!0}};nt.styles=[y,g`
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
    `];m("ui-typography",nt);class lt extends h{constructor(){super(...arguments),this.color="inherit",this.fontSize="medium",this.size=""}updated(t){t.has("size")&&(this.style.fontSize=this.size||""),t.has("color")&&(this.style.color=O(this.color))}render(){return a`<slot></slot>`}}lt.properties={color:{type:String,reflect:!0},fontSize:{type:String,attribute:"font-size",reflect:!0},size:{type:String}};lt.styles=[y,g`
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
    `];m("ui-icon",lt);const Oe="http://www.w3.org/2000/svg";class ct extends h{constructor(){super(...arguments),this.viewBox="0 0 24 24",this.fontSize="medium",this.color="inherit",this.label="",this._paint=()=>{const t=this.renderRoot.querySelector("svg"),e=this.renderRoot.querySelector("slot");if(!t||!e)return;const r=e.assignedNodes({flatten:!0}).filter(p=>p.nodeType!==Node.COMMENT_NODE);if(!r.length)return;const o=r.length===1?r[0]:null,s=o&&o.nodeType===Node.ELEMENT_NODE&&o.tagName.toLowerCase()==="svg"?o:null;s?.hasAttribute("viewBox")&&t.setAttribute("viewBox",s.getAttribute("viewBox"));const n=s?Array.from(s.childNodes):r;t.replaceChildren(...n.map(p=>this._toSvg(p)).filter(p=>p!==null))}}_toSvg(t){if(t.nodeType===Node.TEXT_NODE)return document.createTextNode(t.textContent??"");if(t.nodeType!==Node.ELEMENT_NODE)return null;const e=t,r=document.createElementNS(Oe,e.tagName.toLowerCase());for(const o of Array.from(e.attributes))r.setAttribute(o.name,o.value);for(const o of Array.from(e.childNodes)){const s=this._toSvg(o);s&&r.appendChild(s)}return r}firstUpdated(){this._paint()}render(){return a`
      <slot @slotchange=${this._paint}></slot>
      <svg
        part="svg"
        viewBox=${this.viewBox}
        fill="currentColor"
        focusable="false"
        role=${this.label?"img":d}
        aria-hidden=${this.label?d:"true"}
        aria-label=${this.label||d}
        style=${`color:${O(this.color)}`}
      ></svg>
    `}}ct.properties={viewBox:{type:String,attribute:"view-box"},fontSize:{type:String,attribute:"font-size",reflect:!0},color:{type:String,reflect:!0},label:{type:String}};ct.styles=[y,g`
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
    `];m("ui-svg-icon",ct);class pt extends h{constructor(){super(...arguments),this.src="",this.alt="",this.initials="",this.size=40,this.variant="circular",this.color=""}render(){const t=`width:${this.size}px;height:${this.size}px;font-size:${Math.round(this.size*.4)}px;${this.color?`background:${this.color};`:""}`;return a`
      <div class="avatar" part="avatar" style=${t}>
        ${this.src?a`<img src=${this.src} alt=${this.alt} part="img" />`:a`<span class="initials" part="initials"
              >${this.initials||a`<slot></slot>`}</span
            >`}
      </div>
    `}}pt.properties={src:{type:String},alt:{type:String},initials:{type:String},size:{type:Number},variant:{type:String,reflect:!0},color:{type:String}};pt.styles=[y,g`
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
    `];m("ui-avatar",pt);class dt extends h{constructor(){super(...arguments),this.label="",this.variant="filled",this.color="default",this.disabled=!1,this.deletable=!1,this.clickable=!1}_onDelete(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("delete",{detail:this.label,bubbles:!0,composed:!0}))}render(){return a`
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
    `}}dt.properties={label:{type:String},variant:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},deletable:{type:Boolean,reflect:!0},clickable:{type:Boolean,reflect:!0}};dt.styles=[y,g`
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
    `];m("ui-chip",dt);class ut extends h{constructor(){super(...arguments),this.variant="default",this.pill=!1}render(){return a`<slot></slot>`}}ut.properties={variant:{type:String,reflect:!0},pill:{type:Boolean,reflect:!0}};ut.styles=[y,g`
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
    `];m("ui-badge",ut);class ht extends h{constructor(){super(...arguments),this.orientation="horizontal",this.inset=!1}render(){return a`<slot></slot>`}}ht.properties={orientation:{type:String,reflect:!0},inset:{type:Boolean,reflect:!0}};ht.styles=[y,g`
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
    `];m("ui-divider",ht);class gt extends h{constructor(){super(...arguments),this.size="medium",this.color="default",this.disabled=!1,this.edge="",this.label=""}get _color(){return this.disabled?"var(--ui-color-text-disabled, rgba(0, 0, 0, 0.38))":this.color==="default"?"var(--ui-color-text-secondary, rgba(0, 0, 0, 0.6))":O(this.color)}render(){return a`
      <button
        part="button"
        type="button"
        style="color:${this._color}"
        ?disabled=${this.disabled}
        aria-label=${this.label||d}
      >
        <slot></slot>
      </button>
    `}}gt.properties={size:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},edge:{type:String,reflect:!0},label:{type:String}};gt.styles=[y,g`
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
    `];m("ui-icon-button",gt);class ft extends h{constructor(){super(...arguments),this.content="",this.position="top",this._onClick=t=>{t.detail!==0&&this.toggleAttribute("activated",!0)},this._clearWhenIdle=()=>{this.matches(":hover")||this.matches(":focus-within")||this.removeAttribute("activated")}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseleave",this._clearWhenIdle),this.addEventListener("focusout",this._clearWhenIdle)}disconnectedCallback(){this.removeEventListener("mouseleave",this._clearWhenIdle),this.removeEventListener("focusout",this._clearWhenIdle),super.disconnectedCallback()}render(){return a`
      <slot @click=${this._onClick}></slot>
      <span class="tip" role="tooltip" part="tooltip">${this.content}</span>
    `}}ft.properties={content:{type:String},position:{type:String,reflect:!0}};ft.styles=[y,g`
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
    `];m("ui-tooltip",ft);class mt extends h{constructor(){super(...arguments),this.href="",this.target="",this.rel="",this.underline="always",this.color="primary",this.disabled=!1}render(){return a`
      <a
        part="link"
        href=${this.href||d}
        target=${this.target||d}
        rel=${this.rel||d}
        style=${this.disabled?d:`color:${O(this.color)}`}
        aria-disabled=${this.disabled?"true":d}
        ><slot></slot
      ></a>
    `}}mt.properties={href:{type:String},target:{type:String},rel:{type:String},underline:{type:String,reflect:!0},color:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0}};mt.styles=[y,g`
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
    `];m("ui-link",mt);class yt extends h{constructor(){super(...arguments),this.dense=!1,this.disablePadding=!1}render(){return a`<slot name="subheader"></slot><slot></slot>`}}yt.properties={dense:{type:Boolean,reflect:!0},disablePadding:{type:Boolean,attribute:"disable-padding",reflect:!0}};yt.styles=[y,g`
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
    `];m("ui-list",yt);class bt extends h{constructor(){super(...arguments),this.alignItems="center",this.dense=!1,this.divider=!1}render(){return a`<slot></slot><slot name="secondary-action"></slot>`}}bt.properties={alignItems:{type:String,attribute:"align-items",reflect:!0},dense:{type:Boolean,reflect:!0},divider:{type:Boolean,reflect:!0}};bt.styles=[y,g`
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
    `];m("ui-list-item",bt);class vt extends h{constructor(){super(...arguments),this.primary="",this.secondary="",this.inset=!1}render(){return a`
      <span class="primary" part="primary"><slot>${this.primary}</slot></span>
      <span class="secondary" part="secondary"
        ><slot name="secondary">${this.secondary}</slot></span
      >
    `}}vt.properties={primary:{type:String},secondary:{type:String},inset:{type:Boolean,reflect:!0}};vt.styles=[y,g`
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
    `];m("ui-list-item-text",vt);class xt extends h{constructor(){super(...arguments),this.position="right",this._onSlotChange=()=>{this._syncItems()}}updated(){this._syncItems()}_resolve(t){switch(this.position){case"left":return{position:"left",alternate:!1};case"alternate":return{position:t%2===0?"right":"left",alternate:!0};case"alternate-reverse":return{position:t%2===0?"left":"right",alternate:!0};case"right":default:return{position:"right",alternate:!1}}}_syncItems(){Array.from(this.children).filter(e=>e.tagName.toLowerCase()==="ui-timeline-item").forEach((e,r)=>{const o=this._resolve(r);e.position!==o.position&&(e.position=o.position),e.alternate!==o.alternate&&(e.alternate=o.alternate)})}render(){return a`<slot @slotchange=${this._onSlotChange}></slot>`}}xt.properties={position:{type:String,reflect:!0}};xt.styles=[y,g`
      :host {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
      }
    `];m("ui-timeline",xt);class $t extends h{constructor(){super(...arguments),this.position="right",this.alternate=!1}render(){return a`
      <div class="opposite" part="opposite"><slot name="opposite"></slot></div>
      ${this.alternate?a`<div class="center" part="center"></div>`:d}
      <div class="content" part="content"><slot></slot></div>
    `}}$t.properties={position:{type:String,reflect:!0},alternate:{type:Boolean,reflect:!0}};$t.styles=[y,g`
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
    `];m("ui-timeline-item",$t);class wt extends h{constructor(){super(...arguments),this.color="grey",this.variant="filled"}render(){return a`<slot></slot>`}}wt.properties={color:{type:String,reflect:!0},variant:{type:String,reflect:!0}};wt.styles=[y,g`
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
    `];m("ui-timeline-dot",wt);class kt extends h{constructor(){super(...arguments),this.columns=3,this.spacing=4}updated(){this.style.setProperty("--ui-masonry-columns",String(this.columns)),this.style.setProperty("--ui-masonry-spacing",`${this.spacing}px`)}render(){return a`<slot></slot>`}}kt.properties={columns:{type:Number,reflect:!0},spacing:{type:Number,reflect:!0}};kt.styles=[y,g`
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
    `];m("ui-masonry",kt);class St extends h{constructor(){super(...arguments),this.cols=2,this.rowHeight="160px",this.gap=4,this.variant="standard"}updated(){this.style.gridTemplateColumns=`repeat(${this.cols}, 1fr)`,this.style.gridAutoRows=this.rowHeight,this.style.gap=`${this.gap}px`}render(){return a`<slot></slot>`}}St.properties={cols:{type:Number,reflect:!0},rowHeight:{type:String,attribute:"row-height"},gap:{type:Number,reflect:!0},variant:{type:String,reflect:!0}};St.styles=[y,g`
      :host {
        display: grid;
      }
    `];m("ui-image-list",St);class _t extends h{constructor(){super(...arguments),this.cols=1,this.rows=1}updated(){this.style.gridColumn=`span ${this.cols}`,this.style.gridRow=`span ${this.rows}`}render(){return a`<slot></slot><slot name="bar"></slot>`}}_t.properties={cols:{type:Number,reflect:!0},rows:{type:Number,reflect:!0}};_t.styles=[y,g`
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
    `];m("ui-image-list-item",_t);class At extends h{constructor(){super(...arguments),this.open=!1,this.anchor="left",this.variant="temporary",this.width="240px",this.elevation=16,this.dismissible=!0,this._prevOpen=null,this._onKeydown=t=>{t.key==="Escape"&&(!this.open||!this.dismissible||this.variant==="temporary"&&(this.open=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown)}show(){this.open||(this.open=!0)}close(){this.open&&(this.open=!1)}_onBackdrop(t){t.target===t.currentTarget&&this.dismissible&&this.close()}_panelStyle(){return`${this.anchor==="top"||this.anchor==="bottom"?`height:${this.width};`:`width:${this.width};`}z-index:${Q("drawer")};box-shadow:${X(this.elevation)};`}updated(t){if(!t.has("open"))return;const e=this._prevOpen;this._prevOpen=this.open,e!==null&&this.dispatchEvent(new CustomEvent(this.open?"open":"close",{bubbles:!0,composed:!0}))}render(){const e=this.variant==="permanent"||this.open,r=this.variant==="temporary"&&this.open;return a`
      ${r?a`<div
            class="backdrop"
            part="backdrop"
            @click=${this._onBackdrop}
          ></div>`:d}
      ${e?a`<div class="panel" part="panel" style=${this._panelStyle()}>
            <slot name="header"></slot>
            <slot></slot>
          </div>`:d}
    `}}At.properties={open:{type:Boolean,reflect:!0},anchor:{type:String,reflect:!0},variant:{type:String,reflect:!0},width:{type:String},elevation:{type:Number,reflect:!0},dismissible:{type:Boolean,reflect:!0}};At.styles=[y,g`
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
    `];m("ui-drawer",At);class Et extends h{constructor(){super(...arguments),this.open=!1,this.message="",this.action="",this.autoHideDuration=6e3,this.anchorVertical="bottom",this.anchorHorizontal="center",this._closeReason="timeout",this._onKeydown=t=>{t.key==="Escape"&&this.open&&(this._closeReason="escapeKeyDown",this.open=!1)},this._onAction=()=>{this.dispatchEvent(new CustomEvent("action-click",{bubbles:!0,composed:!0})),this._closeReason="action",this.open=!1}}_clearTimer(){this._timer!==void 0&&(window.clearTimeout(this._timer),this._timer=void 0)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeydown),this._clearTimer()}updated(t){if(!(!t.has("open")&&!t.has("autoHideDuration"))){if(this._clearTimer(),this.open){this.autoHideDuration>0&&(this._timer=window.setTimeout(()=>{this._closeReason="timeout",this.open=!1},this.autoHideDuration));return}t.has("open")&&this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0,detail:{reason:this._closeReason}}))}}render(){return this.open?a`
      <div
        class="snackbar"
        part="snackbar"
        role="alert"
        style="box-shadow:${X(6)};z-index:${Q("snackbar")}"
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
    `:d}}Et.properties={open:{type:Boolean,reflect:!0},message:{type:String},action:{type:String},autoHideDuration:{type:Number,attribute:"auto-hide-duration",reflect:!0},anchorVertical:{type:String,attribute:"anchor-vertical",reflect:!0},anchorHorizontal:{type:String,attribute:"anchor-horizontal",reflect:!0}};Et.styles=[y,g`
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
    `];m("ui-snackbar",Et);const f={name:"Anıl Okay",initials:"AO",role:"Senior Frontend Developer",focus:"React · TypeScript · Web Components",location:"Berlin, Germany",linkedin:"https://www.linkedin.com/in/anilokay/",github:"https://github.com/justbasicfacts",instagram:"https://www.instagram.com/justbasicfacts/",strava:"https://www.strava.com/athletes/5211686",email:"okayster@gmail.com",avatar:"/portrait.jpg",lead:"I'm a frontend developer in Berlin. Sixteen years in, and most of my work has been on the plumbing side of the frontend: dashboards people use every day, component libraries other teams build on, and a few migrations nobody wanted to start. These days I'm at APCOA Group, working on B2B parking platforms.",facts:[{value:"16+",label:"years in software"},{value:"React · TS",label:"daily drivers"},{value:"Berlin",label:"based in"},{value:"B2B",label:"product focus"}],about:["I started out in Istanbul at VeriPark from 2011 to 2016, then moved into internet banking at ING Türkiye. Berlin came next: e-commerce at Ladenzeile from 2021, and APCOA Group since 2023 on B2B parking platforms. Different domains each time, but the job is usually the same one: take something complicated on the inside and make it usable on the outside.","The work I'm happiest with is usually the part other developers end up using. At Ladenzeile I built a React component library from scratch, and the new B2B portal was built on top of it. Before that I worked on reusable web components in banking. The design system I'm building at the moment is the same idea taken a few steps further.","Outside of work I keep coming back to framework-agnostic UI: web components, design tokens, and the tooling around them. It's where the platform is heading, and it's the kind of problem I enjoy."]},Jt=[{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"work",label:"Work"},{id:"skills",label:"Skills"},{id:"offscreen",label:"Off screen"},{id:"contact",label:"Contact"}],Re=[{company:"APCOA Group Ltd.",title:"Senior Frontend Developer",period:"May 2023 - Present",location:"Berlin, Germany",summary:"Joined ValueSpaces, an APCOA startup, which later merged into APCOA Group.",bullets:["Responsible for the B2B dashboards parking operators work in every day, focused on user-friendly, data-driven workflows.","Contributed to the Dynamic Pricing Tool and the Parking Product Configurator.","Work with React, Vite and micro frontends to keep the platform scalable and fast as the product set grows."],tech:["React","TypeScript","Vite","Micro Frontends"],dot:"primary"},{company:"Ladenzeile",title:"Frontend Engineer",period:"May 2021 - Apr 2023",location:"Berlin, Germany",summary:"Member of the Shop Area team, responsible for the B2B products of the Ladenzeile and Shopalike platforms.",bullets:["Created the upgrade plan from Angular 8 to the latest Angular version, then refactored the legacy codebase towards clean-code principles.","Part of the team transforming the main B2B portal from Angular to React.","Built a component library from scratch with React, and the new B2B application was developed on top of it."],tech:["React","Angular","TypeScript","Component Library"],dot:"info"},{company:"ING Türkiye",title:"Full Stack Developer",period:"Jun 2017 - Apr 2021",location:"Istanbul, Türkiye",summary:"Internet Banking and Portal Applications department, as a Senior Software Consultant in a Scrum team focused on frontend development for a new banking project.",bullets:["Developed reusable web components and features for internet banking.","Worked across the stack, from JavaScript and web components (lit-element, lit-html) to .NET Web Forms, web services, Entity Framework, SQL Server and Oracle."],tech:["JavaScript","Web Components","Lit",".NET Web Forms","SQL Server","Oracle","Scrum"],dot:"warning"}],De=[{title:"Component library & design system",context:"Personal project · work in progress",badge:{label:"In progress",variant:"info"},body:"A framework-agnostic UI library I'm building. Web components are the single source of truth, with thin React bindings on top and a design-token layer that mirrors a familiar Material-style theme, so existing applications can adopt it without a rewrite. Coverage keeps growing, usage is documented in Storybook, and the packages ship through a private registry. The aim is one UI foundation that behaves the same in React, plain HTML and anything else.",chips:["Web components","React bindings","Design tokens","Storybook","Monorepo"],note:"This page is built with it.",featured:!0},{title:"B2B parking management dashboards",context:"APCOA Group · 2023 to today",body:"The dashboards parking operators rely on every day: role-based views, large data sets, and workflows that have to stay responsive. Built as part of a micro-frontend setup on React and Vite.",chips:["React","TypeScript","Vite","Micro frontends"]},{title:"Dynamic Pricing Tool",context:"APCOA Group",body:"Frontend work on the tool that lets operations teams model and roll out parking pricing without going through engineering.",chips:["React","Product UI"]},{title:"Parking Product Configurator",context:"APCOA Group",body:"Frontend work on the configurator used to set up parking products and their tariffs.",chips:["React","Form-heavy UI"]},{title:"B2B portal: Angular to React",context:"Ladenzeile · 2021 to 2023",body:"Planned the Angular 8 upgrade path for Ladenzeile's B2B portal, then helped move the main portal to React, with a component library built from scratch as the foundation.",chips:["Angular","React","Migration","Design system"]},{title:"Reusable web components for internet banking",context:"ING Türkiye · 2017 to 2021",body:"Reusable web components and features for internet banking. This is the work that got me interested in framework-independent UI in the first place.",chips:["Web components","lit-element","JavaScript"]}],He=[{title:"Languages",items:["TypeScript","JavaScript","HTML","CSS"]},{title:"Frameworks & libraries",items:["React","Redux","Angular","Lit","Web Components"]},{title:"UI & design systems",items:["Component libraries","Design tokens","Theming","Storybook"]},{title:"Build & architecture",items:["Vite","Micro frontends","pnpm","Monorepos","Git"]},{title:"Backend & data",items:[".NET","Entity Framework","SQL Server","Oracle"]},{title:"Ways of working",items:["Scrum","B2B products","Cross-team UI foundations"]}],w={url:"https://www.last.fm/user/justbasicfacts",user:"justbasicfacts",apiKey:"fdf336d306ae49b6261ea05acbcbebb7",since:"scrobbling since 2011",pulled:"October 2026",stats:[{value:"75,852",label:"scrobbles"},{value:"4,243",label:"artists"},{value:"414",label:"loved tracks"}],topWindow:"Most played in the last 30 days",topArtists:[{name:"Lera Lynn",plays:140},{name:"Egg",plays:77},{name:"Turnstile",plays:35},{name:"The Warning",plays:27},{name:"Angel Du$t",plays:20}],obsession:{track:"Black River",artist:"Lera Lynn"}},je=[{src:"/photos/group-ride.jpg",alt:"A group ride out on the road"},{src:"/photos/country-road.jpg",alt:"Two riders on a country lane"},{src:"/photos/after-the-ride.jpg",alt:"Helmet on and a finisher medal in hand"},{src:"/photos/jersey.jpg",alt:"Kit on, ready for a ride"}],C={pulled:"October 2026",title:"Cycling",context:"Strava",groups:[{title:"This year",stats:[{value:"82",label:"rides"},{value:"3,287 km",label:"distance"},{value:"11,776 m",label:"climbed"},{value:"137 h",label:"in the saddle"}]},{title:"All time",stats:[{value:"1,318",label:"rides"},{value:"50,529 km",label:"distance"},{value:"366,560 m",label:"climbed"},{value:"2,117 h",label:"in the saddle"}]}],lines:["Longest ride 218.6 km","Biggest climb 1,809 m","Best 100 km in 3:07:51","Best 180 km in 6:26:58"]},We=new IntersectionObserver(i=>{for(const t of i){if(!t.isIntersecting)continue;const e=t.target.id;document.querySelectorAll(".nav ui-link[data-nav]").forEach(r=>r.classList.toggle("is-active",r.dataset.nav===e))}},{rootMargin:"-45% 0px -50% 0px",threshold:0});function Ge(i){We.observe(i)}const Yt=new IntersectionObserver(i=>{for(const t of i)t.isIntersecting&&(t.target.classList.add("is-visible"),Yt.unobserve(t.target))},{rootMargin:"0px 0px -12% 0px",threshold:.08});function Ve(i){i.querySelectorAll(".reveal").forEach(t=>Yt.observe(t))}class v extends h{createRenderRoot(){return this}wired(){}firstUpdated(){Ve(this);const t=this.querySelector("section.section");t&&Ge(t),this.wired()}}const Fe={palette:{primary:{main:"#1976d2",dark:"#1565c0",light:"#42a5f5",contrastText:"#ffffff"},secondary:{main:"#9c27b0",dark:"#7b1fa2"},error:{main:"#d32f2f",dark:"#c62828"},warning:{main:"#ed6c02"},info:{main:"#0288d1"},success:{main:"#2e7d32"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},background:{paper:"#ffffff",default:"#ffffff"},divider:"rgba(0, 0, 0, 0.12)",action:{hover:"rgba(0, 0, 0, 0.04)",selected:"rgba(0, 0, 0, 0.08)",disabled:"rgba(0, 0, 0, 0.26)",focus:"rgba(0, 0, 0, 0.12)"},backdrop:"rgba(0, 0, 0, 0.5)"},shape:{borderRadius:4},typography:{fontFamily:"'Roboto Condensed', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",fontSize:14},spacing:8,zIndex:{mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500}};function D(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Xt(i,t){if(!D(i)||!D(t))return t??i;const e={...i};for(const[r,o]of Object.entries(t))e[r]=D(o)&&D(e[r])?Xt(e[r],o):o;return e}function qe(i){const t=i.palette??{},e={};t.primary?.main&&(e["--ui-color-primary"]=t.primary.main,e["--ui-color-primary-hover"]=t.primary.dark??t.primary.main,t.primary.contrastText&&(e["--ui-color-primary-contrast"]=t.primary.contrastText)),t.secondary?.main&&(e["--ui-color-secondary"]=t.secondary.main),t.secondary?.dark&&(e["--ui-color-secondary-dark"]=t.secondary.dark),t.error?.main&&(e["--ui-color-error"]=t.error.main),t.warning?.main&&(e["--ui-color-warning"]=t.warning.main),t.info?.main&&(e["--ui-color-info"]=t.info.main),t.success?.main&&(e["--ui-color-success"]=t.success.main),t.primary?.light&&(e["--ui-color-primary-light"]=t.primary.light),t.text?.primary&&(e["--ui-color-text"]=t.text.primary),t.text?.secondary&&(e["--ui-color-text-secondary"]=t.text.secondary),t.text?.disabled&&(e["--ui-color-text-disabled"]=t.text.disabled),t.background?.paper&&(e["--ui-color-bg"]=t.background.paper,e["--ui-color-bg-paper"]=t.background.paper),t.background?.default&&(e["--ui-color-bg-default"]=t.background.default),t.divider&&(e["--ui-color-divider"]=t.divider),t.action?.hover&&(e["--ui-color-hover"]=t.action.hover,e["--ui-color-action-hover"]=t.action.hover),t.action?.selected&&(e["--ui-color-action-selected"]=t.action.selected),t.action?.disabled&&(e["--ui-color-action-disabled"]=t.action.disabled),t.action?.focus&&(e["--ui-color-action-focus"]=t.action.focus),t.backdrop&&(e["--ui-color-backdrop"]=t.backdrop),i.shape?.borderRadius!=null&&(e["--ui-radius"]=`${i.shape.borderRadius}px`),i.typography?.fontFamily&&(e["--ui-font"]=i.typography.fontFamily),i.spacing!=null&&(e["--ui-spacing"]=`${i.spacing}px`);for(const[r,o]of Object.entries(i.shadows??{}))e[`--ui-shadow-${r}`]=o;for(const[r,o]of Object.entries(i.zIndex??{}))e[`--ui-zindex-${r.toLowerCase()}`]=`${o}`;return e}function Ke(i,t){const e=Xt(Fe,i),r=qe(e),o=t instanceof Document?t.documentElement:t??document.documentElement;for(const[s,n]of Object.entries(r))o.style.setProperty(s,n)}const Qt="'Roboto Condensed', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",Ze={palette:{primary:{main:"#5b9dff",dark:"#3f83e8",light:"#93beff",contrastText:"#08131f"},secondary:{main:"#c084fc",dark:"#a855f7",light:"#d8b4fe"},text:{primary:"rgba(255, 255, 255, 0.94)",secondary:"rgba(255, 255, 255, 0.64)",disabled:"rgba(255, 255, 255, 0.36)"},background:{paper:"#12161b",default:"#0a0c10"},divider:"rgba(255, 255, 255, 0.12)",action:{hover:"rgba(255, 255, 255, 0.06)",selected:"rgba(91, 157, 255, 0.16)",disabled:"rgba(255, 255, 255, 0.28)",focus:"rgba(255, 255, 255, 0.18)"},backdrop:"rgba(4, 6, 9, 0.7)"},shape:{borderRadius:12},typography:{fontFamily:Qt,fontSize:15},shadows:{1:"0 1px 2px rgba(0, 0, 0, 0.5)",2:"0 2px 6px rgba(0, 0, 0, 0.5)",3:"0 6px 16px rgba(0, 0, 0, 0.5)",4:"0 10px 28px rgba(0, 0, 0, 0.55)",6:"0 14px 40px rgba(0, 0, 0, 0.6)",8:"0 18px 52px rgba(0, 0, 0, 0.62)",12:"0 24px 64px rgba(0, 0, 0, 0.66)",16:"0 30px 80px rgba(0, 0, 0, 0.7)",24:"0 36px 96px rgba(0, 0, 0, 0.72)"}},Je={palette:{primary:{main:"#2563eb",dark:"#1d4ed8",light:"#60a5fa",contrastText:"#ffffff"},secondary:{main:"#7c3aed",dark:"#6d28d9",light:"#a78bfa"},text:{primary:"rgba(9, 14, 24, 0.92)",secondary:"rgba(9, 14, 24, 0.62)",disabled:"rgba(9, 14, 24, 0.36)"},background:{paper:"#ffffff",default:"#f6f7f9"},divider:"rgba(9, 14, 24, 0.12)",action:{hover:"rgba(9, 14, 24, 0.05)",selected:"rgba(37, 99, 235, 0.12)",disabled:"rgba(9, 14, 24, 0.26)",focus:"rgba(9, 14, 24, 0.14)"},backdrop:"rgba(9, 14, 24, 0.5)"},shape:{borderRadius:12},typography:{fontFamily:Qt,fontSize:15},shadows:{1:"0 1px 2px rgba(15, 23, 42, 0.08)",2:"0 2px 8px rgba(15, 23, 42, 0.08)",3:"0 8px 24px rgba(15, 23, 42, 0.08)",4:"0 12px 32px rgba(15, 23, 42, 0.1)",6:"0 16px 44px rgba(15, 23, 42, 0.1)",8:"0 20px 56px rgba(15, 23, 42, 0.12)",12:"0 24px 68px rgba(15, 23, 42, 0.12)",16:"0 30px 84px rgba(15, 23, 42, 0.14)",24:"0 36px 100px rgba(15, 23, 42, 0.14)"}},Ye={dark:Ze,light:Je},te="ao-theme";function Xe(){const i=localStorage.getItem(te);return i==="dark"||i==="light"?i:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function ee(i){Ke(Ye[i]),document.documentElement.dataset.theme=i,localStorage.setItem(te,i);const t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",i==="dark"?"#0a0c10":"#f6f7f9")}function Qe(){return document.documentElement.dataset.theme==="light"?"light":"dark"}a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.9"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
><path d="M5 12h14M13 6l6 6-6 6" /></svg>`;const ti=a`<svg
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
>`,ei=a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
><path d="M20.5 14.8A8.6 8.6 0 0 1 9.2 3.5a8.6 8.6 0 1 0 11.3 11.3Z" /></svg
>`,ii=a`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.9"
  stroke-linecap="round"
  aria-hidden="true"
><path d="M4 7h16M4 12h16M4 17h16" /></svg
>`,ie=a`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
  ><path
    d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.03-3.3-2.03 0-2.34 1.57-2.34 3.2V21H9V9Z"
  /></svg
>`,ri=a`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
  ><path
    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
  /></svg
>`;a`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
  ><path
    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
  /></svg
>`;const re=a`<ui-svg-icon font-size="inherit" view-box="0 0 24 24"
  ><path
    d="M5 12h14M13 6l6 6-6 6"
    fill="none"
    stroke="currentColor"
    stroke-width="1.9"
    stroke-linecap="round"
    stroke-linejoin="round"
  /></ui-svg-icon
>`,oi=a`<ui-icon font-size="small" class="icon-sun"
  >${ti}</ui-icon
>`,si=a`<ui-icon font-size="small" class="icon-moon"
  >${ei}</ui-icon
>`,ai=a`<ui-icon font-size="small">${ii}</ui-icon>`,ni=a`<ui-icon font-size="small" color="primary"
  >${ie}</ui-icon
>`,li=a`<ui-icon font-size="small"
  >${ie}</ui-icon
>`,ci=a`<ui-icon font-size="small" color="primary"
  >${ri}</ui-icon
>`,pi=a`<ui-svg-icon font-size="small" color="primary"
  ><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
    ><path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
    /></svg
></ui-svg-icon
>`;class di extends v{constructor(){super(...arguments),this.toggleTheme=()=>{ee(Qe()==="dark"?"light":"dark")},this.openDrawer=()=>{const t=document.querySelector(".site-drawer");t&&(t.open=!0)}}wired(){this.watchScroll()}watchScroll(){const t=this.querySelector(".topbar"),e=document.querySelector(".site-drawer");if(!t)return;const r=320;let o=Math.max(window.scrollY,0),s=!1,n=0,p=!1;window.addEventListener("keydown",()=>{p=!0},!0),window.addEventListener("pointerdown",()=>{p=!1},!0),window.addEventListener("wheel",()=>{p=!1},{capture:!0,passive:!0}),window.addEventListener("touchstart",()=>{p=!1},{capture:!0,passive:!0});const l=()=>{s=!1;const c=Math.max(window.scrollY,0),b=c>o+2,u=c<o-2;t.classList.toggle("is-scrolled",c>12);const x=t.contains(document.activeElement)&&p||(e?.open??!1)||performance.now()<n;b&&c>r&&!x?t.classList.add("is-hidden"):(u||c<=r||x)&&t.classList.remove("is-hidden"),o=c};window.addEventListener("scroll",()=>{s||(s=!0,requestAnimationFrame(l))},{passive:!0}),document.addEventListener("click",c=>{c.target?.closest?.('a[href^="#"], ui-link[href^="#"]')&&(n=performance.now()+1200,t.classList.remove("is-hidden"))})}render(){return a`
      <ui-app-bar position="sticky" color="transparent" class="topbar">
        <ui-toolbar>
          <ui-container max-width="lg" class="topbar-inner">
            <ui-link
              class="brand"
              href="#top"
              color="inherit"
              underline="none"
              aria-label="Back to top"
            >
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
            </ui-link>
            <span class="spacer"></span>
            <nav class="nav" aria-label="Sections">
              ${Jt.map(t=>a`<ui-link
                  class="nav-link"
                  href="#${t.id}"
                  data-nav="${t.id}"
                  color="inherit"
                  underline="none"
                  >${t.label}</ui-link
                >`)}
            </nav>
            <ui-tooltip content="Switch theme" position="bottom">
              <ui-icon-button
                label="Switch between dark and light theme"
                class="theme-toggle"
                @click=${this.toggleTheme}
              >
                <span class="icon-sun">${oi}</span>
                <span class="icon-moon">${si}</span>
              </ui-icon-button>
            </ui-tooltip>
            <ui-icon-button
              label="Open menu"
              class="menu-toggle"
              @click=${this.openDrawer}
            >
              ${ai}
            </ui-icon-button>
          </ui-container>
        </ui-toolbar>
      </ui-app-bar>
    `}}customElements.define("site-top-bar",di);class ui extends v{render(){return a`
      <header class="hero" id="top">
        <ui-container max-width="lg" class="hero-inner">
          <div class="hero-copy">
            <ui-typography class="kicker" variant="overline"
              >${f.location} · ${f.role}</ui-typography
            >
            <ui-typography
              class="hero-title"
              variant="h1"
              component="h1"
              data-variant-lg="h1"
              data-variant-sm="h3"
              >${f.name}</ui-typography
            >
            <ui-typography
              class="hero-focus"
              variant="subtitle1"
              component="p"
              color="primary"
              >${f.focus}</ui-typography
            >
            <ui-typography class="hero-lead" variant="body1"
              >${f.lead}</ui-typography
            >
            <div class="hero-actions">
              <ui-link
                class="cta cta-primary"
                href=${f.linkedin}
                target="_blank"
                rel="noopener"
                underline="none"
                >${li} Connect on LinkedIn</ui-link
              >
              <ui-link class="cta cta-ghost" href="#work" underline="none"
                >See selected work</ui-link
              >
            </div>
            <ui-grid container spacing=${2} class="hero-facts">
              ${f.facts.map(t=>a`
                  <ui-grid item xs=${6} md=${3}>
                    <div class="fact">
                      <ui-typography class="fact-value" variant="h6" component="p"
                        >${t.value}</ui-typography
                      >
                      <ui-typography class="fact-label" variant="caption"
                        >${t.label}</ui-typography
                      >
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
    `}}customElements.define("site-hero",ui);const B=(i,t,e)=>a`
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
    ${e?a`<ui-typography class="section-lead" variant="body1"
          >${e}</ui-typography
        >`:d}
  </div>
`;class hi extends v{render(){return a`
      <section class="section" id="about" aria-labelledby="about-title">
        <ui-container max-width="lg">
          ${B("About","about")}
          <div class="about-grid">
            <div class="about-copy reveal">
              ${f.about.map(t=>a`<ui-typography class="about-paragraph" variant="body1"
                    >${t}</ui-typography
                  >`)}
            </div>
            <div class="glance reveal">
              <ui-card elevated padding="lg">
                <ui-typography class="glance-title" variant="overline"
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
    `}}customElements.define("site-about",hi);class gi extends v{render(){return a`
      <section class="section" id="experience" aria-labelledby="experience-title">
        <ui-container max-width="lg">
          ${B("Experience","experience","Sixteen years of building web software: banking, commerce, and now parking platforms.")}
          <ui-timeline position="right" class="reveal">
            ${Re.map(t=>a`
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
                      <ui-typography class="tl-meta tl-period" variant="caption"
                        >${t.period}</ui-typography
                      >
                      <ui-typography class="tl-meta" variant="caption"
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
                          ></ui-chip>`)}
                      </div>
                    </div>
                  </ui-card>
                  <div slot="opposite" class="tl-date">${t.period}</div>
                </ui-timeline-item>
              `)}
          </ui-timeline>
        </ui-container>
      </section>
    `}}customElements.define("site-experience",gi);class fi extends v{render(){return a`
      <section class="section" id="work" aria-labelledby="work-title">
        <ui-container max-width="lg">
          ${B("Selected work","work","A mix of product work and the shared foundations behind it. One of these is still on my desk.")}
          <ui-masonry columns=${3} spacing=${24} class="reveal">
            ${De.map(t=>a`
                <ui-card
                  padding="lg"
                  elevated
                  class="work-card ${t.featured?"work-card--featured":""}"
                >
                  <div class="work-head">
                    ${t.badge?a`<ui-badge variant=${t.badge.variant}
                          >${t.badge.label}</ui-badge
                        >`:d}
                    <ui-typography class="work-title" variant="h6" component="h3"
                      >${t.title}</ui-typography
                    >
                  </div>
                  <ui-typography class="work-context" variant="overline"
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
                      >`:d}
                  <div class="work-chips">
                    ${t.chips.map(e=>a`<ui-chip
                        label=${e}
                        variant="outlined"
                      ></ui-chip>`)}
                  </div>
                </ui-card>
              `)}
          </ui-masonry>
        </ui-container>
      </section>
    `}}customElements.define("site-work",fi);class mi extends v{render(){return a`
      <section class="section" id="skills" aria-labelledby="skills-title">
        <ui-container max-width="lg">
          ${B("Skills","skills","What I reach for most often, and what I've picked up over the last decade.")}
          <div class="skills-grid reveal">
            ${He.map(t=>a`
                <ui-card padding="lg" class="skill-card">
                  <ui-typography class="skill-title" variant="overline"
                    >${t.title}</ui-typography
                  >
                  <div class="skill-chips">
                    ${t.items.map(e=>a`<ui-chip label=${e} variant="outlined"></ui-chip>`)}
                  </div>
                </ui-card>
              `)}
          </div>
        </ui-container>
      </section>
    `}}customElements.define("site-skills",mi);const yi={music:{stats:w.stats,topArtists:w.topArtists,nowPlaying:{...w.obsession,live:!1},source:`Numbers pulled in ${w.pulled}.`},ride:{context:`${C.context} · pulled ${C.pulled}`,groups:C.groups,lines:C.lines}},oe=i=>Number(i??0).toLocaleString("en-US"),Ht=(i,t)=>({music:{...i.music,...t.music},ride:{...i.ride,...t.ride}}),bi=(i,t)=>i.map((e,r)=>t[r]===void 0||t[r]===null?e:{...e,value:oe(t[r])});function vi(i){if(!i)return null;const t=new Date(i);return Number.isNaN(t.getTime())?null:t.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}async function xi(){try{const i=await fetch("stats.json",{cache:"no-cache"});return i.ok?await i.json():null}catch{return null}}function $i(i){const t=vi(i.updated),e={};if(i.strava){const r={};i.strava.groups?.length&&(r.groups=i.strava.groups),i.strava.lines?.length&&(r.lines=i.strava.lines),t&&(r.context=`${C.context} · updated ${t}`),e.ride=r}if(i.lastfm){const r={};i.lastfm.stats?.length&&(r.stats=i.lastfm.stats),i.lastfm.topArtists?.length&&(r.topArtists=i.lastfm.topArtists),i.lastfm.nowPlaying&&(r.nowPlaying={...i.lastfm.nowPlaying,live:!0}),t&&(r.source=`Numbers updated ${t}.`),e.music=r}return e}const wi="https://ws.audioscrobbler.com/2.0/";async function ki(i){const t=w.apiKey,e=async(r,o="")=>{const s=`${wi}?method=${r}&user=${encodeURIComponent(w.user)}&api_key=${encodeURIComponent(t)}&format=json${o}`,n=await fetch(s);if(!n.ok)throw new Error(`Last.fm ${r} -> ${n.status}`);return n.json()};try{const[r,o,s,n]=await Promise.all([e("user.getinfo"),e("user.getlovedtracks","&limit=1"),e("user.gettopartists","&period=1month&limit=5"),e("user.getrecenttracks","&limit=1")]),p=r?.user;if(!p)return null;const l=s?.topartists?.artist,c=n?.recenttracks?.track?.[0],b={stats:bi(i.stats,[p.playcount,p.artist_count,o?.lovedtracks?.["@attr"]?.total]),source:"Live from Last.fm."};return Array.isArray(l)&&(b.topArtists=l.map(u=>({name:`${u.name??""}`,plays:Number(u.playcount??0)}))),c?.["@attr"]?.nowplaying==="true"&&(b.nowPlaying={track:`${c.name??""}`,artist:`${c.artist?.["#text"]??""}`,live:!0}),b}catch{return null}}async function Si(i,t){const e=await xi();e&&(i=Ht(i,$i(e)),t(i));const r=await ki(i.music);r&&(i=Ht(i,{music:r}),t(i))}function _i(i){const t=window;t.requestIdleCallback?t.requestIdleCallback(i,{timeout:2500}):window.setTimeout(i,300)}const se=i=>a`
  <div class="life-stat">
    <ui-typography class="life-value" variant="h5" component="p"
      >${i.value}</ui-typography
    >
    <ui-typography class="life-label" variant="caption"
      >${i.label}</ui-typography
    >
  </div>
`;class Ai extends v{static{this.properties={music:{attribute:!1}}}render(){const{music:t}=this;return a`
      <ui-card padding="lg" elevated class="life-card life-card--music">
        <div class="life-head">
          <ui-typography class="work-context" variant="overline"
            >Last.fm · ${w.since}</ui-typography
          >
          <ui-typography class="work-title" variant="h6" component="h3"
            >Music</ui-typography
          >
        </div>
        <div class="life-stats">${t.stats.map(se)}</div>
        <ui-typography class="life-caption" variant="overline"
          >${w.topWindow}</ui-typography
        >
        <ol class="life-rank">
          ${t.topArtists.map((e,r)=>a`
              <li>
                <ui-typography class="life-index" variant="caption"
                  >${r+1}</ui-typography
                >
                <ui-typography class="life-name" variant="body2"
                  >${e.name}</ui-typography
                >
                <ui-typography class="life-plays" variant="caption"
                  >${oe(e.plays)} plays</ui-typography
                >
              </li>
            `)}
        </ol>
        ${t.nowPlaying?a`<ui-typography class="life-now" variant="body2"
              >${t.nowPlaying.live?a`Playing right now: ${t.nowPlaying.track} by
                  ${t.nowPlaying.artist}.`:a`Stuck on <strong>${t.nowPlaying.track}</strong> by
                  ${t.nowPlaying.artist} right now.`}</ui-typography
            >`:d}
        <ui-link
          class="life-link"
          href=${w.url}
          target="_blank"
          rel="noopener"
          underline="hover"
          >Last.fm profile ${re}</ui-link
        >
        <ui-typography class="life-source" variant="caption"
          >${t.source}</ui-typography
        >
      </ui-card>
    `}}customElements.define("life-music-card",Ai);class Ei extends v{static{this.properties={ride:{attribute:!1}}}render(){const{ride:t}=this;return a`
      <ui-card padding="lg" elevated class="life-card life-card--ride">
        <div class="life-head">
          <ui-typography class="work-context" variant="overline"
            >${t.context}</ui-typography
          >
          <ui-typography class="work-title" variant="h6" component="h3"
            >${C.title}</ui-typography
          >
        </div>
        ${t.groups.map(e=>a`
            <div class="life-group">
              <ui-typography class="life-group-title" variant="overline"
                >${e.title}</ui-typography
              >
              <div class="life-stats">${e.stats.map(se)}</div>
            </div>
          `)}
        ${t.lines.length?a`<ul class="life-list">
              ${t.lines.map(e=>a`<li>
                  <ui-typography variant="body2">${e}</ui-typography>
                </li>`)}
            </ul>`:d}
        ${a`<ui-link
              class="life-link"
              href=${f.strava}
              target="_blank"
              rel="noopener"
              underline="hover"
              >Strava profile ${re}</ui-link
            >`}
      </ui-card>
    `}}customElements.define("life-ride-card",Ei);class Ci extends v{constructor(){super(...arguments),this.cards=yi}static{this.properties={cards:{state:!0}}}wired(){_i(()=>void this.refresh())}async refresh(){await Si(this.cards,t=>{this.cards=t})}render(){const{cards:t}=this;return a`
      <section class="section" id="offscreen" aria-labelledby="offscreen-title">
        <ui-container max-width="lg">
          ${B("Off screen","offscreen","Not work, for once. What's on repeat and how far I ride.")}
          <div class="life-grid reveal">
            <life-music-card .music=${t.music}></life-music-card>
            ${t.ride.groups.length||t.ride.lines.length?a`<life-ride-card .ride=${t.ride}></life-ride-card>`:d}
          </div>
          <div class="photo-strip reveal">
            <ui-image-list
              cols=${4}
              row-height="220px"
              gap=${12}
              class="photo-list"
            >
              ${je.map(e=>a`
                  <ui-image-list-item>
                    <img src=${e.src} alt=${e.alt} loading="lazy" />
                  </ui-image-list-item>
                `)}
            </ui-image-list>
            <ui-typography class="photo-credit" variant="caption"
              >From the bike. More on
              <ui-link
                class="credit-link"
                href=${f.instagram}
                target="_blank"
                rel="noopener"
                underline="hover"
                >Instagram</ui-link
              >.</ui-typography
            >
          </div>
        </ui-container>
      </section>
    `}}customElements.define("site-offscreen",Ci);class zi extends v{async copyEmail(t){const e=document.querySelector(".site-snackbar");try{await navigator.clipboard.writeText(t),e&&(e.message="Email address copied to clipboard",e.open=!0)}catch{window.location.href=`mailto:${t}`}}render(){return a`
      <section class="section" id="contact" aria-labelledby="contact-title">
        <ui-container max-width="lg">
          ${B("Contact","contact")}
          <ui-card padding="lg" elevated class="contact-card reveal">
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
                <ui-link
                  class="contact-link"
                  href=${f.linkedin}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  underline="none"
                >
                  ${ni}
                  <span class="label">
                    <ui-typography
                      class="contact-link-title"
                      variant="subtitle2"
                      component="h3"
                      >LinkedIn</ui-typography
                    >
                    <ui-typography class="contact-link-meta" variant="caption"
                      >linkedin.com/in/anilokay</ui-typography
                    >
                  </span>
                </ui-link>
                <ui-link
                  class="contact-link"
                  href=${f.github}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  underline="none"
                >
                  ${ci}
                  <span class="label">
                    <ui-typography
                      class="contact-link-title"
                      variant="subtitle2"
                      component="h3"
                      >GitHub</ui-typography
                    >
                    <ui-typography class="contact-link-meta" variant="caption"
                      >github.com/justbasicfacts</ui-typography
                    >
                  </span>
                </ui-link>
                ${a`
                      <ui-link
                        class="contact-link"
                        href="mailto:${f.email}"
                        color="inherit"
                        underline="none"
                        @click=${t=>{const e=t;e.metaKey||e.ctrlKey||(t.preventDefault(),this.copyEmail(f.email))}}
                      >
                        ${pi}
                        <span class="label">
                          <ui-typography
                            class="contact-link-title"
                            variant="subtitle2"
                            component="h3"
                            >Email</ui-typography
                          >
                          <ui-typography class="contact-link-meta" variant="caption"
                            >${f.email} · click to copy</ui-typography
                          >
                        </span>
                      </ui-link>
                    `}
              </div>
            </div>
          </ui-card>
        </ui-container>
      </section>
    `}}customElements.define("site-contact",zi);class Ti extends v{render(){const t=[{label:"LinkedIn",href:f.linkedin},{label:"GitHub",href:f.github},{label:"Last.fm",href:w.url},{label:"Strava",href:f.strava},{label:"Instagram",href:f.instagram}].filter(e=>e.href);return a`
      <footer class="site-footer">
        <ui-container max-width="lg">
          <div class="footer-inner">
            <ui-typography class="footer-text" variant="caption"
              >© ${new Date().getFullYear()} ${f.name} · Berlin,
              Germany</ui-typography
            >
            <ui-typography class="footer-text" variant="caption">
              Built with the component library I'm working on: web components and
              design tokens.
            </ui-typography>
            <ui-typography class="footer-text" variant="caption">
              ${t.map((e,r)=>a`${r?" · ":""}<ui-link
                    class="footer-link"
                    href=${e.href}
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                    underline="none"
                    >${e.label}</ui-link
                  >`)}
            </ui-typography>
          </div>
        </ui-container>
      </footer>
    `}}customElements.define("site-footer",Ti);class Bi extends v{constructor(){super(...arguments),this.closeDrawer=t=>{const r=t.currentTarget.closest("ui-drawer");r&&(r.open=!1)}}render(){return a`
      <ui-drawer
        anchor="right"
        variant="temporary"
        width="280px"
        class="site-drawer"
      >
        <div class="drawer-panel">
          <strong>${f.name}</strong>
          <nav aria-label="Sections">
            ${Jt.map(t=>a`<ui-link
                class="drawer-link"
                href="#${t.id}"
                color="inherit"
                underline="none"
                @click=${this.closeDrawer}
                >${t.label}</ui-link
              >`)}
          </nav>
        </div>
      </ui-drawer>
    `}}customElements.define("site-drawer",Bi);class Pi extends v{async wired(){await Promise.all([...this.children].map(t=>t.updateComplete)),jt(),window.addEventListener("resize",jt)}render(){return a`
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
    `}}function jt(){const i=window.innerWidth,t=document.querySelector("ui-masonry");t&&(t.columns=i<700?1:i<1080?2:3);const e=document.querySelector(".photo-list");e&&(e.cols=i<720?2:4);const r=i<760;document.querySelectorAll("[data-variant-lg]").forEach(o=>{const s=r?o.dataset.variantSm:o.dataset.variantLg;s&&(o.variant=s)})}customElements.define("site-page",Pi);ee(Xe());
