const mongoose= require('mongoose');

const commnet= new mongoose.Schema({
    
    comment:{
        type:'string',
        required:true
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
         ref: 'USER'
     },
     post:{
         type: mongoose.Schema.Types.ObjectId,
         ref:'Post'

     }
},{
    timestamps:true
});

const Comment= mongoose.model('Comment',commnet);
module.exports= Comment;