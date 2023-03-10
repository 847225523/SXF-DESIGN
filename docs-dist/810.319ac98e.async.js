(self.webpackChunkSXF_DESIGN = self.webpackChunkSXF_DESIGN || []).push([
  [810],
  {
    61812: function (L, w, y) {
      'use strict';
      var R = y(3989),
        A = y(50959),
        p = y(40739);
      function j(a, e) {
        return C(a) || O(a, e) || _(a, e) || E();
      }
      function E() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function _(a, e) {
        if (a) {
          if (typeof a == 'string') return S(a, e);
          var t = Object.prototype.toString.call(a).slice(8, -1);
          if (
            (t === 'Object' && a.constructor && (t = a.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(a);
          if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return S(a, e);
        }
      }
      function S(a, e) {
        (e == null || e > a.length) && (e = a.length);
        for (var t = 0, n = new Array(e); t < e; t++) n[t] = a[t];
        return n;
      }
      function O(a, e) {
        var t =
          a == null
            ? null
            : (typeof Symbol != 'undefined' && a[Symbol.iterator]) || a['@@iterator'];
        if (t != null) {
          var n = [],
            i = !0,
            o = !1,
            u,
            d;
          try {
            for (
              t = t.call(a);
              !(i = (u = t.next()).done) && (n.push(u.value), !(e && n.length === e));
              i = !0
            );
          } catch (s) {
            (o = !0), (d = s);
          } finally {
            try {
              !i && t.return != null && t.return();
            } finally {
              if (o) throw d;
            }
          }
          return n;
        }
      }
      function C(a) {
        if (Array.isArray(a)) return a;
      }
      var N = {
          toString: function (e) {
            return typeof e.type == 'string' && e.type in this
              ? 'enum' in e
                ? this.enum(e)
                : this[e.type](e)
              : e.type
              ? this.getValidClassName(e) || e.type
              : 'const' in e
              ? e.const
              : 'oneOf' in e
              ? this.oneOf(e)
              : 'unknown';
          },
          string: function (e) {
            return e.type;
          },
          number: function (e) {
            return e.type;
          },
          boolean: function (e) {
            return e.type;
          },
          any: function (e) {
            return e.type;
          },
          object: function (e) {
            var t = this,
              n = [];
            return (
              Object.entries(e.properties || {}).forEach(function (i) {
                var o,
                  u = j(i, 2),
                  d = u[0],
                  s = u[1];
                n.push(
                  ''
                    .concat(d)
                    .concat(
                      (o = e.required) !== null && o !== void 0 && o.includes(d) ? '' : '?',
                      ': ',
                    )
                    .concat(s.type === 'object' ? 'object' : t.toString(s)),
                );
              }),
              n.length ? '{ '.concat(n.join('; '), ' }') : '{}'
            );
          },
          array: function (e) {
            if (e.items) {
              var t = this.getValidClassName(e.items);
              return t ? ''.concat(t, '[]') : ''.concat(this.toString(e.items), '[]');
            }
            return 'any[]';
          },
          element: function (e) {
            return '<'.concat(e.componentName, ' />');
          },
          function: function (e) {
            var t = this,
              n = e.signature;
            return ''
              .concat(n.isAsync ? 'async ' : '', '(')
              .concat(
                n.arguments
                  .map(function (i) {
                    return ''.concat(i.key, ': ').concat(t.toString(i));
                  })
                  .join(', '),
                ') => ',
              )
              .concat(this.toString(n.returnType));
          },
          dom: function (e) {
            return e.className || 'DOM';
          },
          enum: function (e) {
            return e.enum
              .map(function (t) {
                return JSON.stringify(t);
              })
              .join(' | ');
          },
          oneOf: function (e) {
            var t = this;
            return e.oneOf
              .map(function (n) {
                return t.getValidClassName(n) || t.toString(n);
              })
              .join(' | ');
          },
          getValidClassName: function (e) {
            return 'className' in e && typeof e.className == 'string' && e.className !== '__type'
              ? e.className
              : null;
          },
        },
        k = function (e) {
          var t = useState(function () {
              return N.toString(e);
            }),
            n = j(t, 2),
            i = n[0],
            o = n[1];
          return (
            useEffect(
              function () {
                o(N.toString(e));
              },
              [e],
            ),
            React.createElement('code', null, i)
          );
        },
        W = function (e) {
          var t,
            n = useRouteMeta(),
            i = n.frontmatter,
            o = useAtomAssets(),
            u = o.components,
            d = e.id || i.atomId,
            s = useIntl();
          if (!d) throw new Error('`id` properties if required for API component!');
          var r = u == null ? void 0 : u[d];
          return React.createElement(
            'div',
            { className: 'markdown' },
            React.createElement(
              Table,
              null,
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement('th', null, s.formatMessage({ id: 'api.component.name' })),
                  React.createElement(
                    'th',
                    null,
                    s.formatMessage({ id: 'api.component.description' }),
                  ),
                  React.createElement('th', null, s.formatMessage({ id: 'api.component.type' })),
                  React.createElement('th', null, s.formatMessage({ id: 'api.component.default' })),
                ),
              ),
              React.createElement(
                'tbody',
                null,
                r && (t = r.propsConfig) !== null && t !== void 0 && t.properties
                  ? Object.entries(r.propsConfig.properties).map(function (c) {
                      var l,
                        g = j(c, 2),
                        v = g[0],
                        m = g[1];
                      return React.createElement(
                        'tr',
                        { key: v },
                        React.createElement('td', null, v),
                        React.createElement('td', null, m.description || '--'),
                        React.createElement('td', null, React.createElement(k, m)),
                        React.createElement(
                          'td',
                          null,
                          React.createElement(
                            'code',
                            null,
                            (l = r.propsConfig.required) !== null && l !== void 0 && l.includes(v)
                              ? s.formatMessage({ id: 'api.component.required' })
                              : JSON.stringify(m.default) || '--',
                          ),
                        ),
                      );
                    })
                  : React.createElement(
                      'tr',
                      null,
                      React.createElement(
                        'td',
                        { colSpan: 4 },
                        s.formatMessage(
                          { id: 'api.component.'.concat(u ? 'not.found' : 'unavailable') },
                          { id: d },
                        ),
                      ),
                    ),
              ),
            ),
          );
        },
        D = null;
    },
    39663: function (L, w, y) {
      'use strict';
      var R = y(50959);
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (E) {
                for (var _ = 1; _ < arguments.length; _++) {
                  var S = arguments[_];
                  for (var O in S) Object.prototype.hasOwnProperty.call(S, O) && (E[O] = S[O]);
                }
                return E;
              }),
          A.apply(this, arguments)
        );
      }
      var p = function (_) {
          return React.createElement('span', A({ className: 'dumi-default-badge' }, _));
        },
        j = null;
    },
    40739: function (L, w, y) {
      'use strict';
      y.d(w, {
        Z: function () {
          return a;
        },
      });
      var R = y(30826),
        A = y.n(R),
        p = y(50959),
        j = ['children'];
      function E(e, t) {
        return N(e) || C(e, t) || S(e, t) || _();
      }
      function _() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function S(e, t) {
        if (e) {
          if (typeof e == 'string') return O(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (n === 'Object' && e.constructor && (n = e.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(e);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return O(e, t);
        }
      }
      function O(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function C(e, t) {
        var n =
          e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
        if (n != null) {
          var i = [],
            o = !0,
            u = !1,
            d,
            s;
          try {
            for (
              n = n.call(e);
              !(o = (d = n.next()).done) && (i.push(d.value), !(t && i.length === t));
              o = !0
            );
          } catch (r) {
            (u = !0), (s = r);
          } finally {
            try {
              !o && n.return != null && n.return();
            } finally {
              if (u) throw s;
            }
          }
          return i;
        }
      }
      function N(e) {
        if (Array.isArray(e)) return e;
      }
      function k(e, t) {
        if (e == null) return {};
        var n = W(e, t),
          i,
          o;
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (o = 0; o < u.length; o++)
            (i = u[o]),
              !(t.indexOf(i) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, i) &&
                (n[i] = e[i]);
        }
        return n;
      }
      function W(e, t) {
        if (e == null) return {};
        var n = {},
          i = Object.keys(e),
          o,
          u;
        for (u = 0; u < i.length; u++) (o = i[u]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
        return n;
      }
      var D = function (t) {
          var n = t.children,
            i = k(t, j),
            o = (0, p.useRef)(null),
            u = (0, p.useState)(!1),
            d = E(u, 2),
            s = d[0],
            r = d[1],
            c = (0, p.useState)(!1),
            l = E(c, 2),
            g = l[0],
            v = l[1];
          return (
            (0, p.useEffect)(function () {
              var m = o.current;
              if (m) {
                var b = A()(function () {
                  r(m.scrollLeft > 0), v(m.scrollLeft < m.scrollWidth - m.offsetWidth);
                }, 100);
                return (
                  b(),
                  m.addEventListener('scroll', b),
                  window.addEventListener('resize', b),
                  function () {
                    m.removeEventListener('scroll', b), window.removeEventListener('resize', b);
                  }
                );
              }
            }, []),
            p.createElement(
              'div',
              { className: 'dumi-default-table' },
              p.createElement(
                'div',
                {
                  className: 'dumi-default-table-content',
                  ref: o,
                  'data-left-folded': s || void 0,
                  'data-right-folded': g || void 0,
                },
                p.createElement('table', i, n),
              ),
            )
          );
        },
        a = D;
    },
    30826: function (L, w, y) {
      var R = 'Expected a function',
        A = NaN,
        p = '[object Symbol]',
        j = /^\s+|\s+$/g,
        E = /^[-+]0x[0-9a-f]+$/i,
        _ = /^0b[01]+$/i,
        S = /^0o[0-7]+$/i,
        O = parseInt,
        C = typeof y.g == 'object' && y.g && y.g.Object === Object && y.g,
        N = typeof self == 'object' && self && self.Object === Object && self,
        k = C || N || Function('return this')(),
        W = Object.prototype,
        D = W.toString,
        a = Math.max,
        e = Math.min,
        t = function () {
          return k.Date.now();
        };
      function n(r, c, l) {
        var g,
          v,
          m,
          b,
          h,
          I,
          M = 0,
          V = !1,
          P = !1,
          F = !0;
        if (typeof r != 'function') throw new TypeError(R);
        (c = s(c) || 0),
          o(l) &&
            ((V = !!l.leading),
            (P = 'maxWait' in l),
            (m = P ? a(s(l.maxWait) || 0, c) : m),
            (F = 'trailing' in l ? !!l.trailing : F));
        function $(f) {
          var T = g,
            x = v;
          return (g = v = void 0), (M = f), (b = r.apply(x, T)), b;
        }
        function G(f) {
          return (M = f), (h = setTimeout(B, c)), V ? $(f) : b;
        }
        function z(f) {
          var T = f - I,
            x = f - M,
            X = c - T;
          return P ? e(X, m - x) : X;
        }
        function H(f) {
          var T = f - I,
            x = f - M;
          return I === void 0 || T >= c || T < 0 || (P && x >= m);
        }
        function B() {
          var f = t();
          if (H(f)) return K(f);
          h = setTimeout(B, z(f));
        }
        function K(f) {
          return (h = void 0), F && g ? $(f) : ((g = v = void 0), b);
        }
        function J() {
          h !== void 0 && clearTimeout(h), (M = 0), (g = I = v = h = void 0);
        }
        function Z() {
          return h === void 0 ? b : K(t());
        }
        function U() {
          var f = t(),
            T = H(f);
          if (((g = arguments), (v = this), (I = f), T)) {
            if (h === void 0) return G(I);
            if (P) return (h = setTimeout(B, c)), $(I);
          }
          return h === void 0 && (h = setTimeout(B, c)), b;
        }
        return (U.cancel = J), (U.flush = Z), U;
      }
      function i(r, c, l) {
        var g = !0,
          v = !0;
        if (typeof r != 'function') throw new TypeError(R);
        return (
          o(l) &&
            ((g = 'leading' in l ? !!l.leading : g), (v = 'trailing' in l ? !!l.trailing : v)),
          n(r, c, { leading: g, maxWait: c, trailing: v })
        );
      }
      function o(r) {
        var c = typeof r;
        return !!r && (c == 'object' || c == 'function');
      }
      function u(r) {
        return !!r && typeof r == 'object';
      }
      function d(r) {
        return typeof r == 'symbol' || (u(r) && D.call(r) == p);
      }
      function s(r) {
        if (typeof r == 'number') return r;
        if (d(r)) return A;
        if (o(r)) {
          var c = typeof r.valueOf == 'function' ? r.valueOf() : r;
          r = o(c) ? c + '' : c;
        }
        if (typeof r != 'string') return r === 0 ? r : +r;
        r = r.replace(j, '');
        var l = _.test(r);
        return l || S.test(r) ? O(r.slice(2), l ? 2 : 8) : E.test(r) ? A : +r;
      }
      L.exports = i;
    },
  },
]);
