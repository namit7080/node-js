const Usertable= require('../models/model');
const { use } = require('../router');


module.exports.singup= function(req,res){
     if(req.isAuthenticated()){
          return res.redirect('/user/profile');
      }
      res.render('singup');
      return;
 }

module.exports.myprofile= function(req, res){
     return res.render('userprofile');

};

// get the singup data and crete new account in DB
module.exports.create=function(req,res){
      console.log("Hello Singup")
   if(req.body.password!=req.body.confirmpassword){
        res.redirect('back');
        return;
   }
   Usertable.findOne({email: req.body.email},function(error,obj){
        if(error){
              console.log("Error is there");
              return;
        }
        if(!obj){
                console.log("Data is fedding");
                Usertable.create({
      
                email: req.body.email,
                password: req.body.password,
                name: req.body.name
               },function(err,Usertable){
                  if(error){
                        console.log("Error in singup");
                        return;
                  }
                  return res.redirect('/log-in');
              });

        }
        else{
              res.redirect('back');
        }

   })




}
// module.exports.createSession=function(req,res){
     
//       // find the user
//       Usertable.findOne({email:req.body.email},function(error,user){
//              // handle user find
//             if(error){
//                   console.log("Error is there");
//                   return;
//             }
//             if(user){
//                  // handle password not found
//                     if(user.password!=req.body.password){
//                    //      console.log(user.password)
//                      //      console.log(req.body.password);
//                          return res.redirect('back');
//                      }
//                  console.log(" found")
//                  // handle session creation
//                  res.cookie('user_id',user.id);
//             //   return res.render('userprofile');
//                  return res.redirect('/user/profile');



//             }
//             else{
//                   // handle user not found 
//                   console.log("Not found")
//                   return res.redirect('back');
//             }

//       })


//      // handle user not found


// }

module.exports.createSession= function(req,res){
     console.log("Create Session");
    return res.redirect('/user/profile');
      
}