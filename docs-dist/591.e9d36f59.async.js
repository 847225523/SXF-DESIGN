'use strict';
(self.webpackChunkSXF_DESIGN = self.webpackChunkSXF_DESIGN || []).push([
  [591],
  {
    43591: function (gi, nn, x) {
      x.d(nn, {
        ZP: function () {
          return li;
        },
      });
      var on = x(84875),
        oe = x.n(on),
        an = x(81828),
        d = x(50959),
        cn = x.t(d, 2);
      const sn = 'anticon',
        ln = (e, t) => t || (e ? `ant-${e}` : 'ant'),
        ue = d.createContext({ getPrefixCls: ln, iconPrefixCls: sn }),
        { Consumer: hi } = ue,
        Je = d.createContext(!1),
        pi = (e) => {
          let { children: t, disabled: r } = e;
          const n = React.useContext(Je);
          return React.createElement(Je.Provider, { value: r != null ? r : n }, t);
        };
      var un = Je;
      const qe = d.createContext(void 0),
        vi = (e) => {
          let { children: t, size: r } = e;
          const n = React.useContext(qe);
          return React.createElement(qe.Provider, { value: r || n }, t);
        };
      var dn = qe,
        mi = x(20764),
        Dt = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          return r;
        };
      const Ce = d.createContext(null),
        fn = (e, t) => {
          const r = d.useContext(Ce),
            n = d.useMemo(() => {
              if (!r) return '';
              const { compactDirection: o, isFirstItem: a, isLastItem: i } = r,
                c = o === 'vertical' ? '-vertical-' : '-';
              return oe()({
                [`${e}-compact${c}item`]: !0,
                [`${e}-compact${c}first-item`]: a,
                [`${e}-compact${c}last-item`]: i,
                [`${e}-compact${c}item-rtl`]: t === 'rtl',
              });
            }, [e, t, r]);
          return {
            compactSize: r == null ? void 0 : r.compactSize,
            compactDirection: r == null ? void 0 : r.compactDirection,
            compactItemClassnames: n,
          };
        },
        bi = (e) => {
          let { children: t } = e;
          return React.createElement(Ce.Provider, { value: null }, t);
        },
        gn = (e) => {
          var { children: t } = e,
            r = Dt(e, ['children']);
          return React.createElement(Ce.Provider, { value: r }, t);
        },
        yi = (e) => {
          const { getPrefixCls: t, direction: r } = React.useContext(ConfigContext),
            {
              size: n = 'middle',
              direction: o,
              block: a,
              prefixCls: i,
              className: c,
              rootClassName: s,
              children: l,
            } = e,
            f = Dt(e, [
              'size',
              'direction',
              'block',
              'prefixCls',
              'className',
              'rootClassName',
              'children',
            ]),
            u = t('space-compact', i),
            [g, p] = useStyle(u),
            m = classNames(
              u,
              p,
              { [`${u}-rtl`]: r === 'rtl', [`${u}-block`]: a, [`${u}-vertical`]: o === 'vertical' },
              c,
              s,
            ),
            h = React.useContext(Ce),
            y = toArray(l),
            A = React.useMemo(
              () =>
                y.map((S, T) => {
                  const b = (S && S.key) || `${u}-item-${T}`;
                  return React.createElement(
                    gn,
                    {
                      key: b,
                      compactSize: n,
                      compactDirection: o,
                      isFirstItem: T === 0 && (!h || (h == null ? void 0 : h.isFirstItem)),
                      isLastItem: T === y.length - 1 && (!h || (h == null ? void 0 : h.isLastItem)),
                    },
                    S,
                  );
                }),
              [n, y, h],
            );
          return y.length === 0
            ? null
            : g(React.createElement('div', Object.assign({ className: m }, f), A));
        };
      var Si = null,
        Zt = x(46088),
        hn = x(44814);
      const { isValidElement: Gt } = cn;
      function pn(e) {
        return e && Gt(e) && e.type === d.Fragment;
      }
      function vn(e, t, r) {
        return Gt(e) ? d.cloneElement(e, typeof r == 'function' ? r(e.props || {}) : r) : t;
      }
      function Xt(e, t) {
        return vn(e, e, t);
      }
      var P = x(75782),
        de = x(77554);
      function mn(e) {
        for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
          (r =
            (e.charCodeAt(n) & 255) |
            ((e.charCodeAt(++n) & 255) << 8) |
            ((e.charCodeAt(++n) & 255) << 16) |
            ((e.charCodeAt(++n) & 255) << 24)),
            (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
            (r ^= r >>> 24),
            (t =
              ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
              ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
        switch (o) {
          case 3:
            t ^= (e.charCodeAt(n + 2) & 255) << 16;
          case 2:
            t ^= (e.charCodeAt(n + 1) & 255) << 8;
          case 1:
            (t ^= e.charCodeAt(n) & 255),
              (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
        }
        return (
          (t ^= t >>> 13),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
          ((t ^ (t >>> 15)) >>> 0).toString(36)
        );
      }
      var et = mn,
        Ci = x(93694),
        xi = x(2341),
        tt = x(40936),
        rt = x(49962),
        j = x(24572),
        bn = (function () {
          function e() {
            (0, tt.Z)(this, e), (0, j.Z)(this, 'cache', new Map());
          }
          return (
            (0, rt.Z)(e, [
              {
                key: 'get',
                value: function (r) {
                  return this.cache.get(r.join('%')) || null;
                },
              },
              {
                key: 'update',
                value: function (r, n) {
                  var o = r.join('%'),
                    a = this.cache.get(o),
                    i = n(a);
                  i === null ? this.cache.delete(o) : this.cache.set(o, i);
                },
              },
            ]),
            e
          );
        })(),
        yn = bn,
        Sn = null,
        nt = 'data-token-hash',
        ee = 'data-css-hash',
        Ti = 'data-dev-cache-path',
        fe = '__cssinjs_instance__',
        xe = Math.random().toString(12).slice(2);
      function _t() {
        if (typeof document != 'undefined' && document.head && document.body) {
          var e = document.body.querySelectorAll('style['.concat(ee, ']')) || [],
            t = document.head.firstChild;
          Array.from(e).forEach(function (n) {
            (n[fe] = n[fe] || xe), document.head.insertBefore(n, t);
          });
          var r = {};
          Array.from(document.querySelectorAll('style['.concat(ee, ']'))).forEach(function (n) {
            var o = n.getAttribute(ee);
            if (r[o]) {
              if (n[fe] === xe) {
                var a;
                (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
              }
            } else r[o] = !0;
          });
        }
        return new yn();
      }
      var ot = d.createContext({ hashPriority: 'low', cache: _t(), defaultCache: !0 }),
        Ei = function (t) {
          var r = t.children,
            n = _objectWithoutProperties(t, Sn),
            o = React.useContext(ot),
            a = useMemo(
              function () {
                var i = _objectSpread({}, o);
                Object.keys(n).forEach(function (s) {
                  var l = n[s];
                  n[s] !== void 0 && (i[s] = l);
                });
                var c = n.cache;
                return (i.cache = i.cache || _t()), (i.defaultCache = !c && o.defaultCache), i;
              },
              [o, n],
              function (i, c) {
                return !isEqual(i[0], c[0], !0) || !isEqual(i[1], c[1], !0);
              },
            );
          return React.createElement(ot.Provider, { value: a }, r);
        },
        Ut = ot,
        N = x(57768);
      function Cn() {
        return !1;
      }
      var xn = !1;
      function wi() {
        return xn;
      }
      var Tn = Cn;
      if (!1) var Ri, Ai;
      function Vt(e, t, r, n) {
        var o = d.useContext(Ut),
          a = o.cache,
          i = [e].concat((0, de.Z)(t)),
          c = Tn();
        return (
          d.useMemo(
            function () {
              a.update(i, function (s) {
                var l = s || [],
                  f = (0, N.Z)(l, 2),
                  u = f[0],
                  g = u === void 0 ? 0 : u,
                  p = f[1],
                  m = p,
                  h = m || r();
                return [g + 1, h];
              });
            },
            [i.join('_')],
          ),
          d.useEffect(function () {
            return function () {
              a.update(i, function (s) {
                var l = s || [],
                  f = (0, N.Z)(l, 2),
                  u = f[0],
                  g = u === void 0 ? 0 : u,
                  p = f[1],
                  m = g - 1;
                return m === 0 ? (n == null || n(p, !1), null) : [g - 1, p];
              });
            };
          }, i),
          a.get(i)[1]
        );
      }
      var ae = x(26143),
        at = x(56863),
        En = x(8878),
        Kt = 'data-rc-order',
        wn = 'rc-util-key',
        Te = new Map();
      function Qt() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          t = e.mark;
        return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : wn;
      }
      function Ee(e) {
        if (e.attachTo) return e.attachTo;
        var t = document.querySelector('head');
        return t || document.body;
      }
      function Rn(e) {
        return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
      }
      function Yt(e) {
        return Array.from((Te.get(e) || e).children).filter(function (t) {
          return t.tagName === 'STYLE';
        });
      }
      function Jt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(0, at.Z)()) return null;
        var r = t.csp,
          n = t.prepend,
          o = document.createElement('style');
        o.setAttribute(Kt, Rn(n)),
          r != null && r.nonce && (o.nonce = r == null ? void 0 : r.nonce),
          (o.innerHTML = e);
        var a = Ee(t),
          i = a.firstChild;
        if (n) {
          if (n === 'queue') {
            var c = Yt(a).filter(function (s) {
              return ['prepend', 'prependQueue'].includes(s.getAttribute(Kt));
            });
            if (c.length) return a.insertBefore(o, c[c.length - 1].nextSibling), o;
          }
          a.insertBefore(o, i);
        } else a.appendChild(o);
        return o;
      }
      function qt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = Ee(t);
        return Yt(r).find(function (n) {
          return n.getAttribute(Qt(t)) === e;
        });
      }
      function er(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = qt(e, t);
        if (r) {
          var n = Ee(t);
          n.removeChild(r);
        }
      }
      function An(e, t) {
        var r = Te.get(e);
        if (!r || !(0, En.Z)(document, r)) {
          var n = Jt('', t),
            o = n.parentNode;
          Te.set(e, o), e.removeChild(n);
        }
      }
      function Oi() {
        Te.clear();
      }
      function we(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          n = Ee(r);
        An(n, r);
        var o = qt(t, r);
        if (o) {
          var a, i;
          if (
            (a = r.csp) !== null &&
            a !== void 0 &&
            a.nonce &&
            o.nonce !== ((i = r.csp) === null || i === void 0 ? void 0 : i.nonce)
          ) {
            var c;
            o.nonce = (c = r.csp) === null || c === void 0 ? void 0 : c.nonce;
          }
          return o.innerHTML !== e && (o.innerHTML = e), o;
        }
        var s = Jt(e, r);
        return s.setAttribute(Qt(r), t), s;
      }
      function Re(e) {
        var t = '';
        return (
          Object.keys(e).forEach(function (r) {
            var n = e[r];
            (t += r), n && (0, ae.Z)(n) === 'object' ? (t += Re(n)) : (t += n);
          }),
          t
        );
      }
      function On(e, t) {
        return et(''.concat(t, '_').concat(Re(e)));
      }
      var ge = 'layer-'.concat(Date.now(), '-').concat(Math.random()).replace(/\./g, ''),
        tr = '903px';
      function In(e, t) {
        if ((0, at.Z)()) {
          var r;
          we(e, ge);
          var n = document.createElement('div');
          (n.style.position = 'fixed'),
            (n.style.left = '0'),
            (n.style.top = '0'),
            t == null || t(n),
            document.body.appendChild(n);
          var o = getComputedStyle(n).width === tr;
          return (r = n.parentNode) === null || r === void 0 || r.removeChild(n), er(ge), o;
        }
        return !1;
      }
      var it = void 0;
      function Mn() {
        return (
          it === void 0 &&
            (it = In(
              '@layer '.concat(ge, ' { .').concat(ge, ' { width: ').concat(tr, '!important; } }'),
              function (e) {
                e.className = ge;
              },
            )),
          it
        );
      }
      var Hn = {},
        Bn = 'css',
        te = new Map();
      function $n(e) {
        te.set(e, (te.get(e) || 0) + 1);
      }
      function Pn(e) {
        if (typeof document != 'undefined') {
          var t = document.querySelectorAll('style['.concat(nt, '="').concat(e, '"]'));
          t.forEach(function (r) {
            if (r[fe] === xe) {
              var n;
              (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
            }
          });
        }
      }
      function zn(e) {
        te.set(e, (te.get(e) || 0) - 1);
        var t = Array.from(te.keys()),
          r = t.filter(function (n) {
            var o = te.get(n) || 0;
            return o <= 0;
          });
        r.length < t.length &&
          r.forEach(function (n) {
            Pn(n), te.delete(n);
          });
      }
      function Ln(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          n = r.salt,
          o = n === void 0 ? '' : n,
          a = r.override,
          i = a === void 0 ? Hn : a,
          c = r.formatToken,
          s = d.useMemo(
            function () {
              return Object.assign.apply(Object, [{}].concat((0, de.Z)(t)));
            },
            [t],
          ),
          l = d.useMemo(
            function () {
              return Re(s);
            },
            [s],
          ),
          f = d.useMemo(
            function () {
              return Re(i);
            },
            [i],
          ),
          u = Vt(
            'token',
            [o, e.id, l, f],
            function () {
              var g = e.getDerivativeToken(s),
                p = (0, P.Z)((0, P.Z)({}, g), i);
              c && (p = c(p));
              var m = On(p, o);
              (p._tokenKey = m), $n(m);
              var h = ''.concat(Bn, '-').concat(et(m));
              return (p._hashId = h), [p, h];
            },
            function (g) {
              zn(g[0]._tokenKey);
            },
          );
        return u;
      }
      var jn = x(51163),
        Nn = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        kn = Nn,
        Ii = '-ms-',
        Mi = '-moz-',
        Hi = '-webkit-',
        rr = 'comm',
        nr = 'rule',
        or = 'decl',
        Bi = '@page',
        $i = '@media',
        Wn = '@import',
        Pi = '@charset',
        zi = '@viewport',
        Li = '@supports',
        ji = '@document',
        Ni = '@namespace',
        Fn = '@keyframes',
        ki = '@font-face',
        Wi = '@counter-style',
        Fi = '@font-feature-values',
        Dn = Math.abs,
        ct = String.fromCharCode,
        Di = Object.assign;
      function Zi(e, t) {
        return D(e, 0) ^ 45
          ? (((((((t << 2) ^ D(e, 0)) << 2) ^ D(e, 1)) << 2) ^ D(e, 2)) << 2) ^ D(e, 3)
          : 0;
      }
      function ar(e) {
        return e.trim();
      }
      function Gi(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function st(e, t, r) {
        return e.replace(t, r);
      }
      function Zn(e, t) {
        return e.indexOf(t);
      }
      function D(e, t) {
        return e.charCodeAt(t) | 0;
      }
      function he(e, t, r) {
        return e.slice(t, r);
      }
      function V(e) {
        return e.length;
      }
      function ir(e) {
        return e.length;
      }
      function Ae(e, t) {
        return t.push(e), e;
      }
      function Xi(e, t) {
        return e.map(t).join('');
      }
      function lt(e, t) {
        for (var r = '', n = ir(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || '';
        return r;
      }
      function Gn(e, t, r, n) {
        switch (e.type) {
          case Wn:
          case or:
            return (e.return = e.return || e.value);
          case rr:
            return '';
          case Fn:
            return (e.return = e.value + '{' + lt(e.children, n) + '}');
          case nr:
            e.value = e.props.join(',');
        }
        return V((r = lt(e.children, n))) ? (e.return = e.value + '{' + r + '}') : '';
      }
      var Oe = 1,
        ie = 1,
        cr = 0,
        z = 0,
        I = 0,
        ce = '';
      function Ie(e, t, r, n, o, a, i) {
        return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: o,
          children: a,
          line: Oe,
          column: ie,
          length: i,
          return: '',
        };
      }
      function _i(e, t) {
        return assign(Ie('', null, null, '', null, null, 0), e, { length: -e.length }, t);
      }
      function Xn() {
        return I;
      }
      function _n() {
        return (I = z > 0 ? D(ce, --z) : 0), ie--, I === 10 && ((ie = 1), Oe--), I;
      }
      function k() {
        return (I = z < cr ? D(ce, z++) : 0), ie++, I === 10 && ((ie = 1), Oe++), I;
      }
      function re() {
        return D(ce, z);
      }
      function Me() {
        return z;
      }
      function He(e, t) {
        return he(ce, e, t);
      }
      function Be(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function sr(e) {
        return (Oe = ie = 1), (cr = V((ce = e))), (z = 0), [];
      }
      function lr(e) {
        return (ce = ''), e;
      }
      function $e(e) {
        return ar(He(z - 1, ut(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
      }
      function Ui(e) {
        return lr(Vn(sr(e)));
      }
      function Un(e) {
        for (; (I = re()) && I < 33; ) k();
        return Be(e) > 2 || Be(I) > 3 ? '' : ' ';
      }
      function Vn(e) {
        for (; k(); )
          switch (Be(I)) {
            case 0:
              append(ur(z - 1), e);
              break;
            case 2:
              append($e(I), e);
              break;
            default:
              append(from(I), e);
          }
        return e;
      }
      function Kn(e, t) {
        for (; --t && k() && !(I < 48 || I > 102 || (I > 57 && I < 65) || (I > 70 && I < 97)); );
        return He(e, Me() + (t < 6 && re() == 32 && k() == 32));
      }
      function ut(e) {
        for (; k(); )
          switch (I) {
            case e:
              return z;
            case 34:
            case 39:
              e !== 34 && e !== 39 && ut(I);
              break;
            case 40:
              e === 41 && ut(e);
              break;
            case 92:
              k();
              break;
          }
        return z;
      }
      function Qn(e, t) {
        for (; k() && e + I !== 47 + 10; ) if (e + I === 42 + 42 && re() === 47) break;
        return '/*' + He(t, z - 1) + '*' + ct(e === 47 ? e : k());
      }
      function ur(e) {
        for (; !Be(re()); ) k();
        return He(e, z);
      }
      function Yn(e) {
        return lr(Pe('', null, null, null, [''], (e = sr(e)), 0, [0], e));
      }
      function Pe(e, t, r, n, o, a, i, c, s) {
        for (
          var l = 0,
            f = 0,
            u = i,
            g = 0,
            p = 0,
            m = 0,
            h = 1,
            y = 1,
            A = 1,
            S = 0,
            T = '',
            b = o,
            C = a,
            E = n,
            v = T;
          y;

        )
          switch (((m = S), (S = k()))) {
            case 40:
              if (m != 108 && D(v, u - 1) == 58) {
                Zn((v += st($e(S), '&', '&\f')), '&\f') != -1 && (A = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              v += $e(S);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              v += Un(m);
              break;
            case 92:
              v += Kn(Me() - 1, 7);
              continue;
            case 47:
              switch (re()) {
                case 42:
                case 47:
                  Ae(Jn(Qn(k(), Me()), t, r), s);
                  break;
                default:
                  v += '/';
              }
              break;
            case 123 * h:
              c[l++] = V(v) * A;
            case 125 * h:
            case 59:
            case 0:
              switch (S) {
                case 0:
                case 125:
                  y = 0;
                case 59 + f:
                  p > 0 &&
                    V(v) - u &&
                    Ae(
                      p > 32 ? fr(v + ';', n, r, u - 1) : fr(st(v, ' ', '') + ';', n, r, u - 2),
                      s,
                    );
                  break;
                case 59:
                  v += ';';
                default:
                  if ((Ae((E = dr(v, t, r, l, f, o, c, T, (b = []), (C = []), u)), a), S === 123))
                    if (f === 0) Pe(v, t, E, E, b, a, u, c, C);
                    else
                      switch (g === 99 && D(v, 3) === 110 ? 100 : g) {
                        case 100:
                        case 109:
                        case 115:
                          Pe(
                            e,
                            E,
                            E,
                            n && Ae(dr(e, E, E, 0, 0, o, c, T, o, (b = []), u), C),
                            o,
                            C,
                            u,
                            c,
                            n ? b : C,
                          );
                          break;
                        default:
                          Pe(v, E, E, E, [''], C, 0, c, C);
                      }
              }
              (l = f = p = 0), (h = A = 1), (T = v = ''), (u = i);
              break;
            case 58:
              (u = 1 + V(v)), (p = m);
            default:
              if (h < 1) {
                if (S == 123) --h;
                else if (S == 125 && h++ == 0 && _n() == 125) continue;
              }
              switch (((v += ct(S)), S * h)) {
                case 38:
                  A = f > 0 ? 1 : ((v += '\f'), -1);
                  break;
                case 44:
                  (c[l++] = (V(v) - 1) * A), (A = 1);
                  break;
                case 64:
                  re() === 45 && (v += $e(k())), (g = re()), (f = u = V((T = v += ur(Me())))), S++;
                  break;
                case 45:
                  m === 45 && V(v) == 2 && (h = 0);
              }
          }
        return a;
      }
      function dr(e, t, r, n, o, a, i, c, s, l, f) {
        for (var u = o - 1, g = o === 0 ? a : [''], p = ir(g), m = 0, h = 0, y = 0; m < n; ++m)
          for (var A = 0, S = he(e, u + 1, (u = Dn((h = i[m])))), T = e; A < p; ++A)
            (T = ar(h > 0 ? g[A] + ' ' + S : st(S, /&\f/g, g[A]))) && (s[y++] = T);
        return Ie(e, t, r, o === 0 ? nr : c, s, l, f);
      }
      function Jn(e, t, r) {
        return Ie(e, t, r, rr, ct(Xn()), he(e, 2, -2), 0);
      }
      function fr(e, t, r, n) {
        return Ie(e, t, r, or, he(e, 0, n), he(e, n + 1, -1), n);
      }
      var gr = x(27524);
      function Vi(e, t) {
        var r = t.path,
          n = t.parentSelectors;
        devWarning(
          !1,
          '[Ant Design CSS-in-JS] '
            .concat(r ? 'Error in '.concat(r, ': ') : '')
            .concat(e)
            .concat(n.length ? ' Selector: '.concat(n.join(' | ')) : ''),
        );
      }
      var Ki = function (t, r, n) {
          if (t === 'content') {
            var o =
                /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,
              a = ['normal', 'none', 'initial', 'inherit', 'unset'];
            (typeof r != 'string' ||
              (a.indexOf(r) === -1 &&
                !o.test(r) &&
                (r.charAt(0) !== r.charAt(r.length - 1) ||
                  (r.charAt(0) !== '"' && r.charAt(0) !== "'")))) &&
              lintWarning(
                "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(
                  r,
                  '"\'`.',
                ),
                n,
              );
          }
        },
        Qi = null,
        Yi = function (t, r, n) {
          t === 'animation' &&
            n.hashId &&
            r !== 'none' &&
            lintWarning(
              "You seem to be using hashed animation '".concat(
                r,
                "', in which case 'animationName' with Keyframe as value is recommended.",
              ),
              n,
            );
        },
        Ji = null;
      function qn(e) {
        var t,
          r = ((t = e.match(/:not\(([^)]*)\)/)) === null || t === void 0 ? void 0 : t[1]) || '',
          n = r.split(/(\[[^[]*])|(?=[.#])/).filter(function (o) {
            return o;
          });
        return n.length > 1;
      }
      function eo(e) {
        return e.parentSelectors.reduce(function (t, r) {
          return t ? (r.includes('&') ? r.replace(/&/g, t) : ''.concat(t, ' ').concat(r)) : r;
        }, '');
      }
      var qi = function (t, r, n) {
          var o = eo(n),
            a = o.match(/:not\([^)]*\)/g) || [];
          a.length > 0 &&
            a.some(qn) &&
            lintWarning("Concat ':not' selector not support in legacy browsers.", n);
        },
        ec = null,
        tc = function (t, r, n) {
          switch (t) {
            case 'marginLeft':
            case 'marginRight':
            case 'paddingLeft':
            case 'paddingRight':
            case 'left':
            case 'right':
            case 'borderLeft':
            case 'borderLeftWidth':
            case 'borderLeftStyle':
            case 'borderLeftColor':
            case 'borderRight':
            case 'borderRightWidth':
            case 'borderRightStyle':
            case 'borderRightColor':
            case 'borderTopLeftRadius':
            case 'borderTopRightRadius':
            case 'borderBottomLeftRadius':
            case 'borderBottomRightRadius':
              lintWarning(
                "You seem to be using non-logical property '".concat(
                  t,
                  "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.",
                ),
                n,
              );
              return;
            case 'margin':
            case 'padding':
            case 'borderWidth':
            case 'borderStyle':
              if (typeof r == 'string') {
                var o = r.split(' ').map(function (c) {
                  return c.trim();
                });
                o.length === 4 &&
                  o[1] !== o[3] &&
                  lintWarning(
                    "You seem to be using '"
                      .concat(t, "' property with different left ")
                      .concat(t, ' and right ')
                      .concat(
                        t,
                        ', which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.',
                      ),
                    n,
                  );
              }
              return;
            case 'clear':
            case 'textAlign':
              (r === 'left' || r === 'right') &&
                lintWarning(
                  "You seem to be using non-logical value '"
                    .concat(r, "' of ")
                    .concat(
                      t,
                      ', which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.',
                    ),
                  n,
                );
              return;
            case 'borderRadius':
              if (typeof r == 'string') {
                var a = r.split('/').map(function (c) {
                    return c.trim();
                  }),
                  i = a.reduce(function (c, s) {
                    if (c) return c;
                    var l = s.split(' ').map(function (f) {
                      return f.trim();
                    });
                    return (l.length >= 2 && l[0] !== l[1]) ||
                      (l.length === 3 && l[1] !== l[2]) ||
                      (l.length === 4 && l[2] !== l[3])
                      ? !0
                      : c;
                  }, !1);
                i &&
                  lintWarning(
                    "You seem to be using non-logical value '"
                      .concat(r, "' of ")
                      .concat(
                        t,
                        ', which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.',
                      ),
                    n,
                  );
              }
              return;
            default:
          }
        },
        rc = null,
        nc = function (t, r, n) {
          n.parentSelectors.some(function (o) {
            var a = o.split(',');
            return a.some(function (i) {
              return i.split('&').length > 2;
            });
          }) && lintWarning('Should not use more than one `&` in a selector.', n);
        },
        oc = null,
        hr = (0, at.Z)(),
        to = '_skip_check_';
      function pr(e) {
        var t = lt(Yn(e), Gn);
        return t.replace(/\{%%%\:[^;];}/g, ';');
      }
      function ro(e) {
        return (0, ae.Z)(e) === 'object' && e && to in e;
      }
      function no(e, t, r) {
        if (!t) return e;
        var n = '.'.concat(t),
          o = r === 'low' ? ':where('.concat(n, ')') : n,
          a = e.split(',').map(function (i) {
            var c,
              s = i.trim().split(/\s+/),
              l = s[0] || '',
              f = ((c = l.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) || '';
            return (
              (l = ''.concat(f).concat(o).concat(l.slice(f.length))),
              [l].concat((0, de.Z)(s.slice(1))).join(' ')
            );
          });
        return a.join(',');
      }
      var vr = new Set(),
        ac = null,
        oo = function e(t) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : { root: !0, parentSelectors: [] },
            o = n.root,
            a = n.injectHash,
            i = n.parentSelectors,
            c = r.hashId,
            s = r.layer,
            l = r.path,
            f = r.hashPriority,
            u = r.transformers,
            g = u === void 0 ? [] : u,
            p = r.linters,
            m = p === void 0 ? [] : p,
            h = '',
            y = {};
          function A(E) {
            var v = E.getName(c);
            if (!y[v]) {
              var O = e(E.style, r, { root: !1, parentSelectors: i }),
                R = (0, N.Z)(O, 1),
                w = R[0];
              y[v] = '@keyframes '.concat(E.getName(c)).concat(w);
            }
          }
          function S(E) {
            var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
            return (
              E.forEach(function (O) {
                Array.isArray(O) ? S(O, v) : O && v.push(O);
              }),
              v
            );
          }
          var T = S(Array.isArray(t) ? t : [t]);
          if (
            (T.forEach(function (E) {
              var v = typeof E == 'string' && !o ? {} : E;
              if (typeof v == 'string')
                h += ''.concat(
                  v,
                  `
`,
                );
              else if (v._keyframe) A(v);
              else {
                var O = g.reduce(function (R, w) {
                  var $;
                  return (
                    (w == null || ($ = w.visit) === null || $ === void 0 ? void 0 : $.call(w, R)) ||
                    R
                  );
                }, v);
                Object.keys(O).forEach(function (R) {
                  var w = O[R];
                  if (
                    (0, ae.Z)(w) === 'object' &&
                    w &&
                    (R !== 'animationName' || !w._keyframe) &&
                    !ro(w)
                  ) {
                    var $ = !1,
                      M = R.trim(),
                      Q = !1;
                    (o || a) && c
                      ? M.startsWith('@')
                        ? ($ = !0)
                        : (M = no(R, c, f))
                      : o && !c && (M === '&' || M === '') && ((M = ''), (Q = !0));
                    var Y = e(w, r, {
                        root: Q,
                        injectHash: $,
                        parentSelectors: [].concat((0, de.Z)(i), [M]),
                      }),
                      Z = (0, N.Z)(Y, 2),
                      J = Z[0],
                      Ke = Z[1];
                    (y = (0, P.Z)((0, P.Z)({}, y), Ke)), (h += ''.concat(M).concat(J));
                  } else {
                    var ye,
                      Qe = (ye = w == null ? void 0 : w.value) !== null && ye !== void 0 ? ye : w,
                      Ye = R.replace(/[A-Z]/g, function (kt) {
                        return '-'.concat(kt.toLowerCase());
                      }),
                      q = Qe;
                    !kn[R] && typeof q == 'number' && q !== 0 && (q = ''.concat(q, 'px')),
                      R === 'animationName' &&
                        w !== null &&
                        w !== void 0 &&
                        w._keyframe &&
                        (A(w), (q = w.getName(c))),
                      (h += ''.concat(Ye, ':').concat(q, ';'));
                  }
                });
              }
            }),
            !o)
          )
            h = '{'.concat(h, '}');
          else if (s && Mn()) {
            var b = s.split(','),
              C = b[b.length - 1].trim();
            (h = '@layer '.concat(C, ' {').concat(h, '}')),
              b.length > 1 && (h = '@layer '.concat(s, '{%%%:%}').concat(h));
          }
          return [h, y];
        };
      function ao(e, t) {
        return et(''.concat(e.join('%')).concat(t));
      }
      function io() {
        return null;
      }
      function mr(e, t) {
        var r = e.token,
          n = e.path,
          o = e.hashId,
          a = e.layer,
          i = d.useContext(Ut),
          c = i.autoClear,
          s = i.mock,
          l = i.defaultCache,
          f = i.hashPriority,
          u = i.container,
          g = i.ssrInline,
          p = i.transformers,
          m = i.linters,
          h = r._tokenKey,
          y = [h].concat((0, de.Z)(n)),
          A = hr,
          S = Vt(
            'style',
            y,
            function () {
              var v = t(),
                O = oo(v, {
                  hashId: o,
                  hashPriority: f,
                  layer: a,
                  path: n.join('-'),
                  transformers: p,
                  linters: m,
                }),
                R = (0, N.Z)(O, 2),
                w = R[0],
                $ = R[1],
                M = pr(w),
                Q = ao(y, M);
              if (A) {
                var Y = we(M, Q, { mark: ee, prepend: 'queue', attachTo: u });
                (Y[fe] = xe),
                  Y.setAttribute(nt, h),
                  Object.keys($).forEach(function (Z) {
                    vr.has(Z) ||
                      (vr.add(Z),
                      we(pr($[Z]), '_effect-'.concat(Z), {
                        mark: ee,
                        prepend: 'queue',
                        attachTo: u,
                      }));
                  });
              }
              return [M, h, Q];
            },
            function (v, O) {
              var R = (0, N.Z)(v, 3),
                w = R[2];
              (O || c) && hr && er(w, { mark: ee });
            },
          ),
          T = (0, N.Z)(S, 3),
          b = T[0],
          C = T[1],
          E = T[2];
        return function (v) {
          var O;
          if (!g || A || !l) O = d.createElement(io, null);
          else {
            var R;
            O = d.createElement(
              'style',
              (0, jn.Z)({}, ((R = {}), (0, j.Z)(R, nt, C), (0, j.Z)(R, ee, E), R), {
                dangerouslySetInnerHTML: { __html: b },
              }),
            );
          }
          return d.createElement(d.Fragment, null, O, v);
        };
      }
      function ic(e) {
        var t = Array.from(e.cache.keys()).filter(function (n) {
            return n.startsWith('style%');
          }),
          r = '';
        return (
          t.forEach(function (n) {
            var o = _slicedToArray(e.cache.get(n)[1], 3),
              a = o[0],
              i = o[1],
              c = o[2];
            r += '<style '
              .concat(ATTR_TOKEN, '="')
              .concat(i, '" ')
              .concat(ATTR_MARK, '="')
              .concat(c, '">')
              .concat(a, '</style>');
          }),
          r
        );
      }
      function co(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var dt = (function () {
        function e() {
          (0, tt.Z)(this, e),
            (0, j.Z)(this, 'cache', void 0),
            (0, j.Z)(this, 'keys', void 0),
            (0, j.Z)(this, 'cacheCallTimes', void 0),
            (this.cache = new Map()),
            (this.keys = []),
            (this.cacheCallTimes = 0);
        }
        return (
          (0, rt.Z)(e, [
            {
              key: 'size',
              value: function () {
                return this.keys.length;
              },
            },
            {
              key: 'internalGet',
              value: function (r) {
                var n,
                  o,
                  a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                  i = { map: this.cache };
                return (
                  r.forEach(function (c) {
                    if (!i) i = void 0;
                    else {
                      var s, l;
                      i =
                        (s = i) === null || s === void 0 || (l = s.map) === null || l === void 0
                          ? void 0
                          : l.get(c);
                    }
                  }),
                  (n = i) !== null &&
                    n !== void 0 &&
                    n.value &&
                    a &&
                    (i.value[1] = this.cacheCallTimes++),
                  (o = i) === null || o === void 0 ? void 0 : o.value
                );
              },
            },
            {
              key: 'get',
              value: function (r) {
                var n;
                return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
              },
            },
            {
              key: 'has',
              value: function (r) {
                return !!this.internalGet(r);
              },
            },
            {
              key: 'set',
              value: function (r, n) {
                var o = this;
                if (!this.has(r)) {
                  if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                    var a = this.keys.reduce(
                        function (l, f) {
                          var u = (0, N.Z)(l, 2),
                            g = u[1];
                          return o.internalGet(f)[1] < g ? [f, o.internalGet(f)[1]] : l;
                        },
                        [this.keys[0], this.cacheCallTimes],
                      ),
                      i = (0, N.Z)(a, 1),
                      c = i[0];
                    this.delete(c);
                  }
                  this.keys.push(r);
                }
                var s = this.cache;
                r.forEach(function (l, f) {
                  if (f === r.length - 1) s.set(l, { value: [n, o.cacheCallTimes++] });
                  else {
                    var u = s.get(l);
                    u ? u.map || (u.map = new Map()) : s.set(l, { map: new Map() }),
                      (s = s.get(l).map);
                  }
                });
              },
            },
            {
              key: 'deleteByPath',
              value: function (r, n) {
                var o = r.get(n[0]);
                if (n.length === 1) {
                  var a;
                  return (
                    o.map ? r.set(n[0], { map: o.map }) : r.delete(n[0]),
                    (a = o.value) === null || a === void 0 ? void 0 : a[0]
                  );
                }
                var i = this.deleteByPath(o.map, n.slice(1));
                return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
              },
            },
            {
              key: 'delete',
              value: function (r) {
                if (this.has(r))
                  return (
                    (this.keys = this.keys.filter(function (n) {
                      return !co(n, r);
                    })),
                    this.deleteByPath(this.cache, r)
                  );
              },
            },
          ]),
          e
        );
      })();
      (0, j.Z)(dt, 'MAX_CACHE_SIZE', 20), (0, j.Z)(dt, 'MAX_CACHE_OFFSET', 5);
      var br = 0,
        so = (function () {
          function e(t) {
            (0, tt.Z)(this, e),
              (0, j.Z)(this, 'derivatives', void 0),
              (0, j.Z)(this, 'id', void 0),
              (this.derivatives = Array.isArray(t) ? t : [t]),
              (this.id = br),
              t.length === 0 &&
                (0, gr.Kp)(
                  t.length > 0,
                  '[Ant Design CSS-in-JS] Theme should have at least one derivative function.',
                ),
              (br += 1);
          }
          return (
            (0, rt.Z)(e, [
              {
                key: 'getDerivativeToken',
                value: function (r) {
                  return this.derivatives.reduce(function (n, o) {
                    return o(r, n);
                  }, void 0);
                },
              },
            ]),
            e
          );
        })(),
        ft = new dt();
      function lo(e) {
        var t = Array.isArray(e) ? e : [e];
        return ft.has(t) || ft.set(t, new so(t)), ft.get(t);
      }
      function uo(e) {
        if (typeof e == 'number') return [[e], !1];
        var t = String(e).trim(),
          r = t.match(/(.*)(!important)/),
          n = (r ? r[1] : t).trim().split(/\s+/),
          o = '',
          a = 0;
        return [
          n.reduce(function (i, c) {
            return (
              c.includes('(')
                ? ((o += c), (a += c.split('(').length - 1))
                : c.includes(')')
                ? ((o += c), (a -= c.split(')').length - 1), a === 0 && (i.push(o), (o = '')))
                : a > 0
                ? (o += c)
                : i.push(c),
              i
            );
          }, []),
          !!r,
        ];
      }
      function se(e) {
        return (e.notSplit = !0), e;
      }
      var fo = {
        inset: ['top', 'right', 'bottom', 'left'],
        insetBlock: ['top', 'bottom'],
        insetBlockStart: ['top'],
        insetBlockEnd: ['bottom'],
        insetInline: ['left', 'right'],
        insetInlineStart: ['left'],
        insetInlineEnd: ['right'],
        marginBlock: ['marginTop', 'marginBottom'],
        marginBlockStart: ['marginTop'],
        marginBlockEnd: ['marginBottom'],
        marginInline: ['marginLeft', 'marginRight'],
        marginInlineStart: ['marginLeft'],
        marginInlineEnd: ['marginRight'],
        paddingBlock: ['paddingTop', 'paddingBottom'],
        paddingBlockStart: ['paddingTop'],
        paddingBlockEnd: ['paddingBottom'],
        paddingInline: ['paddingLeft', 'paddingRight'],
        paddingInlineStart: ['paddingLeft'],
        paddingInlineEnd: ['paddingRight'],
        borderBlock: se(['borderTop', 'borderBottom']),
        borderBlockStart: se(['borderTop']),
        borderBlockEnd: se(['borderBottom']),
        borderInline: se(['borderLeft', 'borderRight']),
        borderInlineStart: se(['borderLeft']),
        borderInlineEnd: se(['borderRight']),
        borderBlockWidth: ['borderTopWidth', 'borderBottomWidth'],
        borderBlockStartWidth: ['borderTopWidth'],
        borderBlockEndWidth: ['borderBottomWidth'],
        borderInlineWidth: ['borderLeftWidth', 'borderRightWidth'],
        borderInlineStartWidth: ['borderLeftWidth'],
        borderInlineEndWidth: ['borderRightWidth'],
        borderBlockStyle: ['borderTopStyle', 'borderBottomStyle'],
        borderBlockStartStyle: ['borderTopStyle'],
        borderBlockEndStyle: ['borderBottomStyle'],
        borderInlineStyle: ['borderLeftStyle', 'borderRightStyle'],
        borderInlineStartStyle: ['borderLeftStyle'],
        borderInlineEndStyle: ['borderRightStyle'],
        borderBlockColor: ['borderTopColor', 'borderBottomColor'],
        borderBlockStartColor: ['borderTopColor'],
        borderBlockEndColor: ['borderBottomColor'],
        borderInlineColor: ['borderLeftColor', 'borderRightColor'],
        borderInlineStartColor: ['borderLeftColor'],
        borderInlineEndColor: ['borderRightColor'],
        borderStartStartRadius: ['borderTopLeftRadius'],
        borderStartEndRadius: ['borderTopRightRadius'],
        borderEndStartRadius: ['borderBottomLeftRadius'],
        borderEndEndRadius: ['borderBottomRightRadius'],
      };
      function ze(e, t) {
        var r = e;
        return t && (r = ''.concat(r, ' !important')), { _skip_check_: !0, value: r };
      }
      var cc = {
          visit: function (t) {
            var r = {};
            return (
              Object.keys(t).forEach(function (n) {
                var o = t[n],
                  a = fo[n];
                if (a && (typeof o == 'number' || typeof o == 'string')) {
                  var i = uo(o),
                    c = (0, N.Z)(i, 2),
                    s = c[0],
                    l = c[1];
                  a.length && a.notSplit
                    ? a.forEach(function (f) {
                        r[f] = ze(o, l);
                      })
                    : a.length === 1
                    ? (r[a[0]] = ze(o, l))
                    : a.length === 2
                    ? a.forEach(function (f, u) {
                        var g;
                        r[f] = ze((g = s[u]) !== null && g !== void 0 ? g : s[0], l);
                      })
                    : a.length === 4
                    ? a.forEach(function (f, u) {
                        var g, p;
                        r[f] = ze(
                          (g = (p = s[u]) !== null && p !== void 0 ? p : s[u - 2]) !== null &&
                            g !== void 0
                            ? g
                            : s[0],
                          l,
                        );
                      })
                    : (r[n] = o);
                } else r[n] = o;
              }),
              r
            );
          },
        },
        sc = null,
        gt = /url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;
      function go(e, t) {
        var r = Math.pow(10, t + 1),
          n = Math.floor(e * r);
        return (Math.round(n / 10) * 10) / r;
      }
      var lc = function () {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = t.rootValue,
            n = r === void 0 ? 16 : r,
            o = t.precision,
            a = o === void 0 ? 5 : o,
            i = t.mediaQuery,
            c = i === void 0 ? !1 : i,
            s = function (u, g) {
              if (!g) return u;
              var p = parseFloat(g);
              if (p <= 1) return u;
              var m = go(p / n, a);
              return ''.concat(m, 'rem');
            },
            l = function (u) {
              var g = _objectSpread({}, u);
              return (
                Object.entries(u).forEach(function (p) {
                  var m = _slicedToArray(p, 2),
                    h = m[0],
                    y = m[1];
                  if (typeof y == 'string' && y.includes('px')) {
                    var A = y.replace(gt, s);
                    g[h] = A;
                  }
                  !unitless[h] &&
                    typeof y == 'number' &&
                    y !== 0 &&
                    (g[h] = ''.concat(y, 'px').replace(gt, s));
                  var S = h.trim();
                  if (S.startsWith('@') && S.includes('px') && c) {
                    var T = h.replace(gt, s);
                    (g[T] = g[h]), delete g[h];
                  }
                }),
                g
              );
            };
          return { visit: l };
        },
        uc = null;
      const dc = { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
        fc = (e) => ({
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          color: e.colorText,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          listStyle: 'none',
          fontFamily: e.fontFamily,
        }),
        gc = () => ({
          display: 'inline-flex',
          alignItems: 'center',
          color: 'inherit',
          fontStyle: 'normal',
          lineHeight: 0,
          textAlign: 'center',
          textTransform: 'none',
          verticalAlign: '-0.125em',
          textRendering: 'optimizeLegibility',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          '> *': { lineHeight: 1 },
          svg: { display: 'inline-block' },
        }),
        hc = () => ({
          '&::before': { display: 'table', content: '""' },
          '&::after': { display: 'table', clear: 'both', content: '""' },
        }),
        ho = (e) => ({
          a: {
            color: e.colorLink,
            textDecoration: e.linkDecoration,
            backgroundColor: 'transparent',
            outline: 'none',
            cursor: 'pointer',
            transition: `color ${e.motionDurationSlow}`,
            '-webkit-text-decoration-skip': 'objects',
            '&:hover': { color: e.colorLinkHover },
            '&:active': { color: e.colorLinkActive },
            [`&:active,
  &:hover`]: { textDecoration: e.linkHoverDecoration, outline: 0 },
            '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
            '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
          },
        }),
        po = (e, t) => {
          const { fontFamily: r, fontSize: n } = e,
            o = `[class^="${t}"], [class*=" ${t}"]`;
          return {
            [o]: {
              fontFamily: r,
              fontSize: n,
              boxSizing: 'border-box',
              '&::before, &::after': { boxSizing: 'border-box' },
              [o]: { boxSizing: 'border-box', '&::before, &::after': { boxSizing: 'border-box' } },
            },
          };
        },
        vo = (e) => ({
          outline: `${e.lineWidth * 4}px solid ${e.colorPrimaryBorder}`,
          outlineOffset: 1,
          transition: 'outline-offset 0s, outline 0s',
        }),
        mo = (e) => ({ '&:focus-visible': Object.assign({}, vo(e)) });
      var bo = '5.2.3',
        yo = bo;
      function H(e, t) {
        So(e) && (e = '100%');
        var r = Co(e);
        return (
          (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
          r && (e = parseInt(String(e * t), 10) / 100),
          Math.abs(e - t) < 1e-6
            ? 1
            : (t === 360
                ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
                : (e = (e % t) / parseFloat(String(t))),
              e)
        );
      }
      function Le(e) {
        return Math.min(1, Math.max(0, e));
      }
      function So(e) {
        return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
      }
      function Co(e) {
        return typeof e == 'string' && e.indexOf('%') !== -1;
      }
      function yr(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function je(e) {
        return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
      }
      function ne(e) {
        return e.length === 1 ? '0' + e : String(e);
      }
      function xo(e, t, r) {
        return { r: H(e, 255) * 255, g: H(t, 255) * 255, b: H(r, 255) * 255 };
      }
      function Sr(e, t, r) {
        (e = H(e, 255)), (t = H(t, 255)), (r = H(r, 255));
        var n = Math.max(e, t, r),
          o = Math.min(e, t, r),
          a = 0,
          i = 0,
          c = (n + o) / 2;
        if (n === o) (i = 0), (a = 0);
        else {
          var s = n - o;
          switch (((i = c > 0.5 ? s / (2 - n - o) : s / (n + o)), n)) {
            case e:
              a = (t - r) / s + (t < r ? 6 : 0);
              break;
            case t:
              a = (r - e) / s + 2;
              break;
            case r:
              a = (e - t) / s + 4;
              break;
            default:
              break;
          }
          a /= 6;
        }
        return { h: a, s: i, l: c };
      }
      function ht(e, t, r) {
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? e + (t - e) * (6 * r)
            : r < 1 / 2
            ? t
            : r < 2 / 3
            ? e + (t - e) * (2 / 3 - r) * 6
            : e
        );
      }
      function To(e, t, r) {
        var n, o, a;
        if (((e = H(e, 360)), (t = H(t, 100)), (r = H(r, 100)), t === 0)) (o = r), (a = r), (n = r);
        else {
          var i = r < 0.5 ? r * (1 + t) : r + t - r * t,
            c = 2 * r - i;
          (n = ht(c, i, e + 1 / 3)), (o = ht(c, i, e)), (a = ht(c, i, e - 1 / 3));
        }
        return { r: n * 255, g: o * 255, b: a * 255 };
      }
      function pt(e, t, r) {
        (e = H(e, 255)), (t = H(t, 255)), (r = H(r, 255));
        var n = Math.max(e, t, r),
          o = Math.min(e, t, r),
          a = 0,
          i = n,
          c = n - o,
          s = n === 0 ? 0 : c / n;
        if (n === o) a = 0;
        else {
          switch (n) {
            case e:
              a = (t - r) / c + (t < r ? 6 : 0);
              break;
            case t:
              a = (r - e) / c + 2;
              break;
            case r:
              a = (e - t) / c + 4;
              break;
            default:
              break;
          }
          a /= 6;
        }
        return { h: a, s, v: i };
      }
      function Eo(e, t, r) {
        (e = H(e, 360) * 6), (t = H(t, 100)), (r = H(r, 100));
        var n = Math.floor(e),
          o = e - n,
          a = r * (1 - t),
          i = r * (1 - o * t),
          c = r * (1 - (1 - o) * t),
          s = n % 6,
          l = [r, i, a, a, c, r][s],
          f = [c, r, r, i, a, a][s],
          u = [a, a, c, r, r, i][s];
        return { r: l * 255, g: f * 255, b: u * 255 };
      }
      function vt(e, t, r, n) {
        var o = [
          ne(Math.round(e).toString(16)),
          ne(Math.round(t).toString(16)),
          ne(Math.round(r).toString(16)),
        ];
        return n &&
          o[0].startsWith(o[0].charAt(1)) &&
          o[1].startsWith(o[1].charAt(1)) &&
          o[2].startsWith(o[2].charAt(1))
          ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
          : o.join('');
      }
      function wo(e, t, r, n, o) {
        var a = [
          ne(Math.round(e).toString(16)),
          ne(Math.round(t).toString(16)),
          ne(Math.round(r).toString(16)),
          ne(Cr(n)),
        ];
        return o &&
          a[0].startsWith(a[0].charAt(1)) &&
          a[1].startsWith(a[1].charAt(1)) &&
          a[2].startsWith(a[2].charAt(1)) &&
          a[3].startsWith(a[3].charAt(1))
          ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
          : a.join('');
      }
      function pc(e, t, r, n) {
        var o = [
          pad2(Cr(n)),
          pad2(Math.round(e).toString(16)),
          pad2(Math.round(t).toString(16)),
          pad2(Math.round(r).toString(16)),
        ];
        return o.join('');
      }
      function Cr(e) {
        return Math.round(parseFloat(e) * 255).toString(16);
      }
      function xr(e) {
        return L(e) / 255;
      }
      function L(e) {
        return parseInt(e, 16);
      }
      function Ro(e) {
        return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
      }
      var mt = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        goldenrod: '#daa520',
        gold: '#ffd700',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        lavenderblush: '#fff0f5',
        lavender: '#e6e6fa',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32',
      };
      function le(e) {
        var t = { r: 0, g: 0, b: 0 },
          r = 1,
          n = null,
          o = null,
          a = null,
          i = !1,
          c = !1;
        return (
          typeof e == 'string' && (e = Io(e)),
          typeof e == 'object' &&
            (X(e.r) && X(e.g) && X(e.b)
              ? ((t = xo(e.r, e.g, e.b)),
                (i = !0),
                (c = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
              : X(e.h) && X(e.s) && X(e.v)
              ? ((n = je(e.s)), (o = je(e.v)), (t = Eo(e.h, n, o)), (i = !0), (c = 'hsv'))
              : X(e.h) &&
                X(e.s) &&
                X(e.l) &&
                ((n = je(e.s)), (a = je(e.l)), (t = To(e.h, n, a)), (i = !0), (c = 'hsl')),
            Object.prototype.hasOwnProperty.call(e, 'a') && (r = e.a)),
          (r = yr(r)),
          {
            ok: i,
            format: e.format || c,
            r: Math.min(255, Math.max(t.r, 0)),
            g: Math.min(255, Math.max(t.g, 0)),
            b: Math.min(255, Math.max(t.b, 0)),
            a: r,
          }
        );
      }
      var Ao = '[-\\+]?\\d+%?',
        Oo = '[-\\+]?\\d*\\.\\d+%?',
        K = '(?:'.concat(Oo, ')|(?:').concat(Ao, ')'),
        bt = '[\\s|\\(]+('.concat(K, ')[,|\\s]+(').concat(K, ')[,|\\s]+(').concat(K, ')\\s*\\)?'),
        yt = '[\\s|\\(]+('
          .concat(K, ')[,|\\s]+(')
          .concat(K, ')[,|\\s]+(')
          .concat(K, ')[,|\\s]+(')
          .concat(K, ')\\s*\\)?'),
        W = {
          CSS_UNIT: new RegExp(K),
          rgb: new RegExp('rgb' + bt),
          rgba: new RegExp('rgba' + yt),
          hsl: new RegExp('hsl' + bt),
          hsla: new RegExp('hsla' + yt),
          hsv: new RegExp('hsv' + bt),
          hsva: new RegExp('hsva' + yt),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        };
      function Io(e) {
        if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
        var t = !1;
        if (mt[e]) (e = mt[e]), (t = !0);
        else if (e === 'transparent') return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
        var r = W.rgb.exec(e);
        return r
          ? { r: r[1], g: r[2], b: r[3] }
          : ((r = W.rgba.exec(e)),
            r
              ? { r: r[1], g: r[2], b: r[3], a: r[4] }
              : ((r = W.hsl.exec(e)),
                r
                  ? { h: r[1], s: r[2], l: r[3] }
                  : ((r = W.hsla.exec(e)),
                    r
                      ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                      : ((r = W.hsv.exec(e)),
                        r
                          ? { h: r[1], s: r[2], v: r[3] }
                          : ((r = W.hsva.exec(e)),
                            r
                              ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                              : ((r = W.hex8.exec(e)),
                                r
                                  ? {
                                      r: L(r[1]),
                                      g: L(r[2]),
                                      b: L(r[3]),
                                      a: xr(r[4]),
                                      format: t ? 'name' : 'hex8',
                                    }
                                  : ((r = W.hex6.exec(e)),
                                    r
                                      ? {
                                          r: L(r[1]),
                                          g: L(r[2]),
                                          b: L(r[3]),
                                          format: t ? 'name' : 'hex',
                                        }
                                      : ((r = W.hex4.exec(e)),
                                        r
                                          ? {
                                              r: L(r[1] + r[1]),
                                              g: L(r[2] + r[2]),
                                              b: L(r[3] + r[3]),
                                              a: xr(r[4] + r[4]),
                                              format: t ? 'name' : 'hex8',
                                            }
                                          : ((r = W.hex3.exec(e)),
                                            r
                                              ? {
                                                  r: L(r[1] + r[1]),
                                                  g: L(r[2] + r[2]),
                                                  b: L(r[3] + r[3]),
                                                  format: t ? 'name' : 'hex',
                                                }
                                              : !1)))))))));
      }
      function X(e) {
        return Boolean(W.CSS_UNIT.exec(String(e)));
      }
      var Ne = 2,
        Tr = 0.16,
        Mo = 0.05,
        Ho = 0.05,
        Bo = 0.15,
        Er = 5,
        wr = 4,
        $o = [
          { index: 7, opacity: 0.15 },
          { index: 6, opacity: 0.25 },
          { index: 5, opacity: 0.3 },
          { index: 5, opacity: 0.45 },
          { index: 5, opacity: 0.65 },
          { index: 5, opacity: 0.85 },
          { index: 4, opacity: 0.9 },
          { index: 3, opacity: 0.95 },
          { index: 2, opacity: 0.97 },
          { index: 1, opacity: 0.98 },
        ];
      function Rr(e) {
        var t = e.r,
          r = e.g,
          n = e.b,
          o = pt(t, r, n);
        return { h: o.h * 360, s: o.s, v: o.v };
      }
      function ke(e) {
        var t = e.r,
          r = e.g,
          n = e.b;
        return '#'.concat(vt(t, r, n, !1));
      }
      function Po(e, t, r) {
        var n = r / 100,
          o = { r: (t.r - e.r) * n + e.r, g: (t.g - e.g) * n + e.g, b: (t.b - e.b) * n + e.b };
        return o;
      }
      function Ar(e, t, r) {
        var n;
        return (
          Math.round(e.h) >= 60 && Math.round(e.h) <= 240
            ? (n = r ? Math.round(e.h) - Ne * t : Math.round(e.h) + Ne * t)
            : (n = r ? Math.round(e.h) + Ne * t : Math.round(e.h) - Ne * t),
          n < 0 ? (n += 360) : n >= 360 && (n -= 360),
          n
        );
      }
      function Or(e, t, r) {
        if (e.h === 0 && e.s === 0) return e.s;
        var n;
        return (
          r ? (n = e.s - Tr * t) : t === wr ? (n = e.s + Tr) : (n = e.s + Mo * t),
          n > 1 && (n = 1),
          r && t === Er && n > 0.1 && (n = 0.1),
          n < 0.06 && (n = 0.06),
          Number(n.toFixed(2))
        );
      }
      function Ir(e, t, r) {
        var n;
        return r ? (n = e.v + Ho * t) : (n = e.v - Bo * t), n > 1 && (n = 1), Number(n.toFixed(2));
      }
      function pe(e) {
        for (
          var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = [],
            n = le(e),
            o = Er;
          o > 0;
          o -= 1
        ) {
          var a = Rr(n),
            i = ke(le({ h: Ar(a, o, !0), s: Or(a, o, !0), v: Ir(a, o, !0) }));
          r.push(i);
        }
        r.push(ke(n));
        for (var c = 1; c <= wr; c += 1) {
          var s = Rr(n),
            l = ke(le({ h: Ar(s, c), s: Or(s, c), v: Ir(s, c) }));
          r.push(l);
        }
        return t.theme === 'dark'
          ? $o.map(function (f) {
              var u = f.index,
                g = f.opacity,
                p = ke(Po(le(t.backgroundColor || '#141414'), le(r[u]), g * 100));
              return p;
            })
          : r;
      }
      var St = {
          red: '#F5222D',
          volcano: '#FA541C',
          orange: '#FA8C16',
          gold: '#FAAD14',
          yellow: '#FADB14',
          lime: '#A0D911',
          green: '#52C41A',
          cyan: '#13C2C2',
          blue: '#1677FF',
          geekblue: '#2F54EB',
          purple: '#722ED1',
          magenta: '#EB2F96',
          grey: '#666666',
        },
        B = {},
        Ct = {};
      Object.keys(St).forEach(function (e) {
        (B[e] = pe(St[e])),
          (B[e].primary = B[e][5]),
          (Ct[e] = pe(St[e], { theme: 'dark', backgroundColor: '#141414' })),
          (Ct[e].primary = Ct[e][5]);
      });
      var vc = B.red,
        mc = B.volcano,
        bc = B.gold,
        yc = B.orange,
        Sc = B.yellow,
        Cc = B.lime,
        xc = B.green,
        Tc = B.cyan,
        Ec = B.blue,
        wc = B.geekblue,
        Rc = B.purple,
        Ac = B.magenta,
        Oc = B.grey,
        Ic = B.grey,
        zo = (e) => {
          const { controlHeight: t } = e;
          return { controlHeightSM: t * 0.75, controlHeightXS: t * 0.5, controlHeightLG: t * 1.25 };
        };
      function Lo(e) {
        const { sizeUnit: t, sizeStep: r } = e;
        return {
          sizeXXL: t * (r + 8),
          sizeXL: t * (r + 4),
          sizeLG: t * (r + 2),
          sizeMD: t * (r + 1),
          sizeMS: t * r,
          size: t * r,
          sizeSM: t * (r - 1),
          sizeXS: t * (r - 2),
          sizeXXS: t * (r - 3),
        };
      }
      const Mr = {
        blue: '#1677ff',
        purple: '#722ED1',
        cyan: '#13C2C2',
        green: '#52C41A',
        magenta: '#EB2F96',
        pink: '#eb2f96',
        red: '#F5222D',
        orange: '#FA8C16',
        yellow: '#FADB14',
        volcano: '#FA541C',
        geekblue: '#2F54EB',
        gold: '#FAAD14',
        lime: '#A0D911',
      };
      var xt = Object.assign(Object.assign({}, Mr), {
          colorPrimary: '#1677ff',
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#ff4d4f',
          colorInfo: '#1677ff',
          colorTextBase: '',
          colorBgBase: '',
          fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
          fontFamilyCode:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: 14,
          lineWidth: 1,
          lineType: 'solid',
          motionUnit: 0.1,
          motionBase: 0,
          motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
          motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
          motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
          motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
          motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
          borderRadius: 6,
          sizeUnit: 4,
          sizeStep: 4,
          sizePopupArrow: 16,
          controlHeight: 32,
          zIndexBase: 0,
          zIndexPopupBase: 1e3,
          opacityImage: 1,
          wireframe: !1,
        }),
        F = (function () {
          function e(t, r) {
            t === void 0 && (t = ''), r === void 0 && (r = {});
            var n;
            if (t instanceof e) return t;
            typeof t == 'number' && (t = Ro(t)), (this.originalInput = t);
            var o = le(t);
            (this.originalInput = t),
              (this.r = o.r),
              (this.g = o.g),
              (this.b = o.b),
              (this.a = o.a),
              (this.roundA = Math.round(100 * this.a) / 100),
              (this.format = (n = r.format) !== null && n !== void 0 ? n : o.format),
              (this.gradientType = r.gradientType),
              this.r < 1 && (this.r = Math.round(this.r)),
              this.g < 1 && (this.g = Math.round(this.g)),
              this.b < 1 && (this.b = Math.round(this.b)),
              (this.isValid = o.ok);
          }
          return (
            (e.prototype.isDark = function () {
              return this.getBrightness() < 128;
            }),
            (e.prototype.isLight = function () {
              return !this.isDark();
            }),
            (e.prototype.getBrightness = function () {
              var t = this.toRgb();
              return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
            }),
            (e.prototype.getLuminance = function () {
              var t = this.toRgb(),
                r,
                n,
                o,
                a = t.r / 255,
                i = t.g / 255,
                c = t.b / 255;
              return (
                a <= 0.03928 ? (r = a / 12.92) : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
                i <= 0.03928 ? (n = i / 12.92) : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
                c <= 0.03928 ? (o = c / 12.92) : (o = Math.pow((c + 0.055) / 1.055, 2.4)),
                0.2126 * r + 0.7152 * n + 0.0722 * o
              );
            }),
            (e.prototype.getAlpha = function () {
              return this.a;
            }),
            (e.prototype.setAlpha = function (t) {
              return (this.a = yr(t)), (this.roundA = Math.round(100 * this.a) / 100), this;
            }),
            (e.prototype.isMonochrome = function () {
              var t = this.toHsl().s;
              return t === 0;
            }),
            (e.prototype.toHsv = function () {
              var t = pt(this.r, this.g, this.b);
              return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
            }),
            (e.prototype.toHsvString = function () {
              var t = pt(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                o = Math.round(t.v * 100);
              return this.a === 1
                ? 'hsv('.concat(r, ', ').concat(n, '%, ').concat(o, '%)')
                : 'hsva('
                    .concat(r, ', ')
                    .concat(n, '%, ')
                    .concat(o, '%, ')
                    .concat(this.roundA, ')');
            }),
            (e.prototype.toHsl = function () {
              var t = Sr(this.r, this.g, this.b);
              return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
            }),
            (e.prototype.toHslString = function () {
              var t = Sr(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                o = Math.round(t.l * 100);
              return this.a === 1
                ? 'hsl('.concat(r, ', ').concat(n, '%, ').concat(o, '%)')
                : 'hsla('
                    .concat(r, ', ')
                    .concat(n, '%, ')
                    .concat(o, '%, ')
                    .concat(this.roundA, ')');
            }),
            (e.prototype.toHex = function (t) {
              return t === void 0 && (t = !1), vt(this.r, this.g, this.b, t);
            }),
            (e.prototype.toHexString = function (t) {
              return t === void 0 && (t = !1), '#' + this.toHex(t);
            }),
            (e.prototype.toHex8 = function (t) {
              return t === void 0 && (t = !1), wo(this.r, this.g, this.b, this.a, t);
            }),
            (e.prototype.toHex8String = function (t) {
              return t === void 0 && (t = !1), '#' + this.toHex8(t);
            }),
            (e.prototype.toHexShortString = function (t) {
              return (
                t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
              );
            }),
            (e.prototype.toRgb = function () {
              return {
                r: Math.round(this.r),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a,
              };
            }),
            (e.prototype.toRgbString = function () {
              var t = Math.round(this.r),
                r = Math.round(this.g),
                n = Math.round(this.b);
              return this.a === 1
                ? 'rgb('.concat(t, ', ').concat(r, ', ').concat(n, ')')
                : 'rgba('.concat(t, ', ').concat(r, ', ').concat(n, ', ').concat(this.roundA, ')');
            }),
            (e.prototype.toPercentageRgb = function () {
              var t = function (r) {
                return ''.concat(Math.round(H(r, 255) * 100), '%');
              };
              return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
            }),
            (e.prototype.toPercentageRgbString = function () {
              var t = function (r) {
                return Math.round(H(r, 255) * 100);
              };
              return this.a === 1
                ? 'rgb('.concat(t(this.r), '%, ').concat(t(this.g), '%, ').concat(t(this.b), '%)')
                : 'rgba('
                    .concat(t(this.r), '%, ')
                    .concat(t(this.g), '%, ')
                    .concat(t(this.b), '%, ')
                    .concat(this.roundA, ')');
            }),
            (e.prototype.toName = function () {
              if (this.a === 0) return 'transparent';
              if (this.a < 1) return !1;
              for (
                var t = '#' + vt(this.r, this.g, this.b, !1), r = 0, n = Object.entries(mt);
                r < n.length;
                r++
              ) {
                var o = n[r],
                  a = o[0],
                  i = o[1];
                if (t === i) return a;
              }
              return !1;
            }),
            (e.prototype.toString = function (t) {
              var r = Boolean(t);
              t = t != null ? t : this.format;
              var n = !1,
                o = this.a < 1 && this.a >= 0,
                a = !r && o && (t.startsWith('hex') || t === 'name');
              return a
                ? t === 'name' && this.a === 0
                  ? this.toName()
                  : this.toRgbString()
                : (t === 'rgb' && (n = this.toRgbString()),
                  t === 'prgb' && (n = this.toPercentageRgbString()),
                  (t === 'hex' || t === 'hex6') && (n = this.toHexString()),
                  t === 'hex3' && (n = this.toHexString(!0)),
                  t === 'hex4' && (n = this.toHex8String(!0)),
                  t === 'hex8' && (n = this.toHex8String()),
                  t === 'name' && (n = this.toName()),
                  t === 'hsl' && (n = this.toHslString()),
                  t === 'hsv' && (n = this.toHsvString()),
                  n || this.toHexString());
            }),
            (e.prototype.toNumber = function () {
              return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
            }),
            (e.prototype.clone = function () {
              return new e(this.toString());
            }),
            (e.prototype.lighten = function (t) {
              t === void 0 && (t = 10);
              var r = this.toHsl();
              return (r.l += t / 100), (r.l = Le(r.l)), new e(r);
            }),
            (e.prototype.brighten = function (t) {
              t === void 0 && (t = 10);
              var r = this.toRgb();
              return (
                (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100))))),
                (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100))))),
                (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100))))),
                new e(r)
              );
            }),
            (e.prototype.darken = function (t) {
              t === void 0 && (t = 10);
              var r = this.toHsl();
              return (r.l -= t / 100), (r.l = Le(r.l)), new e(r);
            }),
            (e.prototype.tint = function (t) {
              return t === void 0 && (t = 10), this.mix('white', t);
            }),
            (e.prototype.shade = function (t) {
              return t === void 0 && (t = 10), this.mix('black', t);
            }),
            (e.prototype.desaturate = function (t) {
              t === void 0 && (t = 10);
              var r = this.toHsl();
              return (r.s -= t / 100), (r.s = Le(r.s)), new e(r);
            }),
            (e.prototype.saturate = function (t) {
              t === void 0 && (t = 10);
              var r = this.toHsl();
              return (r.s += t / 100), (r.s = Le(r.s)), new e(r);
            }),
            (e.prototype.greyscale = function () {
              return this.desaturate(100);
            }),
            (e.prototype.spin = function (t) {
              var r = this.toHsl(),
                n = (r.h + t) % 360;
              return (r.h = n < 0 ? 360 + n : n), new e(r);
            }),
            (e.prototype.mix = function (t, r) {
              r === void 0 && (r = 50);
              var n = this.toRgb(),
                o = new e(t).toRgb(),
                a = r / 100,
                i = {
                  r: (o.r - n.r) * a + n.r,
                  g: (o.g - n.g) * a + n.g,
                  b: (o.b - n.b) * a + n.b,
                  a: (o.a - n.a) * a + n.a,
                };
              return new e(i);
            }),
            (e.prototype.analogous = function (t, r) {
              t === void 0 && (t = 6), r === void 0 && (r = 30);
              var n = this.toHsl(),
                o = 360 / r,
                a = [this];
              for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; )
                (n.h = (n.h + o) % 360), a.push(new e(n));
              return a;
            }),
            (e.prototype.complement = function () {
              var t = this.toHsl();
              return (t.h = (t.h + 180) % 360), new e(t);
            }),
            (e.prototype.monochromatic = function (t) {
              t === void 0 && (t = 6);
              for (var r = this.toHsv(), n = r.h, o = r.s, a = r.v, i = [], c = 1 / t; t--; )
                i.push(new e({ h: n, s: o, v: a })), (a = (a + c) % 1);
              return i;
            }),
            (e.prototype.splitcomplement = function () {
              var t = this.toHsl(),
                r = t.h;
              return [
                this,
                new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
                new e({ h: (r + 216) % 360, s: t.s, l: t.l }),
              ];
            }),
            (e.prototype.onBackground = function (t) {
              var r = this.toRgb(),
                n = new e(t).toRgb(),
                o = r.a + n.a * (1 - r.a);
              return new e({
                r: (r.r * r.a + n.r * n.a * (1 - r.a)) / o,
                g: (r.g * r.a + n.g * n.a * (1 - r.a)) / o,
                b: (r.b * r.a + n.b * n.a * (1 - r.a)) / o,
                a: o,
              });
            }),
            (e.prototype.triad = function () {
              return this.polyad(3);
            }),
            (e.prototype.tetrad = function () {
              return this.polyad(4);
            }),
            (e.prototype.polyad = function (t) {
              for (var r = this.toHsl(), n = r.h, o = [this], a = 360 / t, i = 1; i < t; i++)
                o.push(new e({ h: (n + i * a) % 360, s: r.s, l: r.l }));
              return o;
            }),
            (e.prototype.equals = function (t) {
              return this.toRgbString() === new e(t).toRgbString();
            }),
            e
          );
        })();
      function Bc(e, t) {
        return e === void 0 && (e = ''), t === void 0 && (t = {}), new F(e, t);
      }
      function jo(e, t) {
        let { generateColorPalettes: r, generateNeutralColorPalettes: n } = t;
        const {
            colorSuccess: o,
            colorWarning: a,
            colorError: i,
            colorInfo: c,
            colorPrimary: s,
            colorBgBase: l,
            colorTextBase: f,
          } = e,
          u = r(s),
          g = r(o),
          p = r(a),
          m = r(i),
          h = r(c),
          y = n(l, f);
        return Object.assign(Object.assign({}, y), {
          colorPrimaryBg: u[1],
          colorPrimaryBgHover: u[2],
          colorPrimaryBorder: u[3],
          colorPrimaryBorderHover: u[4],
          colorPrimaryHover: u[5],
          colorPrimary: u[6],
          colorPrimaryActive: u[7],
          colorPrimaryTextHover: u[8],
          colorPrimaryText: u[9],
          colorPrimaryTextActive: u[10],
          colorSuccessBg: g[1],
          colorSuccessBgHover: g[2],
          colorSuccessBorder: g[3],
          colorSuccessBorderHover: g[4],
          colorSuccessHover: g[4],
          colorSuccess: g[6],
          colorSuccessActive: g[7],
          colorSuccessTextHover: g[8],
          colorSuccessText: g[9],
          colorSuccessTextActive: g[10],
          colorErrorBg: m[1],
          colorErrorBgHover: m[2],
          colorErrorBorder: m[3],
          colorErrorBorderHover: m[4],
          colorErrorHover: m[5],
          colorError: m[6],
          colorErrorActive: m[7],
          colorErrorTextHover: m[8],
          colorErrorText: m[9],
          colorErrorTextActive: m[10],
          colorWarningBg: p[1],
          colorWarningBgHover: p[2],
          colorWarningBorder: p[3],
          colorWarningBorderHover: p[4],
          colorWarningHover: p[4],
          colorWarning: p[6],
          colorWarningActive: p[7],
          colorWarningTextHover: p[8],
          colorWarningText: p[9],
          colorWarningTextActive: p[10],
          colorInfoBg: h[1],
          colorInfoBgHover: h[2],
          colorInfoBorder: h[3],
          colorInfoBorderHover: h[4],
          colorInfoHover: h[4],
          colorInfo: h[6],
          colorInfoActive: h[7],
          colorInfoTextHover: h[8],
          colorInfoText: h[9],
          colorInfoTextActive: h[10],
          colorBgMask: new F('#000').setAlpha(0.45).toRgbString(),
          colorWhite: '#fff',
        });
      }
      var No = (e) => {
        let t = e,
          r = e,
          n = e,
          o = e;
        return (
          e < 6 && e >= 5 ? (t = e + 1) : e < 16 && e >= 6 ? (t = e + 2) : e >= 16 && (t = 16),
          e < 7 && e >= 5
            ? (r = 4)
            : e < 8 && e >= 7
            ? (r = 5)
            : e < 14 && e >= 8
            ? (r = 6)
            : e < 16 && e >= 14
            ? (r = 7)
            : e >= 16 && (r = 8),
          e < 6 && e >= 2 ? (n = 1) : e >= 6 && (n = 2),
          e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
          {
            borderRadius: e > 16 ? 16 : e,
            borderRadiusXS: n,
            borderRadiusSM: r,
            borderRadiusLG: t,
            borderRadiusOuter: o,
          }
        );
      };
      function ko(e) {
        const { motionUnit: t, motionBase: r, borderRadius: n, lineWidth: o } = e;
        return Object.assign(
          {
            motionDurationFast: `${(r + t).toFixed(1)}s`,
            motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
            motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
            lineWidthBold: o + 1,
          },
          No(n),
        );
      }
      const _ = (e, t) => new F(e).setAlpha(t).toRgbString(),
        ve = (e, t) => new F(e).darken(t).toHexString(),
        Wo = (e) => {
          const t = pe(e);
          return {
            1: t[0],
            2: t[1],
            3: t[2],
            4: t[3],
            5: t[4],
            6: t[5],
            7: t[6],
            8: t[4],
            9: t[5],
            10: t[6],
          };
        },
        Fo = (e, t) => {
          const r = e || '#fff',
            n = t || '#000';
          return {
            colorBgBase: r,
            colorTextBase: n,
            colorText: _(n, 0.88),
            colorTextSecondary: _(n, 0.65),
            colorTextTertiary: _(n, 0.45),
            colorTextQuaternary: _(n, 0.25),
            colorFill: _(n, 0.15),
            colorFillSecondary: _(n, 0.06),
            colorFillTertiary: _(n, 0.04),
            colorFillQuaternary: _(n, 0.02),
            colorBgLayout: ve(r, 4),
            colorBgContainer: ve(r, 0),
            colorBgElevated: ve(r, 0),
            colorBgSpotlight: _(n, 0.85),
            colorBorder: ve(r, 15),
            colorBorderSecondary: ve(r, 6),
          };
        };
      function Do(e) {
        const t = new Array(10).fill(null).map((r, n) => {
          const o = n - 1,
            a = e * Math.pow(2.71828, o / 5),
            i = n > 1 ? Math.floor(a) : Math.ceil(a);
          return Math.floor(i / 2) * 2;
        });
        return (
          (t[1] = e),
          t.map((r) => {
            const n = r + 8;
            return { size: r, lineHeight: n / r };
          })
        );
      }
      var Zo = (e) => {
        const t = Do(e),
          r = t.map((o) => o.size),
          n = t.map((o) => o.lineHeight);
        return {
          fontSizeSM: r[0],
          fontSize: r[1],
          fontSizeLG: r[2],
          fontSizeXL: r[3],
          fontSizeHeading1: r[6],
          fontSizeHeading2: r[5],
          fontSizeHeading3: r[4],
          fontSizeHeading4: r[3],
          fontSizeHeading5: r[2],
          lineHeight: n[1],
          lineHeightLG: n[2],
          lineHeightSM: n[0],
          lineHeightHeading1: n[6],
          lineHeightHeading2: n[5],
          lineHeightHeading3: n[4],
          lineHeightHeading4: n[3],
          lineHeightHeading5: n[2],
        };
      };
      function Go(e) {
        const t = Object.keys(Mr)
          .map((r) => {
            const n = pe(e[r]);
            return new Array(10).fill(1).reduce((o, a, i) => ((o[`${r}-${i + 1}`] = n[i]), o), {});
          })
          .reduce((r, n) => ((r = Object.assign(Object.assign({}, r), n)), r), {});
        return Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, e), t),
                  jo(e, { generateColorPalettes: Wo, generateNeutralColorPalettes: Fo }),
                ),
                Zo(e.fontSize),
              ),
              Lo(e),
            ),
            zo(e),
          ),
          ko(e),
        );
      }
      function Tt(e) {
        return e >= 0 && e <= 255;
      }
      function Xo(e, t) {
        const { r, g: n, b: o, a } = new F(e).toRgb();
        if (a < 1) return e;
        const { r: i, g: c, b: s } = new F(t).toRgb();
        for (let l = 0.01; l <= 1; l += 0.01) {
          const f = Math.round((r - i * (1 - l)) / l),
            u = Math.round((n - c * (1 - l)) / l),
            g = Math.round((o - s * (1 - l)) / l);
          if (Tt(f) && Tt(u) && Tt(g))
            return new F({ r: f, g: u, b: g, a: Math.round(l * 100) / 100 }).toRgbString();
        }
        return new F({ r, g: n, b: o, a: 1 }).toRgbString();
      }
      var We = Xo,
        _o = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          return r;
        };
      function Uo(e) {
        const { override: t } = e,
          r = _o(e, ['override']),
          n = Object.assign({}, t);
        Object.keys(xt).forEach((g) => {
          delete n[g];
        });
        const o = Object.assign(Object.assign({}, r), n),
          a = 480,
          i = 576,
          c = 768,
          s = 992,
          l = 1200,
          f = 1600;
        return Object.assign(
          Object.assign(Object.assign({}, o), {
            colorLink: o.colorInfoText,
            colorLinkHover: o.colorInfoHover,
            colorLinkActive: o.colorInfoActive,
            colorFillContent: o.colorFillSecondary,
            colorFillContentHover: o.colorFill,
            colorFillAlter: o.colorFillQuaternary,
            colorBgContainerDisabled: o.colorFillTertiary,
            colorBorderBg: o.colorBgContainer,
            colorSplit: We(o.colorBorderSecondary, o.colorBgContainer),
            colorTextPlaceholder: o.colorTextQuaternary,
            colorTextDisabled: o.colorTextQuaternary,
            colorTextHeading: o.colorText,
            colorTextLabel: o.colorTextSecondary,
            colorTextDescription: o.colorTextTertiary,
            colorTextLightSolid: o.colorWhite,
            colorHighlight: o.colorError,
            colorBgTextHover: o.colorFillSecondary,
            colorBgTextActive: o.colorFill,
            colorIcon: o.colorTextTertiary,
            colorIconHover: o.colorText,
            colorErrorOutline: We(o.colorErrorBg, o.colorBgContainer),
            colorWarningOutline: We(o.colorWarningBg, o.colorBgContainer),
            fontSizeIcon: o.fontSizeSM,
            lineWidth: o.lineWidth,
            controlOutlineWidth: o.lineWidth * 2,
            controlInteractiveSize: o.controlHeight / 2,
            controlItemBgHover: o.colorFillTertiary,
            controlItemBgActive: o.colorPrimaryBg,
            controlItemBgActiveHover: o.colorPrimaryBgHover,
            controlItemBgActiveDisabled: o.colorFill,
            controlTmpOutline: o.colorFillQuaternary,
            controlOutline: We(o.colorPrimaryBg, o.colorBgContainer),
            lineType: o.lineType,
            borderRadius: o.borderRadius,
            borderRadiusXS: o.borderRadiusXS,
            borderRadiusSM: o.borderRadiusSM,
            borderRadiusLG: o.borderRadiusLG,
            fontWeightStrong: 600,
            opacityLoading: 0.65,
            linkDecoration: 'none',
            linkHoverDecoration: 'none',
            linkFocusDecoration: 'none',
            controlPaddingHorizontal: 12,
            controlPaddingHorizontalSM: 8,
            paddingXXS: o.sizeXXS,
            paddingXS: o.sizeXS,
            paddingSM: o.sizeSM,
            padding: o.size,
            paddingMD: o.sizeMD,
            paddingLG: o.sizeLG,
            paddingXL: o.sizeXL,
            paddingContentHorizontalLG: o.sizeLG,
            paddingContentVerticalLG: o.sizeMS,
            paddingContentHorizontal: o.sizeMS,
            paddingContentVertical: o.sizeSM,
            paddingContentHorizontalSM: o.size,
            paddingContentVerticalSM: o.sizeXS,
            marginXXS: o.sizeXXS,
            marginXS: o.sizeXS,
            marginSM: o.sizeSM,
            margin: o.size,
            marginMD: o.sizeMD,
            marginLG: o.sizeLG,
            marginXL: o.sizeXL,
            marginXXL: o.sizeXXL,
            boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
            screenXS: a,
            screenXSMin: a,
            screenXSMax: i - 1,
            screenSM: i,
            screenSMMin: i,
            screenSMMax: c - 1,
            screenMD: c,
            screenMDMin: c,
            screenMDMax: s - 1,
            screenLG: s,
            screenLGMin: s,
            screenLGMax: l - 1,
            screenXL: l,
            screenXLMin: l,
            screenXLMax: f - 1,
            screenXXL: f,
            screenXXLMin: f,
            boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
            boxShadowCard: `
      0 1px 2px -2px ${new F('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new F('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new F('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
            boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
            boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
            boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
            boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
            boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
          }),
          n,
        );
      }
      const Vo = lo(Go),
        Ko = { token: xt, hashed: !0 },
        Qo = d.createContext(Ko);
      function Hr() {
        const { token: e, hashed: t, theme: r, components: n } = d.useContext(Qo),
          o = `${yo}-${t || ''}`,
          a = r || Vo,
          [i, c] = Ln(a, [xt, e], {
            salt: o,
            override: Object.assign({ override: e }, n),
            formatToken: Uo,
          });
        return [a, i, t ? c : ''];
      }
      const Br = typeof CSSINJS_STATISTIC != 'undefined';
      let Et = !0;
      function Fe() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        if (!Br) return Object.assign.apply(Object, [{}].concat(t));
        Et = !1;
        const n = {};
        return (
          t.forEach((o) => {
            Object.keys(o).forEach((i) => {
              Object.defineProperty(n, i, { configurable: !0, enumerable: !0, get: () => o[i] });
            });
          }),
          (Et = !0),
          n
        );
      }
      const Yo = {},
        zc = {};
      function Jo() {}
      function qo(e) {
        let t,
          r = e,
          n = Jo;
        return (
          Br &&
            ((t = new Set()),
            (r = new Proxy(e, {
              get(o, a) {
                return Et && t.add(a), o[a];
              },
            })),
            (n = (o, a) => {
              Yo[o] = { global: Array.from(t), component: a };
            })),
          { token: r, keys: t, flush: n }
        );
      }
      function $r(e, t, r) {
        return (n) => {
          const [o, a, i] = Hr(),
            { getPrefixCls: c, iconPrefixCls: s } = (0, d.useContext)(ue),
            l = c();
          return (
            mr({ theme: o, token: a, hashId: i, path: ['Shared', l] }, () => [{ '&': ho(a) }]),
            [
              mr({ theme: o, token: a, hashId: i, path: [e, n, s] }, () => {
                const { token: f, flush: u } = qo(a),
                  g = typeof r == 'function' ? r(f) : r,
                  p = Object.assign(Object.assign({}, g), a[e]),
                  m = `.${n}`,
                  h = Fe(
                    f,
                    { componentCls: m, prefixCls: n, iconCls: `.${s}`, antCls: `.${l}` },
                    p,
                  ),
                  y = t(h, {
                    hashId: i,
                    prefixCls: n,
                    rootPrefixCls: l,
                    iconPrefixCls: s,
                    overrideComponentToken: a[e],
                  });
                return u(e, p), [po(a, n), y];
              }),
              i,
            ]
          );
        };
      }
      const ea = (e) => {
        const { componentCls: t, colorPrimary: r } = e;
        return {
          [t]: {
            position: 'absolute',
            background: 'transparent',
            pointerEvents: 'none',
            boxSizing: 'border-box',
            color: `var(--wave-color, ${r})`,
            boxShadow: '0 0 0 0 currentcolor',
            opacity: 0.2,
            '&.wave-motion-appear': {
              transition: [
                `box-shadow 0.4s ${e.motionEaseOutCirc}`,
                `opacity 2s ${e.motionEaseOutCirc}`,
              ].join(','),
              '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 },
            },
          },
        };
      };
      var ta = $r('Wave', (e) => [ea(e)]),
        Pr = x(81676),
        zr = x(52032),
        De = x(99932),
        Lr = x(78450),
        ra = x(10422),
        na = x.t(ra, 2),
        me = (0, P.Z)({}, na),
        oa = me.version,
        aa = me.render,
        ia = me.unmountComponentAtNode,
        Ze;
      try {
        var ca = Number((oa || '').split('.')[0]);
        ca >= 18 && (Ze = me.createRoot);
      } catch (e) {}
      function jr(e) {
        var t = me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        t && (0, ae.Z)(t) === 'object' && (t.usingClientEntryPoint = e);
      }
      var Ge = '__rc_react_root__';
      function sa(e, t) {
        jr(!0);
        var r = t[Ge] || Ze(t);
        jr(!1), r.render(e), (t[Ge] = r);
      }
      function la(e, t) {
        aa(e, t);
      }
      function Lc(e, t) {}
      function ua(e, t) {
        if (Ze) {
          sa(e, t);
          return;
        }
        la(e, t);
      }
      function da(e) {
        return wt.apply(this, arguments);
      }
      function wt() {
        return (
          (wt = (0, Lr.Z)(
            (0, De.Z)().mark(function e(t) {
              return (0, De.Z)().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt(
                        'return',
                        Promise.resolve().then(function () {
                          var o;
                          (o = t[Ge]) === null || o === void 0 || o.unmount(), delete t[Ge];
                        }),
                      );
                    case 1:
                    case 'end':
                      return n.stop();
                  }
              }, e);
            }),
          )),
          wt.apply(this, arguments)
        );
      }
      function fa(e) {
        ia(e);
      }
      function jc(e) {}
      function ga(e) {
        return Rt.apply(this, arguments);
      }
      function Rt() {
        return (
          (Rt = (0, Lr.Z)(
            (0, De.Z)().mark(function e(t) {
              return (0, De.Z)().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (Ze === void 0) {
                        n.next = 2;
                        break;
                      }
                      return n.abrupt('return', da(t));
                    case 2:
                      fa(t);
                    case 3:
                    case 'end':
                      return n.stop();
                  }
              }, e);
            }),
          )),
          Rt.apply(this, arguments)
        );
      }
      function ha(e) {
        const t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
        return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
      }
      function At(e) {
        return (
          e &&
          e !== '#fff' &&
          e !== '#ffffff' &&
          e !== 'rgb(255, 255, 255)' &&
          e !== 'rgba(255, 255, 255, 1)' &&
          ha(e) &&
          !/rgba\((?:\d*, ){3}0\)/.test(e) &&
          e !== 'transparent'
        );
      }
      function pa(e) {
        const { borderTopColor: t, borderColor: r, backgroundColor: n } = getComputedStyle(e);
        return At(t) ? t : At(r) ? r : At(n) ? n : null;
      }
      function Ot(e) {
        return Number.isNaN(e) ? 0 : e;
      }
      const va = (e) => {
        const { className: t, target: r } = e,
          n = d.useRef(null),
          [o, a] = d.useState(null),
          [i, c] = d.useState([]),
          [s, l] = d.useState(0),
          [f, u] = d.useState(0),
          [g, p] = d.useState(0),
          [m, h] = d.useState(0),
          [y, A] = d.useState(!1),
          S = {
            left: s,
            top: f,
            width: g,
            height: m,
            borderRadius: i.map((b) => `${b}px`).join(' '),
          };
        o && (S['--wave-color'] = o);
        function T() {
          const b = getComputedStyle(r);
          a(pa(r));
          const C = b.position === 'static',
            { borderLeftWidth: E, borderTopWidth: v } = b;
          l(C ? r.offsetLeft : Ot(-parseFloat(E))),
            u(C ? r.offsetTop : Ot(-parseFloat(v))),
            p(r.offsetWidth),
            h(r.offsetHeight);
          const {
            borderTopLeftRadius: O,
            borderTopRightRadius: R,
            borderBottomLeftRadius: w,
            borderBottomRightRadius: $,
          } = b;
          c([O, R, $, w].map((M) => Ot(parseFloat(M))));
        }
        return (
          d.useEffect(() => {
            if (r) {
              const b = (0, zr.Z)(() => {
                T(), A(!0);
              });
              let C;
              return (
                typeof ResizeObserver != 'undefined' && ((C = new ResizeObserver(T)), C.observe(r)),
                () => {
                  zr.Z.cancel(b), C == null || C.disconnect();
                }
              );
            }
          }, []),
          y
            ? d.createElement(
                Pr.Z,
                {
                  visible: !0,
                  motionAppear: !0,
                  motionName: 'wave-motion',
                  motionDeadline: 5e3,
                  onAppearEnd: (b, C) => {
                    var E;
                    if (C.deadline || C.propertyName === 'opacity') {
                      const v = (E = n.current) === null || E === void 0 ? void 0 : E.parentElement;
                      ga(v).then(() => {
                        var O;
                        (O = v.parentElement) === null || O === void 0 || O.removeChild(v);
                      });
                    }
                    return !1;
                  },
                },
                (b) => {
                  let { className: C } = b;
                  return d.createElement('div', { ref: n, className: oe()(t, C), style: S });
                },
              )
            : null
        );
      };
      function ma(e, t) {
        const r = document.createElement('div');
        (r.style.position = 'absolute'),
          (r.style.left = '0px'),
          (r.style.top = '0px'),
          e == null || e.insertBefore(r, e == null ? void 0 : e.firstChild),
          ua(d.createElement(va, { target: e, className: t }), r);
      }
      function ba(e, t) {
        function r() {
          const n = e.current;
          ma(n, t);
        }
        return r;
      }
      var ya = (e) => {
          const { children: t, disabled: r } = e,
            { getPrefixCls: n } = (0, d.useContext)(ue),
            o = (0, d.useRef)(null),
            a = n('wave'),
            [, i] = ta(a),
            c = ba(o, oe()(a, i));
          if (
            (d.useEffect(() => {
              const l = o.current;
              if (!l || l.nodeType !== 1 || r) return;
              const f = (u) => {
                u.target.tagName === 'INPUT' ||
                  !(0, hn.Z)(u.target) ||
                  !l.getAttribute ||
                  l.getAttribute('disabled') ||
                  l.disabled ||
                  l.className.includes('disabled') ||
                  l.className.includes('-leave') ||
                  c();
              };
              return (
                l.addEventListener('click', f, !0),
                () => {
                  l.removeEventListener('click', f, !0);
                }
              );
            }, [r]),
            !d.isValidElement(t))
          )
            return t != null ? t : null;
          const s = (0, Zt.Yr)(t) ? (0, Zt.sQ)(t.ref, o) : o;
          return Xt(t, { ref: s });
        },
        Sa = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          return r;
        };
      const Nr = d.createContext(void 0);
      var Ca = (e) => {
        const { getPrefixCls: t, direction: r } = d.useContext(ue),
          { prefixCls: n, size: o, className: a } = e,
          i = Sa(e, ['prefixCls', 'size', 'className']),
          c = t('btn-group', n),
          [, , s] = Hr();
        let l = '';
        switch (o) {
          case 'large':
            l = 'lg';
            break;
          case 'small':
            l = 'sm';
            break;
          case 'middle':
          case void 0:
            break;
          default:
        }
        const f = oe()(c, { [`${c}-${l}`]: l, [`${c}-rtl`]: r === 'rtl' }, a, s);
        return d.createElement(
          Nr.Provider,
          { value: o },
          d.createElement('div', Object.assign({}, i, { className: f })),
        );
      };
      const kr = /^[\u4e00-\u9fa5]{2}$/,
        It = kr.test.bind(kr);
      function xa(e) {
        return typeof e == 'string';
      }
      function Mt(e) {
        return e === 'text' || e === 'link';
      }
      function Ta(e, t) {
        if (e == null) return;
        const r = t ? ' ' : '';
        return typeof e != 'string' && typeof e != 'number' && xa(e.type) && It(e.props.children)
          ? Xt(e, { children: e.props.children.split('').join(r) })
          : typeof e == 'string'
          ? It(e)
            ? d.createElement('span', null, e.split('').join(r))
            : d.createElement('span', null, e)
          : pn(e)
          ? d.createElement('span', null, e)
          : e;
      }
      function Ea(e, t) {
        let r = !1;
        const n = [];
        return (
          d.Children.forEach(e, (o) => {
            const a = typeof o,
              i = a === 'string' || a === 'number';
            if (r && i) {
              const c = n.length - 1,
                s = n[c];
              n[c] = `${s}${o}`;
            } else n.push(o);
            r = i;
          }),
          d.Children.map(n, (o) => Ta(o, t))
        );
      }
      const Wc = null,
        Fc = null,
        Dc = null;
      var wa = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
                },
              },
            ],
          },
          name: 'loading',
          theme: 'outlined',
        },
        Ra = wa,
        Wr = x(58733),
        Aa = (0, d.createContext)({}),
        Fr = Aa;
      function Oa(e, t) {
        (0, gr.ZP)(e, '[@ant-design/icons] '.concat(t));
      }
      function Dr(e) {
        return (
          (0, ae.Z)(e) === 'object' &&
          typeof e.name == 'string' &&
          typeof e.theme == 'string' &&
          ((0, ae.Z)(e.icon) === 'object' || typeof e.icon == 'function')
        );
      }
      function Zr() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Object.keys(e).reduce(function (t, r) {
          var n = e[r];
          switch (r) {
            case 'class':
              (t.className = n), delete t.class;
              break;
            default:
              t[r] = n;
          }
          return t;
        }, {});
      }
      function Ht(e, t, r) {
        return r
          ? d.createElement(
              e.tag,
              (0, P.Z)((0, P.Z)({ key: t }, Zr(e.attrs)), r),
              (e.children || []).map(function (n, o) {
                return Ht(n, ''.concat(t, '-').concat(e.tag, '-').concat(o));
              }),
            )
          : d.createElement(
              e.tag,
              (0, P.Z)({ key: t }, Zr(e.attrs)),
              (e.children || []).map(function (n, o) {
                return Ht(n, ''.concat(t, '-').concat(e.tag, '-').concat(o));
              }),
            );
      }
      function Gr(e) {
        return pe(e)[0];
      }
      function Xr(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      var Zc = {
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
          focusable: 'false',
        },
        Ia = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
        Ma = function () {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ia,
            r = (0, d.useContext)(Fr),
            n = r.csp,
            o = r.prefixCls,
            a = t;
          o && (a = a.replace(/anticon/g, o)),
            (0, d.useEffect)(function () {
              we(a, '@ant-design-icons', { prepend: !0, csp: n });
            }, []);
        },
        Ha = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
        be = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
      function Ba(e) {
        var t = e.primaryColor,
          r = e.secondaryColor;
        (be.primaryColor = t), (be.secondaryColor = r || Gr(t)), (be.calculated = !!r);
      }
      function $a() {
        return (0, P.Z)({}, be);
      }
      var Xe = function (t) {
        var r = t.icon,
          n = t.className,
          o = t.onClick,
          a = t.style,
          i = t.primaryColor,
          c = t.secondaryColor,
          s = (0, Wr.Z)(t, Ha),
          l = be;
        if (
          (i && (l = { primaryColor: i, secondaryColor: c || Gr(i) }),
          Ma(),
          Oa(Dr(r), 'icon should be icon definiton, but got '.concat(r)),
          !Dr(r))
        )
          return null;
        var f = r;
        return (
          f &&
            typeof f.icon == 'function' &&
            (f = (0, P.Z)((0, P.Z)({}, f), {}, { icon: f.icon(l.primaryColor, l.secondaryColor) })),
          Ht(
            f.icon,
            'svg-'.concat(f.name),
            (0, P.Z)(
              {
                className: n,
                onClick: o,
                style: a,
                'data-icon': f.name,
                width: '1em',
                height: '1em',
                fill: 'currentColor',
                'aria-hidden': 'true',
              },
              s,
            ),
          )
        );
      };
      (Xe.displayName = 'IconReact'), (Xe.getTwoToneColors = $a), (Xe.setTwoToneColors = Ba);
      var Bt = Xe;
      function _r(e) {
        var t = Xr(e),
          r = (0, N.Z)(t, 2),
          n = r[0],
          o = r[1];
        return Bt.setTwoToneColors({ primaryColor: n, secondaryColor: o });
      }
      function Pa() {
        var e = Bt.getTwoToneColors();
        return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
      }
      var za = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
      _r('#1890ff');
      var _e = d.forwardRef(function (e, t) {
        var r,
          n = e.className,
          o = e.icon,
          a = e.spin,
          i = e.rotate,
          c = e.tabIndex,
          s = e.onClick,
          l = e.twoToneColor,
          f = (0, Wr.Z)(e, za),
          u = d.useContext(Fr),
          g = u.prefixCls,
          p = g === void 0 ? 'anticon' : g,
          m = u.rootClassName,
          h = oe()(
            m,
            p,
            ((r = {}),
            (0, j.Z)(r, ''.concat(p, '-').concat(o.name), !!o.name),
            (0, j.Z)(r, ''.concat(p, '-spin'), !!a || o.name === 'loading'),
            r),
            n,
          ),
          y = c;
        y === void 0 && s && (y = -1);
        var A = i
            ? { msTransform: 'rotate('.concat(i, 'deg)'), transform: 'rotate('.concat(i, 'deg)') }
            : void 0,
          S = Xr(l),
          T = (0, N.Z)(S, 2),
          b = T[0],
          C = T[1];
        return d.createElement(
          'span',
          (0, P.Z)(
            (0, P.Z)({ role: 'img', 'aria-label': o.name }, f),
            {},
            { ref: t, tabIndex: y, onClick: s, className: h },
          ),
          d.createElement(Bt, { icon: o, primaryColor: b, secondaryColor: C, style: A }),
        );
      });
      (_e.displayName = 'AntdIcon'), (_e.getTwoToneColor = Pa), (_e.setTwoToneColor = _r);
      var La = _e,
        Ur = function (t, r) {
          return d.createElement(La, (0, P.Z)((0, P.Z)({}, t), {}, { ref: r, icon: Ra }));
        };
      Ur.displayName = 'LoadingOutlined';
      var Vr = d.forwardRef(Ur);
      const $t = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
        Pt = (e) => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' });
      var ja = (e) => {
        let { prefixCls: t, loading: r, existIcon: n } = e;
        const o = !!r;
        return n
          ? d.createElement('span', { className: `${t}-loading-icon` }, d.createElement(Vr, null))
          : d.createElement(
              Pr.Z,
              {
                visible: o,
                motionName: `${t}-loading-icon-motion`,
                removeOnLeave: !0,
                onAppearStart: $t,
                onAppearActive: Pt,
                onEnterStart: $t,
                onEnterActive: Pt,
                onLeaveStart: Pt,
                onLeaveActive: $t,
              },
              (a, i) => {
                let { className: c, style: s } = a;
                return d.createElement(
                  'span',
                  { className: `${t}-loading-icon`, style: s, ref: i },
                  d.createElement(Vr, { className: c }),
                );
              },
            );
      };
      const Kr = (e, t) => ({
        [`> span, > ${e}`]: {
          '&:not(:last-child)': {
            [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } },
          },
          '&:not(:first-child)': {
            [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } },
          },
        },
      });
      var Na = (e) => {
        const {
          componentCls: t,
          fontSize: r,
          lineWidth: n,
          colorPrimaryHover: o,
          colorErrorHover: a,
        } = e;
        return {
          [`${t}-group`]: [
            {
              position: 'relative',
              display: 'inline-flex',
              [`> span, > ${t}`]: {
                '&:not(:last-child)': {
                  [`&, & > ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
                },
                '&:not(:first-child)': {
                  marginInlineStart: -n,
                  [`&, & > ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
                },
              },
              [t]: {
                position: 'relative',
                zIndex: 1,
                [`&:hover,
          &:focus,
          &:active`]: { zIndex: 2 },
                '&[disabled]': { zIndex: 0 },
              },
              [`${t}-icon-only`]: { fontSize: r },
            },
            Kr(`${t}-primary`, o),
            Kr(`${t}-danger`, a),
          ],
        };
      };
      function ka(e, t, r) {
        const { focusElCls: n, focus: o, borderElCls: a } = r,
          i = a ? '> *' : '',
          c = ['hover', o ? 'focus' : null, 'active']
            .filter(Boolean)
            .map((s) => `&:${s} ${i}`)
            .join(',');
        return {
          [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
          '&-item': Object.assign(
            Object.assign({ [c]: { zIndex: 2 } }, n ? { [`&${n}`]: { zIndex: 2 } } : {}),
            { [`&[disabled] ${i}`]: { zIndex: 0 } },
          ),
        };
      }
      function Wa(e, t, r) {
        const { borderElCls: n } = r,
          o = n ? `> ${n}` : '';
        return {
          [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: { borderRadius: 0 },
          [`&-item:not(${t}-last-item)${t}-first-item`]: {
            [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
            },
          },
          [`&-item:not(${t}-first-item)${t}-last-item`]: {
            [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
            },
          },
        };
      }
      function Fa(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { focus: !0 };
        const { componentCls: r } = e,
          n = `${r}-compact`;
        return { [n]: Object.assign(Object.assign({}, ka(e, n, t)), Wa(r, n, t)) };
      }
      function Da(e, t) {
        return {
          [`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
          '&-item': { '&:hover,&:focus,&:active': { zIndex: 2 }, '&[disabled]': { zIndex: 0 } },
        };
      }
      function Za(e, t) {
        return {
          [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
          [`&-item${t}-first-item:not(${t}-last-item)`]: {
            [`&, &${e}-sm, &${e}-lg`]: { borderEndEndRadius: 0, borderEndStartRadius: 0 },
          },
          [`&-item${t}-last-item:not(${t}-first-item)`]: {
            [`&, &${e}-sm, &${e}-lg`]: { borderStartStartRadius: 0, borderStartEndRadius: 0 },
          },
        };
      }
      function Ga(e) {
        const t = `${e.componentCls}-compact-vertical`;
        return { [t]: Object.assign(Object.assign({}, Da(e, t)), Za(e.componentCls, t)) };
      }
      const Xa = (e) => {
          const { componentCls: t, iconCls: r } = e;
          return {
            [t]: {
              outline: 'none',
              position: 'relative',
              display: 'inline-block',
              fontWeight: 400,
              whiteSpace: 'nowrap',
              textAlign: 'center',
              backgroundImage: 'none',
              backgroundColor: 'transparent',
              border: `${e.lineWidth}px ${e.lineType} transparent`,
              cursor: 'pointer',
              transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
              userSelect: 'none',
              touchAction: 'manipulation',
              lineHeight: e.lineHeight,
              color: e.colorText,
              '> span': { display: 'inline-block' },
              [`> ${r} + span, > span + ${r}`]: { marginInlineStart: e.marginXS },
              '> a': { color: 'currentColor' },
              '&:not(:disabled)': Object.assign({}, mo(e)),
              [`&-icon-only${t}-compact-item`]: { flex: 'none' },
              [`&-compact-item${t}-primary`]: {
                [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
                  position: 'relative',
                  '&:before': {
                    position: 'absolute',
                    top: -e.lineWidth,
                    insetInlineStart: -e.lineWidth,
                    display: 'inline-block',
                    width: e.lineWidth,
                    height: `calc(100% + ${e.lineWidth * 2}px)`,
                    backgroundColor: e.colorPrimaryHover,
                    content: '""',
                  },
                },
              },
              '&-compact-vertical-item': {
                [`&${t}-primary`]: {
                  [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
                    position: 'relative',
                    '&:before': {
                      position: 'absolute',
                      top: -e.lineWidth,
                      insetInlineStart: -e.lineWidth,
                      display: 'inline-block',
                      width: `calc(100% + ${e.lineWidth * 2}px)`,
                      height: e.lineWidth,
                      backgroundColor: e.colorPrimaryHover,
                      content: '""',
                    },
                  },
                },
              },
            },
          };
        },
        U = (e, t) => ({ '&:not(:disabled)': { '&:hover': e, '&:active': t } }),
        _a = (e) => ({
          minWidth: e.controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          borderRadius: '50%',
        }),
        Ua = (e) => ({
          borderRadius: e.controlHeight,
          paddingInlineStart: e.controlHeight / 2,
          paddingInlineEnd: e.controlHeight / 2,
        }),
        zt = (e) => ({
          cursor: 'not-allowed',
          borderColor: e.colorBorder,
          color: e.colorTextDisabled,
          backgroundColor: e.colorBgContainerDisabled,
          boxShadow: 'none',
        }),
        Ue = (e, t, r, n, o, a, i) => ({
          [`&${e}-background-ghost`]: Object.assign(
            Object.assign(
              {
                color: t || void 0,
                backgroundColor: 'transparent',
                borderColor: r || void 0,
                boxShadow: 'none',
              },
              U(
                Object.assign({ backgroundColor: 'transparent' }, a),
                Object.assign({ backgroundColor: 'transparent' }, i),
              ),
            ),
            {
              '&:disabled': { cursor: 'not-allowed', color: n || void 0, borderColor: o || void 0 },
            },
          ),
        }),
        Lt = (e) => ({ '&:disabled': Object.assign({}, zt(e)) }),
        Qr = (e) => Object.assign({}, Lt(e)),
        Ve = (e) => ({ '&:disabled': { cursor: 'not-allowed', color: e.colorTextDisabled } }),
        Yr = (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, Qr(e)), {
                  backgroundColor: e.colorBgContainer,
                  borderColor: e.colorBorder,
                  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
                }),
                U(
                  { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
                  { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
                ),
              ),
              Ue(
                e.componentCls,
                e.colorBgContainer,
                e.colorBgContainer,
                e.colorTextDisabled,
                e.colorBorder,
              ),
            ),
            {
              [`&${e.componentCls}-dangerous`]: Object.assign(
                Object.assign(
                  Object.assign(
                    { color: e.colorError, borderColor: e.colorError },
                    U(
                      { color: e.colorErrorHover, borderColor: e.colorErrorBorderHover },
                      { color: e.colorErrorActive, borderColor: e.colorErrorActive },
                    ),
                  ),
                  Ue(
                    e.componentCls,
                    e.colorError,
                    e.colorError,
                    e.colorTextDisabled,
                    e.colorBorder,
                  ),
                ),
                Lt(e),
              ),
            },
          ),
        Va = (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, Qr(e)), {
                  color: e.colorTextLightSolid,
                  backgroundColor: e.colorPrimary,
                  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
                }),
                U(
                  { color: e.colorTextLightSolid, backgroundColor: e.colorPrimaryHover },
                  { color: e.colorTextLightSolid, backgroundColor: e.colorPrimaryActive },
                ),
              ),
              Ue(
                e.componentCls,
                e.colorPrimary,
                e.colorPrimary,
                e.colorTextDisabled,
                e.colorBorder,
                { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
                { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive },
              ),
            ),
            {
              [`&${e.componentCls}-dangerous`]: Object.assign(
                Object.assign(
                  Object.assign(
                    {
                      backgroundColor: e.colorError,
                      boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
                    },
                    U(
                      { backgroundColor: e.colorErrorHover },
                      { backgroundColor: e.colorErrorActive },
                    ),
                  ),
                  Ue(
                    e.componentCls,
                    e.colorError,
                    e.colorError,
                    e.colorTextDisabled,
                    e.colorBorder,
                    { color: e.colorErrorHover, borderColor: e.colorErrorHover },
                    { color: e.colorErrorActive, borderColor: e.colorErrorActive },
                  ),
                ),
                Lt(e),
              ),
            },
          ),
        Ka = (e) => Object.assign(Object.assign({}, Yr(e)), { borderStyle: 'dashed' }),
        Qa = (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                { color: e.colorLink },
                U({ color: e.colorLinkHover }, { color: e.colorLinkActive }),
              ),
              Ve(e),
            ),
            {
              [`&${e.componentCls}-dangerous`]: Object.assign(
                Object.assign(
                  { color: e.colorError },
                  U({ color: e.colorErrorHover }, { color: e.colorErrorActive }),
                ),
                Ve(e),
              ),
            },
          ),
        Ya = (e) =>
          Object.assign(
            Object.assign(
              Object.assign(
                {},
                U(
                  { color: e.colorText, backgroundColor: e.colorBgTextHover },
                  { color: e.colorText, backgroundColor: e.colorBgTextActive },
                ),
              ),
              Ve(e),
            ),
            {
              [`&${e.componentCls}-dangerous`]: Object.assign(
                Object.assign({ color: e.colorError }, Ve(e)),
                U(
                  { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
                  { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
                ),
              ),
            },
          ),
        Ja = (e) =>
          Object.assign(Object.assign({}, zt(e)), {
            [`&${e.componentCls}:hover`]: Object.assign({}, zt(e)),
          }),
        qa = (e) => {
          const { componentCls: t } = e;
          return {
            [`${t}-default`]: Yr(e),
            [`${t}-primary`]: Va(e),
            [`${t}-dashed`]: Ka(e),
            [`${t}-link`]: Qa(e),
            [`${t}-text`]: Ya(e),
            [`${t}-disabled`]: Ja(e),
          };
        },
        jt = function (e) {
          let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
          const {
              componentCls: r,
              iconCls: n,
              controlHeight: o,
              fontSize: a,
              lineHeight: i,
              lineWidth: c,
              borderRadius: s,
              buttonPaddingHorizontal: l,
            } = e,
            f = Math.max(0, (o - a * i) / 2 - c),
            u = l - c,
            g = `${r}-icon-only`;
          return [
            {
              [`${r}${t}`]: {
                fontSize: a,
                height: o,
                padding: `${f}px ${u}px`,
                borderRadius: s,
                [`&${g}`]: {
                  width: o,
                  paddingInlineStart: 0,
                  paddingInlineEnd: 0,
                  [`&${r}-round`]: { width: 'auto' },
                  '> span': { transform: 'scale(1.143)' },
                },
                [`&${r}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
                [`${r}-loading-icon`]: {
                  transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                },
                [`&:not(${g}) ${r}-loading-icon > ${n}`]: { marginInlineEnd: e.marginXS },
              },
            },
            { [`${r}${r}-circle${t}`]: _a(e) },
            { [`${r}${r}-round${t}`]: Ua(e) },
          ];
        },
        ei = (e) => jt(e),
        ti = (e) => {
          const t = Fe(e, {
            controlHeight: e.controlHeightSM,
            padding: e.paddingXS,
            buttonPaddingHorizontal: 8,
            borderRadius: e.borderRadiusSM,
          });
          return jt(t, `${e.componentCls}-sm`);
        },
        ri = (e) => {
          const t = Fe(e, {
            controlHeight: e.controlHeightLG,
            fontSize: e.fontSizeLG,
            borderRadius: e.borderRadiusLG,
          });
          return jt(t, `${e.componentCls}-lg`);
        },
        ni = (e) => {
          const { componentCls: t } = e;
          return { [t]: { [`&${t}-block`]: { width: '100%' } } };
        };
      var oi = $r('Button', (e) => {
          const { controlTmpOutline: t, paddingContentHorizontal: r } = e,
            n = Fe(e, { colorOutlineDefault: t, buttonPaddingHorizontal: r });
          return [Xa(n), ti(n), ei(n), ri(n), ni(n), qa(n), Na(n), Fa(e, { focus: !1 }), Ga(e)];
        }),
        ai = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          return r;
        };
      function _c(e) {
        return e === 'danger' ? { danger: !0 } : { type: e };
      }
      function ii(e) {
        if (typeof e == 'object' && e) {
          const t = e == null ? void 0 : e.delay;
          return { loading: !1, delay: !Number.isNaN(t) && typeof t == 'number' ? t : 0 };
        }
        return { loading: !!e, delay: 0 };
      }
      const ci = (e, t) => {
          const {
              loading: r = !1,
              prefixCls: n,
              type: o = 'default',
              danger: a,
              shape: i = 'default',
              size: c,
              disabled: s,
              className: l,
              rootClassName: f,
              children: u,
              icon: g,
              ghost: p = !1,
              block: m = !1,
              htmlType: h = 'button',
            } = e,
            y = ai(e, [
              'loading',
              'prefixCls',
              'type',
              'danger',
              'shape',
              'size',
              'disabled',
              'className',
              'rootClassName',
              'children',
              'icon',
              'ghost',
              'block',
              'htmlType',
            ]),
            { getPrefixCls: A, autoInsertSpaceInButton: S, direction: T } = d.useContext(ue),
            b = A('btn', n),
            [C, E] = oi(b),
            v = d.useContext(dn),
            O = d.useContext(un),
            R = s != null ? s : O,
            w = d.useContext(Nr),
            $ = d.useMemo(() => ii(r), [r]),
            [M, Q] = d.useState($.loading),
            [Y, Z] = d.useState(!1),
            J = t || d.createRef(),
            Ke = () => d.Children.count(u) === 1 && !g && !Mt(o),
            ye = () => {
              if (!J || !J.current || S === !1) return;
              const G = J.current.textContent;
              Ke() && It(G) ? Y || Z(!0) : Y && Z(!1);
            };
          d.useEffect(() => {
            let G = null;
            $.delay > 0
              ? (G = window.setTimeout(() => {
                  (G = null), Q(!0);
                }, $.delay))
              : Q($.loading);
            function Se() {
              G && (window.clearTimeout(G), (G = null));
            }
            return Se;
          }, [$]),
            d.useEffect(ye, [J]);
          const Qe = (G) => {
              const { onClick: Se } = e;
              if (M || R) {
                G.preventDefault();
                return;
              }
              Se == null || Se(G);
            },
            Ye = S !== !1,
            { compactSize: q, compactItemClassnames: kt } = fn(b, T),
            ui = { large: 'lg', small: 'sm', middle: void 0 },
            Jr = q || w || c || v,
            qr = (Jr && ui[Jr]) || '',
            di = M ? 'loading' : g,
            Wt = (0, an.Z)(y, ['navigate']),
            fi = Wt.href !== void 0 && R,
            en = oe()(
              b,
              E,
              {
                [`${b}-${i}`]: i !== 'default' && i,
                [`${b}-${o}`]: o,
                [`${b}-${qr}`]: qr,
                [`${b}-icon-only`]: !u && u !== 0 && !!di,
                [`${b}-background-ghost`]: p && !Mt(o),
                [`${b}-loading`]: M,
                [`${b}-two-chinese-chars`]: Y && Ye && !M,
                [`${b}-block`]: m,
                [`${b}-dangerous`]: !!a,
                [`${b}-rtl`]: T === 'rtl',
                [`${b}-disabled`]: fi,
              },
              kt,
              l,
              f,
            ),
            tn = g && !M ? g : d.createElement(ja, { existIcon: !!g, prefixCls: b, loading: !!M }),
            rn = u || u === 0 ? Ea(u, Ke() && Ye) : null;
          if (Wt.href !== void 0)
            return C(
              d.createElement(
                'a',
                Object.assign({}, Wt, { className: en, onClick: Qe, ref: J }),
                tn,
                rn,
              ),
            );
          let Ft = d.createElement(
            'button',
            Object.assign({}, y, { type: h, className: en, onClick: Qe, disabled: R, ref: J }),
            tn,
            rn,
          );
          return Mt(o) || (Ft = d.createElement(ya, { disabled: !!M }, Ft)), C(Ft);
        },
        Nt = d.forwardRef(ci);
      (Nt.Group = Ca), (Nt.__ANT_BUTTON = !0);
      var si = Nt,
        li = si;
    },
  },
]);
