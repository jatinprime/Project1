import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b border-gray-300">
            <div className="logo text-xl font-bold">
                <h1>MyLogo</h1>
            </div>

            <nav className="flex space-x-6">
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"
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
                        isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }
                >
                    About
                </NavLink>
            </div>

            <div className="auth-buttons flex space-x-4">
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }
                >
                    Login
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }
                >
                    Register
                </NavLink>
                <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }
                >
                    Logout
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
