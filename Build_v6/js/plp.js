var filterOffset;
var sideBottom;
var listingEnd;


function initDesktopScroll() {
    var scrollTop = $(window).scrollTop();
         
    var shouldFix = scrollTop >= filterOffset;
    $('.listing-info, .filter-fix').toggleClass('active', shouldFix);

  //  bottom of filter block reaches bottom of product listing
    var sideFade = scrollTop + sideBottom >= listingEnd;
    $('.filter-fix').toggleClass('fade', sideFade);

    var shouldFade = scrollTop + filterOffset >= listingEnd;
    $('.listing-info').toggleClass('fade', shouldFade);
}

function initMobileScroll() {
    var scrollTop = $(window).scrollTop();

    var shouldFix = scrollTop >= filterOffset;
    $('.filters-wrapper').toggleClass('active', shouldFix); 

    var shouldFade = scrollTop + filterOffset >= listingEnd;
    $('.listing-info').toggleClass('fade', shouldFade); 
}

function initFixedFilters() {
    listingEnd = $('.products-wrapper').offset().top + $('.products-wrapper').height();

    if (matchMedia('screen and (min-width: 1024px)').matches) {
        filterOffset = $('.main-head').height() + 18;
        sideBottom = $('.filter-fix').offset().top + $('.filter-fix').height();

        $(window).off('scroll', initDesktopScroll);
        $(window).scroll(initDesktopScroll);
    }

    if (matchMedia('screen and (min-width: 768px) and (max-width: 1023px)').matches) {
        filterOffset = $('.main-head').height() + 47;
       
        $(window).off('scroll', initDesktopScroll);
        $(window).scroll(initDesktopScroll);
    }

    if (matchMedia('screen and (max-width: 767px)').matches) {   
        filterOffset = $('.filters-wrapper').offset().top - $('.main-head').height();
        
        $(window).off('scroll', initMobileScroll);
        $(window).scroll(initMobileScroll);
    }
}

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
    var button = $('.plp-sidebar .btn-add');

    if (facet.hasClass('active')) {  
        num ++;
        count.addClass('show');  
        button.css('display','inline-block');
        filter.find('.btn-dropdown').addClass('selected');
    } else {
        num --;

        if (num == 0) {
            count.removeClass('show');  
            button.css('display','none');
            filter.find('.btn-dropdown').removeClass('selected');
        }
    }

    return count.html(num);
}


function resetFilters() {
    $('.chkbox-link .rts-chkbox, .size-filter .size-item').removeClass('active');
    $('.count').removeClass('show').html(0); 
    $('.plp-sidebar .btn-add').css('display','none'); 
    $('.btn-dropdown').removeClass('selected');
}


$(document).ready(function() {


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
    $('.filter-footer #clear, .plp-sidebar .btn-add').click(resetFilters);

    // // Sort by filter - changing dropdown text once selection made
    $('#sort-menu').click('.chkbox-item', function (e) {
        e.preventDefault();
        var currentTarget = $(e.target);
        var description = currentTarget.find('.chkbox-link').html();

        $(this).siblings('.btn-dropdown').html(description);

        currentTarget.toggleClass('active');
        currentTarget.siblings().removeClass('active');
    });


    initFixedFilters();

});

$(window).resize(function(){
    initFixedFilters();
});
