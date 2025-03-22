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
        const movies = await movieModel.find({}, "moviename"); // Fetch only moviename field

        res.status(200).json({
            success: true,
            message: "Successfully fetched all titles",
            data: movies.map((movie) => movie.moviename), // Return only an array of titles
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

module.exports = { addMovie, getAllMovieTitles };
