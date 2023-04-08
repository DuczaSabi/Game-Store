const express = require("express");
const router = express.Router();
const {
  fetchGames,
  modifyGame,
  addGame,
  deleteGame,
} = require("../controllers/gameController.js");

router.get("/games", fetchGames);
router.put("/games", modifyGame);
router.post("/games", addGame);
router.delete("/games/:Id", deleteGame);

module.exports = router;
