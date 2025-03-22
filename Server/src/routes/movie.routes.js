const express = require('express') ;
const { addMovie, getAllMovieTitles } = require('../controller/movie.controller.js');
const upload = require("../middleware/multer.middleware.js");


const router = express.Router() ;
// console.log("Upload Middleware:", upload);

//ADD A MOVIE
router.post('/addmovie' ,upload.fields([{ name: "posterUrl" }, { name: "movievideo" }]) , addMovie) ;

//GET ALL MOVIE TITLE FOR FRONTEND SEARCH QUERY REQUEST
router.get('/getMovieTitle' , getAllMovieTitles) ;

//GET MOVIE BY TITLE
router.get('/getMovieByTitle/:title' , )

module.exports = router ;