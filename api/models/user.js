const mongoos = require("mongoose");

const user = mongoos.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: {
    // required
    type: String,
    required: true,
  },
  lastname: {
    // required
    type: String,
    required: true,
  },
  password: {
    // required
    type: String,
    required: true,
  },
  email: {
    // required
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    unique: true,
  },
  dateofbirth: {
    type: String,
  },
  gender: {
    type: String,
  },
  bio: {
    type: String,
  },
});

module.exports = mongoos.model("users", user);
