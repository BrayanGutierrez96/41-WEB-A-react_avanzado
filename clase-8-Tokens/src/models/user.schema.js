import {Schema, model} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:5
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
},{timestamps: true, versionKey: false});

export default model('User', userSchema);