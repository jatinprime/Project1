const express = require('express') ;
const { addMovie, getAllMovieTitles, getSpecificMovieById, getLatestMovies, getMovieByGenre, movieUpdate, deleteMovie } = require('../controller/movie.controller.js');
const upload = require("../middleware/multer.middleware.js");
const { isLoggedIn, isAdmin } = require('../middleware/auth.middleware.js');

const router = express.Router() ;
// console.log("Upload Middleware:", upload);

//ADD A MOVIE
router.post('/addmovie' , isLoggedIn , isAdmin ,upload.fields([{ name: "posterUrl" }, { name: "movievideo" }]) , addMovie) ;

//GET ALL MOVIE TITLE FOR FRONTEND SEARCH QUERY REQUEST
router.get('/getMovieTitle' , getAllMovieTitles) ;

//GET MOVIE BY TITLE
router.get('/getMovieById/:id' , getSpecificMovieById) ;

//LATEST MOVIES (Trending movies)
router.get('/getLatestMovie' , getLatestMovies) ;

//Movie Controller based on category
router.get('/getMovieByGenre/:genre' , getMovieByGenre) ;

//UPDATE MOVIE
router.put('/updateMovie/:id' , isLoggedIn , isAdmin , movieUpdate) ;

//DELETE MOVIE
router.delete('/deleteMovie/:id' , isLoggedIn , isAdmin , deleteMovie) ;

module.exports = router ;