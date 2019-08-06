

$(document).ready(function () {


    // get The Clicked li id and Cash it in my variable 


    $("#my-tabs li").click(function () {


        var myID = $(this).attr("id");


        // remove class inactive from clicked Li And Add it To Other Li In The Same Ul		
        $(this).removeClass("inactive").siblings().addClass("inactive");


        // hide All Divs When Ckick on the LI		
        $(".my-continer div").hide();



        // Get the ID From The same Li ID And Add -Content	
        $("#" + myID + "-content").fadeIn(1000);

    })




    //console.log($("#"+myID));		
});
