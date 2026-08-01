// Create server
// Config server
// use express.json middleware for reading req.body data
// use cookieParser for token storing in cookies-storage
// use authRouter for calling apis

const express = require("express")
const cookieParser = require("cookie-parser")

const app = express() // creating instance of server

app.use(express.json())
app.use(cookieParser())

// require routes
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.routes")
const userRouter = require("./routes/user.routes")

// using routes
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)

module.exports = app
