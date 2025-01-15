import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieData from "../Movies/MovieData";

const CategoryMoviePage = () => {
  const { genre } = useParams();

  // Filter movies based on the selected genre
  const filteredMovies = MovieData.filter((movie) =>
    movie.genre.includes(genre)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-6 py-24">
      <h1 className="text-5xl font-bold text-pink-800 underline text-center mb-8 capitalize">
        {genre}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-[0_0_10px_10px_rgba(190,18,122,0.2)]"
          >
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="w-full h-40 object-cover"
            />
            <div className="text-lg bg-transparent font-semibold text-white text-center p-2">{movie.title}</div>
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
