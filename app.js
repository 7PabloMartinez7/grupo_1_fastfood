const express = require ("express")
const path = require ("path"); 

const app= express();

const publicPath = path.resolve (__dirname, "./public");
app.use (express.static(publicPath));

app.listen(5000,() => {
    console.log ("Servidor corriendo en el puerto 5000");
 } );


 app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))
 })

 app.get("/productCart",(req, res)=>{
    res.sendFile(path.resolve("./views/productCart.html"));
})

app.get("/productDetail",(req, res)=>{
    res.sendFile(path.resolve("./views/productDetail.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join("./views/login.html"))
 })

 app.get("/register",(req,res)=>{
    res.sendFile(path.join("./views/register.html"))
 })

