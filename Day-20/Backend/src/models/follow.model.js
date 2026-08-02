// Create Follow Schema
// Create Follow Model

const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower: {
        type: String,
    },
    followee: {
        type: String,
    },
    // status: {
    //     type: String,
    //     default: "pending",
    //     enum: {
    //         values: ["pending", "accepted", "rejected"],
    //         message: "status can only be pending, accepted or rejected"
    //     }
    // }
}, {
    timestamps: true
})

// creating index so that records should exist only once 
followSchema.index({ follower: 1, followee: 1 }, { unique: true })

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel
