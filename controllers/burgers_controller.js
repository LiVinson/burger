var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//Routes:


//Get, home page
// When request to home received, retreive all burgers from burgers table and send response {[{burger1,...}]} to index file
router.get("/", function (req, res) {
    console.log("Home Route!");
    //When called, data will be the mySQL response passed back from orm.selectAll to model.burger.all
    burger.allBurgers(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        // res.render("index", burgerObject);
    })
});


//Post, New Burger, burgerInfo
//Called when user enters a burger name and clicks submit 
router.post("/api/newBurger", function (req, res) {
    console.log("Post! New Burger!");
    console.log(req.body);

    //Call inserBurer method, sending table columns names, values to insert into table, and function that takes in result argument, and sends insertId property as POST response
    burger.insertBurger(["burger_name", "devoured"], [req.body.name, req.body.devoured], function (result) {
      
        res.json({id: result.insertId})

    })
})


//Called when user clicks a "Devour It" button, updates devoured to true
router.patch("/api/update", function (req, res) {
    console.log("Burger was Devoured!");
    //condition will be inserted into query after WHERE
    var condition = `id = ${req.params.burgerID}`;

    burger.updateBurger("devoured", true, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
        res.status(200).end();
      }
    });

})