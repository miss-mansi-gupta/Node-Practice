// Create server
// Config server
// use express.json middleware for reading req.body data
// use cookieParser for token storing in cookies-storage
// use authRouter for calling apis

const express = require("express")
const cookieParser = require("cookie-parser")
const authRouter = require("./routes/auth.routes")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRouter)

module.exports = app
