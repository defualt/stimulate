!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("stimulate",[],e):"object"==typeof exports?exports.stimulate=e():t.stimulate=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/assets/",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),n(2),n(6);var r=n(8),o=i(r),a=n(15),s=i(a),u=n(17),l=n(23),c=i(l),p=r.easings.spring();(0,u.ready)(function(){var t=(0,u.setupEl)({tag:"div",className:"ball",xy:u.demoCoords.start}),e=(0,o["default"])({duration:1e3,usePersistedSettings:!0,from:5,to:95,easing:c["default"].sineOut,aspects:{x:{easing:c["default"].sineOut,from:u.demoCoords.start.x,to:u.demoCoords.end.x},y:{easing:p,from:u.demoCoords.start.y,to:u.demoCoords.end.y,aspects:{asdf:{frame:function(){}}}}},frame:function(){var e={x:this.progressAt("x"),y:this.progressAt("y")};t.update({xy:e})},onComplete:function(){}});(0,s["default"])(t,e)}),e["default"]=null},function(t,e,n){"use strict";var i=n(3);"string"==typeof i&&(i=[[t.id,i,""]]);n(5)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,"body{background:#eee}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=d[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(l(i.parts[o],e));d[i.id]={id:i.id,refs:1,parts:a}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],a=r[1],s=r[2],u=r[3],l={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(l):e.push(n[o]={id:o,parts:[l]})}return e}function o(t,e){var n=m(),i=x[x.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function l(t,e){var n,i,r;if(e.singleton){var o=y++;n=v||(v=s(e)),i=c.bind(null,n,o,!1),r=c.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),i=f.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),i=p.bind(null,n),r=function(){a(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function c(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var d={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,x=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=g()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return i(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=d[s.id];u.refs--,o.push(u)}if(t){var l=r(t);i(l,e)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";var i=n(7);"string"==typeof i&&(i=[[t.id,i,""]]);n(5)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".ball{width:20px;height:20px;background:blue;border-radius:10px;position:absolute;z-index:2;top:0;left:0}.ball--ghost{background:#add8e6;z-index:1}.demo{border:2px solid #000;width:600px;position:relative}.demo label{padding-left:20px;margin-bottom:1em}.demo button,.demo label{height:2em}.demo input{height:1em}.demo button,.demo input,.demo label{display:inline-block;height:40px;vertical-align:top;font-size:16px;line-height:2em}.stage{border-bottom:2px solid #000;height:400px;width:600px;position:relative}","",{version:3,sources:["/./src/demo/src/demo/file.scss"],names:[],mappings:"AAUA,MACC,WACA,YACA,gBACA,mBACA,kBACA,UACA,MACA,MAAO,CARR,aAUE,mBACA,SAAU,CACV,MAID,sBACA,YACA,iBAAkB,CAHnB,YAME,kBACA,iBAAmB,CAPrB,yBAUE,UAAY,CAVd,YAaE,UAAY,CAbd,qCAgBE,qBACA,YACA,mBACA,eACA,eAAiB,CACjB,OAGD,6BACA,aACA,YACA,iBAAkB,CAClB",file:"file.scss",sourcesContent:['$asdf: 5px;\n@import "./cssJsSharedConstants.json";\n\nbody{\n\tdiv {\n\t\t// border: map-get($a,b)+px solid orange;\n\t}\n}\n\n\n.ball{\n\twidth: $ballDiameter+px;\n\theight: $ballDiameter+px;\n\tbackground: blue;\n\tborder-radius: ($ballDiameter/2)+px;\n\tposition: absolute;\n\tz-index:2;\n\ttop:0;\n\tleft:0;\n\t&--ghost {\n\t\tbackground: lightBlue;\n\t\tz-index:1;\n\t}\n}\n\n.demo{\n\tborder: 2px solid black;\n\twidth: $demoWidth+px;\n\tposition:relative;\n\n\tlabel {\n\t\tpadding-left:20px;\n\t\tmargin-bottom: 1em;\n\t}\n\tlabel, button{\n\t\theight: 2em;\n\t}\n\tinput {\n\t\theight: 1em;\n\t}\n\tinput, label, button{\n\t\tdisplay: inline-block;\n\t\theight: 40px;\n\t\tvertical-align: top;\n\t\tfont-size: 16px;\n\t\tline-height: 2em;\n\t}\n}\n.stage{\n\tborder-bottom: 2px solid black;\n\theight: $demoHeight+px;\n\twidth: $demoWidth+px;\n\tposition:relative;\n}'],sourceRoot:"webpack://"}])},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.easings=e.stimulate=e.raf=void 0;var r=n(9),o=i(r),a=n(14),s=i(a);e.raf=r.raf,e.stimulate=o["default"],e.easings=s["default"],e["default"]=o["default"]},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){return c["default"].raf.apply(c["default"],arguments)}function a(){return c["default"].caf.apply(c["default"],arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.caf=e.raf=e.StimulationAspect=e.stimulate=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=n(10),c=i(l),p=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?"root":arguments[1],i=arguments[2];r(this,t),this.parent=i,this.debug=n,this.options=e,this.init()}return u(t,[{key:"init",value:function(e){var n=this;this.aspects={},this.persistedSettings||(this.persistedSettings={}),this.inheritableDefaults={duration:1e3,delay:0,delayEveryLoop:!1,loop:!1,skipZeroFrame:!0,endless:!1,reverse:!1,usePersistedSettings:!1},this.defaultSettings={delayAddsParentDelay:!1,from:0,to:1,easing:null,aspects:this.aspects,frame:null,chainedStop:!0},this.settings=s({},this.defaultSettings,this.options),this.lookupSetting("usePersistedSettings")&&Object.assign(this.settings,this.persistedSettings),this.aspects=this.settings.aspects,this.parent?this.aspectTree=this.parent.aspectTree:this.aspectTree=this;var i=!!this.lookupSetting("reverse");this.previousReverseSetting=i;var r=this.getProgressDefault(i);this.progress?Object.assign(this.progress,r):(this.progress=r,this.progress.aspects={}),this.currentLoopCount=1,this.lastDelaySettingWhileDelaying=null,this.running=!0,this.nextRafId=null,this.timestamps={},c["default"].makeStamp("start"),this.timestamps.start=c["default"].stamps.start,this.timestamps.recentRaf=null,this.iterateAspectNames(function(i){e?n.aspects[i].init(!0):(n.aspects[i]=new t(s({},n.settings.aspects[i]),i,n),n.progress.aspects[i]=n.aspects[i].progress)});var o=this.lookupSetting("skipZeroFrame");this.recurse(!o)}},{key:"getCumulativeDelay",value:function(){var t=this.lookupSetting("delay");return this.parent&&this.settings.delayAddsParentDelay&&(t+=this.parent.getCumulativeDelay()),t}},{key:"updateSettings",value:function(t){return this.lookupSetting("usePersistedSettings")&&Object.assign(this.persistedSettings,t),Object.assign(this.settings,t),this}},{key:"lookupSetting",value:function(t){return"undefined"!=typeof this.settings[t]&&"inherit"!==this.settings[t]?this.settings[t]:this.parent?this.parent.lookupSetting(t):this.inheritableDefaults[t]}},{key:"iterateAspectNames",value:function(t){this.settings.aspectNames=Object.keys(this.settings.aspects),this.settings.aspectNames.forEach(function(e){t(e)})}},{key:"getProgressDefault",value:function(t){return t?{ratioCompleted:1,easedRatioCompleted:1,tweened:this.settings.to,easedTweened:this.settings.to}:{ratioCompleted:0,easedRatioCompleted:0,tweened:this.settings.from,easedTweened:this.settings.from}}},{key:"getTween",value:function(t,e,n){return t+n*(e-t)}},{key:"calculateRatio",value:function(t){var e=t.start+t.delay,n=t.later-e,i=n/t.duration;return i}},{key:"recurse",value:function(t,e){var n=this;this.running&&(this.nextRafId=c["default"].raf(function(){if(n.running){n.timestamps.recentRaf=c["default"].stamps.raf,t&&(n.timestamps.start=n.timestamps.recentRaf);var i=!!n.lookupSetting("reverse"),r=i?-1:1,o=n.previousReverseSetting!==i;n.previousReverseSetting=i,e&&Object.assign(n.progress,n.getProgressDefault(i));var a=0;a=null!==n.lastDelaySettingWhileDelaying?n.lastDelaySettingWhileDelaying:n.getCumulativeDelay();var s=n.lookupSetting("duration"),u=n.calculateRatio({start:n.timestamps.start,later:n.timestamps.recentRaf,delay:a,duration:s}),l=n.lookupSetting("delayEveryLoop");if(u>0&&u<1&&null===n.lastDelaySettingWhileDelaying&&(n.lastDelaySettingWhileDelaying=a,(!n.lookupSetting("skipZeroFrame")&&a&&n.currentLoopCount<=1||a&&l&&n.currentLoopCount>1)&&(n.timestamps.start=n.timestamps.recentRaf-a,u=n.calculateRatio({start:n.timestamps.start,later:n.timestamps.recentRaf,delay:a,duration:s}))),o){null===n.lastDelaySettingWhileDelaying&&(n.currentLoopCount--,n.progress.ratioCompleted=-r*(1+(-r*n.progress.ratioCompleted+a/s)));var p=n.progress.ratioCompleted;i&&(p=1-n.progress.ratioCompleted);var f=p*s,d=n.timestamps.recentRaf-f;n.timestamps.start=d-a,u=n.calculateRatio({start:n.timestamps.start,later:n.timestamps.recentRaf,delay:a,duration:s})}i&&(u=1-u);var h=n.lookupSetting("loop"),g=1,m=u<g,v=n.settings.from,y=n.settings.to;i&&(g=0,m=u>g);var x=!1,b=!1,C=!1,w=n.progress;if(w.ratioCompleted=u,m||!s||n.lookupSetting("endless"))n.settings.easing?w.easedRatioCompleted=n.settings.easing(w.ratioCompleted):w.easedRatioCompleted=w.ratioCompleted,w.tweened=n.getTween(v,y,w.ratioCompleted),w.easedTweened=n.getTween(v,y,w.easedRatioCompleted);else{var A=h===!0||h&&n.currentLoopCount<h;A&&!l?(w.ratioCompleted=-r+u,n.timestamps.start=n.timestamps.start+s,n.settings.easing?w.easedRatioCompleted=n.settings.easing(w.ratioCompleted):w.easedRatioCompleted=w.ratioCompleted,w.tweened=n.getTween(v,y,w.ratioCompleted),w.easedTweened=n.getTween(v,y,w.easedRatioCompleted),b=!0):(w.ratioCompleted=g,w.easedRatioCompleted=g,w.tweened=y,w.easedTweened=y,i&&(w.tweened=v,w.easedTweened=v)),A?(n.currentLoopCount++,C=!b,n.lastDelaySettingWhileDelaying=null):x=!0}var S=n.progress.ratioCompleted>=0;if(i&&(S=n.progress.ratioCompleted<=1),n.settings.frame&&S){var k=n.settings.frame.apply(n,[n.progress]);Object.assign(n.progress,k)}x?(n.running=!1,n.settings.onComplete&&n.settings.onComplete.apply(n,[n.progress])):n.recurse(C,C)}}))}},{key:"resetAll",value:function(){return this.stop(!0),this.init(!0),this}},{key:"stop",value:function(t){var e=this;return this.running=!1,c["default"].caf(this.nextRafId),this.settings.onStop&&(t||this.settings.onStop.apply(this,[this.progress])),this.iterateAspectNames(function(n){var i=e.aspects[n];i.settings.chainedStop&&e.aspects[n].stop(t)}),this}},{key:"resume",value:function(){var t=this;if(!this.running){c["default"].makeStamp("start");var e=this.lookupSetting("duration"),n=this.lookupSetting("reverse"),i=this.progress.ratioCompleted*e;n&&(i=(1-this.progress.ratioCompleted)*e),this.lastDelaySettingWhileDelaying&&(i+=this.lastDelaySettingWhileDelaying),this.timestamps.start=c["default"].stamps.start-i,this.timestamps.recentRaf=null,this.running=!0,this.iterateAspectNames(function(e){t.aspects[e].resume()}),this.recurse()}return this}},{key:"birthAspect",value:function(e,n){return this.aspects[e]&&this.aspects[e].stop(),this.aspects[e]=new t(s({},n),e,this),this.aspects[e]}},{key:"progressAt",value:function(t){var e=t.split("."),n=e[e.length-1];"undefined"==typeof this.progress[n]&&(n="easedTweened",e.push(n));var i=this.aspectTree;if(t)try{e.forEach(function(t){i=t!==n?i.aspects[t]:i.progress[t]})}catch(r){throw new Error("Error: You specified an invalid aspect path for .progressAt().")}else i=i.progress[n];return i}},{key:"aspectAt",value:function(t){var e=t.split("."),n=this.aspectTree;if(t)try{e.forEach(function(t){n=n.aspects[t]})}catch(i){throw new Error("Error: You specified an invalid aspect path for .aspectAt().")}return n}}]),t}(),f=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return new(Function.prototype.bind.apply(p,[null].concat(e)))};e.stimulate=f,e.StimulationAspect=p,e.raf=o,e.caf=a,e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.sharedTiming=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(11),s=i(a),u=function(){function t(){r(this,t),this.running={count:0,limit:0},this.stamps={start:null,raf:null},this.rafIdRegistry={}}return o(t,[{key:"makeStamp",value:function(t,e){return this.stamps[t]&&!e||(this.stamps[t]=Date.now()),this.stamps[t]}},{key:"raf",value:function(t){var e=this;this.running.count?this.running.count++:this.running.count=1;var n=(0,s["default"])(function(){delete e.rafIdRegistry[n],e.stamps.start=null,e.running.limit||(e.running.limit=e.running.count,e.makeStamp("raf",!0),e.running.count=0),e.running.limit--,t()});return this.rafIdRegistry[n]=!0,n}},{key:"caf",value:function(t){t&&this.rafIdRegistry[t]&&((0,a.cancel)(t),this.stamps.start=null,this.running.count--,delete this.rafIdRegistry[t])}}]),t}(),l=new u;e.sharedTiming=l,e["default"]=l},function(t,e,n){(function(e){for(var i=n(12),r="undefined"==typeof window?e:window,o=["moz","webkit"],a="AnimationFrame",s=r["request"+a],u=r["cancel"+a]||r["cancelRequest"+a],l=0;!s&&l<o.length;l++)s=r[o[l]+"Request"+a],u=r[o[l]+"Cancel"+a]||r[o[l]+"CancelRequest"+a];if(!s||!u){var c=0,p=0,f=[],d=1e3/60;s=function(t){if(0===f.length){var e=i(),n=Math.max(0,d-(e-c));c=n+e,setTimeout(function(){var t=f.slice(0);f.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return f.push({handle:++p,callback:t,cancelled:!1}),p},u=function(t){for(var e=0;e<f.length;e++)f[e].handle===t&&(f[e].cancelled=!0)}}t.exports=function(t){return s.call(r,t)},t.exports.cancel=function(){u.apply(r,arguments)},t.exports.polyfill=function(){r.requestAnimationFrame=s,r.cancelAnimationFrame=u}}).call(e,function(){return this}())},function(t,e,n){(function(e){(function(){var n,i,r;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-r)/1e6},i=e.hrtime,n=function(){var t;return t=i(),1e9*t[0]+t[1]},r=n()):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(e,n(13))},function(t,e){function n(t){return u===setTimeout?setTimeout(t,0):u.call(null,t,0)}function i(t){l===clearTimeout?clearTimeout(t):l.call(null,t)}function r(){d&&p&&(d=!1,p.length?f=p.concat(f):h=-1,f.length&&o())}function o(){if(!d){var t=n(r);d=!0;for(var e=f.length;e;){for(p=f,f=[];++h<e;)p&&p[h].run();h=-1,e=f.length}p=null,d=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function s(){}var u,l,c=t.exports={};!function(){try{u=setTimeout}catch(t){u=function(){throw new Error("setTimeout is not defined")}}try{l=clearTimeout}catch(t){l=function(){throw new Error("clearTimeout is not defined")}}}();var p,f=[],d=!1,h=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new a(t,e)),1!==f.length||d||n(o)},a.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=s,c.addListener=s,c.once=s,c.off=s,c.removeListener=s,c.removeAllListeners=s,c.emit=s,c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n,i,r;i=[];for(n in e)r=e[n],i.push(null!=t[n]?t[n]:t[n]=r);return i},i={spring:{frequency:300,friction:200,anticipationSize:0,anticipationStrength:0}},r={};r.spring=function(t){var e,r,o,a,s,u;return null==t&&(t={}),n(t,i.spring),a=Math.max(1,t.frequency/20),s=Math.pow(20,t.friction/100),u=t.anticipationSize/1e3,o=Math.max(0,u),e=function(e){var n,i,r,o,a;return n=.8,o=u/(1-u),a=0,r=(o-n*a)/(o-a),i=(n-r)/o,i*e*t.anticipationStrength/100+r},r=function(t){return Math.pow(s/10,-t)*(1-t)},function(t){var n,i,o,s,l,c,p,f;return c=t/(1-u)-u/(1-u),t<u?(f=u/(1-u)-u/(1-u),p=0/(1-u)-u/(1-u),l=Math.acos(1/e(f)),o=(Math.acos(1/e(p))-l)/(a*-u),n=e):(n=r,l=0,o=1),i=n(c),s=a*(t-u)*o+l,1-i*Math.cos(s)}};var o=r;e.easings=o,e["default"]=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.buildDemoUI=void 0;var i=n(16),r=n(17),o=i.demoDuration,a=e.buildDemoUI=function(t,e){var n=r.demoCoords,a=!1;(0,r.setupEl)({className:"demo",tag:"div",appendTo:document.body,children:[{tag:"div",className:"stage",children:[t]},{tag:"button",text:"Reset",onClick:function(){e.resetAll()}},{tag:"button",text:"Stop all",onClick:function(){e.stop()}},{tag:"button",text:"Resume",onClick:function(){e.resume()}},{tag:"button",text:"Stop X",onClick:function(){e.aspects.x.stop()}},{tag:"button",text:"Reverse",onClick:function(){a=!a,e.updateSettings({reverse:a})}},{tag:"label",text:"Loop:",children:[{tag:"input",onChange:function(t){e.updateSettings({loop:t.target.checked}),!e.running&&t.target.checked&&e.resetAll()},attrs:{type:"checkbox"}}]},{tag:"hr"},{tag:"label",text:"Duration:",children:[{tag:"input",onInput:function(t){e.updateSettings({duration:+t.target.value})},attrs:{type:"range",min:1,max:3e3,value:o}}]},{tag:"label",text:"Delay:",children:[{tag:"input",onInput:function(t){e.updateSettings({delay:+t.target.value})},attrs:{type:"range",min:0,max:1e3,value:0}}]},{tag:"hr"},{tag:"label",text:"From X:",children:[{tag:"input",onInput:function(t){e.aspects.x.updateSettings({from:+t.target.value})},attrs:{type:"range",min:0,max:i.demoWidth-i.ballDiameter,value:n.start.x}}]},{tag:"label",text:"To X:",children:[{tag:"input",onInput:function(t){e.aspects.x.updateSettings({to:+t.target.value})},attrs:{type:"range",min:0,max:i.demoWidth-i.ballDiameter,value:n.end.x}}]},{tag:"hr"},{tag:"label",text:"From Y:",children:[{tag:"input",onInput:function(t){e.aspects.y.updateSettings({from:+t.target.value})},attrs:{type:"range",min:0,max:i.demoHeight-i.ballDiameter,value:n.start.y}}]},{tag:"label",text:"To Y:",children:[{tag:"input",onInput:function(t){e.aspects.y.updateSettings({to:+t.target.value})},attrs:{type:"range",min:0,max:i.demoHeight-i.ballDiameter,value:n.end.y}}]}]})};e["default"]=a},function(t,e){"use strict";t.exports={qwer:20,a:{b:2},demoHeight:400,demoWidth:600,ballDiameter:20,demoDuration:3e3}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.setupEl=e.demoCoords=e.ready=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=n(16),a=n(18),s=i(a),u=(e.ready=function(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},function(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?0:arguments[2];return"translate3d("+t+"px,"+e+"px,"+n+"px)"}),l=function(t,e){var n=(0,s["default"])({transform:u(e.x,e.y,0)});Object.assign(t.style,n)};e.demoCoords={start:{x:0,y:0},end:{x:o.demoWidth-o.ballDiameter,y:o.demoHeight-o.ballDiameter}},e.setupEl=function c(t){var e=t.el;return t.tag&&(e=document.createElement(t.tag)),e||(e=document.createElement("div")),"undefined"!=typeof t.text&&(e.textContent=t.text),t.className&&(e.className=t.className),t.xy&&l(e,t.xy),t.onClick&&e.addEventListener("click",t.onClick),t.onChange&&e.addEventListener("change",t.onChange),t.onInput&&e.addEventListener("input",t.onInput),t.attrs&&Object.keys(t.attrs).forEach(function(n){e.setAttribute(n,t.attrs[n])}),t.appendTo&&t.appendTo.appendChild(e),t.children&&t.children.forEach(function(t){t.el?e.appendChild(t.el):c(r({},t,{appendTo:e}))}),{el:e,update:function(n){c(r({xy:t.xy},n,{el:e}))}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t){return t.replace(/\W+/g,"-").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()}function o(t){return"object"==typeof t&&t&&Object.keys(t).forEach(function(e){var n=e;if("object"==typeof t[e]&&t[e])t[e]=o(t[e]);else if(l["default"].indexOf(e)!==-1&&!(0,d["default"])(r(e))){var i=t[e];n=s["default"].js+e.charAt(0).toUpperCase()+e.slice(1),delete t[e],t[n]=i}"display"!==n||"flex"!==t[n]||(0,d["default"])("display","flex")||(t[n]="ms"===s["default"]?"-ms-flexbox":s["default"].css+"flex"),"transition"===e&&p["default"].forEach(function(e){var i=r(e);if(!(0,d["default"])(i)){var o=new RegExp(i,"g");t[n]=t[n].replace(o,s["default"].css+i)}})}),t}Object.defineProperty(e,"__esModule",{value:!0});var a=n(19),s=i(a),u=n(20),l=i(u),c=n(21),p=i(c),f=n(22),d=i(f);e["default"]=o,t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=window.getComputedStyle(document.documentElement,""),i=Array.prototype.slice.call(n).join("").match(/-(moz|webkit|ms)-/)[1]||""===n.OLink&&["","o"],r={css:"-"+i+"-",js:i};"ms"!==r.js&&(r.js=r.js.charAt(0).toUpperCase()+r.js.slice(1)),e["default"]=r,t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=["alignContent","alignItems","alignSelf","animation","animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction","appearance","aspectRatio","backfaceVisibility","backgroundClip","borderImage","borderImageSlice","boxShadow","columnCount","columnFill","columnGap","columnRule","columnRuleColor","columnRuleStyle","columnRuleWidth","columnSpan","columnWidth","columns","flex","flexBasis","flexDirection","flexFlow","flexGrow","flexShrink","flexWrap","fontFeatureSettings","fontKearning","fontVariantLigatures","justifyContent","grid","gridArea","gridAutoColumns","gridAutoFlow","gridAutoRows","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","gridTemplate","gridTemplateAreas","gridTemplateColumns","gridTemplateRows","hyphens","lineBreak","perspective","perspectiveOrigin","perspectiveOriginX","perspectiveOriginY","rubyPosition","scrollSnapCoordinate","scrollSnapDestination","scrollSnapPoints","scrollSnapPointsX","scrollSnapPointsY","scrollSnapType","tabSize","textDecoration","textDecorationColor","textDecorationLine","textDecorationStyle","textOrientation","textSizeAdjust","transform","transition","transformOrigin","transformOriginX","transformOriginY","transformOriginZ","transformStyle","transitionProperty","transitionDuration","transitionTimingFunction","transitionDelay","userModify","userSelect"],t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=["columnCount","columnGap","columnRule","columnRuleColor","columnRuleWidth","columns","flex","flexBasis","flexGrow","flexShrink","order","perspective","perspectiveOrigin","perspectiveOriginX","perspectiveOriginY","scrollSnapCoordinate","scrollSnapDirection","textDecoration","textDecorationColor","transform","transformOrigin","transformOriginX","transformOriginY","transformOriginZ","transformStyle"],t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i,r=document.createElement("div"),o=/-([a-z]|[0-9])/gi;e["default"]=function(t,e){return e=2===arguments.length?e:"inherit","CSS"in window&&"supports"in window.CSS?window.CSS.supports(t,e):"supportsCSS"in window?window.supportsCSS(t,e):(i=t.replace(o,function(t,e){return(e+"").toUpperCase()}),n=i in r.style,r.style.cssText=t+":"+e,n&&""!==r.style[i])},t.exports=e["default"]},function(t,e,n){t.exports={backInOut:n(24),backIn:n(25),backOut:n(26),bounceInOut:n(27),bounceIn:n(29),bounceOut:n(28),circInOut:n(30),circIn:n(31),circOut:n(32),cubicInOut:n(33),cubicIn:n(34),cubicOut:n(35),elasticInOut:n(36),elasticIn:n(37),elasticOut:n(38),expoInOut:n(39),expoIn:n(40),expoOut:n(41),linear:n(42),quadInOut:n(43),quadIn:n(44),quadOut:n(45),quartInOut:n(46),quartIn:n(47),quartOut:n(48),quintInOut:n(49),quintIn:n(50),quintOut:n(51),sineInOut:n(52),sineIn:n(53),sineOut:n(54)}},function(t,e){function n(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}t.exports=n},function(t,e){function n(t){var e=1.70158;return t*t*((e+1)*t-e)}t.exports=n},function(t,e){function n(t){var e=1.70158;return--t*t*((e+1)*t+e)+1}t.exports=n},function(t,e,n){function i(t){return t<.5?.5*(1-r(1-2*t)):.5*r(2*t-1)+.5}var r=n(28);t.exports=i},function(t,e){function n(t){var e=4/11,n=8/11,i=.9,r=4356/361,o=35442/1805,a=16061/1805,s=t*t;return t<e?7.5625*s:t<n?9.075*s-9.9*t+3.4:t<i?r*s-o*t+a:10.8*t*t-20.52*t+10.72}t.exports=n},function(t,e,n){function i(t){return 1-r(1-t)}var r=n(28);t.exports=i},function(t,e){function n(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}t.exports=n},function(t,e){function n(t){return 1-Math.sqrt(1-t*t)}t.exports=n},function(t,e){function n(t){return Math.sqrt(1- --t*t)}t.exports=n},function(t,e){function n(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}t.exports=n},function(t,e){function n(t){return t*t*t}t.exports=n},function(t,e){function n(t){var e=t-1;return e*e*e+1}t.exports=n},function(t,e){function n(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}t.exports=n},function(t,e){function n(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}t.exports=n},function(t,e){function n(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}t.exports=n},function(t,e){function n(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}t.exports=n},function(t,e){function n(t){return 0===t?t:Math.pow(2,10*(t-1))}t.exports=n},function(t,e){function n(t){return 1===t?t:1-Math.pow(2,-10*t)}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}t.exports=n},function(t,e){function n(t){return t*t}t.exports=n},function(t,e){function n(t){return-t*(t-2)}t.exports=n},function(t,e){function n(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}t.exports=n},function(t,e){function n(t){return Math.pow(t,4)}t.exports=n},function(t,e){function n(t){return Math.pow(t-1,3)*(1-t)+1}t.exports=n},function(t,e){function n(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}t.exports=n},function(t,e){function n(t){return t*t*t*t*t}t.exports=n},function(t,e){function n(t){return--t*t*t*t*t+1}t.exports=n},function(t,e){function n(t){return-.5*(Math.cos(Math.PI*t)-1)}t.exports=n},function(t,e){function n(t){var e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}t.exports=n},function(t,e){function n(t){return Math.sin(t*Math.PI/2)}t.exports=n}])});
//# sourceMappingURL=index.js.map