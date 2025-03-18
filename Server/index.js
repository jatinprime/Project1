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

//routes
app.use('/api/v1/test' , require('./src/routes/testroute.js')) ;

const PORT = 8000 ;
app.listen(PORT, () => {
        console.log(`App is Listening Successfully on ${PORT}`.white.bgMagenta);
    });