'use strict';
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [514, 972],
  {
    90606: (e, t, n) => {
      n.r(t), n.d(t, { default: () => L });
      var a = n(67294),
        o = n(86010),
        l = n(1944),
        r = n(35281),
        i = n(43320),
        c = n(52802),
        s = n(74477),
        d = n(1116),
        m = n(34510),
        u = n(95999),
        b = n(12466),
        p = n(85936);
      const h = { backToTopButton: 'backToTopButton_sjWU', backToTopButtonShow: 'backToTopButtonShow_xfvO' };
      function E() {
        const { shown: e, scrollToTop: t } = (function (e) {
          let { threshold: t } = e;
          const [n, o] = (0, a.useState)(!1),
            l = (0, a.useRef)(!1),
            { startScroll: r, cancelScroll: i } = (0, b.Ct)();
          return (
            (0, b.RF)((e, n) => {
              let { scrollY: a } = e;
              const r = n?.scrollY;
              r &&
                (l.current
                  ? (l.current = !1)
                  : a >= r
                  ? (i(), o(!1))
                  : a < t
                  ? o(!1)
                  : a + window.innerHeight < document.documentElement.scrollHeight && o(!0));
            }),
            (0, p.S)((e) => {
              e.location.hash && ((l.current = !0), o(!1));
            }),
            { shown: n, scrollToTop: () => r(0) }
          );
        })({ threshold: 300 });
        return a.createElement('button', {
          'aria-label': (0, u.I)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button',
          }),
          className: (0, o.Z)('clean-btn', r.k.common.backToTopButton, h.backToTopButton, e && h.backToTopButtonShow),
          type: 'button',
          onClick: t,
        });
      }
      var f = n(16550),
        v = n(68612),
        g = n(6023);
      const k = { expandButton: 'expandButton_m80_', expandButtonIcon: 'expandButtonIcon_BlDH' };
      function _(e) {
        let { toggleSidebar: t } = e;
        return a.createElement(
          'div',
          {
            className: k.expandButton,
            title: (0, u.I)({
              id: 'theme.docs.sidebar.expandButtonTitle',
              message: 'Expand sidebar',
              description: 'The ARIA label and title attribute for expand button of doc sidebar',
            }),
            'aria-label': (0, u.I)({
              id: 'theme.docs.sidebar.expandButtonAriaLabel',
              message: 'Expand sidebar',
              description: 'The ARIA label and title attribute for expand button of doc sidebar',
            }),
            tabIndex: 0,
            role: 'button',
            onKeyDown: t,
            onClick: t,
          },
          a.createElement(g.Z, { className: k.expandButtonIcon })
        );
      }
      const C = {
        docSidebarContainer: 'docSidebarContainer_b6E3',
        docSidebarContainerHidden: 'docSidebarContainerHidden_b3ry',
        sidebarViewport: 'sidebarViewport_Xe31',
      };
      function S(e) {
        let { children: t } = e;
        const n = (0, d.V)();
        return a.createElement(a.Fragment, { key: n?.name ?? 'noSidebar' }, t);
      }
      function I(e) {
        let { sidebar: t, hiddenSidebarContainer: n, setHiddenSidebarContainer: l } = e;
        const { pathname: i } = (0, f.TH)(),
          [c, s] = (0, a.useState)(!1),
          d = (0, a.useCallback)(() => {
            c && s(!1), l((e) => !e);
          }, [l, c]);
        return a.createElement(
          'aside',
          {
            className: (0, o.Z)(r.k.docs.docSidebarContainer, C.docSidebarContainer, n && C.docSidebarContainerHidden),
            onTransitionEnd: (e) => {
              e.currentTarget.classList.contains(C.docSidebarContainer) && n && s(!0);
            },
          },
          a.createElement(
            S,
            null,
            a.createElement(
              'div',
              { className: (0, o.Z)(C.sidebarViewport, c && C.sidebarViewportHidden) },
              a.createElement(v.Z, { sidebar: t, path: i, onCollapse: d, isHidden: c }),
              c && a.createElement(_, { toggleSidebar: d })
            )
          )
        );
      }
      const N = {
        docMainContainer: 'docMainContainer_gTbr',
        docMainContainerEnhanced: 'docMainContainerEnhanced_Uz_u',
        docItemWrapperEnhanced: 'docItemWrapperEnhanced_czyv',
      };
      function Z(e) {
        let { hiddenSidebarContainer: t, children: n } = e;
        const l = (0, d.V)();
        return a.createElement(
          'main',
          { className: (0, o.Z)(N.docMainContainer, (t || !l) && N.docMainContainerEnhanced) },
          a.createElement(
            'div',
            {
              className: (0, o.Z)(
                'container padding-top--md padding-bottom--lg',
                N.docItemWrapper,
                t && N.docItemWrapperEnhanced
              ),
            },
            n
          )
        );
      }
      const T = { docPage: 'docPage__5DB', docsWrapper: 'docsWrapper_BCFX' };
      function x(e) {
        let { children: t } = e;
        const n = (0, d.V)(),
          [o, l] = (0, a.useState)(!1);
        return a.createElement(
          m.Z,
          { wrapperClassName: T.docsWrapper },
          a.createElement(E, null),
          a.createElement(
            'div',
            { className: T.docPage },
            n && a.createElement(I, { sidebar: n.items, hiddenSidebarContainer: o, setHiddenSidebarContainer: l }),
            a.createElement(Z, { hiddenSidebarContainer: o }, t)
          )
        );
      }
      var B = n(4972),
        y = n(90197);
      function w(e) {
        const { versionMetadata: t } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(y.Z, { version: t.version, tag: (0, i.os)(t.pluginId, t.version) }),
          a.createElement(
            l.d,
            null,
            t.noIndex && a.createElement('meta', { name: 'robots', content: 'noindex, nofollow' })
          )
        );
      }
      function L(e) {
        const { versionMetadata: t } = e,
          n = (0, c.hI)(e);
        if (!n) return a.createElement(B.default, null);
        const { docElement: i, sidebarName: m, sidebarItems: u } = n;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(w, e),
          a.createElement(
            l.FG,
            { className: (0, o.Z)(r.k.wrapper.docsPages, r.k.page.docsDocPage, e.versionMetadata.className) },
            a.createElement(
              s.q,
              { version: t },
              a.createElement(d.b, { name: m, items: u }, a.createElement(x, null, i))
            )
          )
        );
      }
    },
    68612: (e, t, n) => {
      n.d(t, { Z: () => q });
      var a = n(67294),
        o = n(87524),
        l = n(86010),
        r = n(86668),
        i = n(21327),
        c = n(95999),
        s = n(6023);
      const d = {
        collapseSidebarButton: 'collapseSidebarButton_PEFL',
        collapseSidebarButtonIcon: 'collapseSidebarButtonIcon_kv0_',
      };
      function m(e) {
        let { onClick: t } = e;
        return a.createElement(
          'button',
          {
            type: 'button',
            title: (0, c.I)({
              id: 'theme.docs.sidebar.collapseButtonTitle',
              message: 'Collapse sidebar',
              description: 'The title attribute for collapse button of doc sidebar',
            }),
            'aria-label': (0, c.I)({
              id: 'theme.docs.sidebar.collapseButtonAriaLabel',
              message: 'Collapse sidebar',
              description: 'The title attribute for collapse button of doc sidebar',
            }),
            className: (0, l.Z)('button button--secondary button--outline', d.collapseSidebarButton),
            onClick: t,
          },
          a.createElement(s.Z, { className: d.collapseSidebarButtonIcon })
        );
      }
      var u = n(35281),
        b = n(59689),
        p = n(12466),
        h = n(87462),
        E = n(902);
      const f = Symbol('EmptyContext'),
        v = a.createContext(f);
      function g(e) {
        let { children: t } = e;
        const [n, o] = (0, a.useState)(null),
          l = (0, a.useMemo)(() => ({ expandedItem: n, setExpandedItem: o }), [n]);
        return a.createElement(v.Provider, { value: l }, t);
      }
      var k = n(86043),
        _ = n(52802),
        C = n(48596),
        S = n(39960),
        I = n(72389);
      function N(e) {
        let { categoryLabel: t, onClick: n } = e;
        return a.createElement('button', {
          'aria-label': (0, c.I)(
            {
              id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',
              message: "Toggle the collapsible sidebar category '{label}'",
              description: 'The ARIA label to toggle the collapsible sidebar category',
            },
            { label: t }
          ),
          type: 'button',
          className: 'clean-btn menu__caret',
          onClick: n,
        });
      }
      function Z(e) {
        let { item: t, onItemClick: n, activePath: o, level: i, index: c, ...s } = e;
        const { items: d, label: m, collapsible: b, className: p, href: g } = t,
          {
            docs: {
              sidebar: { autoCollapseCategories: Z },
            },
          } = (0, r.L)(),
          T = (function (e) {
            const t = (0, I.Z)();
            return (0, a.useMemo)(() => (e.href ? e.href : !t && e.collapsible ? (0, _.Wl)(e) : void 0), [e, t]);
          })(t),
          x = (0, _._F)(t, o),
          B = (0, C.Mg)(g, o),
          { collapsed: y, setCollapsed: w } = (0, k.u)({ initialState: () => !!b && !x && t.collapsed }),
          { expandedItem: L, setExpandedItem: A } = (function () {
            const e = (0, a.useContext)(v);
            if (e === f) throw new E.i6('DocSidebarItemsExpandedStateProvider');
            return e;
          })(),
          H = function (e) {
            void 0 === e && (e = !y), A(e ? null : c), w(e);
          };
        return (
          (function (e) {
            let { isActive: t, collapsed: n, updateCollapsed: o } = e;
            const l = (0, E.D9)(t);
            (0, a.useEffect)(() => {
              t && !l && n && o(!1);
            }, [t, l, n, o]);
          })({ isActive: x, collapsed: y, updateCollapsed: H }),
          (0, a.useEffect)(() => {
            b && null != L && L !== c && Z && w(!0);
          }, [b, L, c, w, Z]),
          a.createElement(
            'li',
            {
              className: (0, l.Z)(
                u.k.docs.docSidebarItemCategory,
                u.k.docs.docSidebarItemCategoryLevel(i),
                'menu__list-item',
                { 'menu__list-item--collapsed': y },
                p
              ),
            },
            a.createElement(
              'div',
              { className: (0, l.Z)('menu__list-item-collapsible', { 'menu__list-item-collapsible--active': B }) },
              a.createElement(
                S.Z,
                (0, h.Z)(
                  {
                    className: (0, l.Z)('menu__link', {
                      'menu__link--sublist': b,
                      'menu__link--sublist-caret': !g && b,
                      'menu__link--active': x,
                    }),
                    onClick: b
                      ? (e) => {
                          n?.(t), g ? H(!1) : (e.preventDefault(), H());
                        }
                      : () => {
                          n?.(t);
                        },
                    'aria-current': B ? 'page' : void 0,
                    'aria-expanded': b ? !y : void 0,
                    href: b ? T ?? '#' : T,
                  },
                  s
                ),
                m
              ),
              g &&
                b &&
                a.createElement(N, {
                  categoryLabel: m,
                  onClick: (e) => {
                    e.preventDefault(), H();
                  },
                })
            ),
            a.createElement(
              k.z,
              { lazy: !0, as: 'ul', className: 'menu__list', collapsed: y },
              a.createElement(M, { items: d, tabIndex: y ? -1 : 0, onItemClick: n, activePath: o, level: i + 1 })
            )
          )
        );
      }
      var T = n(13919),
        x = n(39471);
      const B = { menuExternalLink: 'menuExternalLink_NmtK' };
      function y(e) {
        let { item: t, onItemClick: n, activePath: o, level: r, index: i, ...c } = e;
        const { href: s, label: d, className: m, autoAddBaseUrl: b } = t,
          p = (0, _._F)(t, o),
          E = (0, T.Z)(s);
        return a.createElement(
          'li',
          {
            className: (0, l.Z)(u.k.docs.docSidebarItemLink, u.k.docs.docSidebarItemLinkLevel(r), 'menu__list-item', m),
            key: d,
          },
          a.createElement(
            S.Z,
            (0, h.Z)(
              {
                className: (0, l.Z)('menu__link', !E && B.menuExternalLink, { 'menu__link--active': p }),
                autoAddBaseUrl: b,
                'aria-current': p ? 'page' : void 0,
                to: s,
              },
              E && { onClick: n ? () => n(t) : void 0 },
              c
            ),
            d,
            !E && a.createElement(x.Z, null)
          )
        );
      }
      const w = { menuHtmlItem: 'menuHtmlItem_M9Kj' };
      function L(e) {
        let { item: t, level: n, index: o } = e;
        const { value: r, defaultStyle: i, className: c } = t;
        return a.createElement('li', {
          className: (0, l.Z)(
            u.k.docs.docSidebarItemLink,
            u.k.docs.docSidebarItemLinkLevel(n),
            i && [w.menuHtmlItem, 'menu__list-item'],
            c
          ),
          key: o,
          dangerouslySetInnerHTML: { __html: r },
        });
      }
      function A(e) {
        let { item: t, ...n } = e;
        switch (t.type) {
          case 'category':
            return a.createElement(Z, (0, h.Z)({ item: t }, n));
          case 'html':
            return a.createElement(L, (0, h.Z)({ item: t }, n));
          default:
            return a.createElement(y, (0, h.Z)({ item: t }, n));
        }
      }
      function H(e) {
        let { items: t, ...n } = e;
        return a.createElement(
          g,
          null,
          t.map((e, t) => a.createElement(A, (0, h.Z)({ key: t, item: e, index: t }, n)))
        );
      }
      const M = (0, a.memo)(H),
        F = { menu: 'menu_SIkG', menuWithAnnouncementBar: 'menuWithAnnouncementBar_GW3s' };
      function P(e) {
        let { path: t, sidebar: n, className: o } = e;
        const r = (function () {
          const { isActive: e } = (0, b.nT)(),
            [t, n] = (0, a.useState)(e);
          return (
            (0, p.RF)(
              (t) => {
                let { scrollY: a } = t;
                e && n(0 === a);
              },
              [e]
            ),
            e && t
          );
        })();
        return a.createElement(
          'nav',
          {
            'aria-label': (0, c.I)({
              id: 'theme.docs.sidebar.navAriaLabel',
              message: 'Docs sidebar',
              description: 'The ARIA label for the sidebar navigation',
            }),
            className: (0, l.Z)('menu thin-scrollbar', F.menu, r && F.menuWithAnnouncementBar, o),
          },
          a.createElement(
            'ul',
            { className: (0, l.Z)(u.k.docs.docSidebarMenu, 'menu__list') },
            a.createElement(M, { items: n, activePath: t, level: 1 })
          )
        );
      }
      const W = {
        sidebar: 'sidebar_njMd',
        sidebarWithHideableNavbar: 'sidebarWithHideableNavbar_wUlq',
        sidebarHidden: 'sidebarHidden_VK0M',
        sidebarLogo: 'sidebarLogo_isFc',
      };
      function D(e) {
        let { path: t, sidebar: n, onCollapse: o, isHidden: c } = e;
        const {
          navbar: { hideOnScroll: s },
          docs: {
            sidebar: { hideable: d },
          },
        } = (0, r.L)();
        return a.createElement(
          'div',
          { className: (0, l.Z)(W.sidebar, s && W.sidebarWithHideableNavbar, c && W.sidebarHidden) },
          s && a.createElement(i.Z, { tabIndex: -1, className: W.sidebarLogo }),
          a.createElement(P, { path: t, sidebar: n }),
          d && a.createElement(m, { onClick: o })
        );
      }
      const R = a.memo(D);
      var V = n(13102),
        z = n(72961);
      const U = (e) => {
        let { sidebar: t, path: n } = e;
        const o = (0, z.e)();
        return a.createElement(
          'ul',
          { className: (0, l.Z)(u.k.docs.docSidebarMenu, 'menu__list') },
          a.createElement(M, {
            items: t,
            activePath: n,
            onItemClick: (e) => {
              'category' === e.type && e.href && o.toggle(), 'link' === e.type && o.toggle();
            },
            level: 1,
          })
        );
      };
      function K(e) {
        return a.createElement(V.Zo, { component: U, props: e });
      }
      const j = a.memo(K);
      function q(e) {
        const t = (0, o.i)(),
          n = 'desktop' === t || 'ssr' === t,
          l = 'mobile' === t;
        return a.createElement(a.Fragment, null, n && a.createElement(R, e), l && a.createElement(j, e));
      }
    },
    6023: (e, t, n) => {
      n.d(t, { Z: () => l });
      var a = n(87462),
        o = n(67294);
      function l(e) {
        return o.createElement(
          'svg',
          (0, a.Z)({ width: '20', height: '20', 'aria-hidden': 'true' }, e),
          o.createElement(
            'g',
            { fill: '#7a7a7a' },
            o.createElement('path', {
              d: 'M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0',
            }),
            o.createElement('path', {
              d: 'M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0',
            })
          )
        );
      }
    },
    4972: (e, t, n) => {
      n.r(t), n.d(t, { default: () => i });
      var a = n(67294),
        o = n(95999),
        l = n(1944),
        r = n(34510);
      function i() {
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(l.d, { title: (0, o.I)({ id: 'theme.NotFound.title', message: 'Page Not Found' }) }),
          a.createElement(
            r.Z,
            null,
            a.createElement(
              'main',
              { className: 'container margin-vert--xl' },
              a.createElement(
                'div',
                { className: 'row' },
                a.createElement(
                  'div',
                  { className: 'col col--6 col--offset-3' },
                  a.createElement(
                    'h1',
                    { className: 'hero__title' },
                    a.createElement(
                      o.Z,
                      { id: 'theme.NotFound.title', description: 'The title of the 404 page' },
                      'Page Not Found'
                    )
                  ),
                  a.createElement(
                    'p',
                    null,
                    a.createElement(
                      o.Z,
                      { id: 'theme.NotFound.p1', description: 'The first paragraph of the 404 page' },
                      'We could not find what you were looking for.'
                    )
                  ),
                  a.createElement(
                    'p',
                    null,
                    a.createElement(
                      o.Z,
                      { id: 'theme.NotFound.p2', description: 'The 2nd paragraph of the 404 page' },
                      'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.'
                    )
                  )
                )
              )
            )
          )
        );
      }
    },
    74477: (e, t, n) => {
      n.d(t, { E: () => i, q: () => r });
      var a = n(67294),
        o = n(902);
      const l = a.createContext(null);
      function r(e) {
        let { children: t, version: n } = e;
        return a.createElement(l.Provider, { value: n }, t);
      }
      function i() {
        const e = (0, a.useContext)(l);
        if (null === e) throw new o.i6('DocsVersionProvider');
        return e;
      }
    },
  },
]);
