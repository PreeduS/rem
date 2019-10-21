import * as Joi from 'joi';

type ValidateBody = (schema: Joi.SchemaLike) => (...params) => any

export const validateBody: ValidateBody = (schema) => (req, res, next) => {
    const data = req.body;
    const result = Joi.validate(data, schema);

    if(result.error){
        return res.status(400).send(result.error);
    }
    next();
}