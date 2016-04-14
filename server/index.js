// API backend =======================================================
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var REST_PORT = 3000;
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var server = app.listen(REST_PORT, function () {
  var host = this.address().address;
  var port = this.address().port;

  console.log('Express server listening on http://%s:%s', host, port);
});
