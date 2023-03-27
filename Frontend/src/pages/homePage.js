import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../stylesheets/homeStyle.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { fetchGames } from "../store/actions/games.js";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import Input from "@mui/material/Input";
import Grow from "@mui/material/Grow";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

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
  width: "250px",
};

const searchBar = {
  display: "inline-block",
  marginTop: "25px",
  marginLeft: "-180px",
  color: "purple",
  fontSize: "20px",
};

const logoutRegister = {
  display: "inlineBlock",
  position: "absolute",
  right: "90px",
  top: 0,
};

const cart = {
  display: "inlineBlock",
  position: "absolute",
  right: 0,
  top: 0,
};

const addButton = {
  display: "flex",
  position: "absolute",
  bottom: "20px",
  left: "20px",
  fontSize: "20px",
  color: "primary",
};

const price = {
  display: "flex",
  position: "absolute",
  bottom: "25px",
  right: "35px",
  color: "text.secondary",
  fontWeight: "bold",
  fontSize: "25px",
};

const products = {};

const HomePage = () => {
  const categories = ["New", "Free", "Sport", "Shooter", "Horror", "Strategy"];
  let categLegnth = 0;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const [cartItemsNumber, setCartItemsNumber] = useState(sessionStorage.getItem("cart") ? JSON.parse(sessionStorage.getItem("cart")).length : 0)

  const gameState = useSelector((state) => state.games);
  const { data, isFetching, errorMessage } = gameState;

  function addToCart (game) {
    let data = sessionStorage.getItem("cart");

    if (data === null) data = []
    else data = JSON.parse(data)

    data.push(game);

    sessionStorage.setItem("cart", JSON.stringify(data));
    setCartItemsNumber(cartItemsNumber + 1)
  }

  return (
    <>
      <div style={ header }>
        <img
          src={ require("./gameStoreLogo.webp") }
          alt="Game Store Logo"
          style={ logo }
        ></img>
        <Input placeholder="Search..." style={ searchBar } />
        { categories.map(
          (category, index) => (
            (categLegnth = category.length),
            (
              <Button
                key={ index }
                sx={ {
                  display: "inline-block",
                  width: 60 + categLegnth * 15 + "px",
                  height: "50px",
                  color: "purple",
                  fontSize: "30px",
                  marginTop: "-17px",
                  marginLeft: "15px",
                } }
                variant="text"
                onClick={ fetchGames(`SELECT * FROM sortgenre('${ category }')`) }
              >
                { category }
              </Button>
            )
          )
        ) }
        <IconButton
          style={ logoutRegister }
          href="/login"
          sx={ { color: "purple", marginTop: "10px", marginRight: "20px" } }
        >
          <LogoutIcon
            sx={ {
              width: "50px",
              height: "50px",
            } }
          ></LogoutIcon>
        </IconButton>

        <IconButton
          style={ cart }
          href="/cart"
          aria-label="cart"
          sx={ { color: "purple", marginTop: "10px", marginRight: "20px" } }
        >
          <StyledBadge badgeContent={ cartItemsNumber } color="secondary">
            <ShoppingCartIcon
              sx={ {
                width: "50px",
                height: "50px",
              } }
            ></ShoppingCartIcon>
          </StyledBadge>
        </IconButton>
      </div>
      <div style={ products }>
        { isFetching
          ? "Loading products"
          : errorMessage
            ? "error"
            : data && data.length > 0
              ? data.map((game, index) => (
                <Grow in={ true }>
                  <Card
                    key={ index }
                    sx={ {
                      width: 350,
                      height: 420,
                      display: "inline-block",
                      position: "relative",
                      margin: 2,
                      textAlign: "left",
                    } }
                  >
                    <CardActionArea href={ game.Link }>
                      <CardMedia
                        component="img"
                        height="250"
                        image={ require("./stockImg.png") }
                        alt="game image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          { game.Title }
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button style={ addButton } onClick={ () => addToCart(game) }>
                        Add to cart
                      </Button>
                      <Typography style={ price }>
                        { game.Price > 0 ? game.Price + "$" : "Free" }
                      </Typography>
                    </CardActions>
                  </Card>
                </Grow>
              ))
              : "no games found" }
      </div>
    </>
  );
};

export default HomePage;
