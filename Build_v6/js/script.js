$(document).ready(function() {

    // Close banner on click
    $('.privacybanner').click('.banner-close', function() {
        $(this).closest('.banner').hide();
    });

    //Modal open
    $('.modal-launch').click(function(e) {
        e.preventDefault();
        console.log(this);
        $(this).siblings('.modal').addClass('modal-show');
    });

    //Close modal
    $('.modal-close').click(function() {
        $(this).closest('.modal').removeClass('modal-show');
    });


    // ---------------------------//
    // Main Navigation
    // ---------------------------//

    // Show megadrop down on hover
    // $('.nav-item').mouseenter(function() {
    //     $(this).find('.sec-nav').addClass('active');
    //     $(this).siblings().find('.sec-nav').removeClass('active');
    // });

    // $( this ).find('.sec-nav').removeClass( 'active' );

    // Mobile open search form
    $('.search-trigger').click(function(e) {
        e.preventDefault();
        searchToggle();

        $(document.body).on('click.searchHide', function(){
            var $body = $(this);

            if(!$(event.target).closest('header').length) {
                if($('.top-search').is(":visible")) {
                    searchToggle();
                }

                $body.off('click.searchHide');
            }        
        });
    });

    if (matchMedia('only screen and (max-width: 1023px)').matches) {
        // Mobile menu nav trigger toggle menu
        $('.nav-trigger').click(function(e) {
            e.preventDefault();
            menuToggle();

            $(document.body).on('click.menuHide', function(){
                var $body = $(this);

                if(!$(event.target).closest('header').length) {
                    if($('.prime-nav').is(":visible")) {
                        menuToggle();
                    }

                    $body.off('click.menuHide');
                }        
            });
        }); 


        // Mobile open customer care footer - removed from site for now
        $('.info-assist').click(function(e) {
            e.preventDefault();
            $('.mob-cust-serv').toggleClass('show');
        });

        // Mobile menu Show level 2 menu/ submenu 
        $('.l2-link').click(function(e) {
            e.preventDefault();
            $(this).parent('.nav-item').find('.sec-nav').addClass('show');
            $('.prime-title').css('display', 'none');
        });

        $('.go-back').click(function(e) {
            $(this).closest('.sec-nav').removeClass('show');
            $('.prime-title').css('display', 'flex');
        });   
    }

    // ---------------------------//
    // Customer Care
    // ---------------------------//

    // Customer care mobile submenu toggle show
    if (matchMedia('only screen and (max-width: 767px)').matches) {

        $('.page-title').click(function(e) {
            e.preventDefault();
            $('.summary-wrapper').toggleClass('hide');
            $('.submenu-overlay').toggleClass('is-visible');

            $('.submenu-overlay').click(function(){

                 $('.summary-wrapper').addClass('hide');
                $('.submenu-overlay').removeClass('is-visible');
            });
        }); 
    }

    // FAQ - Toggle open/close question & answer
    $('.cc-question').on('click', function() {
        $(this).siblings('.cc-answer').toggleClass('show');
        $(this).find('.icon-more').toggleClass('rotate');
    });


    // ---------------------------//
    // Product Detail Page
    // ---------------------------//

    $('.pdp-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ]
    });

    $('.control').click(function (e) {
        e.preventDefault();
        $('.control').toggleClass('active');
        $('.tab-item').toggleClass('active');
    });

    $('.size-picker .size-item').click( function() {
        var size = $(this);

        if (size.parent('.size-picker') && !size.hasClass('outofstock')) {
         size.toggleClass('active');
          size.siblings().removeClass('active');
        }
    });


    // Mobile - Show shipping details on click
    $('.more-details-a').click(function() {
        $(this).toggleClass('active');
        $(this).parent('.tab-item').find('.tab-item-sub').toggleClass('show');
    });

    // Add item to bag - Show success message
    $('.add-bag').click( function(e) {
        e.preventDefault();
        $('.bag-success').show().delay(2500).fadeOut();
    });

    // ---------------------------//
    // Checkout
    // ---------------------------//

    $('.bg-question, .tooltext').click(function() {
        $('.tooltext').toggle();
    });

    $('.billing-same').click(function() {
        $('.edit-billing').toggle();
    });

    $('.pay-tab-radio').click(function(){
        $('.pay-tab-opt').toggle();
    });

    $('.add-new-btn').click(function(e){
        e.preventDefault();
        $(this).hide().siblings('.add-new-wrap').show();
        $(this).siblings('.saved-opts').hide();
    });

    $('.cancel-link').click(function(e){
        e.preventDefault();
        var parent = $(this).parent('.add-new-wrap');
        parent.toggle().siblings('.saved-opts').show().siblings('.add-new-btn').show();
    });   

});
