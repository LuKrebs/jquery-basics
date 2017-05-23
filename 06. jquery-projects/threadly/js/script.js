var main = function() {
	$('form').submit(function() {
		var comment = $("#comment").val();
		if (comment !== "") {
			var html = "<li>" + comment + "</li>";
			$('.comments').prepend(html);
			document.getElementById('comment').value = "";
		}

		return false;
	});
};

$(document).ready(main);