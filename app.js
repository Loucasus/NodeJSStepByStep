console.log("It Works !");

var express = require("express");
var app = express();
var http = require("http");
var CONFIG = require ("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var defaultRoute = require("./app/routes/default.route.js");

app.use(defaultRoute);

// #2
app.get("/",function(request, response,cb) {

	response.send("It works !");
});

// #3
app.use(function(request, response, cb){

	response.send("It works !");
	cb();
});

//init server

var server = http.createServer(app);
server.listen(CONFIG.port);
