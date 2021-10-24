exports.hello = (req, res) => {
    res.json({
        data: [{
                concepto: "gasto",
                monto: "100",
                fecha: "2000-12-12",
                tipo: "ingreso",
            },
            {
                concepto: "gasto",
                monto: "200",
                fecha: "2000-12-12",
                tipo: "ingreso",
            },
            {
                concepto: "gasto",
                monto: "333",
                fecha: "2000-12-12",
                tipo: "ingreso",
            },
            {
                concepto: "gasto",
                monto: "232",
                fecha: "2000-12-12",
                tipo: "ingreso",
            },
            {
                concepto: "gasto",
                monto: "123",
                fecha: "2000-12-12",
                tipo: "ingreso",
            },
            {
                concepto: "salida",
                monto: "1230",
                fecha: "2000-12-12",
                tipo: "egreso",
            },
        ],
    });
};