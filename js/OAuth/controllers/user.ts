import {getManager} from "typeorm";
import {User} from "~/database/entity/User";
//const JWT = require('jsonwebtoken');
import * as JWT from 'jsonwebtoken'
import keys from '~/config/keys';



export const signUpLocal = async (req, res, next) => {
    //const {username, password} = req.body //.value.body;
    const {username, password, email} = req.body; //"username20"

    console.log('username ',username)
    try{
        const user = await User.findOne({
            where: {username},
            select:['username']
        });
 
        console.log('user ',user)
        if(user){
            return res.status(409).send(`User ${user.username} is taken`)
        }


        //add to db
        try{
            await User.insert({
                username,
                email:'ph',
                password:'ph',
            })
        }catch(e){
            return res.status(400).send(e)
        }


        //sign token
        const token = JWT.sign({
            //iat: new Date().getTime()
            user:{
                name: username
            }
        },keys.jwt.secret, { expiresIn: '1h' });
        
        res.status(200).send({token})
    }catch(e){
        res.status(500);
        throw e;
    }
}