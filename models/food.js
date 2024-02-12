const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "food name is required"],
    },
    description: {
      type: String,
      required: [true, "food description is required"],
    },
    price: {
      type: Number,
      required: [true, "food price is required"],
    },
    image: {
      type: String,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: String,
        rating: Number,
        Comment: String,
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Foods", foodSchema);
