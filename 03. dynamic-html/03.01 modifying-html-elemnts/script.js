$(document).ready(function() {
	
	// Creating a variable with HTML content
	$h1 = $("<h1>Hello</h1>");
	$('#one').before($h1);

    // Learning 'before'
    $('#one').before("<p>Content was append before the #one div</p>");

    // Learning 'after'
    $('#one').after("<p>Contet was append after the #one div</p>");

    // Creating a variable and append it to the #two div
    var $p = "<p id='test'>I'm a paragraph!</p>";
    var $pTwo = "<p>Luciano Krebs</p>";

    $('#two').append($p);
    $('#two').after($pTwo);

    // Learning .remove() ~> remove the content and the element itself
    $('p#test').remove(); 
    // There's also .empty() that deletes the content of an element 


    // Learning toggleClass!
    // There's also .removeClass() and .addClass()
    $('#text').on('click', function() {
    	$(this).toggleClass('highlighted');
    });

    $('#title').on('click', function() {
    	$(this).toggleClass('highlighted');
    });

    // Changing the css properties
    $('.cssChanges').mouseenter(function() {
    	$(this).css("cursor", "pointer");
    	$(this).css("border-radius", "10px");
    	$(this).css("transition", "0.5s");
		$(this).css("opacity", "0.8");
    });
    $('.cssChanges').mouseleave(function() {
    	$(this).css("border-radius", "0");
    	$(this).css("transition", "0.5s");
    	$(this).css("opacity", "1");
    });

    $('.cssChanges').on('click', function() {
    	$(this).toggleClass("cssChangesTwo");
    });

    $('#textChange').on('click', function() {
    	$('.textChangeWithHtml').html("<h1>jQuery magic in action!</h1>");
    });
});