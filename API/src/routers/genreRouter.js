const express = require("express");
const router = express.Router();
const { getGenres } = require("../controllers/genreController.js")

router.get('/genres', getGenres)

module.exports = router;
