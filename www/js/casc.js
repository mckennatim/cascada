var state = "OFF";
var til = 15;
var relay = 0;
$('#main-page').live('pageinit', function(event) {
    $(".button-boost").click(function() {
        if(state=="OFF"){
            console.log("currently off");
            $(".button-boost span").html("turn <br/>OFF");
            $(".button-big span").css('color', 'red');            
            $(".button-boost img").attr('src','img/Waterfall_on.gif');
            til = $('#until').val();
            console.log(til)
            state="ON";
        }else {
            console.log("currently on");
            $(".button-boost span").html("turn <br/>ON");
            $(".button-big span").css('color', 'green');
            $(".button-boost img").attr('src','img/Waterfall_off.gif');
            state="OFF";
        }
        console.log("?status="+state+"&relay=0&til="+til);
        $.get("../services/curl.php", { status: state, relay: "0",til: til } );
    });
    $("#ctr-timed").click(function(){
        til = $('#ctr-sld').val();
        state='ON';
        relay="2";
        console.log("?status="+state+"&relay="+relay+"&til="+til);
        $.get("../services/curl.php", { status: state, relay: relay, til: til } );        
    })    
    $("#br-timed").click(function(){
        til = $('#br-sld').val();
        state='ON';
        relay="1";
        console.log("?status="+state+"&relay="+relay+"&til="+til);
        $.get("../services/curl.php", { status: state, relay: relay, til: til } );        
    })	
    $("#ctr-on").click(function(){
        state='ON';
        relay="2";
        console.log("?status="+state+"&relay="+relay);
        $.get("../services/curl.php", { status: state, relay: relay} );        
    })     
    $("#br-on").click(function(){
        state='ON';
        relay="1";
        console.log("?status="+state+"&relay="+relay);
        $.get("../services/curl.php", { status: state, relay: relay} );        
    })     
    $("#ctr-off").click(function(){
        state='OFF';
        relay="2";
        console.log("?status="+state+"&relay="+relay);
        $.get("../services/curl.php", { status: state, relay: relay} );        
    })     
    $("#br-off").click(function(){
        state='OFF';
        relay="1";
        console.log("?status="+state+"&relay="+relay);
        $.get("../services/curl.php", { status: state, relay: relay} );        
    })     
});