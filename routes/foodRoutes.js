const {
  create,
  update,
  getFoods,
  deleteFood,
} = require("../controllers/foodController");
const { isLoggedIn } = require("../middleware/auth");
const role = require("../middleware/role");

const router = require("express").Router();

router.post("/create", isLoggedIn, create);
router.put("/update/:id", isLoggedIn, update);
router.get("/getFoods", getFoods);
router.delete("/deleteFood/:id", isLoggedIn, role("admin"), deleteFood);

module.exports = router;
