import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation Bar */}
      

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://www.example.com/your-banner-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4 md:px-16">
          <div>
            <h1 className="text-5xl font-bold mb-4">Welcome to MovieInfo</h1>
            <p className="text-lg mb-6">Explore movies, shows, and more.</p>
            <NavLink
              to="/browse"
              className="bg-red-500 py-2 px-6 rounded-full text-xl font-semibold hover:bg-red-600 transition"
            >
              Start Browsing
            </NavLink>
          </div>
        </div>
      </section>

      {/* Movie Categories Section */}
      <section className="py-16 px-6 bg-gray-800">
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
}

export default Home;
