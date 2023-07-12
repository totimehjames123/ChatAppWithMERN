// const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/socialmedia")
// .then(()=>{
//     console.log("mongodb connected!")
// }).catch((err)=>{
//     console.log("failed!", err)
// })

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    chatId: {
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


//sender - email, chatid, username, profilepicture, chatdatetime, message, 