(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{342:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{form:{selected:[]},options:[{text:"Selecione",value:null},{text:"A escavação",value:"~/assets/a-escavacao-vertical.jpg"},{text:"Raya",value:"~/assets/raya-vertical.jpg"}],show:!0}},methods:{onSubmit:function(t){t.preventDefault()},onReset:function(t){var e=this;t.preventDefault(),this.form.food=null,this.form.selected=[],this.show=!1,this.$nextTick((function(){e.show=!0}))}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-3"},[n("h1",[t._v("Adicionar filmes - Em breve")]),t._v(" "),t.show?n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-select",{staticClass:"mt-2",attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("div",{staticClass:"container d-flex justify-content-center mt-2"},[n("b-button",{attrs:{type:"submit",variant:"primary mr-3"}},[t._v("Enviar")]),t._v(" "),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Limpar campos")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);