import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // If using React Router for navigation
// import "./Login.css"; // Add custom styles here (if needed)

const Login = () => {
  

  return (
    <div className="max-w-sm mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-green-600">
      <h1 className="text-center text-2xl text-gray-800">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email:</label>
          <input
            disabled
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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
