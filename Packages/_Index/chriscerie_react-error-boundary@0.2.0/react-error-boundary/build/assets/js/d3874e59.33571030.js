'use strict';
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [374],
  {
    52897: (e, t, a) => {
      a.r(t), a.d(t, { HomepageFeatures: () => d, default: () => g });
      var n = a(87462),
        r = a(39960),
        l = a(52263),
        s = a(34510),
        c = a(86010),
        i = a(67294);
      const o = {
          heroBanner: 'heroBanner_e1Bh',
          buttons: 'buttons_VwD3',
          features: 'features_WS6B',
          featureSvg: 'featureSvg_tqLR',
        },
        m = [
          {
            title: 'Easy to Use',
            description:
              'roact-error-boundary makes error handling easy. Error logging, reverting states, and displaying fallback components are all incredibly easy to implement.',
          },
          {
            title: 'Flexible',
            description:
              'Whether you want a single error boundary to handle errors in your entire app or multiple boundaries to handle errors in individual components, the granularity is up to you.',
          },
        ];
      function u(e) {
        let { image: t, title: a, description: n } = e;
        return i.createElement(
          'div',
          { className: (0, c.Z)('col col--4') },
          t &&
            i.createElement(
              'div',
              { className: 'text--center' },
              i.createElement('img', { className: o.featureSvg, alt: a, src: t })
            ),
          i.createElement(
            'div',
            { className: 'text--center padding-horiz--md' },
            i.createElement('h3', null, a),
            i.createElement('p', null, n)
          )
        );
      }
      function d() {
        return m
          ? i.createElement(
              'section',
              { className: o.features },
              i.createElement(
                'div',
                { className: 'container' },
                i.createElement(
                  'div',
                  { className: 'row' },
                  m.map((e, t) => i.createElement(u, (0, n.Z)({ key: t }, e)))
                )
              )
            )
          : null;
      }
      function E() {
        const { siteConfig: e } = (0, l.Z)();
        return i.createElement(
          'header',
          { className: (0, c.Z)('hero', o.heroBanner) },
          i.createElement(
            'div',
            { className: 'container' },
            i.createElement('h1', { className: 'hero__title' }, e.title),
            i.createElement('p', { className: 'hero__subtitle' }, e.tagline),
            i.createElement(
              'div',
              { className: o.buttons },
              i.createElement(
                r.Z,
                { className: 'button button--secondary button--lg', to: '/docs/intro' },
                'Get Started \u2192'
              )
            )
          )
        );
      }
      function g() {
        const { siteConfig: e, tagline: t } = (0, l.Z)();
        return i.createElement(
          s.Z,
          { title: e.title, description: t },
          i.createElement(E, null),
          i.createElement('main', null, i.createElement(d, null), i.createElement('div', { className: 'container' }))
        );
      }
    },
  },
]);
