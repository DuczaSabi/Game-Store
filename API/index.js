const cors = require("cors");
const express = require("express");
const app = express();

const gameRouter = require("./src/routers/gameRouter.js");
const userRouter = require("./src/routers/userRouter.js");
const genreRouter = require("./src/routers/genreRouter.js");
const orderRouter = require("./src/routers/orderRouter.js");
const { stripeWebhook } = require("./src/controllers/stripeController.js");

app.post("/api/webhook", express.raw({ type: 'application/json' }), stripeWebhook)

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/api", gameRouter);
app.use("/api", userRouter);
app.use("/api", genreRouter);
app.use("/api", orderRouter);

app.get("/", function (req, res) {
  res.send("Game Store API");
});

app.listen(3001);
