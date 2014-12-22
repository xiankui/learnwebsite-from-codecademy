var main = function () {
    $('.icon-menu').click(function (e) {
    	e.preventDefault();

    	$('.menu').animate({
    		left: '0px'
    	}, 200);

    	$('body').animate({
    		left: '285px'
    	}, 200);
    }); 

    $('.icon-close').click(function (e) {
    	e.preventDefault();

    	$('.menu').animate({
    		left: '-285px'
    	}, 200);

    	$('body').animate({
    		left: '0px'
    	}, 200);
    });
};

$(document).ready(main);