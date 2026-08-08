const blacklistModel = require("../models/blacklist.model");
const userModel = require("../models/user.model");
const redis = require("../config/cache");
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Token not provided"
        })
    }

    // recording blacklisted token in mongodb
    // const isTokenBlacklisted = await blacklistModel.findOne({
    //     token
    // })

    // redis-cli -u redis://default:K5Zbcz4wzzt8WPMP195ItJfMdesiSme4@capacious-bone-clean-49014.db.redis.io:13082
    const isTokenBlacklisted = await redis.get(token)

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.user = decoded
        next()
    } catch(err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports = {
    authUser
};
