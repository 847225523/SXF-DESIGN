'use strict';
(self.webpackChunkSXF_DESIGN = self.webpackChunkSXF_DESIGN || []).push([
  [923],
  {
    39842: function (f, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        });
      var u = e(30577),
        d = e.n(u),
        _ = e(50959),
        t = e(3989),
        i = e(56582),
        o = e(86558),
        m = e(99805),
        E = e(11527),
        D = {};
      function c() {
        var h = (0, t.pC)(),
          p = (0, _.useState)(!0),
          r = d()(p, 2),
          S = r[0],
          s = r[1],
          a = (0, _.useRef)(t.m8.location.pathname);
        return (
          (0, _.useEffect)(function () {
            return t.m8.listen(function (l) {
              l.location.pathname !== a.current &&
                ((a.current = l.location.pathname), s(!0), document.documentElement.scrollTo(0, 0));
            });
          }, []),
          (0, E.jsx)(i.D.Provider, {
            value: {
              pkg: {
                name: 'SXF-DESIGN',
                description: 'SXF\u7EC4\u4EF6\u5E93',
                version: '1.0.0',
                license: 'ISC',
                author: '',
              },
              entryExports: D,
              demos: o.DE,
              components: o.wx,
              locales: m.k,
              loading: S,
              setLoading: s,
              themeConfig: {
                title: 'SXF Design',
                footer:
                  'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
                prefersColor: { default: 'light', switch: !0 },
                name: 'SXF',
                carrier: 'dumi',
                hd: !0,
                rtl: !0,
                nav: [
                  { title: '\u6307\u5357', link: '/guide' },
                  { title: '\u7EC4\u4EF6', link: '/components/Button' },
                ],
              },
            },
            children: h,
          })
        );
      }
    },
  },
]);
