import{s as A,n as O,o as p,q as F,u as J,v as K,w as Q,t as $}from"./scheduler.WFTk3rk3.js";import{S as w,i as D,f as I,b as y,d as g,e as C,c as T,l as k,a as v,B as d,A as ee,m as c,s as te,h as ne,z as le,C as ie,k as _,q as se,t as b,j as ae,u as W,v as X,w as Y,x as Z,g as fe}from"./index.C8Njy1k2.js";function V(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function H(l,e,t){const n=l.slice();return n[18]=e[t],n}function L(l){let e,t=V({length:l[6]}),n=[];for(let i=0;i<t.length;i+=1)n[i]=j(H(l,t,i));return{c(){e=C("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=T(i,"DIV",{class:!0});var a=k(e);for(let s=0;s<n.length;s+=1)n[s].l(a);a.forEach(g),this.h()},h(){v(e,"class","confetti-holder svelte-io58ff"),d(e,"rounded",l[9]),d(e,"cone",l[10]),d(e,"no-gravity",l[11])},m(i,a){y(i,e,a);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(e,null)},p(i,a){if(a&20991){t=V({length:i[6]});let s;for(s=0;s<t.length;s+=1){const r=H(i,t,s);n[s]?n[s].p(r,a):(n[s]=j(r),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=t.length}a&512&&d(e,"rounded",i[9]),a&1024&&d(e,"cone",i[10]),a&2048&&d(e,"no-gravity",i[11])},d(i){i&&g(e),ee(n,i)}}}function j(l){let e;return{c(){e=C("div"),this.h()},l(t){e=T(t,"DIV",{class:!0,style:!0}),k(e).forEach(g),this.h()},h(){v(e,"class","confetti svelte-io58ff"),c(e,"--fall-distance",l[8]),c(e,"--size",l[0]+"px"),c(e,"--color",l[14]()),c(e,"--skew",h(-45,45)+"deg,"+h(-45,45)+"deg"),c(e,"--rotation-xyz",h(-10,10)+", "+h(-10,10)+", "+h(-10,10)),c(e,"--rotation-deg",h(0,360)+"deg"),c(e,"--translate-y-multiplier",h(l[2][0],l[2][1])),c(e,"--translate-x-multiplier",h(l[1][0],l[1][1])),c(e,"--scale",.1*h(2,10)),c(e,"--transition-duration",l[4]?`calc(${l[3]}ms * var(--scale))`:`${l[3]}ms`),c(e,"--transition-delay",h(l[5][0],l[5][1])+"ms"),c(e,"--transition-iteration-count",l[4]?"infinite":l[7]),c(e,"--x-spread",1-l[12])},m(t,n){y(t,e,n)},p(t,n){n&256&&c(e,"--fall-distance",t[8]),n&1&&c(e,"--size",t[0]+"px"),n&4&&c(e,"--translate-y-multiplier",h(t[2][0],t[2][1])),n&2&&c(e,"--translate-x-multiplier",h(t[1][0],t[1][1])),n&24&&c(e,"--transition-duration",t[4]?`calc(${t[3]}ms * var(--scale))`:`${t[3]}ms`),n&32&&c(e,"--transition-delay",h(t[5][0],t[5][1])+"ms"),n&144&&c(e,"--transition-iteration-count",t[4]?"infinite":t[7]),n&4096&&c(e,"--x-spread",1-t[12])},d(t){t&&g(e)}}}function oe(l){let e,t=!l[13]&&L(l);return{c(){t&&t.c(),e=I()},l(n){t&&t.l(n),e=I()},m(n,i){t&&t.m(n,i),y(n,e,i)},p(n,[i]){n[13]?t&&(t.d(1),t=null):t?t.p(n,i):(t=L(n),t.c(),t.m(e.parentNode,e))},i:O,o:O,d(n){n&&g(e),t&&t.d(n)}}}function h(l,e){return Math.random()*(e-l)+l}function re(l,e,t){let{size:n=10}=e,{x:i=[-.5,.5]}=e,{y:a=[.25,1]}=e,{duration:s=2e3}=e,{infinite:r=!1}=e,{delay:u=[0,50]}=e,{colorRange:o=[0,360]}=e,{colorArray:m=[]}=e,{amount:S=50}=e,{iterationCount:M=1}=e,{fallDistance:N="100px"}=e,{rounded:q=!1}=e,{cone:E=!1}=e,{noGravity:G=!1}=e,{xSpread:R=.15}=e,{destroyOnComplete:z=!0}=e,B=!1;p(()=>{!z||r||M=="infinite"||setTimeout(()=>t(13,B=!0),(s+u[1])*M)});function x(){return m.length?m[Math.round(Math.random()*(m.length-1))]:`hsl(${Math.round(h(o[0],o[1]))}, 75%, 50%)`}return l.$$set=f=>{"size"in f&&t(0,n=f.size),"x"in f&&t(1,i=f.x),"y"in f&&t(2,a=f.y),"duration"in f&&t(3,s=f.duration),"infinite"in f&&t(4,r=f.infinite),"delay"in f&&t(5,u=f.delay),"colorRange"in f&&t(15,o=f.colorRange),"colorArray"in f&&t(16,m=f.colorArray),"amount"in f&&t(6,S=f.amount),"iterationCount"in f&&t(7,M=f.iterationCount),"fallDistance"in f&&t(8,N=f.fallDistance),"rounded"in f&&t(9,q=f.rounded),"cone"in f&&t(10,E=f.cone),"noGravity"in f&&t(11,G=f.noGravity),"xSpread"in f&&t(12,R=f.xSpread),"destroyOnComplete"in f&&t(17,z=f.destroyOnComplete)},[n,i,a,s,r,u,S,M,N,q,E,G,R,B,x,o,m,z]}class ue extends w{constructor(e){super(),D(this,e,re,oe,A,{size:0,x:1,y:2,duration:3,infinite:4,delay:5,colorRange:15,colorArray:16,amount:6,iterationCount:7,fallDistance:8,rounded:9,cone:10,noGravity:11,xSpread:12,destroyOnComplete:17})}}const ce=l=>({}),P=l=>({});function U(l){let e,t;const n=l[5].default,i=F(n,l,l[4],null);return{c(){e=C("div"),i&&i.c(),this.h()},l(a){e=T(a,"DIV",{class:!0});var s=k(e);i&&i.l(s),s.forEach(g),this.h()},h(){v(e,"class","confetti svelte-12irxsc")},m(a,s){y(a,e,s),i&&i.m(e,null),t=!0},p(a,s){i&&i.p&&(!t||s&16)&&J(i,n,a,a[4],t?Q(n,a[4],s,null):K(a[4]),null)},i(a){t||(_(i,a),t=!0)},o(a){b(i,a),t=!1},d(a){a&&g(e),i&&i.d(a)}}}function me(l){let e,t,n,i,a;const s=l[5].label,r=F(s,l,l[4],P);let u=l[1]&&U(l);return{c(){e=C("span"),r&&r.c(),t=te(),u&&u.c(),this.h()},l(o){e=T(o,"SPAN",{class:!0});var m=k(e);r&&r.l(m),t=ne(m),u&&u.l(m),m.forEach(g),this.h()},h(){v(e,"class","svelte-12irxsc"),d(e,"relative",l[0])},m(o,m){y(o,e,m),r&&r.m(e,null),le(e,t),u&&u.m(e,null),n=!0,i||(a=ie(e,"click",l[2]),i=!0)},p(o,[m]){r&&r.p&&(!n||m&16)&&J(r,s,o,o[4],n?Q(s,o[4],m,ce):K(o[4]),P),o[1]?u?(u.p(o,m),m&2&&_(u,1)):(u=U(o),u.c(),_(u,1),u.m(e,null)):u&&(se(),b(u,1,1,()=>{u=null}),ae()),(!n||m&1)&&d(e,"relative",o[0])},i(o){n||(_(r,o),_(u),n=!0)},o(o){b(r,o),b(u),n=!1},d(o){o&&g(e),r&&r.d(o),u&&u.d(),i=!1,a()}}}function he(l,e,t){let{$$slots:n={},$$scope:i}=e,{toggleOnce:a=!1}=e,{relative:s=!0}=e,r=!1;async function u(){if(a){t(1,r=!r);return}t(1,r=!1),await $(),t(1,r=!0)}return l.$$set=o=>{"toggleOnce"in o&&t(3,a=o.toggleOnce),"relative"in o&&t(0,s=o.relative),"$$scope"in o&&t(4,i=o.$$scope)},[s,r,u,a,i,n]}class ge extends w{constructor(e){super(),D(this,e,he,me,A,{toggleOnce:3,relative:0})}}function de(l){let e,t;return e=new ue({props:{colorArray:[`hsl(${Math.floor(Math.random()*360)}, 75%, 50%)`]}}),{c(){W(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,i){Y(e,n,i),t=!0},p:O,i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){Z(e,n)}}}function _e(l){let e,t='<span class="ntt-emphasis svelte-qeggud">Nischal Tech Tips</span>';return{c(){e=C("button"),e.innerHTML=t,this.h()},l(n){e=T(n,"BUTTON",{slot:!0,class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-1f6mmvr"&&(e.innerHTML=t),this.h()},h(){v(e,"slot","label"),v(e,"class","svelte-qeggud")},m(n,i){y(n,e,i)},p:O,d(n){n&&g(e)}}}function be(l){let e,t;return e=new ge({props:{$$slots:{label:[_e],default:[de]},$$scope:{ctx:l}}}),{c(){W(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,i){Y(e,n,i),t=!0},p(n,[i]){const a={};i&1&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){b(e.$$.fragment,n),t=!1},d(n){Z(e,n)}}}class Ce extends w{constructor(e){super(),D(this,e,null,be,A,{})}}export{Ce as N,V as e};
