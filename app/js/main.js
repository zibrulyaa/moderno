$(function () {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    grid: false,
    prefix: "$",
  });
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "13px",
    readOnly: true,
  });
  $(".icon-th-list").on("click", function () {
    $(".products__item").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });
  $(".icon-th-large").on("click", function () {
    $(".products__item").removeClass("list");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "13px",
    readOnly: true,
  });
  $(".product-slider__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });

  $(".header__btn-menu").on("click", function () {
    $(".header__box").toggleClass("active");
  });

  var mixer = mixitup(".products__inner-box");
});
