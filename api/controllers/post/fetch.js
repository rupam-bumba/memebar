const postDB = require("../../models/post");
const path = require("path");

exports.post_fetch = (req, res) => {
  console.log("| 5 Debug | ");

  postDB
    .find({})
    .sort({ date: "desc" })
    .exec()
    .then((result) => {
      console.log("| 12 Debug | " + result);
      res.status(200).json({
        result,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
