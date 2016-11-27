$(window).load(function() {
	$(".menu-btn").click(function() {
		$(this).toggleClass('active');
		$('.nav-list').toggleClass('active');
	});



	/// 婚姻平權進度條
	$(".btn").click(function() {
		$("body").css("overflow", "hidden");
		var index = $(this).attr("data-pop");
		$(".pop-up").fadeIn(300);
		$(".pop-up-box").fadeOut(0);
		$(".pop-up-box[data-show=" + index + "]").fadeIn(0);
		$(".close-circle").click(function() {
			$(".pop-up").fadeOut(0);
			$("body").css("overflow", "auto");
		});
	});
});



