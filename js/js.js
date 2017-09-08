// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/bg1.jpg", 
	 		 "images/bg2.jpg",
			 "images/bg3.jpg",
            "images/bg4.jpg",
            "images/bg5.jpg",
            "images/bg6.jpg",
	 			], 	{duration: 2000, fade: 1300});
		});
})