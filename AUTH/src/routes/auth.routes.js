// creating apis

const express = require("express")
const authRouter = express.Router()
const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

// POST /auth/api/register

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists with this email id"
        })
    }

    const user = await userModel.create({
        name,
        email,
        password: crypto.createHash("md5").update(password).digest("hex"),
    })

    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfuly",
        user,
    })
})

// GET /auth/api/get-me 
// fetching details based on token after decoding it

authRouter.get("/get-me", async (req, res) => {
    const token = req.cookies.token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded)
    const user = await userModel.findById(decoded.id)
    res.status(200).json({
        name: user.name,
        email: user.email,
    })
})

// POST /api/auth/login

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(409).json({
            message: "User does not exist"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const isPasswordValid = hash === user.password

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Password Invalid"
        })
    }

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            name: user.name,
            email: user.email,
        }
    })
})

module.exports = authRouter
