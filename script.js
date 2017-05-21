function main() {
   $('div').hide();
   $('div').fadeIn(2000);
   $('.fadeOut').fadeOut(3500);

   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').on('click', function() {
       $(this).toggle(1000);
   }); 
}

$(document).ready(main);