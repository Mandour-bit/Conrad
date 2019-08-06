$(function () {

    $('div.awsemoe img').mousemove(function () {
        $('.overlay').hide();
    });

    $('.first').click(function () {
        $('.f1 .one').show().siblings().hide();
    });

    $('.second').click(function () {
        $('.f1 .two').show().siblings().hide();
    });
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 500) {
            $('.header').slideDown();
        } else {
            $('.header').slideUp();
        }
    });

    $('.fancybox').fancybox();

    $('.acordion h3').click(function () {
        $(this).next().slideToggle();
        $('.acordion p').not($(this).next()).slideUp();
    });

    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 1300) {
            $('.timer').countTo();
        }
    });
    $('html').niceScroll();
    
    $('.All_Images').mixItUp();

    $('header li a').click(function(){
        $('html , body').animate({
            scrollTop: $('#'+ Data('value')).offset().top()
        },1000)
    })


});