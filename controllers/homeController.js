exports.homeController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "Welcome to home !!!",
    });
  } catch (error) {
    res.status(error.statusCode).send({
      success: false,
      message: "Error: " + error.message,
    });
  }
};
