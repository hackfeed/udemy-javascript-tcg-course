const express = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url = "mongodb://localhost:27017";
const dbName = "location";

const client = new MongoClient(url);

router.post("/add-location", (req, res, next) => {
  client.connect(function (err, client) {
    const db = client.db(dbName);

    db.collection("user-locations").insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, r) {
        console.log(r);
        res.json({ message: "Stored location!", locId: r.insertedId });
      }
    );
  });
});

router.get("/location/:lid", (req, res, next) => {
  const locationId = req.params.lid;

  client.connect(function (err, client) {
    const db = client.db(dbName);

    db.collection("user-locations").findOne(
      {
        _id: new mongodb.ObjectId(locationId),
      },
      function (err, doc) {
        if (!doc) {
          return res.status(404).json({ message: "Not found!" });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});

module.exports = router;
