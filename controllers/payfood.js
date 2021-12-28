
const PayFood = require('../models/PayFood');


const addPayFood =  async (req,res,next) => {

    
    const {paid,quantity,tablefoodid,tableid,companyid,foodid} = req.body;
   
    try{
        const payfood = await PayFood.create({
   
            paid,quantity,tablefoodid,tableid,companyid,foodid
           
   
   
        })
   
       res
       .status(200)
       .json({
           success :true,
           data : payfood
       });
    }
    catch(error){
       return next(error);
    }
   
    
   }
   const getSinglePayFood = async(req,res,next) => {
       const {id} = req.params;
       const  payfood = await PayFood.findById(id).populate('tableid').populate('companyid').populate('tablefoodid').populate('foodid');
       
       
     
       
   
       return res.status(200)
       .json({
           success : true,
           data : payfood
       })
   
   
   }
   
     const getAllPayFood = async (req,res,next) => {
        const payfood =  await PayFood.find();
        return res.status(200)
        .json({
            success : true,
           data : payfood
       })
    }
    const editDetailsPayFood = async (req,res,next) => {
       const {paid,quantity} = req.body;
       const {id} = req.params;
       const payfood= await PayFood.findByIdAndUpdate(id,{ $set: {paid,quantity }},
       {
           new : true,
           runValidators : true
          
   });
   return res.status(200)
   .json({
       success :true,
       data :  payfood
   })



}
const delPayFood = async (req,res,next) => {
    const {id} = req.params;

    await PayFood.findByIdAndDelete(id);
    res.status(200)
    .json({
        success :true,
        message : "Delete Succesfully"
    })

}

module.exports  = {
    addPayFood,
    getAllPayFood,
    getSinglePayFood,
    editDetailsPayFood,
    delPayFood
    
};