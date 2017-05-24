const con = require("./connection");

var orm = {
  selectAll:function(cb) {
    con.query("SELECT * FROM burgers", function (error,results){
      if(error) throw error;
      cb(error,results);
    });
  },
  insertOne: function(insert, cb) {
    con.query("INSERT INTO burgers SET ??",{ burger_name: insert }, function (error,results) {
      if(error) throw error;
      cb(error,results);
    });
  },
  updateOne: function(burgerID,devoured, cb) {
    con.query("UPDATE burgers SET devoured = ?? where id = ??",[devoured,burgerID], function (error,results) {
      if(error) throw error;
      cb(error,results);
    });
  }
}

module.exports = {
  orm
}
