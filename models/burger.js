var orm = require("../config/orm.js");

var burger = {
    //Called from inside burg_cont when client sends get to home
    allBurgers: function(call) {
        console.log("burger.allBurgers Method");
        orm.selectAll("burgers", function(res) {
            call(res);
        })
    },

    insertBurger: function(vals, call) {
        console.log(`burger.insertBurger Method: ${vals}`);

        orm.insertOne("burgers", "burger_name", vals, function(res) {
            call(res);
        });
    },

    updateBurger: function(col, val, condition, call) {
        orm.updateOne("burgers", col, val, condition, function(res) {
            call(res);
        } )
    }
};

module.exports = burger;