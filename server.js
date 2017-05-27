const express = require("express"),
      burgerCon = require("./controllers/burgers_controller"),
      bodyParser = require("body-parser");

var app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/", burgerCon);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
