import{s as O,n as P}from"../chunks/scheduler.WFTk3rk3.js";import{S as z,i as J,e as g,s as T,u as C,c as p,l as b,h as S,v as M,d as c,a as $,b as E,y as l,w as j,k as _,q as K,j as Y,t as k,x as N,z as X,g as Z,n as R,o as A,A as ee}from"../chunks/index.LCXpPqKW.js";import{T as Q,e as G,C as V,N as te}from"../chunks/NTT.BvIZkN1d.js";const ae=!0,me=Object.freeze(Object.defineProperty({__proto__:null,prerender:ae},Symbol.toStringTag,{value:"Module"}));function U(d,e,n){const t=d.slice();return t[1]=e[n],t}function ne(d){let e,n;return e=new V({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){j(e,t,r),n=!0},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function oe(d){let e,n='<span style="font-size: large;">LATEST TECH REVIEWS!</span>';return{c(){e=g("button"),e.innerHTML=n,this.h()},l(t){e=p(t,"BUTTON",{slot:!0,class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-9tbqk3"&&(e.innerHTML=n),this.h()},h(){$(e,"slot","label"),$(e,"class","svelte-ik03be")},m(t,r){E(t,e,r)},p:P,d(t){t&&c(e)}}}function se(d){let e,n;return e=new V({props:{y:[.25,.5],x:[-4,4]}}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){j(e,t,r),n=!0},p:P,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function re(d){let e,n,t,r,i=d[1].product+"",f,y,u,m,a=d[1].title+"",v,o,s,w=d[1].review+"",h;return{c(){e=g("button"),n=g("h2"),t=g("span"),r=g("strong"),f=R(i),y=R(`:
					`),u=g("span"),m=g("i"),v=R(a),o=T(),s=g("p"),h=R(w),this.h()},l(I){e=p(I,"BUTTON",{slot:!0,class:!0});var x=b(e);n=p(x,"H2",{});var H=b(n);t=p(H,"SPAN",{class:!0});var D=b(t);r=p(D,"STRONG",{});var W=b(r);f=A(W,i),W.forEach(c),D.forEach(c),y=A(H,`:
					`),u=p(H,"SPAN",{class:!0});var L=b(u);m=p(L,"I",{});var B=b(m);v=A(B,a),B.forEach(c),L.forEach(c),H.forEach(c),o=S(x),s=p(x,"P",{class:!0});var F=b(s);h=A(F,w),F.forEach(c),x.forEach(c),this.h()},h(){$(t,"class","review-title-product svelte-ik03be"),$(u,"class","review-title svelte-ik03be"),$(s,"class","svelte-ik03be"),$(e,"slot","label"),$(e,"class","svelte-ik03be")},m(I,x){E(I,e,x),l(e,n),l(n,t),l(t,r),l(r,f),l(n,y),l(n,u),l(u,m),l(m,v),l(e,o),l(e,s),l(s,h)},p:P,d(I){I&&c(e)}}}function q(d){let e,n,t,r;return e=new Q({props:{$$slots:{label:[re],default:[se]},$$scope:{ctx:d}}}),{c(){C(e.$$.fragment),n=T(),t=g("hr")},l(i){M(e.$$.fragment,i),n=S(i),t=p(i,"HR",{})},m(i,f){j(e,i,f),E(i,n,f),E(i,t,f),r=!0},p(i,f){const y={};f&16&&(y.$$scope={dirty:f,ctx:i}),e.$set(y)},i(i){r||(_(e.$$.fragment,i),r=!0)},o(i){k(e.$$.fragment,i),r=!1},d(i){i&&(c(n),c(t)),N(e,i)}}}function ie(d){let e,n,t,r,i,f,y,u;r=new Q({props:{$$slots:{label:[oe],default:[ne]},$$scope:{ctx:d}}});let m=G(d[0]),a=[];for(let o=0;o<m.length;o+=1)a[o]=q(U(d,m,o));const v=o=>k(a[o],1,1,()=>{a[o]=null});return{c(){e=g("div"),n=g("hr"),t=T(),C(r.$$.fragment),i=T(),f=g("hr"),y=T();for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=p(o,"DIV",{class:!0});var s=b(e);n=p(s,"HR",{}),t=S(s),M(r.$$.fragment,s),i=S(s),f=p(s,"HR",{}),y=S(s);for(let w=0;w<a.length;w+=1)a[w].l(s);s.forEach(c),this.h()},h(){$(e,"class","reviews-list svelte-ik03be")},m(o,s){E(o,e,s),l(e,n),l(e,t),j(r,e,null),l(e,i),l(e,f),l(e,y);for(let w=0;w<a.length;w+=1)a[w]&&a[w].m(e,null);u=!0},p(o,[s]){const w={};if(s&16&&(w.$$scope={dirty:s,ctx:o}),r.$set(w),s&1){m=G(o[0]);let h;for(h=0;h<m.length;h+=1){const I=U(o,m,h);a[h]?(a[h].p(I,s),_(a[h],1)):(a[h]=q(I),a[h].c(),_(a[h],1),a[h].m(e,null))}for(K(),h=m.length;h<a.length;h+=1)v(h);Y()}},i(o){if(!u){_(r.$$.fragment,o);for(let s=0;s<m.length;s+=1)_(a[s]);u=!0}},o(o){k(r.$$.fragment,o),a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)k(a[s]);u=!1},d(o){o&&c(e),N(r),X(a,o)}}}function le(d){return[[{id:1,product:"AMD 7800x4D CPU",title:"This CPU Teleported My Cat",review:"I installed the AMD 7800x3D CPU last weekend, and let me tell you, it's not just fast; it's light-speed! My cat, Jinx, was lounging on the keyboard, and when I booted up a game, she vanished into thin air, only to reappear in the neighbor's fridge, mildly annoyed but chilly. If you want a processor that not only boosts your frame rates but also dabbles in quantum physics, this is the one for you. Just make sure your pets are at a safe distance unless you want them exploring parallel universes."},{id:2,product:"UltraGigaMax Gaming Chair",title:"A Chair So Comfortable, It Created a Black Hole",review:"The moment I sat in the UltraGigaMax Gaming Chair, I knew my life had changed. It cradled me so gently I thought I'd become one with the universe. I was wrong. I became the universe. As I reclined, the fabric of reality itself began to warp around me, creating a black hole in my living room. My snacks now orbit me as I game, and I haven't stood up in weeks. Who needs gravity when you have the ultimate gaming chair? Disclaimer: Might cause mild disruptions in the space-time continuum. Snack retrieval becomes significantly harder."},{id:3,product:"QuantumLeap SSD",title:"This SSD is So Fast, It Finished My Work Before I Started",review:"I installed the QuantumLeap SSD yesterday, and I'm pretty sure it's defying the laws of time and space. I thought about starting my project, and boom, it was already done. Files load before I even think about them, and I'm pretty sure it sent me an email from the future warning me about a coffee spill. If you're tired of waiting for files to load or just want to live in a world where your digital life is one step ahead, the QuantumLeap SSD might just tear a hole in the fabric of reality to get you there. Just watch out for those future emails; not all spoilers are welcome."},{id:4,product:"PhotonBeam Mouse",title:"A Mouse So Responsive, It Clicks in the Future",review:"Ever thought about clicking something and found it's already been clicked? Welcome to the reality of using the PhotonBeam Mouse. It's so responsive, I swear it anticipates my moves. Last Tuesday, I considered buying concert tickets, and next thing I know, the tickets are bought, and my calendar is updated. It's like having a personal assistant from the future, minus the awkward conversations about flying cars and why we still don't have them."},{id:5,product:"NebulaWiFi Router",title:"Wi-Fi So Fast, It Streams Tomorrow's Shows",review:"The NebulaWiFi Router promised unparalleled speeds, but I wasn't expecting it to bend the rules of time. I started streaming my favorite show, and suddenly I'm watching episodes that haven't even been released yet. The router's so ahead of its time, I've already seen the finale of series that are still being written. The only downside? Trying to avoid spoilers for shows that the rest of the world won't see for months. If you're tired of buffering and ready for a router that offers a glimpse into the future, this is it. Just be prepared for a lot of 'Wait, what do you mean you've already seen it?' from your friends."},{id:6,product:"Echoless Sound Cancelling Headphones",title:"Headphones So Quiet, They Silence Existential Dread",review:"In search of peace and quiet, I stumbled upon the Echoless Sound Cancelling Headphones. Little did I know, they'd cancel more than just noise. The moment I put them on, not only did the world's chatter fade away, but so did my swirling thoughts of existential dread. Now, I sit in blissful silence, pondering the void without the pesky interference of external sound or internal panic. These headphones don't just block out noise; they create a vacuum of serenity. Side effects may include forgetting your own name or why you walked into the room, but in such quiet, who really cares?"},{id:7,product:"GalacticProjector Keyboard",title:"A Keyboard That Types Your Thoughts",review:"I thought I'd seen it all until the GalacticProjector Keyboard entered my life. It doesn't just type; it projects my thoughts directly onto the screen. At first, it was amazing. Essays wrote themselves, emails sent without lifting a finger. But then, it started typing out thoughts I hadn't even fully formed yet. It's like it knew what I was going to think before I thought it. Now, I'm having conversations with my future self, who's surprisingly critical of my past decisions. If you're ready for a keyboard that's more in tune with you than you are, brace yourself. It's a wild ride through the psyche with the occasional pit stop in existential contemplation."}]]}class ue extends z{constructor(e){super(),J(this,e,le,ie,O,{})}}function he(d){let e,n,t,r,i,f,y,u,m;return i=new te({}),u=new ue({}),{c(){e=g("meta"),n=T(),t=g("section"),r=g("h1"),C(i.$$.fragment),f=R(" REVIEWS"),y=T(),C(u.$$.fragment),this.h()},l(a){const v=ee("svelte-bc2rfj",document.head);e=p(v,"META",{name:!0,content:!0}),v.forEach(c),n=S(a),t=p(a,"SECTION",{});var o=b(t);r=p(o,"H1",{});var s=b(r);M(i.$$.fragment,s),f=A(s," REVIEWS"),s.forEach(c),y=S(o),M(u.$$.fragment,o),o.forEach(c),this.h()},h(){document.title="NTT Reviews",$(e,"name","description"),$(e,"content","NTT Reviews")},m(a,v){l(document.head,e),E(a,n,v),E(a,t,v),l(t,r),j(i,r,null),l(r,f),l(t,y),j(u,t,null),m=!0},p:P,i(a){m||(_(i.$$.fragment,a),_(u.$$.fragment,a),m=!0)},o(a){k(i.$$.fragment,a),k(u.$$.fragment,a),m=!1},d(a){a&&(c(n),c(t)),c(e),N(i),N(u)}}}class ge extends z{constructor(e){super(),J(this,e,null,he,O,{})}}export{ge as component,me as universal};