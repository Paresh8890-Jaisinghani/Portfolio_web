AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();



	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {

			event.preventDefault();

			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});

	};
	burgerMenu();


	var onePageClick = function () {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function () {
				// window.location.hash = href;
			});
		});

	};

	onePageClick();


	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



	var counter = function () {
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');

					$this.animateNumber({
						number: num,
						numberStep: function (now, tween) {
							var floored_number = Math.floor(now);
							$(tween.elem).text(floored_number);
						}
					}, 7000, function () {
						$this.text(num + "+"); // Add "+" after animation completes
					});
				});
			}
		}, { offset: '95%' });
	}

	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});





})(jQuery);

document.querySelectorAll('.tab').forEach(tab => {
	tab.addEventListener('click', function () {
		document.querySelectorAll('.tab').forEach(t => t.classList.remove('active-tab'));
		document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active-content'));
		this.classList.add('active-tab');
		document.getElementById(this.dataset.target).classList.add('active-content');
	});
});

// Modal interactivity for Reaction Time Demo


// Image Modal interactivity
const imgModal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const imgCaption = document.getElementById('imgCaption');
const closeImgModal = document.getElementById('closeImgModal');
document.querySelectorAll('.modal-trigger').forEach(img => {
	img.addEventListener('click', function () {
		imgModal.style.display = "flex";
		modalImg.src = this.src;
		imgCaption.innerHTML = this.alt;
	});
});
closeImgModal.onclick = function () {
	imgModal.style.display = "none";
	modalImg.src = "";
	imgCaption.innerHTML = "";
}
imgModal.onclick = function (event) {
	if (event.target === imgModal) {
		imgModal.style.display = "none";
		modalImg.src = "";
		imgCaption.innerHTML = "";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".tab");
	const contents = document.querySelectorAll(".tab-content");
	const cards = document.querySelectorAll(".module-card");

	function activateTab(targetId) {
		contents.forEach(content => {
			content.classList.remove("active-content");
		});
		document.getElementById(targetId).classList.add("active-content");
	}

	tabs.forEach(tab => {
		tab.addEventListener("click", () => {
			tabs.forEach(t => t.classList.remove("active-tab"));
			tab.classList.add("active-tab");
			activateTab(tab.dataset.target);
		});
	});

	cards.forEach(card => {
		card.addEventListener("click", () => {
			activateTab(card.dataset.target);
			tabs.forEach(t => {
				t.classList.remove("active-tab");
				if (t.dataset.target === card.dataset.target) {
					t.classList.add("active-tab");
				}
			});
			window.scrollTo({
				top: document.getElementById(card.dataset.target).offsetTop - 100,
				behavior: "smooth"
			});
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
    // Reaction Time Demo
    const reactionBox = document.getElementById("reactionBox");
    const startBtn = document.getElementById("startBtn");
    const result = document.getElementById("result");

    let startTime, endTime, timeout;

    function resetBox() {
        reactionBox.style.backgroundColor = "red";
        reactionBox.textContent = "Wait for green...";
        startBtn.disabled = false;
        result.textContent = "";
    }

    startBtn.addEventListener("click", () => {
        result.textContent = "";
        reactionBox.style.backgroundColor = "red";
        reactionBox.textContent = "Wait for green...";
        startBtn.disabled = true;

        timeout = setTimeout(() => {
            reactionBox.style.backgroundColor = "green";
            reactionBox.textContent = "Click Now!";
            startTime = new Date().getTime();
        }, Math.random() * 3000 + 2000); // 2-5 seconds delay
    });

    reactionBox.addEventListener("click", () => {
        if (reactionBox.style.backgroundColor === "green") {
            endTime = new Date().getTime();
            const reactionTime = endTime - startTime;
            result.textContent = `Your reaction time is ${reactionTime} ms`;
            clearTimeout(timeout);
            // Auto-reset after 2 seconds
            setTimeout(resetBox, 2000);
        } else {
            result.textContent = "Too soon! Wait for green.";
            clearTimeout(timeout);
            // Auto-reset after 2 seconds
            setTimeout(resetBox, 2000);
        }
    });
});

// Place this script just before </body>
const messages = [
	"Seamless real-time messaging.",
	"Group conversations made easy.",
	"Share photos, videos & files securely.",
	"Your chat, your way—anywhere, anytime!"
];
let i = 0, j = 0, current = '', isDeleting = false, speed = 60;

function type() {
	const typing = document.querySelector('.typing');
	if (!typing) return;
	if (!isDeleting && j <= messages[i].length) {
		current = messages[i].substring(0, j++);
		typing.textContent = current;
		setTimeout(type, speed);
	} else if (isDeleting && j >= 0) {
		current = messages[i].substring(0, j--);
		typing.textContent = current;
		setTimeout(type, speed / 2);
	} else {
		isDeleting = !isDeleting;
		if (!isDeleting) i = (i + 1) % messages.length;
		setTimeout(type, 1000);
	}
}
type();


// Set current year dynamically
// Add this script after your main.js or inside a <script> tag at the bottom
document.addEventListener('DOMContentLoaded', function() {
  const resumeItems = document.querySelectorAll('#resume-section .resume-wrap');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    resumeItems.forEach(item => {
      const position = item.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
// Collapsible Resume Sections
document.querySelectorAll('.collapsible').forEach(function(section) {
  // Hide details initially
  section.querySelector('.resume-details').style.display = 'none';

  // Toggle on header click
  section.addEventListener('click', function() {
    let details = section.querySelector('.resume-details');
    if (details.style.display === 'none') {
      details.style.display = 'block';
      section.classList.add('active');
    } else {
      details.style.display = 'none';
      section.classList.remove('active');
    }
  });

  // Highlight on hover
  section.addEventListener('mouseenter', function() {
    section.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
    section.style.transform = 'scale(1.02)';
    section.style.transition = 'all 0.2s';
  });
  section.addEventListener('mouseleave', function() {
    section.style.boxShadow = '';
    section.style.transform = '';
  });
});

// Smooth scroll to Download CV
// document.querySelector('.btn-primary').addEventListener('click', function(e) {
//   e.preventDefault();
//   window.open(this.href, '_blank');
//   // Optionally, scroll to the button
//   document.querySelector('.btn-primary').scrollIntoView({ behavior: 'smooth' });
// });

