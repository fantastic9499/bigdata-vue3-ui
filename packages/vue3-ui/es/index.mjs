import { defineComponent as jt, computed as Tt, createElementBlock as nn, openBlock as pt, normalizeClass as Oo, renderSlot as xo, inject as Eo, ref as Me, h as rn, getCurrentInstance as Dt, nextTick as mn, reactive as Dr, createVNode as Ce, toRefs as Ao, unref as z, watch as jo, onMounted as Do, onUnmounted as Po, isRef as kt, resolveComponent as An, createBlock as Io, normalizeProps as Mo, guardReactiveProps as $o, withCtx as jn, Fragment as No, renderList as ko, createElementVNode as Ft, toDisplayString as Dn } from "vue";
import "./src/button/style/index.css";
import { Switch as Fo, Modal as Ro } from "ant-design-vue";
import "ant-design-vue/es/modal/style";
import "ant-design-vue/es/switch/style";
import "./src/table-settings-modal/style/index.css";
const Pr = (e) => (e.install = (n) => {
  const t = e.name;
  n.component(t, e);
}, e), Bo = /* @__PURE__ */ jt({
  name: "YfButton",
  __name: "index",
  props: {
    type: {}
  },
  setup(e) {
    const n = e, t = Tt(() => ({ [`yf-button--${n.type}`]: n.type }));
    return (r, o) => (pt(), nn("button", {
      class: Oo(["yf-button", t.value])
    }, [
      xo(r.$slots, "default")
    ], 2));
  }
}), Ho = Pr(Bo);
function ee(e, n) {
  Uo(e) && (e = "100%");
  var t = Yo(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function Uo(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Yo(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function zo(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function it(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Rt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Xo(e, n, t) {
  return {
    r: ee(e, 255) * 255,
    g: ee(n, 255) * 255,
    b: ee(t, 255) * 255
  };
}
function Bt(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * (6 * t) : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function Lo(e, n, t) {
  var r, o, a;
  if (e = ee(e, 360), n = ee(n, 100), t = ee(t, 100), n === 0)
    o = t, a = t, r = t;
  else {
    var i = t < 0.5 ? t * (1 + n) : t + n - t * n, s = 2 * t - i;
    r = Bt(s, i, e + 1 / 3), o = Bt(s, i, e), a = Bt(s, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function Vo(e, n, t) {
  e = ee(e, 255), n = ee(n, 255), t = ee(t, 255);
  var r = Math.max(e, n, t), o = Math.min(e, n, t), a = 0, i = r, s = r - o, l = r === 0 ? 0 : s / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (n - t) / s + (n < t ? 6 : 0);
        break;
      case n:
        a = (t - e) / s + 2;
        break;
      case t:
        a = (e - n) / s + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: i };
}
function Wo(e, n, t) {
  e = ee(e, 360) * 6, n = ee(n, 100), t = ee(t, 100);
  var r = Math.floor(e), o = e - r, a = t * (1 - n), i = t * (1 - o * n), s = t * (1 - (1 - o) * n), l = r % 6, c = [t, i, a, a, s, t][l], f = [s, t, t, i, a, a][l], d = [a, a, s, t, t, i][l];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function Go(e, n, t, r) {
  var o = [
    Rt(Math.round(e).toString(16)),
    Rt(Math.round(n).toString(16)),
    Rt(Math.round(t).toString(16))
  ];
  return o.join("");
}
function Pn(e) {
  return G(e) / 255;
}
function G(e) {
  return parseInt(e, 16);
}
var In = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Ue(e) {
  var n = { r: 0, g: 0, b: 0 }, t = 1, r = null, o = null, a = null, i = !1, s = !1;
  return typeof e == "string" && (e = Jo(e)), typeof e == "object" && (ce(e.r) && ce(e.g) && ce(e.b) ? (n = Xo(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ce(e.h) && ce(e.s) && ce(e.v) ? (r = it(e.s), o = it(e.v), n = Wo(e.h, r, o), i = !0, s = "hsv") : ce(e.h) && ce(e.s) && ce(e.l) && (r = it(e.s), a = it(e.l), n = Lo(e.h, r, a), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = zo(t), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: t
  };
}
var qo = "[-\\+]?\\d+%?", Zo = "[-\\+]?\\d*\\.\\d+%?", me = "(?:".concat(Zo, ")|(?:").concat(qo, ")"), Ht = "[\\s|\\(]+(".concat(me, ")[,|\\s]+(").concat(me, ")[,|\\s]+(").concat(me, ")\\s*\\)?"), Ut = "[\\s|\\(]+(".concat(me, ")[,|\\s]+(").concat(me, ")[,|\\s]+(").concat(me, ")[,|\\s]+(").concat(me, ")\\s*\\)?"), re = {
  CSS_UNIT: new RegExp(me),
  rgb: new RegExp("rgb" + Ht),
  rgba: new RegExp("rgba" + Ut),
  hsl: new RegExp("hsl" + Ht),
  hsla: new RegExp("hsla" + Ut),
  hsv: new RegExp("hsv" + Ht),
  hsva: new RegExp("hsva" + Ut),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Jo(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (In[e])
    e = In[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = re.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = re.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = re.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = re.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = re.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = re.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = re.hex8.exec(e), t ? {
    r: G(t[1]),
    g: G(t[2]),
    b: G(t[3]),
    a: Pn(t[4]),
    format: n ? "name" : "hex8"
  } : (t = re.hex6.exec(e), t ? {
    r: G(t[1]),
    g: G(t[2]),
    b: G(t[3]),
    format: n ? "name" : "hex"
  } : (t = re.hex4.exec(e), t ? {
    r: G(t[1] + t[1]),
    g: G(t[2] + t[2]),
    b: G(t[3] + t[3]),
    a: Pn(t[4] + t[4]),
    format: n ? "name" : "hex8"
  } : (t = re.hex3.exec(e), t ? {
    r: G(t[1] + t[1]),
    g: G(t[2] + t[2]),
    b: G(t[3] + t[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function ce(e) {
  return !!re.CSS_UNIT.exec(String(e));
}
var lt = 2, Mn = 0.16, Ko = 0.05, Qo = 0.05, ea = 0.15, Ir = 5, Mr = 4, ta = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function $n(e) {
  var n = e.r, t = e.g, r = e.b, o = Vo(n, t, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function st(e) {
  var n = e.r, t = e.g, r = e.b;
  return "#".concat(Go(n, t, r));
}
function na(e, n, t) {
  var r = t / 100, o = {
    r: (n.r - e.r) * r + e.r,
    g: (n.g - e.g) * r + e.g,
    b: (n.b - e.b) * r + e.b
  };
  return o;
}
function Nn(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - lt * n : Math.round(e.h) + lt * n : r = t ? Math.round(e.h) + lt * n : Math.round(e.h) - lt * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function kn(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - Mn * n : n === Mr ? r = e.s + Mn : r = e.s + Ko * n, r > 1 && (r = 1), t && n === Ir && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Fn(e, n, t) {
  var r;
  return t ? r = e.v + Qo * n : r = e.v - ea * n, r > 1 && (r = 1), Number(r.toFixed(2));
}
function on(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = Ue(e), o = Ir; o > 0; o -= 1) {
    var a = $n(r), i = st(Ue({
      h: Nn(a, o, !0),
      s: kn(a, o, !0),
      v: Fn(a, o, !0)
    }));
    t.push(i);
  }
  t.push(st(r));
  for (var s = 1; s <= Mr; s += 1) {
    var l = $n(r), c = st(Ue({
      h: Nn(l, s),
      s: kn(l, s),
      v: Fn(l, s)
    }));
    t.push(c);
  }
  return n.theme === "dark" ? ta.map(function(f) {
    var d = f.index, v = f.opacity, p = st(na(Ue(n.backgroundColor || "#141414"), Ue(t[d]), v * 100));
    return p;
  }) : t;
}
var Yt = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ht = {}, zt = {};
Object.keys(Yt).forEach(function(e) {
  ht[e] = on(Yt[e]), ht[e].primary = ht[e][5], zt[e] = on(Yt[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), zt[e].primary = zt[e][5];
});
var ra = ht.blue, oa = Symbol("iconContext"), $r = function() {
  return Eo(oa, {
    prefixCls: Me("anticon"),
    rootClassName: Me(""),
    csp: Me()
  });
};
function bn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function aa(e, n) {
  return e && e.contains ? e.contains(n) : !1;
}
var Rn = "data-vc-order", ia = "vc-icon-key", an = /* @__PURE__ */ new Map();
function Nr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : ia;
}
function yn(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function la(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function kr(e) {
  return Array.from((an.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function Fr(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!bn())
    return null;
  var t = n.csp, r = n.prepend, o = document.createElement("style");
  o.setAttribute(Rn, la(r)), t && t.nonce && (o.nonce = t.nonce), o.innerHTML = e;
  var a = yn(n), i = a.firstChild;
  if (r) {
    if (r === "queue") {
      var s = kr(a).filter(function(l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(Rn));
      });
      if (s.length)
        return a.insertBefore(o, s[s.length - 1].nextSibling), o;
    }
    a.insertBefore(o, i);
  } else
    a.appendChild(o);
  return o;
}
function sa(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = yn(n);
  return kr(t).find(function(r) {
    return r.getAttribute(Nr(n)) === e;
  });
}
function ca(e, n) {
  var t = an.get(e);
  if (!t || !aa(document, t)) {
    var r = Fr("", n), o = r.parentNode;
    an.set(e, o), e.removeChild(r);
  }
}
function ua(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = yn(t);
  ca(r, t);
  var o = sa(n, t);
  if (o)
    return t.csp && t.csp.nonce && o.nonce !== t.csp.nonce && (o.nonce = t.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var a = Fr(e, t);
  return a.setAttribute(Nr(t), n), a;
}
function Bn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), r.forEach(function(o) {
      fa(e, o, t[o]);
    });
  }
  return e;
}
function fa(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function da(e, n) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(n));
}
function pa(e, n) {
  da(e, "[@ant-design/icons-vue] ".concat(n));
}
function Hn(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function ln(e, n, t) {
  return t ? rn(e.tag, Bn({
    key: n
  }, t, e.attrs), (e.children || []).map(function(r, o) {
    return ln(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : rn(e.tag, Bn({
    key: n
  }, e.attrs), (e.children || []).map(function(r, o) {
    return ln(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function Rr(e) {
  return on(e)[0];
}
function Br(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var ha = `
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
`;
function Hr(e) {
  return e && e.getRootNode && e.getRootNode();
}
function ga(e) {
  return bn() ? Hr(e) instanceof ShadowRoot : !1;
}
function va(e) {
  return ga(e) ? Hr(e) : null;
}
var ma = function() {
  var n = $r(), t = n.prefixCls, r = n.csp, o = Dt(), a = ha;
  t && (a = a.replace(/anticon/g, t.value)), mn(function() {
    if (bn()) {
      var i = o.vnode.el, s = va(i);
      ua(a, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: s
      });
    }
  });
}, ba = ["icon", "primaryColor", "secondaryColor"];
function ya(e, n) {
  if (e == null) return {};
  var t = wa(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function wa(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function gt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), r.forEach(function(o) {
      _a(e, o, t[o]);
    });
  }
  return e;
}
function _a(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var We = Dr({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function Ta(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  We.primaryColor = n, We.secondaryColor = t || Rr(n), We.calculated = !!t;
}
function Sa() {
  return gt({}, We);
}
var ye = function(n, t) {
  var r = gt({}, n, t.attrs), o = r.icon, a = r.primaryColor, i = r.secondaryColor, s = ya(r, ba), l = We;
  if (a && (l = {
    primaryColor: a,
    secondaryColor: i || Rr(a)
  }), pa(Hn(o), "icon should be icon definiton, but got ".concat(o)), !Hn(o))
    return null;
  var c = o;
  return c && typeof c.icon == "function" && (c = gt({}, c, {
    icon: c.icon(l.primaryColor, l.secondaryColor)
  })), ln(c.icon, "svg-".concat(c.name), gt({}, s, {
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ye.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ye.inheritAttrs = !1;
ye.displayName = "IconBase";
ye.getTwoToneColors = Sa;
ye.setTwoToneColors = Ta;
function Ca(e, n) {
  return Aa(e) || Ea(e, n) || xa(e, n) || Oa();
}
function Oa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xa(e, n) {
  if (e) {
    if (typeof e == "string") return Un(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Un(e, n);
  }
}
function Un(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Ea(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (t = t.call(e); !(o = (i = t.next()).done) && (r.push(i.value), !(n && r.length === n)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function Aa(e) {
  if (Array.isArray(e)) return e;
}
function Ur(e) {
  var n = Br(e), t = Ca(n, 2), r = t[0], o = t[1];
  return ye.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function ja() {
  var e = ye.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Da = jt({
  name: "InsertStyles",
  setup: function() {
    return ma(), function() {
      return null;
    };
  }
}), Pa = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Ia(e, n) {
  return ka(e) || Na(e, n) || $a(e, n) || Ma();
}
function Ma() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $a(e, n) {
  if (e) {
    if (typeof e == "string") return Yn(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Yn(e, n);
  }
}
function Yn(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Na(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (t = t.call(e); !(o = (i = t.next()).done) && (r.push(i.value), !(n && r.length === n)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function ka(e) {
  if (Array.isArray(e)) return e;
}
function zn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), r.forEach(function(o) {
      ze(e, o, t[o]);
    });
  }
  return e;
}
function ze(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Fa(e, n) {
  if (e == null) return {};
  var t = Ra(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Ra(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
Ur(ra.primary);
var Re = function(n, t) {
  var r, o = zn({}, n, t.attrs), a = o.class, i = o.icon, s = o.spin, l = o.rotate, c = o.tabindex, f = o.twoToneColor, d = o.onClick, v = Fa(o, Pa), p = $r(), y = p.prefixCls, _ = p.rootClassName, U = (r = {}, ze(r, _.value, !!_.value), ze(r, y.value, !0), ze(r, "".concat(y.value, "-").concat(i.name), !!i.name), ze(r, "".concat(y.value, "-spin"), !!s || i.name === "loading"), r), E = c;
  E === void 0 && d && (E = -1);
  var V = l ? {
    msTransform: "rotate(".concat(l, "deg)"),
    transform: "rotate(".concat(l, "deg)")
  } : void 0, P = Br(f), W = Ia(P, 2), M = W[0], te = W[1];
  return Ce("span", zn({
    role: "img",
    "aria-label": i.name
  }, v, {
    onClick: d,
    class: [U, a],
    tabindex: E
  }), [Ce(ye, {
    icon: i,
    primaryColor: M,
    secondaryColor: te,
    style: V
  }, null), Ce(Da, null, null)]);
};
Re.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Re.displayName = "AntdIcon";
Re.inheritAttrs = !1;
Re.getTwoToneColor = ja;
Re.setTwoToneColor = Ur;
var Ba = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" } }] }, name: "menu", theme: "outlined" };
function Xn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), r.forEach(function(o) {
      Ha(e, o, t[o]);
    });
  }
  return e;
}
function Ha(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var wn = function(n, t) {
  var r = Xn({}, n, t.attrs);
  return Ce(Re, Xn({}, r, {
    icon: Ba
  }), null);
};
wn.displayName = "MenuOutlined";
wn.inheritAttrs = !1;
var Yr = typeof global == "object" && global && global.Object === Object && global, Ua = typeof self == "object" && self && self.Object === Object && self, le = Yr || Ua || Function("return this")(), Ne = le.Symbol, zr = Object.prototype, Ya = zr.hasOwnProperty, za = zr.toString, Ye = Ne ? Ne.toStringTag : void 0;
function Xa(e) {
  var n = Ya.call(e, Ye), t = e[Ye];
  try {
    e[Ye] = void 0;
    var r = !0;
  } catch {
  }
  var o = za.call(e);
  return r && (n ? e[Ye] = t : delete e[Ye]), o;
}
var La = Object.prototype, Va = La.toString;
function Wa(e) {
  return Va.call(e);
}
var Ga = "[object Null]", qa = "[object Undefined]", Ln = Ne ? Ne.toStringTag : void 0;
function nt(e) {
  return e == null ? e === void 0 ? qa : Ga : Ln && Ln in Object(e) ? Xa(e) : Wa(e);
}
function rt(e) {
  return e != null && typeof e == "object";
}
var _n = Array.isArray;
function Pt(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Za = "[object AsyncFunction]", Ja = "[object Function]", Ka = "[object GeneratorFunction]", Qa = "[object Proxy]";
function Xr(e) {
  if (!Pt(e))
    return !1;
  var n = nt(e);
  return n == Ja || n == Ka || n == Za || n == Qa;
}
var Xt = le["__core-js_shared__"], Vn = function() {
  var e = /[^.]+$/.exec(Xt && Xt.keys && Xt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ei(e) {
  return !!Vn && Vn in e;
}
var ti = Function.prototype, ni = ti.toString;
function xe(e) {
  if (e != null) {
    try {
      return ni.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ri = /[\\^$.*+?()[\]{}|]/g, oi = /^\[object .+?Constructor\]$/, ai = Function.prototype, ii = Object.prototype, li = ai.toString, si = ii.hasOwnProperty, ci = RegExp(
  "^" + li.call(si).replace(ri, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ui(e) {
  if (!Pt(e) || ei(e))
    return !1;
  var n = Xr(e) ? ci : oi;
  return n.test(xe(e));
}
function fi(e, n) {
  return e?.[n];
}
function Ee(e, n) {
  var t = fi(e, n);
  return ui(t) ? t : void 0;
}
var sn = Ee(le, "WeakMap"), Wn = Object.create, di = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!Pt(n))
      return {};
    if (Wn)
      return Wn(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), Gn = function() {
  try {
    var e = Ee(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function pi(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var hi = 9007199254740991, gi = /^(?:0|[1-9]\d*)$/;
function vi(e, n) {
  var t = typeof e;
  return n = n ?? hi, !!n && (t == "number" || t != "symbol" && gi.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function mi(e, n, t) {
  n == "__proto__" && Gn ? Gn(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function Lr(e, n) {
  return e === n || e !== e && n !== n;
}
var bi = Object.prototype, yi = bi.hasOwnProperty;
function wi(e, n, t) {
  var r = e[n];
  (!(yi.call(e, n) && Lr(r, t)) || t === void 0 && !(n in e)) && mi(e, n, t);
}
var _i = 9007199254740991;
function Vr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _i;
}
function Ti(e) {
  return e != null && Vr(e.length) && !Xr(e);
}
var Si = Object.prototype;
function Wr(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Si;
  return e === t;
}
function Ci(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var Oi = "[object Arguments]";
function qn(e) {
  return rt(e) && nt(e) == Oi;
}
var Gr = Object.prototype, xi = Gr.hasOwnProperty, Ei = Gr.propertyIsEnumerable, Ai = qn(/* @__PURE__ */ function() {
  return arguments;
}()) ? qn : function(e) {
  return rt(e) && xi.call(e, "callee") && !Ei.call(e, "callee");
};
function ji() {
  return !1;
}
var qr = typeof exports == "object" && exports && !exports.nodeType && exports, Zn = qr && typeof module == "object" && module && !module.nodeType && module, Di = Zn && Zn.exports === qr, Jn = Di ? le.Buffer : void 0, Pi = Jn ? Jn.isBuffer : void 0, Zr = Pi || ji, Ii = "[object Arguments]", Mi = "[object Array]", $i = "[object Boolean]", Ni = "[object Date]", ki = "[object Error]", Fi = "[object Function]", Ri = "[object Map]", Bi = "[object Number]", Hi = "[object Object]", Ui = "[object RegExp]", Yi = "[object Set]", zi = "[object String]", Xi = "[object WeakMap]", Li = "[object ArrayBuffer]", Vi = "[object DataView]", Wi = "[object Float32Array]", Gi = "[object Float64Array]", qi = "[object Int8Array]", Zi = "[object Int16Array]", Ji = "[object Int32Array]", Ki = "[object Uint8Array]", Qi = "[object Uint8ClampedArray]", el = "[object Uint16Array]", tl = "[object Uint32Array]", x = {};
x[Wi] = x[Gi] = x[qi] = x[Zi] = x[Ji] = x[Ki] = x[Qi] = x[el] = x[tl] = !0;
x[Ii] = x[Mi] = x[Li] = x[$i] = x[Vi] = x[Ni] = x[ki] = x[Fi] = x[Ri] = x[Bi] = x[Hi] = x[Ui] = x[Yi] = x[zi] = x[Xi] = !1;
function nl(e) {
  return rt(e) && Vr(e.length) && !!x[nt(e)];
}
function Tn(e) {
  return function(n) {
    return e(n);
  };
}
var Jr = typeof exports == "object" && exports && !exports.nodeType && exports, Ge = Jr && typeof module == "object" && module && !module.nodeType && module, rl = Ge && Ge.exports === Jr, Lt = rl && Yr.process, ke = function() {
  try {
    var e = Ge && Ge.require && Ge.require("util").types;
    return e || Lt && Lt.binding && Lt.binding("util");
  } catch {
  }
}(), Kn = ke && ke.isTypedArray, ol = Kn ? Tn(Kn) : nl, al = Object.prototype, il = al.hasOwnProperty;
function ll(e, n) {
  var t = _n(e), r = !t && Ai(e), o = !t && !r && Zr(e), a = !t && !r && !o && ol(e), i = t || r || o || a, s = i ? Ci(e.length, String) : [], l = s.length;
  for (var c in e)
    il.call(e, c) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vi(c, l))) && s.push(c);
  return s;
}
function Kr(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var sl = Kr(Object.keys, Object), cl = Object.prototype, ul = cl.hasOwnProperty;
function fl(e) {
  if (!Wr(e))
    return sl(e);
  var n = [];
  for (var t in Object(e))
    ul.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function dl(e) {
  return Ti(e) ? ll(e) : fl(e);
}
var et = Ee(Object, "create");
function pl() {
  this.__data__ = et ? et(null) : {}, this.size = 0;
}
function hl(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var gl = "__lodash_hash_undefined__", vl = Object.prototype, ml = vl.hasOwnProperty;
function bl(e) {
  var n = this.__data__;
  if (et) {
    var t = n[e];
    return t === gl ? void 0 : t;
  }
  return ml.call(n, e) ? n[e] : void 0;
}
var yl = Object.prototype, wl = yl.hasOwnProperty;
function _l(e) {
  var n = this.__data__;
  return et ? n[e] !== void 0 : wl.call(n, e);
}
var Tl = "__lodash_hash_undefined__";
function Sl(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = et && n === void 0 ? Tl : n, this;
}
function Oe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Oe.prototype.clear = pl;
Oe.prototype.delete = hl;
Oe.prototype.get = bl;
Oe.prototype.has = _l;
Oe.prototype.set = Sl;
function Cl() {
  this.__data__ = [], this.size = 0;
}
function It(e, n) {
  for (var t = e.length; t--; )
    if (Lr(e[t][0], n))
      return t;
  return -1;
}
var Ol = Array.prototype, xl = Ol.splice;
function El(e) {
  var n = this.__data__, t = It(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : xl.call(n, t, 1), --this.size, !0;
}
function Al(e) {
  var n = this.__data__, t = It(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function jl(e) {
  return It(this.__data__, e) > -1;
}
function Dl(e, n) {
  var t = this.__data__, r = It(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function pe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
pe.prototype.clear = Cl;
pe.prototype.delete = El;
pe.prototype.get = Al;
pe.prototype.has = jl;
pe.prototype.set = Dl;
var tt = Ee(le, "Map");
function Pl() {
  this.size = 0, this.__data__ = {
    hash: new Oe(),
    map: new (tt || pe)(),
    string: new Oe()
  };
}
function Il(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Mt(e, n) {
  var t = e.__data__;
  return Il(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Ml(e) {
  var n = Mt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function $l(e) {
  return Mt(this, e).get(e);
}
function Nl(e) {
  return Mt(this, e).has(e);
}
function kl(e, n) {
  var t = Mt(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function Be(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Be.prototype.clear = Pl;
Be.prototype.delete = Ml;
Be.prototype.get = $l;
Be.prototype.has = Nl;
Be.prototype.set = kl;
function Fl(e, n) {
  for (var t = -1, r = n.length, o = e.length; ++t < r; )
    e[o + t] = n[t];
  return e;
}
var Rl = Kr(Object.getPrototypeOf, Object);
function Bl() {
  this.__data__ = new pe(), this.size = 0;
}
function Hl(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function Ul(e) {
  return this.__data__.get(e);
}
function Yl(e) {
  return this.__data__.has(e);
}
var zl = 200;
function Xl(e, n) {
  var t = this.__data__;
  if (t instanceof pe) {
    var r = t.__data__;
    if (!tt || r.length < zl - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new Be(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function He(e) {
  var n = this.__data__ = new pe(e);
  this.size = n.size;
}
He.prototype.clear = Bl;
He.prototype.delete = Hl;
He.prototype.get = Ul;
He.prototype.has = Yl;
He.prototype.set = Xl;
var Qr = typeof exports == "object" && exports && !exports.nodeType && exports, Qn = Qr && typeof module == "object" && module && !module.nodeType && module, Ll = Qn && Qn.exports === Qr, er = Ll ? le.Buffer : void 0;
er && er.allocUnsafe;
function Vl(e, n) {
  return e.slice();
}
function Wl(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++t < r; ) {
    var i = e[t];
    n(i, t, e) && (a[o++] = i);
  }
  return a;
}
function Gl() {
  return [];
}
var ql = Object.prototype, Zl = ql.propertyIsEnumerable, tr = Object.getOwnPropertySymbols, Jl = tr ? function(e) {
  return e == null ? [] : (e = Object(e), Wl(tr(e), function(n) {
    return Zl.call(e, n);
  }));
} : Gl;
function Kl(e, n, t) {
  var r = n(e);
  return _n(e) ? r : Fl(r, t(e));
}
function Ql(e) {
  return Kl(e, dl, Jl);
}
var cn = Ee(le, "DataView"), un = Ee(le, "Promise"), fn = Ee(le, "Set"), nr = "[object Map]", es = "[object Object]", rr = "[object Promise]", or = "[object Set]", ar = "[object WeakMap]", ir = "[object DataView]", ts = xe(cn), ns = xe(tt), rs = xe(un), os = xe(fn), as = xe(sn), ue = nt;
(cn && ue(new cn(new ArrayBuffer(1))) != ir || tt && ue(new tt()) != nr || un && ue(un.resolve()) != rr || fn && ue(new fn()) != or || sn && ue(new sn()) != ar) && (ue = function(e) {
  var n = nt(e), t = n == es ? e.constructor : void 0, r = t ? xe(t) : "";
  if (r)
    switch (r) {
      case ts:
        return ir;
      case ns:
        return nr;
      case rs:
        return rr;
      case os:
        return or;
      case as:
        return ar;
    }
  return n;
});
var is = Object.prototype, ls = is.hasOwnProperty;
function ss(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && ls.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var lr = le.Uint8Array;
function Sn(e) {
  var n = new e.constructor(e.byteLength);
  return new lr(n).set(new lr(e)), n;
}
function cs(e, n) {
  var t = Sn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var us = /\w*$/;
function fs(e) {
  var n = new e.constructor(e.source, us.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var sr = Ne ? Ne.prototype : void 0, cr = sr ? sr.valueOf : void 0;
function ds(e) {
  return cr ? Object(cr.call(e)) : {};
}
function ps(e, n) {
  var t = Sn(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var hs = "[object Boolean]", gs = "[object Date]", vs = "[object Map]", ms = "[object Number]", bs = "[object RegExp]", ys = "[object Set]", ws = "[object String]", _s = "[object Symbol]", Ts = "[object ArrayBuffer]", Ss = "[object DataView]", Cs = "[object Float32Array]", Os = "[object Float64Array]", xs = "[object Int8Array]", Es = "[object Int16Array]", As = "[object Int32Array]", js = "[object Uint8Array]", Ds = "[object Uint8ClampedArray]", Ps = "[object Uint16Array]", Is = "[object Uint32Array]";
function Ms(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case Ts:
      return Sn(e);
    case hs:
    case gs:
      return new r(+e);
    case Ss:
      return cs(e);
    case Cs:
    case Os:
    case xs:
    case Es:
    case As:
    case js:
    case Ds:
    case Ps:
    case Is:
      return ps(e);
    case vs:
      return new r();
    case ms:
    case ws:
      return new r(e);
    case bs:
      return fs(e);
    case ys:
      return new r();
    case _s:
      return ds(e);
  }
}
function $s(e) {
  return typeof e.constructor == "function" && !Wr(e) ? di(Rl(e)) : {};
}
var Ns = "[object Map]";
function ks(e) {
  return rt(e) && ue(e) == Ns;
}
var ur = ke && ke.isMap, Fs = ur ? Tn(ur) : ks, Rs = "[object Set]";
function Bs(e) {
  return rt(e) && ue(e) == Rs;
}
var fr = ke && ke.isSet, Hs = fr ? Tn(fr) : Bs, eo = "[object Arguments]", Us = "[object Array]", Ys = "[object Boolean]", zs = "[object Date]", Xs = "[object Error]", to = "[object Function]", Ls = "[object GeneratorFunction]", Vs = "[object Map]", Ws = "[object Number]", no = "[object Object]", Gs = "[object RegExp]", qs = "[object Set]", Zs = "[object String]", Js = "[object Symbol]", Ks = "[object WeakMap]", Qs = "[object ArrayBuffer]", ec = "[object DataView]", tc = "[object Float32Array]", nc = "[object Float64Array]", rc = "[object Int8Array]", oc = "[object Int16Array]", ac = "[object Int32Array]", ic = "[object Uint8Array]", lc = "[object Uint8ClampedArray]", sc = "[object Uint16Array]", cc = "[object Uint32Array]", O = {};
O[eo] = O[Us] = O[Qs] = O[ec] = O[Ys] = O[zs] = O[tc] = O[nc] = O[rc] = O[oc] = O[ac] = O[Vs] = O[Ws] = O[no] = O[Gs] = O[qs] = O[Zs] = O[Js] = O[ic] = O[lc] = O[sc] = O[cc] = !0;
O[Xs] = O[to] = O[Ks] = !1;
function vt(e, n, t, r, o, a) {
  var i;
  if (i !== void 0)
    return i;
  if (!Pt(e))
    return e;
  var s = _n(e);
  if (s)
    i = ss(e);
  else {
    var l = ue(e), c = l == to || l == Ls;
    if (Zr(e))
      return Vl(e);
    if (l == no || l == eo || c && !o)
      i = c ? {} : $s(e);
    else {
      if (!O[l])
        return o ? e : {};
      i = Ms(e, l);
    }
  }
  a || (a = new He());
  var f = a.get(e);
  if (f)
    return f;
  a.set(e, i), Hs(e) ? e.forEach(function(p) {
    i.add(vt(p, n, t, p, e, a));
  }) : Fs(e) && e.forEach(function(p, y) {
    i.set(y, vt(p, n, t, y, e, a));
  });
  var d = Ql, v = s ? void 0 : d(e);
  return pi(v || e, function(p, y) {
    v && (y = p, p = e[y]), wi(i, y, vt(p, n, t, y, e, a));
  }), i;
}
var uc = 1, fc = 4;
function dr(e) {
  return vt(e, uc | fc);
}
var dc = Object.defineProperty, St = Object.getOwnPropertySymbols, ro = Object.prototype.hasOwnProperty, oo = Object.prototype.propertyIsEnumerable, pr = (e, n, t) => n in e ? dc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Pe = (e, n) => {
  for (var t in n || (n = {}))
    ro.call(n, t) && pr(e, t, n[t]);
  if (St)
    for (var t of St(n))
      oo.call(n, t) && pr(e, t, n[t]);
  return e;
}, ao = (e, n) => {
  var t = {};
  for (var r in e)
    ro.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && St)
    for (var r of St(e))
      n.indexOf(r) < 0 && oo.call(e, r) && (t[r] = e[r]);
  return t;
};
const io = "[vue-draggable-plus]: ";
function pc(e) {
  console.warn(io + e);
}
function hc(e) {
  console.error(io + e);
}
function hr(e, n, t) {
  return t >= 0 && t < e.length && e.splice(t, 0, e.splice(n, 1)[0]), e;
}
function gc(e) {
  return e.replace(/-(\w)/g, (n, t) => t ? t.toUpperCase() : "");
}
function vc(e) {
  return Object.keys(e).reduce((n, t) => (typeof e[t] < "u" && (n[gc(t)] = e[t]), n), {});
}
function gr(e, n) {
  return Array.isArray(e) && e.splice(n, 1), e;
}
function vr(e, n, t) {
  return Array.isArray(e) && e.splice(n, 0, t), e;
}
function mc(e) {
  return typeof e > "u";
}
function bc(e) {
  return typeof e == "string";
}
function mr(e, n, t) {
  const r = e.children[t];
  e.insertBefore(n, r);
}
function Vt(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function yc(e, n = document) {
  var t;
  let r = null;
  return typeof n?.querySelector == "function" ? r = (t = n?.querySelector) == null ? void 0 : t.call(n, e) : r = document.querySelector(e), r || pc(`Element not found: ${e}`), r;
}
function wc(e, n, t = null) {
  return function(...r) {
    return e.apply(t, r), n.apply(t, r);
  };
}
function _c(e, n) {
  const t = Pe({}, e);
  return Object.keys(n).forEach((r) => {
    t[r] ? t[r] = wc(e[r], n[r]) : t[r] = n[r];
  }), t;
}
function Tc(e) {
  return e instanceof HTMLElement;
}
function br(e, n) {
  Object.keys(e).forEach((t) => {
    n(t, e[t]);
  });
}
function Sc(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
  (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const Cc = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function yr(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ie(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? yr(Object(t), !0).forEach(function(r) {
      Oc(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : yr(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function mt(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mt = function(n) {
    return typeof n;
  } : mt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, mt(e);
}
function Oc(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function de() {
  return de = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, de.apply(this, arguments);
}
function xc(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Ec(e, n) {
  if (e == null)
    return {};
  var t = xc(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
var Ac = "1.15.2";
function fe(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var he = fe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ot = fe(/Edge/i), wr = fe(/firefox/i), qe = fe(/safari/i) && !fe(/chrome/i) && !fe(/android/i), lo = fe(/iP(ad|od|hone)/i), so = fe(/chrome/i) && fe(/android/i), co = {
  capture: !1,
  passive: !1
};
function S(e, n, t) {
  e.addEventListener(n, t, !he && co);
}
function T(e, n, t) {
  e.removeEventListener(n, t, !he && co);
}
function Ct(e, n) {
  if (n) {
    if (n[0] === ">" && (n = n.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(n);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(n);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(n);
      } catch {
        return !1;
      }
    return !1;
  }
}
function jc(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function oe(e, n, t, r) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && Ct(e, n) : Ct(e, n)) || r && e === t)
        return e;
      if (e === t)
        break;
    } while (e = jc(e));
  }
  return null;
}
var _r = /\s+/g;
function q(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      var r = (" " + e.className + " ").replace(_r, " ").replace(" " + n + " ", " ");
      e.className = (r + (t ? " " + n : "")).replace(_r, " ");
    }
}
function h(e, n, t) {
  var r = e && e.style;
  if (r) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), n === void 0 ? t : t[n];
    !(n in r) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), r[n] = t + (typeof t == "string" ? "" : "px");
  }
}
function $e(e, n) {
  var t = "";
  if (typeof e == "string")
    t = e;
  else
    do {
      var r = h(e, "transform");
      r && r !== "none" && (t = r + " " + t);
    } while (!n && (e = e.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(t);
}
function uo(e, n, t) {
  if (e) {
    var r = e.getElementsByTagName(n), o = 0, a = r.length;
    if (t)
      for (; o < a; o++)
        t(r[o], o);
    return r;
  }
  return [];
}
function ae() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function k(e, n, t, r, o) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, i, s, l, c, f, d;
    if (e !== window && e.parentNode && e !== ae() ? (a = e.getBoundingClientRect(), i = a.top, s = a.left, l = a.bottom, c = a.right, f = a.height, d = a.width) : (i = 0, s = 0, l = window.innerHeight, c = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (n || t) && e !== window && (o = o || e.parentNode, !he))
      do
        if (o && o.getBoundingClientRect && (h(o, "transform") !== "none" || t && h(o, "position") !== "static")) {
          var v = o.getBoundingClientRect();
          i -= v.top + parseInt(h(o, "border-top-width")), s -= v.left + parseInt(h(o, "border-left-width")), l = i + a.height, c = s + a.width;
          break;
        }
      while (o = o.parentNode);
    if (r && e !== window) {
      var p = $e(o || e), y = p && p.a, _ = p && p.d;
      p && (i /= _, s /= y, d /= y, f /= _, l = i + f, c = s + d);
    }
    return {
      top: i,
      left: s,
      bottom: l,
      right: c,
      width: d,
      height: f
    };
  }
}
function Tr(e, n, t) {
  for (var r = be(e, !0), o = k(e)[n]; r; ) {
    var a = k(r)[t], i = void 0;
    if (i = o >= a, !i)
      return r;
    if (r === ae())
      break;
    r = be(r, !1);
  }
  return !1;
}
function Fe(e, n, t, r) {
  for (var o = 0, a = 0, i = e.children; a < i.length; ) {
    if (i[a].style.display !== "none" && i[a] !== g.ghost && (r || i[a] !== g.dragged) && oe(i[a], t.draggable, e, !1)) {
      if (o === n)
        return i[a];
      o++;
    }
    a++;
  }
  return null;
}
function Cn(e, n) {
  for (var t = e.lastElementChild; t && (t === g.ghost || h(t, "display") === "none" || n && !Ct(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function Q(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== g.clone && (!n || Ct(e, n)) && t++;
  return t;
}
function Sr(e) {
  var n = 0, t = 0, r = ae();
  if (e)
    do {
      var o = $e(e), a = o.a, i = o.d;
      n += e.scrollLeft * a, t += e.scrollTop * i;
    } while (e !== r && (e = e.parentNode));
  return [n, t];
}
function Dc(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      for (var r in n)
        if (n.hasOwnProperty(r) && n[r] === e[t][r])
          return Number(t);
    }
  return -1;
}
function be(e, n) {
  if (!e || !e.getBoundingClientRect)
    return ae();
  var t = e, r = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var o = h(t);
      if (t.clientWidth < t.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body)
          return ae();
        if (r || n)
          return t;
        r = !0;
      }
    }
  while (t = t.parentNode);
  return ae();
}
function Pc(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function Wt(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Ze;
function fo(e, n) {
  return function() {
    if (!Ze) {
      var t = arguments, r = this;
      t.length === 1 ? e.call(r, t[0]) : e.apply(r, t), Ze = setTimeout(function() {
        Ze = void 0;
      }, n);
    }
  };
}
function Ic() {
  clearTimeout(Ze), Ze = void 0;
}
function po(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function ho(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function go(e, n, t) {
  var r = {};
  return Array.from(e.children).forEach(function(o) {
    var a, i, s, l;
    if (!(!oe(o, n.draggable, e, !1) || o.animated || o === t)) {
      var c = k(o);
      r.left = Math.min((a = r.left) !== null && a !== void 0 ? a : 1 / 0, c.left), r.top = Math.min((i = r.top) !== null && i !== void 0 ? i : 1 / 0, c.top), r.right = Math.max((s = r.right) !== null && s !== void 0 ? s : -1 / 0, c.right), r.bottom = Math.max((l = r.bottom) !== null && l !== void 0 ? l : -1 / 0, c.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var J = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Mc() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var t = [].slice.call(this.el.children);
        t.forEach(function(r) {
          if (!(h(r, "display") === "none" || r === g.ghost)) {
            e.push({
              target: r,
              rect: k(r)
            });
            var o = ie({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var a = $e(r, !0);
              a && (o.top -= a.f, o.left -= a.e);
            }
            r.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(t) {
      e.push(t);
    },
    removeAnimationState: function(t) {
      e.splice(Dc(e, {
        target: t
      }), 1);
    },
    animateAll: function(t) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(n), typeof t == "function" && t();
        return;
      }
      var o = !1, a = 0;
      e.forEach(function(i) {
        var s = 0, l = i.target, c = l.fromRect, f = k(l), d = l.prevFromRect, v = l.prevToRect, p = i.rect, y = $e(l, !0);
        y && (f.top -= y.f, f.left -= y.e), l.toRect = f, l.thisAnimationDuration && Wt(d, f) && !Wt(c, f) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - f.top) / (p.left - f.left) === (c.top - f.top) / (c.left - f.left) && (s = Nc(p, d, v, r.options)), Wt(f, c) || (l.prevFromRect = c, l.prevToRect = f, s || (s = r.options.animation), r.animate(l, p, f, s)), s && (o = !0, a = Math.max(a, s), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, s), l.thisAnimationDuration = s);
      }), clearTimeout(n), o ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, a) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, r, o, a) {
      if (a) {
        h(t, "transition", ""), h(t, "transform", "");
        var i = $e(this.el), s = i && i.a, l = i && i.d, c = (r.left - o.left) / (s || 1), f = (r.top - o.top) / (l || 1);
        t.animatingX = !!c, t.animatingY = !!f, h(t, "transform", "translate3d(" + c + "px," + f + "px,0)"), this.forRepaintDummy = $c(t), h(t, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          h(t, "transition", ""), h(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, a);
      }
    }
  };
}
function $c(e) {
  return e.offsetWidth;
}
function Nc(e, n, t, r) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * r.animation;
}
var Ae = [], Gt = {
  initializeByDefault: !0
}, at = {
  mount: function(e) {
    for (var n in Gt)
      Gt.hasOwnProperty(n) && !(n in e) && (e[n] = Gt[n]);
    Ae.forEach(function(t) {
      if (t.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Ae.push(e);
  },
  pluginEvent: function(e, n, t) {
    var r = this;
    this.eventCanceled = !1, t.cancel = function() {
      r.eventCanceled = !0;
    };
    var o = e + "Global";
    Ae.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][o] && n[a.pluginName][o](ie({
        sortable: n
      }, t)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](ie({
        sortable: n
      }, t)));
    });
  },
  initializePlugins: function(e, n, t, r) {
    Ae.forEach(function(i) {
      var s = i.pluginName;
      if (!(!e.options[s] && !i.initializeByDefault)) {
        var l = new i(e, n, e.options);
        l.sortable = e, l.options = e.options, e[s] = l, de(t, l.defaults);
      }
    });
    for (var o in e.options)
      if (e.options.hasOwnProperty(o)) {
        var a = this.modifyOption(e, o, e.options[o]);
        typeof a < "u" && (e.options[o] = a);
      }
  },
  getEventProperties: function(e, n) {
    var t = {};
    return Ae.forEach(function(r) {
      typeof r.eventProperties == "function" && de(t, r.eventProperties.call(n[r.pluginName], e));
    }), t;
  },
  modifyOption: function(e, n, t) {
    var r;
    return Ae.forEach(function(o) {
      e[o.pluginName] && o.optionListeners && typeof o.optionListeners[n] == "function" && (r = o.optionListeners[n].call(e[o.pluginName], t));
    }), r;
  }
};
function kc(e) {
  var n = e.sortable, t = e.rootEl, r = e.name, o = e.targetEl, a = e.cloneEl, i = e.toEl, s = e.fromEl, l = e.oldIndex, c = e.newIndex, f = e.oldDraggableIndex, d = e.newDraggableIndex, v = e.originalEvent, p = e.putSortable, y = e.extraEventProperties;
  if (n = n || t && t[J], !!n) {
    var _, U = n.options, E = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !he && !ot ? _ = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (_ = document.createEvent("Event"), _.initEvent(r, !0, !0)), _.to = i || t, _.from = s || t, _.item = o || t, _.clone = a, _.oldIndex = l, _.newIndex = c, _.oldDraggableIndex = f, _.newDraggableIndex = d, _.originalEvent = v, _.pullMode = p ? p.lastPutMode : void 0;
    var V = ie(ie({}, y), at.getEventProperties(r, n));
    for (var P in V)
      _[P] = V[P];
    t && t.dispatchEvent(_), U[E] && U[E].call(n, _);
  }
}
var Fc = ["evt"], L = function(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.evt, o = Ec(t, Fc);
  at.pluginEvent.bind(g)(e, n, ie({
    dragEl: u,
    parentEl: D,
    ghostEl: m,
    rootEl: A,
    nextEl: Se,
    lastDownEl: bt,
    cloneEl: j,
    cloneHidden: ve,
    dragStarted: Xe,
    putSortable: B,
    activeSortable: g.active,
    originalEvent: r,
    oldIndex: Ie,
    oldDraggableIndex: Je,
    newIndex: Z,
    newDraggableIndex: ge,
    hideGhostForTarget: yo,
    unhideGhostForTarget: wo,
    cloneNowHidden: function() {
      ve = !0;
    },
    cloneNowShown: function() {
      ve = !1;
    },
    dispatchSortableEvent: function(a) {
      Y({
        sortable: n,
        name: a,
        originalEvent: r
      });
    }
  }, o));
};
function Y(e) {
  kc(ie({
    putSortable: B,
    cloneEl: j,
    targetEl: u,
    rootEl: A,
    oldIndex: Ie,
    oldDraggableIndex: Je,
    newIndex: Z,
    newDraggableIndex: ge
  }, e));
}
var u, D, m, A, Se, bt, j, ve, Ie, Z, Je, ge, ct, B, De = !1, Ot = !1, xt = [], _e, ne, qt, Zt, Cr, Or, Xe, je, Ke, Qe = !1, ut = !1, yt, H, Jt = [], dn = !1, Et = [], $t = typeof document < "u", ft = lo, xr = ot || he ? "cssFloat" : "float", Rc = $t && !so && !lo && "draggable" in document.createElement("div"), vo = function() {
  if ($t) {
    if (he)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), mo = function(e, n) {
  var t = h(e), r = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), o = Fe(e, 0, n), a = Fe(e, 1, n), i = o && h(o), s = a && h(a), l = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + k(o).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + k(a).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && i.float && i.float !== "none") {
    var f = i.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return o && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || l >= r && t[xr] === "none" || a && t[xr] === "none" && l + c > r) ? "vertical" : "horizontal";
}, Bc = function(e, n, t) {
  var r = t ? e.left : e.top, o = t ? e.right : e.bottom, a = t ? e.width : e.height, i = t ? n.left : n.top, s = t ? n.right : n.bottom, l = t ? n.width : n.height;
  return r === i || o === s || r + a / 2 === i + l / 2;
}, Hc = function(e, n) {
  var t;
  return xt.some(function(r) {
    var o = r[J].options.emptyInsertThreshold;
    if (!(!o || Cn(r))) {
      var a = k(r), i = e >= a.left - o && e <= a.right + o, s = n >= a.top - o && n <= a.bottom + o;
      if (i && s)
        return t = r;
    }
  }), t;
}, bo = function(e) {
  function n(o, a) {
    return function(i, s, l, c) {
      var f = i.options.group.name && s.options.group.name && i.options.group.name === s.options.group.name;
      if (o == null && (a || f))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (a && o === "clone")
        return o;
      if (typeof o == "function")
        return n(o(i, s, l, c), a)(i, s, l, c);
      var d = (a ? i : s).options.group.name;
      return o === !0 || typeof o == "string" && o === d || o.join && o.indexOf(d) > -1;
    };
  }
  var t = {}, r = e.group;
  (!r || mt(r) != "object") && (r = {
    name: r
  }), t.name = r.name, t.checkPull = n(r.pull, !0), t.checkPut = n(r.put), t.revertClone = r.revertClone, e.group = t;
}, yo = function() {
  !vo && m && h(m, "display", "none");
}, wo = function() {
  !vo && m && h(m, "display", "");
};
$t && !so && document.addEventListener("click", function(e) {
  if (Ot)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Ot = !1, !1;
}, !0);
var Te = function(e) {
  if (u) {
    e = e.touches ? e.touches[0] : e;
    var n = Hc(e.clientX, e.clientY);
    if (n) {
      var t = {};
      for (var r in e)
        e.hasOwnProperty(r) && (t[r] = e[r]);
      t.target = t.rootEl = n, t.preventDefault = void 0, t.stopPropagation = void 0, n[J]._onDragOver(t);
    }
  }
}, Uc = function(e) {
  u && u.parentNode[J]._isOutsideThisEl(e.target);
};
function g(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = de({}, n), e[J] = this;
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return mo(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, i) {
      a.setData("Text", i.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: g.supportPointer !== !1 && "PointerEvent" in window && !qe,
    emptyInsertThreshold: 5
  };
  at.initializePlugins(this, e, t);
  for (var r in t)
    !(r in n) && (n[r] = t[r]);
  bo(n);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : Rc, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? S(e, "pointerdown", this._onTapStart) : (S(e, "mousedown", this._onTapStart), S(e, "touchstart", this._onTapStart)), this.nativeDraggable && (S(e, "dragover", this), S(e, "dragenter", this)), xt.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), de(this, Mc());
}
g.prototype = /** @lends Sortable.prototype */
{
  constructor: g,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (je = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, u) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, t = this.el, r = this.options, o = r.preventOnFilter, a = e.type, i = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (i || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, c = r.filter;
      if (qc(t), !u && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || r.disabled) && !l.isContentEditable && !(!this.nativeDraggable && qe && s && s.tagName.toUpperCase() === "SELECT") && (s = oe(s, r.draggable, t, !1), !(s && s.animated) && bt !== s)) {
        if (Ie = Q(s), Je = Q(s, r.draggable), typeof c == "function") {
          if (c.call(this, e, s, this)) {
            Y({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: s,
              toEl: t,
              fromEl: t
            }), L("filter", n, {
              evt: e
            }), o && e.cancelable && e.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(f) {
          if (f = oe(l, f.trim(), t, !1), f)
            return Y({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: t,
              toEl: t
            }), L("filter", n, {
              evt: e
            }), !0;
        }), c)) {
          o && e.cancelable && e.preventDefault();
          return;
        }
        r.handle && !oe(l, r.handle, t, !1) || this._prepareDragStart(e, i, s);
      }
    }
  },
  _prepareDragStart: function(e, n, t) {
    var r = this, o = r.el, a = r.options, i = o.ownerDocument, s;
    if (t && !u && t.parentNode === o) {
      var l = k(t);
      if (A = o, u = t, D = u.parentNode, Se = u.nextSibling, bt = t, ct = a.group, g.dragged = u, _e = {
        target: u,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Cr = _e.clientX - l.left, Or = _e.clientY - l.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, u.style["will-change"] = "all", s = function() {
        if (L("delayEnded", r, {
          evt: e
        }), g.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !wr && r.nativeDraggable && (u.draggable = !0), r._triggerDragStart(e, n), Y({
          sortable: r,
          name: "choose",
          originalEvent: e
        }), q(u, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        uo(u, c.trim(), Kt);
      }), S(i, "dragover", Te), S(i, "mousemove", Te), S(i, "touchmove", Te), S(i, "mouseup", r._onDrop), S(i, "touchend", r._onDrop), S(i, "touchcancel", r._onDrop), wr && this.nativeDraggable && (this.options.touchStartThreshold = 4, u.draggable = !0), L("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ot || he))) {
        if (g.eventCanceled) {
          this._onDrop();
          return;
        }
        S(i, "mouseup", r._disableDelayedDrag), S(i, "touchend", r._disableDelayedDrag), S(i, "touchcancel", r._disableDelayedDrag), S(i, "mousemove", r._delayedDragTouchMoveHandler), S(i, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && S(i, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    u && Kt(u), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    T(e, "mouseup", this._disableDelayedDrag), T(e, "touchend", this._disableDelayedDrag), T(e, "touchcancel", this._disableDelayedDrag), T(e, "mousemove", this._delayedDragTouchMoveHandler), T(e, "touchmove", this._delayedDragTouchMoveHandler), T(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? S(document, "pointermove", this._onTouchMove) : n ? S(document, "touchmove", this._onTouchMove) : S(document, "mousemove", this._onTouchMove) : (S(u, "dragend", this), S(A, "dragstart", this._onDragStart));
    try {
      document.selection ? wt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (De = !1, A && u) {
      L("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && S(document, "dragover", Uc);
      var t = this.options;
      !e && q(u, t.dragClass, !1), q(u, t.ghostClass, !0), g.active = this, e && this._appendGhost(), Y({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ne) {
      this._lastX = ne.clientX, this._lastY = ne.clientY, yo();
      for (var e = document.elementFromPoint(ne.clientX, ne.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(ne.clientX, ne.clientY), e !== n); )
        n = e;
      if (u.parentNode[J]._isOutsideThisEl(e), n)
        do {
          if (n[J]) {
            var t = void 0;
            if (t = n[J]._onDragOver({
              clientX: ne.clientX,
              clientY: ne.clientY,
              target: e,
              rootEl: n
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      wo();
    }
  },
  _onTouchMove: function(e) {
    if (_e) {
      var n = this.options, t = n.fallbackTolerance, r = n.fallbackOffset, o = e.touches ? e.touches[0] : e, a = m && $e(m, !0), i = m && a && a.a, s = m && a && a.d, l = ft && H && Sr(H), c = (o.clientX - _e.clientX + r.x) / (i || 1) + (l ? l[0] - Jt[0] : 0) / (i || 1), f = (o.clientY - _e.clientY + r.y) / (s || 1) + (l ? l[1] - Jt[1] : 0) / (s || 1);
      if (!g.active && !De) {
        if (t && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (m) {
        a ? (a.e += c - (qt || 0), a.f += f - (Zt || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f
        };
        var d = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(m, "webkitTransform", d), h(m, "mozTransform", d), h(m, "msTransform", d), h(m, "transform", d), qt = c, Zt = f, ne = o;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!m) {
      var e = this.options.fallbackOnBody ? document.body : A, n = k(u, !0, ft, !0, e), t = this.options;
      if (ft) {
        for (H = e; h(H, "position") === "static" && h(H, "transform") === "none" && H !== document; )
          H = H.parentNode;
        H !== document.body && H !== document.documentElement ? (H === document && (H = ae()), n.top += H.scrollTop, n.left += H.scrollLeft) : H = ae(), Jt = Sr(H);
      }
      m = u.cloneNode(!0), q(m, t.ghostClass, !1), q(m, t.fallbackClass, !0), q(m, t.dragClass, !0), h(m, "transition", ""), h(m, "transform", ""), h(m, "box-sizing", "border-box"), h(m, "margin", 0), h(m, "top", n.top), h(m, "left", n.left), h(m, "width", n.width), h(m, "height", n.height), h(m, "opacity", "0.8"), h(m, "position", ft ? "absolute" : "fixed"), h(m, "zIndex", "100000"), h(m, "pointerEvents", "none"), g.ghost = m, e.appendChild(m), h(m, "transform-origin", Cr / parseInt(m.style.width) * 100 + "% " + Or / parseInt(m.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var t = this, r = e.dataTransfer, o = t.options;
    if (L("dragStart", this, {
      evt: e
    }), g.eventCanceled) {
      this._onDrop();
      return;
    }
    L("setupClone", this), g.eventCanceled || (j = ho(u), j.removeAttribute("id"), j.draggable = !1, j.style["will-change"] = "", this._hideClone(), q(j, this.options.chosenClass, !1), g.clone = j), t.cloneId = wt(function() {
      L("clone", t), !g.eventCanceled && (t.options.removeCloneOnHide || A.insertBefore(j, u), t._hideClone(), Y({
        sortable: t,
        name: "clone"
      }));
    }), !n && q(u, o.dragClass, !0), n ? (Ot = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (T(document, "mouseup", t._onDrop), T(document, "touchend", t._onDrop), T(document, "touchcancel", t._onDrop), r && (r.effectAllowed = "move", o.setData && o.setData.call(t, r, u)), S(document, "drop", t), h(u, "transform", "translateZ(0)")), De = !0, t._dragStartId = wt(t._dragStarted.bind(t, n, e)), S(document, "selectstart", t), Xe = !0, qe && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, t = e.target, r, o, a, i = this.options, s = i.group, l = g.active, c = ct === s, f = i.sort, d = B || l, v, p = this, y = !1;
    if (dn)
      return;
    function _(se, Nt) {
      L(se, p, ie({
        evt: e,
        isOwner: c,
        axis: v ? "vertical" : "horizontal",
        revert: a,
        dragRect: r,
        targetRect: o,
        canSort: f,
        fromSortable: d,
        target: t,
        completed: E,
        onMove: function(En, Co) {
          return dt(A, n, u, r, En, k(En), e, Co);
        },
        changed: V
      }, Nt));
    }
    function U() {
      _("dragOverAnimationCapture"), p.captureAnimationState(), p !== d && d.captureAnimationState();
    }
    function E(se) {
      return _("dragOverCompleted", {
        insertion: se
      }), se && (c ? l._hideClone() : l._showClone(p), p !== d && (q(u, B ? B.options.ghostClass : l.options.ghostClass, !1), q(u, i.ghostClass, !0)), B !== p && p !== g.active ? B = p : p === g.active && B && (B = null), d === p && (p._ignoreWhileAnimating = t), p.animateAll(function() {
        _("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (t === u && !u.animated || t === n && !t.animated) && (je = null), !i.dragoverBubble && !e.rootEl && t !== document && (u.parentNode[J]._isOutsideThisEl(e.target), !se && Te(e)), !i.dragoverBubble && e.stopPropagation && e.stopPropagation(), y = !0;
    }
    function V() {
      Z = Q(u), ge = Q(u, i.draggable), Y({
        sortable: p,
        name: "change",
        toEl: n,
        newIndex: Z,
        newDraggableIndex: ge,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = oe(t, i.draggable, n, !0), _("dragOver"), g.eventCanceled)
      return y;
    if (u.contains(e.target) || t.animated && t.animatingX && t.animatingY || p._ignoreWhileAnimating === t)
      return E(!1);
    if (Ot = !1, l && !i.disabled && (c ? f || (a = D !== A) : B === this || (this.lastPutMode = ct.checkPull(this, l, u, e)) && s.checkPut(this, l, u, e))) {
      if (v = this._getDirection(e, t) === "vertical", r = k(u), _("dragOverValid"), g.eventCanceled)
        return y;
      if (a)
        return D = A, U(), this._hideClone(), _("revert"), g.eventCanceled || (Se ? A.insertBefore(u, Se) : A.appendChild(u)), E(!0);
      var P = Cn(n, i.draggable);
      if (!P || Lc(e, v, this) && !P.animated) {
        if (P === u)
          return E(!1);
        if (P && n === e.target && (t = P), t && (o = k(t)), dt(A, n, u, r, t, o, e, !!t) !== !1)
          return U(), P && P.nextSibling ? n.insertBefore(u, P.nextSibling) : n.appendChild(u), D = n, V(), E(!0);
      } else if (P && Xc(e, v, this)) {
        var W = Fe(n, 0, i, !0);
        if (W === u)
          return E(!1);
        if (t = W, o = k(t), dt(A, n, u, r, t, o, e, !1) !== !1)
          return U(), n.insertBefore(u, W), D = n, V(), E(!0);
      } else if (t.parentNode === n) {
        o = k(t);
        var M = 0, te, we = u.parentNode !== n, b = !Bc(u.animated && u.toRect || r, t.animated && t.toRect || o, v), w = v ? "top" : "left", $ = Tr(t, "top", "top") || Tr(u, "top", "top"), X = $ ? $.scrollTop : void 0;
        je !== t && (te = o[w], Qe = !1, ut = !b && i.invertSwap || we), M = Vc(e, t, o, v, b ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, ut, je === t);
        var C;
        if (M !== 0) {
          var I = Q(u);
          do
            I -= M, C = D.children[I];
          while (C && (h(C, "display") === "none" || C === m));
        }
        if (M === 0 || C === t)
          return E(!1);
        je = t, Ke = M;
        var R = t.nextElementSibling, F = !1;
        F = M === 1;
        var K = dt(A, n, u, r, t, o, e, F);
        if (K !== !1)
          return (K === 1 || K === -1) && (F = K === 1), dn = !0, setTimeout(zc, 30), U(), F && !R ? n.appendChild(u) : t.parentNode.insertBefore(u, F ? R : t), $ && po($, 0, X - $.scrollTop), D = u.parentNode, te !== void 0 && !ut && (yt = Math.abs(te - k(t)[w])), V(), E(!0);
      }
      if (n.contains(u))
        return E(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    T(document, "mousemove", this._onTouchMove), T(document, "touchmove", this._onTouchMove), T(document, "pointermove", this._onTouchMove), T(document, "dragover", Te), T(document, "mousemove", Te), T(document, "touchmove", Te);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    T(e, "mouseup", this._onDrop), T(e, "touchend", this._onDrop), T(e, "pointerup", this._onDrop), T(e, "touchcancel", this._onDrop), T(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, t = this.options;
    if (Z = Q(u), ge = Q(u, t.draggable), L("drop", this, {
      evt: e
    }), D = u && u.parentNode, Z = Q(u), ge = Q(u, t.draggable), g.eventCanceled) {
      this._nulling();
      return;
    }
    De = !1, ut = !1, Qe = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), pn(this.cloneId), pn(this._dragStartId), this.nativeDraggable && (T(document, "drop", this), T(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), qe && h(document.body, "user-select", ""), h(u, "transform", ""), e && (Xe && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), m && m.parentNode && m.parentNode.removeChild(m), (A === D || B && B.lastPutMode !== "clone") && j && j.parentNode && j.parentNode.removeChild(j), u && (this.nativeDraggable && T(u, "dragend", this), Kt(u), u.style["will-change"] = "", Xe && !De && q(u, B ? B.options.ghostClass : this.options.ghostClass, !1), q(u, this.options.chosenClass, !1), Y({
      sortable: this,
      name: "unchoose",
      toEl: D,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), A !== D ? (Z >= 0 && (Y({
      rootEl: D,
      name: "add",
      toEl: D,
      fromEl: A,
      originalEvent: e
    }), Y({
      sortable: this,
      name: "remove",
      toEl: D,
      originalEvent: e
    }), Y({
      rootEl: D,
      name: "sort",
      toEl: D,
      fromEl: A,
      originalEvent: e
    }), Y({
      sortable: this,
      name: "sort",
      toEl: D,
      originalEvent: e
    })), B && B.save()) : Z !== Ie && Z >= 0 && (Y({
      sortable: this,
      name: "update",
      toEl: D,
      originalEvent: e
    }), Y({
      sortable: this,
      name: "sort",
      toEl: D,
      originalEvent: e
    })), g.active && ((Z == null || Z === -1) && (Z = Ie, ge = Je), Y({
      sortable: this,
      name: "end",
      toEl: D,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    L("nulling", this), A = u = D = m = Se = j = bt = ve = _e = ne = Xe = Z = ge = Ie = Je = je = Ke = B = ct = g.dragged = g.ghost = g.clone = g.active = null, Et.forEach(function(e) {
      e.checked = !0;
    }), Et.length = qt = Zt = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        u && (this._onDragOver(e), Yc(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], n, t = this.el.children, r = 0, o = t.length, a = this.options; r < o; r++)
      n = t[r], oe(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || Gc(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var t = {}, r = this.el;
    this.toArray().forEach(function(o, a) {
      var i = r.children[a];
      oe(i, this.options.draggable, r, !1) && (t[o] = i);
    }, this), n && this.captureAnimationState(), e.forEach(function(o) {
      t[o] && (r.removeChild(t[o]), r.appendChild(t[o]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return oe(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var t = this.options;
    if (n === void 0)
      return t[e];
    var r = at.modifyOption(this, e, n);
    typeof r < "u" ? t[e] = r : t[e] = n, e === "group" && bo(t);
  },
  /**
   * Destroy
   */
  destroy: function() {
    L("destroy", this);
    var e = this.el;
    e[J] = null, T(e, "mousedown", this._onTapStart), T(e, "touchstart", this._onTapStart), T(e, "pointerdown", this._onTapStart), this.nativeDraggable && (T(e, "dragover", this), T(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), xt.splice(xt.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ve) {
      if (L("hideClone", this), g.eventCanceled)
        return;
      h(j, "display", "none"), this.options.removeCloneOnHide && j.parentNode && j.parentNode.removeChild(j), ve = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ve) {
      if (L("showClone", this), g.eventCanceled)
        return;
      u.parentNode == A && !this.options.group.revertClone ? A.insertBefore(j, u) : Se ? A.insertBefore(j, Se) : A.appendChild(j), this.options.group.revertClone && this.animate(u, j), h(j, "display", ""), ve = !1;
    }
  }
};
function Yc(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function dt(e, n, t, r, o, a, i, s) {
  var l, c = e[J], f = c.options.onMove, d;
  return window.CustomEvent && !he && !ot ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = n, l.from = e, l.dragged = t, l.draggedRect = r, l.related = o || n, l.relatedRect = a || k(n), l.willInsertAfter = s, l.originalEvent = i, e.dispatchEvent(l), f && (d = f.call(c, l, i)), d;
}
function Kt(e) {
  e.draggable = !1;
}
function zc() {
  dn = !1;
}
function Xc(e, n, t) {
  var r = k(Fe(t.el, 0, t.options, !0)), o = go(t.el, t.options, m), a = 10;
  return n ? e.clientX < o.left - a || e.clientY < r.top && e.clientX < r.right : e.clientY < o.top - a || e.clientY < r.bottom && e.clientX < r.left;
}
function Lc(e, n, t) {
  var r = k(Cn(t.el, t.options.draggable)), o = go(t.el, t.options, m), a = 10;
  return n ? e.clientX > o.right + a || e.clientY > r.bottom && e.clientX > r.left : e.clientY > o.bottom + a || e.clientX > r.right && e.clientY > r.top;
}
function Vc(e, n, t, r, o, a, i, s) {
  var l = r ? e.clientY : e.clientX, c = r ? t.height : t.width, f = r ? t.top : t.left, d = r ? t.bottom : t.right, v = !1;
  if (!i) {
    if (s && yt < c * o) {
      if (!Qe && (Ke === 1 ? l > f + c * a / 2 : l < d - c * a / 2) && (Qe = !0), Qe)
        v = !0;
      else if (Ke === 1 ? l < f + yt : l > d - yt)
        return -Ke;
    } else if (l > f + c * (1 - o) / 2 && l < d - c * (1 - o) / 2)
      return Wc(n);
  }
  return v = v || i, v && (l < f + c * a / 2 || l > d - c * a / 2) ? l > f + c / 2 ? 1 : -1 : 0;
}
function Wc(e) {
  return Q(u) < Q(e) ? 1 : -1;
}
function Gc(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, r = 0; t--; )
    r += n.charCodeAt(t);
  return r.toString(36);
}
function qc(e) {
  Et.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var r = n[t];
    r.checked && Et.push(r);
  }
}
function wt(e) {
  return setTimeout(e, 0);
}
function pn(e) {
  return clearTimeout(e);
}
$t && S(document, "touchmove", function(e) {
  (g.active || De) && e.cancelable && e.preventDefault();
});
g.utils = {
  on: S,
  off: T,
  css: h,
  find: uo,
  is: function(e, n) {
    return !!oe(e, n, e, !1);
  },
  extend: Pc,
  throttle: fo,
  closest: oe,
  toggleClass: q,
  clone: ho,
  index: Q,
  nextTick: wt,
  cancelNextTick: pn,
  detectDirection: mo,
  getChild: Fe
};
g.get = function(e) {
  return e[J];
};
g.mount = function() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (g.utils = ie(ie({}, g.utils), r.utils)), at.mount(r);
  });
};
g.create = function(e, n) {
  return new g(e, n);
};
g.version = Ac;
var N = [], Le, hn, gn = !1, Qt, en, At, Ve;
function Zc() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var t = n.originalEvent;
      this.sortable.nativeDraggable ? S(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? S(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? S(document, "touchmove", this._handleFallbackAutoScroll) : S(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var t = n.originalEvent;
      !this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
    },
    drop: function() {
      this.sortable.nativeDraggable ? T(document, "dragover", this._handleAutoScroll) : (T(document, "pointermove", this._handleFallbackAutoScroll), T(document, "touchmove", this._handleFallbackAutoScroll), T(document, "mousemove", this._handleFallbackAutoScroll)), Er(), _t(), Ic();
    },
    nulling: function() {
      At = hn = Le = gn = Ve = Qt = en = null, N.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, t) {
      var r = this, o = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, i = document.elementFromPoint(o, a);
      if (At = n, t || this.options.forceAutoScrollFallback || ot || he || qe) {
        tn(n, this.options, i, t);
        var s = be(i, !0);
        gn && (!Ve || o !== Qt || a !== en) && (Ve && Er(), Ve = setInterval(function() {
          var l = be(document.elementFromPoint(o, a), !0);
          l !== s && (s = l, _t()), tn(n, r.options, l, t);
        }, 10), Qt = o, en = a);
      } else {
        if (!this.options.bubbleScroll || be(i, !0) === ae()) {
          _t();
          return;
        }
        tn(n, this.options, be(i, !1), !1);
      }
    }
  }, de(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function _t() {
  N.forEach(function(e) {
    clearInterval(e.pid);
  }), N = [];
}
function Er() {
  clearInterval(Ve);
}
var tn = fo(function(e, n, t, r) {
  if (n.scroll) {
    var o = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, i = n.scrollSensitivity, s = n.scrollSpeed, l = ae(), c = !1, f;
    hn !== t && (hn = t, _t(), Le = n.scroll, f = n.scrollFn, Le === !0 && (Le = be(t, !0)));
    var d = 0, v = Le;
    do {
      var p = v, y = k(p), _ = y.top, U = y.bottom, E = y.left, V = y.right, P = y.width, W = y.height, M = void 0, te = void 0, we = p.scrollWidth, b = p.scrollHeight, w = h(p), $ = p.scrollLeft, X = p.scrollTop;
      p === l ? (M = P < we && (w.overflowX === "auto" || w.overflowX === "scroll" || w.overflowX === "visible"), te = W < b && (w.overflowY === "auto" || w.overflowY === "scroll" || w.overflowY === "visible")) : (M = P < we && (w.overflowX === "auto" || w.overflowX === "scroll"), te = W < b && (w.overflowY === "auto" || w.overflowY === "scroll"));
      var C = M && (Math.abs(V - o) <= i && $ + P < we) - (Math.abs(E - o) <= i && !!$), I = te && (Math.abs(U - a) <= i && X + W < b) - (Math.abs(_ - a) <= i && !!X);
      if (!N[d])
        for (var R = 0; R <= d; R++)
          N[R] || (N[R] = {});
      (N[d].vx != C || N[d].vy != I || N[d].el !== p) && (N[d].el = p, N[d].vx = C, N[d].vy = I, clearInterval(N[d].pid), (C != 0 || I != 0) && (c = !0, N[d].pid = setInterval((function() {
        r && this.layer === 0 && g.active._onTouchMove(At);
        var F = N[this.layer].vy ? N[this.layer].vy * s : 0, K = N[this.layer].vx ? N[this.layer].vx * s : 0;
        typeof f == "function" && f.call(g.dragged.parentNode[J], K, F, e, At, N[this.layer].el) !== "continue" || po(N[this.layer].el, K, F);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (n.bubbleScroll && v !== l && (v = be(v, !1)));
    gn = c;
  }
}, 30), _o = function(e) {
  var n = e.originalEvent, t = e.putSortable, r = e.dragEl, o = e.activeSortable, a = e.dispatchSortableEvent, i = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var l = t || o;
    i();
    var c = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(c.clientX, c.clientY);
    s(), l && !l.el.contains(f) && (a("spill"), this.onSpill({
      dragEl: r,
      putSortable: t
    }));
  }
};
function On() {
}
On.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable;
    this.sortable.captureAnimationState(), t && t.captureAnimationState();
    var r = Fe(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n), this.sortable.animateAll(), t && t.animateAll();
  },
  drop: _o
};
de(On, {
  pluginName: "revertOnSpill"
});
function xn() {
}
xn.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, t = e.putSortable, r = t || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: _o
};
de(xn, {
  pluginName: "removeOnSpill"
});
g.mount(new Zc());
g.mount(xn, On);
function Jc(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Kc(e) {
  Dt() && Po(e);
}
function Qc(e) {
  Dt() ? Do(e) : mn(e);
}
let To = null, So = null;
function Ar(e = null, n = null) {
  To = e, So = n;
}
function eu() {
  return {
    data: To,
    clonedData: So
  };
}
const jr = Symbol("cloneElement");
function tu(...e) {
  var n, t;
  const r = (n = Dt()) == null ? void 0 : n.proxy;
  let o = null;
  const a = e[0];
  let [, i, s] = e;
  Array.isArray(z(i)) || (s = i, i = null);
  let l = null;
  const {
    immediate: c = !0,
    clone: f = Jc,
    customUpdate: d
  } = (t = z(s)) != null ? t : {};
  function v(b) {
    var w;
    const { from: $, oldIndex: X, item: C } = b;
    o = Array.from($.childNodes);
    const I = z((w = z(i)) == null ? void 0 : w[X]), R = f(I);
    Ar(I, R), C[jr] = R;
  }
  function p(b) {
    const w = b.item[jr];
    if (!mc(w)) {
      if (Vt(b.item), kt(i)) {
        const $ = [...z(i)];
        i.value = vr($, b.newDraggableIndex, w);
        return;
      }
      vr(z(i), b.newDraggableIndex, w);
    }
  }
  function y(b) {
    const { from: w, item: $, oldIndex: X, oldDraggableIndex: C, pullMode: I, clone: R } = b;
    if (mr(w, $, X), I === "clone") {
      Vt(R);
      return;
    }
    if (kt(i)) {
      const F = [...z(i)];
      i.value = gr(F, C);
      return;
    }
    gr(z(i), C);
  }
  function _(b) {
    if (d) {
      d(b);
      return;
    }
    const { from: w, item: $, oldIndex: X, oldDraggableIndex: C, newDraggableIndex: I } = b;
    if (Vt($), mr(w, $, X), kt(i)) {
      const R = [...z(i)];
      i.value = hr(
        R,
        C,
        I
      );
      return;
    }
    hr(z(i), C, I);
  }
  function U(b) {
    const { newIndex: w, oldIndex: $, from: X, to: C } = b;
    let I = null;
    const R = w === $ && X === C;
    try {
      if (R) {
        let F = null;
        o?.some((K, se) => {
          if (F && o?.length !== C.childNodes.length)
            return X.insertBefore(F, K.nextSibling), !0;
          const Nt = C.childNodes[se];
          F = C?.replaceChild(K, Nt);
        });
      }
    } catch (F) {
      I = F;
    } finally {
      o = null;
    }
    mn(() => {
      if (Ar(), I)
        throw I;
    });
  }
  const E = {
    onUpdate: _,
    onStart: v,
    onAdd: p,
    onRemove: y,
    onEnd: U
  };
  function V(b) {
    const w = z(a);
    return b || (b = bc(w) ? yc(w, r?.$el) : w), b && !Tc(b) && (b = b.$el), b || hc("Root element not found"), b;
  }
  function P() {
    var b;
    const w = (b = z(s)) != null ? b : {}, { immediate: $, clone: X } = w, C = ao(w, ["immediate", "clone"]);
    return br(C, (I, R) => {
      Sc(I) && (C[I] = (F, ...K) => {
        const se = eu();
        return Cc(F, se), R(F, ...K);
      });
    }), _c(
      i === null ? {} : E,
      C
    );
  }
  const W = (b) => {
    b = V(b), l && M.destroy(), l = new g(b, P());
  };
  jo(
    () => s,
    () => {
      l && br(P(), (b, w) => {
        l?.option(b, w);
      });
    },
    { deep: !0 }
  );
  const M = {
    option: (b, w) => l?.option(b, w),
    destroy: () => {
      l?.destroy(), l = null;
    },
    save: () => l?.save(),
    toArray: () => l?.toArray(),
    closest: (...b) => l?.closest(...b)
  }, te = () => M?.option("disabled", !0), we = () => M?.option("disabled", !1);
  return Qc(() => {
    c && W();
  }), Kc(M.destroy), Pe({ start: W, pause: te, resume: we }, M);
}
const vn = [
  "update",
  "start",
  "add",
  "remove",
  "choose",
  "unchoose",
  "end",
  "sort",
  "filter",
  "clone",
  "move",
  "change"
], nu = [
  "clone",
  "animation",
  "ghostClass",
  "group",
  "sort",
  "disabled",
  "store",
  "handle",
  "draggable",
  "swapThreshold",
  "invertSwap",
  "invertedSwapThreshold",
  "removeCloneOnHide",
  "direction",
  "chosenClass",
  "dragClass",
  "ignore",
  "filter",
  "preventOnFilter",
  "easing",
  "setData",
  "dropBubble",
  "dragoverBubble",
  "dataIdAttr",
  "delay",
  "delayOnTouchOnly",
  "touchStartThreshold",
  "forceFallback",
  "fallbackClass",
  "fallbackOnBody",
  "fallbackTolerance",
  "fallbackOffset",
  "supportPointer",
  "emptyInsertThreshold",
  "scroll",
  "forceAutoScrollFallback",
  "scrollSensitivity",
  "scrollSpeed",
  "bubbleScroll",
  "modelValue",
  "tag",
  "target",
  "customUpdate",
  ...vn.map((e) => `on${e.replace(/^\S/, (n) => n.toUpperCase())}`)
], ru = jt({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: nu,
  emits: ["update:modelValue", ...vn],
  setup(e, { slots: n, emit: t, expose: r, attrs: o }) {
    const a = vn.reduce((f, d) => {
      const v = `on${d.replace(/^\S/, (p) => p.toUpperCase())}`;
      return f[v] = (...p) => t(d, ...p), f;
    }, {}), i = Tt(() => {
      const f = Ao(e), { modelValue: d } = f, v = ao(f, ["modelValue"]), p = Object.entries(v).reduce((y, [_, U]) => {
        const E = z(U);
        return E !== void 0 && (y[_] = E), y;
      }, {});
      return Pe(Pe({}, a), vc(Pe(Pe({}, o), p)));
    }), s = Tt({
      get: () => e.modelValue,
      set: (f) => t("update:modelValue", f)
    }), l = Me(), c = Dr(
      tu(e.target || l, s, i)
    );
    return r(c), () => {
      var f;
      return rn(e.tag || "div", { ref: l }, (f = n?.default) == null ? void 0 : f.call(n, c));
    };
  }
}), ou = { class: "column" }, au = { class: "index" }, iu = { class: "name" }, lu = /* @__PURE__ */ jt({
  name: "TableSettingsModal",
  components: { "a-modal": Ro, "a-switch": Fo },
  __name: "index",
  emits: ["change"],
  setup(e, { expose: n, emit: t }) {
    const r = t, o = Me(!1), a = (l) => {
      i.value = dr(l), o.value = !0;
    }, i = Me([]), s = Tt(() => ({
      title: "表格字段设置",
      visible: o.value,
      width: "520px",
      bodyStyle: { minHeight: "450px" },
      onCancel: () => o.value = !1,
      onOk: () => {
        r("change", dr(i.value)), o.value = !1;
      }
    }));
    return n({
      showModal: a
    }), (l, c) => {
      const f = An("a-switch"), d = An("a-modal");
      return pt(), Io(d, Mo($o(s.value)), {
        default: jn(() => [
          Ce(z(ru), {
            modelValue: i.value,
            "onUpdate:modelValue": c[0] || (c[0] = (v) => i.value = v),
            animation: 150,
            ghostClass: "ghost",
            class: "column_container"
          }, {
            default: jn(() => [
              (pt(!0), nn(No, null, ko(i.value, (v, p) => (pt(), nn("div", {
                key: v.title,
                class: "customColumnMain"
              }, [
                Ft("div", ou, [
                  Ft("div", au, Dn(p + 1), 1),
                  Ft("span", iu, Dn(v.title), 1),
                  Ce(f, {
                    checked: v.isShow,
                    "onUpdate:checked": (y) => v.isShow = y,
                    class: "switch",
                    size: "small"
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  Ce(z(wn), { class: "icon" })
                ])
              ]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 16);
    };
  }
}), su = Pr(lu), cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Ho,
  TableSettingsModal: su
}, Symbol.toStringTag, { value: "Module" })), vu = {
  install: (e) => {
    Object.values(cu).forEach((n) => {
      n.install && e.use(n);
    });
  }
  // install: (app: App) => {
  // 	for (let c in components) {
  // 		app.use(components[c]);
  // 	}
  // },
};
export {
  Ho as Button,
  su as TableSettingsModal,
  vu as default
};
