function w(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function J(){return Object.create(null)}function v(t){t.forEach(V)}function H(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Wt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function It(t,e,n,i){if(t){const s=X(t,e,n,i);return t[0](s)}}function X(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],o=Math.max(e.dirty.length,s.length);for(let r=0;r<o;r+=1)l[r]=e.dirty[r]|s[r];return l}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,l){if(s){const o=X(e,n,i,l);t.p(o,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Vt(t){return t??""}const Y=typeof window<"u";let dt=Y?()=>window.performance.now():()=>Date.now(),F=Y?t=>requestAnimationFrame(t):w;const x=new Set;function Z(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&F(Z)}function ht(t){let e;return x.size===0&&F(Z),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let M=!1;function mt(){M=!0}function pt(){M=!1}function yt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:yt(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,s=Math.max(a,s)}const l=[],o=[];let r=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);r>=c;r--)o.push(e[r]);r--}for(;r>=0;r--)o.push(e[r]);l.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<l.length&&o[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(o[c],_)}}function bt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=nt("style");return xt(tt(t),e),e.sheet}function xt(t,e){return bt(t.head||t,e),e.sheet}function wt(t,e){if(M){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){M&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode&&t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function Zt(){return W(" ")}function te(){return W("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ie(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function G(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:G(t,i,e[i])}function re(t,e){for(const n in e)G(t,n,e[n])}function oe(t,e){Object.keys(e).forEach(n=>{Et(t,n,e[n])})}function Et(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:G(t,e,n)}function Nt(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,s=!1){kt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const r=t[o];if(e(r)){const c=n(r);return c===void 0?t.splice(o,1):t[o]=c,s||(t.claim_info.last_index=o),r}}for(let o=t.claim_info.last_index-1;o>=0;o--){const r=t[o];if(e(r)){const c=n(r);return c===void 0?t.splice(o,1):t[o]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,r}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function st(t,e,n,i){return it(t,s=>s.nodeName===e,s=>{const l=[];for(let o=0;o<s.attributes.length;o++){const r=s.attributes[o];n[r.name]||l.push(r.name)}l.forEach(o=>s.removeAttribute(o))},()=>i(e))}function ce(t,e,n){return st(t,e,n,nt)}function le(t,e,n){return st(t,e,n,vt)}function At(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function ue(t){return At(t," ")}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function he(t,e){return new t(e)}const D=new Map;let T=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:$t(e),rules:{}};return D.set(t,n),n}function K(t,e,n,i,s,l,o,r=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${o(g,1-g)}}
`}const _=u+`100% {${o(n,1-n)}}
}`,a=`__svelte_${St(_)}_${r}`,h=tt(t),{stylesheet:f,rules:d}=D.get(h)||Ct(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,T+=1,a}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),T-=s,T||Tt())}function Tt(){F(()=>{T||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&et(e)}),D.clear())})}let k;function N(t){k=t}function I(){if(!k)throw new Error("Function called outside component initialization");return k}function me(t){I().$$.on_mount.push(t)}function pe(t){I().$$.after_update.push(t)}function ye(t){I().$$.on_destroy.push(t)}function ge(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],Q=[],S=[],z=[],rt=Promise.resolve();let B=!1;function ot(){B||(B=!0,rt.then(ct))}function be(){return ot(),rt}function O(t){S.push(t)}function $e(t){z.push(t)}const q=new Set;let b=0;function ct(){if(b!==0)return;const t=k;do{try{for(;b<$.length;){const e=$[b];b++,N(e),Ot(e.$$)}}catch(e){throw $.length=0,b=0,e}for(N(null),$.length=0,b=0;Q.length;)Q.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];q.has(n)||(q.add(n),n())}S.length=0}while($.length);for(;z.length;)z.pop()();B=!1,q.clear(),N(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let E;function Mt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function L(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const C=new Set;let p;function xe(){p={r:0,c:[],p}}function we(){p.r||v(p.c),p=p.p}function Pt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function ve(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function Ee(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),o=i?0:1,r=null,c=null,u=null;function _(){u&&Dt(t,u)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ut,tick:g=w,css:P}=l||Rt,R={start:dt()+d,b:f};f||(R.group=p,p.r+=1),r||c?c=R:(P&&(_(),u=K(t,o,f,m,d,y,P)),f&&g(0,1),r=a(R,m),O(()=>L(t,f,"start")),ht(A=>{if(c&&A>c.start&&(r=a(c,m),c=null,L(t,r.b,"start"),P&&(_(),u=K(t,o,r.b,r.duration,0,y,l.css))),r){if(A>=r.end)g(o=r.b,1-o),L(t,r.b,"end"),c||(r.b?_():--r.group.r||v(r.group.c)),r=null;else if(A>=r.start){const lt=A-r.start;o=r.a+r.d*y(lt/r.duration),g(o,1-o)}}return!!(r||c)}))}return{run(f){H(l)?Mt().then(()=>{l=l(s),h(f)}):h(f)},end(){_(),r=c=null}}}const Ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ke(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const o=t[l],r=e[l];if(r){for(const c in o)c in r||(i[c]=1);for(const c in r)s[c]||(n[c]=r[c],s[c]=1);t[l]=r}else for(const c in o)s[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Ae(t){return typeof t=="object"&&t!==null?t:{}}function je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Se(t){t&&t.c()}function Ce(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||O(()=>{const o=t.$$.on_mount.map(V).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),l.forEach(O)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&($.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,i,s,l,o,r=[-1]){const c=k;N(t);const u=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:r,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&s(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&zt(t,a)),h}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const a=Nt(e.target);u.fragment&&u.fragment.l(a),a.forEach(et)}else u.fragment&&u.fragment.c();e.intro&&Pt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),pt(),ct()}N(c)}class Te{$destroy(){Lt(this,1),this.$destroy=w}$on(e,n){if(!H(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let Bt="",U="",Ht="";function Oe(t){U=t.base,Bt=t.assets||U}function Me(t){Ht=t}export{ie as $,be as A,Oe as B,Me as C,w as D,Bt as E,Ht as F,U as G,wt as H,It as I,Kt as J,Qt as K,Jt as L,Gt as M,Wt as N,Vt as O,ee as P,at as Q,vt as R,Te as S,le as T,re as U,ke as V,Ut as W,O as X,_e as Y,v as Z,Ne as _,Zt as a,ne as a0,Ee as a1,Yt as a2,H as a3,Q as a4,oe as a5,se as a6,ye as a7,ge as a8,k as a9,je as aa,Ae as ab,$e as ac,de as ad,Xt as b,ue as c,we as d,te as e,Pt as f,xe as g,et as h,De as i,pe as j,nt as k,ce as l,Nt as m,G as n,me as o,fe as p,W as q,At as r,Ft as s,ve as t,ae as u,he as v,Se as w,Ce as x,qt as y,Lt as z};
