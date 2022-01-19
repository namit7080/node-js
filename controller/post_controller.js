const Post= require('../models/post');

module.exports.create= function (req,res) {
    Post.create({
     content:req.body.text,
     user:req.user._id
    },function (error,post) {
        if(error){
            console.log("There is error");
        }
        else{
            return res.redirect('back');
        }
        
    })
    
}