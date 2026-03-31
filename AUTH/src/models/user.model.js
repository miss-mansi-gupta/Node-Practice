// create schema
// create model

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [ true, "User should be having unique email id"],
    },
    password: String,
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel
