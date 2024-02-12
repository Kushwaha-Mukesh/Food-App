const jwt = require("jsonwebtoken");
const User = require("../models/user");
exports.isLoggedIn = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(404).json({
        success: false,
        message: "Login to proceed !!!",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decode.id);
    req.body.user = user;
    next();
  } catch (error) {
    return res
      .status(500)
      .send("Error in logged in middleware: " + error.message);
  }
};
