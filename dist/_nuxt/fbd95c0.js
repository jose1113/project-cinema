(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(105).concat([function(t,e,o){"use strict";o.r(e);o(278);var r=o(24),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"text-white"},[o("hr",{staticClass:"container"}),t._v(" "),o("b-nav",{staticClass:"container d-flex justify-content-center"},[o("nuxt-link",{staticClass:"text-white mr-5",attrs:{to:"#"}},[t._v("Lançamentos")]),t._v(" "),o("nuxt-link",{staticClass:"text-white",attrs:{to:"#"}},[t._v("Em breve")])],1),t._v(" "),o("hr",{staticClass:"container w-50 bg-white"}),t._v(" "),o("div",{staticClass:"container w-50 d-flex align-items-center justify-content-between"},[o("nuxt-link",{staticClass:"container text-white",attrs:{to:"#"}},[o("b-nav-text",[t._v("Cinema")])],1),t._v(" "),o("div",{staticClass:"container"},[o("b-nav-text",{staticClass:"d-flex justify-content-end"},[t._v("Copyright © 2021")])],1)],1)],1)}),[],!1,null,"b90e1c40",null);e.default=component.exports;installComponents(component,{Footer:o(105).default})},,,function(t,e,o){"use strict";o.r(e);o(18);var r={data:function(){return{form:{name:"",text:""},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0}},methods:{onSubmit:function(t){t.preventDefault()},onReset:function(t){var e=this;t.preventDefault(),this.form.name="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},n=o(24),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",{staticClass:"mt-3"},[o("hr"),t._v(" "),o("h4",[t._v("Deixe seu comentário")]),t._v(" "),t.show?o("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[o("b-form-group",{attrs:{id:"input-group-2",label:"Nome:","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("b-form-group",{attrs:{id:"input-group-3",label:"Digite seu comentário:","label-for":"input-3"}},[o("b-form-textarea",{attrs:{id:"textarea",rows:"3","max-rows":"6"},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Adicionar")]),t._v(" "),o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Limpar campos")])],1):t._e(),t._v(" "),o("b-card",{staticClass:"mt-3"},[o("p",{staticClass:"m-0"},[t._v(t._s(t.form.name))]),t._v(" "),o("p",{staticClass:"m-0"},[t._v(t._s(t.form.text))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";o.r(e);o(276);var r=o(24),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{staticClass:"nav",attrs:{toggleable:"lg",type:"dark"}},[r("b-navbar-brand",{attrs:{href:"/"}},[r("img",{staticClass:"logo",attrs:{src:o(187),alt:"Logotipo"}})]),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-nav-item",{staticClass:"lancamentos",attrs:{href:"#"}},[t._v("Lançamentos")]),t._v(" "),r("b-nav-item",{staticClass:"lancamentos",attrs:{href:"#"}},[t._v("Em breve")]),t._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm"}}),t._v(" "),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Pesquisar")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",[r("nuxt-link",{attrs:{to:t.switchLocalePath("en")}},[t._v("EN")])],1),t._v(" "),r("b-dropdown-item",[r("nuxt-link",{attrs:{to:t.switchLocalePath("es")}},[t._v("ES")])],1),t._v(" "),r("b-dropdown-item",[r("nuxt-link",{attrs:{to:t.switchLocalePath("pt-br")}},[t._v("PT-BR")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"1d3e7b5e",null);e.default=component.exports},,,,function(t,e,o){"use strict";o.r(e);o(136);var r={props:{nome:String,atividades:String,nomeNasc:String,nascimento:String,nacionalidade:String,idade:String,anosCar:Number,filmes:Number,img:String}},n=(o(288),o(24)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",[r("b-row",{staticClass:"d-flex align-items-center"},[r("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[r("h3",{staticClass:"mb-3"},[t._v(t._s(t.nome))]),t._v(" "),r("b-avatar",{attrs:{src:o(280)("./"+t.img),size:"300px"}})],1),t._v(" "),r("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[r("p",[r("strong",[t._v("Atividades:")]),t._v(" "),r("span",[t._v(t._s(t.atividades))])]),t._v(" "),r("p",[r("strong",[t._v("Nome de nascimento: ")]),r("span",[t._v(t._s(t.nomeNasc))])]),t._v(" "),r("p",[r("strong",[t._v("Nascimento: ")]),r("span",[t._v(t._s(t.nascimento))])]),t._v(" "),r("p",[r("strong",[t._v("Nacionalidade: ")]),r("span",[t._v(t._s(t.nacionalidade))])]),t._v(" "),r("p",[r("strong",[t._v("Idade: ")]),r("span",[t._v(t._s(t.idade))])])])],1)],1),t._v(" "),r("b-container",[r("b-row",{staticClass:"mt-3"},[r("b-col",{staticClass:"border text-center",attrs:{cols:"6",sm:"6",md:"6",lg:"6",xl:"6"}},[r("strong",[t._v(t._s(t.anosCar))]),t._v(" "),r("p",[t._v("Anos de carreira")])]),t._v(" "),r("b-col",{staticClass:"border text-center",attrs:{cols:"6",sm:"6",md:"6",lg:"6",xl:"6"}},[r("strong",[t._v(t._s(t.filmes))]),t._v(" "),r("p",[t._v("Filmes e séries lançados")])])],1)],1)],1)}),[],!1,null,"aa9f080c",null);e.default=component.exports},function(t,e,o){"use strict";o.r(e);var r={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},n=o(24),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("nuxt-link",{attrs:{to:"/kong-ilha-da-caveira"}},[r("b-carousel-slide",{attrs:{"img-src":o(191)}})],1),t._v(" "),r("nuxt-link",{attrs:{to:"/tom-e-jerry"}},[r("b-carousel-slide",{attrs:{"img-src":o(196)}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},function(t,e,o){"use strict";o.r(e);o(136);var r={props:{imgBanner:String,title:String,category:String,year:Number,age:Number,duration:String,sinopse:String,video:String},computed:function(){return"terror"===this.category||"Terror"===this.category?"red":"error"}},n=(o(292),o(24)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{staticClass:"w-100",attrs:{src:"~/assets/"+t.imgBanner,alt:"Cartaz A escavação"}}),t._v(" "),o("b-container",{staticClass:"mt-3"},[o("h1",[t._v(t._s(t.title)+" "),"Terror"===t.type||"terror"===t.type?o("b-badge",{staticStyle:{border:"1px solid black","font-size":"15px",color:"red"},attrs:{variant:"light"}},[t._v(t._s(t.category))]):t._e()],1),t._v(" "),o("p",[t._v(t._s(t.year)+" | "),o("b-badge",{staticStyle:{padding:"7px","background-color":"orange"}},[t._v(t._s(t.age))]),t._v(" | "+t._s(t.duration))],1)]),t._v(" "),o("b-container",[o("b-row",[o("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[o("h3",[t._v("Leia a sinopse")]),t._v(" "),o("p",{staticClass:"mt-2 text-justify"},[t._v(t._s(t.sinopse))])]),t._v(" "),o("b-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[o("div",{staticClass:"d-flex justify-content-center"},[t._v("\n          "+t._s(t.video)+"\n        ")])])],1)],1),t._v(" "),o("b-container",[o("Comentario")],1)],1)}),[],!1,null,"26505649",null);e.default=component.exports;installComponents(component,{Comentario:o(108).default})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){t.exports=o.p+"img/logo.8f87b55.png"},function(t,e,o){var content=o(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("0136b2d1",content,!0,{sourceMap:!1})},function(t,e,o){var content=o(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("5ddf9daa",content,!0,{sourceMap:!1})},function(t,e,o){t.exports=o.p+"img/a-escavacao-vertical.160e349.jpg"},function(t,e,o){t.exports=o.p+"img/kong-cartaz.efdcec3.jpg"},function(t,e,o){t.exports=o.p+"img/logo-facebook.49e89fc.png"},function(t,e,o){t.exports=o.p+"img/logo-instagram.865a75e.png"},function(t,e,o){t.exports=o.p+"img/raya-vertical.b9ee55a.jpg"},function(t,e,o){t.exports=o.p+"img/space-jam-vertical.dfd63ac.jpg"},function(t,e,o){t.exports=o.p+"img/tom-e-jerry-cartaz.d78245a.jpg"},,,function(t,e,o){var content=o(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("3b6b0523",content,!0,{sourceMap:!1})},function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("272a4642",content,!0,{sourceMap:!1})},function(t,e,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("72ba897e",content,!0,{sourceMap:!1})},function(t,e,o){var content=o(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("1930a9a0",content,!0,{sourceMap:!1})},function(t,e,o){var content=o(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("e2c406a0",content,!0,{sourceMap:!1})},,,,,,,,,,,,function(t,e,o){"use strict";o.r(e);o(290);var r=o(24),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-3 cards",attrs:{fluid:""}},[r("b-container",{staticClass:"container",staticStyle:{"max-width":"640px"}},[r("h3",[t._v("Em breve")]),t._v(" "),r("b-card-group",{staticClass:"m-auto",attrs:{columns:""}},[r("nuxt-link",{attrs:{to:"/a-escavacao"}},[r("b-card",{attrs:{"img-src":o(190),"img-alt":"A escavação",overlay:""}}),t._v(" "),r("b-badge",{staticClass:"badge",staticStyle:{"background-color":"orange"}},[t._v("14")])],1),t._v(" "),r("nuxt-link",{attrs:{to:"/space-jam"}},[r("b-card",{attrs:{"img-src":o(195),"img-alt":"Bliss: em busca da felicidade",overlay:""}}),t._v(" "),r("b-badge",{staticClass:"badge",attrs:{variant:"danger"}},[t._v("16")])],1),t._v(" "),r("nuxt-link",{attrs:{to:"/raya-e-o-ultimo-dragao"}},[r("b-card",{attrs:{"img-src":o(194),"img-alt":"Raya e o último dragão",overlay:""}}),t._v(" "),r("b-badge",{staticClass:"badge",attrs:{variant:"danger"}},[t._v("16")])],1)],1)],1)],1)}),[],!1,null,"348fd5e5",null);e.default=component.exports},function(t,e,o){"use strict";o.r(e);o(294);var r=o(24),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),o("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),o("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},function(t,e,o){"use strict";o.r(e);o(296);var r=o(24),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"complete"},[r("b-container",[r("b-row",[r("b-col",{attrs:{cols:"6",sm:"6",md:"6",lg:"6",xl:"6"}},[r("b-navbar",{staticClass:"text-white"},[r("p",{staticClass:"m-1"},[t._v("Nossas redes")]),t._v(" "),r("a",{attrs:{href:"#"}},[r("img",{staticClass:"m-2",attrs:{src:o(192),alt:"Logotipo do Facebook"}})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:o(193),alt:"Logotipo do Instagram"}})])])],1),t._v(" "),r("b-col",{attrs:{cols:"6",sm:"6",md:"6",lg:"6",xl:"6"}},[r("b-navbar",{staticClass:"m-2 d-flex justify-content-end"},[r("nuxt-link",{attrs:{to:"#"}},[t._v("\n            Contraste\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"33f497cb",null);e.default=component.exports},,,,,,,,function(t,e,o){"use strict";var r=o(24),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Social-header"),t._v(" "),o("Menu"),t._v(" "),o("Nuxt"),t._v(" "),o("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Menu:o(143).default,Footer:o(105).default})},function(t,e,o){t.exports=o.p+"img/a-escavacao-horizontal.c71e172.jpg"},function(t,e,o){t.exports=o.p+"img/actor-arsher-ali.768a3b5.jpg"},function(t,e,o){t.exports=o.p+"img/actor-camila-rutherford.3a7b341.jpg"},function(t,e,o){t.exports=o.p+"img/actor-carey-mulligan.2028ecf.jpg"},function(t,e,o){t.exports=o.p+"img/actor-chloe-grace-moretz.7a27f21.jpg"},function(t,e,o){t.exports=o.p+"img/actor-don-cheadle.a69a25c.jpg"},function(t,e,o){t.exports=o.p+"img/actor-lebron-james.50eb173.jpg"},function(t,e,o){t.exports=o.p+"img/actor-lily-james.da45676.jpg"},function(t,e,o){t.exports=o.p+"img/actor-madeline-zima.62c590b.jpg"},function(t,e,o){t.exports=o.p+"img/actor-michael-pena.57e3d82.jpg"},function(t,e,o){t.exports=o.p+"img/actor-nesta-cooper.77c13c0.jpg"},function(t,e,o){t.exports=o.p+"img/actor-ralph-fiennes.ec8ea94.jpg"},function(t,e,o){t.exports=o.p+"img/actor-salma-hayek.3485025.jpg"},function(t,e,o){t.exports=o.p+"img/actor-sonequa-martin-green.07dcc25.jpg"},function(t,e,o){t.exports=o.p+"img/kong-horizontal.c3aacfa.jpg"},function(t,e,o){t.exports=o.p+"img/raya-cartaz.eb56967.jpg"},function(t,e,o){t.exports=o.p+"img/space-jam-horizontal.247698d.jpg"},function(t,e,o){t.exports=o.p+"img/tom-e-jerry-horizontal.6e02ef0.jpg"},function(t,e,o){o(245),t.exports=o(246)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";o(188)},function(t,e,o){var r=o(49)(!1);r.push([t.i,".lancamentos[data-v-1d3e7b5e]:hover{background-color:grey;color:#000!important;border-radius:5px 5px 5px 5px}.dropdown[data-v-1d3e7b5e],.lancamentos[data-v-1d3e7b5e]{color:#fff}.dropdown[data-v-1d3e7b5e]{text-decoration:none;list-style:none}.nav[data-v-1d3e7b5e]{background-color:#af0404}[data-v-1d3e7b5e] .nav-link{color:#fff!important}.logo[data-v-1d3e7b5e]{width:48px;height:48px}",""]),t.exports=r},function(t,e,o){"use strict";o(189)},function(t,e,o){var r=o(49)(!1);r.push([t.i,"img[data-v-b90e1c40]{width:100px;height:100px}footer[data-v-b90e1c40]{bottom:0;background-color:#414141}",""]),t.exports=r},function(t,e,o){var map={"./README.md":281,"./a-escavacao-horizontal.jpg":226,"./a-escavacao-vertical.jpg":190,"./actor-arsher-ali.jpg":227,"./actor-camila-rutherford.jpg":228,"./actor-carey-mulligan.jpg":229,"./actor-chloe-grace-moretz.jpg":230,"./actor-don-cheadle.jpg":231,"./actor-lebron-james.jpg":232,"./actor-lily-james.jpg":233,"./actor-madeline-zima.jpg":234,"./actor-michael-pena.jpg":235,"./actor-nesta-cooper.jpg":236,"./actor-owen.jpg":282,"./actor-ralph-fiennes.jpg":237,"./actor-salma-hayek.jpg":238,"./actor-sonequa-martin-green.jpg":239,"./blood.jpg":283,"./bloodshot-horizontal.jpg":284,"./c-bruxas.jpg":285,"./convencao-das-bruxas.webp":286,"./kong-cartaz.jpg":191,"./kong-horizontal.jpg":240,"./logo-facebook.png":192,"./logo-instagram.png":193,"./logo.png":187,"./maldicao-espelho.jpg":287,"./raya-cartaz.jpg":241,"./raya-vertical.jpg":194,"./space-jam-horizontal.jpg":242,"./space-jam-vertical.jpg":195,"./tom-e-jerry-cartaz.jpg":196,"./tom-e-jerry-horizontal.jpg":243};function r(t){var e=n(t);return o(e)}function n(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=280},function(t,e){throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> # ASSETS\n| \n| **This directory is not required, you can delete it if you don't want to use it.**")},function(t,e,o){t.exports=o.p+"img/actor-owen.e10f336.jpg"},function(t,e,o){t.exports=o.p+"img/blood.4253ca1.jpg"},function(t,e,o){t.exports=o.p+"img/bloodshot-horizontal.bada661.jpg"},function(t,e,o){t.exports=o.p+"img/c-bruxas.0d3a5d9.jpg"},function(t,e,o){t.exports=o.p+"img/convencao-das-bruxas.6f8e80a.webp"},function(t,e,o){t.exports=o.p+"img/maldicao-espelho.1e080b8.jpg"},function(t,e,o){"use strict";o(199)},function(t,e,o){var r=o(49)(!1);r.push([t.i,".border[data-v-aa9f080c]{border:1px solid #000;padding:12px}.border strong[data-v-aa9f080c]{font-size:30px}@media(max-width:768px){div[data-v-aa9f080c]{text-align:center}}",""]),t.exports=r},function(t,e,o){"use strict";o(200)},function(t,e,o){var r=o(49)(!1);r.push([t.i,".badge[data-v-348fd5e5]{padding:10px;font-size:15px;margin-bottom:15px}.cards[data-v-348fd5e5]{background-image:linear-gradient(to right bottom,#252525,#3f2942,#6b1f4a,#960037,#af0404)}h3[data-v-348fd5e5]{padding:15px;color:#fff}",""]),t.exports=r},function(t,e,o){"use strict";o(201)},function(t,e,o){var r=o(49)(!1);r.push([t.i,"h3[data-v-26505649]{color:#a52323}.actor[data-v-26505649]{text-decoration:none;color:#000;line-height:5px}@media(max-width:576px){.elenco[data-v-26505649]{text-align:center;margin-top:7px}}@media(max-width:768px){.elenco[data-v-26505649]{text-align:center;margin-top:7px}}",""]),t.exports=r},function(t,e,o){"use strict";o(202)},function(t,e,o){var r=o(49)(!1);r.push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=r},function(t,e,o){"use strict";o(203)},function(t,e,o){var r=o(49)(!1);r.push([t.i,".complete[data-v-33f497cb]{background-color:#949494}img[data-v-33f497cb]{width:20px;height:20px}",""]),t.exports=r}]),[[244,24,1,25]]]);