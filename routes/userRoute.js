const { register, verifyUser } = require("../Controller/userController");

const router = require("express").Router();

router.post("/register", register);
router.post("/verifyemail/:token", verifyUser);
router.post("");

module.exports = router;
