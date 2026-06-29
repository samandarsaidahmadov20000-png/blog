const mongoose = require("mongoose");

const commentSchem = new mongoose.Schema({
  text: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Posts", required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Comments = mongoose.model("Comments", commentSchem);

module.exports = Comments;
