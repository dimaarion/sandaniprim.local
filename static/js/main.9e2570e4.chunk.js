(window.webpackJsonpbhureact=window.webpackJsonpbhureact||[]).push([[0],{31:function(e,t,a){},34:function(e,t,a){e.exports=a(73)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),r=a.n(c),i=a(1),o=a(14);var s=Object(o.a)({lang:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ru",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LANG":return t.lang;default:return e}},menuId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENUID":return t.payload;default:return e}},getMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETMENU":return t.preload;default:return e}},getMenuArt:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETMENUART":return t.preload;default:return e}},getArticles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETARTICLES":return t.preload;default:return e}},getIcons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETICONS":return t.preload;default:return e}},getHomeJson:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HOMEJSON":return t.preload;default:return e}}}),m=a(2),u=a(9),f=a(15),d=a.n(f),h="http://adminpanel";function E(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};d.a.get(h+"/pages/"+t,a).then((function(t){e(t.data)}))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""!==e)return"md"===e.split("/").filter((function(e){return"ru"===e||"md"===e})).map((function(e){return e}))[0]?"md":"ru"}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.split("/").filter((function(e){return e===t})).map((function(e){return e}))[0]}function v(e){var t=[];if(e.menu)t=e.menu.filter((function(t){return"ru"!==t.alias&&"md"!==t.alias&&t.alias===p(e.location,t.alias)})).map((function(e){return e.title}));else if(e.art)t=e.art.filter((function(t){return t.art_alias===p(e.location,t.art_alias)})).map((function(e){return e.art_title}));else if(e.hom){var a=e.location.replace(/[/]/g,"");a=""===a?"/":e.location.replace(/[/]/g,""),t=e.hom.filter((function(e){return e.alias===a})).map((function(e){return e.title}))}else t=["/"];void 0!==t[0]&&(document.title=t[0])}function b(e){var t={scroll:{marginTop:"220px"},noScroll:{marginTop:"0px"},scrollSize:{margin:"auto",position:"relative",top:"50px"}};return e.sY<e.scrollN?e.sX<800?t.scrollSize:t.noScroll:e.sX<800?t.scrollSize:t.scroll}h="localhost"===window.location.hostname?"https://sandaniprim.md/":window.location.protocol+"//"+window.location.hostname;a(59);function N(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"date"}," Copyright \xa9 sandani PRIM  2020 - ",(new Date).getFullYear()," \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."))}a(60);function y(e){var t="170",a="";return!0===e.scroll?(t="50",a="0, 0 ,150,150"):(t="170",a="0,0,150,150"),l.a.createElement("svg",{width:"130",height:t,viewBox:a},l.a.createElement("text",{x:"0",y:"42",className:"logoS",fill:"DarkGreen"},"SANDANI"),l.a.createElement("rect",{x:"0",y:"50",width:"90",height:"100"}),l.a.createElement("text",{x:"150",y:"55",transform:"rotate(90,126,25)",className:"logoP"},"PRIM"),l.a.createElement("rect",{x:"4",y:"55",width:"5",fill:"#fff",height:"90"}),l.a.createElement("rect",{x:"4",y:"55",width:"40",fill:"#fff",height:"5"}),l.a.createElement("rect",{x:"40",y:"55",width:"5",fill:"#fff",height:"90"}),l.a.createElement("rect",{x:"4",y:"140",width:"40",fill:"#fff",height:"5"}),l.a.createElement("rect",{x:"48",y:"55",width:"5",fill:"#fff",height:"90"}),l.a.createElement("rect",{x:"48",y:"55",width:"38",fill:"#fff",height:"5"}),l.a.createElement("rect",{x:"81",y:"55",width:"5",fill:"#fff",height:"90"}),l.a.createElement("rect",{x:"48",y:"140",width:"38",fill:"#fff",height:"5"}),l.a.createElement("rect",{x:"48",y:"75",width:"38",fill:"#fff",height:"5"}))}function w(e){return l.a.createElement("div",{className:"col-sm logo"},l.a.createElement(y,null))}a(61);var j=a(5);function O(e){var t=Object(n.useState)("ru"),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(i.c)((function(e){return e.lang}));return Object(n.useEffect)((function(){r(g(document.baseURI))}),[document.baseURI,g,o]),l.a.createElement("div",{className:!0===e.scroll?"messagescrollbox":"col-sm justify-content-md-center  row"},l.a.createElement("div",{className:!0===e.scroll?"messagescroll":"col-sm-8 pt-3 message"},l.a.createElement(j.b,{to:"/connect/message/"+c},"ru"===c?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u0437\u0430\u043c\u0435\u0440":"Trimite o cerere de m\u0103surare")))}a(65);function x(e){return l.a.createElement("div",{className:"col-sm tel justify-content-md-center  pl-5"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null!==e?e.split(","):[""]}(e.tel).map((function(e){return l.a.createElement("div",{key:e,className:"col-sm text-left telList pl-3"},e)})))}a(31);function k(e){var t=Object(i.b)(),a=Object(i.b)();return l.a.createElement("div",{className:"col-sm lang "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2 fl p-0 ".concat("ru"===g(document.baseURI)?"langActive":"")},l.a.createElement(j.b,{onClick:function(){t({type:"LANG",lang:"ru"}),a({type:"MENUID",payload:1})},to:"/"},"ru")),l.a.createElement("div",{className:"col-2 fl p-0 ".concat("md"===g(document.baseURI)?"langActive":"")},l.a.createElement(j.b,{onClick:function(){t({type:"LANG",lang:"md"}),a({type:"MENUID",payload:2})},to:"/principal/md"},"md"))))}function S(e){return l.a.createElement("header",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement(w,null),l.a.createElement(O,null),l.a.createElement(x,{tel:e.tel}),l.a.createElement(k,null),l.a.createElement("div",{className:"col-1"}))}a(66),a(67);function z(e){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-telephone-fill"},l.a.createElement("path",{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}))}function _(e){return l.a.createElement("header",{className:"headscrollBox"},l.a.createElement("div",{className:"headscroll"},l.a.createElement("div",{className:"logoscroll"},l.a.createElement(y,{scroll:e.scroll})),l.a.createElement(O,{scroll:e.scroll}),l.a.createElement("div",{className:"teliconscroll"},l.a.createElement(z,null)),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";return null!==e?e.split(t):[""]}(e.tel,",").map((function(e,t){return l.a.createElement("div",{key:t+"tel",className:"telscroll"},e)})),l.a.createElement("div",{className:"langscroll"},l.a.createElement(k,null))))}function M(e){var t=Object(n.useState)({r:"noActiveRect",b:"noActive"}),a=Object(m.a)(t,2),c=a[0],r=a[1];var i="";return i=e.scroll?" scrollactiveMobButtton":"",l.a.createElement("div",{className:"menumobileButton "+c.b+i,onClick:function(e){return function(e,t){var a=document.querySelector(".menumobile ul");"none"===a.style.display?(a.setAttribute("style","display:block;"),t({r:"activeRect",b:"active"})):(a.setAttribute("style","display:none;"),t({r:"noActiveRect",b:"noActive"}))}(0,r)}},l.a.createElement("div",{className:"rect "+c.r}),l.a.createElement("div",{className:"rect "+c.r}),l.a.createElement("div",{className:"rect "+c.r}))}function A(e){Object(n.useEffect)((function(){!function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).getElementsByClassName("navChild");null!==e&&(e=Array.from(e)).map((function(e,t){""===e.innerHTML&&e.remove()}))}(document),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).getElementsByClassName("list");null!==e&&(e=Array.from(e)).map((function(e){Object.values(e.children).filter((function(e){return"UL"===e.tagName})).map((function(e){e.parentElement.className="list iconChild"}))}))}(document)}),[e]),Object(n.useEffect)((function(){}),[]);var t=Object(i.c)((function(e){return e.getMenu}));function a(e){return 0!==Object.keys(e).length&&(delete e[0],!0)}function c(e,t,a,n){return e===t?a:e==="/"+t?a:e==="/"+t+"/ru"||e==="/"+t+"/md"?a:n}return l.a.createElement("nav",{className:"container-menu"},!0===e.resize?l.a.createElement(M,{scroll:e.scroll}):"",!0===e.scroll?l.a.createElement(_,{tel:e.tel,scroll:e.scroll}):"",l.a.createElement("div",{className:!0===e.resize?!0===e.scroll?"menumobile scrollactiveMob":"menumobile ":!0===e.scroll?"menu scrollactive":"menu"},l.a.createElement("div",{className:!0===e.resize?"container-fluid":"container"},l.a.createElement("ul",{style:!0===e.resize?{display:"none"}:{display:"flex"},className:!0===e.resize?"nav flex-column ":"nav justify-content-center"},function(e){for(var t=[],a=0;a<e.menu.length;a++){e.menu[a].child=[{}];for(var n=0;n<e.menu.length;n++)e.menu[a].menu_id===e.menu[n].parent_id&&(e.menu[a].child[n]=e.menu[n]);"0"===e.menu[a].parent_id&&(t[a]=e.menu[a])}return t}({menu:t}).filter((function(e){return e.lang===g(document.baseURI)})).map((function(t,n){return l.a.createElement("li",{className:c(e.url,t.alias,"nav-link text-center menu_active","nav-link text-center"),key:t.names+n},l.a.createElement(j.b,{to:"/"===t.alias||"md"===t.alias?"/"===t.alias?t.alias:"/"+t.alias:"/"+t.alias+"/".concat(t.lang)},t.names),a(t.child)?function t(n){if(a(n.child))return l.a.createElement("ul",{className:"navChild"},a(n.child)?n.child.map((function(a,n){return l.a.createElement("li",{className:c(e.url,a.alias,"list menu_li_active","list"),key:a.alias+n},l.a.createElement(j.b,{to:"/".concat(a.alias,"/").concat(a.lang)},a.names),t(a))})):"")}(t):"")}))))))}a(68);function C(e){function t(){return{__html:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}return e.countArt>1?l.a.createElement("article",{className:"article"},l.a.createElement("h2",{className:"text-center"},e.name),l.a.createElement("div",{className:"content",dangerouslySetInnerHTML:t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return e.split(">").filter((function(e){return""!==e})).map((function(e){return e+">"})).filter((function(e,a){return a<t})).join("")}(e.content,100))}),l.a.createElement("div",{className:"buttons text-right"},l.a.createElement(j.b,{className:"btn btn-success",to:"/".concat(e.alias,"/").concat(e.lang)},"ru"===e.lang?"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 ...":"Mai detaliat ..."))):l.a.createElement("article",{className:"article"},l.a.createElement("h1",{className:"text-center"},e.name),l.a.createElement("div",{className:"content",dangerouslySetInnerHTML:t(e.content)}))}function I(e){var t=Object(n.useState)([{}]),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(i.c)((function(e){return e.getMenu}));return Object(n.useEffect)((function(){var t=o.filter((function(t){return"ru"!==t.alias&&"md"!==t.alias&&t.alias===p(e.location.pathname,t.alias)})).map((function(e){return e.menu_id})),a=1;0!==t.length&&(a=t),E(r,"artMenu.php",{params:{id:1,menu_id:a[0],lang:e.match.params.lang}})}),[o,e.location.pathname,e.match.params]),Object(n.useEffect)((function(){v({menu:o,location:e.location.pathname})}),[o,e.location.pathname]),l.a.createElement("div",null,e.sY<e.scrollN&&e.sX>800?l.a.createElement(S,{tel:e.tel}):l.a.createElement(_,{tel:e.tel,scroll:!0}),l.a.createElement(A,{menu:o,lang:e.lang,url:e.match.url,scroll:e.scroll,sX:e.sX,winSize:e.winSize,resize:e.resize,tel:e.tel}),l.a.createElement("div",{style:b(e),className:"row mt-3"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-10 "},c.map((function(e,t){return l.a.createElement(C,{key:e.art_names+t,name:e.art_names,lang:e.art_lang,alias:e.art_alias,subContent:e.art_subcontent,content:e.art_content,countArt:c.length})}))),l.a.createElement("div",{className:"col-1"})),l.a.createElement(N,null))}function T(e){var t=Object(i.c)((function(e){return e.getMenu})),a=Object(i.c)((function(e){return e.getArticles}));return Object(n.useEffect)((function(){v({art:a,location:e.location.pathname})}),[a,e.location.pathname]),l.a.createElement("div",null,e.sY<e.scrollN&&e.sX>800?l.a.createElement(S,{tel:e.tel}):l.a.createElement(_,{tel:e.tel,scroll:!0}),l.a.createElement(A,{menu:t,url:e.match.url,lang:e.lang,scroll:e.scroll,sX:e.sX,winSize:e.winSize,resize:e.resize,tel:e.tel}),l.a.createElement("div",{style:b(e),className:"row mt-3"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-10 "},a.filter((function(t){return t.art_alias===p(e.location.pathname,t.art_alias)&&t.art_lang===p(e.location.pathname,t.art_lang)})).map((function(e){return l.a.createElement(C,{key:e.art_alias+2,countArt:"1",art:e,lang:e.art_lang,name:e.art_names,alias:e.art_alias,subContent:e.art_subcontent,content:e.art_content})}))),l.a.createElement("div",{className:"col-1"})),l.a.createElement(N,null))}function X(e){return l.a.createElement("svg",{width:"78",height:"78"},l.a.createElement("circle",{cx:48,cy:45,r:15,stroke:"#fff"}),l.a.createElement("rect",{x:10,y:45,width:55,height:13,rx:2}),l.a.createElement("rect",{x:15,y:35,width:15,height:10,rx:2}),l.a.createElement("rect",{x:18,y:38,width:9,height:5,fill:"#fff"}),l.a.createElement("rect",{x:31,y:38,width:34,height:7,rx:2}),l.a.createElement("rect",{x:31,y:38,width:34,height:1,fill:"#fff"}),l.a.createElement("circle",{cx:20,cy:60,r:5,stroke:"#fff"}),l.a.createElement("circle",{cx:54,cy:60,r:5,stroke:"#fff"}))}function U(e){return l.a.createElement("svg",{width:"78",height:"78"},l.a.createElement("rect",{x:"25",y:"3",width:"42",height:"50",stroke:"#000",strokeWidth:"2",fill:"#fff"}),l.a.createElement("circle",{cx:44,cy:29,r:8}),l.a.createElement("rect",{x:36,y:28,width:16,fill:"#fff",stroke:"none",height:.5}),l.a.createElement("rect",{x:35,y:27.5,width:18,fill:"#000",stroke:"none",height:.5}),l.a.createElement("rect",{x:38.5,y:37.5,width:14,height:20,fill:"#000",stroke:"none"}),l.a.createElement("rect",{x:35.5,y:52,width:7,height:13,rx:4,fill:"#000",stroke:"none",transform:"rotate(-45,28,32)"}),l.a.createElement("rect",{x:54.8,y:-56,width:7,height:16,rx:4,fill:"#000",stroke:"none",transform:"rotate(75,0,0)"}),l.a.createElement("rect",{x:-24,y:35,width:7,height:16,rx:4,fill:"#000",stroke:"none",transform:"rotate(-62,0,0)"}),l.a.createElement("rect",{x:29,y:37,width:13,height:7,rx:4,fill:"#000",stroke:"none"}),l.a.createElement("rect",{x:49,y:44,width:7,height:19,rx:4,fill:"#000",stroke:"none",transform:"rotate(12)"}),l.a.createElement("rect",{x:34.5,y:61.5,width:7,height:19,rx:4,fill:"#000",stroke:"none",transform:"rotate(-12)"}))}function L(e){return l.a.createElement("svg",{width:"78",height:"78"},l.a.createElement("rect",{x:"0",y:"0",width:"70",height:"20",stroke:"#000",fill:"#ffffff",transform:"rotate(45,0,30)"}),function(e){for(var t=[],a=0;a<e;a++)t[a]=a;return t}(7).map((function(e){return l.a.createElement("g",{key:e+"g"},l.a.createElement("rect",{x:10*e,y:"0",width:"1",height:"5",stroke:"#000",fill:"#ffffff",transform:"rotate(45,0,30)"}),l.a.createElement("rect",{x:10*e+5,y:"0",width:"1",height:"8",stroke:"#000",fill:"#ffffff",transform:"rotate(45,0,30)"}))})),l.a.createElement("rect",{x:-32,y:50,width:"70",height:"12",stroke:"#000",fill:"#ffffff",transform:"rotate(-45,0,0)"}),l.a.createElement("polygon",{points:"".concat(5,",").concat(73," ").concat(12,",").concat(57," ").concat(21,",").concat(68)}),l.a.createElement("rect",{x:35,y:50,width:"5",height:"12",stroke:"#000",fill:"#000",transform:"rotate(-45,0,0)"}))}function G(e){return l.a.createElement("svg",{width:"78",height:"78"},l.a.createElement("rect",{x:"0",y:"0",width:"70",height:"15",stroke:"#000",fill:"#000",transform:"rotate(45,0,30)"}),l.a.createElement("rect",{x:"0",y:"-7",width:"20",height:"30",stroke:"#000",fill:"#ffffff",transform:"rotate(45,0,30)"}),l.a.createElement("rect",{x:-32,y:55,width:"70",height:"3",stroke:"#000",fill:"#ffffff",transform:"rotate(-45,0,0)"}),l.a.createElement("rect",{x:15,y:50,width:"30",height:"12",rx:"4",stroke:"#000",fill:"#000",transform:"rotate(-45,0,0)"}),l.a.createElement("rect",{x:-32,y:54,width:"10",height:"5",stroke:"none",fill:"#000",transform:"rotate(-45,0,0)"}))}function R(e){return l.a.createElement("svg",{width:"100%",height:"30"},l.a.createElement("rect",{x:0,y:14.5,width:"100%",fill:"#066706",height:"1"}),l.a.createElement("circle",{cx:"50%",cy:15,r:7,strokeWidth:"4",fill:"#066706",stroke:"#fff"}))}a(69);function B(e){var t=Object(n.useState)([{}]),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(i.c)((function(e){return e.getIcons})),s=[{svg:l.a.createElement(L,null),name:"measure"},{svg:l.a.createElement(G,null),name:"montaj"},{svg:l.a.createElement(U,null),name:"install"},{svg:l.a.createElement(X,null),name:"cleaner"}];return Object(n.useEffect)((function(){var e=o.map((function(e,t){return e.content={ru:e.ru,md:e.md,svg:s[t].svg,name:s[t].name}}));r(e)}),[o]),l.a.createElement("div",{className:"row col-sm mt-3 icons"},c.map((function(e,t){return l.a.createElement("div",{key:e.name+"d",className:"col-sm"},e.svg,l.a.createElement(R,null),l.a.createElement("div",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return l.a.createElement("ul",null,e.split(".").map((function(e,t){return l.a.createElement("li",{key:t+"list"},e)})))}((a=g,n=document.baseURI,c=e.ru,r=e.md,"ru"===a(n)?c:r))));var a,n,c,r})))}function Y(e){var t=16;return e.size&&(t=e.size),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0,0,"+(t-8)+","+(t-8),fill:"green",className:"bi bi-check"},l.a.createElement("path",{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"}))}a(70);function H(e){return l.a.createElement("article",{className:"homdisplay"},l.a.createElement("img",{src:e.content.image,width:"100%",alt:e.content.winInMd}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-10 "},l.a.createElement("h2",{className:"mt-3"},e.content.winInMd),l.a.createElement("div",{className:"text-justify container"},e.content.winInMdContent),l.a.createElement(R,null),l.a.createElement("h2",{className:"mt-3"},e.content.name),l.a.createElement(B,null),l.a.createElement(R,null),l.a.createElement("h2",{className:"mt-3"},e.content.greenEvolution),l.a.createElement("div",{className:"text-justify"},e.content.greenEvolutionContent),l.a.createElement("div",{className:"row mt-3"},e.content.greenEvolutionContentBox.map((function(e){return function(e){return l.a.createElement("div",{key:e.name+"profile",className:"col-sm-6 mt-4"},l.a.createElement(R,null),l.a.createElement("h4",null,e.name),l.a.createElement("div",{className:"row text-left"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("img",{width:"100%",src:e.image,alt:e.name})),l.a.createElement("div",{className:"col-sm"},e.descript,l.a.createElement("div",{className:"col-sm mt-3"},l.a.createElement("h4",null,e.headSpecific),e.specific.map((function(e,t){return l.a.createElement("div",{key:t+"check"},l.a.createElement("div",{className:"hom_check"},l.a.createElement(Y,{size:20})),e.content)}))))))}(e)}))),l.a.createElement(R,null))),l.a.createElement("div",{className:"col-1"}))}function P(e){var t=Object(n.useState)([{}]),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(i.c)((function(e){return e.getMenu})),s=Object(i.c)((function(e){return e.getHomeJson})),u=Object(n.useState)({}),f=Object(m.a)(u,2),d=f[0],h=f[1];return Object(n.useEffect)((function(){var t=1,a="ru";"/"===e.location.pathname?(t=1,a="ru"):"/md"===e.location.pathname&&(t=2,a="md"),0!==t.length&&(t=t),E(r,"artMenu.php",{params:{id:1,menu_id:t,lang:a}})}),[e.location.pathname]),Object(n.useEffect)((function(){var t=s.filter((function(t){return t.lang===g(e.location.pathname)})).map((function(e){return e}));h(t)}),[s,e.location.pathname]),Object(n.useEffect)((function(){v({hom:o,location:e.location.pathname})}),[o,e.location.pathname]),l.a.createElement("div",null,e.sY<e.scrollN&&e.sX>800?l.a.createElement(S,{tel:e.tel}):l.a.createElement(_,{tel:e.tel,scroll:!0}),l.a.createElement(A,{menu:o,url:e.match.url,lang:e.lang,scroll:e.scroll,sX:e.sX,winSize:e.winSize,resize:e.resize,tel:e.tel}),l.a.createElement("div",{style:b(e)},Object.values(d).map((function(e){return l.a.createElement(H,{key:e.id+"hom",content:e})}))),l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-1"}),l.a.createElement("div",{className:"col-10 "},c.map((function(e,t){return l.a.createElement(C,{key:e.art_names+t,name:e.art_names,lang:e.art_lang,alias:e.art_alias,subContent:e.art_subcontent,content:e.art_content,countArt:c.length})}))),l.a.createElement("div",{className:"col-1"})),l.a.createElement(N,null))}var J=a(10);function Z(e){var t=Object(n.useState)({str:"",count:0,valid:!1}),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)({str:"",count:0,valid:!1}),s=Object(m.a)(o,2),u=s[0],f=s[1],d=Object(n.useState)({str:"",count:0,valid:!1}),h=Object(m.a)(d,2),g=h[0],p=h[1],v=Object(n.useState)({str:"",count:0,valid:!1}),y=Object(m.a)(v,2),w=y[0],j=y[1],O=Object(n.useState)({str:"",count:0,valid:!1}),x=Object(m.a)(O,2),k=x[0],M=x[1],C=Object(n.useState)({x:0,y:0}),I=Object(m.a)(C,2),T=I[0],X=I[1],U=Object(n.useState)(""),L=Object(m.a)(U,2),G=L[0],R=L[1],B=Object(n.useState)(0),H=Object(m.a)(B,2),P=H[0],Z=H[1],D=Object(i.c)((function(e){return e.getHomeJson})),F=Object(i.c)((function(e){return e.getMenu}));function W(e,t,a){var n="";n=(n=e.target.value).replace(t,""),e.target.value=n.replace(t,"");var l=[];switch(n.split("").map((function(e,t){l[t]=1===t?" ("+e:3===t?e+") ":6===t?e+" ":7===t?e+"":9===t?e+" ":11===t?e+"":e})),e.target.id){case"usertel":return{str:l.join(""),count:n.length,valiad:a};default:return{str:n,count:n.length}}}function K(e){switch(e){case"name":return/[0-9 <> "" '' ]/g;case"tel":return/[\u0430-\u044f_\u0410-\u042f_a-z_A-Z "" '' <> ]/g;default:return/[<> "" '' ]/g}}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"",count:0};switch(e.type){case"name":return e.count>1;case"tel":return e.count>9;case"usermail":var t=document.querySelector("#"+e.type);return null!==t&&(t=t.value.split("").filter((function(e){return"@"===e}))),e.count>9&&"@"===t[0];default:return e.count>1}}return Object(n.useEffect)((function(){E(R,"message.php",{params:{username:c.str,usertel:u.str,usermail:g.str,theme:w.str,message:k.str,namehidden:c.count,telhidden:u.count,mailhidden:g.count,themehidden:w.count,messagehidden:k.count,lang:e.match.params.lang,mx:T.x,my:T.y}})}),[P]),l.a.createElement("div",null,e.sY<e.scrollN&&e.sX>800?l.a.createElement(S,{tel:e.tel}):l.a.createElement(_,{tel:e.tel,scroll:!0}),l.a.createElement(A,{menu:F,lang:e.lang,scroll:e.scroll,sX:e.sX,winSize:e.winSize,resize:e.resize,tel:e.tel}),D.filter((function(t){return t.lang===e.match.params.lang})).map((function(t){return t.message.map((function(t){return function(e){var t,a;return l.a.createElement("div",{style:b(e.params),key:e.lang+"message",className:"message-page"},l.a.createElement("h2",{className:0===G[1]?"noMessage":"yesMessage"},G[0]),l.a.createElement("div",{className:"container ",id:"messagePages",onMouseMove:function(e){return X({x:e.clientX,y:e.clientY})}},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,e.descript),l.a.createElement("p",null,e.warning),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"}),l.a.createElement("div",{className:"col-sm text-left"},l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"col-md mb-3"},l.a.createElement("label",{htmlFor:"username"},e.familie,l.a.createElement("span",{className:"lab",id:"namespan "}," ",c.str," ")),l.a.createElement("input",(t={onKeyUp:function(e){return r(W(e,K("name"),q({type:"name",count:c.count})))},className:"username",type:"text"},Object(J.a)(t,"className","form-control"),Object(J.a)(t,"id","username"),Object(J.a)(t,"placeholder",e.familie),t)),q({type:"name",count:c.count})?l.a.createElement("div",{className:"messageChecked "},l.a.createElement(Y,{size:20})):""),l.a.createElement("div",{className:"col-md mb-3 "},l.a.createElement("label",{htmlFor:"usertel"},e.tel," ",l.a.createElement("span",{className:"lab",id:"telspan"},u.str)),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"inputGroupPrepend"},l.a.createElement(z,null))),l.a.createElement("input",{onKeyUp:function(e){return f(W(e,K("tel"),q({type:"tel",count:u.count})))},maxLength:"12",type:"text",className:"form-control",id:"usertel",placeholder:"0 (373) 777 7-77-77","aria-describedby":"inputGroupPrepend"})),q({type:"tel",count:u.count})?l.a.createElement("div",{className:"messageChecked "},l.a.createElement(Y,{size:20})):""),l.a.createElement("div",{className:"col-md mb-3"},l.a.createElement("label",{htmlFor:"usermail"},e.maill," ",l.a.createElement("span",{className:"lab",id:"mailspan"},g.str)),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"inputGroupPrepend"},"@")),l.a.createElement("input",(a={className:"usermail",onKeyUp:function(e){return p(W(e,K("usermail"),q({type:"usermail",count:g.count})))},type:"text"},Object(J.a)(a,"className","form-control"),Object(J.a)(a,"id","usermail"),Object(J.a)(a,"placeholder",e.maill),Object(J.a)(a,"aria-describedby","inputGroupPrepend"),a))),q({type:"usermail",count:g.count})?l.a.createElement("div",{className:"messageChecked "},l.a.createElement(Y,{size:20})):""),l.a.createElement("div",{className:"col-md mb-3"},l.a.createElement("label",{htmlFor:"theme"},e.theme),l.a.createElement("input",{onKeyUp:function(e){return j(W(e,K,!0))},type:"text",className:"form-control",id:"theme",placeholder:e.themeHold}),q({type:"",count:w.count})?l.a.createElement("div",{className:"messageChecked "},l.a.createElement(Y,{size:20})):"",l.a.createElement("div",{className:"invalid-feedback"},"\u0422\u0435\u043c\u0430.")),l.a.createElement("div",{className:"col-sm mb-3"},l.a.createElement("label",{htmlFor:"message"},e.txt),l.a.createElement("textarea",{onKeyUp:function(e){return M(W(e,K,!0))},id:"message",className:"form-control",rows:"3",placeholder:e.txt}),q({type:"",count:k.count})?l.a.createElement("div",{className:"messageChecked "},l.a.createElement(Y,{size:20})):"")),l.a.createElement("button",{onClick:function(){return Z(P+1)},id:"submitd",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:"btn btn-primary ml-3",type:"submit"},e.button)),l.a.createElement("div",{className:"col-sm-3"}))))}({name:t.name,descript:t.descript,warning:t.warning,familie:t.familie,tel:t.tel,maill:t.maill,theme:t.theme,txt:t.txt,themeHold:t.themeHold,button:t.button,params:e})}))})),l.a.createElement(N,null))}a(71);function D(e){var t=16;return t=e.size?e.size:16,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0, 0 ,"+t/2+","+t/2,fill:"currentColor",className:"bi bi-x-circle"},l.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}))}function F(e){var t={head:{color:"aquamarine"},close:{color:"#fff"}};return l.a.createElement("div",{className:"img_zoom"},l.a.createElement("div",{className:"row col-sm text-center"},l.a.createElement("div",{className:"col-sm"}),l.a.createElement("div",{className:"col-sm-1 mt-2 close",style:t.close,onClick:function(){return e.setImgZoom({src:"",alt:""})}},l.a.createElement(D,{size:50}))),l.a.createElement("h2",{className:"container",style:t.head},e.imgZoom.alt),l.a.createElement("img",{src:e.imgZoom.src,alt:e.imgZoom.alt}))}a(72);var W=function(){var e,t=Object(n.useState)([{}]),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)([{}]),s=Object(m.a)(o,2),f=s[0],d=s[1],h=Object(n.useState)([{}]),g=Object(m.a)(h,2),p=g[0],v=(g[1],Object(n.useState)([{}])),b=Object(m.a)(v,2),N=b[0],y=b[1],w=Object(n.useState)(""),j=Object(m.a)(w,2),O=j[0],x=j[1],k=Object(n.useState)([{}]),S=Object(m.a)(k,2),z=S[0],_=S[1],M=Object(n.useState)(0),A=Object(m.a)(M,2),C=A[0],X=A[1],U=Object(n.useState)(0),L=Object(m.a)(U,2),G=L[0],R=L[1],B=Object(n.useState)({src:"",alt:""}),Y=Object(m.a)(B,2),H=Y[0],J=Y[1],D=Object(i.c)((function(e){return e.getMenu})),W=Object(i.c)((function(e){return e.lang})),K=Object(i.c)((function(e){return e.getArticles})),q=Object(i.b)(),$=Object(i.b)(),Q=Object(i.b)(),V=Object(i.b)(),ee=Object(i.b)();Object(n.useEffect)((function(){var e;E(r,"menu.php"),E(x,"tel.php"),E(d,"articles.php"),E(y,"icons.php"),E(_,"home.php"),e=X,window.onscroll=function(t){e(window.scrollY)},function(e){e(window.innerWidth),window.onresize=function(t){e(window.innerWidth)}}(R)}),[]),e=J,Array.from(document.getElementsByTagName("img")).map((function(t){return t.onclick=function(t){return e({src:t.target.src,alt:t.target.alt})}})),Array.from(document.getElementsByTagName("img")).map((function(e){return e.onmouseover=function(e){e.target.style.cursor="zoom-in"}})),Object(n.useEffect)((function(){q({type:"GETMENU",preload:c})}),[c,q]),Object(n.useEffect)((function(){$({type:"GETMENUART",preload:p})}),[p,$]),Object(n.useEffect)((function(){Q({type:"GETARTICLES",preload:f})}),[f,Q]),Object(n.useEffect)((function(){V({type:"GETICONS",preload:N})}),[N,V]),Object(n.useEffect)((function(){ee({type:"HOMEJSON",preload:z})}),[z,ee]);var te=!0,ae=!0;return ae=!(C<125),te=G<1600,l.a.createElement("div",{className:"container-fluid text-center p-0"},""!==H.src?l.a.createElement(F,{imgZoom:H,setImgZoom:J}):"",l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(P,Object.assign({},e,{sY:C,scrollN:125,menu:D,lang:W,scroll:ae,sX:G,winSize:1600,resize:te,tel:O}))}}),l.a.createElement(u.a,{exact:!0,path:"/md",render:function(e){return l.a.createElement(P,Object.assign({},e,{sY:C,scrollN:125,menu:D,lang:W,scroll:ae,sX:G,winSize:1600,resize:te,tel:O}))}}),D.map((function(e){return l.a.createElement(u.a,{key:e.alias+5,exact:!0,path:"/"+e.alias+"/:lang",render:function(e){return l.a.createElement(I,Object.assign({},e,{sY:C,scrollN:125,menu:D,lang:W,scroll:ae,sX:G,winSize:1600,resize:te,tel:O}))}})})),K.map((function(e){return l.a.createElement(u.a,{key:e.art_alias+8,exact:!0,path:"/"+e.art_alias+"/"+e.art_lang,render:function(e){return l.a.createElement(T,Object.assign({},e,{sY:C,scrollN:125,menu:D,lang:W,scroll:ae,sX:G,winSize:1600,resize:te,tel:O}))}})})),l.a.createElement(u.a,{exact:!0,path:"/connect/message/:lang",render:function(e){return l.a.createElement(Z,Object.assign({},e,{sY:C,scrollN:125,menu:D,lang:W,scroll:ae,sX:G,winSize:1600,resize:te,tel:O}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=Object(o.b)(s);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{store:K},l.a.createElement(j.a,null,l.a.createElement(W,null)))),document.getElementById("container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9e2570e4.chunk.js.map