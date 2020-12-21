const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/2", (req, res) => {
  res.send("hello ci/cd world!");
});


app.listen(80, () => {
  console.log(`Example app listening at http://localhost:80`);
});
