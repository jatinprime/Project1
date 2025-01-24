const express = require('express')

const app = express() ;
const port = 3000 ;

app.get('/' , (req , res) => {
    res.send('Hello World')
})

app.get('/home' , (req , res) => {
    res.send('<h1>home</h1>')
})

app.listen(port , () => {
    console.log(`App listening on port http://localhost:${port}`)
})