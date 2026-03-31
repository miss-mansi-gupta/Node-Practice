// server ko create krna
// server ko config krna

const express = require("express");
const authRouter = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")
const app = express()

app.use(express.json()) // using middleware for reading data
app.use(cookieParser()) // using as a middleware

app.use("/api/auth", authRouter) // /api/auth/register

module.exports = app
