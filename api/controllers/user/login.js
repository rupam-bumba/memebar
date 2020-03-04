const bcrypt = require("bcrypt");
const userDB = require('../../models/user' );
const jwt = require("jsonwebtoken");



exports.post_login = (req, res) => {
    userDB
      .find({
        email: req.body.email
      })
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(404).json({
            massage: "mail not found"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              massage: "fail",
              error: err
            });
          }
          if (result) {
            const jwtToken = jwt.sign(
              {
                email: user[0].password,
                userID: user[0]._id
              },
              "precess.env.jwtkey",
              {
                expiresIn: "1h"
              }
            );
  
            return res.status(201).json({
              massage: "success ",
              token: jwtToken
            });
          } else {
            return res.status(201).json({
              massage: "fail result"
            });
          }
        });
      })
      .catch(err => {
        res.status(201).json({
          massage: "fail result",
          erroe: err
        });
      });
  }
  