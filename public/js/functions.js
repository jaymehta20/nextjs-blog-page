jQuery(function($) {
	"use strict";
	/*
		Works
	*/
	var works = function() {
		var $grid = $(".works-grid");
		if ($grid.length <= 0)
			return;

		var shuffle = new Shuffle($grid, {
			itemSelector: ".work-item",
			gutterWidth: $(".works-gutter").width(),
			speed: 500
		});

		$(".works .open-filters").on("click", function() {
			$(".fullscreen-filters").addClass("open");

			$("html, body").animate({
				scrollTop: $(this).offset().top - 48
			}, 400);
		});

		$(".works .close-filters").on("click", function() {
			$(".fullscreen-filters").removeClass("open");
		});

		$(".works .works-filters ul li").on("click", function() {
			var filtersValue = jQuery.parseJSON($(this).attr("data-group"));

			shuffle.filter(filtersValue);
			if (filtersValue.join("") === "*") {
				shuffle.filter();
			}

			$grid.find(".work-item").find(".animate").removeClass("appear");

			$(".works .open-filters").html($(this).clone().children().remove().end().text());

			$(".works .works-filters ul li").removeClass("current");
			$(this).addClass("current");
			$(".fullscreen-filters").removeClass("open");
		});


		$(".works .works-filters ul li").each(function() {
			var filterGroup = jQuery.parseJSON($(this).attr("data-group"));
			var counter = 0;

			$.each(filterGroup, function(index, value) {
				if (value === "*") {
					counter = $grid.find(".work-item").length;
				}
				$grid.find(".work-item").each(function() {
					var workGroup = jQuery.parseJSON($(this).attr("data-groups"));
					if (jQuery.inArray(value, workGroup) !== -1) {
						counter++;
					}
				});
			});

			$(this).find("span").text(counter);
		});

	}

	/*
		Navigation
	*/
	var nagivation = function() {
		// show and hide
		var lastScroll = 0;
		var $header = $("header");
		$(window).on("scroll", function() {
			var currentScroll = $(this).scrollTop();
			if (currentScroll > lastScroll && currentScroll >= $header.height()) {
				$header.addClass("hide");
			} else {
				$header.removeClass("hide");
			}
			lastScroll = currentScroll;
		});

		// responsive
		$("header .nav-toggle").on("click", function() {
			$(this).html("Menu");
			$("header").toggleClass("nav-responsive");
			if ($("header").hasClass("nav-responsive")) {
				$(this).html("Close");
			}
		});

		$("header nav ul li.dropdown span").on("click", function() {
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

	}

	/*
		Content carousel
	*/
	var carousel = function() {
		var $owl = $(".owl-carousel");
		$owl.owlCarousel({
			center: true,
			items: 2,
			margin: 120,
			dots: false,
			responsive: {
				1440: {
					margin: 120
				},
				1024: {
					margin: 64
				},
				768: {
					margin: 32
				},
				425: {
					margin: 16
				},
				375: {
					margin: 16
				}
			}
		});

		$(".content-slider .navigation .next-slide").on("click", function() {
			$owl.trigger("next.owl.carousel");
		});

		$(".content-slider .navigation .prev-slide").on("click", function() {
			$owl.trigger("prev.owl.carousel");
		});
	}

	/*
		Input focus
	*/
	var inputFocus = function() {
		$(".form-field input, .form-field textarea").on("focus", function() {
			$(this).parent().addClass("focused");
		}).blur(function() {
			$(this).parent().removeClass("focused");
		});
	}

	/*
		Animsition
	*/
	var animsition = function() {
		$(".wrap").animsition({
			inClass: "page-in",
			outClass: "page-out",
			inDuration: 400,
			outDuration: 400,
			linkElement: ".smooth-leave",
			loading: true,
			loadingParentElement: "body",
			loadingClass: "animsition-loading",
			loadingInner: "",
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: [
				"animation-duration",
				"-webkit-animation-duration"
			],
			overlay : false,
			overlayClass : "animsition-overlay-slide",
			overlayParentElement : "body",
			transition: function(url) {
				window.location.href = url;
			}
		});
	}

	$(window).on("load", works());
	$(document).ready(function() {
		nagivation();
		carousel();
		inputFocus();
		animsition();
	});
});
