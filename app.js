var express = require("express"),
port = '4242',
app = express();
app.use(express.static(__dirname + '/public'));
app.get("/", function(req, res){

res.sendfile("./public");
//if you need to send html tag
//res.type("text/html");
//res.send("<p>hello world!</p>");
});
app.get("/api/users",function(req,res){
    var a = {
        abc :"123"
    };
    res.json(a);
});
app.listen(port);
console.log('server is running on port' + port);