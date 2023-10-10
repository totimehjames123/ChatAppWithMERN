const mongoose = require("mongoose")
const connection = require("./config")

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    profilePicture: {
       type: String
    }
})

const collection = mongoose.model("users", newSchema)

module.exports = collection