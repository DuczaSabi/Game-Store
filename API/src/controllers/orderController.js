const client = require("../config/databaseConnection.js");
const { v4: uuidv4 } = require('uuid');

async function saveOrder (req, res) {
  try {
    const { cart, user } = req.body

    if (!cart) res.status(400).send('Empty card cannot be saved')
    const uuid = uuidv4();
    const date = Date.now()

    cart.forEach(async item => {
      await client.query(`INSERT INTO public."Orders"(
        "UserId", "GameId", "Date", "OrderId")
        VALUES ('${ user }', ${ item.Id }, '${ date }', '${ uuid }');`)
    });

    res.status(200).send('Order saved')

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  saveOrder
}
