import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  // Handle the scroll event to change the navbar style
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky z-50 top-0 left-0 w-full px-6 bg-gray-100 border-b border-gray-300 transition-all duration-300 ease-in-out ${
        scrolling ? 'py-2 opacity-90' : 'py-4'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="logo text-xl font-bold">
          <h1>MyLogo</h1>
        </div>

        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Profile
          </NavLink>
        </nav>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="about">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            About
          </NavLink>
        </div>

        <div className="auth-buttons flex space-x-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-700 hover:text-blue-500'
            }
          >
            Logout
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
