$(document).ready(function() {
	$('#button').mouseenter(function() {
		$(this).css("opacity", "0.8");
		$(this).css("border-radius", "5px");
		$(this).css("cursor", "pointer");
		$(this).css("transition", "0.7s");
	});
	$("#button").mouseleave(function() {
		$(this).css("opacity", "1");
		$(this).css("border-radius", "0");
		$(this).css("transition", "0.7s");
	});

	$('#button').on('click', function() {
		var toAdd = $('input[name=checkListItem]').val();
		$('.list').append('<div class="item">' + toAdd + '</div>');
		document.getElementById('test').value = "";
	});

	$(document).on('click', '.item', function() {
		$(this).remove();
	});
});