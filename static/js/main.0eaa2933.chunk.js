(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),o=n(5),i=n(6),a=n(9),u=n(7),l=n(8),b=n(1),d=n.n(b),h=n(2),j=n.n(h),p=(n(14),n(15),n(0)),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function v(t,e){var n=e.sortType,r=e.isReversed,c=Object(l.a)(t);return c.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),c}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var y=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortBy=function(e){t.setState({sortType:e})},t.reset=function(){t.setState({sortType:s.NONE,isReversed:!1})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.sortType,r=e.isReversed,c=n!==s.NONE||r;return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button is-info",{"is-light":n!==s.ALPHABET}),onClick:function(){t.sortBy(s.ALPHABET)},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button is-success",{"is-light":n!==s.LENGTH}),onClick:function(){t.sortBy(s.LENGTH)},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button is-warning",{"is-light":!r}),onClick:function(){t.reverse()},children:"Reverse"}),c&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){t.reset()},children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:v(f,{isReversed:r,sortType:n}).map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),n}(d.a.Component);c.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0eaa2933.chunk.js.map