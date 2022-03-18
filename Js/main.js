$(function () {
    'use strict';
    // Adjust Slider Height
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 90)
        {
           $('.navbar').addClass('navbar-shrink');
        }
        else{
           $('.navbar').removeClass('navbar-shrink');
        }
    });
    const videosrc=$('#frame').attr('src')
   $('.video-play-btn').on('click',function(){
       if($('.video-player').hasClass('open'))
       {
         $('.video-player').removeClass('open');
         $('#frame').attr('src','');
       }
       else{
        $('.video-player').addClass('open');
        $('#frame').attr('src',videosrc); 
       }
       $('.video-player-close').on('click',function(){
        $('.video-player').removeClass('open');
        $('#frame').attr('src','');
       })
   })
   $(".screenshoots-carousel").owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
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
   $('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   });
   $('.teams').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   });
   $('.question').click(function () {
       $(this).toggleClass("acordion-open");
       $(this).siblings(".answer").slideToggle();
  });
});