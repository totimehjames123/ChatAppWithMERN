const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/socialmedia")
.then(()=>{
    console.log("mongodb connected!")
}).catch((err)=>{
    console.log("failed!", err)
})

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    senderId: {
        type: String,
        required: true,
    },
    recipientId: {
        type: String,
        required: true,
    },
    recipientEmail: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    chatDateTime: {
       type: String,
    },
    message: {
        type: String,
    }
})

const chatsCollection = mongoose.model("chats", newSchema)

module.exports = chatsCollection

