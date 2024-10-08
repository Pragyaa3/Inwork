!(function (h, C) {
  function s(e) {
    var t = e.length,
      n = ke.type(e);
    return (
      !ke.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        ("function" !== n &&
          (0 === t || ("number" == typeof t && 0 < t && t - 1 in e))))
    );
  }
  function e(e) {
    var n = (Ce[e] = {});
    return (
      ke.each(e.match(ce) || [], function (e, t) {
        n[t] = !0;
      }),
      n
    );
  }
  function r(e, t, n, r) {
    if (ke.acceptData(e)) {
      var i,
        o,
        a = ke.expando,
        s = e.nodeType,
        u = s ? ke.cache : e,
        l = s ? e[a] : e[a] && a;
      if ((l && u[l] && (r || u[l].data)) || n !== C || "string" != typeof t)
        return (
          l || (l = s ? (e[a] = ee.pop() || ke.guid++) : a),
          u[l] || (u[l] = s ? {} : { toJSON: ke.noop }),
          ("object" == typeof t || "function" == typeof t) &&
            (r
              ? (u[l] = ke.extend(u[l], t))
              : (u[l].data = ke.extend(u[l].data, t))),
          (o = u[l]),
          r || (o.data || (o.data = {}), (o = o.data)),
          n !== C && (o[ke.camelCase(t)] = n),
          "string" == typeof t
            ? null == (i = o[t]) && (i = o[ke.camelCase(t)])
            : (i = o),
          i
        );
    }
  }
  function n(e, t, n) {
    if (ke.acceptData(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? ke.cache : e,
        s = o ? e[ke.expando] : ke.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          ke.isArray(t)
            ? (t = t.concat(ke.map(t, ke.camelCase)))
            : t in r
            ? (t = [t])
            : (t = (t = ke.camelCase(t)) in r ? [t] : t.split(" ")),
            (i = t.length);
          for (; i--; ) delete r[t[i]];
          if (n ? !l(r) : !ke.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, l(a[s]))) &&
          (o
            ? ke.cleanData([e], !0)
            : ke.support.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = null));
      }
    }
  }
  function u(e, t, n) {
    if (n === C && 1 === e.nodeType) {
      var r = "data-" + t.replace(Se, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : Ee.test(n)
                ? ke.parseJSON(n)
                : n));
        } catch (Y) {}
        ke.data(e, t, n);
      } else n = C;
    }
    return n;
  }
  function l(e) {
    var t;
    for (t in e)
      if (("data" !== t || !ke.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  function i() {
    return !0;
  }
  function Ne() {
    return !1;
  }
  function t() {
    try {
      return J.activeElement;
    } catch (h) {}
  }
  function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function a(e, n, r) {
    if (ke.isFunction(n))
      return ke.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== r;
      });
    if (n.nodeType)
      return ke.grep(e, function (e) {
        return (e === n) !== r;
      });
    if ("string" == typeof n) {
      if (We.test(n)) return ke.filter(n, e, r);
      n = ke.filter(n, e);
    }
    return ke.grep(e, function (e) {
      return 0 <= ke.inArray(e, n) !== r;
    });
  }
  function m(e) {
    var t = Ue.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function c(e, t) {
    return ke.nodeName(e, "table") &&
      ke.nodeName(1 === t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function g(e) {
    return (e.type = (null !== ke.find.attr(e, "type")) + "/" + e.type), e;
  }
  function y(e) {
    var t = it.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function v(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      ke._data(n, "globalEval", !t || ke._data(t[r], "globalEval"));
  }
  function f(e, t) {
    if (1 === t.nodeType && ke.hasData(e)) {
      var n,
        r,
        i,
        o = ke._data(e),
        a = ke._data(t, o),
        s = o.events;
      if (s)
        for (n in (delete a.handle, (a.events = {}), s))
          for (r = 0, i = s[n].length; r < i; r++) ke.event.add(t, n, s[n][r]);
      a.data && (a.data = ke.extend({}, a.data));
    }
  }
  function p(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (
        ((n = t.nodeName.toLowerCase()),
        !ke.support.noCloneEvent && t[ke.expando])
      ) {
        for (r in (i = ke._data(t)).events) ke.removeEvent(t, r, i.handle);
        t.removeAttribute(ke.expando);
      }
      "script" === n && t.text !== e.text
        ? ((g(t).text = e.text), y(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          ke.support.html5Clone &&
            e.innerHTML &&
            !ke.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && tt.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
  }
  function b(e, t) {
    var n,
      r,
      i = 0,
      o =
        typeof e.getElementsByTagName !== V
          ? e.getElementsByTagName(t || "*")
          : typeof e.querySelectorAll !== V
          ? e.querySelectorAll(t || "*")
          : C;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || ke.nodeName(r, t) ? o.push(r) : ke.merge(o, b(r, t));
    return t === C || (t && ke.nodeName(e, t)) ? ke.merge([e], o) : o;
  }
  function x(e) {
    tt.test(e.type) && (e.defaultChecked = e.checked);
  }
  function d(e, t) {
    if (t in e) return t;
    for (
      var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ct.length;
      i--;

    )
      if ((t = Ct[i] + n) in e) return t;
    return r;
  }
  function T(e, t) {
    return (
      (e = t || e),
      "none" === ke.css(e, "display") || !ke.contains(e.ownerDocument, e)
    );
  }
  function w(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
      (r = e[a]).style &&
        ((o[a] = ke._data(r, "olddisplay")),
        (n = r.style.display),
        t
          ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display &&
              T(r) &&
              (o[a] = ke._data(r, "olddisplay", S(r.nodeName))))
          : o[a] ||
            ((i = T(r)),
            ((n && "none" !== n) || !i) &&
              ke._data(r, "olddisplay", i ? n : ke.css(r, "display"))));
    for (a = 0; a < s; a++)
      (r = e[a]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function N(e, t, n) {
    var r = gt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function k(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += ke.css(e, n + wt[o], !0, i)),
        r
          ? ("content" === n && (a -= ke.css(e, "padding" + wt[o], !0, i)),
            "margin" !== n &&
              (a -= ke.css(e, "border" + wt[o] + "Width", !0, i)))
          : ((a += ke.css(e, "padding" + wt[o], !0, i)),
            "padding" !== n &&
              (a += ke.css(e, "border" + wt[o] + "Width", !0, i)));
    return a;
  }
  function E(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = lt(e),
      a =
        ke.support.boxSizing && "border-box" === ke.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (
        (((i = ct(e, t, o)) < 0 || null == i) && (i = e.style[t]), yt.test(i))
      )
        return i;
      (r = a && (ke.support.boxSizingReliable || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function S(e) {
    var t = J,
      n = bt[e];
    return (
      n ||
        (("none" !== (n = A(e, t)) && n) ||
          ((t = (
            (ut = (
              ut ||
              ke("<iframe frameborder='0' width='0' height='0'/>").css(
                "cssText",
                "display:block !important"
              )
            ).appendTo(t.documentElement))[0].contentWindow ||
            ut[0].contentDocument
          ).document).write("<!doctype html><html><body>"),
          t.close(),
          (n = A(e, t)),
          ut.detach()),
        (bt[e] = n)),
      n
    );
  }
  function A(e, t) {
    var n = ke(t.createElement(e)).appendTo(t.body),
      r = ke.css(n[0], "display");
    return n.remove(), r;
  }
  function j(n, e, r, i) {
    var t;
    if (ke.isArray(e))
      ke.each(e, function (e, t) {
        r || kt.test(n)
          ? i(n, t)
          : j(n + "[" + ("object" == typeof t ? e : "") + "]", t, r, i);
      });
    else if (r || "object" !== ke.type(e)) i(n, e);
    else for (t in e) j(n + "[" + t + "]", e[t], r, i);
  }
  function D(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(ce) || [];
      if (ke.isFunction(t))
        for (; (n = i[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function L(t, i, o, a) {
    function s(e) {
      var r;
      return (
        (u[e] = !0),
        ke.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || l || u[n]
            ? l
              ? !(r = n)
              : C
            : (i.dataTypes.unshift(n), s(n), !1);
        }),
        r
      );
    }
    var u = {},
      l = t === Wt;
    return s(i.dataTypes[0]) || (!u["*"] && s("*"));
  }
  function H(e, t) {
    var n,
      r,
      i = ke.ajaxSettings.flatOptions || {};
    for (r in t) t[r] !== C && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && ke.extend(!0, e, n), e;
  }
  function q(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        i === C && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (a in s)
        if (s[a] && s[a].test(i)) {
          u.unshift(a);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (a in n) {
        if (!u[0] || e.converters[a + " " + u[0]]) {
          o = a;
          break;
        }
        r || (r = a);
      }
      o = o || r;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : C;
  }
  function _(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (i in l)
              if (
                (s = i.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (ee) {
                return {
                  state: "parsererror",
                  error: a ? ee : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  function M() {
    try {
      return new h.XMLHttpRequest();
    } catch (C) {}
  }
  function O() {
    try {
      return new h.ActiveXObject("Microsoft.XMLHTTP");
    } catch (C) {}
  }
  function F() {
    return (
      setTimeout(function () {
        Gt = C;
      }),
      (Gt = ke.now())
    );
  }
  function B(e, t, n) {
    for (
      var r, i = (nn[t] || []).concat(nn["*"]), o = 0, a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function P(o, e, t) {
    var n,
      a,
      r = 0,
      i = tn.length,
      s = ke.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Gt || F(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i ? t : (s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: ke.extend({}, e),
        opts: ke.extend(!0, { specialEasing: {} }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Gt || F(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ke.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? s.resolveWith(o, [l, e]) : s.rejectWith(o, [l, e]), this;
        },
      }),
      c = l.props;
    for (R(c, l.opts.specialEasing); r < i; r++)
      if ((n = tn[r].call(l, o, c, l.opts))) return n;
    return (
      ke.map(c, B, l),
      ke.isFunction(l.opts.start) && l.opts.start.call(o, l),
      ke.fx.timer(ke.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  function R(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((i = t[(r = ke.camelCase(n))]),
        (o = e[n]),
        ke.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = ke.cssHooks[r]) && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete e[r], o))
          n in e || ((e[n] = o[n]), (t[n] = i));
      else t[r] = i;
  }
  function $(t, e, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l = this,
      c = {},
      f = t.style,
      p = t.nodeType && T(t),
      d = ke._data(t, "fxshow");
    for (r in (n.queue ||
      (null == (s = ke._queueHooks(t, "fx")).unqueued &&
        ((s.unqueued = 0),
        (u = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || u();
        })),
      s.unqueued++,
      l.always(function () {
        l.always(function () {
          s.unqueued--, ke.queue(t, "fx").length || s.empty.fire();
        });
      })),
    1 === t.nodeType &&
      ("height" in e || "width" in e) &&
      ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
      "inline" === ke.css(t, "display") &&
        "none" === ke.css(t, "float") &&
        (ke.support.inlineBlockNeedsLayout && "inline" !== S(t.nodeName)
          ? (f.zoom = 1)
          : (f.display = "inline-block"))),
    n.overflow &&
      ((f.overflow = "hidden"),
      ke.support.shrinkWrapBlocks ||
        l.always(function () {
          (f.overflow = n.overflow[0]),
            (f.overflowX = n.overflow[1]),
            (f.overflowY = n.overflow[2]);
        })),
    e))
      if (((i = e[r]), Kt.exec(i))) {
        if (
          (delete e[r], (o = o || "toggle" === i), i === (p ? "hide" : "show"))
        )
          continue;
        c[r] = (d && d[r]) || ke.style(t, r);
      }
    if (!ke.isEmptyObject(c))
      for (r in (d
        ? "hidden" in d && (p = d.hidden)
        : (d = ke._data(t, "fxshow", {})),
      o && (d.hidden = !p),
      p
        ? ke(t).show()
        : l.done(function () {
            ke(t).hide();
          }),
      l.done(function () {
        var e;
        for (e in (ke._removeData(t, "fxshow"), c)) ke.style(t, e, c[e]);
      }),
      c))
        (a = B(p ? d[r] : 0, r, l)),
          r in d ||
            ((d[r] = a.start),
            p &&
              ((a.end = a.start),
              (a.start = "width" === r || "height" === r ? 1 : 0)));
  }
  function W(e, t, n, r, i) {
    return new W.prototype.init(e, t, n, r, i);
  }
  function I(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = wt[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function z(e) {
    return ke.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var X,
    U,
    V = typeof C,
    Y = h.location,
    J = h.document,
    G = J.documentElement,
    Q = h.jQuery,
    K = h.$,
    Z = {},
    ee = [],
    te = "1.10.2",
    ne = ee.concat,
    re = ee.push,
    ie = ee.slice,
    oe = ee.indexOf,
    ae = Z.toString,
    se = Z.hasOwnProperty,
    ue = te.trim,
    ke = function (e, t) {
      return new ke.fn.init(e, t, U);
    },
    le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ce = /\S+/g,
    fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    he = /^[\],:{}\s]*$/,
    me = /(?:^|:|,)(?:\s*\[)+/g,
    ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    ve = /^-ms-/,
    be = /-([\da-z])/gi,
    xe = function (e, t) {
      return t.toUpperCase();
    },
    Te = function (e) {
      (J.addEventListener ||
        "load" === e.type ||
        "complete" === J.readyState) &&
        (we(), ke.ready());
    },
    we = function () {
      J.addEventListener
        ? (J.removeEventListener("DOMContentLoaded", Te, !1),
          h.removeEventListener("load", Te, !1))
        : (J.detachEvent("onreadystatechange", Te),
          h.detachEvent("onload", Te));
    };
  (ke.fn = ke.prototype =
    {
      jquery: te,
      constructor: ke,
      init: function (e, t, n) {
        var r, i;
        if (!e) return this;
        if ("string" != typeof e)
          return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : ke.isFunction(e)
            ? n.ready(e)
            : (e.selector !== C &&
                ((this.selector = e.selector), (this.context = e.context)),
              ke.makeArray(e, this));
        if (
          !(r =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            3 <= e.length
              ? [null, e, null]
              : pe.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof ke ? t[0] : t),
            ke.merge(
              this,
              ke.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : J, !0)
            ),
            de.test(r[1]) && ke.isPlainObject(t))
          )
            for (r in t)
              ke.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        if ((i = J.getElementById(r[2])) && i.parentNode) {
          if (i.id !== r[2]) return n.find(e);
          (this.length = 1), (this[0] = i);
        }
        return (this.context = J), (this.selector = e), this;
      },
      selector: "",
      length: 0,
      toArray: function () {
        return ie.call(this);
      },
      get: function (e) {
        return null == e
          ? this.toArray()
          : e < 0
          ? this[this.length + e]
          : this[e];
      },
      pushStack: function (e) {
        var t = ke.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return ke.each(this, e, t);
      },
      ready: function (e) {
        return ke.ready.promise().done(e), this;
      },
      slice: function () {
        return this.pushStack(ie.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      map: function (n) {
        return this.pushStack(
          ke.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: re,
      sort: [].sort,
      splice: [].splice,
    }),
    (ke.fn.init.prototype = ke.fn),
    (ke.extend = ke.fn.extend =
      function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u = e || {},
          l = 1,
          c = arguments.length,
          f = !1;
        for (
          "boolean" == typeof u && ((f = u), (u = t || {}), (l = 2)),
            "object" == typeof u || ke.isFunction(u) || (u = {}),
            c === l && ((u = this), --l);
          l < c;
          l++
        )
          if (null != (a = arguments[l]))
            for (o in a)
              (n = u[o]),
                u !== (i = a[o]) &&
                  (f && i && (ke.isPlainObject(i) || (r = ke.isArray(i)))
                    ? (r
                        ? ((r = !1), (s = n && ke.isArray(n) ? n : []))
                        : (s = n && ke.isPlainObject(n) ? n : {}),
                      (u[o] = ke.extend(f, s, i)))
                    : i !== C && (u[o] = i));
        return u;
      }),
    ke.extend({
      expando: "jQuery" + (te + Math.random()).replace(/\D/g, ""),
      noConflict: function (e) {
        return (
          h.$ === ke && (h.$ = K), e && h.jQuery === ke && (h.jQuery = Q), ke
        );
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? ke.readyWait++ : ke.ready(!0);
      },
      ready: function (e) {
        if (!0 === e ? !--ke.readyWait : !ke.isReady) {
          if (!J.body) return setTimeout(ke.ready);
          ((ke.isReady = !0) !== e && 0 < --ke.readyWait) ||
            (X.resolveWith(J, [ke]),
            ke.fn.trigger && ke(J).trigger("ready").off("ready"));
        }
      },
      isFunction: function (e) {
        return "function" === ke.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === ke.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? Z[ae.call(e)] || "object"
          : typeof e;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== ke.type(e) || e.nodeType || ke.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !se.call(e, "constructor") &&
            !se.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (U) {
          return !1;
        }
        if (ke.support.ownLast) for (t in e) return se.call(e, t);
        for (t in e);
        return t === C || se.call(e, t);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      error: function (e) {
        throw Error(e);
      },
      parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || J);
        var r = de.exec(e),
          i = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = ke.buildFragment([e], t, i)),
            i && ke(i).remove(),
            ke.merge([], r.childNodes));
      },
      parseJSON: function (e) {
        return h.JSON && h.JSON.parse
          ? h.JSON.parse(e)
          : null === e
          ? e
          : "string" == typeof e &&
            (e = ke.trim(e)) &&
            he.test(e.replace(ge, "@").replace(ye, "]").replace(me, ""))
          ? Function("return " + e)()
          : (ke.error("Invalid JSON: " + e), C);
      },
      parseXML: function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          h.DOMParser
            ? (t = new DOMParser().parseFromString(e, "text/xml"))
            : (((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
              t.loadXML(e));
        } catch (Y) {
          t = C;
        }
        return (
          (t &&
            t.documentElement &&
            !t.getElementsByTagName("parsererror").length) ||
            ke.error("Invalid XML: " + e),
          t
        );
      },
      noop: function () {},
      globalEval: function (e) {
        e &&
          ke.trim(e) &&
          (
            h.execScript ||
            function (e) {
              h.eval.call(h, e);
            }
          )(e);
      },
      camelCase: function (e) {
        return e.replace(ve, "ms-").replace(be, xe);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, n) {
        var r = 0,
          i = e.length,
          o = s(e);
        if (n) {
          if (o) for (; r < i && !1 !== t.apply(e[r], n); r++);
          else for (r in e) if (!1 === t.apply(e[r], n)) break;
        } else if (o) for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim:
        ue && !ue.call("\ufeff\xa0")
          ? function (e) {
              return null == e ? "" : ue.call(e);
            }
          : function (e) {
              return null == e ? "" : (e + "").replace(fe, "");
            },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (s(Object(e))
              ? ke.merge(n, "string" == typeof e ? [e] : e)
              : re.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (oe) return oe.call(t, e, n);
          for (
            r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
            n < r;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        var n = t.length,
          r = e.length,
          i = 0;
        if ("number" == typeof n) for (; i < n; i++) e[r++] = t[i];
        else for (; t[i] !== C; ) e[r++] = t[i++];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        var r = [],
          i = 0,
          o = e.length;
        for (n = !!n; i < o; i++) n !== !!t(e[i], i) && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i = 0,
          o = e.length,
          a = [];
        if (s(e))
          for (; i < o; i++) null != (r = t(e[i], i, n)) && (a[a.length] = r);
        else for (i in e) null != (r = t(e[i], i, n)) && (a[a.length] = r);
        return ne.apply([], a);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return (
          "string" == typeof t && ((i = e[t]), (t = e), (e = i)),
          ke.isFunction(e)
            ? ((n = ie.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, n.concat(ie.call(arguments)));
              }).guid = e.guid =
                e.guid || ke.guid++),
              r)
            : C
        );
      },
      access: function (e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === ke.type(n))
          for (s in ((i = !0), n)) ke.access(e, t, s, n[s], !0, o, a);
        else if (
          r !== C &&
          ((i = !0),
          ke.isFunction(r) || (a = !0),
          l &&
            (a
              ? (t.call(e, r), (t = null))
              : ((l = t),
                (t = function (e, t, n) {
                  return l.call(ke(e), n);
                }))),
          t)
        )
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      now: function () {
        return new Date().getTime();
      },
      swap: function (e, t, n, r) {
        var i,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
        return i;
      },
    }),
    (ke.ready.promise = function (e) {
      if (!X)
        if (((X = ke.Deferred()), "complete" === J.readyState))
          setTimeout(ke.ready);
        else if (J.addEventListener)
          J.addEventListener("DOMContentLoaded", Te, !1),
            h.addEventListener("load", Te, !1);
        else {
          J.attachEvent("onreadystatechange", Te), h.attachEvent("onload", Te);
          var t = !1;
          try {
            t = null == h.frameElement && J.documentElement;
          } catch (V) {}
          t &&
            t.doScroll &&
            (function Y() {
              if (!ke.isReady) {
                try {
                  t.doScroll("left");
                } catch (h) {
                  return setTimeout(Y, 50);
                }
                we(), ke.ready();
              }
            })();
        }
      return X.promise(e);
    }),
    ke.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (U = ke(J)),
    (function (n, i) {
      function T(e, t, n, r) {
        var i, o, a, s, u, l, c, f, p, d;
        if (
          ((t ? t.ownerDocument || t : R) !== H && L(t),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (s = (t = t || H).nodeType) && 9 !== s) return [];
        if (_ && !r) {
          if ((i = ve.exec(e)))
            if ((a = i[1])) {
              if (9 === s) {
                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                if (o.id === a) return n.push(o), n;
              } else if (
                t.ownerDocument &&
                (o = t.ownerDocument.getElementById(a)) &&
                B(t, o) &&
                o.id === a
              )
                return n.push(o), n;
            } else {
              if (i[2]) return ee.apply(n, t.getElementsByTagName(e)), n;
              if (
                (a = i[3]) &&
                C.getElementsByClassName &&
                t.getElementsByClassName
              )
                return ee.apply(n, t.getElementsByClassName(a)), n;
            }
          if (C.qsa && (!M || !M.test(e))) {
            if (
              ((f = c = P),
              (p = t),
              (d = 9 === s && e),
              1 === s && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                l = h(e),
                  (c = t.getAttribute("id"))
                    ? (f = c.replace(Te, "\\$&"))
                    : t.setAttribute("id", f),
                  f = "[id='" + f + "'] ",
                  u = l.length;
                u--;

              )
                l[u] = f + m(l[u]);
              (p = (pe.test(e) && t.parentNode) || t), (d = l.join(","));
            }
            if (d)
              try {
                return ee.apply(n, p.querySelectorAll(d)), n;
              } catch ($) {
              } finally {
                c || t.removeAttribute("id");
              }
          }
        }
        return y(e.replace(le, "$1"), t, n, r);
      }
      function e() {
        function n(e, t) {
          return (
            r.push((e += " ")) > k.cacheLength && delete n[r.shift()],
            (n[e] = t)
          );
        }
        var r = [];
        return n;
      }
      function u(e) {
        return (e[P] = !0), e;
      }
      function r(e) {
        var t = H.createElement("div");
        try {
          return !!e(t);
        } catch (x) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function t(e, t) {
        for (var n = e.split("|"), r = e.length; r--; ) k.attrHandle[n[r]] = t;
      }
      function l(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || J) - (~e.sourceIndex || J);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function o(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function a(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function s(a) {
        return u(function (o) {
          return (
            (o = +o),
            u(function (e, t) {
              for (var n, r = a([], e.length, o), i = r.length; i--; )
                e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function c() {}
      function h(e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = z[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (a = e, s = [], u = k.preFilter; a; ) {
          for (o in ((!n || (r = ce.exec(a))) &&
            (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
          (n = !1),
          (r = fe.exec(a)) &&
            ((n = r.shift()),
            i.push({ value: n, type: r[0].replace(le, " ") }),
            (a = a.slice(n.length))),
          k.filter))
            !(r = ge[o].exec(a)) ||
              (u[o] && !(r = u[o](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: o, matches: r }),
              (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? T.error(e) : z(e, s).slice(0);
      }
      function m(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function f(s, e, t) {
        var u = e.dir,
          l = t && "parentNode" === u,
          c = W++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[u]); ) if (1 === e.nodeType || l) return s(e, t, n);
            }
          : function (e, t, n) {
              var r,
                i,
                o,
                a = $ + " " + c;
              if (n) {
                for (; (e = e[u]); )
                  if ((1 === e.nodeType || l) && s(e, t, n)) return !0;
              } else
                for (; (e = e[u]); )
                  if (1 === e.nodeType || l)
                    if ((i = (o = e[P] || (e[P] = {}))[u]) && i[0] === a) {
                      if (!0 === (r = i[1]) || r === N) return !0 === r;
                    } else if (
                      (((i = o[u] = [a])[1] = s(e, t, n) || N), !0 === i[1])
                    )
                      return !0;
            };
      }
      function p(i) {
        return 1 < i.length
          ? function (e, t, n) {
              for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
              return !0;
            }
          : i[0];
      }
      function w(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
          (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
        return a;
      }
      function v(d, h, m, g, y, e) {
        return (
          g && !g[P] && (g = v(g)),
          y && !y[P] && (y = v(y, e)),
          u(function (e, t, n, r) {
            var i,
              o,
              a,
              s = [],
              u = [],
              l = t.length,
              c = e || b(h || "*", n.nodeType ? [n] : n, []),
              f = !d || (!e && h) ? c : w(c, s, d, n, r),
              p = m ? (y || (e ? d : l || g) ? [] : t) : f;
            if ((m && m(f, p, n, r), g))
              for (i = w(p, u), g(i, [], n, r), o = i.length; o--; )
                (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
            if (e) {
              if (y || d) {
                if (y) {
                  for (i = [], o = p.length; o--; )
                    (a = p[o]) && i.push((f[o] = a));
                  y(null, (p = []), i, r);
                }
                for (o = p.length; o--; )
                  (a = p[o]) &&
                    -1 < (i = y ? ne.call(e, a) : s[o]) &&
                    (e[i] = !(t[i] = a));
              }
            } else (p = w(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : ee.apply(t, p);
          })
        );
      }
      function d(e) {
        for (
          var r,
            t,
            n,
            i = e.length,
            o = k.relative[e[0].type],
            a = o || k.relative[" "],
            s = o ? 1 : 0,
            u = f(
              function (e) {
                return e === r;
              },
              a,
              !0
            ),
            l = f(
              function (e) {
                return -1 < ne.call(r, e);
              },
              a,
              !0
            ),
            c = [
              function (e, t, n) {
                return (
                  (!o && (n || t !== j)) ||
                  ((r = t).nodeType ? u(e, t, n) : l(e, t, n))
                );
              },
            ];
          s < i;
          s++
        )
          if ((t = k.relative[e[s].type])) c = [f(p(c), t)];
          else {
            if ((t = k.filter[e[s].type].apply(null, e[s].matches))[P]) {
              for (n = ++s; n < i && !k.relative[e[n].type]; n++);
              return v(
                1 < s && p(c),
                1 < s &&
                  m(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(le, "$1"),
                t,
                s < n && d(e.slice(s, n)),
                n < i && d((e = e.slice(n))),
                n < i && m(e)
              );
            }
            c.push(t);
          }
        return p(c);
      }
      function g(g, y) {
        var v = 0,
          b = 0 < y.length,
          x = 0 < g.length,
          e = function (e, t, n, r, i) {
            var o,
              a,
              s,
              u = [],
              l = 0,
              c = "0",
              f = e && [],
              p = null != i,
              d = j,
              h = e || (x && k.find.TAG("*", (i && t.parentNode) || t)),
              m = ($ += null == d ? 1 : Math.random() || 0.1);
            for (p && ((j = t !== H && t), (N = v)); null != (o = h[c]); c++) {
              if (x && o) {
                for (a = 0; (s = g[a++]); )
                  if (s(o, t, n)) {
                    r.push(o);
                    break;
                  }
                p && (($ = m), (N = ++v));
              }
              b && ((o = !s && o) && l--, e && f.push(o));
            }
            if (((l += c), b && c !== l)) {
              for (a = 0; (s = y[a++]); ) s(f, u, t, n);
              if (e) {
                if (0 < l) for (; c--; ) f[c] || u[c] || (u[c] = K.call(r));
                u = w(u);
              }
              ee.apply(r, u),
                p && !e && 0 < u.length && 1 < l + y.length && T.uniqueSort(r);
            }
            return p && (($ = m), (j = d)), f;
          };
        return b ? u(e) : e;
      }
      function b(e, t, n) {
        for (var r = 0, i = t.length; r < i; r++) T(e, t[r], n);
        return n;
      }
      function y(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = h(e);
        if (!r && 1 === l.length) {
          if (
            2 < (o = l[0] = l[0].slice(0)).length &&
            "ID" === (a = o[0]).type &&
            C.getById &&
            9 === t.nodeType &&
            _ &&
            k.relative[o[1].type]
          ) {
            if (!(t = (k.find.ID(a.matches[0].replace(we, Ce), t) || [])[0]))
              return n;
            e = e.slice(o.shift().value.length);
          }
          for (
            i = ge.needsContext.test(e) ? 0 : o.length;
            i-- && ((a = o[i]), !k.relative[(s = a.type)]);

          )
            if (
              (u = k.find[s]) &&
              (r = u(
                a.matches[0].replace(we, Ce),
                (pe.test(o[0].type) && t.parentNode) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && m(o))))
                return ee.apply(n, r), n;
              break;
            }
        }
        return A(e, l)(r, t, !_, n, pe.test(e)), n;
      }
      var x,
        C,
        N,
        k,
        E,
        S,
        A,
        j,
        D,
        L,
        H,
        q,
        _,
        M,
        O,
        F,
        B,
        P = "sizzle" + -new Date(),
        R = n.document,
        $ = 0,
        W = 0,
        I = e(),
        z = e(),
        X = e(),
        U = !1,
        V = function (e, t) {
          return e === t && (U = !0), 0;
        },
        Y = typeof i,
        J = 1 << 31,
        G = {}.hasOwnProperty,
        Q = [],
        K = Q.pop,
        Z = Q.push,
        ee = Q.push,
        te = Q.slice,
        ne =
          Q.indexOf ||
          function (e) {
            for (var t = 0, n = this.length; t < n; t++)
              if (this[t] === e) return t;
            return -1;
          },
        re =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ie = "[\\x20\\t\\r\\n\\f]",
        oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ae = oe.replace("w", "w#"),
        se =
          "\\[" +
          ie +
          "*(" +
          oe +
          ")" +
          ie +
          "*(?:([*^$|!~]?=)" +
          ie +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          ae +
          ")|)|)" +
          ie +
          "*\\]",
        ue =
          ":(" +
          oe +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          se.replace(3, 8) +
          ")*)|.*)\\)|)",
        le = RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
        ce = RegExp("^" + ie + "*," + ie + "*"),
        fe = RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
        pe = RegExp(ie + "*[+~]"),
        de = RegExp("=" + ie + "*([^\\]'\"]*)" + ie + "*\\]", "g"),
        he = RegExp(ue),
        me = RegExp("^" + ae + "$"),
        ge = {
          ID: RegExp("^#(" + oe + ")"),
          CLASS: RegExp("^\\.(" + oe + ")"),
          TAG: RegExp("^(" + oe.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + se),
          PSEUDO: RegExp("^" + ue),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ie +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ie +
              "*(?:([+-]|)" +
              ie +
              "*(\\d+)|))" +
              ie +
              "*\\)|)",
            "i"
          ),
          bool: RegExp("^(?:" + re + ")$", "i"),
          needsContext: RegExp(
            "^" +
              ie +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ie +
              "*((?:-\\d)?\\d*)" +
              ie +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ye = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /^(?:input|select|textarea|button)$/i,
        xe = /^h\d$/i,
        Te = /'|\\/g,
        we = RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
        Ce = function (e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n
            ? t
            : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode(55296 | (r >> 10), 56320 | (1023 & r));
        };
      try {
        ee.apply((Q = te.call(R.childNodes)), R.childNodes),
          Q[R.childNodes.length].nodeType;
      } catch (Ne) {
        ee = {
          apply: Q.length
            ? function (e, t) {
                Z.apply(e, te.call(t));
              }
            : function (e, t) {
                for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                e.length = n - 1;
              },
        };
      }
      for (x in ((S = T.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (C = T.support = {}),
      (L = T.setDocument =
        function (e) {
          var u = e ? e.ownerDocument || e : R,
            t = u.defaultView;
          return u !== H && 9 === u.nodeType && u.documentElement
            ? ((q = (H = u).documentElement),
              (_ = !S(u)),
              t &&
                t.attachEvent &&
                t !== t.top &&
                t.attachEvent("onbeforeunload", function () {
                  L();
                }),
              (C.attributes = r(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (C.getElementsByTagName = r(function (e) {
                return (
                  e.appendChild(u.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (C.getElementsByClassName = r(function (e) {
                return (
                  (e.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = "i"),
                  2 === e.getElementsByClassName("i").length
                );
              })),
              (C.getById = r(function (e) {
                return (
                  (q.appendChild(e).id = P),
                  !u.getElementsByName || !u.getElementsByName(P).length
                );
              })),
              C.getById
                ? ((k.find.ID = function (e, t) {
                    if (typeof t.getElementById !== Y && _) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (k.filter.ID = function (e) {
                    var t = e.replace(we, Ce);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete k.find.ID,
                  (k.filter.ID = function (e) {
                    var n = e.replace(we, Ce);
                    return function (e) {
                      var t =
                        typeof e.getAttributeNode !== Y &&
                        e.getAttributeNode("id");
                      return t && t.value === n;
                    };
                  })),
              (k.find.TAG = C.getElementsByTagName
                ? function (e, t) {
                    return typeof t.getElementsByTagName !== Y
                      ? t.getElementsByTagName(e)
                      : i;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }),
              (k.find.CLASS =
                C.getElementsByClassName &&
                function (e, t) {
                  return typeof t.getElementsByClassName !== Y && _
                    ? t.getElementsByClassName(e)
                    : i;
                }),
              (O = []),
              (M = []),
              (C.qsa = ye.test(u.querySelectorAll)) &&
                (r(function (e) {
                  (e.innerHTML =
                    "<select><option selected=''></option></select>"),
                    e.querySelectorAll("[selected]").length ||
                      M.push("\\[" + ie + "*(?:value|" + re + ")"),
                    e.querySelectorAll(":checked").length || M.push(":checked");
                }),
                r(function (e) {
                  var t = u.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("t", ""),
                    e.querySelectorAll("[t^='']").length &&
                      M.push("[*^$]=" + ie + "*(?:''|\"\")"),
                    e.querySelectorAll(":enabled").length ||
                      M.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    M.push(",.*:");
                })),
              (C.matchesSelector = ye.test(
                (F =
                  q.webkitMatchesSelector ||
                  q.mozMatchesSelector ||
                  q.oMatchesSelector ||
                  q.msMatchesSelector)
              )) &&
                r(function (e) {
                  (C.disconnectedMatch = F.call(e, "div")),
                    F.call(e, "[s!='']:x"),
                    O.push("!=", ue);
                }),
              (M = M.length && RegExp(M.join("|"))),
              (O = O.length && RegExp(O.join("|"))),
              (B =
                ye.test(q.contains) || q.compareDocumentPosition
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (V = q.compareDocumentPosition
                ? function (e, t) {
                    if (e === t) return (U = !0), 0;
                    var n =
                      t.compareDocumentPosition &&
                      e.compareDocumentPosition &&
                      e.compareDocumentPosition(t);
                    return n
                      ? 1 & n ||
                        (!C.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === u || B(R, e)
                          ? -1
                          : t === u || B(R, t)
                          ? 1
                          : D
                          ? ne.call(D, e) - ne.call(D, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1
                      : e.compareDocumentPosition
                      ? -1
                      : 1;
                  }
                : function (e, t) {
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (e === t) return (U = !0), 0;
                    if (!i || !o)
                      return e === u
                        ? -1
                        : t === u
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : D
                        ? ne.call(D, e) - ne.call(D, t)
                        : 0;
                    if (i === o) return l(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (; a[r] === s[r]; ) r++;
                    return r
                      ? l(a[r], s[r])
                      : a[r] === R
                      ? -1
                      : s[r] === R
                      ? 1
                      : 0;
                  }),
              u)
            : H;
        }),
      (T.matches = function (e, t) {
        return T(e, null, null, t);
      }),
      (T.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== H && L(e),
          (t = t.replace(de, "='$1']")),
          !(!C.matchesSelector || !_ || (O && O.test(t)) || (M && M.test(t))))
        )
          try {
            var n = F.call(e, t);
            if (
              n ||
              C.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (N) {}
        return 0 < T(t, H, null, [e]).length;
      }),
      (T.contains = function (e, t) {
        return (e.ownerDocument || e) !== H && L(e), B(e, t);
      }),
      (T.attr = function (e, t) {
        (e.ownerDocument || e) !== H && L(e);
        var n = k.attrHandle[t.toLowerCase()],
          r = n && G.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !_) : i;
        return r === i
          ? C.attributes || !_
            ? e.getAttribute(t)
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null
          : r;
      }),
      (T.error = function (e) {
        throw Error("Syntax error, unrecognized expression: " + e);
      }),
      (T.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((U = !C.detectDuplicates),
          (D = !C.sortStable && e.slice(0)),
          e.sort(V),
          U)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return e;
      }),
      (E = T.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r]); r++) n += E(t);
          return n;
        }),
      ((k = T.selectors =
        {
          cacheLength: 50,
          createPseudo: u,
          match: ge,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(we, Ce)),
                (e[3] = (e[4] || e[5] || "").replace(we, Ce)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || T.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && T.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[5] && e[2];
              return ge.CHILD.test(e[0])
                ? null
                : (e[3] && e[4] !== i
                    ? (e[2] = e[4])
                    : n &&
                      he.test(n) &&
                      (t = h(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(we, Ce).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = I[e + " "];
              return (
                t ||
                ((t = RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) &&
                  I(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== Y &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, r, i) {
              return function (e) {
                var t = T.attr(e, n);
                return null == t
                  ? "!=" === r
                  : !r ||
                      ((t += ""),
                      "=" === r
                        ? t === i
                        : "!=" === r
                        ? t !== i
                        : "^=" === r
                        ? i && 0 === t.indexOf(i)
                        : "*=" === r
                        ? i && -1 < t.indexOf(i)
                        : "$=" === r
                        ? i && t.slice(-i.length) === i
                        : "~=" === r
                        ? -1 < (" " + t + " ").indexOf(i)
                        : "|=" === r &&
                          (t === i || t.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (d, e, t, h, m) {
              var g = "nth" !== d.slice(0, 3),
                y = "last" !== d.slice(-4),
                v = "of-type" === e;
              return 1 === h && 0 === m
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l = g !== y ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      f = v && e.nodeName.toLowerCase(),
                      p = !n && !v;
                    if (c) {
                      if (g) {
                        for (; l; ) {
                          for (o = e; (o = o[l]); )
                            if (
                              v
                                ? o.nodeName.toLowerCase() === f
                                : 1 === o.nodeType
                            )
                              return !1;
                          u = l = "only" === d && !u && "nextSibling";
                        }
                        return !0;
                      }
                      if (((u = [y ? c.firstChild : c.lastChild]), y && p)) {
                        for (
                          s =
                            (r = (i = c[P] || (c[P] = {}))[d] || [])[0] === $ &&
                            r[1],
                            a = r[0] === $ && r[2],
                            o = s && c.childNodes[s];
                          (o = (++s && o && o[l]) || (a = s = 0) || u.pop());

                        )
                          if (1 === o.nodeType && ++a && o === e) {
                            i[d] = [$, s, a];
                            break;
                          }
                      } else if (
                        p &&
                        (r = (e[P] || (e[P] = {}))[d]) &&
                        r[0] === $
                      )
                        a = r[1];
                      else
                        for (
                          ;
                          (o = (++s && o && o[l]) || (a = s = 0) || u.pop()) &&
                          ((v
                            ? o.nodeName.toLowerCase() !== f
                            : 1 !== o.nodeType) ||
                            !++a ||
                            (p && ((o[P] || (o[P] = {}))[d] = [$, a]),
                            o !== e));

                        );
                      return (a -= m) === h || (0 == a % h && 0 <= a / h);
                    }
                  };
            },
            PSEUDO: function (e, o) {
              var t,
                a =
                  k.pseudos[e] ||
                  k.setFilters[e.toLowerCase()] ||
                  T.error("unsupported pseudo: " + e);
              return a[P]
                ? a(o)
                : 1 < a.length
                ? ((t = [e, e, "", o]),
                  k.setFilters.hasOwnProperty(e.toLowerCase())
                    ? u(function (e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                          e[(n = ne.call(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
            },
          },
          pseudos: {
            not: u(function (e) {
              var r = [],
                i = [],
                s = A(e.replace(le, "$1"));
              return s[P]
                ? u(function (e, t, n, r) {
                    for (var i, o = s(e, null, r, []), a = e.length; a--; )
                      (i = o[a]) && (e[a] = !(t[a] = i));
                  })
                : function (e, t, n) {
                    return (r[0] = e), s(r, null, n, i), !i.pop();
                  };
            }),
            has: u(function (t) {
              return function (e) {
                return 0 < T(t, e).length;
              };
            }),
            contains: u(function (t) {
              return function (e) {
                return -1 < (e.textContent || e.innerText || E(e)).indexOf(t);
              };
            }),
            lang: u(function (n) {
              return (
                me.test(n || "") || T.error("unsupported lang: " + n),
                (n = n.replace(we, Ce).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = _
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === q;
            },
            focus: function (e) {
              return (
                e === H.activeElement &&
                (!H.hasFocus || H.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType)
                  return !1;
              return !0;
            },
            parent: function (e) {
              return !k.pseudos.empty(e);
            },
            header: function (e) {
              return xe.test(e.nodeName);
            },
            input: function (e) {
              return be.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  t.toLowerCase() === e.type)
              );
            },
            first: s(function () {
              return [0];
            }),
            last: s(function (e, t) {
              return [t - 1];
            }),
            eq: s(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: s(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: s(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: s(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
              return e;
            }),
            gt: s(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; t > ++r; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = k.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        k.pseudos[x] = o(x);
      for (x in { submit: !0, reset: !0 }) k.pseudos[x] = a(x);
      (c.prototype = k.filters = k.pseudos),
        (k.setFilters = new c()),
        (A = T.compile =
          function (e, t) {
            var n,
              r = [],
              i = [],
              o = X[e + " "];
            if (!o) {
              for (t || (t = h(e)), n = t.length; n--; )
                (o = d(t[n]))[P] ? r.push(o) : i.push(o);
              o = X(e, g(i, r));
            }
            return o;
          }),
        (C.sortStable = P.split("").sort(V).join("") === P),
        (C.detectDuplicates = U),
        L(),
        (C.sortDetached = r(function (e) {
          return 1 & e.compareDocumentPosition(H.createElement("div"));
        })),
        r(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          t("type|href|height|width", function (e, t, n) {
            return n
              ? i
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (C.attributes &&
          r(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          t("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? i
              : e.defaultValue;
          }),
        r(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          t(re, function (e, t, n) {
            var r;
            return n
              ? i
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : !0 === e[t]
              ? t.toLowerCase()
              : null;
          }),
        (ke.find = T),
        (ke.expr = T.selectors),
        (ke.expr[":"] = ke.expr.pseudos),
        (ke.unique = T.uniqueSort),
        (ke.text = T.getText),
        (ke.isXMLDoc = T.isXML),
        (ke.contains = T.contains);
    })(h);
  var Ce = {};
  (ke.Callbacks = function (i) {
    i = "string" == typeof i ? Ce[i] || e(i) : ke.extend({}, i);
    var o,
      t,
      n,
      a,
      r,
      s,
      u = [],
      l = !i.once && [],
      c = function (e) {
        for (
          t = i.memory && e, n = !0, r = s || 0, s = 0, a = u.length, o = !0;
          u && r < a;
          r++
        )
          if (!1 === u[r].apply(e[0], e[1]) && i.stopOnFalse) {
            t = !1;
            break;
          }
        (o = !1),
          u && (l ? l.length && c(l.shift()) : t ? (u = []) : f.disable());
      },
      f = {
        add: function () {
          if (u) {
            var e = u.length;
            (function r(e) {
              ke.each(e, function (e, t) {
                var n = ke.type(t);
                "function" === n
                  ? (i.unique && f.has(t)) || u.push(t)
                  : t && t.length && "string" !== n && r(t);
              });
            })(arguments),
              o ? (a = u.length) : t && ((s = e), c(t));
          }
          return this;
        },
        remove: function () {
          return (
            u &&
              ke.each(arguments, function (e, t) {
                for (var n; -1 < (n = ke.inArray(t, u, n)); )
                  u.splice(n, 1), o && (n <= a && a--, n <= r && r--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ke.inArray(e, u) : !(!u || !u.length);
        },
        empty: function () {
          return (u = []), (a = 0), this;
        },
        disable: function () {
          return (u = l = t = C), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (l = C), t || f.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, t) {
          return (
            !u ||
              (n && !l) ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              o ? l.push(t) : c(t)),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return f;
  }),
    ke.extend({
      Deferred: function (e) {
        var a = [
            ["resolve", "done", ke.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ke.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ke.Callbacks("memory")],
          ],
          i = "pending",
          s = {
            state: function () {
              return i;
            },
            always: function () {
              return u.done(arguments).fail(arguments), this;
            },
            then: function () {
              var o = arguments;
              return ke
                .Deferred(function (i) {
                  ke.each(a, function (e, t) {
                    var n = t[0],
                      r = ke.isFunction(o[e]) && o[e];
                    u[t[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && ke.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(i.resolve)
                            .fail(i.reject)
                            .progress(i.notify)
                        : i[n + "With"](
                            this === s ? i.promise() : this,
                            r ? [e] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ke.extend(e, s) : s;
            },
          },
          u = {};
        return (
          (s.pipe = s.then),
          ke.each(a, function (e, t) {
            var n = t[2],
              r = t[3];
            (s[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  a[1 ^ e][2].disable,
                  a[2][2].lock
                ),
              (u[t[0]] = function () {
                return u[t[0] + "With"](this === u ? s : this, arguments), this;
              }),
              (u[t[0] + "With"] = n.fireWith);
          }),
          s.promise(u),
          e && e.call(u, u),
          u
        );
      },
      when: function (e) {
        var i,
          t,
          n,
          r = 0,
          o = ie.call(arguments),
          a = o.length,
          s = 1 !== a || (e && ke.isFunction(e.promise)) ? a : 0,
          u = 1 === s ? e : ke.Deferred(),
          l = function (t, n, r) {
            return function (e) {
              (n[t] = this),
                (r[t] = 1 < arguments.length ? ie.call(arguments) : e),
                r === i ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
            };
          };
        if (1 < a)
          for (i = Array(a), t = Array(a), n = Array(a); r < a; r++)
            o[r] && ke.isFunction(o[r].promise)
              ? o[r]
                  .promise()
                  .done(l(r, n, o))
                  .fail(u.reject)
                  .progress(l(r, t, i))
              : --s;
        return s || u.resolveWith(n, o), u.promise();
      },
    }),
    (ke.support = (function (o) {
      var e,
        t,
        n,
        r,
        i,
        a,
        s,
        u,
        l,
        c = J.createElement("div");
      if (
        (c.setAttribute("className", "t"),
        (c.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (e = c.getElementsByTagName("*") || []),
        !(t = c.getElementsByTagName("a")[0]) || !t.style || !e.length)
      )
        return o;
      (a = (r = J.createElement("select")).appendChild(
        J.createElement("option")
      )),
        (n = c.getElementsByTagName("input")[0]),
        (t.style.cssText = "top:1px;float:left;opacity:.5"),
        (o.getSetAttribute = "t" !== c.className),
        (o.leadingWhitespace = 3 === c.firstChild.nodeType),
        (o.tbody = !c.getElementsByTagName("tbody").length),
        (o.htmlSerialize = !!c.getElementsByTagName("link").length),
        (o.style = /top/.test(t.getAttribute("style"))),
        (o.hrefNormalized = "/a" === t.getAttribute("href")),
        (o.opacity = /^0.5/.test(t.style.opacity)),
        (o.cssFloat = !!t.style.cssFloat),
        (o.checkOn = !!n.value),
        (o.optSelected = a.selected),
        (o.enctype = !!J.createElement("form").enctype),
        (o.html5Clone =
          "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML),
        (o.inlineBlockNeedsLayout = !1),
        (o.shrinkWrapBlocks = !1),
        (o.pixelPosition = !1),
        (o.deleteExpando = !0),
        (o.noCloneEvent = !0),
        (o.reliableMarginRight = !0),
        (o.boxSizingReliable = !0),
        (n.checked = !0),
        (o.noCloneChecked = n.cloneNode(!0).checked),
        (r.disabled = !0),
        (o.optDisabled = !a.disabled);
      try {
        delete c.test;
      } catch (re) {
        o.deleteExpando = !1;
      }
      for (l in ((n = J.createElement("input")).setAttribute("value", ""),
      (o.input = "" === n.getAttribute("value")),
      (n.value = "t"),
      n.setAttribute("type", "radio"),
      (o.radioValue = "t" === n.value),
      n.setAttribute("checked", "t"),
      n.setAttribute("name", "t"),
      (i = J.createDocumentFragment()).appendChild(n),
      (o.appendChecked = n.checked),
      (o.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
      c.attachEvent &&
        (c.attachEvent("onclick", function () {
          o.noCloneEvent = !1;
        }),
        c.cloneNode(!0).click()),
      { submit: !0, change: !0, focusin: !0 }))
        c.setAttribute((s = "on" + l), "t"),
          (o[l + "Bubbles"] = s in h || !1 === c.attributes[s].expando);
      for (l in ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (o.clearCloneStyle = "content-box" === c.style.backgroundClip),
      ke(o)))
        break;
      return (
        (o.ownLast = "0" !== l),
        ke(function () {
          var e,
            t,
            n,
            r =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            i = J.getElementsByTagName("body")[0];
          i &&
            (((e = J.createElement("div")).style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            i.appendChild(e).appendChild(c),
            (c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            ((n = c.getElementsByTagName("td"))[0].style.cssText =
              "padding:0;margin:0;border:0;display:none"),
            (u = 0 === n[0].offsetHeight),
            (n[0].style.display = ""),
            (n[1].style.display = "none"),
            (o.reliableHiddenOffsets = u && 0 === n[0].offsetHeight),
            (c.innerHTML = ""),
            (c.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            ke.swap(i, null != i.style.zoom ? { zoom: 1 } : {}, function () {
              o.boxSizing = 4 === c.offsetWidth;
            }),
            h.getComputedStyle &&
              ((o.pixelPosition =
                "1%" !== (h.getComputedStyle(c, null) || {}).top),
              (o.boxSizingReliable =
                "4px" ===
                (h.getComputedStyle(c, null) || { width: "4px" }).width),
              ((t = c.appendChild(J.createElement("div"))).style.cssText =
                c.style.cssText =
                  r),
              (t.style.marginRight = t.style.width = "0"),
              (c.style.width = "1px"),
              (o.reliableMarginRight = !parseFloat(
                (h.getComputedStyle(t, null) || {}).marginRight
              ))),
            typeof c.style.zoom !== V &&
              ((c.innerHTML = ""),
              (c.style.cssText =
                r + "width:1px;padding:1px;display:inline;zoom:1"),
              (o.inlineBlockNeedsLayout = 3 === c.offsetWidth),
              (c.style.display = "block"),
              (c.innerHTML = "<div></div>"),
              (c.firstChild.style.width = "5px"),
              (o.shrinkWrapBlocks = 3 !== c.offsetWidth),
              o.inlineBlockNeedsLayout && (i.style.zoom = 1)),
            i.removeChild(e),
            (e = c = n = t = null));
        }),
        (e = r = i = a = t = n = null),
        o
      );
    })({}));
  var Ee = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Se = /([A-Z])/g;
  ke.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return (
        !!(e = e.nodeType ? ke.cache[e[ke.expando]] : e[ke.expando]) && !l(e)
      );
    },
    data: function (e, t, n) {
      return r(e, t, n);
    },
    removeData: function (e, t) {
      return n(e, t);
    },
    _data: function (e, t, n) {
      return r(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return n(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && ke.noData[e.nodeName.toLowerCase()];
      return !t || (!0 !== t && e.getAttribute("classid") === t);
    },
  }),
    ke.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i = null,
          o = 0,
          a = this[0];
        if (e !== C)
          return "object" == typeof e
            ? this.each(function () {
                ke.data(this, e);
              })
            : 1 < arguments.length
            ? this.each(function () {
                ke.data(this, e, t);
              })
            : a
            ? u(a, e, ke.data(a, e))
            : null;
        if (
          this.length &&
          ((i = ke.data(a)), 1 === a.nodeType && !ke._data(a, "parsedAttrs"))
        ) {
          for (n = a.attributes; n.length > o; o++)
            0 === (r = n[o].name).indexOf("data-") &&
              u(a, (r = ke.camelCase(r.slice(5))), i[r]);
          ke._data(a, "parsedAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          ke.removeData(this, e);
        });
      },
    }),
    ke.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = ke._data(e, t)),
            n &&
              (!r || ke.isArray(n)
                ? (r = ke._data(e, t, ke.makeArray(n)))
                : r.push(n)),
            r || [])
          : C;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ke.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ke._queueHooks(e, t),
          a = function () {
            ke.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          ke._data(e, n) ||
          ke._data(e, n, {
            empty: ke.Callbacks("once memory").add(function () {
              ke._removeData(e, t + "queue"), ke._removeData(e, n);
            }),
          })
        );
      },
    }),
    ke.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          e > arguments.length
            ? ke.queue(this[0], t)
            : n === C
            ? this
            : this.each(function () {
                var e = ke.queue(this, t, n);
                ke._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ke.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ke.dequeue(this, e);
        });
      },
      delay: function (r, e) {
        return (
          (r = (ke.fx && ke.fx.speeds[r]) || r),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = setTimeout(e, r);
            t.stop = function () {
              clearTimeout(n);
            };
          })
        );
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ke.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for ("string" != typeof e && ((t = e), (e = C)), e = e || "fx"; a--; )
          (n = ke._data(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var Ae,
    je,
    De = /[\t\r\n\f]/g,
    Le = /\r/g,
    He = /^(?:input|select|textarea|button|object)$/i,
    qe = /^(?:a|area)$/i,
    _e = /^(?:checked|selected)$/i,
    Me = ke.support.getSetAttribute,
    Oe = ke.support.input;
  ke.fn.extend({
    attr: function (e, t) {
      return ke.access(this, ke.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ke.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return ke.access(this, ke.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return (
        (e = ke.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = C), delete this[e];
          } catch (X) {}
        })
      );
    },
    addClass: function (t) {
      var e,
        n,
        r,
        i,
        o,
        a = 0,
        s = this.length,
        u = "string" == typeof t && t;
      if (ke.isFunction(t))
        return this.each(function (e) {
          ke(this).addClass(t.call(this, e, this.className));
        });
      if (u)
        for (e = (t || "").match(ce) || []; a < s; a++)
          if (
            (r =
              1 === (n = this[a]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(De, " ") : " "))
          ) {
            for (o = 0; (i = e[o++]); )
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            n.className = ke.trim(r);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        n,
        r,
        i,
        o,
        a = 0,
        s = this.length,
        u = 0 === arguments.length || ("string" == typeof t && t);
      if (ke.isFunction(t))
        return this.each(function (e) {
          ke(this).removeClass(t.call(this, e, this.className));
        });
      if (u)
        for (e = (t || "").match(ce) || []; a < s; a++)
          if (
            (r =
              1 === (n = this[a]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(De, " ") : ""))
          ) {
            for (o = 0; (i = e[o++]); )
              for (; 0 <= r.indexOf(" " + i + " "); )
                r = r.replace(" " + i + " ", " ");
            n.className = t ? ke.trim(r) : "";
          }
      return this;
    },
    toggleClass: function (i, t) {
      var o = typeof i;
      return "boolean" == typeof t && "string" === o
        ? t
          ? this.addClass(i)
          : this.removeClass(i)
        : ke.isFunction(i)
        ? this.each(function (e) {
            ke(this).toggleClass(i.call(this, e, this.className, t), t);
          })
        : this.each(function () {
            if ("string" === o)
              for (
                var e, t = 0, n = ke(this), r = i.match(ce) || [];
                (e = r[t++]);

              )
                n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
            else
              (o === V || "boolean" === o) &&
                (this.className &&
                  ke._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === i
                    ? ""
                    : ke._data(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
        if (
          1 === this[n].nodeType &&
          0 <= (" " + this[n].className + " ").replace(De, " ").indexOf(t)
        )
          return !0;
      return !1;
    },
    val: function (n) {
      var e,
        r,
        i,
        t = this[0];
      return arguments.length
        ? ((i = ke.isFunction(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, ke(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : ke.isArray(t) &&
                  (t = ke.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                ke.valHooks[this.type] ||
                ke.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                r.set(this, t, "value") !== C) ||
                (this.value = t));
          }))
        : t
        ? (r = ke.valHooks[t.type] || ke.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          (e = r.get(t, "value")) !== C
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(Le, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    ke.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ke.find.attr(e, "value");
            return null != t ? t : e.text;
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || i < 0,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = i < 0 ? s : o ? i : 0;
              u < s;
              u++
            )
              if (
                !(
                  (!(n = r[u]).selected && u !== i) ||
                  (ke.support.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    ke.nodeName(n.parentNode, "optgroup"))
                )
              ) {
                if (((t = ke(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = ke.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected = 0 <= ke.inArray(ke(r).val(), o)) &&
                (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return typeof e.getAttribute === V
            ? ke.prop(e, t, n)
            : ((1 === o && ke.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r =
                  ke.attrHooks[t] || (ke.expr.match.bool.test(t) ? je : Ae))),
              n === C
                ? r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : null == (i = ke.find.attr(e, t))
                  ? C
                  : i
                : null !== n
                ? r && "set" in r && (i = r.set(e, n, t)) !== C
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : (ke.removeAttr(e, t), C));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(ce);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = ke.propFix[n] || n),
              ke.expr.match.bool.test(n)
                ? (Oe && Me) || !_e.test(n)
                  ? (e[r] = !1)
                  : (e[ke.camelCase("default-" + n)] = e[r] = !1)
                : ke.attr(e, n, ""),
              e.removeAttribute(Me ? n : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              !ke.support.radioValue &&
              "radio" === t &&
              ke.nodeName(e, "input")
            ) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return (
            (1 !== o || !ke.isXMLDoc(e)) &&
              ((t = ke.propFix[t] || t), (i = ke.propHooks[t])),
            n !== C
              ? i && "set" in i && (r = i.set(e, n, t)) !== C
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ke.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : He.test(e.nodeName) || (qe.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    (je = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? ke.removeAttr(e, n)
            : (Oe && Me) || !_e.test(n)
            ? e.setAttribute((!Me && ke.propFix[n]) || n, n)
            : (e[ke.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    ke.each(ke.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var o = ke.expr.attrHandle[t] || ke.find.attr;
      ke.expr.attrHandle[t] =
        (Oe && Me) || !_e.test(t)
          ? function (e, t, n) {
              var r = ke.expr.attrHandle[t],
                i = n
                  ? C
                  : (ke.expr.attrHandle[t] = C) != o(e, t, n)
                  ? t.toLowerCase()
                  : null;
              return (ke.expr.attrHandle[t] = r), i;
            }
          : function (e, t, n) {
              return n
                ? C
                : e[ke.camelCase("default-" + t)]
                ? t.toLowerCase()
                : null;
            };
    }),
    (Oe && Me) ||
      (ke.attrHooks.value = {
        set: function (e, t, n) {
          return ke.nodeName(e, "input")
            ? ((e.defaultValue = t), C)
            : Ae && Ae.set(e, t, n);
        },
      }),
    Me ||
      ((Ae = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n);
          return (
            r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
            (r.value = t += ""),
            "value" === n || t === e.getAttribute(n) ? t : C
          );
        },
      }),
      (ke.expr.attrHandle.id =
        ke.expr.attrHandle.name =
        ke.expr.attrHandle.coords =
          function (e, t, n) {
            var r;
            return n
              ? C
              : (r = e.getAttributeNode(t)) && "" !== r.value
              ? r.value
              : null;
          }),
      (ke.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          return n && n.specified ? n.value : C;
        },
        set: Ae.set,
      }),
      (ke.attrHooks.contenteditable = {
        set: function (e, t, n) {
          Ae.set(e, "" !== t && t, n);
        },
      }),
      ke.each(["width", "height"], function (e, n) {
        ke.attrHooks[n] = {
          set: function (e, t) {
            return "" === t ? (e.setAttribute(n, "auto"), t) : C;
          },
        };
      })),
    ke.support.hrefNormalized ||
      ke.each(["href", "src"], function (e, t) {
        ke.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    ke.support.style ||
      (ke.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || C;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      }),
    ke.support.optSelected ||
      (ke.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      }),
    ke.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ke.propFix[this.toLowerCase()] = this;
      }
    ),
    ke.support.enctype || (ke.propFix.enctype = "encoding"),
    ke.each(["radio", "checkbox"], function () {
      (ke.valHooks[this] = {
        set: function (e, t) {
          return ke.isArray(t)
            ? (e.checked = 0 <= ke.inArray(ke(e).val(), t))
            : C;
        },
      }),
        ke.support.checkOn ||
          (ke.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Fe = /^(?:input|select|textarea)$/i,
    Be = /^key/,
    Pe = /^(?:mouse|contextmenu)|click/,
    Re = /^(?:focusinfocus|focusoutblur)$/,
    $e = /^([^.]*)(?:\.(.+)|)$/;
  (ke.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        m,
        g = ke._data(e);
      if (g) {
        for (
          n.handler && ((n = (u = n).handler), (i = u.selector)),
            n.guid || (n.guid = ke.guid++),
            (a = g.events) || (a = g.events = {}),
            (c = g.handle) ||
              ((c = g.handle =
                function (e) {
                  return typeof ke === V || (e && ke.event.triggered === e.type)
                    ? C
                    : ke.event.dispatch.apply(c.elem, arguments);
                }).elem = e),
            s = (t = (t || "").match(ce) || [""]).length;
          s--;

        )
          (d = m = (o = $e.exec(t[s]) || [])[1]),
            (h = (o[2] || "").split(".").sort()),
            d &&
              ((l = ke.event.special[d] || {}),
              (d = (i ? l.delegateType : l.bindType) || d),
              (l = ke.event.special[d] || {}),
              (f = ke.extend(
                {
                  type: d,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ke.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                u
              )),
              (p = a[d]) ||
                (((p = a[d] = []).delegateCount = 0),
                (l.setup && !1 !== l.setup.call(e, r, h, c)) ||
                  (e.addEventListener
                    ? e.addEventListener(d, c, !1)
                    : e.attachEvent && e.attachEvent("on" + d, c))),
              l.add &&
                (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, f) : p.push(f),
              (ke.event.global[d] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        m,
        g = ke.hasData(e) && ke._data(e);
      if (g && (c = g.events)) {
        for (l = (t = (t || "").match(ce) || [""]).length; l--; )
          if (
            ((d = m = (s = $e.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = ke.event.special[d] || {},
                p = c[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                u = o = p.length;
              o--;

            )
              (a = p[o]),
                (!i && m !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                  (p.splice(o, 1),
                  a.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, a));
            u &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                ke.removeEvent(e, d, g.handle),
              delete c[d]);
          } else for (d in c) ke.event.remove(e, d + t[l], n, r, !0);
        ke.isEmptyObject(c) && (delete g.handle, ke._removeData(e, "events"));
      }
    },
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = [n || J],
        p = se.call(e, "type") ? e.type : e,
        d = se.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((a = l = n = n || J),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Re.test(p + ke.event.triggered) &&
          (0 <= p.indexOf(".") && ((p = (d = p.split(".")).shift()), d.sort()),
          (o = p.indexOf(":") < 0 && "on" + p),
          ((e = e[ke.expando]
            ? e
            : new ke.Event(p, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = d.join(".")),
          (e.namespace_re = e.namespace
            ? RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = C),
          e.target || (e.target = n),
          (t = null == t ? [e] : ke.makeArray(t, [e])),
          (u = ke.event.special[p] || {}),
          r || !u.trigger || !1 !== u.trigger.apply(n, t)))
      ) {
        if (!r && !u.noBubble && !ke.isWindow(n)) {
          for (
            s = u.delegateType || p, Re.test(s + p) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            f.push(a), (l = a);
          l === (n.ownerDocument || J) &&
            f.push(l.defaultView || l.parentWindow || h);
        }
        for (c = 0; (a = f[c++]) && !e.isPropagationStopped(); )
          (e.type = 1 < c ? s : u.bindType || p),
            (i =
              (ke._data(a, "events") || {})[e.type] && ke._data(a, "handle")) &&
              i.apply(a, t),
            (i = o && a[o]) &&
              ke.acceptData(a) &&
              i.apply &&
              !1 === i.apply(a, t) &&
              e.preventDefault();
        if (
          ((e.type = p),
          !r &&
            !e.isDefaultPrevented() &&
            (!u._default || !1 === u._default.apply(f.pop(), t)) &&
            ke.acceptData(n) &&
            o &&
            n[p] &&
            !ke.isWindow(n))
        ) {
          (l = n[o]) && (n[o] = null), (ke.event.triggered = p);
          try {
            n[p]();
          } catch (ae) {}
          (ke.event.triggered = C), l && (n[o] = l);
        }
        return e.result;
      }
    },
    dispatch: function (e) {
      e = ke.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        a = [],
        s = ie.call(arguments),
        u = (ke._data(this, "events") || {})[e.type] || [],
        l = ke.event.special[e.type] || {};
      if (
        (((s[0] = e).delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, e))
      ) {
        for (
          a = ke.event.handlers.call(this, e, u), t = 0;
          (i = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, o = 0;
            (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(r.namespace)) &&
              ((e.handleObj = r),
              (e.data = r.data),
              (n = (
                (ke.event.special[r.origType] || {}).handle || r.handler
              ).apply(i.elem, s)) !== C &&
                !1 === (e.result = n) &&
                (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (s && u.nodeType && (!e.button || "click" !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
            for (i = [], o = 0; o < s; o++)
              i[(n = (r = t[o]).selector + " ")] === C &&
                (i[n] = r.needsContext
                  ? 0 <= ke(n, this).index(u)
                  : ke.find(n, this, null, [u]).length),
                i[n] && i.push(r);
            i.length && a.push({ elem: u, handlers: i });
          }
      return t.length > s && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    fix: function (e) {
      if (e[ke.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (
        a ||
          (this.fixHooks[i] = a =
            Pe.test(i) ? this.mouseHooks : Be.test(i) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new ke.Event(o),
          t = r.length;
        t--;

      )
        e[(n = r[t])] = o[n];
      return (
        e.target || (e.target = o.srcElement || J),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        a.filter ? a.filter(e, o) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button,
          a = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((i = (r = e.target.ownerDocument || J).documentElement),
            (n = r.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
              ((i && i.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            a &&
            (e.relatedTarget = a === e.target ? t.toElement : a),
          e.which ||
            o === C ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== t() && this.focus)
            try {
              return this.focus(), !1;
            } catch (h) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === t() && this.blur ? (this.blur(), !1) : C;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return ke.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : C;
        },
        _default: function (e) {
          return ke.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== C && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = ke.extend(new ke.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? ke.event.trigger(i, null, t) : ke.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (ke.removeEvent = J.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, t, n) {
          var r = "on" + t;
          e.detachEvent &&
            (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n));
        }),
    (ke.Event = function (e, t) {
      return this instanceof ke.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                !1 === e.returnValue ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? i
                  : Ne))
            : (this.type = e),
          t && ke.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || ke.now()),
          (this[ke.expando] = !0),
          C)
        : new ke.Event(e, t);
    }),
    (ke.Event.prototype = {
      isDefaultPrevented: Ne,
      isPropagationStopped: Ne,
      isImmediatePropagationStopped: Ne,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = i),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = i),
          e &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = i), this.stopPropagation();
      },
    }),
    ke.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, o) {
        ke.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t,
              n = this,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (!r || (r !== n && !ke.contains(n, r))) &&
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = o)),
              t
            );
          },
        };
      }
    ),
    ke.support.submitBubbles ||
      (ke.event.special.submit = {
        setup: function () {
          return (
            !ke.nodeName(this, "form") &&
            (ke.event.add(this, "click._submit keypress._submit", function (e) {
              var t = e.target,
                n =
                  ke.nodeName(t, "input") || ke.nodeName(t, "button")
                    ? t.form
                    : C;
              n &&
                !ke._data(n, "submitBubbles") &&
                (ke.event.add(n, "submit._submit", function (e) {
                  e._submit_bubble = !0;
                }),
                ke._data(n, "submitBubbles", !0));
            }),
            C)
          );
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              ke.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          return (
            !ke.nodeName(this, "form") && (ke.event.remove(this, "._submit"), C)
          );
        },
      }),
    ke.support.changeBubbles ||
      (ke.event.special.change = {
        setup: function () {
          return Fe.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (ke.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                ke.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    ke.event.simulate("change", this, e, !0);
                })),
              !1)
            : (ke.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Fe.test(t.nodeName) &&
                  !ke._data(t, "changeBubbles") &&
                  (ke.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      ke.event.simulate("change", this.parentNode, e, !0);
                  }),
                  ke._data(t, "changeBubbles", !0));
              }),
              C);
        },
        handle: function (e) {
          var t = e.target;
          return this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
            ? e.handleObj.handler.apply(this, arguments)
            : C;
        },
        teardown: function () {
          return ke.event.remove(this, "._change"), !Fe.test(this.nodeName);
        },
      }),
    ke.support.focusinBubbles ||
      ke.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = 0,
          r = function (e) {
            ke.event.simulate(t, e.target, ke.event.fix(e), !0);
          };
        ke.event.special[t] = {
          setup: function () {
            0 == n++ && J.addEventListener(e, r, !0);
          },
          teardown: function () {
            0 == --n && J.removeEventListener(e, r, !0);
          },
        };
      }),
    ke.fn.extend({
      on: function (e, t, n, r, i) {
        var o, a;
        if ("object" == typeof e) {
          for (o in ("string" != typeof t && ((n = n || t), (t = C)), e))
            this.on(o, t, n, e[o], i);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = C))
            : null == r &&
              ("string" == typeof t
                ? ((r = n), (n = C))
                : ((r = n), (n = t), (t = C))),
          !1 === r)
        )
          r = Ne;
        else if (!r) return this;
        return (
          1 === i &&
            ((a = r),
            ((r = function (e) {
              return ke().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = ke.guid++))),
          this.each(function () {
            ke.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ke(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 === t || "function" == typeof t) && ((n = t), (t = C)),
            !1 === n && (n = Ne),
            this.each(function () {
              ke.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
      trigger: function (e, t) {
        return this.each(function () {
          ke.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? ke.event.trigger(e, t, n, !0) : C;
      },
    });
  var We = /^.[^:#\[\.,]*$/,
    Ie = /^(?:parents|prev(?:Until|All))/,
    ze = ke.expr.match.needsContext,
    Xe = { children: !0, contents: !0, next: !0, prev: !0 };
  ke.fn.extend({
    find: function (e) {
      var t,
        n = [],
        r = this,
        i = r.length;
      if ("string" != typeof e)
        return this.pushStack(
          ke(e).filter(function () {
            for (t = 0; t < i; t++) if (ke.contains(r[t], this)) return !0;
          })
        );
      for (t = 0; t < i; t++) ke.find(e, r[t], n);
      return (
        ((n = this.pushStack(1 < i ? ke.unique(n) : n)).selector = this.selector
          ? this.selector + " " + e
          : e),
        n
      );
    },
    has: function (e) {
      var t,
        n = ke(e, this),
        r = n.length;
      return this.filter(function () {
        for (t = 0; t < r; t++) if (ke.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(a(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(a(this, e || [], !1));
    },
    is: function (e) {
      return !!a(this, "string" == typeof e && ze.test(e) ? ke(e) : e || [], !1)
        .length;
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = ze.test(e) || "string" != typeof e ? ke(e, t || this.context) : 0;
        r < i;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? -1 < a.index(n)
              : 1 === n.nodeType && ke.find.matchesSelector(n, e))
          ) {
            n = o.push(n);
            break;
          }
      return this.pushStack(1 < o.length ? ke.unique(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? ke.inArray(this[0], ke(e))
          : ke.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      var n =
          "string" == typeof e
            ? ke(e, t)
            : ke.makeArray(e && e.nodeType ? [e] : e),
        r = ke.merge(this.get(), n);
      return this.pushStack(ke.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ke.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ke.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ke.dir(e, "parentNode", n);
        },
        next: function (e) {
          return o(e, "nextSibling");
        },
        prev: function (e) {
          return o(e, "previousSibling");
        },
        nextAll: function (e) {
          return ke.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return ke.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ke.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ke.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return ke.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ke.sibling(e.firstChild);
        },
        contents: function (e) {
          return ke.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : ke.merge([], e.childNodes);
        },
      },
      function (r, i) {
        ke.fn[r] = function (e, t) {
          var n = ke.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ke.filter(t, n)),
            1 < this.length &&
              (Xe[r] || (n = ke.unique(n)), Ie.test(r) && (n = n.reverse())),
            this.pushStack(n)
          );
        };
      }
    ),
    ke.extend({
      filter: function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? ke.find.matchesSelector(r, e)
              ? [r]
              : []
            : ke.find.matches(
                e,
                ke.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      },
      dir: function (e, t, n) {
        for (
          var r = [], i = e[t];
          i &&
          9 !== i.nodeType &&
          (n === C || 1 !== i.nodeType || !ke(i).is(n));

        )
          1 === i.nodeType && r.push(i), (i = i[t]);
        return r;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    });
  var Ue =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ve = / jQuery\d+="(?:null|\d+)"/g,
    Ye = RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
    Je = /^\s+/,
    Ge =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Qe = /<([\w:]+)/,
    Ke = /<tbody/i,
    Ze = /<|&#?\w+;/,
    et = /<(?:script|style|link)/i,
    tt = /^(?:checkbox|radio)$/i,
    nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rt = /^$|\/(?:java|ecma)script/i,
    it = /^true\/(.*)/,
    ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    at = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ke.support.htmlSerialize
        ? [0, "", ""]
        : [1, "X<div>", "</div>"],
    },
    st = m(J).appendChild(J.createElement("div"));
  (at.optgroup = at.option),
    (at.tbody = at.tfoot = at.colgroup = at.caption = at.thead),
    (at.th = at.td),
    ke.fn.extend({
      text: function (e) {
        return ke.access(
          this,
          function (e) {
            return e === C
              ? ke.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || J).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            c(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = c(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, r = e ? ke.filter(e, this) : this, i = 0;
          null != (n = r[i]);
          i++
        )
          t || 1 !== n.nodeType || ke.cleanData(b(n)),
            n.parentNode &&
              (t && ke.contains(n.ownerDocument, n) && v(b(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && ke.cleanData(b(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && ke.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ke.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return ke.access(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (e === C)
              return 1 === t.nodeType ? t.innerHTML.replace(Ve, "") : C;
            if (
              !(
                "string" != typeof e ||
                et.test(e) ||
                (!ke.support.htmlSerialize && Ye.test(e)) ||
                (!ke.support.leadingWhitespace && Je.test(e)) ||
                at[(Qe.exec(e) || ["", ""])[1].toLowerCase()]
              )
            ) {
              e = e.replace(Ge, "<$1></$2>");
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ke.cleanData(b(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (Y) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var r = ke.map(this, function (e) {
            return [e.nextSibling, e.parentNode];
          }),
          i = 0;
        return (
          this.domManip(
            arguments,
            function (e) {
              var t = r[i++],
                n = r[i++];
              n &&
                (t && t.parentNode !== n && (t = this.nextSibling),
                ke(this).remove(),
                n.insertBefore(e, t));
            },
            !0
          ),
          i ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (n, r, i) {
        n = ne.apply([], n);
        var e,
          t,
          o,
          a,
          s,
          u,
          l = 0,
          c = this.length,
          f = this,
          p = c - 1,
          d = n[0],
          h = ke.isFunction(d);
        if (
          h ||
          (!(c <= 1 || "string" != typeof d || ke.support.checkClone) &&
            nt.test(d))
        )
          return this.each(function (e) {
            var t = f.eq(e);
            h && (n[0] = d.call(this, e, t.html())), t.domManip(n, r, i);
          });
        if (
          c &&
          ((e = (u = ke.buildFragment(n, this[0].ownerDocument, !1, !i && this))
            .firstChild),
          1 === u.childNodes.length && (u = e),
          e)
        ) {
          for (o = (a = ke.map(b(u, "script"), g)).length; l < c; l++)
            (t = u),
              l !== p &&
                ((t = ke.clone(t, !0, !0)), o && ke.merge(a, b(t, "script"))),
              r.call(this[l], t, l);
          if (o)
            for (
              s = a[a.length - 1].ownerDocument, ke.map(a, y), l = 0;
              l < o;
              l++
            )
              (t = a[l]),
                rt.test(t.type || "") &&
                  !ke._data(t, "globalEval") &&
                  ke.contains(s, t) &&
                  (t.src
                    ? ke._evalUrl(t.src)
                    : ke.globalEval(
                        (t.text || t.textContent || t.innerHTML || "").replace(
                          ot,
                          ""
                        )
                      ));
          u = e = null;
        }
        return this;
      },
    }),
    ke.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        ke.fn[e] = function (e) {
          for (var t, n = 0, r = [], i = ke(e), o = i.length - 1; n <= o; n++)
            (t = n === o ? this : this.clone(!0)),
              ke(i[n])[a](t),
              re.apply(r, t.get());
          return this.pushStack(r);
        };
      }
    ),
    ke.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u = ke.contains(e.ownerDocument, e);
        if (
          (ke.support.html5Clone ||
          ke.isXMLDoc(e) ||
          !Ye.test("<" + e.nodeName + ">")
            ? (o = e.cloneNode(!0))
            : ((st.innerHTML = e.outerHTML),
              st.removeChild((o = st.firstChild))),
          !(
            (ke.support.noCloneEvent && ke.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            ke.isXMLDoc(e)
          ))
        )
          for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a)
            r[a] && p(i, r[a]);
        if (t)
          if (n)
            for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++)
              f(i, r[a]);
          else f(e, o);
        return (
          0 < (r = b(o, "script")).length && v(r, !u && b(e, "script")),
          (r = s = i = null),
          o
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i, o, a, s, u, l, c, f = e.length, p = m(t), d = [], h = 0;
          h < f;
          h++
        )
          if ((o = e[h]) || 0 === o)
            if ("object" === ke.type(o)) ke.merge(d, o.nodeType ? [o] : o);
            else if (Ze.test(o)) {
              for (
                s = s || p.appendChild(t.createElement("div")),
                  u = (Qe.exec(o) || ["", ""])[1].toLowerCase(),
                  c = at[u] || at._default,
                  s.innerHTML = c[1] + o.replace(Ge, "<$1></$2>") + c[2],
                  i = c[0];
                i--;

              )
                s = s.lastChild;
              if (
                (!ke.support.leadingWhitespace &&
                  Je.test(o) &&
                  d.push(t.createTextNode(Je.exec(o)[0])),
                !ke.support.tbody)
              )
                for (
                  i =
                    (o =
                      "table" !== u || Ke.test(o)
                        ? "<table>" !== c[1] || Ke.test(o)
                          ? 0
                          : s
                        : s.firstChild) && o.childNodes.length;
                  i--;

                )
                  ke.nodeName((l = o.childNodes[i]), "tbody") &&
                    !l.childNodes.length &&
                    o.removeChild(l);
              for (
                ke.merge(d, s.childNodes), s.textContent = "";
                s.firstChild;

              )
                s.removeChild(s.firstChild);
              s = p.lastChild;
            } else d.push(t.createTextNode(o));
        for (
          s && p.removeChild(s),
            ke.support.appendChecked || ke.grep(b(d, "input"), x),
            h = 0;
          (o = d[h++]);

        )
          if (
            (!r || -1 === ke.inArray(o, r)) &&
            ((a = ke.contains(o.ownerDocument, o)),
            (s = b(p.appendChild(o), "script")),
            a && v(s),
            n)
          )
            for (i = 0; (o = s[i++]); ) rt.test(o.type || "") && n.push(o);
        return (s = null), p;
      },
      cleanData: function (e, t) {
        for (
          var n,
            r,
            i,
            o,
            a = 0,
            s = ke.expando,
            u = ke.cache,
            l = ke.support.deleteExpando,
            c = ke.event.special;
          null != (n = e[a]);
          a++
        )
          if ((t || ke.acceptData(n)) && (o = (i = n[s]) && u[i])) {
            if (o.events)
              for (r in o.events)
                c[r] ? ke.event.remove(n, r) : ke.removeEvent(n, r, o.handle);
            u[i] &&
              (delete u[i],
              l
                ? delete n[s]
                : typeof n.removeAttribute !== V
                ? n.removeAttribute(s)
                : (n[s] = null),
              ee.push(i));
          }
      },
      _evalUrl: function (e) {
        return ke.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      },
    }),
    ke.fn.extend({
      wrapAll: function (t) {
        if (ke.isFunction(t))
          return this.each(function (e) {
            ke(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = ke(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (n) {
        return ke.isFunction(n)
          ? this.each(function (e) {
              ke(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ke(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = ke.isFunction(t);
        return this.each(function (e) {
          ke(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ke.nodeName(this, "body") || ke(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  var ut,
    lt,
    ct,
    ft = /alpha\([^)]*\)/i,
    pt = /opacity\s*=\s*([^)]*)/,
    dt = /^(top|right|bottom|left)$/,
    ht = /^(none|table(?!-c[ea]).+)/,
    mt = /^margin/,
    gt = RegExp("^(" + le + ")(.*)$", "i"),
    yt = RegExp("^(" + le + ")(?!px)[a-z%]+$", "i"),
    vt = RegExp("^([+-])=(" + le + ")", "i"),
    bt = { BODY: "block" },
    xt = { position: "absolute", visibility: "hidden", display: "block" },
    Tt = { letterSpacing: 0, fontWeight: 400 },
    wt = ["Top", "Right", "Bottom", "Left"],
    Ct = ["Webkit", "O", "Moz", "ms"];
  ke.fn.extend({
    css: function (e, t) {
      return ke.access(
        this,
        function (e, t, n) {
          var r,
            i,
            o = {},
            a = 0;
          if (ke.isArray(t)) {
            for (i = lt(e), r = t.length; a < r; a++)
              o[t[a]] = ke.css(e, t[a], !1, i);
            return o;
          }
          return n !== C ? ke.style(e, t, n) : ke.css(e, t);
        },
        e,
        t,
        1 < arguments.length
      );
    },
    show: function () {
      return w(this, !0);
    },
    hide: function () {
      return w(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            T(this) ? ke(this).show() : ke(this).hide();
          });
    },
  }),
    ke.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = ct(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: ke.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            a,
            s = ke.camelCase(t),
            u = e.style;
          if (
            ((t = ke.cssProps[s] || (ke.cssProps[s] = d(u, s))),
            (a = ke.cssHooks[t] || ke.cssHooks[s]),
            n === C)
          )
            return a && "get" in a && (i = a.get(e, !1, r)) !== C ? i : u[t];
          if (
            ("string" === (o = typeof n) &&
              (i = vt.exec(n)) &&
              ((n = (i[1] + 1) * i[2] + parseFloat(ke.css(e, t))),
              (o = "number")),
            !(
              null == n ||
              ("number" === o && isNaN(n)) ||
              ("number" !== o || ke.cssNumber[s] || (n += "px"),
              ke.support.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (u[t] = "inherit"),
              a && "set" in a && (n = a.set(e, n, r)) === C)
            ))
          )
            try {
              u[t] = n;
            } catch (Z) {}
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          a,
          s = ke.camelCase(t);
        return (
          (t = ke.cssProps[s] || (ke.cssProps[s] = d(e.style, s))),
          (a = ke.cssHooks[t] || ke.cssHooks[s]) &&
            "get" in a &&
            (o = a.get(e, !0, n)),
          o === C && (o = ct(e, t, r)),
          "normal" === o && t in Tt && (o = Tt[t]),
          "" === n || n
            ? ((i = parseFloat(o)), !0 === n || ke.isNumeric(i) ? i || 0 : o)
            : o
        );
      },
    }),
    h.getComputedStyle
      ? ((lt = function (e) {
          return h.getComputedStyle(e, null);
        }),
        (ct = function (e, t, n) {
          var r,
            i,
            o,
            a = n || lt(e),
            s = a ? a.getPropertyValue(t) || a[t] : C,
            u = e.style;
          return (
            a &&
              ("" !== s ||
                ke.contains(e.ownerDocument, e) ||
                (s = ke.style(e, t)),
              yt.test(s) &&
                mt.test(t) &&
                ((r = u.width),
                (i = u.minWidth),
                (o = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = s),
                (s = a.width),
                (u.width = r),
                (u.minWidth = i),
                (u.maxWidth = o))),
            s
          );
        }))
      : J.documentElement.currentStyle &&
        ((lt = function (e) {
          return e.currentStyle;
        }),
        (ct = function (e, t, n) {
          var r,
            i,
            o,
            a = n || lt(e),
            s = a ? a[t] : C,
            u = e.style;
          return (
            null == s && u && u[t] && (s = u[t]),
            yt.test(s) &&
              !dt.test(t) &&
              ((r = u.left),
              (o = (i = e.runtimeStyle) && i.left) &&
                (i.left = e.currentStyle.left),
              (u.left = "fontSize" === t ? "1em" : s),
              (s = u.pixelLeft + "px"),
              (u.left = r),
              o && (i.left = o)),
            "" === s ? "auto" : s
          );
        })),
    ke.each(["height", "width"], function (e, i) {
      ke.cssHooks[i] = {
        get: function (e, t, n) {
          return t
            ? 0 === e.offsetWidth && ht.test(ke.css(e, "display"))
              ? ke.swap(e, xt, function () {
                  return E(e, i, n);
                })
              : E(e, i, n)
            : C;
        },
        set: function (e, t, n) {
          var r = n && lt(e);
          return N(
            e,
            t,
            n
              ? k(
                  e,
                  i,
                  n,
                  ke.support.boxSizing &&
                    "border-box" === ke.css(e, "boxSizing", !1, r),
                  r
                )
              : 0
          );
        },
      };
    }),
    ke.support.opacity ||
      (ke.cssHooks.opacity = {
        get: function (e, t) {
          return pt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = ke.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (r && r.filter) || n.filter || "";
          (((n.zoom = 1) <= t || "" === t) &&
            "" === ke.trim(o.replace(ft, "")) &&
            n.removeAttribute &&
            (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
            (n.filter = ft.test(o) ? o.replace(ft, i) : o + " " + i);
        },
      }),
    ke(function () {
      ke.support.reliableMarginRight ||
        (ke.cssHooks.marginRight = {
          get: function (e, t) {
            return t
              ? ke.swap(e, { display: "inline-block" }, ct, [e, "marginRight"])
              : C;
          },
        }),
        !ke.support.pixelPosition &&
          ke.fn.position &&
          ke.each(["top", "left"], function (e, n) {
            ke.cssHooks[n] = {
              get: function (e, t) {
                return t
                  ? ((t = ct(e, n)),
                    yt.test(t) ? ke(e).position()[n] + "px" : t)
                  : C;
              },
            };
          });
    }),
    ke.expr &&
      ke.expr.filters &&
      ((ke.expr.filters.hidden = function (e) {
        return (
          (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
          (!ke.support.reliableHiddenOffsets &&
            "none" === ((e.style && e.style.display) || ke.css(e, "display")))
        );
      }),
      (ke.expr.filters.visible = function (e) {
        return !ke.expr.filters.hidden(e);
      })),
    ke.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (ke.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + wt[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        mt.test(i) || (ke.cssHooks[i + o].set = N);
    });
  var Nt = /%20/g,
    kt = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  ke.fn.extend({
    serialize: function () {
      return ke.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ke.prop(this, "elements");
        return e ? ke.makeArray(e) : this;
      })
        .filter(function () {
          var e = this.type;
          return (
            this.name &&
            !ke(this).is(":disabled") &&
            At.test(this.nodeName) &&
            !St.test(e) &&
            (this.checked || !tt.test(e))
          );
        })
        .map(function (e, t) {
          var n = ke(this).val();
          return null == n
            ? null
            : ke.isArray(n)
            ? ke.map(n, function (e) {
                return { name: t.name, value: e.replace(Et, "\r\n") };
              })
            : { name: t.name, value: n.replace(Et, "\r\n") };
        })
        .get();
    },
  }),
    (ke.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          (t = ke.isFunction(t) ? t() : null == t ? "" : t),
            (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (t === C && (t = ke.ajaxSettings && ke.ajaxSettings.traditional),
        ke.isArray(e) || (e.jquery && !ke.isPlainObject(e)))
      )
        ke.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) j(n, e[n], t, i);
      return r.join("&").replace(Nt, "+");
    }),
    ke.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, n) {
        ke.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    ke.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var jt,
    Dt,
    Lt = ke.now(),
    Ht = /\?/,
    qt = /#.*$/,
    _t = /([?&])_=[^&]*/,
    Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ft = /^(?:GET|HEAD)$/,
    Bt = /^\/\//,
    Pt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Rt = ke.fn.load,
    $t = {},
    Wt = {},
    It = "*/".concat("*");
  try {
    Dt = Y.href;
  } catch (rn) {
    ((Dt = J.createElement("a")).href = ""), (Dt = Dt.href);
  }
  (jt = Pt.exec(Dt.toLowerCase()) || []),
    (ke.fn.load = function (e, t, n) {
      if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        0 <= s && ((r = e.slice(s, e.length)), (e = e.slice(0, s))),
        ke.isFunction(t)
          ? ((n = t), (t = C))
          : t && "object" == typeof t && (o = "POST"),
        0 < a.length &&
          ke
            .ajax({ url: e, type: o, dataType: "html", data: t })
            .done(function (e) {
              (i = arguments),
                a.html(r ? ke("<div>").append(ke.parseHTML(e)).find(r) : e);
            })
            .complete(
              n &&
                function (e, t) {
                  a.each(n, i || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
    ke.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ke.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ke.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Dt,
        type: "GET",
        isLocal: Ot.test(jt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ke.parseJSON,
          "text xml": ke.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? H(H(e, ke.ajaxSettings), t) : H(ke.ajaxSettings, e);
      },
      ajaxPrefilter: D($t),
      ajaxTransport: D(Wt),
      ajax: function (e, t) {
        function n(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          2 !== T &&
            ((T = 2),
            p && clearTimeout(p),
            (h = C),
            (f = r || ""),
            (w.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n && (s = q(m, w, n)),
            (s = _(m, s, w, i)),
            i
              ? (m.ifModified &&
                  ((u = w.getResponseHeader("Last-Modified")) &&
                    (ke.lastModified[c] = u),
                  (u = w.getResponseHeader("etag")) && (ke.etag[c] = u)),
                204 === e || "HEAD" === m.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (e || !l) && ((l = "error"), e < 0 && (e = 0))),
            (w.status = e),
            (w.statusText = (t || l) + ""),
            i ? v.resolveWith(g, [o, l, w]) : v.rejectWith(g, [w, l, a]),
            w.statusCode(x),
            (x = C),
            d && y.trigger(i ? "ajaxSuccess" : "ajaxError", [w, m, i ? o : a]),
            b.fireWith(g, [w, l]),
            d &&
              (y.trigger("ajaxComplete", [w, m]),
              --ke.active || ke.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((t = e), (e = C)), (t = t || {});
        var r,
          i,
          c,
          f,
          p,
          d,
          h,
          o,
          m = ke.ajaxSetup({}, t),
          g = m.context || m,
          y = m.context && (g.nodeType || g.jquery) ? ke(g) : ke.event,
          v = ke.Deferred(),
          b = ke.Callbacks("once memory"),
          x = m.statusCode || {},
          a = {},
          s = {},
          T = 0,
          u = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === T) {
                if (!o)
                  for (o = {}; (t = Mt.exec(f)); ) o[t[1].toLowerCase()] = t[2];
                t = o[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === T ? f : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return T || ((e = s[n] = s[n] || e), (a[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return T || (m.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (T < 2) for (t in e) x[t] = [x[t], e[t]];
                else w.always(e[w.status]);
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return h && h.abort(t), n(0, t), this;
            },
          };
        if (
          ((v.promise(w).complete = b.add),
          (w.success = w.done),
          (w.error = w.fail),
          (m.url = ((e || m.url || Dt) + "")
            .replace(qt, "")
            .replace(Bt, jt[1] + "//")),
          (m.type = t.method || t.type || m.method || m.type),
          (m.dataTypes = ke
            .trim(m.dataType || "*")
            .toLowerCase()
            .match(ce) || [""]),
          null == m.crossDomain &&
            ((r = Pt.exec(m.url.toLowerCase())),
            (m.crossDomain = !(
              !r ||
              (r[1] === jt[1] &&
                r[2] === jt[2] &&
                (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                  (jt[3] || ("http:" === jt[1] ? "80" : "443")))
            ))),
          m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = ke.param(m.data, m.traditional)),
          L($t, m, t, w),
          2 === T)
        )
          return w;
        for (i in ((d = m.global) &&
          0 == ke.active++ &&
          ke.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !Ft.test(m.type)),
        (c = m.url),
        m.hasContent ||
          (m.data &&
            ((c = m.url += (Ht.test(c) ? "&" : "?") + m.data), delete m.data),
          !1 === m.cache &&
            (m.url = _t.test(c)
              ? c.replace(_t, "$1_=" + Lt++)
              : c + (Ht.test(c) ? "&" : "?") + "_=" + Lt++)),
        m.ifModified &&
          (ke.lastModified[c] &&
            w.setRequestHeader("If-Modified-Since", ke.lastModified[c]),
          ke.etag[c] && w.setRequestHeader("If-None-Match", ke.etag[c])),
        ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) &&
          w.setRequestHeader("Content-Type", m.contentType),
        w.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : m.accepts["*"]
        ),
        m.headers))
          w.setRequestHeader(i, m.headers[i]);
        if (m.beforeSend && (!1 === m.beforeSend.call(g, w, m) || 2 === T))
          return w.abort();
        for (i in ((u = "abort"), { success: 1, error: 1, complete: 1 }))
          w[i](m[i]);
        if ((h = L(Wt, m, t, w))) {
          (w.readyState = 1),
            d && y.trigger("ajaxSend", [w, m]),
            m.async &&
              0 < m.timeout &&
              (p = setTimeout(function () {
                w.abort("timeout");
              }, m.timeout));
          try {
            (T = 1), h.send(a, n);
          } catch (pe) {
            if (!(T < 2)) throw pe;
            n(-1, pe);
          }
        } else n(-1, "No Transport");
        return w;
      },
      getJSON: function (e, t, n) {
        return ke.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ke.get(e, C, t, "script");
      },
    }),
    ke.each(["get", "post"], function (e, i) {
      ke[i] = function (e, t, n, r) {
        return (
          ke.isFunction(t) && ((r = r || n), (n = t), (t = C)),
          ke.ajax({ url: e, type: i, dataType: r, data: t, success: n })
        );
      };
    }),
    ke.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return ke.globalEval(e), e;
        },
      },
    }),
    ke.ajaxPrefilter("script", function (e) {
      e.cache === C && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    ke.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var r,
          i = J.head || ke("head")[0] || J.documentElement;
        return {
          send: function (e, n) {
            ((r = J.createElement("script")).async = !0),
              t.scriptCharset && (r.charset = t.scriptCharset),
              (r.src = t.url),
              (r.onload = r.onreadystatechange =
                function (e, t) {
                  (t ||
                    !r.readyState ||
                    /loaded|complete/.test(r.readyState)) &&
                    ((r.onload = r.onreadystatechange = null),
                    r.parentNode && r.parentNode.removeChild(r),
                    (r = null),
                    t || n(200, "success"));
                }),
              i.insertBefore(r, i.firstChild);
          },
          abort: function () {
            r && r.onload(C, !0);
          },
        };
      }
    });
  var zt = [],
    Xt = /(=)\?(?=&|$)|\?\?/;
  ke.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || ke.expando + "_" + Lt++;
      return (this[e] = !0), e;
    },
  }),
    ke.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Xt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Xt.test(e.data) &&
              "data");
      return a || "jsonp" === e.dataTypes[0]
        ? ((r = e.jsonpCallback =
            ke.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Xt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || ke.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = h[r]),
          (h[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            (h[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && ke.isFunction(i) && i(o[0]),
              (o = i = C);
          }),
          "script")
        : C;
    });
  var Ut,
    Vt,
    Yt = 0,
    Jt =
      h.ActiveXObject &&
      function () {
        var e;
        for (e in Ut) Ut[e](C, !0);
      };
  (ke.ajaxSettings.xhr = h.ActiveXObject
    ? function () {
        return (!this.isLocal && M()) || O();
      }
    : M),
    (Vt = ke.ajaxSettings.xhr()),
    (ke.support.cors = !!Vt && "withCredentials" in Vt),
    (Vt = ke.support.ajax = !!Vt) &&
      ke.ajaxTransport(function (l) {
        var c;
        if (!l.crossDomain || ke.support.cors)
          return {
            send: function (e, a) {
              var s,
                t,
                u = l.xhr();
              if (
                (l.username
                  ? u.open(l.type, l.url, l.async, l.username, l.password)
                  : u.open(l.type, l.url, l.async),
                l.xhrFields)
              )
                for (t in l.xhrFields) u[t] = l.xhrFields[t];
              l.mimeType &&
                u.overrideMimeType &&
                u.overrideMimeType(l.mimeType),
                l.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (t in e) u.setRequestHeader(t, e[t]);
              } catch (K) {}
              u.send((l.hasContent && l.data) || null),
                (c = function (e, t) {
                  var n, r, i, o;
                  try {
                    if (c && (t || 4 === u.readyState))
                      if (
                        ((c = C),
                        s &&
                          ((u.onreadystatechange = ke.noop),
                          Jt && delete Ut[s]),
                        t)
                      )
                        4 !== u.readyState && u.abort();
                      else {
                        (o = {}),
                          (n = u.status),
                          (r = u.getAllResponseHeaders()),
                          "string" == typeof u.responseText &&
                            (o.text = u.responseText);
                        try {
                          i = u.statusText;
                        } catch (te) {
                          i = "";
                        }
                        n || !l.isLocal || l.crossDomain
                          ? 1223 === n && (n = 204)
                          : (n = o.text ? 200 : 404);
                      }
                  } catch (ne) {
                    t || a(-1, ne);
                  }
                  o && a(n, i, o, r);
                }),
                l.async
                  ? 4 === u.readyState
                    ? setTimeout(c)
                    : ((s = ++Yt),
                      Jt && (Ut || ((Ut = {}), ke(h).unload(Jt)), (Ut[s] = c)),
                      (u.onreadystatechange = c))
                  : c();
            },
            abort: function () {
              c && c(C, !0);
            },
          };
      });
  var Gt,
    Qt,
    Kt = /^(?:toggle|show|hide)$/,
    Zt = RegExp("^(?:([+-])=|)(" + le + ")([a-z%]*)$", "i"),
    en = /queueHooks$/,
    tn = [$],
    nn = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = Zt.exec(t),
            o = (i && i[3]) || (ke.cssNumber[e] ? "" : "px"),
            a =
              (ke.cssNumber[e] || ("px" !== o && +r)) &&
              Zt.exec(ke.css(n.elem, e)),
            s = 1,
            u = 20;
          if (a && a[3] !== o)
            for (
              o = o || a[3], i = i || [], a = +r || 1;
              (a /= s = s || ".5"),
                ke.style(n.elem, e, a + o),
                s !== (s = n.cur() / r) && 1 !== s && --u;

            );
          return (
            i &&
              ((a = n.start = +a || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        },
      ],
    };
  (ke.Animation = ke.extend(P, {
    tweener: function (e, t) {
      ke.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]), (nn[n] = nn[n] || []), nn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? tn.unshift(e) : tn.push(e);
    },
  })),
    ((ke.Tween = W).prototype = {
      constructor: W,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ke.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = W.propHooks[this.prop];
        return e && e.get ? e.get(this) : W.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = W.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? ke.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : W.propHooks._default.set(this),
          this
        );
      },
    }),
    (W.prototype.init.prototype = W.prototype),
    (W.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? (t = ke.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          ke.fx.step[e.prop]
            ? ke.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[ke.cssProps[e.prop]] || ke.cssHooks[e.prop])
            ? ke.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (W.propHooks.scrollTop = W.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    ke.each(["toggle", "show", "hide"], function (e, r) {
      var i = ke.fn[r];
      ke.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(I(r, !0), e, t, n);
      };
    }),
    ke.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(T)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = ke.isEmptyObject(t),
          o = ke.speed(e, n, r),
          a = function () {
            var e = P(this, ke.extend({}, t), o);
            (i || ke._data(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = C)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = ke.timers,
              r = ke._data(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && en.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (e || !o) && ke.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = ke._data(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = ke.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                ke.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ke.each(
      {
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        ke.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (ke.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ke.extend({}, e)
          : {
              complete: n || (!n && t) || (ke.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !ke.isFunction(t) && t),
            };
      return (
        (r.duration = ke.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in ke.fx.speeds
          ? ke.fx.speeds[r.duration]
          : ke.fx.speeds._default),
        (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          ke.isFunction(r.old) && r.old.call(this),
            r.queue && ke.dequeue(this, r.queue);
        }),
        r
      );
    }),
    (ke.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (ke.timers = []),
    (ke.fx = W.prototype.init),
    (ke.fx.tick = function () {
      var e,
        t = ke.timers,
        n = 0;
      for (Gt = ke.now(); t.length > n; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || ke.fx.stop(), (Gt = C);
    }),
    (ke.fx.timer = function (e) {
      e() && ke.timers.push(e) && ke.fx.start();
    }),
    (ke.fx.interval = 13),
    (ke.fx.start = function () {
      Qt || (Qt = setInterval(ke.fx.tick, ke.fx.interval));
    }),
    (ke.fx.stop = function () {
      clearInterval(Qt), (Qt = null);
    }),
    (ke.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ke.fx.step = {}),
    ke.expr &&
      ke.expr.filters &&
      (ke.expr.filters.animated = function (t) {
        return ke.grep(ke.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
    (ke.fn.offset = function (t) {
      if (arguments.length)
        return t === C
          ? this
          : this.each(function (e) {
              ke.offset.setOffset(this, t, e);
            });
      var e,
        n,
        r = { top: 0, left: 0 },
        i = this[0],
        o = i && i.ownerDocument;
      return o
        ? ((e = o.documentElement),
          ke.contains(e, i)
            ? (typeof i.getBoundingClientRect !== V &&
                (r = i.getBoundingClientRect()),
              (n = z(o)),
              {
                top:
                  r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left:
                  r.left +
                  (n.pageXOffset || e.scrollLeft) -
                  (e.clientLeft || 0),
              })
            : r)
        : void 0;
    }),
    (ke.offset = {
      setOffset: function (e, t, n) {
        var r = ke.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i,
          o,
          a = ke(e),
          s = a.offset(),
          u = ke.css(e, "top"),
          l = ke.css(e, "left"),
          c = {},
          f = {};
        ("absolute" === r || "fixed" === r) && -1 < ke.inArray("auto", [u, l])
          ? ((i = (f = a.position()).top), (o = f.left))
          : ((i = parseFloat(u) || 0), (o = parseFloat(l) || 0)),
          ke.isFunction(t) && (t = t.call(e, n, s)),
          null != t.top && (c.top = t.top - s.top + i),
          null != t.left && (c.left = t.left - s.left + o),
          "using" in t ? t.using.call(e, c) : a.css(c);
      },
    }),
    ke.fn.extend({
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === ke.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                ke.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += ke.css(e[0], "borderTopWidth", !0)),
                (n.left += ke.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - ke.css(r, "marginTop", !0),
              left: t.left - n.left - ke.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || G;
            e && !ke.nodeName(e, "html") && "static" === ke.css(e, "position");

          )
            e = e.offsetParent;
          return e || G;
        });
      },
    }),
    ke.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = /Y/.test(i);
        ke.fn[t] = function (e) {
          return ke.access(
            this,
            function (e, t, n) {
              var r = z(e);
              return n === C
                ? r
                  ? i in r
                    ? r[i]
                    : r.document.documentElement[t]
                  : e[t]
                : (r
                    ? r.scrollTo(
                        o ? ke(r).scrollLeft() : n,
                        o ? n : ke(r).scrollTop()
                      )
                    : (e[t] = n),
                  C);
            },
            t,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    ke.each({ Height: "height", Width: "width" }, function (o, a) {
      ke.each(
        { padding: "inner" + o, content: a, "": "outer" + o },
        function (r, e) {
          ke.fn[e] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return ke.access(
              this,
              function (e, t, n) {
                var r;
                return ke.isWindow(e)
                  ? e.document.documentElement["client" + o]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + o],
                      r["scroll" + o],
                      e.body["offset" + o],
                      r["offset" + o],
                      r["client" + o]
                    ))
                  : n === C
                  ? ke.css(e, t, i)
                  : ke.style(e, t, n, i);
              },
              a,
              n ? e : C,
              n,
              null
            );
          };
        }
      );
    }),
    (ke.fn.size = function () {
      return this.length;
    }),
    (ke.fn.andSelf = ke.fn.addBack),
    "object" == typeof module && module && "object" == typeof module.exports
      ? (module.exports = ke)
      : ((h.jQuery = h.$ = ke),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
            return ke;
          }));
})(window),
  $(document).ready(function () {
    $(".pre-fill, .required-message").hide(),
      ($form = $("#ss-form")),
      $form.submit(function (e) {
        return (
          e.preventDefault(),
          $.ajax({
            type: $form.attr("method"),
            url: $form.attr("action"),
            data: $form.serialize(),
            error: function () {
              $.colorbox({
                inline: !0,
                href: "#content-response-message",
                width: "50%",
                height: "80%",
              }),
                $form[0].reset();
            },
          }),
          !1
        );
      });
  });
