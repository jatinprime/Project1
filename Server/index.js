const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDb = require('./src/config/db');
const cookieParser = require('cookie-parser');
const cloudinary = require("cloudinary").v2;

// Specific router
const app = express();

// dotenv configurations
dotenv.config();

// Connect to Database
connectDb();

// Middlewares
app.use(
    cors({
        origin: ["http://localhost:5173" , "https://project1-2yfq.vercel.app"], // ✅ Allow frontend origin
        credentials: true, // ✅ Allow cookies & authentication headers
    })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Routes                
app.use('/api/v1/', require('./src/routes/test.routes.js'));
app.use('/api/v1/user', require('./src/routes/user.routes.js'));
app.use('/api/v1/movie', require('./src/routes/movie.routes.js'));

const PORT = process.env.PORT || 8000;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
    console.log(`App is Listening Successfully on http://localhost:${PORT}/api/v1`.white.bgMagenta);
});
