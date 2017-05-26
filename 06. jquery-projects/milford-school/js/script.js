var main = function() {
	$("#dropdownImage").on('click', function() {
		$(".dropdown-menu").toggle();
	});

	$('form').on('submit', function() {
		var email = $('#email').val();
		var password = $('#password').val();

		if (email === "") {
			$('.email-error').text('Please enter your email address');
		}
		else if (email !== "" && email !== "admin@miltonschool.com") {
			$('.email-error').text('Incorret email. Please, check your email');	
		}

		if (password === "") {
			$(".password-error").css('font-size', "16px");
			$(".password-error").text("Please enter a password");
		}
		else if (password !== "" && password !== "123456789") {
			$(".password-error").css('font-size', "14px");
			$(".password-error").text("Incorret password. Please, check your password");	
		}


		return false;
	});
};

$(document).ready(main);