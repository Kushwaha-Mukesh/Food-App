const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    if (!name || !email || !password || !address || !phone) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        success: false,
        message: "User already registered",
      });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      address,
      phone,
    });
    user.password = undefined;
    res.status(200).json({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in register controller: " + error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "email and password are required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exists!!",
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "password do not match!",
      });
    }
    user.password = undefined;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const options = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      secure: true,
    };
    res.status(200).cookie("token", token, options).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in login controller: " + error.message,
    });
  }
};

exports.profile = (req, res) => {
  try {
    const { user } = req.body;
    user.password = undefined;
    res.status(200).json({
      success: true,
      message: `Welcome ${user.name} to your profile!`,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in profile controller: " + error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body;
    const { password } = req.body;
    if (password) {
      const hashPassword = await bcryptjs.hash(password, 10);
      req.body.password = hashPassword;
    }
    const updateUser = await User.findByIdAndUpdate(user._id, req.body, {
      runValidators: true,
      new: true,
    });
    updateUser.password = undefined;
    res.status(200).json({
      success: true,
      message: "update successful !",
      updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in update user controller: " + error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: user.name + " account deleted successfully !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in delete user controller: " + error.message,
    });
  }
};

exports.logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
      })
      .json({
        success: true,
        message: "Logout successfully!!",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in logout controller: " + error.message,
    });
  }
};
