import React, { useState } from "react";
import { useNavigate , NavLink } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate() ;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading

    // Process the form data (e.g., send to an API)
    console.log("Form submitted with:", formData);

    // Clear the form by resetting the formData object
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    navigate("/") ;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the specific field in formData
    });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-sky-400">
      <h1 className="text-4xl m-5"><NavLink to= "/" >My Logo</NavLink></h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col justify-center items-end">
              <label className="block text-gray-700 text-sm font-medium" htmlFor="username">
                UserName
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>


          <div className="mb-4 flex flex-col justify-center items-end">
            <label className="block text-gray-700 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4 flex flex-col justify-center items-end">
            <label className="block text-gray-700 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have Account ? 
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Login here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
