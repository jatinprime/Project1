import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios" ;
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL ;
import toast from 'react-hot-toast' ;

const CategoryMoviePage = () => {
    const { genre } = useParams();
    const Navigate = useNavigate() ;

    // Filter movies based on the selected genre
    const [filteredMovies, setFilteredMovies] = useState([]); 
    const fetchGenreMovies = async () => {
        try {
            const {data} = await axios.get(`${API_BASE_URL}/movie/getMovieByGenre/${genre}`) ;
            setFilteredMovies(data.data);
            // console.log(filteredMovies)
        } catch (error) {
            console.log(error) ;
            toast.error("Failed to load movies!") ;
            Navigate('/server/server-error') ;
        }
    }

    useEffect(() => {
        fetchGenreMovies() ;
        window.scrollTo(0, 0);
    }, [genre]);

    return (
        <div className="bg-black text-white min-h-screen px-6 py-24">
            <h1 className="text-5xl font-bold text-pink-800 underline text-center mb-8 capitalize">
                {genre}
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredMovies.map((movie) => (
                    <div
                        key={movie._id}
                        className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_10px_10px_rgba(190,18,122,0.2)]"
                    >
                        <Link to={`/movie/${movie._id}`}>
                        <img
                            src={movie.posterUrl}
                            alt={movie.moviename}
                            className="w-full h-40 object-cover"
                        />
                        <div className="text-lg bg-transparent font-semibold text-white text-center p-2">
                            {movie.moviename}
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            {filteredMovies.length === 0 && (
                <p className="text-center text-red-500 mt-6">
                    No movies found in this category.
                </p>
            )}
        </div>
    );
};

export default CategoryMoviePage;
