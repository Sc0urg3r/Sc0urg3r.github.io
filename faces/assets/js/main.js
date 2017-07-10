jQuery(function($) {
    'use strict';

    $(document).ready(function() {

        /*=======================================================
            // SmoothScroll Initialization
        ======================================================*/
        smoothScroll.init({
            speed: 1000,
            easing: 'easeInOutCubic',
            offset: 0,
            updateURL: true,
            callbackBefore: function(toggle, anchor) {},
            callbackAfter: function(toggle, anchor) {}
        });


        /*=======================================================
            // Counter Up Initialization
        ======================================================*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        /*=======================================================
            // App Screen Slider Magnific Popup
        ======================================================*/
        $('.app-screen').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'my-mfp-zoom-in',
            gallery: {
                enabled: true
            }
        });


        /*=======================================================
            Testimonial Slider
        ======================================================*/
        var owl = $("#owl-tm");
        owl.owlCarousel({
            singleItem: true,
            autoPlay: 5000,
            stopOnHover: true
        });


        /*=======================================================
            News on press Slider
        ======================================================*/

        var owl = $("#owl-press");
        owl.owlCarousel({
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1000, 4], //5 items between 1000px and 901px
            itemsTablet: [768, 3], //2 items between 600 and 0
            itemsMobile: [320, 1], // itemsMobile disabled - inherit from itemsTablet option
            stopOnHover: true,
            pagination: false
        });


        /*=======================================================
            Parallax Effects
        ======================================================*/

        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
        $('#home').parallax("30%", 0.4);
        $('#testimonial').parallax("30%", 0.4);
        $('#counter').parallax("30%", 0.4);
        $('#twitter').parallax("30%", 0.4);


        /*=======================================================
            Magnific Pop Up
        ======================================================*/
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'my-mfp-zoom-in',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*=======================================================
            Twitter Tweet API
        ======================================================*/
        $('.twitter-inner .tweet').twittie({
            username: 'riyadrir',
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div>',
            count: 1,
            loadingText: 'Loading!',
            apiPath: 'twitter/api/tweet.php',
        });

        if (navigator.userAgent.match(/Trident\/7\./)) {
            $('body').on("mousewheel", function() {
                event.preventDefault();
                var wd = event.wheelDelta;
                var csp = window.pageYOffset;
                window.scrollTo(0, csp - wd);
            });
        }


        /*=======================================================
            Mailchimp
        ======================================================*/
        $('#mc-form').ajaxChimp({
            url: 'http://codextree.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb'
                /* Replace Your AjaxChimp Subscription Link */
        });



    });


    $(window).load(function() { // makes sure the whole site is loaded

        "use strict";

        /*
        =======================================================
            // Preloader
        ======================================================
        */

        $('.preloader').delay(400).fadeOut('slow');
        $('.preloader ').fadeOut();

        /*
        =======================================================
            // Navbar Slide
        ======================================================
        */

        $(window).scroll(function() {
            if ($(window).scrollTop() > $("nav").height()) {
                $("nav.navbar-slide").addClass("show-menu");
            } else {
                $("nav.navbar-slide").removeClass("show-menu");
                $(".navbar-slide #appee-navbar-collapse").collapse({
                    toggle: false
                });
                $(".navbar-slide #appee-navbar-collapse").collapse("hide");
                $(".navbar-slide .navbar-toggle").addClass("collapsed");
            }
        });

        /*
        =======================================================
            //Wow js initialization
        ======================================================
        */

        var wow = new WOW({
            offset: 100, // distance to the element when triggering the animation (default is 0)
            mobile: false // trigger animations on mobile devices (default is true)
        });
        wow.init();


    })


});
