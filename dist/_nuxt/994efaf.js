(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2],{280:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("b3e520ae",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";n.r(e);n(110),n(18),n(37);var o={props:{text:{type:String,required:!0},href:{type:String,required:!0}},mounted:function(){var link,cursor,t;link=document.querySelectorAll(".hover-this"),cursor=document.querySelector(".cursor"),t=function(t){var span=this.querySelector(".span-btn"),e=t.offsetX,n=t.offsetY,o=e/this.offsetWidth*50-25,r=n/this.offsetHeight*50-25;span.style.transform="translate(".concat(o,"px, ").concat(r,"px)"),"mouseleave"===t.type&&(span.style.transform="")},link.forEach((function(b){return b.addEventListener("mousemove",t)})),link.forEach((function(b){return b.addEventListener("mouseleave",t)})),window.addEventListener("mousemove",(function(t){var e=t.clientX,n=t.clientY;cursor.style.left=e+"px",cursor.style.top=n+"px"}))}},r=(n(282),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"about-cta hoverino .BtnSticky"},[e("a",{staticClass:"hover-this",attrs:{href:t.href,target:"_blank"}},[e("span",{staticClass:"span-btn"},[t._v(t._s(t.text))])])])])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n(280)},283:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".about-cta a{color:#fff;display:block;justify-content:center;-webkit-text-decoration:none;text-decoration:none}.hover-this{transition:all .3s ease}.span-btn{background-color:blue;border-radius:100%;display:inline-block;height:85px;justify-content:center;left:-25%;margin:35px 20% 30px;padding:32px 35px;pointer-events:none;position:relative;top:-25%;transition:transform .1s linear;width:150px}",""]),o.locals={},t.exports=o},298:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("61b74402",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";n(298)},309:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,"@media(max-width:768px){.about-container{height:100vh;padding:0 10%;text-align:left}.about-container p{font-size:1.5em!important;line-height:1.2em;padding:7px 0!important}}.about-container{align-items:center;background-color:#000;color:#fff;display:flex;flex-direction:column;height:100vh;justify-content:center;overflow:hidden;width:100%}.about-container .about-txt-line{margin-top:20px;overflow:hidden}.about-container .about-txt-line p{font-size:1.5em;line-height:1.2em;overflow:hidden}",""]),o.locals={},t.exports=o},330:function(t,e,n){"use strict";n.r(e);var o={mounted:function(){gsap.timeline().from(".about-txt-line p",{duration:1,delay:0,y:200,skewY:20,stagger:{amount:.5}}),gsap.from(".about-cta",2,{y:"200",opacity:0,ease:Expo.easeInOut,delay:.5,stagger:.08})},components:{BtnSticky:n(281).default}},r=(n(308),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"about-container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("BtnSticky",{attrs:{text:"SAY HI :)",href:"mailto:ciao@millimetro.xyz"}})],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"about-txt-line"},[t("p",[this._v("Hi! My name is Millimetro")])])},function(){var t=this._self._c;return t("div",{staticClass:"about-txt-line"},[t("p",[this._v("I am designer based in Italy")])])},function(){var t=this._self._c;return t("div",{staticClass:"about-txt-line"},[t("p",[this._v("I'm in love with motion design, 3D and cool websites")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BtnSticky:n(281).default})}}]);