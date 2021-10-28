const { db } = require("../db/db.js");

exports.list = (req, res) => {
    const sqlSelect = "SELECT * from usuarios";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
};

exports.findById = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const sqlSelect = "SELECT * from usuarios WHERE email = ? AND password = ?";
    db.query(sqlSelect, [email, password], (err, result) => {
        const data = result[0];
        if (data === undefined) {
            res.send("error");
        }
        res.send("ok");
    });
};

exports.create = (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;

    const sqlInsert =
        "INSERT INTO usuarios (nombre, email, password) VALUES (?,?,?)";
    db.query(sqlInsert, [nombre, email, password], (err, result) => {
        res.send(result);
    });
};