var express = require("express");
var router = express.Router();
var axios = require("axios");
var MongoClient = require("mongodb");

// initialize mongo connection
var db;
MongoClient.connect("mongodb://mongo:27017", (err, client) => {
  if (err) return console.log(err);
  db = client.db("lamp"); // whatever your database name is
});

var API_BASE = "https://lifx-lamp-api.azurewebsites.net/api";

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/set", function(req, res, next) {
  var color = req.query.color;

  // call the API to set the lamp color
  axios
    .get(`${API_BASE}/setColor?color=${color}`)
    .then(data => {
      // insert a record into the database
      db.collection("colors").insert(
        { color: color, modified: Date.now() },
        (err, result) => {
          res.send("OK");
        }
      );
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
