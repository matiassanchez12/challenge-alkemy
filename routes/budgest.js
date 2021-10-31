var express = require("express");

var budgets = require("../controller/budgets.js");

var router = express.Router();

router.post("/insert", budgets.create);
router.get("/list", budgets.list);
router.delete("/remove/:id", budgets.remove);
router.put("/edit/:id", budgets.edit);

module.exports = router;