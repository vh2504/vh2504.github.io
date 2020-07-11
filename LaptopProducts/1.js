$(document).ready(function(){
	$(".item").hover(function() {
		// $(".item").css("margin", "0");
		$(this).addClass("phongto");
	}, function() {
		// $(".item").css("margin", "20px auto");
		$(this).removeClass("phongto");
	});
});