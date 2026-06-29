const mongoose = require("mongoose");

const postSchem = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
const Posts = mongoose.model("Posts", postSchem);

module.exports = Posts;


