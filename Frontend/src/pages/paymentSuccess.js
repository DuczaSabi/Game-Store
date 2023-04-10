import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { saveOrder } from "../store/actions/saveOrder";

const PaymentSucess = () => {
  const dispatch = useDispatch()

  const [redirect, setRedirect] = useState(false)

  const user = localStorage.getItem("current_user")
  const cart = JSON.parse(sessionStorage.getItem("cart"))

  const handleOnClick = () => {
    dispatch(saveOrder(cart, user))
    sessionStorage.removeItem("cart")
    setRedirect(true)
  }

  return (
    redirect
      ? <Redirect to='/' />
      :
      <div>
        <div >Successful payment. Following games are accessioble in your collection: </div>
        { cart && cart.map(c => (<div>{ c.Title }</div>)) }
        <br></br>
        <div>Please click the button to finalize.</div>
        <button onClick={ handleOnClick }>Cheers </button>
      </div>
  )
}

export default PaymentSucess;
