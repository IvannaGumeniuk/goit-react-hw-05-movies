"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[457],{457:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),c=e(791),o=e(689),i=e(565),u="Reviews_list__okdpy",a="Reviews_items__vq73B",s=e(184);function f(){var n=(0,o.UO)().movieId,t=(0,c.useState)(null),e=(0,r.Z)(t,2),f=e[0],h=e[1];return(0,c.useEffect)((function(){(0,i.Hx)(n).then((function(n){return h(n.results)}))}),[n]),(0,s.jsx)("ul",{className:u,children:f&&f.length?f.map((function(n){return(0,s.jsxs)("li",{className:a,children:[(0,s.jsxs)("h2",{children:["Author: ",n.author]}),(0,s.jsx)("p",{children:n.content})]},n.id)})):(0,s.jsx)("li",{children:"We don`t have any reviews for this movie"})})}},565:function(n,t,e){e.d(t,{Ai:function(){return p},Hx:function(){return d},Sg:function(){return l},Tg:function(){return h},UB:function(){return a},xc:function(){return v}});var r=e(861),c=e(757),o=e.n(c),i="https://api.themoviedb.org/3",u="8b583155d58a646685ec9258b19767f3",a="https://image.tmdb.org/t/p/w500";function s(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(o().mark((function n(){var t,e,r,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function h(n){return s("".concat(i,"/trending/movie/day?api_key=").concat(u,"&page=").concat(n))}function l(n){return s("".concat(i,"/movie/").concat(n,"?api_key=").concat(u))}function v(n){return s("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"))}function d(n){return s("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US"))}function p(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&include_adult=false&page=").concat(t))}},861:function(n,t,e){function r(n,t,e,r,c,o,i){try{var u=n[o](i),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var i=n.apply(t,e);function u(n){r(i,c,o,u,a,"next",n)}function a(n){r(i,c,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=457.a7ddf77d.chunk.js.map