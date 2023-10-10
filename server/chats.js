const mongoose = require("mongoose")
const connection = require("./config")

const newSchema = new mongoose.Schema({
    senderEmail: {
        type: String,
        // required: true,
    },
    recipientEmail: {
        type: String,
        // required: true,
    },
    senderUsername: {
        type: String,
        // required: true,
    },
    recipientUsername: {
        type: String,
        // required: true,
    },
    senderProfilePicture: {
        type: String,
        // required: true,
    },
    recipientProfilePicture: {
        type: String,
        // required: true,
    },
    chatDate: {
       type: Date,
       default: Date.now
    },
    message: {
        type: String,
    }
})

const chatsCollection = mongoose.model("chats", newSchema)

module.exports = chatsCollection

