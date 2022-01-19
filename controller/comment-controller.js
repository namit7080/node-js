const post= require('../models/post');
const  comment= require('../models/commnet');

module.exports.commentcreation= function (req,res) {
    
    post.findById(req.body.post,function (err,post) {
       
         
        if(post){
            console.log("found");
              comment.create({
                comment:req.body.text,
                user:req.user._id,
                post:req.body.post
              },function (err,comment) {
                post.comment.push(comment);
                post.save();

                res.redirect('back');
                  
              })



        }
        
    })


     



    
}