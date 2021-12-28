const Table = require("../models/Table");
const addTable = async (req,res,next) => {

    const {tablename,company} = req.body;
   
 try{
     const table = await Table.create({

        tablename,company
        


     })

    res
    .status(200)
    .json({
        success :true,
        data : table
    });
 }
 catch(error){
    return next(error);
 }

 
}
const getSingleTable = async(req,res,next) => {
    const {id} = req.params;
    const  table = await Table.findById(id).populate('company');
    
  
    

    return res.status(200)
    .json({
        success : true,
        data : table
    })


}

  const getAllTable = async (req,res,next) => {
     const table =  await Table.find();
     return res.status(200)
     .json({
         success : true,
        data : table
    })
 }
 const editDetailsTable = async (req,res,next) => {
    const {tablename,} = req.body;
    const {id} = req.params;
    const table= await Table.findByIdAndUpdate(id,{ $set: {tablename, }},
    {
        new : true,
        runValidators : true
       
});
return res.status(200)
.json({
    success :true,
    data :  table
})
}
const delTable = async (req,res,next) => {
    const {id} = req.params;

    await Table.findByIdAndDelete(id);
    res.status(200)
    .json({
        success :true,
        message : "Delete Succesfully"
    })

}

module.exports  = {
    addTable,getAllTable,
    getSingleTable,
    editDetailsTable,
    delTable
}