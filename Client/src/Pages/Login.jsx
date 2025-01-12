import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // If using React Router for navigation
// import "./Login.css"; // Add custom styles here (if needed)

const Login = () => {

    const navigate = useNavigate() ;
  const [data , setData] = useState({
    email : "" ,
    password : "" ,
  }) ;
  const [email , setEmail] = useState('') ;
  const [password , setPassword] = useState('') ;
  const handleLogin = (e) => {
    e.preventDefault() ;
    setData({
        email : email ,
        password : password
    })
    navigate("/") ;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl m-5"><NavLink to= "/" >My Logo</NavLink></h1>
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-center text-2xl text-gray-800">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email:</label>
          <input
            // disabled
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account? 
        <NavLink to="/register" className="text-blue-500 hover:underline">
            Register here
        </NavLink>
      </p>
        </div>
    </div>
  );
};


export default Login;
