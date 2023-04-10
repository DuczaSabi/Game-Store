const client = require("../config/databaseConnection.js");

async function getGenres (req, res) {
  const result = await client.query('SELECT * FROM public."Genres"')
  if (result) res.status(200).json(result.rows)
  else res.status(404).send('Genres could not be fetched.')
}

module.exports = {
  getGenres
}
