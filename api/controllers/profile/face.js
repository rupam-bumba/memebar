const userDB = require('../../models/user' );


exports.get_face = (req,res)=>{
    console.log("|5 Debug|"  );
    console.log("|6 Debug|" + JSON.stringify(req.body) );
    
    userDB
    .find({
        _id: req.body._id
    })
    .exec()
    .then(result =>{
        console.log("| Debug | "+ JSON.stringify(result) );
        res.status(200).json(result);
    })
    .catch(error =>{
        res.status(400).json({
            massage: error
        })
    })
}