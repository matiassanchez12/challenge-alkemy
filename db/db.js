const mysql = require("mysql");

exports.db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "379784577a",
    database: "crud",
});