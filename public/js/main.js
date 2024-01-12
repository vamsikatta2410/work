/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
	"use strict";
	

	$('.tp-custom-accordion .accordion-items').on("click", function(){
		$(this).addClass('tp-faq-active').siblings().removeClass('tp-faq-active');
	}); 

	var windowOn = $(window)
	///////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load',function () {
		$('#preloader').fadeOut(500);
	});

	$(window).on('load', function () {

		$('#preloader').delay(350).fadeOut('slow');

		$('body').delay(350).css({ 'overflow': 'visible' });

	})


	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// 03. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tpoffcanvas__close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 05. Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

	////////////////////////////////////////////////////
	// 07. Nice Select Js
	$('select').niceSelect();


		///////////////////////////////////////////////
	// 05. wow animation
	if ($('.wow').length > 0) {
		var wow = new WOW(
			{
			mobile: true,
			}
		);
		wow.init();
		var windowOn = $(window);
	}
	

	gsap.registerPlugin(ScrollSmoother, ScrollToPlugin);

	if ($('#smooth-wrapper').length > 0) {
		///////////////////////////////////////////////////
		
		gsap.set('#smooth-wrapper', {
			position: "fixed",
		});



		let smoother = ScrollSmoother.create({
			wrapper : '#smooth-wrapper',
			content : '#smooth-content',
			smooth: .8,
			effects: true,
			pinType: "fixed",
			markers: true,
			pinReparent: true,
			pinSpacing: false    
		});
    }

	document.getElementById('smooth-wrapper').style.position = "fixed";
	document.getElementById('smooth-wrapper').style.inset = 0;
	

	if ($('.tp-banner__bg').length > 0) {

		gsap.from(".tp-banner__bg", {
			scale:1.2,
			duration:1.5
		});
   }

	if ($('.tp-header__area').length > 0) {
		gsap.set(".tp-header__area", {
			opacity: 0,
			y: '20px'
		});
		gsap.to(".tp-header__area", {
			opacity:1,
			y: '0px',
			delay: .8
		});
   }


	gsap.utils.toArray(".tp-banner__btn-box a").forEach(function(a) {
		a.addEventListener("click", function(e) {
			e.preventDefault();
			TweenMax.to(window, 2, {
				scrollTo: e.target.getAttribute("href")
			});
		});
	});


	var slider = new Swiper('.inner-page__slider-active', {
		slidesPerView: 7,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 7,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		a11y: false,
	});

	var slider = new Swiper('.inner-page__slider-active-2', {
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		a11y: false,
	});


	var slider = new Swiper('.testimonial-slider-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,


		// scrollbar
		scrollbar: {
		el: ".tp-scrollbar",
		clickable: true,
	    },


	});

	if ($('.tp-title-anim').length > 0) {
		// 25. Title Animation
		let splitTitleLines = gsap.utils.toArray(".tp-title-anim");
		splitTitleLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
			});
			const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -60, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
		});	
	}





})(jQuery);