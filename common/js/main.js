$(function() {

	$('[data-popup-target]').on('click', function(){
		var activePopup = $(this).attr('data-popup-target');
		$('.popup-wrap').fadeIn();
		$(activePopup).fadeIn();
		$('body').css('overflow-y', 'hidden');
	});

	$('.pop-close').on('click', function(){
		$('.popup-wrap, .popup').fadeOut();
		$('body').css('overflow-y', 'visible');
		$('.candy-box').removeClass('candy-next');
	});

	$('.check-active').on('click', function(){
		if(!$(this).parent().parent().next().hasClass('dim')){
			$(this).parent().parent().nextAll().addClass('dim');
			$('.dim input').attr('disabled', true);
		} else {
			$('.dim input').removeAttr('disabled');
			$(this).parent().parent().nextAll().removeClass('dim');
		}
	});

	$('.btn-round').on('click', function(){
		if(!$(this).hasClass('on')){
			$('.category .btn-round').removeClass('on');
			$(this).addClass('on');
		}
		return false;
	});

	$('.star-add').on('click', function(){
		if(!$('.review-self').hasClass('self')){
			$('.review-self').removeClass('self');
			$('.review-self').addClass('self');
		}
		return false;
	});

	$('.chart-box .btn-more').on('click', function(){
		if(!$(this).hasClass('open')){
			$(this).addClass('open');
			$('.more-review').slideDown();
		} else {
			$('.chart-box .btn-more').removeClass('open');
			$('.more-review').slideUp();
		}
		return false;
	});

	$('.tab-review a').on('click', function(){
		if(!$(this).parent().hasClass('on')){
			$('.tab-review li').removeClass('on');
			$(this).parent().addClass('on');
		}
		return false;
	});

	$('#pop-review-detail .btn-charge').on('click', function(){
		$('.candy-box').addClass('candy-next');
	});


});



