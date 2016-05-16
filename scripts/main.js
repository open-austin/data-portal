$('#cont-button').click(function(){
  $('.contributors').addClass('active');
  $('.categories').removeClass('active');
});

$('#cat-button').click(function(){
  $('.categories').addClass('active');
  $('.contributors').removeClass('active');
});

$('.iveused').click(function(e){
	e.preventDefault();
	$('.thumbs-wrapper').addClass('active');
});

$('.fa-thumbs-up').click(function(e){
	e.preventDefault();
	$('.thumbsupmessage').addClass('active');
	$('.thumbsdownmessage').removeClass('active');
});

$('.fa-thumbs-down').click(function(e){
	e.preventDefault();
	$('.thumbsupmessage').removeClass('active');
	$('.thumbsdownmessage').addClass('active');
});

// $('.category').click(function(){
// 	$('.subcategories').slideToggle('active');
// });

$( ".excategory" ).click(function(e) {
	e.preventDefault();
  $( ".exsubcategories" ).slideToggle( "fast", function() {
    // Animation complete.
  });
});
