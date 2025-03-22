const express = require('express') ;
const { addMovie } = require('../controller/movie.controller.js');
const upload = require("../middleware/multer.middleware.js");


const router = express.Router() ;
// console.log("Upload Middleware:", upload);

router.post('/addmovie' ,upload.fields([{ name: "posterUrl" }, { name: "movievideo" }]) , addMovie) ;

module.exports = router ;