const express= require('express');

const router=express.Router();
console.log('Here user is logged in');

const user= require('../controller/user_controller');

// here by url is /user
// router.post('/',user.create);
router.get('/profile',user.myprofile);

router.get('/',user.singup);

// router is export for router file not for index.js
module.exports = router;