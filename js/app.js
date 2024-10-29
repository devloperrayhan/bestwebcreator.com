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
            items:2
        },
        1000:{
            items:3
        },
        1400:{
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
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        },
        1400:{
            items:7
        }
    }
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
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        },
        1400:{
            items:7
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
// Click event
$(".color-btn div").click(function(){
    $(".color-btn div").removeClass("shadow");
    $(this).addClass("shadow");
});
$(".size-btn span").click(function(){
    $(".size-btn span").removeClass("size-shadow");
    $(this).addClass("size-shadow");
});
$(".input-add .fa-solid.fa-plus").click(function(){
    let plus = $("#input").val()
        plus ++ ;
    $("#input").val(plus)
});
$(".input-add .fa-solid.fa-minus").click(function(){
    let minus = $("#input").val()
        minus -- ;
    $("#input").val(minus)
    if(minus < 1)
        $("#input").val(1)
});
// About Carousel js Start
var owl = $('.owl-carousel-About');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    // nav: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
});
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
// $(document).ready(function(){
    // setTimeout(function(){
        // $("#exampleModalToggle").modal('show');
    // },2000)
// });
$(".nav-item.dropdown .nav-link").click(function(){
    $(this).next(".dropdown-menu").slideToggle();
});
$(".nav-item.dropdown .nav-link").click(function(){
    $(this).next(".Home-Sub").slideToggle();
});
// Product Gallery js Start
$(".xzoom, .xzoom-gallery").xzoom({
    position: 'inside'
});