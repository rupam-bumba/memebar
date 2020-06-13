const bcrypt = require("bcrypt");
const userDB = require("../../models/user");

exports.post_singup = (req, res) => {
  /// finding email
  console.log("| 7 Debug | req.body " + JSON.stringify(req.body));

  userDB
    .find({
      email: req.body.email,
    })
    .exec()
    .then((result) => {
      if (result.length >= 1) {
        console.log("| 16 Debug| email is alrady exits ");
        console.log(result);

        res.status(400).json({
          massage: "email address is alrady taken",
        });
      } else {
        /// hassing password
        console.log("| 23 Debug| email is new " + result);

        bcrypt.hash(req.body.password, 10, (err, hass) => {
          if (err) {
            console.log("| 25 Debug| hassing password error");
            console.log(err);
            return res.status(500).json(err);
          } else {
            /// creating user
            let user_name = req.body.firstname+req.body.lastname+"_"+Date.now()+"_"+Math.floor(Math.random() * 1000);
            console.log("| 29 Debug| creating user");
            const user = new userDB({
              _id: mongoose.Types.ObjectId(),
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              username: user_name,
              password: hass,
              email: req.body.email,
            });
            /// saving user in database
            console.log("| 38 Debug | saving user in database" + user);

            user
              .save()
              .then((result) => {
                console.log("SUCCESS user is added into DB");
                res.status(200).json(result);
              })
              .catch((err) => {
                console.log("ERROE user NOT added into DB");
                res.status(400).json({
                  massage: "ERROE user NOT added into DB",
                  erroe: err,
                });
              });
          }
        });
      }
    })
    .catch((err) => {
      console.log("|56 Debug | database faild to find email ");

      res.status(401).json({
        massage: "database error cheack find() methord in user rought",
        erroe: err,
      });
    });
};
