/*==================================
 Template Name: Sophia - Personal Portfolio Template
 Description: Personal Portfolio and Resume Template for Web Designer and Developer.
 Version: 1.0
 Author: https://themeforest.net/user/htmllover
 ==================================== */

/*=========== TABLE OF CONTENTS ===========
 1. preloader
 2. back to top
 3. client testimonial slider
 4. video popup
 5. portfolio details slider
 6. lightbox popup
 7. Portfolio Isotope initialization
 8. blog slider
 9. Particles effect
 ===========*/

jQuery(function ($) {

    'use strict';

    //Preloader
    $(window).ready(function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');

    });

    // jQuery for back to Top
    (function(){

        $('body').append('<div id="toTop"><span class="fa fa-angle-up"></span></div>');

        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());



    //testimonial
    $('.client-testimonial').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5500,
        autoplayStopOnLast: false
    });

    // Magnific Popup
    $('.video').magnificPopup({
        type: 'iframe'
    });



    //portfolio details item slider
    $('.portfolio-details-slider').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        dots: false,
        nav: true,
        autoplayTimeout:3400,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });



    //Lightbox popup
    $('.lightbox-gallery').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: 'title',
            verticalFit: true
        }
    });


    $('.lightbox-video').magnificPopup();

    $('.lightbox-product').magnificPopup({
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: 'title',
            verticalFit: true
        }
    });


    //Portfolio Isotope initialization
    $('#project-container').imagesLoaded( function() {
        var $portfolio = $('#project-container');
        $portfolio.isotope( function() {
            $portfolio.isotope({
                isOriginLeft: true
            });
            $portfolio.isotope();
        });

        // filter items
        $('.button-group').on( 'click', 'a', function(e) {
            e.preventDefault();
            var filterValue = $(this).attr('data-filter');
            $portfolio.isotope({ filter: filterValue });

            $('.button-group a').removeClass('active');
            $(this).closest('a').addClass('active');

        });
    });

    //blog slider
    $("#sliderBlog").owlCarousel({
        items: 3,
        dots: !1,
        margin: 15,
        rewind: !0,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

    var u = $("#sliderBlog"),
        p = $("#next"),
        m = $("#prev");
    p.on("click", function() {
        u.trigger("next.owl.carousel", [300])
    }); m.on("click", function() {
        u.trigger("prev.owl.carousel", [300])
    });


    // Particles effect in the "background" class
    $(".particles-bg").particleground({
        density: 13000,
        lineWidth: 0.2,
        lineColor: "#1b2796",
        dotColor: "#fff",
        parallax: false,
        proximity: 230
    });

}); // JQuery end
