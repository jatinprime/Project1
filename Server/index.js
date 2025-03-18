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
app.use('/api/v1/' , require('./src/routes/test.routes.js')) ;
app.use('/api/v1/user' , require('./src/routes/user.routes.js')) ;

const PORT = process.env.PORT || 8000 ;
app.listen(PORT, () => {
        console.log(`App is Listening Successfully on http://localhost:${PORT}/api/v1`.white.bgMagenta);
    });