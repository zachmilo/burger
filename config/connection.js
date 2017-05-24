var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '!Apple45', //REMOVE THIS LINE BEFORE AND ADD TO GIT IGNORE
  database : 'burgers_db'
});
try {
connection.connect();
}
catch(e) {
  throw e;
}
module.exports = {
connection
}
