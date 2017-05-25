var main = function() {

	$(document).on('click', '#menuImg', function() {
		$('.dropdown-menu').toggle();
	});

	$('img').hover (
		function() {
			$(this).css('cursor', 'pointer');
		},
		function() {
			$(this).css("cursor", 'auto');
		}
	);
};
 
$(document).ready(main);



