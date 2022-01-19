const express= require('express');

const router=express.Router();
const passport= require('passport');

const commentController= require('../controller/comment-controller');

router.post('/create',passport.checkauthentication,commentController.commentcreation);

module.exports=router;