//Loader js
/*jQuery(document).ready(function() {
	"use strict";
	$("#page-preloader").delay(5000).fadeOut('slow');
	
});*/

/*-----------------------------------------------------------------------------------*/
/* 		Parallax
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
  'use strict';
  jQuery.stellar({
    horizontalScrolling: false,
    scrollProperty: 'scroll',
    positionProperty: 'position',
  });
});



/*-----------------------------------------------------------------------------------*/
/*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
    $(".sticky").sticky({topSpacing:0});
});

$(document).ready(function(){
$('.nav a').on('click', function(){
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
});
});

$('#open-button').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });

$(document).ready(function() {
'use strict';
	var owl = $("#owl-clients");
	  owl.owlCarousel({
		itemsCustom: [
		 [0, 1],
		 [450, 2],
		 [600, 3],
		 [700, 4],
		 [1024, 4],
		 [1200, 5],
		 [1400, 5],
		 [1600, 5],
		 [1920, 5]],
		navigation: true,
   	    pagination : false,
	    navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
});

$(document).ready(function() {
 'use strict';
  $("#owl-estate").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
      navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
 
  });
 
});


//jQuery('.navbar-nav a').click(function(){ jQuery('.navbar-default').hide('slow');  jQuery('.navbar-default').show(); });

  $(document).ready(function () {
     'use strict';
      $('#contactForm .error').remove();
      var form = $('#contactForm'); // contact form
      var submit = $('#contactForm_submit'); // submit button
      var alertx = $('.successMsg'); // alertx div for show alert message
      // form submit event
      form.on('submit', function (e) {
      var hasError = false;
        $('.required').each(function () {
            if (jQuery.trim($(this).val()) === '') {
                $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                hasError = true;
            } else if ($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;
                if (!emailReg.test(jQuery.trim($(this).val()))) {
                    $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                    hasError = true;
                }
            }
        });
        if (!hasError) {
            e.preventDefault(); // prevent default form submit
          // sending ajax request through jQuery
          $.ajax({
              url: 'js/inc/sendemail.php', // form action url
              type: 'POST', // form submit method get/post
              dataType: 'html', // request type html/json/xml
              data: form.serialize(), // serialize form data 
              beforeSend: function () {
                  alertx.fadeOut();
                  submit.html('Sending....'); // change submit button text
              },
              success: function (data) {
                  form.fadeOut(300);
                  alertx.html(data).fadeIn(1000); // fade in response data     
                  setTimeout(function() {
                    alertx.html(data).fadeOut(300);
                    $('#formName, #formEmail,#phone, #message').val('')
                    form.fadeIn(1800);
                }, 4000);
              },
              error: function (e) {
                  console.log(e)
              }
          });
          $('.required').val('');
        }
        return false;    
      });
      
    $('#contactForm input').focus(function () {
        $('#contactForm .error').remove();
    });
    $('#contactForm textarea').focus(function () {
        $('#contactForm .error').remove();
    });
  });



/*-----------------------------------------------------------------------------------*/
/*  ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('.portfolio-wrapper .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
  });
    $('.filter li a').click(function () {
        $('.filter li a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });
});

$(document).ready(function() {
'use strict'; 
 $("#owl-gallery").owlCarousel({
 	navigation : false, // Show next and prev buttons
	slideSpeed : 300,
	autoPlay:3000,
	pagination : false,
      singleItem:true,
	  items : 1
});
});


$(document).ready(function() {
'use strict'; 
  $("#owl-port").owlCarousel({ 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  pagination : true,
	  items : 1, 
	  navigationText: false 
  }); 
});


//Mix it up
$(function() {
	'use strict';
    $('#portfolio-item').mixitup({
        targetSelector: '.item',
        transitionSpeed: 450
    });
});
$(function() {
	'use strict';
    $('#work_item').mixitup({
        targetSelector: ".item",
        filterSelector: ".filters",
        transitionSpeed: 450
    });
});




//google map js
$(document).ready(function() {
    'use strict';
    	new GMaps({
        div: '#map',
        lat: 22.304002,
        lng: 70.805120,
        scrollwheel: false,
        zoom: 16
    });
});








/*-----------------------------------------------------------------------------------*/
/* 		NAVIGATION SMOOTH SCROLL
/*-----------------------------------------------------------------------------------*/
$('.menu nav ul a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
      var target = $(this.hash);
      var href = $.attr(this, 'href');
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
         scrollTop: target.offset().top
        }, 1000, function () {
            window.location.hash = href;
        });
        return false;
      }
    }
});
var navLinkIDs = "";
 $('.menu nav ul a[href*=#]:not([href=#])').each(function(index) {
     if(navLinkIDs != "") {
         navLinkIDs += ", ";
     }
     navLinkIDs += $('.menu nav ul a[href*=#]:not([href=#])').eq(index).attr("href");
 });
if( navLinkIDs ) {
   $(navLinkIDs).waypoint(function(direction) {
       if(direction=='down') {
           $('.menu nav ul a').parent().removeClass("active");
           $('.menu nav ul a[href="#'+$(this).attr('id')+'"]').parent().addClass("active");
       }
   }, { offset: 125 });
    $(navLinkIDs).waypoint(function(direction) {
       if(direction=='up') {
           $('.menu nav ul a').parent().removeClass("active");
           $('.menu nav ul a[href="#'+$(this).attr('id')+'"]').parent().addClass("active");
       }
   }, {  offset: function() {
       return -$(this).height() + 100;
   } });
}




/*-----------------------------------------------------------------------------------*/
/* 	ANIMATION
/*-----------------------------------------------------------------------------------*/
var wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
});
wow.init();



$('.carousel').carousel({
  interval: 600000
})

$('.covervid-video').coverVid(1920, 1080);




/*
//Header Element
$(document).ready(function () {
	'use strict';
	$('#click_here').click(function () {
		$('#info_box').toggleClass('show');
		return false;
	});
	$('.head_menu li a').click(function () {
		$('#info_box').toggleClass('show');
		return false;
	});
	$('.back-top').click(function () {
		$('#info_box').toggleClass('show');
		return false;
	});
});
$(document).ready(function () {
	'use strict';
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });

    $('.back-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
// Preset
(function($){
    'use strict';
    var palettestatus = true;
    if($("#palette").length > 0)
    {
        $("#palette .palette-edit").click(function(e){
            e.preventDefault();
            if(palettestatus)
            {
                $("#palette").animate({'left': '0px'}, 'slow');
                palettestatus = false;
            }
            else
            {
                $("#palette").animate({'left': '-150px'}, 'slow');
                palettestatus = true;
            }
        });
        
        $("#palette").find('nav a').click(function(e){
            e.preventDefault();
            var skin = $(this).attr('id');
            $(this).addClass('selected').siblings().removeClass('selected');
            $('body').removeClass().addClass(skin);
            if ( $(this).hasClass('default'))
            {   $('body').removeClass();}
        });
    }
})(jQuery);*/