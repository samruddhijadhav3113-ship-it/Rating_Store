const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { sequelize } = require("../models");

router.post("/signup", async (req, res) => {
  const { name, email, address, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    await sequelize.query(
      `INSERT INTO users (name, email, address, password, role) VALUES (?, ?, ?, ?, 'normal')`,
      {
        replacements: [name, email, address, hashedPassword],
      }
    );
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error while signup" });
  }
});

module.exports = router;
