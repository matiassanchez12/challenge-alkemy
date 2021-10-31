const { db } = require("../db/db.js");

exports.list = (req, res) => {
    const sqlSelect = "SELECT * from usuarios ORDER BY id DESC LIMIT 10";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
};

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const sqlSelect = "SELECT * from usuarios WHERE email = ? AND password = ?";

    db.query(sqlSelect, [email, password], (err, result) => {
        const user = result[0];
        if (err) {
            return res.status(200).json({ message: err });
        } else if (!user) {
            return res.status(200).json({ message: "error" });
        }
        return res.status(200).json({
            message: "ok",
            user: user,
        });
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