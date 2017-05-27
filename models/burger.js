const orm = require("../config/orm");

var burger = {
  all:function(table,cb) {
      orm.selectAll(table,function(result) {
          cb(result);
      });
  },
  create: function(burger, cb) {
    orm.insertOne(burger, function(result) {
      cb(result);
    });
  },
  update: function(burgerID,devoured, cb) {
    orm.updateOne(burgerID, devoured, function(result) {
      cb(result);
    });

  }
};
module.exports = burger;
