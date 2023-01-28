$(window).scroll(function () {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 10) {

        $('.bg').addClass('show');

    } else {

        $('.bg').removeClass('show');

    };


});

$(document).ready(function () {

    $(".topbtnBox #topBtn").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 500);
    });

});
