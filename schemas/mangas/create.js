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
    description: joi.string()
        .required()
        .min(10)
        .messages({
            'any.required': 'Description is required!',
            'string.base': 'Description is required!',
            'string.empty': 'Description is required!',
            'string.min': 'Description requires 10 characters!'
        }),
    cover_photo: joi.string()
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
    author_id: joi.objectId(),
    company_id: joi.objectId(),
    category_id: joi.objectId()
        .required()
        .messages({
            'any.required': 'Category is required!',
            'string.base': 'Category is required!',
            'string.empty': 'Category is required!'
        })

})

export default schema