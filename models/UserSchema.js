const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  userSubmisson: [
    {
      sourceCode: {
        type: String,
        required: false,
      },
      output: {
        type: String,
        required: false,
      },
      Date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", User);
