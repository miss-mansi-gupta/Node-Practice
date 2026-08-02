// Identify user using this middleware

const jwt = require("jsonwebtoken")

async function identifyUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Token not provided, Unauthorized access",
        })
    }

    let decoded = null
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(401).json({
            mmessage: "User not authorized"
        })
    }

    req.user = decoded // set user data in req.user property

    next() // for forwarding request from middleware to controller
}

module.exports = identifyUser
