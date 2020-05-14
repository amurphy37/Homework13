var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  //hint: burger.all
  burger.all(function(data) {
    var hbsObject = {
      burger_data: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
});

// post route -> back to index
  //hint: burger.create
router.post("/api/burgers", function (req, res){
  burger.create(req.body.name, function(result){
    res.json({id: result.insertId})
  })
})


// put route -> back to index
  //hint: burger.update()
router.put("/api/burgers/:id", function (req, res){
  burger.update(req.params.id, function(result){
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
