(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,n,t){e.exports=t(75)},45:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a,r,i=t(0),o=t.n(i),l=t(30),c=t.n(l),m=(t(45),t(36)),s=t(5),u=t(1),d=t(2),b=d.b.div(a||(a=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 15vh;\n  background-image: linear-gradient(#fafafa, lightgrey);\n"]))),h=d.b.h1(r||(r=Object(u.a)(["\n  font-size: 3rem;\n  line-height: 1.05em;\n  color: #2b2922;\n  width: 100%;\n  max-width: 60rem;\n  text-align: center;\n  margin: 0.5rem auto;\n  padding: 2rem;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n"])));function f(e){var n=e.children;return o.a.createElement(b,null,o.a.createElement(h,null,n))}var g,p,v,x,j,w,E,O,y,k,S,z,F,M,I,_,C=t(13),A=d.b.div(g||(g=Object(u.a)(["\n  background-image: linear-gradient(#1e212b, darkgrey);\n  padding: 2rem 1.5rem;\n  min-height: 62vh;\n"]))),R=d.b.div(p||(p=Object(u.a)(["\n  width: 100%;\n  max-width: 120rem;\n  margin: 0 auto;\n"]))),V=(d.b.h1(v||(v=Object(u.a)(["\n  text-align: center;\n  margin-bottom: 3rem;\n  color: #fafafa;\n"]))),d.b.div(x||(x=Object(u.a)(["\n  min-height: 20rem;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 120rem;\n  justify-content: center;\n  cursor: pointer;\n"])))),H=d.b.div(j||(j=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(250, 250, 250, 0.15);\n  color: #ff8427;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n"]))),P=d.b.div(w||(w=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(250, 250, 250, 0.15);\n  color: red;\n  font-size: 1.6rem;\n  border-radius: 5px;\n"]))),L=d.b.div(E||(E=Object(u.a)(["\n  max-width: 25rem;\n  width: 100%;\n  margin: 0 1.5rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: top;\n  align-items: center;\n  padding: 1.5rem 1.5rem;\n  background-color: #fafafa;\n  text-align: center;\n  border-radius: 3rem;\n  transition: background-color 0.2s;\n  transition: transform 0.2s;\n  position: relative;\n\n  &:hover {\n    background-color: #eaeaea;\n    transform: scale(1.05);\n  }\n"]))),T=d.b.img(O||(O=Object(u.a)(["\n  min-width: 22rem;\n  width: 100%;\n  border-radius: 1.8rem;\n  display: block;\n  margin: 0 auto 1rem;\n"]))),B=d.b.h2(y||(y=Object(u.a)(["\n  font-size: 1.8rem;\n  line-height: 2.8rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n  color: #2b2922;\n"]))),D=d.b.div(k||(k=Object(u.a)(["\n  min-height: ",";\n  align-items: center;\n  justify-content: center;\n  display: flex;\n"])),function(e){return e.size}),J=Object(d.b)(C.a).attrs(function(e){return{icon:e.icon,style:{color:"true"===e.isMovieFavorite?"gold":"rgba(100, 100, 100, 0.5)",marginBottom:"2rem"}}})(S||(S=Object(u.a)(["\n  display: inline-block;\n  width: 3rem;\n  height: 3rem;\n  z-index: 4;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),N=t(10),Y=t(12),G=t(8);function X(e){var n=e.fetching,t=e.titleInfo,a=e.error,r=e.handleFavoriteClick,i=e.favoriteMovies;e.searchValue;return o.a.createElement(A,null,o.a.createElement(R,null,o.a.createElement(V,null,n&&o.a.createElement(H,null,"Loading movies..."),a&&o.a.createElement(P,null,"Error: ",a),!n&&!a&&t.length>0&&t.map(function(e){var n=i.some(function(n){return n._id===e._id});return o.a.createElement(L,{key:e._id},o.a.createElement(D,{size:"40rem"},o.a.createElement(G.b,{to:"/".concat(e._id)},o.a.createElement(D,{size:"25rem"},o.a.createElement(T,{src:e.poster_path})),o.a.createElement(D,{size:"8rem"},o.a.createElement(B,null,e.title)),o.a.createElement(B,null,"Release date: ",e.release_date),o.a.createElement(B,null,"Id: ",e._id))),o.a.createElement(J,{icon:!0===n?N.b:Y.a,isMovieFavorite:n?"true":"false",onClick:function(n){n.stopPropagation(),r(e)},title:"Add/Remove Favourite"}))}))))}var q,K,U,Q,W,Z,$=d.b.div(z||(z=Object(u.a)(["\n  padding: 0.5rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(#1e212b, #eaeaea);\n  min-height: 10rem;\n"]))),ee=d.b.img(F||(F=Object(u.a)(["\n  display: block;\n  position: fixed;\n  top: 2.5rem;\n  left: 1rem;\n  z-index: 9999;\n  max-height: 4.5rem;\n  border-radius: 1rem;\n  margin: 8px 1.6rem;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);\n  transition: transform 0.3s;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),ne=d.b.div(M||(M=Object(u.a)(["\n  width: 100%;\n  max-width: 120rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n"]))),te=d.b.nav(I||(I=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]))),ae=Object(d.b)(G.b)(_||(_=Object(u.a)(["\n  color: #fafafa;\n  background-color: #1e212b;\n  display: block;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  font-weight: 600;\n  padding: 8px 1.6rem;\n  position: relative;\n  border-radius: 5px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);\n  transition: transform 0.3s;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),re=d.b.div(q||(q=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 45%;\n  top: 6rem;\n  transform: translateY(-45%);\n  color: #2b2922;\n  z-index: 5;\n  cursor: pointer;\n  &::after {\n    content: attr(data-favorites);\n    margin-left: 0.5rem;\n    font-weight: bold;\n    position: absolute;\n    top: 0.5rem;\n    left: 3.5rem;\n    color: #2b2922;\n    z-index: 6;\n    font-size: 1.6rem;\n    line-height: 2.4rem;\n    width: 2rem;\n    text-align: center;\n  }\n"]))),ie=function(e){var n=e.favoriteMovies,t=e.toggleShowFavorites,a=n.length>0;return o.a.createElement(ne,null,o.a.createElement(te,null,o.a.createElement(re,{onClick:function(){t()},"data-favorites":n.length>0?n.length:"",title:!0===a?n.length+" Favorites":"No favorite movies selected."},o.a.createElement(B,null,"Fav\xa0"),o.a.createElement(J,{icon:!0===a?N.b:Y.a,isMovieFavorite:a?"true":"false"}))))};function oe(e){var n=e.searchValue,t=e.handleSearch,a=e.favoriteMovies,r=e.toggleShowFavorites,i=e.handleHomeClick;return o.a.createElement($,null,o.a.createElement(ne,null,o.a.createElement(G.b,{to:"/",onClick:i},o.a.createElement(ee,{src:"https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Reload Logo",title:"Home"})),o.a.createElement(ie,{favoriteMovies:a,toggleShowFavorites:r},"Fav"),o.a.createElement(fe,{type:"search",placeholder:"",id:"Search",value:n,onChange:function(e){return t(e.target.value)}})))}function le(){return o.a.createElement($,null,o.a.createElement(ne,null,o.a.createElement(te,null,o.a.createElement(ae,{to:"/"},"HomePage"))))}var ce,me,se,ue=d.b.div(K||(K=Object(u.a)(["\n  display: block;\n  width: 100%;\n  min-width: 30rem;\n  position: relative;\n\n  ","\n"])),function(e){return e.noMargin?"":Object(d.a)(U||(U=Object(u.a)(["\n          margin-bottom: 1rem;\n        "])))}),de=Object(d.b)(C.a)(Q||(Q=Object(u.a)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  display: block;\n  width: 2rem;\n  height: 2rem;\n  position: absolute;\n  right: 2.5rem;\n  transform: translateY(-45%);\n  color: rgba(100, 100, 100, 0.5);\n  z-index: 4;\n"]))),be=Object(d.a)(W||(W=Object(u.a)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  color: #1e212b;\n  display: block;\n  max-width: 25%;\n  padding: 0.7rem 1rem;\n  border-radius: 2rem;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);\n  margin: 5px 0;\n  transition: box-shadow 0.3s;\n\n  &:focus {\n    box-shadow: none;\n  }\n"]))),he=d.b.input(Z||(Z=Object(u.a)(["\n  ",'\n  &[type="search"] {\n    position: absolute;\n    right: 1rem;\n    transform: translateY(-60%);\n    background-color: rgba(200, 200, 200, 0.9);\n    font-size: 1.7rem;\n    z-index: 3;\n  }\n'])),be);function fe(e){var n=e.type,t=e.value,a=e.onChange,r=e.placeholder,l=Object(i.useState)(!1),c=Object(s.a)(l,2),m=c[0],u=c[1];return o.a.createElement(ue,{noMargin:!0},!m&&o.a.createElement(de,{icon:N.a})," ",o.a.createElement(he,{type:n,value:t,placeholder:r,onChange:a,onFocus:function(){u(!0)},onBlur:function(){u(!1)}}))}var ge=d.b.div(ce||(ce=Object(u.a)(["\n  background-color: #1e212b;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 100vw;\n"]))),pe=d.b.h3(me||(me=Object(u.a)(["\n  color: #fafafa;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  padding: 1rem 1.5rem;\n  text-align: right;\n"]))),ve=d.b.a(se||(se=Object(u.a)(["\n  color: #fafafa;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 400;\n  transition: color 0.3s;\n  &:hover {\n    color: lightskyblue;\n  }\n"])));function xe(){return o.a.createElement(ge,null,o.a.createElement(pe,null,"Designed by:"," ",o.a.createElement(ve,{href:"mailto:ilie.rasa@gmail.com"},"Rasa I.")," / Updated Apr.2024"))}function je(e){var n=e.children,t=e.searchValue,a=e.handleSearch,r=e.handleHomeClick,i=e.favoriteMovies,l=e.toggleShowFavorites;return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe,{searchValue:t,handleSearch:a,favoriteMovies:i,toggleShowFavorites:l,handleHomeClick:r}),n,o.a.createElement(xe,null))}function we(e){var n=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(le,null),n,o.a.createElement(xe,null))}var Ee,Oe,ye,ke,Se,ze,Fe,Me,Ie,_e,Ce,Ae=t(19),Re=t.n(Ae),Ve=t(34),He=t(35),Pe=t.n(He);function Le(e){var n=Object(i.useState)([]),t=Object(s.a)(n,2),a=t[0],r=t[1],o=Object(i.useState)(""),l=Object(s.a)(o,2),c=l[0],m=l[1],u=Object(i.useState)(!0),d=Object(s.a)(u,2),b=d[0],h=d[1],f={method:"GET",url:e?"https://movies-api14.p.rapidapi.com/movie/"+e:"https://movies-api14.p.rapidapi.com/movies",headers:{"X-RapidAPI-Key":"dba5d11475msh67833a57c148263p1a7846jsna1ce2112129b","X-RapidAPI-Host":"movies-api14.p.rapidapi.com"}};function g(e){return p.apply(this,arguments)}function p(){return(p=Object(Ve.a)(Re.a.mark(function e(n){var t,a,i,o;return Re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Pe.a.request(f);case 3:t=e.sent,a=t.data,i=t.status,o=t.statusText,200===i?r(n?a.movie:a.movies):m(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m(e.t0.message);case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[0,10,13,16]])}))).apply(this,arguments)}return Object(i.useEffect)(function(){e?g(e):g()},[]),{fetching:b,titleInfo:a,error:c}}function Te(){var e=Le(),n=e.fetching,t=e.titleInfo,a=e.error,r=Object(i.useState)([]),l=Object(s.a)(r,2),c=l[0],u=l[1],d=Object(i.useState)([]),b=Object(s.a)(d,2),h=b[0],g=b[1],p=Object(i.useState)(""),v=Object(s.a)(p,2),x=v[0],j=v[1],w=Object(i.useState)(JSON.parse(localStorage.getItem("favoriteMovies"))||[]),E=Object(s.a)(w,2),O=E[0],y=E[1],k=Object(i.useState)(!1),S=Object(s.a)(k,2),z=S[0],F=S[1],M=Object(i.useState)(!1),I=Object(s.a)(M,2),_=I[0],C=I[1];Object(i.useEffect)(function(){u(t)},[t]),Object(i.useEffect)(function(){if(x){var e=x.toLowerCase(),n=c.filter(function(n){return n.title.toLowerCase().includes(e)});g(n)}else g([])},[x,c]),Object(i.useEffect)(function(){F(O.length>0),localStorage.setItem("favoriteMovies",JSON.stringify(O))},[O]);var A=function(e){O.some(function(n){return n._id===e._id})?(y(O.filter(function(n){return n._id!==e._id})),0===O.length&&F(!1)):(y([].concat(Object(m.a)(O),[e])),z||F(!0))};return o.a.createElement(je,{searchValue:x,handleSearch:j,favoriteMovies:O,handleFavoriteClick:A,showFavorites:z,setShowFavorites:F,toggleShowFavorites:function(){F(function(e){return!e}),C(function(e){return!e})},handleHomeClick:function(){F(!1),C(!1)}},_?o.a.createElement(f,null,"FAVORITE MOVIES"):o.a.createElement(f,null,"MOVIE DATABASE APP"),o.a.createElement(X,{fetching:n,titleInfo:_?O:x?h:t,error:a,favoriteMovies:O,handleFavoriteClick:A,searchValue:x}))}var Be=d.b.div(Ee||(Ee=Object(u.a)(["\n  background-image: linear-gradient(#1e212b, darkgrey);\n  padding: 1rem 1.5rem;\n  min-height: 60vh;\n"]))),De=d.b.div(Oe||(Oe=Object(u.a)(["\n  width: 100%;\n  max-width: 120rem;\n  margin: 0 auto;\n"]))),Je=(d.b.h1(ye||(ye=Object(u.a)(["\n  text-align: center;\n  margin-bottom: 3rem;\n  color: #fafafa;\n"]))),d.b.div(ke||(ke=Object(u.a)(["\n  min-height: 80rem;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 120rem;\n  justify-content: center;\n"])))),Ne=d.b.div(Se||(Se=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(250, 250, 250, 0.15);\n  color: #ff8427;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n"]))),Ye=d.b.div(ze||(ze=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(250, 250, 250, 0.15);\n  font-size: 1.6rem;\n  color: red;\n  border-radius: 5px;\n"]))),Ge=d.b.div(Fe||(Fe=Object(u.a)(["\n  max-width: calc(100% - 3rem);\n  margin: 0 1.5rem 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: top;\n  padding: 1.5rem 1.5rem;\n  background-color: #fafafa;\n  text-align: center;\n  border-radius: 3rem;\n  transition: background-color 0.3s;\n"]))),Xe=d.b.img(Me||(Me=Object(u.a)(["\n  width: 100%;\n  max-width: 40rem;\n  border-radius: 2rem;\n  display: block;\n  margin: 2rem auto 2rem;\n  box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.2);\n"]))),qe=d.b.h2(Ie||(Ie=Object(u.a)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  color: #2b2922;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  width: 100%;\n"]))),Ke=d.b.div(_e||(_e=Object(u.a)(["\n  width: 100%;\n  min-height: 40rem;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 1rem;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  position: relative;\n"]))),Ue=d.b.iframe(Ce||(Ce=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n"]))),Qe=function(e){var n=new RegExp(/https?:\/\/(www\.)?youtube\.com\/watch\?v=(.*)/i).exec(e);return n?n[2]:null};function We(e){var n=e.fetching,t=e.titleInfo,a=e.error,r=Object(i.useState)(null),l=Object(s.a)(r,2),c=l[0],m=l[1],u=Object(i.useState)(""),d=Object(s.a)(u,2),b=d[0],h=d[1];return Object(i.useEffect)(function(){var e=Qe(t.youtube_trailer);m(e)},[t.youtube_trailer]),Object(i.useEffect)(function(){h(c?"https://www.youtube.com/embed/".concat(c):"")},[c]),o.a.createElement(Be,null,o.a.createElement(De,null,o.a.createElement(Je,null,n&&o.a.createElement(Ne,null,"Loading movie details..."),a&&o.a.createElement(Ye,null,"Error: ",a),!n&&!a&&o.a.createElement(Ge,null,o.a.createElement(Xe,{src:t.poster_path}),o.a.createElement(qe,null,"Movie Id: ",t._id),o.a.createElement(qe,null,"Title: ",t.original_title),o.a.createElement(qe,null,"Description: ",t.overview),o.a.createElement(qe,null,"Genre: ",t.genres),o.a.createElement(qe,null,"Release Date: ",t.release_date),o.a.createElement(Ke,{trailerSrc:b},o.a.createElement(Ue,{src:b,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))))))}var Ze=t(3);function $e(){var e=Le(Object(Ze.g)().id),n=e.fetching,t=e.titleInfo,a=e.error;return o.a.createElement(we,null,o.a.createElement(f,null,t.original_title," - Movie details"),o.a.createElement(We,{fetching:n,titleInfo:t,error:a}))}var en=[{path:"/",component:o.a.createElement(Te,null)},{path:"/:id",component:o.a.createElement($e,null)}],nn="/MovieAppProject";var tn=function(){return o.a.createElement(G.a,{basename:nn},o.a.createElement(Ze.c,null,en.map(function(e){return o.a.createElement(Ze.a,{path:e.path,element:e.component,key:e.path})})))};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(tn,null)))}},[[37,1,2]]]);
//# sourceMappingURL=main.80233241.chunk.js.map