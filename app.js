require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const homeRoutes = require("./routes/homeRoute");
const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const foodRoutes = require("./routes/foodRoutes");
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
app.use("/api/v1/restaurant", restaurantRoutes);
app.use("/api/v1/food", foodRoutes);

module.exports = app;
