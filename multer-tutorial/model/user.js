const mongoose = require("mongoose");
require("../db/config");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
