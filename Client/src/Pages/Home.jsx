// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import MovieCard from "../Components/MovieCard/MovieCard";
// import MovieData from "../Movies/MovieData";

// const Home = () => {
//   const [opacity, setOpacity] = useState(1);

//    useEffect(() => {
//       window.scrollTo(0, 0);
//     }, []);

//   // Hook to adjust opacity on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const newOpacity = Math.max(1 - scrollY / 400, 0);
//       setOpacity(newOpacity);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // setOpacity(1) ;
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Background Video */}
//       <section className="relative h-screen w-full">
//         <video
//           className="fixed inset-0 w-full h-full object-cover"
//           src="https://res.cloudinary.com/dosmzkqeu/video/upload/w_2250,h_1080/pdjgycdqyolxup44e6il.mp4"
//           autoPlay
//           loop
//           muted
//           style={{
//             opacity: opacity,
//             pointerEvents: "none",
//             zIndex: 0,
//           }}
//         />
//         <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-16">
//           <div>
//             <h1 className="text-5xl md:text-8xl font-bold mb-4">
//               Welcome to MovieInfo
//             </h1>
//             <p className="text-lg mb-6">Explore movies, shows, and more.</p>
//             <NavLink
//               to="/browse"
//               className="border border-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-red-600 transition"
//             >
//               Start Browsing
//             </NavLink>
//           </div>
//         </div>
//       </section>

//       {/* Infinite Scrolling Movie Cards */}
//       <section className="py-16">
//         <h2 className="text-3xl font-bold text-center text-red-300 mb-8">
//           Explore Movies
//         </h2>
//         <div className="relative overflow-x-clip">
//           <div className="flex space-x-6 animate-scroll w-[123.5%]">
//             {/* Map over the MovieData array */}
//             {MovieData.map((movie) => (
//               <MovieCard
//                 key={movie.id}
//                 title={movie.title}
//                 imageUrl={movie.imageUrl}
//               />
//             ))}
//             {/* Duplicate the same cards for seamless scrolling */}
//             {MovieData.map((movie) => (
//               <MovieCard
//                 key={`second-${movie.id}`}
//                 title={movie.title}
//                 imageUrl={movie.imageUrl}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//        {/* Reverse Scrolling Movie Cards */}
//        <section className="py-1">
//         {/* <h2 className="text-3xl font-bold text-center text-red-300 mb-8">
//           Explore Movies in Reverse
//         </h2> */}
//         <div className="relative overflow-x-clip">
//           {/* Reverse Scrolling Container */}
//           <div className="flex space-x-6 animate-reverseScroll w-[123.5%]">
//             {/* Map over the image URLs */}
//             {MovieData.map((movie) => (
//               <MovieCard
//                 key={movie.id}
//                 title={movie.title}
//                 imageUrl={movie.imageUrl}
//               />
//             ))}
//             {/* Duplicate the same cards for seamless scrolling */}
//             {MovieData.map((movie) => (
//               <MovieCard
//                 key={`second-${movie.id}`}
//                 title={movie.title}
//                 imageUrl={movie.imageUrl}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//        {/* Movie Categories Section */}
//        <section className="py-16 px-6 bg-black">
//          <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
//            Browse Categories
//          </h2>
//          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//            <div className="bg-gray-700 rounded-lg p-4 text-center">
//              <h3 className="text-xl font-semibold text-white">Action</h3>
//            </div>
//            <div className="bg-gray-700 rounded-lg p-4 text-center">
//              <h3 className="text-xl font-semibold text-white">Comedy</h3>
//            </div>
//            <div className="bg-gray-700 rounded-lg p-4 text-center">
//              <h3 className="text-xl font-semibold text-white">Drama</h3>
//            </div>
//            <div className="bg-gray-700 rounded-lg p-4 text-center">
//              <h3 className="text-xl font-semibold text-white">Horror</h3>
//            </div>
//            <div className="bg-gray-700 rounded-lg p-4 text-center">
//              <h3 className="text-xl font-semibold text-white">Romance</h3>
//            </div>
//          </div>
//        </section>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "../Components/MovieCard/MovieCard";
import MovieData from "../Movies/MovieData";

const Home = () => {
    const [opacity, setOpacity] = useState(1);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Adjust opacity on scroll
    useEffect(() => {
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
                        <NavLink
                            to="/browse"
                            className="border border-white py-2 px-6 rounded-full text-lg md:text-xl font-semibold hover:bg-red-600 transition"
                        >
                            Start Browsing
                        </NavLink>
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
                        {MovieData.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                            />
                        ))}
                        {MovieData.map((movie) => (
                            <MovieCard
                                key={`second-${movie.id}`}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Reverse Scrolling Movie Cards */}
            <section className="py-1">
                <div className="relative overflow-x-clip">
                    <div className="flex space-x-6 animate-reverseScroll w-[123.5%]">
                        {MovieData.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                            />
                        ))}
                        {MovieData.map((movie) => (
                            <MovieCard
                                key={`second-${movie.id}`}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Movie Categories Section */}
            <section className="py-16 px-6 bg-black">
                <h2 className="text-3xl font-bold text-center text-red-300 mb-8">
                    Browse Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                        <NavLink
                            to={`/category/${category.toLowerCase()}`}
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
