const client = require("../config/databaseConnection.js");

async function getGenres (req, res) {
  try {
    const result = await client.query('SELECT * FROM public."Genres"')
    if (result) res.status(200).json(result.rows)
    else res.status(404).send('Genres could not be fetched.')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getGenres
}
