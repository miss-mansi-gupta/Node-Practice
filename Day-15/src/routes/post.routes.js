// use express.Router() for authRouter for using/calling these apis in app.js file
// requiring login from controllers file for apis

const express = require("express")
const postController = require("../controllers/post.controller")
const multer = require("multer") // middleware

const upload = multer({ storage: multer.memoryStorage() })

const postRouter = express.Router()

// POST /api/posts/     {protected}
postRouter.post("/", upload.single("image"), postController.createPostController)

module.exports = postRouter
