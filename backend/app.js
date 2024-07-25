const express = require("express");
const app = express();

app.use(express.json());

// Middlewares and routes would go here
// Import all routes
const products = require("./routes/product");

app.use("/api/v1", products);

module.exports = app;
