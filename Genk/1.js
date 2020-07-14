$(function(){
	$(".menu-con").addClass("an");
	$(".fa").hover(function() {
		$(this).removeClass("fa-bars");
		$(this).html("X");
		$(this).addClass("chuX");
		$(".menu-con").addClass("hien");

	}, function() {
		// $(".menu-con").removeClass("hien");
		// $(".menu-con").addClass("an");
	});
	$(".menu-con").mouseleave(function() {
		$(".menu-con").removeClass("hien");
		$(".menu-con").addClass("an");
		$(".chuX").addClass("fa-bars");
		$(".chuX").removeClass("chuX");
		$(".fa").html("");
			
	});

	$(".chuX").hover(function() {
			$(".menu-con").removeClass("hien");
			$(".menu-con").addClass("an");
			$(".chuX").addClass("fa-bars");
			$(".chuX").removeClass("chuX");
			$(".fa").html("");
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});

});