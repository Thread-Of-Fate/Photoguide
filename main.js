$(function(){

$('.gallery-slider').slick ({
	infinite: true,
	arrows: true,
	prevArrow: false,
	nextArrow: '<img class="slider-arrow-right-gallery slider-arrows__right" src="../img/arrow-right.svg" alt=""></img>',
	asNavFor: '.gallery-popup',
	slidesToShow: 1.010,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2800,
	 responsive: [
    {
      breakpoint: 1387,
      settings: {
        slidesToShow: 1,
				slidesToScroll: 1,
      }
    },
  ]
});

$('.gallery-popup').slick({
	slidesToShow: 5,
	slidesToScroll: 5,
	asNavFor: '.gallery-slider',
	arrows: false,

});

$('.reviews-slider').slick({
	slidesToShow: 1.025,
	slidesToScroll: 1,
	arrows: true,
	infinite: true,
	prevArrow: false,
	nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrow-right.svg" alt=""></img>',
	});

// $('.menu__btn').on('click', function(){
// 	$('.menu__list').slideToggle();
// });

});