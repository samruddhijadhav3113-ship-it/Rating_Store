const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { sequelize } = require("../models");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await sequelize.query(
      `SELECT * FROM users WHERE email = ? LIMIT 1`,
      { replacements: [email] }
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error while login" });
  }
});

module.exports = router;
