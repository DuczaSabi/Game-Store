const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.post("/signin", gameController.signIn);
router.post("/signup", gameController.signUp);

module.exports = router;
