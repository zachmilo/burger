const express = require("express"),
      burgerCon = require("./controllers/burgers_controller"),
      exphbs  = require("express-handlebars"),
      bodyParser = require("body-parser");

var path = require("path");
var app = express();
const PORT = process.env.PORT || 8080;
app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/", burgerCon);

app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + ' ';
  response.send(result);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
