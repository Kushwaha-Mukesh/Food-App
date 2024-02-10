require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const homeRoutes = require("./routes/homeRoute");
const app = express();

// cors used as a middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", homeRoutes);

module.exports = app;
