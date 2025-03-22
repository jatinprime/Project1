const multer = require("multer");

// Store files in memory (for direct Cloudinary upload)
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
    fileFilter: (_req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/webp", "video/mp4"];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error(`Unsupported file type: ${file.mimetype}`), false);
        }
        cb(null, true);
    },
});

module.exports = upload;
