const express = require('express') ;
const { testUserController, basicController, testController } = require('../controller/test.controller');


//router instance
const router = express.Router() ;

//test route
router.get('/' , basicController) ;

router.get('/test' , testController)

router.get('/test-user' , testUserController) ;

//export router
module.exports = router ;