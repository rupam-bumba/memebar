const userDB = require("../../models/user");

exports.put_edit = (req, res) => {
  console.log(" |4 Debug |    /profile/edit -- rought ");
  console.log(
    " |6 Debug |  JSON.stringify(req.body) >>>" + JSON.stringify(req.body)
  );

 

  userDB
    .findOneAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          email: req.body.email,
          phonenumber: req.body.phonenumber,
          bio: req.body.bio,
          interest: req.body.interest,
          website: req.body.website,
          dateofbirth: req.body.dateofbirth,
          gender: req.body.gender
        },
      },
      { new: true },
      ( error, result)=>{
      console.log("|30 Debug | MONGOOSE JSON.stringify(result)  >>> " + JSON.stringify(result));
      console.log("|30 Debug | MONGOOSE JSON.stringify(error)  >>> " + JSON.stringify(error));
        
      }

    )
    .then((result) => {
      console.log("|34 Debug | JSON.stringify(result) >>> " + JSON.stringify(result));
      res.status(200).json({
        put: "edit",
      });
    })
    .catch((error) => {
      console.log(
        "|39 Debug | JSON.stringify(error) >>>" + JSON.stringify(error)
      );
    });
};
