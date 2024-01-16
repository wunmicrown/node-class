const express=require("express")
const App =express()
const ejs = require("ejs")
App.set("view engine","ejs")

App.get("/",(req,res)=>{  
    res.send("Hello World")
})
App.get("/welcome",(req,res)=>{  
    res.sendFile(__dirname+"/index.html")
})


App.listen(4000,(erro)=>{
    if (erro) {
        console.log(erro);
    } else {
        console.log("Server is running on port 4000");
    }
})
