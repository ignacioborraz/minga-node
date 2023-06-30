import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string()
        .required()
        .min(3)
        .messages({
            'any.required': 'Name is required!',
            'string.base': 'Name is required!',
            'string.empty': 'Name is required!',
            'string.min': 'Name requires 3 characters!'
        }),
    description: joi.string()
        .required()
        .min(10)
        .messages({
            'any.required': 'Description is required!',
            'string.base': 'Description is required!',
            'string.empty': 'Description is required!',
            'string.min': 'Description requires 10 characters!'
        }),
    logo: joi.string()
        .required()
        .uri()
        .min(10)
        .messages({
            'any.required': 'Logo is required!',
            'string.base': 'Logo is required!',
            'string.empty': 'Logo is required!',
            'string.min': 'Logo requires 10 characters!',
            'string.uri': 'Logo must be a valid URL!'
        }),
    website: joi.string()
        .required()
        .uri()
        .min(10)
        .messages({
            'any.required': 'Website is required!',
            'string.base': 'Website is required!',
            'string.empty': 'Website is required!',
            'string.min': 'Website requires 10 characters!',
            'string.uri': 'Website must be a valid URL!'
        }),
    user_id: joi.objectId(),
    active: joi.boolean()
})

export default schema