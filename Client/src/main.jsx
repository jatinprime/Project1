import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layouts/Layout";
import { RouterProvider } from "react-router";
import About from "./Pages/About";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Home from "./Pages/Home.jsx";
import Notfound from "./Pages/Notfound.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
// import Contact from "./Pages/contact.jsx";
import MovieDetails from "./Pages/MovieDetails";
import CategoryMoviePage from "./Pages/CategoryMoviePage.jsx";
import SubscriptionPage from "./Pages/SubscriptionPage.jsx";
import InternalServerError from "./Pages/InternalServerError.jsx";
import AddMovie from "./Pages/AddMovie";
import EditMovie from "./Pages/EditMovie";
import Denied from "./Pages/Denied.jsx";
import Profile from "./Pages/Profile.jsx";
import VideoPlayer from "./Pages/VideoPlayer";
import { getTokenFromCookie, isTokenExpired } from "./utils/auth";
import Contact from "./Pages/Contact";

// const token = getTokenFromCookie();

// if (!token || isTokenExpired(token)) {
//     console.log("Token expired or missing. Logging out...");
//     localStorage.removeItem("auth");
//     localStorage.removeItem("role");

//     if (window.location.pathname !== "/") {
//         window.location.href = "/";
//     }
// }

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            {/* Dynamic route */}
            <Route path="/category/:genre" element={<CategoryMoviePage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/addmovie" element={<AddMovie />} />
            <Route path="/editmovie/:id" element={<EditMovie />} />
            <Route path="/denied" element={<Denied />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/videoplayer" element={<VideoPlayer/>} />
            {/* <Route path='/movie' element = {<MovieDetails/>} /> */}
            <Route
                path="/server/server-error"
                element={<InternalServerError />}
            />
            <Route path="*" element={<Notfound />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
