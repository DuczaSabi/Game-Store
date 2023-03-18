const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "pw123",
  database: "Game_Store",
});
client.connect();

module.exports = client;
