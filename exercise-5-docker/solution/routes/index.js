var express = require("express");
var router = express.Router();
var axios = require("axios");

const API_BASE = "https://i-enjoy-lamp.azurewebsites.net/api";

router.get("/setColor", async (req, res, next) => {
  const color = req.query.color;

  // call the API to set the lamp color
  try {
    await axios.get(`${API_BASE}/setColor?color=${color}`);
    res.json({ color: color });
  } catch (err) {
    res.json({ color: color, message: "Lamp API is not available" });
  }
});

module.exports = router;
