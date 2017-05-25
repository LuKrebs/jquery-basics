var main = function() {
	$('.more-btn').on('click', function() {
    	$(this).next().toggle();
    	$(".share").on('click', function() {
    		$(this).next().toggle();
    	});
  	});
  	$('.glyphicon-bell').on('click', function() {
  		$(this).toggleClass('active');
  	});
};

$(document).ready(main);