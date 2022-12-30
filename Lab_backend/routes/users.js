const express=require('express');
const UserRouter=express.Router();

const userController=require('../controller/users')
//Registration
UserRouter.post('/register',userController.register)

//LogIn
UserRouter.post('/login',userController.login)

module.exports=UserRouter