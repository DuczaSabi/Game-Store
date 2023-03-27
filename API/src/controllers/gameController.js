const client = require("../config/databaseConnection.js");
async function fetchGames (req, res) {
  let categ = req.query.category
  if (!categ) categ = 'all'
  const result = await client.query(`SELECT * FROM sortgenre('${ categ }')`);
  res.status(200);
  res.json(result.rows);
}

module.exports = { fetchGames };
