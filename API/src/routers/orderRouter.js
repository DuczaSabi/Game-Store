const express = require("express");
const router = express.Router();
const { saveOrder } = require("../controllers/orderController.js");

router.post('/orders', saveOrder)

module.exports = router
