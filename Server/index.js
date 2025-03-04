const express = require('express') ;
const dotenv = require('dotenv') ;
const colors = require('colors') ;
const morgan = require('morgan') ;
const cors = require('cors') ;

const app = express() ;

dotenv.config() ;

app.use(cors()) ;
app.use(morgan("dev")) ;
app.use(express.json()) ;

//Initial basic route
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

const PORT = process.env.PORT || 8000 ;

app.listen(PORT , () => {
    try {
        app.listen(PORT, () => {
            console.log(`App is Listening Successfully on ${PORT}`.white.bgMagenta);
        });
    } catch (error) {
        console.error("Error starting the server:", error.message);
        process.exit(1); // Exit the process if the server fails to start
    }
})