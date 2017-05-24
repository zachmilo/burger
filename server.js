const express = require("express"),
      burgerCon = require("./controllers/burgers_controller");

var app = express();
const PORT = process.env.PORT || 8080;

app.use("/burger", burgerCon);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
