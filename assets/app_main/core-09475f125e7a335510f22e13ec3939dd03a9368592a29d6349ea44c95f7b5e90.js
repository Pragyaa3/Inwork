function initPage() {
  var e = $("#header .main-nav");
  GLOBAL.show_main_menu_bar == undefined && 0 == e.children().length
    ? showMainMenuBar(!1)
    : 0 == GLOBAL.show_main_menu_bar
    ? showMainMenuBar(!1)
    : showMainMenuBar(!0),
    $("#my-schools-popup .list").children().length < 2 &&
      $("#more-schools-link, #my-schools-popup").remove();
}
function showMainMenuBar(e) {
  var t = $("#header .main");
  e ? t.show() : t.hide();
}
function closeAllPopbox() {
  $(document).click();
}
function closeColorbox() {
  $.colorbox.close();
}
function setCookie(e, t, n) {
  if ((n || (n = 365), "number" == typeof n)) {
    var i = new Date();
    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
  } else i = n;
  document.cookie = e + "=" + t + "; expires=" + i.toUTCString();
}
function getCookie(e) {
  for (
    var t = e + "=", n = document.cookie.split(";"), i = 0;
    i < n.length;
    i++
  ) {
    for (var s = n[i]; " " == s.charAt(0); ) s = s.substring(1);
    if (-1 != s.indexOf(t)) return s.substring(t.length, s.length);
  }
  return "";
}
function initAllStandards() {
  $all_standards_btn.on("click", function (e) {
    AllStandardsList.getInstance().toggle(), e.preventDefault();
  });
}
function initAllStandardsList() {
  AllStandardsList.getInstance();
}
function initSelectClassSidebar() {
  $body.addClass("select-class-sidebar"),
    SelectClassSidebar.getInstance().setData(
      global_header_hash.school_hash.all_standards
    );
}
function removeYearInHeader() {
  $("#year_link").remove();
}
function initNotificationCarousel() {
  var e = $(".notification-msg-list");
  e.length &&
    (e.tinycarousel({ axis: "y", interval: !0, intervaltime: 8e3 }),
    $(".notification-wrap .close-btn").click(function () {
      $(".notification-wrap").slideUp().remove(), $(window).resize();
    }));
}
function initYearDropdown() {
  display_year_dropdown
    ? ($year_link.addClass("show"),
      $year_popup.on("click", ".hook", function () {
        var e = $(this).text();
        target_url &&
          ((target_url = target_url.format({ year_name: e })),
          window.location.replace(target_url));
      }))
    : ($year_link.remove(), $year_popup.remove());
}
function fixStatusAndActionBar() {
  $(window).scroll(function () {
    repositionStatusAndActionBar();
  }),
    $(window).resize(function () {
      repositionStatusAndActionBar();
    }),
    $(window).resize();
}
function repositionStatusAndActionBar() {
  var e = $(window).scrollTop(),
    t = $(window).height();
  if ($("#wrapper").height() - t <= 0) return !1;
  e >= status_block_top
    ? $status_block.addClass("fixed")
    : $status_block.removeClass("fixed");
}
function trackAction(e) {
  var t = e.attr("data-fpEventCategory"),
    n = e.attr("data-fpEventAction"),
    i = e.attr("data-fpEventLabel");
  i || (i = "NA"),
    t &&
      n &&
      gaFootprint.trackAction({
        event_category: t,
        event_action: n,
        event_label: i,
      });
}
function trackCTA(e) {
  var t = e.attr("data-fpEventCategory"),
    n = e.attr("data-fpEventAction");
  t && n && gaFootprint.trackCTA({ event_category: t, event_action: n });
}
function removeSelectedfromAllStandardsList() {
  $all_standards_list.find(".standard-js").removeClass("selected");
}
function getEllipsisString(e, t) {
  var n = !1,
    i = e;
  return (
    e.length > t && ((e = e.substring(0, t - 3)), (e += "..."), (n = !0)),
    { status: n, value: e, original_value: i }
  );
}
function disableElement(e, t) {
  setTimeout(function () {
    e.prop("disabled", t);
  }, 50);
}
function closeColorbox() {
  $.colorbox.close();
}
function resizeColorbox() {
  $.colorbox.resize();
}
function openColorbox(t) {
  var n = $("body"),
    e = { inline: !0, fixed: !0, transition: "none", close: !0 },
    i = $(t.href),
    s = i.data("cbox-options"),
    a = $("#cboxClose");
  if (
    (s && (t = $.extend({}, s, t)),
    ((t = $.extend({}, e, t)).onOpen = function () {
      var e = $("#colorbox");
      n.addClass("colorbox-overflow"),
        e.addClass("colorbox-animate"),
        t.colorbox_name && e.data("colorbox-name", t.colorbox_name);
    }),
    t.onComplete)
  )
    t.onComplete;
  (t.onComplete = function () {
    setTimeout(function () {
      n.removeClass("colorbox-overflow"), i.trigger("colorboxOpened");
    }, 500);
  }),
    $.colorbox(t),
    t.close ? a.show() : a.hide(),
    resizeColorbox();
}
function showLoadingPanel(e) {
  var t = $(".loading-panel").eq(0);
  if (e) {
    var n = $(e).find(".loading");
    n.length && t.find(".msg-wrap").html(n.html());
  }
  openColorbox({
    href: t,
    width: "50%",
    overlayClose: !1,
    escKey: !1,
    close: !1,
  });
}
function showWarningPanel(e, t, n) {
  var i = "",
    s = $(".warning-panel").eq(0);
  if (n) i = n.warningMessage;
  else if (e) {
    var a = $(e).find(".warning");
    a.length && (i = a.html());
  }
  s.find(".msg-wrap").html(i),
    t
      ? t.url
        ? s.find(".close-action").data("url", t.url)
        : !1 === t.page_reload &&
          s.find(".close-action").data("page-reload", "no")
      : s.find(".close-action").data("page-reload", "yes"),
    openColorbox({
      href: s,
      width: "50%",
      overlayClose: !1,
      escKey: !1,
      close: !1,
    });
}
function showSuccessPanel(e, t, n) {
  var i = "",
    s = $(".success-panel").eq(0);
  if (n) i = n.message;
  else if (e) {
    var a = $(e).find(".success");
    a.length && (i = a.html());
  }
  s.find(".msg-wrap").html(i),
    t
      ? t.url
        ? s.find(".close-action").data("url", t.url)
        : !1 === t.page_reload &&
          s.find(".close-action").data("page-reload", "no")
      : s.find(".close-action").data("page-reload", "yes"),
    openColorbox({
      href: s,
      width: "50%",
      overlayClose: !1,
      escKey: !1,
      close: !1,
    });
}
function showFailurePanel(e, t) {
  var n = "",
    i = $(".failure-panel").eq(0);
  if (t) n = t.message;
  else if (e) {
    var s = $(e).find(".failure");
    s.length && (n = s.html());
  }
  i.find(".msg-wrap").html(n),
    openColorbox({ href: i, width: "50%", close: !1 });
}
function showFailureInline(e, t, n) {
  (t && t.message) || (t = { message: $(n).find(".failure").text() }),
    $(e).find(".flash-msg.error").text(t.message).show().delay(7e3).slideUp(),
    openColorbox({ href: e });
}
function showValidationError(e, t, n) {
  t || (t = $(n).find(".failure").text()),
    $(e).find(".flash-msg.error").text(t.message).show().delay(7e3).slideUp(),
    resizeColorbox();
}
function getUnique(e) {
  for (var t = [], n = 0; n < e.length; n++)
    -1 == jQuery.inArray(e[n], t) && t.push(e[n]);
  return t;
}
function tipsy(e) {
  e.tipsy({ fade: !0 });
}
function reloadPageOnSectionChange(e, t) {
  (e = e.format({ section_id: t })), window.location.replace(e);
}
function displayStatus(e, t, n) {
  var i = $.extend({}, status_default_options, n);
  $status_msg.html(e).show();
  var s = $status_msg.attr("class").split(" ");
  if (1 < s.length) {
    var a = s.pop();
    $status_msg.removeClass(a);
  }
  $status_msg.addClass(t),
    i.autoHide &&
      (clearTimeout(status_timeout),
      (status_timeout = setTimeout(function () {
        $status_msg.hide();
      }, i.hideInterval)));
}
function formatDateForDatePicker(e) {
  return moment(e, "YYYY-MM-DD").format("DD MMM YYYY");
}
function formatDate(e) {
  return moment(e, "YYYY-MM-DD").format("MMM DD, YYYY");
}
function getJSON(e, t) {
  t.beforeSend && t.beforeSend();
  var n = e.type ? e.type : GET,
    i = e.dataType ? e.dataType : JSON_STR,
    s = { url: e.url, type: n, data: e.data, dataType: i },
    a = $.extend({}, s, e),
    o = $.ajax(a);
  o.always(function (e) {
    t.complete && t.complete(e);
  }),
    o.done(function (e) {
      t.success && t.success(e);
    }),
    o.fail(function (e) {
      t.failure && t.failure(e);
    });
}
function countObject(e) {
  var t = 0;
  if (e) for (i in e) e.hasOwnProperty(i) && t++;
  return t;
}
function addFilter(e, t) {
  var n = ".filter-bar .options";
  t &&
    (t.selector != undefined
      ? 0 != t.selector && ((n = t.selector), (e = e.find(n)))
      : (e = e.find(n))),
    e.append(createSelectComponent(t));
}
function createSelectComponent(o) {
  var e = o.multiSelect ? "multiple" : "",
    r =
      "<li class='item'><select name='" +
      (o.name ? o.name : "") +
      "' " +
      e +
      " title='" +
      (o.title ? o.title : "") +
      "' " +
      (o.selectAll ? "data-selectall=true" : "") +
      ">";
  return (
    jQuery.each(o.options, function (e, t) {
      var n = t.display_name ? t.display_name : t.name,
        i = t.value ? t.value : t.name,
        s = o.selectAll || t.selected ? "selected" : "",
        a = "";
      t.data &&
        $.each(t.data, function (e, t) {
          a += "data-" + e + '="' + t + '"';
        }),
        (r +=
          '<option name="' +
          t.name +
          '" value="' +
          i +
          '" ' +
          s +
          " " +
          a +
          ">" +
          n +
          "</option>");
    }),
    (r += "</select></li>")
  );
}
function convertSelectToList(e, t) {
  var n = "select";
  t && t.selector && (n = t.selector);
  var i = e.find(n);
  return i.selectToList(t), { select: i, list: e.find(".select-to-list") };
}
function addTipsyRel(e) {
  e.attr("rel", "tipsy");
}
function applyTipsy(e) {
  e.find("[rel=tipsy]").tipsy();
}
function setNameInClassDD() {
  try {
    $("#all-standards-btn .label").text("Class " + section_name);
  } catch (e) {
    console.log(e.message);
  }
}
function appSpecificEventHandler() {
  "undefined" != typeof current_user &&
    "undefined" != typeof expiry_info_hash &&
    paymentFailureNotification(),
    StatusMessage.init(),
    has_white_label && $body.addClass("white-lbl");
}
function initTracking() {
  gaFootprint.setEventCategories({ GLOBAL_HEADER: "Global Header" }),
    $("#header .strip").on("click", ".hook", function () {
      trackAction($(this));
    }),
    $("body").on("click", ".link, .btn, .fp-hook", function () {
      trackAction($(this));
    }),
    $("#cboxClose").on("click", function () {
      var e = $("#colorbox").data("colorbox-name");
      gaFootprint.trackAction({
        event_category: "Colorbox",
        event_action: "Close",
        event_label: e,
      });
    }),
    $("#colorbox").on("click", ".panel-footer .close-action", function () {
      gaFootprint.trackAction({
        event_category: "Colorbox",
        event_action: "Cancel",
      });
    });
}
function paymentFailureNotification() {
  if (
    (($body = $("body")),
    ($timer = $("#timer")),
    !expiry_info_hash.show_notification)
  )
    return !1;
  !getCookie("payment_failure_notification_shown_" + current_user.id) &&
    0 < expiry_info_hash.days_to_expire &&
    (openColorbox({
      href: "#payment-failure-notification-panel",
      width: "650px",
      fixed: !0,
      inline: !0,
      escKey: !1,
      overlayClose: !1,
    }),
    $("#cboxClose").hide(),
    setInterval(timer, 1e3),
    window.setTimeout(function () {
      closeColorbox(), $("#cboxClose").show();
    }, 3e4)),
    setCookie("payment_failure_notification_shown_" + current_user.id, !0, 0.1),
    expiry_info_hash.days_to_expire <= 0 &&
      (openColorbox({
        href: "#payment-failure-notification-panel",
        width: "650px",
        fixed: !0,
        inline: !0,
        escKey: !1,
        overlayClose: !1,
      }),
      $("#cboxClose").hide(),
      setInterval(timer, 1e3),
      $(".payment-expiry").show(),
      $(".payment-remainder").hide(),
      $(".count-down-timer").hide());
}
function timer() {
  (timer_count -= 1) <= 0 || $timer.html(timer_count);
}
function initAllStandardsEvents() {
  ($all_standards_list = $("#all-standards-list")),
    ($main_menu_viewport = $all_standards_list.find(".main-menu .viewport")),
    $all_standards_list.on("click", ".standard-js", function () {
      var e = $(this),
        t = e.closest(".item").find(".sections-list"),
        n = $all_standards_list.find(".sub-menu"),
        i = e.text();
      if (
        (removeSelectedfromAllStandardsList(),
        e.addClass("selected"),
        !e.hasClass("disabled"))
      ) {
        n.find(".std-js").text(i);
        var s = $("<div class='viewport'></div>").append(t.clone());
        n.find(".content").empty().append(s),
          n.addClass("slide-in"),
          setTimeout(function () {
            n.find(".sections-list").addClass("animate"), s.scrollable();
          }, 50);
      }
    }),
    $all_standards_list.on("click", ".section-js", function () {
      var e = { id: $(this).data("sectionid") };
      $("body").trigger(ALL_STD_SEC_CLICK, e);
    }),
    $main_menu_viewport.scrollable();
}
function hasUserRated() {
  return current_user_profile.has_rated;
}
function getGlobalSort(t, e) {
  var n,
    i = e.find("th"),
    s = $.grep(i, function (e) {
      return $(e).data("gsortcolname") == t;
    });
  if (1 == s.length) n = i.index(s[0]);
  else {
    var a = $.grep(i, function (e) {
      return "name" == $(e).data("gsortcolname");
    });
    n = 0 < a.length ? i.index(a[0]) : 1;
  }
  return [[n, 0]];
}
var popbox_is_open = !1;
!(function (b) {
  function e() {
    (popbox_obj = this.data("object")),
      popbox_obj.reposition(),
      popbox_obj.open();
  }
  function t() {
    (popbox_obj = this.data("object")), popbox_obj.close();
  }
  function n(e) {
    (popbox_obj = this.data("object")), popbox_obj.setTarget(e);
  }
  function i(e) {
    (popbox_obj = this.data("object")), popbox_obj.setPosition(e);
  }
  var o = {
      trigger: "click",
      arrow: !0,
      close: !0,
      animate: !0,
      top: 10,
      left: 0,
      fixed: !1,
      position: "default",
      autoClose: !0,
      usePosition: !1,
      open: !1,
      forceReload: !1,
    },
    y = 22,
    r = 155025,
    _ = "auto",
    a = { open: e, close: t, setTarget: n, setPosition: i },
    l = function (u, e) {
      var t,
        n,
        f,
        g,
        m,
        i,
        s = this,
        v = e,
        a = !1;
      (this.init = function () {
        (v = b.extend({}, o, v)).content
          ? (f = v.content)
          : ((t = v.href ? v.href : u.prop("href")),
            (f = s.getTargetElement(t))),
          (i = f.prev()),
          u.bind(v.trigger, s.clickHandler),
          v.arrow && s.addArrows(),
          v.close && s.addClose(),
          s.reposition();
        var e = v.zindex ? v.zindex : r++;
        s.setDepth(e), v.open && s.open();
      }),
        (this.getTargetElement = function (e) {
          return -1 != e.indexOf("#") &&
            1 < (n = jQuery.trim(e.substr(e.indexOf("#")))).length
            ? b(n)
            : null;
        }),
        (this.open = function () {
          if (!a) {
            (i = f.prev()),
              b("body").append(f),
              f.addClass("active-popbox"),
              v.animate
                ? (f.css("top", "-=10px"),
                  f.show().animate({ top: "+=10px", opacity: 1 }, 400))
                : f.show(),
              (popbox_is_open = a = !0);
            var e = f.find(".content");
            v.contentHeight &&
              e.height() > v.contentHeight &&
              (e.height(v.contentHeight), e.css("overflow-y", "scroll")),
              v.autoClose &&
                setTimeout(function () {
                  b(document).bind("keyup", s.keyUpHandler),
                    b(document).bind("click", s.globalClickHandler);
                }, 100);
          }
        }),
        (this.close = function () {
          a &&
            (f.removeClass("active-popbox"),
            v.animate
              ? f.animate({ top: "-=10px", opacity: 0 }, 100).hide("fast")
              : f.hide(),
            (popbox_is_open = a = !1),
            v.autoClose &&
              (b(document).unbind("keyup", s.keyUpHandler),
              b(document).unbind("click", s.globalClickHandler)),
            setTimeout(function () {
              popbox_is_open || f.insertAfter(i);
            }, 100));
        }),
        (this.addArrows = function () {
          (g = jQuery("<div class='arrow arrow-dir-u'></div>")),
            (m = jQuery("<div class='arrow arrow-dir-u arrow-border'></div>")),
            f.prepend(m).prepend(g);
        }),
        (this.addClose = function () {
          ($close_btn = jQuery("<a href='#' class='close'></a>")),
            ($icon_span = jQuery(
              "<span class='close-ricon sprite i16'></span>"
            )),
            $close_btn.append($icon_span),
            f.append($close_btn),
            $close_btn.bind("click ", s.closeClickHandler);
        }),
        (this.reposition = function () {
          var e = v.usePosition ? u.position() : u.offset(),
            t = Number(u.attr("width"));
          isNaN(t) && (t = u.outerWidth());
          var n = Number(u.attr("height"));
          isNaN(n) && (n = u.outerHeight());
          var i = f.width(),
            s = (i - t) / 2,
            a = e.left;
          a < s
            ? ((arrow_left = a + t / 2 - y / 2 - 5), (a = v.left))
            : ((arrow_left = i / 2 - y / 2), (a = a - s + v.left));
          var o = b("html").width(),
            r = b(window).height();
          if (o < a + i + 35) {
            a = o - i - 35;
            var l = e.left + t / 2;
            arrow_left = arrow_left + 10 + (l - (a + i / 2));
          }
          var c = f.find("[class*='arrow-dir']");
          c.removeClass("arrow-dir-u arrow-dir-d").addClass("arrow-dir-u"),
            v.arrow &&
              (c.css({ left: arrow_left }),
              g.css({ top: -10 }),
              m.css({ top: -12 }));
          var h = e.top + n + v.top;
          v.fixed && (h -= b(window).scrollTop());
          var d = f.outerHeight(),
            p = b(window).scrollTop();
          v.position == _ &&
            h + d > r + (p - b("#header").height()) &&
            ((h -= d + n + 20),
            v.arrow &&
              (c.removeClass("arrow-dir-u arrow-dir-d").addClass("arrow-dir-d"),
              g.css({ top: d - 2 }),
              m.css({ top: d }))),
            f.css({ top: h, left: a });
        }),
        (this.setPosition = function (e) {
          f.css({ top: e.top, left: e.left });
        }),
        (this.clickHandler = function (e) {
          var n = this;
          jQuery.each(b("[rel='popbox']"), function (e, t) {
            t != n && b(t).popbox("close");
          }),
            a ? s.close() : (s.reposition(), s.open()),
            e.preventDefault();
        }),
        (this.closeClickHandler = function () {
          return s.close(), !1;
        }),
        (this.globalClickHandler = function (e) {
          b(e.target).closest(".popbox").length || s.close();
        }),
        (this.keyUpHandler = function (e) {
          27 == e.keyCode && s.close();
        }),
        (this.setDepth = function (e) {
          f.css("z-index", e);
        }),
        (this.setTarget = function (e) {
          (u = e), s.reposition();
        }),
        this.init();
    };
  (publicMethod = b.fn.popbox =
    function (n) {
      var e = this,
        i = n,
        s = Array.prototype.slice.call(arguments);
      return (
        s.splice(0, 1),
        e.each(function () {
          var e = b(this),
            t = e.data("object");
          !t || n.forceReload
            ? ((t = new l(e, n)), e.data("object", t))
            : "string" == typeof i && a[i].apply(e, s);
        }),
        e
      );
    }),
    (b.closePopbox = function () {
      var e = b(".popbox.active-popbox").attr("id");
      b("[href=#" + e + "]").popbox("close");
    });
})(jQuery),
  (function (b) {
    function e() {
      this.data("object").update();
    }
    function t() {
      this.data("object").disabled();
    }
    var y = {
        multiSelect: !1,
        change: null,
        visibleItems: 6,
        contentHeight: 190,
        minSelection: 1,
        dropDownWidth: null,
        labelRenderer: null,
        imageOption: !1,
        iconOption: !1,
        displayOptionTextFirst: !0,
      },
      a = { update: e, disabled: t },
      o = function (r, e) {
        var o,
          l,
          c,
          h,
          d,
          p,
          u,
          f,
          n,
          i,
          g,
          m = this,
          v = e,
          t = !1,
          s = !1,
          a = !1;
        (this.init = function () {
          (v = b.extend({}, y, v)),
            !0,
            (p = v.multiSelect || r.prop("multiple")),
            (m.change = v.change),
            (f = v.label ? v.label : "Select"),
            (g = v.title ? v.title : r.attr("title")),
            (o = jQuery("<div class='mselect'></div>")).addClass(
              r.prop("class") + "_mselect"
            ),
            g && o.append("<span class='title'>" + g + "</span>"),
            (u = jQuery("<button type='button' class='hook'></button>"));
          var e = jQuery("<span class='icon icon-down'></span>"),
            t = jQuery("<span class='label'>" + f + "</span>");
          u.append(e).append(t),
            u.bind("click", m.hookClickHandler),
            o.append(u),
            (l = jQuery("<div class='dropdown'></div>")),
            o.append(l),
            l.on("click", ".option", function () {
              var e = m.getSelectedValues();
              r.val(e),
                m.updateLabel(m.getSelectedLabels()),
                p ||
                  (o.find(".item .hook").removeClass("selected"),
                  b(this).closest(".item").find(".hook").addClass("selected"),
                  m.apply()),
                r.change(),
                m.change && m.change(e);
            });
          try {
            o.tipsy({ trigger: "manual", gravity: "s" });
          } catch (a) {}
          var n = r.find("optgroup");
          c = 0 != n.length;
          var i = r.find("option");
          l.html(m.createOptions()),
            i.length > v.visibleItems && d.css("overflow-y", "scroll"),
            m.resetFooter(),
            r.hide(),
            o.insertAfter(r),
            m.updateLabel(m.getSelectedLabels());
          var s = r.outerWidth();
          v.width && (s = v.width), o.css("width", s);
        }),
          (this.createOptions = function () {
            var i,
              e = r.find("optgroup"),
              t = r.find("option");
            if (!e.length) {
              var n = r.val();
              (e = b("<optgroup></optgroup>").append(t)), r.append(e), r.val(n);
            }
            if (((d = b("<div class='optgroup'></div>")), p)) {
              var s = b("<div class='select-all-option ofh'></div>").append(
                  b('<h5 class="select-all-heading"/>')
                    .append(
                      b('<input class="checkbox-header" type="checkbox">')
                    )
                    .append(
                      b('<span class="heading-label">').text("Select All")
                    )
                ),
                a = b("<div></div>").append(s);
              i = a.append(i);
            } else i = b("<div></div>");
            if (
              (jQuery.each(e, function () {
                var e = b("<div class='group-wrapper'></div>");
                if ((d.append(e), c)) {
                  var t =
                    "<h5 class='optgroup-heading'><input class='checkbox-header' type='checkbox'><span class='value'>" +
                    b(this).attr("label") +
                    "</span></h5>";
                  e.append(t), e.addClass("had-optgroup");
                }
                var n = b(this).find("option"),
                  o = !0;
                n.length
                  ? ((h = jQuery("<ul class='list'></ul>")),
                    jQuery.each(n, function () {
                      var e = b(this);
                      if (
                        (($li = jQuery("<li class='item'></li>")),
                        e.data("status"))
                      ) {
                        var t = e.data("status");
                        $li.addClass(t),
                          $li.attr(
                            "original-title",
                            t.split("-").join(" ").toUpperCase()
                          ),
                          $li.tipsy();
                      }
                      (item_id =
                        "opt_" + (Number(new Date()) + 1e3 * Math.random())),
                        ($control = p
                          ? jQuery(
                              "<input class='option' id='" +
                                item_id +
                                "' type='checkbox'></input>"
                            )
                          : jQuery(
                              "<input class='option' id='" +
                                item_id +
                                "' type='radio' name='mselect'></input>"
                            )),
                        $control.prop("checked", e.is(":checked")),
                        e.is(":checked") || (o = !1),
                        $control.val(e.val());
                      var n = "";
                      v.imageOption
                        ? e.attr("data-image") != undefined &&
                          (n =
                            "<span class='image-icon'>" +
                            e.attr("data-image") +
                            "</span>")
                        : e.attr("data-icon") != undefined &&
                          (n =
                            "<span class='image-icon'>" +
                            e.attr("data-icon") +
                            "</span>");
                      var i = "<span class='value'>" + e.html() + "</span>",
                        s = v.displayOptionTextFirst ? i + n : n + i,
                        a = jQuery(
                          "<label class='hook' for='" +
                            item_id +
                            "'>" +
                            s +
                            "</label>"
                        );
                      $li.append($control).append(a), h.append($li);
                    }),
                    e.append(h),
                    i.append(d),
                    e.find(".checkbox-header").prop("checked", o))
                  : (i = b("<span class='no-data'>No item available</span>"));
              }),
              p)
            ) {
              var o = i.find(".select-all-option .checkbox-header");
              (v.selectAll || m.isAllOptionsSelected(i)) && o.click(),
                o.on("click", function () {
                  var e = i.find(".optgroup-heading .checkbox-header");
                  if (e.length)
                    o.is(":checked")
                      ? e.prop("checked", !1).click()
                      : e.prop("checked", !0).click();
                  else {
                    var t = i.find(".optgroup .group-wrapper");
                    if (o.is(":checked"))
                      t.find("input[type=checkbox]").not(":checked").click();
                    else t.find("input[type=checkbox]:checked").click();
                  }
                }),
                d.find(".checkbox-header").on("click", function () {
                  var e = b(this).parent(),
                    t = e.next();
                  0 == e.find("input[type=checkbox]:checked").length
                    ? t.find("input[type=checkbox]:checked").click()
                    : t.find("input[type=checkbox]").not(":checked").click();
                  var n = m.getSelectedValues();
                  r.val(n),
                    r.change(),
                    m.updateLabel(m.getSelectedLabels()),
                    m.change && m.change(n),
                    p ||
                      (t.find(".item .hook").removeClass("selected"),
                      b(this)
                        .closest(".item")
                        .find(".hook")
                        .addClass("selected"),
                      m.apply());
                });
            }
            return i;
          }),
          (this.apply = function () {
            var e = m.getSelectedValues();
            return (
              p && e.length < v.minSelection
                ? m.showErrorMessage(
                    "Minimum " + v.minSelection + " item(s) should be selected"
                  )
                : (m.close(), r.trigger("apply")),
              !1
            );
          }),
          (this.cancel = function () {
            return m.close(), !1;
          }),
          (this.isAllOptionsSelected = function (e) {
            var t = e
                .find(".optgroup .group-wrapper")
                .find("input[type=checkbox]"),
              n = e
                .find(".optgroup .group-wrapper")
                .find("input[type=checkbox]:checked");
            return t.length == n.length;
          }),
          (this.getSelectedValues = function () {
            var n = [],
              e = p ? "input:checkbox:checked" : "input:radio:checked";
            return (
              jQuery.each(o.find(e), function (e, t) {
                n.push(b(t).val());
              }),
              n
            );
          }),
          (this.getSelectedLabels = function () {
            var i = [],
              e = p ? "li input:checkbox:checked" : "li input:radio:checked";
            return (
              v.labelRenderer
                ? ((selected_label = v.labelRenderer(r)),
                  i.push(selected_label))
                : jQuery.each(o.find(e), function (e, t) {
                    var n = b(t).parent().find(".hook").text();
                    i.push(n);
                  }),
              i
            );
          }),
          (this.open = function () {
            var e = v.dropDownWidth ? v.dropDownWidth : o.width() - 2;
            l.width(e),
              l.fadeIn(300),
              (t = !0),
              l.parent().addClass("open"),
              d &&
                d.height() > v.contentHeight &&
                (d.height(v.contentHeight), d.css("overflow-y", "scroll")),
              c &&
                b(".optgroup ul li").find(".checkbox-icon").addClass("groups"),
              b(document).bind("keyup", m.keyUpHandler),
              b(document).bind("click", m.globalClickHandler);
          }),
          (this.close = function () {
            l.slideUp(150),
              (t = !1),
              l.parent().removeClass("open"),
              b(document).unbind("keyup", m.keyUpHandler),
              b(document).unbind("click", m.globalClickHandler);
          }),
          (this.updateLabel = function (e) {
            var t = e.join(", ") || f;
            v.charsToShow &&
              t.length > v.charsToShow &&
              (t = t.substr(0, v.charsToShow) + "..."),
              u.find(".label").html(t);
          }),
          (this.hookClickHandler = function () {
            return a || (t ? m.close() : m.open()), !1;
          }),
          (this.globalClickHandler = function (e) {
            b(e.target).closest(".mselect").length || m.close(),
              s && m.clearErrorMessage();
          }),
          (this.keyUpHandler = function (e) {
            27 == e.keyCode && m.close();
          }),
          (this.showErrorMessage = function (e) {
            o.attr("original-title", e), o.tipsy("show"), (s = !0);
          }),
          (this.clearErrorMessage = function () {
            o.tipsy("hide"), (s = !1);
          }),
          (this.resetFooter = function () {
            var e = r.find("option");
            if (p && e.length) {
              var t = jQuery("<div class='footer'></div>");
              (n = jQuery("<a href='#' class='btn apply-button'>Apply</a>")),
                (i = jQuery(
                  "<a href='#' class='btn cancel-button'>Cancel</a>"
                )),
                t.append(n).append(i),
                l.append(t),
                n.on("click", m.apply),
                i.on("click", m.cancel);
            }
          }),
          (this.update = function () {
            l.html(m.createOptions()),
              m.updateLabel(m.getSelectedLabels()),
              m.resetFooter(),
              p && b("input[type=checkbox]").checkbox();
          }),
          (this.disabled = function () {
            (a = !0), o.addClass("disabled");
          }),
          this.init();
      };
    publicMethod = b.fn.mselect = function (n) {
      var e = this,
        i = n,
        s = Array.prototype.slice.call(arguments);
      return (
        s.splice(0, 1),
        e.each(function () {
          var e = b(this),
            t = e.data("object");
          t
            ? "string" == typeof i && a[i].apply(e, s)
            : ((t = new o(e, n)), e.data("object", t));
        }),
        e
      );
    };
  })(jQuery),
  (function (o) {
    function e(e) {
      this.data("object").selected(e);
    }
    var r = { change: null },
      a = { selected: e },
      l = function (n, e) {
        var i,
          s = this,
          a = e;
        (this.init = function () {
          (a = o.extend({}, r, a)), (s.change = a.change);
          var e = n,
            t = n.data("group-name") ? n.data("group-name") : n.attr("name");
          (i = o("<span class='radio-icon radio-" + t + "' />")).insertAfter(e),
            e.data("icon-elem", i),
            e.hide(),
            i.on("click", function () {
              return !1 === e.prop("disabled") && e.click(), !1;
            }),
            e.on("change", function () {
              o(".radio-" + t).removeClass("selected"),
                o(this).is(":checked")
                  ? i.addClass("selected")
                  : i.removeClass("selected");
            }),
            e.is(":checked") && i.addClass("selected"),
            e.prop("disabled") && this.disabled(!0);
        }),
          (this.selected = function () {
            n.click();
          }),
          (this.disabled = function (e) {
            e
              ? (n.attr("disabled", "disabled"), i.addClass("disabled"))
              : (n.removeAttr("disabled"), i.removeClass("disabled"));
          });
      };
    publicMethod = o.fn.radio = function (n) {
      var e = this,
        i = n,
        s = Array.prototype.slice.call(arguments);
      return (
        s.splice(0, 1),
        e.each(function () {
          var e = o(this),
            t = e.data("object");
          t
            ? "string" == typeof i && a[i].apply(e, s)
            : ((t = new l(e, n)).init(), e.data("object", t));
        }),
        e
      );
    };
  })(jQuery),
  (function (l) {
    function e(e) {
      this.data("object").selected(e);
    }
    function t(e) {
      this.data("object").disabled(e);
    }
    var c = { change: null },
      a = { selected: e, disabled: t },
      o = function (i, e) {
        var s,
          a = this,
          o = e,
          r = "small";
        (this.init = function () {
          var e = i.data("options");
          if (e) {
            var t = l.extend({}, c, e);
            o = l.extend({}, t, o);
          } else o = l.extend({}, c, o);
          a.change = o.change;
          var n = i;
          (s = l("<span class='checkbox-icon' />")).insertAfter(n),
            o.size && o.size == r && s.addClass("s"),
            n.data("icon-elem", s),
            n.hide(),
            s.on("click", function () {
              return !1 === n.prop("disabled") && n.click(), !1;
            }),
            n.on("change", function () {
              l(this).is(":checked")
                ? s.addClass("selected")
                : s.removeClass("selected");
            }),
            n.is(":checked") && s.addClass("selected"),
            n.prop("disabled") && this.disabled(!0);
        }),
          (this.selected = function (e) {
            i.prop("checked", !e).click();
          }),
          (this.disabled = function (e) {
            e
              ? (i.attr("disabled", "disabled"), s.addClass("disabled"))
              : (i.removeAttr("disabled"), s.removeClass("disabled"));
          });
      };
    publicMethod = l.fn.checkbox = function (n) {
      var e = this,
        i = n,
        s = Array.prototype.slice.call(arguments);
      return (
        s.splice(0, 1),
        e.each(function () {
          var e = l(this),
            t = e.data("object");
          t
            ? "string" == typeof i && a[i].apply(e, s)
            : ((t = new o(e, n)).init(), e.data("object", t));
        }),
        e
      );
    };
  })(jQuery),
  (function (c) {
    var h = {},
      a = {},
      o = function (e, t) {
        var s,
          a,
          o,
          r,
          l,
          n = this,
          i = t;
        (this.init = function () {
          (i = c.extend({}, h, i)),
            (o = e),
            (s = c("#wrapper")),
            (a = c(window)),
            (r = o.children(".panel-footer")),
            (l = c("<div class='panel-footer-placeholder' />").height(
              r.outerHeight() + 2
            )),
            o.append(l),
            a.scroll(function () {
              n.reposition();
            }),
            a.resize(function () {
              n.reposition();
            }),
            n.reposition();
        }),
          (this.reposition = function () {
            var e = a.scrollTop(),
              t = a.height();
            if (s.height() - t <= 0) return !1;
            var n,
              i = r.outerHeight() + 2;
            if ((l.height(i), i <= 30)) return o.removeClass("fixed"), !1;
            e <
            (n = l.is(":visible") ? l : o.children(".panel-footer")).offset()
              .top +
              n.outerHeight() / 2 -
              t
              ? o.addClass("fixed")
              : o.removeClass("fixed");
          });
      };
    publicMethod = c.fn.stickyPanelFooter = function (n) {
      var e = this,
        i = n,
        s = Array.prototype.slice.call(arguments);
      return (
        s.splice(0, 1),
        e.each(function () {
          var e = c(this),
            t = e.data("object");
          t
            ? "string" == typeof i && a[i].apply(e, s)
            : ((t = new o(e, n)).init(), e.data("object", t));
        }),
        e
      );
    };
  })(jQuery),
  (function (h) {
    var d = {},
      i = function (e, t) {
        var n,
          i,
          s,
          a,
          o,
          r = this,
          l = t,
          c = !1;
        (this.init = function () {
          (l = h.extend({}, d, l)),
            (o = h("<span class='icon'></span>").insertBefore(e)),
            e.prev().andSelf().wrapAll("<div class='arrow-toggle'></div>"),
            -1 != (n = e.prop("href")).indexOf("#") &&
              ((i = n.substr(n.indexOf("#"))),
              (s = h(i)),
              (a = e.parent(".arrow-toggle")).bind("click ", r.clickHandler),
              o.addClass("icon-right")),
            l.default_open ? (a.addClass("open"), (c = !0)) : s.hide();
        }),
          (this.open = function () {
            (c = !0), a.addClass("open"), s.slideDown();
          }),
          (this.close = function () {
            (c = !1), a.removeClass("open"), s.slideUp();
          }),
          (this.clickHandler = function () {
            return c ? r.close() : r.open(), !1;
          }),
          this.init();
      };
    publicMethod = h.fn.arrowToggle = function (n) {
      var e = this;
      return (
        e.each(function () {
          var e = h(this),
            t = e.data("object");
          t
            ? t.init()
            : ((t = new i(e, n)), e.parent(".arrow-toggle").data("object", t));
        }),
        e
      );
    };
  })(jQuery),
  (function (r) {
    r.fn.rbFileInput = function (e) {
      function a(e) {
        for (var t = "", n = 0; n < e.files.length; n++)
          n == e.files.length - 1
            ? (t += e.files[n].name)
            : (t += e.files[n].name + ", ");
        return t;
      }
      var o = {
        label: "Browse...",
        fullPath: !1,
        buttonStyle: "btn gamma-btn",
        buttonSize: "btn-2x",
      };
      return (
        e && r.extend(o, e),
        this.each(function () {
          var n = this;
          if (r(n).attr("data-styled") === undefined) {
            var e = Math.round(1e4 * Math.random()),
              t = new Date().getTime() + e.toString(),
              i = r('<input type="text" readonly="readonly">')
                .css({
                  display: "block",
                  float: "left",
                  "text-overflow": "ellipsis",
                })
                .addClass("file-ip-txt txt-box " + t),
              s = r("<div>")
                .css({ position: "relative" })
                .addClass(
                  "file-ip-btn " + o.buttonSize + " " + o.buttonStyle + " " + t
                )
                .html(o.label);
            r(n).after(i),
              r(n).wrap(s),
              r("." + t).wrapAll(
                '<div class="file-ip-wrap" id="file-ip-' + t + '" />'
              ),
              r(".file-ip-wrap").css({
                overflow: "auto",
                display: "inline-block",
              }),
              r("#file-ip-" + t).addClass(r(n).attr("class")),
              r(n)
                .css({
                  opacity: 0,
                  position: "absolute",
                  border: "none",
                  margin: 0,
                  padding: 0,
                  top: 0,
                  right: 0,
                  cursor: "pointer",
                  height: "100%",
                  width: "100%",
                })
                .addClass("file-ip-wrap-current"),
              r(n).on("change", function () {
                var e = r(n).val();
                if (o.fullPath) i.val(e);
                else {
                  var t = a(n);
                  i.val(t);
                }
              }),
              r(n).attr("data-styled", !0);
          }
        })
      );
    };
  })(jQuery),
  (function (v) {
    function e(e) {
      this.data("object").selectItem(e);
    }
    function t(e) {
      this.data("object").selected(e);
    }
    function n() {
      this.data("object").selectAll();
    }
    function i() {
      (class_obj = this.data("object")), class_obj.unSelectAll();
    }
    var s = {
        change: null,
        includeSelectAll: !1,
        itemAdded: null,
        applyColor: !1,
        smoothLabelCut: !0,
      },
      a = { selected: t, selectItem: e, selectAll: n, unSelectAll: i },
      o = function (h, e) {
        var i,
          d,
          p,
          u,
          f,
          g = this,
          m = e;
        (this.init = function () {
          (m = v.extend({}, s, m)),
            (p =
              m.multiSelect != undefined ? m.multiSelect : h.prop("multiple")),
            (u = p ? "checkbox" : "radio"),
            (g.change = m.change),
            (f = m.colors);
          var l = h.attr("name");
          if (
            ((i = jQuery("<div class='select-to-list'></div>")).addClass(
              l + "_selecttolist"
            ),
            m.includeSelectAll && p)
          ) {
            var c =
                "select-unselect-" + (Number(new Date()) + 1e3 * Math.random()),
              e = v(
                "<span class='" +
                  u +
                  " selectall'><input type='checkbox' id='" +
                  c +
                  "' /><span class='icon'></span> <label for='" +
                  c +
                  "'>Select All</label></span>"
              );
            m.selectAllContainer
              ? e.prependTo(m.selectAllContainer)
              : e.appendTo(i),
              v("input", e).on("click", function () {
                var e = v(this).prop("checked"),
                  t = v(this).parent();
                e
                  ? (g.selectAll(), t.addClass("selected"))
                  : (g.unSelectAll(), t.removeClass("selected"));
              }),
              v(".icon", e).on("click", function (e) {
                v(this).parent().find("input").click(), e.preventDefault();
              });
          }
          var t = h.find("option");
          (d = jQuery("<ul class='list'></ul>")),
            i.append(d),
            jQuery.each(t, function (e, t) {
              var n = v(t),
                i = n.text();
              ($li = jQuery("<li></li>")),
                (c = "opt_" + (Number(new Date()) + 1e3 * Math.random())),
                ($control = p
                  ? jQuery("<input id='" + c + "' type='checkbox'></input>")
                  : jQuery(
                      "<input id='" +
                        c +
                        "' type='radio' name='" +
                        l +
                        "_radio'></input>"
                    ));
              var s = n.is(":checked");
              $control.prop("checked", s), $control.val(n.val());
              var a = "";
              m.applyColor &&
                f &&
                f[e] != undefined &&
                (a = "background-color: " + f[e]);
              var o = jQuery("<span class='icon' style='" + a + "' ></span>"),
                r = jQuery(
                  "<label for='" +
                    c +
                    "' title='" +
                    i +
                    "' rel='tipsy'>" +
                    i +
                    "</label>"
                );
              m.smoothLabelCut && r.addClass("smooth"),
                $li.append($control).append(o).append(r),
                $li.addClass(u + " " + n.val()),
                s && $li.addClass("selected"),
                d.append($li),
                m.itemAdded &&
                  m.itemAdded($li, { index: e, options: m, $option: n }),
                o.on("click", function () {
                  return v(this).parent().find("input").click(), !1;
                }),
                $control.on("change", function () {
                  var e = g.getSelectedValues();
                  g.getSelectedLabels();
                  h.val(e), h.change(), g.change && g.change(e);
                  var t = v(this).closest("li");
                  p
                    ? v(this).prop("checked")
                      ? t.addClass("selected")
                      : t.removeClass("selected")
                    : (d.find("li").removeClass("selected"),
                      t.addClass("selected"));
                });
            }),
            h.hide(),
            h.parent().append(i);
        }),
          (this.getSelectedValues = function () {
            var n = [],
              e = p ? "input:checkbox:checked" : "input:radio:checked";
            return (
              jQuery.each(i.find(e), function (e, t) {
                n.push(v(t).val());
              }),
              n
            );
          }),
          (this.getSelectedLabels = function () {
            var n = [],
              e = p ? "input:checkbox:checked" : "input:radio:checked";
            return (
              jQuery.each(i.find(e), function (e, t) {
                n.push(v(t).next().html());
              }),
              n
            );
          }),
          (this.selectItem = function (e) {
            p
              ? i.find(".checkbox.selected").removeClass("selected")
              : (h.val(e),
                i.find(".radio.selected").removeClass("selected"),
                i.find("input:radio:checked").prop("checked", !1),
                i.find(".radio." + e).addClass("selected"),
                i.find("input[value=" + e + "]").prop("checked", !0)),
              i.find("input[value=" + e + "]").click();
          }),
          (this.selected = function (e) {
            i.find("input[value=" + e + "]").click();
          }),
          (this.selectAll = function () {
            if (p) {
              var e = v("input", i);
              e.prop("checked", !0), e.change();
            }
          }),
          (this.unSelectAll = function () {
            var e = v("input", i);
            e.prop("checked", !1), e.change();
          });
      };
    publicMethod = v.fn.selectToList = function (n) {
      var e = this,
        i = n,
        s = Array.prototype.slice.call(arguments);
      return (
        s.splice(0, 1),
        e.each(function () {
          var e = v(this),
            t = e.data("object");
          t
            ? "string" == typeof i && a[i].apply(e, s)
            : ((t = new o(e, n)).init(), e.data("object", t));
        }),
        e
      );
    };
  })(jQuery),
  (function (o) {
    var i = { searchable: !0, highlight: !0, multiWordSearch: !0 },
      r = {},
      l = function (p, e) {
        function t() {
          (g = o.extend({}, i, g)).inputElement &&
            o(g.inputElement).keyup(function () {
              n(o.trim(o(this).val()).replace(/ +/g, " ").toLowerCase());
            });
        }
        function n(e) {
          var t = p[0];
          u(t);
          for (
            var n = e.toLowerCase().split(" "), i = 1;
            i < t.rows.length;
            i++
          ) {
            var s = "";
            if (g.multiWordSearch)
              for (var a = 0; a < n.length; a++)
                t.rows[i].innerHTML
                  .replace(/<[^>]+>/g, "")
                  .toLowerCase()
                  .indexOf(n[a]) < 0
                  ? (s = "none")
                  : n[a].length && f(n[a], t.rows[i]),
                  (t.rows[i].style.display = s);
            else {
              var o = t.rows[i].cells,
                r = !1;
              for (c = 0; c < o.length; c++) {
                var l = g.searchable,
                  h = g.highlight;
                if (g.headers && g.headers[c]) {
                  var d = g.headers[c];
                  d.searchable != undefined && (l = d.searchable),
                    d.highlight != undefined && (h = d.highlight);
                }
                l &&
                  (o[c].innerHTML
                    .replace(/<[^>]+>/g, "")
                    .toLowerCase()
                    .indexOf(e) < 0
                    ? (s = "none")
                    : ((r = !0), e.length && h && f(e, o[c])));
              }
              (s = r ? "" : "none"), (t.rows[i].style.display = s);
            }
          }
        }
        function u(e) {
          for (var t = 0; t < e.childNodes.length; t++) {
            var n = e.childNodes[t];
            if (
              n.attributes &&
              n.attributes["class"] &&
              "highlighted" == n.attributes["class"].value
            )
              return void n.parentNode.parentNode.replaceChild(
                document.createTextNode(
                  n.parentNode.innerHTML.replace(/<[^>]+>/g, "")
                ),
                n.parentNode
              );
            3 != n.nodeType && u(n);
          }
        }
        function f(e, t) {
          for (var n = 0; n < t.childNodes.length; n++) {
            var i = t.childNodes[n];
            if (3 == i.nodeType) {
              var s = i.data,
                a = s.toLowerCase();
              if (0 <= a.indexOf(e)) {
                var o,
                  r = document.createElement("span");
                for (
                  i.parentNode.replaceChild(r, i);
                  -1 != (o = a.indexOf(e));

                )
                  r.appendChild(document.createTextNode(s.substr(0, o))),
                    r.appendChild(
                      l(document.createTextNode(s.substr(o, e.length)))
                    ),
                    (s = s.substr(o + e.length)),
                    (a = a.substr(o + e.length));
                r.appendChild(document.createTextNode(s));
              }
            } else f(e, i);
          }
        }
        function l(e) {
          var t = document.createElement("span");
          return (
            t.setAttribute("class", "highlighted"),
            (t.attributes["class"].value = "highlighted"),
            t.appendChild(e),
            t
          );
        }
        var g = e;
        t();
      };
    publicMethod = o.fn.tablesearcher = function (n) {
      var i = "tablesearcher",
        e = this,
        s = n,
        a = Array.prototype.slice.call(arguments);
      return (
        a.splice(0, 1),
        e.each(function () {
          var e = o(this),
            t = e.data(i);
          t
            ? "string" == typeof s && r[s].apply(e, a)
            : ((t = new l(e, n)), e.data(i, t));
        }),
        e
      );
    };
  })(jQuery);
popbox_is_open = !1;
!(function (h) {
  function e() {
    (popbox_obj = this.data("object")), popbox_obj.reset();
  }
  var d = {},
    a = { reset: e },
    o = function (e, t) {
      var r,
        l,
        c = t;
      (this.init = function () {
        (c = h.extend({}, d, c)), (l = (r = e).children(".list"));
        var n = 0,
          i = l.height(),
          s = r.parent().position().top,
          a = 0,
          o = 0;
        l.mousemove(function (e) {
          if (a < 0) {
            var t = e.pageY - s;
            t < o && l.css({ top: -t });
          }
        }),
          l.mouseenter(function (e) {
            if (((n = r.height() - s), (a = n - i), (o = Math.abs(a)), a < 0)) {
              var t = e.pageY - s;
              o < t && l.animate({ top: -o });
            }
          });
      }),
        (this.reset = function () {
          l.css({ top: 0 });
        }),
        this.init();
    };
  publicMethod = h.fn.scrollable = function (n) {
    var e = this,
      i = n,
      s = Array.prototype.slice.call(arguments);
    return (
      s.splice(0, 1),
      e.each(function () {
        var e = h(this),
          t = e.data("object");
        t
          ? "string" == typeof i && a[i].apply(e, s)
          : ((t = new o(e, n)), e.data("object", t));
      }),
      e
    );
  };
})(jQuery),
  (function (x) {
    function e(e) {
      this.data(r).validate(e);
    }
    function t(e, t) {
      this.data(r).applyError(e, t);
    }
    var n,
      i = "tableX",
      a = "." + i,
      C = "tableX-cell",
      w = "." + C,
      S = "active-cell",
      d = "." + S,
      p = "active-row",
      u = "." + p,
      f = "pointer-cell",
      s = "tableX-txt-box",
      g = "." + s,
      $ = "projected",
      E = '<input type="text" class="' + s + '"/>',
      A = "selected-area",
      T = "." + A,
      N = !1,
      P = !1,
      O = !1,
      H = "td",
      M = "tr",
      j = "tbody tr",
      L = "tableX-clipboard-text-area",
      D = "." + L,
      I = {
        nav_left: 37,
        nav_right: 39,
        nav_up: 38,
        nav_down: 40,
        tab: 9,
        delete: 46,
        escape: 27,
        enter: 13,
        ctrl: 17,
        c: 67,
        a: 65,
        v: 86,
        x: 88,
      },
      R = { headers: {}, fixedHeader: !1, fixedColumn: !1, numFixedColumns: 0 },
      o = { validate: e, applyError: t },
      r = "tableX",
      F = {
        fixed_header: ".fixed-header",
        fixed_column: ".fixed-column",
        fixed_column_header: ".fixed-column-header",
        tableX_wrap: ".tableX-wrap",
        table_wrap: ".table-wrap",
        table: "table",
      },
      l = function (h, e) {
        var m,
          v,
          r,
          l,
          c,
          o,
          b,
          y,
          k = this,
          s = e;
        (this.init = function () {
          (s = x.extend({}, R, s)),
            x("#wrapper"),
            (m = h.parent()),
            h.addClass(i),
            h.find("tbody td").addClass(C),
            k.addEventListeners(),
            s.fixedHeader && k.fixedHeaderForTable(),
            s.fixedColumn && k.fixColumnForTable(),
            x("#" + L).length ||
              x("body").append(
                '<textarea id="' + L + '" class="' + L + '" ></textarea>'
              );
        }),
          (this.addEventListeners = function () {
            h.on("dblclick", w, function (e, t) {
              var n = x(this);
              k.isCurrentCellEditable() &&
                0 == n.find(g).length &&
                (n.addClass($),
                t && t.clear && n.text(""),
                k.addInputTextBoxToCell(n),
                n.trigger("editing"));
            }),
              h.on("keydown", g, function () {
                n = this.selectionStart;
              }),
              h.on("keydown", w, function (e) {
                e.keyCode, I.escape;
              }),
              h.on("mousedown", w, function () {
                var e = x(this);
                k.isCellInEditMode(e) || ((o = !0), k.selectCell(e));
              }),
              h.on("mousemove", w, function (e) {
                if (o) {
                  h.find(u).removeClass(p);
                  var t = x(this),
                    n = c,
                    i = l,
                    s = t.index(),
                    a = t.parent().index();
                  k.selectRange({ left: n, top: i }, { left: s, top: a }),
                    b && e.preventDefault();
                }
              }),
              h.on("tableXManualValidate", "td", function () {
                k.validate(x(this));
              }),
              (document.onmouseup = function (e) {
                (o = !1),
                  x(e.target).closest(a).length
                    ? (b = !0)
                    : ((b = !1), v && (v.removeClass(S), (v = null)));
              }),
              (document.onkeydown = function (e) {
                if (b)
                  switch (
                    ((N = !(!e.ctrlKey && !e.metaKey)),
                    (P = !!e.shiftKey),
                    (O = !!e.altKey),
                    e.keyCode)
                  ) {
                    case I.nav_left:
                      if (!k.isEditMode()) {
                        var t,
                          n = P ? y : v,
                          i = (t = N
                            ? n.parent().children().first()
                            : n.prev()).index();
                        t.hasClass(C) &&
                          k.canNavigate(I.nav_left) &&
                          k.selectCell(t, { end: { left: i } }),
                          e.preventDefault();
                        var s = t.parent().children().splice(0, i),
                          a = m.scrollLeft(),
                          o = 0;
                        x.map(s, function (e) {
                          o += x(e).outerWidth();
                        }),
                          o < a && m.scrollLeft(a - t.outerWidth());
                      }
                      break;
                    case I.nav_right:
                      k.isEditMode() || (k.navRight(), e.preventDefault());
                      break;
                    case I.nav_up:
                      var r,
                        l = (n = P ? y : v).parent(),
                        c = n.closest("tbody"),
                        h = (r = N
                          ? c.children().first()
                          : c.find(M).eq(l.index() - 1))
                          .find(H)
                          .eq(n.index()),
                        d = r.index();
                      h.hasClass(C) &&
                        0 != l.index() &&
                        k.selectCell(h, { end: { top: d } });
                      var p = c.children().splice(0, d),
                        u = m.scrollTop(),
                        f = 0;
                      x.map(p, function (e) {
                        f += x(e).outerHeight();
                      }),
                        f < u && m.scrollTop(u - r.outerHeight()),
                        e.preventDefault();
                      break;
                    case I.nav_down:
                      k.navDown(), e.preventDefault();
                      break;
                    case I["delete"]:
                      var g = (c = v.closest("tbody")).find(T);
                      g.length
                        ? x.each(g, function () {
                            var e = x(this);
                            k.isCellEditable(e) &&
                              (e.text("").trigger("keyup"),
                              e.trigger("editing"),
                              k.validate(e));
                          })
                        : k.isCurrentCellEditable() &&
                          (v.text("").trigger("keyup"),
                          v.trigger("editing"),
                          k.validate(v),
                          v.trigger("editing"));
                      break;
                    case I.enter:
                      k.isEditMode() ? k.navDown() : v.trigger("dblclick");
                      break;
                    case I.a:
                      if (!k.isEditMode())
                        if (N) {
                          c = v.closest("tbody");
                          v.trigger("click"),
                            c.find(w).addClass(A),
                            v.removeClass(S),
                            x(x(T)[0]).addClass(S),
                            e.preventDefault();
                        } else v.trigger("dblclick", { clear: !0 });
                      break;
                    case I.c:
                      k.isEditMode() ||
                        (N
                          ? k.copyAll()
                          : v.trigger("dblclick", { clear: !0 }));
                      break;
                    case I.x:
                      k.isEditMode() ||
                        (N
                          ? (k.copyAll(), v.text(""), x(T).text(""))
                          : v.trigger("dblclick", { clear: !0 }));
                      break;
                    case I.v:
                      k.isEditMode() ||
                        (N
                          ? (k.selectClipboardTextArea(),
                            setTimeout(function () {
                              k.pasteData();
                            }, 100))
                          : v.trigger("dblclick", { clear: !0 }));
                      break;
                    case I.escape:
                      k.escapeTextInput();
                      break;
                    case I.tab:
                      k.navRight(), e.preventDefault();
                      break;
                    default:
                      if (N || P || O || k.isEditMode()) return;
                      v.trigger("dblclick", { clear: !0 });
                  }
              }),
              (document.onkeyup = function (e) {
                (N = !(!e.ctrlKey && !e.metaKey)),
                  (P = !!e.shiftKey),
                  (O = !!e.altKey);
              });
          }),
          (this.selectCell = function (e, t) {
            if ((h.find(u).removeClass(p), P)) {
              k.setPointerCell(e);
              var n = { left: c, top: l },
                i = { left: e.index(), top: e.parent().index() };
              t && t.start && (n = _.merge(n, t.start)),
                t && t.end && (i = _.merge(i, t.end)),
                k.selectRange(n, i);
            } else
              h.find(d).removeClass(S),
                h.find(T).removeClass(A),
                k.setActiveCell(e),
                k.setActiveRow(e),
                k.setPointerCell(e);
          }),
          (this.selectRange = function (e, t) {
            var n = e.left,
              i = e.top,
              s = t.left,
              a = t.top;
            s < n && ((n = s), (s = c)),
              a < i && ((i = a), (a = l)),
              h.find(T).removeClass(A);
            var o = h.find("tbody tr").splice(i, a - i + 1);
            x.each(o, function () {
              var e = x(this);
              x(e.find(H).splice(n, s - n + 1)).addClass(A);
            });
          }),
          (this.escapeTextInput = function () {
            v.find(g).length && v.find(g).blur();
          }),
          (this.isEditMode = function () {
            return !!v && v.find(g).length;
          }),
          (this.isCellInEditMode = function (e) {
            return !!e && e.find(g).length;
          }),
          (this.isCurrentCellEditable = function () {
            return k.isCellEditable(v);
          }),
          (this.isCellEditable = function (e) {
            var t = e.index(),
              n = s.headers[t];
            return (!n || !1 !== n.editable) && !e.hasClass("readonly");
          }),
          (this.copyAll = function () {
            var e = k.getSelectedAreaRows(),
              t = "";
            if (0 == e.length)
              return (
                k.isCellInEditMode(v) && v.find(g).blur(),
                (t = v.text()),
                x(D).val(t),
                void k.selectClipboardTextArea()
              );
            var i = [];
            e.each(function (e, t) {
              var n = x(t).find(T);
              i[e] = n
                .map(function () {
                  return x(this).text().trim();
                })
                .get();
            });
            for (var n = 0; n < i.length; n++) t = t + i[n].join("\t") + "\n";
            x(D).val(t), k.selectClipboardTextArea();
          }),
          (this.selectClipboardTextArea = function () {
            var e = x(D),
              t = e[0];
            t.setSelectionRange && t.setSelectionRange(0, e.val().length),
              e.select();
          }),
          (this.pasteData = function () {
            for (
              var e = [], t = x(D).val().trim().split("\n"), n = 0;
              n < t.length;
              n++
            )
              e.push(t[n].split("\t"));
            var i,
              s = v;
            for (i = v.parent().index(), n = 0; n < e.length; n++) {
              for (
                var a = e[n], o = 0;
                o < a.length &&
                (s.text(a[o]), k.validate(s), s.next().hasClass(C));
                o++
              )
                s = s.next();
              s = h
                .find(j)
                .eq(i + n + 1)
                .find(H)
                .eq(r);
            }
          }),
          (this.getSelectedAreaRows = function () {
            return h.find(M).filter(function (e, t) {
              return x(t).find(H).hasClass(A);
            });
          }),
          (this.navRight = function () {
            var e,
              t = P ? y : v,
              n = (e = N ? t.parent().children().last() : t.next()).index();
            e.hasClass(C) &&
              k.canNavigate(I.nav_right) &&
              k.selectCell(e, { end: { left: n } });
            var i = e
                .parent()
                .children()
                .splice(0, n + 1),
              s = m.width(),
              a = m.scrollLeft(),
              o = 0;
            x.map(i, function (e) {
              o += x(e).outerWidth();
            }),
              s < o - a && m.scrollLeft(o - s + 30);
          }),
          (this.navDown = function () {
            var e,
              t = P ? y : v,
              n = t.parent(),
              i = t.closest("tbody"),
              s = (e = N
                ? i.children().last()
                : i.find(M).eq(n.index() + 1)).index();
            if (e.length) {
              var a = e.find(H).eq(t.index());
              a.hasClass(C) && k.selectCell(a, { end: { top: s } });
            } else k.escapeTextInput();
            var o = i.children().splice(0, s + 1),
              r = m.height(),
              l = m.scrollTop(),
              c = 0;
            x.map(o, function (e) {
              c += x(e).outerHeight();
            }),
              r < (c += h.find("thead").outerHeight()) - l &&
                m.scrollTop(c - r + 15);
          }),
          (this.canNavigate = function (e) {
            var t = v.find(g);
            return (
              0 == t.length ||
              (e == I.nav_right
                ? t.val().length == n
                : e != I.nav_left || 0 == n)
            );
          }),
          (this.setActiveCell = function (e) {
            v != undefined && v.removeClass(S),
              (v = e).addClass(S),
              (r = v.index()),
              (c = r),
              (l = v.parent().index()),
              h.find(g).blur();
          }),
          (this.setActiveRow = function (e) {
            e.closest("tr").addClass(p);
          }),
          (this.setPointerCell = function (e) {
            y != undefined && y.removeClass(f), (y = e).addClass(f);
          }),
          (this.addInputTextBoxToCell = function (e) {
            var t = x(E),
              n = e.text().trim(),
              i = e.width();
            t.val(n).width(i),
              e.html(t),
              t.focus(),
              t.on("blur", function () {
                var e = x(this),
                  t = e.parent(),
                  n = e.val();
                t.text(n).removeClass($), k.validate(t);
              });
          }),
          (this.addCellClass = function (e, t) {
            var n = e.closest("tr");
            e.addClass(t), n.addClass(t);
          }),
          (this.removeCellClass = function (e, t) {
            var n = e.closest("tr");
            e.removeClass(t), n.children("." + t).length || n.removeClass(t);
          }),
          (this.validate = function (e) {
            e.closest("tr");
            var t = e.data("orig-data"),
              n = e.text().trim();
            if (
              (t === undefined && (t = ""),
              n !== t
                ? k.addCellClass(e, "modified")
                : k.removeCellClass(e, "modified"),
              s.validate)
            ) {
              var i = s.validate({ field: e });
              !1 === i.status
                ? (k.addCellClass(e, "error"),
                  e.attr("original-title", i.message),
                  e.tipsy())
                : (k.removeCellClass(e, "error"),
                  e.removeAttr("original-title")),
                e.trigger("validate_complete");
            }
          }),
          (this.fixedHeaderForTable = function () {
            var e = h.closest(F.tableX_wrap);
            e.find(F.fixed_header).remove();
            var t = h.clone();
            t.removeAttr("id"),
              t.find("tbody").remove(),
              e.prepend(x("<div>").addClass("fixed-header"));
            var n = e.find(F.fixed_header);
            n.prepend(t),
              h.parent().scroll(function () {
                n.scrollLeft(x(this).scrollLeft());
              }),
              x(window).on("resize", function () {
                k.resizeHeaderWidth();
              }),
              setTimeout(function () {
                k.resizeHeaderWidth();
              }, 50),
              k.sortForFixedHeader(n);
          }),
          (this.resizeHeaderWidth = function () {
            h.closest(F.tableX_wrap)
              .find(".fixed-header table")
              .width(h.width());
          }),
          (this.sortForFixedHeader = function (e) {
            var i = e.find("table thead");
            i.on("click", "th", function () {
              var e = x(this);
              if (e.hasClass("header")) {
                var t = e.parent().index(),
                  n = e.index();
                h.find("thead tr").eq(t).find("th").eq(n).click(),
                  setTimeout(function () {
                    i.html(h.find("thead").html());
                  }, 0);
              }
            });
          }),
          (this.fixColumnForTable = function () {
            for (var e, t = 1; t <= s.numFixedColumns; t++) {
              var n = "th:nth-child(" + t + ")",
                i = "td:nth-child(" + t + ")";
              (e = h.find(n).position().left - 1),
                h.find(n + "," + i).css({ left: e, position: "sticky" });
            }
          });
      };
    publicMethod = x.fn.tableX = function (n) {
      var e = this,
        i = n,
        s = Array.prototype.slice.call(arguments);
      return (
        s.splice(0, 1),
        e.each(function () {
          var e = x(this),
            t = e.data(r);
          t
            ? "string" == typeof i && o[i].apply(e, s)
            : ((t = new l(e, n)).init(), e.data(r, t));
        }),
        e
      );
    };
  })(jQuery);
var $all_standards_btn,
  $all_standards_list,
  $year_popup,
  isAllStandardsOpen,
  Request = function (t) {
    function e() {
      t.url != undefined && t.url,
        t.type != undefined && t.type,
        (o = t.callback);
    }
    function n(e) {
      s(),
        "object" == typeof e && (e.authenticity_token = authenticity_token),
        getJSON(
          {
            url: t.url,
            type: t.type,
            data: e,
            contentType: t.contentType,
            processData: t.processData,
          },
          { success: i, failure: a }
        );
    }
    function i(e) {
      o ? o.success(e) : e.status;
    }
    function s() {
      o && o.loading();
    }
    function a(e) {
      o && o.failure(e);
    }
    var o;
    return e(), { init: e, send: n };
  },
  slideShow = function SlideShow(l, e) {
    function t() {
      n(), b.are_slide_btns_req && p(), i(), s();
    }
    function n() {
      l.hasClass("rb-slide-show")
        ? (l.find(b.next_slide_btn).remove(), l.find(b.prev_slide_btn).remove())
        : l.addClass("rb-slide-show");
    }
    function i() {
      for (
        var e = b.split ? b.split : 1,
          t = l.find(".slide-content"),
          n = t.find(".item"),
          i = "",
          s = 0,
          a = 0;
        a < n.length;
        a++
      ) {
        var o = n[a];
        0 == s &&
          (i +=
            '<div class="item slide fll pad-Axs" style="width:' + y + 'px" >'),
          (i += o.innerHTML),
          ++s == e && ((i += "</div>"), (s = 0));
      }
      t.empty(), t.html(i);
      var r = (k = t.find(".slide").length) * b.item_width;
      t.css("width", r + 100), c(), u();
    }
    function c() {
      b.are_slide_btns_req
        ? ((g = l.find(b.next_slide_btn)), (m = l.find(b.prev_slide_btn)))
        : ((g = $(b.next_slide_btn)), (m = $(b.prev_slide_btn))),
        1 == k ? g.addClass("disabled") : g.removeClass("disabled"),
        m.addClass("disabled");
    }
    function s() {
      g.click(function () {
        a();
      }),
        m.click(function () {
          o();
        });
    }
    function a() {
      _ < k - 1 && (_++, r(), h(_));
    }
    function o() {
      0 < _ && (_--, r(), h(_));
    }
    function r() {
      k - 1 <= _ && d(g, !0),
        d(m, !1),
        _ <= 0 ? (d(m, !0), d(g, !1)) : d(m, !1),
        _ < k - 1 && 0 < _ && (d(g, !1), d(m, !1)),
        b.on_slide_change_callback && b.on_slide_change_callback(_ + 1);
    }
    function h(e) {
      var t = y * e * -1;
      l.find(".slide-content").animate({ left: t }, 300);
    }
    function d(e, t) {
      e.prop("disabled", t),
        t ? e.addClass("disabled") : e.removeClass("disabled");
    }
    function p() {
      var e =
          '<a href="#" class="previous-slide-btn action-section"> <span class="icon icon-left hook"></span> </a>',
        t =
          '<a href="#" class="next-slide-btn action-section"><span class="icon icon-right hook"></span></a>';
      l.prepend(e), l.prepend(t);
    }
    function u() {
      var e = l.height();
      b.are_slide_btns_req &&
        (g.css("line-height", e + "px"), m.css("line-height", e + "px"));
    }
    function f() {
      return k;
    }
    var g,
      m,
      v = {
        are_slide_btns_req: !0,
        next_slide_btn: ".next-slide-btn",
        prev_slide_btn: ".previous-slide-btn",
      },
      b = $.extend({}, v, e),
      y = b.item_width,
      _ = 0,
      k = 0;
    return t(), { getTotalSlides: f };
  },
  GLOBAL = {},
  display_all_standards_button = !1,
  display_year_dropdown = !1,
  display_select_class_sidebar = !1,
  ALL_STD_SEC_CLICK = "all-std-sec-click",
  ALL_STD_STD_CLICK = "all-std-std-click",
  PRODUCTS = {
    insights: "Insights",
    records: "Records",
    reports: "Reports",
    consolidated_marksheet: "Consolidated Marksheet",
    attendance: "Attendance",
    quizzup: "Quizzup",
    messages: "Messages",
    crystal: "Crystal",
    health: "Health",
  },
  ROLES = { parent: "Parent" };
$(document).ready(function () {
  $("#settings-link").popbox({ zindex: 355024 }),
    $("#help-link").popbox({ zindex: 355024 }),
    $("#feedback-hint-link").popbox({ zindex: 355024 }),
    $("#more-schools-link").popbox({ zindex: 355024 }),
    $("#username-link").popbox({ zindex: 355024 }),
    $("#year-link").popbox({ zindex: 355024 }),
    $("#products-link").popbox({ zindex: 355024 }),
    $("#school-name").popbox({ zindex: 355024 }),
    ($body = $("body")),
    ($year_link = $("#year-link")),
    ($year_popup = $("#year-popup")),
    $(".rb-records-link").on("click", function (e) {
      openColorbox({ href: "#rb-records-modules-panel", width: 1e3 }),
        closeAllPopbox(),
        e.preventDefault();
    }),
    $("#send-feedback-link").click(function () {
      closeAllPopbox();
      var e = FeedbackPanel.getInstance();
      e.setSource("header_link"), e.open();
    }),
    ($all_standards_btn = $("#all-standards-btn")),
    ($all_standards_list = $("#all-standards-list")),
    (isAllStandardsOpen = !1);
  var e = $("#header .school-name");
  36 < e.text().trim().length &&
    (e.addClass("ellipsis"), e.parent().addClass("js-tipsy")),
    1 == display_all_standards_button
      ? (initAllStandardsList(), initAllStandards(), $all_standards_btn.show())
      : $all_standards_btn.remove(),
    display_select_class_sidebar &&
      (initAllStandardsList(), initSelectClassSidebar()),
    initYearDropdown(),
    initPage(),
    $("#colorbox").on("click", ".close-action", function (e) {
      var t = $(this),
        n = t.data("url"),
        i = "yes" == t.data("page-reload");
      n
        ? (document.location.href = n)
        : i
        ? document.location.reload()
        : closeColorbox(),
        e.preventDefault();
    }),
    $body.on(ALL_STD_SEC_CLICK, function (e, t) {
      reloadPageOnSectionChange(target_reload_url, t.id);
    });
  var t,
    n = $("#flash-msg");
  n.length && n.delay(8e3).slideUp(),
    initTracking(),
    appSpecificEventHandler(),
    tipsy($(".js-tipsy")),
    initNotificationCarousel(),
    t &&
      localStorage &&
      $(".signout-link").on("click", function () {
        var e = "CBSESampleReport_" + current_user.id,
          t = JSON.parse(sessionStorage.getItem(e));
        (t.visited = !1), sessionStorage.setItem(e, JSON.stringify(t));
      });
  try {
    RBUserSetting.getInstance({ user_id: current_user_profile.id });
  } catch (i) {}
  $(window).on("resize", function () {
    closeAllPopbox();
  }),
    $(window).resize();
});
var AllStandardsList = (function () {
    function t() {
      function e() {
        initAllStandardsEvents();
      }
      function t() {
        removeSelectedfromAllStandardsList(),
          $all_standards_list.find(".sub-menu").removeClass("slide-in"),
          $all_standards_list.find(".sub-menu .content").empty(),
          $all_standards_list.removeClass("slide-in");
      }
      function n() {
        if (s)
          t(), $("body").removeClass("scroll-hide"), $("#overlay").remove();
        else {
          var e = '<div id="overlay" class="overlay"></div>';
          $("body").addClass("scroll-hide").append(e),
            i(),
            $all_standards_list.addClass("slide-in");
        }
        s = !s;
      }
      function i() {
        $("#overlay").on("click", function (e) {
          e.preventDefault(), n();
        }),
          $(window).resize(function () {
            $("#overlay").click();
          });
      }
      var s = !1;
      return { init: e, toggle: n };
    }
    var n;
    return {
      getInstance: function (e) {
        return n || (n = new t(e)).init(), n;
      },
    };
  })(),
  SelectClassSidebar = (function () {
    function t() {
      function e() {
        (o = $(
          '<div id="select-class-sidebar"><div class="icon icon-logo x2" /><div class="heading">Select Class</div> </div>'
        )),
          $("body").append(o),
          o.on("click", ".section-js", function (e) {
            var t = $(this),
              n = { id: t.data("sectionid") };
            $("body").trigger(ALL_STD_SEC_CLICK, n),
              gaFootprint.trackAction({
                event_category: "All Standards",
                event_action: "Select Class",
                event_label: t.text(),
              }),
              e.preventDefault();
          }),
          o.on("click", ".all-standards-link", function (e) {
            $(this);
            AllStandardsList.getInstance().toggle(),
              gaFootprint.trackAction({
                event_category: "All Standards",
                event_action: "Open",
                event_label: "Sidebar",
              }),
              e.preventDefault();
          });
      }
      function t(e) {
        (a = e), n();
      }
      function n() {
        r = $('<div class="list" />').appendTo(o);
        var e = i(),
          t = s();
        if (e.length <= t)
          _.each(a, function (a) {
            var o = $(
                "<div class='standard-block'><h6 class='standard-name'>" +
                  a.name +
                  "</h6></div> "
              ),
              e = a.sections;
            _.each(e, function (e) {
              var t = e.name,
                n = a.name + " " + t,
                i = "btn gamma-btn section section-js ";
              section_id && section_id == e.id && (i += "selected");
              var s = $(
                '<a class="' +
                  i +
                  '" title="' +
                  n +
                  '" data-sectionid="' +
                  e.id +
                  '" href="#" data-gravity="w">' +
                  t +
                  "</a>"
              );
              o.append(s);
            }),
              r.append(o);
          });
        else {
          var n = section_name || "All Standards";
          r.append(
            '<a href="#" class="btn gamma-btn all-standards-link">' + n + "</a>"
          );
        }
        r.find(".section-js").tipsy({ gravity: "w" });
      }
      function i() {
        var n = [];
        return (
          a.length &&
            _.each(a, function (t) {
              var e = _.clone(t.sections);
              _.each(e, function (e) {
                (e.std_id = t.id), (e.std_name = t.name), (n = n.concat(e));
              });
            }),
          n
        );
      }
      function s() {
        var e = r.position().top,
          t = document.documentElement.clientHeight,
          n = 46,
          i = 40 * a.length;
        return Math.floor((t - e - i) / n);
      }
      var a, o, r;
      return { init: e, setData: t };
    }
    var n;
    return {
      getInstance: function (e) {
        return n || (n = new t(e)).init(), n;
      },
    };
  })();
String.prototype.format = function (e) {
  var t = this;
  if (1 == arguments.length && "object" == typeof e) {
    var n = e;
    for (var i in n) {
      var s = new RegExp("\\$" + i + "\\$", "gi");
      t = t.replace(s, n[i]);
    }
  } else
    for (var a = 0; a < arguments.length; a++) {
      s = new RegExp("\\$" + a + "\\$", "gi");
      t = t.replace(s, arguments[a]);
    }
  return t;
};
var EVENT_ACTION = {
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
    function t() {
      function e() {
        c(b), h(b), d("NA");
      }
      function t(e) {
        (m = _.merge(m, e)), n();
      }
      function n() {
        g = performance.now();
      }
      function i() {
        return ((performance.now() - g) / 1e3).toFixed(2);
      }
      function s(e) {
        l(), o(e);
      }
      function a(e) {
        l(!0), o(e);
      }
      function o(e) {
        (e.event_category = u(e.event_category)),
          e.event_label || (e.event_label = "NA"),
          ga("send", "event", e.event_category, e.event_action, e.event_label);
      }
      function r() {
        l(), ga("send", "pageview");
      }
      function l(e) {
        if (
          (m.school_name && ga("set", "dimension1", m.school_name),
          m.user_email && ga("set", "dimension2", m.user_email),
          m.user_role && ga("set", "dimension3", m.user_role),
          m.module && ga("set", "dimension5", m.module),
          m.board && ga("set", "dimension6", m.board),
          m.organization_name && ga("set", "dimension7", m.organization_name),
          m.app_name && ga("set", "dimension8", m.app_name),
          m.product && ga("set", "dimension9", m.product),
          m.school_id && ga("set", "dimension11", m.school_id),
          e)
        ) {
          var t = i();
          ga("set", "metric1", t);
        }
      }
      function c(e) {
        m.app_name = e;
      }
      function h(e) {
        m.product = e;
      }
      function d(e) {
        m.module = e;
      }
      function p(e) {
        v = _.extend({}, v, e);
      }
      function u(e) {
        return v[e] ? v[e] : e;
      }
      function f() {
        console.log(m);
      }
      var g,
        m = {},
        v = {},
        b = "Report Bee";
      return {
        init: e,
        setStartTime: n,
        setApplication: c,
        setProduct: h,
        setModule: d,
        setEventCategories: p,
        trackAction: s,
        trackCTA: a,
        setData: t,
        trackPageView: r,
        getData: f,
      };
    }
    var n;
    return {
      getInstance: function (e) {
        return n || (n = new t(e)).init(), n;
      },
    };
  })(),
  gaFootprint = FootPrint.getInstance();
ga_hash && gaFootprint.setData(ga_hash);
var $timer,
  $body,
  status_timeout,
  timer_count = 30,
  REPORT_BEE = "Report Bee",
  status_default_options = { autoHide: !1, hideInterval: 8e3 };
gaFootprint.setApplication(REPORT_BEE),
  (Date.prototype.yyyymmdd = function () {
    var e = this.getFullYear().toString(),
      t = (this.getMonth() + 1).toString(),
      n = this.getDate().toString();
    return e + "-" + (t[1] ? t : "0" + t[0]) + "-" + (n[1] ? n : "0" + n[0]);
  });
var manageCboxContent = function () {
    function e() {
      return $(window).height();
    }
    var t = $("#cboxLoadedContent"),
      n = t.find(".panel-header"),
      i = t.find(".panel-content"),
      s = t.find(".panel-footer"),
      a = e() - 80,
      o =
        0 < n.length
          ? 0 < s.length
            ? a - (n.height() + s.height())
            : a - n.height()
          : a;
    i &&
      (i.height() > e() && i.css({ height: o, overflowY: "auto" }),
      $.colorbox.resize());
  },
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  JSON_STR = "json",
  StatusMessage = {
    $element: null,
    default_options: { autoHide: !1, hideInterval: 5e3 },
    status_timeout: null,
    status_block_top: null,
    init: function () {
      (this.$element = $(".status-flash-msg")),
        this.$element.length && this.addEvents();
    },
    show: function (e, t) {
      t = $.extend({}, this.default_options, t);
      this.$element.text(e).slideDown();
      var n = this.$element.attr("class").split(" ");
      if (1 < n.length) {
        var i = n.pop();
        this.$element.removeClass(i);
      }
      this.$element.addClass(t.type),
        t.autoHide &&
          (clearTimeout(this.status_timeout),
          (this.status_timeout = setTimeout(function () {
            StatusMessage.$element.slideUp();
          }, t.hideInterval)));
    },
    reposition: function () {
      this.status_block_top ||
        (this.status_block_top = this.$element.offset().top);
      var e = $(window).scrollTop(),
        t = $(window).height();
      if ($("#wrapper").height() - t <= 0) return !1;
      e >= this.status_block_top
        ? this.$element.addClass("fixed")
        : this.$element.removeClass("fixed");
    },
    addEvents: function () {
      $(window).scroll(function () {
        StatusMessage.reposition();
      }),
        $(window).resize(function () {
          StatusMessage.reposition();
        });
    },
  };
!(function (o) {
  var r = {
    init: function (n) {
      return this.each(function () {
        r.destroy.call(this),
          (this.opt = o.extend(!0, {}, o.fn.raty.defaults, n));
        var e = o(this),
          t = ["number", "readOnly", "score", "scoreName"];
        r._callback.call(this, t),
          this.opt.precision && r._adjustPrecision.call(this),
          (this.opt.number = r._between(
            this.opt.number,
            0,
            this.opt.numberMax
          )),
          (this.stars = r._createStars.call(this)),
          (this.score = r._createScore.call(this)),
          r._apply.call(this, this.opt.score),
          this.opt.cancel && (this.cancel = r._createCancel.call(this)),
          this.opt.width && e.css("width", this.opt.width),
          this.opt.readOnly
            ? r._lock.call(this)
            : (e.css("cursor", "pointer"), r._binds.call(this)),
          r._target.call(this, this.opt.score),
          e.data({ settings: this.opt, raty: !0 });
      });
    },
    _adjustPrecision: function () {
      (this.opt.targetType = "score"), (this.opt.half = !0);
    },
    _apply: function (e) {
      void 0 !== e &&
        0 <= e &&
        ((e = r._between(e, 0, this.opt.number)), this.score.val(e)),
        r._fill.call(this, e),
        e && r._roundStars.call(this, e);
    },
    _between: function (e, t, n) {
      return Math.min(Math.max(parseFloat(e), t), n);
    },
    _binds: function () {
      this.cancel && r._bindCancel.call(this),
        r._bindClick.call(this),
        r._bindOut.call(this),
        r._bindOver.call(this);
    },
    _bindCancel: function () {
      r._bindClickCancel.call(this),
        r._bindOutCancel.call(this),
        r._bindOverCancel.call(this);
    },
    _bindClick: function () {
      var t = this,
        n = o(t);
      t.stars.on("click.raty", function (e) {
        t.score.val(
          t.opt.half || t.opt.precision
            ? n.data("score")
            : o(this).data("score")
        ),
          t.opt.click && t.opt.click.call(t, parseFloat(t.score.val()), e);
      });
    },
    _bindClickCancel: function () {
      var t = this;
      t.cancel.on("click.raty", function (e) {
        t.score.removeAttr("value"),
          t.opt.click && t.opt.click.call(t, null, e);
      });
    },
    _bindOut: function () {
      var n = this;
      o(this).on("mouseleave.raty", function (e) {
        var t = parseFloat(n.score.val()) || undefined;
        r._apply.call(n, t),
          r._target.call(n, t, e),
          n.opt.mouseout && n.opt.mouseout.call(n, t, e);
      });
    },
    _bindOutCancel: function () {
      var t = this;
      t.cancel.on("mouseleave.raty", function (e) {
        o(this).attr("class", t.opt.cancelOff),
          t.opt.mouseout && t.opt.mouseout.call(t, t.score.val() || null, e);
      });
    },
    _bindOverCancel: function () {
      var t = this;
      t.cancel.on("mouseover.raty", function (e) {
        o(this).attr("class", t.opt.cancelOn),
          t.stars.attr("class", t.opt.starOff),
          r._target.call(t, null, e),
          t.opt.mouseover && t.opt.mouseover.call(t, null);
      });
    },
    _bindOver: function () {
      var s = this,
        a = o(s),
        e = s.opt.half ? "mousemove.raty" : "mouseover.raty";
      s.stars.on(e, function (e) {
        var t = parseInt(o(this).data("score"), 10);
        if (s.opt.half) {
          var n = parseFloat(
              (e.pageX - o(this).offset().left) /
                (s.opt.size ? s.opt.size : parseInt(a.css("font-size")))
            ),
            i = 0.5 < n ? 1 : 0.5;
          (t = t - 1 + i),
            r._fill.call(s, t),
            s.opt.precision && (t = t - i + n),
            r._roundStars.call(s, t),
            a.data("score", t);
        } else r._fill.call(s, t);
        r._target.call(s, t, e),
          s.opt.mouseover && s.opt.mouseover.call(s, t, e);
      });
    },
    _callback: function (e) {
      for (var t in e)
        "function" == typeof this.opt[e[t]] &&
          (this.opt[e[t]] = this.opt[e[t]].call(this));
    },
    _createCancel: function () {
      var e = o(this),
        t = this.opt.cancelOff,
        n = o("<i />", { class: t, title: this.opt.cancelHint });
      return (
        "left" == this.opt.cancelPlace
          ? e.prepend("&#160;").prepend(n)
          : e.append("&#160;").append(n),
        n
      );
    },
    _createScore: function () {
      return o("<input />", {
        type: "hidden",
        name: this.opt.scoreName,
      }).appendTo(this);
    },
    _createStars: function () {
      for (var e = o(this), t = 1; t <= this.opt.number; t++) {
        var n = r._getHint.call(this, t),
          i = this.opt.score && this.opt.score >= t ? "starOn" : "starOff";
        (i = this.opt[i]),
          o("<i />", { class: i, title: n, "data-score": t }).appendTo(this),
          this.opt.space && e.append(t < this.opt.number ? "&#160;" : "");
      }
      return e.children("i");
    },
    _error: function (e) {
      o(this).html(e), o.error(e);
    },
    _fill: function (e) {
      for (var t = this, n = 0, i = 1; i <= t.stars.length; i++) {
        var s = t.stars.eq(i - 1),
          a = t.opt.single ? i == e : i <= e;
        if (t.opt.iconRange && t.opt.iconRange.length > n) {
          var o = t.opt.iconRange[n],
            r = o.on || t.opt.starOn,
            l = o.off || t.opt.starOff,
            c = a ? r : l;
          i <= o.range && s.attr("class", c), i == o.range && n++;
        } else {
          c = a ? "starOn" : "starOff";
          s.attr("class", this.opt[c]);
        }
      }
    },
    _getHint: function (e) {
      var t = this.opt.hints[e - 1];
      return "" === t ? "" : t || e;
    },
    _lock: function () {
      var e = parseInt(this.score.val(), 10),
        t = e ? r._getHint.call(this, e) : this.opt.noRatedMsg;
      o(this).data("readonly", !0).css("cursor", "").attr("title", t),
        this.score.attr("readonly", "readonly"),
        this.stars.attr("title", t),
        this.cancel && this.cancel.hide();
    },
    _roundStars: function (e) {
      var t = (e - Math.floor(e)).toFixed(2);
      if (t > this.opt.round.down) {
        var n = "starOn";
        this.opt.halfShow && t < this.opt.round.up
          ? (n = "starHalf")
          : t < this.opt.round.full && (n = "starOff"),
          this.stars.eq(Math.ceil(e) - 1).attr("class", this.opt[n]);
      }
    },
    _target: function (e, t) {
      if (this.opt.target) {
        var n = o(this.opt.target);
        0 === n.length &&
          r._error.call(this, "Target selector invalid or missing!"),
          this.opt.targetFormat.indexOf("{score}") < 0 &&
            r._error.call(this, 'Template "{score}" missing!');
        var i = t && "mouseover" == t.type;
        e === undefined
          ? (e = this.opt.targetText)
          : null === e
          ? (e = i ? this.opt.cancelHint : this.opt.targetText)
          : ("hint" == this.opt.targetType
              ? (e = r._getHint.call(this, Math.ceil(e)))
              : this.opt.precision && (e = parseFloat(e).toFixed(1)),
            i || this.opt.targetKeep || (e = this.opt.targetText)),
          e && (e = this.opt.targetFormat.toString().replace("{score}", e)),
          n.is(":input") ? n.val(e) : n.html(e);
      }
    },
    _unlock: function () {
      o(this).data("readonly", !1).css("cursor", "pointer").removeAttr("title"),
        this.score.removeAttr("readonly", "readonly");
      for (var e = 0; e < this.opt.number; e++)
        this.stars.eq(e).attr("title", r._getHint.call(this, e + 1));
      this.cancel && this.cancel.css("display", "");
    },
    cancel: function (e) {
      return this.each(function () {
        !0 !== o(this).data("readonly") &&
          (r[e ? "click" : "score"].call(this, null),
          this.score.removeAttr("value"));
      });
    },
    click: function (e) {
      return o(this).each(function () {
        !0 !== o(this).data("readonly") &&
          (r._apply.call(this, e),
          this.opt.click ||
            r._error.call(
              this,
              'You must add the "click: function(score, evt) { }" callback.'
            ),
          this.opt.click.call(this, e, o.Event("click")),
          r._target.call(this, e));
      });
    },
    destroy: function () {
      return o(this).each(function () {
        var e = o(this),
          t = e.data("raw");
        t
          ? e
              .off(".raty")
              .empty()
              .css({ cursor: t.style.cursor, width: t.style.width })
              .removeData("readonly")
          : e.data("raw", e.clone()[0]);
      });
    },
    getScore: function () {
      var e,
        t = [];
      return (
        o(this).each(function () {
          (e = this.score.val()), t.push(e ? parseFloat(e) : undefined);
        }),
        1 < t.length ? t : t[0]
      );
    },
    readOnly: function (t) {
      return this.each(function () {
        var e = o(this);
        e.data("readonly") !== t &&
          (t
            ? (e.off(".raty").children("i").off(".raty"), r._lock.call(this))
            : (r._binds.call(this), r._unlock.call(this)),
          e.data("readonly", t));
      });
    },
    reload: function () {
      return r.set.call(this, {});
    },
    score: function () {
      return arguments.length
        ? r.setScore.apply(this, arguments)
        : r.getScore.call(this);
    },
    set: function (i) {
      return this.each(function () {
        var e = o(this),
          t = e.data("settings"),
          n = o.extend({}, t, i);
        e.raty(n);
      });
    },
    setScore: function (e) {
      return o(this).each(function () {
        !0 !== o(this).data("readonly") &&
          (r._apply.call(this, e), r._target.call(this, e));
      });
    },
  };
  (o.fn.raty = function (e) {
    return r[e]
      ? r[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof e && e
      ? void o.error("Method " + e + " does not exist!")
      : r.init.apply(this, arguments);
  }),
    (o.fn.raty.defaults = {
      cancel: !1,
      cancelHint: "Cancel this rating!",
      cancelOff: "fa fa-minus-square",
      cancelOn: "fa fa-check-square",
      cancelPlace: "left",
      click: undefined,
      half: !1,
      halfShow: !0,
      hints: ["Bad", "Poor", "Not Happy", "Satisfied", "Good"],
      iconRange: undefined,
      mouseout: undefined,
      mouseover: undefined,
      noRatedMsg: "Not rated yet!",
      number: 5,
      numberMax: 20,
      precision: !1,
      readOnly: !1,
      round: { down: 0.25, full: 0.6, up: 0.76 },
      score: undefined,
      scoreName: "score",
      single: !1,
      size: null,
      space: !0,
      starHalf: "rb-rating",
      starOff: "icon icon-star-stroke",
      starOn: "icon icon-star-fill",
      target: undefined,
      targetFormat: "{score}",
      targetKeep: !1,
      targetText: "",
      targetType: "hint",
      width: !1,
    });
})(jQuery);
var Handlebars = {};
!(function (c, r) {
  (c.VERSION = "1.0.0"),
    (c.COMPILER_REVISION = 4),
    (c.REVISION_CHANGES = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: ">= 1.0.0",
    }),
    (c.helpers = {}),
    (c.partials = {});
  var h = Object.prototype.toString,
    d = "[object Function]",
    i = "[object Object]";
  (c.registerHelper = function (e, t, n) {
    if (h.call(e) === i) {
      if (n || t)
        throw new c.Exception("Arg not supported with multiple helpers");
      c.Utils.extend(this.helpers, e);
    } else n && (t.not = n), (this.helpers[e] = t);
  }),
    (c.registerPartial = function (e, t) {
      h.call(e) === i
        ? c.Utils.extend(this.partials, e)
        : (this.partials[e] = t);
    }),
    c.registerHelper("helperMissing", function (e) {
      if (2 === arguments.length) return r;
      throw new Error("Missing helper: '" + e + "'");
    }),
    c.registerHelper("blockHelperMissing", function (e, t) {
      var n = t.inverse || function () {},
        i = t.fn,
        s = h.call(e);
      return (
        s === d && (e = e.call(this)),
        !0 === e
          ? i(this)
          : !1 === e || null == e
          ? n(this)
          : "[object Array]" === s
          ? 0 < e.length
            ? c.helpers.each(e, t)
            : n(this)
          : i(e)
      );
    }),
    (c.K = function () {}),
    (c.createFrame =
      Object.create ||
      function (e) {
        c.K.prototype = e;
        var t = new c.K();
        return (c.K.prototype = null), t;
      }),
    (c.logger = {
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3,
      level: 3,
      methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" },
      log: function (e, t) {
        if (c.logger.level <= e) {
          var n = c.logger.methodMap[e];
          "undefined" != typeof console &&
            console[n] &&
            console[n].call(console, t);
        }
      },
    }),
    (c.log = function (e, t) {
      c.logger.log(e, t);
    }),
    c.registerHelper("each", function (e, t) {
      var n,
        i = t.fn,
        s = t.inverse,
        a = 0,
        o = "";
      if (
        (h.call(e) === d && (e = e.call(this)),
        t.data && (n = c.createFrame(t.data)),
        e && "object" == typeof e)
      )
        if (e instanceof Array)
          for (var r = e.length; a < r; a++)
            n && (n.index = a), (o += i(e[a], { data: n }));
        else
          for (var l in e)
            e.hasOwnProperty(l) &&
              (n && (n.key = l), (o += i(e[l], { data: n })), a++);
      return 0 === a && (o = s(this)), o;
    }),
    c.registerHelper("if", function (e, t) {
      return (
        h.call(e) === d && (e = e.call(this)),
        !e || c.Utils.isEmpty(e) ? t.inverse(this) : t.fn(this)
      );
    }),
    c.registerHelper("unless", function (e, t) {
      return c.helpers["if"].call(this, e, { fn: t.inverse, inverse: t.fn });
    }),
    c.registerHelper("with", function (e, t) {
      if ((h.call(e) === d && (e = e.call(this)), !c.Utils.isEmpty(e)))
        return t.fn(e);
    }),
    c.registerHelper("log", function (e, t) {
      var n = t.data && null != t.data.level ? parseInt(t.data.level, 10) : 1;
      c.log(n, e);
    });
  var e = (function () {
    function e() {
      this.yy = {};
    }
    var t = {
        trace: function i() {},
        yy: {},
        symbols_: {
          error: 2,
          root: 3,
          program: 4,
          EOF: 5,
          simpleInverse: 6,
          statements: 7,
          statement: 8,
          openInverse: 9,
          closeBlock: 10,
          openBlock: 11,
          mustache: 12,
          partial: 13,
          CONTENT: 14,
          COMMENT: 15,
          OPEN_BLOCK: 16,
          inMustache: 17,
          CLOSE: 18,
          OPEN_INVERSE: 19,
          OPEN_ENDBLOCK: 20,
          path: 21,
          OPEN: 22,
          OPEN_UNESCAPED: 23,
          CLOSE_UNESCAPED: 24,
          OPEN_PARTIAL: 25,
          partialName: 26,
          params: 27,
          hash: 28,
          dataName: 29,
          param: 30,
          STRING: 31,
          INTEGER: 32,
          BOOLEAN: 33,
          hashSegments: 34,
          hashSegment: 35,
          ID: 36,
          EQUALS: 37,
          DATA: 38,
          pathSegments: 39,
          SEP: 40,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          5: "EOF",
          14: "CONTENT",
          15: "COMMENT",
          16: "OPEN_BLOCK",
          18: "CLOSE",
          19: "OPEN_INVERSE",
          20: "OPEN_ENDBLOCK",
          22: "OPEN",
          23: "OPEN_UNESCAPED",
          24: "CLOSE_UNESCAPED",
          25: "OPEN_PARTIAL",
          31: "STRING",
          32: "INTEGER",
          33: "BOOLEAN",
          36: "ID",
          37: "EQUALS",
          38: "DATA",
          40: "SEP",
        },
        productions_: [
          0,
          [3, 2],
          [4, 2],
          [4, 3],
          [4, 2],
          [4, 1],
          [4, 1],
          [4, 0],
          [7, 1],
          [7, 2],
          [8, 3],
          [8, 3],
          [8, 1],
          [8, 1],
          [8, 1],
          [8, 1],
          [11, 3],
          [9, 3],
          [10, 3],
          [12, 3],
          [12, 3],
          [13, 3],
          [13, 4],
          [6, 2],
          [17, 3],
          [17, 2],
          [17, 2],
          [17, 1],
          [17, 1],
          [27, 2],
          [27, 1],
          [30, 1],
          [30, 1],
          [30, 1],
          [30, 1],
          [30, 1],
          [28, 1],
          [34, 2],
          [34, 1],
          [35, 3],
          [35, 3],
          [35, 3],
          [35, 3],
          [35, 3],
          [26, 1],
          [26, 1],
          [26, 1],
          [29, 2],
          [21, 1],
          [39, 3],
          [39, 1],
        ],
        performAction: function r(e, t, n, i, s, a) {
          var o = a.length - 1;
          switch (s) {
            case 1:
              return a[o - 1];
            case 2:
              this.$ = new i.ProgramNode([], a[o]);
              break;
            case 3:
              this.$ = new i.ProgramNode(a[o - 2], a[o]);
              break;
            case 4:
              this.$ = new i.ProgramNode(a[o - 1], []);
              break;
            case 5:
              this.$ = new i.ProgramNode(a[o]);
              break;
            case 6:
              this.$ = new i.ProgramNode([], []);
              break;
            case 7:
              this.$ = new i.ProgramNode([]);
              break;
            case 8:
              this.$ = [a[o]];
              break;
            case 9:
              a[o - 1].push(a[o]), (this.$ = a[o - 1]);
              break;
            case 10:
              this.$ = new i.BlockNode(
                a[o - 2],
                a[o - 1].inverse,
                a[o - 1],
                a[o]
              );
              break;
            case 11:
              this.$ = new i.BlockNode(
                a[o - 2],
                a[o - 1],
                a[o - 1].inverse,
                a[o]
              );
              break;
            case 12:
            case 13:
              this.$ = a[o];
              break;
            case 14:
              this.$ = new i.ContentNode(a[o]);
              break;
            case 15:
              this.$ = new i.CommentNode(a[o]);
              break;
            case 16:
            case 17:
              this.$ = new i.MustacheNode(a[o - 1][0], a[o - 1][1]);
              break;
            case 18:
              this.$ = a[o - 1];
              break;
            case 19:
              this.$ = new i.MustacheNode(
                a[o - 1][0],
                a[o - 1][1],
                "&" === a[o - 2][2]
              );
              break;
            case 20:
              this.$ = new i.MustacheNode(a[o - 1][0], a[o - 1][1], !0);
              break;
            case 21:
              this.$ = new i.PartialNode(a[o - 1]);
              break;
            case 22:
              this.$ = new i.PartialNode(a[o - 2], a[o - 1]);
              break;
            case 23:
              break;
            case 24:
              this.$ = [[a[o - 2]].concat(a[o - 1]), a[o]];
              break;
            case 25:
              this.$ = [[a[o - 1]].concat(a[o]), null];
              break;
            case 26:
              this.$ = [[a[o - 1]], a[o]];
              break;
            case 27:
            case 28:
              this.$ = [[a[o]], null];
              break;
            case 29:
              a[o - 1].push(a[o]), (this.$ = a[o - 1]);
              break;
            case 30:
              this.$ = [a[o]];
              break;
            case 31:
              this.$ = a[o];
              break;
            case 32:
              this.$ = new i.StringNode(a[o]);
              break;
            case 33:
              this.$ = new i.IntegerNode(a[o]);
              break;
            case 34:
              this.$ = new i.BooleanNode(a[o]);
              break;
            case 35:
              this.$ = a[o];
              break;
            case 36:
              this.$ = new i.HashNode(a[o]);
              break;
            case 37:
              a[o - 1].push(a[o]), (this.$ = a[o - 1]);
              break;
            case 38:
              this.$ = [a[o]];
              break;
            case 39:
              this.$ = [a[o - 2], a[o]];
              break;
            case 40:
              this.$ = [a[o - 2], new i.StringNode(a[o])];
              break;
            case 41:
              this.$ = [a[o - 2], new i.IntegerNode(a[o])];
              break;
            case 42:
              this.$ = [a[o - 2], new i.BooleanNode(a[o])];
              break;
            case 43:
              this.$ = [a[o - 2], a[o]];
              break;
            case 44:
              this.$ = new i.PartialNameNode(a[o]);
              break;
            case 45:
              this.$ = new i.PartialNameNode(new i.StringNode(a[o]));
              break;
            case 46:
              this.$ = new i.PartialNameNode(new i.IntegerNode(a[o]));
              break;
            case 47:
              this.$ = new i.DataNode(a[o]);
              break;
            case 48:
              this.$ = new i.IdNode(a[o]);
              break;
            case 49:
              a[o - 2].push({ part: a[o], separator: a[o - 1] }),
                (this.$ = a[o - 2]);
              break;
            case 50:
              this.$ = [{ part: a[o] }];
          }
        },
        table: [
          {
            3: 1,
            4: 2,
            5: [2, 7],
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 5],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          { 1: [3] },
          { 5: [1, 17] },
          {
            5: [2, 6],
            7: 18,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 19],
            20: [2, 6],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            5: [2, 5],
            6: 20,
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 5],
            20: [2, 5],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            17: 23,
            18: [1, 22],
            21: 24,
            29: 25,
            36: [1, 28],
            38: [1, 27],
            39: 26,
          },
          {
            5: [2, 8],
            14: [2, 8],
            15: [2, 8],
            16: [2, 8],
            19: [2, 8],
            20: [2, 8],
            22: [2, 8],
            23: [2, 8],
            25: [2, 8],
          },
          {
            4: 29,
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 5],
            20: [2, 7],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            4: 30,
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 5],
            20: [2, 7],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            5: [2, 12],
            14: [2, 12],
            15: [2, 12],
            16: [2, 12],
            19: [2, 12],
            20: [2, 12],
            22: [2, 12],
            23: [2, 12],
            25: [2, 12],
          },
          {
            5: [2, 13],
            14: [2, 13],
            15: [2, 13],
            16: [2, 13],
            19: [2, 13],
            20: [2, 13],
            22: [2, 13],
            23: [2, 13],
            25: [2, 13],
          },
          {
            5: [2, 14],
            14: [2, 14],
            15: [2, 14],
            16: [2, 14],
            19: [2, 14],
            20: [2, 14],
            22: [2, 14],
            23: [2, 14],
            25: [2, 14],
          },
          {
            5: [2, 15],
            14: [2, 15],
            15: [2, 15],
            16: [2, 15],
            19: [2, 15],
            20: [2, 15],
            22: [2, 15],
            23: [2, 15],
            25: [2, 15],
          },
          { 17: 31, 21: 24, 29: 25, 36: [1, 28], 38: [1, 27], 39: 26 },
          { 17: 32, 21: 24, 29: 25, 36: [1, 28], 38: [1, 27], 39: 26 },
          { 17: 33, 21: 24, 29: 25, 36: [1, 28], 38: [1, 27], 39: 26 },
          { 21: 35, 26: 34, 31: [1, 36], 32: [1, 37], 36: [1, 28], 39: 26 },
          { 1: [2, 1] },
          {
            5: [2, 2],
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 19],
            20: [2, 2],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          { 17: 23, 21: 24, 29: 25, 36: [1, 28], 38: [1, 27], 39: 26 },
          {
            5: [2, 4],
            7: 38,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 19],
            20: [2, 4],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            5: [2, 9],
            14: [2, 9],
            15: [2, 9],
            16: [2, 9],
            19: [2, 9],
            20: [2, 9],
            22: [2, 9],
            23: [2, 9],
            25: [2, 9],
          },
          {
            5: [2, 23],
            14: [2, 23],
            15: [2, 23],
            16: [2, 23],
            19: [2, 23],
            20: [2, 23],
            22: [2, 23],
            23: [2, 23],
            25: [2, 23],
          },
          { 18: [1, 39] },
          {
            18: [2, 27],
            21: 44,
            24: [2, 27],
            27: 40,
            28: 41,
            29: 48,
            30: 42,
            31: [1, 45],
            32: [1, 46],
            33: [1, 47],
            34: 43,
            35: 49,
            36: [1, 50],
            38: [1, 27],
            39: 26,
          },
          { 18: [2, 28], 24: [2, 28] },
          {
            18: [2, 48],
            24: [2, 48],
            31: [2, 48],
            32: [2, 48],
            33: [2, 48],
            36: [2, 48],
            38: [2, 48],
            40: [1, 51],
          },
          { 21: 52, 36: [1, 28], 39: 26 },
          {
            18: [2, 50],
            24: [2, 50],
            31: [2, 50],
            32: [2, 50],
            33: [2, 50],
            36: [2, 50],
            38: [2, 50],
            40: [2, 50],
          },
          { 10: 53, 20: [1, 54] },
          { 10: 55, 20: [1, 54] },
          { 18: [1, 56] },
          { 18: [1, 57] },
          { 24: [1, 58] },
          { 18: [1, 59], 21: 60, 36: [1, 28], 39: 26 },
          { 18: [2, 44], 36: [2, 44] },
          { 18: [2, 45], 36: [2, 45] },
          { 18: [2, 46], 36: [2, 46] },
          {
            5: [2, 3],
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 19],
            20: [2, 3],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            14: [2, 17],
            15: [2, 17],
            16: [2, 17],
            19: [2, 17],
            20: [2, 17],
            22: [2, 17],
            23: [2, 17],
            25: [2, 17],
          },
          {
            18: [2, 25],
            21: 44,
            24: [2, 25],
            28: 61,
            29: 48,
            30: 62,
            31: [1, 45],
            32: [1, 46],
            33: [1, 47],
            34: 43,
            35: 49,
            36: [1, 50],
            38: [1, 27],
            39: 26,
          },
          { 18: [2, 26], 24: [2, 26] },
          {
            18: [2, 30],
            24: [2, 30],
            31: [2, 30],
            32: [2, 30],
            33: [2, 30],
            36: [2, 30],
            38: [2, 30],
          },
          { 18: [2, 36], 24: [2, 36], 35: 63, 36: [1, 64] },
          {
            18: [2, 31],
            24: [2, 31],
            31: [2, 31],
            32: [2, 31],
            33: [2, 31],
            36: [2, 31],
            38: [2, 31],
          },
          {
            18: [2, 32],
            24: [2, 32],
            31: [2, 32],
            32: [2, 32],
            33: [2, 32],
            36: [2, 32],
            38: [2, 32],
          },
          {
            18: [2, 33],
            24: [2, 33],
            31: [2, 33],
            32: [2, 33],
            33: [2, 33],
            36: [2, 33],
            38: [2, 33],
          },
          {
            18: [2, 34],
            24: [2, 34],
            31: [2, 34],
            32: [2, 34],
            33: [2, 34],
            36: [2, 34],
            38: [2, 34],
          },
          {
            18: [2, 35],
            24: [2, 35],
            31: [2, 35],
            32: [2, 35],
            33: [2, 35],
            36: [2, 35],
            38: [2, 35],
          },
          { 18: [2, 38], 24: [2, 38], 36: [2, 38] },
          {
            18: [2, 50],
            24: [2, 50],
            31: [2, 50],
            32: [2, 50],
            33: [2, 50],
            36: [2, 50],
            37: [1, 65],
            38: [2, 50],
            40: [2, 50],
          },
          { 36: [1, 66] },
          {
            18: [2, 47],
            24: [2, 47],
            31: [2, 47],
            32: [2, 47],
            33: [2, 47],
            36: [2, 47],
            38: [2, 47],
          },
          {
            5: [2, 10],
            14: [2, 10],
            15: [2, 10],
            16: [2, 10],
            19: [2, 10],
            20: [2, 10],
            22: [2, 10],
            23: [2, 10],
            25: [2, 10],
          },
          { 21: 67, 36: [1, 28], 39: 26 },
          {
            5: [2, 11],
            14: [2, 11],
            15: [2, 11],
            16: [2, 11],
            19: [2, 11],
            20: [2, 11],
            22: [2, 11],
            23: [2, 11],
            25: [2, 11],
          },
          {
            14: [2, 16],
            15: [2, 16],
            16: [2, 16],
            19: [2, 16],
            20: [2, 16],
            22: [2, 16],
            23: [2, 16],
            25: [2, 16],
          },
          {
            5: [2, 19],
            14: [2, 19],
            15: [2, 19],
            16: [2, 19],
            19: [2, 19],
            20: [2, 19],
            22: [2, 19],
            23: [2, 19],
            25: [2, 19],
          },
          {
            5: [2, 20],
            14: [2, 20],
            15: [2, 20],
            16: [2, 20],
            19: [2, 20],
            20: [2, 20],
            22: [2, 20],
            23: [2, 20],
            25: [2, 20],
          },
          {
            5: [2, 21],
            14: [2, 21],
            15: [2, 21],
            16: [2, 21],
            19: [2, 21],
            20: [2, 21],
            22: [2, 21],
            23: [2, 21],
            25: [2, 21],
          },
          { 18: [1, 68] },
          { 18: [2, 24], 24: [2, 24] },
          {
            18: [2, 29],
            24: [2, 29],
            31: [2, 29],
            32: [2, 29],
            33: [2, 29],
            36: [2, 29],
            38: [2, 29],
          },
          { 18: [2, 37], 24: [2, 37], 36: [2, 37] },
          { 37: [1, 65] },
          {
            21: 69,
            29: 73,
            31: [1, 70],
            32: [1, 71],
            33: [1, 72],
            36: [1, 28],
            38: [1, 27],
            39: 26,
          },
          {
            18: [2, 49],
            24: [2, 49],
            31: [2, 49],
            32: [2, 49],
            33: [2, 49],
            36: [2, 49],
            38: [2, 49],
            40: [2, 49],
          },
          { 18: [1, 74] },
          {
            5: [2, 22],
            14: [2, 22],
            15: [2, 22],
            16: [2, 22],
            19: [2, 22],
            20: [2, 22],
            22: [2, 22],
            23: [2, 22],
            25: [2, 22],
          },
          { 18: [2, 39], 24: [2, 39], 36: [2, 39] },
          { 18: [2, 40], 24: [2, 40], 36: [2, 40] },
          { 18: [2, 41], 24: [2, 41], 36: [2, 41] },
          { 18: [2, 42], 24: [2, 42], 36: [2, 42] },
          { 18: [2, 43], 24: [2, 43], 36: [2, 43] },
          {
            5: [2, 18],
            14: [2, 18],
            15: [2, 18],
            16: [2, 18],
            19: [2, 18],
            20: [2, 18],
            22: [2, 18],
            23: [2, 18],
            25: [2, 18],
          },
        ],
        defaultActions: { 17: [2, 1] },
        parseError: function s(e) {
          throw new Error(e);
        },
        parse: function w(e) {
          function t() {
            var e;
            return (
              "number" != typeof (e = n.lexer.lex() || 1) &&
                (e = n.symbols_[e] || e),
              e
            );
          }
          var n = this,
            i = [0],
            s = [null],
            a = [],
            o = this.table,
            r = "",
            l = 0,
            c = 0,
            h = 0;
          this.lexer.setInput(e),
            (this.lexer.yy = this.yy),
            (this.yy.lexer = this.lexer),
            "undefined" == typeof (this.yy.parser = this).lexer.yylloc &&
              (this.lexer.yylloc = {});
          var d = this.lexer.yylloc;
          a.push(d);
          var p = this.lexer.options && this.lexer.options.ranges;
          "function" == typeof this.yy.parseError &&
            (this.parseError = this.yy.parseError);
          for (var u, f, g, m, v, b, y, _, k, x = {}; ; ) {
            if (
              ((g = i[i.length - 1]),
              this.defaultActions[g]
                ? (m = this.defaultActions[g])
                : (null == u && (u = t()), (m = o[g] && o[g][u])),
              void 0 === m || !m.length || !m[0])
            ) {
              var C = "";
              if (!h) {
                for (b in ((k = []), o[g]))
                  this.terminals_[b] &&
                    2 < b &&
                    k.push("'" + this.terminals_[b] + "'");
                (C = this.lexer.showPosition
                  ? "Parse error on line " +
                    (l + 1) +
                    ":\n" +
                    this.lexer.showPosition() +
                    "\nExpecting " +
                    k.join(", ") +
                    ", got '" +
                    (this.terminals_[u] || u) +
                    "'"
                  : "Parse error on line " +
                    (l + 1) +
                    ": Unexpected " +
                    (1 == u
                      ? "end of input"
                      : "'" + (this.terminals_[u] || u) + "'")),
                  this.parseError(C, {
                    text: this.lexer.match,
                    token: this.terminals_[u] || u,
                    line: this.lexer.yylineno,
                    loc: d,
                    expected: k,
                  });
              }
            }
            if (m[0] instanceof Array && 1 < m.length)
              throw new Error(
                "Parse Error: multiple actions possible at state: " +
                  g +
                  ", token: " +
                  u
              );
            switch (m[0]) {
              case 1:
                i.push(u),
                  s.push(this.lexer.yytext),
                  a.push(this.lexer.yylloc),
                  i.push(m[1]),
                  (u = null),
                  f
                    ? ((u = f), (f = null))
                    : ((c = this.lexer.yyleng),
                      (r = this.lexer.yytext),
                      (l = this.lexer.yylineno),
                      (d = this.lexer.yylloc),
                      0 < h && h--);
                break;
              case 2:
                if (
                  ((y = this.productions_[m[1]][1]),
                  (x.$ = s[s.length - y]),
                  (x._$ = {
                    first_line: a[a.length - (y || 1)].first_line,
                    last_line: a[a.length - 1].last_line,
                    first_column: a[a.length - (y || 1)].first_column,
                    last_column: a[a.length - 1].last_column,
                  }),
                  p &&
                    (x._$.range = [
                      a[a.length - (y || 1)].range[0],
                      a[a.length - 1].range[1],
                    ]),
                  void 0 !==
                    (v = this.performAction.call(
                      x,
                      r,
                      c,
                      l,
                      this.yy,
                      m[1],
                      s,
                      a
                    )))
                )
                  return v;
                y &&
                  ((i = i.slice(0, -1 * y * 2)),
                  (s = s.slice(0, -1 * y)),
                  (a = a.slice(0, -1 * y))),
                  i.push(this.productions_[m[1]][0]),
                  s.push(x.$),
                  a.push(x._$),
                  (_ = o[i[i.length - 2]][i[i.length - 1]]),
                  i.push(_);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        },
      },
      n = {
        EOF: 1,
        parseError: function a(e, t) {
          if (!this.yy.parser) throw new Error(e);
          this.yy.parser.parseError(e, t);
        },
        setInput: function (e) {
          return (
            (this._input = e),
            (this._more = this._less = this.done = !1),
            (this.yylineno = this.yyleng = 0),
            (this.yytext = this.matched = this.match = ""),
            (this.conditionStack = ["INITIAL"]),
            (this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
            }),
            this.options.ranges && (this.yylloc.range = [0, 0]),
            (this.offset = 0),
            this
          );
        },
        input: function () {
          var e = this._input[0];
          return (
            (this.yytext += e),
            this.yyleng++,
            this.offset++,
            (this.match += e),
            (this.matched += e),
            e.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            e
          );
        },
        unput: function (e) {
          var t = e.length,
            n = e.split(/(?:\r\n?|\n)/g);
          (this._input = e + this._input),
            (this.yytext = this.yytext.substr(0, this.yytext.length - t - 1)),
            (this.offset -= t);
          var i = this.match.split(/(?:\r\n?|\n)/g);
          (this.match = this.match.substr(0, this.match.length - 1)),
            (this.matched = this.matched.substr(0, this.matched.length - 1)),
            n.length - 1 && (this.yylineno -= n.length - 1);
          var s = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: n
                ? (n.length === i.length ? this.yylloc.first_column : 0) +
                  i[i.length - n.length].length -
                  n[0].length
                : this.yylloc.first_column - t,
            }),
            this.options.ranges &&
              (this.yylloc.range = [s[0], s[0] + this.yyleng - t]),
            this
          );
        },
        more: function () {
          return (this._more = !0), this;
        },
        less: function (e) {
          this.unput(this.match.slice(e));
        },
        pastInput: function () {
          var e = this.matched.substr(
            0,
            this.matched.length - this.match.length
          );
          return (
            (20 < e.length ? "..." : "") + e.substr(-20).replace(/\n/g, "")
          );
        },
        upcomingInput: function () {
          var e = this.match;
          return (
            e.length < 20 && (e += this._input.substr(0, 20 - e.length)),
            (e.substr(0, 20) + (20 < e.length ? "..." : "")).replace(/\n/g, "")
          );
        },
        showPosition: function () {
          var e = this.pastInput(),
            t = new Array(e.length + 1).join("-");
          return e + this.upcomingInput() + "\n" + t + "^";
        },
        next: function () {
          if (this.done) return this.EOF;
          var e, t, n, i, s;
          this._input || (this.done = !0),
            this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var a = this._currentRules(), o = 0;
            o < a.length &&
            (!(n = this._input.match(this.rules[a[o]])) ||
              (t && !(n[0].length > t[0].length)) ||
              ((t = n), (i = o), this.options.flex));
            o++
          );
          return t
            ? ((s = t[0].match(/(?:\r\n?|\n).*/g)) &&
                (this.yylineno += s.length),
              (this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: s
                  ? s[s.length - 1].length -
                    s[s.length - 1].match(/\r?\n?/)[0].length
                  : this.yylloc.last_column + t[0].length,
              }),
              (this.yytext += t[0]),
              (this.match += t[0]),
              (this.matches = t),
              (this.yyleng = this.yytext.length),
              this.options.ranges &&
                (this.yylloc.range = [
                  this.offset,
                  (this.offset += this.yyleng),
                ]),
              (this._more = !1),
              (this._input = this._input.slice(t[0].length)),
              (this.matched += t[0]),
              (e = this.performAction.call(
                this,
                this.yy,
                this,
                a[i],
                this.conditionStack[this.conditionStack.length - 1]
              )),
              this.done && this._input && (this.done = !1),
              e || void 0)
            : "" === this._input
            ? this.EOF
            : this.parseError(
                "Lexical error on line " +
                  (this.yylineno + 1) +
                  ". Unrecognized text.\n" +
                  this.showPosition(),
                { text: "", token: null, line: this.yylineno }
              );
        },
        lex: function o() {
          var e = this.next();
          return void 0 !== e ? e : this.lex();
        },
        begin: function l(e) {
          this.conditionStack.push(e);
        },
        popState: function c() {
          return this.conditionStack.pop();
        },
        _currentRules: function h() {
          return this.conditions[
            this.conditionStack[this.conditionStack.length - 1]
          ].rules;
        },
        topState: function () {
          return this.conditionStack[this.conditionStack.length - 2];
        },
        pushState: function l(e) {
          this.begin(e);
        },
        options: {},
        performAction: function d(e, t, n) {
          switch (n) {
            case 0:
              return (t.yytext = "\\"), 14;
            case 1:
              if (
                ("\\" !== t.yytext.slice(-1) && this.begin("mu"),
                "\\" === t.yytext.slice(-1) &&
                  ((t.yytext = t.yytext.substr(0, t.yyleng - 1)),
                  this.begin("emu")),
                t.yytext)
              )
                return 14;
              break;
            case 2:
              return 14;
            case 3:
              return (
                "\\" !== t.yytext.slice(-1) && this.popState(),
                "\\" === t.yytext.slice(-1) &&
                  (t.yytext = t.yytext.substr(0, t.yyleng - 1)),
                14
              );
            case 4:
              return (
                (t.yytext = t.yytext.substr(0, t.yyleng - 4)),
                this.popState(),
                15
              );
            case 5:
              return 25;
            case 6:
              return 16;
            case 7:
              return 20;
            case 8:
            case 9:
              return 19;
            case 10:
              return 23;
            case 11:
              return 22;
            case 12:
              this.popState(), this.begin("com");
              break;
            case 13:
              return (
                (t.yytext = t.yytext.substr(3, t.yyleng - 5)),
                this.popState(),
                15
              );
            case 14:
              return 22;
            case 15:
              return 37;
            case 16:
            case 17:
              return 36;
            case 18:
              return 40;
            case 19:
              break;
            case 20:
              return this.popState(), 24;
            case 21:
              return this.popState(), 18;
            case 22:
              return (
                (t.yytext = t.yytext
                  .substr(1, t.yyleng - 2)
                  .replace(/\\"/g, '"')),
                31
              );
            case 23:
              return (
                (t.yytext = t.yytext
                  .substr(1, t.yyleng - 2)
                  .replace(/\\'/g, "'")),
                31
              );
            case 24:
              return 38;
            case 25:
            case 26:
              return 33;
            case 27:
              return 32;
            case 28:
              return 36;
            case 29:
              return (t.yytext = t.yytext.substr(1, t.yyleng - 2)), 36;
            case 30:
              return "INVALID";
            case 31:
              return 5;
          }
        },
        rules: [
          /^(?:\\\\(?=(\{\{)))/,
          /^(?:[^\x00]*?(?=(\{\{)))/,
          /^(?:[^\x00]+)/,
          /^(?:[^\x00]{2,}?(?=(\{\{|$)))/,
          /^(?:[\s\S]*?--\}\})/,
          /^(?:\{\{>)/,
          /^(?:\{\{#)/,
          /^(?:\{\{\/)/,
          /^(?:\{\{\^)/,
          /^(?:\{\{\s*else\b)/,
          /^(?:\{\{\{)/,
          /^(?:\{\{&)/,
          /^(?:\{\{!--)/,
          /^(?:\{\{![\s\S]*?\}\})/,
          /^(?:\{\{)/,
          /^(?:=)/,
          /^(?:\.(?=[}\/ ]))/,
          /^(?:\.\.)/,
          /^(?:[\/.])/,
          /^(?:\s+)/,
          /^(?:\}\}\})/,
          /^(?:\}\})/,
          /^(?:"(\\["]|[^"])*")/,
          /^(?:'(\\[']|[^'])*')/,
          /^(?:@)/,
          /^(?:true(?=[}\s]))/,
          /^(?:false(?=[}\s]))/,
          /^(?:-?[0-9]+(?=[}\s]))/,
          /^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/,
          /^(?:\[[^\]]*\])/,
          /^(?:.)/,
          /^(?:$)/,
        ],
        conditions: {
          mu: {
            rules: [
              5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            inclusive: !1,
          },
          emu: { rules: [3], inclusive: !1 },
          com: { rules: [4], inclusive: !1 },
          INITIAL: { rules: [0, 1, 2, 31], inclusive: !0 },
        },
      };
    return (t.lexer = n), new ((e.prototype = t).Parser = e)();
  })();
  (c.Parser = e),
    (c.parse = function (e) {
      return e.constructor === c.AST.ProgramNode
        ? e
        : ((c.Parser.yy = c.AST), c.Parser.parse(e));
    }),
    (c.AST = {}),
    (c.AST.ProgramNode = function (e, t) {
      (this.type = "program"),
        (this.statements = e),
        t && (this.inverse = new c.AST.ProgramNode(t));
    }),
    (c.AST.MustacheNode = function (e, t, n) {
      (this.type = "mustache"), (this.escaped = !n), (this.hash = t);
      var i = (this.id = e[0]),
        s = (this.params = e.slice(1)),
        a = (this.eligibleHelper = i.isSimple);
      this.isHelper = a && (s.length || t);
    }),
    (c.AST.PartialNode = function (e, t) {
      (this.type = "partial"), (this.partialName = e), (this.context = t);
    }),
    (c.AST.BlockNode = function (e, t, n, i) {
      (function (e, t) {
        if (e.original !== t.original)
          throw new c.Exception(e.original + " doesn't match " + t.original);
      })(e.id, i),
        (this.type = "block"),
        (this.mustache = e),
        (this.program = t),
        (this.inverse = n),
        this.inverse && !this.program && (this.isInverse = !0);
    }),
    (c.AST.ContentNode = function (e) {
      (this.type = "content"), (this.string = e);
    }),
    (c.AST.HashNode = function (e) {
      (this.type = "hash"), (this.pairs = e);
    }),
    (c.AST.IdNode = function (e) {
      this.type = "ID";
      for (var t = "", n = [], i = 0, s = 0, a = e.length; s < a; s++) {
        var o = e[s].part;
        if (
          ((t += (e[s].separator || "") + o),
          ".." === o || "." === o || "this" === o)
        ) {
          if (0 < n.length) throw new c.Exception("Invalid path: " + t);
          ".." === o ? i++ : (this.isScoped = !0);
        } else n.push(o);
      }
      (this.original = t),
        (this.parts = n),
        (this.string = n.join(".")),
        (this.depth = i),
        (this.isSimple = 1 === e.length && !this.isScoped && 0 === i),
        (this.stringModeValue = this.string);
    }),
    (c.AST.PartialNameNode = function (e) {
      (this.type = "PARTIAL_NAME"), (this.name = e.original);
    }),
    (c.AST.DataNode = function (e) {
      (this.type = "DATA"), (this.id = e);
    }),
    (c.AST.StringNode = function (e) {
      (this.type = "STRING"),
        (this.original = this.string = this.stringModeValue = e);
    }),
    (c.AST.IntegerNode = function (e) {
      (this.type = "INTEGER"),
        (this.original = this.integer = e),
        (this.stringModeValue = Number(e));
    }),
    (c.AST.BooleanNode = function (e) {
      (this.type = "BOOLEAN"),
        (this.bool = e),
        (this.stringModeValue = "true" === e);
    }),
    (c.AST.CommentNode = function (e) {
      (this.type = "comment"), (this.comment = e);
    });
  var s = [
    "description",
    "fileName",
    "lineNumber",
    "message",
    "name",
    "number",
    "stack",
  ];
  (c.Exception = function (e) {
    for (
      var t = Error.prototype.constructor.apply(this, arguments), n = 0;
      n < s.length;
      n++
    )
      this[s[n]] = t[s[n]];
  }),
    (c.Exception.prototype = new Error()),
    (c.SafeString = function (e) {
      this.string = e;
    }),
    (c.SafeString.prototype.toString = function () {
      return this.string.toString();
    });
  var t = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    },
    n = /[&<>"'`]/g,
    a = /[&<>"'`]/,
    o = function (e) {
      return t[e] || "&amp;";
    };
  c.Utils = {
    extend: function (e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    },
    escapeExpression: function (e) {
      return e instanceof c.SafeString
        ? e.toString()
        : null == e || !1 === e
        ? ""
        : ((e = e.toString()), a.test(e) ? e.replace(n, o) : e);
    },
    isEmpty: function (e) {
      return (
        (!e && 0 !== e) || ("[object Array]" === h.call(e) && 0 === e.length)
      );
    },
  };
  var l = (c.Compiler = function () {}),
    p = (c.JavaScriptCompiler = function () {});
  l.prototype = {
    compiler: l,
    disassemble: function () {
      for (
        var e, t, n, i = this.opcodes, s = [], a = 0, o = i.length;
        a < o;
        a++
      )
        if ("DECLARE" === (e = i[a]).opcode)
          s.push("DECLARE " + e.name + "=" + e.value);
        else {
          t = [];
          for (var r = 0; r < e.args.length; r++)
            "string" == typeof (n = e.args[r]) &&
              (n = '"' + n.replace("\n", "\\n") + '"'),
              t.push(n);
          s.push(e.opcode + " " + t.join(" "));
        }
      return s.join("\n");
    },
    equals: function (e) {
      var t = this.opcodes.length;
      if (e.opcodes.length !== t) return !1;
      for (var n = 0; n < t; n++) {
        var i = this.opcodes[n],
          s = e.opcodes[n];
        if (i.opcode !== s.opcode || i.args.length !== s.args.length) return !1;
        for (var a = 0; a < i.args.length; a++)
          if (i.args[a] !== s.args[a]) return !1;
      }
      if (((t = this.children.length), e.children.length !== t)) return !1;
      for (n = 0; n < t; n++)
        if (!this.children[n].equals(e.children[n])) return !1;
      return !0;
    },
    guid: 0,
    compile: function (e, t) {
      (this.children = []), (this.depths = { list: [] }), (this.options = t);
      var n = this.options.knownHelpers;
      if (
        ((this.options.knownHelpers = {
          helperMissing: !0,
          blockHelperMissing: !0,
          each: !0,
          if: !0,
          unless: !0,
          with: !0,
          log: !0,
        }),
        n)
      )
        for (var i in n) this.options.knownHelpers[i] = n[i];
      return this.program(e);
    },
    accept: function (e) {
      return this[e.type](e);
    },
    program: function (e) {
      var t,
        n = e.statements;
      this.opcodes = [];
      for (var i = 0, s = n.length; i < s; i++) this[(t = n[i]).type](t);
      return (
        (this.isSimple = 1 === s),
        (this.depths.list = this.depths.list.sort(function (e, t) {
          return e - t;
        })),
        this
      );
    },
    compileProgram: function (e) {
      var t,
        n = new this.compiler().compile(e, this.options),
        i = this.guid++;
      this.usePartial = this.usePartial || n.usePartial;
      for (var s = 0, a = (this.children[i] = n).depths.list.length; s < a; s++)
        (t = n.depths.list[s]) < 2 || this.addDepth(t - 1);
      return i;
    },
    block: function (e) {
      var t = e.mustache,
        n = e.program,
        i = e.inverse;
      n && (n = this.compileProgram(n)), i && (i = this.compileProgram(i));
      var s = this.classifyMustache(t);
      "helper" === s
        ? this.helperMustache(t, n, i)
        : "simple" === s
        ? (this.simpleMustache(t),
          this.opcode("pushProgram", n),
          this.opcode("pushProgram", i),
          this.opcode("emptyHash"),
          this.opcode("blockValue"))
        : (this.ambiguousMustache(t, n, i),
          this.opcode("pushProgram", n),
          this.opcode("pushProgram", i),
          this.opcode("emptyHash"),
          this.opcode("ambiguousBlockValue")),
        this.opcode("append");
    },
    hash: function (e) {
      var t,
        n,
        i = e.pairs;
      this.opcode("pushHash");
      for (var s = 0, a = i.length; s < a; s++)
        (n = (t = i[s])[1]),
          this.options.stringParams
            ? (n.depth && this.addDepth(n.depth),
              this.opcode("getContext", n.depth || 0),
              this.opcode("pushStringParam", n.stringModeValue, n.type))
            : this.accept(n),
          this.opcode("assignToHash", t[0]);
      this.opcode("popHash");
    },
    partial: function (e) {
      var t = e.partialName;
      (this.usePartial = !0),
        e.context ? this.ID(e.context) : this.opcode("push", "depth0"),
        this.opcode("invokePartial", t.name),
        this.opcode("append");
    },
    content: function (e) {
      this.opcode("appendContent", e.string);
    },
    mustache: function (e) {
      var t = this.options,
        n = this.classifyMustache(e);
      "simple" === n
        ? this.simpleMustache(e)
        : "helper" === n
        ? this.helperMustache(e)
        : this.ambiguousMustache(e),
        e.escaped && !t.noEscape
          ? this.opcode("appendEscaped")
          : this.opcode("append");
    },
    ambiguousMustache: function (e, t, n) {
      var i = e.id,
        s = i.parts[0],
        a = null != t || null != n;
      this.opcode("getContext", i.depth),
        this.opcode("pushProgram", t),
        this.opcode("pushProgram", n),
        this.opcode("invokeAmbiguous", s, a);
    },
    simpleMustache: function (e) {
      var t = e.id;
      "DATA" === t.type
        ? this.DATA(t)
        : t.parts.length
        ? this.ID(t)
        : (this.addDepth(t.depth),
          this.opcode("getContext", t.depth),
          this.opcode("pushContext")),
        this.opcode("resolvePossibleLambda");
    },
    helperMustache: function (e, t, n) {
      var i = this.setupFullMustacheParams(e, t, n),
        s = e.id.parts[0];
      if (this.options.knownHelpers[s])
        this.opcode("invokeKnownHelper", i.length, s);
      else {
        if (this.options.knownHelpersOnly)
          throw new Error(
            "You specified knownHelpersOnly, but used the unknown helper " + s
          );
        this.opcode("invokeHelper", i.length, s);
      }
    },
    ID: function (e) {
      this.addDepth(e.depth),
        this.opcode("getContext", e.depth),
        e.parts[0]
          ? this.opcode("lookupOnContext", e.parts[0])
          : this.opcode("pushContext");
      for (var t = 1, n = e.parts.length; t < n; t++)
        this.opcode("lookup", e.parts[t]);
    },
    DATA: function (e) {
      if (((this.options.data = !0), e.id.isScoped || e.id.depth))
        throw new c.Exception(
          "Scoped data references are not supported: " + e.original
        );
      this.opcode("lookupData");
      for (var t = e.id.parts, n = 0, i = t.length; n < i; n++)
        this.opcode("lookup", t[n]);
    },
    STRING: function (e) {
      this.opcode("pushString", e.string);
    },
    INTEGER: function (e) {
      this.opcode("pushLiteral", e.integer);
    },
    BOOLEAN: function (e) {
      this.opcode("pushLiteral", e.bool);
    },
    comment: function () {},
    opcode: function (e) {
      this.opcodes.push({ opcode: e, args: [].slice.call(arguments, 1) });
    },
    declare: function (e, t) {
      this.opcodes.push({ opcode: "DECLARE", name: e, value: t });
    },
    addDepth: function (e) {
      if (isNaN(e)) throw new Error("EWOT");
      0 !== e &&
        (this.depths[e] || ((this.depths[e] = !0), this.depths.list.push(e)));
    },
    classifyMustache: function (e) {
      var t = e.isHelper,
        n = e.eligibleHelper,
        i = this.options;
      if (n && !t) {
        var s = e.id.parts[0];
        i.knownHelpers[s] ? (t = !0) : i.knownHelpersOnly && (n = !1);
      }
      return t ? "helper" : n ? "ambiguous" : "simple";
    },
    pushParams: function (e) {
      for (var t, n = e.length; n--; )
        (t = e[n]),
          this.options.stringParams
            ? (t.depth && this.addDepth(t.depth),
              this.opcode("getContext", t.depth || 0),
              this.opcode("pushStringParam", t.stringModeValue, t.type))
            : this[t.type](t);
    },
    setupMustacheParams: function (e) {
      var t = e.params;
      return (
        this.pushParams(t),
        e.hash ? this.hash(e.hash) : this.opcode("emptyHash"),
        t
      );
    },
    setupFullMustacheParams: function (e, t, n) {
      var i = e.params;
      return (
        this.pushParams(i),
        this.opcode("pushProgram", t),
        this.opcode("pushProgram", n),
        e.hash ? this.hash(e.hash) : this.opcode("emptyHash"),
        i
      );
    },
  };
  var u = function (e) {
    this.value = e;
  };
  p.prototype = {
    nameLookup: function (e, t) {
      return /^[0-9]+$/.test(t)
        ? e + "[" + t + "]"
        : p.isValidJavaScriptVariableName(t)
        ? e + "." + t
        : e + "['" + t + "']";
    },
    appendToBuffer: function (e) {
      return this.environment.isSimple
        ? "return " + e + ";"
        : {
            appendToBuffer: !0,
            content: e,
            toString: function () {
              return "buffer += " + e + ";";
            },
          };
    },
    initializeBuffer: function () {
      return this.quotedString("");
    },
    namespace: "Handlebars",
    compile: function (e, t, n, i) {
      (this.environment = e),
        (this.options = t || {}),
        c.log(c.logger.DEBUG, this.environment.disassemble() + "\n\n"),
        (this.name = this.environment.name),
        (this.isChild = !!n),
        (this.context = n || { programs: [], environments: [], aliases: {} }),
        this.preamble(),
        (this.stackSlot = 0),
        (this.stackVars = []),
        (this.registers = { list: [] }),
        (this.compileStack = []),
        (this.inlineStack = []),
        this.compileChildren(e, t);
      var s,
        a = e.opcodes;
      for (this.i = 0, v = a.length; this.i < v; this.i++)
        "DECLARE" === (s = a[this.i]).opcode
          ? (this[s.name] = s.value)
          : this[s.opcode].apply(this, s.args);
      return this.createFunctionContext(i);
    },
    nextOpcode: function () {
      return this.environment.opcodes[this.i + 1];
    },
    eat: function () {
      this.i = this.i + 1;
    },
    preamble: function () {
      var e = [];
      if (this.isChild) e.push("");
      else {
        var t = this.namespace,
          n = "helpers = this.merge(helpers, " + t + ".helpers);";
        this.environment.usePartial &&
          (n = n + " partials = this.merge(partials, " + t + ".partials);"),
          this.options.data && (n += " data = data || {};"),
          e.push(n);
      }
      this.environment.isSimple
        ? e.push("")
        : e.push(", buffer = " + this.initializeBuffer()),
        (this.lastContext = 0),
        (this.source = e);
    },
    createFunctionContext: function (e) {
      var t = this.stackVars.concat(this.registers.list);
      if (
        (0 < t.length &&
          (this.source[1] = this.source[1] + ", " + t.join(", ")),
        !this.isChild)
      )
        for (var n in this.context.aliases)
          this.context.aliases.hasOwnProperty(n) &&
            (this.source[1] =
              this.source[1] + ", " + n + "=" + this.context.aliases[n]);
      this.source[1] &&
        (this.source[1] = "var " + this.source[1].substring(2) + ";"),
        this.isChild ||
          (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"),
        this.environment.isSimple || this.source.push("return buffer;");
      for (
        var i = this.isChild
            ? ["depth0", "data"]
            : ["Handlebars", "depth0", "helpers", "partials", "data"],
          s = 0,
          a = this.environment.depths.list.length;
        s < a;
        s++
      )
        i.push("depth" + this.environment.depths.list[s]);
      var o = this.mergeSource();
      if (!this.isChild) {
        var r = c.COMPILER_REVISION;
        o =
          "this.compilerInfo = [" +
          r +
          ",'" +
          c.REVISION_CHANGES[r] +
          "'];\n" +
          o;
      }
      if (e) return i.push(o), Function.apply(this, i);
      var l =
        "function " +
        (this.name || "") +
        "(" +
        i.join(",") +
        ") {\n  " +
        o +
        "}";
      return c.log(c.logger.DEBUG, l + "\n\n"), l;
    },
    mergeSource: function () {
      for (var e, t = "", n = 0, i = this.source.length; n < i; n++) {
        var s = this.source[n];
        s.appendToBuffer
          ? (e = e ? e + "\n    + " + s.content : s.content)
          : (e && ((t += "buffer += " + e + ";\n  "), (e = r)),
            (t += s + "\n  "));
      }
      return t;
    },
    blockValue: function () {
      this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
      var t = ["depth0"];
      this.setupParams(0, t),
        this.replaceStack(function (e) {
          return (
            t.splice(1, 0, e), "blockHelperMissing.call(" + t.join(", ") + ")"
          );
        });
    },
    ambiguousBlockValue: function () {
      this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
      var e = ["depth0"];
      this.setupParams(0, e);
      var t = this.topStack();
      e.splice(1, 0, t),
        (e[e.length - 1] = "options"),
        this.source.push(
          "if (!" +
            this.lastHelper +
            ") { " +
            t +
            " = blockHelperMissing.call(" +
            e.join(", ") +
            "); }"
        );
    },
    appendContent: function (e) {
      this.source.push(this.appendToBuffer(this.quotedString(e)));
    },
    append: function () {
      this.flushInline();
      var e = this.popStack();
      this.source.push(
        "if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"
      ),
        this.environment.isSimple &&
          this.source.push("else { " + this.appendToBuffer("''") + " }");
    },
    appendEscaped: function () {
      (this.context.aliases.escapeExpression = "this.escapeExpression"),
        this.source.push(
          this.appendToBuffer("escapeExpression(" + this.popStack() + ")")
        );
    },
    getContext: function (e) {
      this.lastContext !== e && (this.lastContext = e);
    },
    lookupOnContext: function (e) {
      this.push(this.nameLookup("depth" + this.lastContext, e, "context"));
    },
    pushContext: function () {
      this.pushStackLiteral("depth" + this.lastContext);
    },
    resolvePossibleLambda: function () {
      (this.context.aliases.functionType = '"function"'),
        this.replaceStack(function (e) {
          return (
            "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
          );
        });
    },
    lookup: function (t) {
      this.replaceStack(function (e) {
        return (
          e +
          " == null || " +
          e +
          " === false ? " +
          e +
          " : " +
          this.nameLookup(e, t, "context")
        );
      });
    },
    lookupData: function () {
      this.push("data");
    },
    pushStringParam: function (e, t) {
      this.pushStackLiteral("depth" + this.lastContext),
        this.pushString(t),
        "string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e);
    },
    emptyHash: function () {
      this.pushStackLiteral("{}"),
        this.options.stringParams &&
          (this.register("hashTypes", "{}"),
          this.register("hashContexts", "{}"));
    },
    pushHash: function () {
      this.hash = { values: [], types: [], contexts: [] };
    },
    popHash: function () {
      var e = this.hash;
      (this.hash = r),
        this.options.stringParams &&
          (this.register("hashContexts", "{" + e.contexts.join(",") + "}"),
          this.register("hashTypes", "{" + e.types.join(",") + "}")),
        this.push("{\n    " + e.values.join(",\n    ") + "\n  }");
    },
    pushString: function (e) {
      this.pushStackLiteral(this.quotedString(e));
    },
    push: function (e) {
      return this.inlineStack.push(e), e;
    },
    pushLiteral: function (e) {
      this.pushStackLiteral(e);
    },
    pushProgram: function (e) {
      null != e
        ? this.pushStackLiteral(this.programExpression(e))
        : this.pushStackLiteral(null);
    },
    invokeHelper: function (e, t) {
      this.context.aliases.helperMissing = "helpers.helperMissing";
      var n = (this.lastHelper = this.setupHelper(e, t, !0)),
        i = this.nameLookup("depth" + this.lastContext, t, "context");
      this.push(n.name + " || " + i),
        this.replaceStack(function (e) {
          return (
            e +
            " ? " +
            e +
            ".call(" +
            n.callParams +
            ") : helperMissing.call(" +
            n.helperMissingParams +
            ")"
          );
        });
    },
    invokeKnownHelper: function (e, t) {
      var n = this.setupHelper(e, t);
      this.push(n.name + ".call(" + n.callParams + ")");
    },
    invokeAmbiguous: function (e, t) {
      (this.context.aliases.functionType = '"function"'),
        this.pushStackLiteral("{}");
      var n = this.setupHelper(0, e, t),
        i = (this.lastHelper = this.nameLookup("helpers", e, "helper")),
        s = this.nameLookup("depth" + this.lastContext, e, "context"),
        a = this.nextStack();
      this.source.push(
        "if (" +
          a +
          " = " +
          i +
          ") { " +
          a +
          " = " +
          a +
          ".call(" +
          n.callParams +
          "); }"
      ),
        this.source.push(
          "else { " +
            a +
            " = " +
            s +
            "; " +
            a +
            " = typeof " +
            a +
            " === functionType ? " +
            a +
            ".apply(depth0) : " +
            a +
            "; }"
        );
    },
    invokePartial: function (e) {
      var t = [
        this.nameLookup("partials", e, "partial"),
        "'" + e + "'",
        this.popStack(),
        "helpers",
        "partials",
      ];
      this.options.data && t.push("data"),
        (this.context.aliases.self = "this"),
        this.push("self.invokePartial(" + t.join(", ") + ")");
    },
    assignToHash: function (e) {
      var t,
        n,
        i = this.popStack();
      this.options.stringParams &&
        ((n = this.popStack()), (t = this.popStack()));
      var s = this.hash;
      t && s.contexts.push("'" + e + "': " + t),
        n && s.types.push("'" + e + "': " + n),
        s.values.push("'" + e + "': (" + i + ")");
    },
    compiler: p,
    compileChildren: function (e, t) {
      for (var n, i, s = e.children, a = 0, o = s.length; a < o; a++) {
        (n = s[a]), (i = new this.compiler());
        var r = this.matchExistingProgram(n);
        null == r
          ? (this.context.programs.push(""),
            (r = this.context.programs.length),
            (n.index = r),
            (n.name = "program" + r),
            (this.context.programs[r] = i.compile(n, t, this.context)),
            (this.context.environments[r] = n))
          : ((n.index = r), (n.name = "program" + r));
      }
    },
    matchExistingProgram: function (e) {
      for (var t = 0, n = this.context.environments.length; t < n; t++) {
        var i = this.context.environments[t];
        if (i && i.equals(e)) return t;
      }
    },
    programExpression: function (e) {
      if (((this.context.aliases.self = "this"), null == e)) return "self.noop";
      for (
        var t,
          n = this.environment.children[e],
          i = n.depths.list,
          s = [n.index, n.name, "data"],
          a = 0,
          o = i.length;
        a < o;
        a++
      )
        1 === (t = i[a]) ? s.push("depth0") : s.push("depth" + (t - 1));
      return (
        (0 === i.length ? "self.program(" : "self.programWithDepth(") +
        s.join(", ") +
        ")"
      );
    },
    register: function (e, t) {
      this.useRegister(e), this.source.push(e + " = " + t + ";");
    },
    useRegister: function (e) {
      this.registers[e] ||
        ((this.registers[e] = !0), this.registers.list.push(e));
    },
    pushStackLiteral: function (e) {
      return this.push(new u(e));
    },
    pushStack: function (e) {
      this.flushInline();
      var t = this.incrStack();
      return (
        e && this.source.push(t + " = " + e + ";"), this.compileStack.push(t), t
      );
    },
    replaceStack: function (e) {
      var t,
        n = "",
        i = this.isInline();
      if (i) {
        var s = this.popStack(!0);
        if (s instanceof u) t = s.value;
        else {
          var a = this.stackSlot ? this.topStackName() : this.incrStack();
          (n = "(" + this.push(a) + " = " + s + "),"), (t = this.topStack());
        }
      } else t = this.topStack();
      var o = e.call(this, t);
      return (
        i
          ? ((this.inlineStack.length || this.compileStack.length) &&
              this.popStack(),
            this.push("(" + n + o + ")"))
          : (/^stack/.test(t) || (t = this.nextStack()),
            this.source.push(t + " = (" + n + o + ");")),
        t
      );
    },
    nextStack: function () {
      return this.pushStack();
    },
    incrStack: function () {
      return (
        this.stackSlot++,
        this.stackSlot > this.stackVars.length &&
          this.stackVars.push("stack" + this.stackSlot),
        this.topStackName()
      );
    },
    topStackName: function () {
      return "stack" + this.stackSlot;
    },
    flushInline: function () {
      var e = this.inlineStack;
      if (e.length) {
        this.inlineStack = [];
        for (var t = 0, n = e.length; t < n; t++) {
          var i = e[t];
          i instanceof u ? this.compileStack.push(i) : this.pushStack(i);
        }
      }
    },
    isInline: function () {
      return this.inlineStack.length;
    },
    popStack: function (e) {
      var t = this.isInline(),
        n = (t ? this.inlineStack : this.compileStack).pop();
      return !e && n instanceof u ? n.value : (t || this.stackSlot--, n);
    },
    topStack: function (e) {
      var t = this.isInline() ? this.inlineStack : this.compileStack,
        n = t[t.length - 1];
      return !e && n instanceof u ? n.value : n;
    },
    quotedString: function (e) {
      return (
        '"' +
        e
          .replace(/\\/g, "\\\\")
          .replace(/"/g, '\\"')
          .replace(/\n/g, "\\n")
          .replace(/\r/g, "\\r")
          .replace(/\u2028/g, "\\u2028")
          .replace(/\u2029/g, "\\u2029") +
        '"'
      );
    },
    setupHelper: function (e, t, n) {
      var i = [];
      return (
        this.setupParams(e, i, n),
        {
          params: i,
          name: this.nameLookup("helpers", t, "helper"),
          callParams: ["depth0"].concat(i).join(", "),
          helperMissingParams:
            n && ["depth0", this.quotedString(t)].concat(i).join(", "),
        }
      );
    },
    setupParams: function (e, t, n) {
      var i,
        s,
        a,
        o = [],
        r = [],
        l = [];
      o.push("hash:" + this.popStack()),
        (s = this.popStack()),
        ((a = this.popStack()) || s) &&
          (a || ((this.context.aliases.self = "this"), (a = "self.noop")),
          s || ((this.context.aliases.self = "this"), (s = "self.noop")),
          o.push("inverse:" + s),
          o.push("fn:" + a));
      for (var c = 0; c < e; c++)
        (i = this.popStack()),
          t.push(i),
          this.options.stringParams &&
            (l.push(this.popStack()), r.push(this.popStack()));
      return (
        this.options.stringParams &&
          (o.push("contexts:[" + r.join(",") + "]"),
          o.push("types:[" + l.join(",") + "]"),
          o.push("hashContexts:hashContexts"),
          o.push("hashTypes:hashTypes")),
        this.options.data && o.push("data:data"),
        (o = "{" + o.join(",") + "}"),
        n ? (this.register("options", o), t.push("options")) : t.push(o),
        t.join(", ")
      );
    },
  };
  for (
    var f =
        "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(
          " "
        ),
      g = (p.RESERVED_WORDS = {}),
      m = 0,
      v = f.length;
    m < v;
    m++
  )
    g[f[m]] = !0;
  (p.isValidJavaScriptVariableName = function (e) {
    return !(p.RESERVED_WORDS[e] || !/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e));
  }),
    (c.precompile = function (e, t) {
      if (
        null == e ||
        ("string" != typeof e && e.constructor !== c.AST.ProgramNode)
      )
        throw new c.Exception(
          "You must pass a string or Handlebars AST to Handlebars.precompile. You passed " +
            e
        );
      "data" in (t = t || {}) || (t.data = !0);
      var n = c.parse(e),
        i = new l().compile(n, t);
      return new p().compile(i, t);
    }),
    (c.compile = function (i, s) {
      function n() {
        var e = c.parse(i),
          t = new l().compile(e, s),
          n = new p().compile(t, s, r, !0);
        return c.template(n);
      }
      if (
        null == i ||
        ("string" != typeof i && i.constructor !== c.AST.ProgramNode)
      )
        throw new c.Exception(
          "You must pass a string or Handlebars AST to Handlebars.compile. You passed " +
            i
        );
      var a;
      return (
        "data" in (s = s || {}) || (s.data = !0),
        function (e, t) {
          return a || (a = n()), a.call(this, e, t);
        }
      );
    }),
    (c.VM = {
      template: function (o) {
        var r = {
          escapeExpression: c.Utils.escapeExpression,
          invokePartial: c.VM.invokePartial,
          programs: [],
          program: function (e, t, n) {
            var i = this.programs[e];
            return (
              n
                ? (i = c.VM.program(e, t, n))
                : i || (i = this.programs[e] = c.VM.program(e, t)),
              i
            );
          },
          merge: function (e, t) {
            var n = e || t;
            return (
              e && t && ((n = {}), c.Utils.extend(n, t), c.Utils.extend(n, e)),
              n
            );
          },
          programWithDepth: c.VM.programWithDepth,
          noop: c.VM.noop,
          compilerInfo: null,
        };
        return function (e, t) {
          t = t || {};
          var n = o.call(r, c, e, t.helpers, t.partials, t.data),
            i = r.compilerInfo || [],
            s = i[0] || 1,
            a = c.COMPILER_REVISION;
          if (s === a) return n;
          if (s < a)
            throw (
              "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
              c.REVISION_CHANGES[a] +
              ") or downgrade your runtime to an older version (" +
              c.REVISION_CHANGES[s] +
              ")."
            );
          throw (
            "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
            i[1] +
            ")."
          );
        };
      },
      programWithDepth: function (e, n, i) {
        var s = Array.prototype.slice.call(arguments, 3),
          t = function (e, t) {
            return (t = t || {}), n.apply(this, [e, t.data || i].concat(s));
          };
        return (t.program = e), (t.depth = s.length), t;
      },
      program: function (e, n, i) {
        var t = function (e, t) {
          return n(e, (t = t || {}).data || i);
        };
        return (t.program = e), (t.depth = 0), t;
      },
      noop: function () {
        return "";
      },
      invokePartial: function (e, t, n, i, s, a) {
        var o = { helpers: i, partials: s, data: a };
        if (e === r)
          throw new c.Exception("The partial " + t + " could not be found");
        if (e instanceof Function) return e(n, o);
        if (c.compile)
          return (s[t] = c.compile(e, { data: a !== r })), s[t](n, o);
        throw new c.Exception(
          "The partial " +
            t +
            " could not be compiled when running in runtime-only mode"
        );
      },
    }),
    (c.template = c.VM.template);
})(Handlebars);
var FEEDBACK_PANEL_CONST = {
    EVENT_FEEDBACK_CLOSE: "feedback_close",
    EVENT_FEEDBACK_OPEN: "feedback_open",
  },
  FeedbackPanel = (function () {
    function t() {
      function e() {
        (u = $(C)),
          (f = u.find(".rating")),
          (m = u.find("#rating-form")),
          m.find("input"),
          (g = u.find("#rating-desc")),
          (v = u.find(".question-wrapper:first")),
          (b = u.find(".submit-btn")),
          (y = m.find(".suggestion-txt")),
          (_ = Handlebars.compile($("#rating-question-template").html())),
          y.attr("name", "entry." + feedback_entry_ids.suggestion_text),
          f.raty({
            click: function (e, t) {
              g.html(t.target.title),
                n(e),
                d(A.rating_selected),
                c(),
                resizeColorbox();
            },
          }),
          b.click(function (e) {
            e.preventDefault(), r();
          });
      }
      function n(e) {
        x = e;
      }
      function t() {
        return x ? f.find('i[data-score*="' + x + '"]').attr("title") : E;
      }
      function i() {
        var n = "";
        return (
          $.each(feedback_user_details, function (e, t) {
            n += "entry." + feedback_entry_ids[e] + "=" + t + "&";
          }),
          (n += "entry." + feedback_entry_ids.rating + "=" + x + "&"),
          (n += m.serialize())
        );
      }
      function s() {
        var e = remind_later_cookie_name,
          t = new Date();
        setCookie(
          e,
          1,
          new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1, 0, 0, 0)
        ),
          $("#feedback-hint-link").click();
      }
      function a() {
        h(),
          $body.trigger(FEEDBACK_PANEL_CONST.EVENT_FEEDBACK_CLOSE),
          gaFootprint.trackCTA({
            event_category: S,
            event_action: "Dropout",
            event_label: k,
          }),
          "b" == k.toLowerCase() && s();
      }
      function o() {
        $body.trigger(FEEDBACK_PANEL_CONST.EVENT_FEEDBACK_OPEN),
          x
            ? (f.raty("setScore", x), d(A.rating_selected), c())
            : (f.raty("setScore", 0), d(A["default"])),
          g.html(t()),
          openColorbox({
            href: C,
            width: "800",
            fixed: !1,
            onClosed: function () {
              a();
            },
          }),
          gaFootprint.setStartTime(),
          gaFootprint.trackCTA({
            event_category: S,
            event_action: "Start",
            event_label: k,
          });
      }
      function r() {
        return (
          T.send(i()),
          l(),
          h(),
          gaFootprint.trackCTA({
            event_category: S,
            event_action: "Complete",
            event_label: k,
          }),
          !1
        );
      }
      function l() {
        getJSON(
          { url: set_happiness_rating_completed_url, data: {}, type: "POST" },
          {
            success: function () {
              current_user_profile.has_rated = !0;
            },
            failure: function () {},
          }
        );
      }
      function c() {
        var e, t;
        switch (x) {
          case 5:
            e = {
              question_text: "Please let us know, What went well?",
              entry_id: "entry." + feedback_entry_ids.checkbox.selected_5,
              options_array: [
                "Support",
                "Easy to use",
                "Report Card",
                "Analysis",
                "Saved Time and Effort",
              ],
            };
            break;
          case 4:
            e = {
              question_text: "Please let us know, What we could improve?",
              entry_id: "entry." + feedback_entry_ids.checkbox.selected_4,
              options_array: [
                "Support",
                "Ease of use",
                "Report Card",
                "Analysis",
                "Saving Time and Effort",
              ],
            };
            break;
          default:
            e = {
              question_text: "Please let us know, What went wrong?",
              entry_id: "entry." + feedback_entry_ids.checkbox["default"],
              options_array: [
                "Support",
                "Not easy to use",
                "Error in application",
                "Requirement not satisfied",
                "Time consuming",
              ],
            };
        }
        (t = _(e)),
          m.find(".question-wrapper").eq(0).html(t),
          m.find('input[type="checkbox"]').checkbox();
      }
      function h() {
        m.trigger("reset"), m.find(w).removeClass("selected"), n(undefined);
      }
      function d(e) {
        switch (e) {
          case A["default"]:
            v.hide(), b.prop("disabled", !0);
            break;
          case A.rating_selected:
            v.show(), b.prop("disabled", !1);
        }
      }
      function p(e) {
        k = e;
      }
      var u,
        f,
        g,
        m,
        v,
        b,
        y,
        _,
        k,
        x,
        C = "#feedback-panel",
        w = ".checkbox-icon",
        S = "Send Feedback",
        E = "Rate me",
        A = { default: "default", rating_selected: "rating_selected" },
        T = {
          content: "#feedback-response-content",
          send: function (e) {
            getJSON(
              { url: feedback_form_url, data: e, type: "POST" },
              {
                success: function (e) {
                  e.status ? T.success() : T.failure(e);
                },
                failure: function () {
                  T.success();
                },
              }
            ),
              T.loading();
          },
          loading: function () {
            showLoadingPanel(this.content);
          },
          success: function () {
            showSuccessPanel(this.content, { page_reload: !1 });
          },
          failure: function (e) {
            showFailureInline(this.source, e, T.content);
          },
        };
      return { init: e, open: o, setRating: n, setSource: p };
    }
    var n;
    return {
      getInstance: function (e) {
        return n || (n = new t(e)).init(), n;
      },
    };
  })();
$(document).ready(function () {
  Handlebars.registerHelper("grouped_each", function (e, t, n) {
    var i,
      s = "",
      a = [];
    if (t && 0 < t.length) {
      for (i = 0; i < t.length; i++)
        0 < i && i % e == 0 && ((s += n.fn(a)), (a = [])), a.push(t[i]);
      s += n.fn(a);
    }
    return s;
  });
});
var ABTesting = function (t) {
    function e() {
      var e = t.initValue;
      e ? i(e) : i(n());
    }
    function n() {
      return Math.round(Math.random()) ? s.A : s.B;
    }
    function i(e) {
      s.A.toLowerCase() === e.toLowerCase()
        ? (t.A_callback(s.A), t.onABSelected(s.A))
        : (t.B_callback(s.B), t.onABSelected(s.B));
    }
    var s = { A: "A", B: "B" };
    return { start: e };
  },
  RBUserSetting = (function () {
    function t(e) {
      function t() {
        (s = localStorage.getItem(a)), (s = JSON.parse(s)) || (s = {});
      }
      function n() {
        (s.enrolments = { append_courses: !1 }),
          localStorage.setItem(a, JSON.stringify(s));
      }
      function i() {
        return s.enrolments || {};
      }
      var s,
        a = "rb_user_" + e.user_id;
      return { init: t, getEnrolments: i, createAndSaveDefaults: n };
    }
    var n;
    return {
      getInstance: function (e) {
        return n || (n = new t(e)).init(), n;
      },
    };
  })();
