import{w as N,g as G,h as U,i as R,s as H,b as D,j as M}from"./index.a8eaf3ac.js";function B(e){return G()?(U(e),!0):!1}var E;const p=typeof window!="undefined",K=e=>typeof e=="string",b=()=>{};p&&((E=window==null?void 0:window.navigator)==null?void 0:E.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function X(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const x=e=>e();function q(e=x){const t=R(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...a)=>{t.value&&e(...a)}}}var A=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,Z=(e,t)=>{var r={};for(var n in e)Q.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&A)for(var n of A(e))t.indexOf(n)<0&&Y.call(e,n)&&(r[n]=e[n]);return r};function k(e,t,r={}){const n=r,{eventFilter:o=x}=n,a=Z(n,["eventFilter"]);return N(e,X(o,t),a)}var ee=Object.defineProperty,te=Object.defineProperties,re=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ne=(e,t)=>{for(var r in t||(t={}))C.call(t,r)&&F(e,r,t[r]);if(v)for(var r of v(t))V.call(t,r)&&F(e,r,t[r]);return e},oe=(e,t)=>te(e,re(t)),ae=(e,t)=>{var r={};for(var n in e)C.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&v)for(var n of v(e))t.indexOf(n)<0&&V.call(e,n)&&(r[n]=e[n]);return r};function ie(e,t,r={}){const n=r,{eventFilter:o}=n,a=ae(n,["eventFilter"]),{eventFilter:f,pause:u,resume:d,isActive:y}=q(o);return{stop:k(e,t,oe(ne({},a),{eventFilter:f})),pause:u,resume:d,isActive:y}}function se(e){var t;const r=D(e);return(t=r==null?void 0:r.$el)!=null?t:r}const w=p?window:void 0;p&&window.document;p&&window.navigator;p&&window.location;function ue(...e){let t,r,n,o;if(K(e[0])?([r,n,o]=e,t=w):[t,r,n,o]=e,!t)return b;let a=b;const f=N(()=>se(t),d=>{a(),d&&(d.addEventListener(r,n,o),a=()=>{d.removeEventListener(r,n,o),a=b})},{immediate:!0,flush:"post"}),u=()=>{f(),a()};return B(u),u}const P=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$="__vueuse_ssr_handlers__";P[$]=P[$]||{};const le=P[$];function fe(e,t){return le[e]||t}function de(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const ce={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function pe(e,t,r,n={}){var o;const{flush:a="pre",deep:f=!0,listenToStorageChanges:u=!0,writeDefaults:d=!0,shallow:y,window:h=w,eventFilter:J,onError:S=i=>{console.error(i)}}=n,c=(y?H:R)(t);if(!r)try{r=fe("getDefaultStorage",()=>{var i;return(i=w)==null?void 0:i.localStorage})()}catch(i){S(i)}if(!r)return c;const g=D(t),T=de(g),_=(o=n.serializer)!=null?o:ce[T],{pause:W,resume:I}=ie(c,()=>L(c.value),{flush:a,deep:f,eventFilter:J});return h&&u&&ue(h,"storage",j),j(),c;function L(i){try{i==null?r.removeItem(e):r.setItem(e,_.write(i))}catch(l){S(l)}}function z(i){if(!(i&&i.key!==e)){W();try{const l=i?i.newValue:r.getItem(e);return l==null?(d&&g!==null&&r.setItem(e,_.write(g)),g):typeof l!="string"?l:_.read(l)}catch(l){S(l)}finally{I()}}}function j(i){i&&i.key!==e||(c.value=z(i))}}function ge(e,t,r={}){const{window:n=w}=r;return pe(e,t,n==null?void 0:n.localStorage,r)}var m,me=new Uint8Array(16);function ve(){if(!m&&(m=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(me)}var we=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ye(e){return typeof e=="string"&&we.test(e)}var s=[];for(var O=0;O<256;++O)s.push((O+256).toString(16).substr(1));function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!ye(r))throw TypeError("Stringified UUID is invalid");return r}function Se(e,t,r){e=e||{};var n=e.random||(e.rng||ve)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return he(n)}const be=M({id:"games",state:()=>({games:ge("games",[])}),getters:{getAll:e=>e.games,getGameById:e=>t=>e.games.find(r=>r.id===t)},actions:{createNew(e){const t={id:Se(),rounds:1,startedAt:new Date().toISOString(),completedAt:null,players:e};return this.games.push(t),t},addRound(e,t){const r=this.games.find(o=>o.id===e);if(!r)throw Error("Game not found");const n=r.players.map(o=>{const a=t.find(u=>u.name===o.name);if(!a)return o;const f=[...o.rounds,{phase:a.phase,score:a.score,phaseCompleted:o.phase<a.phase}];return{name:o.name,phase:a.phase,score:o.score+a.score,rounds:f}});return r.rounds+=1,r.players=n,r}}});export{be as u};
