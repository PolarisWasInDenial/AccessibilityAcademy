(() => {
  'use strict';
  var e,
    r,
    t,
    o,
    a,
    n = {},
    f = {};
  function d(e) {
    var r = f[e];
    if (void 0 !== r) return r.exports;
    var t = (f[e] = { exports: {} });
    return n[e].call(t.exports, t, t.exports, d), t.exports;
  }
  (d.m = n),
    (e = []),
    (d.O = (r, t, o, a) => {
      if (!t) {
        var n = 1 / 0;
        for (u = 0; u < e.length; u++) {
          (t = e[u][0]), (o = e[u][1]), (a = e[u][2]);
          for (var f = !0, c = 0; c < t.length; c++)
            (!1 & a || n >= a) && Object.keys(d.O).every((e) => d.O[e](t[c]))
              ? t.splice(c--, 1)
              : ((f = !1), a < n && (n = a));
          if (f) {
            e.splice(u--, 1);
            var i = o();
            void 0 !== i && (r = i);
          }
        }
        return r;
      }
      a = a || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
      e[u] = [t, o, a];
    }),
    (d.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return d.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (d.t = function (e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var a = Object.create(null);
      d.r(a);
      var n = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var f = 2 & o && e; 'object' == typeof f && !~r.indexOf(f); f = t(f))
        Object.getOwnPropertyNames(f).forEach((r) => (n[r] = () => e[r]));
      return (n.default = () => e), d.d(a, n), a;
    }),
    (d.d = (e, r) => {
      for (var t in r) d.o(r, t) && !d.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (d.f = {}),
    (d.e = (e) => Promise.all(Object.keys(d.f).reduce((r, t) => (d.f[t](e, r), r), []))),
    (d.u = (e) =>
      'assets/js/' +
      ({
        53: '935f2afb',
        219: '86857733',
        326: '8bfc7805',
        374: 'd3874e59',
        463: 'd897a8a5',
        514: '1be78505',
        534: '74411b28',
        578: 'a9758c57',
        613: '5efdcb50',
        615: '43eb2a1f',
        671: '0e384e19',
        678: 'dfa207b8',
        705: 'a3830ac3',
        766: 'f99cd6df',
        841: 'e1383287',
        918: '17896441',
        976: '45000a7f',
      }[e] || e) +
      '.' +
      {
        53: '36945b55',
        219: '9d495737',
        245: '2846751d',
        326: '331cf717',
        343: '0365238a',
        374: '33571030',
        463: '62f6e2c8',
        514: 'c96f2a93',
        534: '203d9e22',
        578: '97a1f7ab',
        613: '84326022',
        615: '09b9933b',
        671: 'bfc8ee29',
        678: '797048f0',
        705: '841f7a1c',
        766: '5a416968',
        841: '27660ef9',
        878: '27baceba',
        918: 'fff7df7f',
        972: 'b370daa7',
        976: '79a12a83',
      }[e] +
      '.js'),
    (d.miniCssF = (e) => {}),
    (d.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (d.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (o = {}),
    (a = 'docs:'),
    (d.l = (e, r, t, n) => {
      if (o[e]) o[e].push(r);
      else {
        var f, c;
        if (void 0 !== t)
          for (var i = document.getElementsByTagName('script'), u = 0; u < i.length; u++) {
            var l = i[u];
            if (l.getAttribute('src') == e || l.getAttribute('data-webpack') == a + t) {
              f = l;
              break;
            }
          }
        f ||
          ((c = !0),
          ((f = document.createElement('script')).charset = 'utf-8'),
          (f.timeout = 120),
          d.nc && f.setAttribute('nonce', d.nc),
          f.setAttribute('data-webpack', a + t),
          (f.src = e)),
          (o[e] = [r]);
        var b = (r, t) => {
            (f.onerror = f.onload = null), clearTimeout(s);
            var a = o[e];
            if ((delete o[e], f.parentNode && f.parentNode.removeChild(f), a && a.forEach((e) => e(t)), r)) return r(t);
          },
          s = setTimeout(b.bind(null, void 0, { type: 'timeout', target: f }), 12e4);
        (f.onerror = b.bind(null, f.onerror)), (f.onload = b.bind(null, f.onload)), c && document.head.appendChild(f);
      }
    }),
    (d.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (d.p = '/roact-error-boundary/'),
    (d.gca = function (e) {
      return (
        (e =
          {
            17896441: '918',
            86857733: '219',
            '935f2afb': '53',
            '8bfc7805': '326',
            d3874e59: '374',
            d897a8a5: '463',
            '1be78505': '514',
            '74411b28': '534',
            a9758c57: '578',
            '5efdcb50': '613',
            '43eb2a1f': '615',
            '0e384e19': '671',
            dfa207b8: '678',
            a3830ac3: '705',
            f99cd6df: '766',
            e1383287: '841',
            '45000a7f': '976',
          }[e] || e),
        d.p + d.u(e)
      );
    }),
    (() => {
      var e = { 303: 0, 532: 0 };
      (d.f.j = (r, t) => {
        var o = d.o(e, r) ? e[r] : void 0;
        if (0 !== o)
          if (o) t.push(o[2]);
          else if (/^(303|532)$/.test(r)) e[r] = 0;
          else {
            var a = new Promise((t, a) => (o = e[r] = [t, a]));
            t.push((o[2] = a));
            var n = d.p + d.u(r),
              f = new Error();
            d.l(
              n,
              (t) => {
                if (d.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var a = t && ('load' === t.type ? 'missing' : t.type),
                    n = t && t.target && t.target.src;
                  (f.message = 'Loading chunk ' + r + ' failed.\n(' + a + ': ' + n + ')'),
                    (f.name = 'ChunkLoadError'),
                    (f.type = a),
                    (f.request = n),
                    o[1](f);
                }
              },
              'chunk-' + r,
              r
            );
          }
      }),
        (d.O.j = (r) => 0 === e[r]);
      var r = (r, t) => {
          var o,
            a,
            n = t[0],
            f = t[1],
            c = t[2],
            i = 0;
          if (n.some((r) => 0 !== e[r])) {
            for (o in f) d.o(f, o) && (d.m[o] = f[o]);
            if (c) var u = c(d);
          }
          for (r && r(t); i < n.length; i++) (a = n[i]), d.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return d.O(u);
        },
        t = (self.webpackChunkdocs = self.webpackChunkdocs || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
})();
