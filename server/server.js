const express = require("express");
const cors = require("cors");
const multer = require('multer');

const collection = require("./mongo");
const login = require("./login");
const path = require('path');
const chatsCollection = require("./chats"); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = path.extname(file.originalname); // Extract the file extension
      const filename = file.fieldname + '-' + uniqueSuffix + fileExtension; // Add the file extension to the saved file
      cb(null, filename);
    }  
  });



const upload = multer({ storage });

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const checkCredentials = await collection.findOne({ email: email, password: password });

  try {
    if (checkCredentials) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch {
    res.json("notexist");
  }
});
 
// Signup
app.post("/signup", upload.single('profilePicture'), async (req, res) => {
  const { username, email, gender, selectedCountry, password } = req.body;
  const profilePicture = req.file;
   console.log(username)
  const data = {
    username: username,
    email: email,
    profilePicture: profilePicture ? profilePicture.filename : null, 
    gender: gender,
    country: selectedCountry,
    password: password,
  };
  
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      
      await collection.insertMany(data);
      res.json("notexist");
    } 
  } catch {
    res.json("nonexist");
  }
});

//Fetching users
app.get("/users", async (req, res) => {
  try{
    const users = await collection.find({});
    res.send({status: 'ok', data: users})
  }
  catch{
    console.log("error fetching users");
  }
 
})

//send text message
app.post("/sendmessage", async (req, res) => {
  try{
    const { message } = req.body;
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: "Message can't be empty" });
    }
        
    console.log(message)

    await chatsCollection.insertMany({
      message: message,
    });

    res.status(200).json({ status: 200, message: "Message sent" });
  }
  catch (err) {
    console.log(" an error occurred")
  }
  
})

//Fetch chats
app.post("/chats", async (req, res) => {
  try{
    const chats = await chatsCollection.find({});
    res.send({status: 'ok', data: chats});

  }
  catch(err){
    console.log("error fetching chats");
  }
})


app.listen(5000, () => {
  console.log("app is listening on the port 5000");
});

