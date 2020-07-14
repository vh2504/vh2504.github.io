$(function(){
	$(".menu-con").addClass("an");
	$(".fa").hover(function() {
		$(".menu-con").addClass("hien");
	}, function() {
		// $(".menu-con").removeClass("hien");
		// $(".menu-con").addClass("an");
	});
	$(".menu-con").mouseleave(function() {
		console.log("da roi");
			$(".menu-con").removeClass("hien");
			$(".menu-con").addClass("an");
	});
});