// creating register api

const express = require("express")
const userModel = require("../models/user.model") // for api
const jwt = require("jsonwebtoken") // for creating token
const crypto = require("crypto")

const authRouter = express.Router() // for creating api in file other than app.js file, need to use express.Router()

// POST /api/auth/register

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    // Check whether email already exists or not
    const isUserAlreadyExists = await userModel.findOne({ email })
    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exists with this email"
        })
    }

    // hashing password
    const hash = crypto.createHash("md5").update(password).digest("hex")

    // Create new user
    const user = await userModel.create({
        name, email, password: hash
    })

    // jwt signature
    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET
    )

    // storing jwttoken in cookie storage
    res.cookie("jwt_token", token)

    // response in case of user creation successfully
    res.status(201).json({
        message: "user registered successfully",
        user,
        token
    })
})

// POST /api/auth/protected

authRouter.post("/protected", (req, res) => {
    console.log(req.cookies)
    res.status(200).json({
        message: "This is a protected route"
    })
})

// POST /api/auth/login
// jb api pe request aati hai to use "Controller" bhi bol skte hai

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(409).json({
            message: "User not found with this email id"
        })
    }

    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")

    if (!isPasswordMatched) {
        return res.status(401).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user,
    })
})

module.exports = authRouter
