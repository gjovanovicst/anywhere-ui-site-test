const e="anywhere-ui";let t,n,l,o=!1,s=!1,c=!1,r=!1;const i="undefined"!=typeof window?window:{},a=i.CSS,u=i.document||{head:{}},f={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},d=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),y=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),h=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=m(e,n),c=p(t,o),r=b(n);f.ael(s,l,c,r),(t.o=t.o||[]).push((()=>f.rel(s,l,c,r)))}))},p=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(l){de(l)}},m=(e,t)=>4&t?u:e,b=e=>0!=(2&e),w=new WeakMap,v=e=>"sc-"+e.$,S={},g=e=>"object"==(e=typeof e)||"function"===e,j=(e,t,...n)=>{let l=null,o=null,s=!1,c=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!g(l))&&(l+=""),s&&c?r[r.length-1].h+=l:r.push(s?k(null,l):l),c=s)};if(i(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,C);const a=k(e,null);return a.p=t,r.length>0&&(a.m=r),a.v=o,a},k=(e,t)=>({t:0,S:e,h:t,g:null,m:null,p:null,v:null}),_={},C={forEach:(e,t)=>e.map(M).forEach(t),map:(e,t)=>e.map(M).map(t).map(O)},M=e=>({vattrs:e.p,vchildren:e.m,vkey:e.j,vname:e.v,vtag:e.S,vtext:e.h}),O=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),j(e.vtag,t,...e.vchildren||[])}const t=k(e.vtag,e.vtext);return t.p=e.vattrs,t.m=e.vchildren,t.j=e.vkey,t.v=e.vname,t},R=(e,t,n,l,o,s)=>{if(n!==l){let r=fe(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,o=T(n),s=T(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if(r||"o"!==t[0]||"n"!==t[1]){const i=g(l);if((r||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(c){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&s||o)&&!i&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):fe(i,a)?a.slice(2):a[2]+t.slice(3),n&&f.rel(e,t,n,!1),l&&f.ael(e,t,l,!1)}},P=/\s/,T=e=>e?e.split(P):[],x=(e,t,n,l)=>{const o=11===t.g.nodeType&&t.g.host?t.g.host:t.g,s=e&&e.p||S,c=t.p||S;for(l in s)l in c||R(o,l,s[l],void 0,n,t.t);for(l in c)R(o,l,s[l],c[l],n,t.t)},E=(e,s,r,i)=>{let a,f,d,$=s.m[r],y=0;if(o||(c=!0,"slot"===$.S&&(t&&i.classList.add(t+"-s"),$.t|=$.m?2:1)),null!==$.h)a=$.g=u.createTextNode($.h);else if(1&$.t)a=$.g=u.createTextNode("");else if(a=$.g=u.createElement(2&$.t?"slot-fb":$.S),x(null,$,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),$.m)for(y=0;y<$.m.length;++y)f=E(e,$,y,a),f&&a.appendChild(f);return a["s-hn"]=l,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=$.v||"",d=e&&e.m&&e.m[r],d&&d.S===$.S&&e.g&&L(e.g,!1)),a},L=(e,t)=>{f.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(H(e).insertBefore(e,F(e)),e["s-ol"].remove(),e["s-ol"]=void 0,c=!0),t&&L(e,t)}f.t&=-2},W=(e,t,n,o,s,c)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=E(null,n,s,e),r&&(o[s].g=r,i.insertBefore(r,F(t))))},N=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(s=!0,(o=l.g)["s-ol"]?o["s-ol"].remove():L(o,!0),o.remove())},A=(e,t)=>e.S===t.S&&("slot"!==e.S||e.v===t.v),F=e=>e&&e["s-ol"]||e,H=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,U=(e,t)=>{const n=t.g=e.g,l=e.m,o=t.m,s=t.h;let c;null===s?("slot"===t.S||x(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],d=l[u];for(;s<=r&&c<=u;)null==i?i=t[++s]:null==a?a=t[--r]:null==f?f=l[++c]:null==d?d=l[--u]:A(i,f)?(U(i,f),i=t[++s],f=l[++c]):A(a,d)?(U(a,d),a=t[--r],d=l[--u]):A(i,d)?("slot"!==i.S&&"slot"!==d.S||L(i.g.parentNode,!1),U(i,d),e.insertBefore(i.g,a.g.nextSibling),i=t[++s],d=l[--u]):A(a,f)?("slot"!==i.S&&"slot"!==d.S||L(a.g.parentNode,!1),U(a,f),e.insertBefore(a.g,i.g),a=t[--r],f=l[++c]):(o=E(t&&t[c],n,c,e),f=l[++c],o&&H(i.g).insertBefore(o,F(i.g)));s>r?W(e,null==l[u+1]?null:l[u+1].g,n,l,c,u):c>u&&N(t,s,r)})(n,l,t,o):null!==o?(null!==e.h&&(n.textContent=""),W(n,null,t,o,0,o.length-1)):null!==l&&N(l,0,l.length-1)):(c=n["s-cr"])?c.parentNode.textContent=s:e.h!==s&&(n.data=s)},q=e=>{let t,n,l,o,s,c,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c=r[o].nodeType,r[o]["s-hn"]!==t["s-hn"]||""!==s){if(1===c&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===c||3===c&&""!==r[o].textContent.trim()){t.hidden=!0;break}q(t)}},D=[],V=e=>{let t,n,l,o,c,r,i=0,a=e.childNodes,u=a.length;for(;i<u;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(z(n,o)?(c=D.find((e=>e.k===n)),s=!0,n["s-sn"]=n["s-sn"]||o,c?c._=t:D.push({_:t,k:n}),n["s-sr"]&&D.map((e=>{z(e.k,n["s-sn"])&&(c=D.find((e=>e.k===n)),c&&!e._&&(e._=c._))}))):D.some((e=>e.k===n))||D.push({k:n}));1===t.nodeType&&V(t)}},z=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,B=e=>ie(e).C,G=(e,t,n)=>{const l=B(e);return{emit:e=>I(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},I=(e,t,n)=>{const l=f.ce(t,n);return e.dispatchEvent(l),l},J=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.M=t)))},K=(e,t)=>{if(e.t|=16,!(4&e.t))return J(e,e.O),ge((()=>Q(e,t)));e.t|=512},Q=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>te(n,e,t))),e.u=null),l=te(n,"componentWillLoad")),l=ne(l,(()=>te(n,"componentWillRender"))),ne(l,(()=>X(e,n,t)))},X=async(e,t,n)=>{const l=e.C,o=l["s-rc"];n&&(e=>{const t=e.R,n=e.C,l=t.t,o=((e,t)=>{let n=v(t),l=he.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=w.get(e=e.head||e);o||w.set(e,o=new Set),o.has(n)||(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(d&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);Y(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>Z(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Y=(e,r)=>{try{r=r.render(),e.t&=-17,e.t|=2,((e,r)=>{const i=e.C,a=e.R,$=e.P||k(null,null),y=(e=>e&&e.S===_)(r)?r:j(null,null,r);if(l=i.tagName,y.S=null,y.t|=4,e.P=y,y.g=$.g=i.shadowRoot||i,t=i["s-sc"],n=i["s-cr"],o=d&&0!=(1&a.t),s=!1,U($,y),f.t|=1,c){let e,t,n,l,o,s;V(y.g);let c=0;for(;c<D.length;c++)e=D[c],t=e.k,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(c=0;c<D.length;c++)if(e=D[c],t=e.k,e._){for(l=e._.parentNode,o=e._.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&q(y.g),f.t&=-2,D.length=0})(e,r)}catch(i){de(i,e.C)}return null},Z=e=>{const t=e.C,n=e.i,l=e.O;64&e.t||(e.t|=64,le(t),te(n,"componentDidLoad"),e.T(t),l||ee()),e.L(t),e.M&&(e.M(),e.M=void 0),512&e.t&&Se((()=>K(e,!1))),e.t&=-517},ee=()=>{le(u.documentElement),Se((()=>I(i,"appload",{detail:{namespace:"anywhere-ui"}})))},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){de(l)}},ne=(e,t)=>e&&e.then?e.then(t):t(),le=e=>e.classList.add("hydrated"),oe=(e,t,n)=>{if(t.W){e.watchers&&(t.N=e.watchers);const l=Object.entries(t.W),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>ie(this).A.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ie(e),s=o.C,c=o.A.get(t),r=o.t,i=o.i;if(n=((e,t)=>null==e||g(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),!(8&r&&void 0!==c||n===c)&&(o.A.set(t,n),i)){if(l.N&&128&r){const e=l.N[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(l){de(l,s)}}))}2==(18&r)&&K(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=ie(this);return n.F.then((()=>n.i[e](...t)))}})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){f.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},se=e=>{te(e,"connectedCallback")},ce=(e,t={})=>{const n=[],l=t.exclude||[],o=i.customElements,s=u.head,c=s.querySelector("meta[charset]"),r=u.createElement("style"),a=[];let $,p=!0;Object.assign(f,t),f.l=new URL(t.resourcesUrl||"./",u.baseURI).href,e.map((e=>e[1].map((t=>{const s={t:t[0],$:t[1],W:t[2],H:t[3]};s.W=t[2],s.H=t[3],s.N={},!d&&1&s.t&&(s.t|=8);const c=s.$,r=class extends HTMLElement{constructor(e){super(e),ue(e=this,s),1&s.t&&(d?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){$&&(clearTimeout($),$=null),p?a.push(this):f.jmp((()=>(e=>{if(0==(1&f.t)){const t=ie(e),n=t.R,l=()=>{};if(1&t.t)h(e,t,n.H),se(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){J(t,t.O=n);break}}n.W&&Object.entries(n.W).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),Se((()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=ye(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.N=o.watchers,oe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){de(r)}t.t&=-9,t.t|=128,e(),se(t.i)}if(o.style){let e=o.style;const t=v(n);if(!he.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_anywhere_ui("./p-570b9a03.js").then((n=>n.scopeCss(e,t,!1)))),((e,t,n)=>{let l=he.get(e);y&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,he.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.O,c=()=>K(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,t,n)))}l()}})(this)))}disconnectedCallback(){f.jmp((()=>(()=>{if(0==(1&f.t)){const e=ie(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),te(t,"disconnectedCallback")}})()))}componentOnReady(){return ie(this).U}};s.q=e[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,oe(r,s,1)))})))),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,c?c.nextSibling:s.firstChild),p=!1,a.length?a.map((e=>e.connectedCallback())):f.jmp((()=>$=setTimeout(ee,30)))},re=new WeakMap,ie=e=>re.get(e),ae=(e,t)=>re.set(t.i=e,t),ue=(e,t)=>{const n={t:0,C:e,R:t,A:new Map};return n.F=new Promise((e=>n.L=e)),n.U=new Promise((e=>n.T=e)),e["s-p"]=[],e["s-rc"]=[],h(e,n,t.H),re.set(e,n)},fe=(e,t)=>t in e,de=(e,t)=>(0,console.error)(e,t),$e=new Map,ye=e=>{const t=e.$.replace(/-/g,"_"),n=e.q,l=$e.get(n);return l?l[t]:__sc_import_anywhere_ui(`./${n}.entry.js`).then((e=>($e.set(n,e),e[t])),de)},he=new Map,pe=[],me=[],be=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&f.t?Se(ve):f.raf(ve))},we=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){de(t)}e.length=0},ve=()=>{we(pe),we(me),(r=pe.length>0)&&f.raf(ve)},Se=e=>$().then(e),ge=be(me,!0);export{a as C,_ as H,e as N,$ as a,ce as b,G as c,u as d,B as g,j as h,f as p,ae as r,i as w}