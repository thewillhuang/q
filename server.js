'use strict';

var express = require('express');
var app = express();
var port = 3000;
var bodyparser  = require('body-parser');
var path =

app.use(bodyparser.json());

app.use(function(req, res, next) {
  console.log(req.method, req.url, req.body);
  next();
});

app.get('/hi/:one/:two', function(req, res) {
  res.send('hello ' + req.params.one + ' my name is ' + req.params.two);
});

app.post('/hi/:var1/:var2', function(req, res) {
  res.json({
    one: req.params.var1,
    two: req.params.var2
  });
});

app.listen(port);
console.log('server started at', port);
