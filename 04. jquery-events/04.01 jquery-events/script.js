$(document).ready(function() {
    $('.nameForm').css("color", "black");

    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });

   $('#planet').on('click', function() {
      $(this).fadeOut("fast");
   });
   $('#planet').mouseenter(function() {
        $(this).addClass('red');
   });

   $('.dblclick').on("dblclick", function() {
   		$(this).fadeOut("fast");
   });

	$('.menuBar').hover (
		function() {
			$(this).addClass('active');
		},
		function() {
			$(this).removeClass("active");
		}
	);

	$('input#changeFocus').on('focus', function() {
		$(this).css("outline-color", "#F00");
	});

	$('body').keydown(function() {
		$('.movingMe').animate({left: "+=10px"}, 500);
	});

    $('body').keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img#mario').animate({left: "-=40px"}, 0.1);
				break;
			// Up Arrow Pressed
			case 38:
				// Put our code here
				$('img#mario').animate({top: "-=40px"}, 0.1);
				break;
			// Right Arrow Pressed
			case 39:
				// Put our code here
				$('img#mario').animate({left: "+=40px"}, 0.1);
				break;
			// Down Arrow Pressed
			case 40:
				// Put our code here
				$('img#mario').animate({top: "+=40px"}, 0.1);
				break;
		}
    });
});