$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var div = $('body').offset().top; // get top offset of your div

    if (scroll > div) {
        $('nav').addClass("sticky");
    } else {
        $('nav').removeClass("sticky");
    }

    if(scroll > $('body').offset().top){
        $(".scrollTop").addClass('fade');
    } else { 
        $(".scrollTop").removeClass('fade');
    }
});

$(".navbar").click(function(){
    $(".menu ul").toggleClass("toggle");
})

 $(".menu ul li a").click(function(){
    $(".menu ul").removeClass("toggle");
});
