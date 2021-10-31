const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "secretkey", (err, decoded) => {
            if (err) {
                return res.json({ message: "Jwt incorrecto" });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            message: "No hay un Jwt activo",
        });
    }
};