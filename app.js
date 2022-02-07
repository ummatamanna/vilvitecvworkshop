$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var div=$('body').offset().top;
    if (scroll > div) {
        $('nav').addClass("sticky");
    } else {
        $('nav').removeClass("sticky");
    }

    if (scroll > $('body').offset().top) {
        $(".scrollTop").addClass('fade');
    } else {
        $(".scrollTop").removeClass('fade');
    }
});

$(".navbar").on('click', function() {
    $(".menu ul").toggleClass("toggle");
})
$(".menu ul li a").on('click', function() {
    $(".menu ul").removeClass("toggle");
});

