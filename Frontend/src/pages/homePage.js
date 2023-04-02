import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../stylesheets/homeStyle.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  useStepContext,
} from "@mui/material";
import { fetchGames } from "../store/actions/games.js";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import Input from "@mui/material/Input";
import Grow from "@mui/material/Grow";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
const _ = require("lodash");

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
  marginLeft: "-100px",
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

const pagination = {
  margin: "20px",
};

const products = {};

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = [
    "New",
    "Free",
    "Sport",
    "Shooter",
    "Horror",
    "Strategy",
    "all",
  ];
  let categLegnth = 0;

  const [category, setCategory] = useState("all");
  const [searchKey, setSearchKey] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGames(category, searchKey, page, 20));
  }, [page, category, searchKey, dispatch]);

  const [cartItemsNumber, setCartItemsNumber] = useState(
    sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart")).length
      : 0
  );
  let inputVal = "";

  const gameState = useSelector((state) => state.games);
  const { data, isFetching, errorMessage } = gameState;

  function addToCart(game) {
    let data = sessionStorage.getItem("cart");

    if (data === null) data = [];
    else data = JSON.parse(data);

    data.push(game);

    sessionStorage.setItem("cart", JSON.stringify(data));
    setCartItemsNumber(cartItemsNumber + 1);
  }

  function handleCategoryClick(category) {
    setSearchKey("");
    setPage(1);
    setCategory(category);
  }

  function handleSeach(search) {
    setPage(1);
    setSearchKey(search);
  }

  function handlePageChange(e, pageNo) {
    setPage(pageNo);
  }

  const debounce_fun = _.debounce(function (search) {
    handleSeach(search);
  }, 500);

  return (
    <>
      <div style={header}>
        <img
          src={require("./gameStoreLogo.webp")}
          alt="Game Store Logo"
          style={logo}
        ></img>
        <Input
          placeholder="Search..."
          style={searchBar}
          onChange={(e) => {
            debounce_fun(e.target.value);
          }}
        />
        {categories.map(
          (category, index) => (
            (categLegnth = category.length),
            (
              <Button
                key={index}
                sx={{
                  display: "inline-block",
                  width: 60 + categLegnth * 15 + "px",
                  height: "50px",
                  color: "purple",
                  fontSize: "30px",
                  marginTop: "-17px",
                  marginLeft: "15px",
                }}
                variant="text"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            )
          )
        )}
        <IconButton
          style={logoutRegister}
          onClick={() => {
            localStorage.removeItem("token");
          }}
          href="/login"
          sx={{ color: "purple", marginTop: "10px", marginRight: "20px" }}
        >
          <LogoutIcon
            sx={{
              width: "50px",
              height: "50px",
            }}
          ></LogoutIcon>
        </IconButton>

        <IconButton
          style={cart}
          href="/cart"
          aria-label="cart"
          sx={{ color: "purple", marginTop: "10px", marginRight: "20px" }}
        >
          <StyledBadge badgeContent={cartItemsNumber} color="secondary">
            <ShoppingCartIcon
              sx={{
                width: "50px",
                height: "50px",
              }}
            ></ShoppingCartIcon>
          </StyledBadge>
        </IconButton>
      </div>
      <div style={products}>
        {isFetching
          ? "Loading products"
          : errorMessage
          ? "error"
          : data && data.data.length > 0
          ? data.data.map((game, index) => (
              <Grow in={true}>
                <Card
                  key={index}
                  sx={{
                    width: 350,
                    height: 500,
                    display: "inline-block",
                    position: "relative",
                    margin: 2,
                    textAlign: "left",
                  }}
                >
                  <CardActionArea href={game.Link} target="_blank">
                    <CardMedia
                      component="img"
                      height="350"
                      image={
                        game.Image != "kep"
                          ? game.Image
                          : require("./stockImg.png")
                      }
                      alt="game image"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ lineHeight: "20px", textOverflow: "ellipsis" }}
                      >
                        {game.Title}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                        {game.Genre}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button style={addButton} onClick={() => addToCart(game)}>
                      Add to cart
                    </Button>
                    <Typography style={price}>
                      {game.Price > 0 ? game.Price + "$" : "Free"}
                    </Typography>
                  </CardActions>
                </Card>
              </Grow>
            ))
          : "no games found"}
      </div>
      <Container
        maxWidth="sm"
        sx={{
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={Math.ceil(data.count / data.limit) || 1}
          variant="outlined"
          color="secondary"
          size="large"
          style={pagination}
          page={page}
          onChange={(e, pageNo) => {
            handlePageChange(e, pageNo);
          }}
        />
      </Container>
    </>
  );
};

export default HomePage;
