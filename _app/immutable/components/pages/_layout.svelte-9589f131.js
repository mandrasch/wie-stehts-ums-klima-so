import{S as H,i as T,s as V,k as d,q as y,a as A,l as h,m as g,r as E,h as u,c as P,n as $,p as F,b as z,C as m,D as G,u as L,E as J,F as M,G as R,w as U,x as j,y as K,H as Q,I as W,J as X,f as O,t as B,z as Y}from"../../chunks/index-bb9a6f22.js";import{p as C}from"../../chunks/stores-9ca72779.js";function Z(o){let t,n,a,r,c,s=JSON.stringify(o[0].gdprAcceptedEmbedProviders)+"",e,l,_,I,D,p,v,N,q,k;return{c(){t=d("div"),n=d("p"),a=y("Du hast der Nutzung und Einbettung folgender "),r=d("br"),c=y("Dienste zugestimmt: "),e=y(s),l=A(),_=d("button"),I=y("Einstellungen zurücksetzen"),D=A(),p=d("div"),v=d("a"),N=y("Datenschutz & Impressum"),this.h()},l(i){t=h(i,"DIV",{class:!0});var f=g(t);n=h(f,"P",{class:!0});var b=g(n);a=E(b,"Du hast der Nutzung und Einbettung folgender "),r=h(b,"BR",{}),c=E(b,"Dienste zugestimmt: "),e=E(b,s),b.forEach(u),l=P(f),_=h(f,"BUTTON",{class:!0});var S=g(_);I=E(S,"Einstellungen zurücksetzen"),S.forEach(u),f.forEach(u),D=P(i),p=h(i,"DIV",{class:!0,style:!0});var w=g(p);v=h(w,"A",{href:!0});var x=g(v);N=E(x,"Datenschutz & Impressum"),x.forEach(u),w.forEach(u),this.h()},h(){$(n,"class","svelte-1q8br2f"),$(_,"class","outline svelte-1q8br2f"),$(t,"class","container container-gdpr svelte-1q8br2f"),$(v,"href","https://matthias-andrasch.eu/blog/impressum-datenschutz/"),$(p,"class","container"),F(p,"text-align","center"),F(p,"margin-bottom","30px")},m(i,f){z(i,t,f),m(t,n),m(n,a),m(n,r),m(n,c),m(n,e),m(t,l),m(t,_),m(_,I),z(i,D,f),z(i,p,f),m(p,v),m(v,N),q||(k=G(_,"click",o[1]),q=!0)},p(i,[f]){f&1&&s!==(s=JSON.stringify(i[0].gdprAcceptedEmbedProviders)+"")&&L(e,s)},i:J,o:J,d(i){i&&u(t),i&&u(D),i&&u(p),q=!1,k()}}}function ee(o,t,n){let a;M(o,C,c=>n(0,a=c));async function r(){await C.set({gdprAcceptedEmbedProviders:[]})}return[a,r]}class te extends H{constructor(t){super(),T(this,t,ee,Z,V,{})}}function se(o){let t,n,a,r;const c=o[1].default,s=R(c,o,o[0],null);return a=new te({}),{c(){t=d("main"),s&&s.c(),n=A(),U(a.$$.fragment),this.h()},l(e){t=h(e,"MAIN",{class:!0});var l=g(t);s&&s.l(l),l.forEach(u),n=P(e),j(a.$$.fragment,e),this.h()},h(){$(t,"class","container")},m(e,l){z(e,t,l),s&&s.m(t,null),z(e,n,l),K(a,e,l),r=!0},p(e,[l]){s&&s.p&&(!r||l&1)&&Q(s,c,e,e[0],r?X(c,e[0],l,null):W(e[0]),null)},i(e){r||(O(s,e),O(a.$$.fragment,e),r=!0)},o(e){B(s,e),B(a.$$.fragment,e),r=!1},d(e){e&&u(t),s&&s.d(e),e&&u(n),Y(a,e)}}}function ne(o,t,n){let{$$slots:a={},$$scope:r}=t;return o.$$set=c=>{"$$scope"in c&&n(0,r=c.$$scope)},[r,a]}class le extends H{constructor(t){super(),T(this,t,ne,se,V,{})}}export{le as default};
