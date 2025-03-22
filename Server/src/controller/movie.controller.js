const movieModel = require("../models/movie.models.js");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const addMovie = async (req, res, next) => {
    try {
        const {
            moviename,
            description,
            genre,
            releaseDate,
            movievideo,
            posterUrl,
            availableFormats,
        } = req.body;

        if (!moviename || !description || !genre || !releaseDate) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const movieExist = await movieModel.findOne({ moviename });
        if (movieExist) {
            return res.status(400).json({
                success: false,
                message: "Movie name already exists",
            });
        }

        const files = req.files;
        if (!files.posterUrl || !files.movievideo) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const posterUpload = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "movies/posters", resource_type: "image" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            stream.end(files.posterUrl[0].buffer);
        });

        // Upload movie to Cloudinary
        const movieUpload = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "movies/videos", resource_type: "video" },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            stream.end(files.movievideo[0].buffer);
        });

        const movie = await movieModel.create({
            moviename,
            movievideo: movieUpload.secure_url,
            description,
            genre,
            releaseDate,
            posterUrl: posterUpload.secure_url,
            availableFormats,
        });

        if (!movie) {
            return res.status(400).json({
                success: false,
                message: "Error in adding movie, please try again",
            });
        }

        // movie.posterUrl = posterUpload.secure_url ;
        // movie.movievideo = movieUpload.secure_url ;

        // fs.unlinkSync(files.posterUrl[0].path) ;
        // fs.unlinkSync(files.movie[0].path) ;

        // await movie.save() ;
        res.status(201).json({
            success: true,
            message: "Movie added successfully",
            data: movie,
        });
    } catch (error) {
        // console.log("hello")
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Error in Adding Movie",
            error: error.message,
        });
    }
};

//controller for get all title for frontend search filter query
const getAllMovieTitles = async (req, res) => {
    try {
        const movies = await movieModel.find({}, "moviename _id"); // Fetch only moviename and id field

        res.status(200).json({
            success: true,
            message: "Successfully fetched all titles",
            data: movies.map((movie) => ({
                id: movie._id,
                title: movie.moviename,
            })), // Return an array of objects with id and title
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error fetching movie titles",
            error: error.message,
        });
    }
};

//controller for movie recieved by id
const getSpecificMovieById = async (req, res) => {
    try {
        const { id } = req.params;  // Get movie ID from URL

        const movie = await movieModel.findById(id);  // Fetch movie by ID

        // Validate if the movie exists
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found",
            });
        }

        // Successful response
        res.status(200).json({
            success: true,
            data: movie,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error fetching movie",
            error: error.message
        });
    }
};

//Fetch latest movies
const getLatestMovies = async (req , res) => {
    try{
        const latestMovies = await movieModel.find({}).sort({createdAt : -1}).limit(12) ;

        res.status(200).send({
            success : true , 
            message : "Successfully fetched latest 12 movies", 
            data : latestMovies
        })
    }catch(error){
        console.log(error) ;
        res.status(500).send({
            success : false , 
            message : "Error fetching trending movies" , 
            error : error.message
        })
    }
}

//Get movie by Genre
const getMovieByGenre = async(req , res) => {
    try{
        
        const {genre} = req.params ;      //get genre from params

        //find movies where the genre array contains the requested array
        const movies = await movieModel.find({genre : genre}) ;

        //validation
        if (!movies.length) {
            return res.status(404).json({
                success: false,
                message: "No movies found for this genre",
            });
        }

        res.status(200).json({
            success: true,
            message: `Movies fetched successfully for genre: ${genre}`,
            data: movies,
        });

    }catch(error){
        console.log(error) ;
        res.status(500).send({
            success : false , 
            message : "Error fetching movie by genre"
        })
    }
}

module.exports = { addMovie, getAllMovieTitles , getSpecificMovieById , getLatestMovies , getMovieByGenre};
