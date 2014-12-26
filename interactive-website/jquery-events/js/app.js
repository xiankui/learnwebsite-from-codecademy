var main = function () {
	// o => 111
	// n => 110
	$('.article').click(function (event) {
		$('.article').removeClass('current');
		$(this).addClass('current');

		$('.description').hide();
		$(this).children('.description').show();
	});

	$(document).keypress(function (event) {
		if (event.which === 111) {
			$('.current').children('.description').toggle();
		} else if (event.which === 110) {
			var currentArticle = $('.current'),
				nextArticle = currentArticle.next();

			currentArticle.removeClass('current');
			nextArticle.addClass('current');
		}
	});

};

$(document).ready(main);