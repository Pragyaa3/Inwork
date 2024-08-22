function schoolInit() {
  setCelebrationHeight(),
    $("#wrapper").resize(function () {
      setCelebrationHeight();
    });
}
function setCelebrationHeight() {
  setTimeout(function () {
    var e = $("#wrapper").outerHeight();
    $("#celebration-bar").css("height", e),
      $(".maintenance-wrap img").css("height", e);
  }, 1e3);
}
$(function () {
  schoolInit();
});
