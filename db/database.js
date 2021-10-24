const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "379784577a",
    database: "crud",
});

exports.list = (req, res) => {
    const sqlSelect = "SELECT id, concepto, monto, tipo, fecha from presupuesto";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
};

exports.create = (req, res) => {
    const concepto = req.body.concepto;
    const monto = req.body.monto;
    const tipo = req.body.tipo;
    const fecha = req.body.fecha;

    const sqlInsert =
        "INSERT INTO presupuesto (concepto, monto, tipo, fecha) VALUES (?,?,?,?)";
    db.query(sqlInsert, [concepto, monto, tipo, fecha], (err, result) => {
        console.log(result);
    });
};

exports.remove = (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM presupuesto WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err)
    });
};

exports.edit = (req, res) => {
    const id = req.params.id;
    const concepto = req.body.concepto;
    const monto = req.body.monto;
    const fecha = req.body.fecha;
    const sqlUpdate = "UPDATE presupuesto SET concepto = ?, monto = ?, fecha = ? WHERE id = ?";
    db.query(sqlUpdate, [concepto, monto, fecha, id], (err, result) => {
        if (err) console.log(err)
    });
};