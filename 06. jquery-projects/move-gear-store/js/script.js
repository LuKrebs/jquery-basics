var main = function() {
	$("#test").click(function() {
		$('.dropdown-menu').toggle();
	});

	$('#accordion').accordion();
};

$(document).ready(main);