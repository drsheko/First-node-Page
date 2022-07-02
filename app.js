const express =require('express')
const app = express();
app.listen(8080)

app.get('/',(req,res)=>{
    res.sendFile("./views/home.html",{root:__dirname})
})
app.get('/about',(req,res)=>{
    res.sendFile("./views/about.html",{root:__dirname})
})
app.get('/contact',(req,res)=>{
    res.sendFile("./views/contact.html",{root:__dirname})
})
app.use((req,res)=>{
    res.sendFile("./views/404.html",{root:__dirname})
})