"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[535],{307:function(t,e,n){n.d(e,{Z:function(){return c}});var r="Button_btn__RBtNK",a=n(184);function c(t){var e=t.onClick,n=t.title;return(0,a.jsx)("button",{className:r,type:"button",onClick:e,children:n})}},369:function(t,e,n){n.d(e,{Z:function(){return f}});n(791);var r=n(565),a=n(87),c=n(689),o=n(784),i="MoviesGallery_list__aM+SO",u="MoviesGallery_item__rY1Lr",s="MoviesGallery_name__Jg+vi",l=n(184);function f(t){var e=t.moviesList,n=(0,c.TH)();return(0,l.jsx)("ul",{className:i,id:"MoviesGallery",children:e.map((function(t){var e=t.id,c=t.title,i=t.name,f=t.poster_path;return(0,l.jsx)("li",{className:u,children:(0,l.jsxs)(a.rU,{to:"/movies/".concat(e),state:{from:n},className:"styles.link",children:[(0,l.jsx)("img",{src:f?r.UB+f:o,alt:c||i,width:"250px"}),(0,l.jsx)("p",{className:s,children:(0,l.jsx)("b",{children:c||i})})]})},e)}))})}},535:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(683),a=n(982),c=n(762),o=n(885),i=n(562),u=n.n(i),s=n(791),l=n(689),f=n(565),h={Searchbar:"Searchbar_Searchbar__5WKzV",SearchFormInput:"Searchbar_SearchFormInput__FT6Bx"},v=n(184);function d(t){var e=t.onSubmit,n=window.location.search.split("=")[1],r=(0,s.useState)(""),a=(0,o.Z)(r,2),c=a[0],i=a[1];(0,s.useEffect)((function(){i(n||"")}),[n]);return(0,v.jsx)("div",{className:h.Searchbar,children:(0,v.jsx)("form",{className:h.SearchForm,onSubmit:function(t){t.preventDefault(),e(c)},children:(0,v.jsx)("input",{className:h.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:c,onChange:function(t){return i(t.target.value)},placeholder:"Search movies"})})})}var m=n(421),p=n(307),_=n(369),y=function(){var t=(0,l.s0)(),e=(0,l.TH)(),n=window.location.search.split("=")[1],i=(0,s.useState)(null!==n&&void 0!==n?n:""),h=(0,o.Z)(i,2),y=h[0],g=h[1],x=(0,s.useState)(1),S=(0,o.Z)(x,2),b=S[0],j=S[1],k=(0,s.useState)([]),Z=(0,o.Z)(k,2),w=Z[0],N=Z[1],C=(0,s.useState)(!1),F=(0,o.Z)(C,2),U=F[0],B=F[1],E=(0,s.useState)(!1),M=(0,o.Z)(E,2),G=M[0],H=M[1];(0,s.useEffect)((function(){n||B(!1),g(n),j(1),N([])}),[n]),(0,s.useEffect)((function(){y&&(B(!1),H(!0),(0,f.Ai)(y,b).then((function(t){N((function(e){var n=t.results.filter((function(t){var n,r=t.id,a=(0,c.Z)(e);try{for(a.s();!(n=a.n()).done;){if(r===n.value.id)return!1}}catch(o){a.e(o)}finally{a.f()}return!0}));return[].concat((0,a.Z)(e),(0,a.Z)(n))})),H(!1),t.total_results!==t.results.length&&B(!0),1===b&&u().Notify.success("Hooray! We found ".concat(t.total_results," movies.")),t.total_results<=20*b&&(B(!1),u().Notify.info("We're sorry, but you've reached the end of search results."))})).catch(L))}),[b,y]);var L=function(){u().Notify.failure("Sorry, there are no movies matching your search query. Please try again."),B(!1),H(!1)};return(0,v.jsxs)("div",{children:[(0,v.jsx)(d,{onSubmit:function(n){n||(u().Notify.failure("Please. Enter the name of the movie."),B(!1)),y===n&&1===b||(t((0,r.Z)((0,r.Z)({},e),{},{search:"query=".concat(n)})),g(n),j(1),N([]))}}),(0,v.jsx)(_.Z,{moviesList:w}),G&&(0,v.jsx)(m.Z,{}),U&&(0,v.jsx)(p.Z,{onClick:function(){j((function(t){return t+1}))},title:"Load more"})]})}},565:function(t,e,n){n.d(e,{Ai:function(){return m},Hx:function(){return d},Sg:function(){return h},Tg:function(){return f},UB:function(){return u},xc:function(){return v}});var r=n(861),a=n(757),c=n.n(a),o="https://api.themoviedb.org/3",i="8b583155d58a646685ec9258b19767f3",u="https://image.tmdb.org/t/p/w500";function s(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function t(){var e,n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(e,n);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return s("".concat(o,"/trending/movie/day?api_key=").concat(i,"&page=").concat(t))}function h(t){return s("".concat(o,"/movie/").concat(t,"?api_key=").concat(i))}function v(t){return s("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"))}function d(t){return s("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"))}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&include_adult=false&page=").concat(e))}},784:function(t,e,n){t.exports=n.p+"static/media/nophoto.d55191a57d7c625bf975.png"}}]);
//# sourceMappingURL=535.bf7f4247.chunk.js.map