import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Signup = () => {
  const { setAuth } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [focused, setFocused] = useState({
    username: false,
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const handleFocus = (field, state) => {
    setFocused((prev) => ({ ...prev, [field]: state }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    setAuth(true);

    // Process the form data (e.g., send to an API)
    console.log("Form submitted with:", formData);

    // Clear the form by resetting the formData object
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the specific field in formData
    });
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/pexels-frank-cone-140140-3607542_kn0txy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl mb-8 text-white font-bold">
        <NavLink to="/">My Logo</NavLink>
      </h1>
      <div className="backdrop-blur-md bg-white/20 p-10 rounded-xl border border-white shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-white mb-10">
          Signup
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="relative mb-6">
            <label
              htmlFor="username"
              className={`absolute left-3 top-3 text-sm transition-all duration-300 mt-2 ${
                focused.username || formData.username
                  ? "-top-6 text-xs text-pink-300"
                  : "top-3 text-white"
              }`}
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              onFocus={() => handleFocus("username", true)}
              onBlur={() => handleFocus("username", false)}
              // placeholder="Enter your name"
              className="w-full m-2 p-2 text-white border-b-2 rounded-md border-gray-300 bg-transparent focus:outline-none focus:border-pink-300"
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-6">
            <label
              htmlFor="email"
              className={`absolute left-3 top-3 text-sm transition-all duration-300 mt-2 ${
                focused.email || formData.email
                  ? "-top-6 text-xs text-pink-300"
                  : "top-3 text-white"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email", true)}
              onBlur={() => handleFocus("email", false)}
              // placeholder="Enter your email"
              className="w-full p-2 m-2 text-white border-b-2 border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-pink-300 "
            />
          </div>

          {/* Password Field */}
          <div className="relative mb-6">
            <label
              htmlFor="password"
              className={`absolute left-3 top-3 text-sm transition-all duration-300 mt-2 ${
                focused.password || formData.password
                  ? "-top-6 text-xs text-pink-300"
                  : "top-3 text-white"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleFocus("password", true)}
              onBlur={() => handleFocus("password", false)}
              // placeholder="Enter your password"
              className="w-full p-2 m-2 text-white border-b-2 border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-pink-300"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-white text-sm">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-blue-300 hover:underline font-medium"
          >
            Login here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
