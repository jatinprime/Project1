const express = require('express') ;
const { registerUserController, loginUserController } = require('../controller/user.controller');

//router instance
const router = express.Router() ;

//routes
router.post('/register' , registerUserController) ;
router.post('/login' , loginUserController) ;

//export router
module.exports = router ;
