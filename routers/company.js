const express = require('express');
const { register,login,getSingleCompany,getAllCompany,editDetailsComp} = require('../controllers/company.js');

    
const router = express.Router();

 router.get("/allcompany",getAllCompany)
 
 router.post("/login", login)
 router.put("/edit/:id",editDetailsComp)
 router.get("/comp/:id",getSingleCompany)
 

 

router.post("/register",register);

module.exports = router;