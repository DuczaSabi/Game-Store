const express = require("express");
const router = express.Router();
const {
  fetchGames,
  modifyGame,
  addGame,
  deleteGame,
} = require("../controllers/gameController.js");

router.get("/games", fetchGames);
router.put("/game", modifyGame);
router.put("/add", addGame);
router.put("/delete", deleteGame);

module.exports = router;
