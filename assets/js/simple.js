$(document).ready(function(){
    "use strict";
    // tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // End tooltip
    // Mega menu v1
    $('li:has(ul)').addClass('hasub');
    $('.navigation_res .hasub a').after('<i class="fa fa-plus icon-click"></i>');
    $('li.level2 .icon-click').addClass('icon-click-v2');
    $('.icon-click-v2').removeClass("icon-click");
    $(".menu-mobile .icon-click-v2").on('click', function(event){
        var menu_1 = $(".menu-mobile .icon-click-v2");
        $(".menu-mobile .menu-level-2").not($(this).next()).slideUp();
        $(menu_1).not($(this)).removeClass("active");
        $(menu_1).not($(this)).prev().removeClass("active");
        $(this).toggleClass("active");
        $(this).prev().toggleClass("active");
        $(this).next(".menu-level-2").slideToggle();
    });
    $(".menu-mobile .icon-click").on('click',function(){
        var menu_2 = $(".menu-mobile .icon-click");
        $(".menu-mobile li a.home").toggleClass("active");
        $(".menu-mobile .menu-level-1").not($(this).next()).slideUp();
        $(menu_2).not($(this)).removeClass("active");
        $(menu_2).not($(this)).prev().removeClass("active");
        $(this).toggleClass("active");
        $(this).prev().toggleClass("active");
        $(this).next(".menu-level-1").slideToggle();
    });
    $('.handle').on('click', function(event){
        event.stopPropagation();
        $('.navigation_res ul.nav_res').toggleClass('showing');
        $(this).toggleClass('showing_handle');
        $('body').toggleClass('bg-opacity');
        $('body').toggleClass('fixed');
        $('.content').toggleClass('res_content');
    });
    $('body').on('click',function(){
        $('.navigation_res  ul').removeClass('showing');
        $('.handle').removeClass('showing_handle');
        $('header').removeClass('bg-header-opacity');
        $('body').removeClass('bg-opacity');
        $('body').removeClass('fixed');
        $('.content').removeClass('res_content');
    });
    $('.navigation_res').on('click', function(event){
        event.stopPropagation();
    });
    // End mega menu v1
    // Slide
    $('.tp-banner').revolution(
        {
            delay:9000,
            startwidth:1920,
            startheight:590,
            hideThumbs:10,
            fullWidth:"on",
            forceFullWidth:"on",
        });
    autoplay:false
    autoplayTimeout:6000
    autoplayHoverPause:false
    // End slide
    //Owl customer
    var owl = $('.customer');
    owl.owlCarousel({
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
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
//            End owl customer
    //            Owl latest news
    var owl = $('.owl_latest_news');
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
                items:1,

            },

            600:{
                items:2,
            },

            1025:{
                items:2,
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
//            End owl latest news

    var owl = $('.testimonial');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
    // Back to top
    if($(".btn-top").length > 0){
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.btn-top').show();
                } else {
                    $('.btn-top').hide();
                }
            };
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.btn-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    // End back to top
});
