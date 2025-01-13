import React from "react";

const MovieCard = ({ title, imageUrl }) => (
  <div className="w-72 h-44 bg-gray-700 rounded-lg flex-shrink-0 overflow-visible shadow-lg transform transition-transform duration-300 hover:scale-125 hover:shadow-[0_4px_20px_rgba(255,255,255,0.5)] hover:z-20">
    <div className="w-full h-full rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default MovieCard;
