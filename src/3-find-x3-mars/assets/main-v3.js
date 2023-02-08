!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "./"),
    n((n.s = 174));
})([
  function (t, e, n) {
    "use strict";
    n.d(e, "f", function () {
      return r;
    }),
      n.d(e, "c", function () {
        return i;
      }),
      n.d(e, "a", function () {
        return a;
      }),
      n.d(e, "b", function () {
        return u;
      }),
      n.d(e, "d", function () {
        return c;
      }),
      n.d(e, "e", function () {
        return s;
      });
    n(8), n(137), n(104), n(13), n(9);
    function r(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function i(t, e) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      e && e.insertBefore(t, n);
    }
    var o = { cntDisabled: 0 };
    function a() {
      o.cntDisabled < 1
        ? ((o.cntDisabled = 1),
          (document.body.style.width = "".concat(
            document.body.clientWidth,
            "px"
          )),
          document.body.classList.add("no-scroll"))
        : (o.cntDisabled += 1);
    }
    function u() {
      o.cntDisabled <= 1
        ? ((o.cntDisabled = 0),
          document.body.classList.remove("no-scroll"),
          (document.body.style.width = ""))
        : (o.cntDisabled -= 1);
    }
    function c(t, e) {
      return t.querySelector(e);
    }
    function s(t, e) {
      return Array.from(t.querySelectorAll(e));
    }
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "e", function () {
        return i;
      }),
        n.d(e, "h", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return u;
        }),
        n.d(e, "g", function () {
          return c;
        }),
        n.d(e, "f", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return l;
        });
      n(81);
      var r = n(6);
      function i(e) {
        var n;
        return (
          (null === (n = t(e).offset()) || void 0 === n ? void 0 : n.top) || 0
        );
      }
      function o(t) {
        return (null == t ? void 0 : t.offsetWidth) || 0;
      }
      function a(t) {
        return (null == t ? void 0 : t.offsetHeight) || 0;
      }
      function u(t) {
        return i(t) + a(t);
      }
      function c(t) {
        return (window.innerWidth * t) / 100;
      }
      function s(t) {
        return (window.innerHeight * t) / 100;
      }
      function f(t) {
        var e = Object(r.d)();
        return ["320", "360", "400"].includes(e.alias)
          ? (t * e.ratio) / 0.4
          : t * e.ratio;
      }
      var l = f;
    }.call(this, n(30)));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    n(81);
    var r = n(6);
    function i() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : Object(r.d)();
      return ["320", "360", "400", "768"].includes(t.alias);
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return h;
    }),
      n.d(e, "b", function () {
        return c;
      }),
      n.d(e, "c", function () {
        return f;
      });
    n(43), n(81), n(38), n(105), n(46), n(59), n(35), n(205), n(101);
    var r = n(29),
      i = function () {
        return (i =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
    function o(t, e) {
      var n = {};
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]]);
      }
      return n;
    }
    var a = { bottom: 1, center: 0.5, top: 0, nextPage: 2, prevPage: -1 };
    function u(t) {
      return "number" == typeof t ? t : a[t] || 0;
    }
    function c(t) {
      if ("number" == typeof t)
        return { percent: 0, distance: t, targetPercent: 0 };
      if (Object.keys(a).includes(t))
        return { percent: a[t], distance: 0, targetPercent: 0 };
      var e = t.match(/(-?\d+(\.\d*)?)(%|px)?/i);
      return e
        ? "%" === e[3]
          ? { percent: parseFloat(e[1]) / 100, distance: 0, targetPercent: 0 }
          : { percent: 0, distance: parseFloat(e[1]), targetPercent: 0 }
        : (console.error("Invalid sticky top: " + JSON.stringify(t)),
          { percent: 0, distance: 0, targetPercent: 0 });
    }
    function s(t, e) {
      var n, r, i;
      return (
        void 0 === e && (e = "top"),
        "string" == typeof t || "number" == typeof t
          ? c(t)
          : {
              percent: u(null !== (n = t.percent) && void 0 !== n ? n : e),
              distance: null !== (r = t.distance) && void 0 !== r ? r : 0,
              targetPercent: u(
                null !== (i = t.targetPercent) && void 0 !== i ? i : 0
              ),
            }
      );
    }
    var f = r.a.singleton;
    function l(t) {
      var e = t.x,
        n = void 0 === e ? 0 : e,
        r = t.y,
        i = void 0 === r ? 0 : r,
        o = t.width,
        a = void 0 === o ? 0 : o,
        u = t.height,
        c = void 0 === u ? 0 : u;
      return {
        x: n,
        y: i,
        width: a,
        height: c,
        top: i,
        bottom: i + c,
        left: n,
        right: n + a,
      };
    }
    var d = (function () {
      function t(t, e) {
        var n = this,
          r = e.handlers,
          i = void 0 === r ? {} : r,
          o = e.start,
          a = void 0 === o ? { percent: "bottom", distance: 0 } : o,
          u = e.end,
          c = void 0 === u ? { percent: "top", distance: 0 } : u,
          f = e.before,
          d = e.after,
          p = e.root,
          h = void 0 === p ? window : p,
          v = e.passive,
          g = void 0 === v || v,
          m = e.forceInViewBoundary,
          y = void 0 === m || m,
          b = e.useIntersectionObserver,
          x = void 0 !== b && b;
        (this._state = "before"),
          (this.handleScroll = function () {
            n.refresh(),
              window.requestAnimationFrame(function () {
                var t = n,
                  e = t.targetRect,
                  r = t.boundaryYInView,
                  i = e.top,
                  o = e.bottom,
                  a = i > r.start ? "before" : o < r.end ? "after" : "inView";
                if (a !== n.state)
                  if (n.options.forceInViewBoundary && "inView" !== a) {
                    var u = l({
                      x: e.x,
                      width: e.width,
                      height: e.height,
                      y: "before" === a ? r.start : r.end - e.height,
                    });
                    "after" === a && n.handle("inView", u),
                      (n.state = a),
                      "before" === a && n.handle("inView", u);
                  } else n.state = a;
                n.handle(a, e), n.handle("always", e);
              });
          }),
          (this.root = h),
          (this.target = t),
          (this.handlers = i),
          (this.options = {
            passive: g,
            forceInViewBoundary: y,
            useIntersectionObserver: x,
          });
        var w = s(a, "bottom"),
          _ = s(c, "top");
        (this.placementsInView = { start: w, end: _ }),
          (this.placementsActive = {
            start: (f && s(f, "bottom")) || s("150%"),
            end: (d && s(d, "top")) || s("-50%"),
          }),
          window.requestAnimationFrame(function () {
            n.init();
          });
      }
      return (
        (t.create = function (e, n) {
          return new t(e, n);
        }),
        (t.prototype.destroy = function () {
          this.observer &&
            (this.observer.disconnect(), (this.observer = void 0)),
            this.root.removeEventListener("scroll", this.handleScroll);
        }),
        Object.defineProperty(t.prototype, "state", {
          get: function () {
            return this._state;
          },
          set: function (t) {
            var e = this._state;
            (this._state = t), this.onStateChange(t, e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "targetRect", {
          get: function () {
            return (
              this._targetRect ||
                (this._targetRect = this.target.getBoundingClientRect()),
              this._targetRect
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "rootRect", {
          get: function () {
            return (
              this._rootRect ||
                (this._rootRect =
                  this.root === window
                    ? l({
                        x: 0,
                        y: 0,
                        width: r.a.getWidth(),
                        height: r.a.getHeight(),
                      })
                    : this.root.getBoundingClientRect()),
              this._rootRect
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "rootMargin", {
          get: function () {
            var t = this.placementsActive,
              e = this.rootRect,
              n = t.start,
              r = t.end,
              i = this.calcPlacement(n),
              o = this.calcPlacement(r),
              a = e.height;
            return -o + "px 100% " + -(o >= i ? a - o - 1 : a - i) + "px 100%";
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "boundaryYActive", {
          get: function () {
            var t = this.placementsActive,
              e = t.start,
              n = t.end;
            return { start: this.calcPlacement(e), end: this.calcPlacement(n) };
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "boundaryYInView", {
          get: function () {
            var t = this.placementsInView,
              e = t.start,
              n = t.end;
            return { start: this.calcPlacement(e), end: this.calcPlacement(n) };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.init = function () {
          var t = this;
          this.observer && this.observer.disconnect();
          var e = this.root,
            n = this.rootMargin;
          this.options.useIntersectionObserver && window.IntersectionObserver
            ? ((this.observer = new window.IntersectionObserver(
                function (e) {
                  e[0].isIntersecting ? t.onActive() : t.onInactive();
                },
                { rootMargin: n, root: e instanceof Element ? e : void 0 }
              )),
              this.observer.observe(this.target))
            : this.onActive();
        }),
        (t.prototype.handle = function (t, e) {
          void 0 === e && (e = this.targetRect);
          var n = this,
            r = n.target,
            i = n.root,
            o = n.rootRect,
            a = n.boundaryYActive,
            u = n.boundaryYInView,
            c = n.handlers,
            s = c[t];
          s &&
            "done" ===
              s({
                target: r,
                root: i,
                targetRect: e,
                rootRect: o,
                boundaryYActive: a,
                boundaryYInView: u,
              }) &&
            (c[t] = void 0);
        }),
        (t.prototype.onStateChange = function (t, e) {
          var n = this.handlers,
            r = this.target;
          n.onStateChange &&
            "done" === n.onStateChange({ target: r, state: t, oldState: e }) &&
            (n.onStateChange = void 0);
        }),
        (t.prototype.refresh = function () {
          (this._targetRect = void 0),
            (this._rootRect = void 0),
            this.rootRect,
            this.targetRect;
        }),
        (t.prototype.onActive = function () {
          Object.keys(this.handlers).length > 0 &&
            (this.root.addEventListener("scroll", this.handleScroll, {
              passive: !0,
            }),
            window.addEventListener("resize", this.handleScroll, {
              passive: !0,
            }),
            this.handleScroll());
        }),
        (t.prototype.onInactive = function () {
          this.handleScroll(),
            this.root.removeEventListener("scroll", this.handleScroll);
        }),
        (t.prototype.calcPlacement = function (t) {
          var e = t.percent,
            n = t.distance,
            r = t.targetPercent,
            i = this.rootRect,
            o = this.targetRect;
          return i.height * e + n + o.height * r;
        }),
        t
      );
    })();
    function p(t) {
      if (t)
        return function (e) {
          var n = e.target,
            r = e.targetRect,
            i = e.boundaryYInView,
            o = i.start,
            a = o - i.end + r.height,
            u = o - r.top;
          return t({ target: n, distance: u, total: a });
        };
    }
    function h(t, e) {
      void 0 === e && (e = {});
      var n = e.handlers,
        r = o(e, ["handlers"]);
      return new d(
        t,
        i(i({}, r), {
          handlers: n && {
            onStateChange: n.onStateChange,
            before: p(n.before),
            inView: p(n.inView),
            after: p(n.after),
            always: p(n.always),
          },
        })
      );
    }
  },
  function (t, e, n) {
    var r = n(5),
      i = n(41).f,
      o = n(32),
      a = n(33),
      u = n(86),
      c = n(115),
      s = n(70);
    t.exports = function (t, e) {
      var n,
        f,
        l,
        d,
        p,
        h = t.target,
        v = t.global,
        g = t.stat;
      if ((n = v ? r : g ? r[h] || u(h, {}) : (r[h] || {}).prototype))
        for (f in e) {
          if (
            ((d = e[f]),
            (l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f]),
            !s(v ? f : h + (g ? "." : "#") + f, t.forced) && void 0 !== l)
          ) {
            if (typeof d == typeof l) continue;
            c(d, l);
          }
          (t.sham || (l && l.sham)) && o(d, "sham", !0), a(n, f, d, t);
        }
    };
  },
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        Function("return this")();
    }.call(this, n(83)));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "d", function () {
      return u;
    }),
      n.d(e, "e", function () {
        return c;
      }),
      n.d(e, "b", function () {
        return l;
      }),
      n.d(e, "a", function () {
        return d;
      });
    n(8), n(147), n(211);
    var r = n(47),
      i = n(29),
      o = n(110),
      a = i.a.singleton;
    function u() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
        e = t.width,
        n = t.height;
      return Object(i.b)(r.b, { width: e, height: n });
    }
    function c() {
      return a.height;
    }
    var s = u(),
      f = [];
    function l() {
      var t = a.height;
      a.addHeightListener(function (e) {
        (e > t || a.width > 1024) &&
          (!(function (t) {
            document.documentElement.style.setProperty(
              "--vh",
              "".concat((t + Number.EPSILON) / 100, "px")
            );
          })(e),
          (t = e));
      });
    }
    function d(t) {
      var e = document.body.clientWidth,
        n = document.body.clientHeight;
      function r() {
        (document.body.clientWidth === e && document.body.clientHeight === n) ||
          (t(),
          (e = document.body.clientWidth),
          (n = document.body.clientHeight));
      }
      (window.addEventListener("resize", r), o.a) &&
        new o.a(r).observe(document.body);
    }
    a.addSizeListener(function (t) {
      var e = u(t);
      e !== s &&
        (f.forEach(function (t) {
          return t(e, s);
        }),
        (s = e));
    }),
      (e.c = a);
  },
  function (t, e, n) {
    var r = n(5),
      i = n(88),
      o = n(19),
      a = n(89),
      u = n(94),
      c = n(119),
      s = i("wks"),
      f = r.Symbol,
      l = c ? f : (f && f.withoutSetter) || a;
    t.exports = function (t) {
      return (
        o(s, t) || (u && o(f, t) ? (s[t] = f[t]) : (s[t] = l("Symbol." + t))),
        s[t]
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(121);
    r({ target: "Array", proto: !0, forced: [].forEach != i }, { forEach: i });
  },
  function (t, e, n) {
    "use strict";
    var r = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0,
      },
      i = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0,
      },
      o = [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skew",
        "skewX",
        "skewY",
        "perspective",
        "matrix",
        "matrix3d",
      ],
      a = { CSS: {}, springs: {} };
    function u(t, e, n) {
      return Math.min(Math.max(t, e), n);
    }
    function c(t, e) {
      return t.indexOf(e) > -1;
    }
    function s(t, e) {
      return t.apply(null, e);
    }
    var f = {
      arr: function (t) {
        return Array.isArray(t);
      },
      obj: function (t) {
        return c(Object.prototype.toString.call(t), "Object");
      },
      pth: function (t) {
        return f.obj(t) && t.hasOwnProperty("totalLength");
      },
      svg: function (t) {
        return t instanceof SVGElement;
      },
      inp: function (t) {
        return t instanceof HTMLInputElement;
      },
      dom: function (t) {
        return t.nodeType || f.svg(t);
      },
      str: function (t) {
        return "string" == typeof t;
      },
      fnc: function (t) {
        return "function" == typeof t;
      },
      und: function (t) {
        return void 0 === t;
      },
      hex: function (t) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
      },
      rgb: function (t) {
        return /^rgb/.test(t);
      },
      hsl: function (t) {
        return /^hsl/.test(t);
      },
      col: function (t) {
        return f.hex(t) || f.rgb(t) || f.hsl(t);
      },
      key: function (t) {
        return (
          !r.hasOwnProperty(t) &&
          !i.hasOwnProperty(t) &&
          "targets" !== t &&
          "keyframes" !== t
        );
      },
    };
    function l(t) {
      var e = /\(([^)]+)\)/.exec(t);
      return e
        ? e[1].split(",").map(function (t) {
            return parseFloat(t);
          })
        : [];
    }
    function d(t, e) {
      var n = l(t),
        r = u(f.und(n[0]) ? 1 : n[0], 0.1, 100),
        i = u(f.und(n[1]) ? 100 : n[1], 0.1, 100),
        o = u(f.und(n[2]) ? 10 : n[2], 0.1, 100),
        c = u(f.und(n[3]) ? 0 : n[3], 0.1, 100),
        s = Math.sqrt(i / r),
        d = o / (2 * Math.sqrt(i * r)),
        p = d < 1 ? s * Math.sqrt(1 - d * d) : 0,
        h = d < 1 ? (d * s - c) / p : -c + s;
      function v(t) {
        var n = e ? (e * t) / 1e3 : t;
        return (
          (n =
            d < 1
              ? Math.exp(-n * d * s) *
                (1 * Math.cos(p * n) + h * Math.sin(p * n))
              : (1 + h * n) * Math.exp(-n * s)),
          0 === t || 1 === t ? t : 1 - n
        );
      }
      return e
        ? v
        : function () {
            var e = a.springs[t];
            if (e) return e;
            for (var n = 0, r = 0; ; )
              if (1 === v((n += 1 / 6))) {
                if (++r >= 16) break;
              } else r = 0;
            var i = n * (1 / 6) * 1e3;
            return (a.springs[t] = i), i;
          };
    }
    function p(t) {
      return (
        void 0 === t && (t = 10),
        function (e) {
          return Math.ceil(u(e, 1e-6, 1) * t) * (1 / t);
        }
      );
    }
    var h,
      v,
      g = (function () {
        function t(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function e(t, e) {
          return 3 * e - 6 * t;
        }
        function n(t) {
          return 3 * t;
        }
        function r(r, i, o) {
          return ((t(i, o) * r + e(i, o)) * r + n(i)) * r;
        }
        function i(r, i, o) {
          return 3 * t(i, o) * r * r + 2 * e(i, o) * r + n(i);
        }
        return function (t, e, n, o) {
          if (0 <= t && t <= 1 && 0 <= n && n <= 1) {
            var a = new Float32Array(11);
            if (t !== e || n !== o)
              for (var u = 0; u < 11; ++u) a[u] = r(0.1 * u, t, n);
            return function (i) {
              return t === e && n === o
                ? i
                : 0 === i || 1 === i
                ? i
                : r(c(i), e, o);
            };
          }
          function c(e) {
            for (var o = 0, u = 1; 10 !== u && a[u] <= e; ++u) o += 0.1;
            --u;
            var c = o + 0.1 * ((e - a[u]) / (a[u + 1] - a[u])),
              s = i(c, t, n);
            return s >= 0.001
              ? (function (t, e, n, o) {
                  for (var a = 0; a < 4; ++a) {
                    var u = i(e, n, o);
                    if (0 === u) return e;
                    e -= (r(e, n, o) - t) / u;
                  }
                  return e;
                })(e, c, t, n)
              : 0 === s
              ? c
              : (function (t, e, n, i, o) {
                  var a,
                    u,
                    c = 0;
                  do {
                    (a = r((u = e + (n - e) / 2), i, o) - t) > 0
                      ? (n = u)
                      : (e = u);
                  } while (Math.abs(a) > 1e-7 && ++c < 10);
                  return u;
                })(e, o, o + 0.1, t, n);
          }
        };
      })(),
      m =
        ((h = {
          linear: function () {
            return function (t) {
              return t;
            };
          },
        }),
        (v = {
          Sine: function () {
            return function (t) {
              return 1 - Math.cos((t * Math.PI) / 2);
            };
          },
          Circ: function () {
            return function (t) {
              return 1 - Math.sqrt(1 - t * t);
            };
          },
          Back: function () {
            return function (t) {
              return t * t * (3 * t - 2);
            };
          },
          Bounce: function () {
            return function (t) {
              for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; );
              return (
                1 / Math.pow(4, 3 - n) -
                7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
              );
            };
          },
          Elastic: function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = 0.5);
            var n = u(t, 1, 10),
              r = u(e, 0.1, 2);
            return function (t) {
              return 0 === t || 1 === t
                ? t
                : -n *
                    Math.pow(2, 10 * (t - 1)) *
                    Math.sin(
                      ((t - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) *
                        (2 * Math.PI)) /
                        r
                    );
            };
          },
        }),
        ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, e) {
          v[t] = function () {
            return function (t) {
              return Math.pow(t, e + 2);
            };
          };
        }),
        Object.keys(v).forEach(function (t) {
          var e = v[t];
          (h["easeIn" + t] = e),
            (h["easeOut" + t] = function (t, n) {
              return function (r) {
                return 1 - e(t, n)(1 - r);
              };
            }),
            (h["easeInOut" + t] = function (t, n) {
              return function (r) {
                return r < 0.5
                  ? e(t, n)(2 * r) / 2
                  : 1 - e(t, n)(-2 * r + 2) / 2;
              };
            });
        }),
        h);
    function y(t, e) {
      if (f.fnc(t)) return t;
      var n = t.split("(")[0],
        r = m[n],
        i = l(t);
      switch (n) {
        case "spring":
          return d(t, e);
        case "cubicBezier":
          return s(g, i);
        case "steps":
          return s(p, i);
        default:
          return s(r, i);
      }
    }
    function b(t) {
      try {
        return document.querySelectorAll(t);
      } catch (t) {
        return;
      }
    }
    function x(t, e) {
      for (
        var n = t.length,
          r = arguments.length >= 2 ? arguments[1] : void 0,
          i = [],
          o = 0;
        o < n;
        o++
      )
        if (o in t) {
          var a = t[o];
          e.call(r, a, o, t) && i.push(a);
        }
      return i;
    }
    function w(t) {
      return t.reduce(function (t, e) {
        return t.concat(f.arr(e) ? w(e) : e);
      }, []);
    }
    function _(t) {
      return f.arr(t)
        ? t
        : (f.str(t) && (t = b(t) || t),
          t instanceof NodeList || t instanceof HTMLCollection
            ? [].slice.call(t)
            : [t]);
    }
    function O(t, e) {
      return t.some(function (t) {
        return t === e;
      });
    }
    function A(t) {
      var e = {};
      for (var n in t) e[n] = t[n];
      return e;
    }
    function E(t, e) {
      var n = A(t);
      for (var r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
      return n;
    }
    function j(t, e) {
      var n = A(t);
      for (var r in e) n[r] = f.und(t[r]) ? e[r] : t[r];
      return n;
    }
    function S(t) {
      return f.rgb(t)
        ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = t)))
          ? "rgba(" + n[1] + ",1)"
          : e
        : f.hex(t)
        ? (function (t) {
            var e = t.replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                function (t, e, n, r) {
                  return e + e + n + n + r + r;
                }
              ),
              n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return (
              "rgba(" +
              parseInt(n[1], 16) +
              "," +
              parseInt(n[2], 16) +
              "," +
              parseInt(n[3], 16) +
              ",1)"
            );
          })(t)
        : f.hsl(t)
        ? (function (t) {
            var e,
              n,
              r,
              i =
                /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
              o = parseInt(i[1], 10) / 360,
              a = parseInt(i[2], 10) / 100,
              u = parseInt(i[3], 10) / 100,
              c = i[4] || 1;
            function s(t, e, n) {
              return (
                n < 0 && (n += 1),
                n > 1 && (n -= 1),
                n < 1 / 6
                  ? t + 6 * (e - t) * n
                  : n < 0.5
                  ? e
                  : n < 2 / 3
                  ? t + (e - t) * (2 / 3 - n) * 6
                  : t
              );
            }
            if (0 == a) e = n = r = u;
            else {
              var f = u < 0.5 ? u * (1 + a) : u + a - u * a,
                l = 2 * u - f;
              (e = s(l, f, o + 1 / 3)),
                (n = s(l, f, o)),
                (r = s(l, f, o - 1 / 3));
            }
            return (
              "rgba(" + 255 * e + "," + 255 * n + "," + 255 * r + "," + c + ")"
            );
          })(t)
        : void 0;
    }
    function k(t) {
      var e =
        /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
          t
        );
      if (e) return e[1];
    }
    function T(t, e) {
      return f.fnc(t) ? t(e.target, e.id, e.total) : t;
    }
    function C(t, e) {
      return t.getAttribute(e);
    }
    function L(t, e, n) {
      if (O([n, "deg", "rad", "turn"], k(e))) return e;
      var r = a.CSS[e + n];
      if (!f.und(r)) return r;
      var i = document.createElement(t.tagName),
        o =
          t.parentNode && t.parentNode !== document
            ? t.parentNode
            : document.body;
      o.appendChild(i),
        (i.style.position = "absolute"),
        (i.style.width = 100 + n);
      var u = 100 / i.offsetWidth;
      o.removeChild(i);
      var c = u * parseFloat(e);
      return (a.CSS[e + n] = c), c;
    }
    function I(t, e, n) {
      if (e in t.style) {
        var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          i = t.style[e] || getComputedStyle(t).getPropertyValue(r) || "0";
        return n ? L(t, i, n) : i;
      }
    }
    function D(t, e) {
      return f.dom(t) && !f.inp(t) && (C(t, e) || (f.svg(t) && t[e]))
        ? "attribute"
        : f.dom(t) && O(o, e)
        ? "transform"
        : f.dom(t) && "transform" !== e && I(t, e)
        ? "css"
        : null != t[e]
        ? "object"
        : void 0;
    }
    function P(t) {
      if (f.dom(t)) {
        for (
          var e,
            n = t.style.transform || "",
            r = /(\w+)\(([^)]*)\)/g,
            i = new Map();
          (e = r.exec(n));

        )
          i.set(e[1], e[2]);
        return i;
      }
    }
    function R(t, e, n, r) {
      var i = c(e, "scale")
          ? 1
          : 0 +
            (function (t) {
              return c(t, "translate") || "perspective" === t
                ? "px"
                : c(t, "rotate") || c(t, "skew")
                ? "deg"
                : void 0;
            })(e),
        o = P(t).get(e) || i;
      return (
        n && (n.transforms.list.set(e, o), (n.transforms.last = e)),
        r ? L(t, o, r) : o
      );
    }
    function M(t, e, n, r) {
      switch (D(t, e)) {
        case "transform":
          return R(t, e, r, n);
        case "css":
          return I(t, e, n);
        case "attribute":
          return C(t, e);
        default:
          return t[e] || 0;
      }
    }
    function N(t, e) {
      var n = /^(\*=|\+=|-=)/.exec(t);
      if (!n) return t;
      var r = k(t) || 0,
        i = parseFloat(e),
        o = parseFloat(t.replace(n[0], ""));
      switch (n[0][0]) {
        case "+":
          return i + o + r;
        case "-":
          return i - o + r;
        case "*":
          return i * o + r;
      }
    }
    function F(t, e) {
      if (f.col(t)) return S(t);
      if (/\s/g.test(t)) return t;
      var n = k(t),
        r = n ? t.substr(0, t.length - n.length) : t;
      return e ? r + e : r;
    }
    function z(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }
    function B(t) {
      for (var e, n = t.points, r = 0, i = 0; i < n.numberOfItems; i++) {
        var o = n.getItem(i);
        i > 0 && (r += z(e, o)), (e = o);
      }
      return r;
    }
    function q(t) {
      if (t.getTotalLength) return t.getTotalLength();
      switch (t.tagName.toLowerCase()) {
        case "circle":
          return (function (t) {
            return 2 * Math.PI * C(t, "r");
          })(t);
        case "rect":
          return (function (t) {
            return 2 * C(t, "width") + 2 * C(t, "height");
          })(t);
        case "line":
          return (function (t) {
            return z(
              { x: C(t, "x1"), y: C(t, "y1") },
              { x: C(t, "x2"), y: C(t, "y2") }
            );
          })(t);
        case "polyline":
          return B(t);
        case "polygon":
          return (function (t) {
            var e = t.points;
            return B(t) + z(e.getItem(e.numberOfItems - 1), e.getItem(0));
          })(t);
      }
    }
    function V(t, e) {
      var n = e || {},
        r =
          n.el ||
          (function (t) {
            for (var e = t.parentNode; f.svg(e) && f.svg(e.parentNode); )
              e = e.parentNode;
            return e;
          })(t),
        i = r.getBoundingClientRect(),
        o = C(r, "viewBox"),
        a = i.width,
        u = i.height,
        c = n.viewBox || (o ? o.split(" ") : [0, 0, a, u]);
      return {
        el: r,
        viewBox: c,
        x: c[0] / 1,
        y: c[1] / 1,
        w: a / c[2],
        h: u / c[3],
      };
    }
    function H(t, e) {
      function n(n) {
        void 0 === n && (n = 0);
        var r = e + n >= 1 ? e + n : 0;
        return t.el.getPointAtLength(r);
      }
      var r = V(t.el, t.svg),
        i = n(),
        o = n(-1),
        a = n(1);
      switch (t.property) {
        case "x":
          return (i.x - r.x) * r.w;
        case "y":
          return (i.y - r.y) * r.h;
        case "angle":
          return (180 * Math.atan2(a.y - o.y, a.x - o.x)) / Math.PI;
      }
    }
    function W(t, e) {
      var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        r = F(f.pth(t) ? t.totalLength : t, e) + "";
      return {
        original: r,
        numbers: r.match(n) ? r.match(n).map(Number) : [0],
        strings: f.str(t) || e ? r.split(n) : [],
      };
    }
    function U(t) {
      return x(t ? w(f.arr(t) ? t.map(_) : _(t)) : [], function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    function G(t) {
      var e = U(t);
      return e.map(function (t, n) {
        return {
          target: t,
          id: n,
          total: e.length,
          transforms: { list: P(t) },
        };
      });
    }
    function $(t, e) {
      var n = A(e);
      if ((/^spring/.test(n.easing) && (n.duration = d(n.easing)), f.arr(t))) {
        var r = t.length;
        2 === r && !f.obj(t[0])
          ? (t = { value: t })
          : f.fnc(e.duration) || (n.duration = e.duration / r);
      }
      var i = f.arr(t) ? t : [t];
      return i
        .map(function (t, n) {
          var r = f.obj(t) && !f.pth(t) ? t : { value: t };
          return (
            f.und(r.delay) && (r.delay = n ? 0 : e.delay),
            f.und(r.endDelay) &&
              (r.endDelay = n === i.length - 1 ? e.endDelay : 0),
            r
          );
        })
        .map(function (t) {
          return j(t, n);
        });
    }
    function Y(t, e) {
      var n = [],
        r = e.keyframes;
      for (var i in (r &&
        (e = j(
          (function (t) {
            for (
              var e = x(
                  w(
                    t.map(function (t) {
                      return Object.keys(t);
                    })
                  ),
                  function (t) {
                    return f.key(t);
                  }
                ).reduce(function (t, e) {
                  return t.indexOf(e) < 0 && t.push(e), t;
                }, []),
                n = {},
                r = function (r) {
                  var i = e[r];
                  n[i] = t.map(function (t) {
                    var e = {};
                    for (var n in t)
                      f.key(n) ? n == i && (e.value = t[n]) : (e[n] = t[n]);
                    return e;
                  });
                },
                i = 0;
              i < e.length;
              i++
            )
              r(i);
            return n;
          })(r),
          e
        )),
      e))
        f.key(i) && n.push({ name: i, tweens: $(e[i], t) });
      return n;
    }
    function Q(t, e) {
      var n;
      return t.tweens.map(function (r) {
        var i = (function (t, e) {
            var n = {};
            for (var r in t) {
              var i = T(t[r], e);
              f.arr(i) &&
                1 ===
                  (i = i.map(function (t) {
                    return T(t, e);
                  })).length &&
                (i = i[0]),
                (n[r] = i);
            }
            return (
              (n.duration = parseFloat(n.duration)),
              (n.delay = parseFloat(n.delay)),
              n
            );
          })(r, e),
          o = i.value,
          a = f.arr(o) ? o[1] : o,
          u = k(a),
          c = M(e.target, t.name, u, e),
          s = n ? n.to.original : c,
          l = f.arr(o) ? o[0] : s,
          d = k(l) || k(c),
          p = u || d;
        return (
          f.und(a) && (a = s),
          (i.from = W(l, p)),
          (i.to = W(N(a, l), p)),
          (i.start = n ? n.end : 0),
          (i.end = i.start + i.delay + i.duration + i.endDelay),
          (i.easing = y(i.easing, i.duration)),
          (i.isPath = f.pth(o)),
          (i.isColor = f.col(i.from.original)),
          i.isColor && (i.round = 1),
          (n = i),
          i
        );
      });
    }
    var X = {
      css: function (t, e, n) {
        return (t.style[e] = n);
      },
      attribute: function (t, e, n) {
        return t.setAttribute(e, n);
      },
      object: function (t, e, n) {
        return (t[e] = n);
      },
      transform: function (t, e, n, r, i) {
        if ((r.list.set(e, n), e === r.last || i)) {
          var o = "";
          r.list.forEach(function (t, e) {
            o += e + "(" + t + ") ";
          }),
            (t.style.transform = o);
        }
      },
    };
    function J(t, e) {
      G(t).forEach(function (t) {
        for (var n in e) {
          var r = T(e[n], t),
            i = t.target,
            o = k(r),
            a = M(i, n, o, t),
            u = N(F(r, o || k(a)), a),
            c = D(i, n);
          X[c](i, n, u, t.transforms, !0);
        }
      });
    }
    function K(t, e) {
      return x(
        w(
          t.map(function (t) {
            return e.map(function (e) {
              return (function (t, e) {
                var n = D(t.target, e.name);
                if (n) {
                  var r = Q(e, t),
                    i = r[r.length - 1];
                  return {
                    type: n,
                    property: e.name,
                    animatable: t,
                    tweens: r,
                    duration: i.end,
                    delay: r[0].delay,
                    endDelay: i.endDelay,
                  };
                }
              })(t, e);
            });
          })
        ),
        function (t) {
          return !f.und(t);
        }
      );
    }
    function Z(t, e) {
      var n = t.length,
        r = function (t) {
          return t.timelineOffset ? t.timelineOffset : 0;
        },
        i = {};
      return (
        (i.duration = n
          ? Math.max.apply(
              Math,
              t.map(function (t) {
                return r(t) + t.duration;
              })
            )
          : e.duration),
        (i.delay = n
          ? Math.min.apply(
              Math,
              t.map(function (t) {
                return r(t) + t.delay;
              })
            )
          : e.delay),
        (i.endDelay = n
          ? i.duration -
            Math.max.apply(
              Math,
              t.map(function (t) {
                return r(t) + t.duration - t.endDelay;
              })
            )
          : e.endDelay),
        i
      );
    }
    var tt = 0;
    var et,
      nt = [],
      rt = [],
      it = (function () {
        function t() {
          et = requestAnimationFrame(e);
        }
        function e(e) {
          var n = nt.length;
          if (n) {
            for (var r = 0; r < n; ) {
              var i = nt[r];
              if (i.paused) {
                var o = nt.indexOf(i);
                o > -1 && (nt.splice(o, 1), (n = nt.length));
              } else i.tick(e);
              r++;
            }
            t();
          } else et = cancelAnimationFrame(et);
        }
        return t;
      })();
    function ot(t) {
      void 0 === t && (t = {});
      var e,
        n = 0,
        o = 0,
        a = 0,
        c = 0,
        s = null;
      function f(t) {
        var e =
          window.Promise &&
          new Promise(function (t) {
            return (s = t);
          });
        return (t.finished = e), e;
      }
      var l = (function (t) {
        var e = E(r, t),
          n = E(i, t),
          o = Y(n, t),
          a = G(t.targets),
          u = K(a, o),
          c = Z(u, n),
          s = tt;
        return (
          tt++,
          j(e, {
            id: s,
            children: [],
            animatables: a,
            animations: u,
            duration: c.duration,
            delay: c.delay,
            endDelay: c.endDelay,
          })
        );
      })(t);
      f(l);
      function d() {
        var t = l.direction;
        "alternate" !== t &&
          (l.direction = "normal" !== t ? "normal" : "reverse"),
          (l.reversed = !l.reversed),
          e.forEach(function (t) {
            return (t.reversed = l.reversed);
          });
      }
      function p(t) {
        return l.reversed ? l.duration - t : t;
      }
      function h() {
        (n = 0), (o = p(l.currentTime) * (1 / ot.speed));
      }
      function v(t, e) {
        e && e.seek(t - e.timelineOffset);
      }
      function g(t) {
        for (var e = 0, n = l.animations, r = n.length; e < r; ) {
          var i = n[e],
            o = i.animatable,
            a = i.tweens,
            c = a.length - 1,
            s = a[c];
          c &&
            (s =
              x(a, function (e) {
                return t < e.end;
              })[0] || s);
          for (
            var f = u(t - s.start - s.delay, 0, s.duration) / s.duration,
              d = isNaN(f) ? 1 : s.easing(f),
              p = s.to.strings,
              h = s.round,
              v = [],
              g = s.to.numbers.length,
              m = void 0,
              y = 0;
            y < g;
            y++
          ) {
            var b = void 0,
              w = s.to.numbers[y],
              _ = s.from.numbers[y] || 0;
            (b = s.isPath ? H(s.value, d * w) : _ + d * (w - _)),
              h && ((s.isColor && y > 2) || (b = Math.round(b * h) / h)),
              v.push(b);
          }
          var O = p.length;
          if (O) {
            m = p[0];
            for (var A = 0; A < O; A++) {
              p[A];
              var E = p[A + 1],
                j = v[A];
              isNaN(j) || (m += E ? j + E : j + " ");
            }
          } else m = v[0];
          X[i.type](o.target, i.property, m, o.transforms),
            (i.currentValue = m),
            e++;
        }
      }
      function m(t) {
        l[t] && !l.passThrough && l[t](l);
      }
      function y(t) {
        var r = l.duration,
          i = l.delay,
          h = r - l.endDelay,
          y = p(t);
        (l.progress = u((y / r) * 100, 0, 100)),
          (l.reversePlayback = y < l.currentTime),
          e &&
            (function (t) {
              if (l.reversePlayback) for (var n = c; n--; ) v(t, e[n]);
              else for (var r = 0; r < c; r++) v(t, e[r]);
            })(y),
          !l.began && l.currentTime > 0 && ((l.began = !0), m("begin")),
          !l.loopBegan &&
            l.currentTime > 0 &&
            ((l.loopBegan = !0), m("loopBegin")),
          y <= i && 0 !== l.currentTime && g(0),
          ((y >= h && l.currentTime !== r) || !r) && g(r),
          y > i && y < h
            ? (l.changeBegan ||
                ((l.changeBegan = !0),
                (l.changeCompleted = !1),
                m("changeBegin")),
              m("change"),
              g(y))
            : l.changeBegan &&
              ((l.changeCompleted = !0),
              (l.changeBegan = !1),
              m("changeComplete")),
          (l.currentTime = u(y, 0, r)),
          l.began && m("update"),
          t >= r &&
            ((o = 0),
            l.remaining && !0 !== l.remaining && l.remaining--,
            l.remaining
              ? ((n = a),
                m("loopComplete"),
                (l.loopBegan = !1),
                "alternate" === l.direction && d())
              : ((l.paused = !0),
                l.completed ||
                  ((l.completed = !0),
                  m("loopComplete"),
                  m("complete"),
                  !l.passThrough && "Promise" in window && (s(), f(l)))));
      }
      return (
        (l.reset = function () {
          var t = l.direction;
          (l.passThrough = !1),
            (l.currentTime = 0),
            (l.progress = 0),
            (l.paused = !0),
            (l.began = !1),
            (l.loopBegan = !1),
            (l.changeBegan = !1),
            (l.completed = !1),
            (l.changeCompleted = !1),
            (l.reversePlayback = !1),
            (l.reversed = "reverse" === t),
            (l.remaining = l.loop),
            (e = l.children);
          for (var n = (c = e.length); n--; ) l.children[n].reset();
          ((l.reversed && !0 !== l.loop) ||
            ("alternate" === t && 1 === l.loop)) &&
            l.remaining++,
            g(l.reversed ? l.duration : 0);
        }),
        (l.set = function (t, e) {
          return J(t, e), l;
        }),
        (l.tick = function (t) {
          (a = t), n || (n = a), y((a + (o - n)) * ot.speed);
        }),
        (l.seek = function (t) {
          y(p(t));
        }),
        (l.pause = function () {
          (l.paused = !0), h();
        }),
        (l.play = function () {
          l.paused &&
            (l.completed && l.reset(),
            (l.paused = !1),
            nt.push(l),
            h(),
            et || it());
        }),
        (l.reverse = function () {
          d(), (l.completed = !l.reversed), h();
        }),
        (l.restart = function () {
          l.reset(), l.play();
        }),
        l.reset(),
        l.autoplay && l.play(),
        l
      );
    }
    function at(t, e) {
      for (var n = e.length; n--; )
        O(t, e[n].animatable.target) && e.splice(n, 1);
    }
    "undefined" != typeof document &&
      document.addEventListener("visibilitychange", function () {
        document.hidden
          ? (nt.forEach(function (t) {
              return t.pause();
            }),
            (rt = nt.slice(0)),
            (ot.running = nt = []))
          : rt.forEach(function (t) {
              return t.play();
            });
      }),
      (ot.version = "3.2.0"),
      (ot.speed = 1),
      (ot.running = nt),
      (ot.remove = function (t) {
        for (var e = U(t), n = nt.length; n--; ) {
          var r = nt[n],
            i = r.animations,
            o = r.children;
          at(e, i);
          for (var a = o.length; a--; ) {
            var u = o[a],
              c = u.animations;
            at(e, c), c.length || u.children.length || o.splice(a, 1);
          }
          i.length || o.length || r.pause();
        }
      }),
      (ot.get = M),
      (ot.set = J),
      (ot.convertPx = L),
      (ot.path = function (t, e) {
        var n = f.str(t) ? b(t)[0] : t,
          r = e || 100;
        return function (t) {
          return {
            property: t,
            el: n,
            svg: V(n),
            totalLength: q(n) * (r / 100),
          };
        };
      }),
      (ot.setDashoffset = function (t) {
        var e = q(t);
        return t.setAttribute("stroke-dasharray", e), e;
      }),
      (ot.stagger = function (t, e) {
        void 0 === e && (e = {});
        var n = e.direction || "normal",
          r = e.easing ? y(e.easing) : null,
          i = e.grid,
          o = e.axis,
          a = e.from || 0,
          u = "first" === a,
          c = "center" === a,
          s = "last" === a,
          l = f.arr(t),
          d = l ? parseFloat(t[0]) : parseFloat(t),
          p = l ? parseFloat(t[1]) : 0,
          h = k(l ? t[1] : t) || 0,
          v = e.start || 0 + (l ? d : 0),
          g = [],
          m = 0;
        return function (t, e, f) {
          if (
            (u && (a = 0), c && (a = (f - 1) / 2), s && (a = f - 1), !g.length)
          ) {
            for (var y = 0; y < f; y++) {
              if (i) {
                var b = c ? (i[0] - 1) / 2 : a % i[0],
                  x = c ? (i[1] - 1) / 2 : Math.floor(a / i[0]),
                  w = b - (y % i[0]),
                  _ = x - Math.floor(y / i[0]),
                  O = Math.sqrt(w * w + _ * _);
                "x" === o && (O = -w), "y" === o && (O = -_), g.push(O);
              } else g.push(Math.abs(a - y));
              m = Math.max.apply(Math, g);
            }
            r &&
              (g = g.map(function (t) {
                return r(t / m) * m;
              })),
              "reverse" === n &&
                (g = g.map(function (t) {
                  return o ? (t < 0 ? -1 * t : -t) : Math.abs(m - t);
                }));
          }
          return v + (l ? (p - d) / m : d) * (Math.round(100 * g[e]) / 100) + h;
        };
      }),
      (ot.timeline = function (t) {
        void 0 === t && (t = {});
        var e = ot(t);
        return (
          (e.duration = 0),
          (e.add = function (n, r) {
            var o = nt.indexOf(e),
              a = e.children;
            function u(t) {
              t.passThrough = !0;
            }
            o > -1 && nt.splice(o, 1);
            for (var c = 0; c < a.length; c++) u(a[c]);
            var s = j(n, E(i, t));
            s.targets = s.targets || t.targets;
            var l = e.duration;
            (s.autoplay = !1),
              (s.direction = e.direction),
              (s.timelineOffset = f.und(r) ? l : N(r, l)),
              u(e),
              e.seek(s.timelineOffset);
            var d = ot(s);
            u(d), a.push(d);
            var p = Z(a, t);
            return (
              (e.delay = p.delay),
              (e.endDelay = p.endDelay),
              (e.duration = p.duration),
              e.seek(0),
              e.reset(),
              e.autoplay && e.play(),
              e
            );
          }),
          e
        );
      }),
      (ot.easing = y),
      (ot.penner = m),
      (ot.random = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }),
      (e.a = ot);
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return l;
      }),
        n.d(e, "b", function () {
          return d;
        });
      n(8), n(39), n(249), n(250), n(147);
      var r = n(159),
        i = n.n(r),
        o = n(82),
        a = n.n(o),
        u = n(9),
        c = n(160),
        s = n(1),
        f = n(6);
      function l(t) {
        var e = t.start,
          n = t.end,
          r = (t.update, t.easing),
          o = a()(t, ["start", "end", "update", "easing"]).player,
          s = r || "linear",
          l = u.a.timeline({
            duration: 1e4,
            delay: 0,
            easing: s,
            autoplay: !1,
          }),
          d = e(),
          p = n(),
          h = 0,
          v = [];
        function g(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          function r(t) {
            return n
              ? t < 0
                ? "-=".concat(Math.abs(t))
                : "+=".concat(Math.abs(t))
              : t;
          }
          return "number" == typeof t
            ? r((t / (e ? 1 : p - d)) * 1e4)
            : "string" == typeof t
            ? "~" === t[0]
              ? (Number(t.slice(1)) / (e ? 1 : p - d)) * 1e4
              : g(Number(t), e, n)
            : "function" == typeof t
            ? g(t(), e, n)
            : "object" === i()(t) && t.percent
            ? g(t.percent, !0, n)
            : 0;
        }
        function m(t) {
          var e = Object(c.cloneDeep)(t);
          return (
            void 0 !== e.duration && (e.duration = g(e.duration)),
            void 0 !== e.delay && (e.delay = g(e.delay)),
            void 0 !== e.offset && (e.offset = g(e.offset, !1, !0)),
            e
          );
        }
        o ||
          ((o = l).seekPercent = function (t) {
            this.seek(1e4 * t);
          }),
          window.addEventListener("scroll", function () {
            window.requestAnimationFrame(function () {
              var t = window.scrollY;
              return t <= d
                ? (o.seekPercent(0), void (h = 0))
                : t >= p
                ? (o.seekPercent(1), void (h = 1))
                : ((h = (t - d) / (p - d)), void o.seekPercent(h));
            });
          }),
          Object(f.a)(function () {
            (d = e()),
              (p = n()),
              ((o = u.a.timeline({
                duration: 1e4,
                delay: 0,
                easing: s,
                autoplay: !1,
              })).seekPercent = function (t) {
                this.seek(1e4 * t);
              }),
              v.forEach(function (t) {
                var e = m(t);
                o.add(e, e.offset);
              }),
              o.seekPercent(h);
          });
        return o.add
          ? {
              add: function t(e) {
                v.push(e);
                var n = m(e);
                return l.add(n, n.offset), { add: t };
              },
            }
          : null;
      }
      function d(e) {
        var n = e.position,
          r = e.reverse,
          i = e.prev,
          o = e.begin,
          a = e.complete,
          c = r || "none",
          l = n(),
          d = i ? i() : Object(s.f)(100),
          p = l - d,
          h = "current" === c ? l : p,
          v = [],
          g = "before",
          m = !1,
          y = u.a.timeline({
            autoplay: !1,
            begin: function () {
              o && o();
            },
            complete: function (t) {
              (g = "reverse" === t.direction ? "before" : "after"),
                y.reverse(),
                a && a();
            },
          });
        if (
          (Object(f.a)(function () {
            (l = n()),
              (d = i ? i() : Object(s.f)(100)),
              (p = l - d),
              (h = "current" === c ? l : p);
          }),
          "none" === c)
        )
          var b = window.addEventListener("scroll", function () {
            window.scrollY >= l &&
              !m &&
              (v.forEach(function (e) {
                Object(u.a)(e),
                  e.delay &&
                    setTimeout(function () {
                      e.addClassName && t(e.targets).addClass(e.addClassName);
                    }, e.delay);
              }),
              (m = !0),
              window.removeEventListener("scroll", b));
          });
        ("current" !== c && "prev" !== c) ||
          window.addEventListener("scroll", function () {
            var e = window.scrollY,
              n = [];
            e >= l &&
              "before" === g &&
              ((n = v.map(function (e) {
                var n = e.addClassName,
                  r = e.targets,
                  i = e.delay;
                if (n) {
                  if (i)
                    return setTimeout(function () {
                      n && t(r).addClass(n);
                    }, i);
                  t(r).addClass(n);
                }
                return null;
              })),
              y.play(),
              (g = "inAnime")),
              e <= h &&
                "after" === g &&
                (v.forEach(function (e, r) {
                  var i = e.addClassName,
                    o = e.targets;
                  i && t(o).removeClass(i), n[r] && clearTimeout(n[r]);
                }),
                y.play(),
                (g = "inAnime"));
          });
        return {
          add: function t(e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return v.push(e), y.add(e, n), { add: t };
          },
        };
      }
    }.call(this, n(30)));
  },
  function (t, e, n) {
    t.exports = n(63);
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(133),
      o = n(121),
      a = n(32);
    for (var u in i) {
      var c = r[u],
        s = c && c.prototype;
      if (s && s.forEach !== o)
        try {
          a(s, "forEach", o);
        } catch (t) {
          s.forEach = o;
        }
    }
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, n) {
    var r = n(16);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(14),
      i = n(113),
      o = n(15),
      a = n(51),
      u = Object.defineProperty;
    e.f = r
      ? u
      : function (t, e, n) {
          if ((o(t), (e = a(e, !0)), o(n), i))
            try {
              return u(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    };
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return x;
    }),
      n.d(e, "d", function () {
        return _;
      }),
      n.d(e, "b", function () {
        return k;
      }),
      n.d(e, "c", function () {
        return T;
      }),
      n.d(e, "e", function () {
        return C;
      });
    n(43),
      n(64),
      n(8),
      n(38),
      n(39),
      n(141),
      n(106),
      n(107),
      n(46),
      n(26),
      n(27),
      n(35),
      n(61),
      n(13);
    var r = n(11),
      i = n.n(r),
      o = (n(63), n(22)),
      a = n.n(o),
      u = n(18),
      c = n.n(u),
      s = n(0),
      f = {
        medias: n(47).a,
        src: "src",
        srcset: "srcset",
        poster: "poster",
        bg: "bg",
        classes: {
          loading: "loading",
          loaded: "loaded",
          error: "error",
          applied: "applied",
        },
      };
    n(108), n(101), n(136);
    var l = {
      lossy: void 0,
      lossless: void 0,
      alpha: void 0,
      animation: void 0,
    };
    function d() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "alpha";
      if (window.location.search.match(/disable-webp=true/))
        return Promise.resolve(!1);
      if (!l[t]) {
        var e = {
          lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
          lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
          alpha:
            "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
          animation:
            "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
        };
        l[t] = new Promise(function (n) {
          var r = new Image();
          (r.onload = function () {
            var e = r.width > 0 && r.height > 0;
            n(e, t);
          }),
            (r.onerror = function () {
              n(!1, t);
            }),
            (r.src = "data:image/webp;base64,".concat(e[t]));
        });
      }
      return l[t];
    }
    function p(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function h(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? p(Object(n), !0).forEach(function (e) {
              c()(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : p(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var v = h(h({}, f), {}, { thresholds: "0px 200% 200% 200%" }),
      g = {
        data_src: "data-src",
        data_srcset: "data-srcset",
        data_poster: "data-poster",
        data_bg: "data-bg",
      };
    function m(t) {
      return /^data:/i.test(t) ? t : t.replace(/\.webp/i, "");
    }
    function y() {
      return b.apply(this, arguments);
    }
    function b() {
      return (b = a()(
        i.a.mark(function t() {
          var e,
            r,
            o,
            a,
            u,
            c = arguments;
          return i.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (e = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
                    (t.next = 3),
                    d()
                  );
                case 3:
                  if (
                    ((r = t.sent),
                    window.IntersectionObserver &&
                      window.IntersectionObserverEntry)
                  ) {
                    t.next = 7;
                    break;
                  }
                  return (
                    (t.next = 7), Promise.resolve().then(n.t.bind(null, 216, 7))
                  );
                case 7:
                  return (
                    (t.next = 9), Promise.resolve().then(n.bind(null, 217))
                  );
                case 9:
                  return (
                    (o = t.sent),
                    (a = o.LazyLoad),
                    (u = new a(
                      h(
                        h(h({}, v), e),
                        {},
                        {
                          elements: ".zn--wrapper img,.zn--wrapper video",
                          srcPreprocessor: function (t, e) {
                            var n = e.name,
                              i = e.type,
                              o = e.element;
                            if (
                              !t &&
                              ("data-poster" !== i ||
                                o instanceof HTMLVideoElement)
                            ) {
                              var a = g[i];
                              if (n !== a) {
                                var u = o.getAttribute(a);
                                u && (t = u);
                              }
                            }
                            return t && !r ? m(t) : t;
                          },
                        }
                      )
                    )),
                    t.abrupt("return", {
                      default: u,
                      fallback: u,
                      load: function (t) {
                        return u.load(t);
                      },
                      destroy: function () {
                        u.destroy();
                      },
                    })
                  );
                case 13:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function x() {
      return w.apply(this, arguments);
    }
    function w() {
      return (w = a()(
        i.a.mark(function t() {
          var e;
          return i.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), y({ elements: [] });
                case 2:
                  return (
                    (e = t.sent),
                    t.abrupt("return", {
                      load: function (t) {
                        var n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = n.onLoaded,
                          i = n.onError;
                        t instanceof Array || (t = [t]);
                        var o = t.map(function () {}),
                          a = function (e, n) {
                            void 0 === o[e] &&
                              ((o[e] = n),
                              n && r && r(t[e], e),
                              !n && i && i(t[e], e));
                          },
                          u = [];
                        t.forEach(function (t, e) {
                          var n = t.getAttribute("data-ll-status");
                          if ("loaded" === n) r && a(e, !0);
                          else if ("error" === n) a(e, !1);
                          else {
                            if (r) {
                              t.addEventListener("load", function n() {
                                t.removeEventListener("load", n), a(e, !0);
                              });
                            }
                            if (i) {
                              t.addEventListener("error", function n() {
                                t.removeEventListener("error", n), a(e, !1);
                              });
                            }
                            "loading" !== n && u.push(t);
                          }
                        }),
                          e.load(u).forEach(function (t, e) {
                            t.then(function () {
                              a(e, !0);
                            }).catch(function (t) {
                              console.error(t, t.element), a(e, !1);
                            });
                          });
                      },
                    })
                  );
                case 4:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function _(t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (O = a()(
        i.a.mark(function t(e) {
          var n,
            r,
            o,
            a,
            u,
            c,
            f,
            l,
            d,
            p,
            h,
            v,
            g,
            m,
            b,
            x,
            w,
            _,
            O,
            A,
            E = arguments;
          return i.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (
                    ((n = E.length > 1 && void 0 !== E[1] ? E[1] : {}),
                    (r = n.onProgress),
                    (o = n.onFinished),
                    (a = n.timeout),
                    (u = void 0 === a ? 0 : a),
                    (c = n.limit),
                    (f = void 0 === c ? 10 : c) < 0 && (f = 0),
                    (l = "string" == typeof e ? Object(s.e)(document, e) : e),
                    (d = []),
                    (p = function (t) {
                      var e = t.getAttribute("data-ll-status");
                      "loaded" !== e && "error" !== e && d.push(t);
                    }),
                    l.forEach(function (t) {
                      t instanceof HTMLImageElement ||
                      t instanceof HTMLVideoElement
                        ? p(t)
                        : Object(s.e)(t, "img,video").forEach(function (t) {
                            return p(t);
                          });
                    }),
                    (h = d.length),
                    (v = 0) !== h)
                  ) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", Promise.resolve());
                case 10:
                  return (
                    (m = new Promise(function (t) {
                      g = t;
                    })),
                    (b = function (t) {
                      var e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      if (t > v) {
                        var n = { cnt: (v = t), total: h, timeout: e };
                        r && r(n), v === h && (o && o(n), g(n));
                      }
                      return v;
                    }),
                    (x = f - 1),
                    (_ = d.map(function () {
                      return !1;
                    })),
                    (O = function (t, e) {
                      var n = d.indexOf(t);
                      n >= 0 &&
                        !_[n] &&
                        ((_[n] = !0),
                        b(_.filter(Boolean).length) === h
                          ? (window.clearTimeout(w), e.destroy())
                          : x + 1 < d.length && ((x += 1), e.load([d[x]])));
                    }),
                    (t.next = 17),
                    y({
                      elements: [],
                      callback_loaded: function (t) {
                        O(t, A);
                      },
                    })
                  );
                case 17:
                  return (
                    (A = t.sent),
                    u > 0 &&
                      window.setTimeout(function () {
                        b(h),
                          A.load(
                            d.filter(function (t, e) {
                              return e > x;
                            })
                          );
                      }, u),
                    d.forEach(function (t) {
                      t instanceof HTMLVideoElement
                        ? t.addEventListener("canplaythrough", function () {
                            return O(t, A);
                          })
                        : t instanceof HTMLImageElement &&
                          t.addEventListener("load", function () {
                            O(t, A);
                          });
                    }),
                    A.load(
                      d.filter(function (t, e) {
                        return !t.hasAttribute("data-ll-status") && e < f;
                      })
                    ).forEach(function (t, e) {
                      t.then(function (t) {
                        return O(t, A);
                      }).catch(function (t) {
                        console.error(t, t.element), O(t.element, A);
                      });
                    }),
                    t.abrupt("return", m)
                  );
                case 22:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function A() {
      var t;
      "function" ==
      typeof (null === (t = window.lazySizes) || void 0 === t ? void 0 : t.init)
        ? window.lazySizes.init()
        : window.setTimeout(A, 500);
    }
    var E,
      j = [],
      S = !0;
    function k() {
      E
        ? console.warn("Cannot disable lazyload: already initialized")
        : ((S = !1),
          (window.lazySizesConfig = window.lazySizesConfig || {}),
          (window.lazySizesConfig.init = !1));
    }
    function T() {
      for (E || ((E = y()), setTimeout(A)), S = !0; j.length > 0; ) {
        j.shift().resolve(E);
      }
    }
    function C() {
      return S
        ? (E || (E = y()), Promise.resolve(E))
        : new Promise(function (t, e) {
            j.push({ resolve: t, reject: e });
          });
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return s;
    }),
      n.d(e, "a", function () {
        return l;
      }),
      n.d(e, "d", function () {
        return d;
      }),
      n.d(e, "c", function () {
        return g;
      });
    n(40), n(8), n(35), n(61), n(13);
    var r = n(3),
      i = n(0),
      o = { category: "Details Page", product: "Find X3" };
    function a() {
      return document.getElementById("event-mark-for-product")
        ? "Event Details"
        : o.category;
    }
    function u(t) {
      var e,
        n = t.action,
        r = t.label,
        i = t.nonInteraction;
      "function" ==
        typeof (null === (e = window.dataLayer) || void 0 === e
          ? void 0
          : e.push) &&
        window.dataLayer.push({
          eventAction: n,
          eventLabel: r,
          nonInteraction: i,
          event: "uaEvent",
          eventCategory: "".concat(a(), " Page + ").concat(o.product),
        });
    }
    function c(t) {
      u({ label: t, action: "CTA Button" });
    }
    function s(t, e) {
      u({ label: e, action: "Video: ".concat(t) });
    }
    function f(t, e) {
      u({ label: e, action: "Click: ".concat(t) });
    }
    function l(t) {
      u({
        label: t,
        nonInteraction: !0,
        action: "".concat(a(), " Impression"),
      });
    }
    function d() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "data-gtm-view",
        e = Object(i.e)(document, "[".concat(t, "]")),
        n =
          window.IntersectionObserver &&
          new window.IntersectionObserver(
            function (e) {
              e.forEach(function (e) {
                e.intersectionRatio > 0 && l(e.target.getAttribute(t));
              });
            },
            { rootMargin: "-25% 0px -50% 0px" }
          );
      return (
        n
          ? e.forEach(function (t) {
              return n.observe(t);
            })
          : e.forEach(function (e) {
              var n = e.getAttribute(t);
              Object(r.a)(e, {
                start: { percent: 0.5 },
                end: { percent: 0.25 },
                handlers: {
                  onStateChange: function (t) {
                    "inView" === t.state && l(n);
                  },
                },
              });
            }),
        e
      );
    }
    function p(t, e) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "data-gtm-label",
        r = t.getAttribute(n) || t.textContent;
      t.addEventListener(
        "click",
        function () {
          e(r && r.replace(/(^\s+|\s+$)/g, "").replace(/(\s+)/, " "));
        },
        { passive: !0 }
      );
    }
    function h() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "data-gtm-click",
        e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "data-gtm-label",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = n.root,
        o = void 0 === r ? document : r;
      Object(i.e)(o, "[".concat(t, "]")).forEach(function (n) {
        var r = n.getAttribute(t);
        p(
          n,
          function (t) {
            return f(r || t, t);
          },
          e
        );
      });
    }
    function v() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "data-gtm-cta",
        e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "data-gtm-label",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = n.root,
        o = void 0 === r ? document : r;
      Object(i.e)(o, "[".concat(t, "]")).forEach(function (n) {
        var r = n.getAttribute(t);
        p(
          n,
          function (t) {
            return c(r || t);
          },
          e
        );
      });
    }
    function g() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.attrView,
        n = void 0 === e ? "data-gtm-view" : e,
        r = t.attrClick,
        o = void 0 === r ? "data-gtm-click" : r,
        a = t.attrLabel,
        u = void 0 === a ? "data-gtm-label" : a,
        c = t.attrCTA,
        s = void 0 === c ? "data-gtm-cta" : c,
        f = d(n);
      f.forEach(function (t) {
        var e = t.getAttribute(n),
          r = e && e.replace(/^[^:]*:\s*/, "");
        r &&
          Object(i.e)(t, "[".concat(o, "]")).forEach(function (t) {
            t.getAttribute(o) || t.setAttribute(o, r);
          });
      }),
        h(o, u),
        v(s);
    }
  },
  function (t, e) {
    function n(t, e, n, r, i, o, a) {
      try {
        var u = t[o](a),
          c = u.value;
      } catch (t) {
        return void n(t);
      }
      u.done ? e(c) : Promise.resolve(c).then(r, i);
    }
    t.exports = function (t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (i, o) {
          var a = t.apply(e, r);
          function u(t) {
            n(a, i, o, u, c, "next", t);
          }
          function c(t) {
            n(a, i, o, u, c, "throw", t);
          }
          u(void 0);
        });
      };
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return c;
    }),
      n.d(e, "b", function () {
        return u;
      }),
      n.d(e, "c", function () {
        return a;
      });
    n(43), n(212), n(213), n(148), n(39), n(105), n(26), n(27), n(104), n(214);
    var r = function () {
      return (r =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }).apply(this, arguments);
    };
    function i(t, e, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function a(t) {
          try {
            c(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function u(t) {
          try {
            c(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          var e;
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(a, u);
        }
        c((r = r.apply(t, e || [])).next());
      });
    }
    function o(t, e) {
      var n,
        r,
        i,
        o,
        a = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function u(o) {
        return function (u) {
          return (function (o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & o[0]
                        ? r.return
                        : o[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                    !(i = i.call(r, o[1])).done)
                )
                  return i;
                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, (r = o[1]), (o = [0]);
                    continue;
                  case 7:
                    (o = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                      (6 === o[0] || 2 === o[0])
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      a.label = o[1];
                      break;
                    }
                    if (6 === o[0] && a.label < i[1]) {
                      (a.label = i[1]), (i = o);
                      break;
                    }
                    if (i && a.label < i[2]) {
                      (a.label = i[2]), a.ops.push(o);
                      break;
                    }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                o = e.call(t, a);
              } catch (t) {
                (o = [6, t]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & o[0]) throw o[1];
            return { value: o[0] ? o[1] : void 0, done: !0 };
          })([o, u]);
        };
      }
    }
    var a,
      u = (function () {
        function t(t, e) {
          (this.images = t),
            (this.imagePromises = []),
            (this.length = t.length),
            (this.imagesLoaded = t.map(function () {})),
            (this.imageLoader =
              e ||
              function (t) {
                return new Promise(function (e, n) {
                  t.addEventListener("load", function () {
                    e(t);
                  }),
                    t.addEventListener("error", n);
                });
              });
        }
        return (
          (t.createFromURLs = function (e) {
            var n = e.map(function () {});
            return new t(
              e.map(function () {
                return new window.Image();
              }),
              function (t, r) {
                return (
                  n[r] ||
                  (n[r] = new Promise(function (n, i) {
                    r >= 0 && r < e.length
                      ? (t.addEventListener("load", function () {
                          return n(t);
                        }),
                        t.addEventListener("error", function (t) {
                          return i(t);
                        }),
                        (t.src = e[r]))
                      : i(
                          new Error("Out of range [0, " + e.length + "): " + r)
                        );
                  }))
                );
              }
            );
          }),
          (t.prototype.load = function (t) {
            return i(this, void 0, void 0, function () {
              var e = this;
              return o(this, function (n) {
                return void 0 === t
                  ? [
                      2,
                      Promise.all(
                        this.images.map(function (t, n) {
                          return e.loadAt(n);
                        })
                      ),
                    ]
                  : [2, this.loadAt(t)];
              });
            });
          }),
          (t.prototype.getImageAt = function (t) {
            return this.imagesLoaded[t] || this.loadAt(t);
          }),
          (t.prototype.loadAt = function (t) {
            var e = this;
            if (this.imagePromises[t]) return this.imagePromises[t];
            var n = this.images[t];
            return (this.imagePromises[t] = new Promise(function (r, i) {
              e.imageLoader(n, t)
                .then(function (n) {
                  (e.imagesLoaded[t] = n), r(n);
                })
                .catch(i);
            }));
          }),
          t
        );
      })();
    !(function (t) {
      (t[(t.Normal = 0)] = "Normal"),
        (t[(t.Reverse = 1)] = "Reverse"),
        (t[(t.Loop = 2)] = "Loop"),
        (t[(t.Alternate = 3)] = "Alternate");
    })(a || (a = {}));
    var c = (function () {
      function t(t, e, n) {
        var r = void 0 === n ? {} : n,
          i = r.fitImageSize,
          o = void 0 === i || i,
          a = r.posterFrame,
          u = void 0 === a ? "first" : a,
          c = r.alpha,
          s = void 0 !== c && c,
          f = r.backgroundColor,
          l = void 0 === f ? "black" : f,
          d = r.shouldClear,
          p = void 0 === d ? s : d,
          h = r.defaultPlayOptions;
        (this.sequence = e), (this.frameRequest = void 0);
        var v = t.getContext("2d", { alpha: s });
        if (!v) throw new Error("CanvasRenderingContext2D unavailable");
        (this.canvas = t),
          (this.ctx = v),
          (this.alpha = s),
          (this.shouldClear = p),
          (this.playingState = { cur: -1, last: -1, options: h || {} }),
          (this.sizeInitialized = !o),
          s || ((v.fillStyle = l), this.clear()),
          !1 !== u &&
            this.seek(
              "first" === u ? 0 : "last" === u ? this.sequence.length - 1 : u
            );
      }
      return (
        (t.createWithURLs = function (e, n, r) {
          return void 0 === r && (r = {}), new t(e, u.createFromURLs(n), r);
        }),
        (t.prototype.load = function () {
          return this.sequence.load();
        }),
        (t.prototype.seek = function (t, e) {
          var n = (void 0 === e ? {} : e).draw,
            r = void 0 === n || n;
          return i(this, void 0, void 0, function () {
            return o(this, function (e) {
              return (
                (this.playingState.cur = t),
                r ? [2, this.drawCurrentFrame()] : [2]
              );
            });
          });
        }),
        (t.prototype.seekPercent = function (t, e) {
          return i(this, void 0, void 0, function () {
            return o(this, function (n) {
              return [
                2,
                this.seek(Math.round(t * (this.sequence.length - 1)), e),
              ];
            });
          });
        }),
        Object.defineProperty(t.prototype, "playing", {
          get: function () {
            return void 0 !== this.playingState.interval;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "paused", {
          get: function () {
            return !this.playing;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "cur", {
          get: function () {
            return this.playingState.cur;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "seqLength", {
          get: function () {
            return this.sequence.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.pause = function () {
          window.clearInterval(this.playingState.interval),
            (this.playingState.interval = void 0);
        }),
        (t.prototype.play = function (e) {
          return (
            void 0 === e && (e = this.playingState.options),
            i(this, void 0, void 0, function () {
              var n,
                r,
                i,
                u,
                c,
                s,
                f,
                l,
                d,
                p,
                h,
                v,
                g,
                m = this;
              return o(this, function (o) {
                return (
                  void 0 !== (n = this.playingState).interval &&
                    window.clearInterval(n.interval),
                  void 0 !== n.delayedTimeout &&
                    (window.clearTimeout(n.delayedTimeout),
                    (n.delayedTimeout = void 0)),
                  (n.options = e),
                  (r = e.fps),
                  (i = void 0 === r ? 24 : r),
                  (u = e.mode),
                  (c = void 0 === u ? a.Normal : u),
                  (s = e.waitOnLoading),
                  (f = void 0 === s || s),
                  (l = e.onUpdated),
                  (d = e.onEnded),
                  (p = e.delay),
                  (h = c === a.Reverse),
                  (v = !1),
                  (g = function (e) {
                    if ((void 0 === e && (e = !1), v))
                      t.DEBUG &&
                        console.log(
                          "Waiting to play " + n.cur + "th:",
                          m.sequence.getImageAt(n.cur)
                        );
                    else {
                      var r = function (t) {
                          l &&
                            window.setTimeout(function () {
                              return l({ i: t });
                            }, 0);
                        },
                        o = function (t) {
                          f
                            ? ((v = !0),
                              m.seek(t).then(function () {
                                (v = !1), r(t);
                              }))
                            : (m.seek(t).catch(console.error), r(t));
                        },
                        u = n.cur + (h ? -1 : 1);
                      if (!(u >= m.sequence.length || u < 0)) return o(u);
                      if (c === a.Loop || c === a.Alternate) {
                        c === a.Alternate && (h = !h);
                        var s = h ? m.sequence.length - 1 : 0;
                        if (p && p > 0 && !e)
                          return (
                            m.pause(),
                            void (n.delayedTimeout = window.setTimeout(
                              function () {
                                g(!0),
                                  (n.interval = window.setInterval(function () {
                                    return g();
                                  }, 1e3 / i)),
                                  n.delayedTimeout &&
                                    (window.clearTimeout(n.delayedTimeout),
                                    (n.delayedTimeout = void 0));
                              },
                              p
                            ))
                          );
                        o(s);
                      } else
                        m.pause(),
                          d &&
                            window.setTimeout(function () {
                              return d({ i: u });
                            }, 0);
                    }
                  }),
                  (n.interval = window.setInterval(function () {
                    return g();
                  }, 1e3 / i)),
                  [2]
                );
              });
            })
          );
        }),
        (t.prototype.playTo = function (t, e) {
          return (
            void 0 === e && (e = this.playingState.options),
            i(this, void 0, void 0, function () {
              var n,
                i,
                u = this;
              return o(this, function (o) {
                return (
                  (n = this.playingState.cur),
                  t === n || t < 0 || t >= this.sequence.length
                    ? [2]
                    : ((i = t > n ? a.Normal : a.Reverse),
                      [
                        2,
                        this.play(
                          r(r({}, e), {
                            mode: i,
                            onUpdated: function (n) {
                              var r,
                                i = n.i;
                              i === t && u.pause(),
                                null === (r = e.onUpdated) ||
                                  void 0 === r ||
                                  r.call(e, { i: i });
                            },
                          })
                        ),
                      ])
                );
              });
            })
          );
        }),
        (t.prototype.drawCurrentFrame = function () {
          return i(this, void 0, void 0, function () {
            var e, n, r, i, a;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if ((e = this.playingState).cur === e.last) return [2];
                  if (!(n = this.sequence.getImageAt(e.cur))) return [2];
                  if (((e.last = e.cur), n instanceof window.Image))
                    return [2, this.drawImage(n)];
                  (r = e.cur),
                    t.DEBUG &&
                      console.warn(
                        "Try to draw the " + r + "th image unloaded:",
                        this.sequence.getImageAt(r)
                      ),
                    (o.label = 1);
                case 1:
                  return o.trys.push([1, 3, , 4]), [4, n];
                case 2:
                  return (
                    (i = o.sent()),
                    e.cur === r
                      ? this.drawImage(i)
                      : t.DEBUG &&
                        console.info(
                          "The " +
                            r +
                            "th image dropped because the " +
                            e.cur +
                            "th image was drew"
                        ),
                    [3, 4]
                  );
                case 3:
                  return (a = o.sent()), console.error(a), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.drawImage = function (t) {
          var e = this;
          void 0 !== this.frameRequest &&
            window.cancelAnimationFrame(this.frameRequest),
            (this.frameRequest = window.requestAnimationFrame(function () {
              (e.frameRequest = void 0),
                e.sizeInitialized ||
                  ((e.canvas.width = t.width),
                  (e.canvas.height = t.height),
                  (e.sizeInitialized = !0)),
                e.shouldClear && e.clear(),
                e.ctx.drawImage(
                  t,
                  0,
                  0,
                  t.width,
                  t.height,
                  0,
                  0,
                  e.canvas.width,
                  e.canvas.height
                );
            }));
        }),
        (t.prototype.clear = function () {
          this.alpha
            ? this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            : this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }),
        (t.DEBUG = !1),
        t
      );
    })();
  },
  function (t, e, n) {
    var r = n(54),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    var r = n(37);
    t.exports = function (t) {
      return Object(r(t));
    };
  },
  function (t, e, n) {
    var r = n(96),
      i = n(33),
      o = n(176);
    r || i(Object.prototype, "toString", o, { unsafe: !0 });
  },
  function (t, e, n) {
    "use strict";
    var r,
      i,
      o,
      a,
      u = n(4),
      c = n(52),
      s = n(5),
      f = n(44),
      l = n(178),
      d = n(33),
      p = n(179),
      h = n(73),
      v = n(123),
      g = n(16),
      m = n(58),
      y = n(180),
      b = n(36),
      x = n(87),
      w = n(181),
      _ = n(127),
      O = n(128),
      A = n(129).set,
      E = n(182),
      j = n(183),
      S = n(184),
      k = n(132),
      T = n(185),
      C = n(42),
      L = n(70),
      I = n(7),
      D = n(95),
      P = I("species"),
      R = "Promise",
      M = C.get,
      N = C.set,
      F = C.getterFor(R),
      z = l,
      B = s.TypeError,
      q = s.document,
      V = s.process,
      H = f("fetch"),
      W = k.f,
      U = W,
      G = "process" == b(V),
      $ = !!(q && q.createEvent && s.dispatchEvent),
      Y = L(R, function () {
        if (!(x(z) !== String(z))) {
          if (66 === D) return !0;
          if (!G && "function" != typeof PromiseRejectionEvent) return !0;
        }
        if (c && !z.prototype.finally) return !0;
        if (D >= 51 && /native code/.test(z)) return !1;
        var t = z.resolve(1),
          e = function (t) {
            t(
              function () {},
              function () {}
            );
          };
        return (
          ((t.constructor = {})[P] = e), !(t.then(function () {}) instanceof e)
        );
      }),
      Q =
        Y ||
        !_(function (t) {
          z.all(t).catch(function () {});
        }),
      X = function (t) {
        var e;
        return !(!g(t) || "function" != typeof (e = t.then)) && e;
      },
      J = function (t, e, n) {
        if (!e.notified) {
          e.notified = !0;
          var r = e.reactions;
          E(function () {
            for (var i = e.value, o = 1 == e.state, a = 0; r.length > a; ) {
              var u,
                c,
                s,
                f = r[a++],
                l = o ? f.ok : f.fail,
                d = f.resolve,
                p = f.reject,
                h = f.domain;
              try {
                l
                  ? (o || (2 === e.rejection && et(t, e), (e.rejection = 1)),
                    !0 === l
                      ? (u = i)
                      : (h && h.enter(), (u = l(i)), h && (h.exit(), (s = !0))),
                    u === f.promise
                      ? p(B("Promise-chain cycle"))
                      : (c = X(u))
                      ? c.call(u, d, p)
                      : d(u))
                  : p(i);
              } catch (t) {
                h && !s && h.exit(), p(t);
              }
            }
            (e.reactions = []), (e.notified = !1), n && !e.rejection && Z(t, e);
          });
        }
      },
      K = function (t, e, n) {
        var r, i;
        $
          ? (((r = q.createEvent("Event")).promise = e),
            (r.reason = n),
            r.initEvent(t, !1, !0),
            s.dispatchEvent(r))
          : (r = { promise: e, reason: n }),
          (i = s["on" + t])
            ? i(r)
            : "unhandledrejection" === t && S("Unhandled promise rejection", n);
      },
      Z = function (t, e) {
        A.call(s, function () {
          var n,
            r = e.value;
          if (
            tt(e) &&
            ((n = T(function () {
              G
                ? V.emit("unhandledRejection", r, t)
                : K("unhandledrejection", t, r);
            })),
            (e.rejection = G || tt(e) ? 2 : 1),
            n.error)
          )
            throw n.value;
        });
      },
      tt = function (t) {
        return 1 !== t.rejection && !t.parent;
      },
      et = function (t, e) {
        A.call(s, function () {
          G ? V.emit("rejectionHandled", t) : K("rejectionhandled", t, e.value);
        });
      },
      nt = function (t, e, n, r) {
        return function (i) {
          t(e, n, i, r);
        };
      },
      rt = function (t, e, n, r) {
        e.done ||
          ((e.done = !0),
          r && (e = r),
          (e.value = n),
          (e.state = 2),
          J(t, e, !0));
      },
      it = function (t, e, n, r) {
        if (!e.done) {
          (e.done = !0), r && (e = r);
          try {
            if (t === n) throw B("Promise can't be resolved itself");
            var i = X(n);
            i
              ? E(function () {
                  var r = { done: !1 };
                  try {
                    i.call(n, nt(it, t, r, e), nt(rt, t, r, e));
                  } catch (n) {
                    rt(t, r, n, e);
                  }
                })
              : ((e.value = n), (e.state = 1), J(t, e, !1));
          } catch (n) {
            rt(t, { done: !1 }, n, e);
          }
        }
      };
    Y &&
      ((z = function (t) {
        y(this, z, R), m(t), r.call(this);
        var e = M(this);
        try {
          t(nt(it, this, e), nt(rt, this, e));
        } catch (t) {
          rt(this, e, t);
        }
      }),
      ((r = function (t) {
        N(this, {
          type: R,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = p(z.prototype, {
        then: function (t, e) {
          var n = F(this),
            r = W(O(this, z));
          return (
            (r.ok = "function" != typeof t || t),
            (r.fail = "function" == typeof e && e),
            (r.domain = G ? V.domain : void 0),
            (n.parent = !0),
            n.reactions.push(r),
            0 != n.state && J(this, n, !1),
            r.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (i = function () {
        var t = new r(),
          e = M(t);
        (this.promise = t),
          (this.resolve = nt(it, t, e)),
          (this.reject = nt(rt, t, e));
      }),
      (k.f = W =
        function (t) {
          return t === z || t === o ? new i(t) : U(t);
        }),
      c ||
        "function" != typeof l ||
        ((a = l.prototype.then),
        d(
          l.prototype,
          "then",
          function (t, e) {
            var n = this;
            return new z(function (t, e) {
              a.call(n, t, e);
            }).then(t, e);
          },
          { unsafe: !0 }
        ),
        "function" == typeof H &&
          u(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (t) {
                return j(z, H.apply(s, arguments));
              },
            }
          ))),
      u({ global: !0, wrap: !0, forced: Y }, { Promise: z }),
      h(z, R, !1, !0),
      v(R),
      (o = f(R)),
      u(
        { target: R, stat: !0, forced: Y },
        {
          reject: function (t) {
            var e = W(this);
            return e.reject.call(void 0, t), e.promise;
          },
        }
      ),
      u(
        { target: R, stat: !0, forced: c || Y },
        {
          resolve: function (t) {
            return j(c && this === o ? z : this, t);
          },
        }
      ),
      u(
        { target: R, stat: !0, forced: Q },
        {
          all: function (t) {
            var e = this,
              n = W(e),
              r = n.resolve,
              i = n.reject,
              o = T(function () {
                var n = m(e.resolve),
                  o = [],
                  a = 0,
                  u = 1;
                w(t, function (t) {
                  var c = a++,
                    s = !1;
                  o.push(void 0),
                    u++,
                    n.call(e, t).then(function (t) {
                      s || ((s = !0), (o[c] = t), --u || r(o));
                    }, i);
                }),
                  --u || r(o);
              });
            return o.error && i(o.value), n.promise;
          },
          race: function (t) {
            var e = this,
              n = W(e),
              r = n.reject,
              i = T(function () {
                var i = m(e.resolve);
                w(t, function (t) {
                  i.call(e, t).then(n.resolve, r);
                });
              });
            return i.error && r(i.value), n.promise;
          },
        }
      );
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    }),
      n.d(e, "b", function () {
        return c;
      });
    n(8), n(13);
    var r,
      i = n(3);
    function o(t, e, n) {
      t.classList.add("sticky-placeholder"),
        (t.style.width = n.width),
        (t.style.height = n.height),
        (t.style.margin =
          n.marginTop +
          " " +
          n.marginRight +
          " " +
          n.marginBottom +
          " " +
          n.marginLeft),
        "relative" === e &&
          ((t.style.top = n.top),
          (t.style.right = n.right),
          (t.style.bottom = n.bottom),
          (t.style.left = n.left));
    }
    function a(t, e) {
      void 0 === e && (e = {}),
        [
          "left",
          "bottom",
          "top",
          "position",
          "transform",
          "margin",
          "width",
          "height",
        ].forEach(function (n) {
          t.style[n] = e[n] || "";
        });
    }
    var u = {
      addedFlagAttr: "z-sticky-added",
      topAttr: "data-top",
      passiveAttr: "data-passive",
    };
    function c(t, e) {
      var n = void 0 === e ? {} : e,
        c = n.forceInViewBoundary,
        s = n.handlers,
        f = n.scrollHandlers,
        l = void 0 === f ? s : f,
        d = n.passive,
        p = void 0 !== d && d,
        h = n.top,
        v = void 0 === h ? "0" : h,
        g = n.forceFixed,
        m = void 0 !== g && g,
        y = t.parentElement;
      if (!y) throw new Error("The element.parentElement should exist");
      var b,
        x,
        w,
        _ = Object(i.b)(v),
        O = "number" == typeof v ? v + "px" : v,
        A = function () {
          x && (x.style.display = "none");
          var e = t.getBoundingClientRect(),
            n = y.getBoundingClientRect(),
            u = e.top - n.top,
            s = {
              percent: _.percent,
              targetPercent: _.targetPercent,
              distance: _.distance - u,
            },
            f = {
              percent: _.percent,
              targetPercent: _.targetPercent,
              distance: _.distance + e.height,
            },
            d =
              !m &&
              (function () {
                if ("string" == typeof r) return r;
                for (
                  var t = window.document.createElement("div"),
                    e = [
                      "sticky",
                      "-o-sticky",
                      "-webkit-sticky",
                      "-moz-sticky",
                      "-ms-sticky",
                    ],
                    n = 0;
                  n < e.length;
                  n += 1
                )
                  if (((t.style.position = e[n]), t.style.position === e[n]))
                    return (r = e[n]);
                return (r = "");
              })();
          if (d) {
            (t.style.position = d), (t.style.top = O);
            var p =
              l &&
              Object(i.a)(y, {
                start: s,
                end: f,
                handlers: l,
                forceInViewBoundary: c,
              });
            return {
              reset: function () {},
              destroy: function () {
                return p && p.destroy();
              },
            };
          }
          var h = window.getComputedStyle(t);
          b || (b = h.position);
          var v = e.left - n.left,
            g = e.left + "px",
            A = e.width + "px",
            E = e.height + "px",
            j = function () {
              a(t, {
                width: A,
                height: E,
                left: v + "px",
                top: "0",
                position: "absolute",
                margin: "0",
                transform: "none",
              });
            };
          (m || "static" === b || "relative" === b) &&
            (x
              ? (o(x, "static", h), (x.style.display = "initial"))
              : (o((x = document.createElement("div")), "static", h),
                y.insertBefore(x, t)),
            j()),
            w && w.destroy(),
            (w = Object(i.a)(y, {
              start: s,
              end: f,
              handlers: {
                onStateChange: function (e) {
                  var n = e.target,
                    r = e.state,
                    i = e.oldState;
                  switch (r) {
                    case "inView":
                      a(t, {
                        top: O,
                        left: g,
                        width: A,
                        height: E,
                        position: "fixed",
                        bottom: "auto",
                        transform: "none",
                        margin: "0",
                      });
                      break;
                    case "after":
                      a(t, {
                        width: A,
                        height: E,
                        left: v + "px",
                        top: "auto",
                        bottom: "0",
                        position: "absolute",
                        transform: "none",
                        margin: "0",
                      });
                      break;
                    case "before":
                    default:
                      j();
                  }
                  (null == l ? void 0 : l.onStateChange) &&
                    l.onStateChange({ target: n, state: r, oldState: i });
                },
                before: null == l ? void 0 : l.before,
                inView: null == l ? void 0 : l.inView,
                after: null == l ? void 0 : l.after,
                always: null == l ? void 0 : l.always,
              },
            }));
        };
      t.setAttribute(u.addedFlagAttr, u.addedFlagAttr), A();
      var E = function () {
        a(t), A();
      };
      p || i.c.addWidthListener(E);
      return {
        destroy: function () {
          w && (w.destroy(), (w = void 0));
        },
        reset: E,
      };
    }
    function s(t, e) {
      var n = void 0 === e ? {} : e,
        r = n.root,
        i = void 0 === r ? window.document : r,
        o = n.passiveAttr,
        a = void 0 === o ? u.passiveAttr : o,
        s = n.topAttr,
        f = void 0 === s ? u.topAttr : s,
        l = n.defaults,
        d = void 0 === l ? {} : l,
        p = d.passive,
        h = void 0 !== p && p,
        v = d.top,
        g = void 0 === v ? "0" : v,
        m = [];
      i.querySelectorAll(t).forEach(function (t) {
        t.hasAttribute(u.addedFlagAttr) ||
          m.push(
            c(t, {
              passive: t.hasAttribute(a) || h,
              top: t.getAttribute(f) || g,
            })
          );
      });
      return {
        destroy: function () {
          m.forEach(function (t) {
            (0, t.destroy)();
          });
        },
        reset: function () {
          m.forEach(function (t) {
            (0, t.reset)();
          });
        },
      };
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    }),
      n.d(e, "b", function () {
        return c;
      });
    n(8), n(38), n(145), n(13);
    function r() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
      );
    }
    function i() {
      return (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      );
    }
    function o(t) {
      return function (e) {
        var n = t.indexOf(e);
        -1 !== n && t.splice(n, 1);
      };
    }
    var a = (function () {
      function t() {
        var t = this;
        (this.size = Object.create(null)),
          (this.listeners = { width: [], height: [], size: [] }),
          (this.onResize = function () {
            var e = t,
              n = e.size,
              o = e.listeners,
              a = n.width,
              u = n.height;
            (n.width = i()), (n.height = r());
            var c = !1;
            n.width !== a &&
              (o.width.forEach(function (t) {
                return t(n.width, a);
              }),
              (c = !0)),
              n.height !== u &&
                (o.height.forEach(function (t) {
                  return t(n.height, u);
                }),
                (c = !0)),
              c &&
                o.size.forEach(function (t) {
                  return t(
                    { width: n.width, height: n.height },
                    { width: a, height: u }
                  );
                });
          }),
          (this.removeWidthHandler = o(this.listeners.width)),
          (this.removeHeightHandler = o(this.listeners.height)),
          (this.removeSizeHandler = o(this.listeners.size)),
          window.addEventListener("resize", this.onResize);
      }
      return (
        (t.getWidth = function () {
          return this.singleton.width;
        }),
        (t.getHeight = function () {
          return this.singleton.height;
        }),
        (t.getSize = function () {
          return { width: this.singleton.width, height: this.singleton.height };
        }),
        (t.addWidthListener = function (t) {
          return this.singleton.addWidthListener(t);
        }),
        (t.addHeightListener = function (t) {
          return this.singleton.addHeightListener(t);
        }),
        (t.prototype.destroy = function () {
          window.removeEventListener("resize", this.onResize);
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            var t = this.size;
            return t.height || (t.height = r()) || 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            var t = this.size;
            return t.width || (t.width = i()) || 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.addWidthListener = function (t) {
          var e = this;
          return (
            this.listeners.width.push(t),
            function () {
              return e.removeWidthHandler(t);
            }
          );
        }),
        (t.prototype.addHeightListener = function (t) {
          var e = this;
          return (
            this.listeners.height.push(t),
            function () {
              return e.removeHeightHandler(t);
            }
          );
        }),
        (t.prototype.addSizeListener = function (t) {
          var e = this;
          return (
            this.listeners.size.push(t),
            function () {
              return e.removeSizeHandler(t);
            }
          );
        }),
        (t.singleton = new t()),
        t
      );
    })();
    function u(t) {
      return "number" == typeof t.min;
    }
    function c(t, e) {
      for (
        var n = void 0 === e ? a.getSize() : e,
          r = n.width,
          i = r > n.height ? "landscape" : "portrait",
          o = 0;
        o < t.length;
        o += 1
      ) {
        var c = t[o],
          s = c.width,
          f = c.orientation;
        if (!f || f === i)
          if (u(s)) {
            if (r >= s.min) return c;
          } else if (r <= s.max) return c;
      }
    }
  },
  function (t, e, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */ !(function (e, n) {
      "use strict";
      "object" == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return n(t);
              })
        : n(e);
    })("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";
      var o = [],
        a = Object.getPrototypeOf,
        u = o.slice,
        c = o.flat
          ? function (t) {
              return o.flat.call(t);
            }
          : function (t) {
              return o.concat.apply([], t);
            },
        s = o.push,
        f = o.indexOf,
        l = {},
        d = l.toString,
        p = l.hasOwnProperty,
        h = p.toString,
        v = h.call(Object),
        g = {},
        m = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function (t) {
          return null != t && t === t.window;
        },
        b = n.document,
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(t, e, n) {
        var r,
          i,
          o = (n = n || b).createElement("script");
        if (((o.text = t), e))
          for (r in x)
            (i = e[r] || (e.getAttribute && e.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function _(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? l[d.call(t)] || "object"
          : typeof t;
      }
      var O = function (t, e) {
        return new O.fn.init(t, e);
      };
      function A(t) {
        var e = !!t && "length" in t && t.length,
          n = _(t);
        return (
          !m(t) &&
          !y(t) &&
          ("array" === n ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      (O.fn = O.prototype =
        {
          jquery: "3.5.1",
          constructor: O,
          length: 0,
          toArray: function () {
            return u.call(this);
          },
          get: function (t) {
            return null == t
              ? u.call(this)
              : t < 0
              ? this[t + this.length]
              : this[t];
          },
          pushStack: function (t) {
            var e = O.merge(this.constructor(), t);
            return (e.prevObject = this), e;
          },
          each: function (t) {
            return O.each(this, t);
          },
          map: function (t) {
            return this.pushStack(
              O.map(this, function (e, n) {
                return t.call(e, n, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(u.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              O.grep(this, function (t, e) {
                return (e + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              O.grep(this, function (t, e) {
                return e % 2;
              })
            );
          },
          eq: function (t) {
            var e = this.length,
              n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: s,
          sort: o.sort,
          splice: o.splice,
        }),
        (O.extend = O.fn.extend =
          function () {
            var t,
              e,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              u = 1,
              c = arguments.length,
              s = !1;
            for (
              "boolean" == typeof a && ((s = a), (a = arguments[u] || {}), u++),
                "object" == typeof a || m(a) || (a = {}),
                u === c && ((a = this), u--);
              u < c;
              u++
            )
              if (null != (t = arguments[u]))
                for (e in t)
                  (r = t[e]),
                    "__proto__" !== e &&
                      a !== r &&
                      (s && r && (O.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[e]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || O.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (a[e] = O.extend(s, o, r)))
                        : void 0 !== r && (a[e] = r));
            return a;
          }),
        O.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, n;
            return (
              !(!t || "[object Object]" !== d.call(t)) &&
              (!(e = a(t)) ||
                ("function" ==
                  typeof (n = p.call(e, "constructor") && e.constructor) &&
                  h.call(n) === v))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t, e, n) {
            w(t, { nonce: e && e.nonce }, n);
          },
          each: function (t, e) {
            var n,
              r = 0;
            if (A(t))
              for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
            else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
            return t;
          },
          makeArray: function (t, e) {
            var n = e || [];
            return (
              null != t &&
                (A(Object(t))
                  ? O.merge(n, "string" == typeof t ? [t] : t)
                  : s.call(n, t)),
              n
            );
          },
          inArray: function (t, e, n) {
            return null == e ? -1 : f.call(e, t, n);
          },
          merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++)
              t[i++] = e[r];
            return (t.length = i), t;
          },
          grep: function (t, e, n) {
            for (var r = [], i = 0, o = t.length, a = !n; i < o; i++)
              !e(t[i], i) !== a && r.push(t[i]);
            return r;
          },
          map: function (t, e, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (A(t))
              for (r = t.length; o < r; o++)
                null != (i = e(t[o], o, n)) && a.push(i);
            else for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
            return c(a);
          },
          guid: 1,
          support: g,
        }),
        "function" == typeof Symbol &&
          (O.fn[Symbol.iterator] = o[Symbol.iterator]),
        O.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            l["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var E =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            u,
            c,
            s,
            f,
            l,
            d,
            p,
            h,
            v,
            g,
            m,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = t.document,
            _ = 0,
            O = 0,
            A = ct(),
            E = ct(),
            j = ct(),
            S = ct(),
            k = function (t, e) {
              return t === e && (l = !0), 0;
            },
            T = {}.hasOwnProperty,
            C = [],
            L = C.pop,
            I = C.push,
            D = C.push,
            P = C.slice,
            R = function (t, e) {
              for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e) return n;
              return -1;
            },
            M =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            N = "[\\x20\\t\\r\\n\\f]",
            F =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              N +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            z =
              "\\[" +
              N +
              "*(" +
              F +
              ")(?:" +
              N +
              "*([*^$|!~]?=)" +
              N +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              F +
              "))|)" +
              N +
              "*\\]",
            B =
              ":(" +
              F +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              z +
              ")*)|.*)\\)|)",
            q = new RegExp(N + "+", "g"),
            V = new RegExp(
              "^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$",
              "g"
            ),
            H = new RegExp("^" + N + "*," + N + "*"),
            W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
            U = new RegExp(N + "|>"),
            G = new RegExp(B),
            $ = new RegExp("^" + F + "$"),
            Y = {
              ID: new RegExp("^#(" + F + ")"),
              CLASS: new RegExp("^\\.(" + F + ")"),
              TAG: new RegExp("^(" + F + "|[*])"),
              ATTR: new RegExp("^" + z),
              PSEUDO: new RegExp("^" + B),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  N +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  N +
                  "*(?:([+-]|)" +
                  N +
                  "*(\\d+)|))" +
                  N +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + M + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  N +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  N +
                  "*((?:-\\d)?\\d*)" +
                  N +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            Q = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            nt = function (t, e) {
              var n = "0x" + t.slice(1) - 65536;
              return (
                e ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function (t, e) {
              return e
                ? "\0" === t
                  ? "锟�"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            },
            ot = function () {
              d();
            },
            at = xt(
              function (t) {
                return (
                  !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            D.apply((C = P.call(w.childNodes)), w.childNodes),
              C[w.childNodes.length].nodeType;
          } catch (t) {
            D = {
              apply: C.length
                ? function (t, e) {
                    I.apply(t, P.call(e));
                  }
                : function (t, e) {
                    for (var n = t.length, r = 0; (t[n++] = e[r++]); );
                    t.length = n - 1;
                  },
            };
          }
          function ut(t, e, r, i) {
            var o,
              u,
              s,
              f,
              l,
              h,
              m,
              y = e && e.ownerDocument,
              w = e ? e.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))
            )
              return r;
            if (!i && (d(e), (e = e || p), v)) {
              if (11 !== w && (l = Z.exec(t)))
                if ((o = l[1])) {
                  if (9 === w) {
                    if (!(s = e.getElementById(o))) return r;
                    if (s.id === o) return r.push(s), r;
                  } else if (
                    y &&
                    (s = y.getElementById(o)) &&
                    b(e, s) &&
                    s.id === o
                  )
                    return r.push(s), r;
                } else {
                  if (l[2]) return D.apply(r, e.getElementsByTagName(t)), r;
                  if (
                    (o = l[3]) &&
                    n.getElementsByClassName &&
                    e.getElementsByClassName
                  )
                    return D.apply(r, e.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !S[t + " "] &&
                (!g || !g.test(t)) &&
                (1 !== w || "object" !== e.nodeName.toLowerCase())
              ) {
                if (((m = t), (y = e), 1 === w && (U.test(t) || W.test(t)))) {
                  for (
                    ((y = (tt.test(t) && mt(e.parentNode)) || e) === e &&
                      n.scope) ||
                      ((f = e.getAttribute("id"))
                        ? (f = f.replace(rt, it))
                        : e.setAttribute("id", (f = x))),
                      u = (h = a(t)).length;
                    u--;

                  )
                    h[u] = (f ? "#" + f : ":scope") + " " + bt(h[u]);
                  m = h.join(",");
                }
                try {
                  return D.apply(r, y.querySelectorAll(m)), r;
                } catch (e) {
                  S(t, !0);
                } finally {
                  f === x && e.removeAttribute("id");
                }
              }
            }
            return c(t.replace(V, "$1"), e, r, i);
          }
          function ct() {
            var t = [];
            return function e(n, i) {
              return (
                t.push(n + " ") > r.cacheLength && delete e[t.shift()],
                (e[n + " "] = i)
              );
            };
          }
          function st(t) {
            return (t[x] = !0), t;
          }
          function ft(t) {
            var e = p.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function lt(t, e) {
            for (var n = t.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = e;
          }
          function dt(t, e) {
            var n = e && t,
              r =
                n &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
            return t ? 1 : -1;
          }
          function pt(t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          }
          function ht(t) {
            return function (e) {
              var n = e.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && e.type === t;
            };
          }
          function vt(t) {
            return function (e) {
              return "form" in e
                ? e.parentNode && !1 === e.disabled
                  ? "label" in e
                    ? "label" in e.parentNode
                      ? e.parentNode.disabled === t
                      : e.disabled === t
                    : e.isDisabled === t || (e.isDisabled !== !t && at(e) === t)
                  : e.disabled === t
                : "label" in e && e.disabled === t;
            };
          }
          function gt(t) {
            return st(function (e) {
              return (
                (e = +e),
                st(function (n, r) {
                  for (var i, o = t([], n.length, e), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (e in ((n = ut.support = {}),
          (o = ut.isXML =
            function (t) {
              var e = t.namespaceURI,
                n = (t.ownerDocument || t).documentElement;
              return !Q.test(e || (n && n.nodeName) || "HTML");
            }),
          (d = ut.setDocument =
            function (t) {
              var e,
                i,
                a = t ? t.ownerDocument || t : w;
              return a != p && 9 === a.nodeType && a.documentElement
                ? ((h = (p = a).documentElement),
                  (v = !o(p)),
                  w != p &&
                    (i = p.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", ot, !1)
                      : i.attachEvent && i.attachEvent("onunload", ot)),
                  (n.scope = ft(function (t) {
                    return (
                      h.appendChild(t).appendChild(p.createElement("div")),
                      void 0 !== t.querySelectorAll &&
                        !t.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ft(function (t) {
                    return (t.className = "i"), !t.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ft(function (t) {
                    return (
                      t.appendChild(p.createComment("")),
                      !t.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                  (n.getById = ft(function (t) {
                    return (
                      (h.appendChild(t).id = x),
                      !p.getElementsByName || !p.getElementsByName(x).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                          return t.getAttribute("id") === e;
                        };
                      }),
                      (r.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && v) {
                          var n = e.getElementById(t);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (t) {
                        var e = t.replace(et, nt);
                        return function (t) {
                          var n =
                            void 0 !== t.getAttributeNode &&
                            t.getAttributeNode("id");
                          return n && n.value === e;
                        };
                      }),
                      (r.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && v) {
                          var n,
                            r,
                            i,
                            o = e.getElementById(t);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                              return [o];
                            for (
                              i = e.getElementsByName(t), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === t
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (t, e) {
                        return void 0 !== e.getElementsByTagName
                          ? e.getElementsByTagName(t)
                          : n.qsa
                          ? e.querySelectorAll(t)
                          : void 0;
                      }
                    : function (t, e) {
                        var n,
                          r = [],
                          i = 0,
                          o = e.getElementsByTagName(t);
                        if ("*" === t) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (t, e) {
                      if (void 0 !== e.getElementsByClassName && v)
                        return e.getElementsByClassName(t);
                    }),
                  (m = []),
                  (g = []),
                  (n.qsa = K.test(p.querySelectorAll)) &&
                    (ft(function (t) {
                      var e;
                      (h.appendChild(t).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                          g.push("[*^$]=" + N + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length ||
                          g.push("\\[" + N + "*(?:value|" + M + ")"),
                        t.querySelectorAll("[id~=" + x + "-]").length ||
                          g.push("~="),
                        (e = p.createElement("input")).setAttribute("name", ""),
                        t.appendChild(e),
                        t.querySelectorAll("[name='']").length ||
                          g.push(
                            "\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"
                          ),
                        t.querySelectorAll(":checked").length ||
                          g.push(":checked"),
                        t.querySelectorAll("a#" + x + "+*").length ||
                          g.push(".#.+[+~]"),
                        t.querySelectorAll("\\\f"),
                        g.push("[\\r\\n\\f]");
                    }),
                    ft(function (t) {
                      t.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var e = p.createElement("input");
                      e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length &&
                          g.push("name" + N + "*[*^$|!~]?="),
                        2 !== t.querySelectorAll(":enabled").length &&
                          g.push(":enabled", ":disabled"),
                        (h.appendChild(t).disabled = !0),
                        2 !== t.querySelectorAll(":disabled").length &&
                          g.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        g.push(",.*:");
                    })),
                  (n.matchesSelector = K.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ft(function (t) {
                      (n.disconnectedMatch = y.call(t, "*")),
                        y.call(t, "[s!='']:x"),
                        m.push("!=", B);
                    }),
                  (g = g.length && new RegExp(g.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (e = K.test(h.compareDocumentPosition)),
                  (b =
                    e || K.test(h.contains)
                      ? function (t, e) {
                          var n = 9 === t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode;
                          return (
                            t === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (t, e) {
                          if (e)
                            for (; (e = e.parentNode); ) if (e === t) return !0;
                          return !1;
                        }),
                  (k = e
                    ? function (t, e) {
                        if (t === e) return (l = !0), 0;
                        var r =
                          !t.compareDocumentPosition -
                          !e.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (t.ownerDocument || t) == (e.ownerDocument || e)
                                ? t.compareDocumentPosition(e)
                                : 1) ||
                          (!n.sortDetached &&
                            e.compareDocumentPosition(t) === r)
                            ? t == p || (t.ownerDocument == w && b(w, t))
                              ? -1
                              : e == p || (e.ownerDocument == w && b(w, e))
                              ? 1
                              : f
                              ? R(f, t) - R(f, e)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (t, e) {
                        if (t === e) return (l = !0), 0;
                        var n,
                          r = 0,
                          i = t.parentNode,
                          o = e.parentNode,
                          a = [t],
                          u = [e];
                        if (!i || !o)
                          return t == p
                            ? -1
                            : e == p
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : f
                            ? R(f, t) - R(f, e)
                            : 0;
                        if (i === o) return dt(t, e);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (n = e; (n = n.parentNode); ) u.unshift(n);
                        for (; a[r] === u[r]; ) r++;
                        return r
                          ? dt(a[r], u[r])
                          : a[r] == w
                          ? -1
                          : u[r] == w
                          ? 1
                          : 0;
                      }),
                  p)
                : p;
            }),
          (ut.matches = function (t, e) {
            return ut(t, null, null, e);
          }),
          (ut.matchesSelector = function (t, e) {
            if (
              (d(t),
              n.matchesSelector &&
                v &&
                !S[e + " "] &&
                (!m || !m.test(e)) &&
                (!g || !g.test(e)))
            )
              try {
                var r = y.call(t, e);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return r;
              } catch (t) {
                S(e, !0);
              }
            return ut(e, p, null, [t]).length > 0;
          }),
          (ut.contains = function (t, e) {
            return (t.ownerDocument || t) != p && d(t), b(t, e);
          }),
          (ut.attr = function (t, e) {
            (t.ownerDocument || t) != p && d(t);
            var i = r.attrHandle[e.toLowerCase()],
              o =
                i && T.call(r.attrHandle, e.toLowerCase())
                  ? i(t, e, !v)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !v
              ? t.getAttribute(e)
              : (o = t.getAttributeNode(e)) && o.specified
              ? o.value
              : null;
          }),
          (ut.escape = function (t) {
            return (t + "").replace(rt, it);
          }),
          (ut.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (ut.uniqueSort = function (t) {
            var e,
              r = [],
              i = 0,
              o = 0;
            if (
              ((l = !n.detectDuplicates),
              (f = !n.sortStable && t.slice(0)),
              t.sort(k),
              l)
            ) {
              for (; (e = t[o++]); ) e === t[o] && (i = r.push(o));
              for (; i--; ) t.splice(r[i], 1);
            }
            return (f = null), t;
          }),
          (i = ut.getText =
            function (t) {
              var e,
                n = "",
                r = 0,
                o = t.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) n += i(t);
                } else if (3 === o || 4 === o) return t.nodeValue;
              } else for (; (e = t[r++]); ) n += i(e);
              return n;
            }),
          ((r = ut.selectors =
            {
              cacheLength: 50,
              createPseudo: st,
              match: Y,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(et, nt)),
                    (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    "nth" === t[1].slice(0, 3)
                      ? (t[3] || ut.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                      : t[3] && ut.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var e,
                    n = !t[6] && t[2];
                  return Y.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || "")
                        : n &&
                          G.test(n) &&
                          (e = a(n, !0)) &&
                          (e = n.indexOf(")", n.length - e) - n.length) &&
                          ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(et, nt).toLowerCase();
                  return "*" === t
                    ? function () {
                        return !0;
                      }
                    : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                      };
                },
                CLASS: function (t) {
                  var e = A[t + " "];
                  return (
                    e ||
                    ((e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) &&
                      A(t, function (t) {
                        return e.test(
                          ("string" == typeof t.className && t.className) ||
                            (void 0 !== t.getAttribute &&
                              t.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (t, e, n) {
                  return function (r) {
                    var i = ut.attr(r, t);
                    return null == i
                      ? "!=" === e
                      : !e ||
                          ((i += ""),
                          "=" === e
                            ? i === n
                            : "!=" === e
                            ? i !== n
                            : "^=" === e
                            ? n && 0 === i.indexOf(n)
                            : "*=" === e
                            ? n && i.indexOf(n) > -1
                            : "$=" === e
                            ? n && i.slice(-n.length) === n
                            : "~=" === e
                            ? (" " + i.replace(q, " ") + " ").indexOf(n) > -1
                            : "|=" === e &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (t, e, n, r, i) {
                  var o = "nth" !== t.slice(0, 3),
                    a = "last" !== t.slice(-4),
                    u = "of-type" === e;
                  return 1 === r && 0 === i
                    ? function (t) {
                        return !!t.parentNode;
                      }
                    : function (e, n, c) {
                        var s,
                          f,
                          l,
                          d,
                          p,
                          h,
                          v = o !== a ? "nextSibling" : "previousSibling",
                          g = e.parentNode,
                          m = u && e.nodeName.toLowerCase(),
                          y = !c && !u,
                          b = !1;
                        if (g) {
                          if (o) {
                            for (; v; ) {
                              for (d = e; (d = d[v]); )
                                if (
                                  u
                                    ? d.nodeName.toLowerCase() === m
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              h = v = "only" === t && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? g.firstChild : g.lastChild]), a && y)
                          ) {
                            for (
                              b =
                                (p =
                                  (s =
                                    (f =
                                      (l = (d = g)[x] || (d[x] = {}))[
                                        d.uniqueID
                                      ] || (l[d.uniqueID] = {}))[t] ||
                                    [])[0] === _ && s[1]) && s[2],
                                d = p && g.childNodes[p];
                              (d =
                                (++p && d && d[v]) || (b = p = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++b && d === e) {
                                f[t] = [_, p, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = p =
                                (s =
                                  (f =
                                    (l = (d = e)[x] || (d[x] = {}))[
                                      d.uniqueID
                                    ] || (l[d.uniqueID] = {}))[t] || [])[0] ===
                                  _ && s[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (d =
                                (++p && d && d[v]) || (b = p = 0) || h.pop()) &&
                              ((u
                                ? d.nodeName.toLowerCase() !== m
                                : 1 !== d.nodeType) ||
                                !++b ||
                                (y &&
                                  ((f =
                                    (l = d[x] || (d[x] = {}))[d.uniqueID] ||
                                    (l[d.uniqueID] = {}))[t] = [_, b]),
                                d !== e));

                            );
                          return (b -= i) === r || (b % r == 0 && b / r >= 0);
                        }
                      };
                },
                PSEUDO: function (t, e) {
                  var n,
                    i =
                      r.pseudos[t] ||
                      r.setFilters[t.toLowerCase()] ||
                      ut.error("unsupported pseudo: " + t);
                  return i[x]
                    ? i(e)
                    : i.length > 1
                    ? ((n = [t, t, "", e]),
                      r.setFilters.hasOwnProperty(t.toLowerCase())
                        ? st(function (t, n) {
                            for (var r, o = i(t, e), a = o.length; a--; )
                              t[(r = R(t, o[a]))] = !(n[r] = o[a]);
                          })
                        : function (t) {
                            return i(t, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: st(function (t) {
                  var e = [],
                    n = [],
                    r = u(t.replace(V, "$1"));
                  return r[x]
                    ? st(function (t, e, n, i) {
                        for (var o, a = r(t, null, i, []), u = t.length; u--; )
                          (o = a[u]) && (t[u] = !(e[u] = o));
                      })
                    : function (t, i, o) {
                        return (
                          (e[0] = t), r(e, null, o, n), (e[0] = null), !n.pop()
                        );
                      };
                }),
                has: st(function (t) {
                  return function (e) {
                    return ut(t, e).length > 0;
                  };
                }),
                contains: st(function (t) {
                  return (
                    (t = t.replace(et, nt)),
                    function (e) {
                      return (e.textContent || i(e)).indexOf(t) > -1;
                    }
                  );
                }),
                lang: st(function (t) {
                  return (
                    $.test(t || "") || ut.error("unsupported lang: " + t),
                    (t = t.replace(et, nt).toLowerCase()),
                    function (e) {
                      var n;
                      do {
                        if (
                          (n = v
                            ? e.lang
                            : e.getAttribute("xml:lang") ||
                              e.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === t ||
                            0 === n.indexOf(t + "-")
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var n = t.location && t.location.hash;
                  return n && n.slice(1) === e.id;
                },
                root: function (t) {
                  return t === h;
                },
                focus: function (t) {
                  return (
                    t === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: vt(!1),
                disabled: vt(!0),
                checked: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && !!t.checked) ||
                    ("option" === e && !!t.selected)
                  );
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                  );
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (t) {
                  return !r.pseudos.empty(t);
                },
                header: function (t) {
                  return J.test(t.nodeName);
                },
                input: function (t) {
                  return X.test(t.nodeName);
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && "button" === t.type) || "button" === e
                  );
                },
                text: function (t) {
                  var e;
                  return (
                    "input" === t.nodeName.toLowerCase() &&
                    "text" === t.type &&
                    (null == (e = t.getAttribute("type")) ||
                      "text" === e.toLowerCase())
                  );
                },
                first: gt(function () {
                  return [0];
                }),
                last: gt(function (t, e) {
                  return [e - 1];
                }),
                eq: gt(function (t, e, n) {
                  return [n < 0 ? n + e : n];
                }),
                even: gt(function (t, e) {
                  for (var n = 0; n < e; n += 2) t.push(n);
                  return t;
                }),
                odd: gt(function (t, e) {
                  for (var n = 1; n < e; n += 2) t.push(n);
                  return t;
                }),
                lt: gt(function (t, e, n) {
                  for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0; )
                    t.push(r);
                  return t;
                }),
                gt: gt(function (t, e, n) {
                  for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
                  return t;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[e] = pt(e);
          for (e in { submit: !0, reset: !0 }) r.pseudos[e] = ht(e);
          function yt() {}
          function bt(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r;
          }
          function xt(t, e, n) {
            var r = e.dir,
              i = e.next,
              o = i || r,
              a = n && "parentNode" === o,
              u = O++;
            return e.first
              ? function (e, n, i) {
                  for (; (e = e[r]); )
                    if (1 === e.nodeType || a) return t(e, n, i);
                  return !1;
                }
              : function (e, n, c) {
                  var s,
                    f,
                    l,
                    d = [_, u];
                  if (c) {
                    for (; (e = e[r]); )
                      if ((1 === e.nodeType || a) && t(e, n, c)) return !0;
                  } else
                    for (; (e = e[r]); )
                      if (1 === e.nodeType || a)
                        if (
                          ((f =
                            (l = e[x] || (e[x] = {}))[e.uniqueID] ||
                            (l[e.uniqueID] = {})),
                          i && i === e.nodeName.toLowerCase())
                        )
                          e = e[r] || e;
                        else {
                          if ((s = f[o]) && s[0] === _ && s[1] === u)
                            return (d[2] = s[2]);
                          if (((f[o] = d), (d[2] = t(e, n, c)))) return !0;
                        }
                  return !1;
                };
          }
          function wt(t) {
            return t.length > 1
              ? function (e, n, r) {
                  for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
                  return !0;
                }
              : t[0];
          }
          function _t(t, e, n, r, i) {
            for (var o, a = [], u = 0, c = t.length, s = null != e; u < c; u++)
              (o = t[u]) && ((n && !n(o, r, i)) || (a.push(o), s && e.push(u)));
            return a;
          }
          function Ot(t, e, n, r, i, o) {
            return (
              r && !r[x] && (r = Ot(r)),
              i && !i[x] && (i = Ot(i, o)),
              st(function (o, a, u, c) {
                var s,
                  f,
                  l,
                  d = [],
                  p = [],
                  h = a.length,
                  v =
                    o ||
                    (function (t, e, n) {
                      for (var r = 0, i = e.length; r < i; r++) ut(t, e[r], n);
                      return n;
                    })(e || "*", u.nodeType ? [u] : u, []),
                  g = !t || (!o && e) ? v : _t(v, d, t, u, c),
                  m = n ? (i || (o ? t : h || r) ? [] : a) : g;
                if ((n && n(g, m, u, c), r))
                  for (s = _t(m, p), r(s, [], u, c), f = s.length; f--; )
                    (l = s[f]) && (m[p[f]] = !(g[p[f]] = l));
                if (o) {
                  if (i || t) {
                    if (i) {
                      for (s = [], f = m.length; f--; )
                        (l = m[f]) && s.push((g[f] = l));
                      i(null, (m = []), s, c);
                    }
                    for (f = m.length; f--; )
                      (l = m[f]) &&
                        (s = i ? R(o, l) : d[f]) > -1 &&
                        (o[s] = !(a[s] = l));
                  }
                } else (m = _t(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, c) : D.apply(a, m);
              })
            );
          }
          function At(t) {
            for (
              var e,
                n,
                i,
                o = t.length,
                a = r.relative[t[0].type],
                u = a || r.relative[" "],
                c = a ? 1 : 0,
                f = xt(
                  function (t) {
                    return t === e;
                  },
                  u,
                  !0
                ),
                l = xt(
                  function (t) {
                    return R(e, t) > -1;
                  },
                  u,
                  !0
                ),
                d = [
                  function (t, n, r) {
                    var i =
                      (!a && (r || n !== s)) ||
                      ((e = n).nodeType ? f(t, n, r) : l(t, n, r));
                    return (e = null), i;
                  },
                ];
              c < o;
              c++
            )
              if ((n = r.relative[t[c].type])) d = [xt(wt(d), n)];
              else {
                if ((n = r.filter[t[c].type].apply(null, t[c].matches))[x]) {
                  for (i = ++c; i < o && !r.relative[t[i].type]; i++);
                  return Ot(
                    c > 1 && wt(d),
                    c > 1 &&
                      bt(
                        t
                          .slice(0, c - 1)
                          .concat({ value: " " === t[c - 2].type ? "*" : "" })
                      ).replace(V, "$1"),
                    n,
                    c < i && At(t.slice(c, i)),
                    i < o && At((t = t.slice(i))),
                    i < o && bt(t)
                  );
                }
                d.push(n);
              }
            return wt(d);
          }
          return (
            (yt.prototype = r.filters = r.pseudos),
            (r.setFilters = new yt()),
            (a = ut.tokenize =
              function (t, e) {
                var n,
                  i,
                  o,
                  a,
                  u,
                  c,
                  s,
                  f = E[t + " "];
                if (f) return e ? 0 : f.slice(0);
                for (u = t, c = [], s = r.preFilter; u; ) {
                  for (a in ((n && !(i = H.exec(u))) ||
                    (i && (u = u.slice(i[0].length) || u), c.push((o = []))),
                  (n = !1),
                  (i = W.exec(u)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(V, " ") }),
                    (u = u.slice(n.length))),
                  r.filter))
                    !(i = Y[a].exec(u)) ||
                      (s[a] && !(i = s[a](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: a, matches: i }),
                      (u = u.slice(n.length)));
                  if (!n) break;
                }
                return e ? u.length : u ? ut.error(t) : E(t, c).slice(0);
              }),
            (u = ut.compile =
              function (t, e) {
                var n,
                  i = [],
                  o = [],
                  u = j[t + " "];
                if (!u) {
                  for (e || (e = a(t)), n = e.length; n--; )
                    (u = At(e[n]))[x] ? i.push(u) : o.push(u);
                  (u = j(
                    t,
                    (function (t, e) {
                      var n = e.length > 0,
                        i = t.length > 0,
                        o = function (o, a, u, c, f) {
                          var l,
                            h,
                            g,
                            m = 0,
                            y = "0",
                            b = o && [],
                            x = [],
                            w = s,
                            O = o || (i && r.find.TAG("*", f)),
                            A = (_ += null == w ? 1 : Math.random() || 0.1),
                            E = O.length;
                          for (
                            f && (s = a == p || a || f);
                            y !== E && null != (l = O[y]);
                            y++
                          ) {
                            if (i && l) {
                              for (
                                h = 0,
                                  a || l.ownerDocument == p || (d(l), (u = !v));
                                (g = t[h++]);

                              )
                                if (g(l, a || p, u)) {
                                  c.push(l);
                                  break;
                                }
                              f && (_ = A);
                            }
                            n && ((l = !g && l) && m--, o && b.push(l));
                          }
                          if (((m += y), n && y !== m)) {
                            for (h = 0; (g = e[h++]); ) g(b, x, a, u);
                            if (o) {
                              if (m > 0)
                                for (; y--; )
                                  b[y] || x[y] || (x[y] = L.call(c));
                              x = _t(x);
                            }
                            D.apply(c, x),
                              f &&
                                !o &&
                                x.length > 0 &&
                                m + e.length > 1 &&
                                ut.uniqueSort(c);
                          }
                          return f && ((_ = A), (s = w)), b;
                        };
                      return n ? st(o) : o;
                    })(o, i)
                  )).selector = t;
                }
                return u;
              }),
            (c = ut.select =
              function (t, e, n, i) {
                var o,
                  c,
                  s,
                  f,
                  l,
                  d = "function" == typeof t && t,
                  p = !i && a((t = d.selector || t));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    (c = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (s = c[0]).type &&
                    9 === e.nodeType &&
                    v &&
                    r.relative[c[1].type]
                  ) {
                    if (
                      !(e = (r.find.ID(s.matches[0].replace(et, nt), e) ||
                        [])[0])
                    )
                      return n;
                    d && (e = e.parentNode),
                      (t = t.slice(c.shift().value.length));
                  }
                  for (
                    o = Y.needsContext.test(t) ? 0 : c.length;
                    o-- && ((s = c[o]), !r.relative[(f = s.type)]);

                  )
                    if (
                      (l = r.find[f]) &&
                      (i = l(
                        s.matches[0].replace(et, nt),
                        (tt.test(c[0].type) && mt(e.parentNode)) || e
                      ))
                    ) {
                      if ((c.splice(o, 1), !(t = i.length && bt(c))))
                        return D.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (d || u(t, p))(
                    i,
                    e,
                    !v,
                    n,
                    !e || (tt.test(t) && mt(e.parentNode)) || e
                  ),
                  n
                );
              }),
            (n.sortStable = x.split("").sort(k).join("") === x),
            (n.detectDuplicates = !!l),
            d(),
            (n.sortDetached = ft(function (t) {
              return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ft(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
              lt("type|href|height|width", function (t, e, n) {
                if (!n)
                  return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ft(function (t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
              lt("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                  return t.defaultValue;
              }),
            ft(function (t) {
              return null == t.getAttribute("disabled");
            }) ||
              lt(M, function (t, e, n) {
                var r;
                if (!n)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (r = t.getAttributeNode(e)) && r.specified
                    ? r.value
                    : null;
              }),
            ut
          );
        })(n);
      (O.find = E),
        (O.expr = E.selectors),
        (O.expr[":"] = O.expr.pseudos),
        (O.uniqueSort = O.unique = E.uniqueSort),
        (O.text = E.getText),
        (O.isXMLDoc = E.isXML),
        (O.contains = E.contains),
        (O.escapeSelector = E.escape);
      var j = function (t, e, n) {
          for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (i && O(t).is(n)) break;
              r.push(t);
            }
          return r;
        },
        S = function (t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        k = O.expr.match.needsContext;
      function T(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(t, e, n) {
        return m(e)
          ? O.grep(t, function (t, r) {
              return !!e.call(t, r, t) !== n;
            })
          : e.nodeType
          ? O.grep(t, function (t) {
              return (t === e) !== n;
            })
          : "string" != typeof e
          ? O.grep(t, function (t) {
              return f.call(e, t) > -1 !== n;
            })
          : O.filter(e, t, n);
      }
      (O.filter = function (t, e, n) {
        var r = e[0];
        return (
          n && (t = ":not(" + t + ")"),
          1 === e.length && 1 === r.nodeType
            ? O.find.matchesSelector(r, t)
              ? [r]
              : []
            : O.find.matches(
                t,
                O.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        O.fn.extend({
          find: function (t) {
            var e,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof t)
              return this.pushStack(
                O(t).filter(function () {
                  for (e = 0; e < r; e++) if (O.contains(i[e], this)) return !0;
                })
              );
            for (n = this.pushStack([]), e = 0; e < r; e++) O.find(t, i[e], n);
            return r > 1 ? O.uniqueSort(n) : n;
          },
          filter: function (t) {
            return this.pushStack(L(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(L(this, t || [], !0));
          },
          is: function (t) {
            return !!L(
              this,
              "string" == typeof t && k.test(t) ? O(t) : t || [],
              !1
            ).length;
          },
        });
      var I,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((O.fn.init = function (t, e, n) {
        var r, i;
        if (!t) return this;
        if (((n = n || I), "string" == typeof t)) {
          if (
            !(r =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : D.exec(t)) ||
            (!r[1] && e)
          )
            return !e || e.jquery
              ? (e || n).find(t)
              : this.constructor(e).find(t);
          if (r[1]) {
            if (
              ((e = e instanceof O ? e[0] : e),
              O.merge(
                this,
                O.parseHTML(
                  r[1],
                  e && e.nodeType ? e.ownerDocument || e : b,
                  !0
                )
              ),
              C.test(r[1]) && O.isPlainObject(e))
            )
              for (r in e) m(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
            return this;
          }
          return (
            (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : m(t)
          ? void 0 !== n.ready
            ? n.ready(t)
            : t(O)
          : O.makeArray(t, this);
      }).prototype = O.fn),
        (I = O(b));
      var P = /^(?:parents|prev(?:Until|All))/,
        R = { children: !0, contents: !0, next: !0, prev: !0 };
      function M(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      O.fn.extend({
        has: function (t) {
          var e = O(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; t < n; t++) if (O.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof t && O(t);
          if (!k.test(t))
            for (; r < i; r++)
              for (n = this[r]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && O.find.matchesSelector(n, t))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? O.uniqueSort(o) : o);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? f.call(O(t), this[0])
              : f.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(O.uniqueSort(O.merge(this.get(), O(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        O.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return j(t, "parentNode");
            },
            parentsUntil: function (t, e, n) {
              return j(t, "parentNode", n);
            },
            next: function (t) {
              return M(t, "nextSibling");
            },
            prev: function (t) {
              return M(t, "previousSibling");
            },
            nextAll: function (t) {
              return j(t, "nextSibling");
            },
            prevAll: function (t) {
              return j(t, "previousSibling");
            },
            nextUntil: function (t, e, n) {
              return j(t, "nextSibling", n);
            },
            prevUntil: function (t, e, n) {
              return j(t, "previousSibling", n);
            },
            siblings: function (t) {
              return S((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return S(t.firstChild);
            },
            contents: function (t) {
              return null != t.contentDocument && a(t.contentDocument)
                ? t.contentDocument
                : (T(t, "template") && (t = t.content || t),
                  O.merge([], t.childNodes));
            },
          },
          function (t, e) {
            O.fn[t] = function (n, r) {
              var i = O.map(this, e, n);
              return (
                "Until" !== t.slice(-5) && (r = n),
                r && "string" == typeof r && (i = O.filter(r, i)),
                this.length > 1 &&
                  (R[t] || O.uniqueSort(i), P.test(t) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var N = /[^\x20\t\r\n\f]+/g;
      function F(t) {
        return t;
      }
      function z(t) {
        throw t;
      }
      function B(t, e, n, r) {
        var i;
        try {
          t && m((i = t.promise))
            ? i.call(t).done(e).fail(n)
            : t && m((i = t.then))
            ? i.call(t, e, n)
            : e.apply(void 0, [t].slice(r));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      (O.Callbacks = function (t) {
        t =
          "string" == typeof t
            ? (function (t) {
                var e = {};
                return (
                  O.each(t.match(N) || [], function (t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
            : O.extend({}, t);
        var e,
          n,
          r,
          i,
          o = [],
          a = [],
          u = -1,
          c = function () {
            for (i = i || t.once, r = e = !0; a.length; u = -1)
              for (n = a.shift(); ++u < o.length; )
                !1 === o[u].apply(n[0], n[1]) &&
                  t.stopOnFalse &&
                  ((u = o.length), (n = !1));
            t.memory || (n = !1), (e = !1), i && (o = n ? [] : "");
          },
          s = {
            add: function () {
              return (
                o &&
                  (n && !e && ((u = o.length - 1), a.push(n)),
                  (function e(n) {
                    O.each(n, function (n, r) {
                      m(r)
                        ? (t.unique && s.has(r)) || o.push(r)
                        : r && r.length && "string" !== _(r) && e(r);
                    });
                  })(arguments),
                  n && !e && c()),
                this
              );
            },
            remove: function () {
              return (
                O.each(arguments, function (t, e) {
                  for (var n; (n = O.inArray(e, o, n)) > -1; )
                    o.splice(n, 1), n <= u && u--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? O.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = a = []), n || e || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (t, n) {
              return (
                i ||
                  ((n = [t, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  e || c()),
                this
              );
            },
            fire: function () {
              return s.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return s;
      }),
        O.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  O.Callbacks("memory"),
                  O.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  O.Callbacks("once memory"),
                  O.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  O.Callbacks("once memory"),
                  O.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return i.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return O.Deferred(function (n) {
                    O.each(e, function (e, r) {
                      var i = m(t[r[4]]) && t[r[4]];
                      o[r[1]](function () {
                        var t = i && i.apply(this, arguments);
                        t && m(t.promise)
                          ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, i ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, r, i) {
                  var o = 0;
                  function a(t, e, r, i) {
                    return function () {
                      var u = this,
                        c = arguments,
                        s = function () {
                          var n, s;
                          if (!(t < o)) {
                            if ((n = r.apply(u, c)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (s =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(s)
                                ? i
                                  ? s.call(n, a(o, e, F, i), a(o, e, z, i))
                                  : (o++,
                                    s.call(
                                      n,
                                      a(o, e, F, i),
                                      a(o, e, z, i),
                                      a(o, e, F, e.notifyWith)
                                    ))
                                : (r !== F && ((u = void 0), (c = [n])),
                                  (i || e.resolveWith)(u, c));
                          }
                        },
                        f = i
                          ? s
                          : function () {
                              try {
                                s();
                              } catch (n) {
                                O.Deferred.exceptionHook &&
                                  O.Deferred.exceptionHook(n, f.stackTrace),
                                  t + 1 >= o &&
                                    (r !== z && ((u = void 0), (c = [n])),
                                    e.rejectWith(u, c));
                              }
                            };
                      t
                        ? f()
                        : (O.Deferred.getStackHook &&
                            (f.stackTrace = O.Deferred.getStackHook()),
                          n.setTimeout(f));
                    };
                  }
                  return O.Deferred(function (n) {
                    e[0][3].add(a(0, n, m(i) ? i : F, n.notifyWith)),
                      e[1][3].add(a(0, n, m(t) ? t : F)),
                      e[2][3].add(a(0, n, m(r) ? r : z));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? O.extend(t, i) : i;
                },
              },
              o = {};
            return (
              O.each(e, function (t, n) {
                var a = n[2],
                  u = n[5];
                (i[n[1]] = a.add),
                  u &&
                    a.add(
                      function () {
                        r = u;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (t) {
            var e = arguments.length,
              n = e,
              r = Array(n),
              i = u.call(arguments),
              o = O.Deferred(),
              a = function (t) {
                return function (n) {
                  (r[t] = this),
                    (i[t] = arguments.length > 1 ? u.call(arguments) : n),
                    --e || o.resolveWith(r, i);
                };
              };
            if (
              e <= 1 &&
              (B(t, o.done(a(n)).resolve, o.reject, !e),
              "pending" === o.state() || m(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) B(i[n], a(n), o.reject);
            return o.promise();
          },
        });
      var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (O.Deferred.exceptionHook = function (t, e) {
        n.console &&
          n.console.warn &&
          t &&
          q.test(t.name) &&
          n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (O.readyException = function (t) {
          n.setTimeout(function () {
            throw t;
          });
        });
      var V = O.Deferred();
      function H() {
        b.removeEventListener("DOMContentLoaded", H),
          n.removeEventListener("load", H),
          O.ready();
      }
      (O.fn.ready = function (t) {
        return (
          V.then(t).catch(function (t) {
            O.readyException(t);
          }),
          this
        );
      }),
        O.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --O.readyWait : O.isReady) ||
              ((O.isReady = !0),
              (!0 !== t && --O.readyWait > 0) || V.resolveWith(b, [O]));
          },
        }),
        (O.ready.then = V.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(O.ready)
          : (b.addEventListener("DOMContentLoaded", H),
            n.addEventListener("load", H));
      var W = function (t, e, n, r, i, o, a) {
          var u = 0,
            c = t.length,
            s = null == n;
          if ("object" === _(n))
            for (u in ((i = !0), n)) W(t, e, u, n[u], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            m(r) || (a = !0),
            s &&
              (a
                ? (e.call(t, r), (e = null))
                : ((s = e),
                  (e = function (t, e, n) {
                    return s.call(O(t), n);
                  }))),
            e)
          )
            for (; u < c; u++) e(t[u], n, a ? r : r.call(t[u], u, e(t[u], n)));
          return i ? t : s ? e.call(t) : c ? e(t[0], n) : o;
        },
        U = /^-ms-/,
        G = /-([a-z])/g;
      function $(t, e) {
        return e.toUpperCase();
      }
      function Y(t) {
        return t.replace(U, "ms-").replace(G, $);
      }
      var Q = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function X() {
        this.expando = O.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                Q(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, n) {
            var r,
              i = this.cache(t);
            if ("string" == typeof e) i[Y(e)] = n;
            else for (r in e) i[Y(r)] = e[r];
            return i;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][Y(e)];
          },
          access: function (t, e, n) {
            return void 0 === e || (e && "string" == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function (t, e) {
            var n,
              r = t[this.expando];
            if (void 0 !== r) {
              if (void 0 !== e) {
                n = (e = Array.isArray(e)
                  ? e.map(Y)
                  : (e = Y(e)) in r
                  ? [e]
                  : e.match(N) || []).length;
                for (; n--; ) delete r[e[n]];
              }
              (void 0 === e || O.isEmptyObject(r)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !O.isEmptyObject(e);
          },
        });
      var J = new X(),
        K = new X(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        tt = /[A-Z]/g;
      function et(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((r = "data-" + e.replace(tt, "-$&").toLowerCase()),
            "string" == typeof (n = t.getAttribute(r)))
          ) {
            try {
              n = (function (t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : t === +t + ""
                      ? +t
                      : Z.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(n);
            } catch (t) {}
            K.set(t, e, n);
          } else n = void 0;
        return n;
      }
      O.extend({
        hasData: function (t) {
          return K.hasData(t) || J.hasData(t);
        },
        data: function (t, e, n) {
          return K.access(t, e, n);
        },
        removeData: function (t, e) {
          K.remove(t, e);
        },
        _data: function (t, e, n) {
          return J.access(t, e, n);
        },
        _removeData: function (t, e) {
          J.remove(t, e);
        },
      }),
        O.fn.extend({
          data: function (t, e) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = Y(r.slice(5))), et(o, r, i[r]));
                J.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof t
              ? this.each(function () {
                  K.set(this, t);
                })
              : W(
                  this,
                  function (e) {
                    var n;
                    if (o && void 0 === e)
                      return void 0 !== (n = K.get(o, t))
                        ? n
                        : void 0 !== (n = et(o, t))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              K.remove(this, t);
            });
          },
        }),
        O.extend({
          queue: function (t, e, n) {
            var r;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (r = J.get(t, e)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = J.access(t, e, O.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var n = O.queue(t, e),
              r = n.length,
              i = n.shift(),
              o = O._queueHooks(t, e);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === e && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  t,
                  function () {
                    O.dequeue(t, e);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return (
              J.get(t, n) ||
              J.access(t, n, {
                empty: O.Callbacks("once memory").add(function () {
                  J.remove(t, [e + "queue", n]);
                }),
              })
            );
          },
        }),
        O.fn.extend({
          queue: function (t, e) {
            var n = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), n--),
              arguments.length < n
                ? O.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var n = O.queue(this, t, e);
                    O._queueHooks(this, t),
                      "fx" === t && "inprogress" !== n[0] && O.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              O.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var n,
              r = 1,
              i = O.Deferred(),
              o = this,
              a = this.length,
              u = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              a--;

            )
              (n = J.get(o[a], t + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(u));
            return u(), i.promise(e);
          },
        });
      var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        rt = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        ot = b.documentElement,
        at = function (t) {
          return O.contains(t.ownerDocument, t);
        },
        ut = { composed: !0 };
      ot.getRootNode &&
        (at = function (t) {
          return (
            O.contains(t.ownerDocument, t) ||
            t.getRootNode(ut) === t.ownerDocument
          );
        });
      var ct = function (t, e) {
        return (
          "none" === (t = e || t).style.display ||
          ("" === t.style.display && at(t) && "none" === O.css(t, "display"))
        );
      };
      function st(t, e, n, r) {
        var i,
          o,
          a = 20,
          u = r
            ? function () {
                return r.cur();
              }
            : function () {
                return O.css(t, e, "");
              },
          c = u(),
          s = (n && n[3]) || (O.cssNumber[e] ? "" : "px"),
          f =
            t.nodeType &&
            (O.cssNumber[e] || ("px" !== s && +c)) &&
            rt.exec(O.css(t, e));
        if (f && f[3] !== s) {
          for (c /= 2, s = s || f[3], f = +c || 1; a--; )
            O.style(t, e, f + s),
              (1 - o) * (1 - (o = u() / c || 0.5)) <= 0 && (a = 0),
              (f /= o);
          (f *= 2), O.style(t, e, f + s), (n = n || []);
        }
        return (
          n &&
            ((f = +f || +c || 0),
            (i = n[1] ? f + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = s), (r.start = f), (r.end = i))),
          i
        );
      }
      var ft = {};
      function lt(t) {
        var e,
          n = t.ownerDocument,
          r = t.nodeName,
          i = ft[r];
        return (
          i ||
          ((e = n.body.appendChild(n.createElement(r))),
          (i = O.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === i && (i = "block"),
          (ft[r] = i),
          i)
        );
      }
      function dt(t, e) {
        for (var n, r, i = [], o = 0, a = t.length; o < a; o++)
          (r = t[o]).style &&
            ((n = r.style.display),
            e
              ? ("none" === n &&
                  ((i[o] = J.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && ct(r) && (i[o] = lt(r)))
              : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
        return t;
      }
      O.fn.extend({
        show: function () {
          return dt(this, !0);
        },
        hide: function () {
          return dt(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                ct(this) ? O(this).show() : O(this).hide();
              });
        },
      });
      var pt,
        ht,
        vt = /^(?:checkbox|radio)$/i,
        gt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        mt = /^$|^module$|\/(?:java|ecma)script/i;
      (pt = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (ht = b.createElement("input")).setAttribute("type", "radio"),
        ht.setAttribute("checked", "checked"),
        ht.setAttribute("name", "t"),
        pt.appendChild(ht),
        (g.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pt.innerHTML = "<textarea>x</textarea>"),
        (g.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue),
        (pt.innerHTML = "<option></option>"),
        (g.option = !!pt.lastChild);
      var yt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function bt(t, e) {
        var n;
        return (
          (n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && T(t, e)) ? O.merge([t], n) : n
        );
      }
      function xt(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
          J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"));
      }
      (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
        (yt.th = yt.td),
        g.option ||
          (yt.optgroup = yt.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var wt = /<|&#?\w+;/;
      function _t(t, e, n, r, i) {
        for (
          var o,
            a,
            u,
            c,
            s,
            f,
            l = e.createDocumentFragment(),
            d = [],
            p = 0,
            h = t.length;
          p < h;
          p++
        )
          if ((o = t[p]) || 0 === o)
            if ("object" === _(o)) O.merge(d, o.nodeType ? [o] : o);
            else if (wt.test(o)) {
              for (
                a = a || l.appendChild(e.createElement("div")),
                  u = (gt.exec(o) || ["", ""])[1].toLowerCase(),
                  c = yt[u] || yt._default,
                  a.innerHTML = c[1] + O.htmlPrefilter(o) + c[2],
                  f = c[0];
                f--;

              )
                a = a.lastChild;
              O.merge(d, a.childNodes), ((a = l.firstChild).textContent = "");
            } else d.push(e.createTextNode(o));
        for (l.textContent = "", p = 0; (o = d[p++]); )
          if (r && O.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((s = at(o)), (a = bt(l.appendChild(o), "script")), s && xt(a), n)
          )
            for (f = 0; (o = a[f++]); ) mt.test(o.type || "") && n.push(o);
        return l;
      }
      var Ot = /^key/,
        At = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Et = /^([^.]*)(?:\.(.+)|)/;
      function jt() {
        return !0;
      }
      function St() {
        return !1;
      }
      function kt(t, e) {
        return (
          (t ===
            (function () {
              try {
                return b.activeElement;
              } catch (t) {}
            })()) ==
          ("focus" === e)
        );
      }
      function Tt(t, e, n, r, i, o) {
        var a, u;
        if ("object" == typeof e) {
          for (u in ("string" != typeof n && ((r = r || n), (n = void 0)), e))
            Tt(t, u, n, r, e[u], o);
          return t;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = St;
        else if (!i) return t;
        return (
          1 === o &&
            ((a = i),
            ((i = function (t) {
              return O().off(t), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = O.guid++))),
          t.each(function () {
            O.event.add(this, e, i, r, n);
          })
        );
      }
      function Ct(t, e, n) {
        n
          ? (J.set(t, e, !1),
            O.event.add(t, e, {
              namespace: !1,
              handler: function (t) {
                var r,
                  i,
                  o = J.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (o.length)
                    (O.event.special[e] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((o = u.call(arguments)),
                    J.set(this, e, o),
                    (r = n(this, e)),
                    this[e](),
                    o !== (i = J.get(this, e)) || r
                      ? J.set(this, e, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      t.stopImmediatePropagation(), t.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (J.set(this, e, {
                      value: O.event.trigger(
                        O.extend(o[0], O.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    t.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(t, e) && O.event.add(t, e, jt);
      }
      (O.event = {
        global: {},
        add: function (t, e, n, r, i) {
          var o,
            a,
            u,
            c,
            s,
            f,
            l,
            d,
            p,
            h,
            v,
            g = J.get(t);
          if (Q(t))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && O.find.matchesSelector(ot, i),
                n.guid || (n.guid = O.guid++),
                (c = g.events) || (c = g.events = Object.create(null)),
                (a = g.handle) ||
                  (a = g.handle =
                    function (e) {
                      return void 0 !== O && O.event.triggered !== e.type
                        ? O.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                s = (e = (e || "").match(N) || [""]).length;
              s--;

            )
              (p = v = (u = Et.exec(e[s]) || [])[1]),
                (h = (u[2] || "").split(".").sort()),
                p &&
                  ((l = O.event.special[p] || {}),
                  (p = (i ? l.delegateType : l.bindType) || p),
                  (l = O.event.special[p] || {}),
                  (f = O.extend(
                    {
                      type: p,
                      origType: v,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && O.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (d = c[p]) ||
                    (((d = c[p] = []).delegateCount = 0),
                    (l.setup && !1 !== l.setup.call(t, r, h, a)) ||
                      (t.addEventListener && t.addEventListener(p, a))),
                  l.add &&
                    (l.add.call(t, f),
                    f.handler.guid || (f.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                  (O.event.global[p] = !0));
        },
        remove: function (t, e, n, r, i) {
          var o,
            a,
            u,
            c,
            s,
            f,
            l,
            d,
            p,
            h,
            v,
            g = J.hasData(t) && J.get(t);
          if (g && (c = g.events)) {
            for (s = (e = (e || "").match(N) || [""]).length; s--; )
              if (
                ((p = v = (u = Et.exec(e[s]) || [])[1]),
                (h = (u[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  l = O.event.special[p] || {},
                    d = c[(p = (r ? l.delegateType : l.bindType) || p)] || [],
                    u =
                      u[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = d.length;
                  o--;

                )
                  (f = d[o]),
                    (!i && v !== f.origType) ||
                      (n && n.guid !== f.guid) ||
                      (u && !u.test(f.namespace)) ||
                      (r && r !== f.selector && ("**" !== r || !f.selector)) ||
                      (d.splice(o, 1),
                      f.selector && d.delegateCount--,
                      l.remove && l.remove.call(t, f));
                a &&
                  !d.length &&
                  ((l.teardown && !1 !== l.teardown.call(t, h, g.handle)) ||
                    O.removeEvent(t, p, g.handle),
                  delete c[p]);
              } else for (p in c) O.event.remove(t, p + e[s], n, r, !0);
            O.isEmptyObject(c) && J.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            u = new Array(arguments.length),
            c = O.event.fix(t),
            s = (J.get(this, "events") || Object.create(null))[c.type] || [],
            f = O.event.special[c.type] || {};
          for (u[0] = c, e = 1; e < arguments.length; e++) u[e] = arguments[e];
          if (
            ((c.delegateTarget = this),
            !f.preDispatch || !1 !== f.preDispatch.call(this, c))
          ) {
            for (
              a = O.event.handlers.call(this, c, s), e = 0;
              (i = a[e++]) && !c.isPropagationStopped();

            )
              for (
                c.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !c.isImmediatePropagationStopped();

              )
                (c.rnamespace &&
                  !1 !== o.namespace &&
                  !c.rnamespace.test(o.namespace)) ||
                  ((c.handleObj = o),
                  (c.data = o.data),
                  void 0 !==
                    (r = (
                      (O.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, u)) &&
                    !1 === (c.result = r) &&
                    (c.preventDefault(), c.stopPropagation()));
            return f.postDispatch && f.postDispatch.call(this, c), c.result;
          }
        },
        handlers: function (t, e) {
          var n,
            r,
            i,
            o,
            a,
            u = [],
            c = e.delegateCount,
            s = t.target;
          if (c && s.nodeType && !("click" === t.type && t.button >= 1))
            for (; s !== this; s = s.parentNode || this)
              if (
                1 === s.nodeType &&
                ("click" !== t.type || !0 !== s.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < c; n++)
                  void 0 === a[(i = (r = e[n]).selector + " ")] &&
                    (a[i] = r.needsContext
                      ? O(i, this).index(s) > -1
                      : O.find(i, this, null, [s]).length),
                    a[i] && o.push(r);
                o.length && u.push({ elem: s, handlers: o });
              }
          return (
            (s = this),
            c < e.length && u.push({ elem: s, handlers: e.slice(c) }),
            u
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(O.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: m(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[O.expando] ? t : new O.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              var e = this || t;
              return (
                vt.test(e.type) &&
                  e.click &&
                  T(e, "input") &&
                  Ct(e, "click", jt),
                !1
              );
            },
            trigger: function (t) {
              var e = this || t;
              return (
                vt.test(e.type) && e.click && T(e, "input") && Ct(e, "click"),
                !0
              );
            },
            _default: function (t) {
              var e = t.target;
              return (
                (vt.test(e.type) &&
                  e.click &&
                  T(e, "input") &&
                  J.get(e, "click")) ||
                T(e, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (O.removeEvent = function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (O.Event = function (t, e) {
          if (!(this instanceof O.Event)) return new O.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? jt
                  : St),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && O.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[O.expando] = !0);
        }),
        (O.Event.prototype = {
          constructor: O.Event,
          isDefaultPrevented: St,
          isPropagationStopped: St,
          isImmediatePropagationStopped: St,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = jt),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = jt),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = jt),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        O.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && Ot.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && At.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          O.event.addProp
        ),
        O.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          O.event.special[t] = {
            setup: function () {
              return Ct(this, t, kt), !1;
            },
            trigger: function () {
              return Ct(this, t), !0;
            },
            delegateType: e,
          };
        }),
        O.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            O.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var n,
                  r = this,
                  i = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (i && (i === r || O.contains(r, i))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                );
              },
            };
          }
        ),
        O.fn.extend({
          on: function (t, e, n, r) {
            return Tt(this, t, e, n, r);
          },
          one: function (t, e, n, r) {
            return Tt(this, t, e, n, r, 1);
          },
          off: function (t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
              return (
                (r = t.handleObj),
                O(t.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (i in t) this.off(i, e, t[i]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = St),
              this.each(function () {
                O.event.remove(this, t, n, e);
              })
            );
          },
        });
      var Lt = /<script|<style|<link/i,
        It = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Pt(t, e) {
        return (
          (T(t, "table") &&
            T(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            O(t).children("tbody")[0]) ||
          t
        );
      }
      function Rt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function Mt(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function Nt(t, e) {
        var n, r, i, o, a, u;
        if (1 === e.nodeType) {
          if (J.hasData(t) && (u = J.get(t).events))
            for (i in (J.remove(e, "handle events"), u))
              for (n = 0, r = u[i].length; n < r; n++)
                O.event.add(e, i, u[i][n]);
          K.hasData(t) &&
            ((o = K.access(t)), (a = O.extend({}, o)), K.set(e, a));
        }
      }
      function Ft(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && vt.test(t.type)
          ? (e.checked = t.checked)
          : ("input" !== n && "textarea" !== n) ||
            (e.defaultValue = t.defaultValue);
      }
      function zt(t, e, n, r) {
        e = c(e);
        var i,
          o,
          a,
          u,
          s,
          f,
          l = 0,
          d = t.length,
          p = d - 1,
          h = e[0],
          v = m(h);
        if (v || (d > 1 && "string" == typeof h && !g.checkClone && It.test(h)))
          return t.each(function (i) {
            var o = t.eq(i);
            v && (e[0] = h.call(this, i, o.html())), zt(o, e, n, r);
          });
        if (
          d &&
          ((o = (i = _t(e, t[0].ownerDocument, !1, t, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (u = (a = O.map(bt(i, "script"), Rt)).length; l < d; l++)
            (s = i),
              l !== p &&
                ((s = O.clone(s, !0, !0)), u && O.merge(a, bt(s, "script"))),
              n.call(t[l], s, l);
          if (u)
            for (
              f = a[a.length - 1].ownerDocument, O.map(a, Mt), l = 0;
              l < u;
              l++
            )
              (s = a[l]),
                mt.test(s.type || "") &&
                  !J.access(s, "globalEval") &&
                  O.contains(f, s) &&
                  (s.src && "module" !== (s.type || "").toLowerCase()
                    ? O._evalUrl &&
                      !s.noModule &&
                      O._evalUrl(
                        s.src,
                        { nonce: s.nonce || s.getAttribute("nonce") },
                        f
                      )
                    : w(s.textContent.replace(Dt, ""), s, f));
        }
        return t;
      }
      function Bt(t, e, n) {
        for (var r, i = e ? O.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || O.cleanData(bt(r)),
            r.parentNode &&
              (n && at(r) && xt(bt(r, "script")), r.parentNode.removeChild(r));
        return t;
      }
      O.extend({
        htmlPrefilter: function (t) {
          return t;
        },
        clone: function (t, e, n) {
          var r,
            i,
            o,
            a,
            u = t.cloneNode(!0),
            c = at(t);
          if (
            !(
              g.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              O.isXMLDoc(t)
            )
          )
            for (a = bt(u), r = 0, i = (o = bt(t)).length; r < i; r++)
              Ft(o[r], a[r]);
          if (e)
            if (n)
              for (
                o = o || bt(t), a = a || bt(u), r = 0, i = o.length;
                r < i;
                r++
              )
                Nt(o[r], a[r]);
            else Nt(t, u);
          return (
            (a = bt(u, "script")).length > 0 && xt(a, !c && bt(t, "script")), u
          );
        },
        cleanData: function (t) {
          for (
            var e, n, r, i = O.event.special, o = 0;
            void 0 !== (n = t[o]);
            o++
          )
            if (Q(n)) {
              if ((e = n[J.expando])) {
                if (e.events)
                  for (r in e.events)
                    i[r] ? O.event.remove(n, r) : O.removeEvent(n, r, e.handle);
                n[J.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        O.fn.extend({
          detach: function (t) {
            return Bt(this, t, !0);
          },
          remove: function (t) {
            return Bt(this, t);
          },
          text: function (t) {
            return W(
              this,
              function (t) {
                return void 0 === t
                  ? O.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return zt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Pt(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return zt(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = Pt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return zt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return zt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (O.cleanData(bt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return O.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return W(
              this,
              function (t) {
                var e = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !Lt.test(t) &&
                  !yt[(gt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = O.htmlPrefilter(t);
                  try {
                    for (; n < r; n++)
                      1 === (e = this[n] || {}).nodeType &&
                        (O.cleanData(bt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return zt(
              this,
              arguments,
              function (e) {
                var n = this.parentNode;
                O.inArray(this, t) < 0 &&
                  (O.cleanData(bt(this)), n && n.replaceChild(e, this));
              },
              t
            );
          },
        }),
        O.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            O.fn[t] = function (t) {
              for (
                var n, r = [], i = O(t), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  O(i[a])[e](n),
                  s.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var qt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
        Vt = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        Ht = function (t, e, n) {
          var r,
            i,
            o = {};
          for (i in e) (o[i] = t.style[i]), (t.style[i] = e[i]);
          for (i in ((r = n.call(t)), e)) t.style[i] = o[i];
          return r;
        },
        Wt = new RegExp(it.join("|"), "i");
      function Ut(t, e, n) {
        var r,
          i,
          o,
          a,
          u = t.style;
        return (
          (n = n || Vt(t)) &&
            ("" !== (a = n.getPropertyValue(e) || n[e]) ||
              at(t) ||
              (a = O.style(t, e)),
            !g.pixelBoxStyles() &&
              qt.test(a) &&
              Wt.test(e) &&
              ((r = u.width),
              (i = u.minWidth),
              (o = u.maxWidth),
              (u.minWidth = u.maxWidth = u.width = a),
              (a = n.width),
              (u.width = r),
              (u.minWidth = i),
              (u.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function Gt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (f) {
            (s.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (f.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ot.appendChild(s).appendChild(f);
            var t = n.getComputedStyle(f);
            (r = "1%" !== t.top),
              (c = 12 === e(t.marginLeft)),
              (f.style.right = "60%"),
              (a = 36 === e(t.right)),
              (i = 36 === e(t.width)),
              (f.style.position = "absolute"),
              (o = 12 === e(f.offsetWidth / 3)),
              ot.removeChild(s),
              (f = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var r,
          i,
          o,
          a,
          u,
          c,
          s = b.createElement("div"),
          f = b.createElement("div");
        f.style &&
          ((f.style.backgroundClip = "content-box"),
          (f.cloneNode(!0).style.backgroundClip = ""),
          (g.clearCloneStyle = "content-box" === f.style.backgroundClip),
          O.extend(g, {
            boxSizingReliable: function () {
              return t(), i;
            },
            pixelBoxStyles: function () {
              return t(), a;
            },
            pixelPosition: function () {
              return t(), r;
            },
            reliableMarginLeft: function () {
              return t(), c;
            },
            scrollboxSize: function () {
              return t(), o;
            },
            reliableTrDimensions: function () {
              var t, e, r, i;
              return (
                null == u &&
                  ((t = b.createElement("table")),
                  (e = b.createElement("tr")),
                  (r = b.createElement("div")),
                  (t.style.cssText = "position:absolute;left:-11111px"),
                  (e.style.height = "1px"),
                  (r.style.height = "9px"),
                  ot.appendChild(t).appendChild(e).appendChild(r),
                  (i = n.getComputedStyle(e)),
                  (u = parseInt(i.height) > 3),
                  ot.removeChild(t)),
                u
              );
            },
          }));
      })();
      var $t = ["Webkit", "Moz", "ms"],
        Yt = b.createElement("div").style,
        Qt = {};
      function Xt(t) {
        var e = O.cssProps[t] || Qt[t];
        return (
          e ||
          (t in Yt
            ? t
            : (Qt[t] =
                (function (t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), n = $t.length;
                    n--;

                  )
                    if ((t = $t[n] + e) in Yt) return t;
                })(t) || t))
        );
      }
      var Jt = /^(none|table(?!-c[ea]).+)/,
        Kt = /^--/,
        Zt = { position: "absolute", visibility: "hidden", display: "block" },
        te = { letterSpacing: "0", fontWeight: "400" };
      function ee(t, e, n) {
        var r = rt.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
      }
      function ne(t, e, n, r, i, o) {
        var a = "width" === e ? 1 : 0,
          u = 0,
          c = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (c += O.css(t, n + it[a], !0, i)),
            r
              ? ("content" === n && (c -= O.css(t, "padding" + it[a], !0, i)),
                "margin" !== n &&
                  (c -= O.css(t, "border" + it[a] + "Width", !0, i)))
              : ((c += O.css(t, "padding" + it[a], !0, i)),
                "padding" !== n
                  ? (c += O.css(t, "border" + it[a] + "Width", !0, i))
                  : (u += O.css(t, "border" + it[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (c +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    o -
                    c -
                    u -
                    0.5
                )
              ) || 0),
          c
        );
      }
      function re(t, e, n) {
        var r = Vt(t),
          i =
            (!g.boxSizingReliable() || n) &&
            "border-box" === O.css(t, "boxSizing", !1, r),
          o = i,
          a = Ut(t, e, r),
          u = "offset" + e[0].toUpperCase() + e.slice(1);
        if (qt.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!g.boxSizingReliable() && i) ||
            (!g.reliableTrDimensions() && T(t, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === O.css(t, "display", !1, r))) &&
            t.getClientRects().length &&
            ((i = "border-box" === O.css(t, "boxSizing", !1, r)),
            (o = u in t) && (a = t[u])),
          (a = parseFloat(a) || 0) +
            ne(t, e, n || (i ? "border" : "content"), o, r, a) +
            "px"
        );
      }
      function ie(t, e, n, r, i) {
        return new ie.prototype.init(t, e, n, r, i);
      }
      O.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var n = Ut(t, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, n, r) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var i,
              o,
              a,
              u = Y(e),
              c = Kt.test(e),
              s = t.style;
            if (
              (c || (e = Xt(u)),
              (a = O.cssHooks[e] || O.cssHooks[u]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(t, !1, r))
                ? i
                : s[e];
            "string" === (o = typeof n) &&
              (i = rt.exec(n)) &&
              i[1] &&
              ((n = st(t, e, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  c ||
                  (n += (i && i[3]) || (O.cssNumber[u] ? "" : "px")),
                g.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (s[e] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(t, n, r))) ||
                  (c ? s.setProperty(e, n) : (s[e] = n)));
          }
        },
        css: function (t, e, n, r) {
          var i,
            o,
            a,
            u = Y(e);
          return (
            Kt.test(e) || (e = Xt(u)),
            (a = O.cssHooks[e] || O.cssHooks[u]) &&
              "get" in a &&
              (i = a.get(t, !0, n)),
            void 0 === i && (i = Ut(t, e, r)),
            "normal" === i && e in te && (i = te[e]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        O.each(["height", "width"], function (t, e) {
          O.cssHooks[e] = {
            get: function (t, n, r) {
              if (n)
                return !Jt.test(O.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? re(t, e, r)
                  : Ht(t, Zt, function () {
                      return re(t, e, r);
                    });
            },
            set: function (t, n, r) {
              var i,
                o = Vt(t),
                a = !g.scrollboxSize() && "absolute" === o.position,
                u = (a || r) && "border-box" === O.css(t, "boxSizing", !1, o),
                c = r ? ne(t, e, r, u, o) : 0;
              return (
                u &&
                  a &&
                  (c -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(o[e]) -
                      ne(t, e, "border", !1, o) -
                      0.5
                  )),
                c &&
                  (i = rt.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((t.style[e] = n), (n = O.css(t, e))),
                ee(0, n, c)
              );
            },
          };
        }),
        (O.cssHooks.marginLeft = Gt(g.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Ut(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  Ht(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        O.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (O.cssHooks[t + e] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[t + it[r] + e] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== t && (O.cssHooks[t + e].set = ee);
        }),
        O.fn.extend({
          css: function (t, e) {
            return W(
              this,
              function (t, e, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(e)) {
                  for (r = Vt(t), i = e.length; a < i; a++)
                    o[e[a]] = O.css(t, e[a], !1, r);
                  return o;
                }
                return void 0 !== n ? O.style(t, e, n) : O.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (O.Tween = ie),
        (ie.prototype = {
          constructor: ie,
          init: function (t, e, n, r, i, o) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = i || O.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (O.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var t = ie.propHooks[this.prop];
            return t && t.get ? t.get(this) : ie.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              n = ie.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e =
                    O.easing[this.easing](
                      t,
                      this.options.duration * t,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ie.propHooks._default.set(this),
              this
            );
          },
        }),
        (ie.prototype.init.prototype = ie.prototype),
        (ie.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = O.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (t) {
              O.fx.step[t.prop]
                ? O.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!O.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : O.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (ie.propHooks.scrollTop = ie.propHooks.scrollLeft =
          {
            set: function (t) {
              t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
          }),
        (O.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (O.fx = ie.prototype.init),
        (O.fx.step = {});
      var oe,
        ae,
        ue = /^(?:toggle|show|hide)$/,
        ce = /queueHooks$/;
      function se() {
        ae &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(se)
            : n.setTimeout(se, O.fx.interval),
          O.fx.tick());
      }
      function fe() {
        return (
          n.setTimeout(function () {
            oe = void 0;
          }),
          (oe = Date.now())
        );
      }
      function le(t, e) {
        var n,
          r = 0,
          i = { height: t };
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
          i["margin" + (n = it[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i;
      }
      function de(t, e, n) {
        for (
          var r,
            i = (pe.tweeners[e] || []).concat(pe.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, e, t))) return r;
      }
      function pe(t, e, n) {
        var r,
          i,
          o = 0,
          a = pe.prefilters.length,
          u = O.Deferred().always(function () {
            delete c.elem;
          }),
          c = function () {
            if (i) return !1;
            for (
              var e = oe || fe(),
                n = Math.max(0, s.startTime + s.duration - e),
                r = 1 - (n / s.duration || 0),
                o = 0,
                a = s.tweens.length;
              o < a;
              o++
            )
              s.tweens[o].run(r);
            return (
              u.notifyWith(t, [s, r, n]),
              r < 1 && a
                ? n
                : (a || u.notifyWith(t, [s, 1, 0]), u.resolveWith(t, [s]), !1)
            );
          },
          s = u.promise({
            elem: t,
            props: O.extend({}, e),
            opts: O.extend(
              !0,
              { specialEasing: {}, easing: O.easing._default },
              n
            ),
            originalProperties: e,
            originalOptions: n,
            startTime: oe || fe(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
              var r = O.Tween(
                t,
                s.opts,
                e,
                n,
                s.opts.specialEasing[e] || s.opts.easing
              );
              return s.tweens.push(r), r;
            },
            stop: function (e) {
              var n = 0,
                r = e ? s.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) s.tweens[n].run(1);
              return (
                e
                  ? (u.notifyWith(t, [s, 1, 0]), u.resolveWith(t, [s, e]))
                  : u.rejectWith(t, [s, e]),
                this
              );
            },
          }),
          f = s.props;
        for (
          !(function (t, e) {
            var n, r, i, o, a;
            for (n in t)
              if (
                ((i = e[(r = Y(n))]),
                (o = t[n]),
                Array.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
                n !== r && ((t[r] = o), delete t[n]),
                (a = O.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((o = a.expand(o)), delete t[r], o))
                  (n in t) || ((t[n] = o[n]), (e[n] = i));
              else e[r] = i;
          })(f, s.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = pe.prefilters[o].call(s, t, f, s.opts)))
            return (
              m(r.stop) &&
                (O._queueHooks(s.elem, s.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          O.map(f, de, s),
          m(s.opts.start) && s.opts.start.call(t, s),
          s
            .progress(s.opts.progress)
            .done(s.opts.done, s.opts.complete)
            .fail(s.opts.fail)
            .always(s.opts.always),
          O.fx.timer(O.extend(c, { elem: t, anim: s, queue: s.opts.queue })),
          s
        );
      }
      (O.Animation = O.extend(pe, {
        tweeners: {
          "*": [
            function (t, e) {
              var n = this.createTween(t, e);
              return st(n.elem, t, rt.exec(e), n), n;
            },
          ],
        },
        tweener: function (t, e) {
          m(t) ? ((e = t), (t = ["*"])) : (t = t.match(N));
          for (var n, r = 0, i = t.length; r < i; r++)
            (n = t[r]),
              (pe.tweeners[n] = pe.tweeners[n] || []),
              pe.tweeners[n].unshift(e);
        },
        prefilters: [
          function (t, e, n) {
            var r,
              i,
              o,
              a,
              u,
              c,
              s,
              f,
              l = "width" in e || "height" in e,
              d = this,
              p = {},
              h = t.style,
              v = t.nodeType && ct(t),
              g = J.get(t, "fxshow");
            for (r in (n.queue ||
              (null == (a = O._queueHooks(t, "fx")).unqueued &&
                ((a.unqueued = 0),
                (u = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || u();
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, O.queue(t, "fx").length || a.empty.fire();
                });
              })),
            e))
              if (((i = e[r]), ue.test(i))) {
                if (
                  (delete e[r],
                  (o = o || "toggle" === i),
                  i === (v ? "hide" : "show"))
                ) {
                  if ("show" !== i || !g || void 0 === g[r]) continue;
                  v = !0;
                }
                p[r] = (g && g[r]) || O.style(t, r);
              }
            if ((c = !O.isEmptyObject(e)) || !O.isEmptyObject(p))
              for (r in (l &&
                1 === t.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (s = g && g.display) && (s = J.get(t, "display")),
                "none" === (f = O.css(t, "display")) &&
                  (s
                    ? (f = s)
                    : (dt([t], !0),
                      (s = t.style.display || s),
                      (f = O.css(t, "display")),
                      dt([t]))),
                ("inline" === f || ("inline-block" === f && null != s)) &&
                  "none" === O.css(t, "float") &&
                  (c ||
                    (d.done(function () {
                      h.display = s;
                    }),
                    null == s &&
                      ((f = h.display), (s = "none" === f ? "" : f))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                d.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (c = !1),
              p))
                c ||
                  (g
                    ? "hidden" in g && (v = g.hidden)
                    : (g = J.access(t, "fxshow", { display: s })),
                  o && (g.hidden = !v),
                  v && dt([t], !0),
                  d.done(function () {
                    for (r in (v || dt([t]), J.remove(t, "fxshow"), p))
                      O.style(t, r, p[r]);
                  })),
                  (c = de(v ? g[r] : 0, r, d)),
                  r in g ||
                    ((g[r] = c.start), v && ((c.end = c.start), (c.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? pe.prefilters.unshift(t) : pe.prefilters.push(t);
        },
      })),
        (O.speed = function (t, e, n) {
          var r =
            t && "object" == typeof t
              ? O.extend({}, t)
              : {
                  complete: n || (!n && e) || (m(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !m(e) && e),
                };
          return (
            O.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in O.fx.speeds
                  ? (r.duration = O.fx.speeds[r.duration])
                  : (r.duration = O.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              m(r.old) && r.old.call(this), r.queue && O.dequeue(this, r.queue);
            }),
            r
          );
        }),
        O.fn.extend({
          fadeTo: function (t, e, n, r) {
            return this.filter(ct)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, r);
          },
          animate: function (t, e, n, r) {
            var i = O.isEmptyObject(t),
              o = O.speed(e, n, r),
              a = function () {
                var e = pe(this, O.extend({}, t), o);
                (i || J.get(this, "finish")) && e.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (t, e, n) {
            var r = function (t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              "string" != typeof t && ((n = e), (e = t), (t = void 0)),
              e && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  i = null != t && t + "queueHooks",
                  o = O.timers,
                  a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && ce.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != t && o[i].queue !== t) ||
                    (o[i].anim.stop(n), (e = !1), o.splice(i, 1));
                (!e && n) || O.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  n = J.get(this),
                  r = n[t + "queue"],
                  i = n[t + "queueHooks"],
                  o = O.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    O.queue(this, t, []),
                    i && i.stop && i.stop.call(this, !0),
                    e = o.length;
                  e--;

                )
                  o[e].elem === this &&
                    o[e].queue === t &&
                    (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < a; e++)
                  r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        O.each(["toggle", "show", "hide"], function (t, e) {
          var n = O.fn[e];
          O.fn[e] = function (t, r, i) {
            return null == t || "boolean" == typeof t
              ? n.apply(this, arguments)
              : this.animate(le(e, !0), t, r, i);
          };
        }),
        O.each(
          {
            slideDown: le("show"),
            slideUp: le("hide"),
            slideToggle: le("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            O.fn[t] = function (t, n, r) {
              return this.animate(e, t, n, r);
            };
          }
        ),
        (O.timers = []),
        (O.fx.tick = function () {
          var t,
            e = 0,
            n = O.timers;
          for (oe = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || O.fx.stop(), (oe = void 0);
        }),
        (O.fx.timer = function (t) {
          O.timers.push(t), O.fx.start();
        }),
        (O.fx.interval = 13),
        (O.fx.start = function () {
          ae || ((ae = !0), se());
        }),
        (O.fx.stop = function () {
          ae = null;
        }),
        (O.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (O.fn.delay = function (t, e) {
          return (
            (t = (O.fx && O.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function (e, r) {
              var i = n.setTimeout(e, t);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var t = b.createElement("input"),
            e = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (t.type = "checkbox"),
            (g.checkOn = "" !== t.value),
            (g.optSelected = e.selected),
            ((t = b.createElement("input")).value = "t"),
            (t.type = "radio"),
            (g.radioValue = "t" === t.value);
        })();
      var he,
        ve = O.expr.attrHandle;
      O.fn.extend({
        attr: function (t, e) {
          return W(this, O.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            O.removeAttr(this, t);
          });
        },
      }),
        O.extend({
          attr: function (t, e, n) {
            var r,
              i,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? O.prop(t, e, n)
                : ((1 === o && O.isXMLDoc(t)) ||
                    (i =
                      O.attrHooks[e.toLowerCase()] ||
                      (O.expr.match.bool.test(e) ? he : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void O.removeAttr(t, e)
                      : i && "set" in i && void 0 !== (r = i.set(t, n, e))
                      ? r
                      : (t.setAttribute(e, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(t, e))
                    ? r
                    : null == (r = O.find.attr(t, e))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!g.radioValue && "radio" === e && T(t, "input")) {
                  var n = t.value;
                  return t.setAttribute("type", e), n && (t.value = n), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var n,
              r = 0,
              i = e && e.match(N);
            if (i && 1 === t.nodeType)
              for (; (n = i[r++]); ) t.removeAttribute(n);
          },
        }),
        (he = {
          set: function (t, e, n) {
            return !1 === e ? O.removeAttr(t, n) : t.setAttribute(n, n), n;
          },
        }),
        O.each(O.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var n = ve[e] || O.find.attr;
          ve[e] = function (t, e, r) {
            var i,
              o,
              a = e.toLowerCase();
            return (
              r ||
                ((o = ve[a]),
                (ve[a] = i),
                (i = null != n(t, e, r) ? a : null),
                (ve[a] = o)),
              i
            );
          };
        });
      var ge = /^(?:input|select|textarea|button)$/i,
        me = /^(?:a|area)$/i;
      function ye(t) {
        return (t.match(N) || []).join(" ");
      }
      function be(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function xe(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(N)) || [];
      }
      O.fn.extend({
        prop: function (t, e) {
          return W(this, O.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[O.propFix[t] || t];
          });
        },
      }),
        O.extend({
          prop: function (t, e, n) {
            var r,
              i,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && O.isXMLDoc(t)) ||
                  ((e = O.propFix[e] || e), (i = O.propHooks[e])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(t, n, e))
                    ? r
                    : (t[e] = n)
                  : i && "get" in i && null !== (r = i.get(t, e))
                  ? r
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = O.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : ge.test(t.nodeName) || (me.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        g.optSelected ||
          (O.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        O.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            O.propFix[this.toLowerCase()] = this;
          }
        ),
        O.fn.extend({
          addClass: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              u,
              c = 0;
            if (m(t))
              return this.each(function (e) {
                O(this).addClass(t.call(this, e, be(this)));
              });
            if ((e = xe(t)).length)
              for (; (n = this[c++]); )
                if (
                  ((i = be(n)), (r = 1 === n.nodeType && " " + ye(i) + " "))
                ) {
                  for (a = 0; (o = e[a++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (u = ye(r)) && n.setAttribute("class", u);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              u,
              c = 0;
            if (m(t))
              return this.each(function (e) {
                O(this).removeClass(t.call(this, e, be(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = xe(t)).length)
              for (; (n = this[c++]); )
                if (
                  ((i = be(n)), (r = 1 === n.nodeType && " " + ye(i) + " "))
                ) {
                  for (a = 0; (o = e[a++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (u = ye(r)) && n.setAttribute("class", u);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var n = typeof t,
              r = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && r
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : m(t)
              ? this.each(function (n) {
                  O(this).toggleClass(t.call(this, n, be(this), e), e);
                })
              : this.each(function () {
                  var e, i, o, a;
                  if (r)
                    for (i = 0, o = O(this), a = xe(t); (e = a[i++]); )
                      o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== n) ||
                      ((e = be(this)) && J.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : J.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              n,
              r = 0;
            for (e = " " + t + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + ye(be(n)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var we = /\r/g;
      O.fn.extend({
        val: function (t) {
          var e,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = m(t)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? t.call(this, n, O(this).val()) : t)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = O.map(i, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    O.valHooks[this.type] ||
                    O.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (e =
                O.valHooks[i.type] || O.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (n = e.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(we, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        O.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = O.find.attr(t, "value");
                return null != e ? e : ye(O.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  n,
                  r,
                  i = t.options,
                  o = t.selectedIndex,
                  a = "select-one" === t.type,
                  u = a ? null : [],
                  c = a ? o + 1 : i.length;
                for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))
                  ) {
                    if (((e = O(n).val()), a)) return e;
                    u.push(e);
                  }
                return u;
              },
              set: function (t, e) {
                for (
                  var n, r, i = t.options, o = O.makeArray(e), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                    O.inArray(O.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        O.each(["radio", "checkbox"], function () {
          (O.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = O.inArray(O(t).val(), e) > -1);
            },
          }),
            g.checkOn ||
              (O.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (g.focusin = "onfocusin" in n);
      var _e = /^(?:focusinfocus|focusoutblur)$/,
        Oe = function (t) {
          t.stopPropagation();
        };
      O.extend(O.event, {
        trigger: function (t, e, r, i) {
          var o,
            a,
            u,
            c,
            s,
            f,
            l,
            d,
            h = [r || b],
            v = p.call(t, "type") ? t.type : t,
            g = p.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((a = d = u = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !_e.test(v + O.event.triggered) &&
              (v.indexOf(".") > -1 &&
                ((g = v.split(".")), (v = g.shift()), g.sort()),
              (s = v.indexOf(":") < 0 && "on" + v),
              ((t = t[O.expando]
                ? t
                : new O.Event(v, "object" == typeof t && t)).isTrigger = i
                ? 2
                : 3),
              (t.namespace = g.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = r),
              (e = null == e ? [t] : O.makeArray(e, [t])),
              (l = O.event.special[v] || {}),
              i || !l.trigger || !1 !== l.trigger.apply(r, e)))
          ) {
            if (!i && !l.noBubble && !y(r)) {
              for (
                c = l.delegateType || v, _e.test(c + v) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (u = a);
              u === (r.ownerDocument || b) &&
                h.push(u.defaultView || u.parentWindow || n);
            }
            for (o = 0; (a = h[o++]) && !t.isPropagationStopped(); )
              (d = a),
                (t.type = o > 1 ? c : l.bindType || v),
                (f =
                  (J.get(a, "events") || Object.create(null))[t.type] &&
                  J.get(a, "handle")) && f.apply(a, e),
                (f = s && a[s]) &&
                  f.apply &&
                  Q(a) &&
                  ((t.result = f.apply(a, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = v),
              i ||
                t.isDefaultPrevented() ||
                (l._default && !1 !== l._default.apply(h.pop(), e)) ||
                !Q(r) ||
                (s &&
                  m(r[v]) &&
                  !y(r) &&
                  ((u = r[s]) && (r[s] = null),
                  (O.event.triggered = v),
                  t.isPropagationStopped() && d.addEventListener(v, Oe),
                  r[v](),
                  t.isPropagationStopped() && d.removeEventListener(v, Oe),
                  (O.event.triggered = void 0),
                  u && (r[s] = u))),
              t.result
            );
          }
        },
        simulate: function (t, e, n) {
          var r = O.extend(new O.Event(), n, { type: t, isSimulated: !0 });
          O.event.trigger(r, null, e);
        },
      }),
        O.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              O.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return O.event.trigger(t, e, n, !0);
          },
        }),
        g.focusin ||
          O.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var n = function (t) {
              O.event.simulate(e, t.target, O.event.fix(t));
            };
            O.event.special[e] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = J.access(r, e);
                i || r.addEventListener(t, n, !0), J.access(r, e, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = J.access(r, e) - 1;
                i
                  ? J.access(r, e, i)
                  : (r.removeEventListener(t, n, !0), J.remove(r, e));
              },
            };
          });
      var Ae = n.location,
        Ee = { guid: Date.now() },
        je = /\?/;
      O.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            O.error("Invalid XML: " + t),
          e
        );
      };
      var Se = /\[\]$/,
        ke = /\r?\n/g,
        Te = /^(?:submit|button|image|reset|file)$/i,
        Ce = /^(?:input|select|textarea|keygen)/i;
      function Le(t, e, n, r) {
        var i;
        if (Array.isArray(e))
          O.each(e, function (e, i) {
            n || Se.test(t)
              ? r(t, i)
              : Le(
                  t + "[" + ("object" == typeof i && null != i ? e : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== _(e)) r(t, e);
        else for (i in e) Le(t + "[" + i + "]", e[i], n, r);
      }
      (O.param = function (t, e) {
        var n,
          r = [],
          i = function (t, e) {
            var n = m(e) ? e() : e;
            r[r.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !O.isPlainObject(t)))
          O.each(t, function () {
            i(this.name, this.value);
          });
        else for (n in t) Le(n, t[n], e, i);
        return r.join("&");
      }),
        O.fn.extend({
          serialize: function () {
            return O.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = O.prop(this, "elements");
              return t ? O.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !O(this).is(":disabled") &&
                  Ce.test(this.nodeName) &&
                  !Te.test(t) &&
                  (this.checked || !vt.test(t))
                );
              })
              .map(function (t, e) {
                var n = O(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? O.map(n, function (t) {
                      return { name: e.name, value: t.replace(ke, "\r\n") };
                    })
                  : { name: e.name, value: n.replace(ke, "\r\n") };
              })
              .get();
          },
        });
      var Ie = /%20/g,
        De = /#.*$/,
        Pe = /([?&])_=[^&]*/,
        Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Me = /^(?:GET|HEAD)$/,
        Ne = /^\/\//,
        Fe = {},
        ze = {},
        Be = "*/".concat("*"),
        qe = b.createElement("a");
      function Ve(t) {
        return function (e, n) {
          "string" != typeof e && ((n = e), (e = "*"));
          var r,
            i = 0,
            o = e.toLowerCase().match(N) || [];
          if (m(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(n))
                : (t[r] = t[r] || []).push(n);
        };
      }
      function He(t, e, n, r) {
        var i = {},
          o = t === ze;
        function a(u) {
          var c;
          return (
            (i[u] = !0),
            O.each(t[u] || [], function (t, u) {
              var s = u(e, n, r);
              return "string" != typeof s || o || i[s]
                ? o
                  ? !(c = s)
                  : void 0
                : (e.dataTypes.unshift(s), a(s), !1);
            }),
            c
          );
        }
        return a(e.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function We(t, e) {
        var n,
          r,
          i = O.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && O.extend(!0, t, r), t;
      }
      (qe.href = Ae.href),
        O.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ae.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Ae.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Be,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": O.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? We(We(t, O.ajaxSettings), e) : We(O.ajaxSettings, t);
          },
          ajaxPrefilter: Ve(Fe),
          ajaxTransport: Ve(ze),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var r,
              i,
              o,
              a,
              u,
              c,
              s,
              f,
              l,
              d,
              p = O.ajaxSetup({}, e),
              h = p.context || p,
              v = p.context && (h.nodeType || h.jquery) ? O(h) : O.event,
              g = O.Deferred(),
              m = O.Callbacks("once memory"),
              y = p.statusCode || {},
              x = {},
              w = {},
              _ = "canceled",
              A = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (s) {
                    if (!a)
                      for (a = {}; (e = Re.exec(o)); )
                        a[e[1].toLowerCase() + " "] = (
                          a[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = a[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function () {
                  return s ? o : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == s &&
                      ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                      (x[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == s && (p.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (s) A.always(t[A.status]);
                    else for (e in t) y[e] = [y[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || _;
                  return r && r.abort(e), E(0, e), this;
                },
              };
            if (
              (g.promise(A),
              (p.url = ((t || p.url || Ae.href) + "").replace(
                Ne,
                Ae.protocol + "//"
              )),
              (p.type = e.method || e.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(N) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              c = b.createElement("a");
              try {
                (c.href = p.url),
                  (c.href = c.href),
                  (p.crossDomain =
                    qe.protocol + "//" + qe.host != c.protocol + "//" + c.host);
              } catch (t) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = O.param(p.data, p.traditional)),
              He(Fe, p, e, A),
              s)
            )
              return A;
            for (l in ((f = O.event && p.global) &&
              0 == O.active++ &&
              O.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Me.test(p.type)),
            (i = p.url.replace(De, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Ie, "+"))
              : ((d = p.url.slice(i.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((i += (je.test(i) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((i = i.replace(Pe, "$1")),
                  (d = (je.test(i) ? "&" : "?") + "_=" + Ee.guid++ + d)),
                (p.url = i + d)),
            p.ifModified &&
              (O.lastModified[i] &&
                A.setRequestHeader("If-Modified-Since", O.lastModified[i]),
              O.etag[i] && A.setRequestHeader("If-None-Match", O.etag[i])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              e.contentType) &&
              A.setRequestHeader("Content-Type", p.contentType),
            A.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Be + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              A.setRequestHeader(l, p.headers[l]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, A, p) || s))
              return A.abort();
            if (
              ((_ = "abort"),
              m.add(p.complete),
              A.done(p.success),
              A.fail(p.error),
              (r = He(ze, p, e, A)))
            ) {
              if (((A.readyState = 1), f && v.trigger("ajaxSend", [A, p]), s))
                return A;
              p.async &&
                p.timeout > 0 &&
                (u = n.setTimeout(function () {
                  A.abort("timeout");
                }, p.timeout));
              try {
                (s = !1), r.send(x, E);
              } catch (t) {
                if (s) throw t;
                E(-1, t);
              }
            } else E(-1, "No Transport");
            function E(t, e, a, c) {
              var l,
                d,
                b,
                x,
                w,
                _ = e;
              s ||
                ((s = !0),
                u && n.clearTimeout(u),
                (r = void 0),
                (o = c || ""),
                (A.readyState = t > 0 ? 4 : 0),
                (l = (t >= 200 && t < 300) || 304 === t),
                a &&
                  (x = (function (t, e, n) {
                    for (
                      var r, i, o, a, u = t.contents, c = t.dataTypes;
                      "*" === c[0];

                    )
                      c.shift(),
                        void 0 === r &&
                          (r =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in u)
                        if (u[i] && u[i].test(r)) {
                          c.unshift(i);
                          break;
                        }
                    if (c[0] in n) o = c[0];
                    else {
                      for (i in n) {
                        if (!c[0] || t.converters[i + " " + c[0]]) {
                          o = i;
                          break;
                        }
                        a || (a = i);
                      }
                      o = o || a;
                    }
                    if (o) return o !== c[0] && c.unshift(o), n[o];
                  })(p, A, a)),
                !l &&
                  O.inArray("script", p.dataTypes) > -1 &&
                  (p.converters["text script"] = function () {}),
                (x = (function (t, e, n, r) {
                  var i,
                    o,
                    a,
                    u,
                    c,
                    s = {},
                    f = t.dataTypes.slice();
                  if (f[1])
                    for (a in t.converters)
                      s[a.toLowerCase()] = t.converters[a];
                  for (o = f.shift(); o; )
                    if (
                      (t.responseFields[o] && (n[t.responseFields[o]] = e),
                      !c &&
                        r &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (c = o),
                      (o = f.shift()))
                    )
                      if ("*" === o) o = c;
                      else if ("*" !== c && c !== o) {
                        if (!(a = s[c + " " + o] || s["* " + o]))
                          for (i in s)
                            if (
                              (u = i.split(" "))[1] === o &&
                              (a = s[c + " " + u[0]] || s["* " + u[0]])
                            ) {
                              !0 === a
                                ? (a = s[i])
                                : !0 !== s[i] && ((o = u[0]), f.unshift(u[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && t.throws) e = a(e);
                          else
                            try {
                              e = a(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? t
                                  : "No conversion from " + c + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(p, x, A, l)),
                l
                  ? (p.ifModified &&
                      ((w = A.getResponseHeader("Last-Modified")) &&
                        (O.lastModified[i] = w),
                      (w = A.getResponseHeader("etag")) && (O.etag[i] = w)),
                    204 === t || "HEAD" === p.type
                      ? (_ = "nocontent")
                      : 304 === t
                      ? (_ = "notmodified")
                      : ((_ = x.state), (d = x.data), (l = !(b = x.error))))
                  : ((b = _), (!t && _) || ((_ = "error"), t < 0 && (t = 0))),
                (A.status = t),
                (A.statusText = (e || _) + ""),
                l ? g.resolveWith(h, [d, _, A]) : g.rejectWith(h, [A, _, b]),
                A.statusCode(y),
                (y = void 0),
                f &&
                  v.trigger(l ? "ajaxSuccess" : "ajaxError", [A, p, l ? d : b]),
                m.fireWith(h, [A, _]),
                f &&
                  (v.trigger("ajaxComplete", [A, p]),
                  --O.active || O.event.trigger("ajaxStop")));
            }
            return A;
          },
          getJSON: function (t, e, n) {
            return O.get(t, e, n, "json");
          },
          getScript: function (t, e) {
            return O.get(t, void 0, e, "script");
          },
        }),
        O.each(["get", "post"], function (t, e) {
          O[e] = function (t, n, r, i) {
            return (
              m(n) && ((i = i || r), (r = n), (n = void 0)),
              O.ajax(
                O.extend(
                  { url: t, type: e, dataType: i, data: n, success: r },
                  O.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        O.ajaxPrefilter(function (t) {
          var e;
          for (e in t.headers)
            "content-type" === e.toLowerCase() &&
              (t.contentType = t.headers[e] || "");
        }),
        (O._evalUrl = function (t, e, n) {
          return O.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (t) {
              O.globalEval(t, e, n);
            },
          });
        }),
        O.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (m(t) && (t = t.call(this[0])),
                (e = O(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return m(t)
              ? this.each(function (e) {
                  O(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = O(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = m(t);
            return this.each(function (n) {
              O(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  O(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (O.expr.pseudos.hidden = function (t) {
          return !O.expr.pseudos.visible(t);
        }),
        (O.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (O.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var Ue = { 0: 200, 1223: 204 },
        Ge = O.ajaxSettings.xhr();
      (g.cors = !!Ge && "withCredentials" in Ge),
        (g.ajax = Ge = !!Ge),
        O.ajaxTransport(function (t) {
          var e, r;
          if (g.cors || (Ge && !t.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  u = t.xhr();
                if (
                  (u.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) u[a] = t.xhrFields[a];
                for (a in (t.mimeType &&
                  u.overrideMimeType &&
                  u.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  u.setRequestHeader(a, i[a]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e =
                        r =
                        u.onload =
                        u.onerror =
                        u.onabort =
                        u.ontimeout =
                        u.onreadystatechange =
                          null),
                      "abort" === t
                        ? u.abort()
                        : "error" === t
                        ? "number" != typeof u.status
                          ? o(0, "error")
                          : o(u.status, u.statusText)
                        : o(
                            Ue[u.status] || u.status,
                            u.statusText,
                            "text" !== (u.responseType || "text") ||
                              "string" != typeof u.responseText
                              ? { binary: u.response }
                              : { text: u.responseText },
                            u.getAllResponseHeaders()
                          ));
                  };
                }),
                  (u.onload = e()),
                  (r = u.onerror = u.ontimeout = e("error")),
                  void 0 !== u.onabort
                    ? (u.onabort = r)
                    : (u.onreadystatechange = function () {
                        4 === u.readyState &&
                          n.setTimeout(function () {
                            e && r();
                          });
                      }),
                  (e = e("abort"));
                try {
                  u.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        O.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        O.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return O.globalEval(t), t;
            },
          },
        }),
        O.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        O.ajaxTransport("script", function (t) {
          var e, n;
          if (t.crossDomain || t.scriptAttrs)
            return {
              send: function (r, i) {
                (e = O("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (n = function (t) {
                      e.remove(),
                        (n = null),
                        t && i("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  b.head.appendChild(e[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var $e,
        Ye = [],
        Qe = /(=)\?(?=&|$)|\?\?/;
      O.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Ye.pop() || O.expando + "_" + Ee.guid++;
          return (this[t] = !0), t;
        },
      }),
        O.ajaxPrefilter("json jsonp", function (t, e, r) {
          var i,
            o,
            a,
            u =
              !1 !== t.jsonp &&
              (Qe.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Qe.test(t.data) &&
                  "data");
          if (u || "jsonp" === t.dataTypes[0])
            return (
              (i = t.jsonpCallback =
                m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              u
                ? (t[u] = t[u].replace(Qe, "$1" + i))
                : !1 !== t.jsonp &&
                  (t.url += (je.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
              (t.converters["script json"] = function () {
                return a || O.error(i + " was not called"), a[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? O(n).removeProp(i) : (n[i] = o),
                  t[i] && ((t.jsonpCallback = e.jsonpCallback), Ye.push(i)),
                  a && m(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (g.createHTMLDocument =
          ((($e = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === $e.childNodes.length)),
        (O.parseHTML = function (t, e, n) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((n = e), (e = !1)),
              e ||
                (g.createHTMLDocument
                  ? (((r = (e =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    e.head.appendChild(r))
                  : (e = b)),
              (o = !n && []),
              (i = C.exec(t))
                ? [e.createElement(i[1])]
                : ((i = _t([t], e, o)),
                  o && o.length && O(o).remove(),
                  O.merge([], i.childNodes)));
        }),
        (O.fn.load = function (t, e, n) {
          var r,
            i,
            o,
            a = this,
            u = t.indexOf(" ");
          return (
            u > -1 && ((r = ye(t.slice(u))), (t = t.slice(0, u))),
            m(e)
              ? ((n = e), (e = void 0))
              : e && "object" == typeof e && (i = "POST"),
            a.length > 0 &&
              O.ajax({ url: t, type: i || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (o = arguments),
                    a.html(r ? O("<div>").append(O.parseHTML(t)).find(r) : t);
                })
                .always(
                  n &&
                    function (t, e) {
                      a.each(function () {
                        n.apply(this, o || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        (O.expr.pseudos.animated = function (t) {
          return O.grep(O.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (O.offset = {
          setOffset: function (t, e, n) {
            var r,
              i,
              o,
              a,
              u,
              c,
              s = O.css(t, "position"),
              f = O(t),
              l = {};
            "static" === s && (t.style.position = "relative"),
              (u = f.offset()),
              (o = O.css(t, "top")),
              (c = O.css(t, "left")),
              ("absolute" === s || "fixed" === s) &&
              (o + c).indexOf("auto") > -1
                ? ((a = (r = f.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
              m(e) && (e = e.call(t, n, O.extend({}, u))),
              null != e.top && (l.top = e.top - u.top + a),
              null != e.left && (l.left = e.left - u.left + i),
              "using" in e
                ? e.using.call(t, l)
                : ("number" == typeof l.top && (l.top += "px"),
                  "number" == typeof l.left && (l.left += "px"),
                  f.css(l));
          },
        }),
        O.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    O.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((e = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === O.css(r, "position"))
                e = r.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    n = r.ownerDocument,
                    t = r.offsetParent || n.documentElement;
                  t &&
                  (t === n.body || t === n.documentElement) &&
                  "static" === O.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== r &&
                  1 === t.nodeType &&
                  (((i = O(t).offset()).top += O.css(t, "borderTopWidth", !0)),
                  (i.left += O.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - i.top - O.css(r, "marginTop", !0),
                left: e.left - i.left - O.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === O.css(t, "position");

              )
                t = t.offsetParent;
              return t || ot;
            });
          },
        }),
        O.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var n = "pageYOffset" === e;
            O.fn[t] = function (r) {
              return W(
                this,
                function (t, r, i) {
                  var o;
                  if (
                    (y(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === i)
                  )
                    return o ? o[e] : t[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (t[r] = i);
                },
                t,
                r,
                arguments.length
              );
            };
          }
        ),
        O.each(["top", "left"], function (t, e) {
          O.cssHooks[e] = Gt(g.pixelPosition, function (t, n) {
            if (n)
              return (n = Ut(t, e)), qt.test(n) ? O(t).position()[e] + "px" : n;
          });
        }),
        O.each({ Height: "height", Width: "width" }, function (t, e) {
          O.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (n, r) {
              O.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  u = n || (!0 === i || !0 === o ? "margin" : "border");
                return W(
                  this,
                  function (e, n, i) {
                    var o;
                    return y(e)
                      ? 0 === r.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((o = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          o["scroll" + t],
                          e.body["offset" + t],
                          o["offset" + t],
                          o["client" + t]
                        ))
                      : void 0 === i
                      ? O.css(e, n, u)
                      : O.style(e, n, i, u);
                  },
                  e,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        O.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            O.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        O.fn.extend({
          bind: function (t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, n, r) {
            return this.on(e, t, n, r);
          },
          undelegate: function (t, e, n) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", n);
          },
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        O.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            O.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        );
      var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (O.proxy = function (t, e) {
        var n, r, i;
        if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), m(t)))
          return (
            (r = u.call(arguments, 2)),
            ((i = function () {
              return t.apply(e || this, r.concat(u.call(arguments)));
            }).guid = t.guid =
              t.guid || O.guid++),
            i
          );
      }),
        (O.holdReady = function (t) {
          t ? O.readyWait++ : O.ready(!0);
        }),
        (O.isArray = Array.isArray),
        (O.parseJSON = JSON.parse),
        (O.nodeName = T),
        (O.isFunction = m),
        (O.isWindow = y),
        (O.camelCase = Y),
        (O.type = _),
        (O.now = Date.now),
        (O.isNumeric = function (t) {
          var e = O.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (O.trim = function (t) {
          return null == t ? "" : (t + "").replace(Xe, "");
        }),
        void 0 ===
          (r = function () {
            return O;
          }.apply(e, [])) || (t.exports = r);
      var Je = n.jQuery,
        Ke = n.$;
      return (
        (O.noConflict = function (t) {
          return (
            n.$ === O && (n.$ = Ke), t && n.jQuery === O && (n.jQuery = Je), O
          );
        }),
        void 0 === i && (n.jQuery = n.$ = O),
        O
      );
    });
  },
  function (t, e, n) {
    var r = n(50),
      i = n(37);
    t.exports = function (t) {
      return r(i(t));
    };
  },
  function (t, e, n) {
    var r = n(14),
      i = n(17),
      o = n(49);
    t.exports = r
      ? function (t, e, n) {
          return i.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(32),
      o = n(19),
      a = n(86),
      u = n(87),
      c = n(42),
      s = c.get,
      f = c.enforce,
      l = String(String).split("String");
    (t.exports = function (t, e, n, u) {
      var c = !!u && !!u.unsafe,
        s = !!u && !!u.enumerable,
        d = !!u && !!u.noTargetGet;
      "function" == typeof n &&
        ("string" != typeof e || o(n, "name") || i(n, "name", e),
        (f(n).source = l.join("string" == typeof e ? e : ""))),
        t !== r
          ? (c ? !d && t[e] && (s = !0) : delete t[e],
            s ? (t[e] = n) : i(t, e, n))
          : s
          ? (t[e] = n)
          : a(e, n);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && s(this).source) || u(this);
    });
  },
  function (t, e, n) {
    var r = n(14),
      i = n(12),
      o = n(19),
      a = Object.defineProperty,
      u = {},
      c = function (t) {
        throw t;
      };
    t.exports = function (t, e) {
      if (o(u, t)) return u[t];
      e || (e = {});
      var n = [][t],
        s = !!o(e, "ACCESSORS") && e.ACCESSORS,
        f = o(e, 0) ? e[0] : c,
        l = o(e, 1) ? e[1] : void 0;
      return (u[t] =
        !!n &&
        !i(function () {
          if (s && !r) return !0;
          var t = { length: -1 };
          s ? a(t, 1, { enumerable: !0, get: c }) : (t[1] = 1), n.call(t, f, l);
        }));
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(76);
    r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(90).indexOf,
      o = n(72),
      a = n(34),
      u = [].indexOf,
      c = !!u && 1 / [1].indexOf(1, -0) < 0,
      s = o("indexOf"),
      f = a("indexOf", { ACCESSORS: !0, 1: 0 });
    r(
      { target: "Array", proto: !0, forced: c || !s || !f },
      {
        indexOf: function (t) {
          return c
            ? u.apply(this, arguments) || 0
            : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(45).map,
      o = n(57),
      a = n(34),
      u = o("map"),
      c = a("map");
    r(
      { target: "Array", proto: !0, forced: !u || !c },
      {
        map: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(12),
      o = n(55),
      a = n(16),
      u = n(25),
      c = n(24),
      s = n(56),
      f = n(93),
      l = n(57),
      d = n(7),
      p = n(95),
      h = d("isConcatSpreadable"),
      v =
        p >= 51 ||
        !i(function () {
          var t = [];
          return (t[h] = !1), t.concat()[0] !== t;
        }),
      g = l("concat"),
      m = function (t) {
        if (!a(t)) return !1;
        var e = t[h];
        return void 0 !== e ? !!e : o(t);
      };
    r(
      { target: "Array", proto: !0, forced: !v || !g },
      {
        concat: function (t) {
          var e,
            n,
            r,
            i,
            o,
            a = u(this),
            l = f(a, 0),
            d = 0;
          for (e = -1, r = arguments.length; e < r; e++)
            if (((o = -1 === e ? a : arguments[e]), m(o))) {
              if (d + (i = c(o.length)) > 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              for (n = 0; n < i; n++, d++) n in o && s(l, d, o[n]);
            } else {
              if (d >= 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              s(l, d++, o);
            }
          return (l.length = d), l;
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(14),
      i = n(84),
      o = n(49),
      a = n(31),
      u = n(51),
      c = n(19),
      s = n(113),
      f = Object.getOwnPropertyDescriptor;
    e.f = r
      ? f
      : function (t, e) {
          if (((t = a(t)), (e = u(e, !0)), s))
            try {
              return f(t, e);
            } catch (t) {}
          if (c(t, e)) return o(!i.f.call(t, e), t[e]);
        };
  },
  function (t, e, n) {
    var r,
      i,
      o,
      a = n(175),
      u = n(5),
      c = n(16),
      s = n(32),
      f = n(19),
      l = n(67),
      d = n(68),
      p = u.WeakMap;
    if (a) {
      var h = new p(),
        v = h.get,
        g = h.has,
        m = h.set;
      (r = function (t, e) {
        return m.call(h, t, e), e;
      }),
        (i = function (t) {
          return v.call(h, t) || {};
        }),
        (o = function (t) {
          return g.call(h, t);
        });
    } else {
      var y = l("state");
      (d[y] = !0),
        (r = function (t, e) {
          return s(t, y, e), e;
        }),
        (i = function (t) {
          return f(t, y) ? t[y] : {};
        }),
        (o = function (t) {
          return f(t, y);
        });
    }
    t.exports = {
      set: r,
      get: i,
      has: o,
      enforce: function (t) {
        return o(t) ? i(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!c(e) || (n = i(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(5),
      o = n(44),
      a = n(52),
      u = n(14),
      c = n(94),
      s = n(119),
      f = n(12),
      l = n(19),
      d = n(55),
      p = n(16),
      h = n(15),
      v = n(25),
      g = n(31),
      m = n(51),
      y = n(49),
      b = n(79),
      x = n(80),
      w = n(53),
      _ = n(203),
      O = n(92),
      A = n(41),
      E = n(17),
      j = n(84),
      S = n(32),
      k = n(33),
      T = n(88),
      C = n(67),
      L = n(68),
      I = n(89),
      D = n(7),
      P = n(143),
      R = n(144),
      M = n(73),
      N = n(42),
      F = n(45).forEach,
      z = C("hidden"),
      B = D("toPrimitive"),
      q = N.set,
      V = N.getterFor("Symbol"),
      H = Object.prototype,
      W = i.Symbol,
      U = o("JSON", "stringify"),
      G = A.f,
      $ = E.f,
      Y = _.f,
      Q = j.f,
      X = T("symbols"),
      J = T("op-symbols"),
      K = T("string-to-symbol-registry"),
      Z = T("symbol-to-string-registry"),
      tt = T("wks"),
      et = i.QObject,
      nt = !et || !et.prototype || !et.prototype.findChild,
      rt =
        u &&
        f(function () {
          return (
            7 !=
            b(
              $({}, "a", {
                get: function () {
                  return $(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, n) {
              var r = G(H, e);
              r && delete H[e], $(t, e, n), r && t !== H && $(H, e, r);
            }
          : $,
      it = function (t, e) {
        var n = (X[t] = b(W.prototype));
        return (
          q(n, { type: "Symbol", tag: t, description: e }),
          u || (n.description = e),
          n
        );
      },
      ot = s
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            return Object(t) instanceof W;
          },
      at = function (t, e, n) {
        t === H && at(J, e, n), h(t);
        var r = m(e, !0);
        return (
          h(n),
          l(X, r)
            ? (n.enumerable
                ? (l(t, z) && t[z][r] && (t[z][r] = !1),
                  (n = b(n, { enumerable: y(0, !1) })))
                : (l(t, z) || $(t, z, y(1, {})), (t[z][r] = !0)),
              rt(t, r, n))
            : $(t, r, n)
        );
      },
      ut = function (t, e) {
        h(t);
        var n = g(e),
          r = x(n).concat(lt(n));
        return (
          F(r, function (e) {
            (u && !ct.call(n, e)) || at(t, e, n[e]);
          }),
          t
        );
      },
      ct = function (t) {
        var e = m(t, !0),
          n = Q.call(this, e);
        return (
          !(this === H && l(X, e) && !l(J, e)) &&
          (!(n || !l(this, e) || !l(X, e) || (l(this, z) && this[z][e])) || n)
        );
      },
      st = function (t, e) {
        var n = g(t),
          r = m(e, !0);
        if (n !== H || !l(X, r) || l(J, r)) {
          var i = G(n, r);
          return (
            !i || !l(X, r) || (l(n, z) && n[z][r]) || (i.enumerable = !0), i
          );
        }
      },
      ft = function (t) {
        var e = Y(g(t)),
          n = [];
        return (
          F(e, function (t) {
            l(X, t) || l(L, t) || n.push(t);
          }),
          n
        );
      },
      lt = function (t) {
        var e = t === H,
          n = Y(e ? J : g(t)),
          r = [];
        return (
          F(n, function (t) {
            !l(X, t) || (e && !l(H, t)) || r.push(X[t]);
          }),
          r
        );
      };
    (c ||
      (k(
        (W = function () {
          if (this instanceof W) throw TypeError("Symbol is not a constructor");
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = I(t),
            n = function (t) {
              this === H && n.call(J, t),
                l(this, z) && l(this[z], e) && (this[z][e] = !1),
                rt(this, e, y(1, t));
            };
          return u && nt && rt(H, e, { configurable: !0, set: n }), it(e, t);
        }).prototype,
        "toString",
        function () {
          return V(this).tag;
        }
      ),
      k(W, "withoutSetter", function (t) {
        return it(I(t), t);
      }),
      (j.f = ct),
      (E.f = at),
      (A.f = st),
      (w.f = _.f = ft),
      (O.f = lt),
      (P.f = function (t) {
        return it(D(t), t);
      }),
      u &&
        ($(W.prototype, "description", {
          configurable: !0,
          get: function () {
            return V(this).description;
          },
        }),
        a || k(H, "propertyIsEnumerable", ct, { unsafe: !0 }))),
    r({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: W }),
    F(x(tt), function (t) {
      R(t);
    }),
    r(
      { target: "Symbol", stat: !0, forced: !c },
      {
        for: function (t) {
          var e = String(t);
          if (l(K, e)) return K[e];
          var n = W(e);
          return (K[e] = n), (Z[n] = e), n;
        },
        keyFor: function (t) {
          if (!ot(t)) throw TypeError(t + " is not a symbol");
          if (l(Z, t)) return Z[t];
        },
        useSetter: function () {
          nt = !0;
        },
        useSimple: function () {
          nt = !1;
        },
      }
    ),
    r(
      { target: "Object", stat: !0, forced: !c, sham: !u },
      {
        create: function (t, e) {
          return void 0 === e ? b(t) : ut(b(t), e);
        },
        defineProperty: at,
        defineProperties: ut,
        getOwnPropertyDescriptor: st,
      }
    ),
    r(
      { target: "Object", stat: !0, forced: !c },
      { getOwnPropertyNames: ft, getOwnPropertySymbols: lt }
    ),
    r(
      {
        target: "Object",
        stat: !0,
        forced: f(function () {
          O.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return O.f(v(t));
        },
      }
    ),
    U) &&
      r(
        {
          target: "JSON",
          stat: !0,
          forced:
            !c ||
            f(function () {
              var t = W();
              return (
                "[null]" != U([t]) ||
                "{}" != U({ a: t }) ||
                "{}" != U(Object(t))
              );
            }),
        },
        {
          stringify: function (t, e, n) {
            for (var r, i = [t], o = 1; arguments.length > o; )
              i.push(arguments[o++]);
            if (((r = e), (p(e) || void 0 !== t) && !ot(t)))
              return (
                d(e) ||
                  (e = function (t, e) {
                    if (
                      ("function" == typeof r && (e = r.call(this, t, e)),
                      !ot(e))
                    )
                      return e;
                  }),
                (i[1] = e),
                U.apply(null, i)
              );
          },
        }
      );
    W.prototype[B] || S(W.prototype, B, W.prototype.valueOf),
      M(W, "Symbol"),
      (L[z] = !0);
  },
  function (t, e, n) {
    var r = n(117),
      i = n(5),
      o = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? o(r[t]) || o(i[t])
        : (r[t] && r[t][e]) || (i[t] && i[t][e]);
    };
  },
  function (t, e, n) {
    var r = n(71),
      i = n(50),
      o = n(25),
      a = n(24),
      u = n(93),
      c = [].push,
      s = function (t) {
        var e = 1 == t,
          n = 2 == t,
          s = 3 == t,
          f = 4 == t,
          l = 6 == t,
          d = 5 == t || l;
        return function (p, h, v, g) {
          for (
            var m,
              y,
              b = o(p),
              x = i(b),
              w = r(h, v, 3),
              _ = a(x.length),
              O = 0,
              A = g || u,
              E = e ? A(p, _) : n ? A(p, 0) : void 0;
            _ > O;
            O++
          )
            if ((d || O in x) && ((y = w((m = x[O]), O, b)), t))
              if (e) E[O] = y;
              else if (y)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return m;
                  case 6:
                    return O;
                  case 2:
                    c.call(E, m);
                }
              else if (f) return !1;
          return l ? -1 : s || f ? f : E;
        };
      };
    t.exports = {
      forEach: s(0),
      map: s(1),
      filter: s(2),
      some: s(3),
      every: s(4),
      find: s(5),
      findIndex: s(6),
    };
  },
  function (t, e, n) {
    var r = n(4),
      i = n(25),
      o = n(80);
    r(
      {
        target: "Object",
        stat: !0,
        forced: n(12)(function () {
          o(1);
        }),
      },
      {
        keys: function (t) {
          return o(i(t));
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
      return r;
    }),
      n.d(e, "a", function () {
        return i;
      });
    n(40), n(64), n(8), n(13);
    var r = [
        { ratio: 1, width: { min: 1800 }, alias: "1920" },
        { ratio: 0.8384, width: { min: 1400 }, alias: "1440" },
        { ratio: 0.6829, width: { min: 1024 }, alias: "1024" },
        { ratio: 0.8, width: { min: 720 }, alias: "768" },
        { ratio: 0.4444, width: { min: 400 }, alias: "400", noImage: !0 },
        { ratio: 0.4, width: { min: 360 }, alias: "360" },
        { ratio: 0.3555, width: { max: 359 }, alias: "320", noImage: !0 },
      ],
      i = r.filter(function (t) {
        return !t.noImage;
      });
    i[i.length - 1] = { ratio: 0.4, width: { max: 720 }, alias: "360" };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return w;
    });
    n(43),
      n(64),
      n(146),
      n(8),
      n(137),
      n(106),
      n(107),
      n(46),
      n(26),
      n(59),
      n(208),
      n(27),
      n(104),
      n(13);
    var r = n(11),
      i = n.n(r),
      o = n(18),
      a = n.n(o),
      u = (n(63), n(82)),
      c = n.n(u),
      s = n(22),
      f = n.n(s),
      l = n(2),
      d = n(6),
      p = n(23),
      h =
        (n(38),
        n(39),
        n(149),
        n(145),
        (function () {
          function t(t, e) {
            var n = e.limit,
              r = void 0 === n ? 0 : n;
            (this.loader = t),
              (this.queues = { high: [], normal: [], low: [] }),
              (this.loadingContext = {
                elements: [],
                cur: { high: 0, normal: 0 },
              }),
              (this.options = { limit: r });
          }
          return (
            (t.prototype.pushGroup = function (t, e) {
              var n = this,
                r = e.gap,
                i = void 0 === r ? 1 : r,
                o = e.start,
                a = void 0 === o ? 0 : o,
                u = e.onProgress;
              if (!t || t.length < 1)
                return {
                  setPriority: function () {
                    console.error("浼犲叆鐨� elements 鍏冪礌涓虹┖");
                  },
                };
              var c = {
                elements: t,
                gap: i,
                onProgress: u,
                start: a,
                priority: "low",
                elementStates: t.map(function () {}),
                base: 0,
                offset: 0,
                elementsRetrying: [],
              };
              return (
                this.queues.low.push(c),
                {
                  setPriority: function (t) {
                    return n.setPriority(c, t);
                  },
                }
              );
            }),
            (t.prototype.load = function () {
              for (
                var t = this.loadingContext, e = this.options;
                e.limit <= 0 || t.elements.length < e.limit;

              ) {
                var n = this.getGroupToLoad();
                if (!n) break;
                this.loadNextElementInGroup(n);
              }
            }),
            (t.prototype.loadNextElementInGroup = function (t) {
              var e = this,
                n = t.base,
                r = t.offset,
                i = t.start,
                o = t.gap,
                a = t.elements,
                u = t.elementStates;
              if (r !== o) {
                var c = (n * o + r + i) % a.length,
                  s = a[c],
                  f = this.loadingContext;
                f.elements.push({ element: s, belongsTo: t, iInGroup: c });
                var l = function () {
                  t.onProgress &&
                    t.onProgress({
                      element: s,
                      total: a.length,
                      cnt: u.reduce(function (t, e) {
                        return t + (void 0 === e ? 0 : 1);
                      }, 0),
                      i: r,
                    });
                  var n = f.elements.findIndex(function (t) {
                    return t.element === s;
                  });
                  n >= 0 && f.elements.splice(n, 1),
                    window.setTimeout(function () {
                      return e.load();
                    });
                };
                this.loader.load(s, {
                  onLoaded: function () {
                    (u[r] = "loaded"), l();
                  },
                  onError: function () {
                    (u[r] = "error"), l();
                  },
                }),
                  (u[r] = "loading"),
                  (t.base += 1),
                  t.base * o + r >= a.length && ((t.base = 0), (t.offset += 1));
              } else this.popGroupFromQueue(t);
            }),
            (t.prototype.getGroupToLoad = function () {
              var t =
                this.queues.high.length > 0
                  ? "high"
                  : this.queues.normal.length > 0
                  ? "normal"
                  : void 0;
              if (t) {
                var e = this.loadingContext.cur[t],
                  n = this.queues[t][e];
                return (
                  (this.loadingContext.cur[t] = e + 1),
                  this.loadingContext.cur[t] >= this.queues[t].length &&
                    (this.loadingContext.cur[t] = 0),
                  n
                );
              }
            }),
            (t.prototype.popGroupFromQueue = function (t) {
              var e = this.queues[t.priority],
                n = e.indexOf(t);
              if (!(n < 0))
                return (
                  e.splice(n, 1),
                  "low" !== t.priority &&
                    this.loadingContext.cur[t.priority] > n &&
                    (this.loadingContext.cur[t.priority] = Math.max(
                      0,
                      this.loadingContext.cur[t.priority] - 1
                    )),
                  t
                );
            }),
            (t.prototype.cancelElementsInGroup = function (t) {
              var e = this.loadingContext.elements.filter(function (e) {
                return e.belongsTo !== t;
              });
              this.loadingContext.elements = e;
            }),
            (t.prototype.setPriority = function (t, e) {
              if (e !== t.priority) {
                var n = this.popGroupFromQueue(t);
                n &&
                  ((n.priority = e),
                  this.queues[e].push(n),
                  "low" !== e ? this.load() : this.cancelElementsInGroup(n));
              }
            }),
            t
          );
        })()),
      v = n(3),
      g = n(20);
    function m(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function y(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? m(Object(n), !0).forEach(function (e) {
              a()(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var b = new Promise(function (t) {
      Object(g.a)().then(function (e) {
        t(new h(e, { limit: 6 }));
      });
    });
    function x(t) {
      var e = t.dataset,
        n = e.posterFrame,
        r = e.fps,
        i = e.mode,
        o = e.autoplay,
        a = e.delay,
        u = e.replay,
        c = e.loadGap,
        s = e.waitOnLoading;
      return {
        posterFrame: n && parseInt(n, 10),
        autoplay: void 0 !== o,
        replay: void 0 !== u,
        playOptions: {
          fps: r && parseFloat(r),
          mode:
            "reverse" === i
              ? p.c.Reverse
              : "loop" === i
              ? p.c.Loop
              : "alternate" === i
              ? p.c.Alternate
              : p.c.Normal,
          delay: a && parseFloat(a),
          waitOnLoading: s && JSON.parse(s),
        },
        loadGap: c && parseInt(c, 10),
      };
    }
    function w(t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (_ = f()(
        i.a.mark(function t(e) {
          var n,
            r,
            o,
            a,
            u,
            s,
            f,
            h,
            g,
            m,
            w,
            _,
            O,
            A,
            E,
            j,
            S,
            k,
            T,
            C,
            L = arguments;
          return i.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (
                    ((n = L.length > 1 && void 0 !== L[1] ? L[1] : {}),
                    (r = n.loadGap),
                    (o = n.defaultPlayOptions),
                    (a = c()(n, ["loadGap", "defaultPlayOptions"])),
                    !(L.length > 2 && void 0 !== L[2] && L[2]) || Object(l.a)())
                  ) {
                    t.next = 5;
                    break;
                  }
                  return (
                    (u = function () {}),
                    t.abrupt("return", { play: u, seek: u, pause: u })
                  );
                case 5:
                  return (t.next = 7), b;
                case 7:
                  return (
                    (s = t.sent),
                    (f = x(e)),
                    (h = f.autoplay),
                    (g = f.posterFrame),
                    (m = f.playOptions),
                    (w = f.replay),
                    (_ = f.loadGap),
                    r || (r = _ || 1),
                    (O = y(y({}, m), o)),
                    (A = Array.from(e.children)),
                    (E =
                      g ||
                      A.findIndex(function (t) {
                        return t.hasAttribute("data-cover");
                      })),
                    (j = E > 0 ? E : 0),
                    (S = new p.b(A)),
                    (k = new p.a(
                      e,
                      S,
                      y(y({}, a), {}, { posterFrame: j, defaultPlayOptions: O })
                    )).load(),
                    (T = !1),
                    (C = s.pushGroup(A, {
                      start: j,
                      gap: r,
                      onProgress: function (t) {
                        t.cnt === t.total && (T = !0);
                      },
                    })),
                    Object(v.a)(e, {
                      start: "bottom",
                      end: "top",
                      forceInViewBoundary: !0,
                      handlers: {
                        onStateChange: function (t) {
                          var e = t.state;
                          "inView" === e
                            ? h &&
                              k.paused &&
                              (w &&
                                (O.mode === p.c.Normal
                                  ? k.seekPercent(0)
                                  : O.mode === p.c.Reverse && k.seekPercent(1)),
                              k.play(O))
                            : ("after" === e && C.setPriority("low"),
                              h && k.playing && k.pause());
                        },
                        before: function (t) {
                          var e = t.distance;
                          if (T) return "done";
                          var n = e + 0.5 * Object(d.e)() < 0;
                          C.setPriority(n ? "low" : "normal");
                        },
                        inView: function (t) {
                          var e = t.target,
                            n = t.distance,
                            r = t.total;
                          if (T) return "done";
                          if (n / r > 0.5) {
                            var i = e.getBoundingClientRect();
                            if (i.top + i.height / 2 < 0)
                              return C.setPriority("low");
                          }
                          return C.setPriority("high");
                        },
                      },
                    }),
                    t.abrupt("return", k)
                  );
                case 21:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, n) {
    var r = n(12),
      i = n(36),
      o = "".split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == i(t) ? o.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e, n) {
    var r = n(16);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
      if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r = n(118),
      i = n(91).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function (t, e, n) {
    var r = n(36);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  function (t, e, n) {
    "use strict";
    var r = n(51),
      i = n(17),
      o = n(49);
    t.exports = function (t, e, n) {
      var a = r(e);
      a in t ? i.f(t, a, o(0, n)) : (t[a] = n);
    };
  },
  function (t, e, n) {
    var r = n(12),
      i = n(7),
      o = n(95),
      a = i("species");
    t.exports = function (t) {
      return (
        o >= 51 ||
        !r(function () {
          var e = [];
          return (
            ((e.constructor = {})[a] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(4),
      i = n(177);
    r({ global: !0, forced: parseFloat != i }, { parseFloat: i });
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    "use strict";
    var r = n(77),
      i = n(15),
      o = n(25),
      a = n(24),
      u = n(54),
      c = n(37),
      s = n(102),
      f = n(78),
      l = Math.max,
      d = Math.min,
      p = Math.floor,
      h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      v = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, function (t, e, n, r) {
      var g = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        m = r.REPLACE_KEEPS_$0,
        y = g ? "$" : "$0";
      return [
        function (n, r) {
          var i = c(this),
            o = null == n ? void 0 : n[t];
          return void 0 !== o ? o.call(n, i, r) : e.call(String(i), n, r);
        },
        function (t, r) {
          if ((!g && m) || ("string" == typeof r && -1 === r.indexOf(y))) {
            var o = n(e, t, this, r);
            if (o.done) return o.value;
          }
          var c = i(t),
            p = String(this),
            h = "function" == typeof r;
          h || (r = String(r));
          var v = c.global;
          if (v) {
            var x = c.unicode;
            c.lastIndex = 0;
          }
          for (var w = []; ; ) {
            var _ = f(c, p);
            if (null === _) break;
            if ((w.push(_), !v)) break;
            "" === String(_[0]) && (c.lastIndex = s(p, a(c.lastIndex), x));
          }
          for (var O, A = "", E = 0, j = 0; j < w.length; j++) {
            _ = w[j];
            for (
              var S = String(_[0]),
                k = l(d(u(_.index), p.length), 0),
                T = [],
                C = 1;
              C < _.length;
              C++
            )
              T.push(void 0 === (O = _[C]) ? O : String(O));
            var L = _.groups;
            if (h) {
              var I = [S].concat(T, k, p);
              void 0 !== L && I.push(L);
              var D = String(r.apply(void 0, I));
            } else D = b(S, p, k, T, L, r);
            k >= E && ((A += p.slice(E, k) + D), (E = k + S.length));
          }
          return A + p.slice(E);
        },
      ];
      function b(t, n, r, i, a, u) {
        var c = r + t.length,
          s = i.length,
          f = v;
        return (
          void 0 !== a && ((a = o(a)), (f = h)),
          e.call(u, f, function (e, o) {
            var u;
            switch (o.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return n.slice(0, r);
              case "'":
                return n.slice(c);
              case "<":
                u = a[o.slice(1, -1)];
                break;
              default:
                var f = +o;
                if (0 === f) return e;
                if (f > s) {
                  var l = p(f / 10);
                  return 0 === l
                    ? e
                    : l <= s
                    ? void 0 === i[l - 1]
                      ? o.charAt(1)
                      : i[l - 1] + o.charAt(1)
                    : e;
                }
                u = i[f - 1];
            }
            return void 0 === u ? "" : u;
          })
        );
      }
    });
  },
  function (t, e, n) {
    var r = n(7),
      i = n(79),
      o = n(17),
      a = r("unscopables"),
      u = Array.prototype;
    null == u[a] && o.f(u, a, { configurable: !0, value: i(null) }),
      (t.exports = function (t) {
        u[a][t] = !0;
      });
  },
  function (t, e, n) {
    var r = (function (t) {
      "use strict";
      var e = Object.prototype,
        n = e.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag";
      function u(t, e, n, r) {
        var i = e && e.prototype instanceof f ? e : f,
          o = Object.create(i.prototype),
          a = new _(r || []);
        return (
          (o._invoke = (function (t, e, n) {
            var r = "suspendedStart";
            return function (i, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw o;
                return A();
              }
              for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate;
                if (a) {
                  var u = b(a, n);
                  if (u) {
                    if (u === s) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var f = c(t, e, n);
                if ("normal" === f.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), f.arg === s)
                  )
                    continue;
                  return { value: f.arg, done: n.done };
                }
                "throw" === f.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = f.arg));
              }
            };
          })(t, n, a)),
          o
        );
      }
      function c(t, e, n) {
        try {
          return { type: "normal", arg: t.call(e, n) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var s = {};
      function f() {}
      function l() {}
      function d() {}
      var p = {};
      p[i] = function () {
        return this;
      };
      var h = Object.getPrototypeOf,
        v = h && h(h(O([])));
      v && v !== e && n.call(v, i) && (p = v);
      var g = (d.prototype = f.prototype = Object.create(p));
      function m(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }
      function y(t, e) {
        var r;
        this._invoke = function (i, o) {
          function a() {
            return new e(function (r, a) {
              !(function r(i, o, a, u) {
                var s = c(t[i], t, o);
                if ("throw" !== s.type) {
                  var f = s.arg,
                    l = f.value;
                  return l && "object" == typeof l && n.call(l, "__await")
                    ? e.resolve(l.__await).then(
                        function (t) {
                          r("next", t, a, u);
                        },
                        function (t) {
                          r("throw", t, a, u);
                        }
                      )
                    : e.resolve(l).then(
                        function (t) {
                          (f.value = t), a(f);
                        },
                        function (t) {
                          return r("throw", t, a, u);
                        }
                      );
                }
                u(s.arg);
              })(i, o, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }
      function b(t, e) {
        var n = t.iterator[e.method];
        if (void 0 === n) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              b(t, e),
              "throw" === e.method)
            )
              return s;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return s;
        }
        var r = c(n, t.iterator, e.arg);
        if ("throw" === r.type)
          return (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), s;
        var i = r.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              s)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            s);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function w(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function _(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function O(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              o = function e() {
                for (; ++r < t.length; )
                  if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return { next: A };
      }
      function A() {
        return { value: void 0, done: !0 };
      }
      return (
        (l.prototype = g.constructor = d),
        (d.constructor = l),
        (d[a] = l.displayName = "GeneratorFunction"),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === l || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, d)
              : ((t.__proto__ = d), a in t || (t[a] = "GeneratorFunction")),
            (t.prototype = Object.create(g)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        m(y.prototype),
        (y.prototype[o] = function () {
          return this;
        }),
        (t.AsyncIterator = y),
        (t.async = function (e, n, r, i, o) {
          void 0 === o && (o = Promise);
          var a = new y(u(e, n, r, i), o);
          return t.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        m(g),
        (g[a] = "Generator"),
        (g[i] = function () {
          return this;
        }),
        (g.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var n in t) e.push(n);
          return (
            e.reverse(),
            function n() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in t) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (t.values = O),
        (_.prototype = {
          constructor: _,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(w),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  n.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = n),
                r && ((e.method = "next"), (e.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                a = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var u = n.call(o, "catchLoc"),
                  c = n.call(o, "finallyLoc");
                if (u && c) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (u) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), s)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              s
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), w(n), s;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  w(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              s
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = r;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(45).filter,
      o = n(57),
      a = n(34),
      u = o("filter"),
      c = a("filter");
    r(
      { target: "Array", proto: !0, forced: !u || !c },
      {
        filter: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, n) {
    t.exports = (function () {
      function t(t, e) {
        (this.id = q++), (this.type = t), (this.data = e);
      }
      function e(t) {
        return (
          "[" +
          (function t(e) {
            if (0 === e.length) return [];
            var n = e.charAt(0),
              r = e.charAt(e.length - 1);
            if (1 < e.length && n === r && ('"' === n || "'" === n))
              return [
                '"' +
                  e
                    .substr(1, e.length - 2)
                    .replace(/\\/g, "\\\\")
                    .replace(/"/g, '\\"') +
                  '"',
              ];
            if ((n = /\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(e)))
              return t(e.substr(0, n.index))
                .concat(t(n[1]))
                .concat(t(e.substr(n.index + n[0].length)));
            if (1 === (n = e.split(".")).length)
              return [
                '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"',
              ];
            for (e = [], r = 0; r < n.length; ++r) e = e.concat(t(n[r]));
            return e;
          })(t).join("][") +
          "]"
        );
      }
      function n(t) {
        return "string" == typeof t ? t.split() : t;
      }
      function r(t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }
      function i(t) {
        var e,
          i,
          o,
          a,
          u = t || {};
        t = {};
        var c = [],
          s = [],
          f = "undefined" == typeof window ? 1 : window.devicePixelRatio,
          l = !1,
          d = function (t) {},
          p = function () {};
        if (
          ("string" == typeof u
            ? (e = document.querySelector(u))
            : "object" == typeof u &&
              ("string" == typeof u.nodeName &&
              "function" == typeof u.appendChild &&
              "function" == typeof u.getBoundingClientRect
                ? (e = u)
                : "function" == typeof u.drawArrays ||
                  "function" == typeof u.drawElements
                ? (o = (a = u).canvas)
                : ("gl" in u
                    ? (a = u.gl)
                    : "canvas" in u
                    ? (o = r(u.canvas))
                    : "container" in u && (i = r(u.container)),
                  "attributes" in u && (t = u.attributes),
                  "extensions" in u && (c = n(u.extensions)),
                  "optionalExtensions" in u && (s = n(u.optionalExtensions)),
                  "onDone" in u && (d = u.onDone),
                  "profile" in u && (l = !!u.profile),
                  "pixelRatio" in u && (f = +u.pixelRatio))),
          e && ("canvas" === e.nodeName.toLowerCase() ? (o = e) : (i = e)),
          !a)
        ) {
          if (!o) {
            if (
              !(e = (function (t, e, n) {
                function r() {
                  var e = window.innerWidth,
                    r = window.innerHeight;
                  t !== document.body &&
                    ((e = (r = t.getBoundingClientRect()).right - r.left),
                    (r = r.bottom - r.top)),
                    (o.width = n * e),
                    (o.height = n * r),
                    B(o.style, { width: e + "px", height: r + "px" });
                }
                var i,
                  o = document.createElement("canvas");
                return (
                  B(o.style, {
                    border: 0,
                    margin: 0,
                    padding: 0,
                    top: 0,
                    left: 0,
                  }),
                  t.appendChild(o),
                  t === document.body &&
                    ((o.style.position = "absolute"),
                    B(t.style, { margin: 0, padding: 0 })),
                  t !== document.body && "function" == typeof ResizeObserver
                    ? (i = new ResizeObserver(function () {
                        setTimeout(r);
                      })).observe(t)
                    : window.addEventListener("resize", r, !1),
                  r(),
                  {
                    canvas: o,
                    onDestroy: function () {
                      i
                        ? i.disconnect()
                        : window.removeEventListener("resize", r),
                        t.removeChild(o);
                    },
                  }
                );
              })(i || document.body, 0, f))
            )
              return null;
            (o = e.canvas), (p = e.onDestroy);
          }
          void 0 === t.premultipliedAlpha && (t.premultipliedAlpha = !0),
            (a = (function (t, e) {
              function n(n) {
                try {
                  return t.getContext(n, e);
                } catch (t) {
                  return null;
                }
              }
              return (
                n("webgl") || n("experimental-webgl") || n("webgl-experimental")
              );
            })(o, t));
        }
        return a
          ? {
              gl: a,
              canvas: o,
              container: i,
              extensions: c,
              optionalExtensions: s,
              pixelRatio: f,
              profile: l,
              onDone: d,
              onDestroy: p,
            }
          : (p(),
            d(
              "webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"
            ),
            null);
      }
      function o(t, e) {
        for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r);
        return n;
      }
      function a(t) {
        var e, n;
        return (
          (e = (65535 < t) << 4),
          (e |= n = (255 < (t >>>= e)) << 3),
          (e |= n = (15 < (t >>>= n)) << 2) |
            (n = (3 < (t >>>= n)) << 1) |
            ((t >>> n) >> 1)
        );
      }
      function u() {
        function t(t) {
          t: {
            for (var e = 16; 268435456 >= e; e *= 16)
              if (t <= e) {
                t = e;
                break t;
              }
            t = 0;
          }
          return 0 < (e = n[a(t) >> 2]).length ? e.pop() : new ArrayBuffer(t);
        }
        function e(t) {
          n[a(t.byteLength) >> 2].push(t);
        }
        var n = o(8, function () {
          return [];
        });
        return {
          alloc: t,
          free: e,
          allocType: function (e, n) {
            var r = null;
            switch (e) {
              case 5120:
                r = new Int8Array(t(n), 0, n);
                break;
              case 5121:
                r = new Uint8Array(t(n), 0, n);
                break;
              case 5122:
                r = new Int16Array(t(2 * n), 0, n);
                break;
              case 5123:
                r = new Uint16Array(t(2 * n), 0, n);
                break;
              case 5124:
                r = new Int32Array(t(4 * n), 0, n);
                break;
              case 5125:
                r = new Uint32Array(t(4 * n), 0, n);
                break;
              case 5126:
                r = new Float32Array(t(4 * n), 0, n);
                break;
              default:
                return null;
            }
            return r.length !== n ? r.subarray(0, n) : r;
          },
          freeType: function (t) {
            e(t.buffer);
          },
        };
      }
      function c(t) {
        return (
          !!t &&
          "object" == typeof t &&
          Array.isArray(t.shape) &&
          Array.isArray(t.stride) &&
          "number" == typeof t.offset &&
          t.shape.length === t.stride.length &&
          (Array.isArray(t.data) || $(t.data))
        );
      }
      function s(t, e, n, r, i, o) {
        for (var a = 0; a < e; ++a)
          for (var u = t[a], c = 0; c < n; ++c)
            for (var s = u[c], f = 0; f < r; ++f) i[o++] = s[f];
      }
      function f(t) {
        return 0 | X[Object.prototype.toString.call(t)];
      }
      function l(t, e) {
        for (var n = 0; n < e.length; ++n) t[n] = e[n];
      }
      function d(t, e, n, r, i, o, a) {
        for (var u = 0, c = 0; c < n; ++c)
          for (var s = 0; s < r; ++s) t[u++] = e[i * c + o * s + a];
      }
      function p(t, e, n, r) {
        function i(e) {
          (this.id = s++),
            (this.buffer = t.createBuffer()),
            (this.type = e),
            (this.usage = 35044),
            (this.byteLength = 0),
            (this.dimension = 1),
            (this.dtype = 5121),
            (this.persistentData = null),
            n.profile && (this.stats = { size: 0 });
        }
        function o(e, n, r) {
          (e.byteLength = n.byteLength), t.bufferData(e.type, n, r);
        }
        function a(t, e, n, r, i, a) {
          if (((t.usage = n), Array.isArray(e))) {
            if (((t.dtype = r || 5126), 0 < e.length))
              if (Array.isArray(e[0])) {
                i = tt(e);
                for (var u = (r = 1); u < i.length; ++u) r *= i[u];
                (t.dimension = r),
                  o(t, (e = Z(e, i, t.dtype)), n),
                  a ? (t.persistentData = e) : U.freeType(e);
              } else
                "number" == typeof e[0]
                  ? ((t.dimension = i),
                    l((i = U.allocType(t.dtype, e.length)), e),
                    o(t, i, n),
                    a ? (t.persistentData = i) : U.freeType(i))
                  : $(e[0]) &&
                    ((t.dimension = e[0].length),
                    (t.dtype = r || f(e[0]) || 5126),
                    o(t, (e = Z(e, [e.length, e[0].length], t.dtype)), n),
                    a ? (t.persistentData = e) : U.freeType(e));
          } else if ($(e))
            (t.dtype = r || f(e)),
              (t.dimension = i),
              o(t, e, n),
              a &&
                (t.persistentData = new Uint8Array(new Uint8Array(e.buffer)));
          else if (c(e)) {
            i = e.shape;
            var s = e.stride,
              p = ((u = e.offset), 0),
              h = 0,
              v = 0,
              g = 0;
            1 === i.length
              ? ((p = i[0]), (h = 1), (v = s[0]), (g = 0))
              : 2 === i.length &&
                ((p = i[0]), (h = i[1]), (v = s[0]), (g = s[1])),
              (t.dtype = r || f(e.data) || 5126),
              (t.dimension = h),
              d((i = U.allocType(t.dtype, p * h)), e.data, p, h, v, g, u),
              o(t, i, n),
              a ? (t.persistentData = i) : U.freeType(i);
          } else
            e instanceof ArrayBuffer &&
              ((t.dtype = 5121),
              (t.dimension = i),
              o(t, e, n),
              a && (t.persistentData = new Uint8Array(new Uint8Array(e))));
        }
        function u(n) {
          e.bufferCount--,
            r(n),
            t.deleteBuffer(n.buffer),
            (n.buffer = null),
            delete p[n.id];
        }
        var s = 0,
          p = {};
        (i.prototype.bind = function () {
          t.bindBuffer(this.type, this.buffer);
        }),
          (i.prototype.destroy = function () {
            u(this);
          });
        var h = [];
        return (
          n.profile &&
            (e.getTotalBufferSize = function () {
              var t = 0;
              return (
                Object.keys(p).forEach(function (e) {
                  t += p[e].stats.size;
                }),
                t
              );
            }),
          {
            create: function (r, o, s, h) {
              function v(e) {
                var r = 35044,
                  i = null,
                  o = 0,
                  u = 0,
                  s = 1;
                return (
                  Array.isArray(e) || $(e) || c(e) || e instanceof ArrayBuffer
                    ? (i = e)
                    : "number" == typeof e
                    ? (o = 0 | e)
                    : e &&
                      ("data" in e && (i = e.data),
                      "usage" in e && (r = K[e.usage]),
                      "type" in e && (u = J[e.type]),
                      "dimension" in e && (s = 0 | e.dimension),
                      "length" in e && (o = 0 | e.length)),
                  g.bind(),
                  i
                    ? a(g, i, r, u, s, h)
                    : (o && t.bufferData(g.type, o, r),
                      (g.dtype = u || 5121),
                      (g.usage = r),
                      (g.dimension = s),
                      (g.byteLength = o)),
                  n.profile && (g.stats.size = g.byteLength * et[g.dtype]),
                  v
                );
              }
              e.bufferCount++;
              var g = new i(o);
              return (
                (p[g.id] = g),
                s || v(r),
                (v._reglType = "buffer"),
                (v._buffer = g),
                (v.subdata = function (e, n) {
                  var r,
                    i = 0 | (n || 0);
                  if ((g.bind(), $(e) || e instanceof ArrayBuffer))
                    t.bufferSubData(g.type, i, e);
                  else if (Array.isArray(e)) {
                    if (0 < e.length)
                      if ("number" == typeof e[0]) {
                        var o = U.allocType(g.dtype, e.length);
                        l(o, e), t.bufferSubData(g.type, i, o), U.freeType(o);
                      } else
                        (Array.isArray(e[0]) || $(e[0])) &&
                          ((r = tt(e)),
                          (o = Z(e, r, g.dtype)),
                          t.bufferSubData(g.type, i, o),
                          U.freeType(o));
                  } else if (c(e)) {
                    r = e.shape;
                    var a = e.stride,
                      u = (o = 0),
                      s = 0,
                      p = 0;
                    1 === r.length
                      ? ((o = r[0]), (u = 1), (s = a[0]), (p = 0))
                      : 2 === r.length &&
                        ((o = r[0]), (u = r[1]), (s = a[0]), (p = a[1])),
                      (r = Array.isArray(e.data) ? g.dtype : f(e.data)),
                      d(
                        (r = U.allocType(r, o * u)),
                        e.data,
                        o,
                        u,
                        s,
                        p,
                        e.offset
                      ),
                      t.bufferSubData(g.type, i, r),
                      U.freeType(r);
                  }
                  return v;
                }),
                n.profile && (v.stats = g.stats),
                (v.destroy = function () {
                  u(g);
                }),
                v
              );
            },
            createStream: function (t, e) {
              var n = h.pop();
              return n || (n = new i(t)), n.bind(), a(n, e, 35040, 0, 1, !1), n;
            },
            destroyStream: function (t) {
              h.push(t);
            },
            clear: function () {
              Y(p).forEach(u), h.forEach(u);
            },
            getBuffer: function (t) {
              return t && t._buffer instanceof i ? t._buffer : null;
            },
            restore: function () {
              Y(p).forEach(function (e) {
                (e.buffer = t.createBuffer()),
                  t.bindBuffer(e.type, e.buffer),
                  t.bufferData(
                    e.type,
                    e.persistentData || e.byteLength,
                    e.usage
                  );
              });
            },
            _initBuffer: a,
          }
        );
      }
      function h(t, e, n, r) {
        function i(t) {
          (this.id = s++),
            (u[this.id] = this),
            (this.buffer = t),
            (this.primType = 4),
            (this.type = this.vertCount = 0);
        }
        function o(r, i, o, a, u, s, f) {
          var l;
          if (
            (r.buffer.bind(),
            i
              ? ((l = f) ||
                  ($(i) && (!c(i) || $(i.data))) ||
                  (l = e.oes_element_index_uint ? 5125 : 5123),
                n._initBuffer(r.buffer, i, o, l, 3))
              : (t.bufferData(34963, s, o),
                (r.buffer.dtype = l || 5121),
                (r.buffer.usage = o),
                (r.buffer.dimension = 3),
                (r.buffer.byteLength = s)),
            (l = f),
            !f)
          ) {
            switch (r.buffer.dtype) {
              case 5121:
              case 5120:
                l = 5121;
                break;
              case 5123:
              case 5122:
                l = 5123;
                break;
              case 5125:
              case 5124:
                l = 5125;
            }
            r.buffer.dtype = l;
          }
          (r.type = l),
            0 > (i = u) &&
              ((i = r.buffer.byteLength),
              5123 === l ? (i >>= 1) : 5125 === l && (i >>= 2)),
            (r.vertCount = i),
            (i = a),
            0 > a &&
              ((i = 4),
              1 === (a = r.buffer.dimension) && (i = 0),
              2 === a && (i = 1),
              3 === a && (i = 4)),
            (r.primType = i);
        }
        function a(t) {
          r.elementsCount--,
            delete u[t.id],
            t.buffer.destroy(),
            (t.buffer = null);
        }
        var u = {},
          s = 0,
          f = { uint8: 5121, uint16: 5123 };
        e.oes_element_index_uint && (f.uint32 = 5125),
          (i.prototype.bind = function () {
            this.buffer.bind();
          });
        var l = [];
        return {
          create: function (t, e) {
            function u(t) {
              if (t)
                if ("number" == typeof t)
                  s(t),
                    (l.primType = 4),
                    (l.vertCount = 0 | t),
                    (l.type = 5121);
                else {
                  var e = null,
                    n = 35044,
                    r = -1,
                    i = -1,
                    a = 0,
                    d = 0;
                  Array.isArray(t) || $(t) || c(t)
                    ? (e = t)
                    : ("data" in t && (e = t.data),
                      "usage" in t && (n = K[t.usage]),
                      "primitive" in t && (r = nt[t.primitive]),
                      "count" in t && (i = 0 | t.count),
                      "type" in t && (d = f[t.type]),
                      "length" in t
                        ? (a = 0 | t.length)
                        : ((a = i),
                          5123 === d || 5122 === d
                            ? (a *= 2)
                            : (5125 !== d && 5124 !== d) || (a *= 4))),
                    o(l, e, n, r, i, a, d);
                }
              else s(), (l.primType = 4), (l.vertCount = 0), (l.type = 5121);
              return u;
            }
            var s = n.create(null, 34963, !0),
              l = new i(s._buffer);
            return (
              r.elementsCount++,
              u(t),
              (u._reglType = "elements"),
              (u._elements = l),
              (u.subdata = function (t, e) {
                return s.subdata(t, e), u;
              }),
              (u.destroy = function () {
                a(l);
              }),
              u
            );
          },
          createStream: function (t) {
            var e = l.pop();
            return (
              e || (e = new i(n.create(null, 34963, !0, !1)._buffer)),
              o(e, t, 35040, -1, -1, 0, 0),
              e
            );
          },
          destroyStream: function (t) {
            l.push(t);
          },
          getElements: function (t) {
            return "function" == typeof t && t._elements instanceof i
              ? t._elements
              : null;
          },
          clear: function () {
            Y(u).forEach(a);
          },
        };
      }
      function v(t) {
        for (var e = U.allocType(5123, t.length), n = 0; n < t.length; ++n)
          if (isNaN(t[n])) e[n] = 65535;
          else if (1 / 0 === t[n]) e[n] = 31744;
          else if (-1 / 0 === t[n]) e[n] = 64512;
          else {
            rt[0] = t[n];
            var r = ((o = it[0]) >>> 31) << 15,
              i = ((o << 1) >>> 24) - 127,
              o = (o >> 13) & 1023;
            e[n] =
              -24 > i
                ? r
                : -14 > i
                ? r + ((o + 1024) >> (-14 - i))
                : 15 < i
                ? r + 31744
                : r + ((i + 15) << 10) + o;
          }
        return e;
      }
      function g(t) {
        return Array.isArray(t) || $(t);
      }
      function m(t) {
        return "[object " + t + "]";
      }
      function y(t) {
        return Array.isArray(t) && (0 === t.length || "number" == typeof t[0]);
      }
      function b(t) {
        return !(!Array.isArray(t) || 0 === t.length || !g(t[0]));
      }
      function x(t) {
        return Object.prototype.toString.call(t);
      }
      function w(t) {
        if (!t) return !1;
        var e = x(t);
        return 0 <= ht.indexOf(e) || y(t) || b(t) || c(t);
      }
      function _(t, e) {
        36193 === t.type ? ((t.data = v(e)), U.freeType(e)) : (t.data = e);
      }
      function O(t, e, n, r, i, o) {
        if (
          ((t = void 0 !== gt[t] ? gt[t] : ut[t] * vt[e]), o && (t *= 6), i)
        ) {
          for (r = 0; 1 <= n; ) (r += t * n * n), (n /= 2);
          return r;
        }
        return t * n * r;
      }
      function A(t, e, n, r, i, o, a) {
        function u() {
          (this.format = this.internalformat = 6408),
            (this.type = 5121),
            (this.flipY = this.premultiplyAlpha = this.compressed = !1),
            (this.unpackAlignment = 1),
            (this.colorSpace = 37444),
            (this.channels = this.height = this.width = 0);
        }
        function s(t, e) {
          (t.internalformat = e.internalformat),
            (t.format = e.format),
            (t.type = e.type),
            (t.compressed = e.compressed),
            (t.premultiplyAlpha = e.premultiplyAlpha),
            (t.flipY = e.flipY),
            (t.unpackAlignment = e.unpackAlignment),
            (t.colorSpace = e.colorSpace),
            (t.width = e.width),
            (t.height = e.height),
            (t.channels = e.channels);
        }
        function f(t, e) {
          if ("object" == typeof e && e) {
            "premultiplyAlpha" in e &&
              (t.premultiplyAlpha = e.premultiplyAlpha),
              "flipY" in e && (t.flipY = e.flipY),
              "alignment" in e && (t.unpackAlignment = e.alignment),
              "colorSpace" in e && (t.colorSpace = H[e.colorSpace]),
              "type" in e && (t.type = W[e.type]);
            var n = t.width,
              r = t.height,
              i = t.channels,
              o = !1;
            "shape" in e
              ? ((n = e.shape[0]),
                (r = e.shape[1]),
                3 === e.shape.length && ((i = e.shape[2]), (o = !0)))
              : ("radius" in e && (n = r = e.radius),
                "width" in e && (n = e.width),
                "height" in e && (r = e.height),
                "channels" in e && ((i = e.channels), (o = !0))),
              (t.width = 0 | n),
              (t.height = 0 | r),
              (t.channels = 0 | i),
              (n = !1),
              "format" in e &&
                ((n = e.format),
                (r = t.internalformat = G[n]),
                (t.format = ht[r]),
                n in W && !("type" in e) && (t.type = W[n]),
                n in J && (t.compressed = !0),
                (n = !0)),
              !o && n
                ? (t.channels = ut[t.format])
                : o &&
                  !n &&
                  t.channels !== at[t.format] &&
                  (t.format = t.internalformat = at[t.channels]);
          }
        }
        function l(e) {
          t.pixelStorei(37440, e.flipY),
            t.pixelStorei(37441, e.premultiplyAlpha),
            t.pixelStorei(37443, e.colorSpace),
            t.pixelStorei(3317, e.unpackAlignment);
        }
        function d() {
          u.call(this),
            (this.yOffset = this.xOffset = 0),
            (this.data = null),
            (this.needsFree = !1),
            (this.element = null),
            (this.needsCopy = !1);
        }
        function p(t, e) {
          var n = null;
          if (
            (w(e)
              ? (n = e)
              : e &&
                (f(t, e),
                "x" in e && (t.xOffset = 0 | e.x),
                "y" in e && (t.yOffset = 0 | e.y),
                w(e.data) && (n = e.data)),
            e.copy)
          ) {
            var r = i.viewportWidth,
              o = i.viewportHeight;
            (t.width = t.width || r - t.xOffset),
              (t.height = t.height || o - t.yOffset),
              (t.needsCopy = !0);
          } else if (n) {
            if ($(n))
              (t.channels = t.channels || 4),
                (t.data = n),
                "type" in e ||
                  5121 !== t.type ||
                  (t.type = 0 | X[Object.prototype.toString.call(n)]);
            else if (y(n)) {
              switch (
                ((t.channels = t.channels || 4), (o = (r = n).length), t.type)
              ) {
                case 5121:
                case 5123:
                case 5125:
                case 5126:
                  (o = U.allocType(t.type, o)).set(r), (t.data = o);
                  break;
                case 36193:
                  t.data = v(r);
              }
              (t.alignment = 1), (t.needsFree = !0);
            } else if (c(n)) {
              (r = n.data),
                Array.isArray(r) ||
                  5121 !== t.type ||
                  (t.type = 0 | X[Object.prototype.toString.call(r)]),
                (o = n.shape);
              var a,
                u,
                s,
                l,
                d = n.stride;
              3 === o.length ? ((s = o[2]), (l = d[2])) : (l = s = 1),
                (a = o[0]),
                (u = o[1]),
                (o = d[0]),
                (d = d[1]),
                (t.alignment = 1),
                (t.width = a),
                (t.height = u),
                (t.channels = s),
                (t.format = t.internalformat = at[s]),
                (t.needsFree = !0),
                (a = l),
                (n = n.offset),
                (s = t.width),
                (l = t.height),
                (u = t.channels);
              for (
                var p = U.allocType(
                    36193 === t.type ? 5126 : t.type,
                    s * l * u
                  ),
                  h = 0,
                  m = 0;
                m < l;
                ++m
              )
                for (var O = 0; O < s; ++O)
                  for (var A = 0; A < u; ++A)
                    p[h++] = r[o * O + d * m + a * A + n];
              _(t, p);
            } else if (x(n) === ct || x(n) === st || x(n) === ft)
              x(n) === ct || x(n) === st
                ? (t.element = n)
                : (t.element = n.canvas),
                (t.width = t.element.width),
                (t.height = t.element.height),
                (t.channels = 4);
            else if (x(n) === lt)
              (t.element = n),
                (t.width = n.width),
                (t.height = n.height),
                (t.channels = 4);
            else if (x(n) === dt)
              (t.element = n),
                (t.width = n.naturalWidth),
                (t.height = n.naturalHeight),
                (t.channels = 4);
            else if (x(n) === pt)
              (t.element = n),
                (t.width = n.videoWidth),
                (t.height = n.videoHeight),
                (t.channels = 4);
            else if (b(n)) {
              for (
                r = t.width || n[0].length,
                  o = t.height || n.length,
                  d = t.channels,
                  d = g(n[0][0]) ? d || n[0][0].length : d || 1,
                  a = Q.shape(n),
                  s = 1,
                  l = 0;
                l < a.length;
                ++l
              )
                s *= a[l];
              (s = U.allocType(36193 === t.type ? 5126 : t.type, s)),
                Q.flatten(n, a, "", s),
                _(t, s),
                (t.alignment = 1),
                (t.width = r),
                (t.height = o),
                (t.channels = d),
                (t.format = t.internalformat = at[d]),
                (t.needsFree = !0);
            }
          } else
            (t.width = t.width || 1),
              (t.height = t.height || 1),
              (t.channels = t.channels || 4);
        }
        function h(e, n, i, o, a) {
          var u = e.element,
            c = e.data,
            s = e.internalformat,
            f = e.format,
            d = e.type,
            p = e.width,
            h = e.height;
          l(e),
            u
              ? t.texSubImage2D(n, a, i, o, f, d, u)
              : e.compressed
              ? t.compressedTexSubImage2D(n, a, i, o, s, p, h, c)
              : e.needsCopy
              ? (r(),
                t.copyTexSubImage2D(n, a, i, o, e.xOffset, e.yOffset, p, h))
              : t.texSubImage2D(n, a, i, o, p, h, f, d, c);
        }
        function m() {
          return vt.pop() || new d();
        }
        function A(t) {
          t.needsFree && U.freeType(t.data), d.call(t), vt.push(t);
        }
        function E() {
          u.call(this),
            (this.genMipmaps = !1),
            (this.mipmapHint = 4352),
            (this.mipmask = 0),
            (this.images = Array(16));
        }
        function j(t, e, n) {
          var r = (t.images[0] = m());
          (t.mipmask = 1),
            (r.width = t.width = e),
            (r.height = t.height = n),
            (r.channels = t.channels = 4);
        }
        function S(t, e) {
          var n = null;
          if (w(e)) s((n = t.images[0] = m()), t), p(n, e), (t.mipmask = 1);
          else if ((f(t, e), Array.isArray(e.mipmap)))
            for (var r = e.mipmap, i = 0; i < r.length; ++i)
              s((n = t.images[i] = m()), t),
                (n.width >>= i),
                (n.height >>= i),
                p(n, r[i]),
                (t.mipmask |= 1 << i);
          else s((n = t.images[0] = m()), t), p(n, e), (t.mipmask = 1);
          s(t, t.images[0]);
        }
        function k(e, n) {
          for (var i = e.images, o = 0; o < i.length && i[o]; ++o) {
            var a = i[o],
              u = n,
              c = o,
              s = a.element,
              f = a.data,
              d = a.internalformat,
              p = a.format,
              h = a.type,
              v = a.width,
              g = a.height;
            l(a),
              s
                ? t.texImage2D(u, c, p, p, h, s)
                : a.compressed
                ? t.compressedTexImage2D(u, c, d, v, g, 0, f)
                : a.needsCopy
                ? (r(),
                  t.copyTexImage2D(u, c, p, a.xOffset, a.yOffset, v, g, 0))
                : t.texImage2D(u, c, p, v, g, 0, p, h, f || null);
          }
        }
        function T() {
          var t = gt.pop() || new E();
          u.call(t);
          for (var e = (t.mipmask = 0); 16 > e; ++e) t.images[e] = null;
          return t;
        }
        function C(t) {
          for (var e = t.images, n = 0; n < e.length; ++n)
            e[n] && A(e[n]), (e[n] = null);
          gt.push(t);
        }
        function L() {
          (this.magFilter = this.minFilter = 9728),
            (this.wrapT = this.wrapS = 33071),
            (this.anisotropic = 1),
            (this.genMipmaps = !1),
            (this.mipmapHint = 4352);
        }
        function I(t, e) {
          "min" in e &&
            ((t.minFilter = V[e.min]),
            0 <= ot.indexOf(t.minFilter) &&
              !("faces" in e) &&
              (t.genMipmaps = !0)),
            "mag" in e && (t.magFilter = q[e.mag]);
          var n = t.wrapS,
            r = t.wrapT;
          if ("wrap" in e) {
            var i = e.wrap;
            "string" == typeof i
              ? (n = r = z[i])
              : Array.isArray(i) && ((n = z[i[0]]), (r = z[i[1]]));
          } else
            "wrapS" in e && (n = z[e.wrapS]), "wrapT" in e && (r = z[e.wrapT]);
          if (
            ((t.wrapS = n),
            (t.wrapT = r),
            "anisotropic" in e && (t.anisotropic = e.anisotropic),
            "mipmap" in e)
          ) {
            switch (((n = !1), typeof e.mipmap)) {
              case "string":
                (t.mipmapHint = F[e.mipmap]), (n = t.genMipmaps = !0);
                break;
              case "boolean":
                n = t.genMipmaps = e.mipmap;
                break;
              case "object":
                (t.genMipmaps = !1), (n = !0);
            }
            !n || "min" in e || (t.minFilter = 9984);
          }
        }
        function D(n, r) {
          t.texParameteri(r, 10241, n.minFilter),
            t.texParameteri(r, 10240, n.magFilter),
            t.texParameteri(r, 10242, n.wrapS),
            t.texParameteri(r, 10243, n.wrapT),
            e.ext_texture_filter_anisotropic &&
              t.texParameteri(r, 34046, n.anisotropic),
            n.genMipmaps && (t.hint(33170, n.mipmapHint), t.generateMipmap(r));
        }
        function P(e) {
          u.call(this),
            (this.mipmask = 0),
            (this.internalformat = 6408),
            (this.id = mt++),
            (this.refCount = 1),
            (this.target = e),
            (this.texture = t.createTexture()),
            (this.unit = -1),
            (this.bindCount = 0),
            (this.texInfo = new L()),
            a.profile && (this.stats = { size: 0 });
        }
        function R(e) {
          t.activeTexture(33984), t.bindTexture(e.target, e.texture);
        }
        function M() {
          var e = xt[0];
          e ? t.bindTexture(e.target, e.texture) : t.bindTexture(3553, null);
        }
        function N(e) {
          var n = e.texture,
            r = e.unit,
            i = e.target;
          0 <= r &&
            (t.activeTexture(33984 + r),
            t.bindTexture(i, null),
            (xt[r] = null)),
            t.deleteTexture(n),
            (e.texture = null),
            (e.params = null),
            (e.pixels = null),
            (e.refCount = 0),
            delete yt[e.id],
            o.textureCount--;
        }
        var F = {
            "don't care": 4352,
            "dont care": 4352,
            nice: 4354,
            fast: 4353,
          },
          z = { repeat: 10497, clamp: 33071, mirror: 33648 },
          q = { nearest: 9728, linear: 9729 },
          V = B(
            {
              mipmap: 9987,
              "nearest mipmap nearest": 9984,
              "linear mipmap nearest": 9985,
              "nearest mipmap linear": 9986,
              "linear mipmap linear": 9987,
            },
            q
          ),
          H = { none: 0, browser: 37444 },
          W = { uint8: 5121, rgba4: 32819, rgb565: 33635, "rgb5 a1": 32820 },
          G = {
            alpha: 6406,
            luminance: 6409,
            "luminance alpha": 6410,
            rgb: 6407,
            rgba: 6408,
            rgba4: 32854,
            "rgb5 a1": 32855,
            rgb565: 36194,
          },
          J = {};
        e.ext_srgb && ((G.srgb = 35904), (G.srgba = 35906)),
          e.oes_texture_float && (W.float32 = W.float = 5126),
          e.oes_texture_half_float && (W.float16 = W["half float"] = 36193),
          e.webgl_depth_texture &&
            (B(G, { depth: 6402, "depth stencil": 34041 }),
            B(W, { uint16: 5123, uint32: 5125, "depth stencil": 34042 })),
          e.webgl_compressed_texture_s3tc &&
            B(J, {
              "rgb s3tc dxt1": 33776,
              "rgba s3tc dxt1": 33777,
              "rgba s3tc dxt3": 33778,
              "rgba s3tc dxt5": 33779,
            }),
          e.webgl_compressed_texture_atc &&
            B(J, {
              "rgb atc": 35986,
              "rgba atc explicit alpha": 35987,
              "rgba atc interpolated alpha": 34798,
            }),
          e.webgl_compressed_texture_pvrtc &&
            B(J, {
              "rgb pvrtc 4bppv1": 35840,
              "rgb pvrtc 2bppv1": 35841,
              "rgba pvrtc 4bppv1": 35842,
              "rgba pvrtc 2bppv1": 35843,
            }),
          e.webgl_compressed_texture_etc1 && (J["rgb etc1"] = 36196);
        var K = Array.prototype.slice.call(t.getParameter(34467));
        Object.keys(J).forEach(function (t) {
          var e = J[t];
          0 <= K.indexOf(e) && (G[t] = e);
        });
        var Z = Object.keys(G);
        n.textureFormats = Z;
        var tt = [];
        Object.keys(G).forEach(function (t) {
          tt[G[t]] = t;
        });
        var et = [];
        Object.keys(W).forEach(function (t) {
          et[W[t]] = t;
        });
        var nt = [];
        Object.keys(q).forEach(function (t) {
          nt[q[t]] = t;
        });
        var rt = [];
        Object.keys(V).forEach(function (t) {
          rt[V[t]] = t;
        });
        var it = [];
        Object.keys(z).forEach(function (t) {
          it[z[t]] = t;
        });
        var ht = Z.reduce(function (t, n) {
            var r = G[n];
            return (
              6409 === r ||
              6406 === r ||
              6409 === r ||
              6410 === r ||
              6402 === r ||
              34041 === r ||
              (e.ext_srgb && (35904 === r || 35906 === r))
                ? (t[r] = r)
                : 32855 === r || 0 <= n.indexOf("rgba")
                ? (t[r] = 6408)
                : (t[r] = 6407),
              t
            );
          }, {}),
          vt = [],
          gt = [],
          mt = 0,
          yt = {},
          bt = n.maxTextureUnits,
          xt = Array(bt).map(function () {
            return null;
          });
        return (
          B(P.prototype, {
            bind: function () {
              this.bindCount += 1;
              var e = this.unit;
              if (0 > e) {
                for (var n = 0; n < bt; ++n) {
                  var r = xt[n];
                  if (r) {
                    if (0 < r.bindCount) continue;
                    r.unit = -1;
                  }
                  (xt[n] = this), (e = n);
                  break;
                }
                a.profile &&
                  o.maxTextureUnits < e + 1 &&
                  (o.maxTextureUnits = e + 1),
                  (this.unit = e),
                  t.activeTexture(33984 + e),
                  t.bindTexture(this.target, this.texture);
              }
              return e;
            },
            unbind: function () {
              --this.bindCount;
            },
            decRef: function () {
              0 >= --this.refCount && N(this);
            },
          }),
          a.profile &&
            (o.getTotalTextureSize = function () {
              var t = 0;
              return (
                Object.keys(yt).forEach(function (e) {
                  t += yt[e].stats.size;
                }),
                t
              );
            }),
          {
            create2D: function (e, n) {
              function r(t, e) {
                var n = i.texInfo;
                L.call(n);
                var o = T();
                return (
                  "number" == typeof t
                    ? j(o, 0 | t, "number" == typeof e ? 0 | e : 0 | t)
                    : t
                    ? (I(n, t), S(o, t))
                    : j(o, 1, 1),
                  n.genMipmaps && (o.mipmask = (o.width << 1) - 1),
                  (i.mipmask = o.mipmask),
                  s(i, o),
                  (i.internalformat = o.internalformat),
                  (r.width = o.width),
                  (r.height = o.height),
                  R(i),
                  k(o, 3553),
                  D(n, 3553),
                  M(),
                  C(o),
                  a.profile &&
                    (i.stats.size = O(
                      i.internalformat,
                      i.type,
                      o.width,
                      o.height,
                      n.genMipmaps,
                      !1
                    )),
                  (r.format = tt[i.internalformat]),
                  (r.type = et[i.type]),
                  (r.mag = nt[n.magFilter]),
                  (r.min = rt[n.minFilter]),
                  (r.wrapS = it[n.wrapS]),
                  (r.wrapT = it[n.wrapT]),
                  r
                );
              }
              var i = new P(3553);
              return (
                (yt[i.id] = i),
                o.textureCount++,
                r(e, n),
                (r.subimage = function (t, e, n, o) {
                  (e |= 0), (n |= 0), (o |= 0);
                  var a = m();
                  return (
                    s(a, i),
                    (a.width = 0),
                    (a.height = 0),
                    p(a, t),
                    (a.width = a.width || (i.width >> o) - e),
                    (a.height = a.height || (i.height >> o) - n),
                    R(i),
                    h(a, 3553, e, n, o),
                    M(),
                    A(a),
                    r
                  );
                }),
                (r.resize = function (e, n) {
                  var o = 0 | e,
                    u = 0 | n || o;
                  if (o === i.width && u === i.height) return r;
                  (r.width = i.width = o), (r.height = i.height = u), R(i);
                  for (var c = 0; i.mipmask >> c; ++c) {
                    var s = o >> c,
                      f = u >> c;
                    if (!s || !f) break;
                    t.texImage2D(
                      3553,
                      c,
                      i.format,
                      s,
                      f,
                      0,
                      i.format,
                      i.type,
                      null
                    );
                  }
                  return (
                    M(),
                    a.profile &&
                      (i.stats.size = O(
                        i.internalformat,
                        i.type,
                        o,
                        u,
                        !1,
                        !1
                      )),
                    r
                  );
                }),
                (r._reglType = "texture2d"),
                (r._texture = i),
                a.profile && (r.stats = i.stats),
                (r.destroy = function () {
                  i.decRef();
                }),
                r
              );
            },
            createCube: function (e, n, r, i, u, c) {
              function l(t, e, n, r, i, o) {
                var u,
                  c = d.texInfo;
                for (L.call(c), u = 0; 6 > u; ++u) v[u] = T();
                if ("number" != typeof t && t) {
                  if ("object" == typeof t)
                    if (e)
                      S(v[0], t),
                        S(v[1], e),
                        S(v[2], n),
                        S(v[3], r),
                        S(v[4], i),
                        S(v[5], o);
                    else if ((I(c, t), f(d, t), "faces" in t))
                      for (t = t.faces, u = 0; 6 > u; ++u)
                        s(v[u], d), S(v[u], t[u]);
                    else for (u = 0; 6 > u; ++u) S(v[u], t);
                } else for (t = 0 | t || 1, u = 0; 6 > u; ++u) j(v[u], t, t);
                for (
                  s(d, v[0]),
                    d.mipmask = c.genMipmaps
                      ? (v[0].width << 1) - 1
                      : v[0].mipmask,
                    d.internalformat = v[0].internalformat,
                    l.width = v[0].width,
                    l.height = v[0].height,
                    R(d),
                    u = 0;
                  6 > u;
                  ++u
                )
                  k(v[u], 34069 + u);
                for (
                  D(c, 34067),
                    M(),
                    a.profile &&
                      (d.stats.size = O(
                        d.internalformat,
                        d.type,
                        l.width,
                        l.height,
                        c.genMipmaps,
                        !0
                      )),
                    l.format = tt[d.internalformat],
                    l.type = et[d.type],
                    l.mag = nt[c.magFilter],
                    l.min = rt[c.minFilter],
                    l.wrapS = it[c.wrapS],
                    l.wrapT = it[c.wrapT],
                    u = 0;
                  6 > u;
                  ++u
                )
                  C(v[u]);
                return l;
              }
              var d = new P(34067);
              (yt[d.id] = d), o.cubeCount++;
              var v = Array(6);
              return (
                l(e, n, r, i, u, c),
                (l.subimage = function (t, e, n, r, i) {
                  (n |= 0), (r |= 0), (i |= 0);
                  var o = m();
                  return (
                    s(o, d),
                    (o.width = 0),
                    (o.height = 0),
                    p(o, e),
                    (o.width = o.width || (d.width >> i) - n),
                    (o.height = o.height || (d.height >> i) - r),
                    R(d),
                    h(o, 34069 + t, n, r, i),
                    M(),
                    A(o),
                    l
                  );
                }),
                (l.resize = function (e) {
                  if ((e |= 0) !== d.width) {
                    (l.width = d.width = e), (l.height = d.height = e), R(d);
                    for (var n = 0; 6 > n; ++n)
                      for (var r = 0; d.mipmask >> r; ++r)
                        t.texImage2D(
                          34069 + n,
                          r,
                          d.format,
                          e >> r,
                          e >> r,
                          0,
                          d.format,
                          d.type,
                          null
                        );
                    return (
                      M(),
                      a.profile &&
                        (d.stats.size = O(
                          d.internalformat,
                          d.type,
                          l.width,
                          l.height,
                          !1,
                          !0
                        )),
                      l
                    );
                  }
                }),
                (l._reglType = "textureCube"),
                (l._texture = d),
                a.profile && (l.stats = d.stats),
                (l.destroy = function () {
                  d.decRef();
                }),
                l
              );
            },
            clear: function () {
              for (var e = 0; e < bt; ++e)
                t.activeTexture(33984 + e),
                  t.bindTexture(3553, null),
                  (xt[e] = null);
              Y(yt).forEach(N), (o.cubeCount = 0), (o.textureCount = 0);
            },
            getTexture: function (t) {
              return null;
            },
            restore: function () {
              for (var e = 0; e < bt; ++e) {
                var n = xt[e];
                n && ((n.bindCount = 0), (n.unit = -1), (xt[e] = null));
              }
              Y(yt).forEach(function (e) {
                (e.texture = t.createTexture()),
                  t.bindTexture(e.target, e.texture);
                for (var n = 0; 32 > n; ++n)
                  if (0 != (e.mipmask & (1 << n)))
                    if (3553 === e.target)
                      t.texImage2D(
                        3553,
                        n,
                        e.internalformat,
                        e.width >> n,
                        e.height >> n,
                        0,
                        e.internalformat,
                        e.type,
                        null
                      );
                    else
                      for (var r = 0; 6 > r; ++r)
                        t.texImage2D(
                          34069 + r,
                          n,
                          e.internalformat,
                          e.width >> n,
                          e.height >> n,
                          0,
                          e.internalformat,
                          e.type,
                          null
                        );
                D(e.texInfo, e.target);
              });
            },
            refresh: function () {
              for (var e = 0; e < bt; ++e) {
                var n = xt[e];
                n && ((n.bindCount = 0), (n.unit = -1), (xt[e] = null)),
                  t.activeTexture(33984 + e),
                  t.bindTexture(3553, null),
                  t.bindTexture(34067, null);
              }
            },
          }
        );
      }
      function E(t, e, n, r, i, o) {
        function a(t, e, n) {
          (this.target = t), (this.texture = e), (this.renderbuffer = n);
          var r = (t = 0);
          e
            ? ((t = e.width), (r = e.height))
            : n && ((t = n.width), (r = n.height)),
            (this.width = t),
            (this.height = r);
        }
        function u(t) {
          t &&
            (t.texture && t.texture._texture.decRef(),
            t.renderbuffer && t.renderbuffer._renderbuffer.decRef());
        }
        function c(t, e, n) {
          t &&
            (t.texture
              ? (t.texture._texture.refCount += 1)
              : (t.renderbuffer._renderbuffer.refCount += 1));
        }
        function s(e, n) {
          n &&
            (n.texture
              ? t.framebufferTexture2D(
                  36160,
                  e,
                  n.target,
                  n.texture._texture.texture,
                  0
                )
              : t.framebufferRenderbuffer(
                  36160,
                  e,
                  36161,
                  n.renderbuffer._renderbuffer.renderbuffer
                ));
        }
        function f(t) {
          var e = 3553,
            n = null,
            r = null,
            i = t;
          return (
            "object" == typeof t &&
              ((i = t.data), "target" in t && (e = 0 | t.target)),
            "texture2d" === (t = i._reglType)
              ? (n = i)
              : "textureCube" === t
              ? (n = i)
              : "renderbuffer" === t && ((r = i), (e = 36161)),
            new a(e, n, r)
          );
        }
        function l(t, e, n, o, u) {
          return n
            ? (((t = r.create2D({
                width: t,
                height: e,
                format: o,
                type: u,
              }))._texture.refCount = 0),
              new a(3553, t, null))
            : (((t = i.create({
                width: t,
                height: e,
                format: o,
              }))._renderbuffer.refCount = 0),
              new a(36161, null, t));
        }
        function d(t) {
          return t && (t.texture || t.renderbuffer);
        }
        function p(t, e, n) {
          t &&
            (t.texture
              ? t.texture.resize(e, n)
              : t.renderbuffer && t.renderbuffer.resize(e, n),
            (t.width = e),
            (t.height = n));
        }
        function h() {
          (this.id = O++),
            (A[this.id] = this),
            (this.framebuffer = t.createFramebuffer()),
            (this.height = this.width = 0),
            (this.colorAttachments = []),
            (this.depthStencilAttachment =
              this.stencilAttachment =
              this.depthAttachment =
                null);
        }
        function v(t) {
          t.colorAttachments.forEach(u),
            u(t.depthAttachment),
            u(t.stencilAttachment),
            u(t.depthStencilAttachment);
        }
        function g(e) {
          t.deleteFramebuffer(e.framebuffer),
            (e.framebuffer = null),
            o.framebufferCount--,
            delete A[e.id];
        }
        function m(e) {
          var r;
          t.bindFramebuffer(36160, e.framebuffer);
          var i = e.colorAttachments;
          for (r = 0; r < i.length; ++r) s(36064 + r, i[r]);
          for (r = i.length; r < n.maxColorAttachments; ++r)
            t.framebufferTexture2D(36160, 36064 + r, 3553, null, 0);
          t.framebufferTexture2D(36160, 33306, 3553, null, 0),
            t.framebufferTexture2D(36160, 36096, 3553, null, 0),
            t.framebufferTexture2D(36160, 36128, 3553, null, 0),
            s(36096, e.depthAttachment),
            s(36128, e.stencilAttachment),
            s(33306, e.depthStencilAttachment),
            t.checkFramebufferStatus(36160),
            t.isContextLost(),
            t.bindFramebuffer(36160, b.next ? b.next.framebuffer : null),
            (b.cur = b.next),
            t.getError();
        }
        function y(t, e) {
          function n(t, e) {
            var i,
              o = 0,
              a = 0,
              u = !0,
              s = !0;
            i = null;
            var p = !0,
              h = "rgba",
              g = "uint8",
              y = 1,
              b = null,
              _ = null,
              O = null,
              A = !1;
            "number" == typeof t
              ? ((o = 0 | t), (a = 0 | e || o))
              : t
              ? ("shape" in t
                  ? ((o = (a = t.shape)[0]), (a = a[1]))
                  : ("radius" in t && (o = a = t.radius),
                    "width" in t && (o = t.width),
                    "height" in t && (a = t.height)),
                ("color" in t || "colors" in t) &&
                  ((i = t.color || t.colors), Array.isArray(i)),
                i ||
                  ("colorCount" in t && (y = 0 | t.colorCount),
                  "colorTexture" in t &&
                    ((p = !!t.colorTexture), (h = "rgba4")),
                  "colorType" in t &&
                    ((g = t.colorType), !p) &&
                    ("half float" === g || "float16" === g
                      ? (h = "rgba16f")
                      : ("float" !== g && "float32" !== g) || (h = "rgba32f")),
                  "colorFormat" in t &&
                    ((h = t.colorFormat),
                    0 <= x.indexOf(h)
                      ? (p = !0)
                      : 0 <= w.indexOf(h) && (p = !1))),
                ("depthTexture" in t || "depthStencilTexture" in t) &&
                  (A = !(!t.depthTexture && !t.depthStencilTexture)),
                "depth" in t &&
                  ("boolean" == typeof t.depth
                    ? (u = t.depth)
                    : ((b = t.depth), (s = !1))),
                "stencil" in t &&
                  ("boolean" == typeof t.stencil
                    ? (s = t.stencil)
                    : ((_ = t.stencil), (u = !1))),
                "depthStencil" in t &&
                  ("boolean" == typeof t.depthStencil
                    ? (u = s = t.depthStencil)
                    : ((O = t.depthStencil), (s = u = !1))))
              : (o = a = 1);
            var E = null,
              j = null,
              S = null,
              k = null;
            if (Array.isArray(i)) E = i.map(f);
            else if (i) E = [f(i)];
            else for (E = Array(y), i = 0; i < y; ++i) E[i] = l(o, a, p, h, g);
            for (
              o = o || E[0].width,
                a = a || E[0].height,
                b ? (j = f(b)) : u && !s && (j = l(o, a, A, "depth", "uint32")),
                _
                  ? (S = f(_))
                  : s && !u && (S = l(o, a, !1, "stencil", "uint8")),
                O
                  ? (k = f(O))
                  : !b &&
                    !_ &&
                    s &&
                    u &&
                    (k = l(o, a, A, "depth stencil", "depth stencil")),
                u = null,
                i = 0;
              i < E.length;
              ++i
            )
              c(E[i]),
                E[i] &&
                  E[i].texture &&
                  ((s =
                    bt[E[i].texture._texture.format] *
                    xt[E[i].texture._texture.type]),
                  null === u && (u = s));
            return (
              c(j),
              c(S),
              c(k),
              v(r),
              (r.width = o),
              (r.height = a),
              (r.colorAttachments = E),
              (r.depthAttachment = j),
              (r.stencilAttachment = S),
              (r.depthStencilAttachment = k),
              (n.color = E.map(d)),
              (n.depth = d(j)),
              (n.stencil = d(S)),
              (n.depthStencil = d(k)),
              (n.width = r.width),
              (n.height = r.height),
              m(r),
              n
            );
          }
          var r = new h();
          return (
            o.framebufferCount++,
            n(t, e),
            B(n, {
              resize: function (t, e) {
                var i = Math.max(0 | t, 1),
                  o = Math.max(0 | e || i, 1);
                if (i === r.width && o === r.height) return n;
                for (var a = r.colorAttachments, u = 0; u < a.length; ++u)
                  p(a[u], i, o);
                return (
                  p(r.depthAttachment, i, o),
                  p(r.stencilAttachment, i, o),
                  p(r.depthStencilAttachment, i, o),
                  (r.width = n.width = i),
                  (r.height = n.height = o),
                  m(r),
                  n
                );
              },
              _reglType: "framebuffer",
              _framebuffer: r,
              destroy: function () {
                g(r), v(r);
              },
              use: function (t) {
                b.setFBO({ framebuffer: n }, t);
              },
            })
          );
        }
        var b = { cur: null, next: null, dirty: !1, setFBO: null },
          x = ["rgba"],
          w = ["rgba4", "rgb565", "rgb5 a1"];
        e.ext_srgb && w.push("srgba"),
          e.ext_color_buffer_half_float && w.push("rgba16f", "rgb16f"),
          e.webgl_color_buffer_float && w.push("rgba32f");
        var _ = ["uint8"];
        e.oes_texture_half_float && _.push("half float", "float16"),
          e.oes_texture_float && _.push("float", "float32");
        var O = 0,
          A = {};
        return B(b, {
          getFramebuffer: function (t) {
            return "function" == typeof t &&
              "framebuffer" === t._reglType &&
              (t = t._framebuffer) instanceof h
              ? t
              : null;
          },
          create: y,
          createCube: function (t) {
            function e(t) {
              var i,
                o = { color: null },
                a = 0,
                u = null;
              i = "rgba";
              var c = "uint8",
                s = 1;
              if (
                ("number" == typeof t
                  ? (a = 0 | t)
                  : t
                  ? ("shape" in t
                      ? (a = t.shape[0])
                      : ("radius" in t && (a = 0 | t.radius),
                        "width" in t
                          ? (a = 0 | t.width)
                          : "height" in t && (a = 0 | t.height)),
                    ("color" in t || "colors" in t) &&
                      ((u = t.color || t.colors), Array.isArray(u)),
                    u ||
                      ("colorCount" in t && (s = 0 | t.colorCount),
                      "colorType" in t && (c = t.colorType),
                      "colorFormat" in t && (i = t.colorFormat)),
                    "depth" in t && (o.depth = t.depth),
                    "stencil" in t && (o.stencil = t.stencil),
                    "depthStencil" in t && (o.depthStencil = t.depthStencil))
                  : (a = 1),
                u)
              )
                if (Array.isArray(u))
                  for (t = [], i = 0; i < u.length; ++i) t[i] = u[i];
                else t = [u];
              else
                for (
                  t = Array(s), u = { radius: a, format: i, type: c }, i = 0;
                  i < s;
                  ++i
                )
                  t[i] = r.createCube(u);
              for (o.color = Array(t.length), i = 0; i < t.length; ++i)
                (s = t[i]),
                  (a = a || s.width),
                  (o.color[i] = { target: 34069, data: t[i] });
              for (i = 0; 6 > i; ++i) {
                for (s = 0; s < t.length; ++s) o.color[s].target = 34069 + i;
                0 < i &&
                  ((o.depth = n[0].depth),
                  (o.stencil = n[0].stencil),
                  (o.depthStencil = n[0].depthStencil)),
                  n[i] ? n[i](o) : (n[i] = y(o));
              }
              return B(e, { width: a, height: a, color: t });
            }
            var n = Array(6);
            return (
              e(t),
              B(e, {
                faces: n,
                resize: function (t) {
                  var r = 0 | t;
                  if (r === e.width) return e;
                  var i = e.color;
                  for (t = 0; t < i.length; ++t) i[t].resize(r);
                  for (t = 0; 6 > t; ++t) n[t].resize(r);
                  return (e.width = e.height = r), e;
                },
                _reglType: "framebufferCube",
                destroy: function () {
                  n.forEach(function (t) {
                    t.destroy();
                  });
                },
              })
            );
          },
          clear: function () {
            Y(A).forEach(g);
          },
          restore: function () {
            (b.cur = null),
              (b.next = null),
              (b.dirty = !0),
              Y(A).forEach(function (e) {
                (e.framebuffer = t.createFramebuffer()), m(e);
              });
          },
        });
      }
      function j() {
        (this.w = this.z = this.y = this.x = this.state = 0),
          (this.buffer = null),
          (this.size = 0),
          (this.normalized = !1),
          (this.type = 5126),
          (this.divisor = this.stride = this.offset = 0);
      }
      function S(t, e, n, r, i, o, a) {
        function u() {
          (this.id = ++l),
            (this.attributes = []),
            (this.elements = null),
            (this.ownsElements = !1),
            (this.offset = this.count = 0),
            (this.instances = -1),
            (this.primitive = 4);
          var t = e.oes_vertex_array_object;
          (this.vao = t ? t.createVertexArrayOES() : null),
            (d[this.id] = this),
            (this.buffers = []);
        }
        var s = n.maxAttributes,
          f = Array(s);
        for (n = 0; n < s; ++n) f[n] = new j();
        var l = 0,
          d = {},
          p = {
            Record: j,
            scope: {},
            state: f,
            currentVAO: null,
            targetVAO: null,
            restore: e.oes_vertex_array_object
              ? function () {
                  e.oes_vertex_array_object &&
                    Y(d).forEach(function (t) {
                      t.refresh();
                    });
                }
              : function () {},
            createVAO: function (t) {
              function e(t) {
                var r;
                Array.isArray(t)
                  ? ((r = t),
                    n.elements && n.ownsElements && n.elements.destroy(),
                    (n.elements = null),
                    (n.ownsElements = !1),
                    (n.offset = 0),
                    (n.count = 0),
                    (n.instances = -1),
                    (n.primitive = 4))
                  : (t.elements
                      ? ((r = t.elements),
                        n.ownsElements
                          ? ("function" == typeof r &&
                            "elements" === r._reglType
                              ? n.elements.destroy()
                              : n.elements(r),
                            (n.ownsElements = !1))
                          : o.getElements(t.elements)
                          ? ((n.elements = t.elements), (n.ownsElements = !1))
                          : ((n.elements = o.create(t.elements)),
                            (n.ownsElements = !0)))
                      : ((n.elements = null), (n.ownsElements = !1)),
                    (r = t.attributes),
                    (n.offset = 0),
                    (n.count = -1),
                    (n.instances = -1),
                    (n.primitive = 4),
                    n.elements &&
                      ((n.count = n.elements._elements.vertCount),
                      (n.primitive = n.elements._elements.primType)),
                    "offset" in t && (n.offset = 0 | t.offset),
                    "count" in t && (n.count = 0 | t.count),
                    "instances" in t && (n.instances = 0 | t.instances),
                    "primitive" in t && (n.primitive = nt[t.primitive])),
                  (t = {});
                var a = n.attributes;
                a.length = r.length;
                for (var u = 0; u < r.length; ++u) {
                  var s,
                    f = r[u],
                    l = (a[u] = new j()),
                    d = f.data || f;
                  Array.isArray(d) || $(d) || c(d)
                    ? (n.buffers[u] &&
                        ((s = n.buffers[u]),
                        $(d) && s._buffer.byteLength >= d.byteLength
                          ? s.subdata(d)
                          : (s.destroy(), (n.buffers[u] = null))),
                      n.buffers[u] ||
                        (s = n.buffers[u] = i.create(f, 34962, !1, !0)),
                      (l.buffer = i.getBuffer(s)),
                      (l.size = 0 | l.buffer.dimension),
                      (l.normalized = !1),
                      (l.type = l.buffer.dtype),
                      (l.offset = 0),
                      (l.stride = 0),
                      (l.divisor = 0),
                      (l.state = 1),
                      (t[u] = 1))
                    : i.getBuffer(f)
                    ? ((l.buffer = i.getBuffer(f)),
                      (l.size = 0 | l.buffer.dimension),
                      (l.normalized = !1),
                      (l.type = l.buffer.dtype),
                      (l.offset = 0),
                      (l.stride = 0),
                      (l.divisor = 0),
                      (l.state = 1))
                    : i.getBuffer(f.buffer)
                    ? ((l.buffer = i.getBuffer(f.buffer)),
                      (l.size = 0 | (+f.size || l.buffer.dimension)),
                      (l.normalized = !!f.normalized || !1),
                      (l.type = "type" in f ? J[f.type] : l.buffer.dtype),
                      (l.offset = 0 | (f.offset || 0)),
                      (l.stride = 0 | (f.stride || 0)),
                      (l.divisor = 0 | (f.divisor || 0)),
                      (l.state = 1))
                    : "x" in f &&
                      ((l.x = +f.x || 0),
                      (l.y = +f.y || 0),
                      (l.z = +f.z || 0),
                      (l.w = +f.w || 0),
                      (l.state = 2));
                }
                for (s = 0; s < n.buffers.length; ++s)
                  !t[s] &&
                    n.buffers[s] &&
                    (n.buffers[s].destroy(), (n.buffers[s] = null));
                return n.refresh(), e;
              }
              var n = new u();
              return (
                (r.vaoCount += 1),
                (e.destroy = function () {
                  for (var t = 0; t < n.buffers.length; ++t)
                    n.buffers[t] && n.buffers[t].destroy();
                  (n.buffers.length = 0),
                    n.ownsElements &&
                      (n.elements.destroy(),
                      (n.elements = null),
                      (n.ownsElements = !1)),
                    n.destroy();
                }),
                (e._vao = n),
                (e._reglType = "vao"),
                e(t)
              );
            },
            getVAO: function (t) {
              return "function" == typeof t && t._vao ? t._vao : null;
            },
            destroyBuffer: function (e) {
              for (var n = 0; n < f.length; ++n) {
                var r = f[n];
                r.buffer === e &&
                  (t.disableVertexAttribArray(n), (r.buffer = null));
              }
            },
            setVAO: e.oes_vertex_array_object
              ? function (t) {
                  if (t !== p.currentVAO) {
                    var n = e.oes_vertex_array_object;
                    t
                      ? n.bindVertexArrayOES(t.vao)
                      : n.bindVertexArrayOES(null),
                      (p.currentVAO = t);
                  }
                }
              : function (n) {
                  if (n !== p.currentVAO) {
                    if (n) n.bindAttrs();
                    else {
                      for (
                        var r = e.angle_instanced_arrays, i = 0;
                        i < f.length;
                        ++i
                      ) {
                        var o = f[i];
                        o.buffer
                          ? (t.enableVertexAttribArray(i),
                            o.buffer.bind(),
                            t.vertexAttribPointer(
                              i,
                              o.size,
                              o.type,
                              o.normalized,
                              o.stride,
                              o.offfset
                            ),
                            r &&
                              o.divisor &&
                              r.vertexAttribDivisorANGLE(i, o.divisor))
                          : (t.disableVertexAttribArray(i),
                            t.vertexAttrib4f(i, o.x, o.y, o.z, o.w));
                      }
                      a.elements
                        ? t.bindBuffer(34963, a.elements.buffer.buffer)
                        : t.bindBuffer(34963, null);
                    }
                    p.currentVAO = n;
                  }
                },
            clear: e.oes_vertex_array_object
              ? function () {
                  Y(d).forEach(function (t) {
                    t.destroy();
                  });
                }
              : function () {},
          };
        return (
          (u.prototype.bindAttrs = function () {
            for (
              var n = e.angle_instanced_arrays, r = this.attributes, i = 0;
              i < r.length;
              ++i
            ) {
              var a = r[i];
              a.buffer
                ? (t.enableVertexAttribArray(i),
                  t.bindBuffer(34962, a.buffer.buffer),
                  t.vertexAttribPointer(
                    i,
                    a.size,
                    a.type,
                    a.normalized,
                    a.stride,
                    a.offset
                  ),
                  n && a.divisor && n.vertexAttribDivisorANGLE(i, a.divisor))
                : (t.disableVertexAttribArray(i),
                  t.vertexAttrib4f(i, a.x, a.y, a.z, a.w));
            }
            for (n = r.length; n < s; ++n) t.disableVertexAttribArray(n);
            (n = o.getElements(this.elements))
              ? t.bindBuffer(34963, n.buffer.buffer)
              : t.bindBuffer(34963, null);
          }),
          (u.prototype.refresh = function () {
            var t = e.oes_vertex_array_object;
            t &&
              (t.bindVertexArrayOES(this.vao),
              this.bindAttrs(),
              (p.currentVAO = this));
          }),
          (u.prototype.destroy = function () {
            if (this.vao) {
              var t = e.oes_vertex_array_object;
              this === p.currentVAO &&
                ((p.currentVAO = null), t.bindVertexArrayOES(null)),
                t.deleteVertexArrayOES(this.vao),
                (this.vao = null);
            }
            this.ownsElements &&
              (this.elements.destroy(),
              (this.elements = null),
              (this.ownsElements = !1)),
              d[this.id] && (delete d[this.id], --r.vaoCount);
          }),
          p
        );
      }
      function k(t, e, n, r) {
        function i(t, e, n, r) {
          (this.name = t), (this.id = e), (this.location = n), (this.info = r);
        }
        function o(t, e) {
          for (var n = 0; n < t.length; ++n)
            if (t[n].id === e.id) return void (t[n].location = e.location);
          t.push(e);
        }
        function a(n, r, i) {
          if (!(a = (i = 35632 === n ? s : f)[r])) {
            var o = e.str(r),
              a = t.createShader(n);
            t.shaderSource(a, o), t.compileShader(a), (i[r] = a);
          }
          return a;
        }
        function u(t, e) {
          (this.id = p++),
            (this.fragId = t),
            (this.vertId = e),
            (this.program = null),
            (this.uniforms = []),
            (this.attributes = []),
            (this.refCount = 1),
            r.profile &&
              (this.stats = { uniformsCount: 0, attributesCount: 0 });
        }
        function c(n, u, c) {
          var s;
          s = a(35632, n.fragId);
          var f = a(35633, n.vertId);
          if (
            ((u = n.program = t.createProgram()),
            t.attachShader(u, s),
            t.attachShader(u, f),
            c)
          )
            for (s = 0; s < c.length; ++s)
              (f = c[s]), t.bindAttribLocation(u, f[0], f[1]);
          t.linkProgram(u),
            (f = t.getProgramParameter(u, 35718)),
            r.profile && (n.stats.uniformsCount = f);
          var l = n.uniforms;
          for (s = 0; s < f; ++s)
            if ((c = t.getActiveUniform(u, s)))
              if (1 < c.size)
                for (var d = 0; d < c.size; ++d) {
                  var p = c.name.replace("[0]", "[" + d + "]");
                  o(l, new i(p, e.id(p), t.getUniformLocation(u, p), c));
                }
              else
                o(
                  l,
                  new i(
                    c.name,
                    e.id(c.name),
                    t.getUniformLocation(u, c.name),
                    c
                  )
                );
          for (
            f = t.getProgramParameter(u, 35721),
              r.profile && (n.stats.attributesCount = f),
              n = n.attributes,
              s = 0;
            s < f;
            ++s
          )
            (c = t.getActiveAttrib(u, s)) &&
              o(
                n,
                new i(c.name, e.id(c.name), t.getAttribLocation(u, c.name), c)
              );
        }
        var s = {},
          f = {},
          l = {},
          d = [],
          p = 0;
        return (
          r.profile &&
            ((n.getMaxUniformsCount = function () {
              var t = 0;
              return (
                d.forEach(function (e) {
                  e.stats.uniformsCount > t && (t = e.stats.uniformsCount);
                }),
                t
              );
            }),
            (n.getMaxAttributesCount = function () {
              var t = 0;
              return (
                d.forEach(function (e) {
                  e.stats.attributesCount > t && (t = e.stats.attributesCount);
                }),
                t
              );
            })),
          {
            clear: function () {
              var e = t.deleteShader.bind(t);
              Y(s).forEach(e),
                (s = {}),
                Y(f).forEach(e),
                (f = {}),
                d.forEach(function (e) {
                  t.deleteProgram(e.program);
                }),
                (d.length = 0),
                (l = {}),
                (n.shaderCount = 0);
            },
            program: function (e, r, i, o) {
              var a = l[r];
              a || (a = l[r] = {});
              var p = a[e];
              if (p && (p.refCount++, !o)) return p;
              var h = new u(r, e);
              return (
                n.shaderCount++,
                c(h, i, o),
                p || (a[e] = h),
                d.push(h),
                B(h, {
                  destroy: function () {
                    if ((h.refCount--, 0 >= h.refCount)) {
                      t.deleteProgram(h.program);
                      var e = d.indexOf(h);
                      d.splice(e, 1), n.shaderCount--;
                    }
                    0 >= a[h.vertId].refCount &&
                      (t.deleteShader(f[h.vertId]),
                      delete f[h.vertId],
                      delete l[h.fragId][h.vertId]),
                      Object.keys(l[h.fragId]).length ||
                        (t.deleteShader(s[h.fragId]),
                        delete s[h.fragId],
                        delete l[h.fragId]);
                  },
                })
              );
            },
            restore: function () {
              (s = {}), (f = {});
              for (var t = 0; t < d.length; ++t)
                c(
                  d[t],
                  null,
                  d[t].attributes.map(function (t) {
                    return [t.location, t.name];
                  })
                );
            },
            shader: a,
            frag: -1,
            vert: -1,
          }
        );
      }
      function T(t, e, n, r, i, o, a) {
        function u(i) {
          var o;
          o =
            null === e.next
              ? 5121
              : e.next.colorAttachments[0].texture._texture.type;
          var a = 0,
            u = 0,
            c = r.framebufferWidth,
            s = r.framebufferHeight,
            f = null;
          return (
            $(i)
              ? (f = i)
              : i &&
                ((a = 0 | i.x),
                (u = 0 | i.y),
                (c = 0 | (i.width || r.framebufferWidth - a)),
                (s = 0 | (i.height || r.framebufferHeight - u)),
                (f = i.data || null)),
            n(),
            (i = c * s * 4),
            f ||
              (5121 === o
                ? (f = new Uint8Array(i))
                : 5126 === o && (f = f || new Float32Array(i))),
            t.pixelStorei(3333, 4),
            t.readPixels(a, u, c, s, 6408, o, f),
            f
          );
        }
        return function (t) {
          return t && "framebuffer" in t
            ? (function (t) {
                var n;
                return (
                  e.setFBO({ framebuffer: t.framebuffer }, function () {
                    n = u(t);
                  }),
                  n
                );
              })(t)
            : u(t);
        };
      }
      function C(t) {
        return Array.prototype.slice.call(t);
      }
      function L(t) {
        return C(t).join("");
      }
      function I(t) {
        return Array.isArray(t) || $(t) || c(t);
      }
      function D(t) {
        return t.sort(function (t, e) {
          return "viewport" === t ? -1 : "viewport" === e ? 1 : t < e ? -1 : 1;
        });
      }
      function P(t, e, n, r) {
        (this.thisDep = t),
          (this.contextDep = e),
          (this.propDep = n),
          (this.append = r);
      }
      function R(t) {
        return t && !(t.thisDep || t.contextDep || t.propDep);
      }
      function M(t) {
        return new P(!1, !1, !1, t);
      }
      function N(t, e) {
        var n = t.type;
        if (0 === n) return new P(!0, 1 <= (n = t.data.length), 2 <= n, e);
        if (4 === n)
          return new P((n = t.data).thisDep, n.contextDep, n.propDep, e);
        if (5 === n) return new P(!1, !1, !1, e);
        if (6 === n) {
          for (var r = (n = !1), i = !1, o = 0; o < t.data.length; ++o) {
            var a = t.data[o];
            1 === a.type
              ? (i = !0)
              : 2 === a.type
              ? (r = !0)
              : 3 === a.type
              ? (n = !0)
              : 0 === a.type
              ? ((n = !0), 1 <= (a = a.data) && (r = !0), 2 <= a && (i = !0))
              : 4 === a.type &&
                ((n = n || a.data.thisDep),
                (r = r || a.data.contextDep),
                (i = i || a.data.propDep));
          }
          return new P(n, r, i, e);
        }
        return new P(3 === n, 2 === n, 1 === n, e);
      }
      function F(t, e, n, r, i, a, u, c, s, f, l, d, p, h, v) {
        function m(t) {
          return t.replace(".", "_");
        }
        function y(t, e, n) {
          var r = m(t);
          at.push(t), (ot[r] = it[r] = !!n), (ut[r] = e);
        }
        function b(t, e, n) {
          var r = m(t);
          at.push(t),
            Array.isArray(n)
              ? ((it[r] = n.slice()), (ot[r] = n.slice()))
              : (it[r] = ot[r] = n),
            (ct[r] = e);
        }
        function x() {
          var t = (function () {
              function t() {
                var t = [],
                  e = [];
                return B(
                  function () {
                    t.push.apply(t, C(arguments));
                  },
                  {
                    def: function () {
                      var r = "v" + n++;
                      return (
                        e.push(r),
                        0 < arguments.length &&
                          (t.push(r, "="),
                          t.push.apply(t, C(arguments)),
                          t.push(";")),
                        r
                      );
                    },
                    toString: function () {
                      return L([
                        0 < e.length ? "var " + e.join(",") + ";" : "",
                        L(t),
                      ]);
                    },
                  }
                );
              }
              function e() {
                function e(t, e) {
                  r(t, e, "=", n.def(t, e), ";");
                }
                var n = t(),
                  r = t(),
                  i = n.toString,
                  o = r.toString;
                return B(
                  function () {
                    n.apply(n, C(arguments));
                  },
                  {
                    def: n.def,
                    entry: n,
                    exit: r,
                    save: e,
                    set: function (t, r, i) {
                      e(t, r), n(t, r, "=", i, ";");
                    },
                    toString: function () {
                      return i() + o();
                    },
                  }
                );
              }
              var n = 0,
                r = [],
                i = [],
                o = t(),
                a = {};
              return {
                global: o,
                link: function (t) {
                  for (var e = 0; e < i.length; ++e)
                    if (i[e] === t) return r[e];
                  return (e = "g" + n++), r.push(e), i.push(t), e;
                },
                block: t,
                proc: function (t, n) {
                  function r() {
                    var t = "a" + i.length;
                    return i.push(t), t;
                  }
                  var i = [];
                  n = n || 0;
                  for (var o = 0; o < n; ++o) r();
                  var u = (o = e()).toString;
                  return (a[t] = B(o, {
                    arg: r,
                    toString: function () {
                      return L(["function(", i.join(), "){", u(), "}"]);
                    },
                  }));
                },
                scope: e,
                cond: function () {
                  var t = L(arguments),
                    n = e(),
                    r = e(),
                    i = n.toString,
                    o = r.toString;
                  return B(n, {
                    then: function () {
                      return n.apply(n, C(arguments)), this;
                    },
                    else: function () {
                      return r.apply(r, C(arguments)), this;
                    },
                    toString: function () {
                      var e = o();
                      return (
                        e && (e = "else{" + e + "}"),
                        L(["if(", t, "){", i(), "}", e])
                      );
                    },
                  });
                },
                compile: function () {
                  var t = ['"use strict";', o, "return {"];
                  Object.keys(a).forEach(function (e) {
                    t.push('"', e, '":', a[e].toString(), ",");
                  }),
                    t.push("}");
                  var e = L(t)
                    .replace(/;/g, ";\n")
                    .replace(/}/g, "}\n")
                    .replace(/{/g, "{\n");
                  return Function.apply(null, r.concat(e)).apply(null, i);
                },
              };
            })(),
            n = t.link,
            r = t.global;
          (t.id = lt++), (t.batchId = "0");
          var i = n(st),
            o = (t.shared = { props: "a0" });
          Object.keys(st).forEach(function (t) {
            o[t] = r.def(i, ".", t);
          });
          var a = (t.next = {}),
            u = (t.current = {});
          Object.keys(ct).forEach(function (t) {
            Array.isArray(it[t]) &&
              ((a[t] = r.def(o.next, ".", t)),
              (u[t] = r.def(o.current, ".", t)));
          });
          var c = (t.constants = {});
          Object.keys(ft).forEach(function (t) {
            c[t] = r.def(JSON.stringify(ft[t]));
          }),
            (t.invoke = function (e, r) {
              switch (r.type) {
                case 0:
                  var i = ["this", o.context, o.props, t.batchId];
                  return e.def(
                    n(r.data),
                    ".call(",
                    i.slice(0, Math.max(r.data.length + 1, 4)),
                    ")"
                  );
                case 1:
                  return e.def(o.props, r.data);
                case 2:
                  return e.def(o.context, r.data);
                case 3:
                  return e.def("this", r.data);
                case 4:
                  return r.data.append(t, e), r.data.ref;
                case 5:
                  return r.data.toString();
                case 6:
                  return r.data.map(function (n) {
                    return t.invoke(e, n);
                  });
              }
            }),
            (t.attribCache = {});
          var s = {};
          return (
            (t.scopeAttrib = function (t) {
              if ((t = e.id(t)) in s) return s[t];
              var r = f.scope[t];
              return r || (r = f.scope[t] = new K()), (s[t] = n(r));
            }),
            t
          );
        }
        function w(t, e) {
          var n = t.static,
            r = t.dynamic;
          if ("framebuffer" in n) {
            var i = n.framebuffer;
            return i
              ? ((i = c.getFramebuffer(i)),
                M(function (t, e) {
                  var n = t.link(i),
                    r = t.shared;
                  return (
                    e.set(r.framebuffer, ".next", n),
                    (r = r.context),
                    e.set(r, ".framebufferWidth", n + ".width"),
                    e.set(r, ".framebufferHeight", n + ".height"),
                    n
                  );
                }))
              : M(function (t, e) {
                  var n = t.shared;
                  return (
                    e.set(n.framebuffer, ".next", "null"),
                    (n = n.context),
                    e.set(n, ".framebufferWidth", n + ".drawingBufferWidth"),
                    e.set(n, ".framebufferHeight", n + ".drawingBufferHeight"),
                    "null"
                  );
                });
          }
          if ("framebuffer" in r) {
            var o = r.framebuffer;
            return N(o, function (t, e) {
              var n = t.invoke(e, o),
                r = t.shared,
                i = r.framebuffer;
              return (
                (n = e.def(i, ".getFramebuffer(", n, ")")),
                e.set(i, ".next", n),
                (r = r.context),
                e.set(
                  r,
                  ".framebufferWidth",
                  n + "?" + n + ".width:" + r + ".drawingBufferWidth"
                ),
                e.set(
                  r,
                  ".framebufferHeight",
                  n + "?" + n + ".height:" + r + ".drawingBufferHeight"
                ),
                n
              );
            });
          }
          return null;
        }
        function _(t, n, r) {
          function i(t) {
            if (t in o) {
              var n = e.id(o[t]);
              return (
                ((t = M(function () {
                  return n;
                })).id = n),
                t
              );
            }
            if (t in a) {
              var r = a[t];
              return N(r, function (t, e) {
                var n = t.invoke(e, r);
                return e.def(t.shared.strings, ".id(", n, ")");
              });
            }
            return null;
          }
          var o = t.static,
            a = t.dynamic,
            u = i("frag"),
            c = i("vert"),
            s = null;
          return (
            R(u) && R(c)
              ? ((s = l.program(c.id, u.id, null, r)),
                (t = M(function (t, e) {
                  return t.link(s);
                })))
              : (t = new P(
                  (u && u.thisDep) || (c && c.thisDep),
                  (u && u.contextDep) || (c && c.contextDep),
                  (u && u.propDep) || (c && c.propDep),
                  function (t, e) {
                    var n,
                      r,
                      i = t.shared.shader;
                    return (
                      (n = u ? u.append(t, e) : e.def(i, ".", "frag")),
                      (r = c ? c.append(t, e) : e.def(i, ".", "vert")),
                      e.def(i + ".program(" + r + "," + n + ")")
                    );
                  }
                )),
            { frag: u, vert: c, progVar: t, program: s }
          );
        }
        function O(t, e) {
          function n(t, e) {
            if (t in r) {
              var n = 0 | r[t];
              return (
                e ? (o.offset = n) : (o.instances = n),
                M(function (t, r) {
                  return e && (t.OFFSET = n), n;
                })
              );
            }
            if (t in i) {
              var a = i[t];
              return N(a, function (t, n) {
                var r = t.invoke(n, a);
                return e && (t.OFFSET = r), r;
              });
            }
            if (e) {
              if (s)
                return M(function (t, e) {
                  return (t.OFFSET = 0);
                });
              if (u)
                return new P(c.thisDep, c.contextDep, c.propDep, function (
                  t,
                  e
                ) {
                  return e.def(
                    t.shared.vao +
                      ".currentVAO?" +
                      t.shared.vao +
                      ".currentVAO.offset:0"
                  );
                });
            } else if (u)
              return new P(c.thisDep, c.contextDep, c.propDep, function (t, e) {
                return e.def(
                  t.shared.vao +
                    ".currentVAO?" +
                    t.shared.vao +
                    ".currentVAO.instances:-1"
                );
              });
            return null;
          }
          var r = t.static,
            i = t.dynamic,
            o = {},
            u = !1,
            c = (function () {
              if ("vao" in r) {
                var t = r.vao;
                return (
                  null !== t && null === f.getVAO(t) && (t = f.createVAO(t)),
                  (u = !0),
                  (o.vao = t),
                  M(function (e) {
                    var n = f.getVAO(t);
                    return n ? e.link(n) : "null";
                  })
                );
              }
              if ("vao" in i) {
                u = !0;
                var e = i.vao;
                return N(e, function (t, n) {
                  var r = t.invoke(n, e);
                  return n.def(t.shared.vao + ".getVAO(" + r + ")");
                });
              }
              return null;
            })(),
            s = !1,
            l = (function () {
              if ("elements" in r) {
                var t = r.elements;
                if (((o.elements = t), I(t))) {
                  var e = (o.elements = a.create(t, !0));
                  (t = a.getElements(e)), (s = !0);
                } else t && ((t = a.getElements(t)), (s = !0));
                return (
                  ((e = M(function (e, n) {
                    if (t) {
                      var r = e.link(t);
                      return (e.ELEMENTS = r);
                    }
                    return (e.ELEMENTS = null);
                  })).value = t),
                  e
                );
              }
              if ("elements" in i) {
                s = !0;
                var n = i.elements;
                return N(n, function (t, e) {
                  var r = (i = t.shared).isBufferArgs,
                    i = i.elements,
                    o = t.invoke(e, n),
                    a = e.def("null");
                  return (
                    (r = e.def(r, "(", o, ")")),
                    (o = t
                      .cond(r)
                      .then(a, "=", i, ".createStream(", o, ");")
                      .else(a, "=", i, ".getElements(", o, ");")),
                    e.entry(o),
                    e.exit(t.cond(r).then(i, ".destroyStream(", a, ");")),
                    (t.ELEMENTS = a)
                  );
                });
              }
              return u
                ? new P(c.thisDep, c.contextDep, c.propDep, function (t, e) {
                    return e.def(
                      t.shared.vao +
                        ".currentVAO?" +
                        t.shared.elements +
                        ".getElements(" +
                        t.shared.vao +
                        ".currentVAO.elements):null"
                    );
                  })
                : null;
            })();
          s &&
            (c = M(function () {
              return "null";
            }));
          var d = n("offset", !0),
            p = (function () {
              if ("primitive" in r) {
                var t = r.primitive;
                return (
                  (o.primitive = t),
                  M(function (e, n) {
                    return nt[t];
                  })
                );
              }
              if ("primitive" in i) {
                var e = i.primitive;
                return N(e, function (t, n) {
                  var r = t.constants.primTypes,
                    i = t.invoke(n, e);
                  return n.def(r, "[", i, "]");
                });
              }
              return s
                ? R(l)
                  ? l.value
                    ? M(function (t, e) {
                        return e.def(t.ELEMENTS, ".primType");
                      })
                    : M(function () {
                        return 4;
                      })
                  : new P(l.thisDep, l.contextDep, l.propDep, function (t, e) {
                      var n = t.ELEMENTS;
                      return e.def(n, "?", n, ".primType:", 4);
                    })
                : u
                ? new P(c.thisDep, c.contextDep, c.propDep, function (t, e) {
                    return e.def(
                      t.shared.vao +
                        ".currentVAO?" +
                        t.shared.vao +
                        ".currentVAO.primitive:4"
                    );
                  })
                : null;
            })(),
            h = (function () {
              if ("count" in r) {
                var t = 0 | r.count;
                return (
                  (o.count = t),
                  M(function () {
                    return t;
                  })
                );
              }
              if ("count" in i) {
                var e = i.count;
                return N(e, function (t, n) {
                  return t.invoke(n, e);
                });
              }
              return s
                ? R(l)
                  ? l
                    ? d
                      ? new P(d.thisDep, d.contextDep, d.propDep, function (
                          t,
                          e
                        ) {
                          return e.def(t.ELEMENTS, ".vertCount-", t.OFFSET);
                        })
                      : M(function (t, e) {
                          return e.def(t.ELEMENTS, ".vertCount");
                        })
                    : M(function () {
                        return -1;
                      })
                  : new P(
                      l.thisDep || d.thisDep,
                      l.contextDep || d.contextDep,
                      l.propDep || d.propDep,
                      function (t, e) {
                        var n = t.ELEMENTS;
                        return t.OFFSET
                          ? e.def(n, "?", n, ".vertCount-", t.OFFSET, ":-1")
                          : e.def(n, "?", n, ".vertCount:-1");
                      }
                    )
                : u
                ? new P(c.thisDep, c.contextDep, c.propDep, function (t, e) {
                    return e.def(
                      t.shared.vao,
                      ".currentVAO?",
                      t.shared.vao,
                      ".currentVAO.count:-1"
                    );
                  })
                : null;
            })(),
            v = n("instances", !1);
          return {
            elements: l,
            primitive: p,
            count: h,
            instances: v,
            offset: d,
            vao: c,
            vaoActive: u,
            elementsActive: s,
            static: o,
          };
        }
        function A(t, n) {
          var r = t.static,
            o = t.dynamic,
            a = {};
          return (
            Object.keys(r).forEach(function (t) {
              var n = r[t],
                o = e.id(t),
                u = new K();
              if (I(n))
                (u.state = 1),
                  (u.buffer = i.getBuffer(i.create(n, 34962, !1, !0))),
                  (u.type = 0);
              else if ((s = i.getBuffer(n)))
                (u.state = 1), (u.buffer = s), (u.type = 0);
              else if ("constant" in n) {
                var c = n.constant;
                (u.buffer = "null"),
                  (u.state = 2),
                  "number" == typeof c
                    ? (u.x = c)
                    : wt.forEach(function (t, e) {
                        e < c.length && (u[t] = c[e]);
                      });
              } else {
                var s = I(n.buffer)
                    ? i.getBuffer(i.create(n.buffer, 34962, !1, !0))
                    : i.getBuffer(n.buffer),
                  f = 0 | n.offset,
                  l = 0 | n.stride,
                  d = 0 | n.size,
                  p = !!n.normalized,
                  h = 0;
                "type" in n && (h = J[n.type]),
                  (n = 0 | n.divisor),
                  (u.buffer = s),
                  (u.state = 1),
                  (u.size = d),
                  (u.normalized = p),
                  (u.type = h || s.dtype),
                  (u.offset = f),
                  (u.stride = l),
                  (u.divisor = n);
              }
              a[t] = M(function (t, e) {
                var n = t.attribCache;
                if (o in n) return n[o];
                var r = { isStream: !1 };
                return (
                  Object.keys(u).forEach(function (t) {
                    r[t] = u[t];
                  }),
                  u.buffer &&
                    ((r.buffer = t.link(u.buffer)),
                    (r.type = r.type || r.buffer + ".dtype")),
                  (n[o] = r)
                );
              });
            }),
            Object.keys(o).forEach(function (t) {
              var e = o[t];
              a[t] = N(e, function (t, n) {
                function r(t) {
                  n(c[t], "=", i, ".", t, "|0;");
                }
                var i = t.invoke(n, e),
                  o = t.shared,
                  a = t.constants,
                  u = o.isBufferArgs,
                  c = ((o = o.buffer), { isStream: n.def(!1) }),
                  s = new K();
                (s.state = 1),
                  Object.keys(s).forEach(function (t) {
                    c[t] = n.def("" + s[t]);
                  });
                var f = c.buffer,
                  l = c.type;
                return (
                  n(
                    "if(",
                    u,
                    "(",
                    i,
                    ")){",
                    c.isStream,
                    "=true;",
                    f,
                    "=",
                    o,
                    ".createStream(",
                    34962,
                    ",",
                    i,
                    ");",
                    l,
                    "=",
                    f,
                    ".dtype;",
                    "}else{",
                    f,
                    "=",
                    o,
                    ".getBuffer(",
                    i,
                    ");",
                    "if(",
                    f,
                    "){",
                    l,
                    "=",
                    f,
                    ".dtype;",
                    '}else if("constant" in ',
                    i,
                    "){",
                    c.state,
                    "=",
                    2,
                    ";",
                    "if(typeof " + i + '.constant === "number"){',
                    c[wt[0]],
                    "=",
                    i,
                    ".constant;",
                    wt
                      .slice(1)
                      .map(function (t) {
                        return c[t];
                      })
                      .join("="),
                    "=0;",
                    "}else{",
                    wt
                      .map(function (t, e) {
                        return (
                          c[t] +
                          "=" +
                          i +
                          ".constant.length>" +
                          e +
                          "?" +
                          i +
                          ".constant[" +
                          e +
                          "]:0;"
                        );
                      })
                      .join(""),
                    "}}else{",
                    "if(",
                    u,
                    "(",
                    i,
                    ".buffer)){",
                    f,
                    "=",
                    o,
                    ".createStream(",
                    34962,
                    ",",
                    i,
                    ".buffer);",
                    "}else{",
                    f,
                    "=",
                    o,
                    ".getBuffer(",
                    i,
                    ".buffer);",
                    "}",
                    l,
                    '="type" in ',
                    i,
                    "?",
                    a.glTypes,
                    "[",
                    i,
                    ".type]:",
                    f,
                    ".dtype;",
                    c.normalized,
                    "=!!",
                    i,
                    ".normalized;"
                  ),
                  r("size"),
                  r("offset"),
                  r("stride"),
                  r("divisor"),
                  n("}}"),
                  n.exit(
                    "if(",
                    c.isStream,
                    "){",
                    o,
                    ".destroyStream(",
                    f,
                    ");",
                    "}"
                  ),
                  c
                );
              });
            }),
            a
          );
        }
        function E(t, e, r, i, a) {
          function u(t) {
            var e = s[t];
            e && (d[t] = e);
          }
          var c = (function (t, e) {
              if (
                "string" == typeof (n = t.static).frag &&
                "string" == typeof n.vert
              ) {
                if (0 < Object.keys(e.dynamic).length) return null;
                var n = e.static,
                  r = Object.keys(n);
                if (0 < r.length && "number" == typeof n[r[0]]) {
                  for (var i = [], o = 0; o < r.length; ++o)
                    i.push([0 | n[r[o]], r[o]]);
                  return i;
                }
              }
              return null;
            })(t, e),
            s = (function (t, e, n) {
              function r(t) {
                if (t in i) {
                  var n = i[t];
                  t = !0;
                  var r,
                    a,
                    u = 0 | n.x,
                    c = 0 | n.y;
                  return (
                    "width" in n ? (r = 0 | n.width) : (t = !1),
                    "height" in n ? (a = 0 | n.height) : (t = !1),
                    new P(
                      !t && e && e.thisDep,
                      !t && e && e.contextDep,
                      !t && e && e.propDep,
                      function (t, e) {
                        var i = t.shared.context,
                          o = r;
                        "width" in n ||
                          (o = e.def(i, ".", "framebufferWidth", "-", u));
                        var s = a;
                        return (
                          "height" in n ||
                            (s = e.def(i, ".", "framebufferHeight", "-", c)),
                          [u, c, o, s]
                        );
                      }
                    )
                  );
                }
                if (t in o) {
                  var s = o[t];
                  return (
                    (t = N(s, function (t, e) {
                      var n = t.invoke(e, s),
                        r = t.shared.context,
                        i = e.def(n, ".x|0"),
                        o = e.def(n, ".y|0");
                      return [
                        i,
                        o,
                        e.def(
                          '"width" in ',
                          n,
                          "?",
                          n,
                          ".width|0:",
                          "(",
                          r,
                          ".",
                          "framebufferWidth",
                          "-",
                          i,
                          ")"
                        ),
                        (n = e.def(
                          '"height" in ',
                          n,
                          "?",
                          n,
                          ".height|0:",
                          "(",
                          r,
                          ".",
                          "framebufferHeight",
                          "-",
                          o,
                          ")"
                        )),
                      ];
                    })),
                    e &&
                      ((t.thisDep = t.thisDep || e.thisDep),
                      (t.contextDep = t.contextDep || e.contextDep),
                      (t.propDep = t.propDep || e.propDep)),
                    t
                  );
                }
                return e
                  ? new P(e.thisDep, e.contextDep, e.propDep, function (t, e) {
                      var n = t.shared.context;
                      return [
                        0,
                        0,
                        e.def(n, ".", "framebufferWidth"),
                        e.def(n, ".", "framebufferHeight"),
                      ];
                    })
                  : null;
              }
              var i = t.static,
                o = t.dynamic;
              if ((t = r("viewport"))) {
                var a = t;
                t = new P(t.thisDep, t.contextDep, t.propDep, function (t, e) {
                  var n = a.append(t, e),
                    r = t.shared.context;
                  return (
                    e.set(r, ".viewportWidth", n[2]),
                    e.set(r, ".viewportHeight", n[3]),
                    n
                  );
                });
              }
              return { viewport: t, scissor_box: r("scissor.box") };
            })(t, (h = w(t))),
            l = O(t),
            d = (function (t, e) {
              var n = t.static,
                r = t.dynamic,
                i = {};
              return (
                at.forEach(function (t) {
                  function e(e, o) {
                    if (t in n) {
                      var u = e(n[t]);
                      i[a] = M(function () {
                        return u;
                      });
                    } else if (t in r) {
                      var c = r[t];
                      i[a] = N(c, function (t, e) {
                        return o(t, e, t.invoke(e, c));
                      });
                    }
                  }
                  var a = m(t);
                  switch (t) {
                    case "cull.enable":
                    case "blend.enable":
                    case "dither":
                    case "stencil.enable":
                    case "depth.enable":
                    case "scissor.enable":
                    case "polygonOffset.enable":
                    case "sample.alpha":
                    case "sample.enable":
                    case "depth.mask":
                      return e(
                        function (t) {
                          return t;
                        },
                        function (t, e, n) {
                          return n;
                        }
                      );
                    case "depth.func":
                      return e(
                        function (t) {
                          return At[t];
                        },
                        function (t, e, n) {
                          return e.def(t.constants.compareFuncs, "[", n, "]");
                        }
                      );
                    case "depth.range":
                      return e(
                        function (t) {
                          return t;
                        },
                        function (t, e, n) {
                          return [
                            e.def("+", n, "[0]"),
                            (e = e.def("+", n, "[1]")),
                          ];
                        }
                      );
                    case "blend.func":
                      return e(
                        function (t) {
                          return [
                            Ot["srcRGB" in t ? t.srcRGB : t.src],
                            Ot["dstRGB" in t ? t.dstRGB : t.dst],
                            Ot["srcAlpha" in t ? t.srcAlpha : t.src],
                            Ot["dstAlpha" in t ? t.dstAlpha : t.dst],
                          ];
                        },
                        function (t, e, n) {
                          function r(t, r) {
                            return e.def(
                              '"',
                              t,
                              r,
                              '" in ',
                              n,
                              "?",
                              n,
                              ".",
                              t,
                              r,
                              ":",
                              n,
                              ".",
                              t
                            );
                          }
                          t = t.constants.blendFuncs;
                          var i = r("src", "RGB"),
                            o = r("dst", "RGB"),
                            a =
                              ((i = e.def(t, "[", i, "]")),
                              e.def(t, "[", r("src", "Alpha"), "]"));
                          return [
                            i,
                            (o = e.def(t, "[", o, "]")),
                            a,
                            (t = e.def(t, "[", r("dst", "Alpha"), "]")),
                          ];
                        }
                      );
                    case "blend.equation":
                      return e(
                        function (t) {
                          return "string" == typeof t
                            ? [Z[t], Z[t]]
                            : "object" == typeof t
                            ? [Z[t.rgb], Z[t.alpha]]
                            : void 0;
                        },
                        function (t, e, n) {
                          var r = t.constants.blendEquations,
                            i = e.def(),
                            o = e.def();
                          return (
                            (t = t.cond("typeof ", n, '==="string"')).then(
                              i,
                              "=",
                              o,
                              "=",
                              r,
                              "[",
                              n,
                              "];"
                            ),
                            t.else(
                              i,
                              "=",
                              r,
                              "[",
                              n,
                              ".rgb];",
                              o,
                              "=",
                              r,
                              "[",
                              n,
                              ".alpha];"
                            ),
                            e(t),
                            [i, o]
                          );
                        }
                      );
                    case "blend.color":
                      return e(
                        function (t) {
                          return o(4, function (e) {
                            return +t[e];
                          });
                        },
                        function (t, e, n) {
                          return o(4, function (t) {
                            return e.def("+", n, "[", t, "]");
                          });
                        }
                      );
                    case "stencil.mask":
                      return e(
                        function (t) {
                          return 0 | t;
                        },
                        function (t, e, n) {
                          return e.def(n, "|0");
                        }
                      );
                    case "stencil.func":
                      return e(
                        function (t) {
                          return [
                            At[t.cmp || "keep"],
                            t.ref || 0,
                            "mask" in t ? t.mask : -1,
                          ];
                        },
                        function (t, e, n) {
                          return [
                            (t = e.def(
                              '"cmp" in ',
                              n,
                              "?",
                              t.constants.compareFuncs,
                              "[",
                              n,
                              ".cmp]",
                              ":",
                              7680
                            )),
                            e.def(n, ".ref|0"),
                            (e = e.def('"mask" in ', n, "?", n, ".mask|0:-1")),
                          ];
                        }
                      );
                    case "stencil.opFront":
                    case "stencil.opBack":
                      return e(
                        function (e) {
                          return [
                            "stencil.opBack" === t ? 1029 : 1028,
                            Et[e.fail || "keep"],
                            Et[e.zfail || "keep"],
                            Et[e.zpass || "keep"],
                          ];
                        },
                        function (e, n, r) {
                          function i(t) {
                            return n.def(
                              '"',
                              t,
                              '" in ',
                              r,
                              "?",
                              o,
                              "[",
                              r,
                              ".",
                              t,
                              "]:",
                              7680
                            );
                          }
                          var o = e.constants.stencilOps;
                          return [
                            "stencil.opBack" === t ? 1029 : 1028,
                            i("fail"),
                            i("zfail"),
                            i("zpass"),
                          ];
                        }
                      );
                    case "polygonOffset.offset":
                      return e(
                        function (t) {
                          return [0 | t.factor, 0 | t.units];
                        },
                        function (t, e, n) {
                          return [
                            e.def(n, ".factor|0"),
                            (e = e.def(n, ".units|0")),
                          ];
                        }
                      );
                    case "cull.face":
                      return e(
                        function (t) {
                          var e = 0;
                          return (
                            "front" === t
                              ? (e = 1028)
                              : "back" === t && (e = 1029),
                            e
                          );
                        },
                        function (t, e, n) {
                          return e.def(n, '==="front"?', 1028, ":", 1029);
                        }
                      );
                    case "lineWidth":
                      return e(
                        function (t) {
                          return t;
                        },
                        function (t, e, n) {
                          return n;
                        }
                      );
                    case "frontFace":
                      return e(
                        function (t) {
                          return jt[t];
                        },
                        function (t, e, n) {
                          return e.def(n + '==="cw"?2304:2305');
                        }
                      );
                    case "colorMask":
                      return e(
                        function (t) {
                          return t.map(function (t) {
                            return !!t;
                          });
                        },
                        function (t, e, n) {
                          return o(4, function (t) {
                            return "!!" + n + "[" + t + "]";
                          });
                        }
                      );
                    case "sample.coverage":
                      return e(
                        function (t) {
                          return ["value" in t ? t.value : 1, !!t.invert];
                        },
                        function (t, e, n) {
                          return [
                            e.def('"value" in ', n, "?+", n, ".value:1"),
                            (e = e.def("!!", n, ".invert")),
                          ];
                        }
                      );
                  }
                }),
                i
              );
            })(t),
            p = _(t, 0, c);
          u("viewport"), u(m("scissor.box"));
          var h,
            v = 0 < Object.keys(d).length;
          if (
            (((h = {
              framebuffer: h,
              draw: l,
              shader: p,
              state: d,
              dirty: v,
              scopeVAO: null,
              drawVAO: null,
              useVAO: !1,
              attributes: {},
            }).profile = (function (t) {
              var e,
                n = t.static;
              if (((t = t.dynamic), "profile" in n)) {
                var r = !!n.profile;
                (e = M(function (t, e) {
                  return r;
                })).enable = r;
              } else if ("profile" in t) {
                var i = t.profile;
                e = N(i, function (t, e) {
                  return t.invoke(e, i);
                });
              }
              return e;
            })(t)),
            (h.uniforms = (function (t, e) {
              var n = t.static,
                r = t.dynamic,
                i = {};
              return (
                Object.keys(n).forEach(function (t) {
                  var e,
                    r = n[t];
                  if ("number" == typeof r || "boolean" == typeof r)
                    e = M(function () {
                      return r;
                    });
                  else if ("function" == typeof r) {
                    var a = r._reglType;
                    "texture2d" === a || "textureCube" === a
                      ? (e = M(function (t) {
                          return t.link(r);
                        }))
                      : ("framebuffer" !== a && "framebufferCube" !== a) ||
                        (e = M(function (t) {
                          return t.link(r.color[0]);
                        }));
                  } else
                    g(r) &&
                      (e = M(function (t) {
                        return t.global.def(
                          "[",
                          o(r.length, function (t) {
                            return r[t];
                          }),
                          "]"
                        );
                      }));
                  (e.value = r), (i[t] = e);
                }),
                Object.keys(r).forEach(function (t) {
                  var e = r[t];
                  i[t] = N(e, function (t, n) {
                    return t.invoke(n, e);
                  });
                }),
                i
              );
            })(r)),
            (h.drawVAO = h.scopeVAO = l.vao),
            !h.drawVAO &&
              p.program &&
              !c &&
              n.angle_instanced_arrays &&
              l.static.elements)
          ) {
            var y = !0;
            if (
              ((t = p.program.attributes.map(function (t) {
                return (t = e.static[t]), (y = y && !!t), t;
              })),
              y && 0 < t.length)
            ) {
              var b = f.getVAO(
                f.createVAO({ attributes: t, elements: l.static.elements })
              );
              (h.drawVAO = new P(null, null, null, function (t, e) {
                return t.link(b);
              })),
                (h.useVAO = !0);
            }
          }
          return (
            c ? (h.useVAO = !0) : (h.attributes = A(e)),
            (h.context = (function (t) {
              var e = t.static,
                n = t.dynamic,
                r = {};
              return (
                Object.keys(e).forEach(function (t) {
                  var n = e[t];
                  r[t] = M(function (t, e) {
                    return "number" == typeof n || "boolean" == typeof n
                      ? "" + n
                      : t.link(n);
                  });
                }),
                Object.keys(n).forEach(function (t) {
                  var e = n[t];
                  r[t] = N(e, function (t, n) {
                    return t.invoke(n, e);
                  });
                }),
                r
              );
            })(i)),
            h
          );
        }
        function j(t, e, n) {
          var r = t.shared.context,
            i = t.scope();
          Object.keys(n).forEach(function (o) {
            e.save(r, "." + o);
            var a = n[o].append(t, e);
            Array.isArray(a)
              ? i(r, ".", o, "=[", a.join(), "];")
              : i(r, ".", o, "=", a, ";");
          }),
            e(i);
        }
        function S(t, e, n, r) {
          var i,
            o = (u = t.shared).gl,
            a = u.framebuffer;
          et && (i = e.def(u.extensions, ".webgl_draw_buffers"));
          var u = (c = t.constants).drawBuffer,
            c = c.backBuffer;
          (t = n ? n.append(t, e) : e.def(a, ".next")),
            r || e("if(", t, "!==", a, ".cur){"),
            e(
              "if(",
              t,
              "){",
              o,
              ".bindFramebuffer(",
              36160,
              ",",
              t,
              ".framebuffer);"
            ),
            et &&
              e(
                i,
                ".drawBuffersWEBGL(",
                u,
                "[",
                t,
                ".colorAttachments.length]);"
              ),
            e("}else{", o, ".bindFramebuffer(", 36160, ",null);"),
            et && e(i, ".drawBuffersWEBGL(", c, ");"),
            e("}", a, ".cur=", t, ";"),
            r || e("}");
        }
        function k(t, e, n) {
          var r = t.shared,
            i = r.gl,
            a = t.current,
            u = t.next,
            c = r.current,
            s = r.next,
            f = t.cond(c, ".dirty");
          at.forEach(function (e) {
            var r, l;
            if (!((e = m(e)) in n.state))
              if (e in u) {
                (r = u[e]), (l = a[e]);
                var d = o(it[e].length, function (t) {
                  return f.def(r, "[", t, "]");
                });
                f(
                  t
                    .cond(
                      d
                        .map(function (t, e) {
                          return t + "!==" + l + "[" + e + "]";
                        })
                        .join("||")
                    )
                    .then(
                      i,
                      ".",
                      ct[e],
                      "(",
                      d,
                      ");",
                      d
                        .map(function (t, e) {
                          return l + "[" + e + "]=" + t;
                        })
                        .join(";"),
                      ";"
                    )
                );
              } else
                (r = f.def(s, ".", e)),
                  (d = t.cond(r, "!==", c, ".", e)),
                  f(d),
                  e in ut
                    ? d(
                        t
                          .cond(r)
                          .then(i, ".enable(", ut[e], ");")
                          .else(i, ".disable(", ut[e], ");"),
                        c,
                        ".",
                        e,
                        "=",
                        r,
                        ";"
                      )
                    : d(i, ".", ct[e], "(", r, ");", c, ".", e, "=", r, ";");
          }),
            0 === Object.keys(n.state).length && f(c, ".dirty=false;"),
            e(f);
        }
        function T(t, e, n, r) {
          var i = t.shared,
            o = t.current,
            a = i.current,
            u = i.gl;
          D(Object.keys(n)).forEach(function (i) {
            var c = n[i];
            if (!r || r(c)) {
              var s = c.append(t, e);
              if (ut[i]) {
                var f = ut[i];
                R(c)
                  ? e(u, s ? ".enable(" : ".disable(", f, ");")
                  : e(
                      t
                        .cond(s)
                        .then(u, ".enable(", f, ");")
                        .else(u, ".disable(", f, ");")
                    ),
                  e(a, ".", i, "=", s, ";");
              } else if (g(s)) {
                var l = o[i];
                e(
                  u,
                  ".",
                  ct[i],
                  "(",
                  s,
                  ");",
                  s
                    .map(function (t, e) {
                      return l + "[" + e + "]=" + t;
                    })
                    .join(";"),
                  ";"
                );
              } else e(u, ".", ct[i], "(", s, ");", a, ".", i, "=", s, ";");
            }
          });
        }
        function F(t, e) {
          tt &&
            (t.instancing = e.def(
              t.shared.extensions,
              ".angle_instanced_arrays"
            ));
        }
        function z(t, e, n, r, i) {
          function o() {
            return "undefined" == typeof performance
              ? "Date.now()"
              : "performance.now()";
          }
          function a(t) {
            t((s = e.def()), "=", o(), ";"),
              "string" == typeof i
                ? t(d, ".count+=", i, ";")
                : t(d, ".count++;"),
              h &&
                (r
                  ? t((f = e.def()), "=", v, ".getNumPendingQueries();")
                  : t(v, ".beginQuery(", d, ");"));
          }
          function u(t) {
            t(d, ".cpuTime+=", o(), "-", s, ";"),
              h &&
                (r
                  ? t(
                      v,
                      ".pushScopeStats(",
                      f,
                      ",",
                      v,
                      ".getNumPendingQueries(),",
                      d,
                      ");"
                    )
                  : t(v, ".endQuery();"));
          }
          function c(t) {
            var n = e.def(p, ".profile");
            e(p, ".profile=", t, ";"), e.exit(p, ".profile=", n, ";");
          }
          var s,
            f,
            l = t.shared,
            d = t.stats,
            p = l.current,
            v = l.timer;
          if ((n = n.profile)) {
            if (R(n))
              return void (n.enable
                ? (a(e), u(e.exit), c("true"))
                : c("false"));
            c((n = n.append(t, e)));
          } else n = e.def(p, ".profile");
          a((l = t.block())),
            e("if(", n, "){", l, "}"),
            u((t = t.block())),
            e.exit("if(", n, "){", t, "}");
        }
        function q(t, e, n, r, i) {
          function o(n, r, i) {
            function o() {
              e(
                "if(!",
                f,
                ".buffer){",
                c,
                ".enableVertexAttribArray(",
                s,
                ");}"
              );
              var n,
                o = i.type;
              (n = i.size ? e.def(i.size, "||", r) : r),
                e(
                  "if(",
                  f,
                  ".type!==",
                  o,
                  "||",
                  f,
                  ".size!==",
                  n,
                  "||",
                  p
                    .map(function (t) {
                      return f + "." + t + "!==" + i[t];
                    })
                    .join("||"),
                  "){",
                  c,
                  ".bindBuffer(",
                  34962,
                  ",",
                  l,
                  ".buffer);",
                  c,
                  ".vertexAttribPointer(",
                  [s, n, o, i.normalized, i.stride, i.offset],
                  ");",
                  f,
                  ".type=",
                  o,
                  ";",
                  f,
                  ".size=",
                  n,
                  ";",
                  p
                    .map(function (t) {
                      return f + "." + t + "=" + i[t] + ";";
                    })
                    .join(""),
                  "}"
                ),
                tt &&
                  ((o = i.divisor),
                  e(
                    "if(",
                    f,
                    ".divisor!==",
                    o,
                    "){",
                    t.instancing,
                    ".vertexAttribDivisorANGLE(",
                    [s, o],
                    ");",
                    f,
                    ".divisor=",
                    o,
                    ";}"
                  ));
            }
            function u() {
              e(
                "if(",
                f,
                ".buffer){",
                c,
                ".disableVertexAttribArray(",
                s,
                ");",
                f,
                ".buffer=null;",
                "}if(",
                wt
                  .map(function (t, e) {
                    return f + "." + t + "!==" + d[e];
                  })
                  .join("||"),
                "){",
                c,
                ".vertexAttrib4f(",
                s,
                ",",
                d,
                ");",
                wt
                  .map(function (t, e) {
                    return f + "." + t + "=" + d[e] + ";";
                  })
                  .join(""),
                "}"
              );
            }
            var c = a.gl,
              s = e.def(n, ".location"),
              f = e.def(a.attributes, "[", s, "]");
            n = i.state;
            var l = i.buffer,
              d = [i.x, i.y, i.z, i.w],
              p = ["buffer", "normalized", "offset", "stride"];
            1 === n
              ? o()
              : 2 === n
              ? u()
              : (e("if(", n, "===", 1, "){"), o(), e("}else{"), u(), e("}"));
          }
          var a = t.shared;
          r.forEach(function (r) {
            var a,
              u = r.name,
              c = n.attributes[u];
            if (c) {
              if (!i(c)) return;
              a = c.append(t, e);
            } else {
              if (!i(St)) return;
              var s = t.scopeAttrib(u);
              (a = {}),
                Object.keys(new K()).forEach(function (t) {
                  a[t] = e.def(s, ".", t);
                });
            }
            o(
              t.link(r),
              (function (t) {
                switch (t) {
                  case 35664:
                  case 35667:
                  case 35671:
                    return 2;
                  case 35665:
                  case 35668:
                  case 35672:
                    return 3;
                  case 35666:
                  case 35669:
                  case 35673:
                    return 4;
                  default:
                    return 1;
                }
              })(r.info.type),
              a
            );
          });
        }
        function H(t, n, r, i, a, u) {
          for (var c, s = t.shared, f = s.gl, l = 0; l < i.length; ++l) {
            var d,
              p = (m = i[l]).name,
              h = m.info.type,
              v = r.uniforms[p],
              m = t.link(m) + ".location";
            if (v) {
              if (!a(v)) continue;
              if (R(v)) {
                if (((p = v.value), 35678 === h || 35680 === h))
                  n(
                    f,
                    ".uniform1i(",
                    m,
                    ",",
                    (h = t.link(p._texture || p.color[0]._texture)) +
                      ".bind());"
                  ),
                    n.exit(h, ".unbind();");
                else if (35674 === h || 35675 === h || 35676 === h)
                  (v = 2),
                    35675 === h ? (v = 3) : 35676 === h && (v = 4),
                    n(
                      f,
                      ".uniformMatrix",
                      v,
                      "fv(",
                      m,
                      ",false,",
                      (p = t.global.def(
                        "new Float32Array([" +
                          Array.prototype.slice.call(p) +
                          "])"
                      )),
                      ");"
                    );
                else {
                  switch (h) {
                    case 5126:
                      c = "1f";
                      break;
                    case 35664:
                      c = "2f";
                      break;
                    case 35665:
                      c = "3f";
                      break;
                    case 35666:
                      c = "4f";
                      break;
                    case 35670:
                    case 5124:
                      c = "1i";
                      break;
                    case 35671:
                    case 35667:
                      c = "2i";
                      break;
                    case 35672:
                    case 35668:
                      c = "3i";
                      break;
                    case 35673:
                      c = "4i";
                      break;
                    case 35669:
                      c = "4i";
                  }
                  n(
                    f,
                    ".uniform",
                    c,
                    "(",
                    m,
                    ",",
                    g(p) ? Array.prototype.slice.call(p) : p,
                    ");"
                  );
                }
                continue;
              }
              d = v.append(t, n);
            } else {
              if (!a(St)) continue;
              d = n.def(s.uniforms, "[", e.id(p), "]");
            }
            switch (
              (35678 === h
                ? n(
                    "if(",
                    d,
                    "&&",
                    d,
                    '._reglType==="framebuffer"){',
                    d,
                    "=",
                    d,
                    ".color[0];",
                    "}"
                  )
                : 35680 === h &&
                  n(
                    "if(",
                    d,
                    "&&",
                    d,
                    '._reglType==="framebufferCube"){',
                    d,
                    "=",
                    d,
                    ".color[0];",
                    "}"
                  ),
              (p = 1),
              h)
            ) {
              case 35678:
              case 35680:
                (h = n.def(d, "._texture")),
                  n(f, ".uniform1i(", m, ",", h, ".bind());"),
                  n.exit(h, ".unbind();");
                continue;
              case 5124:
              case 35670:
                c = "1i";
                break;
              case 35667:
              case 35671:
                (c = "2i"), (p = 2);
                break;
              case 35668:
              case 35672:
                (c = "3i"), (p = 3);
                break;
              case 35669:
              case 35673:
                (c = "4i"), (p = 4);
                break;
              case 5126:
                c = "1f";
                break;
              case 35664:
                (c = "2f"), (p = 2);
                break;
              case 35665:
                (c = "3f"), (p = 3);
                break;
              case 35666:
                (c = "4f"), (p = 4);
                break;
              case 35674:
                c = "Matrix2fv";
                break;
              case 35675:
                c = "Matrix3fv";
                break;
              case 35676:
                c = "Matrix4fv";
            }
            if ("M" === c.charAt(0)) {
              n(f, ".uniform", c, "(", m, ","),
                (m = Math.pow(h - 35674 + 2, 2));
              var y = t.global.def("new Float32Array(", m, ")");
              Array.isArray(d)
                ? n(
                    "false,(",
                    o(m, function (t) {
                      return y + "[" + t + "]=" + d[t];
                    }),
                    ",",
                    y,
                    ")"
                  )
                : n(
                    "false,(Array.isArray(",
                    d,
                    ")||",
                    d,
                    " instanceof Float32Array)?",
                    d,
                    ":(",
                    o(m, function (t) {
                      return y + "[" + t + "]=" + d + "[" + t + "]";
                    }),
                    ",",
                    y,
                    ")"
                  ),
                n(");");
            } else {
              if (1 < p) {
                h = [];
                var b = [];
                for (v = 0; v < p; ++v)
                  Array.isArray(d)
                    ? b.push(d[v])
                    : b.push(n.def(d + "[" + v + "]")),
                    u && h.push(n.def());
                u &&
                  n(
                    "if(!",
                    t.batchId,
                    "||",
                    h
                      .map(function (t, e) {
                        return t + "!==" + b[e];
                      })
                      .join("||"),
                    "){",
                    h
                      .map(function (t, e) {
                        return t + "=" + b[e] + ";";
                      })
                      .join("")
                  ),
                  n(f, ".uniform", c, "(", m, ",", b.join(","), ");");
              } else
                u &&
                  ((h = n.def()),
                  n(
                    "if(!",
                    t.batchId,
                    "||",
                    h,
                    "!==",
                    d,
                    "){",
                    h,
                    "=",
                    d,
                    ";"
                  )),
                  n(f, ".uniform", c, "(", m, ",", d, ");");
              u && n("}");
            }
          }
        }
        function W(t, e, n, r) {
          function i(i) {
            var o = d[i];
            return o
              ? (o.contextDep && r.contextDynamic) || o.propDep
                ? o.append(t, n)
                : o.append(t, e)
              : e.def(l, ".", i);
          }
          function o() {
            function t() {
              n(
                c,
                ".drawElementsInstancedANGLE(",
                [h, g, m, v + "<<((" + m + "-5121)>>1)", u],
                ");"
              );
            }
            function e() {
              n(c, ".drawArraysInstancedANGLE(", [h, v, g, u], ");");
            }
            p && "null" !== p
              ? y
                ? t()
                : (n("if(", p, "){"), t(), n("}else{"), e(), n("}"))
              : e();
          }
          function a() {
            function t() {
              n(
                f +
                  ".drawElements(" +
                  [h, g, m, v + "<<((" + m + "-5121)>>1)"] +
                  ");"
              );
            }
            function e() {
              n(f + ".drawArrays(" + [h, v, g] + ");");
            }
            p && "null" !== p
              ? y
                ? t()
                : (n("if(", p, "){"), t(), n("}else{"), e(), n("}"))
              : e();
          }
          var u,
            c,
            s = t.shared,
            f = s.gl,
            l = s.draw,
            d = r.draw,
            p = (function () {
              var i = d.elements,
                o = e;
              return (
                i
                  ? (((i.contextDep && r.contextDynamic) || i.propDep) &&
                      (o = n),
                    d.vaoActive
                      ? (i = i.append(t, o))
                      : o(
                          "if(" +
                            (i = i.append(t, o)) +
                            ")" +
                            f +
                            ".bindBuffer(34963," +
                            i +
                            ".buffer.buffer);"
                        ))
                  : ((i = o.def()),
                    o(
                      "if(",
                      s.vao,
                      ".currentVAO){",
                      i,
                      "=",
                      t.shared.elements + ".getElements(" + s.vao,
                      ".currentVAO.elements);",
                      rt
                        ? ""
                        : "if(" +
                            i +
                            ")" +
                            f +
                            ".bindBuffer(34963," +
                            i +
                            ".buffer.buffer);",
                      "}else{",
                      i,
                      "=",
                      l,
                      ".",
                      "elements",
                      ";",
                      "if(",
                      i,
                      "){",
                      f,
                      ".bindBuffer(",
                      34963,
                      ",",
                      i,
                      ".buffer.buffer);}}"
                    )),
                i
              );
            })(),
            h = i("primitive"),
            v = i("offset"),
            g = (function () {
              var i = d.count,
                o = e;
              return (
                i
                  ? (((i.contextDep && r.contextDynamic) || i.propDep) &&
                      (o = n),
                    (i = i.append(t, o)))
                  : (i = o.def(l, ".", "count")),
                i
              );
            })();
          if ("number" == typeof g) {
            if (0 === g) return;
          } else n("if(", g, "){"), n.exit("}");
          tt && ((u = i("instances")), (c = t.instancing));
          var m = p + ".type",
            y = d.elements && R(d.elements) && !d.vaoActive;
          tt && ("number" != typeof u || 0 <= u)
            ? "string" == typeof u
              ? (n("if(", u, ">0){"),
                o(),
                n("}else if(", u, "<0){"),
                a(),
                n("}"))
              : o()
            : a();
        }
        function U(t, e, n, r, i) {
          return (
            (i = (e = x()).proc("body", i)),
            tt &&
              (e.instancing = i.def(
                e.shared.extensions,
                ".angle_instanced_arrays"
              )),
            t(e, i, n, r),
            e.compile().body
          );
        }
        function G(t, e, n, r) {
          F(t, e),
            n.useVAO
              ? n.drawVAO
                ? e(t.shared.vao, ".setVAO(", n.drawVAO.append(t, e), ");")
                : e(t.shared.vao, ".setVAO(", t.shared.vao, ".targetVAO);")
              : (e(t.shared.vao, ".setVAO(null);"),
                q(t, e, n, r.attributes, function () {
                  return !0;
                })),
            H(
              t,
              e,
              n,
              r.uniforms,
              function () {
                return !0;
              },
              !1
            ),
            W(t, e, e, n);
        }
        function $(t, e, n, r) {
          function i() {
            return !0;
          }
          (t.batchId = "a1"),
            F(t, e),
            q(t, e, n, r.attributes, i),
            H(t, e, n, r.uniforms, i, !1),
            W(t, e, e, n);
        }
        function Y(t, e, n, r) {
          function i(t) {
            return (t.contextDep && a) || t.propDep;
          }
          function o(t) {
            return !i(t);
          }
          F(t, e);
          var a = n.contextDep,
            u = e.def(),
            c = e.def();
          (t.shared.props = c), (t.batchId = u);
          var s = t.scope(),
            f = t.scope();
          e(
            s.entry,
            "for(",
            u,
            "=0;",
            u,
            "<",
            "a1",
            ";++",
            u,
            "){",
            c,
            "=",
            "a0",
            "[",
            u,
            "];",
            f,
            "}",
            s.exit
          ),
            n.needsContext && j(t, f, n.context),
            n.needsFramebuffer && S(t, f, n.framebuffer),
            T(t, f, n.state, i),
            n.profile && i(n.profile) && z(t, f, n, !1, !0),
            r
              ? (n.useVAO
                  ? n.drawVAO
                    ? i(n.drawVAO)
                      ? f(
                          t.shared.vao,
                          ".setVAO(",
                          n.drawVAO.append(t, f),
                          ");"
                        )
                      : s(
                          t.shared.vao,
                          ".setVAO(",
                          n.drawVAO.append(t, s),
                          ");"
                        )
                    : s(t.shared.vao, ".setVAO(", t.shared.vao, ".targetVAO);")
                  : (s(t.shared.vao, ".setVAO(null);"),
                    q(t, s, n, r.attributes, o),
                    q(t, f, n, r.attributes, i)),
                H(t, s, n, r.uniforms, o, !1),
                H(t, f, n, r.uniforms, i, !0),
                W(t, s, f, n))
              : ((e = t.global.def("{}")),
                (r = n.shader.progVar.append(t, f)),
                (c = f.def(r, ".id")),
                (s = f.def(e, "[", c, "]")),
                f(
                  t.shared.gl,
                  ".useProgram(",
                  r,
                  ".program);",
                  "if(!",
                  s,
                  "){",
                  s,
                  "=",
                  e,
                  "[",
                  c,
                  "]=",
                  t.link(function (e) {
                    return U($, t, n, e, 2);
                  }),
                  "(",
                  r,
                  ");}",
                  s,
                  ".call(this,a0[",
                  u,
                  "],",
                  u,
                  ");"
                ));
        }
        function Q(t, n) {
          function r(e) {
            var r = n.shader[e];
            r && i.set(o.shader, "." + e, r.append(t, i));
          }
          var i = t.proc("scope", 3);
          t.batchId = "a2";
          var o = t.shared,
            a = o.current;
          j(t, i, n.context),
            n.framebuffer && n.framebuffer.append(t, i),
            D(Object.keys(n.state)).forEach(function (e) {
              var r = n.state[e].append(t, i);
              g(r)
                ? r.forEach(function (n, r) {
                    i.set(t.next[e], "[" + r + "]", n);
                  })
                : i.set(o.next, "." + e, r);
            }),
            z(t, i, n, !0, !0),
            ["elements", "offset", "count", "instances", "primitive"].forEach(
              function (e) {
                var r = n.draw[e];
                r && i.set(o.draw, "." + e, "" + r.append(t, i));
              }
            ),
            Object.keys(n.uniforms).forEach(function (r) {
              var a = n.uniforms[r].append(t, i);
              Array.isArray(a) && (a = "[" + a.join() + "]"),
                i.set(o.uniforms, "[" + e.id(r) + "]", a);
            }),
            Object.keys(n.attributes).forEach(function (e) {
              var r = n.attributes[e].append(t, i),
                o = t.scopeAttrib(e);
              Object.keys(new K()).forEach(function (t) {
                i.set(o, "." + t, r[t]);
              });
            }),
            n.scopeVAO && i.set(o.vao, ".targetVAO", n.scopeVAO.append(t, i)),
            r("vert"),
            r("frag"),
            0 < Object.keys(n.state).length &&
              (i(a, ".dirty=true;"), i.exit(a, ".dirty=true;")),
            i("a1(", t.shared.context, ",a0,", t.batchId, ");");
        }
        function X(t, e, n) {
          var r = e.static[n];
          if (
            r &&
            (function (t) {
              if ("object" == typeof t && !g(t)) {
                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                  if (V.isDynamic(t[e[n]])) return !0;
                return !1;
              }
            })(r)
          ) {
            var i = t.global,
              o = Object.keys(r),
              a = !1,
              u = !1,
              c = !1,
              s = t.global.def("{}");
            o.forEach(function (e) {
              var n = r[e];
              if (V.isDynamic(n))
                "function" == typeof n && (n = r[e] = V.unbox(n)),
                  (e = N(n, null)),
                  (a = a || e.thisDep),
                  (c = c || e.propDep),
                  (u = u || e.contextDep);
              else {
                switch ((i(s, ".", e, "="), typeof n)) {
                  case "number":
                    i(n);
                    break;
                  case "string":
                    i('"', n, '"');
                    break;
                  case "object":
                    Array.isArray(n) && i("[", n.join(), "]");
                    break;
                  default:
                    i(t.link(n));
                }
                i(";");
              }
            }),
              (e.dynamic[n] = new V.DynamicVariable(4, {
                thisDep: a,
                contextDep: u,
                propDep: c,
                ref: s,
                append: function (t, e) {
                  o.forEach(function (n) {
                    var i = r[n];
                    V.isDynamic(i) &&
                      ((i = t.invoke(e, i)), e(s, ".", n, "=", i, ";"));
                  });
                },
              })),
              delete e.static[n];
          }
        }
        var K = f.Record,
          Z = { add: 32774, subtract: 32778, "reverse subtract": 32779 };
        n.ext_blend_minmax && ((Z.min = 32775), (Z.max = 32776));
        var tt = n.angle_instanced_arrays,
          et = n.webgl_draw_buffers,
          rt = n.oes_vertex_array_object,
          it = { dirty: !0, profile: v.profile },
          ot = {},
          at = [],
          ut = {},
          ct = {};
        y("dither", 3024),
          y("blend.enable", 3042),
          b("blend.color", "blendColor", [0, 0, 0, 0]),
          b("blend.equation", "blendEquationSeparate", [32774, 32774]),
          b("blend.func", "blendFuncSeparate", [1, 0, 1, 0]),
          y("depth.enable", 2929, !0),
          b("depth.func", "depthFunc", 513),
          b("depth.range", "depthRange", [0, 1]),
          b("depth.mask", "depthMask", !0),
          b("colorMask", "colorMask", [!0, !0, !0, !0]),
          y("cull.enable", 2884),
          b("cull.face", "cullFace", 1029),
          b("frontFace", "frontFace", 2305),
          b("lineWidth", "lineWidth", 1),
          y("polygonOffset.enable", 32823),
          b("polygonOffset.offset", "polygonOffset", [0, 0]),
          y("sample.alpha", 32926),
          y("sample.enable", 32928),
          b("sample.coverage", "sampleCoverage", [1, !1]),
          y("stencil.enable", 2960),
          b("stencil.mask", "stencilMask", -1),
          b("stencil.func", "stencilFunc", [519, 0, -1]),
          b("stencil.opFront", "stencilOpSeparate", [1028, 7680, 7680, 7680]),
          b("stencil.opBack", "stencilOpSeparate", [1029, 7680, 7680, 7680]),
          y("scissor.enable", 3089),
          b("scissor.box", "scissor", [
            0,
            0,
            t.drawingBufferWidth,
            t.drawingBufferHeight,
          ]),
          b("viewport", "viewport", [
            0,
            0,
            t.drawingBufferWidth,
            t.drawingBufferHeight,
          ]);
        var st = {
            gl: t,
            context: p,
            strings: e,
            next: ot,
            current: it,
            draw: d,
            elements: a,
            buffer: i,
            shader: l,
            attributes: f.state,
            vao: f,
            uniforms: s,
            framebuffer: c,
            extensions: n,
            timer: h,
            isBufferArgs: I,
          },
          ft = {
            primTypes: nt,
            compareFuncs: At,
            blendFuncs: Ot,
            blendEquations: Z,
            stencilOps: Et,
            glTypes: J,
            orientationType: jt,
          };
        et &&
          ((ft.backBuffer = [1029]),
          (ft.drawBuffer = o(r.maxDrawbuffers, function (t) {
            return 0 === t
              ? [0]
              : o(t, function (t) {
                  return 36064 + t;
                });
          })));
        var lt = 0;
        return {
          next: ot,
          current: it,
          procs: (function () {
            var t = x(),
              e = t.proc("poll"),
              i = t.proc("refresh"),
              a = t.block();
            e(a), i(a);
            var u,
              c = t.shared,
              s = c.gl,
              f = c.next,
              l = c.current;
            a(l, ".dirty=false;"),
              S(t, e),
              S(t, i, null, !0),
              tt && (u = t.link(tt)),
              n.oes_vertex_array_object &&
                i(
                  t.link(n.oes_vertex_array_object),
                  ".bindVertexArrayOES(null);"
                );
            for (var d = 0; d < r.maxAttributes; ++d) {
              var p = i.def(c.attributes, "[", d, "]"),
                h = t.cond(p, ".buffer");
              h
                .then(
                  s,
                  ".enableVertexAttribArray(",
                  d,
                  ");",
                  s,
                  ".bindBuffer(",
                  34962,
                  ",",
                  p,
                  ".buffer.buffer);",
                  s,
                  ".vertexAttribPointer(",
                  d,
                  ",",
                  p,
                  ".size,",
                  p,
                  ".type,",
                  p,
                  ".normalized,",
                  p,
                  ".stride,",
                  p,
                  ".offset);"
                )
                .else(
                  s,
                  ".disableVertexAttribArray(",
                  d,
                  ");",
                  s,
                  ".vertexAttrib4f(",
                  d,
                  ",",
                  p,
                  ".x,",
                  p,
                  ".y,",
                  p,
                  ".z,",
                  p,
                  ".w);",
                  p,
                  ".buffer=null;"
                ),
                i(h),
                tt &&
                  i(u, ".vertexAttribDivisorANGLE(", d, ",", p, ".divisor);");
            }
            return (
              i(
                t.shared.vao,
                ".currentVAO=null;",
                t.shared.vao,
                ".setVAO(",
                t.shared.vao,
                ".targetVAO);"
              ),
              Object.keys(ut).forEach(function (n) {
                var r = ut[n],
                  o = a.def(f, ".", n),
                  u = t.block();
                u(
                  "if(",
                  o,
                  "){",
                  s,
                  ".enable(",
                  r,
                  ")}else{",
                  s,
                  ".disable(",
                  r,
                  ")}",
                  l,
                  ".",
                  n,
                  "=",
                  o,
                  ";"
                ),
                  i(u),
                  e("if(", o, "!==", l, ".", n, "){", u, "}");
              }),
              Object.keys(ct).forEach(function (n) {
                var r,
                  u,
                  c = ct[n],
                  d = it[n],
                  p = t.block();
                p(s, ".", c, "("),
                  g(d)
                    ? ((c = d.length),
                      (r = t.global.def(f, ".", n)),
                      (u = t.global.def(l, ".", n)),
                      p(
                        o(c, function (t) {
                          return r + "[" + t + "]";
                        }),
                        ");",
                        o(c, function (t) {
                          return u + "[" + t + "]=" + r + "[" + t + "];";
                        }).join("")
                      ),
                      e(
                        "if(",
                        o(c, function (t) {
                          return r + "[" + t + "]!==" + u + "[" + t + "]";
                        }).join("||"),
                        "){",
                        p,
                        "}"
                      ))
                    : ((r = a.def(f, ".", n)),
                      (u = a.def(l, ".", n)),
                      p(r, ");", l, ".", n, "=", r, ";"),
                      e("if(", r, "!==", u, "){", p, "}")),
                  i(p);
              }),
              t.compile()
            );
          })(),
          compile: function (t, e, n, r, i) {
            var o = x();
            (o.stats = o.link(i)),
              Object.keys(e.static).forEach(function (t) {
                X(o, e, t);
              }),
              _t.forEach(function (e) {
                X(o, t, e);
              });
            var a = E(t, e, n, r);
            return (
              (function (t, e) {
                var n = t.proc("draw", 1);
                F(t, n),
                  j(t, n, e.context),
                  S(t, n, e.framebuffer),
                  k(t, n, e),
                  T(t, n, e.state),
                  z(t, n, e, !1, !0);
                var r = e.shader.progVar.append(t, n);
                if (
                  (n(t.shared.gl, ".useProgram(", r, ".program);"),
                  e.shader.program)
                )
                  G(t, n, e, e.shader.program);
                else {
                  n(t.shared.vao, ".setVAO(null);");
                  var i = t.global.def("{}"),
                    o = n.def(r, ".id"),
                    a = n.def(i, "[", o, "]");
                  n(
                    t
                      .cond(a)
                      .then(a, ".call(this,a0);")
                      .else(
                        a,
                        "=",
                        i,
                        "[",
                        o,
                        "]=",
                        t.link(function (n) {
                          return U(G, t, e, n, 1);
                        }),
                        "(",
                        r,
                        ");",
                        a,
                        ".call(this,a0);"
                      )
                  );
                }
                0 < Object.keys(e.state).length &&
                  n(t.shared.current, ".dirty=true;");
              })(o, a),
              Q(o, a),
              (function (t, e) {
                function n(t) {
                  return (t.contextDep && i) || t.propDep;
                }
                var r = t.proc("batch", 2);
                (t.batchId = "0"), F(t, r);
                var i = !1,
                  o = !0;
                Object.keys(e.context).forEach(function (t) {
                  i = i || e.context[t].propDep;
                }),
                  i || (j(t, r, e.context), (o = !1));
                var a = !1;
                if (
                  ((u = e.framebuffer)
                    ? (u.propDep ? (i = a = !0) : u.contextDep && i && (a = !0),
                      a || S(t, r, u))
                    : S(t, r, null),
                  e.state.viewport && e.state.viewport.propDep && (i = !0),
                  k(t, r, e),
                  T(t, r, e.state, function (t) {
                    return !n(t);
                  }),
                  (e.profile && n(e.profile)) || z(t, r, e, !1, "a1"),
                  (e.contextDep = i),
                  (e.needsContext = o),
                  (e.needsFramebuffer = a),
                  ((o = e.shader.progVar).contextDep && i) || o.propDep)
                )
                  Y(t, r, e, null);
                else if (
                  ((o = o.append(t, r)),
                  r(t.shared.gl, ".useProgram(", o, ".program);"),
                  e.shader.program)
                )
                  Y(t, r, e, e.shader.program);
                else {
                  r(t.shared.vao, ".setVAO(null);");
                  var u = t.global.def("{}"),
                    c = ((a = r.def(o, ".id")), r.def(u, "[", a, "]"));
                  r(
                    t
                      .cond(c)
                      .then(c, ".call(this,a0,a1);")
                      .else(
                        c,
                        "=",
                        u,
                        "[",
                        a,
                        "]=",
                        t.link(function (n) {
                          return U(Y, t, e, n, 2);
                        }),
                        "(",
                        o,
                        ");",
                        c,
                        ".call(this,a0,a1);"
                      )
                  );
                }
                0 < Object.keys(e.state).length &&
                  r(t.shared.current, ".dirty=true;");
              })(o, a),
              B(o.compile(), {
                destroy: function () {
                  a.shader.program.destroy();
                },
              })
            );
          },
        };
      }
      function z(t, e) {
        for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
        return -1;
      }
      var B = function (t, e) {
          for (var n = Object.keys(e), r = 0; r < n.length; ++r)
            t[n[r]] = e[n[r]];
          return t;
        },
        q = 0,
        V = {
          DynamicVariable: t,
          define: function (n, r) {
            return new t(n, e(r + ""));
          },
          isDynamic: function (e) {
            return ("function" == typeof e && !e._reglType) || e instanceof t;
          },
          unbox: function e(n, r) {
            return "function" == typeof n
              ? new t(0, n)
              : "number" == typeof n || "boolean" == typeof n
              ? new t(5, n)
              : Array.isArray(n)
              ? new t(
                  6,
                  n.map(function (t, n) {
                    return e(t, r + "[" + n + "]");
                  })
                )
              : n instanceof t
              ? n
              : void 0;
          },
          accessor: e,
        },
        H = {
          next:
            "function" == typeof requestAnimationFrame
              ? function (t) {
                  return requestAnimationFrame(t);
                }
              : function (t) {
                  return setTimeout(t, 16);
                },
          cancel:
            "function" == typeof cancelAnimationFrame
              ? function (t) {
                  return cancelAnimationFrame(t);
                }
              : clearTimeout,
        },
        W =
          "undefined" != typeof performance && performance.now
            ? function () {
                return performance.now();
              }
            : function () {
                return +new Date();
              },
        U = u();
      U.zero = u();
      var G = function (t, e) {
          var n = 1;
          e.ext_texture_filter_anisotropic && (n = t.getParameter(34047));
          var r = 1,
            i = 1;
          e.webgl_draw_buffers &&
            ((r = t.getParameter(34852)), (i = t.getParameter(36063)));
          var o = !!e.oes_texture_float;
          if (o) {
            (o = t.createTexture()),
              t.bindTexture(3553, o),
              t.texImage2D(3553, 0, 6408, 1, 1, 0, 6408, 5126, null);
            var a = t.createFramebuffer();
            if (
              (t.bindFramebuffer(36160, a),
              t.framebufferTexture2D(36160, 36064, 3553, o, 0),
              t.bindTexture(3553, null),
              36053 !== t.checkFramebufferStatus(36160))
            )
              o = !1;
            else {
              t.viewport(0, 0, 1, 1), t.clearColor(1, 0, 0, 1), t.clear(16384);
              var u = U.allocType(5126, 4);
              t.readPixels(0, 0, 1, 1, 6408, 5126, u),
                t.getError()
                  ? (o = !1)
                  : (t.deleteFramebuffer(a),
                    t.deleteTexture(o),
                    (o = 1 === u[0])),
                U.freeType(u);
            }
          }
          return (
            (u = !0),
            ("undefined" != typeof navigator &&
              (/MSIE/.test(navigator.userAgent) ||
                /Trident\//.test(navigator.appVersion) ||
                /Edge/.test(navigator.userAgent))) ||
              ((u = t.createTexture()),
              (a = U.allocType(5121, 36)),
              t.activeTexture(33984),
              t.bindTexture(34067, u),
              t.texImage2D(34069, 0, 6408, 3, 3, 0, 6408, 5121, a),
              U.freeType(a),
              t.bindTexture(34067, null),
              t.deleteTexture(u),
              (u = !t.getError())),
            {
              colorBits: [
                t.getParameter(3410),
                t.getParameter(3411),
                t.getParameter(3412),
                t.getParameter(3413),
              ],
              depthBits: t.getParameter(3414),
              stencilBits: t.getParameter(3415),
              subpixelBits: t.getParameter(3408),
              extensions: Object.keys(e).filter(function (t) {
                return !!e[t];
              }),
              maxAnisotropic: n,
              maxDrawbuffers: r,
              maxColorAttachments: i,
              pointSizeDims: t.getParameter(33901),
              lineWidthDims: t.getParameter(33902),
              maxViewportDims: t.getParameter(3386),
              maxCombinedTextureUnits: t.getParameter(35661),
              maxCubeMapSize: t.getParameter(34076),
              maxRenderbufferSize: t.getParameter(34024),
              maxTextureUnits: t.getParameter(34930),
              maxTextureSize: t.getParameter(3379),
              maxAttributes: t.getParameter(34921),
              maxVertexUniforms: t.getParameter(36347),
              maxVertexTextureUnits: t.getParameter(35660),
              maxVaryingVectors: t.getParameter(36348),
              maxFragmentUniforms: t.getParameter(36349),
              glsl: t.getParameter(35724),
              renderer: t.getParameter(7937),
              vendor: t.getParameter(7936),
              version: t.getParameter(7938),
              readFloat: o,
              npotTextureCube: u,
            }
          );
        },
        $ = function (t) {
          return (
            t instanceof Uint8Array ||
            t instanceof Uint16Array ||
            t instanceof Uint32Array ||
            t instanceof Int8Array ||
            t instanceof Int16Array ||
            t instanceof Int32Array ||
            t instanceof Float32Array ||
            t instanceof Float64Array ||
            t instanceof Uint8ClampedArray
          );
        },
        Y = function (t) {
          return Object.keys(t).map(function (e) {
            return t[e];
          });
        },
        Q = {
          shape: function (t) {
            for (var e = []; t.length; t = t[0]) e.push(t.length);
            return e;
          },
          flatten: function (t, e, n, r) {
            var i = 1;
            if (e.length) for (var o = 0; o < e.length; ++o) i *= e[o];
            else i = 0;
            switch (((n = r || U.allocType(n, i)), e.length)) {
              case 0:
                break;
              case 1:
                for (r = e[0], e = 0; e < r; ++e) n[e] = t[e];
                break;
              case 2:
                for (r = e[0], e = e[1], o = i = 0; o < r; ++o)
                  for (var a = t[o], u = 0; u < e; ++u) n[i++] = a[u];
                break;
              case 3:
                s(t, e[0], e[1], e[2], n, 0);
                break;
              default:
                !(function t(e, n, r, i, o) {
                  for (var a = 1, u = r + 1; u < n.length; ++u) a *= n[u];
                  var c = n[r];
                  if (4 == n.length - r) {
                    var f = n[r + 1],
                      l = n[r + 2];
                    for (n = n[r + 3], u = 0; u < c; ++u)
                      s(e[u], f, l, n, i, o), (o += a);
                  } else
                    for (u = 0; u < c; ++u) t(e[u], n, r + 1, i, o), (o += a);
                })(t, e, 0, n, 0);
            }
            return n;
          },
        },
        X = {
          "[object Int8Array]": 5120,
          "[object Int16Array]": 5122,
          "[object Int32Array]": 5124,
          "[object Uint8Array]": 5121,
          "[object Uint8ClampedArray]": 5121,
          "[object Uint16Array]": 5123,
          "[object Uint32Array]": 5125,
          "[object Float32Array]": 5126,
          "[object Float64Array]": 5121,
          "[object ArrayBuffer]": 5121,
        },
        J = {
          int8: 5120,
          int16: 5122,
          int32: 5124,
          uint8: 5121,
          uint16: 5123,
          uint32: 5125,
          float: 5126,
          float32: 5126,
        },
        K = { dynamic: 35048, stream: 35040, static: 35044 },
        Z = Q.flatten,
        tt = Q.shape,
        et = [];
      (et[5120] = 1),
        (et[5122] = 2),
        (et[5124] = 4),
        (et[5121] = 1),
        (et[5123] = 2),
        (et[5125] = 4),
        (et[5126] = 4);
      var nt = {
          points: 0,
          point: 0,
          lines: 1,
          line: 1,
          triangles: 4,
          triangle: 4,
          "line loop": 2,
          "line strip": 3,
          "triangle strip": 5,
          "triangle fan": 6,
        },
        rt = new Float32Array(1),
        it = new Uint32Array(rt.buffer),
        ot = [9984, 9986, 9985, 9987],
        at = [0, 6409, 6410, 6407, 6408],
        ut = {};
      (ut[6409] = ut[6406] = ut[6402] = 1),
        (ut[34041] = ut[6410] = 2),
        (ut[6407] = ut[35904] = 3),
        (ut[6408] = ut[35906] = 4);
      var ct = m("HTMLCanvasElement"),
        st = m("OffscreenCanvas"),
        ft = m("CanvasRenderingContext2D"),
        lt = m("ImageBitmap"),
        dt = m("HTMLImageElement"),
        pt = m("HTMLVideoElement"),
        ht = Object.keys(X).concat([ct, st, ft, lt, dt, pt]),
        vt = [];
      (vt[5121] = 1),
        (vt[5126] = 4),
        (vt[36193] = 2),
        (vt[5123] = 2),
        (vt[5125] = 4);
      var gt = [];
      (gt[32854] = 2),
        (gt[32855] = 2),
        (gt[36194] = 2),
        (gt[34041] = 4),
        (gt[33776] = 0.5),
        (gt[33777] = 0.5),
        (gt[33778] = 1),
        (gt[33779] = 1),
        (gt[35986] = 0.5),
        (gt[35987] = 1),
        (gt[34798] = 1),
        (gt[35840] = 0.5),
        (gt[35841] = 0.25),
        (gt[35842] = 0.5),
        (gt[35843] = 0.25),
        (gt[36196] = 0.5);
      var mt = [];
      (mt[32854] = 2),
        (mt[32855] = 2),
        (mt[36194] = 2),
        (mt[33189] = 2),
        (mt[36168] = 1),
        (mt[34041] = 4),
        (mt[35907] = 4),
        (mt[34836] = 16),
        (mt[34842] = 8),
        (mt[34843] = 6);
      var yt = function (t, e, n, r, i) {
          function o(t) {
            (this.id = s++),
              (this.refCount = 1),
              (this.renderbuffer = t),
              (this.format = 32854),
              (this.height = this.width = 0),
              i.profile && (this.stats = { size: 0 });
          }
          function a(e) {
            var n = e.renderbuffer;
            t.bindRenderbuffer(36161, null),
              t.deleteRenderbuffer(n),
              (e.renderbuffer = null),
              (e.refCount = 0),
              delete f[e.id],
              r.renderbufferCount--;
          }
          var u = {
            rgba4: 32854,
            rgb565: 36194,
            "rgb5 a1": 32855,
            depth: 33189,
            stencil: 36168,
            "depth stencil": 34041,
          };
          e.ext_srgb && (u.srgba = 35907),
            e.ext_color_buffer_half_float &&
              ((u.rgba16f = 34842), (u.rgb16f = 34843)),
            e.webgl_color_buffer_float && (u.rgba32f = 34836);
          var c = [];
          Object.keys(u).forEach(function (t) {
            c[u[t]] = t;
          });
          var s = 0,
            f = {};
          return (
            (o.prototype.decRef = function () {
              0 >= --this.refCount && a(this);
            }),
            i.profile &&
              (r.getTotalRenderbufferSize = function () {
                var t = 0;
                return (
                  Object.keys(f).forEach(function (e) {
                    t += f[e].stats.size;
                  }),
                  t
                );
              }),
            {
              create: function (e, n) {
                function a(e, n) {
                  var r = 0,
                    o = 0,
                    f = 32854;
                  if (
                    ("object" == typeof e && e
                      ? ("shape" in e
                          ? ((r = 0 | (o = e.shape)[0]), (o = 0 | o[1]))
                          : ("radius" in e && (r = o = 0 | e.radius),
                            "width" in e && (r = 0 | e.width),
                            "height" in e && (o = 0 | e.height)),
                        "format" in e && (f = u[e.format]))
                      : "number" == typeof e
                      ? ((r = 0 | e), (o = "number" == typeof n ? 0 | n : r))
                      : e || (r = o = 1),
                    r !== s.width || o !== s.height || f !== s.format)
                  )
                    return (
                      (a.width = s.width = r),
                      (a.height = s.height = o),
                      (s.format = f),
                      t.bindRenderbuffer(36161, s.renderbuffer),
                      t.renderbufferStorage(36161, f, r, o),
                      i.profile &&
                        (s.stats.size = mt[s.format] * s.width * s.height),
                      (a.format = c[s.format]),
                      a
                    );
                }
                var s = new o(t.createRenderbuffer());
                return (
                  (f[s.id] = s),
                  r.renderbufferCount++,
                  a(e, n),
                  (a.resize = function (e, n) {
                    var r = 0 | e,
                      o = 0 | n || r;
                    return r === s.width && o === s.height
                      ? a
                      : ((a.width = s.width = r),
                        (a.height = s.height = o),
                        t.bindRenderbuffer(36161, s.renderbuffer),
                        t.renderbufferStorage(36161, s.format, r, o),
                        i.profile &&
                          (s.stats.size = mt[s.format] * s.width * s.height),
                        a);
                  }),
                  (a._reglType = "renderbuffer"),
                  (a._renderbuffer = s),
                  i.profile && (a.stats = s.stats),
                  (a.destroy = function () {
                    s.decRef();
                  }),
                  a
                );
              },
              clear: function () {
                Y(f).forEach(a);
              },
              restore: function () {
                Y(f).forEach(function (e) {
                  (e.renderbuffer = t.createRenderbuffer()),
                    t.bindRenderbuffer(36161, e.renderbuffer),
                    t.renderbufferStorage(36161, e.format, e.width, e.height);
                }),
                  t.bindRenderbuffer(36161, null);
              },
            }
          );
        },
        bt = [];
      (bt[6408] = 4), (bt[6407] = 3);
      var xt = [];
      (xt[5121] = 1), (xt[5126] = 4), (xt[36193] = 2);
      var wt = ["x", "y", "z", "w"],
        _t =
          "blend.func blend.equation stencil.func stencil.opFront stencil.opBack sample.coverage viewport scissor.box polygonOffset.offset".split(
            " "
          ),
        Ot = {
          0: 0,
          1: 1,
          zero: 0,
          one: 1,
          "src color": 768,
          "one minus src color": 769,
          "src alpha": 770,
          "one minus src alpha": 771,
          "dst color": 774,
          "one minus dst color": 775,
          "dst alpha": 772,
          "one minus dst alpha": 773,
          "constant color": 32769,
          "one minus constant color": 32770,
          "constant alpha": 32771,
          "one minus constant alpha": 32772,
          "src alpha saturate": 776,
        },
        At = {
          never: 512,
          less: 513,
          "<": 513,
          equal: 514,
          "=": 514,
          "==": 514,
          "===": 514,
          lequal: 515,
          "<=": 515,
          greater: 516,
          ">": 516,
          notequal: 517,
          "!=": 517,
          "!==": 517,
          gequal: 518,
          ">=": 518,
          always: 519,
        },
        Et = {
          0: 0,
          zero: 0,
          keep: 7680,
          replace: 7681,
          increment: 7682,
          decrement: 7683,
          "increment wrap": 34055,
          "decrement wrap": 34056,
          invert: 5386,
        },
        jt = { cw: 2304, ccw: 2305 },
        St = new P(!1, !1, !1, function () {});
      return function (t) {
        function e() {
          if (0 === X.length) _ && _.update(), (tt = null);
          else {
            (tt = H.next(e)), l();
            for (var t = X.length - 1; 0 <= t; --t) {
              var n = X[t];
              n && n(L, null, 0);
            }
            g.flush(), _ && _.update();
          }
        }
        function n() {
          !tt && 0 < X.length && (tt = H.next(e));
        }
        function r() {
          tt && (H.cancel(e), (tt = null));
        }
        function o(t) {
          t.preventDefault(),
            r(),
            J.forEach(function (t) {
              t();
            });
        }
        function a(t) {
          g.getError(),
            y.restore(),
            M.restore(),
            D.restore(),
            N.restore(),
            q.restore(),
            U.restore(),
            R.restore(),
            _ && _.restore(),
            $.procs.refresh(),
            n(),
            K.forEach(function (t) {
              t();
            });
        }
        function u(t) {
          function e(t, e) {
            var n = {},
              r = {};
            return (
              Object.keys(t).forEach(function (i) {
                var o = t[i];
                if (V.isDynamic(o)) r[i] = V.unbox(o, i);
                else {
                  if (e && Array.isArray(o))
                    for (var a = 0; a < o.length; ++a)
                      if (V.isDynamic(o[a])) return void (r[i] = V.unbox(o, i));
                  n[i] = o;
                }
              }),
              { dynamic: r, static: n }
            );
          }
          var n = e(t.context || {}, !0),
            r = e(t.uniforms || {}, !0),
            i = e(t.attributes || {}, !1);
          t = e(
            (function (t) {
              function e(t) {
                if (t in n) {
                  var e = n[t];
                  delete n[t],
                    Object.keys(e).forEach(function (r) {
                      n[t + "." + r] = e[r];
                    });
                }
              }
              var n = B({}, t);
              return (
                delete n.uniforms,
                delete n.attributes,
                delete n.context,
                delete n.vao,
                "stencil" in n &&
                  n.stencil.op &&
                  ((n.stencil.opBack = n.stencil.opFront = n.stencil.op),
                  delete n.stencil.op),
                e("blend"),
                e("depth"),
                e("cull"),
                e("stencil"),
                e("polygonOffset"),
                e("scissor"),
                e("sample"),
                "vao" in t && (n.vao = t.vao),
                n
              );
            })(t),
            !1
          );
          var o = { gpuTime: 0, cpuTime: 0, count: 0 },
            a = $.compile(t, i, r, n, o),
            u = a.draw,
            c = a.batch,
            s = a.scope,
            f = [];
          return B(
            function (t, e) {
              var n;
              if ("function" == typeof t) return s.call(this, null, t, 0);
              if ("function" == typeof e)
                if ("number" == typeof t)
                  for (n = 0; n < t; ++n) s.call(this, null, e, n);
                else {
                  if (!Array.isArray(t)) return s.call(this, t, e, 0);
                  for (n = 0; n < t.length; ++n) s.call(this, t[n], e, n);
                }
              else if ("number" == typeof t) {
                if (0 < t)
                  return c.call(
                    this,
                    (function (t) {
                      for (; f.length < t; ) f.push(null);
                      return f;
                    })(0 | t),
                    0 | t
                  );
              } else {
                if (!Array.isArray(t)) return u.call(this, t);
                if (t.length) return c.call(this, t, t.length);
              }
            },
            {
              stats: o,
              destroy: function () {
                a.destroy();
              },
            }
          );
        }
        function c(t, e) {
          var n = 0;
          $.procs.poll();
          var r = e.color;
          r &&
            (g.clearColor(+r[0] || 0, +r[1] || 0, +r[2] || 0, +r[3] || 0),
            (n |= 16384)),
            "depth" in e && (g.clearDepth(+e.depth), (n |= 256)),
            "stencil" in e && (g.clearStencil(0 | e.stencil), (n |= 1024)),
            g.clear(n);
        }
        function s(t) {
          return (
            X.push(t),
            n(),
            {
              cancel: function () {
                var e = z(X, t);
                X[e] = function t() {
                  var e = z(X, t);
                  (X[e] = X[X.length - 1]), --X.length, 0 >= X.length && r();
                };
              },
            }
          );
        }
        function f() {
          var t = Y.viewport,
            e = Y.scissor_box;
          (t[0] = t[1] = e[0] = e[1] = 0),
            (L.viewportWidth =
              L.framebufferWidth =
              L.drawingBufferWidth =
              t[2] =
              e[2] =
                g.drawingBufferWidth),
            (L.viewportHeight =
              L.framebufferHeight =
              L.drawingBufferHeight =
              t[3] =
              e[3] =
                g.drawingBufferHeight);
        }
        function l() {
          (L.tick += 1), (L.time = v()), f(), $.procs.poll();
        }
        function d() {
          N.refresh(), f(), $.procs.refresh(), _ && _.update();
        }
        function v() {
          return (W() - O) / 1e3;
        }
        if (!(t = i(t))) return null;
        var g = t.gl,
          m = g.getContextAttributes();
        g.isContextLost();
        var y = (function (t, e) {
          function n(e) {
            var n;
            e = e.toLowerCase();
            try {
              n = r[e] = t.getExtension(e);
            } catch (t) {}
            return !!n;
          }
          for (var r = {}, i = 0; i < e.extensions.length; ++i) {
            var o = e.extensions[i];
            if (!n(o))
              return (
                e.onDestroy(),
                e.onDone(
                  '"' +
                    o +
                    '" extension is not supported by the current WebGL context, try upgrading your system or a different browser'
                ),
                null
              );
          }
          return (
            e.optionalExtensions.forEach(n),
            {
              extensions: r,
              restore: function () {
                Object.keys(r).forEach(function (t) {
                  if (r[t] && !n(t))
                    throw Error("(regl): error restoring extension " + t);
                });
              },
            }
          );
        })(g, t);
        if (!y) return null;
        var b = (function () {
            var t = { "": 0 },
              e = [""];
            return {
              id: function (n) {
                var r = t[n];
                return r || ((r = t[n] = e.length), e.push(n), r);
              },
              str: function (t) {
                return e[t];
              },
            };
          })(),
          x = {
            vaoCount: 0,
            bufferCount: 0,
            elementsCount: 0,
            framebufferCount: 0,
            shaderCount: 0,
            textureCount: 0,
            cubeCount: 0,
            renderbufferCount: 0,
            maxTextureUnits: 0,
          },
          w = y.extensions,
          _ = (function (t, e) {
            function n() {
              (this.endQueryIndex = this.startQueryIndex = -1),
                (this.sum = 0),
                (this.stats = null);
            }
            function r(t, e, r) {
              var i = a.pop() || new n();
              (i.startQueryIndex = t),
                (i.endQueryIndex = e),
                (i.sum = 0),
                (i.stats = r),
                u.push(i);
            }
            if (!e.ext_disjoint_timer_query) return null;
            var i = [],
              o = [],
              a = [],
              u = [],
              c = [],
              s = [];
            return {
              beginQuery: function (t) {
                var n = i.pop() || e.ext_disjoint_timer_query.createQueryEXT();
                e.ext_disjoint_timer_query.beginQueryEXT(35007, n),
                  o.push(n),
                  r(o.length - 1, o.length, t);
              },
              endQuery: function () {
                e.ext_disjoint_timer_query.endQueryEXT(35007);
              },
              pushScopeStats: r,
              update: function () {
                var t, n;
                if (0 !== (t = o.length)) {
                  (s.length = Math.max(s.length, t + 1)),
                    (c.length = Math.max(c.length, t + 1)),
                    (c[0] = 0);
                  var r = (s[0] = 0);
                  for (n = t = 0; n < o.length; ++n) {
                    var f = o[n];
                    e.ext_disjoint_timer_query.getQueryObjectEXT(f, 34919)
                      ? ((r += e.ext_disjoint_timer_query.getQueryObjectEXT(
                          f,
                          34918
                        )),
                        i.push(f))
                      : (o[t++] = f),
                      (c[n + 1] = r),
                      (s[n + 1] = t);
                  }
                  for (o.length = t, n = t = 0; n < u.length; ++n) {
                    var l = (r = u[n]).startQueryIndex;
                    (f = r.endQueryIndex),
                      (r.sum += c[f] - c[l]),
                      (l = s[l]),
                      (f = s[f]) === l
                        ? ((r.stats.gpuTime += r.sum / 1e6), a.push(r))
                        : ((r.startQueryIndex = l),
                          (r.endQueryIndex = f),
                          (u[t++] = r));
                  }
                  u.length = t;
                }
              },
              getNumPendingQueries: function () {
                return o.length;
              },
              clear: function () {
                i.push.apply(i, o);
                for (var t = 0; t < i.length; t++)
                  e.ext_disjoint_timer_query.deleteQueryEXT(i[t]);
                (o.length = 0), (i.length = 0);
              },
              restore: function () {
                (o.length = 0), (i.length = 0);
              },
            };
          })(0, w),
          O = W(),
          j = g.drawingBufferWidth,
          C = g.drawingBufferHeight,
          L = {
            tick: 0,
            time: 0,
            viewportWidth: j,
            viewportHeight: C,
            framebufferWidth: j,
            framebufferHeight: C,
            drawingBufferWidth: j,
            drawingBufferHeight: C,
            pixelRatio: t.pixelRatio,
          },
          I =
            ((j = {
              elements: null,
              primitive: 4,
              count: -1,
              offset: 0,
              instances: -1,
            }),
            G(g, w)),
          D = p(g, x, t, function (t) {
            return R.destroyBuffer(t);
          }),
          P = h(g, w, D, x),
          R = S(g, w, I, x, D, P, j),
          M = k(g, b, x, t),
          N = A(
            g,
            w,
            I,
            function () {
              $.procs.poll();
            },
            L,
            x,
            t
          ),
          q = yt(g, w, 0, x, t),
          U = E(g, w, I, N, q, x),
          $ = F(g, b, w, I, D, P, 0, U, {}, R, M, j, L, _, t),
          Y = ((b = T(g, U, $.procs.poll, L)), $.next),
          Q = g.canvas,
          X = [],
          J = [],
          K = [],
          Z = [t.onDestroy],
          tt = null;
        Q &&
          (Q.addEventListener("webglcontextlost", o, !1),
          Q.addEventListener("webglcontextrestored", a, !1));
        var et = (U.setFBO = u({
          framebuffer: V.define.call(null, 1, "framebuffer"),
        }));
        return (
          d(),
          (m = B(u, {
            clear: function (t) {
              if ("framebuffer" in t)
                if (
                  t.framebuffer &&
                  "framebufferCube" === t.framebuffer_reglType
                )
                  for (var e = 0; 6 > e; ++e)
                    et(B({ framebuffer: t.framebuffer.faces[e] }, t), c);
                else et(t, c);
              else c(0, t);
            },
            prop: V.define.bind(null, 1),
            context: V.define.bind(null, 2),
            this: V.define.bind(null, 3),
            draw: u({}),
            buffer: function (t) {
              return D.create(t, 34962, !1, !1);
            },
            elements: function (t) {
              return P.create(t, !1);
            },
            texture: N.create2D,
            cube: N.createCube,
            renderbuffer: q.create,
            framebuffer: U.create,
            framebufferCube: U.createCube,
            vao: R.createVAO,
            attributes: m,
            frame: s,
            on: function (t, e) {
              var n;
              switch (t) {
                case "frame":
                  return s(e);
                case "lost":
                  n = J;
                  break;
                case "restore":
                  n = K;
                  break;
                case "destroy":
                  n = Z;
              }
              return (
                n.push(e),
                {
                  cancel: function () {
                    for (var t = 0; t < n.length; ++t)
                      if (n[t] === e) {
                        (n[t] = n[n.length - 1]), n.pop();
                        break;
                      }
                  },
                }
              );
            },
            limits: I,
            hasExtension: function (t) {
              return 0 <= I.extensions.indexOf(t.toLowerCase());
            },
            read: b,
            destroy: function () {
              (X.length = 0),
                r(),
                Q &&
                  (Q.removeEventListener("webglcontextlost", o),
                  Q.removeEventListener("webglcontextrestored", a)),
                M.clear(),
                U.clear(),
                q.clear(),
                R.clear(),
                N.clear(),
                P.clear(),
                D.clear(),
                _ && _.clear(),
                Z.forEach(function (t) {
                  t();
                });
            },
            _gl: g,
            _refresh: d,
            poll: function () {
              l(), _ && _.update();
            },
            now: v,
            stats: x,
          })),
          t.onDone(null, m),
          m
        );
      };
    })();
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    }),
      n.d(e, "b", function () {
        return o;
      });
    n(26), n(27);
    function r(t, e, n) {
      var r,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = i.timeout,
        a = void 0 === o ? 0 : o,
        u = i.bubble,
        c = void 0 === u || u,
        s = function i(o) {
          (c || o.target === t) &&
            (t.removeEventListener(e, i), n(), r && window.clearTimeout(r));
        },
        f = function () {
          n(), t.removeEventListener(e, s);
        };
      t.addEventListener(e, s), a > 0 && (r = window.setTimeout(f, a));
    }
    function i(t, e, n) {
      return new Promise(function (i) {
        r(t, e, i, n);
      });
    }
    function o(t, e) {
      return new Promise(function (n) {
        !(function (t, e, n) {
          r(t, "transitionend", e, n);
        })(t, n, e);
      });
    }
  },
  function (t, e, n) {
    var r = n(88),
      i = n(89),
      o = r("keys");
    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(54),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? i(n + e, 0) : o(n, e);
    };
  },
  function (t, e, n) {
    var r = n(12),
      i = /#|\.prototype\./,
      o = function (t, e) {
        var n = u[a(t)];
        return n == s || (n != c && ("function" == typeof e ? r(e) : !!e));
      },
      a = (o.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase();
      }),
      u = (o.data = {}),
      c = (o.NATIVE = "N"),
      s = (o.POLYFILL = "P");
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(58);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(12);
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(17).f,
      i = n(19),
      o = n(7)("toStringTag");
    t.exports = function (t, e, n) {
      t &&
        !i((t = n ? t : t.prototype), o) &&
        r(t, o, { configurable: !0, value: e });
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(15);
    t.exports = function () {
      var t = r(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(12);
    function i(t, e) {
      return RegExp(t, e);
    }
    (e.UNSUPPORTED_Y = r(function () {
      var t = i("a", "y");
      return (t.lastIndex = 2), null != t.exec("abcd");
    })),
      (e.BROKEN_CARET = r(function () {
        var t = i("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }));
  },
  function (t, e, n) {
    "use strict";
    var r,
      i,
      o = n(74),
      a = n(75),
      u = RegExp.prototype.exec,
      c = String.prototype.replace,
      s = u,
      f =
        ((r = /a/),
        (i = /b*/g),
        u.call(r, "a"),
        u.call(i, "a"),
        0 !== r.lastIndex || 0 !== i.lastIndex),
      l = a.UNSUPPORTED_Y || a.BROKEN_CARET,
      d = void 0 !== /()??/.exec("")[1];
    (f || d || l) &&
      (s = function (t) {
        var e,
          n,
          r,
          i,
          a = this,
          s = l && a.sticky,
          p = o.call(a),
          h = a.source,
          v = 0,
          g = t;
        return (
          s &&
            (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"),
            (g = String(t).slice(a.lastIndex)),
            a.lastIndex > 0 &&
              (!a.multiline || (a.multiline && "\n" !== t[a.lastIndex - 1])) &&
              ((h = "(?: " + h + ")"), (g = " " + g), v++),
            (n = new RegExp("^(?:" + h + ")", p))),
          d && (n = new RegExp("^" + h + "$(?!\\s)", p)),
          f && (e = a.lastIndex),
          (r = u.call(s ? n : a, g)),
          s
            ? r
              ? ((r.input = r.input.slice(v)),
                (r[0] = r[0].slice(v)),
                (r.index = a.lastIndex),
                (a.lastIndex += r[0].length))
              : (a.lastIndex = 0)
            : f && r && (a.lastIndex = a.global ? r.index + r[0].length : e),
          d &&
            r &&
            r.length > 1 &&
            c.call(r[0], n, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      }),
      (t.exports = s);
  },
  function (t, e, n) {
    "use strict";
    n(35);
    var r = n(33),
      i = n(12),
      o = n(7),
      a = n(76),
      u = n(32),
      c = o("species"),
      s = !i(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: "7" }), t;
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      f = "$0" === "a".replace(/./, "$0"),
      l = o("replace"),
      d = !!/./[l] && "" === /./[l]("a", "$0"),
      p = !i(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var n = "ab".split(t);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      });
    t.exports = function (t, e, n, l) {
      var h = o(t),
        v = !i(function () {
          var e = {};
          return (
            (e[h] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        g =
          v &&
          !i(function () {
            var e = !1,
              n = /a/;
            return (
              "split" === t &&
                (((n = {}).constructor = {}),
                (n.constructor[c] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[h] = /./[h])),
              (n.exec = function () {
                return (e = !0), null;
              }),
              n[h](""),
              !e
            );
          });
      if (
        !v ||
        !g ||
        ("replace" === t && (!s || !f || d)) ||
        ("split" === t && !p)
      ) {
        var m = /./[h],
          y = n(
            h,
            ""[t],
            function (t, e, n, r, i) {
              return e.exec === a
                ? v && !i
                  ? { done: !0, value: m.call(e, n, r) }
                  : { done: !0, value: t.call(n, e, r) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: f,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d,
            }
          ),
          b = y[0],
          x = y[1];
        r(String.prototype, t, b),
          r(
            RegExp.prototype,
            h,
            2 == e
              ? function (t, e) {
                  return x.call(t, this, e);
                }
              : function (t) {
                  return x.call(t, this);
                }
          );
      }
      l && u(RegExp.prototype[h], "sham", !0);
    };
  },
  function (t, e, n) {
    var r = n(36),
      i = n(76);
    t.exports = function (t, e) {
      var n = t.exec;
      if ("function" == typeof n) {
        var o = n.call(t, e);
        if ("object" != typeof o)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== r(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return i.call(t, e);
    };
  },
  function (t, e, n) {
    var r,
      i = n(15),
      o = n(198),
      a = n(91),
      u = n(68),
      c = n(130),
      s = n(85),
      f = n(67),
      l = f("IE_PROTO"),
      d = function () {},
      p = function (t) {
        return "<script>" + t + "</script>";
      },
      h = function () {
        try {
          r = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, e;
        h = r
          ? (function (t) {
              t.write(p("")), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            })(r)
          : (((e = s("iframe")).style.display = "none"),
            c.appendChild(e),
            (e.src = String("javascript:")),
            (t = e.contentWindow.document).open(),
            t.write(p("document.F=Object")),
            t.close(),
            t.F);
        for (var n = a.length; n--; ) delete h.prototype[a[n]];
        return h();
      };
    (u[l] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((d.prototype = i(t)),
                (n = new d()),
                (d.prototype = null),
                (n[l] = t))
              : (n = h()),
            void 0 === e ? n : o(n, e)
          );
        });
  },
  function (t, e, n) {
    var r = n(118),
      i = n(91);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(90).includes,
      o = n(62);
    r(
      {
        target: "Array",
        proto: !0,
        forced: !n(34)("indexOf", { ACCESSORS: !0, 1: 0 }),
      },
      {
        includes: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      o("includes");
  },
  function (t, e, n) {
    var r = n(210);
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
        i,
        o = r(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (i = 0; i < a.length; i++)
          (n = a[i]),
            e.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]));
      }
      return o;
    };
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({ 1: 2 }, 1);
    e.f = o
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(5),
      i = n(16),
      o = r.document,
      a = i(o) && i(o.createElement);
    t.exports = function (t) {
      return a ? o.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(32);
    t.exports = function (t, e) {
      try {
        i(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(114),
      i = Function.toString;
    "function" != typeof r.inspectSource &&
      (r.inspectSource = function (t) {
        return i.call(t);
      }),
      (t.exports = r.inspectSource);
  },
  function (t, e, n) {
    var r = n(52),
      i = n(114);
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: r ? "pure" : "global",
      copyright: "漏 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++n + r).toString(36)
      );
    };
  },
  function (t, e, n) {
    var r = n(31),
      i = n(24),
      o = n(69),
      a = function (t) {
        return function (e, n, a) {
          var u,
            c = r(e),
            s = i(c.length),
            f = o(a, s);
          if (t && n != n) {
            for (; s > f; ) if ((u = c[f++]) != u) return !0;
          } else
            for (; s > f; f++)
              if ((t || f in c) && c[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(16),
      i = n(55),
      o = n(7)("species");
    t.exports = function (t, e) {
      var n;
      return (
        i(t) &&
          ("function" != typeof (n = t.constructor) ||
          (n !== Array && !i(n.prototype))
            ? r(n) && null === (n = n[o]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, n) {
    var r = n(12);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      });
  },
  function (t, e, n) {
    var r,
      i,
      o = n(5),
      a = n(120),
      u = o.process,
      c = u && u.versions,
      s = c && c.v8;
    s
      ? (i = (r = s.split("."))[0] + r[1])
      : a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (i = r[1]),
      (t.exports = i && +i);
  },
  function (t, e, n) {
    var r = {};
    (r[n(7)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r));
  },
  function (t, e, n) {
    var r = n(37),
      i = "[" + n(98) + "]",
      o = RegExp("^" + i + i + "*"),
      a = RegExp(i + i + "*$"),
      u = function (t) {
        return function (e) {
          var n = String(r(e));
          return (
            1 & t && (n = n.replace(o, "")), 2 & t && (n = n.replace(a, "")), n
          );
        };
      };
    t.exports = { start: u(1), end: u(2), trim: u(3) };
  },
  function (t, e) {
    t.exports =
      "\t\n\v\f\r 聽釟€鈥€鈥佲€傗€冣€勨€呪€嗏€団€堚€夆€娾€仧銆€\u2028\u2029\ufeff";
  },
  function (t, e, n) {
    var r = n(15),
      i = n(189);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, o) {
              return r(n), i(o), e ? t.call(n, o) : (n.__proto__ = o), n;
            };
          })()
        : void 0);
  },
  function (t, e, n) {
    var r = n(16),
      i = n(36),
      o = n(7)("match");
    t.exports = function (t) {
      var e;
      return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(77),
      i = n(15),
      o = n(24),
      a = n(37),
      u = n(102),
      c = n(78);
    r("match", 1, function (t, e, n) {
      return [
        function (e) {
          var n = a(this),
            r = null == e ? void 0 : e[t];
          return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
        },
        function (t) {
          var r = n(e, t, this);
          if (r.done) return r.value;
          var a = i(t),
            s = String(this);
          if (!a.global) return c(a, s);
          var f = a.unicode;
          a.lastIndex = 0;
          for (var l, d = [], p = 0; null !== (l = c(a, s)); ) {
            var h = String(l[0]);
            (d[p] = h),
              "" === h && (a.lastIndex = u(s, o(a.lastIndex), f)),
              p++;
          }
          return 0 === p ? null : d;
        },
      ];
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(135).charAt;
    t.exports = function (t, e, n) {
      return e + (n ? r(t, e).length : 1);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(77),
      i = n(100),
      o = n(15),
      a = n(37),
      u = n(128),
      c = n(102),
      s = n(24),
      f = n(78),
      l = n(76),
      d = n(12),
      p = [].push,
      h = Math.min,
      v = !d(function () {
        return !RegExp(4294967295, "y");
      });
    r(
      "split",
      2,
      function (t, e, n) {
        var r;
        return (
          (r =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
              ? function (t, n) {
                  var r = String(a(this)),
                    o = void 0 === n ? 4294967295 : n >>> 0;
                  if (0 === o) return [];
                  if (void 0 === t) return [r];
                  if (!i(t)) return e.call(r, t, o);
                  for (
                    var u,
                      c,
                      s,
                      f = [],
                      d =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      h = 0,
                      v = new RegExp(t.source, d + "g");
                    (u = l.call(v, r)) &&
                    !(
                      (c = v.lastIndex) > h &&
                      (f.push(r.slice(h, u.index)),
                      u.length > 1 &&
                        u.index < r.length &&
                        p.apply(f, u.slice(1)),
                      (s = u[0].length),
                      (h = c),
                      f.length >= o)
                    );

                  )
                    v.lastIndex === u.index && v.lastIndex++;
                  return (
                    h === r.length
                      ? (!s && v.test("")) || f.push("")
                      : f.push(r.slice(h)),
                    f.length > o ? f.slice(0, o) : f
                  );
                }
              : "0".split(void 0, 0).length
              ? function (t, n) {
                  return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                }
              : e),
          [
            function (e, n) {
              var i = a(this),
                o = null == e ? void 0 : e[t];
              return void 0 !== o ? o.call(e, i, n) : r.call(String(i), e, n);
            },
            function (t, i) {
              var a = n(r, t, this, i, r !== e);
              if (a.done) return a.value;
              var l = o(t),
                d = String(this),
                p = u(l, RegExp),
                g = l.unicode,
                m =
                  (l.ignoreCase ? "i" : "") +
                  (l.multiline ? "m" : "") +
                  (l.unicode ? "u" : "") +
                  (v ? "y" : "g"),
                y = new p(v ? l : "^(?:" + l.source + ")", m),
                b = void 0 === i ? 4294967295 : i >>> 0;
              if (0 === b) return [];
              if (0 === d.length) return null === f(y, d) ? [d] : [];
              for (var x = 0, w = 0, _ = []; w < d.length; ) {
                y.lastIndex = v ? w : 0;
                var O,
                  A = f(y, v ? d : d.slice(w));
                if (
                  null === A ||
                  (O = h(s(y.lastIndex + (v ? 0 : w)), d.length)) === x
                )
                  w = c(d, w, g);
                else {
                  if ((_.push(d.slice(x, w)), _.length === b)) return _;
                  for (var E = 1; E <= A.length - 1; E++)
                    if ((_.push(A[E]), _.length === b)) return _;
                  w = x = O;
                }
              }
              return _.push(d.slice(x)), _;
            },
          ]
        );
      },
      !v
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(135).charAt,
      i = n(42),
      o = n(138),
      a = i.set,
      u = i.getterFor("String Iterator");
    o(
      String,
      "String",
      function (t) {
        a(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
        var t,
          e = u(this),
          n = e.string,
          i = e.index;
        return i >= n.length
          ? { value: void 0, done: !0 }
          : ((t = r(n, i)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, n) {
    var r = n(4),
      i = n(204);
    r(
      { target: "Object", stat: !0, forced: Object.assign !== i },
      { assign: i }
    );
  },
  function (t, e, n) {
    var r = n(4),
      i = n(12),
      o = n(31),
      a = n(41).f,
      u = n(14),
      c = i(function () {
        a(1);
      });
    r(
      { target: "Object", stat: !0, forced: !u || c, sham: !u },
      {
        getOwnPropertyDescriptor: function (t, e) {
          return a(o(t), e);
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(4),
      i = n(14),
      o = n(116),
      a = n(31),
      u = n(41),
      c = n(56);
    r(
      { target: "Object", stat: !0, sham: !i },
      {
        getOwnPropertyDescriptors: function (t) {
          for (
            var e, n, r = a(t), i = u.f, s = o(r), f = {}, l = 0;
            s.length > l;

          )
            void 0 !== (n = i(r, (e = s[l++]))) && c(f, e, n);
          return f;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(45).find,
      o = n(62),
      a = n(34),
      u = !0,
      c = a("find");
    "find" in [] &&
      Array(1).find(function () {
        u = !1;
      }),
      r(
        { target: "Array", proto: !0, forced: u || !c },
        {
          find: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      o("find");
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return d;
      }),
        n.d(e, "b", function () {
          return p;
        });
      var r = n(172),
        i = n(153),
        o = n(154),
        a = n(173),
        u = n(21),
        c = n(2),
        s = n(20),
        f = n(155),
        l = n(6);
      function d() {
        var e = Object(c.a)();
        Object(l.b)(),
          Object(a.a)({ value: "t-val", attr: "t-attr" }),
          Object(c.a)()
            ? (t(".g--pt-hidden").remove(), t(".pt-hidden").remove())
            : (t(".g--ls-hidden").remove(), t(".ls-hidden").remove()),
          window.addEventListener("resize", function () {
            e !== Object(c.a)() && window.location.reload();
          });
      }
      function p() {
        var t = Object(c.a)();
        Object(f.a)(),
          Object(s.e)(),
          Object(o.a)(),
          Object(r.a)(),
          Object(i.a)(),
          Object(u.c)(),
          t && Object(u.d)("data-gtm-view-mo");
        var e = Object(l.d)();
        e.noImage && (e.alias = "360");
      }
    }.call(this, n(30)));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var n = (function () {
          if ("undefined" != typeof Map) return Map;
          function t(t, e) {
            var n = -1;
            return (
              t.some(function (t, r) {
                return t[0] === e && ((n = r), !0);
              }),
              n
            );
          }
          return (function () {
            function e() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(e.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.get = function (e) {
                var n = t(this.__entries__, e),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (e.prototype.set = function (e, n) {
                var r = t(this.__entries__, e);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([e, n]);
              }),
              (e.prototype.delete = function (e) {
                var n = this.__entries__,
                  r = t(n, e);
                ~r && n.splice(r, 1);
              }),
              (e.prototype.has = function (e) {
                return !!~t(this.__entries__, e);
              }),
              (e.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (e.prototype.forEach = function (t, e) {
                void 0 === e && (e = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var i = r[n];
                  t.call(e, i[1], i[0]);
                }
              }),
              e
            );
          })();
        })(),
        r =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        i =
          void 0 !== t && t.Math === Math
            ? t
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        o =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(i)
            : function (t) {
                return setTimeout(function () {
                  return t(Date.now());
                }, 1e3 / 60);
              };
      var a = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        u = "undefined" != typeof MutationObserver,
        c = (function () {
          function t() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (t, e) {
                var n = !1,
                  r = !1,
                  i = 0;
                function a() {
                  n && ((n = !1), t()), r && c();
                }
                function u() {
                  o(a);
                }
                function c() {
                  var t = Date.now();
                  if (n) {
                    if (t - i < 2) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(u, e);
                  i = t;
                }
                return c;
              })(this.refresh.bind(this), 20));
          }
          return (
            (t.prototype.addObserver = function (t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_();
            }),
            (t.prototype.removeObserver = function (t) {
              var e = this.observers_,
                n = e.indexOf(t);
              ~n && e.splice(n, 1),
                !e.length && this.connected_ && this.disconnect_();
            }),
            (t.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (t.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive();
              });
              return (
                t.forEach(function (t) {
                  return t.broadcastActive();
                }),
                t.length > 0
              );
            }),
            (t.prototype.connect_ = function () {
              r &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                u
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (t.prototype.disconnect_ = function () {
              r &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (t.prototype.onTransitionEnd_ = function (t) {
              var e = t.propertyName,
                n = void 0 === e ? "" : e;
              a.some(function (t) {
                return !!~n.indexOf(t);
              }) && this.refresh();
            }),
            (t.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new t()), this.instance_
              );
            }),
            (t.instance_ = null),
            t
          );
        })(),
        s = function (t, e) {
          for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(t, i, {
              value: e[i],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return t;
        },
        f = function (t) {
          return (t && t.ownerDocument && t.ownerDocument.defaultView) || i;
        },
        l = m(0, 0, 0, 0);
      function d(t) {
        return parseFloat(t) || 0;
      }
      function p(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        return e.reduce(function (e, n) {
          return e + d(t["border-" + n + "-width"]);
        }, 0);
      }
      function h(t) {
        var e = t.clientWidth,
          n = t.clientHeight;
        if (!e && !n) return l;
        var r = f(t).getComputedStyle(t),
          i = (function (t) {
            for (
              var e = {}, n = 0, r = ["top", "right", "bottom", "left"];
              n < r.length;
              n++
            ) {
              var i = r[n],
                o = t["padding-" + i];
              e[i] = d(o);
            }
            return e;
          })(r),
          o = i.left + i.right,
          a = i.top + i.bottom,
          u = d(r.width),
          c = d(r.height);
        if (
          ("border-box" === r.boxSizing &&
            (Math.round(u + o) !== e && (u -= p(r, "left", "right") + o),
            Math.round(c + a) !== n && (c -= p(r, "top", "bottom") + a)),
          !(function (t) {
            return t === f(t).document.documentElement;
          })(t))
        ) {
          var s = Math.round(u + o) - e,
            h = Math.round(c + a) - n;
          1 !== Math.abs(s) && (u -= s), 1 !== Math.abs(h) && (c -= h);
        }
        return m(i.left, i.top, u, c);
      }
      var v =
        "undefined" != typeof SVGGraphicsElement
          ? function (t) {
              return t instanceof f(t).SVGGraphicsElement;
            }
          : function (t) {
              return (
                t instanceof f(t).SVGElement && "function" == typeof t.getBBox
              );
            };
      function g(t) {
        return r
          ? v(t)
            ? (function (t) {
                var e = t.getBBox();
                return m(0, 0, e.width, e.height);
              })(t)
            : h(t)
          : l;
      }
      function m(t, e, n, r) {
        return { x: t, y: e, width: n, height: r };
      }
      var y = (function () {
          function t(t) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = m(0, 0, 0, 0)),
              (this.target = t);
          }
          return (
            (t.prototype.isActive = function () {
              var t = g(this.target);
              return (
                (this.contentRect_ = t),
                t.width !== this.broadcastWidth ||
                  t.height !== this.broadcastHeight
              );
            }),
            (t.prototype.broadcastRect = function () {
              var t = this.contentRect_;
              return (
                (this.broadcastWidth = t.width),
                (this.broadcastHeight = t.height),
                t
              );
            }),
            t
          );
        })(),
        b = function (t, e) {
          var n,
            r,
            i,
            o,
            a,
            u,
            c,
            f =
              ((r = (n = e).x),
              (i = n.y),
              (o = n.width),
              (a = n.height),
              (u =
                "undefined" != typeof DOMRectReadOnly
                  ? DOMRectReadOnly
                  : Object),
              (c = Object.create(u.prototype)),
              s(c, {
                x: r,
                y: i,
                width: o,
                height: a,
                top: i,
                right: r + o,
                bottom: a + i,
                left: r,
              }),
              c);
          s(this, { target: t, contentRect: f });
        },
        x = (function () {
          function t(t, e, r) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new n()),
              "function" != typeof t)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = t),
              (this.controller_ = e),
              (this.callbackCtx_ = r);
          }
          return (
            (t.prototype.observe = function (t) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof f(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) ||
                  (e.set(t, new y(t)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (t.prototype.unobserve = function (t) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof f(t).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) &&
                  (e.delete(t),
                  e.size || this.controller_.removeObserver(this));
              }
            }),
            (t.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (t.prototype.gatherActive = function () {
              var t = this;
              this.clearActive(),
                this.observations_.forEach(function (e) {
                  e.isActive() && t.activeObservations_.push(e);
                });
            }),
            (t.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var t = this.callbackCtx_,
                  e = this.activeObservations_.map(function (t) {
                    return new b(t.target, t.broadcastRect());
                  });
                this.callback_.call(t, e, t), this.clearActive();
              }
            }),
            (t.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (t.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            t
          );
        })(),
        w = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
        _ = function t(e) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var n = c.getInstance(),
            r = new x(e, n, this);
          w.set(this, r);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (t) {
        _.prototype[t] = function () {
          var e;
          return (e = w.get(this))[t].apply(e, arguments);
        };
      });
      var O = void 0 !== i.ResizeObserver ? i.ResizeObserver : _;
      e.a = O;
    }.call(this, n(83)));
  },
  function (t, e, n) {
    t.exports = (function () {
      "use strict";
      function t() {
        return (t =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var e = "undefined" != typeof window,
        n =
          (e && !("onscroll" in window)) ||
          ("undefined" != typeof navigator &&
            /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
        r = e && "IntersectionObserver" in window,
        i = e && "classList" in document.createElement("p"),
        o = e && window.devicePixelRatio > 1,
        a = {
          elements_selector: "img",
          container: n || e ? document : null,
          threshold: 300,
          thresholds: null,
          data_src: "src",
          data_srcset: "srcset",
          data_sizes: "sizes",
          data_bg: "bg",
          data_bg_hidpi: "bg-hidpi",
          data_bg_multi: "bg-multi",
          data_bg_multi_hidpi: "bg-multi-hidpi",
          data_poster: "poster",
          class_applied: "applied",
          class_loading: "loading",
          class_loaded: "loaded",
          class_error: "error",
          load_delay: 0,
          auto_unobserve: !0,
          cancel_on_exit: !1,
          callback_enter: null,
          callback_exit: null,
          callback_applied: null,
          callback_loading: null,
          callback_loaded: null,
          callback_error: null,
          callback_finish: null,
          callback_cancel: null,
          use_native: !1,
        },
        u = function (e) {
          return t({}, a, e);
        },
        c = function (t, e) {
          var n,
            r = new t(e);
          try {
            n = new CustomEvent("LazyLoad::Initialized", {
              detail: { instance: r },
            });
          } catch (t) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(
              "LazyLoad::Initialized",
              !1,
              !1,
              { instance: r }
            );
          }
          window.dispatchEvent(n);
        },
        s = function (t, e) {
          return t.getAttribute("data-" + e);
        },
        f = function (t, e, n) {
          var r = "data-" + e;
          null !== n ? t.setAttribute(r, n) : t.removeAttribute(r);
        },
        l = function (t) {
          return s(t, "ll-status");
        },
        d = function (t, e) {
          return f(t, "ll-status", e);
        },
        p = function (t) {
          return d(t, null);
        },
        h = function (t) {
          return null === l(t);
        },
        v = function (t) {
          return "delayed" === l(t);
        },
        g = ["loading", "applied", "loaded", "error"],
        m = function (t) {
          return g.indexOf(l(t)) > -1;
        },
        y = function (t, e) {
          return f(t, "ll-timeout", e);
        },
        b = function (t) {
          return s(t, "ll-timeout");
        },
        x = function (t, e, n, r) {
          t && (void 0 === r ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, r));
        },
        w = function (t, e) {
          i
            ? t.classList.add(e)
            : (t.className += (t.className ? " " : "") + e);
        },
        _ = function (t, e) {
          i
            ? t.classList.remove(e)
            : (t.className = t.className
                .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                .replace(/^\s+/, "")
                .replace(/\s+$/, ""));
        },
        O = function (t) {
          return t.llTempImage;
        },
        A = function (t, e, n) {
          if (n) {
            var r = n._observer;
            r && e.auto_unobserve && r.unobserve(t);
          }
        },
        E = function (t) {
          t && (t.loadingCount += 1);
        },
        j = function (t) {
          for (var e, n = [], r = 0; (e = t.children[r]); r += 1)
            "SOURCE" === e.tagName && n.push(e);
          return n;
        },
        S = function (t, e, n) {
          n && t.setAttribute(e, n);
        },
        k = function (t, e) {
          t.removeAttribute(e);
        },
        T = function (t) {
          return !!t.llOriginalAttrs;
        },
        C = function (t) {
          if (!T(t)) {
            var e = {};
            (e.src = t.getAttribute("src")),
              (e.srcset = t.getAttribute("srcset")),
              (e.sizes = t.getAttribute("sizes")),
              (t.llOriginalAttrs = e);
          }
        },
        L = function (t) {
          if (T(t)) {
            var e = t.llOriginalAttrs;
            S(t, "src", e.src),
              S(t, "srcset", e.srcset),
              S(t, "sizes", e.sizes);
          }
        },
        I = function (t, e) {
          S(t, "sizes", s(t, e.data_sizes)),
            S(t, "srcset", s(t, e.data_srcset)),
            S(t, "src", s(t, e.data_src));
        },
        D = function (t) {
          k(t, "src"), k(t, "srcset"), k(t, "sizes");
        },
        P = function (t, e) {
          var n = t.parentNode;
          n && "PICTURE" === n.tagName && j(n).forEach(e);
        },
        R = {
          IMG: function (t, e) {
            P(t, function (t) {
              C(t), I(t, e);
            }),
              C(t),
              I(t, e);
          },
          IFRAME: function (t, e) {
            S(t, "src", s(t, e.data_src));
          },
          VIDEO: function (t, e) {
            j(t).forEach(function (t) {
              S(t, "src", s(t, e.data_src));
            }),
              S(t, "poster", s(t, e.data_poster)),
              S(t, "src", s(t, e.data_src)),
              t.load();
          },
        },
        M = function (t, e, n) {
          var r = R[t.tagName];
          r &&
            (r(t, e),
            E(n),
            w(t, e.class_loading),
            d(t, "loading"),
            x(e.callback_loading, t, n),
            x(e.callback_reveal, t, n));
        },
        N = ["IMG", "IFRAME", "VIDEO"],
        F = function (t) {
          t && (t.loadingCount -= 1);
        },
        z = function (t, e) {
          !e || e.toLoadCount || e.loadingCount || x(t.callback_finish, e);
        },
        B = function (t, e, n) {
          t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
        },
        q = function (t, e, n) {
          t.removeEventListener(e, n);
        },
        V = function (t) {
          return !!t.llEvLisnrs;
        },
        H = function (t) {
          if (V(t)) {
            var e = t.llEvLisnrs;
            for (var n in e) {
              var r = e[n];
              q(t, n, r);
            }
            delete t.llEvLisnrs;
          }
        },
        W = function (t, e, n) {
          !(function (t) {
            delete t.llTempImage;
          })(t),
            F(n),
            _(t, e.class_loading),
            A(t, e, n);
        },
        U = function (t, e, n) {
          var r = O(t) || t;
          V(r) ||
            (function (t, e, n) {
              V(t) || (t.llEvLisnrs = {}),
                B(t, "load", e),
                B(t, "error", n),
                "VIDEO" === t.tagName && B(t, "loadeddata", e);
            })(
              r,
              function (i) {
                !(function (t, e, n, r) {
                  W(e, n, r),
                    w(e, n.class_loaded),
                    d(e, "loaded"),
                    x(n.callback_loaded, e, r),
                    z(n, r);
                })(0, t, e, n),
                  H(r);
              },
              function (i) {
                !(function (t, e, n, r) {
                  W(e, n, r),
                    w(e, n.class_error),
                    d(e, "error"),
                    x(n.callback_error, e, r),
                    z(n, r);
                })(0, t, e, n),
                  H(r);
              }
            );
        },
        G = function (t) {
          t && (t.toLoadCount -= 1);
        },
        $ = function (t, e, n) {
          !(function (t) {
            return N.indexOf(t.tagName) > -1;
          })(t)
            ? (function (t, e, n) {
                !(function (t) {
                  t.llTempImage = document.createElement("img");
                })(t),
                  U(t, e, n),
                  (function (t, e, n) {
                    var r = s(t, e.data_bg),
                      i = s(t, e.data_bg_hidpi),
                      a = o && i ? i : r;
                    a &&
                      ((t.style.backgroundImage = 'url("'.concat(a, '")')),
                      O(t).setAttribute("src", a),
                      E(n),
                      w(t, e.class_loading),
                      d(t, "loading"),
                      x(e.callback_loading, t, n),
                      x(e.callback_reveal, t, n));
                  })(t, e, n),
                  (function (t, e, n) {
                    var r = s(t, e.data_bg_multi),
                      i = s(t, e.data_bg_multi_hidpi),
                      a = o && i ? i : r;
                    a &&
                      ((t.style.backgroundImage = a),
                      w(t, e.class_applied),
                      d(t, "applied"),
                      A(t, e, n),
                      x(e.callback_applied, t, n));
                  })(t, e, n);
              })(t, e, n)
            : (function (t, e, n) {
                U(t, e, n), M(t, e, n);
              })(t, e, n),
            G(n),
            z(e, n);
        },
        Y = function (t) {
          var e = b(t);
          e && (v(t) && p(t), clearTimeout(e), y(t, null));
        },
        Q = function (t, e, n, r) {
          h(t) ||
            (n.cancel_on_exit &&
              (function (t) {
                return "loading" === l(t);
              })(t) &&
              (function (t, e, n, r) {
                "IMG" === t.tagName &&
                  (H(t),
                  (function (t) {
                    P(t, function (t) {
                      D(t);
                    }),
                      D(t);
                  })(t),
                  (function (t) {
                    P(t, function (t) {
                      L(t);
                    }),
                      L(t);
                  })(t),
                  _(t, n.class_loading),
                  F(r),
                  x(n.callback_cancel, t, e, r),
                  setTimeout(function () {
                    r.resetElementStatus(t, r);
                  }, 0));
              })(t, e, n, r),
            x(n.callback_exit, t, e, r),
            n.load_delay && v(t) && Y(t));
        },
        X = ["IMG", "IFRAME"],
        J = function (t) {
          return t.use_native && "loading" in HTMLImageElement.prototype;
        },
        K = function (t) {
          var e = t._settings;
          r &&
            !J(t._settings) &&
            (t._observer = new IntersectionObserver(
              function (n) {
                !(function (t, e, n) {
                  t.forEach(function (t) {
                    return (function (t) {
                      return t.isIntersecting || t.intersectionRatio > 0;
                    })(t)
                      ? (function (t, e, n, r) {
                          x(n.callback_enter, t, e, r),
                            m(t) ||
                              (n.load_delay
                                ? (function (t, e, n) {
                                    var r = e.load_delay,
                                      i = b(t);
                                    i ||
                                      ((i = setTimeout(function () {
                                        $(t, e, n), Y(t);
                                      }, r)),
                                      d(t, "delayed"),
                                      y(t, i));
                                  })(t, n, r)
                                : $(t, n, r));
                        })(t.target, t, e, n)
                      : Q(t.target, t, e, n);
                  });
                })(n, e, t);
              },
              (function (t) {
                return {
                  root: t.container === document ? null : t.container,
                  rootMargin: t.thresholds || t.threshold + "px",
                };
              })(e)
            ));
        },
        Z = function (t) {
          return Array.prototype.slice.call(t);
        },
        tt = function (t) {
          return t.container.querySelectorAll(t.elements_selector);
        },
        et = function (t) {
          return (function (t) {
            return "error" === l(t);
          })(t);
        },
        nt = function (t, e) {
          return (function (t) {
            return Z(t).filter(h);
          })(t || tt(e));
        },
        rt = function (t, n) {
          var r;
          (this._settings = u(t)),
            (this.loadingCount = 0),
            K(this),
            (r = this),
            e &&
              window.addEventListener("online", function (t) {
                !(function (t) {
                  var e,
                    n = t._settings;
                  ((e = tt(n)), Z(e).filter(et)).forEach(function (t) {
                    _(t, n.class_error), p(t);
                  }),
                    t.update();
                })(r);
              }),
            this.update(n);
        };
      return (
        (rt.prototype = {
          update: function (t) {
            var e,
              i,
              o = this._settings,
              a = nt(t, o);
            (this.toLoadCount = a.length),
              !n && r
                ? J(o)
                  ? (function (t, e, n) {
                      t.forEach(function (t) {
                        -1 !== X.indexOf(t.tagName) &&
                          (t.setAttribute("loading", "lazy"),
                          (function (t, e, n) {
                            U(t, e, n),
                              M(t, e, n),
                              G(n),
                              d(t, "native"),
                              z(e, n);
                          })(t, e, n));
                      }),
                        (n.toLoadCount = 0);
                    })(a, o, this)
                  : ((i = a),
                    (function (t) {
                      t.disconnect();
                    })((e = this._observer)),
                    (function (t, e) {
                      e.forEach(function (e) {
                        t.observe(e);
                      });
                    })(e, i))
                : this.loadAll(a);
          },
          destroy: function () {
            this._observer && this._observer.disconnect(),
              delete this._observer,
              delete this._settings,
              delete this.loadingCount,
              delete this.toLoadCount;
          },
          loadAll: function (t) {
            var e = this,
              n = this._settings;
            nt(t, n).forEach(function (t) {
              $(t, n, e);
            });
          },
          resetElementStatus: function (t) {
            !(function (t, e) {
              m(t) &&
                (function (t) {
                  t && (t.toLoadCount += 1);
                })(e),
                d(t, null);
            })(t, this);
          },
          load: function (t) {
            $(t, this._settings, this);
          },
        }),
        (rt.load = function (t, e) {
          var n = u(e);
          $(t, n);
        }),
        e &&
          (function (t, e) {
            if (e)
              if (e.length) for (var n, r = 0; (n = e[r]); r += 1) c(t, n);
              else c(t, e);
          })(rt, window.lazyLoadOptions),
        rt
      );
    })();
  },
  function (t, e, n) {
    t.exports = {
      create: n(221),
      clone: n(222),
      copy: n(223),
      identity: n(151),
      transpose: n(224),
      invert: n(225),
      adjoint: n(226),
      determinant: n(227),
      multiply: n(228),
      translate: n(229),
      scale: n(230),
      rotate: n(231),
      rotateX: n(232),
      rotateY: n(233),
      rotateZ: n(234),
      fromRotation: n(235),
      fromRotationTranslation: n(236),
      fromScaling: n(237),
      fromTranslation: n(238),
      fromXRotation: n(239),
      fromYRotation: n(240),
      fromZRotation: n(241),
      fromQuat: n(242),
      frustum: n(243),
      perspective: n(244),
      perspectiveFromFieldOfView: n(245),
      ortho: n(246),
      lookAt: n(247),
      str: n(248),
    };
  },
  function (t, e, n) {
    var r = n(14),
      i = n(12),
      o = n(85);
    t.exports =
      !r &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(5),
      i = n(86),
      o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(19),
      i = n(116),
      o = n(41),
      a = n(17);
    t.exports = function (t, e) {
      for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || u(t, f, c(e, f));
      }
    };
  },
  function (t, e, n) {
    var r = n(44),
      i = n(53),
      o = n(92),
      a = n(15);
    t.exports =
      r("Reflect", "ownKeys") ||
      function (t) {
        var e = i.f(a(t)),
          n = o.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(19),
      i = n(31),
      o = n(90).indexOf,
      a = n(68);
    t.exports = function (t, e) {
      var n,
        u = i(t),
        c = 0,
        s = [];
      for (n in u) !r(a, n) && r(u, n) && s.push(n);
      for (; e.length > c; ) r(u, (n = e[c++])) && (~o(s, n) || s.push(n));
      return s;
    };
  },
  function (t, e, n) {
    var r = n(94);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e, n) {
    var r = n(44);
    t.exports = r("navigator", "userAgent") || "";
  },
  function (t, e, n) {
    "use strict";
    var r = n(45).forEach,
      i = n(72),
      o = n(34),
      a = i("forEach"),
      u = o("forEach");
    t.exports =
      a && u
        ? [].forEach
        : function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (t, e, n) {
    var r = n(96),
      i = n(36),
      o = n(7)("toStringTag"),
      a =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        );
    t.exports = r
      ? i
      : function (t) {
          var e, n, r;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), o))
            ? n
            : a
            ? i(e)
            : "Object" == (r = i(e)) && "function" == typeof e.callee
            ? "Arguments"
            : r;
        };
  },
  function (t, e, n) {
    "use strict";
    var r = n(44),
      i = n(17),
      o = n(7),
      a = n(14),
      u = o("species");
    t.exports = function (t) {
      var e = r(t),
        n = i.f;
      a &&
        e &&
        !e[u] &&
        n(e, u, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, n) {
    var r = n(7),
      i = n(60),
      o = r("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || a[o] === t);
    };
  },
  function (t, e, n) {
    var r = n(122),
      i = n(60),
      o = n(7)("iterator");
    t.exports = function (t) {
      if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
    };
  },
  function (t, e, n) {
    var r = n(15);
    t.exports = function (t, e, n, i) {
      try {
        return i ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && r(o.call(t)), e);
      }
    };
  },
  function (t, e, n) {
    var r = n(7)("iterator"),
      i = !1;
    try {
      var o = 0,
        a = {
          next: function () {
            return { done: !!o++ };
          },
          return: function () {
            i = !0;
          },
        };
      (a[r] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var n = !1;
      try {
        var o = {};
        (o[r] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          t(o);
      } catch (t) {}
      return n;
    };
  },
  function (t, e, n) {
    var r = n(15),
      i = n(58),
      o = n(7)("species");
    t.exports = function (t, e) {
      var n,
        a = r(t).constructor;
      return void 0 === a || null == (n = r(a)[o]) ? e : i(n);
    };
  },
  function (t, e, n) {
    var r,
      i,
      o,
      a = n(5),
      u = n(12),
      c = n(36),
      s = n(71),
      f = n(130),
      l = n(85),
      d = n(131),
      p = a.location,
      h = a.setImmediate,
      v = a.clearImmediate,
      g = a.process,
      m = a.MessageChannel,
      y = a.Dispatch,
      b = 0,
      x = {},
      w = function (t) {
        if (x.hasOwnProperty(t)) {
          var e = x[t];
          delete x[t], e();
        }
      },
      _ = function (t) {
        return function () {
          w(t);
        };
      },
      O = function (t) {
        w(t.data);
      },
      A = function (t) {
        a.postMessage(t + "", p.protocol + "//" + p.host);
      };
    (h && v) ||
      ((h = function (t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
        return (
          (x[++b] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e);
          }),
          r(b),
          b
        );
      }),
      (v = function (t) {
        delete x[t];
      }),
      "process" == c(g)
        ? (r = function (t) {
            g.nextTick(_(t));
          })
        : y && y.now
        ? (r = function (t) {
            y.now(_(t));
          })
        : m && !d
        ? ((o = (i = new m()).port2),
          (i.port1.onmessage = O),
          (r = s(o.postMessage, o, 1)))
        : !a.addEventListener ||
          "function" != typeof postMessage ||
          a.importScripts ||
          u(A) ||
          "file:" === p.protocol
        ? (r =
            "onreadystatechange" in l("script")
              ? function (t) {
                  f.appendChild(l("script")).onreadystatechange = function () {
                    f.removeChild(this), w(t);
                  };
                }
              : function (t) {
                  setTimeout(_(t), 0);
                })
        : ((r = A), a.addEventListener("message", O, !1))),
      (t.exports = { set: h, clear: v });
  },
  function (t, e, n) {
    var r = n(44);
    t.exports = r("document", "documentElement");
  },
  function (t, e, n) {
    var r = n(120);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
  },
  function (t, e, n) {
    "use strict";
    var r = n(58),
      i = function (t) {
        var e, n;
        (this.promise = new t(function (t, r) {
          if (void 0 !== e || void 0 !== n)
            throw TypeError("Bad Promise constructor");
          (e = t), (n = r);
        })),
          (this.resolve = r(e)),
          (this.reject = r(n));
      };
    t.exports.f = function (t) {
      return new i(t);
    };
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = n(99);
    t.exports = function (t, e, n) {
      var o, a;
      return (
        i &&
          "function" == typeof (o = e.constructor) &&
          o !== n &&
          r((a = o.prototype)) &&
          a !== n.prototype &&
          i(t, a),
        t
      );
    };
  },
  function (t, e, n) {
    var r = n(54),
      i = n(37),
      o = function (t) {
        return function (e, n) {
          var o,
            a,
            u = String(i(e)),
            c = r(n),
            s = u.length;
          return c < 0 || c >= s
            ? t
              ? ""
              : void 0
            : (o = u.charCodeAt(c)) < 55296 ||
              o > 56319 ||
              c + 1 === s ||
              (a = u.charCodeAt(c + 1)) < 56320 ||
              a > 57343
            ? t
              ? u.charAt(c)
              : o
            : t
            ? u.slice(c, c + 2)
            : a - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: o(!1), charAt: o(!0) };
  },
  function (t, e, n) {
    "use strict";
    var r = n(77),
      i = n(15),
      o = n(37),
      a = n(194),
      u = n(78);
    r("search", 1, function (t, e, n) {
      return [
        function (e) {
          var n = o(this),
            r = null == e ? void 0 : e[t];
          return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
        },
        function (t) {
          var r = n(e, t, this);
          if (r.done) return r.value;
          var o = i(t),
            c = String(this),
            s = o.lastIndex;
          a(s, 0) || (o.lastIndex = 0);
          var f = u(o, c);
          return (
            a(o.lastIndex, s) || (o.lastIndex = s), null === f ? -1 : f.index
          );
        },
      ];
    });
  },
  function (t, e, n) {
    var r = n(4),
      i = n(195);
    r(
      {
        target: "Array",
        stat: !0,
        forced: !n(127)(function (t) {
          Array.from(t);
        }),
      },
      { from: i }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(196),
      o = n(140),
      a = n(99),
      u = n(73),
      c = n(32),
      s = n(33),
      f = n(7),
      l = n(52),
      d = n(60),
      p = n(139),
      h = p.IteratorPrototype,
      v = p.BUGGY_SAFARI_ITERATORS,
      g = f("iterator"),
      m = function () {
        return this;
      };
    t.exports = function (t, e, n, f, p, y, b) {
      i(n, e, f);
      var x,
        w,
        _,
        O = function (t) {
          if (t === p && k) return k;
          if (!v && t in j) return j[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        A = e + " Iterator",
        E = !1,
        j = t.prototype,
        S = j[g] || j["@@iterator"] || (p && j[p]),
        k = (!v && S) || O(p),
        T = ("Array" == e && j.entries) || S;
      if (
        (T &&
          ((x = o(T.call(new t()))),
          h !== Object.prototype &&
            x.next &&
            (l ||
              o(x) === h ||
              (a ? a(x, h) : "function" != typeof x[g] && c(x, g, m)),
            u(x, A, !0, !0),
            l && (d[A] = m))),
        "values" == p &&
          S &&
          "values" !== S.name &&
          ((E = !0),
          (k = function () {
            return S.call(this);
          })),
        (l && !b) || j[g] === k || c(j, g, k),
        (d[e] = k),
        p)
      )
        if (
          ((w = {
            values: O("values"),
            keys: y ? k : O("keys"),
            entries: O("entries"),
          }),
          b)
        )
          for (_ in w) (!v && !E && _ in j) || s(j, _, w[_]);
        else r({ target: e, proto: !0, forced: v || E }, w);
      return w;
    };
  },
  function (t, e, n) {
    "use strict";
    var r,
      i,
      o,
      a = n(140),
      u = n(32),
      c = n(19),
      s = n(7),
      f = n(52),
      l = s("iterator"),
      d = !1;
    [].keys &&
      ("next" in (o = [].keys())
        ? (i = a(a(o))) !== Object.prototype && (r = i)
        : (d = !0)),
      null == r && (r = {}),
      f ||
        c(r, l) ||
        u(r, l, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d });
  },
  function (t, e, n) {
    var r = n(19),
      i = n(25),
      o = n(67),
      a = n(197),
      u = o("IE_PROTO"),
      c = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = i(t)),
            r(t, u)
              ? t[u]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? c
              : null
          );
        };
  },
  function (t, e, n) {
    var r = n(14),
      i = n(17).f,
      o = Function.prototype,
      a = o.toString,
      u = /^\s*function ([^ (]*)/;
    !r ||
      "name" in o ||
      i(o, "name", {
        configurable: !0,
        get: function () {
          try {
            return a.call(this).match(u)[1];
          } catch (t) {
            return "";
          }
        },
      });
  },
  function (t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    };
  },
  function (t, e, n) {
    var r = n(7);
    e.f = r;
  },
  function (t, e, n) {
    var r = n(117),
      i = n(19),
      o = n(143),
      a = n(17).f;
    t.exports = function (t) {
      var e = r.Symbol || (r.Symbol = {});
      i(e, t) || a(e, t, { value: o.f(t) });
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(69),
      o = n(54),
      a = n(24),
      u = n(25),
      c = n(93),
      s = n(56),
      f = n(57),
      l = n(34),
      d = f("splice"),
      p = l("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      h = Math.max,
      v = Math.min;
    r(
      { target: "Array", proto: !0, forced: !d || !p },
      {
        splice: function (t, e) {
          var n,
            r,
            f,
            l,
            d,
            p,
            g = u(this),
            m = a(g.length),
            y = i(t, m),
            b = arguments.length;
          if (
            (0 === b
              ? (n = r = 0)
              : 1 === b
              ? ((n = 0), (r = m - y))
              : ((n = b - 2), (r = v(h(o(e), 0), m - y))),
            m + n - r > 9007199254740991)
          )
            throw TypeError("Maximum allowed length exceeded");
          for (f = c(g, r), l = 0; l < r; l++)
            (d = y + l) in g && s(f, l, g[d]);
          if (((f.length = r), n < r)) {
            for (l = y; l < m - r; l++)
              (p = l + n), (d = l + r) in g ? (g[p] = g[d]) : delete g[p];
            for (l = m; l > m - r + n; l--) delete g[l - 1];
          } else if (n > r)
            for (l = m - r; l > y; l--)
              (p = l + n - 1),
                (d = l + r - 1) in g ? (g[p] = g[d]) : delete g[p];
          for (l = 0; l < n; l++) g[l + y] = arguments[l + 2];
          return (g.length = m - r + n), f;
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(45).findIndex,
      o = n(62),
      a = n(34),
      u = !0,
      c = a("findIndex");
    "findIndex" in [] &&
      Array(1).findIndex(function () {
        u = !1;
      }),
      r(
        { target: "Array", proto: !0, forced: u || !c },
        {
          findIndex: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      o("findIndex");
  },
  function (t, e, n) {
    "use strict";
    var r = n(14),
      i = n(5),
      o = n(70),
      a = n(33),
      u = n(19),
      c = n(36),
      s = n(134),
      f = n(51),
      l = n(12),
      d = n(79),
      p = n(53).f,
      h = n(41).f,
      v = n(17).f,
      g = n(97).trim,
      m = i.Number,
      y = m.prototype,
      b = "Number" == c(d(y)),
      x = function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          u,
          c,
          s = f(t, !1);
        if ("string" == typeof s && s.length > 2)
          if (43 === (e = (s = g(s)).charCodeAt(0)) || 45 === e) {
            if (88 === (n = s.charCodeAt(2)) || 120 === n) return NaN;
          } else if (48 === e) {
            switch (s.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (i = 49);
                break;
              case 79:
              case 111:
                (r = 8), (i = 55);
                break;
              default:
                return +s;
            }
            for (a = (o = s.slice(2)).length, u = 0; u < a; u++)
              if ((c = o.charCodeAt(u)) < 48 || c > i) return NaN;
            return parseInt(o, r);
          }
        return +s;
      };
    if (o("Number", !m(" 0o1") || !m("0b1") || m("+0x1"))) {
      for (
        var w,
          _ = function (t) {
            var e = arguments.length < 1 ? 0 : t,
              n = this;
            return n instanceof _ &&
              (b
                ? l(function () {
                    y.valueOf.call(n);
                  })
                : "Number" != c(n))
              ? s(new m(x(e)), n, _)
              : x(e);
          },
          O = r
            ? p(m)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          A = 0;
        O.length > A;
        A++
      )
        u(m, (w = O[A])) && !u(_, w) && v(_, w, h(m, w));
      (_.prototype = y), (y.constructor = _), a(i, "Number", _);
    }
  },
  function (t, e, n) {
    "use strict";
    var r = n(31),
      i = n(62),
      o = n(60),
      a = n(42),
      u = n(138),
      c = a.set,
      s = a.getterFor("Array Iterator");
    (t.exports = u(
      Array,
      "Array",
      function (t, e) {
        c(this, { type: "Array Iterator", target: r(t), index: 0, kind: e });
      },
      function () {
        var t = s(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: e[r], done: !1 }
          : { value: [r, e[r]], done: !1 };
      },
      "values"
    )),
      (o.Arguments = o.Array),
      i("keys"),
      i("values"),
      i("entries");
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(215).left,
      o = n(72),
      a = n(34),
      u = o("reduce"),
      c = a("reduce", { 1: 0 });
    r(
      { target: "Array", proto: !0, forced: !u || !c },
      {
        reduce: function (t) {
          return i(
            this,
            t,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(4),
      i = n(220),
      o = n(62);
    r({ target: "Array", proto: !0 }, { fill: i }), o("fill");
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e, n) {
    var r = n(199),
      i = n(200),
      o = n(201),
      a = n(202);
    t.exports = function (t) {
      return r(t) || i(t) || o(t) || a();
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return f;
    });
    n(8), n(13);
    var r = n(11),
      i = n.n(r),
      o = (n(63), n(22)),
      a = n.n(o),
      u = n(3),
      c = n(48),
      s = n(23);
    var f = function () {
      document.querySelectorAll(".g--video-converter").forEach(function (t) {
        t.querySelectorAll(".video").forEach(
          (function () {
            var t = a()(
              i.a.mark(function t(e) {
                var n, r, o;
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (null === e.getAttribute("data-cover")) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        if (!(e instanceof HTMLVideoElement)) {
                          t.next = 6;
                          break;
                        }
                        (t.t0 = void 0), (t.next = 9);
                        break;
                      case 6:
                        return (t.next = 8), Object(c.a)(e);
                      case 8:
                        t.t0 = t.sent;
                      case 9:
                        (n = t.t0),
                          (r = n && (+e.getAttribute("data-fps") || 24)),
                          (o = n && (e.getAttribute("data-mode") || s.c.Loop)),
                          Object(u.a)(e, {
                            handlers: {
                              onStateChange: function (t) {
                                var i = t.state;
                                n
                                  ? "inView" === i
                                    ? n.playing || n.play({ fps: r, mode: o })
                                    : n.playing && n.pause()
                                  : n ||
                                    ("inView" === i
                                      ? e.readyState >= 3
                                        ? e.play()
                                        : e.setAttribute("autoplay", "")
                                      : e.paused || e.pause());
                              },
                            },
                          });
                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })()
        );
      });
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    var r = n(28);
    function i() {
      Object(r.a)(".g--sticky-container .g--sticky-item");
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return d;
    });
    n(8), n(81), n(13);
    var r = n(2),
      i = n(3),
      o = n(0);
    function a() {
      return window.document.getElementById("navbar");
    }
    var u,
      c,
      s = [];
    function f(t, e) {
      (s[t] = e),
        u && window.cancelAnimationFrame(u),
        (u = window.requestAnimationFrame(function () {
          u = void 0;
          var t = a();
          c || (c = t.getAttribute("data-theme-default") || "light");
          var e = "dark" === c ? "light" : "dark";
          t.setAttribute("data-theme", s.includes(e) ? e : c);
        }));
    }
    function l(t) {
      t.forEach(function (t) {
        var e,
          n =
            ((e = s.length),
            s.push(void 0),
            {
              lighten: function () {
                return f(e, "light");
              },
              darken: function () {
                return f(e, "dark");
              },
              unset: function () {
                return f(e, void 0);
              },
            }),
          o = t.hasAttribute("data-theme-dark"),
          a = { percent: "top", distance: Object(r.a)() ? 50 : 60 };
        Object(i.a)(t, {
          start: a,
          end: "bottom" === t.getAttribute("data-theme-end") ? "bottom" : a,
          handlers: {
            onStateChange: function (t) {
              "inView" === t.state ? (o ? n.darken() : n.lighten()) : n.unset();
            },
          },
        });
      });
    }
    function d() {
      a() &&
        l(
          Object(o.e)(
            document,
            "#main-wrapper ["
              .concat("data-theme-dark", "],#main-wrapper [")
              .concat("data-theme-light", "]")
          )
        );
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return u;
    });
    n(8), n(39), n(13);
    var r = n(9),
      i = n(3),
      o = n(2);
    function a(t, e) {
      var n = r.a.timeline({ autoplay: !1, easing: "linear" }).add(
          {
            targets: e.map(function (t) {
              return t.element;
            }),
            translateY: function (t, n) {
              return [40 + 50 * e[n].seq, 0];
            },
            duration: 1,
          },
          0
        ),
        o = r.a
          .timeline({ autoplay: !1, easing: "linear" })
          .add({ targets: t, opacity: [0, 1], duration: 1 }, 0),
        a = { percent: 0.9 };
      Object(i.a)(t, {
        start: a,
        end: a,
        forceInViewBoundary: !0,
        handlers: {
          inView: function (t) {
            var e = t.distance / t.total;
            o.seek(e),
              (function (t) {
                n.seek(t);
              })(e);
          },
        },
      });
    }
    function u() {
      var t = ""
        .concat(".ta--item", ",")
        .concat(Object(o.a)() ? ".ta--item-pt" : ".ta--item-ls");
      document.querySelectorAll(".ta--group").forEach(function (e) {
        var n = [];
        e.querySelectorAll(t).forEach(function (t, e) {
          n.push({ element: t, seq: e });
        }),
          a(e, n);
      });
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return a;
    });
    n(8), n(13);
    var r = n(9),
      i = n(3),
      o = n(2);
    n(0);
    function a() {
      document.querySelectorAll(".g--pic-move").forEach(function (t) {
        var e = r.a.timeline({ autoplay: !1, easing: "linear" });
        e.add(
          {
            targets: t,
            opacity: [0, 1],
            scale: [1.1, 1],
            duration: o.a ? 0.25 : 0.1,
          },
          0
        );
        Object(i.a)(t, {
          start: "bottom",
          end: "top",
          forceInViewBoundary: !0,
          handlers: {
            inView: function (t) {
              !(function (t) {
                e.seek(t);
              })(t.distance / t.total);
            },
          },
        });
      }),
        document.querySelectorAll(".g--pic-scale").forEach(function (t) {
          var e = r.a.timeline({ autoplay: !1, easing: "linear" });
          e.add({ targets: t, scale: [1.1, 1], duration: o.a ? 0.25 : 0.1 }, 0);
          Object(i.a)(t, {
            start: "bottom",
            end: "top",
            forceInViewBoundary: !0,
            handlers: {
              inView: function (t) {
                !(function (t) {
                  e.seek(t);
                })(t.distance / t.total);
              },
            },
          });
        }),
        document.querySelectorAll(".g--pic-op").forEach(function (t) {
          var e = r.a.timeline({ autoplay: !1, easing: "linear" });
          e.add({ targets: t, opacity: [0, 1], duration: 0.05 }, 0.05);
          Object(i.a)(t, {
            start: "bottom",
            end: "top",
            forceInViewBoundary: !0,
            handlers: {
              inView: function (t) {
                !(function (t) {
                  e.seek(t);
                })(t.distance / t.total);
              },
            },
          });
        });
    }
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return s;
      });
      n(40), n(108), n(8), n(38), n(59), n(35), n(61), n(13);
      var r = n(10),
        i = n(1),
        o = n(2),
        a = n(0),
        u = n(161);
      function c(t) {
        return null != t && "false" !== t;
      }
      function s() {
        var e = Object(i.f)(80),
          n = Object(i.f)(85),
          s = Object(o.a)();
        t(".comp-angle-block").each(function (o, f) {
          var l = Object(i.h)(f),
            d = function (t) {
              return (
                (s && f.getAttribute("".concat(t, "-mo"))) ||
                (!s && f.getAttribute("".concat(t, "-pc"))) ||
                f.getAttribute(t)
              );
            },
            p = Object(a.d)(f, ".angles .top-right"),
            h = Object(a.d)(f, ".angles .top-left"),
            v = Object(a.d)(f, ".angles .bottom-left"),
            g = Object(a.d)(f, ".angles .bottom-right"),
            m = c(f.getAttribute("data-animation")),
            y =
              (s && c(f.getAttribute("data-mo-left"))) ||
              (!s && c(f.getAttribute("data-pc-left"))),
            b = d("data-trigger-offset"),
            x = d("data-delay");
          x = parseFloat(x || 0);
          var w =
              (s && c(f.getAttribute("data-opacity-mo"))) ||
              (!s && c(f.getAttribute("data-opacity-pc"))),
            _ = d("data-reverse") || "prev",
            O = d("data-prev");
          if (O && -1 !== O.indexOf("vh")) {
            var A = parseFloat(O.replace("vh", ""));
            O = function () {
              return Object(i.f)(A);
            };
          }
          var E = d("data-trigger-selector"),
            j = function () {
              var t = Object(i.e)(f) - (s ? n : e);
              return (
                c(E) && (t = Object(i.e)(Object(a.d)(document, E))),
                b && (t = Object(u.a)(b) + t),
                t
              );
            },
            S = function (e) {
              e.forEach(function (e) {
                t(e.element).css({
                  transform: "translateX("
                    .concat(e.startTranslateX, "px) rotate(")
                    .concat(e.rotate, ")"),
                }),
                  Object(r.b)({ position: j, reverse: _, prev: O }).add({
                    targets: e.element,
                    position: j,
                    reverse: _,
                    prev: O,
                    translateX: ["".concat(e.startTranslateX, "px"), "0px"],
                    rotate: e.rotate ? [e.rotate, e.rotate] : void 0,
                    duration: 600,
                    delay: x,
                    easing: "easeOutQuad",
                  });
              });
            };
          m &&
            (s ||
              (t(f).find(".angle").css({ opacity: 0 }),
              Object(r.b)({ position: j, reverse: _, prev: O })
                .add({
                  targets: Object(a.e)(f, ".angle"),
                  opacity: [0, 1],
                  duration: 300,
                  delay: x,
                  easing: "linear",
                })
                .add({
                  targets: Object(a.d)(f, ".angles"),
                  opacity: [1, 0],
                  duration: 400,
                  delay: x + 600,
                  easing: "easeOutQuad",
                })),
            y
              ? (t(f).find(".comp-inner").css({ overflow: "hidden" }),
                t(f)
                  .find(".comp-inner")
                  .children()
                  .each(function (e, n) {
                    t(n).addClass("comp-angle-block-fade-in-left"),
                      w && t(n).addClass("start-opacity"),
                      Object(r.b)({ position: j, reverse: _, prev: O }).add({
                        targets: n,
                        duration: s ? 500 : 700,
                        delay: x + e * (s ? 50 : 70),
                        addClassName: "fade-in",
                        easing: "easeOutQuad",
                      });
                  }),
                s ||
                  S([
                    { element: p, startTranslateX: -0.6 * l, rotate: "90deg" },
                    { element: g, startTranslateX: -0.6 * l, rotate: "180deg" },
                  ]))
              : (t(f)
                  .find(".comp-inner")
                  .children()
                  .each(function (e, n) {
                    t(n).addClass("comp-angle-block-fade-in"),
                      w && t(n).addClass("start-opacity"),
                      Object(r.b)({ position: j, reverse: _, prev: O }).add({
                        targets: n,
                        duration: s ? 500 : 700,
                        delay: x + e * (s ? 50 : 70),
                        addClassName: "fade-in",
                        easing: "easeOutQuad",
                      });
                  }),
                s ||
                  S([
                    { element: h, startTranslateX: 0.3 * l },
                    { element: p, startTranslateX: -0.3 * l, rotate: "90deg" },
                    { element: v, startTranslateX: 0.3 * l, rotate: "-90deg" },
                    { element: g, startTranslateX: -0.3 * l, rotate: "180deg" },
                  ])));
        });
      }
    }.call(this, n(30)));
  },
  function (t, e) {
    function n(e) {
      return (
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? (t.exports = n =
              function (t) {
                return typeof t;
              })
          : (t.exports = n =
              function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        n(e)
      );
    }
    t.exports = n;
  },
  function (t, e, n) {
    (function (t, r) {
      var i;
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ (function () {
        var o = "Expected a function",
          a = "__lodash_placeholder__",
          u = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256],
          ],
          c = "[object Arguments]",
          s = "[object Array]",
          f = "[object Boolean]",
          l = "[object Date]",
          d = "[object Error]",
          p = "[object Function]",
          h = "[object GeneratorFunction]",
          v = "[object Map]",
          g = "[object Number]",
          m = "[object Object]",
          y = "[object RegExp]",
          b = "[object Set]",
          x = "[object String]",
          w = "[object Symbol]",
          _ = "[object WeakMap]",
          O = "[object ArrayBuffer]",
          A = "[object DataView]",
          E = "[object Float32Array]",
          j = "[object Float64Array]",
          S = "[object Int8Array]",
          k = "[object Int16Array]",
          T = "[object Int32Array]",
          C = "[object Uint8Array]",
          L = "[object Uint16Array]",
          I = "[object Uint32Array]",
          D = /\b__p \+= '';/g,
          P = /\b(__p \+=) '' \+/g,
          R = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          M = /&(?:amp|lt|gt|quot|#39);/g,
          N = /[&<>"']/g,
          F = RegExp(M.source),
          z = RegExp(N.source),
          B = /<%-([\s\S]+?)%>/g,
          q = /<%([\s\S]+?)%>/g,
          V = /<%=([\s\S]+?)%>/g,
          H = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          W = /^\w*$/,
          U =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          G = /[\\^$.*+?()[\]{}|]/g,
          $ = RegExp(G.source),
          Y = /^\s+|\s+$/g,
          Q = /^\s+/,
          X = /\s+$/,
          J = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          K = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Z = /,? & /,
          tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          et = /\\(\\)?/g,
          nt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          rt = /\w*$/,
          it = /^[-+]0x[0-9a-f]+$/i,
          ot = /^0b[01]+$/i,
          at = /^\[object .+?Constructor\]$/,
          ut = /^0o[0-7]+$/i,
          ct = /^(?:0|[1-9]\d*)$/,
          st = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          ft = /($^)/,
          lt = /['\n\r\u2028\u2029\\]/g,
          dt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
          pt =
            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          ht = "[\\ud800-\\udfff]",
          vt = "[" + pt + "]",
          gt = "[" + dt + "]",
          mt = "\\d+",
          yt = "[\\u2700-\\u27bf]",
          bt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
          xt =
            "[^\\ud800-\\udfff" +
            pt +
            mt +
            "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
          wt = "\\ud83c[\\udffb-\\udfff]",
          _t = "[^\\ud800-\\udfff]",
          Ot = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          At = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Et = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
          jt = "(?:" + bt + "|" + xt + ")",
          St = "(?:" + Et + "|" + xt + ")",
          kt = "(?:" + gt + "|" + wt + ")" + "?",
          Tt =
            "[\\ufe0e\\ufe0f]?" +
            kt +
            ("(?:\\u200d(?:" +
              [_t, Ot, At].join("|") +
              ")[\\ufe0e\\ufe0f]?" +
              kt +
              ")*"),
          Ct = "(?:" + [yt, Ot, At].join("|") + ")" + Tt,
          Lt = "(?:" + [_t + gt + "?", gt, Ot, At, ht].join("|") + ")",
          It = RegExp("['鈥橾", "g"),
          Dt = RegExp(gt, "g"),
          Pt = RegExp(wt + "(?=" + wt + ")|" + Lt + Tt, "g"),
          Rt = RegExp(
            [
              Et +
                "?" +
                bt +
                "+(?:['鈥橾(?:d|ll|m|re|s|t|ve))?(?=" +
                [vt, Et, "$"].join("|") +
                ")",
              St +
                "+(?:['鈥橾(?:D|LL|M|RE|S|T|VE))?(?=" +
                [vt, Et + jt, "$"].join("|") +
                ")",
              Et + "?" + jt + "+(?:['鈥橾(?:d|ll|m|re|s|t|ve))?",
              Et + "+(?:['鈥橾(?:D|LL|M|RE|S|T|VE))?",
              "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
              "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
              mt,
              Ct,
            ].join("|"),
            "g"
          ),
          Mt = RegExp("[\\u200d\\ud800-\\udfff" + dt + "\\ufe0e\\ufe0f]"),
          Nt =
            /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Ft = [
            "Array",
            "Buffer",
            "DataView",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout",
          ],
          zt = -1,
          Bt = {};
        (Bt[E] =
          Bt[j] =
          Bt[S] =
          Bt[k] =
          Bt[T] =
          Bt[C] =
          Bt["[object Uint8ClampedArray]"] =
          Bt[L] =
          Bt[I] =
            !0),
          (Bt[c] =
            Bt[s] =
            Bt[O] =
            Bt[f] =
            Bt[A] =
            Bt[l] =
            Bt[d] =
            Bt[p] =
            Bt[v] =
            Bt[g] =
            Bt[m] =
            Bt[y] =
            Bt[b] =
            Bt[x] =
            Bt[_] =
              !1);
        var qt = {};
        (qt[c] =
          qt[s] =
          qt[O] =
          qt[A] =
          qt[f] =
          qt[l] =
          qt[E] =
          qt[j] =
          qt[S] =
          qt[k] =
          qt[T] =
          qt[v] =
          qt[g] =
          qt[m] =
          qt[y] =
          qt[b] =
          qt[x] =
          qt[w] =
          qt[C] =
          qt["[object Uint8ClampedArray]"] =
          qt[L] =
          qt[I] =
            !0),
          (qt[d] = qt[p] = qt[_] = !1);
        var Vt = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029",
          },
          Ht = parseFloat,
          Wt = parseInt,
          Ut = "object" == typeof t && t && t.Object === Object && t,
          Gt =
            "object" == typeof self && self && self.Object === Object && self,
          $t = Ut || Gt || Function("return this")(),
          Yt = e && !e.nodeType && e,
          Qt = Yt && "object" == typeof r && r && !r.nodeType && r,
          Xt = Qt && Qt.exports === Yt,
          Jt = Xt && Ut.process,
          Kt = (function () {
            try {
              var t = Qt && Qt.require && Qt.require("util").types;
              return t || (Jt && Jt.binding && Jt.binding("util"));
            } catch (t) {}
          })(),
          Zt = Kt && Kt.isArrayBuffer,
          te = Kt && Kt.isDate,
          ee = Kt && Kt.isMap,
          ne = Kt && Kt.isRegExp,
          re = Kt && Kt.isSet,
          ie = Kt && Kt.isTypedArray;
        function oe(t, e, n) {
          switch (n.length) {
            case 0:
              return t.call(e);
            case 1:
              return t.call(e, n[0]);
            case 2:
              return t.call(e, n[0], n[1]);
            case 3:
              return t.call(e, n[0], n[1], n[2]);
          }
          return t.apply(e, n);
        }
        function ae(t, e, n, r) {
          for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
            var a = t[i];
            e(r, a, n(a), t);
          }
          return r;
        }
        function ue(t, e) {
          for (
            var n = -1, r = null == t ? 0 : t.length;
            ++n < r && !1 !== e(t[n], n, t);

          );
          return t;
        }
        function ce(t, e) {
          for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t); );
          return t;
        }
        function se(t, e) {
          for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
            if (!e(t[n], n, t)) return !1;
          return !0;
        }
        function fe(t, e) {
          for (
            var n = -1, r = null == t ? 0 : t.length, i = 0, o = [];
            ++n < r;

          ) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a);
          }
          return o;
        }
        function le(t, e) {
          return !!(null == t ? 0 : t.length) && we(t, e, 0) > -1;
        }
        function de(t, e, n) {
          for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
            if (n(e, t[r])) return !0;
          return !1;
        }
        function pe(t, e) {
          for (
            var n = -1, r = null == t ? 0 : t.length, i = Array(r);
            ++n < r;

          )
            i[n] = e(t[n], n, t);
          return i;
        }
        function he(t, e) {
          for (var n = -1, r = e.length, i = t.length; ++n < r; )
            t[i + n] = e[n];
          return t;
        }
        function ve(t, e, n, r) {
          var i = -1,
            o = null == t ? 0 : t.length;
          for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
          return n;
        }
        function ge(t, e, n, r) {
          var i = null == t ? 0 : t.length;
          for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t);
          return n;
        }
        function me(t, e) {
          for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
            if (e(t[n], n, t)) return !0;
          return !1;
        }
        var ye = Ee("length");
        function be(t, e, n) {
          var r;
          return (
            n(t, function (t, n, i) {
              if (e(t, n, i)) return (r = n), !1;
            }),
            r
          );
        }
        function xe(t, e, n, r) {
          for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
            if (e(t[o], o, t)) return o;
          return -1;
        }
        function we(t, e, n) {
          return e == e
            ? (function (t, e, n) {
                var r = n - 1,
                  i = t.length;
                for (; ++r < i; ) if (t[r] === e) return r;
                return -1;
              })(t, e, n)
            : xe(t, Oe, n);
        }
        function _e(t, e, n, r) {
          for (var i = n - 1, o = t.length; ++i < o; ) if (r(t[i], e)) return i;
          return -1;
        }
        function Oe(t) {
          return t != t;
        }
        function Ae(t, e) {
          var n = null == t ? 0 : t.length;
          return n ? ke(t, e) / n : NaN;
        }
        function Ee(t) {
          return function (e) {
            return null == e ? void 0 : e[t];
          };
        }
        function je(t) {
          return function (e) {
            return null == t ? void 0 : t[e];
          };
        }
        function Se(t, e, n, r, i) {
          return (
            i(t, function (t, i, o) {
              n = r ? ((r = !1), t) : e(n, t, i, o);
            }),
            n
          );
        }
        function ke(t, e) {
          for (var n, r = -1, i = t.length; ++r < i; ) {
            var o = e(t[r]);
            void 0 !== o && (n = void 0 === n ? o : n + o);
          }
          return n;
        }
        function Te(t, e) {
          for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
          return r;
        }
        function Ce(t) {
          return function (e) {
            return t(e);
          };
        }
        function Le(t, e) {
          return pe(e, function (e) {
            return t[e];
          });
        }
        function Ie(t, e) {
          return t.has(e);
        }
        function De(t, e) {
          for (var n = -1, r = t.length; ++n < r && we(e, t[n], 0) > -1; );
          return n;
        }
        function Pe(t, e) {
          for (var n = t.length; n-- && we(e, t[n], 0) > -1; );
          return n;
        }
        function Re(t, e) {
          for (var n = t.length, r = 0; n--; ) t[n] === e && ++r;
          return r;
        }
        var Me = je({
            脌: "A",
            脕: "A",
            脗: "A",
            脙: "A",
            脛: "A",
            脜: "A",
            脿: "a",
            谩: "a",
            芒: "a",
            茫: "a",
            盲: "a",
            氓: "a",
            脟: "C",
            莽: "c",
            脨: "D",
            冒: "d",
            脠: "E",
            脡: "E",
            脢: "E",
            脣: "E",
            猫: "e",
            茅: "e",
            锚: "e",
            毛: "e",
            脤: "I",
            脥: "I",
            脦: "I",
            脧: "I",
            矛: "i",
            铆: "i",
            卯: "i",
            茂: "i",
            脩: "N",
            帽: "n",
            脪: "O",
            脫: "O",
            脭: "O",
            脮: "O",
            脰: "O",
            脴: "O",
            貌: "o",
            贸: "o",
            么: "o",
            玫: "o",
            枚: "o",
            酶: "o",
            脵: "U",
            脷: "U",
            脹: "U",
            脺: "U",
            霉: "u",
            煤: "u",
            没: "u",
            眉: "u",
            脻: "Y",
            媒: "y",
            每: "y",
            脝: "Ae",
            忙: "ae",
            脼: "Th",
            镁: "th",
            脽: "ss",
            膧: "A",
            膫: "A",
            膭: "A",
            膩: "a",
            膬: "a",
            膮: "a",
            膯: "C",
            膱: "C",
            膴: "C",
            膶: "C",
            膰: "c",
            膲: "c",
            膵: "c",
            膷: "c",
            膸: "D",
            膼: "D",
            膹: "d",
            膽: "d",
            膾: "E",
            臄: "E",
            臇: "E",
            臉: "E",
            臍: "E",
            膿: "e",
            臅: "e",
            臈: "e",
            臋: "e",
            臎: "e",
            臏: "G",
            臑: "G",
            臓: "G",
            蘑: "G",
            臐: "g",
            臒: "g",
            摹: "g",
            模: "g",
            膜: "H",
            摩: "H",
            磨: "h",
            魔: "h",
            抹: "I",
            莫: "I",
            默: "I",
            漠: "I",
            陌: "I",
            末: "i",
            墨: "i",
            沫: "i",
            寞: "i",
            谋: "i",
            拇: "J",
            牡: "j",
            亩: "K",
            姆: "k",
            母: "k",
            墓: "L",
            幕: "L",
            慕: "L",
            目: "L",
            艁: "L",
            暮: "l",
            募: "l",
            木: "l",
            艀: "l",
            艂: "l",
            艃: "N",
            艆: "N",
            艊: "N",
            艎: "N",
            艅: "n",
            艈: "n",
            艌: "n",
            艐: "n",
            艑: "O",
            艓: "O",
            艕: "O",
            艒: "o",
            艔: "o",
            艖: "o",
            艛: "R",
            艝: "R",
            艠: "R",
            艜: "r",
            艞: "r",
            艡: "r",
            艢: "S",
            艤: "S",
            艦: "S",
            艩: "S",
            艣: "s",
            艥: "s",
            艧: "s",
            拧: "s",
            泞: "T",
            扭: "T",
            纽: "T",
            牛: "t",
            钮: "t",
            脓: "t",
            浓: "U",
            弄: "U",
            努: "U",
            女: "U",
            虐: "U",
            挪: "U",
            农: "u",
            奴: "u",
            怒: "u",
            暖: "u",
            疟: "u",
            懦: "u",
            糯: "W",
            诺: "w",
            哦: "Y",
            欧: "y",
            鸥: "Y",
            殴: "Z",
            呕: "Z",
            沤: "Z",
            藕: "z",
            偶: "z",
            啪: "z",
            牟: "IJ",
            某: "ij",
            艗: "Oe",
            艙: "oe",
            艍: "'n",
            趴: "s",
          }),
          Ne = je({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          });
        function Fe(t) {
          return "\\" + Vt[t];
        }
        function ze(t) {
          return Mt.test(t);
        }
        function Be(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t, r) {
              n[++e] = [r, t];
            }),
            n
          );
        }
        function qe(t, e) {
          return function (n) {
            return t(e(n));
          };
        }
        function Ve(t, e) {
          for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
            var u = t[n];
            (u !== e && u !== a) || ((t[n] = a), (o[i++] = n));
          }
          return o;
        }
        function He(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t) {
              n[++e] = t;
            }),
            n
          );
        }
        function We(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t) {
              n[++e] = [t, t];
            }),
            n
          );
        }
        function Ue(t) {
          return ze(t)
            ? (function (t) {
                var e = (Pt.lastIndex = 0);
                for (; Pt.test(t); ) ++e;
                return e;
              })(t)
            : ye(t);
        }
        function Ge(t) {
          return ze(t)
            ? (function (t) {
                return t.match(Pt) || [];
              })(t)
            : (function (t) {
                return t.split("");
              })(t);
        }
        var $e = je({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
        });
        var Ye = (function t(e) {
          var n,
            r = (e =
              null == e ? $t : Ye.defaults($t.Object(), e, Ye.pick($t, Ft)))
              .Array,
            i = e.Date,
            dt = e.Error,
            pt = e.Function,
            ht = e.Math,
            vt = e.Object,
            gt = e.RegExp,
            mt = e.String,
            yt = e.TypeError,
            bt = r.prototype,
            xt = pt.prototype,
            wt = vt.prototype,
            _t = e["__core-js_shared__"],
            Ot = xt.toString,
            At = wt.hasOwnProperty,
            Et = 0,
            jt = (n = /[^.]+$/.exec((_t && _t.keys && _t.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + n
              : "",
            St = wt.toString,
            kt = Ot.call(vt),
            Tt = $t._,
            Ct = gt(
              "^" +
                Ot.call(At)
                  .replace(G, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            Lt = Xt ? e.Buffer : void 0,
            Pt = e.Symbol,
            Mt = e.Uint8Array,
            Vt = Lt ? Lt.allocUnsafe : void 0,
            Ut = qe(vt.getPrototypeOf, vt),
            Gt = vt.create,
            Yt = wt.propertyIsEnumerable,
            Qt = bt.splice,
            Jt = Pt ? Pt.isConcatSpreadable : void 0,
            Kt = Pt ? Pt.iterator : void 0,
            ye = Pt ? Pt.toStringTag : void 0,
            je = (function () {
              try {
                var t = Zi(vt, "defineProperty");
                return t({}, "", {}), t;
              } catch (t) {}
            })(),
            Qe = e.clearTimeout !== $t.clearTimeout && e.clearTimeout,
            Xe = i && i.now !== $t.Date.now && i.now,
            Je = e.setTimeout !== $t.setTimeout && e.setTimeout,
            Ke = ht.ceil,
            Ze = ht.floor,
            tn = vt.getOwnPropertySymbols,
            en = Lt ? Lt.isBuffer : void 0,
            nn = e.isFinite,
            rn = bt.join,
            on = qe(vt.keys, vt),
            an = ht.max,
            un = ht.min,
            cn = i.now,
            sn = e.parseInt,
            fn = ht.random,
            ln = bt.reverse,
            dn = Zi(e, "DataView"),
            pn = Zi(e, "Map"),
            hn = Zi(e, "Promise"),
            vn = Zi(e, "Set"),
            gn = Zi(e, "WeakMap"),
            mn = Zi(vt, "create"),
            yn = gn && new gn(),
            bn = {},
            xn = So(dn),
            wn = So(pn),
            _n = So(hn),
            On = So(vn),
            An = So(gn),
            En = Pt ? Pt.prototype : void 0,
            jn = En ? En.valueOf : void 0,
            Sn = En ? En.toString : void 0;
          function kn(t) {
            if (Wa(t) && !Da(t) && !(t instanceof In)) {
              if (t instanceof Ln) return t;
              if (At.call(t, "__wrapped__")) return ko(t);
            }
            return new Ln(t);
          }
          var Tn = (function () {
            function t() {}
            return function (e) {
              if (!Ha(e)) return {};
              if (Gt) return Gt(e);
              t.prototype = e;
              var n = new t();
              return (t.prototype = void 0), n;
            };
          })();
          function Cn() {}
          function Ln(t, e) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__chain__ = !!e),
              (this.__index__ = 0),
              (this.__values__ = void 0);
          }
          function In(t) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = 4294967295),
              (this.__views__ = []);
          }
          function Dn(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function Pn(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function Rn(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function Mn(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.__data__ = new Rn(); ++e < n; ) this.add(t[e]);
          }
          function Nn(t) {
            var e = (this.__data__ = new Pn(t));
            this.size = e.size;
          }
          function Fn(t, e) {
            var n = Da(t),
              r = !n && Ia(t),
              i = !n && !r && Na(t),
              o = !n && !r && !i && Ka(t),
              a = n || r || i || o,
              u = a ? Te(t.length, mt) : [],
              c = u.length;
            for (var s in t)
              (!e && !At.call(t, s)) ||
                (a &&
                  ("length" == s ||
                    (i && ("offset" == s || "parent" == s)) ||
                    (o &&
                      ("buffer" == s ||
                        "byteLength" == s ||
                        "byteOffset" == s)) ||
                    ao(s, c))) ||
                u.push(s);
            return u;
          }
          function zn(t) {
            var e = t.length;
            return e ? t[Mr(0, e - 1)] : void 0;
          }
          function Bn(t, e) {
            return Ao(mi(t), Qn(e, 0, t.length));
          }
          function qn(t) {
            return Ao(mi(t));
          }
          function Vn(t, e, n) {
            ((void 0 === n || Ta(t[e], n)) && (void 0 !== n || e in t)) ||
              $n(t, e, n);
          }
          function Hn(t, e, n) {
            var r = t[e];
            (At.call(t, e) && Ta(r, n) && (void 0 !== n || e in t)) ||
              $n(t, e, n);
          }
          function Wn(t, e) {
            for (var n = t.length; n--; ) if (Ta(t[n][0], e)) return n;
            return -1;
          }
          function Un(t, e, n, r) {
            return (
              tr(t, function (t, i, o) {
                e(r, t, n(t), o);
              }),
              r
            );
          }
          function Gn(t, e) {
            return t && yi(e, xu(e), t);
          }
          function $n(t, e, n) {
            "__proto__" == e && je
              ? je(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                  writable: !0,
                })
              : (t[e] = n);
          }
          function Yn(t, e) {
            for (var n = -1, i = e.length, o = r(i), a = null == t; ++n < i; )
              o[n] = a ? void 0 : vu(t, e[n]);
            return o;
          }
          function Qn(t, e, n) {
            return (
              t == t &&
                (void 0 !== n && (t = t <= n ? t : n),
                void 0 !== e && (t = t >= e ? t : e)),
              t
            );
          }
          function Xn(t, e, n, r, i, o) {
            var a,
              u = 1 & e,
              s = 2 & e,
              d = 4 & e;
            if ((n && (a = i ? n(t, r, i, o) : n(t)), void 0 !== a)) return a;
            if (!Ha(t)) return t;
            var _ = Da(t);
            if (_) {
              if (
                ((a = (function (t) {
                  var e = t.length,
                    n = new t.constructor(e);
                  e &&
                    "string" == typeof t[0] &&
                    At.call(t, "index") &&
                    ((n.index = t.index), (n.input = t.input));
                  return n;
                })(t)),
                !u)
              )
                return mi(t, a);
            } else {
              var D = no(t),
                P = D == p || D == h;
              if (Na(t)) return li(t, u);
              if (D == m || D == c || (P && !i)) {
                if (((a = s || P ? {} : io(t)), !u))
                  return s
                    ? (function (t, e) {
                        return yi(t, eo(t), e);
                      })(
                        t,
                        (function (t, e) {
                          return t && yi(e, wu(e), t);
                        })(a, t)
                      )
                    : (function (t, e) {
                        return yi(t, to(t), e);
                      })(t, Gn(a, t));
              } else {
                if (!qt[D]) return i ? t : {};
                a = (function (t, e, n) {
                  var r = t.constructor;
                  switch (e) {
                    case O:
                      return di(t);
                    case f:
                    case l:
                      return new r(+t);
                    case A:
                      return (function (t, e) {
                        var n = e ? di(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.byteLength);
                      })(t, n);
                    case E:
                    case j:
                    case S:
                    case k:
                    case T:
                    case C:
                    case "[object Uint8ClampedArray]":
                    case L:
                    case I:
                      return pi(t, n);
                    case v:
                      return new r();
                    case g:
                    case x:
                      return new r(t);
                    case y:
                      return (function (t) {
                        var e = new t.constructor(t.source, rt.exec(t));
                        return (e.lastIndex = t.lastIndex), e;
                      })(t);
                    case b:
                      return new r();
                    case w:
                      return (i = t), jn ? vt(jn.call(i)) : {};
                  }
                  var i;
                })(t, D, u);
              }
            }
            o || (o = new Nn());
            var R = o.get(t);
            if (R) return R;
            o.set(t, a),
              Qa(t)
                ? t.forEach(function (r) {
                    a.add(Xn(r, e, n, r, t, o));
                  })
                : Ua(t) &&
                  t.forEach(function (r, i) {
                    a.set(i, Xn(r, e, n, i, t, o));
                  });
            var M = _ ? void 0 : (d ? (s ? Gi : Ui) : s ? wu : xu)(t);
            return (
              ue(M || t, function (r, i) {
                M && (r = t[(i = r)]), Hn(a, i, Xn(r, e, n, i, t, o));
              }),
              a
            );
          }
          function Jn(t, e, n) {
            var r = n.length;
            if (null == t) return !r;
            for (t = vt(t); r--; ) {
              var i = n[r],
                o = e[i],
                a = t[i];
              if ((void 0 === a && !(i in t)) || !o(a)) return !1;
            }
            return !0;
          }
          function Kn(t, e, n) {
            if ("function" != typeof t) throw new yt(o);
            return xo(function () {
              t.apply(void 0, n);
            }, e);
          }
          function Zn(t, e, n, r) {
            var i = -1,
              o = le,
              a = !0,
              u = t.length,
              c = [],
              s = e.length;
            if (!u) return c;
            n && (e = pe(e, Ce(n))),
              r
                ? ((o = de), (a = !1))
                : e.length >= 200 && ((o = Ie), (a = !1), (e = new Mn(e)));
            t: for (; ++i < u; ) {
              var f = t[i],
                l = null == n ? f : n(f);
              if (((f = r || 0 !== f ? f : 0), a && l == l)) {
                for (var d = s; d--; ) if (e[d] === l) continue t;
                c.push(f);
              } else o(e, l, r) || c.push(f);
            }
            return c;
          }
          (kn.templateSettings = {
            escape: B,
            evaluate: q,
            interpolate: V,
            variable: "",
            imports: { _: kn },
          }),
            (kn.prototype = Cn.prototype),
            (kn.prototype.constructor = kn),
            (Ln.prototype = Tn(Cn.prototype)),
            (Ln.prototype.constructor = Ln),
            (In.prototype = Tn(Cn.prototype)),
            (In.prototype.constructor = In),
            (Dn.prototype.clear = function () {
              (this.__data__ = mn ? mn(null) : {}), (this.size = 0);
            }),
            (Dn.prototype.delete = function (t) {
              var e = this.has(t) && delete this.__data__[t];
              return (this.size -= e ? 1 : 0), e;
            }),
            (Dn.prototype.get = function (t) {
              var e = this.__data__;
              if (mn) {
                var n = e[t];
                return "__lodash_hash_undefined__" === n ? void 0 : n;
              }
              return At.call(e, t) ? e[t] : void 0;
            }),
            (Dn.prototype.has = function (t) {
              var e = this.__data__;
              return mn ? void 0 !== e[t] : At.call(e, t);
            }),
            (Dn.prototype.set = function (t, e) {
              var n = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (n[t] = mn && void 0 === e ? "__lodash_hash_undefined__" : e),
                this
              );
            }),
            (Pn.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (Pn.prototype.delete = function (t) {
              var e = this.__data__,
                n = Wn(e, t);
              return (
                !(n < 0) &&
                (n == e.length - 1 ? e.pop() : Qt.call(e, n, 1),
                --this.size,
                !0)
              );
            }),
            (Pn.prototype.get = function (t) {
              var e = this.__data__,
                n = Wn(e, t);
              return n < 0 ? void 0 : e[n][1];
            }),
            (Pn.prototype.has = function (t) {
              return Wn(this.__data__, t) > -1;
            }),
            (Pn.prototype.set = function (t, e) {
              var n = this.__data__,
                r = Wn(n, t);
              return (
                r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
              );
            }),
            (Rn.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Dn(),
                  map: new (pn || Pn)(),
                  string: new Dn(),
                });
            }),
            (Rn.prototype.delete = function (t) {
              var e = Ji(this, t).delete(t);
              return (this.size -= e ? 1 : 0), e;
            }),
            (Rn.prototype.get = function (t) {
              return Ji(this, t).get(t);
            }),
            (Rn.prototype.has = function (t) {
              return Ji(this, t).has(t);
            }),
            (Rn.prototype.set = function (t, e) {
              var n = Ji(this, t),
                r = n.size;
              return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
            }),
            (Mn.prototype.add = Mn.prototype.push =
              function (t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this;
              }),
            (Mn.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (Nn.prototype.clear = function () {
              (this.__data__ = new Pn()), (this.size = 0);
            }),
            (Nn.prototype.delete = function (t) {
              var e = this.__data__,
                n = e.delete(t);
              return (this.size = e.size), n;
            }),
            (Nn.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (Nn.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (Nn.prototype.set = function (t, e) {
              var n = this.__data__;
              if (n instanceof Pn) {
                var r = n.__data__;
                if (!pn || r.length < 199)
                  return r.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new Rn(r);
              }
              return n.set(t, e), (this.size = n.size), this;
            });
          var tr = wi(cr),
            er = wi(sr, !0);
          function nr(t, e) {
            var n = !0;
            return (
              tr(t, function (t, r, i) {
                return (n = !!e(t, r, i));
              }),
              n
            );
          }
          function rr(t, e, n) {
            for (var r = -1, i = t.length; ++r < i; ) {
              var o = t[r],
                a = e(o);
              if (null != a && (void 0 === u ? a == a && !Ja(a) : n(a, u)))
                var u = a,
                  c = o;
            }
            return c;
          }
          function ir(t, e) {
            var n = [];
            return (
              tr(t, function (t, r, i) {
                e(t, r, i) && n.push(t);
              }),
              n
            );
          }
          function or(t, e, n, r, i) {
            var o = -1,
              a = t.length;
            for (n || (n = oo), i || (i = []); ++o < a; ) {
              var u = t[o];
              e > 0 && n(u)
                ? e > 1
                  ? or(u, e - 1, n, r, i)
                  : he(i, u)
                : r || (i[i.length] = u);
            }
            return i;
          }
          var ar = _i(),
            ur = _i(!0);
          function cr(t, e) {
            return t && ar(t, e, xu);
          }
          function sr(t, e) {
            return t && ur(t, e, xu);
          }
          function fr(t, e) {
            return fe(e, function (e) {
              return Ba(t[e]);
            });
          }
          function lr(t, e) {
            for (var n = 0, r = (e = ui(e, t)).length; null != t && n < r; )
              t = t[jo(e[n++])];
            return n && n == r ? t : void 0;
          }
          function dr(t, e, n) {
            var r = e(t);
            return Da(t) ? r : he(r, n(t));
          }
          function pr(t) {
            return null == t
              ? void 0 === t
                ? "[object Undefined]"
                : "[object Null]"
              : ye && ye in vt(t)
              ? (function (t) {
                  var e = At.call(t, ye),
                    n = t[ye];
                  try {
                    t[ye] = void 0;
                    var r = !0;
                  } catch (t) {}
                  var i = St.call(t);
                  r && (e ? (t[ye] = n) : delete t[ye]);
                  return i;
                })(t)
              : (function (t) {
                  return St.call(t);
                })(t);
          }
          function hr(t, e) {
            return t > e;
          }
          function vr(t, e) {
            return null != t && At.call(t, e);
          }
          function gr(t, e) {
            return null != t && e in vt(t);
          }
          function mr(t, e, n) {
            for (
              var i = n ? de : le,
                o = t[0].length,
                a = t.length,
                u = a,
                c = r(a),
                s = 1 / 0,
                f = [];
              u--;

            ) {
              var l = t[u];
              u && e && (l = pe(l, Ce(e))),
                (s = un(l.length, s)),
                (c[u] =
                  !n && (e || (o >= 120 && l.length >= 120))
                    ? new Mn(u && l)
                    : void 0);
            }
            l = t[0];
            var d = -1,
              p = c[0];
            t: for (; ++d < o && f.length < s; ) {
              var h = l[d],
                v = e ? e(h) : h;
              if (((h = n || 0 !== h ? h : 0), !(p ? Ie(p, v) : i(f, v, n)))) {
                for (u = a; --u; ) {
                  var g = c[u];
                  if (!(g ? Ie(g, v) : i(t[u], v, n))) continue t;
                }
                p && p.push(v), f.push(h);
              }
            }
            return f;
          }
          function yr(t, e, n) {
            var r = null == (t = go(t, (e = ui(e, t)))) ? t : t[jo(zo(e))];
            return null == r ? void 0 : oe(r, t, n);
          }
          function br(t) {
            return Wa(t) && pr(t) == c;
          }
          function xr(t, e, n, r, i) {
            return (
              t === e ||
              (null == t || null == e || (!Wa(t) && !Wa(e))
                ? t != t && e != e
                : (function (t, e, n, r, i, o) {
                    var a = Da(t),
                      u = Da(e),
                      p = a ? s : no(t),
                      h = u ? s : no(e),
                      _ = (p = p == c ? m : p) == m,
                      E = (h = h == c ? m : h) == m,
                      j = p == h;
                    if (j && Na(t)) {
                      if (!Na(e)) return !1;
                      (a = !0), (_ = !1);
                    }
                    if (j && !_)
                      return (
                        o || (o = new Nn()),
                        a || Ka(t)
                          ? Hi(t, e, n, r, i, o)
                          : (function (t, e, n, r, i, o, a) {
                              switch (n) {
                                case A:
                                  if (
                                    t.byteLength != e.byteLength ||
                                    t.byteOffset != e.byteOffset
                                  )
                                    return !1;
                                  (t = t.buffer), (e = e.buffer);
                                case O:
                                  return !(
                                    t.byteLength != e.byteLength ||
                                    !o(new Mt(t), new Mt(e))
                                  );
                                case f:
                                case l:
                                case g:
                                  return Ta(+t, +e);
                                case d:
                                  return (
                                    t.name == e.name && t.message == e.message
                                  );
                                case y:
                                case x:
                                  return t == e + "";
                                case v:
                                  var u = Be;
                                case b:
                                  var c = 1 & r;
                                  if ((u || (u = He), t.size != e.size && !c))
                                    return !1;
                                  var s = a.get(t);
                                  if (s) return s == e;
                                  (r |= 2), a.set(t, e);
                                  var p = Hi(u(t), u(e), r, i, o, a);
                                  return a.delete(t), p;
                                case w:
                                  if (jn) return jn.call(t) == jn.call(e);
                              }
                              return !1;
                            })(t, e, p, n, r, i, o)
                      );
                    if (!(1 & n)) {
                      var S = _ && At.call(t, "__wrapped__"),
                        k = E && At.call(e, "__wrapped__");
                      if (S || k) {
                        var T = S ? t.value() : t,
                          C = k ? e.value() : e;
                        return o || (o = new Nn()), i(T, C, n, r, o);
                      }
                    }
                    if (!j) return !1;
                    return (
                      o || (o = new Nn()),
                      (function (t, e, n, r, i, o) {
                        var a = 1 & n,
                          u = Ui(t),
                          c = u.length,
                          s = Ui(e).length;
                        if (c != s && !a) return !1;
                        var f = c;
                        for (; f--; ) {
                          var l = u[f];
                          if (!(a ? l in e : At.call(e, l))) return !1;
                        }
                        var d = o.get(t);
                        if (d && o.get(e)) return d == e;
                        var p = !0;
                        o.set(t, e), o.set(e, t);
                        var h = a;
                        for (; ++f < c; ) {
                          l = u[f];
                          var v = t[l],
                            g = e[l];
                          if (r)
                            var m = a
                              ? r(g, v, l, e, t, o)
                              : r(v, g, l, t, e, o);
                          if (
                            !(void 0 === m ? v === g || i(v, g, n, r, o) : m)
                          ) {
                            p = !1;
                            break;
                          }
                          h || (h = "constructor" == l);
                        }
                        if (p && !h) {
                          var y = t.constructor,
                            b = e.constructor;
                          y != b &&
                            "constructor" in t &&
                            "constructor" in e &&
                            !(
                              "function" == typeof y &&
                              y instanceof y &&
                              "function" == typeof b &&
                              b instanceof b
                            ) &&
                            (p = !1);
                        }
                        return o.delete(t), o.delete(e), p;
                      })(t, e, n, r, i, o)
                    );
                  })(t, e, n, r, xr, i))
            );
          }
          function wr(t, e, n, r) {
            var i = n.length,
              o = i,
              a = !r;
            if (null == t) return !o;
            for (t = vt(t); i--; ) {
              var u = n[i];
              if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
            }
            for (; ++i < o; ) {
              var c = (u = n[i])[0],
                s = t[c],
                f = u[1];
              if (a && u[2]) {
                if (void 0 === s && !(c in t)) return !1;
              } else {
                var l = new Nn();
                if (r) var d = r(s, f, c, t, e, l);
                if (!(void 0 === d ? xr(f, s, 3, r, l) : d)) return !1;
              }
            }
            return !0;
          }
          function _r(t) {
            return (
              !(!Ha(t) || ((e = t), jt && jt in e)) &&
              (Ba(t) ? Ct : at).test(So(t))
            );
          }
          function Or(t) {
            return "function" == typeof t
              ? t
              : null == t
              ? Gu
              : "object" == typeof t
              ? Da(t)
                ? Tr(t[0], t[1])
                : kr(t)
              : ec(t);
          }
          function Ar(t) {
            if (!lo(t)) return on(t);
            var e = [];
            for (var n in vt(t))
              At.call(t, n) && "constructor" != n && e.push(n);
            return e;
          }
          function Er(t) {
            if (!Ha(t))
              return (function (t) {
                var e = [];
                if (null != t) for (var n in vt(t)) e.push(n);
                return e;
              })(t);
            var e = lo(t),
              n = [];
            for (var r in t)
              ("constructor" != r || (!e && At.call(t, r))) && n.push(r);
            return n;
          }
          function jr(t, e) {
            return t < e;
          }
          function Sr(t, e) {
            var n = -1,
              i = Ra(t) ? r(t.length) : [];
            return (
              tr(t, function (t, r, o) {
                i[++n] = e(t, r, o);
              }),
              i
            );
          }
          function kr(t) {
            var e = Ki(t);
            return 1 == e.length && e[0][2]
              ? ho(e[0][0], e[0][1])
              : function (n) {
                  return n === t || wr(n, t, e);
                };
          }
          function Tr(t, e) {
            return co(t) && po(e)
              ? ho(jo(t), e)
              : function (n) {
                  var r = vu(n, t);
                  return void 0 === r && r === e ? gu(n, t) : xr(e, r, 3);
                };
          }
          function Cr(t, e, n, r, i) {
            t !== e &&
              ar(
                e,
                function (o, a) {
                  if ((i || (i = new Nn()), Ha(o)))
                    !(function (t, e, n, r, i, o, a) {
                      var u = yo(t, n),
                        c = yo(e, n),
                        s = a.get(c);
                      if (s) return void Vn(t, n, s);
                      var f = o ? o(u, c, n + "", t, e, a) : void 0,
                        l = void 0 === f;
                      if (l) {
                        var d = Da(c),
                          p = !d && Na(c),
                          h = !d && !p && Ka(c);
                        (f = c),
                          d || p || h
                            ? Da(u)
                              ? (f = u)
                              : Ma(u)
                              ? (f = mi(u))
                              : p
                              ? ((l = !1), (f = li(c, !0)))
                              : h
                              ? ((l = !1), (f = pi(c, !0)))
                              : (f = [])
                            : $a(c) || Ia(c)
                            ? ((f = u),
                              Ia(u)
                                ? (f = au(u))
                                : (Ha(u) && !Ba(u)) || (f = io(c)))
                            : (l = !1);
                      }
                      l && (a.set(c, f), i(f, c, r, o, a), a.delete(c));
                      Vn(t, n, f);
                    })(t, e, a, n, Cr, r, i);
                  else {
                    var u = r ? r(yo(t, a), o, a + "", t, e, i) : void 0;
                    void 0 === u && (u = o), Vn(t, a, u);
                  }
                },
                wu
              );
          }
          function Lr(t, e) {
            var n = t.length;
            if (n) return ao((e += e < 0 ? n : 0), n) ? t[e] : void 0;
          }
          function Ir(t, e, n) {
            var r = -1;
            return (
              (e = pe(e.length ? e : [Gu], Ce(Xi()))),
              (function (t, e) {
                var n = t.length;
                for (t.sort(e); n--; ) t[n] = t[n].value;
                return t;
              })(
                Sr(t, function (t, n, i) {
                  return {
                    criteria: pe(e, function (e) {
                      return e(t);
                    }),
                    index: ++r,
                    value: t,
                  };
                }),
                function (t, e) {
                  return (function (t, e, n) {
                    var r = -1,
                      i = t.criteria,
                      o = e.criteria,
                      a = i.length,
                      u = n.length;
                    for (; ++r < a; ) {
                      var c = hi(i[r], o[r]);
                      if (c) {
                        if (r >= u) return c;
                        var s = n[r];
                        return c * ("desc" == s ? -1 : 1);
                      }
                    }
                    return t.index - e.index;
                  })(t, e, n);
                }
              )
            );
          }
          function Dr(t, e, n) {
            for (var r = -1, i = e.length, o = {}; ++r < i; ) {
              var a = e[r],
                u = lr(t, a);
              n(u, a) && qr(o, ui(a, t), u);
            }
            return o;
          }
          function Pr(t, e, n, r) {
            var i = r ? _e : we,
              o = -1,
              a = e.length,
              u = t;
            for (t === e && (e = mi(e)), n && (u = pe(t, Ce(n))); ++o < a; )
              for (
                var c = 0, s = e[o], f = n ? n(s) : s;
                (c = i(u, f, c, r)) > -1;

              )
                u !== t && Qt.call(u, c, 1), Qt.call(t, c, 1);
            return t;
          }
          function Rr(t, e) {
            for (var n = t ? e.length : 0, r = n - 1; n--; ) {
              var i = e[n];
              if (n == r || i !== o) {
                var o = i;
                ao(i) ? Qt.call(t, i, 1) : Zr(t, i);
              }
            }
            return t;
          }
          function Mr(t, e) {
            return t + Ze(fn() * (e - t + 1));
          }
          function Nr(t, e) {
            var n = "";
            if (!t || e < 1 || e > 9007199254740991) return n;
            do {
              e % 2 && (n += t), (e = Ze(e / 2)) && (t += t);
            } while (e);
            return n;
          }
          function Fr(t, e) {
            return wo(vo(t, e, Gu), t + "");
          }
          function zr(t) {
            return zn(Tu(t));
          }
          function Br(t, e) {
            var n = Tu(t);
            return Ao(n, Qn(e, 0, n.length));
          }
          function qr(t, e, n, r) {
            if (!Ha(t)) return t;
            for (
              var i = -1, o = (e = ui(e, t)).length, a = o - 1, u = t;
              null != u && ++i < o;

            ) {
              var c = jo(e[i]),
                s = n;
              if (i != a) {
                var f = u[c];
                void 0 === (s = r ? r(f, c, u) : void 0) &&
                  (s = Ha(f) ? f : ao(e[i + 1]) ? [] : {});
              }
              Hn(u, c, s), (u = u[c]);
            }
            return t;
          }
          var Vr = yn
              ? function (t, e) {
                  return yn.set(t, e), t;
                }
              : Gu,
            Hr = je
              ? function (t, e) {
                  return je(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Hu(e),
                    writable: !0,
                  });
                }
              : Gu;
          function Wr(t) {
            return Ao(Tu(t));
          }
          function Ur(t, e, n) {
            var i = -1,
              o = t.length;
            e < 0 && (e = -e > o ? 0 : o + e),
              (n = n > o ? o : n) < 0 && (n += o),
              (o = e > n ? 0 : (n - e) >>> 0),
              (e >>>= 0);
            for (var a = r(o); ++i < o; ) a[i] = t[i + e];
            return a;
          }
          function Gr(t, e) {
            var n;
            return (
              tr(t, function (t, r, i) {
                return !(n = e(t, r, i));
              }),
              !!n
            );
          }
          function $r(t, e, n) {
            var r = 0,
              i = null == t ? r : t.length;
            if ("number" == typeof e && e == e && i <= 2147483647) {
              for (; r < i; ) {
                var o = (r + i) >>> 1,
                  a = t[o];
                null !== a && !Ja(a) && (n ? a <= e : a < e)
                  ? (r = o + 1)
                  : (i = o);
              }
              return i;
            }
            return Yr(t, e, Gu, n);
          }
          function Yr(t, e, n, r) {
            e = n(e);
            for (
              var i = 0,
                o = null == t ? 0 : t.length,
                a = e != e,
                u = null === e,
                c = Ja(e),
                s = void 0 === e;
              i < o;

            ) {
              var f = Ze((i + o) / 2),
                l = n(t[f]),
                d = void 0 !== l,
                p = null === l,
                h = l == l,
                v = Ja(l);
              if (a) var g = r || h;
              else
                g = s
                  ? h && (r || d)
                  : u
                  ? h && d && (r || !p)
                  : c
                  ? h && d && !p && (r || !v)
                  : !p && !v && (r ? l <= e : l < e);
              g ? (i = f + 1) : (o = f);
            }
            return un(o, 4294967294);
          }
          function Qr(t, e) {
            for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
              var a = t[n],
                u = e ? e(a) : a;
              if (!n || !Ta(u, c)) {
                var c = u;
                o[i++] = 0 === a ? 0 : a;
              }
            }
            return o;
          }
          function Xr(t) {
            return "number" == typeof t ? t : Ja(t) ? NaN : +t;
          }
          function Jr(t) {
            if ("string" == typeof t) return t;
            if (Da(t)) return pe(t, Jr) + "";
            if (Ja(t)) return Sn ? Sn.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
          }
          function Kr(t, e, n) {
            var r = -1,
              i = le,
              o = t.length,
              a = !0,
              u = [],
              c = u;
            if (n) (a = !1), (i = de);
            else if (o >= 200) {
              var s = e ? null : Ni(t);
              if (s) return He(s);
              (a = !1), (i = Ie), (c = new Mn());
            } else c = e ? [] : u;
            t: for (; ++r < o; ) {
              var f = t[r],
                l = e ? e(f) : f;
              if (((f = n || 0 !== f ? f : 0), a && l == l)) {
                for (var d = c.length; d--; ) if (c[d] === l) continue t;
                e && c.push(l), u.push(f);
              } else i(c, l, n) || (c !== u && c.push(l), u.push(f));
            }
            return u;
          }
          function Zr(t, e) {
            return null == (t = go(t, (e = ui(e, t)))) || delete t[jo(zo(e))];
          }
          function ti(t, e, n, r) {
            return qr(t, e, n(lr(t, e)), r);
          }
          function ei(t, e, n, r) {
            for (
              var i = t.length, o = r ? i : -1;
              (r ? o-- : ++o < i) && e(t[o], o, t);

            );
            return n
              ? Ur(t, r ? 0 : o, r ? o + 1 : i)
              : Ur(t, r ? o + 1 : 0, r ? i : o);
          }
          function ni(t, e) {
            var n = t;
            return (
              n instanceof In && (n = n.value()),
              ve(
                e,
                function (t, e) {
                  return e.func.apply(e.thisArg, he([t], e.args));
                },
                n
              )
            );
          }
          function ri(t, e, n) {
            var i = t.length;
            if (i < 2) return i ? Kr(t[0]) : [];
            for (var o = -1, a = r(i); ++o < i; )
              for (var u = t[o], c = -1; ++c < i; )
                c != o && (a[o] = Zn(a[o] || u, t[c], e, n));
            return Kr(or(a, 1), e, n);
          }
          function ii(t, e, n) {
            for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i; ) {
              var u = r < o ? e[r] : void 0;
              n(a, t[r], u);
            }
            return a;
          }
          function oi(t) {
            return Ma(t) ? t : [];
          }
          function ai(t) {
            return "function" == typeof t ? t : Gu;
          }
          function ui(t, e) {
            return Da(t) ? t : co(t, e) ? [t] : Eo(uu(t));
          }
          var ci = Fr;
          function si(t, e, n) {
            var r = t.length;
            return (n = void 0 === n ? r : n), !e && n >= r ? t : Ur(t, e, n);
          }
          var fi =
            Qe ||
            function (t) {
              return $t.clearTimeout(t);
            };
          function li(t, e) {
            if (e) return t.slice();
            var n = t.length,
              r = Vt ? Vt(n) : new t.constructor(n);
            return t.copy(r), r;
          }
          function di(t) {
            var e = new t.constructor(t.byteLength);
            return new Mt(e).set(new Mt(t)), e;
          }
          function pi(t, e) {
            var n = e ? di(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length);
          }
          function hi(t, e) {
            if (t !== e) {
              var n = void 0 !== t,
                r = null === t,
                i = t == t,
                o = Ja(t),
                a = void 0 !== e,
                u = null === e,
                c = e == e,
                s = Ja(e);
              if (
                (!u && !s && !o && t > e) ||
                (o && a && c && !u && !s) ||
                (r && a && c) ||
                (!n && c) ||
                !i
              )
                return 1;
              if (
                (!r && !o && !s && t < e) ||
                (s && n && i && !r && !o) ||
                (u && n && i) ||
                (!a && i) ||
                !c
              )
                return -1;
            }
            return 0;
          }
          function vi(t, e, n, i) {
            for (
              var o = -1,
                a = t.length,
                u = n.length,
                c = -1,
                s = e.length,
                f = an(a - u, 0),
                l = r(s + f),
                d = !i;
              ++c < s;

            )
              l[c] = e[c];
            for (; ++o < u; ) (d || o < a) && (l[n[o]] = t[o]);
            for (; f--; ) l[c++] = t[o++];
            return l;
          }
          function gi(t, e, n, i) {
            for (
              var o = -1,
                a = t.length,
                u = -1,
                c = n.length,
                s = -1,
                f = e.length,
                l = an(a - c, 0),
                d = r(l + f),
                p = !i;
              ++o < l;

            )
              d[o] = t[o];
            for (var h = o; ++s < f; ) d[h + s] = e[s];
            for (; ++u < c; ) (p || o < a) && (d[h + n[u]] = t[o++]);
            return d;
          }
          function mi(t, e) {
            var n = -1,
              i = t.length;
            for (e || (e = r(i)); ++n < i; ) e[n] = t[n];
            return e;
          }
          function yi(t, e, n, r) {
            var i = !n;
            n || (n = {});
            for (var o = -1, a = e.length; ++o < a; ) {
              var u = e[o],
                c = r ? r(n[u], t[u], u, n, t) : void 0;
              void 0 === c && (c = t[u]), i ? $n(n, u, c) : Hn(n, u, c);
            }
            return n;
          }
          function bi(t, e) {
            return function (n, r) {
              var i = Da(n) ? ae : Un,
                o = e ? e() : {};
              return i(n, t, Xi(r, 2), o);
            };
          }
          function xi(t) {
            return Fr(function (e, n) {
              var r = -1,
                i = n.length,
                o = i > 1 ? n[i - 1] : void 0,
                a = i > 2 ? n[2] : void 0;
              for (
                o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0,
                  a && uo(n[0], n[1], a) && ((o = i < 3 ? void 0 : o), (i = 1)),
                  e = vt(e);
                ++r < i;

              ) {
                var u = n[r];
                u && t(e, u, r, o);
              }
              return e;
            });
          }
          function wi(t, e) {
            return function (n, r) {
              if (null == n) return n;
              if (!Ra(n)) return t(n, r);
              for (
                var i = n.length, o = e ? i : -1, a = vt(n);
                (e ? o-- : ++o < i) && !1 !== r(a[o], o, a);

              );
              return n;
            };
          }
          function _i(t) {
            return function (e, n, r) {
              for (var i = -1, o = vt(e), a = r(e), u = a.length; u--; ) {
                var c = a[t ? u : ++i];
                if (!1 === n(o[c], c, o)) break;
              }
              return e;
            };
          }
          function Oi(t) {
            return function (e) {
              var n = ze((e = uu(e))) ? Ge(e) : void 0,
                r = n ? n[0] : e.charAt(0),
                i = n ? si(n, 1).join("") : e.slice(1);
              return r[t]() + i;
            };
          }
          function Ai(t) {
            return function (e) {
              return ve(Bu(Iu(e).replace(It, "")), t, "");
            };
          }
          function Ei(t) {
            return function () {
              var e = arguments;
              switch (e.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(e[0]);
                case 2:
                  return new t(e[0], e[1]);
                case 3:
                  return new t(e[0], e[1], e[2]);
                case 4:
                  return new t(e[0], e[1], e[2], e[3]);
                case 5:
                  return new t(e[0], e[1], e[2], e[3], e[4]);
                case 6:
                  return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                case 7:
                  return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
              }
              var n = Tn(t.prototype),
                r = t.apply(n, e);
              return Ha(r) ? r : n;
            };
          }
          function ji(t) {
            return function (e, n, r) {
              var i = vt(e);
              if (!Ra(e)) {
                var o = Xi(n, 3);
                (e = xu(e)),
                  (n = function (t) {
                    return o(i[t], t, i);
                  });
              }
              var a = t(e, n, r);
              return a > -1 ? i[o ? e[a] : a] : void 0;
            };
          }
          function Si(t) {
            return Wi(function (e) {
              var n = e.length,
                r = n,
                i = Ln.prototype.thru;
              for (t && e.reverse(); r--; ) {
                var a = e[r];
                if ("function" != typeof a) throw new yt(o);
                if (i && !u && "wrapper" == Yi(a)) var u = new Ln([], !0);
              }
              for (r = u ? r : n; ++r < n; ) {
                var c = Yi((a = e[r])),
                  s = "wrapper" == c ? $i(a) : void 0;
                u =
                  s && so(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9]
                    ? u[Yi(s[0])].apply(u, s[3])
                    : 1 == a.length && so(a)
                    ? u[c]()
                    : u.thru(a);
              }
              return function () {
                var t = arguments,
                  r = t[0];
                if (u && 1 == t.length && Da(r)) return u.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
                  o = e[i].call(this, o);
                return o;
              };
            });
          }
          function ki(t, e, n, i, o, a, u, c, s, f) {
            var l = 128 & e,
              d = 1 & e,
              p = 2 & e,
              h = 24 & e,
              v = 512 & e,
              g = p ? void 0 : Ei(t);
            return function m() {
              for (var y = arguments.length, b = r(y), x = y; x--; )
                b[x] = arguments[x];
              if (h)
                var w = Qi(m),
                  _ = Re(b, w);
              if (
                (i && (b = vi(b, i, o, h)),
                a && (b = gi(b, a, u, h)),
                (y -= _),
                h && y < f)
              ) {
                var O = Ve(b, w);
                return Ri(t, e, ki, m.placeholder, n, b, O, c, s, f - y);
              }
              var A = d ? n : this,
                E = p ? A[t] : t;
              return (
                (y = b.length),
                c ? (b = mo(b, c)) : v && y > 1 && b.reverse(),
                l && s < y && (b.length = s),
                this && this !== $t && this instanceof m && (E = g || Ei(E)),
                E.apply(A, b)
              );
            };
          }
          function Ti(t, e) {
            return function (n, r) {
              return (function (t, e, n, r) {
                return (
                  cr(t, function (t, i, o) {
                    e(r, n(t), i, o);
                  }),
                  r
                );
              })(n, t, e(r), {});
            };
          }
          function Ci(t, e) {
            return function (n, r) {
              var i;
              if (void 0 === n && void 0 === r) return e;
              if ((void 0 !== n && (i = n), void 0 !== r)) {
                if (void 0 === i) return r;
                "string" == typeof n || "string" == typeof r
                  ? ((n = Jr(n)), (r = Jr(r)))
                  : ((n = Xr(n)), (r = Xr(r))),
                  (i = t(n, r));
              }
              return i;
            };
          }
          function Li(t) {
            return Wi(function (e) {
              return (
                (e = pe(e, Ce(Xi()))),
                Fr(function (n) {
                  var r = this;
                  return t(e, function (t) {
                    return oe(t, r, n);
                  });
                })
              );
            });
          }
          function Ii(t, e) {
            var n = (e = void 0 === e ? " " : Jr(e)).length;
            if (n < 2) return n ? Nr(e, t) : e;
            var r = Nr(e, Ke(t / Ue(e)));
            return ze(e) ? si(Ge(r), 0, t).join("") : r.slice(0, t);
          }
          function Di(t) {
            return function (e, n, i) {
              return (
                i && "number" != typeof i && uo(e, n, i) && (n = i = void 0),
                (e = nu(e)),
                void 0 === n ? ((n = e), (e = 0)) : (n = nu(n)),
                (function (t, e, n, i) {
                  for (
                    var o = -1, a = an(Ke((e - t) / (n || 1)), 0), u = r(a);
                    a--;

                  )
                    (u[i ? a : ++o] = t), (t += n);
                  return u;
                })(e, n, (i = void 0 === i ? (e < n ? 1 : -1) : nu(i)), t)
              );
            };
          }
          function Pi(t) {
            return function (e, n) {
              return (
                ("string" == typeof e && "string" == typeof n) ||
                  ((e = ou(e)), (n = ou(n))),
                t(e, n)
              );
            };
          }
          function Ri(t, e, n, r, i, o, a, u, c, s) {
            var f = 8 & e;
            (e |= f ? 32 : 64), 4 & (e &= ~(f ? 64 : 32)) || (e &= -4);
            var l = [
                t,
                e,
                i,
                f ? o : void 0,
                f ? a : void 0,
                f ? void 0 : o,
                f ? void 0 : a,
                u,
                c,
                s,
              ],
              d = n.apply(void 0, l);
            return so(t) && bo(d, l), (d.placeholder = r), _o(d, t, e);
          }
          function Mi(t) {
            var e = ht[t];
            return function (t, n) {
              if (
                ((t = ou(t)), (n = null == n ? 0 : un(ru(n), 292)) && nn(t))
              ) {
                var r = (uu(t) + "e").split("e");
                return +(
                  (r = (uu(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] +
                  "e" +
                  (+r[1] - n)
                );
              }
              return e(t);
            };
          }
          var Ni =
            vn && 1 / He(new vn([, -0]))[1] == 1 / 0
              ? function (t) {
                  return new vn(t);
                }
              : Ju;
          function Fi(t) {
            return function (e) {
              var n = no(e);
              return n == v
                ? Be(e)
                : n == b
                ? We(e)
                : (function (t, e) {
                    return pe(e, function (e) {
                      return [e, t[e]];
                    });
                  })(e, t(e));
            };
          }
          function zi(t, e, n, i, u, c, s, f) {
            var l = 2 & e;
            if (!l && "function" != typeof t) throw new yt(o);
            var d = i ? i.length : 0;
            if (
              (d || ((e &= -97), (i = u = void 0)),
              (s = void 0 === s ? s : an(ru(s), 0)),
              (f = void 0 === f ? f : ru(f)),
              (d -= u ? u.length : 0),
              64 & e)
            ) {
              var p = i,
                h = u;
              i = u = void 0;
            }
            var v = l ? void 0 : $i(t),
              g = [t, e, n, i, u, p, h, c, s, f];
            if (
              (v &&
                (function (t, e) {
                  var n = t[1],
                    r = e[1],
                    i = n | r,
                    o = i < 131,
                    u =
                      (128 == r && 8 == n) ||
                      (128 == r && 256 == n && t[7].length <= e[8]) ||
                      (384 == r && e[7].length <= e[8] && 8 == n);
                  if (!o && !u) return t;
                  1 & r && ((t[2] = e[2]), (i |= 1 & n ? 0 : 4));
                  var c = e[3];
                  if (c) {
                    var s = t[3];
                    (t[3] = s ? vi(s, c, e[4]) : c),
                      (t[4] = s ? Ve(t[3], a) : e[4]);
                  }
                  (c = e[5]) &&
                    ((s = t[5]),
                    (t[5] = s ? gi(s, c, e[6]) : c),
                    (t[6] = s ? Ve(t[5], a) : e[6]));
                  (c = e[7]) && (t[7] = c);
                  128 & r && (t[8] = null == t[8] ? e[8] : un(t[8], e[8]));
                  null == t[9] && (t[9] = e[9]);
                  (t[0] = e[0]), (t[1] = i);
                })(g, v),
              (t = g[0]),
              (e = g[1]),
              (n = g[2]),
              (i = g[3]),
              (u = g[4]),
              !(f = g[9] =
                void 0 === g[9] ? (l ? 0 : t.length) : an(g[9] - d, 0)) &&
                24 & e &&
                (e &= -25),
              e && 1 != e)
            )
              m =
                8 == e || 16 == e
                  ? (function (t, e, n) {
                      var i = Ei(t);
                      return function o() {
                        for (
                          var a = arguments.length, u = r(a), c = a, s = Qi(o);
                          c--;

                        )
                          u[c] = arguments[c];
                        var f =
                          a < 3 && u[0] !== s && u[a - 1] !== s ? [] : Ve(u, s);
                        if ((a -= f.length) < n)
                          return Ri(
                            t,
                            e,
                            ki,
                            o.placeholder,
                            void 0,
                            u,
                            f,
                            void 0,
                            void 0,
                            n - a
                          );
                        var l =
                          this && this !== $t && this instanceof o ? i : t;
                        return oe(l, this, u);
                      };
                    })(t, e, f)
                  : (32 != e && 33 != e) || u.length
                  ? ki.apply(void 0, g)
                  : (function (t, e, n, i) {
                      var o = 1 & e,
                        a = Ei(t);
                      return function e() {
                        for (
                          var u = -1,
                            c = arguments.length,
                            s = -1,
                            f = i.length,
                            l = r(f + c),
                            d =
                              this && this !== $t && this instanceof e ? a : t;
                          ++s < f;

                        )
                          l[s] = i[s];
                        for (; c--; ) l[s++] = arguments[++u];
                        return oe(d, o ? n : this, l);
                      };
                    })(t, e, n, i);
            else
              var m = (function (t, e, n) {
                var r = 1 & e,
                  i = Ei(t);
                return function e() {
                  var o = this && this !== $t && this instanceof e ? i : t;
                  return o.apply(r ? n : this, arguments);
                };
              })(t, e, n);
            return _o((v ? Vr : bo)(m, g), t, e);
          }
          function Bi(t, e, n, r) {
            return void 0 === t || (Ta(t, wt[n]) && !At.call(r, n)) ? e : t;
          }
          function qi(t, e, n, r, i, o) {
            return (
              Ha(t) &&
                Ha(e) &&
                (o.set(e, t), Cr(t, e, void 0, qi, o), o.delete(e)),
              t
            );
          }
          function Vi(t) {
            return $a(t) ? void 0 : t;
          }
          function Hi(t, e, n, r, i, o) {
            var a = 1 & n,
              u = t.length,
              c = e.length;
            if (u != c && !(a && c > u)) return !1;
            var s = o.get(t);
            if (s && o.get(e)) return s == e;
            var f = -1,
              l = !0,
              d = 2 & n ? new Mn() : void 0;
            for (o.set(t, e), o.set(e, t); ++f < u; ) {
              var p = t[f],
                h = e[f];
              if (r) var v = a ? r(h, p, f, e, t, o) : r(p, h, f, t, e, o);
              if (void 0 !== v) {
                if (v) continue;
                l = !1;
                break;
              }
              if (d) {
                if (
                  !me(e, function (t, e) {
                    if (!Ie(d, e) && (p === t || i(p, t, n, r, o)))
                      return d.push(e);
                  })
                ) {
                  l = !1;
                  break;
                }
              } else if (p !== h && !i(p, h, n, r, o)) {
                l = !1;
                break;
              }
            }
            return o.delete(t), o.delete(e), l;
          }
          function Wi(t) {
            return wo(vo(t, void 0, Po), t + "");
          }
          function Ui(t) {
            return dr(t, xu, to);
          }
          function Gi(t) {
            return dr(t, wu, eo);
          }
          var $i = yn
            ? function (t) {
                return yn.get(t);
              }
            : Ju;
          function Yi(t) {
            for (
              var e = t.name + "", n = bn[e], r = At.call(bn, e) ? n.length : 0;
              r--;

            ) {
              var i = n[r],
                o = i.func;
              if (null == o || o == t) return i.name;
            }
            return e;
          }
          function Qi(t) {
            return (At.call(kn, "placeholder") ? kn : t).placeholder;
          }
          function Xi() {
            var t = kn.iteratee || $u;
            return (
              (t = t === $u ? Or : t),
              arguments.length ? t(arguments[0], arguments[1]) : t
            );
          }
          function Ji(t, e) {
            var n,
              r,
              i = t.__data__;
            return (
              "string" == (r = typeof (n = e)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== n
                : null === n
            )
              ? i["string" == typeof e ? "string" : "hash"]
              : i.map;
          }
          function Ki(t) {
            for (var e = xu(t), n = e.length; n--; ) {
              var r = e[n],
                i = t[r];
              e[n] = [r, i, po(i)];
            }
            return e;
          }
          function Zi(t, e) {
            var n = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return _r(n) ? n : void 0;
          }
          var to = tn
              ? function (t) {
                  return null == t
                    ? []
                    : ((t = vt(t)),
                      fe(tn(t), function (e) {
                        return Yt.call(t, e);
                      }));
                }
              : ic,
            eo = tn
              ? function (t) {
                  for (var e = []; t; ) he(e, to(t)), (t = Ut(t));
                  return e;
                }
              : ic,
            no = pr;
          function ro(t, e, n) {
            for (var r = -1, i = (e = ui(e, t)).length, o = !1; ++r < i; ) {
              var a = jo(e[r]);
              if (!(o = null != t && n(t, a))) break;
              t = t[a];
            }
            return o || ++r != i
              ? o
              : !!(i = null == t ? 0 : t.length) &&
                  Va(i) &&
                  ao(a, i) &&
                  (Da(t) || Ia(t));
          }
          function io(t) {
            return "function" != typeof t.constructor || lo(t) ? {} : Tn(Ut(t));
          }
          function oo(t) {
            return Da(t) || Ia(t) || !!(Jt && t && t[Jt]);
          }
          function ao(t, e) {
            var n = typeof t;
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ("number" == n || ("symbol" != n && ct.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          }
          function uo(t, e, n) {
            if (!Ha(n)) return !1;
            var r = typeof e;
            return (
              !!("number" == r
                ? Ra(n) && ao(e, n.length)
                : "string" == r && e in n) && Ta(n[e], t)
            );
          }
          function co(t, e) {
            if (Da(t)) return !1;
            var n = typeof t;
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != t &&
                !Ja(t)
              ) ||
              W.test(t) ||
              !H.test(t) ||
              (null != e && t in vt(e))
            );
          }
          function so(t) {
            var e = Yi(t),
              n = kn[e];
            if ("function" != typeof n || !(e in In.prototype)) return !1;
            if (t === n) return !0;
            var r = $i(n);
            return !!r && t === r[0];
          }
          ((dn && no(new dn(new ArrayBuffer(1))) != A) ||
            (pn && no(new pn()) != v) ||
            (hn && "[object Promise]" != no(hn.resolve())) ||
            (vn && no(new vn()) != b) ||
            (gn && no(new gn()) != _)) &&
            (no = function (t) {
              var e = pr(t),
                n = e == m ? t.constructor : void 0,
                r = n ? So(n) : "";
              if (r)
                switch (r) {
                  case xn:
                    return A;
                  case wn:
                    return v;
                  case _n:
                    return "[object Promise]";
                  case On:
                    return b;
                  case An:
                    return _;
                }
              return e;
            });
          var fo = _t ? Ba : oc;
          function lo(t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || wt);
          }
          function po(t) {
            return t == t && !Ha(t);
          }
          function ho(t, e) {
            return function (n) {
              return null != n && n[t] === e && (void 0 !== e || t in vt(n));
            };
          }
          function vo(t, e, n) {
            return (
              (e = an(void 0 === e ? t.length - 1 : e, 0)),
              function () {
                for (
                  var i = arguments, o = -1, a = an(i.length - e, 0), u = r(a);
                  ++o < a;

                )
                  u[o] = i[e + o];
                o = -1;
                for (var c = r(e + 1); ++o < e; ) c[o] = i[o];
                return (c[e] = n(u)), oe(t, this, c);
              }
            );
          }
          function go(t, e) {
            return e.length < 2 ? t : lr(t, Ur(e, 0, -1));
          }
          function mo(t, e) {
            for (var n = t.length, r = un(e.length, n), i = mi(t); r--; ) {
              var o = e[r];
              t[r] = ao(o, n) ? i[o] : void 0;
            }
            return t;
          }
          function yo(t, e) {
            if (
              ("constructor" !== e || "function" != typeof t[e]) &&
              "__proto__" != e
            )
              return t[e];
          }
          var bo = Oo(Vr),
            xo =
              Je ||
              function (t, e) {
                return $t.setTimeout(t, e);
              },
            wo = Oo(Hr);
          function _o(t, e, n) {
            var r = e + "";
            return wo(
              t,
              (function (t, e) {
                var n = e.length;
                if (!n) return t;
                var r = n - 1;
                return (
                  (e[r] = (n > 1 ? "& " : "") + e[r]),
                  (e = e.join(n > 2 ? ", " : " ")),
                  t.replace(J, "{\n/* [wrapped with " + e + "] */\n")
                );
              })(
                r,
                (function (t, e) {
                  return (
                    ue(u, function (n) {
                      var r = "_." + n[0];
                      e & n[1] && !le(t, r) && t.push(r);
                    }),
                    t.sort()
                  );
                })(
                  (function (t) {
                    var e = t.match(K);
                    return e ? e[1].split(Z) : [];
                  })(r),
                  n
                )
              )
            );
          }
          function Oo(t) {
            var e = 0,
              n = 0;
            return function () {
              var r = cn(),
                i = 16 - (r - n);
              if (((n = r), i > 0)) {
                if (++e >= 800) return arguments[0];
              } else e = 0;
              return t.apply(void 0, arguments);
            };
          }
          function Ao(t, e) {
            var n = -1,
              r = t.length,
              i = r - 1;
            for (e = void 0 === e ? r : e; ++n < e; ) {
              var o = Mr(n, i),
                a = t[o];
              (t[o] = t[n]), (t[n] = a);
            }
            return (t.length = e), t;
          }
          var Eo = (function (t) {
            var e = Oa(t, function (t) {
                return 500 === n.size && n.clear(), t;
              }),
              n = e.cache;
            return e;
          })(function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(""),
              t.replace(U, function (t, n, r, i) {
                e.push(r ? i.replace(et, "$1") : n || t);
              }),
              e
            );
          });
          function jo(t) {
            if ("string" == typeof t || Ja(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
          }
          function So(t) {
            if (null != t) {
              try {
                return Ot.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          }
          function ko(t) {
            if (t instanceof In) return t.clone();
            var e = new Ln(t.__wrapped__, t.__chain__);
            return (
              (e.__actions__ = mi(t.__actions__)),
              (e.__index__ = t.__index__),
              (e.__values__ = t.__values__),
              e
            );
          }
          var To = Fr(function (t, e) {
              return Ma(t) ? Zn(t, or(e, 1, Ma, !0)) : [];
            }),
            Co = Fr(function (t, e) {
              var n = zo(e);
              return (
                Ma(n) && (n = void 0),
                Ma(t) ? Zn(t, or(e, 1, Ma, !0), Xi(n, 2)) : []
              );
            }),
            Lo = Fr(function (t, e) {
              var n = zo(e);
              return (
                Ma(n) && (n = void 0),
                Ma(t) ? Zn(t, or(e, 1, Ma, !0), void 0, n) : []
              );
            });
          function Io(t, e, n) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = null == n ? 0 : ru(n);
            return i < 0 && (i = an(r + i, 0)), xe(t, Xi(e, 3), i);
          }
          function Do(t, e, n) {
            var r = null == t ? 0 : t.length;
            if (!r) return -1;
            var i = r - 1;
            return (
              void 0 !== n &&
                ((i = ru(n)), (i = n < 0 ? an(r + i, 0) : un(i, r - 1))),
              xe(t, Xi(e, 3), i, !0)
            );
          }
          function Po(t) {
            return (null == t ? 0 : t.length) ? or(t, 1) : [];
          }
          function Ro(t) {
            return t && t.length ? t[0] : void 0;
          }
          var Mo = Fr(function (t) {
              var e = pe(t, oi);
              return e.length && e[0] === t[0] ? mr(e) : [];
            }),
            No = Fr(function (t) {
              var e = zo(t),
                n = pe(t, oi);
              return (
                e === zo(n) ? (e = void 0) : n.pop(),
                n.length && n[0] === t[0] ? mr(n, Xi(e, 2)) : []
              );
            }),
            Fo = Fr(function (t) {
              var e = zo(t),
                n = pe(t, oi);
              return (
                (e = "function" == typeof e ? e : void 0) && n.pop(),
                n.length && n[0] === t[0] ? mr(n, void 0, e) : []
              );
            });
          function zo(t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : void 0;
          }
          var Bo = Fr(qo);
          function qo(t, e) {
            return t && t.length && e && e.length ? Pr(t, e) : t;
          }
          var Vo = Wi(function (t, e) {
            var n = null == t ? 0 : t.length,
              r = Yn(t, e);
            return (
              Rr(
                t,
                pe(e, function (t) {
                  return ao(t, n) ? +t : t;
                }).sort(hi)
              ),
              r
            );
          });
          function Ho(t) {
            return null == t ? t : ln.call(t);
          }
          var Wo = Fr(function (t) {
              return Kr(or(t, 1, Ma, !0));
            }),
            Uo = Fr(function (t) {
              var e = zo(t);
              return Ma(e) && (e = void 0), Kr(or(t, 1, Ma, !0), Xi(e, 2));
            }),
            Go = Fr(function (t) {
              var e = zo(t);
              return (
                (e = "function" == typeof e ? e : void 0),
                Kr(or(t, 1, Ma, !0), void 0, e)
              );
            });
          function $o(t) {
            if (!t || !t.length) return [];
            var e = 0;
            return (
              (t = fe(t, function (t) {
                if (Ma(t)) return (e = an(t.length, e)), !0;
              })),
              Te(e, function (e) {
                return pe(t, Ee(e));
              })
            );
          }
          function Yo(t, e) {
            if (!t || !t.length) return [];
            var n = $o(t);
            return null == e
              ? n
              : pe(n, function (t) {
                  return oe(e, void 0, t);
                });
          }
          var Qo = Fr(function (t, e) {
              return Ma(t) ? Zn(t, e) : [];
            }),
            Xo = Fr(function (t) {
              return ri(fe(t, Ma));
            }),
            Jo = Fr(function (t) {
              var e = zo(t);
              return Ma(e) && (e = void 0), ri(fe(t, Ma), Xi(e, 2));
            }),
            Ko = Fr(function (t) {
              var e = zo(t);
              return (
                (e = "function" == typeof e ? e : void 0),
                ri(fe(t, Ma), void 0, e)
              );
            }),
            Zo = Fr($o);
          var ta = Fr(function (t) {
            var e = t.length,
              n = e > 1 ? t[e - 1] : void 0;
            return (
              (n = "function" == typeof n ? (t.pop(), n) : void 0), Yo(t, n)
            );
          });
          function ea(t) {
            var e = kn(t);
            return (e.__chain__ = !0), e;
          }
          function na(t, e) {
            return e(t);
          }
          var ra = Wi(function (t) {
            var e = t.length,
              n = e ? t[0] : 0,
              r = this.__wrapped__,
              i = function (e) {
                return Yn(e, t);
              };
            return !(e > 1 || this.__actions__.length) &&
              r instanceof In &&
              ao(n)
              ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                  func: na,
                  args: [i],
                  thisArg: void 0,
                }),
                new Ln(r, this.__chain__).thru(function (t) {
                  return e && !t.length && t.push(void 0), t;
                }))
              : this.thru(i);
          });
          var ia = bi(function (t, e, n) {
            At.call(t, n) ? ++t[n] : $n(t, n, 1);
          });
          var oa = ji(Io),
            aa = ji(Do);
          function ua(t, e) {
            return (Da(t) ? ue : tr)(t, Xi(e, 3));
          }
          function ca(t, e) {
            return (Da(t) ? ce : er)(t, Xi(e, 3));
          }
          var sa = bi(function (t, e, n) {
            At.call(t, n) ? t[n].push(e) : $n(t, n, [e]);
          });
          var fa = Fr(function (t, e, n) {
              var i = -1,
                o = "function" == typeof e,
                a = Ra(t) ? r(t.length) : [];
              return (
                tr(t, function (t) {
                  a[++i] = o ? oe(e, t, n) : yr(t, e, n);
                }),
                a
              );
            }),
            la = bi(function (t, e, n) {
              $n(t, n, e);
            });
          function da(t, e) {
            return (Da(t) ? pe : Sr)(t, Xi(e, 3));
          }
          var pa = bi(
            function (t, e, n) {
              t[n ? 0 : 1].push(e);
            },
            function () {
              return [[], []];
            }
          );
          var ha = Fr(function (t, e) {
              if (null == t) return [];
              var n = e.length;
              return (
                n > 1 && uo(t, e[0], e[1])
                  ? (e = [])
                  : n > 2 && uo(e[0], e[1], e[2]) && (e = [e[0]]),
                Ir(t, or(e, 1), [])
              );
            }),
            va =
              Xe ||
              function () {
                return $t.Date.now();
              };
          function ga(t, e, n) {
            return (
              (e = n ? void 0 : e),
              zi(
                t,
                128,
                void 0,
                void 0,
                void 0,
                void 0,
                (e = t && null == e ? t.length : e)
              )
            );
          }
          function ma(t, e) {
            var n;
            if ("function" != typeof e) throw new yt(o);
            return (
              (t = ru(t)),
              function () {
                return (
                  --t > 0 && (n = e.apply(this, arguments)),
                  t <= 1 && (e = void 0),
                  n
                );
              }
            );
          }
          var ya = Fr(function (t, e, n) {
              var r = 1;
              if (n.length) {
                var i = Ve(n, Qi(ya));
                r |= 32;
              }
              return zi(t, r, e, n, i);
            }),
            ba = Fr(function (t, e, n) {
              var r = 3;
              if (n.length) {
                var i = Ve(n, Qi(ba));
                r |= 32;
              }
              return zi(e, r, t, n, i);
            });
          function xa(t, e, n) {
            var r,
              i,
              a,
              u,
              c,
              s,
              f = 0,
              l = !1,
              d = !1,
              p = !0;
            if ("function" != typeof t) throw new yt(o);
            function h(e) {
              var n = r,
                o = i;
              return (r = i = void 0), (f = e), (u = t.apply(o, n));
            }
            function v(t) {
              return (f = t), (c = xo(m, e)), l ? h(t) : u;
            }
            function g(t) {
              var n = t - s;
              return void 0 === s || n >= e || n < 0 || (d && t - f >= a);
            }
            function m() {
              var t = va();
              if (g(t)) return y(t);
              c = xo(
                m,
                (function (t) {
                  var n = e - (t - s);
                  return d ? un(n, a - (t - f)) : n;
                })(t)
              );
            }
            function y(t) {
              return (c = void 0), p && r ? h(t) : ((r = i = void 0), u);
            }
            function b() {
              var t = va(),
                n = g(t);
              if (((r = arguments), (i = this), (s = t), n)) {
                if (void 0 === c) return v(s);
                if (d) return fi(c), (c = xo(m, e)), h(s);
              }
              return void 0 === c && (c = xo(m, e)), u;
            }
            return (
              (e = ou(e) || 0),
              Ha(n) &&
                ((l = !!n.leading),
                (a = (d = "maxWait" in n) ? an(ou(n.maxWait) || 0, e) : a),
                (p = "trailing" in n ? !!n.trailing : p)),
              (b.cancel = function () {
                void 0 !== c && fi(c), (f = 0), (r = s = i = c = void 0);
              }),
              (b.flush = function () {
                return void 0 === c ? u : y(va());
              }),
              b
            );
          }
          var wa = Fr(function (t, e) {
              return Kn(t, 1, e);
            }),
            _a = Fr(function (t, e, n) {
              return Kn(t, ou(e) || 0, n);
            });
          function Oa(t, e) {
            if ("function" != typeof t || (null != e && "function" != typeof e))
              throw new yt(o);
            var n = function () {
              var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
              if (o.has(i)) return o.get(i);
              var a = t.apply(this, r);
              return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (Oa.Cache || Rn)()), n;
          }
          function Aa(t) {
            if ("function" != typeof t) throw new yt(o);
            return function () {
              var e = arguments;
              switch (e.length) {
                case 0:
                  return !t.call(this);
                case 1:
                  return !t.call(this, e[0]);
                case 2:
                  return !t.call(this, e[0], e[1]);
                case 3:
                  return !t.call(this, e[0], e[1], e[2]);
              }
              return !t.apply(this, e);
            };
          }
          Oa.Cache = Rn;
          var Ea = ci(function (t, e) {
              var n = (e =
                1 == e.length && Da(e[0])
                  ? pe(e[0], Ce(Xi()))
                  : pe(or(e, 1), Ce(Xi()))).length;
              return Fr(function (r) {
                for (var i = -1, o = un(r.length, n); ++i < o; )
                  r[i] = e[i].call(this, r[i]);
                return oe(t, this, r);
              });
            }),
            ja = Fr(function (t, e) {
              return zi(t, 32, void 0, e, Ve(e, Qi(ja)));
            }),
            Sa = Fr(function (t, e) {
              return zi(t, 64, void 0, e, Ve(e, Qi(Sa)));
            }),
            ka = Wi(function (t, e) {
              return zi(t, 256, void 0, void 0, void 0, e);
            });
          function Ta(t, e) {
            return t === e || (t != t && e != e);
          }
          var Ca = Pi(hr),
            La = Pi(function (t, e) {
              return t >= e;
            }),
            Ia = br(
              (function () {
                return arguments;
              })()
            )
              ? br
              : function (t) {
                  return Wa(t) && At.call(t, "callee") && !Yt.call(t, "callee");
                },
            Da = r.isArray,
            Pa = Zt
              ? Ce(Zt)
              : function (t) {
                  return Wa(t) && pr(t) == O;
                };
          function Ra(t) {
            return null != t && Va(t.length) && !Ba(t);
          }
          function Ma(t) {
            return Wa(t) && Ra(t);
          }
          var Na = en || oc,
            Fa = te
              ? Ce(te)
              : function (t) {
                  return Wa(t) && pr(t) == l;
                };
          function za(t) {
            if (!Wa(t)) return !1;
            var e = pr(t);
            return (
              e == d ||
              "[object DOMException]" == e ||
              ("string" == typeof t.message &&
                "string" == typeof t.name &&
                !$a(t))
            );
          }
          function Ba(t) {
            if (!Ha(t)) return !1;
            var e = pr(t);
            return (
              e == p ||
              e == h ||
              "[object AsyncFunction]" == e ||
              "[object Proxy]" == e
            );
          }
          function qa(t) {
            return "number" == typeof t && t == ru(t);
          }
          function Va(t) {
            return (
              "number" == typeof t &&
              t > -1 &&
              t % 1 == 0 &&
              t <= 9007199254740991
            );
          }
          function Ha(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          }
          function Wa(t) {
            return null != t && "object" == typeof t;
          }
          var Ua = ee
            ? Ce(ee)
            : function (t) {
                return Wa(t) && no(t) == v;
              };
          function Ga(t) {
            return "number" == typeof t || (Wa(t) && pr(t) == g);
          }
          function $a(t) {
            if (!Wa(t) || pr(t) != m) return !1;
            var e = Ut(t);
            if (null === e) return !0;
            var n = At.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && Ot.call(n) == kt;
          }
          var Ya = ne
            ? Ce(ne)
            : function (t) {
                return Wa(t) && pr(t) == y;
              };
          var Qa = re
            ? Ce(re)
            : function (t) {
                return Wa(t) && no(t) == b;
              };
          function Xa(t) {
            return "string" == typeof t || (!Da(t) && Wa(t) && pr(t) == x);
          }
          function Ja(t) {
            return "symbol" == typeof t || (Wa(t) && pr(t) == w);
          }
          var Ka = ie
            ? Ce(ie)
            : function (t) {
                return Wa(t) && Va(t.length) && !!Bt[pr(t)];
              };
          var Za = Pi(jr),
            tu = Pi(function (t, e) {
              return t <= e;
            });
          function eu(t) {
            if (!t) return [];
            if (Ra(t)) return Xa(t) ? Ge(t) : mi(t);
            if (Kt && t[Kt])
              return (function (t) {
                for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
                return n;
              })(t[Kt]());
            var e = no(t);
            return (e == v ? Be : e == b ? He : Tu)(t);
          }
          function nu(t) {
            return t
              ? (t = ou(t)) === 1 / 0 || t === -1 / 0
                ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                : t == t
                ? t
                : 0
              : 0 === t
              ? t
              : 0;
          }
          function ru(t) {
            var e = nu(t),
              n = e % 1;
            return e == e ? (n ? e - n : e) : 0;
          }
          function iu(t) {
            return t ? Qn(ru(t), 0, 4294967295) : 0;
          }
          function ou(t) {
            if ("number" == typeof t) return t;
            if (Ja(t)) return NaN;
            if (Ha(t)) {
              var e = "function" == typeof t.valueOf ? t.valueOf() : t;
              t = Ha(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(Y, "");
            var n = ot.test(t);
            return n || ut.test(t)
              ? Wt(t.slice(2), n ? 2 : 8)
              : it.test(t)
              ? NaN
              : +t;
          }
          function au(t) {
            return yi(t, wu(t));
          }
          function uu(t) {
            return null == t ? "" : Jr(t);
          }
          var cu = xi(function (t, e) {
              if (lo(e) || Ra(e)) yi(e, xu(e), t);
              else for (var n in e) At.call(e, n) && Hn(t, n, e[n]);
            }),
            su = xi(function (t, e) {
              yi(e, wu(e), t);
            }),
            fu = xi(function (t, e, n, r) {
              yi(e, wu(e), t, r);
            }),
            lu = xi(function (t, e, n, r) {
              yi(e, xu(e), t, r);
            }),
            du = Wi(Yn);
          var pu = Fr(function (t, e) {
              t = vt(t);
              var n = -1,
                r = e.length,
                i = r > 2 ? e[2] : void 0;
              for (i && uo(e[0], e[1], i) && (r = 1); ++n < r; )
                for (var o = e[n], a = wu(o), u = -1, c = a.length; ++u < c; ) {
                  var s = a[u],
                    f = t[s];
                  (void 0 === f || (Ta(f, wt[s]) && !At.call(t, s))) &&
                    (t[s] = o[s]);
                }
              return t;
            }),
            hu = Fr(function (t) {
              return t.push(void 0, qi), oe(Ou, void 0, t);
            });
          function vu(t, e, n) {
            var r = null == t ? void 0 : lr(t, e);
            return void 0 === r ? n : r;
          }
          function gu(t, e) {
            return null != t && ro(t, e, gr);
          }
          var mu = Ti(function (t, e, n) {
              null != e && "function" != typeof e.toString && (e = St.call(e)),
                (t[e] = n);
            }, Hu(Gu)),
            yu = Ti(function (t, e, n) {
              null != e && "function" != typeof e.toString && (e = St.call(e)),
                At.call(t, e) ? t[e].push(n) : (t[e] = [n]);
            }, Xi),
            bu = Fr(yr);
          function xu(t) {
            return Ra(t) ? Fn(t) : Ar(t);
          }
          function wu(t) {
            return Ra(t) ? Fn(t, !0) : Er(t);
          }
          var _u = xi(function (t, e, n) {
              Cr(t, e, n);
            }),
            Ou = xi(function (t, e, n, r) {
              Cr(t, e, n, r);
            }),
            Au = Wi(function (t, e) {
              var n = {};
              if (null == t) return n;
              var r = !1;
              (e = pe(e, function (e) {
                return (e = ui(e, t)), r || (r = e.length > 1), e;
              })),
                yi(t, Gi(t), n),
                r && (n = Xn(n, 7, Vi));
              for (var i = e.length; i--; ) Zr(n, e[i]);
              return n;
            });
          var Eu = Wi(function (t, e) {
            return null == t
              ? {}
              : (function (t, e) {
                  return Dr(t, e, function (e, n) {
                    return gu(t, n);
                  });
                })(t, e);
          });
          function ju(t, e) {
            if (null == t) return {};
            var n = pe(Gi(t), function (t) {
              return [t];
            });
            return (
              (e = Xi(e)),
              Dr(t, n, function (t, n) {
                return e(t, n[0]);
              })
            );
          }
          var Su = Fi(xu),
            ku = Fi(wu);
          function Tu(t) {
            return null == t ? [] : Le(t, xu(t));
          }
          var Cu = Ai(function (t, e, n) {
            return (e = e.toLowerCase()), t + (n ? Lu(e) : e);
          });
          function Lu(t) {
            return zu(uu(t).toLowerCase());
          }
          function Iu(t) {
            return (t = uu(t)) && t.replace(st, Me).replace(Dt, "");
          }
          var Du = Ai(function (t, e, n) {
              return t + (n ? "-" : "") + e.toLowerCase();
            }),
            Pu = Ai(function (t, e, n) {
              return t + (n ? " " : "") + e.toLowerCase();
            }),
            Ru = Oi("toLowerCase");
          var Mu = Ai(function (t, e, n) {
            return t + (n ? "_" : "") + e.toLowerCase();
          });
          var Nu = Ai(function (t, e, n) {
            return t + (n ? " " : "") + zu(e);
          });
          var Fu = Ai(function (t, e, n) {
              return t + (n ? " " : "") + e.toUpperCase();
            }),
            zu = Oi("toUpperCase");
          function Bu(t, e, n) {
            return (
              (t = uu(t)),
              void 0 === (e = n ? void 0 : e)
                ? (function (t) {
                    return Nt.test(t);
                  })(t)
                  ? (function (t) {
                      return t.match(Rt) || [];
                    })(t)
                  : (function (t) {
                      return t.match(tt) || [];
                    })(t)
                : t.match(e) || []
            );
          }
          var qu = Fr(function (t, e) {
              try {
                return oe(t, void 0, e);
              } catch (t) {
                return za(t) ? t : new dt(t);
              }
            }),
            Vu = Wi(function (t, e) {
              return (
                ue(e, function (e) {
                  (e = jo(e)), $n(t, e, ya(t[e], t));
                }),
                t
              );
            });
          function Hu(t) {
            return function () {
              return t;
            };
          }
          var Wu = Si(),
            Uu = Si(!0);
          function Gu(t) {
            return t;
          }
          function $u(t) {
            return Or("function" == typeof t ? t : Xn(t, 1));
          }
          var Yu = Fr(function (t, e) {
              return function (n) {
                return yr(n, t, e);
              };
            }),
            Qu = Fr(function (t, e) {
              return function (n) {
                return yr(t, n, e);
              };
            });
          function Xu(t, e, n) {
            var r = xu(e),
              i = fr(e, r);
            null != n ||
              (Ha(e) && (i.length || !r.length)) ||
              ((n = e), (e = t), (t = this), (i = fr(e, xu(e))));
            var o = !(Ha(n) && "chain" in n && !n.chain),
              a = Ba(t);
            return (
              ue(i, function (n) {
                var r = e[n];
                (t[n] = r),
                  a &&
                    (t.prototype[n] = function () {
                      var e = this.__chain__;
                      if (o || e) {
                        var n = t(this.__wrapped__),
                          i = (n.__actions__ = mi(this.__actions__));
                        return (
                          i.push({ func: r, args: arguments, thisArg: t }),
                          (n.__chain__ = e),
                          n
                        );
                      }
                      return r.apply(t, he([this.value()], arguments));
                    });
              }),
              t
            );
          }
          function Ju() {}
          var Ku = Li(pe),
            Zu = Li(se),
            tc = Li(me);
          function ec(t) {
            return co(t)
              ? Ee(jo(t))
              : (function (t) {
                  return function (e) {
                    return lr(e, t);
                  };
                })(t);
          }
          var nc = Di(),
            rc = Di(!0);
          function ic() {
            return [];
          }
          function oc() {
            return !1;
          }
          var ac = Ci(function (t, e) {
              return t + e;
            }, 0),
            uc = Mi("ceil"),
            cc = Ci(function (t, e) {
              return t / e;
            }, 1),
            sc = Mi("floor");
          var fc,
            lc = Ci(function (t, e) {
              return t * e;
            }, 1),
            dc = Mi("round"),
            pc = Ci(function (t, e) {
              return t - e;
            }, 0);
          return (
            (kn.after = function (t, e) {
              if ("function" != typeof e) throw new yt(o);
              return (
                (t = ru(t)),
                function () {
                  if (--t < 1) return e.apply(this, arguments);
                }
              );
            }),
            (kn.ary = ga),
            (kn.assign = cu),
            (kn.assignIn = su),
            (kn.assignInWith = fu),
            (kn.assignWith = lu),
            (kn.at = du),
            (kn.before = ma),
            (kn.bind = ya),
            (kn.bindAll = Vu),
            (kn.bindKey = ba),
            (kn.castArray = function () {
              if (!arguments.length) return [];
              var t = arguments[0];
              return Da(t) ? t : [t];
            }),
            (kn.chain = ea),
            (kn.chunk = function (t, e, n) {
              e = (n ? uo(t, e, n) : void 0 === e) ? 1 : an(ru(e), 0);
              var i = null == t ? 0 : t.length;
              if (!i || e < 1) return [];
              for (var o = 0, a = 0, u = r(Ke(i / e)); o < i; )
                u[a++] = Ur(t, o, (o += e));
              return u;
            }),
            (kn.compact = function (t) {
              for (
                var e = -1, n = null == t ? 0 : t.length, r = 0, i = [];
                ++e < n;

              ) {
                var o = t[e];
                o && (i[r++] = o);
              }
              return i;
            }),
            (kn.concat = function () {
              var t = arguments.length;
              if (!t) return [];
              for (var e = r(t - 1), n = arguments[0], i = t; i--; )
                e[i - 1] = arguments[i];
              return he(Da(n) ? mi(n) : [n], or(e, 1));
            }),
            (kn.cond = function (t) {
              var e = null == t ? 0 : t.length,
                n = Xi();
              return (
                (t = e
                  ? pe(t, function (t) {
                      if ("function" != typeof t[1]) throw new yt(o);
                      return [n(t[0]), t[1]];
                    })
                  : []),
                Fr(function (n) {
                  for (var r = -1; ++r < e; ) {
                    var i = t[r];
                    if (oe(i[0], this, n)) return oe(i[1], this, n);
                  }
                })
              );
            }),
            (kn.conforms = function (t) {
              return (function (t) {
                var e = xu(t);
                return function (n) {
                  return Jn(n, t, e);
                };
              })(Xn(t, 1));
            }),
            (kn.constant = Hu),
            (kn.countBy = ia),
            (kn.create = function (t, e) {
              var n = Tn(t);
              return null == e ? n : Gn(n, e);
            }),
            (kn.curry = function t(e, n, r) {
              var i = zi(
                e,
                8,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (n = r ? void 0 : n)
              );
              return (i.placeholder = t.placeholder), i;
            }),
            (kn.curryRight = function t(e, n, r) {
              var i = zi(
                e,
                16,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (n = r ? void 0 : n)
              );
              return (i.placeholder = t.placeholder), i;
            }),
            (kn.debounce = xa),
            (kn.defaults = pu),
            (kn.defaultsDeep = hu),
            (kn.defer = wa),
            (kn.delay = _a),
            (kn.difference = To),
            (kn.differenceBy = Co),
            (kn.differenceWith = Lo),
            (kn.drop = function (t, e, n) {
              var r = null == t ? 0 : t.length;
              return r
                ? Ur(t, (e = n || void 0 === e ? 1 : ru(e)) < 0 ? 0 : e, r)
                : [];
            }),
            (kn.dropRight = function (t, e, n) {
              var r = null == t ? 0 : t.length;
              return r
                ? Ur(
                    t,
                    0,
                    (e = r - (e = n || void 0 === e ? 1 : ru(e))) < 0 ? 0 : e
                  )
                : [];
            }),
            (kn.dropRightWhile = function (t, e) {
              return t && t.length ? ei(t, Xi(e, 3), !0, !0) : [];
            }),
            (kn.dropWhile = function (t, e) {
              return t && t.length ? ei(t, Xi(e, 3), !0) : [];
            }),
            (kn.fill = function (t, e, n, r) {
              var i = null == t ? 0 : t.length;
              return i
                ? (n &&
                    "number" != typeof n &&
                    uo(t, e, n) &&
                    ((n = 0), (r = i)),
                  (function (t, e, n, r) {
                    var i = t.length;
                    for (
                      (n = ru(n)) < 0 && (n = -n > i ? 0 : i + n),
                        (r = void 0 === r || r > i ? i : ru(r)) < 0 && (r += i),
                        r = n > r ? 0 : iu(r);
                      n < r;

                    )
                      t[n++] = e;
                    return t;
                  })(t, e, n, r))
                : [];
            }),
            (kn.filter = function (t, e) {
              return (Da(t) ? fe : ir)(t, Xi(e, 3));
            }),
            (kn.flatMap = function (t, e) {
              return or(da(t, e), 1);
            }),
            (kn.flatMapDeep = function (t, e) {
              return or(da(t, e), 1 / 0);
            }),
            (kn.flatMapDepth = function (t, e, n) {
              return (n = void 0 === n ? 1 : ru(n)), or(da(t, e), n);
            }),
            (kn.flatten = Po),
            (kn.flattenDeep = function (t) {
              return (null == t ? 0 : t.length) ? or(t, 1 / 0) : [];
            }),
            (kn.flattenDepth = function (t, e) {
              return (null == t ? 0 : t.length)
                ? or(t, (e = void 0 === e ? 1 : ru(e)))
                : [];
            }),
            (kn.flip = function (t) {
              return zi(t, 512);
            }),
            (kn.flow = Wu),
            (kn.flowRight = Uu),
            (kn.fromPairs = function (t) {
              for (
                var e = -1, n = null == t ? 0 : t.length, r = {};
                ++e < n;

              ) {
                var i = t[e];
                r[i[0]] = i[1];
              }
              return r;
            }),
            (kn.functions = function (t) {
              return null == t ? [] : fr(t, xu(t));
            }),
            (kn.functionsIn = function (t) {
              return null == t ? [] : fr(t, wu(t));
            }),
            (kn.groupBy = sa),
            (kn.initial = function (t) {
              return (null == t ? 0 : t.length) ? Ur(t, 0, -1) : [];
            }),
            (kn.intersection = Mo),
            (kn.intersectionBy = No),
            (kn.intersectionWith = Fo),
            (kn.invert = mu),
            (kn.invertBy = yu),
            (kn.invokeMap = fa),
            (kn.iteratee = $u),
            (kn.keyBy = la),
            (kn.keys = xu),
            (kn.keysIn = wu),
            (kn.map = da),
            (kn.mapKeys = function (t, e) {
              var n = {};
              return (
                (e = Xi(e, 3)),
                cr(t, function (t, r, i) {
                  $n(n, e(t, r, i), t);
                }),
                n
              );
            }),
            (kn.mapValues = function (t, e) {
              var n = {};
              return (
                (e = Xi(e, 3)),
                cr(t, function (t, r, i) {
                  $n(n, r, e(t, r, i));
                }),
                n
              );
            }),
            (kn.matches = function (t) {
              return kr(Xn(t, 1));
            }),
            (kn.matchesProperty = function (t, e) {
              return Tr(t, Xn(e, 1));
            }),
            (kn.memoize = Oa),
            (kn.merge = _u),
            (kn.mergeWith = Ou),
            (kn.method = Yu),
            (kn.methodOf = Qu),
            (kn.mixin = Xu),
            (kn.negate = Aa),
            (kn.nthArg = function (t) {
              return (
                (t = ru(t)),
                Fr(function (e) {
                  return Lr(e, t);
                })
              );
            }),
            (kn.omit = Au),
            (kn.omitBy = function (t, e) {
              return ju(t, Aa(Xi(e)));
            }),
            (kn.once = function (t) {
              return ma(2, t);
            }),
            (kn.orderBy = function (t, e, n, r) {
              return null == t
                ? []
                : (Da(e) || (e = null == e ? [] : [e]),
                  Da((n = r ? void 0 : n)) || (n = null == n ? [] : [n]),
                  Ir(t, e, n));
            }),
            (kn.over = Ku),
            (kn.overArgs = Ea),
            (kn.overEvery = Zu),
            (kn.overSome = tc),
            (kn.partial = ja),
            (kn.partialRight = Sa),
            (kn.partition = pa),
            (kn.pick = Eu),
            (kn.pickBy = ju),
            (kn.property = ec),
            (kn.propertyOf = function (t) {
              return function (e) {
                return null == t ? void 0 : lr(t, e);
              };
            }),
            (kn.pull = Bo),
            (kn.pullAll = qo),
            (kn.pullAllBy = function (t, e, n) {
              return t && t.length && e && e.length ? Pr(t, e, Xi(n, 2)) : t;
            }),
            (kn.pullAllWith = function (t, e, n) {
              return t && t.length && e && e.length ? Pr(t, e, void 0, n) : t;
            }),
            (kn.pullAt = Vo),
            (kn.range = nc),
            (kn.rangeRight = rc),
            (kn.rearg = ka),
            (kn.reject = function (t, e) {
              return (Da(t) ? fe : ir)(t, Aa(Xi(e, 3)));
            }),
            (kn.remove = function (t, e) {
              var n = [];
              if (!t || !t.length) return n;
              var r = -1,
                i = [],
                o = t.length;
              for (e = Xi(e, 3); ++r < o; ) {
                var a = t[r];
                e(a, r, t) && (n.push(a), i.push(r));
              }
              return Rr(t, i), n;
            }),
            (kn.rest = function (t, e) {
              if ("function" != typeof t) throw new yt(o);
              return Fr(t, (e = void 0 === e ? e : ru(e)));
            }),
            (kn.reverse = Ho),
            (kn.sampleSize = function (t, e, n) {
              return (
                (e = (n ? uo(t, e, n) : void 0 === e) ? 1 : ru(e)),
                (Da(t) ? Bn : Br)(t, e)
              );
            }),
            (kn.set = function (t, e, n) {
              return null == t ? t : qr(t, e, n);
            }),
            (kn.setWith = function (t, e, n, r) {
              return (
                (r = "function" == typeof r ? r : void 0),
                null == t ? t : qr(t, e, n, r)
              );
            }),
            (kn.shuffle = function (t) {
              return (Da(t) ? qn : Wr)(t);
            }),
            (kn.slice = function (t, e, n) {
              var r = null == t ? 0 : t.length;
              return r
                ? (n && "number" != typeof n && uo(t, e, n)
                    ? ((e = 0), (n = r))
                    : ((e = null == e ? 0 : ru(e)),
                      (n = void 0 === n ? r : ru(n))),
                  Ur(t, e, n))
                : [];
            }),
            (kn.sortBy = ha),
            (kn.sortedUniq = function (t) {
              return t && t.length ? Qr(t) : [];
            }),
            (kn.sortedUniqBy = function (t, e) {
              return t && t.length ? Qr(t, Xi(e, 2)) : [];
            }),
            (kn.split = function (t, e, n) {
              return (
                n && "number" != typeof n && uo(t, e, n) && (e = n = void 0),
                (n = void 0 === n ? 4294967295 : n >>> 0)
                  ? (t = uu(t)) &&
                    ("string" == typeof e || (null != e && !Ya(e))) &&
                    !(e = Jr(e)) &&
                    ze(t)
                    ? si(Ge(t), 0, n)
                    : t.split(e, n)
                  : []
              );
            }),
            (kn.spread = function (t, e) {
              if ("function" != typeof t) throw new yt(o);
              return (
                (e = null == e ? 0 : an(ru(e), 0)),
                Fr(function (n) {
                  var r = n[e],
                    i = si(n, 0, e);
                  return r && he(i, r), oe(t, this, i);
                })
              );
            }),
            (kn.tail = function (t) {
              var e = null == t ? 0 : t.length;
              return e ? Ur(t, 1, e) : [];
            }),
            (kn.take = function (t, e, n) {
              return t && t.length
                ? Ur(t, 0, (e = n || void 0 === e ? 1 : ru(e)) < 0 ? 0 : e)
                : [];
            }),
            (kn.takeRight = function (t, e, n) {
              var r = null == t ? 0 : t.length;
              return r
                ? Ur(
                    t,
                    (e = r - (e = n || void 0 === e ? 1 : ru(e))) < 0 ? 0 : e,
                    r
                  )
                : [];
            }),
            (kn.takeRightWhile = function (t, e) {
              return t && t.length ? ei(t, Xi(e, 3), !1, !0) : [];
            }),
            (kn.takeWhile = function (t, e) {
              return t && t.length ? ei(t, Xi(e, 3)) : [];
            }),
            (kn.tap = function (t, e) {
              return e(t), t;
            }),
            (kn.throttle = function (t, e, n) {
              var r = !0,
                i = !0;
              if ("function" != typeof t) throw new yt(o);
              return (
                Ha(n) &&
                  ((r = "leading" in n ? !!n.leading : r),
                  (i = "trailing" in n ? !!n.trailing : i)),
                xa(t, e, { leading: r, maxWait: e, trailing: i })
              );
            }),
            (kn.thru = na),
            (kn.toArray = eu),
            (kn.toPairs = Su),
            (kn.toPairsIn = ku),
            (kn.toPath = function (t) {
              return Da(t) ? pe(t, jo) : Ja(t) ? [t] : mi(Eo(uu(t)));
            }),
            (kn.toPlainObject = au),
            (kn.transform = function (t, e, n) {
              var r = Da(t),
                i = r || Na(t) || Ka(t);
              if (((e = Xi(e, 4)), null == n)) {
                var o = t && t.constructor;
                n = i ? (r ? new o() : []) : Ha(t) && Ba(o) ? Tn(Ut(t)) : {};
              }
              return (
                (i ? ue : cr)(t, function (t, r, i) {
                  return e(n, t, r, i);
                }),
                n
              );
            }),
            (kn.unary = function (t) {
              return ga(t, 1);
            }),
            (kn.union = Wo),
            (kn.unionBy = Uo),
            (kn.unionWith = Go),
            (kn.uniq = function (t) {
              return t && t.length ? Kr(t) : [];
            }),
            (kn.uniqBy = function (t, e) {
              return t && t.length ? Kr(t, Xi(e, 2)) : [];
            }),
            (kn.uniqWith = function (t, e) {
              return (
                (e = "function" == typeof e ? e : void 0),
                t && t.length ? Kr(t, void 0, e) : []
              );
            }),
            (kn.unset = function (t, e) {
              return null == t || Zr(t, e);
            }),
            (kn.unzip = $o),
            (kn.unzipWith = Yo),
            (kn.update = function (t, e, n) {
              return null == t ? t : ti(t, e, ai(n));
            }),
            (kn.updateWith = function (t, e, n, r) {
              return (
                (r = "function" == typeof r ? r : void 0),
                null == t ? t : ti(t, e, ai(n), r)
              );
            }),
            (kn.values = Tu),
            (kn.valuesIn = function (t) {
              return null == t ? [] : Le(t, wu(t));
            }),
            (kn.without = Qo),
            (kn.words = Bu),
            (kn.wrap = function (t, e) {
              return ja(ai(e), t);
            }),
            (kn.xor = Xo),
            (kn.xorBy = Jo),
            (kn.xorWith = Ko),
            (kn.zip = Zo),
            (kn.zipObject = function (t, e) {
              return ii(t || [], e || [], Hn);
            }),
            (kn.zipObjectDeep = function (t, e) {
              return ii(t || [], e || [], qr);
            }),
            (kn.zipWith = ta),
            (kn.entries = Su),
            (kn.entriesIn = ku),
            (kn.extend = su),
            (kn.extendWith = fu),
            Xu(kn, kn),
            (kn.add = ac),
            (kn.attempt = qu),
            (kn.camelCase = Cu),
            (kn.capitalize = Lu),
            (kn.ceil = uc),
            (kn.clamp = function (t, e, n) {
              return (
                void 0 === n && ((n = e), (e = void 0)),
                void 0 !== n && (n = (n = ou(n)) == n ? n : 0),
                void 0 !== e && (e = (e = ou(e)) == e ? e : 0),
                Qn(ou(t), e, n)
              );
            }),
            (kn.clone = function (t) {
              return Xn(t, 4);
            }),
            (kn.cloneDeep = function (t) {
              return Xn(t, 5);
            }),
            (kn.cloneDeepWith = function (t, e) {
              return Xn(t, 5, (e = "function" == typeof e ? e : void 0));
            }),
            (kn.cloneWith = function (t, e) {
              return Xn(t, 4, (e = "function" == typeof e ? e : void 0));
            }),
            (kn.conformsTo = function (t, e) {
              return null == e || Jn(t, e, xu(e));
            }),
            (kn.deburr = Iu),
            (kn.defaultTo = function (t, e) {
              return null == t || t != t ? e : t;
            }),
            (kn.divide = cc),
            (kn.endsWith = function (t, e, n) {
              (t = uu(t)), (e = Jr(e));
              var r = t.length,
                i = (n = void 0 === n ? r : Qn(ru(n), 0, r));
              return (n -= e.length) >= 0 && t.slice(n, i) == e;
            }),
            (kn.eq = Ta),
            (kn.escape = function (t) {
              return (t = uu(t)) && z.test(t) ? t.replace(N, Ne) : t;
            }),
            (kn.escapeRegExp = function (t) {
              return (t = uu(t)) && $.test(t) ? t.replace(G, "\\$&") : t;
            }),
            (kn.every = function (t, e, n) {
              var r = Da(t) ? se : nr;
              return n && uo(t, e, n) && (e = void 0), r(t, Xi(e, 3));
            }),
            (kn.find = oa),
            (kn.findIndex = Io),
            (kn.findKey = function (t, e) {
              return be(t, Xi(e, 3), cr);
            }),
            (kn.findLast = aa),
            (kn.findLastIndex = Do),
            (kn.findLastKey = function (t, e) {
              return be(t, Xi(e, 3), sr);
            }),
            (kn.floor = sc),
            (kn.forEach = ua),
            (kn.forEachRight = ca),
            (kn.forIn = function (t, e) {
              return null == t ? t : ar(t, Xi(e, 3), wu);
            }),
            (kn.forInRight = function (t, e) {
              return null == t ? t : ur(t, Xi(e, 3), wu);
            }),
            (kn.forOwn = function (t, e) {
              return t && cr(t, Xi(e, 3));
            }),
            (kn.forOwnRight = function (t, e) {
              return t && sr(t, Xi(e, 3));
            }),
            (kn.get = vu),
            (kn.gt = Ca),
            (kn.gte = La),
            (kn.has = function (t, e) {
              return null != t && ro(t, e, vr);
            }),
            (kn.hasIn = gu),
            (kn.head = Ro),
            (kn.identity = Gu),
            (kn.includes = function (t, e, n, r) {
              (t = Ra(t) ? t : Tu(t)), (n = n && !r ? ru(n) : 0);
              var i = t.length;
              return (
                n < 0 && (n = an(i + n, 0)),
                Xa(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && we(t, e, n) > -1
              );
            }),
            (kn.indexOf = function (t, e, n) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i = null == n ? 0 : ru(n);
              return i < 0 && (i = an(r + i, 0)), we(t, e, i);
            }),
            (kn.inRange = function (t, e, n) {
              return (
                (e = nu(e)),
                void 0 === n ? ((n = e), (e = 0)) : (n = nu(n)),
                (function (t, e, n) {
                  return t >= un(e, n) && t < an(e, n);
                })((t = ou(t)), e, n)
              );
            }),
            (kn.invoke = bu),
            (kn.isArguments = Ia),
            (kn.isArray = Da),
            (kn.isArrayBuffer = Pa),
            (kn.isArrayLike = Ra),
            (kn.isArrayLikeObject = Ma),
            (kn.isBoolean = function (t) {
              return !0 === t || !1 === t || (Wa(t) && pr(t) == f);
            }),
            (kn.isBuffer = Na),
            (kn.isDate = Fa),
            (kn.isElement = function (t) {
              return Wa(t) && 1 === t.nodeType && !$a(t);
            }),
            (kn.isEmpty = function (t) {
              if (null == t) return !0;
              if (
                Ra(t) &&
                (Da(t) ||
                  "string" == typeof t ||
                  "function" == typeof t.splice ||
                  Na(t) ||
                  Ka(t) ||
                  Ia(t))
              )
                return !t.length;
              var e = no(t);
              if (e == v || e == b) return !t.size;
              if (lo(t)) return !Ar(t).length;
              for (var n in t) if (At.call(t, n)) return !1;
              return !0;
            }),
            (kn.isEqual = function (t, e) {
              return xr(t, e);
            }),
            (kn.isEqualWith = function (t, e, n) {
              var r = (n = "function" == typeof n ? n : void 0)
                ? n(t, e)
                : void 0;
              return void 0 === r ? xr(t, e, void 0, n) : !!r;
            }),
            (kn.isError = za),
            (kn.isFinite = function (t) {
              return "number" == typeof t && nn(t);
            }),
            (kn.isFunction = Ba),
            (kn.isInteger = qa),
            (kn.isLength = Va),
            (kn.isMap = Ua),
            (kn.isMatch = function (t, e) {
              return t === e || wr(t, e, Ki(e));
            }),
            (kn.isMatchWith = function (t, e, n) {
              return (
                (n = "function" == typeof n ? n : void 0), wr(t, e, Ki(e), n)
              );
            }),
            (kn.isNaN = function (t) {
              return Ga(t) && t != +t;
            }),
            (kn.isNative = function (t) {
              if (fo(t))
                throw new dt(
                  "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                );
              return _r(t);
            }),
            (kn.isNil = function (t) {
              return null == t;
            }),
            (kn.isNull = function (t) {
              return null === t;
            }),
            (kn.isNumber = Ga),
            (kn.isObject = Ha),
            (kn.isObjectLike = Wa),
            (kn.isPlainObject = $a),
            (kn.isRegExp = Ya),
            (kn.isSafeInteger = function (t) {
              return qa(t) && t >= -9007199254740991 && t <= 9007199254740991;
            }),
            (kn.isSet = Qa),
            (kn.isString = Xa),
            (kn.isSymbol = Ja),
            (kn.isTypedArray = Ka),
            (kn.isUndefined = function (t) {
              return void 0 === t;
            }),
            (kn.isWeakMap = function (t) {
              return Wa(t) && no(t) == _;
            }),
            (kn.isWeakSet = function (t) {
              return Wa(t) && "[object WeakSet]" == pr(t);
            }),
            (kn.join = function (t, e) {
              return null == t ? "" : rn.call(t, e);
            }),
            (kn.kebabCase = Du),
            (kn.last = zo),
            (kn.lastIndexOf = function (t, e, n) {
              var r = null == t ? 0 : t.length;
              if (!r) return -1;
              var i = r;
              return (
                void 0 !== n &&
                  (i = (i = ru(n)) < 0 ? an(r + i, 0) : un(i, r - 1)),
                e == e
                  ? (function (t, e, n) {
                      for (var r = n + 1; r--; ) if (t[r] === e) return r;
                      return r;
                    })(t, e, i)
                  : xe(t, Oe, i, !0)
              );
            }),
            (kn.lowerCase = Pu),
            (kn.lowerFirst = Ru),
            (kn.lt = Za),
            (kn.lte = tu),
            (kn.max = function (t) {
              return t && t.length ? rr(t, Gu, hr) : void 0;
            }),
            (kn.maxBy = function (t, e) {
              return t && t.length ? rr(t, Xi(e, 2), hr) : void 0;
            }),
            (kn.mean = function (t) {
              return Ae(t, Gu);
            }),
            (kn.meanBy = function (t, e) {
              return Ae(t, Xi(e, 2));
            }),
            (kn.min = function (t) {
              return t && t.length ? rr(t, Gu, jr) : void 0;
            }),
            (kn.minBy = function (t, e) {
              return t && t.length ? rr(t, Xi(e, 2), jr) : void 0;
            }),
            (kn.stubArray = ic),
            (kn.stubFalse = oc),
            (kn.stubObject = function () {
              return {};
            }),
            (kn.stubString = function () {
              return "";
            }),
            (kn.stubTrue = function () {
              return !0;
            }),
            (kn.multiply = lc),
            (kn.nth = function (t, e) {
              return t && t.length ? Lr(t, ru(e)) : void 0;
            }),
            (kn.noConflict = function () {
              return $t._ === this && ($t._ = Tt), this;
            }),
            (kn.noop = Ju),
            (kn.now = va),
            (kn.pad = function (t, e, n) {
              t = uu(t);
              var r = (e = ru(e)) ? Ue(t) : 0;
              if (!e || r >= e) return t;
              var i = (e - r) / 2;
              return Ii(Ze(i), n) + t + Ii(Ke(i), n);
            }),
            (kn.padEnd = function (t, e, n) {
              t = uu(t);
              var r = (e = ru(e)) ? Ue(t) : 0;
              return e && r < e ? t + Ii(e - r, n) : t;
            }),
            (kn.padStart = function (t, e, n) {
              t = uu(t);
              var r = (e = ru(e)) ? Ue(t) : 0;
              return e && r < e ? Ii(e - r, n) + t : t;
            }),
            (kn.parseInt = function (t, e, n) {
              return (
                n || null == e ? (e = 0) : e && (e = +e),
                sn(uu(t).replace(Q, ""), e || 0)
              );
            }),
            (kn.random = function (t, e, n) {
              if (
                (n && "boolean" != typeof n && uo(t, e, n) && (e = n = void 0),
                void 0 === n &&
                  ("boolean" == typeof e
                    ? ((n = e), (e = void 0))
                    : "boolean" == typeof t && ((n = t), (t = void 0))),
                void 0 === t && void 0 === e
                  ? ((t = 0), (e = 1))
                  : ((t = nu(t)),
                    void 0 === e ? ((e = t), (t = 0)) : (e = nu(e))),
                t > e)
              ) {
                var r = t;
                (t = e), (e = r);
              }
              if (n || t % 1 || e % 1) {
                var i = fn();
                return un(
                  t + i * (e - t + Ht("1e-" + ((i + "").length - 1))),
                  e
                );
              }
              return Mr(t, e);
            }),
            (kn.reduce = function (t, e, n) {
              var r = Da(t) ? ve : Se,
                i = arguments.length < 3;
              return r(t, Xi(e, 4), n, i, tr);
            }),
            (kn.reduceRight = function (t, e, n) {
              var r = Da(t) ? ge : Se,
                i = arguments.length < 3;
              return r(t, Xi(e, 4), n, i, er);
            }),
            (kn.repeat = function (t, e, n) {
              return (
                (e = (n ? uo(t, e, n) : void 0 === e) ? 1 : ru(e)), Nr(uu(t), e)
              );
            }),
            (kn.replace = function () {
              var t = arguments,
                e = uu(t[0]);
              return t.length < 3 ? e : e.replace(t[1], t[2]);
            }),
            (kn.result = function (t, e, n) {
              var r = -1,
                i = (e = ui(e, t)).length;
              for (i || ((i = 1), (t = void 0)); ++r < i; ) {
                var o = null == t ? void 0 : t[jo(e[r])];
                void 0 === o && ((r = i), (o = n)), (t = Ba(o) ? o.call(t) : o);
              }
              return t;
            }),
            (kn.round = dc),
            (kn.runInContext = t),
            (kn.sample = function (t) {
              return (Da(t) ? zn : zr)(t);
            }),
            (kn.size = function (t) {
              if (null == t) return 0;
              if (Ra(t)) return Xa(t) ? Ue(t) : t.length;
              var e = no(t);
              return e == v || e == b ? t.size : Ar(t).length;
            }),
            (kn.snakeCase = Mu),
            (kn.some = function (t, e, n) {
              var r = Da(t) ? me : Gr;
              return n && uo(t, e, n) && (e = void 0), r(t, Xi(e, 3));
            }),
            (kn.sortedIndex = function (t, e) {
              return $r(t, e);
            }),
            (kn.sortedIndexBy = function (t, e, n) {
              return Yr(t, e, Xi(n, 2));
            }),
            (kn.sortedIndexOf = function (t, e) {
              var n = null == t ? 0 : t.length;
              if (n) {
                var r = $r(t, e);
                if (r < n && Ta(t[r], e)) return r;
              }
              return -1;
            }),
            (kn.sortedLastIndex = function (t, e) {
              return $r(t, e, !0);
            }),
            (kn.sortedLastIndexBy = function (t, e, n) {
              return Yr(t, e, Xi(n, 2), !0);
            }),
            (kn.sortedLastIndexOf = function (t, e) {
              if (null == t ? 0 : t.length) {
                var n = $r(t, e, !0) - 1;
                if (Ta(t[n], e)) return n;
              }
              return -1;
            }),
            (kn.startCase = Nu),
            (kn.startsWith = function (t, e, n) {
              return (
                (t = uu(t)),
                (n = null == n ? 0 : Qn(ru(n), 0, t.length)),
                (e = Jr(e)),
                t.slice(n, n + e.length) == e
              );
            }),
            (kn.subtract = pc),
            (kn.sum = function (t) {
              return t && t.length ? ke(t, Gu) : 0;
            }),
            (kn.sumBy = function (t, e) {
              return t && t.length ? ke(t, Xi(e, 2)) : 0;
            }),
            (kn.template = function (t, e, n) {
              var r = kn.templateSettings;
              n && uo(t, e, n) && (e = void 0),
                (t = uu(t)),
                (e = fu({}, e, r, Bi));
              var i,
                o,
                a = fu({}, e.imports, r.imports, Bi),
                u = xu(a),
                c = Le(a, u),
                s = 0,
                f = e.interpolate || ft,
                l = "__p += '",
                d = gt(
                  (e.escape || ft).source +
                    "|" +
                    f.source +
                    "|" +
                    (f === V ? nt : ft).source +
                    "|" +
                    (e.evaluate || ft).source +
                    "|$",
                  "g"
                ),
                p =
                  "//# sourceURL=" +
                  (At.call(e, "sourceURL")
                    ? (e.sourceURL + "").replace(/[\r\n]/g, " ")
                    : "lodash.templateSources[" + ++zt + "]") +
                  "\n";
              t.replace(d, function (e, n, r, a, u, c) {
                return (
                  r || (r = a),
                  (l += t.slice(s, c).replace(lt, Fe)),
                  n && ((i = !0), (l += "' +\n__e(" + n + ") +\n'")),
                  u && ((o = !0), (l += "';\n" + u + ";\n__p += '")),
                  r &&
                    (l += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  (s = c + e.length),
                  e
                );
              }),
                (l += "';\n");
              var h = At.call(e, "variable") && e.variable;
              h || (l = "with (obj) {\n" + l + "\n}\n"),
                (l = (o ? l.replace(D, "") : l)
                  .replace(P, "$1")
                  .replace(R, "$1;")),
                (l =
                  "function(" +
                  (h || "obj") +
                  ") {\n" +
                  (h ? "" : "obj || (obj = {});\n") +
                  "var __t, __p = ''" +
                  (i ? ", __e = _.escape" : "") +
                  (o
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                    : ";\n") +
                  l +
                  "return __p\n}");
              var v = qu(function () {
                return pt(u, p + "return " + l).apply(void 0, c);
              });
              if (((v.source = l), za(v))) throw v;
              return v;
            }),
            (kn.times = function (t, e) {
              if ((t = ru(t)) < 1 || t > 9007199254740991) return [];
              var n = 4294967295,
                r = un(t, 4294967295);
              t -= 4294967295;
              for (var i = Te(r, (e = Xi(e))); ++n < t; ) e(n);
              return i;
            }),
            (kn.toFinite = nu),
            (kn.toInteger = ru),
            (kn.toLength = iu),
            (kn.toLower = function (t) {
              return uu(t).toLowerCase();
            }),
            (kn.toNumber = ou),
            (kn.toSafeInteger = function (t) {
              return t
                ? Qn(ru(t), -9007199254740991, 9007199254740991)
                : 0 === t
                ? t
                : 0;
            }),
            (kn.toString = uu),
            (kn.toUpper = function (t) {
              return uu(t).toUpperCase();
            }),
            (kn.trim = function (t, e, n) {
              if ((t = uu(t)) && (n || void 0 === e)) return t.replace(Y, "");
              if (!t || !(e = Jr(e))) return t;
              var r = Ge(t),
                i = Ge(e);
              return si(r, De(r, i), Pe(r, i) + 1).join("");
            }),
            (kn.trimEnd = function (t, e, n) {
              if ((t = uu(t)) && (n || void 0 === e)) return t.replace(X, "");
              if (!t || !(e = Jr(e))) return t;
              var r = Ge(t);
              return si(r, 0, Pe(r, Ge(e)) + 1).join("");
            }),
            (kn.trimStart = function (t, e, n) {
              if ((t = uu(t)) && (n || void 0 === e)) return t.replace(Q, "");
              if (!t || !(e = Jr(e))) return t;
              var r = Ge(t);
              return si(r, De(r, Ge(e))).join("");
            }),
            (kn.truncate = function (t, e) {
              var n = 30,
                r = "...";
              if (Ha(e)) {
                var i = "separator" in e ? e.separator : i;
                (n = "length" in e ? ru(e.length) : n),
                  (r = "omission" in e ? Jr(e.omission) : r);
              }
              var o = (t = uu(t)).length;
              if (ze(t)) {
                var a = Ge(t);
                o = a.length;
              }
              if (n >= o) return t;
              var u = n - Ue(r);
              if (u < 1) return r;
              var c = a ? si(a, 0, u).join("") : t.slice(0, u);
              if (void 0 === i) return c + r;
              if ((a && (u += c.length - u), Ya(i))) {
                if (t.slice(u).search(i)) {
                  var s,
                    f = c;
                  for (
                    i.global || (i = gt(i.source, uu(rt.exec(i)) + "g")),
                      i.lastIndex = 0;
                    (s = i.exec(f));

                  )
                    var l = s.index;
                  c = c.slice(0, void 0 === l ? u : l);
                }
              } else if (t.indexOf(Jr(i), u) != u) {
                var d = c.lastIndexOf(i);
                d > -1 && (c = c.slice(0, d));
              }
              return c + r;
            }),
            (kn.unescape = function (t) {
              return (t = uu(t)) && F.test(t) ? t.replace(M, $e) : t;
            }),
            (kn.uniqueId = function (t) {
              var e = ++Et;
              return uu(t) + e;
            }),
            (kn.upperCase = Fu),
            (kn.upperFirst = zu),
            (kn.each = ua),
            (kn.eachRight = ca),
            (kn.first = Ro),
            Xu(
              kn,
              ((fc = {}),
              cr(kn, function (t, e) {
                At.call(kn.prototype, e) || (fc[e] = t);
              }),
              fc),
              { chain: !1 }
            ),
            (kn.VERSION = "4.17.15"),
            ue(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (t) {
                kn[t].placeholder = kn;
              }
            ),
            ue(["drop", "take"], function (t, e) {
              (In.prototype[t] = function (n) {
                n = void 0 === n ? 1 : an(ru(n), 0);
                var r = this.__filtered__ && !e ? new In(this) : this.clone();
                return (
                  r.__filtered__
                    ? (r.__takeCount__ = un(n, r.__takeCount__))
                    : r.__views__.push({
                        size: un(n, 4294967295),
                        type: t + (r.__dir__ < 0 ? "Right" : ""),
                      }),
                  r
                );
              }),
                (In.prototype[t + "Right"] = function (e) {
                  return this.reverse()[t](e).reverse();
                });
            }),
            ue(["filter", "map", "takeWhile"], function (t, e) {
              var n = e + 1,
                r = 1 == n || 3 == n;
              In.prototype[t] = function (t) {
                var e = this.clone();
                return (
                  e.__iteratees__.push({ iteratee: Xi(t, 3), type: n }),
                  (e.__filtered__ = e.__filtered__ || r),
                  e
                );
              };
            }),
            ue(["head", "last"], function (t, e) {
              var n = "take" + (e ? "Right" : "");
              In.prototype[t] = function () {
                return this[n](1).value()[0];
              };
            }),
            ue(["initial", "tail"], function (t, e) {
              var n = "drop" + (e ? "" : "Right");
              In.prototype[t] = function () {
                return this.__filtered__ ? new In(this) : this[n](1);
              };
            }),
            (In.prototype.compact = function () {
              return this.filter(Gu);
            }),
            (In.prototype.find = function (t) {
              return this.filter(t).head();
            }),
            (In.prototype.findLast = function (t) {
              return this.reverse().find(t);
            }),
            (In.prototype.invokeMap = Fr(function (t, e) {
              return "function" == typeof t
                ? new In(this)
                : this.map(function (n) {
                    return yr(n, t, e);
                  });
            })),
            (In.prototype.reject = function (t) {
              return this.filter(Aa(Xi(t)));
            }),
            (In.prototype.slice = function (t, e) {
              t = ru(t);
              var n = this;
              return n.__filtered__ && (t > 0 || e < 0)
                ? new In(n)
                : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                  void 0 !== e &&
                    (n = (e = ru(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                  n);
            }),
            (In.prototype.takeRightWhile = function (t) {
              return this.reverse().takeWhile(t).reverse();
            }),
            (In.prototype.toArray = function () {
              return this.take(4294967295);
            }),
            cr(In.prototype, function (t, e) {
              var n = /^(?:filter|find|map|reject)|While$/.test(e),
                r = /^(?:head|last)$/.test(e),
                i = kn[r ? "take" + ("last" == e ? "Right" : "") : e],
                o = r || /^find/.test(e);
              i &&
                (kn.prototype[e] = function () {
                  var e = this.__wrapped__,
                    a = r ? [1] : arguments,
                    u = e instanceof In,
                    c = a[0],
                    s = u || Da(e),
                    f = function (t) {
                      var e = i.apply(kn, he([t], a));
                      return r && l ? e[0] : e;
                    };
                  s &&
                    n &&
                    "function" == typeof c &&
                    1 != c.length &&
                    (u = s = !1);
                  var l = this.__chain__,
                    d = !!this.__actions__.length,
                    p = o && !l,
                    h = u && !d;
                  if (!o && s) {
                    e = h ? e : new In(this);
                    var v = t.apply(e, a);
                    return (
                      v.__actions__.push({
                        func: na,
                        args: [f],
                        thisArg: void 0,
                      }),
                      new Ln(v, l)
                    );
                  }
                  return p && h
                    ? t.apply(this, a)
                    : ((v = this.thru(f)),
                      p ? (r ? v.value()[0] : v.value()) : v);
                });
            }),
            ue(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (t) {
                var e = bt[t],
                  n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                  r = /^(?:pop|shift)$/.test(t);
                kn.prototype[t] = function () {
                  var t = arguments;
                  if (r && !this.__chain__) {
                    var i = this.value();
                    return e.apply(Da(i) ? i : [], t);
                  }
                  return this[n](function (n) {
                    return e.apply(Da(n) ? n : [], t);
                  });
                };
              }
            ),
            cr(In.prototype, function (t, e) {
              var n = kn[e];
              if (n) {
                var r = n.name + "";
                At.call(bn, r) || (bn[r] = []),
                  bn[r].push({ name: e, func: n });
              }
            }),
            (bn[ki(void 0, 2).name] = [{ name: "wrapper", func: void 0 }]),
            (In.prototype.clone = function () {
              var t = new In(this.__wrapped__);
              return (
                (t.__actions__ = mi(this.__actions__)),
                (t.__dir__ = this.__dir__),
                (t.__filtered__ = this.__filtered__),
                (t.__iteratees__ = mi(this.__iteratees__)),
                (t.__takeCount__ = this.__takeCount__),
                (t.__views__ = mi(this.__views__)),
                t
              );
            }),
            (In.prototype.reverse = function () {
              if (this.__filtered__) {
                var t = new In(this);
                (t.__dir__ = -1), (t.__filtered__ = !0);
              } else (t = this.clone()).__dir__ *= -1;
              return t;
            }),
            (In.prototype.value = function () {
              var t = this.__wrapped__.value(),
                e = this.__dir__,
                n = Da(t),
                r = e < 0,
                i = n ? t.length : 0,
                o = (function (t, e, n) {
                  var r = -1,
                    i = n.length;
                  for (; ++r < i; ) {
                    var o = n[r],
                      a = o.size;
                    switch (o.type) {
                      case "drop":
                        t += a;
                        break;
                      case "dropRight":
                        e -= a;
                        break;
                      case "take":
                        e = un(e, t + a);
                        break;
                      case "takeRight":
                        t = an(t, e - a);
                    }
                  }
                  return { start: t, end: e };
                })(0, i, this.__views__),
                a = o.start,
                u = o.end,
                c = u - a,
                s = r ? u : a - 1,
                f = this.__iteratees__,
                l = f.length,
                d = 0,
                p = un(c, this.__takeCount__);
              if (!n || (!r && i == c && p == c))
                return ni(t, this.__actions__);
              var h = [];
              t: for (; c-- && d < p; ) {
                for (var v = -1, g = t[(s += e)]; ++v < l; ) {
                  var m = f[v],
                    y = m.iteratee,
                    b = m.type,
                    x = y(g);
                  if (2 == b) g = x;
                  else if (!x) {
                    if (1 == b) continue t;
                    break t;
                  }
                }
                h[d++] = g;
              }
              return h;
            }),
            (kn.prototype.at = ra),
            (kn.prototype.chain = function () {
              return ea(this);
            }),
            (kn.prototype.commit = function () {
              return new Ln(this.value(), this.__chain__);
            }),
            (kn.prototype.next = function () {
              void 0 === this.__values__ &&
                (this.__values__ = eu(this.value()));
              var t = this.__index__ >= this.__values__.length;
              return {
                done: t,
                value: t ? void 0 : this.__values__[this.__index__++],
              };
            }),
            (kn.prototype.plant = function (t) {
              for (var e, n = this; n instanceof Cn; ) {
                var r = ko(n);
                (r.__index__ = 0),
                  (r.__values__ = void 0),
                  e ? (i.__wrapped__ = r) : (e = r);
                var i = r;
                n = n.__wrapped__;
              }
              return (i.__wrapped__ = t), e;
            }),
            (kn.prototype.reverse = function () {
              var t = this.__wrapped__;
              if (t instanceof In) {
                var e = t;
                return (
                  this.__actions__.length && (e = new In(this)),
                  (e = e.reverse()).__actions__.push({
                    func: na,
                    args: [Ho],
                    thisArg: void 0,
                  }),
                  new Ln(e, this.__chain__)
                );
              }
              return this.thru(Ho);
            }),
            (kn.prototype.toJSON =
              kn.prototype.valueOf =
              kn.prototype.value =
                function () {
                  return ni(this.__wrapped__, this.__actions__);
                }),
            (kn.prototype.first = kn.prototype.head),
            Kt &&
              (kn.prototype[Kt] = function () {
                return this;
              }),
            kn
          );
        })();
        ($t._ = Ye),
          void 0 ===
            (i = function () {
              return Ye;
            }.call(e, n, e, r)) || (r.exports = i);
      }.call(this));
    }.call(this, n(83), n(251)(t)));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return i;
    });
    n(38), n(149), n(59), n(35), n(61), n(103);
    var r = n(1);
    function i(t) {
      if (!t) return 0;
      if ("number" == typeof t) return t;
      if (-1 !== t.indexOf("+"))
        return t.split("+").reduce(function (t, e) {
          return t + i(e);
        }, 0);
      if (-1 !== t.indexOf("-")) {
        var e = t.split("-"),
          n = e.shift();
        return e.reduce(function (t, e) {
          return t - i(e);
        }, i(n));
      }
      return -1 !== t.indexOf("vw")
        ? Object(r.g)(parseFloat(t.replace("vw", "")))
        : -1 !== t.indexOf("vh")
        ? Object(r.f)(parseFloat(t.replace("vh", "")))
        : -1 !== t.indexOf("rpx")
        ? Object(r.d)(parseFloat(t.replace("rpx", "")))
        : -1 !== t.indexOf("mpx")
        ? Object(r.c)(parseFloat(t.replace("mpx", "")))
        : -1 !== t.indexOf("px")
        ? parseFloat(t.replace("px", ""))
        : 0;
    }
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return c;
      });
      var r = n(0),
        i = n(66),
        o = n(2),
        a = n(20),
        u = n(3);
      function c() {
        Object(a.b)();
        var e = document.getElementById("section-kv"),
          n = Object(r.e)(e, "img,video"),
          c = Object(a.d)(n, { timeout: 5e3 }),
          s = Object(r.d)(e, ".box-1 .show-phone .text-box "),
          f = Object(r.d)(e, ".box-1 .video-1 video"),
          l = Object(r.d)(e, ".box-1 .video-1 .kv-bg");
        var d = Object(u.a)(e, {
          start: { percent: 0, distance: 0, targetPercent: -0.5 },
          end: "top",
          handlers: {
            onStateChange: function (t) {
              "before" !== t.state && (Object(a.c)(), d.destroy());
            },
          },
        });
        return {
          show: function () {
            c.then(function () {
              Object(o.a)()
                ? (t(s).addClass("text-move"),
                  t(".mask-box").addClass("mask-move"))
                : (Object(i.a)(f, "ended", { timeout: 5e3 }).then(function () {
                    (l.style.opacity = 1), (f.style.opacity = 0);
                  }),
                  f.play(),
                  t(s).addClass("text-move")),
                Object(a.c)();
            });
          },
        };
      }
    }.call(this, n(30)));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return f;
    });
    n(40), n(26), n(27);
    var r = n(10),
      i = n(0),
      o = n(1),
      a = n(2),
      u = n(48),
      c = n(23),
      s = n(3);
    function f() {
      var t,
        e,
        n,
        f = document.getElementById("section-camera"),
        l = Object(i.d)(f, ".box-2"),
        d = Object(i.d)(l, ".bg-box"),
        p = Object(i.d)(l, ".cursor-box"),
        h = Object(i.d)(p, ".player-btn"),
        v = Object(i.d)(d, "video"),
        g = { x: 0, y: 0 };
      Object(a.a)()
        ? ((n = "#canvasPlayer-cc"),
          (e = Object(u.a)(
            document.querySelector(n),
            {
              defaultPlayOptions: {
                fps: 24,
                mode: c.c.Loop,
                onUpdated: function () {},
                onEnded: function () {},
              },
            },
            !0
          )).then(function (t) {
            return t.play();
          }),
          Object(r.b)({
            position: function () {
              return Object(o.a)(d) - Object(o.f)(80);
            },
            reverse: "current",
          }).add({
            opacity: [1, 0.7],
            targets: d,
            duration: 700,
            easing: "easeInOutSine",
          }),
          Object(r.b)({
            position: function () {
              return Object(o.a)(d) - Object(o.f)(140);
            },
            reverse: "current",
          }).add({
            opacity: [0.7, 1],
            targets: d,
            duration: 700,
            easing: "easeInOutSine",
          }))
        : (Object(r.b)({
            position: function () {
              return Object(o.a)(d) - Object(o.f)(80);
            },
            reverse: "current",
          }).add({
            opacity: [1, 0.3],
            targets: d,
            duration: 1e3,
            easing: "easeInOutSine",
          }),
          Object(r.b)({
            position: function () {
              return Object(o.a)(d) - Object(o.f)(140);
            },
            reverse: "current",
          }).add({
            opacity: [0.3, 1],
            targets: d,
            duration: 1e3,
            easing: "easeInOutSine",
          }),
          window.addEventListener("mousemove", function (t) {
            g = { x: t.clientX, y: t.clientY };
            var e = t.clientX - p.offsetWidth / 2,
              n = t.clientY - p.offsetHeight / 2 - 10;
            p.style.transform = "translate(".concat(e, "px, ").concat(n, "px)");
            var r = Object(o.e)(l),
              i = Object(o.a)(l);
            t.pageY > r && t.pageY < i
              ? ((l.style.cursor = "none"), (h.style.opacity = 1))
              : ((h.style.opacity = 0), (l.style.cursor = "auto"));
          }),
          window.addEventListener("scroll", function () {
            var t = l.offsetTop,
              e = l.offsetTop + l.offsetHeight;
            window.scrollY + g.y > t && window.scrollY + g.y < e
              ? ((l.style.cursor = "none"), (h.style.opacity = 1))
              : ((h.style.opacity = 0), (l.style.cursor = "auto"));
          }),
          l.addEventListener("mouseenter", function () {
            (h.style.opacity = 1), (l.style.cursor = "none");
          }),
          l.addEventListener("mouseleave", function () {
            (h.style.opacity = 0), (l.style.cursor = "auto");
          }),
          (t = new Promise(function (t) {
            v.addEventListener("canplay", function () {
              return t(v);
            });
          }))),
        Object(s.a)(f, {
          handlers: {
            onStateChange: function (n) {
              var r = n.state,
                i = n.oldState;
              "inView" === r &&
                "before" === i &&
                (Object(a.a)()
                  ? e.then(function (t) {
                      t.seek(0), t.play();
                    })
                  : t.then(function (t) {
                      return t.play();
                    }));
            },
          },
        });
    }
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return h;
      });
      n(43), n(64), n(8), n(106), n(107), n(46), n(13);
      var r = n(18),
        i = n.n(r),
        o = n(10),
        a = n(0),
        u = n(1),
        c = n(2),
        s = n(6),
        f = n(21),
        l = n(28),
        d = n(165);
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h() {
        var e = Object(a.d)(document, "#section-lightspot"),
          n = Object(c.a)(),
          r = Object(u.f)(40),
          h = Object(u.f)(-30),
          v = Object(u.f)(50),
          g = Object(u.f)(-40),
          m = Object(u.b)(Object(a.d)(document, "#navbar")),
          y = Object(a.d)(e, ".sticky-item"),
          b = {
            screen: "Part6: 浜у搧-10浜胯壊",
            chip: "Part6: 浜у搧-鍐呰姱",
            charge: "Part6: 浜у搧-鍏呯數",
          },
          x = "",
          w = Object(s.e)(),
          _ = function (t) {
            return function (e) {
              var n = e.progress;
              if (n > 50 && n < 100 && x !== t)
                return (x = t), void Object(f.a)(b[t]);
              (("screen" === t && n <= 50) || ("charge" === t && n >= 100)) &&
                (x = "");
            };
          },
          O = function (t) {
            return {
              targets: Object(a.d)(e, t),
              opacity: [0, 1],
              offset: function () {
                return h;
              },
              duration: function () {
                return r;
              },
            };
          },
          A = function (t) {
            return {
              targets: Object(a.d)(e, t),
              "clip-path": ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
              duration: function () {
                return v;
              },
              offset: function () {
                return g;
              },
              easing: "easeOutQuad",
            };
          },
          E = function (t, r, o) {
            return (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? p(Object(n), !0).forEach(function (e) {
                      i()(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : p(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })(
              {
                targets: Object(a.d)(e, t),
                scale: n ? void 0 : [1.15, 1],
                duration: function () {
                  return v;
                },
                offset: function () {
                  return g;
                },
                easing: "easeOutQuad",
                update: _(r),
              },
              o
            );
          };
        Object(d.a)(e),
          n ||
            (t(y).css({ height: Object(s.e)() - m }),
            window.addEventListener("resize", function () {
              (n && w >= Object(s.e)()) ||
                ((w = Object(s.e)()), t(y).css({ height: w - m }));
            }),
            Object(l.b)(y, { top: m }),
            Object(o.a)({
              start: function () {
                return Object(u.e)(e);
              },
              end: function () {
                return Object(u.e)(e) + Object(u.b)(e);
              },
            })
              .add({
                duration: function () {
                  return Object(u.f)(40);
                },
                update: _("camera"),
              })
              .add({
                duration: function () {
                  return Object(u.f)(40);
                },
              })
              .add(O(".section-camera .mask"))
              .add(A(".section-screen"))
              .add(E(".section-screen .bg", "screen"))
              .add({
                duration: function () {
                  return Object(u.f)(50);
                },
              })
              .add(O(".section-screen .mask"))
              .add(A(".section-chip"))
              .add(
                E(".section-chip .bg", "chip", {
                  translateY: n ? void 0 : ["-50%", "-50%"],
                })
              )
              .add({
                duration: function () {
                  return Object(u.f)(50);
                },
              })
              .add(O(".section-chip .mask"))
              .add(A(".section-charge"))
              .add(E(".section-charge .bg", "charge")));
      }
    }.call(this, n(30)));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return f;
      });
      n(108), n(8), n(13);
      var r = n(18),
        i = n.n(r),
        o = n(9),
        a = n(0),
        u = n(2),
        c = n(6),
        s = n(3);
      function f(e) {
        var n = [],
          r = Object(u.a)(),
          f = r ? "translateY" : "translateX",
          l = r ? "100%" : "-100%",
          d = 0;
        Object(a.e)(e, ".option").forEach(function (t, r) {
          t.addEventListener("click", function () {
            Object(a.e)(e, ".option")[d].classList.remove("active"),
              t.classList.add("active"),
              Object(a.e)(e, ".camera-text")[d].classList.remove("active"),
              Object(a.e)(e, ".camera-text")[r].classList.add("active"),
              n[r].seek(0),
              n[r].play(),
              (d = r);
          });
        }),
          Object(a.e)(e, ".camera-text").forEach(function (e) {
            var u,
              c = t(e).find(".inner-circle .line").length,
              s = { lineIndex: 0 },
              d = o.a.timeline({ autoplay: !1, easing: "linear" }).add({
                targets: s,
                lineIndex: [0, c - 1],
                duration: 500,
                begin: function () {
                  t(e).find(".inner-circle .line").css({ opacity: 0 });
                },
                update: function () {
                  t(e)
                    .find(".inner-circle .line")
                    .each(function (e, n) {
                      e <= s.lineIndex
                        ? t(n).css({ opacity: 1 })
                        : t(n).css({ opacity: 0 });
                    });
                },
              });
            d.add(
              {
                targets: e.querySelector(".outer-circle"),
                rotate: ["-270deg", "0deg"],
                opacity: [0, 1],
                duration: 600,
              },
              "-=400"
            ),
              r ||
                d.add(
                  {
                    targets: e.querySelector(".separator"),
                    scale: [0, 1],
                    easing: "easeOutQuad",
                    duration: 400,
                  },
                  "-=400"
                ),
              d.add(
                ((u = { targets: e.querySelector(".title") }),
                i()(u, f, [l, "0%"]),
                i()(
                  u,
                  "clip-path",
                  r ? ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"] : void 0
                ),
                i()(u, "easing", "easeOutQuad"),
                i()(u, "duration", r ? 300 : 500),
                u),
                r ? "-=500" : "-=250"
              ),
              Object(a.e)(e, ".detail p").forEach(function (t) {
                var e;
                d.add(
                  ((e = { targets: t }),
                  i()(e, f, [l, "0%"]),
                  i()(
                    e,
                    "clip-path",
                    r ? ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"] : void 0
                  ),
                  i()(e, "easing", "easeOutQuad"),
                  i()(e, "duration", 400),
                  e),
                  r ? "-=300" : "-=200"
                );
              }),
              n.push(d);
          });
        var p = !0;
        return (
          Object(s.a)(Object(a.d)(e, ".section-camera .phone"), {
            forceInViewBoundary: !0,
            handlers: {
              before: function (t) {
                t.distance / Object(c.e)() < -1 && (p = !0);
              },
              onStateChange: function (t) {
                var e = t.state,
                  r = t.oldState;
                "inView" === e &&
                  "before" === r &&
                  p &&
                  n[d] &&
                  ((p = !1), n[d].play());
              },
            },
          }),
          n
        );
      }
    }.call(this, n(30)));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return f;
    });
    n(38), n(39), n(26), n(27);
    var r = n(10),
      i = n(0),
      o = n(1),
      a = n(2),
      u = n(48),
      c = n(3),
      s = n(9);
    function f() {
      var t,
        e,
        n,
        f = Object(i.d)(document, "#section-theme"),
        l = Object(i.d)(f, ".text-wrapper .btn-group"),
        d = Object(i.e)(f, ".text-wrapper .btn-group .btn-box .border-box"),
        p = Object(i.e)(f, ".img-wrapper .video-group"),
        h = Object(i.e)(f, ".img-wrapper .video-group video"),
        v = Object(i.e)(f, ".img-wrapper .time-box .time-text"),
        g = Object(i.d)(f, ".img-wrapper .desk-box .time-box"),
        m = Object(i.d)(f, ".img-wrapper .desk-box .desk-all"),
        y = Object(i.d)(f, ".img-wrapper .desk-box .desk-1"),
        b = Object(i.d)(f, ".img-wrapper .desk-box .mid"),
        x = Object(i.e)(f, ".img-wrapper .video"),
        w = Object(i.d)(f, ".desk-box .dot-box .dot1-box"),
        _ = Object(i.d)(f, ".desk-box .dot-box .dot2-box"),
        O = Object(i.e)(f, ".text-wrapper .btn-group .btn-box .text-box"),
        A = [],
        E = Object(a.a)();
      function j(t) {
        return Object(u.a)(
          document.querySelector(t),
          {
            defaultPlayOptions: {
              fps: 24,
              onUpdated: function () {},
              onEnded: function () {},
            },
          },
          !0
        );
      }
      function S(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        for (var i = 0; i < n.length; i += 1)
          n[i].style.cssText = "opacity: ".concat(t);
      }
      E ||
        (A = h.map(function (t) {
          return new Promise(function (e) {
            t.addEventListener("canplay", function () {
              return e(t);
            });
          });
        })),
        (n = s.a
          .timeline({ autoplay: !0 })
          .add({
            targets: [m],
            translateY: ["-25%", "-10%"],
            opacity: [1, 0],
            duration: 250,
            easing: "easeOutCubic",
          })
          .add({
            targets: [g],
            opacity: [0, 1],
            duration: 750,
            easing: "easeOutCubic",
          })),
        (e = s.a
          .timeline({ autoplay: !1 })
          .add({
            easing: "easeOutExpo",
            targets: [m],
            translateY: ["0", "-25%"],
            opacity: [0, 1],
            duration: 650,
          })
          .add({
            targets: [y, b, g],
            translateX: ["0", "-100%"],
            duration: 700,
            easing: "cubicBezier(.58, .0, .39, .98)",
          })
          .add({ targets: [w], opacity: [1, 0], duration: 700 }, "-=700")
          .add({ targets: [_], opacity: [0, 1] }, "-=700"));
      var k = [
          j("#canvasPlayer-1"),
          j("#canvasPlayer-2"),
          j("#canvasPlayer-3"),
          j("#canvasPlayer-4"),
        ],
        T = "";
      l.addEventListener("click", function (r) {
        if (((t = E ? x : p), -1 !== d.indexOf(r.target))) {
          "" === T && (T = d.indexOf(r.target));
          for (var i = 0; i < 4; i += 1)
            (d[i].style.cssText = "opacity: 0"),
              (O[i].style.cssText = "opacity: 0.5");
          if (4 === d.indexOf(r.target))
            S(1, r.target, O[4]), e.seek(0), e.play();
          else {
            for (var o = 0; o < 4; o += 1) S(0, t[o], v[o]);
            (d[4].style.cssText = "opacity: 0"),
              (O[4].style.cssText = "opacity: .5"),
              S(
                1,
                r.target,
                v[d.indexOf(r.target)],
                O[d.indexOf(r.target)],
                t[d.indexOf(r.target)]
              ),
              E
                ? k[d.indexOf(r.target)].then(function (t) {
                    t.seek(0), t.play();
                  })
                : A[d.indexOf(r.target)].then(function (t) {
                    return t.play();
                  }),
              e.pause(),
              4 === T &&
                (n.seek(0),
                n.play(),
                (g.style.cssText = "transform: translateX(0);opacity:0"));
          }
          T = d.indexOf(r.target);
        }
      }),
        E
          ? S(1, d[0], v[0], x[0], O[0])
          : (S(1, d[0], v[0], p[0], O[0]),
            Object(r.b)({
              position: function () {
                return Object(o.e)(f) - Object(o.f)(30);
              },
              reverse: "prev",
            }).add({ targets: l, opacity: [0, 1] })),
        Object(c.a)(f, {
          handlers: {
            onStateChange: function (t) {
              var e = t.state,
                n = t.oldState;
              "inView" === e &&
                "before" === n &&
                (E
                  ? k[0].then(function (t) {
                      t.seek(0), t.play();
                    })
                  : A[0].then(function (t) {
                      return t.play();
                    }));
            },
          },
        });
    }
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return u;
      });
      n(40);
      var r = n(10),
        i = n(0),
        o = n(1),
        a = n(2);
      function u() {
        var e,
          n,
          u,
          c,
          s = document.getElementById("section-packaging"),
          f = Object(i.d)(s, ".img-wrapper"),
          l = Object(i.d)(s, ".img-wrapper .pack-box .pack1"),
          d = Object(i.d)(s, ".img-wrapper .pack-box .pack0"),
          p = Object(i.d)(s, ".img-wrapper .pack-box "),
          h = Object(i.d)(s, ".img-wrapper .pack-box .pack2"),
          v = Object(i.d)(s, ".img-wrapper .pack-box .pack3"),
          g = Object(i.d)(s, ".img-wrapper .bg");
        Object(a.a)() ||
          (f.addEventListener("mousemove", function (r) {
            (e = r.clientX - t(s).width() / 2),
              (n = r.pageY - t(s).offset().top - t(s).height() / 2),
              (u = e / 50),
              (c = n / 50),
              (l.style.cssText = "transform:translateX("
                .concat(2 * -u, "px) translateY(")
                .concat((20 * -c) / 50, "px)")),
              (d.style.cssText = "transform:translateX("
                .concat(1.5 * -u, "px) translateY(")
                .concat((15 * -c) / 50, "px)")),
              (v.style.cssText = "transform:translateX("
                .concat(u, "px) translateY(")
                .concat((20 * c) / 50, "px)")),
              (h.style.cssText = "transform:translateX(".concat(-u, "px)")),
              (g.style.cssText = "transform:scale(1.1) translateX("
                .concat(u / 2, "px) translateY(")
                .concat((20 * c) / 50, "px)"));
          }),
          Object(r.a)({
            start: function () {
              return Object(o.e)(s) - Object(o.f)(50);
            },
            end: function () {
              return Object(o.e)(s) + Object(o.f)(100);
            },
          }).add({
            targets: p,
            translateY: ["0%", "-30%"],
            duration: function () {
              return Object(o.f)(150);
            },
            easing: "easeOutCubic",
          }));
      }
    }.call(this, n(30)));
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return c;
      });
      var r = n(10),
        i = n(0),
        o = n(1),
        a = n(2),
        u = n(28);
      function c() {
        var e = Object(i.d)(document, "#section-color"),
          n = t("#navbar").height() || 0,
          c = Object(a.a)();
        Object(u.b)(Object(i.d)(e, ".sticky-item"), { top: n }),
          Object(r.a)({
            start: function () {
              return Object(o.e)(e);
            },
            end: function () {
              return Object(o.e)(e) + (c ? Object(o.c)(900) : Object(o.f)(120));
            },
          })
            .add({
              targets: Object(i.d)(e, ".bg-mask"),
              opacity: [0, 1],
              duration: { percent: 0.3 },
              easing: "easeInOutQuad",
            })
            .add({
              targets: Object(i.d)(e, ".inner"),
              opacity: [0, 1],
              duration: { percent: 0.3 },
              offset: { percent: -0.1 },
              easing: "easeInOutQuad",
            })
            .add({ duration: { percent: 0.2 } })
            .add({
              targets: Object(i.d)(e, ".text-block"),
              opacity: [1, 0],
              translateX: ["-50%", "-50%"],
              translateY: ["-50%", "-100%"],
              duration: { percent: 0.15 },
            })
            .add({
              targets: Object(i.d)(e, ".bg"),
              translateY: ["7%", "-7%"],
              scale: [1.2, 1.2],
              duration: { percent: 0.3 },
              offset: { percent: -0.15 },
              easing: "easeInQuad",
            })
            .add({
              targets: Object(i.d)(e, ".mask"),
              opacity: [1, 0],
              duration: { percent: 0.3 },
              offset: { percent: -0.3 },
            });
      }
    }.call(this, n(30)));
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return l;
    });
    var r = n(0),
      i = n(3),
      o = n(65),
      a = n.n(o),
      u = (n(150), n(39), n(112)),
      c = n.n(u),
      s = n(6);
    var f = function (t) {
      for (
        var e = (function () {
            var t = function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
              return Math.random() * (e - t) + t;
            };
            return {
              random: t,
              randomArray: function (e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1;
                return Array(e)
                  .fill(0)
                  .map(function () {
                    return t(n, r);
                  });
              },
            };
          })(),
          n = e.random,
          r = e.randomArray,
          i = (function () {
            var t;
            switch (Object(s.d)().alias) {
              case "1920":
                t = { count: 1e3, speedRange: [1, 1], sizeRange: [1, 2] };
                break;
              default:
                t = { count: 1e3, speedRange: [1.2, 1.2], sizeRange: [1, 2] };
            }
            return t;
          })(),
          o = i.count,
          a = i.speedRange,
          u = i.sizeRange,
          f = [],
          l = 0;
        l < o;
        l += 1
      ) {
        var d = 2 * n() * Math.PI,
          p = 0.85 * n() + 0.15;
        f.push([p * Math.sin(d), p * Math.cos(d), n(), n()]);
      }
      // https://stackoverflow.com/questions/13780609/what-does-precision-mediump-float-mean
      return t({
        vert: "precision highp float;\n#define GLSLIFY 1\n\n#define GLSLIFY 1\n\nattribute vec4 position;\nattribute float a_random0, a_random1, size, speed;\n\nuniform mat4 view, projection;\nuniform float time;\n\nvarying float v_random0, v_random1;\n\nvoid main() {\n  vec3 finalPos = position.xyz;\n  finalPos.z += speed * .08 * time;\n  finalPos.z = mod(finalPos.z * 2., 2.) / 2.;\n\n  gl_Position = projection * view * vec4(finalPos.xyz, 1.);\n  gl_PointSize = size * 7. * finalPos.z;\n\n  v_random0 = a_random0;\n  v_random1 = a_random1;\n}\n",
        frag: "precision highp float;\n#define GLSLIFY 1\n\n#define GLSLIFY 1\n#define ORANGE vec3(.8784, .4392, .2824)\n#define WHITE vec3(0.7451, 0.7451, 0.7451)\n\nuniform float time;\n\nvarying float v_random0, v_random1;\n\nvoid main() {\n  float t0 = (3. * v_random1) * time + fract(v_random1 * 323.132);\n  float t1 = (6. * v_random1) * time + fract(v_random1 * 323.132);\n\n  float alpha =\n    mix(.6, abs(sin(t0)), step(.7, v_random0))\n    * mix(1., abs(sin(t1)), 1. - step(.7, v_random0));\n\n  vec3 color = mix(WHITE, ORANGE, step(.8, v_random0));\n  gl_FragColor = vec4(color, alpha * smoothstep(.5, .1, length(gl_PointCoord.xy - .475)));\n}\n",
        attributes: {
          position: f,
          size: r(o, u[0], u[1]),
          speed: r(o, a[0], a[1]),
          a_random0: r(o),
          a_random1: r(o),
        },
        uniforms: {
          time: function (t) {
            return t.time;
          },
          view: function () {
            return c.a.lookAt([], [0, 0, 2], [0, 0, 0], [0, 1, 0]);
          },
          projection: function (t) {
            var e = t.viewportWidth,
              n = t.viewportHeight;
            return c.a.perspective([], Math.PI / 4, e / n, 0.1, 100);
          },
        },
        count: f.length,
        primitive: "points",
        depth: { enable: !0 },
        blend: {
          enable: !0,
          func: {
            srcRGB: "src alpha",
            srcAlpha: "src alpha",
            dstRGB: "dst alpha",
            dstAlpha: "dst alpha",
          },
        },
      });
    };
    function l() {
      var t = Object(r.d)(document, "#zn-starry-star");
      t &&
        (function (t) {
          var e = window.devicePixelRatio;
          (t.width = t.getBoundingClientRect().width * e),
            (t.height = t.getBoundingClientRect().height * e);
          var n,
            r = a()({ canvas: t }),
            o = f(r),
            u = function (t) {
              var e = t.time;
              t.tick % 2 != 0 &&
                (r.clear({ color: [0, 0, 0, 1], depth: 1 }), o({ time: e }));
            };
          Object(i.a)(t, {
            start: "bottom",
            end: "top",
            forceInViewBoundary: !0,
            handlers: {
              onStateChange: function (t) {
                "inView" === t.state ? (n = r.frame(u)) : n && n.cancel();
              },
            },
          });
        })(t);
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return p;
    });
    var r = n(0),
      i = n(2),
      o = n(28),
      a = n(3),
      u = n(20),
      c = n(21),
      s = (n(150), n(8), n(26), n(27), n(13), n(65)),
      f = n.n(s),
      l = n(9);
    function d(t) {
      var e = f()({ canvas: t }),
        n = Array(t.children.length).fill(void 0),
        r = !1;
      t.children.forEach(function (i, o) {
        i.addEventListener("load", function () {
          r || ((r = !0), (t.width = i.width), (t.height = i.height)),
            (n[o] = e({
              uniforms: { uTexture: e.texture({ data: i, flipY: !0 }) },
            }));
        });
      });
      var i,
        o,
        a,
        u = e({
          vert: "#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\nattribute vec2 position;\nvarying vec2 uv;\n\nvoid main() {\n  uv = 0.5 * (position + 1.0);\n  gl_Position = vec4(position, 0, 1);\n}",
          frag: "#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\nuniform float uTime, uDir;\nuniform sampler2D uTexture;\n\nvarying vec2 uv;\n\n#define t uTime\n\nvoid main() {\n  float ux = uDir < 0. ? 1. - uv.x : uv.x;\n  if (ux > uTime) discard;\n\n  float gradient = 1. - t;\n  float x = ux - (t - gradient);\n  float alpha = 1. - x / gradient;\n  vec4 color = texture2D(uTexture, uv);\n  gl_FragColor = vec4(color.rgb, alpha);\n}",
          uniforms: { uDir: e.prop("dir"), uTime: e.prop("time") },
          attributes: { position: [-4, -4, 0, 4, 4, -4] },
          depth: { enable: !1 },
          count: 3,
          blend: {
            enable: !0,
            func: {
              srcRGB: "src alpha",
              srcAlpha: "src alpha",
              dstRGB: "one",
              dstAlpha: "one",
            },
          },
          primitive: "triangles",
        }),
        c = -1,
        s = { t: 0 },
        d = function (t) {
          var r = t.i,
            a = t.dir,
            f = t.reversed,
            d = t.duration,
            p = t.easing,
            h = void 0 === p ? "easeOutQuad" : p;
          i && i.cancel(), o && o.pause(), (c = r);
          var v = !1;
          return (
            (i = e.frame(function () {
              !(function (t, r) {
                var i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1;
                e.clear({ color: [0, 0, 0, 0.01], depth: 1 }),
                  u({ time: r, dir: i }, function () {
                    n[t] && n[t]();
                  });
              })(r, s.t, a * (f ? -1 : 1)),
                v && i && (i.cancel(), (i = void 0), c === r && (c = -1));
            })),
            new Promise(function (t) {
              (o = Object(l.a)({
                t: a > 0 ? 1 : 0,
                duration: d,
                easing: h,
                targets: s,
                autoplay: !0,
              })).finished.then(function () {
                (v = !0), (o = void 0), t();
              });
            })
          );
        },
        p = -1;
      return {
        setState: function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          (p === t && c !== t) ||
            (a ||
              (a =
                p >= 0
                  ? d({ i: p, dir: -1, duration: 600, reversed: e })
                  : Promise.resolve()),
            a.then(function () {
              (a = void 0),
                p === t && d({ i: t, dir: 1, duration: 600, reversed: e });
            }),
            (p = t));
        },
      };
    }
    function p() {
      var t,
        e = document.getElementById("section-design"),
        n = Object(r.d)(e, ".sticky-container"),
        s = Object(r.d)(n, ".sticky"),
        f = Object(r.e)(e, ".part"),
        l = Object(r.d)(e, ".footer"),
        p = [
          "Part3: 璁捐 - 涓撳睘鑹�",
          "Part3: 璁捐 - 鐏槦閾枃",
          "Part3: 璁捐 - 娴佺嚎鏈鸿韩",
          "Part3: 璁捐 - 鐜舰灞卞瑙�",
          "Part3: 璁捐 - 杞昏杽闃叉按",
        ];
      if ((Object(o.b)(s), !Object(i.a)())) {
        var h = Object(r.d)(e, ".image-clip");
        (t = d(h)), Object(u.d)(h.children);
      }
      var v,
        g = -1;
      Object(o.b)(s);
      Object(a.a)(n, {
        start: "center",
        end: "bottom",
        handlers: {
          onStateChange: function (t) {
            var e = t.state,
              n = t.oldState;
            "inView" === e &&
              ("before" === n
                ? Object(c.a)(p[0])
                : "after" === n && Object(c.a)(p[p.length - 1]));
          },
          inView: function (e) {
            var n = e.distance / e.total;
            !(function (e) {
              if (g !== e) {
                Object(c.a)(p[e]), t && t.setState(e, e < g);
                for (var n = 0; n < e; n += 1)
                  f[n].classList.add("in-view", "after");
                for (var r = e + 1; r < 5; r += 1)
                  f[r].classList.remove("in-view", "after");
                void 0 !== v && window.clearTimeout(v),
                  (v = window.setTimeout(
                    function () {
                      f[e].classList.add("in-view"),
                        f[e].classList.remove("after"),
                        (v = void 0);
                    },
                    g < 0 ? 0 : 600
                  )),
                  Object(i.a)() ||
                    l.setAttribute("data-active", "".concat(e + 1)),
                  (g = e);
              }
            })(n < 1 ? Math.floor(5 * n) : 4);
          },
        },
      });
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return v;
    });
    n(8), n(13);
    var r = n(11),
      i = n.n(r),
      o = (n(63), n(22)),
      a = n.n(o),
      u = n(0),
      c = n(28),
      s = n(1),
      f = n(10),
      l = n(66),
      d = n(3);
    n(26), n(27);
    var p = function (t) {
        return new Promise(function (e) {
          window.requestAnimationFrame(function () {
            e("function" == typeof t ? t() : t);
          });
        });
      },
      h = n(20);
    function v() {
      var t = document.getElementById("section-filter"),
        e = Object(u.d)(t, ".mask-wrapper .mask"),
        n = Object(u.d)(t, ".sticky"),
        r = Object(u.d)(t, ".sticky-container"),
        o = Object(u.d)(t, ".box-list"),
        v = Object(u.e)(t, ".box"),
        g = Object(u.e)(t, ".img-wrapper"),
        m = Object(u.e)(t, ".trigger"),
        y = Object(u.d)(t, ".mask-wrapper"),
        b = !1,
        x = 0,
        w = !1;
      Object(d.a)(r, {
        start: { percent: 1.5 },
        end: "top",
        handlers: {
          onStateChange: function (t) {
            if ("inView" === t.state)
              return (
                Object(h.d)(Object(u.e)(r, "img")).then(function () {
                  w ||
                    ((w = !0),
                    g[0].classList.add("on"),
                    g[0].classList.remove("on"));
                }),
                "done"
              );
          },
        },
      }),
        g[x].classList.add("active");
      var _ = !0;
      Object(d.a)(r, {
        start: "top",
        end: "top",
        handlers: {
          onStateChange: function (t) {
            if ("before" !== t.state) {
              e.classList.add("loupe");
              var n = setTimeout(
                a()(
                  i.a.mark(function t() {
                    return i.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), p();
                          case 2:
                            o.classList.add("half-trans"),
                              v[x].classList.add("active"),
                              setTimeout(
                                a()(
                                  i.a.mark(function t() {
                                    return i.a.wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (t.next = 2), p();
                                          case 2:
                                            g[x].classList.add("on");
                                          case 3:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                ),
                                400
                              ),
                              clearTimeout(n);
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                ),
                800
              );
              (b = !0), g[0].classList.add("loupe"), (_ = !0);
            }
          },
          before: function (t) {
            t.distance / Object(s.f)(100) < -1 &&
              _ &&
              (o.classList.remove("half-trans"),
              v[x].classList.remove("active"),
              e.classList.remove("loupe"),
              g[x].classList.remove("loupe", "on", "active"),
              g[(x = 0)].classList.add("active"),
              (b = !1),
              (_ = !1));
          },
        },
      }),
        v.forEach(function (t, e) {
          t.onclick = function () {
            if (b) {
              var t = Object(u.d)(m[e], ".open"),
                n = Object(u.d)(m[e], ".close");
              if (e !== x) {
                b = !1;
                var r = x;
                g[r].classList.add("leave"),
                  Object(l.b)(g[e], { bubble: !1 }).then(
                    a()(
                      i.a.mark(function t() {
                        return i.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (r === x) {
                                  t.next = 5;
                                  break;
                                }
                                return (t.next = 3), p();
                              case 3:
                                g[r].classList.remove("active", "leave", "on"),
                                  (b = !0);
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )
                  ),
                  v[e].classList.add("active"),
                  g[e].classList.add("active"),
                  setTimeout(
                    a()(
                      i.a.mark(function t() {
                        return i.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), p();
                              case 2:
                                g[e].classList.add("on");
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    ),
                    400
                  ),
                  t.classList.remove("active"),
                  n.classList.add("active"),
                  v[x].classList.remove("active"),
                  (x = e);
              } else
                (b = !1),
                  Object(l.b)(g[e]).then(function () {
                    b = !0;
                  }),
                  g[e].classList.toggle("on"),
                  t.classList.toggle("active"),
                  n.classList.toggle("active");
            }
          };
        }),
        Object(c.b)(n),
        Object(f.a)({
          start: function () {
            return Object(s.e)(r) - Object(s.f)(50);
          },
          end: function () {
            return Object(s.e)(r);
          },
        }).add({
          targets: y,
          translateY: function () {
            return ["19%", "0%"];
          },
          duration: function () {
            return Object(s.f)(50);
          },
        });
    }
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return f;
    });
    n(8), n(35), n(103), n(13);
    var r = n(0),
      i = (n(40), n(141), n(46), n(152)),
      o = n.n(i),
      a = n(21);
    function u(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }
    function c(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = document.createElement("video");
      return (
        u(n, {
          src: t,
          poster: e,
          preload: "metadata",
          autoplay: "autoplay",
          controls: "controls",
          playsinline: "playsinline",
          "webkit-playsinline": "webkit-playsinline",
        }),
        n
      );
    }
    var s = function (t, e) {
      var n = 0;
      (t.ontimeupdate = function () {
        t.duration < 15 ||
          ((t.currentTime / t.duration) * 100 >= n + 25 &&
            ((n += 25), Object(a.b)(e, "".concat(n, "%"))));
      }),
        (t.onplay = function () {
          Object(a.b)(e, "play");
        }),
        (t.onpause = function () {
          Object(a.b)(e, "pause");
        });
    };
    var f = function () {
      var t = document.getElementById("zn--video-modal");
      window.requestAnimationFrame(function () {
        Object(r.c)(t, document.body);
      }),
        document.querySelectorAll(".g--popup-user").forEach(function (t) {
          var e = (function (t) {
              for (
                var e = t.attributes,
                  n = e.length,
                  r = Object.create(null),
                  i = 0;
                i < n;
                i += 1
              )
                r[e[i].name] = e[i].value;
              return r;
            })(t),
            n = e["data-src"],
            i = e["data-class"],
            a = e["data-trigger"],
            u = e["data-theme"],
            f = e["data-navbar"],
            l = e["data-label"],
            d = e["data-poster"],
            p = e["data-portrait"],
            h = document.querySelectorAll(a),
            v = "string" == typeof i ? i.split(" ") : [];
          p && "false" !== p && v.push("video-portrait"),
            (function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                i = n.label,
                a = n.poster,
                u = n.popupClass,
                f = void 0 === u ? [] : u,
                l = n.theme,
                d = void 0 === l ? "black" : l,
                p = n.onOpen,
                h = void 0 === p ? function () {} : p,
                v = n.onClose,
                g = void 0 === v ? function () {} : v;
              if (t && e) {
                f instanceof Array || (f = [f]);
                var m,
                  y = document.querySelector("#zn--video-modal"),
                  b = y.querySelector(".g--video-wrapper"),
                  x = y.querySelector(".g--popup-close"),
                  w = function () {
                    var t,
                      e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "expand";
                    (t = y.classList)[
                      "".concat("expand" === e ? "add" : "remove")
                    ].apply(t, ["show"].concat(o()(f))),
                      y.classList["".concat("expand" === e ? "remove" : "add")](
                        "disappear"
                      ),
                      y.setAttribute(
                        "data-theme",
                        "".concat("expand" === e ? d : "")
                      );
                  },
                  _ = function () {
                    if (
                      (2 === b.children.length && b.removeChild(b.children[1]),
                      (m = c(t, a)),
                      b.appendChild(m),
                      w("expand"),
                      s(m, i),
                      Object(r.a)(),
                      m.paused)
                    ) {
                      var e = m.play();
                      e &&
                        "function" == typeof e.catch &&
                        e.catch(function (t) {
                          return console.log(t);
                        });
                    }
                    h && h();
                  },
                  O = function t() {
                    w("shrink"),
                      Object(r.b)(),
                      m.pause(),
                      Object(r.f)(m),
                      (m = void 0),
                      g && g(),
                      x.removeEventListener("click", t);
                  };
                e.forEach(function (t) {
                  "click" !== t.getAttribute("data-event") &&
                    (t.setAttribute("data-event", "click"),
                    t.addEventListener("click", function () {
                      _(), x.addEventListener("click", O);
                    }));
                });
              }
            })(n, h, {
              poster: d,
              popupClass: v,
              label: l,
              theme: u || "black",
              navBarClass: f || ".oc-header",
            });
        });
    };
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return p;
    });
    n(43), n(8), n(38), n(219), n(39), n(46), n(13);
    var r = n(29);
    var i = { value: "m-val", attr: "m-attr", medias: [] };
    function o(t) {
      var e = void 0 === t ? { medias: i.medias, valueAttr: i.value } : t,
        n = e.medias,
        o = e.valueAttr,
        a = Object(r.b)(n);
      return a ? o + "-" + a.alias : o;
    }
    var a = o();
    function u(t) {
      var e = t.medias,
        n =
          /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
          (function (t, e) {
            var n = {};
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) &&
                e.indexOf(r) < 0 &&
                (n[r] = t[r]);
            if (
              null != t &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                e.indexOf(r[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                  (n[r[i]] = t[r[i]]);
            }
            return n;
          })(t, ["medias"]);
      e && (i.medias = e),
        n &&
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            e && (i[t] = e);
          }),
        (a = o());
    }
    function c(t) {
      void 0 === t && (t = window.document),
        t
          .querySelectorAll(
            [a, i.value]
              .map(function (t) {
                return "[" + t + "]";
              })
              .join(",")
          )
          .forEach(function (t) {
            return (function (t) {
              var e = t.getAttribute(a) || t.getAttribute(i.value),
                n = i.attr,
                r = t.getAttribute(n) || a;
              t.setAttribute(r, e || "");
            })(t);
          });
    }
    function s(t, e) {
      return void 0 === e && (e = window.document), t && u(t), c(e);
    }
    var f = n(47),
      l = n(6);
    function d() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.value,
        n = void 0 === e ? "r-val" : e,
        r = t.attr,
        i = void 0 === r ? "r-attr" : r;
      s({ value: n, attr: i, medias: f.b });
    }
    function p(t) {
      l.c.addWidthListener(function () {
        return d(t);
      }),
        d(t);
    }
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
        n(40), n(8), n(26), n(59), n(27), n(13), n(186);
        var e = n(109),
          r = n(156),
          i = n(157),
          o = n(169),
          a = n(158),
          u = n(0),
          c = n(10),
          s = n(1),
          f = n(2),
          l = n(162),
          d = n(163),
          p = n(170),
          h = n(171),
          v = (n(252), n(164)),
          g = n(166),
          m = n(167),
          y = n(168);
        Object(e.a)(),
          window.addEventListener("DOMContentLoaded", function () {
            Object(e.b)();
            var n,
              b = Object(l.a)().show;
            (n = Object(f.a)()),
              Object(u.e)(document, "[data-fade-in]")
                .concat(
                  n
                    ? Object(u.e)(document, "[data-fade-in-mo]")
                    : Object(u.e)(document, "[data-fade-in-pc]")
                )
                .forEach(function (e) {
                  var n = t(e).attr("data-trigger-selector"),
                    r = t(e).attr("data-trigger-position-offset-vh");
                  Object(c.b)({
                    position: function () {
                      return (
                        (n
                          ? Object(s.e)(Object(u.d)(document, n))
                          : Object(s.e)(e)) +
                        (r ? Object(s.f)(parseFloat(r)) : Object(s.f)(-85))
                      );
                    },
                    reverse: "prev",
                    prev: function () {
                      return Object(s.f)(40);
                    },
                  }).add({
                    targets: e,
                    addClassName: "fade-in",
                    duration: 400,
                    easing: "linear",
                  });
                }),
              Object(g.a)(),
              Object(a.a)(),
              Object(o.a)(),
              Object(d.a)(),
              Object(r.a)(),
              Object(i.a)(),
              Object(p.a)(),
              Object(h.a)(),
              Object(m.a)(),
              Object(y.a)(),
              Object(v.a)(),
              b();
          });
      }.call(this, n(30));
  },
  function (t, e, n) {
    var r = n(5),
      i = n(87),
      o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i(o));
  },
  function (t, e, n) {
    "use strict";
    var r = n(96),
      i = n(122);
    t.exports = r
      ? {}.toString
      : function () {
          return "[object " + i(this) + "]";
        };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(97).trim,
      o = n(98),
      a = r.parseFloat,
      u = 1 / a(o + "-0") != -1 / 0;
    t.exports = u
      ? function (t) {
          var e = i(String(t)),
            n = a(e);
          return 0 === n && "-" == e.charAt(0) ? -0 : n;
        }
      : a;
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = r.Promise;
  },
  function (t, e, n) {
    var r = n(33);
    t.exports = function (t, e, n) {
      for (var i in e) r(t, i, e[i], n);
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(15),
      i = n(124),
      o = n(24),
      a = n(71),
      u = n(125),
      c = n(126),
      s = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
    (t.exports = function (t, e, n, f, l) {
      var d,
        p,
        h,
        v,
        g,
        m,
        y,
        b = a(e, n, f ? 2 : 1);
      if (l) d = t;
      else {
        if ("function" != typeof (p = u(t)))
          throw TypeError("Target is not iterable");
        if (i(p)) {
          for (h = 0, v = o(t.length); v > h; h++)
            if ((g = f ? b(r((y = t[h]))[0], y[1]) : b(t[h])) && g instanceof s)
              return g;
          return new s(!1);
        }
        d = p.call(t);
      }
      for (m = d.next; !(y = m.call(d)).done; )
        if ("object" == typeof (g = c(d, b, y.value, f)) && g && g instanceof s)
          return g;
      return new s(!1);
    }).stop = function (t) {
      return new s(!0, t);
    };
  },
  function (t, e, n) {
    var r,
      i,
      o,
      a,
      u,
      c,
      s,
      f,
      l = n(5),
      d = n(41).f,
      p = n(36),
      h = n(129).set,
      v = n(131),
      g = l.MutationObserver || l.WebKitMutationObserver,
      m = l.process,
      y = l.Promise,
      b = "process" == p(m),
      x = d(l, "queueMicrotask"),
      w = x && x.value;
    w ||
      ((r = function () {
        var t, e;
        for (b && (t = m.domain) && t.exit(); i; ) {
          (e = i.fn), (i = i.next);
          try {
            e();
          } catch (t) {
            throw (i ? a() : (o = void 0), t);
          }
        }
        (o = void 0), t && t.enter();
      }),
      b
        ? (a = function () {
            m.nextTick(r);
          })
        : g && !v
        ? ((u = !0),
          (c = document.createTextNode("")),
          new g(r).observe(c, { characterData: !0 }),
          (a = function () {
            c.data = u = !u;
          }))
        : y && y.resolve
        ? ((s = y.resolve(void 0)),
          (f = s.then),
          (a = function () {
            f.call(s, r);
          }))
        : (a = function () {
            h.call(l, r);
          })),
      (t.exports =
        w ||
        function (t) {
          var e = { fn: t, next: void 0 };
          o && (o.next = e), i || ((i = e), a()), (o = e);
        });
  },
  function (t, e, n) {
    var r = n(15),
      i = n(16),
      o = n(132);
    t.exports = function (t, e) {
      if ((r(t), i(e) && e.constructor === t)) return e;
      var n = o.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = function (t, e) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    };
  },
  function (t, e, n) {
    var r = n(187);
    t.exports = r;
  },
  function (t, e, n) {
    n(188),
      n(190),
      n(35),
      n(191),
      n(192),
      n(193),
      n(101),
      n(61),
      n(136),
      n(103);
  },
  function (t, e, n) {
    var r = n(14),
      i = n(5),
      o = n(70),
      a = n(134),
      u = n(17).f,
      c = n(53).f,
      s = n(100),
      f = n(74),
      l = n(75),
      d = n(33),
      p = n(12),
      h = n(42).set,
      v = n(123),
      g = n(7)("match"),
      m = i.RegExp,
      y = m.prototype,
      b = /a/g,
      x = /a/g,
      w = new m(b) !== b,
      _ = l.UNSUPPORTED_Y;
    if (
      r &&
      o(
        "RegExp",
        !w ||
          _ ||
          p(function () {
            return (x[g] = !1), m(b) != b || m(x) == x || "/a/i" != m(b, "i");
          })
      )
    ) {
      for (
        var O = function (t, e) {
            var n,
              r = this instanceof O,
              i = s(t),
              o = void 0 === e;
            if (!r && i && t.constructor === O && o) return t;
            w
              ? i && !o && (t = t.source)
              : t instanceof O && (o && (e = f.call(t)), (t = t.source)),
              _ &&
                (n = !!e && e.indexOf("y") > -1) &&
                (e = e.replace(/y/g, ""));
            var u = a(w ? new m(t, e) : m(t, e), r ? this : y, O);
            return _ && n && h(u, { sticky: n }), u;
          },
          A = function (t) {
            (t in O) ||
              u(O, t, {
                configurable: !0,
                get: function () {
                  return m[t];
                },
                set: function (e) {
                  m[t] = e;
                },
              });
          },
          E = c(m),
          j = 0;
        E.length > j;

      )
        A(E[j++]);
      (y.constructor = O), (O.prototype = y), d(i, "RegExp", O);
    }
    v("RegExp");
  },
  function (t, e, n) {
    var r = n(16);
    t.exports = function (t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(33),
      i = n(15),
      o = n(12),
      a = n(74),
      u = RegExp.prototype,
      c = u.toString,
      s = o(function () {
        return "/a/b" != c.call({ source: "a", flags: "b" });
      }),
      f = "toString" != c.name;
    (s || f) &&
      r(
        RegExp.prototype,
        "toString",
        function () {
          var t = i(this),
            e = String(t.source),
            n = t.flags;
          return (
            "/" +
            e +
            "/" +
            String(
              void 0 === n && t instanceof RegExp && !("flags" in u)
                ? a.call(t)
                : n
            )
          );
        },
        { unsafe: !0 }
      );
  },
  function (t, e, n) {
    var r = n(14),
      i = n(17),
      o = n(74),
      a = n(75).UNSUPPORTED_Y;
    r &&
      ("g" != /./g.flags || a) &&
      i.f(RegExp.prototype, "flags", { configurable: !0, get: o });
  },
  function (t, e, n) {
    var r = n(14),
      i = n(75).UNSUPPORTED_Y,
      o = n(17).f,
      a = n(42).get,
      u = RegExp.prototype;
    r &&
      i &&
      o(RegExp.prototype, "sticky", {
        configurable: !0,
        get: function () {
          if (this !== u) {
            if (this instanceof RegExp) return !!a(this).sticky;
            throw TypeError("Incompatible receiver, RegExp required");
          }
        },
      });
  },
  function (t, e, n) {
    "use strict";
    n(35);
    var r,
      i,
      o = n(4),
      a = n(16),
      u =
        ((r = !1),
        ((i = /[ac]/).exec = function () {
          return (r = !0), /./.exec.apply(this, arguments);
        }),
        !0 === i.test("abc") && r),
      c = /./.test;
    o(
      { target: "RegExp", proto: !0, forced: !u },
      {
        test: function (t) {
          if ("function" != typeof this.exec) return c.call(this, t);
          var e = this.exec(t);
          if (null !== e && !a(e))
            throw new Error(
              "RegExp exec method returned something other than an Object or null"
            );
          return !!e;
        },
      }
    );
  },
  function (t, e) {
    t.exports =
      Object.is ||
      function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      };
  },
  function (t, e, n) {
    "use strict";
    var r = n(71),
      i = n(25),
      o = n(126),
      a = n(124),
      u = n(24),
      c = n(56),
      s = n(125);
    t.exports = function (t) {
      var e,
        n,
        f,
        l,
        d,
        p,
        h = i(t),
        v = "function" == typeof this ? this : Array,
        g = arguments.length,
        m = g > 1 ? arguments[1] : void 0,
        y = void 0 !== m,
        b = s(h),
        x = 0;
      if (
        (y && (m = r(m, g > 2 ? arguments[2] : void 0, 2)),
        null == b || (v == Array && a(b)))
      )
        for (n = new v((e = u(h.length))); e > x; x++)
          (p = y ? m(h[x], x) : h[x]), c(n, x, p);
      else
        for (d = (l = b.call(h)).next, n = new v(); !(f = d.call(l)).done; x++)
          (p = y ? o(l, m, [f.value, x], !0) : f.value), c(n, x, p);
      return (n.length = x), n;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(139).IteratorPrototype,
      i = n(79),
      o = n(49),
      a = n(73),
      u = n(60),
      c = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var s = e + " Iterator";
      return (
        (t.prototype = i(r, { next: o(1, n) })), a(t, s, !1, !0), (u[s] = c), t
      );
    };
  },
  function (t, e, n) {
    var r = n(12);
    t.exports = !r(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    var r = n(14),
      i = n(17),
      o = n(15),
      a = n(80);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var n, r = a(e), u = r.length, c = 0; u > c; )
            i.f(t, (n = r[c++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(142);
    t.exports = function (t) {
      if (Array.isArray(t)) return r(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
        return Array.from(t);
    };
  },
  function (t, e, n) {
    var r = n(142);
    t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === n && t.constructor && (n = t.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(t)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? r(t, e)
            : void 0
        );
      }
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    };
  },
  function (t, e, n) {
    var r = n(31),
      i = n(53).f,
      o = {}.toString,
      a =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return a && "[object Window]" == o.call(t)
        ? (function (t) {
            try {
              return i(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
        : i(r(t));
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(14),
      i = n(12),
      o = n(80),
      a = n(92),
      u = n(84),
      c = n(25),
      s = n(50),
      f = Object.assign,
      l = Object.defineProperty;
    t.exports =
      !f ||
      i(function () {
        if (
          r &&
          1 !==
            f(
              { b: 1 },
              f(
                l({}, "a", {
                  enumerable: !0,
                  get: function () {
                    l(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          n = Symbol();
        return (
          (t[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != f({}, t)[n] || "abcdefghijklmnopqrst" != o(f({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var n = c(t), i = arguments.length, f = 1, l = a.f, d = u.f;
              i > f;

            )
              for (
                var p,
                  h = s(arguments[f++]),
                  v = l ? o(h).concat(l(h)) : o(h),
                  g = v.length,
                  m = 0;
                g > m;

              )
                (p = v[m++]), (r && !d.call(h, p)) || (n[p] = h[p]);
            return n;
          }
        : f;
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(206),
      o = n(37);
    r(
      { target: "String", proto: !0, forced: !n(207)("includes") },
      {
        includes: function (t) {
          return !!~String(o(this)).indexOf(
            i(t),
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  function (t, e, n) {
    var r = n(100);
    t.exports = function (t) {
      if (r(t))
        throw TypeError("The method doesn't accept regular expressions");
      return t;
    };
  },
  function (t, e, n) {
    var r = n(7)("match");
    t.exports = function (t) {
      var e = /./;
      try {
        "/./"[t](e);
      } catch (n) {
        try {
          return (e[r] = !1), "/./"[t](e);
        } catch (t) {}
      }
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(4),
      i = n(209);
    r({ global: !0, forced: parseInt != i }, { parseInt: i });
  },
  function (t, e, n) {
    var r = n(5),
      i = n(97).trim,
      o = n(98),
      a = r.parseInt,
      u = /^[+-]?0[Xx]/,
      c = 8 !== a(o + "08") || 22 !== a(o + "0x16");
    t.exports = c
      ? function (t, e) {
          var n = i(String(t));
          return a(n, e >>> 0 || (u.test(n) ? 16 : 10));
        }
      : a;
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
        r,
        i = {},
        o = Object.keys(t);
      for (r = 0; r < o.length; r++)
        (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i;
    };
  },
  function (t, e, n) {
    n(4)({ target: "Number", stat: !0 }, { EPSILON: Math.pow(2, -52) });
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(14),
      o = n(5),
      a = n(19),
      u = n(16),
      c = n(17).f,
      s = n(115),
      f = o.Symbol;
    if (
      i &&
      "function" == typeof f &&
      (!("description" in f.prototype) || void 0 !== f().description)
    ) {
      var l = {},
        d = function () {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof d ? new f(t) : void 0 === t ? f() : f(t);
          return "" === t && (l[e] = !0), e;
        };
      s(d, f);
      var p = (d.prototype = f.prototype);
      p.constructor = d;
      var h = p.toString,
        v = "Symbol(test)" == String(f("test")),
        g = /^Symbol\((.*)\)[^)]+$/;
      c(p, "description", {
        configurable: !0,
        get: function () {
          var t = u(this) ? this.valueOf() : this,
            e = h.call(t);
          if (a(l, t)) return "";
          var n = v ? e.slice(7, -1) : e.replace(g, "$1");
          return "" === n ? void 0 : n;
        },
      }),
        r({ global: !0, forced: !0 }, { Symbol: d });
    }
  },
  function (t, e, n) {
    n(144)("iterator");
  },
  function (t, e, n) {
    var r = n(5),
      i = n(133),
      o = n(148),
      a = n(32),
      u = n(7),
      c = u("iterator"),
      s = u("toStringTag"),
      f = o.values;
    for (var l in i) {
      var d = r[l],
        p = d && d.prototype;
      if (p) {
        if (p[c] !== f)
          try {
            a(p, c, f);
          } catch (t) {
            p[c] = f;
          }
        if ((p[s] || a(p, s, l), i[l]))
          for (var h in o)
            if (p[h] !== o[h])
              try {
                a(p, h, o[h]);
              } catch (t) {
                p[h] = o[h];
              }
      }
    }
  },
  function (t, e, n) {
    var r = n(58),
      i = n(25),
      o = n(50),
      a = n(24),
      u = function (t) {
        return function (e, n, u, c) {
          r(n);
          var s = i(e),
            f = o(s),
            l = a(s.length),
            d = t ? l - 1 : 0,
            p = t ? -1 : 1;
          if (u < 2)
            for (;;) {
              if (d in f) {
                (c = f[d]), (d += p);
                break;
              }
              if (((d += p), t ? d < 0 : l <= d))
                throw TypeError("Reduce of empty array with no initial value");
            }
          for (; t ? d >= 0 : l > d; d += p) d in f && (c = n(c, f[d], d, s));
          return c;
        };
      };
    t.exports = { left: u(!1), right: u(!0) };
  },
  function (t, e) {
    !(function () {
      "use strict";
      if ("object" == typeof window)
        if (
          "IntersectionObserver" in window &&
          "IntersectionObserverEntry" in window &&
          "intersectionRatio" in window.IntersectionObserverEntry.prototype
        )
          "isIntersecting" in window.IntersectionObserverEntry.prototype ||
            Object.defineProperty(
              window.IntersectionObserverEntry.prototype,
              "isIntersecting",
              {
                get: function () {
                  return this.intersectionRatio > 0;
                },
              }
            );
        else {
          var t = window.document,
            e = [],
            n = null,
            r = null;
          (o.prototype.THROTTLE_TIMEOUT = 100),
            (o.prototype.POLL_INTERVAL = null),
            (o.prototype.USE_MUTATION_OBSERVER = !0),
            (o._setupCrossOriginUpdater = function () {
              return (
                n ||
                  (n = function (t, n) {
                    (r =
                      t && n
                        ? f(t, n)
                        : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0,
                          }),
                      e.forEach(function (t) {
                        t._checkForIntersections();
                      });
                  }),
                n
              );
            }),
            (o._resetCrossOriginUpdater = function () {
              (n = null), (r = null);
            }),
            (o.prototype.observe = function (t) {
              if (
                !this._observationTargets.some(function (e) {
                  return e.element == t;
                })
              ) {
                if (!t || 1 != t.nodeType)
                  throw new Error("target must be an Element");
                this._registerInstance(),
                  this._observationTargets.push({ element: t, entry: null }),
                  this._monitorIntersections(t.ownerDocument),
                  this._checkForIntersections();
              }
            }),
            (o.prototype.unobserve = function (t) {
              (this._observationTargets = this._observationTargets.filter(
                function (e) {
                  return e.element != t;
                }
              )),
                this._unmonitorIntersections(t.ownerDocument),
                0 == this._observationTargets.length &&
                  this._unregisterInstance();
            }),
            (o.prototype.disconnect = function () {
              (this._observationTargets = []),
                this._unmonitorAllIntersections(),
                this._unregisterInstance();
            }),
            (o.prototype.takeRecords = function () {
              var t = this._queuedEntries.slice();
              return (this._queuedEntries = []), t;
            }),
            (o.prototype._initThresholds = function (t) {
              var e = t || [0];
              return (
                Array.isArray(e) || (e = [e]),
                e.sort().filter(function (t, e, n) {
                  if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                    throw new Error(
                      "threshold must be a number between 0 and 1 inclusively"
                    );
                  return t !== n[e - 1];
                })
              );
            }),
            (o.prototype._parseRootMargin = function (t) {
              var e = (t || "0px").split(/\s+/).map(function (t) {
                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                if (!e)
                  throw new Error(
                    "rootMargin must be specified in pixels or percent"
                  );
                return { value: parseFloat(e[1]), unit: e[2] };
              });
              return (
                (e[1] = e[1] || e[0]),
                (e[2] = e[2] || e[0]),
                (e[3] = e[3] || e[1]),
                e
              );
            }),
            (o.prototype._monitorIntersections = function (e) {
              var n = e.defaultView;
              if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                var r = this._checkForIntersections,
                  i = null,
                  o = null;
                if (
                  (this.POLL_INTERVAL
                    ? (i = n.setInterval(r, this.POLL_INTERVAL))
                    : (a(n, "resize", r, !0),
                      a(e, "scroll", r, !0),
                      this.USE_MUTATION_OBSERVER &&
                        "MutationObserver" in n &&
                        (o = new n.MutationObserver(r)).observe(e, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0,
                        })),
                  this._monitoringDocuments.push(e),
                  this._monitoringUnsubscribes.push(function () {
                    var t = e.defaultView;
                    t && (i && t.clearInterval(i), u(t, "resize", r, !0)),
                      u(e, "scroll", r, !0),
                      o && o.disconnect();
                  }),
                  e != ((this.root && this.root.ownerDocument) || t))
                ) {
                  var c = p(e);
                  c && this._monitorIntersections(c.ownerDocument);
                }
              }
            }),
            (o.prototype._unmonitorIntersections = function (e) {
              var n = this._monitoringDocuments.indexOf(e);
              if (-1 != n) {
                var r = (this.root && this.root.ownerDocument) || t;
                if (
                  !this._observationTargets.some(function (t) {
                    var n = t.element.ownerDocument;
                    if (n == e) return !0;
                    for (; n && n != r; ) {
                      var i = p(n);
                      if ((n = i && i.ownerDocument) == e) return !0;
                    }
                    return !1;
                  })
                ) {
                  var i = this._monitoringUnsubscribes[n];
                  if (
                    (this._monitoringDocuments.splice(n, 1),
                    this._monitoringUnsubscribes.splice(n, 1),
                    i(),
                    e != r)
                  ) {
                    var o = p(e);
                    o && this._unmonitorIntersections(o.ownerDocument);
                  }
                }
              }
            }),
            (o.prototype._unmonitorAllIntersections = function () {
              var t = this._monitoringUnsubscribes.slice(0);
              (this._monitoringDocuments.length = 0),
                (this._monitoringUnsubscribes.length = 0);
              for (var e = 0; e < t.length; e++) t[e]();
            }),
            (o.prototype._checkForIntersections = function () {
              if (this.root || !n || r) {
                var t = this._rootIsInDom(),
                  e = t
                    ? this._getRootRect()
                    : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0,
                      };
                this._observationTargets.forEach(function (r) {
                  var o = r.element,
                    a = c(o),
                    u = this._rootContainsTarget(o),
                    s = r.entry,
                    f =
                      t && u && this._computeTargetAndRootIntersection(o, a, e),
                    l = (r.entry = new i({
                      time:
                        window.performance &&
                        performance.now &&
                        performance.now(),
                      target: o,
                      boundingClientRect: a,
                      rootBounds: n && !this.root ? null : e,
                      intersectionRect: f,
                    }));
                  s
                    ? t && u
                      ? this._hasCrossedThreshold(s, l) &&
                        this._queuedEntries.push(l)
                      : s && s.isIntersecting && this._queuedEntries.push(l)
                    : this._queuedEntries.push(l);
                }, this),
                  this._queuedEntries.length &&
                    this._callback(this.takeRecords(), this);
              }
            }),
            (o.prototype._computeTargetAndRootIntersection = function (
              e,
              i,
              o
            ) {
              if ("none" != window.getComputedStyle(e).display) {
                for (
                  var a, u, s, l, p, h, v, g, m = i, y = d(e), b = !1;
                  !b && y;

                ) {
                  var x = null,
                    w = 1 == y.nodeType ? window.getComputedStyle(y) : {};
                  if ("none" == w.display) return null;
                  if (y == this.root || 9 == y.nodeType)
                    if (((b = !0), y == this.root || y == t))
                      n && !this.root
                        ? !r || (0 == r.width && 0 == r.height)
                          ? ((y = null), (x = null), (m = null))
                          : (x = r)
                        : (x = o);
                    else {
                      var _ = d(y),
                        O = _ && c(_),
                        A =
                          _ && this._computeTargetAndRootIntersection(_, O, o);
                      O && A
                        ? ((y = _), (x = f(O, A)))
                        : ((y = null), (m = null));
                    }
                  else {
                    var E = y.ownerDocument;
                    y != E.body &&
                      y != E.documentElement &&
                      "visible" != w.overflow &&
                      (x = c(y));
                  }
                  if (
                    (x &&
                      ((a = x),
                      (u = m),
                      (s = void 0),
                      (l = void 0),
                      (p = void 0),
                      (h = void 0),
                      (v = void 0),
                      (g = void 0),
                      (s = Math.max(a.top, u.top)),
                      (l = Math.min(a.bottom, u.bottom)),
                      (p = Math.max(a.left, u.left)),
                      (h = Math.min(a.right, u.right)),
                      (g = l - s),
                      (m =
                        ((v = h - p) >= 0 &&
                          g >= 0 && {
                            top: s,
                            bottom: l,
                            left: p,
                            right: h,
                            width: v,
                            height: g,
                          }) ||
                        null)),
                    !m)
                  )
                    break;
                  y = y && d(y);
                }
                return m;
              }
            }),
            (o.prototype._getRootRect = function () {
              var e;
              if (this.root) e = c(this.root);
              else {
                var n = t.documentElement,
                  r = t.body;
                e = {
                  top: 0,
                  left: 0,
                  right: n.clientWidth || r.clientWidth,
                  width: n.clientWidth || r.clientWidth,
                  bottom: n.clientHeight || r.clientHeight,
                  height: n.clientHeight || r.clientHeight,
                };
              }
              return this._expandRectByRootMargin(e);
            }),
            (o.prototype._expandRectByRootMargin = function (t) {
              var e = this._rootMarginValues.map(function (e, n) {
                  return "px" == e.unit
                    ? e.value
                    : (e.value * (n % 2 ? t.width : t.height)) / 100;
                }),
                n = {
                  top: t.top - e[0],
                  right: t.right + e[1],
                  bottom: t.bottom + e[2],
                  left: t.left - e[3],
                };
              return (
                (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
              );
            }),
            (o.prototype._hasCrossedThreshold = function (t, e) {
              var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
              if (n !== r)
                for (var i = 0; i < this.thresholds.length; i++) {
                  var o = this.thresholds[i];
                  if (o == n || o == r || o < n != o < r) return !0;
                }
            }),
            (o.prototype._rootIsInDom = function () {
              return !this.root || l(t, this.root);
            }),
            (o.prototype._rootContainsTarget = function (e) {
              return (
                l(this.root || t, e) &&
                (!this.root || this.root.ownerDocument == e.ownerDocument)
              );
            }),
            (o.prototype._registerInstance = function () {
              e.indexOf(this) < 0 && e.push(this);
            }),
            (o.prototype._unregisterInstance = function () {
              var t = e.indexOf(this);
              -1 != t && e.splice(t, 1);
            }),
            (window.IntersectionObserver = o),
            (window.IntersectionObserverEntry = i);
        }
      function i(t) {
        (this.time = t.time),
          (this.target = t.target),
          (this.rootBounds = s(t.rootBounds)),
          (this.boundingClientRect = s(t.boundingClientRect)),
          (this.intersectionRect = s(
            t.intersectionRect || {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0,
            }
          )),
          (this.isIntersecting = !!t.intersectionRect);
        var e = this.boundingClientRect,
          n = e.width * e.height,
          r = this.intersectionRect,
          i = r.width * r.height;
        this.intersectionRatio = n
          ? Number((i / n).toFixed(4))
          : this.isIntersecting
          ? 1
          : 0;
      }
      function o(t, e) {
        var n,
          r,
          i,
          o = e || {};
        if ("function" != typeof t)
          throw new Error("callback must be a function");
        if (o.root && 1 != o.root.nodeType)
          throw new Error("root must be an Element");
        (this._checkForIntersections =
          ((n = this._checkForIntersections.bind(this)),
          (r = this.THROTTLE_TIMEOUT),
          (i = null),
          function () {
            i ||
              (i = setTimeout(function () {
                n(), (i = null);
              }, r));
          })),
          (this._callback = t),
          (this._observationTargets = []),
          (this._queuedEntries = []),
          (this._rootMarginValues = this._parseRootMargin(o.rootMargin)),
          (this.thresholds = this._initThresholds(o.threshold)),
          (this.root = o.root || null),
          (this.rootMargin = this._rootMarginValues
            .map(function (t) {
              return t.value + t.unit;
            })
            .join(" ")),
          (this._monitoringDocuments = []),
          (this._monitoringUnsubscribes = []);
      }
      function a(t, e, n, r) {
        "function" == typeof t.addEventListener
          ? t.addEventListener(e, n, r || !1)
          : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n);
      }
      function u(t, e, n, r) {
        "function" == typeof t.removeEventListener
          ? t.removeEventListener(e, n, r || !1)
          : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n);
      }
      function c(t) {
        var e;
        try {
          e = t.getBoundingClientRect();
        } catch (t) {}
        return e
          ? ((e.width && e.height) ||
              (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top,
              }),
            e)
          : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
      }
      function s(t) {
        return !t || "x" in t
          ? t
          : {
              top: t.top,
              y: t.top,
              bottom: t.bottom,
              left: t.left,
              x: t.left,
              right: t.right,
              width: t.width,
              height: t.height,
            };
      }
      function f(t, e) {
        var n = e.top - t.top,
          r = e.left - t.left;
        return {
          top: n,
          left: r,
          height: e.height,
          width: e.width,
          bottom: n + e.height,
          right: r + e.width,
        };
      }
      function l(t, e) {
        for (var n = e; n; ) {
          if (n == t) return !0;
          n = d(n);
        }
        return !1;
      }
      function d(e) {
        var n = e.parentNode;
        return 9 == e.nodeType && e != t
          ? p(e)
          : n && 11 == n.nodeType && n.host
          ? n.host
          : n && n.assignedSlot
          ? n.assignedSlot.parentNode
          : n;
      }
      function p(t) {
        try {
          return (t.defaultView && t.defaultView.frameElement) || null;
        } catch (t) {
          return null;
        }
      }
    })();
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "Exception", function () {
        return s;
      }),
      n.d(e, "LazyLoad", function () {
        return l;
      });
    n(43), n(8), n(38), n(105), n(218), n(26), n(27), n(13);
    var r = n(111),
      i = n.n(r),
      o = n(29);
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var a = function (t, e) {
      return (a =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
    };
    var u = function () {
      return (u =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }).apply(this, arguments);
    };
    function c(t) {
      return (t && "data-" + t) || "";
    }
    var s = (function (t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return (r.element = n), r;
      }
      return (
        (function (t, e) {
          function n() {
            this.constructor = t;
          }
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        })(e, t),
        e
      );
    })(Error);
    function f(t, e) {
      var n = t.src,
        r = t.poster,
        i = t.srcset,
        o = t.bg,
        a = t.delay,
        c = t.classes,
        s = void 0 === c ? {} : c,
        f = (function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          }
          return n;
        })(t, ["src", "poster", "srcset", "bg", "delay", "classes"]);
      if (e) {
        var l = e.alias,
          d = function (t) {
            return t + "-" + l;
          };
        (n = d(n)), (r = d(r)), (o = d(o));
      }
      return u(u({}, f), {
        data_src: n,
        data_srcset: i,
        data_poster: r,
        data_bg: o,
        load_delay: a,
        class_loading: s.loading,
        class_loaded: s.loaded,
        class_applied: s.applied,
        class_error: s.error,
      });
    }
    var l = (function () {
      function t(t) {
        var e = this;
        (this.options = t),
          (this.destroyed = !1),
          (this.update = function (t) {
            return e.lazyload.update(t);
          }),
          (this.lazyload = this.getLazy());
      }
      return (
        (t.load = function (t, e, n) {
          var r = this;
          return new Promise(function (o, a) {
            if (
              (r.preprocessElementSources(t, e, n),
              ((function (t) {
                return t instanceof HTMLImageElement;
              })(t) &&
                !t.getAttribute(c(e.data_src)) &&
                !t.getAttribute(c(e.data_srcset))) ||
                ((function (t) {
                  return t instanceof HTMLVideoElement;
                })(t) &&
                  !t.getAttribute(c(e.data_src))))
            ) {
              var f = new s(
                e.data_src + " or " + e.data_srcset + " is necessary",
                t
              );
              return a(f);
            }
            i.a.load(
              t,
              u(u({}, e), {
                callback_loaded: function () {
                  o(t);
                },
                callback_error: function () {
                  a(
                    new s(
                      "vanilla-lazyload error: see console output for details",
                      t
                    )
                  );
                },
              })
            );
          });
        }),
        Object.defineProperty(t.prototype, "media", {
          get: function () {
            return this.mediaMatched;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "loadingCount", {
          get: function () {
            return this.lazyload.loadingCount;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "toLoadCount", {
          get: function () {
            return this.lazyload.toLoadCount;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.load = function (e) {
          var n = this,
            r = f(this.options, this.matchMedia()),
            i = [];
          return (
            e.forEach(function (e) {
              return i.push(t.load(e, r, n.options.srcPreprocessor));
            }),
            i
          );
        }),
        (t.prototype.loadAll = function () {
          this.lazyload.loadAll();
        }),
        (t.prototype.refresh = function (t) {
          var e = this.matchMedia(t);
          (this.destroyed || e !== this.media) &&
            (this.lazyload.destroy(),
            (this.lazyload = this.getLazy(e)),
            (this.destroyed = !1));
        }),
        (t.prototype.destroy = function () {
          this.lazyload.destroy(), (this.destroyed = !0);
        }),
        (t.prototype.matchMedia = function (t) {
          return Object(o.b)(this.options.medias, t);
        }),
        (t.prototype.getLazy = function (e) {
          void 0 === e && (e = this.matchMedia()), (this.mediaMatched = e);
          var n = this.options,
            r = n.srcPreprocessor,
            o = n.elements,
            a = n.root,
            c = void 0 === a ? window.document : a,
            s = f(this.options, e),
            l =
              "[data-" +
              s.data_src +
              "],[data-" +
              s.data_srcset +
              "],[data-" +
              s.data_poster +
              "],[data-" +
              s.data_bg +
              "]";
          return new i.a(
            u(u({}, s), {
              callback_error: function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                return console.error(t);
              },
              callback_enter:
                r &&
                function (e) {
                  t.preprocessElementSources(e, s, r);
                },
            }),
            void 0 === o || "string" == typeof o
              ? c.querySelectorAll(o || l)
              : o
          );
        }),
        (t.preprocessElementSources = function (t, e, n) {
          ["data_src", "data_srcset", "data_poster", "data_bg"].forEach(
            function (r) {
              var i = e[r];
              if (i) {
                var o = "data-" + i,
                  a = t.getAttribute(o) || void 0,
                  u = n && n(a, { name: o, element: t, type: r });
                "string" == typeof u && u !== a && t.setAttribute(o, u);
              }
            }
          );
        }),
        t
      );
    })();
    !(function () {
      function t(t, e) {
        e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
      }
      "function" != typeof window.CustomEvent &&
        ((t.prototype = window.Event.prototype), (window.CustomEvent = t));
    })();
  },
  function (t, e, n) {
    n(4)({ target: "Object", stat: !0 }, { setPrototypeOf: n(99) });
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(50),
      o = n(31),
      a = n(72),
      u = [].join,
      c = i != Object,
      s = a("join", ",");
    r(
      { target: "Array", proto: !0, forced: c || !s },
      {
        join: function (t) {
          return u.call(o(this), void 0 === t ? "," : t);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(25),
      i = n(69),
      o = n(24);
    t.exports = function (t) {
      for (
        var e = r(this),
          n = o(e.length),
          a = arguments.length,
          u = i(a > 1 ? arguments[1] : void 0, n),
          c = a > 2 ? arguments[2] : void 0,
          s = void 0 === c ? n : i(c, n);
        s > u;

      )
        e[u++] = t;
      return e;
    };
  },
  function (t, e) {
    t.exports = function () {
      var t = new Float32Array(16);
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = new Float32Array(16);
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[3]),
        (e[4] = t[4]),
        (e[5] = t[5]),
        (e[6] = t[6]),
        (e[7] = t[7]),
        (e[8] = t[8]),
        (e[9] = t[9]),
        (e[10] = t[10]),
        (e[11] = t[11]),
        (e[12] = t[12]),
        (e[13] = t[13]),
        (e[14] = t[14]),
        (e[15] = t[15]),
        e
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return (
        (t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (t === e) {
        var n = e[1],
          r = e[2],
          i = e[3],
          o = e[6],
          a = e[7],
          u = e[11];
        (t[1] = e[4]),
          (t[2] = e[8]),
          (t[3] = e[12]),
          (t[4] = n),
          (t[6] = e[9]),
          (t[7] = e[13]),
          (t[8] = r),
          (t[9] = o),
          (t[11] = e[14]),
          (t[12] = i),
          (t[13] = a),
          (t[14] = u);
      } else
        (t[0] = e[0]),
          (t[1] = e[4]),
          (t[2] = e[8]),
          (t[3] = e[12]),
          (t[4] = e[1]),
          (t[5] = e[5]),
          (t[6] = e[9]),
          (t[7] = e[13]),
          (t[8] = e[2]),
          (t[9] = e[6]),
          (t[10] = e[10]),
          (t[11] = e[14]),
          (t[12] = e[3]),
          (t[13] = e[7]),
          (t[14] = e[11]),
          (t[15] = e[15]);
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = e[0],
        r = e[1],
        i = e[2],
        o = e[3],
        a = e[4],
        u = e[5],
        c = e[6],
        s = e[7],
        f = e[8],
        l = e[9],
        d = e[10],
        p = e[11],
        h = e[12],
        v = e[13],
        g = e[14],
        m = e[15],
        y = n * u - r * a,
        b = n * c - i * a,
        x = n * s - o * a,
        w = r * c - i * u,
        _ = r * s - o * u,
        O = i * s - o * c,
        A = f * v - l * h,
        E = f * g - d * h,
        j = f * m - p * h,
        S = l * g - d * v,
        k = l * m - p * v,
        T = d * m - p * g,
        C = y * T - b * k + x * S + w * j - _ * E + O * A;
      if (!C) return null;
      return (
        (C = 1 / C),
        (t[0] = (u * T - c * k + s * S) * C),
        (t[1] = (i * k - r * T - o * S) * C),
        (t[2] = (v * O - g * _ + m * w) * C),
        (t[3] = (d * _ - l * O - p * w) * C),
        (t[4] = (c * j - a * T - s * E) * C),
        (t[5] = (n * T - i * j + o * E) * C),
        (t[6] = (g * x - h * O - m * b) * C),
        (t[7] = (f * O - d * x + p * b) * C),
        (t[8] = (a * k - u * j + s * A) * C),
        (t[9] = (r * j - n * k - o * A) * C),
        (t[10] = (h * _ - v * x + m * y) * C),
        (t[11] = (l * x - f * _ - p * y) * C),
        (t[12] = (u * E - a * S - c * A) * C),
        (t[13] = (n * S - r * E + i * A) * C),
        (t[14] = (v * b - h * w - g * y) * C),
        (t[15] = (f * w - l * b + d * y) * C),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = e[0],
        r = e[1],
        i = e[2],
        o = e[3],
        a = e[4],
        u = e[5],
        c = e[6],
        s = e[7],
        f = e[8],
        l = e[9],
        d = e[10],
        p = e[11],
        h = e[12],
        v = e[13],
        g = e[14],
        m = e[15];
      return (
        (t[0] =
          u * (d * m - p * g) - l * (c * m - s * g) + v * (c * p - s * d)),
        (t[1] = -(
          r * (d * m - p * g) -
          l * (i * m - o * g) +
          v * (i * p - o * d)
        )),
        (t[2] =
          r * (c * m - s * g) - u * (i * m - o * g) + v * (i * s - o * c)),
        (t[3] = -(
          r * (c * p - s * d) -
          u * (i * p - o * d) +
          l * (i * s - o * c)
        )),
        (t[4] = -(
          a * (d * m - p * g) -
          f * (c * m - s * g) +
          h * (c * p - s * d)
        )),
        (t[5] =
          n * (d * m - p * g) - f * (i * m - o * g) + h * (i * p - o * d)),
        (t[6] = -(
          n * (c * m - s * g) -
          a * (i * m - o * g) +
          h * (i * s - o * c)
        )),
        (t[7] =
          n * (c * p - s * d) - a * (i * p - o * d) + f * (i * s - o * c)),
        (t[8] =
          a * (l * m - p * v) - f * (u * m - s * v) + h * (u * p - s * l)),
        (t[9] = -(
          n * (l * m - p * v) -
          f * (r * m - o * v) +
          h * (r * p - o * l)
        )),
        (t[10] =
          n * (u * m - s * v) - a * (r * m - o * v) + h * (r * s - o * u)),
        (t[11] = -(
          n * (u * p - s * l) -
          a * (r * p - o * l) +
          f * (r * s - o * u)
        )),
        (t[12] = -(
          a * (l * g - d * v) -
          f * (u * g - c * v) +
          h * (u * d - c * l)
        )),
        (t[13] =
          n * (l * g - d * v) - f * (r * g - i * v) + h * (r * d - i * l)),
        (t[14] = -(
          n * (u * g - c * v) -
          a * (r * g - i * v) +
          h * (r * c - i * u)
        )),
        (t[15] =
          n * (u * d - c * l) - a * (r * d - i * l) + f * (r * c - i * u)),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = t[0],
        n = t[1],
        r = t[2],
        i = t[3],
        o = t[4],
        a = t[5],
        u = t[6],
        c = t[7],
        s = t[8],
        f = t[9],
        l = t[10],
        d = t[11],
        p = t[12],
        h = t[13],
        v = t[14],
        g = t[15];
      return (
        (e * a - n * o) * (l * g - d * v) -
        (e * u - r * o) * (f * g - d * h) +
        (e * c - i * o) * (f * v - l * h) +
        (n * u - r * a) * (s * g - d * p) -
        (n * c - i * a) * (s * v - l * p) +
        (r * c - i * u) * (s * h - f * p)
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      var r = e[0],
        i = e[1],
        o = e[2],
        a = e[3],
        u = e[4],
        c = e[5],
        s = e[6],
        f = e[7],
        l = e[8],
        d = e[9],
        p = e[10],
        h = e[11],
        v = e[12],
        g = e[13],
        m = e[14],
        y = e[15],
        b = n[0],
        x = n[1],
        w = n[2],
        _ = n[3];
      return (
        (t[0] = b * r + x * u + w * l + _ * v),
        (t[1] = b * i + x * c + w * d + _ * g),
        (t[2] = b * o + x * s + w * p + _ * m),
        (t[3] = b * a + x * f + w * h + _ * y),
        (b = n[4]),
        (x = n[5]),
        (w = n[6]),
        (_ = n[7]),
        (t[4] = b * r + x * u + w * l + _ * v),
        (t[5] = b * i + x * c + w * d + _ * g),
        (t[6] = b * o + x * s + w * p + _ * m),
        (t[7] = b * a + x * f + w * h + _ * y),
        (b = n[8]),
        (x = n[9]),
        (w = n[10]),
        (_ = n[11]),
        (t[8] = b * r + x * u + w * l + _ * v),
        (t[9] = b * i + x * c + w * d + _ * g),
        (t[10] = b * o + x * s + w * p + _ * m),
        (t[11] = b * a + x * f + w * h + _ * y),
        (b = n[12]),
        (x = n[13]),
        (w = n[14]),
        (_ = n[15]),
        (t[12] = b * r + x * u + w * l + _ * v),
        (t[13] = b * i + x * c + w * d + _ * g),
        (t[14] = b * o + x * s + w * p + _ * m),
        (t[15] = b * a + x * f + w * h + _ * y),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      var r,
        i,
        o,
        a,
        u,
        c,
        s,
        f,
        l,
        d,
        p,
        h,
        v = n[0],
        g = n[1],
        m = n[2];
      e === t
        ? ((t[12] = e[0] * v + e[4] * g + e[8] * m + e[12]),
          (t[13] = e[1] * v + e[5] * g + e[9] * m + e[13]),
          (t[14] = e[2] * v + e[6] * g + e[10] * m + e[14]),
          (t[15] = e[3] * v + e[7] * g + e[11] * m + e[15]))
        : ((r = e[0]),
          (i = e[1]),
          (o = e[2]),
          (a = e[3]),
          (u = e[4]),
          (c = e[5]),
          (s = e[6]),
          (f = e[7]),
          (l = e[8]),
          (d = e[9]),
          (p = e[10]),
          (h = e[11]),
          (t[0] = r),
          (t[1] = i),
          (t[2] = o),
          (t[3] = a),
          (t[4] = u),
          (t[5] = c),
          (t[6] = s),
          (t[7] = f),
          (t[8] = l),
          (t[9] = d),
          (t[10] = p),
          (t[11] = h),
          (t[12] = r * v + u * g + l * m + e[12]),
          (t[13] = i * v + c * g + d * m + e[13]),
          (t[14] = o * v + s * g + p * m + e[14]),
          (t[15] = a * v + f * g + h * m + e[15]));
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      var r = n[0],
        i = n[1],
        o = n[2];
      return (
        (t[0] = e[0] * r),
        (t[1] = e[1] * r),
        (t[2] = e[2] * r),
        (t[3] = e[3] * r),
        (t[4] = e[4] * i),
        (t[5] = e[5] * i),
        (t[6] = e[6] * i),
        (t[7] = e[7] * i),
        (t[8] = e[8] * o),
        (t[9] = e[9] * o),
        (t[10] = e[10] * o),
        (t[11] = e[11] * o),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      var i,
        o,
        a,
        u,
        c,
        s,
        f,
        l,
        d,
        p,
        h,
        v,
        g,
        m,
        y,
        b,
        x,
        w,
        _,
        O,
        A,
        E,
        j,
        S,
        k = r[0],
        T = r[1],
        C = r[2],
        L = Math.sqrt(k * k + T * T + C * C);
      if (Math.abs(L) < 1e-6) return null;
      (k *= L = 1 / L),
        (T *= L),
        (C *= L),
        (i = Math.sin(n)),
        (o = Math.cos(n)),
        (a = 1 - o),
        (u = e[0]),
        (c = e[1]),
        (s = e[2]),
        (f = e[3]),
        (l = e[4]),
        (d = e[5]),
        (p = e[6]),
        (h = e[7]),
        (v = e[8]),
        (g = e[9]),
        (m = e[10]),
        (y = e[11]),
        (b = k * k * a + o),
        (x = T * k * a + C * i),
        (w = C * k * a - T * i),
        (_ = k * T * a - C * i),
        (O = T * T * a + o),
        (A = C * T * a + k * i),
        (E = k * C * a + T * i),
        (j = T * C * a - k * i),
        (S = C * C * a + o),
        (t[0] = u * b + l * x + v * w),
        (t[1] = c * b + d * x + g * w),
        (t[2] = s * b + p * x + m * w),
        (t[3] = f * b + h * x + y * w),
        (t[4] = u * _ + l * O + v * A),
        (t[5] = c * _ + d * O + g * A),
        (t[6] = s * _ + p * O + m * A),
        (t[7] = f * _ + h * O + y * A),
        (t[8] = u * E + l * j + v * S),
        (t[9] = c * E + d * j + g * S),
        (t[10] = s * E + p * j + m * S),
        (t[11] = f * E + h * j + y * S),
        e !== t &&
          ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15]));
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      var r = Math.sin(n),
        i = Math.cos(n),
        o = e[4],
        a = e[5],
        u = e[6],
        c = e[7],
        s = e[8],
        f = e[9],
        l = e[10],
        d = e[11];
      e !== t &&
        ((t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]));
      return (
        (t[4] = o * i + s * r),
        (t[5] = a * i + f * r),
        (t[6] = u * i + l * r),
        (t[7] = c * i + d * r),
        (t[8] = s * i - o * r),
        (t[9] = f * i - a * r),
        (t[10] = l * i - u * r),
        (t[11] = d * i - c * r),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      var r = Math.sin(n),
        i = Math.cos(n),
        o = e[0],
        a = e[1],
        u = e[2],
        c = e[3],
        s = e[8],
        f = e[9],
        l = e[10],
        d = e[11];
      e !== t &&
        ((t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]));
      return (
        (t[0] = o * i - s * r),
        (t[1] = a * i - f * r),
        (t[2] = u * i - l * r),
        (t[3] = c * i - d * r),
        (t[8] = o * r + s * i),
        (t[9] = a * r + f * i),
        (t[10] = u * r + l * i),
        (t[11] = c * r + d * i),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      var r = Math.sin(n),
        i = Math.cos(n),
        o = e[0],
        a = e[1],
        u = e[2],
        c = e[3],
        s = e[4],
        f = e[5],
        l = e[6],
        d = e[7];
      e !== t &&
        ((t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]));
      return (
        (t[0] = o * i + s * r),
        (t[1] = a * i + f * r),
        (t[2] = u * i + l * r),
        (t[3] = c * i + d * r),
        (t[4] = s * i - o * r),
        (t[5] = f * i - a * r),
        (t[6] = l * i - u * r),
        (t[7] = d * i - c * r),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      var r,
        i,
        o,
        a = n[0],
        u = n[1],
        c = n[2],
        s = Math.sqrt(a * a + u * u + c * c);
      if (Math.abs(s) < 1e-6) return null;
      return (
        (a *= s = 1 / s),
        (u *= s),
        (c *= s),
        (r = Math.sin(e)),
        (i = Math.cos(e)),
        (o = 1 - i),
        (t[0] = a * a * o + i),
        (t[1] = u * a * o + c * r),
        (t[2] = c * a * o - u * r),
        (t[3] = 0),
        (t[4] = a * u * o - c * r),
        (t[5] = u * u * o + i),
        (t[6] = c * u * o + a * r),
        (t[7] = 0),
        (t[8] = a * c * o + u * r),
        (t[9] = u * c * o - a * r),
        (t[10] = c * c * o + i),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      var r = e[0],
        i = e[1],
        o = e[2],
        a = e[3],
        u = r + r,
        c = i + i,
        s = o + o,
        f = r * u,
        l = r * c,
        d = r * s,
        p = i * c,
        h = i * s,
        v = o * s,
        g = a * u,
        m = a * c,
        y = a * s;
      return (
        (t[0] = 1 - (p + v)),
        (t[1] = l + y),
        (t[2] = d - m),
        (t[3] = 0),
        (t[4] = l - y),
        (t[5] = 1 - (f + v)),
        (t[6] = h + g),
        (t[7] = 0),
        (t[8] = d + m),
        (t[9] = h - g),
        (t[10] = 1 - (f + p)),
        (t[11] = 0),
        (t[12] = n[0]),
        (t[13] = n[1]),
        (t[14] = n[2]),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return (
        (t[0] = e[0]),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = e[1]),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = e[2]),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = e[0]),
        (t[13] = e[1]),
        (t[14] = e[2]),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = Math.sin(e),
        r = Math.cos(e);
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = r),
        (t[6] = n),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = -n),
        (t[10] = r),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = Math.sin(e),
        r = Math.cos(e);
      return (
        (t[0] = r),
        (t[1] = 0),
        (t[2] = -n),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = n),
        (t[9] = 0),
        (t[10] = r),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = Math.sin(e),
        r = Math.cos(e);
      return (
        (t[0] = r),
        (t[1] = n),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = -n),
        (t[5] = r),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = e[0],
        r = e[1],
        i = e[2],
        o = e[3],
        a = n + n,
        u = r + r,
        c = i + i,
        s = n * a,
        f = r * a,
        l = r * u,
        d = i * a,
        p = i * u,
        h = i * c,
        v = o * a,
        g = o * u,
        m = o * c;
      return (
        (t[0] = 1 - l - h),
        (t[1] = f + m),
        (t[2] = d - g),
        (t[3] = 0),
        (t[4] = f - m),
        (t[5] = 1 - s - h),
        (t[6] = p + v),
        (t[7] = 0),
        (t[8] = d + g),
        (t[9] = p - v),
        (t[10] = 1 - s - l),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r, i, o, a) {
      var u = 1 / (n - e),
        c = 1 / (i - r),
        s = 1 / (o - a);
      return (
        (t[0] = 2 * o * u),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 2 * o * c),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = (n + e) * u),
        (t[9] = (i + r) * c),
        (t[10] = (a + o) * s),
        (t[11] = -1),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = a * o * 2 * s),
        (t[15] = 0),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r, i) {
      var o = 1 / Math.tan(e / 2),
        a = 1 / (r - i);
      return (
        (t[0] = o / n),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = o),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = (i + r) * a),
        (t[11] = -1),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 2 * i * r * a),
        (t[15] = 0),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      var i = Math.tan((e.upDegrees * Math.PI) / 180),
        o = Math.tan((e.downDegrees * Math.PI) / 180),
        a = Math.tan((e.leftDegrees * Math.PI) / 180),
        u = Math.tan((e.rightDegrees * Math.PI) / 180),
        c = 2 / (a + u),
        s = 2 / (i + o);
      return (
        (t[0] = c),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = s),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = -(a - u) * c * 0.5),
        (t[9] = (i - o) * s * 0.5),
        (t[10] = r / (n - r)),
        (t[11] = -1),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = (r * n) / (n - r)),
        (t[15] = 0),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r, i, o, a) {
      var u = 1 / (e - n),
        c = 1 / (r - i),
        s = 1 / (o - a);
      return (
        (t[0] = -2 * u),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = -2 * c),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 2 * s),
        (t[11] = 0),
        (t[12] = (e + n) * u),
        (t[13] = (i + r) * c),
        (t[14] = (a + o) * s),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e, n) {
    var r = n(151);
    t.exports = function (t, e, n, i) {
      var o,
        a,
        u,
        c,
        s,
        f,
        l,
        d,
        p,
        h,
        v = e[0],
        g = e[1],
        m = e[2],
        y = i[0],
        b = i[1],
        x = i[2],
        w = n[0],
        _ = n[1],
        O = n[2];
      if (
        Math.abs(v - w) < 1e-6 &&
        Math.abs(g - _) < 1e-6 &&
        Math.abs(m - O) < 1e-6
      )
        return r(t);
      (l = v - w),
        (d = g - _),
        (p = m - O),
        (h = 1 / Math.sqrt(l * l + d * d + p * p)),
        (o = b * (p *= h) - x * (d *= h)),
        (a = x * (l *= h) - y * p),
        (u = y * d - b * l),
        (h = Math.sqrt(o * o + a * a + u * u))
          ? ((o *= h = 1 / h), (a *= h), (u *= h))
          : ((o = 0), (a = 0), (u = 0));
      (c = d * u - p * a),
        (s = p * o - l * u),
        (f = l * a - d * o),
        (h = Math.sqrt(c * c + s * s + f * f))
          ? ((c *= h = 1 / h), (s *= h), (f *= h))
          : ((c = 0), (s = 0), (f = 0));
      return (
        (t[0] = o),
        (t[1] = c),
        (t[2] = l),
        (t[3] = 0),
        (t[4] = a),
        (t[5] = s),
        (t[6] = d),
        (t[7] = 0),
        (t[8] = u),
        (t[9] = f),
        (t[10] = p),
        (t[11] = 0),
        (t[12] = -(o * v + a * g + u * m)),
        (t[13] = -(c * v + s * g + f * m)),
        (t[14] = -(l * v + d * g + p * m)),
        (t[15] = 1),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        "mat4(" +
        t[0] +
        ", " +
        t[1] +
        ", " +
        t[2] +
        ", " +
        t[3] +
        ", " +
        t[4] +
        ", " +
        t[5] +
        ", " +
        t[6] +
        ", " +
        t[7] +
        ", " +
        t[8] +
        ", " +
        t[9] +
        ", " +
        t[10] +
        ", " +
        t[11] +
        ", " +
        t[12] +
        ", " +
        t[13] +
        ", " +
        t[14] +
        ", " +
        t[15] +
        ")"
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(55),
      o = [].reverse,
      a = [1, 2];
    r(
      { target: "Array", proto: !0, forced: String(a) === String(a.reverse()) },
      {
        reverse: function () {
          return i(this) && (this.length = this.length), o.call(this);
        },
      }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(4),
      i = n(16),
      o = n(55),
      a = n(69),
      u = n(24),
      c = n(31),
      s = n(56),
      f = n(7),
      l = n(57),
      d = n(34),
      p = l("slice"),
      h = d("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      v = f("species"),
      g = [].slice,
      m = Math.max;
    r(
      { target: "Array", proto: !0, forced: !p || !h },
      {
        slice: function (t, e) {
          var n,
            r,
            f,
            l = c(this),
            d = u(l.length),
            p = a(t, d),
            h = a(void 0 === e ? d : e, d);
          if (
            o(l) &&
            ("function" != typeof (n = l.constructor) ||
            (n !== Array && !o(n.prototype))
              ? i(n) && null === (n = n[v]) && (n = void 0)
              : (n = void 0),
            n === Array || void 0 === n)
          )
            return g.call(l, p, h);
          for (
            r = new (void 0 === n ? Array : n)(m(h - p, 0)), f = 0;
            p < h;
            p++, f++
          )
            p in l && s(r, f, l[p]);
          return (r.length = f), r;
        },
      }
    );
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e, n) {},
]);
