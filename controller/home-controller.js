module.exports.home=function(req, res){
     // res.end('<h1>Hello User How are you <h1>');
     res.render('main');
     return;
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