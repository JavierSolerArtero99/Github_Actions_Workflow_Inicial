const express = require("express");
const app = express();
const port = 3006;

app.get("/", (req, res) => {
  console.log('dsd');
  console.log("sdfsdf")
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
