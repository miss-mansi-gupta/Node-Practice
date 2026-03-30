// creating register api

const express = require("express")
const userModel = require("../models/user.model") // for api
const jwt = require("jsonwebtoken") // for creating token

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

    // Create new user
    const user = await userModel.create({
        name, email, password
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

module.exports = authRouter
