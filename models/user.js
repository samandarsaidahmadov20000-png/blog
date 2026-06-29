const mongoose = require("mongoose");

const userRegisterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength : [5, "password min 5"] },
});

const User = mongoose.model("User", userRegisterSchema);

module.exports = { User };
