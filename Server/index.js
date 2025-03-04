const express = require('express') ;
const dotenv = require('dotenv');
const colors = require('colors') ;

const app = express() ;

dotenv.config() ;

const PORT = 8000 ;

app.get('/' , (req , res) => {
    res.status(200).send({
        success : true,
        message : "initial",
    })
})

app.listen(PORT , () => {
    console.log(`App is Listening Successfully on ${PORT}`.white.bgMagenta) ;
})