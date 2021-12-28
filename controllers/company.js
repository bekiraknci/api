const Company = require("../models/Company");
const {sendJwtToClient} = require("../helpers/companyAuth/sendJwtToClient");
const CustomError = require("../helpers/CustomError");
const {validateCompInput} = require("../helpers/inputHelpers");
const register = async (req,res,next) => {

  const {companyname,companymail,companypass} = req.body;




       
          const company = await Company.create({

             companyname,
             companymail,
             companypass
          })
        sendJwtToClient(company,res);
          

        }
        
    const login = async(req,res,next) => {
        const {companymail,companypass} = req.body;
        if(!validateCompInput(companyname,companymail,companypass)) {
            console.log("1");
            return next(new CustomError("Lütfen kontrol edin",400));
        }

        const company = await Company.findOne({companymail}).select("+companypass");
        console.log(company);
         res.status(200)
        .json({
            success : true,
        })
    }

    

   
    const getSingleCompany = async(req,res,next) => {
    const {id} = req.params;
    const  company = await Company.findById(id);
  
    

    return res.status(200)
    .json({
        success : true,
        data : company
    })


}

  const getAllCompany = async (req,res,next) => {
     const company =  await Company.find();
     return res.status(200)
     .json({
         success : true,
        data : company
    })
 }
 const editDetailsComp = async (req,res,next) => {
    const {companyname,companymail,companypassword} = req.body;
    const {id} = req.params;
    const company = await Company.findByIdAndUpdate(id,{ $set: {companyname,companymail,companypassword }},
    {
        new : true,
        runValidators : true
       
});
return res.status(200)
.json({
    success :true,
    data :  company
})
}
module.exports  = {
    
    getSingleCompany,
    getAllCompany,
    login,register,
    editDetailsComp
    
    
}
