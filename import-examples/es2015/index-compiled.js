/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stimulate = __webpack_require__(1);

	var _stimulate2 = _interopRequireDefault(_stimulate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _stimulate2.default)({
		duration: 1000,
		frame: function frame() {
			console.log(this.progress.ratioCompleted);
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.stimulate = e() : t.stimulate = e();
	}(undefined, function () {
	  return function (t) {
	    function e(r) {
	      if (n[r]) return n[r].exports;var i = n[r] = { exports: {}, id: r, loaded: !1 };return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
	    }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
	  }([function (t, e, n) {
	    t.exports = n(8);
	  },,,,,,,, function (t, e, n) {
	    "use strict";
	    function r(t) {
	      return t && t.__esModule ? t : { "default": t };
	    }Object.defineProperty(e, "__esModule", { value: !0 }), e.caf = e.raf = e.sharedTiming = e.stimulate = void 0;var i = n(9),
	        s = r(i),
	        o = n(10);n(12), e.stimulate = s["default"], e.sharedTiming = o.sharedTiming, e.raf = o.raf, e.caf = o.caf, e["default"] = s["default"];
	  }, function (t, e, n) {
	    "use strict";
	    function r(t) {
	      return t && t.__esModule ? t : { "default": t };
	    }function i(t, e) {
	      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(e, "__esModule", { value: !0 }), e.StimulationAspect = e.stimulate = void 0;var s = Object.assign || function (t) {
	      for (var e = 1; e < arguments.length; e++) {
	        var n = arguments[e];for (var r in n) {
	          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
	        }
	      }return t;
	    },
	        o = function () {
	      function t(t, e) {
	        for (var n = 0; n < e.length; n++) {
	          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	        }
	      }return function (e, n, r) {
	        return n && t(e.prototype, n), r && t(e, r), e;
	      };
	    }(),
	        a = n(10),
	        u = r(a),
	        c = function () {
	      function t(e) {
	        var n = arguments.length <= 1 || void 0 === arguments[1] ? "root" : arguments[1],
	            r = arguments[2];i(this, t), this.parent = r, this.debug = n, this.options = e, this.init();
	      }return o(t, [{ key: "init", value: function value(e) {
	          var n = this;this.aspects = {}, this.persistedSettings || (this.persistedSettings = {}), this.inheritableDefaults = { duration: 1e3, delay: 0, delayEveryLoop: !1, loop: !1, skipZeroFrame: !0, endless: !1, reverse: !1, usePersistedSettings: !1 }, this.defaultSettings = { delayAddsParentDelay: !1, from: 0, to: 1, easing: null, aspects: this.aspects, frame: null, chainedStop: !0 }, this.settings = s({}, this.defaultSettings, this.options), this.lookupSetting("usePersistedSettings") && Object.assign(this.settings, this.persistedSettings), this.aspects = this.settings.aspects, this.parent ? this.aspectTree = this.parent.aspectTree : this.aspectTree = this;var r = !!this.lookupSetting("reverse");this.previousReverseSetting = r;var i = this.getProgressDefault(r);this.progress ? Object.assign(this.progress, i) : (this.progress = i, this.progress.aspects = {}), this.currentLoopCount = 1, this.lastDelaySettingWhileDelaying = null, this.running = !0, this.nextRafId = null, this.timestamps = {}, u["default"].makeStamp("start"), this.timestamps.start = u["default"].stamps.start, this.timestamps.recentRaf = null, this.frameCount = 0, this.iterateAspectNames(function (r) {
	            e ? n.aspects[r].init(!0) : (n.aspects[r] = new t(s({}, n.settings.aspects[r]), r, n), n.progress.aspects[r] = n.aspects[r].progress);
	          });var o = this.lookupSetting("skipZeroFrame");this.recurse(!o);
	        } }, { key: "getCumulativeDelay", value: function value() {
	          var t = this.lookupSetting("delay");return this.parent && this.settings.delayAddsParentDelay && (t += this.parent.getCumulativeDelay()), t;
	        } }, { key: "updateSettings", value: function value(t) {
	          return this.lookupSetting("usePersistedSettings") && Object.assign(this.persistedSettings, t), Object.assign(this.settings, t), this;
	        } }, { key: "lookupSetting", value: function value(t) {
	          return "undefined" != typeof this.settings[t] && "inherit" !== this.settings[t] ? this.settings[t] : this.parent ? this.parent.lookupSetting(t) : this.inheritableDefaults[t];
	        } }, { key: "iterateAspectNames", value: function value(t) {
	          this.settings.aspectNames = Object.keys(this.settings.aspects), this.settings.aspectNames.forEach(function (e) {
	            t(e);
	          });
	        } }, { key: "getProgressDefault", value: function value(t) {
	          return t ? { ratioCompleted: 1, easedRatioCompleted: 1, tweened: this.settings.to, easedTweened: this.settings.to } : { ratioCompleted: 0, easedRatioCompleted: 0, tweened: this.settings.from, easedTweened: this.settings.from };
	        } }, { key: "getTween", value: function value(t, e, n) {
	          return t + n * (e - t);
	        } }, { key: "calculateRatio", value: function value(t) {
	          var e = t.start + t.delay,
	              n = t.later - e,
	              r = n / t.duration;return r;
	        } }, { key: "recurse", value: function value(t, e) {
	          var n = this;this.running && (this.nextRafId = u["default"].raf(function () {
	            if (n.running) {
	              n.timestamps.recentRaf = u["default"].stamps.raf, t && (n.timestamps.start = n.timestamps.recentRaf);var r = !!n.lookupSetting("reverse"),
	                  i = r ? -1 : 1,
	                  s = n.previousReverseSetting !== r,
	                  o = n.lookupSetting("loop");s && (n.currentLoopCount = o + 1 - n.currentLoopCount), n.previousReverseSetting = r, e && Object.assign(n.progress, n.getProgressDefault(r));var a = 0;a = null !== n.lastDelaySettingWhileDelaying ? n.lastDelaySettingWhileDelaying : n.getCumulativeDelay();var c = n.lookupSetting("duration"),
	                  l = n.calculateRatio({ start: n.timestamps.start, later: n.timestamps.recentRaf, delay: a, duration: c }),
	                  f = n.lookupSetting("delayEveryLoop");if (l > 0 && l < 1 && null === n.lastDelaySettingWhileDelaying && (n.lastDelaySettingWhileDelaying = a, (!n.lookupSetting("skipZeroFrame") && a && n.currentLoopCount <= 1 || a && f && n.currentLoopCount > 1) && (n.timestamps.start = n.timestamps.recentRaf - a, l = n.calculateRatio({ start: n.timestamps.start, later: n.timestamps.recentRaf, delay: a, duration: c }))), s) {
	                null === n.lastDelaySettingWhileDelaying && (n.currentLoopCount--, n.progress.ratioCompleted = -i * (1 + (-i * n.progress.ratioCompleted + a / c)));var p = n.progress.ratioCompleted;r && (p = 1 - n.progress.ratioCompleted);var h = p * c,
	                    d = n.timestamps.recentRaf - h;n.timestamps.start = d - a, l = n.calculateRatio({ start: n.timestamps.start, later: n.timestamps.recentRaf, delay: a, duration: c });
	              }r && (l = 1 - l);var g = 1,
	                  m = l < g,
	                  v = n.settings.from,
	                  y = n.settings.to;r && (g = 0, m = l > g);var S = !1,
	                  b = !1,
	                  w = !1,
	                  x = n.progress;if (x.ratioCompleted = l, m || !c || n.lookupSetting("endless")) n.settings.easing ? x.easedRatioCompleted = n.settings.easing(x.ratioCompleted) : x.easedRatioCompleted = x.ratioCompleted, x.tweened = n.getTween(v, y, x.ratioCompleted), x.easedTweened = n.getTween(v, y, x.easedRatioCompleted);else {
	                var k = o === !0 || o && n.currentLoopCount < o;k && !f ? (x.ratioCompleted = -i + l, n.timestamps.start = n.timestamps.start + c, n.settings.easing ? x.easedRatioCompleted = n.settings.easing(x.ratioCompleted) : x.easedRatioCompleted = x.ratioCompleted, x.tweened = n.getTween(v, y, x.ratioCompleted), x.easedTweened = n.getTween(v, y, x.easedRatioCompleted), b = !0) : (x.ratioCompleted = g, x.easedRatioCompleted = g, x.tweened = y, x.easedTweened = y, r && (x.tweened = v, x.easedTweened = v)), k ? (n.currentLoopCount++, w = !b, n.lastDelaySettingWhileDelaying = null) : S = !0;
	              }var C = n.progress.ratioCompleted >= 0;if (r && (C = n.progress.ratioCompleted <= 1), n.settings.frame && C) {
	                var j = n.settings.frame.apply(n, [n.progress]);n.frameCount++, Object.assign(n.progress, j);
	              }S ? (n.running = !1, n.settings.onComplete && n.settings.onComplete.apply(n, [n.progress])) : n.recurse(w, w);
	            }
	          }));
	        } }, { key: "resetAll", value: function value() {
	          return this.stop(!0), this.init(!0), this;
	        } }, { key: "stop", value: function value(t) {
	          var e = this;return this.running = !1, u["default"].caf(this.nextRafId), this.settings.onStop && (t || this.settings.onStop.apply(this, [this.progress])), this.iterateAspectNames(function (n) {
	            var r = e.aspects[n];r.settings.chainedStop && e.aspects[n].stop(t);
	          }), this;
	        } }, { key: "resume", value: function value() {
	          var t = this;if (!this.running) {
	            u["default"].makeStamp("start");var e = this.lookupSetting("duration"),
	                n = this.lookupSetting("reverse"),
	                r = this.progress.ratioCompleted * e;n && (r = (1 - this.progress.ratioCompleted) * e), this.lastDelaySettingWhileDelaying && (r += this.lastDelaySettingWhileDelaying), this.timestamps.start = u["default"].stamps.start - r, this.timestamps.recentRaf = null, this.running = !0, this.iterateAspectNames(function (e) {
	              t.aspects[e].resume();
	            }), this.recurse();
	          }return this;
	        } }, { key: "birthAspect", value: function value(e, n) {
	          return this.aspects[e] && this.aspects[e].stop(), this.aspects[e] = new t(s({}, n), e, this), this.aspects[e];
	        } }, { key: "progressAt", value: function value(t) {
	          var e = t.split("."),
	              n = e[e.length - 1];"undefined" == typeof this.progress[n] && (n = "easedTweened", e.push(n));var r = this.aspectTree;if (t) try {
	            e.forEach(function (t) {
	              r = t !== n ? r.aspects[t] : r.progress[t];
	            });
	          } catch (i) {
	            throw new Error("Error: You specified an invalid aspect path for .progressAt().");
	          } else r = r.progress[n];return r;
	        } }, { key: "aspectAt", value: function value(t) {
	          var e = t.split("."),
	              n = this.aspectTree;if (t) try {
	            e.forEach(function (t) {
	              n = n.aspects[t];
	            });
	          } catch (r) {
	            throw new Error("Error: You specified an invalid aspect path for .aspectAt().");
	          }return n;
	        } }]), t;
	    }(),
	        l = function l() {
	      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
	        e[n] = arguments[n];
	      }return new (Function.prototype.bind.apply(c, [null].concat(e)))();
	    };e.stimulate = l, e.StimulationAspect = c, e["default"] = l;
	  }, function (t, e, n) {
	    "use strict";
	    function r(t) {
	      return t && t.__esModule ? t : { "default": t };
	    }function i(t, e) {
	      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	    }function s() {
	      return f.raf.apply(f, arguments);
	    }function o() {
	      return f.caf.apply(f, arguments);
	    }Object.defineProperty(e, "__esModule", { value: !0 }), e.caf = e.raf = e.sharedTiming = void 0;var a = function () {
	      function t(t, e) {
	        for (var n = 0; n < e.length; n++) {
	          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	        }
	      }return function (e, n, r) {
	        return n && t(e.prototype, n), r && t(e, r), e;
	      };
	    }(),
	        u = n(11),
	        c = r(u),
	        l = function () {
	      function t() {
	        i(this, t), this.running = { count: 0, limit: 0 }, this.stamps = { start: null, raf: null }, this.rafIdRegistry = {};
	      }return a(t, [{ key: "makeStamp", value: function value(t, e) {
	          return this.stamps[t] && !e || (this.stamps[t] = Date.now()), this.stamps[t];
	        } }, { key: "raf", value: function value(t) {
	          var e = this;this.running.count ? this.running.count++ : this.running.count = 1;var n = (0, c["default"])(function () {
	            delete e.rafIdRegistry[n], e.stamps.start = null, e.running.limit || (e.running.limit = e.running.count, e.makeStamp("raf", !0), e.running.count = 0), e.running.limit--, t();
	          });return this.rafIdRegistry[n] = !0, n;
	        } }, { key: "caf", value: function value(t) {
	          t && this.rafIdRegistry[t] && ((0, u.cancel)(t), this.stamps.start = null, this.running.count--, delete this.rafIdRegistry[t]);
	        } }]), t;
	    }(),
	        f = new l();e.sharedTiming = f, e.raf = s, e.caf = o, e["default"] = f;
	  }, function (t, e) {
	    (function (e) {
	      "use strict";
	      for (var n = Date.now, r = "undefined" == typeof window ? e : window, i = ["moz", "webkit"], s = "AnimationFrame", o = r["request" + s], a = r["cancel" + s] || r["cancelRequest" + s], u = 0; !o && u < i.length; u++) {
	        o = r[i[u] + "Request" + s], a = r[i[u] + "Cancel" + s] || r[i[u] + "CancelRequest" + s];
	      }if (!o || !a) {
	        var c = 0,
	            l = 0,
	            f = [],
	            p = 1e3 / 60;o = function o(t) {
	          if (0 === f.length) {
	            var e = n(),
	                r = Math.max(10, p - (e - c));c = r + e, setTimeout(function () {
	              var t = f.slice(0);f.length = 0;for (var e = 0; e < t.length; e++) {
	                if (!t[e].cancelled) try {
	                  t[e].callback(c);
	                } catch (n) {
	                  setTimeout(function () {
	                    throw n;
	                  }, 0);
	                }
	              }
	            }, p);
	          }return f.push({ handle: ++l, callback: t, cancelled: !1 }), l;
	        }, a = function a(t) {
	          for (var e = 0; e < f.length; e++) {
	            f[e].handle === t && (f[e].cancelled = !0);
	          }
	        };
	      }t.exports = function (t) {
	        return o.call(r, t);
	      }, t.exports.cancel = function () {
	        a.apply(r, arguments);
	      }, t.exports.polyfill = function () {
	        r.requestAnimationFrame = o, r.cancelAnimationFrame = a;
	      };
	    }).call(e, function () {
	      return this;
	    }());
	  }, function (t, e, n) {
	    n(13), t.exports = n(16).Object.assign;
	  }, function (t, e, n) {
	    var r = n(14);r(r.S + r.F, "Object", { assign: n(32) });
	  }, function (t, e, n) {
	    var r = n(15),
	        i = n(16),
	        s = n(17),
	        o = n(27),
	        a = n(30),
	        u = "prototype",
	        c = function c(t, e, n) {
	      var l,
	          f,
	          p,
	          h,
	          d = t & c.F,
	          g = t & c.G,
	          m = t & c.S,
	          v = t & c.P,
	          y = t & c.B,
	          S = g ? r : m ? r[e] || (r[e] = {}) : (r[e] || {})[u],
	          b = g ? i : i[e] || (i[e] = {}),
	          w = b[u] || (b[u] = {});g && (n = e);for (l in n) {
	        f = !d && S && void 0 !== S[l], p = (f ? S : n)[l], h = y && f ? a(p, r) : v && "function" == typeof p ? a(Function.call, p) : p, S && o(S, l, p, t & c.U), b[l] != p && s(b, l, h), v && w[l] != p && (w[l] = p);
	      }
	    };r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
	  }, function (t, e) {
	    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
	  }, function (t, e) {
	    var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
	  }, function (t, e, n) {
	    var r = n(18),
	        i = n(26);t.exports = n(22) ? function (t, e, n) {
	      return r.f(t, e, i(1, n));
	    } : function (t, e, n) {
	      return t[e] = n, t;
	    };
	  }, function (t, e, n) {
	    var r = n(19),
	        i = n(21),
	        s = n(25),
	        o = Object.defineProperty;e.f = n(22) ? Object.defineProperty : function (t, e, n) {
	      if (r(t), e = s(e, !0), r(n), i) try {
	        return o(t, e, n);
	      } catch (a) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
	    };
	  }, function (t, e, n) {
	    var r = n(20);t.exports = function (t) {
	      if (!r(t)) throw TypeError(t + " is not an object!");return t;
	    };
	  }, function (t, e) {
	    t.exports = function (t) {
	      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? null !== t : "function" == typeof t;
	    };
	  }, function (t, e, n) {
	    t.exports = !n(22) && !n(23)(function () {
	      return 7 != Object.defineProperty(n(24)("div"), "a", { get: function get() {
	          return 7;
	        } }).a;
	    });
	  }, function (t, e, n) {
	    t.exports = !n(23)(function () {
	      return 7 != Object.defineProperty({}, "a", { get: function get() {
	          return 7;
	        } }).a;
	    });
	  }, function (t, e) {
	    t.exports = function (t) {
	      try {
	        return !!t();
	      } catch (e) {
	        return !0;
	      }
	    };
	  }, function (t, e, n) {
	    var r = n(20),
	        i = n(15).document,
	        s = r(i) && r(i.createElement);t.exports = function (t) {
	      return s ? i.createElement(t) : {};
	    };
	  }, function (t, e, n) {
	    var r = n(20);t.exports = function (t, e) {
	      if (!r(t)) return t;var n, i;if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;throw TypeError("Can't convert object to primitive value");
	    };
	  }, function (t, e) {
	    t.exports = function (t, e) {
	      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
	    };
	  }, function (t, e, n) {
	    var r = n(15),
	        i = n(17),
	        s = n(28),
	        o = n(29)("src"),
	        a = "toString",
	        u = Function[a],
	        c = ("" + u).split(a);n(16).inspectSource = function (t) {
	      return u.call(t);
	    }, (t.exports = function (t, e, n, a) {
	      var u = "function" == typeof n;u && (s(n, "name") || i(n, "name", e)), t[e] !== n && (u && (s(n, o) || i(n, o, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
	    })(Function.prototype, a, function () {
	      return "function" == typeof this && this[o] || u.call(this);
	    });
	  }, function (t, e) {
	    var n = {}.hasOwnProperty;t.exports = function (t, e) {
	      return n.call(t, e);
	    };
	  }, function (t, e) {
	    var n = 0,
	        r = Math.random();t.exports = function (t) {
	      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
	    };
	  }, function (t, e, n) {
	    var r = n(31);t.exports = function (t, e, n) {
	      if (r(t), void 0 === e) return t;switch (n) {case 1:
	          return function (n) {
	            return t.call(e, n);
	          };case 2:
	          return function (n, r) {
	            return t.call(e, n, r);
	          };case 3:
	          return function (n, r, i) {
	            return t.call(e, n, r, i);
	          };}return function () {
	        return t.apply(e, arguments);
	      };
	    };
	  }, function (t, e) {
	    t.exports = function (t) {
	      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
	    };
	  }, function (t, e, n) {
	    "use strict";
	    var r = n(33),
	        i = n(46),
	        s = n(47),
	        o = n(48),
	        a = n(36),
	        u = Object.assign;t.exports = !u || n(23)(function () {
	      var t = {},
	          e = {},
	          n = Symbol(),
	          r = "abcdefghijklmnopqrst";return t[n] = 7, r.split("").forEach(function (t) {
	        e[t] = t;
	      }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r;
	    }) ? function (t, e) {
	      for (var n = o(t), u = arguments.length, c = 1, l = i.f, f = s.f; u > c;) {
	        for (var p, h = a(arguments[c++]), d = l ? r(h).concat(l(h)) : r(h), g = d.length, m = 0; g > m;) {
	          f.call(h, p = d[m++]) && (n[p] = h[p]);
	        }
	      }return n;
	    } : u;
	  }, function (t, e, n) {
	    var r = n(34),
	        i = n(45);t.exports = Object.keys || function (t) {
	      return r(t, i);
	    };
	  }, function (t, e, n) {
	    var r = n(28),
	        i = n(35),
	        s = n(39)(!1),
	        o = n(43)("IE_PROTO");t.exports = function (t, e) {
	      var n,
	          a = i(t),
	          u = 0,
	          c = [];for (n in a) {
	        n != o && r(a, n) && c.push(n);
	      }for (; e.length > u;) {
	        r(a, n = e[u++]) && (~s(c, n) || c.push(n));
	      }return c;
	    };
	  }, function (t, e, n) {
	    var r = n(36),
	        i = n(38);t.exports = function (t) {
	      return r(i(t));
	    };
	  }, function (t, e, n) {
	    var r = n(37);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
	      return "String" == r(t) ? t.split("") : Object(t);
	    };
	  }, function (t, e) {
	    var n = {}.toString;t.exports = function (t) {
	      return n.call(t).slice(8, -1);
	    };
	  }, function (t, e) {
	    t.exports = function (t) {
	      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
	    };
	  }, function (t, e, n) {
	    var r = n(35),
	        i = n(40),
	        s = n(42);t.exports = function (t) {
	      return function (e, n, o) {
	        var a,
	            u = r(e),
	            c = i(u.length),
	            l = s(o, c);if (t && n != n) {
	          for (; c > l;) {
	            if (a = u[l++], a != a) return !0;
	          }
	        } else for (; c > l; l++) {
	          if ((t || l in u) && u[l] === n) return t || l || 0;
	        }return !t && -1;
	      };
	    };
	  }, function (t, e, n) {
	    var r = n(41),
	        i = Math.min;t.exports = function (t) {
	      return t > 0 ? i(r(t), 9007199254740991) : 0;
	    };
	  }, function (t, e) {
	    var n = Math.ceil,
	        r = Math.floor;t.exports = function (t) {
	      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
	    };
	  }, function (t, e, n) {
	    var r = n(41),
	        i = Math.max,
	        s = Math.min;t.exports = function (t, e) {
	      return t = r(t), t < 0 ? i(t + e, 0) : s(t, e);
	    };
	  }, function (t, e, n) {
	    var r = n(44)("keys"),
	        i = n(29);t.exports = function (t) {
	      return r[t] || (r[t] = i(t));
	    };
	  }, function (t, e, n) {
	    var r = n(15),
	        i = "__core-js_shared__",
	        s = r[i] || (r[i] = {});t.exports = function (t) {
	      return s[t] || (s[t] = {});
	    };
	  }, function (t, e) {
	    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
	  }, function (t, e) {
	    e.f = Object.getOwnPropertySymbols;
	  }, function (t, e) {
	    e.f = {}.propertyIsEnumerable;
	  }, function (t, e, n) {
	    var r = n(38);t.exports = function (t) {
	      return Object(r(t));
	    };
	  }]);
	});
	//# sourceMappingURL=stimulate.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }
/******/ ]);