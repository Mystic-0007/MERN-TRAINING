import express from "express"
import fs from "fs/promises"
import dotenv from "dotenv"

const app = express();
 dotenv.config({override:true});
app.get("/",(req,res) =>{
    res.send( "Homepage")
    });
app.get("/about",(req,res) =>{
    res.send("<h1>About page</h1>")
});
app.get("/profile",(req,res)=>{
    res.send("<h2> Welcome to my Profile page</h2>")
})
// app.get("/users",async (req,res)=>{
//     const users= await fs.readFile("assets/data/users.json","UTF-8")
//     res.json(JSON.parse(users))
// })
app.get("/users",async(req,res) =>{
    const users= await fs.readFile("assets/data/users.json","UTF-8")
    res.json(JSON.parse(users));
})
app.get("/users/:userId",async(req,res)=>{
    const id =req.params.userId
    const users= await fs.readFile("assets/data/users.json","UTF-8")
  const userFirst=JSON.parse(users).find((user)=> user.id==id)
  if(!userFirst)
  {
     return res.send("User not Found")
  }
  res.json(userFirst)
  
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is up and running ${process.env.PORT}.`)
})