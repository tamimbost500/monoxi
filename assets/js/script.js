(function($){


    //1. Data Background Set
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });


    $(".mnx-hero__slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut', 
        animateIn: 'fadeIn', 
        touchDrag: false, 
        mouseDrag: false,
    });
   

})(jQuery)