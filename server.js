var express = require("express");
var app = express();
var cors = require("cors");
var fs = require("fs");

app.use(cors());

app.get("/getusers", function (req, res) {
  fs.readFile(__dirname + "/" + "Users.json", "utf8", function (error, data) {
    res.send(data);
  });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("server started at  http://%s:%s", host, port);
});
