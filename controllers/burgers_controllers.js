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



//Patch, BurgerID