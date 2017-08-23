$(document).ready(function(){

    iconMenu=0;
	$(".icon-menu").click(function(){
		if (iconMenu++%2) {
            $(".pas:eq(0) , .pas:eq(3)").css("opacity", "1");
			$(".pas:eq(1) , .pas:eq(2)").css("transform", "rotate(0deg)");
			$(".pas:eq(1) , .pas:eq(2)").css("margin-top", "2px");
			$(".pas:eq(1) , .pas:eq(2)").css("width", "22px");
			$(".icon-menu").css("padding-top", "3px");
		}else{
            $(".pas:eq(0) , .pas:eq(3)").css("opacity", "0");
			$(".pas").eq(1).css("transform", "rotate(45deg)");
			$(".pas").eq(2).css("transform", "rotate(-45deg)");
            $(".pas").eq(1).css("margin-top", "6px");
            $(".pas").eq(2).css("margin-top", "-2px");
			$(".pas:eq(1) , .pas:eq(2)").css("width", "24px");
			$(".icon-menu").css("padding-top", "0px");
		}
    });

    $('.scrollspy').scrollSpy({
        scrollOffset:100,
    });
});

$(window).scroll(function() {
    if ($(".fixed-menu").offset().top > 200) {
        $(".fixed-menu").css( "background-color", "rgba(90, 0, 20, 0.98)" );
    }else{
        $(".fixed-menu").css( "background-color", "transparent" );
    }
});