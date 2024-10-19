const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from API" });
});

module.exports = app;
