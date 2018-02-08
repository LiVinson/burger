var connection = require("./connection.js");

var orm = {
    //Called from ..\models\burger.js\burger.allBurgers()
    selectAll: function (table, cb) {
        
        var queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        })
    },
    insertOne: function (table, colName, value, cb) {
        //Builds queryString with table name, colNames array converted to string, and 1 question mark for each item in values array
           
        var queryString = `INSERT INTO ${table} (${colName}) VALUES ('${value}')`;
        // console.log(queryString);

        connection.query(queryString, value, function (err, result) {
            if (err) {
                throw err;
            };
            // console.log(result.insertId);
            cb(result);
        })

    },
    updateOne: function (table, colName, value, condition, cb) {
        var queryString = `UPDATE ${table} SET ${colName}=${value} WHERE ${condition}`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };
            // console.log(result);
            cb(result);
        })

    }

};

module.exports = orm;