exports.homeController = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome to home !!!",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error: " + error.message,
    });
  }
};
