const cors = require("cors");
const express = require("express");
const gameRouter = require("./src/routers/gameRouter.js");
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/api", gameRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3001);
