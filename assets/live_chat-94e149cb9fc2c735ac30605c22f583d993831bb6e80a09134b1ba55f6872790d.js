var $iframe,
  Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date(),
  html =
    '<div id="message-icon" align="center"><img style="padding-top:6px" src="/assets/live_chat-c170b952e0b99861379306df088f77f6dbb6dc65935a5b6ff9033d21865f31a1.png" alt="Live chat" /></div>',
  style =
    "body #message-icon {display: none;position: absolute;z-index: 30;bottom: 0;left: -2px;background: #005a51 ;color: white;width: 40px;height: 40px;border-radius: 50%;display: none;}body.mobile #tawkchat-minified-wrapper, body.mobile #tawkchat-minified-container {width: 40px !important;}body.mobile #tawkchat-minified-container {background: none !important;box-shadow: none !important;}body.mobile #tawkchat-status-middle {display: none !important;}body.mobile #message-icon {display: block !important;}";
!(function () {
  var i = document.createElement("script"),
    t = document.getElementsByTagName("script")[0];
  (i.async = !0),
    (i.src = live_chat_source_url),
    (i.charset = "UTF-8"),
    i.setAttribute("crossorigin", "*"),
    t.parentNode.insertBefore(i, t),
    setTimeout(function () {
      ($iframe = $("#tawkchat-minified-iframe-element")).ready(function () {
        $iframe.contents().find("style").append(style),
          $iframe.contents().find("#tawkchat-minified-container").append(html),
          768 <= $(window).width()
            ? ($iframe.css({ bottom: 0, width: "275px !important" }),
              $iframe.css("max-width", "275px !important"),
              $iframe.css("min-width", "275px !important"),
              $iframe.removeClass("mobile"),
              $iframe.contents().find("body").removeClass("mobile"))
            : ($iframe.css({ bottom: "5em", width: "40px !important" }),
              $iframe.css("max-width", "40px !important"),
              $iframe.css("min-width", "40px !important"),
              $iframe.addClass("mobile"),
              $iframe.contents().find("body").addClass("mobile"));
      }),
        $(window).bind("resize", function () {
          768 <= $(window).width()
            ? ($iframe.css({ bottom: 0, width: "275px !important" }),
              $iframe.css("max-width", "275px !important"),
              $iframe.css("min-width", "275px !important"),
              $iframe.removeClass("mobile"),
              $iframe.contents().find("body").removeClass("mobile"))
            : ($iframe.css({ bottom: "5em", width: "40px !important" }),
              $iframe.css("max-width", "40px !important"),
              $iframe.css("min-width", "40px !important"),
              $iframe.addClass("mobile"),
              $iframe.contents().find("body").addClass("mobile"));
        });
    }, 1800);
})();
