

$(function () {

    var ourCountDown = setInterval(function () {

        var counter = parseInt($('.countDown').html());


        if (counter !== 0) {
            $('.countDown').html(counter - 1);
        }
        else {
            clearInterval(ourCountDown);
            $('.countDown').html('Finished');
            $('.countDown').hide();

            $('img').show()
        }


    }, 1000);



});