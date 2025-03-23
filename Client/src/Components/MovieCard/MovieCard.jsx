import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";

const MovieCard = ({ id, key , title, imageUrl }) => {
    const navigate = useNavigate(); // useNavigate inside the component
    const { setMoviename } = useContext(UserContext);

    const handleCardClick = () => {
        setMoviename(title); // Set the movie title in context
        navigate(`/movie/${id}`); // Navigate to the MovieDetails page with the movie title as part of the URL
    };
    return (
        <div
            onClick={handleCardClick} // Add click handler
            className="w-72 h-44 bg-gray-700 rounded-lg flex-shrink-0 overflow-visible shadow-lg transform transition-transform duration-300 hover:scale-125 hover:shadow-[0_4px_20px_rgba(255,255,255,0.5)] hover:z-10 cursor-pointer"
        >
            <div className="w-full h-full rounded-lg overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default MovieCard;
