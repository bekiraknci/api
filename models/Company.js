const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Schema  =  mongoose.Schema;

const CompSchema = new Schema({

   
    companyname : {
        type : String,
        required : true,
    },
    companymail : {
        type : String,
        unique : true,
        required : [true,"Lütfen E-mailinizi giriniz."]
        
    },
    companypassword : {
        type : String,
        required : [false,"Lütfen şifrenizi tekrar giriniz."],
        select : false
    },
    companydate : {
        type : Date,
        default : Date.now,
    },
    
    

    
});
CompSchema.methods.generateJwtFromComp = function(){
    const {JWT_SECRET_KEY,JWT_EXPIRE} = process.env;
    const payload = {
        id : this._id,
        name : this.name,
    };

   const token = jwt.sign(payload,JWT_SECRET_KEY,{
       expiresIn : JWT_EXPIRE

   });
   return token;


}
module.exports =mongoose.model("Company",CompSchema);