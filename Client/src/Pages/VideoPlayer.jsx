import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const VideoPlayer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const videoUrl = location.state?.videoUrl;

    // Redirect if there's no video URL
    useEffect(() => {
        if (!videoUrl) {
            navigate("/");
        }
    }, [videoUrl, navigate]);

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            {videoUrl ? (
                <video className="w-full max-w-4xl h-auto" controls autoPlay>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p className="text-white text-xl">No video available</p>
            )}
        </div>
    );
};

export default VideoPlayer;
