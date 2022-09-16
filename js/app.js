// This is for the hero slider

$(document).ready(function(){
  $('.fade').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });

  $(".facebook-social").hover( function () {

    if ($(".facebook-social-yellow").hasClass("hidden")) {
      $(".facebook-social-yellow").toggleClass("hidden");
      $(".facebook-social-gray").toggleClass("hidden");;
    } else {
      window.setTimeout(function () {
        $(".facebook-social-yellow").toggleClass("hidden");
        $(".facebook-social-gray").toggleClass("hidden");
      }, 50);
    }
  });
  $(".instagram-social").hover( function () {

    if ($(".instagram-social-yellow").hasClass("hidden")) {
      $(".instagram-social-yellow").toggleClass("hidden");
      $(".instagram-social-gray").toggleClass("hidden");
    } else {
      window.setTimeout(function () {
        $(".instagram-social-yellow").toggleClass("hidden");
        $(".instagram-social-gray").toggleClass("hidden");
      }, 50);
    }
  });
  $(".twitter-social").hover( function () {

    if ($(".twitter-social-yellow").hasClass("hidden")) {
      $(".twitter-social-yellow").toggleClass("hidden");
      $(".twitter-social-gray").toggleClass("hidden");
    } else {
      window.setTimeout(function () {
        $(".twitter-social-yellow").toggleClass("hidden");
        $(".twitter-social-gray").toggleClass("hidden");
      }, 50);
    }
  });
  $(".youtube-social").hover( function () {

    if ($(".youtube-social-yellow").hasClass("hidden")) {
      $(".youtube-social-yellow").toggleClass("hidden");
      $(".youtube-social-gray").toggleClass("hidden");
    } else {
      window.setTimeout(function () {
        $(".youtube-social-yellow").toggleClass("hidden");
        $(".youtube-social-gray").toggleClass("hidden");
      }, 50);
    }
  });

});





