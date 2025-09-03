import {Schema, model} from "mongoose";

const userSchema = new Schema({
    nombre:{
      type:String,
      required:true,
      minlength:2
    },
    apellido:{
      type:String,
      required:true,
      minlength:2
    },
    correo:{
      type:String,
      required:true,
      minlength:2,
      unique:true
    },
    password:{
      type:String,
      required:true,
      minlength:8
    },
  },{ versionKey:false, timestamps:true})

export default model("Usuarios", userSchema)











  