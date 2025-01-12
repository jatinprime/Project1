import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <>
       <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-lg font-semibold">Your Website Name</p>
        </div>
        <div className="flex justify-center space-x-6">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => {return isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"}}
            
          >
            Contact
          </NavLink>
          <NavLink 
            to="/privacy-policy" 
            className={({ isActive }) => 
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-400"
            }
          >
            Privacy Policy
          </NavLink>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          © 2025 Your Website Name. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
