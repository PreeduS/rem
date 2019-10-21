const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local'

import { User } from "~/database/entity/User";

import keys from '~/config/keys';

const passportSetup = () => {
    passport.use(
        new GoogleStrategy({
            clientID: '968933782945-qj1sv66nvttj60v1ejqtel6o8gntnvf8.apps.googleusercontent.com',
            clientSecret: 'c9loFlzjjuKSW2GjIPTSq4Wx',
            callbackURL:'/auth/google/callback'
    
        },(accessToken, refreshToken, profile, done) => {
            //called before the auth redirect
            console.log('passport callback', profile)

            //check if exists in db
            //add/update to db

            //return done(...);    
        })
    );
    passport.use(
        new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromHeader('authorization'),
            secretOrKey: keys.jwt.secret
        }, async (payload, done) => {
            console.log('jwt payload ', payload)
            try{
                //find user in db
                const {user} = payload;
                const userResult = await User.findOne({
                    where: {username: user.username},
                    select:['username']
                });
                console.log('from jwt userResult ',userResult)

                //no user
                if(!user){
                    return done(null, false);   
                }
                return done(null, user);    
 
            }catch(e){
                return done(e, false);
            }
        })
    );

    passport.use(
        new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            session: false
        }, async (username, password, done) => {
            console.log('local ',username, password)
            try{
                //find user
                const user = await User.findOne({
                    where: {username},
                    select:['username','password']
                });

                //no user
                if(!user){
                    return done(null, false);   
                }
 
                //check if password match
                //add hash later
                if(user.password !== password){
                    return done(null, false);   
                }

                return done(null, user);    
                
            }catch(e){
                return done(e, false);
            }
        })
    )
}

export default passportSetup