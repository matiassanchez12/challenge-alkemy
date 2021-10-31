const express = require("express");

const users = require("../controller/users");

const router = express.Router();

/* GET users listing. */
router.get("/list", users.list);
router.post("/insert", users.create);
router.post("/login", users.login);

module.exports = router;