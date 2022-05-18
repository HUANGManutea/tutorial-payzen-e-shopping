// modules serveur
const express = require("express");

const app = express();
const port = 3001;

app.post("/sign", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`Payzen e-shopping backend server listening on port ${port}`);
});