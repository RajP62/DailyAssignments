const passport = require("passport");
require("dotenv").config();
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require("../model/user.model");
const {genToken} = require("../controller/auth.controller");


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_AUTH_CLIENTID,
    clientSecret: process.env.GOOGLE_AUTH_CLIENTSECRET,
    callbackURL: "http://localhost:2000/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
      console.log(accessToken,refreshToken,profile);
      let user = await User.find({email:profile?._json.email}).lean().exec();

      if(!user || user.length==0){
          user = await User.create({email:profile?._json?.email, name:profile?._json?.name});
      }

      const token = genToken(user);

      return done(null, {user, token});
  }
));

module.exports = passport;