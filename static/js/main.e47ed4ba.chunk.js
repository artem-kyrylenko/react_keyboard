(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),i=n(6),p=n(1),u=n.n(p),d=n(0),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keyup",(function(t){e.setState({pressedKey:t.key})}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("keyup",(function(t){e.setState({pressedKey:t.key})}))}},{key:"render",value:function(){var e=this.state.pressedKey?"The last pressed key is [".concat(this.state.pressedKey,"]"):"Nothing was pressed yet";return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e})})}}]),n}(u.a.Component);n(13);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e47ed4ba.chunk.js.map