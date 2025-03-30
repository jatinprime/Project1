import React, { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "/api/v1";

const Profile = () => {
    const {user, setUser , auth} = useContext(UserContext);
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
        <div>
            <h2>Profile</h2>
            <img src={user.avatar} alt="User Avatar" width="100" />
            <p>
                <strong>Name:</strong> {user.username}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <p>
                <strong>Age:</strong> {user.age || "Not Provided"}
            </p>
            <p>
                <strong>Role:</strong> {user.role}
            </p>
        </div>
    );
};

export default Profile;
