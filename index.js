const express = require("express")
const App =express()
const ejs = require("ejs")
const PORT=4000

App.set("view engine","ejs")
App.use(express.static("public"))
App.use(express.urlencoded({extended:true}))

let users=[
    {
    firstName:"Oluwapamilerin",
    lastName:"Oluwatobi",
    email:"oluwapamilerinayo@gmail.com",
    password:"123456",
},
    {
    firstName:"paul",
    lastName:"grace",
    email:"paul@gmail.com",
    password:"123456",
},
    {
    firstName:"galaxy",
    lastName:"tobi",
    email:"galaxy@gmail.com",
    password:"123456",
}
]

App.get("/About", (req, res)=>{
    res.render("index")
})

App.get("/",(req,res)=>{  
    res.send("Hello World")
})
App.get("/welcome",(req,res)=>{  
    res.sendFile(__dirname+"/index.html")
})
App.get("/index",(req,res)=>{  
    res.render("index.ejs", {name:"OLUWAPAMILERINAYO"})
})
App.get("/Login",(req,res)=>{  
    res.render("Login")
    console.log(req.body);
})
App.get("/Signup",(req,res)=>{  
    res.render("Signup")
})

App.get("/dashboard",(req,res)=>{  
    res.render("dashboard", {users: users})
})

App.post("/register",(req,res)=>{  
    console.log(req.body);
    users.push(req.body)
    console.log(users);
    // res.render("dashboard")
    res.redirect("/dashboard")
})





App.get("/Foodhunt",(req,res)=>{  
    res.render("Foodhunt")
})


App.listen(PORT,(erro)=>{
    if (erro) {
        console.log(erro);
    } else {
        console.log("Server is running on port 4000");
    }
})

