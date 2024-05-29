const mongoose = require("mongoose");
require("../db/config");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const RegisterUser = mongoose.model("RegisterUser", RegisterSchema);
module.exports = RegisterUser;
