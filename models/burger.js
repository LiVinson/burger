var orm = require("../config/orm.js");

var burger = {
    //Called from inside burg_controller.js when client sends GET request to home endpoint
    allBurgers: function(call) {
        console.log("burger.allBurgers Method");
        orm.selectAll("burgers", function(res) {
            call(res);
        })
    },
    //Called from inside burg_controller.js when client sends POST request
    insertBurger: function(vals, call) {
        console.log(`burger.insertBurger Method: ${vals}`);

        orm.insertOne("burgers", "burger_name", vals, function(res) {
            call(res);
        });
    },
    //Called from inside burg_controller.js when client sends PATCH request
    updateBurger: function(col, val, condition, call) {
        orm.updateOne("burgers", col, val, condition, function(res) {
            call(res);
        } )
    }
};

module.exports = burger;