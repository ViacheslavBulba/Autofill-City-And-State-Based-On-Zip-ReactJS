(this["webpackJsonpautofill-city-and-state-based-on-zip-reactjs"]=this["webpackJsonpautofill-city-and-state-based-on-zip-reactjs"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(4),r=n.n(i),o=(n(9),n(10),n(2)),u=(n(11),n(0));var s=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),s=r[0],l=r[1],j=Object(c.useState)(""),h=Object(o.a)(j,2),d=h[0],f=h[1],b=Object(c.useState)([]),p=Object(o.a)(b,2),O=p[0],g=p[1],x=Object(c.useState)(!1),v=Object(o.a)(x,2),y=v[0],C=v[1];return Object(c.useEffect)((function(){fetch("./zipCodesUSA.json").then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){return t}));g(e)}))}),[]),Object(u.jsxs)("div",{className:"zip-box",children:[Object(u.jsxs)("ol",{children:[Object(u.jsx)("li",{children:"Zip length limit = 5 digits"}),Object(u.jsx)("li",{children:"Only digits are allowed for entering"}),Object(u.jsx)("li",{children:"If the Zip changes after lookup - clear the state and city fields"})]}),Object(u.jsx)("input",{type:"text",placeholder:"Zip",value:n,onChange:function(t){return function(t){var e=t.replace(/[^\d]/,"");if(e.length<6&&a(e),e.length<5&&y&&(l(""),f(""),C(!1)),5===e.length){var n=O.filter((function(t){return t.zip.toLowerCase().includes(e.toLowerCase())}));0===n.length?(l("No entry found"),f("No entry found"),C(!0)):1===n.length?(l(n[0].state_name),f(n[0].city),C(!0)):(l("More than one match"),f("More than one match"),C(!0))}}(t.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"State",value:s,onChange:function(t){return l(t.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"City",value:d,onChange:function(t){return f(t.target.value)}})]})};var l=function(){return Object(u.jsx)("div",{className:"app-box",children:Object(u.jsx)(s,{})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),j()}],[[13,1,2]]]);
//# sourceMappingURL=main.1ac019c1.chunk.js.map