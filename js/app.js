$(".toast-container #liveToast-offline button").click(function(){
    location.reload();
});
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
$(".table-row td i.lnr.lnr-cross").click(function() {
    $(this).parent().parent().fadeOut()
});
$(".data-price p i.lnr.lnr-cross").click(function(){
    $(this).parent().parent().parent().parent().parent().parent().fadeOut();
});
$(".input-add .fa-solid.fa-minus").click(function(){
    let input = $(this).next()
    let minus = input.val()
    minus --;
    input.val(minus)
    if (minus < 1){
        input.val(1)
    }
});
$(".input-add .fa-solid.fa-plus").click(function(){
    let input = $(this).prev()
    let plus = input.val()
    plus ++;
    input.val(plus)
});
$("#add-new-product #add-button").click(function(){
    let add_name = $("#add_name").val()
    let add_number = $("#add_number").val()
    // let add_file = $("#add_file").val()
    let add_link = $("#add_link").val()
    $("#a_dd-input").after(`
        
                <tr class="table-row">
                    <td scope="row">
                      <div class="img-cart-in-table">
                        <a href="#"><img class="img-style" src="${add_link}" alt="ERROR"></a>
                      </div>
                    </td>
                    <td><a href="#">${add_name}</a></td>
                    <td>$68.00</td>
                    <td>
                      <div class="input-add">
                        <i class="fa-solid fa-minus user-select-none"></i>
                        <input value="${add_number}" id="input" min="0">
                        <i class="fa-solid fa-plus user-select-none"></i>
                      </div>
                    </td>
                    <td>$82.00</td>
                    <td><i class="lnr lnr-cross"></i></td>
                  </tr>
            `)
});
$("#add-new-product #add-button_2").click(function(){
    let add_name = $("#add_name").val()
    let add_number = $("#add_number").val()
    // let add_file = $("#add_file").val()
    let add_link = $("#add_link").val()
    $("#a_dd-input_2").after(`
        
                <div class="container mt-5">
              <div class="row">
                <div class="col-12">
                  <div class="phone-cart-img">
                    <img src="${add_link}" alt="ERROR">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="phone-cart-data mt-3">
                    <div class="data-name">
                      <p>Product</p>
                    </div>
                    <div class="data-price">
                      <p>${add_name}</p>
                    </div>
                  </div>
                  <div class="phone-cart-data">
                    <div class="data-name">
                      <p>Price</p>
                    </div>
                    <div class="data-price">
                      <p><span>$82.00</span></p>
                    </div>
                  </div>
                  <div class="phone-cart-data" style="padding-top: 0px;">
                    <div class="data-name">
                      <p style="padding-top: 23%;">Quantity</p>
                    </div>
                    <div class="data-price">
                      <p>
                        <div style="margin-right: 30px;" class="input-add">
                        <i class="fa-solid fa-minus user-select-none"></i>
                        <input value="${add_number}" id="input" min="0">
                        <i class="fa-solid fa-plus user-select-none"></i>
                      </div>
                    </p>
                    </div>
                  </div>
                  <div class="phone-cart-data">
                    <div class="data-name">
                      <p>Total</p>
                    </div>
                    <div class="data-price">
                      <p><span>$52.00</span></p>
                    </div>
                  </div>
                  <div class="phone-cart-data" style="border-bottom: 1px solid var(--card-align-icon-border);">
                    <div class="data-name">
                      <p>Remove</p>
                    </div>
                    <div class="data-price">
                      <p><i class="lnr lnr-cross close-btn_1_1"></i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `)
});