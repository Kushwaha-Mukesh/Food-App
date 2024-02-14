const Food = require("../models/food");
const Restaurant = require("../models/restaurant");

exports.create = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(301).json({
        success: false,
        message: "Provide all the details of your food",
      });
    }
    const food = await Food.create({
      name,
      description,
      price,
    });
    res.status(200).json({
      success: true,
      message: "Your food is created",
      food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in creating food endpoint",
      error,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Your food is updated",
      food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in update food endpoint",
      error,
    });
  }
};
