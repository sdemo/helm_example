'use strict';
var express = require('express');
var app = express();

console.log('starting');

// only one route
app.get('/', function(req, res) {
  console.log('got a request!');
  var response ='<html>';
  response += '<h2>Hello frogs!</h2><br />';
  if (process.env.STEP_URL)
    response += '<i>This image created by a </i><a href=' + process.env.STEP_URL + '>JFrog Pipelines Step</a>';
  response += '</html>';
  res.send(response);
});

var port = process.env.PORT || 80;
console.log('Listening on port: ' + port);
app.listen(port);
