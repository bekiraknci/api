const  Food = require("../models/Food");
const addFood =  async(req,res,next) => {


    const {foodname,foodimg,foodprice,category} = req.body;
    try{

        const food = await Food.create({
            foodname,
            foodprice,
            foodimg,
            category
        })
       return  res
        .status(200)
        .json({
            success :true,
            data : food
        });
    
    }
    catch (error){
        return next(error);
    }
    
       

    }
    const getSingleFood = async(req,res,next) => {
        const {id} = req.params;
        const  food = await Food.findById(id).populate('category');
        
      
        
    
        return res.status(200)
        .json({
            success : true,
            data : food
        })
    
    
    }
    
      const getAllFood = async (req,res,next) => {
         const food =  await Food.find();
         return res.status(200)
         .json({
             success : true,
            data : food
        })
     }
     const editDetailsFood = async (req,res,next) => {
        const {foodname,foodprice} = req.body;
        const {id} = req.params;
        const food = await Food.findByIdAndUpdate(id,{ $set: {foodname,foodprice, }},
        {
            new : true,
            runValidators : true
           
    });
    return res.status(200)
    .json({
        success :true,
        data :  food
    })
     }
     const delFood = async (req,res,next) => {
        const {id} = req.params;
    
        await Food.findByIdAndDelete(id);
        res.status(200)
        .json({
            success :true,
            message : "Delete Succesfully"
        })
    
    }
module.exports  = {
    addFood,
    getAllFood,
    getSingleFood,
    editDetailsFood,delFood
}
