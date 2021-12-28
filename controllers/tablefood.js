const TableFood = require('../models/Tablefood');
const addTableFood = async (req,res,next) => {

    const {tablefoodname,companyid,paid,createdate,quantity} = req.body;
   
 try{
     const tablefood = await TableFood.create({

        tablefoodname,companyid,paid,createdate,quantity
        


     })

    res
    .status(200)
    .json({
        success :true,
        data : tablefood
    });
 }
 catch(error){
    return next(error);
 }

 
}
const getSingleTableFood = async(req,res,next) => {
    const {id} = req.params;
    const  tablefood = await TableFood.findById(id);
    
  
    

    return res.status(200)
    .json({
        success : true,
        data : tablefood
    })


}

  const getAllTableFood = async (req,res,next) => {
     const tablefood =  await TableFood.find();
     return res.status(200)
     .json({
         success : true,
        data : tablefood
    })
 }
 const editDetailsTableFood = async (req,res,next) => {
    const {tablefoodname,paid} = req.body;
    const {id} = req.params;
    const tablefooddetail = await TableFood.findByIdAndUpdate(id,{ $set: {tablefoodname,paid }},
    {
        new : true,
        runValidators : true
       
});
return res.status(200)
.json({
    success :true,
    data :  tablefooddetail
})
}
const delTableFood = async (req,res,next) => {
    const {id} = req.params;

    await TableFood.findByIdAndDelete(id);
    res.status(200)
    .json({
        success :true,
        message : "Delete Succesfully"
    })

}
module.exports  = {
    addTableFood,
    getAllTableFood,
    editDetailsTableFood,
    getSingleTableFood,
    delTableFood
}