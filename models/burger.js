const orm = require("../config/orm.js");

var burger = {
    selectAll: function(call) {
        orm.selectAll("burgers", function(res) {
            call(res);
        })
    },
    createOne: function(columns, values, call) {
        orm.insertOne("burgers", columns, values, function(res) {
            call(res);
        });
    },
    updateOne: function(columns, values, conditions, call) {
        orm.updateOne("burger", columns, values, conditions, function(res) {
            call(res);
        });
    }
};

module.exports = burger;