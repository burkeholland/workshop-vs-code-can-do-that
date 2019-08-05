var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongo:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("lamp");
  dbo.collection("colors").insert({ color: color });

  find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});