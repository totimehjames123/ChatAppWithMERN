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