const express = require("express");
const exphbs  = require('express-handlebars');
var burger = require("../models/burger");

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile();
});

router.get('/select', function(req, res) {
  burger.all("burgers",function(result) {
    res.send(result);
  });
});

router.post('/insert', function(req, res) {
  var burgerName = req.body.burgerName;
  console.log(burgerName);
  burger.create(burgerName,function(result) {
    res.send(result);
  });
});

router.post('/update', function(req, res) {
  var burgerID = req.body.burgerID;
  var devoured = req.body.devoured;
  console.log(req.body);
  burger.update(burgerID,devoured, function(result) {
    res.send(result);
  });
});

module.exports = router;
