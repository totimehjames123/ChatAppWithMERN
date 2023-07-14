const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/socialmedia")
.then(()=>{
    console.log("mongodb connected!")
}).catch((err)=>{
    console.log("failed!", err)
})

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
    },
    message: {
        type: String,
    }
})

const chatsCollection = mongoose.model("chats", newSchema)

module.exports = chatsCollection

