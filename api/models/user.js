const mongoos = require("mongoose");

const user = mongoos.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  password: {
    type: String
  },
    email: {
      type: String,
      required: true,
      unique: true,

    }
  //   ,
  //   username: {
  //     type: String,
  //     required: true,
  //     unique: true
  //   },
  //   dateofbirth: {
  //     type: String
  //   },
  //   gender: {
  //     type: String
  //   }
});

module.exports = mongoos.model("users", user);
