const cors = require("cors");
const express = require("express");
const app = express();

const gameRouter = require("./src/routers/gameRouter.js");
const userRouter = require("./src/routers/userRouter.js")

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/api", gameRouter);
app.use("/api", userRouter)

app.get("/", function (req, res) {
  res.send("Game Store API");
});

app.listen(3001);
