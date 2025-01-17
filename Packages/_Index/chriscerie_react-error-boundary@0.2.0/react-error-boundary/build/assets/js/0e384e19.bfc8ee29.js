'use strict';
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [671],
  {
    3905: (e, r, t) => {
      t.d(r, { Zo: () => p, kt: () => m });
      var n = t(67294);
      function o(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[r] = t),
          e
        );
      }
      function a(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function i(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                o(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      function c(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (t = a[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
        }
        return o;
      }
      var l = n.createContext({}),
        s = function (e) {
          var r = n.useContext(l),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : i(i({}, r), e)), t;
        },
        p = function (e) {
          var r = s(e.components);
          return n.createElement(l.Provider, { value: r }, e.children);
        },
        u = 'mdxType',
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return n.createElement(n.Fragment, {}, r);
          },
        },
        y = n.forwardRef(function (e, r) {
          var t = e.components,
            o = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(t),
            y = o,
            m = u[''.concat(l, '.').concat(y)] || u[y] || d[y] || a;
          return t
            ? n.createElement(m, i(i({ ref: r }, p), {}, { components: t }))
            : n.createElement(m, i({ ref: r }, p));
        });
      function m(e, r) {
        var t = arguments,
          o = r && r.mdxType;
        if ('string' == typeof e || o) {
          var a = t.length,
            i = new Array(a);
          i[0] = y;
          var c = {};
          for (var l in r) hasOwnProperty.call(r, l) && (c[l] = r[l]);
          (c.originalType = e), (c[u] = 'string' == typeof e ? e : o), (i[1] = c);
          for (var s = 2; s < a; s++) i[s] = t[s];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, t);
      }
      y.displayName = 'MDXCreateElement';
    },
    59881: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => l,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => s,
        });
      var n = t(87462),
        o = (t(67294), t(3905));
      const a = { sidebar_position: 1 },
        i = 'Introduction',
        c = {
          unversionedId: 'intro',
          id: 'intro',
          title: 'Introduction',
          description:
            'roact-error-boundary is a reusable error boundary component library for Roact inspired by react-spring. It makes error logging, reverting states, and displaying fallback components incredibly easy to implement.',
          source: '@site/docs/intro.md',
          sourceDirName: '.',
          slug: '/intro',
          permalink: '/roact-error-boundary/docs/intro',
          draft: !1,
          editUrl: 'https://github.com/chriscerie/roact-error-boundary/edit/master/docs/intro.md',
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'defaultSidebar',
        },
        l = {},
        s = [
          { value: 'Installation', id: 'installation', level: 2 },
          { value: 'Wally', id: 'wally', level: 3 },
        ],
        p = { toc: s },
        u = 'wrapper';
      function d(e) {
        let { components: r, ...t } = e;
        return (0, o.kt)(
          u,
          (0, n.Z)({}, p, t, { components: r, mdxType: 'MDXLayout' }),
          (0, o.kt)('h1', { id: 'introduction' }, 'Introduction'),
          (0, o.kt)('b', null, 'roact-error-boundary'),
          ' is a reusable error boundary component library for Roact inspired by react-spring. It makes error logging, reverting states, and displaying fallback components incredibly easy to implement.',
          (0, o.kt)('h2', { id: 'installation' }, 'Installation'),
          (0, o.kt)('h3', { id: 'wally' }, 'Wally'),
          (0, o.kt)(
            'p',
            null,
            (0, o.kt)('inlineCode', { parentName: 'p' }, 'roact-spring'),
            ' supports ',
            (0, o.kt)('a', { parentName: 'p', href: 'https://github.com/grilme99/CorePackages' }, 'Roact17'),
            '. However, ',
            (0, o.kt)('a', { parentName: 'p', href: 'https://github.com/Roblox/roact' }, 'Legacy Roact'),
            ' is not supported. To install, add the latest version of roact-error-boundary to your wally.toml:'
          ),
          (0, o.kt)(
            'pre',
            null,
            (0, o.kt)(
              'code',
              { parentName: 'pre', className: 'language-console' },
              'RoactSpring = "chriscerie/react-spring@<version>"\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
