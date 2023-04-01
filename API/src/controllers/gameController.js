const client = require("../config/databaseConnection.js");

async function fetchGames (req, res) {
  let { category, search, page, limit, } = req.query

  if (!(page && limit)) {
    page = 1
    limit = 20
  }


  if (search) {
    const result = await client.query(`SELECT * FROM search('${ search }', ${ page }, ${ limit })`);
    res.status(200);
    res.json(result.rows);
  }
  else {
    if (!category) category = 'all'
    const result = await client.query(`SELECT * FROM sortgenre('${ category }', ${ page }, ${ limit })`);
    res.status(200);
    res.json(result.rows);
  }
}

module.exports = { fetchGames };
