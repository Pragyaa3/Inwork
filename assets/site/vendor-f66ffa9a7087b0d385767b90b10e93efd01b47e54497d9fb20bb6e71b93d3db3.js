var _gsScope;
!(function (t, e) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (p, e) {
  function s(t) {
    var e = t.length,
      n = rt.type(t);
    return (
      "function" !== n &&
      !rt.isWindow(t) &&
      (!(1 !== t.nodeType || !e) ||
        "array" === n ||
        0 === e ||
        ("number" == typeof e && 0 < e && e - 1 in t))
    );
  }
  function n(t, n, i) {
    if (rt.isFunction(n))
      return rt.grep(t, function (t, e) {
        return !!n.call(t, e, t) !== i;
      });
    if (n.nodeType)
      return rt.grep(t, function (t) {
        return (t === n) !== i;
      });
    if ("string" == typeof n) {
      if (ht.test(n)) return rt.filter(n, t, i);
      n = rt.filter(n, t);
    }
    return rt.grep(t, function (t) {
      return 0 <= rt.inArray(t, n) !== i;
    });
  }
  function i(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  function t(t) {
    var n = (bt[t] = {});
    return (
      rt.each(t.match(yt) || [], function (t, e) {
        n[e] = !0;
      }),
      n
    );
  }
  function r() {
    pt.addEventListener
      ? (pt.removeEventListener("DOMContentLoaded", o, !1),
        p.removeEventListener("load", o, !1))
      : (pt.detachEvent("onreadystatechange", o), p.detachEvent("onload", o));
  }
  function o() {
    (pt.addEventListener ||
      "load" === event.type ||
      "complete" === pt.readyState) &&
      (r(), rt.ready());
  }
  function l(t, e, n) {
    if (void 0 === n && 1 === t.nodeType) {
      var i = "data-" + e.replace(Ct, "-$1").toLowerCase();
      if ("string" == typeof (n = t.getAttribute(i))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : St.test(n)
                ? rt.parseJSON(n)
                : n));
        } catch (Q) {}
        rt.data(t, e, n);
      } else n = void 0;
    }
    return n;
  }
  function u(t) {
    var e;
    for (e in t)
      if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e)
        return !1;
    return !0;
  }
  function a(t, e, n, i) {
    if (rt.acceptData(t)) {
      var r,
        o,
        a = rt.expando,
        s = t.nodeType,
        l = s ? rt.cache : t,
        u = s ? t[a] : t[a] && a;
      if (
        (u && l[u] && (i || l[u].data)) ||
        void 0 !== n ||
        "string" != typeof e
      )
        return (
          u || (u = s ? (t[a] = V.pop() || rt.guid++) : a),
          l[u] || (l[u] = s ? {} : { toJSON: rt.noop }),
          ("object" == typeof e || "function" == typeof e) &&
            (i
              ? (l[u] = rt.extend(l[u], e))
              : (l[u].data = rt.extend(l[u].data, e))),
          (o = l[u]),
          i || (o.data || (o.data = {}), (o = o.data)),
          void 0 !== n && (o[rt.camelCase(e)] = n),
          "string" == typeof e
            ? null == (r = o[e]) && (r = o[rt.camelCase(e)])
            : (r = o),
          r
        );
    }
  }
  function c(t, e, n) {
    if (rt.acceptData(t)) {
      var i,
        r,
        o = t.nodeType,
        a = o ? rt.cache : t,
        s = o ? t[rt.expando] : rt.expando;
      if (a[s]) {
        if (e && (i = n ? a[s] : a[s].data)) {
          rt.isArray(e)
            ? (e = e.concat(rt.map(e, rt.camelCase)))
            : e in i
            ? (e = [e])
            : (e = (e = rt.camelCase(e)) in i ? [e] : e.split(" ")),
            (r = e.length);
          for (; r--; ) delete i[e[r]];
          if (n ? !u(i) : !rt.isEmptyObject(i)) return;
        }
        (n || (delete a[s].data, u(a[s]))) &&
          (o
            ? rt.cleanData([t], !0)
            : nt.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = null));
      }
    }
  }
  function f() {
    return !0;
  }
  function Tt() {
    return !1;
  }
  function h() {
    try {
      return pt.activeElement;
    } catch (p) {}
  }
  function m(t) {
    var e = Lt.split("|"),
      n = t.createDocumentFragment();
    if (n.createElement) for (; e.length; ) n.createElement(e.pop());
    return n;
  }
  function _(t, e) {
    var n,
      i,
      r = 0,
      o =
        typeof t.getElementsByTagName !== wt
          ? t.getElementsByTagName(e || "*")
          : typeof t.querySelectorAll !== wt
          ? t.querySelectorAll(e || "*")
          : void 0;
    if (!o)
      for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)
        !e || rt.nodeName(i, e) ? o.push(i) : rt.merge(o, _(i, e));
    return void 0 === e || (e && rt.nodeName(t, e)) ? rt.merge([t], o) : o;
  }
  function g(t) {
    jt.test(t.type) && (t.defaultChecked = t.checked);
  }
  function d(t, e) {
    return rt.nodeName(t, "table") &&
      rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function v(t) {
    return (t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type), t;
  }
  function y(t) {
    var e = Vt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function b(t, e) {
    for (var n, i = 0; null != (n = t[i]); i++)
      rt._data(n, "globalEval", !e || rt._data(e[i], "globalEval"));
  }
  function x(t, e) {
    if (1 === e.nodeType && rt.hasData(t)) {
      var n,
        i,
        r,
        o = rt._data(t),
        a = rt._data(e, o),
        s = o.events;
      if (s)
        for (n in (delete a.handle, (a.events = {}), s))
          for (i = 0, r = s[n].length; i < r; i++) rt.event.add(e, n, s[n][i]);
      a.data && (a.data = rt.extend({}, a.data));
    }
  }
  function w(t, e) {
    var n, i, r;
    if (1 === e.nodeType) {
      if (((n = e.nodeName.toLowerCase()), !nt.noCloneEvent && e[rt.expando])) {
        for (i in (r = rt._data(e)).events) rt.removeEvent(e, i, r.handle);
        e.removeAttribute(rt.expando);
      }
      "script" === n && e.text !== t.text
        ? ((v(e).text = t.text), y(e))
        : "object" === n
        ? (e.parentNode && (e.outerHTML = t.outerHTML),
          nt.html5Clone &&
            t.innerHTML &&
            !rt.trim(e.innerHTML) &&
            (e.innerHTML = t.innerHTML))
        : "input" === n && jt.test(t.type)
        ? ((e.defaultChecked = e.checked = t.checked),
          e.value !== t.value && (e.value = t.value))
        : "option" === n
        ? (e.defaultSelected = e.selected = t.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (e.defaultValue = t.defaultValue);
    }
  }
  function T(t, e) {
    var n = rt(e.createElement(t)).appendTo(e.body),
      i = p.getDefaultComputedStyle
        ? p.getDefaultComputedStyle(n[0]).display
        : rt.css(n[0], "display");
    return n.detach(), i;
  }
  function S(t) {
    var e = pt,
      n = ne[t];
    return (
      n ||
        (("none" !== (n = T(t, e)) && n) ||
          ((e = (
            (Gt = (
              Gt || rt("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(e.documentElement))[0].contentWindow ||
            Gt[0].contentDocument
          ).document).write(),
          e.close(),
          (n = T(t, e)),
          Gt.detach()),
        (ne[t] = n)),
      n
    );
  }
  function C(e, n) {
    return {
      get: function () {
        var t = e();
        if (null != t)
          return t
            ? void delete this.get
            : (this.get = n).apply(this, arguments);
      },
    };
  }
  function k(t, e) {
    if (e in t) return e;
    for (
      var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = me.length;
      r--;

    )
      if ((e = me[r] + n) in t) return e;
    return i;
  }
  function A(t, e) {
    for (var n, i, r, o = [], a = 0, s = t.length; a < s; a++)
      (i = t[a]).style &&
        ((o[a] = rt._data(i, "olddisplay")),
        (n = i.style.display),
        e
          ? (o[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display &&
              Pt(i) &&
              (o[a] = rt._data(i, "olddisplay", S(i.nodeName))))
          : o[a] ||
            ((r = Pt(i)),
            ((n && "none" !== n) || !r) &&
              rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
    for (a = 0; a < s; a++)
      (i = t[a]).style &&
        ((e && "none" !== i.style.display && "" !== i.style.display) ||
          (i.style.display = e ? o[a] || "" : "none"));
    return t;
  }
  function P(t, e, n) {
    var i = fe.exec(e);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
  }
  function O(t, e, n, i, r) {
    for (
      var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += rt.css(t, n + At[o], !0, r)),
        i
          ? ("content" === n && (a -= rt.css(t, "padding" + At[o], !0, r)),
            "margin" !== n &&
              (a -= rt.css(t, "border" + At[o] + "Width", !0, r)))
          : ((a += rt.css(t, "padding" + At[o], !0, r)),
            "padding" !== n &&
              (a += rt.css(t, "border" + At[o] + "Width", !0, r)));
    return a;
  }
  function j(t, e, n) {
    var i = !0,
      r = "width" === e ? t.offsetWidth : t.offsetHeight,
      o = ie(t),
      a = nt.boxSizing() && "border-box" === rt.css(t, "boxSizing", !1, o);
    if (r <= 0 || null == r) {
      if (
        (((r = re(t, e, o)) < 0 || null == r) && (r = t.style[e]), ae.test(r))
      )
        return r;
      (i = a && (nt.boxSizingReliable() || r === t.style[e])),
        (r = parseFloat(r) || 0);
    }
    return r + O(t, e, n || (a ? "border" : "content"), i, o) + "px";
  }
  function E(t, e, n, i, r) {
    return new E.prototype.init(t, e, n, i, r);
  }
  function R() {
    return (
      setTimeout(function () {
        _e = void 0;
      }),
      (_e = rt.now())
    );
  }
  function D(t, e) {
    var n,
      i = { height: t },
      r = 0;
    for (e = e ? 1 : 0; r < 4; r += 2 - e)
      i["margin" + (n = At[r])] = i["padding" + n] = t;
    return e && (i.opacity = i.width = t), i;
  }
  function N(t, e, n) {
    for (
      var i, r = (Ae[e] || []).concat(Ae["*"]), o = 0, a = r.length;
      o < a;
      o++
    )
      if ((i = r[o].call(n, e, t))) return i;
  }
  function M(e, t, n) {
    var i,
      r,
      o,
      a,
      s,
      l,
      u,
      c,
      f = this,
      h = {},
      d = e.style,
      p = e.nodeType && Pt(e),
      m = rt._data(e, "fxshow");
    for (i in (n.queue ||
      (null == (s = rt._queueHooks(e, "fx")).unqueued &&
        ((s.unqueued = 0),
        (l = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || l();
        })),
      s.unqueued++,
      f.always(function () {
        f.always(function () {
          s.unqueued--, rt.queue(e, "fx").length || s.empty.fire();
        });
      })),
    1 === e.nodeType &&
      ("height" in t || "width" in t) &&
      ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
      (u = rt.css(e, "display")),
      (c = S(e.nodeName)),
      "none" === u && (u = c),
      "inline" === u &&
        "none" === rt.css(e, "float") &&
        (nt.inlineBlockNeedsLayout && "inline" !== c
          ? (d.zoom = 1)
          : (d.display = "inline-block"))),
    n.overflow &&
      ((d.overflow = "hidden"),
      nt.shrinkWrapBlocks() ||
        f.always(function () {
          (d.overflow = n.overflow[0]),
            (d.overflowX = n.overflow[1]),
            (d.overflowY = n.overflow[2]);
        })),
    t))
      if (((r = t[i]), Te.exec(r))) {
        if (
          (delete t[i], (o = o || "toggle" === r), r === (p ? "hide" : "show"))
        ) {
          if ("show" !== r || !m || void 0 === m[i]) continue;
          p = !0;
        }
        h[i] = (m && m[i]) || rt.style(e, i);
      }
    if (!rt.isEmptyObject(h))
      for (i in (m
        ? "hidden" in m && (p = m.hidden)
        : (m = rt._data(e, "fxshow", {})),
      o && (m.hidden = !p),
      p
        ? rt(e).show()
        : f.done(function () {
            rt(e).hide();
          }),
      f.done(function () {
        var t;
        for (t in (rt._removeData(e, "fxshow"), h)) rt.style(e, t, h[t]);
      }),
      h))
        (a = N(p ? m[i] : 0, i, f)),
          i in m ||
            ((m[i] = a.start),
            p &&
              ((a.end = a.start),
              (a.start = "width" === i || "height" === i ? 1 : 0)));
  }
  function L(t, e) {
    var n, i, r, o, a;
    for (n in t)
      if (
        ((r = e[(i = rt.camelCase(n))]),
        (o = t[n]),
        rt.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
        n !== i && ((t[i] = o), delete t[n]),
        (a = rt.cssHooks[i]) && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete t[i], o))
          n in t || ((t[n] = o[n]), (e[n] = r));
      else e[i] = r;
  }
  function I(o, t, e) {
    var n,
      a,
      i = 0,
      r = ke.length,
      s = rt.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (a) return !1;
        for (
          var t = _e || R(),
            e = Math.max(0, u.startTime + u.duration - t),
            n = 1 - (e / u.duration || 0),
            i = 0,
            r = u.tweens.length;
          i < r;
          i++
        )
          u.tweens[i].run(n);
        return (
          s.notifyWith(o, [u, n, e]),
          n < 1 && r ? e : (s.resolveWith(o, [u]), !1)
        );
      },
      u = s.promise({
        elem: o,
        props: rt.extend({}, t),
        opts: rt.extend(!0, { specialEasing: {} }, e),
        originalProperties: t,
        originalOptions: e,
        startTime: _e || R(),
        duration: e.duration,
        tweens: [],
        createTween: function (t, e) {
          var n = rt.Tween(
            o,
            u.opts,
            t,
            e,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(n), n;
        },
        stop: function (t) {
          var e = 0,
            n = t ? u.tweens.length : 0;
          if (a) return this;
          for (a = !0; e < n; e++) u.tweens[e].run(1);
          return t ? s.resolveWith(o, [u, t]) : s.rejectWith(o, [u, t]), this;
        },
      }),
      c = u.props;
    for (L(c, u.opts.specialEasing); i < r; i++)
      if ((n = ke[i].call(u, o, c, u.opts))) return n;
    return (
      rt.map(c, N, u),
      rt.isFunction(u.opts.start) && u.opts.start.call(o, u),
      rt.fx.timer(rt.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function F(o) {
    return function (t, e) {
      "string" != typeof t && ((e = t), (t = "*"));
      var n,
        i = 0,
        r = t.toLowerCase().match(yt) || [];
      if (rt.isFunction(e))
        for (; (n = r[i++]); )
          "+" === n.charAt(0)
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(e))
            : (o[n] = o[n] || []).push(e);
    };
  }
  function B(e, r, o, a) {
    function s(t) {
      var i;
      return (
        (l[t] = !0),
        rt.each(e[t] || [], function (t, e) {
          var n = e(r, o, a);
          return "string" != typeof n || u || l[n]
            ? u
              ? !(i = n)
              : void 0
            : (r.dataTypes.unshift(n), s(n), !1);
        }),
        i
      );
    }
    var l = {},
      u = e === Ge;
    return s(r.dataTypes[0]) || (!l["*"] && s("*"));
  }
  function z(t, e) {
    var n,
      i,
      r = rt.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
    return n && rt.extend(!0, t, n), t;
  }
  function H(t, e, n) {
    for (var i, r, o, a, s = t.contents, l = t.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
    if (r)
      for (a in s)
        if (s[a] && s[a].test(r)) {
          l.unshift(a);
          break;
        }
    if (l[0] in n) o = l[0];
    else {
      for (a in n) {
        if (!l[0] || t.converters[a + " " + l[0]]) {
          o = a;
          break;
        }
        i || (i = a);
      }
      o = o || i;
    }
    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
  }
  function q(t, e, n, i) {
    var r,
      o,
      a,
      s,
      l,
      u = {},
      c = t.dataTypes.slice();
    if (c[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
    for (o = c.shift(); o; )
      if (
        (t.responseFields[o] && (n[t.responseFields[o]] = e),
        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (l = o),
        (o = c.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (!(a = u[l + " " + o] || u["* " + o]))
            for (r in u)
              if (
                (s = r.split(" "))[1] === o &&
                (a = u[l + " " + s[0]] || u["* " + s[0]])
              ) {
                !0 === a
                  ? (a = u[r])
                  : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && t["throws"]) e = a(e);
            else
              try {
                e = a(e);
              } catch (nt) {
                return {
                  state: "parsererror",
                  error: a ? nt : "No conversion from " + l + " to " + o,
                };
              }
        }
    return { state: "success", data: e };
  }
  function W(n, t, i, r) {
    var e;
    if (rt.isArray(t))
      rt.each(t, function (t, e) {
        i || tn.test(n)
          ? r(n, e)
          : W(n + "[" + ("object" == typeof e ? t : "") + "]", e, i, r);
      });
    else if (i || "object" !== rt.type(t)) r(n, t);
    else for (e in t) W(n + "[" + e + "]", t[e], i, r);
  }
  function X() {
    try {
      return new p.XMLHttpRequest();
    } catch (e) {}
  }
  function U() {
    try {
      return new p.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function $(t) {
    return rt.isWindow(t)
      ? t
      : 9 === t.nodeType && (t.defaultView || t.parentWindow);
  }
  var V = [],
    Y = V.slice,
    Q = V.concat,
    Z = V.push,
    G = V.indexOf,
    K = {},
    J = K.toString,
    tt = K.hasOwnProperty,
    et = "".trim,
    nt = {},
    it = "1.11.0",
    rt = function (t, e) {
      return new rt.fn.init(t, e);
    },
    ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    at = /^-ms-/,
    st = /-([\da-z])/gi,
    lt = function (t, e) {
      return e.toUpperCase();
    };
  (rt.fn = rt.prototype =
    {
      jquery: it,
      constructor: rt,
      selector: "",
      length: 0,
      toArray: function () {
        return Y.call(this);
      },
      get: function (t) {
        return null != t
          ? t < 0
            ? this[t + this.length]
            : this[t]
          : Y.call(this);
      },
      pushStack: function (t) {
        var e = rt.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t, e) {
        return rt.each(this, t, e);
      },
      map: function (n) {
        return this.pushStack(
          rt.map(this, function (t, e) {
            return n.call(t, e, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(Y.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(0 <= n && n < e ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: Z,
      sort: V.sort,
      splice: V.splice,
    }),
    (rt.extend = rt.fn.extend =
      function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s = t || {},
          l = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[l] || {}), l++),
            "object" == typeof s || rt.isFunction(s) || (s = {}),
            l === u && ((s = this), l--);
          l < u;
          l++
        )
          if (null != (o = arguments[l]))
            for (r in o)
              (e = s[r]),
                s !== (i = o[r]) &&
                  (c && i && (rt.isPlainObject(i) || (n = rt.isArray(i)))
                    ? (n
                        ? ((n = !1), (a = e && rt.isArray(e) ? e : []))
                        : (a = e && rt.isPlainObject(e) ? e : {}),
                      (s[r] = rt.extend(c, a, i)))
                    : void 0 !== i && (s[r] = i));
        return s;
      }),
    rt.extend({
      expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === rt.type(t);
      },
      isArray:
        Array.isArray ||
        function (t) {
          return "array" === rt.type(t);
        },
      isWindow: function (t) {
        return null != t && t == t.window;
      },
      isNumeric: function (t) {
        return 0 <= t - parseFloat(t);
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      isPlainObject: function (t) {
        var e;
        if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t))
          return !1;
        try {
          if (
            t.constructor &&
            !tt.call(t, "constructor") &&
            !tt.call(t.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (V) {
          return !1;
        }
        if (nt.ownLast) for (e in t) return tt.call(t, e);
        for (e in t);
        return void 0 === e || tt.call(t, e);
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? K[J.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (t) {
        t &&
          rt.trim(t) &&
          (
            p.execScript ||
            function (t) {
              p.eval.call(p, t);
            }
          )(t);
      },
      camelCase: function (t) {
        return t.replace(at, "ms-").replace(st, lt);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e, n) {
        var i = 0,
          r = t.length,
          o = s(t);
        if (n) {
          if (o) for (; i < r && !1 !== e.apply(t[i], n); i++);
          else for (i in t) if (!1 === e.apply(t[i], n)) break;
        } else if (o) for (; i < r && !1 !== e.call(t[i], i, t[i]); i++);
        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
        return t;
      },
      trim:
        et && !et.call("\ufeff\xa0")
          ? function (t) {
              return null == t ? "" : et.call(t);
            }
          : function (t) {
              return null == t ? "" : (t + "").replace(ot, "");
            },
      makeArray: function (t, e) {
        var n = e || [];
        return (
          null != t &&
            (s(Object(t))
              ? rt.merge(n, "string" == typeof t ? [t] : t)
              : Z.call(n, t)),
          n
        );
      },
      inArray: function (t, e, n) {
        var i;
        if (e) {
          if (G) return G.call(e, t, n);
          for (
            i = e.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
            n < i;
            n++
          )
            if (n in e && e[n] === t) return n;
        }
        return -1;
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, r = t.length; i < n; ) t[r++] = e[i++];
        if (n != n) for (; void 0 !== e[i]; ) t[r++] = e[i++];
        return (t.length = r), t;
      },
      grep: function (t, e, n) {
        for (var i = [], r = 0, o = t.length, a = !n; r < o; r++)
          !e(t[r], r) !== a && i.push(t[r]);
        return i;
      },
      map: function (t, e, n) {
        var i,
          r = 0,
          o = t.length,
          a = [];
        if (s(t)) for (; r < o; r++) null != (i = e(t[r], r, n)) && a.push(i);
        else for (r in t) null != (i = e(t[r], r, n)) && a.push(i);
        return Q.apply([], a);
      },
      guid: 1,
      proxy: function (t, e) {
        var n, i, r;
        return (
          "string" == typeof e && ((r = t[e]), (e = t), (t = r)),
          rt.isFunction(t)
            ? ((n = Y.call(arguments, 2)),
              ((i = function () {
                return t.apply(e || this, n.concat(Y.call(arguments)));
              }).guid = t.guid =
                t.guid || rt.guid++),
              i)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: nt,
    }),
    rt.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (t, e) {
        K["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var ut = (function (n) {
    function b(t, e, n, i) {
      var r, o, a, s, l, u, c, f, h, d;
      if (
        ((e ? e.ownerDocument || e : z) !== R && E(e),
        (n = n || []),
        !t || "string" != typeof t)
      )
        return n;
      if (1 !== (s = (e = e || R).nodeType) && 9 !== s) return [];
      if (N && !i) {
        if ((r = vt.exec(t)))
          if ((a = r[1])) {
            if (9 === s) {
              if (!(o = e.getElementById(a)) || !o.parentNode) return n;
              if (o.id === a) return n.push(o), n;
            } else if (
              e.ownerDocument &&
              (o = e.ownerDocument.getElementById(a)) &&
              F(e, o) &&
              o.id === a
            )
              return n.push(o), n;
          } else {
            if (r[2]) return J.apply(n, e.getElementsByTagName(t)), n;
            if (
              (a = r[3]) &&
              T.getElementsByClassName &&
              e.getElementsByClassName
            )
              return J.apply(n, e.getElementsByClassName(a)), n;
          }
        if (T.qsa && (!M || !M.test(t))) {
          if (
            ((f = c = B),
            (h = e),
            (d = 9 === s && t),
            1 === s && "object" !== e.nodeName.toLowerCase())
          ) {
            for (
              u = m(t),
                (c = e.getAttribute("id"))
                  ? (f = c.replace(bt, "\\$&"))
                  : e.setAttribute("id", f),
                f = "[id='" + f + "'] ",
                l = u.length;
              l--;

            )
              u[l] = f + _(u[l]);
            (h = (yt.test(t) && p(e.parentNode)) || e), (d = u.join(","));
          }
          if (d)
            try {
              return J.apply(n, h.querySelectorAll(d)), n;
            } catch (W) {
            } finally {
              c || e.removeAttribute("id");
            }
        }
      }
      return g(t.replace(lt, "$1"), e, n, i);
    }
    function t() {
      function n(t, e) {
        return (
          i.push(t + " ") > S.cacheLength && delete n[i.shift()],
          (n[t + " "] = e)
        );
      }
      var i = [];
      return n;
    }
    function l(t) {
      return (t[B] = !0), t;
    }
    function i(t) {
      var e = R.createElement("div");
      try {
        return !!t(e);
      } catch (T) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function e(t, e) {
      for (var n = t.split("|"), i = t.length; i--; ) S.attrHandle[n[i]] = e;
    }
    function u(t, e) {
      var n = e && t,
        i =
          n &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
      return t ? 1 : -1;
    }
    function r(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function o(n) {
      return function (t) {
        var e = t.nodeName.toLowerCase();
        return ("input" === e || "button" === e) && t.type === n;
      };
    }
    function a(a) {
      return l(function (o) {
        return (
          (o = +o),
          l(function (t, e) {
            for (var n, i = a([], t.length, o), r = i.length; r--; )
              t[(n = i[r])] && (t[n] = !(e[n] = t[n]));
          })
        );
      });
    }
    function p(t) {
      return t && typeof t.getElementsByTagName !== V && t;
    }
    function s() {}
    function m(t, e) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l,
        u = X[t + " "];
      if (u) return e ? 0 : u.slice(0);
      for (a = t, s = [], l = S.preFilter; a; ) {
        for (o in ((!n || (i = ut.exec(a))) &&
          (i && (a = a.slice(i[0].length) || a), s.push((r = []))),
        (n = !1),
        (i = ct.exec(a)) &&
          ((n = i.shift()),
          r.push({ value: n, type: i[0].replace(lt, " ") }),
          (a = a.slice(n.length))),
        S.filter))
          !(i = pt[o].exec(a)) ||
            (l[o] && !(i = l[o](i))) ||
            ((n = i.shift()),
            r.push({ value: n, type: o, matches: i }),
            (a = a.slice(n.length)));
        if (!n) break;
      }
      return e ? a.length : a ? b.error(t) : X(t, s).slice(0);
    }
    function _(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
      return i;
    }
    function f(a, t, e) {
      var s = t.dir,
        l = e && "parentNode" === s,
        u = q++;
      return t.first
        ? function (t, e, n) {
            for (; (t = t[s]); ) if (1 === t.nodeType || l) return a(t, e, n);
          }
        : function (t, e, n) {
            var i,
              r,
              o = [H, u];
            if (n) {
              for (; (t = t[s]); )
                if ((1 === t.nodeType || l) && a(t, e, n)) return !0;
            } else
              for (; (t = t[s]); )
                if (1 === t.nodeType || l) {
                  if (
                    (i = (r = t[B] || (t[B] = {}))[s]) &&
                    i[0] === H &&
                    i[1] === u
                  )
                    return (o[2] = i[2]);
                  if (((r[s] = o)[2] = a(t, e, n))) return !0;
                }
          };
    }
    function h(r) {
      return 1 < r.length
        ? function (t, e, n) {
            for (var i = r.length; i--; ) if (!r[i](t, e, n)) return !1;
            return !0;
          }
        : r[0];
    }
    function x(t, e, n, i, r) {
      for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)
        (o = t[s]) && (!n || n(o, i, r)) && (a.push(o), u && e.push(s));
      return a;
    }
    function v(d, p, m, _, g, t) {
      return (
        _ && !_[B] && (_ = v(_)),
        g && !g[B] && (g = v(g, t)),
        l(function (t, e, n, i) {
          var r,
            o,
            a,
            s = [],
            l = [],
            u = e.length,
            c = t || y(p || "*", n.nodeType ? [n] : n, []),
            f = !d || (!t && p) ? c : x(c, s, d, n, i),
            h = m ? (g || (t ? d : u || _) ? [] : e) : f;
          if ((m && m(f, h, n, i), _))
            for (r = x(h, l), _(r, [], n, i), o = r.length; o--; )
              (a = r[o]) && (h[l[o]] = !(f[l[o]] = a));
          if (t) {
            if (g || d) {
              if (g) {
                for (r = [], o = h.length; o--; )
                  (a = h[o]) && r.push((f[o] = a));
                g(null, (h = []), r, i);
              }
              for (o = h.length; o--; )
                (a = h[o]) &&
                  -1 < (r = g ? et.call(t, a) : s[o]) &&
                  (t[r] = !(e[r] = a));
            }
          } else (h = x(h === e ? h.splice(u, h.length) : h)), g ? g(null, e, h, i) : J.apply(e, h);
        })
      );
    }
    function d(t) {
      for (
        var i,
          e,
          n,
          r = t.length,
          o = S.relative[t[0].type],
          a = o || S.relative[" "],
          s = o ? 1 : 0,
          l = f(
            function (t) {
              return t === i;
            },
            a,
            !0
          ),
          u = f(
            function (t) {
              return -1 < et.call(i, t);
            },
            a,
            !0
          ),
          c = [
            function (t, e, n) {
              return (
                (!o && (n || e !== P)) ||
                ((i = e).nodeType ? l(t, e, n) : u(t, e, n))
              );
            },
          ];
        s < r;
        s++
      )
        if ((e = S.relative[t[s].type])) c = [f(h(c), e)];
        else {
          if ((e = S.filter[t[s].type].apply(null, t[s].matches))[B]) {
            for (n = ++s; n < r && !S.relative[t[n].type]; n++);
            return v(
              1 < s && h(c),
              1 < s &&
                _(
                  t
                    .slice(0, s - 1)
                    .concat({ value: " " === t[s - 2].type ? "*" : "" })
                ).replace(lt, "$1"),
              e,
              s < n && d(t.slice(s, n)),
              n < r && d((t = t.slice(n))),
              n < r && _(t)
            );
          }
          c.push(e);
        }
      return h(c);
    }
    function c(_, g) {
      var v = 0 < g.length,
        y = 0 < _.length,
        t = function (t, e, n, i, r) {
          var o,
            a,
            s,
            l = 0,
            u = "0",
            c = t && [],
            f = [],
            h = P,
            d = t || (y && S.find.TAG("*", r)),
            p = (H += null == h ? 1 : Math.random() || 0.1),
            m = d.length;
          for (r && (P = e !== R && e); u !== m && null != (o = d[u]); u++) {
            if (y && o) {
              for (a = 0; (s = _[a++]); )
                if (s(o, e, n)) {
                  i.push(o);
                  break;
                }
              r && (H = p);
            }
            v && ((o = !s && o) && l--, t && c.push(o));
          }
          if (((l += u), v && u !== l)) {
            for (a = 0; (s = g[a++]); ) s(c, f, e, n);
            if (t) {
              if (0 < l) for (; u--; ) c[u] || f[u] || (f[u] = G.call(i));
              f = x(f);
            }
            J.apply(i, f),
              r && !t && 0 < f.length && 1 < l + g.length && b.uniqueSort(i);
          }
          return r && ((H = p), (P = h)), c;
        };
      return v ? l(t) : t;
    }
    function y(t, e, n) {
      for (var i = 0, r = e.length; i < r; i++) b(t, e[i], n);
      return n;
    }
    function g(t, e, n, i) {
      var r,
        o,
        a,
        s,
        l,
        u = m(t);
      if (!i && 1 === u.length) {
        if (
          2 < (o = u[0] = u[0].slice(0)).length &&
          "ID" === (a = o[0]).type &&
          T.getById &&
          9 === e.nodeType &&
          N &&
          S.relative[o[1].type]
        ) {
          if (!(e = (S.find.ID(a.matches[0].replace(xt, wt), e) || [])[0]))
            return n;
          t = t.slice(o.shift().value.length);
        }
        for (
          r = pt.needsContext.test(t) ? 0 : o.length;
          r-- && ((a = o[r]), !S.relative[(s = a.type)]);

        )
          if (
            (l = S.find[s]) &&
            (i = l(
              a.matches[0].replace(xt, wt),
              (yt.test(o[0].type) && p(e.parentNode)) || e
            ))
          ) {
            if ((o.splice(r, 1), !(t = i.length && _(o))))
              return J.apply(n, i), n;
            break;
          }
      }
      return A(t, u)(i, e, !N, n, (yt.test(t) && p(e.parentNode)) || e), n;
    }
    var w,
      T,
      S,
      C,
      k,
      A,
      P,
      O,
      j,
      E,
      R,
      D,
      N,
      M,
      L,
      I,
      F,
      B = "sizzle" + -new Date(),
      z = n.document,
      H = 0,
      q = 0,
      W = t(),
      X = t(),
      U = t(),
      $ = function (t, e) {
        return t === e && (j = !0), 0;
      },
      V = "undefined",
      Y = 1 << 31,
      Q = {}.hasOwnProperty,
      Z = [],
      G = Z.pop,
      K = Z.push,
      J = Z.push,
      tt = Z.slice,
      et =
        Z.indexOf ||
        function (t) {
          for (var e = 0, n = this.length; e < n; e++)
            if (this[e] === t) return e;
          return -1;
        },
      nt =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      it = "[\\x20\\t\\r\\n\\f]",
      rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ot = rt.replace("w", "w#"),
      at =
        "\\[" +
        it +
        "*(" +
        rt +
        ")" +
        it +
        "*(?:([*^$|!~]?=)" +
        it +
        "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        ot +
        ")|)|)" +
        it +
        "*\\]",
      st =
        ":(" +
        rt +
        ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
        at.replace(3, 8) +
        ")*)|.*)\\)|)",
      lt = new RegExp(
        "^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$",
        "g"
      ),
      ut = new RegExp("^" + it + "*," + it + "*"),
      ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
      ft = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
      ht = new RegExp(st),
      dt = new RegExp("^" + ot + "$"),
      pt = {
        ID: new RegExp("^#(" + rt + ")"),
        CLASS: new RegExp("^\\.(" + rt + ")"),
        TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + at),
        PSEUDO: new RegExp("^" + st),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            it +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            it +
            "*(?:([+-]|)" +
            it +
            "*(\\d+)|))" +
            it +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + nt + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            it +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            it +
            "*((?:-\\d)?\\d*)" +
            it +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      mt = /^(?:input|select|textarea|button)$/i,
      _t = /^h\d$/i,
      gt = /^[^{]+\{\s*\[native \w/,
      vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      yt = /[+~]/,
      bt = /'|\\/g,
      xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
      wt = function (t, e, n) {
        var i = "0x" + e - 65536;
        return i != i || n
          ? e
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      };
    try {
      J.apply((Z = tt.call(z.childNodes)), z.childNodes),
        Z[z.childNodes.length].nodeType;
    } catch (Tt) {
      J = {
        apply: Z.length
          ? function (t, e) {
              K.apply(t, tt.call(e));
            }
          : function (t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            },
      };
    }
    for (w in ((T = b.support = {}),
    (k = b.isXML =
      function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
    (E = b.setDocument =
      function (t) {
        var e,
          l = t ? t.ownerDocument || t : z,
          n = l.defaultView;
        return l !== R && 9 === l.nodeType && l.documentElement
          ? ((D = (R = l).documentElement),
            (N = !k(l)),
            n &&
              n !== n.top &&
              (n.addEventListener
                ? n.addEventListener(
                    "unload",
                    function () {
                      E();
                    },
                    !1
                  )
                : n.attachEvent &&
                  n.attachEvent("onunload", function () {
                    E();
                  })),
            (T.attributes = i(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (T.getElementsByTagName = i(function (t) {
              return (
                t.appendChild(l.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (T.getElementsByClassName =
              gt.test(l.getElementsByClassName) &&
              i(function (t) {
                return (
                  (t.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (t.firstChild.className = "i"),
                  2 === t.getElementsByClassName("i").length
                );
              })),
            (T.getById = i(function (t) {
              return (
                (D.appendChild(t).id = B),
                !l.getElementsByName || !l.getElementsByName(B).length
              );
            })),
            T.getById
              ? ((S.find.ID = function (t, e) {
                  if (typeof e.getElementById !== V && N) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (S.filter.ID = function (t) {
                  var e = t.replace(xt, wt);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }))
              : (delete S.find.ID,
                (S.filter.ID = function (t) {
                  var n = t.replace(xt, wt);
                  return function (t) {
                    var e =
                      typeof t.getAttributeNode !== V &&
                      t.getAttributeNode("id");
                    return e && e.value === n;
                  };
                })),
            (S.find.TAG = T.getElementsByTagName
              ? function (t, e) {
                  return typeof e.getElementsByTagName !== V
                    ? e.getElementsByTagName(t)
                    : void 0;
                }
              : function (t, e) {
                  var n,
                    i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                  if ("*" !== t) return o;
                  for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }),
            (S.find.CLASS =
              T.getElementsByClassName &&
              function (t, e) {
                return typeof e.getElementsByClassName !== V && N
                  ? e.getElementsByClassName(t)
                  : void 0;
              }),
            (L = []),
            (M = []),
            (T.qsa = gt.test(l.querySelectorAll)) &&
              (i(function (t) {
                (t.innerHTML =
                  "<select t=''><option selected=''></option></select>"),
                  t.querySelectorAll("[t^='']").length &&
                    M.push("[*^$]=" + it + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    M.push("\\[" + it + "*(?:value|" + nt + ")"),
                  t.querySelectorAll(":checked").length || M.push(":checked");
              }),
              i(function (t) {
                var e = l.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    M.push("name" + it + "*[*^$|!~]?="),
                  t.querySelectorAll(":enabled").length ||
                    M.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  M.push(",.*:");
              })),
            (T.matchesSelector = gt.test(
              (I =
                D.webkitMatchesSelector ||
                D.mozMatchesSelector ||
                D.oMatchesSelector ||
                D.msMatchesSelector)
            )) &&
              i(function (t) {
                (T.disconnectedMatch = I.call(t, "div")),
                  I.call(t, "[s!='']:x"),
                  L.push("!=", st);
              }),
            (M = M.length && new RegExp(M.join("|"))),
            (L = L.length && new RegExp(L.join("|"))),
            (e = gt.test(D.compareDocumentPosition)),
            (F =
              e || gt.test(D.contains)
                ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                      i = e && e.parentNode;
                    return (
                      t === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            ($ = e
              ? function (t, e) {
                  if (t === e) return (j = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!T.sortDetached && e.compareDocumentPosition(t) === n)
                      ? t === l || (t.ownerDocument === z && F(z, t))
                        ? -1
                        : e === l || (e.ownerDocument === z && F(z, e))
                        ? 1
                        : O
                        ? et.call(O, t) - et.call(O, e)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (j = !0), 0;
                  var n,
                    i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    s = [e];
                  if (!r || !o)
                    return t === l
                      ? -1
                      : e === l
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : O
                      ? et.call(O, t) - et.call(O, e)
                      : 0;
                  if (r === o) return u(t, e);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (; a[i] === s[i]; ) i++;
                  return i
                    ? u(a[i], s[i])
                    : a[i] === z
                    ? -1
                    : s[i] === z
                    ? 1
                    : 0;
                }),
            l)
          : R;
      }),
    (b.matches = function (t, e) {
      return b(t, null, null, e);
    }),
    (b.matchesSelector = function (t, e) {
      if (
        ((t.ownerDocument || t) !== R && E(t),
        (e = e.replace(ft, "='$1']")),
        !(!T.matchesSelector || !N || (L && L.test(e)) || (M && M.test(e))))
      )
        try {
          var n = I.call(t, e);
          if (
            n ||
            T.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (C) {}
      return 0 < b(e, R, null, [t]).length;
    }),
    (b.contains = function (t, e) {
      return (t.ownerDocument || t) !== R && E(t), F(t, e);
    }),
    (b.attr = function (t, e) {
      (t.ownerDocument || t) !== R && E(t);
      var n = S.attrHandle[e.toLowerCase()],
        i = n && Q.call(S.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
      return void 0 !== i
        ? i
        : T.attributes || !N
        ? t.getAttribute(e)
        : (i = t.getAttributeNode(e)) && i.specified
        ? i.value
        : null;
    }),
    (b.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (b.uniqueSort = function (t) {
      var e,
        n = [],
        i = 0,
        r = 0;
      if (
        ((j = !T.detectDuplicates),
        (O = !T.sortStable && t.slice(0)),
        t.sort($),
        j)
      ) {
        for (; (e = t[r++]); ) e === t[r] && (i = n.push(r));
        for (; i--; ) t.splice(n[i], 1);
      }
      return (O = null), t;
    }),
    (C = b.getText =
      function (t) {
        var e,
          n = "",
          i = 0,
          r = t.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += C(t);
          } else if (3 === r || 4 === r) return t.nodeValue;
        } else for (; (e = t[i++]); ) n += C(e);
        return n;
      }),
    ((S = b.selectors =
      {
        cacheLength: 50,
        createPseudo: l,
        match: pt,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(xt, wt)),
              (t[3] = (t[4] || t[5] || "").replace(xt, wt)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || b.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && b.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              n = !t[5] && t[2];
            return pt.CHILD.test(t[0])
              ? null
              : (t[3] && void 0 !== t[4]
                  ? (t[2] = t[4])
                  : n &&
                    ht.test(n) &&
                    (e = m(n, !0)) &&
                    (e = n.indexOf(")", n.length - e) - n.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(xt, wt).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = W[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                W(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      (typeof t.getAttribute !== V &&
                        t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, i, r) {
            return function (t) {
              var e = b.attr(t, n);
              return null == e
                ? "!=" === i
                : !i ||
                    ((e += ""),
                    "=" === i
                      ? e === r
                      : "!=" === i
                      ? e !== r
                      : "^=" === i
                      ? r && 0 === e.indexOf(r)
                      : "*=" === i
                      ? r && -1 < e.indexOf(r)
                      : "$=" === i
                      ? r && e.slice(-r.length) === r
                      : "~=" === i
                      ? -1 < (" " + e + " ").indexOf(r)
                      : "|=" === i &&
                        (e === r || e.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (d, t, e, p, m) {
            var _ = "nth" !== d.slice(0, 3),
              g = "last" !== d.slice(-4),
              v = "of-type" === t;
            return 1 === p && 0 === m
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (t, e, n) {
                  var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u = _ !== g ? "nextSibling" : "previousSibling",
                    c = t.parentNode,
                    f = v && t.nodeName.toLowerCase(),
                    h = !n && !v;
                  if (c) {
                    if (_) {
                      for (; u; ) {
                        for (o = t; (o = o[u]); )
                          if (
                            v
                              ? o.nodeName.toLowerCase() === f
                              : 1 === o.nodeType
                          )
                            return !1;
                        l = u = "only" === d && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [g ? c.firstChild : c.lastChild]), g && h)) {
                      for (
                        s =
                          (i = (r = c[B] || (c[B] = {}))[d] || [])[0] === H &&
                          i[1],
                          a = i[0] === H && i[2],
                          o = s && c.childNodes[s];
                        (o = (++s && o && o[u]) || (a = s = 0) || l.pop());

                      )
                        if (1 === o.nodeType && ++a && o === t) {
                          r[d] = [H, s, a];
                          break;
                        }
                    } else if (
                      h &&
                      (i = (t[B] || (t[B] = {}))[d]) &&
                      i[0] === H
                    )
                      a = i[1];
                    else
                      for (
                        ;
                        (o = (++s && o && o[u]) || (a = s = 0) || l.pop()) &&
                        ((v
                          ? o.nodeName.toLowerCase() !== f
                          : 1 !== o.nodeType) ||
                          !++a ||
                          (h && ((o[B] || (o[B] = {}))[d] = [H, a]), o !== t));

                      );
                    return (a -= m) === p || (a % p == 0 && 0 <= a / p);
                  }
                };
          },
          PSEUDO: function (t, o) {
            var e,
              a =
                S.pseudos[t] ||
                S.setFilters[t.toLowerCase()] ||
                b.error("unsupported pseudo: " + t);
            return a[B]
              ? a(o)
              : 1 < a.length
              ? ((e = [t, t, "", o]),
                S.setFilters.hasOwnProperty(t.toLowerCase())
                  ? l(function (t, e) {
                      for (var n, i = a(t, o), r = i.length; r--; )
                        t[(n = et.call(t, i[r]))] = !(e[n] = i[r]);
                    })
                  : function (t) {
                      return a(t, 0, e);
                    })
              : a;
          },
        },
        pseudos: {
          not: l(function (t) {
            var i = [],
              r = [],
              s = A(t.replace(lt, "$1"));
            return s[B]
              ? l(function (t, e, n, i) {
                  for (var r, o = s(t, null, i, []), a = t.length; a--; )
                    (r = o[a]) && (t[a] = !(e[a] = r));
                })
              : function (t, e, n) {
                  return (i[0] = t), s(i, null, n, r), !r.pop();
                };
          }),
          has: l(function (e) {
            return function (t) {
              return 0 < b(e, t).length;
            };
          }),
          contains: l(function (e) {
            return function (t) {
              return -1 < (t.textContent || t.innerText || C(t)).indexOf(e);
            };
          }),
          lang: l(function (n) {
            return (
              dt.test(n || "") || b.error("unsupported lang: " + n),
              (n = n.replace(xt, wt).toLowerCase()),
              function (t) {
                var e;
                do {
                  if (
                    (e = N
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var e = n.location && n.location.hash;
            return e && e.slice(1) === t.id;
          },
          root: function (t) {
            return t === D;
          },
          focus: function (t) {
            return (
              t === R.activeElement &&
              (!R.hasFocus || R.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: function (t) {
            return !1 === t.disabled;
          },
          disabled: function (t) {
            return !0 === t.disabled;
          },
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !S.pseudos.empty(t);
          },
          header: function (t) {
            return _t.test(t.nodeName);
          },
          input: function (t) {
            return mt.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: a(function () {
            return [0];
          }),
          last: a(function (t, e) {
            return [e - 1];
          }),
          eq: a(function (t, e, n) {
            return [n < 0 ? n + e : n];
          }),
          even: a(function (t, e) {
            for (var n = 0; n < e; n += 2) t.push(n);
            return t;
          }),
          odd: a(function (t, e) {
            for (var n = 1; n < e; n += 2) t.push(n);
            return t;
          }),
          lt: a(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; 0 <= --i; ) t.push(i);
            return t;
          }),
          gt: a(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
            return t;
          }),
        },
      }).pseudos.nth = S.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      S.pseudos[w] = r(w);
    for (w in { submit: !0, reset: !0 }) S.pseudos[w] = o(w);
    return (
      (s.prototype = S.filters = S.pseudos),
      (S.setFilters = new s()),
      (A = b.compile =
        function (t, e) {
          var n,
            i = [],
            r = [],
            o = U[t + " "];
          if (!o) {
            for (e || (e = m(t)), n = e.length; n--; )
              (o = d(e[n]))[B] ? i.push(o) : r.push(o);
            o = U(t, c(r, i));
          }
          return o;
        }),
      (T.sortStable = B.split("").sort($).join("") === B),
      (T.detectDuplicates = !!j),
      E(),
      (T.sortDetached = i(function (t) {
        return 1 & t.compareDocumentPosition(R.createElement("div"));
      })),
      i(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        e("type|href|height|width", function (t, e, n) {
          return n
            ? void 0
            : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (T.attributes &&
        i(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        e("value", function (t, e, n) {
          return n || "input" !== t.nodeName.toLowerCase()
            ? void 0
            : t.defaultValue;
        }),
      i(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        e(nt, function (t, e, n) {
          var i;
          return n
            ? void 0
            : !0 === t[e]
            ? e.toLowerCase()
            : (i = t.getAttributeNode(e)) && i.specified
            ? i.value
            : null;
        }),
      b
    );
  })(p);
  (rt.find = ut),
    (rt.expr = ut.selectors),
    (rt.expr[":"] = rt.expr.pseudos),
    (rt.unique = ut.uniqueSort),
    (rt.text = ut.getText),
    (rt.isXMLDoc = ut.isXML),
    (rt.contains = ut.contains);
  var ct = rt.expr.match.needsContext,
    ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ht = /^.[^:#\[\.,]*$/;
  (rt.filter = function (t, e, n) {
    var i = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType
        ? rt.find.matchesSelector(i, t)
          ? [i]
          : []
        : rt.find.matches(
            t,
            rt.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    rt.fn.extend({
      find: function (t) {
        var e,
          n = [],
          i = this,
          r = i.length;
        if ("string" != typeof t)
          return this.pushStack(
            rt(t).filter(function () {
              for (e = 0; e < r; e++) if (rt.contains(i[e], this)) return !0;
            })
          );
        for (e = 0; e < r; e++) rt.find(t, i[e], n);
        return (
          ((n = this.pushStack(1 < r ? rt.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + t
            : t),
          n
        );
      },
      filter: function (t) {
        return this.pushStack(n(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(n(this, t || [], !0));
      },
      is: function (t) {
        return !!n(
          this,
          "string" == typeof t && ct.test(t) ? rt(t) : t || [],
          !1
        ).length;
      },
    });
  var dt,
    pt = p.document,
    mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((rt.fn.init = function (t, e) {
    var n, i;
    if (!t) return this;
    if ("string" != typeof t)
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : rt.isFunction(t)
        ? "undefined" != typeof dt.ready
          ? dt.ready(t)
          : t(rt)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          rt.makeArray(t, this));
    if (
      !(n =
        "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length
          ? [null, t, null]
          : mt.exec(t)) ||
      (!n[1] && e)
    )
      return !e || e.jquery ? (e || dt).find(t) : this.constructor(e).find(t);
    if (n[1]) {
      if (
        ((e = e instanceof rt ? e[0] : e),
        rt.merge(
          this,
          rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pt, !0)
        ),
        ft.test(n[1]) && rt.isPlainObject(e))
      )
        for (n in e)
          rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
      return this;
    }
    if ((i = pt.getElementById(n[2])) && i.parentNode) {
      if (i.id !== n[2]) return dt.find(t);
      (this.length = 1), (this[0] = i);
    }
    return (this.context = pt), (this.selector = t), this;
  }).prototype = rt.fn),
    (dt = rt(pt));
  var _t = /^(?:parents|prev(?:Until|All))/,
    gt = { children: !0, contents: !0, next: !0, prev: !0 };
  rt.extend({
    dir: function (t, e, n) {
      for (
        var i = [], r = t[e];
        r &&
        9 !== r.nodeType &&
        (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));

      )
        1 === r.nodeType && i.push(r), (r = r[e]);
      return i;
    },
    sibling: function (t, e) {
      for (var n = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && n.push(t);
      return n;
    },
  }),
    rt.fn.extend({
      has: function (t) {
        var e,
          n = rt(t, this),
          i = n.length;
        return this.filter(function () {
          for (e = 0; e < i; e++) if (rt.contains(this, n[e])) return !0;
        });
      },
      closest: function (t, e) {
        for (
          var n,
            i = 0,
            r = this.length,
            o = [],
            a =
              ct.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0;
          i < r;
          i++
        )
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && rt.find.matchesSelector(n, t))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(1 < o.length ? rt.unique(o) : o);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? rt.inArray(this[0], rt(t))
            : rt.inArray(t.jquery ? t[0] : t, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
    rt.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return rt.dir(t, "parentNode");
        },
        parentsUntil: function (t, e, n) {
          return rt.dir(t, "parentNode", n);
        },
        next: function (t) {
          return i(t, "nextSibling");
        },
        prev: function (t) {
          return i(t, "previousSibling");
        },
        nextAll: function (t) {
          return rt.dir(t, "nextSibling");
        },
        prevAll: function (t) {
          return rt.dir(t, "previousSibling");
        },
        nextUntil: function (t, e, n) {
          return rt.dir(t, "nextSibling", n);
        },
        prevUntil: function (t, e, n) {
          return rt.dir(t, "previousSibling", n);
        },
        siblings: function (t) {
          return rt.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return rt.sibling(t.firstChild);
        },
        contents: function (t) {
          return rt.nodeName(t, "iframe")
            ? t.contentDocument || t.contentWindow.document
            : rt.merge([], t.childNodes);
        },
      },
      function (i, r) {
        rt.fn[i] = function (t, e) {
          var n = rt.map(this, r, t);
          return (
            "Until" !== i.slice(-5) && (e = t),
            e && "string" == typeof e && (n = rt.filter(e, n)),
            1 < this.length &&
              (gt[i] || (n = rt.unique(n)), _t.test(i) && (n = n.reverse())),
            this.pushStack(n)
          );
        };
      }
    );
  var vt,
    yt = /\S+/g,
    bt = {};
  (rt.Callbacks = function (r) {
    r = "string" == typeof r ? bt[r] || t(r) : rt.extend({}, r);
    var o,
      e,
      n,
      a,
      i,
      s,
      l = [],
      u = !r.once && [],
      c = function (t) {
        for (
          e = r.memory && t, n = !0, i = s || 0, s = 0, a = l.length, o = !0;
          l && i < a;
          i++
        )
          if (!1 === l[i].apply(t[0], t[1]) && r.stopOnFalse) {
            e = !1;
            break;
          }
        (o = !1),
          l && (u ? u.length && c(u.shift()) : e ? (l = []) : f.disable());
      },
      f = {
        add: function () {
          if (l) {
            var t = l.length;
            !(function i(t) {
              rt.each(t, function (t, e) {
                var n = rt.type(e);
                "function" === n
                  ? (r.unique && f.has(e)) || l.push(e)
                  : e && e.length && "string" !== n && i(e);
              });
            })(arguments),
              o ? (a = l.length) : e && ((s = t), c(e));
          }
          return this;
        },
        remove: function () {
          return (
            l &&
              rt.each(arguments, function (t, e) {
                for (var n; -1 < (n = rt.inArray(e, l, n)); )
                  l.splice(n, 1), o && (n <= a && a--, n <= i && i--);
              }),
            this
          );
        },
        has: function (t) {
          return t ? -1 < rt.inArray(t, l) : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), (a = 0), this;
        },
        disable: function () {
          return (l = u = e = void 0), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (u = void 0), e || f.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (t, e) {
          return (
            !l ||
              (n && !u) ||
              ((e = [t, (e = e || []).slice ? e.slice() : e]),
              o ? u.push(e) : c(e)),
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
    rt.extend({
      Deferred: function (t) {
        var o = [
            ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
            ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
            ["notify", "progress", rt.Callbacks("memory")],
          ],
          r = "pending",
          a = {
            state: function () {
              return r;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            then: function () {
              var r = arguments;
              return rt
                .Deferred(function (i) {
                  rt.each(o, function (t, e) {
                    var n = rt.isFunction(r[t]) && r[t];
                    s[e[1]](function () {
                      var t = n && n.apply(this, arguments);
                      t && rt.isFunction(t.promise)
                        ? t
                            .promise()
                            .done(i.resolve)
                            .fail(i.reject)
                            .progress(i.notify)
                        : i[e[0] + "With"](
                            this === a ? i.promise() : this,
                            n ? [t] : arguments
                          );
                    });
                  }),
                    (r = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? rt.extend(t, a) : a;
            },
          },
          s = {};
        return (
          (a.pipe = a.then),
          rt.each(o, function (t, e) {
            var n = e[2],
              i = e[3];
            (a[e[1]] = n.add),
              i &&
                n.add(
                  function () {
                    r = i;
                  },
                  o[1 ^ t][2].disable,
                  o[2][2].lock
                ),
              (s[e[0]] = function () {
                return s[e[0] + "With"](this === s ? a : this, arguments), this;
              }),
              (s[e[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (t) {
        var r,
          e,
          n,
          i = 0,
          o = Y.call(arguments),
          a = o.length,
          s = 1 !== a || (t && rt.isFunction(t.promise)) ? a : 0,
          l = 1 === s ? t : rt.Deferred(),
          u = function (e, n, i) {
            return function (t) {
              (n[e] = this),
                (i[e] = 1 < arguments.length ? Y.call(arguments) : t),
                i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
            };
          };
        if (1 < a)
          for (r = new Array(a), e = new Array(a), n = new Array(a); i < a; i++)
            o[i] && rt.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .done(u(i, n, o))
                  .fail(l.reject)
                  .progress(u(i, e, r))
              : --s;
        return s || l.resolveWith(n, o), l.promise();
      },
    }),
    (rt.fn.ready = function (t) {
      return rt.ready.promise().done(t), this;
    }),
    rt.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? rt.readyWait++ : rt.ready(!0);
      },
      ready: function (t) {
        if (!0 === t ? !--rt.readyWait : !rt.isReady) {
          if (!pt.body) return setTimeout(rt.ready);
          ((rt.isReady = !0) !== t && 0 < --rt.readyWait) ||
            (vt.resolveWith(pt, [rt]),
            rt.fn.trigger && rt(pt).trigger("ready").off("ready"));
        }
      },
    }),
    (rt.ready.promise = function (t) {
      if (!vt)
        if (((vt = rt.Deferred()), "complete" === pt.readyState))
          setTimeout(rt.ready);
        else if (pt.addEventListener)
          pt.addEventListener("DOMContentLoaded", o, !1),
            p.addEventListener("load", o, !1);
        else {
          pt.attachEvent("onreadystatechange", o), p.attachEvent("onload", o);
          var e = !1;
          try {
            e = null == p.frameElement && pt.documentElement;
          } catch (Y) {}
          e &&
            e.doScroll &&
            (function Q() {
              if (!rt.isReady) {
                try {
                  e.doScroll("left");
                } catch (p) {
                  return setTimeout(Q, 50);
                }
                r(), rt.ready();
              }
            })();
        }
      return vt.promise(t);
    });
  var xt,
    wt = "undefined";
  for (xt in rt(nt)) break;
  (nt.ownLast = "0" !== xt),
    (nt.inlineBlockNeedsLayout = !1),
    rt(function () {
      var t,
        e,
        n = pt.getElementsByTagName("body")[0];
      n &&
        (((t = pt.createElement("div")).style.cssText =
          "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
        (e = pt.createElement("div")),
        n.appendChild(t).appendChild(e),
        typeof e.style.zoom !== wt &&
          ((e.style.cssText =
            "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1"),
          (nt.inlineBlockNeedsLayout = 3 === e.offsetWidth) &&
            (n.style.zoom = 1)),
        n.removeChild(t),
        (t = e = null));
    }),
    (function () {
      var t = pt.createElement("div");
      if (null == nt.deleteExpando) {
        nt.deleteExpando = !0;
        try {
          delete t.test;
        } catch (e) {
          nt.deleteExpando = !1;
        }
      }
      t = null;
    })(),
    (rt.acceptData = function (t) {
      var e = rt.noData[(t.nodeName + " ").toLowerCase()],
        n = +t.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!e || (!0 !== e && t.getAttribute("classid") === e))
      );
    });
  var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ct = /([A-Z])/g;
  rt.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (t) {
      return (
        !!(t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando]) && !u(t)
      );
    },
    data: function (t, e, n) {
      return a(t, e, n);
    },
    removeData: function (t, e) {
      return c(t, e);
    },
    _data: function (t, e, n) {
      return a(t, e, n, !0);
    },
    _removeData: function (t, e) {
      return c(t, e, !0);
    },
  }),
    rt.fn.extend({
      data: function (t, e) {
        var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== t)
          return "object" == typeof t
            ? this.each(function () {
                rt.data(this, t);
              })
            : 1 < arguments.length
            ? this.each(function () {
                rt.data(this, t, e);
              })
            : o
            ? l(o, t, rt.data(o, t))
            : void 0;
        if (
          this.length &&
          ((r = rt.data(o)), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))
        ) {
          for (n = a.length; n--; )
            0 === (i = a[n].name).indexOf("data-") &&
              l(o, (i = rt.camelCase(i.slice(5))), r[i]);
          rt._data(o, "parsedAttrs", !0);
        }
        return r;
      },
      removeData: function (t) {
        return this.each(function () {
          rt.removeData(this, t);
        });
      },
    }),
    rt.extend({
      queue: function (t, e, n) {
        var i;
        return t
          ? ((e = (e || "fx") + "queue"),
            (i = rt._data(t, e)),
            n &&
              (!i || rt.isArray(n)
                ? (i = rt._data(t, e, rt.makeArray(n)))
                : i.push(n)),
            i || [])
          : void 0;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = rt.queue(t, e),
          i = n.length,
          r = n.shift(),
          o = rt._queueHooks(t, e),
          a = function () {
            rt.dequeue(t, e);
          };
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            r.call(t, a, o)),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return (
          rt._data(t, n) ||
          rt._data(t, n, {
            empty: rt.Callbacks("once memory").add(function () {
              rt._removeData(t, e + "queue"), rt._removeData(t, n);
            }),
          })
        );
      },
    }),
    rt.fn.extend({
      queue: function (e, n) {
        var t = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), t--),
          arguments.length < t
            ? rt.queue(this[0], e)
            : void 0 === n
            ? this
            : this.each(function () {
                var t = rt.queue(this, e, n);
                rt._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && rt.dequeue(this, e);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          rt.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var n,
          i = 1,
          r = rt.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          a--;

        )
          (n = rt._data(o[a], t + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), r.promise(e);
      },
    });
  var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    At = ["Top", "Right", "Bottom", "Left"],
    Pt = function (t, e) {
      return (
        (t = e || t),
        "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
      );
    },
    Ot = (rt.access = function (t, e, n, i, r, o, a) {
      var s = 0,
        l = t.length,
        u = null == n;
      if ("object" === rt.type(n))
        for (s in ((r = !0), n)) rt.access(t, e, s, n[s], !0, o, a);
      else if (
        void 0 !== i &&
        ((r = !0),
        rt.isFunction(i) || (a = !0),
        u &&
          (a
            ? (e.call(t, i), (e = null))
            : ((u = e),
              (e = function (t, e, n) {
                return u.call(rt(t), n);
              }))),
        e)
      )
        for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
      return r ? t : u ? e.call(t) : l ? e(t[0], n) : o;
    }),
    jt = /^(?:checkbox|radio)$/i;
  !(function () {
    var t = pt.createDocumentFragment(),
      e = pt.createElement("div"),
      n = pt.createElement("input");
    if (
      (e.setAttribute("className", "t"),
      (e.innerHTML = "  <link/><table></table><a href='/a'>a</a>"),
      (nt.leadingWhitespace = 3 === e.firstChild.nodeType),
      (nt.tbody = !e.getElementsByTagName("tbody").length),
      (nt.htmlSerialize = !!e.getElementsByTagName("link").length),
      (nt.html5Clone =
        "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML),
      (n.type = "checkbox"),
      (n.checked = !0),
      t.appendChild(n),
      (nt.appendChecked = n.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
      t.appendChild(e),
      (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (nt.noCloneEvent = !0),
      e.attachEvent &&
        (e.attachEvent("onclick", function () {
          nt.noCloneEvent = !1;
        }),
        e.cloneNode(!0).click()),
      null == nt.deleteExpando)
    ) {
      nt.deleteExpando = !0;
      try {
        delete e.test;
      } catch (Y) {
        nt.deleteExpando = !1;
      }
    }
    t = e = n = null;
  })(),
    (function () {
      var t,
        e,
        n = pt.createElement("div");
      for (t in { submit: !0, change: !0, focusin: !0 })
        (e = "on" + t),
          (nt[t + "Bubbles"] = e in p) ||
            (n.setAttribute(e, "t"),
            (nt[t + "Bubbles"] = !1 === n.attributes[e].expando));
      n = null;
    })();
  var Et = /^(?:input|select|textarea)$/i,
    Rt = /^key/,
    Dt = /^(?:mouse|contextmenu)|click/,
    Nt = /^(?:focusinfocus|focusoutblur)$/,
    Mt = /^([^.]*)(?:\.(.+)|)$/;
  (rt.event = {
    global: {},
    add: function (t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        m,
        _ = rt._data(t);
      if (_) {
        for (
          n.handler && ((n = (l = n).handler), (r = l.selector)),
            n.guid || (n.guid = rt.guid++),
            (a = _.events) || (a = _.events = {}),
            (c = _.handle) ||
              ((c = _.handle =
                function (t) {
                  return typeof rt === wt ||
                    (t && rt.event.triggered === t.type)
                    ? void 0
                    : rt.event.dispatch.apply(c.elem, arguments);
                }).elem = t),
            s = (e = (e || "").match(yt) || [""]).length;
          s--;

        )
          (d = m = (o = Mt.exec(e[s]) || [])[1]),
            (p = (o[2] || "").split(".").sort()),
            d &&
              ((u = rt.event.special[d] || {}),
              (d = (r ? u.delegateType : u.bindType) || d),
              (u = rt.event.special[d] || {}),
              (f = rt.extend(
                {
                  type: d,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && rt.expr.match.needsContext.test(r),
                  namespace: p.join("."),
                },
                l
              )),
              (h = a[d]) ||
                (((h = a[d] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, i, p, c)) ||
                  (t.addEventListener
                    ? t.addEventListener(d, c, !1)
                    : t.attachEvent && t.attachEvent("on" + d, c))),
              u.add &&
                (u.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)),
              r ? h.splice(h.delegateCount++, 0, f) : h.push(f),
              (rt.event.global[d] = !0));
        t = null;
      }
    },
    remove: function (t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        h,
        d,
        p,
        m,
        _ = rt.hasData(t) && rt._data(t);
      if (_ && (c = _.events)) {
        for (u = (e = (e || "").match(yt) || [""]).length; u--; )
          if (
            ((d = m = (s = Mt.exec(e[u]) || [])[1]),
            (p = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = rt.event.special[d] || {},
                h = c[(d = (i ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = o = h.length;
              o--;

            )
              (a = h[o]),
                (!r && m !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (i && i !== a.selector && ("**" !== i || !a.selector)) ||
                  (h.splice(o, 1),
                  a.selector && h.delegateCount--,
                  f.remove && f.remove.call(t, a));
            l &&
              !h.length &&
              ((f.teardown && !1 !== f.teardown.call(t, p, _.handle)) ||
                rt.removeEvent(t, d, _.handle),
              delete c[d]);
          } else for (d in c) rt.event.remove(t, d + e[u], n, i, !0);
        rt.isEmptyObject(c) && (delete _.handle, rt._removeData(t, "events"));
      }
    },
    trigger: function (t, e, n, i) {
      var r,
        o,
        a,
        s,
        l,
        u,
        c,
        f = [n || pt],
        h = tt.call(t, "type") ? t.type : t,
        d = tt.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = u = n = n || pt),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Nt.test(h + rt.event.triggered) &&
          (0 <= h.indexOf(".") && ((h = (d = h.split(".")).shift()), d.sort()),
          (o = h.indexOf(":") < 0 && "on" + h),
          ((t = t[rt.expando]
            ? t
            : new rt.Event(h, "object" == typeof t && t)).isTrigger = i
            ? 2
            : 3),
          (t.namespace = d.join(".")),
          (t.namespace_re = t.namespace
            ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = n),
          (e = null == e ? [t] : rt.makeArray(e, [t])),
          (l = rt.event.special[h] || {}),
          i || !l.trigger || !1 !== l.trigger.apply(n, e)))
      ) {
        if (!i && !l.noBubble && !rt.isWindow(n)) {
          for (
            s = l.delegateType || h, Nt.test(s + h) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            f.push(a), (u = a);
          u === (n.ownerDocument || pt) &&
            f.push(u.defaultView || u.parentWindow || p);
        }
        for (c = 0; (a = f[c++]) && !t.isPropagationStopped(); )
          (t.type = 1 < c ? s : l.bindType || h),
            (r =
              (rt._data(a, "events") || {})[t.type] && rt._data(a, "handle")) &&
              r.apply(a, e),
            (r = o && a[o]) &&
              r.apply &&
              rt.acceptData(a) &&
              ((t.result = r.apply(a, e)),
              !1 === t.result && t.preventDefault());
        if (
          ((t.type = h),
          !i &&
            !t.isDefaultPrevented() &&
            (!l._default || !1 === l._default.apply(f.pop(), e)) &&
            rt.acceptData(n) &&
            o &&
            n[h] &&
            !rt.isWindow(n))
        ) {
          (u = n[o]) && (n[o] = null), (rt.event.triggered = h);
          try {
            n[h]();
          } catch (lt) {}
          (rt.event.triggered = void 0), u && (n[o] = u);
        }
        return t.result;
      }
    },
    dispatch: function (t) {
      t = rt.event.fix(t);
      var e,
        n,
        i,
        r,
        o,
        a = [],
        s = Y.call(arguments),
        l = (rt._data(this, "events") || {})[t.type] || [],
        u = rt.event.special[t.type] || {};
      if (
        (((s[0] = t).delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, t))
      ) {
        for (
          a = rt.event.handlers.call(this, t, l), e = 0;
          (r = a[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = r.elem, o = 0;
            (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();

          )
            (!t.namespace_re || t.namespace_re.test(i.namespace)) &&
              ((t.handleObj = i),
              (t.data = i.data),
              void 0 !==
                (n = (
                  (rt.event.special[i.origType] || {}).handle || i.handler
                ).apply(r.elem, s)) &&
                !1 === (t.result = n) &&
                (t.preventDefault(), t.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var n,
        i,
        r,
        o,
        a = [],
        s = e.delegateCount,
        l = t.target;
      if (s && l.nodeType && (!t.button || "click" !== t.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
            for (r = [], o = 0; o < s; o++)
              void 0 === r[(n = (i = e[o]).selector + " ")] &&
                (r[n] = i.needsContext
                  ? 0 <= rt(n, this).index(l)
                  : rt.find(n, this, null, [l]).length),
                r[n] && r.push(i);
            r.length && a.push({ elem: l, handlers: r });
          }
      return s < e.length && a.push({ elem: this, handlers: e.slice(s) }), a;
    },
    fix: function (t) {
      if (t[rt.expando]) return t;
      var e,
        n,
        i,
        r = t.type,
        o = t,
        a = this.fixHooks[r];
      for (
        a ||
          (this.fixHooks[r] = a =
            Dt.test(r) ? this.mouseHooks : Rt.test(r) ? this.keyHooks : {}),
          i = a.props ? this.props.concat(a.props) : this.props,
          t = new rt.Event(o),
          e = i.length;
        e--;

      )
        t[(n = i[e])] = o[n];
      return (
        t.target || (t.target = o.srcElement || pt),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        (t.metaKey = !!t.metaKey),
        a.filter ? a.filter(t, o) : t
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (t, e) {
        var n,
          i,
          r,
          o = e.button,
          a = e.fromElement;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((r = (i = t.target.ownerDocument || pt).documentElement),
            (n = i.body),
            (t.pageX =
              e.clientX +
              ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((r && r.scrollTop) || (n && n.scrollTop) || 0) -
              ((r && r.clientTop) || (n && n.clientTop) || 0))),
          !t.relatedTarget &&
            a &&
            (t.relatedTarget = a === t.target ? e.toElement : a),
          t.which ||
            void 0 === o ||
            (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          t
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== h() && this.focus)
            try {
              return this.focus(), !1;
            } catch (p) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === h() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return rt.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (t) {
          return rt.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result && (t.originalEvent.returnValue = t.result);
        },
      },
    },
    simulate: function (t, e, n, i) {
      var r = rt.extend(new rt.Event(), n, {
        type: t,
        isSimulated: !0,
        originalEvent: {},
      });
      i ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r),
        r.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (rt.removeEvent = pt.removeEventListener
      ? function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n, !1);
        }
      : function (t, e, n) {
          var i = "on" + e;
          t.detachEvent &&
            (typeof t[i] === wt && (t[i] = null), t.detachEvent(i, n));
        }),
    (rt.Event = function (t, e) {
      return this instanceof rt.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented &&
                  (!1 === t.returnValue ||
                    (t.getPreventDefault && t.getPreventDefault())))
                  ? f
                  : Tt))
            : (this.type = t),
          e && rt.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || rt.now()),
          void (this[rt.expando] = !0))
        : new rt.Event(t, e);
    }),
    (rt.Event.prototype = {
      isDefaultPrevented: Tt,
      isPropagationStopped: Tt,
      isImmediatePropagationStopped: Tt,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = f),
          t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = f),
          t &&
            (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = f), this.stopPropagation();
      },
    }),
    rt.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (t, o) {
        rt.event.special[t] = {
          delegateType: o,
          bindType: o,
          handle: function (t) {
            var e,
              n = this,
              i = t.relatedTarget,
              r = t.handleObj;
            return (
              (!i || (i !== n && !rt.contains(n, i))) &&
                ((t.type = r.origType),
                (e = r.handler.apply(this, arguments)),
                (t.type = o)),
              e
            );
          },
        };
      }
    ),
    nt.submitBubbles ||
      (rt.event.special.submit = {
        setup: function () {
          return (
            !rt.nodeName(this, "form") &&
            void rt.event.add(
              this,
              "click._submit keypress._submit",
              function (t) {
                var e = t.target,
                  n =
                    rt.nodeName(e, "input") || rt.nodeName(e, "button")
                      ? e.form
                      : void 0;
                n &&
                  !rt._data(n, "submitBubbles") &&
                  (rt.event.add(n, "submit._submit", function (t) {
                    t._submit_bubble = !0;
                  }),
                  rt._data(n, "submitBubbles", !0));
              }
            )
          );
        },
        postDispatch: function (t) {
          t._submit_bubble &&
            (delete t._submit_bubble,
            this.parentNode &&
              !t.isTrigger &&
              rt.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function () {
          return (
            !rt.nodeName(this, "form") && void rt.event.remove(this, "._submit")
          );
        },
      }),
    nt.changeBubbles ||
      (rt.event.special.change = {
        setup: function () {
          return Et.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (rt.event.add(this, "propertychange._change", function (t) {
                  "checked" === t.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                rt.event.add(this, "click._change", function (t) {
                  this._just_changed &&
                    !t.isTrigger &&
                    (this._just_changed = !1),
                    rt.event.simulate("change", this, t, !0);
                })),
              !1)
            : void rt.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Et.test(e.nodeName) &&
                  !rt._data(e, "changeBubbles") &&
                  (rt.event.add(e, "change._change", function (t) {
                    !this.parentNode ||
                      t.isSimulated ||
                      t.isTrigger ||
                      rt.event.simulate("change", this.parentNode, t, !0);
                  }),
                  rt._data(e, "changeBubbles", !0));
              });
        },
        handle: function (t) {
          var e = t.target;
          return this !== e ||
            t.isSimulated ||
            t.isTrigger ||
            ("radio" !== e.type && "checkbox" !== e.type)
            ? t.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return rt.event.remove(this, "._change"), !Et.test(this.nodeName);
        },
      }),
    nt.focusinBubbles ||
      rt.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
        var r = function (t) {
          rt.event.simulate(i, t.target, rt.event.fix(t), !0);
        };
        rt.event.special[i] = {
          setup: function () {
            var t = this.ownerDocument || this,
              e = rt._data(t, i);
            e || t.addEventListener(n, r, !0), rt._data(t, i, (e || 0) + 1);
          },
          teardown: function () {
            var t = this.ownerDocument || this,
              e = rt._data(t, i) - 1;
            e
              ? rt._data(t, i, e)
              : (t.removeEventListener(n, r, !0), rt._removeData(t, i));
          },
        };
      }),
    rt.fn.extend({
      on: function (t, e, n, i, r) {
        var o, a;
        if ("object" == typeof t) {
          for (o in ("string" != typeof e && ((n = n || e), (e = void 0)), t))
            this.on(o, e, n, t[o], r);
          return this;
        }
        if (
          (null == n && null == i
            ? ((i = e), (n = e = void 0))
            : null == i &&
              ("string" == typeof e
                ? ((i = n), (n = void 0))
                : ((i = n), (n = e), (e = void 0))),
          !1 === i)
        )
          i = Tt;
        else if (!i) return this;
        return (
          1 === r &&
            ((a = i),
            ((i = function (t) {
              return rt().off(t), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = rt.guid++))),
          this.each(function () {
            rt.event.add(this, t, i, n, e);
          })
        );
      },
      one: function (t, e, n, i) {
        return this.on(t, e, n, i, 1);
      },
      off: function (t, e, n) {
        var i, r;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            rt(t.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != typeof t)
          return (
            (!1 === e || "function" == typeof e) && ((n = e), (e = void 0)),
            !1 === n && (n = Tt),
            this.each(function () {
              rt.event.remove(this, t, n, e);
            })
          );
        for (r in t) this.off(r, e, t[r]);
        return this;
      },
      trigger: function (t, e) {
        return this.each(function () {
          rt.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        return n ? rt.event.trigger(t, e, n, !0) : void 0;
      },
    });
  var Lt =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    It = / jQuery\d+="(?:null|\d+)"/g,
    Ft = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
    Bt = /^\s+/,
    zt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ht = /<([\w:]+)/,
    qt = /<tbody/i,
    Wt = /<|&#?\w+;/,
    Xt = /<(?:script|style|link)/i,
    Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
    $t = /^$|\/(?:java|ecma)script/i,
    Vt = /^true\/(.*)/,
    Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Qt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    Zt = m(pt).appendChild(pt.createElement("div"));
  (Qt.optgroup = Qt.option),
    (Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead),
    (Qt.th = Qt.td),
    rt.extend({
      clone: function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l = rt.contains(t.ownerDocument, t);
        if (
          (nt.html5Clone || rt.isXMLDoc(t) || !Ft.test("<" + t.nodeName + ">")
            ? (o = t.cloneNode(!0))
            : ((Zt.innerHTML = t.outerHTML),
              Zt.removeChild((o = Zt.firstChild))),
          !(
            (nt.noCloneEvent && nt.noCloneChecked) ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            rt.isXMLDoc(t)
          ))
        )
          for (i = _(o), s = _(t), a = 0; null != (r = s[a]); ++a)
            i[a] && w(r, i[a]);
        if (e)
          if (n)
            for (s = s || _(t), i = i || _(o), a = 0; null != (r = s[a]); a++)
              x(r, i[a]);
          else x(t, o);
        return (
          0 < (i = _(o, "script")).length && b(i, !l && _(t, "script")),
          (i = s = r = null),
          o
        );
      },
      buildFragment: function (t, e, n, i) {
        for (
          var r, o, a, s, l, u, c, f = t.length, h = m(e), d = [], p = 0;
          p < f;
          p++
        )
          if ((o = t[p]) || 0 === o)
            if ("object" === rt.type(o)) rt.merge(d, o.nodeType ? [o] : o);
            else if (Wt.test(o)) {
              for (
                s = s || h.appendChild(e.createElement("div")),
                  l = (Ht.exec(o) || ["", ""])[1].toLowerCase(),
                  c = Qt[l] || Qt._default,
                  s.innerHTML = c[1] + o.replace(zt, "<$1></$2>") + c[2],
                  r = c[0];
                r--;

              )
                s = s.lastChild;
              if (
                (!nt.leadingWhitespace &&
                  Bt.test(o) &&
                  d.push(e.createTextNode(Bt.exec(o)[0])),
                !nt.tbody)
              )
                for (
                  r =
                    (o =
                      "table" !== l || qt.test(o)
                        ? "<table>" !== c[1] || qt.test(o)
                          ? 0
                          : s
                        : s.firstChild) && o.childNodes.length;
                  r--;

                )
                  rt.nodeName((u = o.childNodes[r]), "tbody") &&
                    !u.childNodes.length &&
                    o.removeChild(u);
              for (
                rt.merge(d, s.childNodes), s.textContent = "";
                s.firstChild;

              )
                s.removeChild(s.firstChild);
              s = h.lastChild;
            } else d.push(e.createTextNode(o));
        for (
          s && h.removeChild(s),
            nt.appendChecked || rt.grep(_(d, "input"), g),
            p = 0;
          (o = d[p++]);

        )
          if (
            (!i || -1 === rt.inArray(o, i)) &&
            ((a = rt.contains(o.ownerDocument, o)),
            (s = _(h.appendChild(o), "script")),
            a && b(s),
            n)
          )
            for (r = 0; (o = s[r++]); ) $t.test(o.type || "") && n.push(o);
        return (s = null), h;
      },
      cleanData: function (t, e) {
        for (
          var n,
            i,
            r,
            o,
            a = 0,
            s = rt.expando,
            l = rt.cache,
            u = nt.deleteExpando,
            c = rt.event.special;
          null != (n = t[a]);
          a++
        )
          if ((e || rt.acceptData(n)) && (o = (r = n[s]) && l[r])) {
            if (o.events)
              for (i in o.events)
                c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
            l[r] &&
              (delete l[r],
              u
                ? delete n[s]
                : typeof n.removeAttribute !== wt
                ? n.removeAttribute(s)
                : (n[s] = null),
              V.push(r));
          }
      },
    }),
    rt.fn.extend({
      text: function (t) {
        return Ot(
          this,
          function (t) {
            return void 0 === t
              ? rt.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || pt).createTextNode(t)
                );
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            d(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = d(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      remove: function (t, e) {
        for (
          var n, i = t ? rt.filter(t, this) : this, r = 0;
          null != (n = i[r]);
          r++
        )
          e || 1 !== n.nodeType || rt.cleanData(_(n)),
            n.parentNode &&
              (e && rt.contains(n.ownerDocument, n) && b(_(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && rt.cleanData(_(t, !1)); t.firstChild; )
            t.removeChild(t.firstChild);
          t.options && rt.nodeName(t, "select") && (t.options.length = 0);
        }
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return rt.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return Ot(
          this,
          function (t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t)
              return 1 === e.nodeType ? e.innerHTML.replace(It, "") : void 0;
            if (
              !(
                "string" != typeof t ||
                Xt.test(t) ||
                (!nt.htmlSerialize && Ft.test(t)) ||
                (!nt.leadingWhitespace && Bt.test(t)) ||
                Qt[(Ht.exec(t) || ["", ""])[1].toLowerCase()]
              )
            ) {
              t = t.replace(zt, "<$1></$2>");
              try {
                for (; n < i; n++)
                  1 === (e = this[n] || {}).nodeType &&
                    (rt.cleanData(_(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (Q) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function (t) {
        var e = t;
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode),
              rt.cleanData(_(this)),
              e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (n, i) {
        n = Q.apply([], n);
        var t,
          e,
          r,
          o,
          a,
          s,
          l = 0,
          u = this.length,
          c = this,
          f = u - 1,
          h = n[0],
          d = rt.isFunction(h);
        if (
          d ||
          (1 < u && "string" == typeof h && !nt.checkClone && Ut.test(h))
        )
          return this.each(function (t) {
            var e = c.eq(t);
            d && (n[0] = h.call(this, t, e.html())), e.domManip(n, i);
          });
        if (
          u &&
          ((t = (s = rt.buildFragment(n, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === s.childNodes.length && (s = t),
          t)
        ) {
          for (r = (o = rt.map(_(s, "script"), v)).length; l < u; l++)
            (e = s),
              l !== f &&
                ((e = rt.clone(e, !0, !0)), r && rt.merge(o, _(e, "script"))),
              i.call(this[l], e, l);
          if (r)
            for (
              a = o[o.length - 1].ownerDocument, rt.map(o, y), l = 0;
              l < r;
              l++
            )
              (e = o[l]),
                $t.test(e.type || "") &&
                  !rt._data(e, "globalEval") &&
                  rt.contains(a, e) &&
                  (e.src
                    ? rt._evalUrl && rt._evalUrl(e.src)
                    : rt.globalEval(
                        (e.text || e.textContent || e.innerHTML || "").replace(
                          Yt,
                          ""
                        )
                      ));
          s = t = null;
        }
        return this;
      },
    }),
    rt.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, a) {
        rt.fn[t] = function (t) {
          for (var e, n = 0, i = [], r = rt(t), o = r.length - 1; n <= o; n++)
            (e = n === o ? this : this.clone(!0)),
              rt(r[n])[a](e),
              Z.apply(i, e.get());
          return this.pushStack(i);
        };
      }
    );
  var Gt,
    Kt,
    Jt,
    te,
    ee,
    ne = {};
  (te = pt.createElement("div")),
    (ee =
      "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"),
    (te.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    ((Kt = te.getElementsByTagName("a")[0]).style.cssText =
      "float:left;opacity:.5"),
    (nt.opacity = /^0.5/.test(Kt.style.opacity)),
    (nt.cssFloat = !!Kt.style.cssFloat),
    (te.style.backgroundClip = "content-box"),
    (te.cloneNode(!0).style.backgroundClip = ""),
    (nt.clearCloneStyle = "content-box" === te.style.backgroundClip),
    (Kt = te = null),
    (nt.shrinkWrapBlocks = function () {
      var t, e, n;
      if (null == Jt) {
        if (!(t = pt.getElementsByTagName("body")[0])) return;
        (e = pt.createElement("div")),
          (n = pt.createElement("div")),
          t.appendChild(e).appendChild(n),
          (Jt = !1),
          typeof n.style.zoom !== wt &&
            ((n.style.cssText = ee + ";width:1px;padding:1px;zoom:1"),
            (n.innerHTML = "<div></div>"),
            (n.firstChild.style.width = "5px"),
            (Jt = 3 !== n.offsetWidth)),
          t.removeChild(e),
          (t = e = n = null);
      }
      return Jt;
    });
  var ie,
    re,
    oe = /^margin/,
    ae = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
    se = /^(top|right|bottom|left)$/;
  p.getComputedStyle
    ? ((ie = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null);
      }),
      (re = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s = t.style;
        return (
          (a = (n = n || ie(t)) ? n.getPropertyValue(e) || n[e] : void 0),
          n &&
            ("" !== a ||
              rt.contains(t.ownerDocument, t) ||
              (a = rt.style(t, e)),
            ae.test(a) &&
              oe.test(e) &&
              ((i = s.width),
              (r = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = i),
              (s.minWidth = r),
              (s.maxWidth = o))),
          void 0 === a ? a : a + ""
        );
      }))
    : pt.documentElement.currentStyle &&
      ((ie = function (t) {
        return t.currentStyle;
      }),
      (re = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s = t.style;
        return (
          null == (a = (n = n || ie(t)) ? n[e] : void 0) &&
            s &&
            s[e] &&
            (a = s[e]),
          ae.test(a) &&
            !se.test(e) &&
            ((i = s.left),
            (o = (r = t.runtimeStyle) && r.left) &&
              (r.left = t.currentStyle.left),
            (s.left = "fontSize" === e ? "1em" : a),
            (a = s.pixelLeft + "px"),
            (s.left = i),
            o && (r.left = o)),
          void 0 === a ? a : a + "" || "auto"
        );
      })),
    (function () {
      function t() {
        var t,
          e,
          n = pt.getElementsByTagName("body")[0];
        n &&
          ((t = pt.createElement("div")),
          (e = pt.createElement("div")),
          (t.style.cssText = l),
          n.appendChild(t).appendChild(e),
          (e.style.cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%"),
          rt.swap(n, null != n.style.zoom ? { zoom: 1 } : {}, function () {
            i = 4 === e.offsetWidth;
          }),
          (s = !(a = !(r = !0))),
          p.getComputedStyle &&
            ((a = "1%" !== (p.getComputedStyle(e, null) || {}).top),
            (r =
              "4px" ===
              (p.getComputedStyle(e, null) || { width: "4px" }).width)),
          n.removeChild(t),
          (e = n = null));
      }
      var e,
        o,
        i,
        r,
        a,
        s,
        n = pt.createElement("div"),
        l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
        u =
          "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
      (n.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        ((e = n.getElementsByTagName("a")[0]).style.cssText =
          "float:left;opacity:.5"),
        (nt.opacity = /^0.5/.test(e.style.opacity)),
        (nt.cssFloat = !!e.style.cssFloat),
        (n.style.backgroundClip = "content-box"),
        (n.cloneNode(!0).style.backgroundClip = ""),
        (nt.clearCloneStyle = "content-box" === n.style.backgroundClip),
        (e = n = null),
        rt.extend(nt, {
          reliableHiddenOffsets: function () {
            if (null != o) return o;
            var t,
              e,
              n,
              i = pt.createElement("div"),
              r = pt.getElementsByTagName("body")[0];
            return r
              ? (i.setAttribute("className", "t"),
                (i.innerHTML =
                  "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                ((t = pt.createElement("div")).style.cssText = l),
                r.appendChild(t).appendChild(i),
                (i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                ((e = i.getElementsByTagName("td"))[0].style.cssText =
                  "padding:0;margin:0;border:0;display:none"),
                (n = 0 === e[0].offsetHeight),
                (e[0].style.display = ""),
                (e[1].style.display = "none"),
                (o = n && 0 === e[0].offsetHeight),
                r.removeChild(t),
                (i = r = null),
                o)
              : void 0;
          },
          boxSizing: function () {
            return null == i && t(), i;
          },
          boxSizingReliable: function () {
            return null == r && t(), r;
          },
          pixelPosition: function () {
            return null == a && t(), a;
          },
          reliableMarginRight: function () {
            var t, e, n, i;
            if (null == s && p.getComputedStyle) {
              if (!(t = pt.getElementsByTagName("body")[0])) return;
              (e = pt.createElement("div")),
                (n = pt.createElement("div")),
                (e.style.cssText = l),
                t.appendChild(e).appendChild(n),
                ((i = n.appendChild(pt.createElement("div"))).style.cssText =
                  n.style.cssText =
                    u),
                (i.style.marginRight = i.style.width = "0"),
                (n.style.width = "1px"),
                (s = !parseFloat(
                  (p.getComputedStyle(i, null) || {}).marginRight
                )),
                t.removeChild(e);
            }
            return s;
          },
        });
    })(),
    (rt.swap = function (t, e, n, i) {
      var r,
        o,
        a = {};
      for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
      for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = a[o];
      return r;
    });
  var le = /alpha\([^)]*\)/i,
    ue = /opacity\s*=\s*([^)]*)/,
    ce = /^(none|table(?!-c[ea]).+)/,
    fe = new RegExp("^(" + kt + ")(.*)$", "i"),
    he = new RegExp("^([+-])=(" + kt + ")", "i"),
    de = { position: "absolute", visibility: "hidden", display: "block" },
    pe = { letterSpacing: 0, fontWeight: 400 },
    me = ["Webkit", "O", "Moz", "ms"];
  rt.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var n = re(t, "opacity");
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
    cssProps: { float: nt.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r,
          o,
          a,
          s = rt.camelCase(e),
          l = t.style;
        if (
          ((e = rt.cssProps[s] || (rt.cssProps[s] = k(l, s))),
          (a = rt.cssHooks[e] || rt.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];
        if (
          ("string" === (o = typeof n) &&
            (r = he.exec(n)) &&
            ((n = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e))),
            (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o || rt.cssNumber[s] || (n += "px"),
            nt.clearCloneStyle ||
              "" !== n ||
              0 !== e.indexOf("background") ||
              (l[e] = "inherit"),
            !(a && "set" in a && void 0 === (n = a.set(t, n, i)))))
        )
          try {
            (l[e] = ""), (l[e] = n);
          } catch (tt) {}
      }
    },
    css: function (t, e, n, i) {
      var r,
        o,
        a,
        s = rt.camelCase(e);
      return (
        (e = rt.cssProps[s] || (rt.cssProps[s] = k(t.style, s))),
        (a = rt.cssHooks[e] || rt.cssHooks[s]) &&
          "get" in a &&
          (o = a.get(t, !0, n)),
        void 0 === o && (o = re(t, e, i)),
        "normal" === o && e in pe && (o = pe[e]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || rt.isNumeric(r) ? r || 0 : o)
          : o
      );
    },
  }),
    rt.each(["height", "width"], function (t, r) {
      rt.cssHooks[r] = {
        get: function (t, e, n) {
          return e
            ? 0 === t.offsetWidth && ce.test(rt.css(t, "display"))
              ? rt.swap(t, de, function () {
                  return j(t, r, n);
                })
              : j(t, r, n)
            : void 0;
        },
        set: function (t, e, n) {
          var i = n && ie(t);
          return P(
            t,
            e,
            n
              ? O(
                  t,
                  r,
                  n,
                  nt.boxSizing() &&
                    "border-box" === rt.css(t, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    nt.opacity ||
      (rt.cssHooks.opacity = {
        get: function (t, e) {
          return ue.test(
            (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : e
            ? "1"
            : "";
        },
        set: function (t, e) {
          var n = t.style,
            i = t.currentStyle,
            r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            o = (i && i.filter) || n.filter || "";
          (((n.zoom = 1) <= e || "" === e) &&
            "" === rt.trim(o.replace(le, "")) &&
            n.removeAttribute &&
            (n.removeAttribute("filter"), "" === e || (i && !i.filter))) ||
            (n.filter = le.test(o) ? o.replace(le, r) : o + " " + r);
        },
      }),
    (rt.cssHooks.marginRight = C(nt.reliableMarginRight, function (t, e) {
      return e
        ? rt.swap(t, { display: "inline-block" }, re, [t, "marginRight"])
        : void 0;
    })),
    rt.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
      (rt.cssHooks[r + o] = {
        expand: function (t) {
          for (
            var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t];
            e < 4;
            e++
          )
            n[r + At[e] + o] = i[e] || i[e - 2] || i[0];
          return n;
        },
      }),
        oe.test(r) || (rt.cssHooks[r + o].set = P);
    }),
    rt.fn.extend({
      css: function (t, e) {
        return Ot(
          this,
          function (t, e, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (rt.isArray(e)) {
              for (i = ie(t), r = e.length; a < r; a++)
                o[e[a]] = rt.css(t, e[a], !1, i);
              return o;
            }
            return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e);
          },
          t,
          e,
          1 < arguments.length
        );
      },
      show: function () {
        return A(this, !0);
      },
      hide: function () {
        return A(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              Pt(this) ? rt(this).show() : rt(this).hide();
            });
      },
    }),
    ((rt.Tween = E).prototype = {
      constructor: E,
      init: function (t, e, n, i, r, o) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = r || "swing"),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (rt.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var t = E.propHooks[this.prop];
        return t && t.get ? t.get(this) : E.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          n = E.propHooks[this.prop];
        return (
          (this.pos = e =
            this.options.duration
              ? rt.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                )
              : t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : E.propHooks._default.set(this),
          this
        );
      },
    }),
    (E.prototype.init.prototype = E.prototype),
    (E.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] ||
            (t.elem.style && null != t.elem.style[t.prop])
            ? (e = rt.css(t.elem, t.prop, "")) && "auto" !== e
              ? e
              : 0
            : t.elem[t.prop];
        },
        set: function (t) {
          rt.fx.step[t.prop]
            ? rt.fx.step[t.prop](t)
            : t.elem.style &&
              (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop])
            ? rt.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }),
    (E.propHooks.scrollTop = E.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (rt.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
    }),
    (rt.fx = E.prototype.init),
    (rt.fx.step = {});
  var _e,
    ge,
    ve,
    ye,
    be,
    xe,
    we,
    Te = /^(?:toggle|show|hide)$/,
    Se = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
    Ce = /queueHooks$/,
    ke = [M],
    Ae = {
      "*": [
        function (t, e) {
          var n = this.createTween(t, e),
            i = n.cur(),
            r = Se.exec(e),
            o = (r && r[3]) || (rt.cssNumber[t] ? "" : "px"),
            a =
              (rt.cssNumber[t] || ("px" !== o && +i)) &&
              Se.exec(rt.css(n.elem, t)),
            s = 1,
            l = 20;
          if (a && a[3] !== o)
            for (
              o = o || a[3], r = r || [], a = +i || 1;
              (a /= s = s || ".5"),
                rt.style(n.elem, t, a + o),
                s !== (s = n.cur() / i) && 1 !== s && --l;

            );
          return (
            r &&
              ((a = n.start = +a || +i || 0),
              (n.unit = o),
              (n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2])),
            n
          );
        },
      ],
    };
  (rt.Animation = rt.extend(I, {
    tweener: function (t, e) {
      rt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
      for (var n, i = 0, r = t.length; i < r; i++)
        (n = t[i]), (Ae[n] = Ae[n] || []), Ae[n].unshift(e);
    },
    prefilter: function (t, e) {
      e ? ke.unshift(t) : ke.push(t);
    },
  })),
    (rt.speed = function (t, e, n) {
      var i =
        t && "object" == typeof t
          ? rt.extend({}, t)
          : {
              complete: n || (!n && e) || (rt.isFunction(t) && t),
              duration: t,
              easing: (n && e) || (e && !rt.isFunction(e) && e),
            };
      return (
        (i.duration = rt.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in rt.fx.speeds
          ? rt.fx.speeds[i.duration]
          : rt.fx.speeds._default),
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          rt.isFunction(i.old) && i.old.call(this),
            i.queue && rt.dequeue(this, i.queue);
        }),
        i
      );
    }),
    rt.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(Pt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, n, i);
      },
      animate: function (e, t, n, i) {
        var r = rt.isEmptyObject(e),
          o = rt.speed(t, n, i),
          a = function () {
            var t = I(this, rt.extend({}, e), o);
            (r || rt._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (r, t, o) {
        var a = function (t) {
          var e = t.stop;
          delete t.stop, e(o);
        };
        return (
          "string" != typeof r && ((o = t), (t = r), (r = void 0)),
          t && !1 !== r && this.queue(r || "fx", []),
          this.each(function () {
            var t = !0,
              e = null != r && r + "queueHooks",
              n = rt.timers,
              i = rt._data(this);
            if (e) i[e] && i[e].stop && a(i[e]);
            else for (e in i) i[e] && i[e].stop && Ce.test(e) && a(i[e]);
            for (e = n.length; e--; )
              n[e].elem !== this ||
                (null != r && n[e].queue !== r) ||
                (n[e].anim.stop(o), (t = !1), n.splice(e, 1));
            (t || !o) && rt.dequeue(this, r);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var t,
              e = rt._data(this),
              n = e[a + "queue"],
              i = e[a + "queueHooks"],
              r = rt.timers,
              o = n ? n.length : 0;
            for (
              e.finish = !0,
                rt.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === a &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < o; t++)
              n[t] && n[t].finish && n[t].finish.call(this);
            delete e.finish;
          })
        );
      },
    }),
    rt.each(["toggle", "show", "hide"], function (t, i) {
      var r = rt.fn[i];
      rt.fn[i] = function (t, e, n) {
        return null == t || "boolean" == typeof t
          ? r.apply(this, arguments)
          : this.animate(D(i, !0), t, e, n);
      };
    }),
    rt.each(
      {
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, i) {
        rt.fn[t] = function (t, e, n) {
          return this.animate(i, t, e, n);
        };
      }
    ),
    (rt.timers = []),
    (rt.fx.tick = function () {
      var t,
        e = rt.timers,
        n = 0;
      for (_e = rt.now(); n < e.length; n++)
        (t = e[n])() || e[n] !== t || e.splice(n--, 1);
      e.length || rt.fx.stop(), (_e = void 0);
    }),
    (rt.fx.timer = function (t) {
      rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop();
    }),
    (rt.fx.interval = 13),
    (rt.fx.start = function () {
      ge || (ge = setInterval(rt.fx.tick, rt.fx.interval));
    }),
    (rt.fx.stop = function () {
      clearInterval(ge), (ge = null);
    }),
    (rt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (rt.fn.delay = function (i, t) {
      return (
        (i = (rt.fx && rt.fx.speeds[i]) || i),
        (t = t || "fx"),
        this.queue(t, function (t, e) {
          var n = setTimeout(t, i);
          e.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (we = pt.createElement("div")).setAttribute("className", "t"),
    (we.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (ve = we.getElementsByTagName("a")[0]),
    (xe = (be = pt.createElement("select")).appendChild(
      pt.createElement("option")
    )),
    (ye = we.getElementsByTagName("input")[0]),
    (ve.style.cssText = "top:1px"),
    (nt.getSetAttribute = "t" !== we.className),
    (nt.style = /top/.test(ve.getAttribute("style"))),
    (nt.hrefNormalized = "/a" === ve.getAttribute("href")),
    (nt.checkOn = !!ye.value),
    (nt.optSelected = xe.selected),
    (nt.enctype = !!pt.createElement("form").enctype),
    (be.disabled = !0),
    (nt.optDisabled = !xe.disabled),
    (ye = pt.createElement("input")).setAttribute("value", ""),
    (nt.input = "" === ye.getAttribute("value")),
    (ye.value = "t"),
    ye.setAttribute("type", "radio"),
    (nt.radioValue = "t" === ye.value),
    (ve = ye = be = xe = we = null);
  var Pe = /\r/g;
  rt.fn.extend({
    val: function (n) {
      var i,
        t,
        r,
        e = this[0];
      return arguments.length
        ? ((r = rt.isFunction(n)),
          this.each(function (t) {
            var e;
            1 === this.nodeType &&
              (null == (e = r ? n.call(this, t, rt(this).val()) : n)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : rt.isArray(e) &&
                  (e = rt.map(e, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((i =
                rt.valHooks[this.type] ||
                rt.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                void 0 !== i.set(this, e, "value")) ||
                (this.value = e));
          }))
        : e
        ? (i = rt.valHooks[e.type] || rt.valHooks[e.nodeName.toLowerCase()]) &&
          "get" in i &&
          void 0 !== (t = i.get(e, "value"))
          ? t
          : "string" == typeof (t = e.value)
          ? t.replace(Pe, "")
          : null == t
          ? ""
          : t
        : void 0;
    },
  }),
    rt.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = rt.find.attr(t, "value");
            return null != e ? e : rt.text(t);
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                n,
                i = t.options,
                r = t.selectedIndex,
                o = "select-one" === t.type || r < 0,
                a = o ? null : [],
                s = o ? r + 1 : i.length,
                l = r < 0 ? s : o ? r : 0;
              l < s;
              l++
            )
              if (
                !(
                  (!(n = i[l]).selected && l !== r) ||
                  (nt.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    rt.nodeName(n.parentNode, "optgroup"))
                )
              ) {
                if (((e = rt(n).val()), o)) return e;
                a.push(e);
              }
            return a;
          },
          set: function (t, e) {
            for (
              var n, i, r = t.options, o = rt.makeArray(e), a = r.length;
              a--;

            )
              if (((i = r[a]), 0 <= rt.inArray(rt.valHooks.option.get(i), o)))
                try {
                  i.selected = n = !0;
                } catch (K) {
                  i.scrollHeight;
                }
              else i.selected = !1;
            return n || (t.selectedIndex = -1), r;
          },
        },
      },
    }),
    rt.each(["radio", "checkbox"], function () {
      (rt.valHooks[this] = {
        set: function (t, e) {
          return rt.isArray(e)
            ? (t.checked = 0 <= rt.inArray(rt(t).val(), e))
            : void 0;
        },
      }),
        nt.checkOn ||
          (rt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var Oe,
    je,
    Ee = rt.expr.attrHandle,
    Re = /^(?:checked|selected)$/i,
    De = nt.getSetAttribute,
    Ne = nt.input;
  rt.fn.extend({
    attr: function (t, e) {
      return Ot(this, rt.attr, t, e, 1 < arguments.length);
    },
    removeAttr: function (t) {
      return this.each(function () {
        rt.removeAttr(this, t);
      });
    },
  }),
    rt.extend({
      attr: function (t, e, n) {
        var i,
          r,
          o = t.nodeType;
        if (t && 3 !== o && 8 !== o && 2 !== o)
          return typeof t.getAttribute === wt
            ? rt.prop(t, e, n)
            : ((1 === o && rt.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (i =
                  rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? je : Oe))),
              void 0 === n
                ? i && "get" in i && null !== (r = i.get(t, e))
                  ? r
                  : null == (r = rt.find.attr(t, e))
                  ? void 0
                  : r
                : null !== n
                ? i && "set" in i && void 0 !== (r = i.set(t, n, e))
                  ? r
                  : (t.setAttribute(e, n + ""), n)
                : void rt.removeAttr(t, e));
      },
      removeAttr: function (t, e) {
        var n,
          i,
          r = 0,
          o = e && e.match(yt);
        if (o && 1 === t.nodeType)
          for (; (n = o[r++]); )
            (i = rt.propFix[n] || n),
              rt.expr.match.bool.test(n)
                ? (Ne && De) || !Re.test(n)
                  ? (t[i] = !1)
                  : (t[rt.camelCase("default-" + n)] = t[i] = !1)
                : rt.attr(t, n, ""),
              t.removeAttribute(De ? n : i);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          },
        },
      },
    }),
    (je = {
      set: function (t, e, n) {
        return (
          !1 === e
            ? rt.removeAttr(t, n)
            : (Ne && De) || !Re.test(n)
            ? t.setAttribute((!De && rt.propFix[n]) || n, n)
            : (t[rt.camelCase("default-" + n)] = t[n] = !0),
          n
        );
      },
    }),
    rt.each(rt.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var o = Ee[e] || rt.find.attr;
      Ee[e] =
        (Ne && De) || !Re.test(e)
          ? function (t, e, n) {
              var i, r;
              return (
                n ||
                  ((r = Ee[e]),
                  (Ee[e] = i),
                  (i = null != o(t, e, n) ? e.toLowerCase() : null),
                  (Ee[e] = r)),
                i
              );
            }
          : function (t, e, n) {
              return n
                ? void 0
                : t[rt.camelCase("default-" + e)]
                ? e.toLowerCase()
                : null;
            };
    }),
    (Ne && De) ||
      (rt.attrHooks.value = {
        set: function (t, e, n) {
          return rt.nodeName(t, "input")
            ? void (t.defaultValue = e)
            : Oe && Oe.set(t, e, n);
        },
      }),
    De ||
      ((Oe = {
        set: function (t, e, n) {
          var i = t.getAttributeNode(n);
          return (
            i || t.setAttributeNode((i = t.ownerDocument.createAttribute(n))),
            (i.value = e += ""),
            "value" === n || e === t.getAttribute(n) ? e : void 0
          );
        },
      }),
      (Ee.id =
        Ee.name =
        Ee.coords =
          function (t, e, n) {
            var i;
            return n
              ? void 0
              : (i = t.getAttributeNode(e)) && "" !== i.value
              ? i.value
              : null;
          }),
      (rt.valHooks.button = {
        get: function (t, e) {
          var n = t.getAttributeNode(e);
          return n && n.specified ? n.value : void 0;
        },
        set: Oe.set,
      }),
      (rt.attrHooks.contenteditable = {
        set: function (t, e, n) {
          Oe.set(t, "" !== e && e, n);
        },
      }),
      rt.each(["width", "height"], function (t, n) {
        rt.attrHooks[n] = {
          set: function (t, e) {
            return "" === e ? (t.setAttribute(n, "auto"), e) : void 0;
          },
        };
      })),
    nt.style ||
      (rt.attrHooks.style = {
        get: function (t) {
          return t.style.cssText || void 0;
        },
        set: function (t, e) {
          return (t.style.cssText = e + "");
        },
      });
  var Me = /^(?:input|select|textarea|button|object)$/i,
    Le = /^(?:a|area)$/i;
  rt.fn.extend({
    prop: function (t, e) {
      return Ot(this, rt.prop, t, e, 1 < arguments.length);
    },
    removeProp: function (t) {
      return (
        (t = rt.propFix[t] || t),
        this.each(function () {
          try {
            (this[t] = void 0), delete this[t];
          } catch (e) {}
        })
      );
    },
  }),
    rt.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (t, e, n) {
        var i,
          r,
          o = t.nodeType;
        if (t && 3 !== o && 8 !== o && 2 !== o)
          return (
            (1 !== o || !rt.isXMLDoc(t)) &&
              ((e = rt.propFix[e] || e), (r = rt.propHooks[e])),
            void 0 !== n
              ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                ? i
                : (t[e] = n)
              : r && "get" in r && null !== (i = r.get(t, e))
              ? i
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = rt.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : Me.test(t.nodeName) || (Le.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    nt.hrefNormalized ||
      rt.each(["href", "src"], function (t, e) {
        rt.propHooks[e] = {
          get: function (t) {
            return t.getAttribute(e, 4);
          },
        };
      }),
    nt.optSelected ||
      (rt.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return (
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
          );
        },
      }),
    rt.each(
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
        rt.propFix[this.toLowerCase()] = this;
      }
    ),
    nt.enctype || (rt.propFix.enctype = "encoding");
  var Ie = /[\t\r\n\f]/g;
  rt.fn.extend({
    addClass: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s = 0,
        l = this.length,
        u = "string" == typeof e && e;
      if (rt.isFunction(e))
        return this.each(function (t) {
          rt(this).addClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || "").match(yt) || []; s < l; s++)
          if (
            (i =
              1 === (n = this[s]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ie, " ") : " "))
          ) {
            for (o = 0; (r = t[o++]); )
              i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            (a = rt.trim(i)), n.className !== a && (n.className = a);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s = 0,
        l = this.length,
        u = 0 === arguments.length || ("string" == typeof e && e);
      if (rt.isFunction(e))
        return this.each(function (t) {
          rt(this).removeClass(e.call(this, t, this.className));
        });
      if (u)
        for (t = (e || "").match(yt) || []; s < l; s++)
          if (
            (i =
              1 === (n = this[s]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ie, " ") : ""))
          ) {
            for (o = 0; (r = t[o++]); )
              for (; 0 <= i.indexOf(" " + r + " "); )
                i = i.replace(" " + r + " ", " ");
            (a = e ? rt.trim(i) : ""), n.className !== a && (n.className = a);
          }
      return this;
    },
    toggleClass: function (r, e) {
      var o = typeof r;
      return "boolean" == typeof e && "string" === o
        ? e
          ? this.addClass(r)
          : this.removeClass(r)
        : this.each(
            rt.isFunction(r)
              ? function (t) {
                  rt(this).toggleClass(r.call(this, t, this.className, e), e);
                }
              : function () {
                  if ("string" === o)
                    for (
                      var t, e = 0, n = rt(this), i = r.match(yt) || [];
                      (t = i[e++]);

                    )
                      n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                  else
                    (o === wt || "boolean" === o) &&
                      (this.className &&
                        rt._data(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === r
                          ? ""
                          : rt._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (t) {
      for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
        if (
          1 === this[n].nodeType &&
          0 <= (" " + this[n].className + " ").replace(Ie, " ").indexOf(e)
        )
          return !0;
      return !1;
    },
  }),
    rt.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, n) {
        rt.fn[n] = function (t, e) {
          return 0 < arguments.length
            ? this.on(n, null, t, e)
            : this.trigger(n);
        };
      }
    ),
    rt.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
      bind: function (t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", n);
      },
    });
  var Fe = rt.now(),
    Be = /\?/,
    ze =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (rt.parseJSON = function (t) {
    if (p.JSON && p.JSON.parse) return p.JSON.parse(t + "");
    var r,
      o = null,
      e = rt.trim(t + "");
    return e &&
      !rt.trim(
        e.replace(ze, function (t, e, n, i) {
          return (
            r && e && (o = 0), 0 === o ? t : ((r = n || e), (o += !i - !n), "")
          );
        })
      )
      ? Function("return " + e)()
      : rt.error("Invalid JSON: " + t);
  }),
    (rt.parseXML = function (t) {
      var e;
      if (!t || "string" != typeof t) return null;
      try {
        p.DOMParser
          ? (e = new DOMParser().parseFromString(t, "text/xml"))
          : (((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            e.loadXML(t));
      } catch (Q) {
        e = void 0;
      }
      return (
        (e &&
          e.documentElement &&
          !e.getElementsByTagName("parsererror").length) ||
          rt.error("Invalid XML: " + t),
        e
      );
    });
  var He,
    qe,
    We = /#.*$/,
    Xe = /([?&])_=[^&]*/,
    Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    $e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ve = /^(?:GET|HEAD)$/,
    Ye = /^\/\//,
    Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ze = {},
    Ge = {},
    Ke = "*/".concat("*");
  try {
    qe = location.href;
  } catch (pn) {
    ((qe = pt.createElement("a")).href = ""), (qe = qe.href);
  }
  (He = Qe.exec(qe.toLowerCase()) || []),
    rt.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: qe,
        type: "GET",
        isLocal: $e.test(He[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ke,
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
          "text json": rt.parseJSON,
          "text xml": rt.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? z(z(t, rt.ajaxSettings), e) : z(rt.ajaxSettings, t);
      },
      ajaxPrefilter: F(Ze),
      ajaxTransport: F(Ge),
      ajax: function (t, e) {
        function n(t, e, n, i) {
          var r,
            o,
            a,
            s,
            l,
            u = e;
          2 !== x &&
            ((x = 2),
            h && clearTimeout(h),
            (p = void 0),
            (f = i || ""),
            (w.readyState = 0 < t ? 4 : 0),
            (r = (200 <= t && t < 300) || 304 === t),
            n && (s = H(m, w, n)),
            (s = q(m, s, w, r)),
            r
              ? (m.ifModified &&
                  ((l = w.getResponseHeader("Last-Modified")) &&
                    (rt.lastModified[c] = l),
                  (l = w.getResponseHeader("etag")) && (rt.etag[c] = l)),
                204 === t || "HEAD" === m.type
                  ? (u = "nocontent")
                  : 304 === t
                  ? (u = "notmodified")
                  : ((u = s.state), (o = s.data), (r = !(a = s.error))))
              : ((a = u), (t || !u) && ((u = "error"), t < 0 && (t = 0))),
            (w.status = t),
            (w.statusText = (e || u) + ""),
            r ? v.resolveWith(_, [o, u, w]) : v.rejectWith(_, [w, u, a]),
            w.statusCode(b),
            (b = void 0),
            d && g.trigger(r ? "ajaxSuccess" : "ajaxError", [w, m, r ? o : a]),
            y.fireWith(_, [w, u]),
            d &&
              (g.trigger("ajaxComplete", [w, m]),
              --rt.active || rt.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var i,
          r,
          c,
          f,
          h,
          d,
          p,
          o,
          m = rt.ajaxSetup({}, e),
          _ = m.context || m,
          g = m.context && (_.nodeType || _.jquery) ? rt(_) : rt.event,
          v = rt.Deferred(),
          y = rt.Callbacks("once memory"),
          b = m.statusCode || {},
          a = {},
          s = {},
          x = 0,
          l = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === x) {
                if (!o)
                  for (o = {}; (e = Ue.exec(f)); ) o[e[1].toLowerCase()] = e[2];
                e = o[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === x ? f : null;
            },
            setRequestHeader: function (t, e) {
              var n = t.toLowerCase();
              return x || ((t = s[n] = s[n] || t), (a[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return x || (m.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (x < 2) for (e in t) b[e] = [b[e], t[e]];
                else w.always(t[w.status]);
              return this;
            },
            abort: function (t) {
              var e = t || l;
              return p && p.abort(e), n(0, e), this;
            },
          };
        if (
          ((v.promise(w).complete = y.add),
          (w.success = w.done),
          (w.error = w.fail),
          (m.url = ((t || m.url || qe) + "")
            .replace(We, "")
            .replace(Ye, He[1] + "//")),
          (m.type = e.method || e.type || m.method || m.type),
          (m.dataTypes = rt
            .trim(m.dataType || "*")
            .toLowerCase()
            .match(yt) || [""]),
          null == m.crossDomain &&
            ((i = Qe.exec(m.url.toLowerCase())),
            (m.crossDomain = !(
              !i ||
              (i[1] === He[1] &&
                i[2] === He[2] &&
                (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                  (He[3] || ("http:" === He[1] ? "80" : "443")))
            ))),
          m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = rt.param(m.data, m.traditional)),
          B(Ze, m, e, w),
          2 === x)
        )
          return w;
        for (r in ((d = m.global) &&
          0 == rt.active++ &&
          rt.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !Ve.test(m.type)),
        (c = m.url),
        m.hasContent ||
          (m.data &&
            ((c = m.url += (Be.test(c) ? "&" : "?") + m.data), delete m.data),
          !1 === m.cache &&
            (m.url = Xe.test(c)
              ? c.replace(Xe, "$1_=" + Fe++)
              : c + (Be.test(c) ? "&" : "?") + "_=" + Fe++)),
        m.ifModified &&
          (rt.lastModified[c] &&
            w.setRequestHeader("If-Modified-Since", rt.lastModified[c]),
          rt.etag[c] && w.setRequestHeader("If-None-Match", rt.etag[c])),
        ((m.data && m.hasContent && !1 !== m.contentType) || e.contentType) &&
          w.setRequestHeader("Content-Type", m.contentType),
        w.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + Ke + "; q=0.01" : "")
            : m.accepts["*"]
        ),
        m.headers))
          w.setRequestHeader(r, m.headers[r]);
        if (m.beforeSend && (!1 === m.beforeSend.call(_, w, m) || 2 === x))
          return w.abort();
        for (r in ((l = "abort"), { success: 1, error: 1, complete: 1 }))
          w[r](m[r]);
        if ((p = B(Ge, m, e, w))) {
          (w.readyState = 1),
            d && g.trigger("ajaxSend", [w, m]),
            m.async &&
              0 < m.timeout &&
              (h = setTimeout(function () {
                w.abort("timeout");
              }, m.timeout));
          try {
            (x = 1), p.send(a, n);
          } catch (ht) {
            if (!(x < 2)) throw ht;
            n(-1, ht);
          }
        } else n(-1, "No Transport");
        return w;
      },
      getJSON: function (t, e, n) {
        return rt.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return rt.get(t, void 0, e, "script");
      },
    }),
    rt.each(["get", "post"], function (t, r) {
      rt[r] = function (t, e, n, i) {
        return (
          rt.isFunction(e) && ((i = i || n), (n = e), (e = void 0)),
          rt.ajax({ url: t, type: r, dataType: i, data: e, success: n })
        );
      };
    }),
    rt.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        rt.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (rt._evalUrl = function (t) {
      return rt.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    rt.fn.extend({
      wrapAll: function (e) {
        if (rt.isFunction(e))
          return this.each(function (t) {
            rt(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var t = this;
                  t.firstChild && 1 === t.firstChild.nodeType;

                )
                  t = t.firstChild;
                return t;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (n) {
        return this.each(
          rt.isFunction(n)
            ? function (t) {
                rt(this).wrapInner(n.call(this, t));
              }
            : function () {
                var t = rt(this),
                  e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n);
              }
        );
      },
      wrap: function (e) {
        var n = rt.isFunction(e);
        return this.each(function (t) {
          rt(this).wrapAll(n ? e.call(this, t) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (rt.expr.filters.hidden = function (t) {
      return (
        (t.offsetWidth <= 0 && t.offsetHeight <= 0) ||
        (!nt.reliableHiddenOffsets() &&
          "none" === ((t.style && t.style.display) || rt.css(t, "display")))
      );
    }),
    (rt.expr.filters.visible = function (t) {
      return !rt.expr.filters.hidden(t);
    });
  var Je = /%20/g,
    tn = /\[\]$/,
    en = /\r?\n/g,
    nn = /^(?:submit|button|image|reset|file)$/i,
    rn = /^(?:input|select|textarea|keygen)/i;
  (rt.param = function (t, e) {
    var n,
      i = [],
      r = function (t, e) {
        (e = rt.isFunction(e) ? e() : null == e ? "" : e),
          (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
      };
    if (
      (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional),
      rt.isArray(t) || (t.jquery && !rt.isPlainObject(t)))
    )
      rt.each(t, function () {
        r(this.name, this.value);
      });
    else for (n in t) W(n, t[n], e, r);
    return i.join("&").replace(Je, "+");
  }),
    rt.fn.extend({
      serialize: function () {
        return rt.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = rt.prop(this, "elements");
          return t ? rt.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !rt(this).is(":disabled") &&
              rn.test(this.nodeName) &&
              !nn.test(t) &&
              (this.checked || !jt.test(t))
            );
          })
          .map(function (t, e) {
            var n = rt(this).val();
            return null == n
              ? null
              : rt.isArray(n)
              ? rt.map(n, function (t) {
                  return { name: e.name, value: t.replace(en, "\r\n") };
                })
              : { name: e.name, value: n.replace(en, "\r\n") };
          })
          .get();
      },
    }),
    (rt.ajaxSettings.xhr =
      void 0 !== p.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                X()) ||
              U()
            );
          }
        : X);
  var on = 0,
    an = {},
    sn = rt.ajaxSettings.xhr();
  p.ActiveXObject &&
    rt(p).on("unload", function () {
      for (var t in an) an[t](void 0, !0);
    }),
    (nt.cors = !!sn && "withCredentials" in sn),
    (sn = nt.ajax = !!sn) &&
      rt.ajaxTransport(function (l) {
        var u;
        if (!l.crossDomain || nt.cors)
          return {
            send: function (t, o) {
              var e,
                a = l.xhr(),
                s = ++on;
              if (
                (a.open(l.type, l.url, l.async, l.username, l.password),
                l.xhrFields)
              )
                for (e in l.xhrFields) a[e] = l.xhrFields[e];
              for (e in (l.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(l.mimeType),
              l.crossDomain ||
                t["X-Requested-With"] ||
                (t["X-Requested-With"] = "XMLHttpRequest"),
              t))
                void 0 !== t[e] && a.setRequestHeader(e, t[e] + "");
              a.send((l.hasContent && l.data) || null),
                (u = function (t, e) {
                  var n, i, r;
                  if (u && (e || 4 === a.readyState))
                    if (
                      (delete an[s],
                      (u = void 0),
                      (a.onreadystatechange = rt.noop),
                      e)
                    )
                      4 !== a.readyState && a.abort();
                    else {
                      (r = {}),
                        (n = a.status),
                        "string" == typeof a.responseText &&
                          (r.text = a.responseText);
                      try {
                        i = a.statusText;
                      } catch (et) {
                        i = "";
                      }
                      n || !l.isLocal || l.crossDomain
                        ? 1223 === n && (n = 204)
                        : (n = r.text ? 200 : 404);
                    }
                  r && o(n, i, r, a.getAllResponseHeaders());
                }),
                l.async
                  ? 4 === a.readyState
                    ? setTimeout(u)
                    : (a.onreadystatechange = an[s] = u)
                  : u();
            },
            abort: function () {
              u && u(void 0, !0);
            },
          };
      }),
    rt.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (t) {
          return rt.globalEval(t), t;
        },
      },
    }),
    rt.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1),
        t.crossDomain && ((t.type = "GET"), (t.global = !1));
    }),
    rt.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var i,
          r = pt.head || rt("head")[0] || pt.documentElement;
        return {
          send: function (t, n) {
            ((i = pt.createElement("script")).async = !0),
              e.scriptCharset && (i.charset = e.scriptCharset),
              (i.src = e.url),
              (i.onload = i.onreadystatechange =
                function (t, e) {
                  (e ||
                    !i.readyState ||
                    /loaded|complete/.test(i.readyState)) &&
                    ((i.onload = i.onreadystatechange = null),
                    i.parentNode && i.parentNode.removeChild(i),
                    (i = null),
                    e || n(200, "success"));
                }),
              r.insertBefore(i, r.firstChild);
          },
          abort: function () {
            i && i.onload(void 0, !0);
          },
        };
      }
    });
  var ln = [],
    un = /(=)\?(?=&|$)|\?\?/;
  rt.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = ln.pop() || rt.expando + "_" + Fe++;
      return (this[t] = !0), t;
    },
  }),
    rt.ajaxPrefilter("json jsonp", function (t, e, n) {
      var i,
        r,
        o,
        a =
          !1 !== t.jsonp &&
          (un.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              !(t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              un.test(t.data) &&
              "data");
      return a || "jsonp" === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            rt.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(un, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (Be.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return o || rt.error(i + " was not called"), o[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = p[i]),
          (p[i] = function () {
            o = arguments;
          }),
          n.always(function () {
            (p[i] = r),
              t[i] && ((t.jsonpCallback = e.jsonpCallback), ln.push(i)),
              o && rt.isFunction(r) && r(o[0]),
              (o = r = void 0);
          }),
          "script")
        : void 0;
    }),
    (rt.parseHTML = function (t, e, n) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && ((n = e), (e = !1)), (e = e || pt);
      var i = ft.exec(t),
        r = !n && [];
      return i
        ? [e.createElement(i[1])]
        : ((i = rt.buildFragment([t], e, r)),
          r && r.length && rt(r).remove(),
          rt.merge([], i.childNodes));
    });
  var cn = rt.fn.load;
  (rt.fn.load = function (t, e, n) {
    if ("string" != typeof t && cn) return cn.apply(this, arguments);
    var i,
      r,
      o,
      a = this,
      s = t.indexOf(" ");
    return (
      0 <= s && ((i = t.slice(s, t.length)), (t = t.slice(0, s))),
      rt.isFunction(e)
        ? ((n = e), (e = void 0))
        : e && "object" == typeof e && (o = "POST"),
      0 < a.length &&
        rt
          .ajax({ url: t, type: o, dataType: "html", data: e })
          .done(function (t) {
            (r = arguments),
              a.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t);
          })
          .complete(
            n &&
              function (t, e) {
                a.each(n, r || [t.responseText, e, t]);
              }
          ),
      this
    );
  }),
    (rt.expr.filters.animated = function (e) {
      return rt.grep(rt.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var fn = p.document.documentElement;
  (rt.offset = {
    setOffset: function (t, e, n) {
      var i,
        r,
        o,
        a,
        s,
        l,
        u = rt.css(t, "position"),
        c = rt(t),
        f = {};
      "static" === u && (t.style.position = "relative"),
        (s = c.offset()),
        (o = rt.css(t, "top")),
        (l = rt.css(t, "left")),
        ("absolute" === u || "fixed" === u) && -1 < rt.inArray("auto", [o, l])
          ? ((a = (i = c.position()).top), (r = i.left))
          : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
        rt.isFunction(e) && (e = e.call(t, n, s)),
        null != e.top && (f.top = e.top - s.top + a),
        null != e.left && (f.left = e.left - s.left + r),
        "using" in e ? e.using.call(t, f) : c.css(f);
    },
  }),
    rt.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                rt.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = { top: 0, left: 0 },
          r = this[0],
          o = r && r.ownerDocument;
        return o
          ? ((t = o.documentElement),
            rt.contains(t, r)
              ? (typeof r.getBoundingClientRect !== wt &&
                  (i = r.getBoundingClientRect()),
                (n = $(o)),
                {
                  top:
                    i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    i.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0),
                })
              : i)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            n = { top: 0, left: 0 },
            i = this[0];
          return (
            "fixed" === rt.css(i, "position")
              ? (e = i.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                rt.nodeName(t[0], "html") || (n = t.offset()),
                (n.top += rt.css(t[0], "borderTopWidth", !0)),
                (n.left += rt.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - n.top - rt.css(i, "marginTop", !0),
              left: e.left - n.left - rt.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || fn;
            t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");

          )
            t = t.offsetParent;
          return t || fn;
        });
      },
    }),
    rt.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, r) {
        var o = /Y/.test(r);
        rt.fn[e] = function (t) {
          return Ot(
            this,
            function (t, e, n) {
              var i = $(t);
              return void 0 === n
                ? i
                  ? r in i
                    ? i[r]
                    : i.document.documentElement[e]
                  : t[e]
                : void (i
                    ? i.scrollTo(
                        o ? rt(i).scrollLeft() : n,
                        o ? n : rt(i).scrollTop()
                      )
                    : (t[e] = n));
            },
            e,
            t,
            arguments.length,
            null
          );
        };
      }
    ),
    rt.each(["top", "left"], function (t, n) {
      rt.cssHooks[n] = C(nt.pixelPosition, function (t, e) {
        return e
          ? ((e = re(t, n)), ae.test(e) ? rt(t).position()[n] + "px" : e)
          : void 0;
      });
    }),
    rt.each({ Height: "height", Width: "width" }, function (o, a) {
      rt.each(
        { padding: "inner" + o, content: a, "": "outer" + o },
        function (i, t) {
          rt.fn[t] = function (t, e) {
            var n = arguments.length && (i || "boolean" != typeof t),
              r = i || (!0 === t || !0 === e ? "margin" : "border");
            return Ot(
              this,
              function (t, e, n) {
                var i;
                return rt.isWindow(t)
                  ? t.document.documentElement["client" + o]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + o],
                      i["scroll" + o],
                      t.body["offset" + o],
                      i["offset" + o],
                      i["client" + o]
                    ))
                  : void 0 === n
                  ? rt.css(t, e, r)
                  : rt.style(t, e, n, r);
              },
              a,
              n ? t : void 0,
              n,
              null
            );
          };
        }
      );
    }),
    (rt.fn.size = function () {
      return this.length;
    }),
    (rt.fn.andSelf = rt.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return rt;
      });
  var hn = p.jQuery,
    dn = p.$;
  return (
    (rt.noConflict = function (t) {
      return (
        p.$ === rt && (p.$ = dn), t && p.jQuery === rt && (p.jQuery = hn), rt
      );
    }),
    typeof e === wt && (p.jQuery = p.$ = rt),
    rt
  );
}),
  (function (c, l) {
    "use strict";
    var u;
    c.rails !== l && c.error("jquery-ujs has already been loaded!");
    var t = c(document);
    (c.rails = u =
      {
        linkClickSelector:
          "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector:
          "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector:
          "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector:
          "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector:
          "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector:
          "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector:
          "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector:
          "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
          return c("meta[name=csrf-token]").attr("content");
        },
        csrfParam: function () {
          return c("meta[name=csrf-param]").attr("content");
        },
        CSRFProtection: function (t) {
          var e = u.csrfToken();
          e && t.setRequestHeader("X-CSRF-Token", e);
        },
        refreshCSRFTokens: function () {
          c('form input[name="' + u.csrfParam() + '"]').val(u.csrfToken());
        },
        fire: function (t, e, n) {
          var i = c.Event(e);
          return t.trigger(i, n), !1 !== i.result;
        },
        confirm: function (t) {
          return confirm(t);
        },
        ajax: function (t) {
          return c.ajax(t);
        },
        href: function (t) {
          return t[0].href;
        },
        isRemote: function (t) {
          return t.data("remote") !== l && !1 !== t.data("remote");
        },
        handleRemote: function (i) {
          var t, e, n, r, o, a;
          if (u.fire(i, "ajax:before")) {
            if (
              ((r = i.data("with-credentials") || null),
              (o =
                i.data("type") || (c.ajaxSettings && c.ajaxSettings.dataType)),
              i.is("form"))
            ) {
              (t = i.data("ujs:submit-button-formmethod") || i.attr("method")),
                (e =
                  i.data("ujs:submit-button-formaction") || i.attr("action")),
                (n = c(i[0]).serializeArray());
              var s = i.data("ujs:submit-button");
              s && (n.push(s), i.data("ujs:submit-button", null)),
                i.data("ujs:submit-button-formmethod", null),
                i.data("ujs:submit-button-formaction", null);
            } else
              i.is(u.inputChangeSelector)
                ? ((t = i.data("method")),
                  (e = i.data("url")),
                  (n = i.serialize()),
                  i.data("params") && (n = n + "&" + i.data("params")))
                : i.is(u.buttonClickSelector)
                ? ((t = i.data("method") || "get"),
                  (e = i.data("url")),
                  (n = i.serialize()),
                  i.data("params") && (n = n + "&" + i.data("params")))
                : ((t = i.data("method")),
                  (e = u.href(i)),
                  (n = i.data("params") || null));
            return (
              (a = {
                type: t || "GET",
                data: n,
                dataType: o,
                beforeSend: function (t, e) {
                  if (
                    (e.dataType === l &&
                      t.setRequestHeader(
                        "accept",
                        "*/*;q=0.5, " + e.accepts.script
                      ),
                    !u.fire(i, "ajax:beforeSend", [t, e]))
                  )
                    return !1;
                  i.trigger("ajax:send", t);
                },
                success: function (t, e, n) {
                  i.trigger("ajax:success", [t, e, n]);
                },
                complete: function (t, e) {
                  i.trigger("ajax:complete", [t, e]);
                },
                error: function (t, e, n) {
                  i.trigger("ajax:error", [t, e, n]);
                },
                crossDomain: u.isCrossDomain(e),
              }),
              r && (a.xhrFields = { withCredentials: r }),
              e && (a.url = e),
              u.ajax(a)
            );
          }
          return !1;
        },
        isCrossDomain: function (t) {
          var e = document.createElement("a");
          e.href = location.href;
          var n = document.createElement("a");
          try {
            return (
              (n.href = t),
              (n.href = n.href),
              !(
                ((!n.protocol || ":" === n.protocol) && !n.host) ||
                e.protocol + "//" + e.host == n.protocol + "//" + n.host
              )
            );
          } catch (i) {
            return !0;
          }
        },
        handleMethod: function (t) {
          var e = u.href(t),
            n = t.data("method"),
            i = t.attr("target"),
            r = u.csrfToken(),
            o = u.csrfParam(),
            a = c('<form method="post" action="' + e + '"></form>'),
            s = '<input name="_method" value="' + n + '" type="hidden" />';
          o === l ||
            r === l ||
            u.isCrossDomain(e) ||
            (s += '<input name="' + o + '" value="' + r + '" type="hidden" />'),
            i && a.attr("target", i),
            a.hide().append(s).appendTo("body"),
            a.submit();
        },
        formElements: function (t, e) {
          return t.is("form") ? c(t[0].elements).filter(e) : t.find(e);
        },
        disableFormElements: function (t) {
          u.formElements(t, u.disableSelector).each(function () {
            u.disableFormElement(c(this));
          });
        },
        disableFormElement: function (t) {
          var e, n;
          (e = t.is("button") ? "html" : "val"),
            (n = t.data("disable-with")) !== l &&
              (t.data("ujs:enable-with", t[e]()), t[e](n)),
            t.prop("disabled", !0),
            t.data("ujs:disabled", !0);
        },
        enableFormElements: function (t) {
          u.formElements(t, u.enableSelector).each(function () {
            u.enableFormElement(c(this));
          });
        },
        enableFormElement: function (t) {
          var e = t.is("button") ? "html" : "val";
          t.data("ujs:enable-with") !== l &&
            (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.prop("disabled", !1),
            t.removeData("ujs:disabled");
        },
        allowAction: function (t) {
          var e,
            n = t.data("confirm"),
            i = !1;
          if (!n) return !0;
          if (u.fire(t, "confirm")) {
            try {
              i = u.confirm(n);
            } catch (r) {
              (console.error || console.log).call(console, r.stack || r);
            }
            e = u.fire(t, "confirm:complete", [i]);
          }
          return i && e;
        },
        blankInputs: function (t, e, n) {
          var i,
            r,
            o,
            a = c(),
            s = e || "input,textarea",
            l = t.find(s),
            u = {};
          return (
            l.each(function () {
              (i = c(this)).is("input[type=radio]")
                ? ((o = i.attr("name")),
                  u[o] ||
                    (0 ===
                      t.find('input[type=radio]:checked[name="' + o + '"]')
                        .length &&
                      ((r = t.find('input[type=radio][name="' + o + '"]')),
                      (a = a.add(r))),
                    (u[o] = o)))
                : (i.is("input[type=checkbox],input[type=radio]")
                    ? i.is(":checked")
                    : !!i.val()) === n && (a = a.add(i));
            }),
            !!a.length && a
          );
        },
        nonBlankInputs: function (t, e) {
          return u.blankInputs(t, e, !0);
        },
        stopEverything: function (t) {
          return (
            c(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
          );
        },
        disableElement: function (t) {
          var e = t.data("disable-with");
          e !== l && (t.data("ujs:enable-with", t.html()), t.html(e)),
            t.bind("click.railsDisable", function (t) {
              return u.stopEverything(t);
            }),
            t.data("ujs:disabled", !0);
        },
        enableElement: function (t) {
          t.data("ujs:enable-with") !== l &&
            (t.html(t.data("ujs:enable-with")),
            t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable"),
            t.removeData("ujs:disabled");
        },
      }),
      u.fire(t, "rails:attachBindings") &&
        (c.ajaxPrefilter(function (t, e, n) {
          t.crossDomain || u.CSRFProtection(n);
        }),
        c(window).on("pageshow.rails", function () {
          c(c.rails.enableSelector).each(function () {
            var t = c(this);
            t.data("ujs:disabled") && c.rails.enableFormElement(t);
          }),
            c(c.rails.linkDisableSelector).each(function () {
              var t = c(this);
              t.data("ujs:disabled") && c.rails.enableElement(t);
            });
        }),
        t.on("ajax:complete", u.linkDisableSelector, function () {
          u.enableElement(c(this));
        }),
        t.on("ajax:complete", u.buttonDisableSelector, function () {
          u.enableFormElement(c(this));
        }),
        t.on("click.rails", u.linkClickSelector, function (t) {
          var e = c(this),
            n = e.data("method"),
            i = e.data("params"),
            r = t.metaKey || t.ctrlKey;
          if (!u.allowAction(e)) return u.stopEverything(t);
          if (
            (!r && e.is(u.linkDisableSelector) && u.disableElement(e),
            u.isRemote(e))
          ) {
            if (r && (!n || "GET" === n) && !i) return !0;
            var o = u.handleRemote(e);
            return (
              !1 === o
                ? u.enableElement(e)
                : o.fail(function () {
                    u.enableElement(e);
                  }),
              !1
            );
          }
          return n ? (u.handleMethod(e), !1) : void 0;
        }),
        t.on("click.rails", u.buttonClickSelector, function (t) {
          var e = c(this);
          if (!u.allowAction(e) || !u.isRemote(e)) return u.stopEverything(t);
          e.is(u.buttonDisableSelector) && u.disableFormElement(e);
          var n = u.handleRemote(e);
          return (
            !1 === n
              ? u.enableFormElement(e)
              : n.fail(function () {
                  u.enableFormElement(e);
                }),
            !1
          );
        }),
        t.on("change.rails", u.inputChangeSelector, function (t) {
          var e = c(this);
          return u.allowAction(e) && u.isRemote(e)
            ? (u.handleRemote(e), !1)
            : u.stopEverything(t);
        }),
        t.on("submit.rails", u.formSubmitSelector, function (t) {
          var e,
            n,
            i = c(this),
            r = u.isRemote(i);
          if (!u.allowAction(i)) return u.stopEverything(t);
          if (i.attr("novalidate") === l)
            if (i.data("ujs:formnovalidate-button") === l) {
              if (
                (e = u.blankInputs(i, u.requiredInputSelector, !1)) &&
                u.fire(i, "ajax:aborted:required", [e])
              )
                return u.stopEverything(t);
            } else i.data("ujs:formnovalidate-button", l);
          if (r) {
            if ((n = u.nonBlankInputs(i, u.fileInputSelector))) {
              setTimeout(function () {
                u.disableFormElements(i);
              }, 13);
              var o = u.fire(i, "ajax:aborted:file", [n]);
              return (
                o ||
                  setTimeout(function () {
                    u.enableFormElements(i);
                  }, 13),
                o
              );
            }
            return u.handleRemote(i), !1;
          }
          setTimeout(function () {
            u.disableFormElements(i);
          }, 13);
        }),
        t.on("click.rails", u.formInputClickSelector, function (t) {
          var e = c(this);
          if (!u.allowAction(e)) return u.stopEverything(t);
          var n = e.attr("name"),
            i = n ? { name: n, value: e.val() } : null,
            r = e.closest("form");
          0 === r.length && (r = c("#" + e.attr("form"))),
            r.data("ujs:submit-button", i),
            r.data("ujs:formnovalidate-button", e.attr("formnovalidate")),
            r.data("ujs:submit-button-formaction", e.attr("formaction")),
            r.data("ujs:submit-button-formmethod", e.attr("formmethod"));
        }),
        t.on("ajax:send.rails", u.formSubmitSelector, function (t) {
          this === t.target && u.disableFormElements(c(this));
        }),
        t.on("ajax:complete.rails", u.formSubmitSelector, function (t) {
          this === t.target && u.enableFormElements(c(this));
        }),
        c(function () {
          u.refreshCSRFTokens();
        }));
  })(jQuery),
  jQuery.effects ||
    (function (y, u) {
      var n,
        s = !1 !== y.uiBackCompat,
        o = "ui-effects-";
      (y.effects = { effect: {} }),
        (function (c, f) {
          function h(t, e, n) {
            var i = g[e.type] || {};
            return null == t
              ? n || !e.def
                ? null
                : e.def
              : ((t = i.floor ? ~~t : parseFloat(t)),
                isNaN(t)
                  ? e.def
                  : i.mod
                  ? (t + i.mod) % i.mod
                  : t < 0
                  ? 0
                  : t > i.max
                  ? i.max
                  : t);
          }
          function s(a) {
            var s = m(),
              l = (s._rgba = []);
            return (
              (a = a.toLowerCase()),
              v(p, function (t, e) {
                var n,
                  i = e.re.exec(a),
                  r = i && e.parse(i),
                  o = e.space || "rgba";
                return r
                  ? ((n = s[o](r)),
                    (s[_[o].cache] = n[_[o].cache]),
                    (l = s._rgba = n._rgba),
                    !1)
                  : f;
              }),
              l.length
                ? ("0,0,0,0" === l.join() && c.extend(l, u.transparent), s)
                : u[a]
            );
          }
          function l(t, e, n) {
            return 6 * (n = (n + 1) % 1) < 1
              ? t + 6 * (e - t) * n
              : 2 * n < 1
              ? e
              : 3 * n < 2
              ? t + 6 * (e - t) * (2 / 3 - n)
              : t;
          }
          var u,
            t =
              "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(
                " "
              ),
            d = /^([\-+])=\s*(\d+\.?\d*)/,
            p = [
              {
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                  return [t[1], t[2], t[3], t[4]];
                },
              },
              {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                  return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
                },
              },
              {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function (t) {
                  return [
                    parseInt(t[1], 16),
                    parseInt(t[2], 16),
                    parseInt(t[3], 16),
                  ];
                },
              },
              {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function (t) {
                  return [
                    parseInt(t[1] + t[1], 16),
                    parseInt(t[2] + t[2], 16),
                    parseInt(t[3] + t[3], 16),
                  ];
                },
              },
              {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                  return [t[1], t[2] / 100, t[3] / 100, t[4]];
                },
              },
            ],
            m = (c.Color = function (t, e, n, i) {
              return new c.Color.fn.parse(t, e, n, i);
            }),
            _ = {
              rgba: {
                props: {
                  red: { idx: 0, type: "byte" },
                  green: { idx: 1, type: "byte" },
                  blue: { idx: 2, type: "byte" },
                },
              },
              hsla: {
                props: {
                  hue: { idx: 0, type: "degrees" },
                  saturation: { idx: 1, type: "percent" },
                  lightness: { idx: 2, type: "percent" },
                },
              },
            },
            g = {
              byte: { floor: !0, max: 255 },
              percent: { max: 1 },
              degrees: { mod: 360, floor: !0 },
            },
            a = (m.support = {}),
            e = c("<p>")[0],
            v = c.each;
          (e.style.cssText = "background-color:rgba(1,1,1,.5)"),
            (a.rgba = -1 < e.style.backgroundColor.indexOf("rgba")),
            v(_, function (t, e) {
              (e.cache = "_" + t),
                (e.props.alpha = { idx: 3, type: "percent", def: 1 });
            }),
            (m.fn = c.extend(m.prototype, {
              parse: function (r, t, e, n) {
                if (r === f)
                  return (this._rgba = [null, null, null, null]), this;
                (r.jquery || r.nodeType) && ((r = c(r).css(t)), (t = f));
                var o = this,
                  i = c.type(r),
                  a = (this._rgba = []);
                return (
                  t !== f && ((r = [r, t, e, n]), (i = "array")),
                  "string" === i
                    ? this.parse(s(r) || u._default)
                    : "array" === i
                    ? (v(_.rgba.props, function (t, e) {
                        a[e.idx] = h(r[e.idx], e);
                      }),
                      this)
                    : "object" === i
                    ? (v(
                        _,
                        r instanceof m
                          ? function (t, e) {
                              r[e.cache] && (o[e.cache] = r[e.cache].slice());
                            }
                          : function (t, n) {
                              var i = n.cache;
                              v(n.props, function (t, e) {
                                if (!o[i] && n.to) {
                                  if ("alpha" === t || null == r[t]) return;
                                  o[i] = n.to(o._rgba);
                                }
                                o[i][e.idx] = h(r[t], e, !0);
                              }),
                                o[i] &&
                                  y.inArray(null, o[i].slice(0, 3)) < 0 &&
                                  ((o[i][3] = 1),
                                  n.from && (o._rgba = n.from(o[i])));
                            }
                      ),
                      this)
                    : f
                );
              },
              is: function (t) {
                var r = m(t),
                  o = !0,
                  a = this;
                return (
                  v(_, function (t, e) {
                    var n,
                      i = r[e.cache];
                    return (
                      i &&
                        ((n = a[e.cache] || (e.to && e.to(a._rgba)) || []),
                        v(e.props, function (t, e) {
                          return null != i[e.idx]
                            ? (o = i[e.idx] === n[e.idx])
                            : f;
                        })),
                      o
                    );
                  }),
                  o
                );
              },
              _space: function () {
                var n = [],
                  i = this;
                return (
                  v(_, function (t, e) {
                    i[e.cache] && n.push(t);
                  }),
                  n.pop()
                );
              },
              transition: function (t, a) {
                var s = m(t),
                  e = s._space(),
                  n = _[e],
                  i = 0 === this.alpha() ? m("transparent") : this,
                  l = i[n.cache] || n.to(i._rgba),
                  u = l.slice();
                return (
                  (s = s[n.cache]),
                  v(n.props, function (t, e) {
                    var n = e.idx,
                      i = l[n],
                      r = s[n],
                      o = g[e.type] || {};
                    null !== r &&
                      (null === i
                        ? (u[n] = r)
                        : (o.mod &&
                            (r - i > o.mod / 2
                              ? (i += o.mod)
                              : i - r > o.mod / 2 && (i -= o.mod)),
                          (u[n] = h((r - i) * a + i, e))));
                  }),
                  this[e](u)
                );
              },
              blend: function (t) {
                if (1 === this._rgba[3]) return this;
                var e = this._rgba.slice(),
                  n = e.pop(),
                  i = m(t)._rgba;
                return m(
                  c.map(e, function (t, e) {
                    return (1 - n) * i[e] + n * t;
                  })
                );
              },
              toRgbaString: function () {
                var t = "rgba(",
                  e = c.map(this._rgba, function (t, e) {
                    return null == t ? (2 < e ? 1 : 0) : t;
                  });
                return (
                  1 === e[3] && (e.pop(), (t = "rgb(")), t + e.join() + ")"
                );
              },
              toHslaString: function () {
                var t = "hsla(",
                  e = c.map(this.hsla(), function (t, e) {
                    return (
                      null == t && (t = 2 < e ? 1 : 0),
                      e && e < 3 && (t = Math.round(100 * t) + "%"),
                      t
                    );
                  });
                return (
                  1 === e[3] && (e.pop(), (t = "hsl(")), t + e.join() + ")"
                );
              },
              toHexString: function (t) {
                var e = this._rgba.slice(),
                  n = e.pop();
                return (
                  t && e.push(~~(255 * n)),
                  "#" +
                    c
                      .map(e, function (t) {
                        return 1 === (t = (t || 0).toString(16)).length
                          ? "0" + t
                          : t;
                      })
                      .join("")
                );
              },
              toString: function () {
                return 0 === this._rgba[3]
                  ? "transparent"
                  : this.toRgbaString();
              },
            })),
            (m.fn.parse.prototype = m.fn),
            (_.hsla.to = function (t) {
              if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
              var e,
                n,
                i = t[0] / 255,
                r = t[1] / 255,
                o = t[2] / 255,
                a = t[3],
                s = Math.max(i, r, o),
                l = Math.min(i, r, o),
                u = s - l,
                c = s + l,
                f = 0.5 * c;
              return (
                (e =
                  l === s
                    ? 0
                    : i === s
                    ? (60 * (r - o)) / u + 360
                    : r === s
                    ? (60 * (o - i)) / u + 120
                    : (60 * (i - r)) / u + 240),
                (n = 0 === f || 1 === f ? f : f <= 0.5 ? u / c : u / (2 - c)),
                [Math.round(e) % 360, n, f, null == a ? 1 : a]
              );
            }),
            (_.hsla.from = function (t) {
              if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
              var e = t[0] / 360,
                n = t[1],
                i = t[2],
                r = t[3],
                o = i <= 0.5 ? i * (1 + n) : i + n - i * n,
                a = 2 * i - o;
              return [
                Math.round(255 * l(a, o, e + 1 / 3)),
                Math.round(255 * l(a, o, e)),
                Math.round(255 * l(a, o, e - 1 / 3)),
                r,
              ];
            }),
            v(_, function (l, t) {
              var n = t.props,
                a = t.cache,
                s = t.to,
                u = t.from;
              (m.fn[l] = function (t) {
                if ((s && !this[a] && (this[a] = s(this._rgba)), t === f))
                  return this[a].slice();
                var e,
                  i = c.type(t),
                  r = "array" === i || "object" === i ? t : arguments,
                  o = this[a].slice();
                return (
                  v(n, function (t, e) {
                    var n = r["object" === i ? t : e.idx];
                    null == n && (n = o[e.idx]), (o[e.idx] = h(n, e));
                  }),
                  u ? (((e = m(u(o)))[a] = o), e) : m(o)
                );
              }),
                v(n, function (a, s) {
                  m.fn[a] ||
                    (m.fn[a] = function (t) {
                      var e,
                        n = c.type(t),
                        i = "alpha" === a ? (this._hsla ? "hsla" : "rgba") : l,
                        r = this[i](),
                        o = r[s.idx];
                      return "undefined" === n
                        ? o
                        : ("function" === n &&
                            ((t = t.call(this, o)), (n = c.type(t))),
                          null == t && s.empty
                            ? this
                            : ("string" === n &&
                                (e = d.exec(t)) &&
                                (t =
                                  o +
                                  parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                              (r[s.idx] = t),
                              this[i](r)));
                    });
                });
            }),
            v(t, function (t, o) {
              (c.cssHooks[o] = {
                set: function (t, e) {
                  var n,
                    i,
                    r = "";
                  if ("string" !== c.type(e) || (n = s(e))) {
                    if (((e = m(n || e)), !a.rgba && 1 !== e._rgba[3])) {
                      for (
                        i = "backgroundColor" === o ? t.parentNode : t;
                        ("" === r || "transparent" === r) && i && i.style;

                      )
                        try {
                          (r = c.css(i, "backgroundColor")), (i = i.parentNode);
                        } catch (d) {}
                      e = e.blend(r && "transparent" !== r ? r : "_default");
                    }
                    e = e.toRgbaString();
                  }
                  try {
                    t.style[o] = e;
                  } catch (p) {}
                },
              }),
                (c.fx.step[o] = function (t) {
                  t.colorInit ||
                    ((t.start = m(t.elem, o)),
                    (t.end = m(t.end)),
                    (t.colorInit = !0)),
                    c.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
                });
            }),
            (c.cssHooks.borderColor = {
              expand: function (n) {
                var i = {};
                return (
                  v(["Top", "Right", "Bottom", "Left"], function (t, e) {
                    i["border" + e + "Color"] = n;
                  }),
                  i
                );
              },
            }),
            (u = c.Color.names =
              {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff",
              });
        })(jQuery),
        (function () {
          function a() {
            var t,
              e,
              n = this.ownerDocument.defaultView
                ? this.ownerDocument.defaultView.getComputedStyle(this, null)
                : this.currentStyle,
              i = {};
            if (n && n.length && n[0] && n[n[0]])
              for (e = n.length; e--; )
                "string" == typeof n[(t = n[e])] && (i[y.camelCase(t)] = n[t]);
            else for (t in n) "string" == typeof n[t] && (i[t] = n[t]);
            return i;
          }
          function s(t, e) {
            var n,
              i,
              r = {};
            for (n in e)
              (i = e[n]),
                t[n] !== i &&
                  (o[n] ||
                    ((y.fx.step[n] || !isNaN(parseFloat(i))) && (r[n] = i)));
            return r;
          }
          var l = ["add", "remove", "toggle"],
            o = {
              border: 1,
              borderBottom: 1,
              borderColor: 1,
              borderLeft: 1,
              borderRight: 1,
              borderTop: 1,
              borderWidth: 1,
              margin: 1,
              padding: 1,
            };
          y.each(
            [
              "borderLeftStyle",
              "borderRightStyle",
              "borderBottomStyle",
              "borderTopStyle",
            ],
            function (t, e) {
              y.fx.step[e] = function (t) {
                (("none" !== t.end && !t.setAttr) ||
                  (1 === t.pos && !t.setAttr)) &&
                  (jQuery.style(t.elem, e, t.end), (t.setAttr = !0));
              };
            }
          ),
            (y.effects.animateClass = function (r, t, e, n) {
              var o = y.speed(t, e, n);
              return this.queue(function () {
                var t,
                  n = y(this),
                  e = n.attr("class") || "",
                  i = o.children ? n.find("*").andSelf() : n;
                (i = i.map(function () {
                  return { el: y(this), start: a.call(this) };
                })),
                  (t = function () {
                    y.each(l, function (t, e) {
                      r[e] && n[e + "Class"](r[e]);
                    });
                  })(),
                  (i = i.map(function () {
                    return (
                      (this.end = a.call(this.el[0])),
                      (this.diff = s(this.start, this.end)),
                      this
                    );
                  })),
                  n.attr("class", e),
                  (i = i.map(function () {
                    var t = this,
                      e = y.Deferred(),
                      n = jQuery.extend({}, o, {
                        queue: !1,
                        complete: function () {
                          e.resolve(t);
                        },
                      });
                    return this.el.animate(this.diff, n), e.promise();
                  })),
                  y.when.apply(y, i.get()).done(function () {
                    t(),
                      y.each(arguments, function () {
                        var e = this.el;
                        y.each(this.diff, function (t) {
                          e.css(t, "");
                        });
                      }),
                      o.complete.call(n[0]);
                  });
              });
            }),
            y.fn.extend({
              _addClass: y.fn.addClass,
              addClass: function (t, e, n, i) {
                return e
                  ? y.effects.animateClass.call(this, { add: t }, e, n, i)
                  : this._addClass(t);
              },
              _removeClass: y.fn.removeClass,
              removeClass: function (t, e, n, i) {
                return e
                  ? y.effects.animateClass.call(this, { remove: t }, e, n, i)
                  : this._removeClass(t);
              },
              _toggleClass: y.fn.toggleClass,
              toggleClass: function (t, e, n, i, r) {
                return "boolean" == typeof e || e === u
                  ? n
                    ? y.effects.animateClass.call(
                        this,
                        e ? { add: t } : { remove: t },
                        n,
                        i,
                        r
                      )
                    : this._toggleClass(t, e)
                  : y.effects.animateClass.call(this, { toggle: t }, e, n, i);
              },
              switchClass: function (t, e, n, i, r) {
                return y.effects.animateClass.call(
                  this,
                  { add: e, remove: t },
                  n,
                  i,
                  r
                );
              },
            });
        })(),
        (function () {
          function r(t, e, n, i) {
            return (
              y.isPlainObject(t) && (t = (e = t).effect),
              (t = { effect: t }),
              null == e && (e = {}),
              y.isFunction(e) && ((i = e), (n = null), (e = {})),
              ("number" == typeof e || y.fx.speeds[e]) &&
                ((i = n), (n = e), (e = {})),
              y.isFunction(n) && ((i = n), (n = null)),
              e && y.extend(t, e),
              (n = n || e.duration),
              (t.duration = y.fx.off
                ? 0
                : "number" == typeof n
                ? n
                : n in y.fx.speeds
                ? y.fx.speeds[n]
                : y.fx.speeds._default),
              (t.complete = i || e.complete),
              t
            );
          }
          function n(t) {
            return (
              !(t && "number" != typeof t && !y.fx.speeds[t]) ||
              ("string" == typeof t &&
                !y.effects.effect[t] &&
                (!s || !y.effects[t]))
            );
          }
          y.extend(y.effects, {
            version: "1.9.2",
            save: function (t, e) {
              for (var n = 0; e.length > n; n++)
                null !== e[n] && t.data(o + e[n], t[0].style[e[n]]);
            },
            restore: function (t, e) {
              var n, i;
              for (i = 0; e.length > i; i++)
                null !== e[i] &&
                  ((n = t.data(o + e[i])) === u && (n = ""), t.css(e[i], n));
            },
            setMode: function (t, e) {
              return (
                "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
              );
            },
            getBaseline: function (t, e) {
              var n, i;
              switch (t[0]) {
                case "top":
                  n = 0;
                  break;
                case "middle":
                  n = 0.5;
                  break;
                case "bottom":
                  n = 1;
                  break;
                default:
                  n = t[0] / e.height;
              }
              switch (t[1]) {
                case "left":
                  i = 0;
                  break;
                case "center":
                  i = 0.5;
                  break;
                case "right":
                  i = 1;
                  break;
                default:
                  i = t[1] / e.width;
              }
              return { x: i, y: n };
            },
            createWrapper: function (n) {
              if (n.parent().is(".ui-effects-wrapper")) return n.parent();
              var i = {
                  width: n.outerWidth(!0),
                  height: n.outerHeight(!0),
                  float: n.css("float"),
                },
                t = y("<div></div>")
                  .addClass("ui-effects-wrapper")
                  .css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0,
                  }),
                e = { width: n.width(), height: n.height() },
                r = document.activeElement;
              try {
                r.id;
              } catch (o) {
                r = document.body;
              }
              return (
                n.wrap(t),
                (n[0] === r || y.contains(n[0], r)) && y(r).focus(),
                (t = n.parent()),
                "static" === n.css("position")
                  ? (t.css({ position: "relative" }),
                    n.css({ position: "relative" }))
                  : (y.extend(i, {
                      position: n.css("position"),
                      zIndex: n.css("z-index"),
                    }),
                    y.each(["top", "left", "bottom", "right"], function (t, e) {
                      (i[e] = n.css(e)),
                        isNaN(parseInt(i[e], 10)) && (i[e] = "auto");
                    }),
                    n.css({
                      position: "relative",
                      top: 0,
                      left: 0,
                      right: "auto",
                      bottom: "auto",
                    })),
                n.css(e),
                t.css(i).show()
              );
            },
            removeWrapper: function (t) {
              var e = document.activeElement;
              return (
                t.parent().is(".ui-effects-wrapper") &&
                  (t.parent().replaceWith(t),
                  (t[0] === e || y.contains(t[0], e)) && y(e).focus()),
                t
              );
            },
            setTransition: function (i, t, r, o) {
              return (
                (o = o || {}),
                y.each(t, function (t, e) {
                  var n = i.cssUnit(e);
                  0 < n[0] && (o[e] = n[0] * r + n[1]);
                }),
                o
              );
            },
          }),
            y.fn.extend({
              effect: function () {
                function t(t) {
                  function e() {
                    y.isFunction(i) && i.call(n[0]), y.isFunction(t) && t();
                  }
                  var n = y(this),
                    i = o.complete,
                    r = o.mode;
                  (n.is(":hidden") ? "hide" === r : "show" === r)
                    ? e()
                    : a.call(n[0], o, e);
                }
                var o = r.apply(this, arguments),
                  e = o.mode,
                  n = o.queue,
                  a = y.effects.effect[o.effect],
                  i = !a && s && y.effects[o.effect];
                return y.fx.off || (!a && !i)
                  ? e
                    ? this[e](o.duration, o.complete)
                    : this.each(function () {
                        o.complete && o.complete.call(this);
                      })
                  : a
                  ? !1 === n
                    ? this.each(t)
                    : this.queue(n || "fx", t)
                  : i.call(this, {
                      options: o,
                      duration: o.duration,
                      callback: o.complete,
                      mode: o.mode,
                    });
              },
              _show: y.fn.show,
              show: function (t) {
                if (n(t)) return this._show.apply(this, arguments);
                var e = r.apply(this, arguments);
                return (e.mode = "show"), this.effect.call(this, e);
              },
              _hide: y.fn.hide,
              hide: function (t) {
                if (n(t)) return this._hide.apply(this, arguments);
                var e = r.apply(this, arguments);
                return (e.mode = "hide"), this.effect.call(this, e);
              },
              __toggle: y.fn.toggle,
              toggle: function (t) {
                if (n(t) || "boolean" == typeof t || y.isFunction(t))
                  return this.__toggle.apply(this, arguments);
                var e = r.apply(this, arguments);
                return (e.mode = "toggle"), this.effect.call(this, e);
              },
              cssUnit: function (t) {
                var n = this.css(t),
                  i = [];
                return (
                  y.each(["em", "px", "%", "pt"], function (t, e) {
                    0 < n.indexOf(e) && (i = [parseFloat(n), e]);
                  }),
                  i
                );
              },
            });
        })(),
        (n = {}),
        y.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
          n[t] = function (t) {
            return Math.pow(t, e + 2);
          };
        }),
        y.extend(n, {
          Sine: function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          },
          Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Elastic: function (t) {
            return 0 === t || 1 === t
              ? t
              : -Math.pow(2, 8 * (t - 1)) *
                  Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
          },
          Back: function (t) {
            return t * t * (3 * t - 2);
          },
          Bounce: function (t) {
            for (var e, n = 4; ((e = Math.pow(2, --n)) - 1) / 11 > t; );
            return (
              1 / Math.pow(4, 3 - n) -
              7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            );
          },
        }),
        y.each(n, function (t, e) {
          (y.easing["easeIn" + t] = e),
            (y.easing["easeOut" + t] = function (t) {
              return 1 - e(1 - t);
            }),
            (y.easing["easeInOut" + t] = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
            });
        });
    })(jQuery),
  (function (S) {
    jQuery.fn.extend({
      slimScroll: function (w) {
        var T = S.extend(
          {
            width: "auto",
            height: "250px",
            size: "7px",
            color: "#000",
            position: "right",
            distance: "1px",
            start: "top",
            opacity: 0.4,
            alwaysVisible: !1,
            disableFadeOut: !1,
            railVisible: !1,
            railColor: "#333",
            railOpacity: 0.2,
            railDraggable: !0,
            railClass: "slimScrollRail",
            barClass: "slimScrollBar",
            wrapperClass: "slimScrollDiv",
            allowPageScroll: !1,
            wheelStep: 20,
            touchScrollStep: 200,
            borderRadius: "7px",
            railBorderRadius: "7px",
          },
          w
        );
        return (
          this.each(function () {
            function e(t) {
              if (l) {
                var e = 0;
                (t = t || window.event).wheelDelta && (e = -t.wheelDelta / 120),
                  t.detail && (e = t.detail / 3),
                  S(t.target || t.srcTarget || t.srcElement)
                    .closest("." + T.wrapperClass)
                    .is(g.parent()) && i(e, !0),
                  t.preventDefault && !_ && t.preventDefault(),
                  _ || (t.returnValue = !1);
              }
            }
            function i(t, e, n) {
              _ = !1;
              var i = t,
                r = g.outerHeight() - y.outerHeight();
              e &&
                ((i =
                  parseInt(y.css("top")) +
                  ((t * parseInt(T.wheelStep)) / 100) * y.outerHeight()),
                (i = Math.min(Math.max(i, 0), r)),
                (i = 0 < t ? Math.ceil(i) : Math.floor(i)),
                y.css({ top: i + "px" })),
                (i =
                  (p =
                    parseInt(y.css("top")) /
                    (g.outerHeight() - y.outerHeight())) *
                  (g[0].scrollHeight - g.outerHeight())),
                n &&
                  ((t = ((i = t) / g[0].scrollHeight) * g.outerHeight()),
                  (t = Math.min(Math.max(t, 0), r)),
                  y.css({ top: t + "px" })),
                g.scrollTop(i),
                g.trigger("slimscrolling", ~~i),
                a(),
                s();
            }
            function n() {
              window.addEventListener
                ? (this.addEventListener("DOMMouseScroll", e, !1),
                  this.addEventListener("mousewheel", e, !1))
                : document.attachEvent("onmousewheel", e);
            }
            function r() {
              window.removeEventListener
                ? (this.removeEventListener("DOMMouseScroll", e),
                  this.removeEventListener("mousewheel", e))
                : document.detachEvent("onmousewheel", e);
            }
            function o() {
              (d = Math.max(
                (g.outerHeight() / g[0].scrollHeight) * g.outerHeight(),
                30
              )),
                y.css({ height: d + "px" });
              var t = d == g.outerHeight() ? "none" : "block";
              y.css({ display: t });
            }
            function a() {
              o(),
                clearTimeout(f),
                p == ~~p
                  ? ((_ = T.allowPageScroll),
                    m != p &&
                      g.trigger("slimscroll", 0 == ~~p ? "top" : "bottom"))
                  : (_ = !1),
                (m = p),
                d >= g.outerHeight()
                  ? (_ = !0)
                  : (y.stop(!0, !0).fadeIn("fast"),
                    T.railVisible && b.stop(!0, !0).fadeIn("fast"));
            }
            function s() {
              T.alwaysVisible ||
                (f = setTimeout(function () {
                  (T.disableFadeOut && l) ||
                    u ||
                    c ||
                    (y.fadeOut("slow"), b.fadeOut("slow"));
                }, 1e3));
            }
            var l,
              u,
              c,
              f,
              h,
              d,
              p,
              m,
              _ = !1,
              g = S(this);
            if (g.parent().hasClass(T.wrapperClass)) {
              var v = g.scrollTop(),
                y = g.parent().find("." + T.barClass),
                b = g.parent().find("." + T.railClass);
              if ((o(), S.isPlainObject(w))) {
                if ("height" in w && "auto" == w.height) {
                  g.parent().css("height", "auto"), g.css("height", "auto");
                  var x = g.parent().parent().height();
                  g.parent().css("height", x), g.css("height", x);
                }
                if ("scrollTo" in w) v = parseInt(T.scrollTo);
                else if ("scrollBy" in w) v += parseInt(T.scrollBy);
                else if ("destroy" in w)
                  return r(), y.remove(), b.remove(), void g.unwrap();
                i(v, !1, !0);
              }
            } else {
              (T.height = "auto" == w.height ? g.parent().height() : w.height),
                (v = S("<div></div>")
                  .addClass(T.wrapperClass)
                  .css({
                    position: "relative",
                    overflow: "hidden",
                    width: T.width,
                    height: T.height,
                  })),
                g.css({ overflow: "hidden", width: T.width, height: T.height });
              (b = S("<div></div>")
                .addClass(T.railClass)
                .css({
                  width: T.size,
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  display: T.alwaysVisible && T.railVisible ? "block" : "none",
                  "border-radius": T.railBorderRadius,
                  background: T.railColor,
                  opacity: T.railOpacity,
                  zIndex: 90,
                })),
                (y = S("<div></div>")
                  .addClass(T.barClass)
                  .css({
                    background: T.color,
                    width: T.size,
                    position: "absolute",
                    top: 0,
                    opacity: T.opacity,
                    display: T.alwaysVisible ? "block" : "none",
                    "border-radius": T.borderRadius,
                    BorderRadius: T.borderRadius,
                    MozBorderRadius: T.borderRadius,
                    WebkitBorderRadius: T.borderRadius,
                    zIndex: 99,
                  })),
                (x =
                  "right" == T.position
                    ? { right: T.distance }
                    : { left: T.distance });
              b.css(x),
                y.css(x),
                g.wrap(v),
                g.parent().append(y),
                g.parent().append(b),
                T.railDraggable &&
                  y
                    .bind("mousedown", function (e) {
                      var n = S(document);
                      return (
                        (c = !0),
                        (t = parseFloat(y.css("top"))),
                        (pageY = e.pageY),
                        n.bind("mousemove.slimscroll", function (e) {
                          (currTop = t + e.pageY - pageY),
                            y.css("top", currTop),
                            i(0, y.position().top, !1);
                        }),
                        n.bind("mouseup.slimscroll", function () {
                          (c = !1), s(), n.unbind(".slimscroll");
                        }),
                        !1
                      );
                    })
                    .bind("selectstart.slimscroll", function (t) {
                      return t.stopPropagation(), t.preventDefault(), !1;
                    }),
                b.hover(
                  function () {
                    a();
                  },
                  function () {
                    s();
                  }
                ),
                y.hover(
                  function () {
                    u = !0;
                  },
                  function () {
                    u = !1;
                  }
                ),
                g.hover(
                  function () {
                    (l = !0), a(), s();
                  },
                  function () {
                    (l = !1), s();
                  }
                ),
                g.bind("touchstart", function (t) {
                  t.originalEvent.touches.length &&
                    (h = t.originalEvent.touches[0].pageY);
                }),
                g.bind("touchmove", function (t) {
                  _ || t.originalEvent.preventDefault(),
                    t.originalEvent.touches.length &&
                      (i(
                        (h - t.originalEvent.touches[0].pageY) /
                          T.touchScrollStep,
                        !0
                      ),
                      (h = t.originalEvent.touches[0].pageY));
                }),
                o(),
                "bottom" === T.start
                  ? (y.css({ top: g.outerHeight() - y.outerHeight() }),
                    i(0, !0))
                  : "top" !== T.start &&
                    (i(S(T.start).position().top, null, !0),
                    T.alwaysVisible || y.hide()),
                n();
            }
          }),
          this
        );
      },
    }),
      jQuery.fn.extend({ slimscroll: jQuery.fn.slimScroll });
  })(jQuery),
  (function (e, n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (t) {
          return n(t, e, e.document, e.Math);
        })
      : "undefined" != typeof exports
      ? (module.exports = n(require("jquery"), e, e.document, e.Math))
      : n(jQuery, e, e.document, e.Math);
  })(
    "undefined" != typeof window ? window : this,
    function (ge, ve, ye, be, xe) {
      "use strict";
      var we = "fullpage-wrapper",
        Te = "." + we,
        t = "fp-scrollable",
        i = "." + t,
        Se = "fp-responsive",
        Ce = "fp-notransition",
        ke = "fp-destroyed",
        Ae = "fp-enabled",
        Pe = "fp-viewing",
        Oe = "active",
        je = "." + Oe,
        Ee = "fp-completely",
        Re = "." + Ee,
        De = ".section",
        Ne = "fp-section",
        Me = "." + Ne,
        Le = Me + je,
        Ie = Me + ":first",
        Fe = Me + ":last",
        Be = "fp-tableCell",
        ze = "." + Be,
        He = "fp-auto-height",
        qe = "fp-normal-scroll",
        We = "fp-nav",
        Xe = "#" + We,
        Ue = "fp-tooltip",
        $e = "." + Ue,
        Ve = "fp-show-active",
        Ye = ".slide",
        Qe = "fp-slide",
        Ze = "." + Qe,
        Ge = Ze + je,
        Ke = "fp-slides",
        Je = "." + Ke,
        tn = "fp-slidesContainer",
        en = "." + tn,
        nn = "fp-table",
        rn = "fp-slidesNav",
        on = "." + rn,
        an = on + " a",
        e = "fp-controlArrow",
        sn = "." + e,
        ln = "fp-prev",
        un = e + " " + ln,
        cn = sn + ("." + ln),
        n = "fp-next",
        fn = e + " " + n,
        hn = sn + ("." + n),
        dn = ge(ve),
        pn = ge(ye),
        mn = {
          scrollbars: !0,
          mouseWheel: !0,
          hideScrollbars: !1,
          fadeScrollbars: !1,
          disableMouse: !0,
          click: !0,
        };
      (ge.fn.fullpage = function (m) {
        function t() {
          m.css3 && (m.css3 = xt()),
            (m.scrollBar = m.scrollBar || m.hybrid),
            n(),
            i(),
            zt.setAllowScrolling(!0),
            zt.setAutoScrolling(m.autoScrolling, "internal");
          var t = ge(Le).find(Ge);
          t.length &&
            (0 !== ge(Le).index(Me) ||
              (0 === ge(Le).index(Me) && 0 !== t.index())) &&
            jt(t),
            tt(),
            bt(),
            "complete" === ye.readyState && B(),
            dn.on("load", B);
        }
        function e() {
          dn.on("scroll", _).on("hashchange", z).blur(V).resize(J),
            pn
              .keydown(H)
              .keyup(W)
              .on("click touchstart", Xe + " a", Y)
              .on("click touchstart", an, Q)
              .on("click", $e, q),
            ge(Me).on("click touchstart", sn, $),
            m.normalScrollElements &&
              (pn.on("mouseenter", m.normalScrollElements, function () {
                zt.setMouseWheelScrolling(!1);
              }),
              pn.on("mouseleave", m.normalScrollElements, function () {
                zt.setMouseWheelScrolling(!0);
              }));
        }
        function n() {
          var t = Vt.find(m.sectionSelector);
          m.anchors.length ||
            (m.anchors = t
              .filter("[data-anchor]")
              .map(function () {
                return ge(this).data("anchor").toString();
              })
              .get()),
            m.navigationTooltips.length ||
              (m.navigationTooltips = t
                .filter("[data-tooltip]")
                .map(function () {
                  return ge(this).data("tooltip").toString();
                })
                .get());
        }
        function i() {
          Vt.css({ height: "100%", position: "relative" }),
            Vt.addClass(we),
            ge("html").addClass(Ae),
            (Yt = dn.height()),
            Vt.removeClass(ke),
            s(),
            ge(Me).each(function (t) {
              var e = ge(this),
                n = e.find(Ze),
                i = n.length;
              o(e, t),
                a(e, t),
                0 < i ? r(e, n, i) : m.verticalCentered && ut(e);
            }),
            m.fixedElements && m.css3 && ge(m.fixedElements).appendTo(Bt),
            m.navigation && u(),
            f(),
            h(),
            m.scrollOverflow
              ? ("complete" === ye.readyState && c(), dn.on("load", c))
              : p();
        }
        function r(t, e, n) {
          var i = 100 * n,
            r = 100 / n;
          e.wrapAll('<div class="' + tn + '" />'),
            e.parent().wrap('<div class="' + Ke + '" />'),
            t.find(en).css("width", i + "%"),
            1 < n && (m.controlArrows && l(t), m.slidesNavigation && _t(t, n)),
            e.each(function () {
              ge(this).css("width", r + "%"),
                m.verticalCentered && ut(ge(this));
            });
          var o = t.find(Ge);
          o.length &&
          (0 !== ge(Le).index(Me) ||
            (0 === ge(Le).index(Me) && 0 !== o.index()))
            ? jt(o)
            : e.eq(0).addClass(Oe);
        }
        function o(t, e) {
          e || 0 !== ge(Le).length || t.addClass(Oe),
            t.css("height", Yt + "px"),
            m.paddingTop && t.css("padding-top", m.paddingTop),
            m.paddingBottom && t.css("padding-bottom", m.paddingBottom),
            "undefined" != typeof m.sectionsColor[e] &&
              t.css("background-color", m.sectionsColor[e]),
            "undefined" != typeof m.anchors[e] &&
              t.attr("data-anchor", m.anchors[e]);
        }
        function a(t, e) {
          "undefined" != typeof m.anchors[e] &&
            t.hasClass(Oe) &&
            ot(m.anchors[e], e),
            m.menu &&
              m.css3 &&
              ge(m.menu).closest(Te).length &&
              ge(m.menu).appendTo(Bt);
        }
        function s() {
          ge(m.sectionSelector).each(function () {
            ge(this).addClass(Ne);
          }),
            ge(m.slideSelector).each(function () {
              ge(this).addClass(Qe);
            });
        }
        function l(t) {
          t
            .find(Je)
            .after(
              '<div class="' + un + '"></div><div class="' + fn + '"></div>'
            ),
            "#fff" != m.controlArrowColor &&
              (t
                .find(hn)
                .css(
                  "border-color",
                  "transparent transparent transparent " + m.controlArrowColor
                ),
              t
                .find(cn)
                .css(
                  "border-color",
                  "transparent " +
                    m.controlArrowColor +
                    " transparent transparent"
                )),
            m.loopHorizontal || t.find(cn).hide();
        }
        function u() {
          Bt.append('<div id="' + We + '"><ul></ul></div>');
          var t = ge(Xe);
          t.addClass(function () {
            return m.showActiveTooltip
              ? Ve + " " + m.navigationPosition
              : m.navigationPosition;
          });
          for (var e = 0; e < ge(Me).length; e++) {
            var n = "";
            m.anchors.length && (n = m.anchors[e]);
            var i = '<li><a href="#' + n + '"><span></span></a>',
              r = m.navigationTooltips[e];
            void 0 !== r &&
              "" !== r &&
              (i +=
                '<div class="' +
                Ue +
                " " +
                m.navigationPosition +
                '">' +
                r +
                "</div>"),
              (i += "</li>"),
              t.find("ul").append(i);
          }
          ge(Xe).css("margin-top", "-" + ge(Xe).height() / 2 + "px"),
            ge(Xe).find("li").eq(ge(Le).index(Me)).find("a").addClass(Oe);
        }
        function c() {
          ge(Me).each(function () {
            var t = ge(this).find(Ze);
            t.length
              ? t.each(function () {
                  lt(ge(this));
                })
              : lt(ge(this));
          }),
            p();
        }
        function f() {
          Vt.find('iframe[src*="youtube.com/embed/"]').each(function () {
            var t = d(ge(this).attr("src"));
            ge(this).attr("src", ge(this).attr("src") + t + "enablejsapi=1");
          });
        }
        function h() {
          Vt.find('iframe[src*="player.vimeo.com/"]').each(function () {
            var t = d(ge(this).attr("src"));
            ge(this).attr("src", ge(this).attr("src") + t + "api=1");
          });
        }
        function d(t) {
          return /\?/.test(t) ? "&" : "?";
        }
        function p() {
          var t = ge(Le);
          t.addClass(Ee),
            m.scrollOverflowHandler.afterRender &&
              m.scrollOverflowHandler.afterRender(t),
            M(t),
            L(t),
            ge.isFunction(m.afterLoad) &&
              m.afterLoad.call(t, t.data("anchor"), t.index(Me) + 1),
            ge.isFunction(m.afterRender) && m.afterRender.call(Vt);
        }
        function _() {
          var t;
          if (!m.autoScrolling || m.scrollBar) {
            for (
              var e = dn.scrollTop(),
                n = v(e),
                i = 0,
                r = e + dn.height() / 2,
                o = ye.querySelectorAll(Me),
                a = 0;
              a < o.length;
              ++a
            ) {
              o[a].offsetTop <= r && (i = a);
            }
            if (
              (g(n) &&
                (ge(Le).hasClass(Ee) ||
                  ge(Le).addClass(Ee).siblings().removeClass(Ee)),
              !(t = ge(o).eq(i)).hasClass(Oe))
            ) {
              se = !0;
              var s = ge(Le),
                l = s.index(Me) + 1,
                u = at(t),
                c = t.data("anchor"),
                f = t.index(Me) + 1,
                h = t.find(Ge);
              if (h.length)
                var d = h.data("anchor"),
                  p = h.index();
              Gt &&
                (t.addClass(Oe).siblings().removeClass(Oe),
                ge.isFunction(m.onLeave) && m.onLeave.call(s, l, f, u),
                ge.isFunction(m.afterLoad) && m.afterLoad.call(t, c, f),
                M(t),
                ot(c, f - 1),
                m.anchors.length && gt(p, d, (Ht = c), f)),
                clearTimeout(ie),
                (ie = setTimeout(function () {
                  se = !1;
                }, 100));
            }
            m.fitToSection &&
              (clearTimeout(re),
              (re = setTimeout(function () {
                Gt &&
                  m.fitToSection &&
                  (ge(Le).is(t) && (Qt = !0), O(ge(Le)), (Qt = !1));
              }, m.fitToSectionDelay)));
          }
        }
        function g(t) {
          var e = ge(Le).position().top,
            n = e + dn.height();
          return "up" == t
            ? n >= dn.scrollTop() + dn.height()
            : e <= dn.scrollTop();
        }
        function v(t) {
          var e = le < t ? "down" : "up";
          return (le = t), e;
        }
        function y(t, e) {
          var n, i;
          if (Jt.m[t])
            if (
              ("down" == t
                ? ((n = "bottom"), (i = zt.moveSectionDown))
                : ((n = "top"), (i = zt.moveSectionUp)),
              0 < e.length)
            ) {
              if (!m.scrollOverflowHandler.isScrolled(n, e)) return !0;
              i();
            } else i();
        }
        function b(t) {
          var e = t.originalEvent;
          if (!x(t.target) && w(e)) {
            m.autoScrolling && t.preventDefault();
            var n = ge(Le),
              i = m.scrollOverflowHandler.scrollable(n);
            if (Gt && !Xt) {
              var r = Ot(e);
              (fe = r.y),
                (he = r.x),
                n.find(Je).length && be.abs(ce - he) > be.abs(ue - fe)
                  ? be.abs(ce - he) >
                      (dn.outerWidth() / 100) * m.touchSensitivity &&
                    (he < ce
                      ? Jt.m.right && zt.moveSlideRight()
                      : Jt.m.left && zt.moveSlideLeft())
                  : m.autoScrolling &&
                    be.abs(ue - fe) >
                      (dn.height() / 100) * m.touchSensitivity &&
                    (fe < ue ? y("down", i) : ue < fe && y("up", i));
            }
          }
        }
        function x(t, e) {
          e = e || 0;
          var n = ge(t).parent();
          return (
            !!(
              e < m.normalScrollElementTouchThreshold &&
              n.is(m.normalScrollElements)
            ) ||
            (e != m.normalScrollElementTouchThreshold && x(n, ++e))
          );
        }
        function w(t) {
          return (
            "undefined" == typeof t.pointerType || "mouse" != t.pointerType
          );
        }
        function T(t) {
          var e = t.originalEvent;
          if ((m.fitToSection && Ft.stop(), w(e))) {
            var n = Ot(e);
            (ue = n.y), (ce = n.x);
          }
        }
        function S(t, e) {
          for (
            var n = 0, i = t.slice(be.max(t.length - e, 1)), r = 0;
            r < i.length;
            r++
          )
            n += i[r];
          return be.ceil(n / e);
        }
        function C(t) {
          var e = new Date().getTime(),
            n = ge(Re).hasClass(qe);
          if (m.autoScrolling && !Wt && !n) {
            var i = (t = t || ve.event).wheelDelta || -t.deltaY || -t.detail,
              r = be.max(-1, be.min(1, i)),
              o =
                "undefined" != typeof t.wheelDeltaX ||
                "undefined" != typeof t.deltaX,
              a =
                be.abs(t.wheelDeltaX) < be.abs(t.wheelDelta) ||
                be.abs(t.deltaX) < be.abs(t.deltaY) ||
                !o;
            149 < Kt.length && Kt.shift(),
              Kt.push(be.abs(i)),
              m.scrollBar &&
                (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
            var s = ge(Le),
              l = m.scrollOverflowHandler.scrollable(s),
              u = e - de;
            if (((de = e), 200 < u && (Kt = []), Gt)) {
              var c = S(Kt, 10);
              S(Kt, 70) <= c && a && y(r < 0 ? "down" : "up", l);
            }
            return !1;
          }
          m.fitToSection && Ft.stop();
        }
        function k(t, e) {
          var n = (void 0 === e ? ge(Le) : e).find(Je),
            i = n.find(Ze).length;
          if (!(!n.length || Xt || i < 2)) {
            var r = n.find(Ge),
              o = null;
            if (!(o = "prev" === t ? r.prev(Ze) : r.next(Ze)).length) {
              if (!m.loopHorizontal) return;
              o = "prev" === t ? r.siblings(":last") : r.siblings(":first");
            }
            (Xt = !0), K(n, o);
          }
        }
        function A() {
          ge(Ge).each(function () {
            jt(ge(this), "internal");
          });
        }
        function P(t) {
          var e = t.position(),
            n = e.top,
            i = e.top > pe,
            r = n - Yt + t.outerHeight();
          return (
            t.outerHeight() > Yt
              ? i || (n = r)
              : (i || (Qt && t.is(":last-child"))) && (n = r),
            (pe = n)
          );
        }
        function O(t, e, n) {
          if (void 0 !== t) {
            var i = {
              element: t,
              callback: e,
              isMovementUp: n,
              dtop: P(t),
              yMovement: at(t),
              anchorLink: t.data("anchor"),
              sectionIndex: t.index(Me),
              activeSlide: t.find(Ge),
              activeSection: ge(Le),
              leavingSection: ge(Le).index(Me) + 1,
              localIsResizing: Qt,
            };
            if (
              !(
                (i.activeSection.is(t) && !Qt) ||
                (m.scrollBar && dn.scrollTop() === i.dtop && !t.hasClass(He))
              )
            ) {
              if (i.activeSlide.length)
                var r = i.activeSlide.data("anchor"),
                  o = i.activeSlide.index();
              m.autoScrolling &&
                m.continuousVertical &&
                "undefined" != typeof i.isMovementUp &&
                ((!i.isMovementUp && "up" == i.yMovement) ||
                  (i.isMovementUp && "down" == i.yMovement)) &&
                (i = R(i)),
                (!ge.isFunction(m.onLeave) ||
                  i.localIsResizing ||
                  !1 !==
                    m.onLeave.call(
                      i.activeSection,
                      i.leavingSection,
                      i.sectionIndex + 1,
                      i.yMovement
                    )) &&
                  (I(i.activeSection),
                  t.addClass(Oe).siblings().removeClass(Oe),
                  M(t),
                  m.scrollOverflowHandler.onLeave(),
                  (Gt = !1),
                  gt(o, r, i.anchorLink, i.sectionIndex),
                  j(i),
                  (Ht = i.anchorLink),
                  ot(i.anchorLink, i.sectionIndex));
            }
          }
        }
        function j(t) {
          if (m.css3 && m.autoScrolling && !m.scrollBar) {
            ft("translate3d(0px, -" + t.dtop + "px, 0px)", !0),
              m.scrollingSpeed
                ? (ee = setTimeout(function () {
                    N(t);
                  }, m.scrollingSpeed))
                : N(t);
          } else {
            var e = E(t);
            ge(e.element)
              .animate(e.options, m.scrollingSpeed, m.easing)
              .promise()
              .done(function () {
                m.scrollBar
                  ? setTimeout(function () {
                      N(t);
                    }, 30)
                  : N(t);
              });
          }
        }
        function E(t) {
          var e = {};
          return (
            m.autoScrolling && !m.scrollBar
              ? ((e.options = { top: -t.dtop }), (e.element = Te))
              : ((e.options = { scrollTop: t.dtop }),
                (e.element = "html, body")),
            e
          );
        }
        function R(t) {
          return (
            t.isMovementUp
              ? ge(Le).before(t.activeSection.nextAll(Me))
              : ge(Le).after(t.activeSection.prevAll(Me).get().reverse()),
            Et(ge(Le).position().top),
            A(),
            (t.wrapAroundElements = t.activeSection),
            (t.dtop = t.element.position().top),
            (t.yMovement = at(t.element)),
            t
          );
        }
        function D(t) {
          t.wrapAroundElements &&
            t.wrapAroundElements.length &&
            (t.isMovementUp
              ? ge(Ie).before(t.wrapAroundElements)
              : ge(Fe).after(t.wrapAroundElements),
            Et(ge(Le).position().top),
            A());
        }
        function N(t) {
          D(t),
            t.element.find(".fp-scrollable").mouseover(),
            ge.isFunction(m.afterLoad) &&
              !t.localIsResizing &&
              m.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1),
            m.scrollOverflowHandler.afterLoad(),
            L(t.element),
            t.element.addClass(Ee).siblings().removeClass(Ee),
            (Gt = !0),
            ge.isFunction(t.callback) && t.callback.call(this);
        }
        function M(t) {
          (t = F(t))
            .find(
              "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
            )
            .each(function () {
              ge(this).attr("src", ge(this).data("src")),
                ge(this).removeAttr("data-src"),
                ge(this).is("source") &&
                  ge(this).closest("video").get(0).load();
            });
        }
        function L(t) {
          (t = F(t)).find("video, audio").each(function () {
            var t = ge(this).get(0);
            t.hasAttribute("data-autoplay") &&
              "function" == typeof t.play &&
              t.play();
          }),
            t.find('iframe[src*="youtube.com/embed/"]').each(function () {
              var t = ge(this).get(0);
              /youtube\.com\/embed\//.test(ge(this).attr("src")) &&
                t.hasAttribute("data-autoplay") &&
                t.contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}',
                  "*"
                );
            });
        }
        function I(t) {
          (t = F(t)).find("video, audio").each(function () {
            var t = ge(this).get(0);
            t.hasAttribute("data-keepplaying") ||
              "function" != typeof t.pause ||
              t.pause();
          }),
            t.find('iframe[src*="youtube.com/embed/"]').each(function () {
              var t = ge(this).get(0);
              /youtube\.com\/embed\//.test(ge(this).attr("src")) &&
                !t.hasAttribute("data-keepplaying") &&
                ge(this)
                  .get(0)
                  .contentWindow.postMessage(
                    '{"event":"command","func":"pauseVideo","args":""}',
                    "*"
                  );
            });
        }
        function F(t) {
          var e = t.find(Ge);
          return e.length && (t = ge(e)), t;
        }
        function B() {
          var t = ve.location.hash.replace("#", "").split("/"),
            e = decodeURIComponent(t[0]),
            n = decodeURIComponent(t[1]);
          e && (m.animateAnchor ? pt(e, n) : zt.silentMoveTo(e, n));
        }
        function z() {
          if (!se && !m.lockAnchors) {
            var t = ve.location.hash.replace("#", "").split("/"),
              e = decodeURIComponent(t[0]),
              n = decodeURIComponent(t[1]),
              i = void 0 === Ht,
              r = void 0 === Ht && void 0 === n && !Xt;
            e.length &&
              ((e && e !== Ht && !i) || r || (!Xt && qt != n)) &&
              pt(e, n);
          }
        }
        function H(t) {
          clearTimeout(oe);
          var e = ge(":focus");
          if (
            !e.is("textarea") &&
            !e.is("input") &&
            !e.is("select") &&
            "true" !== e.attr("contentEditable") &&
            "" !== e.attr("contentEditable") &&
            m.keyboardScrolling &&
            m.autoScrolling
          ) {
            var n = t.which,
              i = [40, 38, 32, 33, 34];
            -1 < ge.inArray(n, i) && t.preventDefault(),
              (Wt = t.ctrlKey),
              (oe = setTimeout(function () {
                Z(t);
              }, 150));
          }
        }
        function q() {
          ge(this).prev().trigger("click");
        }
        function W(t) {
          Zt && (Wt = t.ctrlKey);
        }
        function X(t) {
          2 == t.which && ((me = t.pageY), Vt.on("mousemove", G));
        }
        function U(t) {
          2 == t.which && Vt.off("mousemove");
        }
        function $() {
          var t = ge(this).closest(Me);
          ge(this).hasClass(ln)
            ? Jt.m.left && zt.moveSlideLeft(t)
            : Jt.m.right && zt.moveSlideRight(t);
        }
        function V() {
          Wt = Zt = !1;
        }
        function Y(t) {
          t.preventDefault();
          var e = ge(this).parent().index();
          O(ge(Me).eq(e));
        }
        function Q(t) {
          t.preventDefault();
          var e = ge(this).closest(Me).find(Je);
          K(e, e.find(Ze).eq(ge(this).closest("li").index()));
        }
        function Z(t) {
          var e = t.shiftKey;
          switch (t.which) {
            case 38:
            case 33:
              Jt.k.up && zt.moveSectionUp();
              break;
            case 32:
              if (e && Jt.k.up) {
                zt.moveSectionUp();
                break;
              }
            case 40:
            case 34:
              Jt.k.down && zt.moveSectionDown();
              break;
            case 36:
              Jt.k.up && zt.moveTo(1);
              break;
            case 35:
              Jt.k.down && zt.moveTo(ge(Me).length);
              break;
            case 37:
              Jt.k.left && zt.moveSlideLeft();
              break;
            case 39:
              Jt.k.right && zt.moveSlideRight();
              break;
            default:
              return;
          }
        }
        function G(t) {
          Gt &&
            (t.pageY < me && Jt.m.up
              ? zt.moveSectionUp()
              : t.pageY > me && Jt.m.down && zt.moveSectionDown()),
            (me = t.pageY);
        }
        function K(t, e) {
          var n = e.position(),
            i = e.index(),
            r = t.closest(Me),
            o = r.index(Me),
            a = r.data("anchor"),
            s = r.find(on),
            l = yt(e),
            u = r.find(Ge),
            c = Qt;
          if (m.onSlideLeave) {
            var f = u.index(),
              h = st(f, i);
            if (
              !c &&
              "none" !== h &&
              ge.isFunction(m.onSlideLeave) &&
              !1 === m.onSlideLeave.call(u, a, o + 1, f, h, i)
            )
              return void (Xt = !1);
          }
          I(u),
            e.addClass(Oe).siblings().removeClass(Oe),
            c || M(e),
            !m.loopHorizontal &&
              m.controlArrows &&
              (r.find(cn).toggle(0 !== i),
              r.find(hn).toggle(!e.is(":last-child"))),
            r.hasClass(Oe) && gt(i, l, a, o);
          var d = function () {
            c ||
              (ge.isFunction(m.afterSlideLoad) &&
                m.afterSlideLoad.call(e, a, o + 1, l, i)),
              L(e),
              (Xt = !1);
          };
          if (m.css3) {
            var p = "translate3d(-" + be.round(n.left) + "px, 0px, 0px)";
            et(t.find(en), 0 < m.scrollingSpeed).css(Rt(p)),
              (ne = setTimeout(
                function () {
                  d();
                },
                m.scrollingSpeed,
                m.easing
              ));
          } else
            t.animate(
              { scrollLeft: be.round(n.left) },
              m.scrollingSpeed,
              m.easing,
              function () {
                d();
              }
            );
          s.find(je).removeClass(Oe), s.find("li").eq(i).find("a").addClass(Oe);
        }
        function J() {
          if ((tt(), Ut)) {
            var t = ge(ye.activeElement);
            if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
              var e = dn.height();
              be.abs(e - _e) > (20 * be.max(_e, e)) / 100 &&
                (zt.reBuild(!0), (_e = e));
            }
          } else
            clearTimeout(te),
              (te = setTimeout(function () {
                zt.reBuild(!0);
              }, 350));
        }
        function tt() {
          var t = m.responsive || m.responsiveWidth,
            e = m.responsiveHeight,
            n = t && dn.outerWidth() < t,
            i = e && dn.height() < e;
          t && e
            ? zt.setResponsive(n || i)
            : t
            ? zt.setResponsive(n)
            : e && zt.setResponsive(i);
        }
        function et(t) {
          var e = "all " + m.scrollingSpeed + "ms " + m.easingcss3;
          return (
            t.removeClass(Ce), t.css({ "-webkit-transition": e, transition: e })
          );
        }
        function nt(t) {
          return t.addClass(Ce);
        }
        function it(t, e) {
          m.navigation &&
            (ge(Xe).find(je).removeClass(Oe),
            t
              ? ge(Xe)
                  .find('a[href="#' + t + '"]')
                  .addClass(Oe)
              : ge(Xe).find("li").eq(e).find("a").addClass(Oe));
        }
        function rt(t) {
          m.menu &&
            (ge(m.menu).find(je).removeClass(Oe),
            ge(m.menu)
              .find('[data-menuanchor="' + t + '"]')
              .addClass(Oe));
        }
        function ot(t, e) {
          rt(t), it(t, e);
        }
        function at(t) {
          var e = ge(Le).index(Me),
            n = t.index(Me);
          return e == n ? "none" : n < e ? "up" : "down";
        }
        function st(t, e) {
          return t == e ? "none" : e < t ? "left" : "right";
        }
        function lt(t) {
          if (!t.hasClass("fp-noscroll")) {
            t.css("overflow", "hidden");
            var e,
              n = m.scrollOverflowHandler,
              i = n.wrapContent(),
              r = t.closest(Me),
              o = n.scrollable(t);
            o.length
              ? (e = n.scrollHeight(t))
              : ((e = t.get(0).scrollHeight),
                m.verticalCentered && (e = t.find(ze).get(0).scrollHeight));
            var a =
              Yt -
              parseInt(r.css("padding-bottom")) -
              parseInt(r.css("padding-top"));
            a < e
              ? o.length
                ? n.update(t, a)
                : (m.verticalCentered
                    ? t.find(ze).wrapInner(i)
                    : t.wrapInner(i),
                  n.create(t, a))
              : n.remove(t),
              t.css("overflow", "");
          }
        }
        function ut(t) {
          t.addClass(nn).wrapInner(
            '<div class="' + Be + '" style="height:' + ct(t) + 'px;" />'
          );
        }
        function ct(t) {
          var e = Yt;
          if (m.paddingTop || m.paddingBottom) {
            var n = t;
            n.hasClass(Ne) || (n = t.closest(Me));
            var i =
              parseInt(n.css("padding-top")) +
              parseInt(n.css("padding-bottom"));
            e = Yt - i;
          }
          return e;
        }
        function ft(t, e) {
          e ? et(Vt) : nt(Vt),
            Vt.css(Rt(t)),
            setTimeout(function () {
              Vt.removeClass(Ce);
            }, 10);
        }
        function ht(t) {
          var e = Vt.find(Me + '[data-anchor="' + t + '"]');
          return e.length || (e = ge(Me).eq(t - 1)), e;
        }
        function dt(t, e) {
          var n = e.find(Je),
            i = n.find(Ze + '[data-anchor="' + t + '"]');
          return i.length || (i = n.find(Ze).eq(t)), i;
        }
        function pt(t, e) {
          var n = ht(t);
          void 0 === e && (e = 0),
            t === Ht || n.hasClass(Oe)
              ? mt(n, e)
              : O(n, function () {
                  mt(n, e);
                });
        }
        function mt(t, e) {
          if (void 0 !== e) {
            var n = t.find(Je),
              i = dt(e, t);
            i.length && K(n, i);
          }
        }
        function _t(t, e) {
          t.append('<div class="' + rn + '"><ul></ul></div>');
          var n = t.find(on);
          n.addClass(m.slidesNavPosition);
          for (var i = 0; i < e; i++)
            n.find("ul").append('<li><a href="#"><span></span></a></li>');
          n.css("margin-left", "-" + n.width() / 2 + "px"),
            n.find("li").first().find("a").addClass(Oe);
        }
        function gt(t, e, n) {
          var i = "";
          m.anchors.length &&
            !m.lockAnchors &&
            (t
              ? (void 0 !== n && (i = n),
                void 0 === e && (e = t),
                vt(i + "/" + (qt = e)))
              : (void 0 !== t && (qt = e), vt(n))),
            bt();
        }
        function vt(t) {
          if (m.recordHistory) location.hash = t;
          else if (Ut || $t) ve.history.replaceState(xe, xe, "#" + t);
          else {
            var e = ve.location.href.split("#")[0];
            ve.location.replace(e + "#" + t);
          }
        }
        function yt(t) {
          var e = t.data("anchor"),
            n = t.index();
          return void 0 === e && (e = n), e;
        }
        function bt() {
          var t = ge(Le),
            e = t.find(Ge),
            n = yt(t),
            i = yt(e),
            r = String(n);
          e.length && (r = r + "-" + i),
            (r = r.replace("/", "-").replace("#", ""));
          var o = new RegExp("\\b\\s?" + Pe + "-[^\\s]+\\b", "g");
          (Bt[0].className = Bt[0].className.replace(o, "")),
            Bt.addClass(Pe + "-" + r);
        }
        function xt() {
          var t,
            e = ye.createElement("p"),
            n = {
              webkitTransform: "-webkit-transform",
              OTransform: "-o-transform",
              msTransform: "-ms-transform",
              MozTransform: "-moz-transform",
              transform: "transform",
            };
          for (var i in (ye.body.insertBefore(e, null), n))
            e.style[i] !== xe &&
              ((e.style[i] = "translate3d(1px,1px,1px)"),
              (t = ve.getComputedStyle(e).getPropertyValue(n[i])));
          return (
            ye.body.removeChild(e), t !== xe && 0 < t.length && "none" !== t
          );
        }
        function wt() {
          ye.addEventListener
            ? (ye.removeEventListener("mousewheel", C, !1),
              ye.removeEventListener("wheel", C, !1),
              ye.removeEventListener("MozMousePixelScroll", C, !1))
            : ye.detachEvent("onmousewheel", C);
        }
        function Tt() {
          var t,
            e = "";
          ve.addEventListener
            ? (t = "addEventListener")
            : ((t = "attachEvent"), (e = "on"));
          var n =
            "onwheel" in ye.createElement("div")
              ? "wheel"
              : ye.onmousewheel !== xe
              ? "mousewheel"
              : "DOMMouseScroll";
          "DOMMouseScroll" == n
            ? ye[t](e + "MozMousePixelScroll", C, !1)
            : ye[t](e + n, C, !1);
        }
        function St() {
          Vt.on("mousedown", X).on("mouseup", U);
        }
        function Ct() {
          Vt.off("mousedown", X).off("mouseup", U);
        }
        function kt() {
          if (Ut || $t) {
            var t = Pt();
            ge(Te)
              .off("touchstart " + t.down)
              .on("touchstart " + t.down, T),
              ge(Te)
                .off("touchmove " + t.move)
                .on("touchmove " + t.move, b);
          }
        }
        function At() {
          if (Ut || $t) {
            var t = Pt();
            ge(Te).off("touchstart " + t.down),
              ge(Te).off("touchmove " + t.move);
          }
        }
        function Pt() {
          return ve.PointerEvent
            ? { down: "pointerdown", move: "pointermove" }
            : { down: "MSPointerDown", move: "MSPointerMove" };
        }
        function Ot(t) {
          var e = [];
          return (
            (e.y =
              "undefined" != typeof t.pageY && (t.pageY || t.pageX)
                ? t.pageY
                : t.touches[0].pageY),
            (e.x =
              "undefined" != typeof t.pageX && (t.pageY || t.pageX)
                ? t.pageX
                : t.touches[0].pageX),
            $t &&
              w(t) &&
              m.scrollBar &&
              ((e.y = t.touches[0].pageY), (e.x = t.touches[0].pageX)),
            e
          );
        }
        function jt(t, e) {
          zt.setScrollingSpeed(0, "internal"),
            void 0 !== e && (Qt = !0),
            K(t.closest(Je), t),
            void 0 !== e && (Qt = !1),
            zt.setScrollingSpeed(ae.scrollingSpeed, "internal");
        }
        function Et(t) {
          if (m.scrollBar) Vt.scrollTop(t);
          else if (m.css3) {
            ft("translate3d(0px, -" + t + "px, 0px)", !1);
          } else Vt.css("top", -t);
        }
        function Rt(t) {
          return {
            "-webkit-transform": t,
            "-moz-transform": t,
            "-ms-transform": t,
            transform: t,
          };
        }
        function Dt(t, e, n) {
          switch (e) {
            case "up":
              Jt[n].up = t;
              break;
            case "down":
              Jt[n].down = t;
              break;
            case "left":
              Jt[n].left = t;
              break;
            case "right":
              Jt[n].right = t;
              break;
            case "all":
              "m" == n ? zt.setAllowScrolling(t) : zt.setKeyboardScrolling(t);
          }
        }
        function Nt() {
          Et(0),
            ge(Xe + ", " + on + ", " + sn).remove(),
            ge(Me).css({ height: "", "background-color": "", padding: "" }),
            ge(Ze).css({ width: "" }),
            Vt.css({
              height: "",
              position: "",
              "-ms-touch-action": "",
              "touch-action": "",
            }),
            Ft.css({ overflow: "", height: "" }),
            ge("html").removeClass(Ae),
            ge.each(Bt.get(0).className.split(/\s+/), function (t, e) {
              0 === e.indexOf(Pe) && Bt.removeClass(e);
            }),
            ge(Me + ", " + Ze).each(function () {
              m.scrollOverflowHandler.remove(ge(this)),
                ge(this).removeClass(nn + " " + Oe);
            }),
            nt(Vt),
            Vt.find(ze + ", " + en + ", " + Je).each(function () {
              ge(this).replaceWith(this.childNodes);
            }),
            Ft.scrollTop(0);
          var t = [Ne, Qe, tn];
          ge.each(t, function (t, e) {
            ge("." + e).removeClass(e);
          });
        }
        function Mt(t, e, n) {
          (m[t] = e), "internal" !== n && (ae[t] = e);
        }
        function Lt() {
          return ge("html").hasClass(Ae)
            ? void It(
                "error",
                "Fullpage.js can only be initialized once and you are doing it multiple times!"
              )
            : (m.continuousVertical &&
                (m.loopTop || m.loopBottom) &&
                ((m.continuousVertical = !1),
                It(
                  "warn",
                  "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                )),
              m.scrollBar &&
                m.scrollOverflow &&
                It(
                  "warn",
                  "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
                ),
              m.continuousVertical &&
                m.scrollBar &&
                ((m.continuousVertical = !1),
                It(
                  "warn",
                  "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                )),
              void ge.each(m.anchors, function (t, e) {
                var n = pn.find("[name]").filter(function () {
                    return (
                      ge(this).attr("name") &&
                      ge(this).attr("name").toLowerCase() == e.toLowerCase()
                    );
                  }),
                  i = pn.find("[id]").filter(function () {
                    return (
                      ge(this).attr("id") &&
                      ge(this).attr("id").toLowerCase() == e.toLowerCase()
                    );
                  });
                (i.length || n.length) &&
                  (It(
                    "error",
                    "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                  ),
                  i.length &&
                    It(
                      "error",
                      '"' +
                        e +
                        '" is is being used by another element `id` property'
                    ),
                  n.length &&
                    It(
                      "error",
                      '"' +
                        e +
                        '" is is being used by another element `name` property'
                    ));
              }));
        }
        function It(t, e) {
          console && console[t] && console[t]("fullPage: " + e);
        }
        if (ge("html").hasClass(Ae)) Lt();
        else {
          var Ft = ge("html, body"),
            Bt = ge("body"),
            zt = ge.fn.fullpage;
          (m = ge.extend(
            {
              menu: !1,
              anchors: [],
              lockAnchors: !1,
              navigation: !1,
              navigationPosition: "right",
              navigationTooltips: [],
              showActiveTooltip: !1,
              slidesNavigation: !1,
              slidesNavPosition: "bottom",
              scrollBar: !1,
              hybrid: !1,
              css3: !0,
              scrollingSpeed: 700,
              autoScrolling: !0,
              fitToSection: !0,
              fitToSectionDelay: 1e3,
              easing: "easeInOutCubic",
              easingcss3: "ease",
              loopBottom: !1,
              loopTop: !1,
              loopHorizontal: !0,
              continuousVertical: !1,
              normalScrollElements: null,
              scrollOverflow: !1,
              scrollOverflowHandler: _n,
              scrollOverflowOptions: null,
              touchSensitivity: 5,
              normalScrollElementTouchThreshold: 5,
              keyboardScrolling: !0,
              animateAnchor: !0,
              recordHistory: !0,
              controlArrows: !0,
              controlArrowColor: "#fff",
              verticalCentered: !0,
              sectionsColor: [],
              paddingTop: 0,
              paddingBottom: 0,
              fixedElements: null,
              responsive: 0,
              responsiveWidth: 0,
              responsiveHeight: 0,
              sectionSelector: De,
              slideSelector: Ye,
              afterLoad: null,
              onLeave: null,
              afterRender: null,
              afterResize: null,
              afterReBuild: null,
              afterSlideLoad: null,
              onSlideLeave: null,
            },
            m
          )),
            Lt(),
            (mn = ge.extend(mn, m.scrollOverflowOptions)),
            ge.extend(ge.easing, {
              easeInOutCubic: function (t, e, n, i, r) {
                return (e /= r / 2) < 1
                  ? (i / 2) * e * e * e + n
                  : (i / 2) * ((e -= 2) * e * e + 2) + n;
              },
            }),
            (zt.setAutoScrolling = function (t, e) {
              Mt("autoScrolling", t, e);
              var n = ge(Le);
              m.autoScrolling && !m.scrollBar
                ? (Ft.css({ overflow: "hidden", height: "100%" }),
                  zt.setRecordHistory(ae.recordHistory, "internal"),
                  Vt.css({
                    "-ms-touch-action": "none",
                    "touch-action": "none",
                  }),
                  n.length && Et(n.position().top))
                : (Ft.css({ overflow: "visible", height: "initial" }),
                  zt.setRecordHistory(!1, "internal"),
                  Vt.css({ "-ms-touch-action": "", "touch-action": "" }),
                  Et(0),
                  n.length && Ft.scrollTop(n.position().top));
            }),
            (zt.setRecordHistory = function (t, e) {
              Mt("recordHistory", t, e);
            }),
            (zt.setScrollingSpeed = function (t, e) {
              Mt("scrollingSpeed", t, e);
            }),
            (zt.setFitToSection = function (t, e) {
              Mt("fitToSection", t, e);
            }),
            (zt.setLockAnchors = function (t) {
              m.lockAnchors = t;
            }),
            (zt.setMouseWheelScrolling = function (t) {
              t ? (Tt(), St()) : (wt(), Ct());
            }),
            (zt.setAllowScrolling = function (n, t) {
              void 0 !== t
                ? ((t = t.replace(/ /g, "").split(",")),
                  ge.each(t, function (t, e) {
                    Dt(n, e, "m");
                  }))
                : n
                ? (zt.setMouseWheelScrolling(!0), kt())
                : (zt.setMouseWheelScrolling(!1), At());
            }),
            (zt.setKeyboardScrolling = function (n, t) {
              void 0 !== t
                ? ((t = t.replace(/ /g, "").split(",")),
                  ge.each(t, function (t, e) {
                    Dt(n, e, "k");
                  }))
                : (m.keyboardScrolling = n);
            }),
            (zt.moveSectionUp = function () {
              var t = ge(Le).prev(Me);
              t.length ||
                (!m.loopTop && !m.continuousVertical) ||
                (t = ge(Me).last()),
                t.length && O(t, null, !0);
            }),
            (zt.moveSectionDown = function () {
              var t = ge(Le).next(Me);
              t.length ||
                (!m.loopBottom && !m.continuousVertical) ||
                (t = ge(Me).first()),
                t.length && O(t, null, !1);
            }),
            (zt.silentMoveTo = function (t, e) {
              zt.setScrollingSpeed(0, "internal"),
                zt.moveTo(t, e),
                zt.setScrollingSpeed(ae.scrollingSpeed, "internal");
            }),
            (zt.moveTo = function (t, e) {
              var n = ht(t);
              void 0 !== e ? pt(t, e) : 0 < n.length && O(n);
            }),
            (zt.moveSlideRight = function (t) {
              k("next", t);
            }),
            (zt.moveSlideLeft = function (t) {
              k("prev", t);
            }),
            (zt.reBuild = function (t) {
              if (!Vt.hasClass(ke)) {
                (Qt = !0),
                  (Yt = dn.height()),
                  ge(Me).each(function () {
                    var t = ge(this).find(Je),
                      e = ge(this).find(Ze);
                    m.verticalCentered &&
                      ge(this)
                        .find(ze)
                        .css("height", ct(ge(this)) + "px"),
                      ge(this).css("height", Yt + "px"),
                      m.scrollOverflow &&
                        (e.length
                          ? e.each(function () {
                              lt(ge(this));
                            })
                          : lt(ge(this))),
                      1 < e.length && K(t, t.find(Ge));
                  });
                var e = ge(Le).index(Me);
                e && zt.silentMoveTo(e + 1),
                  (Qt = !1),
                  ge.isFunction(m.afterResize) && t && m.afterResize.call(Vt),
                  ge.isFunction(m.afterReBuild) &&
                    !t &&
                    m.afterReBuild.call(Vt);
              }
            });
          var Ht,
            qt,
            Wt,
            Xt = !(zt.setResponsive = function (t) {
              var e = Bt.hasClass(Se);
              t
                ? e ||
                  (zt.setAutoScrolling(!1, "internal"),
                  zt.setFitToSection(!1, "internal"),
                  ge(Xe).hide(),
                  Bt.addClass(Se))
                : e &&
                  (zt.setAutoScrolling(ae.autoScrolling, "internal"),
                  zt.setFitToSection(ae.autoScrolling, "internal"),
                  ge(Xe).show(),
                  Bt.removeClass(Se));
            }),
            Ut = navigator.userAgent.match(
              /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
            ),
            $t =
              "ontouchstart" in ve ||
              0 < navigator.msMaxTouchPoints ||
              navigator.maxTouchPoints,
            Vt = ge(this),
            Yt = dn.height(),
            Qt = !1,
            Zt = !0,
            Gt = !0,
            Kt = [],
            Jt = { m: { up: !0, down: !0, left: !0, right: !0 } };
          Jt.k = ge.extend(!0, {}, Jt.m);
          var te,
            ee,
            ne,
            ie,
            re,
            oe,
            ae = ge.extend(!0, {}, m);
          ge(this).length && (t(), e());
          var se = !1,
            le = 0,
            ue = 0,
            ce = 0,
            fe = 0,
            he = 0,
            de = new Date().getTime(),
            pe = 0,
            me = 0,
            _e = Yt;
          zt.destroy = function (t) {
            zt.setAutoScrolling(!1, "internal"),
              zt.setAllowScrolling(!1),
              zt.setKeyboardScrolling(!1),
              Vt.addClass(ke),
              clearTimeout(ne),
              clearTimeout(ee),
              clearTimeout(te),
              clearTimeout(ie),
              clearTimeout(re),
              dn.off("scroll", _).off("hashchange", z).off("resize", J),
              pn
                .off("click", Xe + " a")
                .off("mouseenter", Xe + " li")
                .off("mouseleave", Xe + " li")
                .off("click", an)
                .off("mouseover", m.normalScrollElements)
                .off("mouseout", m.normalScrollElements),
              ge(Me).off("click", sn),
              clearTimeout(ne),
              clearTimeout(ee),
              t && Nt();
          };
        }
      }),
        "undefined" != typeof IScroll &&
          ((IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener("wheel", this),
              this.wrapper.addEventListener("mousewheel", this),
              this.wrapper.addEventListener("DOMMouseScroll", this);
          }),
          (IScroll.prototype.wheelOff = function () {
            this.wrapper.removeEventListener("wheel", this),
              this.wrapper.removeEventListener("mousewheel", this),
              this.wrapper.removeEventListener("DOMMouseScroll", this);
          }));
      var _n = {
        refreshId: null,
        iScrollInstances: [],
        onLeave: function () {
          var t = ge(Le).find(i).data("iscrollInstance");
          void 0 !== t && t && t.wheelOff();
        },
        afterLoad: function () {
          var t = ge(Le).find(i).data("iscrollInstance");
          void 0 !== t && t && t.wheelOn();
        },
        create: function (t, e) {
          var n = t.find(i);
          n.height(e),
            n.each(function () {
              var t = jQuery(this),
                e = t.data("iscrollInstance");
              e &&
                ge.each(_n.iScrollInstances, function () {
                  ge(this).destroy();
                }),
                (e = new IScroll(t.get(0), mn)),
                _n.iScrollInstances.push(e),
                t.data("iscrollInstance", e);
            });
        },
        isScrolled: function (t, e) {
          var n = e.data("iscrollInstance");
          return (
            !!n &&
            ("top" === t
              ? 0 <= n.y && !e.scrollTop()
              : "bottom" === t
              ? 0 - n.y + e.scrollTop() + 1 + e.innerHeight() >=
                e[0].scrollHeight
              : void 0)
          );
        },
        scrollable: function (t) {
          return t.find(Je).length ? t.find(Ge).find(i) : t.find(i);
        },
        scrollHeight: function (t) {
          return t.find(i).children().first().get(0).scrollHeight;
        },
        remove: function (t) {
          var e = t.find(i);
          e.length &&
            (e.data("iscrollInstance").destroy(),
            e.data("iscrollInstance", "undefined"));
          t.find(i).children().first().children().first().unwrap().unwrap();
        },
        update: function (t, e) {
          clearTimeout(_n.refreshId),
            (_n.refreshId = setTimeout(function () {
              ge.each(_n.iScrollInstances, function () {
                ge(this).get(0).refresh();
              });
            }, 150)),
            t
              .find(i)
              .css("height", e + "px")
              .parent()
              .css("height", e + "px");
        },
        wrapContent: function () {
          return '<div class="' + t + '"><div class="fp-scroller"></div></div>';
        },
      };
    }
  ),
  (
    (_gsScope =
      "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
        ? global
        : this || window)._gsQueue || (_gsScope._gsQueue = [])
  ).push(function () {
    "use strict";
    var s, l, t, T, x, w, S, g, n, v, y, C, b, k, d, p, m, _, A, e;
    _gsScope._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (i, c, p) {
        var m = function (t) {
            var e,
              n = [],
              i = t.length;
            for (e = 0; e !== i; n.push(t[e++]));
            return n;
          },
          _ = function (t, e, n) {
            p.call(this, t, e, n),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._dirty = !0),
              (this.render = _.prototype.render);
          },
          g = 1e-10,
          v = p._internals,
          y = v.isSelector,
          b = v.isArray,
          t = (_.prototype = p.to({}, 0.1, {})),
          x = [];
        (_.version = "1.17.0"),
          (t.constructor = _),
          (t.kill()._gc = !1),
          (_.killTweensOf = _.killDelayedCallsTo = p.killTweensOf),
          (_.getTweensOf = p.getTweensOf),
          (_.lagSmoothing = p.lagSmoothing),
          (_.ticker = p.ticker),
          (_.render = p.render),
          (t.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              p.prototype.invalidate.call(this)
            );
          }),
          (t.updateTo = function (t, e) {
            var n,
              i = this.ratio,
              r = this.vars.immediateRender || t.immediateRender;
            for (n in (e &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time),
              this._uncache(!1),
              this._gc
                ? this._enabled(!0, !1)
                : this._timeline.insert(this, this._startTime - this._delay)),
            t))
              this.vars[n] = t[n];
            if (this._initted || r)
              if (e) (this._initted = !1), r && this.render(0, !0, !0);
              else if (
                (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled &&
                  this._firstPT &&
                  p._onPluginEvent("_onDisable", this),
                0.998 < this._time / this._duration)
              ) {
                var o = this._time;
                this.render(0, !0, !1),
                  (this._initted = !1),
                  this.render(o, !0, !1);
              } else if (0 < this._time || r) {
                (this._initted = !1), this._init();
                for (var a, s = 1 / (1 - i), l = this._firstPT; l; )
                  (a = l.s + l.c), (l.c *= s), (l.s = a - l.c), (l = l._next);
              }
            return this;
          }),
          (t.render = function (t, e, n) {
            this._initted ||
              (0 === this._duration && this.vars.repeat && this.invalidate());
            var i,
              r,
              o,
              a,
              s,
              l,
              u,
              c,
              f = this._dirty ? this.totalDuration() : this._totalDuration,
              h = this._time,
              d = this._totalTime,
              p = this._cycle,
              m = this._duration,
              _ = this._rawPrevTime;
            if (
              (f <= t
                ? ((this._totalTime = f),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0))
                    : ((this._time = m),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1)),
                  this._reversed ||
                    ((i = !0),
                    (r = "onComplete"),
                    (n = n || this._timeline.autoRemoveChildren)),
                  0 === m &&
                    (this._initted || !this.vars.lazy || n) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (0 === t || _ < 0 || _ === g) &&
                      _ !== t &&
                      ((n = !0), g < _ && (r = "onReverseComplete")),
                    (this._rawPrevTime = c = !e || t || _ === t ? t : g)))
                : t < 1e-7
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== d || (0 === m && 0 < _)) &&
                    ((r = "onReverseComplete"), (i = this._reversed)),
                  t < 0 &&
                    ((this._active = !1),
                    0 === m &&
                      (this._initted || !this.vars.lazy || n) &&
                      (0 <= _ && (n = !0),
                      (this._rawPrevTime = c = !e || t || _ === t ? t : g))),
                  this._initted || (n = !0))
                : ((this._totalTime = this._time = t),
                  0 !== this._repeat &&
                    ((a = m + this._repeatDelay),
                    (this._cycle = (this._totalTime / a) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / a &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * a),
                    this._yoyo &&
                      0 != (1 & this._cycle) &&
                      (this._time = m - this._time),
                    this._time > m
                      ? (this._time = m)
                      : this._time < 0 && (this._time = 0)),
                  this._easeType
                    ? ((s = this._time / m),
                      (1 === (l = this._easeType) || (3 === l && 0.5 <= s)) &&
                        (s = 1 - s),
                      3 === l && (s *= 2),
                      1 === (u = this._easePower)
                        ? (s *= s)
                        : 2 === u
                        ? (s *= s * s)
                        : 3 === u
                        ? (s *= s * s * s)
                        : 4 === u && (s *= s * s * s * s),
                      (this.ratio =
                        1 === l
                          ? 1 - s
                          : 2 === l
                          ? s
                          : this._time / m < 0.5
                          ? s / 2
                          : 1 - s / 2))
                    : (this.ratio = this._ease.getRatio(this._time / m))),
              h !== this._time || n || p !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return;
                if (
                  !n &&
                  this._firstPT &&
                  ((!1 !== this.vars.lazy && this._duration) ||
                    (this.vars.lazy && !this._duration))
                )
                  return (
                    (this._time = h),
                    (this._totalTime = d),
                    (this._rawPrevTime = _),
                    (this._cycle = p),
                    v.lazyTweens.push(this),
                    void (this._lazy = [t, e])
                  );
                this._time && !i
                  ? (this.ratio = this._ease.getRatio(this._time / m))
                  : i &&
                    this._ease._calcEnd &&
                    (this.ratio = this._ease.getRatio(
                      0 === this._time ? 0 : 1
                    ));
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active ||
                    (!this._paused &&
                      this._time !== h &&
                      0 <= t &&
                      (this._active = !0)),
                  0 === d &&
                    (2 === this._initted && 0 < t && this._init(),
                    this._startAt &&
                      (0 <= t
                        ? this._startAt.render(t, e, n)
                        : r || (r = "_dummyGS")),
                    this.vars.onStart &&
                      (0 !== this._totalTime || 0 === m) &&
                      (e || this._callback("onStart"))),
                  o = this._firstPT;
                o;

              )
                o.f
                  ? o.t[o.p](o.c * this.ratio + o.s)
                  : (o.t[o.p] = o.c * this.ratio + o.s),
                  (o = o._next);
              this._onUpdate &&
                (t < 0 &&
                  this._startAt &&
                  this._startTime &&
                  this._startAt.render(t, e, n),
                e ||
                  ((this._totalTime !== d || i) && this._callback("onUpdate"))),
                this._cycle !== p &&
                  (e ||
                    this._gc ||
                    (this.vars.onRepeat && this._callback("onRepeat"))),
                r &&
                  (!this._gc || n) &&
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startTime &&
                    this._startAt.render(t, e, n),
                  i &&
                    (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    (this._active = !1)),
                  !e && this.vars[r] && this._callback(r),
                  0 === m &&
                    this._rawPrevTime === g &&
                    c !== g &&
                    (this._rawPrevTime = 0));
            } else
              d !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (_.to = function (t, e, n) {
            return new _(t, e, n);
          }),
          (_.from = function (t, e, n) {
            return (
              (n.runBackwards = !0),
              (n.immediateRender = 0 != n.immediateRender),
              new _(t, e, n)
            );
          }),
          (_.fromTo = function (t, e, n, i) {
            return (
              (i.startAt = n),
              (i.immediateRender =
                0 != i.immediateRender && 0 != n.immediateRender),
              new _(t, e, i)
            );
          }),
          (_.staggerTo = _.allTo =
            function (t, e, n, i, r, o, a) {
              i = i || 0;
              var s,
                l,
                u,
                c,
                f = n.delay || 0,
                h = [],
                d = function () {
                  n.onComplete &&
                    n.onComplete.apply(n.onCompleteScope || this, arguments),
                    r.apply(a || n.callbackScope || this, o || x);
                };
              for (
                b(t) ||
                  ("string" == typeof t && (t = p.selector(t) || t),
                  y(t) && (t = m(t))),
                  t = t || [],
                  i < 0 && ((t = m(t)).reverse(), (i *= -1)),
                  s = t.length - 1,
                  u = 0;
                u <= s;
                u++
              ) {
                for (c in ((l = {}), n)) l[c] = n[c];
                (l.delay = f),
                  u === s && r && (l.onComplete = d),
                  (h[u] = new _(t[u], e, l)),
                  (f += i);
              }
              return h;
            }),
          (_.staggerFrom = _.allFrom =
            function (t, e, n, i, r, o, a) {
              return (
                (n.runBackwards = !0),
                (n.immediateRender = 0 != n.immediateRender),
                _.staggerTo(t, e, n, i, r, o, a)
              );
            }),
          (_.staggerFromTo = _.allFromTo =
            function (t, e, n, i, r, o, a, s) {
              return (
                (i.startAt = n),
                (i.immediateRender =
                  0 != i.immediateRender && 0 != n.immediateRender),
                _.staggerTo(t, e, i, r, o, a, s)
              );
            }),
          (_.delayedCall = function (t, e, n, i, r) {
            return new _(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: n,
              callbackScope: i,
              onReverseComplete: e,
              onReverseCompleteParams: n,
              immediateRender: !1,
              useFrames: r,
              overwrite: 0,
            });
          }),
          (_.set = function (t, e) {
            return new _(t, 0, e);
          }),
          (_.isTweening = function (t) {
            return 0 < p.getTweensOf(t, !0).length;
          });
        var o = function (t, e) {
            for (var n = [], i = 0, r = t._first; r; )
              r instanceof p
                ? (n[i++] = r)
                : (e && (n[i++] = r), (i = (n = n.concat(o(r, e))).length)),
                (r = r._next);
            return n;
          },
          f = (_.getAllTweens = function (t) {
            return o(i._rootTimeline, t).concat(o(i._rootFramesTimeline, t));
          });
        (_.killAll = function (t, e, n, i) {
          null == e && (e = !0), null == n && (n = !0);
          var r,
            o,
            a,
            s = f(0 != i),
            l = s.length,
            u = e && n && i;
          for (a = 0; a < l; a++)
            (o = s[a]),
              (u ||
                o instanceof c ||
                ((r = o.target === o.vars.onComplete) && n) ||
                (e && !r)) &&
                (t
                  ? o.totalTime(o._reversed ? 0 : o.totalDuration())
                  : o._enabled(!1, !1));
        }),
          (_.killChildTweensOf = function (t, e) {
            if (null != t) {
              var n,
                i,
                r,
                o,
                a,
                s = v.tweenLookup;
              if (
                ("string" == typeof t && (t = p.selector(t) || t),
                y(t) && (t = m(t)),
                b(t))
              )
                for (o = t.length; -1 < --o; ) _.killChildTweensOf(t[o], e);
              else {
                for (r in ((n = []), s))
                  for (i = s[r].target.parentNode; i; )
                    i === t && (n = n.concat(s[r].tweens)), (i = i.parentNode);
                for (a = n.length, o = 0; o < a; o++)
                  e && n[o].totalTime(n[o].totalDuration()),
                    n[o]._enabled(!1, !1);
              }
            }
          });
        var r = function (t, e, n, i) {
          (e = !1 !== e), (n = !1 !== n);
          for (
            var r, o, a = f((i = !1 !== i)), s = e && n && i, l = a.length;
            -1 < --l;

          )
            (o = a[l]),
              (s ||
                o instanceof c ||
                ((r = o.target === o.vars.onComplete) && n) ||
                (e && !r)) &&
                o.paused(t);
        };
        return (
          (_.pauseAll = function (t, e, n) {
            r(!0, t, e, n);
          }),
          (_.resumeAll = function (t, e, n) {
            r(!1, t, e, n);
          }),
          (_.globalTimeScale = function (t) {
            var e = i._rootTimeline,
              n = p.ticker.time;
            return arguments.length
              ? ((t = t || g),
                (e._startTime = n - ((n - e._startTime) * e._timeScale) / t),
                (e = i._rootFramesTimeline),
                (n = p.ticker.frame),
                (e._startTime = n - ((n - e._startTime) * e._timeScale) / t),
                (e._timeScale = i._rootTimeline._timeScale = t),
                t)
              : e._timeScale;
          }),
          (t.progress = function (t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  !1
                )
              : this._time / this.duration();
          }),
          (t.totalProgress = function (t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, !1)
              : this._totalTime / this.totalDuration();
          }),
          (t.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (t.duration = function (t) {
            return arguments.length
              ? i.prototype.duration.call(this, t)
              : this._duration;
          }),
          (t.totalDuration = function (t) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  ((this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat),
                  (this._dirty = !1)),
                this._totalDuration);
          }),
          (t.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (t.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (t.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          _
        );
      },
      !0
    ),
      _gsScope._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (c, f, h) {
          var d = function (t) {
              f.call(this, t),
                (this._labels = {}),
                (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                (this._sortChildren = !0),
                (this._onUpdate = this.vars.onUpdate);
              var e,
                n,
                i = this.vars;
              for (n in i)
                (e = i[n]),
                  _(e) &&
                    -1 !== e.join("").indexOf("{self}") &&
                    (i[n] = this._swapSelfInParams(e));
              _(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger);
            },
            p = 1e-10,
            t = h._internals,
            e = (d._internals = {}),
            m = t.isSelector,
            _ = t.isArray,
            g = t.lazyTweens,
            v = t.lazyRender,
            y = [],
            a = _gsScope._gsDefine.globals,
            b = function (t) {
              var e,
                n = {};
              for (e in t) n[e] = t[e];
              return n;
            },
            o = (e.pauseCallback = function (t, e, n, i) {
              var r,
                o = t._timeline,
                a = o._totalTime,
                s = t._startTime,
                l = t._rawPrevTime < 0 || (0 === t._rawPrevTime && o._reversed),
                u = l ? 0 : p,
                c = l ? p : 0;
              if (e || !this._forcingPlayhead) {
                for (o.pause(s), r = t._prev; r && r._startTime === s; )
                  (r._rawPrevTime = c), (r = r._prev);
                for (r = t._next; r && r._startTime === s; )
                  (r._rawPrevTime = u), (r = r._next);
                e && e.apply(i || o.vars.callbackScope || o, n || y),
                  (this._forcingPlayhead || !o._paused) && o.seek(a);
              }
            }),
            x = function (t) {
              var e,
                n = [],
                i = t.length;
              for (e = 0; e !== i; n.push(t[e++]));
              return n;
            },
            n = (d.prototype = new f());
          return (
            (d.version = "1.17.0"),
            (n.constructor = d),
            (n.kill()._gc = n._forcingPlayhead = !1),
            (n.to = function (t, e, n, i) {
              var r = (n.repeat && a.TweenMax) || h;
              return e ? this.add(new r(t, e, n), i) : this.set(t, n, i);
            }),
            (n.from = function (t, e, n, i) {
              return this.add(((n.repeat && a.TweenMax) || h).from(t, e, n), i);
            }),
            (n.fromTo = function (t, e, n, i, r) {
              var o = (i.repeat && a.TweenMax) || h;
              return e ? this.add(o.fromTo(t, e, n, i), r) : this.set(t, i, r);
            }),
            (n.staggerTo = function (t, e, n, i, r, o, a, s) {
              var l,
                u = new d({
                  onComplete: o,
                  onCompleteParams: a,
                  callbackScope: s,
                  smoothChildTiming: this.smoothChildTiming,
                });
              for (
                "string" == typeof t && (t = h.selector(t) || t),
                  m((t = t || [])) && (t = x(t)),
                  (i = i || 0) < 0 && ((t = x(t)).reverse(), (i *= -1)),
                  l = 0;
                t.length > l;
                l++
              )
                n.startAt && (n.startAt = b(n.startAt)),
                  u.to(t[l], e, b(n), l * i);
              return this.add(u, r);
            }),
            (n.staggerFrom = function (t, e, n, i, r, o, a, s) {
              return (
                (n.immediateRender = 0 != n.immediateRender),
                (n.runBackwards = !0),
                this.staggerTo(t, e, n, i, r, o, a, s)
              );
            }),
            (n.staggerFromTo = function (t, e, n, i, r, o, a, s, l) {
              return (
                (i.startAt = n),
                (i.immediateRender =
                  0 != i.immediateRender && 0 != n.immediateRender),
                this.staggerTo(t, e, i, r, o, a, s, l)
              );
            }),
            (n.call = function (t, e, n, i) {
              return this.add(h.delayedCall(0, t, e, n), i);
            }),
            (n.set = function (t, e, n) {
              return (
                (n = this._parseTimeOrLabel(n, 0, !0)),
                null == e.immediateRender &&
                  (e.immediateRender = n === this._time && !this._paused),
                this.add(new h(t, 0, e), n)
              );
            }),
            (d.exportRoot = function (t, e) {
              null == (t = t || {}).smoothChildTiming &&
                (t.smoothChildTiming = !0);
              var n,
                i,
                r = new d(t),
                o = r._timeline;
              for (
                null == e && (e = !0),
                  o._remove(r, !0),
                  r._startTime = 0,
                  r._rawPrevTime = r._time = r._totalTime = o._time,
                  n = o._first;
                n;

              )
                (i = n._next),
                  (e && n instanceof h && n.target === n.vars.onComplete) ||
                    r.add(n, n._startTime - n._delay),
                  (n = i);
              return o.add(r, 0), r;
            }),
            (n.add = function (t, e, n, i) {
              var r, o, a, s, l, u;
              if (
                ("number" != typeof e &&
                  (e = this._parseTimeOrLabel(e, 0, !0, t)),
                !(t instanceof c))
              ) {
                if (t instanceof Array || (t && t.push && _(t))) {
                  for (
                    n = n || "normal", i = i || 0, r = e, o = t.length, a = 0;
                    a < o;
                    a++
                  )
                    _((s = t[a])) && (s = new d({ tweens: s })),
                      this.add(s, r),
                      "string" != typeof s &&
                        "function" != typeof s &&
                        ("sequence" === n
                          ? (r =
                              s._startTime + s.totalDuration() / s._timeScale)
                          : "start" === n && (s._startTime -= s.delay())),
                      (r += i);
                  return this._uncache(!0);
                }
                if ("string" == typeof t) return this.addLabel(t, e);
                if ("function" != typeof t)
                  throw (
                    "Cannot add " +
                    t +
                    " into the timeline; it is not a tween, timeline, function, or string."
                  );
                t = h.delayedCall(0, t);
              }
              if (
                (f.prototype.add.call(this, t, e),
                (this._gc || this._time === this._duration) &&
                  !this._paused &&
                  this._duration < this.duration())
              )
                for (u = (l = this).rawTime() > t._startTime; l._timeline; )
                  u && l._timeline.smoothChildTiming
                    ? l.totalTime(l._totalTime, !0)
                    : l._gc && l._enabled(!0, !1),
                    (l = l._timeline);
              return this;
            }),
            (n.remove = function (t) {
              if (t instanceof c) return this._remove(t, !1);
              if (t instanceof Array || (t && t.push && _(t))) {
                for (var e = t.length; -1 < --e; ) this.remove(t[e]);
                return this;
              }
              return "string" == typeof t
                ? this.removeLabel(t)
                : this.kill(null, t);
            }),
            (n._remove = function (t, e) {
              f.prototype._remove.call(this, t, e);
              var n = this._last;
              return (
                n
                  ? this._time >
                      n._startTime + n._totalDuration / n._timeScale &&
                    ((this._time = this.duration()),
                    (this._totalTime = this._totalDuration))
                  : (this._time =
                      this._totalTime =
                      this._duration =
                      this._totalDuration =
                        0),
                this
              );
            }),
            (n.append = function (t, e) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
            }),
            (n.insert = n.insertMultiple =
              function (t, e, n, i) {
                return this.add(t, e || 0, n, i);
              }),
            (n.appendMultiple = function (t, e, n, i) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i);
            }),
            (n.addLabel = function (t, e) {
              return (this._labels[t] = this._parseTimeOrLabel(e)), this;
            }),
            (n.addPause = function (t, e, n, i) {
              var r = h.delayedCall(0, o, ["{self}", e, n, i], this);
              return (r.data = "isPause"), this.add(r, t);
            }),
            (n.removeLabel = function (t) {
              return delete this._labels[t], this;
            }),
            (n.getLabelTime = function (t) {
              return null != this._labels[t] ? this._labels[t] : -1;
            }),
            (n._parseTimeOrLabel = function (t, e, n, i) {
              var r;
              if (i instanceof c && i.timeline === this) this.remove(i);
              else if (i && (i instanceof Array || (i.push && _(i))))
                for (r = i.length; -1 < --r; )
                  i[r] instanceof c &&
                    i[r].timeline === this &&
                    this.remove(i[r]);
              if ("string" == typeof e)
                return this._parseTimeOrLabel(
                  e,
                  n && "number" == typeof t && null == this._labels[e]
                    ? t - this.duration()
                    : 0,
                  n
                );
              if (
                ((e = e || 0),
                "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
              )
                null == t && (t = this.duration());
              else {
                if (-1 === (r = t.indexOf("=")))
                  return null == this._labels[t]
                    ? n
                      ? (this._labels[t] = this.duration() + e)
                      : e
                    : this._labels[t] + e;
                (e =
                  parseInt(t.charAt(r - 1) + "1", 10) *
                  Number(t.substr(r + 1))),
                  (t =
                    1 < r
                      ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, n)
                      : this.duration());
              }
              return Number(t) + e;
            }),
            (n.seek = function (t, e) {
              return this.totalTime(
                "number" == typeof t ? t : this._parseTimeOrLabel(t),
                !1 !== e
              );
            }),
            (n.stop = function () {
              return this.paused(!0);
            }),
            (n.gotoAndPlay = function (t, e) {
              return this.play(t, e);
            }),
            (n.gotoAndStop = function (t, e) {
              return this.pause(t, e);
            }),
            (n.render = function (t, e, n) {
              this._gc && this._enabled(!0, !1);
              var i,
                r,
                o,
                a,
                s,
                l = this._dirty ? this.totalDuration() : this._totalDuration,
                u = this._time,
                c = this._startTime,
                f = this._timeScale,
                h = this._paused;
              if (l <= t)
                (this._totalTime = this._time = l),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((r = !0),
                    (a = "onComplete"),
                    (s = !!this._timeline.autoRemoveChildren),
                    0 === this._duration &&
                      (0 === t ||
                        this._rawPrevTime < 0 ||
                        this._rawPrevTime === p) &&
                      this._rawPrevTime !== t &&
                      this._first &&
                      ((s = !0),
                      this._rawPrevTime > p && (a = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : p),
                  (t = l + 1e-4);
              else if (t < 1e-7)
                if (
                  ((this._totalTime = this._time = 0),
                  (0 !== u ||
                    (0 === this._duration &&
                      this._rawPrevTime !== p &&
                      (0 < this._rawPrevTime ||
                        (t < 0 && 0 <= this._rawPrevTime)))) &&
                    ((a = "onReverseComplete"), (r = this._reversed)),
                  t < 0)
                )
                  (this._active = !1),
                    this._timeline.autoRemoveChildren && this._reversed
                      ? ((s = r = !0), (a = "onReverseComplete"))
                      : 0 <= this._rawPrevTime && this._first && (s = !0),
                    (this._rawPrevTime = t);
                else {
                  if (
                    ((this._rawPrevTime =
                      this._duration || !e || t || this._rawPrevTime === t
                        ? t
                        : p),
                    0 === t && r)
                  )
                    for (i = this._first; i && 0 === i._startTime; )
                      i._duration || (r = !1), (i = i._next);
                  (t = 0), this._initted || (s = !0);
                }
              else this._totalTime = this._time = this._rawPrevTime = t;
              if ((this._time !== u && this._first) || n || s) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active ||
                    (!this._paused &&
                      this._time !== u &&
                      0 < t &&
                      (this._active = !0)),
                  0 === u &&
                    this.vars.onStart &&
                    0 !== this._time &&
                    (e || this._callback("onStart")),
                  this._time >= u)
                )
                  for (
                    i = this._first;
                    i && ((o = i._next), !this._paused || h);

                  )
                    (i._active ||
                      (i._startTime <= this._time && !i._paused && !i._gc)) &&
                      (i._reversed
                        ? i.render(
                            (i._dirty ? i.totalDuration() : i._totalDuration) -
                              (t - i._startTime) * i._timeScale,
                            e,
                            n
                          )
                        : i.render((t - i._startTime) * i._timeScale, e, n)),
                      (i = o);
                else
                  for (
                    i = this._last;
                    i && ((o = i._prev), !this._paused || h);

                  )
                    (i._active ||
                      (u >= i._startTime && !i._paused && !i._gc)) &&
                      (i._reversed
                        ? i.render(
                            (i._dirty ? i.totalDuration() : i._totalDuration) -
                              (t - i._startTime) * i._timeScale,
                            e,
                            n
                          )
                        : i.render((t - i._startTime) * i._timeScale, e, n)),
                      (i = o);
                this._onUpdate &&
                  (e || (g.length && v(), this._callback("onUpdate"))),
                  a &&
                    (this._gc ||
                      ((c === this._startTime || f !== this._timeScale) &&
                        (0 === this._time || l >= this.totalDuration()) &&
                        (r &&
                          (g.length && v(),
                          this._timeline.autoRemoveChildren &&
                            this._enabled(!1, !1),
                          (this._active = !1)),
                        !e && this.vars[a] && this._callback(a))));
              }
            }),
            (n._hasPausedChild = function () {
              for (var t = this._first; t; ) {
                if (t._paused || (t instanceof d && t._hasPausedChild()))
                  return !0;
                t = t._next;
              }
              return !1;
            }),
            (n.getChildren = function (t, e, n, i) {
              i = i || -9999999999;
              for (var r = [], o = this._first, a = 0; o; )
                i > o._startTime ||
                  (o instanceof h
                    ? !1 !== e && (r[a++] = o)
                    : (!1 !== n && (r[a++] = o),
                      !1 !== t &&
                        (a = (r = r.concat(o.getChildren(!0, e, n))).length))),
                  (o = o._next);
              return r;
            }),
            (n.getTweensOf = function (t, e) {
              var n,
                i,
                r = this._gc,
                o = [],
                a = 0;
              for (
                r && this._enabled(!0, !0), i = (n = h.getTweensOf(t)).length;
                -1 < --i;

              )
                (n[i].timeline === this || (e && this._contains(n[i]))) &&
                  (o[a++] = n[i]);
              return r && this._enabled(!1, !0), o;
            }),
            (n.recent = function () {
              return this._recent;
            }),
            (n._contains = function (t) {
              for (var e = t.timeline; e; ) {
                if (e === this) return !0;
                e = e.timeline;
              }
              return !1;
            }),
            (n.shiftChildren = function (t, e, n) {
              n = n || 0;
              for (var i, r = this._first, o = this._labels; r; )
                r._startTime >= n && (r._startTime += t), (r = r._next);
              if (e) for (i in o) o[i] >= n && (o[i] += t);
              return this._uncache(!0);
            }),
            (n._kill = function (t, e) {
              if (!t && !e) return this._enabled(!1, !1);
              for (
                var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                  i = n.length,
                  r = !1;
                -1 < --i;

              )
                n[i]._kill(t, e) && (r = !0);
              return r;
            }),
            (n.clear = function (t) {
              var e = this.getChildren(!1, !0, !0),
                n = e.length;
              for (this._time = this._totalTime = 0; -1 < --n; )
                e[n]._enabled(!1, !1);
              return !1 !== t && (this._labels = {}), this._uncache(!0);
            }),
            (n.invalidate = function () {
              for (var t = this._first; t; ) t.invalidate(), (t = t._next);
              return c.prototype.invalidate.call(this);
            }),
            (n._enabled = function (t, e) {
              if (t === this._gc)
                for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
              return f.prototype._enabled.call(this, t, e);
            }),
            (n.totalTime = function () {
              this._forcingPlayhead = !0;
              var t = c.prototype.totalTime.apply(this, arguments);
              return (this._forcingPlayhead = !1), t;
            }),
            (n.duration = function (t) {
              return arguments.length
                ? (0 !== this.duration() &&
                    0 !== t &&
                    this.timeScale(this._duration / t),
                  this)
                : (this._dirty && this.totalDuration(), this._duration);
            }),
            (n.totalDuration = function (t) {
              if (arguments.length)
                return (
                  0 !== this.totalDuration() &&
                    0 !== t &&
                    this.timeScale(this._totalDuration / t),
                  this
                );
              if (this._dirty) {
                for (var e, n, i = 0, r = this._last, o = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > o && this._sortChildren && !r._paused
                      ? this.add(r, r._startTime - r._delay)
                      : (o = r._startTime),
                    r._startTime < 0 &&
                      !r._paused &&
                      ((i -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        (this._startTime += r._startTime / this._timeScale),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (o = 0)),
                    i < (n = r._startTime + r._totalDuration / r._timeScale) &&
                      (i = n),
                    (r = e);
                (this._duration = this._totalDuration = i), (this._dirty = !1);
              }
              return this._totalDuration;
            }),
            (n.paused = function (t) {
              if (!t)
                for (var e = this._first, n = this._time; e; )
                  e._startTime === n &&
                    "isPause" === e.data &&
                    (e._rawPrevTime = 0),
                    (e = e._next);
              return c.prototype.paused.apply(this, arguments);
            }),
            (n.usesFrames = function () {
              for (var t = this._timeline; t._timeline; ) t = t._timeline;
              return t === c._rootFramesTimeline;
            }),
            (n.rawTime = function () {
              return this._paused
                ? this._totalTime
                : (this._timeline.rawTime() - this._startTime) *
                    this._timeScale;
            }),
            d
          );
        },
        !0
      ),
      _gsScope._gsDefine(
        "TimelineMax",
        ["TimelineLite", "TweenLite", "easing.Ease"],
        function (e, a, t) {
          var n = function (t) {
              e.call(this, t),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                (this._cycle = 0),
                (this._yoyo = !0 === this.vars.yoyo),
                (this._dirty = !0);
            },
            S = 1e-10,
            i = a._internals,
            C = i.lazyTweens,
            k = i.lazyRender,
            s = new t(null, null, 1, 0),
            r = (n.prototype = new e());
          return (
            (r.constructor = n),
            (r.kill()._gc = !1),
            (n.version = "1.17.0"),
            (r.invalidate = function () {
              return (
                (this._yoyo = !0 === this.vars.yoyo),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                this._uncache(!0),
                e.prototype.invalidate.call(this)
              );
            }),
            (r.addCallback = function (t, e, n, i) {
              return this.add(a.delayedCall(0, t, n, i), e);
            }),
            (r.removeCallback = function (t, e) {
              if (t)
                if (null == e) this._kill(null, t);
                else
                  for (
                    var n = this.getTweensOf(t, !1),
                      i = n.length,
                      r = this._parseTimeOrLabel(e);
                    -1 < --i;

                  )
                    n[i]._startTime === r && n[i]._enabled(!1, !1);
              return this;
            }),
            (r.removePause = function (t) {
              return this.removeCallback(e._internals.pauseCallback, t);
            }),
            (r.tweenTo = function (t, e) {
              e = e || {};
              var n,
                i,
                r,
                o = {
                  ease: s,
                  useFrames: this.usesFrames(),
                  immediateRender: !1,
                };
              for (i in e) o[i] = e[i];
              return (
                (o.time = this._parseTimeOrLabel(t)),
                (n =
                  Math.abs(Number(o.time) - this._time) / this._timeScale ||
                  0.001),
                (r = new a(this, n, o)),
                (o.onStart = function () {
                  r.target.paused(!0),
                    r.vars.time !== r.target.time() &&
                      n === r.duration() &&
                      r.duration(
                        Math.abs(r.vars.time - r.target.time()) /
                          r.target._timeScale
                      ),
                    e.onStart && r._callback("onStart");
                }),
                r
              );
            }),
            (r.tweenFromTo = function (t, e, n) {
              (n = n || {}),
                (t = this._parseTimeOrLabel(t)),
                (n.startAt = {
                  onComplete: this.seek,
                  onCompleteParams: [t],
                  callbackScope: this,
                }),
                (n.immediateRender = !1 !== n.immediateRender);
              var i = this.tweenTo(e, n);
              return i.duration(
                Math.abs(i.vars.time - t) / this._timeScale || 0.001
              );
            }),
            (r.render = function (t, e, n) {
              this._gc && this._enabled(!0, !1);
              var i,
                r,
                o,
                a,
                s,
                l,
                u = this._dirty ? this.totalDuration() : this._totalDuration,
                c = this._duration,
                f = this._time,
                h = this._totalTime,
                d = this._startTime,
                p = this._timeScale,
                m = this._rawPrevTime,
                _ = this._paused,
                g = this._cycle;
              if (u <= t)
                this._locked ||
                  ((this._totalTime = u), (this._cycle = this._repeat)),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((r = !0),
                    (a = "onComplete"),
                    (s = !!this._timeline.autoRemoveChildren),
                    0 === this._duration &&
                      (0 === t || m < 0 || m === S) &&
                      m !== t &&
                      this._first &&
                      ((s = !0), S < m && (a = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : S),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? (this._time = t = 0)
                    : (t = (this._time = c) + 1e-4);
              else if (t < 1e-7)
                if (
                  (this._locked || (this._totalTime = this._cycle = 0),
                  ((this._time = 0) !== f ||
                    (0 === c &&
                      m !== S &&
                      (0 < m || (t < 0 && 0 <= m)) &&
                      !this._locked)) &&
                    ((a = "onReverseComplete"), (r = this._reversed)),
                  t < 0)
                )
                  (this._active = !1),
                    this._timeline.autoRemoveChildren && this._reversed
                      ? ((s = r = !0), (a = "onReverseComplete"))
                      : 0 <= m && this._first && (s = !0),
                    (this._rawPrevTime = t);
                else {
                  if (
                    ((this._rawPrevTime =
                      c || !e || t || this._rawPrevTime === t ? t : S),
                    0 === t && r)
                  )
                    for (i = this._first; i && 0 === i._startTime; )
                      i._duration || (r = !1), (i = i._next);
                  (t = 0), this._initted || (s = !0);
                }
              else
                0 === c && m < 0 && (s = !0),
                  (this._time = this._rawPrevTime = t),
                  this._locked ||
                    ((this._totalTime = t),
                    0 !== this._repeat &&
                      ((l = c + this._repeatDelay),
                      (this._cycle = (this._totalTime / l) >> 0),
                      0 !== this._cycle &&
                        this._cycle === this._totalTime / l &&
                        this._cycle--,
                      (this._time = this._totalTime - this._cycle * l),
                      this._yoyo &&
                        0 != (1 & this._cycle) &&
                        (this._time = c - this._time),
                      this._time > c
                        ? (t = (this._time = c) + 1e-4)
                        : this._time < 0
                        ? (this._time = t = 0)
                        : (t = this._time)));
              if (this._cycle !== g && !this._locked) {
                var v = this._yoyo && 0 != (1 & g),
                  y = v === (this._yoyo && 0 != (1 & this._cycle)),
                  b = this._totalTime,
                  x = this._cycle,
                  w = this._rawPrevTime,
                  T = this._time;
                if (
                  ((this._totalTime = g * c),
                  g > this._cycle ? (v = !v) : (this._totalTime += c),
                  (this._time = f),
                  (this._rawPrevTime = 0 === c ? m - 1e-4 : m),
                  (this._cycle = g),
                  (this._locked = !0),
                  (f = v ? 0 : c),
                  this.render(f, e, 0 === c),
                  e ||
                    this._gc ||
                    (this.vars.onRepeat && this._callback("onRepeat")),
                  y && ((f = v ? c + 1e-4 : -1e-4), this.render(f, !0, !1)),
                  (this._locked = !1),
                  this._paused && !_)
                )
                  return;
                (this._time = T),
                  (this._totalTime = b),
                  (this._cycle = x),
                  (this._rawPrevTime = w);
              }
              if ((this._time !== f && this._first) || n || s) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active ||
                    (!this._paused &&
                      this._totalTime !== h &&
                      0 < t &&
                      (this._active = !0)),
                  0 === h &&
                    this.vars.onStart &&
                    0 !== this._totalTime &&
                    (e || this._callback("onStart")),
                  this._time >= f)
                )
                  for (
                    i = this._first;
                    i && ((o = i._next), !this._paused || _);

                  )
                    (i._active ||
                      (i._startTime <= this._time && !i._paused && !i._gc)) &&
                      (i._reversed
                        ? i.render(
                            (i._dirty ? i.totalDuration() : i._totalDuration) -
                              (t - i._startTime) * i._timeScale,
                            e,
                            n
                          )
                        : i.render((t - i._startTime) * i._timeScale, e, n)),
                      (i = o);
                else
                  for (
                    i = this._last;
                    i && ((o = i._prev), !this._paused || _);

                  )
                    (i._active ||
                      (f >= i._startTime && !i._paused && !i._gc)) &&
                      (i._reversed
                        ? i.render(
                            (i._dirty ? i.totalDuration() : i._totalDuration) -
                              (t - i._startTime) * i._timeScale,
                            e,
                            n
                          )
                        : i.render((t - i._startTime) * i._timeScale, e, n)),
                      (i = o);
                this._onUpdate &&
                  (e || (C.length && k(), this._callback("onUpdate"))),
                  a &&
                    (this._locked ||
                      this._gc ||
                      ((d === this._startTime || p !== this._timeScale) &&
                        (0 === this._time || u >= this.totalDuration()) &&
                        (r &&
                          (C.length && k(),
                          this._timeline.autoRemoveChildren &&
                            this._enabled(!1, !1),
                          (this._active = !1)),
                        !e && this.vars[a] && this._callback(a))));
              } else
                h !== this._totalTime &&
                  this._onUpdate &&
                  (e || this._callback("onUpdate"));
            }),
            (r.getActive = function (t, e, n) {
              null == t && (t = !0),
                null == e && (e = !0),
                null == n && (n = !1);
              var i,
                r,
                o = [],
                a = this.getChildren(t, e, n),
                s = 0,
                l = a.length;
              for (i = 0; i < l; i++) (r = a[i]).isActive() && (o[s++] = r);
              return o;
            }),
            (r.getLabelAfter = function (t) {
              t || (0 !== t && (t = this._time));
              var e,
                n = this.getLabelsArray(),
                i = n.length;
              for (e = 0; e < i; e++) if (n[e].time > t) return n[e].name;
              return null;
            }),
            (r.getLabelBefore = function (t) {
              null == t && (t = this._time);
              for (var e = this.getLabelsArray(), n = e.length; -1 < --n; )
                if (t > e[n].time) return e[n].name;
              return null;
            }),
            (r.getLabelsArray = function () {
              var t,
                e = [],
                n = 0;
              for (t in this._labels)
                e[n++] = { time: this._labels[t], name: t };
              return (
                e.sort(function (t, e) {
                  return t.time - e.time;
                }),
                e
              );
            }),
            (r.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                      this._cycle * (this._duration + this._repeatDelay),
                    e
                  )
                : this._time / this.duration();
            }),
            (r.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this._totalTime / this.totalDuration();
            }),
            (r.totalDuration = function (t) {
              return arguments.length
                ? -1 === this._repeat
                  ? this
                  : this.duration(
                      (t - this._repeat * this._repeatDelay) /
                        (this._repeat + 1)
                    )
                : (this._dirty &&
                    (e.prototype.totalDuration.call(this),
                    (this._totalDuration =
                      -1 === this._repeat
                        ? 999999999999
                        : this._duration * (this._repeat + 1) +
                          this._repeatDelay * this._repeat)),
                  this._totalDuration);
            }),
            (r.time = function (t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  t > this._duration && (t = this._duration),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? (t =
                        this._duration -
                        t +
                        this._cycle * (this._duration + this._repeatDelay))
                    : 0 !== this._repeat &&
                      (t += this._cycle * (this._duration + this._repeatDelay)),
                  this.totalTime(t, e))
                : this._time;
            }),
            (r.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t), this._uncache(!0))
                : this._repeat;
            }),
            (r.repeatDelay = function (t) {
              return arguments.length
                ? ((this._repeatDelay = t), this._uncache(!0))
                : this._repeatDelay;
            }),
            (r.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (r.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.getLabelBefore(this._time + 1e-8);
            }),
            n
          );
        },
        !0
      ),
      (T = 180 / Math.PI),
      (x = []),
      (w = []),
      (S = []),
      (g = {}),
      (n = _gsScope._gsDefine.globals),
      (v = function (t, e, n, i) {
        (this.a = t),
          (this.b = e),
          (this.c = n),
          (this.d = i),
          (this.da = i - t),
          (this.ca = n - t),
          (this.ba = e - t);
      }),
      (y =
        ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
      (C = function (t, e, n, i) {
        var r = { a: t },
          o = {},
          a = {},
          s = { c: i },
          l = (t + e) / 2,
          u = (e + n) / 2,
          c = (n + i) / 2,
          f = (l + u) / 2,
          h = (u + c) / 2,
          d = (h - f) / 8;
        return (
          (r.b = l + (t - l) / 4),
          (o.b = f + d),
          (r.c = o.a = (r.b + o.b) / 2),
          (o.c = a.a = (f + h) / 2),
          (a.b = h - d),
          (s.b = c + (i - c) / 4),
          (a.c = s.a = (a.b + s.b) / 2),
          [r, o, a, s]
        );
      }),
      (b = function (t, e, n, i, r) {
        var o,
          a,
          s,
          l,
          u,
          c,
          f,
          h,
          d,
          p,
          m,
          _,
          g,
          v = t.length - 1,
          y = 0,
          b = t[0].a;
        for (o = 0; o < v; o++)
          (a = (u = t[y]).a),
            (s = u.d),
            (l = t[y + 1].d),
            r
              ? ((m = x[o]),
                (g = (0.25 * ((_ = w[o]) + m) * e) / (i ? 0.5 : S[o] || 0.5)),
                (h =
                  s -
                  ((c = s - (s - a) * (i ? 0.5 * e : 0 !== m ? g / m : 0)) +
                    ((((f = s + (l - s) * (i ? 0.5 * e : 0 !== _ ? g / _ : 0)) -
                      c) *
                      ((3 * m) / (m + _) + 0.5)) /
                      4 || 0))))
              : (h =
                  s -
                  ((c = s - 0.5 * (s - a) * e) + (f = s + 0.5 * (l - s) * e)) /
                    2),
            (c += h),
            (f += h),
            (u.c = d = c),
            (u.b = 0 !== o ? b : (b = u.a + 0.6 * (u.c - u.a))),
            (u.da = s - a),
            (u.ca = d - a),
            (u.ba = b - a),
            n
              ? ((p = C(a, b, d, s)),
                t.splice(y, 1, p[0], p[1], p[2], p[3]),
                (y += 4))
              : y++,
            (b = f);
        ((u = t[y]).b = b),
          (u.c = b + 0.4 * (u.d - b)),
          (u.da = u.d - u.a),
          (u.ca = u.c - u.a),
          (u.ba = b - u.a),
          n &&
            ((p = C(u.a, b, u.c, u.d)), t.splice(y, 1, p[0], p[1], p[2], p[3]));
      }),
      (k = function (t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u,
          c = [];
        if (i)
          for (o = (t = [i].concat(t)).length; -1 < --o; )
            "string" == typeof (u = t[o][e]) &&
              "=" === u.charAt(1) &&
              (t[o][e] = i[e] + Number(u.charAt(0) + u.substr(2)));
        if ((r = t.length - 2) < 0)
          return (c[0] = new v(t[0][e], 0, 0, t[r < -1 ? 0 : 1][e])), c;
        for (o = 0; o < r; o++)
          (a = t[o][e]),
            (s = t[o + 1][e]),
            (c[o] = new v(a, 0, 0, s)),
            n &&
              ((l = t[o + 2][e]),
              (x[o] = (x[o] || 0) + (s - a) * (s - a)),
              (w[o] = (w[o] || 0) + (l - s) * (l - s)));
        return (c[o] = new v(t[o][e], 0, 0, t[o + 1][e])), c;
      }),
      (d = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u,
          c,
          f,
          h,
          d,
          p = {},
          m = [],
          _ = o || t[0];
        for (s in ((r = "string" == typeof r ? "," + r + "," : y),
        null == e && (e = 1),
        t[0]))
          m.push(s);
        if (1 < t.length) {
          for (d = t[t.length - 1], h = !0, a = m.length; -1 < --a; )
            if (((s = m[a]), 0.05 < Math.abs(_[s] - d[s]))) {
              h = !1;
              break;
            }
          h &&
            ((t = t.concat()),
            o && t.unshift(o),
            t.push(t[1]),
            (o = t[t.length - 3]));
        }
        for (x.length = w.length = S.length = 0, a = m.length; -1 < --a; )
          (s = m[a]),
            (g[s] = -1 !== r.indexOf("," + s + ",")),
            (p[s] = k(t, s, g[s], o));
        for (a = x.length; -1 < --a; )
          (x[a] = Math.sqrt(x[a])), (w[a] = Math.sqrt(w[a]));
        if (!i) {
          for (a = m.length; -1 < --a; )
            if (g[s])
              for (f = (l = p[m[a]]).length - 1, u = 0; u < f; u++)
                (c = l[u + 1].da / w[u] + l[u].da / x[u]),
                  (S[u] = (S[u] || 0) + c * c);
          for (a = S.length; -1 < --a; ) S[a] = Math.sqrt(S[a]);
        }
        for (a = m.length, u = n ? 4 : 1; -1 < --a; )
          (l = p[(s = m[a])]),
            b(l, e, n, i, g[s]),
            h && (l.splice(0, u), l.splice(l.length - u, u));
        return p;
      }),
      (p = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          h,
          d,
          p = {},
          m = "cubic" === (e = e || "soft") ? 3 : 2,
          _ = "soft" === e,
          g = [];
        if ((_ && n && (t = [n].concat(t)), null == t || m + 1 > t.length))
          throw "invalid Bezier data";
        for (f in t[0]) g.push(f);
        for (l = g.length; -1 < --l; ) {
          for (p[(f = g[l])] = s = [], h = 0, c = t.length, u = 0; u < c; u++)
            (i =
              null == n
                ? t[u][f]
                : "string" == typeof (d = t[u][f]) && "=" === d.charAt(1)
                ? n[f] + Number(d.charAt(0) + d.substr(2))
                : Number(d)),
              _ && 1 < u && u < c - 1 && (s[h++] = (i + s[h - 2]) / 2),
              (s[h++] = i);
          for (c = h - m + 1, u = h = 0; u < c; u += m)
            (i = s[u]),
              (r = s[u + 1]),
              (o = s[u + 2]),
              (a = 2 === m ? 0 : s[u + 3]),
              (s[h++] = d =
                3 === m
                  ? new v(i, r, o, a)
                  : new v(i, (2 * r + i) / 3, (2 * r + o) / 3, o));
          s.length = h;
        }
        return p;
      }),
      (m = function (t, e, n) {
        for (
          var i, r, o, a, s, l, u, c, f, h, d, p = 1 / n, m = t.length;
          -1 < --m;

        )
          for (
            o = (h = t[m]).a,
              a = h.d - o,
              s = h.c - o,
              l = h.b - o,
              i = r = 0,
              c = 1;
            c <= n;
            c++
          )
            (i =
              r -
              (r =
                ((u = p * c) * u * a + 3 * (f = 1 - u) * (u * s + f * l)) * u)),
              (e[(d = m * n + c - 1)] = (e[d] || 0) + i * i);
      }),
      (_ = function (t, e) {
        var n,
          i,
          r,
          o,
          a = [],
          s = [],
          l = 0,
          u = 0,
          c = (e = e >> 0 || 6) - 1,
          f = [],
          h = [];
        for (n in t) m(t[n], a, e);
        for (r = a.length, i = 0; i < r; i++)
          (l += Math.sqrt(a[i])),
            (h[(o = i % e)] = l),
            o === c &&
              ((u += l),
              (f[(o = (i / e) >> 0)] = h),
              (s[o] = u),
              (l = 0),
              (h = []));
        return { length: u, lengths: s, segments: f };
      }),
      (A = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.4",
        API: 2,
        global: !0,
        init: function (t, e, n) {
          (this._target = t),
            e instanceof Array && (e = { values: e }),
            (this._func = {}),
            (this._round = {}),
            (this._props = []),
            (this._timeRes =
              null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
          var i,
            r,
            o,
            a,
            s,
            l = e.values || [],
            u = {},
            c = l[0],
            f = e.autoRotate || n.vars.orientToBezier;
          for (i in ((this._autoRotate = f
            ? f instanceof Array
              ? f
              : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]]
            : null),
          c))
            this._props.push(i);
          for (o = this._props.length; -1 < --o; )
            (i = this._props[o]),
              this._overwriteProps.push(i),
              (r = this._func[i] = "function" == typeof t[i]),
              (u[i] = r
                ? t[
                    i.indexOf("set") ||
                    "function" != typeof t["get" + i.substr(3)]
                      ? i
                      : "get" + i.substr(3)
                  ]()
                : parseFloat(t[i])),
              s || (u[i] !== l[0][i] && (s = u));
          if (
            ((this._beziers =
              "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                ? d(
                    l,
                    isNaN(e.curviness) ? 1 : e.curviness,
                    !1,
                    "thruBasic" === e.type,
                    e.correlate,
                    s
                  )
                : p(l, e.type, u)),
            (this._segCount = this._beziers[i].length),
            this._timeRes)
          ) {
            var h = _(this._beziers, this._timeRes);
            (this._length = h.length),
              (this._lengths = h.lengths),
              (this._segments = h.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length);
          }
          if ((f = this._autoRotate))
            for (
              this._initialRotations = [],
                f[0] instanceof Array || (this._autoRotate = f = [f]),
                o = f.length;
              -1 < --o;

            ) {
              for (a = 0; a < 3; a++)
                (i = f[o][a]),
                  (this._func[i] =
                    "function" == typeof t[i] &&
                    t[
                      i.indexOf("set") ||
                      "function" != typeof t["get" + i.substr(3)]
                        ? i
                        : "get" + i.substr(3)
                    ]);
              (i = f[o][2]),
                (this._initialRotations[o] = this._func[i]
                  ? this._func[i].call(this._target)
                  : this._target[i]);
            }
          return (this._startRatio = n.vars.runBackwards ? 1 : 0), !0;
        },
        set: function (t) {
          var e,
            n,
            i,
            r,
            o,
            a,
            s,
            l,
            u,
            c,
            f = this._segCount,
            h = this._func,
            d = this._target,
            p = t !== this._startRatio;
          if (this._timeRes) {
            if (
              ((u = this._lengths),
              (c = this._curSeg),
              (t *= this._length),
              (i = this._li),
              t > this._l2 && i < f - 1)
            ) {
              for (l = f - 1; i < l && t >= (this._l2 = u[++i]); );
              (this._l1 = u[i - 1]),
                (this._li = i),
                (this._curSeg = c = this._segments[i]),
                (this._s2 = c[(this._s1 = this._si = 0)]);
            } else if (this._l1 > t && 0 < i) {
              for (; 0 < i && (this._l1 = u[--i]) >= t; );
              0 === i && this._l1 > t ? (this._l1 = 0) : i++,
                (this._l2 = u[i]),
                (this._li = i),
                (this._curSeg = c = this._segments[i]),
                (this._s1 = c[(this._si = c.length - 1) - 1] || 0),
                (this._s2 = c[this._si]);
            }
            if (
              ((e = i),
              (t -= this._l1),
              (i = this._si),
              t > this._s2 && c.length - 1 > i)
            ) {
              for (l = c.length - 1; i < l && t >= (this._s2 = c[++i]); );
              (this._s1 = c[i - 1]), (this._si = i);
            } else if (this._s1 > t && 0 < i) {
              for (; 0 < i && (this._s1 = c[--i]) >= t; );
              0 === i && this._s1 > t ? (this._s1 = 0) : i++,
                (this._s2 = c[i]),
                (this._si = i);
            }
            a = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec;
          } else
            a =
              (t - (e = t < 0 ? 0 : 1 <= t ? f - 1 : (f * t) >> 0) * (1 / f)) *
              f;
          for (n = 1 - a, i = this._props.length; -1 < --i; )
            (r = this._props[i]),
              (s =
                (a * a * (o = this._beziers[r][e]).da +
                  3 * n * (a * o.ca + n * o.ba)) *
                  a +
                o.a),
              this._round[r] && (s = Math.round(s)),
              h[r] ? d[r](s) : (d[r] = s);
          if (this._autoRotate) {
            var m,
              _,
              g,
              v,
              y,
              b,
              x,
              w = this._autoRotate;
            for (i = w.length; -1 < --i; )
              (r = w[i][2]),
                (b = w[i][3] || 0),
                (x = !0 === w[i][4] ? 1 : T),
                (o = this._beziers[w[i][0]]),
                (m = this._beziers[w[i][1]]),
                o &&
                  m &&
                  ((o = o[e]),
                  (m = m[e]),
                  (_ = o.a + (o.b - o.a) * a),
                  (_ += ((v = o.b + (o.c - o.b) * a) - _) * a),
                  (v += (o.c + (o.d - o.c) * a - v) * a),
                  (g = m.a + (m.b - m.a) * a),
                  (g += ((y = m.b + (m.c - m.b) * a) - g) * a),
                  (y += (m.c + (m.d - m.c) * a - y) * a),
                  (s = p
                    ? Math.atan2(y - g, v - _) * x + b
                    : this._initialRotations[i]),
                  h[r] ? d[r](s) : (d[r] = s));
          }
        },
      })),
      (e = A.prototype),
      (A.bezierThrough = d),
      (A.cubicToQuadratic = C),
      (A._autoCSS = !0),
      (A.quadraticToCubic = function (t, e, n) {
        return new v(t, (2 * e + t) / 3, (2 * e + n) / 3, n);
      }),
      (A._cssRegister = function () {
        var t = n.CSSPlugin;
        if (t) {
          var e = t._internals,
            d = e._parseToProxy,
            p = e._setPluginRatio,
            m = e.CSSPropTween;
          e._registerComplexSpecialProp("bezier", {
            parser: function (t, e, n, i, r, o) {
              e instanceof Array && (e = { values: e }), (o = new A());
              var a,
                s,
                l,
                u = e.values,
                c = u.length - 1,
                f = [],
                h = {};
              if (c < 0) return r;
              for (a = 0; a <= c; a++)
                (l = d(t, u[a], i, r, o, c !== a)), (f[a] = l.end);
              for (s in e) h[s] = e[s];
              return (
                (h.values = f),
                ((r = new m(t, "bezier", 0, 0, l.pt, 2)).data = l),
                (r.plugin = o),
                (r.setRatio = p),
                0 === h.autoRotate && (h.autoRotate = !0),
                !h.autoRotate ||
                  h.autoRotate instanceof Array ||
                  ((a = !0 === h.autoRotate ? 0 : Number(h.autoRotate)),
                  (h.autoRotate =
                    null != l.end.left
                      ? [["left", "top", "rotation", a, !1]]
                      : null != l.end.x && [["x", "y", "rotation", a, !1]])),
                h.autoRotate &&
                  (i._transform || i._enableTransforms(!1),
                  (l.autoRotate = i._target._gsTransform)),
                o._onInitTween(l.proxy, h, i._tween),
                r
              );
            },
          });
        }
      }),
      (e._roundProps = function (t, e) {
        for (var n = this._overwriteProps, i = n.length; -1 < --i; )
          (t[n[i]] || t.bezier || t.bezierThrough) && (this._round[n[i]] = e);
      }),
      (e._kill = function (t) {
        var e,
          n,
          i = this._props;
        for (e in this._beziers)
          if (e in t)
            for (
              delete this._beziers[e], delete this._func[e], n = i.length;
              -1 < --n;

            )
              i[n] === e && i.splice(n, 1);
        return this._super._kill.call(this, t);
      }),
      _gsScope._gsDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "TweenLite"],
        function (o, q) {
          var p,
            T,
            W,
            d,
            X = function () {
              o.call(this, "css"),
                (this._overwriteProps.length = 0),
                (this.setRatio = X.prototype.setRatio);
            },
            u = _gsScope._gsDefine.globals,
            m = {},
            t = (X.prototype = new o("css"));
          ((t.constructor = X).version = "1.17.0"),
            (X.API = 2),
            (X.defaultTransformPerspective = 0),
            (X.defaultSkewType = "compensated"),
            (X.defaultSmoothOrigin = !0),
            (t = "px"),
            (X.suffixMap = {
              top: t,
              right: t,
              bottom: t,
              left: t,
              width: t,
              height: t,
              fontSize: t,
              padding: t,
              margin: t,
              perspective: t,
              lineHeight: "",
            });
          var k,
            _,
            g,
            F,
            v,
            C,
            e,
            n,
            A = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            P = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            O = /(?:\d|\-|\+|=|#|\.)*/g,
            j = /opacity *= *([^)]*)/i,
            b = /opacity:([^;]*)/i,
            a = /alpha\(opacity *=.+?\)/i,
            E = /^(rgb|hsl)/,
            s = /([A-Z])/g,
            l = /-([a-z])/gi,
            x = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            f = function (t, e) {
              return e.toUpperCase();
            },
            h = /(?:Left|Right|Width)/i,
            w = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            D = /,(?=[^\)]*(?:\(|$))/gi,
            B = Math.PI / 180,
            U = 180 / Math.PI,
            S = {},
            N = document,
            i = function (t) {
              return N.createElementNS
                ? N.createElementNS("http://www.w3.org/1999/xhtml", t)
                : N.createElement(t);
            },
            M = i("div"),
            L = i("img"),
            r = (X._internals = { _specialProps: m }),
            I = navigator.userAgent,
            z =
              ((e = I.indexOf("Android")),
              (n = i("a")),
              (g =
                -1 !== I.indexOf("Safari") &&
                -1 === I.indexOf("Chrome") &&
                (-1 === e || 3 < Number(I.substr(e + 8, 1)))),
              (v = g && Number(I.substr(I.indexOf("Version/") + 8, 1)) < 6),
              (F = -1 !== I.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(I)) &&
                (C = parseFloat(RegExp.$1)),
              !!n &&
                ((n.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(n.style.opacity))),
            H = function (t) {
              return j.test(
                "string" == typeof t
                  ? t
                  : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                      ""
              )
                ? parseFloat(RegExp.$1) / 100
                : 1;
            },
            $ = function (t) {
              window.console && console.log(t);
            },
            V = "",
            Y = "",
            Q = function (t, e) {
              var n,
                i,
                r = (e = e || M).style;
              if (void 0 !== r[t]) return t;
              for (
                t = t.charAt(0).toUpperCase() + t.substr(1),
                  n = ["O", "Moz", "ms", "Ms", "Webkit"],
                  i = 5;
                -1 < --i && void 0 === r[n[i] + t];

              );
              return 0 <= i
                ? ((Y = 3 === i ? "ms" : n[i]),
                  (V = "-" + Y.toLowerCase() + "-"),
                  Y + t)
                : null;
            },
            Z = N.defaultView ? N.defaultView.getComputedStyle : function () {},
            G = (X.getStyle = function (t, e, n, i, r) {
              var o;
              return z || "opacity" !== e
                ? (!i && t.style[e]
                    ? (o = t.style[e])
                    : (n = n || Z(t))
                    ? (o =
                        n[e] ||
                        n.getPropertyValue(e) ||
                        n.getPropertyValue(e.replace(s, "-$1").toLowerCase()))
                    : t.currentStyle && (o = t.currentStyle[e]),
                  null == r ||
                  (o && "none" !== o && "auto" !== o && "auto auto" !== o)
                    ? o
                    : r)
                : H(t);
            }),
            K = (r.convertToPixels = function (t, e, n, i, r) {
              if ("px" === i || !i) return n;
              if ("auto" === i || !n) return 0;
              var o,
                a,
                s,
                l = h.test(e),
                u = t,
                c = M.style,
                f = n < 0;
              if ((f && (n = -n), "%" === i && -1 !== e.indexOf("border")))
                o = (n / 100) * (l ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((c.cssText =
                    "border:0 solid red;position:" +
                    G(t, "position") +
                    ";line-height:0;"),
                  "%" !== i && u.appendChild)
                )
                  c[l ? "borderLeftWidth" : "borderTopWidth"] = n + i;
                else {
                  if (
                    ((a = (u = t.parentNode || N.body)._gsCache),
                    (s = q.ticker.frame),
                    a && l && a.time === s)
                  )
                    return (a.width * n) / 100;
                  c[l ? "width" : "height"] = n + i;
                }
                u.appendChild(M),
                  (o = parseFloat(M[l ? "offsetWidth" : "offsetHeight"])),
                  u.removeChild(M),
                  l &&
                    "%" === i &&
                    !1 !== X.cacheWidths &&
                    (((a = u._gsCache = u._gsCache || {}).time = s),
                    (a.width = (o / n) * 100)),
                  0 !== o || r || (o = K(t, e, n, i, !0));
              }
              return f ? -o : o;
            }),
            J = (r.calculateOffset = function (t, e, n) {
              if ("absolute" !== G(t, "position", n)) return 0;
              var i = "left" === e ? "Left" : "Top",
                r = G(t, "margin" + i, n);
              return (
                t["offset" + i] -
                (K(t, e, parseFloat(r), r.replace(O, "")) || 0)
              );
            }),
            tt = function (t, e) {
              var n,
                i,
                r,
                o = {};
              if ((e = e || Z(t, null)))
                if ((n = e.length))
                  for (; -1 < --n; )
                    (-1 === (r = e[n]).indexOf("-transform") || jt === r) &&
                      (o[r.replace(l, f)] = e.getPropertyValue(r));
                else
                  for (n in e)
                    (-1 === n.indexOf("Transform") || Ot === n) &&
                      (o[n] = e[n]);
              else if ((e = t.currentStyle || t.style))
                for (n in e)
                  "string" == typeof n &&
                    void 0 === o[n] &&
                    (o[n.replace(l, f)] = e[n]);
              return (
                z || (o.opacity = H(t)),
                (i = qt(t, e, !1)),
                (o.rotation = i.rotation),
                (o.skewX = i.skewX),
                (o.scaleX = i.scaleX),
                (o.scaleY = i.scaleY),
                (o.x = i.x),
                (o.y = i.y),
                Rt &&
                  ((o.z = i.z),
                  (o.rotationX = i.rotationX),
                  (o.rotationY = i.rotationY),
                  (o.scaleZ = i.scaleZ)),
                o.filters && delete o.filters,
                o
              );
            },
            et = function (t, e, n, i, r) {
              var o,
                a,
                s,
                l = {},
                u = t.style;
              for (a in n)
                "cssText" !== a &&
                  "length" !== a &&
                  isNaN(a) &&
                  (e[a] !== (o = n[a]) || (r && r[a])) &&
                  -1 === a.indexOf("Origin") &&
                  ("number" == typeof o || "string" == typeof o) &&
                  ((l[a] =
                    "auto" !== o || ("left" !== a && "top" !== a)
                      ? ("" !== o && "auto" !== o && "none" !== o) ||
                        "string" != typeof e[a] ||
                        "" === e[a].replace(c, "")
                        ? o
                        : 0
                      : J(t, a)),
                  void 0 !== u[a] && (s = new mt(u, a, u[a], s)));
              if (i) for (a in i) "className" !== a && (l[a] = i[a]);
              return { difs: l, firstMPT: s };
            },
            nt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            it = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            rt = function (t, e, n) {
              var i = parseFloat(
                  "width" === e ? t.offsetWidth : t.offsetHeight
                ),
                r = nt[e],
                o = r.length;
              for (n = n || Z(t, null); -1 < --o; )
                (i -= parseFloat(G(t, "padding" + r[o], n, !0)) || 0),
                  (i -=
                    parseFloat(G(t, "border" + r[o] + "Width", n, !0)) || 0);
              return i;
            },
            ot = function (t, e) {
              (null == t || "" === t || "auto" === t || "auto auto" === t) &&
                (t = "0 0");
              var n = t.split(" "),
                i =
                  -1 !== t.indexOf("left")
                    ? "0%"
                    : -1 !== t.indexOf("right")
                    ? "100%"
                    : n[0],
                r =
                  -1 !== t.indexOf("top")
                    ? "0%"
                    : -1 !== t.indexOf("bottom")
                    ? "100%"
                    : n[1];
              return (
                null == r
                  ? (r = "center" === i ? "50%" : "0")
                  : "center" === r && (r = "50%"),
                ("center" === i ||
                  (isNaN(parseFloat(i)) && -1 === (i + "").indexOf("="))) &&
                  (i = "50%"),
                (t = i + " " + r + (2 < n.length ? " " + n[2] : "")),
                e &&
                  ((e.oxp = -1 !== i.indexOf("%")),
                  (e.oyp = -1 !== r.indexOf("%")),
                  (e.oxr = "=" === i.charAt(1)),
                  (e.oyr = "=" === r.charAt(1)),
                  (e.ox = parseFloat(i.replace(c, ""))),
                  (e.oy = parseFloat(r.replace(c, ""))),
                  (e.v = t)),
                e || t
              );
            },
            at = function (t, e) {
              return "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e);
            },
            st = function (t, e) {
              return null == t
                ? e
                : "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t);
            },
            lt = function (t, e, n, i) {
              var r,
                o,
                a,
                s,
                l,
                u = 1e-6;
              return (
                null == t
                  ? (s = e)
                  : "number" == typeof t
                  ? (s = t)
                  : ((r = 360),
                    (o = t.split("_")),
                    (a =
                      ((l = "=" === t.charAt(1))
                        ? parseInt(t.charAt(0) + "1", 10) *
                          parseFloat(o[0].substr(2))
                        : parseFloat(o[0])) *
                        (-1 === t.indexOf("rad") ? 1 : U) -
                      (l ? 0 : e)),
                    o.length &&
                      (i && (i[n] = e + a),
                      -1 !== t.indexOf("short") &&
                        (a %= r) !== a % (r / 2) &&
                        (a = a < 0 ? a + r : a - r),
                      -1 !== t.indexOf("_cw") && a < 0
                        ? (a = ((a + 9999999999 * r) % r) - (0 | (a / r)) * r)
                        : -1 !== t.indexOf("ccw") &&
                          0 < a &&
                          (a = ((a - 9999999999 * r) % r) - (0 | (a / r)) * r)),
                    (s = e + a)),
                s < u && -u < s && (s = 0),
                s
              );
            },
            ut = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              fuchsia: [255, 0, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0],
            },
            ct = function (t, e, n) {
              return (
                0 |
                (255 *
                  (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
                    ? e + 6 * (n - e) * t
                    : t < 0.5
                    ? n
                    : 3 * t < 2
                    ? e + 6 * (n - e) * (2 / 3 - t)
                    : e) +
                  0.5)
              );
            },
            ft = (X.parseColor = function (t) {
              var e, n, i, r, o, a;
              return t && "" !== t
                ? "number" == typeof t
                  ? [t >> 16, 255 & (t >> 8), 255 & t]
                  : ("," === t.charAt(t.length - 1) &&
                      (t = t.substr(0, t.length - 1)),
                    ut[t]
                      ? ut[t]
                      : "#" === t.charAt(0)
                      ? (4 === t.length &&
                          (t =
                            "#" +
                            (e = t.charAt(1)) +
                            e +
                            (n = t.charAt(2)) +
                            n +
                            (i = t.charAt(3)) +
                            i),
                        [
                          (t = parseInt(t.substr(1), 16)) >> 16,
                          255 & (t >> 8),
                          255 & t,
                        ])
                      : ("hsl" === t.substr(0, 3)
                          ? ((t = t.match(A)),
                            (r = (Number(t[0]) % 360) / 360),
                            (o = Number(t[1]) / 100),
                            (e =
                              2 * (a = Number(t[2]) / 100) -
                              (n = a <= 0.5 ? a * (o + 1) : a + o - a * o)),
                            3 < t.length && (t[3] = Number(t[3])),
                            (t[0] = ct(r + 1 / 3, e, n)),
                            (t[1] = ct(r, e, n)),
                            (t[2] = ct(r - 1 / 3, e, n)))
                          : (((t = t.match(A) || ut.transparent)[0] = Number(
                              t[0]
                            )),
                            (t[1] = Number(t[1])),
                            (t[2] = Number(t[2])),
                            3 < t.length && (t[3] = Number(t[3]))),
                        t))
                : ut.black;
            }),
            ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
          for (t in ut) ht += "|" + t + "\\b";
          ht = RegExp(ht + ")", "gi");
          var dt = function (t, e, o, a) {
              if (null == t)
                return function (t) {
                  return t;
                };
              var s,
                l = e ? (t.match(ht) || [""])[0] : "",
                u = t.split(l).join("").match(y) || [],
                c = t.substr(0, t.indexOf(u[0])),
                f = ")" === t.charAt(t.length - 1) ? ")" : "",
                h = -1 !== t.indexOf(" ") ? " " : ",",
                d = u.length,
                p = 0 < d ? u[0].replace(A, "") : "";
              return d
                ? (s = e
                    ? function (t) {
                        var e, n, i, r;
                        if ("number" == typeof t) t += p;
                        else if (a && D.test(t)) {
                          for (
                            r = t.replace(D, "|").split("|"), i = 0;
                            r.length > i;
                            i++
                          )
                            r[i] = s(r[i]);
                          return r.join(",");
                        }
                        if (
                          ((e = (t.match(ht) || [l])[0]),
                          (i = (n = t.split(e).join("").match(y) || []).length),
                          d > i--)
                        )
                          for (; d > ++i; )
                            n[i] = o ? n[0 | ((i - 1) / 2)] : u[i];
                        return (
                          c +
                          n.join(h) +
                          h +
                          e +
                          f +
                          (-1 !== t.indexOf("inset") ? " inset" : "")
                        );
                      }
                    : function (t) {
                        var e, n, i;
                        if ("number" == typeof t) t += p;
                        else if (a && D.test(t)) {
                          for (
                            n = t.replace(D, "|").split("|"), i = 0;
                            n.length > i;
                            i++
                          )
                            n[i] = s(n[i]);
                          return n.join(",");
                        }
                        if (((i = (e = t.match(y) || []).length), d > i--))
                          for (; d > ++i; )
                            e[i] = o ? e[0 | ((i - 1) / 2)] : u[i];
                        return c + e.join(h) + f;
                      })
                : function (t) {
                    return t;
                  };
            },
            pt = function (u) {
              return (
                (u = u.split(",")),
                function (t, e, n, i, r, o, a) {
                  var s,
                    l = (e + "").split(" ");
                  for (a = {}, s = 0; s < 4; s++)
                    a[u[s]] = l[s] = l[s] || l[((s - 1) / 2) >> 0];
                  return i.parse(t, a, r, o);
                }
              );
            },
            mt =
              ((r._setPluginRatio = function (t) {
                this.plugin.setRatio(t);
                for (
                  var e,
                    n,
                    i,
                    r,
                    o = this.data,
                    a = o.proxy,
                    s = o.firstMPT,
                    l = 1e-6;
                  s;

                )
                  (e = a[s.v]),
                    s.r ? (e = Math.round(e)) : e < l && -l < e && (e = 0),
                    (s.t[s.p] = e),
                    (s = s._next);
                if (
                  (o.autoRotate && (o.autoRotate.rotation = a.rotation),
                  1 === t)
                )
                  for (s = o.firstMPT; s; ) {
                    if ((n = s.t).type) {
                      if (1 === n.type) {
                        for (r = n.xs0 + n.s + n.xs1, i = 1; n.l > i; i++)
                          r += n["xn" + i] + n["xs" + (i + 1)];
                        n.e = r;
                      }
                    } else n.e = n.s + n.xs0;
                    s = s._next;
                  }
              }),
              function (t, e, n, i, r) {
                (this.t = t),
                  (this.p = e),
                  (this.v = n),
                  (this.r = r),
                  i && ((i._prev = this)._next = i);
              }),
            _t =
              ((r._parseToProxy = function (t, e, n, i, r, o) {
                var a,
                  s,
                  l,
                  u,
                  c,
                  f = i,
                  h = {},
                  d = {},
                  p = n._transform,
                  m = S;
                for (
                  n._transform = null,
                    S = e,
                    i = c = n.parse(t, e, i, r),
                    S = m,
                    o &&
                      ((n._transform = p),
                      f &&
                        ((f._prev = null), f._prev && (f._prev._next = null)));
                  i && i !== f;

                ) {
                  if (
                    i.type <= 1 &&
                    ((d[(s = i.p)] = i.s + i.c),
                    (h[s] = i.s),
                    o || ((u = new mt(i, "s", s, u, i.r)), (i.c = 0)),
                    1 === i.type)
                  )
                    for (a = i.l; 0 < --a; )
                      (l = "xn" + a),
                        (d[(s = i.p + "_" + l)] = i.data[l]),
                        (h[s] = i[l]),
                        o || (u = new mt(i, l, s, u, i.rxp[l]));
                  i = i._next;
                }
                return { proxy: h, end: d, firstMPT: u, pt: c };
              }),
              (r.CSSPropTween = function (t, e, n, i, r, o, a, s, l, u, c) {
                (this.t = t),
                  (this.p = e),
                  (this.s = n),
                  (this.c = i),
                  (this.n = a || e),
                  t instanceof _t || d.push(this.n),
                  (this.r = s),
                  (this.type = o || 0),
                  l && ((this.pr = l), (p = !0)),
                  (this.b = void 0 === u ? n : u),
                  (this.e = void 0 === c ? n + i : c),
                  r && ((this._next = r)._prev = this);
              })),
            gt = function (t, e, n, i, r, o) {
              var a = new _t(t, e, n, i - n, r, -1, o);
              return (a.b = n), (a.e = a.xs0 = i), a;
            },
            vt = (X.parseComplex = function (t, e, n, i, r, o, a, s, l, u) {
              (a = new _t(
                t,
                e,
                0,
                0,
                a,
                u ? 2 : 1,
                null,
                !1,
                s,
                (n = n || o || ""),
                i
              )),
                (i += "");
              var c,
                f,
                h,
                d,
                p,
                m,
                _,
                g,
                v,
                y,
                b,
                x,
                w = n.split(", ").join(",").split(" "),
                T = i.split(", ").join(",").split(" "),
                S = w.length,
                C = !1 !== k;
              for (
                (-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) &&
                  ((w = w.join(" ").replace(D, ", ").split(" ")),
                  (T = T.join(" ").replace(D, ", ").split(" ")),
                  (S = w.length)),
                  S !== T.length && (S = (w = (o || "").split(" ")).length),
                  a.plugin = l,
                  a.setRatio = u,
                  c = 0;
                c < S;
                c++
              )
                if (((d = w[c]), (p = T[c]), (g = parseFloat(d)) || 0 === g))
                  a.appendXtra(
                    "",
                    g,
                    at(p, g),
                    p.replace(P, ""),
                    C && -1 !== p.indexOf("px"),
                    !0
                  );
                else if (r && ("#" === d.charAt(0) || ut[d] || E.test(d)))
                  (x = "," === p.charAt(p.length - 1) ? ")," : ")"),
                    (d = ft(d)),
                    (p = ft(p)),
                    (v = 6 < d.length + p.length) && !z && 0 === p[3]
                      ? ((a["xs" + a.l] += a.l
                          ? " transparent"
                          : "transparent"),
                        (a.e = a.e.split(T[c]).join("transparent")))
                      : (z || (v = !1),
                        a
                          .appendXtra(
                            v ? "rgba(" : "rgb(",
                            d[0],
                            p[0] - d[0],
                            ",",
                            !0,
                            !0
                          )
                          .appendXtra("", d[1], p[1] - d[1], ",", !0)
                          .appendXtra("", d[2], p[2] - d[2], v ? "," : x, !0),
                        v &&
                          ((d = d.length < 4 ? 1 : d[3]),
                          a.appendXtra(
                            "",
                            d,
                            (p.length < 4 ? 1 : p[3]) - d,
                            x,
                            !1
                          )));
                else if ((m = d.match(A))) {
                  if (!(_ = p.match(P)) || _.length !== m.length) return a;
                  for (f = h = 0; m.length > f; f++)
                    (b = m[f]),
                      (y = d.indexOf(b, h)),
                      a.appendXtra(
                        d.substr(h, y - h),
                        Number(b),
                        at(_[f], b),
                        "",
                        C && "px" === d.substr(y + b.length, 2),
                        0 === f
                      ),
                      (h = y + b.length);
                  a["xs" + a.l] += d.substr(h);
                } else a["xs" + a.l] += a.l ? " " + d : d;
              if (-1 !== i.indexOf("=") && a.data) {
                for (x = a.xs0 + a.data.s, c = 1; a.l > c; c++)
                  x += a["xs" + c] + a.data["xn" + c];
                a.e = x + a["xs" + c];
              }
              return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
            }),
            yt = 9;
          for ((t = _t.prototype).l = t.pr = 0; 0 < --yt; )
            (t["xn" + yt] = 0), (t["xs" + yt] = "");
          (t.xs0 = ""),
            (t._next =
              t._prev =
              t.xfirst =
              t.data =
              t.plugin =
              t.setRatio =
              t.rxp =
                null),
            (t.appendXtra = function (t, e, n, i, r, o) {
              var a = this,
                s = a.l;
              return (
                (a["xs" + s] += o && s ? " " + t : t || ""),
                n || 0 === s || a.plugin
                  ? (a.l++,
                    (a.type = a.setRatio ? 2 : 1),
                    (a["xs" + a.l] = i || ""),
                    0 < s
                      ? ((a.data["xn" + s] = e + n),
                        (a.rxp["xn" + s] = r),
                        (a["xn" + s] = e),
                        a.plugin ||
                          ((a.xfirst = new _t(
                            a,
                            "xn" + s,
                            e,
                            n,
                            a.xfirst || a,
                            0,
                            a.n,
                            r,
                            a.pr
                          )),
                          (a.xfirst.xs0 = 0)))
                      : ((a.data = { s: e + n }),
                        (a.rxp = {}),
                        (a.s = e),
                        (a.c = n),
                        (a.r = r)))
                  : (a["xs" + s] += e + (i || "")),
                a
              );
            });
          var bt = function (t, e) {
              (e = e || {}),
                (this.p = (e.prefix && Q(t)) || t),
                (m[t] = m[this.p] = this),
                (this.format =
                  e.formatter ||
                  dt(e.defaultValue, e.color, e.collapsible, e.multi)),
                e.parser && (this.parse = e.parser),
                (this.clrs = e.color),
                (this.multi = e.multi),
                (this.keyword = e.keyword),
                (this.dflt = e.defaultValue),
                (this.pr = e.priority || 0);
            },
            xt = (r._registerComplexSpecialProp = function (t, e, n) {
              "object" != typeof e && (e = { parser: n });
              var i,
                r = t.split(","),
                o = e.defaultValue;
              for (n = n || [o], i = 0; r.length > i; i++)
                (e.prefix = 0 === i && e.prefix),
                  (e.defaultValue = n[i] || o),
                  new bt(r[i], e);
            }),
            wt = function (t) {
              if (!m[t]) {
                var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                xt(t, {
                  parser: function (t, e, n, i, r, o, a) {
                    var s = u.com.greensock.plugins[l];
                    return s
                      ? (s._cssRegister(), m[n].parse(t, e, n, i, r, o, a))
                      : ($("Error: " + l + " js file not loaded."), r);
                  },
                });
              }
            };
          ((t = bt.prototype).parseComplex = function (t, e, n, i, r, o) {
            var a,
              s,
              l,
              u,
              c,
              f,
              h = this.keyword;
            if (
              (this.multi &&
                (D.test(n) || D.test(e)
                  ? ((s = e.replace(D, "|").split("|")),
                    (l = n.replace(D, "|").split("|")))
                  : h && ((s = [e]), (l = [n]))),
              l)
            ) {
              for (
                u = l.length > s.length ? l.length : s.length, a = 0;
                a < u;
                a++
              )
                (e = s[a] = s[a] || this.dflt),
                  (n = l[a] = l[a] || this.dflt),
                  h &&
                    (c = e.indexOf(h)) !== (f = n.indexOf(h)) &&
                    (-1 === f
                      ? (s[a] = s[a].split(h).join(""))
                      : -1 === c && (s[a] += " " + h));
              (e = s.join(", ")), (n = l.join(", "));
            }
            return vt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o);
          }),
            (t.parse = function (t, e, n, i, r, o) {
              return this.parseComplex(
                t.style,
                this.format(G(t, this.p, W, !1, this.dflt)),
                this.format(e),
                r,
                o
              );
            }),
            (X.registerSpecialProp = function (t, s, l) {
              xt(t, {
                parser: function (t, e, n, i, r, o) {
                  var a = new _t(t, n, 0, 0, r, 2, n, !1, l);
                  return (a.plugin = o), (a.setRatio = s(t, e, i._tween, n)), a;
                },
                priority: l,
              });
            }),
            (X.useSVGTransformAttr = g || F);
          var Tt,
            St,
            Ct,
            kt,
            At,
            Pt =
              "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
                ","
              ),
            Ot = Q("transform"),
            jt = V + "transform",
            Et = Q("transformOrigin"),
            Rt = null !== Q("perspective"),
            Dt = (r.Transform = function () {
              (this.perspective =
                parseFloat(X.defaultTransformPerspective) || 0),
                (this.force3D =
                  !(!1 === X.defaultForce3D || !Rt) &&
                  (X.defaultForce3D || "auto"));
            }),
            Nt = window.SVGElement,
            Mt = function (t, e, n) {
              var i,
                r = N.createElementNS("http://www.w3.org/2000/svg", t),
                o = /([a-z])([A-Z])/g;
              for (i in n)
                r.setAttributeNS(
                  null,
                  i.replace(o, "$1-$2").toLowerCase(),
                  n[i]
                );
              return e.appendChild(r), r;
            },
            Lt = N.documentElement,
            It =
              ((At = C || (/Android/i.test(I) && !window.chrome)),
              N.createElementNS &&
                !At &&
                ((St = Mt("svg", Lt)),
                (kt = (Ct = Mt("rect", St, {
                  width: 100,
                  height: 50,
                  x: 100,
                })).getBoundingClientRect().width),
                (Ct.style[Et] = "50% 50%"),
                (Ct.style[Ot] = "scaleX(0.5)"),
                (At = kt === Ct.getBoundingClientRect().width && !(F && Rt)),
                Lt.removeChild(St)),
              At),
            Ft = function (t, e, n, i, r) {
              var o,
                a,
                s,
                l,
                u,
                c,
                f,
                h,
                d,
                p,
                m,
                _,
                g,
                v,
                y = t._gsTransform,
                b = Ht(t, !0);
              y && ((g = y.xOrigin), (v = y.yOrigin)),
                (!i || (o = i.split(" ")).length < 2) &&
                  ((f = t.getBBox()),
                  (o = [
                    (-1 !== (e = ot(e).split(" "))[0].indexOf("%")
                      ? (parseFloat(e[0]) / 100) * f.width
                      : parseFloat(e[0])) + f.x,
                    (-1 !== e[1].indexOf("%")
                      ? (parseFloat(e[1]) / 100) * f.height
                      : parseFloat(e[1])) + f.y,
                  ])),
                (n.xOrigin = l = parseFloat(o[0])),
                (n.yOrigin = u = parseFloat(o[1])),
                i &&
                  b !== zt &&
                  ((c = b[0]),
                  (f = b[1]),
                  (h = b[2]),
                  (d = b[3]),
                  (p = b[4]),
                  (a =
                    l * (d / (_ = c * d - f * h)) +
                    u * (-h / _) +
                    (h * (m = b[5]) - d * p) / _),
                  (s = l * (-f / _) + u * (c / _) - (c * m - f * p) / _),
                  (l = n.xOrigin = o[0] = a),
                  (u = n.yOrigin = o[1] = s)),
                y &&
                  (r || (!1 !== r && !1 !== X.defaultSmoothOrigin)
                    ? ((a = l - g),
                      (s = u - v),
                      (y.xOffset += a * b[0] + s * b[2] - a),
                      (y.yOffset += a * b[1] + s * b[3] - s))
                    : (y.xOffset = y.yOffset = 0)),
                t.setAttribute("data-svg-origin", o.join(" "));
            },
            Bt = function (t) {
              return !!(
                Nt &&
                "function" == typeof t.getBBox &&
                t.getCTM &&
                (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM))
              );
            },
            zt = [1, 0, 0, 1, 0, 0],
            Ht = function (t, e) {
              var n,
                i,
                r,
                o,
                a,
                s = t._gsTransform || new Dt(),
                l = 1e5;
              if (
                (Ot
                  ? (i = G(t, jt, null, !0))
                  : t.currentStyle &&
                    (i =
                      (i = t.currentStyle.filter.match(w)) && 4 === i.length
                        ? [
                            i[0].substr(4),
                            Number(i[2].substr(4)),
                            Number(i[1].substr(4)),
                            i[3].substr(4),
                            s.x || 0,
                            s.y || 0,
                          ].join(",")
                        : ""),
                (n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i),
                (s.svg || (t.getBBox && Bt(t))) &&
                  (n &&
                    -1 !== (t.style[Ot] + "").indexOf("matrix") &&
                    ((i = t.style[Ot]), (n = 0)),
                  (r = t.getAttribute("transform")),
                  n &&
                    r &&
                    (-1 !== r.indexOf("matrix")
                      ? ((i = r), (n = 0))
                      : -1 !== r.indexOf("translate") &&
                        ((i =
                          "matrix(1,0,0,1," +
                          r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                          ")"),
                        (n = 0)))),
                n)
              )
                return zt;
              for (
                r = (i || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                  yt = r.length;
                -1 < --yt;

              )
                (o = Number(r[yt])),
                  (r[yt] = (a = o - (o |= 0))
                    ? (0 | (a * l + (a < 0 ? -0.5 : 0.5))) / l + o
                    : o);
              return e && 6 < r.length
                ? [r[0], r[1], r[4], r[5], r[12], r[13]]
                : r;
            },
            qt = (r.getTransform = function (t, e, n, i) {
              if (t._gsTransform && n && !i) return t._gsTransform;
              var r,
                o,
                a,
                s,
                l,
                u,
                c = (n && t._gsTransform) || new Dt(),
                f = c.scaleX < 0,
                h = 2e-5,
                d = 1e5,
                p =
                  (Rt &&
                    (parseFloat(G(t, Et, e, !1, "0 0 0").split(" ")[2]) ||
                      c.zOrigin)) ||
                  0,
                m = parseFloat(X.defaultTransformPerspective) || 0;
              if (
                ((c.svg = !(!t.getBBox || !Bt(t))),
                c.svg &&
                  (Ft(
                    t,
                    G(t, Et, W, !1, "50% 50%") + "",
                    c,
                    t.getAttribute("data-svg-origin")
                  ),
                  (Tt = X.useSVGTransformAttr || It)),
                (r = Ht(t)) !== zt)
              ) {
                if (16 === r.length) {
                  var _,
                    g,
                    v,
                    y,
                    b,
                    x = r[0],
                    w = r[1],
                    T = r[2],
                    S = r[3],
                    C = r[4],
                    k = r[5],
                    A = r[6],
                    P = r[7],
                    O = r[8],
                    j = r[9],
                    E = r[10],
                    R = r[12],
                    D = r[13],
                    N = r[14],
                    M = r[11],
                    L = Math.atan2(A, E);
                  c.zOrigin &&
                    ((R = O * (N = -c.zOrigin) - r[12]),
                    (D = j * N - r[13]),
                    (N = E * N + c.zOrigin - r[14])),
                    (c.rotationX = L * U),
                    L &&
                      ((_ = C * (y = Math.cos(-L)) + O * (b = Math.sin(-L))),
                      (g = k * y + j * b),
                      (v = A * y + E * b),
                      (O = C * -b + O * y),
                      (j = k * -b + j * y),
                      (E = A * -b + E * y),
                      (M = P * -b + M * y),
                      (C = _),
                      (k = g),
                      (A = v)),
                    (L = Math.atan2(O, E)),
                    (c.rotationY = L * U),
                    L &&
                      ((g = w * (y = Math.cos(-L)) - j * (b = Math.sin(-L))),
                      (v = T * y - E * b),
                      (j = w * b + j * y),
                      (E = T * b + E * y),
                      (M = S * b + M * y),
                      (x = _ = x * y - O * b),
                      (w = g),
                      (T = v)),
                    (L = Math.atan2(w, x)),
                    (c.rotation = L * U),
                    L &&
                      ((x = x * (y = Math.cos(-L)) + C * (b = Math.sin(-L))),
                      (g = w * y + k * b),
                      (k = w * -b + k * y),
                      (A = T * -b + A * y),
                      (w = g)),
                    c.rotationX &&
                      359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) &&
                      ((c.rotationX = c.rotation = 0), (c.rotationY += 180)),
                    (c.scaleX = (0 | (Math.sqrt(x * x + w * w) * d + 0.5)) / d),
                    (c.scaleY = (0 | (Math.sqrt(k * k + j * j) * d + 0.5)) / d),
                    (c.scaleZ = (0 | (Math.sqrt(A * A + E * E) * d + 0.5)) / d),
                    (c.skewX = 0),
                    (c.perspective = M ? 1 / (M < 0 ? -M : M) : 0),
                    (c.x = R),
                    (c.y = D),
                    (c.z = N),
                    c.svg &&
                      ((c.x -= c.xOrigin - (c.xOrigin * x - c.yOrigin * C)),
                      (c.y -= c.yOrigin - (c.yOrigin * w - c.xOrigin * k)));
                } else if (
                  !(
                    (Rt &&
                      !i &&
                      r.length &&
                      c.x === r[4] &&
                      c.y === r[5] &&
                      (c.rotationX || c.rotationY)) ||
                    (void 0 !== c.x && "none" === G(t, "display", e))
                  )
                ) {
                  var I = 6 <= r.length,
                    F = I ? r[0] : 1,
                    B = r[1] || 0,
                    z = r[2] || 0,
                    H = I ? r[3] : 1;
                  (c.x = r[4] || 0),
                    (c.y = r[5] || 0),
                    (a = Math.sqrt(F * F + B * B)),
                    (s = Math.sqrt(H * H + z * z)),
                    (l = F || B ? Math.atan2(B, F) * U : c.rotation || 0),
                    (u = z || H ? Math.atan2(z, H) * U + l : c.skewX || 0),
                    90 < Math.abs(u) &&
                      Math.abs(u) < 270 &&
                      (f
                        ? ((a *= -1),
                          (u += l <= 0 ? 180 : -180),
                          (l += l <= 0 ? 180 : -180))
                        : ((s *= -1), (u += u <= 0 ? 180 : -180))),
                    (c.scaleX = a),
                    (c.scaleY = s),
                    (c.rotation = l),
                    (c.skewX = u),
                    Rt &&
                      ((c.rotationX = c.rotationY = c.z = 0),
                      (c.perspective = m),
                      (c.scaleZ = 1)),
                    c.svg &&
                      ((c.x -= c.xOrigin - (c.xOrigin * F + c.yOrigin * z)),
                      (c.y -= c.yOrigin - (c.xOrigin * B + c.yOrigin * H)));
                }
                for (o in ((c.zOrigin = p), c))
                  h > c[o] && c[o] > -h && (c[o] = 0);
              }
              return (
                n &&
                  (t._gsTransform = c).svg &&
                  (Tt && t.style[Ot]
                    ? q.delayedCall(0.001, function () {
                        $t(t.style, Ot);
                      })
                    : !Tt &&
                      t.getAttribute("transform") &&
                      q.delayedCall(0.001, function () {
                        t.removeAttribute("transform");
                      })),
                c
              );
            }),
            Wt = function (t) {
              var e,
                n,
                i = this.data,
                r = -i.rotation * B,
                o = r + i.skewX * B,
                a = 1e5,
                s = (0 | (Math.cos(r) * i.scaleX * a)) / a,
                l = (0 | (Math.sin(r) * i.scaleX * a)) / a,
                u = (0 | (Math.sin(o) * -i.scaleY * a)) / a,
                c = (0 | (Math.cos(o) * i.scaleY * a)) / a,
                f = this.t.style,
                h = this.t.currentStyle;
              if (h) {
                (n = l), (l = -u), (u = -n), (e = h.filter), (f.filter = "");
                var d,
                  p,
                  m = this.t.offsetWidth,
                  _ = this.t.offsetHeight,
                  g = "absolute" !== h.position,
                  v =
                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                    s +
                    ", M12=" +
                    l +
                    ", M21=" +
                    u +
                    ", M22=" +
                    c,
                  y = i.x + (m * i.xPercent) / 100,
                  b = i.y + (_ * i.yPercent) / 100;
                if (
                  (null != i.ox &&
                    ((y +=
                      (d = (i.oxp ? 0.01 * m * i.ox : i.ox) - m / 2) -
                      (d * s +
                        (p = (i.oyp ? 0.01 * _ * i.oy : i.oy) - _ / 2) * l)),
                    (b += p - (d * u + p * c))),
                  g
                    ? (v +=
                        ", Dx=" +
                        ((d = m / 2) - (d * s + (p = _ / 2) * l) + y) +
                        ", Dy=" +
                        (p - (d * u + p * c) + b) +
                        ")")
                    : (v += ", sizingMethod='auto expand')"),
                  (f.filter =
                    -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                      ? e.replace(R, v)
                      : v + " " + e),
                  (0 === t || 1 === t) &&
                    1 === s &&
                    0 === l &&
                    0 === u &&
                    1 === c &&
                    ((g && -1 === v.indexOf("Dx=0, Dy=0")) ||
                      (j.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                      (-1 === e.indexOf(e.indexOf("Alpha")) &&
                        f.removeAttribute("filter"))),
                  !g)
                ) {
                  var x,
                    w,
                    T,
                    S = C < 8 ? 1 : -1;
                  for (
                    d = i.ieOffsetX || 0,
                      p = i.ieOffsetY || 0,
                      i.ieOffsetX = Math.round(
                        (m - ((s < 0 ? -s : s) * m + (l < 0 ? -l : l) * _)) /
                          2 +
                          y
                      ),
                      i.ieOffsetY = Math.round(
                        (_ - ((c < 0 ? -c : c) * _ + (u < 0 ? -u : u) * m)) /
                          2 +
                          b
                      ),
                      yt = 0;
                    yt < 4;
                    yt++
                  )
                    (T =
                      (n =
                        -1 !== (x = h[(w = it[yt])]).indexOf("px")
                          ? parseFloat(x)
                          : K(this.t, w, parseFloat(x), x.replace(O, "")) ||
                            0) !== i[w]
                        ? yt < 2
                          ? -i.ieOffsetX
                          : -i.ieOffsetY
                        : yt < 2
                        ? d - i.ieOffsetX
                        : p - i.ieOffsetY),
                      (f[w] =
                        (i[w] = Math.round(
                          n - T * (0 === yt || 2 === yt ? 1 : S)
                        )) + "px");
                }
              }
            },
            Xt =
              (r.set3DTransformRatio =
              r.setTransformRatio =
                function (t) {
                  var e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    f,
                    h,
                    d,
                    p,
                    m,
                    _,
                    g,
                    v,
                    y,
                    b,
                    x,
                    w,
                    T,
                    S = this.data,
                    C = this.t.style,
                    k = S.rotation,
                    A = S.rotationX,
                    P = S.rotationY,
                    O = S.scaleX,
                    j = S.scaleY,
                    E = S.scaleZ,
                    R = S.x,
                    D = S.y,
                    N = S.z,
                    M = S.svg,
                    L = S.perspective,
                    I = S.force3D;
                  if (
                    !(
                      (((1 !== t && 0 !== t) ||
                        "auto" !== I ||
                        (this.tween._totalTime !== this.tween._totalDuration &&
                          this.tween._totalTime)) &&
                        I) ||
                      N ||
                      L ||
                      P ||
                      A
                    ) ||
                    (Tt && M) ||
                    !Rt
                  )
                    k || S.skewX || M
                      ? ((k *= B),
                        (w = S.skewX * B),
                        (T = 1e5),
                        (e = Math.cos(k) * O),
                        (r = Math.sin(k) * O),
                        (n = Math.sin(k - w) * -j),
                        (o = Math.cos(k - w) * j),
                        w &&
                          "simple" === S.skewType &&
                          ((g = Math.tan(w)),
                          (n *= g = Math.sqrt(1 + g * g)),
                          (o *= g),
                          S.skewY && ((e *= g), (r *= g))),
                        M &&
                          ((R +=
                            S.xOrigin -
                            (S.xOrigin * e + S.yOrigin * n) +
                            S.xOffset),
                          (D +=
                            S.yOrigin -
                            (S.xOrigin * r + S.yOrigin * o) +
                            S.yOffset),
                          Tt &&
                            (S.xPercent || S.yPercent) &&
                            ((p = this.t.getBBox()),
                            (R += 0.01 * S.xPercent * p.width),
                            (D += 0.01 * S.yPercent * p.height)),
                          R < (p = 1e-6) && -p < R && (R = 0),
                          D < p && -p < D && (D = 0)),
                        (y =
                          (0 | (e * T)) / T +
                          "," +
                          (0 | (r * T)) / T +
                          "," +
                          (0 | (n * T)) / T +
                          "," +
                          (0 | (o * T)) / T +
                          "," +
                          R +
                          "," +
                          D +
                          ")"),
                        M && Tt
                          ? this.t.setAttribute("transform", "matrix(" + y)
                          : (C[Ot] =
                              (S.xPercent || S.yPercent
                                ? "translate(" +
                                  S.xPercent +
                                  "%," +
                                  S.yPercent +
                                  "%) matrix("
                                : "matrix(") + y))
                      : (C[Ot] =
                          (S.xPercent || S.yPercent
                            ? "translate(" +
                              S.xPercent +
                              "%," +
                              S.yPercent +
                              "%) matrix("
                            : "matrix(") +
                          O +
                          ",0,0," +
                          j +
                          "," +
                          R +
                          "," +
                          D +
                          ")");
                  else {
                    if (
                      (F &&
                        (O < (p = 1e-4) && -p < O && (O = E = 2e-5),
                        j < p && -p < j && (j = E = 2e-5),
                        !L || S.z || S.rotationX || S.rotationY || (L = 0)),
                      k || S.skewX)
                    )
                      (k *= B),
                        (m = e = Math.cos(k)),
                        (_ = r = Math.sin(k)),
                        S.skewX &&
                          ((k -= S.skewX * B),
                          (m = Math.cos(k)),
                          (_ = Math.sin(k)),
                          "simple" === S.skewType &&
                            ((g = Math.tan(S.skewX * B)),
                            (m *= g = Math.sqrt(1 + g * g)),
                            (_ *= g),
                            S.skewY && ((e *= g), (r *= g)))),
                        (n = -_),
                        (o = m);
                    else {
                      if (!(P || A || 1 !== E || L || M))
                        return void (C[Ot] =
                          (S.xPercent || S.yPercent
                            ? "translate(" +
                              S.xPercent +
                              "%," +
                              S.yPercent +
                              "%) translate3d("
                            : "translate3d(") +
                          R +
                          "px," +
                          D +
                          "px," +
                          N +
                          "px)" +
                          (1 !== O || 1 !== j
                            ? " scale(" + O + "," + j + ")"
                            : ""));
                      (e = o = 1), (n = r = 0);
                    }
                    (u = 1),
                      (i = a = s = l = c = f = 0),
                      (h = L ? -1 / L : 0),
                      (d = S.zOrigin),
                      (p = 1e-6),
                      (b = ","),
                      (x = "0"),
                      (k = P * B) &&
                        ((m = Math.cos(k)),
                        (c = h * (s = -(_ = Math.sin(k)))),
                        (i = e * _),
                        (a = r * _),
                        (h *= u = m),
                        (e *= m),
                        (r *= m)),
                      (k = A * B) &&
                        ((g = n * (m = Math.cos(k)) + i * (_ = Math.sin(k))),
                        (v = o * m + a * _),
                        (l = u * _),
                        (f = h * _),
                        (i = n * -_ + i * m),
                        (a = o * -_ + a * m),
                        (u *= m),
                        (h *= m),
                        (n = g),
                        (o = v)),
                      1 !== E && ((i *= E), (a *= E), (u *= E), (h *= E)),
                      1 !== j && ((n *= j), (o *= j), (l *= j), (f *= j)),
                      1 !== O && ((e *= O), (r *= O), (s *= O), (c *= O)),
                      (d || M) &&
                        (d && ((R += i * -d), (D += a * -d), (N += u * -d + d)),
                        M &&
                          ((R +=
                            S.xOrigin -
                            (S.xOrigin * e + S.yOrigin * n) +
                            S.xOffset),
                          (D +=
                            S.yOrigin -
                            (S.xOrigin * r + S.yOrigin * o) +
                            S.yOffset)),
                        R < p && -p < R && (R = x),
                        D < p && -p < D && (D = x),
                        N < p && -p < N && (N = 0)),
                      (y =
                        S.xPercent || S.yPercent
                          ? "translate(" +
                            S.xPercent +
                            "%," +
                            S.yPercent +
                            "%) matrix3d("
                          : "matrix3d("),
                      (y +=
                        (e < p && -p < e ? x : e) +
                        b +
                        (r < p && -p < r ? x : r) +
                        b +
                        (s < p && -p < s ? x : s)),
                      (y +=
                        b +
                        (c < p && -p < c ? x : c) +
                        b +
                        (n < p && -p < n ? x : n) +
                        b +
                        (o < p && -p < o ? x : o)),
                      A || P
                        ? ((y +=
                            b +
                            (l < p && -p < l ? x : l) +
                            b +
                            (f < p && -p < f ? x : f) +
                            b +
                            (i < p && -p < i ? x : i)),
                          (y +=
                            b +
                            (a < p && -p < a ? x : a) +
                            b +
                            (u < p && -p < u ? x : u) +
                            b +
                            (h < p && -p < h ? x : h) +
                            b))
                        : (y += ",0,0,0,0,1,0,"),
                      (y += R + b + D + b + N + b + (L ? 1 + -N / L : 1) + ")"),
                      (C[Ot] = y);
                  }
                });
          ((t = Dt.prototype).x =
            t.y =
            t.z =
            t.skewX =
            t.skewY =
            t.rotation =
            t.rotationX =
            t.rotationY =
            t.zOrigin =
            t.xPercent =
            t.yPercent =
            t.xOffset =
            t.yOffset =
              0),
            (t.scaleX = t.scaleY = t.scaleZ = 1),
            xt(
              "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
              {
                parser: function (t, e, n, i, r, o, a) {
                  if (i._lastParsedTransform === a) return r;
                  i._lastParsedTransform = a;
                  var s,
                    l,
                    u,
                    c,
                    f,
                    h,
                    d,
                    p,
                    m,
                    _ = t._gsTransform,
                    g = (i._transform = qt(t, W, !0, a.parseTransform)),
                    v = t.style,
                    y = 1e-6,
                    b = Pt.length,
                    x = a,
                    w = {},
                    T = "transformOrigin";
                  if ("string" == typeof x.transform && Ot)
                    ((u = M.style)[Ot] = x.transform),
                      (u.display = "block"),
                      (u.position = "absolute"),
                      N.body.appendChild(M),
                      (s = qt(M, null, !1)),
                      N.body.removeChild(M),
                      null != x.xPercent &&
                        (s.xPercent = st(x.xPercent, g.xPercent)),
                      null != x.yPercent &&
                        (s.yPercent = st(x.yPercent, g.yPercent));
                  else if ("object" == typeof x) {
                    if (
                      ((s = {
                        scaleX: st(
                          null != x.scaleX ? x.scaleX : x.scale,
                          g.scaleX
                        ),
                        scaleY: st(
                          null != x.scaleY ? x.scaleY : x.scale,
                          g.scaleY
                        ),
                        scaleZ: st(x.scaleZ, g.scaleZ),
                        x: st(x.x, g.x),
                        y: st(x.y, g.y),
                        z: st(x.z, g.z),
                        xPercent: st(x.xPercent, g.xPercent),
                        yPercent: st(x.yPercent, g.yPercent),
                        perspective: st(x.transformPerspective, g.perspective),
                      }),
                      null != (d = x.directionalRotation))
                    )
                      if ("object" == typeof d) for (u in d) x[u] = d[u];
                      else x.rotation = d;
                    "string" == typeof x.x &&
                      -1 !== x.x.indexOf("%") &&
                      ((s.x = 0), (s.xPercent = st(x.x, g.xPercent))),
                      "string" == typeof x.y &&
                        -1 !== x.y.indexOf("%") &&
                        ((s.y = 0), (s.yPercent = st(x.y, g.yPercent))),
                      (s.rotation = lt(
                        "rotation" in x
                          ? x.rotation
                          : "shortRotation" in x
                          ? x.shortRotation + "_short"
                          : "rotationZ" in x
                          ? x.rotationZ
                          : g.rotation,
                        g.rotation,
                        "rotation",
                        w
                      )),
                      Rt &&
                        ((s.rotationX = lt(
                          "rotationX" in x
                            ? x.rotationX
                            : "shortRotationX" in x
                            ? x.shortRotationX + "_short"
                            : g.rotationX || 0,
                          g.rotationX,
                          "rotationX",
                          w
                        )),
                        (s.rotationY = lt(
                          "rotationY" in x
                            ? x.rotationY
                            : "shortRotationY" in x
                            ? x.shortRotationY + "_short"
                            : g.rotationY || 0,
                          g.rotationY,
                          "rotationY",
                          w
                        ))),
                      (s.skewX =
                        null == x.skewX ? g.skewX : lt(x.skewX, g.skewX)),
                      (s.skewY =
                        null == x.skewY ? g.skewY : lt(x.skewY, g.skewY)),
                      (l = s.skewY - g.skewY) &&
                        ((s.skewX += l), (s.rotation += l));
                  }
                  for (
                    Rt &&
                      null != x.force3D &&
                      ((g.force3D = x.force3D), (h = !0)),
                      g.skewType =
                        x.skewType || g.skewType || X.defaultSkewType,
                      (f =
                        g.force3D ||
                        g.z ||
                        g.rotationX ||
                        g.rotationY ||
                        s.z ||
                        s.rotationX ||
                        s.rotationY ||
                        s.perspective) ||
                        null == x.scale ||
                        (s.scaleZ = 1);
                    -1 < --b;

                  )
                    (y < (c = s[(n = Pt[b])] - g[n]) ||
                      c < -y ||
                      null != x[n] ||
                      null != S[n]) &&
                      ((h = !0),
                      (r = new _t(g, n, g[n], c, r)),
                      n in w && (r.e = w[n]),
                      (r.xs0 = 0),
                      (r.plugin = o),
                      i._overwriteProps.push(r.n));
                  return (
                    (c = x.transformOrigin),
                    g.svg &&
                      (c || x.svgOrigin) &&
                      ((p = g.xOffset),
                      (m = g.yOffset),
                      Ft(t, ot(c), s, x.svgOrigin, x.smoothOrigin),
                      (r = gt(
                        g,
                        "xOrigin",
                        (_ ? g : s).xOrigin,
                        s.xOrigin,
                        r,
                        T
                      )),
                      (r = gt(
                        g,
                        "yOrigin",
                        (_ ? g : s).yOrigin,
                        s.yOrigin,
                        r,
                        T
                      )),
                      (p !== g.xOffset || m !== g.yOffset) &&
                        ((r = gt(
                          g,
                          "xOffset",
                          _ ? p : g.xOffset,
                          g.xOffset,
                          r,
                          T
                        )),
                        (r = gt(
                          g,
                          "yOffset",
                          _ ? m : g.yOffset,
                          g.yOffset,
                          r,
                          T
                        ))),
                      (c = Tt ? null : "0px 0px")),
                    (c || (Rt && f && g.zOrigin)) &&
                      (Ot
                        ? ((h = !0),
                          (n = Et),
                          (c = (c || G(t, n, W, !1, "50% 50%")) + ""),
                          ((r = new _t(v, n, 0, 0, r, -1, T)).b = v[n]),
                          (r.plugin = o),
                          Rt
                            ? ((u = g.zOrigin),
                              (c = c.split(" ")),
                              (g.zOrigin =
                                (2 < c.length && (0 === u || "0px" !== c[2])
                                  ? parseFloat(c[2])
                                  : u) || 0),
                              (r.xs0 = r.e =
                                c[0] + " " + (c[1] || "50%") + " 0px"),
                              ((r = new _t(g, "zOrigin", 0, 0, r, -1, r.n)).b =
                                u),
                              (r.xs0 = r.e = g.zOrigin))
                            : (r.xs0 = r.e = c))
                        : ot(c + "", g)),
                    h &&
                      (i._transformType =
                        (g.svg && Tt) || (!f && 3 !== this._transformType)
                          ? 2
                          : 3),
                    r
                  );
                },
                prefix: !0,
              }
            ),
            xt("boxShadow", {
              defaultValue: "0px 0px 0px 0px #999",
              prefix: !0,
              color: !0,
              multi: !0,
              keyword: "inset",
            }),
            xt("borderRadius", {
              defaultValue: "0px",
              parser: function (t, e, n, i, r) {
                e = this.format(e);
                var o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  f,
                  h,
                  d,
                  p,
                  m,
                  _,
                  g,
                  v,
                  y,
                  b,
                  x = [
                    "borderTopLeftRadius",
                    "borderTopRightRadius",
                    "borderBottomRightRadius",
                    "borderBottomLeftRadius",
                  ],
                  w = t.style;
                for (
                  d = parseFloat(t.offsetWidth),
                    p = parseFloat(t.offsetHeight),
                    o = e.split(" "),
                    a = 0;
                  x.length > a;
                  a++
                )
                  this.p.indexOf("border") && (x[a] = Q(x[a])),
                    -1 !== (u = l = G(t, x[a], W, !1, "0px")).indexOf(" ") &&
                      ((u = (l = u.split(" "))[0]), (l = l[1])),
                    (c = s = o[a]),
                    (f = parseFloat(u)),
                    (_ = u.substr((f + "").length)),
                    (g = "=" === c.charAt(1))
                      ? ((h = parseInt(c.charAt(0) + "1", 10)),
                        (c = c.substr(2)),
                        (h *= parseFloat(c)),
                        (m = c.substr((h + "").length - (h < 0 ? 1 : 0)) || ""))
                      : ((h = parseFloat(c)), (m = c.substr((h + "").length))),
                    "" === m && (m = T[n] || _),
                    m !== _ &&
                      ((v = K(t, "borderLeft", f, _)),
                      (y = K(t, "borderTop", f, _)),
                      "%" === m
                        ? ((u = (v / d) * 100 + "%"), (l = (y / p) * 100 + "%"))
                        : "em" === m
                        ? ((u = v / (b = K(t, "borderLeft", 1, "em")) + "em"),
                          (l = y / b + "em"))
                        : ((u = v + "px"), (l = y + "px")),
                      g &&
                        ((c = parseFloat(u) + h + m),
                        (s = parseFloat(l) + h + m))),
                    (r = vt(w, x[a], u + " " + l, c + " " + s, !1, "0px", r));
                return r;
              },
              prefix: !0,
              formatter: dt("0px 0px 0px 0px", !1, !0),
            }),
            xt("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (t, e, n, i, r, o) {
                var a,
                  s,
                  l,
                  u,
                  c,
                  f,
                  h = "background-position",
                  d = W || Z(t, null),
                  p = this.format(
                    (d
                      ? C
                        ? d.getPropertyValue(h + "-x") +
                          " " +
                          d.getPropertyValue(h + "-y")
                        : d.getPropertyValue(h)
                      : t.currentStyle.backgroundPositionX +
                        " " +
                        t.currentStyle.backgroundPositionY) || "0 0"
                  ),
                  m = this.format(e);
                if (
                  (-1 !== p.indexOf("%")) != (-1 !== m.indexOf("%")) &&
                  (f = G(t, "backgroundImage").replace(x, "")) &&
                  "none" !== f
                ) {
                  for (
                    a = p.split(" "),
                      s = m.split(" "),
                      L.setAttribute("src", f),
                      l = 2;
                    -1 < --l;

                  )
                    (u = -1 !== (p = a[l]).indexOf("%")) !==
                      (-1 !== s[l].indexOf("%")) &&
                      ((c =
                        0 === l
                          ? t.offsetWidth - L.width
                          : t.offsetHeight - L.height),
                      (a[l] = u
                        ? (parseFloat(p) / 100) * c + "px"
                        : (parseFloat(p) / c) * 100 + "%"));
                  p = a.join(" ");
                }
                return this.parseComplex(t.style, p, m, r, o);
              },
              formatter: ot,
            }),
            xt("backgroundSize", { defaultValue: "0 0", formatter: ot }),
            xt("perspective", { defaultValue: "0px", prefix: !0 }),
            xt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
            xt("transformStyle", { prefix: !0 }),
            xt("backfaceVisibility", { prefix: !0 }),
            xt("userSelect", { prefix: !0 }),
            xt("margin", {
              parser: pt("marginTop,marginRight,marginBottom,marginLeft"),
            }),
            xt("padding", {
              parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
            }),
            xt("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (t, e, n, i, r, o) {
                var a, s, l;
                return (
                  C < 9
                    ? ((s = t.currentStyle),
                      (l = C < 8 ? " " : ","),
                      (a =
                        "rect(" +
                        s.clipTop +
                        l +
                        s.clipRight +
                        l +
                        s.clipBottom +
                        l +
                        s.clipLeft +
                        ")"),
                      (e = this.format(e).split(",").join(l)))
                    : ((a = this.format(G(t, this.p, W, !1, this.dflt))),
                      (e = this.format(e))),
                  this.parseComplex(t.style, a, e, r, o)
                );
              },
            }),
            xt("textShadow", {
              defaultValue: "0px 0px 0px #999",
              color: !0,
              multi: !0,
            }),
            xt("autoRound,strictUnits", {
              parser: function (t, e, n, i, r) {
                return r;
              },
            }),
            xt("border", {
              defaultValue: "0px solid #000",
              parser: function (t, e, n, i, r, o) {
                return this.parseComplex(
                  t.style,
                  this.format(
                    G(t, "borderTopWidth", W, !1, "0px") +
                      " " +
                      G(t, "borderTopStyle", W, !1, "solid") +
                      " " +
                      G(t, "borderTopColor", W, !1, "#000")
                  ),
                  this.format(e),
                  r,
                  o
                );
              },
              color: !0,
              formatter: function (t) {
                var e = t.split(" ");
                return (
                  e[0] +
                  " " +
                  (e[1] || "solid") +
                  " " +
                  (t.match(ht) || ["#000"])[0]
                );
              },
            }),
            xt("borderWidth", {
              parser: pt(
                "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
              ),
            }),
            xt("float,cssFloat,styleFloat", {
              parser: function (t, e, n, i, r) {
                var o = t.style,
                  a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new _t(o, a, 0, 0, r, -1, n, !1, 0, o[a], e);
              },
            });
          var Ut = function (t) {
            var e,
              n = this.t,
              i = n.filter || G(this.data, "filter") || "",
              r = 0 | (this.s + this.c * t);
            100 === r &&
              (-1 === i.indexOf("atrix(") &&
              -1 === i.indexOf("radient(") &&
              -1 === i.indexOf("oader(")
                ? (n.removeAttribute("filter"), (e = !G(this.data, "filter")))
                : ((n.filter = i.replace(a, "")), (e = !0))),
              e ||
                (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"),
                -1 === i.indexOf("pacity")
                  ? (0 === r && this.xn1) ||
                    (n.filter = i + " alpha(opacity=" + r + ")")
                  : (n.filter = i.replace(j, "opacity=" + r)));
          };
          xt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (t, e, n, i, r, o) {
              var a = parseFloat(G(t, "opacity", W, !1, "1")),
                s = t.style,
                l = "autoAlpha" === n;
              return (
                "string" == typeof e &&
                  "=" === e.charAt(1) &&
                  (e =
                    ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) +
                    a),
                l &&
                  1 === a &&
                  "hidden" === G(t, "visibility", W) &&
                  0 !== e &&
                  (a = 0),
                z
                  ? (r = new _t(s, "opacity", a, e - a, r))
                  : (((r = new _t(
                      s,
                      "opacity",
                      100 * a,
                      100 * (e - a),
                      r
                    )).xn1 = l ? 1 : 0),
                    (s.zoom = 1),
                    (r.type = 2),
                    (r.b = "alpha(opacity=" + r.s + ")"),
                    (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                    (r.data = t),
                    (r.plugin = o),
                    (r.setRatio = Ut)),
                l &&
                  (((r = new _t(
                    s,
                    "visibility",
                    0,
                    0,
                    r,
                    -1,
                    null,
                    !1,
                    0,
                    0 !== a ? "inherit" : "hidden",
                    0 === e ? "hidden" : "inherit"
                  )).xs0 = "inherit"),
                  i._overwriteProps.push(r.n),
                  i._overwriteProps.push(n)),
                r
              );
            },
          });
          var $t = function (t, e) {
              e &&
                (t.removeProperty
                  ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) &&
                      (e = "-" + e),
                    t.removeProperty(e.replace(s, "-$1").toLowerCase()))
                  : t.removeAttribute(e));
            },
            Vt = function (t) {
              if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, n = this.t.style; e; )
                  e.v ? (n[e.p] = e.v) : $t(n, e.p), (e = e._next);
                1 === t &&
                  this.t._gsClassPT === this &&
                  (this.t._gsClassPT = null);
              } else
                this.t.getAttribute("class") !== this.e &&
                  this.t.setAttribute("class", this.e);
            };
          xt("className", {
            parser: function (t, e, n, i, r, o, a) {
              var s,
                l,
                u,
                c,
                f,
                h = t.getAttribute("class") || "",
                d = t.style.cssText;
              if (
                (((r = i._classNamePT = new _t(t, n, 0, 0, r, 2)).setRatio =
                  Vt),
                (r.pr = -11),
                (p = !0),
                (r.b = h),
                (l = tt(t, W)),
                (u = t._gsClassPT))
              ) {
                for (c = {}, f = u.data; f; ) (c[f.p] = 1), (f = f._next);
                u.setRatio(1);
              }
              return (
                ((t._gsClassPT = r).e =
                  "=" !== e.charAt(1)
                    ? e
                    : h.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") +
                      ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                t.setAttribute("class", r.e),
                (s = et(t, l, tt(t), a, c)),
                t.setAttribute("class", h),
                (r.data = s.firstMPT),
                (t.style.cssText = d),
                (r.xfirst = i.parse(t, s.difs, r, o))
              );
            },
          });
          var Yt = function (t) {
            if (
              (1 === t || 0 === t) &&
              this.data._totalTime === this.data._totalDuration &&
              "isFromStart" !== this.data.data
            ) {
              var e,
                n,
                i,
                r,
                o,
                a = this.t.style,
                s = m.transform.parse;
              if ("all" === this.e) r = !(a.cssText = "");
              else
                for (
                  i = (e = this.e.split(" ").join("").split(",")).length;
                  -1 < --i;

                )
                  (n = e[i]),
                    m[n] &&
                      (m[n].parse === s
                        ? (r = !0)
                        : (n = "transformOrigin" === n ? Et : m[n].p)),
                    $t(a, n);
              r &&
                ($t(a, Ot),
                (o = this.t._gsTransform) &&
                  (o.svg && this.t.removeAttribute("data-svg-origin"),
                  delete this.t._gsTransform));
            }
          };
          for (
            xt("clearProps", {
              parser: function (t, e, n, i, r) {
                return (
                  ((r = new _t(t, n, 0, 0, r, 2)).setRatio = Yt),
                  (r.e = e),
                  (r.pr = -10),
                  (r.data = i._tween),
                  (p = !0),
                  r
                );
              },
            }),
              t = "bezier,throwProps,physicsProps,physics2D".split(","),
              yt = t.length;
            yt--;

          )
            wt(t[yt]);
          ((t = X.prototype)._firstPT =
            t._lastParsedTransform =
            t._transform =
              null),
            (t._onInitTween = function (t, e, n) {
              if (!t.nodeType) return !1;
              (this._target = t),
                (this._tween = n),
                (this._vars = e),
                (k = e.autoRound),
                (p = !1),
                (T = e.suffixMap || X.suffixMap),
                (W = Z(t, "")),
                (d = this._overwriteProps);
              var i,
                r,
                o,
                a,
                s,
                l,
                u,
                c,
                f,
                h = t.style;
              if (
                (_ &&
                  "" === h.zIndex &&
                  ("auto" === (i = G(t, "zIndex", W)) || "" === i) &&
                  this._addLazySet(h, "zIndex", 0),
                "string" == typeof e &&
                  ((a = h.cssText),
                  (i = tt(t, W)),
                  (h.cssText = a + ";" + e),
                  (i = et(t, i, tt(t)).difs),
                  !z && b.test(e) && (i.opacity = parseFloat(RegExp.$1)),
                  (e = i),
                  (h.cssText = a)),
                (this._firstPT = r =
                  e.className
                    ? m.className.parse(
                        t,
                        e.className,
                        "className",
                        this,
                        null,
                        null,
                        e
                      )
                    : this.parse(t, e, null)),
                this._transformType)
              ) {
                for (
                  f = 3 === this._transformType,
                    Ot
                      ? g &&
                        ((_ = !0),
                        "" === h.zIndex &&
                          ("auto" === (u = G(t, "zIndex", W)) || "" === u) &&
                          this._addLazySet(h, "zIndex", 0),
                        v &&
                          this._addLazySet(
                            h,
                            "WebkitBackfaceVisibility",
                            this._vars.WebkitBackfaceVisibility ||
                              (f ? "visible" : "hidden")
                          ))
                      : (h.zoom = 1),
                    o = r;
                  o && o._next;

                )
                  o = o._next;
                (c = new _t(t, "transform", 0, 0, null, 2)),
                  this._linkCSSP(c, null, o),
                  (c.setRatio = Ot ? Xt : Wt),
                  (c.data = this._transform || qt(t, W, !0)),
                  (c.tween = n),
                  (c.pr = -1),
                  d.pop();
              }
              if (p) {
                for (; r; ) {
                  for (l = r._next, o = a; o && o.pr > r.pr; ) o = o._next;
                  (r._prev = o ? o._prev : s) ? (r._prev._next = r) : (a = r),
                    (r._next = o) ? (o._prev = r) : (s = r),
                    (r = l);
                }
                this._firstPT = a;
              }
              return !0;
            }),
            (t.parse = function (t, e, n, i) {
              var r,
                o,
                a,
                s,
                l,
                u,
                c,
                f,
                h,
                d,
                p = t.style;
              for (r in e)
                (u = e[r]),
                  (o = m[r])
                    ? (n = o.parse(t, u, r, this, n, i, e))
                    : ((l = G(t, r, W) + ""),
                      (h = "string" == typeof u),
                      "color" === r ||
                      "fill" === r ||
                      "stroke" === r ||
                      -1 !== r.indexOf("Color") ||
                      (h && E.test(u))
                        ? (h ||
                            (u =
                              (3 < (u = ft(u)).length ? "rgba(" : "rgb(") +
                              u.join(",") +
                              ")"),
                          (n = vt(p, r, l, u, !0, "transparent", n, 0, i)))
                        : !h || (-1 === u.indexOf(" ") && -1 === u.indexOf(","))
                        ? ((c =
                            (a = parseFloat(l)) || 0 === a
                              ? l.substr((a + "").length)
                              : ""),
                          ("" === l || "auto" === l) &&
                            ("width" === r || "height" === r
                              ? ((a = rt(t, r, W)), (c = "px"))
                              : "left" === r || "top" === r
                              ? ((a = J(t, r, W)), (c = "px"))
                              : ((a = "opacity" !== r ? 0 : 1), (c = ""))),
                          (d = h && "=" === u.charAt(1))
                            ? ((s = parseInt(u.charAt(0) + "1", 10)),
                              (u = u.substr(2)),
                              (s *= parseFloat(u)),
                              (f = u.replace(O, "")))
                            : ((s = parseFloat(u)),
                              (f = h ? u.replace(O, "") : "")),
                          "" === f && (f = r in T ? T[r] : c),
                          (u = s || 0 === s ? (d ? s + a : s) + f : e[r]),
                          c !== f &&
                            "" !== f &&
                            (s || 0 === s) &&
                            a &&
                            ((a = K(t, r, a, c)),
                            "%" === f
                              ? ((a /= K(t, r, 100, "%") / 100),
                                !0 !== e.strictUnits && (l = a + "%"))
                              : "em" === f
                              ? (a /= K(t, r, 1, "em"))
                              : "px" !== f && ((s = K(t, r, s, f)), (f = "px")),
                            d && (s || 0 === s) && (u = s + a + f)),
                          d && (s += a),
                          (!a && 0 !== a) || (!s && 0 !== s)
                            ? void 0 !== p[r] &&
                              (u || ("NaN" != u + "" && null != u))
                              ? ((n = new _t(
                                  p,
                                  r,
                                  s || a || 0,
                                  0,
                                  n,
                                  -1,
                                  r,
                                  !1,
                                  0,
                                  l,
                                  u
                                )).xs0 =
                                  "none" !== u ||
                                  ("display" !== r && -1 === r.indexOf("Style"))
                                    ? u
                                    : l)
                              : $("invalid " + r + " tween value: " + e[r])
                            : ((n = new _t(
                                p,
                                r,
                                a,
                                s - a,
                                n,
                                0,
                                r,
                                !1 !== k && ("px" === f || "zIndex" === r),
                                0,
                                l,
                                u
                              )).xs0 = f))
                        : (n = vt(p, r, l, u, !0, null, n, 0, i))),
                  i && n && !n.plugin && (n.plugin = i);
              return n;
            }),
            (t.setRatio = function (t) {
              var e,
                n,
                i,
                r = this._firstPT,
                o = 1e-6;
              if (
                1 !== t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time)
              )
                if (
                  t ||
                  (this._tween._time !== this._tween._duration &&
                    0 !== this._tween._time) ||
                  -1e-6 === this._tween._rawPrevTime
                )
                  for (; r; ) {
                    if (
                      ((e = r.c * t + r.s),
                      r.r ? (e = Math.round(e)) : e < o && -o < e && (e = 0),
                      r.type)
                    )
                      if (1 === r.type)
                        if (2 === (i = r.l))
                          r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                        else if (3 === i)
                          r.t[r.p] =
                            r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                        else if (4 === i)
                          r.t[r.p] =
                            r.xs0 +
                            e +
                            r.xs1 +
                            r.xn1 +
                            r.xs2 +
                            r.xn2 +
                            r.xs3 +
                            r.xn3 +
                            r.xs4;
                        else if (5 === i)
                          r.t[r.p] =
                            r.xs0 +
                            e +
                            r.xs1 +
                            r.xn1 +
                            r.xs2 +
                            r.xn2 +
                            r.xs3 +
                            r.xn3 +
                            r.xs4 +
                            r.xn4 +
                            r.xs5;
                        else {
                          for (n = r.xs0 + e + r.xs1, i = 1; r.l > i; i++)
                            n += r["xn" + i] + r["xs" + (i + 1)];
                          r.t[r.p] = n;
                        }
                      else
                        -1 === r.type
                          ? (r.t[r.p] = r.xs0)
                          : r.setRatio && r.setRatio(t);
                    else r.t[r.p] = e + r.xs0;
                    r = r._next;
                  }
                else
                  for (; r; )
                    2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                      (r = r._next);
              else
                for (; r; ) {
                  if (2 !== r.type)
                    if (r.r && -1 !== r.type)
                      if (((e = Math.round(r.s + r.c)), r.type)) {
                        if (1 === r.type) {
                          for (
                            i = r.l, n = r.xs0 + e + r.xs1, i = 1;
                            r.l > i;
                            i++
                          )
                            n += r["xn" + i] + r["xs" + (i + 1)];
                          r.t[r.p] = n;
                        }
                      } else r.t[r.p] = e + r.xs0;
                    else r.t[r.p] = r.e;
                  else r.setRatio(t);
                  r = r._next;
                }
            }),
            (t._enableTransforms = function (t) {
              (this._transform = this._transform || qt(this._target, W, !0)),
                (this._transformType =
                  (this._transform.svg && Tt) ||
                  (!t && 3 !== this._transformType)
                    ? 2
                    : 3);
            });
          var Qt = function () {
            (this.t[this.p] = this.e),
              this.data._linkCSSP(this, this._next, null, !0);
          };
          (t._addLazySet = function (t, e, n) {
            var i = (this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2));
            (i.e = n), (i.setRatio = Qt), (i.data = this);
          }),
            (t._linkCSSP = function (t, e, n, i) {
              return (
                t &&
                  (e && (e._prev = t),
                  t._next && (t._next._prev = t._prev),
                  t._prev
                    ? (t._prev._next = t._next)
                    : this._firstPT === t &&
                      ((this._firstPT = t._next), (i = !0)),
                  n
                    ? (n._next = t)
                    : i || null !== this._firstPT || (this._firstPT = t),
                  (t._next = e),
                  (t._prev = n)),
                t
              );
            }),
            (t._kill = function (t) {
              var e,
                n,
                i,
                r = t;
              if (t.autoAlpha || t.alpha) {
                for (n in ((r = {}), t)) r[n] = t[n];
                (r.opacity = 1), r.autoAlpha && (r.visibility = 1);
              }
              return (
                t.className &&
                  (e = this._classNamePT) &&
                  ((i = e.xfirst) && i._prev
                    ? this._linkCSSP(i._prev, e._next, i._prev._prev)
                    : i === this._firstPT && (this._firstPT = e._next),
                  e._next && this._linkCSSP(e._next, e._next._next, i._prev),
                  (this._classNamePT = null)),
                o.prototype._kill.call(this, r)
              );
            });
          var Zt = function (t, e, n) {
            var i, r, o, a;
            if (t.slice) for (r = t.length; -1 < --r; ) Zt(t[r], e, n);
            else
              for (r = (i = t.childNodes).length; -1 < --r; )
                (a = (o = i[r]).type),
                  o.style && (e.push(tt(o)), n && n.push(o)),
                  (1 !== a && 9 !== a && 11 !== a) ||
                    !o.childNodes.length ||
                    Zt(o, e, n);
          };
          return (
            (X.cascadeTo = function (t, e, n) {
              var i,
                r,
                o,
                a,
                s = q.to(t, e, n),
                l = [s],
                u = [],
                c = [],
                f = [],
                h = q._internals.reservedProps;
              for (
                t = s._targets || s.target,
                  Zt(t, u, f),
                  s.render(e, !0, !0),
                  Zt(t, c),
                  s.render(0, !0, !0),
                  s._enabled(!0),
                  i = f.length;
                -1 < --i;

              )
                if ((r = et(f[i], u[i], c[i])).firstMPT) {
                  for (o in ((r = r.difs), n)) h[o] && (r[o] = n[o]);
                  for (o in ((a = {}), r)) a[o] = u[i][o];
                  l.push(q.fromTo(f[i], e, a, r));
                }
              return l;
            }),
            o.activate([X]),
            X
          );
        },
        !0
      ),
      ((t = _gsScope._gsDefine.plugin({
        propName: "roundProps",
        priority: -1,
        API: 2,
        init: function (t, e, n) {
          return (this._tween = n), !0;
        },
      }).prototype)._onInitAllProps = function () {
        for (
          var t,
            e,
            n,
            i = this._tween,
            r =
              i.vars.roundProps instanceof Array
                ? i.vars.roundProps
                : i.vars.roundProps.split(","),
            o = r.length,
            a = {},
            s = i._propLookup.roundProps;
          -1 < --o;

        )
          a[r[o]] = 1;
        for (o = r.length; -1 < --o; )
          for (t = r[o], e = i._firstPT; e; )
            (n = e._next),
              e.pg
                ? e.t._roundProps(a, !0)
                : e.n === t &&
                  (this._add(e.t, t, e.s, e.c),
                  n && (n._prev = e._prev),
                  e._prev
                    ? (e._prev._next = n)
                    : i._firstPT === e && (i._firstPT = n),
                  (e._next = e._prev = null),
                  (i._propLookup[t] = s)),
              (e = n);
        return !1;
      }),
      (t._add = function (t, e, n, i) {
        this._addTween(t, e, n, n + i, e, !0), this._overwriteProps.push(e);
      }),
      (s = /(?:\d|\-|\+|=|#|\.)*/g),
      (l = /[A-Za-z%]/g),
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.4.0",
        init: function (t, e) {
          var n, i, r, o, a;
          if ("function" != typeof t.setAttribute) return !1;
          for (n in ((this._target = t),
          (this._proxy = {}),
          (this._start = {}),
          (this._end = {}),
          (this._suffix = {}),
          e))
            (this._start[n] = this._proxy[n] = i = t.getAttribute(n) + ""),
              (this._end[n] = r = e[n] + ""),
              (this._suffix[n] = o =
                l.test(r)
                  ? r.replace(s, "")
                  : l.test(i)
                  ? i.replace(s, "")
                  : ""),
              o && -1 !== (a = r.indexOf(o)) && (r = r.substr(0, a)),
              this._addTween(this._proxy, n, parseFloat(i), r, n) ||
                (this._suffix[n] = ""),
              "=" === r.charAt(1) &&
                (this._end[n] = this._firstPT.s + this._firstPT.c + o),
              this._overwriteProps.push(n);
          return !0;
        },
        set: function (t) {
          this._super.setRatio.call(this, t);
          for (
            var e,
              n = this._overwriteProps,
              i = n.length,
              r = 1 === t ? this._end : t ? this._proxy : this._start,
              o = r === this._proxy;
            -1 < --i;

          )
            (e = n[i]),
              this._target.setAttribute(e, r[e] + (o ? this._suffix[e] : ""));
        },
      }),
      (_gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function (t, e) {
          "object" != typeof e && (e = { rotation: e }), (this.finals = {});
          var n,
            i,
            r,
            o,
            a,
            s = !0 === e.useRadians ? 2 * Math.PI : 360,
            l = 1e-6;
          for (n in e)
            "useRadians" !== n &&
              ((i = (a = (e[n] + "").split("_"))[0]),
              (r = parseFloat(
                "function" != typeof t[n]
                  ? t[n]
                  : t[
                      n.indexOf("set") ||
                      "function" != typeof t["get" + n.substr(3)]
                        ? n
                        : "get" + n.substr(3)
                    ]()
              )),
              (o =
                (this.finals[n] =
                  "string" == typeof i && "=" === i.charAt(1)
                    ? r + parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))
                    : Number(i) || 0) - r),
              a.length &&
                (-1 !== (i = a.join("_")).indexOf("short") &&
                  (o %= s) !== o % (s / 2) &&
                  (o = o < 0 ? o + s : o - s),
                -1 !== i.indexOf("_cw") && o < 0
                  ? (o = ((o + 9999999999 * s) % s) - (0 | (o / s)) * s)
                  : -1 !== i.indexOf("ccw") &&
                    0 < o &&
                    (o = ((o - 9999999999 * s) % s) - (0 | (o / s)) * s)),
              (l < o || o < -l) &&
                (this._addTween(t, n, r, r + o, n),
                this._overwriteProps.push(n)));
          return !0;
        },
        set: function (t) {
          var e;
          if (1 !== t) this._super.setRatio.call(this, t);
          else
            for (e = this._firstPT; e; )
              e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
                (e = e._next);
        },
      })._autoCSS = !0),
      _gsScope._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function (_) {
          var e,
            n,
            t,
            i = _gsScope.GreenSockGlobals || _gsScope,
            r = i.com.greensock,
            o = 2 * Math.PI,
            a = Math.PI / 2,
            s = r._class,
            l = function (t, e) {
              var n = s("easing." + t, function () {}, !0),
                i = (n.prototype = new _());
              return (i.constructor = n), (i.getRatio = e), n;
            },
            u = _.register || function () {},
            c = function (t, e, n, i) {
              var r = s(
                "easing." + t,
                { easeOut: new e(), easeIn: new n(), easeInOut: new i() },
                !0
              );
              return u(r, t), r;
            },
            g = function (t, e, n) {
              (this.t = t),
                (this.v = e),
                n &&
                  ((((this.next = n).prev = this).c = n.v - e),
                  (this.gap = n.t - t));
            },
            f = function (t, e) {
              var n = s(
                  "easing." + t,
                  function (t) {
                    (this._p1 = t || 0 === t ? t : 1.70158),
                      (this._p2 = 1.525 * this._p1);
                  },
                  !0
                ),
                i = (n.prototype = new _());
              return (
                (i.constructor = n),
                (i.getRatio = e),
                (i.config = function (t) {
                  return new n(t);
                }),
                n
              );
            },
            h = c(
              "Back",
              f("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
              }),
              f("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1);
              }),
              f("BackInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                  : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
              })
            ),
            d = s(
              "easing.SlowMo",
              function (t, e, n) {
                (e = e || 0 === e ? e : 0.7),
                  null == t ? (t = 0.7) : 1 < t && (t = 1),
                  (this._p = 1 !== t ? e : 0),
                  (this._p1 = (1 - t) / 2),
                  (this._p2 = t),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === n);
              },
              !0
            ),
            p = (d.prototype = new _());
          return (
            (p.constructor = d),
            (p.getRatio = function (t) {
              var e = t + (0.5 - t) * this._p;
              return this._p1 > t
                ? this._calcEnd
                  ? 1 - (t = 1 - t / this._p1) * t
                  : e - (t = 1 - t / this._p1) * t * t * t * e
                : t > this._p3
                ? this._calcEnd
                  ? 1 - (t = (t - this._p3) / this._p1) * t
                  : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                : this._calcEnd
                ? 1
                : e;
            }),
            (d.ease = new d(0.7, 0.7)),
            (p.config = d.config =
              function (t, e, n) {
                return new d(t, e, n);
              }),
            ((p = (e = s(
              "easing.SteppedEase",
              function (t) {
                (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
              },
              !0
            )).prototype =
              new _()).constructor = e),
            (p.getRatio = function (t) {
              return (
                t < 0 ? (t = 0) : 1 <= t && (t = 0.999999999),
                ((this._p2 * t) >> 0) * this._p1
              );
            }),
            (p.config = e.config =
              function (t) {
                return new e(t);
              }),
            ((p = (n = s(
              "easing.RoughEase",
              function (t) {
                for (
                  var e,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s = (t = t || {}).taper || "none",
                    l = [],
                    u = 0,
                    c = 0 | (t.points || 20),
                    f = c,
                    h = !1 !== t.randomize,
                    d = !0 === t.clamp,
                    p = t.template instanceof _ ? t.template : null,
                    m = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                  -1 < --f;

                )
                  (e = h ? Math.random() : (1 / c) * f),
                    (n = p ? p.getRatio(e) : e),
                    "none" === s
                      ? (i = m)
                      : "out" === s
                      ? (i = (r = 1 - e) * r * m)
                      : "in" === s
                      ? (i = e * e * m)
                      : (i = 0.5 * (r = e < 0.5 ? 2 * e : 2 * (1 - e)) * r * m),
                    h
                      ? (n += Math.random() * i - 0.5 * i)
                      : f % 2
                      ? (n += 0.5 * i)
                      : (n -= 0.5 * i),
                    d && (1 < n ? (n = 1) : n < 0 && (n = 0)),
                    (l[u++] = { x: e, y: n });
                for (
                  l.sort(function (t, e) {
                    return t.x - e.x;
                  }),
                    a = new g(1, 1, null),
                    f = c;
                  -1 < --f;

                )
                  (o = l[f]), (a = new g(o.x, o.y, a));
                this._prev = new g(0, 0, 0 !== a.t ? a : a.next);
              },
              !0
            )).prototype =
              new _()).constructor = n),
            (p.getRatio = function (t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t; ) e = e.next;
                e = e.prev;
              } else for (; e.prev && e.t >= t; ) e = e.prev;
              return (this._prev = e).v + ((t - e.t) / e.gap) * e.c;
            }),
            (p.config = function (t) {
              return new n(t);
            }),
            (n.ease = new n()),
            c(
              "Bounce",
              l("BounceOut", function (t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              }),
              l("BounceIn", function (t) {
                return 1 / 2.75 > (t = 1 - t)
                  ? 1 - 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                  : t < 2.5 / 2.75
                  ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                  : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
              }),
              l("BounceInOut", function (t) {
                var e = t < 0.5;
                return (
                  (t =
                    (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                      ? 7.5625 * t * t
                      : t < 2 / 2.75
                      ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                      : t < 2.5 / 2.75
                      ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                      : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                  e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                );
              })
            ),
            c(
              "Circ",
              l("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t);
              }),
              l("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
              }),
              l("CircInOut", function (t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              })
            ),
            c(
              "Elastic",
              (t = function (t, e, n) {
                var i = s(
                    "easing." + t,
                    function (t, e) {
                      (this._p1 = 1 <= t ? t : 1),
                        (this._p2 = (e || n) / (t < 1 ? t : 1)),
                        (this._p3 =
                          (this._p2 / o) * (Math.asin(1 / this._p1) || 0)),
                        (this._p2 = o / this._p2);
                    },
                    !0
                  ),
                  r = (i.prototype = new _());
                return (
                  (r.constructor = i),
                  (r.getRatio = e),
                  (r.config = function (t, e) {
                    return new i(t, e);
                  }),
                  i
                );
              })(
                "ElasticOut",
                function (t) {
                  return (
                    this._p1 *
                      Math.pow(2, -10 * t) *
                      Math.sin((t - this._p3) * this._p2) +
                    1
                  );
                },
                0.3
              ),
              t(
                "ElasticIn",
                function (t) {
                  return (
                    -this._p1 *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin((t - this._p3) * this._p2)
                  );
                },
                0.3
              ),
              t(
                "ElasticInOut",
                function (t) {
                  return (t *= 2) < 1
                    ? -0.5 *
                        this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2)
                    : 0.5 *
                        this._p1 *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) +
                        1;
                },
                0.45
              )
            ),
            c(
              "Expo",
              l("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t);
              }),
              l("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - 0.001;
              }),
              l("ExpoInOut", function (t) {
                return (t *= 2) < 1
                  ? 0.5 * Math.pow(2, 10 * (t - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
              })
            ),
            c(
              "Sine",
              l("SineOut", function (t) {
                return Math.sin(t * a);
              }),
              l("SineIn", function (t) {
                return 1 - Math.cos(t * a);
              }),
              l("SineInOut", function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
              })
            ),
            s(
              "easing.EaseLookup",
              {
                find: function (t) {
                  return _.map[t];
                },
              },
              !0
            ),
            u(i.SlowMo, "SlowMo", "ease,"),
            u(n, "RoughEase", "ease,"),
            u(e, "SteppedEase", "ease,"),
            h
          );
        },
        !0
      );
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (h, d) {
    "use strict";
    var e,
      n,
      p = (h.GreenSockGlobals = h.GreenSockGlobals || h);
    if (!p.TweenLite) {
      var t,
        i,
        r,
        m,
        _,
        g = function (t) {
          var e,
            n = t.split("."),
            i = p;
          for (e = 0; n.length > e; e++) i[n[e]] = i = i[n[e]] || {};
          return i;
        },
        f = g("com.greensock"),
        v = 1e-10,
        l = function (t) {
          var e,
            n = [],
            i = t.length;
          for (e = 0; e !== i; n.push(t[e++]));
          return n;
        },
        y = function () {},
        b =
          ((e = Object.prototype.toString),
          (n = e.call([])),
          function (t) {
            return (
              null != t &&
              (t instanceof Array ||
                ("object" == typeof t && !!t.push && e.call(t) === n))
            );
          }),
        x = {},
        w = function (s, l, u, c) {
          (this.sc = x[s] ? x[s].sc : []),
            ((x[s] = this).gsClass = null),
            (this.func = u);
          var f = [];
          (this.check = function (t) {
            for (var e, n, i, r, o = l.length, a = o; -1 < --o; )
              (e = x[l[o]] || new w(l[o], [])).gsClass
                ? ((f[o] = e.gsClass), a--)
                : t && e.sc.push(this);
            if (0 === a && u)
              for (
                i = (n = ("com.greensock." + s).split(".")).pop(),
                  r = g(n.join("."))[i] = this.gsClass = u.apply(u, f),
                  c &&
                    ((p[i] = r),
                    "function" == typeof define && define.amd
                      ? define(
                          (h.GreenSockAMDPath ? h.GreenSockAMDPath + "/" : "") +
                            s.split(".").pop(),
                          [],
                          function () {
                            return r;
                          }
                        )
                      : s === d &&
                        "undefined" != typeof module &&
                        module.exports &&
                        (module.exports = r)),
                  o = 0;
                this.sc.length > o;
                o++
              )
                this.sc[o].check();
          }),
            this.check(!0);
        },
        o = (h._gsDefine = function (t, e, n, i) {
          return new w(t, e, n, i);
        }),
        T = (f._class = function (t, e, n) {
          return (
            (e = e || function () {}),
            o(
              t,
              [],
              function () {
                return e;
              },
              n
            ),
            e
          );
        });
      o.globals = p;
      var a = [0, 0, 1, 1],
        s = [],
        c = T(
          "easing.Ease",
          function (t, e, n, i) {
            (this._func = t),
              (this._type = n || 0),
              (this._power = i || 0),
              (this._params = e ? a.concat(e) : a);
          },
          !0
        ),
        S = (c.map = {}),
        u = (c.register = function (t, e, n, i) {
          for (
            var r,
              o,
              a,
              s,
              l = e.split(","),
              u = l.length,
              c = (n || "easeIn,easeOut,easeInOut").split(",");
            -1 < --u;

          )
            for (
              o = l[u],
                r = i ? T("easing." + o, null, !0) : f.easing[o] || {},
                a = c.length;
              -1 < --a;

            )
              (s = c[a]),
                (S[o + "." + s] =
                  S[s + o] =
                  r[s] =
                    t.getRatio ? t : t[s] || new t());
        });
      for (
        (r = c.prototype)._calcEnd = !1,
          r.getRatio = function (t) {
            if (this._func)
              return (
                (this._params[0] = t), this._func.apply(null, this._params)
              );
            var e = this._type,
              n = this._power,
              i = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
            return (
              1 === n
                ? (i *= i)
                : 2 === n
                ? (i *= i * i)
                : 3 === n
                ? (i *= i * i * i)
                : 4 === n && (i *= i * i * i * i),
              1 === e ? 1 - i : 2 === e ? i : t < 0.5 ? i / 2 : 1 - i / 2
            );
          },
          i = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
        -1 < --i;

      )
        (r = t[i] + ",Power" + i),
          u(new c(null, null, 1, i), r, "easeOut", !0),
          u(
            new c(null, null, 2, i),
            r,
            "easeIn" + (0 === i ? ",easeNone" : "")
          ),
          u(new c(null, null, 3, i), r, "easeInOut");
      (S.linear = f.easing.Linear.easeIn), (S.swing = f.easing.Quad.easeInOut);
      var C = T("events.EventDispatcher", function (t) {
        (this._listeners = {}), (this._eventTarget = t || this);
      });
      ((r = C.prototype).addEventListener = function (t, e, n, i, r) {
        r = r || 0;
        var o,
          a,
          s = this._listeners[t],
          l = 0;
        for (
          null == s && (this._listeners[t] = s = []), a = s.length;
          -1 < --a;

        )
          (o = s[a]).c === e && o.s === n
            ? s.splice(a, 1)
            : 0 === l && r > o.pr && (l = a + 1);
        s.splice(l, 0, { c: e, s: n, up: i, pr: r }),
          this !== m || _ || m.wake();
      }),
        (r.removeEventListener = function (t, e) {
          var n,
            i = this._listeners[t];
          if (i)
            for (n = i.length; -1 < --n; )
              if (i[n].c === e) return void i.splice(n, 1);
        }),
        (r.dispatchEvent = function (t) {
          var e,
            n,
            i,
            r = this._listeners[t];
          if (r)
            for (e = r.length, n = this._eventTarget; -1 < --e; )
              (i = r[e]) &&
                (i.up
                  ? i.c.call(i.s || n, { type: t, target: n })
                  : i.c.call(i.s || n));
        });
      var k = h.requestAnimationFrame,
        A = h.cancelAnimationFrame,
        P =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        O = P();
      for (i = (t = ["ms", "moz", "webkit", "o"]).length; -1 < --i && !k; )
        (k = h[t[i] + "RequestAnimationFrame"]),
          (A =
            h[t[i] + "CancelAnimationFrame"] ||
            h[t[i] + "CancelRequestAnimationFrame"]);
      T("Ticker", function (t, e) {
        var r,
          o,
          a,
          s,
          l,
          u = this,
          c = P(),
          n = !1 !== e && k,
          f = 500,
          h = 33,
          d = "tick",
          p = function (t) {
            var e,
              n,
              i = P() - O;
            f < i && (c += i - h),
              (O += i),
              (u.time = (O - c) / 1e3),
              (e = u.time - l),
              (!r || 0 < e || !0 === t) &&
                (u.frame++, (l += e + (s <= e ? 0.004 : s - e)), (n = !0)),
              !0 !== t && (a = o(p)),
              n && u.dispatchEvent(d);
          };
        C.call(u),
          (u.time = u.frame = 0),
          (u.tick = function () {
            p(!0);
          }),
          (u.lagSmoothing = function (t, e) {
            (f = t || 1 / v), (h = Math.min(e, f, 0));
          }),
          (u.sleep = function () {
            null != a &&
              (n && A ? A(a) : clearTimeout(a),
              (o = y),
              (a = null),
              u === m && (_ = !1));
          }),
          (u.wake = function () {
            null !== a ? u.sleep() : 10 < u.frame && (O = P() - f + 5),
              (o =
                0 === r
                  ? y
                  : n && k
                  ? k
                  : function (t) {
                      return setTimeout(t, 0 | (1e3 * (l - u.time) + 1));
                    }),
              u === m && (_ = !0),
              p(2);
          }),
          (u.fps = function (t) {
            return arguments.length
              ? ((s = 1 / ((r = t) || 60)), (l = this.time + s), void u.wake())
              : r;
          }),
          (u.useRAF = function (t) {
            return arguments.length ? (u.sleep(), (n = t), void u.fps(r)) : n;
          }),
          u.fps(t),
          setTimeout(function () {
            n && u.frame < 5 && u.useRAF(!1);
          }, 1500);
      }),
        ((r = f.Ticker.prototype = new f.events.EventDispatcher()).constructor =
          f.Ticker);
      var j = T("core.Animation", function (t, e) {
        if (
          ((this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = !0 === e.immediateRender),
          (this.data = e.data),
          (this._reversed = !0 === e.reversed),
          U)
        ) {
          _ || m.wake();
          var n = this.vars.useFrames ? X : U;
          n.add(this, n._time), this.vars.paused && this.paused(!0);
        }
      });
      (m = j.ticker = new f.Ticker()),
        ((r = j.prototype)._dirty = r._gc = r._initted = r._paused = !1),
        (r._totalTime = r._time = 0),
        (r._rawPrevTime = -1),
        (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
        (r._paused = !1);
      var E = function () {
        _ && 2e3 < P() - O && m.wake(), setTimeout(E, 2e3);
      };
      E(),
        (r.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (r.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (r.resume = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!1);
        }),
        (r.seek = function (t, e) {
          return this.totalTime(Number(t), !1 !== e);
        }),
        (r.restart = function (t, e) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(t ? -this._delay : 0, !1 !== e, !0);
        }),
        (r.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (r.render = function () {}),
        (r.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (this._gc || !this.timeline) && this._enabled(!0),
            this
          );
        }),
        (r.isActive = function () {
          var t,
            e = this._timeline,
            n = this._startTime;
          return (
            !e ||
            (!this._gc &&
              !this._paused &&
              e.isActive() &&
              (t = e.rawTime()) >= n &&
              n + this.totalDuration() / this._timeScale > t)
          );
        }),
        (r._enabled = function (t, e) {
          return (
            _ || m.wake(),
            (this._gc = !t),
            (this._active = this.isActive()),
            !0 !== e &&
              (t && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (r._kill = function () {
          return this._enabled(!1, !1);
        }),
        (r.kill = function (t, e) {
          return this._kill(t, e), this;
        }),
        (r._uncache = function (t) {
          for (var e = t ? this : this.timeline; e; )
            (e._dirty = !0), (e = e.timeline);
          return this;
        }),
        (r._swapSelfInParams = function (t) {
          for (var e = t.length, n = t.concat(); -1 < --e; )
            "{self}" === t[e] && (n[e] = this);
          return n;
        }),
        (r._callback = function (t) {
          var e = this.vars;
          e[t].apply(
            e[t + "Scope"] || e.callbackScope || this,
            e[t + "Params"] || s
          );
        }),
        (r.eventCallback = function (t, e, n, i) {
          if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e
              ? delete r[t]
              : ((r[t] = e),
                (r[t + "Params"] =
                  b(n) && -1 !== n.join("").indexOf("{self}")
                    ? this._swapSelfInParams(n)
                    : n),
                (r[t + "Scope"] = i)),
              "onUpdate" === t && (this._onUpdate = e);
          }
          return this;
        }),
        (r.delay = function (t) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (r.duration = function (t) {
          return arguments.length
            ? ((this._duration = this._totalDuration = t),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                0 < this._time &&
                this._time < this._duration &&
                0 !== t &&
                this.totalTime(this._totalTime * (t / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (r.totalDuration = function (t) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(t) : this._totalDuration
          );
        }),
        (r.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(t > this._duration ? this._duration : t, e))
            : this._time;
        }),
        (r.totalTime = function (t, e, n) {
          if ((_ || m.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (t < 0 && !n && (t += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var i = this._totalDuration,
                r = this._timeline;
              if (
                (i < t && !n && (t = i),
                (this._startTime =
                  (this._paused ? this._pauseTime : r._time) -
                  (this._reversed ? i - t : t) / this._timeScale),
                r._dirty || this._uncache(!1),
                r._timeline)
              )
                for (; r._timeline; )
                  r._timeline._time !==
                    (r._startTime + r._totalTime) / r._timeScale &&
                    r.totalTime(r._totalTime, !0),
                    (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== t || 0 === this._duration) &&
                (this.render(t, e, !1), L.length && V());
          }
          return this;
        }),
        (r.progress = r.totalProgress =
          function (t, e) {
            return arguments.length
              ? this.totalTime(this.duration() * t, e)
              : this._time / this.duration();
          }),
        (r.startTime = function (t) {
          return arguments.length
            ? (t !== this._startTime &&
                ((this._startTime = t),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, t - this._delay)),
              this)
            : this._startTime;
        }),
        (r.endTime = function (t) {
          return (
            this._startTime +
            (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (r.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          if (
            ((t = t || v), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var e = this._pauseTime,
              n = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = n - ((n - this._startTime) * this._timeScale) / t;
          }
          return (this._timeScale = t), this._uncache(!1);
        }),
        (r.reversed = function (t) {
          return arguments.length
            ? (t != this._reversed &&
                ((this._reversed = t),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (r.paused = function (t) {
          if (!arguments.length) return this._paused;
          var e,
            n,
            i = this._timeline;
          return (
            t != this._paused &&
              i &&
              (_ || t || m.wake(),
              (n = (e = i.rawTime()) - this._pauseTime),
              !t &&
                i.smoothChildTiming &&
                ((this._startTime += n), this._uncache(!1)),
              (this._pauseTime = t ? e : null),
              (this._paused = t),
              (this._active = this.isActive()),
              !t &&
                0 !== n &&
                this._initted &&
                this.duration() &&
                this.render(
                  i.smoothChildTiming
                    ? this._totalTime
                    : (e - this._startTime) / this._timeScale,
                  !0,
                  !0
                )),
            this._gc && !t && this._enabled(!0, !1),
            this
          );
        });
      var R = T("core.SimpleTimeline", function (t) {
        j.call(this, 0, t),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      ((r = R.prototype = new j()).constructor = R),
        (r.kill()._gc = !1),
        (r._first = r._last = r._recent = null),
        (r._sortChildren = !1),
        (r.add = r.insert =
          function (t, e) {
            var n, i;
            if (
              ((t._startTime = Number(e || 0) + t._delay),
              t._paused &&
                this !== t._timeline &&
                (t._pauseTime =
                  t._startTime +
                  (this.rawTime() - t._startTime) / t._timeScale),
              t.timeline && t.timeline._remove(t, !0),
              (t.timeline = t._timeline = this),
              t._gc && t._enabled(!0, !0),
              (n = this._last),
              this._sortChildren)
            )
              for (i = t._startTime; n && n._startTime > i; ) n = n._prev;
            return (
              n
                ? ((t._next = n._next), (n._next = t))
                : ((t._next = this._first), (this._first = t)),
              t._next ? (t._next._prev = t) : (this._last = t),
              (t._prev = n),
              (this._recent = t),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (r._remove = function (t, e) {
          return (
            t.timeline === this &&
              (e || t._enabled(!1, !0),
              t._prev
                ? (t._prev._next = t._next)
                : this._first === t && (this._first = t._next),
              t._next
                ? (t._next._prev = t._prev)
                : this._last === t && (this._last = t._prev),
              (t._next = t._prev = t.timeline = null),
              t === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (r.render = function (t, e, n) {
          var i,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            (i = r._next),
              (r._active || (t >= r._startTime && !r._paused)) &&
                (r._reversed
                  ? r.render(
                      (r._dirty ? r.totalDuration() : r._totalDuration) -
                        (t - r._startTime) * r._timeScale,
                      e,
                      n
                    )
                  : r.render((t - r._startTime) * r._timeScale, e, n)),
              (r = i);
        }),
        (r.rawTime = function () {
          return _ || m.wake(), this._totalTime;
        });
      var D = T(
          "TweenLite",
          function (t, e, n) {
            if (
              (j.call(this, e, n),
              (this.render = D.prototype.render),
              null == t)
            )
              throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : D.selector(t) || t;
            var i,
              r,
              o,
              a =
                t.jquery ||
                (t.length &&
                  t !== h &&
                  t[0] &&
                  (t[0] === h || (t[0].nodeType && t[0].style && !t.nodeType))),
              s = this.vars.overwrite;
            if (
              ((this._overwrite = s =
                null == s
                  ? W[D.defaultOverwrite]
                  : "number" == typeof s
                  ? s >> 0
                  : W[s]),
              (a || t instanceof Array || (t.push && b(t))) &&
                "number" != typeof t[0])
            )
              for (
                this._targets = o = l(t),
                  this._propLookup = [],
                  this._siblings = [],
                  i = 0;
                o.length > i;
                i++
              )
                (r = o[i])
                  ? "string" != typeof r
                    ? r.length &&
                      r !== h &&
                      r[0] &&
                      (r[0] === h ||
                        (r[0].nodeType && r[0].style && !r.nodeType))
                      ? (o.splice(i--, 1), (this._targets = o = o.concat(l(r))))
                      : ((this._siblings[i] = Y(r, this, !1)),
                        1 === s &&
                          1 < this._siblings[i].length &&
                          Z(r, this, null, 1, this._siblings[i]))
                    : "string" == typeof (r = o[i--] = D.selector(r)) &&
                      o.splice(i + 1, 1)
                  : o.splice(i--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = Y(t, this, !1)),
                1 === s &&
                  1 < this._siblings.length &&
                  Z(t, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === e &&
                0 === this._delay &&
                !1 !== this.vars.immediateRender)) &&
              ((this._time = -v), this.render(-this._delay));
          },
          !0
        ),
        N = function (t) {
          return (
            t &&
            t.length &&
            t !== h &&
            t[0] &&
            (t[0] === h || (t[0].nodeType && t[0].style && !t.nodeType))
          );
        },
        M = function (t, e) {
          var n,
            i = {};
          for (n in t)
            q[n] ||
              (n in e &&
                "transform" !== n &&
                "x" !== n &&
                "y" !== n &&
                "width" !== n &&
                "height" !== n &&
                "className" !== n &&
                "border" !== n) ||
              !(!B[n] || (B[n] && B[n]._autoCSS)) ||
              ((i[n] = t[n]), delete t[n]);
          t.css = i;
        };
      ((r = D.prototype = new j()).constructor = D),
        (r.kill()._gc = !1),
        (r.ratio = 0),
        (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
        (r._notifyPluginsOfEnabled = r._lazy = !1),
        (D.version = "1.17.0"),
        (D.defaultEase = r._ease = new c(null, null, 1, 1)),
        (D.defaultOverwrite = "auto"),
        (D.ticker = m),
        (D.autoSleep = 120),
        (D.lagSmoothing = function (t, e) {
          m.lagSmoothing(t, e);
        }),
        (D.selector =
          h.$ ||
          h.jQuery ||
          function (t) {
            var e = h.$ || h.jQuery;
            return e
              ? (D.selector = e)(t)
              : "undefined" == typeof document
              ? t
              : document.querySelectorAll
              ? document.querySelectorAll(t)
              : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
          });
      var L = [],
        I = {},
        F = (D._internals = { isArray: b, isSelector: N, lazyTweens: L }),
        B = (D._plugins = {}),
        z = (F.tweenLookup = {}),
        H = 0,
        q = (F.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
        }),
        W = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        X = (j._rootFramesTimeline = new R()),
        U = (j._rootTimeline = new R()),
        $ = 30,
        V = (F.lazyRender = function () {
          var t,
            e = L.length;
          for (I = {}; -1 < --e; )
            (t = L[e]) &&
              !1 !== t._lazy &&
              (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
          L.length = 0;
        });
      (U._startTime = m.time),
        (X._startTime = m.frame),
        (U._active = X._active = !0),
        setTimeout(V, 1),
        (j._updateRoot = D.render =
          function () {
            var t, e, n;
            if (
              (L.length && V(),
              U.render((m.time - U._startTime) * U._timeScale, !1, !1),
              X.render((m.frame - X._startTime) * X._timeScale, !1, !1),
              L.length && V(),
              m.frame >= $)
            ) {
              for (n in (($ = m.frame + (parseInt(D.autoSleep, 10) || 120)),
              z)) {
                for (t = (e = z[n].tweens).length; -1 < --t; )
                  e[t]._gc && e.splice(t, 1);
                0 === e.length && delete z[n];
              }
              if (
                (!(n = U._first) || n._paused) &&
                D.autoSleep &&
                !X._first &&
                1 === m._listeners.tick.length
              ) {
                for (; n && n._paused; ) n = n._next;
                n || m.sleep();
              }
            }
          }),
        m.addEventListener("tick", j._updateRoot);
      var Y = function (t, e, n) {
          var i,
            r,
            o = t._gsTweenID;
          if (
            (z[o || (t._gsTweenID = o = "t" + H++)] ||
              (z[o] = { target: t, tweens: [] }),
            e && (((i = z[o].tweens)[(r = i.length)] = e), n))
          )
            for (; -1 < --r; ) i[r] === e && i.splice(r, 1);
          return z[o].tweens;
        },
        Q = function (t, e, n, i) {
          var r,
            o,
            a = t.vars.onOverwrite;
          return (
            a && (r = a(t, e, n, i)),
            (a = D.onOverwrite) && (o = a(t, e, n, i)),
            !1 !== r && !1 !== o
          );
        },
        Z = function (t, e, n, i, r) {
          var o, a, s, l;
          if (1 === i || 4 <= i) {
            for (l = r.length, o = 0; o < l; o++)
              if ((s = r[o]) !== e) s._gc || (s._kill(null, t, e) && (a = !0));
              else if (5 === i) break;
            return a;
          }
          var u,
            c = e._startTime + v,
            f = [],
            h = 0,
            d = 0 === e._duration;
          for (o = r.length; -1 < --o; )
            (s = r[o]) === e ||
              s._gc ||
              s._paused ||
              (s._timeline !== e._timeline
                ? ((u = u || G(e, 0, d)), 0 === G(s, u, d) && (f[h++] = s))
                : c >= s._startTime &&
                  s._startTime + s.totalDuration() / s._timeScale > c &&
                  (((d || !s._initted) && c - s._startTime <= 2e-10) ||
                    (f[h++] = s)));
          for (o = h; -1 < --o; )
            if (
              ((s = f[o]),
              2 === i && s._kill(n, t, e) && (a = !0),
              2 !== i || (!s._firstPT && s._initted))
            ) {
              if (2 !== i && !Q(s, e)) continue;
              s._enabled(!1, !1) && (a = !0);
            }
          return a;
        },
        G = function (t, e, n) {
          for (
            var i = t._timeline, r = i._timeScale, o = t._startTime;
            i._timeline;

          ) {
            if (((o += i._startTime), (r *= i._timeScale), i._paused))
              return -100;
            i = i._timeline;
          }
          return e < (o /= r)
            ? o - e
            : (n && o === e) || (!t._initted && o - e < 2 * v)
            ? v
            : (o += t.totalDuration() / t._timeScale / r) > e + v
            ? 0
            : o - e - v;
        };
      (r._init = function () {
        var t,
          e,
          n,
          i,
          r,
          o = this.vars,
          a = this._overwrittenProps,
          s = this._duration,
          l = !!o.immediateRender,
          u = o.ease;
        if (o.startAt) {
          for (i in (this._startAt &&
            (this._startAt.render(-1, !0), this._startAt.kill()),
          (r = {}),
          o.startAt))
            r[i] = o.startAt[i];
          if (
            ((r.overwrite = !1),
            (r.immediateRender = !0),
            (r.lazy = l && !1 !== o.lazy),
            (r.startAt = r.delay = null),
            (this._startAt = D.to(this.target, 0, r)),
            l)
          )
            if (0 < this._time) this._startAt = null;
            else if (0 !== s) return;
        } else if (o.runBackwards && 0 !== s)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            for (i in (0 !== this._time && (l = !1), (n = {}), o))
              (q[i] && "autoCSS" !== i) || (n[i] = o[i]);
            if (
              ((n.overwrite = 0),
              (n.data = "isFromStart"),
              (n.lazy = l && !1 !== o.lazy),
              (n.immediateRender = l),
              (this._startAt = D.to(this.target, 0, n)),
              l)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = u =
            u
              ? u instanceof c
                ? u
                : "function" == typeof u
                ? new c(u, o.easeParams)
                : S[u] || D.defaultEase
              : D.defaultEase),
          o.easeParams instanceof Array &&
            u.config &&
            (this._ease = u.config.apply(u, o.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (t = this._targets.length; -1 < --t; )
            this._initProps(
              this._targets[t],
              (this._propLookup[t] = {}),
              this._siblings[t],
              a ? a[t] : null
            ) && (e = !0);
        else
          e = this._initProps(this.target, this._propLookup, this._siblings, a);
        if (
          (e && D._onPluginEvent("_onInitAllProps", this),
          a &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          o.runBackwards)
        )
          for (n = this._firstPT; n; )
            (n.s += n.c), (n.c = -n.c), (n = n._next);
        (this._onUpdate = o.onUpdate), (this._initted = !0);
      }),
        (r._initProps = function (t, e, n, i) {
          var r, o, a, s, l, u;
          if (null == t) return !1;
          for (r in (I[t._gsTweenID] && V(),
          this.vars.css ||
            (t.style &&
              t !== h &&
              t.nodeType &&
              B.css &&
              !1 !== this.vars.autoCSS &&
              M(this.vars, t)),
          this.vars)) {
            if (((u = this.vars[r]), q[r]))
              u &&
                (u instanceof Array || (u.push && b(u))) &&
                -1 !== u.join("").indexOf("{self}") &&
                (this.vars[r] = u = this._swapSelfInParams(u, this));
            else if (
              B[r] &&
              (s = new B[r]())._onInitTween(t, this.vars[r], this)
            ) {
              for (
                this._firstPT = l =
                  {
                    _next: this._firstPT,
                    t: s,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: r,
                    pg: !0,
                    pr: s._priority,
                  },
                  o = s._overwriteProps.length;
                -1 < --o;

              )
                e[s._overwriteProps[o]] = this._firstPT;
              (s._priority || s._onInitAllProps) && (a = !0),
                (s._onDisable || s._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0);
            } else
              (this._firstPT =
                e[r] =
                l =
                  {
                    _next: this._firstPT,
                    t: t,
                    p: r,
                    f: "function" == typeof t[r],
                    n: r,
                    pg: !1,
                    pr: 0,
                  }),
                (l.s = l.f
                  ? t[
                      r.indexOf("set") ||
                      "function" != typeof t["get" + r.substr(3)]
                        ? r
                        : "get" + r.substr(3)
                    ]()
                  : parseFloat(t[r])),
                (l.c =
                  "string" == typeof u && "=" === u.charAt(1)
                    ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2))
                    : Number(u) - l.s || 0);
            l && l._next && (l._next._prev = l);
          }
          return i && this._kill(i, t)
            ? this._initProps(t, e, n, i)
            : 1 < this._overwrite &&
              this._firstPT &&
              1 < n.length &&
              Z(t, this, e, this._overwrite, n)
            ? (this._kill(e, t), this._initProps(t, e, n, i))
            : (this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (I[t._gsTweenID] = !0),
              a);
        }),
        (r.render = function (t, e, n) {
          var i,
            r,
            o,
            a,
            s = this._time,
            l = this._duration,
            u = this._rawPrevTime;
          if (l <= t)
            (this._totalTime = this._time = l),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((i = !0),
                (r = "onComplete"),
                (n = n || this._timeline.autoRemoveChildren)),
              0 === l &&
                (this._initted || !this.vars.lazy || n) &&
                (this._startTime === this._timeline._duration && (t = 0),
                (0 === t || u < 0 || (u === v && "isPause" !== this.data)) &&
                  u !== t &&
                  ((n = !0), v < u && (r = "onReverseComplete")),
                (this._rawPrevTime = a = !e || t || u === t ? t : v));
          else if (t < 1e-7)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== s || (0 === l && 0 < u)) &&
                ((r = "onReverseComplete"), (i = this._reversed)),
              t < 0 &&
                ((this._active = !1),
                0 === l &&
                  (this._initted || !this.vars.lazy || n) &&
                  (0 <= u && (u !== v || "isPause" !== this.data) && (n = !0),
                  (this._rawPrevTime = a = !e || t || u === t ? t : v))),
              this._initted || (n = !0);
          else if (((this._totalTime = this._time = t), this._easeType)) {
            var c = t / l,
              f = this._easeType,
              h = this._easePower;
            (1 === f || (3 === f && 0.5 <= c)) && (c = 1 - c),
              3 === f && (c *= 2),
              1 === h
                ? (c *= c)
                : 2 === h
                ? (c *= c * c)
                : 3 === h
                ? (c *= c * c * c)
                : 4 === h && (c *= c * c * c * c),
              (this.ratio =
                1 === f
                  ? 1 - c
                  : 2 === f
                  ? c
                  : t / l < 0.5
                  ? c / 2
                  : 1 - c / 2);
          } else this.ratio = this._ease.getRatio(t / l);
          if (this._time !== s || n) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !n &&
                this._firstPT &&
                ((!1 !== this.vars.lazy && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = s),
                  (this._rawPrevTime = u),
                  L.push(this),
                  void (this._lazy = [t, e])
                );
              this._time && !i
                ? (this.ratio = this._ease.getRatio(this._time / l))
                : i &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== s &&
                    0 <= t &&
                    (this._active = !0)),
                0 === s &&
                  (this._startAt &&
                    (0 <= t
                      ? this._startAt.render(t, e, n)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === l) &&
                    (e || this._callback("onStart"))),
                o = this._firstPT;
              o;

            )
              o.f
                ? o.t[o.p](o.c * this.ratio + o.s)
                : (o.t[o.p] = o.c * this.ratio + o.s),
                (o = o._next);
            this._onUpdate &&
              (t < 0 &&
                this._startAt &&
                -1e-4 !== t &&
                this._startAt.render(t, e, n),
              e || ((this._time !== s || i) && this._callback("onUpdate"))),
              r &&
                (!this._gc || n) &&
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  -1e-4 !== t &&
                  this._startAt.render(t, e, n),
                i &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e && this.vars[r] && this._callback(r),
                0 === l &&
                  this._rawPrevTime === v &&
                  a !== v &&
                  (this._rawPrevTime = 0));
          }
        }),
        (r._kill = function (t, e, n) {
          if (
            ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          e =
            "string" != typeof e
              ? e || this._targets || this.target
              : D.selector(e) || e;
          var i,
            r,
            o,
            a,
            s,
            l,
            u,
            c,
            f,
            h =
              n &&
              this._time &&
              n._startTime === this._startTime &&
              this._timeline === n._timeline;
          if ((b(e) || N(e)) && "number" != typeof e[0])
            for (i = e.length; -1 < --i; ) this._kill(t, e[i], n) && (l = !0);
          else {
            if (this._targets) {
              for (i = this._targets.length; -1 < --i; )
                if (e === this._targets[i]) {
                  (s = this._propLookup[i] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (r = this._overwrittenProps[i] =
                      t ? this._overwrittenProps[i] || {} : "all");
                  break;
                }
            } else {
              if (e !== this.target) return !1;
              (s = this._propLookup),
                (r = this._overwrittenProps =
                  t ? this._overwrittenProps || {} : "all");
            }
            if (s) {
              if (
                ((u = t || s),
                (c =
                  t !== r &&
                  "all" !== r &&
                  t !== s &&
                  ("object" != typeof t || !t._tempKill)),
                n && (D.onOverwrite || this.vars.onOverwrite))
              ) {
                for (o in u) s[o] && (f || (f = []), f.push(o));
                if ((f || !t) && !Q(this, n, e, f)) return !1;
              }
              for (o in u)
                (a = s[o]) &&
                  (h && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                  a.pg && a.t._kill(u) && (l = !0),
                  (a.pg && 0 !== a.t._overwriteProps.length) ||
                    (a._prev
                      ? (a._prev._next = a._next)
                      : a === this._firstPT && (this._firstPT = a._next),
                    a._next && (a._next._prev = a._prev),
                    (a._next = a._prev = null)),
                  delete s[o]),
                  c && (r[o] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (r.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              D._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            j.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -v), this.render(-this._delay)),
            this
          );
        }),
        (r._enabled = function (t, e) {
          if ((_ || m.wake(), t && this._gc)) {
            var n,
              i = this._targets;
            if (i)
              for (n = i.length; -1 < --n; )
                this._siblings[n] = Y(i[n], this, !0);
            else this._siblings = Y(this.target, this, !0);
          }
          return (
            j.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
              D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
          );
        }),
        (D.to = function (t, e, n) {
          return new D(t, e, n);
        }),
        (D.from = function (t, e, n) {
          return (
            (n.runBackwards = !0),
            (n.immediateRender = 0 != n.immediateRender),
            new D(t, e, n)
          );
        }),
        (D.fromTo = function (t, e, n, i) {
          return (
            (i.startAt = n),
            (i.immediateRender =
              0 != i.immediateRender && 0 != n.immediateRender),
            new D(t, e, i)
          );
        }),
        (D.delayedCall = function (t, e, n, i, r) {
          return new D(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: n,
            callbackScope: i,
            onReverseComplete: e,
            onReverseCompleteParams: n,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (D.set = function (t, e) {
          return new D(t, 0, e);
        }),
        (D.getTweensOf = function (t, e) {
          if (null == t) return [];
          var n, i, r, o;
          if (
            ((t = "string" != typeof t ? t : D.selector(t) || t),
            (b(t) || N(t)) && "number" != typeof t[0])
          ) {
            for (n = t.length, i = []; -1 < --n; )
              i = i.concat(D.getTweensOf(t[n], e));
            for (n = i.length; -1 < --n; )
              for (o = i[n], r = n; -1 < --r; ) o === i[r] && i.splice(n, 1);
          } else
            for (n = (i = Y(t).concat()).length; -1 < --n; )
              (i[n]._gc || (e && !i[n].isActive())) && i.splice(n, 1);
          return i;
        }),
        (D.killTweensOf = D.killDelayedCallsTo =
          function (t, e, n) {
            "object" == typeof e && ((n = e), (e = !1));
            for (var i = D.getTweensOf(t, e), r = i.length; -1 < --r; )
              i[r]._kill(n, t);
          });
      var K = T(
        "plugins.TweenPlugin",
        function (t, e) {
          (this._overwriteProps = (t || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = e || 0),
            (this._super = K.prototype);
        },
        !0
      );
      if (
        ((r = K.prototype),
        (K.version = "1.10.1"),
        (K.API = 2),
        (r._firstPT = null),
        (r._addTween = function (t, e, n, i, r, o) {
          var a, s;
          return null != i &&
            (a =
              "number" == typeof i || "=" !== i.charAt(1)
                ? Number(i) - Number(n)
                : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2)))
            ? ((this._firstPT = s =
                {
                  _next: this._firstPT,
                  t: t,
                  p: e,
                  s: n,
                  c: a,
                  f: "function" == typeof t[e],
                  n: r || e,
                  r: o,
                }),
              s._next && (s._next._prev = s),
              s)
            : void 0;
        }),
        (r.setRatio = function (t) {
          for (var e, n = this._firstPT, i = 1e-6; n; )
            (e = n.c * t + n.s),
              n.r ? (e = Math.round(e)) : e < i && -i < e && (e = 0),
              n.f ? n.t[n.p](e) : (n.t[n.p] = e),
              (n = n._next);
        }),
        (r._kill = function (t) {
          var e,
            n = this._overwriteProps,
            i = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else for (e = n.length; -1 < --e; ) null != t[n[e]] && n.splice(e, 1);
          for (; i; )
            null != t[i.n] &&
              (i._next && (i._next._prev = i._prev),
              i._prev
                ? ((i._prev._next = i._next), (i._prev = null))
                : this._firstPT === i && (this._firstPT = i._next)),
              (i = i._next);
          return !1;
        }),
        (r._roundProps = function (t, e) {
          for (var n = this._firstPT; n; )
            (t[this._propName] ||
              (null != n.n && t[n.n.split(this._propName + "_").join("")])) &&
              (n.r = e),
              (n = n._next);
        }),
        (D._onPluginEvent = function (t, e) {
          var n,
            i,
            r,
            o,
            a,
            s = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; s; ) {
              for (a = s._next, i = r; i && i.pr > s.pr; ) i = i._next;
              (s._prev = i ? i._prev : o) ? (s._prev._next = s) : (r = s),
                (s._next = i) ? (i._prev = s) : (o = s),
                (s = a);
            }
            s = e._firstPT = r;
          }
          for (; s; )
            s.pg && "function" == typeof s.t[t] && s.t[t]() && (n = !0),
              (s = s._next);
          return n;
        }),
        (K.activate = function (t) {
          for (var e = t.length; -1 < --e; )
            t[e].API === K.API && (B[new t[e]()._propName] = t[e]);
          return !0;
        }),
        (o.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
          var e,
            n = t.propName,
            i = t.priority || 0,
            r = t.overwriteProps,
            o = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps",
            },
            a = T(
              "plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin",
              function () {
                K.call(this, n, i), (this._overwriteProps = r || []);
              },
              !0 === t.global
            ),
            s = (a.prototype = new K(n));
          for (e in (((s.constructor = a).API = t.API), o))
            "function" == typeof t[e] && (s[o[e]] = t[e]);
          return (a.version = t.version), K.activate([a]), a;
        }),
        (t = h._gsQueue))
      ) {
        for (i = 0; t.length > i; i++) t[i]();
        for (r in x)
          x[r].func ||
            h.console.log(
              "GSAP encountered missing dependency: com.greensock." + r
            );
      }
      _ = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  ),
  (
    (_gsScope =
      "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
        ? global
        : this || window)._gsQueue || (_gsScope._gsQueue = [])
  ).push(function () {
    "use strict";
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (e, a, t) {
        var n = function (t) {
            e.call(this, t),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._dirty = !0);
          },
          S = 1e-10,
          i = a._internals,
          C = i.lazyTweens,
          k = i.lazyRender,
          s = new t(null, null, 1, 0),
          r = (n.prototype = new e());
        return (
          (r.constructor = n),
          (r.kill()._gc = !1),
          (n.version = "1.17.0"),
          (r.invalidate = function () {
            return (
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              e.prototype.invalidate.call(this)
            );
          }),
          (r.addCallback = function (t, e, n, i) {
            return this.add(a.delayedCall(0, t, n, i), e);
          }),
          (r.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var n = this.getTweensOf(t, !1),
                    i = n.length,
                    r = this._parseTimeOrLabel(e);
                  -1 < --i;

                )
                  n[i]._startTime === r && n[i]._enabled(!1, !1);
            return this;
          }),
          (r.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t);
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var n,
              i,
              r,
              o = {
                ease: s,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              };
            for (i in e) o[i] = e[i];
            return (
              (o.time = this._parseTimeOrLabel(t)),
              (n =
                Math.abs(Number(o.time) - this._time) / this._timeScale ||
                0.001),
              (r = new a(this, n, o)),
              (o.onStart = function () {
                r.target.paused(!0),
                  r.vars.time !== r.target.time() &&
                    n === r.duration() &&
                    r.duration(
                      Math.abs(r.vars.time - r.target.time()) /
                        r.target._timeScale
                    ),
                  e.onStart && r._callback("onStart");
              }),
              r
            );
          }),
          (r.tweenFromTo = function (t, e, n) {
            (n = n || {}),
              (t = this._parseTimeOrLabel(t)),
              (n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (n.immediateRender = !1 !== n.immediateRender);
            var i = this.tweenTo(e, n);
            return i.duration(
              Math.abs(i.vars.time - t) / this._timeScale || 0.001
            );
          }),
          (r.render = function (t, e, n) {
            this._gc && this._enabled(!0, !1);
            var i,
              r,
              o,
              a,
              s,
              l,
              u = this._dirty ? this.totalDuration() : this._totalDuration,
              c = this._duration,
              f = this._time,
              h = this._totalTime,
              d = this._startTime,
              p = this._timeScale,
              m = this._rawPrevTime,
              _ = this._paused,
              g = this._cycle;
            if (u <= t)
              this._locked ||
                ((this._totalTime = u), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((r = !0),
                  (a = "onComplete"),
                  (s = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    (0 === t || m < 0 || m === S) &&
                    m !== t &&
                    this._first &&
                    ((s = !0), S < m && (a = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : S),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (this._time = t = 0)
                  : (t = (this._time = c) + 1e-4);
            else if (t < 1e-7)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                ((this._time = 0) !== f ||
                  (0 === c &&
                    m !== S &&
                    (0 < m || (t < 0 && 0 <= m)) &&
                    !this._locked)) &&
                  ((a = "onReverseComplete"), (r = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((s = r = !0), (a = "onReverseComplete"))
                    : 0 <= m && this._first && (s = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    c || !e || t || this._rawPrevTime === t ? t : S),
                  0 === t && r)
                )
                  for (i = this._first; i && 0 === i._startTime; )
                    i._duration || (r = !1), (i = i._next);
                (t = 0), this._initted || (s = !0);
              }
            else
              0 === c && m < 0 && (s = !0),
                (this._time = this._rawPrevTime = t),
                this._locked ||
                  ((this._totalTime = t),
                  0 !== this._repeat &&
                    ((l = c + this._repeatDelay),
                    (this._cycle = (this._totalTime / l) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / l &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * l),
                    this._yoyo &&
                      0 != (1 & this._cycle) &&
                      (this._time = c - this._time),
                    this._time > c
                      ? (t = (this._time = c) + 1e-4)
                      : this._time < 0
                      ? (this._time = t = 0)
                      : (t = this._time)));
            if (this._cycle !== g && !this._locked) {
              var v = this._yoyo && 0 != (1 & g),
                y = v === (this._yoyo && 0 != (1 & this._cycle)),
                b = this._totalTime,
                x = this._cycle,
                w = this._rawPrevTime,
                T = this._time;
              if (
                ((this._totalTime = g * c),
                g > this._cycle ? (v = !v) : (this._totalTime += c),
                (this._time = f),
                (this._rawPrevTime = 0 === c ? m - 1e-4 : m),
                (this._cycle = g),
                (this._locked = !0),
                (f = v ? 0 : c),
                this.render(f, e, 0 === c),
                e ||
                  this._gc ||
                  (this.vars.onRepeat && this._callback("onRepeat")),
                y && ((f = v ? c + 1e-4 : -1e-4), this.render(f, !0, !1)),
                (this._locked = !1),
                this._paused && !_)
              )
                return;
              (this._time = T),
                (this._totalTime = b),
                (this._cycle = x),
                (this._rawPrevTime = w);
            }
            if ((this._time !== f && this._first) || n || s) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== h &&
                    0 < t &&
                    (this._active = !0)),
                0 === h &&
                  this.vars.onStart &&
                  0 !== this._totalTime &&
                  (e || this._callback("onStart")),
                this._time >= f)
              )
                for (
                  i = this._first;
                  i && ((o = i._next), !this._paused || _);

                )
                  (i._active ||
                    (i._startTime <= this._time && !i._paused && !i._gc)) &&
                    (i._reversed
                      ? i.render(
                          (i._dirty ? i.totalDuration() : i._totalDuration) -
                            (t - i._startTime) * i._timeScale,
                          e,
                          n
                        )
                      : i.render((t - i._startTime) * i._timeScale, e, n)),
                    (i = o);
              else
                for (i = this._last; i && ((o = i._prev), !this._paused || _); )
                  (i._active || (f >= i._startTime && !i._paused && !i._gc)) &&
                    (i._reversed
                      ? i.render(
                          (i._dirty ? i.totalDuration() : i._totalDuration) -
                            (t - i._startTime) * i._timeScale,
                          e,
                          n
                        )
                      : i.render((t - i._startTime) * i._timeScale, e, n)),
                    (i = o);
              this._onUpdate &&
                (e || (C.length && k(), this._callback("onUpdate"))),
                a &&
                  (this._locked ||
                    this._gc ||
                    ((d === this._startTime || p !== this._timeScale) &&
                      (0 === this._time || u >= this.totalDuration()) &&
                      (r &&
                        (C.length && k(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[a] && this._callback(a))));
            } else
              h !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (r.getActive = function (t, e, n) {
            null == t && (t = !0), null == e && (e = !0), null == n && (n = !1);
            var i,
              r,
              o = [],
              a = this.getChildren(t, e, n),
              s = 0,
              l = a.length;
            for (i = 0; i < l; i++) (r = a[i]).isActive() && (o[s++] = r);
            return o;
          }),
          (r.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              n = this.getLabelsArray(),
              i = n.length;
            for (e = 0; e < i; e++) if (n[e].time > t) return n[e].name;
            return null;
          }),
          (r.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), n = e.length; -1 < --n; )
              if (t > e[n].time) return e[n].name;
            return null;
          }),
          (r.getLabelsArray = function () {
            var t,
              e = [],
              n = 0;
            for (t in this._labels) e[n++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (r.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration();
          }),
          (r.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (r.totalDuration = function (t) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  (e.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (r.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (r.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (r.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (r.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          n
        );
      },
      !0
    ),
      _gsScope._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (c, f, h) {
          var d = function (t) {
              f.call(this, t),
                (this._labels = {}),
                (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                (this._sortChildren = !0),
                (this._onUpdate = this.vars.onUpdate);
              var e,
                n,
                i = this.vars;
              for (n in i)
                (e = i[n]),
                  _(e) &&
                    -1 !== e.join("").indexOf("{self}") &&
                    (i[n] = this._swapSelfInParams(e));
              _(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger);
            },
            p = 1e-10,
            t = h._internals,
            e = (d._internals = {}),
            m = t.isSelector,
            _ = t.isArray,
            g = t.lazyTweens,
            v = t.lazyRender,
            y = [],
            a = _gsScope._gsDefine.globals,
            b = function (t) {
              var e,
                n = {};
              for (e in t) n[e] = t[e];
              return n;
            },
            o = (e.pauseCallback = function (t, e, n, i) {
              var r,
                o = t._timeline,
                a = o._totalTime,
                s = t._startTime,
                l = t._rawPrevTime < 0 || (0 === t._rawPrevTime && o._reversed),
                u = l ? 0 : p,
                c = l ? p : 0;
              if (e || !this._forcingPlayhead) {
                for (o.pause(s), r = t._prev; r && r._startTime === s; )
                  (r._rawPrevTime = c), (r = r._prev);
                for (r = t._next; r && r._startTime === s; )
                  (r._rawPrevTime = u), (r = r._next);
                e && e.apply(i || o.vars.callbackScope || o, n || y),
                  (this._forcingPlayhead || !o._paused) && o.seek(a);
              }
            }),
            x = function (t) {
              var e,
                n = [],
                i = t.length;
              for (e = 0; e !== i; n.push(t[e++]));
              return n;
            },
            n = (d.prototype = new f());
          return (
            (d.version = "1.17.0"),
            (n.constructor = d),
            (n.kill()._gc = n._forcingPlayhead = !1),
            (n.to = function (t, e, n, i) {
              var r = (n.repeat && a.TweenMax) || h;
              return e ? this.add(new r(t, e, n), i) : this.set(t, n, i);
            }),
            (n.from = function (t, e, n, i) {
              return this.add(((n.repeat && a.TweenMax) || h).from(t, e, n), i);
            }),
            (n.fromTo = function (t, e, n, i, r) {
              var o = (i.repeat && a.TweenMax) || h;
              return e ? this.add(o.fromTo(t, e, n, i), r) : this.set(t, i, r);
            }),
            (n.staggerTo = function (t, e, n, i, r, o, a, s) {
              var l,
                u = new d({
                  onComplete: o,
                  onCompleteParams: a,
                  callbackScope: s,
                  smoothChildTiming: this.smoothChildTiming,
                });
              for (
                "string" == typeof t && (t = h.selector(t) || t),
                  m((t = t || [])) && (t = x(t)),
                  (i = i || 0) < 0 && ((t = x(t)).reverse(), (i *= -1)),
                  l = 0;
                t.length > l;
                l++
              )
                n.startAt && (n.startAt = b(n.startAt)),
                  u.to(t[l], e, b(n), l * i);
              return this.add(u, r);
            }),
            (n.staggerFrom = function (t, e, n, i, r, o, a, s) {
              return (
                (n.immediateRender = 0 != n.immediateRender),
                (n.runBackwards = !0),
                this.staggerTo(t, e, n, i, r, o, a, s)
              );
            }),
            (n.staggerFromTo = function (t, e, n, i, r, o, a, s, l) {
              return (
                (i.startAt = n),
                (i.immediateRender =
                  0 != i.immediateRender && 0 != n.immediateRender),
                this.staggerTo(t, e, i, r, o, a, s, l)
              );
            }),
            (n.call = function (t, e, n, i) {
              return this.add(h.delayedCall(0, t, e, n), i);
            }),
            (n.set = function (t, e, n) {
              return (
                (n = this._parseTimeOrLabel(n, 0, !0)),
                null == e.immediateRender &&
                  (e.immediateRender = n === this._time && !this._paused),
                this.add(new h(t, 0, e), n)
              );
            }),
            (d.exportRoot = function (t, e) {
              null == (t = t || {}).smoothChildTiming &&
                (t.smoothChildTiming = !0);
              var n,
                i,
                r = new d(t),
                o = r._timeline;
              for (
                null == e && (e = !0),
                  o._remove(r, !0),
                  r._startTime = 0,
                  r._rawPrevTime = r._time = r._totalTime = o._time,
                  n = o._first;
                n;

              )
                (i = n._next),
                  (e && n instanceof h && n.target === n.vars.onComplete) ||
                    r.add(n, n._startTime - n._delay),
                  (n = i);
              return o.add(r, 0), r;
            }),
            (n.add = function (t, e, n, i) {
              var r, o, a, s, l, u;
              if (
                ("number" != typeof e &&
                  (e = this._parseTimeOrLabel(e, 0, !0, t)),
                !(t instanceof c))
              ) {
                if (t instanceof Array || (t && t.push && _(t))) {
                  for (
                    n = n || "normal", i = i || 0, r = e, o = t.length, a = 0;
                    a < o;
                    a++
                  )
                    _((s = t[a])) && (s = new d({ tweens: s })),
                      this.add(s, r),
                      "string" != typeof s &&
                        "function" != typeof s &&
                        ("sequence" === n
                          ? (r =
                              s._startTime + s.totalDuration() / s._timeScale)
                          : "start" === n && (s._startTime -= s.delay())),
                      (r += i);
                  return this._uncache(!0);
                }
                if ("string" == typeof t) return this.addLabel(t, e);
                if ("function" != typeof t)
                  throw (
                    "Cannot add " +
                    t +
                    " into the timeline; it is not a tween, timeline, function, or string."
                  );
                t = h.delayedCall(0, t);
              }
              if (
                (f.prototype.add.call(this, t, e),
                (this._gc || this._time === this._duration) &&
                  !this._paused &&
                  this._duration < this.duration())
              )
                for (u = (l = this).rawTime() > t._startTime; l._timeline; )
                  u && l._timeline.smoothChildTiming
                    ? l.totalTime(l._totalTime, !0)
                    : l._gc && l._enabled(!0, !1),
                    (l = l._timeline);
              return this;
            }),
            (n.remove = function (t) {
              if (t instanceof c) return this._remove(t, !1);
              if (t instanceof Array || (t && t.push && _(t))) {
                for (var e = t.length; -1 < --e; ) this.remove(t[e]);
                return this;
              }
              return "string" == typeof t
                ? this.removeLabel(t)
                : this.kill(null, t);
            }),
            (n._remove = function (t, e) {
              f.prototype._remove.call(this, t, e);
              var n = this._last;
              return (
                n
                  ? this._time >
                      n._startTime + n._totalDuration / n._timeScale &&
                    ((this._time = this.duration()),
                    (this._totalTime = this._totalDuration))
                  : (this._time =
                      this._totalTime =
                      this._duration =
                      this._totalDuration =
                        0),
                this
              );
            }),
            (n.append = function (t, e) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
            }),
            (n.insert = n.insertMultiple =
              function (t, e, n, i) {
                return this.add(t, e || 0, n, i);
              }),
            (n.appendMultiple = function (t, e, n, i) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i);
            }),
            (n.addLabel = function (t, e) {
              return (this._labels[t] = this._parseTimeOrLabel(e)), this;
            }),
            (n.addPause = function (t, e, n, i) {
              var r = h.delayedCall(0, o, ["{self}", e, n, i], this);
              return (r.data = "isPause"), this.add(r, t);
            }),
            (n.removeLabel = function (t) {
              return delete this._labels[t], this;
            }),
            (n.getLabelTime = function (t) {
              return null != this._labels[t] ? this._labels[t] : -1;
            }),
            (n._parseTimeOrLabel = function (t, e, n, i) {
              var r;
              if (i instanceof c && i.timeline === this) this.remove(i);
              else if (i && (i instanceof Array || (i.push && _(i))))
                for (r = i.length; -1 < --r; )
                  i[r] instanceof c &&
                    i[r].timeline === this &&
                    this.remove(i[r]);
              if ("string" == typeof e)
                return this._parseTimeOrLabel(
                  e,
                  n && "number" == typeof t && null == this._labels[e]
                    ? t - this.duration()
                    : 0,
                  n
                );
              if (
                ((e = e || 0),
                "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
              )
                null == t && (t = this.duration());
              else {
                if (-1 === (r = t.indexOf("=")))
                  return null == this._labels[t]
                    ? n
                      ? (this._labels[t] = this.duration() + e)
                      : e
                    : this._labels[t] + e;
                (e =
                  parseInt(t.charAt(r - 1) + "1", 10) *
                  Number(t.substr(r + 1))),
                  (t =
                    1 < r
                      ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, n)
                      : this.duration());
              }
              return Number(t) + e;
            }),
            (n.seek = function (t, e) {
              return this.totalTime(
                "number" == typeof t ? t : this._parseTimeOrLabel(t),
                !1 !== e
              );
            }),
            (n.stop = function () {
              return this.paused(!0);
            }),
            (n.gotoAndPlay = function (t, e) {
              return this.play(t, e);
            }),
            (n.gotoAndStop = function (t, e) {
              return this.pause(t, e);
            }),
            (n.render = function (t, e, n) {
              this._gc && this._enabled(!0, !1);
              var i,
                r,
                o,
                a,
                s,
                l = this._dirty ? this.totalDuration() : this._totalDuration,
                u = this._time,
                c = this._startTime,
                f = this._timeScale,
                h = this._paused;
              if (l <= t)
                (this._totalTime = this._time = l),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((r = !0),
                    (a = "onComplete"),
                    (s = !!this._timeline.autoRemoveChildren),
                    0 === this._duration &&
                      (0 === t ||
                        this._rawPrevTime < 0 ||
                        this._rawPrevTime === p) &&
                      this._rawPrevTime !== t &&
                      this._first &&
                      ((s = !0),
                      this._rawPrevTime > p && (a = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : p),
                  (t = l + 1e-4);
              else if (t < 1e-7)
                if (
                  ((this._totalTime = this._time = 0),
                  (0 !== u ||
                    (0 === this._duration &&
                      this._rawPrevTime !== p &&
                      (0 < this._rawPrevTime ||
                        (t < 0 && 0 <= this._rawPrevTime)))) &&
                    ((a = "onReverseComplete"), (r = this._reversed)),
                  t < 0)
                )
                  (this._active = !1),
                    this._timeline.autoRemoveChildren && this._reversed
                      ? ((s = r = !0), (a = "onReverseComplete"))
                      : 0 <= this._rawPrevTime && this._first && (s = !0),
                    (this._rawPrevTime = t);
                else {
                  if (
                    ((this._rawPrevTime =
                      this._duration || !e || t || this._rawPrevTime === t
                        ? t
                        : p),
                    0 === t && r)
                  )
                    for (i = this._first; i && 0 === i._startTime; )
                      i._duration || (r = !1), (i = i._next);
                  (t = 0), this._initted || (s = !0);
                }
              else this._totalTime = this._time = this._rawPrevTime = t;
              if ((this._time !== u && this._first) || n || s) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active ||
                    (!this._paused &&
                      this._time !== u &&
                      0 < t &&
                      (this._active = !0)),
                  0 === u &&
                    this.vars.onStart &&
                    0 !== this._time &&
                    (e || this._callback("onStart")),
                  this._time >= u)
                )
                  for (
                    i = this._first;
                    i && ((o = i._next), !this._paused || h);

                  )
                    (i._active ||
                      (i._startTime <= this._time && !i._paused && !i._gc)) &&
                      (i._reversed
                        ? i.render(
                            (i._dirty ? i.totalDuration() : i._totalDuration) -
                              (t - i._startTime) * i._timeScale,
                            e,
                            n
                          )
                        : i.render((t - i._startTime) * i._timeScale, e, n)),
                      (i = o);
                else
                  for (
                    i = this._last;
                    i && ((o = i._prev), !this._paused || h);

                  )
                    (i._active ||
                      (u >= i._startTime && !i._paused && !i._gc)) &&
                      (i._reversed
                        ? i.render(
                            (i._dirty ? i.totalDuration() : i._totalDuration) -
                              (t - i._startTime) * i._timeScale,
                            e,
                            n
                          )
                        : i.render((t - i._startTime) * i._timeScale, e, n)),
                      (i = o);
                this._onUpdate &&
                  (e || (g.length && v(), this._callback("onUpdate"))),
                  a &&
                    (this._gc ||
                      ((c === this._startTime || f !== this._timeScale) &&
                        (0 === this._time || l >= this.totalDuration()) &&
                        (r &&
                          (g.length && v(),
                          this._timeline.autoRemoveChildren &&
                            this._enabled(!1, !1),
                          (this._active = !1)),
                        !e && this.vars[a] && this._callback(a))));
              }
            }),
            (n._hasPausedChild = function () {
              for (var t = this._first; t; ) {
                if (t._paused || (t instanceof d && t._hasPausedChild()))
                  return !0;
                t = t._next;
              }
              return !1;
            }),
            (n.getChildren = function (t, e, n, i) {
              i = i || -9999999999;
              for (var r = [], o = this._first, a = 0; o; )
                i > o._startTime ||
                  (o instanceof h
                    ? !1 !== e && (r[a++] = o)
                    : (!1 !== n && (r[a++] = o),
                      !1 !== t &&
                        (a = (r = r.concat(o.getChildren(!0, e, n))).length))),
                  (o = o._next);
              return r;
            }),
            (n.getTweensOf = function (t, e) {
              var n,
                i,
                r = this._gc,
                o = [],
                a = 0;
              for (
                r && this._enabled(!0, !0), i = (n = h.getTweensOf(t)).length;
                -1 < --i;

              )
                (n[i].timeline === this || (e && this._contains(n[i]))) &&
                  (o[a++] = n[i]);
              return r && this._enabled(!1, !0), o;
            }),
            (n.recent = function () {
              return this._recent;
            }),
            (n._contains = function (t) {
              for (var e = t.timeline; e; ) {
                if (e === this) return !0;
                e = e.timeline;
              }
              return !1;
            }),
            (n.shiftChildren = function (t, e, n) {
              n = n || 0;
              for (var i, r = this._first, o = this._labels; r; )
                r._startTime >= n && (r._startTime += t), (r = r._next);
              if (e) for (i in o) o[i] >= n && (o[i] += t);
              return this._uncache(!0);
            }),
            (n._kill = function (t, e) {
              if (!t && !e) return this._enabled(!1, !1);
              for (
                var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                  i = n.length,
                  r = !1;
                -1 < --i;

              )
                n[i]._kill(t, e) && (r = !0);
              return r;
            }),
            (n.clear = function (t) {
              var e = this.getChildren(!1, !0, !0),
                n = e.length;
              for (this._time = this._totalTime = 0; -1 < --n; )
                e[n]._enabled(!1, !1);
              return !1 !== t && (this._labels = {}), this._uncache(!0);
            }),
            (n.invalidate = function () {
              for (var t = this._first; t; ) t.invalidate(), (t = t._next);
              return c.prototype.invalidate.call(this);
            }),
            (n._enabled = function (t, e) {
              if (t === this._gc)
                for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
              return f.prototype._enabled.call(this, t, e);
            }),
            (n.totalTime = function () {
              this._forcingPlayhead = !0;
              var t = c.prototype.totalTime.apply(this, arguments);
              return (this._forcingPlayhead = !1), t;
            }),
            (n.duration = function (t) {
              return arguments.length
                ? (0 !== this.duration() &&
                    0 !== t &&
                    this.timeScale(this._duration / t),
                  this)
                : (this._dirty && this.totalDuration(), this._duration);
            }),
            (n.totalDuration = function (t) {
              if (arguments.length)
                return (
                  0 !== this.totalDuration() &&
                    0 !== t &&
                    this.timeScale(this._totalDuration / t),
                  this
                );
              if (this._dirty) {
                for (var e, n, i = 0, r = this._last, o = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > o && this._sortChildren && !r._paused
                      ? this.add(r, r._startTime - r._delay)
                      : (o = r._startTime),
                    r._startTime < 0 &&
                      !r._paused &&
                      ((i -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        (this._startTime += r._startTime / this._timeScale),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (o = 0)),
                    i < (n = r._startTime + r._totalDuration / r._timeScale) &&
                      (i = n),
                    (r = e);
                (this._duration = this._totalDuration = i), (this._dirty = !1);
              }
              return this._totalDuration;
            }),
            (n.paused = function (t) {
              if (!t)
                for (var e = this._first, n = this._time; e; )
                  e._startTime === n &&
                    "isPause" === e.data &&
                    (e._rawPrevTime = 0),
                    (e = e._next);
              return c.prototype.paused.apply(this, arguments);
            }),
            (n.usesFrames = function () {
              for (var t = this._timeline; t._timeline; ) t = t._timeline;
              return t === c._rootFramesTimeline;
            }),
            (n.rawTime = function () {
              return this._paused
                ? this._totalTime
                : (this._timeline.rawTime() - this._startTime) *
                    this._timeScale;
            }),
            d
          );
        },
        !0
      );
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t) {
    "use strict";
    var e = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[t];
    };
    "function" == typeof define && define.amd
      ? define(["TweenLite"], e)
      : "undefined" != typeof module &&
        module.exports &&
        (require("./TweenLite.js"), (module.exports = e()));
  })("TimelineMax"),
  function () {
    function To(t, e) {
      return t.set(e[0], e[1]), t;
    }
    function So(t, e) {
      return t.add(e), t;
    }
    function Co(t, e, n) {
      switch (n.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, n[0]);
        case 2:
          return t.call(e, n[0], n[1]);
        case 3:
          return t.call(e, n[0], n[1], n[2]);
      }
      return t.apply(e, n);
    }
    function ko(t, e, n, i) {
      for (var r = -1, o = t.length; ++r < o; ) {
        var a = t[r];
        e(i, a, n(a), t);
      }
      return i;
    }
    function Ao(t, e) {
      for (var n = -1, i = t.length; ++n < i && !1 !== e(t[n], n, t); );
      return t;
    }
    function Po(t, e) {
      for (var n = -1, i = t.length; ++n < i; ) if (!e(t[n], n, t)) return !1;
      return !0;
    }
    function Oo(t, e) {
      for (var n = -1, i = t.length, r = 0, o = []; ++n < i; ) {
        var a = t[n];
        e(a, n, t) && (o[r++] = a);
      }
      return o;
    }
    function jo(t, e) {
      return !!t.length && -1 < Bo(t, e, 0);
    }
    function Eo(t, e, n) {
      for (var i = -1, r = t.length; ++i < r; ) if (n(e, t[i])) return !0;
      return !1;
    }
    function Ro(t, e) {
      for (var n = -1, i = t.length, r = Array(i); ++n < i; )
        r[n] = e(t[n], n, t);
      return r;
    }
    function Do(t, e) {
      for (var n = -1, i = e.length, r = t.length; ++n < i; ) t[r + n] = e[n];
      return t;
    }
    function No(t, e, n, i) {
      var r = -1,
        o = t.length;
      for (i && o && (n = t[++r]); ++r < o; ) n = e(n, t[r], r, t);
      return n;
    }
    function Mo(t, e, n, i) {
      var r = t.length;
      for (i && r && (n = t[--r]); r--; ) n = e(n, t[r], r, t);
      return n;
    }
    function Lo(t, e) {
      for (var n = -1, i = t.length; ++n < i; ) if (e(t[n], n, t)) return !0;
      return !1;
    }
    function Io(t, i, e, r) {
      var o;
      return (
        e(t, function (t, e, n) {
          return i(t, e, n) ? ((o = r ? e : t), !1) : void 0;
        }),
        o
      );
    }
    function Fo(t, e, n) {
      for (var i = t.length, r = n ? i : -1; n ? r-- : ++r < i; )
        if (e(t[r], r, t)) return r;
      return -1;
    }
    function Bo(t, e, n) {
      if (e != e) return ta(t, n);
      --n;
      for (var i = t.length; ++n < i; ) if (t[n] === e) return n;
      return -1;
    }
    function zo(t, e, n, i) {
      --n;
      for (var r = t.length; ++n < r; ) if (i(t[n], e)) return n;
      return -1;
    }
    function Ho(t, e) {
      var n = t ? t.length : 0;
      return n ? Xo(t, e) / n : fa;
    }
    function qo(t, i, r, o, e) {
      return (
        e(t, function (t, e, n) {
          r = o ? ((o = !1), t) : i(r, t, e, n);
        }),
        r
      );
    }
    function Wo(t, e) {
      var n = t.length;
      for (t.sort(e); n--; ) t[n] = t[n].c;
      return t;
    }
    function Xo(t, e) {
      for (var n, i = -1, r = t.length; ++i < r; ) {
        var o = e(t[i]);
        o !== ua && (n = n === ua ? o : n + o);
      }
      return n;
    }
    function Uo(t, e) {
      for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n);
      return i;
    }
    function $o(e, t) {
      return Ro(t, function (t) {
        return [t, e[t]];
      });
    }
    function Vo(e) {
      return function (t) {
        return e(t);
      };
    }
    function Yo(e, t) {
      return Ro(t, function (t) {
        return e[t];
      });
    }
    function Qo(t, e) {
      for (var n = -1, i = t.length; ++n < i && -1 < Bo(e, t[n], 0); );
      return n;
    }
    function Zo(t, e) {
      for (var n = t.length; n-- && -1 < Bo(e, t[n], 0); );
      return n;
    }
    function t(t) {
      return t && t.Object === Object ? t : null;
    }
    function Go(t) {
      return r[t];
    }
    function Ko(t) {
      return o[t];
    }
    function Jo(t) {
      return "\\" + l[t];
    }
    function ta(t, e, n) {
      var i = t.length;
      for (e += n ? 0 : -1; n ? e-- : ++e < i; ) {
        var r = t[e];
        if (r != r) return e;
      }
      return -1;
    }
    function ea(t) {
      var e = !1;
      if (null != t && "function" != typeof t.toString)
        try {
          e = !!(t + "");
        } catch (Co) {}
      return e;
    }
    function na(t) {
      for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
      return n;
    }
    function ia(t) {
      var n = -1,
        i = Array(t.size);
      return (
        t.forEach(function (t, e) {
          i[++n] = [e, t];
        }),
        i
      );
    }
    function ra(t, e) {
      for (var n = -1, i = t.length, r = 0, o = []; ++n < i; ) {
        var a = t[n];
        (a !== e && "__lodash_placeholder__" !== a) ||
          ((t[n] = "__lodash_placeholder__"), (o[r++] = n));
      }
      return o;
    }
    function oa(t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t) {
          n[++e] = t;
        }),
        n
      );
    }
    function aa(t) {
      if (!t || !Va.test(t)) return t.length;
      for (var e = (Ua.lastIndex = 0); Ua.test(t); ) e++;
      return e;
    }
    function sa(t) {
      return a[t];
    }
    function la(t) {
      function d(t) {
        if (rn(t) && !Rr(t) && !(t instanceof m)) {
          if (t instanceof p) return t;
          if (Wn.call(t, "__wrapped__")) return Se(t);
        }
        return new p(t);
      }
      function o() {}
      function p(t, e) {
        (this.__wrapped__ = t),
          (this.__actions__ = []),
          (this.__chain__ = !!e),
          (this.__index__ = 0),
          (this.__values__ = ua);
      }
      function m(t) {
        (this.__wrapped__ = t),
          (this.__actions__ = []),
          (this.__dir__ = 1),
          (this.__filtered__ = !1),
          (this.__iteratees__ = []),
          (this.__takeCount__ = 4294967295),
          (this.__views__ = []);
      }
      function e() {}
      function a(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      function _(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.__data__ = new a(); ++e < n; ) this.push(t[e]);
      }
      function g(t, e) {
        var n = t.__data__;
        return _e(e)
          ? ((n = n.__data__),
            "__lodash_hash_undefined__" ===
              ("string" == typeof e ? n.string : n.hash)[e])
          : n.has(e);
      }
      function v(t) {
        var e = -1,
          n = t ? t.length : 0;
        for (this.clear(); ++e < n; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      function i(t, e) {
        var n = s(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : ai.call(t, n, 1), !0);
      }
      function r(t, e) {
        var n = s(t, e);
        return n < 0 ? ua : t[n][1];
      }
      function s(t, e) {
        for (var n = t.length; n--; ) if (Ye(t[n][0], e)) return n;
        return -1;
      }
      function l(t, e, n) {
        var i = s(t, e);
        i < 0 ? t.push([e, n]) : (t[i][1] = n);
      }
      function f(t, e, n, i) {
        return t === ua || (Ye(t, zn[n]) && !Wn.call(i, n)) ? e : t;
      }
      function y(t, e, n) {
        ((n === ua || Ye(t[e], n)) &&
          ("number" != typeof e || n !== ua || e in t)) ||
          (t[e] = n);
      }
      function h(t, e, n) {
        var i = t[e];
        (Wn.call(t, e) && Ye(i, n) && (n !== ua || e in t)) || (t[e] = n);
      }
      function u(t, i, r, o) {
        return (
          Ii(t, function (t, e, n) {
            i(o, t, r(t), n);
          }),
          o
        );
      }
      function b(t, e) {
        return t && Pt(e, bn(e), t);
      }
      function c(t, e) {
        for (var n = -1, i = null == t, r = e.length, o = Array(r); ++n < r; )
          o[n] = i ? ua : vn(t, e[n]);
        return o;
      }
      function x(t, e, n) {
        return (
          t == t &&
            (n !== ua && (t = t <= n ? t : n),
            e !== ua && (t = e <= t ? t : e)),
          t
        );
      }
      function w(n, i, r, o, t, e, a) {
        var s;
        if ((o && (s = e ? o(n, t, e, a) : o(n)), s !== ua)) return s;
        if (!nn(n)) return n;
        if ((t = Rr(n))) {
          if (((s = se(n)), !i)) return At(n, s);
        } else {
          var l = oe(n),
            u = "[object Function]" == l || "[object GeneratorFunction]" == l;
          if (Dr(n)) return wt(n, i);
          if (
            "[object Object]" == l ||
            "[object Arguments]" == l ||
            (u && !e)
          ) {
            if (ea(n)) return e ? n : {};
            if (((s = le(u ? {} : n)), !i)) return Ot(n, b(s, n));
          } else {
            if (!Ga[l]) return e ? n : {};
            s = ue(n, l, w, i);
          }
        }
        if ((a || (a = new v()), (e = a.get(n)))) return e;
        if ((a.set(n, s), !t)) var c = r ? N(n, bn, re) : bn(n);
        return (
          Ao(c || n, function (t, e) {
            c && (t = n[(e = t)]), h(s, e, w(t, i, r, o, e, n, a));
          }),
          s
        );
      }
      function n(o) {
        var a = bn(o),
          s = a.length;
        return function (t) {
          if (null == t) return !s;
          for (var e = s; e--; ) {
            var n = a[e],
              i = o[n],
              r = t[n];
            if ((r === ua && !(n in Object(t))) || !i(r)) return !1;
          }
          return !0;
        };
      }
      function T(t) {
        return nn(t) ? ii(t) : {};
      }
      function S(t, e, n) {
        if ("function" != typeof t) throw new Fn("Expected a function");
        return oi(function () {
          t.apply(ua, n);
        }, e);
      }
      function C(t, e, n, i) {
        var r = -1,
          o = jo,
          a = !0,
          s = t.length,
          l = [],
          u = e.length;
        if (!s) return l;
        n && (e = Ro(e, Vo(n))),
          i
            ? ((o = Eo), (a = !1))
            : 200 <= e.length && ((o = g), (a = !1), (e = new _(e)));
        t: for (; ++r < s; ) {
          var c = t[r],
            f = n ? n(c) : c;
          c = i || 0 !== c ? c : 0;
          if (a && f == f) {
            for (var h = u; h--; ) if (e[h] === f) continue t;
            l.push(c);
          } else o(e, f, i) || l.push(c);
        }
        return l;
      }
      function k(t, i) {
        var r = !0;
        return (
          Ii(t, function (t, e, n) {
            return (r = !!i(t, e, n));
          }),
          r
        );
      }
      function A(t, e, n) {
        for (var i = -1, r = t.length; ++i < r; ) {
          var o = t[i],
            a = e(o);
          if (null != a && (s === ua ? a == a && !cn(a) : n(a, s)))
            var s = a,
              l = o;
        }
        return l;
      }
      function P(t, i) {
        var r = [];
        return (
          Ii(t, function (t, e, n) {
            i(t, e, n) && r.push(t);
          }),
          r
        );
      }
      function O(t, e, n, i, r) {
        var o = -1,
          a = t.length;
        for (n || (n = fe), r || (r = []); ++o < a; ) {
          var s = t[o];
          0 < e && n(s)
            ? 1 < e
              ? O(s, e - 1, n, i, r)
              : Do(r, s)
            : i || (r[r.length] = s);
        }
        return r;
      }
      function j(t, e) {
        return t && Bi(t, e, bn);
      }
      function E(t, e) {
        return t && zi(t, e, bn);
      }
      function R(e, t) {
        return Oo(t, function (t) {
          return Je(e[t]);
        });
      }
      function D(t, e) {
        for (
          var n = 0, i = (e = me(e, t) ? [e] : bt(e)).length;
          null != t && n < i;

        )
          t = t[we(e[n++])];
        return n && n == i ? t : ua;
      }
      function N(t, e, n) {
        return (e = e(t)), Rr(t) ? e : Do(e, n(t));
      }
      function M(t, e) {
        return e < t;
      }
      function L(t, e) {
        return (
          Wn.call(t, e) ||
          ("object" == typeof t && e in t && null === ui(Object(t)))
        );
      }
      function I(t, e) {
        return e in Object(t);
      }
      function F(t, e, n) {
        for (
          var i = n ? Eo : jo,
            r = t[0].length,
            o = t.length,
            a = o,
            s = Array(o),
            l = 1 / 0,
            u = [];
          a--;

        ) {
          var c = t[a];
          a && e && (c = Ro(c, Vo(e))),
            (l = pi(c.length, l)),
            (s[a] =
              !n && (e || (120 <= r && 120 <= c.length)) ? new _(a && c) : ua);
        }
        c = t[0];
        var f = -1,
          h = s[0];
        t: for (; ++f < r && l > u.length; ) {
          var d = c[f],
            p = e ? e(d) : d;
          d = n || 0 !== d ? d : 0;
          if (h ? !g(h, p) : !i(u, p, n)) {
            for (a = o; --a; ) {
              var m = s[a];
              if (m ? !g(m, p) : !i(t[a], p, n)) continue t;
            }
            h && h.push(p), u.push(d);
          }
        }
        return u;
      }
      function B(t, i, r) {
        var o = {};
        return (
          j(t, function (t, e, n) {
            i(o, r(t), e, n);
          }),
          o
        );
      }
      function z(t, e, n) {
        return (
          me(e, t) || ((t = xe(t, (e = bt(e)))), (e = Pe(e))),
          null == (e = null == t ? t : t[we(e)]) ? ua : Co(e, t, n)
        );
      }
      function H(t, e, n, i, r) {
        if (t === e) e = !0;
        else if (null == t || null == e || (!nn(t) && !rn(e)))
          e = t != t && e != e;
        else
          t: {
            var o = Rr(t),
              a = Rr(e),
              s = "[object Array]",
              l = "[object Array]";
            o ||
              (s = "[object Arguments]" == (s = oe(t)) ? "[object Object]" : s),
              a ||
                (l =
                  "[object Arguments]" == (l = oe(e)) ? "[object Object]" : l);
            var u = "[object Object]" == s && !ea(t);
            a = "[object Object]" == l && !ea(e);
            if ((l = s == l) && !u)
              r || (r = new v()),
                (e =
                  o || fn(t) ? Gt(t, e, H, n, i, r) : Kt(t, e, s, H, n, i, r));
            else {
              if (
                !(2 & i) &&
                ((o = u && Wn.call(t, "__wrapped__")),
                (s = a && Wn.call(e, "__wrapped__")),
                o || s)
              ) {
                (t = o ? t.value() : t),
                  (e = s ? e.value() : e),
                  r || (r = new v()),
                  (e = H(t, e, n, i, r));
                break t;
              }
              if (l)
                e: if (
                  (r || (r = new v()),
                  (o = 2 & i),
                  (s = bn(t)),
                  (a = s.length),
                  (l = bn(e).length),
                  a == l || o)
                ) {
                  for (u = a; u--; ) {
                    var c = s[u];
                    if (!(o ? c in e : L(e, c))) {
                      e = !1;
                      break e;
                    }
                  }
                  if ((l = r.get(t))) e = l == e;
                  else {
                    (l = !0), r.set(t, e);
                    for (var f = o; ++u < a; ) {
                      var h = t[(c = s[u])],
                        d = e[c];
                      if (n)
                        var p = o ? n(d, h, c, e, t, r) : n(h, d, c, t, e, r);
                      if (p === ua ? h !== d && !H(h, d, n, i, r) : !p) {
                        l = !1;
                        break;
                      }
                      f || (f = "constructor" == c);
                    }
                    l &&
                      !f &&
                      (n = t.constructor) != (i = e.constructor) &&
                      "constructor" in t &&
                      "constructor" in e &&
                      !(
                        "function" == typeof n &&
                        n instanceof n &&
                        "function" == typeof i &&
                        i instanceof i
                      ) &&
                      (l = !1),
                      r["delete"](t),
                      (e = l);
                  }
                } else e = !1;
              else e = !1;
            }
          }
        return e;
      }
      function q(t, e, n, i) {
        var r = n.length,
          o = r,
          a = !i;
        if (null == t) return !o;
        for (t = Object(t); r--; ) {
          var s = n[r];
          if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
        }
        for (; ++r < o; ) {
          var l = (s = n[r])[0],
            u = t[l],
            c = s[1];
          if (a && s[2]) {
            if (u === ua && !(l in t)) return !1;
          } else {
            if (((s = new v()), i)) var f = i(u, c, l, t, e, s);
            if (f === ua ? !H(c, u, i, 3, s) : !f) return !1;
          }
        }
        return !0;
      }
      function W(t) {
        return "function" == typeof t
          ? t
          : null == t
          ? On
          : "object" == typeof t
          ? Rr(t)
            ? Y(t[0], t[1])
            : V(t)
          : Dn(t);
      }
      function X(t) {
        t = null == t ? t : Object(t);
        var e,
          n = [];
        for (e in t) n.push(e);
        return n;
      }
      function U(t, e) {
        return t < e;
      }
      function $(t, i) {
        var r = -1,
          o = Ze(t) ? Array(t.length) : [];
        return (
          Ii(t, function (t, e, n) {
            o[++r] = i(t, e, n);
          }),
          o
        );
      }
      function V(e) {
        var n = ee(e);
        return 1 == n.length && n[0][2]
          ? ye(n[0][0], n[0][1])
          : function (t) {
              return t === e || q(t, e, n);
            };
      }
      function Y(n, i) {
        return me(n) && i == i && !nn(i)
          ? ye(we(n), i)
          : function (t) {
              var e = vn(t, n);
              return e === ua && e === i ? yn(t, n) : H(i, e, ua, 3);
            };
      }
      function Q(l, u, c, f, h) {
        if (l !== u) {
          if (!Rr(u) && !fn(u)) var d = xn(u);
          Ao(d || u, function (t, e) {
            if ((d && (t = u[(e = t)]), nn(t))) {
              h || (h = new v());
              var n = e,
                i = h,
                r = l[n],
                o = u[n];
              if ((a = i.get(o))) y(l, n, a);
              else {
                var a,
                  s = (a = f ? f(r, o, n + "", l, u, i) : ua) === ua;
                s &&
                  (Rr((a = o)) || fn(o)
                    ? Rr(r)
                      ? (a = r)
                      : Ge(r)
                      ? (a = At(r))
                      : (a = w(o, !(s = !1)))
                    : sn(o) || Qe(o)
                    ? Qe(r)
                      ? (a = _n(r))
                      : !nn(r) || (c && Je(r))
                      ? (a = w(o, !(s = !1)))
                      : (a = r)
                    : (s = !1)),
                  i.set(o, a),
                  s && Q(a, o, c, f, i),
                  i["delete"](o),
                  y(l, n, a);
              }
            } else (n = f ? f(l[e], t, e + "", l, u, h) : ua) === ua && (n = t), y(l, e, n);
          });
        }
      }
      function Z(t, e) {
        var n = t.length;
        return n ? (de((e += e < 0 ? n : 0), n) ? t[e] : ua) : void 0;
      }
      function G(t, n, l) {
        var i = -1;
        return (
          (n = Ro(n.length ? n : [On], Vo(te()))),
          Wo(
            (t = $(t, function (e) {
              return {
                a: Ro(n, function (t) {
                  return t(e);
                }),
                b: ++i,
                c: e,
              };
            })),
            function (t, e) {
              var n;
              t: {
                n = -1;
                for (
                  var i = t.a, r = e.a, o = i.length, a = l.length;
                  ++n < o;

                ) {
                  var s = St(i[n], r[n]);
                  if (s) {
                    n = a <= n ? s : s * ("desc" == l[n] ? -1 : 1);
                    break t;
                  }
                }
                n = t.b - e.b;
              }
              return n;
            }
          )
        );
      }
      function K(n, t) {
        return (
          (n = Object(n)),
          No(
            t,
            function (t, e) {
              return e in n && (t[e] = n[e]), t;
            },
            {}
          )
        );
      }
      function J(t, e) {
        for (var n = -1, i = N(t, xn, Ui), r = i.length, o = {}; ++n < r; ) {
          var a = i[n],
            s = t[a];
          e(s, a) && (o[a] = s);
        }
        return o;
      }
      function tt(e) {
        return function (t) {
          return null == t ? ua : t[e];
        };
      }
      function et(e) {
        return function (t) {
          return D(t, e);
        };
      }
      function nt(t, e, n, i) {
        var r = i ? zo : Bo,
          o = -1,
          a = e.length,
          s = t;
        for (n && (s = Ro(t, Vo(n))); ++o < a; ) {
          var l = 0,
            u = e[o];
          for (u = n ? n(u) : u; -1 < (l = r(s, u, l, i)); )
            s !== t && ai.call(s, l, 1), ai.call(t, l, 1);
        }
        return t;
      }
      function it(t, e) {
        for (var n = t ? e.length : 0, i = n - 1; n--; ) {
          var r = e[n];
          if (n == i || r !== o) {
            var o = r;
            if (de(r)) ai.call(t, r, 1);
            else if (me(r, t)) delete t[we(r)];
            else {
              var a = xe(t, (r = bt(r)));
              null != a && delete a[we(Pe(r))];
            }
          }
        }
      }
      function rt(t, e) {
        return t + li(_i() * (e - t + 1));
      }
      function ot(t, e) {
        var n = "";
        if (!t || e < 1 || 9007199254740991 < e) return n;
        for (; e % 2 && (n += t), (e = li(e / 2)) && (t += t), e; );
        return n;
      }
      function at(t, e, n, i) {
        for (
          var r = -1, o = (e = me(e, t) ? [e] : bt(e)).length, a = o - 1, s = t;
          null != s && ++r < o;

        ) {
          var l = we(e[r]);
          if (nn(s)) {
            var u = n;
            if (r != a) {
              var c = s[l];
              (u = i ? i(c, l, s) : ua) === ua &&
                (u = null == c ? (de(e[r + 1]) ? [] : {}) : c);
            }
            h(s, l, u);
          }
          s = s[l];
        }
        return t;
      }
      function st(t, e, n) {
        var i = -1,
          r = t.length;
        for (
          e < 0 && (e = r < -e ? 0 : r + e),
            (n = r < n ? r : n) < 0 && (n += r),
            r = n < e ? 0 : (n - e) >>> 0,
            e >>>= 0,
            n = Array(r);
          ++i < r;

        )
          n[i] = t[i + e];
        return n;
      }
      function lt(t, i) {
        var r;
        return (
          Ii(t, function (t, e, n) {
            return !(r = i(t, e, n));
          }),
          !!r
        );
      }
      function ut(t, e, n) {
        var i = 0,
          r = t ? t.length : i;
        if ("number" == typeof e && e == e && r <= 2147483647) {
          for (; i < r; ) {
            var o = (i + r) >>> 1,
              a = t[o];
            null !== a && !cn(a) && (n ? a <= e : a < e)
              ? (i = o + 1)
              : (r = o);
          }
          return r;
        }
        return ct(t, e, On, n);
      }
      function ct(t, e, n, i) {
        e = n(e);
        for (
          var r = 0,
            o = t ? t.length : 0,
            a = e != e,
            s = null === e,
            l = cn(e),
            u = e === ua;
          r < o;

        ) {
          var c = li((r + o) / 2),
            f = n(t[c]),
            h = f !== ua,
            d = null === f,
            p = f == f,
            m = cn(f);
          (
            a
              ? i || p
              : u
              ? p && (i || h)
              : s
              ? p && h && (i || !d)
              : l
              ? p && h && !d && (i || !m)
              : !d && !m && (i ? f <= e : f < e)
          )
            ? (r = c + 1)
            : (o = c);
        }
        return pi(o, 4294967294);
      }
      function ft(t, e) {
        for (var n = -1, i = t.length, r = 0, o = []; ++n < i; ) {
          var a = t[n],
            s = e ? e(a) : a;
          if (!n || !Ye(s, l)) {
            var l = s;
            o[r++] = 0 === a ? 0 : a;
          }
        }
        return o;
      }
      function ht(t) {
        return "number" == typeof t ? t : cn(t) ? fa : +t;
      }
      function dt(t) {
        if ("string" == typeof t) return t;
        if (cn(t)) return Li ? Li.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -ca ? "-0" : e;
      }
      function pt(t, e, n) {
        var i = -1,
          r = jo,
          o = t.length,
          a = !0,
          s = [],
          l = s;
        if (n) (a = !1), (r = Eo);
        else if (200 <= o) {
          if ((r = e ? null : qi(t))) return oa(r);
          (a = !1), (r = g), (l = new _());
        } else l = e ? [] : s;
        t: for (; ++i < o; ) {
          var u = t[i],
            c = e ? e(u) : u;
          u = n || 0 !== u ? u : 0;
          if (a && c == c) {
            for (var f = l.length; f--; ) if (l[f] === c) continue t;
            e && l.push(c), s.push(u);
          } else r(l, c, n) || (l !== s && l.push(c), s.push(u));
        }
        return s;
      }
      function mt(t, e, n, i) {
        for (
          var r = t.length, o = i ? r : -1;
          (i ? o-- : ++o < r) && e(t[o], o, t);

        );
        return n
          ? st(t, i ? 0 : o, i ? o + 1 : r)
          : st(t, i ? o + 1 : 0, i ? r : o);
      }
      function _t(t, e) {
        var n = t;
        return (
          n instanceof m && (n = n.value()),
          No(
            e,
            function (t, e) {
              return e.func.apply(e.thisArg, Do([t], e.args));
            },
            n
          )
        );
      }
      function gt(t, e, n) {
        for (var i = -1, r = t.length; ++i < r; )
          var o = o ? Do(C(o, t[i], e, n), C(t[i], o, e, n)) : t[i];
        return o && o.length ? pt(o, e, n) : [];
      }
      function vt(t, e, n) {
        for (var i = -1, r = t.length, o = e.length, a = {}; ++i < r; )
          n(a, t[i], i < o ? e[i] : ua);
        return a;
      }
      function yt(t) {
        return Ge(t) ? t : [];
      }
      function bt(t) {
        return Rr(t) ? t : Qi(t);
      }
      function xt(t, e, n) {
        var i = t.length;
        return (n = n === ua ? i : n), !e && i <= n ? t : st(t, e, n);
      }
      function wt(t, e) {
        if (e) return t.slice();
        var n = new t.constructor(t.length);
        return t.copy(n), n;
      }
      function Tt(t) {
        var e = new t.constructor(t.byteLength);
        return new Kn(e).set(new Kn(t)), e;
      }
      function St(t, e) {
        if (t !== e) {
          var n = t !== ua,
            i = null === t,
            r = t == t,
            o = cn(t),
            a = e !== ua,
            s = null === e,
            l = e == e,
            u = cn(e);
          if (
            (!s && !u && !o && e < t) ||
            (o && a && l && !s && !u) ||
            (i && a && l) ||
            (!n && l) ||
            !r
          )
            return 1;
          if (
            (!i && !o && !u && t < e) ||
            (u && n && r && !i && !o) ||
            (s && n && r) ||
            (!a && r) ||
            !l
          )
            return -1;
        }
        return 0;
      }
      function Ct(t, e, n, i) {
        var r = -1,
          o = t.length,
          a = n.length,
          s = -1,
          l = e.length,
          u = di(o - a, 0),
          c = Array(l + u);
        for (i = !i; ++s < l; ) c[s] = e[s];
        for (; ++r < a; ) (i || r < o) && (c[n[r]] = t[r]);
        for (; u--; ) c[s++] = t[r++];
        return c;
      }
      function kt(t, e, n, i) {
        var r = -1,
          o = t.length,
          a = -1,
          s = n.length,
          l = -1,
          u = e.length,
          c = di(o - s, 0),
          f = Array(c + u);
        for (i = !i; ++r < c; ) f[r] = t[r];
        for (c = r; ++l < u; ) f[c + l] = e[l];
        for (; ++a < s; ) (i || r < o) && (f[c + n[a]] = t[r++]);
        return f;
      }
      function At(t, e) {
        var n = -1,
          i = t.length;
        for (e || (e = Array(i)); ++n < i; ) e[n] = t[n];
        return e;
      }
      function Pt(t, e, n, i) {
        n || (n = {});
        for (var r = -1, o = e.length; ++r < o; ) {
          var a = e[r];
          h(n, a, i ? i(n[a], t[a], a, n, t) : t[a]);
        }
        return n;
      }
      function Ot(t, e) {
        return Pt(t, re(t), e);
      }
      function jt(r, o) {
        return function (t, e) {
          var n = Rr(t) ? ko : u,
            i = o ? o() : {};
          return n(t, r, te(e), i);
        };
      }
      function Et(a) {
        return $e(function (t, e) {
          var n = -1,
            i = e.length,
            r = 1 < i ? e[i - 1] : ua,
            o = 2 < i ? e[2] : ua;
          r = "function" == typeof r ? (i--, r) : ua;
          for (
            o && pe(e[0], e[1], o) && ((r = i < 3 ? ua : r), (i = 1)),
              t = Object(t);
            ++n < i;

          )
            (o = e[n]) && a(t, o, n, r);
          return t;
        });
      }
      function Rt(o, a) {
        return function (t, e) {
          if (null == t) return t;
          if (!Ze(t)) return o(t, e);
          for (
            var n = t.length, i = a ? n : -1, r = Object(t);
            (a ? i-- : ++i < n) && !1 !== e(r[i], i, r);

          );
          return t;
        };
      }
      function Dt(s) {
        return function (t, e, n) {
          for (var i = -1, r = Object(t), o = (n = n(t)).length; o--; ) {
            var a = n[s ? o : ++i];
            if (!1 === e(r[a], a, r)) break;
          }
          return t;
        };
      }
      function Nt(t, e, n) {
        function i() {
          return (this && this !== es && this instanceof i ? o : t).apply(
            r ? n : this,
            arguments
          );
        }
        var r = 1 & e,
          o = It(t);
        return i;
      }
      function Mt(i) {
        return function (t) {
          t = gn(t);
          var e = Va.test(t) ? t.match(Ua) : ua,
            n = e ? e[0] : t.charAt(0);
          return (t = e ? xt(e, 1).join("") : t.slice(1)), n[i]() + t;
        };
      }
      function Lt(e) {
        return function (t) {
          return No(An(kn(t).replace(Wa, "")), e, "");
        };
      }
      function It(n) {
        return function () {
          switch ((t = arguments).length) {
            case 0:
              return new n();
            case 1:
              return new n(t[0]);
            case 2:
              return new n(t[0], t[1]);
            case 3:
              return new n(t[0], t[1], t[2]);
            case 4:
              return new n(t[0], t[1], t[2], t[3]);
            case 5:
              return new n(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var t,
            e = T(n.prototype);
          return nn((t = n.apply(e, t))) ? t : e;
        };
      }
      function Ft(r, o, a) {
        function s() {
          for (var t = arguments.length, e = Array(t), n = t, i = ie(s); n--; )
            e[n] = arguments[n];
          return (t -= (n =
            t < 3 && e[0] !== i && e[t - 1] !== i ? [] : ra(e, i)).length) < a
            ? Yt(r, o, zt, s.placeholder, ua, e, n, ua, ua, a - t)
            : Co(this && this !== es && this instanceof s ? l : r, this, e);
        }
        var l = It(r);
        return s;
      }
      function Bt(s) {
        return $e(function (i) {
          var r = (i = O(i, 1)).length,
            t = r,
            e = p.prototype.thru;
          for (s && i.reverse(); t--; ) {
            if ("function" != typeof (n = i[t]))
              throw new Fn("Expected a function");
            if (e && !o && "wrapper" == Jt(n)) var o = new p([], !0);
          }
          for (t = o ? t : r; ++t < r; ) {
            var n,
              a = "wrapper" == (e = Jt((n = i[t]))) ? Wi(n) : ua;
            o =
              a && ge(a[0]) && 424 == a[1] && !a[4].length && 1 == a[9]
                ? o[Jt(a[0])].apply(o, a[3])
                : 1 == n.length && ge(n)
                ? o[e]()
                : o.thru(n);
          }
          return function () {
            var t = (n = arguments)[0];
            if (o && 1 == n.length && Rr(t) && 200 <= t.length)
              return o.plant(t).value();
            for (var e = 0, n = r ? i[e].apply(this, n) : t; ++e < r; )
              n = i[e].call(this, n);
            return n;
          };
        });
      }
      function zt(l, u, c, f, h, d, p, m, _, g) {
        function v() {
          for (var t = arguments.length, e = t, n = Array(t); e--; )
            n[e] = arguments[e];
          if (w) {
            var i,
              r = ie(v);
            e = n.length;
            for (i = 0; e--; ) n[e] === r && i++;
          }
          if (
            (f && (n = Ct(n, f, h, w)),
            d && (n = kt(n, d, p, w)),
            (t -= i),
            w && t < g)
          )
            return (
              (r = ra(n, r)), Yt(l, u, zt, v.placeholder, c, n, r, m, _, g - t)
            );
          if (((r = b ? c : this), (e = x ? r[l] : l), (t = n.length), m)) {
            i = n.length;
            for (var o = pi(m.length, i), a = At(n); o--; ) {
              var s = m[o];
              n[o] = de(s, i) ? a[s] : ua;
            }
          } else T && 1 < t && n.reverse();
          return (
            y && _ < t && (n.length = _),
            this && this !== es && this instanceof v && (e = S || It(e)),
            e.apply(r, n)
          );
        }
        var y = 128 & u,
          b = 1 & u,
          x = 2 & u,
          w = 24 & u,
          T = 512 & u,
          S = x ? ua : It(l);
        return v;
      }
      function Ht(n, i) {
        return function (t, e) {
          return B(t, n, i(e));
        };
      }
      function qt(i) {
        return function (t, e) {
          var n;
          if (t === ua && e === ua) return 0;
          if ((t !== ua && (n = t), e !== ua)) {
            if (n === ua) return e;
            "string" == typeof t || "string" == typeof e
              ? ((t = dt(t)), (e = dt(e)))
              : ((t = ht(t)), (e = ht(e))),
              (n = i(t, e));
          }
          return n;
        };
      }
      function Wt(i) {
        return $e(function (t) {
          return (
            (t =
              1 == t.length && Rr(t[0])
                ? Ro(t[0], Vo(te()))
                : Ro(O(t, 1, he), Vo(te()))),
            $e(function (e) {
              var n = this;
              return i(t, function (t) {
                return Co(t, n, e);
              });
            })
          );
        });
      }
      function Xt(t, e) {
        var n = (e = e === ua ? " " : dt(e)).length;
        return n < 2
          ? n
            ? ot(e, t)
            : e
          : ((n = ot(e, si(t / aa(e)))),
            Va.test(e) ? xt(n.match(Ua), 0, t).join("") : n.slice(0, t));
      }
      function Ut(a, t, s, l) {
        function u() {
          for (
            var t = -1,
              e = arguments.length,
              n = -1,
              i = l.length,
              r = Array(i + e),
              o = this && this !== es && this instanceof u ? f : a;
            ++n < i;

          )
            r[n] = l[n];
          for (; e--; ) r[n++] = arguments[++t];
          return Co(o, c ? s : this, r);
        }
        var c = 1 & t,
          f = It(a);
        return u;
      }
      function $t(o) {
        return function (t, e, n) {
          n && "number" != typeof n && pe(t, e, n) && (e = n = ua),
            (t = (t = mn(t)) == t ? t : 0),
            e === ua ? ((e = t), (t = 0)) : (e = mn(e) || 0),
            (n = n === ua ? (t < e ? 1 : -1) : mn(n) || 0);
          var i = -1;
          e = di(si((e - t) / (n || 1)), 0);
          for (var r = Array(e); e--; ) (r[o ? e : ++i] = t), (t += n);
          return r;
        };
      }
      function Vt(n) {
        return function (t, e) {
          return (
            ("string" == typeof t && "string" == typeof e) ||
              ((t = mn(t)), (e = mn(e))),
            n(t, e)
          );
        };
      }
      function Yt(t, e, n, i, r, o, a, s, l, u) {
        var c = 8 & e;
        return (
          4 & (e = (e | (c ? 32 : 64)) & ~(c ? 64 : 32)) || (e &= -4),
          (e = [
            t,
            e,
            r,
            c ? o : ua,
            c ? a : ua,
            (o = c ? ua : o),
            (a = c ? ua : a),
            s,
            l,
            u,
          ]),
          (n = n.apply(ua, e)),
          ge(t) && Yi(n, e),
          (n.placeholder = i),
          n
        );
      }
      function Qt(t) {
        var i = Ln[t];
        return function (t, e) {
          if (((t = mn(t)), (e = dn(e)))) {
            var n = (gn(t) + "e").split("e");
            return +(
              (n = (gn((n = i(n[0] + "e" + (+n[1] + e)))) + "e").split(
                "e"
              ))[0] +
              "e" +
              (+n[1] - e)
            );
          }
          return i(t);
        };
      }
      function Zt(t, e, n, i, r, o, a, s) {
        var l = 2 & e;
        if (!l && "function" != typeof t) throw new Fn("Expected a function");
        var u = i ? i.length : 0;
        if (
          (u || ((e &= -97), (i = r = ua)),
          (a = a === ua ? a : di(dn(a), 0)),
          (s = s === ua ? s : dn(s)),
          (u -= r ? r.length : 0),
          64 & e)
        ) {
          var c = i,
            f = r;
          i = r = ua;
        }
        var h = l ? ua : Wi(t);
        return (
          (o = [t, e, n, i, r, c, f, o, a, s]),
          h &&
            ((e = (n = o[1]) | (t = h[1])),
            (i =
              (128 == t && 8 == n) ||
              (128 == t && 256 == n && h[8] >= o[7].length) ||
              (384 == t && h[8] >= h[7].length && 8 == n)),
            e < 131 || i) &&
            (1 & t && ((o[2] = h[2]), (e |= 1 & n ? 0 : 4)),
            (n = h[3]) &&
              ((i = o[3]),
              (o[3] = i ? Ct(i, n, h[4]) : n),
              (o[4] = i ? ra(o[3], "__lodash_placeholder__") : h[4])),
            (n = h[5]) &&
              ((i = o[5]),
              (o[5] = i ? kt(i, n, h[6]) : n),
              (o[6] = i ? ra(o[5], "__lodash_placeholder__") : h[6])),
            (n = h[7]) && (o[7] = n),
            128 & t && (o[8] = null == o[8] ? h[8] : pi(o[8], h[8])),
            null == o[9] && (o[9] = h[9]),
            (o[0] = h[0]),
            (o[1] = e)),
          (t = o[0]),
          (e = o[1]),
          (n = o[2]),
          (i = o[3]),
          (r = o[4]),
          !(s = o[9] = null == o[9] ? (l ? 0 : t.length) : di(o[9] - u, 0)) &&
            24 & e &&
            (e &= -25),
          (h ? Hi : Yi)(
            e && 1 != e
              ? 8 == e || 16 == e
                ? Ft(t, e, s)
                : (32 != e && 33 != e) || r.length
                ? zt.apply(ua, o)
                : Ut(t, e, n, i)
              : Nt(t, e, n),
            o
          )
        );
      }
      function Gt(t, e, n, i, r, o) {
        var a = -1,
          s = 2 & r,
          l = 1 & r,
          u = t.length,
          c = e.length;
        if (u != c && !(s && u < c)) return !1;
        if ((c = o.get(t))) return c == e;
        for (c = !0, o.set(t, e); ++a < u; ) {
          var f = t[a],
            h = e[a];
          if (i) var d = s ? i(h, f, a, e, t, o) : i(f, h, a, t, e, o);
          if (d !== ua) {
            if (d) continue;
            c = !1;
            break;
          }
          if (l) {
            if (
              !Lo(e, function (t) {
                return f === t || n(f, t, i, r, o);
              })
            ) {
              c = !1;
              break;
            }
          } else if (f !== h && !n(f, h, i, r, o)) {
            c = !1;
            break;
          }
        }
        return o["delete"](t), c;
      }
      function Kt(t, e, n, i, r, o, a) {
        switch (n) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              break;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            if (t.byteLength != e.byteLength || !i(new Kn(t), new Kn(e))) break;
            return !0;
          case "[object Boolean]":
          case "[object Date]":
            return +t == +e;
          case "[object Error]":
            return t.name == e.name && t.message == e.message;
          case "[object Number]":
            return t != +t ? e != +e : t == +e;
          case "[object RegExp]":
          case "[object String]":
            return t == e + "";
          case "[object Map]":
            var s = ia;
          case "[object Set]":
            if ((s || (s = oa), t.size != e.size && !(2 & o))) break;
            return (n = a.get(t))
              ? n == e
              : ((o |= 1), a.set(t, e), Gt(s(t), s(e), i, r, o, a));
          case "[object Symbol]":
            if (Mi) return Mi.call(t) == Mi.call(e);
        }
        return !1;
      }
      function Jt(t) {
        for (
          var e = t.name + "", n = Pi[e], i = Wn.call(Pi, e) ? n.length : 0;
          i--;

        ) {
          var r = n[i],
            o = r.func;
          if (null == o || o == t) return r.name;
        }
        return e;
      }
      function te(t, e) {
        var n = (n = d.iteratee || jn) === jn ? W : n;
        return arguments.length ? n(t, e) : n;
      }
      function ee(t) {
        for (var e = (t = wn(t)).length; e--; ) {
          var n = t[e][1];
          t[e][2] = n == n && !nn(n);
        }
        return t;
      }
      function ne(t, e) {
        var n = t[e];
        return on(n) ? n : ua;
      }
      function ie(t) {
        return (Wn.call(d, "placeholder") ? d : t).placeholder;
      }
      function re(t) {
        return ei(Object(t));
      }
      function oe(t) {
        return $n.call(t);
      }
      function ae(t, e, n) {
        for (
          var i, r = -1, o = (e = me(e, t) ? [e] : bt(e)).length;
          ++r < o;

        ) {
          var a = we(e[r]);
          if (!(i = null != t && n(t, a))) break;
          t = t[a];
        }
        return (
          i ||
          (!!(o = t ? t.length : 0) &&
            en(o) &&
            de(a, o) &&
            (Rr(t) || un(t) || Qe(t)))
        );
      }
      function se(t) {
        var e = t.length,
          n = t.constructor(e);
        return (
          e &&
            "string" == typeof t[0] &&
            Wn.call(t, "index") &&
            ((n.index = t.index), (n.input = t.input)),
          n
        );
      }
      function le(t) {
        return "function" != typeof t.constructor || ve(t)
          ? {}
          : T(ui(Object(t)));
      }
      function ue(t, e, n, i) {
        var r = t.constructor;
        switch (e) {
          case "[object ArrayBuffer]":
            return Tt(t);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+t);
          case "[object DataView]":
            return (
              (e = i ? Tt(t.buffer) : t.buffer),
              new t.constructor(e, t.byteOffset, t.byteLength)
            );
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (
              (e = i ? Tt(t.buffer) : t.buffer),
              new t.constructor(e, t.byteOffset, t.length)
            );
          case "[object Map]":
            return No((e = i ? n(ia(t), !0) : ia(t)), To, new t.constructor());
          case "[object Number]":
          case "[object String]":
            return new r(t);
          case "[object RegExp]":
            return (
              ((e = new t.constructor(t.source, Da.exec(t))).lastIndex =
                t.lastIndex),
              e
            );
          case "[object Set]":
            return No((e = i ? n(oa(t), !0) : oa(t)), So, new t.constructor());
          case "[object Symbol]":
            return Mi ? Object(Mi.call(t)) : {};
        }
      }
      function ce(t) {
        var e = t ? t.length : ua;
        return en(e) && (Rr(t) || un(t) || Qe(t)) ? Uo(e, String) : null;
      }
      function fe(t) {
        return Ge(t) && (Rr(t) || Qe(t));
      }
      function he(t) {
        return Rr(t) && !(2 == t.length && !Je(t[0]));
      }
      function de(t, e) {
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == typeof t || Ba.test(t)) &&
          -1 < t &&
          0 == t % 1 &&
          t < e
        );
      }
      function pe(t, e, n) {
        if (!nn(n)) return !1;
        var i = typeof e;
        return (
          !!("number" == i
            ? Ze(n) && de(e, n.length)
            : "string" == i && e in n) && Ye(n[e], t)
        );
      }
      function me(t, e) {
        if (Rr(t)) return !1;
        var n = typeof t;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != t &&
            !cn(t)
          ) ||
          Ta.test(t) ||
          !wa.test(t) ||
          (null != e && t in Object(e))
        );
      }
      function _e(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      }
      function ge(t) {
        var e = Jt(t),
          n = d[e];
        return (
          "function" == typeof n &&
          e in m.prototype &&
          (t === n || (!!(e = Wi(n)) && t === e[0]))
        );
      }
      function ve(t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || zn);
      }
      function ye(e, n) {
        return function (t) {
          return null != t && t[e] === n && (n !== ua || e in Object(t));
        };
      }
      function be(t, e, n, i, r, o) {
        return nn(t) && nn(e) && Q(t, e, ua, be, o.set(e, t)), t;
      }
      function xe(t, e) {
        return 1 == e.length ? t : D(t, st(e, 0, -1));
      }
      function we(t) {
        if ("string" == typeof t || cn(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -ca ? "-0" : e;
      }
      function Te(t) {
        if (null == t) return "";
        try {
          return qn.call(t);
        } catch (So) {}
        return t + "";
      }
      function Se(t) {
        if (t instanceof m) return t.clone();
        var e = new p(t.__wrapped__, t.__chain__);
        return (
          (e.__actions__ = At(t.__actions__)),
          (e.__index__ = t.__index__),
          (e.__values__ = t.__values__),
          e
        );
      }
      function Ce(t, e, n) {
        var i = t ? t.length : 0;
        return i ? st(t, (e = n || e === ua ? 1 : dn(e)) < 0 ? 0 : e, i) : [];
      }
      function ke(t, e, n) {
        var i = t ? t.length : 0;
        return i
          ? st(t, 0, (e = i - (e = n || e === ua ? 1 : dn(e))) < 0 ? 0 : e)
          : [];
      }
      function Ae(t) {
        return t && t.length ? t[0] : ua;
      }
      function Pe(t) {
        var e = t ? t.length : 0;
        return e ? t[e - 1] : ua;
      }
      function Oe(t, e) {
        return t && t.length && e && e.length ? nt(t, e) : t;
      }
      function je(t) {
        return t ? vi.call(t) : t;
      }
      function Ee(e) {
        if (!e || !e.length) return [];
        var n = 0;
        return (
          (e = Oo(e, function (t) {
            return Ge(t) ? ((n = di(t.length, n)), !0) : void 0;
          })),
          Uo(n, function (t) {
            return Ro(e, tt(t));
          })
        );
      }
      function Re(t, e) {
        if (!t || !t.length) return [];
        var n = Ee(t);
        return null == e
          ? n
          : Ro(n, function (t) {
              return Co(e, ua, t);
            });
      }
      function De(t) {
        return ((t = d(t)).__chain__ = !0), t;
      }
      function Ne(t, e) {
        return e(t);
      }
      function Me() {
        return this;
      }
      function Le(t, e) {
        return "function" == typeof e && Rr(t) ? Ao(t, e) : Ii(t, te(e));
      }
      function Ie(t, e) {
        var n;
        if ("function" == typeof e && Rr(t)) {
          for (n = t.length; n-- && !1 !== e(t[n], n, t); );
          n = t;
        } else n = Fi(t, te(e));
        return n;
      }
      function Fe(t, e) {
        return (Rr(t) ? Ro : $)(t, te(e, 3));
      }
      function Be(t, e, n) {
        var i = -1,
          r = hn(t),
          o = r.length,
          a = o - 1;
        for (e = (n ? pe(t, e, n) : e === ua) ? 1 : x(dn(e), 0, o); ++i < e; )
          (n = r[(t = rt(i, a))]), (r[t] = r[i]), (r[i] = n);
        return (r.length = e), r;
      }
      function ze(t, e, n) {
        return (
          (e = n ? ua : e),
          (e = t && null == e ? t.length : e),
          Zt(t, 128, ua, ua, ua, ua, e)
        );
      }
      function He(t, e) {
        var n;
        if ("function" != typeof e) throw new Fn("Expected a function");
        return (
          (t = dn(t)),
          function () {
            return (
              0 < --t && (n = e.apply(this, arguments)), t <= 1 && (e = ua), n
            );
          }
        );
      }
      function qe(t, e, n) {
        return (
          ((t = Zt(t, 8, ua, ua, ua, ua, ua, (e = n ? ua : e))).placeholder =
            qe.placeholder),
          t
        );
      }
      function We(t, e, n) {
        return (
          ((t = Zt(t, 16, ua, ua, ua, ua, ua, (e = n ? ua : e))).placeholder =
            We.placeholder),
          t
        );
      }
      function Xe(i, n, t) {
        function r(t) {
          var e = l,
            n = u;
          return (l = u = ua), (p = t), (f = i.apply(n, e));
        }
        function o(t) {
          var e = t - d;
          return (t -= p), !d || n <= e || e < 0 || (_ && c <= t);
        }
        function a() {
          var t,
            e = br();
          if (o(e)) return s(e);
          (t = e - p),
            (e = n - (e - d)),
            (t = _ ? pi(e, c - t) : e),
            (h = oi(a, t));
        }
        function s(t) {
          return Jn(h), (h = ua), g && l ? r(t) : ((l = u = ua), f);
        }
        function e() {
          var t = br(),
            e = o(t);
          if (((l = arguments), (u = this), (d = t), e)) {
            if (h === ua) return (p = t = d), (h = oi(a, n)), m ? r(t) : f;
            if (_) return Jn(h), (h = oi(a, n)), r(d);
          }
          return h === ua && (h = oi(a, n)), f;
        }
        var l,
          u,
          c,
          f,
          h,
          d = 0,
          p = 0,
          m = !1,
          _ = !1,
          g = !0;
        if ("function" != typeof i) throw new Fn("Expected a function");
        return (
          (n = mn(n) || 0),
          nn(t) &&
            ((m = !!t.leading),
            (c = (_ = "maxWait" in t) ? di(mn(t.maxWait) || 0, n) : c),
            (g = "trailing" in t ? !!t.trailing : g)),
          (e.cancel = function () {
            h !== ua && Jn(h), (d = p = 0), (l = u = h = ua);
          }),
          (e.flush = function () {
            return h === ua ? f : s(br());
          }),
          e
        );
      }
      function Ue(i, r) {
        function o() {
          var t = arguments,
            e = r ? r.apply(this, t) : t[0],
            n = o.cache;
          return n.has(e)
            ? n.get(e)
            : ((t = i.apply(this, t)), (o.cache = n.set(e, t)), t);
        }
        if ("function" != typeof i || (r && "function" != typeof r))
          throw new Fn("Expected a function");
        return (o.cache = new (Ue.Cache || a)()), o;
      }
      function $e(r, o) {
        if ("function" != typeof r) throw new Fn("Expected a function");
        return (
          (o = di(o === ua ? r.length - 1 : dn(o), 0)),
          function () {
            for (
              var t = arguments, e = -1, n = di(t.length - o, 0), i = Array(n);
              ++e < n;

            )
              i[e] = t[o + e];
            switch (o) {
              case 0:
                return r.call(this, i);
              case 1:
                return r.call(this, t[0], i);
              case 2:
                return r.call(this, t[0], t[1], i);
            }
            for (n = Array(o + 1), e = -1; ++e < o; ) n[e] = t[e];
            return (n[o] = i), Co(r, this, n);
          }
        );
      }
      function Ve(t) {
        if (!arguments.length) return [];
        var e = t;
        return Rr(e) ? e : [e];
      }
      function Ye(t, e) {
        return t === e || (t != t && e != e);
      }
      function Qe(t) {
        return (
          Ge(t) &&
          Wn.call(t, "callee") &&
          (!ri.call(t, "callee") || "[object Arguments]" == $n.call(t))
        );
      }
      function Ze(t) {
        return null != t && en(Xi(t)) && !Je(t);
      }
      function Ge(t) {
        return rn(t) && Ze(t);
      }
      function Ke(t) {
        return (
          !!rn(t) &&
          ("[object Error]" == $n.call(t) ||
            ("string" == typeof t.message && "string" == typeof t.name))
        );
      }
      function Je(t) {
        return (
          "[object Function]" == (t = nn(t) ? $n.call(t) : "") ||
          "[object GeneratorFunction]" == t
        );
      }
      function tn(t) {
        return "number" == typeof t && t == dn(t);
      }
      function en(t) {
        return (
          "number" == typeof t && -1 < t && 0 == t % 1 && t <= 9007199254740991
        );
      }
      function nn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function rn(t) {
        return !!t && "object" == typeof t;
      }
      function on(t) {
        return !!nn(t) && (Je(t) || ea(t) ? Yn : Ia).test(Te(t));
      }
      function an(t) {
        return (
          "number" == typeof t || (rn(t) && "[object Number]" == $n.call(t))
        );
      }
      function sn(t) {
        return (
          !(!rn(t) || "[object Object]" != $n.call(t) || ea(t)) &&
          (null === (t = ui(Object(t))) ||
            ("function" ==
              typeof (t = Wn.call(t, "constructor") && t.constructor) &&
              t instanceof t &&
              qn.call(t) == Un))
        );
      }
      function ln(t) {
        return nn(t) && "[object RegExp]" == $n.call(t);
      }
      function un(t) {
        return (
          "string" == typeof t ||
          (!Rr(t) && rn(t) && "[object String]" == $n.call(t))
        );
      }
      function cn(t) {
        return (
          "symbol" == typeof t || (rn(t) && "[object Symbol]" == $n.call(t))
        );
      }
      function fn(t) {
        return rn(t) && en(t.length) && !!Za[$n.call(t)];
      }
      function hn(t) {
        if (!t) return [];
        if (Ze(t)) return un(t) ? t.match(Ua) : At(t);
        if (ni && t[ni]) return na(t[ni]());
        var e = oe(t);
        return ("[object Map]" == e ? ia : "[object Set]" == e ? oa : Sn)(t);
      }
      function dn(t) {
        if (!t) return 0 === t ? t : 0;
        if ((t = mn(t)) === ca || t === -ca)
          return 17976931348623157e292 * (t < 0 ? -1 : 1);
        var e = t % 1;
        return t == t ? (e ? t - e : t) : 0;
      }
      function pn(t) {
        return t ? x(dn(t), 0, 4294967295) : 0;
      }
      function mn(t) {
        if ("number" == typeof t) return t;
        if (cn(t)) return fa;
        if (
          (nn(t) &&
            (t = nn((t = Je(t.valueOf) ? t.valueOf() : t)) ? t + "" : t),
          "string" != typeof t)
        )
          return 0 === t ? t : +t;
        t = t.replace(Aa, "");
        var e = La.test(t);
        return e || Fa.test(t)
          ? Ja(t.slice(2), e ? 2 : 8)
          : Ma.test(t)
          ? fa
          : +t;
      }
      function _n(t) {
        return Pt(t, xn(t));
      }
      function gn(t) {
        return null == t ? "" : dt(t);
      }
      function vn(t, e, n) {
        return (t = null == t ? ua : D(t, e)) === ua ? n : t;
      }
      function yn(t, e) {
        return null != t && ae(t, e, I);
      }
      function bn(t) {
        var e = ve(t);
        if (!e && !Ze(t)) return hi(Object(t));
        var n,
          i,
          r = !!(i = ce(t)),
          o = (i = i || []).length;
        for (n in t)
          !L(t, n) ||
            (r && ("length" == n || de(n, o))) ||
            (e && "constructor" == n) ||
            i.push(n);
        return i;
      }
      function xn(t) {
        for (
          var e,
            n = -1,
            i = ve(t),
            r = X(t),
            o = r.length,
            a = !!(e = ce(t)),
            s = (e = e || []).length;
          ++n < o;

        ) {
          var l = r[n];
          (a && ("length" == l || de(l, s))) ||
            ("constructor" == l && (i || !Wn.call(t, l))) ||
            e.push(l);
        }
        return e;
      }
      function wn(t) {
        return $o(t, bn(t));
      }
      function Tn(t) {
        return $o(t, xn(t));
      }
      function Sn(t) {
        return t ? Yo(t, bn(t)) : [];
      }
      function Cn(t) {
        return io(gn(t).toLowerCase());
      }
      function kn(t) {
        return (t = gn(t)) && t.replace(za, Go).replace(Xa, "");
      }
      function An(t, e, n) {
        return (
          (t = gn(t)),
          (e = n ? ua : e) === ua && (e = Ya.test(t) ? $a : ja),
          t.match(e) || []
        );
      }
      function Pn(t) {
        return function () {
          return t;
        };
      }
      function On(t) {
        return t;
      }
      function jn(t) {
        return W("function" == typeof t ? t : w(t, !0));
      }
      function En(i, e, t) {
        var n = bn(e),
          r = R(e, n);
        null != t ||
          (nn(e) && (r.length || !n.length)) ||
          ((t = e), (e = i), (i = this), (r = R(e, bn(e))));
        var o = !(nn(t) && "chain" in t && !t.chain),
          a = Je(i);
        return (
          Ao(r, function (t) {
            var n = e[t];
            (i[t] = n),
              a &&
                (i.prototype[t] = function () {
                  var t = this.__chain__;
                  if (o || t) {
                    var e = i(this.__wrapped__);
                    return (
                      (e.__actions__ = At(this.__actions__)).push({
                        func: n,
                        args: arguments,
                        thisArg: i,
                      }),
                      (e.__chain__ = t),
                      e
                    );
                  }
                  return n.apply(i, Do([this.value()], arguments));
                });
          }),
          i
        );
      }
      function Rn() {}
      function Dn(t) {
        return me(t) ? tt(we(t)) : et(t);
      }
      var Nn = (t = t ? ns.defaults({}, t, ns.pick(es, Qa)) : es).Date,
        Mn = t.Error,
        Ln = t.Math,
        In = t.RegExp,
        Fn = t.TypeError,
        Bn = t.Array.prototype,
        zn = t.Object.prototype,
        Hn = t.String.prototype,
        qn = t.Function.prototype.toString,
        Wn = zn.hasOwnProperty,
        Xn = 0,
        Un = qn.call(Object),
        $n = zn.toString,
        Vn = es._,
        Yn = In(
          "^" +
            qn
              .call(Wn)
              .replace(Ca, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        Qn = ts ? t.Buffer : ua,
        Zn = t.Reflect,
        Gn = t.Symbol,
        Kn = t.Uint8Array,
        Jn = t.clearTimeout,
        ti = Zn ? Zn.f : ua,
        ei = Object.getOwnPropertySymbols,
        ni = "symbol" == typeof (ni = Gn && Gn.iterator) ? ni : ua,
        ii = Object.create,
        ri = zn.propertyIsEnumerable,
        oi = t.setTimeout,
        ai = Bn.splice,
        si = Ln.ceil,
        li = Ln.floor,
        ui = Object.getPrototypeOf,
        ci = t.isFinite,
        fi = Bn.join,
        hi = Object.keys,
        di = Ln.max,
        pi = Ln.min,
        mi = t.parseInt,
        _i = Ln.random,
        gi = Hn.replace,
        vi = Bn.reverse,
        yi = Hn.split,
        bi = ne(t, "DataView"),
        xi = ne(t, "Map"),
        wi = ne(t, "Promise"),
        Ti = ne(t, "Set"),
        Si = ne(t, "WeakMap"),
        Ci = ne(Object, "create"),
        ki = Si && new Si(),
        Ai = !ri.call({ valueOf: 1 }, "valueOf"),
        Pi = {},
        Oi = Te(bi),
        ji = Te(xi),
        Ei = Te(wi),
        Ri = Te(Ti),
        Di = Te(Si),
        Ni = Gn ? Gn.prototype : ua,
        Mi = Ni ? Ni.valueOf : ua,
        Li = Ni ? Ni.toString : ua;
      (d.templateSettings = {
        escape: ya,
        evaluate: ba,
        interpolate: xa,
        variable: "",
        imports: { _: d },
      }),
        (d.prototype = o.prototype),
        (d.prototype.constructor = d),
        (p.prototype = T(o.prototype)),
        (p.prototype.constructor = p),
        (m.prototype = T(o.prototype)),
        (m.prototype.constructor = m),
        (e.prototype = Ci ? Ci(null) : zn),
        (a.prototype.clear = function () {
          this.__data__ = {
            hash: new e(),
            map: xi ? new xi() : [],
            string: new e(),
          };
        }),
        (a.prototype["delete"] = function (t) {
          var e = this.__data__;
          return (
            _e(t)
              ? ((e = "string" == typeof t ? e.string : e.hash),
                (t = (Ci ? e[t] !== ua : Wn.call(e, t)) && delete e[t]))
              : (t = xi ? e.map["delete"](t) : i(e.map, t)),
            t
          );
        }),
        (a.prototype.get = function (t) {
          var e = this.__data__;
          return (
            _e(t)
              ? ((e = "string" == typeof t ? e.string : e.hash),
                Ci
                  ? (t = "__lodash_hash_undefined__" === (t = e[t]) ? ua : t)
                  : (t = Wn.call(e, t) ? e[t] : ua))
              : (t = xi ? e.map.get(t) : r(e.map, t)),
            t
          );
        }),
        (a.prototype.has = function (t) {
          var e = this.__data__;
          return (
            _e(t)
              ? ((e = "string" == typeof t ? e.string : e.hash),
                (t = Ci ? e[t] !== ua : Wn.call(e, t)))
              : (t = xi ? e.map.has(t) : -1 < s(e.map, t)),
            t
          );
        }),
        (a.prototype.set = function (t, e) {
          var n = this.__data__;
          return (
            _e(t)
              ? (("string" == typeof t ? n.string : n.hash)[t] =
                  Ci && e === ua ? "__lodash_hash_undefined__" : e)
              : xi
              ? n.map.set(t, e)
              : l(n.map, t, e),
            this
          );
        }),
        (_.prototype.push = function (t) {
          var e = this.__data__;
          _e(t)
            ? ((e = e.__data__),
              (("string" == typeof t ? e.string : e.hash)[t] =
                "__lodash_hash_undefined__"))
            : e.set(t, "__lodash_hash_undefined__");
        }),
        (v.prototype.clear = function () {
          this.__data__ = { array: [], map: null };
        }),
        (v.prototype["delete"] = function (t) {
          var e = this.__data__,
            n = e.array;
          return n ? i(n, t) : e.map["delete"](t);
        }),
        (v.prototype.get = function (t) {
          var e = this.__data__,
            n = e.array;
          return n ? r(n, t) : e.map.get(t);
        }),
        (v.prototype.has = function (t) {
          var e = this.__data__,
            n = e.array;
          return n ? -1 < s(n, t) : e.map.has(t);
        }),
        (v.prototype.set = function (t, e) {
          var n = this.__data__,
            i = n.array;
          return (
            i &&
              (i.length < 199
                ? l(i, t, e)
                : ((n.array = null), (n.map = new a(i)))),
            (n = n.map) && n.set(t, e),
            this
          );
        });
      var Ii = Rt(j),
        Fi = Rt(E, !0),
        Bi = Dt(),
        zi = Dt(!0);
      ti &&
        !ri.call({ valueOf: 1 }, "valueOf") &&
        (X = function (t) {
          return na(ti(t));
        });
      var Hi = ki
          ? function (t, e) {
              return ki.set(t, e), t;
            }
          : On,
        qi =
          Ti && 1 / oa(new Ti([, -0]))[1] == ca
            ? function (t) {
                return new Ti(t);
              }
            : Rn,
        Wi = ki
          ? function (t) {
              return ki.get(t);
            }
          : Rn,
        Xi = tt("length");
      ei ||
        (re = function () {
          return [];
        });
      var Ui = ei
        ? function (t) {
            for (var e = []; t; ) Do(e, re(t)), (t = ui(Object(t)));
            return e;
          }
        : re;
      ((bi && "[object DataView]" != oe(new bi(new ArrayBuffer(1)))) ||
        (xi && "[object Map]" != oe(new xi())) ||
        (wi && "[object Promise]" != oe(wi.resolve())) ||
        (Ti && "[object Set]" != oe(new Ti())) ||
        (Si && "[object WeakMap]" != oe(new Si()))) &&
        (oe = function (t) {
          var e = $n.call(t);
          if (
            (t = (t = "[object Object]" == e ? t.constructor : ua) ? Te(t) : ua)
          )
            switch (t) {
              case Oi:
                return "[object DataView]";
              case ji:
                return "[object Map]";
              case Ei:
                return "[object Promise]";
              case Ri:
                return "[object Set]";
              case Di:
                return "[object WeakMap]";
            }
          return e;
        });
      var $i,
        Vi,
        Yi =
          ((Vi = $i = 0),
          function (t, e) {
            var n = br(),
              i = 16 - (n - Vi);
            if (((Vi = n), 0 < i)) {
              if (150 <= ++$i) return t;
            } else $i = 0;
            return Hi(t, e);
          }),
        Qi = Ue(function (t) {
          var r = [];
          return (
            gn(t).replace(Sa, function (t, e, n, i) {
              r.push(n ? i.replace(Ea, "$1") : e || t);
            }),
            r
          );
        }),
        Zi = $e(function (t, e) {
          return Ge(t) ? C(t, O(e, 1, Ge, !0)) : [];
        }),
        Gi = $e(function (t, e) {
          var n = Pe(e);
          return Ge(n) && (n = ua), Ge(t) ? C(t, O(e, 1, Ge, !0), te(n)) : [];
        }),
        Ki = $e(function (t, e) {
          var n = Pe(e);
          return Ge(n) && (n = ua), Ge(t) ? C(t, O(e, 1, Ge, !0), ua, n) : [];
        }),
        Ji = $e(function (t) {
          var e = Ro(t, yt);
          return e.length && e[0] === t[0] ? F(e) : [];
        }),
        tr = $e(function (t) {
          var e = Pe(t),
            n = Ro(t, yt);
          return (
            e === Pe(n) ? (e = ua) : n.pop(),
            n.length && n[0] === t[0] ? F(n, te(e)) : []
          );
        }),
        er = $e(function (t) {
          var e = Pe(t),
            n = Ro(t, yt);
          return (
            e === Pe(n) ? (e = ua) : n.pop(),
            n.length && n[0] === t[0] ? F(n, ua, e) : []
          );
        }),
        nr = $e(Oe),
        ir = $e(function (t, e) {
          e = O(e, 1);
          var n = t ? t.length : 0,
            i = c(t, e);
          return (
            it(
              t,
              Ro(e, function (t) {
                return de(t, n) ? +t : t;
              }).sort(St)
            ),
            i
          );
        }),
        rr = $e(function (t) {
          return pt(O(t, 1, Ge, !0));
        }),
        or = $e(function (t) {
          var e = Pe(t);
          return Ge(e) && (e = ua), pt(O(t, 1, Ge, !0), te(e));
        }),
        ar = $e(function (t) {
          var e = Pe(t);
          return Ge(e) && (e = ua), pt(O(t, 1, Ge, !0), ua, e);
        }),
        sr = $e(function (t, e) {
          return Ge(t) ? C(t, e) : [];
        }),
        lr = $e(function (t) {
          return gt(Oo(t, Ge));
        }),
        ur = $e(function (t) {
          var e = Pe(t);
          return Ge(e) && (e = ua), gt(Oo(t, Ge), te(e));
        }),
        cr = $e(function (t) {
          var e = Pe(t);
          return Ge(e) && (e = ua), gt(Oo(t, Ge), ua, e);
        }),
        fr = $e(Ee),
        hr = $e(function (t) {
          var e;
          return Re(
            t,
            (e =
              "function" == typeof (e = 1 < (e = t.length) ? t[e - 1] : ua)
                ? (t.pop(), e)
                : ua)
          );
        }),
        dr = $e(function (e) {
          function t(t) {
            return c(t, e);
          }
          var n = (e = O(e, 1)).length,
            i = n ? e[0] : 0,
            r = this.__wrapped__;
          return !(1 < n || this.__actions__.length) && r instanceof m && de(i)
            ? ((r = r.slice(i, +i + (n ? 1 : 0))).__actions__.push({
                func: Ne,
                args: [t],
                thisArg: ua,
              }),
              new p(r, this.__chain__).thru(function (t) {
                return n && !t.length && t.push(ua), t;
              }))
            : this.thru(t);
        }),
        pr = jt(function (t, e, n) {
          Wn.call(t, n) ? ++t[n] : (t[n] = 1);
        }),
        mr = jt(function (t, e, n) {
          Wn.call(t, n) ? t[n].push(e) : (t[n] = [e]);
        }),
        _r = $e(function (t, n, i) {
          var r = -1,
            o = "function" == typeof n,
            a = me(n),
            s = Ze(t) ? Array(t.length) : [];
          return (
            Ii(t, function (t) {
              var e = o ? n : a && null != t ? t[n] : ua;
              s[++r] = e ? Co(e, t, i) : z(t, n, i);
            }),
            s
          );
        }),
        gr = jt(function (t, e, n) {
          t[n] = e;
        }),
        vr = jt(
          function (t, e, n) {
            t[n ? 0 : 1].push(e);
          },
          function () {
            return [[], []];
          }
        ),
        yr = $e(function (t, e) {
          if (null == t) return [];
          var n = e.length;
          return (
            1 < n && pe(t, e[0], e[1])
              ? (e = [])
              : 2 < n && pe(e[0], e[1], e[2]) && (e = [e[0]]),
            G(t, (e = 1 == e.length && Rr(e[0]) ? e[0] : O(e, 1, he)), [])
          );
        }),
        br = Nn.now,
        xr = $e(function (t, e, n) {
          var i = 1;
          if (n.length) {
            var r = ra(n, ie(xr));
            i = 32 | i;
          }
          return Zt(t, i, e, n, r);
        }),
        wr = $e(function (t, e, n) {
          var i = 3;
          if (n.length) {
            var r = ra(n, ie(wr));
            i = 32 | i;
          }
          return Zt(e, i, t, n, r);
        }),
        Tr = $e(function (t, e) {
          return S(t, 1, e);
        }),
        Sr = $e(function (t, e, n) {
          return S(t, mn(e) || 0, n);
        });
      Ue.Cache = a;
      var Cr,
        kr = $e(function (i, r) {
          var o = (r =
            1 == r.length && Rr(r[0])
              ? Ro(r[0], Vo(te()))
              : Ro(O(r, 1, he), Vo(te()))).length;
          return $e(function (t) {
            for (var e = -1, n = pi(t.length, o); ++e < n; )
              t[e] = r[e].call(this, t[e]);
            return Co(i, this, t);
          });
        }),
        Ar = $e(function (t, e) {
          var n = ra(e, ie(Ar));
          return Zt(t, 32, ua, e, n);
        }),
        Pr = $e(function (t, e) {
          var n = ra(e, ie(Pr));
          return Zt(t, 64, ua, e, n);
        }),
        Or = $e(function (t, e) {
          return Zt(t, 256, ua, ua, ua, O(e, 1));
        }),
        jr = Vt(M),
        Er = Vt(function (t, e) {
          return e <= t;
        }),
        Rr = Array.isArray,
        Dr = Qn
          ? function (t) {
              return t instanceof Qn;
            }
          : Pn(!1),
        Nr = Vt(U),
        Mr = Vt(function (t, e) {
          return t <= e;
        }),
        Lr = Et(function (t, e) {
          if (Ai || ve(e) || Ze(e)) Pt(e, bn(e), t);
          else for (var n in e) Wn.call(e, n) && h(t, n, e[n]);
        }),
        Ir = Et(function (t, e) {
          if (Ai || ve(e) || Ze(e)) Pt(e, xn(e), t);
          else for (var n in e) h(t, n, e[n]);
        }),
        Fr = Et(function (t, e, n, i) {
          Pt(e, xn(e), t, i);
        }),
        Br = Et(function (t, e, n, i) {
          Pt(e, bn(e), t, i);
        }),
        zr = $e(function (t, e) {
          return c(t, O(e, 1));
        }),
        Hr = $e(function (t) {
          return t.push(ua, f), Co(Fr, ua, t);
        }),
        qr = $e(function (t) {
          return t.push(ua, be), Co(Vr, ua, t);
        }),
        Wr = Ht(function (t, e, n) {
          t[e] = n;
        }, Pn(On)),
        Xr = Ht(function (t, e, n) {
          Wn.call(t, e) ? t[e].push(n) : (t[e] = [n]);
        }, te),
        Ur = $e(z),
        $r = Et(function (t, e, n) {
          Q(t, e, n);
        }),
        Vr = Et(function (t, e, n, i) {
          Q(t, e, n, i);
        }),
        Yr = $e(function (t, e) {
          return null == t
            ? {}
            : ((e = Ro(O(e, 1), we)), K(t, C(N(t, xn, Ui), e)));
        }),
        Qr = $e(function (t, e) {
          return null == t ? {} : K(t, Ro(O(e, 1), we));
        }),
        Zr = Lt(function (t, e, n) {
          return (e = e.toLowerCase()), t + (n ? Cn(e) : e);
        }),
        Gr = Lt(function (t, e, n) {
          return t + (n ? "-" : "") + e.toLowerCase();
        }),
        Kr = Lt(function (t, e, n) {
          return t + (n ? " " : "") + e.toLowerCase();
        }),
        Jr = Mt("toLowerCase"),
        to = Lt(function (t, e, n) {
          return t + (n ? "_" : "") + e.toLowerCase();
        }),
        eo = Lt(function (t, e, n) {
          return t + (n ? " " : "") + io(e);
        }),
        no = Lt(function (t, e, n) {
          return t + (n ? " " : "") + e.toUpperCase();
        }),
        io = Mt("toUpperCase"),
        ro = $e(function (t, e) {
          try {
            return Co(t, ua, e);
          } catch (ko) {
            return Ke(ko) ? ko : new Mn(ko);
          }
        }),
        oo = $e(function (e, t) {
          return (
            Ao(O(t, 1), function (t) {
              (t = we(t)), (e[t] = xr(e[t], e));
            }),
            e
          );
        }),
        ao = Bt(),
        so = Bt(!0),
        lo = $e(function (e, n) {
          return function (t) {
            return z(t, e, n);
          };
        }),
        uo = $e(function (e, n) {
          return function (t) {
            return z(e, t, n);
          };
        }),
        co = Wt(Ro),
        fo = Wt(Po),
        ho = Wt(Lo),
        po = $t(),
        mo = $t(!0),
        _o = qt(function (t, e) {
          return t + e;
        }),
        go = Qt("ceil"),
        vo = qt(function (t, e) {
          return t / e;
        }),
        yo = Qt("floor"),
        bo = qt(function (t, e) {
          return t * e;
        }),
        xo = Qt("round"),
        wo = qt(function (t, e) {
          return t - e;
        });
      return (
        (d.after = function (t, e) {
          if ("function" != typeof e) throw new Fn("Expected a function");
          return (
            (t = dn(t)),
            function () {
              return --t < 1 ? e.apply(this, arguments) : void 0;
            }
          );
        }),
        (d.ary = ze),
        (d.assign = Lr),
        (d.assignIn = Ir),
        (d.assignInWith = Fr),
        (d.assignWith = Br),
        (d.at = zr),
        (d.before = He),
        (d.bind = xr),
        (d.bindAll = oo),
        (d.bindKey = wr),
        (d.castArray = Ve),
        (d.chain = De),
        (d.chunk = function (t, e, n) {
          if (
            ((e = (n ? pe(t, e, n) : e === ua) ? 1 : di(dn(e), 0)),
            !(n = t ? t.length : 0) || e < 1)
          )
            return [];
          for (var i = 0, r = 0, o = Array(si(n / e)); i < n; )
            o[r++] = st(t, i, (i += e));
          return o;
        }),
        (d.compact = function (t) {
          for (var e = -1, n = t ? t.length : 0, i = 0, r = []; ++e < n; ) {
            var o = t[e];
            o && (r[i++] = o);
          }
          return r;
        }),
        (d.concat = function (t) {
          var e = arguments.length,
            n = Ve(t);
          if (e < 2) return e ? At(n) : [];
          for (var i = Array(e - 1); e--; ) i[e - 1] = arguments[e];
          (e = O(i, 1)), (i = -1);
          for (
            var r = n.length, o = -1, a = e.length, s = Array(r + a);
            ++i < r;

          )
            s[i] = n[i];
          for (; ++o < a; ) s[i++] = e[o];
          return s;
        }),
        (d.cond = function (i) {
          var r = i ? i.length : 0,
            e = te();
          return (
            (i = r
              ? Ro(i, function (t) {
                  if ("function" != typeof t[1])
                    throw new Fn("Expected a function");
                  return [e(t[0]), t[1]];
                })
              : []),
            $e(function (t) {
              for (var e = -1; ++e < r; ) {
                var n = i[e];
                if (Co(n[0], this, t)) return Co(n[1], this, t);
              }
            })
          );
        }),
        (d.conforms = function (t) {
          return n(w(t, !0));
        }),
        (d.constant = Pn),
        (d.countBy = pr),
        (d.create = function (t, e) {
          var n = T(t);
          return e ? b(n, e) : n;
        }),
        (d.curry = qe),
        (d.curryRight = We),
        (d.debounce = Xe),
        (d.defaults = Hr),
        (d.defaultsDeep = qr),
        (d.defer = Tr),
        (d.delay = Sr),
        (d.difference = Zi),
        (d.differenceBy = Gi),
        (d.differenceWith = Ki),
        (d.drop = Ce),
        (d.dropRight = ke),
        (d.dropRightWhile = function (t, e) {
          return t && t.length ? mt(t, te(e, 3), !0, !0) : [];
        }),
        (d.dropWhile = function (t, e) {
          return t && t.length ? mt(t, te(e, 3), !0) : [];
        }),
        (d.fill = function (t, e, n, i) {
          var r = t ? t.length : 0;
          if (!r) return [];
          for (
            n && "number" != typeof n && pe(t, e, n) && ((n = 0), (i = r)),
              r = t.length,
              (n = dn(n)) < 0 && (n = r < -n ? 0 : r + n),
              (i = i === ua || r < i ? r : dn(i)) < 0 && (i += r),
              i = i < n ? 0 : pn(i);
            n < i;

          )
            t[n++] = e;
          return t;
        }),
        (d.filter = function (t, e) {
          return (Rr(t) ? Oo : P)(t, te(e, 3));
        }),
        (d.flatMap = function (t, e) {
          return O(Fe(t, e), 1);
        }),
        (d.flatMapDeep = function (t, e) {
          return O(Fe(t, e), ca);
        }),
        (d.flatMapDepth = function (t, e, n) {
          return (n = n === ua ? 1 : dn(n)), O(Fe(t, e), n);
        }),
        (d.flatten = function (t) {
          return t && t.length ? O(t, 1) : [];
        }),
        (d.flattenDeep = function (t) {
          return t && t.length ? O(t, ca) : [];
        }),
        (d.flattenDepth = function (t, e) {
          return t && t.length ? O(t, (e = e === ua ? 1 : dn(e))) : [];
        }),
        (d.flip = function (t) {
          return Zt(t, 512);
        }),
        (d.flow = ao),
        (d.flowRight = so),
        (d.fromPairs = function (t) {
          for (var e = -1, n = t ? t.length : 0, i = {}; ++e < n; ) {
            var r = t[e];
            i[r[0]] = r[1];
          }
          return i;
        }),
        (d.functions = function (t) {
          return null == t ? [] : R(t, bn(t));
        }),
        (d.functionsIn = function (t) {
          return null == t ? [] : R(t, xn(t));
        }),
        (d.groupBy = mr),
        (d.initial = function (t) {
          return ke(t, 1);
        }),
        (d.intersection = Ji),
        (d.intersectionBy = tr),
        (d.intersectionWith = er),
        (d.invert = Wr),
        (d.invertBy = Xr),
        (d.invokeMap = _r),
        (d.iteratee = jn),
        (d.keyBy = gr),
        (d.keys = bn),
        (d.keysIn = xn),
        (d.map = Fe),
        (d.mapKeys = function (t, i) {
          var r = {};
          return (
            (i = te(i, 3)),
            j(t, function (t, e, n) {
              r[i(t, e, n)] = t;
            }),
            r
          );
        }),
        (d.mapValues = function (t, i) {
          var r = {};
          return (
            (i = te(i, 3)),
            j(t, function (t, e, n) {
              r[e] = i(t, e, n);
            }),
            r
          );
        }),
        (d.matches = function (t) {
          return V(w(t, !0));
        }),
        (d.matchesProperty = function (t, e) {
          return Y(t, w(e, !0));
        }),
        (d.memoize = Ue),
        (d.merge = $r),
        (d.mergeWith = Vr),
        (d.method = lo),
        (d.methodOf = uo),
        (d.mixin = En),
        (d.negate = function (t) {
          if ("function" != typeof t) throw new Fn("Expected a function");
          return function () {
            return !t.apply(this, arguments);
          };
        }),
        (d.nthArg = function (e) {
          return (
            (e = dn(e)),
            $e(function (t) {
              return Z(t, e);
            })
          );
        }),
        (d.omit = Yr),
        (d.omitBy = function (t, n) {
          return (
            (n = te(n)),
            J(t, function (t, e) {
              return !n(t, e);
            })
          );
        }),
        (d.once = function (t) {
          return He(2, t);
        }),
        (d.orderBy = function (t, e, n, i) {
          return null == t
            ? []
            : (Rr(e) || (e = null == e ? [] : [e]),
              Rr((n = i ? ua : n)) || (n = null == n ? [] : [n]),
              G(t, e, n));
        }),
        (d.over = co),
        (d.overArgs = kr),
        (d.overEvery = fo),
        (d.overSome = ho),
        (d.partial = Ar),
        (d.partialRight = Pr),
        (d.partition = vr),
        (d.pick = Qr),
        (d.pickBy = function (t, e) {
          return null == t ? {} : J(t, te(e));
        }),
        (d.property = Dn),
        (d.propertyOf = function (e) {
          return function (t) {
            return null == e ? ua : D(e, t);
          };
        }),
        (d.pull = nr),
        (d.pullAll = Oe),
        (d.pullAllBy = function (t, e, n) {
          return t && t.length && e && e.length ? nt(t, e, te(n)) : t;
        }),
        (d.pullAllWith = function (t, e, n) {
          return t && t.length && e && e.length ? nt(t, e, ua, n) : t;
        }),
        (d.pullAt = ir),
        (d.range = po),
        (d.rangeRight = mo),
        (d.rearg = Or),
        (d.reject = function (t, i) {
          var e = Rr(t) ? Oo : P;
          return (
            (i = te(i, 3)),
            e(t, function (t, e, n) {
              return !i(t, e, n);
            })
          );
        }),
        (d.remove = function (t, e) {
          var n = [];
          if (!t || !t.length) return n;
          var i = -1,
            r = [],
            o = t.length;
          for (e = te(e, 3); ++i < o; ) {
            var a = t[i];
            e(a, i, t) && (n.push(a), r.push(i));
          }
          return it(t, r), n;
        }),
        (d.rest = $e),
        (d.reverse = je),
        (d.sampleSize = Be),
        (d.set = function (t, e, n) {
          return null == t ? t : at(t, e, n);
        }),
        (d.setWith = function (t, e, n, i) {
          return (
            (i = "function" == typeof i ? i : ua),
            null == t ? t : at(t, e, n, i)
          );
        }),
        (d.shuffle = function (t) {
          return Be(t, 4294967295);
        }),
        (d.slice = function (t, e, n) {
          var i = t ? t.length : 0;
          return i
            ? (n && "number" != typeof n && pe(t, e, n)
                ? ((e = 0), (n = i))
                : ((e = null == e ? 0 : dn(e)), (n = n === ua ? i : dn(n))),
              st(t, e, n))
            : [];
        }),
        (d.sortBy = yr),
        (d.sortedUniq = function (t) {
          return t && t.length ? ft(t) : [];
        }),
        (d.sortedUniqBy = function (t, e) {
          return t && t.length ? ft(t, te(e)) : [];
        }),
        (d.split = function (t, e, n) {
          return (
            n && "number" != typeof n && pe(t, e, n) && (e = n = ua),
            (n = n === ua ? 4294967295 : n >>> 0)
              ? (t = gn(t)) &&
                ("string" == typeof e || (null != e && !ln(e))) &&
                "" == (e = dt(e)) &&
                Va.test(t)
                ? xt(t.match(Ua), 0, n)
                : yi.call(t, e, n)
              : []
          );
        }),
        (d.spread = function (n, i) {
          if ("function" != typeof n) throw new Fn("Expected a function");
          return (
            (i = i === ua ? 0 : di(dn(i), 0)),
            $e(function (t) {
              var e = t[i];
              return (t = xt(t, 0, i)), e && Do(t, e), Co(n, this, t);
            })
          );
        }),
        (d.tail = function (t) {
          return Ce(t, 1);
        }),
        (d.take = function (t, e, n) {
          return t && t.length
            ? st(t, 0, (e = n || e === ua ? 1 : dn(e)) < 0 ? 0 : e)
            : [];
        }),
        (d.takeRight = function (t, e, n) {
          var i = t ? t.length : 0;
          return i
            ? st(t, (e = i - (e = n || e === ua ? 1 : dn(e))) < 0 ? 0 : e, i)
            : [];
        }),
        (d.takeRightWhile = function (t, e) {
          return t && t.length ? mt(t, te(e, 3), !1, !0) : [];
        }),
        (d.takeWhile = function (t, e) {
          return t && t.length ? mt(t, te(e, 3)) : [];
        }),
        (d.tap = function (t, e) {
          return e(t), t;
        }),
        (d.throttle = function (t, e, n) {
          var i = !0,
            r = !0;
          if ("function" != typeof t) throw new Fn("Expected a function");
          return (
            nn(n) &&
              ((i = "leading" in n ? !!n.leading : i),
              (r = "trailing" in n ? !!n.trailing : r)),
            Xe(t, e, { leading: i, maxWait: e, trailing: r })
          );
        }),
        (d.thru = Ne),
        (d.toArray = hn),
        (d.toPairs = wn),
        (d.toPairsIn = Tn),
        (d.toPath = function (t) {
          return Rr(t) ? Ro(t, we) : cn(t) ? [t] : At(Qi(t));
        }),
        (d.toPlainObject = _n),
        (d.transform = function (t, i, r) {
          var e = Rr(t) || fn(t);
          if (((i = te(i, 4)), null == r))
            if (e || nn(t)) {
              var n = t.constructor;
              r = e ? (Rr(t) ? new n() : []) : Je(n) ? T(ui(Object(t))) : {};
            } else r = {};
          return (
            (e ? Ao : j)(t, function (t, e, n) {
              return i(r, t, e, n);
            }),
            r
          );
        }),
        (d.unary = function (t) {
          return ze(t, 1);
        }),
        (d.union = rr),
        (d.unionBy = or),
        (d.unionWith = ar),
        (d.uniq = function (t) {
          return t && t.length ? pt(t) : [];
        }),
        (d.uniqBy = function (t, e) {
          return t && t.length ? pt(t, te(e)) : [];
        }),
        (d.uniqWith = function (t, e) {
          return t && t.length ? pt(t, ua, e) : [];
        }),
        (d.unset = function (t, e) {
          var n, i;
          null == t
            ? (n = !0)
            : ((n = xe((n = t), (i = me((i = e), n) ? [i] : bt(i)))),
              (i = we(Pe(i))),
              (n = !(null != n && L(n, i)) || delete n[i]));
          return n;
        }),
        (d.unzip = Ee),
        (d.unzipWith = Re),
        (d.update = function (t, e, n) {
          return null == t
            ? t
            : at(t, e, ("function" == typeof n ? n : On)(D(t, e)), void 0);
        }),
        (d.updateWith = function (t, e, n, i) {
          return (
            (i = "function" == typeof i ? i : ua),
            null != t &&
              (t = at(t, e, ("function" == typeof n ? n : On)(D(t, e)), i)),
            t
          );
        }),
        (d.values = Sn),
        (d.valuesIn = function (t) {
          return null == t ? [] : Yo(t, xn(t));
        }),
        (d.without = sr),
        (d.words = An),
        (d.wrap = function (t, e) {
          return Ar((e = null == e ? On : e), t);
        }),
        (d.xor = lr),
        (d.xorBy = ur),
        (d.xorWith = cr),
        (d.zip = fr),
        (d.zipObject = function (t, e) {
          return vt(t || [], e || [], h);
        }),
        (d.zipObjectDeep = function (t, e) {
          return vt(t || [], e || [], at);
        }),
        (d.zipWith = hr),
        (d.entries = wn),
        (d.entriesIn = Tn),
        (d.extend = Ir),
        (d.extendWith = Fr),
        En(d, d),
        (d.add = _o),
        (d.attempt = ro),
        (d.camelCase = Zr),
        (d.capitalize = Cn),
        (d.ceil = go),
        (d.clamp = function (t, e, n) {
          return (
            n === ua && ((n = e), (e = ua)),
            n !== ua && (n = (n = mn(n)) == n ? n : 0),
            e !== ua && (e = (e = mn(e)) == e ? e : 0),
            x(mn(t), e, n)
          );
        }),
        (d.clone = function (t) {
          return w(t, !1, !0);
        }),
        (d.cloneDeep = function (t) {
          return w(t, !0, !0);
        }),
        (d.cloneDeepWith = function (t, e) {
          return w(t, !0, !0, e);
        }),
        (d.cloneWith = function (t, e) {
          return w(t, !1, !0, e);
        }),
        (d.deburr = kn),
        (d.divide = vo),
        (d.endsWith = function (t, e, n) {
          (t = gn(t)), (e = dt(e));
          var i = t.length;
          return (
            (n = n === ua ? i : x(dn(n), 0, i)),
            0 <= (n -= e.length) && t.indexOf(e, n) == n
          );
        }),
        (d.eq = Ye),
        (d.escape = function (t) {
          return (t = gn(t)) && va.test(t) ? t.replace(_a, Ko) : t;
        }),
        (d.escapeRegExp = function (t) {
          return (t = gn(t)) && ka.test(t) ? t.replace(Ca, "\\$&") : t;
        }),
        (d.every = function (t, e, n) {
          var i = Rr(t) ? Po : k;
          return n && pe(t, e, n) && (e = ua), i(t, te(e, 3));
        }),
        (d.find = function (t, e) {
          if (((e = te(e, 3)), Rr(t))) {
            var n = Fo(t, e);
            return -1 < n ? t[n] : ua;
          }
          return Io(t, e, Ii);
        }),
        (d.findIndex = function (t, e) {
          return t && t.length ? Fo(t, te(e, 3)) : -1;
        }),
        (d.findKey = function (t, e) {
          return Io(t, te(e, 3), j, !0);
        }),
        (d.findLast = function (t, e) {
          if (((e = te(e, 3)), Rr(t))) {
            var n = Fo(t, e, !0);
            return -1 < n ? t[n] : ua;
          }
          return Io(t, e, Fi);
        }),
        (d.findLastIndex = function (t, e) {
          return t && t.length ? Fo(t, te(e, 3), !0) : -1;
        }),
        (d.findLastKey = function (t, e) {
          return Io(t, te(e, 3), E, !0);
        }),
        (d.floor = yo),
        (d.forEach = Le),
        (d.forEachRight = Ie),
        (d.forIn = function (t, e) {
          return null == t ? t : Bi(t, te(e), xn);
        }),
        (d.forInRight = function (t, e) {
          return null == t ? t : zi(t, te(e), xn);
        }),
        (d.forOwn = function (t, e) {
          return t && j(t, te(e));
        }),
        (d.forOwnRight = function (t, e) {
          return t && E(t, te(e));
        }),
        (d.get = vn),
        (d.gt = jr),
        (d.gte = Er),
        (d.has = function (t, e) {
          return null != t && ae(t, e, L);
        }),
        (d.hasIn = yn),
        (d.head = Ae),
        (d.identity = On),
        (d.includes = function (t, e, n, i) {
          return (
            (t = Ze(t) ? t : Sn(t)),
            (n = n && !i ? dn(n) : 0),
            (i = t.length),
            n < 0 && (n = di(i + n, 0)),
            un(t) ? n <= i && -1 < t.indexOf(e, n) : !!i && -1 < Bo(t, e, n)
          );
        }),
        (d.indexOf = function (t, e, n) {
          var i = t ? t.length : 0;
          return i ? ((n = dn(n)) < 0 && (n = di(i + n, 0)), Bo(t, e, n)) : -1;
        }),
        (d.inRange = function (t, e, n) {
          return (
            (e = mn(e) || 0),
            n === ua ? ((n = e), (e = 0)) : (n = mn(n) || 0),
            (t = mn(t)) >= pi(e, n) && t < di(e, n)
          );
        }),
        (d.invoke = Ur),
        (d.isArguments = Qe),
        (d.isArray = Rr),
        (d.isArrayBuffer = function (t) {
          return rn(t) && "[object ArrayBuffer]" == $n.call(t);
        }),
        (d.isArrayLike = Ze),
        (d.isArrayLikeObject = Ge),
        (d.isBoolean = function (t) {
          return (
            !0 === t || !1 === t || (rn(t) && "[object Boolean]" == $n.call(t))
          );
        }),
        (d.isBuffer = Dr),
        (d.isDate = function (t) {
          return rn(t) && "[object Date]" == $n.call(t);
        }),
        (d.isElement = function (t) {
          return !!t && 1 === t.nodeType && rn(t) && !sn(t);
        }),
        (d.isEmpty = function (t) {
          if (Ze(t) && (Rr(t) || un(t) || Je(t.splice) || Qe(t) || Dr(t)))
            return !t.length;
          if (rn(t)) {
            var e = oe(t);
            if ("[object Map]" == e || "[object Set]" == e) return !t.size;
          }
          for (var n in t) if (Wn.call(t, n)) return !1;
          return !(Ai && bn(t).length);
        }),
        (d.isEqual = function (t, e) {
          return H(t, e);
        }),
        (d.isEqualWith = function (t, e, n) {
          var i = (n = "function" == typeof n ? n : ua) ? n(t, e) : ua;
          return i === ua ? H(t, e, n) : !!i;
        }),
        (d.isError = Ke),
        (d.isFinite = function (t) {
          return "number" == typeof t && ci(t);
        }),
        (d.isFunction = Je),
        (d.isInteger = tn),
        (d.isLength = en),
        (d.isMap = function (t) {
          return rn(t) && "[object Map]" == oe(t);
        }),
        (d.isMatch = function (t, e) {
          return t === e || q(t, e, ee(e));
        }),
        (d.isMatchWith = function (t, e, n) {
          return (n = "function" == typeof n ? n : ua), q(t, e, ee(e), n);
        }),
        (d.isNaN = function (t) {
          return an(t) && t != +t;
        }),
        (d.isNative = on),
        (d.isNil = function (t) {
          return null == t;
        }),
        (d.isNull = function (t) {
          return null === t;
        }),
        (d.isNumber = an),
        (d.isObject = nn),
        (d.isObjectLike = rn),
        (d.isPlainObject = sn),
        (d.isRegExp = ln),
        (d.isSafeInteger = function (t) {
          return tn(t) && -9007199254740991 <= t && t <= 9007199254740991;
        }),
        (d.isSet = function (t) {
          return rn(t) && "[object Set]" == oe(t);
        }),
        (d.isString = un),
        (d.isSymbol = cn),
        (d.isTypedArray = fn),
        (d.isUndefined = function (t) {
          return t === ua;
        }),
        (d.isWeakMap = function (t) {
          return rn(t) && "[object WeakMap]" == oe(t);
        }),
        (d.isWeakSet = function (t) {
          return rn(t) && "[object WeakSet]" == $n.call(t);
        }),
        (d.join = function (t, e) {
          return t ? fi.call(t, e) : "";
        }),
        (d.kebabCase = Gr),
        (d.last = Pe),
        (d.lastIndexOf = function (t, e, n) {
          var i = t ? t.length : 0;
          if (!i) return -1;
          var r = i;
          if (
            (n !== ua &&
              (r = ((r = dn(n)) < 0 ? di(i + r, 0) : pi(r, i - 1)) + 1),
            e != e)
          )
            return ta(t, r, !0);
          for (; r--; ) if (t[r] === e) return r;
          return -1;
        }),
        (d.lowerCase = Kr),
        (d.lowerFirst = Jr),
        (d.lt = Nr),
        (d.lte = Mr),
        (d.max = function (t) {
          return t && t.length ? A(t, On, M) : ua;
        }),
        (d.maxBy = function (t, e) {
          return t && t.length ? A(t, te(e), M) : ua;
        }),
        (d.mean = function (t) {
          return Ho(t, On);
        }),
        (d.meanBy = function (t, e) {
          return Ho(t, te(e));
        }),
        (d.min = function (t) {
          return t && t.length ? A(t, On, U) : ua;
        }),
        (d.minBy = function (t, e) {
          return t && t.length ? A(t, te(e), U) : ua;
        }),
        (d.multiply = bo),
        (d.nth = function (t, e) {
          return t && t.length ? Z(t, dn(e)) : ua;
        }),
        (d.noConflict = function () {
          return es._ === this && (es._ = Vn), this;
        }),
        (d.noop = Rn),
        (d.now = br),
        (d.pad = function (t, e, n) {
          t = gn(t);
          var i = (e = dn(e)) ? aa(t) : 0;
          return !e || e <= i
            ? t
            : Xt(li((e = (e - i) / 2)), n) + t + Xt(si(e), n);
        }),
        (d.padEnd = function (t, e, n) {
          t = gn(t);
          var i = (e = dn(e)) ? aa(t) : 0;
          return e && i < e ? t + Xt(e - i, n) : t;
        }),
        (d.padStart = function (t, e, n) {
          t = gn(t);
          var i = (e = dn(e)) ? aa(t) : 0;
          return e && i < e ? Xt(e - i, n) + t : t;
        }),
        (d.parseInt = function (t, e, n) {
          return (
            n || null == e ? (e = 0) : e && (e = +e),
            (t = gn(t).replace(Aa, "")),
            mi(t, e || (Na.test(t) ? 16 : 10))
          );
        }),
        (d.random = function (t, e, n) {
          if (
            (n && "boolean" != typeof n && pe(t, e, n) && (e = n = ua),
            n === ua &&
              ("boolean" == typeof e
                ? ((n = e), (e = ua))
                : "boolean" == typeof t && ((n = t), (t = ua))),
            t === ua && e === ua
              ? ((t = 0), (e = 1))
              : ((t = mn(t) || 0),
                e === ua ? ((e = t), (t = 0)) : (e = mn(e) || 0)),
            e < t)
          ) {
            var i = t;
            (t = e), (e = i);
          }
          return n || t % 1 || e % 1
            ? ((n = _i()),
              pi(t + n * (e - t + Ka("1e-" + ((n + "").length - 1))), e))
            : rt(t, e);
        }),
        (d.reduce = function (t, e, n) {
          var i = Rr(t) ? No : qo,
            r = arguments.length < 3;
          return i(t, te(e, 4), n, r, Ii);
        }),
        (d.reduceRight = function (t, e, n) {
          var i = Rr(t) ? Mo : qo,
            r = arguments.length < 3;
          return i(t, te(e, 4), n, r, Fi);
        }),
        (d.repeat = function (t, e, n) {
          return (e = (n ? pe(t, e, n) : e === ua) ? 1 : dn(e)), ot(gn(t), e);
        }),
        (d.replace = function () {
          var t = arguments,
            e = gn(t[0]);
          return t.length < 3 ? e : gi.call(e, t[1], t[2]);
        }),
        (d.result = function (t, e, n) {
          var i = -1,
            r = (e = me(e, t) ? [e] : bt(e)).length;
          for (r || ((t = ua), (r = 1)); ++i < r; ) {
            var o = null == t ? ua : t[we(e[i])];
            o === ua && ((i = r), (o = n)), (t = Je(o) ? o.call(t) : o);
          }
          return t;
        }),
        (d.round = xo),
        (d.runInContext = la),
        (d.sample = function (t) {
          var e = (t = Ze(t) ? t : Sn(t)).length;
          return 0 < e ? t[rt(0, e - 1)] : ua;
        }),
        (d.size = function (t) {
          if (null == t) return 0;
          if (Ze(t)) {
            var e = t.length;
            return e && un(t) ? aa(t) : e;
          }
          return rn(t) && ("[object Map]" == (e = oe(t)) || "[object Set]" == e)
            ? t.size
            : bn(t).length;
        }),
        (d.snakeCase = to),
        (d.some = function (t, e, n) {
          var i = Rr(t) ? Lo : lt;
          return n && pe(t, e, n) && (e = ua), i(t, te(e, 3));
        }),
        (d.sortedIndex = function (t, e) {
          return ut(t, e);
        }),
        (d.sortedIndexBy = function (t, e, n) {
          return ct(t, e, te(n));
        }),
        (d.sortedIndexOf = function (t, e) {
          var n = t ? t.length : 0;
          if (n) {
            var i = ut(t, e);
            if (i < n && Ye(t[i], e)) return i;
          }
          return -1;
        }),
        (d.sortedLastIndex = function (t, e) {
          return ut(t, e, !0);
        }),
        (d.sortedLastIndexBy = function (t, e, n) {
          return ct(t, e, te(n), !0);
        }),
        (d.sortedLastIndexOf = function (t, e) {
          if (t && t.length) {
            var n = ut(t, e, !0) - 1;
            if (Ye(t[n], e)) return n;
          }
          return -1;
        }),
        (d.startCase = eo),
        (d.startsWith = function (t, e, n) {
          return (
            (t = gn(t)),
            (n = x(dn(n), 0, t.length)),
            t.lastIndexOf(dt(e), n) == n
          );
        }),
        (d.subtract = wo),
        (d.sum = function (t) {
          return t && t.length ? Xo(t, On) : 0;
        }),
        (d.sumBy = function (t, e) {
          return t && t.length ? Xo(t, te(e)) : 0;
        }),
        (d.template = function (a, t, e) {
          var n = d.templateSettings;
          e && pe(a, t, e) && (t = ua), (a = gn(a)), (t = Fr({}, t, n, f));
          var s,
            l,
            i = bn((e = Fr({}, t.imports, n.imports, f))),
            r = Yo(e, i),
            u = 0;
          e = t.interpolate || Ha;
          var c = "__p+='";
          e = In(
            (t.escape || Ha).source +
              "|" +
              e.source +
              "|" +
              (e === xa ? Ra : Ha).source +
              "|" +
              (t.evaluate || Ha).source +
              "|$",
            "g"
          );
          var o = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
          if (
            (a.replace(e, function (t, e, n, i, r, o) {
              return (
                n || (n = i),
                (c += a.slice(u, o).replace(qa, Jo)),
                e && ((s = !0), (c += "'+__e(" + e + ")+'")),
                r && ((l = !0), (c += "';" + r + ";\n__p+='")),
                n && (c += "'+((__t=(" + n + "))==null?'':__t)+'"),
                (u = o + t.length),
                t
              );
            }),
            (c += "';"),
            (t = t.variable) || (c = "with(obj){" + c + "}"),
            (c = (l ? c.replace(ha, "") : c)
              .replace(da, "$1")
              .replace(pa, "$1;")),
            (c =
              "function(" +
              (t || "obj") +
              "){" +
              (t ? "" : "obj||(obj={});") +
              "var __t,__p=''" +
              (s ? ",__e=_.escape" : "") +
              (l
                ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"
                : ";") +
              c +
              "return __p}"),
            ((t = ro(function () {
              return Function(i, o + "return " + c).apply(ua, r);
            })).source = c),
            Ke(t))
          )
            throw t;
          return t;
        }),
        (d.times = function (t, e) {
          if ((t = dn(t)) < 1 || 9007199254740991 < t) return [];
          var n = 4294967295,
            i = pi(t, 4294967295);
          for (t -= 4294967295, i = Uo(i, (e = te(e))); ++n < t; ) e(n);
          return i;
        }),
        (d.toInteger = dn),
        (d.toLength = pn),
        (d.toLower = function (t) {
          return gn(t).toLowerCase();
        }),
        (d.toNumber = mn),
        (d.toSafeInteger = function (t) {
          return x(dn(t), -9007199254740991, 9007199254740991);
        }),
        (d.toString = gn),
        (d.toUpper = function (t) {
          return gn(t).toUpperCase();
        }),
        (d.trim = function (t, e, n) {
          return (t = gn(t)) && (n || e === ua)
            ? t.replace(Aa, "")
            : t && (e = dt(e))
            ? xt(
                (t = t.match(Ua)),
                Qo(t, (e = e.match(Ua))),
                Zo(t, e) + 1
              ).join("")
            : t;
        }),
        (d.trimEnd = function (t, e, n) {
          return (t = gn(t)) && (n || e === ua)
            ? t.replace(Oa, "")
            : t && (e = dt(e))
            ? xt((t = t.match(Ua)), 0, (e = Zo(t, e.match(Ua)) + 1)).join("")
            : t;
        }),
        (d.trimStart = function (t, e, n) {
          return (t = gn(t)) && (n || e === ua)
            ? t.replace(Pa, "")
            : t && (e = dt(e))
            ? xt((t = t.match(Ua)), (e = Qo(t, e.match(Ua)))).join("")
            : t;
        }),
        (d.truncate = function (t, e) {
          var n = 30,
            i = "...";
          if (nn(e)) {
            var r = "separator" in e ? e.separator : r;
            (n = "length" in e ? dn(e.length) : n),
              (i = "omission" in e ? dt(e.omission) : i);
          }
          var o = (t = gn(t)).length;
          if (Va.test(t)) {
            var a = t.match(Ua);
            o = a.length;
          }
          if (o <= n) return t;
          if ((o = n - aa(i)) < 1) return i;
          if (((n = a ? xt(a, 0, o).join("") : t.slice(0, o)), r === ua))
            return n + i;
          if ((a && (o += n.length - o), ln(r))) {
            if (t.slice(o).search(r)) {
              var s = n;
              for (
                r.global || (r = In(r.source, gn(Da.exec(r)) + "g")),
                  r.lastIndex = 0;
                (a = r.exec(s));

              )
                var l = a.index;
              n = n.slice(0, l === ua ? o : l);
            }
          } else
            t.indexOf(dt(r), o) != o &&
              -1 < (r = n.lastIndexOf(r)) &&
              (n = n.slice(0, r));
          return n + i;
        }),
        (d.unescape = function (t) {
          return (t = gn(t)) && ga.test(t) ? t.replace(ma, sa) : t;
        }),
        (d.uniqueId = function (t) {
          var e = ++Xn;
          return gn(t) + e;
        }),
        (d.upperCase = no),
        (d.upperFirst = io),
        (d.each = Le),
        (d.eachRight = Ie),
        (d.first = Ae),
        En(
          d,
          ((Cr = {}),
          j(d, function (t, e) {
            Wn.call(d.prototype, e) || (Cr[e] = t);
          }),
          Cr),
          { chain: !1 }
        ),
        (d.VERSION = "4.11.2"),
        Ao(
          "bind bindKey curry curryRight partial partialRight".split(" "),
          function (t) {
            d[t].placeholder = d;
          }
        ),
        Ao(["drop", "take"], function (i, r) {
          (m.prototype[i] = function (t) {
            var e = this.__filtered__;
            if (e && !r) return new m(this);
            t = t === ua ? 1 : di(dn(t), 0);
            var n = this.clone();
            return (
              e
                ? (n.__takeCount__ = pi(t, n.__takeCount__))
                : n.__views__.push({
                    size: pi(t, 4294967295),
                    type: i + (n.__dir__ < 0 ? "Right" : ""),
                  }),
              n
            );
          }),
            (m.prototype[i + "Right"] = function (t) {
              return this.reverse()[i](t).reverse();
            });
        }),
        Ao(["filter", "map", "takeWhile"], function (t, e) {
          var n = e + 1,
            i = 1 == n || 3 == n;
          m.prototype[t] = function (t) {
            var e = this.clone();
            return (
              e.__iteratees__.push({ iteratee: te(t, 3), type: n }),
              (e.__filtered__ = e.__filtered__ || i),
              e
            );
          };
        }),
        Ao(["head", "last"], function (t, e) {
          var n = "take" + (e ? "Right" : "");
          m.prototype[t] = function () {
            return this[n](1).value()[0];
          };
        }),
        Ao(["initial", "tail"], function (t, e) {
          var n = "drop" + (e ? "" : "Right");
          m.prototype[t] = function () {
            return this.__filtered__ ? new m(this) : this[n](1);
          };
        }),
        (m.prototype.compact = function () {
          return this.filter(On);
        }),
        (m.prototype.find = function (t) {
          return this.filter(t).head();
        }),
        (m.prototype.findLast = function (t) {
          return this.reverse().find(t);
        }),
        (m.prototype.invokeMap = $e(function (e, n) {
          return "function" == typeof e
            ? new m(this)
            : this.map(function (t) {
                return z(t, e, n);
              });
        })),
        (m.prototype.reject = function (e) {
          return (
            (e = te(e, 3)),
            this.filter(function (t) {
              return !e(t);
            })
          );
        }),
        (m.prototype.slice = function (t, e) {
          t = dn(t);
          var n = this;
          return n.__filtered__ && (0 < t || e < 0)
            ? new m(n)
            : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
              e !== ua &&
                (n = (e = dn(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
              n);
        }),
        (m.prototype.takeRightWhile = function (t) {
          return this.reverse().takeWhile(t).reverse();
        }),
        (m.prototype.toArray = function () {
          return this.take(4294967295);
        }),
        j(m.prototype, function (l, t) {
          var u = /^(?:filter|find|map|reject)|While$/.test(t),
            c = /^(?:head|last)$/.test(t),
            f = d[c ? "take" + ("last" == t ? "Right" : "") : t],
            h = c || /^find/.test(t);
          f &&
            (d.prototype[t] = function () {
              function t(t) {
                return (t = f.apply(d, Do([t], n))), c && a ? t[0] : t;
              }
              var e = this.__wrapped__,
                n = c ? [1] : arguments,
                i = e instanceof m,
                r = n[0],
                o = i || Rr(e);
              o && u && "function" == typeof r && 1 != r.length && (i = o = !1);
              var a = this.__chain__,
                s = !!this.__actions__.length;
              (r = h && !a), (i = i && !s);
              return !h && o
                ? ((e = i ? e : new m(this)),
                  (e = l.apply(e, n)).__actions__.push({
                    func: Ne,
                    args: [t],
                    thisArg: ua,
                  }),
                  new p(e, a))
                : r && i
                ? l.apply(this, n)
                : ((e = this.thru(t)), r ? (c ? e.value()[0] : e.value()) : e);
            });
        }),
        Ao("pop push shift sort splice unshift".split(" "), function (t) {
          var n = Bn[t],
            i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
            r = /^(?:pop|shift)$/.test(t);
          d.prototype[t] = function () {
            var e = arguments;
            if (!r || this.__chain__)
              return this[i](function (t) {
                return n.apply(Rr(t) ? t : [], e);
              });
            var t = this.value();
            return n.apply(Rr(t) ? t : [], e);
          };
        }),
        j(m.prototype, function (t, e) {
          var n = d[e];
          if (n) {
            var i = n.name + "";
            (Pi[i] || (Pi[i] = [])).push({ name: e, func: n });
          }
        }),
        (Pi[zt(ua, 2).name] = [{ name: "wrapper", func: ua }]),
        (m.prototype.clone = function () {
          var t = new m(this.__wrapped__);
          return (
            (t.__actions__ = At(this.__actions__)),
            (t.__dir__ = this.__dir__),
            (t.__filtered__ = this.__filtered__),
            (t.__iteratees__ = At(this.__iteratees__)),
            (t.__takeCount__ = this.__takeCount__),
            (t.__views__ = At(this.__views__)),
            t
          );
        }),
        (m.prototype.reverse = function () {
          if (this.__filtered__) {
            var t = new m(this);
            (t.__dir__ = -1), (t.__filtered__ = !0);
          } else (t = this.clone()).__dir__ *= -1;
          return t;
        }),
        (m.prototype.value = function () {
          var t,
            e = this.__wrapped__.value(),
            n = this.__dir__,
            i = Rr(e),
            r = n < 0,
            o = i ? e.length : 0;
          t = o;
          for (var a = this.__views__, s = 0, l = -1, u = a.length; ++l < u; ) {
            var c = a[l],
              f = c.size;
            switch (c.type) {
              case "drop":
                s += f;
                break;
              case "dropRight":
                t -= f;
                break;
              case "take":
                t = pi(t, s + f);
                break;
              case "takeRight":
                s = di(s, t - f);
            }
          }
          if (
            ((a = (t = { start: s, end: t }).start),
            (t = (s = t.end) - a),
            (r = r ? s : a - 1),
            (s = (a = this.__iteratees__).length),
            (l = 0),
            (u = pi(t, this.__takeCount__)),
            !i || o < 200 || (o == t && u == t))
          )
            return _t(e, this.__actions__);
          i = [];
          t: for (; t-- && l < u; ) {
            for (o = -1, c = e[(r += n)]; ++o < s; ) {
              f = (h = a[o]).type;
              var h = (0, h.iteratee)(c);
              if (2 == f) c = h;
              else if (!h) {
                if (1 == f) continue t;
                break t;
              }
            }
            i[l++] = c;
          }
          return i;
        }),
        (d.prototype.at = dr),
        (d.prototype.chain = function () {
          return De(this);
        }),
        (d.prototype.commit = function () {
          return new p(this.value(), this.__chain__);
        }),
        (d.prototype.next = function () {
          this.__values__ === ua && (this.__values__ = hn(this.value()));
          var t = this.__index__ >= this.__values__.length;
          return { done: t, value: t ? ua : this.__values__[this.__index__++] };
        }),
        (d.prototype.plant = function (t) {
          for (var e, n = this; n instanceof o; ) {
            var i = Se(n);
            (i.__index__ = 0),
              (i.__values__ = ua),
              e ? (r.__wrapped__ = i) : (e = i);
            var r = i;
            n = n.__wrapped__;
          }
          return (r.__wrapped__ = t), e;
        }),
        (d.prototype.reverse = function () {
          var t = this.__wrapped__;
          return t instanceof m
            ? (this.__actions__.length && (t = new m(this)),
              (t = t.reverse()).__actions__.push({
                func: Ne,
                args: [je],
                thisArg: ua,
              }),
              new p(t, this.__chain__))
            : this.thru(je);
        }),
        (d.prototype.toJSON =
          d.prototype.valueOf =
          d.prototype.value =
            function () {
              return _t(this.__wrapped__, this.__actions__);
            }),
        ni && (d.prototype[ni] = Me),
        d
      );
    }
    var ua,
      ca = 1 / 0,
      fa = NaN,
      ha = /\b__p\+='';/g,
      da = /\b(__p\+=)''\+/g,
      pa = /(__e\(.*?\)|\b__t\))\+'';/g,
      ma = /&(?:amp|lt|gt|quot|#39|#96);/g,
      _a = /[&<>"'`]/g,
      ga = RegExp(ma.source),
      va = RegExp(_a.source),
      ya = /<%-([\s\S]+?)%>/g,
      ba = /<%([\s\S]+?)%>/g,
      xa = /<%=([\s\S]+?)%>/g,
      wa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Ta = /^\w*$/,
      Sa =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
      Ca = /[\\^$.*+?()[\]{}|]/g,
      ka = RegExp(Ca.source),
      Aa = /^\s+|\s+$/g,
      Pa = /^\s+/,
      Oa = /\s+$/,
      ja = /[a-zA-Z0-9]+/g,
      Ea = /\\(\\)?/g,
      Ra = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Da = /\w*$/,
      Na = /^0x/i,
      Ma = /^[-+]0x[0-9a-f]+$/i,
      La = /^0b[01]+$/i,
      Ia = /^\[object .+?Constructor\]$/,
      Fa = /^0o[0-7]+$/i,
      Ba = /^(?:0|[1-9]\d*)$/,
      za = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
      Ha = /($^)/,
      qa = /['\n\r\u2028\u2029\\]/g,
      e =
        "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",
      n =
        "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" +
        e,
      i =
        "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
      Wa = RegExp("['\u2019]", "g"),
      Xa = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", "g"),
      Ua = RegExp(
        "\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + i + e,
        "g"
      ),
      $a = RegExp(
        [
          "[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d+",
          n,
        ].join("|"),
        "g"
      ),
      Va = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"
      ),
      Ya =
        /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Qa =
        "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise Reflect RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(
          " "
        ),
      Za = {};
    (Za["[object Float32Array]"] =
      Za["[object Float64Array]"] =
      Za["[object Int8Array]"] =
      Za["[object Int16Array]"] =
      Za["[object Int32Array]"] =
      Za["[object Uint8Array]"] =
      Za["[object Uint8ClampedArray]"] =
      Za["[object Uint16Array]"] =
      Za["[object Uint32Array]"] =
        !0),
      (Za["[object Arguments]"] =
        Za["[object Array]"] =
        Za["[object ArrayBuffer]"] =
        Za["[object Boolean]"] =
        Za["[object DataView]"] =
        Za["[object Date]"] =
        Za["[object Error]"] =
        Za["[object Function]"] =
        Za["[object Map]"] =
        Za["[object Number]"] =
        Za["[object Object]"] =
        Za["[object RegExp]"] =
        Za["[object Set]"] =
        Za["[object String]"] =
        Za["[object WeakMap]"] =
          !1);
    var Ga = {};
    (Ga["[object Arguments]"] =
      Ga["[object Array]"] =
      Ga["[object ArrayBuffer]"] =
      Ga["[object DataView]"] =
      Ga["[object Boolean]"] =
      Ga["[object Date]"] =
      Ga["[object Float32Array]"] =
      Ga["[object Float64Array]"] =
      Ga["[object Int8Array]"] =
      Ga["[object Int16Array]"] =
      Ga["[object Int32Array]"] =
      Ga["[object Map]"] =
      Ga["[object Number]"] =
      Ga["[object Object]"] =
      Ga["[object RegExp]"] =
      Ga["[object Set]"] =
      Ga["[object String]"] =
      Ga["[object Symbol]"] =
      Ga["[object Uint8Array]"] =
      Ga["[object Uint8ClampedArray]"] =
      Ga["[object Uint16Array]"] =
      Ga["[object Uint32Array]"] =
        !0),
      (Ga["[object Error]"] =
        Ga["[object Function]"] =
        Ga["[object WeakMap]"] =
          !1);
    var r = {
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
      },
      o = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;",
      },
      a = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`",
      },
      s = { function: !0, object: !0 },
      l = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Ka = parseFloat,
      Ja = parseInt,
      u = s[typeof exports] && exports && !exports.nodeType ? exports : ua,
      c = s[typeof module] && module && !module.nodeType ? module : ua,
      ts = c && c.exports === u ? u : ua,
      f = t(s[typeof self] && self),
      h = t(s[typeof window] && window),
      d = t(s[typeof this] && this),
      es =
        t(u && c && "object" == typeof global && global) ||
        (h !== (d && d.window) && h) ||
        f ||
        d ||
        Function("return this")(),
      ns = la();
    ((h || f || {})._ = ns),
      "function" == typeof define && "object" == typeof define.amd && define.amd
        ? define(function () {
            return ns;
          })
        : u && c
        ? (ts && ((c.exports = ns)._ = ns), (u._ = ns))
        : (es._ = ns);
  }.call(this);
