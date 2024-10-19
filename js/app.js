$('.owl-carousel-1').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
// View Product Carousel js Start
var owl = $('.play-carousel');
owl.owlCarousel({
    items:6,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
// Logo Carousel js Start
var owl = $('.logo-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
// Product Gallery js Start
$(".xzoom, .xzoom-gallery").xzoom({
    position: 'inside'
});
// Click event
$(".color-btn div").click(function(){
    $(".color-btn div").addClass("shadow");
    $(this).removeClass("shadow");
})
$(".size-btn span").click(function(){
    $(".size-btn span").addClass("size-shadow");
    $(this).removeClass("size-shadow");
})