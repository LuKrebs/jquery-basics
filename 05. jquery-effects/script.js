$(document).ready(function() {
	
	// Quick revirew
	/* $('div#test').hide();
	$('img#elevator').animate({left: "+=450px"}, 1000);
	$('img#elevator').animate({left: "-=200px"}, 1000);
	$('img#elevator').animate({left: "+=170px"}, 1000);
	$('img#elevator').animate({left: "-=90px"}, 500);
	$('img#elevator').animate({left: "+=70px"}, 500);
	$('img#elevator').animate({left: "-=50px"}, 500); */

	for (var x = 210; x > 0; x -= 40) {
		$('img#elevator').animate({left: "+=" + x + "px"}, 500);
		$('img#elevator').animate({left: "-=" + x + "px"}, 500);
	}

	for (var y = 210; y > 0; y -= 40) {
		$('#car').animate({left: "+=" + y + "px"}, 500);
		$('#car').animate({left: "-=" + y + "px"}, 500);
	}

	// Introducing: Jquery UI

	$('.krypton').on('dblclick', function() {
		$(this).effect('explode');
	});
	$('.krypton').on('click', function() {
		$(this).effect('bounce', {times: 5}, 500);
	});
	$('.kryptonTwo').on('click', function() {
		$(this).effect('slide');
	});

	$('.krypton').draggable();
	$('.krypton').resizable();
	$('.kryptonTwo').draggable();
	$('.kryptonTwo').resizable();
	
	/*
	$('img#elevator').on('dblclick', function() {
		$(this).effect('explode');
	})
	$('img#elevator').on('click', function() {
		$(this).effect('bounce', {times: 5}, 500);
	})
	*/

	$("#luciano").accordion({collapsible: true, active: false});
	$("#luciano").sortable();

	$('#elevator').on('dblclick', function() {
		$(this).resizable();
		$(this).on('click', function() {
			$(this).draggable();
		});
	});
	$('#car').on('dblclick', function() {
		$("#top").resizable();
		$("#bottom").resizable();
		$("#fwheel").resizable();
		$(this).on('click', function() {
			$(this).draggable();
		});
	});

	$('ol.first').sortable();
	$('ol.second').selectable();

	$("#menu").accordion({collapsible: true, active: false});
	$("#menu").css('margin', '50px auto');
});