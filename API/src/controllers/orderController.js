const client = require("../config/databaseConnection.js");
const { v4: uuidv4 } = require('uuid');

async function saveOrder (req, res) {
  try {
    const { cart, user } = req.body

    console.log(req.body)

    if (!cart) res.status(400).send('Empty cart cannot be saved')
    const uuid = uuidv4();
    const now = Date.now();
    const date = new Date(now);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${ year }-${ month }-${ day }`;

    cart.forEach(async item => {
      await client.query(`INSERT INTO public."Orders"(
        "UserId", "GameId", "Date", "OrderId")
        VALUES ('${ user }', ${ item.Id }, '${ formattedDate }', '${ uuid }');`)
    });

    res.status(200).send('Order saved')

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  saveOrder
}
