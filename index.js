const express=require("express")
const App =express()
const ejs = require("ejs")
const PORT=4000

App.set("view engine","ejs")
App.use(express.static("public"))

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
})
App.get("/Signup",(req,res)=>{  
    res.render("Signup")
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
