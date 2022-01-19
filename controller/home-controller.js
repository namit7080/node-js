const Post= require('../models/post');

module.exports.home=function(req, res){

     Post.find({}).
     populate('user').
     populate({
          path:'comment',
          populate:{
               path:'user'
          }
     }).
     exec(function (err,post) {
         return res.render('main',{
              post:post
         });


     });
          
     
    
};
module.exports.login=function(req,res){
     if(req.isAuthenticated()){
          return res.redirect('/user/profile');
      }
       res.render('login');
       return;
}
module.exports.destroysession= function (req,res) {
     
     res.clearCookie('codeial');
     //req.logout();
     return res.redirect('/');

     
}



// module.export.action= function(req, res){}