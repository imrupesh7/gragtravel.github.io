$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			$('.scrolltop').fadeIn("fast");
		}
		else {
			$('.scrolltop').fadeOut("fast");
		}
	})
});

$('.scrolltop').click(function () {
	$("html,body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});


$(".tab-list").on("click", ".tab", function (e) {
	e.preventDefault();
	$(".tab").removeClass("active");
	$(".tab-content").removeClass("show");
	$(this).addClass("active");
	$($(this).attr("href")).addClass("show");
});