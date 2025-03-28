import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "/api/v1";

const AddMovie = () => {
    const navigate = useNavigate() ;
    useEffect(() => {
        const role = localStorage.getItem("role");  // Retrieve role from local storage
        if (role !== "ADMIN") {
            navigate("/denied");  // Redirect if role is not ADMIN
        }
    }, []);

    const genreOptions = ["Action", "Comedy", "Drama", "Horror", "Romance"];

    const [movieData, setMovieData] = useState({
        moviename : "",
        description : "" ,
        genre : [] ,
        releaseDate : "" ,
    }) ;
    const [posterUrl, setPosterUrl] = useState(null)
    const [movievideo, setMovievideo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMovieData({
            ...movieData ,
            [e.target.name] : e.target.value
        })
    }

    const handleFileChange = (e) => {
        if(e.target.name === "posterUrl"){
            setPosterUrl(e.target.files[0]) ;
        }
        else{
            setMovievideo(e.target.files[0]) ;
        }
    }

    const handleSubmit = async(e) => {
        // console
        // e.prevent.default() ;
        e.preventDefault() ;
        setLoading(true) ;
        const formData = new FormData() ;
        formData.append("moviename" , movieData.moviename) ;
        formData.append("description" , movieData.description) ;
        formData.append("genre" , JSON.stringify(movieData.genre)) ;
        console.log(JSON.stringify(movieData.genre))
        // formData.append("genre", JSON.stringify([...movieData.genre])); // also works same 
        formData.append("releaseDate" , movieData.releaseDate) ;
        formData.append("posterUrl" , posterUrl) ;
        formData.append("movievideo" , movievideo) ;

        try {
            // console.log("hello") ;
            const response = await axios.post(`${API_BASE_URL}/movie/addmovie` , 
            formData , 
            {headers : {
                "Content-Type": "multipart/form-data"
            }}
            )
            setMessage(response.data.message);
        } catch (error) {
            console.error("Error adding movie:", error);
            setMessage("Failed to add movie");
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Add Movie</h2>
            {message && <p className="text-green-500">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Movie Name:</label>
                    <input type="text" name="moviename" placeholder="Enter movie name" required 
                        className="w-full p-2 border rounded"
                        value={movieData.moviename} onChange={handleChange} />
                </div>

                <div>
                    <label className="block font-medium">Description:</label>
                    <textarea name="description" placeholder="Enter description" required 
                        className="w-full p-2 border rounded"
                        value={movieData.description} onChange={handleChange} />
                </div>

                <div>
                    <label className="block font-medium">Genre (Select multiple):</label>
                    <div className="grid grid-cols-2 gap-2">
                        {genreOptions.map((genre) => (
                            <label key={genre} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={genre}
                                    checked={movieData.genre.includes(genre)}
                                    onChange={(e) => {
                                        const selectedGenres = movieData.genre.includes(genre)
                                            ? movieData.genre.filter((g) => g !== genre)
                                            : [...movieData.genre, genre];
                                        setMovieData({ ...movieData, genre: selectedGenres });
                                    }}
                                />
                                <span>{genre}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block font-medium">Release Date:</label>
                    <input type="date" name="releaseDate" required 
                        className="w-full p-2 border rounded"
                        value={movieData.releaseDate} onChange={handleChange} />
                </div>

                <div>
                    <label className="block font-medium">Upload Poster:</label>
                    <input type="file" name="posterUrl" accept="image/*" required 
                        className="w-full p-2 border rounded"
                        onChange={handleFileChange} />
                </div>

                <div>
                    <label className="block font-medium">Upload Movie Video:</label>
                    <input type="file" name="movievideo" accept="video/*" required 
                        className="w-full p-2 border rounded"
                        onChange={handleFileChange} />
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full" disabled={loading}>
                    {loading ? "Uploading..." : "Add Movie"}
                </button>
            </form>
        </div>
    );
}

export default AddMovie
