import{S as se,i as ae,s as le,e as ue,f as ce,g as de,x as M,o as fe,J as he,K as ge,L as pe,I as ye,C as h,M as me}from"./index-MkGUixqr.js";import{E as C,a as q,h as ke,b as xe,c as be,d as we,e as Ee,s as Se,f as Ke,g as Ce,r as qe,i as Re,k as Ie,j as Le,l as ve,m as Ae,n as De,o as Oe,p as _e,q as Y,C as L,S as Be,t as Me,u as He}from"./index-u64XbdBO.js";function Fe(e){Z(e,"start");var r={},n=e.languageData||{},p=!1;for(var y in e)if(y!=n&&e.hasOwnProperty(y))for(var g=r[y]=[],s=e[y],o=0;o<s.length;o++){var l=s[o];g.push(new We(l,e)),(l.indent||l.dedent)&&(p=!0)}return{name:n.name,startState:function(){return{state:"start",pending:null,indent:p?[]:null}},copyState:function(a){var b={state:a.state,pending:a.pending,indent:a.indent&&a.indent.slice(0)};return a.stack&&(b.stack=a.stack.slice(0)),b},token:Ne(r),indent:Je(r,n),languageData:n}}function Z(e,r){if(!e.hasOwnProperty(r))throw new Error("Undefined state "+r+" in simple mode")}function Te(e,r){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((r===!1?"":"^")+"(?:"+e+")",n)}function Ue(e){if(!e)return null;if(e.apply)return e;if(typeof e=="string")return e.replace(/\./g," ");for(var r=[],n=0;n<e.length;n++)r.push(e[n]&&e[n].replace(/\./g," "));return r}function We(e,r){(e.next||e.push)&&Z(r,e.next||e.push),this.regex=Te(e.regex),this.token=Ue(e.token),this.data=e}function Ne(e){return function(r,n){if(n.pending){var p=n.pending.shift();return n.pending.length==0&&(n.pending=null),r.pos+=p.text.length,p.token}for(var y=e[n.state],g=0;g<y.length;g++){var s=y[g],o=(!s.data.sol||r.sol())&&r.match(s.regex);if(o){s.data.next?n.state=s.data.next:s.data.push?((n.stack||(n.stack=[])).push(n.state),n.state=s.data.push):s.data.pop&&n.stack&&n.stack.length&&(n.state=n.stack.pop()),s.data.indent&&n.indent.push(r.indentation()+r.indentUnit),s.data.dedent&&n.indent.pop();var l=s.token;if(l&&l.apply&&(l=l(o)),o.length>2&&s.token&&typeof s.token!="string"){n.pending=[];for(var a=2;a<o.length;a++)o[a]&&n.pending.push({text:o[a],token:s.token[a-1]});return r.backUp(o[0].length-(o[1]?o[1].length:0)),l[0]}else return l&&l.join?l[0]:l}}return r.next(),null}}function Je(e,r){return function(n,p){if(n.indent==null||r.dontIndentStates&&r.doneIndentState.indexOf(n.state)>-1)return null;var y=n.indent.length-1,g=e[n.state];e:for(;;){for(var s=0;s<g.length;s++){var o=g[s];if(o.data.dedent&&o.data.dedentIfLineStart!==!1){var l=o.regex.exec(p);if(l&&l[0]){y--,(o.next||o.push)&&(g=e[o.next||o.push]),p=p.slice(l[0].length);continue e}}}break}return y<0?0:n.indent[y]}}function Pe(e){let r;return{c(){r=ue("div"),ce(r,"class","code-editor")},m(n,p){de(n,r,p),e[15](r)},p:M,i:M,o:M,d(n){n&&fe(r),e[15](null)}}}function Ve(e){return JSON.stringify([e==null?void 0:e.name,e==null?void 0:e.type,e==null?void 0:e.schema])}function Ge(e,r,n){let p;he(e,ge,t=>n(21,p=t));const y=pe();let{id:g=""}=r,{value:s=""}=r,{disabled:o=!1}=r,{placeholder:l=""}=r,{baseCollection:a=null}=r,{singleLine:b=!1}=r,{extraAutocompleteKeys:v=[]}=r,{disableRequestKeys:E=!1}=r,{disableIndirectCollectionsKeys:S=!1}=r,f,w,A=o,H=new L,F=new L,T=new L,U=new L,R=[],W=[],N=[],J=[],I="",D="";function O(){f==null||f.focus()}let _=null;function j(){clearTimeout(_),_=setTimeout(()=>{R=$(p),J=ee(),W=E?[]:te(),N=S?[]:ne()},300)}function $(t){let i=t.slice();return a&&h.pushOrReplaceByKey(i,a,"id"),i}function P(){w==null||w.dispatchEvent(new CustomEvent("change",{detail:{value:s},bubbles:!0}))}function V(){if(!g)return;const t=document.querySelectorAll('[for="'+g+'"]');for(let i of t)i.removeEventListener("click",O)}function G(){if(!g)return;V();const t=document.querySelectorAll('[for="'+g+'"]');for(let i of t)i.addEventListener("click",O)}function K(t,i="",u=0){var m,x,Q;let c=R.find(k=>k.name==t||k.id==t);if(!c||u>=4)return[];let d=h.getAllCollectionIdentifiers(c,i);for(const k of(c==null?void 0:c.schema)||[]){const B=i+k.name;if(k.type==="relation"&&((m=k.options)!=null&&m.collectionId)){const X=K(k.options.collectionId,B+".",u+1);X.length&&(d=d.concat(X))}k.type==="select"&&((x=k.options)==null?void 0:x.maxSelect)!=1&&d.push(B+":each"),((Q=k.options)==null?void 0:Q.maxSelect)!=1&&["select","file","relation"].includes(k.type)&&d.push(B+":length")}return d}function ee(){return K(a==null?void 0:a.name)}function te(){const t=[];t.push("@request.method"),t.push("@request.query."),t.push("@request.data."),t.push("@request.headers."),t.push("@request.auth.id"),t.push("@request.auth.collectionId"),t.push("@request.auth.collectionName"),t.push("@request.auth.verified"),t.push("@request.auth.username"),t.push("@request.auth.email"),t.push("@request.auth.emailVisibility"),t.push("@request.auth.created"),t.push("@request.auth.updated");const i=R.filter(c=>c.type==="auth");for(const c of i){const d=K(c.id,"@request.auth.");for(const m of d)h.pushUnique(t,m)}const u=["created","updated"];if(a!=null&&a.id){const c=K(a.name,"@request.data.");for(const d of c){t.push(d);const m=d.split(".");m.length===3&&m[2].indexOf(":")===-1&&!u.includes(m[2])&&t.push(d+":isset")}}return t}function ne(){const t=[];for(const i of R){const u="@collection."+i.name+".",c=K(i.name,u);for(const d of c)t.push(d)}return t}function re(t=!0,i=!0){let u=[].concat(v);return u=u.concat(J||[]),t&&(u=u.concat(W||[])),i&&(u=u.concat(N||[])),u.sort(function(c,d){return d.length-c.length}),u}function ie(t){var m;let i=t.matchBefore(/[\'\"\@\w\.]*/);if(i&&i.from==i.to&&!t.explicit)return null;let u=He(t.state).resolveInner(t.pos,-1);if(((m=u==null?void 0:u.type)==null?void 0:m.name)=="comment")return null;let c=[{label:"false"},{label:"true"},{label:"@now"},{label:"@second"},{label:"@minute"},{label:"@hour"},{label:"@year"},{label:"@day"},{label:"@month"},{label:"@weekday"},{label:"@todayStart"},{label:"@todayEnd"},{label:"@monthStart"},{label:"@monthEnd"},{label:"@yearStart"},{label:"@yearEnd"}];S||c.push({label:"@collection.*",apply:"@collection."});const d=re(!E,!E&&i.text.startsWith("@c"));for(const x of d)c.push({label:x.endsWith(".")?x+"*":x,apply:x});return{from:i.from,options:c}}function z(){return Be.define(Fe({start:[{regex:/true|false|null/,token:"atom"},{regex:/\/\/.*/,token:"comment"},{regex:/"(?:[^\\]|\\.)*?(?:"|$)/,token:"string"},{regex:/'(?:[^\\]|\\.)*?(?:'|$)/,token:"string"},{regex:/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,token:"number"},{regex:/\&\&|\|\||\=|\!\=|\~|\!\~|\>|\<|\>\=|\<\=/,token:"operator"},{regex:/[\{\[\(]/,indent:!0},{regex:/[\}\]\)]/,dedent:!0},{regex:/\w+[\w\.]*\w+/,token:"keyword"},{regex:h.escapeRegExp("@now"),token:"keyword"},{regex:h.escapeRegExp("@second"),token:"keyword"},{regex:h.escapeRegExp("@minute"),token:"keyword"},{regex:h.escapeRegExp("@hour"),token:"keyword"},{regex:h.escapeRegExp("@year"),token:"keyword"},{regex:h.escapeRegExp("@day"),token:"keyword"},{regex:h.escapeRegExp("@month"),token:"keyword"},{regex:h.escapeRegExp("@weekday"),token:"keyword"},{regex:h.escapeRegExp("@todayStart"),token:"keyword"},{regex:h.escapeRegExp("@todayEnd"),token:"keyword"},{regex:h.escapeRegExp("@monthStart"),token:"keyword"},{regex:h.escapeRegExp("@monthEnd"),token:"keyword"},{regex:h.escapeRegExp("@yearStart"),token:"keyword"},{regex:h.escapeRegExp("@yearEnd"),token:"keyword"},{regex:h.escapeRegExp("@request.method"),token:"keyword"}],meta:{lineComment:"//"}}))}ye(()=>{const t={key:"Enter",run:i=>{b&&y("submit",s)}};return G(),n(11,f=new C({parent:w,state:q.create({doc:s,extensions:[ke(),xe(),be(),we(),Ee(),q.allowMultipleSelections.of(!0),Se(Me,{fallback:!0}),Ke(),Ce(),qe(),Re(),Ie.of([t,...Le,...ve,Ae.find(i=>i.key==="Mod-d"),...De,...Oe]),C.lineWrapping,_e({override:[ie],icons:!1}),U.of(Y(l)),F.of(C.editable.of(!o)),T.of(q.readOnly.of(o)),H.of(z()),q.transactionFilter.of(i=>{var u,c,d;if(b&&i.newDoc.lines>1){if(!((d=(c=(u=i.changes)==null?void 0:u.inserted)==null?void 0:c.filter(m=>!!m.text.find(x=>x)))!=null&&d.length))return[];i.newDoc.text=[i.newDoc.text.join(" ")]}return i}),C.updateListener.of(i=>{!i.docChanged||o||(n(1,s=i.state.doc.toString()),P())})]})})),()=>{clearTimeout(_),V(),f==null||f.destroy()}});function oe(t){me[t?"unshift":"push"](()=>{w=t,n(0,w)})}return e.$$set=t=>{"id"in t&&n(2,g=t.id),"value"in t&&n(1,s=t.value),"disabled"in t&&n(3,o=t.disabled),"placeholder"in t&&n(4,l=t.placeholder),"baseCollection"in t&&n(5,a=t.baseCollection),"singleLine"in t&&n(6,b=t.singleLine),"extraAutocompleteKeys"in t&&n(7,v=t.extraAutocompleteKeys),"disableRequestKeys"in t&&n(8,E=t.disableRequestKeys),"disableIndirectCollectionsKeys"in t&&n(9,S=t.disableIndirectCollectionsKeys)},e.$$.update=()=>{e.$$.dirty[0]&32&&n(13,I=Ve(a)),e.$$.dirty[0]&25352&&!o&&(D!=I||E!==-1||S!==-1)&&(n(14,D=I),j()),e.$$.dirty[0]&4&&g&&G(),e.$$.dirty[0]&2080&&f&&a!=null&&a.schema&&f.dispatch({effects:[H.reconfigure(z())]}),e.$$.dirty[0]&6152&&f&&A!=o&&(f.dispatch({effects:[F.reconfigure(C.editable.of(!o)),T.reconfigure(q.readOnly.of(o))]}),n(12,A=o),P()),e.$$.dirty[0]&2050&&f&&s!=f.state.doc.toString()&&f.dispatch({changes:{from:0,to:f.state.doc.length,insert:s}}),e.$$.dirty[0]&2064&&f&&typeof l<"u"&&f.dispatch({effects:[U.reconfigure(Y(l))]})},[w,s,g,o,l,a,b,v,E,S,O,f,A,I,D,oe]}class Xe extends se{constructor(r){super(),ae(this,r,Ge,Pe,le,{id:2,value:1,disabled:3,placeholder:4,baseCollection:5,singleLine:6,extraAutocompleteKeys:7,disableRequestKeys:8,disableIndirectCollectionsKeys:9,focus:10},null,[-1,-1])}get focus(){return this.$$.ctx[10]}}export{Xe as default};