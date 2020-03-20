const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
app.use(cors());

var corsOptions = {
  origin: "https://min-api.cryptocompare.com", // exchange rate ticker
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// app
app.use("/", cors(corsOptions), express.static(path.join(__dirname, "build")));
app.get("/*", cors(corsOptions), function(req, res) {
  console.log("/*", req);
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

var server = app.listen(9000, () => {
  console.log("Server listening on port " + server.address().port);
});
