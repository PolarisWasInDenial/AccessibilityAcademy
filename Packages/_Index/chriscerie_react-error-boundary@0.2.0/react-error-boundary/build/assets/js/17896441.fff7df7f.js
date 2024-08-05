(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [918],
  {
    3905: (e, t, n) => {
      'use strict';
      n.d(t, { Zo: () => d, kt: () => f });
      var a = n(67294);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var s = a.createContext({}),
        i = function (e) {
          var t = a.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        d = function (e) {
          var t = i(e.components);
          return a.createElement(s.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        p = a.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            r = e.originalType,
            s = e.parentName,
            d = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = i(n),
            p = o,
            f = m[''.concat(s, '.').concat(p)] || m[p] || u[p] || r;
          return n
            ? a.createElement(f, l(l({ ref: t }, d), {}, { components: n }))
            : a.createElement(f, l({ ref: t }, d));
        });
      function f(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ('string' == typeof e || o) {
          var r = n.length,
            l = new Array(r);
          l[0] = p;
          var c = {};
          for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
          (c.originalType = e), (c[m] = 'string' == typeof e ? e : o), (l[1] = c);
          for (var i = 2; i < r; i++) l[i] = n[i];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, n);
      }
      p.displayName = 'MDXCreateElement';
    },
    74005: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => st });
      var a = n(67294),
        o = n(1944),
        r = n(902);
      const l = a.createContext(null);
      function c(e) {
        let { children: t, content: n } = e;
        const o = (function (e) {
          return (0, a.useMemo)(
            () => ({
              metadata: e.metadata,
              frontMatter: e.frontMatter,
              assets: e.assets,
              contentTitle: e.contentTitle,
              toc: e.toc,
            }),
            [e]
          );
        })(n);
        return a.createElement(l.Provider, { value: o }, t);
      }
      function s() {
        const e = (0, a.useContext)(l);
        if (null === e) throw new r.i6('DocProvider');
        return e;
      }
      function i() {
        const { metadata: e, frontMatter: t, assets: n } = s();
        return a.createElement(o.d, {
          title: e.title,
          description: e.description,
          keywords: t.keywords,
          image: n.image ?? t.image,
        });
      }
      var d = n(86010),
        m = n(87524),
        u = n(87462),
        p = n(95999),
        f = n(39960);
      function h(e) {
        const { permalink: t, title: n, subLabel: o, isNext: r } = e;
        return a.createElement(
          f.Z,
          {
            className: (0, d.Z)(
              'pagination-nav__link',
              r ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'
            ),
            to: t,
          },
          o && a.createElement('div', { className: 'pagination-nav__sublabel' }, o),
          a.createElement('div', { className: 'pagination-nav__label' }, n)
        );
      }
      function g(e) {
        const { previous: t, next: n } = e;
        return a.createElement(
          'nav',
          {
            className: 'pagination-nav docusaurus-mt-lg',
            'aria-label': (0, p.I)({
              id: 'theme.docs.paginator.navAriaLabel',
              message: 'Docs pages navigation',
              description: 'The ARIA label for the docs pagination',
            }),
          },
          t &&
            a.createElement(
              h,
              (0, u.Z)({}, t, {
                subLabel: a.createElement(
                  p.Z,
                  {
                    id: 'theme.docs.paginator.previous',
                    description: 'The label used to navigate to the previous doc',
                  },
                  'Previous'
                ),
              })
            ),
          n &&
            a.createElement(
              h,
              (0, u.Z)({}, n, {
                subLabel: a.createElement(
                  p.Z,
                  { id: 'theme.docs.paginator.next', description: 'The label used to navigate to the next doc' },
                  'Next'
                ),
                isNext: !0,
              })
            )
        );
      }
      function b() {
        const { metadata: e } = s();
        return a.createElement(g, { previous: e.previous, next: e.next });
      }
      var v = n(52263),
        E = n(94104),
        y = n(35281),
        k = n(60373),
        N = n(74477);
      const C = {
        unreleased: function (e) {
          let { siteTitle: t, versionMetadata: n } = e;
          return a.createElement(
            p.Z,
            {
              id: 'theme.docs.versions.unreleasedVersionLabel',
              description: "The label used to tell the user that he's browsing an unreleased doc version",
              values: { siteTitle: t, versionLabel: a.createElement('b', null, n.label) },
            },
            'This is unreleased documentation for {siteTitle} {versionLabel} version.'
          );
        },
        unmaintained: function (e) {
          let { siteTitle: t, versionMetadata: n } = e;
          return a.createElement(
            p.Z,
            {
              id: 'theme.docs.versions.unmaintainedVersionLabel',
              description: "The label used to tell the user that he's browsing an unmaintained doc version",
              values: { siteTitle: t, versionLabel: a.createElement('b', null, n.label) },
            },
            'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
          );
        },
      };
      function L(e) {
        const t = C[e.versionMetadata.banner];
        return a.createElement(t, e);
      }
      function T(e) {
        let { versionLabel: t, to: n, onClick: o } = e;
        return a.createElement(
          p.Z,
          {
            id: 'theme.docs.versions.latestVersionSuggestionLabel',
            description: 'The label used to tell the user to check the latest version',
            values: {
              versionLabel: t,
              latestVersionLink: a.createElement(
                'b',
                null,
                a.createElement(
                  f.Z,
                  { to: n, onClick: o },
                  a.createElement(
                    p.Z,
                    {
                      id: 'theme.docs.versions.latestVersionLinkLabel',
                      description: 'The label used for the latest version suggestion link label',
                    },
                    'latest version'
                  )
                )
              ),
            },
          },
          'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
        );
      }
      function Z(e) {
        let { className: t, versionMetadata: n } = e;
        const {
            siteConfig: { title: o },
          } = (0, v.Z)(),
          { pluginId: r } = (0, E.gA)({ failfast: !0 }),
          { savePreferredVersionName: l } = (0, k.J)(r),
          { latestDocSuggestion: c, latestVersionSuggestion: s } = (0, E.Jo)(r),
          i = c ?? (m = s).docs.find((e) => e.id === m.mainDocId);
        var m;
        return a.createElement(
          'div',
          {
            className: (0, d.Z)(t, y.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
            role: 'alert',
          },
          a.createElement('div', null, a.createElement(L, { siteTitle: o, versionMetadata: n })),
          a.createElement(
            'div',
            { className: 'margin-top--md' },
            a.createElement(T, { versionLabel: s.label, to: i.path, onClick: () => l(s.name) })
          )
        );
      }
      function _(e) {
        let { className: t } = e;
        const n = (0, N.E)();
        return n.banner ? a.createElement(Z, { className: t, versionMetadata: n }) : null;
      }
      function w(e) {
        let { className: t } = e;
        const n = (0, N.E)();
        return n.badge
          ? a.createElement(
              'span',
              { className: (0, d.Z)(t, y.k.docs.docVersionBadge, 'badge badge--secondary') },
              a.createElement(
                p.Z,
                { id: 'theme.docs.versionBadge.label', values: { versionLabel: n.label } },
                'Version: {versionLabel}'
              )
            )
          : null;
      }
      function B(e) {
        let { lastUpdatedAt: t, formattedLastUpdatedAt: n } = e;
        return a.createElement(
          p.Z,
          {
            id: 'theme.lastUpdated.atDate',
            description: 'The words used to describe on which date a page has been last updated',
            values: {
              date: a.createElement(
                'b',
                null,
                a.createElement('time', { dateTime: new Date(1e3 * t).toISOString() }, n)
              ),
            },
          },
          ' on {date}'
        );
      }
      function x(e) {
        let { lastUpdatedBy: t } = e;
        return a.createElement(
          p.Z,
          {
            id: 'theme.lastUpdated.byUser',
            description: 'The words used to describe by who the page has been last updated',
            values: { user: a.createElement('b', null, t) },
          },
          ' by {user}'
        );
      }
      function O(e) {
        let { lastUpdatedAt: t, formattedLastUpdatedAt: n, lastUpdatedBy: o } = e;
        return a.createElement(
          'span',
          { className: y.k.common.lastUpdated },
          a.createElement(
            p.Z,
            {
              id: 'theme.lastUpdated.lastUpdatedAtBy',
              description: 'The sentence used to display when a page has been last updated, and by who',
              values: {
                atDate: t && n ? a.createElement(B, { lastUpdatedAt: t, formattedLastUpdatedAt: n }) : '',
                byUser: o ? a.createElement(x, { lastUpdatedBy: o }) : '',
              },
            },
            'Last updated{atDate}{byUser}'
          ),
          !1
        );
      }
      const H = { iconEdit: 'iconEdit_Z9Sw' };
      function A(e) {
        let { className: t, ...n } = e;
        return a.createElement(
          'svg',
          (0, u.Z)(
            {
              fill: 'currentColor',
              height: '20',
              width: '20',
              viewBox: '0 0 40 40',
              className: (0, d.Z)(H.iconEdit, t),
              'aria-hidden': 'true',
            },
            n
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z',
            })
          )
        );
      }
      function j(e) {
        let { editUrl: t } = e;
        return a.createElement(
          'a',
          { href: t, target: '_blank', rel: 'noreferrer noopener', className: y.k.common.editThisPage },
          a.createElement(A, null),
          a.createElement(
            p.Z,
            { id: 'theme.common.editThisPage', description: 'The link label to edit the current page' },
            'Edit this page'
          )
        );
      }
      const I = { tag: 'tag_zVej', tagRegular: 'tagRegular_sFm0', tagWithCount: 'tagWithCount_h2kH' };
      function S(e) {
        let { permalink: t, label: n, count: o } = e;
        return a.createElement(
          f.Z,
          { href: t, className: (0, d.Z)(I.tag, o ? I.tagWithCount : I.tagRegular) },
          n,
          o && a.createElement('span', null, o)
        );
      }
      const M = { tags: 'tags_jXut', tag: 'tag_QGVx' };
      function P(e) {
        let { tags: t } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            'b',
            null,
            a.createElement(
              p.Z,
              { id: 'theme.tags.tagsListLabel', description: 'The label alongside a tag list' },
              'Tags:'
            )
          ),
          a.createElement(
            'ul',
            { className: (0, d.Z)(M.tags, 'padding--none', 'margin-left--sm') },
            t.map((e) => {
              let { label: t, permalink: n } = e;
              return a.createElement(
                'li',
                { key: n, className: M.tag },
                a.createElement(S, { label: t, permalink: n })
              );
            })
          )
        );
      }
      const U = { lastUpdated: 'lastUpdated_vwxv' };
      function z(e) {
        return a.createElement(
          'div',
          { className: (0, d.Z)(y.k.docs.docFooterTagsRow, 'row margin-bottom--sm') },
          a.createElement('div', { className: 'col' }, a.createElement(P, e))
        );
      }
      function V(e) {
        let { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: o, formattedLastUpdatedAt: r } = e;
        return a.createElement(
          'div',
          { className: (0, d.Z)(y.k.docs.docFooterEditMetaRow, 'row') },
          a.createElement('div', { className: 'col' }, t && a.createElement(j, { editUrl: t })),
          a.createElement(
            'div',
            { className: (0, d.Z)('col', U.lastUpdated) },
            (n || o) && a.createElement(O, { lastUpdatedAt: n, formattedLastUpdatedAt: r, lastUpdatedBy: o })
          )
        );
      }
      function D() {
        const { metadata: e } = s(),
          { editUrl: t, lastUpdatedAt: n, formattedLastUpdatedAt: o, lastUpdatedBy: r, tags: l } = e,
          c = l.length > 0,
          i = !!(t || n || r);
        return c || i
          ? a.createElement(
              'footer',
              { className: (0, d.Z)(y.k.docs.docFooter, 'docusaurus-mt-lg') },
              c && a.createElement(z, { tags: l }),
              i && a.createElement(V, { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: r, formattedLastUpdatedAt: o })
            )
          : null;
      }
      var R = n(69286);
      const W = { tocMobile: 'tocMobile_ITEo' };
      function $() {
        const { toc: e, frontMatter: t } = s();
        return a.createElement(R.Z, {
          toc: e,
          minHeadingLevel: t.toc_min_heading_level,
          maxHeadingLevel: t.toc_max_heading_level,
          className: (0, d.Z)(y.k.docs.docTocMobile, W.tocMobile),
        });
      }
      var F = n(39407);
      function q() {
        const { toc: e, frontMatter: t } = s();
        return a.createElement(F.Z, {
          toc: e,
          minHeadingLevel: t.toc_min_heading_level,
          maxHeadingLevel: t.toc_max_heading_level,
          className: y.k.docs.docTocDesktop,
        });
      }
      var G = n(92503),
        Y = n(3905),
        J = n(35742);
      var Q = n(72389),
        X = n(92949),
        K = n(86668);
      function ee() {
        const { prism: e } = (0, K.L)(),
          { colorMode: t } = (0, X.I)(),
          n = e.theme,
          a = e.darkTheme || n;
        return 'dark' === t ? a : n;
      }
      var te = n(87594),
        ne = n.n(te);
      const ae = /title=(?<quote>["'])(?<title>.*?)\1/,
        oe = /\{(?<range>[\d,-]+)\}/,
        re = {
          js: { start: '\\/\\/', end: '' },
          jsBlock: { start: '\\/\\*', end: '\\*\\/' },
          jsx: { start: '\\{\\s*\\/\\*', end: '\\*\\/\\s*\\}' },
          bash: { start: '#', end: '' },
          html: { start: '\x3c!--', end: '--\x3e' },
        };
      function le(e, t) {
        const n = e
          .map((e) => {
            const { start: n, end: a } = re[e];
            return `(?:${n}\\s*(${t
              .flatMap((e) => [e.line, e.block?.start, e.block?.end].filter(Boolean))
              .join('|')})\\s*${a})`;
          })
          .join('|');
        return new RegExp(`^\\s*(?:${n})\\s*$`);
      }
      function ce(e, t) {
        let n = e.replace(/\n$/, '');
        const { language: a, magicComments: o, metastring: r } = t;
        if (r && oe.test(r)) {
          const e = r.match(oe).groups.range;
          if (0 === o.length)
            throw new Error(
              `A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`
            );
          const t = o[0].className,
            a = ne()(e)
              .filter((e) => e > 0)
              .map((e) => [e - 1, [t]]);
          return { lineClassNames: Object.fromEntries(a), code: n };
        }
        if (void 0 === a) return { lineClassNames: {}, code: n };
        const l = (function (e, t) {
            switch (e) {
              case 'js':
              case 'javascript':
              case 'ts':
              case 'typescript':
                return le(['js', 'jsBlock'], t);
              case 'jsx':
              case 'tsx':
                return le(['js', 'jsBlock', 'jsx'], t);
              case 'html':
                return le(['js', 'jsBlock', 'html'], t);
              case 'python':
              case 'py':
              case 'bash':
                return le(['bash'], t);
              case 'markdown':
              case 'md':
                return le(['html', 'jsx', 'bash'], t);
              default:
                return le(Object.keys(re), t);
            }
          })(a, o),
          c = n.split('\n'),
          s = Object.fromEntries(o.map((e) => [e.className, { start: 0, range: '' }])),
          i = Object.fromEntries(
            o
              .filter((e) => e.line)
              .map((e) => {
                let { className: t, line: n } = e;
                return [n, t];
              })
          ),
          d = Object.fromEntries(
            o
              .filter((e) => e.block)
              .map((e) => {
                let { className: t, block: n } = e;
                return [n.start, t];
              })
          ),
          m = Object.fromEntries(
            o
              .filter((e) => e.block)
              .map((e) => {
                let { className: t, block: n } = e;
                return [n.end, t];
              })
          );
        for (let p = 0; p < c.length; ) {
          const e = c[p].match(l);
          if (!e) {
            p += 1;
            continue;
          }
          const t = e.slice(1).find((e) => void 0 !== e);
          i[t]
            ? (s[i[t]].range += `${p},`)
            : d[t]
            ? (s[d[t]].start = p)
            : m[t] && (s[m[t]].range += `${s[m[t]].start}-${p - 1},`),
            c.splice(p, 1);
        }
        n = c.join('\n');
        const u = {};
        return (
          Object.entries(s).forEach((e) => {
            let [t, { range: n }] = e;
            ne()(n).forEach((e) => {
              (u[e] ??= []), u[e].push(t);
            });
          }),
          { lineClassNames: u, code: n }
        );
      }
      const se = { codeBlockContainer: 'codeBlockContainer_Ckt0' };
      function ie(e) {
        let { as: t, ...n } = e;
        const o = (function (e) {
          const t = { color: '--prism-color', backgroundColor: '--prism-background-color' },
            n = {};
          return (
            Object.entries(e.plain).forEach((e) => {
              let [a, o] = e;
              const r = t[a];
              r && 'string' == typeof o && (n[r] = o);
            }),
            n
          );
        })(ee());
        return a.createElement(
          t,
          (0, u.Z)({}, n, { style: o, className: (0, d.Z)(n.className, se.codeBlockContainer, y.k.common.codeBlock) })
        );
      }
      const de = {
        codeBlockContent: 'codeBlockContent_biex',
        codeBlockTitle: 'codeBlockTitle_Ktv7',
        codeBlock: 'codeBlock_bY9V',
        codeBlockStandalone: 'codeBlockStandalone_MEMb',
        codeBlockLines: 'codeBlockLines_e6Vv',
        codeBlockLinesWithNumbering: 'codeBlockLinesWithNumbering_o6Pm',
        buttonGroup: 'buttonGroup__atx',
      };
      function me(e) {
        let { children: t, className: n } = e;
        return a.createElement(
          ie,
          { as: 'pre', tabIndex: 0, className: (0, d.Z)(de.codeBlockStandalone, 'thin-scrollbar', n) },
          a.createElement('code', { className: de.codeBlockLines }, t)
        );
      }
      const ue = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
      function pe(e, t) {
        const [n, o] = (0, a.useState)(),
          l = (0, a.useCallback)(() => {
            o(e.current?.closest('[role=tabpanel][hidden]'));
          }, [e, o]);
        (0, a.useEffect)(() => {
          l();
        }, [l]),
          (function (e, t, n) {
            void 0 === n && (n = ue);
            const o = (0, r.zX)(t),
              l = (0, r.Ql)(n);
            (0, a.useEffect)(() => {
              const t = new MutationObserver(o);
              return e && t.observe(e, l), () => t.disconnect();
            }, [e, o, l]);
          })(
            n,
            (e) => {
              e.forEach((e) => {
                'attributes' === e.type && 'hidden' === e.attributeName && (t(), l());
              });
            },
            { attributes: !0, characterData: !1, childList: !1, subtree: !1 }
          );
      }
      const fe = {
        plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
        styles: [
          { types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'], style: { color: '#6c6783' } },
          { types: ['namespace'], style: { opacity: 0.7 } },
          { types: ['tag', 'operator', 'number'], style: { color: '#e09142' } },
          { types: ['property', 'function'], style: { color: '#9a86fd' } },
          { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#eeebff' } },
          { types: ['attr-name'], style: { color: '#c4b9fe' } },
          {
            types: [
              'boolean',
              'string',
              'entity',
              'url',
              'attr-value',
              'keyword',
              'control',
              'directive',
              'unit',
              'statement',
              'regex',
              'atrule',
              'placeholder',
              'variable',
            ],
            style: { color: '#ffcc99' },
          },
          { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
          { types: ['inserted'], style: { textDecorationLine: 'underline' } },
          { types: ['italic'], style: { fontStyle: 'italic' } },
          { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
          { types: ['important'], style: { color: '#c4b9fe' } },
        ],
      };
      var he = { Prism: n(87410).Z, theme: fe };
      function ge(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function be() {
        return (
          (be =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          be.apply(this, arguments)
        );
      }
      var ve = /\r\n|\r|\n/,
        Ee = function (e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '\n', empty: !0 })
            : 1 === e.length && '' === e[0].content && ((e[0].content = '\n'), (e[0].empty = !0));
        },
        ye = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        ke = function (e, t) {
          var n = e.plain,
            a = Object.create(null),
            o = e.styles.reduce(function (e, n) {
              var a = n.languages,
                o = n.style;
              return (
                (a && !a.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = be({}, e[t], o);
                    e[t] = n;
                  }),
                e
              );
            }, a);
          return (o.root = n), (o.plain = be({}, n, { backgroundColor: null })), o;
        };
      function Ne(e, t) {
        var n = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && -1 === t.indexOf(a) && (n[a] = e[a]);
        return n;
      }
      const Ce = (function (e) {
          function t() {
            for (var t = this, n = [], a = arguments.length; a--; ) n[a] = arguments[a];
            e.apply(this, n),
              ge(this, 'getThemeDict', function (e) {
                if (void 0 !== t.themeDict && e.theme === t.prevTheme && e.language === t.prevLanguage)
                  return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? ke(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              ge(this, 'getLineProps', function (e) {
                var n = e.key,
                  a = e.className,
                  o = e.style,
                  r = be({}, Ne(e, ['key', 'className', 'style', 'line']), {
                    className: 'token-line',
                    style: void 0,
                    key: void 0,
                  }),
                  l = t.getThemeDict(t.props);
                return (
                  void 0 !== l && (r.style = l.plain),
                  void 0 !== o && (r.style = void 0 !== r.style ? be({}, r.style, o) : o),
                  void 0 !== n && (r.key = n),
                  a && (r.className += ' ' + a),
                  r
                );
              }),
              ge(this, 'getStyleForToken', function (e) {
                var n = e.types,
                  a = e.empty,
                  o = n.length,
                  r = t.getThemeDict(t.props);
                if (void 0 !== r) {
                  if (1 === o && 'plain' === n[0]) return a ? { display: 'inline-block' } : void 0;
                  if (1 === o && !a) return r[n[0]];
                  var l = a ? { display: 'inline-block' } : {},
                    c = n.map(function (e) {
                      return r[e];
                    });
                  return Object.assign.apply(Object, [l].concat(c));
                }
              }),
              ge(this, 'getTokenProps', function (e) {
                var n = e.key,
                  a = e.className,
                  o = e.style,
                  r = e.token,
                  l = be({}, Ne(e, ['key', 'className', 'style', 'token']), {
                    className: 'token ' + r.types.join(' '),
                    children: r.content,
                    style: t.getStyleForToken(r),
                    key: void 0,
                  });
                return (
                  void 0 !== o && (l.style = void 0 !== l.style ? be({}, l.style, o) : o),
                  void 0 !== n && (l.key = n),
                  a && (l.className += ' ' + a),
                  l
                );
              }),
              ge(this, 'tokenize', function (e, t, n, a) {
                var o = { code: t, grammar: n, language: a, tokens: [] };
                e.hooks.run('before-tokenize', o);
                var r = (o.tokens = e.tokenize(o.code, o.grammar, o.language));
                return e.hooks.run('after-tokenize', o), r;
              });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                a = e.code,
                o = e.children,
                r = this.getThemeDict(this.props),
                l = t.languages[n];
              return o({
                tokens: (function (e) {
                  for (var t = [[]], n = [e], a = [0], o = [e.length], r = 0, l = 0, c = [], s = [c]; l > -1; ) {
                    for (; (r = a[l]++) < o[l]; ) {
                      var i = void 0,
                        d = t[l],
                        m = n[l][r];
                      if (
                        ('string' == typeof m
                          ? ((d = l > 0 ? d : ['plain']), (i = m))
                          : ((d = ye(d, m.type)), m.alias && (d = ye(d, m.alias)), (i = m.content)),
                        'string' == typeof i)
                      ) {
                        var u = i.split(ve),
                          p = u.length;
                        c.push({ types: d, content: u[0] });
                        for (var f = 1; f < p; f++) Ee(c), s.push((c = [])), c.push({ types: d, content: u[f] });
                      } else l++, t.push(d), n.push(i), a.push(0), o.push(i.length);
                    }
                    l--, t.pop(), n.pop(), a.pop(), o.pop();
                  }
                  return Ee(c), s;
                })(void 0 !== l ? this.tokenize(t, a, l, n) : [a]),
                className: 'prism-code language-' + n,
                style: void 0 !== r ? r.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            t
          );
        })(a.Component),
        Le = {
          codeLine: 'codeLine_lJS_',
          codeLineNumber: 'codeLineNumber_Tfdd',
          codeLineContent: 'codeLineContent_feaV',
        };
      function Te(e) {
        let { line: t, classNames: n, showLineNumbers: o, getLineProps: r, getTokenProps: l } = e;
        1 === t.length && '\n' === t[0].content && (t[0].content = '');
        const c = r({ line: t, className: (0, d.Z)(n, o && Le.codeLine) }),
          s = t.map((e, t) => a.createElement('span', (0, u.Z)({ key: t }, l({ token: e, key: t }))));
        return a.createElement(
          'span',
          c,
          o
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement('span', { className: Le.codeLineNumber }),
                a.createElement('span', { className: Le.codeLineContent }, s)
              )
            : s,
          a.createElement('br', null)
        );
      }
      const Ze = {
        copyButtonCopied: 'copyButtonCopied_obH4',
        copyButtonIcons: 'copyButtonIcons_eSgA',
        copyButtonIcon: 'copyButtonIcon_y97N',
        copyButtonSuccessIcon: 'copyButtonSuccessIcon_LjdS',
      };
      function _e(e) {
        let { code: t, className: n } = e;
        const [o, r] = (0, a.useState)(!1),
          l = (0, a.useRef)(void 0),
          c = (0, a.useCallback)(() => {
            !(function (e, { target: t = document.body } = {}) {
              const n = document.createElement('textarea'),
                a = document.activeElement;
              (n.value = e),
                n.setAttribute('readonly', ''),
                (n.style.contain = 'strict'),
                (n.style.position = 'absolute'),
                (n.style.left = '-9999px'),
                (n.style.fontSize = '12pt');
              const o = document.getSelection();
              let r = !1;
              o.rangeCount > 0 && (r = o.getRangeAt(0)),
                t.append(n),
                n.select(),
                (n.selectionStart = 0),
                (n.selectionEnd = e.length);
              let l = !1;
              try {
                l = document.execCommand('copy');
              } catch {}
              n.remove(), r && (o.removeAllRanges(), o.addRange(r)), a && a.focus();
            })(t),
              r(!0),
              (l.current = window.setTimeout(() => {
                r(!1);
              }, 1e3));
          }, [t]);
        return (
          (0, a.useEffect)(() => () => window.clearTimeout(l.current), []),
          a.createElement(
            'button',
            {
              type: 'button',
              'aria-label': o
                ? (0, p.I)({
                    id: 'theme.CodeBlock.copied',
                    message: 'Copied',
                    description: 'The copied button label on code blocks',
                  })
                : (0, p.I)({
                    id: 'theme.CodeBlock.copyButtonAriaLabel',
                    message: 'Copy code to clipboard',
                    description: 'The ARIA label for copy code blocks button',
                  }),
              title: (0, p.I)({
                id: 'theme.CodeBlock.copy',
                message: 'Copy',
                description: 'The copy button label on code blocks',
              }),
              className: (0, d.Z)('clean-btn', n, Ze.copyButton, o && Ze.copyButtonCopied),
              onClick: c,
            },
            a.createElement(
              'span',
              { className: Ze.copyButtonIcons, 'aria-hidden': 'true' },
              a.createElement(
                'svg',
                { className: Ze.copyButtonIcon, viewBox: '0 0 24 24' },
                a.createElement('path', {
                  d: 'M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z',
                })
              ),
              a.createElement(
                'svg',
                { className: Ze.copyButtonSuccessIcon, viewBox: '0 0 24 24' },
                a.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
              )
            )
          )
        );
      }
      const we = { wordWrapButtonIcon: 'wordWrapButtonIcon_Bwma', wordWrapButtonEnabled: 'wordWrapButtonEnabled_EoeP' };
      function Be(e) {
        let { className: t, onClick: n, isEnabled: o } = e;
        const r = (0, p.I)({
          id: 'theme.CodeBlock.wordWrapToggle',
          message: 'Toggle word wrap',
          description: 'The title attribute for toggle word wrapping button of code block lines',
        });
        return a.createElement(
          'button',
          {
            type: 'button',
            onClick: n,
            className: (0, d.Z)('clean-btn', t, o && we.wordWrapButtonEnabled),
            'aria-label': r,
            title: r,
          },
          a.createElement(
            'svg',
            { className: we.wordWrapButtonIcon, viewBox: '0 0 24 24', 'aria-hidden': 'true' },
            a.createElement('path', {
              fill: 'currentColor',
              d: 'M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z',
            })
          )
        );
      }
      function xe(e) {
        let { children: t, className: n = '', metastring: o, title: r, showLineNumbers: l, language: c } = e;
        const {
            prism: { defaultLanguage: s, magicComments: i },
          } = (0, K.L)(),
          m =
            c ??
            (function (e) {
              const t = e.split(' ').find((e) => e.startsWith('language-'));
              return t?.replace(/language-/, '');
            })(n) ??
            s,
          p = ee(),
          f = (function () {
            const [e, t] = (0, a.useState)(!1),
              [n, o] = (0, a.useState)(!1),
              r = (0, a.useRef)(null),
              l = (0, a.useCallback)(() => {
                const n = r.current.querySelector('code');
                e
                  ? n.removeAttribute('style')
                  : ((n.style.whiteSpace = 'pre-wrap'), (n.style.overflowWrap = 'anywhere')),
                  t((e) => !e);
              }, [r, e]),
              c = (0, a.useCallback)(() => {
                const { scrollWidth: e, clientWidth: t } = r.current,
                  n = e > t || r.current.querySelector('code').hasAttribute('style');
                o(n);
              }, [r]);
            return (
              pe(r, c),
              (0, a.useEffect)(() => {
                c();
              }, [e, c]),
              (0, a.useEffect)(
                () => (
                  window.addEventListener('resize', c, { passive: !0 }),
                  () => {
                    window.removeEventListener('resize', c);
                  }
                ),
                [c]
              ),
              { codeBlockRef: r, isEnabled: e, isCodeScrollable: n, toggle: l }
            );
          })(),
          h =
            (function (e) {
              return e?.match(ae)?.groups.title ?? '';
            })(o) || r,
          { lineClassNames: g, code: b } = ce(t, { metastring: o, language: m, magicComments: i }),
          v =
            l ??
            (function (e) {
              return Boolean(e?.includes('showLineNumbers'));
            })(o);
        return a.createElement(
          ie,
          { as: 'div', className: (0, d.Z)(n, m && !n.includes(`language-${m}`) && `language-${m}`) },
          h && a.createElement('div', { className: de.codeBlockTitle }, h),
          a.createElement(
            'div',
            { className: de.codeBlockContent },
            a.createElement(Ce, (0, u.Z)({}, he, { theme: p, code: b, language: m ?? 'text' }), (e) => {
              let { className: t, tokens: n, getLineProps: o, getTokenProps: r } = e;
              return a.createElement(
                'pre',
                { tabIndex: 0, ref: f.codeBlockRef, className: (0, d.Z)(t, de.codeBlock, 'thin-scrollbar') },
                a.createElement(
                  'code',
                  { className: (0, d.Z)(de.codeBlockLines, v && de.codeBlockLinesWithNumbering) },
                  n.map((e, t) =>
                    a.createElement(Te, {
                      key: t,
                      line: e,
                      getLineProps: o,
                      getTokenProps: r,
                      classNames: g[t],
                      showLineNumbers: v,
                    })
                  )
                )
              );
            }),
            a.createElement(
              'div',
              { className: de.buttonGroup },
              (f.isEnabled || f.isCodeScrollable) &&
                a.createElement(Be, { className: de.codeButton, onClick: () => f.toggle(), isEnabled: f.isEnabled }),
              a.createElement(_e, { className: de.codeButton, code: b })
            )
          )
        );
      }
      function Oe(e) {
        let { children: t, ...n } = e;
        const o = (0, Q.Z)(),
          r = (function (e) {
            return a.Children.toArray(e).some((e) => (0, a.isValidElement)(e)) ? e : Array.isArray(e) ? e.join('') : e;
          })(t),
          l = 'string' == typeof r ? xe : me;
        return a.createElement(l, (0, u.Z)({ key: String(o) }, n), r);
      }
      var He = n(86043);
      const Ae = {
        details: 'details_lb9f',
        isBrowser: 'isBrowser_bmU9',
        collapsibleContent: 'collapsibleContent_i85q',
      };
      function je(e) {
        return !!e && ('SUMMARY' === e.tagName || je(e.parentElement));
      }
      function Ie(e, t) {
        return !!e && (e === t || Ie(e.parentElement, t));
      }
      function Se(e) {
        let { summary: t, children: n, ...o } = e;
        const r = (0, Q.Z)(),
          l = (0, a.useRef)(null),
          { collapsed: c, setCollapsed: s } = (0, He.u)({ initialState: !o.open }),
          [i, m] = (0, a.useState)(o.open);
        return a.createElement(
          'details',
          (0, u.Z)({}, o, {
            ref: l,
            open: i,
            'data-collapsed': c,
            className: (0, d.Z)(Ae.details, r && Ae.isBrowser, o.className),
            onMouseDown: (e) => {
              je(e.target) && e.detail > 1 && e.preventDefault();
            },
            onClick: (e) => {
              e.stopPropagation();
              const t = e.target;
              je(t) && Ie(t, l.current) && (e.preventDefault(), c ? (s(!1), m(!0)) : s(!0));
            },
          }),
          t ?? a.createElement('summary', null, 'Details'),
          a.createElement(
            He.z,
            {
              lazy: !1,
              collapsed: c,
              disableSSRStyle: !0,
              onCollapseTransitionEnd: (e) => {
                s(e), m(!e);
              },
            },
            a.createElement('div', { className: Ae.collapsibleContent }, n)
          )
        );
      }
      const Me = { details: 'details_b_Ee' },
        Pe = 'alert alert--info';
      function Ue(e) {
        let { ...t } = e;
        return a.createElement(Se, (0, u.Z)({}, t, { className: (0, d.Z)(Pe, Me.details, t.className) }));
      }
      function ze(e) {
        return a.createElement(G.Z, e);
      }
      const Ve = { containsTaskList: 'containsTaskList_mC6p' };
      const De = { img: 'img_ev3q' };
      const Re = {
        admonition: 'admonition_LlT9',
        admonitionHeading: 'admonitionHeading_tbUL',
        admonitionIcon: 'admonitionIcon_kALy',
        admonitionContent: 'admonitionContent_S0QG',
      };
      const We = {
          note: {
            infimaClassName: 'secondary',
            iconComponent: function () {
              return a.createElement(
                'svg',
                { viewBox: '0 0 14 16' },
                a.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z',
                })
              );
            },
            label: a.createElement(
              p.Z,
              { id: 'theme.admonition.note', description: 'The default label used for the Note admonition (:::note)' },
              'note'
            ),
          },
          tip: {
            infimaClassName: 'success',
            iconComponent: function () {
              return a.createElement(
                'svg',
                { viewBox: '0 0 12 16' },
                a.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z',
                })
              );
            },
            label: a.createElement(
              p.Z,
              { id: 'theme.admonition.tip', description: 'The default label used for the Tip admonition (:::tip)' },
              'tip'
            ),
          },
          danger: {
            infimaClassName: 'danger',
            iconComponent: function () {
              return a.createElement(
                'svg',
                { viewBox: '0 0 12 16' },
                a.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z',
                })
              );
            },
            label: a.createElement(
              p.Z,
              {
                id: 'theme.admonition.danger',
                description: 'The default label used for the Danger admonition (:::danger)',
              },
              'danger'
            ),
          },
          info: {
            infimaClassName: 'info',
            iconComponent: function () {
              return a.createElement(
                'svg',
                { viewBox: '0 0 14 16' },
                a.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z',
                })
              );
            },
            label: a.createElement(
              p.Z,
              { id: 'theme.admonition.info', description: 'The default label used for the Info admonition (:::info)' },
              'info'
            ),
          },
          caution: {
            infimaClassName: 'warning',
            iconComponent: function () {
              return a.createElement(
                'svg',
                { viewBox: '0 0 16 16' },
                a.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z',
                })
              );
            },
            label: a.createElement(
              p.Z,
              {
                id: 'theme.admonition.caution',
                description: 'The default label used for the Caution admonition (:::caution)',
              },
              'caution'
            ),
          },
        },
        $e = { secondary: 'note', important: 'info', success: 'tip', warning: 'danger' };
      function Fe(e) {
        const { mdxAdmonitionTitle: t, rest: n } = (function (e) {
          const t = a.Children.toArray(e),
            n = t.find((e) => a.isValidElement(e) && 'mdxAdmonitionTitle' === e.props?.mdxType),
            o = a.createElement(
              a.Fragment,
              null,
              t.filter((e) => e !== n)
            );
          return { mdxAdmonitionTitle: n, rest: o };
        })(e.children);
        return { ...e, title: e.title ?? t, children: n };
      }
      const qe = {
        head: function (e) {
          const t = a.Children.map(e.children, (e) =>
            a.isValidElement(e)
              ? (function (e) {
                  if (e.props?.mdxType && e.props.originalType) {
                    const { mdxType: t, originalType: n, ...o } = e.props;
                    return a.createElement(e.props.originalType, o);
                  }
                  return e;
                })(e)
              : e
          );
          return a.createElement(J.Z, e, t);
        },
        code: function (e) {
          const t = [
            'a',
            'abbr',
            'b',
            'br',
            'button',
            'cite',
            'code',
            'del',
            'dfn',
            'em',
            'i',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'object',
            'output',
            'q',
            'ruby',
            's',
            'small',
            'span',
            'strong',
            'sub',
            'sup',
            'time',
            'u',
            'var',
            'wbr',
          ];
          return a.Children.toArray(e.children).every(
            (e) =>
              ('string' == typeof e && !e.includes('\n')) || ((0, a.isValidElement)(e) && t.includes(e.props?.mdxType))
          )
            ? a.createElement('code', e)
            : a.createElement(Oe, e);
        },
        a: function (e) {
          return a.createElement(f.Z, e);
        },
        pre: function (e) {
          return a.createElement(
            Oe,
            (0, a.isValidElement)(e.children) && 'code' === e.children.props?.originalType ? e.children.props : { ...e }
          );
        },
        details: function (e) {
          const t = a.Children.toArray(e.children),
            n = t.find((e) => a.isValidElement(e) && 'summary' === e.props?.mdxType),
            o = a.createElement(
              a.Fragment,
              null,
              t.filter((e) => e !== n)
            );
          return a.createElement(Ue, (0, u.Z)({}, e, { summary: n }), o);
        },
        ul: function (e) {
          return a.createElement(
            'ul',
            (0, u.Z)({}, e, {
              className: ((t = e.className), (0, d.Z)(t, t?.includes('contains-task-list') && Ve.containsTaskList)),
            })
          );
          var t;
        },
        img: function (e) {
          return a.createElement(
            'img',
            (0, u.Z)({ loading: 'lazy' }, e, { className: ((t = e.className), (0, d.Z)(t, De.img)) })
          );
          var t;
        },
        h1: (e) => a.createElement(ze, (0, u.Z)({ as: 'h1' }, e)),
        h2: (e) => a.createElement(ze, (0, u.Z)({ as: 'h2' }, e)),
        h3: (e) => a.createElement(ze, (0, u.Z)({ as: 'h3' }, e)),
        h4: (e) => a.createElement(ze, (0, u.Z)({ as: 'h4' }, e)),
        h5: (e) => a.createElement(ze, (0, u.Z)({ as: 'h5' }, e)),
        h6: (e) => a.createElement(ze, (0, u.Z)({ as: 'h6' }, e)),
        admonition: function (e) {
          const { children: t, type: n, title: o, icon: r } = Fe(e),
            l = (function (e) {
              const t = $e[e] ?? e,
                n = We[t];
              return (
                n ||
                (console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),
                We.info)
              );
            })(n),
            c = o ?? l.label,
            { iconComponent: s } = l,
            i = r ?? a.createElement(s, null);
          return a.createElement(
            'div',
            {
              className: (0, d.Z)(
                y.k.common.admonition,
                y.k.common.admonitionType(e.type),
                'alert',
                `alert--${l.infimaClassName}`,
                Re.admonition
              ),
            },
            a.createElement(
              'div',
              { className: Re.admonitionHeading },
              a.createElement('span', { className: Re.admonitionIcon }, i),
              c
            ),
            a.createElement('div', { className: Re.admonitionContent }, t)
          );
        },
        mermaid: () => null,
      };
      function Ge(e) {
        let { children: t } = e;
        return a.createElement(Y.Zo, { components: qe }, t);
      }
      function Ye(e) {
        let { children: t } = e;
        const n = (function () {
          const { metadata: e, frontMatter: t, contentTitle: n } = s();
          return t.hide_title || void 0 !== n ? null : e.title;
        })();
        return a.createElement(
          'div',
          { className: (0, d.Z)(y.k.docs.docMarkdown, 'markdown') },
          n && a.createElement('header', null, a.createElement(G.Z, { as: 'h1' }, n)),
          a.createElement(Ge, null, t)
        );
      }
      var Je = n(52802),
        Qe = n(48596),
        Xe = n(44996);
      function Ke(e) {
        return a.createElement(
          'svg',
          (0, u.Z)({ viewBox: '0 0 24 24' }, e),
          a.createElement('path', {
            d: 'M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z',
            fill: 'currentColor',
          })
        );
      }
      const et = { breadcrumbHomeIcon: 'breadcrumbHomeIcon_YNFT' };
      function tt() {
        const e = (0, Xe.Z)('/');
        return a.createElement(
          'li',
          { className: 'breadcrumbs__item' },
          a.createElement(
            f.Z,
            {
              'aria-label': (0, p.I)({
                id: 'theme.docs.breadcrumbs.home',
                message: 'Home page',
                description: 'The ARIA label for the home page in the breadcrumbs',
              }),
              className: 'breadcrumbs__link',
              href: e,
            },
            a.createElement(Ke, { className: et.breadcrumbHomeIcon })
          )
        );
      }
      const nt = { breadcrumbsContainer: 'breadcrumbsContainer_Z_bl' };
      function at(e) {
        let { children: t, href: n, isLast: o } = e;
        const r = 'breadcrumbs__link';
        return o
          ? a.createElement('span', { className: r, itemProp: 'name' }, t)
          : n
          ? a.createElement(
              f.Z,
              { className: r, href: n, itemProp: 'item' },
              a.createElement('span', { itemProp: 'name' }, t)
            )
          : a.createElement('span', { className: r }, t);
      }
      function ot(e) {
        let { children: t, active: n, index: o, addMicrodata: r } = e;
        return a.createElement(
          'li',
          (0, u.Z)({}, r && { itemScope: !0, itemProp: 'itemListElement', itemType: 'https://schema.org/ListItem' }, {
            className: (0, d.Z)('breadcrumbs__item', { 'breadcrumbs__item--active': n }),
          }),
          t,
          a.createElement('meta', { itemProp: 'position', content: String(o + 1) })
        );
      }
      function rt() {
        const e = (0, Je.s1)(),
          t = (0, Qe.Ns)();
        return e
          ? a.createElement(
              'nav',
              {
                className: (0, d.Z)(y.k.docs.docBreadcrumbs, nt.breadcrumbsContainer),
                'aria-label': (0, p.I)({
                  id: 'theme.docs.breadcrumbs.navAriaLabel',
                  message: 'Breadcrumbs',
                  description: 'The ARIA label for the breadcrumbs',
                }),
              },
              a.createElement(
                'ul',
                { className: 'breadcrumbs', itemScope: !0, itemType: 'https://schema.org/BreadcrumbList' },
                t && a.createElement(tt, null),
                e.map((t, n) => {
                  const o = n === e.length - 1;
                  return a.createElement(
                    ot,
                    { key: n, active: o, index: n, addMicrodata: !!t.href },
                    a.createElement(at, { href: t.href, isLast: o }, t.label)
                  );
                })
              )
            )
          : null;
      }
      const lt = { docItemContainer: 'docItemContainer_Djhp', docItemCol: 'docItemCol_VOVn' };
      function ct(e) {
        let { children: t } = e;
        const n = (function () {
          const { frontMatter: e, toc: t } = s(),
            n = (0, m.i)(),
            o = e.hide_table_of_contents,
            r = !o && t.length > 0;
          return {
            hidden: o,
            mobile: r ? a.createElement($, null) : void 0,
            desktop: !r || ('desktop' !== n && 'ssr' !== n) ? void 0 : a.createElement(q, null),
          };
        })();
        return a.createElement(
          'div',
          { className: 'row' },
          a.createElement(
            'div',
            { className: (0, d.Z)('col', !n.hidden && lt.docItemCol) },
            a.createElement(_, null),
            a.createElement(
              'div',
              { className: lt.docItemContainer },
              a.createElement(
                'article',
                null,
                a.createElement(rt, null),
                a.createElement(w, null),
                n.mobile,
                a.createElement(Ye, null, t),
                a.createElement(D, null)
              ),
              a.createElement(b, null)
            )
          ),
          n.desktop && a.createElement('div', { className: 'col col--3' }, n.desktop)
        );
      }
      function st(e) {
        const t = `docs-doc-id-${e.content.metadata.unversionedId}`,
          n = e.content;
        return a.createElement(
          c,
          { content: e.content },
          a.createElement(
            o.FG,
            { className: t },
            a.createElement(i, null),
            a.createElement(ct, null, a.createElement(n, null))
          )
        );
      }
    },
    92503: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => d });
      var a = n(87462),
        o = n(67294),
        r = n(86010),
        l = n(95999),
        c = n(86668),
        s = n(39960);
      const i = {
        anchorWithStickyNavbar: 'anchorWithStickyNavbar_LWe7',
        anchorWithHideOnScrollNavbar: 'anchorWithHideOnScrollNavbar_WYt5',
      };
      function d(e) {
        let { as: t, id: n, ...d } = e;
        const {
          navbar: { hideOnScroll: m },
        } = (0, c.L)();
        if ('h1' === t || !n) return o.createElement(t, (0, a.Z)({}, d, { id: void 0 }));
        const u = (0, l.I)(
          {
            id: 'theme.common.headingLinkTitle',
            message: 'Direct link to {heading}',
            description: 'Title for link to heading',
          },
          { heading: 'string' == typeof d.children ? d.children : n }
        );
        return o.createElement(
          t,
          (0, a.Z)({}, d, {
            className: (0, r.Z)('anchor', m ? i.anchorWithHideOnScrollNavbar : i.anchorWithStickyNavbar, d.className),
            id: n,
          }),
          d.children,
          o.createElement(s.Z, { className: 'hash-link', to: `#${n}`, 'aria-label': u, title: u }, '\u200b')
        );
      }
    },
    69286: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => u });
      var a = n(67294),
        o = n(86010),
        r = n(86043),
        l = n(93743),
        c = n(87462),
        s = n(95999);
      const i = {
        tocCollapsibleButton: 'tocCollapsibleButton_TO0P',
        tocCollapsibleButtonExpanded: 'tocCollapsibleButtonExpanded_MG3E',
      };
      function d(e) {
        let { collapsed: t, ...n } = e;
        return a.createElement(
          'button',
          (0, c.Z)({ type: 'button' }, n, {
            className: (0, o.Z)('clean-btn', i.tocCollapsibleButton, !t && i.tocCollapsibleButtonExpanded, n.className),
          }),
          a.createElement(
            s.Z,
            {
              id: 'theme.TOCCollapsible.toggleButtonLabel',
              description: 'The label used by the button on the collapsible TOC component',
            },
            'On this page'
          )
        );
      }
      const m = {
        tocCollapsible: 'tocCollapsible_ETCw',
        tocCollapsibleContent: 'tocCollapsibleContent_vkbj',
        tocCollapsibleExpanded: 'tocCollapsibleExpanded_sAul',
      };
      function u(e) {
        let { toc: t, className: n, minHeadingLevel: c, maxHeadingLevel: s } = e;
        const { collapsed: i, toggleCollapsed: u } = (0, r.u)({ initialState: !0 });
        return a.createElement(
          'div',
          { className: (0, o.Z)(m.tocCollapsible, !i && m.tocCollapsibleExpanded, n) },
          a.createElement(d, { collapsed: i, onClick: u }),
          a.createElement(
            r.z,
            { lazy: !0, className: m.tocCollapsibleContent, collapsed: i },
            a.createElement(l.Z, { toc: t, minHeadingLevel: c, maxHeadingLevel: s })
          )
        );
      }
    },
    93743: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => f });
      var a = n(87462),
        o = n(67294),
        r = n(86668);
      function l(e) {
        const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
          n = Array(7).fill(-1);
        t.forEach((e, t) => {
          const a = n.slice(2, e.level);
          (e.parentIndex = Math.max(...a)), (n[e.level] = t);
        });
        const a = [];
        return (
          t.forEach((e) => {
            const { parentIndex: n, ...o } = e;
            n >= 0 ? t[n].children.push(o) : a.push(o);
          }),
          a
        );
      }
      function c(e) {
        let { toc: t, minHeadingLevel: n, maxHeadingLevel: a } = e;
        return t.flatMap((e) => {
          const t = c({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: a });
          return (function (e) {
            return e.level >= n && e.level <= a;
          })(e)
            ? [{ ...e, children: t }]
            : t;
        });
      }
      function s(e) {
        const t = e.getBoundingClientRect();
        return t.top === t.bottom ? s(e.parentNode) : t;
      }
      function i(e, t) {
        let { anchorTopOffset: n } = t;
        const a = e.find((e) => s(e).top >= n);
        if (a) {
          return (function (e) {
            return e.top > 0 && e.bottom < window.innerHeight / 2;
          })(s(a))
            ? a
            : e[e.indexOf(a) - 1] ?? null;
        }
        return e[e.length - 1] ?? null;
      }
      function d() {
        const e = (0, o.useRef)(0),
          {
            navbar: { hideOnScroll: t },
          } = (0, r.L)();
        return (
          (0, o.useEffect)(() => {
            e.current = t ? 0 : document.querySelector('.navbar').clientHeight;
          }, [t]),
          e
        );
      }
      function m(e) {
        const t = (0, o.useRef)(void 0),
          n = d();
        (0, o.useEffect)(() => {
          if (!e) return () => {};
          const { linkClassName: a, linkActiveClassName: o, minHeadingLevel: r, maxHeadingLevel: l } = e;
          function c() {
            const e = (function (e) {
                return Array.from(document.getElementsByClassName(e));
              })(a),
              c = (function (e) {
                let { minHeadingLevel: t, maxHeadingLevel: n } = e;
                const a = [];
                for (let o = t; o <= n; o += 1) a.push(`h${o}.anchor`);
                return Array.from(document.querySelectorAll(a.join()));
              })({ minHeadingLevel: r, maxHeadingLevel: l }),
              s = i(c, { anchorTopOffset: n.current }),
              d = e.find(
                (e) =>
                  s &&
                  s.id ===
                    (function (e) {
                      return decodeURIComponent(e.href.substring(e.href.indexOf('#') + 1));
                    })(e)
              );
            e.forEach((e) => {
              !(function (e, n) {
                n
                  ? (t.current && t.current !== e && t.current.classList.remove(o), e.classList.add(o), (t.current = e))
                  : e.classList.remove(o);
              })(e, e === d);
            });
          }
          return (
            document.addEventListener('scroll', c),
            document.addEventListener('resize', c),
            c(),
            () => {
              document.removeEventListener('scroll', c), document.removeEventListener('resize', c);
            }
          );
        }, [e, n]);
      }
      function u(e) {
        let { toc: t, className: n, linkClassName: a, isChild: r } = e;
        return t.length
          ? o.createElement(
              'ul',
              { className: r ? void 0 : n },
              t.map((e) =>
                o.createElement(
                  'li',
                  { key: e.id },
                  o.createElement('a', {
                    href: `#${e.id}`,
                    className: a ?? void 0,
                    dangerouslySetInnerHTML: { __html: e.value },
                  }),
                  o.createElement(u, { isChild: !0, toc: e.children, className: n, linkClassName: a })
                )
              )
            )
          : null;
      }
      const p = o.memo(u);
      function f(e) {
        let {
          toc: t,
          className: n = 'table-of-contents table-of-contents__left-border',
          linkClassName: s = 'table-of-contents__link',
          linkActiveClassName: i,
          minHeadingLevel: d,
          maxHeadingLevel: u,
          ...f
        } = e;
        const h = (0, r.L)(),
          g = d ?? h.tableOfContents.minHeadingLevel,
          b = u ?? h.tableOfContents.maxHeadingLevel,
          v = (function (e) {
            let { toc: t, minHeadingLevel: n, maxHeadingLevel: a } = e;
            return (0, o.useMemo)(() => c({ toc: l(t), minHeadingLevel: n, maxHeadingLevel: a }), [t, n, a]);
          })({ toc: t, minHeadingLevel: g, maxHeadingLevel: b });
        return (
          m(
            (0, o.useMemo)(() => {
              if (s && i) return { linkClassName: s, linkActiveClassName: i, minHeadingLevel: g, maxHeadingLevel: b };
            }, [s, i, g, b])
          ),
          o.createElement(p, (0, a.Z)({ toc: v, className: n, linkClassName: s }, f))
        );
      }
    },
    39407: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => d });
      var a = n(87462),
        o = n(67294),
        r = n(86010),
        l = n(93743);
      const c = { tableOfContents: 'tableOfContents_bqdL', docItemContainer: 'docItemContainer_F8PC' },
        s = 'table-of-contents__link toc-highlight',
        i = 'table-of-contents__link--active';
      function d(e) {
        let { className: t, ...n } = e;
        return o.createElement(
          'div',
          { className: (0, r.Z)(c.tableOfContents, 'thin-scrollbar', t) },
          o.createElement(l.Z, (0, a.Z)({}, n, { linkClassName: s, linkActiveClassName: i }))
        );
      }
    },
    74477: (e, t, n) => {
      'use strict';
      n.d(t, { E: () => c, q: () => l });
      var a = n(67294),
        o = n(902);
      const r = a.createContext(null);
      function l(e) {
        let { children: t, version: n } = e;
        return a.createElement(r.Provider, { value: n }, t);
      }
      function c() {
        const e = (0, a.useContext)(r);
        if (null === e) throw new o.i6('DocsVersionProvider');
        return e;
      }
    },
    87594: (e, t) => {
      function n(e) {
        let t,
          n = [];
        for (let a of e.split(',').map((e) => e.trim()))
          if (/^-?\d+$/.test(a)) n.push(parseInt(a, 10));
          else if ((t = a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))) {
            let [e, a, o, r] = t;
            if (a && r) {
              (a = parseInt(a)), (r = parseInt(r));
              const e = a < r ? 1 : -1;
              ('-' !== o && '..' !== o && '\u2025' !== o) || (r += e);
              for (let t = a; t !== r; t += e) n.push(t);
            }
          }
        return n;
      }
      (t.default = n), (e.exports = n);
    },
  },
]);
