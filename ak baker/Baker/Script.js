// For Counter
$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend(
        {
        start: 0,
        end: 100,
        easing: "swing",
        duration: 400,
        complete: "",
        },
        options
    );

    var thisElement = $(this);

    $({ count: settings.start }).animate(
        { count: settings.end },
        {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete,
        }
    );
    };

    $(".count-1").jQuerySimpleCounter({ end: 232, duration: 2000 });
    $(".count-2").jQuerySimpleCounter({ end: 521, duration: 2000 });
    $(".count-3").jQuerySimpleCounter({ end: 1463, duration: 2000 });
    $(".count-4").jQuerySimpleCounter({ end: 15, duration: 2000 });

    /* AUTHOR LINK */
    $(".about-me-img").hover(
    function () {
        $(".authorWindowWrapper")
        .stop()
        .fadeIn("fast")
        .find("p")
        .addClass("trans");
    },
    function () {
        $(".authorWindowWrapper")
        .stop()
        .fadeOut("fast")
        .find("p")
        .removeClass("trans");
    }
);
// For slick slider
$(document).ready(function(){
    $(".testi-row").slick({
        Infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1200,
        responsive: [{
            breakpoint: 490,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })
})
// For Accordion
$(document).ready(function(){
    $("ul > li > .answer").hide();
    $("ul > li").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active").find(".answer").slideUp();
        }
        else{
            $("ul > li.active .answer").slideUp();
            $("ul > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    })
})
// For Toggle for Icons in Media Query
$(document).ready(function(){
    $(".check").click(function(){
        $("nav > ul").toggleClass("show")
    })
})