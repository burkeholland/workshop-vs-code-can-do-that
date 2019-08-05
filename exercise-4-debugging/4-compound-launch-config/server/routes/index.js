var express = require("express");
var router = express.Router();
var axios = require("axios");

const API_BASE = process.env.API_BASE;

router.get("/setColor", async (req, res, next) => {
  const color = req.query.color;

  // call the API to set the lamp color
  try {
    await axios.get(`${API_BASE}/setColor?color=${color}`);
    res.json({ color: color });
  } catch (err) {
    res.status = 500;
  }
});

module.exports = router;
