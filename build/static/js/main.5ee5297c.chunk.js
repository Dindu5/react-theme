(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),c=t.n(o),i=t(1),u=t(2);function m(){var e=Object(i.a)(["\n\nmax-width: 450px;\nmargin :auto;\npadding: 2rem;\nbackground-color: var(--primary-base);\nfont-family: 'Lobster', cursive;\nborder-radius : .3rem;\ncolor: var(--primary-font);\n\nh1 {\n  margin: 1rem 0;\n  text-align: center;\n  font-size: 1.4rem;\n}\n"]);return m=function(){return e},e}var l=u.a.div(m());var s=function(){return a.a.createElement(l,null,a.a.createElement("h1",null,"React Theme Switcher"))},d=t(11),b={mobileL:"(max-width: ".concat("600px",")")},f={bg:"#3080b8",font:"#b8e0f8",base:"#084870"},p={bg:"#323232",font:"#14ffec",base:"#212121"},y={bg:"#102038",font:"#e84060",base:"#181828"},g={bg:"#283048",font:"#d8e8f0",base:"#008088"};function v(){var e=Object(i.a)(["\nbackground-color :#14ffec;\n"]);return v=function(){return e},e}function E(){var e=Object(i.a)(["\nbackground-color :#d8e8f0;\n"]);return E=function(){return e},e}function h(){var e=Object(i.a)(["\nbackground-color : #b8e0f8;\n"]);return h=function(){return e},e}function j(){var e=Object(i.a)(["\nbackground-color : #e84060;\n"]);return j=function(){return e},e}function O(){var e=Object(i.a)(["\nmargin: .8rem;\npadding: 1rem;\nopacity : .2;\ndisplay: block;\nborder: none;\ncursor: pointer;\nborder-radius: 5px;\ntransition: all .6s;\n\n&:hover,&.active {\n    outline: none;\n    opacity:1;\n}\n"]);return O=function(){return e},e}function k(){var e=Object(i.a)(["\nposition: absolute;\nright: 2rem;\ntop: 5.5rem;\n@media "," {\n    right: 0.5rem;\n    top: 0;\n}\n"]);return k=function(){return e},e}var x=u.a.div(k(),b.mobileL),P=u.a.button(O()),S=Object(u.a)(P)(j()),w=Object(u.a)(P)(h()),L=Object(u.a)(P)(E()),C=Object(u.a)(P)(v());var I=function(){var e=Object(r.useState)(localStorage.getItem("userTheme")?localStorage.getItem("userTheme"):"neon"),n=Object(d.a)(e,2),t=n[0],o=n[1],c=Object(r.useRef)();return Object(r.useEffect)((function(){Array.from(c.current.children).forEach((function(e){e.classList.remove("active");!function(n){n===e.id&&e.classList.add("active")}(t),function(e){"red"===e&&(document.documentElement.style.setProperty("--primary-bg",y.bg),document.documentElement.style.setProperty("--primary-font",y.font),document.documentElement.style.setProperty("--primary-base",y.base)),"neon"===e&&(document.documentElement.style.setProperty("--primary-bg",f.bg),document.documentElement.style.setProperty("--primary-font",f.font),document.documentElement.style.setProperty("--primary-base",f.base)),"green"===e&&(document.documentElement.style.setProperty("--primary-bg",g.bg),document.documentElement.style.setProperty("--primary-font",g.font),document.documentElement.style.setProperty("--primary-base",g.base)),"purple"===e&&(document.documentElement.style.setProperty("--primary-bg",p.bg),document.documentElement.style.setProperty("--primary-font",p.font),document.documentElement.style.setProperty("--primary-base",p.base)),localStorage.setItem("userTheme",e)}(t)}))}),[t]),a.a.createElement(x,{ref:c},a.a.createElement(S,{id:"red",onClick:function(){o("red")}}," "),a.a.createElement(w,{id:"neon",onClick:function(){o("neon")},className:"active"}),a.a.createElement(L,{id:"green",onClick:function(){o("green")}}),a.a.createElement(C,{id:"purple",onClick:function(){o("purple")}}))};function T(){var e=Object(i.a)(["\n    padding: 1rem 1rem;\n    margin : .5rem 0;\n    border-radius : .3rem;\n    font-family: 'Lobster', cursive;\n    transition : all 0.6s;\n    background-color: var(--primary-base);\n    color :var(--primary-font);\n    backface-visibility: 0;\n\n    &:hover {\n        transform : scale(1.04);\n        cursor: pointer;\n    }\n"]);return T=function(){return e},e}var z=u.a.div(T());var J=function(e){return a.a.createElement(z,null,e.item)};function N(){var e=Object(i.a)(["\nmax-width: 450px;\nheight: 30rem;\nmargin: .5rem auto;\n"]);return N=function(){return e},e}var R=u.a.div(N());var A=function(){return a.a.createElement(R,null,a.a.createElement(J,{item:"With css variables"}),a.a.createElement(J,{item:"Styled-components"}),a.a.createElement(J,{item:"useState and useEffect"}),a.a.createElement(J,{item:"No context"}),a.a.createElement(J,{item:"local storage enabled"}),a.a.createElement(J,{item:"Highly adptable"}))};function B(){var e=Object(i.a)(["\nmargin: 0;\npadding: .5rem;\nbox-sizing : border-box;\n\n"]);return B=function(){return e},e}var H=u.a.div(B());var M=function(){return a.a.createElement(H,null,a.a.createElement(I,null),a.a.createElement(s,null),a.a.createElement(A,null))};t(19);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(M,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5ee5297c.chunk.js.map