var orm = require("../config/orm.js");

var burger = {
    //Called from inside burg_cont when client sends get to home
    allBurgers: function(call) {
        orm.selectAll("burgers", function(res) {
            call(res);
        })
    },

    insertBurger: function(cols, vals, call) {
        orm.insertOne("burgers", cols, vals, function(res) {
            call(res);
        });
    },

    updateBurger: function(col, val, condition, call) {
        orm.updateOne("burgers", col, val, condition, function(res) {
            call(res);
        } )
    }


}