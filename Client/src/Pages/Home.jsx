import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "../Components/MovieCard/MovieCard";

// const MovieCard = ({ title, imageUrl }) => (
//     <div className="w-72 h-44 bg-gray-700 rounded-lg flex-shrink-0 overflow-hidden shadow-lg">
//         <img
//             src={imageUrl}
//             alt={title}
//             className="w-full h-4/5 object-cover rounded-t-lg"
//         />
//         <h3 className="text-white text-center text-sm mt-2">{title}</h3>
//     </div>
// );
const imageUrls = [
    "https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/avengers-endgame-characters-qj40k81b20462uer_lhaebv.jpg",
    "https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/wp14475523-max-hargrove-wallpapers_rfaimz.jpg",
    "https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/1191374_vwzpix.jpg",
    "https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/wp6076117-the-family-man-wallpapers_ccsvq6.jpg",
    "https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/sad-nobita-angry-shizuka-stand-by-me-doraemon-uamjw3leo5le2y39_d3pjph.jpg",
    "https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/wp2732686-suits-wallpapers_riae6u.jpg",
];

const Home = () => {
    const [opacity, setOpacity] = useState(1);

    // Hook to adjust opacity on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newOpacity = Math.max(1 - scrollY / 400, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">
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
                        zIndex: 0, // Ensure it stays behind the content
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
            <section className="py-16 ">
                <h2 className="text-3xl font-bold text-center text-red-300 mb-8">
                    Explore Movies
                </h2>
                <div className="relative ">
                    {/* Container with explicit width */}
                    <div className="flex space-x-6 animate-scroll w-[123.5%]">
                        {/* Map over the image URLs */}
                        {imageUrls.map((url, index) => (
                            <MovieCard
                                key={`first-${index}`}
                                title={`Movie ${index + 1}`}
                                imageUrl={url}
                            />
                        ))}
                        {/* Duplicate the same cards for seamless scrolling */}
                        {imageUrls.map((url, index) => (
                            <MovieCard
                                key={`second-${index}`}
                                title={`Movie ${index + 1}`}
                                imageUrl={url}
                            />
                        ))}
                    </div>
                </div>
            </section>
            ;{/* Movie Categories Section */}
            <section className="py-16 px-6 bg-black">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
                    Browse Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            Action
                        </h3>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            Comedy
                        </h3>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            Drama
                        </h3>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            Horror
                        </h3>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <h3 className="text-xl font-semibold text-white">
                            Romance
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
