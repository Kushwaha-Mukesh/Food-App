const {
  create,
  update,
  getRestaurants,
  deleteRestaurant,
} = require("../controllers/restaurantController");
const { isLoggedIn } = require("../middleware/auth");
const role = require("../middleware/role");

const router = require("express").Router();

router.post("/create", isLoggedIn, create);
router.put("/update/:id", isLoggedIn, update);
router.get("/getRestaurants", getRestaurants);
router.delete(
  "/deleteRestaurant/:id",
  isLoggedIn,
  role("admin"),
  deleteRestaurant
);

module.exports = router;
