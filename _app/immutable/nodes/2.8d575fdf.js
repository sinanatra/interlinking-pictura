import{e as U}from"../chunks/singletons.0712d554.js";import{S as D,i as q,s as N,k as p,l as v,m as w,h as _,n as c,b as T,H as L,J as oe,e as C,q as K,a as A,r as Q,c as H,p as B,G as g,u as F,K as J,L as W,M as X,N as ue,O as fe,g as I,d as S,f as me,I as he,o as _e,w as ge,P as de,y as V,z,A as G,Q as pe,B as O,v as ve}from"../chunks/index.7c5e5199.js";import{p as be}from"../chunks/stores.72878f9c.js";import{c as Y,t as j,u as P,l as ce,d as ke,a as R,i as Z}from"../chunks/setup.d72a6436.js";const Ee=async({fetch:a})=>({posts:await(await a(`${U}/api/posts`)).json()}),Ve=Object.freeze(Object.defineProperty({__proto__:null,load:Ee},Symbol.toStringTag,{value:"Module"}));function $(a,e,l){const t=a.slice();return t[2]=e[l],t}function x(a){let e,l,t,n=a[2].meta.title+"",i,s,m,u,h,o=a[2].meta.cover&&ee(a),r=a[2].meta.description&&te(a);return{c(){e=p("a"),l=p("div"),t=p("h2"),i=K(n),s=A(),o&&o.c(),m=A(),r&&r.c(),u=A(),this.h()},l(f){e=v(f,"A",{href:!0,target:!0,class:!0});var d=w(e);l=v(d,"DIV",{class:!0,style:!0});var E=w(l);t=v(E,"H2",{class:!0});var M=w(t);i=Q(M,n),M.forEach(_),s=H(E),o&&o.l(E),m=H(E),r&&r.l(E),E.forEach(_),u=H(d),d.forEach(_),this.h()},h(){c(t,"class","svelte-1cevii1"),c(l,"class","column svelte-1cevii1"),B(l,"--meta-color",a[2].meta.color),c(e,"href",h=""+(U+a[2].path)),c(e,"target","_self"),c(e,"class","svelte-1cevii1")},m(f,d){T(f,e,d),g(e,l),g(l,t),g(t,i),g(l,s),o&&o.m(l,null),g(l,m),r&&r.m(l,null),g(e,u)},p(f,d){d&1&&n!==(n=f[2].meta.title+"")&&F(i,n),f[2].meta.cover?o?o.p(f,d):(o=ee(f),o.c(),o.m(l,m)):o&&(o.d(1),o=null),f[2].meta.description?r?r.p(f,d):(r=te(f),r.c(),r.m(l,null)):r&&(r.d(1),r=null),d&1&&B(l,"--meta-color",f[2].meta.color),d&1&&h!==(h=""+(U+f[2].path))&&c(e,"href",h)},d(f){f&&_(e),o&&o.d(),r&&r.d()}}}function ee(a){let e,l,t;return{c(){e=p("img"),this.h()},l(n){e=v(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){J(e.src,l=a[2].meta.cover)||c(e,"src",l),c(e,"alt",t=a[2].meta.title),c(e,"class","svelte-1cevii1")},m(n,i){T(n,e,i)},p(n,i){i&1&&!J(e.src,l=n[2].meta.cover)&&c(e,"src",l),i&1&&t!==(t=n[2].meta.title)&&c(e,"alt",t)},d(n){n&&_(e)}}}function te(a){let e,l=a[2].meta.description+"";return{c(){e=p("div"),this.h()},l(t){e=v(t,"DIV",{class:!0});var n=w(e);n.forEach(_),this.h()},h(){c(e,"class","text svelte-1cevii1")},m(t,n){T(t,e,n),e.innerHTML=l},p(t,n){n&1&&l!==(l=t[2].meta.description+"")&&(e.innerHTML=l)},d(t){t&&_(e)}}}function le(a){let e,l=a[2].meta.isPublic&&a[2].meta.lang==a[1]&&x(a);return{c(){l&&l.c(),e=C()},l(t){l&&l.l(t),e=C()},m(t,n){l&&l.m(t,n),T(t,e,n)},p(t,n){t[2].meta.isPublic&&t[2].meta.lang==t[1]?l?l.p(t,n):(l=x(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&_(e)}}}function ye(a){let e,l=a[0].posts,t=[];for(let n=0;n<l.length;n+=1)t[n]=le($(a,l,n));return{c(){e=p("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=v(n,"DIV",{class:!0});var i=w(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(_),this.h()},h(){c(e,"class","columns svelte-1cevii1")},m(n,i){T(n,e,i);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(n,[i]){if(i&3){l=n[0].posts;let s;for(s=0;s<l.length;s+=1){const m=$(n,l,s);t[s]?t[s].p(m,i):(t[s]=le(m),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},i:L,o:L,d(n){n&&_(e),oe(t,n)}}}function Me(a,e,l){let{data:t}=e,{lang:n}=e;return a.$$set=i=>{"data"in i&&l(0,t=i.data),"lang"in i&&l(1,n=i.lang)},[t,n]}class we extends D{constructor(e){super(),q(this,e,Me,ye,N,{data:0,lang:1})}}function ne(a){let e,l=a[2][a[1]]+"";return{c(){e=p("h3"),this.h()},l(t){e=v(t,"H3",{class:!0});var n=w(e);n.forEach(_),this.h()},h(){c(e,"class","svelte-1ve1kj")},m(t,n){T(t,e,n),e.innerHTML=l},p(t,n){n&6&&l!==(l=t[2][t[1]]+"")&&(e.innerHTML=l)},d(t){t&&_(e)}}}function Te(a){let e,l,t,n,i,s,m,u,h=a[2][a[1]]&&ne(a);return{c(){e=p("header"),l=p("h1"),t=K(a[0]),n=A(),h&&h.c(),i=A(),s=p("div"),m=p("img"),this.h()},l(o){e=v(o,"HEADER",{class:!0});var r=w(e);l=v(r,"H1",{class:!0});var f=w(l);t=Q(f,a[0]),f.forEach(_),n=H(r),h&&h.l(r),i=H(r),s=v(r,"DIV",{class:!0});var d=w(s);m=v(d,"IMG",{src:!0,class:!0}),d.forEach(_),r.forEach(_),this.h()},h(){c(l,"class","svelte-1ve1kj"),J(m.src,u="logo1.png")||c(m,"src",u),c(m,"class","svelte-1ve1kj"),c(s,"class","svelte-1ve1kj"),c(e,"class","svelte-1ve1kj")},m(o,r){T(o,e,r),g(e,l),g(l,t),g(e,n),h&&h.m(e,null),g(e,i),g(e,s),g(s,m)},p(o,[r]){r&1&&F(t,o[0]),o[2][o[1]]?h?h.p(o,r):(h=ne(o),h.c(),h.m(e,i)):h&&(h.d(1),h=null)},i:L,o:L,d(o){o&&_(e),h&&h.d()}}}function Ae(a,e,l){let{title:t}=e,{lang:n}=e,{description:i}=e;return a.$$set=s=>{"title"in s&&l(0,t=s.title),"lang"in s&&l(1,n=s.lang),"description"in s&&l(2,i=s.description)},[t,n,i]}class He extends D{constructor(e){super(),q(this,e,Ae,Te,N,{title:0,lang:1,description:2})}}function ae(a,e,l){const t=a.slice();return t[5]=e[l],t}function se(a){let e,l=a[1],t=[];for(let n=0;n<l.length;n+=1)t[n]=ie(ae(a,l,n));return{c(){e=p("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=v(n,"DIV",{class:!0});var i=w(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(_),this.h()},h(){c(e,"class","svelte-ukq9fn")},m(n,i){T(n,e,i);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(n,i){if(i&7){l=n[1];let s;for(s=0;s<l.length;s+=1){const m=ae(n,l,s);t[s]?t[s].p(m,i):(t[s]=ie(m),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(n){n&&_(e),oe(t,n)}}}function ie(a){let e,l=a[5].toUpperCase()+"",t,n,i,s;function m(){return a[3](a[5])}function u(){return a[4](a[5])}return{c(){e=p("span"),t=K(l),this.h()},l(h){e=v(h,"SPAN",{disabled:!0,class:!0});var o=w(e);t=Q(o,l),o.forEach(_),this.h()},h(){c(e,"disabled",n=a[0]===a[5]),c(e,"class","svelte-ukq9fn"),W(e,"selected",a[0]===a[5])},m(h,o){T(h,e,o),g(e,t),i||(s=[X(e,"click",m),X(e,"keydown",u)],i=!0)},p(h,o){a=h,o&2&&l!==(l=a[5].toUpperCase()+"")&&F(t,l),o&3&&n!==(n=a[0]===a[5])&&c(e,"disabled",n),o&3&&W(e,"selected",a[0]===a[5])},d(h){h&&_(e),i=!1,ue(s)}}}function Ie(a){let e,l=a[1].length>1&&se(a);return{c(){l&&l.c(),e=C()},l(t){l&&l.l(t),e=C()},m(t,n){l&&l.m(t,n),T(t,e,n)},p(t,[n]){t[1].length>1?l?l.p(t,n):(l=se(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:L,o:L,d(t){l&&l.d(t),t&&_(e)}}}function Le(a,e,l){let{lang:t}=e,{languages:n}=e;function i(u){l(0,t=u),localStorage.setItem("selectedLanguage",u)}const s=u=>i(u),m=u=>i(u);return a.$$set=u=>{"lang"in u&&l(0,t=u.lang),"languages"in u&&l(1,n=u.languages)},[t,n,i,s,m]}class je extends D{constructor(e){super(),q(this,e,Le,Ie,N,{lang:0,languages:1})}}function re(a){let e,l,t,n,i,s,m,u;function h(r){a[3](r)}let o={languages:ce};return a[1]!==void 0&&(o.lang=a[1]),l=new je({props:o}),ge.push(()=>de(l,"lang",h)),i=new He({props:{essays:a[0].posts.filter(a[4]).length,lang:a[1],description:ke,title:j}}),m=new we({props:{data:a[0],lang:a[1]}}),{c(){e=p("article"),V(l.$$.fragment),n=A(),V(i.$$.fragment),s=A(),V(m.$$.fragment),this.h()},l(r){e=v(r,"ARTICLE",{style:!0,class:!0});var f=w(e);z(l.$$.fragment,f),n=H(f),z(i.$$.fragment,f),s=H(f),z(m.$$.fragment,f),f.forEach(_),this.h()},h(){B(e,"--theme-color","blue"),c(e,"class","svelte-c31fpz")},m(r,f){T(r,e,f),G(l,e,null),g(e,n),G(i,e,null),g(e,s),G(m,e,null),u=!0},p(r,f){const d={};!t&&f&2&&(t=!0,d.lang=r[1],pe(()=>t=!1)),l.$set(d);const E={};f&3&&(E.essays=r[0].posts.filter(r[4]).length),f&2&&(E.lang=r[1]),i.$set(E);const M={};f&1&&(M.data=r[0]),f&2&&(M.lang=r[1]),m.$set(M)},i(r){u||(I(l.$$.fragment,r),I(i.$$.fragment,r),I(m.$$.fragment,r),u=!0)},o(r){S(l.$$.fragment,r),S(i.$$.fragment,r),S(m.$$.fragment,r),u=!1},d(r){r&&_(e),O(l),O(i),O(m)}}}function Se(a){let e,l,t,n,i,s,m,u,h,o,r,f,d,E,M,b=Y&&a[1]&&a[0]!=null&&re(a);return document.title=l=j,{c(){b&&b.c(),e=A(),t=p("meta"),n=p("meta"),s=p("meta"),m=p("meta"),u=p("meta"),h=p("meta"),o=p("meta"),f=p("meta"),d=p("meta"),E=p("meta"),this.h()},l(y){b&&b.l(y),e=H(y);const k=fe("svelte-15zjhui",document.head);t=v(k,"META",{name:!0,content:!0}),n=v(k,"META",{property:!0,content:!0}),s=v(k,"META",{property:!0,content:!0}),m=v(k,"META",{property:!0,content:!0}),u=v(k,"META",{property:!0,content:!0}),h=v(k,"META",{name:!0,content:!0}),o=v(k,"META",{property:!0,content:!0}),f=v(k,"META",{name:!0,content:!0}),d=v(k,"META",{name:!0,content:!0}),E=v(k,"META",{name:!0,content:!0}),k.forEach(_),this.h()},h(){c(t,"name","description"),c(t,"content",R),c(n,"property","og:url"),c(n,"content",i=P||a[2].url.origin),c(s,"property","og:title"),c(s,"content",j),c(m,"property","og:description"),c(m,"content",R),c(u,"property","og:image"),c(u,"content",Z),c(h,"name","twitter:card"),c(h,"content","summary_large_image"),c(o,"property","twitter:url"),c(o,"content",r=P||a[2].url.origin),c(f,"name","twitter:title"),c(f,"content",j),c(d,"name","twitter:description"),c(d,"content",R),c(E,"name","twitter:image"),c(E,"content",Z)},m(y,k){b&&b.m(y,k),T(y,e,k),g(document.head,t),g(document.head,n),g(document.head,s),g(document.head,m),g(document.head,u),g(document.head,h),g(document.head,o),g(document.head,f),g(document.head,d),g(document.head,E),M=!0},p(y,[k]){Y&&y[1]&&y[0]!=null?b?(b.p(y,k),k&3&&I(b,1)):(b=re(y),b.c(),I(b,1),b.m(e.parentNode,e)):b&&(ve(),S(b,1,1,()=>{b=null}),me()),(!M||k&0)&&l!==(l=j)&&(document.title=l),(!M||k&4&&i!==(i=P||y[2].url.origin))&&c(n,"content",i),(!M||k&4&&r!==(r=P||y[2].url.origin))&&c(o,"content",r)},i(y){M||(I(b),M=!0)},o(y){S(b),M=!1},d(y){b&&b.d(y),y&&_(e),_(t),_(n),_(s),_(m),_(u),_(h),_(o),_(f),_(d),_(E)}}}function Pe(a,e,l){let t;he(a,be,u=>l(2,t=u));let{data:n}=e,i="";_e(async()=>{const u=localStorage.getItem("selectedLanguage");u?l(1,i=u):l(1,i=ce[0])});function s(u){i=u,l(1,i)}const m=u=>u.meta.isPublic&u.meta.lang==i;return a.$$set=u=>{"data"in u&&l(0,n=u.data)},[n,i,t,s,m]}class ze extends D{constructor(e){super(),q(this,e,Pe,Se,N,{data:0})}}export{ze as component,Ve as universal};
