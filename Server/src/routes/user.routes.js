const express = require('express') ;
const { registerUserController } = require('../controller/user.controller');

//router instance
const router = express.Router() ;

//routes
router.post('/register' , registerUserController) ;

//export router
module.exports = router ;