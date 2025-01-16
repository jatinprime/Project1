import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MovieData from "../Movies/MovieData";
import UserContext from "../Context/UserContext";

const MovieDetails = () => {
  const { moviename } = useContext(UserContext);
  const { title } = useParams(); // Get the movie title from the URL

  // Find the movie data based on the title
  const movie = MovieData.find((movie) => movie.title === title);
  const remainingMovies = MovieData.filter((movie) => movie.title !== title);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Image */}
      <section className="relative h-screen">
        <div
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: `url('${movie.imageUrl}')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        {/* Movie Details */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-start px-8 md:px-16 lg:px-24 text-white">
          <div className="mt-[270px]"> {/* Adjust this margin to move the content up or down */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
            <p className="text-sm md:text-lg mb-6 max-w-lg">
              This is a short description of the movie. It gives a brief overview of
              the plot and storyline, enticing viewers to watch it.
            </p>
            <div className="flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 md:px-6 rounded-md text-sm md:text-base flex items-center">
                ▶ Play
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 md:px-6 rounded-md text-sm md:text-base">
                Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Movies Section (Below Movie Details) */}
      <section className="bg-black py-6 z-50">
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
      </section>

      {/* Footer (Will stay at the bottom) */}
    </div>
  );
};

export default MovieDetails;
