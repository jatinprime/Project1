const { Schema } = require("mongoose");

const userSchema = new Schema({
    moviename : {
        type : String,
        required : [true , "MovieName is required"],
    },
    description : {
        type : String,
        required : [true , "description is required"] ,
    },
    genre: [{
        type: String, 
        required: true 
    }],
})