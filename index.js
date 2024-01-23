const express = require("express")
const App = express()
const ejs = require("ejs")
const PORT = 4000
const mongoose = require("mongoose")
const uri = "mongodb+srv://olayiwolapamilerin34:authentication@cluster0.66zdli9.mongodb.net/?retryWrites=true&w=majority"

// Connenct your node file
mongoose.connect(uri)
    .then((response) => {
        console.log("connected to database successfully");
    })
    .catch((err) => {
        console.log(err);
        console.log("There is an error in the database");
    })

App.set("view engine", "ejs")
App.use(express.static("public"))
App.use(express.urlencoded({ extended: true }))

// 
let users = [
    {
        firstName: "Oluwapamilerin",
        lastName: "Oluwatobi",
        email: "oluwapamilerinayo@gmail.com",
        password: "123456",
    },
    {
        firstName: "paul",
        lastName: "grace",
        email: "paul@gmail.com",
        password: "123456",
    },
    {
        firstName: "galaxy",
        lastName: "tobi",
        email: "galaxy@gmail.com",
        password: "123456",
    }
]
// Schema is used to be structure the database collection
let stundentSchema = mongoose.Schema({
    username: String,
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
})
// 

// model
const stundentModel = mongoose.model("Student", stundentSchema)

App.get("/About", (req, res) => {
    res.render("index")
})

App.get("/", (req, res) => {
    res.send("Hello World")
})
App.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
App.get("/index", (req, res) => {
    res.render("index.ejs", { name: "OLUWAPAMILERINAYO" })
})
App.get("/Login", (req, res) => {
    res.render("Login")
    console.log(req.body);
})

App.get("/dashboard", (req, res) => {
    res.render("dashboard", { users: users })
})

    App.get("/getUser", (req, res) => {
        res.render("getUser", { users: users })
    })

App.post("/submit", async  (req, res) => {
    await stundentModel.deleteMany()
    try {
        console.log(req.body);    
        let student = new stundentModel(req.body);
        await student.save();
        console.log("User saved to database");
        // res.render("getUser");
         stundentModel.find({})
         .then((result=>{
            // console.log(res);
            res.render('/getUser',{users:result})
         }))
         .catch((err=>{
            console.log(err)
         }))
      } catch (error) {
        console.log(error);
      }
})





App.get("/Foodhunt", (req, res) => {
    res.render("Foodhunt")
})


App.listen(PORT, (erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log("Server is running on port 4000");
    }
})

