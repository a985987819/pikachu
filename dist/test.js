parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\n/*\n大家好\n今天我来给大家画一个\n皮卡丘！\n*/\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n/*\n首先先画出背景\n*/\nbody{\n    background: #ffe600;\n    min-height: 100vh;\n}\n.skin{\n    display: block;\n    height: 200px;\n}\n/*\n然后画出它的鼻子\n*/\n.nose{\n    border: 10px solid;\n    border-color: black transparent blue transparent;\n    border-bottom: none;\n    width: 10px;\n    height: 5px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    z-index: 1;\n}\n@keyframes wave {\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(15deg);\n    }\n    66%{\n        transform: rotate(-15deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover{\n    transform-origin: 50% 100%;\n    animation: wave 300ms infinite linear;\n}\n\n.yuan{\n    position: absolute;\n    background: black;\n    width: 20px;\n    height: 5px;\n    top: -15px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n}\n/*\n然后换出它的眼睛\n*/\n.eye{\n    border: 2px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    border-radius: 50%;\n    background-color: rgb(46,45,46);\n}\n.eye::before{\n    content: '';\n    border: 2px solid black;\n    background: #fff;\n    display: block;\n    width: 25px;\n    height: 25px;\n    position: relative;\n    left: 9px;\n    top: 1px;\n    border-radius: 50%;\n}\n.eye.left{\n    transform: translateX(-130px);\n}\n.eye.right{\n    transform: translateX(130px);\n}\n/*\n然后是嘴巴\n*/\n.mouth{\n    width: 140px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -70px;\n}\n.mouth .up{\n    position: relative;\n    top: -15px;\n    z-index: 1;\n}\n.mouth .up .lip{\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    border-top-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #ffe600;\n}\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    border-left-color: transparent;\n    transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0;\n    border-right-color: transparent;\n    transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom:0;\n    background: #ffe600;\n}\n.mouth .up .lip.left::before{\n    right: -6px;\n}\n.mouth .up .lip.right::before{\n    left: -6px;\n}\n.mouth .down{\n    height: 160px;\n    position: absolute;\n    top: 12px;\n    width: 200px;\n    margin-left: -30px;\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    border: 2px solid black;\n    width: 75%;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background: rgb(156,0,12);\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -170px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n    background: rgb(255,71,96);\n}\n/*\n最后是圆脸\n*/\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n    border-radius: 50%;\n    background: rgb(255,24,0);\n}\n.face.left{\n    transform: translateX(-200px);\n}\n.face.right{\n    transform: translateX(200px);\n}\n",t=n;exports.default=t;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=t(require("./css.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n,r=document.querySelector("#demo"),u=document.querySelector("#demo2"),o=document.querySelector("#btnPause"),l=document.querySelector("#btnPlay"),a=document.querySelector("#btnSlow"),s=document.querySelector("#btnNormal"),c=document.querySelector("#btnFast"),i=100,d=1,f={init:function(){u.innerText=e.default.substr(0,d),r.innerHTML=e.default.substr(0,d),f.play(),f.bindEvents()},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},bindEvents:function(){for(var e in f.events)if(f.events.hasOwnProperty(e)){var t=f.events[e];document.querySelector(e).onclick=f[t]}},print:function(){(d+=1)>e.default.length?window.clearInterval(n):(r.innerText=e.default.substr(0,d),u.innerHTML=e.default.substr(0,d),r.scrollTop=9999999)},play:function(){n=setInterval(f.print,i)},pause:function(){window.clearInterval(n)},slow:function(){f.pause(),i=300,f.play()},normal:function(){f.pause(),i=100,f.play()},fast:function(){f.pause(),i=2,f.play()}};f.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=/test.js.map