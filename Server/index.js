const express = require('express') ;
const dotenv = require('dotenv') ;
const colors = require('colors') ;
const morgan = require('morgan') ;
const cors = require('cors') ;
const connectDb = require('./src/config/db');

//specific router
const app = express() ;

// dotenv configurations
dotenv.config() ;

// Connect to Database
connectDb() ;

// Middlewares
app.use(cors()) ;
app.use(morgan("dev")) ;
app.use(express.json()) ;

// Initial basic route
app.get('/' , (req , res) => {
    try {
        res.status(200).send({
            success : true,
            message : "initial",
        })
    } catch (error) {
        console.log(error) ;
        res.status(500).send({
            success : false,
            message : "Error in the home initial route",
            error
        })
    }
})

const PORT = 8000 ;
app.listen(PORT, () => {
        console.log(`App is Listening Successfully on ${PORT}`.white.bgMagenta);
    });