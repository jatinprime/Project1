const express = require('express') ;
const { registerUserController, loginUserController, logoutUserController , getMyProfile } = require('../controller/user.controller');
const { isLoggedIn } = require('../middleware/auth.middleware.js');


//router instance
const router = express.Router() ;

//routes
router.post('/register' , registerUserController) ;
router.post('/login' , loginUserController) ;
router.get('/logout' , isLoggedIn , logoutUserController) ;
router.get('/me' , isLoggedIn , getMyProfile) ;

//export router
module.exports = router ;
