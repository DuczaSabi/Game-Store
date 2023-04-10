const client = require("../config/databaseConnection.js");

async function fetchGames(req, res) {
  try {
    let { category, search, page, limit } = req.query;

    if (!(page && limit)) {
      page = 1;
      limit = 20;
    }

    if (search) {
      const result = await client.query(
        `SELECT * FROM search('${search}', ${page}, ${limit})`
      );
      const count = await client.query(
        `SELECT * FROM search_count('${search}')`
      );
      const returnObj = {
        page: page,
        limit: limit,
        count: count.rows[0].search_count,
        data: result.rows,
      };
      res.status(200);
      res.json(returnObj);
    } else {
      if (!category) category = 0;
      const result = await client.query(
        `SELECT * FROM sortgenre('${category}', ${page}, ${limit})`
      );
      const count = await client.query(
        `SELECT * FROM sortgenre_count('${category}')`
      );
      const returnObj = {
        page: page,
        limit: limit,
        count: count.rows[0].sortgenre_count,
        data: result.rows,
      };
      res.status(200);
      res.json(returnObj);
    }
  } catch (err) {
    console.log(err);
  }
}

async function modifyGame(req, res) {
  try {
    let { Id, Title, Image, Genre, Link, Price } = req.body;

    if (Id) {
      const result = await client.query(
        `SELECT updategame(${Id}, '${Title}', '${Image}', '${Genre}', '${Link}', ${Price})`
      );
      if (result) {
        res.status(200);
        res.send("Update successful!");
      } else {
        res.status(400);
        res.send("Update failed");
      }
    } else {
      res.status(404).send("Id required!");
    }
  } catch (err) {
    console.log(err);
  }
}

async function addGame(req, res) {
  try {
    let { Title, Image, Genre, ReleaseDate, Link, Price } = req.body;

    if (Title || Image || Genre || ReleaseDate || Link || Price) {
      console.log("🚀 ~ addGame ~ Price:", Price);
      console.log("🚀 ~ addGame ~ Link:", Link);
      console.log("🚀 ~ addGame ~ ReleaseDate:", ReleaseDate);
      console.log("🚀 ~ addGame ~ Genre:", Genre);
      console.log("🚀 ~ addGame ~ Image:", Image);
      console.log("🚀 ~ addGame ~ Title:", Title);
      const title = Title;

      const result = await client.query(
        `INSERT INTO public."Game"(
          "Title", "Image", "Publisher", "ReleaseDate", "Genre", "Size", "Link", "Price")
          VALUES ('${Title}', '${Image}', ' ', '${ReleaseDate}', '${Genre}',  0, '${Link}', ${Price});`
      );
      if (result) {
        res.status(200);
        res.send("Game added successfully!");
      } else {
        res.status(400);
        res.send("Failed to add game!");
      }
    } else {
      res.status(404).send("All fields required!");
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteGame(req, res) {
  try {
    let Id = req.params.Id;

    if (Id) {
      const result = await client.query(
        `DELETE FROM "Game" WHERE "Id" = '${Id}'`
      );
      if (result) {
        res.status(200);
        res.send("Delete successful!");
      } else {
        res.status(400);
        res.send("Delete failed");
      }
    } else {
      res.status(404).send("Id required!");
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { fetchGames, modifyGame, addGame, deleteGame };
