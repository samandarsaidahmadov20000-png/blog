const express = require("express");
const router = express.Router();
const {
  createPost,
  deletePost,
  updatePost,
  getPost,
} = require("../controllers/postController");

const authMiddleware = require("../middleware/auth");

router.post("/", authMiddleware, createPost);

router.delete("/:id", authMiddleware, deletePost);

router.put("/:id", authMiddleware, updatePost);

router.get("/", authMiddleware, getPost);

module.exports = router;
