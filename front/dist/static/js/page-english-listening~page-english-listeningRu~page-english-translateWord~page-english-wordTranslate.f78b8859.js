(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-english-listening~page-english-listeningRu~page-english-translateWord~page-english-wordTranslate"],{"04d1":function(t,r,e){var n=e("342f"),i=n.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"057f":function(t,r,e){var n=e("fc6a"),i=e("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(r){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"0cb2":function(t,r,e){var n=e("7b0b"),i=Math.floor,o="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,e,c,u,f){var l=e+t.length,d=c.length,h=s;return void 0!==u&&(u=n(u),h=a),o.call(f,h,(function(n,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,e);case"'":return r.slice(l);case"<":a=u[o.slice(1,-1)];break;default:var s=+o;if(0===s)return n;if(s>d){var f=i(s/10);return 0===f?n:f<=d?void 0===c[f-1]?o.charAt(1):c[f-1]+o.charAt(1):n}a=c[s-1]}return void 0===a?"":a}))}},"159b":function(t,r,e){var n=e("da84"),i=e("fdbc"),o=e("17c2"),a=e("9112");for(var s in i){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,r,e){"use strict";var n=e("b727").forEach,i=e("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"26e9":function(t,r,e){"use strict";var n=e("23e7"),i=e("e8b5"),o=[].reverse,a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),o.call(this)}})},"3b36":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"page"},[e("div",{staticClass:"card"},[t.groups&&null!==t.currentGroup?e("h1",[e("div",{on:{click:t.changeMaxWordsInGroup}},[t._v(" Слово "+t._s(t.maxWordsInGroup-t.groups[t.currentGroup].length+1)+" / "+t._s(t.maxWordsInGroup)+" ")]),e("div",[t._v("Группа "+t._s(t.currentGroup+1)+" / "+t._s(t.groups.length))])]):t._e(),e("label",{staticClass:"translate-word"},[e("span",{class:{invisible:t.typing&&"listening"===t.category}},[t._v(t._s(t.currentWord))]),e("img",{staticClass:"play",class:{invisible:t.typing&&"listening"!==t.category},attrs:{src:"/static/sound.svg"},on:{click:t.playCurrentWord}}),e("span",{staticClass:"text-right"},[t._v(t._s(t.typedResult))])]),!t.currentWord&&t.groups&&t.groups.length?e("div",{staticClass:"text-center"},[e("img",{attrs:{src:"https://lifeo.ru/wp-content/uploads/gif-salyut-10.gif"}}),e("h2",[t._v("Поздравляю! Ты победитель!")]),e("button",{staticClass:"next",on:{click:function(r){return t.startTask(!0)}}},[t._v("Сброс")])]):t.typing?[e("input-keys",{attrs:{keys:t.keys},model:{value:t.typedResult,callback:function(r){t.typedResult=r},expression:"typedResult"}}),e("button",{staticClass:"give-up",class:t.buttonInvisible,on:{click:function(r){return t.checkTask(!0)}}},[t._v(" Сдаюсь ")])]:[e("div",{staticClass:"flex items-center"},[e("label",{staticClass:"ok",class:t.ok.toString()},[t._v(" "+t._s(t.dictionary[t.currentWord])+" ")])]),e("button",{staticClass:"next",class:t.buttonInvisible+t.ok.toString(),on:{click:function(r){return t.startTask(!1)}}},[t._v(" Дальше ")])]],2)])},i=[];function o(t){if(Array.isArray(t))return t}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0");function a(t,r){var e=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=e){var n,i,o=[],a=!0,s=!1;try{for(e=e.call(t);!(a=(n=e.next()).done);a=!0)if(o.push(n.value),r&&o.length===r)break}catch(c){s=!0,i=c}finally{try{a||null==e["return"]||e["return"]()}finally{if(s)throw i}}return o}}e("fb6a"),e("b0c0"),e("a630");function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r){if(t){if("string"===typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,r):void 0}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,r){return o(t)||a(t,r)||c(t,r)||u()}var l=e("1da1"),d=(e("96cf"),e("26e9"),e("b64b"),e("a434"),e("4de4"),e("4fad"),e("498a"),e("ac1f"),e("5319"),e("1276"),e("6062"),e("a15b"),e("4e82"),e("d81d"),function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"keys"},[t._l(t.keys,(function(r){return e("div",{key:r,on:{click:function(e){return t.type(r)}}},[t._v(" "+t._s(r)+" ")])})),e("div",{on:{click:function(r){return t.type("Backspace")}}},[t._v("←")])],2)}),h=[],p={props:{value:String,keys:Array},created:function(){document.addEventListener("keydown",this.dispatchType)},destroyed:function(){document.removeEventListener("keydown",this.dispatchType)},methods:{type:function(t){this.keys.indexOf(t)>=0?this.$emit("input",this.value+t):"Backspace"===t&&this.$emit("input",this.value.slice(0,-1))},dispatchType:function(t){var r=t.key;this.type(r)}}},v=p,g=e("2877"),y=Object(g["a"])(v,d,h,!1,null,null,null),b=y.exports,m=e("4473"),x=e("d722"),w={data:function(){return{typing:!0,typedResult:"",buttonInvisible:"",dictionary:null,groups:null,currentWord:null,maxWordsInGroup:null,praises:null,solaces:null}},props:{revers:Boolean,category:String,typingCheck:String},components:{InputKeys:b},methods:{fetchDictionary:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,x["a"].getStatic("english/dictionary/"+localStorage.username,{});case 2:return t.dictionary=r.sent,t.revers&&(t.dictionary=t.reverse(t.dictionary)),r.t0=parseInt,r.next=7,x["a"].getUserData("maxWordsInGroup",10);case 7:return r.t1=r.sent,t.maxWordsInGroup=(0,r.t0)(r.t1),r.next=11,x["a"].getUserData("groups");case 11:return t.groups=r.sent,t.startTask(!t.groups,!0),r.next=15,x["a"].getStatic("praise/"+localStorage.username);case 15:return t.praises=r.sent,r.next=18,x["a"].getStatic("solace/"+localStorage.username);case 18:t.solaces=r.sent;case 19:case"end":return r.stop()}}),r)})))()},checkTask:function(t){(t||this.ok)&&(this.typing=!1,this.hideButtons(),"listening"===this.category?this.ok?m["a"].play({word:this.praise()}):m["a"].play({word:1===this.currentWord.length?this.currentWord:this.solace()}):this.playCurrentWord())},startTask:function(t,r){t&&this.formGroups(),r||"listening"===this.category||(this.ok?m["a"].play({word:this.praise()}):m["a"].play({word:this.solace()})),this.ok&&this.delCurrentWord(),this.setCurrentWord(),"listening"===this.category&&this.playCurrentWord(),this.typing=!0,this.hideButtons()},changeMaxWordsInGroup:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e=parseInt(prompt("Сколько слов должно быть в группе?",t.maxWordsInGroup)),e===t.maxWordsInGroup){r.next=8;break}return t.maxWordsInGroup=e,t.startTask(!0),r.next=6,x["a"].setUserData("maxWordsInGroup",e);case 6:return r.next=8,x["a"].setUserData("groups",t.groups);case 8:case"end":return r.stop()}}),r)})))()},playCurrentWord:function(){m["a"].play([this.revers?this.dictionary[this.currentWord]:this.currentWord])},hideButtons:function(){var t=this;this.buttonInvisible="invisible ",setTimeout((function(){return t.buttonInvisible=""}),3e3)},formGroups:function(){var t=Object.keys(this.dictionary),r=[[]],e=0,n=0;while(t.length>0){var i=parseInt(Math.random()*t.length);n==this.maxWordsInGroup&&(e++,n=0,r.push([])),r[e].push(t[i]),n++,t.splice(i,1)}this.groups=r},delCurrentWord:function(){var t=this.groups[this.currentGroup];t.splice(t.indexOf(this.currentWord),1)},setCurrentWord:function(){var t=this;this.typedResult="";var r=this.groups[this.currentGroup],e=r.filter((function(e){return e!==t.currentWord||1===r.length}));this.currentWord=e[parseInt(Math.random()*e.length)]},keydown:function(t){var r=t.key;"Enter"===r?this.typing?this.checkTask(!0):this.startTask():"Escape1"===r&&(this.typing?(this.typedResult=this.currentVariants[0],this.checkTask(!0)):this.startTask())},praise:function(){return this.praises[parseInt(Math.random()*this.praises.length)]},solace:function(){return this.solaces[parseInt(Math.random()*this.solaces.length)]},reverse:function(t){for(var r={},e=0,n=Object.entries(t);e<n.length;e++){var i=f(n[e],2),o=i[0],a=i[1];r[a]=o}return r}},computed:{ok:function(){var t=this.typedResult.replace(/ +(?= )/g,"").trim();return"word"===this.typingCheck?this.currentWord===t:this.currentVariants.indexOf(t)>-1},keys:function(){if(this.currentVariants&&this.currentWord){var t="абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split(""),r="abcdefghijklmnopqrstuvwxyz".split(""),e=r.indexOf("word"===this.typingCheck?this.currentWord[0].toLowerCase():this.currentVariants[0][0].toLowerCase())>=0?r:t,n=new Set("word"===this.typingCheck?this.currentWord:this.currentVariants.join("").split(""));while(n.size<11)n.add(e[parseInt(Math.random()*e.length)]);return Array.from(n).sort()}return null},currentGroup:function(){if(Array.isArray(this.groups))for(var t=0;t<this.groups.length;t++)if(this.groups[t].length)return t;return null},currentVariants:function(){return this.dictionary&&this.currentWord?this.dictionary[this.currentWord].split(",").map((function(t){return t.trim()})):[]}},mounted:function(){this.fetchDictionary(),document.addEventListener("keydown",this.keydown)},destroyed:function(){document.removeEventListener("keydown",this.keydown)},watch:{typedResult:function(){this.checkTask()},currentGroup:function(){x["a"].setUserData("groups",this.groups)}}},k=w,S=(e("d27b"),Object(g["a"])(k,n,i,!1,null,"5365fa3d",null));r["a"]=S.exports},4473:function(t,r,e){"use strict";e("159b"),e("99af");r["a"]={playing:!1,play:function(t){var r=this;if(!this.playing){Array.isArray(t)||(t=[t]);var e=[];t.forEach((function(t){var r=t instanceof Object?t.word:t,n="abcdefghijklmnopqrstuvwxyz".indexOf(r[0])>-1?"en":"ru";e.push(new Audio("".concat("","/api/play?phrase=").concat(r,"&lang=").concat(n)))})),e.forEach((function(t,e){0===e?(t.play(),r.playing=!0,setTimeout((function(){return r.playing=!1}),3e3)):setTimeout((function(){t.play()}),3e3)}))}}}},"498a":function(t,r,e){"use strict";var n=e("23e7"),i=e("58a8").trim,o=e("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},"4df4":function(t,r,e){"use strict";var n=e("0366"),i=e("7b0b"),o=e("9bdd"),a=e("e95a"),s=e("50c4"),c=e("8418"),u=e("35a1");t.exports=function(t){var r,e,f,l,d,h,p=i(t),v="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,b=void 0!==y,m=u(p),x=0;if(b&&(y=n(y,g>2?arguments[2]:void 0,2)),void 0==m||v==Array&&a(m))for(r=s(p.length),e=new v(r);r>x;x++)h=b?y(p[x],x):p[x],c(e,x,h);else for(l=m.call(p),d=l.next,e=new v;!(f=d.call(l)).done;x++)h=b?o(l,y,[f.value,x],!0):f.value,c(e,x,h);return e.length=x,e}},"4e82":function(t,r,e){"use strict";var n=e("23e7"),i=e("1c0b"),o=e("7b0b"),a=e("50c4"),s=e("d039"),c=e("addb"),u=e("a640"),f=e("04d1"),l=e("d998"),d=e("2d00"),h=e("512c"),p=[],v=p.sort,g=s((function(){p.sort(void 0)})),y=s((function(){p.sort(null)})),b=u("sort"),m=!s((function(){if(d)return d<70;if(!(f&&f>3)){if(l)return!0;if(h)return h<603;var t,r,e,n,i="";for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)p.push({k:r+n,v:e})}for(p.sort((function(t,r){return r.v-t.v})),n=0;n<p.length;n++)r=p[n].k.charAt(0),i.charAt(i.length-1)!==r&&(i+=r);return"DGBEFHACIJK"!==i}})),x=g||!y||!b||!m,w=function(t){return function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:String(r)>String(e)?1:-1}};n({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&i(t);var r=o(this);if(m)return void 0===t?v.call(r):v.call(r,t);var e,n,s=[],u=a(r.length);for(n=0;n<u;n++)n in r&&s.push(r[n]);s=c(s,w(t)),e=s.length,n=0;while(n<e)r[n]=s[n++];while(n<u)delete r[n++];return r}})},"4fad":function(t,r,e){var n=e("23e7"),i=e("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"512c":function(t,r,e){var n=e("342f"),i=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},5319:function(t,r,e){"use strict";var n=e("d784"),i=e("825a"),o=e("50c4"),a=e("a691"),s=e("1d80"),c=e("8aa5"),u=e("0cb2"),f=e("14c3"),l=Math.max,d=Math.min,h=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,r,e,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=n.REPLACE_KEEPS_$0,g=p?"$":"$0";return[function(e,n){var i=s(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,n){if(!p&&v||"string"===typeof n&&-1===n.indexOf(g)){var s=e(r,t,this,n);if(s.done)return s.value}var y=i(t),b=String(this),m="function"===typeof n;m||(n=String(n));var x=y.global;if(x){var w=y.unicode;y.lastIndex=0}var k=[];while(1){var S=f(y,b);if(null===S)break;if(k.push(S),!x)break;var E=String(S[0]);""===E&&(y.lastIndex=c(b,o(y.lastIndex),w))}for(var I="",O=0,W=0;W<k.length;W++){S=k[W];for(var A=String(S[0]),C=l(d(a(S.index),b.length),0),_=[],j=1;j<S.length;j++)_.push(h(S[j]));var T=S.groups;if(m){var R=[A].concat(_,C,b);void 0!==T&&R.push(T);var G=String(n.apply(void 0,R))}else G=u(A,b,C,_,T,n);C>=O&&(I+=b.slice(O,C)+G,O=C+A.length)}return I+b.slice(O)}]}))},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,e){var n=e("1d80"),i=e("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(r){var e=String(n(r));return 1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(s,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},6062:function(t,r,e){"use strict";var n=e("6d61"),i=e("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,r,e){"use strict";var n=e("9bf2").f,i=e("7c73"),o=e("e2cc"),a=e("0366"),s=e("19aa"),c=e("2266"),u=e("7dd0"),f=e("2626"),l=e("83ab"),d=e("f183").fastKey,h=e("69f3"),p=h.set,v=h.getterFor;t.exports={getConstructor:function(t,r,e,u){var f=t((function(t,n){s(t,f,r),p(t,{type:r,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=n&&c(n,t[u],{that:t,AS_ENTRIES:e})})),h=v(r),g=function(t,r,e){var n,i,o=h(t),a=y(t,r);return a?a.value=e:(o.last=a={index:i=d(r,!0),key:r,value:e,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=a),n&&(n.next=a),l?o.size++:t.size++,"F"!==i&&(o.index[i]=a)),t},y=function(t,r){var e,n=h(t),i=d(r);if("F"!==i)return n.index[i];for(e=n.first;e;e=e.next)if(e.key==r)return e};return o(f.prototype,{clear:function(){var t=this,r=h(t),e=r.index,n=r.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;r.first=r.last=void 0,l?r.size=0:t.size=0},delete:function(t){var r=this,e=h(r),n=y(r,t);if(n){var i=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=i),i&&(i.previous=o),e.first==n&&(e.first=i),e.last==n&&(e.last=o),l?e.size--:r.size--}return!!n},forEach:function(t){var r,e=h(this),n=a(t,arguments.length>1?arguments[1]:void 0,3);while(r=r?r.next:e.first){n(r.value,r.key,this);while(r&&r.removed)r=r.previous}},has:function(t){return!!y(this,t)}}),o(f.prototype,e?{get:function(t){var r=y(this,t);return r&&r.value},set:function(t,r){return g(this,0===t?0:t,r)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,r,e){var n=r+" Iterator",i=v(r),o=v(n);u(t,r,(function(t,r){p(this,{type:n,target:t,state:i(t),kind:r,last:void 0})}),(function(){var t=o(this),r=t.kind,e=t.last;while(e&&e.removed)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==r?{value:e.key,done:!1}:"values"==r?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),f(r)}}},"6d61":function(t,r,e){"use strict";var n=e("23e7"),i=e("da84"),o=e("94ca"),a=e("6eeb"),s=e("f183"),c=e("2266"),u=e("19aa"),f=e("861d"),l=e("d039"),d=e("1c7e"),h=e("d44e"),p=e("7156");t.exports=function(t,r,e){var v=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=v?"set":"add",b=i[t],m=b&&b.prototype,x=b,w={},k=function(t){var r=m[t];a(m,t,"add"==t?function(t){return r.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!f(t))&&r.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!f(t)?void 0:r.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!f(t))&&r.call(this,0===t?0:t)}:function(t,e){return r.call(this,0===t?0:t,e),this})},S=o(t,"function"!=typeof b||!(g||m.forEach&&!l((function(){(new b).entries().next()}))));if(S)x=e.getConstructor(r,t,v,y),s.REQUIRED=!0;else if(o(t,!0)){var E=new x,I=E[y](g?{}:-0,1)!=E,O=l((function(){E.has(1)})),W=d((function(t){new b(t)})),A=!g&&l((function(){var t=new b,r=5;while(r--)t[y](r,r);return!t.has(-0)}));W||(x=r((function(r,e){u(r,x,t);var n=p(new b,r,x);return void 0!=e&&c(e,n[y],{that:n,AS_ENTRIES:v}),n})),x.prototype=m,m.constructor=x),(O||A)&&(k("delete"),k("has"),v&&k("get")),(A||I)&&k(y),g&&m.clear&&delete m.clear}return w[t]=x,n({global:!0,forced:x!=b},w),h(x,t),g||e.setStrong(x,t,v),x}},"6f53":function(t,r,e){var n=e("83ab"),i=e("df75"),o=e("fc6a"),a=e("d1e7").f,s=function(t){return function(r){var e,s=o(r),c=i(s),u=c.length,f=0,l=[];while(u>f)e=c[f++],n&&!a.call(s,e)||l.push(t?[e,s[e]]:s[e]);return l}};t.exports={entries:s(!0),values:s(!1)}},7156:function(t,r,e){var n=e("861d"),i=e("d2bb");t.exports=function(t,r,e){var o,a;return i&&"function"==typeof(o=r.constructor)&&o!==e&&n(a=o.prototype)&&a!==e.prototype&&i(t,a),t}},"746f":function(t,r,e){var n=e("428f"),i=e("5135"),o=e("e538"),a=e("9bf2").f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});i(r,t)||a(r,t,{value:o.f(t)})}},"9bdd":function(t,r,e){var n=e("825a"),i=e("2a62");t.exports=function(t,r,e,o){try{return o?r(n(e)[0],e[1]):r(e)}catch(a){throw i(t),a}}},a434:function(t,r,e){"use strict";var n=e("23e7"),i=e("23cb"),o=e("a691"),a=e("50c4"),s=e("7b0b"),c=e("65f0"),u=e("8418"),f=e("1dde"),l=f("splice"),d=Math.max,h=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l},{splice:function(t,r){var e,n,f,l,g,y,b=s(this),m=a(b.length),x=i(t,m),w=arguments.length;if(0===w?e=n=0:1===w?(e=0,n=m-x):(e=w-2,n=h(d(o(r),0),m-x)),m+e-n>p)throw TypeError(v);for(f=c(b,n),l=0;l<n;l++)g=x+l,g in b&&u(f,l,b[g]);if(f.length=n,e<n){for(l=x;l<m-n;l++)g=l+n,y=l+e,g in b?b[y]=b[g]:delete b[y];for(l=m;l>m-n+e;l--)delete b[l-1]}else if(e>n)for(l=m-n;l>x;l--)g=l+n-1,y=l+e-1,g in b?b[y]=b[g]:delete b[y];for(l=0;l<e;l++)b[l+x]=arguments[l+2];return b.length=m-n+e,f}})},a4d3:function(t,r,e){"use strict";var n=e("23e7"),i=e("da84"),o=e("d066"),a=e("c430"),s=e("83ab"),c=e("4930"),u=e("fdbf"),f=e("d039"),l=e("5135"),d=e("e8b5"),h=e("861d"),p=e("825a"),v=e("7b0b"),g=e("fc6a"),y=e("c04e"),b=e("5c6c"),m=e("7c73"),x=e("df75"),w=e("241c"),k=e("057f"),S=e("7418"),E=e("06cf"),I=e("9bf2"),O=e("d1e7"),W=e("9112"),A=e("6eeb"),C=e("5692"),_=e("f772"),j=e("d012"),T=e("90e3"),R=e("b622"),G=e("e538"),D=e("746f"),M=e("d44e"),$=e("69f3"),P=e("b727").forEach,z=_("hidden"),U="Symbol",F="prototype",N=R("toPrimitive"),B=$.set,L=$.getterFor(U),K=Object[F],V=i.Symbol,J=o("JSON","stringify"),Q=E.f,q=I.f,H=k.f,X=O.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),rt=C("symbol-to-string-registry"),et=C("wks"),nt=i.QObject,it=!nt||!nt[F]||!nt[F].findChild,ot=s&&f((function(){return 7!=m(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=Q(K,r);n&&delete K[r],q(t,r,e),n&&t!==K&&q(K,r,n)}:q,at=function(t,r){var e=Y[t]=m(V[F]);return B(e,{type:U,tag:t,description:r}),s||(e.description=r),e},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,r,e){t===K&&ct(Z,r,e),p(t);var n=y(r,!0);return p(e),l(Y,n)?(e.enumerable?(l(t,z)&&t[z][n]&&(t[z][n]=!1),e=m(e,{enumerable:b(0,!1)})):(l(t,z)||q(t,z,b(1,{})),t[z][n]=!0),ot(t,n,e)):q(t,n,e)},ut=function(t,r){p(t);var e=g(r),n=x(e).concat(pt(e));return P(n,(function(r){s&&!lt.call(e,r)||ct(t,r,e[r])})),t},ft=function(t,r){return void 0===r?m(t):ut(m(t),r)},lt=function(t){var r=y(t,!0),e=X.call(this,r);return!(this===K&&l(Y,r)&&!l(Z,r))&&(!(e||!l(this,r)||!l(Y,r)||l(this,z)&&this[z][r])||e)},dt=function(t,r){var e=g(t),n=y(r,!0);if(e!==K||!l(Y,n)||l(Z,n)){var i=Q(e,n);return!i||!l(Y,n)||l(e,z)&&e[z][n]||(i.enumerable=!0),i}},ht=function(t){var r=H(g(t)),e=[];return P(r,(function(t){l(Y,t)||l(j,t)||e.push(t)})),e},pt=function(t){var r=t===K,e=H(r?Z:g(t)),n=[];return P(e,(function(t){!l(Y,t)||r&&!l(K,t)||n.push(Y[t])})),n};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=T(t),e=function(t){this===K&&e.call(Z,t),l(this,z)&&l(this[z],r)&&(this[z][r]=!1),ot(this,r,b(1,t))};return s&&it&&ot(K,r,{configurable:!0,set:e}),at(r,t)},A(V[F],"toString",(function(){return L(this).tag})),A(V,"withoutSetter",(function(t){return at(T(t),t)})),O.f=lt,I.f=ct,E.f=dt,w.f=k.f=ht,S.f=pt,G.f=function(t){return at(R(t),t)},s&&(q(V[F],"description",{configurable:!0,get:function(){return L(this).description}}),a||A(K,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),P(x(et),(function(t){D(t)})),n({target:U,stat:!0,forced:!c},{for:function(t){var r=String(t);if(l(tt,r))return tt[r];var e=V(r);return tt[r]=e,rt[e]=r,e},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),J){var vt=!c||f((function(){var t=V();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,r,e){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=r,(h(r)||void 0!==t)&&!st(t))return d(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!st(r))return r}),i[1]=r,J.apply(null,i)}})}V[F][N]||W(V[F],N,V[F].valueOf),M(V,U),j[z]=!0},a630:function(t,r,e){var n=e("23e7"),i=e("4df4"),o=e("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},addb:function(t,r){var e=Math.floor,n=function(t,r){var a=t.length,s=e(a/2);return a<8?i(t,r):o(n(t.slice(0,s),r),n(t.slice(s),r),r)},i=function(t,r){var e,n,i=t.length,o=1;while(o<i){n=o,e=t[o];while(n&&r(t[n-1],e)>0)t[n]=t[--n];n!==o++&&(t[n]=e)}return t},o=function(t,r,e){var n=t.length,i=r.length,o=0,a=0,s=[];while(o<n||a<i)o<n&&a<i?s.push(e(t[o],r[a])<=0?t[o++]:r[a++]):s.push(o<n?t[o++]:r[a++]);return s};t.exports=n},b0c0:function(t,r,e){var n=e("83ab"),i=e("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},b64b:function(t,r,e){var n=e("23e7"),i=e("7b0b"),o=e("df75"),a=e("d039"),s=a((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return o(i(t))}})},bb2f:function(t,r,e){var n=e("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c8d2:function(t,r,e){var n=e("d039"),i=e("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||o[t]()!=o||i[t].name!==t}))}},d27b:function(t,r,e){"use strict";e("db57")},d28b:function(t,r,e){var n=e("746f");n("iterator")},d81d:function(t,r,e){"use strict";var n=e("23e7"),i=e("b727").map,o=e("1dde"),a=o("map");n({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d998:function(t,r,e){var n=e("342f");t.exports=/MSIE|Trident/.test(n)},db57:function(t,r,e){},e01a:function(t,r,e){"use strict";var n=e("23e7"),i=e("83ab"),o=e("da84"),a=e("5135"),s=e("861d"),c=e("9bf2").f,u=e("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[r]=!0),r};u(d,f);var h=d.prototype=f.prototype;h.constructor=d;var p=h.toString,v="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,r=p.call(t);if(a(l,t))return"";var e=v?r.slice(7,-1):r.replace(g,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,r,e){var n=e("b622");r.f=n},f183:function(t,r,e){var n=e("d012"),i=e("861d"),o=e("5135"),a=e("9bf2").f,s=e("90e3"),c=e("bb2f"),u=s("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(t){a(t,u,{value:{objectID:"O"+ ++f,weakData:{}}})},h=function(t,r){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,u)){if(!l(t))return"F";if(!r)return"E";d(t)}return t[u].objectID},p=function(t,r){if(!o(t,u)){if(!l(t))return!0;if(!r)return!1;d(t)}return t[u].weakData},v=function(t){return c&&g.REQUIRED&&l(t)&&!o(t,u)&&d(t),t},g=t.exports={REQUIRED:!1,fastKey:h,getWeakData:p,onFreeze:v};n[u]=!0},fb6a:function(t,r,e){"use strict";var n=e("23e7"),i=e("861d"),o=e("e8b5"),a=e("23cb"),s=e("50c4"),c=e("fc6a"),u=e("8418"),f=e("b622"),l=e("1dde"),d=l("slice"),h=f("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,r){var e,n,f,l=c(this),d=s(l.length),g=a(t,d),y=a(void 0===r?d:r,d);if(o(l)&&(e=l.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?i(e)&&(e=e[h],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return p.call(l,g,y);for(n=new(void 0===e?Array:e)(v(y-g,0)),f=0;g<y;g++,f++)g in l&&u(n,f,l[g]);return n.length=f,n}})}}]);
//# sourceMappingURL=page-english-listening~page-english-listeningRu~page-english-translateWord~page-english-wordTranslate.f78b8859.js.map