import axios from "axios";

const LOCAL_API = "http://localhost:8000/api/v1";  
const PROD_API  = "https://project1-5-42ii.onrender.com/api/v1";

const API = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? LOCAL_API
      : PROD_API,
  withCredentials: true,        // send cookies for protected routes
});

export default API;
