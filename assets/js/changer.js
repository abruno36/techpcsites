/*==============================
	STYLE SWITCHER SCRIPT INSTALLATION
 ===============================*/
 
(function($) {
	"use strict";

	$(".style1" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style1.css" );
		return false;
	});

	$(".style2" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style2.css" );
		return false;
	});

	$(".style3" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style3.css" );
		return false;
	});

	$(".style4" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style4.css" );
		return false;
	});

	$(".style5" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style5.css" );
		return false;
	});

	$(".style6" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style6.css" );
		return false;
	});


	$(".style7" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style7.css" );
		return false;
	});
	$(".style8" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style8.css" );
		return false;
	});

	$(".style9" ).click(function(){
		$("#preset" ).attr("href", "assets/css/style9.css" );
		return false;
	});

	$(".light" ).click(function(){
		$("#preset" ).attr("href", "assets/css/navlight.css" );
		return false;
	});


	$(".dark" ).click(function(){
		$("#preset" ).attr("href", "assets/css/navdark.css" );
		return false;
	});



	$(".gray" ).click(function(){
		$("#preset" ).attr("href", "assets/css/navgray.css" );
		return false;
	});

	
	
	
	

	// Style Switcher	
	$('.style-changer').animate({
		left: '-220px'
	});

	$('.style-changer h2 a').click(function(e){
		e.preventDefault();
		var div = $('.style-changer');
		console.log(div.css('left'));
		if (div.css('left') === '-220px') {
			$('.style-changer').animate({
				left: '0px'
			}); 
		} else {
			$('.style-changer').animate({
				left: '-220px'
			});
		}
	});

	$('.preset li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
    
})(jQuery);

