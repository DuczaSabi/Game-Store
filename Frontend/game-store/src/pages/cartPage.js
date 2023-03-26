import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

const product = {
  display: "block",
  textAlign: "left",
  paddingLeft: "40px",
  marginTop: "20px",
};

const gameName = {
  display: "inlineBlock",
  fontWeight: "bold",
  fontSize: "larger",
  width: "30%",
};

const priceRemove = {
  display: "inlineBlock",
  minWidth: "41.385%",
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
            src="../stockImg.png"
            alt="Game_Image"
            style={{ marginLeft: "30px", display: "inline-block" }}
          ></img>
          <p style={gameName}>Game name</p>
          <div style={priceRemove}>
            <p style={{ display: "inline-block" }}>20$</p>
            <Button
              sx={{
                float: "right",
                marginRight: "20px",
                color: "red",
              }}
              startIcon={<DeleteIcon />}
            >
              Remove product
            </Button>
          </div>
        </div>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          width: "420px",
          display: "inline-block",
          textAlign: "left",
          padding: "40px",
          marginTop: "40px",
        }}
      >
        <h2 style={{ marginLeft: "20px" }}>Payment details</h2>
        <TextField id="input-email" label="E-mail" variant="outlined" />
        <br></br>
        <h4>Card data</h4>
        <TextField
          id="input-number"
          label="Primary Account Number"
          variant="outlined"
        />
        <TextField id="input-exp" label="Expiration date" variant="outlined" />

        <TextField
          id="input-cvc"
          label="CVC"
          variant="outlined"
          sx={{ marginTop: "20px" }}
        />
        <TextField
          id="input-name"
          label="Cardholder name"
          variant="outlined"
          sx={{ marginTop: "20px" }}
        />

        <TextField
          id="input-region"
          label="Country/Region"
          variant="outlined"
          sx={{ marginTop: "20px" }}
        />
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            height: "50px",
            marginTop: "40px",
          }}
        >
          Pay
        </Button>
      </Paper>

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
