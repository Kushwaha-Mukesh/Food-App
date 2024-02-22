const Food = require("../models/food");

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

exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({
      success: true,
      foods,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in getting all foods: " + error.message,
    });
  }
};

exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: food.name + " has been deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in deleting restaurant: " + error.message,
    });
  }
};
