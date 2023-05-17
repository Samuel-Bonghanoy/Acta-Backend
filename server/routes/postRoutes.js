const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

// router.route("/deleteall").delete(postController.deleteAllTasks);

router
  .route("/")
  .post(postController.handleCreatePost)
  .get(postController.displayPosts)
  .delete(postController.deleteAllPosts);

router
  .route("/:id")
  .delete(postController.deletePost)
  .patch(postController.updatePost);

module.exports = router;
