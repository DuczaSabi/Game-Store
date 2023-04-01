const client = require("../config/databaseConnection.js");

async function fetchGames (req, res) {
  let { category, search, page, limit, } = req.query

  if (!(page && limit)) {
    page = 1
    limit = 20
  }

  if (search) {
    const result = await client.query(`SELECT * FROM search('${ search }', ${ page }, ${ limit })`);
    const count = await client.query(`SELECT * FROM search_count('${ search }')`)
    const returnObj = {
      page: page,
      limit: limit,
      count: count.rows[0].search_count,
      data: result.rows
    }
    res.status(200);
    res.json(returnObj);
  }
  else {
    if (!category) category = 'all'
    const result = await client.query(`SELECT * FROM sortgenre('${ category }', ${ page }, ${ limit })`);
    const count = await client.query(`SELECT * FROM sortgenre_count('${ category }')`)
    const returnObj = {
      page: page,
      limit: limit,
      count: count.rows[0].sortgenre_count,
      data: result.rows
    }
    res.status(200);
    res.json(returnObj);
  }
}

module.exports = { fetchGames };
