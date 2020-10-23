$(document).ready(function(){
    "use strict";
    // tittle tooltip
    $("[data-toggle='tooltip']").tooltip();
    // End tittle tooltip
    //mega menu mobile v2
        $("li:has(ul)").addClass("hasub");
        $(".navigation_res li.hasub a").after("<i class='fa fa-plus icon-click'></i>");
        $("li.level2 .icon-click").addClass("icon-click-v2");
        $(".navigation_res li.sales .menu-level-1 i").hide();
        $(".icon-click-v2").removeClass("icon-click");
        $(".menu-mobile .icon-click-v2").on("click",function(event){
            var menu = $(".menu-mobile .icon-click-v2");
            $(".menu-mobile .menu-level-2").not($( this ).next()).slideUp();
            $(menu).not($( this )).removeClass("active");
            $(menu).not($( this )).prev().removeClass("active");
            $( this ).toggleClass("active");
            $( this ).prev().toggleClass("active");
            $( this ).next(".menu-level-2").slideToggle();
        });
        $(".menu-mobile .icon-click").on("click",function(){
            var menu2 = $(".menu-mobile .icon-click");
            $(".menu-mobile li a.home").toggleClass("active");
            $(".menu-mobile .menu-level-1").not($( this ).next()).slideUp();
            $(menu2).not($( this )).removeClass("active");
            $(menu2).not($( this )).prev().removeClass("active");
            $( this ).toggleClass("active");
            $( this ).prev().toggleClass("active");
            $( this ).next(".menu-level-1").slideToggle();
        });
        $(".handle_v2").on("click", function(event){
            event.stopPropagation();
            $(".navigation_res ul.nav_res").toggleClass("showing");
            $( this ).toggleClass("showing_handle_v2");
            $( this ).toggleClass("showing_handle_v3");
            $("body").toggleClass("bg-opacity");
            $("body").toggleClass("fixed");
            $(".content").toggleClass("res_content");

        });
        $("body").on("click",function(){
            $(".navigation_mobile_v2  ul").removeClass("showing");
            $(".handle_v2").removeClass("showing_handle_v2");
            $(".handle_v2").removeClass("showing_handle_v3");
            $("header").removeClass("bg-header-opacity");
            $("body").removeClass("bg-opacity");
            $(".content").removeClass("res_content");
        });
        $(".navigation_mobile_v2").on("click", function(event){
            event.stopPropagation();
        });
    //end mega menu mobile v2
    // Begin testimonial
    var owl = $(".testimonial");
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
// End testimonial

// Begin list grid 04 shop grid
    $(".nav_fillter_bar .largeGrid").on("click",function () {
        $(".products_04_shopgrid .border_products .blog").addClass("fullwidth");
    });
// End list grid 04 shop grid

    if($(".btn-top").length > 0){
        $(window).scroll(function () {
            var e = $(window).scrollTop();
            if (e > 300) {
                $(".btn-top").show();
            } else {
                $(".btn-top").hide();
            }
        });
        $(".btn-top").on("click",function () {
            $("body,html").animate({
                scrollTop: 0
            });
        });
    }
// End btn top
    // Slide main
    if($(".tp-banner-container").length > 0){
    $(".tp-banner").revolution(
        {
            delay:9000,
            startwidth:1920,
            startheight:590,
            hideThumbs:10,
            fullWidth:"on",
            forceFullWidth:"on",
        });
        autoplay:false;
        autoplayTimeout:6000;
        autoplayHoverPause:false;
    }
    // slide main
    var owl = $(".slide_main");
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
    $(".play").on("click",function(){
        owl.trigger("play.owl.autoplay",[1000]);
    });
    $(".stop").on("click",function(){
        owl.trigger("stop.owl.autoplay");
    });
    // End slide main
    var owl = $(".customer");
    owl.owlCarousel({
        items:6,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },

            480:{
                items:3,

            },

            767:{
                items:4,
            },

            1025:{
                items:6,
            }
        }
    });
    $(".play").on("click",function(){
        owl.trigger("play.owl.autoplay",[1000]);
    });
    $(".stop").on("click",function(){
        owl.trigger("stop.owl.autoplay");
    });
    //Owl latest news
    var owl = $(".owl_latest_news");
    owl.owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },

            480:{
                items:2,

            },

            600:{
                items:2,
            },
            700:{
                item:3,
            },

            1025:{
                items:3,
            }
        }
    });
    $(".play").on("click",function(){
        owl.trigger("play.owl.autoplay",[1000]);
    });
    $(".stop").on("click",function(){
        owl.trigger("stop.owl.autoplay");
    });
    //End owl latest news
    var owl = $(".slide_main_v3");
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
    });
    $(".play").on("click",function(){
        owl.trigger("play.owl.autoplay",[1000]);
    });
    $(".stop").on("click",function(){
        owl.trigger("stop.owl.autoplay");
    });
    if($(".tp-banner-container").length >0){
        $(".tp-banner-v3").revolution(
            {
                delay:9000,
                startwidth:1175,
                startheight:590,
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on"
            });
        autoplay:false;
        autoplayTimeout:6000;
        autoplayHoverPause:false;
        var owl = $(".product_best");
        owl.owlCarousel({
            items:1,
            nav:true,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });
    }
    var owl = $(".pro_best_v3");
    owl.owlCarousel({
        nav:true,
        loop:true,
        margin:30,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },

            480:{
                items:2,
            },

            767:{
                items:3,
            },

            1025:{
                items:4,
            }
        }

    });
    $(".play").on("click",function(){
        owl.trigger("play.owl.autoplay",[1000]);
    });
    $(".stop").on("click",function(){
        owl.trigger("stop.owl.autoplay");
    });
    // Page faq
    $(".toggle-content").hide();
    $(".toggle-content:first").show();
    $("ul.tabs li:first").addClass("active");
    $("ul.toggle-controls li a").on("click",function() {
        $("ul.toggle-controls li a").removeClass("active");
        $(this).addClass("active");
        $(".toggle-content").hide();
        var activeTab = $(this).attr("href");
        $("#"+activeTab).slideToggle();
    });
    // End page faq
    // Product detail
    if($(".product-img-box").length > 0 ){
        $("a[data-rel^='prettyPhoto']").prettyPhoto({hook: "data-gal"});// pretty Photo
    }
    $("#show").on("click",function(){
        $(".form-review").slideToggle();
    });
    if( $(".quantity" ).length > 0 ) {
        var form_cart = $( "form .quantity" );
        form_cart.prepend( "<span class='minus'><i class='fa fa-minus'></i></span>" );
        form_cart.append( "<span class='plus'><i class='fa fa-plus'></i></span>" );

        var minus = form_cart.find( $( ".minus" ) );
        var plus  = form_cart.find( $( ".plus" ) );

        minus.on( "click", function(){
            var qty = $( this ).parent().find( ".qty" );
            if ( qty.val() <= 1 ) {
                qty.val( 1 );
            } else {
                qty.val( ( parseInt( qty.val(), 10 ) - 1 ) );
            }
        });
        plus.on( "click", function(){
            var qty = $( this ).parent().find( ".qty" );
            qty.val( ( parseInt( qty.val(), 10 ) + 1 ) );
        });
    }
    // End product detail
    // sidebar
    if($(".list-unstyled ").length > 0){
        $('li:has(ul)').addClass('has-icon');
        $("ul.list-unstyled li.has-icon i").on("click",function(){
            $(this).next().slideToggle();
            $(this).toggleClass("active");
            $(this).parent().toggleClass("active");
        });
    }
    if($(".f-price").length > 0){
        (function($) {

            "use strict";

            /*  [ Filter by price ]

             - - - - - - - - - - - - - - - - - - - - */

            $('#slider-range').slider({

                range: true,

                min: 0,

                max: 500,

                values: [29, 399],

                slide: function (event, ui) {

                    $('#amount').text('$' + ui.values[0] + ' - $' + ui.values[1]);

                }

            });

            $('#amount').text('$' + $('#slider-range').slider('values', 0) + ' - $' + $('#slider-range').slider('values', 1));

        })(jQuery);
    }
    // End sidebar
});