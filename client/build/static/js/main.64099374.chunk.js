(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return j}));var n=a(5),r=a.n(n),s=a(12),c=a(4),o=a(20),l=a.n(o),i=function(){var e=Object(s.a)(r.a.mark((function e(t,a,n){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/api/".concat(t),a,{headers:{Authorization:n}});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();var u=function(e){var t=e.fullname,a=e.username,n=e.email,r=e.password,s=e.cf_password,c={};return t?t.length>25&&(c.fullname="Full name is up to 25 characters long."):c.fullname="Please add your full name.",a?a.replace(/ /g,"").length>25&&(c.username="User name is up to 25 characters long."):c.username="Please add your user name.",n?function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(n)||(c.email="Email format is incorrect."):c.email="Please add your email.",r?r.length<6&&(c.password="Password must be at least 6 characters."):c.password="Please add your password.",r!==s&&(c.cf_password="Confirm password did not match."),{errMsg:c,errLength:Object.keys(c).length}},d=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:c.a.ALERT,payload:{loading:!0}}),t.next=4,i("login",e);case 4:n=t.sent,a({type:c.a.AUTH,payload:{token:n.data.access_token,user:n.data.user}}),localStorage.setItem("firstLogin",!0),a({type:c.a.ALERT,payload:{success:n.data.msg}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:c.a.ALERT,payload:{error:t.t0.response.data.msg}});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("firstLogin")){e.next=14;break}return t({type:c.a.ALERT,payload:{loading:!0}}),e.prev=3,e.next=6,i("refresh_token");case 6:a=e.sent,t({type:c.a.AUTH,payload:{token:a.data.access_token,user:a.data.user}}),t({type:c.a.ALERT,payload:{}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),t({type:c.a.ALERT,payload:{error:e.t0.response.data.msg}});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){var n,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n=u(e)).errLength>0)){t.next=3;break}return t.abrupt("return",a({type:c.a.ALERT,payload:n.errMsg}));case 3:return t.prev=3,a({type:c.a.ALERT,payload:{loading:!0}}),t.next=7,i("register",e);case 7:s=t.sent,a({type:c.a.AUTH,payload:{token:s.data.access_token,user:s.data.user}}),localStorage.setItem("firstLogin",!0),a({type:c.a.ALERT,payload:{success:s.data.msg}}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),a({type:c.a.ALERT,payload:{error:t.t0.response.data.msg}});case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}()}},23:function(e,t,a){"use strict";a.r(t);a(0);var n=a(1);t.default=function(){return Object(n.jsx)("div",{children:"Home"})}},24:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(19),s=a(14),c=a(0),o=a(3),l=a(13),i=a(18),u=a(7),d=a(1);t.default=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(s.a)(e,2),a=t[0],m=t[1],j=a.email,p=a.password,b=Object(c.useState)(!1),h=Object(s.a)(b,2),f=h[0],x=h[1],O=Object(u.c)((function(e){return e})).auth,g=Object(u.b)(),v=Object(o.e)();Object(c.useEffect)((function(){O.token&&v.push("/")}),[O.token,v]);var y=function(e){var t=e.target,s=t.name,c=t.value;m(Object(r.a)(Object(r.a)({},a),{},Object(n.a)({},s,c)))};return Object(d.jsx)("div",{className:"auth_page",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(Object(i.a)(a))},children:[Object(d.jsx)("h3",{className:"text-uppercase text-center mb-4",children:"WeShare"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email","aria-describedby":"emailHelp",onChange:y,value:j}),Object(d.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(d.jsxs)("div",{className:"pass",children:[Object(d.jsx)("input",{type:f?"text":"password",className:"form-control",id:"exampleInputPassword1",onChange:y,value:p,name:"password"}),Object(d.jsx)("small",{onClick:function(){return x(!f)},children:f?"Hide":"Show"})]})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-dark w-100",disabled:!j||!p,children:"Login"}),Object(d.jsxs)("p",{className:"my-2",children:["You don't have an account? ",Object(d.jsx)(l.b,{to:"/register",style:{color:"crimson"},children:"Register Now"})]})]})})}},37:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(19),s=a(14),c=a(0),o=a(7),l=a(3),i=a(13),u=a(18),d=a(1);t.default=function(){var e=Object(o.c)((function(e){return e})),t=e.auth,a=e.alert,m=Object(o.b)(),j=Object(l.e)(),p=Object(c.useState)({fullname:"",username:"",email:"",password:"",cf_password:"",gender:"female"}),b=Object(s.a)(p,2),h=b[0],f=b[1],x=h.fullname,O=h.username,g=h.email,v=h.password,y=h.cf_password,w=Object(c.useState)(!1),N=Object(s.a)(w,2),k=N[0],E=N[1],L=Object(c.useState)(!1),A=Object(s.a)(L,2),C=A[0],T=A[1];Object(c.useEffect)((function(){t.token&&j.push("/")}),[t.token,j]);var S=function(e){var t=e.target,a=t.name,s=t.value;f(Object(r.a)(Object(r.a)({},h),{},Object(n.a)({},a,s)))};return Object(d.jsx)("div",{className:"auth_page",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(Object(u.c)(h))},children:[Object(d.jsx)("h3",{className:"text-uppercase text-center mb-4",children:"V-Network"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"fullname",children:"Full Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"fullname",name:"fullname",onChange:S,value:x,style:{background:"".concat(a.fullname?"#fd2d6a14":"")}}),Object(d.jsx)("small",{className:"form-text text-danger",children:a.fullname?a.fullname:""})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"username",children:"User Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",onChange:S,value:O.toLowerCase().replace(/ /g,""),style:{background:"".concat(a.username?"#fd2d6a14":"")}}),Object(d.jsx)("small",{className:"form-text text-danger",children:a.username?a.username:""})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",name:"email",onChange:S,value:g,style:{background:"".concat(a.email?"#fd2d6a14":"")}}),Object(d.jsx)("small",{className:"form-text text-danger",children:a.email?a.email:""})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(d.jsxs)("div",{className:"pass",children:[Object(d.jsx)("input",{type:k?"text":"password",className:"form-control",id:"exampleInputPassword1",onChange:S,value:v,name:"password",style:{background:"".concat(a.password?"#fd2d6a14":"")}}),Object(d.jsx)("small",{onClick:function(){return E(!k)},children:k?"Hide":"Show"})]}),Object(d.jsx)("small",{className:"form-text text-danger",children:a.password?a.password:""})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"cf_password",children:"Confirm Password"}),Object(d.jsxs)("div",{className:"pass",children:[Object(d.jsx)("input",{type:C?"text":"password",className:"form-control",id:"cf_password",onChange:S,value:y,name:"cf_password",style:{background:"".concat(a.cf_password?"#fd2d6a14":"")}}),Object(d.jsx)("small",{onClick:function(){return T(!C)},children:C?"Hide":"Show"})]}),Object(d.jsx)("small",{className:"form-text text-danger",children:a.cf_password?a.cf_password:""})]}),Object(d.jsxs)("div",{className:"row justify-content-between mx-0 mb-1",children:[Object(d.jsxs)("label",{htmlFor:"male",children:["Male: ",Object(d.jsx)("input",{type:"radio",id:"male",name:"gender",value:"male",onChange:S})]}),Object(d.jsxs)("label",{htmlFor:"female",children:["Female: ",Object(d.jsx)("input",{type:"radio",id:"female",name:"gender",value:"female",defaultChecked:!0,onChange:S})]}),Object(d.jsxs)("label",{htmlFor:"other",children:["Other: ",Object(d.jsx)("input",{type:"radio",id:"other",name:"gender",value:"other",onChange:S})]})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-dark w-100",children:"Register"}),Object(d.jsxs)("p",{className:"my-2",children:["Already have an account? ",Object(d.jsx)(i.b,{to:"/",style:{color:"crimson"},children:"Login Now"})]})]})})}},4:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={AUTH:"AUTH",ALERT:"ALERT"}},45:function(e,t,a){},47:function(e,t,a){var n={"./home":23,"./home.js":23,"./login":24,"./login.js":24,"./register":37,"./register.js":37};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=47},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),c=a.n(s),o=(a(45),a(13)),l=a(3),i=a(1),u=function(){return Object(i.jsx)("div",{className:"position-relative",style:{minHeight:"calc(100vh - 70px)"},children:Object(i.jsx)("h2",{className:"position-absolute text-secondary",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:"404 | Not Found."})})},d=function(){var e=Object(l.f)(),t=e.page;return function(e){try{return r.a.createElement(a(47)("./".concat(e)).default)}catch(t){return Object(i.jsx)(u,{})}}(e.id?"".concat(t,"/[id]"):"".concat(t))},m=a(23),j=a(24),p=a(7),b=a(4),h=function(){return Object(i.jsx)("div",{className:"position-fixed w-100 h-100 text-center loading",style:{background:"#0008",color:"white",top:0,left:0,zIndex:50},children:Object(i.jsxs)("svg",{width:"205",height:"250",viewBox:"0 0 40 50",children:[Object(i.jsx)("polygon",{stroke:"#fff",strokeWidth:"1",fill:"none",points:"20,1 40,40 1,40"}),Object(i.jsx)("text",{fill:"#fff",x:"5",y:"47",children:"Loading"})]})})},f=function(e){var t=e.msg,a=e.handleShow,n=e.bgColor;return Object(i.jsxs)("div",{className:"toast show position-fixed text-light ".concat(n),style:{top:"5px",right:"5px",minWidth:"200px",zIndex:50},children:[Object(i.jsxs)("div",{className:"toast-header text-light ".concat(n),children:[Object(i.jsx)("strong",{className:"mr-auto text-light",children:t.title}),Object(i.jsx)("button",{className:"ml-2 mb-1 close text-light","data-dismiss":"toast",style:{outline:"none"},onClick:a,children:"\xd7"})]}),Object(i.jsx)("div",{className:"toast-body",children:t.body})]})},x=function(){var e=Object(p.c)((function(e){return e})).alert,t=Object(p.b)();return Object(i.jsxs)("div",{children:[e.loading&&Object(i.jsx)(h,{}),e.error&&Object(i.jsx)(f,{msg:{title:"Error",body:e.error},handleShow:function(){return t({type:b.a.ALERT,payload:{}})},bgColor:"bg-danger"}),e.success&&Object(i.jsx)(f,{msg:{title:"Success",body:e.success},handleShow:function(){return t({type:b.a.ALERT,payload:{}})},bgColor:"bg-success"})]})},O=a(18);var g=function(){var e=Object(p.c)((function(e){return e})).auth,t=Object(p.b)();return Object(n.useEffect)((function(){console.log("refresh token"),t(Object(O.b)())}),[t]),Object(i.jsxs)(o.a,{children:[Object(i.jsx)(x,{}),Object(i.jsx)("input",{type:"checkbox",id:"theme"}),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(l.a,{exact:!0,path:"/",component:e.token?m.default:j.default}),Object(i.jsx)(l.a,{exact:!0,path:"/:page",component:d}),Object(i.jsx)(l.a,{exact:!0,path:"/:page/:id",component:d})]})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},y=a(17),w=a(39),N={},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.AUTH:return t.payload;default:return e}},E={},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.ALERT:return t.payload;default:return e}},A=Object(y.combineReducers)({auth:k,alert:L}),C=a(40),T=Object(y.createStore)(A,Object(C.composeWithDevTools)(Object(y.applyMiddleware)(w.a))),S=function(e){var t=e.children;return Object(i.jsx)(p.a,{store:T,children:t})};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(S,{children:Object(i.jsx)(g,{})})}),document.getElementById("root")),v()}},[[76,1,2]]]);
//# sourceMappingURL=main.64099374.chunk.js.map