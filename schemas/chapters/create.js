import joi from 'joi-oid'

const schema = joi.object({
    title: joi.string()
        .required()
        .min(3)
        .messages({
            'any.required': 'Title is required!',
            'string.base': 'Title is required!',
            'string.empty': 'Title is required!',
            'string.min': 'Title requires 3 characters!'
        }),
    pages: joi.array()
        .required()
        .items(joi.string().uri().min(10).messages({
            'any.required': 'Page is required!',
            'string.base': 'Page is required!',
            'string.empty': 'Page is required!',
            'string.min': 'Page requires 10 characters!',
            'string.uri': 'Page must be a valid URL!'
        })),
    manga_id: joi.required()//.objectId()
})

export default schema