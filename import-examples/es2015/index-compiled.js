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
	    }Object.defineProperty(e, "__esModule", { value: !0 }), e.caf = e.raf = e.sharedTiming = e.easings = e.stimulate = void 0;var i = n(9),
	        s = r(i),
	        a = n(12),
	        o = r(a),
	        u = n(10);n(13), e.stimulate = s["default"], e.easings = o["default"], e.sharedTiming = u.sharedTiming, e.raf = u.raf, e.caf = u.caf, e["default"] = s["default"];
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
	        a = function () {
	      function t(t, e) {
	        for (var n = 0; n < e.length; n++) {
	          var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	        }
	      }return function (e, n, r) {
	        return n && t(e.prototype, n), r && t(e, r), e;
	      };
	    }(),
	        o = n(10),
	        u = r(o),
	        c = function () {
	      function t(e) {
	        var n = arguments.length <= 1 || void 0 === arguments[1] ? "root" : arguments[1],
	            r = arguments[2];i(this, t), this.parent = r, this.debug = n, this.options = e, this.init();
	      }return a(t, [{ key: "init", value: function value(e) {
	          var n = this;this.aspects = {}, this.persistedSettings || (this.persistedSettings = {}), this.inheritableDefaults = { duration: 1e3, delay: 0, delayEveryLoop: !1, loop: !1, skipZeroFrame: !0, endless: !1, reverse: !1, usePersistedSettings: !1 }, this.defaultSettings = { delayAddsParentDelay: !1, from: 0, to: 1, easing: null, aspects: this.aspects, frame: null, chainedStop: !0 }, this.settings = s({}, this.defaultSettings, this.options), this.lookupSetting("usePersistedSettings") && Object.assign(this.settings, this.persistedSettings), this.aspects = this.settings.aspects, this.parent ? this.aspectTree = this.parent.aspectTree : this.aspectTree = this;var r = !!this.lookupSetting("reverse");this.previousReverseSetting = r;var i = this.getProgressDefault(r);this.progress ? Object.assign(this.progress, i) : (this.progress = i, this.progress.aspects = {}), this.currentLoopCount = 1, this.lastDelaySettingWhileDelaying = null, this.running = !0, this.nextRafId = null, this.timestamps = {}, u["default"].makeStamp("start"), this.timestamps.start = u["default"].stamps.start, this.timestamps.recentRaf = null, this.frameCount = 0, this.iterateAspectNames(function (r) {
	            e ? n.aspects[r].init(!0) : (n.aspects[r] = new t(s({}, n.settings.aspects[r]), r, n), n.progress.aspects[r] = n.aspects[r].progress);
	          });var a = this.lookupSetting("skipZeroFrame");this.recurse(!a);
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
	                  s = n.previousReverseSetting !== r;n.previousReverseSetting = r, e && Object.assign(n.progress, n.getProgressDefault(r));var a = 0;a = null !== n.lastDelaySettingWhileDelaying ? n.lastDelaySettingWhileDelaying : n.getCumulativeDelay();var o = n.lookupSetting("duration"),
	                  c = n.calculateRatio({ start: n.timestamps.start, later: n.timestamps.recentRaf, delay: a, duration: o }),
	                  l = n.lookupSetting("delayEveryLoop");if (c > 0 && c < 1 && null === n.lastDelaySettingWhileDelaying && (n.lastDelaySettingWhileDelaying = a, (!n.lookupSetting("skipZeroFrame") && a && n.currentLoopCount <= 1 || a && l && n.currentLoopCount > 1) && (n.timestamps.start = n.timestamps.recentRaf - a, c = n.calculateRatio({ start: n.timestamps.start, later: n.timestamps.recentRaf, delay: a, duration: o }))), s) {
	                null === n.lastDelaySettingWhileDelaying && (n.currentLoopCount--, n.progress.ratioCompleted = -i * (1 + (-i * n.progress.ratioCompleted + a / o)));var f = n.progress.ratioCompleted;r && (f = 1 - n.progress.ratioCompleted);var p = f * o,
	                    h = n.timestamps.recentRaf - p;n.timestamps.start = h - a, c = n.calculateRatio({ start: n.timestamps.start, later: n.timestamps.recentRaf, delay: a, duration: o });
	              }r && (c = 1 - c);var g = n.lookupSetting("loop"),
	                  d = 1,
	                  m = c < d,
	                  v = n.settings.from,
	                  y = n.settings.to;r && (d = 0, m = c > d);var S = !1,
	                  b = !1,
	                  w = !1,
	                  x = n.progress;if (x.ratioCompleted = c, m || !o || n.lookupSetting("endless")) n.settings.easing ? x.easedRatioCompleted = n.settings.easing(x.ratioCompleted) : x.easedRatioCompleted = x.ratioCompleted, x.tweened = n.getTween(v, y, x.ratioCompleted), x.easedTweened = n.getTween(v, y, x.easedRatioCompleted);else {
	                var k = g === !0 || g && n.currentLoopCount < g;k && !l ? (x.ratioCompleted = -i + c, n.timestamps.start = n.timestamps.start + o, n.settings.easing ? x.easedRatioCompleted = n.settings.easing(x.ratioCompleted) : x.easedRatioCompleted = x.ratioCompleted, x.tweened = n.getTween(v, y, x.ratioCompleted), x.easedTweened = n.getTween(v, y, x.easedRatioCompleted), b = !0) : (x.ratioCompleted = d, x.easedRatioCompleted = d, x.tweened = y, x.easedTweened = y, r && (x.tweened = v, x.easedTweened = v)), k ? (n.currentLoopCount++, w = !b, n.lastDelaySettingWhileDelaying = null) : S = !0;
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
	    }function a() {
	      return f.caf.apply(f, arguments);
	    }Object.defineProperty(e, "__esModule", { value: !0 }), e.caf = e.raf = e.sharedTiming = void 0;var o = function () {
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
	      }return o(t, [{ key: "makeStamp", value: function value(t, e) {
	          return this.stamps[t] && !e || (this.stamps[t] = Date.now()), this.stamps[t];
	        } }, { key: "raf", value: function value(t) {
	          var e = this;this.running.count ? this.running.count++ : this.running.count = 1;var n = (0, c["default"])(function () {
	            delete e.rafIdRegistry[n], e.stamps.start = null, e.running.limit || (e.running.limit = e.running.count, e.makeStamp("raf", !0), e.running.count = 0), e.running.limit--, t();
	          });return this.rafIdRegistry[n] = !0, n;
	        } }, { key: "caf", value: function value(t) {
	          t && this.rafIdRegistry[t] && ((0, u.cancel)(t), this.stamps.start = null, this.running.count--, delete this.rafIdRegistry[t]);
	        } }]), t;
	    }(),
	        f = new l();e.sharedTiming = f, e.raf = s, e.caf = a, e["default"] = f;
	  }, function (t, e) {
	    (function (e) {
	      "use strict";
	      for (var n = Date.now, r = "undefined" == typeof window ? e : window, i = ["moz", "webkit"], s = "AnimationFrame", a = r["request" + s], o = r["cancel" + s] || r["cancelRequest" + s], u = 0; !a && u < i.length; u++) {
	        a = r[i[u] + "Request" + s], o = r[i[u] + "Cancel" + s] || r[i[u] + "CancelRequest" + s];
	      }if (!a || !o) {
	        var c = 0,
	            l = 0,
	            f = [],
	            p = 1e3 / 60;a = function a(t) {
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
	        }, o = function o(t) {
	          for (var e = 0; e < f.length; e++) {
	            f[e].handle === t && (f[e].cancelled = !0);
	          }
	        };
	      }t.exports = function (t) {
	        return a.call(r, t);
	      }, t.exports.cancel = function () {
	        o.apply(r, arguments);
	      }, t.exports.polyfill = function () {
	        r.requestAnimationFrame = a, r.cancelAnimationFrame = o;
	      };
	    }).call(e, function () {
	      return this;
	    }());
	  }, function (t, e) {
	    "use strict";
	    Object.defineProperty(e, "__esModule", { value: !0 });var n = function n(t, e) {
	      var n, r, i;r = [];for (n in e) {
	        i = e[n], r.push(null != t[n] ? t[n] : t[n] = i);
	      }return r;
	    },
	        r = { spring: { frequency: 300, friction: 200, anticipationSize: 0, anticipationStrength: 0 } },
	        i = {};i.spring = function (t) {
	      var e, i, s, a, o, u;return null == t && (t = {}), n(t, r.spring), a = Math.max(1, t.frequency / 20), o = Math.pow(20, t.friction / 100), u = t.anticipationSize / 1e3, s = Math.max(0, u), e = function e(_e) {
	        var n, r, i, s, a;return n = .8, s = u / (1 - u), a = 0, i = (s - n * a) / (s - a), r = (n - i) / s, r * _e * t.anticipationStrength / 100 + i;
	      }, i = function i(t) {
	        return Math.pow(o / 10, -t) * (1 - t);
	      }, function (t) {
	        var n, r, s, o, c, l, f, p;return l = t / (1 - u) - u / (1 - u), t < u ? (p = u / (1 - u) - u / (1 - u), f = 0 / (1 - u) - u / (1 - u), c = Math.acos(1 / e(p)), s = (Math.acos(1 / e(f)) - c) / (a * -u), n = e) : (n = i, c = 0, s = 1), r = n(l), o = a * (t - u) * s + c, 1 - r * Math.cos(o);
	      };
	    };var s = i;e.easings = s, e["default"] = s;
	  }, function (t, e, n) {
	    n(14), t.exports = n(17).Object.assign;
	  }, function (t, e, n) {
	    var r = n(15);r(r.S + r.F, "Object", { assign: n(33) });
	  }, function (t, e, n) {
	    var r = n(16),
	        i = n(17),
	        s = n(18),
	        a = n(28),
	        o = n(31),
	        u = "prototype",
	        c = function c(t, e, n) {
	      var l,
	          f,
	          p,
	          h,
	          g = t & c.F,
	          d = t & c.G,
	          m = t & c.S,
	          v = t & c.P,
	          y = t & c.B,
	          S = d ? r : m ? r[e] || (r[e] = {}) : (r[e] || {})[u],
	          b = d ? i : i[e] || (i[e] = {}),
	          w = b[u] || (b[u] = {});d && (n = e);for (l in n) {
	        f = !g && S && void 0 !== S[l], p = (f ? S : n)[l], h = y && f ? o(p, r) : v && "function" == typeof p ? o(Function.call, p) : p, S && a(S, l, p, t & c.U), b[l] != p && s(b, l, h), v && w[l] != p && (w[l] = p);
	      }
	    };r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
	  }, function (t, e) {
	    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
	  }, function (t, e) {
	    var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
	  }, function (t, e, n) {
	    var r = n(19),
	        i = n(27);t.exports = n(23) ? function (t, e, n) {
	      return r.f(t, e, i(1, n));
	    } : function (t, e, n) {
	      return t[e] = n, t;
	    };
	  }, function (t, e, n) {
	    var r = n(20),
	        i = n(22),
	        s = n(26),
	        a = Object.defineProperty;e.f = n(23) ? Object.defineProperty : function (t, e, n) {
	      if (r(t), e = s(e, !0), r(n), i) try {
	        return a(t, e, n);
	      } catch (o) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
	    };
	  }, function (t, e, n) {
	    var r = n(21);t.exports = function (t) {
	      if (!r(t)) throw TypeError(t + " is not an object!");return t;
	    };
	  }, function (t, e) {
	    t.exports = function (t) {
	      return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? null !== t : "function" == typeof t;
	    };
	  }, function (t, e, n) {
	    t.exports = !n(23) && !n(24)(function () {
	      return 7 != Object.defineProperty(n(25)("div"), "a", { get: function get() {
	          return 7;
	        } }).a;
	    });
	  }, function (t, e, n) {
	    t.exports = !n(24)(function () {
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
	    var r = n(21),
	        i = n(16).document,
	        s = r(i) && r(i.createElement);t.exports = function (t) {
	      return s ? i.createElement(t) : {};
	    };
	  }, function (t, e, n) {
	    var r = n(21);t.exports = function (t, e) {
	      if (!r(t)) return t;var n, i;if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;throw TypeError("Can't convert object to primitive value");
	    };
	  }, function (t, e) {
	    t.exports = function (t, e) {
	      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
	    };
	  }, function (t, e, n) {
	    var r = n(16),
	        i = n(18),
	        s = n(29),
	        a = n(30)("src"),
	        o = "toString",
	        u = Function[o],
	        c = ("" + u).split(o);n(17).inspectSource = function (t) {
	      return u.call(t);
	    }, (t.exports = function (t, e, n, o) {
	      var u = "function" == typeof n;u && (s(n, "name") || i(n, "name", e)), t[e] !== n && (u && (s(n, a) || i(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : o ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
	    })(Function.prototype, o, function () {
	      return "function" == typeof this && this[a] || u.call(this);
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
	    var r = n(32);t.exports = function (t, e, n) {
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
	    var r = n(34),
	        i = n(47),
	        s = n(48),
	        a = n(49),
	        o = n(37),
	        u = Object.assign;t.exports = !u || n(24)(function () {
	      var t = {},
	          e = {},
	          n = Symbol(),
	          r = "abcdefghijklmnopqrst";return t[n] = 7, r.split("").forEach(function (t) {
	        e[t] = t;
	      }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r;
	    }) ? function (t, e) {
	      for (var n = a(t), u = arguments.length, c = 1, l = i.f, f = s.f; u > c;) {
	        for (var p, h = o(arguments[c++]), g = l ? r(h).concat(l(h)) : r(h), d = g.length, m = 0; d > m;) {
	          f.call(h, p = g[m++]) && (n[p] = h[p]);
	        }
	      }return n;
	    } : u;
	  }, function (t, e, n) {
	    var r = n(35),
	        i = n(46);t.exports = Object.keys || function (t) {
	      return r(t, i);
	    };
	  }, function (t, e, n) {
	    var r = n(29),
	        i = n(36),
	        s = n(40)(!1),
	        a = n(44)("IE_PROTO");t.exports = function (t, e) {
	      var n,
	          o = i(t),
	          u = 0,
	          c = [];for (n in o) {
	        n != a && r(o, n) && c.push(n);
	      }for (; e.length > u;) {
	        r(o, n = e[u++]) && (~s(c, n) || c.push(n));
	      }return c;
	    };
	  }, function (t, e, n) {
	    var r = n(37),
	        i = n(39);t.exports = function (t) {
	      return r(i(t));
	    };
	  }, function (t, e, n) {
	    var r = n(38);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
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
	    var r = n(36),
	        i = n(41),
	        s = n(43);t.exports = function (t) {
	      return function (e, n, a) {
	        var o,
	            u = r(e),
	            c = i(u.length),
	            l = s(a, c);if (t && n != n) {
	          for (; c > l;) {
	            if (o = u[l++], o != o) return !0;
	          }
	        } else for (; c > l; l++) {
	          if ((t || l in u) && u[l] === n) return t || l || 0;
	        }return !t && -1;
	      };
	    };
	  }, function (t, e, n) {
	    var r = n(42),
	        i = Math.min;t.exports = function (t) {
	      return t > 0 ? i(r(t), 9007199254740991) : 0;
	    };
	  }, function (t, e) {
	    var n = Math.ceil,
	        r = Math.floor;t.exports = function (t) {
	      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
	    };
	  }, function (t, e, n) {
	    var r = n(42),
	        i = Math.max,
	        s = Math.min;t.exports = function (t, e) {
	      return t = r(t), t < 0 ? i(t + e, 0) : s(t, e);
	    };
	  }, function (t, e, n) {
	    var r = n(45)("keys"),
	        i = n(30);t.exports = function (t) {
	      return r[t] || (r[t] = i(t));
	    };
	  }, function (t, e, n) {
	    var r = n(16),
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
	    var r = n(39);t.exports = function (t) {
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