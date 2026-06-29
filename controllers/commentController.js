const Comments = require("../models/comment");
const User = require("../models/user");

const createComment = async (req, res) => {
  const { text } = req.body;

  try {
    const comment = await Comments.create({
      text,
      post: req.params.postId,
      author: req.user.id,
    });
    res.json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getComment = async (req, res) => {
  try {
    const comments = await Comments.find({ post: req.params.postId }).populate(
      "author",
      "email",
    );

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createComment, getComment };
