const Posts = require("../models/post");
const User = require("../models/user");

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    const newPost = await Posts.create({
      title,
      body,
      owner: req.user.id,
    });

    res.status(200).send(newPost);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Posts.findOneAndDelete({
      _id: id,
      owner: req.user.id,
    });

    if (!deletedPost) {
      return res.status(404).json({ message: "not found" });
    }

    res.status(200).send(deletedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const changedPost = await Posts.findOneAndUpdate(
      {
        _id: id,
        owner: req.user.id,
      },
      req.body,
      { new: true },
    );

    if (!changedPost) {
      return res.status(404).json({ message: "note found" });
    }

    console.log(req.body);

    res.status(200).json(changedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { search } = req.query;

    let searchObj = {};

    if (search) {
      searchObj.title = { $regex: search, $options: "i" };
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const allPosts = await Posts.find(searchObj)
      .populate("owner", "email")
      .skip(skip)
      .limit(limit);

    res.json(allPosts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createPost, deletePost, updatePost, getPost };
