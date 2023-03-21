import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../stylesheets/homeStyle.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { fetchGames } from "../store/actions/games.js";

const header = {
  backgroundImage:
    "linear-gradient(to right, rgb(255, 196, 0), rgb(255, 149, 0)",
  color: "white",
  borderBottom: "4px solid purple",
  minHeight: "80px",
  height: "auto",
};

const logo = {
  display: "inlineBlock",
  position: "absolute",
  left: 0,
  top: 0,
};

const buttons = {
  display: "inline",
};

const cart = {
  display: "inlineBlock",
  position: "absolute",
  right: 0,
  top: 0,
};

const products = {};

const HomePage = () => {
  const categories = ["New", "Free", "Sport", "Shooter", "Horror", "Strategy"];
  let categLegnth = 0;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const gameState = useSelector((state) => state.games);
  const { data, isFetching, errorMessage } = gameState;

  console.log(data);
  return (
    <>
      <div style={header}>
        <img
          src="../../public/gameStoreLogo.png"
          alt="Game Store Logo"
          style={logo}
        ></img>
        <div style={buttons}>
          {categories.map(
            (category, index) => (
              (categLegnth = category.length),
              (
                <Button
                  key={index}
                  sx={{
                    width: 60 + categLegnth * 15 + "px",
                    height: "50px",
                    color: "purple",
                    fontSize: "30px",
                    marginTop: "15px",
                    marginLeft: "15px",
                  }}
                  variant="text"
                >
                  {category}
                </Button>
              )
            )
          )}
        </div>
        <div style={cart}>
          <Button sx={{ color: "purple", marginTop: "10px" }}>
            <ShoppingCartIcon
              sx={{
                width: "50px",
                height: "50px",
              }}
            ></ShoppingCartIcon>
          </Button>
        </div>
      </div>
      <div style={products}>
        {isFetching
          ? "loadingAnimation"
          : errorMessage
          ? "error"
          : data && data.length > 0
          ? data.map((game, index) => (
              <Card
                key={index}
                sx={{
                  width: 350,
                  height: 420,
                  display: "inline-block",
                  margin: 2,
                  textAlign: "left",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="game image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {game.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {game.Link}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold", marginLeft: 8 }}
                  >
                    20$
                  </Typography>
                </CardActions>
              </Card>
            ))
          : "no games found"}
      </div>
    </>
  );
};

export default HomePage;
