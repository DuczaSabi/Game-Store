const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController.js");

router.get("/games", gameController.fetchGames);

module.exports = router;
