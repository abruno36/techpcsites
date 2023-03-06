/*
Author       : Hash Theme.
Template Name: Beson || Creative Portfolio HTML5 Digital Agency Template
Version      : 1.0
*/
/*=============================================
Table Of Contents
================================================
1. PRELOADER JS
2. BOOTSTRAP TOOLTIP 
3. MENU JS
4. HOME SLIDER JS 
5. FEATURED PROJECT SLIDER
6. TESTIMONIAL SLIDER 
7. TEAM SLIDER
8. BLOG SLIDER   
9. PARTNER LOGO SLIDER 
10. SECTION BACKGROUND JS
11. COUNTDOWN JS
12. TAB JS 
13. GOOGLE MAP
14. MIXITUP JS
15. VENOBOX JS
16. WOW JS

Table Of Contents end
 ================================================
 */
(function($) {
    'use strict';

    jQuery(document).on('ready', function() {

        /* 1. PRELOADER JS */

        $(window).on('load', function() {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });

        /*END PRELOADER JS*/


        /* 2. BOOTSTRAP TOOLTIP  */

        $('[data-toggle="tooltip"]').tooltip();

        /* END BOOTSTRAP TOOLTIP  */


        /* 3. MENU JS*/

        $('a.page-scroll').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.main-menu').addClass('menu-animation');
            } else {
                $('.main-menu').removeClass('menu-animation');
            }
        });

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        /* END MENU JS */

        /* 4. START SLIDER JS */
        $('.carousel').carousel({
            interval: 6000,
            pause: 'false',
        });



        /* 5. FEATURED PROJECT SLIDER */

        $('.featured-pro').owlCarousel({
            autoPlay: true, //Set AutoPlay to 3 seconds
            items: 5,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            pagination: false
        });

        /* END TESTIMONIAL SLIDER  */


        /* 6. TESTIMONIAL SLIDER  */

        $('.testimonial-slider').owlCarousel({
            autoPlay: false,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            pagination: true
        });

        /* END TESTIMONIAL SLIDER  */


        /* 7. TEAM SLIDER  */

        $('.team-slider').owlCarousel({
            autoPlay: false, //Set AutoPlay to 3 seconds
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 1],
            pagination: true
        });

        /* END TEAM SLIDER  */

        /* 8. BLOG SLIDER  */

        $('.blog-slider').owlCarousel({
            autoPlay: true, //Set AutoPlay to 3 seconds
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 1],
            pagination: true
        });

        /* END BLOG SLIDER   */

        /* 9. PARTNER LOGO SLIDER */
        $('.client').owlCarousel({
            autoPlay: true, //Set AutoPlay to 3 seconds
            items: 6,
            itemsDesktop: [1199, 6],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 4],
            pagination: false
        });

        /* END PARTNER LOGO */



        /* 10. SECTIONS BACKGROUNDS JS */

        var pageSection = $("section");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /* END SECTIONS BACKGROUNDS */



        /* 11. COUNTDOWN JS */
        $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
        /* END COUNTDOWN JS */


        /* 12. TAB JS */
        $('ul.tabs li').on('click', function(e) {
                var tab_id = $(this).attr('data-tab');

                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            })
            /* 12. TAB JS  */





    });


    /* 14. MIXITUP JS */

    $('.portfoli-items').mixItUp();

    /* END MIXITUP JS */


    /* 15. VENOBOX JS  */

    $('.venobox-pro').venobox({
        numeratio: true,
        infinigall: true
    });

    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title',
        infinigall: true
    });

    /* 15. END  VENOBOX JS */


    /* 15. WOW JS  */

    new WOW().init();


    /* 15. END WOW JS */



})(jQuery);