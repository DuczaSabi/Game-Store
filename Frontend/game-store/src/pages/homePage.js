import React, { useState, useEffect } from "react";
import "../stylesheets/homeStyle.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const HomePage = () => {
  const categories = ["New", "Free", "Sport", "Shooter", "Horror", "Strategy"];
  let categLegnth = 0;
  function fetchGames() {
    fetch("http://localhost:3001/api/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }
  const [games, setGames] = useState([]);
  fetchGames();
  return (
    <>
      <div class="header">
        <img
          src="../../public/gameStoreLogo.png"
          alt="Game Store Logo"
          class="logo"
        ></img>
        <div class="buttons">
          {categories.map(
            (category) => (
              (categLegnth = category.length),
              (
                <Button
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
        <div class="cart">
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
      <div class="products">
        <Card
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
                Game title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Here is a description.
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
      </div>
    </>
  );
};

export default HomePage;
