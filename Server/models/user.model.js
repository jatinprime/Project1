import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    fullName:{
        type: 'String',
        required: [true, "fullName is requied"],
        trim: true
    },
    email:{
        type: 'String',
        required: [true , "Email is required"],
        trim: true,
        lowercase:true,
        match:[/^(?=.{1,254}$)(?=.{1,64}@.{1,255}$)([a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+)@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/, "Please fill your email properly"],
    },
    password:{
        type: 'String',
        required: [true, "Password is requied"],
        trim: true,
        select:false,
    },
    role:{
        type: 'String',
        enum:['USER', 'ADMIN'],
        default:'USER',
    }
},{
    timestamps:true
})

export const User = mongoose.model('User', userSchema)