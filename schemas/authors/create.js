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
    last_name: joi.string()
        .empty('')
        .min(3)
        .messages({
            'string.min': 'Last Name requires 3 characters!'
        }),
    city: joi.string()
        .required()
        .min(3)
        .messages({
            'any.required': 'City is required!',
            'string.base': 'City is required!',
            'string.empty': 'City is required!',
            'string.min': 'City requires 3 characters!'
        }),
    country: joi.string()
        .required()
        .min(3)
        .messages({
            'any.required': 'Country is required!',
            'string.base': 'Country is required!',
            'string.empty': 'Country is required!',
            'string.min': 'Country requires 3 characters!'
        }),
    date: joi.date()
        .max('now')
        .messages({
            'date.max': 'Max date is today!'
        }),
    photo: joi.string()
        .required()
        .uri()
        .min(10)
        .messages({
            'any.required': 'Cover Photo is required!',
            'string.base': 'Cover Photo is required!',
            'string.empty': 'Cover Photo is required!',
            'string.min': 'Cover Photo requires 10 characters!',
            'string.uri': 'Cover Photo must be a valid URL!'
        }),
    user_id: joi.objectId(),
    active: joi.boolean()
})

export default schema