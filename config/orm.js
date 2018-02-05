var connection = require("./connection.js");

//Called when building query to insert new row: For the number of items in the values array, send back a string of placeholder question marks for query
var getPlaceholders = function(itemNum) {
    var arr = [];

    for (var i =0; i< itemNum; i++) {
        arr.push("?")
    }
    return arr.toString()
}

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
    insertOne: function(table, colNames, values, cb) {
        //Builds queryString with table name, colNames array converted to string, and 1 question mark for each item in values array
        var queryString = `INSERT INTO ${table} (${colNames.toString()}) VALUES (${getPlaceholders(values.length)}) `;
        console.log(queryString);

        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result); 
        })

    },
    updateOne: function() {

    }

};

module.exports = orm;