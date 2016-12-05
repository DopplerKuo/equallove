$(window).load(function() {
	$(".menu-btn").click(function() {
		$(this).toggleClass('active');
		$('.nav-list').toggleClass('active');
	});



	/// 婚姻平權進度條
	$(".pop-btn").click(function() {
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

	$(".s4-faq-more-btn").click(function() {
		$("body").css("overflow", "hidden");
		var t = $(this).parent().find('h4').html();
		var p = $(this).parent().find('p').html();
		$(".pop-up-box[data-show='5'] h3").html(t)
		$(".pop-up-box[data-show='5'] p").html(p)
		$(".pop-up").fadeIn(300);
		$(".pop-up-box").fadeOut(0);
		$(".pop-up-box[data-show='5']").fadeIn(0);
		$(".close-circle").click(function() {
			$(".pop-up").fadeOut(0);
			$("body").css("overflow", "auto");
		});
	})
});



