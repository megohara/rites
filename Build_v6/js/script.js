$(document).ready(function() {

// ---------------------------//
// Main Navigation
// ---------------------------//

    // Show megadrop down on hover
    // $('.nav-item').mouseenter(function() {
    //     $(this).find('.sec-nav').addClass('active');
    //     $(this).siblings().find('.sec-nav').removeClass('active');
    // });

    $( this ).find('.sec-nav').removeClass( 'active' );

    // Mobile menu nav trigger toggle menu
    $('.nav-trigger').click(function(e) {
        e.preventDefault();
        $('.prime-nav').toggleClass('show');
        $(this).toggleClass('close');
        $('body').toggleClass('noscroll');
        $('.rts-overlay').toggleClass('is-visible');
        $('.sec-nav').removeClass('show');
        $('.prime-title').css('display', 'flex');
        $('.top-search').removeClass('active');
    });

    // Mobile open search form
    $('.search-trigger').click(function(e) {
        e.preventDefault();
        $('.top-search').toggleClass('active');
        $('.prime-nav').removeClass('show');
        $('.nav-trigger').removeClass('close');
    });

    if (matchMedia('only screen and (max-width: 768px)').matches) {
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
    // Product Listing Page
    // ---------------------------//

    //Fixing filter bar after scroll- Desktop only
    if (matchMedia('screen and (min-width: 768px)').matches) {
        var filterOffset = $('.listing-info').offset().top;

        $(window).scroll(function () {
          var scrollTop = $(window).scrollTop();
         
          var shouldFix = scrollTop >= filterOffset;
          $('.listing-info, .filter-fix').toggleClass('fixed', shouldFix);
        });
    }

    //Fixing filter bar after scroll- Desktop only
    if (matchMedia('screen and (max-width: 767px)').matches) {   var amountToScroll = $('.filters-wrapper').offset().top - $('.main-head').height();
        
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            var filterOffset = $('.filters-wrapper').offset().top - $('.main-head').height();

            var shouldFix = scrollTop >= filterOffset;
           // console.log($('.filters-wrapper').offset().top);
            $('.filters-wrapper').toggleClass('fixed', shouldFix);
        });
    }

    // Facet Selection 
    $('.filter-menu .chkbox-link').click(function(e) {
        e.preventDefault();
        var filter = $(this).closest('.filter-container');
        var filterActive = $(this).closest('.filter-container').find('.filter-active');
        var filterSpan = $(this).closest('.filter-container').find('.count')
        var extgCount = filterSpan.html();
        var chkbox = $(this).find('.rts-chkbox');
        
        chkbox.toggleClass('active');

        if (chkbox.hasClass('active')) {
            extgCount ++;
            filterActive.css('display', 'unset');
            filter.find('.btn-dropdown').addClass('selected');
        } else {
            extgCount --;
            if (extgCount == 0) {
                filterActive.css('display', 'none');
                filter.find('.btn-dropdown').removeClass('selected');
            }
        }

        var newCount = filterSpan.html(extgCount);
        console.log ()
    });

    // Size Facet Selection 
    $('.filter-menu .size-item').click(function(e) {
        e.preventDefault();
        var filterActive = $(this).closest('.filter-container').find('.filter-active');
        var filterSpan = $(this).closest('.filter-container').find('.count')
        var extgCount = filterSpan.html();
        
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            extgCount ++;
            filterActive.css('display', 'unset');
        } else {
            extgCount --;
            if (extgCount == 0) {
                filterActive.css('display', 'none');
            }
        }
        var newCount = filterSpan.html(extgCount);

    });

    $('#sort-menu .chkbox-item').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });

    // Sort by - only one selected at a time
    $('#sort-menu .chkbox-item').click(function(e){
        e.preventDefault();
        $(this).find('.rts-chkbox').addClass('active');
        $(this).siblings().find('.rts-chkbox').removeClass('active');
    });

    // Mobile open/close filter menu
    $('.nav-filter .mob-only').click(function(){
        $(this).parent('.nav-filter').addClass('active');
        $('body').toggleClass('noscroll');
    });

    $('.filter-close').click(function(){
        $(this).closest('.nav-filter').removeClass('active');
        $('body').toggleClass('noscroll');
    });





    // // Clear all filters
    $('.facet-footer').on('click', '#clear', function(e) {
        e.preventDefault();
        $(this).closest('.filter').find('.rts-chkbox, .size-item').removeClass('active');
    });

    // Close filter menu
    $('.facet-footer').on('click', '#close', function(e) {
        e.preventDefault();
        $(this).closest('.filter').removeClass('show');;
    });

//     // ---------------------------//
// // Product Detail Page
// // ---------------------------//
//     // Show customer service blocks
//     $('.care-link').click(function(e) {
//         e.preventDefault();
//         $(this).next().toggleClass('show');;
//     });

//     // Show more product details
//     $('.more-details-a').click(function(e) {
//         e.preventDefault();
//         $(this).css('display', 'none');
//         $('.item-details').toggleClass('show');;
//     });

    // $('.size-item').click(function(e) {
    //     e.preventDefault();
    //     $(this).toggleClass('active');
    // });

    // // on PDpage only want one size selected at a time
        // if ($(this).parent('.size-picker')) {
        //     $(this).siblings().removeClass('active');
        // }
});

