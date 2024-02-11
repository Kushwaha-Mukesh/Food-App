require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const homeRoutes = require("./routes/homeRoute");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const app = express();

// cors used as a middleware
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", homeRoutes);
app.use("/api/v1/user", userRoutes);

module.exports = app;
