import joi from 'joi'

const schema = joi.object({
    email: joi.string()
        .required()
        .email({ minDomainSegments: 2  })
        .messages({
            'any.required': 'Email is required!',
            'string.base': 'Email is required!',
            'string.empty': 'Email is required!',
            'string.email': 'Invalid format email!'
        }),
    password: joi.string().required()
        .min(8)
        .alphanum()
        .messages({
            'any.required': 'Password is required!',
            'string.base': 'Password is required!',
            'string.empty': 'Password is required!',
            'string.min': 'Password is too short!',
            'string.alphanum':'Password must be alphanum!'
        }),
    photo: joi.string().required()
        .min(10)
        .uri()
        .messages({
            'any.required': 'Photo is required!',
            'string.base': 'Photo is required!',
            'string.empty': 'Photo is required!',
            'string.min': 'Photo is too short!',
            'string.uri':'Password must be an URL!'
        })
})

export default schema