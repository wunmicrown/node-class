const express=require("express")
const App =express()
App.listen(4000,(erro)=>{
    if (erro) {
        console.log(erro);
    } else {
        console.log("Server is running on port 4000");
    }
})