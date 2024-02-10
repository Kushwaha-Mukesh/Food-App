const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log(
        "Connection to database established: " + mongoose.connection.host
      );
    })
    .catch((error) => {
      console.log("Error connecting to database: " + error.message);
    });
};

module.exports = connectDB;
