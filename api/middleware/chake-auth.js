const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    try{
        const decode =jwt.verify(req.body.token, 'precess.env.jwtkey');
        req.userData = decode;////////////////////////////////////////
        next();

    }catch(error){
        return res.status(400).json({
            massage: 'authintication faill '
        })
    }
}