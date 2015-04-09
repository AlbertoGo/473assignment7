var express = require("express"),
	http = require("http"),
	app;

app = express();

app.use(express.static(__dirname + "/html"));

http.createServer(app).listen(3000);

app.get("/hello", function (req, res){
	res.send("Hello World!");
});

app.get("/goodbye", function (req, res){
	res.send("Goodbye, World!");
});

console.log("listening on 3000")