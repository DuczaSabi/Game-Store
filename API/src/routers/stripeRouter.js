const express = require("express");
const router = express.Router();
const { stripeWebhook } = require("../controllers/stripeController.js");

router.post("/webhook", stripeWebhook);

module.exports = router;
