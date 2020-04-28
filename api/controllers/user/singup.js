const bcrypt = require("bcrypt");
const userDB = require('../../models/user' );


exports.post_singup = (req, res) => {
    /// finding email
  
    userDB
      .find({
        email: req.body.email
      })
      .exec()
      .then(result => {
        if (result >= 1) {
          console.log(result);
  
          res.status(400).json({
            massage: "email exit "
          });
        } else {
          /// hassing password
          bcrypt.hash(req.body.password, 10, (err, hass) => {
            if (err) {
              console.log(err);
              return res.status(500).json(err);
            } else {
              /// creating user
              const user = new userDB({
                _id: mongoose.Types.ObjectId(),
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                password: hass,
                email: req.body.email
              });
              /// saving user in database
              user
                .save()
                .then(result => {
                  console.log("SUCCESS....");
                  res.status(200).json(result);
                })
                .catch(err => {
                  console.log("ERROE....");
                  res.status(400).json({
                    massage:
                      'database error cheack ../conroller/user methord in user rought || user email alradey exits',
                    erroe: err
                  });
                });
            }
          });
        }
      })
      .catch(err => {
        res.status(401).json({
          massage: "database error cheack find() methord in user rought",
          erroe: err
        });
      });
  }

