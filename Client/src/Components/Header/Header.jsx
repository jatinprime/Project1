// import React, { useState, useEffect, useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import UserContext from '../../Context/UserContext';

// const Header = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const {auth , setAuth} = useContext(UserContext) ;

//   // Handle the scroll event to change the navbar style
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolling(true);
//     } else {
//       setScrolling(false);
//     }
//   };

//   useEffect(() => {
//     // Add event listener for scroll
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`text-white fixed z-50 top-0 left-0 w-full px-6 bg-transparent  transition-all duration-300 ease-in-out ${
//         scrolling ? 'py-2 ' : 'py-4 '
//       }`}
//     >
//       <div className="flex items-center justify-between">
//         <div className="logo text-xl font-bold">
//           <NavLink
//             to= "/"
//           >
//           <h1>MyLogo</h1>
//           </NavLink>
          
//         </div>

//         <nav className="flex space-x-6">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-red-600 font-semibold'
//                 : 'text-white hover:text-blue-500'
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/profile"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-red-600 font-semibold'
//                 : 'text-white hover:text-blue-500'
//             }
//           >
//             Profile
//           </NavLink>
//         </nav>

//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-red-950"
//           />
//         </div>

//         <div className="about">
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-red-600 font-semibold'
//                 : 'text-white hover:text-blue-500'
//             }
//           >
//             About
//           </NavLink>
//         </div>

//         <div className="auth-buttons flex space-x-4">
//           {!auth && <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-red-600 font-semibold'
//                 : 'text-white hover:text-blue-500'
//             }
//           >
//             Login
//           </NavLink>}
//           {!auth && <NavLink
//             to="/register"
//             className={({ isActive }) =>
//               isActive
//                 ? 'text-red-600 font-semibold'
//                 : 'text-white hover:text-blue-500'
//             }
//           >
//             Register
//           </NavLink>}
//           {auth && 
//             <button
//               onClick={() => setAuth(false)} // Set auth to false on logout
//               className="text-white hover:text-blue-500 font-semibold bg-transparent border-none cursor-pointer"
//             >
//               Logout
//             </button>
//           }
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import MovieData from "../../Movies/MovieData";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollSearch, setscrollSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [filteredMovies, setFilteredMovies] = useState([]); // State for filtered movie suggestions
  const { auth, setAuth } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle the scroll event to change the navbar style
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

    if(window.scrollY > 600){
      setscrollSearch(true) ;
    }else setscrollSearch(false) ;
  };

  // Update filtered movies based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMovies([]);
    } else {
      const filtered = MovieData.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle navigation to the movie details page
  const handleMovieClick = (title) => {
    setSearchQuery(""); // Clear the search bar
    setFilteredMovies([]); // Clear the suggestions
    navigate(`/movie/${title}`);
  };

  return (
    <header
      className={`text-white fixed z-50 top-0 left-0 w-full px-6 bg-transparent transition-all duration-300 ease-in-out ${
        scrolling ? "py-2 " : "py-4 "
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="logo text-xl font-bold">
          <NavLink to="/">
            <h1>MyLogo</h1>
          </NavLink>
        </div>

        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-white hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-white hover:text-blue-500"
            }
          >
            Profile
          </NavLink>
        </nav>

        <div className="relative">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`px-4 py-2 bg-transparent border ${scrollSearch ? 'border-pink-800' : 'border-white'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
          />
          {filteredMovies.length > 0 && (
            <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="px-4 py-2 text-black cursor-pointer border border-none hover:bg-gray-200"
                  onClick={() => handleMovieClick(movie.title)}
                >
                  {movie.title}
                  
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="about">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-white hover:text-blue-500"
            }
          >
            About
          </NavLink>
        </div>

        <div className="auth-buttons flex space-x-4">
          {!auth && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-semibold"
                  : "text-white hover:text-blue-500"
              }
            >
              Login
            </NavLink>
          )}
          {!auth && (
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-semibold"
                  : "text-white hover:text-blue-500"
              }
            >
              Register
            </NavLink>
          )}
          {auth && (
            <button
              onClick={() => setAuth(false)} // Set auth to false on logout
              className="text-white hover:text-blue-500 font-semibold bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
