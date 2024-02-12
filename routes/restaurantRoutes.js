const { create } = require("../controllers/restaurantController");
const { isLoggedIn } = require("../middleware/auth");

const router = require("express").Router();

router.post("/create", isLoggedIn, create);

module.exports = router;
