$(document).ready(function() {


/*function hoverView(target, hidden) {*/

   /* function hoverView() {
   $('#header-container').on('click', '#menu-btn', function() {
      $('#navigation').css('display', 'block');
      $(this).parent().css('color', 'white');


        return arr;
    }*/


    $('.chkbox-item').click(function(e) {

        if( $(this).hasClass("open") ) {
            $(this).removeClass("open").addClass("closed");
        } else {
            // if other menus are open remove open class and add closed
            $(this).siblings().removeClass("open").addClass("closed"); 
            $(this).removeClass("closed").addClass("open");
        }

});


    // Menu Toggle
   /* $('#header-container').on('click', '#menu-btn', function() {*/
      $('body').css('background-color', 'red');
      /*$(this).parent().css('color', 'white');*/

       // var span = ($(this).find('span').html() === 'MENU')
        //    ? 'CLOSE'
        //    : 'MENU';
        //$(this).find('span').text(span);

       // var src = ($(this).find('img').attr('src') === '/images/icon-menu.png')
        //    ? '/images/icon-menu-close.png'
        //    : '/images/icon-menu.png';
        //$(this).find('img').attr('src', src);



//$("#logo-container").click(function() {
   //  $('#about-container').css("display", "none" );
   //  $('html,body').animate({
     //     scrollTop: $(".container").offset().top}, 'fast');
  //});



});

