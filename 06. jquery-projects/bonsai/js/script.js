var main = function() {
  $('#top-text').on('keyup', function() {
    var test = $(this).val();
	$('.top-caption').text(test);
	if (test === "")	 {
		$('.top-caption').text("U say something?");
	}
  });
  $('#bottom-text').on('keyup', function() {
    var testTwo = $(this).val();
	$('.bottom-caption').text(testTwo);
	if (testTwo === "")	 {
		$('.bottom-caption').text("I'm all ears");
	}
  });
  $('#image-url').on('keyup', function() {
    var testThree = $(this).val();
    // alert(testThee);
    $('.mainImage').attr('src', testThree);
    $('.mainImage').css('width', "100%");
    $('.mainImage').css('heigth', "100%");
	if (testThree === "")	 {
		$('.mainImage').attr('src', 'img/cat.jpg');
	}
  });
};
 
$(document).ready(main);