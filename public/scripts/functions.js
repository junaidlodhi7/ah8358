var abc= function() {

    $.ajax
    ({
    type: "GET",
    url: "/api/users",
    success: function(res)
    {
       
        alert(res);
    }
    });
};

var send = function(){
        console.log("sent");
};