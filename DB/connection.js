const mongoose=require("mongoose")
const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then((response)=>{
    console.log("mongoose in your applicattion is connected mongodb Atlas")
}).catch((err)=>{
    console.log("connection faild")
})

