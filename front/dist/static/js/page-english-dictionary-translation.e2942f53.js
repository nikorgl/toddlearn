(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-english-dictionary-translation"],{"04d1":function(t,e,r){var n=r("342f"),i=n.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(n(t))}},"0a75":function(t,e,r){"use strict";e["a"]=function(){return n[parseInt(Math.random()*n.length)]};var n=["Ничего, скоро выучишь","Не переживай, все будет хорошо","Ты молодец, но нужно стараться","Старайся, я в тебя верю","Ох","Зря ты так","Ты спишь?","Учиться будем?","Мы так тут долго будем","Да что ж такое","Я тобой горжусь!","Еще немного, еще чуть-чуть","Держись","Ты же не хочешь, чтобы я подсказывала?","Двоечник","Опять 25","Не ссы в трусы","Даже я уже запомнила","Работай, не отвлекайся","Если не будешь ошибаться, получишь награду","Тяжело в учении, легко в бою","Мал золотник, да дорог","Без труда не выловишь и рыбку из пруда.","Летом не припасешь, зимой не принесешь.","Кто не сажал дерева, тому не лежать в тени.","Придет осень, за все спросит. ","Что летом родится, то зимой пригодится. ","Кто весной не пролежит, весь год будет сыт. ","Летом с удочкой, зимой с сумочкой. ","Одна ласточка не делает весны. ","Около речки колодца не копают.","Сугроб да вьюга - два друга."," Зима весну пугает, да всё равно тает. "," Вода на лугу - сено в стогу. "," Была бы водица, а сено зародится. "," Как зима не злится, а всё весне покорится. "," В июне первую ягоду в рот кладут, а вторую домой несут. "," Кто земле дает, тому земля втройне отдает "," Не поле кормит, а нива "," Кто любит земле кланяться - без добычи не останется "," Человек - самое ценное между небом и землей "," Если пахать плугом, земля станет лугом.","Вода камень точит. ","Под лежачий камень вода не течет","Декабрь - шапка зимы, июль - макушка лета. ","Зимой волка бойся, а летом мухи. ","Мороз и железо рвет, и на лету птицу бьет. ","Без корня и полынь не растет. ","Не всё стриги, что растет. ","Ветра в рукавицу не поймаешь. ","Пчела хоть и жалит, да мед дает. ","Как месяц не свети, а все не солнышко. ","Возле леса жить - голодному не быть. ","Для муравья и роса - наводнение. ","Не зная броду, не суйся в воду.","Не сдавайся!","Все еще впереди!"]},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),s=r("9112");for(var a in i){var c=n[a],u=c&&c.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(f){u.forEach=o}}},1610:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"card"},[this.wordGroups?r("h1",[r("div",[t._v("Слов "+t._s(this.wordGroups[this.currentGroup].length))]),r("div",{on:{click:t.requestChangeMaxWordsInGroup}},[t._v(" Группа "+t._s(this.currentGroup+1)+" / "+t._s(this.wordGroups.length)+" ")])]):t._e(),r("label",{staticClass:"word"},[t._v(t._s(this.currentWord))]),this.typing?r("div",{staticClass:"w-full"},[r("span",{staticClass:"input"},[t._v(t._s(t.typedResult))]),r("div",{staticClass:"keys"},[t._l(this.keys,(function(e){return r("div",{key:e,on:{click:function(r){return t.type(e)}}},[t._v(" "+t._s(e)+" ")])})),r("div",{staticClass:"invisible"}),r("div",{on:{click:t.backspace}},[t._v("←")])],2),r("button",{staticClass:"give-up",class:this.buttonInvisible,on:{click:t.checkTask}},[t._v(" Сдаюсь ")])]):r("div",[r("div",{staticClass:"flex items-center"},[r("img",{staticClass:"play",attrs:{src:"/static/sound.svg"},on:{click:t.playCurrentWord}}),r("label",{staticClass:"ok",class:this.ok.toString()},[t._v(" "+t._s(this.dictionary[this.currentWord])+" ")])]),r("button",{class:this.buttonInvisible,on:{click:t.startTask}},[t._v("Дальше")])])])])},i=[];r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r("fb6a"),r("ac1f"),r("1276"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("4e82"),r("a630");var c=r("2f62"),u=r("4473"),f=r("d97b"),l=r("0a75"),d=Object(c["a"])("english"),h=d.mapState,v={data:function(){return{typing:!0,typedResult:"",ok:!1,buttonInvisible:""}},methods:{type:function(t){this.typedResult+=t,this.currentVariants[0].length===this.typedResult.length&&this.checkTask()},backspace:function(){this.typedResult=this.typedResult.slice(0,-1)},checkTask:function(){this.ok=this.currentVariants.indexOf(this.typedResult)>-1,this.typing=!1,this.playCurrentWord(),event.target.value="",this.hideButtons()},playCurrentWord:function(){Object(u["a"])([this.currentWord,{word:this.dictionary[this.currentWord],lang:"ru"}])},startTask:function(){this.playing||(this.ok?Object(u["a"])({word:Object(f["a"])(),lang:"ru"}):Object(u["a"])({word:Object(l["a"])(),lang:"ru"})),this.$store.commit("english/setRandomWord",this.ok),this.typedResult="",this.typing=!0,this.ok=!1,this.hideButtons()},requestChangeMaxWordsInGroup:function(){var t=parseInt(prompt("Сколько слов должно быть в группе?"));t&&this.$store.dispatch("english/changeMaxWordsInGroup",t)},hideButtons:function(){var t=this;this.buttonInvisible="invisible",setTimeout((function(){return t.buttonInvisible=""}),3e3)}},computed:a(a({},h({dictionary:"dictionary",wordGroups:"wordGroups",currentGroup:"currentGroup",currentWord:"currentWord",currentVariants:"currentVariants"})),{},{keys:function(){var t="ёйцукенгшщзхъфывапролджэячсмитьбю".split(""),e=this.currentVariants[0][this.typedResult.length],r=new Set([e]);while(r.size<10)r.add(t[parseInt(33*Math.random())]);return Array.from(r).sort((function(){return Math.random()<.5}))}}),created:function(){this.$store.dispatch("english/fetchDictionary")}},p=v,b=(r("5363"),r("2877")),y=Object(b["a"])(p,n,i,!1,null,"5abd568a",null);e["default"]=y.exports},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4473:function(t,e,r){"use strict";r("159b");e["a"]=function(t){Array.isArray(t)||(t=[t]);var e=[];t.forEach((function(t){e.push(new Audio("/api/english/play?"+(t instanceof Object?"lang="+t.lang+"&":"")+"phrase="+(t instanceof Object?t.word:t)))})),e.forEach((function(t,e){0===e?t.play():setTimeout((function(){t.play()}),3e3)}))}},4591:function(t,e,r){},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),s=r("e95a"),a=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,h,v=i(t),p="function"==typeof this?this:Array,b=arguments.length,y=b>1?arguments[1]:void 0,g=void 0!==y,w=u(v),m=0;if(g&&(y=n(y,b>2?arguments[2]:void 0,2)),void 0==w||p==Array&&s(w))for(e=a(v.length),r=new p(e);e>m;m++)h=g?y(v[m],m):v[m],c(r,m,h);else for(l=w.call(v),d=l.next,r=new p;!(f=d.call(l)).done;m++)h=g?o(l,y,[f.value,m],!0):f.value,c(r,m,h);return r.length=m,r}},"4e82":function(t,e,r){"use strict";var n=r("23e7"),i=r("1c0b"),o=r("7b0b"),s=r("50c4"),a=r("d039"),c=r("addb"),u=r("a640"),f=r("04d1"),l=r("d998"),d=r("2d00"),h=r("512c"),v=[],p=v.sort,b=a((function(){v.sort(void 0)})),y=a((function(){v.sort(null)})),g=u("sort"),w=!a((function(){if(d)return d<70;if(!(f&&f>3)){if(l)return!0;if(h)return h<603;var t,e,r,n,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)v.push({k:e+n,v:r})}for(v.sort((function(t,e){return e.v-t.v})),n=0;n<v.length;n++)e=v[n].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),m=b||!y||!g||!w,O=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:String(e)>String(r)?1:-1}};n({target:"Array",proto:!0,forced:m},{sort:function(t){void 0!==t&&i(t);var e=o(this);if(w)return void 0===t?p.call(e):p.call(e,t);var r,n,a=[],u=s(e.length);for(n=0;n<u;n++)n in e&&a.push(e[n]);a=c(a,O(t)),r=a.length,n=0;while(n<r)e[n]=a[n++];while(n<u)delete e[n++];return e}})},"512c":function(t,e,r){var n=r("342f"),i=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},5363:function(t,e,r){"use strict";r("4591")},6062:function(t,e,r){"use strict";var n=r("6d61"),i=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,r){"use strict";var n=r("9bf2").f,i=r("7c73"),o=r("e2cc"),s=r("0366"),a=r("19aa"),c=r("2266"),u=r("7dd0"),f=r("2626"),l=r("83ab"),d=r("f183").fastKey,h=r("69f3"),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,r,u){var f=t((function(t,n){a(t,f,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=n&&c(n,t[u],{that:t,AS_ENTRIES:r})})),h=p(e),b=function(t,e,r){var n,i,o=h(t),s=y(t,e);return s?s.value=r:(o.last=s={index:i=d(e,!0),key:e,value:r,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=s),n&&(n.next=s),l?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},y=function(t,e){var r,n=h(t),i=d(e);if("F"!==i)return n.index[i];for(r=n.first;r;r=r.next)if(r.key==e)return r};return o(f.prototype,{clear:function(){var t=this,e=h(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,r=h(e),n=y(e,t);if(n){var i=n.next,o=n.previous;delete r.index[n.index],n.removed=!0,o&&(o.next=i),i&&(i.previous=o),r.first==n&&(r.first=i),r.last==n&&(r.last=o),l?r.size--:e.size--}return!!n},forEach:function(t){var e,r=h(this),n=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(f.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,e,r){var n=e+" Iterator",i=p(e),o=p(n);u(t,e,(function(t,e){v(this,{type:n,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},"6d61":function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("94ca"),s=r("6eeb"),a=r("f183"),c=r("2266"),u=r("19aa"),f=r("861d"),l=r("d039"),d=r("1c7e"),h=r("d44e"),v=r("7156");t.exports=function(t,e,r){var p=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),y=p?"set":"add",g=i[t],w=g&&g.prototype,m=g,O={},k=function(t){var e=w[t];s(w,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})},x=o(t,"function"!=typeof g||!(b||w.forEach&&!l((function(){(new g).entries().next()}))));if(x)m=r.getConstructor(e,t,p,y),a.REQUIRED=!0;else if(o(t,!0)){var j=new m,S=j[y](b?{}:-0,1)!=j,E=l((function(){j.has(1)})),I=d((function(t){new g(t)})),C=!b&&l((function(){var t=new g,e=5;while(e--)t[y](e,e);return!t.has(-0)}));I||(m=e((function(e,r){u(e,m,t);var n=v(new g,e,m);return void 0!=r&&c(r,n[y],{that:n,AS_ENTRIES:p}),n})),m.prototype=w,w.constructor=m),(E||C)&&(k("delete"),k("has"),p&&k("get")),(C||S)&&k(y),b&&w.clear&&delete w.clear}return O[t]=m,n({global:!0,forced:m!=g},O),h(m,t),b||r.setStrong(m,t,p),m}},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,s;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(s=o.prototype)&&s!==r.prototype&&i(t,s),t}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},"9bdd":function(t,e,r){var n=r("825a"),i=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(s){throw i(t),s}}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),s=r("c430"),a=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),h=r("861d"),v=r("825a"),p=r("7b0b"),b=r("fc6a"),y=r("c04e"),g=r("5c6c"),w=r("7c73"),m=r("df75"),O=r("241c"),k=r("057f"),x=r("7418"),j=r("06cf"),S=r("9bf2"),E=r("d1e7"),I=r("9112"),C=r("6eeb"),_=r("5692"),P=r("f772"),A=r("d012"),R=r("90e3"),D=r("b622"),W=r("e538"),G=r("746f"),z=r("d44e"),T=r("69f3"),M=r("b727").forEach,F=P("hidden"),N="Symbol",J="prototype",V=D("toPrimitive"),B=T.set,K=T.getterFor(N),Q=Object[J],$=i.Symbol,U=o("JSON","stringify"),q=j.f,H=S.f,L=k.f,X=E.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=i.QObject,it=!nt||!nt[J]||!nt[J].findChild,ot=a&&f((function(){return 7!=w(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=q(Q,e);n&&delete Q[e],H(t,e,r),n&&t!==Q&&H(Q,e,n)}:H,st=function(t,e){var r=Y[t]=w($[J]);return B(r,{type:N,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof $},ct=function(t,e,r){t===Q&&ct(Z,e,r),v(t);var n=y(e,!0);return v(r),l(Y,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=w(r,{enumerable:g(0,!1)})):(l(t,F)||H(t,F,g(1,{})),t[F][n]=!0),ot(t,n,r)):H(t,n,r)},ut=function(t,e){v(t);var r=b(e),n=m(r).concat(vt(r));return M(n,(function(e){a&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?w(t):ut(w(t),e)},lt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===Q&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=b(t),n=y(e,!0);if(r!==Q||!l(Y,n)||l(Z,n)){var i=q(r,n);return!i||!l(Y,n)||l(r,F)&&r[F][n]||(i.enumerable=!0),i}},ht=function(t){var e=L(b(t)),r=[];return M(e,(function(t){l(Y,t)||l(A,t)||r.push(t)})),r},vt=function(t){var e=t===Q,r=L(e?Z:b(t)),n=[];return M(r,(function(t){!l(Y,t)||e&&!l(Q,t)||n.push(Y[t])})),n};if(c||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),r=function(t){this===Q&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),ot(this,e,g(1,t))};return a&&it&&ot(Q,e,{configurable:!0,set:r}),st(e,t)},C($[J],"toString",(function(){return K(this).tag})),C($,"withoutSetter",(function(t){return st(R(t),t)})),E.f=lt,S.f=ct,j.f=dt,O.f=k.f=ht,x.f=vt,W.f=function(t){return st(D(t),t)},a&&(H($[J],"description",{configurable:!0,get:function(){return K(this).description}}),s||C(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:$}),M(m(rt),(function(t){G(t)})),n({target:N,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=$(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!a},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(p(t))}}),U){var pt=!c||f((function(){var t=$();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(h(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),i[1]=e,U.apply(null,i)}})}$[J][V]||I($[J],V,$[J].valueOf),z($,N),A[F]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),s=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:i})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},addb:function(t,e){var r=Math.floor,n=function(t,e){var s=t.length,a=r(s/2);return s<8?i(t,e):o(n(t.slice(0,a),e),n(t.slice(a),e),e)},i=function(t,e){var r,n,i=t.length,o=1;while(o<i){n=o,r=t[o];while(n&&e(t[n-1],r)>0)t[n]=t[--n];n!==o++&&(t[n]=r)}return t},o=function(t,e,r){var n=t.length,i=e.length,o=0,s=0,a=[];while(o<n||s<i)o<n&&s<i?a.push(r(t[o],e[s])<=0?t[o++]:e[s++]):a.push(o<n?t[o++]:e[s++]);return a};t.exports=n},bb2f:function(t,e,r){var n=r("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d97b:function(t,e,r){"use strict";e["a"]=function(){return n[parseInt(Math.random()*n.length)]};var n=["Ты на верном пути!","Молодец!","Здорово!","Ты в этом разобрался!","Удивительно!","Это как раз то, что нужно!","Гораздо лучше, чем я ожидала!","Великолепно!","Поздравляю!","Прекрасно!","Я тобой горжусь!","Грандиозно!","Я просто счастлив!","Незабываемо!","Ух!","Мне очень важна твоя помощь!","Именно этого мы давно ждали!","Работать с тобой просто радость!","Это трогает меня до глубины души!","Ты мне необходим!","Сказано здорово – просто и ясно!","Для меня важно все, что тебя волнует, тревожит и радует!","Остроумно!","Талантливо!","Я сойду с ума, если с тобой что-нибудь случится!","Экстра – класс!","Ты одаренный!","С каждым днем у тебя получается всё лучше!","Ты сегодня много сделал!","Уже лучше!","Для меня нет никого красивее тебя!","Отлично!","Еще лучше, чем прежде!","Научи меня делать так же!","Потрясающе!","Тут мне без тебя не обойтись!","Классно!","Я знал, что тебе это по силам!","Поразительно!","Ты мне нужен именно такой, какой есть!","Неподражаемо!","Несравненно!","Никто не может заменить тебя!","Красота!","Я горжусь тем, что тебе это удалось!","Как в сказке!","Очень ясно!","Я сам не смог бы сделать лучше!","Ярко, образно!","Фантастика!","Очень эффектно!","Лучше, чем все, кого я знаю!","Прекрасное начало!","Ты просто чудо!","Я люблю тебя!","Круто!","Крассавчик!"]},d998:function(t,e,r){var n=r("342f");t.exports=/MSIE|Trident/.test(n)},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),s=r("fc6a"),a=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=s(t),i=a.f,u=o(n),f={},l=0;while(u.length>l)r=i(n,e=u[l++]),void 0!==r&&c(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),s=r("06cf").f,a=r("83ab"),c=i((function(){s(1)})),u=!a||c;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},f183:function(t,e,r){var n=r("d012"),i=r("861d"),o=r("5135"),s=r("9bf2").f,a=r("90e3"),c=r("bb2f"),u=a("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(t){s(t,u,{value:{objectID:"O"+ ++f,weakData:{}}})},h=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,u)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[u].objectID},v=function(t,e){if(!o(t,u)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[u].weakData},p=function(t){return c&&b.REQUIRED&&l(t)&&!o(t,u)&&d(t),t},b=t.exports={REQUIRED:!1,fastKey:h,getWeakData:v,onFreeze:p};n[u]=!0},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),s=r("23cb"),a=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=l("slice"),h=f("species"),v=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,f,l=c(this),d=a(l.length),b=s(t,d),y=s(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(l,b,y);for(n=new(void 0===r?Array:r)(p(y-b,0)),f=0;b<y;b++,f++)b in l&&u(n,f,l[b]);return n.length=f,n}})}}]);
//# sourceMappingURL=page-english-dictionary-translation.e2942f53.js.map