// // import React, { useContext, useState } from "react";
// // import { NavLink, useNavigate } from "react-router-dom"; // If using React Router for navigation
// // import UserContext from "../Context/UserContext";
// // // import "./Login.css"; // Add custom styles here (if needed)

// // const Login = () => {
// //     const {setAuth} = useContext(UserContext) ;
// //     const navigate = useNavigate() ;
// //   const [data , setData] = useState({
// //     email : "" ,
// //     password : "" ,
// //   }) ;
// //   const [email , setEmail] = useState('') ;
// //   const [password , setPassword] = useState('') ;
// //   const handleLogin = (e) => {
// //     e.preventDefault() ;
// //     setData({
// //         email : email ,
// //         password : password
// //     })
// //     setAuth(true) ;
// //     navigate("/") ;
// //   }

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //       <h1 className="text-4xl m-5"><NavLink to= "/" >My Logo</NavLink></h1>
// //         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
// //       <h1 className="text-center text-2xl text-gray-800">Login</h1>
// //       <form onSubmit={handleLogin}>
// //         <div className="mb-4">
// //           <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email:</label>
// //           <input
// //             // disabled
// //             type="email"
// //             id="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="Enter your email"
// //             required
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password:</label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Enter your password"
// //             required
// //             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// //           />
// //         </div>

// //         <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
// //           Login
// //         </button>
// //       </form>
// //       <p className="mt-4 text-center text-sm">
// //         Don't have an account? 
// //         <NavLink to="/register" className="text-blue-500 hover:underline">
// //             Register here
// //         </NavLink>
// //       </p>
// //         </div>
// //     </div>
// //   );
// // };


// // export default Login;

// import React, { useContext, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom"; // If using React Router for navigation
// import UserContext from "../Context/UserContext";

// const Login = () => {
//   const { setAuth } = useContext(UserContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setAuth(true);
//     navigate("/");
//   };

//   return (
//     <div 
//       className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
//       style={{
//         backgroundImage: "url('https://res.cloudinary.com/dosmzkqeu/image/upload/w_2250,h_1080/Create-A-Cover-Picture-For-A-Facebook-Page-About-Movies-72113659-1_faympo.jpg')",
//         backgroundSize: "cover", 
//         backgroundPosition: "center"
//       }}
//     >
//       <h1 className="text-4xl m-5 text-red-600 border border-red-700 rounded-2xl p-4 bg-black"><NavLink to="/" >My Logo</NavLink></h1>
//       <div className="bg-black/80 border p-8 rounded-lg shadow-lg w-full max-w-md opacity-95">
//         <h1 className="text-3xl font-semibold text-center text-red-600 mb-6">Login</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4 flex flex-col justify-center">
//             <label htmlFor="email" className="block text-red-600 text-sm font-medium">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-red-600 text-sm font-medium">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//             />
//           </div>

//           <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-red-600 text-sm">
//           Don't have an account? 
//           <NavLink to="/register" className="text-blue-500 hover:underline">
//               Register here
//           </NavLink>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Login = () => {
  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  const handleFocus = (field, state) => {
    setFocused((prev) => ({ ...prev, [field]: state }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setAuth(true);

    // Process the form data (e.g., send to an API)
    console.log("Form submitted with:", formData);

    // Clear the form by resetting the formData object
    setFormData({
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
          Login
        </h1>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="relative mb-6">
            <label
              htmlFor="email"
              className={`absolute left-3 -top-4 text-sm transition-all duration-300 mt-2 ${
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
              className="w-full p-2 m-2 text-white border-b-2 border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-pink-300 "
            />
          </div>

          {/* Password Field */}
          <div className="relative mb-6">
            <label
              htmlFor="password"
              className={`absolute left-3 -top-4 text-sm transition-all duration-300 mt-2 ${
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
              className="w-full p-2 m-2 text-white border-b-2 border-gray-300 rounded-md bg-transparent focus:outline-none focus:border-pink-300"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-white text-sm">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-300 hover:underline font-medium"
          >
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
