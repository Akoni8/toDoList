var express = require("express");
var app = express();
var todoRoutes = require("./routes/todo");
app.get('/', function(req, res){
    res.send("Hello from root");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server listening...");
});