import React, { useState, useEffect } from "react";
import { Button, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { loadStripe } from "@stripe/stripe-js";

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
  marginTop: "20px",
  marginBottom: "40px",
};

const CartPage = ({ onPaymentSuccess }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const [cartItems, setCartItems] = useState(
    sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : null
  );

  const removeProduct = (game) => {
    let cartData = JSON.parse(sessionStorage.getItem("cart"));
    cartData.splice(cartData.map((e) => e.Id).indexOf(game.Id), 1);
    sessionStorage.setItem("cart", JSON.stringify(cartData));
    setCartItems(cartData);
  };

  const handlePay = async () => {
    const stripe = await loadStripe(
      "pk_test_51MpwdCE4gyMcPkzaOqtM4zF14Z3N2RyQ2ZLBDEzlBhSPQi0HqgD9IiyDsyx1NEzHOoHi6pvJ6VYOuWATOkx6XwI0003wFy5E9a"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1MqLkDE4gyMcPkzaL2oHorQ9",
          quantity: sessionStorage.getItem("cart")
            ? JSON.parse(sessionStorage.getItem("cart")).length
            : 0,
        },
      ],
      mode: "payment",
      successUrl: `${ window.location.origin }/payment/success`,
      cancelUrl: `${ window.location.origin }`,
      // customerEmail:
    });
    if (error) console.log(error);
  };

  return (
    <>
      <Paper
        elevation={ 1 }
        sx={ {
          minWidth: "420px",
          width: "60%",
          display: "inline-block",
          margin: "40px",
        } }
      >
        <h1 style={ { textAlign: "left", marginLeft: "45px" } }>My cart</h1>
        <hr></hr>
        { cartItems && cartItems.length > 0
          ? cartItems.map((item, index) => (
            <div key={ index } style={ product }>
              <img
                src={
                  item.Image != "kep" ? item.Image : require("./stockImg.png")
                }
                alt="Game_Image"
                style={ gameImg }
              ></img>
              <p style={ gamePrice }>
                { item.Price > 0 ? item.Price + "$" : "Free" }
              </p>
              <Button
                onClick={ () => removeProduct(item) }
                variant="outlined"
                style={ removeButton }
                startIcon={ <DeleteIcon /> }
              >
                Remove product
              </Button>
              <p style={ gameName }>{ item.Title }</p>
            </div>
          ))
          : "Still empty... Go get some games" }
        { cartItems && cartItems.length > 0 ? (
          <>
            <hr></hr>
            <h2 style={ { textAlign: "left", marginLeft: "45px" } }>
              Total: { totalPrice }$
            </h2>
          </>
        ) : null }
      </Paper>

      <Button variant="contained" style={ buyButton } onClick={ handlePay }>
        Pay
      </Button>

      <Button
        href="/"
        sx={ {
          color: "white",
          borderColor: "white",
          fontSize: "20px",
          position: "fixed",
          bottom: "60px",
          right: "80px",
        } }
        startIcon={ <ArrowBackIos /> }
      >
        Leave cart
      </Button>
    </>
  );
};

export default CartPage;
