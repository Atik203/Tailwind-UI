import "./iframe-a81dc9a8.js";
import {
  r as i,
  R as P,
  a as Tn,
  e as Ve,
  b as In
} from "./index-0c85f979.js";
import "./_commonjsHelpers-87174ba5.js";
var On = Object.defineProperty,
  Cn = (e, t, n) => t in e ? On(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n,
  rt = (e, t, n) => (Cn(e, typeof t != "symbol" ? t + "" : t, n), n);
let kn = class {
  constructor() {
    rt(this, "current", this.detect()), rt(this, "handoffState", "pending"), rt(this, "currentId", 0)
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
  }
  reset() {
    this.set(this.detect())
  }
  nextId() {
    return ++this.currentId
  }
  get isServer() {
    return this.current === "server"
  }
  get isClient() {
    return this.current === "client"
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client"
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete")
  }
  get isHandoffComplete() {
    return this.handoffState === "complete"
  }
},
  be = new kn,
  K = (e, t) => {
    be.isServer ? i.useEffect(e, t) : i.useLayoutEffect(e, t)
  };

function re(e) {
  let t = i.useRef(e);
  return K(() => {
    t.current = e
  }, [e]), t
}

function Fe(e, t) {
  let [n, r] = i.useState(e), l = re(e);
  return K(() => r(l.current), [l, r, ...t]), n
}

function Ie(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
    throw t
  }))
}

function ae() {
  let e = [],
    t = {
      addEventListener(n, r, l, a) {
        return n.addEventListener(r, l, a), t.add(() => n.removeEventListener(r, l, a))
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r))
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r))
      },
      microTask(...n) {
        let r = {
          current: !0
        };
        return Ie(() => {
          r.current && n[0]()
        }), t.add(() => {
          r.current = !1
        })
      },
      style(n, r, l) {
        let a = n.style.getPropertyValue(r);
        return Object.assign(n.style, {
          [r]: l
        }), this.add(() => {
          Object.assign(n.style, {
            [r]: a
          })
        })
      },
      group(n) {
        let r = ae();
        return n(r), this.add(() => r.dispose())
      },
      add(n) {
        return e.push(n), () => {
          let r = e.indexOf(n);
          if (r >= 0)
            for (let l of e.splice(r, 1)) l()
        }
      },
      dispose() {
        for (let n of e.splice(0)) n()
      }
    };
  return t
}

function ie() {
  let [e] = i.useState(ae);
  return i.useEffect(() => () => e.dispose(), [e]), e
}
let y = function (e) {
  let t = re(e);
  return P.useCallback((...n) => t.current(...n), [t])
};

function Oe() {
  let [e, t] = i.useState(be.isHandoffComplete);
  return e && be.isHandoffComplete === !1 && t(!1), i.useEffect(() => {
    e !== !0 && t(!0)
  }, [e]), i.useEffect(() => be.handoff(), []), e
}
var qt;
let W = (qt = P.useId) != null ? qt : function () {
  let e = Oe(),
    [t, n] = P.useState(e ? () => be.nextId() : null);
  return K(() => {
    t === null && n(be.nextId())
  }, [t]), t != null ? "" + t : void 0
};

function N(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, N), r
}

function ge(e) {
  return be.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let ft = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var q = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(q || {}),
  de = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(de || {}),
  Ln = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ln || {});

function Me(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ft)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Ae = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ae || {});

function Ne(e, t = 0) {
  var n;
  return e === ((n = ge(e)) == null ? void 0 : n.body) ? !1 : N(t, {
    [0]() {
      return e.matches(ft)
    },
    [1]() {
      let r = e;
      for (; r !== null;) {
        if (r.matches(ft)) return !0;
        r = r.parentElement
      }
      return !1
    }
  })
}

function Zt(e) {
  let t = ge(e);
  ae().nextFrame(() => {
    t && !Ne(t.activeElement, 0) && ye(e)
  })
}
var Dn = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Dn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function ye(e) {
  e == null || e.focus({
    preventScroll: !0
  })
}
let Fn = ["textarea", "input"].join(",");

function Mn(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Fn)) != null ? n : !1
}

function fe(e, t = n => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      a = t(r);
    if (l === null || a === null) return 0;
    let o = l.compareDocumentPosition(a);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
  })
}

function An(e, t) {
  return te(Me(), t, {
    relativeTo: e
  })
}

function te(e, t, {
  sorted: n = !0,
  relativeTo: r = null,
  skipElements: l = []
} = {}) {
  let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
    o = Array.isArray(e) ? n ? fe(e) : e : Me(e);
  l.length > 0 && o.length > 1 && (o = o.filter(g => !l.includes(g))), r = r ?? a.activeElement;
  let u = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
  })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
      if (t & 8) return o.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    })(),
    c = t & 32 ? {
      preventScroll: !0
    } : {},
    p = 0,
    b = o.length,
    d;
  do {
    if (p >= b || p + b <= 0) return 0;
    let g = s + p;
    if (t & 16) g = (g + b) % b;
    else {
      if (g < 0) return 3;
      if (g >= b) return 1
    }
    d = o[g], d == null || d.focus(c), p += u
  } while (d !== a.activeElement);
  return t & 6 && Mn(d) && d.select(), 2
}

function ot(e, t, n) {
  let r = re(t);
  i.useEffect(() => {
    function l(a) {
      r.current(a)
    }
    return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n)
  }, [e, n])
}

function Be(e, t, n = !0) {
  let r = i.useRef(!1);
  i.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n
    })
  }, [n]);

  function l(o, u) {
    if (!r.current || o.defaultPrevented) return;
    let s = function p(b) {
      return typeof b == "function" ? p(b()) : Array.isArray(b) || b instanceof Set ? b : [b]
    }(e),
      c = u(o);
    if (c !== null && c.getRootNode().contains(c)) {
      for (let p of s) {
        if (p === null) continue;
        let b = p instanceof HTMLElement ? p : p.current;
        if (b != null && b.contains(c) || o.composed && o.composedPath().includes(b)) return
      }
      return !Ne(c, Ae.Loose) && c.tabIndex !== -1 && o.preventDefault(), t(o, c)
    }
  }
  let a = i.useRef(null);
  ot("mousedown", o => {
    var u, s;
    r.current && (a.current = ((s = (u = o.composedPath) == null ? void 0 : u.call(o)) == null ? void 0 : s[0]) || o.target)
  }, !0), ot("click", o => {
    a.current && (l(o, () => a.current), a.current = null)
  }, !0), ot("blur", o => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function Qt(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

function Pe(e, t) {
  let [n, r] = i.useState(() => Qt(e));
  return K(() => {
    r(Qt(e))
  }, [e.type, e.as]), K(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
  }, [n, t]), n
}
let en = Symbol();

function ht(e, t = !0) {
  return Object.assign(e, {
    [en]: t
  })
}

function U(...e) {
  let t = i.useRef(e);
  i.useEffect(() => {
    t.current = e
  }, [e]);
  let n = y(r => {
    for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r)
  });
  return e.every(r => r == null || (r == null ? void 0 : r[en])) ? void 0 : n
}

function xt({
  container: e,
  accept: t,
  walk: n,
  enabled: r = !0
}) {
  let l = i.useRef(t),
    a = i.useRef(n);
  i.useEffect(() => {
    l.current = t, a.current = n
  }, [t, n]), K(() => {
    if (!e || !r) return;
    let o = ge(e);
    if (!o) return;
    let u = l.current,
      s = a.current,
      c = Object.assign(b => u(b), {
        acceptNode: u
      }),
      p = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, c, !1);
    for (; p.nextNode();) s(p.currentNode)
  }, [e, r, l, a])
}

function Nn(e) {
  throw new Error("Unexpected object: " + e)
}
var G = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(G || {});

function yt(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    l = r ?? -1,
    a = (() => {
      switch (e.focus) {
        case 0:
          return n.findIndex(o => !t.resolveDisabled(o));
        case 1: {
          let o = n.slice().reverse().findIndex((u, s, c) => l !== -1 && c.length - s - 1 >= l ? !1 : !t.resolveDisabled(u));
          return o === -1 ? o : n.length - 1 - o
        }
        case 2:
          return n.findIndex((o, u) => u <= l ? !1 : !t.resolveDisabled(o));
        case 3: {
          let o = n.slice().reverse().findIndex(u => !t.resolveDisabled(u));
          return o === -1 ? o : n.length - 1 - o
        }
        case 4:
          return n.findIndex(o => t.resolveId(o) === e.id);
        case 5:
          return null;
        default:
          Nn(e)
      }
    })();
  return a === -1 ? r : a
}

function vt(...e) {
  return e.filter(Boolean).join(" ")
}
var oe = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(oe || {}),
  me = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(me || {});

function B({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: a = !0,
  name: o
}) {
  let u = tn(t, e);
  if (a) return Ke(u, n, r, o);
  let s = l ?? 0;
  if (s & 2) {
    let {
      static: c = !1,
      ...p
    } = u;
    if (c) return Ke(p, n, r, o)
  }
  if (s & 1) {
    let {
      unmount: c = !0,
      ...p
    } = u;
    return N(c ? 0 : 1, {
      [0]() {
        return null
      },
      [1]() {
        return Ke({
          ...p,
          hidden: !0,
          style: {
            display: "none"
          }
        }, n, r, o)
      }
    })
  }
  return Ke(u, n, r, o)
}

function Ke(e, t = {}, n, r) {
  let {
    as: l = n,
    children: a,
    refName: o = "ref",
    ...u
  } = lt(e, ["unmount", "static"]), s = e.ref !== void 0 ? {
    [o]: e.ref
  } : {}, c = typeof a == "function" ? a(t) : a;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
  let p = {};
  if (t) {
    let b = !1,
      d = [];
    for (let [g, v] of Object.entries(t)) typeof v == "boolean" && (b = !0), v === !0 && d.push(g);
    b && (p["data-headlessui-state"] = d.join(" "))
  }
  if (l === i.Fragment && Object.keys(we(u)).length > 0) {
    if (!i.isValidElement(c) || Array.isArray(c) && c.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map(v => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(v => `  - ${v}`).join(`
`)].join(`
`));
    let b = c.props,
      d = typeof (b == null ? void 0 : b.className) == "function" ? (...v) => vt(b == null ? void 0 : b.className(...v), u.className) : vt(b == null ? void 0 : b.className, u.className),
      g = d ? {
        className: d
      } : {};
    return i.cloneElement(c, Object.assign({}, tn(c.props, we(lt(u, ["ref"]))), p, s, Bn(c.ref, s.ref), g))
  }
  return i.createElement(l, Object.assign({}, lt(u, ["ref"]), l !== i.Fragment && s, l !== i.Fragment && p), c)
}

function Bn(...e) {
  return {
    ref: e.every(t => t == null) ? void 0 : t => {
      for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
    }
  }
}

function tn(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
  for (let r in n) Object.assign(t, {
    [r](l, ...a) {
      let o = n[r];
      for (let u of o) {
        if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
        u(l, ...a)
      }
    }
  });
  return t
}

function _(e) {
  var t;
  return Object.assign(i.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name
  })
}

function we(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t
}

function lt(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n
}

function ve(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && _n(n) ? !1 : r
}

function _n(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null;) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling
  }
  return !0
}

function Qe(e = {}, t = null, n = []) {
  for (let [r, l] of Object.entries(e)) rn(n, nn(t, r), l);
  return n
}

function nn(e, t) {
  return e ? e + "[" + t + "]" : t
}

function rn(e, t, n) {
  if (Array.isArray(n))
    for (let [r, l] of n.entries()) rn(e, nn(t, r.toString()), l);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Qe(n, t, e)
}

function on(e) {
  var t;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let r of n.elements)
      if (r.tagName === "INPUT" && r.type === "submit" || r.tagName === "BUTTON" && r.type === "submit" || r.nodeName === "INPUT" && r.type === "image") {
        r.click();
        return
      }
  }
}
let Hn = "div";
var se = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(se || {});

function Un(e, t) {
  let {
    features: n = 1,
    ...r
  } = e, l = {
    ref: t,
    "aria-hidden": (n & 2) === 2 ? !0 : void 0,
    style: {
      position: "fixed",
      top: 1,
      left: 1,
      width: 1,
      height: 0,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: "0",
      ...(n & 4) === 4 && (n & 2) !== 2 && {
        display: "none"
      }
    }
  };
  return B({
    ourProps: l,
    theirProps: r,
    slot: {},
    defaultTag: Hn,
    name: "Hidden"
  })
}
let ce = _(Un),
  Et = i.createContext(null);
Et.displayName = "OpenClosedContext";
var V = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(V || {});

function he() {
  return i.useContext(Et)
}

function Ce({
  value: e,
  children: t
}) {
  return P.createElement(Et.Provider, {
    value: e
  }, t)
}
var R = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(R || {});

function Ye(e, t, n) {
  let [r, l] = i.useState(n), a = e !== void 0, o = i.useRef(a), u = i.useRef(!1), s = i.useRef(!1);
  return a && !o.current && !u.current ? (u.current = !0, o.current = a, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !a && o.current && !s.current && (s.current = !0, o.current = a, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [a ? e : r, y(c => (a || l(c), t == null ? void 0 : t(c)))]
}

function De(e, t) {
  let n = i.useRef([]),
    r = y(e);
  i.useEffect(() => {
    let l = [...n.current];
    for (let [a, o] of t.entries())
      if (n.current[a] !== o) {
        let u = r(t, l);
        return n.current = t, u
      }
  }, [r, ...t])
}

function Yt(e) {
  return [e.screenX, e.screenY]
}

function St() {
  let e = i.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = Yt(t);
      return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0)
    },
    update(t) {
      e.current = Yt(t)
    }
  }
}

function ln() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function jn() {
  return /Android/gi.test(window.navigator.userAgent)
}

function Gn() {
  return ln() || jn()
}
var Kn = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kn || {}),
  Vn = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Vn || {}),
  Wn = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Wn || {}),
  qn = (e => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.RegisterOption = 3] = "RegisterOption", e[e.UnregisterOption = 4] = "UnregisterOption", e[e.RegisterLabel = 5] = "RegisterLabel", e))(qn || {});

function at(e, t = n => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    r = fe(t(e.options.slice()), a => a.dataRef.current.domRef.current),
    l = n ? r.indexOf(n) : null;
  return l === -1 && (l = null), {
    options: r,
    activeOptionIndex: l
  }
}
let Qn = {
  [1](e) {
    var t;
    return (t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1 ? e : {
      ...e,
      activeOptionIndex: null,
      comboboxState: 1
    }
  },
  [0](e) {
    var t;
    if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 0) return e;
    let n = e.activeOptionIndex;
    if (e.dataRef.current) {
      let {
        isSelected: r
      } = e.dataRef.current, l = e.options.findIndex(a => r(a.dataRef.current.value));
      l !== -1 && (n = l)
    }
    return {
      ...e,
      comboboxState: 0,
      activeOptionIndex: n
    }
  },
  [2](e, t) {
    var n, r, l, a;
    if ((n = e.dataRef.current) != null && n.disabled || (r = e.dataRef.current) != null && r.optionsRef.current && !((l = e.dataRef.current) != null && l.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
    let o = at(e);
    if (o.activeOptionIndex === null) {
      let s = o.options.findIndex(c => !c.dataRef.current.disabled);
      s !== -1 && (o.activeOptionIndex = s)
    }
    let u = yt(t, {
      resolveItems: () => o.options,
      resolveActiveIndex: () => o.activeOptionIndex,
      resolveId: s => s.id,
      resolveDisabled: s => s.dataRef.current.disabled
    });
    return {
      ...e,
      ...o,
      activeOptionIndex: u,
      activationTrigger: (a = t.trigger) != null ? a : 1
    }
  },
  [3]: (e, t) => {
    var n, r;
    let l = {
      id: t.id,
      dataRef: t.dataRef
    },
      a = at(e, u => [...u, l]);
    e.activeOptionIndex === null && (n = e.dataRef.current) != null && n.isSelected(t.dataRef.current.value) && (a.activeOptionIndex = a.options.indexOf(l));
    let o = {
      ...e,
      ...a,
      activationTrigger: 1
    };
    return (r = e.dataRef.current) != null && r.__demoMode && e.dataRef.current.value === void 0 && (o.activeOptionIndex = 0), o
  },
  [4]: (e, t) => {
    let n = at(e, r => {
      let l = r.findIndex(a => a.id === t.id);
      return l !== -1 && r.splice(l, 1), r
    });
    return {
      ...e,
      ...n,
      activationTrigger: 1
    }
  },
  [5]: (e, t) => ({
    ...e,
    labelId: t.id
  })
},
  Rt = i.createContext(null);
Rt.displayName = "ComboboxActionsContext";

function _e(e) {
  let t = i.useContext(Rt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, _e), n
  }
  return t
}
let Pt = i.createContext(null);
Pt.displayName = "ComboboxDataContext";

function ke(e) {
  let t = i.useContext(Pt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, ke), n
  }
  return t
}

function Yn(e, t) {
  return N(t.type, Qn, e, t)
}
let zn = i.Fragment;

function Xn(e, t) {
  let {
    value: n,
    defaultValue: r,
    onChange: l,
    form: a,
    name: o,
    by: u = (T, I) => T === I,
    disabled: s = !1,
    __demoMode: c = !1,
    nullable: p = !1,
    multiple: b = !1,
    ...d
  } = e, [g = b ? [] : void 0, v] = Ye(n, l, r), [f, h] = i.useReducer(Yn, {
    dataRef: i.createRef(),
    comboboxState: c ? 0 : 1,
    options: [],
    activeOptionIndex: null,
    activationTrigger: 1,
    labelId: null
  }), m = i.useRef(!1), x = i.useRef({
    static: !1,
    hold: !1
  }), F = i.useRef(null), D = i.useRef(null), O = i.useRef(null), M = i.useRef(null), $ = y(typeof u == "string" ? (T, I) => {
    let H = u;
    return (T == null ? void 0 : T[H]) === (I == null ? void 0 : I[H])
  } : u), S = i.useCallback(T => N(E.mode, {
    [1]: () => g.some(I => $(I, T)),
    [0]: () => $(g, T)
  }), [g]), E = i.useMemo(() => ({
    ...f,
    optionsPropsRef: x,
    labelRef: F,
    inputRef: D,
    buttonRef: O,
    optionsRef: M,
    value: g,
    defaultValue: r,
    disabled: s,
    mode: b ? 1 : 0,
    get activeOptionIndex() {
      if (m.current && f.activeOptionIndex === null && f.options.length > 0) {
        let T = f.options.findIndex(I => !I.dataRef.current.disabled);
        if (T !== -1) return T
      }
      return f.activeOptionIndex
    },
    compare: $,
    isSelected: S,
    nullable: p,
    __demoMode: c
  }), [g, r, s, b, p, c, f]), C = i.useRef(E.activeOptionIndex !== null ? E.options[E.activeOptionIndex] : null);
  i.useEffect(() => {
    let T = E.activeOptionIndex !== null ? E.options[E.activeOptionIndex] : null;
    C.current !== T && (C.current = T)
  }), K(() => {
    f.dataRef.current = E
  }, [E]), Be([E.buttonRef, E.inputRef, E.optionsRef], () => J.closeCombobox(), E.comboboxState === 0);
  let k = i.useMemo(() => ({
    open: E.comboboxState === 0,
    disabled: s,
    activeIndex: E.activeOptionIndex,
    activeOption: E.activeOptionIndex === null ? null : E.options[E.activeOptionIndex].dataRef.current.value,
    value: g
  }), [E, s, g]),
    w = y(T => {
      let I = E.options.find(H => H.id === T);
      I && A(I.dataRef.current.value)
    }),
    L = y(() => {
      if (E.activeOptionIndex !== null) {
        let {
          dataRef: T,
          id: I
        } = E.options[E.activeOptionIndex];
        A(T.current.value), J.goToOption(G.Specific, I)
      }
    }),
    j = y(() => {
      h({
        type: 0
      }), m.current = !0
    }),
    z = y(() => {
      h({
        type: 1
      }), m.current = !1
    }),
    ee = y((T, I, H) => (m.current = !1, T === G.Specific ? h({
      type: 2,
      focus: G.Specific,
      id: I,
      trigger: H
    }) : h({
      type: 2,
      focus: T,
      trigger: H
    }))),
    X = y((T, I) => (h({
      type: 3,
      id: T,
      dataRef: I
    }), () => {
      var H;
      ((H = C.current) == null ? void 0 : H.id) === T && (m.current = !0), h({
        type: 4,
        id: T
      })
    })),
    le = y(T => (h({
      type: 5,
      id: T
    }), () => h({
      type: 5,
      id: null
    }))),
    A = y(T => N(E.mode, {
      [0]() {
        return v == null ? void 0 : v(T)
      },
      [1]() {
        let I = E.value.slice(),
          H = I.findIndex(Y => $(Y, T));
        return H === -1 ? I.push(T) : I.splice(H, 1), v == null ? void 0 : v(I)
      }
    })),
    J = i.useMemo(() => ({
      onChange: A,
      registerOption: X,
      registerLabel: le,
      goToOption: ee,
      closeCombobox: z,
      openCombobox: j,
      selectActiveOption: L,
      selectOption: w
    }), []),
    Q = t === null ? {} : {
      ref: t
    },
    ne = i.useRef(null),
    Z = ie();
  return i.useEffect(() => {
    ne.current && r !== void 0 && Z.addEventListener(ne.current, "reset", () => {
      A(r)
    })
  }, [ne, A]), P.createElement(Rt.Provider, {
    value: J
  }, P.createElement(Pt.Provider, {
    value: E
  }, P.createElement(Ce, {
    value: N(E.comboboxState, {
      [0]: V.Open,
      [1]: V.Closed
    })
  }, o != null && g != null && Qe({
    [o]: g
  }).map(([T, I], H) => P.createElement(ce, {
    features: se.Hidden,
    ref: H === 0 ? Y => {
      var pe;
      ne.current = (pe = Y == null ? void 0 : Y.closest("form")) != null ? pe : null
    } : void 0,
    ...we({
      key: T,
      as: "input",
      type: "hidden",
      hidden: !0,
      readOnly: !0,
      form: a,
      name: T,
      value: I
    })
  })), B({
    ourProps: Q,
    theirProps: d,
    slot: k,
    defaultTag: zn,
    name: "Combobox"
  }))))
}
let Jn = "input";

function Zn(e, t) {
  var n, r, l, a;
  let o = W(),
    {
      id: u = `headlessui-combobox-input-${o}`,
      onChange: s,
      displayValue: c,
      type: p = "text",
      ...b
    } = e,
    d = ke("Combobox.Input"),
    g = _e("Combobox.Input"),
    v = U(d.inputRef, t),
    f = i.useRef(!1),
    h = ie(),
    m = function () {
      var w;
      return typeof c == "function" && d.value !== void 0 ? (w = c(d.value)) != null ? w : "" : typeof d.value == "string" ? d.value : ""
    }();
  De(([w, L], [j, z]) => {
    f.current || d.inputRef.current && (z === 0 && L === 1 || w !== j) && (d.inputRef.current.value = w)
  }, [m, d.comboboxState]), De(([w], [L]) => {
    if (w === 0 && L === 1) {
      let j = d.inputRef.current;
      if (!j) return;
      let z = j.value,
        {
          selectionStart: ee,
          selectionEnd: X,
          selectionDirection: le
        } = j;
      j.value = "", j.value = z, le !== null ? j.setSelectionRange(ee, X, le) : j.setSelectionRange(ee, X)
    }
  }, [d.comboboxState]);
  let x = i.useRef(!1),
    F = i.useRef(null),
    D = y(() => {
      x.current = !0
    }),
    O = y(() => {
      h.nextFrame(() => {
        x.current = !1, F.current && (g.openCombobox(), s == null || s(F.current), F.current = null)
      })
    }),
    M = y(w => {
      switch (f.current = !0, w.key) {
        case R.Backspace:
        case R.Delete:
          if (d.mode !== 0 || !d.nullable) return;
          let L = w.currentTarget;
          h.requestAnimationFrame(() => {
            L.value === "" && (g.onChange(null), d.optionsRef.current && (d.optionsRef.current.scrollTop = 0), g.goToOption(G.Nothing))
          });
          break;
        case R.Enter:
          if (f.current = !1, d.comboboxState !== 0 || x.current) return;
          if (w.preventDefault(), w.stopPropagation(), d.activeOptionIndex === null) {
            g.closeCombobox();
            return
          }
          g.selectActiveOption(), d.mode === 0 && g.closeCombobox();
          break;
        case R.ArrowDown:
          return f.current = !1, w.preventDefault(), w.stopPropagation(), N(d.comboboxState, {
            [0]: () => {
              g.goToOption(G.Next)
            },
            [1]: () => {
              g.openCombobox()
            }
          });
        case R.ArrowUp:
          return f.current = !1, w.preventDefault(), w.stopPropagation(), N(d.comboboxState, {
            [0]: () => {
              g.goToOption(G.Previous)
            },
            [1]: () => {
              g.openCombobox(), h.nextFrame(() => {
                d.value || g.goToOption(G.Last)
              })
            }
          });
        case R.Home:
          if (w.shiftKey) break;
          return f.current = !1, w.preventDefault(), w.stopPropagation(), g.goToOption(G.First);
        case R.PageUp:
          return f.current = !1, w.preventDefault(), w.stopPropagation(), g.goToOption(G.First);
        case R.End:
          if (w.shiftKey) break;
          return f.current = !1, w.preventDefault(), w.stopPropagation(), g.goToOption(G.Last);
        case R.PageDown:
          return f.current = !1, w.preventDefault(), w.stopPropagation(), g.goToOption(G.Last);
        case R.Escape:
          return f.current = !1, d.comboboxState !== 0 ? void 0 : (w.preventDefault(), d.optionsRef.current && !d.optionsPropsRef.current.static && w.stopPropagation(), g.closeCombobox());
        case R.Tab:
          if (f.current = !1, d.comboboxState !== 0) return;
          d.mode === 0 && g.selectActiveOption(), g.closeCombobox();
          break
      }
    }),
    $ = y(w => {
      if (x.current) {
        F.current = w;
        return
      }
      g.openCombobox(), s == null || s(w)
    }),
    S = y(() => {
      f.current = !1
    }),
    E = Fe(() => {
      if (d.labelId) return [d.labelId].join(" ")
    }, [d.labelId]),
    C = i.useMemo(() => ({
      open: d.comboboxState === 0,
      disabled: d.disabled
    }), [d]),
    k = {
      ref: v,
      id: u,
      role: "combobox",
      type: p,
      "aria-controls": (n = d.optionsRef.current) == null ? void 0 : n.id,
      "aria-expanded": d.disabled ? void 0 : d.comboboxState === 0,
      "aria-activedescendant": d.activeOptionIndex === null || (r = d.options[d.activeOptionIndex]) == null ? void 0 : r.id,
      "aria-labelledby": E,
      "aria-autocomplete": "list",
      defaultValue: (a = (l = e.defaultValue) != null ? l : d.defaultValue !== void 0 ? c == null ? void 0 : c(d.defaultValue) : null) != null ? a : d.defaultValue,
      disabled: d.disabled,
      onCompositionStart: D,
      onCompositionEnd: O,
      onKeyDown: M,
      onChange: $,
      onBlur: S
    };
  return B({
    ourProps: k,
    theirProps: b,
    slot: C,
    defaultTag: Jn,
    name: "Combobox.Input"
  })
}
let er = "button";

function tr(e, t) {
  var n;
  let r = ke("Combobox.Button"),
    l = _e("Combobox.Button"),
    a = U(r.buttonRef, t),
    o = W(),
    {
      id: u = `headlessui-combobox-button-${o}`,
      ...s
    } = e,
    c = ie(),
    p = y(f => {
      switch (f.key) {
        case R.ArrowDown:
          return f.preventDefault(), f.stopPropagation(), r.comboboxState === 1 && l.openCombobox(), c.nextFrame(() => {
            var h;
            return (h = r.inputRef.current) == null ? void 0 : h.focus({
              preventScroll: !0
            })
          });
        case R.ArrowUp:
          return f.preventDefault(), f.stopPropagation(), r.comboboxState === 1 && (l.openCombobox(), c.nextFrame(() => {
            r.value || l.goToOption(G.Last)
          })), c.nextFrame(() => {
            var h;
            return (h = r.inputRef.current) == null ? void 0 : h.focus({
              preventScroll: !0
            })
          });
        case R.Escape:
          return r.comboboxState !== 0 ? void 0 : (f.preventDefault(), r.optionsRef.current && !r.optionsPropsRef.current.static && f.stopPropagation(), l.closeCombobox(), c.nextFrame(() => {
            var h;
            return (h = r.inputRef.current) == null ? void 0 : h.focus({
              preventScroll: !0
            })
          }));
        default:
          return
      }
    }),
    b = y(f => {
      if (ve(f.currentTarget)) return f.preventDefault();
      r.comboboxState === 0 ? l.closeCombobox() : (f.preventDefault(), l.openCombobox()), c.nextFrame(() => {
        var h;
        return (h = r.inputRef.current) == null ? void 0 : h.focus({
          preventScroll: !0
        })
      })
    }),
    d = Fe(() => {
      if (r.labelId) return [r.labelId, u].join(" ")
    }, [r.labelId, u]),
    g = i.useMemo(() => ({
      open: r.comboboxState === 0,
      disabled: r.disabled,
      value: r.value
    }), [r]),
    v = {
      ref: a,
      id: u,
      type: Pe(e, r.buttonRef),
      tabIndex: -1,
      "aria-haspopup": "listbox",
      "aria-controls": (n = r.optionsRef.current) == null ? void 0 : n.id,
      "aria-expanded": r.disabled ? void 0 : r.comboboxState === 0,
      "aria-labelledby": d,
      disabled: r.disabled,
      onClick: b,
      onKeyDown: p
    };
  return B({
    ourProps: v,
    theirProps: s,
    slot: g,
    defaultTag: er,
    name: "Combobox.Button"
  })
}
let nr = "label";

function rr(e, t) {
  let n = W(),
    {
      id: r = `headlessui-combobox-label-${n}`,
      ...l
    } = e,
    a = ke("Combobox.Label"),
    o = _e("Combobox.Label"),
    u = U(a.labelRef, t);
  K(() => o.registerLabel(r), [r]);
  let s = y(() => {
    var p;
    return (p = a.inputRef.current) == null ? void 0 : p.focus({
      preventScroll: !0
    })
  }),
    c = i.useMemo(() => ({
      open: a.comboboxState === 0,
      disabled: a.disabled
    }), [a]);
  return B({
    ourProps: {
      ref: u,
      id: r,
      onClick: s
    },
    theirProps: l,
    slot: c,
    defaultTag: nr,
    name: "Combobox.Label"
  })
}
let or = "ul",
  lr = oe.RenderStrategy | oe.Static;

function ar(e, t) {
  let n = W(),
    {
      id: r = `headlessui-combobox-options-${n}`,
      hold: l = !1,
      ...a
    } = e,
    o = ke("Combobox.Options"),
    u = U(o.optionsRef, t),
    s = he(),
    c = (() => s !== null ? (s & V.Open) === V.Open : o.comboboxState === 0)();
  K(() => {
    var g;
    o.optionsPropsRef.current.static = (g = e.static) != null ? g : !1
  }, [o.optionsPropsRef, e.static]), K(() => {
    o.optionsPropsRef.current.hold = l
  }, [o.optionsPropsRef, l]), xt({
    container: o.optionsRef.current,
    enabled: o.comboboxState === 0,
    accept(g) {
      return g.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : g.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
    },
    walk(g) {
      g.setAttribute("role", "none")
    }
  });
  let p = Fe(() => {
    var g, v;
    return (v = o.labelId) != null ? v : (g = o.buttonRef.current) == null ? void 0 : g.id
  }, [o.labelId, o.buttonRef.current]),
    b = i.useMemo(() => ({
      open: o.comboboxState === 0
    }), [o]),
    d = {
      "aria-labelledby": p,
      role: "listbox",
      "aria-multiselectable": o.mode === 1 ? !0 : void 0,
      id: r,
      ref: u
    };
  return B({
    ourProps: d,
    theirProps: a,
    slot: b,
    defaultTag: or,
    features: lr,
    visible: c,
    name: "Combobox.Options"
  })
}
let ir = "li";

function ur(e, t) {
  var n, r;
  let l = W(),
    {
      id: a = `headlessui-combobox-option-${l}`,
      disabled: o = !1,
      value: u,
      ...s
    } = e,
    c = ke("Combobox.Option"),
    p = _e("Combobox.Option"),
    b = c.activeOptionIndex !== null ? c.options[c.activeOptionIndex].id === a : !1,
    d = c.isSelected(u),
    g = i.useRef(null),
    v = re({
      disabled: o,
      value: u,
      domRef: g,
      textValue: (r = (n = g.current) == null ? void 0 : n.textContent) == null ? void 0 : r.toLowerCase()
    }),
    f = U(t, g),
    h = y(() => p.selectOption(a));
  K(() => p.registerOption(a, v), [v, a]);
  let m = i.useRef(!c.__demoMode);
  K(() => {
    if (!c.__demoMode) return;
    let E = ae();
    return E.requestAnimationFrame(() => {
      m.current = !0
    }), E.dispose
  }, []), K(() => {
    if (c.comboboxState !== 0 || !b || !m.current || c.activationTrigger === 0) return;
    let E = ae();
    return E.requestAnimationFrame(() => {
      var C, k;
      (k = (C = g.current) == null ? void 0 : C.scrollIntoView) == null || k.call(C, {
        block: "nearest"
      })
    }), E.dispose
  }, [g, b, c.comboboxState, c.activationTrigger, c.activeOptionIndex]);
  let x = y(E => {
    if (o) return E.preventDefault();
    h(), c.mode === 0 && p.closeCombobox(), Gn() || requestAnimationFrame(() => {
      var C;
      return (C = c.inputRef.current) == null ? void 0 : C.focus()
    })
  }),
    F = y(() => {
      if (o) return p.goToOption(G.Nothing);
      p.goToOption(G.Specific, a)
    }),
    D = St(),
    O = y(E => D.update(E)),
    M = y(E => {
      D.wasMoved(E) && (o || b || p.goToOption(G.Specific, a, 0))
    }),
    $ = y(E => {
      D.wasMoved(E) && (o || b && (c.optionsPropsRef.current.hold || p.goToOption(G.Nothing)))
    }),
    S = i.useMemo(() => ({
      active: b,
      selected: d,
      disabled: o
    }), [b, d, o]);
  return B({
    ourProps: {
      id: a,
      ref: f,
      role: "option",
      tabIndex: o === !0 ? void 0 : -1,
      "aria-disabled": o === !0 ? !0 : void 0,
      "aria-selected": d,
      disabled: void 0,
      onClick: x,
      onFocus: F,
      onPointerEnter: O,
      onMouseEnter: O,
      onPointerMove: M,
      onMouseMove: M,
      onPointerLeave: $,
      onMouseLeave: $
    },
    theirProps: s,
    slot: S,
    defaultTag: ir,
    name: "Combobox.Option"
  })
}
let sr = _(Xn),
  cr = _(tr),
  dr = _(Zn),
  pr = _(rr),
  fr = _(ar),
  vr = _(ur),
  mr = Object.assign(sr, {
    Input: dr,
    Button: cr,
    Label: pr,
    Options: fr,
    Option: vr
  });

function br(e, t, n) {
  let r = re(t);
  i.useEffect(() => {
    function l(a) {
      r.current(a)
    }
    return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n)
  }, [e, n])
}
var ue = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ue || {});

function $t() {
  let e = i.useRef(0);
  return br("keydown", t => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
  }, !0), e
}

function He() {
  let e = i.useRef(!1);
  return K(() => (e.current = !0, () => {
    e.current = !1
  }), []), e
}

function Ee(...e) {
  return i.useMemo(() => ge(...e), [...e])
}

function wt(e, t, n, r) {
  let l = re(n);
  i.useEffect(() => {
    e = e ?? window;

    function a(o) {
      l.current(o)
    }
    return e.addEventListener(t, a, r), () => e.removeEventListener(t, a, r)
  }, [e, t, r])
}

function gr(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}

function an(e) {
  if (!e) return new Set;
  if (typeof e == "function") return new Set(e());
  let t = new Set;
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t
}
let hr = "div";
var un = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(un || {});

function xr(e, t) {
  let n = i.useRef(null),
    r = U(n, t),
    {
      initialFocus: l,
      containers: a,
      features: o = 30,
      ...u
    } = e;
  Oe() || (o = 1);
  let s = Ee(n);
  Sr({
    ownerDocument: s
  }, Boolean(o & 16));
  let c = Rr({
    ownerDocument: s,
    container: n,
    initialFocus: l
  }, Boolean(o & 2));
  Pr({
    ownerDocument: s,
    container: n,
    containers: a,
    previousActiveElement: c
  }, Boolean(o & 8));
  let p = $t(),
    b = y(f => {
      let h = n.current;
      h && (m => m())(() => {
        N(p.current, {
          [ue.Forwards]: () => {
            te(h, q.First, {
              skipElements: [f.relatedTarget]
            })
          },
          [ue.Backwards]: () => {
            te(h, q.Last, {
              skipElements: [f.relatedTarget]
            })
          }
        })
      })
    }),
    d = ie(),
    g = i.useRef(!1),
    v = {
      ref: r,
      onKeyDown(f) {
        f.key == "Tab" && (g.current = !0, d.requestAnimationFrame(() => {
          g.current = !1
        }))
      },
      onBlur(f) {
        let h = an(a);
        n.current instanceof HTMLElement && h.add(n.current);
        let m = f.relatedTarget;
        m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (sn(h, m) || (g.current ? te(n.current, N(p.current, {
          [ue.Forwards]: () => q.Next,
          [ue.Backwards]: () => q.Previous
        }) | q.WrapAround, {
          relativeTo: f.target
        }) : f.target instanceof HTMLElement && ye(f.target)))
      }
    };
  return P.createElement(P.Fragment, null, Boolean(o & 4) && P.createElement(ce, {
    as: "button",
    type: "button",
    "data-headlessui-focus-guard": !0,
    onFocus: b,
    features: se.Focusable
  }), B({
    ourProps: v,
    theirProps: u,
    defaultTag: hr,
    name: "FocusTrap"
  }), Boolean(o & 4) && P.createElement(ce, {
    as: "button",
    type: "button",
    "data-headlessui-focus-guard": !0,
    onFocus: b,
    features: se.Focusable
  }))
}
let yr = _(xr),
  $e = Object.assign(yr, {
    features: un
  }),
  xe = [];
gr(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && xe[0] !== t.target && (xe.unshift(t.target), xe = xe.filter(n => n != null && n.isConnected), xe.splice(10))
  }
  window.addEventListener("click", e, {
    capture: !0
  }), window.addEventListener("mousedown", e, {
    capture: !0
  }), window.addEventListener("focus", e, {
    capture: !0
  }), document.body.addEventListener("click", e, {
    capture: !0
  }), document.body.addEventListener("mousedown", e, {
    capture: !0
  }), document.body.addEventListener("focus", e, {
    capture: !0
  })
});

function Er(e = !0) {
  let t = i.useRef(xe.slice());
  return De(([n], [r]) => {
    r === !0 && n === !1 && Ie(() => {
      t.current.splice(0)
    }), r === !1 && n === !0 && (t.current = xe.slice())
  }, [e, xe, t]), y(() => {
    var n;
    return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
  })
}

function Sr({
  ownerDocument: e
}, t) {
  let n = Er(t);
  De(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && ye(n())
  }, [t]);
  let r = i.useRef(!1);
  i.useEffect(() => (r.current = !1, () => {
    r.current = !0, Ie(() => {
      r.current && ye(n())
    })
  }), [])
}

function Rr({
  ownerDocument: e,
  container: t,
  initialFocus: n
}, r) {
  let l = i.useRef(null),
    a = He();
  return De(() => {
    if (!r) return;
    let o = t.current;
    o && Ie(() => {
      if (!a.current) return;
      let u = e == null ? void 0 : e.activeElement;
      if (n != null && n.current) {
        if ((n == null ? void 0 : n.current) === u) {
          l.current = u;
          return
        }
      } else if (o.contains(u)) {
        l.current = u;
        return
      }
      n != null && n.current ? ye(n.current) : te(o, q.First) === de.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.current = e == null ? void 0 : e.activeElement
    })
  }, [r]), l
}

function Pr({
  ownerDocument: e,
  container: t,
  containers: n,
  previousActiveElement: r
}, l) {
  let a = He();
  wt(e == null ? void 0 : e.defaultView, "focus", o => {
    if (!l || !a.current) return;
    let u = an(n);
    t.current instanceof HTMLElement && u.add(t.current);
    let s = r.current;
    if (!s) return;
    let c = o.target;
    c && c instanceof HTMLElement ? sn(u, c) ? (r.current = c, ye(c)) : (o.preventDefault(), o.stopPropagation(), ye(s)) : ye(r.current)
  }, !0)
}

function sn(e, t) {
  for (let n of e)
    if (n.contains(t)) return !0;
  return !1
}
let cn = i.createContext(!1);

function $r() {
  return i.useContext(cn)
}

function mt(e) {
  return P.createElement(cn.Provider, {
    value: e.force
  }, e.children)
}

function wr(e) {
  let t = $r(),
    n = i.useContext(dn),
    r = Ee(e),
    [l, a] = i.useState(() => {
      if (!t && n !== null || be.isServer) return null;
      let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (o) return o;
      if (r === null) return null;
      let u = r.createElement("div");
      return u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u)
    });
  return i.useEffect(() => {
    l !== null && (r != null && r.body.contains(l) || r == null || r.body.appendChild(l))
  }, [l, r]), i.useEffect(() => {
    t || n !== null && a(n.current)
  }, [n, a, t]), l
}
let Tr = i.Fragment;

function Ir(e, t) {
  let n = e,
    r = i.useRef(null),
    l = U(ht(p => {
      r.current = p
    }), t),
    a = Ee(r),
    o = wr(r),
    [u] = i.useState(() => {
      var p;
      return be.isServer ? null : (p = a == null ? void 0 : a.createElement("div")) != null ? p : null
    }),
    s = Oe(),
    c = i.useRef(!1);
  return K(() => {
    if (c.current = !1, !(!o || !u)) return o.contains(u) || (u.setAttribute("data-headlessui-portal", ""), o.appendChild(u)), () => {
      c.current = !0, Ie(() => {
        var p;
        c.current && (!o || !u || (u instanceof Node && o.contains(u) && o.removeChild(u), o.childNodes.length <= 0 && ((p = o.parentElement) == null || p.removeChild(o))))
      })
    }
  }, [o, u]), s ? !o || !u ? null : Tn.createPortal(B({
    ourProps: {
      ref: l
    },
    theirProps: n,
    defaultTag: Tr,
    name: "Portal"
  }), u) : null
}
let Or = i.Fragment,
  dn = i.createContext(null);

function Cr(e, t) {
  let {
    target: n,
    ...r
  } = e, l = {
    ref: U(t)
  };
  return P.createElement(dn.Provider, {
    value: n
  }, B({
    ourProps: l,
    theirProps: r,
    defaultTag: Or,
    name: "Popover.Group"
  }))
}
let kr = _(Ir),
  Lr = _(Cr),
  We = Object.assign(kr, {
    Group: Lr
  }),
  pn = i.createContext(null);

function fn() {
  let e = i.useContext(pn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, fn), t
  }
  return e
}

function ze() {
  let [e, t] = i.useState([]);
  return [e.length > 0 ? e.join(" ") : void 0, i.useMemo(() => function (n) {
    let r = y(a => (t(o => [...o, a]), () => t(o => {
      let u = o.slice(),
        s = u.indexOf(a);
      return s !== -1 && u.splice(s, 1), u
    }))),
      l = i.useMemo(() => ({
        register: r,
        slot: n.slot,
        name: n.name,
        props: n.props
      }), [r, n.slot, n.name, n.props]);
    return P.createElement(pn.Provider, {
      value: l
    }, n.children)
  }, [t])]
}
let Dr = "p";

function Fr(e, t) {
  let n = W(),
    {
      id: r = `headlessui-description-${n}`,
      ...l
    } = e,
    a = fn(),
    o = U(t);
  K(() => a.register(r), [r, a.register]);
  let u = {
    ref: o,
    ...a.props,
    id: r
  };
  return B({
    ourProps: u,
    theirProps: l,
    slot: a.slot || {},
    defaultTag: Dr,
    name: a.name || "Description"
  })
}
let Mr = _(Fr),
  Tt = Object.assign(Mr, {}),
  It = i.createContext(() => { });
It.displayName = "StackContext";
var bt = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(bt || {});

function Ar() {
  return i.useContext(It)
}

function Nr({
  children: e,
  onUpdate: t,
  type: n,
  element: r,
  enabled: l
}) {
  let a = Ar(),
    o = y((...u) => {
      t == null || t(...u), a(...u)
    });
  return K(() => {
    let u = l === void 0 || l === !0;
    return u && o(0, n, r), () => {
      u && o(1, n, r)
    }
  }, [o, n, r, l]), P.createElement(It.Provider, {
    value: o
  }, e)
}

function Br(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const _r = typeof Object.is == "function" ? Object.is : Br,
  {
    useState: Hr,
    useEffect: Ur,
    useLayoutEffect: jr,
    useDebugValue: Gr
  } = Ve;

function Kr(e, t, n) {
  const r = t(),
    [{
      inst: l
    }, a] = Hr({
      inst: {
        value: r,
        getSnapshot: t
      }
    });
  return jr(() => {
    l.value = r, l.getSnapshot = t, it(l) && a({
      inst: l
    })
  }, [e, r, t]), Ur(() => (it(l) && a({
    inst: l
  }), e(() => {
    it(l) && a({
      inst: l
    })
  })), [e]), Gr(r), r
}

function it(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !_r(n, r)
  } catch {
    return !0
  }
}

function Vr(e, t, n) {
  return t()
}
const Wr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  qr = !Wr,
  Qr = qr ? Vr : Kr,
  Yr = "useSyncExternalStore" in Ve ? (e => e.useSyncExternalStore)(Ve) : Qr;

function zr(e) {
  return Yr(e.subscribe, e.getSnapshot, e.getSnapshot)
}

function Xr(e, t) {
  let n = e(),
    r = new Set;
  return {
    getSnapshot() {
      return n
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l)
    },
    dispatch(l, ...a) {
      let o = t[l].call(n, ...a);
      o && (n = o, r.forEach(u => u()))
    }
  }
}

function Jr() {
  let e;
  return {
    before({
      doc: t
    }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
    },
    after({
      doc: t,
      d: n
    }) {
      let r = t.documentElement,
        l = r.clientWidth - r.offsetWidth,
        a = e - l;
      n.style(r, "paddingRight", `${a}px`)
    }
  }
}

function Zr() {
  if (!ln()) return {};
  let e;
  return {
    before() {
      e = window.pageYOffset
    },
    after({
      doc: t,
      d: n,
      meta: r
    }) {
      function l(o) {
        return r.containers.flatMap(u => u()).some(u => u.contains(o))
      }
      n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
      let a = null;
      n.addEventListener(t, "click", o => {
        if (o.target instanceof HTMLElement) try {
          let u = o.target.closest("a");
          if (!u) return;
          let {
            hash: s
          } = new URL(u.href), c = t.querySelector(s);
          c && !l(c) && (a = c)
        } catch { }
      }, !0), n.addEventListener(t, "touchmove", o => {
        o.target instanceof HTMLElement && !l(o.target) && o.preventDefault()
      }, {
        passive: !1
      }), n.add(() => {
        window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({
          block: "nearest"
        }), a = null)
      })
    }
  }
}

function eo() {
  return {
    before({
      doc: e,
      d: t
    }) {
      t.style(e.documentElement, "overflow", "hidden")
    }
  }
}

function to(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t
}
let Re = Xr(() => new Map, {
  PUSH(e, t) {
    var n;
    let r = (n = this.get(e)) != null ? n : {
      doc: e,
      count: 0,
      d: ae(),
      meta: new Set
    };
    return r.count++, r.meta.add(t), this.set(e, r), this
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this
  },
  SCROLL_PREVENT({
    doc: e,
    d: t,
    meta: n
  }) {
    let r = {
      doc: e,
      d: t,
      meta: to(n)
    },
      l = [Zr(), Jr(), eo()];
    l.forEach(({
      before: a
    }) => a == null ? void 0 : a(r)), l.forEach(({
      after: a
    }) => a == null ? void 0 : a(r))
  },
  SCROLL_ALLOW({
    d: e
  }) {
    e.dispose()
  },
  TEARDOWN({
    doc: e
  }) {
    this.delete(e)
  }
});
Re.subscribe(() => {
  let e = Re.getSnapshot(),
    t = new Map;
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    (l && !r || !l && r) && Re.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Re.dispatch("TEARDOWN", n)
  }
});

function no(e, t, n) {
  let r = zr(Re),
    l = e ? r.get(e) : void 0,
    a = l ? l.count > 0 : !1;
  return K(() => {
    if (!(!e || !t)) return Re.dispatch("PUSH", e, n), () => Re.dispatch("POP", e, n)
  }, [t, e]), a
}
let ut = new Map,
  Le = new Map;

function zt(e, t = !0) {
  K(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;

    function l() {
      var o;
      if (!r) return;
      let u = (o = Le.get(r)) != null ? o : 1;
      if (u === 1 ? Le.delete(r) : Le.set(r, u - 1), u !== 1) return;
      let s = ut.get(r);
      s && (s["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", s["aria-hidden"]), r.inert = s.inert, ut.delete(r))
    }
    let a = (n = Le.get(r)) != null ? n : 0;
    return Le.set(r, a + 1), a !== 0 || (ut.set(r, {
      "aria-hidden": r.getAttribute("aria-hidden"),
      inert: r.inert
    }), r.setAttribute("aria-hidden", "true"), r.inert = !0), l
  }, [e, t])
}
var ro = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ro || {}),
  oo = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(oo || {});
let lo = {
  [0](e, t) {
    return e.titleId === t.id ? e : {
      ...e,
      titleId: t.id
    }
  }
},
  qe = i.createContext(null);
qe.displayName = "DialogContext";

function Ue(e) {
  let t = i.useContext(qe);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ue), n
  }
  return t
}

function ao(e, t, n = () => [document.body]) {
  no(e, t, r => {
    var l;
    return {
      containers: [...(l = r.containers) != null ? l : [], n]
    }
  })
}

function io(e, t) {
  return N(t.type, lo, e, t)
}
let uo = "div",
  so = oe.RenderStrategy | oe.Static;

function co(e, t) {
  let n = W(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: a,
      initialFocus: o,
      __demoMode: u = !1,
      ...s
    } = e,
    [c, p] = i.useState(0),
    b = he();
  l === void 0 && b !== null && (l = (b & V.Open) === V.Open);
  let d = i.useRef(null),
    g = U(d, t),
    v = i.useRef(null),
    f = Ee(d),
    h = e.hasOwnProperty("open") || b !== null,
    m = e.hasOwnProperty("onClose");
  if (!h && !m) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!h) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!m) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof l != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);
  if (typeof a != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);
  let x = l ? 0 : 1,
    [F, D] = i.useReducer(io, {
      titleId: null,
      descriptionId: null,
      panelRef: i.createRef()
    }),
    O = y(() => a(!1)),
    M = y(I => D({
      type: 0,
      id: I
    })),
    $ = Oe() ? u ? !1 : x === 0 : !1,
    S = c > 1,
    E = i.useContext(qe) !== null,
    C = S ? "parent" : "leaf",
    k = b !== null ? (b & V.Closing) === V.Closing : !1,
    w = (() => E || k ? !1 : $)(),
    L = i.useCallback(() => {
      var I, H;
      return (H = Array.from((I = f == null ? void 0 : f.querySelectorAll("body > *")) != null ? I : []).find(Y => Y.id === "headlessui-portal-root" ? !1 : Y.contains(v.current) && Y instanceof HTMLElement)) != null ? H : null
    }, [v]);
  zt(L, w);
  let j = (() => S ? !0 : $)(),
    z = i.useCallback(() => {
      var I, H;
      return (H = Array.from((I = f == null ? void 0 : f.querySelectorAll("[data-headlessui-portal]")) != null ? I : []).find(Y => Y.contains(v.current) && Y instanceof HTMLElement)) != null ? H : null
    }, [v]);
  zt(z, j);
  let ee = y(() => {
    var I, H;
    return [...Array.from((I = f == null ? void 0 : f.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? I : []).filter(Y => !(Y === document.body || Y === document.head || !(Y instanceof HTMLElement) || Y.contains(v.current) || F.panelRef.current && Y.contains(F.panelRef.current))), (H = F.panelRef.current) != null ? H : d.current]
  }),
    X = (() => !(!$ || S))();
  Be(() => ee(), O, X);
  let le = (() => !(S || x !== 0))();
  wt(f == null ? void 0 : f.defaultView, "keydown", I => {
    le && (I.defaultPrevented || I.key === R.Escape && (I.preventDefault(), I.stopPropagation(), O()))
  });
  let A = (() => !(k || x !== 0 || E))();
  ao(f, A, ee), i.useEffect(() => {
    if (x !== 0 || !d.current) return;
    let I = new ResizeObserver(H => {
      for (let Y of H) {
        let pe = Y.target.getBoundingClientRect();
        pe.x === 0 && pe.y === 0 && pe.width === 0 && pe.height === 0 && O()
      }
    });
    return I.observe(d.current), () => I.disconnect()
  }, [x, d, O]);
  let [J, Q] = ze(), ne = i.useMemo(() => [{
    dialogState: x,
    close: O,
    setTitleId: M
  }, F], [x, F, O, M]), Z = i.useMemo(() => ({
    open: x === 0
  }), [x]), T = {
    ref: g,
    id: r,
    role: "dialog",
    "aria-modal": x === 0 ? !0 : void 0,
    "aria-labelledby": F.titleId,
    "aria-describedby": J
  };
  return P.createElement(Nr, {
    type: "Dialog",
    enabled: x === 0,
    element: d,
    onUpdate: y((I, H) => {
      H === "Dialog" && N(I, {
        [bt.Add]: () => p(Y => Y + 1),
        [bt.Remove]: () => p(Y => Y - 1)
      })
    })
  }, P.createElement(mt, {
    force: !0
  }, P.createElement(We, null, P.createElement(qe.Provider, {
    value: ne
  }, P.createElement(We.Group, {
    target: d
  }, P.createElement(mt, {
    force: !1
  }, P.createElement(Q, {
    slot: Z,
    name: "Dialog.Description"
  }, P.createElement($e, {
    initialFocus: o,
    containers: ee,
    features: $ ? N(C, {
      parent: $e.features.RestoreFocus,
      leaf: $e.features.All & ~$e.features.FocusLock
    }) : $e.features.None
  }, B({
    ourProps: T,
    theirProps: s,
    slot: Z,
    defaultTag: uo,
    features: so,
    visible: x === 0,
    name: "Dialog"
  })))))))), P.createElement(ce, {
    features: se.Hidden,
    ref: v
  }))
}
let po = "div";

function fo(e, t) {
  let n = W(),
    {
      id: r = `headlessui-dialog-overlay-${n}`,
      ...l
    } = e,
    [{
      dialogState: a,
      close: o
    }] = Ue("Dialog.Overlay"),
    u = U(t),
    s = y(p => {
      if (p.target === p.currentTarget) {
        if (ve(p.currentTarget)) return p.preventDefault();
        p.preventDefault(), p.stopPropagation(), o()
      }
    }),
    c = i.useMemo(() => ({
      open: a === 0
    }), [a]);
  return B({
    ourProps: {
      ref: u,
      id: r,
      "aria-hidden": !0,
      onClick: s
    },
    theirProps: l,
    slot: c,
    defaultTag: po,
    name: "Dialog.Overlay"
  })
}
let vo = "div";

function mo(e, t) {
  let n = W(),
    {
      id: r = `headlessui-dialog-backdrop-${n}`,
      ...l
    } = e,
    [{
      dialogState: a
    }, o] = Ue("Dialog.Backdrop"),
    u = U(t);
  i.useEffect(() => {
    if (o.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
  }, [o.panelRef]);
  let s = i.useMemo(() => ({
    open: a === 0
  }), [a]);
  return P.createElement(mt, {
    force: !0
  }, P.createElement(We, null, B({
    ourProps: {
      ref: u,
      id: r,
      "aria-hidden": !0
    },
    theirProps: l,
    slot: s,
    defaultTag: vo,
    name: "Dialog.Backdrop"
  })))
}
let bo = "div";

function go(e, t) {
  let n = W(),
    {
      id: r = `headlessui-dialog-panel-${n}`,
      ...l
    } = e,
    [{
      dialogState: a
    }, o] = Ue("Dialog.Panel"),
    u = U(t, o.panelRef),
    s = i.useMemo(() => ({
      open: a === 0
    }), [a]),
    c = y(p => {
      p.stopPropagation()
    });
  return B({
    ourProps: {
      ref: u,
      id: r,
      onClick: c
    },
    theirProps: l,
    slot: s,
    defaultTag: bo,
    name: "Dialog.Panel"
  })
}
let ho = "h2";

function xo(e, t) {
  let n = W(),
    {
      id: r = `headlessui-dialog-title-${n}`,
      ...l
    } = e,
    [{
      dialogState: a,
      setTitleId: o
    }] = Ue("Dialog.Title"),
    u = U(t);
  i.useEffect(() => (o(r), () => o(null)), [r, o]);
  let s = i.useMemo(() => ({
    open: a === 0
  }), [a]);
  return B({
    ourProps: {
      ref: u,
      id: r
    },
    theirProps: l,
    slot: s,
    defaultTag: ho,
    name: "Dialog.Title"
  })
}
let yo = _(co),
  Eo = _(mo),
  So = _(go),
  Ro = _(fo),
  Po = _(xo),
  $o = Object.assign(yo, {
    Backdrop: Eo,
    Panel: So,
    Overlay: Ro,
    Title: Po,
    Description: Tt
  });
var Xt;
let wo = (Xt = P.startTransition) != null ? Xt : function (e) {
  e()
};
var To = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(To || {}),
  Io = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(Io || {});
let Oo = {
  [0]: e => ({
    ...e,
    disclosureState: N(e.disclosureState, {
      [0]: 1,
      [1]: 0
    })
  }),
  [1]: e => e.disclosureState === 1 ? e : {
    ...e,
    disclosureState: 1
  },
  [4](e) {
    return e.linkedPanel === !0 ? e : {
      ...e,
      linkedPanel: !0
    }
  },
  [5](e) {
    return e.linkedPanel === !1 ? e : {
      ...e,
      linkedPanel: !1
    }
  },
  [2](e, t) {
    return e.buttonId === t.buttonId ? e : {
      ...e,
      buttonId: t.buttonId
    }
  },
  [3](e, t) {
    return e.panelId === t.panelId ? e : {
      ...e,
      panelId: t.panelId
    }
  }
},
  Ot = i.createContext(null);
Ot.displayName = "DisclosureContext";

function Ct(e) {
  let t = i.useContext(Ot);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ct), n
  }
  return t
}
let kt = i.createContext(null);
kt.displayName = "DisclosureAPIContext";

function vn(e) {
  let t = i.useContext(kt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, vn), n
  }
  return t
}
let Lt = i.createContext(null);
Lt.displayName = "DisclosurePanelContext";

function Co() {
  return i.useContext(Lt)
}

function ko(e, t) {
  return N(t.type, Oo, e, t)
}
let Lo = i.Fragment;

function Do(e, t) {
  let {
    defaultOpen: n = !1,
    ...r
  } = e, l = i.useRef(null), a = U(t, ht(h => {
    l.current = h
  }, e.as === void 0 || e.as === i.Fragment)), o = i.useRef(null), u = i.useRef(null), s = i.useReducer(ko, {
    disclosureState: n ? 0 : 1,
    linkedPanel: !1,
    buttonRef: u,
    panelRef: o,
    buttonId: null,
    panelId: null
  }), [{
    disclosureState: c,
    buttonId: p
  }, b] = s, d = y(h => {
    b({
      type: 1
    });
    let m = ge(l);
    if (!m || !p) return;
    let x = (() => h ? h instanceof HTMLElement ? h : h.current instanceof HTMLElement ? h.current : m.getElementById(p) : m.getElementById(p))();
    x == null || x.focus()
  }), g = i.useMemo(() => ({
    close: d
  }), [d]), v = i.useMemo(() => ({
    open: c === 0,
    close: d
  }), [c, d]), f = {
    ref: a
  };
  return P.createElement(Ot.Provider, {
    value: s
  }, P.createElement(kt.Provider, {
    value: g
  }, P.createElement(Ce, {
    value: N(c, {
      [0]: V.Open,
      [1]: V.Closed
    })
  }, B({
    ourProps: f,
    theirProps: r,
    slot: v,
    defaultTag: Lo,
    name: "Disclosure"
  }))))
}
let Fo = "button";

function Mo(e, t) {
  let n = W(),
    {
      id: r = `headlessui-disclosure-button-${n}`,
      ...l
    } = e,
    [a, o] = Ct("Disclosure.Button"),
    u = Co(),
    s = u === null ? !1 : u === a.panelId,
    c = i.useRef(null),
    p = U(c, t, s ? null : a.buttonRef);
  i.useEffect(() => {
    if (!s) return o({
      type: 2,
      buttonId: r
    }), () => {
      o({
        type: 2,
        buttonId: null
      })
    }
  }, [r, o, s]);
  let b = y(m => {
    var x;
    if (s) {
      if (a.disclosureState === 1) return;
      switch (m.key) {
        case R.Space:
        case R.Enter:
          m.preventDefault(), m.stopPropagation(), o({
            type: 0
          }), (x = a.buttonRef.current) == null || x.focus();
          break
      }
    } else switch (m.key) {
      case R.Space:
      case R.Enter:
        m.preventDefault(), m.stopPropagation(), o({
          type: 0
        });
        break
    }
  }),
    d = y(m => {
      switch (m.key) {
        case R.Space:
          m.preventDefault();
          break
      }
    }),
    g = y(m => {
      var x;
      ve(m.currentTarget) || e.disabled || (s ? (o({
        type: 0
      }), (x = a.buttonRef.current) == null || x.focus()) : o({
        type: 0
      }))
    }),
    v = i.useMemo(() => ({
      open: a.disclosureState === 0
    }), [a]),
    f = Pe(e, c),
    h = s ? {
      ref: p,
      type: f,
      onKeyDown: b,
      onClick: g
    } : {
      ref: p,
      id: r,
      type: f,
      "aria-expanded": e.disabled ? void 0 : a.disclosureState === 0,
      "aria-controls": a.linkedPanel ? a.panelId : void 0,
      onKeyDown: b,
      onKeyUp: d,
      onClick: g
    };
  return B({
    ourProps: h,
    theirProps: l,
    slot: v,
    defaultTag: Fo,
    name: "Disclosure.Button"
  })
}
let Ao = "div",
  No = oe.RenderStrategy | oe.Static;

function Bo(e, t) {
  let n = W(),
    {
      id: r = `headlessui-disclosure-panel-${n}`,
      ...l
    } = e,
    [a, o] = Ct("Disclosure.Panel"),
    {
      close: u
    } = vn("Disclosure.Panel"),
    s = U(t, a.panelRef, g => {
      wo(() => o({
        type: g ? 4 : 5
      }))
    });
  i.useEffect(() => (o({
    type: 3,
    panelId: r
  }), () => {
    o({
      type: 3,
      panelId: null
    })
  }), [r, o]);
  let c = he(),
    p = (() => c !== null ? (c & V.Open) === V.Open : a.disclosureState === 0)(),
    b = i.useMemo(() => ({
      open: a.disclosureState === 0,
      close: u
    }), [a, u]),
    d = {
      ref: s,
      id: r
    };
  return P.createElement(Lt.Provider, {
    value: a.panelId
  }, B({
    ourProps: d,
    theirProps: l,
    slot: b,
    defaultTag: Ao,
    features: No,
    visible: p,
    name: "Disclosure.Panel"
  }))
}
let _o = _(Do),
  Ho = _(Mo),
  Uo = _(Bo),
  jo = Object.assign(_o, {
    Button: Ho,
    Panel: Uo
  });
var Go = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Go || {}),
  Ko = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Ko || {}),
  Vo = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Vo || {}),
  Wo = (e => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e[e.RegisterLabel = 7] = "RegisterLabel", e))(Wo || {});

function st(e, t = n => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    r = fe(t(e.options.slice()), a => a.dataRef.current.domRef.current),
    l = n ? r.indexOf(n) : null;
  return l === -1 && (l = null), {
    options: r,
    activeOptionIndex: l
  }
}
let qo = {
  [1](e) {
    return e.dataRef.current.disabled || e.listboxState === 1 ? e : {
      ...e,
      activeOptionIndex: null,
      listboxState: 1
    }
  },
  [0](e) {
    if (e.dataRef.current.disabled || e.listboxState === 0) return e;
    let t = e.activeOptionIndex,
      {
        isSelected: n
      } = e.dataRef.current,
      r = e.options.findIndex(l => n(l.dataRef.current.value));
    return r !== -1 && (t = r), {
      ...e,
      listboxState: 0,
      activeOptionIndex: t
    }
  },
  [2](e, t) {
    var n;
    if (e.dataRef.current.disabled || e.listboxState === 1) return e;
    let r = st(e),
      l = yt(t, {
        resolveItems: () => r.options,
        resolveActiveIndex: () => r.activeOptionIndex,
        resolveId: a => a.id,
        resolveDisabled: a => a.dataRef.current.disabled
      });
    return {
      ...e,
      ...r,
      searchQuery: "",
      activeOptionIndex: l,
      activationTrigger: (n = t.trigger) != null ? n : 1
    }
  },
  [3]: (e, t) => {
    if (e.dataRef.current.disabled || e.listboxState === 1) return e;
    let n = e.searchQuery !== "" ? 0 : 1,
      r = e.searchQuery + t.value.toLowerCase(),
      l = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find(o => {
        var u;
        return !o.dataRef.current.disabled && ((u = o.dataRef.current.textValue) == null ? void 0 : u.startsWith(r))
      }),
      a = l ? e.options.indexOf(l) : -1;
    return a === -1 || a === e.activeOptionIndex ? {
      ...e,
      searchQuery: r
    } : {
      ...e,
      searchQuery: r,
      activeOptionIndex: a,
      activationTrigger: 1
    }
  },
  [4](e) {
    return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : {
      ...e,
      searchQuery: ""
    }
  },
  [5]: (e, t) => {
    let n = {
      id: t.id,
      dataRef: t.dataRef
    },
      r = st(e, l => [...l, n]);
    return e.activeOptionIndex === null && e.dataRef.current.isSelected(t.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(n)), {
      ...e,
      ...r
    }
  },
  [6]: (e, t) => {
    let n = st(e, r => {
      let l = r.findIndex(a => a.id === t.id);
      return l !== -1 && r.splice(l, 1), r
    });
    return {
      ...e,
      ...n,
      activationTrigger: 1
    }
  },
  [7]: (e, t) => ({
    ...e,
    labelId: t.id
  })
},
  Dt = i.createContext(null);
Dt.displayName = "ListboxActionsContext";

function je(e) {
  let t = i.useContext(Dt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, je), n
  }
  return t
}
let Ft = i.createContext(null);
Ft.displayName = "ListboxDataContext";

function Ge(e) {
  let t = i.useContext(Ft);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ge), n
  }
  return t
}

function Qo(e, t) {
  return N(t.type, qo, e, t)
}
let Yo = i.Fragment;

function zo(e, t) {
  let {
    value: n,
    defaultValue: r,
    form: l,
    name: a,
    onChange: o,
    by: u = (T, I) => T === I,
    disabled: s = !1,
    horizontal: c = !1,
    multiple: p = !1,
    ...b
  } = e;
  const d = c ? "horizontal" : "vertical";
  let g = U(t),
    [v = p ? [] : void 0, f] = Ye(n, o, r),
    [h, m] = i.useReducer(Qo, {
      dataRef: i.createRef(),
      listboxState: 1,
      options: [],
      searchQuery: "",
      labelId: null,
      activeOptionIndex: null,
      activationTrigger: 1
    }),
    x = i.useRef({
      static: !1,
      hold: !1
    }),
    F = i.useRef(null),
    D = i.useRef(null),
    O = i.useRef(null),
    M = y(typeof u == "string" ? (T, I) => {
      let H = u;
      return (T == null ? void 0 : T[H]) === (I == null ? void 0 : I[H])
    } : u),
    $ = i.useCallback(T => N(S.mode, {
      [1]: () => v.some(I => M(I, T)),
      [0]: () => M(v, T)
    }), [v]),
    S = i.useMemo(() => ({
      ...h,
      value: v,
      disabled: s,
      mode: p ? 1 : 0,
      orientation: d,
      compare: M,
      isSelected: $,
      optionsPropsRef: x,
      labelRef: F,
      buttonRef: D,
      optionsRef: O
    }), [v, s, p, h]);
  K(() => {
    h.dataRef.current = S
  }, [S]), Be([S.buttonRef, S.optionsRef], (T, I) => {
    var H;
    m({
      type: 1
    }), Ne(I, Ae.Loose) || (T.preventDefault(), (H = S.buttonRef.current) == null || H.focus())
  }, S.listboxState === 0);
  let E = i.useMemo(() => ({
    open: S.listboxState === 0,
    disabled: s,
    value: v
  }), [S, s, v]),
    C = y(T => {
      let I = S.options.find(H => H.id === T);
      I && X(I.dataRef.current.value)
    }),
    k = y(() => {
      if (S.activeOptionIndex !== null) {
        let {
          dataRef: T,
          id: I
        } = S.options[S.activeOptionIndex];
        X(T.current.value), m({
          type: 2,
          focus: G.Specific,
          id: I
        })
      }
    }),
    w = y(() => m({
      type: 0
    })),
    L = y(() => m({
      type: 1
    })),
    j = y((T, I, H) => T === G.Specific ? m({
      type: 2,
      focus: G.Specific,
      id: I,
      trigger: H
    }) : m({
      type: 2,
      focus: T,
      trigger: H
    })),
    z = y((T, I) => (m({
      type: 5,
      id: T,
      dataRef: I
    }), () => m({
      type: 6,
      id: T
    }))),
    ee = y(T => (m({
      type: 7,
      id: T
    }), () => m({
      type: 7,
      id: null
    }))),
    X = y(T => N(S.mode, {
      [0]() {
        return f == null ? void 0 : f(T)
      },
      [1]() {
        let I = S.value.slice(),
          H = I.findIndex(Y => M(Y, T));
        return H === -1 ? I.push(T) : I.splice(H, 1), f == null ? void 0 : f(I)
      }
    })),
    le = y(T => m({
      type: 3,
      value: T
    })),
    A = y(() => m({
      type: 4
    })),
    J = i.useMemo(() => ({
      onChange: X,
      registerOption: z,
      registerLabel: ee,
      goToOption: j,
      closeListbox: L,
      openListbox: w,
      selectActiveOption: k,
      selectOption: C,
      search: le,
      clearSearch: A
    }), []),
    Q = {
      ref: g
    },
    ne = i.useRef(null),
    Z = ie();
  return i.useEffect(() => {
    ne.current && r !== void 0 && Z.addEventListener(ne.current, "reset", () => {
      X(r)
    })
  }, [ne, X]), P.createElement(Dt.Provider, {
    value: J
  }, P.createElement(Ft.Provider, {
    value: S
  }, P.createElement(Ce, {
    value: N(S.listboxState, {
      [0]: V.Open,
      [1]: V.Closed
    })
  }, a != null && v != null && Qe({
    [a]: v
  }).map(([T, I], H) => P.createElement(ce, {
    features: se.Hidden,
    ref: H === 0 ? Y => {
      var pe;
      ne.current = (pe = Y == null ? void 0 : Y.closest("form")) != null ? pe : null
    } : void 0,
    ...we({
      key: T,
      as: "input",
      type: "hidden",
      hidden: !0,
      readOnly: !0,
      form: l,
      name: T,
      value: I
    })
  })), B({
    ourProps: Q,
    theirProps: b,
    slot: E,
    defaultTag: Yo,
    name: "Listbox"
  }))))
}
let Xo = "button";

function Jo(e, t) {
  var n;
  let r = W(),
    {
      id: l = `headlessui-listbox-button-${r}`,
      ...a
    } = e,
    o = Ge("Listbox.Button"),
    u = je("Listbox.Button"),
    s = U(o.buttonRef, t),
    c = ie(),
    p = y(h => {
      switch (h.key) {
        case R.Space:
        case R.Enter:
        case R.ArrowDown:
          h.preventDefault(), u.openListbox(), c.nextFrame(() => {
            o.value || u.goToOption(G.First)
          });
          break;
        case R.ArrowUp:
          h.preventDefault(), u.openListbox(), c.nextFrame(() => {
            o.value || u.goToOption(G.Last)
          });
          break
      }
    }),
    b = y(h => {
      switch (h.key) {
        case R.Space:
          h.preventDefault();
          break
      }
    }),
    d = y(h => {
      if (ve(h.currentTarget)) return h.preventDefault();
      o.listboxState === 0 ? (u.closeListbox(), c.nextFrame(() => {
        var m;
        return (m = o.buttonRef.current) == null ? void 0 : m.focus({
          preventScroll: !0
        })
      })) : (h.preventDefault(), u.openListbox())
    }),
    g = Fe(() => {
      if (o.labelId) return [o.labelId, l].join(" ")
    }, [o.labelId, l]),
    v = i.useMemo(() => ({
      open: o.listboxState === 0,
      disabled: o.disabled,
      value: o.value
    }), [o]),
    f = {
      ref: s,
      id: l,
      type: Pe(e, o.buttonRef),
      "aria-haspopup": "listbox",
      "aria-controls": (n = o.optionsRef.current) == null ? void 0 : n.id,
      "aria-expanded": o.disabled ? void 0 : o.listboxState === 0,
      "aria-labelledby": g,
      disabled: o.disabled,
      onKeyDown: p,
      onKeyUp: b,
      onClick: d
    };
  return B({
    ourProps: f,
    theirProps: a,
    slot: v,
    defaultTag: Xo,
    name: "Listbox.Button"
  })
}
let Zo = "label";

function el(e, t) {
  let n = W(),
    {
      id: r = `headlessui-listbox-label-${n}`,
      ...l
    } = e,
    a = Ge("Listbox.Label"),
    o = je("Listbox.Label"),
    u = U(a.labelRef, t);
  K(() => o.registerLabel(r), [r]);
  let s = y(() => {
    var p;
    return (p = a.buttonRef.current) == null ? void 0 : p.focus({
      preventScroll: !0
    })
  }),
    c = i.useMemo(() => ({
      open: a.listboxState === 0,
      disabled: a.disabled
    }), [a]);
  return B({
    ourProps: {
      ref: u,
      id: r,
      onClick: s
    },
    theirProps: l,
    slot: c,
    defaultTag: Zo,
    name: "Listbox.Label"
  })
}
let tl = "ul",
  nl = oe.RenderStrategy | oe.Static;

function rl(e, t) {
  var n;
  let r = W(),
    {
      id: l = `headlessui-listbox-options-${r}`,
      ...a
    } = e,
    o = Ge("Listbox.Options"),
    u = je("Listbox.Options"),
    s = U(o.optionsRef, t),
    c = ie(),
    p = ie(),
    b = he(),
    d = (() => b !== null ? (b & V.Open) === V.Open : o.listboxState === 0)();
  i.useEffect(() => {
    var m;
    let x = o.optionsRef.current;
    x && o.listboxState === 0 && x !== ((m = ge(x)) == null ? void 0 : m.activeElement) && x.focus({
      preventScroll: !0
    })
  }, [o.listboxState, o.optionsRef]);
  let g = y(m => {
    switch (p.dispose(), m.key) {
      case R.Space:
        if (o.searchQuery !== "") return m.preventDefault(), m.stopPropagation(), u.search(m.key);
      case R.Enter:
        if (m.preventDefault(), m.stopPropagation(), o.activeOptionIndex !== null) {
          let {
            dataRef: x
          } = o.options[o.activeOptionIndex];
          u.onChange(x.current.value)
        }
        o.mode === 0 && (u.closeListbox(), ae().nextFrame(() => {
          var x;
          return (x = o.buttonRef.current) == null ? void 0 : x.focus({
            preventScroll: !0
          })
        }));
        break;
      case N(o.orientation, {
        vertical: R.ArrowDown,
        horizontal: R.ArrowRight
      }):
        return m.preventDefault(), m.stopPropagation(), u.goToOption(G.Next);
      case N(o.orientation, {
        vertical: R.ArrowUp,
        horizontal: R.ArrowLeft
      }):
        return m.preventDefault(), m.stopPropagation(), u.goToOption(G.Previous);
      case R.Home:
      case R.PageUp:
        return m.preventDefault(), m.stopPropagation(), u.goToOption(G.First);
      case R.End:
      case R.PageDown:
        return m.preventDefault(), m.stopPropagation(), u.goToOption(G.Last);
      case R.Escape:
        return m.preventDefault(), m.stopPropagation(), u.closeListbox(), c.nextFrame(() => {
          var x;
          return (x = o.buttonRef.current) == null ? void 0 : x.focus({
            preventScroll: !0
          })
        });
      case R.Tab:
        m.preventDefault(), m.stopPropagation();
        break;
      default:
        m.key.length === 1 && (u.search(m.key), p.setTimeout(() => u.clearSearch(), 350));
        break
    }
  }),
    v = Fe(() => {
      var m, x, F;
      return (F = (m = o.labelRef.current) == null ? void 0 : m.id) != null ? F : (x = o.buttonRef.current) == null ? void 0 : x.id
    }, [o.labelRef.current, o.buttonRef.current]),
    f = i.useMemo(() => ({
      open: o.listboxState === 0
    }), [o]),
    h = {
      "aria-activedescendant": o.activeOptionIndex === null || (n = o.options[o.activeOptionIndex]) == null ? void 0 : n.id,
      "aria-multiselectable": o.mode === 1 ? !0 : void 0,
      "aria-labelledby": v,
      "aria-orientation": o.orientation,
      id: l,
      onKeyDown: g,
      role: "listbox",
      tabIndex: 0,
      ref: s
    };
  return B({
    ourProps: h,
    theirProps: a,
    slot: f,
    defaultTag: tl,
    features: nl,
    visible: d,
    name: "Listbox.Options"
  })
}
let ol = "li";

function ll(e, t) {
  let n = W(),
    {
      id: r = `headlessui-listbox-option-${n}`,
      disabled: l = !1,
      value: a,
      ...o
    } = e,
    u = Ge("Listbox.Option"),
    s = je("Listbox.Option"),
    c = u.activeOptionIndex !== null ? u.options[u.activeOptionIndex].id === r : !1,
    p = u.isSelected(a),
    b = i.useRef(null),
    d = re({
      disabled: l,
      value: a,
      domRef: b,
      get textValue() {
        var O, M;
        return (M = (O = b.current) == null ? void 0 : O.textContent) == null ? void 0 : M.toLowerCase()
      }
    }),
    g = U(t, b);
  K(() => {
    if (u.listboxState !== 0 || !c || u.activationTrigger === 0) return;
    let O = ae();
    return O.requestAnimationFrame(() => {
      var M, $;
      ($ = (M = b.current) == null ? void 0 : M.scrollIntoView) == null || $.call(M, {
        block: "nearest"
      })
    }), O.dispose
  }, [b, c, u.listboxState, u.activationTrigger, u.activeOptionIndex]), K(() => s.registerOption(r, d), [d, r]);
  let v = y(O => {
    if (l) return O.preventDefault();
    s.onChange(a), u.mode === 0 && (s.closeListbox(), ae().nextFrame(() => {
      var M;
      return (M = u.buttonRef.current) == null ? void 0 : M.focus({
        preventScroll: !0
      })
    }))
  }),
    f = y(() => {
      if (l) return s.goToOption(G.Nothing);
      s.goToOption(G.Specific, r)
    }),
    h = St(),
    m = y(O => h.update(O)),
    x = y(O => {
      h.wasMoved(O) && (l || c || s.goToOption(G.Specific, r, 0))
    }),
    F = y(O => {
      h.wasMoved(O) && (l || c && s.goToOption(G.Nothing))
    }),
    D = i.useMemo(() => ({
      active: c,
      selected: p,
      disabled: l
    }), [c, p, l]);
  return B({
    ourProps: {
      id: r,
      ref: g,
      role: "option",
      tabIndex: l === !0 ? void 0 : -1,
      "aria-disabled": l === !0 ? !0 : void 0,
      "aria-selected": p,
      disabled: void 0,
      onClick: v,
      onFocus: f,
      onPointerEnter: m,
      onMouseEnter: m,
      onPointerMove: x,
      onMouseMove: x,
      onPointerLeave: F,
      onMouseLeave: F
    },
    theirProps: o,
    slot: D,
    defaultTag: ol,
    name: "Listbox.Option"
  })
}
let al = _(zo),
  il = _(Jo),
  ul = _(el),
  sl = _(rl),
  cl = _(ll),
  dl = Object.assign(al, {
    Button: il,
    Label: ul,
    Options: sl,
    Option: cl
  });
var pl = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(pl || {}),
  fl = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(fl || {}),
  vl = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(vl || {});

function ct(e, t = n => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    r = fe(t(e.items.slice()), a => a.dataRef.current.domRef.current),
    l = n ? r.indexOf(n) : null;
  return l === -1 && (l = null), {
    items: r,
    activeItemIndex: l
  }
}
let ml = {
  [1](e) {
    return e.menuState === 1 ? e : {
      ...e,
      activeItemIndex: null,
      menuState: 1
    }
  },
  [0](e) {
    return e.menuState === 0 ? e : {
      ...e,
      __demoMode: !1,
      menuState: 0
    }
  },
  [2]: (e, t) => {
    var n;
    let r = ct(e),
      l = yt(t, {
        resolveItems: () => r.items,
        resolveActiveIndex: () => r.activeItemIndex,
        resolveId: a => a.id,
        resolveDisabled: a => a.dataRef.current.disabled
      });
    return {
      ...e,
      ...r,
      searchQuery: "",
      activeItemIndex: l,
      activationTrigger: (n = t.trigger) != null ? n : 1
    }
  },
  [3]: (e, t) => {
    let n = e.searchQuery !== "" ? 0 : 1,
      r = e.searchQuery + t.value.toLowerCase(),
      l = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(o => {
        var u;
        return ((u = o.dataRef.current.textValue) == null ? void 0 : u.startsWith(r)) && !o.dataRef.current.disabled
      }),
      a = l ? e.items.indexOf(l) : -1;
    return a === -1 || a === e.activeItemIndex ? {
      ...e,
      searchQuery: r
    } : {
      ...e,
      searchQuery: r,
      activeItemIndex: a,
      activationTrigger: 1
    }
  },
  [4](e) {
    return e.searchQuery === "" ? e : {
      ...e,
      searchQuery: "",
      searchActiveItemIndex: null
    }
  },
  [5]: (e, t) => {
    let n = ct(e, r => [...r, {
      id: t.id,
      dataRef: t.dataRef
    }]);
    return {
      ...e,
      ...n
    }
  },
  [6]: (e, t) => {
    let n = ct(e, r => {
      let l = r.findIndex(a => a.id === t.id);
      return l !== -1 && r.splice(l, 1), r
    });
    return {
      ...e,
      ...n,
      activationTrigger: 1
    }
  }
},
  Mt = i.createContext(null);
Mt.displayName = "MenuContext";

function Xe(e) {
  let t = i.useContext(Mt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Xe), n
  }
  return t
}

function bl(e, t) {
  return N(t.type, ml, e, t)
}
let gl = i.Fragment;

function hl(e, t) {
  let {
    __demoMode: n = !1,
    ...r
  } = e, l = i.useReducer(bl, {
    __demoMode: n,
    menuState: n ? 0 : 1,
    buttonRef: i.createRef(),
    itemsRef: i.createRef(),
    items: [],
    searchQuery: "",
    activeItemIndex: null,
    activationTrigger: 1
  }), [{
    menuState: a,
    itemsRef: o,
    buttonRef: u
  }, s] = l, c = U(t);
  Be([u, o], (g, v) => {
    var f;
    s({
      type: 1
    }), Ne(v, Ae.Loose) || (g.preventDefault(), (f = u.current) == null || f.focus())
  }, a === 0);
  let p = y(() => {
    s({
      type: 1
    })
  }),
    b = i.useMemo(() => ({
      open: a === 0,
      close: p
    }), [a, p]),
    d = {
      ref: c
    };
  return P.createElement(Mt.Provider, {
    value: l
  }, P.createElement(Ce, {
    value: N(a, {
      [0]: V.Open,
      [1]: V.Closed
    })
  }, B({
    ourProps: d,
    theirProps: r,
    slot: b,
    defaultTag: gl,
    name: "Menu"
  })))
}
let xl = "button";

function yl(e, t) {
  var n;
  let r = W(),
    {
      id: l = `headlessui-menu-button-${r}`,
      ...a
    } = e,
    [o, u] = Xe("Menu.Button"),
    s = U(o.buttonRef, t),
    c = ie(),
    p = y(f => {
      switch (f.key) {
        case R.Space:
        case R.Enter:
        case R.ArrowDown:
          f.preventDefault(), f.stopPropagation(), u({
            type: 0
          }), c.nextFrame(() => u({
            type: 2,
            focus: G.First
          }));
          break;
        case R.ArrowUp:
          f.preventDefault(), f.stopPropagation(), u({
            type: 0
          }), c.nextFrame(() => u({
            type: 2,
            focus: G.Last
          }));
          break
      }
    }),
    b = y(f => {
      switch (f.key) {
        case R.Space:
          f.preventDefault();
          break
      }
    }),
    d = y(f => {
      if (ve(f.currentTarget)) return f.preventDefault();
      e.disabled || (o.menuState === 0 ? (u({
        type: 1
      }), c.nextFrame(() => {
        var h;
        return (h = o.buttonRef.current) == null ? void 0 : h.focus({
          preventScroll: !0
        })
      })) : (f.preventDefault(), u({
        type: 0
      })))
    }),
    g = i.useMemo(() => ({
      open: o.menuState === 0
    }), [o]),
    v = {
      ref: s,
      id: l,
      type: Pe(e, o.buttonRef),
      "aria-haspopup": "menu",
      "aria-controls": (n = o.itemsRef.current) == null ? void 0 : n.id,
      "aria-expanded": e.disabled ? void 0 : o.menuState === 0,
      onKeyDown: p,
      onKeyUp: b,
      onClick: d
    };
  return B({
    ourProps: v,
    theirProps: a,
    slot: g,
    defaultTag: xl,
    name: "Menu.Button"
  })
}
let El = "div",
  Sl = oe.RenderStrategy | oe.Static;

function Rl(e, t) {
  var n, r;
  let l = W(),
    {
      id: a = `headlessui-menu-items-${l}`,
      ...o
    } = e,
    [u, s] = Xe("Menu.Items"),
    c = U(u.itemsRef, t),
    p = Ee(u.itemsRef),
    b = ie(),
    d = he(),
    g = (() => d !== null ? (d & V.Open) === V.Open : u.menuState === 0)();
  i.useEffect(() => {
    let x = u.itemsRef.current;
    x && u.menuState === 0 && x !== (p == null ? void 0 : p.activeElement) && x.focus({
      preventScroll: !0
    })
  }, [u.menuState, u.itemsRef, p]), xt({
    container: u.itemsRef.current,
    enabled: u.menuState === 0,
    accept(x) {
      return x.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : x.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
    },
    walk(x) {
      x.setAttribute("role", "none")
    }
  });
  let v = y(x => {
    var F, D;
    switch (b.dispose(), x.key) {
      case R.Space:
        if (u.searchQuery !== "") return x.preventDefault(), x.stopPropagation(), s({
          type: 3,
          value: x.key
        });
      case R.Enter:
        if (x.preventDefault(), x.stopPropagation(), s({
          type: 1
        }), u.activeItemIndex !== null) {
          let {
            dataRef: O
          } = u.items[u.activeItemIndex];
          (D = (F = O.current) == null ? void 0 : F.domRef.current) == null || D.click()
        }
        Zt(u.buttonRef.current);
        break;
      case R.ArrowDown:
        return x.preventDefault(), x.stopPropagation(), s({
          type: 2,
          focus: G.Next
        });
      case R.ArrowUp:
        return x.preventDefault(), x.stopPropagation(), s({
          type: 2,
          focus: G.Previous
        });
      case R.Home:
      case R.PageUp:
        return x.preventDefault(), x.stopPropagation(), s({
          type: 2,
          focus: G.First
        });
      case R.End:
      case R.PageDown:
        return x.preventDefault(), x.stopPropagation(), s({
          type: 2,
          focus: G.Last
        });
      case R.Escape:
        x.preventDefault(), x.stopPropagation(), s({
          type: 1
        }), ae().nextFrame(() => {
          var O;
          return (O = u.buttonRef.current) == null ? void 0 : O.focus({
            preventScroll: !0
          })
        });
        break;
      case R.Tab:
        x.preventDefault(), x.stopPropagation(), s({
          type: 1
        }), ae().nextFrame(() => {
          An(u.buttonRef.current, x.shiftKey ? q.Previous : q.Next)
        });
        break;
      default:
        x.key.length === 1 && (s({
          type: 3,
          value: x.key
        }), b.setTimeout(() => s({
          type: 4
        }), 350));
        break
    }
  }),
    f = y(x => {
      switch (x.key) {
        case R.Space:
          x.preventDefault();
          break
      }
    }),
    h = i.useMemo(() => ({
      open: u.menuState === 0
    }), [u]),
    m = {
      "aria-activedescendant": u.activeItemIndex === null || (n = u.items[u.activeItemIndex]) == null ? void 0 : n.id,
      "aria-labelledby": (r = u.buttonRef.current) == null ? void 0 : r.id,
      id: a,
      onKeyDown: v,
      onKeyUp: f,
      role: "menu",
      tabIndex: 0,
      ref: c
    };
  return B({
    ourProps: m,
    theirProps: o,
    slot: h,
    defaultTag: El,
    features: Sl,
    visible: g,
    name: "Menu.Items"
  })
}
let Pl = i.Fragment;

function $l(e, t) {
  let n = W(),
    {
      id: r = `headlessui-menu-item-${n}`,
      disabled: l = !1,
      ...a
    } = e,
    [o, u] = Xe("Menu.Item"),
    s = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === r : !1,
    c = i.useRef(null),
    p = U(t, c);
  K(() => {
    if (o.__demoMode || o.menuState !== 0 || !s || o.activationTrigger === 0) return;
    let D = ae();
    return D.requestAnimationFrame(() => {
      var O, M;
      (M = (O = c.current) == null ? void 0 : O.scrollIntoView) == null || M.call(O, {
        block: "nearest"
      })
    }), D.dispose
  }, [o.__demoMode, c, s, o.menuState, o.activationTrigger, o.activeItemIndex]);
  let b = i.useRef({
    disabled: l,
    domRef: c
  });
  K(() => {
    b.current.disabled = l
  }, [b, l]), K(() => {
    var D, O;
    b.current.textValue = (O = (D = c.current) == null ? void 0 : D.textContent) == null ? void 0 : O.toLowerCase()
  }, [b, c]), K(() => (u({
    type: 5,
    id: r,
    dataRef: b
  }), () => u({
    type: 6,
    id: r
  })), [b, r]);
  let d = y(() => {
    u({
      type: 1
    })
  }),
    g = y(D => {
      if (l) return D.preventDefault();
      u({
        type: 1
      }), Zt(o.buttonRef.current)
    }),
    v = y(() => {
      if (l) return u({
        type: 2,
        focus: G.Nothing
      });
      u({
        type: 2,
        focus: G.Specific,
        id: r
      })
    }),
    f = St(),
    h = y(D => f.update(D)),
    m = y(D => {
      f.wasMoved(D) && (l || s || u({
        type: 2,
        focus: G.Specific,
        id: r,
        trigger: 0
      }))
    }),
    x = y(D => {
      f.wasMoved(D) && (l || s && u({
        type: 2,
        focus: G.Nothing
      }))
    }),
    F = i.useMemo(() => ({
      active: s,
      disabled: l,
      close: d
    }), [s, l, d]);
  return B({
    ourProps: {
      id: r,
      ref: p,
      role: "menuitem",
      tabIndex: l === !0 ? void 0 : -1,
      "aria-disabled": l === !0 ? !0 : void 0,
      disabled: void 0,
      onClick: g,
      onFocus: v,
      onPointerEnter: h,
      onMouseEnter: h,
      onPointerMove: m,
      onMouseMove: m,
      onPointerLeave: x,
      onMouseLeave: x
    },
    theirProps: a,
    slot: F,
    defaultTag: Pl,
    name: "Menu.Item"
  })
}
let wl = _(hl),
  Tl = _(yl),
  Il = _(Rl),
  Ol = _($l),
  Cl = Object.assign(wl, {
    Button: Tl,
    Items: Il,
    Item: Ol
  });
var kl = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(kl || {}),
  Ll = (e => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(Ll || {});
let Dl = {
  [0]: e => {
    let t = {
      ...e,
      popoverState: N(e.popoverState, {
        [0]: 1,
        [1]: 0
      })
    };
    return t.popoverState === 0 && (t.__demoMode = !1), t
  },
  [1](e) {
    return e.popoverState === 1 ? e : {
      ...e,
      popoverState: 1
    }
  },
  [2](e, t) {
    return e.button === t.button ? e : {
      ...e,
      button: t.button
    }
  },
  [3](e, t) {
    return e.buttonId === t.buttonId ? e : {
      ...e,
      buttonId: t.buttonId
    }
  },
  [4](e, t) {
    return e.panel === t.panel ? e : {
      ...e,
      panel: t.panel
    }
  },
  [5](e, t) {
    return e.panelId === t.panelId ? e : {
      ...e,
      panelId: t.panelId
    }
  }
},
  At = i.createContext(null);
At.displayName = "PopoverContext";

function Je(e) {
  let t = i.useContext(At);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Je), n
  }
  return t
}
let Nt = i.createContext(null);
Nt.displayName = "PopoverAPIContext";

function Bt(e) {
  let t = i.useContext(Nt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Bt), n
  }
  return t
}
let _t = i.createContext(null);
_t.displayName = "PopoverGroupContext";

function mn() {
  return i.useContext(_t)
}
let Ze = i.createContext(null);
Ze.displayName = "PopoverPanelContext";

function Fl() {
  return i.useContext(Ze)
}

function Ml(e, t) {
  return N(t.type, Dl, e, t)
}
let Al = "div";

function Nl(e, t) {
  var n;
  let {
    __demoMode: r = !1,
    ...l
  } = e, a = i.useRef(null), o = U(t, ht(L => {
    a.current = L
  })), u = i.useRef([]), s = i.useReducer(Ml, {
    __demoMode: r,
    popoverState: r ? 0 : 1,
    buttons: u,
    button: null,
    buttonId: null,
    panel: null,
    panelId: null,
    beforePanelSentinel: i.createRef(),
    afterPanelSentinel: i.createRef()
  }), [{
    popoverState: c,
    button: p,
    buttonId: b,
    panel: d,
    panelId: g,
    beforePanelSentinel: v,
    afterPanelSentinel: f
  }, h] = s, m = Ee((n = a.current) != null ? n : p), x = i.useMemo(() => {
    if (!p || !d) return !1;
    for (let A of document.querySelectorAll("body > *"))
      if (Number(A == null ? void 0 : A.contains(p)) ^ Number(A == null ? void 0 : A.contains(d))) return !0;
    let L = Me(),
      j = L.indexOf(p),
      z = (j + L.length - 1) % L.length,
      ee = (j + 1) % L.length,
      X = L[z],
      le = L[ee];
    return !d.contains(X) && !d.contains(le)
  }, [p, d]), F = re(b), D = re(g), O = i.useMemo(() => ({
    buttonId: F,
    panelId: D,
    close: () => h({
      type: 1
    })
  }), [F, D, h]), M = mn(), $ = M == null ? void 0 : M.registerPopover, S = y(() => {
    var L;
    return (L = M == null ? void 0 : M.isFocusWithinPopoverGroup()) != null ? L : (m == null ? void 0 : m.activeElement) && ((p == null ? void 0 : p.contains(m.activeElement)) || (d == null ? void 0 : d.contains(m.activeElement)))
  });
  i.useEffect(() => $ == null ? void 0 : $(O), [$, O]), wt(m == null ? void 0 : m.defaultView, "focus", L => {
    var j, z, ee, X;
    c === 0 && (S() || p && d && L.target !== window && ((z = (j = v.current) == null ? void 0 : j.contains) != null && z.call(j, L.target) || (X = (ee = f.current) == null ? void 0 : ee.contains) != null && X.call(ee, L.target) || h({
      type: 1
    })))
  }, !0), Be([p, d], (L, j) => {
    h({
      type: 1
    }), Ne(j, Ae.Loose) || (L.preventDefault(), p == null || p.focus())
  }, c === 0);
  let E = y(L => {
    h({
      type: 1
    });
    let j = (() => L ? L instanceof HTMLElement ? L : "current" in L && L.current instanceof HTMLElement ? L.current : p : p)();
    j == null || j.focus()
  }),
    C = i.useMemo(() => ({
      close: E,
      isPortalled: x
    }), [E, x]),
    k = i.useMemo(() => ({
      open: c === 0,
      close: E
    }), [c, E]),
    w = {
      ref: o
    };
  return P.createElement(Ze.Provider, {
    value: null
  }, P.createElement(At.Provider, {
    value: s
  }, P.createElement(Nt.Provider, {
    value: C
  }, P.createElement(Ce, {
    value: N(c, {
      [0]: V.Open,
      [1]: V.Closed
    })
  }, B({
    ourProps: w,
    theirProps: l,
    slot: k,
    defaultTag: Al,
    name: "Popover"
  })))))
}
let Bl = "button";

function _l(e, t) {
  let n = W(),
    {
      id: r = `headlessui-popover-button-${n}`,
      ...l
    } = e,
    [a, o] = Je("Popover.Button"),
    {
      isPortalled: u
    } = Bt("Popover.Button"),
    s = i.useRef(null),
    c = `headlessui-focus-sentinel-${W()}`,
    p = mn(),
    b = p == null ? void 0 : p.closeOthers,
    d = Fl() !== null;
  i.useEffect(() => {
    if (!d) return o({
      type: 3,
      buttonId: r
    }), () => {
      o({
        type: 3,
        buttonId: null
      })
    }
  }, [d, r, o]);
  let [g] = i.useState(() => Symbol()), v = U(s, t, d ? null : k => {
    if (k) a.buttons.current.push(g);
    else {
      let w = a.buttons.current.indexOf(g);
      w !== -1 && a.buttons.current.splice(w, 1)
    }
    a.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), k && o({
      type: 2,
      button: k
    })
  }), f = U(s, t), h = Ee(s), m = y(k => {
    var w, L, j;
    if (d) {
      if (a.popoverState === 1) return;
      switch (k.key) {
        case R.Space:
        case R.Enter:
          k.preventDefault(), (L = (w = k.target).click) == null || L.call(w), o({
            type: 1
          }), (j = a.button) == null || j.focus();
          break
      }
    } else switch (k.key) {
      case R.Space:
      case R.Enter:
        k.preventDefault(), k.stopPropagation(), a.popoverState === 1 && (b == null || b(a.buttonId)), o({
          type: 0
        });
        break;
      case R.Escape:
        if (a.popoverState !== 0) return b == null ? void 0 : b(a.buttonId);
        if (!s.current || h != null && h.activeElement && !s.current.contains(h.activeElement)) return;
        k.preventDefault(), k.stopPropagation(), o({
          type: 1
        });
        break
    }
  }), x = y(k => {
    d || k.key === R.Space && k.preventDefault()
  }), F = y(k => {
    var w, L;
    ve(k.currentTarget) || e.disabled || (d ? (o({
      type: 1
    }), (w = a.button) == null || w.focus()) : (k.preventDefault(), k.stopPropagation(), a.popoverState === 1 && (b == null || b(a.buttonId)), o({
      type: 0
    }), (L = a.button) == null || L.focus()))
  }), D = y(k => {
    k.preventDefault(), k.stopPropagation()
  }), O = a.popoverState === 0, M = i.useMemo(() => ({
    open: O
  }), [O]), $ = Pe(e, s), S = d ? {
    ref: f,
    type: $,
    onKeyDown: m,
    onClick: F
  } : {
    ref: v,
    id: a.buttonId,
    type: $,
    "aria-expanded": e.disabled ? void 0 : a.popoverState === 0,
    "aria-controls": a.panel ? a.panelId : void 0,
    onKeyDown: m,
    onKeyUp: x,
    onClick: F,
    onMouseDown: D
  }, E = $t(), C = y(() => {
    let k = a.panel;
    if (!k) return;

    function w() {
      N(E.current, {
        [ue.Forwards]: () => te(k, q.First),
        [ue.Backwards]: () => te(k, q.Last)
      }) === de.Error && te(Me().filter(L => L.dataset.headlessuiFocusGuard !== "true"), N(E.current, {
        [ue.Forwards]: q.Next,
        [ue.Backwards]: q.Previous
      }), {
        relativeTo: a.button
      })
    }
    w()
  });
  return P.createElement(P.Fragment, null, B({
    ourProps: S,
    theirProps: l,
    slot: M,
    defaultTag: Bl,
    name: "Popover.Button"
  }), O && !d && u && P.createElement(ce, {
    id: c,
    features: se.Focusable,
    "data-headlessui-focus-guard": !0,
    as: "button",
    type: "button",
    onFocus: C
  }))
}
let Hl = "div",
  Ul = oe.RenderStrategy | oe.Static;

function jl(e, t) {
  let n = W(),
    {
      id: r = `headlessui-popover-overlay-${n}`,
      ...l
    } = e,
    [{
      popoverState: a
    }, o] = Je("Popover.Overlay"),
    u = U(t),
    s = he(),
    c = (() => s !== null ? (s & V.Open) === V.Open : a === 0)(),
    p = y(d => {
      if (ve(d.currentTarget)) return d.preventDefault();
      o({
        type: 1
      })
    }),
    b = i.useMemo(() => ({
      open: a === 0
    }), [a]);
  return B({
    ourProps: {
      ref: u,
      id: r,
      "aria-hidden": !0,
      onClick: p
    },
    theirProps: l,
    slot: b,
    defaultTag: Hl,
    features: Ul,
    visible: c,
    name: "Popover.Overlay"
  })
}
let Gl = "div",
  Kl = oe.RenderStrategy | oe.Static;

function Vl(e, t) {
  let n = W(),
    {
      id: r = `headlessui-popover-panel-${n}`,
      focus: l = !1,
      ...a
    } = e,
    [o, u] = Je("Popover.Panel"),
    {
      close: s,
      isPortalled: c
    } = Bt("Popover.Panel"),
    p = `headlessui-focus-sentinel-before-${W()}`,
    b = `headlessui-focus-sentinel-after-${W()}`,
    d = i.useRef(null),
    g = U(d, t, $ => {
      u({
        type: 4,
        panel: $
      })
    }),
    v = Ee(d);
  K(() => (u({
    type: 5,
    panelId: r
  }), () => {
    u({
      type: 5,
      panelId: null
    })
  }), [r, u]);
  let f = he(),
    h = (() => f !== null ? (f & V.Open) === V.Open : o.popoverState === 0)(),
    m = y($ => {
      var S;
      switch ($.key) {
        case R.Escape:
          if (o.popoverState !== 0 || !d.current || v != null && v.activeElement && !d.current.contains(v.activeElement)) return;
          $.preventDefault(), $.stopPropagation(), u({
            type: 1
          }), (S = o.button) == null || S.focus();
          break
      }
    });
  i.useEffect(() => {
    var $;
    e.static || o.popoverState === 1 && (($ = e.unmount) == null || $) && u({
      type: 4,
      panel: null
    })
  }, [o.popoverState, e.unmount, e.static, u]), i.useEffect(() => {
    if (o.__demoMode || !l || o.popoverState !== 0 || !d.current) return;
    let $ = v == null ? void 0 : v.activeElement;
    d.current.contains($) || te(d.current, q.First)
  }, [o.__demoMode, l, d, o.popoverState]);
  let x = i.useMemo(() => ({
    open: o.popoverState === 0,
    close: s
  }), [o, s]),
    F = {
      ref: g,
      id: r,
      onKeyDown: m,
      onBlur: l && o.popoverState === 0 ? $ => {
        var S, E, C, k, w;
        let L = $.relatedTarget;
        L && d.current && ((S = d.current) != null && S.contains(L) || (u({
          type: 1
        }), ((C = (E = o.beforePanelSentinel.current) == null ? void 0 : E.contains) != null && C.call(E, L) || (w = (k = o.afterPanelSentinel.current) == null ? void 0 : k.contains) != null && w.call(k, L)) && L.focus({
          preventScroll: !0
        })))
      } : void 0,
      tabIndex: -1
    },
    D = $t(),
    O = y(() => {
      let $ = d.current;
      if (!$) return;

      function S() {
        N(D.current, {
          [ue.Forwards]: () => {
            var E;
            te($, q.First) === de.Error && ((E = o.afterPanelSentinel.current) == null || E.focus())
          },
          [ue.Backwards]: () => {
            var E;
            (E = o.button) == null || E.focus({
              preventScroll: !0
            })
          }
        })
      }
      S()
    }),
    M = y(() => {
      let $ = d.current;
      if (!$) return;

      function S() {
        N(D.current, {
          [ue.Forwards]: () => {
            var E;
            if (!o.button) return;
            let C = Me(),
              k = C.indexOf(o.button),
              w = C.slice(0, k + 1),
              L = [...C.slice(k + 1), ...w];
            for (let j of L.slice())
              if (j.dataset.headlessuiFocusGuard === "true" || (E = o.panel) != null && E.contains(j)) {
                let z = L.indexOf(j);
                z !== -1 && L.splice(z, 1)
              } te(L, q.First, {
                sorted: !1
              })
          },
          [ue.Backwards]: () => {
            var E;
            te($, q.Previous) === de.Error && ((E = o.button) == null || E.focus())
          }
        })
      }
      S()
    });
  return P.createElement(Ze.Provider, {
    value: r
  }, h && c && P.createElement(ce, {
    id: p,
    ref: o.beforePanelSentinel,
    features: se.Focusable,
    "data-headlessui-focus-guard": !0,
    as: "button",
    type: "button",
    onFocus: O
  }), B({
    ourProps: F,
    theirProps: a,
    slot: x,
    defaultTag: Gl,
    features: Kl,
    visible: h,
    name: "Popover.Panel"
  }), h && c && P.createElement(ce, {
    id: b,
    ref: o.afterPanelSentinel,
    features: se.Focusable,
    "data-headlessui-focus-guard": !0,
    as: "button",
    type: "button",
    onFocus: M
  }))
}
let Wl = "div";

function ql(e, t) {
  let n = i.useRef(null),
    r = U(n, t),
    [l, a] = i.useState([]),
    o = y(v => {
      a(f => {
        let h = f.indexOf(v);
        if (h !== -1) {
          let m = f.slice();
          return m.splice(h, 1), m
        }
        return f
      })
    }),
    u = y(v => (a(f => [...f, v]), () => o(v))),
    s = y(() => {
      var v;
      let f = ge(n);
      if (!f) return !1;
      let h = f.activeElement;
      return (v = n.current) != null && v.contains(h) ? !0 : l.some(m => {
        var x, F;
        return ((x = f.getElementById(m.buttonId.current)) == null ? void 0 : x.contains(h)) || ((F = f.getElementById(m.panelId.current)) == null ? void 0 : F.contains(h))
      })
    }),
    c = y(v => {
      for (let f of l) f.buttonId.current !== v && f.close()
    }),
    p = i.useMemo(() => ({
      registerPopover: u,
      unregisterPopover: o,
      isFocusWithinPopoverGroup: s,
      closeOthers: c
    }), [u, o, s, c]),
    b = i.useMemo(() => ({}), []),
    d = e,
    g = {
      ref: r
    };
  return P.createElement(_t.Provider, {
    value: p
  }, B({
    ourProps: g,
    theirProps: d,
    slot: b,
    defaultTag: Wl,
    name: "Popover.Group"
  }))
}
let Ql = _(Nl),
  Yl = _(_l),
  zl = _(jl),
  Xl = _(Vl),
  Jl = _(ql),
  Zl = Object.assign(Ql, {
    Button: Yl,
    Overlay: zl,
    Panel: Xl,
    Group: Jl
  });

function bn(e = 0) {
  let [t, n] = i.useState(e), r = He(), l = i.useCallback(s => {
    r.current && n(c => c | s)
  }, [t, r]), a = i.useCallback(s => Boolean(t & s), [t]), o = i.useCallback(s => {
    r.current && n(c => c & ~s)
  }, [n, r]), u = i.useCallback(s => {
    r.current && n(c => c ^ s)
  }, [n]);
  return {
    flags: t,
    addFlag: l,
    hasFlag: a,
    removeFlag: o,
    toggleFlag: u
  }
}
let gn = i.createContext(null);

function hn() {
  let e = i.useContext(gn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, hn), t
  }
  return e
}

function Ht() {
  let [e, t] = i.useState([]);
  return [e.length > 0 ? e.join(" ") : void 0, i.useMemo(() => function (n) {
    let r = y(a => (t(o => [...o, a]), () => t(o => {
      let u = o.slice(),
        s = u.indexOf(a);
      return s !== -1 && u.splice(s, 1), u
    }))),
      l = i.useMemo(() => ({
        register: r,
        slot: n.slot,
        name: n.name,
        props: n.props
      }), [r, n.slot, n.name, n.props]);
    return P.createElement(gn.Provider, {
      value: l
    }, n.children)
  }, [t])]
}
let ea = "label";

function ta(e, t) {
  let n = W(),
    {
      id: r = `headlessui-label-${n}`,
      passive: l = !1,
      ...a
    } = e,
    o = hn(),
    u = U(t);
  K(() => o.register(r), [r, o.register]);
  let s = {
    ref: u,
    ...o.props,
    id: r
  };
  return l && ("onClick" in s && (delete s.htmlFor, delete s.onClick), "onClick" in a && delete a.onClick), B({
    ourProps: s,
    theirProps: a,
    slot: o.slot || {},
    defaultTag: ea,
    name: o.name || "Label"
  })
}
let na = _(ta),
  xn = Object.assign(na, {});
var ra = (e => (e[e.RegisterOption = 0] = "RegisterOption", e[e.UnregisterOption = 1] = "UnregisterOption", e))(ra || {});
let oa = {
  [0](e, t) {
    let n = [...e.options, {
      id: t.id,
      element: t.element,
      propsRef: t.propsRef
    }];
    return {
      ...e,
      options: fe(n, r => r.element.current)
    }
  },
  [1](e, t) {
    let n = e.options.slice(),
      r = e.options.findIndex(l => l.id === t.id);
    return r === -1 ? e : (n.splice(r, 1), {
      ...e,
      options: n
    })
  }
},
  Ut = i.createContext(null);
Ut.displayName = "RadioGroupDataContext";

function yn(e) {
  let t = i.useContext(Ut);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, yn), n
  }
  return t
}
let jt = i.createContext(null);
jt.displayName = "RadioGroupActionsContext";

function En(e) {
  let t = i.useContext(jt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, En), n
  }
  return t
}

function la(e, t) {
  return N(t.type, oa, e, t)
}
let aa = "div";

function ia(e, t) {
  let n = W(),
    {
      id: r = `headlessui-radiogroup-${n}`,
      value: l,
      defaultValue: a,
      form: o,
      name: u,
      onChange: s,
      by: c = (A, J) => A === J,
      disabled: p = !1,
      ...b
    } = e,
    d = y(typeof c == "string" ? (A, J) => {
      let Q = c;
      return (A == null ? void 0 : A[Q]) === (J == null ? void 0 : J[Q])
    } : c),
    [g, v] = i.useReducer(la, {
      options: []
    }),
    f = g.options,
    [h, m] = Ht(),
    [x, F] = ze(),
    D = i.useRef(null),
    O = U(D, t),
    [M, $] = Ye(l, s, a),
    S = i.useMemo(() => f.find(A => !A.propsRef.current.disabled), [f]),
    E = i.useMemo(() => f.some(A => d(A.propsRef.current.value, M)), [f, M]),
    C = y(A => {
      var J;
      if (p || d(A, M)) return !1;
      let Q = (J = f.find(ne => d(ne.propsRef.current.value, A))) == null ? void 0 : J.propsRef.current;
      return Q != null && Q.disabled ? !1 : ($ == null || $(A), !0)
    });
  xt({
    container: D.current,
    accept(A) {
      return A.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : A.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
    },
    walk(A) {
      A.setAttribute("role", "none")
    }
  });
  let k = y(A => {
    let J = D.current;
    if (!J) return;
    let Q = ge(J),
      ne = f.filter(Z => Z.propsRef.current.disabled === !1).map(Z => Z.element.current);
    switch (A.key) {
      case R.Enter:
        on(A.currentTarget);
        break;
      case R.ArrowLeft:
      case R.ArrowUp:
        if (A.preventDefault(), A.stopPropagation(), te(ne, q.Previous | q.WrapAround) === de.Success) {
          let Z = f.find(T => T.element.current === (Q == null ? void 0 : Q.activeElement));
          Z && C(Z.propsRef.current.value)
        }
        break;
      case R.ArrowRight:
      case R.ArrowDown:
        if (A.preventDefault(), A.stopPropagation(), te(ne, q.Next | q.WrapAround) === de.Success) {
          let Z = f.find(T => T.element.current === (Q == null ? void 0 : Q.activeElement));
          Z && C(Z.propsRef.current.value)
        }
        break;
      case R.Space: {
        A.preventDefault(), A.stopPropagation();
        let Z = f.find(T => T.element.current === (Q == null ? void 0 : Q.activeElement));
        Z && C(Z.propsRef.current.value)
      }
        break
    }
  }),
    w = y(A => (v({
      type: 0,
      ...A
    }), () => v({
      type: 1,
      id: A.id
    }))),
    L = i.useMemo(() => ({
      value: M,
      firstOption: S,
      containsCheckedOption: E,
      disabled: p,
      compare: d,
      ...g
    }), [M, S, E, p, d, g]),
    j = i.useMemo(() => ({
      registerOption: w,
      change: C
    }), [w, C]),
    z = {
      ref: O,
      id: r,
      role: "radiogroup",
      "aria-labelledby": h,
      "aria-describedby": x,
      onKeyDown: k
    },
    ee = i.useMemo(() => ({
      value: M
    }), [M]),
    X = i.useRef(null),
    le = ie();
  return i.useEffect(() => {
    X.current && a !== void 0 && le.addEventListener(X.current, "reset", () => {
      C(a)
    })
  }, [X, C]), P.createElement(F, {
    name: "RadioGroup.Description"
  }, P.createElement(m, {
    name: "RadioGroup.Label"
  }, P.createElement(jt.Provider, {
    value: j
  }, P.createElement(Ut.Provider, {
    value: L
  }, u != null && M != null && Qe({
    [u]: M
  }).map(([A, J], Q) => P.createElement(ce, {
    features: se.Hidden,
    ref: Q === 0 ? ne => {
      var Z;
      X.current = (Z = ne == null ? void 0 : ne.closest("form")) != null ? Z : null
    } : void 0,
    ...we({
      key: A,
      as: "input",
      type: "radio",
      checked: J != null,
      hidden: !0,
      readOnly: !0,
      form: o,
      name: A,
      value: J
    })
  })), B({
    ourProps: z,
    theirProps: b,
    slot: ee,
    defaultTag: aa,
    name: "RadioGroup"
  })))))
}
var ua = (e => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(ua || {});
let sa = "div";

function ca(e, t) {
  var n;
  let r = W(),
    {
      id: l = `headlessui-radiogroup-option-${r}`,
      value: a,
      disabled: o = !1,
      ...u
    } = e,
    s = i.useRef(null),
    c = U(s, t),
    [p, b] = Ht(),
    [d, g] = ze(),
    {
      addFlag: v,
      removeFlag: f,
      hasFlag: h
    } = bn(1),
    m = re({
      value: a,
      disabled: o
    }),
    x = yn("RadioGroup.Option"),
    F = En("RadioGroup.Option");
  K(() => F.registerOption({
    id: l,
    element: s,
    propsRef: m
  }), [l, F, s, e]);
  let D = y(w => {
    var L;
    if (ve(w.currentTarget)) return w.preventDefault();
    F.change(a) && (v(2), (L = s.current) == null || L.focus())
  }),
    O = y(w => {
      if (ve(w.currentTarget)) return w.preventDefault();
      v(2)
    }),
    M = y(() => f(2)),
    $ = ((n = x.firstOption) == null ? void 0 : n.id) === l,
    S = x.disabled || o,
    E = x.compare(x.value, a),
    C = {
      ref: c,
      id: l,
      role: "radio",
      "aria-checked": E ? "true" : "false",
      "aria-labelledby": p,
      "aria-describedby": d,
      "aria-disabled": S ? !0 : void 0,
      tabIndex: (() => S ? -1 : E || !x.containsCheckedOption && $ ? 0 : -1)(),
      onClick: S ? void 0 : D,
      onFocus: S ? void 0 : O,
      onBlur: S ? void 0 : M
    },
    k = i.useMemo(() => ({
      checked: E,
      disabled: S,
      active: h(2)
    }), [E, S, h]);
  return P.createElement(g, {
    name: "RadioGroup.Description"
  }, P.createElement(b, {
    name: "RadioGroup.Label"
  }, B({
    ourProps: C,
    theirProps: u,
    slot: k,
    defaultTag: sa,
    name: "RadioGroup.Option"
  })))
}
let da = _(ia),
  pa = _(ca),
  fa = Object.assign(da, {
    Option: pa,
    Label: xn,
    Description: Tt
  }),
  Gt = i.createContext(null);
Gt.displayName = "GroupContext";
let va = i.Fragment;

function ma(e) {
  var t;
  let [n, r] = i.useState(null), [l, a] = Ht(), [o, u] = ze(), s = i.useMemo(() => ({
    switch: n,
    setSwitch: r,
    labelledby: l,
    describedby: o
  }), [n, r, l, o]), c = {}, p = e;
  return P.createElement(u, {
    name: "Switch.Description"
  }, P.createElement(a, {
    name: "Switch.Label",
    props: {
      htmlFor: (t = s.switch) == null ? void 0 : t.id,
      onClick(b) {
        n && (b.currentTarget.tagName === "LABEL" && b.preventDefault(), n.click(), n.focus({
          preventScroll: !0
        }))
      }
    }
  }, P.createElement(Gt.Provider, {
    value: s
  }, B({
    ourProps: c,
    theirProps: p,
    defaultTag: va,
    name: "Switch.Group"
  }))))
}
let ba = "button";

function ga(e, t) {
  let n = W(),
    {
      id: r = `headlessui-switch-${n}`,
      checked: l,
      defaultChecked: a = !1,
      onChange: o,
      name: u,
      value: s,
      form: c,
      ...p
    } = e,
    b = i.useContext(Gt),
    d = i.useRef(null),
    g = U(d, t, b === null ? null : b.setSwitch),
    [v, f] = Ye(l, o, a),
    h = y(() => f == null ? void 0 : f(!v)),
    m = y($ => {
      if (ve($.currentTarget)) return $.preventDefault();
      $.preventDefault(), h()
    }),
    x = y($ => {
      $.key === R.Space ? ($.preventDefault(), h()) : $.key === R.Enter && on($.currentTarget)
    }),
    F = y($ => $.preventDefault()),
    D = i.useMemo(() => ({
      checked: v
    }), [v]),
    O = {
      id: r,
      ref: g,
      role: "switch",
      type: Pe(e, d),
      tabIndex: 0,
      "aria-checked": v,
      "aria-labelledby": b == null ? void 0 : b.labelledby,
      "aria-describedby": b == null ? void 0 : b.describedby,
      onClick: m,
      onKeyUp: x,
      onKeyPress: F
    },
    M = ie();
  return i.useEffect(() => {
    var $;
    let S = ($ = d.current) == null ? void 0 : $.closest("form");
    S && a !== void 0 && M.addEventListener(S, "reset", () => {
      f(a)
    })
  }, [d, f]), P.createElement(P.Fragment, null, u != null && v && P.createElement(ce, {
    features: se.Hidden,
    ...we({
      as: "input",
      type: "checkbox",
      hidden: !0,
      readOnly: !0,
      form: c,
      checked: v,
      name: u,
      value: s
    })
  }), B({
    ourProps: O,
    theirProps: p,
    slot: D,
    defaultTag: ba,
    name: "Switch"
  }))
}
let ha = _(ga),
  xa = ma,
  ya = Object.assign(ha, {
    Group: xa,
    Label: xn,
    Description: Tt
  });

function Ea({
  onFocus: e
}) {
  let [t, n] = i.useState(!0);
  return t ? P.createElement(ce, {
    as: "button",
    type: "button",
    features: se.Focusable,
    onFocus: r => {
      r.preventDefault();
      let l, a = 50;

      function o() {
        if (a-- <= 0) {
          l && cancelAnimationFrame(l);
          return
        }
        if (e()) {
          n(!1), cancelAnimationFrame(l);
          return
        }
        l = requestAnimationFrame(o)
      }
      l = requestAnimationFrame(o)
    }
  }) : null
}
const Sn = i.createContext(null);

function Sa() {
  return {
    groups: new Map,
    get(e, t) {
      var n;
      let r = this.groups.get(e);
      r || (r = new Map, this.groups.set(e, r));
      let l = (n = r.get(t)) != null ? n : 0;
      r.set(t, l + 1);
      let a = Array.from(r.keys()).indexOf(t);

      function o() {
        let u = r.get(t);
        u > 1 ? r.set(t, u - 1) : r.delete(t)
      }
      return [a, o]
    }
  }
}

function Ra({
  children: e
}) {
  let t = i.useRef(Sa());
  return i.createElement(Sn.Provider, {
    value: t
  }, e)
}

function Rn(e) {
  let t = i.useContext(Sn);
  if (!t) throw new Error("You must wrap your component in a <StableCollection>");
  let n = Pa(),
    [r, l] = t.current.get(e, n);
  return i.useEffect(() => l, []), r
}

function Pa() {
  var e, t, n;
  let r = (n = (t = (e = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : e.ReactCurrentOwner) == null ? void 0 : t.current) != null ? n : null;
  if (!r) return Symbol();
  let l = [],
    a = r;
  for (; a;) l.push(a.index), a = a.return;
  return "$." + l.join(".")
}
var $a = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))($a || {}),
  wa = (e => (e[e.Less = -1] = "Less", e[e.Equal = 0] = "Equal", e[e.Greater = 1] = "Greater", e))(wa || {}),
  Ta = (e => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e))(Ta || {});
let Ia = {
  [0](e, t) {
    var n;
    let r = fe(e.tabs, p => p.current),
      l = fe(e.panels, p => p.current),
      a = r.filter(p => {
        var b;
        return !((b = p.current) != null && b.hasAttribute("disabled"))
      }),
      o = {
        ...e,
        tabs: r,
        panels: l
      };
    if (t.index < 0 || t.index > r.length - 1) {
      let p = N(Math.sign(t.index - e.selectedIndex), {
        [-1]: () => 1,
        [0]: () => N(Math.sign(t.index), {
          [-1]: () => 0,
          [0]: () => 0,
          [1]: () => 1
        }),
        [1]: () => 0
      });
      return a.length === 0 ? o : {
        ...o,
        selectedIndex: N(p, {
          [0]: () => r.indexOf(a[0]),
          [1]: () => r.indexOf(a[a.length - 1])
        })
      }
    }
    let u = r.slice(0, t.index),
      s = [...r.slice(t.index), ...u].find(p => a.includes(p));
    if (!s) return o;
    let c = (n = r.indexOf(s)) != null ? n : e.selectedIndex;
    return c === -1 && (c = e.selectedIndex), {
      ...o,
      selectedIndex: c
    }
  },
  [1](e, t) {
    var n;
    if (e.tabs.includes(t.tab)) return e;
    let r = e.tabs[e.selectedIndex],
      l = fe([...e.tabs, t.tab], o => o.current),
      a = (n = l.indexOf(r)) != null ? n : e.selectedIndex;
    return a === -1 && (a = e.selectedIndex), {
      ...e,
      tabs: l,
      selectedIndex: a
    }
  },
  [2](e, t) {
    return {
      ...e,
      tabs: e.tabs.filter(n => n !== t.tab)
    }
  },
  [3](e, t) {
    return e.panels.includes(t.panel) ? e : {
      ...e,
      panels: fe([...e.panels, t.panel], n => n.current)
    }
  },
  [4](e, t) {
    return {
      ...e,
      panels: e.panels.filter(n => n !== t.panel)
    }
  }
},
  Kt = i.createContext(null);
Kt.displayName = "TabsDataContext";

function Te(e) {
  let t = i.useContext(Kt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Te), n
  }
  return t
}
let Vt = i.createContext(null);
Vt.displayName = "TabsActionsContext";

function Wt(e) {
  let t = i.useContext(Vt);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Wt), n
  }
  return t
}

function Oa(e, t) {
  return N(t.type, Ia, e, t)
}
let Ca = i.Fragment;

function ka(e, t) {
  let {
    defaultIndex: n = 0,
    vertical: r = !1,
    manual: l = !1,
    onChange: a,
    selectedIndex: o = null,
    ...u
  } = e;
  const s = r ? "vertical" : "horizontal",
    c = l ? "manual" : "auto";
  let p = o !== null,
    b = U(t),
    [d, g] = i.useReducer(Oa, {
      selectedIndex: o ?? n,
      tabs: [],
      panels: []
    }),
    v = i.useMemo(() => ({
      selectedIndex: d.selectedIndex
    }), [d.selectedIndex]),
    f = re(a || (() => { })),
    h = re(d.tabs),
    m = i.useMemo(() => ({
      orientation: s,
      activation: c,
      ...d
    }), [s, c, d]),
    x = y(S => (g({
      type: 1,
      tab: S
    }), () => g({
      type: 2,
      tab: S
    }))),
    F = y(S => (g({
      type: 3,
      panel: S
    }), () => g({
      type: 4,
      panel: S
    }))),
    D = y(S => {
      O.current !== S && f.current(S), p || g({
        type: 0,
        index: S
      })
    }),
    O = re(p ? e.selectedIndex : d.selectedIndex),
    M = i.useMemo(() => ({
      registerTab: x,
      registerPanel: F,
      change: D
    }), []);
  K(() => {
    g({
      type: 0,
      index: o ?? n
    })
  }, [o]), K(() => {
    if (O.current === void 0 || d.tabs.length <= 0) return;
    let S = fe(d.tabs, E => E.current);
    S.some((E, C) => d.tabs[C] !== E) && D(S.indexOf(d.tabs[O.current]))
  });
  let $ = {
    ref: b
  };
  return P.createElement(Ra, null, P.createElement(Vt.Provider, {
    value: M
  }, P.createElement(Kt.Provider, {
    value: m
  }, m.tabs.length <= 0 && P.createElement(Ea, {
    onFocus: () => {
      var S, E;
      for (let C of h.current)
        if (((S = C.current) == null ? void 0 : S.tabIndex) === 0) return (E = C.current) == null || E.focus(), !0;
      return !1
    }
  }), B({
    ourProps: $,
    theirProps: u,
    slot: v,
    defaultTag: Ca,
    name: "Tabs"
  }))))
}
let La = "div";

function Da(e, t) {
  let {
    orientation: n,
    selectedIndex: r
  } = Te("Tab.List"), l = U(t);
  return B({
    ourProps: {
      ref: l,
      role: "tablist",
      "aria-orientation": n
    },
    theirProps: e,
    slot: {
      selectedIndex: r
    },
    defaultTag: La,
    name: "Tabs.List"
  })
}
let Fa = "button";

function Ma(e, t) {
  var n, r;
  let l = W(),
    {
      id: a = `headlessui-tabs-tab-${l}`,
      ...o
    } = e,
    {
      orientation: u,
      activation: s,
      selectedIndex: c,
      tabs: p,
      panels: b
    } = Te("Tab"),
    d = Wt("Tab"),
    g = Te("Tab"),
    v = i.useRef(null),
    f = U(v, t);
  K(() => d.registerTab(v), [d, v]);
  let h = Rn("tabs"),
    m = p.indexOf(v);
  m === -1 && (m = h);
  let x = m === c,
    F = y(C => {
      var k;
      let w = C();
      if (w === de.Success && s === "auto") {
        let L = (k = ge(v)) == null ? void 0 : k.activeElement,
          j = g.tabs.findIndex(z => z.current === L);
        j !== -1 && d.change(j)
      }
      return w
    }),
    D = y(C => {
      let k = p.map(w => w.current).filter(Boolean);
      if (C.key === R.Space || C.key === R.Enter) {
        C.preventDefault(), C.stopPropagation(), d.change(m);
        return
      }
      switch (C.key) {
        case R.Home:
        case R.PageUp:
          return C.preventDefault(), C.stopPropagation(), F(() => te(k, q.First));
        case R.End:
        case R.PageDown:
          return C.preventDefault(), C.stopPropagation(), F(() => te(k, q.Last))
      }
      if (F(() => N(u, {
        vertical() {
          return C.key === R.ArrowUp ? te(k, q.Previous | q.WrapAround) : C.key === R.ArrowDown ? te(k, q.Next | q.WrapAround) : de.Error
        },
        horizontal() {
          return C.key === R.ArrowLeft ? te(k, q.Previous | q.WrapAround) : C.key === R.ArrowRight ? te(k, q.Next | q.WrapAround) : de.Error
        }
      })) === de.Success) return C.preventDefault()
    }),
    O = i.useRef(!1),
    M = y(() => {
      var C;
      O.current || (O.current = !0, (C = v.current) == null || C.focus(), d.change(m), Ie(() => {
        O.current = !1
      }))
    }),
    $ = y(C => {
      C.preventDefault()
    }),
    S = i.useMemo(() => ({
      selected: x
    }), [x]),
    E = {
      ref: f,
      onKeyDown: D,
      onMouseDown: $,
      onClick: M,
      id: a,
      role: "tab",
      type: Pe(e, v),
      "aria-controls": (r = (n = b[m]) == null ? void 0 : n.current) == null ? void 0 : r.id,
      "aria-selected": x,
      tabIndex: x ? 0 : -1
    };
  return B({
    ourProps: E,
    theirProps: o,
    slot: S,
    defaultTag: Fa,
    name: "Tabs.Tab"
  })
}
let Aa = "div";

function Na(e, t) {
  let {
    selectedIndex: n
  } = Te("Tab.Panels"), r = U(t), l = i.useMemo(() => ({
    selectedIndex: n
  }), [n]);
  return B({
    ourProps: {
      ref: r
    },
    theirProps: e,
    slot: l,
    defaultTag: Aa,
    name: "Tabs.Panels"
  })
}
let Ba = "div",
  _a = oe.RenderStrategy | oe.Static;

function Ha(e, t) {
  var n, r, l, a;
  let o = W(),
    {
      id: u = `headlessui-tabs-panel-${o}`,
      tabIndex: s = 0,
      ...c
    } = e,
    {
      selectedIndex: p,
      tabs: b,
      panels: d
    } = Te("Tab.Panel"),
    g = Wt("Tab.Panel"),
    v = i.useRef(null),
    f = U(v, t);
  K(() => g.registerPanel(v), [g, v]);
  let h = Rn("panels"),
    m = d.indexOf(v);
  m === -1 && (m = h);
  let x = m === p,
    F = i.useMemo(() => ({
      selected: x
    }), [x]),
    D = {
      ref: f,
      id: u,
      role: "tabpanel",
      "aria-labelledby": (r = (n = b[m]) == null ? void 0 : n.current) == null ? void 0 : r.id,
      tabIndex: x ? s : -1
    };
  return !x && ((l = c.unmount) == null || l) && !((a = c.static) != null && a) ? P.createElement(ce, {
    as: "span",
    ...D
  }) : B({
    ourProps: D,
    theirProps: c,
    slot: F,
    defaultTag: Ba,
    features: _a,
    visible: x,
    name: "Tabs.Panel"
  })
}
let Ua = _(Ma),
  ja = _(ka),
  Ga = _(Da),
  Ka = _(Na),
  Va = _(Ha),
  Wa = Object.assign(Ua, {
    Group: ja,
    List: Ga,
    Panels: Ka,
    Panel: Va
  });

function qa(e) {
  let t = {
    called: !1
  };
  return (...n) => {
    if (!t.called) return t.called = !0, e(...n)
  }
}

function dt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t)
}

function pt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t)
}

function Qa(e, t) {
  let n = ae();
  if (!e) return n.dispose;
  let {
    transitionDuration: r,
    transitionDelay: l
  } = getComputedStyle(e), [a, o] = [r, l].map(s => {
    let [c = 0] = s.split(",").filter(Boolean).map(p => p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3).sort((p, b) => b - p);
    return c
  }), u = a + o;
  if (u !== 0) {
    n.group(c => {
      c.setTimeout(() => {
        t(), c.dispose()
      }, u), c.addEventListener(e, "transitionrun", p => {
        p.target === p.currentTarget && c.dispose()
      })
    });
    let s = n.addEventListener(e, "transitionend", c => {
      c.target === c.currentTarget && (t(), s())
    })
  } else t();
  return n.add(() => t()), n.dispose
}

function Ya(e, t, n, r) {
  let l = n ? "enter" : "leave",
    a = ae(),
    o = r !== void 0 ? qa(r) : () => { };
  l === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let u = N(l, {
    enter: () => t.enter,
    leave: () => t.leave
  }),
    s = N(l, {
      enter: () => t.enterTo,
      leave: () => t.leaveTo
    }),
    c = N(l, {
      enter: () => t.enterFrom,
      leave: () => t.leaveFrom
    });
  return pt(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), dt(e, ...u, ...c), a.nextFrame(() => {
    pt(e, ...c), dt(e, ...s), Qa(e, () => (pt(e, ...u), dt(e, ...t.entered), o()))
  }), a.dispose
}

function za({
  container: e,
  direction: t,
  classes: n,
  onStart: r,
  onStop: l
}) {
  let a = He(),
    o = ie(),
    u = re(t);
  K(() => {
    let s = ae();
    o.add(s.dispose);
    let c = e.current;
    if (c && u.current !== "idle" && a.current) return s.dispose(), r.current(u.current), s.add(Ya(c, n.current, u.current === "enter", () => {
      s.dispose(), l.current(u.current)
    })), s.dispose
  }, [t])
}

function Se(e = "") {
  return e.split(" ").filter(t => t.trim().length > 1)
}
let et = i.createContext(null);
et.displayName = "TransitionContext";
var Xa = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(Xa || {});

function Ja() {
  let e = i.useContext(et);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e
}

function Za() {
  let e = i.useContext(tt);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e
}
let tt = i.createContext(null);
tt.displayName = "NestingContext";

function nt(e) {
  return "children" in e ? nt(e.children) : e.current.filter(({
    el: t
  }) => t.current !== null).filter(({
    state: t
  }) => t === "visible").length > 0
}

function Pn(e, t) {
  let n = re(e),
    r = i.useRef([]),
    l = He(),
    a = ie(),
    o = y((g, v = me.Hidden) => {
      let f = r.current.findIndex(({
        el: h
      }) => h === g);
      f !== -1 && (N(v, {
        [me.Unmount]() {
          r.current.splice(f, 1)
        },
        [me.Hidden]() {
          r.current[f].state = "hidden"
        }
      }), a.microTask(() => {
        var h;
        !nt(r) && l.current && ((h = n.current) == null || h.call(n))
      }))
    }),
    u = y(g => {
      let v = r.current.find(({
        el: f
      }) => f === g);
      return v ? v.state !== "visible" && (v.state = "visible") : r.current.push({
        el: g,
        state: "visible"
      }), () => o(g, me.Unmount)
    }),
    s = i.useRef([]),
    c = i.useRef(Promise.resolve()),
    p = i.useRef({
      enter: [],
      leave: [],
      idle: []
    }),
    b = y((g, v, f) => {
      s.current.splice(0), t && (t.chains.current[v] = t.chains.current[v].filter(([h]) => h !== g)), t == null || t.chains.current[v].push([g, new Promise(h => {
        s.current.push(h)
      })]), t == null || t.chains.current[v].push([g, new Promise(h => {
        Promise.all(p.current[v].map(([m, x]) => x)).then(() => h())
      })]), v === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => f(v)) : f(v)
    }),
    d = y((g, v, f) => {
      Promise.all(p.current[v].splice(0).map(([h, m]) => m)).then(() => {
        var h;
        (h = s.current.shift()) == null || h()
      }).then(() => f(v))
    });
  return i.useMemo(() => ({
    children: r,
    register: u,
    unregister: o,
    onStart: b,
    onStop: d,
    wait: c,
    chains: p
  }), [u, o, r, b, d, p, c])
}

function ei() { }
let ti = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function Jt(e) {
  var t;
  let n = {};
  for (let r of ti) n[r] = (t = e[r]) != null ? t : ei;
  return n
}

function ni(e) {
  let t = i.useRef(Jt(e));
  return i.useEffect(() => {
    t.current = Jt(e)
  }, [e]), t
}
let ri = "div",
  $n = oe.RenderStrategy;

function oi(e, t) {
  let {
    beforeEnter: n,
    afterEnter: r,
    beforeLeave: l,
    afterLeave: a,
    enter: o,
    enterFrom: u,
    enterTo: s,
    entered: c,
    leave: p,
    leaveFrom: b,
    leaveTo: d,
    ...g
  } = e, v = i.useRef(null), f = U(v, t), h = g.unmount ? me.Unmount : me.Hidden, {
    show: m,
    appear: x,
    initial: F
  } = Ja(), [D, O] = i.useState(m ? "visible" : "hidden"), M = Za(), {
    register: $,
    unregister: S
  } = M, E = i.useRef(null);
  i.useEffect(() => $(v), [$, v]), i.useEffect(() => {
    if (h === me.Hidden && v.current) {
      if (m && D !== "visible") {
        O("visible");
        return
      }
      return N(D, {
        hidden: () => S(v),
        visible: () => $(v)
      })
    }
  }, [D, v, $, S, m, h]);
  let C = re({
    enter: Se(o),
    enterFrom: Se(u),
    enterTo: Se(s),
    entered: Se(c),
    leave: Se(p),
    leaveFrom: Se(b),
    leaveTo: Se(d)
  }),
    k = ni({
      beforeEnter: n,
      afterEnter: r,
      beforeLeave: l,
      afterLeave: a
    }),
    w = Oe();
  i.useEffect(() => {
    if (w && D === "visible" && v.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
  }, [v, D, w]);
  let L = F && !x,
    j = (() => !w || L || E.current === m ? "idle" : m ? "enter" : "leave")(),
    z = bn(0),
    ee = y(Q => N(Q, {
      enter: () => {
        z.addFlag(V.Opening), k.current.beforeEnter()
      },
      leave: () => {
        z.addFlag(V.Closing), k.current.beforeLeave()
      },
      idle: () => { }
    })),
    X = y(Q => N(Q, {
      enter: () => {
        z.removeFlag(V.Opening), k.current.afterEnter()
      },
      leave: () => {
        z.removeFlag(V.Closing), k.current.afterLeave()
      },
      idle: () => { }
    })),
    le = Pn(() => {
      O("hidden"), S(v)
    }, M);
  za({
    container: v,
    classes: C,
    direction: j,
    onStart: re(Q => {
      le.onStart(v, Q, ee)
    }),
    onStop: re(Q => {
      le.onStop(v, Q, X), Q === "leave" && !nt(le) && (O("hidden"), S(v))
    })
  }), i.useEffect(() => {
    L && (h === me.Hidden ? E.current = null : E.current = m)
  }, [m, L, D]);
  let A = g,
    J = {
      ref: f
    };
  return x && m && (A = {
    ...A,
    className: vt(g.className, ...C.current.enter, ...C.current.enterFrom)
  }), P.createElement(tt.Provider, {
    value: le
  }, P.createElement(Ce, {
    value: N(D, {
      visible: V.Open,
      hidden: V.Closed
    }) | z.flags
  }, B({
    ourProps: J,
    theirProps: A,
    defaultTag: ri,
    features: $n,
    visible: D === "visible",
    name: "Transition.Child"
  })))
}

function li(e, t) {
  let {
    show: n,
    appear: r = !1,
    unmount: l,
    ...a
  } = e, o = i.useRef(null), u = U(o, t);
  Oe();
  let s = he();
  if (n === void 0 && s !== null && (n = (s & V.Open) === V.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, p] = i.useState(n ? "visible" : "hidden"), b = Pn(() => {
    p("hidden")
  }), [d, g] = i.useState(!0), v = i.useRef([n]);
  K(() => {
    d !== !1 && v.current[v.current.length - 1] !== n && (v.current.push(n), g(!1))
  }, [v, n]);
  let f = i.useMemo(() => ({
    show: n,
    appear: r,
    initial: d
  }), [n, r, d]);
  i.useEffect(() => {
    if (n) p("visible");
    else if (!nt(b)) p("hidden");
    else {
      let m = o.current;
      if (!m) return;
      let x = m.getBoundingClientRect();
      x.x === 0 && x.y === 0 && x.width === 0 && x.height === 0 && p("hidden")
    }
  }, [n, b]);
  let h = {
    unmount: l
  };
  return P.createElement(tt.Provider, {
    value: b
  }, P.createElement(et.Provider, {
    value: f
  }, B({
    ourProps: {
      ...h,
      as: i.Fragment,
      children: P.createElement(wn, {
        ref: u,
        ...h,
        ...a
      })
    },
    theirProps: {},
    defaultTag: i.Fragment,
    features: $n,
    visible: c === "visible",
    name: "Transition"
  })))
}

function ai(e, t) {
  let n = i.useContext(et) !== null,
    r = he() !== null;
  return P.createElement(P.Fragment, null, !n && r ? P.createElement(gt, {
    ref: t,
    ...e
  }) : P.createElement(wn, {
    ref: t,
    ...e
  }))
}
let gt = _(li),
  wn = _(oi),
  ii = _(ai),
  ui = Object.assign(gt, {
    Child: ii,
    Root: gt
  });
const si = Object.freeze(Object.defineProperty({
  __proto__: null,
  Combobox: mr,
  Dialog: $o,
  Disclosure: jo,
  FocusTrap: $e,
  Listbox: dl,
  Menu: Cl,
  Popover: Zl,
  Portal: We,
  RadioGroup: fa,
  Switch: ya,
  Tab: Wa,
  Transition: ui
}, Symbol.toStringTag, {
  value: "Module"
}));
window.React = Ve;
window.ReactDOM = In;
window.headlessui = si;