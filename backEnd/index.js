const express = require("express");
const path = require("path");
const Port = 3000;

const app = express();

const frontEnd = path.join(__dirname, "..", "frontEnd", "dist");

app.use(express.static(frontEnd));

app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});
