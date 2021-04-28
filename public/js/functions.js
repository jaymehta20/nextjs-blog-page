jQuery(function ($) {
  "use strict";
  /*
		Navigation
	*/
  var nagivation = function () {
    // show and hide
    var lastScroll = 0;
    var $header = $("header");
    $(window).on("scroll", function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll > lastScroll && currentScroll >= $header.height()) {
        $header.addClass("hide");
      } else {
        $header.removeClass("hide");
      }
      lastScroll = currentScroll;
    });

    // responsive
    $("header .nav-toggle").on("click", function () {
      $(this).html("Menu");
      $("header").toggleClass("nav-responsive");
      if ($("header").hasClass("nav-responsive")) {
        $(this).html("Close");
      }
    });

    $("header nav ul li.dropdown span").on("click", function () {
      var $parent = $(this).parent();
      if (!$("header").hasClass("nav-responsive")) return;

      if ($parent.hasClass("open")) {
        $parent.find("ul").slideUp(300);
        $parent.removeClass("open");
      } else {
        $("header nav ul li.dropdown div").removeClass("open");
        $("header nav ul li.dropdown div > ul").slideUp(300);
        $parent.addClass("open");
        $parent.find("ul").slideDown(300);
      }
    });
  };

  $(window).on("load");
  $(document).ready(function () {
    nagivation();
  });
});
