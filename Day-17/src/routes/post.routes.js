// use express.Router() for authRouter for using/calling these apis in app.js file
// requiring login from controllers file for apis

const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer") // middleware
const identifyUser = require("../middlewares/auth.middleware") // middleware

// using multer because otherwise express server wil not able to read file which is coming from frontend
const upload = multer({ storage: multer.memoryStorage() })

const postRouter = express.Router()

// Creating Posts
// POST /api/posts/     {protected}
postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController)

// Fetching all Posts
// GET /api/posts/      {protected}
postRouter.get("/", identifyUser, postController.getPostController)

// Fetch details about specific post with the id. and also chcek whether the post belongs to the user that the request comes from
// GET /api/posts/details/:postId
postRouter.get("/details/:postId", identifyUser, postController.getPostDetailsController)

module.exports = postRouter
