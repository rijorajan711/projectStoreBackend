require("dotenv").config()
const express=require("express")
const cors=require("cors")
const router=require("./Routes/router")

//connection with mongooose from "/DB/connection" this folder
require('./DB/connection')
// to creaete a express application
const storeServer=express()

// cors is used to communicate with front end server

storeServer.use(cors())

// we want to convert json to object and object to json because REST data paassed as josn

storeServer.use(express.json())


// path setting place only after cors and express.js
storeServer.use(router)
 
// define port number 
  const PORT=4000||process.env.PORT

//   connection of port 
  storeServer.listen(PORT,()=>{
    console.log(`server connected to port ${PORT}`)
  })





// http get reauest resolving ti http://localhost:4000/
  storeServer.get("/",(req,res)=>{
       res.send(`<h1>server connnected to ${PORT} and waiting for user request</h1>`)
  })

