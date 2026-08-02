// use express.Router() for postRouter for using/calling these apis in app.js file
// requiring login from controllers file for apis

const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer") // middleware
const identifyUser = require("../middlewares/auth.middleware") // middleware

// using multer because otherwise express server wil not able to read file which is coming from frontend
const upload = multer({ storage: multer.memoryStorage() })

const postRouter = express.Router()

/**
 * @route POST /api/posts/     {protected}
 * @description Creating Posts
 */
postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController)

/**
 * @route GET /api/posts/      {protected}
 * @description Fetching all Posts
 */
postRouter.get("/", identifyUser, postController.getPostController)

/**
 * @route GET /api/posts/details/:postId
 * @description Fetch details about specific post with the id. and also chcek whether the post belongs to the user that the request comes from
 */
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)

/**
 * @route POST /api/posts/like/:postId
 * @description Like a post with the id provided in the request params
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController)

/**
 * @route POST /api/posts/unlike/:postId
 * @description Unlike a post with the id provided in the request params
 */
postRouter.post("/unlike/:postId", identifyUser, postController.unlikePostController)

/**
 * @route GET /api/posts/feed
 * @description Get all Posts created in the DB
 * @access private
 */
postRouter.get("/feed", identifyUser, postController.getFeedController)

module.exports = postRouter
