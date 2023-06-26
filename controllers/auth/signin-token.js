import User from "../../models/User.js"

export default async(req,res,next)=> {
    try {
        const user = await User.findOne({ email: req.user.email })
        req.user = {
            email: user.email,
            photo: user.photo,
            role: user.role
        }
        return res.status(200).json({
            response: { token: req.token, user: req.user },
            message: 'User signin with token'
        })
    } catch (error) {
        next(error)
    }
}