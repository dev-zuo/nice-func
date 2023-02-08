// https://blog.csdn.net/u014291990/article/details/103112914
// gl_PointCoord 关键字 webgl 点渲染模式对应点像素坐标
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