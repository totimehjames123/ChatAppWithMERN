const mongoose = require("mongoose");
mongoose.set("strictQuery", false)
module.exports = mongoose.connect("mongodb://totimehjames123:Laos54Z3qZ3WUqA9@ac-rgrpsmx-shard-00-00.uucoz8z.mongodb.net:27017,ac-rgrpsmx-shard-00-01.uucoz8z.mongodb.net:27017,ac-rgrpsmx-shard-00-02.uucoz8z.mongodb.net:27017/socialmedia?ssl=true&replicaSet=atlas-2z0wrv-shard-0&authSource=admin&retryWrites=true&w=majority")
  .then(() => {
    console.log("mongodb connected!");
  })
  .catch((err) => {
    console.log("failed!", err.message);
  }); 

//Laos54Z3qZ3WUqA9