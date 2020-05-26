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
  username: {
    type: String,
    unique: true,
  },
  email: {
    // required
    type: String,
    required: true,
    unique: true,
  },
  phonenumber: {
    type: String,
  },
  password: {
    // required
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  interest: {
    type: String,
  },
  website: {
    type: String,
  },
  dateofbirth: {
    type: String,
  },
  gender: {
    type: String,
  },

  
  subscribers: {
    type: String,
  },
  subscribe: {
    type: String,
  },
  friends: {
    type: String,
  },
});

module.exports = mongoos.model("users", user);
