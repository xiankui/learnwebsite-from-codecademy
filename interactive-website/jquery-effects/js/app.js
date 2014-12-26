var main = function () {
	// dropdown menu
	$('.dropdown-toggle').click(function (e) {
		e.preventDefault();

		$('.dropdown-menu').toggle();
	});

	/*
	*  slide
	*/
	var sliding = false;
	var autoTimer = null;
	// next
	$('.arrow-next').click(function (e) {
		e.preventDefault();
		if (sliding) {
			return false;
		}

		sliding = true;

		autoTimer = clearTimeout(autoTimer);
		// next slide
		var currentSlide = $('.active-slide'),
			nextSlide = currentSlide.next();
		// next dot
		var currentDot = $('.active-dot'),
			nextDot = currentDot.next();

		if (nextSlide.length === 0) {
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600, function () {
			sliding = false;
			autoTimer = setTimeout(auto, 5000);
		}).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});

	// prev
	$('.arrow-prev').click(function (e) {
		e.preventDefault();

		if (sliding) {
			return false;
		}

		sliding = true;
		autoTimer = clearTimeout(autoTimer);

		var currentSlide = $('.active-slide'),
			prevSlide = currentSlide.prev(),
			currentDot = $('.active-dot'),
			prevDot = currentDot.prev();

		if (prevSlide.length === 0) {
			prevSlide = $('.slide').last();
			prevDot = $('.dot').last();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600, function () {
			sliding = false;
			autoTimer = setTimeout(auto, 5000);
		}).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});

	// dot
	$('.dot').click(function (e) {
		e.preventDefault();

		if (sliding) {
			return false;
		}

		sliding = true;
		autoTimer = clearTimeout(autoTimer);

		var currentDot = $('.active-dot'),
			nextDot = $(this),
			index = $('.dot').index(nextDot),
			currentSlide = $('.active-slide'),
			nextSlide = $('.slide').eq(index);

		if (nextDot.hasClass('active-dot')) {
			return false;
		} 

		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600, function () {
			sliding = false;
			autoTimer = setTimeout(auto, 5000);
		}).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});

	// auto
	var play = function () {
		// setTimeout(function () {}, 1200);
		$('.arrow-next').trigger('click');
	};

	var auto = function () {
		play();
		autoTimer = setTimeout(auto, 5000);
	};

	autoTimer = setTimeout(auto, 5000);
};



$(document).ready(main);