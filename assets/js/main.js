/**
* Template Name: iPortfolio - v1.4.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  

  // Porfolio isotope and filter
  $(window).on('load', function() {
    
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      //$('.venobox').venobox();
    });
  });

	$('#moSections  a').on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	
	$('#moSocials  a').on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

  $('#moAcademics  a').on('click', function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	
	$("#moSections .list-group-item-action").on('click', function(e){
		e.preventDefault()
		$("#moSections .list-group-item-action").removeClass("active")
		//alert("list item clicked")
		$(this).addClass("active")
	});
	
	$("#moSocials .list-group-item-action").on('click', function(e){
		e.preventDefault()
		$("#moSocials .list-group-item-action").removeClass("active")
		//alert("list item clicked")
		$(this).addClass("active")
	});

  $("#moAcademics .list-group-item-action").on('click', function(e){
		e.preventDefault()
		$("#moAcademics .list-group-item-action").removeClass("active")
		//alert("list item clicked")
		$(this).addClass("active")
	});
	

  
  $(window).on('load', function() {
    
  });

})(jQuery);

function showQuoteOfTheDay(){
		  console.log("button clicked!!!");
		  fetch('https://favqs.com/api/qotd').then(function (response) {
			// The API call was successful!
			return response.json();
		}).then(function (data) {
			// This is the JSON from our response
			console.log(data.quote.body);
		   document.getElementById("qotd").innerHTML = data.quote.body
		}).catch(function (err) {
			// There was an error
			console.warn('Something went wrong.', err);
		});
		}

function getStravaDataFromProfileApi(){
  fetch('https://mmoiyadi.herokuapp.com/api/strava/stats')
  .then(function(response){
    console.log("Got response from API")
    return response.json();
  })
  .then(function(data){
    console.log(data);
    // ride details
    document.getElementById("ride-count").innerHTML = data.ride.count
    document.getElementById("ride-distance").innerHTML = Math.round((data.ride.distance / 1000)).toString() + " Km"
    document.getElementById("ride-hours").innerHTML = Math.round((data.ride.movingTime / 3600)).toString() + " Hrs"

    // swim details
    document.getElementById("swim-count").innerHTML = data.swim.count
    document.getElementById("swim-distance").innerHTML = Math.round((data.swim.distance / 1000)).toString() + " Km"
    document.getElementById("swim-hours").innerHTML = Math.round((data.swim.movingTime / 3600)).toString() + " Hrs"

    // run details
    document.getElementById("run-count").innerHTML = data.run.count
    document.getElementById("run-distance").innerHTML = Math.round((data.run.distance / 1000)).toString() + " Km"
    document.getElementById("run-hours").innerHTML = Math.round((data.run.movingTime / 3600)).toString() + " Hrs"
  })
  .catch(function(err){
    alert('ERROR!!!');
  });
}

function getSimklDataFromProfileApi(){
  fetch('https://mmoiyadi.herokuapp.com/api/simkl/lastWatched')
  .then(function(response){
    console.log("Got response from Simkl API");
    return response.json();
  })
  .then(function(data){
    console.log(data);
    document.getElementById("last-watched-name").innerHTML = data.title;
    const imgUrl = "https://simkl.in/posters/"+data.poster+"_ca.jpg";
    $("#last_watched_img").attr("src",imgUrl);
  })
}

function getGithubFromProfileApi(){
  fetch('https://mmoiyadi.herokuapp.com/api/Github/zen')
  .then(function(response){
    console.log("Got response from Github API");
    console.log(response);
    return response.text();
  })
  .then(function (data){
    console.log(data);
    document.getElementById("github-zen").innerHTML = data;
  })
}