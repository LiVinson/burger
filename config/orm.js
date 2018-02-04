var connection = require("./connection.js");



var orm = {
    //Called from ..\models\burger.js\burger.allBurgers()
    selectAll: function(table, cb) {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: function() {

    },
    updateOne: function() {

    }

};

module.exports = orm;