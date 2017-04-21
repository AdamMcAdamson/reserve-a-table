var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname,"html/index.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname,"html/reserve.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname,"html/tables.html"));
});

app.get("/reserve/api/tables/:reservation?", function(req, res) {

});
app.get("/tables/api/waitlist/", function(req, res) {

});

app.post("/tables/api/clear/", function(req, res) {

});
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});