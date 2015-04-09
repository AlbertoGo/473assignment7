var express = require("express"),
	http = require("http"),
	bodyParser = require("body-parser"),
	redis = require("redis"),
	app;

var client = redis.createClient();

app = express();

app.use(express.static(__dirname + "/html"));
app.use(bodyParser());

http.createServer(app).listen(3000);

//app.get("/test", function (req, res){
//	res.redirect('test.html');
//});

app.post("/", function (req, res){
	var test = req.body.URL;
	console.log(test);
	client.set("key", test);
	var testing = client.get("key");
	res.append()
	res.redirect('/');
});

console.log("listening on 3000")