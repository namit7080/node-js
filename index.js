const express= require('express');
const app = express();
const port= 8000;
const cookieParser= require('cookie-parser');




// Import mongodb;
const mongoose= require('./config/mongoose');

//Import Schema
// const Myschema= require('./models/schema');

// Import Ejs-layout in which html code will be enjected.
const expresslayout= require('express-ejs-layouts');

// Import Express Session
const session= require('express-session');

// Import Passport
const passport= require('passport');

const MongoStore= require('connect-mongo')(session);

// Import Passport stagety path
const  passportLocal= require('./config/passport-local');
const { db } = require('./models/model');

// set the middleware 
app.use(express.urlencoded());

//app.use(cookieParser());

// telling our app to use expresslyout and alwys before route function is mandotry
app.use(expresslayout);

// Set the View Engine
app.set('view engine','ejs');    // .set for views engine

// Set the path of views
app.set('views','./views');     // .set for views


// Session Encrypted cookies - Automatically the user’s id will be encrypted and stored into session cookies
// Mongo Store 
app.use(session({
    name:'codeial',
    // To do Change Before Deployement
    secret:'something',
    saveUninitialized:false,
    resave:'false',
    cookie:{
       maxAge:(1000*10*60)
    },
    store: new MongoStore({
        mongooseConnection :db,
        autoRemove:'disabled'
        
    },
       function (err) {
      console.log(error);
     }
    )
    
}));

// It is intialize the passport in app
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthentication);


// telling app our router and will done after all intialize
app.use('/',require('./router'));

// set the static file like css,js etc.
app.use(express.static('asset'));



app.listen(port,function(err){
   if(err){
      console.log(err); return;
   }
   console.log(`server is running on port :${port}`);

});

