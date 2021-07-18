(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-math-arithmetic"],{1148:function(t,e,s){"use strict";var n=s("a691"),i=s("1d80");t.exports=function(t){var e=String(i(this)),s="",r=n(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(s+=e);return s}},"25f0":function(t,e,s){"use strict";var n=s("6eeb"),i=s("825a"),r=s("d039"),o=s("ad6d"),a="toString",c=RegExp.prototype,l=c[a],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=a;(u||f)&&n(RegExp.prototype,a,(function(){var t=i(this),e=String(t.source),s=t.flags,n=String(void 0===s&&t instanceof RegExp&&!("flags"in c)?o.call(t):s);return"/"+e+"/"+n}),{unsafe:!0})},"33a4":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"card"},[s("h1",[s("div",[t._v("Ответы "+t._s(t.successAnswers)+"/"+t._s(t.totalAnswers))]),s("div",[t._v("Уровень "+t._s(t.level))]),s("div",[t._v("Правильно "+t._s(t.efficiency)+"%")])]),s("label",{staticClass:"task"},[t._v(" "+t._s(t.x)+" "+t._s(t.sign)+" "+t._s(t.y)+" = "),s("span",{staticClass:"typedResult",class:(t.typing||t.ok).toString()},[t._v(t._s(t.typedResult))])]),this.typing?s("div",{staticClass:"keys"},[t._l([7,8,9,4,5,6,1,2,3,0],(function(e){return s("div",{key:e,on:{click:function(s){return t.type(e)}}},[t._v(" "+t._s(e)+" ")])})),s("div",{staticClass:"invisible"}),s("div",{on:{click:t.backspace}},[t._v("←")])],2):s("div",{staticClass:"result"},[t._v(t._s(t.result))]),s("button",{staticClass:"next",class:(this.typing?"invisible ":"")+this.ok.toString(),on:{click:t.startTask}},[t._v(" Дальше ")])])])},i=[],r=(s("b680"),s("d3b7"),s("25f0"),s("fb6a"),{data:function(){return{typing:null,ok:!1,x:null,y:null,sign:null,typedResult:null,totalAnswers:null,successAnswers:null,praises:null,solaces:null}},created:function(){this.getStoredInt("totalAnswers",0),this.getStoredInt("successAnswers",0),this.startTask()},computed:{level:function(){return parseInt(5+.2*(.5*this.totalAnswers+this.successAnswers))},efficiency:function(){return(this.successAnswers/this.totalAnswers*100).toFixed(2)||0},result:function(){return Math.round(this.x+("+"===this.sign?1:-1)*this.y)}},methods:{type:function(t){this.typedResult+=t,this.result.toString().length===this.typedResult.length&&this.checkTask()},backspace:function(){this.typedResult=this.typedResult.slice(0,-1)},checkTask:function(){this.typing=!1,this.ok=this.result===parseInt(this.typedResult),this.setStoredInt("totalAnswers",++this.totalAnswers),this.ok&&this.setStoredInt("successAnswers",++this.successAnswers)},startTask:function(){this.typing=!0,this.typedResult="",this.sign=this.getRandomSign(),this.x=this.getRandomNumber(),this.y=this.getRandomNumber(this.x,this.sign)},getRandomNumber:function(t,e){return parseInt(Math.random()*("-"===e?t:this.level))},getRandomSign:function(){return Math.random()<.5?"+":"-"},getStoredInt:function(t,e){this[t]=parseInt(localStorage.getItem(localStorage.username+".math."+t))||e},setStoredInt:function(t,e){localStorage.setItem(localStorage.username+".math."+t,e)}}}),o=r,a=(s("69ec"),s("2877")),c=Object(a["a"])(o,n,i,!1,null,"14bbdea8",null);e["default"]=c.exports},"408a":function(t,e,s){var n=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},4750:function(t,e,s){},"69ec":function(t,e,s){"use strict";s("4750")},8418:function(t,e,s){"use strict";var n=s("c04e"),i=s("9bf2"),r=s("5c6c");t.exports=function(t,e,s){var o=n(e);o in t?i.f(t,o,r(0,s)):t[o]=s}},ad6d:function(t,e,s){"use strict";var n=s("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b680:function(t,e,s){"use strict";var n=s("23e7"),i=s("a691"),r=s("408a"),o=s("1148"),a=s("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},f=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},h=function(t,e,s){var n=-1,i=s;while(++n<6)i+=e*t[n],t[n]=i%1e7,i=l(i/1e7)},d=function(t,e){var s=6,n=0;while(--s>=0)n+=t[s],t[s]=l(n/e),n=n%e*1e7},g=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var n=String(t[e]);s=""===s?n:s+o.call("0",7-n.length)+n}return s},p=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,s,n,a,c=r(this),l=i(t),p=[0,0,0,0,0,0],v="",y="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){h(p,0,s),n=l;while(n>=7)h(p,1e7,0),n-=7;h(p,u(10,n,1),0),n=e-1;while(n>=23)d(p,1<<23),n-=23;d(p,1<<n),h(p,1,1),d(p,2),y=g(p)}else h(p,0,s),h(p,1<<-e,0),y=g(p)+o.call("0",l);return l>0?(a=y.length,y=v+(a<=l?"0."+o.call("0",l-a)+y:y.slice(0,a-l)+"."+y.slice(a-l))):y=v+y,y}})},fb6a:function(t,e,s){"use strict";var n=s("23e7"),i=s("861d"),r=s("e8b5"),o=s("23cb"),a=s("50c4"),c=s("fc6a"),l=s("8418"),u=s("b622"),f=s("1dde"),h=f("slice"),d=u("species"),g=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var s,n,u,f=c(this),h=a(f.length),v=o(t,h),y=o(void 0===e?h:e,h);if(r(f)&&(s=f.constructor,"function"!=typeof s||s!==Array&&!r(s.prototype)?i(s)&&(s=s[d],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return g.call(f,v,y);for(n=new(void 0===s?Array:s)(p(y-v,0)),u=0;v<y;v++,u++)v in f&&l(n,u,f[v]);return n.length=u,n}})}}]);
//# sourceMappingURL=page-math-arithmetic.167a7a8b.js.map