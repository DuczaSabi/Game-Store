import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';

const PaymentSucess = () => {

  const [redirect, setRedirect] = useState(false)
  const [timeInSeconds, setTimeInSeconds] = useState(3)

  useEffect(() => {
    setInterval(() => {
      setTimeInSeconds(timeInSeconds - 1)
      if (timeInSeconds === 0) {
        sessionStorage.removeItem("cart");
        setRedirect(true)
      }
    }, 1000)
  })

  return (
    redirect
      ? <Redirect to='/' />
      :
      <div>
        <div >Successful payment. You will be redirected soon.. { timeInSeconds }</div>
      </div>
  )
}

export default PaymentSucess;
