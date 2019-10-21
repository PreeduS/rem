import { User } from "~/database/entity/User";
//const JWT = require('jsonwebtoken');
import * as JWT from 'jsonwebtoken'
import keys from '~/config/keys';
import {TUser} from '~/app/common/types/user';

const signToken = (payload) => {
    const token = JWT.sign({
        //iat: new Date().getTime()
        user: payload
    },keys.jwt.secret, { expiresIn: '1h' });

    return token;
}

export const signUp = async (req, res) => {

    const {username, password, email} = req.body; 

    //console.log('username ',username)
    try{
        const user = await User.findOne({
            where: {username},
            select:['username']
        });
 
        //console.log('user ',user)
        if(user){
            return res.status(409).send(`User ${user.username} is taken`)
        }


        //add to db
        let userResult;
        try{
            userResult = await User.insert({
                username,
                email:'123456',
                password:'123456',
            });

           
        }catch(e){
            return res.status(400).send(e)
        }
        
        const userId = userResult.id;
        //sign token
        const userData: TUser = {
            id: userId,
            username
        }
        const token = signToken(userData);
        
        res.status(200).send({token})
    }catch(e){
        res.status(500);
        throw e;
    }
}


export const signIn = (req, res) => {
    console.log('req.user ',req.user)
    //const {username, password} = req.user; 

    const token = signToken(req.user);
    res.status(200).send({token})
    //return token

}