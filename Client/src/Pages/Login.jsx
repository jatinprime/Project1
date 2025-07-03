/* eslint-disable */
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import axios from "axios" ;
import toast from "react-hot-toast" ;
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL ;


const Login = () => {
  const { auth , setAuth } = useContext(UserContext);
  const { setRole } = useContext(UserContext) ;

  useEffect(() => {
      if(auth === true){
        navigate('/') ;
      }
    },[])

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the specific field in formData
    });
  };
  
  const handleFocus = (field, state) => {
    setFocused((prev) => ({ ...prev, [field]: state }));
  };

  const handleLogin = async (e) => {
    e.preventDefault() ;

    //show a loading state
    const loadingToast = toast.loading("Logging in....") ;

    try{

      const res = await axios.post(`${API_BASE_URL}/user/login` , formData , {
        withCredentials : true
      })

      if(!res.data.success){
        toast.error(res.data.message || "Login failed. Try again.",{
          id : loadingToast
        }) ;
        return ;    //stop further execution
      }

      //success toast
      toast.success("Successfully Logged in!" , {
        id : loadingToast
      }) ;

      setAuth(true) ;
      setRole(res.data.user.role) ;

      navigate("/") ;


    }catch(error){
      //error
      toast.error(error.response?.data?.message || "Something went wrong" , {
        id : loadingToast
      })
    }

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
  className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-500 text-white font-bold rounded-md 
             hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-600 hover:opacity-90 
             focus:outline-none  focus:ring-2 focus:ring-pink-500"
>
  Login
</button>

          </div>
        </form>
        <p className="mt-4 text-center text-white text-sm">
          Don&apos;t have an account?{" "}
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
