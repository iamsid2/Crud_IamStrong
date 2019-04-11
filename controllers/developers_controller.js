var db = require("../models");
var express = require("express");
var router = express.Router();

// Displays all Developers available from the mySQL db
router.get("/", function(req, res) {
  db.Developer.findAll({}).then(function(developer_data) {
    res.render("index", {
      developer_data
    });
  });
});

// Devours Developer by updating the devoured boolean to true in the mySQL db
router.post("/developer/:id", function(req, res) {
  console.log(req.params.id);
  db.Developer.update(
    {
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function() {
    res.redirect("/");
  });
});

// Add a new Developer to the mySQL db
router.post("/add", function(req, res) {
  console.log(req.body.developer_name + " Developer added to database!");
  db.Developer.create({
    developer_name: req.body.developer_name,
    dev_org: req.body.dev_org,
    dev_type: req.body.dev_type,
    phone: req.body.phone,
    address: req.body.address,
    devoured: 0
  }).then(function() {
    res.redirect("/");
  });
});

// Deletes all Developers in the mySQL db
router.post("/delete", function(req, res) {
  db.Developer.destroy({
    where: {}
  }).then(function() {
    res.redirect("/");
  });
});

module.exports = router;
