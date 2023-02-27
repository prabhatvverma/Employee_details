const db = require("../config/db");
/**
 * Employe controller
 */
class Employee {

    table_name = "customer";

    async create(first_name, last_name) {

        var sql = "INSERT INTO customers (first_name, last_name) VALUES (?)";
        var values = [first_name, last_name];
        db.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

    }

    async get_all() {
        var rows = [];
        db.query("SELECT * FROM customers", function (err, result, fields) {
            if (err) throw err;
            rows = result;
        });
        console.log("rows", rows);
    }

}

module.exports = new Employee;