$(document).ready(function() {
    $("#green").click(function() {
    	$(this).fadeOut('slow');
    });

    /* Selecting itens in a list without use classes or ids */
    $targetOne = $('li:nth-child(4)');
    $targetOne.fadeOut(6000);

    $targetTwo = $('li.test:last-child');
    $targetTwo.fadeOut(6000);

    /*  Creat variables in Jquery */
    var $orange = $('#orange');

    $orange.slideDown(3000);

    $('#buttonOne').click(function() {
        $('.vanish').fadeOut('slow');
    });

    $('#buttonTwo').click(function() {
        $('#blue').fadeOut('slow');
    });
    $('#buttonThree').click(function() {
        $('.pinkNew, .redNew').fadeTo(1500, 0.2);
    });
    $("#newbuttonThree").click(function() {
        $(".pinkNew, .redNew").fadeTo(1500, 1);
    })

    $('#buttonFour').on("click", function() {
		$('.pink, .red').toggleClass("new");
    });
});
