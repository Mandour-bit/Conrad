
$(function () {

    $('.info').first().show().animate({ width: '40%' });


    $('.items').click(function () {

        /*$(this).siblings('.info').hide();*/

        /*$(this).next().show().animate({ width:'40%'}).siblings('.info').hide();*/



        $(this).next().show().animate({ width: '40%' })
            .siblings('.info')
            .animate({ width: 0 }, function () { $(this).hide() });


    })
});



