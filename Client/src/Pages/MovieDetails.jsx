

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
// import UserContext from "../../Context/UserContext";
// 

import MovieData from "../Movies/MovieData";
import UserContext from "../Context/UserContext";

const MovieDetails = () => {
  const { moviename } = useContext(UserContext);
  const { title } = useParams(); // Get the movie title from the URL

  // Find the movie data based on the title
  const movie = MovieData.find((movie) => movie.title === title);

   // Scroll to top when the component mounts
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${movie.imageUrl}')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Movie Details */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24 text-white">
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
  );
};

export default MovieDetails;
