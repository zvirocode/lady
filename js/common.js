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
		start: function(){
			$(".slider").addClass("is-active");
		},
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
	  beforeShow : function() {
      var alt = this.element.find('img').attr('alt');
      this.inner.find('img').attr('alt', alt);
      this.title = alt;
    },
	  helpers: {
	    overlay: {
	      locked: false,
	      overlayShow: false,
	      overlayOpacity: 0
	    }
	  }
	});

	$('.js-slider-caro').flexslider({
		start: function(){
			$(".forus").fadeTo( "slow" ,1, function() {});
		},
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
		start: function(){
			$(".forus").fadeTo( "slow" ,1, function() {});
		},
		smoothHeight: true,
	  animation: "slide",
	  controlNav: false,
	  directionNav: false,
	  animationLoop: false,
	  slideshow: false,
	  sync: ".js-slider-caro"
	});


	// $( ".js-send-tooltip1" ).hover(
	//   function() {
	//     $( ".js-tooltip1" ).fadeIn("fast");
	//   },
	//   function () {
	//     $( ".js-tooltip1" ).fadeOut("fast");
	//   }
	// );
	// $('.tooltip__close').on('click', function() {
	//  $(this).parent().fadeOut("fast");
	// });

	// $( ".js-send-tooltip2" ).hover(
	//   function() {
	//     $( ".js-tooltip2" ).fadeIn("fast");
	//   },
	//   function () {
	//     $( ".js-tooltip2" ).fadeOut("fast");
	//   }
	// );
	// $( ".js-send-tooltip3" ).hover(
	//   function() {
	//     $( ".js-tooltip3" ).fadeIn("fast");
	//   },
	//   function () {
	//     $( ".js-tooltip3" ).fadeOut("fast");
	//   }
	// );
	// $( ".js-send-tooltip4" ).hover(
	//   function() {
	//     $( ".js-tooltip4" ).fadeIn("fast");
	//   },
	//   function () {
	//     $( ".js-tooltip4" ).fadeOut("fast");
	//   }
	// );
	// $( ".js-send-tooltip5" ).hover(
	//   function() {
	//     $( ".js-tooltip5" ).fadeIn("fast");
	//   },
	//   function () {
	//     $( ".js-tooltip5" ).fadeOut("fast");
	//   }
	// );

	// $('.js-send-tooltip1').on('click', function() {
	//  $( ".js-tooltip1" ).fadeIn("fast");
	// });
	// $('.js-send-tooltip2').on('click', function() {
	//  $( ".js-tooltip2" ).fadeIn("fast");
	// });
	// $('.js-send-tooltip3').on('click', function() {
	//  $( ".js-tooltip3" ).fadeIn("fast");
	// });
	// $('.js-send-tooltip4').on('click', function() {
	//  $( ".js-tooltip4" ).fadeIn("fast");
	// });
	// $('.js-send-tooltip5').on('click', function() {
	//  $( ".js-tooltip5" ).fadeIn("fast");
	// });

	$(function() {
    $( ".js-send-tooltip1" ).tooltip({
      position: {
        my: "left bottom-18",
        at: "left top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div сlass='js-tooltip1 tooltip tooltip_1'>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
	});
	$(function() {
    $( ".js-send-tooltip2" ).tooltip({
      position: {
        my: "left bottom-18",
        at: "left top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div сlass='js-tooltip2 tooltip tooltip_2'>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
	});
	$(function() {
    $( ".js-send-tooltip3" ).tooltip({
      position: {
        my: "left bottom-18",
        at: "left top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div сlass='js-tooltip3 tooltip tooltip_3'>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
	});
	$(function() {
    $( ".js-send-tooltip4" ).tooltip({
      position: {
        my: "left bottom-18",
        at: "left top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div сlass='js-tooltip4 tooltip tooltip_4'>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
	});
	$(function() {
    $( ".js-send-tooltip5" ).tooltip({
      position: {
        my: "left bottom-18",
        at: "left top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div class='js-tooltip5 tooltip tooltip_5'>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
	});
});


