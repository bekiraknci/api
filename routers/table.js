const express = require('express');

const { getAllTable,addTable,editDetailsTable,getSingleTable,delTable} = require('../controllers/table');
const Table = require('../models/Table');
const router = express.Router();



router.post("/addtable",addTable);
router.get("/alltable",getAllTable)
 
 
 router.put("/edit/:id",editDetailsTable)
 router.get("/table/:id",getSingleTable)
 router.delete("/delete/:id",delTable)




module.exports = router;