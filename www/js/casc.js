var state = "OFF";
var til = 15;
$('#main-page').live('pageinit', function(event) {
    $(".button-boost").click(function() {
        if(state=="OFF"){
            console.log("currently off");
            $(".button-boost span").html("turn <br/>OFF");
            $(".button-big span").css('color', 'red');            
            $(".button-boost img").attr('src','img/Waterfall_on.gif');
            til = $('#until').val();
            state="ON";
        }else {
            console.log("currently on");
            $(".button-boost span").html("turn <br/>ON");
            $(".button-big span").css('color', 'green');
            $(".button-boost img").attr('src','img/Waterfall_off.gif');
            state="OFF";
        }
        console.log("?status="+state+"&relay=0&til="+til);
        $.get("../../services/curl.php", { status: state, relay: "0",til: til } );
    });	
});