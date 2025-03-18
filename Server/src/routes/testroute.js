const express = require('express') ;
const { testUserController } = require('../controller/testController');


//router instance
const router = express.Router() ;

//test route
router.get('/test-user' , testUserController) ;



//export router
module.exports = router ;