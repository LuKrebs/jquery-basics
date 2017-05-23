function main() {
    $('div').hide();
    $('div').slideDown("slow");
    $('.fadeOut').fadeOut(3000);
    

    $("div").mouseenter(function() {
        $(this).fadeTo("fast", 0.5);
        $(this).animate({
            height: '+=10px'
        });
    });
    $('div').mouseleave(function() {
        $(this).fadeTo('fast', 1);
        $(this).animate({
            height: '-=10px'
       }); 

    });
    $('div').click(function() {
        $(this).slideToggle(1000);
   }); 

}

$(document).ready(main);