// server create krna
// server config krna
// using authRouter for calling apis

const express = require("express")
const authRouter = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json()) // middleware
app.use(cookieParser())

app.use("/api/auth", authRouter)

module.exports = app
