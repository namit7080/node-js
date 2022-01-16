const passport = require('passport');

// Strategy Use in the passport
const LocalStagety = require('passport-local').Strategy;

// Import Schema
const User = require('../models/model');

//authentication using Passport
passport.use(new LocalStagety({
    usernameField: 'email'
},
    function (email, password, done) {
        // find a user and establish identity
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log("There is an Error by Passport");
                return done(err);
            }
            // If user not found or password is Incorrect
            if (!user || user.password != password) {
                console.log("Invalid UserName/password");
                return done(null, false);
            }

            // If user is found and password is also match
            return done(null, user);
        })

    }
))

// Serialize Function
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (error, user) {
        if (error) {
            console.log("There is an Error by Passport");
            return done(error);
        }
        return done(null, user);
    })
})

// Check if the User is Authenticated
passport.checkauthentication = function (req, res, next) {

    // If the user is Authenticated return to next function which is controller
    if (req.isAuthenticated()) {
        return next();
    }
    // If the user not sign in 
    return res.redirect('/');

}

passport.setAuthentication = function (req, res, next) {

    if (req.isAuthenticated()) {

        //  req. user contain the information from cookies and it will return to the res.local for views  
        res.locals.user = req.user;
    }
    next();


}


module.exports = passport;

