const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name of restaurant is required"],
    },
    description: {
      type: String,
      required: [true, "description of restaurant is required"],
    },
    foods: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Foods",
        },
      },
    ],
    address: {
      type: String,
      required: [true, "address of restaurant is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    time: String, // opening and closing time of restaurant
  },
  { timestamps: true }
);
module.exports = mongoose.model("Restaurant", restaurantSchema);
