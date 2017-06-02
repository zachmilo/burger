const express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get('/', function(req, res) {
  var data = {
    eatenBurgers: [],
    burgers: []
    };
  burger.all("burgers",function(result) {
    for(var burger in result) {
      if (result[burger].devoured === 1)
      {
        data.eatenBurgers.push(result[burger]);
      }
      else {
        data.burgers.push(result[burger]);
      }
    }
    res.render("index",data);
  });
});

router.get('/select', function(req, res) {
});

router.post('/insert', function(req, res) {
  var burgerName = req.body.burgerName;
  burger.create(burgerName,function(result) {
    res.send(result);
  });
});

router.post('/update', function(req, res) {
  var burgerID = req.body.burgerID;
  var devoured = req.body.devoured;
  burger.update(burgerID,devoured, function(result) {
    res.send(result);
  });
});

module.exports = router;
