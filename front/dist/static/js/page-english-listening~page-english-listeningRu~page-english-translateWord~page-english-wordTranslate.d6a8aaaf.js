(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-english-listening~page-english-listeningRu~page-english-translateWord~page-english-wordTranslate"],{"04d1":function(t,e,r){var n=r("342f"),i=n.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),s=r("9112");for(var a in i){var u=n[a],c=u&&u.prototype;if(c&&c.forEach!==o)try{s(c,"forEach",o)}catch(f){c.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1f0e":function(t,e,r){},"26e9":function(t,e,r){"use strict";var n=r("23e7"),i=r("e8b5"),o=[].reverse,s=[1,2];n({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),o.call(this)}})},"3b36":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"card"},[t.groups&&null!==t.currentGroup?r("h1",[r("div",{on:{click:t.changeMaxWordsInGroup}},[t._v(" Слово "+t._s(t.maxWordsInGroup-t.groups[t.currentGroup].length+1)+" / "+t._s(t.maxWordsInGroup)+" ")]),r("div",[t._v("Группа "+t._s(t.currentGroup+1)+" / "+t._s(t.groups.length))])]):t._e(),r("label",{staticClass:"translate-word"},[r("span",{class:{invisible:t.typing&&"listening"===t.category}},[t._v(t._s(t.currentWord))]),r("img",{staticClass:"play",class:{invisible:t.typing&&"listening"!==t.category},attrs:{src:"/static/sound.svg"},on:{click:t.playCurrentWord}}),r("span",{staticClass:"text-right"},[t._v(t._s(t.typedResult))])]),!t.currentWord&&t.groups&&t.groups.length?r("div",{staticClass:"text-center"},[r("img",{attrs:{src:"https://lifeo.ru/wp-content/uploads/gif-salyut-10.gif"}}),r("h2",[t._v("Поздравляю! Ты победитель!")]),r("button",{staticClass:"next",on:{click:function(e){return t.startTask(!0)}}},[t._v("Сброс")])]):t.typing?[r("input-keys",{attrs:{keys:t.keys},model:{value:t.typedResult,callback:function(e){t.typedResult=e},expression:"typedResult"}}),r("button",{staticClass:"give-up",class:t.buttonInvisible,on:{click:function(e){return t.checkTask(!0)}}},[t._v(" Сдаюсь ")])]:[r("div",{staticClass:"flex items-center"},[r("label",{staticClass:"ok",class:t.ok.toString()},[t._v(" "+t._s(t.dictionary[t.currentWord])+" ")])]),r("button",{staticClass:"next",class:t.buttonInvisible+t.ok.toString(),on:{click:function(e){return t.startTask(!1)}}},[t._v(" Дальше ")])]],2)])},i=[];function o(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function s(t,e){var r=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,i,o=[],s=!0,a=!1;try{for(r=r.call(t);!(s=(n=r.next()).done);s=!0)if(o.push(n.value),e&&o.length===e)break}catch(u){a=!0,i=u}finally{try{s||null==r["return"]||r["return"]()}finally{if(a)throw i}}return o}}r("fb6a"),r("b0c0"),r("a630");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){return o(t)||s(t,e)||u(t,e)||c()}var l=r("1da1"),d=(r("96cf"),r("26e9"),r("b64b"),r("a434"),r("4de4"),r("4fad"),r("ac1f"),r("1276"),r("6062"),r("a15b"),r("4e82"),r("d81d"),r("498a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"keys"},[t._l(t.keys,(function(e){return r("div",{key:e,on:{click:function(r){return t.type(e)}}},[t._v(" "+t._s(e)+" ")])})),r("div",{on:{click:function(e){return t.type("Backspace")}}},[t._v("←")])],2)}),h=[],p={props:{value:String,keys:Array},created:function(){document.addEventListener("keydown",this.dispatchType)},destroyed:function(){document.removeEventListener("keydown",this.dispatchType)},methods:{type:function(t){this.keys.indexOf(t)>=0?this.$emit("input",this.value+t):"Backspace"===t&&this.$emit("input",this.value.slice(0,-1))},dispatchType:function(t){var e=t.key;this.type(e)}}},v=p,g=r("2877"),y=Object(g["a"])(v,d,h,!1,null,null,null),b=y.exports,m=r("4473"),x=r("d722"),w={data:function(){return{typing:!0,typedResult:"",buttonInvisible:"",dictionary:null,groups:null,currentWord:null,maxWordsInGroup:null,praises:null,solaces:null}},props:{revers:Boolean,category:String,typingCheck:String},components:{InputKeys:b},methods:{fetchDictionary:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].getStatic("english/dictionary/"+localStorage.username,{});case 2:return t.dictionary=e.sent,t.revers&&(t.dictionary=t.reverse(t.dictionary)),e.t0=parseInt,e.next=7,x["a"].getUserData("maxWordsInGroup",10);case 7:return e.t1=e.sent,t.maxWordsInGroup=(0,e.t0)(e.t1),e.next=11,x["a"].getUserData("groups");case 11:return t.groups=e.sent,t.startTask(!t.groups,!0),e.next=15,x["a"].getStatic("praise/"+localStorage.username);case 15:return t.praises=e.sent,e.next=18,x["a"].getStatic("solace/"+localStorage.username);case 18:t.solaces=e.sent;case 19:case"end":return e.stop()}}),e)})))()},checkTask:function(t){(t||this.ok)&&(this.typing=!1,this.hideButtons(),"listening"===this.category?this.ok?m["a"].play({word:this.praise()}):m["a"].play({word:1===this.currentWord.length?this.currentWord:this.solace()}):this.playCurrentWord())},startTask:function(t,e){t&&this.formGroups(),e||"listening"===this.category||(this.ok?m["a"].play({word:this.praise()}):m["a"].play({word:this.solace()})),this.ok&&this.delCurrentWord(),this.setCurrentWord(),"listening"===this.category&&this.playCurrentWord(),this.typing=!0,this.hideButtons()},changeMaxWordsInGroup:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=parseInt(prompt("Сколько слов должно быть в группе?",t.maxWordsInGroup)),r===t.maxWordsInGroup){e.next=8;break}return t.maxWordsInGroup=r,t.startTask(!0),e.next=6,x["a"].setUserData("maxWordsInGroup",r);case 6:return e.next=8,x["a"].setUserData("groups",t.groups);case 8:case"end":return e.stop()}}),e)})))()},playCurrentWord:function(){m["a"].play([this.revers?this.dictionary[this.currentWord]:this.currentWord])},hideButtons:function(){var t=this;this.buttonInvisible="invisible ",setTimeout((function(){return t.buttonInvisible=""}),3e3)},formGroups:function(){var t=Object.keys(this.dictionary),e=[[]],r=0,n=0;while(t.length>0){var i=parseInt(Math.random()*t.length);n==this.maxWordsInGroup&&(r++,n=0,e.push([])),e[r].push(t[i]),n++,t.splice(i,1)}this.groups=e},delCurrentWord:function(){var t=this.groups[this.currentGroup];t.splice(t.indexOf(this.currentWord),1)},setCurrentWord:function(){var t=this;this.typedResult="";var e=this.groups[this.currentGroup],r=e.filter((function(r){return r!==t.currentWord||1===e.length}));this.currentWord=r[parseInt(Math.random()*r.length)]},keydown:function(t){var e=t.key;"Enter"===e?this.typing?this.checkTask(!0):this.startTask():"Escape"===e&&(this.typing?(this.typedResult=this.currentVariants[0],this.checkTask(!0)):this.startTask())},praise:function(){return this.praises[parseInt(Math.random()*this.praises.length)]},solace:function(){return this.solaces[parseInt(Math.random()*this.solaces.length)]},reverse:function(t){for(var e={},r=0,n=Object.entries(t);r<n.length;r++){var i=f(n[r],2),o=i[0],s=i[1];e[s]=o}return e}},computed:{ok:function(){return"word"===this.typingCheck?this.currentWord===this.typedResult:this.currentVariants.indexOf(this.typedResult)>-1},keys:function(){if(this.currentVariants&&this.currentWord){var t="абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split(""),e="abcdefghijklmnopqrstuvwxyz".split(""),r=e.indexOf("word"===this.typingCheck?this.currentWord[0]:this.currentVariants[0][0])>=0?e:t,n=new Set("word"===this.typingCheck?this.currentWord:this.currentVariants.join("").split(""));while(n.size<11)n.add(r[parseInt(Math.random()*r.length)]);return Array.from(n).sort()}return null},currentGroup:function(){if(Array.isArray(this.groups))for(var t=0;t<this.groups.length;t++)if(this.groups[t].length)return t;return null},currentVariants:function(){return this.dictionary&&this.currentWord?this.dictionary[this.currentWord].split(",").map((function(t){return t.trim()})):[]}},mounted:function(){this.fetchDictionary(),document.addEventListener("keydown",this.keydown)},destroyed:function(){document.removeEventListener("keydown",this.keydown)},watch:{typedResult:function(){this.checkTask()},currentGroup:function(){x["a"].setUserData("groups",this.groups)}}},k=w,S=(r("e357"),Object(g["a"])(k,n,i,!1,null,"5b2ee6bb",null));e["a"]=S.exports},4473:function(t,e,r){"use strict";r("159b"),r("99af");e["a"]={playing:!1,play:function(t){var e=this;if(!this.playing){Array.isArray(t)||(t=[t]);var r=[];t.forEach((function(t){var e=t instanceof Object?t.word:t,n="abcdefghijklmnopqrstuvwxyz".indexOf(e[0])>-1?"en":"ru";r.push(new Audio("".concat("","/api/play?phrase=").concat(e,"&lang=").concat(n)))})),r.forEach((function(t,r){0===r?(t.play(),e.playing=!0,setTimeout((function(){return e.playing=!1}),3e3)):setTimeout((function(){t.play()}),3e3)}))}}}},"498a":function(t,e,r){"use strict";var n=r("23e7"),i=r("58a8").trim,o=r("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),s=r("e95a"),a=r("50c4"),u=r("8418"),c=r("35a1");t.exports=function(t){var e,r,f,l,d,h,p=i(t),v="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,b=void 0!==y,m=c(p),x=0;if(b&&(y=n(y,g>2?arguments[2]:void 0,2)),void 0==m||v==Array&&s(m))for(e=a(p.length),r=new v(e);e>x;x++)h=b?y(p[x],x):p[x],u(r,x,h);else for(l=m.call(p),d=l.next,r=new v;!(f=d.call(l)).done;x++)h=b?o(l,y,[f.value,x],!0):f.value,u(r,x,h);return r.length=x,r}},"4e82":function(t,e,r){"use strict";var n=r("23e7"),i=r("1c0b"),o=r("7b0b"),s=r("50c4"),a=r("d039"),u=r("addb"),c=r("a640"),f=r("04d1"),l=r("d998"),d=r("2d00"),h=r("512c"),p=[],v=p.sort,g=a((function(){p.sort(void 0)})),y=a((function(){p.sort(null)})),b=c("sort"),m=!a((function(){if(d)return d<70;if(!(f&&f>3)){if(l)return!0;if(h)return h<603;var t,e,r,n,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)p.push({k:e+n,v:r})}for(p.sort((function(t,e){return e.v-t.v})),n=0;n<p.length;n++)e=p[n].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),x=g||!y||!b||!m,w=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:String(e)>String(r)?1:-1}};n({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&i(t);var e=o(this);if(m)return void 0===t?v.call(e):v.call(e,t);var r,n,a=[],c=s(e.length);for(n=0;n<c;n++)n in e&&a.push(e[n]);a=u(a,w(t)),r=a.length,n=0;while(n<r)e[n]=a[n++];while(n<c)delete e[n++];return e}})},"4fad":function(t,e,r){var n=r("23e7"),i=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"512c":function(t,e,r){var n=r("342f"),i=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),o="["+i+"]",s=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},6062:function(t,e,r){"use strict";var n=r("6d61"),i=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,r){"use strict";var n=r("9bf2").f,i=r("7c73"),o=r("e2cc"),s=r("0366"),a=r("19aa"),u=r("2266"),c=r("7dd0"),f=r("2626"),l=r("83ab"),d=r("f183").fastKey,h=r("69f3"),p=h.set,v=h.getterFor;t.exports={getConstructor:function(t,e,r,c){var f=t((function(t,n){a(t,f,e),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=n&&u(n,t[c],{that:t,AS_ENTRIES:r})})),h=v(e),g=function(t,e,r){var n,i,o=h(t),s=y(t,e);return s?s.value=r:(o.last=s={index:i=d(e,!0),key:e,value:r,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=s),n&&(n.next=s),l?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},y=function(t,e){var r,n=h(t),i=d(e);if("F"!==i)return n.index[i];for(r=n.first;r;r=r.next)if(r.key==e)return r};return o(f.prototype,{clear:function(){var t=this,e=h(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,r=h(e),n=y(e,t);if(n){var i=n.next,o=n.previous;delete r.index[n.index],n.removed=!0,o&&(o.next=i),i&&(i.previous=o),r.first==n&&(r.first=i),r.last==n&&(r.last=o),l?r.size--:e.size--}return!!n},forEach:function(t){var e,r=h(this),n=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(f.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,e,r){var n=e+" Iterator",i=v(e),o=v(n);c(t,e,(function(t,e){p(this,{type:n,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},"6d61":function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("94ca"),s=r("6eeb"),a=r("f183"),u=r("2266"),c=r("19aa"),f=r("861d"),l=r("d039"),d=r("1c7e"),h=r("d44e"),p=r("7156");t.exports=function(t,e,r){var v=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=v?"set":"add",b=i[t],m=b&&b.prototype,x=b,w={},k=function(t){var e=m[t];s(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})},S=o(t,"function"!=typeof b||!(g||m.forEach&&!l((function(){(new b).entries().next()}))));if(S)x=r.getConstructor(e,t,v,y),a.REQUIRED=!0;else if(o(t,!0)){var E=new x,W=E[y](g?{}:-0,1)!=E,O=l((function(){E.has(1)})),I=d((function(t){new b(t)})),j=!g&&l((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));I||(x=e((function(e,r){c(e,x,t);var n=p(new b,e,x);return void 0!=r&&u(r,n[y],{that:n,AS_ENTRIES:v}),n})),x.prototype=m,m.constructor=x),(O||j)&&(k("delete"),k("has"),v&&k("get")),(j||W)&&k(y),g&&m.clear&&delete m.clear}return w[t]=x,n({global:!0,forced:x!=b},w),h(x,t),g||r.setStrong(x,t,v),x}},"6f53":function(t,e,r){var n=r("83ab"),i=r("df75"),o=r("fc6a"),s=r("d1e7").f,a=function(t){return function(e){var r,a=o(e),u=i(a),c=u.length,f=0,l=[];while(c>f)r=u[f++],n&&!s.call(a,r)||l.push(t?[r,a[r]]:a[r]);return l}};t.exports={entries:a(!0),values:a(!1)}},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,s;return i&&"function"==typeof(o=e.constructor)&&o!==r&&n(s=o.prototype)&&s!==r.prototype&&i(t,s),t}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},"9bdd":function(t,e,r){var n=r("825a"),i=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(s){throw i(t),s}}},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),o=r("a691"),s=r("50c4"),a=r("7b0b"),u=r("65f0"),c=r("8418"),f=r("1dde"),l=f("splice"),d=Math.max,h=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var r,n,f,l,g,y,b=a(this),m=s(b.length),x=i(t,m),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=m-x):(r=w-2,n=h(d(o(e),0),m-x)),m+r-n>p)throw TypeError(v);for(f=u(b,n),l=0;l<n;l++)g=x+l,g in b&&c(f,l,b[g]);if(f.length=n,r<n){for(l=x;l<m-n;l++)g=l+n,y=l+r,g in b?b[y]=b[g]:delete b[y];for(l=m;l>m-n+r;l--)delete b[l-1]}else if(r>n)for(l=m-n;l>x;l--)g=l+n-1,y=l+r-1,g in b?b[y]=b[g]:delete b[y];for(l=0;l<r;l++)b[l+x]=arguments[l+2];return b.length=m-n+r,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),s=r("c430"),a=r("83ab"),u=r("4930"),c=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),h=r("861d"),p=r("825a"),v=r("7b0b"),g=r("fc6a"),y=r("c04e"),b=r("5c6c"),m=r("7c73"),x=r("df75"),w=r("241c"),k=r("057f"),S=r("7418"),E=r("06cf"),W=r("9bf2"),O=r("d1e7"),I=r("9112"),j=r("6eeb"),A=r("5692"),C=r("f772"),_=r("d012"),T=r("90e3"),R=r("b622"),G=r("e538"),D=r("746f"),M=r("d44e"),z=r("69f3"),P=r("b727").forEach,F=C("hidden"),U="Symbol",$="prototype",B=R("toPrimitive"),N=z.set,V=z.getterFor(U),J=Object[$],K=i.Symbol,L=o("JSON","stringify"),Q=E.f,q=W.f,H=k.f,X=O.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=i.QObject,it=!nt||!nt[$]||!nt[$].findChild,ot=a&&f((function(){return 7!=m(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(J,e);n&&delete J[e],q(t,e,r),n&&t!==J&&q(J,e,n)}:q,st=function(t,e){var r=Y[t]=m(K[$]);return N(r,{type:U,tag:t,description:e}),a||(r.description=e),r},at=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ut=function(t,e,r){t===J&&ut(Z,e,r),p(t);var n=y(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=m(r,{enumerable:b(0,!1)})):(l(t,F)||q(t,F,b(1,{})),t[F][n]=!0),ot(t,n,r)):q(t,n,r)},ct=function(t,e){p(t);var r=g(e),n=x(r).concat(pt(r));return P(n,(function(e){a&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ct(m(t),e)},lt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===J&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=g(t),n=y(e,!0);if(r!==J||!l(Y,n)||l(Z,n)){var i=Q(r,n);return!i||!l(Y,n)||l(r,F)&&r[F][n]||(i.enumerable=!0),i}},ht=function(t){var e=H(g(t)),r=[];return P(e,(function(t){l(Y,t)||l(_,t)||r.push(t)})),r},pt=function(t){var e=t===J,r=H(e?Z:g(t)),n=[];return P(r,(function(t){!l(Y,t)||e&&!l(J,t)||n.push(Y[t])})),n};if(u||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===J&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),ot(this,e,b(1,t))};return a&&it&&ot(J,e,{configurable:!0,set:r}),st(e,t)},j(K[$],"toString",(function(){return V(this).tag})),j(K,"withoutSetter",(function(t){return st(T(t),t)})),O.f=lt,W.f=ut,E.f=dt,w.f=k.f=ht,S.f=pt,G.f=function(t){return st(R(t),t)},a&&(q(K[$],"description",{configurable:!0,get:function(){return V(this).description}}),s||j(J,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:K}),P(x(rt),(function(t){D(t)})),n({target:U,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),L){var vt=!u||f((function(){var t=K();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(h(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),i[1]=e,L.apply(null,i)}})}K[$][B]||I(K[$],B,K[$].valueOf),M(K,U),_[F]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),s=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:i})},addb:function(t,e){var r=Math.floor,n=function(t,e){var s=t.length,a=r(s/2);return s<8?i(t,e):o(n(t.slice(0,a),e),n(t.slice(a),e),e)},i=function(t,e){var r,n,i=t.length,o=1;while(o<i){n=o,r=t[o];while(n&&e(t[n-1],r)>0)t[n]=t[--n];n!==o++&&(t[n]=r)}return t},o=function(t,e,r){var n=t.length,i=e.length,o=0,s=0,a=[];while(o<n||s<i)o<n&&s<i?a.push(r(t[o],e[s])<=0?t[o++]:e[s++]):a.push(o<n?t[o++]:e[s++]);return a};t.exports=n},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/,u="name";n&&!(u in o)&&i(o,u,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),s=r("d039"),a=s((function(){o(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return o(i(t))}})},bb2f:function(t,e,r){var n=r("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c8d2:function(t,e,r){var n=r("d039"),i=r("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||o[t]()!=o||i[t].name!==t}))}},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,o=r("1dde"),s=o("map");n({target:"Array",proto:!0,forced:!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d998:function(t,e,r){var n=r("342f");t.exports=/MSIE|Trident/.test(n)},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),s=r("5135"),a=r("861d"),u=r("9bf2").f,c=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};c(d,f);var h=d.prototype=f.prototype;h.constructor=d;var p=h.toString,v="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;u(h,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(l,t))return"";var r=v?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e357:function(t,e,r){"use strict";r("1f0e")},e538:function(t,e,r){var n=r("b622");e.f=n},f183:function(t,e,r){var n=r("d012"),i=r("861d"),o=r("5135"),s=r("9bf2").f,a=r("90e3"),u=r("bb2f"),c=a("meta"),f=0,l=Object.isExtensible||function(){return!0},d=function(t){s(t,c,{value:{objectID:"O"+ ++f,weakData:{}}})},h=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,c)){if(!l(t))return"F";if(!e)return"E";d(t)}return t[c].objectID},p=function(t,e){if(!o(t,c)){if(!l(t))return!0;if(!e)return!1;d(t)}return t[c].weakData},v=function(t){return u&&g.REQUIRED&&l(t)&&!o(t,c)&&d(t),t},g=t.exports={REQUIRED:!1,fastKey:h,getWeakData:p,onFreeze:v};n[c]=!0},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),s=r("23cb"),a=r("50c4"),u=r("fc6a"),c=r("8418"),f=r("b622"),l=r("1dde"),d=l("slice"),h=f("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,f,l=u(this),d=a(l.length),g=s(t,d),y=s(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(l,g,y);for(n=new(void 0===r?Array:r)(v(y-g,0)),f=0;g<y;g++,f++)g in l&&c(n,f,l[g]);return n.length=f,n}})}}]);
//# sourceMappingURL=page-english-listening~page-english-listeningRu~page-english-translateWord~page-english-wordTranslate.d6a8aaaf.js.map