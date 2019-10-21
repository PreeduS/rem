const router = require('express').Router();

import { validateBody } from '~/app/common/validation';
import { schema } from './authValidation';
import  { authController }  from './authController';

//temp
import passport from 'passport'


router.post('/local/signup', validateBody(schema.local.signUp), authController.local.signUp);

router.post('/local/signin', passport.authenticate('local', {session: false}) , authController.local.signIn);

//passport.authenticate('local', {session: false}) 
//for /local/signin -> user available in req.user

//tmp
//token
router.post('/secret/jwt', passport.authenticate('jwt', {session: false}) , (req, res) =>  res.send('secret jwt') )

//username & password
router.post('/secret/local', passport.authenticate('local', {session: false}) , (req, res) =>  res.send('secret local') )

export default router;


/*
const router = require('express').Router();
import { signUpController } from ''
import { validateBody } from '~/app/commons'
import { 
    signUpSchema
    signInSchema
    signOutSchema
} from './AuthValidation'

router.get('signUpSchema', validateBody(signUpSchema), signUpController)

export default router*/
