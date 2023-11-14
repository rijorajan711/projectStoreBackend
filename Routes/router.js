const express=require("express")
const router=new express.Router()
const userController=require("../Controller/userController")

// register
router.post('/user/register',userController.register)
router.get("/user/register",userController.login)



module.exports=router