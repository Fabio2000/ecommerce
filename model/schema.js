import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const prodSchema = new mongoose.Schema({
    produto:{
        type:String,
        required:true,
        unique:true
    },
    genero:{
        type:String,
        required:true
    }
})

module.exports = mongoose.models.email || mongoose.model('email',userSchema)