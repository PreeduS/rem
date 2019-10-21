import * as Joi from 'joi';

const local = {
    signUp: (
        Joi.object().keys({
            username: Joi.string().min(6).max(30).required(),
            password: Joi.string().min(6).max(30).required(),
        }).required()
    )
}

export const schema = {
    local
}