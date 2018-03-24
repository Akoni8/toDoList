var express = require("express");
var app = express();
var todoRoutes = require("./routes/todo");
var bodyParser = require("body-parser");

app.use('/api/todo', todoRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));



app.get('/', function(req, res){
    res.sendFile("index.html");
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server listening...");
});