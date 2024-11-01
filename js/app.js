
function preloader(){
    $("#preloader").delay(5000).fadeOut();
}
function offline(){
    $("#liveToast-offline.toast").toast("show")
}
function online(){
    $("#liveToast-online.toast").toast("show")
}
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
$(".input-add-1 .fa-solid.fa-plus").click(function(){
    let plus = $("#input").val()
        plus ++ ;
    $("#input").val(plus)
});
$(".input-add-1 .fa-solid.fa-minus").click(function(){
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
$(document).ready(function(){
    setTimeout(function(){
        $("#exampleModalToggle").modal('show');
    },7000)
});
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
$(".input-add-2 .fa-solid.fa-minus").click(function(){
    let minus_1 = $("#input-1").val()
    minus_1 --;
    $("#input-1").val(minus_1)
    if(minus_1 < 1)
        $("#input-1").val(1)
});
$(".input-add-2 .fa-solid.fa-plus").click(function(){
    let plus_1 = $("#input-1").val()
    plus_1 ++;
    $("#input-1").val(plus_1)
    
});
$(".input-add-3 .fa-solid.fa-minus").click(function(){
    let minus_2 = $("#input-2").val()
    minus_2 --;
    $("#input-2").val(minus_2)
    if (minus_2 < 1)
        $("#input-2").val(1)
});
$(".input-add-3 .fa-solid.fa-plus").click(function(){
    let plus_2 = $("#input-2").val()
    plus_2 ++;
    $("#input-2").val(plus_2)
});
$(".input-add-4 .fa-solid.fa-minus").click(function(){
    let minus_3 = $("#input-3").val()
    minus_3 --;
    $("#input-3").val(minus_3)
    if(minus_3 < 1)
        $("#input-3").val(1)
});
$(".input-add-4 .fa-solid.fa-plus").click(function(){
    let plus_3 = $("#input-3").val()
    plus_3 ++;
    $("#input-3").val(plus_3)
});
$(".close-btn_1").click(function() {
    $(".close-1").slideToggle();
});
$(".close-btn_2").click(function(){
    $(".close-2").slideToggle();
});
$(".close-btn_3").click(function(){
    $(".close-3").slideToggle();
});
$(".close-btn_4").click(function(){
    $(".close-4").slideToggle();
});
$(".close-btn_5").click(function(){
    $(".close-5").slideToggle();
});
