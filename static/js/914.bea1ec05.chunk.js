"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[914],{914:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var i=t(885),c=t(791),r=t(87),a=t(689),o=t(565),s=t(421),u=t(862),l=t(784),v="MovieDetails_details_info__p+pH5",d="MovieDetails_film_name__9dH7C",f="MovieDetails_info_text__HTmYs",h="MovieDetails_info__qv2SI",p="MovieDetails_inactive__MzN0n",_="MovieDetails_active__uPNdW",m="MovieDetails_image__c1FeV",x=t(184),g=function(){var e,n,t=(0,a.UO)().movieId,g=(0,c.useState)(null),j=(0,i.Z)(g,2),w=j[0],k=j[1],b=(0,c.useState)(null),N=(0,i.Z)(b,2),y=N[0],S=N[1],M=null!==(e=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,c.useEffect)((function(){(0,o.Sg)(t).then(k).catch((function(e){return S(e)}))}),[t]),(0,x.jsxs)("div",{children:[(0,x.jsx)(r.rU,{to:M,children:"Go Back"}),w&&(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("img",{className:m,src:w.poster_path?o.UB+w.poster_path:l,width:"250px",alt:"movie poster"}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{className:d,children:w.title}),(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{className:f,children:"User Score:"})," ",w.vote_average]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{className:f,children:"Overview: "}),w.overview]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("b",{className:f,children:"Genres:"})," ",w.genres.map((function(e){return e.name})).join(" / ")]})]}),(0,x.jsxs)("nav",{children:[(0,x.jsx)(r.OL,{to:"cast",className:function(e){var n=e.isActive;return"".concat(n?_:p)},children:"Cast"}),(0,x.jsx)(r.OL,{to:"reviews",className:function(e){var n=e.isActive;return"".concat(n?_:p)},children:"Reviews"})]})]})]}),y&&(0,x.jsx)(u.Z,{}),(0,x.jsx)(c.Suspense,{fallback:(0,x.jsx)(s.Z,{}),children:(0,x.jsx)(a.j3,{})})]})}},565:function(e,n,t){t.d(n,{Ai:function(){return p},Hx:function(){return h},Sg:function(){return d},Tg:function(){return v},UB:function(){return s},xc:function(){return f}});var i=t(861),c=t(757),r=t.n(c),a="https://api.themoviedb.org/3",o="8b583155d58a646685ec9258b19767f3",s="https://image.tmdb.org/t/p/w500";function u(){return l.apply(this,arguments)}function l(){return l=(0,i.Z)(r().mark((function e(){var n,t,i,c=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function v(e){return u("".concat(a,"/trending/movie/day?api_key=").concat(o,"&page=").concat(e))}function d(e){return u("".concat(a,"/movie/").concat(e,"?api_key=").concat(o))}function f(e){return u("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function h(e){return u("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"))}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return u("".concat(a,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&include_adult=false&page=").concat(n))}},784:function(e,n,t){e.exports=t.p+"static/media/nophoto.d55191a57d7c625bf975.png"},861:function(e,n,t){function i(e,n,t,i,c,r,a){try{var o=e[r](a),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(i,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,r){var a=e.apply(n,t);function o(e){i(a,c,r,o,s,"next",e)}function s(e){i(a,c,r,o,s,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=914.bea1ec05.chunk.js.map