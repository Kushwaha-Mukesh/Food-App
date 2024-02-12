const {
  register,
  login,
  profile,
  logout,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");
const { isLoggedIn } = require("../middleware/auth");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", isLoggedIn, profile);
router.post("/updateUser", isLoggedIn, updateUser);
router.get("/logout", logout);
router.get("/deleteUser/:id", deleteUser);

module.exports = router;
