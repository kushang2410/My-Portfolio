$(document).ready(function () {
    $(".color-1").click(function (e) {
        e.preventDefault();
        $(":root").css({ "--main-green-color": "#28e98c" });
    });
    $(".color-2").click(function (e) {
        e.preventDefault();
        $(":root").css({ "--main-green-color": " #e4af12" });
    });
    $(".color-3").click(function (e) {
        e.preventDefault();
        $(":root").css({ "--main-green-color": "#fe6f1d" });
    });
    $(".color-4").click(function (e) {
        e.preventDefault();
        $(":root").css({ "--main-green-color": "#14c5fd" });
    });
    $(".color-5").click(function (e) {
        e.preventDefault();
        $(":root").css({ "--main-green-color": "#c0c0c0" });
    });
    $(".color-6").click(function (e) {
        e.preventDefault();
        $(":root").css({ "--main-green-color": "#1338f3" });
    });
    $(".color-7").click(function (e) {
        e.preventDefault();
        $(":root").css({ "--main-green-color": "#f31313" });
    });
    $(".color-8").click(function (e) {
        e.preventDefault();
        $(":root").css({ "--main-green-color": "#ff99cc" });
    });
});
$('span[id^="video"]').click(function (event) {
    event.preventDefault()

    var videoUrl = $(this).find("video").attr("src")

    $(".body-overlay source").attr("src", videoUrl)

    $(".body-overlay")[0].load()
})
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });