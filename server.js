const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "WSC Api is up" });
});

module.exports = server;
