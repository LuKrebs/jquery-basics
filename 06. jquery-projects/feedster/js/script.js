var main = function() {
	$(".notification").on('click', function() {
    $('.notification-menu').toggle();
  });
  
  $('.btn').on('click', function() {
    $(this).toggleClass('btn-like');
  });
};

$(document).ready(main);	