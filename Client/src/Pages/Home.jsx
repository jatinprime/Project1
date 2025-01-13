


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  // State to store the opacity value of the video
  const [opacity, setOpacity] = useState(1);

  // Hook to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Adjust the opacity based on scroll position
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 400, 0); // Opacity decreases as you scroll
      setOpacity(newOpacity);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full">
        <video
          className="-z-100 fixed inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dosmzkqeu/video/upload/w_2250,h_1080/pdjgycdqyolxup44e6il.mp4"
          autoPlay
          loop
          muted
          style={{ opacity: opacity }} // Apply the dynamic opacity
        />
        {/* <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.01 }} // Make the background overlay dark
        ></div> */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 md:px-16">
          <div>
            <h1 className="text-8xl font-bold mb-4">Welcome to MovieInfo</h1>
            <p className="text-lg mb-6">Explore movies, shows, and more.</p>
            <NavLink
              to="/browse"
              className="border border-white bg-transparent py-2 px-6 rounded-full text-xl font-semibold hover:bg-red-600 transition"
            >
              Start Browsing
            </NavLink>
          </div>
        </div>
      </section>

      {/* Movie Categories Section */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Movie Category 1 */}
          
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold text-white">Action</h3>
          </div>
          {/* Movie Category 2 */}
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold text-white">Comedy</h3>
          </div>
          {/* Movie Category 3 */}
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold text-white">Drama</h3>
          </div>
          {/* Movie Category 4 */}
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold text-white">Horror</h3>
          </div>
          {/* Movie Category 5 */}
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold text-white">Romance</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
