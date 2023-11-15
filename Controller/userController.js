const users = require("../Models/userSchema")
require("mongoose")
const jwt=require("jsonwebtoken")


// logic for register to store

exports.register = async (req, res) => {
   const { username, email, password } = req.body
   try {


      const existingUser = await users.findOne({ email: email })
      if (existingUser) {
         res.status(406).json("User is already Exist.....")
      } else {
         //crete a object for user schema
         const newUser = new users({
            username, email, password, github: "", linkedin: "", profile: ""
         })

         await newUser.save()
         res.status(200).json(newUser)

      }
   } catch (err) {
      res.status(401).json(`Register API faild,Err:${err}`)
   }


}

//logic for loginnn

exports.login = async (req, res) => {

   const { email,password } = req.body

   try {

      const existingUser = await users.findOne({email,password})
      if (existingUser) {
         const token=jwt.sign({userId:existingUser._id},"supersecretkey12345")
       
         res.status(200).json({existingUser,token})


      } else {
         res.status(404).json("Incorrect Eamil / Password")
      }

   }
   catch (err) {
      res.status(401).json(`Login error Failed  Due to  ${err}`)
   }

}