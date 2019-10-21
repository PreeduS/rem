//const Joi = require('joi');
import * as Joi from 'joi';

type User = {
    username: string
}

export const validateSignUp =  (req, res, next) => {
    console.log('body', req.body)
    const user: User = req.body;
    const schema = Joi.object().keys({
        username: Joi.string().min(6).max(30).required(),
    }).required()


    const result = Joi.validate(user, schema);

    if(result.error){
        return res.status(400).send(result.error)
    }
    next();

}