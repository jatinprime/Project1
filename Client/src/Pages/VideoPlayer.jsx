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
        <div className="flex justify-center items-center min-h-screen bg-black px-4">
            {videoUrl ? (
                <div className="w-full max-w-4xl h-auto">
                    <video
                        className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        controls
                        autoPlay
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <p className="text-white text-xl">No video available</p>
            )}
        </div>
    );
};

export default VideoPlayer;
