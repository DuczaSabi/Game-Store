const client = require("../config/databaseConnection.js");
async function fetchGames (req, res) {
  let { category, search } = req.query

  if (search) {
    const result = await client.query(`SELECT * FROM search('${ search }')`);
    res.status(200);
    res.json(result.rows);
  }
  else {
    if (!category) category = 'all'
    const result = await client.query(`SELECT * FROM sortgenre('${ category }')`);
    res.status(200);
    res.json(result.rows);
  }
}

module.exports = { fetchGames };
