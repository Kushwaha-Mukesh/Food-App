const { create, update } = require("../controllers/restaurantController");
const { isLoggedIn } = require("../middleware/auth");

const router = require("express").Router();

router.post("/create", isLoggedIn, create);
router.put("/update/:id", isLoggedIn, update);

module.exports = router;
