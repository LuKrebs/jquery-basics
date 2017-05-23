var main = function() {
	$('form').submit(function() {
		var firstName = $('#first').val();
		var lastName = $('#last').val();
		var email = $('#email').val();
		var password = $("#password").val();

		if (firstName === "") {
			var firstNameError = "Please enter your first name";
			$('.first-name-error').text(firstNameError);
		}
		if (lastName === "") {
			var lastNameError = "Please enter your last name";
			$('.last-name-error').text(lastNameError);
		}
		if (email === "") {
			var emailError = "Please enter your email address.";
			$('.email-error').text(emailError);
		}
		else if (email === "luciano.krebs@hotmail.com") {
			var emailError =  "This email is already taken.";
			$('.email-error').text(emailError);
		}
		if (password === "") {
			var passwordError = "Please enter a password.";
			$(".password-error").text(passwordError);
		}
		else if (password.length > 0 && password.length < 7) {
			var passwordError = "Short passwords are easy to guess. Try one with at least 8 characters.";
			$(".password-error").text(passwordError);
		}
	
		return false;
	});
};

$(document).ready(main);