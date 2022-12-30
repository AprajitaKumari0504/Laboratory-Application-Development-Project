const mongoose=require('mongoose')
const Schema= mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlenght:3,
        maxlenght:15
    },
    email:{
        type:String,
        required:true,
        minlenght:5,
        maxlenght:20
    },
    password:{
        type:String,
        required:true,
        minlenght:8,
        maxlenght:20
    },
     role: 
    {
        type:String,
        required:true,
        minlenght:8,
        maxlenght:20
      }
    
})
module.exports=mongoose.model('users',userSchema)