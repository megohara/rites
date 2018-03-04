$(document).ready(function() {

// ---------------------------//
// Main Navigation
// ---------------------------//

    // Show megadrop down on hover
    $('.nav-item').mouseenter(function() {
        $(this).find('.sec-nav').addClass('show');
        $(this).siblings().find('.sec-nav').removeClass('show');
    });

    $( this ).find('.sec-nav').removeClass( 'show' );

    // Mobile menu nav trigger toggle menu
    $('.nav-trigger').click(function(e) {
        e.preventDefault();
        $('.prime-nav, .nav-item').toggleClass('show');
    });

// ---------------------------//
// Product Detail Page
// ---------------------------//
    // Show customer service blocks
    $('.care-link').click(function(e) {
        e.preventDefault();
        $(this).next().toggleClass('show');;
    });

    // Show more product details
    $('.more-details-a').click(function(e) {
        e.preventDefault();
        $(this).css('display', 'none');
        $('.item-details').toggleClass('show');;
    });

// ---------------------------//
// Product Listing Page
// ---------------------------//

    // Toggle Filter menu on hover
    $('.filter-container').find('.btn-dropdown').mouseenter(function () {
        $(this).next('.filter').addClass('show');
    });

    $('.filters-wrapper').mouseleave(function () {
        $('.filter').removeClass('show');
    });

    // Facet Selection 
    $('#filter-menu .chkbox-link').click(function(e) {
        e.preventDefault();
        $(this).find('.rts-chkbox').toggleClass('active');
    });

    $('.size-item').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');

        // on PDpage only want one size selected at a time
        if ($(this).parent('.size-picker')) {
            $(this).siblings().removeClass('active');
        }
    });

    // Sort by - only one selected at a time
    $('#sort-menu .chkbox-item').click(function(e){
        e.preventDefault();
        $(this).find('.rts-chkbox').addClass('active');
        $(this).siblings().find('.rts-chkbox').removeClass('active');
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
});

