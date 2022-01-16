const mongoose= require('mongoose');
const user_infp= new mongoose.Schema({
     email:{
         type:'string',
         required:true,
         unique:true
     },
     password:{
        type:'string',
        required:true

     },
     name:{
         type:'string',
         required:true
     }
},{
    timestamps:true
});
const USER= mongoose.model('USER',user_infp);
module.exports=USER;