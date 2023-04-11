const stripe = require('stripe')(process.env.STRIPE_SECRET);
const nodemailer = require('nodemailer');
const axios = require('axios')
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PW,
  },
});

const stripeWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WH_SECRET);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Webhook Error: ${ error.message }`);
    return;
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    console.log(paymentIntent)

    const charge = await stripe.charges.retrieve(paymentIntent.latest_charge);
    const receiptPDF = charge.receipt_url;
    const { data } = await axios.get(receiptPDF)

    const email = paymentIntent.receipt_email;

    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your receipt",
      html: data,
    });

    console.log("Message sent: %s", info.messageId);
  }

  res.json({ received: true });
}

module.exports = { stripeWebhook }
