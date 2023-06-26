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
        })
})

export default schema