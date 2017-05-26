var main = function() {
	$(".cart").on('click', function() {
		$(this).find('.dropdown-menu').toggle();
		$('.account .dropdown-menu').hide(); 
		$('.help .dropdown-menu').hide(); 
	});
	$(".account").on('click', function() {
		$(this).find('.dropdown-menu').toggle();
		$('.help .dropdown-menu').hide(); 
		$('.cart .dropdown-menu').hide(); 
	});
	$(".help").on('click', function() {
		$(this).find('.dropdown-menu').toggle();
		$('.cart .dropdown-menu').hide(); 
		$('.account .dropdown-menu').hide(); 
	});
};

$(document).ready(main);

