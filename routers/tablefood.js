const express = require('express');
const { getAllTableFood,addTableFood,editDetailsTableFood,getSingleTableFood, delTableFood} = require('../controllers/tablefood');
const router = express.Router();

router.get("/alltablefood",getAllTableFood);
router.post("/addtablefood",addTableFood);

 
 
 router.put("/edit/:id",editDetailsTableFood)
 router.get("/tablefoodget/:id",getSingleTableFood)
 router.delete("/delete/:id",delTableFood)

module.exports = router;