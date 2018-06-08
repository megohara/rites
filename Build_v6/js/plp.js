// var filterOffset;

// function initDesktopScroll() {
//     var scrollTop = $(window).scrollTop();
         
//     var shouldFix = scrollTop >= filterOffset;
//     $('.listing-info, .filter-fix').toggleClass('fixed', shouldFix);   
// }

// function initMobileScroll() {
//     var scrollTop = $(window).scrollTop();

//     var shouldFix = scrollTop >= filterOffset;
//     $('.filters-wrapper').toggleClass('fixed', shouldFix);  
// }

// function initFixedFilters() {
//     //Fixing filter bar after scroll- Desktop only
//     if (matchMedia('screen and (min-width: 768px)').matches) {
//         filterOffset = $('.listing-info').offset().top;

//         $(window).off('scroll', initDesktopScroll);
//         $(window).scroll(initDesktopScroll);
//     }

//     //Fixing filter bar after scroll- Desktop only
//     if (matchMedia('screen and (max-width: 767px)').matches) {   
//         filterOffset = $('.filters-wrapper').offset().top - $('.main-head').height();
        
//         $(window).off('scroll', initMobileScroll);
//         $(window).scroll(initMobileScroll);
//     }
// }

function filterTog() {
    $(this).closest('.nav-filter').toggleClass('active');
    $('body').toggleClass('noscroll');
}

var facet;

function facetSelect() {  
    facet.toggleClass('active');

    // Update filter count
    var filter = facet.closest('.filter-container');
    var count = filter.find('.count');
    var num = count.html();

    if (facet.hasClass('active')) {  
        num ++;
        count.addClass('show');  
        filter.find('.btn-dropdown').addClass('selected');
    } else {
        num --;

        if (num == 0) {
            count.removeClass('show');  
            filter.find('.btn-dropdown').removeClass('selected');
        }
    }

    return count.html(num);
}


function resetFilters() {
    $('.chkbox-link .rts-chkbox, .size-filter .size-item').removeClass('active');
    $('.count').removeClass('show').html(0);  
    $('.btn-dropdown').removeClass('selected');
}


$(document).ready(function() {

    // initFixedFilters();

// Mobile open/close filter menu
    $('.nav-filter .mob-only, .filter-close, #apply').click(filterTog);


// Filter - facet selection
    $('.filter-menu .chkbox-link').click(function (e) {
        e.preventDefault();
        facet = $(this).find('.rts-chkbox');
        facetSelect();
    });

    $('.size-filter .size-item').click(function (e) {
        e.preventDefault();
        facet = $(this);
        facetSelect();
    });


// Clear all filters
    $('.filter-footer #clear ').click(resetFilters);




    // // Sort by - changing dropdown text once selection made

    // $('#sort-menu').click('.chkbox-item', function (e) {
    //     e.preventDefault();
    //     var currentTarget = $(e.target);
    //     var name = currentTarget.attr('data-name');
    //     var description = currentTarget.find('.chkbox-link').attr('data-description');

    //     $(this).siblings('.btn-dropdown').html(description);

    //     currentTarget.toggleClass('active');
    //     currentTarget.siblings().removeClass('active');
    // });


});

// $(window).resize(function(){
//     initFixedFilters();
// });
