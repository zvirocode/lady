$(document).ready(function() {

	$(".nav-overlay").click(function() {
		$('.navigation-hidden').removeClass('is-open');
		$('.nav-overlay').removeClass('is-active');
	});

	$('.navigation__point').click(function(){
		$('.navigation-hidden').addClass('is-open');
		$('.nav-overlay').addClass('is-active');
		return false;
	});

	$('.nav-foot__link').click(function(){
		$(this).parents(".nav-foot__item").find(".nav-foot__content").toggleClass('is-open');
		return false;
	});

	$('.btn-plus').click(function(){
		$(this).parents(".nav-foot__item").find(".nav-foot__content").toggleClass('is-open');
		return false;
	});

	$('.js-flexslider').flexslider({
		namespace: "slider__",
		smoothHeight: true,
		animation: "fade",
		selector: ".js-flexslider__in > .slider__cycle-item",
		directionNav: false,
		useCSS: false,
		controlNav: false,
		slideshow: false
	});

	$('.slider__cycle-prev').on('click', function(){
	    $('.js-flexslider').flexslider('prev')
	    return false;
	})

	$('.slider__cycle-next').on('click', function(){
	    $('.js-flexslider').flexslider('next')
	    return false;
	})

	$('.forus__prev').on('click', function(){
	    $('.js-slider').flexslider('prev')
	    return false;
	})

	$('.forus__next').on('click', function(){
	    $('.js-slider').flexslider('next')
	    return false;
	})

	$('.fancybox').fancybox({
	  // padding: 0,
	  helpers: {
	    overlay: {
	      locked: false
	    }
	  }
	});

});

$(window).load(function() {
  $('.js-slider-caro').flexslider({
    smoothHeight: true,
    animation: "slide",
    controlNav: false,
    directionNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    asNavFor: '.js-slider'
  });
   
  $('.js-slider').flexslider({
  	smoothHeight: true,
    animation: "slide",
    controlNav: false,
    directionNav: false,
    animationLoop: false,
    slideshow: false,
    sync: ".js-slider-caro"
  });
});



