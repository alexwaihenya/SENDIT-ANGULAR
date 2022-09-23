import Joi from 'joi'

export const parcelSchema = Joi.object({
    senderemail: Joi.string().required().email(),
    receiveremail:Joi.string().required().email(),
    parcel_desc:Joi.string().required(),
    fromLoc:Joi.string().required(),
    fromLat:Joi.number().required(),
    fromLong:Joi.number().required(),
    toLoc:Joi.string().required(),
    toLat:Joi.number().required(),
    toLong:Joi.number().required(),
    status:Joi.string().required(),
    weight:Joi.number().required(),
    price:Joi.number().required()
})