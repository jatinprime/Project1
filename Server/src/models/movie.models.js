const { Schema, default: mongoose } = require("mongoose");

const movieSchema = new Schema({
    moviename : {
        type : String,
        required : [true , "MovieName is required"],
        unique : true
    },
    movievideo : {
        type : String,
        required : [true , "Movie video is required"],
    },
    description : {
        type : String,
        required : [true , "description is required"] ,
    },
    genre: [{
        type: String, 
        required: true 
    }],
    releaseDate: { type: Date, required: true },
    reviews: [
        {
          userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          comment: String,
          rating: { type: Number, min: 0, max: 10 },
          createdAt: { type: Date, default: Date.now },
        },
    ],
    likesCount: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    posterUrl: { 
        type: String ,
        default : "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90301/98769/the-creator-original-movie-poster-one-sheet-final-style-buy-now-at-starstills__81077.1697644483.jpg?c=2"
    },
    availableFormats: [{ type: String, enum: ["HD", "Full HD", "4K"]}],
}, {
    timestamps : true
})

module.exports = mongoose.model("Movie" , movieSchema) ;