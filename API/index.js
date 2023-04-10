const cors = require("cors");
const express = require("express");
const app = express();

const gameRouter = require("./src/routers/gameRouter.js");
const userRouter = require("./src/routers/userRouter.js");
const genreRouter = require("./src/routers/genreRouter.js");

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/api", gameRouter);
app.use("/api", userRouter);
app.use("/api", genreRouter)

app.get("/", function (req, res) {
  res.send("Game Store API");
});

app.listen(3001);
