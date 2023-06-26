import User from '../models/User.js'

export default async function accountExistsSignIn(req,res,next) {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        req.user = {
            _id: user._id,
            email: user.email,
            photo: user.photo,
            password: user.password,
            role: user.role
        }
        return next()
    }
    console.log('not exists!')
    return res.status(400).json({
        response: null,
        messages: ['User does not exist!']
    })
}