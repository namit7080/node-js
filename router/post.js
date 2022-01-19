const express= require('express');

const router=express.Router();
const passport= require('passport');

const postController= require('../controller/post_controller');

router.post('/mypost',passport.checkauthentication,postController.create);

module.exports=router;