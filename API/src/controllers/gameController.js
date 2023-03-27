const client = require("../config/databaseConnection.js");
async function fetchGames(req, res) {
  const result = await client.query(`SELECT * FROM "Game" LIMIT 20`);
  res.status(200);
  res.json(result.rows);
}

//SELECT * FROM sortgenre('${genre}')

module.exports = { fetchGames };
