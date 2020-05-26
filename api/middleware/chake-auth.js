const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];

        console.log("|7 Debug | token >> " + token );
        // console.log("|8 Debug | precess.env.jwtkey >> " +  process.env.jwtkey);
        
        const decode =jwt.verify(token,  process.env.jwtkey);
        req.userData = decode;

        console.log('|13 Debug | decode >> ' + decode);
        console.log('|14 Debug | JTW Authintication Successfull >>');
        next();

    }catch(error){
        console.log("| Debug | JWT >> Authintication Faill " );
        return res.status(400).json({
            Massage: 'JWT Authintication Faill'
        })
    }
} 