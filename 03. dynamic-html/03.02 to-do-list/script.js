$(document).ready(function() {
	$('#button, #buttonRemove').mouseenter(function() {
		$(this).css("opacity", "0.8");
		$(this).css("border-radius", "5px");
		$(this).css("cursor", "pointer");
		$(this).css("transition", "0.7s");
	});
	$("#button, #buttonRemove").mouseleave(function() {
		$(this).css("opacity", "1");
		$(this).css("border-radius", "0");
		$(this).css("transition", "0.7s");
	});

	$('#button').on('click', function() {
		var toAdd = $('input[name=checkListItem]').val();
		if (toAdd !== "") {
			$('.list').append('<div class="item">' + toAdd + '</div>');
			document.getElementById('test').value = "";
		}
	});

	$(document).on('click', '.item', function() {
		$(this).toggleClass('selected');
		alert($(this).attr('class'));
	});

	$('#buttonRemove').on('click', function() {
		var x = $(".item").attr('class');
		if (x === "item selected") {
			$(".selected").remove();
		}
	});
});