const Restaurant = require("../models/restaurant");

exports.create = async (req, res) => {
  try {
    const { name, description, address, time } = req.body;
    if (!name || !description || !address || !time) {
      return res.status(301).json({
        success: false,
        message: "Provide all the details of your restaurant",
      });
    }
    const user = req.body.user._id;
    const restaurant = await Restaurant.create({
      name,
      description,
      address,
      time,
      user,
    });
    res.status(200).json({
      success: true,
      message: "Your restaurant is created",
      restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in creating restaurant",
      error,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      message: "Your restaurant is updated",
      restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in update restaurant endpoint",
      error,
    });
  }
};
