const express = require("express");
const app = express();
require("./Database/connection");
const port = process.env.PORT | 4000;

app.get("/", (req, res) => {
  res.status(400).json({
    msg: "Server started"
  });
});

app.listen(port, () => {
  console.log(`Server started port no ${port}`);
});
