(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){var a={"./":21,"./develop":56,"./develop.json":56,"./index":21,"./index.ts":21,"./local":57,"./local.json":57,"./production":58,"./production.json":58};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=108},109:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),c=n(36),i=n.n(c),s=n(8),u=n(9),l=n(63),p=n.n(l),d=n(21),m=d.default.NODE_ENV.isDevelopment()?3e4:3e3,O=p.a.create({baseURL:"".concat(d.default.BASE_API_URL),timeout:m,withCredentials:!0}),v=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"addRequest",value:function(e,t){return O.interceptors.request.use(e,t)}},{key:"addResponse",value:function(e,t){return O.interceptors.response.use(e,t)}}]),e}(),h=O,f=(v.addResponse(function(e){return e},function(e){if(!e.response||401!==e.response.status)return Promise.reject(e)}),n(109),n(32)),E=n(65),b=n(81),y=n(66),g=n(15),N=n(33),j=n(83),P=Object(j.a)(),T=[P],k=n(39),C=n.n(k),_=n(29);!function(e){e.GET_POST="GET_POST",e.SET_POST="SET_POST",e.POST_POSITION_CHANGE="POST_POSITION_CHANGE",e.CHANGE_DISCOVER_POST_OPEN_STATE="CHANGE_DISCOVER_POST_OPEN_STATE"}(a||(a={}));var S={posts:[],currentPosition:0,isPostOpen:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_POST:return Object(_.a)({},e);case a.SET_POST:return Object(_.a)({},e,{posts:t.posts});case a.POST_POSITION_CHANGE:return Object(_.a)({},e,{currentPosition:t.position});case a.CHANGE_DISCOVER_POST_OPEN_STATE:return Object(_.a)({},e,{isPostOpen:t.isPostOpen,currentPosition:null!=t.position?t.position:e.currentPosition});default:return e}},I={},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return(arguments.length>1?arguments[1]:void 0).type,e},D={key:"main",storage:C.a,whitelist:[]},x={key:"main",storage:C.a,whitelist:[]},A={key:"post",storage:C.a,whitelist:[]},U=Object(g.combineReducers)({mainState:Object(N.a)(x,w),postState:Object(N.a)(A,R)}),L=Object(N.a)(D,U),V=n(16),G=n.n(V),B=n(26);function M(e){return{type:a.GET_POST,hashTag:e}}function H(e){var t=e.length/50,n=Math.floor(Math.random()*t),o=e.splice(50*n,50);return{type:a.SET_POST,posts:o}}function K(e){return{type:a.POST_POSITION_CHANGE,position:e}}var W,F,q=n(38),J=n(34);!function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.BAD_CONNECTION="BAD_CONNECTION"}(F||(F={}));var z=(W={},Object(J.a)(W,F.UNKNOWN_ERROR,"\uc54c \uc218 \uc5c6\ub294 \uc624\ub958\ub85c \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."),Object(J.a)(W,F.BAD_CONNECTION,"\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624."),W);function $(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(q.a)(G.a.mark(function e(t){var n,a,o,r,c,i,s,u,l,p,d,m,O;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,o=void 0===a?"GET":a,r=t.contentType,c=void 0===r?"application/x-www-form-urlencoded":r,i=t.data,s=void 0===i?{}:i,e.prev=1,"multipart/form-data"===c||"POST"!==o||(c="application/json",s=JSON.stringify(s)),e.next=6,h.request({url:n,method:o,params:/GET|DELETE/.test(o)?s:"",data:"POST"===o?s:"",headers:{Accept:"application/json","Content-Type":c}});case 6:if(u=e.sent,!(l=u.data).success){e.next=12;break}return e.abrupt("return",{success:!0,content:l.content||null});case 12:return e.abrupt("return",{success:!1,content:l.content||null,code:l.code||"",message:l.message||""});case 13:e.next=24;break;case 15:if(e.prev=15,e.t0=e.catch(1),!e.t0.response){e.next=23;break}return p=e.t0.response,d=p.status,m=p.data,O=404===d?z[F.BAD_CONNECTION]:m.message,/404|500/.test(d),e.abrupt("return",{success:!1,content:null,code:d,message:O});case 23:return e.abrupt("return",{success:!1,content:null,code:F.UNKNOWN_ERROR,message:z[F.UNKNOWN_ERROR]});case 24:case"end":return e.stop()}},e,null,[[1,15]])}))).apply(this,arguments)}var X=function(){var e=Object(q.a)(G.a.mark(function e(t){var n,a,o;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.key,a=t.hashTag,e.next=3,$({url:"/post",method:"GET",data:{key:n,hashTag:a}});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Y=G.a.mark(ee),Z=G.a.mark(te);function ee(e){var t;return G.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(B.b)(function(){return X({key:"koko",hashTag:e.hashTag})});case 2:return t=n.sent,n.next=5,Object(B.d)(H(t.content));case 5:case"end":return n.stop()}},Y)}function te(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Object(B.e)(a.GET_POST,ee)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},Z)}var ne=G.a.mark(ae);function ae(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([Object(B.c)(te)]);case 2:case"end":return e.stop()}},ne)}var oe,re=n(11),ce=n(10),ie=n(12),se=n(31),ue=n(27),le=(n(117),n(67)),pe=n.n(le),de=function(e){var t=e.width,n=void 0===t?"auto":t,a=e.height,o=void 0===a?"auto":a;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:pe.a,width:n,height:o}))};n(118),n(119);!function(e){e.HOME="/",e.DISCOVER="/discover"}(oe||(oe={}));var me=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.createElement("section",{className:"lnb"},o.createElement("ul",null,o.createElement("li",null,o.createElement(se.b,{to:oe.HOME,exact:!0,activeClassName:"active"},"Trending")),o.createElement("li",null,o.createElement(se.b,{to:oe.DISCOVER,exact:!0,activeClassName:"active"},"Discover"))))}}]),t}(o.Component),Oe=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"gnb"},r.a.createElement("div",{className:"logo"},r.a.createElement(de,null)),r.a.createElement(me,null))}}]),t}(r.a.Component),ve=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.createElement("div",{className:"wrap"},o.createElement(Oe,null),o.createElement("div",{className:"content"},this.props.children))}}]),t}(o.Component),he=(n(128),n(69)),fe=(n(129),function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.author,n=e.vendorType;return r.a.createElement("footer",{className:"profile"},r.a.createElement("div",{className:"profile-image"},r.a.createElement("div",null,r.a.createElement("img",{src:t.profileImageUrl})),r.a.createElement("div",{className:"vendor-image"},"TIKTOK"===n&&r.a.createElement("img",{src:"/images/logo_tiktok@3x.png"}),"INSTAGRAM"===n&&r.a.createElement("img",{src:"/images/logo_insta@3x.png"}))),r.a.createElement("div",{className:"profile-desc"},r.a.createElement("div",{className:"profile-name"},t.name),r.a.createElement("div",{className:"post-date"},"2020.02.02")))}}]),t}(r.a.Component)),Ee=n(73),be=n(82),ye=(n(143),n(22)),ge=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(o)))).player=void 0,n.videoNode=void 0,n}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.videoUrl,a=t.onVideoEnd,o={autoplay:!0,controls:!0,inactivityTimeout:500,poster:t.posterUrl,preload:"auto",sources:[{src:n,type:"video/mp4"}],controlBar:{fullscreenToggle:!1}};this.player=Object(be.a)(this.videoNode,o,function(){if(e.player){e.player.userActive(!1),e.player.on("ended",function(){a&&a()});var t=0;e.player.on("enterpictureinpicture",function(){ye.a.event({category:"video",action:"pip-open",label:"video"}),t++}),e.player.on("leavepictureinpicture",function(){ye.a.event({category:"video",action:"pip-close",label:"video"})}),e.player.on("loadedmetadata",function(){e.player&&0===t&&e.player.$(".vjs-picture-in-picture-control").click()})}})}},{key:"componentDidUpdate",value:function(e,t,n){this.player&&(this.player.poster(this.props.posterUrl),this.player.src({src:this.props.videoUrl,type:"video/mp4"}),ye.a.event({category:"video",action:"video-change",label:"video"}))}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"".concat(this.props.className," video-koko")},r.a.createElement("div",{"data-vjs-player":!0},r.a.createElement("video",{ref:function(t){return e.videoNode=t},className:"video-js"})))}}]),t}(r.a.Component);function Ne(){var e=Object(he.a)(["\n            &:before {\n                background-image : ",";\n            }\n        "]);return Ne=function(){return e},e}var je=Ee.a.div(Ne(),function(e){return"url(".concat(e.backgroundImage,")")}),Pe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(re.a)(this,Object(ce.a)(t).call(this,e))).handleOnClick=function(){n.props.onClick&&n.props.onClick()},n.onLoadImage=function(){n.setState({onLoad:!0})},n.state={onLoad:!1},n}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.postType,n=e.title,a=e.vendorType,o=e.content,c=e.author,i=e.videoPlay,s=e.onVideoEnd;this.state.onLoad;return r.a.createElement("div",{className:"post ".concat(t||""),onClick:this.handleOnClick},i?r.a.createElement(ge,{className:"post-video",videoUrl:o.videoUrl,posterUrl:o.thumbnailImageUrl,onVideoEnd:s}):r.a.createElement(je,{className:"post-image",backgroundImage:o.thumbnailImageUrl},r.a.createElement("div",{className:"post-image-background"},r.a.createElement("img",{onLoad:this.onLoadImage,src:o.thumbnailImageUrl,alt:n}))),r.a.createElement(fe,{author:c,vendorType:a}))}}]),t}(r.a.Component),Te=n(77),ke=n.n(Te),Ce=n(78),_e=n.n(Ce),Se=(n(144),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(o)))).handleOnClick=function(){n.props.onClick&&n.props.onClick()},n}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=(e.width,e.height,e.className),a=void 0===n?"":n,o=e.hide,c=void 0!==o&&o;return r.a.createElement("div",null,r.a.createElement("button",{className:"arrow arrow-".concat(t," ").concat(c&&"arrow-hide"," ").concat(a),onClick:this.handleOnClick},"prev"===t&&r.a.createElement("img",{src:ke.a,alt:"prev"}),"next"===t&&r.a.createElement("img",{src:_e.a,alt:"next"})))}}]),t}(r.a.Component)),Re=n(125),Ie=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Re.parse(document.location.search).redirect;"/"===document.location.pathname&&e&&this.props.history.push(e),this.props.getPostList()}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.currentPosition,a=this.props.changePostPosition;return o.createElement("div",{className:"home-post"},t&&t.length>0&&o.createElement(Pe,{title:t[n].title,content:t[n].content,author:t[n].author,vendorType:t[n].vendorType}),o.createElement("div",{className:"home-arrow"},o.createElement(Se,{type:"prev",hide:0===n,onClick:function(){return a(n-1)}}),o.createElement(Se,{type:"next",hide:n===t.length,onClick:function(){return a(n+1)}})))}}]),t}(o.Component),we={getPostList:M,changePostPosition:K},De=Object(ue.e)(Object(f.b)(function(e){return{posts:e.postState.posts,currentPosition:e.postState.currentPosition}},we)(Ie)),xe=(n(145),n(79)),Ae=n.n(xe),Ue=n(80),Le=n.n(Ue),Ve=(n(146),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(o)))).handleOnClick=function(){n.props.onClick&&n.props.onClick()},n}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"icon-close",onClick:this.handleOnClick},r.a.createElement("img",{src:Le.a,alt:"close"}))}}]),t}(r.a.Component)),Ge={default:5,1200:4,1000:3,794:2},Be={default:3,1000:2,794:1},Me=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"postClick",value:function(e){ye.a.event({category:"discover",action:"post-click",label:"content",value:e}),this.props.changeDiscoverPostOpenState(!0,e)}},{key:"postClose",value:function(){ye.a.event({category:"discover",action:"post-close",label:"content",value:this.props.currentPosition}),this.props.changeDiscoverPostOpenState(!1)}},{key:"videoEnd",value:function(){var e=this.props,t=e.currentPosition;t!==e.posts.length-1?this.props.changePostPosition(t+1):this.props.changePostPosition(0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.posts,n=e.getPostList;0===t.length&&n()}},{key:"render",value:function(){var e=this,t=this.props,n=t.posts,a=t.isPostOpen,o=t.currentPosition,c=this.props.changePostPosition;return r.a.createElement("div",{className:"discover-post"},r.a.createElement(Ae.a,{breakpointCols:a?Be:Ge,className:"discover-post-grid",columnClassName:"grid-column"},n&&n.length>0&&n.map(function(t,n){return r.a.createElement(Pe,{key:n,postType:"overlay",title:t.title,content:t.content,author:t.author,vendorType:t.vendorType,onClick:function(){return e.postClick(n)}})})),a&&r.a.createElement("div",{className:"post-detail"},r.a.createElement("div",{className:"post-detail-header"},r.a.createElement(Ve,{onClick:function(){return e.postClose()}}),r.a.createElement("div",{className:"post-detail-arrow"},r.a.createElement(Se,{type:"prev",hide:0===o,onClick:function(){return c(o-1)}}),r.a.createElement(Se,{type:"next",hide:o===n.length-1,onClick:function(){return c(o+1)}}))),r.a.createElement(Pe,{title:n[o].title,content:n[o].content,author:n[o].author,vendorType:n[o].vendorType,videoPlay:!0,onVideoEnd:function(){return e.videoEnd()}})))}}]),t}(r.a.Component),He={getPostList:M,changeDiscoverPostOpenState:function(e,t){return{type:a.CHANGE_DISCOVER_POST_OPEN_STATE,isPostOpen:e,position:t}},changePostPosition:K},Ke=Object(f.b)(function(e){return{posts:e.postState.posts,currentPosition:e.postState.currentPosition,isPostOpen:e.postState.isPostOpen}},He)(Me),We=function(e){function t(){return Object(s.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(se.a,null,r.a.createElement(ue.c,null,r.a.createElement(ve,null,r.a.createElement(ue.a,{exact:!0,path:oe.HOME,component:De}),r.a.createElement(ue.a,{exact:!0,path:oe.DISCOVER,component:Ke}))))}}]),t}(o.Component),Fe=function(){var e=Object(y.composeWithDevTools)({name:"react-boilerplate"});d.default.NODE_ENV.isDevelopment();var t=Object(g.createStore)(L,e(g.applyMiddleware.apply(void 0,Object(b.a)(T))));return P.run(ae),{store:t,persistor:Object(N.b)(t,void 0)}}(),qe=Fe.store,Je=Fe.persistor,ze=function(){return r.a.createElement(f.a,{store:qe},r.a.createElement(E.a,{persistor:Je},r.a.createElement(We,null)))};ye.a.initialize("UA-158979298-1"),i.a.render(r.a.createElement(ze,null),document.getElementById("root"))},21:function(e,t,n){"use strict";n.r(t),n.d(t,"PROFILE",function(){return a}),n.d(t,"NODE_ENV",function(){return o});var a,o,r=n(29);!function(e){e.LOCAL="local",e.DEVELOP="develop",e.PERF="perf",e.PRODUCTION="production"}(a||(a={})),function(e){e.DEVELOPMENT="development",e.PRODUCTION="production"}(o||(o={}));console.log("NODE_ENV :","production"),console.log("PROFILE :","production");var c=n(108)("./".concat("production"));t.default=Object(r.a)({},c,{NODE_ENV:{getValue:function(){return"production"},isDevelopment:function(){return"production"===o.DEVELOPMENT},isProduction:function(){return"production"===o.PRODUCTION}},PROFILE:{getValue:function(){return"production"},isDevelopment:function(){return"production"===a.DEVELOP},isProduction:function(){return"production"===a.PRODUCTION}},ASSET_URL:"locals",PUBLIC_URL:""})},56:function(e){e.exports={BASE_URL:"/",BASE_API_URL:"/"}},57:function(e){e.exports={BASE_URL:"/",BASE_API_URL:"/api"}},58:function(e){e.exports={BASE_URL:"/",BASE_API_URL:"/api"}},67:function(e,t,n){e.exports=n.p+"locals/media/logo.7f619d2b.svg"},77:function(e,t,n){e.exports=n.p+"locals/media/ic-arrow-previous.af88a4c5.svg"},78:function(e,t,n){e.exports=n.p+"locals/media/ic-arrow-next.9b9d6a7d.svg"},80:function(e,t,n){e.exports=n.p+"locals/media/ic-x.54710614.svg"},85:function(e,t,n){e.exports=n(147)}},[[85,1,2]]]);
//# sourceMappingURL=main.bfd42cdc.chunk.js.map