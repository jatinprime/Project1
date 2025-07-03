const express = require('express') ;
const { registerUserController, loginUserController, logoutUserController , getMyProfile } = require('../controller/user.controller');
const { isLoggedIn } = require('../middleware/auth.middleware.js');
const upload = require('../middleware/multer.middleware.js');

//router instance
const router = express.Router() ;

//routes
router.post('/register' , upload.single("avatar") , registerUserController) ;
router.post('/login' , loginUserController) ;
router.get('/logout' , logoutUserController) ;
router.get('/me' , isLoggedIn , getMyProfile) ;

//export router
module.exports = router ;
