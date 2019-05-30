const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, columns, values) {
        var queryString = "INSERT INTO ?? (??) VALUES ??;";
        connection.query(queryString, [tableInput, columns, values], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, columns, values, conditions) {
        var queryString = "UPDATE ?? SET ?? WHERE ??;";
        var setString = "";

        for (let ii = 0; ii < columns.length; i++) {
            setString.concat(columns[ii], "=", values[ii]);
            
            if ((ii + 1) < columns.length) setString += ",";
        }

        connection.query(queryString, [tableInput, setString, conditions], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
}

module.exports = orm;