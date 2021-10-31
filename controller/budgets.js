const { db } = require("../db/db.js");

exports.list = (req, res) => {
    const sqlSelect =
        "SELECT id, id_usuario, concepto, monto, tipo, fecha, categoria from presupuesto";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
};

exports.create = (req, res) => {
    const concepto = req.body.concepto;
    const monto = req.body.monto;
    const tipo = req.body.tipo;
    const fecha = req.body.fecha;
    const categoria = req.body.categoria;
    const id_usuario = req.body.id_usuario;

    const sqlInsert =
        "INSERT INTO presupuesto (id_usuario, concepto, monto, tipo, fecha, categoria) VALUES (?,?,?,?,?,?)";
    db.query(
        sqlInsert, [id_usuario, concepto, monto, tipo, fecha, categoria],
        (err, result) => {
            res.send(result);
        }
    );
};

exports.remove = (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM presupuesto WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    });
};

exports.edit = (req, res) => {
    const id = req.params.id;
    const concepto = req.body.concepto;
    const monto = req.body.monto;
    const fecha = req.body.fecha;
    const categoria = req.body.categoria;
    const sqlUpdate =
        "UPDATE presupuesto SET concepto = ?, monto = ?, fecha = ?, categoria = ? WHERE id = ?";
    db.query(
        sqlUpdate, [concepto, monto, fecha, categoria, id],
        (err, result) => {
            if (err) console.log(err);
        }
    );
};