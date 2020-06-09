const mongoos = require("mongoose");

const post = mongoos.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  _user_id: {
    // required
    type: String,
    required: true,
  },
  user_name : {
    type: String,

  },

  date: {
    type: Date,
    default: Date.now,
  },

  location: {
    type: String,
  },

  text: {
    type: String,
  },

  link: {
    type: String,
  },

  file: [
    {
      type: String,
    },
  ],

  react: [
    {
      type: String,
    },
  ],

  comment: [
    {
      type: String,
    },
  ],

  reference: [
    {
      type: String,
    },
  ],
});

module.exports = mongoos.model("posts", post);
