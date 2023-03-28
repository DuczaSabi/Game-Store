require('dotenv').config()

const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  port: 5432,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});
client.connect();

module.exports = client;
