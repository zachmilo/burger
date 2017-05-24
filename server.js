const express = require("express"),
      burgerCon = require("../controllers/burger_controller");

const port = 8080;

var app = express();

app.use("/burger", burgerCon);
const server = http.createServer((req, res) => {
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
