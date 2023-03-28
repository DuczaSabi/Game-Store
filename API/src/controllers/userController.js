const client = require("../config/databaseConnection.js");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signIn = (req, res) => {

}

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!(email && password)) res.status(400).send("Email and password are requiried!")

    const existingUser = client.query("TO BE FILLED")

    if (existingUser) return res.status(409).send("User Already Exist. Please Login")

    encryptedPassword = await bcrypt.hash(password, 10)

    const token = jwt.sign(
      { email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );


  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  signIn,
  signUp,
}
