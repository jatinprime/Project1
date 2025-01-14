import React, { useContext, useState } from "react";
import { useNavigate , NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Signup = () => {

  const {setAuth} = useContext(UserContext) ;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate() ;

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
    <div className="flex flex-col justify-center items-center min-h-screen bg-sky-400"
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/Create-A-Cover-Picture-For-A-Facebook-Page-About-Movies-72113659-1_faympo.jpg')",
      backgroundSize: "cover", 
      backgroundPosition: "center"
    }}
    >
      <h1 className="text-4xl m-5 text-red-600 border border-red-700 rounded-2xl p-4 bg-black"><NavLink to= "/" >My Logo</NavLink></h1>
      <div className="bg-black/80 border p-8 rounded-lg shadow-lg w-full max-w-md opacity-95">
        <h1 className="text-3xl font-semibold text-center text-red-600 mb-6">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col justify-center">
              <label className="block text-red-600 text-sm font-medium" htmlFor="username">
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


          <div className="mb-4 flex flex-col justify-center">
            <label className="block text-red-600 text-sm font-medium" htmlFor="email">
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

          <div className="mb-4 flex flex-col justify-center">
            <label className="block text-red-600 text-sm font-medium" htmlFor="password">
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
        <p className="mt-4 text-center text-red-600 text-sm">
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
