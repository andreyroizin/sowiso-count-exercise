(this["webpackJsonpsowiso-count-exercise"]=this["webpackJsonpsowiso-count-exercise"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(10),i=n.n(c),a=(n(29),n(30),n(18)),o=n(19),u=n(22),b=n(21),j=n(52),l=n(53),h=n(3);function d(e){return Math.floor(Math.random()*e)}var m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={firstNumber:d(100),secondNumber:d(100),userAnswer:0,correctAnswer:!1},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return this.state.correctAnswer?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{align:"center",children:[Object(h.jsxs)(j.a,{variant:"h3",component:"div",children:["Congratulations!",Object(h.jsx)("br",{}),"Your answer is correct"]}),Object(h.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){e.setState({firstNumber:d(100),secondNumber:d(100),userAnswer:0,correctAnswer:!1})},children:"Try again"})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{align:"center",children:[Object(h.jsxs)(j.a,{variant:"h3",children:["Welcome to SOWISO counting exercise",Object(h.jsx)("br",{}),"In this exercise you have to calculate the sum of two numbers",Object(h.jsx)("br",{}),this.state.firstNumber," + ",this.state.secondNumber,"  ="]}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.state.firstNumber+e.state.secondNumber===parseInt(e.state.userAnswer)?e.setState({correctAnswer:!0}):alert("Your answer is incorrect, try again")},children:[Object(h.jsx)("input",{placeholder:"Enter your answer",type:"number",onChange:function(t){return e.setState({userAnswer:t.target.value})}}),Object(h.jsx)("input",{type:"submit",value:"Submit answer"})]})]})})}}]),n}(s.a.Component);var f=function(){return new m},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),O()}},[[36,1,2]]]);
//# sourceMappingURL=main.080fcaa2.chunk.js.map