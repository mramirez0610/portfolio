(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=a(4),s=a(1),m=a(9),o=a.n(m);a(7);var u=function(){var e=[{id:"0",name:"github",img:"svgs/github.svg",url:"https://github.com/mramirez0610"},{id:"2",name:"linkedIn",img:"svgs/linkedin.svg",url:"https://www.linkedin.com/in/marco-ramirez-01a3611aa"}].map(function(e){return r.a.createElement("a",{href:e.url,key:e.id},r.a.createElement("img",{className:"icon",src:e.img,alt:"social-icon"}))});return r.a.createElement("div",{className:"banner"},r.a.createElement(o.a,{options:{autoStart:!0,strings:"marco ramirez"}}),r.a.createElement("div",{className:"socials"},e))};a(16);var d=function(){return r.a.createElement("div",{className:"mainView"},r.a.createElement(u,null),r.a.createElement(s.a,null))},h=a(3);var v=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),i=Object(h.a)(c,2),s=i[0],m=i[1],o=Object(n.useState)(!1),u=Object(h.a)(o,2),d=u[0],v=u[1];Object(n.useEffect)(function(){fetch("data/data.json").then(function(e){return e.json()}).then(function(e){m(e),v(!0)},function(e){v(!0),l(e)})},[]);var E=s.map(function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement("h1",{className:"heading"},e.title),r.a.createElement("p",null,e.desc),r.a.createElement("p",null,"Technology used: ",e.tech),r.a.createElement("a",{href:e.url1},"live version")," | ",r.a.createElement("a",{href:e.url2},"github"))});return a?r.a.createElement("div",{className:"container"},"error"):d?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-container"},E)):r.a.createElement("div",{className:"container"})};var E=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"heading"},"about me"),r.a.createElement("p",null,"Hello! I'm Marco Ramirez, and I am currenlty a sophomore attending Indianapolis University Purdue University (IUPUI). I'm majoring in Media Arts and Science, and specializing in Web Design."),r.a.createElement("p",null,"My first time experiencing web design was back in high school, as I started to mess around with the source code of websites that I frequented. I remember viewing a javascript file using the sources tab in DevTools, and then I remember being the most confused I had ever been. From that point on, I was enamored with the concept of web design."),r.a.createElement("p",null,"Soon after, I started to experiment with basic HTML and CSS. Though the things I made didn't look good whatsoever, they were still small steps in a very long road. Fast forward to current day, and I feel like I've started to get the hang of a variety of front-end development tools."))))};var g=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement(i.b,{className:"nav-item",to:"/about"},"About"),r.a.createElement(i.b,{className:"nav-item",to:"/resume"},"R\xe9sum\xe9"),r.a.createElement(i.b,{className:"nav-item",to:"/"},"Home"))};var b=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"heading"},r.a.createElement("p",null,"resum\xe9")),r.a.createElement("p",null,'I planned to embed the pdf in here using an "object" tag, but it completely broke on mobile. It also looked really odd in contrast to the card theme, so a google drive link is the next best thing!'),r.a.createElement("p",{className:"resume-link"},r.a.createElement("a",{className:"a-resume",href:"https://drive.google.com/file/d/1pNhcco0u9vmpU9zZLkmVODxliP5uAxds/preview?usp=sharing"},"Click here instead !")," : )"))))},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})},p=(a(17),document.getElementById("root"));c.a.render(r.a.createElement(i.a,{basename:"/portfolio"},r.a.createElement(g,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(d,null)},r.a.createElement(s.b,{index:!0,element:r.a.createElement(v,null)}),r.a.createElement(s.b,{path:"/about",element:r.a.createElement(E,null)}),r.a.createElement(s.b,{path:"/resume",element:r.a.createElement(b,null)})))),p),f()},7:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.81591164.chunk.js.map