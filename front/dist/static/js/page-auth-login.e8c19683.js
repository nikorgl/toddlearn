(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-auth-login"],{e37c:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"card"},[a("h1",{staticClass:"justify-center"},[e._v("Авторизация")]),a("label",[e._v("логин ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),a("label",[e._v("пароль ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("button",{class:this.username&&this.password?"":"invisible",on:{click:e.submit}},[e._v(" Войти ")])])])},n=[],r=a("1da1"),o=(a("96cf"),a("d722")),u={data:function(){return{username:null,password:null}},methods:{submit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.username,s=e.password,t.next=3,o["a"].login(a,s);case 3:n=t.sent,r=n.data,r&&r.authToken&&(localStorage.setItem("authToken",r.authToken),window.location.href="/");case 6:case"end":return t.stop()}}),t)})))()}}},i=u,l=a("2877"),c=Object(l["a"])(i,s,n,!1,null,"6a517932",null);t["default"]=c.exports}}]);
//# sourceMappingURL=page-auth-login.e8c19683.js.map