const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
    username : {
        type: String,
        required : [true , "username is required"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required : [true , "email is required"],
        unique: true,
        lowercase: true,
        trim : true
    },
    age: {
        type: Number,
        // required : [true , "Age is required"],
        min : [0 , "Age cannot be negative"],
        max : [150 , "Age is not defined"],
    },
    password: {
        type: String,
        required : [true , "Password is required"],
    },
    avatar : {
        type: String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53amOASh6bWQsY-uCLtDjqnm9QizAhU7N4g&s"
    },
    role : {
        type : String,
        enum : ["USER" , "ADMIN"],
        default : "USER",
    },
    subscription: {
        id : String,
        status : String,
    }

})