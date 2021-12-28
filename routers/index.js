const express = require('express');
const category = require("./category");
const food = require("./food");
const table = require("./table");
const tablefood = require("./tablefood");
const company = require("./company");
const payfood = require('./payfood');
const  router = express.Router();




router.use("/category",category);
router.use("/food",food);
router.use("/company",company);
router.use("/table",table);
router.use("/tablefood",tablefood);
router.use("/payfood",payfood)

module.exports = router;