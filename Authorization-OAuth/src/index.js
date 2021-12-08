const express = require("express");
const app = express();
const productCont = require("./controller/product.controller");
// const {login, register} = require("./controller/auth.controller");
const passport = require("./config/passport");
app.use(express.json())
app.use(passport.initialize());
// app.use("/login", login);
// app.use("/register", register);
app.use("/products", productCont);

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.get("/",(req,res)=>{
    res.send("homepage");
})

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
}),
function (req,res){
    return res.json({user: req.user.user, token:req.user.token},)
}
);

// app.use("/register", userController);
module.exports = app;