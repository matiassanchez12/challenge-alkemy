const { db } = require("../db/db.js");
const jwt = require("jsonwebtoken");

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
        jwt.sign({ user }, "secretkey", (err, token) => {
            return res.status(200).json({
                message: "ok",
                token: token,
                user: user
            });
        });
    });
};

exports.verifyToken = (req, res) => {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(200).json({ message: "error" });
    }
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