const express = require("express");
const router = express.Router();
const { sequelize } = require("../models");

// GET all stores
router.get("/stores", async (req, res) => {
  try {
    const [stores] = await sequelize.query("SELECT * FROM stores");
    res.json(stores);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching stores" });
  }
});

// POST rating
router.post("/rate", async (req, res) => {
  const { user_id, store_id, rating } = req.body;
  try {
    await sequelize.query(
      `INSERT INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?)`,
      { replacements: [user_id, store_id, rating] }
    );
    res.json({ message: "Rating saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving rating" });
  }
});

module.exports = router;


