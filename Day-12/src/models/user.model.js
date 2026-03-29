// Create schema and model for database

const mongoose = require("mongoose")

// For creating data format
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "With this email user account already exists"] // for making it unique
    },
    password: String,
})

// For performing operation on user
const userModel = mongoose.model("users", userSchema)

module.exports = userModel
