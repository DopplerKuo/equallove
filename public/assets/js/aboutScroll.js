$(function(){
	$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top = $this.scrollTop();
   var $barFixedHeight = $('.sec1').height() - 140;
   var a = $this_Top / 4
   var o = 1 - (1 / a)
　　if($this_Top < $barFixedHeight){
				$('.sec1 .content').css("transform", "translate3d(0," + a + "px,0)")
　　　}
　　}).scroll();
	$(".go-down-btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#scrolltohere").offset().top
	    }, 800);
	});
})

