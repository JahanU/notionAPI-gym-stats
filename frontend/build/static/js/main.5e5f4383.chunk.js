(this["webpackJsonpnotion-frontend"]=this["webpackJsonpnotion-frontend"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(5),c=n.n(s),a=(n(11),n(6)),r=n(2),o=n(4),l=n.n(o),i=n(1),u=n(0),j=["Push","Pull","Legs"],b=["Bench Press","Incline Bench","Decline Bench","Decline Flys","Cable Flys","Machine Flys","Overhead Press","Dips","Seated Dips","Cable Push Down"],h=new Map;function O(){var e=Object(i.useState)(j[0]),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(b),o=Object(r.a)(c,2),O=o[0],p=o[1],d=Object(i.useState)(b[0]),m=Object(r.a)(d,2),x=m[0],f=m[1],g=Object(i.useState)(0),v=Object(r.a)(g,2),S=v[0],y=v[1],C=Object(i.useState)(0),w=Object(r.a)(C,2),P=w[0],D=w[1],F=Object(i.useState)(0),N=Object(r.a)(F,2),L=N[0],k=N[1],E=Object(i.useState)(null),B=Object(r.a)(E,2),R=B[0],q=B[1],J=Object(i.useState)(!1),I=Object(r.a)(J,2),M=I[0],T=I[1],G=Object(i.useState)(""),U=Object(r.a)(G,2),W=U[0],z=U[1],A=function(){var e=Object(a.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n,x,S,R),s={tag:n,exercise:x,weight:S,reps:P,comment:L,notionCode:R},console.log(s),"http://localhost:4000/post-gym-stats",e.prev=5,e.next=8,fetch("http://localhost:4000/post-gym-stats",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 8:if(e.sent.ok){e.next=11;break}throw new Error("Request failed!");case 11:T(!1),z("Successfully submitted stats!"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),T(!0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{className:"form-control",onSubmit:A,children:[M&&Object(u.jsx)("span",{className:"error-text",children:"Error with request"}),W&&Object(u.jsx)("span",{className:"success-text",children:W}),Object(u.jsxs)("div",{className:"control-group",children:[Object(u.jsx)("label",{children:"Gym Day"}),Object(u.jsx)("select",{onChange:function(e){z(""),s(e.target.value),h.has(e.target.value)&&p(h.get(e.target.value))},children:j.map((function(e){return Object(u.jsx)("option",{children:e},e)}))}),Object(u.jsx)("label",{htmlFor:"exercises",children:"Exercises"}),Object(u.jsx)("select",{onChange:function(e){z(""),f(e.target.value)},children:O.map((function(e){return Object(u.jsx)("option",{children:e},e)}))}),Object(u.jsx)("label",{htmlFor:"weight",children:"Weight"}),Object(u.jsx)("input",{type:"number",onChange:function(e){z(""),y(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"reps",children:"Reps"}),Object(u.jsx)("input",{type:"number",onChange:function(e){z(""),D(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"comment",children:"Comments"}),Object(u.jsx)("input",{onChange:function(e){z(""),k(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"notion",children:"Notion Code"}),Object(u.jsx)("input",{type:"number",onChange:function(e){q(e.target.value)}})]}),Object(u.jsx)("div",{className:"form-actions",children:Object(u.jsx)("button",{children:"Submit"})})]})}h.set("Push",b),h.set("Pull",["Lat Pull Down","Seated Row","Deadlift","Sumo Lift","Pull Ups"]),h.set("Legs",["Calf Press","Calves Raises","Leg Curl","Leg Extension","Leg Press","Squat"]);var p=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(O,{})})};c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5e5f4383.chunk.js.map