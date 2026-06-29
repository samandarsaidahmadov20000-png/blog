const express = require("express");
const {
  createComment,
  getComment,
} = require("../controllers/commentController");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

router.post("/:postId", authMiddleware, createComment);

router.get("/:postId", authMiddleware, getComment);

module.exports = router;
