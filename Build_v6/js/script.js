$(document).ready(function() {

    // Close banner on click
    $('.privacybanner').click('.banner-close', function() {
        $(this).closest('.banner').hide();
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

    // $('.size-item').click(function(e) {
    //      e.preventDefault();
    //      $(this).toggleClass('active');

    //      // on PDP oage only want one size selected at a time
    //      if ($(this).parent('.size-picker')) {
    //         $(this).siblings().removeClass('active');
    //     }
    // });

    // Mobile - Show shipping details on click
    $('.more-details-a').click(function() {
        $(this).toggleClass('active');
        $(this).parent('.tab-item').find('.tab-item-sub').toggleClass('show');
    });


    //     // Show more product details
//     $('.more-details-a').click(function(e) {
//         e.preventDefault();
//         $(this).css('display', 'none');
//         $('.item-details').toggleClass('show');;
//     });


     // initFixedFilters();


    // ---------------------------//
    // Product Listing Page
    // ---------------------------//

    // Facet Selection 
    // $('.filter-menu .chkbox-link').click(function(e) {
    //     e.preventDefault();
    //     var filter = $(this).closest('.filter-container');
    //     var filterActive = $(this).closest('.filter-container').find('.filter-active');
    //     var filterSpan = $(this).closest('.filter-container').find('.count')
    //     var extgCount = filterSpan.html();
    //     var chkbox = $(this).find('.rts-chkbox');
        
    //     chkbox.toggleClass('active');

    //     if (chkbox.hasClass('active')) {
    //         extgCount ++;
    //         filterActive.css('display', 'unset');
    //         filter.find('.btn-dropdown').addClass('selected');
    //     } else {
    //         extgCount --;
    //         if (extgCount == 0) {
    //             filterActive.css('display', 'none');
    //             filter.find('.btn-dropdown').removeClass('selected');
    //         }
    //     }

    //     var newCount = filterSpan.html(extgCount);
    //     console.log ()
    // });




    // });

    // $('.filter-menu .size-item').click(function(e) {
    //     e.preventDefault();
    //     var filterActive = $(this).closest('.filter-container').find('.filter-active');
    //     var filterSpan = $(this).closest('.filter-container').find('.count')
    //     var extgCount = filterSpan.html();
        
    //     $(this).toggleClass('active');

    //     if ($(this).hasClass('active')) {
    //         extgCount ++;
    //         filterActive.css('display', 'unset');
    //     } else {
    //         extgCount --;
    //         if (extgCount == 0) {
    //             filterActive.css('display', 'none');
    //         }
    //     }
    //     var newCount = filterSpan.html(extgCount);

    // });

});
