const router = require('express').Router();
const passport = require('passport');
import { signUpLocal } from '~/controllers/user';

import { validateSignUp } from '~/helpers/validation/auth'
/*
router.get('/login', (req, res) => {
    res.send('login page')
})
*/



router.post('/signUpLocal', validateSignUp, signUpLocal)

///callback?code=4/CAHCeGPb0PWu-q8M1_2--xEXQIPgRfZIDgqkAl4FpASYJETMZMASfZZWeKNQp1uTqnz52BZBReGcVGi6oJ7dgI0&scope=profile%20https://www.googleapis.com/auth/userinfo.profile
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}))

router.get('/google/callback', passport.authenticate('google'),(req, res) => {
    console.log('google callback')
    res.send('google callback ')
})

module.exports = router;