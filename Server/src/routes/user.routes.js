const express = require('express') ;
const { registerUserController, loginUserController, logoutUserController } = require('../controller/user.controller');

//router instance
const router = express.Router() ;

//routes
router.post('/register' , registerUserController) ;
router.post('/login' , loginUserController) ;
router.get('/logout' , logoutUserController) ;

//export router
module.exports = router ;
