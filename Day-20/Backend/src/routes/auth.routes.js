// use express.Router() for authRouter for using/calling these apis in app.js file
// requiring login from controllers file for apis

const express = require("express")
const authController = require("../controllers/auth.controller")
const identifyUser = require("../middlewares/auth.middleware")

const authRouter = express.Router()

// POST /api/auth/register
authRouter.post("/register", authController.registerController)

// POST /api/auth/login
authRouter.post("/login", authController.loginController)

/**
 * @route GET /api/auth/get-me
 * @desc Get the currently logged in user's information
 * @access Private
 */
authRouter.get("/get-me", identifyUser, authController.getMeController)

module.exports = authRouter
