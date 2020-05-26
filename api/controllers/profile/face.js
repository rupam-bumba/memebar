const userDB = require('../../models/user' );

exports.post_face = (req,res)=>{
    console.log(" |4 Debug |    /profile/face -- rought ");
    console.log(" |6 Debug |  JSON.stringify(req.body) >>>" + JSON.stringify(req.body) );
    
    userDB
    .find({
        _id: req.body._id
    })
    .exec()
    .then(result =>{
        console.log("|14 Debug | JSON.stringify(result) >>>"+ JSON.stringify(result) );
        res.status(200).json(result);
    })
    .catch(error =>{
        res.status(400).json({
            massage: error
        })
    })
}