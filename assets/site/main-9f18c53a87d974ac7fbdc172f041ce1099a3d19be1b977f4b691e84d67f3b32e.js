function onSBarOpen() {
  if (
    ($sidebar.addClass("open"),
    ($fpsection = $("#main-wrap").find(".fp-section.active")),
    !$fpsection.hasClass("home"))
  ) {
    var e = $sidebar.width();
    TweenMax.set("#main-wrap", { x: -e, ease: Expo.easeInOut, y: 0 });
  }
  TweenMax.set("#overlay", { display: "block", opacity: 1 }),
    $("html").hasClass("fp-enabled") &&
      ($.fn.fullpage.setAllowScrolling(!1),
      $.fn.fullpage.setKeyboardScrolling(!1),
      $("#fp-nav").addClass("move"));
}
function onSBarClose() {
  if (
    ($sidebar.removeClass("open"),
    ($fpsection = $("#main-wrap").find(".fp-section.active")),
    !$fpsection.hasClass("home"))
  ) {
    $sidebar.outerWidth();
    TweenMax.set("#main-wrap", { x: 0, ease: Expo.easeInOut, y: 0 });
  }
  TweenMax.set("#overlay", { display: "none", opacity: 0 }),
    $("html").hasClass("fp-enabled") &&
      ($.fn.fullpage.setAllowScrolling(!0),
      $.fn.fullpage.setKeyboardScrolling(!0),
      $("#fp-nav").removeClass("move"));
}
function changeHeaderColor() {
  $(elms.hdr).addClass("white");
}
function removeHeaderColor() {
  $(elms.hdr).removeClass("white");
}
function initTracking() {
  gaFootprint.setApplication(REPORT_BEE), gaFootprint.setProduct(REPORT_BEE);
}
function trackAction(e) {
  var n = e.attr("data-fpEventCategory"),
    t = e.attr("data-fpEventAction");
  n && t && gaFootprint.trackAction({ event_category: n, event_action: t });
}
function trackCTA(e) {
  var n = e.attr("data-fpEventCategory"),
    t = e.attr("data-fpEventAction");
  n && t && gaFootprint.trackCTA({ event_category: n, event_action: t });
}
$(function () {
  ($sidebar = $("#sidebar")),
    ($sidebar_menu_button = $("#sidebar-menu-btn")),
    ($sidebar_close_button = $("#sidebar-close-btn")),
    $sidebar_menu_button.on("click", function (e) {
      e.preventDefault(), onSBarOpen();
    }),
    $sidebar_close_button.on("click", function (e) {
      e.preventDefault(), onSBarClose();
    }),
    $(".hook.labs").on("click", function (e) {
      e.preventDefault(), $(this).next(".vgrp").slideToggle();
    }),
    $("#overlay").on("click", function (e) {
      e.preventDefault(), onSBarClose();
    });
});
var $sidebar,
  $sidebar_menu_button,
  $sidebar_close_button,
  EVENT_ACTION = {
    START: "Start",
    SAVE: "Save",
    SEARCH: "Search",
    COMPLETE: "Complete",
    DROPOUT: "Dropout",
    CHANGE: "Change",
    DELETE: "Delete",
    FAILURE: "Failure",
    COMPLETE_WITH_WARNING: "Complete With Warning",
  },
  FootPrint = (function () {
    function n() {
      function e() {
        l(m), d(m), u("NA");
      }
      function n(e) {
        (v = _.merge(v, e)), t();
      }
      function t() {
        h = performance.now();
      }
      function o() {
        return ((performance.now() - h) / 1e3).toFixed(2);
      }
      function a(e) {
        c(), r(e);
      }
      function i(e) {
        c(!0), r(e);
      }
      function r(e) {
        (e.event_category = f(e.event_category)),
          e.event_label || (e.event_label = "NA"),
          ga("send", "event", e.event_category, e.event_action, e.event_label);
      }
      function s() {
        c(), ga("send", "pageview");
      }
      function c(e) {
        if (
          (v.school_name && ga("set", "dimension1", v.school_name),
          v.user_email && ga("set", "dimension2", v.user_email),
          v.user_role && ga("set", "dimension3", v.user_role),
          v.module && ga("set", "dimension5", v.module),
          v.board && ga("set", "dimension6", v.board),
          v.organization_name && ga("set", "dimension7", v.organization_name),
          v.app_name && ga("set", "dimension8", v.app_name),
          v.product && ga("set", "dimension9", v.product),
          v.school_id && ga("set", "dimension11", v.school_id),
          e)
        ) {
          var n = o();
          ga("set", "metric1", n);
        }
      }
      function l(e) {
        v.app_name = e;
      }
      function d(e) {
        v.product = e;
      }
      function u(e) {
        v.module = e;
      }
      function p(e) {
        C = _.extend({}, C, e);
      }
      function f(e) {
        return C[e] ? C[e] : e;
      }
      function g() {
        console.log(v);
      }
      var h,
        v = {},
        C = {},
        m = "Report Bee";
      return {
        init: e,
        setStartTime: t,
        setApplication: l,
        setProduct: d,
        setModule: u,
        setEventCategories: p,
        trackAction: a,
        trackCTA: i,
        setData: n,
        trackPageView: s,
        getData: g,
      };
    }
    var t;
    return {
      getInstance: function (e) {
        return t || (t = new n(e)).init(), t;
      },
    };
  })(),
  gaFootprint = FootPrint.getInstance();
ga_hash && gaFootprint.setData(ga_hash);
var elms = { hdr: "#header", cont: "#content", sect: ".section" },
  tmax = {
    exInOut: "Expo.easeInOut",
    liInOut: "Linear.easeInOut",
    liIn: "Linear.easeIn",
    liNo: "Linear.easeNone",
  },
  dir = { up: "up", down: "down" },
  fullPageConf = {
    sectionSelector: ".section",
    navigation: !0,
    navigationPosition: "left",
  },
  bp = { tabToMob: 768 },
  REPORT_BEE = "Report Bee",
  MODULE = "Pepper",
  GA_ALL_PRODUCTS_EVENT_CATEGORIES = {
    ALL_PRODUCTS: "All Products",
    RECORDS: "Records",
    REPORT_CARD: "Report Card",
    CMS: "Consolidated Mark Sheet",
    INSIGHTS: "Insights",
    QUIZZUP: "Quizzup",
    MESSAGES: "Messages",
    THC: "Thinking Health Card",
    POC: "Power of Character",
    ATTENDANCE: "Attendance",
    CRYSTAL: "Crystal",
    PARENT_APP: "Parent App",
  };
gaFootprint.setEventCategories(GA_ALL_PRODUCTS_EVENT_CATEGORIES),
  gaFootprint.setModule(MODULE),
  (function (r) {
    var t = { onOpen: function () {}, onClose: function () {} },
      o = function (o, e) {
        var n = this,
          a = e,
          i = !1;
        (this.init = function () {
          (a = r.extend({}, t, a)), o.on("click", n.clickHandler);
        }),
          (this.open = function () {
            var e = r(o).find(".plus"),
              n = r(o).next(".accord-content"),
              t = o.closest(".accord-wrap").width() - 44;
            TweenMax.to(o, 0.8, { left: t }),
              TweenMax.to(e, 0.6, { rotation: 45 }),
              trackAction(o),
              n.slideDown(),
              a.onOpen(),
              (i = !0);
          }),
          (this.close = function (e, n) {
            n = r(o).find(".plus");
            var t = r(o).next(".accord-content");
            TweenMax.to(o, 0.8, { left: "0" }),
              TweenMax.to(n, 0.6, { rotation: 0 }),
              t.slideUp(),
              a.onClose(),
              (i = !1);
          }),
          (this.clickHandler = function () {
            return i ? (n.close(), n.onClose()) : (n.open(), n.onOpen()), !1;
          }),
          (this.onOpen = function () {
            i || this.options.onOpen();
          }),
          (this.onClose = function () {
            i && this.options.onClose();
          }),
          this.init();
      };
    (publicMethod = r.fn.showHide =
      function (t) {
        return this.each(function () {
          var e = r(this),
            n = e.data("object");
          n
            ? n.init()
            : ((n = new o(e, t)), e.parent(".accord-wrap").data("object", n));
        });
      }),
      initTracking();
  })(jQuery),
  $.fn.extend({
    changeHeaderOnScroll: function () {
      var n = $(this),
        t = $(window).scrollTop();
      $(window).scroll(function () {
        var e = $(window).scrollTop();
        t < e
          ? (console.log("moving DOWN the page"), n.addClass("header-hide"))
          : n.removeClass("header-hide").addClass("header-show"),
          (t = e);
      });
    },
  });
var getWinW = function () {
  return $(window).width();
};
