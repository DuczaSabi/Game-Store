const client = require("../config/databaseConnection.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  try {
    const { email, password, guest } = req.body;

    if (guest) {
      const token = jwt.sign({ email: "guest", role: "guest" }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      res.status(200).json(token)
      return
    }

    if (!(email && password)) {
      res.status(400).send("Email and password are required");
    }

    const user = await client.query(
      `SELECT * FROM public."User" WHERE "Email" LIKE '${ email }'`
    );

    const role = user.rows[0].IsAdmin ? "admin" : "user"
    console.log(
      role
    )

    if (user && (await bcrypt.compare(password, user.rows[0].Password))) {
      const token = jwt.sign({ email, role }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });

      res.status(200).json({ email, name: user.rows[0].Name, token });
    } else res.status(401).send("Invalid Credentials");
  } catch (error) {
    console.log(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(email && password))
      res.status(400).send("Email and password are requiried!");

    const existingUser = await client.query(
      `SELECT * FROM public."User" WHERE "Email" LIKE '${ email }'`
    );

    if (existingUser.rowCount > 0)
      return res.status(409).send("User Already Exist. Please Login");

    encryptedPassword = await bcrypt.hash(password, 10);

    const token = jwt.sign({ email, role: "user" }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    const userToSave = {
      email,
      token,
    };

    const savedUser = await client.query(
      `INSERT INTO public."User"("Name", "Email", "Password") VALUES ('${ name }', '${ email }', '${ encryptedPassword }');`
    );

    if (savedUser.rowCount > 0) res.status(201).json(userToSave);
    else res.status(404).send("User is not created.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signIn,
  signUp,
};
