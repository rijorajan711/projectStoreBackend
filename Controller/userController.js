const users = require("../Models/userSchema")
require("mongoose")


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


exports.login = async (req, res) => {

   const { email, password } = req.body

   try {

      const loginUserExist = await users.findOne({ $and: [{ email: email }, { password: password }] })
      if (loginUserExist) {
         res.status(200).json(loginUserExist)
      } else {
         res.status(406).json("user does not register")
      }

   }
   catch (err) {
      res.status(200).json(`sorry there is an error ${err}`)
   }

}