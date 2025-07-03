import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MovieCard from "../Components/MovieCard/MovieCard";
// import MovieData from "../Movies/MovieData";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL ;
import toast from 'react-hot-toast';

/*
toast.success("Movie fetched successfully!");
toast.error("Failed to load movies!");
*/

const Home = () => {
    const [opacity, setOpacity] = useState(1);
    const browseRef = useRef(null); // Reference for the "Browse Categories" section
    // const [moviesTitle , setMoviesTitle] = useState([]) ;
    const [latestMovies, setLatestMovies] = useState([]) ;
    const navigate = useNavigate() ;
    let firstHalf = latestMovies.slice(0, 6);
    let secondHalf = latestMovies.slice(6, 12);

    const handleBrowseClick = () => {
        if (browseRef.current) {
            browseRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const fetchMoviesTitle = async() => {
    //     try {
    //         const {data} = await axios.get(`${API_BASE_URL}/movie/getMovieTitle`) ;
    //         if(data.success){
    //             setMoviesTitle(data.data) ;
    //         }
    //     } catch (error) {
    //         console.log(error) ;
    //         toast.error("Failed to load movies!") ;
    //         navigate('/server/server-error') ;
    //     }
    // }

    const fetchLatestMovies = async() => {
        try {
            const {data} = await axios.get(`${API_BASE_URL}/movie/getLatestMovie`) ;
            if(data.success){
                setLatestMovies(data.data) ;
            }
            firstHalf = latestMovies.slice(0, 6);
            secondHalf = latestMovies.slice(6, 12);
            // console.log(data.data.length) ;
            // console.log(data.data) ;   for debugging :)
        } catch (error) {
            console.log(error) ;
            toast.error("Failed to load movies!") ;
            navigate('/server/server-error') ;
        }
    }

    // Adjust opacity on scroll
    useEffect(() => {

        // fetchMoviesTitle() ;
        fetchLatestMovies() ;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.max(1 - scrollY / 400, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const categories = ["Action", "Comedy", "Drama", "Horror", "Romance"];

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Background Video Section */}
            <section className="relative h-screen w-full">
                <video
                    className="fixed inset-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/dosmzkqeu/video/upload/w_2250,h_1080/pdjgycdqyolxup44e6il.mp4"
                    autoPlay
                    loop
                    muted
                    style={{
                        opacity: opacity,
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-16">
                    <div>
                        <h1 className="text-5xl md:text-8xl font-bold mb-4">
                            Welcome to MovieInfo
                        </h1>
                        <p className="text-lg mb-6">
                            Explore movies, shows, and more.
                        </p>
                        <button
                            className="border border-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-red-600 transition"
                            onClick={handleBrowseClick}
                        >
                            Start Browsing
                        </button>
                    </div>
                </div>
            </section>

            {/* Infinite Scrolling Movie Cards */}
            <section className="py-16">
                <h2 className="text-3xl font-bold text-center text-red-300 mb-8">
                    Explore Movies
                </h2>
                <div className="relative overflow-x-clip">
                    <div className="flex space-x-6 animate-scroll w-[123.5%]">
                        {firstHalf.map((movie) => (
                            <MovieCard
                                id={movie._id}
                                key={movie._id}
                                title={movie.moviename}
                                imageUrl={movie.posterUrl}
                            />
                        ))}
                        {firstHalf.map((movie) => (
                            <MovieCard
                                id={movie._id}
                                key={`second-${movie._id}`}
                                title={movie.moviename}
                                imageUrl={movie.posterUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Reverse Scrolling Movie Cards */}
            <section className="py-1">
                <div className="relative overflow-x-clip">
                    <div className="flex space-x-6 animate-reverseScroll w-[123.5%]">
                        {secondHalf.map((movie) => (
                            <MovieCard
                            id={movie._id}
                            key={movie._id}
                            title={movie.moviename}
                            imageUrl={movie.posterUrl}
                            />
                        ))}
                        {secondHalf.map((movie) => (
                            <MovieCard
                            id={movie._id}
                            key={`second-${movie._id}`}
                            title={movie.moviename}
                            imageUrl={movie.posterUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Movie Categories Section */}
            <section
                className="py-16 px-6 bg-black"
                ref={browseRef} // Attach ref to this section
            >
                <h2 className="text-3xl font-bold text-center text-red-300 mb-8">
                    Browse Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                        <NavLink
                            to={`/category/${category}`}
                            key={category}
                            className="relative bg-pink-900 rounded-lg p-4 text-center text-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-pink-600 to-pink-950"
                            style={{
                                height: "100px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <h3 className="text-xl font-semibold text-white tracking-wider">
                                {category}
                            </h3>
                            {/* Decorative Border */}
                            <div className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-white transition-all"></div>
                        </NavLink>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
