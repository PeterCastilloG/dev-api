const Router = require("express");

const test = Router();

test.post("/form", (req, res) => {
  res.json({ message: "success" });
});

module.exports = test;
