(this.webpackJsonpreacttodonew=this.webpackJsonpreacttodonew||[]).push([[0],{17:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(5),r=n.n(i),o=(n(17),n(2)),d=n(10),s=n(1);var u=function(t){var e=t.addTask,n=a.a.useState({input:""}),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(s.jsxs)("div",{className:"task-input",children:[Object(s.jsx)("input",{onChange:function(t){r({input:t.target.value})},value:i.input}),Object(s.jsx)("button",{onClick:function(){var t=i.input;t&&(e(t),r({input:""}))},children:"ADD"})]})},l=n(12),j=["task"],O=function(t){var e=t.task,n=Object(l.a)(t,j),c=function(){return Object(s.jsx)("div",{className:"action-btn",children:e.done?Object(s.jsx)("p",{onClick:n.deleteTask,children:"\u274c"}):Object(s.jsx)("p",{onClick:n.doneTask,children:"\u2714\ufe0f"})})},a="task "+(e.done?"task-done":"");return Object(s.jsxs)("div",{className:a,children:[Object(s.jsx)("p",{children:e.tittle}),Object(s.jsx)(c,{})]})},b=n(4);var p=function(){var t=Object(b.c)((function(t){return t})),e=Object(b.b)(),n=t.filter((function(t){return!t.done})),c=t.filter((function(t){return t.done}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("h1",{className:"top",children:[" Active tasks: ",n.length]}),[].concat(Object(o.a)(n),Object(o.a)(c)).map((function(t){return Object(s.jsx)(O,{task:t,doneTask:function(){return n=t.id,void e(function(t){return{type:"DONE_TASK",payload:t}}(n));var n},deleteTask:function(){return n=t.id,void e(function(t){return{type:"DELETE_TASK",payload:t}}(n));var n}},t.id)})),Object(s.jsx)(u,{addTask:function(t){e(function(t){return{type:"ADD_TASK",payload:t}}(t))}})]})},f=n(11),v=[{id:0,tittle:"\u041d\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 1",done:!1},{id:1,tittle:"\u041d\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 2",done:!0},{id:2,tittle:"\u041d\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 3",done:!1}],h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TASK":var n={id:0!==t.length?t.length:0,tittle:e.payload,done:!1};return[].concat(Object(o.a)(t),[n]);case"DONE_TASK":var c=t.map((function(t){return t.id})).indexOf(e.payload);return t[c].done=!0,Object(o.a)(t);case"DELETE_TASK":var a=t.filter((function(t){return t.id!==e.payload}));return Object(o.a)(a);default:return t}},k=Object(f.a)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(s.jsx)(b.a,{store:k,children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.714c1e0a.chunk.js.map