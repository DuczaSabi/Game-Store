import React from "react";
import "../stylesheets/cartStyle.css";
import { Button, Paper, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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

        <div class="product">
          <img
            src="../stockImg.png"
            alt="Game_Image"
            style={{ marginLeft: "30px", display: "inline-block" }}
          ></img>
          <p class="gameName">Game name</p>
          <div class="priceRemove">
            <p style={{ display: "inline-block" }}>20$</p>
            <Button
              variant="outlined"
              sx={{
                float: "right",
                marginLeft: "80px",
              }}
              startIcon={<DeleteIcon />}
            >
              Remove product
            </Button>
          </div>
        </div>
        <hr></hr>
        <div class="product">
          <img
            src="../stockImg.png"
            alt="Game_Image"
            style={{ marginLeft: "30px", display: "inline-block" }}
          ></img>
          <p class="gameName">Game name</p>
          <div class="priceRemove">
            <p style={{ display: "inline-block" }}>20$</p>
            <Button
              variant="outlined"
              sx={{
                float: "right",
                marginLeft: "80px",
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
          width: "500px",
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
    </>
  );
};

export default CartPage;
