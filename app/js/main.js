'use strict';

(function($){
	$(document).ready(function() {
		// Code
//Sliders

	 $('.team-slider').slick({
	    dots: false,
	    infinite: true,
	    speed: 500,
	    adaptiveHeight: true,
	    slidesToShow: 3,
	    prevArrow: '<img class="slick-p" src="./images/icons/arrow-blackleft.png">',
			nextArrow: '<img class="slick-n" src="./images/icons/arrow-black.png">',
			responsive: [
		    {
		      breakpoint: 1025,
		      settings: {
		        slidesToShow: 2,
		      }
		    },

		    {
		      breakpoint: 721,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		]
	 });
	});

})(jQuery);
(function($){
	$(document).ready(function() {
function initMap() {
	  	var mapCenter = {lat: 50.470149, lng: 30.508248};
	  	var mapDiv = document.getElementById('map');
	  	mapsTypeId: google.maps.MapTypeId.ROADMAP

	  	var map = new google.maps.Map(document.getElementById('map'), {
	  		zoom: 15,
	  		center: mapCenter,
	  		disableDefaultUI: true,
	  		styles: [
	  		{
	  			"elementType": "geometry.fill",
	  			"stylers": [
	  			{
	  				"color": "#c8c4da"
	  			},
	  			{
	  				"visibility": "on"
	  			},
	  			{
	  				"weight": 1.5
	  			}
	  			]
	  		}
	  		]
	  	});

	  	var marker = new google.maps.Marker({
	    	position: new google.maps.LatLng(50.470149, 30.508248),
	    	map: map,
	    	icon: "images/icons/map-marker.png",
	  	});
	  }

	  window.onload = initMap;

	});
	})(jQuery);

	(function($){
	$(document).ready(function() {

		$('.header__burger').on('click', function(){
			
			$('.header-menu__items').slideToggle(300, function(){
				
				if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}			
			});	
	 	});
	});

	$(document).not(".header-menu__items").click(function() {
	  $('.header-menu__items').animate({
	        display:"none"
	    });
	    });
		})(jQuery);