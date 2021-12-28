const CustomError = require('../errors/customErrorHandler');
const JWT = require('jsonwebtoken');
const {isTokenIncluded} =require("../../helpers/companyAuth/sendJwtToClient");
const getAccessToRoute  = (req,res,next) =>{

    //token
    if(!isTokenIncluded(req)){
        return next(new CustomError("you are not auth to acces this route"));
    }
    next();

    

};
module.exports = {
    getAccessToRoute

};