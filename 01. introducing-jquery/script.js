function main() {
    $('#blue').hide();
    $('#red').hide();
    $('#blue').slideDown(3000);
    // $('.fadeOut').fadeOut(3000);
    
    

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

    $('button').on('click', function(){
        $('#blue').toggle(1000);
        $('#red').toggle(2000);
    });

}

$(document).ready(main);