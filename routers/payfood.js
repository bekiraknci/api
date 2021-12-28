const express = require('express');
const { addPayFood,getAllPayFood,getSinglePayFood,editDetailsPayFood, delPayFood} = require('../controllers/payfood');
const router = express.Router();

router.post("/addpayfood",addPayFood);
router.get("/allpayfood",getAllPayFood)
 
 
 router.put("/edit/:id",editDetailsPayFood)
 router.get("/payfood/:id",getSinglePayFood)
 router.delete("/delete/:id",delPayFood)

 

module.exports = router;
