$(document).ready(function() {
	
	// Quick revirew
	$('div#test').hide();
	$('img#elevator').animate({left: "+=150px"}, 1000);

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
		$('#elevator').resizable();
	});
	$('#car').on('dblclick', function() {
		$("#top").resizable();
		$("#bottom").resizable();
		$("#fwheel").resizable();
	});
	$('#elevator').draggable();

	$("#car").draggable();

	$('ol.first').sortable();
	$('ol.second').selectable();

	$("#menu").accordion({collapsible: true, active: false});
	$("#menu").css('margin', '50px auto');
});