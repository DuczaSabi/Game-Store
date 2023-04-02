const express = require("express");
const router = express.Router();
const { fetchGames, modifyGame } = require("../controllers/gameController.js");

router.get("/games", fetchGames);
router.put("/game", modifyGame);

module.exports = router;
