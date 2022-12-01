const fs = require("fs")
const { parse } = require("csv-parse")
const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: 5432,
})

fs.createReadStream("./playstation_4_games.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    pool.query(`insert into "Game" ("Id", "Image", "Title", "Publisher", "ReleaseDate", "Genre", "Size", "Link")
    values(${row[0]}, 'kep', '${row[2]}', '${row[3]}', '${row[5]}', '${row[7]}', '${row[9]}', '${row[15]}')`, 
    (error, results) => {
      if (error) console.log(error)
      if(results) console.log(results)
    })
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("finished");
  });
