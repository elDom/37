jQuery(window).on("load", function () {
    jQuery(".preloader").fadeOut();
});

$(window).on("scroll load", function () {
    if ($(".fixed-menu").offset().top > 200) {
        $(".fixed-menu").css("background-color", "rgba(90, 0, 20, 1)");
    } else {
        $(".fixed-menu").css("background-color", "transparent");
    }
});

$(window).on("resize load", function () {
    $(".photo").css("height", $(".photo").width());
});

$(document).ready(function () {

    iconMenu = 0;
    $(".icon-menu").click(function () {
        if (iconMenu++ % 2) {
            $(".pas:eq(0) , .pas:eq(3)").css("opacity", "1");
            $(".pas:eq(1) , .pas:eq(2)").css("transform", "rotate(0deg)");
            $(".pas:eq(1) , .pas:eq(2)").css("margin-top", "2px");
            $(".pas:eq(1) , .pas:eq(2)").css("width", "22px");
            $(".icon-menu").css("padding-top", "3px");
            //when unclicked
            $(".mobile-menu").css("height", "0vh");
            $(".mobile-menu").css("background", "transparent");
        } else {
            $(".pas:eq(0) , .pas:eq(3)").css("opacity", "0");
            $(".pas").eq(1).css("transform", "rotate(45deg)");
            $(".pas").eq(2).css("transform", "rotate(-45deg)");
            $(".pas").eq(1).css("margin-top", "6px");
            $(".pas").eq(2).css("margin-top", "-2px");
            $(".pas:eq(1) , .pas:eq(2)").css("width", "24px");
            $(".icon-menu").css("padding-top", "0px");
            //when clicked
            $(".mobile-menu").css("height", "100vh");
            $(".mobile-menu").css("background", "#5a0014");
        }
    });

    $(".mobile-menu a").click(function () {
        $(".icon-menu").click();
    });

    $('.scrollspy').scrollSpy({
        scrollOffset: 100,
    });


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        items: 1,
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            455: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });
    $('#process .fa-caret-left').click(function () {
        owl.trigger('prev.owl.carousel');
    });
    $('#process .fa-caret-right, #process .owl-item').click(function () {
        owl.trigger('next.owl.carousel');
    });



    var i=0;
    $(".feedback-chooser img").click(function () {
        $(".photo").css("opacity", "0");
        $(".photo").css("background-image", "url('"+this.src+"')");        
        $(".photo").css("opacity", "1");
        //var colors = ["#333","#bc2e3a","#777","#bc2e6f"];
        //var random = colors[Math.floor(Math.random() * colors.length)];
        //$(".text").css("color", ((i++)%2)?"#333":"#bc2e3a" );
        var html = 'Aute cupidatat quis aute fugiat culpa cillum exercitation magna non dolor officia est veniam. Ullamco sunt ex in velit anim aliquip cupidatat eu quis reprehenderit proident Lorem. Voluptate do magna exercitation voluptate duis voluptate nisi fugiat sunt labore qui irure reprehenderit eiusmod. Pariatur cillum enim qui sit Lorem labore officia non sint minim labore ut.';
        $(".text").html(html.split(' ').sort(function(){return 0.5-Math.random()}).join(' '));
        $(".text").append($('<p class="author">Somebody Else, Company CEO</p>'));
    });


});
