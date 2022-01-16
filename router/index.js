const express= require('express');

const passport= require('passport');

// main router object 
const router= express.Router();

// path for home-controller
const home_controller=require('../controller/home-controller');
const user1=require('../controller/user_controller');
console.log("Router is running here");

router.get('/user/profile',passport.checkauthentication,user1.myprofile);

// Home Page
router.get('/', home_controller.home);

//login
router.get('/log-in',home_controller.login);

// New Account for  Ejs link
router.use('/singup',require('./user'));

// New Account creation by form
router.post('/create-account',user1.create);

// Use Passport middleware
router.post('/log-in-user',passport.authenticate(
    'local',
    {failureRedirect: '/log-in'},
),user1.createSession);

router.get('/sing-out',home_controller.destroysession);

// here route is use another router 
//router.use('/user',require('./user'));


// to export router for index.js
module.exports=router;