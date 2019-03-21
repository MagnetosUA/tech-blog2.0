/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Holder = __webpack_require__(/*! ./holder.min */ "./assets/js/holder.min.js");

__webpack_require__(/*! ./dropdown */ "./assets/js/dropdown.js");

Holder.addTheme('thumb', {
  bg: '#55595c',
  fg: '#eceeef',
  text: 'Thumbnail'
});

/***/ }),

/***/ "./assets/js/dropdown.js":
/*!*******************************!*\
  !*** ./assets/js/dropdown.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

/***/ }),

/***/ "./assets/js/holder.min.js":
/*!*********************************!*\
  !*** ./assets/js/holder.min.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!

Holder - client side image placeholders
Version 2.9.4+cabil
© 2016 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function (e) {
  if (e.document) {
    var t = e.document;
    t.querySelectorAll || (t.querySelectorAll = function (n) {
      var r,
          i = t.createElement("style"),
          o = [];

      for (t.documentElement.firstChild.appendChild(i), t._qsa = [], i.styleSheet.cssText = n + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", e.scrollBy(0, 0), i.parentNode.removeChild(i); t._qsa.length;) {
        r = t._qsa.shift(), r.style.removeAttribute("x-qsa"), o.push(r);
      }

      return t._qsa = null, o;
    }), t.querySelector || (t.querySelector = function (e) {
      var n = t.querySelectorAll(e);
      return n.length ? n[0] : null;
    }), t.getElementsByClassName || (t.getElementsByClassName = function (e) {
      return e = String(e).replace(/^|\s+/g, "."), t.querySelectorAll(e);
    }), Object.keys || (Object.keys = function (e) {
      if (e !== Object(e)) throw TypeError("Object.keys called on non-object");
      var t,
          n = [];

      for (t in e) {
        Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
      }

      return n;
    }), Array.prototype.forEach || (Array.prototype.forEach = function (e) {
      if (void 0 === this || null === this) throw TypeError();
      var t = Object(this),
          n = t.length >>> 0;
      if ("function" != typeof e) throw TypeError();
      var r,
          i = arguments[1];

      for (r = 0; r < n; r++) {
        r in t && e.call(i, t[r], r, t);
      }
    }), function (e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      e.atob = e.atob || function (e) {
        e = String(e);
        var n,
            r = 0,
            i = [],
            o = 0,
            a = 0;
        if (e = e.replace(/\s/g, ""), e.length % 4 === 0 && (e = e.replace(/=+$/, "")), e.length % 4 === 1) throw Error("InvalidCharacterError");
        if (/[^+\/0-9A-Za-z]/.test(e)) throw Error("InvalidCharacterError");

        for (; r < e.length;) {
          n = t.indexOf(e.charAt(r)), o = o << 6 | n, a += 6, 24 === a && (i.push(String.fromCharCode(o >> 16 & 255)), i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o)), a = 0, o = 0), r += 1;
        }

        return 12 === a ? (o >>= 4, i.push(String.fromCharCode(255 & o))) : 18 === a && (o >>= 2, i.push(String.fromCharCode(o >> 8 & 255)), i.push(String.fromCharCode(255 & o))), i.join("");
      }, e.btoa = e.btoa || function (e) {
        e = String(e);
        var n,
            r,
            i,
            o,
            a,
            s,
            l,
            h = 0,
            u = [];
        if (/[^\x00-\xFF]/.test(e)) throw Error("InvalidCharacterError");

        for (; h < e.length;) {
          n = e.charCodeAt(h++), r = e.charCodeAt(h++), i = e.charCodeAt(h++), o = n >> 2, a = (3 & n) << 4 | r >> 4, s = (15 & r) << 2 | i >> 6, l = 63 & i, h === e.length + 2 ? (s = 64, l = 64) : h === e.length + 1 && (l = 64), u.push(t.charAt(o), t.charAt(a), t.charAt(s), t.charAt(l));
        }

        return u.join("");
      };
    }(e), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function (e) {
      var t = this.__proto__ || this.constructor.prototype;
      return e in this && (!(e in t) || t[e] !== this[e]);
    }), function () {
      if ("performance" in e == !1 && (e.performance = {}), Date.now = Date.now || function () {
        return new Date().getTime();
      }, "now" in e.performance == !1) {
        var t = Date.now();
        performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart), e.performance.now = function () {
          return Date.now() - t;
        };
      }
    }(), e.requestAnimationFrame || (e.webkitRequestAnimationFrame && e.webkitCancelAnimationFrame ? !function (e) {
      e.requestAnimationFrame = function (t) {
        return webkitRequestAnimationFrame(function () {
          t(e.performance.now());
        });
      }, e.cancelAnimationFrame = e.webkitCancelAnimationFrame;
    }(e) : e.mozRequestAnimationFrame && e.mozCancelAnimationFrame ? !function (e) {
      e.requestAnimationFrame = function (t) {
        return mozRequestAnimationFrame(function () {
          t(e.performance.now());
        });
      }, e.cancelAnimationFrame = e.mozCancelAnimationFrame;
    }(e) : !function (e) {
      e.requestAnimationFrame = function (t) {
        return e.setTimeout(t, 1e3 / 60);
      }, e.cancelAnimationFrame = e.clearTimeout;
    }(e));
  }
}(this), function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    (function (t) {
      function r(e, t, n, r) {
        var a = i(n.substr(n.lastIndexOf(e.domain)), e);
        a && o({
          mode: null,
          el: r,
          flags: a,
          engineSettings: t
        });
      }

      function i(e, t) {
        var n = {
          theme: k(O.settings.themes.gray, null),
          stylesheets: t.stylesheets,
          instanceOptions: t
        },
            r = e.indexOf("?"),
            i = [e];
        r !== -1 && (i = [e.slice(0, r), e.slice(r + 1)]);
        var o = i[0].split("/");
        n.holderURL = e;
        var a = o[1],
            s = a.match(/([\d]+p?)x([\d]+p?)/);
        if (!s) return !1;

        if (n.fluid = a.indexOf("p") !== -1, n.dimensions = {
          width: s[1].replace("p", "%"),
          height: s[2].replace("p", "%")
        }, 2 === i.length) {
          var l = v.parse(i[1]);

          if (w.truthy(l.ratio)) {
            n.fluid = !0;
            var h = parseFloat(n.dimensions.width.replace("%", "")),
                u = parseFloat(n.dimensions.height.replace("%", ""));
            u = Math.floor(100 * (u / h)), h = 100, n.dimensions.width = h + "%", n.dimensions.height = u + "%";
          }

          if (n.auto = w.truthy(l.auto), l.bg && (n.theme.bg = w.parseColor(l.bg)), l.fg && (n.theme.fg = w.parseColor(l.fg)), l.bg && !l.fg && (n.autoFg = !0), l.theme && n.instanceOptions.themes.hasOwnProperty(l.theme) && (n.theme = k(n.instanceOptions.themes[l.theme], null)), l.text && (n.text = l.text), l.textmode && (n.textmode = l.textmode), l.size && (n.size = l.size), l.font && (n.font = l.font), l.align && (n.align = l.align), l.lineWrap && (n.lineWrap = l.lineWrap), n.nowrap = w.truthy(l.nowrap), n.outline = w.truthy(l.outline), w.truthy(l.random)) {
            O.vars.cache.themeKeys = O.vars.cache.themeKeys || Object.keys(n.instanceOptions.themes);
            var c = O.vars.cache.themeKeys[0 | Math.random() * O.vars.cache.themeKeys.length];
            n.theme = k(n.instanceOptions.themes[c], null);
          }
        }

        return n;
      }

      function o(e) {
        var t = e.mode,
            n = e.el,
            r = e.flags,
            i = e.engineSettings,
            o = r.dimensions,
            s = r.theme,
            l = o.width + "x" + o.height;
        t = null == t ? r.fluid ? "fluid" : "image" : t;
        var c = /holder_([a-z]+)/g,
            d = !1;

        if (null != r.text && (s.text = r.text, "object" === n.nodeName.toLowerCase())) {
          for (var f = s.text.split("\\n"), p = 0; p < f.length; p++) {
            f[p] = w.encodeHtmlEntity(f[p]);
          }

          s.text = f.join("\\n");
        }

        if (s.text) {
          var g = s.text.match(c);
          null !== g && g.forEach(function (e) {
            "holder_dimensions" === e && (s.text = s.text.replace(e, l));
          });
        }

        var m = r.holderURL,
            v = k(i, null);
        if (r.font && (s.font = r.font, !v.noFontFallback && "img" === n.nodeName.toLowerCase() && O.setup.supportsCanvas && "svg" === v.renderer && (v = k(v, {
          renderer: "canvas"
        }))), r.font && "canvas" == v.renderer && (v.reRender = !0), "background" == t) null == n.getAttribute("data-background-src") && x.setAttr(n, {
          "data-background-src": m
        });else {
          var y = {};
          y[O.vars.dataAttr] = m, x.setAttr(n, y);
        }
        r.theme = s, n.holderData = {
          flags: r,
          engineSettings: v
        }, "image" != t && "fluid" != t || x.setAttr(n, {
          alt: s.text ? d ? s.text : s.text + " [" + l + "]" : l
        });
        var b = {
          mode: t,
          el: n,
          holderSettings: {
            dimensions: o,
            theme: s,
            flags: r
          },
          engineSettings: v
        };
        "image" == t ? (r.auto || (n.style.width = o.width + "px", n.style.height = o.height + "px"), "html" == v.renderer ? n.style.backgroundColor = s.bg : (a(b), "exact" == r.textmode && (n.holderData.resizeUpdate = !0, O.vars.resizableImages.push(n), h(n)))) : "background" == t && "html" != v.renderer ? a(b) : "fluid" == t && (n.holderData.resizeUpdate = !0, "%" == o.height.slice(-1) ? n.style.height = o.height : null != r.auto && r.auto || (n.style.height = o.height + "px"), "%" == o.width.slice(-1) ? n.style.width = o.width : null != r.auto && r.auto || (n.style.width = o.width + "px"), "inline" != n.style.display && "" !== n.style.display && "none" != n.style.display || (n.style.display = "block"), u(n), "html" == v.renderer ? n.style.backgroundColor = s.bg : (O.vars.resizableImages.push(n), h(n)));
      }

      function a(e) {
        function n() {
          var t = null;

          switch (l.renderer) {
            case "canvas":
              t = E(u, e);
              break;

            case "svg":
              t = C(u, e);
              break;

            default:
              throw "Holder: invalid renderer: " + l.renderer;
          }

          return t;
        }

        var r = null,
            i = e.mode,
            o = e.el,
            a = e.holderSettings,
            l = e.engineSettings;

        switch (l.renderer) {
          case "svg":
            if (!O.setup.supportsSVG) return;
            break;

          case "canvas":
            if (!O.setup.supportsCanvas) return;
            break;

          default:
            return;
        }

        var h = {
          width: a.dimensions.width,
          height: a.dimensions.height,
          theme: a.theme,
          flags: a.flags
        },
            u = s(h);
        if (r = n(), null == r) throw "Holder: couldn't render placeholder";
        "background" == i ? (o.style.backgroundImage = "url(" + r + ")", l.noBackgroundSize || (o.style.backgroundSize = h.width + "px " + h.height + "px")) : ("img" === o.nodeName.toLowerCase() ? x.setAttr(o, {
          src: r
        }) : "object" === o.nodeName.toLowerCase() && x.setAttr(o, {
          data: r,
          type: "image/svg+xml"
        }), l.reRender && t.setTimeout(function () {
          var e = n();
          if (null == e) throw "Holder: couldn't render placeholder";
          "img" === o.nodeName.toLowerCase() ? x.setAttr(o, {
            src: e
          }) : "object" === o.nodeName.toLowerCase() && x.setAttr(o, {
            data: e,
            type: "image/svg+xml"
          });
        }, 150)), x.setAttr(o, {
          "data-holder-rendered": !0
        });
      }

      function s(e) {
        function t(e, t, n, r) {
          t.width = n, t.height = r, e.width = Math.max(e.width, t.width), e.height += t.height;
        }

        var n = O.defaults.size;

        switch (parseFloat(e.theme.size) ? n = e.theme.size : parseFloat(e.flags.size) && (n = e.flags.size), e.font = {
          family: e.theme.font ? e.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
          size: l(e.width, e.height, n, O.defaults.scale),
          units: e.theme.units ? e.theme.units : O.defaults.units,
          weight: e.theme.fontweight ? e.theme.fontweight : "bold"
        }, e.text = e.theme.text || Math.floor(e.width) + "x" + Math.floor(e.height), e.noWrap = e.theme.nowrap || e.flags.nowrap, e.align = e.theme.align || e.flags.align || "center", e.flags.textmode) {
          case "literal":
            e.text = e.flags.dimensions.width + "x" + e.flags.dimensions.height;
            break;

          case "exact":
            if (!e.flags.exactDimensions) break;
            e.text = Math.floor(e.flags.exactDimensions.width) + "x" + Math.floor(e.flags.exactDimensions.height);
        }

        var r = e.flags.lineWrap || O.setup.lineWrapRatio,
            i = e.width * r,
            o = i,
            a = new y({
          width: e.width,
          height: e.height
        }),
            s = a.Shape,
            h = new s.Rect("holderBg", {
          fill: e.theme.bg
        });

        if (h.resize(e.width, e.height), a.root.add(h), e.flags.outline) {
          var u = new S(h.properties.fill);
          u = u.lighten(u.lighterThan("7f7f7f") ? -.1 : .1), h.properties.outline = {
            fill: u.toHex(!0),
            width: 2
          };
        }

        var c = e.theme.fg;

        if (e.flags.autoFg) {
          var d = new S(h.properties.fill),
              f = new S("fff"),
              p = new S("000", {
            alpha: .285714
          });
          c = d.blendAlpha(d.lighterThan("7f7f7f") ? p : f).toHex(!0);
        }

        var g = new s.Group("holderTextGroup", {
          text: e.text,
          align: e.align,
          font: e.font,
          fill: c
        });
        g.moveTo(null, null, 1), a.root.add(g);
        var m = g.textPositionData = z(a);
        if (!m) throw "Holder: staging fallback not supported yet.";
        g.properties.leading = m.boundingBox.height;
        var v = null,
            w = null;

        if (m.lineCount > 1) {
          var b,
              x = 0,
              A = 0,
              C = 0;
          w = new s.Group("line" + C), "left" !== e.align && "right" !== e.align || (o = e.width * (1 - 2 * (1 - r)));

          for (var E = 0; E < m.words.length; E++) {
            var k = m.words[E];
            v = new s.Text(k.text);
            var T = "\\n" == k.text;
            !e.noWrap && (x + k.width >= o || T === !0) && (t(g, w, x, g.properties.leading), g.add(w), x = 0, A += g.properties.leading, C += 1, w = new s.Group("line" + C), w.y = A), T !== !0 && (v.moveTo(x, 0), x += m.spaceWidth + k.width, w.add(v));
          }

          if (t(g, w, x, g.properties.leading), g.add(w), "left" === e.align) g.moveTo(e.width - i, null, null);else if ("right" === e.align) {
            for (b in g.children) {
              w = g.children[b], w.moveTo(e.width - w.width, null, null);
            }

            g.moveTo(0 - (e.width - i), null, null);
          } else {
            for (b in g.children) {
              w = g.children[b], w.moveTo((g.width - w.width) / 2, null, null);
            }

            g.moveTo((e.width - g.width) / 2, null, null);
          }
          g.moveTo(null, (e.height - g.height) / 2, null), (e.height - g.height) / 2 < 0 && g.moveTo(null, 0, null);
        } else v = new s.Text(e.text), w = new s.Group("line0"), w.add(v), g.add(w), "left" === e.align ? g.moveTo(e.width - i, null, null) : "right" === e.align ? g.moveTo(0 - (e.width - i), null, null) : g.moveTo((e.width - m.boundingBox.width) / 2, null, null), g.moveTo(null, (e.height - m.boundingBox.height) / 2, null);

        return a;
      }

      function l(e, t, n, r) {
        var i = parseInt(e, 10),
            o = parseInt(t, 10),
            a = Math.max(i, o),
            s = Math.min(i, o),
            l = .8 * Math.min(s, a * r);
        return Math.round(Math.max(n, l));
      }

      function h(e) {
        var t;
        t = null == e || null == e.nodeType ? O.vars.resizableImages : [e];

        for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];

          if (i.holderData) {
            var o = i.holderData.flags,
                s = T(i);

            if (s) {
              if (!i.holderData.resizeUpdate) continue;

              if (o.fluid && o.auto) {
                var l = i.holderData.fluidConfig;

                switch (l.mode) {
                  case "width":
                    s.height = s.width / l.ratio;
                    break;

                  case "height":
                    s.width = s.height * l.ratio;
                }
              }

              var h = {
                mode: "image",
                holderSettings: {
                  dimensions: s,
                  theme: o.theme,
                  flags: o
                },
                el: i,
                engineSettings: i.holderData.engineSettings
              };
              "exact" == o.textmode && (o.exactDimensions = s, h.holderSettings.dimensions = o.dimensions), a(h);
            } else f(i);
          }
        }
      }

      function u(e) {
        if (e.holderData) {
          var t = T(e);

          if (t) {
            var n = e.holderData.flags,
                r = {
              fluidHeight: "%" == n.dimensions.height.slice(-1),
              fluidWidth: "%" == n.dimensions.width.slice(-1),
              mode: null,
              initialDimensions: t
            };
            r.fluidWidth && !r.fluidHeight ? (r.mode = "width", r.ratio = r.initialDimensions.width / parseFloat(n.dimensions.height)) : !r.fluidWidth && r.fluidHeight && (r.mode = "height", r.ratio = parseFloat(n.dimensions.width) / r.initialDimensions.height), e.holderData.fluidConfig = r;
          } else f(e);
        }
      }

      function c() {
        var e,
            n = [],
            r = Object.keys(O.vars.invisibleImages);
        r.forEach(function (t) {
          e = O.vars.invisibleImages[t], T(e) && "img" == e.nodeName.toLowerCase() && (n.push(e), delete O.vars.invisibleImages[t]);
        }), n.length && F.run({
          images: n
        }), setTimeout(function () {
          t.requestAnimationFrame(c);
        }, 10);
      }

      function d() {
        O.vars.visibilityCheckStarted || (t.requestAnimationFrame(c), O.vars.visibilityCheckStarted = !0);
      }

      function f(e) {
        e.holderData.invisibleId || (O.vars.invisibleId += 1, O.vars.invisibleImages["i" + O.vars.invisibleId] = e, e.holderData.invisibleId = O.vars.invisibleId);
      }

      function p(e) {
        O.vars.debounceTimer || e.call(this), O.vars.debounceTimer && t.clearTimeout(O.vars.debounceTimer), O.vars.debounceTimer = t.setTimeout(function () {
          O.vars.debounceTimer = null, e.call(this);
        }, O.setup.debounce);
      }

      function g() {
        p(function () {
          h(null);
        });
      }

      var m = n(2),
          v = n(3),
          y = n(6),
          w = n(7),
          b = n(8),
          x = n(9),
          S = n(10),
          A = n(11),
          C = n(12),
          E = n(15),
          k = w.extend,
          T = w.dimensionCheck,
          j = A.svg_ns,
          F = {
        version: A.version,
        addTheme: function addTheme(e, t) {
          return null != e && null != t && (O.settings.themes[e] = t), delete O.vars.cache.themeKeys, this;
        },
        addImage: function addImage(e, t) {
          var n = x.getNodeArray(t);
          return n.forEach(function (t) {
            var n = x.newEl("img"),
                r = {};
            r[O.setup.dataAttr] = e, x.setAttr(n, r), t.appendChild(n);
          }), this;
        },
        setResizeUpdate: function setResizeUpdate(e, t) {
          e.holderData && (e.holderData.resizeUpdate = !!t, e.holderData.resizeUpdate && h(e));
        },
        run: function run(e) {
          e = e || {};
          var n = {},
              a = k(O.settings, e);
          O.vars.preempted = !0, O.vars.dataAttr = a.dataAttr || O.setup.dataAttr, n.renderer = a.renderer ? a.renderer : O.setup.renderer, O.setup.renderers.join(",").indexOf(n.renderer) === -1 && (n.renderer = O.setup.supportsSVG ? "svg" : O.setup.supportsCanvas ? "canvas" : "html");
          var s = x.getNodeArray(a.images),
              l = x.getNodeArray(a.bgnodes),
              h = x.getNodeArray(a.stylenodes),
              u = x.getNodeArray(a.objects);
          return n.stylesheets = [], n.svgXMLStylesheet = !0, n.noFontFallback = !!a.noFontFallback, n.noBackgroundSize = !!a.noBackgroundSize, h.forEach(function (e) {
            if (e.attributes.rel && e.attributes.href && "stylesheet" == e.attributes.rel.value) {
              var t = e.attributes.href.value,
                  r = x.newEl("a");
              r.href = t;
              var i = r.protocol + "//" + r.host + r.pathname + r.search;
              n.stylesheets.push(i);
            }
          }), l.forEach(function (e) {
            if (t.getComputedStyle) {
              var r = t.getComputedStyle(e, null).getPropertyValue("background-image"),
                  s = e.getAttribute("data-background-src"),
                  l = s || r,
                  h = null,
                  u = a.domain + "/",
                  c = l.indexOf(u);
              if (0 === c) h = l;else if (1 === c && "?" === l[0]) h = l.slice(1);else {
                var d = l.substr(c).match(/([^\"]*)"?\)/);
                if (null !== d) h = d[1];else if (0 === l.indexOf("url(")) throw "Holder: unable to parse background URL: " + l;
              }

              if (h) {
                var f = i(h, a);
                f && o({
                  mode: "background",
                  el: e,
                  flags: f,
                  engineSettings: n
                });
              }
            }
          }), u.forEach(function (e) {
            var t = {};

            try {
              t.data = e.getAttribute("data"), t.dataSrc = e.getAttribute(O.vars.dataAttr);
            } catch (i) {}

            var o = null != t.data && 0 === t.data.indexOf(a.domain),
                s = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain);
            o ? r(a, n, t.data, e) : s && r(a, n, t.dataSrc, e);
          }), s.forEach(function (e) {
            var t = {};

            try {
              t.src = e.getAttribute("src"), t.dataSrc = e.getAttribute(O.vars.dataAttr), t.rendered = e.getAttribute("data-holder-rendered");
            } catch (i) {}

            var o = null != t.src,
                s = null != t.dataSrc && 0 === t.dataSrc.indexOf(a.domain),
                l = null != t.rendered && "true" == t.rendered;
            o ? 0 === t.src.indexOf(a.domain) ? r(a, n, t.src, e) : s && (l ? r(a, n, t.dataSrc, e) : !function (e, t, n, i, o) {
              w.imageExists(e, function (e) {
                e || r(t, n, i, o);
              });
            }(t.src, a, n, t.dataSrc, e)) : s && r(a, n, t.dataSrc, e);
          }), this;
        }
      },
          O = {
        settings: {
          domain: "holder.js",
          images: "img",
          objects: "object",
          bgnodes: "body .holderjs",
          stylenodes: "head link.holderjs",
          themes: {
            gray: {
              bg: "#EEEEEE",
              fg: "#AAAAAA"
            },
            social: {
              bg: "#3a5a97",
              fg: "#FFFFFF"
            },
            industrial: {
              bg: "#434A52",
              fg: "#C2F200"
            },
            sky: {
              bg: "#0D8FDB",
              fg: "#FFFFFF"
            },
            vine: {
              bg: "#39DBAC",
              fg: "#1E292C"
            },
            lava: {
              bg: "#F8591A",
              fg: "#1C2846"
            }
          }
        },
        defaults: {
          size: 10,
          units: "pt",
          scale: 1 / 16
        }
      },
          z = function () {
        var e = null,
            t = null,
            n = null;
        return function (r) {
          var i = r.root;

          if (O.setup.supportsSVG) {
            var o = !1,
                a = function a(e) {
              return document.createTextNode(e);
            };

            null != e && e.parentNode === document.body || (o = !0), e = b.initSVG(e, i.properties.width, i.properties.height), e.style.display = "block", o && (t = x.newEl("text", j), n = a(null), x.setAttr(t, {
              x: 0
            }), t.appendChild(n), e.appendChild(t), document.body.appendChild(e), e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-100%", e.style.left = "-100%");
            var s = i.children.holderTextGroup,
                l = s.properties;
            x.setAttr(t, {
              y: l.font.size,
              style: w.cssProps({
                "font-weight": l.font.weight,
                "font-size": l.font.size + l.font.units,
                "font-family": l.font.family
              })
            }), n.nodeValue = l.text;
            var h = t.getBBox(),
                u = Math.ceil(h.width / i.properties.width),
                c = l.text.split(" "),
                d = l.text.match(/\\n/g);
            u += null == d ? 0 : d.length, n.nodeValue = l.text.replace(/[ ]+/g, "");
            var f = t.getComputedTextLength(),
                p = h.width - f,
                g = Math.round(p / Math.max(1, c.length - 1)),
                m = [];

            if (u > 1) {
              n.nodeValue = "";

              for (var v = 0; v < c.length; v++) {
                if (0 !== c[v].length) {
                  n.nodeValue = w.decodeHtmlEntity(c[v]);
                  var y = t.getBBox();
                  m.push({
                    text: c[v],
                    width: y.width
                  });
                }
              }
            }

            return e.style.display = "none", {
              spaceWidth: g,
              lineCount: u,
              boundingBox: h,
              words: m
            };
          }

          return !1;
        };
      }();

      for (var D in O.flags) {
        O.flags.hasOwnProperty(D) && (O.flags[D].match = function (e) {
          return e.match(this.regex);
        });
      }

      O.setup = {
        renderer: "html",
        debounce: 100,
        ratio: 1,
        supportsCanvas: !1,
        supportsSVG: !1,
        lineWrapRatio: .9,
        dataAttr: "data-src",
        renderers: ["html", "canvas", "svg"]
      }, O.vars = {
        preempted: !1,
        resizableImages: [],
        invisibleImages: {},
        invisibleId: 0,
        visibilityCheckStarted: !1,
        debounceTimer: null,
        cache: {}
      }, function () {
        var e = x.newEl("canvas");
        e.getContext && e.toDataURL("image/png").indexOf("data:image/png") != -1 && (O.setup.renderer = "canvas", O.setup.supportsCanvas = !0), document.createElementNS && document.createElementNS(j, "svg").createSVGRect && (O.setup.renderer = "svg", O.setup.supportsSVG = !0);
      }(), d(), m && m(function () {
        O.vars.preempted || F.run(), t.addEventListener ? (t.addEventListener("resize", g, !1), t.addEventListener("orientationchange", g, !1)) : t.attachEvent("onresize", g), "object" == _typeof(t.Turbolinks) && t.document.addEventListener("page:change", function () {
          F.run();
        });
      }), e.exports = F;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    function n(e) {
      function t(e) {
        if (!x) {
          if (!a.body) return i(t);

          for (x = !0; e = S.shift();) {
            i(e);
          }
        }
      }

      function n(e) {
        (w || e.type === l || a[d] === c) && (r(), t());
      }

      function r() {
        w ? (a[y](m, n, h), e[y](l, n, h)) : (a[p](v, n), e[p](u, n));
      }

      function i(e, t) {
        setTimeout(e, +t >= 0 ? t : 1);
      }

      function o(e) {
        x ? i(e) : S.push(e);
      }

      null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function C() {
        document.removeEventListener("DOMContentLoaded", C, !1), document.readyState = "complete";
      }, !1), document.readyState = "loading");
      var a = e.document,
          s = a.documentElement,
          l = "load",
          h = !1,
          u = "on" + l,
          c = "complete",
          d = "readyState",
          f = "attachEvent",
          p = "detachEvent",
          g = "addEventListener",
          m = "DOMContentLoaded",
          v = "onreadystatechange",
          y = "removeEventListener",
          w = g in a,
          b = h,
          x = h,
          S = [];
      if (a[d] === c) i(t);else if (w) a[g](m, n, h), e[g](l, n, h);else {
        a[f](v, n), e[f](u, n);

        try {
          b = null == e.frameElement && s;
        } catch (A) {}

        b && b.doScroll && !function E() {
          if (!x) {
            try {
              b.doScroll("left");
            } catch (e) {
              return i(E, 50);
            }

            r(), t();
          }
        }();
      }
      return o.version = "1.4.0", o.isReady = function () {
        return x;
      }, o;
    }

    e.exports = "undefined" != typeof window && n(window);
  }, function (e, t, n) {
    var r = encodeURIComponent,
        i = decodeURIComponent,
        o = n(4),
        a = n(5),
        s = /(\w+)\[(\d+)\]/,
        l = /\w+\.\w+/;
    t.parse = function (e) {
      if ("string" != typeof e) return {};
      if (e = o(e), "" === e) return {};
      "?" === e.charAt(0) && (e = e.slice(1));

      for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
        var a,
            h,
            u,
            c = n[r].split("="),
            d = i(c[0]);
        if (a = s.exec(d)) t[a[1]] = t[a[1]] || [], t[a[1]][a[2]] = i(c[1]);else if (a = l.test(d)) {
          for (a = d.split("."), h = t; a.length;) {
            if (u = a.shift(), u.length) {
              if (h[u]) {
                if (h[u] && "object" != _typeof(h[u])) break;
              } else h[u] = {};

              a.length || (h[u] = i(c[1])), h = h[u];
            }
          }
        } else t[c[0]] = null == c[1] ? "" : i(c[1]);
      }

      return t;
    }, t.stringify = function (e) {
      if (!e) return "";
      var t = [];

      for (var n in e) {
        var i = e[n];
        if ("array" != a(i)) t.push(r(n) + "=" + r(e[n]));else for (var o = 0; o < i.length; ++o) {
          t.push(r(n + "[" + o + "]") + "=" + r(i[o]));
        }
      }

      return t.join("&");
    };
  }, function (e, t) {
    function n(e) {
      return e.replace(/^\s*|\s*$/g, "");
    }

    t = e.exports = n, t.left = function (e) {
      return e.replace(/^\s*/, "");
    }, t.right = function (e) {
      return e.replace(/\s*$/, "");
    };
  }, function (e, t) {
    function n(e) {
      return !(null == e || !(e._isBuffer || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)));
    }

    var r = Object.prototype.toString;

    e.exports = function (e) {
      switch (r.call(e)) {
        case "[object Date]":
          return "date";

        case "[object RegExp]":
          return "regexp";

        case "[object Arguments]":
          return "arguments";

        case "[object Array]":
          return "array";

        case "[object Error]":
          return "error";
      }

      return null === e ? "null" : void 0 === e ? "undefined" : e !== e ? "nan" : e && 1 === e.nodeType ? "element" : n(e) ? "buffer" : (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e), _typeof(e));
    };
  }, function (e, t) {
    var n = function n(e) {
      function t(e, t) {
        for (var n in t) {
          e[n] = t[n];
        }

        return e;
      }

      var n = 1,
          r = function r(e) {
        n++, this.parent = null, this.children = {}, this.id = n, this.name = "n" + n, "undefined" != typeof e && (this.name = e), this.x = this.y = this.z = 0, this.width = this.height = 0;
      };

      r.prototype.resize = function (e, t) {
        null != e && (this.width = e), null != t && (this.height = t);
      }, r.prototype.moveTo = function (e, t, n) {
        this.x = null != e ? e : this.x, this.y = null != t ? t : this.y, this.z = null != n ? n : this.z;
      }, r.prototype.add = function (e) {
        var t = e.name;
        if ("undefined" != typeof this.children[t]) throw "SceneGraph: child already exists: " + t;
        this.children[t] = e, e.parent = this;
      };

      var i = function i() {
        r.call(this, "root"), this.properties = e;
      };

      i.prototype = new r();

      var o = function o(e, n) {
        if (r.call(this, e), this.properties = {
          fill: "#000000"
        }, "undefined" != typeof n) t(this.properties, n);else if ("undefined" != typeof e && "string" != typeof e) throw "SceneGraph: invalid node name";
      };

      o.prototype = new r();

      var a = function a() {
        o.apply(this, arguments), this.type = "group";
      };

      a.prototype = new o();

      var s = function s() {
        o.apply(this, arguments), this.type = "rect";
      };

      s.prototype = new o();

      var l = function l(e) {
        o.call(this), this.type = "text", this.properties.text = e;
      };

      l.prototype = new o();
      var h = new i();
      return this.Shape = {
        Rect: s,
        Text: l,
        Group: a
      }, this.root = h, this;
    };

    e.exports = n;
  }, function (e, t) {
    (function (e) {
      t.extend = function (e, t) {
        var n = {};

        for (var r in e) {
          e.hasOwnProperty(r) && (n[r] = e[r]);
        }

        if (null != t) for (var i in t) {
          t.hasOwnProperty(i) && (n[i] = t[i]);
        }
        return n;
      }, t.cssProps = function (e) {
        var t = [];

        for (var n in e) {
          e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
        }

        return t.join(";");
      }, t.encodeHtmlEntity = function (e) {
        for (var t = [], n = 0, r = e.length - 1; r >= 0; r--) {
          n = e.charCodeAt(r), n > 128 ? t.unshift(["&#", n, ";"].join("")) : t.unshift(e[r]);
        }

        return t.join("");
      }, t.imageExists = function (e, t) {
        var n = new Image();
        n.onerror = function () {
          t.call(this, !1);
        }, n.onload = function () {
          t.call(this, !0);
        }, n.src = e;
      }, t.decodeHtmlEntity = function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
          return String.fromCharCode(t);
        });
      }, t.dimensionCheck = function (e) {
        var t = {
          height: e.clientHeight,
          width: e.clientWidth
        };
        return !(!t.height || !t.width) && t;
      }, t.truthy = function (e) {
        return "string" == typeof e ? "true" === e || "yes" === e || "1" === e || "on" === e || "✓" === e : !!e;
      }, t.parseColor = function (e) {
        var t,
            n = /(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,
            r = /^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
            i = /^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,
            o = e.match(n);
        return null !== o ? (t = o[1] || o[2], "#" !== t[0] ? "#" + t : t) : (o = e.match(r), null !== o ? t = "rgb(" + o.slice(1).join(",") + ")" : (o = e.match(i), null !== o ? t = "rgba(" + o.slice(1).join(",") + ")" : null));
      }, t.canvasRatio = function () {
        var t = 1,
            n = 1;

        if (e.document) {
          var r = e.document.createElement("canvas");

          if (r.getContext) {
            var i = r.getContext("2d");
            t = e.devicePixelRatio || 1, n = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1;
          }
        }

        return t / n;
      };
    }).call(t, function () {
      return this;
    }());
  }, function (e, t, n) {
    (function (e) {
      var r = n(9),
          i = "http://www.w3.org/2000/svg",
          o = 8;
      t.initSVG = function (e, t, n) {
        var a,
            s,
            l = !1;
        e && e.querySelector ? (s = e.querySelector("style"), null === s && (l = !0)) : (e = r.newEl("svg", i), l = !0), l && (a = r.newEl("defs", i), s = r.newEl("style", i), r.setAttr(s, {
          type: "text/css"
        }), a.appendChild(s), e.appendChild(a)), e.webkitMatchesSelector && e.setAttribute("xmlns", i);

        for (var h = 0; h < e.childNodes.length; h++) {
          e.childNodes[h].nodeType === o && e.removeChild(e.childNodes[h]);
        }

        for (; s.childNodes.length;) {
          s.removeChild(s.childNodes[0]);
        }

        return r.setAttr(e, {
          width: t,
          height: n,
          viewBox: "0 0 " + t + " " + n,
          preserveAspectRatio: "none"
        }), e;
      }, t.svgStringToDataURI = function () {
        var t = "data:image/svg+xml;charset=UTF-8,",
            n = "data:image/svg+xml;charset=UTF-8;base64,";
        return function (r, i) {
          return i ? n + btoa(e.unescape(encodeURIComponent(r))) : t + encodeURIComponent(r);
        };
      }(), t.serializeSVG = function (t, n) {
        if (e.XMLSerializer) {
          var i = new XMLSerializer(),
              o = "",
              a = n.stylesheets;

          if (n.svgXMLStylesheet) {
            for (var s = r.createXML(), l = a.length - 1; l >= 0; l--) {
              var h = s.createProcessingInstruction("xml-stylesheet", 'href="' + a[l] + '" rel="stylesheet"');
              s.insertBefore(h, s.firstChild);
            }

            s.removeChild(s.documentElement), o = i.serializeToString(s);
          }

          var u = i.serializeToString(t);
          return u = u.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), o + u;
        }
      };
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (e) {
      t.newEl = function (t, n) {
        if (e.document) return null == n ? e.document.createElement(t) : e.document.createElementNS(n, t);
      }, t.setAttr = function (e, t) {
        for (var n in t) {
          e.setAttribute(n, t[n]);
        }
      }, t.createXML = function () {
        if (e.DOMParser) return new DOMParser().parseFromString("<xml />", "application/xml");
      }, t.getNodeArray = function (t) {
        var n = null;
        return "string" == typeof t ? n = document.querySelectorAll(t) : e.NodeList && t instanceof e.NodeList ? n = t : e.Node && t instanceof e.Node ? n = [t] : e.HTMLCollection && t instanceof e.HTMLCollection ? n = t : t instanceof Array ? n = t : null === t && (n = []), n = Array.prototype.slice.call(n);
      };
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    var n = function n(e, t) {
      "string" == typeof e && (this.original = e, "#" === e.charAt(0) && (e = e.slice(1)), /[^a-f0-9]+/i.test(e) || (3 === e.length && (e = e.replace(/./g, "$&$&")), 6 === e.length && (this.alpha = 1, t && t.alpha && (this.alpha = t.alpha), this.set(parseInt(e, 16)))));
    };

    n.rgb2hex = function (e, t, n) {
      function r(e) {
        var t = (0 | e).toString(16);
        return e < 16 && (t = "0" + t), t;
      }

      return [e, t, n].map(r).join("");
    }, n.hsl2rgb = function (e, t, n) {
      var r = e / 60,
          i = (1 - Math.abs(2 * n - 1)) * t,
          o = i * (1 - Math.abs(parseInt(r) % 2 - 1)),
          a = n - i / 2,
          s = 0,
          l = 0,
          h = 0;
      return r >= 0 && r < 1 ? (s = i, l = o) : r >= 1 && r < 2 ? (s = o, l = i) : r >= 2 && r < 3 ? (l = i, h = o) : r >= 3 && r < 4 ? (l = o, h = i) : r >= 4 && r < 5 ? (s = o, h = i) : r >= 5 && r < 6 && (s = i, h = o), s += a, l += a, h += a, s = parseInt(255 * s), l = parseInt(255 * l), h = parseInt(255 * h), [s, l, h];
    }, n.prototype.set = function (e) {
      this.raw = e;
      var t = (16711680 & this.raw) >> 16,
          n = (65280 & this.raw) >> 8,
          r = 255 & this.raw,
          i = .2126 * t + .7152 * n + .0722 * r,
          o = -.09991 * t - .33609 * n + .436 * r,
          a = .615 * t - .55861 * n - .05639 * r;
      return this.rgb = {
        r: t,
        g: n,
        b: r
      }, this.yuv = {
        y: i,
        u: o,
        v: a
      }, this;
    }, n.prototype.lighten = function (e) {
      var t = Math.min(1, Math.max(0, Math.abs(e))) * (e < 0 ? -1 : 1),
          r = 255 * t | 0,
          i = Math.min(255, Math.max(0, this.rgb.r + r)),
          o = Math.min(255, Math.max(0, this.rgb.g + r)),
          a = Math.min(255, Math.max(0, this.rgb.b + r)),
          s = n.rgb2hex(i, o, a);
      return new n(s);
    }, n.prototype.toHex = function (e) {
      return (e ? "#" : "") + this.raw.toString(16);
    }, n.prototype.lighterThan = function (e) {
      return e instanceof n || (e = new n(e)), this.yuv.y > e.yuv.y;
    }, n.prototype.blendAlpha = function (e) {
      e instanceof n || (e = new n(e));
      var t = e,
          r = this,
          i = t.alpha * t.rgb.r + (1 - t.alpha) * r.rgb.r,
          o = t.alpha * t.rgb.g + (1 - t.alpha) * r.rgb.g,
          a = t.alpha * t.rgb.b + (1 - t.alpha) * r.rgb.b;
      return new n(n.rgb2hex(i, o, a));
    }, e.exports = n;
  }, function (e, t) {
    e.exports = {
      version: "2.9.4",
      svg_ns: "http://www.w3.org/2000/svg"
    };
  }, function (e, t, n) {
    function r(e, t) {
      return c.element({
        tag: t,
        width: e.width,
        height: e.height,
        fill: e.properties.fill
      });
    }

    function i(e) {
      return h.cssProps({
        fill: e.fill,
        "font-weight": e.font.weight,
        "font-family": e.font.family + ", monospace",
        "font-size": e.font.size + e.font.units
      });
    }

    function o(e, t, n) {
      var r = n / 2;
      return ["M", r, r, "H", e - r, "V", t - r, "H", r, "V", 0, "M", 0, r, "L", e, t - r, "M", 0, t - r, "L", e, r].join(" ");
    }

    var a = n(13),
        s = n(8),
        l = n(11),
        h = n(7),
        u = l.svg_ns,
        c = {
      element: function element(e) {
        var t = e.tag,
            n = e.content || "";
        return delete e.tag, delete e.content, [t, n, e];
      }
    };

    e.exports = function (e, t) {
      var n = t.engineSettings,
          l = n.stylesheets,
          h = l.map(function (e) {
        return '<?xml-stylesheet rel="stylesheet" href="' + e + '"?>';
      }).join("\n"),
          d = "holder_" + Number(new Date()).toString(16),
          f = e.root,
          p = f.children.holderTextGroup,
          g = "#" + d + " text { " + i(p.properties) + " } ";
      p.y += .8 * p.textPositionData.boundingBox.height;
      var m = [];
      Object.keys(p.children).forEach(function (e) {
        var t = p.children[e];
        Object.keys(t.children).forEach(function (e) {
          var n = t.children[e],
              r = p.x + t.x + n.x,
              i = p.y + t.y + n.y,
              o = c.element({
            tag: "text",
            content: n.properties.text,
            x: r,
            y: i
          });
          m.push(o);
        });
      });
      var v = c.element({
        tag: "g",
        content: m
      }),
          y = null;

      if (f.children.holderBg.properties.outline) {
        var w = f.children.holderBg.properties.outline;
        y = c.element({
          tag: "path",
          d: o(f.children.holderBg.width, f.children.holderBg.height, w.width),
          "stroke-width": w.width,
          stroke: w.fill,
          fill: "none"
        });
      }

      var b = r(f.children.holderBg, "rect"),
          x = [];
      x.push(b), w && x.push(y), x.push(v);
      var S = c.element({
        tag: "g",
        id: d,
        content: x
      }),
          A = c.element({
        tag: "style",
        content: g,
        type: "text/css"
      }),
          C = c.element({
        tag: "defs",
        content: A
      }),
          E = c.element({
        tag: "svg",
        content: [C, S],
        width: f.properties.width,
        height: f.properties.height,
        xmlns: u,
        viewBox: [0, 0, f.properties.width, f.properties.height].join(" "),
        preserveAspectRatio: "none"
      }),
          k = a(E);
      k = h + k[0];
      var T = s.svgStringToDataURI(k, "background" === t.mode);
      return T;
    };
  }, function (e, t, n) {
    n(14);

    e.exports = function r(e, t, n) {
      "use strict";

      function i(e) {
        var t = e.match(/^[\w-]+/),
            r = {
          tag: t ? t[0] : "div",
          attr: {},
          children: []
        },
            i = e.match(/#([\w-]+)/),
            o = e.match(/\$([\w-]+)/),
            a = e.match(/\.[\w-]+/g);
        return i && (r.attr.id = i[1], n[i[1]] = r), o && (n[o[1]] = r), a && (r.attr["class"] = a.join(" ").replace(/\./g, "")), e.match(/&$/g) && (f = !1), r;
      }

      function o(e, t) {
        if (null !== t && t !== !1 && void 0 !== t) return "string" != typeof t && "object" != _typeof(t) ? String(t) : t;
      }

      function a(e) {
        return e || 0 === e ? String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;") : "";
      }

      function s(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }

      var l,
          h,
          u,
          c,
          d = 1,
          f = !0;
      if (n = n || {}, "string" == typeof e[0]) e[0] = i(e[0]);else {
        if (!Array.isArray(e[0])) throw new Error("First element of array must be a string, or an array and not " + JSON.stringify(e[0]));
        d = 0;
      }

      for (; d < e.length; d++) {
        if (e[d] === !1 || null === e[d]) {
          e[0] = !1;
          break;
        }

        if (void 0 !== e[d] && e[d] !== !0) if ("string" == typeof e[d]) f && (e[d] = s(e[d])), e[0].children.push(e[d]);else if ("number" == typeof e[d]) e[0].children.push(e[d]);else if (Array.isArray(e[d])) {
          if (Array.isArray(e[d][0])) {
            if (e[d].reverse().forEach(function (t) {
              e.splice(d + 1, 0, t);
            }), 0 !== d) continue;
            d++;
          }

          r(e[d], t, n), e[d][0] && e[0].children.push(e[d][0]);
        } else if ("function" == typeof e[d]) u = e[d];else {
          if ("object" != _typeof(e[d])) throw new TypeError('"' + e[d] + '" is not allowed as a value.');

          for (h in e[d]) {
            e[d].hasOwnProperty(h) && null !== e[d][h] && e[d][h] !== !1 && ("style" === h && "object" == _typeof(e[d][h]) ? e[0].attr[h] = JSON.stringify(e[d][h], o).slice(2, -2).replace(/","/g, ";").replace(/":"/g, ":").replace(/\\"/g, "'") : e[0].attr[h] = e[d][h]);
          }
        }
      }

      if (e[0] !== !1) {
        l = "<" + e[0].tag;

        for (c in e[0].attr) {
          e[0].attr.hasOwnProperty(c) && (l += " " + c + '="' + a(e[0].attr[c]) + '"');
        }

        l += ">", e[0].children.forEach(function (e) {
          l += e;
        }), l += "</" + e[0].tag + ">", e[0] = l;
      }

      return n[0] = e[0], u && u(e[0]), n;
    };
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = "" + e,
          n = r.exec(t);
      if (!n) return t;
      var i,
          o = "",
          a = 0,
          s = 0;

      for (a = n.index; a < t.length; a++) {
        switch (t.charCodeAt(a)) {
          case 34:
            i = "&quot;";
            break;

          case 38:
            i = "&amp;";
            break;

          case 39:
            i = "&#39;";
            break;

          case 60:
            i = "&lt;";
            break;

          case 62:
            i = "&gt;";
            break;

          default:
            continue;
        }

        s !== a && (o += t.substring(s, a)), s = a + 1, o += i;
      }

      return s !== a ? o + t.substring(s, a) : o;
    }

    var r = /["'&<>]/;
    e.exports = n;
  }, function (e, t, n) {
    var r = n(9),
        i = n(7);

    e.exports = function () {
      var e = r.newEl("canvas"),
          t = null;
      return function (n) {
        null == t && (t = e.getContext("2d"));
        var r = i.canvasRatio(),
            o = n.root;
        e.width = r * o.properties.width, e.height = r * o.properties.height, t.textBaseline = "middle";
        var a = o.children.holderBg,
            s = r * a.width,
            l = r * a.height,
            h = 2,
            u = h / 2;
        t.fillStyle = a.properties.fill, t.fillRect(0, 0, s, l), a.properties.outline && (t.strokeStyle = a.properties.outline.fill, t.lineWidth = a.properties.outline.width, t.moveTo(u, u), t.lineTo(s - u, u), t.lineTo(s - u, l - u), t.lineTo(u, l - u), t.lineTo(u, u), t.moveTo(0, u), t.lineTo(s, l - u), t.moveTo(0, l - u), t.lineTo(s, u), t.stroke());
        var c = o.children.holderTextGroup;
        t.font = c.properties.font.weight + " " + r * c.properties.font.size + c.properties.font.units + " " + c.properties.font.family + ", monospace", t.fillStyle = c.properties.fill;

        for (var d in c.children) {
          var f = c.children[d];

          for (var p in f.children) {
            var g = f.children[p],
                m = r * (c.x + f.x + g.x),
                v = r * (c.y + f.y + g.y + c.properties.leading / 2);
            t.fillText(g.properties.text, m, v);
          }
        }

        return e.toDataURL("image/png");
      };
    }();
  }]);
}), function (e, t) {
  t && (Holder = e.Holder);
}(this, "undefined" != typeof Meteor && "undefined" != typeof Package);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hvbGRlci5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJIb2xkZXIiLCJyZXF1aXJlIiwiYWRkVGhlbWUiLCJiZyIsImZnIiwidGV4dCIsImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJkcm9wZG93bkNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzdHlsZSIsImRpc3BsYXkiLCJlIiwidCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuIiwiciIsImNyZWF0ZUVsZW1lbnQiLCJvIiwiZG9jdW1lbnRFbGVtZW50IiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiX3FzYSIsInN0eWxlU2hlZXQiLCJjc3NUZXh0Iiwic2Nyb2xsQnkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzaGlmdCIsInJlbW92ZUF0dHJpYnV0ZSIsInB1c2giLCJxdWVyeVNlbGVjdG9yIiwiU3RyaW5nIiwicmVwbGFjZSIsIk9iamVjdCIsImtleXMiLCJUeXBlRXJyb3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJBcnJheSIsImZvckVhY2giLCJhcmd1bWVudHMiLCJhdG9iIiwiYSIsIkVycm9yIiwidGVzdCIsImluZGV4T2YiLCJjaGFyQXQiLCJmcm9tQ2hhckNvZGUiLCJqb2luIiwiYnRvYSIsInMiLCJsIiwiaCIsInUiLCJjaGFyQ29kZUF0IiwiX19wcm90b19fIiwiY29uc3RydWN0b3IiLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJub3ciLCJnZXRUaW1lIiwidGltaW5nIiwibmF2aWdhdGlvblN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJpZCIsImxvYWRlZCIsIm0iLCJjIiwicCIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiZG9tYWluIiwibW9kZSIsImVsIiwiZmxhZ3MiLCJlbmdpbmVTZXR0aW5ncyIsInRoZW1lIiwiayIsIk8iLCJzZXR0aW5ncyIsInRoZW1lcyIsImdyYXkiLCJzdHlsZXNoZWV0cyIsImluc3RhbmNlT3B0aW9ucyIsInNsaWNlIiwic3BsaXQiLCJob2xkZXJVUkwiLCJtYXRjaCIsImZsdWlkIiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwidiIsInBhcnNlIiwidyIsInRydXRoeSIsInJhdGlvIiwicGFyc2VGbG9hdCIsIk1hdGgiLCJmbG9vciIsImF1dG8iLCJwYXJzZUNvbG9yIiwiYXV0b0ZnIiwidGV4dG1vZGUiLCJzaXplIiwiZm9udCIsImFsaWduIiwibGluZVdyYXAiLCJub3dyYXAiLCJvdXRsaW5lIiwicmFuZG9tIiwidmFycyIsImNhY2hlIiwidGhlbWVLZXlzIiwiZCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJmIiwiZW5jb2RlSHRtbEVudGl0eSIsImciLCJub0ZvbnRGYWxsYmFjayIsInNldHVwIiwic3VwcG9ydHNDYW52YXMiLCJyZW5kZXJlciIsInJlUmVuZGVyIiwiZ2V0QXR0cmlidXRlIiwieCIsInNldEF0dHIiLCJ5IiwiZGF0YUF0dHIiLCJob2xkZXJEYXRhIiwiYWx0IiwiYiIsImhvbGRlclNldHRpbmdzIiwiYmFja2dyb3VuZENvbG9yIiwicmVzaXplVXBkYXRlIiwicmVzaXphYmxlSW1hZ2VzIiwiRSIsIkMiLCJzdXBwb3J0c1NWRyIsImJhY2tncm91bmRJbWFnZSIsIm5vQmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kU2l6ZSIsInNyYyIsImRhdGEiLCJ0eXBlIiwibWF4IiwiZGVmYXVsdHMiLCJmYW1pbHkiLCJzY2FsZSIsInVuaXRzIiwid2VpZ2h0IiwiZm9udHdlaWdodCIsIm5vV3JhcCIsImV4YWN0RGltZW5zaW9ucyIsImxpbmVXcmFwUmF0aW8iLCJTaGFwZSIsIlJlY3QiLCJmaWxsIiwicmVzaXplIiwicm9vdCIsImFkZCIsIlMiLCJwcm9wZXJ0aWVzIiwibGlnaHRlbiIsImxpZ2h0ZXJUaGFuIiwidG9IZXgiLCJhbHBoYSIsImJsZW5kQWxwaGEiLCJHcm91cCIsIm1vdmVUbyIsInRleHRQb3NpdGlvbkRhdGEiLCJ6IiwibGVhZGluZyIsImJvdW5kaW5nQm94IiwibGluZUNvdW50IiwiQSIsIndvcmRzIiwiVGV4dCIsIlQiLCJzcGFjZVdpZHRoIiwiY2hpbGRyZW4iLCJwYXJzZUludCIsIm1pbiIsInJvdW5kIiwibm9kZVR5cGUiLCJmbHVpZENvbmZpZyIsImZsdWlkSGVpZ2h0IiwiZmx1aWRXaWR0aCIsImluaXRpYWxEaW1lbnNpb25zIiwiaW52aXNpYmxlSW1hZ2VzIiwiRiIsInJ1biIsImltYWdlcyIsInZpc2liaWxpdHlDaGVja1N0YXJ0ZWQiLCJpbnZpc2libGVJZCIsImRlYm91bmNlVGltZXIiLCJkZWJvdW5jZSIsImV4dGVuZCIsImRpbWVuc2lvbkNoZWNrIiwiaiIsInN2Z19ucyIsInZlcnNpb24iLCJhZGRJbWFnZSIsImdldE5vZGVBcnJheSIsIm5ld0VsIiwic2V0UmVzaXplVXBkYXRlIiwicHJlZW1wdGVkIiwicmVuZGVyZXJzIiwiYmdub2RlcyIsInN0eWxlbm9kZXMiLCJvYmplY3RzIiwic3ZnWE1MU3R5bGVzaGVldCIsImF0dHJpYnV0ZXMiLCJyZWwiLCJocmVmIiwidmFsdWUiLCJwcm90b2NvbCIsImhvc3QiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGF0YVNyYyIsInJlbmRlcmVkIiwiaW1hZ2VFeGlzdHMiLCJzb2NpYWwiLCJpbmR1c3RyaWFsIiwic2t5IiwidmluZSIsImxhdmEiLCJjcmVhdGVUZXh0Tm9kZSIsImJvZHkiLCJpbml0U1ZHIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImhvbGRlclRleHRHcm91cCIsImNzc1Byb3BzIiwibm9kZVZhbHVlIiwiZ2V0QkJveCIsImNlaWwiLCJnZXRDb21wdXRlZFRleHRMZW5ndGgiLCJkZWNvZGVIdG1sRW50aXR5IiwiRCIsInJlZ2V4IiwiZ2V0Q29udGV4dCIsInRvRGF0YVVSTCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZVNWR1JlY3QiLCJhdHRhY2hFdmVudCIsIlR1cmJvbGlua3MiLCJyZWFkeVN0YXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZyYW1lRWxlbWVudCIsImRvU2Nyb2xsIiwiaXNSZWFkeSIsIndpbmRvdyIsImVuY29kZVVSSUNvbXBvbmVudCIsImRlY29kZVVSSUNvbXBvbmVudCIsImV4ZWMiLCJzdHJpbmdpZnkiLCJyaWdodCIsIl9pc0J1ZmZlciIsImlzQnVmZmVyIiwidG9TdHJpbmciLCJ2YWx1ZU9mIiwiYXBwbHkiLCJwYXJlbnQiLCJuYW1lIiwidW5zaGlmdCIsIkltYWdlIiwib25lcnJvciIsIm9ubG9hZCIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiY2FudmFzUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsImJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZE5vZGVzIiwidmlld0JveCIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJzdmdTdHJpbmdUb0RhdGFVUkkiLCJ1bmVzY2FwZSIsInNlcmlhbGl6ZVNWRyIsIlhNTFNlcmlhbGl6ZXIiLCJjcmVhdGVYTUwiLCJjcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24iLCJpbnNlcnRCZWZvcmUiLCJzZXJpYWxpemVUb1N0cmluZyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIk5vZGVMaXN0IiwiTm9kZSIsIkhUTUxDb2xsZWN0aW9uIiwib3JpZ2luYWwiLCJzZXQiLCJyZ2IyaGV4IiwibWFwIiwiaHNsMnJnYiIsImFicyIsInJhdyIsInJnYiIsInl1diIsImVsZW1lbnQiLCJ0YWciLCJjb250ZW50IiwiTnVtYmVyIiwiaG9sZGVyQmciLCJzdHJva2UiLCJ4bWxucyIsImF0dHIiLCJpc0FycmF5IiwiSlNPTiIsInJldmVyc2UiLCJzcGxpY2UiLCJpbmRleCIsInN1YnN0cmluZyIsInRleHRCYXNlbGluZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lVG8iLCJmaWxsVGV4dCIsIk1ldGVvciIsIlBhY2thZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdI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QTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSG9sZGVyID0gcmVxdWlyZSgnLi9ob2xkZXIubWluJyk7XG5yZXF1aXJlKCcuL2Ryb3Bkb3duJyk7XG5cbkhvbGRlci5hZGRUaGVtZSgndGh1bWInLCB7XG4gICAgYmc6ICcjNTU1OTVjJyxcbiAgICBmZzogJyNlY2VlZWYnLFxuICAgIHRleHQ6ICdUaHVtYm5haWwnXG59KTtcblxuXG4iLCIvLyogTG9vcCB0aHJvdWdoIGFsbCBkcm9wZG93biBidXR0b25zIHRvIHRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyBpdHMgZHJvcGRvd24gY29udGVudCAtIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGhhdmUgbXVsdGlwbGUgZHJvcGRvd25zIHdpdGhvdXQgYW55IGNvbmZsaWN0ICovXG52YXIgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJvcGRvd24tYnRuXCIpO1xudmFyIGk7XG5cbmZvciAoaSA9IDA7IGkgPCBkcm9wZG93bi5sZW5ndGg7IGkrKykge1xuICAgIGRyb3Bkb3duW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB2YXIgZHJvcGRvd25Db250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlmIChkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCIvKiFcblxuSG9sZGVyIC0gY2xpZW50IHNpZGUgaW1hZ2UgcGxhY2Vob2xkZXJzXG5WZXJzaW9uIDIuOS40K2NhYmlsXG7CqSAyMDE2IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jb1xuXG5TaXRlOiAgICAgaHR0cDovL2hvbGRlcmpzLmNvbVxuSXNzdWVzOiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9pbXNreS9ob2xkZXIvaXNzdWVzXG5MaWNlbnNlOiAgTUlUXG5cbiovXG4hZnVuY3Rpb24oZSl7aWYoZS5kb2N1bWVudCl7dmFyIHQ9ZS5kb2N1bWVudDt0LnF1ZXJ5U2VsZWN0b3JBbGx8fCh0LnF1ZXJ5U2VsZWN0b3JBbGw9ZnVuY3Rpb24obil7dmFyIHIsaT10LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPVtdO2Zvcih0LmRvY3VtZW50RWxlbWVudC5maXJzdENoaWxkLmFwcGVuZENoaWxkKGkpLHQuX3FzYT1bXSxpLnN0eWxlU2hlZXQuY3NzVGV4dD1uK1wie3gtcXNhOmV4cHJlc3Npb24oZG9jdW1lbnQuX3FzYSAmJiBkb2N1bWVudC5fcXNhLnB1c2godGhpcykpfVwiLGUuc2Nyb2xsQnkoMCwwKSxpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSk7dC5fcXNhLmxlbmd0aDspcj10Ll9xc2Euc2hpZnQoKSxyLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIngtcXNhXCIpLG8ucHVzaChyKTtyZXR1cm4gdC5fcXNhPW51bGwsb30pLHQucXVlcnlTZWxlY3Rvcnx8KHQucXVlcnlTZWxlY3Rvcj1mdW5jdGlvbihlKXt2YXIgbj10LnF1ZXJ5U2VsZWN0b3JBbGwoZSk7cmV0dXJuIG4ubGVuZ3RoP25bMF06bnVsbH0pLHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZXx8KHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1mdW5jdGlvbihlKXtyZXR1cm4gZT1TdHJpbmcoZSkucmVwbGFjZSgvXnxcXHMrL2csXCIuXCIpLHQucXVlcnlTZWxlY3RvckFsbChlKX0pLE9iamVjdC5rZXlzfHwoT2JqZWN0LmtleXM9ZnVuY3Rpb24oZSl7aWYoZSE9PU9iamVjdChlKSl0aHJvdyBUeXBlRXJyb3IoXCJPYmplY3Qua2V5cyBjYWxsZWQgb24gbm9uLW9iamVjdFwiKTt2YXIgdCxuPVtdO2Zvcih0IGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCkmJm4ucHVzaCh0KTtyZXR1cm4gbn0pLEFycmF5LnByb3RvdHlwZS5mb3JFYWNofHwoQXJyYXkucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09dGhpc3x8bnVsbD09PXRoaXMpdGhyb3cgVHlwZUVycm9yKCk7dmFyIHQ9T2JqZWN0KHRoaXMpLG49dC5sZW5ndGg+Pj4wO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgVHlwZUVycm9yKCk7dmFyIHIsaT1hcmd1bWVudHNbMV07Zm9yKHI9MDtyPG47cisrKXIgaW4gdCYmZS5jYWxsKGksdFtyXSxyLHQpfSksZnVuY3Rpb24oZSl7dmFyIHQ9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO2UuYXRvYj1lLmF0b2J8fGZ1bmN0aW9uKGUpe2U9U3RyaW5nKGUpO3ZhciBuLHI9MCxpPVtdLG89MCxhPTA7aWYoZT1lLnJlcGxhY2UoL1xccy9nLFwiXCIpLGUubGVuZ3RoJTQ9PT0wJiYoZT1lLnJlcGxhY2UoLz0rJC8sXCJcIikpLGUubGVuZ3RoJTQ9PT0xKXRocm93IEVycm9yKFwiSW52YWxpZENoYXJhY3RlckVycm9yXCIpO2lmKC9bXitcXC8wLTlBLVphLXpdLy50ZXN0KGUpKXRocm93IEVycm9yKFwiSW52YWxpZENoYXJhY3RlckVycm9yXCIpO2Zvcig7cjxlLmxlbmd0aDspbj10LmluZGV4T2YoZS5jaGFyQXQocikpLG89bzw8NnxuLGErPTYsMjQ9PT1hJiYoaS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUobz4+MTYmMjU1KSksaS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUobz4+OCYyNTUpKSxpLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUmbykpLGE9MCxvPTApLHIrPTE7cmV0dXJuIDEyPT09YT8obz4+PTQsaS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1Jm8pKSk6MTg9PT1hJiYobz4+PTIsaS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUobz4+OCYyNTUpKSxpLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUmbykpKSxpLmpvaW4oXCJcIil9LGUuYnRvYT1lLmJ0b2F8fGZ1bmN0aW9uKGUpe2U9U3RyaW5nKGUpO3ZhciBuLHIsaSxvLGEscyxsLGg9MCx1PVtdO2lmKC9bXlxceDAwLVxceEZGXS8udGVzdChlKSl0aHJvdyBFcnJvcihcIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiKTtmb3IoO2g8ZS5sZW5ndGg7KW49ZS5jaGFyQ29kZUF0KGgrKykscj1lLmNoYXJDb2RlQXQoaCsrKSxpPWUuY2hhckNvZGVBdChoKyspLG89bj4+MixhPSgzJm4pPDw0fHI+PjQscz0oMTUmcik8PDJ8aT4+NixsPTYzJmksaD09PWUubGVuZ3RoKzI/KHM9NjQsbD02NCk6aD09PWUubGVuZ3RoKzEmJihsPTY0KSx1LnB1c2godC5jaGFyQXQobyksdC5jaGFyQXQoYSksdC5jaGFyQXQocyksdC5jaGFyQXQobCkpO3JldHVybiB1LmpvaW4oXCJcIil9fShlKSxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5fHwoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9fcHJvdG9fX3x8dGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7cmV0dXJuIGUgaW4gdGhpcyYmKCEoZSBpbiB0KXx8dFtlXSE9PXRoaXNbZV0pfSksZnVuY3Rpb24oKXtpZihcInBlcmZvcm1hbmNlXCJpbiBlPT0hMSYmKGUucGVyZm9ybWFuY2U9e30pLERhdGUubm93PURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpfSxcIm5vd1wiaW4gZS5wZXJmb3JtYW5jZT09ITEpe3ZhciB0PURhdGUubm93KCk7cGVyZm9ybWFuY2UudGltaW5nJiZwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0JiYodD1wZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSxlLnBlcmZvcm1hbmNlLm5vdz1mdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpLXR9fX0oKSxlLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KGUud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lJiZlLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lPyFmdW5jdGlvbihlKXtlLnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbih0KXtyZXR1cm4gd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dChlLnBlcmZvcm1hbmNlLm5vdygpKX0pfSxlLmNhbmNlbEFuaW1hdGlvbkZyYW1lPWUud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV9KGUpOmUubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lJiZlLm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lPyFmdW5jdGlvbihlKXtlLnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbih0KXtyZXR1cm4gbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7dChlLnBlcmZvcm1hbmNlLm5vdygpKX0pfSxlLmNhbmNlbEFuaW1hdGlvbkZyYW1lPWUubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWV9KGUpOiFmdW5jdGlvbihlKXtlLnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbih0KXtyZXR1cm4gZS5zZXRUaW1lb3V0KHQsMWUzLzYwKX0sZS5jYW5jZWxBbmltYXRpb25GcmFtZT1lLmNsZWFyVGltZW91dH0oZSkpfX0odGhpcyksZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkhvbGRlcj10KCk6ZS5Ib2xkZXI9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBpPW5bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLHQpLGkubG9hZGVkPSEwLGkuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigxKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsdCxuLHIpe3ZhciBhPWkobi5zdWJzdHIobi5sYXN0SW5kZXhPZihlLmRvbWFpbikpLGUpO2EmJm8oe21vZGU6bnVsbCxlbDpyLGZsYWdzOmEsZW5naW5lU2V0dGluZ3M6dH0pfWZ1bmN0aW9uIGkoZSx0KXt2YXIgbj17dGhlbWU6ayhPLnNldHRpbmdzLnRoZW1lcy5ncmF5LG51bGwpLHN0eWxlc2hlZXRzOnQuc3R5bGVzaGVldHMsaW5zdGFuY2VPcHRpb25zOnR9LHI9ZS5pbmRleE9mKFwiP1wiKSxpPVtlXTtyIT09LTEmJihpPVtlLnNsaWNlKDAsciksZS5zbGljZShyKzEpXSk7dmFyIG89aVswXS5zcGxpdChcIi9cIik7bi5ob2xkZXJVUkw9ZTt2YXIgYT1vWzFdLHM9YS5tYXRjaCgvKFtcXGRdK3A/KXgoW1xcZF0rcD8pLyk7aWYoIXMpcmV0dXJuITE7aWYobi5mbHVpZD1hLmluZGV4T2YoXCJwXCIpIT09LTEsbi5kaW1lbnNpb25zPXt3aWR0aDpzWzFdLnJlcGxhY2UoXCJwXCIsXCIlXCIpLGhlaWdodDpzWzJdLnJlcGxhY2UoXCJwXCIsXCIlXCIpfSwyPT09aS5sZW5ndGgpe3ZhciBsPXYucGFyc2UoaVsxXSk7aWYody50cnV0aHkobC5yYXRpbykpe24uZmx1aWQ9ITA7dmFyIGg9cGFyc2VGbG9hdChuLmRpbWVuc2lvbnMud2lkdGgucmVwbGFjZShcIiVcIixcIlwiKSksdT1wYXJzZUZsb2F0KG4uZGltZW5zaW9ucy5oZWlnaHQucmVwbGFjZShcIiVcIixcIlwiKSk7dT1NYXRoLmZsb29yKDEwMCoodS9oKSksaD0xMDAsbi5kaW1lbnNpb25zLndpZHRoPWgrXCIlXCIsbi5kaW1lbnNpb25zLmhlaWdodD11K1wiJVwifWlmKG4uYXV0bz13LnRydXRoeShsLmF1dG8pLGwuYmcmJihuLnRoZW1lLmJnPXcucGFyc2VDb2xvcihsLmJnKSksbC5mZyYmKG4udGhlbWUuZmc9dy5wYXJzZUNvbG9yKGwuZmcpKSxsLmJnJiYhbC5mZyYmKG4uYXV0b0ZnPSEwKSxsLnRoZW1lJiZuLmluc3RhbmNlT3B0aW9ucy50aGVtZXMuaGFzT3duUHJvcGVydHkobC50aGVtZSkmJihuLnRoZW1lPWsobi5pbnN0YW5jZU9wdGlvbnMudGhlbWVzW2wudGhlbWVdLG51bGwpKSxsLnRleHQmJihuLnRleHQ9bC50ZXh0KSxsLnRleHRtb2RlJiYobi50ZXh0bW9kZT1sLnRleHRtb2RlKSxsLnNpemUmJihuLnNpemU9bC5zaXplKSxsLmZvbnQmJihuLmZvbnQ9bC5mb250KSxsLmFsaWduJiYobi5hbGlnbj1sLmFsaWduKSxsLmxpbmVXcmFwJiYobi5saW5lV3JhcD1sLmxpbmVXcmFwKSxuLm5vd3JhcD13LnRydXRoeShsLm5vd3JhcCksbi5vdXRsaW5lPXcudHJ1dGh5KGwub3V0bGluZSksdy50cnV0aHkobC5yYW5kb20pKXtPLnZhcnMuY2FjaGUudGhlbWVLZXlzPU8udmFycy5jYWNoZS50aGVtZUtleXN8fE9iamVjdC5rZXlzKG4uaW5zdGFuY2VPcHRpb25zLnRoZW1lcyk7dmFyIGM9Ty52YXJzLmNhY2hlLnRoZW1lS2V5c1swfE1hdGgucmFuZG9tKCkqTy52YXJzLmNhY2hlLnRoZW1lS2V5cy5sZW5ndGhdO24udGhlbWU9ayhuLmluc3RhbmNlT3B0aW9ucy50aGVtZXNbY10sbnVsbCl9fXJldHVybiBufWZ1bmN0aW9uIG8oZSl7dmFyIHQ9ZS5tb2RlLG49ZS5lbCxyPWUuZmxhZ3MsaT1lLmVuZ2luZVNldHRpbmdzLG89ci5kaW1lbnNpb25zLHM9ci50aGVtZSxsPW8ud2lkdGgrXCJ4XCIrby5oZWlnaHQ7dD1udWxsPT10P3IuZmx1aWQ/XCJmbHVpZFwiOlwiaW1hZ2VcIjp0O3ZhciBjPS9ob2xkZXJfKFthLXpdKykvZyxkPSExO2lmKG51bGwhPXIudGV4dCYmKHMudGV4dD1yLnRleHQsXCJvYmplY3RcIj09PW4ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe2Zvcih2YXIgZj1zLnRleHQuc3BsaXQoXCJcXFxcblwiKSxwPTA7cDxmLmxlbmd0aDtwKyspZltwXT13LmVuY29kZUh0bWxFbnRpdHkoZltwXSk7cy50ZXh0PWYuam9pbihcIlxcXFxuXCIpfWlmKHMudGV4dCl7dmFyIGc9cy50ZXh0Lm1hdGNoKGMpO251bGwhPT1nJiZnLmZvckVhY2goZnVuY3Rpb24oZSl7XCJob2xkZXJfZGltZW5zaW9uc1wiPT09ZSYmKHMudGV4dD1zLnRleHQucmVwbGFjZShlLGwpKX0pfXZhciBtPXIuaG9sZGVyVVJMLHY9ayhpLG51bGwpO2lmKHIuZm9udCYmKHMuZm9udD1yLmZvbnQsIXYubm9Gb250RmFsbGJhY2smJlwiaW1nXCI9PT1uLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJk8uc2V0dXAuc3VwcG9ydHNDYW52YXMmJlwic3ZnXCI9PT12LnJlbmRlcmVyJiYodj1rKHYse3JlbmRlcmVyOlwiY2FudmFzXCJ9KSkpLHIuZm9udCYmXCJjYW52YXNcIj09di5yZW5kZXJlciYmKHYucmVSZW5kZXI9ITApLFwiYmFja2dyb3VuZFwiPT10KW51bGw9PW4uZ2V0QXR0cmlidXRlKFwiZGF0YS1iYWNrZ3JvdW5kLXNyY1wiKSYmeC5zZXRBdHRyKG4se1wiZGF0YS1iYWNrZ3JvdW5kLXNyY1wiOm19KTtlbHNle3ZhciB5PXt9O3lbTy52YXJzLmRhdGFBdHRyXT1tLHguc2V0QXR0cihuLHkpfXIudGhlbWU9cyxuLmhvbGRlckRhdGE9e2ZsYWdzOnIsZW5naW5lU2V0dGluZ3M6dn0sXCJpbWFnZVwiIT10JiZcImZsdWlkXCIhPXR8fHguc2V0QXR0cihuLHthbHQ6cy50ZXh0P2Q/cy50ZXh0OnMudGV4dCtcIiBbXCIrbCtcIl1cIjpsfSk7dmFyIGI9e21vZGU6dCxlbDpuLGhvbGRlclNldHRpbmdzOntkaW1lbnNpb25zOm8sdGhlbWU6cyxmbGFnczpyfSxlbmdpbmVTZXR0aW5nczp2fTtcImltYWdlXCI9PXQ/KHIuYXV0b3x8KG4uc3R5bGUud2lkdGg9by53aWR0aCtcInB4XCIsbi5zdHlsZS5oZWlnaHQ9by5oZWlnaHQrXCJweFwiKSxcImh0bWxcIj09di5yZW5kZXJlcj9uLnN0eWxlLmJhY2tncm91bmRDb2xvcj1zLmJnOihhKGIpLFwiZXhhY3RcIj09ci50ZXh0bW9kZSYmKG4uaG9sZGVyRGF0YS5yZXNpemVVcGRhdGU9ITAsTy52YXJzLnJlc2l6YWJsZUltYWdlcy5wdXNoKG4pLGgobikpKSk6XCJiYWNrZ3JvdW5kXCI9PXQmJlwiaHRtbFwiIT12LnJlbmRlcmVyP2EoYik6XCJmbHVpZFwiPT10JiYobi5ob2xkZXJEYXRhLnJlc2l6ZVVwZGF0ZT0hMCxcIiVcIj09by5oZWlnaHQuc2xpY2UoLTEpP24uc3R5bGUuaGVpZ2h0PW8uaGVpZ2h0Om51bGwhPXIuYXV0byYmci5hdXRvfHwobi5zdHlsZS5oZWlnaHQ9by5oZWlnaHQrXCJweFwiKSxcIiVcIj09by53aWR0aC5zbGljZSgtMSk/bi5zdHlsZS53aWR0aD1vLndpZHRoOm51bGwhPXIuYXV0byYmci5hdXRvfHwobi5zdHlsZS53aWR0aD1vLndpZHRoK1wicHhcIiksXCJpbmxpbmVcIiE9bi5zdHlsZS5kaXNwbGF5JiZcIlwiIT09bi5zdHlsZS5kaXNwbGF5JiZcIm5vbmVcIiE9bi5zdHlsZS5kaXNwbGF5fHwobi5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksdShuKSxcImh0bWxcIj09di5yZW5kZXJlcj9uLnN0eWxlLmJhY2tncm91bmRDb2xvcj1zLmJnOihPLnZhcnMucmVzaXphYmxlSW1hZ2VzLnB1c2gobiksaChuKSkpfWZ1bmN0aW9uIGEoZSl7ZnVuY3Rpb24gbigpe3ZhciB0PW51bGw7c3dpdGNoKGwucmVuZGVyZXIpe2Nhc2VcImNhbnZhc1wiOnQ9RSh1LGUpO2JyZWFrO2Nhc2VcInN2Z1wiOnQ9Qyh1LGUpO2JyZWFrO2RlZmF1bHQ6dGhyb3dcIkhvbGRlcjogaW52YWxpZCByZW5kZXJlcjogXCIrbC5yZW5kZXJlcn1yZXR1cm4gdH12YXIgcj1udWxsLGk9ZS5tb2RlLG89ZS5lbCxhPWUuaG9sZGVyU2V0dGluZ3MsbD1lLmVuZ2luZVNldHRpbmdzO3N3aXRjaChsLnJlbmRlcmVyKXtjYXNlXCJzdmdcIjppZighTy5zZXR1cC5zdXBwb3J0c1NWRylyZXR1cm47YnJlYWs7Y2FzZVwiY2FudmFzXCI6aWYoIU8uc2V0dXAuc3VwcG9ydHNDYW52YXMpcmV0dXJuO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXZhciBoPXt3aWR0aDphLmRpbWVuc2lvbnMud2lkdGgsaGVpZ2h0OmEuZGltZW5zaW9ucy5oZWlnaHQsdGhlbWU6YS50aGVtZSxmbGFnczphLmZsYWdzfSx1PXMoaCk7aWYocj1uKCksbnVsbD09cil0aHJvd1wiSG9sZGVyOiBjb3VsZG4ndCByZW5kZXIgcGxhY2Vob2xkZXJcIjtcImJhY2tncm91bmRcIj09aT8oby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9XCJ1cmwoXCIrcitcIilcIixsLm5vQmFja2dyb3VuZFNpemV8fChvLnN0eWxlLmJhY2tncm91bmRTaXplPWgud2lkdGgrXCJweCBcIitoLmhlaWdodCtcInB4XCIpKTooXCJpbWdcIj09PW8ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT94LnNldEF0dHIobyx7c3JjOnJ9KTpcIm9iamVjdFwiPT09by5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZ4LnNldEF0dHIobyx7ZGF0YTpyLHR5cGU6XCJpbWFnZS9zdmcreG1sXCJ9KSxsLnJlUmVuZGVyJiZ0LnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgZT1uKCk7aWYobnVsbD09ZSl0aHJvd1wiSG9sZGVyOiBjb3VsZG4ndCByZW5kZXIgcGxhY2Vob2xkZXJcIjtcImltZ1wiPT09by5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3guc2V0QXR0cihvLHtzcmM6ZX0pOlwib2JqZWN0XCI9PT1vLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJnguc2V0QXR0cihvLHtkYXRhOmUsdHlwZTpcImltYWdlL3N2Zyt4bWxcIn0pfSwxNTApKSx4LnNldEF0dHIobyx7XCJkYXRhLWhvbGRlci1yZW5kZXJlZFwiOiEwfSl9ZnVuY3Rpb24gcyhlKXtmdW5jdGlvbiB0KGUsdCxuLHIpe3Qud2lkdGg9bix0LmhlaWdodD1yLGUud2lkdGg9TWF0aC5tYXgoZS53aWR0aCx0LndpZHRoKSxlLmhlaWdodCs9dC5oZWlnaHR9dmFyIG49Ty5kZWZhdWx0cy5zaXplO3N3aXRjaChwYXJzZUZsb2F0KGUudGhlbWUuc2l6ZSk/bj1lLnRoZW1lLnNpemU6cGFyc2VGbG9hdChlLmZsYWdzLnNpemUpJiYobj1lLmZsYWdzLnNpemUpLGUuZm9udD17ZmFtaWx5OmUudGhlbWUuZm9udD9lLnRoZW1lLmZvbnQ6XCJBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWZcIixzaXplOmwoZS53aWR0aCxlLmhlaWdodCxuLE8uZGVmYXVsdHMuc2NhbGUpLHVuaXRzOmUudGhlbWUudW5pdHM/ZS50aGVtZS51bml0czpPLmRlZmF1bHRzLnVuaXRzLHdlaWdodDplLnRoZW1lLmZvbnR3ZWlnaHQ/ZS50aGVtZS5mb250d2VpZ2h0OlwiYm9sZFwifSxlLnRleHQ9ZS50aGVtZS50ZXh0fHxNYXRoLmZsb29yKGUud2lkdGgpK1wieFwiK01hdGguZmxvb3IoZS5oZWlnaHQpLGUubm9XcmFwPWUudGhlbWUubm93cmFwfHxlLmZsYWdzLm5vd3JhcCxlLmFsaWduPWUudGhlbWUuYWxpZ258fGUuZmxhZ3MuYWxpZ258fFwiY2VudGVyXCIsZS5mbGFncy50ZXh0bW9kZSl7Y2FzZVwibGl0ZXJhbFwiOmUudGV4dD1lLmZsYWdzLmRpbWVuc2lvbnMud2lkdGgrXCJ4XCIrZS5mbGFncy5kaW1lbnNpb25zLmhlaWdodDticmVhaztjYXNlXCJleGFjdFwiOmlmKCFlLmZsYWdzLmV4YWN0RGltZW5zaW9ucylicmVhaztlLnRleHQ9TWF0aC5mbG9vcihlLmZsYWdzLmV4YWN0RGltZW5zaW9ucy53aWR0aCkrXCJ4XCIrTWF0aC5mbG9vcihlLmZsYWdzLmV4YWN0RGltZW5zaW9ucy5oZWlnaHQpfXZhciByPWUuZmxhZ3MubGluZVdyYXB8fE8uc2V0dXAubGluZVdyYXBSYXRpbyxpPWUud2lkdGgqcixvPWksYT1uZXcgeSh7d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9KSxzPWEuU2hhcGUsaD1uZXcgcy5SZWN0KFwiaG9sZGVyQmdcIix7ZmlsbDplLnRoZW1lLmJnfSk7aWYoaC5yZXNpemUoZS53aWR0aCxlLmhlaWdodCksYS5yb290LmFkZChoKSxlLmZsYWdzLm91dGxpbmUpe3ZhciB1PW5ldyBTKGgucHJvcGVydGllcy5maWxsKTt1PXUubGlnaHRlbih1LmxpZ2h0ZXJUaGFuKFwiN2Y3ZjdmXCIpPy0uMTouMSksaC5wcm9wZXJ0aWVzLm91dGxpbmU9e2ZpbGw6dS50b0hleCghMCksd2lkdGg6Mn19dmFyIGM9ZS50aGVtZS5mZztpZihlLmZsYWdzLmF1dG9GZyl7dmFyIGQ9bmV3IFMoaC5wcm9wZXJ0aWVzLmZpbGwpLGY9bmV3IFMoXCJmZmZcIikscD1uZXcgUyhcIjAwMFwiLHthbHBoYTouMjg1NzE0fSk7Yz1kLmJsZW5kQWxwaGEoZC5saWdodGVyVGhhbihcIjdmN2Y3ZlwiKT9wOmYpLnRvSGV4KCEwKX12YXIgZz1uZXcgcy5Hcm91cChcImhvbGRlclRleHRHcm91cFwiLHt0ZXh0OmUudGV4dCxhbGlnbjplLmFsaWduLGZvbnQ6ZS5mb250LGZpbGw6Y30pO2cubW92ZVRvKG51bGwsbnVsbCwxKSxhLnJvb3QuYWRkKGcpO3ZhciBtPWcudGV4dFBvc2l0aW9uRGF0YT16KGEpO2lmKCFtKXRocm93XCJIb2xkZXI6IHN0YWdpbmcgZmFsbGJhY2sgbm90IHN1cHBvcnRlZCB5ZXQuXCI7Zy5wcm9wZXJ0aWVzLmxlYWRpbmc9bS5ib3VuZGluZ0JveC5oZWlnaHQ7dmFyIHY9bnVsbCx3PW51bGw7aWYobS5saW5lQ291bnQ+MSl7dmFyIGIseD0wLEE9MCxDPTA7dz1uZXcgcy5Hcm91cChcImxpbmVcIitDKSxcImxlZnRcIiE9PWUuYWxpZ24mJlwicmlnaHRcIiE9PWUuYWxpZ258fChvPWUud2lkdGgqKDEtMiooMS1yKSkpO2Zvcih2YXIgRT0wO0U8bS53b3Jkcy5sZW5ndGg7RSsrKXt2YXIgaz1tLndvcmRzW0VdO3Y9bmV3IHMuVGV4dChrLnRleHQpO3ZhciBUPVwiXFxcXG5cIj09ay50ZXh0OyFlLm5vV3JhcCYmKHgray53aWR0aD49b3x8VD09PSEwKSYmKHQoZyx3LHgsZy5wcm9wZXJ0aWVzLmxlYWRpbmcpLGcuYWRkKHcpLHg9MCxBKz1nLnByb3BlcnRpZXMubGVhZGluZyxDKz0xLHc9bmV3IHMuR3JvdXAoXCJsaW5lXCIrQyksdy55PUEpLFQhPT0hMCYmKHYubW92ZVRvKHgsMCkseCs9bS5zcGFjZVdpZHRoK2sud2lkdGgsdy5hZGQodikpfWlmKHQoZyx3LHgsZy5wcm9wZXJ0aWVzLmxlYWRpbmcpLGcuYWRkKHcpLFwibGVmdFwiPT09ZS5hbGlnbilnLm1vdmVUbyhlLndpZHRoLWksbnVsbCxudWxsKTtlbHNlIGlmKFwicmlnaHRcIj09PWUuYWxpZ24pe2ZvcihiIGluIGcuY2hpbGRyZW4pdz1nLmNoaWxkcmVuW2JdLHcubW92ZVRvKGUud2lkdGgtdy53aWR0aCxudWxsLG51bGwpO2cubW92ZVRvKDAtKGUud2lkdGgtaSksbnVsbCxudWxsKX1lbHNle2ZvcihiIGluIGcuY2hpbGRyZW4pdz1nLmNoaWxkcmVuW2JdLHcubW92ZVRvKChnLndpZHRoLXcud2lkdGgpLzIsbnVsbCxudWxsKTtnLm1vdmVUbygoZS53aWR0aC1nLndpZHRoKS8yLG51bGwsbnVsbCl9Zy5tb3ZlVG8obnVsbCwoZS5oZWlnaHQtZy5oZWlnaHQpLzIsbnVsbCksKGUuaGVpZ2h0LWcuaGVpZ2h0KS8yPDAmJmcubW92ZVRvKG51bGwsMCxudWxsKX1lbHNlIHY9bmV3IHMuVGV4dChlLnRleHQpLHc9bmV3IHMuR3JvdXAoXCJsaW5lMFwiKSx3LmFkZCh2KSxnLmFkZCh3KSxcImxlZnRcIj09PWUuYWxpZ24/Zy5tb3ZlVG8oZS53aWR0aC1pLG51bGwsbnVsbCk6XCJyaWdodFwiPT09ZS5hbGlnbj9nLm1vdmVUbygwLShlLndpZHRoLWkpLG51bGwsbnVsbCk6Zy5tb3ZlVG8oKGUud2lkdGgtbS5ib3VuZGluZ0JveC53aWR0aCkvMixudWxsLG51bGwpLGcubW92ZVRvKG51bGwsKGUuaGVpZ2h0LW0uYm91bmRpbmdCb3guaGVpZ2h0KS8yLG51bGwpO3JldHVybiBhfWZ1bmN0aW9uIGwoZSx0LG4scil7dmFyIGk9cGFyc2VJbnQoZSwxMCksbz1wYXJzZUludCh0LDEwKSxhPU1hdGgubWF4KGksbykscz1NYXRoLm1pbihpLG8pLGw9LjgqTWF0aC5taW4ocyxhKnIpO3JldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KG4sbCkpfWZ1bmN0aW9uIGgoZSl7dmFyIHQ7dD1udWxsPT1lfHxudWxsPT1lLm5vZGVUeXBlP08udmFycy5yZXNpemFibGVJbWFnZXM6W2VdO2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIGk9dFtuXTtpZihpLmhvbGRlckRhdGEpe3ZhciBvPWkuaG9sZGVyRGF0YS5mbGFncyxzPVQoaSk7aWYocyl7aWYoIWkuaG9sZGVyRGF0YS5yZXNpemVVcGRhdGUpY29udGludWU7aWYoby5mbHVpZCYmby5hdXRvKXt2YXIgbD1pLmhvbGRlckRhdGEuZmx1aWRDb25maWc7c3dpdGNoKGwubW9kZSl7Y2FzZVwid2lkdGhcIjpzLmhlaWdodD1zLndpZHRoL2wucmF0aW87YnJlYWs7Y2FzZVwiaGVpZ2h0XCI6cy53aWR0aD1zLmhlaWdodCpsLnJhdGlvfX12YXIgaD17bW9kZTpcImltYWdlXCIsaG9sZGVyU2V0dGluZ3M6e2RpbWVuc2lvbnM6cyx0aGVtZTpvLnRoZW1lLGZsYWdzOm99LGVsOmksZW5naW5lU2V0dGluZ3M6aS5ob2xkZXJEYXRhLmVuZ2luZVNldHRpbmdzfTtcImV4YWN0XCI9PW8udGV4dG1vZGUmJihvLmV4YWN0RGltZW5zaW9ucz1zLGguaG9sZGVyU2V0dGluZ3MuZGltZW5zaW9ucz1vLmRpbWVuc2lvbnMpLGEoaCl9ZWxzZSBmKGkpfX19ZnVuY3Rpb24gdShlKXtpZihlLmhvbGRlckRhdGEpe3ZhciB0PVQoZSk7aWYodCl7dmFyIG49ZS5ob2xkZXJEYXRhLmZsYWdzLHI9e2ZsdWlkSGVpZ2h0OlwiJVwiPT1uLmRpbWVuc2lvbnMuaGVpZ2h0LnNsaWNlKC0xKSxmbHVpZFdpZHRoOlwiJVwiPT1uLmRpbWVuc2lvbnMud2lkdGguc2xpY2UoLTEpLG1vZGU6bnVsbCxpbml0aWFsRGltZW5zaW9uczp0fTtyLmZsdWlkV2lkdGgmJiFyLmZsdWlkSGVpZ2h0PyhyLm1vZGU9XCJ3aWR0aFwiLHIucmF0aW89ci5pbml0aWFsRGltZW5zaW9ucy53aWR0aC9wYXJzZUZsb2F0KG4uZGltZW5zaW9ucy5oZWlnaHQpKTohci5mbHVpZFdpZHRoJiZyLmZsdWlkSGVpZ2h0JiYoci5tb2RlPVwiaGVpZ2h0XCIsci5yYXRpbz1wYXJzZUZsb2F0KG4uZGltZW5zaW9ucy53aWR0aCkvci5pbml0aWFsRGltZW5zaW9ucy5oZWlnaHQpLGUuaG9sZGVyRGF0YS5mbHVpZENvbmZpZz1yfWVsc2UgZihlKX19ZnVuY3Rpb24gYygpe3ZhciBlLG49W10scj1PYmplY3Qua2V5cyhPLnZhcnMuaW52aXNpYmxlSW1hZ2VzKTtyLmZvckVhY2goZnVuY3Rpb24odCl7ZT1PLnZhcnMuaW52aXNpYmxlSW1hZ2VzW3RdLFQoZSkmJlwiaW1nXCI9PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmKG4ucHVzaChlKSxkZWxldGUgTy52YXJzLmludmlzaWJsZUltYWdlc1t0XSl9KSxuLmxlbmd0aCYmRi5ydW4oe2ltYWdlczpufSksc2V0VGltZW91dChmdW5jdGlvbigpe3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGMpfSwxMCl9ZnVuY3Rpb24gZCgpe08udmFycy52aXNpYmlsaXR5Q2hlY2tTdGFydGVkfHwodC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYyksTy52YXJzLnZpc2liaWxpdHlDaGVja1N0YXJ0ZWQ9ITApfWZ1bmN0aW9uIGYoZSl7ZS5ob2xkZXJEYXRhLmludmlzaWJsZUlkfHwoTy52YXJzLmludmlzaWJsZUlkKz0xLE8udmFycy5pbnZpc2libGVJbWFnZXNbXCJpXCIrTy52YXJzLmludmlzaWJsZUlkXT1lLGUuaG9sZGVyRGF0YS5pbnZpc2libGVJZD1PLnZhcnMuaW52aXNpYmxlSWQpfWZ1bmN0aW9uIHAoZSl7Ty52YXJzLmRlYm91bmNlVGltZXJ8fGUuY2FsbCh0aGlzKSxPLnZhcnMuZGVib3VuY2VUaW1lciYmdC5jbGVhclRpbWVvdXQoTy52YXJzLmRlYm91bmNlVGltZXIpLE8udmFycy5kZWJvdW5jZVRpbWVyPXQuc2V0VGltZW91dChmdW5jdGlvbigpe08udmFycy5kZWJvdW5jZVRpbWVyPW51bGwsZS5jYWxsKHRoaXMpfSxPLnNldHVwLmRlYm91bmNlKX1mdW5jdGlvbiBnKCl7cChmdW5jdGlvbigpe2gobnVsbCl9KX12YXIgbT1uKDIpLHY9bigzKSx5PW4oNiksdz1uKDcpLGI9big4KSx4PW4oOSksUz1uKDEwKSxBPW4oMTEpLEM9bigxMiksRT1uKDE1KSxrPXcuZXh0ZW5kLFQ9dy5kaW1lbnNpb25DaGVjayxqPUEuc3ZnX25zLEY9e3ZlcnNpb246QS52ZXJzaW9uLGFkZFRoZW1lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGwhPWUmJm51bGwhPXQmJihPLnNldHRpbmdzLnRoZW1lc1tlXT10KSxkZWxldGUgTy52YXJzLmNhY2hlLnRoZW1lS2V5cyx0aGlzfSxhZGRJbWFnZTpmdW5jdGlvbihlLHQpe3ZhciBuPXguZ2V0Tm9kZUFycmF5KHQpO3JldHVybiBuLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG49eC5uZXdFbChcImltZ1wiKSxyPXt9O3JbTy5zZXR1cC5kYXRhQXR0cl09ZSx4LnNldEF0dHIobixyKSx0LmFwcGVuZENoaWxkKG4pfSksdGhpc30sc2V0UmVzaXplVXBkYXRlOmZ1bmN0aW9uKGUsdCl7ZS5ob2xkZXJEYXRhJiYoZS5ob2xkZXJEYXRhLnJlc2l6ZVVwZGF0ZT0hIXQsZS5ob2xkZXJEYXRhLnJlc2l6ZVVwZGF0ZSYmaChlKSl9LHJ1bjpmdW5jdGlvbihlKXtlPWV8fHt9O3ZhciBuPXt9LGE9ayhPLnNldHRpbmdzLGUpO08udmFycy5wcmVlbXB0ZWQ9ITAsTy52YXJzLmRhdGFBdHRyPWEuZGF0YUF0dHJ8fE8uc2V0dXAuZGF0YUF0dHIsbi5yZW5kZXJlcj1hLnJlbmRlcmVyP2EucmVuZGVyZXI6Ty5zZXR1cC5yZW5kZXJlcixPLnNldHVwLnJlbmRlcmVycy5qb2luKFwiLFwiKS5pbmRleE9mKG4ucmVuZGVyZXIpPT09LTEmJihuLnJlbmRlcmVyPU8uc2V0dXAuc3VwcG9ydHNTVkc/XCJzdmdcIjpPLnNldHVwLnN1cHBvcnRzQ2FudmFzP1wiY2FudmFzXCI6XCJodG1sXCIpO3ZhciBzPXguZ2V0Tm9kZUFycmF5KGEuaW1hZ2VzKSxsPXguZ2V0Tm9kZUFycmF5KGEuYmdub2RlcyksaD14LmdldE5vZGVBcnJheShhLnN0eWxlbm9kZXMpLHU9eC5nZXROb2RlQXJyYXkoYS5vYmplY3RzKTtyZXR1cm4gbi5zdHlsZXNoZWV0cz1bXSxuLnN2Z1hNTFN0eWxlc2hlZXQ9ITAsbi5ub0ZvbnRGYWxsYmFjaz0hIWEubm9Gb250RmFsbGJhY2ssbi5ub0JhY2tncm91bmRTaXplPSEhYS5ub0JhY2tncm91bmRTaXplLGguZm9yRWFjaChmdW5jdGlvbihlKXtpZihlLmF0dHJpYnV0ZXMucmVsJiZlLmF0dHJpYnV0ZXMuaHJlZiYmXCJzdHlsZXNoZWV0XCI9PWUuYXR0cmlidXRlcy5yZWwudmFsdWUpe3ZhciB0PWUuYXR0cmlidXRlcy5ocmVmLnZhbHVlLHI9eC5uZXdFbChcImFcIik7ci5ocmVmPXQ7dmFyIGk9ci5wcm90b2NvbCtcIi8vXCIrci5ob3N0K3IucGF0aG5hbWUrci5zZWFyY2g7bi5zdHlsZXNoZWV0cy5wdXNoKGkpfX0pLGwuZm9yRWFjaChmdW5jdGlvbihlKXtpZih0LmdldENvbXB1dGVkU3R5bGUpe3ZhciByPXQuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kLWltYWdlXCIpLHM9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhY2tncm91bmQtc3JjXCIpLGw9c3x8cixoPW51bGwsdT1hLmRvbWFpbitcIi9cIixjPWwuaW5kZXhPZih1KTtpZigwPT09YyloPWw7ZWxzZSBpZigxPT09YyYmXCI/XCI9PT1sWzBdKWg9bC5zbGljZSgxKTtlbHNle3ZhciBkPWwuc3Vic3RyKGMpLm1hdGNoKC8oW15cXFwiXSopXCI/XFwpLyk7aWYobnVsbCE9PWQpaD1kWzFdO2Vsc2UgaWYoMD09PWwuaW5kZXhPZihcInVybChcIikpdGhyb3dcIkhvbGRlcjogdW5hYmxlIHRvIHBhcnNlIGJhY2tncm91bmQgVVJMOiBcIitsfWlmKGgpe3ZhciBmPWkoaCxhKTtmJiZvKHttb2RlOlwiYmFja2dyb3VuZFwiLGVsOmUsZmxhZ3M6ZixlbmdpbmVTZXR0aW5nczpufSl9fX0pLHUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD17fTt0cnl7dC5kYXRhPWUuZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSx0LmRhdGFTcmM9ZS5nZXRBdHRyaWJ1dGUoTy52YXJzLmRhdGFBdHRyKX1jYXRjaChpKXt9dmFyIG89bnVsbCE9dC5kYXRhJiYwPT09dC5kYXRhLmluZGV4T2YoYS5kb21haW4pLHM9bnVsbCE9dC5kYXRhU3JjJiYwPT09dC5kYXRhU3JjLmluZGV4T2YoYS5kb21haW4pO28/cihhLG4sdC5kYXRhLGUpOnMmJnIoYSxuLHQuZGF0YVNyYyxlKX0pLHMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD17fTt0cnl7dC5zcmM9ZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksdC5kYXRhU3JjPWUuZ2V0QXR0cmlidXRlKE8udmFycy5kYXRhQXR0ciksdC5yZW5kZXJlZD1lLmdldEF0dHJpYnV0ZShcImRhdGEtaG9sZGVyLXJlbmRlcmVkXCIpfWNhdGNoKGkpe312YXIgbz1udWxsIT10LnNyYyxzPW51bGwhPXQuZGF0YVNyYyYmMD09PXQuZGF0YVNyYy5pbmRleE9mKGEuZG9tYWluKSxsPW51bGwhPXQucmVuZGVyZWQmJlwidHJ1ZVwiPT10LnJlbmRlcmVkO28/MD09PXQuc3JjLmluZGV4T2YoYS5kb21haW4pP3IoYSxuLHQuc3JjLGUpOnMmJihsP3IoYSxuLHQuZGF0YVNyYyxlKTohZnVuY3Rpb24oZSx0LG4saSxvKXt3LmltYWdlRXhpc3RzKGUsZnVuY3Rpb24oZSl7ZXx8cih0LG4saSxvKX0pfSh0LnNyYyxhLG4sdC5kYXRhU3JjLGUpKTpzJiZyKGEsbix0LmRhdGFTcmMsZSl9KSx0aGlzfX0sTz17c2V0dGluZ3M6e2RvbWFpbjpcImhvbGRlci5qc1wiLGltYWdlczpcImltZ1wiLG9iamVjdHM6XCJvYmplY3RcIixiZ25vZGVzOlwiYm9keSAuaG9sZGVyanNcIixzdHlsZW5vZGVzOlwiaGVhZCBsaW5rLmhvbGRlcmpzXCIsdGhlbWVzOntncmF5OntiZzpcIiNFRUVFRUVcIixmZzpcIiNBQUFBQUFcIn0sc29jaWFsOntiZzpcIiMzYTVhOTdcIixmZzpcIiNGRkZGRkZcIn0saW5kdXN0cmlhbDp7Ymc6XCIjNDM0QTUyXCIsZmc6XCIjQzJGMjAwXCJ9LHNreTp7Ymc6XCIjMEQ4RkRCXCIsZmc6XCIjRkZGRkZGXCJ9LHZpbmU6e2JnOlwiIzM5REJBQ1wiLGZnOlwiIzFFMjkyQ1wifSxsYXZhOntiZzpcIiNGODU5MUFcIixmZzpcIiMxQzI4NDZcIn19fSxkZWZhdWx0czp7c2l6ZToxMCx1bml0czpcInB0XCIsc2NhbGU6MS8xNn19LHo9ZnVuY3Rpb24oKXt2YXIgZT1udWxsLHQ9bnVsbCxuPW51bGw7cmV0dXJuIGZ1bmN0aW9uKHIpe3ZhciBpPXIucm9vdDtpZihPLnNldHVwLnN1cHBvcnRzU1ZHKXt2YXIgbz0hMSxhPWZ1bmN0aW9uKGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKX07bnVsbCE9ZSYmZS5wYXJlbnROb2RlPT09ZG9jdW1lbnQuYm9keXx8KG89ITApLGU9Yi5pbml0U1ZHKGUsaS5wcm9wZXJ0aWVzLndpZHRoLGkucHJvcGVydGllcy5oZWlnaHQpLGUuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsbyYmKHQ9eC5uZXdFbChcInRleHRcIixqKSxuPWEobnVsbCkseC5zZXRBdHRyKHQse3g6MH0pLHQuYXBwZW5kQ2hpbGQobiksZS5hcHBlbmRDaGlsZCh0KSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpLGUuc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwiLGUuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGUuc3R5bGUudG9wPVwiLTEwMCVcIixlLnN0eWxlLmxlZnQ9XCItMTAwJVwiKTt2YXIgcz1pLmNoaWxkcmVuLmhvbGRlclRleHRHcm91cCxsPXMucHJvcGVydGllczt4LnNldEF0dHIodCx7eTpsLmZvbnQuc2l6ZSxzdHlsZTp3LmNzc1Byb3BzKHtcImZvbnQtd2VpZ2h0XCI6bC5mb250LndlaWdodCxcImZvbnQtc2l6ZVwiOmwuZm9udC5zaXplK2wuZm9udC51bml0cyxcImZvbnQtZmFtaWx5XCI6bC5mb250LmZhbWlseX0pfSksbi5ub2RlVmFsdWU9bC50ZXh0O3ZhciBoPXQuZ2V0QkJveCgpLHU9TWF0aC5jZWlsKGgud2lkdGgvaS5wcm9wZXJ0aWVzLndpZHRoKSxjPWwudGV4dC5zcGxpdChcIiBcIiksZD1sLnRleHQubWF0Y2goL1xcXFxuL2cpO3UrPW51bGw9PWQ/MDpkLmxlbmd0aCxuLm5vZGVWYWx1ZT1sLnRleHQucmVwbGFjZSgvWyBdKy9nLFwiXCIpO3ZhciBmPXQuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCkscD1oLndpZHRoLWYsZz1NYXRoLnJvdW5kKHAvTWF0aC5tYXgoMSxjLmxlbmd0aC0xKSksbT1bXTtpZih1PjEpe24ubm9kZVZhbHVlPVwiXCI7Zm9yKHZhciB2PTA7djxjLmxlbmd0aDt2KyspaWYoMCE9PWNbdl0ubGVuZ3RoKXtuLm5vZGVWYWx1ZT13LmRlY29kZUh0bWxFbnRpdHkoY1t2XSk7dmFyIHk9dC5nZXRCQm94KCk7bS5wdXNoKHt0ZXh0OmNbdl0sd2lkdGg6eS53aWR0aH0pfX1yZXR1cm4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHtzcGFjZVdpZHRoOmcsbGluZUNvdW50OnUsYm91bmRpbmdCb3g6aCx3b3JkczptfX1yZXR1cm4hMX19KCk7Zm9yKHZhciBEIGluIE8uZmxhZ3MpTy5mbGFncy5oYXNPd25Qcm9wZXJ0eShEKSYmKE8uZmxhZ3NbRF0ubWF0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIGUubWF0Y2godGhpcy5yZWdleCl9KTtPLnNldHVwPXtyZW5kZXJlcjpcImh0bWxcIixkZWJvdW5jZToxMDAscmF0aW86MSxzdXBwb3J0c0NhbnZhczohMSxzdXBwb3J0c1NWRzohMSxsaW5lV3JhcFJhdGlvOi45LGRhdGFBdHRyOlwiZGF0YS1zcmNcIixyZW5kZXJlcnM6W1wiaHRtbFwiLFwiY2FudmFzXCIsXCJzdmdcIl19LE8udmFycz17cHJlZW1wdGVkOiExLHJlc2l6YWJsZUltYWdlczpbXSxpbnZpc2libGVJbWFnZXM6e30saW52aXNpYmxlSWQ6MCx2aXNpYmlsaXR5Q2hlY2tTdGFydGVkOiExLGRlYm91bmNlVGltZXI6bnVsbCxjYWNoZTp7fX0sZnVuY3Rpb24oKXt2YXIgZT14Lm5ld0VsKFwiY2FudmFzXCIpO2UuZ2V0Q29udGV4dCYmZS50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikuaW5kZXhPZihcImRhdGE6aW1hZ2UvcG5nXCIpIT0tMSYmKE8uc2V0dXAucmVuZGVyZXI9XCJjYW52YXNcIixPLnNldHVwLnN1cHBvcnRzQ2FudmFzPSEwKSxkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMmJmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhqLFwic3ZnXCIpLmNyZWF0ZVNWR1JlY3QmJihPLnNldHVwLnJlbmRlcmVyPVwic3ZnXCIsTy5zZXR1cC5zdXBwb3J0c1NWRz0hMCl9KCksZCgpLG0mJm0oZnVuY3Rpb24oKXtPLnZhcnMucHJlZW1wdGVkfHxGLnJ1bigpLHQuYWRkRXZlbnRMaXN0ZW5lcj8odC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZywhMSksdC5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIixnLCExKSk6dC5hdHRhY2hFdmVudChcIm9ucmVzaXplXCIsZyksXCJvYmplY3RcIj09dHlwZW9mIHQuVHVyYm9saW5rcyYmdC5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicGFnZTpjaGFuZ2VcIixmdW5jdGlvbigpe0YucnVuKCl9KX0pLGUuZXhwb3J0cz1GfSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oZSl7ZnVuY3Rpb24gdChlKXtpZigheCl7aWYoIWEuYm9keSlyZXR1cm4gaSh0KTtmb3IoeD0hMDtlPVMuc2hpZnQoKTspaShlKX19ZnVuY3Rpb24gbihlKXsod3x8ZS50eXBlPT09bHx8YVtkXT09PWMpJiYocigpLHQoKSl9ZnVuY3Rpb24gcigpe3c/KGFbeV0obSxuLGgpLGVbeV0obCxuLGgpKTooYVtwXSh2LG4pLGVbcF0odSxuKSl9ZnVuY3Rpb24gaShlLHQpe3NldFRpbWVvdXQoZSwrdD49MD90OjEpfWZ1bmN0aW9uIG8oZSl7eD9pKGUpOlMucHVzaChlKX1udWxsPT1kb2N1bWVudC5yZWFkeVN0YXRlJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyJiYoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbiBDKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixDLCExKSxkb2N1bWVudC5yZWFkeVN0YXRlPVwiY29tcGxldGVcIn0sITEpLGRvY3VtZW50LnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIpO3ZhciBhPWUuZG9jdW1lbnQscz1hLmRvY3VtZW50RWxlbWVudCxsPVwibG9hZFwiLGg9ITEsdT1cIm9uXCIrbCxjPVwiY29tcGxldGVcIixkPVwicmVhZHlTdGF0ZVwiLGY9XCJhdHRhY2hFdmVudFwiLHA9XCJkZXRhY2hFdmVudFwiLGc9XCJhZGRFdmVudExpc3RlbmVyXCIsbT1cIkRPTUNvbnRlbnRMb2FkZWRcIix2PVwib25yZWFkeXN0YXRlY2hhbmdlXCIseT1cInJlbW92ZUV2ZW50TGlzdGVuZXJcIix3PWcgaW4gYSxiPWgseD1oLFM9W107aWYoYVtkXT09PWMpaSh0KTtlbHNlIGlmKHcpYVtnXShtLG4saCksZVtnXShsLG4saCk7ZWxzZXthW2ZdKHYsbiksZVtmXSh1LG4pO3RyeXtiPW51bGw9PWUuZnJhbWVFbGVtZW50JiZzfWNhdGNoKEEpe31iJiZiLmRvU2Nyb2xsJiYhZnVuY3Rpb24gRSgpe2lmKCF4KXt0cnl7Yi5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2goZSl7cmV0dXJuIGkoRSw1MCl9cigpLHQoKX19KCl9cmV0dXJuIG8udmVyc2lvbj1cIjEuNC4wXCIsby5pc1JlYWR5PWZ1bmN0aW9uKCl7cmV0dXJuIHh9LG99ZS5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm4od2luZG93KX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPWVuY29kZVVSSUNvbXBvbmVudCxpPWRlY29kZVVSSUNvbXBvbmVudCxvPW4oNCksYT1uKDUpLHM9LyhcXHcrKVxcWyhcXGQrKVxcXS8sbD0vXFx3K1xcLlxcdysvO3QucGFyc2U9ZnVuY3Rpb24oZSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJue307aWYoZT1vKGUpLFwiXCI9PT1lKXJldHVybnt9O1wiP1wiPT09ZS5jaGFyQXQoMCkmJihlPWUuc2xpY2UoMSkpO2Zvcih2YXIgdD17fSxuPWUuc3BsaXQoXCImXCIpLHI9MDtyPG4ubGVuZ3RoO3IrKyl7dmFyIGEsaCx1LGM9bltyXS5zcGxpdChcIj1cIiksZD1pKGNbMF0pO2lmKGE9cy5leGVjKGQpKXRbYVsxXV09dFthWzFdXXx8W10sdFthWzFdXVthWzJdXT1pKGNbMV0pO2Vsc2UgaWYoYT1sLnRlc3QoZCkpe2ZvcihhPWQuc3BsaXQoXCIuXCIpLGg9dDthLmxlbmd0aDspaWYodT1hLnNoaWZ0KCksdS5sZW5ndGgpe2lmKGhbdV0pe2lmKGhbdV0mJlwib2JqZWN0XCIhPXR5cGVvZiBoW3VdKWJyZWFrfWVsc2UgaFt1XT17fTthLmxlbmd0aHx8KGhbdV09aShjWzFdKSksaD1oW3VdfX1lbHNlIHRbY1swXV09bnVsbD09Y1sxXT9cIlwiOmkoY1sxXSl9cmV0dXJuIHR9LHQuc3RyaW5naWZ5PWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVyblwiXCI7dmFyIHQ9W107Zm9yKHZhciBuIGluIGUpe3ZhciBpPWVbbl07aWYoXCJhcnJheVwiIT1hKGkpKXQucHVzaChyKG4pK1wiPVwiK3IoZVtuXSkpO2Vsc2UgZm9yKHZhciBvPTA7bzxpLmxlbmd0aDsrK28pdC5wdXNoKHIobitcIltcIitvK1wiXVwiKStcIj1cIityKGlbb10pKX1yZXR1cm4gdC5qb2luKFwiJlwiKX19LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLFwiXCIpfXQ9ZS5leHBvcnRzPW4sdC5sZWZ0PWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL15cXHMqLyxcIlwiKX0sdC5yaWdodD1mdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9cXHMqJC8sXCJcIil9fSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oZSl7cmV0dXJuIShudWxsPT1lfHwhKGUuX2lzQnVmZmVyfHxlLmNvbnN0cnVjdG9yJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNvbnN0cnVjdG9yLmlzQnVmZmVyJiZlLmNvbnN0cnVjdG9yLmlzQnVmZmVyKGUpKSl9dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7c3dpdGNoKHIuY2FsbChlKSl7Y2FzZVwiW29iamVjdCBEYXRlXVwiOnJldHVyblwiZGF0ZVwiO2Nhc2VcIltvYmplY3QgUmVnRXhwXVwiOnJldHVyblwicmVnZXhwXCI7Y2FzZVwiW29iamVjdCBBcmd1bWVudHNdXCI6cmV0dXJuXCJhcmd1bWVudHNcIjtjYXNlXCJbb2JqZWN0IEFycmF5XVwiOnJldHVyblwiYXJyYXlcIjtjYXNlXCJbb2JqZWN0IEVycm9yXVwiOnJldHVyblwiZXJyb3JcIn1yZXR1cm4gbnVsbD09PWU/XCJudWxsXCI6dm9pZCAwPT09ZT9cInVuZGVmaW5lZFwiOmUhPT1lP1wibmFuXCI6ZSYmMT09PWUubm9kZVR5cGU/XCJlbGVtZW50XCI6bihlKT9cImJ1ZmZlclwiOihlPWUudmFsdWVPZj9lLnZhbHVlT2YoKTpPYmplY3QucHJvdG90eXBlLnZhbHVlT2YuYXBwbHkoZSksdHlwZW9mIGUpfX0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfXZhciBuPTEscj1mdW5jdGlvbihlKXtuKyssdGhpcy5wYXJlbnQ9bnVsbCx0aGlzLmNoaWxkcmVuPXt9LHRoaXMuaWQ9bix0aGlzLm5hbWU9XCJuXCIrbixcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmKHRoaXMubmFtZT1lKSx0aGlzLng9dGhpcy55PXRoaXMuej0wLHRoaXMud2lkdGg9dGhpcy5oZWlnaHQ9MH07ci5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKGUsdCl7bnVsbCE9ZSYmKHRoaXMud2lkdGg9ZSksbnVsbCE9dCYmKHRoaXMuaGVpZ2h0PXQpfSxyLnByb3RvdHlwZS5tb3ZlVG89ZnVuY3Rpb24oZSx0LG4pe3RoaXMueD1udWxsIT1lP2U6dGhpcy54LHRoaXMueT1udWxsIT10P3Q6dGhpcy55LHRoaXMuej1udWxsIT1uP246dGhpcy56fSxyLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5uYW1lO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0aGlzLmNoaWxkcmVuW3RdKXRocm93XCJTY2VuZUdyYXBoOiBjaGlsZCBhbHJlYWR5IGV4aXN0czogXCIrdDt0aGlzLmNoaWxkcmVuW3RdPWUsZS5wYXJlbnQ9dGhpc307dmFyIGk9ZnVuY3Rpb24oKXtyLmNhbGwodGhpcyxcInJvb3RcIiksdGhpcy5wcm9wZXJ0aWVzPWV9O2kucHJvdG90eXBlPW5ldyByO3ZhciBvPWZ1bmN0aW9uKGUsbil7aWYoci5jYWxsKHRoaXMsZSksdGhpcy5wcm9wZXJ0aWVzPXtmaWxsOlwiIzAwMDAwMFwifSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygbil0KHRoaXMucHJvcGVydGllcyxuKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvd1wiU2NlbmVHcmFwaDogaW52YWxpZCBub2RlIG5hbWVcIn07by5wcm90b3R5cGU9bmV3IHI7dmFyIGE9ZnVuY3Rpb24oKXtvLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnR5cGU9XCJncm91cFwifTthLnByb3RvdHlwZT1uZXcgbzt2YXIgcz1mdW5jdGlvbigpe28uYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMudHlwZT1cInJlY3RcIn07cy5wcm90b3R5cGU9bmV3IG87dmFyIGw9ZnVuY3Rpb24oZSl7by5jYWxsKHRoaXMpLHRoaXMudHlwZT1cInRleHRcIix0aGlzLnByb3BlcnRpZXMudGV4dD1lfTtsLnByb3RvdHlwZT1uZXcgbzt2YXIgaD1uZXcgaTtyZXR1cm4gdGhpcy5TaGFwZT17UmVjdDpzLFRleHQ6bCxHcm91cDphfSx0aGlzLnJvb3Q9aCx0aGlzfTtlLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24oZSl7dC5leHRlbmQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIHIgaW4gZSllLmhhc093blByb3BlcnR5KHIpJiYobltyXT1lW3JdKTtpZihudWxsIT10KWZvcih2YXIgaSBpbiB0KXQuaGFzT3duUHJvcGVydHkoaSkmJihuW2ldPXRbaV0pO3JldHVybiBufSx0LmNzc1Byb3BzPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO2Zvcih2YXIgbiBpbiBlKWUuaGFzT3duUHJvcGVydHkobikmJnQucHVzaChuK1wiOlwiK2Vbbl0pO3JldHVybiB0LmpvaW4oXCI7XCIpfSx0LmVuY29kZUh0bWxFbnRpdHk9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLG49MCxyPWUubGVuZ3RoLTE7cj49MDtyLS0pbj1lLmNoYXJDb2RlQXQociksbj4xMjg/dC51bnNoaWZ0KFtcIiYjXCIsbixcIjtcIl0uam9pbihcIlwiKSk6dC51bnNoaWZ0KGVbcl0pO3JldHVybiB0LmpvaW4oXCJcIil9LHQuaW1hZ2VFeGlzdHM9ZnVuY3Rpb24oZSx0KXt2YXIgbj1uZXcgSW1hZ2U7bi5vbmVycm9yPWZ1bmN0aW9uKCl7dC5jYWxsKHRoaXMsITEpfSxuLm9ubG9hZD1mdW5jdGlvbigpe3QuY2FsbCh0aGlzLCEwKX0sbi5zcmM9ZX0sdC5kZWNvZGVIdG1sRW50aXR5PWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLyYjKFxcZCspOy9nLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodCl9KX0sdC5kaW1lbnNpb25DaGVjaz1mdW5jdGlvbihlKXt2YXIgdD17aGVpZ2h0OmUuY2xpZW50SGVpZ2h0LHdpZHRoOmUuY2xpZW50V2lkdGh9O3JldHVybiEoIXQuaGVpZ2h0fHwhdC53aWR0aCkmJnR9LHQudHJ1dGh5PWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP1widHJ1ZVwiPT09ZXx8XCJ5ZXNcIj09PWV8fFwiMVwiPT09ZXx8XCJvblwiPT09ZXx8XCLinJNcIj09PWU6ISFlfSx0LnBhcnNlQ29sb3I9ZnVuY3Rpb24oZSl7dmFyIHQsbj0vKF4oPzojPylbMC05YS1mXXs2fSQpfCheKD86Iz8pWzAtOWEtZl17M30kKS9pLHI9L15yZ2JcXCgoXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC8saT0vXnJnYmFcXCgoXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooMFxcLlxcZHsxLH18MSlcXCkkLyxvPWUubWF0Y2gobik7cmV0dXJuIG51bGwhPT1vPyh0PW9bMV18fG9bMl0sXCIjXCIhPT10WzBdP1wiI1wiK3Q6dCk6KG89ZS5tYXRjaChyKSxudWxsIT09bz90PVwicmdiKFwiK28uc2xpY2UoMSkuam9pbihcIixcIikrXCIpXCI6KG89ZS5tYXRjaChpKSxudWxsIT09bz90PVwicmdiYShcIitvLnNsaWNlKDEpLmpvaW4oXCIsXCIpK1wiKVwiOm51bGwpKX0sdC5jYW52YXNSYXRpbz1mdW5jdGlvbigpe3ZhciB0PTEsbj0xO2lmKGUuZG9jdW1lbnQpe3ZhciByPWUuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtpZihyLmdldENvbnRleHQpe3ZhciBpPXIuZ2V0Q29udGV4dChcIjJkXCIpO3Q9ZS5kZXZpY2VQaXhlbFJhdGlvfHwxLG49aS53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvfHxpLm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW98fGkubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvfHxpLm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvfHxpLmJhY2tpbmdTdG9yZVBpeGVsUmF0aW98fDF9fXJldHVybiB0L259fSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUpe3ZhciByPW4oOSksaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsbz04O3QuaW5pdFNWRz1mdW5jdGlvbihlLHQsbil7dmFyIGEscyxsPSExO2UmJmUucXVlcnlTZWxlY3Rvcj8ocz1lLnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKSxudWxsPT09cyYmKGw9ITApKTooZT1yLm5ld0VsKFwic3ZnXCIsaSksbD0hMCksbCYmKGE9ci5uZXdFbChcImRlZnNcIixpKSxzPXIubmV3RWwoXCJzdHlsZVwiLGkpLHIuc2V0QXR0cihzLHt0eXBlOlwidGV4dC9jc3NcIn0pLGEuYXBwZW5kQ2hpbGQocyksZS5hcHBlbmRDaGlsZChhKSksZS53ZWJraXRNYXRjaGVzU2VsZWN0b3ImJmUuc2V0QXR0cmlidXRlKFwieG1sbnNcIixpKTtmb3IodmFyIGg9MDtoPGUuY2hpbGROb2Rlcy5sZW5ndGg7aCsrKWUuY2hpbGROb2Rlc1toXS5ub2RlVHlwZT09PW8mJmUucmVtb3ZlQ2hpbGQoZS5jaGlsZE5vZGVzW2hdKTtmb3IoO3MuY2hpbGROb2Rlcy5sZW5ndGg7KXMucmVtb3ZlQ2hpbGQocy5jaGlsZE5vZGVzWzBdKTtyZXR1cm4gci5zZXRBdHRyKGUse3dpZHRoOnQsaGVpZ2h0Om4sdmlld0JveDpcIjAgMCBcIit0K1wiIFwiK24scHJlc2VydmVBc3BlY3RSYXRpbzpcIm5vbmVcIn0pLGV9LHQuc3ZnU3RyaW5nVG9EYXRhVVJJPWZ1bmN0aW9uKCl7dmFyIHQ9XCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCxcIixuPVwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTg7YmFzZTY0LFwiO3JldHVybiBmdW5jdGlvbihyLGkpe3JldHVybiBpP24rYnRvYShlLnVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChyKSkpOnQrZW5jb2RlVVJJQ29tcG9uZW50KHIpfX0oKSx0LnNlcmlhbGl6ZVNWRz1mdW5jdGlvbih0LG4pe2lmKGUuWE1MU2VyaWFsaXplcil7dmFyIGk9bmV3IFhNTFNlcmlhbGl6ZXIsbz1cIlwiLGE9bi5zdHlsZXNoZWV0cztpZihuLnN2Z1hNTFN0eWxlc2hlZXQpe2Zvcih2YXIgcz1yLmNyZWF0ZVhNTCgpLGw9YS5sZW5ndGgtMTtsPj0wO2wtLSl7dmFyIGg9cy5jcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oXCJ4bWwtc3R5bGVzaGVldFwiLCdocmVmPVwiJythW2xdKydcIiByZWw9XCJzdHlsZXNoZWV0XCInKTtzLmluc2VydEJlZm9yZShoLHMuZmlyc3RDaGlsZCl9cy5yZW1vdmVDaGlsZChzLmRvY3VtZW50RWxlbWVudCksbz1pLnNlcmlhbGl6ZVRvU3RyaW5nKHMpfXZhciB1PWkuc2VyaWFsaXplVG9TdHJpbmcodCk7cmV0dXJuIHU9dS5yZXBsYWNlKC9cXCZhbXA7KFxcI1swLTldezIsfVxcOykvZyxcIiYkMVwiKSxvK3V9fX0pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24oZSl7dC5uZXdFbD1mdW5jdGlvbih0LG4pe2lmKGUuZG9jdW1lbnQpcmV0dXJuIG51bGw9PW4/ZS5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpOmUuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG4sdCl9LHQuc2V0QXR0cj1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiB0KWUuc2V0QXR0cmlidXRlKG4sdFtuXSl9LHQuY3JlYXRlWE1MPWZ1bmN0aW9uKCl7aWYoZS5ET01QYXJzZXIpcmV0dXJuKG5ldyBET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhcIjx4bWwgLz5cIixcImFwcGxpY2F0aW9uL3htbFwiKX0sdC5nZXROb2RlQXJyYXk9ZnVuY3Rpb24odCl7dmFyIG49bnVsbDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCk6ZS5Ob2RlTGlzdCYmdCBpbnN0YW5jZW9mIGUuTm9kZUxpc3Q/bj10OmUuTm9kZSYmdCBpbnN0YW5jZW9mIGUuTm9kZT9uPVt0XTplLkhUTUxDb2xsZWN0aW9uJiZ0IGluc3RhbmNlb2YgZS5IVE1MQ29sbGVjdGlvbj9uPXQ6dCBpbnN0YW5jZW9mIEFycmF5P249dDpudWxsPT09dCYmKG49W10pLG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobil9fSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJih0aGlzLm9yaWdpbmFsPWUsXCIjXCI9PT1lLmNoYXJBdCgwKSYmKGU9ZS5zbGljZSgxKSksL1teYS1mMC05XSsvaS50ZXN0KGUpfHwoMz09PWUubGVuZ3RoJiYoZT1lLnJlcGxhY2UoLy4vZyxcIiQmJCZcIikpLDY9PT1lLmxlbmd0aCYmKHRoaXMuYWxwaGE9MSx0JiZ0LmFscGhhJiYodGhpcy5hbHBoYT10LmFscGhhKSx0aGlzLnNldChwYXJzZUludChlLDE2KSkpKSl9O24ucmdiMmhleD1mdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlKXt2YXIgdD0oMHxlKS50b1N0cmluZygxNik7cmV0dXJuIGU8MTYmJih0PVwiMFwiK3QpLHR9cmV0dXJuW2UsdCxuXS5tYXAocikuam9pbihcIlwiKX0sbi5oc2wycmdiPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lLzYwLGk9KDEtTWF0aC5hYnMoMipuLTEpKSp0LG89aSooMS1NYXRoLmFicyhwYXJzZUludChyKSUyLTEpKSxhPW4taS8yLHM9MCxsPTAsaD0wO3JldHVybiByPj0wJiZyPDE/KHM9aSxsPW8pOnI+PTEmJnI8Mj8ocz1vLGw9aSk6cj49MiYmcjwzPyhsPWksaD1vKTpyPj0zJiZyPDQ/KGw9byxoPWkpOnI+PTQmJnI8NT8ocz1vLGg9aSk6cj49NSYmcjw2JiYocz1pLGg9bykscys9YSxsKz1hLGgrPWEscz1wYXJzZUludCgyNTUqcyksbD1wYXJzZUludCgyNTUqbCksaD1wYXJzZUludCgyNTUqaCksW3MsbCxoXX0sbi5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUpe3RoaXMucmF3PWU7dmFyIHQ9KDE2NzExNjgwJnRoaXMucmF3KT4+MTYsbj0oNjUyODAmdGhpcy5yYXcpPj44LHI9MjU1JnRoaXMucmF3LGk9LjIxMjYqdCsuNzE1MipuKy4wNzIyKnIsbz0tLjA5OTkxKnQtLjMzNjA5Km4rLjQzNipyLGE9LjYxNSp0LS41NTg2MSpuLS4wNTYzOSpyO3JldHVybiB0aGlzLnJnYj17cjp0LGc6bixiOnJ9LHRoaXMueXV2PXt5OmksdTpvLHY6YX0sdGhpc30sbi5wcm90b3R5cGUubGlnaHRlbj1mdW5jdGlvbihlKXt2YXIgdD1NYXRoLm1pbigxLE1hdGgubWF4KDAsTWF0aC5hYnMoZSkpKSooZTwwPy0xOjEpLHI9MjU1KnR8MCxpPU1hdGgubWluKDI1NSxNYXRoLm1heCgwLHRoaXMucmdiLnIrcikpLG89TWF0aC5taW4oMjU1LE1hdGgubWF4KDAsdGhpcy5yZ2IuZytyKSksYT1NYXRoLm1pbigyNTUsTWF0aC5tYXgoMCx0aGlzLnJnYi5iK3IpKSxzPW4ucmdiMmhleChpLG8sYSk7cmV0dXJuIG5ldyBuKHMpfSxuLnByb3RvdHlwZS50b0hleD1mdW5jdGlvbihlKXtyZXR1cm4oZT9cIiNcIjpcIlwiKSt0aGlzLnJhdy50b1N0cmluZygxNil9LG4ucHJvdG90eXBlLmxpZ2h0ZXJUaGFuPWZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2Ygbnx8KGU9bmV3IG4oZSkpLHRoaXMueXV2Lnk+ZS55dXYueX0sbi5wcm90b3R5cGUuYmxlbmRBbHBoYT1mdW5jdGlvbihlKXtlIGluc3RhbmNlb2Ygbnx8KGU9bmV3IG4oZSkpO3ZhciB0PWUscj10aGlzLGk9dC5hbHBoYSp0LnJnYi5yKygxLXQuYWxwaGEpKnIucmdiLnIsbz10LmFscGhhKnQucmdiLmcrKDEtdC5hbHBoYSkqci5yZ2IuZyxhPXQuYWxwaGEqdC5yZ2IuYisoMS10LmFscGhhKSpyLnJnYi5iO3JldHVybiBuZXcgbihuLnJnYjJoZXgoaSxvLGEpKX0sZS5leHBvcnRzPW59LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXt2ZXJzaW9uOlwiMi45LjRcIixzdmdfbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSx0KXtyZXR1cm4gYy5lbGVtZW50KHt0YWc6dCx3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodCxmaWxsOmUucHJvcGVydGllcy5maWxsfSl9ZnVuY3Rpb24gaShlKXtyZXR1cm4gaC5jc3NQcm9wcyh7ZmlsbDplLmZpbGwsXCJmb250LXdlaWdodFwiOmUuZm9udC53ZWlnaHQsXCJmb250LWZhbWlseVwiOmUuZm9udC5mYW1pbHkrXCIsIG1vbm9zcGFjZVwiLFwiZm9udC1zaXplXCI6ZS5mb250LnNpemUrZS5mb250LnVuaXRzfSl9ZnVuY3Rpb24gbyhlLHQsbil7dmFyIHI9bi8yO3JldHVybltcIk1cIixyLHIsXCJIXCIsZS1yLFwiVlwiLHQtcixcIkhcIixyLFwiVlwiLDAsXCJNXCIsMCxyLFwiTFwiLGUsdC1yLFwiTVwiLDAsdC1yLFwiTFwiLGUscl0uam9pbihcIiBcIil9dmFyIGE9bigxMykscz1uKDgpLGw9bigxMSksaD1uKDcpLHU9bC5zdmdfbnMsYz17ZWxlbWVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnRhZyxuPWUuY29udGVudHx8XCJcIjtyZXR1cm4gZGVsZXRlIGUudGFnLGRlbGV0ZSBlLmNvbnRlbnQsW3QsbixlXX19O2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciBuPXQuZW5naW5lU2V0dGluZ3MsbD1uLnN0eWxlc2hlZXRzLGg9bC5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuJzw/eG1sLXN0eWxlc2hlZXQgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCInK2UrJ1wiPz4nfSkuam9pbihcIlxcblwiKSxkPVwiaG9sZGVyX1wiK051bWJlcihuZXcgRGF0ZSkudG9TdHJpbmcoMTYpLGY9ZS5yb290LHA9Zi5jaGlsZHJlbi5ob2xkZXJUZXh0R3JvdXAsZz1cIiNcIitkK1wiIHRleHQgeyBcIitpKHAucHJvcGVydGllcykrXCIgfSBcIjtwLnkrPS44KnAudGV4dFBvc2l0aW9uRGF0YS5ib3VuZGluZ0JveC5oZWlnaHQ7dmFyIG09W107T2JqZWN0LmtleXMocC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1wLmNoaWxkcmVuW2VdO09iamVjdC5rZXlzKHQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIG49dC5jaGlsZHJlbltlXSxyPXAueCt0Lngrbi54LGk9cC55K3QueStuLnksbz1jLmVsZW1lbnQoe3RhZzpcInRleHRcIixjb250ZW50Om4ucHJvcGVydGllcy50ZXh0LHg6cix5Oml9KTttLnB1c2gobyl9KX0pO3ZhciB2PWMuZWxlbWVudCh7dGFnOlwiZ1wiLGNvbnRlbnQ6bX0pLHk9bnVsbDtpZihmLmNoaWxkcmVuLmhvbGRlckJnLnByb3BlcnRpZXMub3V0bGluZSl7dmFyIHc9Zi5jaGlsZHJlbi5ob2xkZXJCZy5wcm9wZXJ0aWVzLm91dGxpbmU7eT1jLmVsZW1lbnQoe3RhZzpcInBhdGhcIixkOm8oZi5jaGlsZHJlbi5ob2xkZXJCZy53aWR0aCxmLmNoaWxkcmVuLmhvbGRlckJnLmhlaWdodCx3LndpZHRoKSxcInN0cm9rZS13aWR0aFwiOncud2lkdGgsc3Ryb2tlOncuZmlsbCxmaWxsOlwibm9uZVwifSl9dmFyIGI9cihmLmNoaWxkcmVuLmhvbGRlckJnLFwicmVjdFwiKSx4PVtdO3gucHVzaChiKSx3JiZ4LnB1c2goeSkseC5wdXNoKHYpO3ZhciBTPWMuZWxlbWVudCh7dGFnOlwiZ1wiLGlkOmQsY29udGVudDp4fSksQT1jLmVsZW1lbnQoe3RhZzpcInN0eWxlXCIsY29udGVudDpnLHR5cGU6XCJ0ZXh0L2Nzc1wifSksQz1jLmVsZW1lbnQoe3RhZzpcImRlZnNcIixjb250ZW50OkF9KSxFPWMuZWxlbWVudCh7dGFnOlwic3ZnXCIsY29udGVudDpbQyxTXSx3aWR0aDpmLnByb3BlcnRpZXMud2lkdGgsaGVpZ2h0OmYucHJvcGVydGllcy5oZWlnaHQseG1sbnM6dSx2aWV3Qm94OlswLDAsZi5wcm9wZXJ0aWVzLndpZHRoLGYucHJvcGVydGllcy5oZWlnaHRdLmpvaW4oXCIgXCIpLHByZXNlcnZlQXNwZWN0UmF0aW86XCJub25lXCJ9KSxrPWEoRSk7az1oK2tbMF07dmFyIFQ9cy5zdmdTdHJpbmdUb0RhdGFVUkkoayxcImJhY2tncm91bmRcIj09PXQubW9kZSk7cmV0dXJuIFR9fSxmdW5jdGlvbihlLHQsbil7bigxNCk7ZS5leHBvcnRzPWZ1bmN0aW9uIHIoZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkoZSl7dmFyIHQ9ZS5tYXRjaCgvXltcXHctXSsvKSxyPXt0YWc6dD90WzBdOlwiZGl2XCIsYXR0cjp7fSxjaGlsZHJlbjpbXX0saT1lLm1hdGNoKC8jKFtcXHctXSspLyksbz1lLm1hdGNoKC9cXCQoW1xcdy1dKykvKSxhPWUubWF0Y2goL1xcLltcXHctXSsvZyk7cmV0dXJuIGkmJihyLmF0dHIuaWQ9aVsxXSxuW2lbMV1dPXIpLG8mJihuW29bMV1dPXIpLGEmJihyLmF0dHJbXCJjbGFzc1wiXT1hLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xcLi9nLFwiXCIpKSxlLm1hdGNoKC8mJC9nKSYmKGY9ITEpLHJ9ZnVuY3Rpb24gbyhlLHQpe2lmKG51bGwhPT10JiZ0IT09ITEmJnZvaWQgMCE9PXQpcmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHQmJlwib2JqZWN0XCIhPXR5cGVvZiB0P1N0cmluZyh0KTp0fWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGV8fDA9PT1lP1N0cmluZyhlKS5yZXBsYWNlKC8mL2csXCImYW1wO1wiKS5yZXBsYWNlKC9cIi9nLFwiJnF1b3Q7XCIpOlwiXCJ9ZnVuY3Rpb24gcyhlKXtyZXR1cm4gU3RyaW5nKGUpLnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIikucmVwbGFjZSgvJy9nLFwiJmFwb3M7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvPi9nLFwiJmd0O1wiKX12YXIgbCxoLHUsYyxkPTEsZj0hMDtpZihuPW58fHt9LFwic3RyaW5nXCI9PXR5cGVvZiBlWzBdKWVbMF09aShlWzBdKTtlbHNle2lmKCFBcnJheS5pc0FycmF5KGVbMF0pKXRocm93IG5ldyBFcnJvcihcIkZpcnN0IGVsZW1lbnQgb2YgYXJyYXkgbXVzdCBiZSBhIHN0cmluZywgb3IgYW4gYXJyYXkgYW5kIG5vdCBcIitKU09OLnN0cmluZ2lmeShlWzBdKSk7ZD0wfWZvcig7ZDxlLmxlbmd0aDtkKyspe2lmKGVbZF09PT0hMXx8bnVsbD09PWVbZF0pe2VbMF09ITE7YnJlYWt9aWYodm9pZCAwIT09ZVtkXSYmZVtkXSE9PSEwKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBlW2RdKWYmJihlW2RdPXMoZVtkXSkpLGVbMF0uY2hpbGRyZW4ucHVzaChlW2RdKTtlbHNlIGlmKFwibnVtYmVyXCI9PXR5cGVvZiBlW2RdKWVbMF0uY2hpbGRyZW4ucHVzaChlW2RdKTtlbHNlIGlmKEFycmF5LmlzQXJyYXkoZVtkXSkpe2lmKEFycmF5LmlzQXJyYXkoZVtkXVswXSkpe2lmKGVbZF0ucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24odCl7ZS5zcGxpY2UoZCsxLDAsdCl9KSwwIT09ZCljb250aW51ZTtkKyt9cihlW2RdLHQsbiksZVtkXVswXSYmZVswXS5jaGlsZHJlbi5wdXNoKGVbZF1bMF0pfWVsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZVtkXSl1PWVbZF07ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgZVtkXSl0aHJvdyBuZXcgVHlwZUVycm9yKCdcIicrZVtkXSsnXCIgaXMgbm90IGFsbG93ZWQgYXMgYSB2YWx1ZS4nKTtmb3IoaCBpbiBlW2RdKWVbZF0uaGFzT3duUHJvcGVydHkoaCkmJm51bGwhPT1lW2RdW2hdJiZlW2RdW2hdIT09ITEmJihcInN0eWxlXCI9PT1oJiZcIm9iamVjdFwiPT10eXBlb2YgZVtkXVtoXT9lWzBdLmF0dHJbaF09SlNPTi5zdHJpbmdpZnkoZVtkXVtoXSxvKS5zbGljZSgyLC0yKS5yZXBsYWNlKC9cIixcIi9nLFwiO1wiKS5yZXBsYWNlKC9cIjpcIi9nLFwiOlwiKS5yZXBsYWNlKC9cXFxcXCIvZyxcIidcIik6ZVswXS5hdHRyW2hdPWVbZF1baF0pfX1pZihlWzBdIT09ITEpe2w9XCI8XCIrZVswXS50YWc7Zm9yKGMgaW4gZVswXS5hdHRyKWVbMF0uYXR0ci5oYXNPd25Qcm9wZXJ0eShjKSYmKGwrPVwiIFwiK2MrJz1cIicrYShlWzBdLmF0dHJbY10pKydcIicpO2wrPVwiPlwiLGVbMF0uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihlKXtsKz1lfSksbCs9XCI8L1wiK2VbMF0udGFnK1wiPlwiLGVbMF09bH1yZXR1cm4gblswXT1lWzBdLHUmJnUoZVswXSksbn19LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt2YXIgdD1cIlwiK2Usbj1yLmV4ZWModCk7aWYoIW4pcmV0dXJuIHQ7dmFyIGksbz1cIlwiLGE9MCxzPTA7Zm9yKGE9bi5pbmRleDthPHQubGVuZ3RoO2ErKyl7c3dpdGNoKHQuY2hhckNvZGVBdChhKSl7Y2FzZSAzNDppPVwiJnF1b3Q7XCI7YnJlYWs7Y2FzZSAzODppPVwiJmFtcDtcIjticmVhaztjYXNlIDM5Omk9XCImIzM5O1wiO2JyZWFrO2Nhc2UgNjA6aT1cIiZsdDtcIjticmVhaztjYXNlIDYyOmk9XCImZ3Q7XCI7YnJlYWs7ZGVmYXVsdDpjb250aW51ZX1zIT09YSYmKG8rPXQuc3Vic3RyaW5nKHMsYSkpLHM9YSsxLG8rPWl9cmV0dXJuIHMhPT1hP28rdC5zdWJzdHJpbmcocyxhKTpvfXZhciByPS9bXCInJjw+XS87ZS5leHBvcnRzPW59LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDkpLGk9big3KTtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgZT1yLm5ld0VsKFwiY2FudmFzXCIpLHQ9bnVsbDtyZXR1cm4gZnVuY3Rpb24obil7bnVsbD09dCYmKHQ9ZS5nZXRDb250ZXh0KFwiMmRcIikpO3ZhciByPWkuY2FudmFzUmF0aW8oKSxvPW4ucm9vdDtlLndpZHRoPXIqby5wcm9wZXJ0aWVzLndpZHRoLGUuaGVpZ2h0PXIqby5wcm9wZXJ0aWVzLmhlaWdodCx0LnRleHRCYXNlbGluZT1cIm1pZGRsZVwiO3ZhciBhPW8uY2hpbGRyZW4uaG9sZGVyQmcscz1yKmEud2lkdGgsbD1yKmEuaGVpZ2h0LGg9Mix1PWgvMjt0LmZpbGxTdHlsZT1hLnByb3BlcnRpZXMuZmlsbCx0LmZpbGxSZWN0KDAsMCxzLGwpLGEucHJvcGVydGllcy5vdXRsaW5lJiYodC5zdHJva2VTdHlsZT1hLnByb3BlcnRpZXMub3V0bGluZS5maWxsLHQubGluZVdpZHRoPWEucHJvcGVydGllcy5vdXRsaW5lLndpZHRoLHQubW92ZVRvKHUsdSksdC5saW5lVG8ocy11LHUpLHQubGluZVRvKHMtdSxsLXUpLHQubGluZVRvKHUsbC11KSx0LmxpbmVUbyh1LHUpLHQubW92ZVRvKDAsdSksdC5saW5lVG8ocyxsLXUpLHQubW92ZVRvKDAsbC11KSx0LmxpbmVUbyhzLHUpLHQuc3Ryb2tlKCkpO3ZhciBjPW8uY2hpbGRyZW4uaG9sZGVyVGV4dEdyb3VwO3QuZm9udD1jLnByb3BlcnRpZXMuZm9udC53ZWlnaHQrXCIgXCIrcipjLnByb3BlcnRpZXMuZm9udC5zaXplK2MucHJvcGVydGllcy5mb250LnVuaXRzK1wiIFwiK2MucHJvcGVydGllcy5mb250LmZhbWlseStcIiwgbW9ub3NwYWNlXCIsdC5maWxsU3R5bGU9Yy5wcm9wZXJ0aWVzLmZpbGw7Zm9yKHZhciBkIGluIGMuY2hpbGRyZW4pe3ZhciBmPWMuY2hpbGRyZW5bZF07Zm9yKHZhciBwIGluIGYuY2hpbGRyZW4pe3ZhciBnPWYuY2hpbGRyZW5bcF0sbT1yKihjLngrZi54K2cueCksdj1yKihjLnkrZi55K2cueStjLnByb3BlcnRpZXMubGVhZGluZy8yKTt0LmZpbGxUZXh0KGcucHJvcGVydGllcy50ZXh0LG0sdil9fXJldHVybiBlLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKX19KCl9XSl9KSxmdW5jdGlvbihlLHQpe3QmJihIb2xkZXI9ZS5Ib2xkZXIpO1xufSh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBNZXRlb3ImJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBQYWNrYWdlKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9