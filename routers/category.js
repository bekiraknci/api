const express = require('express');
const { regCategory,editDetails,getCategory,getAllCategory,delCategory} = require('../controllers/category');
const router = express.Router();

router.post("/addcategory",regCategory);
router.get("/getcategory/:id",getCategory);
router.put("/edit/:id",editDetails);
router.get("/getallcategory",getAllCategory);
router.delete("/delete/:id",delCategory)
    
module.exports = router;