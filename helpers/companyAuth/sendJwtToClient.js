

const sendJwtToClient = (company,res) => {
    // Generate JWT
    const token = company.generateJwtFromComp();


    const {JWT_COOKIE} = process.env;


    return res
    .status(200)
    .cookie("access_token",token,{

        
        expires : new Date(Date.now()+parseInt(JWT_COOKIE) * 1000*60),
        
    })
    .json({
        success : true,
        access_token : token,
        data : {
            companyname : company.companyname,
            companymail: company.companymail,
            companypass : company.companypass
        }

    });
}
    const isTokenIncluded = req => {
        return( 
            req.headers.authorization && req.headers.authorization.startWith('Bearer')
            );

        }
    

module.exports = {
    sendJwtToClient,
    isTokenIncluded
};