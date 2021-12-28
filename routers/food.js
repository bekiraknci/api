const express = require('express');
const { addFood,getAllFood,getSingleFood,editDetailsFood,delFood} = require('../controllers/food');
const router = express.Router();

router.post("/foodadd",addFood);
router.get("/allfood",getAllFood)
 
 
 router.put("/edit/:id",editDetailsFood)
 router.get("/food/:id",getSingleFood)
 router.delete("/delete/:id",delFood)
 

module.exports = router;