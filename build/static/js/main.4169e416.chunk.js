(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(46),i=n.n(r),o=(n(55),n(5)),l=n(6),u=n(8),s=n(7),d=n(9),f=n(112),m=n(114),p=n(113),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"modal-loading"},c.a.createElement("img",{src:"images/icon-lock.svg",alt:""}))}}]),t}(c.a.Component),h=n(47),j=n.n(h),O=n(27),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={img:e.img,size:e.size,redirect:e.redirect},n.onClickRedirect=n.onClickRedirect.bind(Object(O.a)(Object(O.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onClickRedirect",value:function(){window.location.href=this.state.redirect}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"roundBtn",style:{background:"url("+e.state.img+") center no-repeat",width:e.state.size.width,height:e.state.size.height,backgroundSize:"cover"},onClick:e.onClickRedirect})}}]),t}(c.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,{img:j.a,size:{width:"200px",height:"200px"},redirect:"/cv"}))}}]),t}(c.a.Component),w=n(32),E=n(48),g=n.n(E);w.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.worker.js";var y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={file:e.file},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(w.Document,{file:g.a},c.a.createElement(w.Page,{pageNumber:1})))}}]),t}(c.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(y,{file:"../../assests/cv.pdf"}))}}]),t}(c.a.Component),x=(n(105),n(107),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(f.a,null,c.a.createElement(a.Suspense,{fallback:b},c.a.createElement(m.a,null,c.a.createElement(p.a,{exact:!0,path:"/",component:k}),c.a.createElement(p.a,{exact:!0,path:"/cv",component:C}))))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=29},47:function(e,t,n){e.exports=n.p+"static/media/ava.e661db49.jpg"},48:function(e,t,n){e.exports=n.p+"static/media/cv.2de9b377.pdf"},50:function(e,t,n){e.exports=n(110)},55:function(e,t,n){},60:function(e,t){},62:function(e,t){},63:function(e,t){},64:function(e,t){},65:function(e,t){}},[[50,2,1]]]);
//# sourceMappingURL=main.4169e416.chunk.js.map