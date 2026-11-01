(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,610,e=>{"use strict";let t={andy:{name:"Andy",email:"andy@example.com",image:"/images/demo/avatars/andy.png"},mara:{name:"Mara Silva",image:"/images/demo/avatars/mara.png"},jules:{name:"Jules Chen",image:"/images/demo/avatars/jules.png"}},r=new Set(Object.values(t).map(e=>e.image));e.s(["sampleAvatarUrls",0,r,"samplePeople",0,t])},41048,e=>{"use strict";var t=e.i(54371);function r(e){return{state:e,token:null,scope:null,project:null,deploymentId:null,identify:null,guest:!1}}function n(e){return null===e||"object"!=typeof e?null:"string"==typeof e.name&&"number"==typeof e.version&&"string"==typeof e.dashboardUrl&&/^https?:\/\//.test(e.dashboardUrl)?{name:e.name,version:e.version,dashboardUrl:e.dashboardUrl,slug:"string"==typeof e.slug?e.slug:null,orgSlug:"string"==typeof e.orgSlug?e.orgSlug:null}:null}function o(e){return null!==e&&"object"==typeof e&&"string"==typeof e.id&&"string"==typeof e.name}function a(e){return null!==e&&"object"==typeof e&&"string"==typeof e.id&&"string"==typeof e.route&&"number"==typeof e.offsetXPct&&"number"==typeof e.offsetYPct&&Array.isArray(e.comments)}var i,l,s,d,c,u,p,h,f,m,g,b,w,v,y={},x=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,k=Array.isArray;function E(e,t){for(var r in t)e[r]=t[r];return e}function C(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function T(e,t,r){var n,o,a,l={};for(a in t)"key"==a?n=t[a]:"ref"==a?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?i.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===l[a]&&(l[a]=e.defaultProps[a]);return S(e,l,n,o,null)}function S(e,t,r,n,o){var a={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++s,__i:-1,__u:0};return null==o&&null!=l.vnode&&l.vnode(a),a}function z(e){return e.children}function A(e,t){this.props=e,this.context=t}function $(e,t){if(null==t)return e.__?$(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e;return"function"==typeof e.type?$(e):null}function M(e){(!e.__d&&(e.__d=!0)&&d.push(e)&&!L.__r++||c!=l.debounceRendering)&&((c=l.debounceRendering)||u)(L)}function L(){try{for(var e,t=1;d.length;)d.length>t&&d.sort(p),e=d.shift(),t=d.length,function(e){if(e.__P&&e.__d){var t=e.__v,r=t.__e,n=[],o=[],a=E({},t);a.__v=t.__v+1,l.vnode&&l.vnode(a),P(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[r]:null,n,r??$(t),!!(32&t.__u),o),a.__v=t.__v,a.__.__k[a.__i]=a,j(n,a,o),t.__e=t.__=null,a.__e!=r&&function e(t){if(null!=(t=t.__)&&null!=t.__c)return t.__e=t.__c.base=null,t.__k.some(function(e){if(null!=e&&null!=e.__e)return t.__e=t.__c.base=e.__e}),e(t)}(a)}}(e)}finally{d.length=L.__r=0}}function R(e,t,r,n,o,a,i,s,d,c,u){var p,h,f,m,g,b,w,v=n&&n.__k||x,_=t.length;for(d=function(e,t,r,n,o){var a,i,s,d,c,u=r.length,p=u,h=0;for(e.__k=Array(o),a=0;a<o;a++)null!=(i=t[a])&&"boolean"!=typeof i&&"function"!=typeof i?("string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?i=e.__k[a]=S(null,i,null,null,null):k(i)?i=e.__k[a]=S(z,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?i=e.__k[a]=S(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[a]=i,d=a+h,i.__=e,i.__b=e.__b+1,s=null,-1!=(c=i.__i=function(e,t,r,n){var o,a,i,l=e.key,s=e.type,d=t[r],c=null!=d&&(2&d.__u)==0;if(null===d&&null==l||c&&l==d.key&&s==d.type)return r;if(n>+!!c){for(o=r-1,a=r+1;o>=0||a<t.length;)if(null!=(d=t[i=o>=0?o--:a++])&&(2&d.__u)==0&&l==d.key&&s==d.type)return i}return -1}(i,r,d,p))&&(p--,(s=r[c])&&(s.__u|=2)),null==s||null==s.__v?(-1==c&&(o>u?h--:o<u&&h++),"function"!=typeof i.type&&(i.__u|=4)):c!=d&&(c==d-1?h--:c==d+1?h++:(c>d?h--:h++,i.__u|=4))):e.__k[a]=null;if(p)for(a=0;a<u;a++)null!=(s=r[a])&&(2&s.__u)==0&&(s.__e==n&&(n=$(s)),function e(t,r,n){var o,a;if(l.unmount&&l.unmount(t),(o=t.ref)&&(o.current&&o.current!=t.__e||H(o,null,r)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){l.__e(e,r)}o.base=o.__P=null}if(o=t.__k)for(a=0;a<o.length;a++)o[a]&&e(o[a],r,n||"function"!=typeof t.type);n||C(t.__e),t.__c=t.__=t.__e=void 0}(s,s));return n}(r,t,v,d,_),p=0;p<_;p++)null!=(f=r.__k[p])&&(h=-1!=f.__i&&v[f.__i]||y,f.__i=p,b=P(e,f,h,o,a,i,s,d,c,u),m=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&H(h.ref,null,f),u.push(f.ref,f.__c||m,f)),null==g&&null!=m&&(g=m),(w=!!(4&f.__u))||h.__k===f.__k?(d=function e(t,r,n,o){var a,i;if("function"==typeof t.type){for(a=t.__k,i=0;a&&i<a.length;i++)a[i]&&(a[i].__=t,r=e(a[i],r,n,o));return r}t.__e!=r&&(o&&(r&&t.type&&!r.parentNode&&(r=$(t)),n.insertBefore(t.__e,r||null)),r=t.__e);do r=r&&r.nextSibling;while(null!=r&&8==r.nodeType)return r}(f,d,e,w),w&&h.__e&&(h.__e=null)):"function"==typeof f.type&&void 0!==b?d=b:m&&(d=m.nextSibling),f.__u&=-7);return r.__e=g,d}function I(e,t,r){"-"==t[0]?e.setProperty(t,r??""):e[t]=null==r?"":"number"!=typeof r||_.test(t)?r:r+"px"}function N(e,t,r,n,o){var a,i;e:if("style"==t)if("string"==typeof r)e.style.cssText=r;else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||I(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||I(e.style,t,r[t])}else if("o"==t[0]&&"n"==t[1])a=t!=(t=t.replace(g,"$1")),t=(i=t.toLowerCase())in e||"onFocusOut"==t||"onFocusIn"==t?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=r,r?n?r[m]=n[m]:(r[m]=b,e.addEventListener(t,a?v:w,a)):e.removeEventListener(t,a?v:w,a);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=r??"";break e}catch{}"function"==typeof r||(null==r||!1===r&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==r?"":r))}}function O(e){return function(t){if(this.l){var r=this.l[t.type+e];if(null==t[f])t[f]=b++;else if(t[f]<r[m])return;return r(l.event?l.event(t):t)}}}function P(e,t,r,n,o,a,s,d,c,u){var p,h,f,m,g,b,w,v,_,T,S,M,L,I,O,P=t.type;if(void 0!==t.constructor)return null;128&r.__u&&(c=!!(32&r.__u),a=[d=t.__e=r.__e]),(p=l.__b)&&p(t);e:if("function"==typeof P)try{if(v=t.props,_=P.prototype&&P.prototype.render,T=(p=P.contextType)&&n[p.__c],S=p?T?T.props.value:p.__:n,r.__c?w=(h=t.__c=r.__c).__=h.__E:(_?t.__c=h=new P(v,S):(t.__c=h=new A(v,S),h.constructor=P,h.render=F),T&&T.sub(h),h.state||(h.state={}),h.__n=n,f=h.__d=!0,h.__h=[],h._sb=[]),_&&null==h.__s&&(h.__s=h.state),_&&null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=E({},h.__s)),E(h.__s,P.getDerivedStateFromProps(v,h.__s))),m=h.props,g=h.state,h.__v=t,f)_&&null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),_&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(_&&null==P.getDerivedStateFromProps&&v!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(v,S),t.__v==r.__v||!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(v,h.__s,S)){t.__v!=r.__v&&(h.props=v,h.state=h.__s,h.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(e){e&&(e.__=t)}),x.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&s.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(v,h.__s,S),_&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(m,g,b)})}if(h.context=S,h.props=v,h.__P=e,h.__e=!1,M=l.__r,L=0,_)h.state=h.__s,h.__d=!1,M&&M(t),p=h.render(h.props,h.state,h.context),x.push.apply(h.__h,h._sb),h._sb=[];else do h.__d=!1,M&&M(t),p=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++L<25)h.state=h.__s,null!=h.getChildContext&&(n=E(E({},n),h.getChildContext())),_&&!f&&null!=h.getSnapshotBeforeUpdate&&(b=h.getSnapshotBeforeUpdate(m,g)),I=null!=p&&p.type===z&&null==p.key?function e(t){return"object"!=typeof t||null==t||t.__b>0?t:k(t)?t.map(e):void 0!==t.constructor?null:E({},t)}(p.props.children):p,d=R(e,k(I)?I:[I],t,r,n,o,a,s,d,c,u),h.base=t.__e,t.__u&=-161,h.__h.length&&s.push(h),w&&(h.__E=h.__=null)}catch(e){if(t.__v=null,c||null!=a)if(e.then){for(t.__u|=c?160:128;d&&8==d.nodeType&&d.nextSibling;)d=d.nextSibling;a[a.indexOf(d)]=null,t.__e=d}else{for(O=a.length;O--;)C(a[O]);D(t)}else t.__e=r.__e,t.__k=r.__k,e.then||D(t);l.__e(e,t,r)}else null==a&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=function(e,t,r,n,o,a,s,d,c){var u,p,h,f,m,g,b,w=r.props||y,v=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=a){for(u=0;u<a.length;u++)if((m=a[u])&&"setAttribute"in m==!!x&&(x?m.localName==x:3==m.nodeType)){e=m,a[u]=null;break}}if(null==e){if(null==x)return document.createTextNode(v);e=document.createElementNS(o,x,v.is&&v),d&&(l.__m&&l.__m(t,a),d=!1),a=null}if(null==x)w===v||d&&e.data==v||(e.data=v);else{if(a="textarea"==x&&null!=v.defaultValue?null:a&&i.call(e.childNodes),!d&&null!=a)for(w={},u=0;u<e.attributes.length;u++)w[(m=e.attributes[u]).name]=m.value;for(u in w)m=w[u],"dangerouslySetInnerHTML"==u?h=m:"children"==u||u in v||"value"==u&&"defaultValue"in v||"checked"==u&&"defaultChecked"in v||N(e,u,null,m,o);for(u in v)m=v[u],"children"==u?f=m:"dangerouslySetInnerHTML"==u?p=m:"value"==u?g=m:"checked"==u?b=m:d&&"function"!=typeof m||w[u]===m||N(e,u,m,w[u],o);if(p)d||h&&(p.__html==h.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(h&&(e.innerHTML=""),R("template"==t.type?e.content:e,k(f)?f:[f],t,r,n,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,a,s,a?a[0]:r.__k&&$(r,0),d,c),null!=a)for(u=a.length;u--;)C(a[u]);d&&"textarea"!=x||(u="value","progress"==x&&null==g?e.removeAttribute("value"):null==g||g===e[u]&&("progress"!=x||g)&&("option"!=x||g==w[u])||N(e,u,g,w[u],o),u="checked",null!=b&&b!=e[u]&&N(e,u,b,w[u],o))}return e}(r.__e,t,r,n,o,a,s,c,u);return(p=l.diffed)&&p(t),128&t.__u?void 0:d}function D(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(D))}function j(e,t,r){for(var n=0;n<r.length;n++)H(r[n],r[++n],r[++n]);l.__c&&l.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){l.__e(e,t.__v)}})}function H(e,t,r){try{if("function"==typeof e){var n="function"==typeof e.__u;n&&e.__u(),n&&null==t||(e.__u=e(t))}else e.current=t}catch(e){l.__e(e,r)}}function F(e,t,r){return this.constructor(e,r)}function U(e,t,r){var n,o,a;t==document&&(t=document.documentElement),l.__&&l.__(e,t),n=t.__k,o=[],a=[],P(t,e=t.__k=T(z,null,[e]),n||y,y,t.namespaceURI,n?null:t.firstChild?i.call(t.childNodes):null,o,n?n.__e:t.firstChild,!1,a),j(o,e,a)}i=x.slice,l={__e:function(e,t,r,n){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,n||{}),i=o.__d),i)return o.__E=o}catch(t){e=t}throw e}},s=0,A.prototype.setState=function(e,t){var r;r=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=E({},this.state),"function"==typeof e&&(e=e(E({},r),this.props)),e&&E(r,e),null!=e&&this.__v&&(t&&this._sb.push(t),M(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),M(this))},A.prototype.render=z,d=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p=function(e,t){return e.__v.__b-t.__v.__b},L.__r=0,f="__d"+(h=Math.random().toString(8)),m="__a"+h,g=/(PointerCapture)$|Capture$/i,b=0,w=O(!1),v=O(!0);var q="data-artor-web-sdk";function B(e){return e instanceof Element&&null!==e.closest(`[${q}]`)}function X(e){return e instanceof Element&&e.hasAttribute(q)}var Y="u">typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):Date.now.bind(Date);function W(e){try{return e.matches(":popover-open")}catch{return null}}function V(e){let t=e.composedPath?.();if(t&&t.length){let e=t[0];if(e instanceof Element)return e}return e.target instanceof Element?e.target:null}function G(e,t){let r=null;try{r=e.querySelector(t)}catch{return null}if(r)return r;for(let r of Array.from(e.querySelectorAll?.("*")??[])){let e=r.shadowRoot;if(e){let r=G(e,t);if(r)return r}}return null}function K(e,t=q){return!e||"HTML"===e.tagName||"BODY"===e.tagName||e.closest(`[${t}]`)?null:e}var J=/\d/;function Z(e){return/^[a-zA-Z][a-zA-Z-]{1,39}$/.test(e)&&!J.test(e)&&!e.includes("--")}function Q(e){return"u">typeof CSS&&CSS.escape?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,"\\$&")}function ee(e){return e.replace(/["\\]/g,"\\$&")}function et(e){if(e.id&&Z(e.id))return`#${Q(e.id)}`;let t=function(e){let t=e.getAttribute("data-testid");if(t)return`[data-testid="${ee(t)}"]`;for(let t of Array.from(e.attributes))if(t.name.startsWith("data-")&&"data-artor-web-sdk"!==t.name&&t.value)return`[${t.name}="${ee(t.value)}"]`;return null}(e);return t?`${e.tagName.toLowerCase()}${t}`:null}function er(e){let t=et(e);if(t)return t.length<=256?t:null;let r=[],n=e,o=0;for(;n&&1===n.nodeType&&"BODY"!==n.tagName&&"HTML"!==n.tagName&&o<5;){let e=et(n);if(e){r.unshift(e);break}r.unshift(function(e){let t=e.tagName.toLowerCase(),r=Array.from(e.classList).filter(Z).slice(0,1);r.length&&(t+=`.${Q(r[0])}`);let n=e.parentElement;if(n){let r=Array.from(n.children).filter(t=>t.tagName===e.tagName);r.length>1&&(t+=`:nth-of-type(${r.indexOf(e)+1})`)}return t}(n)),n=n.parentElement,o++}if(!r.some(e=>e.startsWith("#")||e.includes("[data-")))return null;let a=r.join(" > ");return a.length<=256?a:null}var en={BUTTON:"button",A:"link",INPUT:"textbox",SELECT:"combobox",TEXTAREA:"textbox",NAV:"navigation",H1:"heading",H2:"heading",H3:"heading",IMG:"img"};function eo(e){return e.getAttribute("role")??en[e.tagName]??null}function ea(e){let t=(e.getAttribute("aria-label")??e.getAttribute("alt")??e.textContent??"").trim().replace(/\s+/g," ");return t?t.slice(0,256):null}function ei(e){return Number.isFinite(e)?e<0?0:e>100?100:e:0}function el(e){return e.trim().replace(/\s+/g," ")}function es(e,t,r){if(t<0||r<=t||r>e.starts.length)return null;let n=e.starts[t],o=e.ends[r-1];return void 0===n||void 0===o?null:{start:n,end:o}}function ed(e,t){for(let r of e)if(t>=r.start&&t<=r.end)return{node:r.node,offset:t-r.start};return null}function ec(e,t){if("text"===e.kind&&e.textRange){let{quote:n,prefix:o,suffix:a}=e.textRange,i=function(e,t,r,n,o){if(!r)return null;try{let a,{text:i,spans:l}=function(e,t){let r=[],n="",o=t.createTreeWalker(e,NodeFilter.SHOW_TEXT),a=o.nextNode();for(;a;){let e=a,t=e.textContent??"";r.push({node:e,start:n.length,end:n.length+t.length}),n+=t,a=o.nextNode()}return{text:n,spans:r}}(e,t);if(!i)return null;let s=el(r);if(!s)return null;let d=function(e){let t=[],r=[],n=[],o=e.length,a=0;for(;a<o&&/\s/.test(e[a]);)a++;for(;a<o;){let i=e[a];if(/\s/.test(i)){let i=a;for(;i<o&&/\s/.test(e[i]);)i++;if(i>=o){a=i;break}t.push(" "),r.push(a),n.push(i),a=i}else t.push(i),r.push(a),n.push(a+1),a++}return{normalized:t.join(""),starts:r,ends:n}}(i);if(!d.normalized)return null;let c=[];for(let e=d.normalized.indexOf(s);-1!==e;e=d.normalized.indexOf(s,e+1))c.push(e);if(0===c.length)return null;if(1===c.length)a=es(d,c[0],c[0]+s.length);else{let e=[];for(let t of c){let r=es(d,t,t+s.length);if(!r)continue;let a=i.slice(Math.max(0,r.start-n.length),r.start),l=i.slice(r.end,r.end+o.length);(""===n||a===n)&&(""===o||l===o)&&e.push(r)}if(1!==e.length)return null;a=e[0]}if(!a)return null;let u=ed(l,a.start),p=ed(l,a.end);if(!u||!p)return null;let h=t.createRange();return h.setStart(u.node,u.offset),h.setEnd(p.node,p.offset),h}catch{return null}}(function(e,t){if(e.elementSelector){let r=G(t,e.elementSelector);if(r)return r}return t.body??t.documentElement}(e,t),t,n,o,a);if(i){var r;let e=(r=i.startContainer)?r.nodeType===Node.ELEMENT_NODE?r:r.parentElement:null;if(e)return{el:e,via:"text-range",range:i,exact:!0}}}let n=e.elementSelector?G(t,e.elementSelector):null;if(e.anchorText){let r=e.anchorText,o=t=>ea(t)===r&&(!e.anchorRole||eo(t)===e.anchorRole),a=function(e,t,r=50){let n=[],o=e=>{if(!(n.length>=r))for(let a of Array.from(e.querySelectorAll?.("*")??[])){if(n.length>=r)return;t(a)&&n.push(a);let e=a.shadowRoot;e&&o(e)}};return o(e),n}(t,o);if(a.length>0)return n&&(a.includes(n)||o(n))?{el:n,via:"text",exact:!0}:{el:a.find(eu)??a[0],via:"text",exact:!e.elementSelector}}if(e.elementSelector){if(n)return{el:n,via:"selector",exact:!0};let r=function(e,t){let r=e.split(" > ");for(let e=r.length-1;e>=1;e--){let n=G(t,r.slice(0,e).join(" > "));if(n)return n}return null}(e.elementSelector,t);if(r&&function(e,t){let r=t.defaultView;if(!r)return!0;try{let t=e.getBoundingClientRect();return t.height<=r.innerHeight&&t.width<=r.innerWidth}catch{return!1}}(r,t))return{el:r,via:"ancestor",exact:!1}}return{el:null,via:"note",exact:!1}}function eu(e){try{return e.getClientRects().length>0}catch{return!1}}function ep(e,t,r){let n=e.getBoundingClientRect();return{x:n.left+t/100*n.width,y:n.top+r/100*n.height}}var eh,ef,em,eg,eb={count:0,resume:()=>{}},ew=-1,ev=null,ey=0,ex=[],e_=l,ek=e_.__b,eE=e_.__r,eC=e_.diffed,eT=e_.__c,eS=e_.unmount,ez=e_.__;function eA(e,t){e_.__h&&e_.__h(ef,e,ey||t),ey=0;var r=ef.__H||(ef.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function e$(e){return ey=1,eM(eH,e)}function eM(e,t,r){var n=eA(eh++,2);if(n.t=e,!n.__c&&(n.__=[eH(void 0,t),function(e){var t=n.__N?n.__N[0]:n.__[0],r=n.t(t,e);t!==r&&(n.__N=[r,n.__[1]],n.__c.setState({}))}],n.__c=ef,!ef.__f)){var o=function(e,t,r){if(!n.__c.__H)return!0;var o=n.__c.__H.__.filter(function(e){return e.__c});if(o.every(function(e){return!e.__N}))return!a||a.call(this,e,t,r);var i=n.__c.props!==e;return o.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(i=!0)}}),a&&a.call(this,e,t,r)||i};ef.__f=!0;var a=ef.shouldComponentUpdate,i=ef.componentWillUpdate;ef.componentWillUpdate=function(e,t,r){if(this.__e){var n=a;a=void 0,o(e,t,r),a=n}i&&i.call(this,e,t,r)},ef.shouldComponentUpdate=o}return n.__N||n.__}function eL(e,t){var r=eA(eh++,3);!e_.__s&&ej(r.__H,t)&&(r.__=e,r.u=t,ef.__H.__h.push(r))}function eR(e){return ey=5,eI(function(){return{current:e}},[])}function eI(e,t){var r=eA(eh++,7);return ej(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function eN(){for(var e;e=ex.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(eP),t.__h.some(eD),t.__h=[]}catch(r){t.__h=[],e_.__e(r,e.__v)}}}e_.__b=function(e){ef=null,ek&&ek(e)},e_.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ez&&ez(e,t)},e_.__r=function(e){eE&&eE(e),eh=0;var t=(ef=e.__c).__H;t&&(em===ef?(t.__h=[],ef.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(eP),t.__h.some(eD),t.__h=[],eh=0)),em=ef},e_.diffed=function(e){eC&&eC(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==ex.push(t)&&eg===e_.requestAnimationFrame||((eg=e_.requestAnimationFrame)||function(e){var t,r=function(){clearTimeout(n),eO&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);eO&&(t=requestAnimationFrame(r))})(eN)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),em=ef=null},e_.__c=function(e,t){t.some(function(e){try{e.__h.some(eP),e.__h=e.__h.filter(function(e){return!e.__||eD(e)})}catch(r){t.some(function(e){e.__h&&(e.__h=[])}),t=[],e_.__e(r,e.__v)}}),eT&&eT(e,t)},e_.unmount=function(e){eS&&eS(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.some(function(e){try{eP(e)}catch(e){t=e}}),r.__H=void 0,t&&e_.__e(t,r.__v))};var eO="function"==typeof requestAnimationFrame;function eP(e){var t=ef,r=e.__c;"function"==typeof r&&(e.__c=void 0,r()),ef=t}function eD(e){var t=ef;e.__c=e.__(),ef=t}function ej(e,t){return!e||e.length!==t.length||t.some(function(t,r){return t!==e[r]})}function eH(e,t){return"function"==typeof t?t(e):t}var eF=RegExp("@\\[([A-Za-z0-9_-]{1,256})\\]","g"),eU="@unknown";function eq(e){let t=[],r=0;for(let n of e.matchAll(eF)){let o=n.index;o>r&&t.push({type:"text",value:e.slice(r,o)}),t.push({type:"mention",id:n[1]}),r=o+n[0].length}return r<e.length&&t.push({type:"text",value:e.slice(r)}),t}function eB(e,t){return eq(e).map(e=>{if("text"===e.type)return e.value;let r=t.get(e.id);return r?`@${r}`:eU}).join("")}function eX(e,t=Date.now()){if(!e)return"just now";let r=Date.parse(e);if(Number.isNaN(r))return"just now";let n=Math.floor((t-r)/1e3);if(n<60)return"just now";let o=Math.floor(n/60);if(o<60)return`${o}m ago`;let a=Math.floor(o/60);if(a<24)return`${a}h ago`;let i=Math.floor(a/24);if(i<7)return`${i}d ago`;let l=Math.floor(i/7);if(l<5)return`${l}w ago`;let s=Math.floor(i/30);return i<365?`${s}mo ago`:`${Math.floor(i/365)}y ago`}function eY(e){if(!e)return"";let t=Date.parse(e);if(Number.isNaN(t))return"";let r=new Date(t),n=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(r),o=new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"}).format(r);return`${n}, ${o}`}function eW(e){return e>99?"99+":String(e)}function eV(e){return e?{position:"fixed",left:"0",top:"0",transform:`translate(${e.left}px, ${e.top}px)`,width:`${e.width}px`,height:`${e.height}px`,pointerEvents:"none",boxSizing:"border-box"}:{display:"none"}}function eG(e){let t=eo(e),r=ea(e),n=r&&r.length>32?r.slice(0,31)+"…":r;return t&&n?`${t} \xb7 "${n}"`:t||(n?`"${n}"`:e.tagName.toLowerCase())}function eK(e,t,r){return{left:Math.min(Math.max(0,e.left),Math.max(0,r.width-t.width)),top:Math.min(Math.max(0,e.top),Math.max(0,r.height-t.height))}}var eJ=0;function eZ(e,t,r,n,o,a){t||(t={});var i,s,d=t;if("ref"in d)for(s in d={},t)"ref"==s?i=t[s]:d[s]=t[s];var c={type:e,props:d,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--eJ,__i:-1,__u:0,__source:o,__self:a};if("function"==typeof e&&(i=e.defaultProps))for(s in i)void 0===d[s]&&(d[s]=i[s]);return l.vnode&&l.vnode(c),c}function eQ(e){let t="text"===e.kind&&null!=e.textRange;return{kind:t?"text":"element",anchorText:e.anchorText,anchorRole:e.anchorRole,elementSelector:e.elementSelector,offsetXPct:e.offsetXPct,offsetYPct:e.offsetYPct,route:e.route,scrollY:0,textRange:t?e.textRange:null}}function e0(e){return e instanceof HTMLElement&&("INPUT"===e.tagName||"TEXTAREA"===e.tagName||e.isContentEditable)}function e1({client:e,controller:t,root:r=null}){var n,o;let a,i,l,s,[,d]=eM((e,t)=>e+1,0);eL(()=>t.subscribe(()=>d()),[t]),eL(()=>(function(e,t,r,n={}){let o=n.delayMs??150,a=n.minIntervalMs??400,i=n.maxWaitMs??1e3,l=n.refillCooldownMs??1e3,s=n.maxRefillCooldownMs??1e4,d=n.now??(()=>performance.now()),c=0,u=-1/0,p=0,h=!1,f=-1/0,m=0,g=!1,b=0,w=()=>{if(c=0,h)return;let e=d()-u;if(e<a){c=t.setTimeout(w,a-e);return}if(p=0,!r.needsReresolve())return;u=d();let n=!1;try{n=r.reresolve()}catch{}g&&(m=n?0:m+1,g=!1)},v=()=>{if(h||!r.needsReresolve())return;let e=d();c||(p=e);let n=Math.max(0,Math.min(o,p+i-e));c&&t.clearTimeout(c),c=t.setTimeout(w,n)},y=new MutationObserver(e=>{let t=r.needsReresolve();!(!t&&!r.canRefill()||!t&&!e.some(e=>{for(let t of e.addedNodes)if(1===t.nodeType)return!0;return!1})||e.every(e=>{let t=e.target,r=1===t.nodeType?t:t.parentElement;try{return B(r)}catch{return!1}}))&&(t||x(),v())});try{y.observe(e.documentElement,{childList:!0,subtree:!0})}catch{}let x=()=>{let e=Math.min(s,l*2**Math.min(m,30)),n=d();if(n-f<e){b||(b=t.setTimeout(()=>{b=0,h||(x(),v())},e-(n-f)));return}g&&(m+=1),f=n,g=!0,r.retryUnanchored()},_=e=>{X(e.target)||(x(),v())};return e.addEventListener("toggle",_,!0),{teardown:()=>{h=!0,y.disconnect(),e.removeEventListener("toggle",_,!0),c&&t.clearTimeout(c),b&&t.clearTimeout(b),c=0,b=0}}})(document,window,t).teardown,[t]);let[c,u]=e$(!1),[p,h]=e$(null),[f,m]=e$(null),g=eR(null),[b,w]=e$(null),[v,y]=e$(""),[x,_]=e$(!1),[k,E]=e$(!1),C=eR(null),[T,S]=e$(null),[A,$]=e$(null),[M,L]=e$(null),[R,I]=e$(null),[N,O]=e$(!1),[P,D]=e$(!1),[j,H]=e$(!1),[F,U]=e$(!1),[q,Y]=e$(!1),[W,G]=e$(!1);eL(()=>{G(!0);let e=window.setTimeout(()=>G(!1),340);return()=>window.clearTimeout(e)},[q]);let[J,Z]=e$(!1),[Q,ee]=e$(!1),et=eR(null),[en,es]=e$(!1),[ed,ec]=e$(!1),[eu,ep]=e$(null),eh=eR(null),[ef,em]=e$(null),[eg,ev]=e$("page"),[ey,ex]=e$(null),[e_,ek]=e$(!1),[eE,eC]=e$(!1),[eT,eS]=e$(!1),[ez,eA]=e$(!1),[eN,eO]=e$(null),[eP,eD]=e$(null),[ej,eH]=e$(null),[eF,eU]=e$(null),[eq,eB]=e$({}),[eX,eY]=e$({}),[eW,eV]=e$(null),[,eJ]=e$(0),[eQ,e8]=e$(!1),[e6,e9]=e$([]),[ti,tl]=e$(!1),[ts,td]=e$(null),[th,tf]=e$({}),tm=eR(!1),tg=e.widgetState(),tb="guest"===tg||"guest-identify"===tg||"guest-readonly"===tg,tw="full"===tg||"guest"===tg||"guest-identify"===tg,tv=e.projectInfo(),ty=e.scopeEpoch(),tx=t.threads(),t_=t.loading(),tk=e=>eq[e.id]??e.resolved,tE=e=>eX[e.id]??e.aiIgnored??!1,tC=eI(()=>new Map(e6.map(e=>[e.id,e.name])),[e6]),tT=tx.filter(e=>e.hasElement),tM=tT.filter(e=>!tk(e.thread)),tL=tT.filter(e=>tk(e.thread)),tR=tx.filter(e=>tk(e.thread)).length,tN=!j,tP=ef?tx.find(e=>e.thread.id===ef)??null:null;eL(()=>{if(!c){h(null),m(null);return}let e=document.documentElement.style.cursor;document.documentElement.style.cursor=t2;let t=e=>{if(e.ctrlKey){h(null),m(null);return}try{let t=K(V(e));h(t?t.getBoundingClientRect():null),m(t)}catch{h(null),m(null)}},r=e=>{var t,r,n;let o,a,i;if(b||e.ctrlKey)return;let l=V(e);!(l&&(B(l)||g.current?.contains(l)))&&(e.preventDefault(),e.stopPropagation(),h(null),m(null),l)&&t9((t=e.clientX,r=e.clientY,n=window,a=(o=l.getBoundingClientRect()).width||1,i=o.height||1,{kind:"element",anchorText:ea(l),anchorRole:eo(l),elementSelector:er(l),offsetXPct:ei((t-o.left)/a*100),offsetYPct:ei((r-o.top)/i*100),route:n.location.pathname+n.location.search,scrollY:Math.max(0,Math.trunc(n.scrollY)),textRange:null}),{x:e.clientX,y:e.clientY},l)},n=t=>{"Control"===t.key&&(document.documentElement.style.cursor=e,h(null),m(null))},o=e=>{"Control"===e.key&&(document.documentElement.style.cursor=t2)},a=()=>{document.documentElement.style.cursor=t2},i=e=>{"Escape"===e.key&&(b||(u(!1),h(null),m(null)))};return window.addEventListener("pointerdown",r,{capture:!0}),window.addEventListener("pointermove",t,{capture:!0}),window.addEventListener("keydown",i,{capture:!0}),window.addEventListener("keydown",n,{capture:!0}),window.addEventListener("keyup",o,{capture:!0}),window.addEventListener("blur",a),()=>{document.documentElement.style.cursor=e,window.removeEventListener("pointerdown",r,{capture:!0}),window.removeEventListener("pointermove",t,{capture:!0}),window.removeEventListener("keydown",i,{capture:!0}),window.removeEventListener("keydown",n,{capture:!0}),window.removeEventListener("keyup",o,{capture:!0}),window.removeEventListener("blur",a)}},[c,b]),eL(()=>{if(!c||b)return;let e=g.current;if(!e)return;let t=e=>{(e.target instanceof Element?e.target:null)?.closest('[data-tool="comment"]')||(u(!1),h(null),m(null))};return e.addEventListener("pointerdown",t,{capture:!0}),()=>e.removeEventListener("pointerdown",t,{capture:!0})},[c,b]),eL(()=>{if(!b)return;let e=r?.host??null,t=e=>e?.closest(".artor-composer")!=null,n=e=>{t(e.target instanceof Element?e.target:null)||rr.current(e)},o=r=>{let n=V(r);(e?n===e:t(n))||rr.current(r)},a=e=>{!(e instanceof KeyboardEvent)||"Escape"!==e.key||t(e.target instanceof Element?e.target:null)||rr.current(e)},i=r=>{if("Escape"!==r.key)return;let n=V(r);(e?n===e:t(n))||rr.current(r)};return r?.addEventListener("pointerdown",n,{capture:!0}),r?.addEventListener("keydown",a,{capture:!0}),window.addEventListener("pointerdown",o,{capture:!0}),window.addEventListener("keydown",i,{capture:!0}),()=>{r?.removeEventListener("pointerdown",n,{capture:!0}),r?.removeEventListener("keydown",a,{capture:!0}),window.removeEventListener("pointerdown",o,{capture:!0}),window.removeEventListener("keydown",i,{capture:!0})}},[b,r]),eL(()=>{if(!tw||b||ed)return;let e=e=>{if(!(e.metaKey||e.ctrlKey||e.altKey)&&!(e0(V(e))||e0(r?.activeElement??null)))switch(e.key.toLowerCase()){case"c":e.preventDefault(),u(e=>!e);break;case"v":e.preventDefault(),H(e=>!e);break;case"r":e.preventDefault(),ee(e=>!e);break;case"m":e.preventDefault(),Y(e=>!e);break;case"p":e.preventDefault(),Z(e=>!e);break;case"t":e.preventDefault(),tJ.current()}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[tw,b,ed,r]),eL(()=>{if(!J)return;let e=document.createElement("style");e.textContent="*, *::before, *::after { animation-play-state: paused !important; transition-duration: 0s !important; transition-delay: 0s !important; }",document.head.appendChild(e);let t=[],r=()=>{let e=function(e){let t=[],r=[];try{r=e.getAnimations?.()??[]}catch{return eb}for(let e of r)try{if("running"!==e.playState||!function(e){let t=e.effect;if(!t)return!1;let r=t.target??null;if(!r)return!1;try{return 9===r.getRootNode().nodeType}catch{return!1}}(e))continue;e.pause(),t.push(e)}catch{}return 0===t.length?eb:{count:t.length,resume:()=>{for(let e of t)try{e.play()}catch{}}}}(document);e.count>0&&t.push(e.resume),function(e){let t=[];try{t=Array.from(e.querySelectorAll("video, audio"))}catch{return}for(let e of t)try{e.paused||e.pause()}catch{}}(document)};r();let n=window.setInterval(r,500),o=function(e){let t=e.requestAnimationFrame,r=e.cancelAnimationFrame,n=new Map,o=e=>{let t=ew--;if(n.size>=512){if([...n.values()].includes(e))return t;let r=(()=>{let e=new Set;for(let[t,r]of n){if(e.has(r))return t;e.add(r)}})();if(void 0===r)return t;n.delete(r)}return n.set(t,e),t},a=t=>{if(n.has(t))return void n.delete(t);try{r.call(e,t)}catch{}};try{e.requestAnimationFrame=o}catch{return()=>{}}try{e.cancelAnimationFrame=a}catch{try{e.requestAnimationFrame=t}catch{}return()=>{}}return()=>{try{e.requestAnimationFrame===o&&(e.requestAnimationFrame=t),e.cancelAnimationFrame===a&&(e.cancelAnimationFrame=r)}catch{}let i=Array.from(new Set(n.values()));n=new Map;let l=0;try{"u">typeof performance&&(l=performance.now())}catch{}for(let e of i)try{e(l)}catch{}}}(window);return()=>{window.clearInterval(n),e.remove();try{o()}catch{}for(let e of t)try{e()}catch{}}},[J]),eL(()=>{if(!Q)return;let e=r?.host??null,t=e=>{!et.current||e&&et.current.contains(e)||ee(!1)},n=e=>{t(e.target instanceof Element?e.target:null)},o=r=>{let n=V(r);e&&n===e||t(n)},a=e=>{"Escape"===e.key&&ee(!1)};return r?.addEventListener("pointerdown",n,{capture:!0}),window.addEventListener("pointerdown",o,{capture:!0}),window.addEventListener("keydown",a),()=>{r?.removeEventListener("pointerdown",n,{capture:!0}),window.removeEventListener("pointerdown",o,{capture:!0}),window.removeEventListener("keydown",a)}},[Q,r]),eL(()=>{let e=eh.current;if(!e)return;let t=!1,r=!1,n=0,o=0,a=0,i=0,l=t=>{t.preventDefault(),t.stopPropagation(),e.removeEventListener("click",l,!0)},s=e=>{if(0!==e.button)return;let l=e.target instanceof Element?e.target:null;if(l?.closest(".artor-settings-popover"))return;let s=l?.closest(".artor-dock-toolbar");if(!s)return;let d=s.getBoundingClientRect();t=!0,r=!1,n=e.clientX,o=e.clientY,a=d.left,i=d.top},d=l=>{if(!t)return;let s=l.clientX-n,d=l.clientY-o;if(!r&&6>Math.hypot(s,d))return;r=!0;let c=e.querySelector(".artor-dock-toolbar")?.getBoundingClientRect();ep(eK({left:a+s,top:i+d},{width:c?.width??0,height:c?.height??0},{width:window.innerWidth,height:window.innerHeight}))},c=()=>{r&&e.addEventListener("click",l,!0),t=!1,r=!1},u=()=>{let t=e.querySelector(".artor-dock-toolbar");if(!t)return;let r=t.getBoundingClientRect();ep(e=>e&&eK(e,{width:r.width,height:r.height},{width:window.innerWidth,height:window.innerHeight}))};return e.addEventListener("pointerdown",s),window.addEventListener("pointermove",d),window.addEventListener("pointerup",c),window.addEventListener("resize",u),()=>{e.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",c),window.removeEventListener("resize",u),e.removeEventListener("click",l,!0)}},[]),eL(()=>{if(!tw)return void eU(null);let e=!1,t=0,r=()=>{e||(e=!0,t=window.requestAnimationFrame(()=>{e=!1,t=0;try{let e=window.getSelection();if(!e||e.isCollapsed||0===e.rangeCount)return void eU(null);let t=e.getRangeAt(0);if(!K(t.commonAncestorContainer.nodeType===Node.ELEMENT_NODE?t.commonAncestorContainer:t.commonAncestorContainer.parentElement))return void eU(null);let r=t.getBoundingClientRect();if(!r||0===r.width&&0===r.height)return void eU(null);eU({left:r.left,top:r.top,width:r.width,height:r.height})}catch{eU(null)}}))};return document.addEventListener("selectionchange",r),()=>{document.removeEventListener("selectionchange",r),t&&window.cancelAnimationFrame(t)}},[tw]),eL(()=>{if("full"!==tg)return;let t=!0;return e.members().then(r=>{if(t){if(r.length>0){e9(r),tl(!1);return}if("own"===e.reviewScope()){e9([]),tl(!1);return}e.members().then(e=>{t&&(e9(e),tl(0===e.length))}).catch(()=>{t&&(e9([]),tl(!0))})}}),()=>{t=!1}},[e,tg,ty]),eL(()=>{if(!tw)return;let t=!0;return e.me().then(e=>{t&&td(e?.id??null)}).catch(()=>{t&&td(null)}),()=>{t=!1}},[e,tw]);let tU=`artor-seen:${e.deploymentId()??"unknown"}`;function tB(e,t){tf(r=>{if(r[e]===t)return r;let n={...r,[e]:t};return tj(tD(),tU,n),n})}function tX(e){tf(t=>{if(!(e in t))return t;let{[e]:r,...n}=t;return tj(tD(),tU,n),n})}function tY(e,t=!1){eO(e_||null!==ef?"fwd":null),u(!1),ek(!1),eS(!1),eC(!1),eA(t),em(e)}function tV(){eC(!1),em(null),eA(!1)}function tG(){e_&&eS(!0)}function tK(){e_?tG():(eO(null!==ef?"back":null),tV(),eS(!1),ek(!0))}eL(()=>{tf(function(e,t){if(!e)return{};try{let r=e.getItem(t);if(!r)return{};let n=JSON.parse(r);if(null===n||"object"!=typeof n||Array.isArray(n))return{};let o={};for(let[e,t]of Object.entries(n))"number"==typeof t&&Number.isFinite(t)&&(o[e]=t);return o}catch{return{}}}(tD(),tU))},[tU,tg]);let tJ=eR(tK);tJ.current=tK;let t3=ef?tx.find(e=>e.thread.id===ef)?.thread.comments.length??null:null;function t6(e){try{let r=t.resolveThreadAnchor(e);eH(r.range??null),eD(r.range?null:r.el?r.el.getBoundingClientRect():null)}catch{eH(null),eD(null)}}function t7(){eH(null),eD(null)}function t9(e,t,r,n=null){w(e),y(""),S(t),I(function(e,t){if("text"===e.kind)return{kind:"text",selector:e.elementSelector,label:null,styles:[],quote:e.textRange?.quote??null};let r=null,n=[];if(t){try{r=eG(t)}catch{r=null}try{let e=window.getComputedStyle(t);n=tq.map(t=>({prop:t,value:e.getPropertyValue(t).trim()})).filter(e=>""!==e.value&&"normal"!==e.value)}catch{n=[]}}return{kind:"element",selector:e.elementSelector,label:r,styles:n,quote:null}}(e,r)),$(r),L(n),O(!1),_(!1),E(!1)}function re(){w(null),y(""),S(null),I(null),$(null),L(null),O(!1),_(!1),E(!1)}function rt(e){var t,r;if(e){if(C.current===e)return;C.current=e}"discard"==(t=v,r=x,""===t.trim()||r?"discard":"warn")?re():(_(!0),E(!0))}eL(()=>{ef&&null!==t3&&tB(ef,t3)},[ef,t3]),eL(()=>{var e;let t;if(tm.current)return;let r=(e=window.location.hash,(t=/^#artor-thread=([A-Za-z0-9-]{1,64})$/.exec(e))?t[1]:null);if(!r){tm.current=!0;return}tx.some(e=>e.thread.id===r)&&(tm.current=!0,tY(r))},[tx]);let rr=eR(rt);async function rn(r,n){let o=await e.submitGuestIdentity(r,n);return o.ok&&await t.loadRoute(window.location.pathname),o}function ro(){return"guest-readonly"===e.widgetState()&&(eJ(e=>e+1),!0)}async function ra(){if(!b)return;let r=v.trim();if(!(!r||r.length>4e3||P)){D(!0),eV(null);try{let n=await e.postComment({...b,body:tW(r,e6)});if(n){if(N)try{await e.setThreadAiIgnored(n.id,!0)}catch{}tB(n.id,n.comments.length||1),re(),await t.loadRoute(b.route)}else ro()||eV("Couldn't post the comment. Check your connection and try again.")}finally{D(!1)}}}async function ri(r,n){let o=r.thread.id;eV(null),eB(e=>({...e,[o]:n}));let a=!1;try{(a=await e.resolveThread(o,n))&&await t.loadRoute(r.thread.route)}catch{a=!1}finally{eB(e=>{let{[o]:t,...r}=e;return r})}a||eV("Couldn't update the comment. Check your connection and try again.")}async function rl(r,n){let o=r.thread.id;eV(null),eY(e=>({...e,[o]:n}));let a=!1;try{(a=await e.setThreadAiIgnored(o,n))&&await t.loadRoute(r.thread.route)}catch{a=!1}finally{eY(e=>{let{[o]:t,...r}=e;return r})}a||eV("Couldn't update the AI setting. Check your connection and try again.")}async function rs(r,n){eV(null),e8(!0);try{await e.replyToThread(r.thread.id,tW(n,e6))?await t.loadRoute(r.thread.route):ro()||eV("Couldn't send the reply. Check your connection and try again.")}catch{ro()||eV("Couldn't send the reply. Check your connection and try again.")}finally{e8(!1)}}async function rd(r){eV(null);let n=!1;try{(n=await e.deleteThread(r.thread.id))&&(tV(),tX(r.thread.id),await t.loadRoute(r.thread.route))}catch{n=!1}n||ro()||eV("Couldn't delete the thread. Check your connection and try again.")}async function rc(r,n,o){eV(null);try{if(await e.editComment(n,tW(o,e6)))return await t.loadRoute(r.thread.route),!0}catch{}return ro()||eV("Couldn't save the edit. Check your connection and try again."),!1}async function ru(r,n){eV(null);try{let o=await e.deleteComment(n);if(o){o.threadDeleted&&(tV(),tX(r.thread.id)),await t.loadRoute(r.thread.route);return}}catch{}ro()||eV("Couldn't delete the comment. Check your connection and try again.")}return rr.current=rt,"pending"===tg||"hidden"===tg||ed?null:eZ("div",{style:tQ,ref:g,children:[eZ("style",{children:t8}),en?eZ("div",{class:"artor-block-overlay","aria-hidden":"true",style:c?{...t5,pointerEvents:"none"}:t5}):null,tN?eZ("div",{style:t0,children:[tM.map(e=>eZ(z,{children:[eZ(tS,{rt:e,resolved:!1,dimmed:!1,pos:t.position(e.thread.id),names:tC,unread:tH(th,e.thread),onOpen:()=>tY(e.thread.id),onHoverEnter:()=>t6(e.thread),onHoverLeave:t7}),e.range&&t.position(e.thread.id)?eZ(t$,{range:e.range}):null]},e.thread.id)),tL.map(e=>eZ(z,{children:[eZ(tS,{rt:e,resolved:!0,dimmed:!F,pos:t.position(e.thread.id),names:tC,unread:tH(th,e.thread),onOpen:()=>tY(e.thread.id),onHoverEnter:()=>t6(e.thread),onHoverLeave:t7}),e.range&&t.position(e.thread.id)?eZ(t$,{range:e.range,dimmed:!F}):null]},e.thread.id)),ej?eZ(t$,{range:ej}):eZ(tA,{rect:eP,el:null,variant:"reverse"})]}):null,tw&&!c&&!b&&eF?eZ("button",{type:"button",class:"artor-selection-btn",style:(o=eF,{position:"fixed",left:"0",top:"0",transform:`translate(${o.left}px, ${o.top-34}px)`,pointerEvents:"auto"}),onClick:function(){eU(null);try{let e=window.getSelection(),t=e?function(e,t){try{var r;if(!e||0===e.rangeCount||e.isCollapsed)return null;let n=e.getRangeAt(0);if(n.collapsed)return null;let o=el(n.toString()).slice(0,1024);if(!o)return null;let a=K((r=n.commonAncestorContainer)?r.nodeType===Node.ELEMENT_NODE?r:r.parentElement:null);if(!a)return null;let i=n.startContainer,l=(i.nodeType===Node.TEXT_NODE?i.textContent??"":"").slice(Math.max(0,n.startOffset-32),n.startOffset),s=n.endContainer,d=(s.nodeType===Node.TEXT_NODE?s.textContent??"":"").slice(n.endOffset,n.endOffset+32),c="function"==typeof n.getBoundingClientRect?n.getBoundingClientRect():a.getBoundingClientRect(),u=a.getBoundingClientRect(),p=u.width||1,h=u.height||1;return{kind:"text",anchorText:ea(a),anchorRole:eo(a),elementSelector:er(a),offsetXPct:ei((c.left-u.left)/p*100),offsetYPct:ei((c.top-u.top)/h*100),route:t.location.pathname+t.location.search,scrollY:Math.max(0,Math.trunc(t.scrollY)),textRange:{quote:o,prefix:l,suffix:d}}}catch{return null}}(e,window):null;if(t){let r=e&&e.rangeCount>0?e.getRangeAt(0).cloneRange():null;t9(t,eF?{x:eF.left,y:eF.top+eF.height+24}:{x:window.innerWidth/2,y:window.innerHeight/2},null,r)}}catch{}},children:[eZ(e5,{paths:te,size:13}),"Comment"]}):null,tw&&c&&!b?eZ("div",{style:t4,role:"presentation","aria-label":"Click an element to comment on it",children:eZ(tA,{rect:p,el:f,variant:"pick"})}):null,tw&&b?eZ(tz,{el:A,range:M}):null,tw&&b?eZ(tZ,{body:v,submitting:P,members:e6,rosterError:ti,guest:tb,point:T??{x:window.innerWidth/2,y:window.innerHeight/2},details:R,identify:"guest-identify"===tg?e.guestIdentify()??"name":null,onIdentitySubmit:rn,aiIgnore:N,onAiIgnore:O,dismissArmed:x,wiggle:k,onBody:e=>{y(e),_(!1),E(!1)},onCancel:re,onDismissRequest:rt,onWiggleEnd:()=>E(!1),onSubmit:()=>{ra()}}):null,e_&&!tP?eZ(tI,{tab:eg,onTab:t=>{ev(t),"all"===t&&(ex(null),e.listAllComments().then(ex))},allThreads:ey,currentRoute:window.location.pathname,onOpenExternal:e=>window.location.assign(tF(window.location.origin,e)),items:tx.map(e=>({rt:e,resolved:tk(e.thread),aiIgnored:tE(e.thread),unread:tH(th,e.thread)})),names:tC,isGuest:tb,ownScope:"full"===tg&&"own"===e.reviewScope(),closing:eT,nav:eN,root:r,showResolved:F,onShowResolved:U,onOpenThread:e=>tY(e,!0),onMarkUnread:tX,onStartComment:()=>{tG(),u(!0)},onClose:tG,onCloseDone:function(){eS(!1),ek(!1)},onHoverEnter:t6,onHoverLeave:t7}):null,tP?eZ(tO,{rt:tP,resolved:tk(tP.thread),aiIgnored:tE(tP.thread),canResolve:"full"===tg,canWrite:tw,isGuest:tb,names:tC,members:e6,rosterError:ti,replying:eQ,meId:ts,root:r,project:tv,elementPath:()=>{let e=t.resolveThreadAnchor(tP.thread);return e.el?function(e){let t=[],r=e;try{for(;r&&1===r.nodeType&&t.length<64;){let e=r.tagName.toLowerCase(),n=r.getAttribute("id");if(n&&/^[A-Za-z][\w-]*$/.test(n)){t.unshift(`${e}#${n}`);break}let o=e,a=r.parentElement;if(a){let e=Array.from(a.children).filter(e=>e.tagName===r.tagName);e.length>1&&(o+=`:nth-of-type(${e.indexOf(r)+1})`)}t.unshift(o),r=a}}catch{}return t.join(" > ")}(e.el):null},nav:eN,onBack:ez?function(){eO("back"),eC(!1),em(null),eA(!1),eS(!1),ek(!0)}:null,onResolve:e=>{ri(tP,e)},onToggleAiIgnored:e=>{rl(tP,e)},onReply:e=>{rs(tP,e)},onDeleteThread:()=>{rd(tP)},onEditComment:(e,t)=>rc(tP,e,t),onDeleteComment:e=>{ru(tP,e)},onMarkUnread:()=>tX(tP.thread.id),closing:eE,onCloseDone:function(){eC(!1),em(null),eA(!1)},onClose:function(){ef&&eC(!0)}},tP.thread.id):null,eZ("div",{ref:eh,style:eu?{...t1,left:`${eu.left}px`,top:`${eu.top}px`,right:"auto",bottom:"auto"}:t1,class:"artor-dock",children:[eW?eZ("div",{class:"artor-toast",role:"alert",children:[eZ("span",{class:"artor-toast-text",children:eW}),eZ("button",{type:"button",class:"artor-icon-btn","aria-label":"Dismiss",onClick:()=>eV(null),children:eZ(e5,{paths:e7})})]}):null,!q&&t_&&0===tx.length?eZ("div",{class:"artor-panel","aria-label":"Loading comments","aria-busy":"true",children:[eZ("div",{class:"artor-skel artor-skel-1"}),eZ("div",{class:"artor-skel artor-skel-2"})]}):null,"signedout"===tg?eZ("a",{class:"artor-launcher",href:`${(s=(l=(i=(a=(n=window.location).hostname).split(".")).indexOf("preview"))>0?i.slice(l+1).join("."):i.slice(1).join(".")||a,`${n.protocol}//${s||a}`)}/`,target:"_blank",rel:"noopener noreferrer",children:"Open in dashboard ↗"}):"readonly"===tg||"guest-readonly"===tg?eZ(z,{children:["guest-readonly"===tg?eZ("div",{class:"artor-hint artor-guest-notice",role:"status",children:"Commenting is turned off for this link."}):null,eZ("button",{type:"button",class:"artor-launcher","aria-pressed":!tN,onClick:()=>H(e=>!e),children:tN?"Hide comments":"Show comments"})]}):"guest"===tg||"guest-identify"===tg?eZ("button",{type:"button",class:"artor-dock-toolbar artor-dock-guest-pill","data-tool":"comment","aria-pressed":c,onClick:()=>{w(null),u(e=>!e)},children:eZ("span",{class:"artor-pill-content",children:[eZ(e5,{paths:c?e3:tt,size:16}),c?"Done commenting":"Add a comment",eZ("kbd",{class:"artor-kbd",children:"C"})]},c?"done":"add")}):eZ("div",{class:`artor-dock-toolbar${q?" artor-dock-min":""}${W?" artor-dock-sliding":""}`,role:"toolbar","aria-label":"Comment tools",children:[eZ("div",{class:"artor-dock-tools-wrap",children:eZ("div",{class:"artor-dock-tools",children:[eZ(e2,{tool:"pause",icon:J?tu:tc,label:J?"Resume animations":"Pause animations",shortcut:"P",active:J,onClick:()=>Z(e=>!e)}),eZ("div",{class:"artor-dock-divider","aria-hidden":"true"}),eZ(e2,{tool:"comment",icon:tt,label:c?"Stop commenting":"Comment",shortcut:"C",active:c,onClick:()=>{w(null),u(e=>!e)}}),eZ(e2,{tool:"eye",icon:tN?tr:tn,label:tN?"Hide comments":"Show comments",shortcut:"V",active:!tN,onClick:()=>H(e=>!e)}),eZ(e2,{tool:"threads",icon:tp,label:e_?"Hide comment list":"Comment list",shortcut:"T",active:e_,onClick:tK}),eZ("div",{ref:et,style:{position:"relative"},children:[eZ(e2,{tool:"resolved",icon:to,label:"Comment settings",shortcut:"R",active:Q,onClick:()=>ee(e=>!e)}),Q?eZ("div",{class:"artor-settings-popover",role:"dialog","aria-label":"Comment settings",children:[eZ("div",{class:"artor-settings-header",children:[eZ("div",{class:"artor-settings-headings",children:[eZ("div",{class:"artor-settings-title",children:"Artor"}),tv?eZ("div",{class:"artor-settings-project",children:[tv.name," v",tv.version]}):null]}),tv?eZ("a",{class:"artor-settings-dash",href:tv.dashboardUrl,target:"_blank",rel:"noopener noreferrer",children:"Dashboard"}):null]}),eZ("div",{class:"artor-settings-divider","aria-hidden":"true"}),eZ("div",{class:"artor-settings-row",children:[eZ("span",{children:F?`Showing resolved (${tR})`:`Show resolved (${tR})`}),eZ(e4,{checked:F,label:"Show resolved comments",onChange:U})]}),eZ("div",{class:"artor-settings-row",children:[eZ("span",{children:"Block page interactions"}),eZ(e4,{checked:en,label:"Block page interactions",onChange:es})]}),eZ("div",{class:"artor-settings-divider","aria-hidden":"true"}),eZ("div",{class:"artor-settings-row",children:[eZ("span",{children:"Hide until refresh"}),eZ(e4,{checked:ed,label:"Hide the review widget until the page is refreshed",onChange:()=>{ee(!1),u(!1),Z(!1),ec(!0)}})]})]}):null]}),eZ("div",{class:"artor-dock-divider","aria-hidden":"true"})]})}),eZ(e2,{tool:"minimize",icon:ta,label:q?"Expand":"Minimize",shortcut:"M",onClick:()=>Y(e=>!e)})]})]})]})}function e2({tool:e,icon:t,label:r,shortcut:n,active:o=!1,onClick:a}){return eZ("button",{type:"button",class:`artor-tool-btn${o?" artor-tool-btn-active":""}`,"aria-label":r,"aria-pressed":o,"data-tool":e,onClick:a,children:[eZ(e5,{paths:t,size:16}),eZ("span",{class:"artor-tool-tip",role:"tooltip",children:[eZ("span",{class:"artor-tool-tip-label",children:r}),eZ("kbd",{class:"artor-kbd",children:n})]})]})}function e4({checked:e,label:t,onChange:r,tone:n="dark"}){return eZ("button",{type:"button",role:"switch","aria-checked":e,"aria-label":t,class:`artor-switch${e?" artor-switch-on":""}${"light"===n?" artor-switch-light":""}`,onClick:()=>r(!e),children:eZ("span",{class:"artor-switch-thumb"})})}function e5({paths:e,size:t=16}){return eZ("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:"artor-icon",children:e.map((e,t)=>eZ("path",{d:e},t))})}var e8=["M20 6 9 17l-5-5"],e3=["M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z","M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7","M7 3v4a1 1 0 0 0 1 1h7"],e6=["M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8","M3 3v5h5"],e7=["M18 6 6 18","m6 6 12 12"],e9=["m15 18-6-6 6-6"],te=["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],tt=[...te,"M12 7v6","M9 10h6"],tr=["M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0","M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],tn=["M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49","M14.084 14.158a3 3 0 0 1-4.242-4.242","M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143","m2 2 20 20"],to=["M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z","M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"],ta=["m9 18 6-6-6-6"],ti=["m6 9 6 6 6-6"],tl=["M12 5v14","M5 12h14"],ts=["m5 12 7-7 7 7","M12 19V5"],td=["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z","M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"],tc=["M6 4h4v16H6z","M14 4h4v16h-4z"],tu=["m6 3 14 9-14 9V3z"],tp=["M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z","M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"],th=["M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z","m15 5 4 4"],tf=["M3 6h18","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6","M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2","M10 11v6","M14 11v6"],tm=["M12 5h.01","M12 12h.01","M12 19h.01"],tg=["M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0","M12 16v-4","M12 8h.01"],tb=["M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71","M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"],tw=["M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2","M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"],tv=["M9 14 4 9l5-5","M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"],ty=["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"];function tx({name:e,size:t=22}){let r,n=function(e){let t=0;for(let r=0;r<e.length;r++)t=(31*t+e.charCodeAt(r))%360;return t}(e);return eZ("span",{class:"artor-avatar",style:{width:`${t}px`,height:`${t}px`,fontSize:`${Math.round(.42*t)}px`,background:`hsl(${n} 55% 32%)`},title:e,"aria-hidden":"true",children:0===(r=e.trim().split(/\s+/).filter(Boolean)).length?"?":1===r.length?r[0].slice(0,2).toUpperCase():(r[0][0]+r[r.length-1][0]).toUpperCase()})}function t_({size:e=22}){return eZ("span",{class:"artor-avatar artor-avatar--guest",style:{width:`${e}px`,height:`${e}px`},children:eZ("svg",{viewBox:"0 0 24 24",width:Math.round(.62*e),height:Math.round(.62*e),fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",children:[eZ("circle",{cx:"12",cy:"8",r:"5"}),eZ("path",{d:"M20 21a8 8 0 0 0-16 0"})]})})}function tk(e){return e?`${e} (guest)`:"Anonymous guest"}var tE="Comments stay with the version they were left on, so notes from an earlier version don't show here.";function tC(e,t){return null!==t&&(!0===e.guest?e.guestAlias===t:null!=e.authorId&&e.authorId===t)}function tT({identify:e,embedded:t=!1,onSubmit:r,onCancel:n}){let[o,a]=e$(""),[i,l]=e$(""),[s,d]=e$({name:!1,email:!1}),[c,u]=e$(!1),[p,h]=e$(!1),[f,m]=e$(null),g=o.trim(),b=i.trim(),w=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b);async function v(){if(p)return;let t=0===g.length,n="name_email"===e&&!w;if(t||n){d({name:t,email:n}),u(!0);return}h(!0),m(null);try{let t=await r(g,"name_email"===e?b:null);t.ok||m(t.message??"Couldn't start commenting. Check your connection and try again.")}finally{h(!1)}}function y(e){return`artor-input${e?" artor-input-invalid":""}${e&&c?" artor-guest-shake":""}`}return eZ("div",{class:`artor-guest-identify${t?"":" artor-panel"}`,role:"group","aria-label":"Identify yourself to comment",children:[eZ("div",{class:"artor-guest-identify-title",children:"Who's this comment from?"}),eZ("label",{class:"artor-guest-field",children:[eZ("span",{class:"artor-guest-field-label",children:"Name"}),eZ("input",{class:y(s.name),value:o,maxLength:80,placeholder:"Your name",disabled:p,onInput:e=>a(e.currentTarget.value),onFocus:()=>d(e=>({...e,name:!1})),onAnimationEnd:()=>u(!1)})]}),"name_email"===e?eZ("label",{class:"artor-guest-field",children:[eZ("span",{class:"artor-guest-field-label",children:"Email"}),eZ("input",{class:y(s.email),type:"email",value:i,maxLength:254,placeholder:"you@example.com",disabled:p,onInput:e=>l(e.currentTarget.value),onFocus:()=>d(e=>({...e,email:!1})),onAnimationEnd:()=>u(!1)})]}):null,f?eZ("div",{class:"artor-hint artor-guest-identify-error",children:f}):null,eZ("div",{class:"artor-guest-identify-actions",children:[eZ("button",{type:"button",class:"artor-btn artor-guest-identify-cancel",disabled:p,onClick:n,children:"Cancel"}),eZ("button",{type:"button",class:"artor-btn artor-btn-primary artor-guest-identify-submit",disabled:p,onClick:()=>{v()},children:"Continue"})]})]})}function tS({rt:e,resolved:t,dimmed:r=!1,pos:n,names:o,unread:a=!1,onOpen:i,onHoverEnter:l,onHoverLeave:s}){var d,c,u,p,h,f;let m;if(!n)return null;let g=e.thread,b=g.comments.length,w=b-1,v=g.comments[0],y=v?.guest===!0,x=y?tk(v?.guestName):function(e,t=3){let r=new Set,n=[];for(let o of e)if(!r.has(o.author)&&(r.add(o.author),n.push(o.author),n.length>=t))break;return n}(g.comments,1)[0],_=`${t?"Resolved comment":"Comment"} thread (${b} ${1===b?"comment":"comments"})`,k=t||w>0,E=typeof window>"u"?null:{width:window.innerWidth,height:window.innerHeight};if(E&&(!(n.x>-E.width&&n.x<2*E.width&&n.y>-E.height)||!(n.y<2*E.height)))return null;let C=E?{x:(d=E.width-n.x,c=n.x,300>d&&c>d),y:(u=n.y,p=E.height-n.y,150>u&&p>u)}:{x:!1,y:!1},T=C.x,S=C.y,z=E?Math.max(120,(C.x?n.x:E.width-n.x)-16):null;return eZ("button",{type:"button",class:`artor-pin${t?" artor-pin-resolved":""}${r?" artor-pin-dimmed":""}${k?" artor-pin-badged":""}${T?" artor-pin-flip-x":""}${S?" artor-pin-flip-y":""}`,style:{...T&&E?{right:`${Math.max(0,E.width-n.x)}px`,left:"auto"}:{left:`${n.x}px`,right:"auto"},top:`${n.y}px`,...null===z?{}:{"--pin-card-max":`${z}px`}},"aria-label":a?`${_}, unread`:_,onClick:i,onMouseEnter:l,onMouseLeave:s,children:[eZ("span",{class:"artor-pin-head","aria-hidden":"true",children:[eZ("span",{class:"artor-avatar-wrap",children:[y?eZ(t_,{size:24}):x?eZ(tx,{name:x,size:24}):null,a?eZ("span",{class:"artor-unread-dot artor-unread-dot-avatar","aria-hidden":"true"}):null]}),t?eZ("span",{class:"artor-pin-badge-slot",children:eZ("span",{class:"artor-pin-badge-clip",children:eZ("span",{class:"artor-pin-counter artor-pin-counter-resolved",children:eZ(e5,{paths:e8,size:14})})})}):w>0?eZ("span",{class:"artor-pin-badge-slot",children:eZ("span",{class:"artor-pin-badge-clip",children:eZ("span",{class:"artor-pin-counter",children:eW(w)})})}):null,eZ("span",{class:"artor-pin-name-slot",children:eZ("span",{class:"artor-pin-card-name",children:x??"Comment"})})]}),eZ("span",{class:"artor-pin-more","aria-hidden":"true",children:eZ("span",{class:"artor-pin-more-inner",children:[eZ("span",{class:"artor-pin-card-body",children:(h=g,f=o,(m=h.comments[0])?eB(m.body,f):"(no text)")}),eZ("span",{class:"artor-pin-card-meta",children:[eX(g.comments[0]?.createdAt),w>0?` \u30FB ${eW(w)} ${1===w?"reply":"replies"}`:"",t?" ・ resolved":""]})]})})]})}function tz({el:e,range:t}){let r=function(e){let[t,r]=e$(null);return eL(()=>{if(!e)return void r(null);let t=()=>{try{let t=e.getBoundingClientRect();r(e=>e&&.5>Math.abs(e.left-t.left)&&.5>Math.abs(e.top-t.top)&&.5>Math.abs(e.width-t.width)&&.5>Math.abs(e.height-t.height)?e:{left:t.left,top:t.top,width:t.width,height:t.height})}catch{r(null)}};return t(),window.addEventListener("scroll",t,{passive:!0,capture:!0}),window.addEventListener("resize",t,{passive:!0}),()=>{window.removeEventListener("scroll",t,{capture:!0}),window.removeEventListener("resize",t)}},[e]),t}(e),[,n]=eM((e,t)=>e+1,0);return eL(()=>{if(!t)return;let e=()=>n();return window.addEventListener("scroll",e,{passive:!0,capture:!0}),window.addEventListener("resize",e,{passive:!0}),()=>{window.removeEventListener("scroll",e,{capture:!0}),window.removeEventListener("resize",e)}},[t]),t?eZ(t$,{range:t}):eZ(tA,{rect:r,el:null,variant:"reverse"})}function tA({rect:e,el:t,variant:r}){var n;if(!e)return null;let o=(n=window.innerWidth,e.left+e.width+160>n?"left":"right"),a="pick"===r&&null!==t,i=null!==t&&null!==t.closest('a[href], button, input, select, textarea, summary, [role="button"], [role="link"]'),l=("pick"===r?"artor-highlight artor-highlight-pick":"artor-highlight")+(a?` artor-highlight-tab-${o}`:"");return eZ("div",{style:eV(e),class:l,children:"pick"===r&&t?eZ("span",{class:`artor-highlight-chip artor-highlight-chip-${o}`,children:[eZ("span",{class:"artor-highlight-chip-label",children:eG(t)}),eZ("span",{class:"artor-highlight-chip-hint",children:[" · Click to comment",i?" · Ctrl to interact":""]})]}):null})}function t$({range:e,dimmed:t=!1}){let r;if(!e)return null;try{var n;n=e.getClientRects(),r=Array.from(n,e=>({left:e.left,top:e.top,width:e.width,height:e.height}))}catch{return null}return 0===r.length?null:eZ(z,{children:r.map(e=>eV(e)).map((e,r)=>eZ("div",{style:e,class:`artor-highlight${t?" artor-highlight-dimmed":""}`},r))})}function tM(e){eL(()=>{let t=e.current;if(t){try{t.showPopover?.()}catch{}return()=>{try{t.hidePopover?.()}catch{}}}},[e])}function tL(e,t,r){let n=eR(r);n.current=r,eL(()=>{if(!t)return;let r=(e.current?.getAnimations?.()??[]).filter(e=>"artor-sheet-out"===e.animationName),o=!1,a=()=>{o||(o=!0,n.current())};if(0===r.length)return void a();for(let e of r)e.finished.then(a,a);let i=window.setTimeout(a,400);return()=>window.clearTimeout(i)},[t,e])}function tR(e,t){let r=eR(t);r.current=t,eL(()=>{let t=e?.host??null,n=e=>e instanceof Element&&null!==e.closest(".artor-sheet"),o=e=>{n(e.target)||r.current()},a=e=>{(t?e.target===t:n(V(e)))||r.current()};return e?.addEventListener("pointerdown",o,{capture:!0}),window.addEventListener("pointerdown",a,{capture:!0}),()=>{e?.removeEventListener("pointerdown",o,{capture:!0}),window.removeEventListener("pointerdown",a,{capture:!0})}},[e])}function tI({tab:e,onTab:t,allThreads:r,currentRoute:n,onOpenExternal:o,items:a,names:i,isGuest:l=!1,ownScope:s=!1,closing:d,nav:c=null,root:u=null,showResolved:p,onShowResolved:h,onOpenThread:f,onMarkUnread:m,onStartComment:g,onClose:b,onCloseDone:w,onHoverEnter:v,onHoverLeave:y}){let x=eR(null);tM(x),tL(x,d,w),tR(u,b);let[_,k]=e$(null),[E,C]=e$(null),T=eR(null);function S(){k(null),C(null),null!==T.current&&(window.clearTimeout(T.current),T.current=null)}async function z(e){await tU(tF(window.location.origin,e))&&(C(e.id),null!==T.current&&window.clearTimeout(T.current),T.current=window.setTimeout(()=>S(),900))}eL(()=>{let e=e=>{if("Escape"===e.key){if(null!==_){e.stopPropagation(),S();return}b()}};return window.addEventListener("keydown",e,{capture:!0}),()=>window.removeEventListener("keydown",e,{capture:!0})},[b,_]),eL(()=>{if(null===_)return;let e=u?.host??null,t=e=>{let t;(t=e.target)instanceof Element&&null!==t.closest(".artor-menu-wrap")||S()},r=t=>{e&&t.target===e||S()};return u?.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("pointerdown",r,{capture:!0}),()=>{u?.removeEventListener("pointerdown",t,{capture:!0}),window.removeEventListener("pointerdown",r,{capture:!0})}},[_,u]);let A=p?a:a.filter(e=>!e.resolved),$=(r??[]).filter(e=>p||!e.resolved);return eZ("div",{ref:x,class:`artor-sheet${c?` artor-sheet-nav-${c}`:""}${d?" artor-sheet-closing":""}`,popover:"manual",role:"dialog","aria-label":"Comments on this page",children:[eZ("div",{class:"artor-sheet-head",children:[eZ("div",{class:"artor-sheet-title-row",children:[eZ("span",{class:"artor-sheet-title",children:[eZ(e5,{paths:tp,size:18}),"Threads"]}),eZ("button",{type:"button",class:"artor-round-btn artor-round-btn-ghost","aria-label":"Close",onClick:b,children:eZ(e5,{paths:e7,size:14})})]}),eZ("div",{class:"artor-sheet-action-row artor-sheet-action-row-end",children:eZ("span",{class:"artor-sheet-ai",children:[eZ(e4,{checked:p,label:"Show resolved threads",tone:"light",onChange:h}),eZ("span",{class:"artor-sheet-ai-label",children:"Show resolved"})]})})]}),eZ("div",{class:"artor-list-tabs",role:"tablist",children:[eZ("button",{type:"button",role:"tab","aria-selected":"page"===e,class:`artor-list-tab${"page"===e?" artor-list-tab-on":""}`,onClick:()=>t("page"),children:"This page"}),eZ("button",{type:"button",role:"tab","aria-selected":"all"===e,class:`artor-list-tab${"all"===e?" artor-list-tab-on":""}`,onClick:()=>t("all"),children:"All comments"})]}),eZ("div",{class:"artor-sheet-msgs artor-sheet-list",role:"list",children:[s?eZ("div",{class:"artor-hint artor-guest-scope-hint",children:"You opened this prototype through a public link, so you only see your own comments here. Open it from the dashboard to see everyone's."}):null,"all"===e?null===r?eZ("div",{class:"artor-hint",children:"Loading…"}):0===$.length?eZ("div",{class:"artor-list-empty",children:[eZ("div",{class:"artor-hint",children:"No comments anywhere yet."}),l?eZ("div",{class:"artor-hint artor-guest-scope-hint",children:tE}):null]}):$.map(e=>eZ(tN,{thread:e,names:i,unread:!1,aiIgnored:e.aiIgnored??!1,menuOpen:!1,copied:!1,routeLabel:e.route!==n?e.route:null,isGuest:l,onOpen:()=>e.route===n?f(e.id):o(e),onToggleMenu:()=>{},onCopyLink:()=>{},onMarkUnread:()=>{},onHoverEnter:()=>{},onHoverLeave:()=>{}},e.id)):0===A.length?eZ("div",{class:"artor-list-empty",children:[eZ("div",{class:"artor-hint",children:0===a.length?"No comments on this screen yet.":"No open threads on this screen."}),l&&0===a.length?eZ("div",{class:"artor-hint artor-guest-scope-hint",children:tE}):null,eZ("button",{type:"button",class:"artor-list-empty-cta",onClick:g,children:"Leave a comment"})]}):A.map(({rt:e,unread:t,aiIgnored:r})=>eZ(tN,{thread:e.thread,names:i,unread:t,aiIgnored:r,menuOpen:_===e.thread.id,copied:E===e.thread.id,isGuest:l,onOpen:()=>f(e.thread.id),onToggleMenu:()=>_===e.thread.id?S():k(e.thread.id),onCopyLink:()=>{z(e.thread)},onMarkUnread:()=>{m(e.thread.id),S()},onHoverEnter:()=>v(e.thread),onHoverLeave:y},e.thread.id))]})]})}function tN({thread:e,names:t,unread:r,aiIgnored:n,menuOpen:o,copied:a,routeLabel:i=null,isGuest:l=!1,onOpen:s,onToggleMenu:d,onCopyLink:c,onMarkUnread:u,onHoverEnter:p,onHoverLeave:h}){let f=e.comments[0],m=f?.guest===!0,g=m?tk(f?.guestName):f?.author??"Unknown",b=f?eY(f.createdAt):"";return eZ("div",{class:`artor-msg artor-list-row${o?" artor-msg-menu-open":""}`,role:"listitem",onClick:s,onMouseEnter:p,onMouseLeave:h,children:[eZ("div",{class:"artor-msg-top",children:[eZ("span",{class:"artor-avatar-wrap",children:[m?eZ(t_,{size:24}):eZ(tx,{name:f?.author??"?",size:24}),r?eZ("span",{class:"artor-unread-dot artor-unread-dot-avatar","aria-hidden":"true"}):null]}),eZ("span",{class:"artor-msg-author",children:g}),i?eZ("span",{class:"artor-msg-route",children:i}):null,n?eZ("span",{class:"artor-thread-ai-off",children:"AI: off"}):null,eZ("span",{class:"artor-msg-time artor-time-tip",tabIndex:b?0:void 0,children:[eX(f?.createdAt),b?eZ("span",{class:"artor-tool-tip",role:"tooltip",children:b}):null]}),eZ("span",{class:"artor-msg-actions",children:eZ("span",{class:"artor-menu-wrap",children:[eZ("button",{type:"button",class:"artor-round-btn","aria-label":"Thread options","aria-haspopup":"menu","aria-expanded":o,onClick:e=>{e.stopPropagation(),d()},children:eZ(e5,{paths:tm,size:16})}),o?eZ("div",{class:"artor-menu",role:"menu","aria-label":"Thread options",children:[l?null:eZ("button",{type:"button",class:"artor-menu-item",role:"menuitem",onClick:e=>{e.stopPropagation(),c()},children:[eZ(e5,{paths:tb,size:14}),a?"Copied":"Copy link"]}),eZ("button",{type:"button",class:"artor-menu-item",role:"menuitem",onClick:e=>{e.stopPropagation(),u()},children:[eZ(e5,{paths:ty,size:14}),"Mark unread"]})]}):null]})})]}),eZ("button",{type:"button",class:"artor-list-row-open",onClick:e=>{e.stopPropagation(),s()},children:eZ("span",{class:"artor-msg-text artor-list-row-text",children:f?eZ(tK,{body:f.body,names:t}):"(no text)"})})]})}function tO({rt:e,resolved:t,aiIgnored:r,canResolve:n,canWrite:o,isGuest:a=!1,names:i,members:l,rosterError:s,replying:d,meId:c,root:u=null,project:p=null,elementPath:h,closing:f=!1,nav:m=null,onBack:g=null,onCloseDone:b,onResolve:w,onToggleAiIgnored:v,onReply:y,onDeleteThread:x,onEditComment:_,onDeleteComment:k,onMarkUnread:E,onClose:C}){let T=eR(null);tM(T);let[S,z]=e$(!1),[A,$]=e$(!1),[M,L]=e$(null),R=eR(null),[I,N]=e$(null),[O,P]=e$(""),[D,j]=e$(!1),H=eR(null),[F,U]=e$(new Set),q=eR(F);q.current=F;let B=eR(k);function X(){z(!1),$(!1),L(null),null!==R.current&&(window.clearTimeout(R.current),R.current=null)}B.current=k,eL(()=>()=>{for(let e of q.current)B.current(e)},[]),eL(()=>{let e=e=>{"Escape"===e.key&&C()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[C]),eL(()=>{if(!S)return;let e=e=>{"Escape"===e.key&&(e.stopPropagation(),X())};return window.addEventListener("keydown",e,{capture:!0}),()=>window.removeEventListener("keydown",e,{capture:!0})},[S]),eL(()=>{if(!S)return;let e=u?.host??null,t=e=>{let t;(t=e.target)instanceof Element&&null!==t.closest(".artor-menu-wrap")||X()},r=t=>{e&&t.target===e||X()};return u?.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("pointerdown",r,{capture:!0}),()=>{u?.removeEventListener("pointerdown",t,{capture:!0}),window.removeEventListener("pointerdown",r,{capture:!0})}},[S,u]),tL(T,f,b),tR(u,C);let Y=e.thread,W=o&&tC(Y,c);async function V(e){let t="details"===e?function(e,t,r=null,n=null){let o=["Artor comment thread",`Thread ID: ${e.id}`];for(let[a,i]of(r&&(o.push(`Project: ${r.name}${r.slug?` (${r.slug})`:""}`),r.orgSlug&&o.push(`Org: ${r.orgSlug}`),o.push(`Version: v${r.version}`)),o.push(`Route: ${e.route}`,`Anchor kind: ${e.kind??"element"}`),e.anchorText&&o.push(`Anchor text: ${e.anchorText}`),e.anchorRole&&o.push(`Anchor role: ${e.anchorRole}`),e.elementSelector&&o.push(`Selector: ${e.elementSelector}`),n&&o.push(`Element path: ${n}`),e.textRange?.quote&&o.push(`Quote: "${e.textRange.quote}"`),o.push(`Status: ${e.resolved?"resolved":"open"}`),o.push(`AI processing: ${e.aiIgnored?"excluded (ai-ignored)":"included"}`),o.push("Messages:"),e.comments.entries())){let e=i.createdAt?` (${i.createdAt})`:"";o.push(`${a+1}. ${i.author}${e}: ${eB(i.body,t)}`)}return o.join(`
`)}(Y,i,p,h()):tF(window.location.origin,Y);await tU(t)&&(L(e),null!==R.current&&window.clearTimeout(R.current),R.current=window.setTimeout(()=>X(),900))}async function G(){if(null===I)return;let e=O.trim();if(!(!e||e.length>4e3||D)){j(!0);try{await _(I,e)&&(N(null),P(""))}finally{j(!1)}}}return eZ("div",{ref:T,class:`artor-sheet${m?` artor-sheet-nav-${m}`:""}${f?" artor-sheet-closing":""}`,popover:"manual",role:"dialog","aria-label":"Comment thread",children:[eZ("div",{class:"artor-sheet-head",children:[eZ("div",{class:"artor-sheet-title-row",children:[eZ("span",{class:"artor-sheet-title",children:[g?eZ("button",{type:"button",class:"artor-round-btn","aria-label":"Back to threads",onClick:g,children:eZ(e5,{paths:e9,size:14})}):null,eZ(e5,{paths:tp,size:18}),"Comment thread"]}),eZ("button",{type:"button",class:"artor-round-btn artor-round-btn-ghost","aria-label":"Close",onClick:C,children:eZ(e5,{paths:e7,size:14})})]}),eZ("div",{class:"artor-sheet-action-row",children:[n?eZ("span",{class:"artor-sheet-ai",children:[eZ(e4,{checked:r,label:"AI ignore",tone:"light",onChange:e=>v(e)}),eZ("span",{class:"artor-sheet-ai-label",children:"AI ignore"}),eZ("span",{class:"artor-info",tabIndex:0,children:[eZ(e5,{paths:tg,size:14}),eZ("span",{class:"artor-tool-tip",role:"tooltip",children:"Signals to the AI agent to not act on this"})]})]}):eZ("span",{class:"artor-sheet-state",children:t?"Resolved":"Open"}),eZ("span",{class:"artor-sheet-head-actions",children:[n?eZ("button",{type:"button",class:`artor-btn ${t?"":"artor-btn-primary"}`,onClick:()=>w(!t),children:[eZ(e5,{paths:t?e6:e8,size:14}),t?"Reopen":"Resolve"]}):null,eZ("span",{class:"artor-menu-wrap",children:[eZ("button",{type:"button",class:"artor-round-btn","aria-label":"More options","aria-haspopup":"menu","aria-expanded":S,onClick:()=>S?X():z(!0),children:eZ(e5,{paths:tm,size:16})}),S?eZ("div",{class:"artor-menu",role:"menu","aria-label":"Thread options",children:[a?null:eZ("button",{type:"button",class:"artor-menu-item",role:"menuitem",onClick:()=>{V("details")},children:[eZ(e5,{paths:tw,size:14}),"details"===M?"Copied":"Copy details for AI"]}),a?null:eZ("button",{type:"button",class:"artor-menu-item",role:"menuitem",onClick:()=>{V("link")},children:[eZ(e5,{paths:tb,size:14}),"link"===M?"Copied":"Copy link"]}),eZ("button",{type:"button",class:"artor-menu-item",role:"menuitem",onClick:()=>{E(),X(),C()},children:[eZ(e5,{paths:ty,size:14}),"Mark unread"]}),W?eZ("button",{type:"button",class:`artor-menu-item artor-menu-item-danger${A?" artor-menu-item-armed":""}`,role:"menuitem",onClick:()=>{A?(X(),x()):$(!0)},children:[eZ(e5,{paths:tf,size:14}),A?"Confirm delete":"Delete thread"]}):null]}):null]})]})]})]}),eZ("div",{class:"artor-sheet-msgs",children:Y.comments.map(e=>{let t=o&&tC(e,c),r=I===e.id;if(F.has(e.id))return eZ("div",{class:"artor-msg artor-msg-deleted",children:[eZ(e5,{paths:tf,size:16}),eZ("span",{class:"artor-msg-deleted-col",children:[eZ("span",{class:"artor-msg-deleted-title",children:"Comment deleted"}),eZ("span",{class:"artor-msg-deleted-sub",children:"You can undo until you close this panel."})]}),eZ("button",{type:"button",class:"artor-btn",onClick:()=>U(t=>{let r=new Set(t);return r.delete(e.id),r}),children:[eZ(e5,{paths:tv,size:14}),"Undo"]})]},e.id);let n=eY(e.createdAt);return eZ("div",{class:`artor-msg${t?" artor-msg-own":""}`,children:[eZ("div",{class:"artor-msg-top",children:[!0===e.guest?eZ(t_,{size:24}):eZ(tx,{name:e.author,size:24}),eZ("span",{class:"artor-msg-author",children:!0===e.guest?tk(e.guestName):e.author}),eZ("span",{class:"artor-msg-time artor-time-tip",tabIndex:n?0:void 0,children:[eX(e.createdAt),n?eZ("span",{class:"artor-tool-tip",role:"tooltip",children:n}):null]}),t&&!r?eZ("span",{class:"artor-msg-actions",children:[eZ("button",{type:"button",class:"artor-round-btn","aria-label":"Edit comment",onClick:()=>{N(e.id),P(eB(e.body,i))},children:eZ(e5,{paths:th,size:14})}),eZ("button",{type:"button",class:"artor-round-btn","aria-label":"Delete comment",onClick:()=>U(t=>new Set(t).add(e.id)),children:eZ(e5,{paths:tf,size:14})})]}):null]}),r?eZ("div",{class:"artor-msg-edit",children:[eZ(tJ,{klass:"artor-msg-edit-textarea",value:O,members:l,taRef:H,disabled:D,onInput:e=>P(e.currentTarget.value),onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),N(null)),"Enter"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),G())}}),eZ("div",{class:"artor-msg-edit-row",children:[eZ("span",{class:"artor-charhint",children:`${O.length}/4000`}),eZ("button",{type:"button",class:"artor-btn",disabled:D,onClick:()=>N(null),children:"Cancel"}),eZ("button",{type:"button",class:"artor-btn artor-btn-primary",disabled:D||!O.trim()||O.length>4e3,onClick:()=>{G()},children:"Save"})]})]}):eZ("div",{class:"artor-msg-text",children:eZ(tK,{body:e.body,names:i})})]},e.id)})}),o?eZ(tP,{members:l,rosterError:s,submitting:d,guest:a,onSubmit:y}):null]})}function tP({members:e,rosterError:t,submitting:r,guest:n=!1,onSubmit:o}){let[a,i]=e$(""),l=eR(null),s=eR(null),[d,c]=e$(null),[u,p]=e$(0),h=d?tV(e,d.query):[],f=null!==d,m=f&&h.length>0;function g(e){if(!d)return;let t=d.start+1+d.query.length,r=tX(a,d.start,t,e.id,e.name);i(r.text),s.current=r.caret,c(null),p(0)}function b(){let e=a.trim();!e||e.length>4e3||r||(o(e),i(""))}return eL(()=>{if(null===s.current)return;let e=s.current;s.current=null;let t=l.current;t&&(t.focus(),t.setSelectionRange(e,e))}),eZ("div",{class:"artor-reply",children:[t?eZ("div",{class:"artor-hint",children:"Couldn't load teammates to mention"}):null,f?eZ("div",{class:"artor-mentions",role:"listbox","aria-label":"Mention a teammate",children:h.length>0?h.map((e,t)=>eZ("button",{type:"button",role:"option","aria-selected":t===u,class:`artor-mention-opt${t===u?" artor-mention-opt-active":""}`,onMouseDown:t=>{t.preventDefault(),g(e)},children:[eZ(tx,{name:e.name,size:20}),eZ("span",{class:"artor-mention-opt-name",children:e.name})]},e.id)):eZ("div",{class:"artor-mention-empty",children:tG(d.query)})}):null,eZ(tJ,{klass:"artor-reply-textarea",value:a,members:e,taRef:l,placeholder:n?"Reply…":"Reply… use @ to mention a teammate",disabled:r,onKeyDown:function(e){if(f){if("ArrowDown"===e.key&&m){e.preventDefault(),p(e=>(e+1)%h.length);return}if("ArrowUp"===e.key&&m){e.preventDefault(),p(e=>(e-1+h.length)%h.length);return}if("Enter"===e.key&&m){e.preventDefault(),g(h[u]);return}if("Escape"===e.key){e.preventDefault(),e.stopPropagation(),c(null);return}}"Enter"!==e.key||e.shiftKey||(e.preventDefault(),b())},onInput:e=>{let t=e.currentTarget;i(t.value),function(e){if(n)return;let t=e.selectionStart??e.value.length;c(tB(e.value,t)),p(0)}(t)}}),eZ("span",{class:"artor-charhint",children:`${a.length}/4000`}),eZ("div",{class:"artor-composer-divider",role:"presentation"}),eZ("div",{class:"artor-reply-actions",children:[n?null:eZ("button",{type:"button",class:"artor-round-btn","aria-label":"Mention a teammate",disabled:r,onClick:function(){let e=l.current?.selectionStart??a.length,t=a.slice(0,e),r=t.length>0&&!/\s$/.test(t),n=t+`${r?" ":""}@`+a.slice(e),o=e+ +!!r;i(n),s.current=o+1,c({query:"",start:o}),p(0)},children:eZ(e5,{paths:td,size:15})}),eZ("button",{type:"button",class:"artor-send-btn","aria-label":"Send reply",disabled:r||!a.trim()||a.length>4e3,onClick:b,children:eZ(e5,{paths:ts,size:15})})]})]})}function tD(){try{return window.localStorage??null}catch{return null}}function tj(e,t,r){if(e)try{e.setItem(t,JSON.stringify(r))}catch{}}function tH(e,t){let r=e[t.id];return void 0===r||t.comments.length>r}function tF(e,t){return`${e}${t.route}#artor-thread=${t.id}`}async function tU(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}var tq=["display","margin","padding","gap"];function tB(e,t){for(let r=t-1;r>=0;r--){let n=e[r];if("@"===n){if(r>0&&!/\s/.test(e[r-1]))return null;let n=e.slice(r+1,t);return/[\s[\]]/.test(n)?null:{query:n,start:r}}if(/\s/.test(n)||"]"===n||"["===n)break}return null}function tX(e,t,r,n,o){let a=e.slice(r),i=void 0!==o?`@${o}`:`@[${n}]`,l=a.startsWith(" ")?i:`${i} `;return{text:e.slice(0,t)+l+a,caret:t+l.length}}function tY(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tW(e,t){let r=[...t].filter(e=>""!==e.name.trim()).sort((e,t)=>t.name.length-e.name.length),n=e;for(let e of r){var o;n=n.replace(RegExp(`@${tY(e.name)}(?![\\w])`,"g"),(o=e.id,`@[${o}]`))}return n}function tV(e,t,r=8){let n=t.trim().toLowerCase();return(n?e.filter(e=>e.name.toLowerCase().includes(n)):e).slice(0,r)}function tG(e){return e?`No matches for @${e}`:"No teammates to mention yet"}function tK({body:e,names:t}){return eZ(z,{children:eq(e).map((e,r)=>{var n;return"text"===e.type?eZ(z,{children:e.value},r):eZ("span",{class:"artor-mention",children:(n=t.get(e.id))?`@${n}`:eU},r)})})}function tJ({klass:e,value:t,members:r,taRef:n,placeholder:o,disabled:a=!1,autofocus:i=!1,onKeyDown:l,onInput:s,onClick:d}){let c=eR(null);return eZ("span",{class:"artor-ta-wrap",children:[eZ("textarea",{ref:n,class:`${e} artor-ta-input`,placeholder:o,value:t,disabled:a,autofocus:i,maxLength:4e3,onKeyDown:l,onInput:s,onClick:d,onScroll:e=>{let t=c.current;t&&(t.scrollTop=e.currentTarget.scrollTop)}}),eZ("div",{ref:c,class:`${e} artor-ta-backdrop`,"aria-hidden":"true",children:[(function(e,t){let r=[...t].filter(e=>""!==e.name.trim()).sort((e,t)=>t.name.length-e.name.length),n=[];for(let t of r){let r=RegExp(`@${tY(t.name)}(?![\\w])`,"g"),o;for(;null!==(o=r.exec(e));){let e=o.index,t=e+o[0].length;n.some(r=>e<r.end&&t>r.start)||n.push({start:e,end:t})}}n.sort((e,t)=>e.start-t.start);let o=[],a=0;for(let t of n)t.start>a&&o.push({type:"text",value:e.slice(a,t.start)}),o.push({type:"mention",value:e.slice(t.start,t.end)}),a=t.end;return a<e.length&&o.push({type:"text",value:e.slice(a)}),o})(t,r).map((e,t)=>"mention"===e.type?eZ("span",{class:"artor-mention-live",children:e.value},t):eZ(z,{children:e.value},t)),"​"]})]})}function tZ({body:e,submitting:t,members:r,rosterError:n=!1,guest:o=!1,point:a={x:24,y:56},details:i=null,identify:l=null,onIdentitySubmit:s,aiIgnore:d=!1,onAiIgnore:c,dismissArmed:u=!1,wiggle:p=!1,onBody:h,onCancel:f,onDismissRequest:m,onWiggleEnd:g,onSubmit:b}){var w,v,y,x,_,k,E,C;let T,S,A,$,M,L,R,I=eR(null),N=eR(null),O=eR(null);tM(I);let{over:P,canSubmit:D,hint:j}=(S=(T=e.length)>4e3,A=!t&&e.trim().length>0&&!S,{over:S,canSubmit:A,hint:`${T}/4000`}),[H,F]=e$(null),[,U]=eM((e,t)=>e+1,0);eL(()=>{let e=()=>U();return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[]);let q={w:window.innerWidth,h:window.innerHeight},B=($=(w=H??void 0)?Math.max(0,w.w-32-4):280,M=w?w.h:240,v=36+$+8,y=q.w-a.x,x=a.x+32,L=v>y&&x>y,_=M+8,k=q.h-(a.y-32),E=a.y,R=_>k&&E>k,{...L?{right:Math.max(0,q.w-(a.x+32))}:{left:Math.max(0,a.x)},...R?{bottom:Math.max(0,q.h-a.y)}:{top:Math.max(0,a.y-32)},flipX:L,flipY:R}),[X,Y]=e$({dx:0,dy:0});C=eA(eh++,4),!e_.__s&&ej(C.__H,void 0)&&(C.__=()=>{var e;let t,r,n=I.current;if(!n)return;let o=n.getBoundingClientRect();(!H||Math.abs(H.w-o.width)>.5||Math.abs(H.h-o.height)>.5)&&F({w:o.width,h:o.height});let a={width:q.w,height:q.h},i=function(e,t,r=8){let n=0,o=0;return e.right>t.width-r&&(n=t.width-r-e.right),e.bottom>t.height-r&&(o=t.height-r-e.bottom),e.left+n<r&&(n=r-e.left),e.top+o<r&&(o=r-e.top),{dx:n,dy:o}}((e={width:o.width,height:o.height},{left:t=B.left??a.width-(B.right??0)-e.width,top:r=B.top??a.height-(B.bottom??0)-e.height,right:t+e.width,bottom:r+e.height}),a);(Math.abs(i.dx-X.dx)>.5||Math.abs(i.dy-X.dy)>.5)&&Y(i)},C.u=void 0,ef.__h.push(C));let[W,V]=e$(null),[G,K]=e$(0),[J,Z]=e$(!1),Q=W?tV(r,W.query):[],ee=null!==W,et=ee&&Q.length>0;function er(e){if(o)return;let t=e.selectionStart??e.value.length;V(tB(e.value,t)),K(0)}function en(t){if(!W)return;let r=W.start+1+W.query.length,n=tX(e,W.start,r,t.id,t.name);h(n.text),O.current=n.caret,V(null),K(0)}eL(()=>{if(null===O.current)return;let e=O.current;O.current=null;let t=N.current;t&&(t.focus(),t.setSelectionRange(e,e))});let eo=!o&&null!==i&&(null!==i.selector||null!==i.label||null!==i.quote||i.styles.length>0);return eZ("div",{ref:I,class:`artor-composer${p?" artor-composer-wiggle":""}${B.flipX?" artor-composer-flip-x":""}${B.flipY?" artor-composer-flip-y":""}`,style:{left:void 0===B.left?"auto":`${B.left}px`,right:void 0===B.right?"auto":`${B.right}px`,top:void 0===B.top?"auto":`${B.top}px`,bottom:void 0===B.bottom?"auto":`${B.bottom}px`,translate:X.dx||X.dy?`${X.dx}px ${X.dy}px`:void 0},popover:"manual",role:"dialog","aria-label":"New comment",onAnimationEnd:e=>{"artor-composer-wiggle"===e.animationName&&g?.()},children:[eZ("span",{class:"artor-composer-pin","aria-hidden":"true",children:eZ(e5,{paths:tl,size:16})}),eZ("div",{class:`artor-composer-card${null!==l&&s?" artor-composer-card-identify":""}`,children:null!==l&&s?eZ(tT,{identify:l,embedded:!0,onSubmit:s,onCancel:f}):eZ(z,{children:[n?eZ("div",{class:"artor-hint",children:"Couldn't load teammates to mention"}):null,ee?eZ("div",{class:"artor-mentions",role:"listbox","aria-label":"Mention a teammate",children:[0===Q.length?eZ("div",{class:"artor-mention-empty",children:tG(W.query)}):null,Q.map((e,t)=>eZ("button",{type:"button",role:"option","aria-selected":t===G,class:`artor-mention-opt${t===G?" artor-mention-opt-active":""}`,onMouseDown:t=>{t.preventDefault(),en(e)},children:[eZ(tx,{name:e.name,size:20}),eZ("span",{class:"artor-mention-opt-name",children:e.name})]},e.id))]}):null,eZ(tJ,{klass:"artor-textarea",value:e,members:r,taRef:N,placeholder:o||0===r.length?"Add a comment…":"Add a comment… use @ to mention a teammate",disabled:t,autofocus:!0,onKeyDown:function(e){if(ee){if("ArrowDown"===e.key&&et){e.preventDefault(),K(e=>(e+1)%Q.length);return}if("ArrowUp"===e.key&&et){e.preventDefault(),K(e=>(e-1+Q.length)%Q.length);return}if("Enter"===e.key&&et){e.preventDefault(),en(Q[G]);return}if("Escape"===e.key){e.preventDefault(),V(null);return}}let t="Escape"===e.key?"cancel":"Enter"===e.key&&!e.shiftKey&&D?"submit":null;("Escape"===e.key||"submit"===t)&&e.preventDefault(),"cancel"===t&&(m?m(e):f()),"submit"===t&&b()},onInput:e=>{let t=e.currentTarget;h(t.value),er(t)},onClick:e=>er(e.currentTarget)}),eZ("span",{class:`artor-charhint${P?" artor-charhint-over":""}`,"aria-live":"polite",children:j}),u?eZ("div",{class:"artor-hint artor-composer-discard-hint","aria-live":"polite",children:"Press Esc or click outside again to discard"}):null,eZ("div",{class:"artor-composer-divider","aria-hidden":"true"}),eZ("div",{class:"artor-composer-actions",children:[o?null:eZ("button",{type:"button",class:"artor-at-btn","aria-label":"Mention a teammate",disabled:t,onMouseDown:t=>{let r,n,o,a;t.preventDefault(),r=N.current?.selectionStart??e.length,o=(n=e.slice(0,r)).length>0&&!/\s$/.test(n)?" ":"",h(n+o+"@"+e.slice(r)),O.current=(a=r+o.length)+1,V({query:"",start:a}),K(0)},children:eZ(e5,{paths:td,size:16})}),o?null:eZ(z,{children:[eZ(e4,{checked:d,label:"AI ignore",tone:"light",onChange:e=>c?.(e)}),eZ("span",{class:"artor-composer-ai-label",children:"AI ignore"})]}),eZ("button",{type:"button",class:"artor-send-btn","aria-label":t?"Sending":"Send comment",onClick:b,disabled:!D,children:eZ(e5,{paths:ts,size:16})})]}),eo?eZ("div",{class:"artor-composer-details",children:[eZ("button",{type:"button",class:"artor-composer-details-head","aria-expanded":J,onClick:()=>Z(e=>!e),children:[eZ("span",{children:"Selection details"}),eZ(e5,{paths:J?ti:ta,size:14})]}),J?eZ("div",{class:"artor-composer-details-body",children:[null!==i.quote?eZ("div",{class:"artor-composer-details-quote",children:['"',i.quote,'"']}):null,null!==i.label?eZ("div",{class:"artor-composer-details-selector",children:i.label}):null,null!==i.selector?eZ("div",{class:"artor-composer-details-selector",children:i.selector}):null,i.styles.map(e=>eZ("div",{children:[eZ("span",{class:"artor-composer-details-prop",children:[e.prop,":"]})," ",e.value,";"]},e.prop))]}):null]}):null]})})]})}var tQ={position:"fixed",inset:"0",pointerEvents:"none",font:"13px/1.4 system-ui, -apple-system, sans-serif"},t0={position:"fixed",inset:"0",pointerEvents:"none"},t1={position:"fixed",right:"16px",bottom:"16px",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"8px",pointerEvents:"auto"},t2=`url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M2 0h14a16 16 0 0 1 16 16 16 16 0 0 1-16 16A16 16 0 0 1 0 16V2a2 2 0 0 1 2-2Z" fill="rgb(245,147,49)"/><path d="M16 10v12M10 16h12" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>')}") 0 0, crosshair`,t4={position:"fixed",inset:"0",pointerEvents:"none",background:"rgba(0,0,0,0.04)"},t5={position:"fixed",inset:"0",pointerEvents:"auto",background:"transparent"},t8=`
.artor-icon { display: inline-block; vertical-align: middle; flex: 0 0 auto; }
.artor-launcher {
  pointer-events: auto;
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  background: #e97a00;
  color: #fbfbf9;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(233,122,0,0.32);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.artor-launcher:hover { background: #c46600; }
@keyframes artor-dock-pop {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.artor-dock-toolbar {
  pointer-events: auto;
  display: flex;
  align-items: center;
  /* No gap here on purpose: a gap between the tray and the chevron handle would survive the
     collapse (gaps don't animate away with a 0fr track) and leave the closed pill lopsided.
     Spacing between tools lives inside .artor-dock-tools. */
  padding: 4px;
  border-radius: 24px;
  /* The Figma dock surface: a soft radial sheen (warm charcoal into near-black) at 85%, with a
     cream inner top highlight + dark inner bottom edge instead of the old flat ring. */
  background: radial-gradient(90% 170% at 42% 25%, rgba(45,43,36,0.85), rgba(16,13,4,0.85));
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow:
    inset 0 1px 1px rgba(254,235,211,0.2),
    inset 0 -1px 1px rgba(0,0,0,0.05),
    0 8px 20px -10px rgba(20,18,12,0.28),
    0 2px 2px rgba(0,0,0,0.1),
    0 1px 10px -2px rgba(0,0,0,0.25);
  transform-origin: bottom right;
  animation: artor-dock-pop 0.16s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: grab;
}
/* Guest dock: one pill CTA on the same glass surface (icon + label, no toolbar chrome). */
.artor-dock-guest-pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 18px 0 14px;
  border: 0;
  color: #fbfbf9;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  /* Ease the width between the two labels where the engine can animate auto (Chromium's
     interpolate-size); elsewhere the width steps and only the content fade shows. */
  interpolate-size: allow-keywords;
  transition: width 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.artor-pill-content {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  animation: artor-pill-swap 0.18s ease-out;
}
@keyframes artor-pill-swap {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
.artor-dock-toolbar:active { cursor: grabbing; }
/* The collapsible tools tray. The 1fr\u21920fr grid column is the one CSS mechanism that can
   animate to/from an auto content width, so the pill genuinely slides shut into the chevron
   handle instead of swapping between two variants. Ease-in-out: an on-screen element morphing,
   not an enter/exit. */
.artor-dock-tools-wrap {
  display: grid;
  grid-template-columns: 1fr;
  transition: grid-template-columns 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}
.artor-dock-min .artor-dock-tools-wrap { grid-template-columns: 0fr; }
.artor-dock-tools {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  opacity: 1;
  /* Fade back in slightly after the tray starts opening, so icons appear inside the pill. */
  transition: opacity 0.18s ease 0.1s;
}
.artor-dock-min .artor-dock-tools {
  opacity: 0;
  /* visibility flips only once the slide is done \u2014 keeps the fade visible, then drops the
     hidden buttons out of the tab order and hover reach. */
  visibility: hidden;
  transition: opacity 0.12s ease, visibility 0s linear 0.3s;
}
/* Horizontal clip ONLY while the tray is moving: clip (unlike hidden) honors mixed-axis
   values, so the hover tooltips can still escape vertically once the morph settles. Without
   this, the full-width tools row would visibly stick out of the shrinking pill. */
.artor-dock-sliding .artor-dock-tools {
  overflow-x: clip;
  overflow-y: visible;
  pointer-events: none;
}
/* The chevron handle flips to point back out when minimized \u2014 one icon, rotated, so the
   turn itself animates with the slide. */
.artor-tool-btn[data-tool="minimize"] .artor-icon {
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}
.artor-dock-min .artor-tool-btn[data-tool="minimize"] .artor-icon { transform: rotate(180deg); }
.artor-dock-divider {
  width: 1px;
  height: 24px;
  background: rgba(254,235,211,0.14);
  margin: 0 2px;
  flex: 0 0 auto;
}
.artor-settings-popover {
  /* Right-aligned to the gear button, not centered \u2014 same overflow reasoning as .artor-tool-tip.
     Dark glass like the toolbar it hangs off, so gear + panel read as one surface. */
  pointer-events: auto;
  position: absolute;
  bottom: calc(100% + 12px);
  right: 0;
  left: auto;
  min-width: 240px;
  background: rgba(16,13,4,0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  color: #fbfbf9;
  border: 0;
  border-radius: 16px;
  box-shadow: 0 0 0 1px rgba(254,235,211,0.1), 0 12px 32px rgba(20,18,12,0.28);
  padding: 6px 14px;
}
.artor-settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0 8px;
}
.artor-settings-headings {
  min-width: 0;
}
.artor-settings-title {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.artor-settings-project {
  font-size: 11px;
  font-weight: 400;
  color: rgba(251,251,249,0.6);
  margin-top: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}
.artor-settings-dash {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #fbfbf9;
  text-decoration: none;
  background: rgba(254,235,211,0.12);
  box-shadow: inset 0 0 0 1px rgba(254,235,211,0.12);
  cursor: pointer;
  transition: background 0.15s ease;
}
.artor-settings-dash:hover { background: rgba(254,235,211,0.2); }
.artor-settings-divider {
  height: 1px;
  background: rgba(254,235,211,0.14);
  margin: 2px -14px;
}
.artor-settings-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 12px;
  padding: 9px 0;
  white-space: nowrap;
}
.artor-switch {
  position: relative;
  width: 34px;
  height: 20px;
  border: 0;
  border-radius: 999px;
  background: rgba(255,255,255,0.22);
  padding: 0;
  cursor: pointer;
  flex: 0 0 auto;
  transition: background 0.15s ease;
}
.artor-switch-on { background: #e97a00; }
/* On the white composer card the off-track needs an ink wash (the default white one vanishes). */
.artor-switch-light { background: rgba(20,18,12,0.15); }
.artor-switch-light.artor-switch-on { background: #e97a00; }
.artor-switch-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #fbfbf9;
  box-shadow: 0 1px 3px rgba(20,18,12,0.3);
  transition: transform 0.15s ease;
}
.artor-switch-on .artor-switch-thumb { transform: translateX(14px); }
.artor-tool-btn {
  pointer-events: auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #fbfbf9;
  cursor: pointer;
  flex: 0 0 auto;
}
.artor-tool-btn:hover, .artor-tool-btn:focus-visible { background: rgba(255,255,255,0.12); }
/* Active = pressed INTO the glass (the Figma spec): a solid warm-grey well with a dark ring and
   layered inner shadows, not a flat highlight. */
.artor-tool-btn-active {
  background: #55524d;
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(0, 0, 0, 0.15),
    inset 0 -1px 10px 5px rgba(255, 255, 255, 0.1),
    inset 0 1px 6px 3px rgba(0, 0, 0, 0.25);
}
.artor-tool-tip {
  /* Right-aligned to the trigger button, not centered \u2014 the dock lives at the right edge of the
     viewport, so a centered tooltip on a button near the dock's own right edge (e.g. Minimize)
     would overflow off-screen. Anchoring to the button's right edge and growing left never does. */
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  background: rgba(16,13,4,0.95);
  color: #fbfbf9;
  font-size: 11px;
  font-weight: 500;
  padding: 4px 6px 4px 8px;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(254,235,211,0.1), 0 4px 12px rgba(20,18,12,0.28);
  opacity: 0;
  transform-origin: bottom right;
  pointer-events: none;
  transition: opacity 0.12s ease;
}
.artor-tool-btn:hover .artor-tool-tip, .artor-tool-btn:focus-visible .artor-tool-tip { opacity: 1; }
@media (prefers-reduced-motion: reduce) {
  .artor-dock-toolbar { animation: none; }
  .artor-dock-tools-wrap, .artor-dock-tools,
  .artor-tool-btn[data-tool="minimize"] .artor-icon { transition: none; }
  /* The pin and composer entries that used to live here were DEAD: their base declarations come
     later in the file, and a media query adds no specificity, so with equal selectors source order
     decided against them. They now sit in the end-of-stylesheet reduced-motion block, alongside the
     sheet rules that were moved there for exactly the same reason. The dock entries above are fine
     where they are - their base rules are declared earlier. */
}
/* The AI-ignore info glyph reuses the dock's dark glass tooltip to explain what the flag means. */
.artor-info { position: relative; display: inline-flex; align-items: center; color: #84817a; cursor: default; }
.artor-info .artor-tool-tip { white-space: normal; width: max-content; max-width: 220px; text-align: left; right: auto; left: 0; transform-origin: bottom left; }
.artor-info:hover .artor-tool-tip, .artor-info:focus-visible .artor-tool-tip { opacity: 1; }
/* Relative timestamps carry a hover tooltip with the full date (the dashboard's RelativeTime
   convention, mirrored here with the widget's own CSS tooltip). */
.artor-time-tip { position: relative; cursor: default; }
.artor-time-tip .artor-tool-tip { white-space: nowrap; right: auto; left: 0; transform-origin: bottom left; }
.artor-time-tip:hover .artor-tool-tip, .artor-time-tip:focus-visible .artor-tool-tip { opacity: 1; }
/* macOS-style key cap: a filled rounded chip (no border), one per key, slightly lighter than
   the tooltip surface \u2014 like Finder's "Open in Finder \u2318 O" hint. */
.artor-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: 5px;
  border: 0;
  background: rgba(254,235,211,0.22);
  color: #fbfbf9;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
}
.artor-chip {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(20,18,12,0.12);
  border-radius: 999px;
  padding: 5px 11px;
  background: #fbfbf9;
  color: #1a1a18;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(20,18,12,0.1);
}
.artor-chip[aria-pressed="true"] { background: #efe9e2; border-color: rgba(233,122,0,0.5); color: #ad5b00; }
.artor-selection-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  border-radius: 999px;
  padding: 6px 12px;
  background: #e97a00;
  color: #fbfbf9;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(233,122,0,0.32);
}
.artor-selection-btn:hover { background: #c46600; }
.artor-pin {
  /* "Comment-pin-closed" from Figma: a white glass speech-bubble card, sharp bottom-left corner
     as the tail (no separate triangle needed), fully rounded everywhere else. */
  position: absolute;
  /* Anchor the pin's bottom-left tip at the point, lifted clear so it never covers the element. */
  transform: translate(0, -100%);
  margin-top: -4px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
  border: 0;
  /* ONE radius + ONE tail, composed through custom properties. --pin-r is the round-corner
     radius (state-dependent: percentage for the square closed pin, fixed px once the box grows
     wide); --pin-tail is the sharp tail corner. State rules (badged/hover) change ONLY --pin-r,
     and flip rules change ONLY which corner the tail sits in \u2014 so no rule ever re-declares the
     other's value and the old specificity conflict (a :hover radius beating a flip's tail
     corner) cannot come back. Percentages are correct ONLY while the pin is square: on a wide
     badged pin 100% resolves to an ELLIPSE, which is why badged/hover switch to fixed px. */
  /* px, NOT a percentage: a percentage radius is resolved against the box, and the box is resizing
     during the hover morph (the badge/name slots slide), so a 100% -> 18px transition interpolates
     between two different coordinate systems and the corners visibly wobble. 16px is exactly half
     the 32px closed pin (24px avatar + 4px padding each side), so it still renders a true circle. */
  --pin-r: 16px;
  --pin-tail: 2px;
  border-radius: var(--pin-r) var(--pin-r) var(--pin-r) var(--pin-tail);
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    0 2px 2px 0 rgba(0,0,0,0.04),
    0 4px 4px 0 rgba(0,0,0,0.04),
    0 8px 8px 0 rgba(0,0,0,0.04),
    inset 0 0 0 1px rgba(0,0,0,0.03),
    inset 0 1px 0 0 rgba(0,0,0,0.05);
  pointer-events: auto;
  cursor: pointer;
  font: inherit;
  transition: border-radius 0.15s ease, box-shadow 0.15s ease;
}
/* The avatar+badge variant is NO LONGER square (avatar + counter side by side), so its radius stays
   just under half the 32px box height \u2014 the ends read as rounded corners on a bubble rather than the
   perfect semicircles of a capsule/lozenge (Figma Variant=NumberReplies). */
.artor-pin-badged { --pin-r: 14px; }
/* Hover morph (Figma Variant=hover): the pin grows into the preview card IN PLACE, from the
   same bottom-left anchor tail. Every moving part is a transition (not a display swap or
   keyframe), so opening and closing both animate: the badge slides shut while the author name
   slides open beside the avatar (which never moves \u2014 the shared element), the body+meta tray
   slides open below, and the corners ease to the card's radii. Same grid 0fr\u21941fr technique as
   the dock. Focus gets the same preview; the hovered pin lifts above its siblings. */
/* The UA's default focus ring is a hard blue rounded rect that ignores the pin's tail corner and
   clashes with the brand palette \u2014 and it appears on a plain mouse click, not just keyboard focus.
   Suppress it and give keyboard users an amber ring that follows the composed radius instead. */
.artor-pin:focus { outline: none; }
.artor-pin:focus-visible { outline: 2px solid #e97a00; outline-offset: 2px; }
.artor-pin:hover, .artor-pin:focus-visible {
  /* Only the radius VALUE \u2014 never the corner order. The tail corner belongs to the flip rules
     below; re-declaring border-radius here would beat them on specificity and drag the tail
     back to the bottom-left on a pin that grew in the opposite direction. */
  --pin-r: 18px;
  /* The hover variant swaps the inset weights: ring 5%, top highlight 3%. */
  box-shadow:
    0 2px 2px 0 rgba(0,0,0,0.04),
    0 4px 4px 0 rgba(0,0,0,0.04),
    0 8px 8px 0 rgba(0,0,0,0.04),
    inset 0 0 0 1px rgba(0,0,0,0.05),
    inset 0 1px 0 0 rgba(0,0,0,0.03);
  z-index: 1;
}
.artor-pin-head {
  display: flex;
  align-items: center;
  text-align: left;
  color: #1a1a18;
}
.artor-pin-badge-slot, .artor-pin-name-slot {
  display: grid;
  overflow: clip;
  /* margin, not margin-left: a flipped card reverses the head row, so the avatar gap has to move
     to the other side, and only a longhand named here would transition. The shorthand expands to all
     four longhands, so both sides animate. */
  transition:
    grid-template-columns 0.22s cubic-bezier(0.77, 0, 0.175, 1),
    margin 0.22s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.15s ease;
}
/* min-width 0 lets the 0fr track actually reach zero; the slot's own clip swallows the
   overflow while it slides. The badge needs one more hop: a grid ITEM with a definite width
   (the 32px counter) floors the 0fr track at that width even with min-width 0, but a definite
   width one level deeper does not \u2014 so the counter sits inside this shrinkable clip wrapper
   (same trick as .artor-pin-more-inner). */
.artor-pin-badge-slot > *, .artor-pin-name-slot > * { min-width: 0; }
.artor-pin-badge-clip { overflow: clip; min-width: 0; display: block; }
/* The badge overlaps the avatar via the SLOT's margin (not the pill's), so the clip boundary
   moves with it and the overlap eases away as the badge slides shut. */
/* position: relative keeps the pill painting OVER the avatar: the avatar now sits in a positioned
   wrapper (for the unread dot), and an unpositioned pill would otherwise slip underneath it. */
.artor-pin-badge-slot { position: relative; grid-template-columns: 1fr; margin-left: -4px; opacity: 1; }
/* The counter's 2px white ring is a box-shadow, painted OUTSIDE its box, and both the slot and the
   clip wrapper are overflow: clip, so without this margin the ring is cut off on every side and
   the counter reads as unringed. 2px = the ring width. Browsers without overflow-clip-margin
   simply keep clipping it (no ring, the pre-ring look), never anything worse. */
.artor-pin-badge-slot, .artor-pin-badge-clip { overflow-clip-margin: 2px; }
/* The avatar\u2194name gap rides on the slot's margin, not the name's padding: padding can't be
   compressed by the 0fr track (box width \u2265 padding), so it would leave an 8px-wide residue on
   the closed pill. The margin transitions away with the slide instead. */
.artor-pin-name-slot { grid-template-columns: 0fr; margin-left: 0; opacity: 0; }
.artor-pin:hover .artor-pin-badge-slot, .artor-pin:focus-visible .artor-pin-badge-slot {
  grid-template-columns: 0fr;
  margin-left: 0;
  opacity: 0;
}
.artor-pin:hover .artor-pin-name-slot, .artor-pin:focus-visible .artor-pin-name-slot {
  grid-template-columns: 1fr;
  margin-left: 8px;
  opacity: 1;
}
/* Edge flips: mirror the growth direction near viewport edges. The tail
   corner follows the anchor point. */
/* NOTE the X axis carries NO transform. A flipped pin is anchored by right instead of left (see
   PinView), which is what actually gives the card room to grow: an absolutely-positioned box with
   width:auto shrinks to fit the space between its anchored edge and the far edge of its containing
   block, so a left-anchored pin near the right edge got ~80px to lay out in and rendered the card as
   an unreadable column. A transform could never fix that - it runs after layout, so it only slid the
   already-squeezed box. Only the Y axis is transform-flipped, where height is content-driven and
   nothing is being squeezed. */
.artor-pin-flip-x {
  /* Tail moves to the bottom-right (the anchor is now on the pin's right edge). */
  border-radius: var(--pin-r) var(--pin-r) var(--pin-tail) var(--pin-r);
}
.artor-pin-flip-y {
  transform: translate(0, 0);
  margin-top: 4px;
  /* Grows downward, so the anchor is at the TOP-left \u2014 the tail follows it there. */
  border-radius: var(--pin-tail) var(--pin-r) var(--pin-r) var(--pin-r);
}
.artor-pin-flip-x.artor-pin-flip-y {
  border-radius: var(--pin-r) var(--pin-tail) var(--pin-r) var(--pin-r);
}
/* flip-x mirrors NOTHING about the card's content. It changes which edge the box is anchored by (in
   PinView, via right \u2014 the part that actually gives the card room) and which corner carries the
   tail. Everything inside reads identically in both directions: avatar and author name on the LEFT,
   body indented clear of the avatar on the left, timestamp in the far corner.
   The earlier version mirrored the head row (row-reverse, avatar to the right) on the theory that
   the avatar is a shared element that should stay put on the anchored edge during the hover morph.
   In practice that scattered the card across three competing alignments and read as broken, and it
   dragged a train of corrections behind it \u2014 margin-left/right swaps for the avatar gap and the badge
   overlap, a right-aligned name, a mirrored body indent, a mirrored timestamp corner, plus their
   specificity twins in the narrow-viewport block. All of that is gone with the mirroring itself.
   Accepted cost, stated plainly: the avatar is no longer pinned to the anchored edge, so on a flipped
   pin it slides leftward as the card expands instead of staying still. */
.artor-pin-card-name {
  display: block;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
}
.artor-pin-more {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 0fr;
  opacity: 0;
  transition:
    grid-template-rows 0.22s cubic-bezier(0.77, 0, 0.175, 1),
    grid-template-columns 0.22s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.15s ease;
}
.artor-pin:hover .artor-pin-more, .artor-pin:focus-visible .artor-pin-more {
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  opacity: 1;
  transition:
    grid-template-rows 0.22s cubic-bezier(0.77, 0, 0.175, 1),
    grid-template-columns 0.22s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.18s ease 0.08s;
}
/* No fixed width on the inner (it must shrink with the 0fr track, like the dock's tools row);
   the card's 240px width lives on the body/meta lines themselves, so the open tray's
   max-content \u2014 which is what the 1fr track grows to \u2014 is exactly the card width. */
.artor-pin-more-inner {
  overflow: clip;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  color: #1a1a18;
}
.artor-pin-card-body {
  box-sizing: border-box;
  /* 248px is the desktop card width. --pin-card-max is set per pin from the space actually
     available in the direction the card grows (see pinCardMaxWidth); the 100vw term is only the
     fallback for a render with no viewport (SSR/tests). */
  width: min(248px, var(--pin-card-max, calc(100vw - 56px)));
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* Vertical spacing is margin, not padding: padding on a line-clamped box lets a sliver of
     the clipped next line show through it. */
  padding: 0 8px 0 32px;
  margin: 4px 0;
  font-size: 13px;
  line-height: 1.35;
  word-break: break-word;
}
.artor-pin-card-meta {
  box-sizing: border-box;
  width: min(248px, var(--pin-card-max, calc(100vw - 56px)));
  text-align: right;
  padding: 4px 8px 4px 4px;
  font-size: 12px;
  font-weight: 500;
  color: #84817a;
  white-space: nowrap;
}
/* Landing demo portraits. Opt-in host variables point only to bundled fixture assets. */
:host([data-artor-demo-portraits]) .artor-avatar { position: relative; }
:host([data-artor-demo-portraits]) .artor-avatar[title="Mara"],
:host([data-artor-demo-portraits]) .artor-avatar[title="Mara Silva"] {
  --artor-demo-avatar: var(--artor-demo-mara);
}
:host([data-artor-demo-portraits]) .artor-avatar[title="Andy"] {
  --artor-demo-avatar: var(--artor-demo-andy);
}
:host([data-artor-demo-portraits]) .artor-avatar[title="Jules Chen"] {
  --artor-demo-avatar: var(--artor-demo-jules);
}
:host([data-artor-demo-portraits]) .artor-avatar::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: var(--artor-demo-avatar, none);
  background-size: cover;
  background-position: center;
  pointer-events: none;
}
.artor-pin-resolved .artor-avatar { filter: grayscale(1); }
.artor-pin-dimmed { opacity: 0.45; }
/* A dimmed (resolved-hidden) pin becomes fully readable while previewed. */
.artor-pin-dimmed:hover, .artor-pin-dimmed:focus-visible { opacity: 1; }
.artor-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #fbfbf9;
  font-weight: 700;
  box-shadow: 0 0 0 2px #ffffff;
  flex: 0 0 auto;
}
/* Guest avatar: a muted grey circle (never a hue-colored one, unlike member initials) so an
   accountless visitor's content reads as such at a glance. */
.artor-avatar--guest {
  background: rgba(20, 18, 12, 0.08);
  color: #84817a;
}
.artor-pin-counter {
  width: 32px;
  height: 24px;
  border-radius: 999px;
  /* Warm faint grey, the same tint as the pressed chip / active button: on the white glass pill a
     white counter had no edge at all, so the number read as floating loose beside the avatar. The
     2px white ring matches .artor-avatar's, so the two halves of the pill read as one pair. */
  background: #efe9e2;
  box-shadow: 0 0 0 2px #ffffff;
  color: #1a1a18;
  font-size: 11px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}
.artor-pin-counter-resolved { color: #84817a; }
.artor-highlight {
  /* Figma "selection-box": a 2px amber inset ring + 8% amber wash, 4px corners. No backdrop
     blur on the box (removed in the design \u2014 the highlighted element must stay sharp); the
     label chip keeps its own blur. The ring is an inset box-shadow (not an outline) so it hugs
     the radius. */
  box-shadow: inset 0 0 0 2px rgba(233,122,0,0.8);
  background: rgba(233,122,0,0.08);
  border-radius: 4px;
}
/* Pick mode shares the selection-box look; the class stays as the pick overlay's hook. */
.artor-highlight-dimmed { opacity: 0.45; }
/* The corner under the chip goes square so chip + box fuse into one tab shape. */
.artor-highlight-tab-right { border-top-left-radius: 0; }
.artor-highlight-tab-left { border-top-right-radius: 0; }
.artor-highlight-chip {
  position: absolute;
  bottom: 100%;
  display: inline-flex;
  max-width: 320px;
  white-space: nowrap;
  background: rgba(233,122,0,0.8);
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px 4px 0 0;
  pointer-events: none;
}
.artor-highlight-chip-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.artor-highlight-chip-hint { flex: none; }
.artor-highlight-chip-right { left: 0; }
.artor-highlight-chip-left { right: 0; }
.artor-panel {
  pointer-events: auto;
  background: #fbfbf9;
  color: #1a1a18;
  border: 1px solid rgba(20,18,12,0.08);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(20,18,12,0.16);
  padding: 8px;
  max-width: 280px;
  max-height: 40vh;
  overflow: auto;
}
.artor-panel-title { font-weight: 700; margin-bottom: 6px; }
/* Guest identity gate (the "guest-identify" state's form, replacing the composer/dock). */
.artor-guest-identify {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 240px;
  max-width: 240px;
}
/* Embedded in the composer bubble: the card's own asymmetric padding (tuned for the textarea +
   action row) is zeroed and the 24px inset lives on the form, so the margin is even on all four
   sides instead of the two paddings stacking. */
/* Two classes on purpose: .artor-composer-card's own padding is declared LATER in this sheet, so
   the single-class override loses on source order and the two paddings stack. */
.artor-composer-card.artor-composer-card-identify { padding: 0; }
.artor-composer-card-identify .artor-guest-identify {
  padding: 16px;
  width: auto;
  max-width: none;
}
/* Edge-to-edge hairline above the actions (the Figma design): the negative margins cancel the
   form's 16px inset so the rule spans the full bubble, then the row re-pads itself. Rhythm from
   the mock: 16 above the divider (8 form gap + 8 margin), 8 below, 16 at the bottom. */
.artor-composer-card-identify .artor-guest-identify-actions {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin: 8px -16px 0;
  padding: 8px 16px 0;
}
.artor-guest-identify-title {
  font-weight: 600;
  font-size: 12.5px;
  color: #1a1a18;
}
.artor-guest-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
/* Field label per the Figma "guest-identity-form" set: 11px semibold muted, above the input. */
.artor-guest-field-label {
  font-size: 11px;
  font-weight: 600;
  color: #84817a;
}
.artor-input {
  width: 100%;
  border: 1px solid rgba(20,18,12,0.12);
  border-radius: 8px;
  padding: 7px 8px;
  font: inherit;
  font-size: 12.5px;
  color: #1a1a18;
  background: #fbfbf9;
  box-sizing: border-box;
}
.artor-input:focus { outline: none; border-color: #e97a00; }
/* A Continue press with a hole in the form marks the field, gently, until it is focused. */
.artor-input-invalid { border-color: #d92d20; }
/* A damped oscillation, not a metronome: amplitude decays 3->2->1 and the snappy in/soft out
   curve keeps it from reading as linear ticks. */
@keyframes artor-guest-shake {
  10%, 90% { transform: translateX(-1px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-3px); }
  40%, 60% { transform: translateX(3px); }
}
.artor-guest-shake { animation: artor-guest-shake 400ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both; }
@media (prefers-reduced-motion: reduce) {
  .artor-guest-shake { animation: none; }
}
.artor-guest-identify-error { max-width: none; text-align: left; color: #ad5b00; }
.artor-guest-identify-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}
/* The footer pair from the Figma "guest-identity-form" set: both 32px/10px-radius with a 12.5px
   medium label and 12px side padding. Cancel is a PLAIN text button (no fill, no ring \u2014 the DS
   .artor-btn surface shadow is dropped); Continue keeps the brand-amber .artor-btn-primary fill
   under white text, swapping the white-surface inset ring for the mock's soft amber glow. */
.artor-guest-identify-cancel,
.artor-guest-identify-submit {
  padding: 0 12px;
  font-size: 12.5px;
}
.artor-guest-identify-cancel { background: transparent; color: #84817a; box-shadow: none; }
.artor-guest-identify-cancel:hover:not(:disabled) { color: #1a1a18; }
.artor-guest-identify-submit {
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(140, 71, 0, 0.25);
}
/* The guest-readonly in-place downgrade's one-line notice, and the list drawer's per-version
   scope note (both share the base .artor-hint look). */
.artor-guest-notice, .artor-guest-scope-hint { max-width: 220px; }
.artor-list-tabs {
  display: flex;
  gap: 4px;
  padding: 8px 14px 0;
}
.artor-list-tab {
  appearance: none;
  border: none;
  background: transparent;
  color: inherit;
  opacity: 0.55;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 7px;
  cursor: pointer;
}
.artor-list-tab:hover {
  opacity: 0.8;
}
.artor-list-tab-on {
  opacity: 1;
  background: rgba(127, 127, 127, 0.14);
}
.artor-msg-route {
  font-size: 10px;
  color: inherit;
  opacity: 0.55;
  border: 1px solid rgba(127, 127, 127, 0.35);
  border-radius: 999px;
  padding: 1px 7px;
  max-width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.artor-list-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 28px 16px;
}
.artor-list-empty .artor-hint {
  pointer-events: none;
  max-width: none;
  text-align: center;
}
.artor-list-empty-cta {
  appearance: none;
  border: 1px solid rgba(127, 127, 127, 0.4);
  background: rgba(127, 127, 127, 0.12);
  color: inherit;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
}
.artor-list-empty-cta:hover {
  background: rgba(127, 127, 127, 0.2);
}
.artor-hint {
  pointer-events: none;
  max-width: 240px;
  text-align: right;
  color: #84817a;
  font-size: 12px;
}
.artor-toast {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  /* Fits a 320px viewport: the dock sits 16px from each edge. */
  max-width: min(300px, calc(100vw - 32px));
  background: #b3261e;
  color: #fbfbf9;
  border-radius: 8px;
  padding: 8px 10px;
  box-shadow: 0 8px 24px rgba(20,18,12,0.24);
}
.artor-toast-text { font-size: 12px; }
/* The design-system "Btn" (Type=Ghost) from Figma: transparent icon-only square, same 10px
   radius family as the Default button. */
.artor-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 4px;
  border-radius: 10px;
  flex: 0 0 auto;
}
.artor-icon-btn:hover { background: rgba(20,18,12,0.06); }
.artor-toast .artor-icon-btn:hover { background: rgba(255,255,255,0.18); }
.artor-skel { height: 12px; border-radius: 6px; background: linear-gradient(90deg,#eceae3,#f4f3ef,#eceae3); background-size: 200% 100%; animation: artor-shimmer 1.2s infinite; margin: 6px 0; }
.artor-skel-1 { width: 200px; }
.artor-skel-2 { width: 140px; }
@keyframes artor-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
/* Thread drawer \u2014 the Figma "sdk-drawer-comments" surface as a full-height right sheet with a
   16px margin all around: the translucent cream card slides in from the right (enter \u2192
   ease-out) and slides back out on close (exit ~25% faster). */
@keyframes artor-sheet-in {
  from { transform: translateX(calc(100% + 16px)); }
  to { transform: translateX(0); }
}
@keyframes artor-sheet-out {
  from { transform: translateX(0); }
  to { transform: translateX(calc(100% + 16px)); }
}
.artor-sheet {
  pointer-events: auto;
  position: fixed;
  top: 16px;
  right: 16px;
  bottom: 16px;
  left: auto;
  height: auto;
  width: min(424px, calc(100vw - 32px));
  display: flex;
  flex-direction: column;
  /* 94%: a hint of the page through the blur, but the sheet reads as a solid surface (80% let
     busy prototypes bleed through the thread text). */
  background: rgba(251,251,249,0.94);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  color: #1a1a18;
  margin: 0;
  border: 0;
  padding: 0;
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.08),
    0 24px 32px -8px rgba(0,0,0,0.15), 0 8px 16px -4px rgba(0,0,0,0.1),
    0 1px 2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04), 0 0 0 4px rgba(0,0,0,0.04);
  overflow: hidden;
  animation: artor-sheet-in 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
/* In-place navigation (list row -> thread, back -> list, pin swap): the replacing sheet plays a
   short directional content-slide (24px + fade, ease-out) instead of the full off-screen
   slide-in, so the surface reads as one panel navigating. Forward (drill-in) arrives from the
   right; back arrives from the left. Declared BEFORE .artor-sheet-closing so the exit animation
   still wins when both classes are present. */
@keyframes artor-sheet-nav-fwd {
  from { transform: translateX(24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes artor-sheet-nav-back {
  from { transform: translateX(-24px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.artor-sheet-nav-fwd { animation: artor-sheet-nav-fwd 0.2s cubic-bezier(0.165, 0.84, 0.44, 1); }
.artor-sheet-nav-back { animation: artor-sheet-nav-back 0.2s cubic-bezier(0.165, 0.84, 0.44, 1); }
/* Close: the sheet stays mounted while this plays; the panel unmounts on animation end
   (useSheetClose \u2014 with no running animation, reduced-motion/jsdom, it unmounts at once). */
.artor-sheet-closing {
  animation: artor-sheet-out 0.22s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}
/* Phone layout. A 424px right-hand drawer with 16px margins technically "fits" a 375px viewport
   (the width already collapses to 100vw - 32px), but it then covers the whole prototype and still
   flies in sideways \u2014 the reviewer loses the very thing they are commenting on. Below 640px it
   becomes a full-width BOTTOM sheet instead: capped height, so the top of the page stays visible
   above it, and enter/exit slide along the Y axis to match where it now lives.
   The keyframes are REDEFINED rather than renamed on purpose: useSheetClose waits for a running
   animation named artor-sheet-out before unmounting, so a new name here would make the sheet
   vanish instantly on mobile. Same name, different track. */
@media (max-width: 639px) {
  @keyframes artor-sheet-in {
    from { transform: translateY(calc(100% + 8px)); }
    to { transform: translateY(0); }
  }
  @keyframes artor-sheet-out {
    from { transform: translateY(0); }
    to { transform: translateY(calc(100% + 8px)); }
  }
  /* In-place navigation keeps its short horizontal content-slide \u2014 it reads as the same panel
     navigating, which is still true on a bottom sheet. */
  .artor-sheet {
    top: auto;
    left: 8px;
    right: 8px;
    bottom: 8px;
    width: auto;
    max-height: min(86dvh, calc(100dvh - 16px));
    border-radius: 20px;
  }
  /* No hover preview card on a narrow viewport. Hover is a desktop affordance \u2014 a touch device never
     produces it \u2014 and there is no room for the card: pinCardMaxWidth caps it to the space beside the
     anchor, and once both sides are under ~136px (a viewport under ~272px, which a pinch-zoomed phone
     reaches in CSS px) the readability floor leaves a ~110px column of wrapped text. A tap opens the
     full thread drawer, which is the better surface anyway.
     Accepted trade, stated plainly: a MOUSE user on a narrow desktop window also loses the preview,
     and :focus-visible was the only non-pointer way to see it \u2014 Enter still opens the drawer and the
     pin's aria-label still carries the thread's state, so nothing is unreachable. */
  .artor-pin:hover .artor-pin-more,
  .artor-pin:focus-visible .artor-pin-more {
    grid-template-rows: 0fr;
    grid-template-columns: 0fr;
    opacity: 0;
  }
  .artor-pin:hover .artor-pin-name-slot,
  .artor-pin:focus-visible .artor-pin-name-slot {
    grid-template-columns: 0fr;
    margin-left: 0;
    margin-right: 0;
    opacity: 0;
  }
  /* The badge (reply count / resolved tick) is the pin's only content now, so it must not slide shut. */
  .artor-pin:hover .artor-pin-badge-slot,
  .artor-pin:focus-visible .artor-pin-badge-slot {
    grid-template-columns: 1fr;
    margin-left: -4px;
    opacity: 1;
  }
  /* No flip-x twins needed here any more: flip-x stopped mirroring the head row, so there is no
     margin-right for the suppression above to have to take back. */
  /* Without the card there is nothing to grow, so the radius stays the closed pin's. */
  .artor-pin:hover, .artor-pin:focus-visible { --pin-r: 16px; }
  .artor-pin-badged:hover, .artor-pin-badged:focus-visible { --pin-r: 14px; }

  /* The composer becomes a bottom DRAWER rather than a card floating next to the picked point. At
     phone width a 280px card beside a pin has nowhere to go: it covers the thing being commented on,
     and the software keyboard then shoves it around. Same geometry and breakpoint as .artor-sheet
     above, so the two read as one surface language.
     !important is load-bearing: the component sets all four offsets inline (it has to, since the
     desktop placement picks which edge to anchor), and an inline style otherwise wins over this rule.
     The anchored element is still outlined by the composer's HighlightBox, which is what replaces the
     fused pin as the "you're commenting on this" signal. */
  .artor-composer {
    left: 8px !important;
    right: 8px !important;
    bottom: 8px !important;
    top: auto !important;
    flex-direction: column !important;
    align-items: stretch !important;
    /* The desktop placement math still runs (it cannot know about this breakpoint), and its
       post-layout overflowShift correction is written as an INLINE translate. Against a drawer that
       this rule has already pinned to both edges, that correction is nonsense: it is computed from a
       desktop anchor the drawer no longer uses, so it shoves the full-width drawer sideways by a
       different amount for every pick point, hanging it off one edge. The offsets above are only
       half the override - the transform has to be neutralised too. */
    translate: none !important;
  }
  /* The fused pin is a pointer-precision affordance \u2014 meaningless on a full-width drawer. */
  .artor-composer .artor-composer-pin { display: none; }
  .artor-composer .artor-composer-card {
    width: auto;
    max-width: none;
    border-radius: 20px;
    /* The drawer is anchored to the BOTTOM with no top, so a tall card (expanded "Selection
       details", the discard hint, a mention list) grows upward past the viewport top and clips its
       own header out of reach. Same cap the thread sheet uses, with the overflow on the card. */
    max-height: min(86dvh, calc(100dvh - 16px));
    overflow-y: auto;
    /* The entrance animation lives HERE, not on the root: the root's class list churns (the dismiss
       wiggle is added and removed), and each churn re-applies the root's animation shorthand, which
       replays the whole slide-up entrance after every absorbed dismiss. The card's class list never
       changes. */
    animation: artor-sheet-in 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}
/* The list drawer's rich rows (Figma ThreadsList comment-row): the same radius-16 card + hover
   surface as the panel's message rows, whole-row clickable, menu chip revealed on hover. */
.artor-list-row { cursor: pointer; }
.artor-list-row-open {
  display: block;
  width: 100%;
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
}
.artor-list-row-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* An open row menu pins the row in its hover state so the menu never floats over a flat row. */
.artor-msg-menu-open { background: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
.artor-msg-menu-open .artor-msg-actions { opacity: 1; }
/* Pins stay interactive during pick mode ON PURPOSE: a reviewer commenting on a screen full of
   existing pins must be able to open one to read or reply without first leaving pick mode. The pick
   capture listener already leaves widget chrome untouched, and the root-level disarm listener turns
   pick mode off as the click lands, so the pin does what it says.
   Cost of the trade, deliberately taken: a pin now covers the ~32px of page beneath it, so an element
   directly under a pin has to be picked from a spot the pin isn't sitting on. */
.artor-sheet-head {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(132,129,122,0.2);
}
.artor-sheet-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 8px;
}
.artor-sheet-title { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 500; }
.artor-sheet-action-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
/* ThreadsList variant: the lone Show-resolved switch group sits right-aligned. */
.artor-sheet-action-row-end { justify-content: flex-end; }
.artor-sheet-ai { display: inline-flex; align-items: center; gap: 6px; }
.artor-sheet-ai-label { font-size: 12px; font-weight: 500; }
.artor-sheet-head-actions { display: inline-flex; align-items: center; gap: 8px; }
.artor-sheet-state { font-size: 12px; color: #84817a; }
/* 32px white round-10 icon button (Figma's close / ellipsis / pencil / trash / @ chips). */
.artor-round-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  border: 0;
  border-radius: 10px;
  background: #ffffff;
  color: #1a1a18;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 1px 5px -2px rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(0,0,0,0.05);
}
.artor-round-btn:hover { background: #f4f3ef; }
.artor-round-btn:disabled { opacity: 0.5; cursor: default; }
.artor-round-btn-danger { background: #b3261e; color: #ffffff; }
.artor-round-btn-danger:hover { background: #93201a; }
/* Ghost variant (the drawer's close button): bare glyph, hover wash only. */
.artor-round-btn-ghost { background: transparent; box-shadow: none; }
.artor-round-btn-ghost:hover { background: rgba(20,18,12,0.06); }
/* More-options dropdown, anchored under the header ellipsis. */
.artor-menu-wrap { position: relative; display: inline-flex; }
.artor-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 5;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05), 0 8px 16px -4px rgba(0,0,0,0.12),
    0 2px 4px rgba(0,0,0,0.06);
}
.artor-menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #1a1a18;
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
}
.artor-menu-item:hover { background: rgba(20,18,12,0.06); }
.artor-menu-item-danger { color: #b3261e; }
.artor-menu-item-armed { background: #b3261e; color: #ffffff; }
.artor-menu-item-armed:hover { background: #93201a; }
/* Local unread indicator (per-browser seen store). */
.artor-avatar-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
/* Badge placement, shared by the thread-list row AND the pin: the dot's centre sits on the
   avatar's TOP-right edge (bottom-right is where the pin's reply counter overlaps it), the white
   ring separates it from the initials, and z-index lifts it above the counter pill (which paints
   over the avatar), never tucked under it. */
.artor-unread-dot-avatar {
  position: absolute;
  top: -2px;
  right: -2px;
  z-index: 1;
  box-shadow: 0 0 0 2px #ffffff;
}
.artor-unread-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 50%;
  /* Green, not accent orange: "new" must read differently from the accent-colored pins/CTAs. */
  background: #22c55e;
}
/* Message list \u2014 each comment is a radius-16 card. The white card surface is the HOVER state
   (Figma comment-row State=Hover), not a static own-message marker; the viewer's OWN messages
   keep their hover-revealed edit/delete chips. */
.artor-sheet-msgs { flex: 1 1 auto; overflow: auto; padding: 16px; display: flex; flex-direction: column; gap: 8px; }
.artor-msg {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 16px;
  /* One 12px inset on every side. The header's hover chips are 32px tall but the row is sized
     to the 24px avatar (see .artor-msg-actions), so the top inset equals the bottom one instead
     of the chips silently adding 8px above the name. */
  padding: 12px;
  transition: background 0.15s ease, box-shadow 0.15s ease;
}
.artor-msg:hover, .artor-msg:focus-within { background: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
/* Soft-deleted message (Figma comment-row State=State3): a white card with the trash mark, a
   two-line notice, and a secondary Undo. The delete is committed only when the panel closes. */
.artor-msg-deleted {
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}
.artor-msg-deleted-col { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
.artor-msg-deleted-title { font-size: 12px; font-weight: 500; }
.artor-msg-deleted-sub { font-size: 12px; }
.artor-msg-top { display: flex; align-items: center; gap: 8px; min-height: 24px; }
.artor-msg-top .artor-avatar { box-shadow: 0 0 0 2px #ffffff; }
.artor-msg-author { font-weight: 500; font-size: 12px; }
.artor-msg-time { font-size: 12px; color: #84817a; }
/* The 32px chips overhang the 24px header row by 4px top and bottom (negative margins) so they
   never stretch it; hover reveals them in place. */
.artor-msg-actions { margin: -4px 0 -4px auto; display: inline-flex; gap: 4px; opacity: 0; transition: opacity 0.12s ease; }
.artor-msg:hover .artor-msg-actions, .artor-msg:focus-within .artor-msg-actions { opacity: 1; }
/* 32px left inset = avatar (24) + header gap (8): the body starts flush under the author name. */
.artor-msg-text { font-size: 13px; line-height: 1.45; white-space: pre-wrap; word-break: break-word; padding: 0 4px 0 32px; }
/* Inline own-message editing. */
.artor-msg-edit { display: flex; flex-direction: column; gap: 4px; padding: 0 4px 0 32px; }
.artor-msg-edit-textarea {
  min-height: 56px;
  max-height: 160px;
  resize: vertical;
  border: 1px solid rgba(20,18,12,0.18);
  border-radius: 8px;
  padding: 7px 9px;
  font: inherit;
  font-size: 13px;
  color: #1a1a18;
  background: #ffffff;
  box-sizing: border-box;
}
.artor-msg-edit-textarea:focus { outline: none; border-color: #e97a00; box-shadow: 0 0 0 3px rgba(233,122,0,0.18); }
.artor-msg-edit-row { display: flex; align-items: center; justify-content: flex-end; gap: 6px; }
.artor-msg-edit-row .artor-charhint { margin-right: auto; padding: 0; }
/* Reply composer \u2014 the footer's white card (Figma "type-conatiner"): borderless textarea, a
   hairline divider, then the @ chip and the amber round send. */
.artor-reply {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px;
  padding: 4px 8px 8px;
  background: rgba(255,255,255,0.85);
  border-radius: 12px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.03), inset 0 1px 0 rgba(0,0,0,0.05),
    0 8px 8px rgba(0,0,0,0.04), 0 4px 4px rgba(0,0,0,0.04), 0 2px 2px rgba(0,0,0,0.04);
}
.artor-reply-textarea {
  min-height: 56px;
  max-height: 140px;
  resize: none;
  border: 0;
  padding: 8px;
  font: inherit;
  font-size: 12px;
  color: #1a1a18;
  background: transparent;
  box-sizing: border-box;
}
.artor-reply-textarea:focus { outline: none; }
.artor-reply-actions { display: flex; align-items: center; justify-content: space-between; padding-top: 4px; }
/* New-comment composer \u2014 the Figma "new-comment-pin" card: a fused amber pin (flat bottom-left
   tail on the picked point) + a translucent white card floating next to it. Positioned from the
   pick point (inline left/top via composerPlacement), never bottom-center. */
.artor-composer {
  pointer-events: auto;
  position: fixed;
  inset: auto;
  margin: 0;
  border: 0;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  overflow: visible;
  color: #1a1a18;
  font-size: 12px;
}
/* Growth-direction flips. The pin occupies the SAME 32px box either way (the placement anchors the
   assembly by its far edge when flipped, see composerPlacement), so only the card changes sides and
   the pin never leaves the picked point \u2014 which also means the pin's tail corner never has to move. */
.artor-composer-flip-x {
  flex-direction: row-reverse;
}
.artor-composer-flip-y {
  align-items: flex-end;
}
.artor-composer-pin {
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(245,147,49,0.85);
  color: #ffffff;
  border-radius: 100% 100% 100% 2px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2), 0 8px 8px rgba(0,0,0,0.04),
    0 4px 4px rgba(0,0,0,0.04), 0 2px 2px rgba(0,0,0,0.04);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
.artor-composer-card {
  position: relative;
  width: min(280px, calc(100vw - 60px));
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 12px;
  padding: 4px 8px 8px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.03), inset 0 1px 0 rgba(0,0,0,0.05),
    0 8px 8px rgba(0,0,0,0.04), 0 4px 4px rgba(0,0,0,0.04), 0 2px 2px rgba(0,0,0,0.04);
}
/* Dismiss-guard wiggle: a horizontal shake that decays to rest, played when Esc / an outside
   click is absorbed instead of discarding an unsent draft. */
@keyframes artor-composer-wiggle {
  0%, 100% { transform: translateX(0); }
  15% { transform: translateX(-10px); }
  35% { transform: translateX(8px); }
  55% { transform: translateX(-6px); }
  75% { transform: translateX(4px); }
  90% { transform: translateX(-2px); }
}
.artor-composer-wiggle { animation: artor-composer-wiggle 320ms ease-in-out; }
.artor-composer-discard-hint {
  max-width: none;
  text-align: left;
  padding: 0 8px;
  color: #ad5b00;
  font-size: 11px;
}
.artor-textarea {
  width: 100%;
  min-height: 56px;
  resize: none;
  border: 0;
  border-radius: 8px;
  padding: 8px;
  font: inherit;
  font-size: 12px;
  color: #1a1a18;
  background: transparent;
  box-sizing: border-box;
}
.artor-textarea:focus { outline: none; }
.artor-composer-divider { height: 1px; background: rgba(0,0,0,0.05); }
.artor-composer-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
}
.artor-composer-ai-label { font-size: 12px; font-weight: 500; color: #1a1a18; }
.artor-at-btn {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #1a1a18;
  cursor: pointer;
  flex: 0 0 auto;
}
.artor-at-btn:hover { background: rgba(20,18,12,0.06); }
.artor-at-btn:disabled { opacity: 0.5; cursor: default; }
.artor-send-btn {
  width: 32px;
  height: 32px;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 10px;
  background: #e97a00;
  color: #fbfbf9;
  cursor: pointer;
  flex: 0 0 auto;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 0 1px rgba(0,0,0,0.05),
    0 1px 5px -2px rgba(0,0,0,0.1);
}
.artor-send-btn:hover { background: #c46600; }
.artor-send-btn:disabled { opacity: 0.5; cursor: default; }
.artor-composer-details {
  background: rgba(132,129,122,0.08);
  border-radius: 6px;
  padding: 4px 8px;
}
.artor-composer-details-head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border: 0;
  padding: 0;
  background: transparent;
  color: #84817a;
  font: inherit;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
}
.artor-composer-details-body {
  margin-top: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10px;
  line-height: 1.6;
  color: #84817a;
  word-break: break-word;
}
.artor-composer-details-quote {
  font-family: inherit;
  font-style: italic;
  color: #1a1a18;
}
.artor-composer-details-selector { color: #ad5b00; font-weight: 600; }
.artor-composer-details-prop { color: #84817a; }
.artor-charhint { font-size: 10px; color: #84817a; text-align: right; padding: 0 8px; }
.artor-charhint-over { color: #b3261e; font-weight: 700; }
.artor-mention { color: #ad5b00; font-weight: 600; }
/* Live mention highlighting while composing: the textarea's own text is transparent (caret kept
   visible) and a backdrop div paints the same text underneath, with recognized @Name mentions in
   the brand accent \u2014 instant "the tag worked" feedback. The mention keeps the surrounding font
   weight so backdrop glyph metrics match the textarea's caret/selection positions exactly. */
.artor-ta-wrap { position: relative; display: flex; flex-direction: column; flex: 1 1 auto; min-width: 0; }
.artor-ta-backdrop {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  white-space: pre-wrap;
  word-break: break-word;
  min-height: 0;
  max-height: none;
  resize: none;
}
.artor-ta-input {
  position: relative;
  z-index: 1; /* above the backdrop despite coming first in the DOM */
  width: 100%;
  color: transparent;
  caret-color: #1a1a18;
  background: transparent;
}
.artor-ta-input::placeholder { color: #84817a; opacity: 1; }
.artor-ta-input::selection { background: rgba(233,122,0,0.25); }
.artor-mention-live { color: #e97a00; }
.artor-mentions {
  /* Anchored ABOVE its card (bottom, not top): both composers sit near the bottom of their
     containers (the reply card at the drawer's foot; the floating composer often near the
     viewport's bottom edge), so a below-anchored picker gets cut off exactly when it's needed. */
  position: absolute;
  bottom: calc(100% + 6px);
  top: auto;
  left: 8px;
  right: 8px;
  max-height: 200px;
  overflow: auto;
  background: #fbfbf9;
  border: 1px solid rgba(20,18,12,0.12);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(20,18,12,0.16);
  padding: 4px;
}
.artor-mention-empty {
  padding: 8px 10px;
  color: #84817a;
  font-size: 12px;
}
.artor-mention-opt {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  text-align: left;
  border: 0;
  background: transparent;
  border-radius: 6px;
  padding: 6px 8px;
  font: inherit;
  color: #1a1a18;
  cursor: pointer;
}
.artor-mention-opt:hover, .artor-mention-opt-active { background: #efe9e2; }
.artor-mention-opt-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
/* The design-system "Btn" (Type=Default) from Figma: white surface, 10px radius, 32px tall,
   12px medium label, soft drop + 1px inset ring + inset top highlight. The primary variant
   keeps the same geometry on the brand amber. */
.artor-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  border: 0;
  background: #ffffff;
  color: #1a1a18;
  border-radius: 10px;
  padding: 0 10px;
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  box-shadow:
    0 1px 5px -2px rgba(0,0,0,0.1),
    inset 0 0 0 1px rgba(0,0,0,0.05),
    inset 0 1px 0 0 rgba(255,255,255,0.1);
  cursor: pointer;
}
.artor-btn:hover { background: #f5f4f0; }
.artor-btn-primary { background: #e97a00; color: #fbfbf9; }
.artor-btn-primary:hover { background: #c46600; }
.artor-btn:disabled { opacity: 0.5; cursor: default; }
.artor-btn-active { background: #efe9e2; box-shadow: 0 1px 5px -2px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(20,18,12,0.16); color: #1a1a18; }
.artor-btn-active:hover { background: #e7e0d7; }
/* Ghost text button (Figma Btn Type=Ghost, normal): bare label, hover wash only. */
.artor-btn-ghost { background: transparent; box-shadow: none; }
.artor-btn-ghost:hover { background: rgba(20,18,12,0.06); }
/* The DS size scale (Figma Btn Size=Small/Large; the default .artor-btn is Medium 32px). */
.artor-btn-sm { height: 24px; border-radius: 8px; padding: 0 8px; font-size: 11px; }
.artor-btn-lg { height: 40px; border-radius: 12px; padding: 0 14px; font-size: 13px; }
/* Focus ring (Figma Btn/Switch State=Focus): a 2px amber outline that follows the radius. */
.artor-btn:focus-visible,
.artor-icon-btn:focus-visible,
.artor-switch:focus-visible {
  outline: 2px solid rgba(233,122,0,0.45);
  outline-offset: 0;
}
.artor-thread-ai-off {
  flex: 0 0 auto;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #84817a;
  border: 1px solid rgba(20,18,12,0.14);
  border-radius: 999px;
  padding: 1px 6px;
}
/* Reduced-motion rules for the sheet live at the END of the stylesheet: a media query adds no
   specificity, so with equal selectors SOURCE ORDER decides \u2014 placed before the .artor-sheet
   animation declarations these would silently lose (that was a real bug). The drawer then
   appears/disappears/navigates in place instead of sliding. */
@media (prefers-reduced-motion: reduce) {
  .artor-sheet, .artor-sheet-closing, .artor-sheet-nav-fwd, .artor-sheet-nav-back { animation: none; }
  .artor-msg { transition: none; }
  /* Moved down from the mid-file block, where every one of these lost on source order to its own
     base declaration: the pin's hover morph (badge slide, name slide, tray growth, radius ease) ran
     in full for a reduced-motion reviewer, and .artor-pin:hover .artor-pin-more (0,3,0) outranked
     the suppression outright besides. */
  .artor-pin, .artor-pin-badge-slot, .artor-pin-name-slot, .artor-pin-more,
  .artor-pin:hover .artor-pin-more, .artor-pin:focus-visible .artor-pin-more { transition: none; }
  /* The armed composer still shows the inline discard hint, so the warning survives without motion. */
  .artor-composer-wiggle { animation: none; }
  /* ...and the phone drawer's slide-up entrance, which lives on the card (see the narrow-viewport
     block above). */
  .artor-composer .artor-composer-card { animation: none; }
  /* The guest pill's label swap and width ease are decorative; reduced motion gets the flip. */
  .artor-pill-content { animation: none; }
  .artor-dock-guest-pill { transition: none; }
}
`,t3=null;let t6="artor-demo-review:me",t7=(e,t=200)=>new Response(JSON.stringify(e),{status:t,headers:{"Content-Type":"application/json"}});var t9=e.i(610);function re(e){let t="2026-09-16T10:00:00.000Z";return[{id:`prototype-v${e}-folder`,route:`/demo/folders/${e}`,offsetXPct:95,offsetYPct:50,anchorText:"Product design",anchorRole:"link",elementSelector:"#folder-product-design",resolved:!1,createdAt:t,kind:"element",authorId:"demo-mara",comments:[{id:`prototype-v${e}-comment`,author:"Mara",authorId:"demo-mara",createdAt:t,body:3===e?"Could we give each team’s folder its own color? It would make these easier to find.":"The folder colors make these much easier to find. Let’s review the latest prototype."}]}]}e.s(["LiveReview",0,function({prototypeVersion:e}){return(0,t.useEffect)(()=>{let t=function(e){let t,i,l;if(t3)return t3;if(!e?.demo&&!((t=location.hostname.toLowerCase().replace(/\.$/,"").split(".")).length>=3&&""!==t[0]&&"preview"===t[1]))return{teardown:()=>{}};let s=(i="idle",l=[],{state:()=>i,start:()=>"idle"===i&&(i="starting",!0),activate(){"starting"===i&&(i="active")},register(e){l.push(e)},stop(){for(;l.length;)try{l.pop()()}catch{}i="idle"}});if(!s.start())return t3??{teardown:()=>{}};let d=function(e){var t,r,n;let o,a,i=function(e){try{let t=(void 0)??Y;if(e.querySelector(`[${q}]`))return null;let r=e.createElement("div");r.setAttribute(q,""),r.style.cssText="all: initial; display: block; position: fixed; inset: 0; pointer-events: none; z-index: 2147483647;";let n=r.attachShadow({mode:"closed"});e.body.appendChild(r);let o=e=>{try{e.hidePopover?.()}catch{}try{e.showPopover?.()}catch{}},a=[],i=()=>{for(let e=a.length-1;e>=0;e--){let t=a[e];t&&!n.contains(t)&&a.splice(e,1)}};n.addEventListener("toggle",e=>{i();let t=e.target;if(!(t instanceof Element)||!t.hasAttribute("popover"))return;let r=a.indexOf(t);-1!==r&&a.splice(r,1),"open"===e.newState&&a.push(t)},!0);let l=!1,s=!1,d=()=>{if("function"==typeof r.showPopover){if(s)return void f();s=!0;try{c()}finally{s=!1}}},c=()=>{r.hasAttribute("popover")||r.setAttribute("popover","manual");let t=n.activeElement??e.activeElement;o(r);let s=l;for(let e of(l=!1,i(),[...a]))(!1!==W(e)||s)&&o(e);try{for(let e of Array.from(n.querySelectorAll("[popover]")))!0!==W(e)||a.includes(e)||o(e)}catch{}let d=n.activeElement??e.activeElement;if(t&&d!==t)try{t.focus({preventScroll:!0})}catch{}};d();let u=()=>{let t=e.body;try{let r=Array.from(e.querySelectorAll("dialog[open]")).filter(e=>{try{return e.matches(":modal")}catch{return!1}}).pop();r&&(t=r)}catch{}try{if(r.parentElement!==t)return t.appendChild(r),l=!0,g()?d():f(),!0}catch{}return!1},p=0,h=0,f=()=>{let r=t();if(p){if(r-h<=3e3)return;try{e.defaultView?.clearTimeout(p)}catch{}p=0,u()||d();return}let n=e.defaultView;n&&(h=r,p=n.setTimeout(()=>{p=0,u()||d()},1e3))},m=[],g=()=>{let e=t();for(;m.length;){let t=e-(m[0]??0);if(t>1e3||t<0)m.shift();else break}return!(m.length>=10)&&(m.push(e),!0)},b=e=>{if("open"===e.newState&&e.target!==r){if(X(e.target))return void f();if(!u()){if(!g())return void f();d()}}};e.addEventListener("toggle",b,!0);let w=new MutationObserver(t=>{e.body.contains(r)&&t.every(e=>B(e.target)||"childList"===e.type&&[...e.addedNodes,...e.removedNodes].every(e=>B(e))&&(e.addedNodes.length>0||e.removedNodes.length>0))||u()});w.observe(e.body,{childList:!0,subtree:!0,attributeFilter:["open"]});let v=new MutationObserver(()=>{e.body.contains(r)||u()});return v.observe(e.body,{childList:!0}),{root:n,teardown:()=>{v.disconnect(),w.disconnect(),e.removeEventListener("toggle",b,!0),p&&e.defaultView?.clearTimeout(p),p=0;try{r.hidePopover?.()}catch{}r.remove()}}}catch{return null}}(e.doc);if(!i)return null;t=e.win,ev||(ev=t.requestAnimationFrame.bind(t));let l=function(e,t){let r=new Map,n=new Set,o=new WeakMap,a=!1,i=0,l=new e.ResizeObserver(()=>d()),s=new e.IntersectionObserver(e=>{for(let a of e){let e=o.get(a.target);if(e)for(let o of e)r.has(o)&&(a.isIntersecting?n.add(o):(n.delete(o),t(o,null)))}d()},{root:null,threshold:0});function d(){a||(a=!0,i=e.requestAnimationFrame(()=>{for(let[e,o]of(a=!1,i=0,r)){if(!o.el.isConnected){t(e,null);continue}n.has(e)&&t(e,ep(o.el,o.offsetXPct,o.offsetYPct))}}))}let c=()=>d();return e.addEventListener("scroll",c,{passive:!0,capture:!0}),e.addEventListener("resize",c,{passive:!0}),{track(e){r.set(e.id,e);let t=o.get(e.el);t||(t=new Set,o.set(e.el,t),l.observe(e.el),s.observe(e.el)),t.add(e.id),d()},untrack(e){let t=r.get(e);if(!t)return;let a=o.get(t.el);a&&(a.delete(e),0===a.size&&(l.unobserve(t.el),s.unobserve(t.el),o.delete(t.el))),r.delete(e),n.delete(e)},teardown(){l.disconnect(),s.disconnect(),e.removeEventListener("scroll",c,{capture:!0}),e.removeEventListener("resize",c),i&&e.cancelAnimationFrame(i),a=!1,i=0,r.clear(),n.clear()}}}({requestAnimationFrame:(r=e.win,ev??r.requestAnimationFrame.bind(r)),cancelAnimationFrame:e.win.cancelAnimationFrame.bind(e.win),addEventListener:e.win.addEventListener.bind(e.win),removeEventListener:e.win.removeEventListener.bind(e.win),ResizeObserver:e.win.ResizeObserver,IntersectionObserver:e.win.IntersectionObserver},(e,t)=>s.setPosition(e,t)),s=function(e){let{client:t,repositioner:r,resolveAnchor:n,doc:o}=e,a=[],i=new Map,l=new Set,s=new Map,d=new Map,c=new Map,u=new Set,p=0,h=!1;function f(){for(let e of u)try{e()}catch{}}function m(e,t){l.has(e.id)&&r.untrack(e.id),l.add(e.id),s.set(e.id,t),i.set(e.id,ep(t,e.offsetXPct,e.offsetYPct)),r.track({id:e.id,el:t,offsetXPct:e.offsetXPct,offsetYPct:e.offsetYPct})}function g(e){d.set(e,(d.get(e)??0)+1)}function b(e){let t,r=e.thread.id,n=(t=Math.min(Math.max(0,c.get(r)??0),30),Math.max(1,Math.floor(12/2**t)));if((d.get(r)??0)>=n)return!1;if(!e.hasElement||!e.exact)return!0;let o=s.get(r);return!o||!o.isConnected}return{async loadRoute(e){let u,g=++p;h=!0,f();try{u=await t.listComments(e)}finally{g===p&&(h=!1)}if(g!==p)return;for(let e of l)r.untrack(e);l.clear(),s.clear(),i.clear(),d.clear(),c.clear();let b=[];for(let e of u){let t=n(eQ(e),o),r=null!==t.el;b.push({thread:e,via:t.via,hasElement:r,exact:t.exact,range:t.range}),t.el?m(e,t.el):i.set(e.id,null)}a=b,f()},setPosition(e,t){i.set(e,t),f()},rerender(){f()},subscribe:e=>(u.add(e),()=>{u.delete(e)}),threads:()=>a,position:e=>i.get(e),loading:()=>h,resolveThreadAnchor(e){try{return n(eQ(e),o)}catch{return{el:null,via:"note",exact:!1}}},needsReresolve:()=>a.some(b),canRefill:()=>a.some(e=>(d.get(e.thread.id)??0)>0),retryUnanchored:()=>{for(let e of a){let t=e.thread.id;(d.get(t)??0)!==0&&(c.set(t,(c.get(t)??0)+1),d.delete(t))}},reresolve(){let e=!1,t=a.map(t=>{var a;let u;if(!b(t))return t;try{u=n(eQ(t.thread),o)}catch{return t}return u.el?(u.exact?(a=t.thread.id,d.delete(a),c.delete(a)):g(t.thread.id),s.get(t.thread.id)===u.el&&t.exact===u.exact?t:(m(t.thread,u.el),e=!0,{thread:t.thread,via:u.via,hasElement:!0,exact:u.exact,range:u.range})):(g(t.thread.id),t.hasElement?(l.has(t.thread.id)&&r.untrack(t.thread.id),l.delete(t.thread.id),s.delete(t.thread.id),i.set(t.thread.id,null),e=!0,{thread:t.thread,via:u.via,hasElement:!1,exact:!1,range:void 0}):t)});return!!e&&(a=t,f(),!0)}}}({client:e.client,repositioner:l,resolveAnchor:ec,doc:e.doc}),d=(n=()=>s.rerender(),a=(o=Element.prototype).attachShadow,o.attachShadow=function(e){let t=a.call(this,e);if("open"===e.mode)try{n()}catch{}return t},()=>{o.attachShadow=a}),c=function(e,t){let r=()=>e.location.pathname+e.location.search,n=e.navigation;if(n){let e=()=>t(r());return n.addEventListener("navigatesuccess",e),()=>n.removeEventListener("navigatesuccess",e)}let o=e.history.pushState,a=e.history.replaceState,i=()=>t(r());return e.history.pushState=function(...e){let t=o.apply(this,e);return i(),t},e.history.replaceState=function(...e){let t=a.apply(this,e);return i(),t},e.addEventListener("popstate",i),e.addEventListener("hashchange",i),()=>{e.history.pushState=o,e.history.replaceState=a,e.removeEventListener("popstate",i),e.removeEventListener("hashchange",i)}}(e.win,t=>{(async()=>(await e.client.refreshScope(),await s.loadRoute(t)))()});return U(T(e1,{client:e.client,controller:s,root:i.root}),i.root),s.loadRoute(e.win.location.pathname+e.win.location.search),{teardown:()=>{c(),d(),l.teardown(),U(null,i.root),i.teardown()}}}({client:function(e,t){let i=t??globalThis.fetch.bind(globalThis),l=`${e}/__dn_review`,s=null,d=null,c=null,u="pending",p=!1,h=null,f=new Map,m=new Map,g=new Map,b=null,w=null,v=0,y=null,x=null;async function _(){try{let e=await i(`${l}/session`,{credentials:"include"});if(401===e.status||403===e.status)return r("signedout");if(!e.ok)return r("hidden");let t=await e.json();if(null!==t&&"object"==typeof t){if("hidden"===t.widget)return r("hidden");if("identify"===t.widget){let e="name_email"===t.identify?"name_email":"name";return{...r("guest-identify"),identify:e}}let e=t.token;if("string"==typeof e){let r=!0===t.guest,o=r?"guest":!1===t.canComment?"readonly":"full",a="own"===t.scope?"own":"all";return{state:o,token:e,scope:a,project:n(t.project),deploymentId:"string"==typeof t.deploymentId?t.deploymentId:null,identify:null,guest:r}}}return r("hidden")}catch{return r("hidden")}}async function k(){let e=await _();return u=e.state,d=e.scope,p=e.guest,s=e.token,y=e.project,x=e.deploymentId,h=e.identify,s}function E(){for(let e of(v++,g.values()))e.abort();g.clear(),m.clear(),f.clear(),b=null}let C=!1,T=null;async function S(e,t){let r=e;for(;;){let e=await t(r);if(p&&401===e.status){var n;let e=await (n=r,null!==s&&s!==n?Promise.resolve(s):null!==T?T:C?(u="guest-readonly",Promise.resolve(null)):(C=!0,T=(async()=>{let e=await _();return null!==e.token?(u=e.state,d=e.scope,p=e.guest,s=e.token,y=e.project,x=e.deploymentId,h=e.identify,e.token):("hidden"===e.state?(u="hidden",s=null):"guest-identify"===e.state?(u="guest-identify",h=e.identify,s=null):u="guest-readonly",null)})().finally(()=>{T=null})));if(null!==e&&e!==r){r=e;continue}}return e.ok&&(C=!1),e}}async function z(){return null!==s?s:"signedout"===u||"hidden"===u?null:(null===c&&(c=k().finally(()=>{c=null})),c)}async function A(e){let t=await z();if(null===t)return[];let r=f.get(e);if(void 0!==r)return r;let n=m.get(e);if(void 0!==n)return n;let o=g.get(e);void 0!==o&&o.abort();let s=new AbortController;g.set(e,s);let d=v,c=(async()=>{try{let r=await S(t,t=>i(`${l}/comments?route=${encodeURIComponent(e)}`,{headers:{Authorization:`Bearer ${t}`},signal:s.signal}));if(401===r.status||403===r.status)return await M(r)||p&&401===r.status||(u="signedout"),[];if(!r.ok)return[];let n=await r.json();if(null!==n&&"object"==typeof n&&"threads"in n){let t=n.threads;if(Array.isArray(t)){let r=t.filter(a);return d===v&&f.set(e,r),r}}return[]}catch{return[]}finally{m.delete(e),g.delete(e)}})();return m.set(e,c),c}async function $(){let e=await z();if(null===e)return[];try{let t=await S(e,e=>i(`${l}/comments`,{headers:{Authorization:`Bearer ${e}`}}));if(401===t.status||403===t.status)return await M(t)||p&&401===t.status||(u="signedout"),[];if(!t.ok)return[];let r=await t.json();if(null!==r&&"object"==typeof r&&"threads"in r){let e=r.threads;if(Array.isArray(e))return e.filter(a)}return[]}catch{return[]}}async function M(e){return 403===e.status&&("guest"===u||"guest-readonly"===u)&&(await e.json().catch(()=>null))?.error==="commenting_disabled"&&(u="guest-readonly",!0)}async function L(e){let t=await z();if(null===t)return null;try{let r=await S(t,t=>i(`${l}/comments`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({body:e.body,route:e.route,offsetXPct:e.offsetXPct,offsetYPct:e.offsetYPct,anchorText:e.anchorText,anchorRole:e.anchorRole,elementSelector:e.elementSelector,scrollY:e.scrollY,kind:e.kind,quote:e.textRange?.quote,prefix:e.textRange?.prefix,suffix:e.textRange?.suffix})}));if(!r.ok)return await M(r),null;let n=await r.json();if(null!==n&&"object"==typeof n&&"thread"in n){let t=n.thread;if(null!==t&&"object"==typeof t)return f.delete(e.route),g.get(e.route)?.abort(),g.delete(e.route),m.delete(e.route),t}return null}catch{return null}}async function R(e,t){let r=await z();if(null===r)return!1;try{return!!(await i(`${l}/resolve`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({threadId:e,resolved:t})})).ok&&(E(),!0)}catch{return!1}}async function I(e,t){let r=await z();if(null===r)return!1;try{return!!(await i(`${l}/ignore`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({threadId:e,ignored:t})})).ok&&(E(),!0)}catch{return!1}}async function N(e,t){let r=await z();if(null===r)return null;try{let n=await S(r,r=>i(`${l}/reply`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({threadId:e,body:t})}));if(!n.ok)return await M(n),null;let o=await n.json();if(null!==o&&"object"==typeof o&&"thread"in o){let e=o.thread;if(null!==e&&"object"==typeof e)return E(),e}return null}catch{return null}}async function O(e){let t=await z();if(null===t)return!1;try{let r=await S(t,t=>i(`${l}/delete`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({threadId:e})}));return r.ok?(E(),!0):(await M(r),!1)}catch{return!1}}async function P(e,t){let r=await z();if(null===r)return null;try{let n=await S(r,r=>i(`${l}/comment-edit`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({commentId:e,body:t})}));if(!n.ok)return await M(n),null;let o=await n.json();if(null!==o&&"object"==typeof o&&"thread"in o){let e=o.thread;if(null!==e&&"object"==typeof e)return E(),e}return null}catch{return null}}async function D(e){let t=await z();if(null===t)return null;try{let r=await S(t,t=>i(`${l}/comment-delete`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({commentId:e})}));if(!r.ok)return await M(r),null;let n=await r.json();if(null!==n&&"object"==typeof n&&"threadDeleted"in n){E();let e=n.thread;return{threadDeleted:!0===n.threadDeleted,thread:null!==e&&"object"==typeof e?e:null}}return null}catch{return null}}async function j(){let e=await z();if(null===e)return null;try{let t=await S(e,e=>i(`${l}/me`,{headers:{Authorization:`Bearer ${e}`}}));if(!t.ok)return null;let r=await t.json();return null!==r&&"object"==typeof r&&"id"in r&&"name"in r&&"string"==typeof r.id&&"string"==typeof r.name?r:null}catch{return null}}async function H(){if(null!==b)return b;if(null===w){let e=v;w=(async()=>{let t=await z();if(null===t)return[];try{let r=await i(`${l}/members`,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)return[];let n=await r.json();if(null!==n&&"object"==typeof n&&"members"in n){let t=n.members;if(Array.isArray(t)){let r=t.filter(o);return e===v&&(b=r),r}}return[]}catch{return[]}finally{w=null}})()}return w}return{ensureToken:z,listComments:A,listAllComments:$,postComment:L,me:j,members:H,resolveThread:R,setThreadAiIgnored:I,replyToThread:N,deleteThread:O,editComment:P,deleteComment:D,deploymentId:()=>x,readOnly:()=>"full"!==u&&"guest"!==u,widgetState:()=>u,guestIdentify:()=>h,submitGuestIdentity:async function e(e,t){try{let r=await i(`${l}/session`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,...null!==t?{email:t}:{}})});if(!r.ok){let e=null;try{let t=await r.json(),n=null!==t&&"object"==typeof t?t.message:null;"string"==typeof n&&n.length>0&&(e=n.slice(0,200))}catch{}return{ok:!1,message:e}}let o=await r.json();if(null===o||"object"!=typeof o)return{ok:!1,message:null};let a=o.token;return"string"!=typeof a||!0!==o.guest?{ok:!1,message:null}:(s=a,u="guest",p=!0,C=!1,d="own"===o.scope?"own":"all",y=n(o.project),x="string"==typeof o.deploymentId?o.deploymentId:null,h=null,{ok:!0})}catch{return{ok:!1,message:null}}},projectInfo:()=>y,refreshScope:async function e(){if(p||"own"!==d)return!1;let e=await _();return null!==e.token&&"all"===e.scope&&(s=e.token,d="all",u=e.state,y=e.project,x=e.deploymentId,E(),!0)},scopeEpoch:()=>v,reviewScope:()=>d??"all"}}(location.origin,e?.fetchImpl),doc:document,win:window});return d?(s.register(d.teardown),s.activate(),t3={teardown:()=>{s.stop(),t3=null}}):(s.stop(),{teardown:()=>{}})}({demo:!0,fetchImpl:function(e={}){let t=e.storeKey??"artor-demo-review:v1",r=e.initialThreads??[];function n(){try{let e=localStorage.getItem(t);if(null===e)return r;let n=JSON.parse(e);return Array.isArray(n)?n:r}catch{return r}}function o(e){r=e;try{localStorage.setItem(t,JSON.stringify(e))}catch{}}let a=function(){try{let e=localStorage.getItem(t6);if(e)return JSON.parse(e)}catch{}let e={id:crypto.randomUUID(),name:"you"};try{localStorage.setItem(t6,JSON.stringify(e))}catch{}return e}(),i=[a,{id:"demo-leo",name:"léo"},{id:"demo-ana",name:"ana"}];return async(r,l)=>{let s=new URL("string"==typeof r||r instanceof URL?String(r):r.url,location.origin),d=s.pathname.replace(/^.*__dn_review/,""),c=()=>{try{let e=l?.body??(r instanceof Request,null);return e?JSON.parse(String(e)):{}}catch{return{}}};if("/session"===d)return t7({token:"demo-token",scope:"all",canComment:!0,deploymentId:t,project:e.project??{name:"artor landing",version:1,dashboardUrl:"https://artor.app",slug:"landing",orgSlug:"artor"}});if("/me"===d)return t7(a);if("/members"===d)return t7({members:i});if("/comments"===d&&"GET"===(l?.method??"GET").toUpperCase()){let e=s.searchParams.get("route");return t7({threads:e?n().filter(t=>t.route===e):n()})}if("/comments"===d){let e=c(),t=new Date().toISOString(),r={id:crypto.randomUUID(),route:"string"==typeof e.route?e.route:"/",offsetXPct:"number"==typeof e.offsetXPct?e.offsetXPct:50,offsetYPct:"number"==typeof e.offsetYPct?e.offsetYPct:50,anchorText:"string"==typeof e.anchorText?e.anchorText:null,anchorRole:"string"==typeof e.anchorRole?e.anchorRole:null,elementSelector:"string"==typeof e.elementSelector?e.elementSelector:null,resolved:!1,createdAt:t,kind:"string"==typeof e.kind?e.kind:"element",textRange:"string"==typeof e.quote?{quote:e.quote,prefix:"string"==typeof e.prefix?e.prefix:"",suffix:"string"==typeof e.suffix?e.suffix:""}:null,authorId:a.id,comments:[{id:crypto.randomUUID(),body:"string"==typeof e.body?e.body:"",author:a.name,authorId:a.id,createdAt:t}]},i=n();return i.push(r),o(i),t7({thread:r})}if("/reply"===d){let e=c(),t=n(),r=t.find(t=>t.id===e.threadId);return r?(r.comments.push({id:crypto.randomUUID(),body:"string"==typeof e.body?e.body:"",author:a.name,authorId:a.id,createdAt:new Date().toISOString()}),o(t),t7({thread:r})):t7({error:"not found"},404)}if("/resolve"===d||"/ignore"===d){let e=c(),t=n(),r=t.find(t=>t.id===e.threadId);return r?("/resolve"===d?r.resolved=!0===e.resolved:r.aiIgnored=!0===e.ignored,o(t),t7({ok:!0})):t7({error:"not found"},404)}if("/delete"===d){let e=c();return o(n().filter(t=>t.id!==e.threadId)),t7({ok:!0})}if("/comment-edit"===d){let e=c(),t=n(),r=t.find(t=>t.comments.some(t=>t.id===e.commentId));if(!r)return t7({error:"not found"},404);let a=r.comments.find(t=>t.id===e.commentId);return a&&"string"==typeof e.body&&(a.body=e.body),o(t),t7({thread:r})}if("/comment-delete"===d){let e=c(),t=n(),r=t.find(t=>t.comments.some(t=>t.id===e.commentId));if(!r)return t7({error:"not found"},404);r.comments=r.comments.filter(t=>t.id!==e.commentId);let a=0===r.comments.length;return o(a?t.filter(e=>e.id!==r.id):t),t7({threadDeleted:a,thread:a?null:r})}return t7({error:"unknown endpoint"},404)}}(e?{storeKey:`artor-folder-review:v${e}`,initialThreads:re(e),project:{name:"Design workspace",version:e,dashboardUrl:`${location.origin}/#prototype-demo`,slug:"folders",orgSlug:"acme"}}:void 0)});if(e){let e=document.querySelector("[data-artor-web-sdk]");if(e)for(let[t,r]of(e.setAttribute("data-artor-demo-portraits",""),Object.entries(t9.samplePeople)))e.style.setProperty(`--artor-demo-${t}`,`url("${r.image}")`)}return t.teardown},[e]),null},"prototypeThreads",0,re],41048)}]);