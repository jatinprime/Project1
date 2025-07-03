import React, { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL ;

const Profile = () => {
    const {user, setUser , auth , role} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {

        

        const fetchProfile = async () => {
          const LoadingToast = toast.loading("Fetching Profile ....");
            if(!auth){
              toast.error("You need to Login to access...", {id : LoadingToast}) ;
              navigate('/login',{replace:true}) ;
              return ;
            }


            try {
                const res = await axios.get(`${API_BASE_URL}/user/me`, {
                    withCredentials: true,
                });

                if (!res.data.success) {
                    toast.error(res.data.message, { id: LoadingToast });
                } else {
                    toast.success(res.data.message, { id: LoadingToast });
                    setUser(res.data.user);
                }
            } catch (error) {
                toast.error(
                    error.response?.data?.message || "Something Went Wrong",
                    { id: LoadingToast }
                );
                navigate("/");
            }
        };

        fetchProfile();
    }, []);

    if (!user) {
        return <p>Loading....</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6">
            <div className="bg-white p-6 rounded-2xl shadow-xl text-gray-800 max-w-md w-full text-center transform hover:scale-105 transition duration-300">
                <h2 className="text-3xl font-bold mb-4 text-purple-700">Profile</h2>
                <div className="flex justify-center">
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-md"
                    />
                </div>
                <div className="mt-4 text-lg">
                    <p className="mb-2">
                        <strong className="text-gray-600">Name:</strong> {user.username}
                    </p>
                    <p className="mb-2">
                        <strong className="text-gray-600">Email:</strong> {user.email}
                    </p>
                    <p className="mb-2">
                        <strong className="text-gray-600">Age:</strong> {user.age || "Not Provided"}
                    </p>
                    <p className="mb-2">
                        <strong className="text-gray-600">Role:</strong> {user.role}
                    </p>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                >
                    Go Home
                </button>
                <br />
                {role === "ADMIN" && 
                    <>
                        <button
                    onClick={() => navigate("/addmovie")}
                    className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-600"
                >
                    Add Movie
                </button>
                    </>

                }
            </div>
        </div>
    );
};

export default Profile;
