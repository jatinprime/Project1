const mongoose = require('mongoose') ;

//function to connect to mongoose
const connectDb = async (req , res) => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`) ;
        console.log(`Connected To Database ${mongoose.connection.host}`.white.bgCyan) ;
    } catch (error) {
        console.log("Error in connecting database".bgRed , error) ;
    }
}

module.exports = connectDb ;