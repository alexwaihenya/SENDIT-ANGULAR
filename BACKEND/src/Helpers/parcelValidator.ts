import Joi from 'joi'

export const parcelSchema = Joi.object({
    senderemail: Joi.string().required().email(),
    receiveremail:Joi.string().required().email(),
    fromLoc:Joi.string().required(),
    toLoc:Joi.string().required(),
    status:Joi.string().required(),
    weight:Joi.number().required(),
    price:Joi.number().required()
})