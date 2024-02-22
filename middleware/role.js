const role = (...role) => {
  try {
    return (req, res, next) => {
      if (!role.includes(req.body.user.userType)) {
        return res.status(301).json({
          success: false,
          message: "Invalid access",
        });
      }
      next();
    };
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in role middleware: " + error.message,
    });
  }
};

module.exports = role;
