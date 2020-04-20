!function(e){var t={};function a(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){a(2),e.exports=a(1)},function(e,t,a){},function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,o=!1,i=void 0;try{for(var n,c=e[Symbol.iterator]();!(r=(n=c.next()).done)&&(a.push(n.value),!t||a.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return a}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}a.r(t);var d=function(){function e(t){var a=t.word,r=t.translation,o=t.image,i=t.audioSrc;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.word=a,this.translation=r,this.image=o,this.audioSrc=i,this.gameMode=document.getElementById("game-mode").checked,this.todos=JSON.parse(localStorage.getItem("todos"))||[]}var t,a,r;return t=e,(a=[{key:"generateMainCard",value:function(){var e="",t=document.createElement("a"),a=this.word.split(" ").join("-");return t.className="main-card",t.setAttribute("href","#".concat(a)),this.image&&(e+='<img class="card-img" src=\'../src/'.concat(this.image,"' alt=\"").concat(this.word,'">')),e+='<h2 class="text-shadow">'.concat(this.word,"</h2>"),t.innerHTML=e,t}},{key:"generateCards",value:function(){var e=document.createElement("div");e.className="flip";var t=document.createElement("div");t.className="front";var a=document.createElement("div");a.className="image-block",a.audio=this.audioSrc,this.image&&(a.style="background-image: url(../src/".concat(this.image,")"));var r=document.createElement("div");r.classList.add("text-block");var o=document.createElement("h2");this.word&&(o.innerHTML=this.word),r.append(o);var i=document.createElement("span");i.style="background-image: url(../src/img/repeat.svg)",r.append(i),t.append(a),t.append(r),e.append(t);var n=document.createElement("div");n.className="back",n.style="background-image: url(../src/".concat(this.image,")");var c=document.createElement("div");c.classList.add("text-block");var d=document.createElement("h2");return d.innerHTML=this.translation,c.append(d),n.append(c),e.append(n),this.gameMode&&(r.style.display="none"),e}},{key:"gameMode",value:function(){return console.log("hi"),this.gameMode}},{key:"checkifwin",value:function(){return this.word}}])&&c(t.prototype,a),r&&c(t,r),e}(),s=[["Action (set A)","Action (set B)","Fruits","Food","Animal (set A)","Animal (set B)","Clothes","Emotions"],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"apple",translation:"яблоко",image:"img/apple.jpg",audioSrc:"audio/apple.mp3"},{word:"banana",translation:"банан",image:"img/banana.jpg",audioSrc:"audio/banana.mp3"},{word:"cherry",translation:"вишня",image:"img/cherry.jpg",audioSrc:"audio/cherry.mp3"},{word:"orange",translation:"апельсин",image:"img/orange.jpg",audioSrc:"audio/orange.mp3"},{word:"pear",translation:"груша",image:"img/pear.jpg",audioSrc:"audio/pear.mp3"},{word:"strawberry",translation:"клубинка",image:"img/strawberry.jpg",audioSrc:"audio/strawberry.mp3"},{word:"pineapple",translation:"ананас",image:"img/pineapple.jpg",audioSrc:"audio/pineapple.mp3"},{word:"watermelon",translation:"арбуз",image:"img/watermelon.jpg",audioSrc:"audio/watermelon.mp3"}],[{word:"soup",translation:"суп",image:"img/soup.jpg",audioSrc:"audio/soup.mp3"},{word:"bread",translation:"хлеб",image:"img/bread.jpg",audioSrc:"audio/bread.mp3"},{word:"meat",translation:"мясо",image:"img/meat.jpg",audioSrc:"audio/meat.mp3"},{word:"pasta",translation:"макароны",image:"img/pasta.jpg",audioSrc:"audio/pasta.mp3"},{word:"pizza",translation:"пицца",image:"img/pizza.jpg",audioSrc:"audio/pizza.mp3"},{word:"porridge",translation:"каша",image:"img/porridge.jpg",audioSrc:"audio/porridge.mp3"},{word:"potato",translation:"картошка",image:"img/potato.jpg",audioSrc:"audio/potato.mp3"},{word:"salad",translation:"салат",image:"img/salad.jpg",audioSrc:"audio/salad.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}]];function u(e,t){window.localStorage.setItem(e,JSON.stringify(t))}function l(e){return JSON.parse(window.localStorage.getItem(e))}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){var a=t.image,r=t.audioSrc;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=a,this.audioSrc=r}var t,a,r;return t=e,(a=[{key:"generateRoundResult",value:function(){var e=document.createElement("div");e.classList.add("result-page");var t=document.createElement("div");return t.classList.add("result__image-block"),this.audioSrc&&(t.audio=this.audioSrc),this.image&&(t.style="background-image: url(../src/".concat(this.image,")")),e.append(t),e}}])&&m(t.prototype,a),r&&m(t,r),e}();function p(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=t,this.position=a+1}var t,a,r;return t=e,(a=[{key:"generateStar",value:function(){var e=document.createElement("div");return e.className="result__stars-block",e.innerText=this.position,this.image&&(e.style="background-image: url(../src/".concat(this.image,")")),e}}])&&p(t.prototype,a),r&&p(t,r),e}(),y=document.body,v=document.getElementById("wrapper"),h=document.getElementById("game-mode"),w=document.querySelector(".overlay-content"),S=document.getElementById("openMenu"),b=document.getElementById("closeMenu");S.addEventListener("click",(function(){document.querySelector("#navbar").style.width="100%",document.querySelectorAll(".open")[0].style.opacity=0})),b.addEventListener("click",(function(){document.querySelector("#navbar").style.width="0",document.querySelectorAll(".open")[0].style.opacity=1})),document.getElementById("navbar").addEventListener("click",(function(){document.querySelector("#navbar").style.width="0",document.querySelectorAll(".open")[0].style.opacity=1}));var j=function(){return h.checked?"PLAY":"TRAIN"};"PLAY"===j()?y.classList.add("play"):y.classList.add("train");var k=function(e){var t=new Audio(e);return t.preload="auto",t.play()},E=function(e){if(e.target.closest(".image-block")){var t="../src/".concat(e.target.closest(".image-block").audio);k(t)}};var A=function(){var e=[];return document.querySelectorAll(".image-block").forEach((function(t){e.push(t.audio)})),function(e){for(var t=e,a=t.length-1;a>0;a-=1){var r=Math.floor(Math.random()*(a+1)),o=[t[r],t[a]];t[a]=o[0],t[r]=o[1]}}(e),e},L=function(){var e=document.getElementById("cards-content");return e.innerHTML="",e},T=function(e){var t=[];return s[e].forEach((function(e){t.push(new d(e))})),document.querySelector(".content").addEventListener("click",(function(e){if(e.target.closest("span")){var t=e.target.closest(".flip"),a=e.target.closest(".flip").firstChild,r=e.target.closest(".flip").lastChild;a.style.transform="rotateY(180deg)",a.style.opacity="0",r.style.opacity="1",r.style.transform="rotateY(0deg)",t.addEventListener("mouseleave",(function(){r.style.opacity="0",r.style.transform="rotateY(-180deg)",a.style.transform="rotateY(0deg)",a.style.opacity="1"}))}})),t},I=function(){var e=function(e,t){var a,i=null;try{i=document.createElement(e)}catch(e){throw new Error("Unable to create HTMLElement! Give a proper tag name")}t&&(a=i.classList).add.apply(a,o(t.split(" ")));for(var n=arguments.length,c=new Array(n>2?n-2:0),d=2;d<n;d++)c[d-2]=arguments[d];return c.length&&c.forEach((function(e){var t=r(e,2),a=t[0],o=t[1];""===o&&i.setAttribute(a,""),a.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)?i.setAttribute(a,o):i.dataset[a]=o})),i}("button","start-game start",["id","start-game"]);return e.innerText="Start Game",e},q=function(){document.getElementById("start-game")&&document.getElementById("start-game").remove()},M=function(){var e=document.querySelector(".stars-block");return e.innerHTML="",e},O=function(e){var t=l("answersHistoryArray");"RIGHT"===e?t.push("RIGHT"):t.push("WRONG"),u("answersHistoryArray",t),function(){for(var e=M(),t=l("answersHistoryArray"),a=[],r=0;r<t.length;r+=1){var o=r;if("RIGHT"===t[r]){var i=new f("img/star-win.svg",o);a.push(i)}else{var n=new f("img/star.svg",o);a.push(n)}}a.forEach((function(t){var a=t;e.append(a.generateStar())}))}()},x=function(){var e=L();q();var t=l("answersHistoryArray"),a={};t.includes("WRONG")?(a.audioSrc="audio/failure.mp3",a.image="img/failure.png"):(a.audioSrc="audio/success.mp3",a.image="img/smile.png");var r=new g(a).generateRoundResult();e.append(r),function(){for(var e=M(),t=l("answersHistoryArray").filter((function(e){return"WRONG"===e})),a=[],r=0;r<t.length;r+=1){var o=new f("img/star.svg",r);a.push(o)}a.forEach((function(t){var a=t;e.append(a.generateStar())}))}(),setTimeout((function(){k("../src/".concat(a.audioSrc))}),700),setTimeout((function(){document.location.reload(!0)}),4e3)},H=0,G=function(e){if(e.target.closest(".image-block")){var t="../src/".concat(e.target.closest(".image-block").audio),a=l("audioArrayToGuess"),r="../src/".concat(a[H]);t===r?(k("../src/audio/correct.mp3"),O("RIGHT"),8===(H+=1)&&(console.log("End of game"),x()),r="../src/".concat(a[H]),e.target.closest(".image-block").classList.add("right-word"),setTimeout((function(){k("../src/".concat(a[H]))}),1500)):(O("WRONG"),k("../src/audio/error.mp3"))}},N=function(e){var t=document.getElementById("start-game");e.target.classList.remove("start"),e.target.classList.add("repeat"),e.target.innerHTML="",e.target.style="background-image: url(../src/img/repeat.svg)",setTimeout((function(){t.addEventListener("click",(function(){k("../src/".concat(l("audioArrayToGuess")[H]))}))}),1300),function(){var e=document.querySelector(".content");u("answersHistoryArray",[]),k("../src/".concat(l("audioArrayToGuess")[0]));var t=l("audioArrayToGuess");e.addEventListener("click",G),e.currentLevel=t}()},R=function(){q();var e=I();"TRAIN"===j()&&(e.style.display="none"),v.append(e),document.getElementById("start-game").addEventListener("click",N,{once:!0}),u("audioArrayToGuess",A())},B=function(){document.querySelector(".content").addEventListener("click",E)},P=function(){var e=document.querySelectorAll(".main-card"),t=document.querySelectorAll(".front"),a=document.querySelectorAll(".text-block"),r=document.getElementById("start-game");"PLAY"===j()?(y.classList.remove("train"),y.classList.add("play"),document.querySelectorAll(".open")[0].style.color="springgreen",e.forEach((function(e){var t=e;t.style.background="springgreen",t.style.border="5px solid springgreen"})),t.forEach((function(e){var t=e;t.style.background="springgreen",t.style.border="5px solid springgreen"})),a.forEach((function(e){var t=e;t.style.opacity="0",setTimeout((function(){t.style.display="none"}),100)})),null!==r&&(r.style.display="block",setTimeout((function(){r.style.opacity="1"}),0))):(y.classList.remove("play"),y.classList.add("train"),document.querySelectorAll(".open")[0].style.color="salmon",e.forEach((function(e){var t=e;t.style.background="salmon",t.style.border="5px solid salmon"})),t.forEach((function(e){var t=e;t.style.background="salmon",t.style.border="5px solid salmon"})),a.forEach((function(e){var t=e;setTimeout((function(){t.style.opacity="1"}),0),t.style.display="block"})),null!==r&&(r.style.opacity="0",setTimeout((function(){r.style.display="none"}),100)))},C=function(e){var t=L();T(e).forEach((function(e){t.append(e.generateCards())})),R(),"TRAIN"===j()&&B(),P()},_=function(e){w.querySelectorAll("a").forEach((function(e){e.classList.remove("active")})),w.querySelectorAll("a")[e].classList.add("active")},Y=function(){var e=L(),t=function(){for(var e=[],t=1;t<s.length;t+=1)e.push(s[t][0].image);return e}(),a=function(){for(var e=[],t=0;t<s[0].length;t+=1)e.push(s[0][t]);return e}();q();for(var r=0;r<s[0].length;r+=1){var o={};o.word=a[r],o.image=t[r];var i=new d(o).generateMainCard();i.setAttribute("data-id",r+1),e.append(i)}document.querySelector(".content").addEventListener("click",(function(e){if(e.target.closest(".main-card")){var t=e.target.closest(".main-card").getAttribute("data-id");_(t),C(t)}})),P()},z=function(){(H=0,u("audioArrayToGuess",[]),document.querySelector(".right-word"))&&(document.querySelector(".content").removeEventListener("click",G),document.querySelectorAll(".right-word").forEach((function(e){e.classList.remove("right-word")})));document.querySelector(".stars-block")&&M(),document.querySelector(".main-card")?q():R()};w.addEventListener("click",(function(e){if(z(),H=0,M(),e.target.closest("a")){var t=e.target.closest("a").getAttribute("data-id");"0"===t?Y():C(t),_(t)}})),h.addEventListener("change",(function(){var e,t;z(),P(),t=document.querySelector(".content"),"PLAY"===j()?(e=E,t.removeEventListener("click",e)):B()})),window.onload=function(){Y()}}]);