var main = function() {
	$('.main').hide();
	$('.main').fadeIn(2000);
	$(".day").on('click', function() {
		$(this).next().toggle();
		var minusIcon = "glyphicon glyphicon-minus";
		var x = $(this).find('span').toggleClass(minusIcon);

	});
};

$(document).ready(main);