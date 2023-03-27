import React from "react";
import { Button, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

const product = {
  display: "block",
  position: "relative",
  textAlign: "left",
  paddingLeft: "40px",
  marginTop: "20px",
};

const gameImg = {
  display: "inline-block",
  marginLeft: "-15px",
  width: "25%",
  minWidth: "150px",
};

const gameName = {
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "5vmin",
  marginLeft: "20px",
  marginTop: "30px",
  width: "90%",
};

const gamePrice = {
  display: "flex",
  position: "absolute",
  right: "35px",
  top: "90px",
  fontSize: "2vmax",
};

const removeButton = {
  display: "flex",
  position: "absolute",
  right: "30px",
  top: "20px",
  color: "red",
  borderColor: "red",
};

const buyButton = {
  minWidth: "420px",
  width: "60%",
  height: "50px",
  marginTop: "40px",
};

const CartPage = () => {
  return (
    <>
      <Paper
        elevation={1}
        sx={{
          minWidth: "420px",
          width: "60%",
          display: "inline-block",
          margin: "40px",
        }}
      >
        <h1 style={{ textAlign: "left", marginLeft: "45px" }}>My cart</h1>
        <hr></hr>

        <div style={product}>
          <img
            src={require("./stockImg.png")}
            alt="Game_Image"
            style={gameImg}
          ></img>
          <p style={gamePrice}>20$</p>
          <Button
            variant="outlined"
            style={removeButton}
            startIcon={<DeleteIcon />}
          >
            Remove product
          </Button>
          <p style={gameName}>Game name that is much longer than before</p>
        </div>
      </Paper>

      <Button variant="contained" style={buyButton}>
        Pay
      </Button>

      <Button
        href="/"
        sx={{
          color: "white",
          borderColor: "white",
          fontSize: "20px",
          position: "fixed",
          bottom: "60px",
          right: "80px",
        }}
        startIcon={<ArrowBackIos />}
      >
        Leave cart
      </Button>
    </>
  );
};

export default CartPage;
