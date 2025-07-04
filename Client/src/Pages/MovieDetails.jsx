import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
// import MovieData from "../Movies/MovieData";
// import UserContext from "../Context/UserContext";
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL ;
import axios from "axios";
import UserContext from "../Context/UserContext";
import toast from "react-hot-toast";

const MovieDetails = () => {
    // const { moviename } = useContext(UserContext);
    const { id } = useParams(); // Get the movie title from the URL
    const navigate = useNavigate() ;

    const [getMovie, setGetMovie] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false) ;

     


    // Find the movie data based on the title
    const {auth , role} = useContext(UserContext) ;


    useEffect(() => {
        if (!auth) {
            navigate("/login" , { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const { data } = await axios.get(`${API_BASE_URL}/movie/getMovieById/${id}`, {
                    withCredentials: true,
                });
                setGetMovie(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovie();
    }, [id]);

    const handleDelete = async() => {
        const LoadingToast = toast.loading("deleting movie....") ;
        try {
            const response = await axios.delete(`${API_BASE_URL}/movie/deleteMovie/${id}` , {
                withCredentials: true,
            }) ;
            if(response.data.success){
                toast.success(response.data.message , {id: LoadingToast}) 
                navigate('/')
                window.location.reload();
            }else{
                toast.error(response.data.message , {id: LoadingToast})
            }
        } catch (error) {
            // console.log(error)
            toast.error(error.response?.data?.message || "Something Went Wrong" , {id : LoadingToast})
        }
    }

    const handleEditClick = () => {
        navigate(`/editmovie/${id}`) ;
    }

    // const remainingMovies = allMovie.filter((movie) => movie.title !== title);

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!getMovie) {
        return <p>Movie not found</p>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Background Image */}
            <section className="relative h-screen">
            {isPlaying ? (
                    // Video Player
                    <div className="relative w-full h-full">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                        >
                            <source src={getMovie.movievideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : (
                    // Background Image with Details
                    <>
                    <div
                        className="bg-cover bg-center h-full"
                        style={{
                            backgroundImage: `url('${getMovie.posterUrl}')`,
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
                    </div>
                    {/* Movie Details */}
                <div className="absolute inset-0 z-10 flex flex-col items-start justify-start px-8 md:px-16 lg:px-24 text-white">
                <div className="mt-[270px]">
                    {" "}
                    {/* Adjust this margin to move the content up or down */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {getMovie.moviename}
                    </h1>
                    <p className="text-sm md:text-lg mb-6 max-w-lg">
                        {getMovie.description}
                    </p>
                    <div className="flex space-x-4">
                        <button 
                            onClick={() => navigate('/videoplayer', { state: { videoUrl: getMovie.movievideo } })}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 md:px-6 rounded-md text-sm md:text-base flex items-center">
                            ▶ Play
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 md:px-6 rounded-md text-sm md:text-base">
                            Details
                        </button>
                        {(role === "ADMIN") && 
                            <>
                                <button 
                                onClick={handleEditClick}
                            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 md:px-6 rounded-md text-sm md:text-base flex items-center">
                                Edit
                            </button>
                            <button 
                                onClick={handleDelete}
                            className="bg-red-900 hover:bg-red-950 text-white py-2 px-4 md:px-6 rounded-md text-sm md:text-base flex items-center">
                                Delete
                            </button>
                            </>
                        }
                    </div>
                </div>
            </div>
                    </>
                )}
                

                
            </section>

            {/* Remaining Movies Section (Below Movie Details) */}
            {/* <section className="bg-black py-6 z-50">
                <div className="w-full px-8 md:px-16 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {remainingMovies.map((movie) => (
                        <div
                            key={movie.title}
                            className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_10px_10px_rgba(190,18,122,0.4)]"
                        >
                            <Link to={`/movie/${movie.title}`}>
                                <img
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="text-lg bg-transparent font-semibold text-white text-center p-2">
                                    {movie.title}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Footer (Will stay at the bottom) */}
        </div>
    );
};

export default MovieDetails;
