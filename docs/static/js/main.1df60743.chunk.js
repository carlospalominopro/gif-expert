(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),c=n.n(r),i=n(2),s=n(0),u=function(e){var t=e.setQuery,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t(c),u(""))},children:Object(s.jsx)("input",{type:"text",value:c,onChange:function(e){u(e.target.value)}})})})},j=n(7),d=n(4),o=n.n(d),l=n(6),b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(t,"&limit=10&api_key=ScORUgp3yI7Ab9s770mLeuEr01iR50am"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t,n;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t||null===(n=t.downsized_medium)||void 0===n?void 0:n.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("img",{src:e.url,alt:e.title}),Object(s.jsx)("p",{children:e.title})]})},f=function(e){var t=e.query,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),1e3)}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h3",{children:[" ",t," "]},t),c&&Object(s.jsx)("p",{className:"animate__animated animate__fadeIn",children:"Cargando"}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(s.jsx)(O,Object(j.a)({},e),e.id)}))})]})},p=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"GIF API IBIZA LOCO"}),Object(s.jsx)(u,{setQuery:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:Object(s.jsx)(f,{query:n},n)})]})};n(14),n(15);c.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1df60743.chunk.js.map