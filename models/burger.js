var orm = require("../config/orm.js");

var burger = {
    //Called from inside burg_cont when client sends get to home
    allBurgers: function(call) {
        orm.selectAll("burgers", function(res) {
            call(res);
        })
    },

    insertBurger: function() {
        orm.insertOne();
    },

    updateBurger: function() {

    }


}