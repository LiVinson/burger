var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//ROUTES

//Get, home page:When request to home received, retreive all burgers from burgers table and send response {[{burger1,...}]} to index file
router.get("/", function (req, res) {
    //When called, data will be the mySQL response passed back from orm.selectAll to model.burger.all
    burger.allBurgers(function (data) {
        var burgObject = {
            burgers: data
        };
        // console.log(burgObject);
        res.render("index", burgObject);
    })
});


//Post, New Burger: Called when user enters a burger name and clicks submit 
router.post("/api/newBurger", function (req, res) {
    console.log("Post! New Burger!");
    console.log(req.body);

    //Call inserBurer method, sending table columns names, values to insert into table, and function that takes in result argument, and sends insertId property as POST response
    burger.insertBurger(req.body.name, function (result) {
        
        res.json({id: result.insertId})

    })
});


// Patch: Called when user clicks a "Devour It" button, updates devoured to 1/true in db
router.patch("/api/update/:burgId", function (req, res) {
    // console.log("Burger was Devoured!");

    //condition will be inserted into query after WHERE
    var condition = `id = ${req.params.burgId}`;
    // console.log(condition);
    burger.updateBurger("devoured", true, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
        res.status(200).end();
      }
    });

});

module.exports = router;
