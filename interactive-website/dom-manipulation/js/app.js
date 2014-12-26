var main = function () {
	$('.btn').click(function (e) {
		e.preventDefault();

		var post = $('.status-box').val();

		$('<li>').text(post).appendTo($('.posts'));
		$('.status-box').val('');
		$('.counter').text('140');

		$('.btn').addClass('disabled');
	});

	$('.status-box').keyup(function (e) {
		var postLength = $(this).val().length,
			charactersLeft = 140 - postLength;

		$('.counter').text(charactersLeft);

		if (charactersLeft < 0) {
			$('.btn').addClass('disabled');
		} else if (charactersLeft === 140) {
			$('.btn').addClass('disabled');
		} else {
			$('.btn').removeClass('disabled');
		}
	});

	$('.btn').addClass('disabled');
};

$(document).ready(main);
