var main = function() {
	$("#notificationImg").on('click', function() {
    	$('.notification-menu').toggle();
  	});

  	$("#notificationImg").on('mouseenter', function() {
  		$(this).css('cursor', 'pointer');
  	});

  
	$('.btn').on('click', function() {
		$(this).toggleClass('btn-like');
	});
};

$(document).ready(main);	