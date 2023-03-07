!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react/jsx-runtime'), require('antd'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react/jsx-runtime', 'antd'], t)
    : t(
        ((e = 'undefined' != typeof globalThis ? globalThis : e || self)['SXF-Design'] = {}),
        e.jsxRuntime,
        e.antd,
      );
})(this, function (e, t, n) {
  'use strict';
  (e.Button = function () {
    return t.jsx('div', { children: t.jsx(n.Button, { type: 'primary', children: '44' }) });
  }),
    (e.Card = function () {
      return t.jsx('div', {});
    }),
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
});
//# sourceMappingURL=index.js.map
