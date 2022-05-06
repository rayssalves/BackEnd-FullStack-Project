const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const bcrypt = require("bcrypt");

// Create User
// POST the user info (name, email, password) to localhost:4000/users/signup to create a new user.

router.post("/", async (request, response) => {
  try {
    const { name, email, password } = request.body;
    if (!name || name === "") {
      return response.status(400).send({
        error: "You must provide a valid name to create a new user",
      });
    }
    if (!email || email === "") {
      return response.status(400).send({
        error: "You must provide a valid email to create a new user",
      });
    }
    if (!password || password === "") {
      return response.status(400).send({
        error: "You must provide a valid password to create a new user",
      });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    response.status(200).send({
      message: "Signed up successfully!",
      data: newUser,
    });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

module.exports = router;
